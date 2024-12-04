
const diff = require("diff");
const fs = require("fs/promises");
const os = require("os");
const path = require("path");
const LIST_FILES_LIMIT = 200;
const { combineApiRequests } = require("./shared/combineApiRequests");
const { combineCommandSequences } = require("./shared/combineCommandSequences");
const { getApiMetrics } = require("./shared/getApiMetrics");
const { findLast, findLastIndex, formatContentBlockToMarkdown, truncateHalfConversation } = require("./utils");

const { send_message_to_ui, ask_question } = require("./utils/codebolt-helper");
const { getModuleDetailByName } = require('./modules/index');
const { getTools,getSystemPrompt } = require("./prompt/system");
let cwd;

const ApproveButtons = {
	RETRY: "Retry",
	PROCEED_ANYWAYS: "Proceed Anyways",
	SAVE: "Save",
	APPROVE: "Approve",
	RUN_COMMAND: "Run Command",
	RESUME_TASK: "Resume Task",
	START_NEW_TASK: "Start New Task",
	YES: "Yes"

};
const tools = getTools();

class CodeboltDev {
	constructor(
		provider,
		apiConfiguration,
		customInstructions,
		alwaysAllowReadOnly,
		task,
		images,
		historyItem,
		response
	) {
		this.taskId = '';
		this.didEditFile = false;
		this.apiConversationHistory = [];
		this.claudeMessages = [];
		this.consecutiveMistakeCount = 0;
		this.abort = false;

		this.providerRef = new WeakRef(provider);
		this.api = buildApiHandler(apiConfiguration);
		this.terminalManager = //new TerminalManager();
			this.customInstructions = customInstructions;
		this.alwaysAllowReadOnly = alwaysAllowReadOnly ?? false;

		if (historyItem) {
			this.taskId = historyItem.id;
			this.resumeTaskFromHistory();
		} else if (task || images) {
			this.taskId = Date.now().toString();
			// console.log(task)
			this.startTask(task, images, response);
		} else {
			console.log("Either historyItem or task/images must be provided")
			throw new Error("Either historyItem or task/images must be provided");
		}
	}

	async handleWebviewAskResponse(askResponse, text, images) {
		this.askResponse = askResponse
		this.askResponseText = text
		this.askResponseImages = images
	}

	async ask(
		type,
		question
	) {
		// console.log(type, question)
		// If this ClaudeDev instance was aborted by the provider, then the only thing keeping us alive is a promise still running in the background, in which case we don't want to send its result to the webview as it is attached to a new instance of ClaudeDev now. So we can safely ignore the result of any active promises, and this class will be deallocated. (Although we set claudeDev = undefined in provider, that simply removes the reference to this instance, but the instance is still alive until this promise resolves or rejects.)
		if (this.abort) {
			throw new Error("ClaudeDev instance aborted")
		}
		this.askResponse = undefined
		this.askResponseText = undefined
		this.askResponseImages = undefined
		const askTs = Date.now()
		this.lastMessageTs = askTs
		await this.addToClaudeMessages({ ts: askTs, type: "ask", ask: type, text: question })
		// await this.providerRef.deref()?.postStateToWebview()
		let codeboltAskReaponse = await ask_question(question, type);
		if (codeboltAskReaponse.type === "confirmationResponse") {
			this.handleWebviewAskResponse(codeboltAskReaponse.message.userMessage, undefined, [])
		}
		else {
			codeboltAskReaponse.type === "feedbackResponse"
			this.handleWebviewAskResponse("messageResponse", codeboltAskReaponse.message.userMessage, [])
		}
		// await pWaitFor(() => this.askResponse !== undefined || this.lastMessageTs !== askTs, { interval: 100 })
		if (this.lastMessageTs !== askTs) {
			//throw new Error("Current ask promise was ignored") // could happen if we send multiple asks in a row i.e. with command_output. It's important that when we know an ask could fail, it is handled gracefully
		}
		if (!this.askResponse) {
			// Finish the process or exit the function
			return;
		}
		// await pWaitFor(() => this.askResponse !== undefined || this.lastMessageTs !== askTs, { interval: 100 })
		if (this.lastMessageTs !== askTs) {
			//throw new Error("Current ask promise was ignored") // could happen if we send multiple asks in a row i.e. with command_output. It's important that when we know an ask could fail, it is handled gracefully
		}
		const result = { response: this.askResponse, text: this.askResponseText, images: this.askResponseImages }
		this.askResponse = undefined
		this.askResponseText = undefined
		this.askResponseImages = undefined
		return result
	}

	async say(type, text, images, isUserMessage = false) {
		if (this.abort) {
			throw new Error("ClaudeDev instance aborted")
		}
		const sayTs = Date.now()
		this.lastMessageTs = sayTs
		await this.addToClaudeMessages({ ts: sayTs, type: "say", say: type, text: text, images })
		// await this.providerRef.deref()?.postStateToWebview()
		if (type == "text" || type == "error" || type == "tool" || type == "command")
			if (text != "" && !isUserMessage)
				send_message_to_ui(text, type);
	}

