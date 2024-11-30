
const fs = require('fs');
const path = require('path');

function getModuleDetailByName(moduleName) {
  const modules = {
    "frontend": JSON.stringify({
      "README.md": null,
      "index.html": null,
      "jsconfig.json": null,
      "package-lock.json": null,
      "package.json": null,
      "public": {
        "robots.txt": null
      },
      "rollup.config.js": null,
      "src": {
        "RootApp.jsx": null,
        "apps": {
          "ErpApp.jsx": null,
          "Header": {
            "HeaderContainer.jsx": "This file defines a React component named HeaderContent for a web application's header section. It uses several libraries, including react-redux for state management, react-router-dom for navigation",
            "UpgradeButton.jsx": "Showing upgrade button"
          },
          "IdurarOs.jsx": "including HeaderContainer and AppRouter here",
          "Navigation": {
            "NavigationContainer.jsx": "Left navigation item added here like dashboard, customer, invoice, quote, payment, paymentMode, taxes, generalSettings, about"
          }
        },
        "auth": {
          "auth.service.js": "Auth service is having login, register, verify, resetPassword, logout these function axios to use backend api",
          "index.js": "exporting auth service export * from './auth.service"
        },
        "components": {
          "AutoCompleteAsync": {
            "index.jsx": "this component is designed to provide a flexible and efficient autocomplete input field with asynchronous data fetching and optional redirection capabilities."
          },
          "CollapseBox": {
            "index.jsx": "The CollapseBox component is a React component designed to manage and display collapsible content sections. It includes a button to toggle between expanded and collapsed states."
          },
          "CreateForm": {
            "index.jsx": "This file defines a CreateForm component in React, which handles form submissions using Redux for state management and Ant Design for UI elements. It includes logic for handling file uploads, resetting form fields upon successful submission, and translating button text."
          },
          "CrudModal": {
            "index.jsx": "This file defines a DeleteModal component using React and Ant Design's Modal. It handles the deletion of items by dispatching Redux actions and manages modal visibility and loading states through context and selectors."
          },
          "DataTable": {
            "DataTable.jsx": "This file defines a `DataTable` component in React that utilizes Ant Design components and Redux for state management. It provides functionalities for displaying, searching, and performing CRUD operations on a data table, with additional context-based actions like opening modals and panels."
          },
          "DeleteModal": {
            "index.jsx": "The `DeleteModal` component in this file is a React functional component that uses Redux and context hooks to manage the state and actions for a delete confirmation modal. It handles displaying a confirmation message, executing a delete action, and updating the UI based on the success of the delete operation."
          },
          "IconMenu": {
            "index.jsx": "This file defines an `IconMenu` component that dynamically selects and renders an icon from the Ant Design library based on the provided `name` prop. If the `name` is not specified or doesn't match any available icons, it defaults to the `DesktopOutlined` icon."
          },
          "Loading": {
            "index.jsx": "This file defines a `Loading` component using Ant Design's `Spin` and `LoadingOutlined` icon. It displays a loading spinner when `isLoading` is true, wrapping any child components passed to it."
          },
          "MoneyInputFormItem": {
            "index.jsx": "This file defines a `MoneyInputFormItem` component using React and Ant Design. It formats and displays a monetary input field with customizable currency symbols and precision, leveraging a custom `useMoney` hook for currency settings."
          },
          "MultiStepSelectAsync": {
            "index.jsx": "This file defines a `MultiStepSelectAsync` React component that provides a two-step selection process using Ant Design's `Select` component. It fetches options asynchronously based on the selected values and handles errors using a custom error handler."
          },
          "NotFound": {
            "index.jsx": "This file defines a `NotFound` React component that displays a 404 error message using Ant Design's `Result` component. It includes a button that navigates the user back to the homepage, with all text translated using a custom `useLanguage` hook."
          },
          "Notification": {
            "index.jsx": "This React component, `Notifications`, displays a list of notifications with delete buttons. Users can remove notifications from the list by clicking the delete icon next to each notification."
          },
          "PageLoader": {
            "index.jsx": "This file defines a `PageLoader` React component that uses Ant Design's `Spin` component with a custom loading icon (`LoadingOutlined`). The loader is styled to be centered absolutely on the page."
          },
          "ReadItem": {
            "index.jsx": "This React component, `ReadItem`, displays a list of items with their labels and values in a formatted layout using Ant Design's `Row` and `Col` components. It fetches data from a Redux store and formats date values using `dayjs`, updating the display based on the component's state and configuration."
          },
          "SearchItem": {
            "index.jsx": "This file defines a `SearchItemComponent` that uses a debounced search input to query and display selectable search results from a Redux store. The `SearchItem` component manages the rendering of `SearchItemComponent` instances, triggering re-renders when necessary."
          },
          "SelectAsync": {
            "index.jsx": "This file defines a `SelectAsync` React component that asynchronously fetches and displays a list of options using the Ant Design `Select` component. It supports optional redirection and custom label display, with options styled using tags and colors."
          },
          "SelectTag": {
            "index.jsx": "This file defines a `SelectTag` component using Ant Design's `Select` and `Tag` components. It maps over the provided `options` to render each as a selectable option, using `shortid` to generate unique keys for each option."
          },
          "SidePanel": {
            "index.jsx": "This file defines a `SidePanel` component using React and Ant Design's `Drawer` component. It manages the panel's open/close state and animations, and includes a collapsible content section using a `CollapseBox` component."
          },
          "TabsContent": {
            "TabsContent.jsx": "This file defines a `TabsContent` component using Ant Design's `Tabs`, `Row`, and `Col` components. It structures a tabbed interface with a customizable right-side menu and settings layout, allowing for dynamic content and a specified default active tab."
          },
          "Tag": {
            "index.jsx": "This file defines a `StatusTag` component using React and Ant Design's `Tag` component. It assigns a color based on the status prop and translates the status text using a custom hook, `useLanguage`."
          },
          "UpdateForm": {
            "index.jsx": "This file defines an `UpdateForm` component in React, which handles form submissions and updates using Redux for state management. It includes functionality for handling file uploads, formatting date fields with `dayjs`, and managing UI state transitions with context actions."
          },
          "Visibility": {
            "index.jsx": "The `Visibility` component in this file is a React functional component that conditionally renders its children based on the `isOpen` prop. It applies inline styles to toggle the display and opacity of the content between visible and hidden states."
          },
          "outsideClick.js": {
            "demo.js": "This file defines a React component `App` that renders a simple interface with two dropdown menus for selecting a vegetable and a fruit. It uses the `useState` hook to manage the selected values and renders the component into the DOM using `ReactDOM.render`.",
            "index.js": "This file defines a `Dropdown` component using React hooks. It manages the dropdown's open/close state and handles clicks both inside and outside the component to toggle its visibility."
          }
        },
        "config": {
          "serverApiConfig.js": "This configuration file sets up various base URLs for API, website, and file access, dynamically adjusting them based on the environment (production or development). It also defines a constant for the access token name used in authentication."
        },
        "context": {
          "adavancedCrud": {
            "actions.jsx": "This file defines a set of context actions for managing the state of various UI panels and modals in a React application. It uses a dispatch function to trigger state changes based on action types imported from a separate file.",
            "index.jsx": "This file defines a React context for managing advanced CRUD operations. It provides a context provider and a custom hook to access state, actions, and selectors related to the CRUD operations.",
            "reducer.jsx": "This file defines a reducer function for managing the state of a CRUD interface, handling actions to open and close modals and panels. It uses an initial state and updates the state based on action types imported from a separate file.",
            "selectors.jsx": "This file defines a `contextSelectors` function that returns an object with methods to check the open state of UI components (`isModalOpen`, `isPanelOpen`, `isBoxOpen`) based on the application's state. It exports this function as the default export.",
            "types.jsx": "This file defines a set of string constants representing different action types for managing UI components, such as modals and panels, in a React application. These constants are used to ensure consistency and avoid typos in action type strings across the application."
          },
          "appContext": {
            "actions.jsx": "This file defines a `contextActions` function that returns an object with methods to dispatch actions for managing navigation menu states and application states. It uses action types imported from a separate `types` module to handle opening, closing, and collapsing the navigation menu, as well as changing and resetting the application state.",
            "index.jsx": "This file defines a React context for managing global state in an application. It provides a context provider component (`AppContextProvider`) and a custom hook (`useAppContext`) to access and manipulate the state using actions.",
            "reducer.jsx": null,
            "types.jsx": null
          },
          "crud": {
            "actions.jsx": null,
            "index.jsx": null,
            "reducer.jsx": null,
            "selectors.jsx": null,
            "types.jsx": null
          },
          "erp": {
            "actions.jsx": null,
            "index.jsx": null,
            "reducer.jsx": null,
            "selectors.jsx": null,
            "types.jsx": null
          },
          "profileContext": {
            "actions.jsx": null,
            "index.jsx": null,
            "reducer.jsx": null,
            "selectors.jsx": null,
            "types.jsx": null
          }
        },
        "favicon.ico": null,
        "forms": {
          "AdminForm.jsx": "This file defines an `AdminForm` component using Ant Design's form elements, which includes fields for user details like name, email, and role, with conditional rendering for password input. It also includes a file upload validation function, though the upload feature is currently commented out.",
          "AdvancedSettingsForm.jsx": "This file defines a React component `AdvancedSettingsForm` using Ant Design components to create a form for managing advanced settings. It includes dynamic form fields for different setting types, such as text, number, date, and select options, with localization support and conditional rendering based on the selected type.",
          "CurrencyForm.jsx": "This file defines a React component `CurrencyForm` using Ant Design components to create a form for inputting currency details, including name, symbol, separators, and a default currency toggle.",
          "CustomerForm.jsx": "This file defines a `CustomerForm` component using Ant Design's `Form` and `Input` components, with validation rules for company, manager names, phone, and email fields, including custom validation for empty strings and phone number format. Note: To make changes in the configuration, refer to `frontend/src/pages/Customer/config.js`.",
          "DynamicForm": {
            "index.jsx": "This file defines a `DynamicForm` component that dynamically renders form elements based on the provided `fields` configuration. It includes various input types and components, such as `Select`, `Input`, and `DatePicker`, with support for translations and feedback handling."
          },
          "EmployeeForm.jsx": "This file defines an `EmployeeForm` component using Ant Design's form elements, which includes fields for personal and contact information, with validation rules and localization support.",
          "ForgetPasswordForm.jsx": "This file defines a React component `ForgetPasswordForm` that renders an email input field with validation rules using Ant Design, and utilizes a translation hook for the placeholder text.",
          "InventoryForm.jsx": "This file defines a React component `InventoryForm` using Ant Design's form elements to capture product details, including product name, quantity, and unit price, with validation rules for each field.",
          "LeadForm.jsx": "This file defines a `LeadForm` component using Ant Design's `Form`, `Input`, and `Select` components, with fields for personal and company information, translated labels, and validation rules.",
          "LoginForm.jsx": "This file defines a `LoginForm` component using React and Ant Design, which includes email and password input fields, a \"Remember me\" checkbox, and a \"Forgot password\" link, with support for localization.",
          "OrderForm.jsx": "This file defines a React component `OrderForm` using Ant Design components to create a form for managing order details, including fields for order ID, products, quantity, price, status, and notes, with validation for required fields and non-empty strings.",
          "PaymentForm.jsx": "This file defines a `PaymentForm` component in React using Ant Design, which includes form fields for number, date, amount, payment mode, reference, and description, with localization and currency formatting support.",
          "PaymentModeForm.jsx": "This file defines a React component `PaymentModeForm` that uses Ant Design components to create a form for managing payment modes, including fields for name, description, and toggle switches for enabling and setting a default mode, with support for localization.",
          "RegisterForm.jsx": "This file defines a `RegisterForm` component using React and Ant Design, which includes fields for name, email, password, and country selection, with localization support.",
          "ResetPasswordForm.jsx": "This file defines a `ResetPasswordForm` component using React and Ant Design, which includes password and confirm password fields with validation to ensure the passwords match.",
          "TaxForm.jsx": "This file defines a React component `TaxForm` using Ant Design components to create a form for inputting tax details, including name, value, and toggle switches for enabling and setting a default status, with localization support.",
          "UpdateEmail.jsx": null
        },
        "hooks": {
          "useDebounce.jsx": "The `useDebounce` hook delays the execution of a function until after a specified delay period has passed since the last time it was invoked, using dependencies to reset the delay.",
          "useFetch.jsx": "This file defines a custom React hook, `useFetch`, which manages the state of data fetching operations, including loading, success, and error states, by utilizing another hook, `useFetchData`.",
          "useMail.jsx": "This React hook, `useMail`, provides a function to send mail data to a Redux action and tracks the loading state from the Redux store.",
          "useNetwork.jsx": "This file defines a custom React hook,`useNetwork`, that tracks the network status and connection properties of the user's device, updating the state when the network goes online, offline, or changes.",
          "useOnFetch.jsx": "This React hook, `useOnFetch`, manages the state of a fetch operation, including the result, success status, and loading state.",
          "useResponsive.jsx": "This file defines a custom React hook, `useResponsive`, that tracks and provides the current screen size and a mobile status based on configurable breakpoints, updating subscribers on window resize events.",
          "useTimeoutFn.jsx": "This custom React hook, `useTimeoutFn`, manages a timeout function that can be set, cleared, and checked for readiness, automatically updating when the function or delay changes."
        },
        "layout": {
          "AuthLayout": {
            "index.jsx": "This file defines a React component `AuthLayout` that uses Ant Design's `Layout`, `Row`, and `Col` components to structure a two-column layout, with customizable side content and main content areas."
          },
          "CrudLayout": {
            "index.jsx": "This file defines a `CrudLayout` component that uses a `DefaultLayout` and a `SidePanel`, managing the side panel's open/close state with context and effects, and rendering children within a styled `ContentBox`."
          },
          "DashboardLayout": {
            "index.jsx": "This file defines a `DashboardLayout` component in React that uses Ant Design's `Layout` and applies a left margin to its children."
          },
          "DefaultLayout": {
            "index.jsx": "This file defines a `DefaultLayout` component that wraps its children with a `CrudContextProvider` to provide CRUD context functionality."
          },
          "ErpLayout": {
            "index.jsx": "This file defines the `ErpLayout` component, which wraps its children with an `ErpContextProvider` and styles the content using Ant Design's `Layout.Content`."
          },
          "Footer": {
            "index.jsx": "This file defines and exports a React functional component that renders a footer using Ant Design's `Layout.Footer` with centered text."
          },
          "ProfileLayout": {
            "index.jsx": "This file defines a `ProfileLayout` component that wraps its children with a `ProfileContextProvider` to provide profile-related context to its descendants."
          },
          "SettingsLayout": {
            "index.jsx": "This file defines a `SettingsLayout` component using React and Ant Design, which structures a layout with a customizable top card and content area."
          },
          "index.jsx": "This file exports default components from various layout modules, making them available for import in other parts of the application."
        },
        "locale": {
          "Localization.jsx": "This file defines a `Localization` component that wraps its children with an Ant Design `ConfigProvider` to apply a custom theme.",
          "antdLocale.js": "This file imports the English (US) locale from Ant Design and exports it as part of an object for use in the application.",
          "coreTranslation.js": "This file defines and exports an array containing a single string, `'en_us'`, which likely represents a supported language code for localization purposes.",
          "translation": {
            "en_us.js": "This file contains a JavaScript object that maps English language keys to their corresponding translation strings for a web application's user interface.",
            "otherTranslation.js": "This file defines an empty `languages` object and exports it as the default export.",
            "translation.js": "This file imports English (US) translations and exports them as part of a `languages` object."
          },
          "useLanguage.jsx": "This file defines a `useLanguage` hook that provides a `translate` function to convert a given key into a human-readable label, storing and retrieving translations from local storage if not found."
        },
        "logo-icon.svg": null,
        "main.jsx": null,
        "modules": {
          "AuthModule": {
            "SideContent.jsx": "This React component, `SideContent`, renders a styled content section with a logo, title, and descriptive text for an open-source ERP/CRM application using Ant Design.",
            "index.jsx": "This file defines an `AuthModule` React component that uses an `AuthLayout` to display authentication-related content, including a logo, title, and additional content, with language translation support."
          },
          "CrudModule": {
            "CrudModule.jsx": "This file defines a `CrudModule` component that manages CRUD operations with a layout including a header panel, side panels for item creation and updates, and a data table, utilizing Redux for state management and Ant Design for UI components."
          },
          "DashboardModule": {
            "components": {
              "CustomerPreviewCard.jsx": "This file defines a `CustomerPreviewCard` React component that displays customer statistics, including a progress dashboard and active customer count, with loading and translation support.",
              "PreviewCard.jsx": "This file defines a `PreviewCard` component in React that displays a progress overview of various statuses, with customizable statistics and loading states, using Ant Design components.",
              "RecentTable": {
                "index.jsx": "This file defines a `RecentTable` component that displays a table with actions for reading, editing, and downloading records, using Ant Design components and Redux for state management."
              },
              "SummaryCard.jsx": "This file defines a React component `AnalyticSummaryCard` that displays a summary card with a title, prefix, and formatted data, using Ant Design components and Redux for state management."
            },
            "index.jsx": "The `DashboardModule` component fetches and displays summary statistics for invoices, quotes, payments, and clients using various cards and tables, with data formatted according to user-selected currency settings."
          },
          "ErpPanelModule": {
            "CreateItem.jsx": " This file defines a React component `CreateItem` that manages the creation of items in an ERP system, handling form submission, state updates, and navigation using Redux and Ant Design components.",
            "DataTable.jsx": "This file defines a `DataTable` component in a React application, which displays a paginated table with CRUD operations and additional actions using Ant Design components and Redux for state management.",
            "DeleteItem.jsx": "This file defines a React component that manages a modal for deleting items, handling the display of item details and dispatching delete actions using Redux.",
            "ItemRow.jsx": "This file defines a React component `ItemRow` that manages and displays form fields for item details, including name, description, quantity, price, and total, with functionality to update and remove items using Ant Design components.",
            "ReadItem.jsx": "This file defines a React component `ReadItem` that displays detailed information about an ERP item, including client details, item list, and financial statistics, with options to edit, download, email, or convert the item.",
            "SearchItem.jsx": "This file defines a React component that provides an auto-complete search feature, integrating with Redux for state management and using Ant Design components for the UI.",
            "UpdateItem.jsx": "This file defines a React component `UpdateItem` that manages the state and form submission for updating ERP items, utilizing Redux for state management and Ant Design for UI components.",
            "index.jsx": "This file defines the `ErpPanel` component, which uses React hooks to manage state and effects, and renders a data table and a delete modal within an ERP context."
          },
          "InvoiceModule": {
            "CreateInvoiceModule": {
              "index.jsx": "This file defines a `CreateInvoiceModule` component that uses an `ErpLayout` to render a `CreateItem` component with an `InvoiceForm` for creating invoices."
            },
            "Forms": {
              "InvoiceForm.jsx": "This file defines an `InvoiceForm` component in React that manages invoice details, including client information, invoice number, year, status, date, expiration date, and itemized entries, while dynamically calculating totals and taxes using Ant Design components and Redux state."
            },
            "InvoiceDataTableModule": {
              "index.jsx": "This file defines a React component `InvoiceDataTableModule` that renders an ERP layout with a panel, including an option to record payments, using localization and an icon."
            },
            "ReadInvoiceModule": {
              "index.jsx": "This file defines a React component, `ReadInvoiceModule`, which fetches and displays invoice data using Redux, showing a loader during data retrieval and rendering either the invoice details or a \"Not Found\" message based on the fetch result."
            },
            "RecordPaymentModule": {
              "components": {
                "Payment.jsx": "This file defines a React component `Payment` that displays payment details and actions for a specific entity, using Ant Design components and hooks for state management and navigation.",
                "RecordPayment.jsx": "This React component, `RecordPayment`, manages the recording of payments for invoices, handling form submission, state updates, and navigation using Redux and Ant Design."
              },
              "index.jsx": "This file defines a React component, `RecordPaymentModule`, which manages the state and rendering of a payment recording interface using Redux for state management and React Router for parameter handling."
            },
            "UpdateInvoiceModule": {
              "index.jsx": "This file defines a React component, `UpdateInvoiceModule`, which manages the update process for an invoice, including data fetching, loading states, and rendering the appropriate form or error message."
            }
          },
          "PaymentModule": {
            "PaymentDataTableModule": {
              "index.jsx": "This file defines a React component `PaymentDataTableModule` that renders an `ErpLayout` containing an `ErpPanel` with a given configuration."
            },
            "ReadPaymentModule": {
              "components": {
                "ReadItem.jsx": "This React component, `ReadItem`, displays detailed payment information for a selected item, including client details and financial statistics, with options to edit, download, or email the invoice."
              },
              "index.jsx": "This file defines a React component that fetches and displays payment module data using Redux, showing a loader while data is being retrieved."
            },
            "UpdatePaymentModule": {
              "components": {
                "Payment.jsx": "This React component, `Payment`, displays and updates payment details for a client, utilizing Ant Design components and hooks for state management and navigation.",
                "UpdatePayment.jsx": "This file defines a React component for updating payment details, utilizing form handling, state management, and navigation within a Redux-based application."
              },
              "index.jsx": "This file defines a React component, `UpdatePaymentModule`, which manages the state and rendering of a payment update interface, utilizing Redux for state management and React Router for parameter handling."
            }
          },
          "ProfileModule": {
            "components": {
              "AdminInfo.jsx": "This file defines the `AdminInfo` component, which displays the current admin's profile information and provides buttons for editing details, updating the password, and logging out.",
              "PasswordModal.jsx": "This file defines a `PasswordModal` component in React using Ant Design, which allows users to update their password with form validation and handles the submission process through a context and custom hooks.",
              "Profile.jsx": "This file defines a `Profile` component that uses context to conditionally render `AdminInfo`, `UpdateAdmin`, and a `PasswordModal` based on the application's state.",
              "ProfileAdminForm.jsx": null,
              "UpdateAdmin.jsx": null,
              "UploadImg.jsx": null
            },
            "index.jsx": null
          },
          "QuoteModule": {
            "CreateQuoteModule": {
              "index.jsx": null
            },
            "Forms": {
              "QuoteForm.jsx": null
            },
            "QuoteDataTableModule": {
              "index.jsx": null
            },
            "ReadQuoteModule": {
              "index.jsx": null
            },
            "UpdateQuoteModule": {
              "index.jsx": null
            }
          },
          "SettingModule": {
            "CompanyLogoSettingsModule": {
              "forms": {
                "AppSettingForm.jsx": null
              },
              "index.jsx": null
            },
            "CompanySettingsModule": {
              "SettingsForm.jsx": null,
              "index.jsx": null
            },
            "FinanceSettingsModule": {
              "SettingsForm.jsx": null,
              "index.jsx": null
            },
            "GeneralSettingsModule": {
              "forms": {
                "GeneralSettingForm.jsx": null
              },
              "index.jsx": null
            },
            "MoneyFormatSettingsModule": {
              "SettingsForm.jsx": null,
              "index.jsx": null
            },
            "components": {
              "SetingsSection.jsx": null,
              "UpdateSettingForm.jsx": null,
              "UpdateSettingModule.jsx": null
            }
          }
        },
        "pages": {
          "About.jsx": "About page providing information about the application and its features.",
          "Customer": {
            "config.js": "Important: Configuration for customer, client page, including fields like name, country, phone, and email. Update this if you want to make changes in the customer or client form.",
            "index.jsx": "Important: Utilizes config.js to build a dynamic form for adding new customers. Update this if you want to make changes in the customer or client form."
          },
          "Dashboard.jsx": "Loads the Dashboard module from DashboardModule/index.jsx.",
          "ForgetPassword.jsx": "Page for password recovery.",
          "Invoice": {
            "InvoiceCreate.jsx": "Loads CreateInvoiceModule with specific configurations.",
            "InvoiceRead.jsx": "Loads ReadInvoiceModule with specific configurations.",
            "InvoiceRecordPayment.jsx": "Loads RecordPaymentModule with specific configurations.",
            "InvoiceUpdate.jsx": "Loads UpdateInvoiceModule with specific configurations.",
            "index.jsx": "Displays a table of invoices with columns such as Number, Client, Date, Expiry Date, Total, Paid, Status, and Payment."
          },
          "Login.jsx": "User login page.",
          "Logout.jsx": "User logout page.",
          "NotFound.jsx": "Page displayed when a route is not found.",
          "Payment": {
            "PaymentRead.jsx": "Loads ReadPaymentModule with specific configurations.",
            "PaymentUpdate.jsx": "Loads UpdatePaymentModule with specific configurations.",
            "index.jsx": "Displays a table of payments with columns such as Number, Client, Amount, Date, Year, and Payment Mode."
          },
          "PaymentMode": {
            "index.jsx": "Displays a table of payment modes with columns such as Payment Mode, Description, Default, Enabled, and includes a search textbox, refresh button, and add payment mode button."
          },
          "Profile.jsx": "Loads the Profile Module.",
          "Quote": {
            "QuoteCreate.jsx": "Loads CreateQuoteModule with specific configurations.",
            "QuoteRead.jsx": "Loads ReadQuoteModule with specific configurations.",
            "QuoteUpdate.jsx": "Loads UpdateQuoteModule with specific configurations.",
            "index.jsx": "Displays a table of quotes with columns such as Client, Date, Expiry Date, Sub Total, Total, and Status, using QuoteDataTableModule."
          },
          "ResetPassword.jsx": "Form for resetting passwords.",
          "Settings": {
            "CompanyLogoSettings.jsx": "Loads CompanyLogoSettingsModule with specific configurations.",
            "CompanySettings.jsx": "Loads CompanySettingsModule with specific configurations.",
            "FinanceSettings.jsx": "Loads FinanceSettingsModule with specific configurations.",
            "GeneralSettings.jsx": "Loads GeneralSettingsModule with specific configurations.",
            "MoneyFormatSettings.jsx": "Loads MoneyFormatSettingsModule with specific configurations.",
            "Settings.jsx": "TabsContent to load various settings modules including CompanyLogoSettings, CompanySettings, FinanceSettings, GeneralSettingsModule, and MoneyFormatSettings."
          },
          "Taxes": {
            "index.jsx": "Displays a table of quotes with columns such as Name Value Default Enabled"
          }
        },
        "redux": {
          "adavancedCrud": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "auth": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "crud": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "erp": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "rootReducer.js": null,
          "settings": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "store.js": null,
          "storePersist.js": null
        },
        "request": {
          "checkImage.js": null,
          "codeMessage.js": "Handles custom messages for specific error codes.",
          "errorHandler.js": "Handles custom error processing and logging for the application.",
          "index.js": null,
          "request.js": "Facilitates interaction with backend APIs by utilizing the axios library for HTTP requests.",
          "successHandler.js": null
        },
        "router": {
          "AppRouter.jsx": "Main router for the application.",
          "AuthRouter.jsx": "Handles authentication-related routes such as login, logout, forgot password, and reset password. Note: Ensure to add the user registration route here and also in AppRouter.jsx.",
          "routes.jsx": null
        },
        "settings": {
          "index.jsx": null,
          "useDate.jsx": null,
          "useMoney.jsx": null
        },
        "style": {
          "app.css": null,
          "images": {
            "checklist.svg": null,
            "fitbit-gray.svg": null,
            "flow-xo-gray.svg": null,
            "gitlab-gray.svg": null,
            "idurar-crm-erp.svg": null,
            "layar-gray.svg": null,
            "logo-icon.png": null,
            "logo-icon.svg": null,
            "logo-menu.png": null,
            "logo-text.png": null,
            "logo-text.svg": null,
            "logo.png": null,
            "logo.svg": null,
            "logo1.png": null,
            "logo2.png": null,
            "logo3.png": null,
            "logo4.png": null,
            "photo.png": null
          },
          "partials": {
            "auth.css": null,
            "collapseBox.css": null,
            "core.css": null,
            "customAntd.css": null,
            "erp.css": null,
            "header.css": null,
            "layout.css": null,
            "navigation.css": null,
            "rest.css": null,
            "sidePanel.css": null,
            "transition.css": null
          }
        },
        "utils": {
          "calculate.js": null,
          "color.js": null,
          "countryList.js": null,
          "currencyList.js": null,
          "dataStructure.jsx": null,
          "helpers.js": null,
          "isBrowser.js": null,
          "statusTagColor.js": null,
          "tagColor.js": null,
          "valueType.js": null
        },
        "temp.env": null,
        "vite.config.js": null
      }
    }),
    "backend": JSON.stringify({
      "jsconfig.json": "",
      "package-lock.json": "",
      "package.json": "",
      "src": {
        "app.js": "Express.js server setup with middleware, API routes, and error handling.",
        "controllers": {
          "appControllers": {
            "clientController": {
              "index.js": "Defines a CRUD controller for the 'Client' model with a custom summary method.",
              "summary.js": "Provides a summary of client data (new, active, and total clients) within a specified time frame (week, month, or year), including percentage metrics, using MongoDB aggregation."
            },
            "index.js": "Dynamically loads custom and default CRUD controllers for app models based on directory structure and a routes list, combining them into a unified controller object.",
            "invoiceController": {
              "create.js": "Creates an invoice by validating input, calculating totals, setting payment status, saving it, updating with a PDF ID, and responding with success or error.",
              "index.js": "Exports a set of CRUD methods for managing invoices, including mail, create, update, delete, summary, list, and read functionalities.",
              "paginatedList.js": "This function fetches a paginated list of invoices from the database, applying optional filters, sorting, and searching, and returns the results along with pagination details.",
              "read.js": "This function retrieves an invoice by its ID from the database, ensuring it is not marked as removed, and returns the document along with a success or error message.",
              "remove.js": "This function marks an invoice as removed by updating its `removed` status to `true` and also updates related payments to be marked as removed, returning a success or error message.",
              "schemaValidate.js": "This code defines a Joi schema for validating invoice data, ensuring required fields, types, and specific conditions (e.g., array cannot be empty). It validates fields such as `client`, `number`, `year`, `status`, `notes`, `expiredDate`, `date`, `items` (an array of objects with specific fields), and `taxRate`.",
              "sendMail.js": "This code defines a `mail` function that responds with a message indicating the user needs to upgrade to the premium version to access full features. The response is a success message with no result.",
              "summary.js": "This function calculates and returns a summary of invoices, including total amount, status counts (draft, pending, etc.), payment status (paid, unpaid), and overdue invoices. It aggregates data using MongoDB, calculates percentages, and compiles the results into a final summary, which is then returned in a JSON response.",
              "update.js": "Updates an invoice with recalculated totals and payment status, then saves and returns the updated document."
            },
            "paymentController": {
              "create.js": "The `create` function processes a payment by validating the amount, creating a new payment document, updating the corresponding invoice, and returning the updated payment information with a PDF link.",
              "index.js": "This file sets up CRUD operations for payments, linking specific actions (`create`, `summary`, `update`, `remove`, `sendMail`) to a middleware controller and exports them for use in the application.",
              "remove.js": "Deletes a payment record, updates the associated invoice's payment status and credit, and returns a success or error response.",
              "sendMail.js": "This code defines a `mail` function that responds with a message indicating the user needs to upgrade to the premium version to access full features. The response is a success message with no result.",
              "summary.js": "This code defines a `summary` function that fetches the total count and amount of payments made during a specified time period (week, month, or year), and returns the aggregated results, or a 400 error if an invalid time type is provided.",
              "update.js": "This code updates a payment record, checks for minimum and maximum amounts, recalculates payment status (paid, partially, or unpaid), and reflects the changes in the corresponding invoice, ensuring all conditions are met before applying the update."
            },
            "paymentModeController": {
              "index.js": "This file defines custom CRUD operations for the `PaymentMode` model, with logic for managing default modes, preventing deletion, and enforcing conditions when updating payment modes."
            },
            "quoteController": {
              "convertQuoteToInvoice.js": "This code defines a function `convertQuoteToInvoice`, which responds with a message indicating that users need to upgrade to a premium version to access full features.",
              "create.js": "The `create` function generates a quote by calculating totals from items, saves the quote to the database, associates a PDF file, increments the quote number, and returns a success response.",
              "index.js": "This file imports CRUD operations for managing quotes and consolidates them into a single object, attaching methods for listing, reading, sending mail, creating, updating, converting quotes to invoices, and fetching summary data.",
              "paginatedList.js": null,
              "read.js": null,
              "sendMail.js": null,
              "summary.js": null,
              "update.js": null
            },
            "taxesController": {
              "index.js": "This code customizes CRUD operations for the `Taxes` model, including logic to manage default taxes, prevent deletion of taxes, and handle updates with special rules for `isDefault` and `enabled` fields."
            }
          },
          "coreControllers": {
            "adminAuth": {
              "index.js": "This code exports authentication middleware for the `Admin` model by calling the `createAuthMiddleware` function with `'Admin'` as an argument, which generates middleware for authentication-related tasks (e.g., token validation, login, logout) specific to `Admin` users."
            },
            "adminController": {
              "index.js": "This code exports a user controller for the `Admin` model by calling the `createUserController` function with `'Admin'` as an argument, which likely generates the necessary CRUD operations for managing `Admin` users."
            },
            "settingController": {
              "index.js": "The `settingMethods` object combines standard CRUD operations and specialized methods for managing settings, including listing, reading, and updating by `settingKey`.",
              "listAll.js": "The `listAll` function retrieves all non-removed, non-private setting documents from the database, optionally sorted by creation date in ascending or descending order, and returns the results or an empty collection message.",
              "listBySettingKey.js": "The `listBySettingKey` function retrieves multiple setting documents from the database based on a list of provided `settingKey` values, returning a success or error message depending on whether the matching settings are found.",
              "readBySettingKey.js": "The `readBySettingKey` function retrieves a setting document from the database based on the provided `settingKey`, returning a success or error message depending on whether the setting is found.",
              "updateBySettingKey.js": "The `updateBySettingKey` function updates a specific setting in the database using a provided `settingKey` and `settingValue`, returning a success or error message based on the result.",
              "updateManySetting.js": "The `updateManySetting` function updates multiple settings in the database by processing an array of setting key-value pairs, validating the input, and using a bulk write operation to update the matching settings. It returns appropriate responses based on the success or failure of the update process."
            },
            "setup.js": "The `setup` function initializes the IDURAR app by validating admin credentials, creating an admin account, setting up default settings, taxes, and payment modes, and then saving them to the database."
          },
          "middlewaresControllers": {
            "createAuthMiddleware": {
              "authUser.js": "The `authUser` function verifies user credentials, generates a JWT token on successful authentication, saves it in the session, and returns the user details along with the token.",
              "checkAndCorrectURL.js": "The `checkAndCorrectURL` function ensures that a URL has the appropriate protocol ('http://' or 'https://'), removes any trailing slashes, and adds the correct protocol back if it was removed.",
              "forgetPassword.js": "The `forgetPassword` function validates the email, generates a reset token for the user, updates the password record, and sends a password reset link via email.",
              "index.js": "`createAuthMiddleware` generates an object with authentication methods (e.g., token validation, login, logout, password reset) tailored to a specified `userModel`.",
              "isValidAuthToken.js": "This function `isValidAuthToken` validates a JWT authentication token by verifying its authenticity, checking if the user exists and is active, and ensuring the token is still valid, before attaching the user data to the request object for further use.",
              "login.js": "The `login` function validates user credentials, checks if the account exists and is enabled, then authenticates the user by comparing the password and calls `authUser` for further authentication handling.",
              "logout.js": "The `logout` function removes the user's session token from the `loggedSessions` array, either by removing the specified token or clearing all sessions, and returns a success message.",
              "resetPassword.js": "The `resetPassword` function validates the reset token, hashes the new password, updates the user's password, and returns a JWT token for authentication if the reset is successful.",
              "sendMail.js": "The `sendMail` function sends an email using the Resend service with a verification template, including a personalized message and verification link."
            },
            "createCRUDController": {
              "create.js": "The `create` function creates a new document in the specified model's collection and returns a success response with the created document.",
              "filter.js": "The `filter` function searches a model for documents based on a specified filter and equality condition, returning an appropriate success or error response based on the result.",
              "index.js": "The `createCRUDController` function generates CRUD operations (create, read, update, delete, etc.) for a specified model, ensuring the model exists before providing the corresponding methods.",
              "listAll.js": "The `listAll` function retrieves all documents from the specified model, with optional sorting and filtering based on the `enabled` status, and returns the results.",
              "paginatedList.js": "The `paginatedList` function retrieves a paginated list of documents based on the specified filters, sorting, and search query, and returns the results along with pagination details.",
              "read.js": "The `read` function retrieves a non-removed document by ID from the database and returns it, or a 'not found' message if no document matches.",
              "remove.js": "The file exports a `remove` function that marks a document as deleted by setting its `removed` field to `true` and returns a success or failure response based on the outcome.",
              "search.js": "The file exports a `search` function that searches for documents in a model based on query parameters, checking multiple fields for matches and returning results or a message if no documents are found.",
              "summary.js": "The file exports a `summary` function that queries a database model to count filtered and total documents that are not marked as removed, and returns the counts or a message if the collection is empty.",
              "update.js": "The file exports an `update` function that updates a document in a specified `Model` by its ID, ensuring the document is not marked as removed, and returns the updated result or an error message if not found."
            },
            "createUserController": {
              "index.js": "The file exports a `createUserController` function that provides methods for reading and updating user profiles and passwords based on the provided `userModel`.",
              "read.js": "The file exports a function `read` that retrieves a user document by its ID from the database and returns a response with the user's details if found, or an error message if the document is not found.",
              "updatePassword.js": "The file exports a function `updatePassword` that updates a user's password (after ensuring it's at least 8 characters long) in the database, while preventing updates for a demo account, and returns a response indicating success or failure based on whether the password update was successful.",
              "updateProfile.js": "The file exports a function `updateProfile` that updates a user's profile information (email, name, surname, and photo) in the database, while preventing updates for a demo account, and returns a response with the updated user details or an error message if no profile is found.",
              "updateProfilePassword.js": "The file exports a function `updateProfilePassword` that validates and updates a user's password in the database, ensuring it meets certain criteria and handling cases such as demo accounts or failed updates."
            }
          },
          "pdfController": {
            "index.js": "The file defines a `generatePdf` function that generates a PDF from a Pug template using app settings and data, and saves it to a specified location, replacing any existing PDF."
          }
        },
        "emailTemplate": {
          "SendEmailTemplate.js": "This file exports a function that generates an HTML email template for password reset requests, dynamically inserting the recipient's name and a reset link.",
          "emailVerfication.js": "These templates generate HTML email content for an invoice, quote, or offer, dynamically inserting a title, recipient's name, and timestamp, with consistent formatting for each type of email."
        },
        "handlers": {
          "downloadHandler": {
            "downloadPdf.js": "A controller for downloading PDFs by dynamically retrieving data from a MongoDB model and handling errors like missing fields, invalid IDs, or server issues."
          },
          "errorHandlers.js": "Custom error handling middleware for Express, including async error handling, 404 not found, and environment-specific error responses for development and production."
        },
        "helpers.js": null,
        "locale": {
          "languages.js": null,
          "translation": {
            "en_us.js": "This module exports a comprehensive set of English translations for UI elements, settings, labels, and business-related terms in an ERP/CRM system.",
            "useLanguage.js": "A language translation utility that loads a language file, formats keys into readable labels, and provides a translation function based on the selected language."
          }
        },
        "middlewares": {
          "inventory": {
            "generateUniqueNumber.js": "Generates a unique 13-digit number combining the current date, a random 3-digit number, and a padded `uniqueId`.",
            "index.js": "Exports the `generateUniqueNumber` function from the `../inventory/generateUniqueNumber` module."
          },
          "serverData.js": "Mongoose helper functions to fetch data: `getData` retrieves all records from a model with `removed` as false and `enabled` as true, and `getOne` retrieves a single record by ID with `removed` as false.",
          "settings": {
            "increaseBySettingKey.js": "This function increases the `settingValue` by 1 for a given `settingKey` in the `Setting` model. If the settingKey is not found or an error occurs, it returns `null`.",
            "index.js": "Exports various functions for interacting with settings, including loading, listing, reading, updating, and increasing settings by key.",
            "listAllSettings.js": "Fetches all settings from the `Setting` model where `removed` is `false`. If no results are found or an error occurs, returns an empty array.",
            "listBySettingKey.js": "Fetches documents from the `Setting` model based on an array of `settingKey` values, ensuring they are not marked as removed.",
            "loadSettings.js": "The `loadSettings` function fetches all settings using the `listAllSettings` function, then organizes them into an object with the `settingKey` as the key and `settingValue` as the value, returning the final settings object.",
            "readBySettingKey.js": "The `readBySettingKey` function retrieves a setting by its key, returning the document if found, or `null` if not found or an error occurs.",
            "updateBySettingKey.js": "The `updateBySettingKey` function updates a setting by its key and value, returning the updated document or `null` if not found or on error."
          },
          "uploadMiddleware": {
            "DoSingleStorage.js": "Middleware for uploading files to DigitalOcean Spaces with validation, unique filename generation, and storage using AWS SDK, saving the file path in the request body.",
            "LocalSingleStorage.js": "This code defines a `singleStorageUpload` function that configures and returns a `multer` middleware to handle file uploads, generate unique filenames with slugs, and store files in a specified directory with a file type filter.",
            "index.js": "A module that exports two file upload utilities: `singleStorageUpload` for local file storage and `LocalSingleStorage` for handling local file uploads with custom logic.",
            "singleStorageUpload.js": "This code defines a `singleStorageUpload` function that configures a `multer` upload handler to store files in a specific directory, generate unique file names using slugified titles, and apply a file type filter.",
            "utils": {
              "LocalfileFilter.js": "The `fileFilter` function filters files based on their MIME type, ensuring that only specific file types (e.g., images, videos, PDFs) are accepted, and returns an error if the file type is unsupported.",
              "fileFilterMiddleware.js": "The `fileFilterMiddleware` function filters file uploads based on MIME type and a specified type (e.g., image, video, pdf), returning `true` for valid files and `false` for unsupported ones."
            }
          }
        },
        "models": {
          "appModels": {
            "Client.js": "Mongoose schema for `Client` with fields like name, contact info and methods to fetch recent clients.(Note: If you want to make changes here, ensure corresponding changes are made in the frontend `frontend/src/forms/CustomerForm.jsx` component.  and  `frontend/src/pages/Customer/config.js`)",
            "Invoice.js": "The `Invoice` Mongoose schema models an invoice with details like client, items, payments, status, taxes, and files, supporting recurring billing and auto-populating referenced documents.",
            "Payment.js": "Mongoose schema for a `Payment` model with fields for client, invoice, amount, payment mode, currency, and timestamps, along with references to related models such as `Admin`, `Client`, `Invoice`, and `PaymentMode`.",
            "PaymentMode.js": "Mongoose schema for a `PaymentMode` model with fields for name, description, reference, default status, and timestamps.",
            "Quote.js": "Mongoose schema for a `Quote` model with fields for quote details, client, items, tax, total, discount, status, and file attachments.",
            "Taxes.js": "Mongoose schema for a `Taxes` model with fields for tax name, value, status, and default flag."
          },
          "coreModels": {
            "Admin.js": "Mongoose schema for an admin, including fields for email, name, photo, role, and account status (enabled/removed).",
            "AdminPassword.js": "Mongoose schema for storing admin password data with methods to hash and validate passwords using `bcryptjs`.",
            "Setting.js": "This Mongoose schema defines a `Setting` model with fields for storing configuration settings, including `settingCategory`, `settingKey`, `settingValue`, and a `valueType`. It also includes flags like `isPrivate` and `isCoreSetting` to manage the privacy and importance of the settings.",
            "Upload.js": "This Mongoose schema defines an `Upload` model with fields for tracking file information such as `fileName`, `fileType`, `path`, and various attributes like `isPublic`, `isSecure`, and `enabled`."
          },
          "utils": {
            "index.js": "This script dynamically loads models, generates controller names, and creates a list of routes based on model files from the `src/models/appModels/` directory."
          }
        },
        "pdf": {
          "Invoice.pug": null,
          "Offer.pug": null,
          "Payment.pug": null,
          "Quote.pug": null
        },
        "public": {
          "uploads": {
            "admin": {
              "idurar-icon-png-80-i1kez.png": null
            },
            "setting": {
              "company-logo.png": null
            }
          }
        },
        "routes": {
          "appRoutes": {
            "appApi.js": "This Express router dynamically sets up CRUD routes and custom operations for multiple entities like `invoice`, `quote`, `payment`, and `client` using controller methods, with additional routes for mailing and recent customer functionality, based on the entity type."
          },
          "coreRoutes": {
            "coreApi.js": "This Express router handles various routes for admin and setting management, including updating passwords, profile info, and performing CRUD operations on settings, with file upload capabilities for images.",
            "coreAuth.js": "This Express router handles admin authentication with routes for login, password reset, and logout, using `catchErrors` middleware to handle errors.",
            "coreDownloadRouter.js": "This Express route extracts an ID from the file name and calls a `downloadPdf` handler to serve the PDF, returning a 503 error in case of failure.",
            "corePublicRouter.js": "This Express route serves files from a sanitized path, returning a 404 if not found and a 503 for other errors."
          }
        },
        "server.js": "This script initializes a Node.js app, checks the Node version, loads environment variables, connects to MongoDB, dynamically imports models, and starts the Express server.",
        "settings": {
          "index.js": "Exports utilities for date, money, and app settings in a single module.",
          "useAppSettings.js": "The `useAppSettings` function returns an object with default app settings, including the email (`idurar_app_email`) and the base URL (`idurar_base_url`).",
          "useDate.js": "The `useDate` function returns the date format from the provided settings, specifically using `idurar_app_date_format`.",
          "useMoney.js": "The `useMoney` function formats amounts based on customizable settings like currency symbol, position, separators, precision, and zero formatting using the `currency.js` library."
        },
        "setup": {
          "defaultSettings": {
            "appSettings.json": "These settings define basic application configurations, including date format, language, country, timezone, email, multi-branch support, industry, and early access features.",
            "clientSettings.json": "These settings define client types, statuses, sources, categories, and defaults for invoice, quote, and POS operations.",
            "companySettings.json": "These settings define various details for the company, including name, contact information, registration, tax details, and logos.",
            "financeSettings.json": "These settings define prefixes and the last used numbers for invoices, quotes, offers, and payments in the finance system.",
            "invoiceSettings.json": "These settings configure how invoices are handled, including product tax visibility, client loading, PDF footer message, and available invoice statuses.",
            "moneyFormatSettings.json": "These settings configure the formatting of money values, including the currency code, name, symbol, position, decimal and thousand separators, cent precision, and zero formatting.",
            "quoteSettings.json": "These settings configure various aspects of a quote system, such as product tax visibility, client loading, quote status options, and the footer text for PDF quotes."
          },
          "reset.js": "This script deletes essential data from multiple MongoDB collections (Admin, AdminPassword, Setting, PaymentMode, Taxes) and logs instructions to re-setup the data using the npm run setup command.",
          "setup.js": "The script sets up an application by creating an admin user, inserting default settings, taxes, and payment modes into the database, with appropriate logging for success or failure.",
          "setupConfig.json": "The array holds application configuration settings with keys, values, and data types for various parameters like app version, environment, database, and licensing."
        },
        "utils": {
          "countryList.js": "The `listTimeZones` array contains objects for countries with their respective time zones, including codes, names, and an array of relevant time zones.",
          "currency.js": "The function checkCurrency checks if a given currency code exists in a predefined list of currency codes.",
          "currencyList.js": "The currencyList array contains currency objects with details like symbol, decimal separator, and formatting rules."
        }
      }
    })
  }
  if (modules[moduleName]) {

    return [false, modules[moduleName]]

  } else {
    throw new Error(`Module with name '${moduleName}' not found.`);
  }
}


