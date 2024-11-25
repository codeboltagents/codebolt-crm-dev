"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 58521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  serializeError: () => (/* binding */ serializeError)
});

// UNUSED EXPORTS: NonError, deserializeError, errorConstructors, isErrorLike

;// ./node_modules/serialize-error/error-constructors.js
const list = [
// Native ES errors https://262.ecma-international.org/12.0/#sec-well-known-intrinsic-objects
EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError,
// Built-in errors
globalThis.DOMException,
// Node-specific errors
// https://nodejs.org/api/errors.html
globalThis.AssertionError, globalThis.SystemError]
// Non-native Errors are used with `globalThis` because they might be missing. This filter drops them when undefined.
.filter(Boolean).map(constructor => [constructor.name, constructor]);
const errorConstructors = new Map(list);
/* harmony default export */ const error_constructors = (errorConstructors);
;// ./node_modules/serialize-error/index.js

class NonError extends Error {
  name = 'NonError';
  constructor(message) {
    super(NonError._prepareSuperMessage(message));
  }
  static _prepareSuperMessage(message) {
    try {
      return JSON.stringify(message);
    } catch {
      return String(message);
    }
  }
}
const commonProperties = [{
  property: 'name',
  enumerable: false
}, {
  property: 'message',
  enumerable: false
}, {
  property: 'stack',
  enumerable: false
}, {
  property: 'code',
  enumerable: true
}, {
  property: 'cause',
  enumerable: false
}];
const toJsonWasCalled = new WeakSet();
const toJSON = from => {
  toJsonWasCalled.add(from);
  const json = from.toJSON();
  toJsonWasCalled.delete(from);
  return json;
};
const getErrorConstructor = name => error_constructors.get(name) ?? Error;

// eslint-disable-next-line complexity
const destroyCircular = ({
  from,
  seen,
  to,
  forceEnumerable,
  maxDepth,
  depth,
  useToJSON,
  serialize
}) => {
  if (!to) {
    if (Array.isArray(from)) {
      to = [];
    } else if (!serialize && isErrorLike(from)) {
      const Error = getErrorConstructor(from.name);
      to = new Error();
    } else {
      to = {};
    }
  }
  seen.push(from);
  if (depth >= maxDepth) {
    return to;
  }
  if (useToJSON && typeof from.toJSON === 'function' && !toJsonWasCalled.has(from)) {
    return toJSON(from);
  }
  const continueDestroyCircular = value => destroyCircular({
    from: value,
    seen: [...seen],
    forceEnumerable,
    maxDepth,
    depth,
    useToJSON,
    serialize
  });
  for (const [key, value] of Object.entries(from)) {
    if (value && value instanceof Uint8Array && value.constructor.name === 'Buffer') {
      to[key] = '[object Buffer]';
      continue;
    }

    // TODO: Use `stream.isReadable()` when targeting Node.js 18.
    if (value !== null && typeof value === 'object' && typeof value.pipe === 'function') {
      to[key] = '[object Stream]';
      continue;
    }
    if (typeof value === 'function') {
      continue;
    }
    if (!value || typeof value !== 'object') {
      // Gracefully handle non-configurable errors like `DOMException`.
      try {
        to[key] = value;
      } catch {}
      continue;
    }
    if (!seen.includes(from[key])) {
      depth++;
      to[key] = continueDestroyCircular(from[key]);
      continue;
    }
    to[key] = '[Circular]';
  }
  for (const {
    property,
    enumerable
  } of commonProperties) {
    if (typeof from[property] !== 'undefined' && from[property] !== null) {
      Object.defineProperty(to, property, {
        value: isErrorLike(from[property]) ? continueDestroyCircular(from[property]) : from[property],
        enumerable: forceEnumerable ? true : enumerable,
        configurable: true,
        writable: true
      });
    }
  }
  return to;
};
function serializeError(value, options = {}) {
  const {
    maxDepth = Number.POSITIVE_INFINITY,
    useToJSON = true
  } = options;
  if (typeof value === 'object' && value !== null) {
    return destroyCircular({
      from: value,
      seen: [],
      forceEnumerable: true,
      maxDepth,
      depth: 0,
      useToJSON,
      serialize: true
    });
  }

  // People sometimes throw things besides Error objects…
  if (typeof value === 'function') {
    // `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
    // We intentionally use `||` because `.name` is an empty string for anonymous functions.
    return `[Function: ${value.name || 'anonymous'}]`;
  }
  return value;
}
function deserializeError(value, options = {}) {
  const {
    maxDepth = Number.POSITIVE_INFINITY
  } = options;
  if (value instanceof Error) {
    return value;
  }
  if (isMinimumViableSerializedError(value)) {
    const Error = getErrorConstructor(value.name);
    return destroyCircular({
      from: value,
      seen: [],
      to: new Error(),
      maxDepth,
      depth: 0,
      serialize: false
    });
  }
  return new NonError(value);
}
function isErrorLike(value) {
  return Boolean(value) && typeof value === 'object' && 'name' in value && 'message' in value && 'stack' in value;
}
function isMinimumViableSerializedError(value) {
  return Boolean(value) && typeof value === 'object' && 'message' in value && !Array.isArray(value);
}


/***/ })

};
;