	async startTask(task, images, response) {
		// conversationHistory (for API) and claudeMessages (for webview) need to be in sync
		// if the extension process were killed, then on restart the claudeMessages might not be empty, so we need to set it to [] when we create a new ClaudeDev client (otherwise webview would show stale messages from previous session)
		this.claudeMessages = []
		this.apiConversationHistory = []
		await this.providerRef.deref()?.postStateToWebview()
		let { projectPath } = await codebolt.project.getProjectPath(); //currentProjectPath();
		cwd = projectPath
		// codebolt_instructions = await getInstructionsForAgent();
		await this.say("text", task, images, true)

		let imageBlocks = this.formatImagesIntoBlocks(images)
		await this.initiateTaskLoop([
			{
				type: "text",
				text: `<task>\n${task}\n</task>`,
			},
			...imageBlocks,
		])
		response("ok")
	}

	async resumeTaskFromHistory() {
		const modifiedClaudeMessages = await this.getSavedClaudeMessages()

		// Need to modify claude messages for good ux, i.e. if the last message is an api_request_started, then remove it otherwise the user will think the request is still loading
		const lastApiReqStartedIndex = modifiedClaudeMessages.reduce(
			(lastIndex, m, index) => (m.type === "say" && m.say === "api_req_started" ? index : lastIndex),
			-1
		)
		const lastApiReqFinishedIndex = modifiedClaudeMessages.reduce(
			(lastIndex, m, index) => (m.type === "say" && m.say === "api_req_finished" ? index : lastIndex),
			-1
		)
		if (lastApiReqStartedIndex > lastApiReqFinishedIndex && lastApiReqStartedIndex !== -1) {
			modifiedClaudeMessages.splice(lastApiReqStartedIndex, 1)
		}

		// Remove any resume messages that may have been added before
		const lastRelevantMessageIndex = findLastIndex(
			modifiedClaudeMessages,
			(m) => !(m.ask === "resume_task" || m.ask === "resume_completed_task")
		)
		if (lastRelevantMessageIndex !== -1) {
			modifiedClaudeMessages.splice(lastRelevantMessageIndex + 1)
		}

		await this.overwriteClaudeMessages(modifiedClaudeMessages)
		this.claudeMessages = await this.getSavedClaudeMessages()

		// Now present the claude messages to the user and ask if they want to resume

		const lastClaudeMessage = this.claudeMessages
			.slice()
			.reverse()
			.find((m) => !(m.ask === "resume_task" || m.ask === "resume_completed_task")) // could be multiple resume tasks
		// const lastClaudeMessage = this.claudeMessages[lastClaudeMessageIndex]
		// could be a completion result with a command
		// const secondLastClaudeMessage = this.claudeMessages
		// 	.slice()
		// 	.reverse()
		// 	.find(
		// 		(m, index) =>
		// 			index !== lastClaudeMessageIndex && !(m.ask === "resume_task" || m.ask === "resume_completed_task")
		// 	)
		// (lastClaudeMessage?.ask === "command" && secondLastClaudeMessage?.ask === "completion_result")

		let askType
		if (lastClaudeMessage?.ask === "completion_result") {
			askType = "resume_completed_task"
		} else {
			askType = "resume_task"
		}

		const { response, text, images } = await this.ask(askType) // calls poststatetowebview
		let responseText
		let responseImages
		if (response === "messageResponse") {
			await this.say("user_feedback", text, images)
			responseText = text
			responseImages = images
		}

		// need to make sure that the api conversation history can be resumed by the api, even if it goes out of sync with claude messages

		// if the last message is an assistant message, we need to check if there's tool use since every tool use has to have a tool response
		// if there's no tool use and only a text block, then we can just add a user message

		// if the last message is a user message, we can need to get the assistant message before it to see if it made tool calls, and if so, fill in the remaining tool responses with 'interrupted'

		const existingApiConversationHistory =
			await this.getSavedApiConversationHistory()

		let modifiedOldUserContent // either the last message if its user message, or the user message before the last (assistant) message
		let modifiedApiConversationHistory // need to remove the last user message to replace with new modified user message
		if (existingApiConversationHistory.length > 0) {
			const lastMessage = existingApiConversationHistory[existingApiConversationHistory.length - 1]

			if (lastMessage.role === "assistant") {
				const content = Array.isArray(lastMessage.content)
					? lastMessage.content
					: [{ type: "text", text: lastMessage.content }]
				const hasToolUse = content.some((block) => block.type === "tool_use")

				if (hasToolUse) {
					const toolUseBlocks = content.filter(
						(block) => block.type === "tool_use"
					)
					const toolResponses = toolUseBlocks.map((block) => ({
						type: "tool_result",
						tool_use_id: block.id,
						content: "Task was interrupted before this tool call could be completed.",
					}))
					modifiedApiConversationHistory = [...existingApiConversationHistory] // no changes
					modifiedOldUserContent = [...toolResponses]
				} else {
					modifiedApiConversationHistory = [...existingApiConversationHistory]
					modifiedOldUserContent = []
				}
			} else if (lastMessage.role === "user") {
				const previousAssistantMessage =
					existingApiConversationHistory[existingApiConversationHistory.length - 2]

				const existingUserContent = Array.isArray(lastMessage.content)
					? lastMessage.content
					: [{ type: "text", text: lastMessage.content }]
				if (previousAssistantMessage && previousAssistantMessage.role === "assistant") {
					const assistantContent = Array.isArray(previousAssistantMessage.content)
						? previousAssistantMessage.content
						: [{ type: "text", text: previousAssistantMessage.content }]

					const toolUseBlocks = assistantContent.filter(
						(block) => block.type === "tool_use"
					)

					if (toolUseBlocks.length > 0) {
						const existingToolResults = existingUserContent.filter(
							(block) => block.type === "tool_result"
						)

						const missingToolResponses = toolUseBlocks
							.filter(
								(toolUse) => !existingToolResults.some((result) => result.tool_use_id === toolUse.id)
							)
							.map((toolUse) => ({
								type: "tool_result",
								tool_use_id: toolUse.id,
								content: "Task was interrupted before this tool call could be completed.",
							}))

						modifiedApiConversationHistory = existingApiConversationHistory.slice(0, -1) // removes the last user message
						modifiedOldUserContent = [...existingUserContent, ...missingToolResponses]
					} else {
						modifiedApiConversationHistory = existingApiConversationHistory.slice(0, -1)
						modifiedOldUserContent = [...existingUserContent]
					}
				} else {
					modifiedApiConversationHistory = existingApiConversationHistory.slice(0, -1)
					modifiedOldUserContent = [...existingUserContent]
				}
			} else {
				throw new Error("Unexpected: Last message is not a user or assistant message")
			}
		} else {
			throw new Error("Unexpected: No existing API conversation history")
		}

		let newUserContent = [...modifiedOldUserContent]

		const agoText = (() => {
			const timestamp = lastClaudeMessage?.ts ?? Date.now()
			const now = Date.now()
			const diff = now - timestamp
			const minutes = Math.floor(diff / 60000)
			const hours = Math.floor(minutes / 60)
			const days = Math.floor(hours / 24)

			if (days > 0) {
				return `${days} day${days > 1 ? "s" : ""} ago`
			}
			if (hours > 0) {
				return `${hours} hour${hours > 1 ? "s" : ""} ago`
			}
			if (minutes > 0) {
				return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
			}
			return "just now"
		})()

		newUserContent.push({
			type: "text",
			text:
				`Task resumption: This autonomous coding task was interrupted ${agoText}. It may or may not be complete, so please reassess the task context. Be aware that the project state may have changed since then. The current working directory is now '${cwd}'. If the task has not been completed, retry the last step before interruption and proceed with completing the task.` +
				(responseText
					? `\n\nNew instructions for task continuation:\n<user_message>\n${responseText}\n</user_message>`
					: ""),
		})

		if (responseImages && responseImages.length > 0) {
			newUserContent.push(...this.formatImagesIntoBlocks(responseImages))
		}

		await this.overwriteApiConversationHistory(modifiedApiConversationHistory)
		await this.initiateTaskLoop(newUserContent)
	}