function getInstructionsForAgent(filePath) {
  const modules = {
    "frontend": {
      "README.md": null,
      "index.html": null,
      "jsconfig.json": null,
      "package-lock.json": null,
      "package.json": null,
      "public": {
        "robots.txt": null
      },
      "rollup.config.js": null,
      "src": {
        "RootApp.jsx": null,
        "apps": {
          "ErpApp.jsx": null,
          "Header": {
            "HeaderContainer.jsx": "This file defines a React component named HeaderContent for a web application's header section. It uses several libraries, including react-redux for state management, react-router-dom for navigation",
            "UpgradeButton.jsx": "Showing upgrade button"
          },
          "IdurarOs.jsx": "including HeaderContainer and AppRouter here",
          "Navigation": {
            "NavigationContainer.jsx": "Left navigation item added here like dashboard, customer, invoice, quote, payment, paymentMode, taxes, generalSettings, about"
          }
        },
        "auth": {
          "auth.service.js": "Auth service is having login, register, verify, resetPassword, logout these function axios to use backend api",
          "index.js": "exporting auth service export * from './auth.service"
        },
        "components": {
          "AutoCompleteAsync": {
            "index.jsx": "this component is designed to provide a flexible and efficient autocomplete input field with asynchronous data fetching and optional redirection capabilities."
          },
          "CollapseBox": {
            "index.jsx": "The CollapseBox component is a React component designed to manage and display collapsible content sections. It includes a button to toggle between expanded and collapsed states."
          },
          "CreateForm": {
            "index.jsx": "This file defines a CreateForm component in React, which handles form submissions using Redux for state management and Ant Design for UI elements. It includes logic for handling file uploads, resetting form fields upon successful submission, and translating button text."
          },
          "CrudModal": {
            "index.jsx": "This file defines a DeleteModal component using React and Ant Design's Modal. It handles the deletion of items by dispatching Redux actions and manages modal visibility and loading states through context and selectors."
          },
          "DataTable": {
            "DataTable.jsx": "This file defines a `DataTable` component in React that utilizes Ant Design components and Redux for state management. It provides functionalities for displaying, searching, and performing CRUD operations on a data table, with additional context-based actions like opening modals and panels."
          },
          "DeleteModal": {
            "index.jsx": "The `DeleteModal` component in this file is a React functional component that uses Redux and context hooks to manage the state and actions for a delete confirmation modal. It handles displaying a confirmation message, executing a delete action, and updating the UI based on the success of the delete operation."
          },
          "IconMenu": {
            "index.jsx": "This file defines an `IconMenu` component that dynamically selects and renders an icon from the Ant Design library based on the provided `name` prop. If the `name` is not specified or doesn't match any available icons, it defaults to the `DesktopOutlined` icon."
          },
          "Loading": {
            "index.jsx": "This file defines a `Loading` component using Ant Design's `Spin` and `LoadingOutlined` icon. It displays a loading spinner when `isLoading` is true, wrapping any child components passed to it."
          },
          "MoneyInputFormItem": {
            "index.jsx": "This file defines a `MoneyInputFormItem` component using React and Ant Design. It formats and displays a monetary input field with customizable currency symbols and precision, leveraging a custom `useMoney` hook for currency settings."
          },
          "MultiStepSelectAsync": {
            "index.jsx": "This file defines a `MultiStepSelectAsync` React component that provides a two-step selection process using Ant Design's `Select` component. It fetches options asynchronously based on the selected values and handles errors using a custom error handler."
          },
          "NotFound": {
            "index.jsx": "This file defines a `NotFound` React component that displays a 404 error message using Ant Design's `Result` component. It includes a button that navigates the user back to the homepage, with all text translated using a custom `useLanguage` hook."
          },
          "Notification": {
            "index.jsx": "This React component, `Notifications`, displays a list of notifications with delete buttons. Users can remove notifications from the list by clicking the delete icon next to each notification."
          },
          "PageLoader": {
            "index.jsx": "This file defines a `PageLoader` React component that uses Ant Design's `Spin` component with a custom loading icon (`LoadingOutlined`). The loader is styled to be centered absolutely on the page."
          },
          "ReadItem": {
            "index.jsx": "This React component, `ReadItem`, displays a list of items with their labels and values in a formatted layout using Ant Design's `Row` and `Col` components. It fetches data from a Redux store and formats date values using `dayjs`, updating the display based on the component's state and configuration."
          },
          "SearchItem": {
            "index.jsx": "This file defines a `SearchItemComponent` that uses a debounced search input to query and display selectable search results from a Redux store. The `SearchItem` component manages the rendering of `SearchItemComponent` instances, triggering re-renders when necessary."
          },
          "SelectAsync": {
            "index.jsx": "This file defines a `SelectAsync` React component that asynchronously fetches and displays a list of options using the Ant Design `Select` component. It supports optional redirection and custom label display, with options styled using tags and colors."
          },
          "SelectTag": {
            "index.jsx": "This file defines a `SelectTag` component using Ant Design's `Select` and `Tag` components. It maps over the provided `options` to render each as a selectable option, using `shortid` to generate unique keys for each option."
          },
          "SidePanel": {
            "index.jsx": "This file defines a `SidePanel` component using React and Ant Design's `Drawer` component. It manages the panel's open/close state and animations, and includes a collapsible content section using a `CollapseBox` component."
          },
          "TabsContent": {
            "TabsContent.jsx": "This file defines a `TabsContent` component using Ant Design's `Tabs`, `Row`, and `Col` components. It structures a tabbed interface with a customizable right-side menu and settings layout, allowing for dynamic content and a specified default active tab."
          },
          "Tag": {
            "index.jsx": "This file defines a `StatusTag` component using React and Ant Design's `Tag` component. It assigns a color based on the status prop and translates the status text using a custom hook, `useLanguage`."
          },
          "UpdateForm": {
            "index.jsx": "This file defines an `UpdateForm` component in React, which handles form submissions and updates using Redux for state management. It includes functionality for handling file uploads, formatting date fields with `dayjs`, and managing UI state transitions with context actions."
          },
          "Visibility": {
            "index.jsx": "The `Visibility` component in this file is a React functional component that conditionally renders its children based on the `isOpen` prop. It applies inline styles to toggle the display and opacity of the content between visible and hidden states."
          },
          "outsideClick.js": {
            "demo.js": "This file defines a React component `App` that renders a simple interface with two dropdown menus for selecting a vegetable and a fruit. It uses the `useState` hook to manage the selected values and renders the component into the DOM using `ReactDOM.render`.",
            "index.js": "This file defines a `Dropdown` component using React hooks. It manages the dropdown's open/close state and handles clicks both inside and outside the component to toggle its visibility."
          }
        },
        "config": {
          "serverApiConfig.js": "This configuration file sets up various base URLs for API, website, and file access, dynamically adjusting them based on the environment (production or development). It also defines a constant for the access token name used in authentication."
        },
        "context": {
          "adavancedCrud": {
            "actions.jsx": "This file defines a set of context actions for managing the state of various UI panels and modals in a React application. It uses a dispatch function to trigger state changes based on action types imported from a separate file.",
            "index.jsx": "This file defines a React context for managing advanced CRUD operations. It provides a context provider and a custom hook to access state, actions, and selectors related to the CRUD operations.",
            "reducer.jsx": "This file defines a reducer function for managing the state of a CRUD interface, handling actions to open and close modals and panels. It uses an initial state and updates the state based on action types imported from a separate file.",
            "selectors.jsx": "This file defines a `contextSelectors` function that returns an object with methods to check the open state of UI components (`isModalOpen`, `isPanelOpen`, `isBoxOpen`) based on the application's state. It exports this function as the default export.",
            "types.jsx": "This file defines a set of string constants representing different action types for managing UI components, such as modals and panels, in a React application. These constants are used to ensure consistency and avoid typos in action type strings across the application."
          },
          "appContext": {
            "actions.jsx": "This file defines a `contextActions` function that returns an object with methods to dispatch actions for managing navigation menu states and application states. It uses action types imported from a separate `types` module to handle opening, closing, and collapsing the navigation menu, as well as changing and resetting the application state.",
            "index.jsx": "This file defines a React context for managing global state in an application. It provides a context provider component (`AppContextProvider`) and a custom hook (`useAppContext`) to access and manipulate the state using actions.",
            "reducer.jsx": null,
            "types.jsx": null
          },
          "crud": {
            "actions.jsx": null,
            "index.jsx": null,
            "reducer.jsx": null,
            "selectors.jsx": null,
            "types.jsx": null
          },
          "erp": {
            "actions.jsx": null,
            "index.jsx": null,
            "reducer.jsx": null,
            "selectors.jsx": null,
            "types.jsx": null
          },
          "profileContext": {
            "actions.jsx": null,
            "index.jsx": null,
            "reducer.jsx": null,
            "selectors.jsx": null,
            "types.jsx": null
          }
        },
        "favicon.ico": null,
        "forms": {
          "AdminForm.jsx": "This file defines an `AdminForm` component using Ant Design's form elements, which includes fields for user details like name, email, and role, with conditional rendering for password input. It also includes a file upload validation function, though the upload feature is currently commented out.",
          "AdvancedSettingsForm.jsx": "This file defines a React component `AdvancedSettingsForm` using Ant Design components to create a form for managing advanced settings. It includes dynamic form fields for different setting types, such as text, number, date, and select options, with localization support and conditional rendering based on the selected type.",
          "CurrencyForm.jsx": "This file defines a React component `CurrencyForm` using Ant Design components to create a form for inputting currency details, including name, symbol, separators, and a default currency toggle.",
          "CustomerForm.jsx": "This file defines a `CustomerForm` component using Ant Design's `Form` and `Input` components, with validation rules for company, manager names, phone, and email fields, including custom validation for empty strings and phone number format. Note: To make changes in the configuration, refer to `frontend/src/pages/Customer/config.js`.",
          "DynamicForm": {
            "index.jsx": "This file defines a `DynamicForm` component that dynamically renders form elements based on the provided `fields` configuration. It includes various input types and components, such as `Select`, `Input`, and `DatePicker`, with support for translations and feedback handling."
          },
          "EmployeeForm.jsx": "This file defines an `EmployeeForm` component using Ant Design's form elements, which includes fields for personal and contact information, with validation rules and localization support.",
          "ForgetPasswordForm.jsx": "This file defines a React component `ForgetPasswordForm` that renders an email input field with validation rules using Ant Design, and utilizes a translation hook for the placeholder text.",
          "InventoryForm.jsx": "This file defines a React component `InventoryForm` using Ant Design's form elements to capture product details, including product name, quantity, and unit price, with validation rules for each field.",
          "LeadForm.jsx": "This file defines a `LeadForm` component using Ant Design's `Form`, `Input`, and `Select` components, with fields for personal and company information, translated labels, and validation rules.",
          "LoginForm.jsx": "This file defines a `LoginForm` component using React and Ant Design, which includes email and password input fields, a \"Remember me\" checkbox, and a \"Forgot password\" link, with support for localization.",
          "OrderForm.jsx": "This file defines a React component `OrderForm` using Ant Design components to create a form for managing order details, including fields for order ID, products, quantity, price, status, and notes, with validation for required fields and non-empty strings.",
          "PaymentForm.jsx": "This file defines a `PaymentForm` component in React using Ant Design, which includes form fields for number, date, amount, payment mode, reference, and description, with localization and currency formatting support.",
          "PaymentModeForm.jsx": "This file defines a React component `PaymentModeForm` that uses Ant Design components to create a form for managing payment modes, including fields for name, description, and toggle switches for enabling and setting a default mode, with support for localization.",
          "RegisterForm.jsx": "This file defines a `RegisterForm` component using React and Ant Design, which includes fields for name, email, password, and country selection, with localization support.",
          "ResetPasswordForm.jsx": "This file defines a `ResetPasswordForm` component using React and Ant Design, which includes password and confirm password fields with validation to ensure the passwords match.",
          "TaxForm.jsx": "This file defines a React component `TaxForm` using Ant Design components to create a form for inputting tax details, including name, value, and toggle switches for enabling and setting a default status, with localization support.",
          "UpdateEmail.jsx": null
        },
        "hooks": {
          "useDebounce.jsx": "The `useDebounce` hook delays the execution of a function until after a specified delay period has passed since the last time it was invoked, using dependencies to reset the delay.",
          "useFetch.jsx": "This file defines a custom React hook, `useFetch`, which manages the state of data fetching operations, including loading, success, and error states, by utilizing another hook, `useFetchData`.",
          "useMail.jsx": "This React hook, `useMail`, provides a function to send mail data to a Redux action and tracks the loading state from the Redux store.",
          "useNetwork.jsx": "This file defines a custom React hook,`useNetwork`, that tracks the network status and connection properties of the user's device, updating the state when the network goes online, offline, or changes.",
          "useOnFetch.jsx": "This React hook, `useOnFetch`, manages the state of a fetch operation, including the result, success status, and loading state.",
          "useResponsive.jsx": "This file defines a custom React hook, `useResponsive`, that tracks and provides the current screen size and a mobile status based on configurable breakpoints, updating subscribers on window resize events.",
          "useTimeoutFn.jsx": "This custom React hook, `useTimeoutFn`, manages a timeout function that can be set, cleared, and checked for readiness, automatically updating when the function or delay changes."
        },
        "layout": {
          "AuthLayout": {
            "index.jsx": "This file defines a React component `AuthLayout` that uses Ant Design's `Layout`, `Row`, and `Col` components to structure a two-column layout, with customizable side content and main content areas."
          },
          "CrudLayout": {
            "index.jsx": "This file defines a `CrudLayout` component that uses a `DefaultLayout` and a `SidePanel`, managing the side panel's open/close state with context and effects, and rendering children within a styled `ContentBox`."
          },
          "DashboardLayout": {
            "index.jsx": "This file defines a `DashboardLayout` component in React that uses Ant Design's `Layout` and applies a left margin to its children."
          },
          "DefaultLayout": {
            "index.jsx": "This file defines a `DefaultLayout` component that wraps its children with a `CrudContextProvider` to provide CRUD context functionality."
          },
          "ErpLayout": {
            "index.jsx": "This file defines the `ErpLayout` component, which wraps its children with an `ErpContextProvider` and styles the content using Ant Design's `Layout.Content`."
          },
          "Footer": {
            "index.jsx": "This file defines and exports a React functional component that renders a footer using Ant Design's `Layout.Footer` with centered text."
          },
          "ProfileLayout": {
            "index.jsx": "This file defines a `ProfileLayout` component that wraps its children with a `ProfileContextProvider` to provide profile-related context to its descendants."
          },
          "SettingsLayout": {
            "index.jsx": "This file defines a `SettingsLayout` component using React and Ant Design, which structures a layout with a customizable top card and content area."
          },
          "index.jsx": "This file exports default components from various layout modules, making them available for import in other parts of the application."
        },
        "locale": {
          "Localization.jsx": "This file defines a `Localization` component that wraps its children with an Ant Design `ConfigProvider` to apply a custom theme.",
          "antdLocale.js": "This file imports the English (US) locale from Ant Design and exports it as part of an object for use in the application.",
          "coreTranslation.js": "This file defines and exports an array containing a single string, `'en_us'`, which likely represents a supported language code for localization purposes.",
          "translation": {
            "en_us.js": "This file contains a JavaScript object that maps English language keys to their corresponding translation strings for a web application's user interface.",
            "otherTranslation.js": "This file defines an empty `languages` object and exports it as the default export.",
            "translation.js": "This file imports English (US) translations and exports them as part of a `languages` object."
          },
          "useLanguage.jsx": "This file defines a `useLanguage` hook that provides a `translate` function to convert a given key into a human-readable label, storing and retrieving translations from local storage if not found."
        },
        "logo-icon.svg": null,
        "main.jsx": null,
        "modules": {
          "AuthModule": {
            "SideContent.jsx": "This React component, `SideContent`, renders a styled content section with a logo, title, and descriptive text for an open-source ERP/CRM application using Ant Design.",
            "index.jsx": "This file defines an `AuthModule` React component that uses an `AuthLayout` to display authentication-related content, including a logo, title, and additional content, with language translation support."
          },
          "CrudModule": {
            "CrudModule.jsx": "This file defines a `CrudModule` component that manages CRUD operations with a layout including a header panel, side panels for item creation and updates, and a data table, utilizing Redux for state management and Ant Design for UI components."
          },
          "DashboardModule": {
            "components": {
              "CustomerPreviewCard.jsx": "This file defines a `CustomerPreviewCard` React component that displays customer statistics, including a progress dashboard and active customer count, with loading and translation support.",
              "PreviewCard.jsx": "This file defines a `PreviewCard` component in React that displays a progress overview of various statuses, with customizable statistics and loading states, using Ant Design components.",
              "RecentTable": {
                "index.jsx": "This file defines a `RecentTable` component that displays a table with actions for reading, editing, and downloading records, using Ant Design components and Redux for state management."
              },
              "SummaryCard.jsx": "This file defines a React component `AnalyticSummaryCard` that displays a summary card with a title, prefix, and formatted data, using Ant Design components and Redux for state management."
            },
            "index.jsx": "The `DashboardModule` component fetches and displays summary statistics for invoices, quotes, payments, and clients using various cards and tables, with data formatted according to user-selected currency settings."
          },
          "ErpPanelModule": {
            "CreateItem.jsx": " This file defines a React component `CreateItem` that manages the creation of items in an ERP system, handling form submission, state updates, and navigation using Redux and Ant Design components.",
            "DataTable.jsx": "This file defines a `DataTable` component in a React application, which displays a paginated table with CRUD operations and additional actions using Ant Design components and Redux for state management.",
            "DeleteItem.jsx": "This file defines a React component that manages a modal for deleting items, handling the display of item details and dispatching delete actions using Redux.",
            "ItemRow.jsx": "This file defines a React component `ItemRow` that manages and displays form fields for item details, including name, description, quantity, price, and total, with functionality to update and remove items using Ant Design components.",
            "ReadItem.jsx": "This file defines a React component `ReadItem` that displays detailed information about an ERP item, including client details, item list, and financial statistics, with options to edit, download, email, or convert the item.",
            "SearchItem.jsx": "This file defines a React component that provides an auto-complete search feature, integrating with Redux for state management and using Ant Design components for the UI.",
            "UpdateItem.jsx": "This file defines a React component `UpdateItem` that manages the state and form submission for updating ERP items, utilizing Redux for state management and Ant Design for UI components.",
            "index.jsx": "This file defines the `ErpPanel` component, which uses React hooks to manage state and effects, and renders a data table and a delete modal within an ERP context."
          },
          "InvoiceModule": {
            "CreateInvoiceModule": {
              "index.jsx": "This file defines a `CreateInvoiceModule` component that uses an `ErpLayout` to render a `CreateItem` component with an `InvoiceForm` for creating invoices."
            },
            "Forms": {
              "InvoiceForm.jsx": "This file defines an `InvoiceForm` component in React that manages invoice details, including client information, invoice number, year, status, date, expiration date, and itemized entries, while dynamically calculating totals and taxes using Ant Design components and Redux state."
            },
            "InvoiceDataTableModule": {
              "index.jsx": "This file defines a React component `InvoiceDataTableModule` that renders an ERP layout with a panel, including an option to record payments, using localization and an icon."
            },
            "ReadInvoiceModule": {
              "index.jsx": "This file defines a React component, `ReadInvoiceModule`, which fetches and displays invoice data using Redux, showing a loader during data retrieval and rendering either the invoice details or a \"Not Found\" message based on the fetch result."
            },
            "RecordPaymentModule": {
              "components": {
                "Payment.jsx": "This file defines a React component `Payment` that displays payment details and actions for a specific entity, using Ant Design components and hooks for state management and navigation.",
                "RecordPayment.jsx": "This React component, `RecordPayment`, manages the recording of payments for invoices, handling form submission, state updates, and navigation using Redux and Ant Design."
              },
              "index.jsx": "This file defines a React component, `RecordPaymentModule`, which manages the state and rendering of a payment recording interface using Redux for state management and React Router for parameter handling."
            },
            "UpdateInvoiceModule": {
              "index.jsx": "This file defines a React component, `UpdateInvoiceModule`, which manages the update process for an invoice, including data fetching, loading states, and rendering the appropriate form or error message."
            }
          },
          "PaymentModule": {
            "PaymentDataTableModule": {
              "index.jsx": "This file defines a React component `PaymentDataTableModule` that renders an `ErpLayout` containing an `ErpPanel` with a given configuration."
            },
            "ReadPaymentModule": {
              "components": {
                "ReadItem.jsx": "This React component, `ReadItem`, displays detailed payment information for a selected item, including client details and financial statistics, with options to edit, download, or email the invoice."
              },
              "index.jsx": "This file defines a React component that fetches and displays payment module data using Redux, showing a loader while data is being retrieved."
            },
            "UpdatePaymentModule": {
              "components": {
                "Payment.jsx": "This React component, `Payment`, displays and updates payment details for a client, utilizing Ant Design components and hooks for state management and navigation.",
                "UpdatePayment.jsx": "This file defines a React component for updating payment details, utilizing form handling, state management, and navigation within a Redux-based application."
              },
              "index.jsx": "This file defines a React component, `UpdatePaymentModule`, which manages the state and rendering of a payment update interface, utilizing Redux for state management and React Router for parameter handling."
            }
          },
          "ProfileModule": {
            "components": {
              "AdminInfo.jsx": "This file defines the `AdminInfo` component, which displays the current admin's profile information and provides buttons for editing details, updating the password, and logging out.",
              "PasswordModal.jsx": "This file defines a `PasswordModal` component in React using Ant Design, which allows users to update their password with form validation and handles the submission process through a context and custom hooks.",
              "Profile.jsx": "This file defines a `Profile` component that uses context to conditionally render `AdminInfo`, `UpdateAdmin`, and a `PasswordModal` based on the application's state.",
              "ProfileAdminForm.jsx": null,
              "UpdateAdmin.jsx": null,
              "UploadImg.jsx": null
            },
            "index.jsx": null
          },
          "QuoteModule": {
            "CreateQuoteModule": {
              "index.jsx": null
            },
            "Forms": {
              "QuoteForm.jsx": null
            },
            "QuoteDataTableModule": {
              "index.jsx": null
            },
            "ReadQuoteModule": {
              "index.jsx": null
            },
            "UpdateQuoteModule": {
              "index.jsx": null
            }
          },
          "SettingModule": {
            "CompanyLogoSettingsModule": {
              "forms": {
                "AppSettingForm.jsx": null
              },
              "index.jsx": null
            },
            "CompanySettingsModule": {
              "SettingsForm.jsx": null,
              "index.jsx": null
            },
            "FinanceSettingsModule": {
              "SettingsForm.jsx": null,
              "index.jsx": null
            },
            "GeneralSettingsModule": {
              "forms": {
                "GeneralSettingForm.jsx": null
              },
              "index.jsx": null
            },
            "MoneyFormatSettingsModule": {
              "SettingsForm.jsx": null,
              "index.jsx": null
            },
            "components": {
              "SetingsSection.jsx": null,
              "UpdateSettingForm.jsx": null,
              "UpdateSettingModule.jsx": null
            }
          }
        },
        "pages": {
          "About.jsx": "About page providing information about the application and its features.",
          "Customer": {
            "config.js": "Important: Configuration for customer, client page, including fields like name, country, phone, and email. Update this if you want to make changes in the customer or client form.",
            "index.jsx": "Important: Utilizes config.js to build a dynamic form for adding new customers. Update this if you want to make changes in the customer or client form."
          },
          "Dashboard.jsx": "Loads the Dashboard module from DashboardModule/index.jsx.",
          "ForgetPassword.jsx": "Page for password recovery.",
          "Invoice": {
            "InvoiceCreate.jsx": "Loads CreateInvoiceModule with specific configurations.",
            "InvoiceRead.jsx": "Loads ReadInvoiceModule with specific configurations.",
            "InvoiceRecordPayment.jsx": "Loads RecordPaymentModule with specific configurations.",
            "InvoiceUpdate.jsx": "Loads UpdateInvoiceModule with specific configurations.",
            "index.jsx": "Displays a table of invoices with columns such as Number, Client, Date, Expiry Date, Total, Paid, Status, and Payment."
          },
          "Login.jsx": "User login page.",
          "Logout.jsx": "User logout page.",
          "NotFound.jsx": "Page displayed when a route is not found.",
          "Payment": {
            "PaymentRead.jsx": "Loads ReadPaymentModule with specific configurations.",
            "PaymentUpdate.jsx": "Loads UpdatePaymentModule with specific configurations.",
            "index.jsx": "Displays a table of payments with columns such as Number, Client, Amount, Date, Year, and Payment Mode."
          },
          "PaymentMode": {
            "index.jsx": "Displays a table of payment modes with columns such as Payment Mode, Description, Default, Enabled, and includes a search textbox, refresh button, and add payment mode button."
          },
          "Profile.jsx": "Loads the Profile Module.",
          "Quote": {
            "QuoteCreate.jsx": "Loads CreateQuoteModule with specific configurations.",
            "QuoteRead.jsx": "Loads ReadQuoteModule with specific configurations.",
            "QuoteUpdate.jsx": "Loads UpdateQuoteModule with specific configurations.",
            "index.jsx": "Displays a table of quotes with columns such as Client, Date, Expiry Date, Sub Total, Total, and Status, using QuoteDataTableModule."
          },
          "ResetPassword.jsx": "Form for resetting passwords.",
          "Settings": {
            "CompanyLogoSettings.jsx": "Loads CompanyLogoSettingsModule with specific configurations.",
            "CompanySettings.jsx": "Loads CompanySettingsModule with specific configurations.",
            "FinanceSettings.jsx": "Loads FinanceSettingsModule with specific configurations.",
            "GeneralSettings.jsx": "Loads GeneralSettingsModule with specific configurations.",
            "MoneyFormatSettings.jsx": "Loads MoneyFormatSettingsModule with specific configurations.",
            "Settings.jsx": "TabsContent to load various settings modules including CompanyLogoSettings, CompanySettings, FinanceSettings, GeneralSettingsModule, and MoneyFormatSettings."
          },
          "Taxes": {
            "index.jsx": "Displays a table of quotes with columns such as Name Value Default Enabled"
          }
        },
        "redux": {
          "adavancedCrud": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "auth": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "crud": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "erp": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "rootReducer.js": null,
          "settings": {
            "actions.js": null,
            "index.js": null,
            "reducer.js": null,
            "selectors.js": null,
            "types.js": null
          },
          "store.js": null,
          "storePersist.js": null
        },
        "request": {
          "checkImage.js": null,
          "codeMessage.js": "Handles custom messages for specific error codes.",
          "errorHandler.js": "Handles custom error processing and logging for the application.",
          "index.js": null,
          "request.js": "Facilitates interaction with backend APIs by utilizing the axios library for HTTP requests.",
          "successHandler.js": null
        },
        "router": {
          "AppRouter.jsx": "Main router for the application.",
          "AuthRouter.jsx": "Handles authentication-related routes such as login, logout, forgot password, and reset password. Note: Ensure to add the user registration route here and also in AppRouter.jsx.",
          "routes.jsx": null
        },
        "settings": {
          "index.jsx": null,
          "useDate.jsx": null,
          "useMoney.jsx": null
        },
        "style": {
          "app.css": null,
          "images": {
            "checklist.svg": null,
            "fitbit-gray.svg": null,
            "flow-xo-gray.svg": null,
            "gitlab-gray.svg": null,
            "idurar-crm-erp.svg": null,
            "layar-gray.svg": null,
            "logo-icon.png": null,
            "logo-icon.svg": null,
            "logo-menu.png": null,
            "logo-text.png": null,
            "logo-text.svg": null,
            "logo.png": null,
            "logo.svg": null,
            "logo1.png": null,
            "logo2.png": null,
            "logo3.png": null,
            "logo4.png": null,
            "photo.png": null
          },
          "partials": {
            "auth.css": null,
            "collapseBox.css": null,
            "core.css": null,
            "customAntd.css": null,
            "erp.css": null,
            "header.css": null,
            "layout.css": null,
            "navigation.css": null,
            "rest.css": null,
            "sidePanel.css": null,
            "transition.css": null
          }
        },
        "utils": {
          "calculate.js": null,
          "color.js": null,
          "countryList.js": null,
          "currencyList.js": null,
          "dataStructure.jsx": null,
          "helpers.js": null,
          "isBrowser.js": null,
          "statusTagColor.js": null,
          "tagColor.js": null,
          "valueType.js": null
        },
        "temp.env": null,
        "vite.config.js": null
      }
    },
    "backend": {
      "jsconfig.json": "",
      "package-lock.json": "",
      "package.json": "",
      "src": {
        "app.js": "Express.js server setup with middleware, API routes, and error handling.",
        "controllers": {
          "appControllers": {
            "clientController": {
              "index.js": "Defines a CRUD controller for the 'Client' model with a custom summary method.",
              "summary.js": "Provides a summary of client data (new, active, and total clients) within a specified time frame (week, month, or year), including percentage metrics, using MongoDB aggregation."
            },
            "index.js": "Dynamically loads custom and default CRUD controllers for app models based on directory structure and a routes list, combining them into a unified controller object.",
            "invoiceController": {
              "create.js": "Creates an invoice by validating input, calculating totals, setting payment status, saving it, updating with a PDF ID, and responding with success or error.",
              "index.js": "Exports a set of CRUD methods for managing invoices, including mail, create, update, delete, summary, list, and read functionalities.",
              "paginatedList.js": "This function fetches a paginated list of invoices from the database, applying optional filters, sorting, and searching, and returns the results along with pagination details.",
              "read.js": "This function retrieves an invoice by its ID from the database, ensuring it is not marked as removed, and returns the document along with a success or error message.",
              "remove.js": "This function marks an invoice as removed by updating its `removed` status to `true` and also updates related payments to be marked as removed, returning a success or error message.",
              "schemaValidate.js": "This code defines a Joi schema for validating invoice data, ensuring required fields, types, and specific conditions (e.g., array cannot be empty). It validates fields such as `client`, `number`, `year`, `status`, `notes`, `expiredDate`, `date`, `items` (an array of objects with specific fields), and `taxRate`.",
              "sendMail.js": "This code defines a `mail` function that responds with a message indicating the user needs to upgrade to the premium version to access full features. The response is a success message with no result.",
              "summary.js": "This function calculates and returns a summary of invoices, including total amount, status counts (draft, pending, etc.), payment status (paid, unpaid), and overdue invoices. It aggregates data using MongoDB, calculates percentages, and compiles the results into a final summary, which is then returned in a JSON response.",
              "update.js": "Updates an invoice with recalculated totals and payment status, then saves and returns the updated document."
            },
            "paymentController": {
              "create.js": "The `create` function processes a payment by validating the amount, creating a new payment document, updating the corresponding invoice, and returning the updated payment information with a PDF link.",
              "index.js": "This file sets up CRUD operations for payments, linking specific actions (`create`, `summary`, `update`, `remove`, `sendMail`) to a middleware controller and exports them for use in the application.",
              "remove.js": "Deletes a payment record, updates the associated invoice's payment status and credit, and returns a success or error response.",
              "sendMail.js": "This code defines a `mail` function that responds with a message indicating the user needs to upgrade to the premium version to access full features. The response is a success message with no result.",
              "summary.js": "This code defines a `summary` function that fetches the total count and amount of payments made during a specified time period (week, month, or year), and returns the aggregated results, or a 400 error if an invalid time type is provided.",
              "update.js": "This code updates a payment record, checks for minimum and maximum amounts, recalculates payment status (paid, partially, or unpaid), and reflects the changes in the corresponding invoice, ensuring all conditions are met before applying the update."
            },
            "paymentModeController": {
              "index.js": "This file defines custom CRUD operations for the `PaymentMode` model, with logic for managing default modes, preventing deletion, and enforcing conditions when updating payment modes."
            },
            "quoteController": {
              "convertQuoteToInvoice.js": "This code defines a function `convertQuoteToInvoice`, which responds with a message indicating that users need to upgrade to a premium version to access full features.",
              "create.js": "The `create` function generates a quote by calculating totals from items, saves the quote to the database, associates a PDF file, increments the quote number, and returns a success response.",
              "index.js": "This file imports CRUD operations for managing quotes and consolidates them into a single object, attaching methods for listing, reading, sending mail, creating, updating, converting quotes to invoices, and fetching summary data.",
              "paginatedList.js": null,
              "read.js": null,
              "sendMail.js": null,
              "summary.js": null,
              "update.js": null
            },
            "taxesController": {
              "index.js": "This code customizes CRUD operations for the `Taxes` model, including logic to manage default taxes, prevent deletion of taxes, and handle updates with special rules for `isDefault` and `enabled` fields."
            }
          },
          "coreControllers": {
            "adminAuth": {
              "index.js": "This code exports authentication middleware for the `Admin` model by calling the `createAuthMiddleware` function with `'Admin'` as an argument, which generates middleware for authentication-related tasks (e.g., token validation, login, logout) specific to `Admin` users."
            },
            "adminController": {
              "index.js": "This code exports a user controller for the `Admin` model by calling the `createUserController` function with `'Admin'` as an argument, which likely generates the necessary CRUD operations for managing `Admin` users."
            },
            "settingController": {
              "index.js": "The `settingMethods` object combines standard CRUD operations and specialized methods for managing settings, including listing, reading, and updating by `settingKey`.",
              "listAll.js": "The `listAll` function retrieves all non-removed, non-private setting documents from the database, optionally sorted by creation date in ascending or descending order, and returns the results or an empty collection message.",
              "listBySettingKey.js": "The `listBySettingKey` function retrieves multiple setting documents from the database based on a list of provided `settingKey` values, returning a success or error message depending on whether the matching settings are found.",
              "readBySettingKey.js": "The `readBySettingKey` function retrieves a setting document from the database based on the provided `settingKey`, returning a success or error message depending on whether the setting is found.",
              "updateBySettingKey.js": "The `updateBySettingKey` function updates a specific setting in the database using a provided `settingKey` and `settingValue`, returning a success or error message based on the result.",
              "updateManySetting.js": "The `updateManySetting` function updates multiple settings in the database by processing an array of setting key-value pairs, validating the input, and using a bulk write operation to update the matching settings. It returns appropriate responses based on the success or failure of the update process."
            },
            "setup.js": "The `setup` function initializes the IDURAR app by validating admin credentials, creating an admin account, setting up default settings, taxes, and payment modes, and then saving them to the database."
          },
          "middlewaresControllers": {
            "createAuthMiddleware": {
              "authUser.js": "The `authUser` function verifies user credentials, generates a JWT token on successful authentication, saves it in the session, and returns the user details along with the token.",
              "checkAndCorrectURL.js": "The `checkAndCorrectURL` function ensures that a URL has the appropriate protocol ('http://' or 'https://'), removes any trailing slashes, and adds the correct protocol back if it was removed.",
              "forgetPassword.js": "The `forgetPassword` function validates the email, generates a reset token for the user, updates the password record, and sends a password reset link via email.",
              "index.js": "`createAuthMiddleware` generates an object with authentication methods (e.g., token validation, login, logout, password reset) tailored to a specified `userModel`.",
              "isValidAuthToken.js": "This function `isValidAuthToken` validates a JWT authentication token by verifying its authenticity, checking if the user exists and is active, and ensuring the token is still valid, before attaching the user data to the request object for further use.",
              "login.js": "The `login` function validates user credentials, checks if the account exists and is enabled, then authenticates the user by comparing the password and calls `authUser` for further authentication handling.",
              "logout.js": "The `logout` function removes the user's session token from the `loggedSessions` array, either by removing the specified token or clearing all sessions, and returns a success message.",
              "resetPassword.js": "The `resetPassword` function validates the reset token, hashes the new password, updates the user's password, and returns a JWT token for authentication if the reset is successful.",
              "sendMail.js": "The `sendMail` function sends an email using the Resend service with a verification template, including a personalized message and verification link."
            },
            "createCRUDController": {
              "create.js": "The `create` function creates a new document in the specified model's collection and returns a success response with the created document.",
              "filter.js": "The `filter` function searches a model for documents based on a specified filter and equality condition, returning an appropriate success or error response based on the result.",
              "index.js": "The `createCRUDController` function generates CRUD operations (create, read, update, delete, etc.) for a specified model, ensuring the model exists before providing the corresponding methods.",
              "listAll.js": "The `listAll` function retrieves all documents from the specified model, with optional sorting and filtering based on the `enabled` status, and returns the results.",
              "paginatedList.js": "The `paginatedList` function retrieves a paginated list of documents based on the specified filters, sorting, and search query, and returns the results along with pagination details.",
              "read.js": "The `read` function retrieves a non-removed document by ID from the database and returns it, or a 'not found' message if no document matches.",
              "remove.js": "The file exports a `remove` function that marks a document as deleted by setting its `removed` field to `true` and returns a success or failure response based on the outcome.",
              "search.js": "The file exports a `search` function that searches for documents in a model based on query parameters, checking multiple fields for matches and returning results or a message if no documents are found.",
              "summary.js": "The file exports a `summary` function that queries a database model to count filtered and total documents that are not marked as removed, and returns the counts or a message if the collection is empty.",
              "update.js": "The file exports an `update` function that updates a document in a specified `Model` by its ID, ensuring the document is not marked as removed, and returns the updated result or an error message if not found."
            },
            "createUserController": {
              "index.js": "The file exports a `createUserController` function that provides methods for reading and updating user profiles and passwords based on the provided `userModel`.",
              "read.js": "The file exports a function `read` that retrieves a user document by its ID from the database and returns a response with the user's details if found, or an error message if the document is not found.",
              "updatePassword.js": "The file exports a function `updatePassword` that updates a user's password (after ensuring it's at least 8 characters long) in the database, while preventing updates for a demo account, and returns a response indicating success or failure based on whether the password update was successful.",
              "updateProfile.js": "The file exports a function `updateProfile` that updates a user's profile information (email, name, surname, and photo) in the database, while preventing updates for a demo account, and returns a response with the updated user details or an error message if no profile is found.",
              "updateProfilePassword.js": "The file exports a function `updateProfilePassword` that validates and updates a user's password in the database, ensuring it meets certain criteria and handling cases such as demo accounts or failed updates."
            }
          },
          "pdfController": {
            "index.js": "The file defines a `generatePdf` function that generates a PDF from a Pug template using app settings and data, and saves it to a specified location, replacing any existing PDF."
          }
        },
        "emailTemplate": {
          "SendEmailTemplate.js": "This file exports a function that generates an HTML email template for password reset requests, dynamically inserting the recipient's name and a reset link.",
          "emailVerfication.js": "These templates generate HTML email content for an invoice, quote, or offer, dynamically inserting a title, recipient's name, and timestamp, with consistent formatting for each type of email."
        },
        "handlers": {
          "downloadHandler": {
            "downloadPdf.js": "A controller for downloading PDFs by dynamically retrieving data from a MongoDB model and handling errors like missing fields, invalid IDs, or server issues."
          },
          "errorHandlers.js": "Custom error handling middleware for Express, including async error handling, 404 not found, and environment-specific error responses for development and production."
        },
        "helpers.js": null,
        "locale": {
          "languages.js": null,
          "translation": {
            "en_us.js": "This module exports a comprehensive set of English translations for UI elements, settings, labels, and business-related terms in an ERP/CRM system.",
            "useLanguage.js": "A language translation utility that loads a language file, formats keys into readable labels, and provides a translation function based on the selected language."
          }
        },
        "middlewares": {
          "inventory": {
            "generateUniqueNumber.js": "Generates a unique 13-digit number combining the current date, a random 3-digit number, and a padded `uniqueId`.",
            "index.js": "Exports the `generateUniqueNumber` function from the `../inventory/generateUniqueNumber` module."
          },
          "serverData.js": "Mongoose helper functions to fetch data: `getData` retrieves all records from a model with `removed` as false and `enabled` as true, and `getOne` retrieves a single record by ID with `removed` as false.",
          "settings": {
            "increaseBySettingKey.js": "This function increases the `settingValue` by 1 for a given `settingKey` in the `Setting` model. If the settingKey is not found or an error occurs, it returns `null`.",
            "index.js": "Exports various functions for interacting with settings, including loading, listing, reading, updating, and increasing settings by key.",
            "listAllSettings.js": "Fetches all settings from the `Setting` model where `removed` is `false`. If no results are found or an error occurs, returns an empty array.",
            "listBySettingKey.js": "Fetches documents from the `Setting` model based on an array of `settingKey` values, ensuring they are not marked as removed.",
            "loadSettings.js": "The `loadSettings` function fetches all settings using the `listAllSettings` function, then organizes them into an object with the `settingKey` as the key and `settingValue` as the value, returning the final settings object.",
            "readBySettingKey.js": "The `readBySettingKey` function retrieves a setting by its key, returning the document if found, or `null` if not found or an error occurs.",
            "updateBySettingKey.js": "The `updateBySettingKey` function updates a setting by its key and value, returning the updated document or `null` if not found or on error."
          },
          "uploadMiddleware": {
            "DoSingleStorage.js": "Middleware for uploading files to DigitalOcean Spaces with validation, unique filename generation, and storage using AWS SDK, saving the file path in the request body.",
            "LocalSingleStorage.js": "This code defines a `singleStorageUpload` function that configures and returns a `multer` middleware to handle file uploads, generate unique filenames with slugs, and store files in a specified directory with a file type filter.",
            "index.js": "A module that exports two file upload utilities: `singleStorageUpload` for local file storage and `LocalSingleStorage` for handling local file uploads with custom logic.",
            "singleStorageUpload.js": "This code defines a `singleStorageUpload` function that configures a `multer` upload handler to store files in a specific directory, generate unique file names using slugified titles, and apply a file type filter.",
            "utils": {
              "LocalfileFilter.js": "The `fileFilter` function filters files based on their MIME type, ensuring that only specific file types (e.g., images, videos, PDFs) are accepted, and returns an error if the file type is unsupported.",
              "fileFilterMiddleware.js": "The `fileFilterMiddleware` function filters file uploads based on MIME type and a specified type (e.g., image, video, pdf), returning `true` for valid files and `false` for unsupported ones."
            }
          }
        },
        "models": {
          "appModels": {
            "Client.js": "Mongoose schema for `Client` with fields like name, contact info and methods to fetch recent clients.(Note: If you want to make changes here, ensure corresponding changes are made in the frontend `frontend/src/forms/CustomerForm.jsx` component.  and  `frontend/src/pages/Customer/config.js`)",
            "Invoice.js": "The `Invoice` Mongoose schema models an invoice with details like client, items, payments, status, taxes, and files, supporting recurring billing and auto-populating referenced documents.",
            "Payment.js": "Mongoose schema for a `Payment` model with fields for client, invoice, amount, payment mode, currency, and timestamps, along with references to related models such as `Admin`, `Client`, `Invoice`, and `PaymentMode`.",
            "PaymentMode.js": "Mongoose schema for a `PaymentMode` model with fields for name, description, reference, default status, and timestamps.",
            "Quote.js": "Mongoose schema for a `Quote` model with fields for quote details, client, items, tax, total, discount, status, and file attachments.",
            "Taxes.js": "Mongoose schema for a `Taxes` model with fields for tax name, value, status, and default flag."
          },
          "coreModels": {
            "Admin.js": "Mongoose schema for an admin, including fields for email, name, photo, role, and account status (enabled/removed).",
            "AdminPassword.js": "Mongoose schema for storing admin password data with methods to hash and validate passwords using `bcryptjs`.",
            "Setting.js": "This Mongoose schema defines a `Setting` model with fields for storing configuration settings, including `settingCategory`, `settingKey`, `settingValue`, and a `valueType`. It also includes flags like `isPrivate` and `isCoreSetting` to manage the privacy and importance of the settings.",
            "Upload.js": "This Mongoose schema defines an `Upload` model with fields for tracking file information such as `fileName`, `fileType`, `path`, and various attributes like `isPublic`, `isSecure`, and `enabled`."
          },
          "utils": {
            "index.js": "This script dynamically loads models, generates controller names, and creates a list of routes based on model files from the `src/models/appModels/` directory."
          }
        },
        "pdf": {
          "Invoice.pug": null,
          "Offer.pug": null,
          "Payment.pug": null,
          "Quote.pug": null
        },
        "public": {
          "uploads": {
            "admin": {
              "idurar-icon-png-80-i1kez.png": null
            },
            "setting": {
              "company-logo.png": null
            }
          }
        },
        "routes": {
          "appRoutes": {
            "appApi.js": "This Express router dynamically sets up CRUD routes and custom operations for multiple entities like `invoice`, `quote`, `payment`, and `client` using controller methods, with additional routes for mailing and recent customer functionality, based on the entity type."
          },
          "coreRoutes": {
            "coreApi.js": "This Express router handles various routes for admin and setting management, including updating passwords, profile info, and performing CRUD operations on settings, with file upload capabilities for images.",
            "coreAuth.js": "This Express router handles admin authentication with routes for login, password reset, and logout, using `catchErrors` middleware to handle errors.",
            "coreDownloadRouter.js": "This Express route extracts an ID from the file name and calls a `downloadPdf` handler to serve the PDF, returning a 503 error in case of failure.",
            "corePublicRouter.js": "This Express route serves files from a sanitized path, returning a 404 if not found and a 503 for other errors."
          }
        },
        "server.js": "This script initializes a Node.js app, checks the Node version, loads environment variables, connects to MongoDB, dynamically imports models, and starts the Express server.",
        "settings": {
          "index.js": "Exports utilities for date, money, and app settings in a single module.",
          "useAppSettings.js": "The `useAppSettings` function returns an object with default app settings, including the email (`idurar_app_email`) and the base URL (`idurar_base_url`).",
          "useDate.js": "The `useDate` function returns the date format from the provided settings, specifically using `idurar_app_date_format`.",
          "useMoney.js": "The `useMoney` function formats amounts based on customizable settings like currency symbol, position, separators, precision, and zero formatting using the `currency.js` library."
        },
        "setup": {
          "defaultSettings": {
            "appSettings.json": "These settings define basic application configurations, including date format, language, country, timezone, email, multi-branch support, industry, and early access features.",
            "clientSettings.json": "These settings define client types, statuses, sources, categories, and defaults for invoice, quote, and POS operations.",
            "companySettings.json": "These settings define various details for the company, including name, contact information, registration, tax details, and logos.",
            "financeSettings.json": "These settings define prefixes and the last used numbers for invoices, quotes, offers, and payments in the finance system.",
            "invoiceSettings.json": "These settings configure how invoices are handled, including product tax visibility, client loading, PDF footer message, and available invoice statuses.",
            "moneyFormatSettings.json": "These settings configure the formatting of money values, including the currency code, name, symbol, position, decimal and thousand separators, cent precision, and zero formatting.",
            "quoteSettings.json": "These settings configure various aspects of a quote system, such as product tax visibility, client loading, quote status options, and the footer text for PDF quotes."
          },
          "reset.js": "This script deletes essential data from multiple MongoDB collections (Admin, AdminPassword, Setting, PaymentMode, Taxes) and logs instructions to re-setup the data using the npm run setup command.",
          "setup.js": "The script sets up an application by creating an admin user, inserting default settings, taxes, and payment modes into the database, with appropriate logging for success or failure.",
          "setupConfig.json": "The array holds application configuration settings with keys, values, and data types for various parameters like app version, environment, database, and licensing."
        },
        "utils": {
          "countryList.js": "The `listTimeZones` array contains objects for countries with their respective time zones, including codes, names, and an array of relevant time zones.",
          "currency.js": "The function checkCurrency checks if a given currency code exists in a predefined list of currency codes.",
          "currencyList.js": "The currencyList array contains currency objects with details like symbol, decimal separator, and formatting rules."
        }
      }
    }
  }
  const pathParts = filePath.split('/');
  let currentLevel = modules;

  for (const part of pathParts) {
    if (currentLevel[part] !== undefined) {
      currentLevel = currentLevel[part];
    } else {
      return null;
    }
  }

  return currentLevel || null;
}