	async initiateTaskLoop(userContent) {
		let nextUserContent = userContent
		let includeFileDetails = true
		while (!this.abort) {
			const { didEndLoop } = await this.recursivelyMakeClaudeRequests(nextUserContent, includeFileDetails)
			includeFileDetails = false // we only need file details the first time

			//  The way this agentic loop works is that claude will be given a task that he then calls tools to complete. unless there's an attempt_completion call, we keep responding back to him with his tool's responses until he either attempt_completion or does not use anymore tools. If he does not use anymore tools, we ask him to consider if he's completed the task and then call attempt_completion, otherwise proceed with completing the task.
			// There is a MAX_REQUESTS_PER_TASK limit to prevent infinite requests, but Claude is prompted to finish the task as efficiently as he can.

			//const totalCost = this.calculateApiCost(totalInputTokens, totalOutputTokens)
			if (didEndLoop) {
				// For now a task never 'completes'. This will only happen if the user hits max requests and denies resetting the count.
				//this.say("task_completed", `Task completed. Total API usage cost: ${totalCost}`)
				break
			} else {
				// this.say(
				// 	"tool",
				// 	"Claude responded with only text blocks but has not called attempt_completion yet. Forcing him to continue with task..."
				// )
				nextUserContent = [
					{
						type: "text",
						text: "If you have completed the user's task, use the attempt_completion tool. If you require additional information from the user, use the ask_followup_question tool. Otherwise, if you have not completed the task and do not need additional information, then proceed with the next step of the task. (This is an automated message, so do not respond to it conversationally.)",
					},
				]
				this.consecutiveMistakeCount++
			}
		}
	}


	async executeTool(toolName, toolInput) {
		switch (toolName) {
			case "write_to_file": {
				let { success, result } = await codebolt.fs.writeToFile(toolInput.path, toolInput.content);
				return [success, result];
			}

			case "read_file": {
				let { success, result } = await codebolt.fs.readFile(toolInput.path);
				return [success, result]
			}

			case "list_files":
				{
					let { success, result } = await codebolt.fs.listFile(toolInput.path, toolInput.recursive);
					return [success, result]
				}

			case "list_code_definition_names":
				{
					let { success, result } = await codebolt.fs.listCodeDefinitionNames(toolInput.path);
					return [success, result]
				}

			case "search_files":
				{
					let { success, result } = await codebolt.fs.searchFiles(toolInput.path, toolInput.regex, toolInput.filePattern);
					return [success, result]
				}

			case "execute_command":
				{
					let { success, result } = await codebolt.terminal.executeCommand(toolInput.command, false);
					return [success, result]
				}

			case "ask_followup_question":
				return this.askFollowupQuestion(toolInput.question)
			case "attempt_completion":
				return this.attemptCompletion(toolInput.result, toolInput.command)
			case "project_summaries":
				return getModuleDetailByName(toolInput.project_name)
			default:
				return [false, `Unknown tool: ${toolName}`]
		}

	}

	/**
	 * Asynchronously creates all non-existing subdirectories for a given file path
	 * and collects them in an array for later deletion.
	 *
	 * @param filePath - The full path to a file.
	 * @returns A promise that resolves to an array of newly created directories.
	 */
	async createDirectoriesForFile(filePath) {
		const newDirectories = []
		const normalizedFilePath = path.normalize(filePath) // Normalize path for cross-platform compatibility
		const directoryPath = path.dirname(normalizedFilePath)

		let currentPath = directoryPath
		const dirsToCreate = []

		// Traverse up the directory tree and collect missing directories
		while (!(await this.exists(currentPath))) {
			dirsToCreate.push(currentPath)
			currentPath = path.dirname(currentPath)
		}

		// Create directories from the topmost missing one down to the target directory
		for (let i = dirsToCreate.length - 1; i >= 0; i--) {
			await fs.mkdir(dirsToCreate[i])
			newDirectories.push(dirsToCreate[i])
		}

		return newDirectories
	}
	/**
	 * Helper function to check if a path exists.
	 *
	 * @param path - The path to check.
	 * @returns A promise that resolves to true if the path exists, false otherwise.
	 */
	async exists(filePath) {
		try {
			await fs.access(filePath)
			return true
		} catch {
			return false
		}
	}

	createPrettyPatch(filename = "file", oldStr, newStr) {
		const patch = diff.createPatch(filename, oldStr, newStr)
		const lines = patch.split("\n")
		const prettyPatchLines = lines.slice(4)
		return prettyPatchLines.join("\n")
	}

	async closeDiffViews() {
		const tabs = vscode.window.tabGroups.all
			.map((tg) => tg.tabs)
			.flat()
			.filter(
				(tab) =>
					tab.input instanceof vscode.TabInputTextDiff && tab.input?.original?.scheme === "claude-dev-diff"
			)

		for (const tab of tabs) {
			// trying to close dirty views results in save popup
			if (!tab.isDirty) {
				await vscode.window.tabGroups.close(tab)
			}
		}
	}


	getReadablePath(relPath) {
		// path.resolve is flexible in that it will resolve relative paths like '../../' to the cwd and even ignore the cwd if the relPath is actually an absolute path
		const absolutePath = path.resolve(cwd, relPath)
		if (cwd === path.join(os.homedir(), "Desktop")) {
			// User opened vscode without a workspace, so cwd is the Desktop. Show the full absolute path to keep the user aware of where files are being created
			return absolutePath
		}
		if (path.normalize(absolutePath) === path.normalize(cwd)) {
			return path.basename(absolutePath)
		} else {
			// show the relative path to the cwd
			const normalizedRelPath = path.relative(cwd, absolutePath)
			if (absolutePath.includes(cwd)) {
				return normalizedRelPath
			} else {
				// we are outside the cwd, so show the absolute path (useful for when claude passes in '../../' for example)
				return absolutePath
			}
		}
	}