function getModuleDetailByNameOld(moduleName) {
  const modules = {
    frontend: ` - README.md
  - index.html
  - jsconfig.json
  - package-lock.json
  - package.json
  - **public**
    - robots.txt
  - rollup.config.js
  - **src**
    - RootApp.jsx
    - **apps**
      - ErpApp.jsx
      - **Header**
        - HeaderContainer.jsx: "This file defines a React component named HeaderContent for a web application's header section. It uses several libraries, including react-redux for state management, react-router-dom for navigation"
        - UpgradeButton.jsx: "Showing upgade button"
      - IdurarOs.jsx : "including HeaderContainer and AppRouter here "
      - **Navigation**
        - NavigationContainer.jsx: "Left navigation item addeded here like dashboard,customer,invoice,quote,payment,paymentMode,taxes,generalSettings,about"
    - **auth**
      - auth.service.js: "Auth service is having login,register,verify,resetPassword,logout these function  axios to use backend api "
      - index.js: "exporting auth service export * from './auth.service"
    - **components**
      - **AutoCompleteAsync**
        - index.jsx: "this component is designed to provide a flexible and efficient autocomplete input field with asynchronous data fetching and optional redirection capabilities."
      - **CollapseBox**
        - index.jsx: "The CollapseBox component is a React component designed to manage and display collapsible content sections. It includes a button to toggle between expanded and collapsed states. "
      - **CreateForm**
        - index.jsx:"This file defines a CreateForm component in React, which handles form submissions using Redux for state management and Ant Design for UI elements. It includes logic for handling file uploads, resetting form fields upon successful submission, and translating button text."
      - **CrudModal**
        - index.jsx: "This file defines a DeleteModal component using React and Ant Design's Modal. It handles the deletion of items by dispatching Redux actions and manages modal visibility and loading states through context and selectors."
      - **DataTable**
        - DataTable.jsx: "This file defines a \`DataTable\` component in React that utilizes Ant Design components and Redux for state management. It provides functionalities for displaying, searching, and performing CRUD operations on a data table, with additional context-based actions like opening modals and panels."
      - **DeleteModal**
        - index.jsx: "The \`DeleteModal\` component in this file is a React functional component that uses Redux and context hooks to manage the state and actions for a delete confirmation modal. It handles displaying a confirmation message, executing a delete action, and updating the UI based on the success of the delete operation."
      - **IconMenu**
        - index.jsx: "This file defines an \`IconMenu\` component that dynamically selects and renders an icon from the Ant Design library based on the provided \`name\` prop. If the \`name\` is not specified or doesn't match any available icons, it defaults to the \`DesktopOutlined\` icon."
      - **Loading**
        - index.jsx: "This file defines a \`Loading\` component using Ant Design's \`Spin\` and \`LoadingOutlined\` icon. It displays a loading spinner when \`isLoading\` is true, wrapping any child components passed to it."
      - **MoneyInputFormItem**
        - index.jsx: "This file defines a \`MoneyInputFormItem\` component using React and Ant Design. It formats and displays a monetary input field with customizable currency symbols and precision, leveraging a custom \`useMoney\` hook for currency settings."
      - **MultiStepSelectAsync**
        - index.jsx: "This file defines a \`MultiStepSelectAsync\` React component that provides a two-step selection process using Ant Design's \`Select\` component. It fetches options asynchronously based on the selected values and handles errors using a custom error handler."
      - **NotFound**
        - index.jsx: "This file defines a \`NotFound\` React component that displays a 404 error message using Ant Design's \`Result\` component. It includes a button that navigates the user back to the homepage, with all text translated using a custom \`useLanguage\` hook."
      - **Notification**
        - index.jsx: "This React component, \`Notifications\`, displays a list of notifications with delete buttons. Users can remove notifications from the list by clicking the delete icon next to each notification."
      - **PageLoader**
        - index.jsx: "This file defines a \`PageLoader\` React component that uses Ant Design's \`Spin\` component with a custom loading icon (\`LoadingOutlined\`). The loader is styled to be centered absolutely on the page."
      - **ReadItem**
        - index.jsx: "This React component, \`ReadItem\`, displays a list of items with their labels and values in a formatted layout using Ant Design's \`Row\` and \`Col\` components. It fetches data from a Redux store and formats date values using \`dayjs\`, updating the display based on the component's state and configuration."
      - **SearchItem**
        - index.jsx: "This file defines a \`SearchItemComponent\` that uses a debounced search input to query and display selectable search results from a Redux store. The \`SearchItem\` component manages the rendering of \`SearchItemComponent\` instances, triggering re-renders when necessary."
      - **SelectAsync**
        - index.jsx: "This file defines a \`SelectAsync\` React component that asynchronously fetches and displays a list of options using the Ant Design \`Select\` component. It supports optional redirection and custom label display, with options styled using tags and colors."
      - **SelectTag**
        - index.jsx: "This file defines a \`SelectTag\` component using Ant Design's \`Select\` and \`Tag\` components. It maps over the provided \`options\` to render each as a selectable option, using \`shortid\` to generate unique keys for each option."
      - **SidePanel**
        - index.jsx: "This file defines a \`SidePanel\` component using React and Ant Design's \`Drawer\` component. It manages the panel's open/close state and animations, and includes a collapsible content section using a \`CollapseBox\` component."
      - **TabsContent**
        - TabsContent.jsx: "This file defines a \`TabsContent\` component using Ant Design's \`Tabs\`, \`Row\`, and \`Col\` components. It structures a tabbed interface with a customizable right-side menu and settings layout, allowing for dynamic content and a specified default active tab."
      - **Tag**
        - index.jsx: "This file defines a \`StatusTag\` component using React and Ant Design's \`Tag\` component. It assigns a color based on the status prop and translates the status text using a custom hook, \`useLanguage\`."
      - **UpdateForm**
        - index.jsx: "This file defines an \`UpdateForm\` component in React, which handles form submissions and updates using Redux for state management. It includes functionality for handling file uploads, formatting date fields with \`dayjs\`, and managing UI state transitions with context actions."
      - **Visibility**
        - index.jsx: "The \`Visibility\` component in this file is a React functional component that conditionally renders its children based on the \`isOpen\` prop. It applies inline styles to toggle the display and opacity of the content between visible and hidden states."
      - **outsideClick.js**
        - demo.js: "This file defines a React component \`App\` that renders a simple interface with two dropdown menus for selecting a vegetable and a fruit. It uses the \`useState\` hook to manage the selected values and renders the component into the DOM using \`ReactDOM.render\`."
        - index.js: "This file defines a \`Dropdown\` component using React hooks. It manages the dropdown's open/close state and handles clicks both inside and outside the component to toggle its visibility."
    - **config**
      - serverApiConfig.js: "This configuration file sets up various base URLs for API, website, and file access, dynamically adjusting them based on the environment (production or development). It also defines a constant for the access token name used in authentication."
    - **context**
      - **adavancedCrud**
        - actions.jsx: "This file defines a set of context actions for managing the state of various UI panels and modals in a React application. It uses a dispatch function to trigger state changes based on action types imported from a separate file."
        - index.jsx: "This file defines a React context for managing advanced CRUD operations. It provides a context provider and a custom hook to access state, actions, and selectors related to the CRUD operations."
        - reducer.jsx: "This file defines a reducer function for managing the state of a CRUD interface, handling actions to open and close modals and panels. It uses an initial state and updates the state based on action types imported from a separate file."
        - selectors.jsx: "This file defines a \`contextSelectors\` function that returns an object with methods to check the open state of UI components (\`isModalOpen\`, \`isPanelOpen\`, \`isBoxOpen\`) based on the application's state. It exports this function as the default export."
        - types.jsx: "This file defines a set of string constants representing different action types for managing UI components, such as modals and panels, in a React application. These constants are used to ensure consistency and avoid typos in action type strings across the application."
      - **appContext**
        - actions.jsx: "This file defines a \`contextActions\` function that returns an object with methods to dispatch actions for managing navigation menu states and application states. It uses action types imported from a separate \`types\` module to handle opening, closing, and collapsing the navigation menu, as well as changing and resetting the application state."
        - index.jsx: "This file defines a React context for managing global state in an application. It provides a context provider component (\`AppContextProvider\`) and a custom hook (\`useAppContext\`) to access and manipulate the state using actions."
        - reducer.jsx
        - types.jsx
      - **crud**
        - actions.jsx
        - index.jsx
        - reducer.jsx
        - selectors.jsx
        - types.jsx
      - **erp**
        - actions.jsx
        - index.jsx
        - reducer.jsx
        - selectors.jsx
        - types.jsx
      - **profileContext**
        - actions.jsx
        - index.jsx
        - reducer.jsx
        - selectors.jsx
        - types.jsx
    - favicon.ico
    - **forms**
      - AdminForm.jsx: "This file defines an \`AdminForm\` component using Ant Design's form elements, which includes fields for user details like name, email, and role, with conditional rendering for password input. It also includes a file upload validation function, though the upload feature is currently commented out."
      - AdvancedSettingsForm.jsx: "This file defines a React component \`AdvancedSettingsForm\` using Ant Design components to create a form for managing advanced settings. It includes dynamic form fields for different setting types, such as text, number, date, and select options, with localization support and conditional rendering based on the selected type."
      - CurrencyForm.jsx:"This file defines a React component \`CurrencyForm\` using Ant Design components to create a form for inputting currency details, including name, symbol, separators, and a default currency toggle."
      - CustomerForm.jsx:"This file defines a \`CustomerForm\` component using Ant Design's \`Form\` and \`Input\` components, with validation rules for company, manager names, phone, and email fields, including custom validation for empty strings and phone number format. Note: To make changes in the configuration, refer to \`frontend/src/pages/Customer/config.js\`."
      - **DynamicForm**
        - index.jsx: "This file defines a \`DynamicForm\` component that dynamically renders form elements based on the provided \`fields\` configuration. It includes various input types and components, such as \`Select\`, \`Input\`, and \`DatePicker\`, with support for translations and feedback handling."
      - EmployeeForm.jsx: "This file defines an \`EmployeeForm\` component using Ant Design's form elements, which includes fields for personal and contact information, with validation rules and localization support."
      - ForgetPasswordForm.jsx: "This file defines a React component \`ForgetPasswordForm\` that renders an email input field with validation rules using Ant Design, and utilizes a translation hook for the placeholder text."
      - InventoryForm.jsx: "This file defines a React component \`InventoryForm\` using Ant Design's form elements to capture product details, including product name, quantity, and unit price, with validation rules for each field."
      - LeadForm.jsx: "This file defines a \`LeadForm\` component using Ant Design's \`Form\`, \`Input\`, and \`Select\` components, with fields for personal and company information, translated labels, and validation rules."
      - LoginForm.jsx: "This file defines a \`LoginForm\` component using React and Ant Design, which includes email and password input fields, a "Remember me" checkbox, and a "Forgot password" link, with support for localization."
      - OrderForm.jsx: "This file defines a React component \`OrderForm\` using Ant Design components to create a form for managing order details, including fields for order ID, products, quantity, price, status, and notes, with validation for required fields and non-empty strings."
      - PaymentForm.jsx: "This file defines a \`PaymentForm\` component in React using Ant Design, which includes form fields for number, date, amount, payment mode, reference, and description, with localization and currency formatting support."
      - PaymentModeForm.jsx: This file defines a React component \`PaymentModeForm\` that uses Ant Design components to create a form for managing payment modes, including fields for name, description, and toggle switches for enabling and setting a default mode, with support for localization.
      - RegisterForm.jsx: "This file defines a \`RegisterForm\` component using React and Ant Design, which includes fields for name, email, password, and country selection, with localization support."
      - ResetPasswordForm.jsx: "This file defines a \`ResetPasswordForm\` component using React and Ant Design, which includes password and confirm password fields with validation to ensure the passwords match."
      - TaxForm.jsx: "This file defines a React component \`TaxForm\` using Ant Design components to create a form for inputting tax details, including name, value, and toggle switches for enabling and setting a default status, with localization support."
      - UpdateEmail.jsx
    - **hooks**
      - useDebounce.jsx: The \`useDebounce\` hook delays the execution of a function until after a specified delay period has passed since the last time it was invoked, using dependencies to reset the delay.
      - useFetch.jsx: "This file defines a custom React hook, \`useFetch\`, which manages the state of data fetching operations, including loading, success, and error states, by utilizing another hook, \`useFetchData\`."
      - useMail.jsx: "This React hook, \`useMail\`, provides a function to send mail data to a Redux action and tracks the loading state from the Redux store."
      - useNetwork.jsx: "This file defines a custom React hook,\`useNetwork\`, that tracks the network status and connection properties of the user's device, updating the state when the network goes online, offline, or changes."
      - useOnFetch.jsx: "This React hook, \`useOnFetch\`, manages the state of a fetch operation, including the result, success status, and loading state."
      - useResponsive.jsx: "This file defines a custom React hook, \`useResponsive\`, that tracks and provides the current screen size and a mobile status based on configurable breakpoints, updating subscribers on window resize events."
      - useTimeoutFn.jsx: "This custom React hook, \`useTimeoutFn\`, manages a timeout function that can be set, cleared, and checked for readiness, automatically updating when the function or delay changes."
    - **layout**
      - **AuthLayout**
        - index.jsx : "This file defines a React component \`AuthLayout\` that uses Ant Design's \`Layout\`, \`Row\`, and \`Col\` components to structure a two-column layout, with customizable side content and main content areas."
      - **CrudLayout**
        - index.jsx: "This file defines a \`CrudLayout\` component that uses a \`DefaultLayout\` and a \`SidePanel\`, managing the side panel's open/close state with context and effects, and rendering children within a styled \`ContentBox\`."
      - **DashboardLayout**
        - index.jsx: "This file defines a \`DashboardLayout\` component in React that uses Ant Design's \`Layout\` and applies a left margin to its children."
      - **DefaultLayout**
        - index.jsx: "This file defines a \`DefaultLayout\` component that wraps its children with a \`CrudContextProvider\` to provide CRUD context functionality."
      - **ErpLayout**
        - index.jsx: "This file defines the \`ErpLayout\` component, which wraps its children with an \`ErpContextProvider\` and styles the content using Ant Design's \`Layout.Content\`."
      - **Footer**
        - index.jsx: "This file defines and exports a React functional component that renders a footer using Ant Design's \`Layout.Footer\` with centered text."
      - **ProfileLayout**
        - index.jsx: "This file defines a \`ProfileLayout\` component that wraps its children with a \`ProfileContextProvider\` to provide profile-related context to its descendants."
      - **SettingsLayout**
        - index.jsx : "This file defines a \`SettingsLayout\` component using React and Ant Design, which structures a layout with a customizable top card and content area."
      - index.jsx : "This file exports default components from various layout modules, making them available for import in other parts of the application."
    - **locale**
      - Localization.jsx: "This file defines a \`Localization\` component that wraps its children with an Ant Design \`ConfigProvider\` to apply a custom theme."
      - antdLocale.js: "This file imports the English (US) locale from Ant Design and exports it as part of an object for use in the application."
      - coreTranslation.js : "This file defines and exports an array containing a single string, \`'en_us'\`, which likely represents a supported language code for localization purposes."
      - **translation**
        - en_us.js :"This file contains a JavaScript object that maps English language keys to their corresponding translation strings for a web application's user interface."
        - otherTranslation.js : "This file defines an empty \`languages\` object and exports it as the default export."
        - translation.js : "This file imports English (US) translations and exports them as part of a \`languages\` object."
      - useLanguage.jsx : "This file defines a \`useLanguage\` hook that provides a \`translate\` function to convert a given key into a human-readable label, storing and retrieving translations from local storage if not found."
    - logo-icon.svg
    - main.jsx
    - **modules**
      - **AuthModule**
        - SideContent.jsx: "This React component, \`SideContent\`, renders a styled content section with a logo, title, and descriptive text for an open-source ERP/CRM application using Ant Design."
        - index.jsx :"This file defines an \`AuthModule\` React component that uses an \`AuthLayout\` to display authentication-related content, including a logo, title, and additional content, with language translation support."
      - **CrudModule**
        - CrudModule.jsx: "This file defines a \`CrudModule\` component that manages CRUD operations with a layout including a header panel, side panels for item creation and updates, and a data table, utilizing Redux for state management and Ant Design for UI components."
      - **DashboardModule**
        - **components**
          - CustomerPreviewCard.jsx: "This file defines a \`CustomerPreviewCard\` React component that displays customer statistics, including a progress dashboard and active customer count, with loading and translation support."
          - PreviewCard.jsx: "This file defines a \`PreviewCard\` component in React that displays a progress overview of various statuses, with customizable statistics and loading states, using Ant Design components."
          - **RecentTable**
            - index.jsx: "This file defines a \`RecentTable\` component that displays a table with actions for reading, editing, and downloading records, using Ant Design components and Redux for state management."
          - SummaryCard.jsx: "This file defines a React component \`AnalyticSummaryCard\` that displays a summary card with a title, prefix, and formatted data, using Ant Design components and Redux for state management."
        - index.jsx: "The \`DashboardModule\` component fetches and displays summary statistics for invoices, quotes, payments, and clients using various cards and tables, with data formatted according to user-selected currency settings."
      - **ErpPanelModule**
        - CreateItem.jsx: " This file defines a React component \`CreateItem\` that manages the creation of items in an ERP system, handling form submission, state updates, and navigation using Redux and Ant Design components."
        - DataTable.jsx : "This file defines a \`DataTable\` component in a React application, which displays a paginated table with CRUD operations and additional actions using Ant Design components and Redux for state management."
        - DeleteItem.jsx : "This file defines a React component that manages a modal for deleting items, handling the display of item details and dispatching delete actions using Redux."
        - ItemRow.jsx: "This file defines a React component \`ItemRow\` that manages and displays form fields for item details, including name, description, quantity, price, and total, with functionality to update and remove items using Ant Design components."
        - ReadItem.jsx : "This file defines a React component \`ReadItem\` that displays detailed information about an ERP item, including client details, item list, and financial statistics, with options to edit, download, email, or convert the item."
        - SearchItem.jsx: "This file defines a React component that provides an auto-complete search feature, integrating with Redux for state management and using Ant Design components for the UI."
        - UpdateItem.jsx: "This file defines a React component \`UpdateItem\` that manages the state and form submission for updating ERP items, utilizing Redux for state management and Ant Design for UI components."
        - index.jsx: "This file defines the \`ErpPanel\` component, which uses React hooks to manage state and effects, and renders a data table and a delete modal within an ERP context."
      - **InvoiceModule**
        - **CreateInvoiceModule**
          - index.jsx: "This file defines a \`CreateInvoiceModule\` component that uses an \`ErpLayout\` to render a \`CreateItem\` component with an \`InvoiceForm\` for creating invoices."
        - **Forms**
          - InvoiceForm.jsx: "This file defines an \`InvoiceForm\` component in React that manages invoice details, including client information, invoice number, year, status, date, expiration date, and itemized entries, while dynamically calculating totals and taxes using Ant Design components and Redux state."
        - **InvoiceDataTableModule**
          - index.jsx : "This file defines a React component \`InvoiceDataTableModule\` that renders an ERP layout with a panel, including an option to record payments, using localization and an icon."
        - **ReadInvoiceModule**
          - index.jsx : "This file defines a React component, \`ReadInvoiceModule\`, which fetches and displays invoice data using Redux, showing a loader during data retrieval and rendering either the invoice details or a "Not Found" message based on the fetch result."
        - **RecordPaymentModule**
          - **components**
            - Payment.jsx : "This file defines a React component \`Payment\` that displays payment details and actions for a specific entity, using Ant Design components and hooks for state management and navigation."
            - RecordPayment.jsx : "This React component, \`RecordPayment\`, manages the recording of payments for invoices, handling form submission, state updates, and navigation using Redux and Ant Design."
          - index.jsx: "This file defines a React component, \`RecordPaymentModule\`, which manages the state and rendering of a payment recording interface using Redux for state management and React Router for parameter handling."
        - **UpdateInvoiceModule**
          - index.jsx : "This file defines a React component, \`UpdateInvoiceModule\`, which manages the update process for an invoice, including data fetching, loading states, and rendering the appropriate form or error message."
      - **PaymentModule**
        - **PaymentDataTableModule**
          - index.jsx: "This file defines a React component \`PaymentDataTableModule\` that renders an \`ErpLayout\` containing an \`ErpPanel\` with a given configuration."
        - **ReadPaymentModule**
          - **components**
            - ReadItem.jsx : "This React component, \`ReadItem\`, displays detailed payment information for a selected item, including client details and financial statistics, with options to edit, download, or email the invoice."
          - index.jsx : "This file defines a React component that fetches and displays payment module data using Redux, showing a loader while data is being retrieved."
        - **UpdatePaymentModule**
          - **components**
            - Payment.jsx : "This React component, \`Payment\`, displays and updates payment details for a client, utilizing Ant Design components and hooks for state management and navigation."
            - UpdatePayment.jsx : "This file defines a React component for updating payment details, utilizing form handling, state management, and navigation within a Redux-based application."
          - index.jsx : "This file defines a React component, \`UpdatePaymentModule\`, which manages the state and rendering of a payment update interface, utilizing Redux for state management and React Router for parameter handling."
      - **ProfileModule**
        - **components**
          - AdminInfo.jsx : "This file defines the \`AdminInfo\` component, which displays the current admin's profile information and provides buttons for editing details, updating the password, and logging out."
          - PasswordModal.jsx : "This file defines a \`PasswordModal\` component in React using Ant Design, which allows users to update their password with form validation and handles the submission process through a context and custom hooks."
          - Profile.jsx : "This file defines a \`Profile\` component that uses context to conditionally render \`AdminInfo\`, \`UpdateAdmin\`, and a \`PasswordModal\` based on the application's state."
          - ProfileAdminForm.jsx
          - UpdateAdmin.jsx
          - UploadImg.jsx
        - index.jsx
      - **QuoteModule**
        - **CreateQuoteModule**
          - index.jsx
        - **Forms**
          - QuoteForm.jsx
        - **QuoteDataTableModule**
          - index.jsx
        - **ReadQuoteModule**
          - index.jsx
        - **UpdateQuoteModule**
          - index.jsx
      - **SettingModule**
        - **CompanyLogoSettingsModule**
          - **forms**
            - AppSettingForm.jsx
          - index.jsx
        - **CompanySettingsModule**
          - SettingsForm.jsx
          - index.jsx
        - **FinanceSettingsModule**
          - SettingsForm.jsx
          - index.jsx
        - **GeneralSettingsModule**
          - **forms**
            - GeneralSettingForm.jsx
          - index.jsx
        - **MoneyFormatSettingsModule**
          - SettingsForm.jsx
          - index.jsx
        - **components**
          - SetingsSection.jsx
          - UpdateSettingForm.jsx
          - UpdateSettingModule.jsx
    - **pages**
      - About.jsx: "About page providing information about the application and its features."
      - **Customer**
        - config.js:  "Important: Configuration for customer, client page, including fields like name, country, phone, and email. Update this if you want to make changes in the customer or client form."
        - index.jsx:  "Important: Utilizes config.js to build a dynamic form for adding new customers. Update this if you want to make changes in the customer or client form."
      - Dashboard.jsx: "Loads the Dashboard module from DashboardModule/index.jsx.",
      - ForgetPassword.jsx: "Page for password recovery."
      - **Invoice**
        - InvoiceCreate.jsx:  "Loads CreateInvoiceModule with specific configurations."
        - InvoiceRead.jsx:  "Loads ReadInvoiceModule with specific configurations.",
        - InvoiceRecordPayment.jsx: "Loads RecordPaymentModule with specific configurations."
        - InvoiceUpdate.jsx:"Loads UpdateInvoiceModule with specific configurations."
        - index.jsx: "Displays a table of invoices with columns such as Number, Client, Date, Expiry Date, Total, Paid, Status, and Payment."
      - Login.jsx: "User login page. "
      - Logout.jsx: "User logout page."
      - NotFound.jsx: "Page displayed when a route is not found."
      - **Payment**
        - PaymentRead.jsx: "Loads ReadPaymentModule with specific configurations."
        - PaymentUpdate.jsx: "Loads UpdatePaymentModule with specific configurations."
        - index.jsx: "Displays a table of payments with columns such as Number, Client, Amount, Date, Year, and Payment Mode."
      - **PaymentMode**
        - index.jsx: "Displays a table of payment modes with columns such as Payment Mode, Description, Default, Enabled, and includes a search textbox, refresh button, and add payment mode button."
      - Profile.jsx: "Loads the Profile Module."
      - **Quote**
        - QuoteCreate.jsx: "Loads CreateQuoteModule with specific configurations."
        - QuoteRead.jsx: "Loads ReadQuoteModule with specific configurations."
        - QuoteUpdate.jsx: "Loads UpdateQuoteModule with specific configurations."
        - index.jsx: "Displays a table of quotes with columns such as Client, Date, Expiry Date, Sub Total, Total, and Status, using QuoteDataTableModule."
      - ResetPassword.jsx: "Form for resetting passwords.
      - **Settings**
        - CompanyLogoSettings.jsx: "Loads CompanyLogoSettingsModule with specific configurations."
        - CompanySettings.jsx:"Loads CompanySettingsModule with specific configurations."
        - FinanceSettings.jsx:: "Loads FinanceSettingsModule with specific configurations."
        - GeneralSettings.jsx: "Loads GeneralSettingsModule with specific configurations."
        - MoneyFormatSettings.jsx: "Loads MoneyFormatSettingsModule with specific configurations."
        - Settings.jsx: "TabsContent to load various settings modules including CompanyLogoSettings, CompanySettings, FinanceSettings, GeneralSettingsModule, and MoneyFormatSettings."
      - **Taxes**
        - index.jsx: "Displays a table of quotes with columns such as Name Value Default Enabled"
    - **redux**
      - **adavancedCrud**
        - actions.js
        - index.js
        - reducer.js
        - selectors.js
        - types.js
      - **auth**
        - actions.js
        - index.js
        - reducer.js
        - selectors.js
        - types.js
      - **crud**
        - actions.js
        - index.js
        - reducer.js
        - selectors.js
        - types.js
      - **erp**
        - actions.js
        - index.js
        - reducer.js
        - selectors.js
        - types.js
      - rootReducer.js
      - **settings**
        - actions.js
        - index.js
        - reducer.js
        - selectors.js
        - types.js
      - store.js
      - storePersist.js
    - **request**
      - checkImage.js
      - codeMessage.js
      - errorHandler.js
      - index.js
      - request.js
      - successHandler.js
    - **router**
      - AppRouter.jsx: "Main router for the application."
      - AuthRouter.jsx: "Handles authentication-related routes such as login, logout, forgot password, and reset password. Note: Ensure to add the user registration route here and also in AppRouter.jsx."
      - routes.jsx "Defines the routes for the application."
    - **settings**
      - index.jsx
      - useDate.jsx
      - useMoney.jsx
    - **style**
      - app.css
      - **images**
        - checklist.svg
        - fitbit-gray.svg
        - flow-xo-gray.svg
        - gitlab-gray.svg
        - idurar-crm-erp.svg
        - layar-gray.svg
        - logo-icon.png
        - logo-icon.svg
        - logo-menu.png
        - logo-text.png
        - logo-text.svg
        - logo.png
        - logo.svg
        - logo1.png
        - logo2.png
        - logo3.png
        - logo4.png
        - photo.png
      - **partials**
        - auth.css
        - collapseBox.css
        - core.css
        - customAntd.css
        - erp.css
        - header.css
        - layout.css
        - navigation.css
        - rest.css
        - sidePanel.css
        - transition.css
    - **utils**
      - calculate.js
      - color.js
      - countryList.js
      - currencyList.js
      - dataStructure.jsx
      - helpers.js
      - isBrowser.js
      - statusTagColor.js
      - tagColor.js
      - valueType.js
  - temp.env
  - vite.config.js`,
    backend: `
- jsconfig.json:""
- package-lock.json:""
- package.json: """
- **src**
  - app.js: "Express.js server setup with middleware, API routes, and error handling."
  - **controllers**
    - **appControllers**
      - **clientController**
        - index.js: "Defines a CRUD controller for the "Client" model with a custom summary method."
        - summary.js: "Provides a summary of client data (new, active, and total clients) within a specified time frame (week, month, or year), including percentage metrics, using MongoDB aggregation."
      - index.js: "Dynamically loads custom and default CRUD controllers for app models based on directory structure and a routes list, combining them into a unified controller object."
      - **invoiceController**
        - create.js: "Creates an invoice by validating input, calculating totals, setting payment status, saving it, updating with a PDF ID, and responding with success or error."
        - index.js: "Exports a set of CRUD methods for managing invoices, including mail, create, update, delete, summary, list, and read functionalities."
        - paginatedList.js: "This function fetches a paginated list of invoices from the database, applying optional filters, sorting, and searching, and returns the results along with pagination details."
        - read.js:"This function retrieves an invoice by its ID from the database, ensuring it is not marked as removed, and returns the document along with a success or error message."
        - remove.js : "This function marks an invoice as removed by updating its \`removed\` status to \`true\` and also updates related payments to be marked as removed, returning a success or error message."
        - schemaValidate.js : "This code defines a Joi schema for validating invoice data, ensuring required fields, types, and specific conditions (e.g., array cannot be empty). It validates fields such as \`client\`, \`number\`, \`year\`, \`status\`, \`notes\`, \`expiredDate\`, \`date\`, \`items\` (an array of objects with specific fields), and \`taxRate\`."
        - sendMail.js : "This code defines a \`mail\` function that responds with a message indicating the user needs to upgrade to the premium version to access full features. The response is a success message with no result."
        - summary.js: "This function calculates and returns a summary of invoices, including total amount, status counts (draft, pending, etc.), payment status (paid, unpaid), and overdue invoices. It aggregates data using MongoDB, calculates percentages, and compiles the results into a final summary, which is then returned in a JSON response."
        - update.js : "Updates an invoice with recalculated totals and payment status, then saves and returns the updated document."
      - **paymentController**
        - create.js :"The \`create\` function processes a payment by validating the amount, creating a new payment document, updating the corresponding invoice, and returning the updated payment information with a PDF link."
        - index.js : "This file sets up CRUD operations for payments, linking specific actions (\`create\`, \`summary\`, \`update\`, \`remove\`, \`sendMail\`) to a middleware controller and exports them for use in the application."
        - remove.js : "Deletes a payment record, updates the associated invoice's payment status and credit, and returns a success or error response."
        - sendMail.js :  "This code defines a \`mail\` function that responds with a message indicating the user needs to upgrade to the premium version to access full features. The response is a success message with no result."
        - summary.js : "This code defines a \`summary\` function that fetches the total count and amount of payments made during a specified time period (week, month, or year), and returns the aggregated results, or a 400 error if an invalid time type is provided."
        - update.js : "This code updates a payment record, checks for minimum and maximum amounts, recalculates payment status (paid, partially, or unpaid), and reflects the changes in the corresponding invoice, ensuring all conditions are met before applying the update."
      - **paymentModeController**
        - index.js :"This file defines custom CRUD operations for the \`PaymentMode\` model, with logic for managing default modes, preventing deletion, and enforcing conditions when updating payment modes."
      - **quoteController**
        - convertQuoteToInvoice.js : "This code defines a function \`convertQuoteToInvoice\`, which responds with a message indicating that users need to upgrade to a premium version to access full features."
        - create.js : "The \`create\` function generates a quote by calculating totals from items, saves the quote to the database, associates a PDF file, increments the quote number, and returns a success response."
        - index.js : "This file imports CRUD operations for managing quotes and consolidates them into a single object, attaching methods for listing, reading, sending mail, creating, updating, converting quotes to invoices, and fetching summary data.'
        - paginatedList.js
        - read.js
        - sendMail.js
        - summary.js
        - update.js
      - **taxesController**
        - index.js :"This code customizes CRUD operations for the \`Taxes\` model, including logic to manage default taxes, prevent deletion of taxes, and handle updates with special rules for \`isDefault\` and \`enabled\` fields."
    - **coreControllers**
      - **adminAuth**
        - index.js :"This code exports authentication middleware for the \`Admin\` model by calling the \`createAuthMiddleware\` function with \`'Admin'\` as an argument, which generates middleware for authentication-related tasks (e.g., token validation, login, logout) specific to \`Admin\` users."
      - **adminController**
        - index.js :"This code exports a user controller for the \`Admin\` model by calling the \`createUserController\` function with \`'Admin'\` as an argument, which likely generates the necessary CRUD operations for managing \`Admin\` users."
      - **settingController**
        - index.js :"The \`settingMethods\` object combines standard CRUD operations and specialized methods for managing settings, including listing, reading, and updating by \`settingKey\`."
        - listAll.js :"The \`listAll\` function retrieves all non-removed, non-private setting documents from the database, optionally sorted by creation date in ascending or descending order, and returns the results or an empty collection message."
        - listBySettingKey.js :"The \`listBySettingKey\` function retrieves multiple setting documents from the database based on a list of provided \`settingKey\` values, returning a success or error message depending on whether the matching settings are found."
        - readBySettingKey.js :"The \`readBySettingKey\` function retrieves a setting document from the database based on the provided \`settingKey\`, returning a success or error message depending on whether the setting is found."
        - updateBySettingKey.js :"The \`updateBySettingKey\` function updates a specific setting in the database using a provided \`settingKey\` and \`settingValue\`, returning a success or error message based on the result."
        - updateManySetting.js :"The \`updateManySetting\` function updates multiple settings in the database by processing an array of setting key-value pairs, validating the input, and using a bulk write operation to update the matching settings. It returns appropriate responses based on the success or failure of the update process." 
      - setup.js :"The \`setup\` function initializes the IDURAR app by validating admin credentials, creating an admin account, setting up default settings, taxes, and payment modes, and then saving them to the database."
    - **middlewaresControllers**
      - **createAuthMiddleware**
        - authUser.js : "The \`authUser\` function verifies user credentials, generates a JWT token on successful authentication, saves it in the session, and returns the user details along with the token."
        - checkAndCorrectURL.js : "The \`checkAndCorrectURL\` function ensures that a URL has the appropriate protocol ('http://' or 'https://'), removes any trailing slashes, and adds the correct protocol back if it was removed."
        - forgetPassword.js :"The \`forgetPassword\` function validates the email, generates a reset token for the user, updates the password record, and sends a password reset link via email."
        - index.js :"\`createAuthMiddleware\` generates an object with authentication methods (e.g., token validation, login, logout, password reset) tailored to a specified \`userModel\`."
        - isValidAuthToken.js :"This function \`isValidAuthToken\` validates a JWT authentication token by verifying its authenticity, checking if the user exists and is active, and ensuring the token is still valid, before attaching the user data to the request object for further use."
        - login.js :"The \`login\` function validates user credentials, checks if the account exists and is enabled, then authenticates the user by comparing the password and calls \`authUser\` for further authentication handling."
        - logout.js :"The \`logout\` function removes the user's session token from the \`loggedSessions\` array, either by removing the specified token or clearing all sessions, and returns a success message."
        - resetPassword.js : "The \`resetPassword\` function validates the reset token, hashes the new password, updates the user's password, and returns a JWT token for authentication if the reset is successful."
        - sendMail.js : "The \`sendMail\` function sends an email using the Resend service with a verification template, including a personalized message and verification link."
      - **createCRUDController**
        - create.js : "The \`create\` function creates a new document in the specified model's collection and returns a success response with the created document."
        - filter.js :"The \`filter\` function searches a model for documents based on a specified filter and equality condition, returning an appropriate success or error response based on the result."
        - index.js : "The \`createCRUDController\` function generates CRUD operations (create, read, update, delete, etc.) for a specified model, ensuring the model exists before providing the corresponding methods."
        - listAll.js : "The \`listAll\` function retrieves all documents from the specified model, with optional sorting and filtering based on the \`enabled\` status, and returns the results."
        - paginatedList.js : "The \`paginatedList\` function retrieves a paginated list of documents based on the specified filters, sorting, and search query, and returns the results along with pagination details."
        - read.js :"The \`read\` function retrieves a non-removed document by ID from the database and returns it, or a "not found" message if no document matches."
        - remove.js : "The file exports a \`remove\` function that marks a document as deleted by setting its \`removed\` field to \`true\` and returns a success or failure response based on the outcome."
        - search.js : "The file exports a \`search\` function that searches for documents in a model based on query parameters, checking multiple fields for matches and returning results or a message if no documents are found."
        - summary.js :"The file exports a \`summary\` function that queries a database model to count filtered and total documents that are not marked as removed, and returns the counts or a message if the collection is empty."
        - update.js :"The file exports an \`update\` function that updates a document in a specified \`Model\` by its ID, ensuring the document is not marked as removed, and returns the updated result or an error message if not found."
      - **createUserController**
        - index.js : "The file exports a \`createUserController\` function that provides methods for reading and updating user profiles and passwords based on the provided \`userModel\`."
        - read.js : "The file exports a function \`read\` that retrieves a user document by its ID from the database and returns a response with the user's details if found, or an error message if the document is not found."
        - updatePassword.js :"The file exports a function \`updatePassword\` that updates a user's password (after ensuring it's at least 8 characters long) in the database, while preventing updates for a demo account, and returns a response indicating success or failure based on whether the password update was successful."
        - updateProfile.js :"The file exports a function \`updateProfile\` that updates a user's profile information (email, name, surname, and photo) in the database, while preventing updates for a demo account, and returns a response with the updated user details or an error message if no profile is found."
        - updateProfilePassword.js :"The file exports a function \`updateProfilePassword\` that validates and updates a user's password in the database, ensuring it meets certain criteria and handling cases such as demo accounts or failed updates."
    - **pdfController**
      - index.js : "The file defines a \`generatePdf\` function that generates a PDF from a Pug template using app settings and data, and saves it to a specified location, replacing any existing PDF."
  - **emailTemplate**
    - SendEmailTemplate.js :"This file exports a function that generates an HTML email template for password reset requests, dynamically inserting the recipient's name and a reset link."
    - emailVerfication.js :"These templates generate HTML email content for an invoice, quote, or offer, dynamically inserting a title, recipient's name, and timestamp, with consistent formatting for each type of email."
  - **handlers**
    - **downloadHandler**
      - downloadPdf.js : "A controller for downloading PDFs by dynamically retrieving data from a MongoDB model and handling errors like missing fields, invalid IDs, or server issues."
    - errorHandlers.js :"Custom error handling middleware for Express, including async error handling, 404 not found, and environment-specific error responses for development and production."
  - helpers.js
  - **locale**
    - languages.js
    - **translation**
      - en_us.js :"This module exports a comprehensive set of English translations for UI elements, settings, labels, and business-related terms in an ERP/CRM system."
    - useLanguage.js :"A language translation utility that loads a language file, formats keys into readable labels, and provides a translation function based on the selected language."
  - **middlewares**
    - **inventory**
      - generateUniqueNumber.js: "Generates a unique 13-digit number combining the current date, a random 3-digit number, and a padded \`uniqueId\`."
      - index.js :"Exports the \`generateUniqueNumber\` function from the \`../inventory/generateUniqueNumber\` module."
    - serverData.js : "Mongoose helper functions to fetch data: \`getData\` retrieves all records from a model with \`removed\` as false and \`enabled\` as true, and \`getOne\` retrieves a single record by ID with \`removed\` as false."
    - **settings**
      - increaseBySettingKey.js :"This function increases the \`settingValue\` by 1 for a given \`settingKey\` in the \`Setting\` model. If the settingKey is not found or an error occurs, it returns \`null\`."
      - index.js : "Exports various functions for interacting with settings, including loading, listing, reading, updating, and increasing settings by key."
      - listAllSettings.js : "Fetches all settings from the \`Setting\` model where \`removed\` is \`false\`. If no results are found or an error occurs, returns an empty array."
      - listBySettingKey.js : "Fetches documents from the \`Setting\` model based on an array of \`settingKey\` values, ensuring they are not marked as removed."
      - loadSettings.js :"The \`loadSettings\` function fetches all settings using the \`listAllSettings\` function, then organizes them into an object with the \`settingKey\` as the key and \`settingValue\` as the value, returning the final settings object."
      - readBySettingKey.js :"The \`readBySettingKey\` function retrieves a setting by its key, returning the document if found, or \`null\` if not found or an error occurs."
      - updateBySettingKey.js : "The \`updateBySettingKey\` function updates a setting by its key and value, returning the updated document or \`null\` if not found or on error."
    - **uploadMiddleware**
      - DoSingleStorage.js : "Middleware for uploading files to DigitalOcean Spaces with validation, unique filename generation, and storage using AWS SDK, saving the file path in the request body."
      - LocalSingleStorage.js : "This code defines a \`singleStorageUpload\` function that configures and returns a \`multer\` middleware to handle file uploads, generate unique filenames with slugs, and store files in a specified directory with a file type filter."
      - index.js :"A module that exports two file upload utilities: \`singleStorageUpload\` for local file storage and \`LocalSingleStorage\` for handling local file uploads with custom logic."
      - singleStorageUpload.js : "This code defines a \`singleStorageUpload\` function that configures a \`multer\` upload handler to store files in a specific directory, generate unique file names using slugified titles, and apply a file type filter."
      - **utils**
        - LocalfileFilter.js : "The \`fileFilter\` function filters files based on their MIME type, ensuring that only specific file types (e.g., images, videos, PDFs) are accepted, and returns an error if the file type is unsupported."
        - fileFilterMiddleware.js : "The \`fileFilterMiddleware\` function filters file uploads based on MIME type and a specified type (e.g., image, video, pdf), returning \`true\` for valid files and \`false\` for unsupported ones."
  - **models**
    - **appModels**
      - Client.js: " Mongoose schema for \`Client\` with fields like name, contact info and methods to fetch recent clients.(Note: If you want to make changes here, ensure corresponding changes are made in the frontend \`frontend/src/forms/CustomerForm.jsx\` component.  and  \`frontend/src/pages/Customer/config.js\`)"
      - Invoice.js :"The \`Invoice\` Mongoose schema models an invoice with details like client, items, payments, status, taxes, and files, supporting recurring billing and auto-populating referenced documents."
      - Payment.js :"Mongoose schema for a \`Payment\` model with fields for client, invoice, amount, payment mode, currency, and timestamps, along with references to related models such as \`Admin\`, \`Client\`, \`Invoice\`, and \`PaymentMode\`."
      - PaymentMode.js :"Mongoose schema for a \`PaymentMode\` model with fields for name, description, reference, default status, and timestamps."
      - Quote.js : "Mongoose schema for a \`Quote\` model with fields for quote details, client, items, tax, total, discount, status, and file attachments."
      - Taxes.js : "Mongoose schema for a \`Taxes\` model with fields for tax name, value, status, and default flag."
    - **coreModels**
      - Admin.js : "Mongoose schema for an admin, including fields for email, name, photo, role, and account status (enabled/removed)."
      - AdminPassword.js :"Mongoose schema for storing admin password data with methods to hash and validate passwords using \`bcryptjs\`."
      - Setting.js: "This Mongoose schema defines a \`Setting\` model with fields for storing configuration settings, including \`settingCategory\`, \`settingKey\`, \`settingValue\`, and a \`valueType\`. It also includes flags like \`isPrivate\` and \`isCoreSetting\` to manage the privacy and importance of the settings." 
      - Upload.js : "This Mongoose schema defines an \`Upload\` model with fields for tracking file information such as \`fileName\`, \`fileType\`, \`path\`, and various attributes like \`isPublic\`, \`isSecure\`, and \`enabled\`."
    - **utils**
      - index.js : "This script dynamically loads models, generates controller names, and creates a list of routes based on model files from the \`src/models/appModels/\` directory."
  - **pdf**
    - Invoice.pug
    - Offer.pug
    - Payment.pug
    - Quote.pug
  - **public**
    - **uploads**
      - **admin**
        - idurar-icon-png-80-i1kez.png
      - **setting**
        - company-logo.png
  - **routes**
    - **appRoutes**
      - appApi.js :"This Express router dynamically sets up CRUD routes and custom operations for multiple entities like \`invoice\`, \`quote\`, \`payment\`, and \`client\` using controller methods, with additional routes for mailing and recent customer functionality, based on the entity type."
    - **coreRoutes**
      - coreApi.js : "This Express router handles various routes for admin and setting management, including updating passwords, profile info, and performing CRUD operations on settings, with file upload capabilities for images."
      - coreAuth.js : "This Express router handles admin authentication with routes for login, password reset, and logout, using \`catchErrors\` middleware to handle errors."
      - coreDownloadRouter.js :"This Express route extracts an ID from the file name and calls a \`downloadPdf\` handler to serve the PDF, returning a 503 error in case of failure."
      - corePublicRouter.js : "This Express route serves files from a sanitized path, returning a 404 if not found and a 503 for other errors."
  - server.js : "This script initializes a Node.js app, checks the Node version, loads environment variables, connects to MongoDB, dynamically imports models, and starts the Express server."
  - **settings**
    - index.js : "Exports utilities for date, money, and app settings in a single module."
    - useAppSettings.js : "The \`useAppSettings\` function returns an object with default app settings, including the email (\`idurar_app_email\`) and the base URL (\`idurar_base_url\`)."
    - useDate.js : "The \`useDate\` function returns the date format from the provided settings, specifically using \`idurar_app_date_format\`."
    - useMoney.js : "The \`useMoney\` function formats amounts based on customizable settings like currency symbol, position, separators, precision, and zero formatting using the \`currency.js\` library."
  - **setup**
    - **defaultSettings**
      - appSettings.json : "These settings define basic application configurations, including date format, language, country, timezone, email, multi-branch support, industry, and early access features."
      - clientSettings.json : "These settings define client types, statuses, sources, categories, and defaults for invoice, quote, and POS operations."
      - companySettings.json : "These settings define various details for the company, including name, contact information, registration, tax details, and logos."
      - financeSettings.json : "These settings define prefixes and the last used numbers for invoices, quotes, offers, and payments in the finance system."
      - invoiceSettings.json : "These settings configure how invoices are handled, including product tax visibility, client loading, PDF footer message, and available invoice statuses."
      - moneyFormatSettings.json : "These settings configure the formatting of money values, including the currency code, name, symbol, position, decimal and thousand separators, cent precision, and zero formatting."
      - quoteSettings.json : "These settings configure various aspects of a quote system, such as product tax visibility, client loading, quote status options, and the footer text for PDF quotes."
    - reset.js: "This script deletes essential data from multiple MongoDB collections (Admin, AdminPassword, Setting, PaymentMode, Taxes) and logs instructions to re-setup the data using the npm run setup command."
    - setup.js : "The script sets up an application by creating an admin user, inserting default settings, taxes, and payment modes into the database, with appropriate logging for success or failure."
    - setupConfig.json : "The array holds application configuration settings with keys, values, and data types for various parameters like app version, environment, database, and licensing."
  - **utils**
    - countryList.js : "The \`listTimeZones\` array contains objects for countries with their respective time zones, including codes, names, and an array of relevant time zones."
    - currency.js : "The function checkCurrency checks if a given currency code exists in a predefined list of currency codes."
    - currencyList.js : "The currencyList array contains currency objects with details like symbol, decimal separator, and formatting rules."
`
  };

  if (modules[moduleName]) {

    return [false, modules[moduleName]]

  } else {
    throw new Error(`Module with name '${moduleName}' not found.`);
  }
}

module.exports = {
  getModuleDetailByName
}

console.log(getInstructionsForAgent('frontend/src/apps/Header/HeaderContainer.jsx'));




// function generateTreeJson(dirPath) {
//   const items = fs.readdirSync(dirPath).sort();
//   const tree = {};

//   items.forEach(item => {
//     if (item === 'node_modules' || item.startsWith('.')) return;
//     const itemPath = path.join(dirPath, item);

//     if (fs.statSync(itemPath).isDirectory()) {
//       tree[item] = generateTreeJson(itemPath);
//     } else {
//       tree[item] = null;
//     }
//   });

//   return tree;
// }

// function writeTreeToJson(dirPath, outputFile = 'idurar-erp-crm.json') {
//   const treeJson = generateTreeJson(dirPath);
//   fs.writeFileSync(outputFile, JSON.stringify(treeJson, null, 2));
// }

// // Usage
// writeTreeToJson('/Users/ravirawat/Desktop/idurar-erp-crm');