	formatFilesList(absolutePath, files) {
		const sorted = files
			.map((file) => {
				// convert absolute path to relative path
				const relativePath = path.relative(absolutePath, file)
				return file.endsWith("/") ? relativePath + "/" : relativePath
			})
			// Sort so files are listed under their respective directories to make it clear what files are children of what directories. Since we build file list top down, even if file list is truncated it will show directories that claude can then explore further.
			.sort((a, b) => {
				const aParts = a.split("/")
				const bParts = b.split("/")
				for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
					if (aParts[i] !== bParts[i]) {
						// If one is a directory and the other isn't at this level, sort the directory first
						if (i + 1 === aParts.length && i + 1 < bParts.length) {
							return -1
						}
						if (i + 1 === bParts.length && i + 1 < aParts.length) {
							return 1
						}
						// Otherwise, sort alphabetically
						return aParts[i].localeCompare(bParts[i], undefined, { numeric: true, sensitivity: "base" })
					}
				}
				// If all parts are the same up to the length of the shorter path,
				// the shorter one comes first
				return aParts.length - bParts.length
			})
		if (sorted.length >= LIST_FILES_LIMIT) {
			const truncatedList = sorted.slice(0, LIST_FILES_LIMIT).join("\n")
			return `${truncatedList}\n\n(Truncated at ${LIST_FILES_LIMIT} results. Try project_summaries  if you need to get full detail of every file in  backend or frontend.)`
		} else if (sorted.length === 0 || (sorted.length === 1 && sorted[0] === "")) {
			return "No files found or you do not have permission to view this directory."
		} else {
			return sorted.join("\n")
		}
	}

	async askFollowupQuestion(question) {
		if (question === undefined) {
			this.consecutiveMistakeCount++
			return [false, await this.sayAndCreateMissingParamError("ask_followup_question", "question")]
		}
		this.consecutiveMistakeCount = 0
		const { text, images } = await this.ask("followup", question)
		await this.say("user_feedback", text ?? "", images)
		return [false, this.formatToolResponseWithImages(`<answer>\n${text}\n</answer>`, images)]
	}

	async attemptCompletion(result, command) {
		// result is required, command is optional
		if (result === undefined) {
			this.consecutiveMistakeCount++
			return [false, await this.sayAndCreateMissingParamError("attempt_completion", "result")]
		}
		this.consecutiveMistakeCount = 0
		let resultToSend = result
		// if (command) {
		// 	await this.say("completion_result", resultToSend)
		// 	// TODO: currently we don't handle if this command fails, it could be useful to let claude know and retry
		// 	const [didUserReject, commandResult] = await executeCommand(command, true)
		// 	// if we received non-empty string, the command was rejected or failed
		// 	if (commandResult) {
		// 		return [didUserReject, commandResult]
		// 	}
		// 	resultToSend = ""
		// }

		// const { response, text, images } = await this.ask("completion_result", resultToSend) // this prompts webview to show 'new task' button, and enable text input (which would be the 'text' here)
		// if (!Object.values(ApproveButtons).includes(response)) {
		return [false, ""] // signals to recursive loop to stop (for now this never happens since yesButtonTapped will trigger a new task)
		// }
		await this.say("user_feedback", text ?? "", images)
		return [
			true,
			this.formatToolResponseWithImages(
				`The user has provided feedback on the results. Consider their input to continue the task, and then attempt completion again.\n<feedback>\n${text}\n</feedback>`,
				images
			),
		]
	}

	async attemptApiRequest() {
		try {
			// let projectPath = await currentProjectPath();
			// console.log(projectPath)
			// cwd=projectPath;
			let systemPrompt = await getSystemPrompt()
			if (this.customInstructions && this.customInstructions.trim()) {
				// altering the system prompt mid-task will break the prompt cache, but in the grand scheme this will not change often so it's better to not pollute user messages with it the way we have to with <potentially relevant details>
				systemPrompt += `
====

USER'S CUSTOM INSTRUCTIONS

The following additional instructions are provided by the user. They should be followed and given precedence in case of conflicts with previous instructions.

${this.customInstructions.trim()}
`
			}

			// If the last API request's total token usage is close to the context window, truncate the conversation history to free up space for the new request
			const lastApiReqFinished = findLast(this.claudeMessages, (m) => m.say === "api_req_finished")
			if (lastApiReqFinished && lastApiReqFinished.text) {
				const {
					tokensIn,
					tokensOut,
					cacheWrites,
					cacheReads,
				} = JSON.parse(
					lastApiReqFinished.text
				)
				const totalTokens = (tokensIn || 0) + (tokensOut || 0) + (cacheWrites || 0) + (cacheReads || 0)
				const contextWindow = this.api.getModel().info.contextWindow
				const maxAllowedSize = Math.max(contextWindow - 40_000, contextWindow * 0.8)
				if (totalTokens >= maxAllowedSize) {
					const truncatedMessages = truncateHalfConversation(this.apiConversationHistory)
					await this.overwriteApiConversationHistory(truncatedMessages)
				}
			}

			const { message, userCredits } = await this.api.createMessage(
				systemPrompt,
				this.apiConversationHistory,
				tools
			)
			// const { message, userCredits } = JSON.parse(await fs.readFile("message.json", 'utf-8'));
			// await fs.writeFile(path.join(await this.ensureTaskDirectoryExists(), "message.json"), JSON.stringify(message, null, 2));
			if (userCredits !== undefined) {
				console.log("Updating credits", userCredits)
				// TODO: update credits
			}
			return message
		} catch (error) {
			console.log(error);
			const { serializeError } = await import("serialize-error");

			const { response } = await this.ask(
				"api_req_failed",
				error.message ?? JSON.stringify(serializeError(error), null, 2)
			)
			if (!Object.values(ApproveButtons).includes(response)) {
				// this will never happen since if noButtonTapped, we will clear current task, aborting this instance
				throw new Error("API request failed")
			}
			await this.say("api_req_retried")
			return this.attemptApiRequest()
		}
	}

	async recursivelyMakeClaudeRequests(
		userContent,
		includeFileDetails = false
	) {
		if (this.abort) {
			throw new Error("ClaudeDev instance aborted")
		}

		if (this.consecutiveMistakeCount >= 3) {
			const { response, text, images } = await this.ask(
				"mistake_limit_reached",
				this.api.getModel().id.includes("claude")
					? `This may indicate a failure in his thought process or inability to use a tool properly, which can be mitigated with some user guidance (e.g. "Try breaking down the task into smaller steps").`
					: "Codebolt Dev uses complex prompts and iterative task execution that may be challenging for less capable models. For best results, it's recommended to use Claude 3.5 Sonnet for its advanced agentic coding capabilities."
			)
			if (response === "messageResponse") {
				userContent.push(
					...[
						{
							type: "text",
							text: `You seem to be having trouble proceeding. The user has provided the following feedback to help guide you:\n<feedback>\n${text}\n</feedback>`,
						},
						...this.formatImagesIntoBlocks(images),
					]
				)
			}
			this.consecutiveMistakeCount = 0
		}

		// getting verbose details is an expensive operation, it uses globby to top-down build file structure of project which for large projects can take a few seconds
		// for the best UX we show a placeholder api_req_started message with a loading spinner as this happens
		// sendNotification('debug',"Sending Request To AI ...: View Logs")

		await this.say(
			"api_req_started",
			JSON.stringify({
				request:
					userContent
						.map((block) => formatContentBlockToMarkdown(block, this.apiConversationHistory))
						.join("\n\n") + "\n\n<environment_details>\nLoading...\n</environment_details>",
			})
		)

		// potentially expensive operation
		const environmentDetails = await this.getEnvironmentDetails(includeFileDetails)

		// add environment details as its own text block, separate from tool results
		userContent.push({ type: "text", text: environmentDetails })

		await this.addToApiConversationHistory({ role: "user", content: userContent })

		// since we sent off a placeholder api_req_started message to update the webview while waiting to actually start the API request (to load potential details for example), we need to update the text of that message
		const lastApiReqIndex = findLastIndex(this.claudeMessages, (m) => m.say === "api_req_started")
		this.claudeMessages[lastApiReqIndex].text = JSON.stringify({
			request: userContent
				.map((block) => formatContentBlockToMarkdown(block, this.apiConversationHistory))
				.join("\n\n"),
		})
		await this.saveClaudeMessages()
		await this.providerRef.deref()?.postStateToWebview()

		try {
			const response = await this.attemptApiRequest();

			console.log(response)


			if (this.abort) {
				throw new Error("ClaudeDev instance aborted")
			}
			let assistantResponses = []
			let inputTokens = response.usage.input_tokens
			let outputTokens = response.usage.output_tokens
			let cacheCreationInputTokens =
				(response).usage
					.cache_creation_input_tokens || undefined
			let cacheReadInputTokens =
				(response).usage
					.cache_read_input_tokens || undefined
			// @ts-ignore-next-line
			let totalCost = response.usage.total_cost

			await this.say(
				"api_req_finished",
				JSON.stringify({
					tokensIn: inputTokens,
					tokensOut: outputTokens,
					cacheWrites: cacheCreationInputTokens,
					cacheReads: cacheReadInputTokens,
					// cost:
					// 	totalCost 
					// this.calculateApiCost(
					// 	inputTokens,
					// 	outputTokens,
					// 	cacheCreationInputTokens,
					// 	cacheReadInputTokens
					// ),
				})
			)

			// A response always returns text content blocks (it's just that before we were iterating over the completion_attempt response before we could append text response, resulting in bug)
			for (const contentBlock of response.content) {
				// type can only be text or tool_use
				if (contentBlock.type === "text") {
					assistantResponses.push(contentBlock)
					await this.say("text", contentBlock.text)
				} else if (contentBlock.type === "tool_use") {
					assistantResponses.push(contentBlock)
				}
			}

			// need to save assistant responses to file before proceeding to tool use since user can exit at any moment and we wouldn't be able to save the assistant's response
			if (assistantResponses.length > 0) {
				await this.addToApiConversationHistory({ role: "assistant", content: assistantResponses })
			} else {
				// this should never happen! it there's no assistant_responses, that means we got no text or tool_use content blocks from API which we should assume is an error
				await this.say(
					"error",
					"Unexpected API Response: The language model did not provide any assistant messages. This may indicate an issue with the API or the model's output."
				)
				await this.addToApiConversationHistory({
					role: "assistant",
					content: [{ type: "text", text: "Failure: I did not provide a response." }],
				})
			}

			let toolResults = []
			let attemptCompletionBlock
			let userRejectedATool = false
			for (const contentBlock of response.content) {
				if (contentBlock.type === "tool_use") {
					const toolName = contentBlock.name
					const toolInput = contentBlock.input
					const toolUseId = contentBlock.id

					if (userRejectedATool) {
						toolResults.push({
							type: "tool_result",
							tool_use_id: toolUseId,
							content: "Skipping tool execution due to previous tool user rejection.",
						})
						continue
					}

					if (toolName === "attempt_completion") {
						attemptCompletionBlock = contentBlock
					} else {
						const [didUserReject, result] = await this.executeTool(toolName, toolInput)
						toolResults.push({ type: "tool_result", tool_use_id: toolUseId, content: result })

						if (didUserReject) {
							userRejectedATool = true
						}
					}
				}
			}

			let didEndLoop = false

			// attempt_completion is always done last, since there might have been other tools that needed to be called first before the job is finished
			// it's important to note that claude will order the tools logically in most cases, so we don't have to think about which tools make sense calling before others
			if (attemptCompletionBlock) {
				let [_, result] = await this.executeTool(
					attemptCompletionBlock.name,
					attemptCompletionBlock.input
				)
				// this.say(
				// 	"tool",
				// 	`\nattempt_completion Tool Used: ${attemptCompletionBlock.name}\nTool Input: ${JSON.stringify(
				// 		attemptCompletionBlock.input
				// 	)}\nTool Result: ${result}`
				// )
				if (result === "") {
					didEndLoop = true
					result = "The user is satisfied with the result."
				}
				toolResults.push({ type: "tool_result", tool_use_id: attemptCompletionBlock.id, content: result })
			}

			if (toolResults.length > 0) {
				if (didEndLoop) {
					await this.addToApiConversationHistory({ role: "user", content: toolResults })
					await this.addToApiConversationHistory({
						role: "assistant",
						content: [
							{
								type: "text",
								text: "I am pleased you are satisfied with the result. Do you have a new task for me?",
							},
						],
					})
				} else {
					const {
						didEndLoop: recDidEndLoop,
						inputTokens: recInputTokens,
						outputTokens: recOutputTokens,
					} = await this.recursivelyMakeClaudeRequests(toolResults)
					didEndLoop = recDidEndLoop
					inputTokens += recInputTokens
					outputTokens += recOutputTokens
				}
			}

			return { didEndLoop, inputTokens, outputTokens }
		} catch (error) {
			console.log(error)
			// this should never happen since the only thing that can throw an error is the attemptApiRequest, which is wrapped in a try catch that sends an ask where if noButtonTapped, will clear current task and destroy this instance. However to avoid unhandled promise rejection, we will end this loop which will end execution of this instance (see startTask)
			return { didEndLoop: true, inputTokens: 0, outputTokens: 0 }
		}
	}

	// Formatting responses to Claude

	formatImagesIntoBlocks(images) {
		return images
			? images.map((dataUrl) => {
				// data:image/png;base64,base64string
				const [rest, base64] = dataUrl.split(",")
				const mimeType = rest.split(":")[1].split(";")[0]
				return {
					type: "image",
					source: { type: "base64", media_type: mimeType, data: base64 },
				}
			})
			: []
	}

	formatToolResponseWithImages(text, images) {
		if (images && images.length > 0) {
			const textBlock = { type: "text", text }
			const imageBlocks = this.formatImagesIntoBlocks(images)
			// Placing images after text leads to better results
			return [textBlock, ...imageBlocks]
		} else {
			return text
		}
	}

	async getEnvironmentDetails(includeFileDetails = false) {
		let details = ""

		// It could be useful for claude to know if the user went from one or no file to another between messages, so we always include this context
		details += "\n\n# VSCode Visible Files"
		const visibleFiles = []//vscode.window.visibleTextEditors
			?.map((editor) => editor.document?.uri?.fsPath)
			.filter(Boolean)
			.map((absolutePath) => path.relative(cwd, absolutePath))
			.join("\n")
		if (visibleFiles) {
			details += `\n${visibleFiles}`
		} else {
			details += "\n(No visible files)"
		}

		details += "\n\n# VSCode Open Tabs"
		const openTabs = [] //vscode.window.tabGroups.all
			.flatMap((group) => group.tabs)
			.map((tab) => (tab.input)?.uri?.fsPath)
			.filter(Boolean)
			.map((absolutePath) => path.relative(cwd, absolutePath))
			.join("\n")
		if (openTabs) {
			details += `\n${openTabs}`
		} else {
			details += "\n(No open tabs)"
		}

		const busyTerminals = [] //this.terminalManager.getTerminals(true)
		const inactiveTerminals = []// this.terminalManager.getTerminals(false)
		// const allTerminals = [...busyTerminals, ...inactiveTerminals]

		if (busyTerminals.length > 0 && this.didEditFile) {
			//  || this.didEditFile
			await delay(300) // delay after saving file to let terminals catch up
		}

		// let terminalWasBusy = false
		if (busyTerminals.length > 0) {
			// wait for terminals to cool down
			// terminalWasBusy = allTerminals.some((t) => this.terminalManager.isProcessHot(t.id))
			await pWaitFor(() => busyTerminals.every((t) => !this.terminalManager.isProcessHot(t.id)), {
				interval: 100,
				timeout: 15_000,
			}).catch(() => { })
		}

		this.didEditFile = false // reset, this lets us know when to wait for saved files to update terminals


		if (includeFileDetails) {
			const isDesktop = cwd === path.join(os.homedir(), "Desktop")
			const files = await codebolt.fs.listFile(cwd, !isDesktop);//await listFiles(cwd, !isDesktop)
			const result = this.formatFilesList(cwd, files)
			details += `\n\n# Current Working Directory (${cwd}) Files\n${result}${isDesktop
				? "\n(Note: Only top-level contents shown for Desktop by default. Use project_summaries to explore further if necessary about frontend or backend.)"
				: ""
				}`
		}

		return `<environment_details>\n${details.trim()}\n</environment_details>`
	}

	async formatToolDeniedFeedback(feedback) {
		return `The user denied this operation and provided the following feedback:\n<feedback>\n${feedback}\n</feedback>`
	}

	async formatToolDenied() {
		return `The user denied this operation.`
	}

	async formatToolResult(result) {
		return result // the successful result of the tool should never be manipulated, if we need to add details it should be as a separate user text block
	}

	async formatToolError(error) {
		return `The tool execution failed with the following error:\n<error>\n${error}\n</error>`
	}

	async sayAndCreateMissingParamError(toolName, paramName, relPath) {
		await this.say(
			"error",
			`Claude tried to use ${toolName}${relPath ? ` for '${relPath}'` : ""
			} without value for required parameter '${paramName}'. Retrying...`
		)
		return await this.formatToolError(
			`Missing value for required parameter '${paramName}'. Please retry with complete response.`
		)
	}


	//CODETOBE MOVED TO CODEBOLT APP

	// storing task to disk for history

	async ensureTaskDirectoryExists() {
		const globalStoragePath = "./" //this.providerRef.deref()?.context.globalStorageUri.fsPath
		if (!globalStoragePath) {
			throw new Error("Global storage uri is invalid")
		}
		const taskDir = path.join(globalStoragePath, "tasks", this.taskId)
		await fs.mkdir(taskDir, { recursive: true })
		return taskDir
	}

	async getSavedApiConversationHistory() {
		const filePath = path.join(await this.ensureTaskDirectoryExists(), "api_conversation_history.json")
		const fileExists = await fs
			.access(filePath)
			.then(() => true)
			.catch(() => false)
		if (fileExists) {
			return JSON.parse(await fs.readFile(filePath, "utf8"))
		}
		return []
	}

	async addToApiConversationHistory(message) {
		this.apiConversationHistory.push(message)
		await this.saveApiConversationHistory()
	}

	async overwriteApiConversationHistory(newHistory) {
		this.apiConversationHistory = newHistory
		await this.saveApiConversationHistory()
	}

	async saveApiConversationHistory() {
		try {
			const filePath = path.join(await this.ensureTaskDirectoryExists(), "api_conversation_history.json")
			await fs.writeFile(filePath, JSON.stringify(this.apiConversationHistory))
		} catch (error) {
			// in the off chance this fails, we don't want to stop the task
			console.error("Failed to save API conversation history:", error)
		}
	}

	async getSavedClaudeMessages() {
		const filePath = path.join(await this.ensureTaskDirectoryExists(), "claude_messages.json")
		const fileExists = await fs
			.access(filePath)
			.then(() => true)
			.catch(() => false)
		if (fileExists) {
			return JSON.parse(await fs.readFile(filePath, "utf8"))
		}
		return []
	}

	async addToClaudeMessages(message) {
		this.claudeMessages.push(message)
		await this.saveClaudeMessages()
	}

	async overwriteClaudeMessages(newMessages) {
		this.claudeMessages = newMessages
		await this.saveClaudeMessages()
	}

	async saveClaudeMessages() {
		try {
			const filePath = path.join(await this.ensureTaskDirectoryExists(), "claude_messages.json")
			await fs.writeFile(filePath, JSON.stringify(this.claudeMessages))
			// combined as they are in ChatView
			const apiMetrics = getApiMetrics(combineApiRequests(combineCommandSequences(this.claudeMessages.slice(1))))
			const taskMessage = this.claudeMessages[0] // first message is always the task say
			const lastRelevantMessage =
				this.claudeMessages[
				findLastIndex(
					this.claudeMessages,
					(m) => !(m.ask === "resume_task" || m.ask === "resume_completed_task")
				)
				]
			await this.providerRef.deref()?.updateTaskHistory({
				id: this.taskId,
				ts: lastRelevantMessage.ts,
				task: taskMessage.text ?? "",
				tokensIn: apiMetrics.totalTokensIn,
				tokensOut: apiMetrics.totalTokensOut,
				cacheWrites: apiMetrics.totalCacheWrites,
				cacheReads: apiMetrics.totalCacheReads,
				totalCost: apiMetrics.totalCost,
			})
		} catch (error) {
			console.error("Failed to save claude messages:", error)
		}
	}
}

module.exports = {
	CodeboltDev
}
