
        import { createRequire as __createRequire } from "node:module";
        const require = __createRequire(import.meta.url);
      
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to11, from11, except, desc) => {
  if (from11 && typeof from11 === "object" || typeof from11 === "function") {
    for (let key of __getOwnPropNames(from11))
      if (!__hasOwnProp.call(to11, key) && key !== except)
        __defProp(to11, key, { get: () => from11[key], enumerable: !(desc = __getOwnPropDesc(from11, key)) || desc.enumerable });
  }
  return to11;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/errored.js
var errored_default;
var init_errored = __esm({
  "../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/errored.js"() {
    "use strict";
    errored_default = (error3) => {
      if (error3 instanceof Error) {
        throw error3;
      } else {
        throw new TypeError(error3 ?? "UNKNOWN ERROR");
      }
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/empty.js
function isEmpty(x) {
  if (typeof x === "string" || Array.isArray(x))
    return x.length === 0;
  if (x instanceof Set || x instanceof Map)
    return x.size === 0;
  if (typeof x === "object" && x !== null)
    return Object.keys(x).length === 0;
  return false;
}
var init_empty = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/empty.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/newable.js
function isNewable(x) {
  if (typeof x !== "function")
    return false;
  try {
    Reflect.construct(String, [], x);
    return true;
  } catch {
    return false;
  }
}
var init_newable = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/newable.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/numbers.js
function isFinite(x) {
  if (typeof x === "bigint")
    return true;
  if (typeof x === "number")
    return Number.isFinite(x);
  return false;
}
function isInt(x) {
  if (typeof x === "number")
    return Number.isInteger(x);
  if (typeof x === "bigint")
    return true;
  return false;
}
function isNaN(x) {
  return typeof x === "number" && Number.isNaN(x);
}
function isSafeInt(x) {
  if (typeof x === "number")
    return Number.isSafeInteger(x);
  return false;
}
function isUint(x) {
  if (typeof x === "bigint")
    return x >= 0n;
  if (typeof x === "number")
    return Number.isInteger(x) && x >= 0;
  return false;
}
var numbers_default;
var init_numbers = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/numbers.js"() {
    "use strict";
    numbers_default = {
      isFinite,
      isInt,
      isNaN,
      isSafeInt,
      isUint
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/numeric.js
function isNumeric(x) {
  if (typeof x !== "string")
    return false;
  const trimmed = x.trim();
  if (trimmed === "")
    return false;
  return DECIMAL.test(trimmed);
}
var DECIMAL;
var init_numeric = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/numeric.js"() {
    "use strict";
    DECIMAL = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/object.js
function isObject(x) {
  return typeof x === "object" && x !== null;
}
var init_object = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/object.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/primitive.js
function isPrimitive(x) {
  return primitives.includes(typeof x) || x === null;
}
var primitives;
var init_primitive = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/primitive.js"() {
    "use strict";
    primitives = [
      "bigint",
      "boolean",
      "number",
      "string",
      "symbol",
      "undefined"
    ];
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/strings.js
function isBlank(x) {
  return typeof x === "string" && /^\s*$/.test(x);
}
function isBoolish(x) {
  return x === "true" || x === "false";
}
var strings_default;
var init_strings = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/strings.js"() {
    "use strict";
    strings_default = {
      isBlank,
      isBoolish
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/index.js
function isArray(x) {
  return Array.isArray(x);
}
function isArrayBuffer(x) {
  return x instanceof ArrayBuffer;
}
function isBigint(x) {
  return typeof x === "bigint";
}
function isBlob(x) {
  return x instanceof Blob;
}
function isBoolean(x) {
  return typeof x === "boolean";
}
function isBytes(x) {
  return x instanceof Uint8Array;
}
function isDate(x) {
  return x instanceof Date;
}
function isDefined(x) {
  return x !== void 0;
}
function isDict(x) {
  if (typeof x !== "object" || x === null)
    return false;
  const prototype = Object.getPrototypeOf(x);
  return prototype === Object.prototype || prototype === null;
}
function isError(x) {
  return x instanceof Error;
}
function isFalsy(x) {
  return !x;
}
function isFile(x) {
  return x instanceof File;
}
function isFunction(x) {
  return typeof x === "function";
}
function isIterable(x) {
  return typeof x?.[Symbol.iterator] === "function";
}
function isMap(x) {
  return x instanceof Map;
}
function isNull(x) {
  return x === null;
}
function isNullish(x) {
  return x === null || x === void 0;
}
function isNumber(x) {
  return typeof x === "number";
}
function isPromise(x) {
  return x instanceof Promise;
}
function isRegExp(x) {
  return x instanceof RegExp;
}
function isRequest(x) {
  return x instanceof Request;
}
function isResponse(x) {
  return x instanceof Response;
}
function isSet(x) {
  return x instanceof Set;
}
function isString(x) {
  return typeof x === "string";
}
function isSymbol(x) {
  return typeof x === "symbol";
}
function isTruthy(x) {
  return !!x;
}
function isTypedArray(x) {
  return ArrayBuffer.isView(x);
}
function isUndefined(x) {
  return x === void 0;
}
function isURL(x) {
  return x instanceof URL;
}
var private_default;
var init_private = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/private/index.js"() {
    "use strict";
    init_empty();
    init_newable();
    init_numbers();
    init_numeric();
    init_object();
    init_primitive();
    init_strings();
    private_default = {
      array: isArray,
      arraybuffer: isArrayBuffer,
      bigint: isBigint,
      blank: strings_default.isBlank,
      blob: isBlob,
      boolish: strings_default.isBoolish,
      boolean: isBoolean,
      bytes: isBytes,
      date: isDate,
      defined: isDefined,
      dict: isDict,
      empty: isEmpty,
      error: isError,
      falsy: isFalsy,
      file: isFile,
      finite: numbers_default.isFinite,
      function: isFunction,
      int: numbers_default.isInt,
      iterable: isIterable,
      map: isMap,
      nan: numbers_default.isNaN,
      nonempty: (x) => !isEmpty(x),
      newable: isNewable,
      null: isNull,
      nullish: isNullish,
      number: isNumber,
      numeric: isNumeric,
      object: isObject,
      primitive: isPrimitive,
      promise: isPromise,
      request: isRequest,
      response: isResponse,
      regexp: isRegExp,
      safeint: numbers_default.isSafeInt,
      set: isSet,
      string: isString,
      symbol: isSymbol,
      truthy: isTruthy,
      typedarray: isTypedArray,
      uint: numbers_default.isUint,
      undefined: isUndefined,
      url: isURL
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/public/index.js
var init_public = __esm({
  "../../node_modules/.pnpm/@rcompat+is@0.4.3/node_modules/@rcompat/is/lib/public/index.js"() {
    "use strict";
    init_private();
  }
});

// ../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/is.js
function assert(value, error3) {
  if (value === true)
    return;
  errored_default(error3);
}
function stringify(x) {
  try {
    const stringified = JSON.stringify(x);
    if (stringified !== void 0) {
      return stringified;
    }
  } catch {
  }
  if (x?.toString !== void 0) {
    return x.toString();
  }
  return `${x}`;
}
function deferr(x, message, error3) {
  return error3 ?? `\`${stringify(x)}\` ${message}`;
}
function primitive(type) {
  return (x, error3) => {
    assert(typeof x === type, deferr(x, `must be of type ${type}`, error3));
    return x;
  };
}
function condition(pred, errmsg) {
  return (x, error3) => {
    assert(pred(x), deferr(x, errmsg, error3));
    return x;
  };
}
function untyped(pred, errmsg) {
  return (x, error3) => {
    assert(pred(x), deferr(x, errmsg, error3));
    return x;
  };
}
function narrowed(pred, errmsg) {
  return (x, error3) => {
    assert(pred(x), deferr(x, errmsg, error3));
    return x;
  };
}
var defined, uuid, instance, is_default;
var init_is = __esm({
  "../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/is.js"() {
    "use strict";
    init_errored();
    init_public();
    defined = (x, error3) => {
      assert(private_default.defined(x), deferr(x, "must be defined", error3));
      return x;
    };
    uuid = (x, error3) => {
      const uuidv4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
      assert(typeof x === "string" && uuidv4.test(x), deferr(x, "must be a valid UUIDv4 string", error3));
      return x;
    };
    instance = (x, N, error3) => {
      assert(x instanceof N, deferr(x, `must be instance of ${N.name}`, error3));
      return x;
    };
    is_default = {
      // primitives
      bigint: primitive("bigint"),
      boolean: primitive("boolean"),
      function: primitive("function"),
      number: primitive("number"),
      string: primitive("string"),
      symbol: primitive("symbol"),
      undefined: primitive("undefined"),
      // conditions
      array: condition(private_default.array, "must be array"),
      date: condition(private_default.date, "must be Date"),
      dict: narrowed(private_default.dict, "must be a plain object (dictionary)"),
      error: condition(private_default.error, "must be Error"),
      false: condition((x) => x === false, "must be false"),
      finite: condition(private_default.finite, "must be finite number"),
      int: condition(private_default.int, "must be integer"),
      map: condition(private_default.map, "must be Map"),
      nan: condition(private_default.nan, "must be NaN"),
      newable: condition(private_default.newable, "must be newable"),
      null: condition((x) => x === null, "must be null"),
      nullish: condition(private_default.nullish, "must be null or undefined"),
      object: condition(private_default.object, "must be object"),
      promise: condition(private_default.promise, "must be Promise"),
      regexp: condition(private_default.regexp, "must be RegExp"),
      safeint: condition(private_default.safeint, "must be safe integer"),
      set: condition(private_default.set, "must be Set"),
      true: condition((x) => x === true, "must be true"),
      uint: condition(private_default.uint, "must be unsigned integer"),
      url: condition(private_default.url, "must be URL"),
      empty: untyped(private_default.empty, "must be empty"),
      nonempty: untyped(private_default.nonempty, "must not be empty"),
      defined,
      instance,
      uuid
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/every.js
var every, every_default;
var init_every = __esm({
  "../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/every.js"() {
    "use strict";
    init_is();
    every = {};
    for (const key of Object.keys(is_default)) {
      if (key === "instance")
        continue;
      every[key] = (xs) => {
        xs.forEach((x) => is_default[key](x));
        return xs;
      };
    }
    every.instance = (xs, N, error3) => {
      xs.forEach((x) => is_default.instance(x, N, error3));
      return xs;
    };
    every_default = every;
  }
});

// ../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/maybe.js
var maybe, maybe_default;
var init_maybe = __esm({
  "../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/maybe.js"() {
    "use strict";
    init_is();
    init_public();
    maybe = {};
    for (const key of Object.keys(is_default)) {
      if (key === "instance")
        continue;
      maybe[key] = (x) => {
        if (private_default.nullish(x))
          return x;
        is_default[key](x);
        return x;
      };
    }
    maybe.instance = (x, N, error3) => {
      if (private_default.nullish(x))
        return x;
      return is_default.instance(x, N, error3);
    };
    maybe_default = maybe;
  }
});

// ../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/assert.js
var assert_default;
var init_assert = __esm({
  "../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/private/assert.js"() {
    "use strict";
    init_every();
    init_is();
    init_maybe();
    assert_default = {
      ...is_default,
      every: every_default,
      maybe: maybe_default
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/public/index.js
var init_public2 = __esm({
  "../../node_modules/.pnpm/@rcompat+assert@0.6.0/node_modules/@rcompat/assert/lib/public/index.js"() {
    "use strict";
    init_assert();
  }
});

// ../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/private/color.js
function _(number2) {
  return (message) => `\x1B[${number2}m${message}\x1B[0m`;
}
var color_default;
var init_color = __esm({
  "../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/private/color.js"() {
    "use strict";
    color_default = {
      black: _(30),
      blue: _(34),
      bold: _(1),
      cyan: _(36),
      dim: _(2),
      gray: _(90),
      green: _(32),
      inverse: _(7),
      magenta: _(35),
      red: _(31),
      white: _(37),
      yellow: _(33)
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/private/mark.js
var stringify2, mark_default;
var init_mark = __esm({
  "../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/private/mark.js"() {
    "use strict";
    init_color();
    stringify2 = (params) => params.map((param) => {
      if (param?.toString !== void 0) {
        return param.toString();
      }
      if (param instanceof Error) {
        return param.message;
      }
      return param;
    });
    mark_default = (format, ...params) => stringify2(params).reduce((formatted, param, i) => formatted.replace(`{${i}}`, color_default.dim(param)), format);
  }
});

// ../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/public/mark.js
var init_mark2 = __esm({
  "../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/public/mark.js"() {
    "use strict";
    init_mark();
  }
});

// ../../packages/core/lib/private/AppError.js
var AppError;
var init_AppError = __esm({
  "../../packages/core/lib/private/AppError.js"() {
    "use strict";
    init_mark2();
    AppError = class extends Error {
      constructor(message, ...params) {
        super(mark_default(message, ...params));
      }
    };
  }
});

// ../../packages/core/lib/private/fail.js
function fail(message, ...params) {
  return new AppError(message, ...params);
}
var init_fail = __esm({
  "../../packages/core/lib/private/fail.js"() {
    "use strict";
    init_AppError();
  }
});

// ../../packages/pema/lib/private/CoerceKey.js
var CoerceKey;
var init_CoerceKey = __esm({
  "../../packages/pema/lib/private/CoerceKey.js"() {
    "use strict";
    CoerceKey = /* @__PURE__ */ Symbol("CoerceKey");
  }
});

// ../../packages/pema/lib/private/ParsedKey.js
var ParsedKey;
var init_ParsedKey = __esm({
  "../../packages/pema/lib/private/ParsedKey.js"() {
    "use strict";
    ParsedKey = /* @__PURE__ */ Symbol("ParsedKey");
  }
});

// ../../packages/pema/lib/private/Parsed.js
var Parsed;
var init_Parsed = __esm({
  "../../packages/pema/lib/private/Parsed.js"() {
    "use strict";
    init_CoerceKey();
    init_ParsedKey();
    Parsed = class {
      get [ParsedKey]() {
        return "ParsedKey";
      }
      get infer() {
        return void 0;
      }
      get nullable() {
        return false;
      }
      [CoerceKey](x) {
        return x;
      }
    };
  }
});

// ../../packages/pema/lib/private/GenericType.js
var GenericType;
var init_GenericType = __esm({
  "../../packages/pema/lib/private/GenericType.js"() {
    "use strict";
    init_Parsed();
    GenericType = class extends Parsed {
      get Name() {
        return void 0;
      }
      get Type() {
        return void 0;
      }
    };
  }
});

// ../../packages/pema/lib/private/VirtualType.js
var storable, VirtualType;
var init_VirtualType = __esm({
  "../../packages/pema/lib/private/VirtualType.js"() {
    "use strict";
    init_GenericType();
    storable = (x) => !!x && typeof x === "object" && "datatype" in x;
    VirtualType = class extends GenericType {
      get datatype() {
        if (storable(this.schema))
          return this.schema.datatype;
        throw new Error("cannot be used in a store");
      }
    };
  }
});

// ../../packages/pema/lib/private/DefaultType.js
function isDefaultFunction(x) {
  return typeof x === "function";
}
var DefaultType;
var init_DefaultType = __esm({
  "../../packages/pema/lib/private/DefaultType.js"() {
    "use strict";
    init_VirtualType();
    DefaultType = class extends VirtualType {
      #schema;
      #default;
      constructor(s3, d) {
        super();
        this.#schema = s3;
        this.#default = d;
      }
      get name() {
        return "default";
      }
      get schema() {
        return this.#schema;
      }
      get input() {
        return void 0;
      }
      parse(x, options = {}) {
        let $x = x;
        if ($x === void 0) {
          $x = isDefaultFunction(this.#default) ? this.#default() : this.#default;
        }
        return this.#schema.parse($x, options);
      }
      toJSON() {
        return { type: this.name, of: this.#schema.toJSON() };
      }
    };
  }
});

// ../../packages/pema/lib/private/expected.js
function print_got(x) {
  if (x === void 0) {
    return "undefined";
  }
  if (x === null) {
    return "null";
  }
  return `\`${x?.toString() ?? x}\` (${typeof x})`;
}
var expected_default;
var init_expected = __esm({
  "../../packages/pema/lib/private/expected.js"() {
    "use strict";
    expected_default = (type, x) => `expected ${type}, got ${print_got(x)}`;
  }
});

// ../../packages/pema/lib/private/error.js
function error(name, x, options) {
  return [{
    input: x,
    message: expected_default(name, x),
    path: options?.[ParsedKey] ?? ""
  }];
}
var init_error = __esm({
  "../../packages/pema/lib/private/error.js"() {
    "use strict";
    init_expected();
    init_ParsedKey();
  }
});

// ../../packages/pema/lib/private/SchemaError.js
var SchemaError;
var init_SchemaError = __esm({
  "../../packages/pema/lib/private/SchemaError.js"() {
    "use strict";
    init_mark2();
    SchemaError = class extends Error {
      constructor(message, ...params) {
        super(mark_default(message, ...params));
      }
    };
  }
});

// ../../packages/pema/lib/private/error/schemafail.js
function schemafail(message, ...args) {
  return new SchemaError(message, ...args);
}
var init_schemafail = __esm({
  "../../packages/pema/lib/private/error/schemafail.js"() {
    "use strict";
    init_SchemaError();
  }
});

// ../../packages/pema/lib/private/ParseError.js
function humanize(path) {
  return path === "" ? "" : path.slice(1).split("/").map((seg) => seg.replace(/~1/g, "/").replace(/~0/g, "~")).map((seg) => `.${seg}`).join("");
}
function stringify3(issue) {
  return issue.path === "" ? issue.message : `${humanize(issue.path)}: ${issue.message}`;
}
var ParseError;
var init_ParseError = __esm({
  "../../packages/pema/lib/private/ParseError.js"() {
    "use strict";
    ParseError = class extends Error {
      #issues;
      constructor(issues) {
        super(stringify3(issues[0]));
        this.name = "ParseError";
        this.#issues = issues;
      }
      get issues() {
        return this.#issues;
      }
      toJSON() {
        const issues = this.#issues ?? [];
        if (issues.length === 0) {
          return { message: "Parsing failed", messages: ["Parsing failed"] };
        }
        const is_form = issues.some((i) => i.path !== "");
        if (!is_form) {
          const messages = issues.map((i) => i.message);
          return { message: messages[0], messages };
        }
        const dict2 = {};
        for (const i of issues) {
          const key = i.path;
          if (!dict2[key])
            dict2[key] = { message: i.message, messages: [] };
          dict2[key].messages.push(i.message);
          if (dict2[key].messages.length === 1)
            dict2[key].message = i.message;
        }
        return dict2;
      }
    };
  }
});

// ../../packages/pema/lib/private/fail.js
function fail2(...args) {
  return new ParseError(error(...args));
}
var init_fail2 = __esm({
  "../../packages/pema/lib/private/fail.js"() {
    "use strict";
    init_error();
    init_ParseError();
  }
});

// ../../packages/pema/lib/private/OptionalType.js
var OptionalType;
var init_OptionalType = __esm({
  "../../packages/pema/lib/private/OptionalType.js"() {
    "use strict";
    init_VirtualType();
    OptionalType = class extends VirtualType {
      #schema;
      constructor(s3) {
        super();
        this.#schema = s3;
      }
      get name() {
        return "optional";
      }
      get schema() {
        return this.#schema;
      }
      get nullable() {
        return true;
      }
      parse(x, options = {}) {
        const s3 = this.#schema;
        if (x === void 0) {
          return void 0;
        }
        return s3.parse(x, options);
      }
      toJSON() {
        return {
          type: this.name,
          of: this.schema.toJSON()
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/path/join.js
function escapeToken(token) {
  return token.replace(/~/g, "~0").replace(/\//g, "~1");
}
function join(base, ...tokens) {
  if (tokens.length === 0)
    return base;
  const tail = tokens.map((t) => escapeToken(String(t))).join("/");
  if (base === "")
    return "/" + tail;
  return base + "/" + tail;
}
var init_join = __esm({
  "../../packages/pema/lib/private/path/join.js"() {
    "use strict";
  }
});

// ../../packages/pema/lib/private/path/next.js
function next(s3, options) {
  const base = options?.[ParsedKey] ?? "";
  return options === void 0 ? { [ParsedKey]: join("", String(s3)) } : { ...options, [ParsedKey]: join(base, String(s3)) };
}
var init_next = __esm({
  "../../packages/pema/lib/private/path/next.js"() {
    "use strict";
    init_ParsedKey();
    init_join();
  }
});

// ../../packages/pema/lib/private/path/rebase.js
function rebase(base, rel) {
  if (base === "")
    return rel;
  if (rel === "")
    return base;
  return base + rel;
}
var init_rebase = __esm({
  "../../packages/pema/lib/private/path/rebase.js"() {
    "use strict";
  }
});

// ../../packages/pema/lib/private/Type.js
var Type;
var init_Type = __esm({
  "../../packages/pema/lib/private/Type.js"() {
    "use strict";
    init_DefaultType();
    init_OptionalType();
    init_Parsed();
    Type = class extends Parsed {
      optional() {
        return new OptionalType(this);
      }
      default(value) {
        return new DefaultType(this, value);
      }
      get Name() {
        return void 0;
      }
    };
  }
});

// ../../packages/pema/lib/private/PrimitiveType.js
var PrimitiveType;
var init_PrimitiveType = __esm({
  "../../packages/pema/lib/private/PrimitiveType.js"() {
    "use strict";
    init_CoerceKey();
    init_error();
    init_ParsedKey();
    init_ParseError();
    init_Type();
    PrimitiveType = class extends Type {
      #validators;
      #options;
      constructor(validators = [], options = {}) {
        super();
        this.#validators = validators;
        this.#options = options;
      }
      get options() {
        return this.#options;
      }
      get validators() {
        return this.#validators;
      }
      derive(next2) {
        const Constructor = this.constructor;
        return new Constructor([...this.#validators, ...next2.validators ?? []], { ...this.#options, ...next2.options ?? {} });
      }
      get coerce() {
        return this.derive({ options: { coerce: true } });
      }
      parse(x, options = {}) {
        const has_instance_options = this.#options.coerce !== void 0 || this.#options[ParsedKey] !== void 0;
        const $options = has_instance_options ? { ...this.#options, ...options } : options;
        const option_validators = $options.validators;
        const validators = option_validators && option_validators.length > 0 ? option_validators.concat(this.#validators) : this.#validators;
        const $x = $options.coerce === true ? this[CoerceKey](x) : x;
        if (typeof $x !== this.name) {
          throw new ParseError(error(this.name, $x, $options));
        }
        const base = $options[ParsedKey] ?? "";
        for (let i = 0; i < validators.length; i++) {
          try {
            validators[i]($x);
          } catch (e) {
            if (e instanceof ParseError) {
              const rebased = (e.issues ?? []).map((issue) => ({
                ...issue,
                path: issue.path === "" ? base : base === "" ? issue.path : base + issue.path
              }));
              throw new ParseError(rebased);
            }
            const message = e && typeof e.message === "string" ? e.message : String(e);
            throw new ParseError([{
              input: x,
              message,
              path: base
            }]);
          }
        }
        return $x;
      }
    };
  }
});

// ../../packages/pema/lib/private/error/fail.js
function fail3(input, msg) {
  return new ParseError([{ input, message: msg, path: "" }]);
}
var init_fail3 = __esm({
  "../../packages/pema/lib/private/error/fail.js"() {
    "use strict";
    init_ParseError();
  }
});

// ../../packages/pema/lib/private/validator/length.js
function length(from11, to11) {
  if (!private_default.finite(from11) || !private_default.finite(to11)) {
    throw schemafail("length: {0} and {1} must be finite numbers", from11, to11);
  }
  if (from11 < 0 || to11 < 0) {
    throw schemafail("length: {0} and {1} must be positive", from11, to11);
  }
  if (from11 > to11) {
    throw schemafail("length: {0} must be lower than {1}", from11, to11);
  }
  return (x) => {
    if (typeof x !== "string" && !Array.isArray(x)) {
      throw fail3(x, "invalid type");
    }
    if (x.length < from11 || x.length > to11) {
      throw new ParseError([{
        input: x,
        message: "length out of range",
        path: ""
      }]);
    }
  };
}
var init_length = __esm({
  "../../packages/pema/lib/private/validator/length.js"() {
    "use strict";
    init_fail3();
    init_schemafail();
    init_ParseError();
    init_public();
  }
});

// ../../packages/pema/lib/private/validator/max.js
function max(limit) {
  if (typeof limit === "number") {
    if (!private_default.finite(limit)) {
      throw schemafail("max: limit {0} must be a finite number", limit);
    }
    return (x) => {
      if (typeof x === "number") {
        if (x > limit)
          throw fail3(x, `${x} is greater than max (${limit})`);
      } else if (typeof x === "string" || Array.isArray(x)) {
        if (x.length > limit) {
          const unit = typeof x === "string" ? "characters" : "items";
          throw fail3(x, `max ${limit} ${unit}`);
        }
      } else {
        throw fail3(x, "invalid type");
      }
    };
  }
  return (x) => {
    if (typeof x === "bigint") {
      if (x > limit)
        throw fail3(x, `${x} is greater than max (${limit})`);
    } else {
      throw fail3(x, "invalid type");
    }
  };
}
var init_max = __esm({
  "../../packages/pema/lib/private/validator/max.js"() {
    "use strict";
    init_fail3();
    init_schemafail();
    init_public();
  }
});

// ../../packages/pema/lib/private/validator/min.js
function min(limit) {
  if (typeof limit === "number") {
    if (!private_default.finite(limit)) {
      throw schemafail("max: limit {0} must be a finite number", limit);
    }
    return (x) => {
      if (typeof x === "number") {
        if (x < limit)
          throw fail3(x, `${x} is lower than min (${limit})`);
      } else if (typeof x === "string" || Array.isArray(x)) {
        if (x.length < limit) {
          const unit = typeof x === "string" ? "characters" : "items";
          throw fail3(x, `min ${limit} ${unit}`);
        }
      } else {
        throw fail3(x, "invalid type");
      }
    };
  }
  return (x) => {
    if (typeof x === "bigint") {
      if (x < limit)
        throw fail3(x, `${x} is lower than min (${limit})`);
    } else {
      throw fail3(x, "invalid type");
    }
  };
}
var init_min = __esm({
  "../../packages/pema/lib/private/validator/min.js"() {
    "use strict";
    init_fail3();
    init_schemafail();
    init_public();
  }
});

// ../../packages/pema/lib/private/validator/unique.js
function unique(array2) {
  const seen = /* @__PURE__ */ new Map();
  for (let i = 0; i < array2.length; i++) {
    const v = array2[i];
    if (seen.has(v)) {
      const first = seen.get(v);
      throw new ParseError([{
        input: array2,
        message: `duplicate value at index ${i} (first seen at ${first})`,
        path: join("", i)
      }]);
    }
    seen.set(v, i);
  }
}
var init_unique = __esm({
  "../../packages/pema/lib/private/validator/unique.js"() {
    "use strict";
    init_ParseError();
    init_join();
  }
});

// ../../packages/pema/lib/private/ArrayType.js
function isPrimitive2(x) {
  return x instanceof PrimitiveType;
}
var ArrayType;
var init_ArrayType = __esm({
  "../../packages/pema/lib/private/ArrayType.js"() {
    "use strict";
    init_DefaultType();
    init_error();
    init_schemafail();
    init_fail2();
    init_GenericType();
    init_OptionalType();
    init_ParsedKey();
    init_ParseError();
    init_join();
    init_next();
    init_rebase();
    init_PrimitiveType();
    init_length();
    init_max();
    init_min();
    init_unique();
    ArrayType = class extends GenericType {
      #item;
      #validators;
      constructor(item, validators = []) {
        super();
        this.#item = item;
        this.#validators = validators;
      }
      get name() {
        return "array";
      }
      optional() {
        return new OptionalType(this);
      }
      default(value) {
        return new DefaultType(this, value);
      }
      derive(_next) {
        const Constructor = this.constructor;
        return new Constructor(this.#item, [...this.#validators, ..._next.validators ?? []]);
      }
      /**
       * Member values are unique — only for primitive subtypes.
       *
       * @throws `SchemaError` if the subtype is not a primitive.
       * @returns ArrayType<T>
       */
      unique() {
        if (!isPrimitive2(this.#item)) {
          throw schemafail("unique: subtype {0} must be primitive", this.#item.name);
        }
        return this.derive({ validators: [unique] });
      }
      min(limit) {
        if (limit < 0) {
          throw schemafail("min: {0} must be positive", limit);
        }
        return this.derive({ validators: [min(limit)] });
      }
      max(limit) {
        if (limit < 0) {
          throw schemafail("max: {0} must be positive", limit);
        }
        return this.derive({ validators: [max(limit)] });
      }
      length(from11, to11) {
        return this.derive({ validators: [length(from11, to11)] });
      }
      parse(x, options = {}) {
        if (!Array.isArray(x))
          throw fail2("array", x, options);
        const base = options[ParsedKey] ?? "";
        const item = this.#item;
        const len = x.length;
        for (let i = 0; i < len; i++) {
          if (!(i in x)) {
            throw new ParseError([{
              ...error(item.name, void 0, options)[0],
              path: join(base, i)
            }]);
          }
          item.parse(x[i], next(i, options));
        }
        const validators = this.#validators;
        for (let i = 0; i < validators.length; i++) {
          try {
            validators[i](x);
          } catch (e) {
            if (e instanceof ParseError) {
              const rebased = (e.issues ?? []).map((issue) => ({ ...issue, path: rebase(base, issue.path) }));
              throw new ParseError(rebased);
            }
            throw e;
          }
        }
        return x;
      }
      toJSON() {
        return { type: this.name, of: this.#item.toJSON() };
      }
    };
  }
});

// ../../packages/pema/lib/private/Storable.js
var Storable;
var init_Storable = __esm({
  "../../packages/pema/lib/private/Storable.js"() {
    "use strict";
    init_Parsed();
    Storable = class extends Parsed {
      static serialize(s3) {
        return { type: s3.name, datatype: s3.datatype };
      }
    };
  }
});

// ../../packages/pema/lib/private/BooleanType.js
var BooleanType;
var init_BooleanType = __esm({
  "../../packages/pema/lib/private/BooleanType.js"() {
    "use strict";
    init_CoerceKey();
    init_PrimitiveType();
    init_Storable();
    init_public();
    BooleanType = class extends PrimitiveType {
      get name() {
        return "boolean";
      }
      get datatype() {
        return "boolean";
      }
      [CoerceKey](x) {
        return private_default.boolish(x) ? x === "true" : x;
      }
      toJSON() {
        return Storable.serialize(this);
      }
    };
  }
});

// ../../packages/pema/lib/private/ConstructorType.js
var ConstructorType;
var init_ConstructorType = __esm({
  "../../packages/pema/lib/private/ConstructorType.js"() {
    "use strict";
    init_DefaultType();
    init_fail2();
    init_GenericType();
    ConstructorType = class extends GenericType {
      #type;
      constructor(t) {
        super();
        this.#type = t;
      }
      get name() {
        return "constructor";
      }
      default(value) {
        return new DefaultType(this, value);
      }
      parse(x, options = {}) {
        if (!(x instanceof this.#type))
          throw fail2(this.name, x, options);
        return x;
      }
      toJSON() {
        return {
          type: "newable",
          of: this.#type.name
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/LiteralType.js
var LiteralType;
var init_LiteralType = __esm({
  "../../packages/pema/lib/private/LiteralType.js"() {
    "use strict";
    init_fail2();
    init_GenericType();
    LiteralType = class _LiteralType extends GenericType {
      #literal;
      constructor(literal) {
        super();
        this.#literal = literal;
      }
      static new(literal) {
        return new _LiteralType(literal);
      }
      static get Literal() {
        return void 0;
      }
      get name() {
        return JSON.stringify(this.#literal);
      }
      parse(x, options = {}) {
        if (x !== this.#literal)
          throw fail2(this.name, x, options);
        return x;
      }
      toJSON() {
        return {
          type: "literal",
          value: this.#literal
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/NullType.js
var NullType;
var init_NullType = __esm({
  "../../packages/pema/lib/private/NullType.js"() {
    "use strict";
    init_fail2();
    init_PrimitiveType();
    NullType = class extends PrimitiveType {
      get name() {
        return "null";
      }
      parse(x, options = {}) {
        if (x !== null)
          throw fail2(this.name, x, options);
        return x;
      }
      toJSON() {
        return {
          type: this.name
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/ObjectType.js
var ObjectType;
var init_ObjectType = __esm({
  "../../packages/pema/lib/private/ObjectType.js"() {
    "use strict";
    init_fail2();
    init_GenericType();
    init_next();
    init_public();
    ObjectType = class extends GenericType {
      #properties;
      #options;
      constructor(properties, options = {}) {
        super();
        this.#properties = properties;
        this.#options = options;
      }
      get name() {
        const props = Object.entries(this.#properties).map(([k, v]) => `${k}: ${v.name}`).join(", ");
        return `{ ${props} }`;
      }
      get properties() {
        return this.#properties;
      }
      get input() {
        return void 0;
      }
      #derive(options) {
        const Constructor = this.constructor;
        return new Constructor(this.#properties, { ...this.#options, ...options });
      }
      get coerce() {
        return this.#derive({ coerce: true });
      }
      parse(x, options = {}) {
        const $options = { ...this.#options, ...options };
        if (x !== void 0 && !private_default.dict(x))
          throw fail2("object", x, $options);
        const input = x ?? {};
        const out = {};
        for (const k in this.#properties) {
          const parsed = this.#properties[k].parse(input[k], next(k, $options));
          if (parsed !== void 0)
            out[k] = parsed;
        }
        return out;
      }
      toJSON() {
        const properties = {};
        for (const [k, v] of Object.entries(this.#properties)) {
          properties[k] = v.toJSON();
        }
        return { type: "object", properties };
      }
    };
  }
});

// ../../packages/pema/lib/private/TupleType.js
var TupleType;
var init_TupleType = __esm({
  "../../packages/pema/lib/private/TupleType.js"() {
    "use strict";
    init_fail2();
    init_GenericType();
    init_OptionalType();
    init_next();
    TupleType = class extends GenericType {
      #items;
      constructor(items) {
        super();
        this.#items = items;
      }
      get name() {
        return "tuple";
      }
      optional() {
        return new OptionalType(this);
      }
      parse(x, options = {}) {
        if (!Array.isArray(x))
          throw fail2("array", x, options);
        const items = this.#items;
        const len = items.length;
        for (let i = 0; i < len; i++)
          items[i].parse(x[i], next(i, options));
        if (x.length > len)
          throw fail2("undefined", x[len], next(len, options));
        return x;
      }
      toJSON() {
        return {
          type: this.name,
          of: this.#items.map((i) => i.toJSON())
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/UndefinedType.js
var UndefinedType;
var init_UndefinedType = __esm({
  "../../packages/pema/lib/private/UndefinedType.js"() {
    "use strict";
    init_PrimitiveType();
    UndefinedType = class extends PrimitiveType {
      get name() {
        return "undefined";
      }
      toJSON() {
        return {
          type: this.name
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/normalize.js
function isParsed(x) {
  return !!x && typeof x === "object" && ParsedKey in x;
}
function isPlain(x) {
  return !!x && typeof x === "object" && Object.getPrototypeOf(x) === Object.prototype;
}
function normalize(x) {
  if (isParsed(x))
    return x;
  if (x === null)
    return new NullType();
  if (x === void 0)
    return new UndefinedType();
  if (typeof x === "string" || typeof x === "number" || typeof x === "boolean")
    return new LiteralType(x);
  if (private_default.newable(x))
    return new ConstructorType(x);
  if (Array.isArray(x)) {
    return x.length === 1 ? new ArrayType(normalize(x[0])) : new TupleType(x.map(normalize));
  }
  if (isPlain(x)) {
    const props = {};
    for (const [k, v] of Object.entries(x))
      props[k] = normalize(v);
    return new ObjectType(props);
  }
  throw new TypeError("Unsupported type-like value passed to asType");
}
var init_normalize = __esm({
  "../../packages/pema/lib/private/normalize.js"() {
    "use strict";
    init_ArrayType();
    init_ConstructorType();
    init_LiteralType();
    init_NullType();
    init_ObjectType();
    init_ParsedKey();
    init_TupleType();
    init_UndefinedType();
    init_public();
  }
});

// ../../packages/pema/lib/private/array.js
function array(of) {
  return new ArrayType(normalize(of));
}
var init_array = __esm({
  "../../packages/pema/lib/private/array.js"() {
    "use strict";
    init_ArrayType();
    init_normalize();
  }
});

// ../../packages/pema/lib/private/coerce/bigint.js
function coerceBigInt(x) {
  const n2 = private_default.numeric(x) ? Number(x) : x;
  if (private_default.int(n2))
    return BigInt(n2);
  return x;
}
var init_bigint = __esm({
  "../../packages/pema/lib/private/coerce/bigint.js"() {
    "use strict";
    init_public();
  }
});

// ../../packages/pema/lib/private/validator/range.js
function range(from11, to11) {
  if (!private_default.finite(from11) || !private_default.finite(to11)) {
    throw new TypeError("range(): from and to must be finite numbers");
  }
  return (x) => {
    if (typeof x !== "number" && typeof x !== "bigint") {
      throw fail4(x, "invalid type");
    }
    if (x < from11 || x > to11) {
      throw new ParseError([{
        input: x,
        message: `${x} is out of range`,
        path: ""
      }]);
    }
  };
}
var fail4;
var init_range = __esm({
  "../../packages/pema/lib/private/validator/range.js"() {
    "use strict";
    init_ParseError();
    init_public();
    fail4 = (input, msg) => new ParseError([{ input, message: msg, path: "" }]);
  }
});

// ../../packages/pema/lib/private/validator/values.js
function values(input) {
  const input_values = Object.values(input);
  const allowed = input_values.map((v) => String(v)).join(", ");
  return (x) => {
    if (!input_values.includes(x)) {
      throw new ParseError([{
        input: x,
        message: `"${x}" not in given list of values (${allowed})`,
        path: ""
      }]);
    }
  };
}
var init_values = __esm({
  "../../packages/pema/lib/private/validator/values.js"() {
    "use strict";
    init_ParseError();
  }
});

// ../../packages/pema/lib/private/NumericType.js
var NumericType;
var init_NumericType = __esm({
  "../../packages/pema/lib/private/NumericType.js"() {
    "use strict";
    init_PrimitiveType();
    init_max();
    init_min();
    init_range();
    init_values();
    NumericType = class extends PrimitiveType {
      #datatype;
      constructor(datatype, validators = [], options = {}) {
        super(validators, options);
        this.#datatype = datatype;
      }
      derive(next2) {
        const Constructor = this.constructor;
        return new Constructor(this.#datatype, [...this.validators, ...next2.validators ?? []], { ...this.options, ...next2.options ?? {} });
      }
      values(anyof) {
        return this.derive({ validators: [values(anyof)] });
      }
      range(from11, to11) {
        return this.derive({ validators: [range(from11, to11)] });
      }
      min(from11) {
        return this.derive({ validators: [min(from11)] });
      }
      max(to11) {
        return this.derive({ validators: [max(to11)] });
      }
      get datatype() {
        return this.#datatype;
      }
      toJSON() {
        return {
          type: this.name,
          datatype: this.#datatype
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/BigIntType.js
var BigIntType;
var init_BigIntType = __esm({
  "../../packages/pema/lib/private/BigIntType.js"() {
    "use strict";
    init_bigint();
    init_CoerceKey();
    init_NumericType();
    BigIntType = class extends NumericType {
      [CoerceKey] = coerceBigInt;
      get name() {
        return "bigint";
      }
    };
  }
});

// ../../packages/pema/lib/private/i64.js
var from, to, i64_default;
var init_i64 = __esm({
  "../../packages/pema/lib/private/i64.js"() {
    "use strict";
    init_BigIntType();
    init_range();
    from = -(2n ** 63n);
    to = 2n ** 63n - 1n;
    i64_default = new BigIntType("i64", [range(from, to)]);
  }
});

// ../../packages/pema/lib/private/bigint.js
var init_bigint2 = __esm({
  "../../packages/pema/lib/private/bigint.js"() {
    "use strict";
    init_i64();
  }
});

// ../../packages/pema/lib/private/BigUintType.js
var BigUintType;
var init_BigUintType = __esm({
  "../../packages/pema/lib/private/BigUintType.js"() {
    "use strict";
    init_bigint();
    init_CoerceKey();
    init_NumericType();
    BigUintType = class extends NumericType {
      [CoerceKey] = coerceBigInt;
      get name() {
        return "bigint";
      }
    };
  }
});

// ../../packages/pema/lib/private/u64.js
var from2, to2, u64_default;
var init_u64 = __esm({
  "../../packages/pema/lib/private/u64.js"() {
    "use strict";
    init_BigUintType();
    init_range();
    from2 = 0n;
    to2 = 2n ** 64n - 1n;
    u64_default = new BigUintType("u64", [range(from2, to2)]);
  }
});

// ../../packages/pema/lib/private/biguint.js
var init_biguint = __esm({
  "../../packages/pema/lib/private/biguint.js"() {
    "use strict";
    init_u64();
  }
});

// ../../packages/pema/lib/private/BuiltinType.js
var BuiltinType;
var init_BuiltinType = __esm({
  "../../packages/pema/lib/private/BuiltinType.js"() {
    "use strict";
    init_CoerceKey();
    init_fail2();
    init_Type();
    BuiltinType = class extends Type {
      #options;
      constructor(options = {}) {
        super();
        this.#options = options;
      }
      #derive(next2) {
        const Constructor = this.constructor;
        return new Constructor({ ...this.#options, ...next2 });
      }
      get coerce() {
        return this.#derive({ coerce: true });
      }
      parse(x, options = {}) {
        const $options = { ...this.#options, ...options };
        const $x = $options.coerce === true ? this[CoerceKey](x) : x;
        if (!($x instanceof this.Type))
          throw fail2(this.name, $x, $options);
        return $x;
      }
    };
  }
});

// ../../packages/pema/lib/private/BlobType.js
var BlobType;
var init_BlobType = __esm({
  "../../packages/pema/lib/private/BlobType.js"() {
    "use strict";
    init_BuiltinType();
    init_Storable();
    BlobType = class extends BuiltinType {
      get Type() {
        return Blob;
      }
      get name() {
        return "blob";
      }
      get datatype() {
        return "blob";
      }
      toJSON() {
        return Storable.serialize(this);
      }
    };
  }
});

// ../../packages/pema/lib/private/blob.js
var blob_default;
var init_blob = __esm({
  "../../packages/pema/lib/private/blob.js"() {
    "use strict";
    init_BlobType();
    blob_default = new BlobType();
  }
});

// ../../packages/pema/lib/private/boolean.js
var boolean_default;
var init_boolean = __esm({
  "../../packages/pema/lib/private/boolean.js"() {
    "use strict";
    init_BooleanType();
    boolean_default = new BooleanType();
  }
});

// ../../packages/pema/lib/private/constructor.js
var constructor_default;
var init_constructor = __esm({
  "../../packages/pema/lib/private/constructor.js"() {
    "use strict";
    init_ConstructorType();
    constructor_default = (constructor) => new ConstructorType(constructor);
  }
});

// ../../packages/pema/lib/private/coerce/date.js
function epoch(n2, digits) {
  const ms = digits !== void 0 ? digits >= 13 ? n2 : n2 * 1e3 : n2;
  const date = new Date(ms);
  return Number.isNaN(date.getTime()) ? void 0 : date;
}
function fromNumber(n2) {
  const date = epoch(n2);
  return date !== void 0 ? date : n2;
}
function fromString(raw) {
  const s3 = raw.trim();
  if (s3 === "")
    return raw;
  if (INT.test(s3)) {
    const digits = s3[0] === "+" || s3[0] === "-" ? s3.length - 1 : s3.length;
    const n2 = Number(s3);
    const date = epoch(n2, digits);
    return date ?? raw;
  }
  if (ISO_DATE.test(s3)) {
    const date = /* @__PURE__ */ new Date(`${s3}T00:00:00.000Z`);
    return Number.isNaN(date.getTime()) ? raw : date;
  }
  if (ISO_DATETIME_TZ.test(s3)) {
    const date = new Date(s3);
    return Number.isNaN(date.getTime()) ? raw : date;
  }
  return raw;
}
function coerceDate(x) {
  if (x instanceof Date)
    return x;
  if (typeof x === "number" && Number.isFinite(x)) {
    return fromNumber(x);
  }
  if (typeof x === "string") {
    return fromString(x);
  }
  return x;
}
var ISO_DATE, ISO_DATETIME_TZ, INT;
var init_date = __esm({
  "../../packages/pema/lib/private/coerce/date.js"() {
    "use strict";
    ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
    ISO_DATETIME_TZ = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/;
    INT = /^[+-]?\d+$/;
  }
});

// ../../packages/pema/lib/private/DateType.js
var DateType;
var init_DateType = __esm({
  "../../packages/pema/lib/private/DateType.js"() {
    "use strict";
    init_BuiltinType();
    init_date();
    init_CoerceKey();
    init_Storable();
    DateType = class extends BuiltinType {
      [CoerceKey] = coerceDate;
      get Type() {
        return Date;
      }
      get name() {
        return "date";
      }
      get datatype() {
        return "datetime";
      }
      toJSON() {
        return Storable.serialize(this);
      }
    };
  }
});

// ../../packages/pema/lib/private/date.js
var date_default;
var init_date2 = __esm({
  "../../packages/pema/lib/private/date.js"() {
    "use strict";
    init_DateType();
    date_default = new DateType();
  }
});

// ../../packages/pema/lib/private/RecordType.js
var RecordType;
var init_RecordType = __esm({
  "../../packages/pema/lib/private/RecordType.js"() {
    "use strict";
    init_expected();
    init_fail2();
    init_GenericType();
    init_OptionalType();
    init_ParsedKey();
    init_ParseError();
    init_join();
    init_next();
    init_public();
    RecordType = class extends GenericType {
      #key;
      #value;
      constructor(k, v) {
        super();
        this.#key = k;
        this.#value = v;
      }
      optional() {
        return new OptionalType(this);
      }
      get name() {
        return "record";
      }
      parse(x, options = {}) {
        if (!private_default.dict(x))
          throw fail2("object", x, options);
        const key_name = this.#key.name;
        const keys = Object.keys(x);
        const symbols = Object.getOwnPropertySymbols(x);
        const base = options[ParsedKey] ?? "";
        if (key_name === "string" || key_name === "number") {
          if (symbols.length > 0) {
            throw new ParseError([{
              input: x,
              message: expected_default(`${key_name} key`, symbols[0]),
              path: base
            }]);
          }
          keys.forEach((k) => {
            if (key_name === "string" && private_default.numeric(k)) {
              throw new ParseError([{
                input: x,
                message: expected_default("string key", +k),
                path: join(base, k)
              }]);
            }
            if (key_name === "number" && !private_default.numeric(k)) {
              throw new ParseError([{
                input: x,
                message: expected_default("number key", k),
                path: join(base, k)
              }]);
            }
            this.#value.parse(x[k], next(k, options));
          });
        }
        if (key_name === "symbol") {
          if (keys.length > 0) {
            throw new ParseError([{
              input: x,
              message: expected_default("symbol key", keys[0]),
              path: join(base, keys[0])
            }]);
          }
          symbols.forEach((k) => {
            this.#value.parse(x[k], options);
          });
        }
        return x;
      }
      toJSON() {
        return {
          type: this.name,
          key: this.#key.toJSON(),
          value: this.#value.toJSON()
        };
      }
    };
  }
});

// ../../packages/pema/lib/private/record.js
var record_default;
var init_record = __esm({
  "../../packages/pema/lib/private/record.js"() {
    "use strict";
    init_RecordType();
    record_default = (k, v) => new RecordType(k, v);
  }
});

// ../../packages/pema/lib/private/validator/regex.js
function validateRegex(regex2, error3) {
  return (x) => {
    if (!regex2.test(x)) {
      const message = (error3 ?? ((y) => `"${y}" is not a valid ${String(regex2)}`))(x);
      throw new ParseError([{
        input: x,
        message,
        path: ""
        // root; the calling type should rebase if needed
      }]);
    }
  };
}
var init_regex = __esm({
  "../../packages/pema/lib/private/validator/regex.js"() {
    "use strict";
    init_ParseError();
  }
});

// ../../packages/pema/lib/private/validator/email.js
var email, email_default;
var init_email = __esm({
  "../../packages/pema/lib/private/validator/email.js"() {
    "use strict";
    init_regex();
    email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
    email_default = validateRegex(email, (x) => `"${x}" is not a valid email`);
  }
});

// ../../packages/pema/lib/private/validator/ends-with.js
var ends_with_default;
var init_ends_with = __esm({
  "../../packages/pema/lib/private/validator/ends-with.js"() {
    "use strict";
    init_ParseError();
    ends_with_default = (suffix) => (x) => {
      if (!x.endsWith(suffix)) {
        throw new ParseError([{
          input: x,
          message: `"${x}" does not end with "${suffix}"`,
          path: ""
        }]);
      }
    };
  }
});

// ../../packages/pema/lib/private/validator/isotime.js
function isotime(x) {
  validateRegex(ISOTIME, (y) => `"${y}" is not a valid ISO time`)(x);
  const match3 = ISOTIME.exec(x);
  const g = match3.groups;
  const h = Number(g.hour);
  const m = Number(g.minute);
  const s3 = Number(g.second);
  const inRange = h >= RANGE.hour.min && h <= RANGE.hour.max && m >= RANGE.minute.min && m <= RANGE.minute.max && s3 >= RANGE.second.min && s3 <= RANGE.second.max;
  if (!inRange) {
    throw new ParseError([{
      input: x,
      message: `"${x}" is not a valid ISO time`,
      path: ""
    }]);
  }
}
var ISOTIME, RANGE;
var init_isotime = __esm({
  "../../packages/pema/lib/private/validator/isotime.js"() {
    "use strict";
    init_ParseError();
    init_regex();
    ISOTIME = /^T?(?<hour>\d{2}):?(?<minute>\d{2}):?(?<second>\d{2})$/u;
    RANGE = {
      hour: { max: 23, min: 0 },
      minute: { max: 59, min: 0 },
      second: { max: 60, min: 0 }
    };
  }
});

// ../../packages/pema/lib/private/validator/starts-with.js
var starts_with_default;
var init_starts_with = __esm({
  "../../packages/pema/lib/private/validator/starts-with.js"() {
    "use strict";
    init_ParseError();
    starts_with_default = (prefix) => (x) => {
      if (!x.startsWith(prefix)) {
        throw new ParseError([{
          input: x,
          message: `"${x}" does not start with "${prefix}"`,
          path: ""
        }]);
      }
    };
  }
});

// ../../packages/pema/lib/private/validator/uuid.js
var uuid2, uuid_default;
var init_uuid = __esm({
  "../../packages/pema/lib/private/validator/uuid.js"() {
    "use strict";
    init_regex();
    uuid2 = /^[^\W_]{8}-[^\W_]{4}-[^\W_]{4}-[^\W_]{4}-[^\W_]{12}$/u;
    uuid_default = validateRegex(uuid2, (x) => `"${x}" is not a valid UUID`);
  }
});

// ../../packages/pema/lib/private/StringType.js
var StringType;
var init_StringType = __esm({
  "../../packages/pema/lib/private/StringType.js"() {
    "use strict";
    init_schemafail();
    init_PrimitiveType();
    init_Storable();
    init_email();
    init_ends_with();
    init_isotime();
    init_length();
    init_max();
    init_min();
    init_regex();
    init_starts_with();
    init_uuid();
    StringType = class extends PrimitiveType {
      get name() {
        return "string";
      }
      get datatype() {
        return "string";
      }
      isotime() {
        return this.derive({ validators: [isotime] });
      }
      regex(pattern) {
        return this.derive({ validators: [validateRegex(pattern)] });
      }
      email() {
        return this.derive({ validators: [email_default] });
      }
      uuid() {
        return this.derive({ validators: [uuid_default] });
      }
      startsWith(prefix) {
        return this.derive({ validators: [starts_with_default(prefix)] });
      }
      endsWith(suffix) {
        return this.derive({ validators: [ends_with_default(suffix)] });
      }
      min(limit) {
        if (limit < 0) {
          throw schemafail("min: {0} must be positive", limit);
        }
        return this.derive({ validators: [min(limit)] });
      }
      max(limit) {
        if (limit < 0) {
          throw schemafail("max: {0} must be positive", limit);
        }
        return this.derive({ validators: [max(limit)] });
      }
      length(from11, to11) {
        return this.derive({ validators: [length(from11, to11)] });
      }
      toJSON() {
        return Storable.serialize(this);
      }
    };
  }
});

// ../../packages/pema/lib/private/string.js
var string_default;
var init_string = __esm({
  "../../packages/pema/lib/private/string.js"() {
    "use strict";
    init_StringType();
    string_default = new StringType();
  }
});

// ../../packages/pema/lib/private/dict.js
function dict(of = string_default) {
  return record_default(string_default, of);
}
var init_dict = __esm({
  "../../packages/pema/lib/private/dict.js"() {
    "use strict";
    init_record();
    init_string();
  }
});

// ../../packages/pema/lib/private/coerce/int.js
function coerceInt(x) {
  if (private_default.numeric(x))
    return Number(x);
  return x;
}
var init_int = __esm({
  "../../packages/pema/lib/private/coerce/int.js"() {
    "use strict";
    init_public();
  }
});

// ../../packages/pema/lib/private/NumberType.js
var NumberType;
var init_NumberType = __esm({
  "../../packages/pema/lib/private/NumberType.js"() {
    "use strict";
    init_CoerceKey();
    init_NumericType();
    init_int();
    NumberType = class extends NumericType {
      [CoerceKey] = coerceInt;
      get name() {
        return "number";
      }
    };
  }
});

// ../../packages/pema/lib/private/validator/f32.js
function f32(x) {
  if (x !== new Float32Array([x])[0]) {
    throw new ParseError([{
      input: x,
      message: `${x} is not a 32-bit float`,
      path: ""
    }]);
  }
}
var init_f32 = __esm({
  "../../packages/pema/lib/private/validator/f32.js"() {
    "use strict";
    init_ParseError();
  }
});

// ../../packages/pema/lib/private/f32.js
var f32_default;
var init_f322 = __esm({
  "../../packages/pema/lib/private/f32.js"() {
    "use strict";
    init_NumberType();
    init_f32();
    f32_default = new NumberType("f32", [f32]);
  }
});

// ../../packages/pema/lib/private/f64.js
var f64_default;
var init_f64 = __esm({
  "../../packages/pema/lib/private/f64.js"() {
    "use strict";
    init_NumberType();
    f64_default = new NumberType("f64");
  }
});

// ../../packages/pema/lib/private/FileType.js
var FileType;
var init_FileType = __esm({
  "../../packages/pema/lib/private/FileType.js"() {
    "use strict";
    init_BuiltinType();
    init_Storable();
    FileType = class extends BuiltinType {
      get Type() {
        return File;
      }
      get name() {
        return "file";
      }
      get datatype() {
        return "blob";
      }
      toJSON() {
        return Storable.serialize(this);
      }
    };
  }
});

// ../../packages/pema/lib/private/file.js
var file_default;
var init_file = __esm({
  "../../packages/pema/lib/private/file.js"() {
    "use strict";
    init_FileType();
    file_default = new FileType();
  }
});

// ../../packages/pema/lib/private/i128.js
var from3, to3, i128_default;
var init_i128 = __esm({
  "../../packages/pema/lib/private/i128.js"() {
    "use strict";
    init_BigIntType();
    init_range();
    from3 = -(2n ** 127n);
    to3 = 2n ** 127n - 1n;
    i128_default = new BigIntType("i128", [range(from3, to3)]);
  }
});

// ../../packages/pema/lib/private/validator/integer.js
var integer_default;
var init_integer = __esm({
  "../../packages/pema/lib/private/validator/integer.js"() {
    "use strict";
    init_ParseError();
    init_public();
    integer_default = (x) => {
      if (!private_default.int(x)) {
        throw new ParseError([{
          input: x,
          message: `${x} is not an integer`,
          path: ""
        }]);
      }
    };
  }
});

// ../../packages/pema/lib/private/IntType.js
var IntType;
var init_IntType = __esm({
  "../../packages/pema/lib/private/IntType.js"() {
    "use strict";
    init_int();
    init_CoerceKey();
    init_NumericType();
    init_integer();
    IntType = class extends NumericType {
      [CoerceKey] = coerceInt;
      get name() {
        return "number";
      }
      parse(x, options = {}) {
        return super.parse(x, {
          ...options,
          validators: [integer_default]
        });
      }
    };
  }
});

// ../../packages/pema/lib/private/i16.js
var from4, to4, i16_default;
var init_i16 = __esm({
  "../../packages/pema/lib/private/i16.js"() {
    "use strict";
    init_IntType();
    init_range();
    from4 = -(2 ** 15);
    to4 = 2 ** 15 - 1;
    i16_default = new IntType("i16", [range(from4, to4)]);
  }
});

// ../../packages/pema/lib/private/i32.js
var from5, to5, i32_default;
var init_i32 = __esm({
  "../../packages/pema/lib/private/i32.js"() {
    "use strict";
    init_IntType();
    init_range();
    from5 = -(2 ** 31);
    to5 = 2 ** 31 - 1;
    i32_default = new IntType("i32", [range(from5, to5)]);
  }
});

// ../../packages/pema/lib/private/i8.js
var from6, to6, i8_default;
var init_i8 = __esm({
  "../../packages/pema/lib/private/i8.js"() {
    "use strict";
    init_IntType();
    init_range();
    from6 = -(2 ** 7);
    to6 = 2 ** 7 - 1;
    i8_default = new IntType("i8", [range(from6, to6)]);
  }
});

// ../../packages/pema/lib/private/int.js
var init_int2 = __esm({
  "../../packages/pema/lib/private/int.js"() {
    "use strict";
    init_i32();
  }
});

// ../../packages/pema/lib/private/number.js
var init_number = __esm({
  "../../packages/pema/lib/private/number.js"() {
    "use strict";
    init_f64();
  }
});

// ../../packages/pema/lib/private/OmitType.js
var OmitType;
var init_OmitType = __esm({
  "../../packages/pema/lib/private/OmitType.js"() {
    "use strict";
    init_fail2();
    init_GenericType();
    init_ParsedKey();
    init_join();
    OmitType = class extends GenericType {
      #properties;
      constructor(type, keys) {
        super();
        const props = { ...type.properties };
        for (const key of keys) {
          delete props[key];
        }
        this.#properties = props;
      }
      get name() {
        return "omit";
      }
      parse(x, options = {}) {
        if (typeof x !== "object" || x === null)
          throw fail2("object", x, options);
        const out = {};
        const props = this.#properties;
        for (const k in props) {
          const field = props[k];
          const r = field.parse(x[k], {
            ...options,
            [ParsedKey]: join(options[ParsedKey] ?? "", String(k))
          });
          if (r !== void 0) {
            out[k] = r;
          }
        }
        return out;
      }
      toJSON() {
        const properties = {};
        const props = this.#properties;
        for (const [k, v] of Object.entries(props)) {
          properties[k] = v.toJSON();
        }
        return { type: "omit", properties };
      }
    };
  }
});

// ../../packages/pema/lib/private/omit.js
function omit(type, ...keys) {
  return new OmitType(type, keys);
}
var init_omit = __esm({
  "../../packages/pema/lib/private/omit.js"() {
    "use strict";
    init_OmitType();
  }
});

// ../../packages/pema/lib/private/PureType.js
var PureType;
var init_PureType = __esm({
  "../../packages/pema/lib/private/PureType.js"() {
    "use strict";
    init_OptionalType();
    init_Parsed();
    PureType = class extends Parsed {
      get name() {
        return "pure";
      }
      get Name() {
        return void 0;
      }
      optional() {
        return new OptionalType(this);
      }
      parse(x) {
        return x;
      }
      toJSON() {
        return { type: "pure" };
      }
    };
  }
});

// ../../packages/pema/lib/private/pure.js
function pure_default() {
  return new PureType();
}
var init_pure = __esm({
  "../../packages/pema/lib/private/pure.js"() {
    "use strict";
    init_PureType();
  }
});

// ../../packages/pema/lib/private/SymbolType.js
var SymbolType;
var init_SymbolType = __esm({
  "../../packages/pema/lib/private/SymbolType.js"() {
    "use strict";
    init_PrimitiveType();
    SymbolType = class extends PrimitiveType {
      get name() {
        return "symbol";
      }
      toJSON() {
        return { type: this.name };
      }
    };
  }
});

// ../../packages/pema/lib/private/symbol.js
var symbol_default;
var init_symbol = __esm({
  "../../packages/pema/lib/private/symbol.js"() {
    "use strict";
    init_SymbolType();
    symbol_default = new SymbolType();
  }
});

// ../../packages/pema/lib/private/u128.js
var from7, to7, u128_default;
var init_u128 = __esm({
  "../../packages/pema/lib/private/u128.js"() {
    "use strict";
    init_BigUintType();
    init_range();
    from7 = 0n;
    to7 = 2n ** 128n - 1n;
    u128_default = new BigUintType("u128", [range(from7, to7)]);
  }
});

// ../../packages/pema/lib/private/validator/port.js
var min2, max2, port_default;
var init_port = __esm({
  "../../packages/pema/lib/private/validator/port.js"() {
    "use strict";
    init_ParseError();
    min2 = 2 ** 10;
    max2 = 2 ** 16 - 1;
    port_default = (port) => {
      if (port < min2 || port > max2) {
        throw new ParseError([{
          input: port,
          message: `${port} out of port range (${min2} - ${max2})`,
          path: ""
        }]);
      }
    };
  }
});

// ../../packages/pema/lib/private/UintType.js
var UintType;
var init_UintType = __esm({
  "../../packages/pema/lib/private/UintType.js"() {
    "use strict";
    init_int();
    init_CoerceKey();
    init_NumericType();
    init_integer();
    init_port();
    UintType = class extends NumericType {
      [CoerceKey] = coerceInt;
      get name() {
        return "number";
      }
      /**
      * Value is a non-privileged port number (1000 - 65535).
      */
      port() {
        return this.derive({ validators: [port_default] });
      }
      parse(x, options = {}) {
        return super.parse(x, {
          ...options,
          validators: [integer_default]
        });
      }
    };
  }
});

// ../../packages/pema/lib/private/u16.js
var from8, to8, u16_default;
var init_u16 = __esm({
  "../../packages/pema/lib/private/u16.js"() {
    "use strict";
    init_UintType();
    init_range();
    from8 = 0;
    to8 = 2 ** 16 - 1;
    u16_default = new UintType("u16", [range(from8, to8)]);
  }
});

// ../../packages/pema/lib/private/u32.js
var from9, to9, u32_default;
var init_u32 = __esm({
  "../../packages/pema/lib/private/u32.js"() {
    "use strict";
    init_UintType();
    init_range();
    from9 = 0;
    to9 = 2 ** 32 - 1;
    u32_default = new UintType("u32", [range(from9, to9)]);
  }
});

// ../../packages/pema/lib/private/u8.js
var from10, to10, u8_default;
var init_u8 = __esm({
  "../../packages/pema/lib/private/u8.js"() {
    "use strict";
    init_UintType();
    init_range();
    from10 = 0;
    to10 = 2 ** 8 - 1;
    u8_default = new UintType("u8", [range(from10, to10)]);
  }
});

// ../../packages/pema/lib/private/uint.js
var init_uint = __esm({
  "../../packages/pema/lib/private/uint.js"() {
    "use strict";
    init_u32();
  }
});

// ../../packages/pema/lib/private/is-parsed-type.js
function isParsedType(x) {
  return !!x && typeof x === "object" && ParsedKey in x;
}
var init_is_parsed_type = __esm({
  "../../packages/pema/lib/private/is-parsed-type.js"() {
    "use strict";
    init_ParsedKey();
  }
});

// ../../packages/pema/lib/private/UnionType.js
var print, union_error, UnionType;
var init_UnionType = __esm({
  "../../packages/pema/lib/private/UnionType.js"() {
    "use strict";
    init_DefaultType();
    init_fail2();
    init_GenericType();
    init_is_parsed_type();
    init_OptionalType();
    init_ParseError();
    init_public2();
    print = (type) => {
      const parsed = isParsedType(type);
      if (parsed) {
        return type.name;
      }
      const type_of = typeof type;
      if (type_of === "string") {
        return `"${type}"`;
      }
      if (type_of === "bigint") {
        return `${type}n`;
      }
      if (type_of === "object") {
        return `{ ${Object.entries(type).map(([name, subtype]) => `${name}: ${print(subtype)}`).join(", ")} }`;
      }
      return type;
    };
    union_error = (types) => `\`${types.map((t) => isParsedType(t) ? t.name : print(t)).join(" | ")}\``;
    UnionType = class extends GenericType {
      #of;
      constructor(of) {
        assert_default.true(of.length > 1, "union type must have at least two members");
        super();
        this.#of = of;
      }
      get name() {
        return "union";
      }
      get schema() {
        return this.#of;
      }
      optional() {
        return new OptionalType(this);
      }
      default(value) {
        return new DefaultType(this, value);
      }
      parse(x, options = {}) {
        for (const type of this.#of) {
          try {
            type.parse(x, options);
            return x;
          } catch (e) {
            if (!(e instanceof ParseError)) {
              throw e;
            }
          }
        }
        throw fail2(union_error(this.#of), x, options);
      }
      toJSON() {
        return { type: this.name, of: this.#of.map((t) => t.toJSON()) };
      }
    };
  }
});

// ../../packages/pema/lib/private/union.js
function union(...types) {
  return new UnionType(types.map(normalize));
}
var init_union = __esm({
  "../../packages/pema/lib/private/union.js"() {
    "use strict";
    init_UnionType();
    init_normalize();
  }
});

// ../../packages/pema/lib/private/UnknownType.js
var UnknownType;
var init_UnknownType = __esm({
  "../../packages/pema/lib/private/UnknownType.js"() {
    "use strict";
    init_PureType();
    UnknownType = class extends PureType {
      get name() {
        return "unknown";
      }
    };
  }
});

// ../../packages/pema/lib/private/unknown.js
var unknown_default;
var init_unknown = __esm({
  "../../packages/pema/lib/private/unknown.js"() {
    "use strict";
    init_UnknownType();
    unknown_default = new UnknownType();
  }
});

// ../../packages/pema/lib/private/URLType.js
var URLType;
var init_URLType = __esm({
  "../../packages/pema/lib/private/URLType.js"() {
    "use strict";
    init_BuiltinType();
    init_Storable();
    URLType = class extends BuiltinType {
      get Type() {
        return URL;
      }
      get name() {
        return "url";
      }
      get datatype() {
        return "url";
      }
      toJSON() {
        return Storable.serialize(this);
      }
    };
  }
});

// ../../packages/pema/lib/private/url.js
var url_default;
var init_url = __esm({
  "../../packages/pema/lib/private/url.js"() {
    "use strict";
    init_URLType();
    url_default = new URLType();
  }
});

// ../../packages/pema/lib/private/index.js
function schema(s3) {
  return normalize(s3);
}
var private_default3;
var init_private2 = __esm({
  "../../packages/pema/lib/private/index.js"() {
    "use strict";
    init_array();
    init_bigint2();
    init_biguint();
    init_blob();
    init_boolean();
    init_constructor();
    init_date2();
    init_dict();
    init_f322();
    init_f64();
    init_file();
    init_i128();
    init_i16();
    init_i32();
    init_i64();
    init_i8();
    init_int2();
    init_normalize();
    init_number();
    init_omit();
    init_pure();
    init_record();
    init_string();
    init_symbol();
    init_u128();
    init_u16();
    init_u32();
    init_u64();
    init_u8();
    init_uint();
    init_union();
    init_unknown();
    init_url();
    schema.array = array;
    schema.bigint = i64_default;
    schema.biguint = u64_default;
    schema.blob = blob_default;
    schema.boolean = boolean_default;
    schema.constructor = constructor_default;
    schema.date = date_default;
    schema.dict = dict;
    schema.f32 = f32_default;
    schema.f64 = f64_default;
    schema.file = file_default;
    schema.i128 = i128_default;
    schema.i16 = i16_default;
    schema.i32 = i32_default;
    schema.i64 = i64_default;
    schema.i8 = i8_default;
    schema.int = i32_default;
    schema.number = f64_default;
    schema.omit = omit;
    schema.record = record_default;
    schema.pure = pure_default;
    schema.string = string_default;
    schema.symbol = symbol_default;
    schema.u128 = u128_default;
    schema.u16 = u16_default;
    schema.u32 = u32_default;
    schema.u64 = u64_default;
    schema.u8 = u8_default;
    schema.uint = u32_default;
    schema.union = union;
    schema.unknown = unknown_default;
    schema.url = url_default;
    private_default3 = schema;
  }
});

// ../../packages/pema/lib/public/index.js
var init_public3 = __esm({
  "../../packages/pema/lib/public/index.js"() {
    "use strict";
    init_ArrayType();
    init_BooleanType();
    init_ConstructorType();
    init_DefaultType();
    init_private2();
    init_LiteralType();
    init_NumberType();
    init_ObjectType();
    init_OptionalType();
    init_PureType();
    init_RecordType();
    init_StringType();
    init_TupleType();
    init_UintType();
    init_UndefinedType();
    init_UnionType();
    init_UnknownType();
  }
});

// ../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/public/color.js
var init_color2 = __esm({
  "../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/public/color.js"() {
    "use strict";
    init_color();
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/async/Context.js
import { AsyncLocalStorage } from "node:async_hooks";
var Context_default;
var init_Context = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/async/Context.js"() {
    "use strict";
    Context_default = AsyncLocalStorage;
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/async.js
var async_default;
var init_async = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/async.js"() {
    "use strict";
    init_Context();
    async_default = {
      Context: Context_default
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/isatty.js
var isatty_default;
var init_isatty = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/isatty.js"() {
    "use strict";
    isatty_default = () => Boolean(process.stdout.isTTY);
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/run.js
import { exec } from "node:child_process";
var run_default;
var init_run = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/run.js"() {
    "use strict";
    run_default = (command, options) => new Promise((resolve3, reject) => {
      exec(command, options ?? {}, (error3, stdout2, stderr2) => error3 === null ? resolve3(stdout2) : reject(stderr2));
    });
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/spawn.js
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";
var spawn_default;
var init_spawn = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/spawn.js"() {
    "use strict";
    spawn_default = (command, options) => {
      const { stderr: stderr2, stdin: stdin2, stdout: stdout2 } = spawn(command, {
        ...options,
        shell: true,
        stdio: ["pipe", "pipe", "pipe"]
      });
      return {
        stderr: Readable.toWeb(stderr2),
        stdin: Writable.toWeb(stdin2),
        stdout: Readable.toWeb(stdout2)
      };
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/std/err.js
import { stderr } from "node:process";
var init_err = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/std/err.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/std/in.js
import { stdin } from "node:process";
var init_in = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/std/in.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/std/out.js
import { stdout } from "node:process";
var init_out = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/std/out.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/which.js
var is_win, which, qualify, which_default;
var init_which = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/which.js"() {
    "use strict";
    init_run();
    is_win = process.platform === "win32";
    which = is_win ? "where" : "which";
    qualify = (path) => is_win ? `"${path}"` : path;
    which_default = async (command) => qualify(await run_default(`${which} ${command}`, {})).replaceAll("\n", "");
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/index.js
var private_default4;
var init_private3 = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/private/index.js"() {
    "use strict";
    init_async();
    init_isatty();
    init_run();
    init_spawn();
    init_err();
    init_in();
    init_out();
    init_which();
    private_default4 = {
      async: async_default,
      isatty: isatty_default,
      run: run_default,
      spawn: spawn_default,
      stderr,
      stdin,
      stdout,
      which: which_default
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/public/index.js
var init_public4 = __esm({
  "../../node_modules/.pnpm/@rcompat+io@0.3.0/node_modules/@rcompat/io/lib/public/index.js"() {
    "use strict";
    init_private3();
  }
});

// ../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/private/print.js
var print_default;
var init_print = __esm({
  "../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/private/print.js"() {
    "use strict";
    init_public4();
    print_default = (...messages) => private_default4.stdout.write(messages.join(" "));
  }
});

// ../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/public/print.js
var init_print2 = __esm({
  "../../node_modules/.pnpm/@rcompat+cli@0.14.0/node_modules/@rcompat/cli/lib/public/print.js"() {
    "use strict";
    init_print();
  }
});

// ../../node_modules/.pnpm/@rcompat+args@0.11.0/node_modules/@rcompat/args/lib/private/args.js
var args_default;
var init_args = __esm({
  "../../node_modules/.pnpm/@rcompat+args@0.11.0/node_modules/@rcompat/args/lib/private/args.js"() {
    "use strict";
    args_default = (argv) => {
      const [, , ...args] = argv;
      return args;
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+args@0.11.0/node_modules/@rcompat/args/lib/public/node.js
var node_default;
var init_node = __esm({
  "../../node_modules/.pnpm/@rcompat+args@0.11.0/node_modules/@rcompat/args/lib/public/node.js"() {
    "use strict";
    init_args();
    node_default = args_default(process.argv);
  }
});

// ../../packages/core/lib/private/log.js
var levels, flag, n, vn, Log, log_default;
var init_log = __esm({
  "../../packages/core/lib/private/log.js"() {
    "use strict";
    init_AppError();
    init_node();
    init_color2();
    init_mark2();
    init_print2();
    init_public3();
    levels = {
      error: 0,
      info: 2,
      warn: 1
    };
    flag = "--log=";
    n = node_default.find((arg) => arg.startsWith(flag))?.slice(flag.length);
    vn = private_default3.union(...Object.keys(levels)).optional().parse(n);
    Log = class {
      #level;
      constructor(level) {
        this.#level = level;
      }
      print(message, ...params) {
        print_default(mark_default(message, ...params));
      }
      system(message, ...params) {
        print_default(`  ${mark_default(message, ...params)}
`);
      }
      info(message, ...params) {
        if (this.#level === levels.info) {
          print_default(color_default.green("[INFO]"), mark_default(message, ...params), "\n");
        }
      }
      warn(message, ...params) {
        if (this.#level >= levels.warn) {
          print_default(color_default.yellow("[WARN]"), mark_default(message, ...params), "\n");
        }
      }
      error(error3) {
        if (error3 instanceof AppError) {
          print_default(color_default.red("[ERROR]"), error3.message, "\n");
        } else {
          console.error(error3);
        }
      }
    };
    log_default = new Log(n === void 0 ? levels.warn : levels[vn]);
  }
});

// ../../packages/core/lib/private/route/router.js
function is_hook_file(p) {
  const basename2 = p.split("/").at(-1) ?? p;
  return basename2 === "+hook" || basename2.startsWith("+hook.");
}
var stack, Router, router_default;
var init_router = __esm({
  "../../packages/core/lib/private/route/router.js"() {
    "use strict";
    init_fail();
    init_public2();
    stack = [];
    Router = class {
      #routes = {};
      #hooks = {};
      push(route11) {
        stack.push(route11);
      }
      pop() {
        stack.pop();
      }
      get active() {
        return stack.at(-1);
      }
      add(verb, handler, options) {
        assert_default.string(verb);
        assert_default.function(handler);
        assert_default.maybe.dict(options);
        assert_default.maybe.boolean(options?.parseBody);
        const active = assert_default.defined(this.active);
        if (is_hook_file(active)) {
          throw fail("route.{0} may not be used inside {1}; use hook(...) instead", verb, active);
        }
        const _routes = this.#routes;
        if (!(active in _routes))
          _routes[active] = {};
        _routes[active][verb] = { handler, options: options ?? {} };
      }
      addHook(fn) {
        assert_default.function(fn);
        const active = assert_default.defined(this.active);
        if (!is_hook_file(active)) {
          throw fail("hook(...) may only be used inside +hook files, got {0}", active);
        }
        (this.#hooks[active] ??= []).push(fn);
      }
      getHooks(path) {
        return [...this.#hooks[path] ?? []];
      }
      verifyHook(path) {
        if ((this.#hooks[path] ?? []).length === 0) {
          throw fail("hook file {0} did not register any hooks (call hook(...))", path);
        }
      }
      get(path) {
        return { ...this.#routes[path] };
      }
    };
    router_default = new Router();
  }
});

// ../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/utils.js"(exports, module) {
    "use strict";
    function parseContentType(str) {
      if (str.length === 0)
        return;
      const params = /* @__PURE__ */ Object.create(null);
      let i = 0;
      for (; i < str.length; ++i) {
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
          if (code !== 47 || i === 0)
            return;
          break;
        }
      }
      if (i === str.length)
        return;
      const type = str.slice(0, i).toLowerCase();
      const subtypeStart = ++i;
      for (; i < str.length; ++i) {
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
          if (i === subtypeStart)
            return;
          if (parseContentTypeParams(str, i, params) === void 0)
            return;
          break;
        }
      }
      if (i === subtypeStart)
        return;
      const subtype = str.slice(subtypeStart, i).toLowerCase();
      return { type, subtype, params };
    }
    function parseContentTypeParams(str, i, params) {
      while (i < str.length) {
        for (; i < str.length; ++i) {
          const code = str.charCodeAt(i);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i === str.length)
          break;
        if (str.charCodeAt(i++) !== 59)
          return;
        for (; i < str.length; ++i) {
          const code = str.charCodeAt(i);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i === str.length)
          return;
        let name;
        const nameStart = i;
        for (; i < str.length; ++i) {
          const code = str.charCodeAt(i);
          if (TOKEN[code] !== 1) {
            if (code !== 61)
              return;
            break;
          }
        }
        if (i === str.length)
          return;
        name = str.slice(nameStart, i);
        ++i;
        if (i === str.length)
          return;
        let value = "";
        let valueStart;
        if (str.charCodeAt(i) === 34) {
          valueStart = ++i;
          let escaping = false;
          for (; i < str.length; ++i) {
            const code = str.charCodeAt(i);
            if (code === 92) {
              if (escaping) {
                valueStart = i;
                escaping = false;
              } else {
                value += str.slice(valueStart, i);
                escaping = true;
              }
              continue;
            }
            if (code === 34) {
              if (escaping) {
                valueStart = i;
                escaping = false;
                continue;
              }
              value += str.slice(valueStart, i);
              break;
            }
            if (escaping) {
              valueStart = i - 1;
              escaping = false;
            }
            if (QDTEXT[code] !== 1)
              return;
          }
          if (i === str.length)
            return;
          ++i;
        } else {
          valueStart = i;
          for (; i < str.length; ++i) {
            const code = str.charCodeAt(i);
            if (TOKEN[code] !== 1) {
              if (i === valueStart)
                return;
              break;
            }
          }
          value = str.slice(valueStart, i);
        }
        name = name.toLowerCase();
        if (params[name] === void 0)
          params[name] = value;
      }
      return params;
    }
    function parseDisposition(str, defDecoder) {
      if (str.length === 0)
        return;
      const params = /* @__PURE__ */ Object.create(null);
      let i = 0;
      for (; i < str.length; ++i) {
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
          if (parseDispositionParams(str, i, params, defDecoder) === void 0)
            return;
          break;
        }
      }
      const type = str.slice(0, i).toLowerCase();
      return { type, params };
    }
    function parseDispositionParams(str, i, params, defDecoder) {
      while (i < str.length) {
        for (; i < str.length; ++i) {
          const code = str.charCodeAt(i);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i === str.length)
          break;
        if (str.charCodeAt(i++) !== 59)
          return;
        for (; i < str.length; ++i) {
          const code = str.charCodeAt(i);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i === str.length)
          return;
        let name;
        const nameStart = i;
        for (; i < str.length; ++i) {
          const code = str.charCodeAt(i);
          if (TOKEN[code] !== 1) {
            if (code === 61)
              break;
            return;
          }
        }
        if (i === str.length)
          return;
        let value = "";
        let valueStart;
        let charset;
        name = str.slice(nameStart, i);
        if (name.charCodeAt(name.length - 1) === 42) {
          const charsetStart = ++i;
          for (; i < str.length; ++i) {
            const code = str.charCodeAt(i);
            if (CHARSET[code] !== 1) {
              if (code !== 39)
                return;
              break;
            }
          }
          if (i === str.length)
            return;
          charset = str.slice(charsetStart, i);
          ++i;
          for (; i < str.length; ++i) {
            const code = str.charCodeAt(i);
            if (code === 39)
              break;
          }
          if (i === str.length)
            return;
          ++i;
          if (i === str.length)
            return;
          valueStart = i;
          let encode = 0;
          for (; i < str.length; ++i) {
            const code = str.charCodeAt(i);
            if (EXTENDED_VALUE[code] !== 1) {
              if (code === 37) {
                let hexUpper;
                let hexLower;
                if (i + 2 < str.length && (hexUpper = HEX_VALUES[str.charCodeAt(i + 1)]) !== -1 && (hexLower = HEX_VALUES[str.charCodeAt(i + 2)]) !== -1) {
                  const byteVal = (hexUpper << 4) + hexLower;
                  value += str.slice(valueStart, i);
                  value += String.fromCharCode(byteVal);
                  i += 2;
                  valueStart = i + 1;
                  if (byteVal >= 128)
                    encode = 2;
                  else if (encode === 0)
                    encode = 1;
                  continue;
                }
                return;
              }
              break;
            }
          }
          value += str.slice(valueStart, i);
          value = convertToUTF8(value, charset, encode);
          if (value === void 0)
            return;
        } else {
          ++i;
          if (i === str.length)
            return;
          if (str.charCodeAt(i) === 34) {
            valueStart = ++i;
            let escaping = false;
            for (; i < str.length; ++i) {
              const code = str.charCodeAt(i);
              if (code === 92) {
                if (escaping) {
                  valueStart = i;
                  escaping = false;
                } else {
                  value += str.slice(valueStart, i);
                  escaping = true;
                }
                continue;
              }
              if (code === 34) {
                if (escaping) {
                  valueStart = i;
                  escaping = false;
                  continue;
                }
                value += str.slice(valueStart, i);
                break;
              }
              if (escaping) {
                valueStart = i - 1;
                escaping = false;
              }
              if (QDTEXT[code] !== 1)
                return;
            }
            if (i === str.length)
              return;
            ++i;
          } else {
            valueStart = i;
            for (; i < str.length; ++i) {
              const code = str.charCodeAt(i);
              if (TOKEN[code] !== 1) {
                if (i === valueStart)
                  return;
                break;
              }
            }
            value = str.slice(valueStart, i);
          }
          value = defDecoder(value, 2);
          if (value === void 0)
            return;
        }
        name = name.toLowerCase();
        if (params[name] === void 0)
          params[name] = value;
      }
      return params;
    }
    function getDecoder(charset) {
      let lc;
      while (true) {
        switch (charset) {
          case "utf-8":
          case "utf8":
            return decoders.utf8;
          case "latin1":
          case "ascii":
          // TODO: Make these a separate, strict decoder?
          case "us-ascii":
          case "iso-8859-1":
          case "iso8859-1":
          case "iso88591":
          case "iso_8859-1":
          case "windows-1252":
          case "iso_8859-1:1987":
          case "cp1252":
          case "x-cp1252":
            return decoders.latin1;
          case "utf16le":
          case "utf-16le":
          case "ucs2":
          case "ucs-2":
            return decoders.utf16le;
          case "base64":
            return decoders.base64;
          default:
            if (lc === void 0) {
              lc = true;
              charset = charset.toLowerCase();
              continue;
            }
            return decoders.other.bind(charset);
        }
      }
    }
    var decoders = {
      utf8: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string") {
          if (hint < 2)
            return data;
          data = Buffer.from(data, "latin1");
        }
        return data.utf8Slice(0, data.length);
      },
      latin1: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          return data;
        return data.latin1Slice(0, data.length);
      },
      utf16le: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          data = Buffer.from(data, "latin1");
        return data.ucs2Slice(0, data.length);
      },
      base64: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          data = Buffer.from(data, "latin1");
        return data.base64Slice(0, data.length);
      },
      other: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          data = Buffer.from(data, "latin1");
        try {
          const decoder = new TextDecoder(exports);
          return decoder.decode(data);
        } catch {
        }
      }
    };
    function convertToUTF8(data, charset, hint) {
      const decode3 = getDecoder(charset);
      if (decode3)
        return decode3(data, hint);
    }
    function basename2(path) {
      if (typeof path !== "string")
        return "";
      for (let i = path.length - 1; i >= 0; --i) {
        switch (path.charCodeAt(i)) {
          case 47:
          // '/'
          case 92:
            path = path.slice(i + 1);
            return path === ".." || path === "." ? "" : path;
        }
      }
      return path === ".." || path === "." ? "" : path;
    }
    var TOKEN = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var QDTEXT = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    var CHARSET = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var EXTENDED_VALUE = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var HEX_VALUES = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    module.exports = {
      basename: basename2,
      convertToUTF8,
      getDecoder,
      parseContentType,
      parseDisposition
    };
  }
});

// ../../node_modules/.pnpm/streamsearch@1.1.0/node_modules/streamsearch/lib/sbmh.js
var require_sbmh = __commonJS({
  "../../node_modules/.pnpm/streamsearch@1.1.0/node_modules/streamsearch/lib/sbmh.js"(exports, module) {
    "use strict";
    function memcmp(buf1, pos1, buf2, pos2, num) {
      for (let i = 0; i < num; ++i) {
        if (buf1[pos1 + i] !== buf2[pos2 + i])
          return false;
      }
      return true;
    }
    var SBMH = class {
      constructor(needle, cb) {
        if (typeof cb !== "function")
          throw new Error("Missing match callback");
        if (typeof needle === "string")
          needle = Buffer.from(needle);
        else if (!Buffer.isBuffer(needle))
          throw new Error(`Expected Buffer for needle, got ${typeof needle}`);
        const needleLen = needle.length;
        this.maxMatches = Infinity;
        this.matches = 0;
        this._cb = cb;
        this._lookbehindSize = 0;
        this._needle = needle;
        this._bufPos = 0;
        this._lookbehind = Buffer.allocUnsafe(needleLen);
        this._occ = [
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen
        ];
        if (needleLen > 1) {
          for (let i = 0; i < needleLen - 1; ++i)
            this._occ[needle[i]] = needleLen - 1 - i;
        }
      }
      reset() {
        this.matches = 0;
        this._lookbehindSize = 0;
        this._bufPos = 0;
      }
      push(chunk, pos) {
        let result2;
        if (!Buffer.isBuffer(chunk))
          chunk = Buffer.from(chunk, "latin1");
        const chunkLen = chunk.length;
        this._bufPos = pos || 0;
        while (result2 !== chunkLen && this.matches < this.maxMatches)
          result2 = feed(this, chunk);
        return result2;
      }
      destroy() {
        const lbSize = this._lookbehindSize;
        if (lbSize)
          this._cb(false, this._lookbehind, 0, lbSize, false);
        this.reset();
      }
    };
    function feed(self, data) {
      const len = data.length;
      const needle = self._needle;
      const needleLen = needle.length;
      let pos = -self._lookbehindSize;
      const lastNeedleCharPos = needleLen - 1;
      const lastNeedleChar = needle[lastNeedleCharPos];
      const end = len - needleLen;
      const occ = self._occ;
      const lookbehind = self._lookbehind;
      if (pos < 0) {
        while (pos < 0 && pos <= end) {
          const nextPos = pos + lastNeedleCharPos;
          const ch = nextPos < 0 ? lookbehind[self._lookbehindSize + nextPos] : data[nextPos];
          if (ch === lastNeedleChar && matchNeedle(self, data, pos, lastNeedleCharPos)) {
            self._lookbehindSize = 0;
            ++self.matches;
            if (pos > -self._lookbehindSize)
              self._cb(true, lookbehind, 0, self._lookbehindSize + pos, false);
            else
              self._cb(true, void 0, 0, 0, true);
            return self._bufPos = pos + needleLen;
          }
          pos += occ[ch];
        }
        while (pos < 0 && !matchNeedle(self, data, pos, len - pos))
          ++pos;
        if (pos < 0) {
          const bytesToCutOff = self._lookbehindSize + pos;
          if (bytesToCutOff > 0) {
            self._cb(false, lookbehind, 0, bytesToCutOff, false);
          }
          self._lookbehindSize -= bytesToCutOff;
          lookbehind.copy(lookbehind, 0, bytesToCutOff, self._lookbehindSize);
          lookbehind.set(data, self._lookbehindSize);
          self._lookbehindSize += len;
          self._bufPos = len;
          return len;
        }
        self._cb(false, lookbehind, 0, self._lookbehindSize, false);
        self._lookbehindSize = 0;
      }
      pos += self._bufPos;
      const firstNeedleChar = needle[0];
      while (pos <= end) {
        const ch = data[pos + lastNeedleCharPos];
        if (ch === lastNeedleChar && data[pos] === firstNeedleChar && memcmp(needle, 0, data, pos, lastNeedleCharPos)) {
          ++self.matches;
          if (pos > 0)
            self._cb(true, data, self._bufPos, pos, true);
          else
            self._cb(true, void 0, 0, 0, true);
          return self._bufPos = pos + needleLen;
        }
        pos += occ[ch];
      }
      while (pos < len) {
        if (data[pos] !== firstNeedleChar || !memcmp(data, pos, needle, 0, len - pos)) {
          ++pos;
          continue;
        }
        data.copy(lookbehind, 0, pos, len);
        self._lookbehindSize = len - pos;
        break;
      }
      if (pos > 0)
        self._cb(false, data, self._bufPos, pos < len ? pos : len, true);
      self._bufPos = len;
      return len;
    }
    function matchNeedle(self, data, pos, len) {
      const lb = self._lookbehind;
      const lbSize = self._lookbehindSize;
      const needle = self._needle;
      for (let i = 0; i < len; ++i, ++pos) {
        const ch = pos < 0 ? lb[lbSize + pos] : data[pos];
        if (ch !== needle[i])
          return false;
      }
      return true;
    }
    module.exports = SBMH;
  }
});

// ../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/types/multipart.js
var require_multipart = __commonJS({
  "../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/types/multipart.js"(exports, module) {
    "use strict";
    var { Readable: Readable4, Writable: Writable3 } = __require("stream");
    var StreamSearch = require_sbmh();
    var {
      basename: basename2,
      convertToUTF8,
      getDecoder,
      parseContentType,
      parseDisposition
    } = require_utils();
    var BUF_CRLF = Buffer.from("\r\n");
    var BUF_CR = Buffer.from("\r");
    var BUF_DASH = Buffer.from("-");
    function noop() {
    }
    var MAX_HEADER_PAIRS = 2e3;
    var MAX_HEADER_SIZE = 16 * 1024;
    var HPARSER_NAME = 0;
    var HPARSER_PRE_OWS = 1;
    var HPARSER_VALUE = 2;
    var HeaderParser = class {
      constructor(cb) {
        this.header = /* @__PURE__ */ Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = "";
        this.value = "";
        this.crlf = 0;
        this.cb = cb;
      }
      reset() {
        this.header = /* @__PURE__ */ Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = "";
        this.value = "";
        this.crlf = 0;
      }
      push(chunk, pos, end) {
        let start = pos;
        while (pos < end) {
          switch (this.state) {
            case HPARSER_NAME: {
              let done = false;
              for (; pos < end; ++pos) {
                if (this.byteCount === MAX_HEADER_SIZE)
                  return -1;
                ++this.byteCount;
                const code = chunk[pos];
                if (TOKEN[code] !== 1) {
                  if (code !== 58)
                    return -1;
                  this.name += chunk.latin1Slice(start, pos);
                  if (this.name.length === 0)
                    return -1;
                  ++pos;
                  done = true;
                  this.state = HPARSER_PRE_OWS;
                  break;
                }
              }
              if (!done) {
                this.name += chunk.latin1Slice(start, pos);
                break;
              }
            }
            case HPARSER_PRE_OWS: {
              let done = false;
              for (; pos < end; ++pos) {
                if (this.byteCount === MAX_HEADER_SIZE)
                  return -1;
                ++this.byteCount;
                const code = chunk[pos];
                if (code !== 32 && code !== 9) {
                  start = pos;
                  done = true;
                  this.state = HPARSER_VALUE;
                  break;
                }
              }
              if (!done)
                break;
            }
            case HPARSER_VALUE:
              switch (this.crlf) {
                case 0:
                  for (; pos < end; ++pos) {
                    if (this.byteCount === MAX_HEADER_SIZE)
                      return -1;
                    ++this.byteCount;
                    const code = chunk[pos];
                    if (FIELD_VCHAR[code] !== 1) {
                      if (code !== 13)
                        return -1;
                      ++this.crlf;
                      break;
                    }
                  }
                  this.value += chunk.latin1Slice(start, pos++);
                  break;
                case 1:
                  if (this.byteCount === MAX_HEADER_SIZE)
                    return -1;
                  ++this.byteCount;
                  if (chunk[pos++] !== 10)
                    return -1;
                  ++this.crlf;
                  break;
                case 2: {
                  if (this.byteCount === MAX_HEADER_SIZE)
                    return -1;
                  ++this.byteCount;
                  const code = chunk[pos];
                  if (code === 32 || code === 9) {
                    start = pos;
                    this.crlf = 0;
                  } else {
                    if (++this.pairCount < MAX_HEADER_PAIRS) {
                      this.name = this.name.toLowerCase();
                      if (this.header[this.name] === void 0)
                        this.header[this.name] = [this.value];
                      else
                        this.header[this.name].push(this.value);
                    }
                    if (code === 13) {
                      ++this.crlf;
                      ++pos;
                    } else {
                      start = pos;
                      this.crlf = 0;
                      this.state = HPARSER_NAME;
                      this.name = "";
                      this.value = "";
                    }
                  }
                  break;
                }
                case 3: {
                  if (this.byteCount === MAX_HEADER_SIZE)
                    return -1;
                  ++this.byteCount;
                  if (chunk[pos++] !== 10)
                    return -1;
                  const header = this.header;
                  this.reset();
                  this.cb(header);
                  return pos;
                }
              }
              break;
          }
        }
        return pos;
      }
    };
    var FileStream = class extends Readable4 {
      constructor(opts, owner) {
        super(opts);
        this.truncated = false;
        this._readcb = null;
        this.once("end", () => {
          this._read();
          if (--owner._fileEndsLeft === 0 && owner._finalcb) {
            const cb = owner._finalcb;
            owner._finalcb = null;
            process.nextTick(cb);
          }
        });
      }
      _read(n2) {
        const cb = this._readcb;
        if (cb) {
          this._readcb = null;
          cb();
        }
      }
    };
    var ignoreData = {
      push: (chunk, pos) => {
      },
      destroy: () => {
      }
    };
    function callAndUnsetCb(self, err) {
      const cb = self._writecb;
      self._writecb = null;
      if (err)
        self.destroy(err);
      else if (cb)
        cb();
    }
    function nullDecoder(val, hint) {
      return val;
    }
    var Multipart = class extends Writable3 {
      constructor(cfg) {
        const streamOpts = {
          autoDestroy: true,
          emitClose: true,
          highWaterMark: typeof cfg.highWaterMark === "number" ? cfg.highWaterMark : void 0
        };
        super(streamOpts);
        if (!cfg.conType.params || typeof cfg.conType.params.boundary !== "string")
          throw new Error("Multipart: Boundary not found");
        const boundary = cfg.conType.params.boundary;
        const paramDecoder = typeof cfg.defParamCharset === "string" && cfg.defParamCharset ? getDecoder(cfg.defParamCharset) : nullDecoder;
        const defCharset = cfg.defCharset || "utf8";
        const preservePath = cfg.preservePath;
        const fileOpts = {
          autoDestroy: true,
          emitClose: true,
          highWaterMark: typeof cfg.fileHwm === "number" ? cfg.fileHwm : void 0
        };
        const limits = cfg.limits;
        const fieldSizeLimit = limits && typeof limits.fieldSize === "number" ? limits.fieldSize : 1 * 1024 * 1024;
        const fileSizeLimit = limits && typeof limits.fileSize === "number" ? limits.fileSize : Infinity;
        const filesLimit = limits && typeof limits.files === "number" ? limits.files : Infinity;
        const fieldsLimit = limits && typeof limits.fields === "number" ? limits.fields : Infinity;
        const partsLimit = limits && typeof limits.parts === "number" ? limits.parts : Infinity;
        let parts = -1;
        let fields = 0;
        let files = 0;
        let skipPart = false;
        this._fileEndsLeft = 0;
        this._fileStream = void 0;
        this._complete = false;
        let fileSize = 0;
        let field;
        let fieldSize = 0;
        let partCharset;
        let partEncoding;
        let partType;
        let partName;
        let partTruncated = false;
        let hitFilesLimit = false;
        let hitFieldsLimit = false;
        this._hparser = null;
        const hparser = new HeaderParser((header) => {
          this._hparser = null;
          skipPart = false;
          partType = "text/plain";
          partCharset = defCharset;
          partEncoding = "7bit";
          partName = void 0;
          partTruncated = false;
          let filename;
          if (!header["content-disposition"]) {
            skipPart = true;
            return;
          }
          const disp = parseDisposition(
            header["content-disposition"][0],
            paramDecoder
          );
          if (!disp || disp.type !== "form-data") {
            skipPart = true;
            return;
          }
          if (disp.params) {
            if (disp.params.name)
              partName = disp.params.name;
            if (disp.params["filename*"])
              filename = disp.params["filename*"];
            else if (disp.params.filename)
              filename = disp.params.filename;
            if (filename !== void 0 && !preservePath)
              filename = basename2(filename);
          }
          if (header["content-type"]) {
            const conType = parseContentType(header["content-type"][0]);
            if (conType) {
              partType = `${conType.type}/${conType.subtype}`;
              if (conType.params && typeof conType.params.charset === "string")
                partCharset = conType.params.charset.toLowerCase();
            }
          }
          if (header["content-transfer-encoding"])
            partEncoding = header["content-transfer-encoding"][0].toLowerCase();
          if (partType === "application/octet-stream" || filename !== void 0) {
            if (files === filesLimit) {
              if (!hitFilesLimit) {
                hitFilesLimit = true;
                this.emit("filesLimit");
              }
              skipPart = true;
              return;
            }
            ++files;
            if (this.listenerCount("file") === 0) {
              skipPart = true;
              return;
            }
            fileSize = 0;
            this._fileStream = new FileStream(fileOpts, this);
            ++this._fileEndsLeft;
            this.emit(
              "file",
              partName,
              this._fileStream,
              {
                filename,
                encoding: partEncoding,
                mimeType: partType
              }
            );
          } else {
            if (fields === fieldsLimit) {
              if (!hitFieldsLimit) {
                hitFieldsLimit = true;
                this.emit("fieldsLimit");
              }
              skipPart = true;
              return;
            }
            ++fields;
            if (this.listenerCount("field") === 0) {
              skipPart = true;
              return;
            }
            field = [];
            fieldSize = 0;
          }
        });
        let matchPostBoundary = 0;
        const ssCb = (isMatch, data, start, end, isDataSafe) => {
          retrydata:
            while (data) {
              if (this._hparser !== null) {
                const ret = this._hparser.push(data, start, end);
                if (ret === -1) {
                  this._hparser = null;
                  hparser.reset();
                  this.emit("error", new Error("Malformed part header"));
                  break;
                }
                start = ret;
              }
              if (start === end)
                break;
              if (matchPostBoundary !== 0) {
                if (matchPostBoundary === 1) {
                  switch (data[start]) {
                    case 45:
                      matchPostBoundary = 2;
                      ++start;
                      break;
                    case 13:
                      matchPostBoundary = 3;
                      ++start;
                      break;
                    default:
                      matchPostBoundary = 0;
                  }
                  if (start === end)
                    return;
                }
                if (matchPostBoundary === 2) {
                  matchPostBoundary = 0;
                  if (data[start] === 45) {
                    this._complete = true;
                    this._bparser = ignoreData;
                    return;
                  }
                  const writecb = this._writecb;
                  this._writecb = noop;
                  ssCb(false, BUF_DASH, 0, 1, false);
                  this._writecb = writecb;
                } else if (matchPostBoundary === 3) {
                  matchPostBoundary = 0;
                  if (data[start] === 10) {
                    ++start;
                    if (parts >= partsLimit)
                      break;
                    this._hparser = hparser;
                    if (start === end)
                      break;
                    continue retrydata;
                  } else {
                    const writecb = this._writecb;
                    this._writecb = noop;
                    ssCb(false, BUF_CR, 0, 1, false);
                    this._writecb = writecb;
                  }
                }
              }
              if (!skipPart) {
                if (this._fileStream) {
                  let chunk;
                  const actualLen = Math.min(end - start, fileSizeLimit - fileSize);
                  if (!isDataSafe) {
                    chunk = Buffer.allocUnsafe(actualLen);
                    data.copy(chunk, 0, start, start + actualLen);
                  } else {
                    chunk = data.slice(start, start + actualLen);
                  }
                  fileSize += chunk.length;
                  if (fileSize === fileSizeLimit) {
                    if (chunk.length > 0)
                      this._fileStream.push(chunk);
                    this._fileStream.emit("limit");
                    this._fileStream.truncated = true;
                    skipPart = true;
                  } else if (!this._fileStream.push(chunk)) {
                    if (this._writecb)
                      this._fileStream._readcb = this._writecb;
                    this._writecb = null;
                  }
                } else if (field !== void 0) {
                  let chunk;
                  const actualLen = Math.min(
                    end - start,
                    fieldSizeLimit - fieldSize
                  );
                  if (!isDataSafe) {
                    chunk = Buffer.allocUnsafe(actualLen);
                    data.copy(chunk, 0, start, start + actualLen);
                  } else {
                    chunk = data.slice(start, start + actualLen);
                  }
                  fieldSize += actualLen;
                  field.push(chunk);
                  if (fieldSize === fieldSizeLimit) {
                    skipPart = true;
                    partTruncated = true;
                  }
                }
              }
              break;
            }
          if (isMatch) {
            matchPostBoundary = 1;
            if (this._fileStream) {
              this._fileStream.push(null);
              this._fileStream = null;
            } else if (field !== void 0) {
              let data2;
              switch (field.length) {
                case 0:
                  data2 = "";
                  break;
                case 1:
                  data2 = convertToUTF8(field[0], partCharset, 0);
                  break;
                default:
                  data2 = convertToUTF8(
                    Buffer.concat(field, fieldSize),
                    partCharset,
                    0
                  );
              }
              field = void 0;
              fieldSize = 0;
              this.emit(
                "field",
                partName,
                data2,
                {
                  nameTruncated: false,
                  valueTruncated: partTruncated,
                  encoding: partEncoding,
                  mimeType: partType
                }
              );
            }
            if (++parts === partsLimit)
              this.emit("partsLimit");
          }
        };
        this._bparser = new StreamSearch(`\r
--${boundary}`, ssCb);
        this._writecb = null;
        this._finalcb = null;
        this.write(BUF_CRLF);
      }
      static detect(conType) {
        return conType.type === "multipart" && conType.subtype === "form-data";
      }
      _write(chunk, enc, cb) {
        this._writecb = cb;
        this._bparser.push(chunk, 0);
        if (this._writecb)
          callAndUnsetCb(this);
      }
      _destroy(err, cb) {
        this._hparser = null;
        this._bparser = ignoreData;
        if (!err)
          err = checkEndState(this);
        const fileStream = this._fileStream;
        if (fileStream) {
          this._fileStream = null;
          fileStream.destroy(err);
        }
        cb(err);
      }
      _final(cb) {
        this._bparser.destroy();
        if (!this._complete)
          return cb(new Error("Unexpected end of form"));
        if (this._fileEndsLeft)
          this._finalcb = finalcb.bind(null, this, cb);
        else
          finalcb(this, cb);
      }
    };
    function finalcb(self, cb, err) {
      if (err)
        return cb(err);
      err = checkEndState(self);
      cb(err);
    }
    function checkEndState(self) {
      if (self._hparser)
        return new Error("Malformed part header");
      const fileStream = self._fileStream;
      if (fileStream) {
        self._fileStream = null;
        fileStream.destroy(new Error("Unexpected end of file"));
      }
      if (!self._complete)
        return new Error("Unexpected end of form");
    }
    var TOKEN = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var FIELD_VCHAR = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    module.exports = Multipart;
  }
});

// ../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/types/urlencoded.js
var require_urlencoded = __commonJS({
  "../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/types/urlencoded.js"(exports, module) {
    "use strict";
    var { Writable: Writable3 } = __require("stream");
    var { getDecoder } = require_utils();
    var URLEncoded = class extends Writable3 {
      constructor(cfg) {
        const streamOpts = {
          autoDestroy: true,
          emitClose: true,
          highWaterMark: typeof cfg.highWaterMark === "number" ? cfg.highWaterMark : void 0
        };
        super(streamOpts);
        let charset = cfg.defCharset || "utf8";
        if (cfg.conType.params && typeof cfg.conType.params.charset === "string")
          charset = cfg.conType.params.charset;
        this.charset = charset;
        const limits = cfg.limits;
        this.fieldSizeLimit = limits && typeof limits.fieldSize === "number" ? limits.fieldSize : 1 * 1024 * 1024;
        this.fieldsLimit = limits && typeof limits.fields === "number" ? limits.fields : Infinity;
        this.fieldNameSizeLimit = limits && typeof limits.fieldNameSize === "number" ? limits.fieldNameSize : 100;
        this._inKey = true;
        this._keyTrunc = false;
        this._valTrunc = false;
        this._bytesKey = 0;
        this._bytesVal = 0;
        this._fields = 0;
        this._key = "";
        this._val = "";
        this._byte = -2;
        this._lastPos = 0;
        this._encode = 0;
        this._decoder = getDecoder(charset);
      }
      static detect(conType) {
        return conType.type === "application" && conType.subtype === "x-www-form-urlencoded";
      }
      _write(chunk, enc, cb) {
        if (this._fields >= this.fieldsLimit)
          return cb();
        let i = 0;
        const len = chunk.length;
        this._lastPos = 0;
        if (this._byte !== -2) {
          i = readPctEnc(this, chunk, i, len);
          if (i === -1)
            return cb(new Error("Malformed urlencoded form"));
          if (i >= len)
            return cb();
          if (this._inKey)
            ++this._bytesKey;
          else
            ++this._bytesVal;
        }
        main:
          while (i < len) {
            if (this._inKey) {
              i = skipKeyBytes(this, chunk, i, len);
              while (i < len) {
                switch (chunk[i]) {
                  case 61:
                    if (this._lastPos < i)
                      this._key += chunk.latin1Slice(this._lastPos, i);
                    this._lastPos = ++i;
                    this._key = this._decoder(this._key, this._encode);
                    this._encode = 0;
                    this._inKey = false;
                    continue main;
                  case 38:
                    if (this._lastPos < i)
                      this._key += chunk.latin1Slice(this._lastPos, i);
                    this._lastPos = ++i;
                    this._key = this._decoder(this._key, this._encode);
                    this._encode = 0;
                    if (this._bytesKey > 0) {
                      this.emit(
                        "field",
                        this._key,
                        "",
                        {
                          nameTruncated: this._keyTrunc,
                          valueTruncated: false,
                          encoding: this.charset,
                          mimeType: "text/plain"
                        }
                      );
                    }
                    this._key = "";
                    this._val = "";
                    this._keyTrunc = false;
                    this._valTrunc = false;
                    this._bytesKey = 0;
                    this._bytesVal = 0;
                    if (++this._fields >= this.fieldsLimit) {
                      this.emit("fieldsLimit");
                      return cb();
                    }
                    continue;
                  case 43:
                    if (this._lastPos < i)
                      this._key += chunk.latin1Slice(this._lastPos, i);
                    this._key += " ";
                    this._lastPos = i + 1;
                    break;
                  case 37:
                    if (this._encode === 0)
                      this._encode = 1;
                    if (this._lastPos < i)
                      this._key += chunk.latin1Slice(this._lastPos, i);
                    this._lastPos = i + 1;
                    this._byte = -1;
                    i = readPctEnc(this, chunk, i + 1, len);
                    if (i === -1)
                      return cb(new Error("Malformed urlencoded form"));
                    if (i >= len)
                      return cb();
                    ++this._bytesKey;
                    i = skipKeyBytes(this, chunk, i, len);
                    continue;
                }
                ++i;
                ++this._bytesKey;
                i = skipKeyBytes(this, chunk, i, len);
              }
              if (this._lastPos < i)
                this._key += chunk.latin1Slice(this._lastPos, i);
            } else {
              i = skipValBytes(this, chunk, i, len);
              while (i < len) {
                switch (chunk[i]) {
                  case 38:
                    if (this._lastPos < i)
                      this._val += chunk.latin1Slice(this._lastPos, i);
                    this._lastPos = ++i;
                    this._inKey = true;
                    this._val = this._decoder(this._val, this._encode);
                    this._encode = 0;
                    if (this._bytesKey > 0 || this._bytesVal > 0) {
                      this.emit(
                        "field",
                        this._key,
                        this._val,
                        {
                          nameTruncated: this._keyTrunc,
                          valueTruncated: this._valTrunc,
                          encoding: this.charset,
                          mimeType: "text/plain"
                        }
                      );
                    }
                    this._key = "";
                    this._val = "";
                    this._keyTrunc = false;
                    this._valTrunc = false;
                    this._bytesKey = 0;
                    this._bytesVal = 0;
                    if (++this._fields >= this.fieldsLimit) {
                      this.emit("fieldsLimit");
                      return cb();
                    }
                    continue main;
                  case 43:
                    if (this._lastPos < i)
                      this._val += chunk.latin1Slice(this._lastPos, i);
                    this._val += " ";
                    this._lastPos = i + 1;
                    break;
                  case 37:
                    if (this._encode === 0)
                      this._encode = 1;
                    if (this._lastPos < i)
                      this._val += chunk.latin1Slice(this._lastPos, i);
                    this._lastPos = i + 1;
                    this._byte = -1;
                    i = readPctEnc(this, chunk, i + 1, len);
                    if (i === -1)
                      return cb(new Error("Malformed urlencoded form"));
                    if (i >= len)
                      return cb();
                    ++this._bytesVal;
                    i = skipValBytes(this, chunk, i, len);
                    continue;
                }
                ++i;
                ++this._bytesVal;
                i = skipValBytes(this, chunk, i, len);
              }
              if (this._lastPos < i)
                this._val += chunk.latin1Slice(this._lastPos, i);
            }
          }
        cb();
      }
      _final(cb) {
        if (this._byte !== -2)
          return cb(new Error("Malformed urlencoded form"));
        if (!this._inKey || this._bytesKey > 0 || this._bytesVal > 0) {
          if (this._inKey)
            this._key = this._decoder(this._key, this._encode);
          else
            this._val = this._decoder(this._val, this._encode);
          this.emit(
            "field",
            this._key,
            this._val,
            {
              nameTruncated: this._keyTrunc,
              valueTruncated: this._valTrunc,
              encoding: this.charset,
              mimeType: "text/plain"
            }
          );
        }
        cb();
      }
    };
    function readPctEnc(self, chunk, pos, len) {
      if (pos >= len)
        return len;
      if (self._byte === -1) {
        const hexUpper = HEX_VALUES[chunk[pos++]];
        if (hexUpper === -1)
          return -1;
        if (hexUpper >= 8)
          self._encode = 2;
        if (pos < len) {
          const hexLower = HEX_VALUES[chunk[pos++]];
          if (hexLower === -1)
            return -1;
          if (self._inKey)
            self._key += String.fromCharCode((hexUpper << 4) + hexLower);
          else
            self._val += String.fromCharCode((hexUpper << 4) + hexLower);
          self._byte = -2;
          self._lastPos = pos;
        } else {
          self._byte = hexUpper;
        }
      } else {
        const hexLower = HEX_VALUES[chunk[pos++]];
        if (hexLower === -1)
          return -1;
        if (self._inKey)
          self._key += String.fromCharCode((self._byte << 4) + hexLower);
        else
          self._val += String.fromCharCode((self._byte << 4) + hexLower);
        self._byte = -2;
        self._lastPos = pos;
      }
      return pos;
    }
    function skipKeyBytes(self, chunk, pos, len) {
      if (self._bytesKey > self.fieldNameSizeLimit) {
        if (!self._keyTrunc) {
          if (self._lastPos < pos)
            self._key += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._keyTrunc = true;
        for (; pos < len; ++pos) {
          const code = chunk[pos];
          if (code === 61 || code === 38)
            break;
          ++self._bytesKey;
        }
        self._lastPos = pos;
      }
      return pos;
    }
    function skipValBytes(self, chunk, pos, len) {
      if (self._bytesVal > self.fieldSizeLimit) {
        if (!self._valTrunc) {
          if (self._lastPos < pos)
            self._val += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._valTrunc = true;
        for (; pos < len; ++pos) {
          if (chunk[pos] === 38)
            break;
          ++self._bytesVal;
        }
        self._lastPos = pos;
      }
      return pos;
    }
    var HEX_VALUES = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    module.exports = URLEncoded;
  }
});

// ../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/index.js"(exports, module) {
    "use strict";
    var { parseContentType } = require_utils();
    function getInstance(cfg) {
      const headers = cfg.headers;
      const conType = parseContentType(headers["content-type"]);
      if (!conType)
        throw new Error("Malformed content type");
      for (const type of TYPES) {
        const matched = type.detect(conType);
        if (!matched)
          continue;
        const instanceCfg = {
          limits: cfg.limits,
          headers,
          conType,
          highWaterMark: void 0,
          fileHwm: void 0,
          defCharset: void 0,
          defParamCharset: void 0,
          preservePath: false
        };
        if (cfg.highWaterMark)
          instanceCfg.highWaterMark = cfg.highWaterMark;
        if (cfg.fileHwm)
          instanceCfg.fileHwm = cfg.fileHwm;
        instanceCfg.defCharset = cfg.defCharset;
        instanceCfg.defParamCharset = cfg.defParamCharset;
        instanceCfg.preservePath = cfg.preservePath;
        return new type(instanceCfg);
      }
      throw new Error(`Unsupported content type: ${headers["content-type"]}`);
    }
    var TYPES = [
      require_multipart(),
      require_urlencoded()
    ].filter(function(typemod) {
      return typeof typemod.detect === "function";
    });
    module.exports = (cfg) => {
      if (typeof cfg !== "object" || cfg === null)
        cfg = {};
      if (typeof cfg.headers !== "object" || cfg.headers === null || typeof cfg.headers["content-type"] !== "string") {
        throw new Error("Missing Content-Type");
      }
      return getInstance(cfg);
    };
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length2) {
      for (let i = 0; i < length2; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length2) {
          if (length2 < 48) _mask(source, mask, output, offset, length2);
          else bufferUtil.mask(source, mask, output, offset, length2);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       * @param {Boolean} [isServer=false] Create the instance in either server or
       *     client mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result2) => {
            done();
            callback(err, result2);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result2) => {
            done();
            callback(err, result2);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob3(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob: isBlob3,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable: Writable3 } = __require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable3 {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n2) {
        this._bufferedBytes -= n2;
        if (n2 === this._buffers[0].length) return this._buffers.shift();
        if (n2 < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n2,
            buf.length - n2
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n2);
        }
        const dst = Buffer.allocUnsafe(n2);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n2;
          if (n2 >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n2), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n2,
              buf.length - n2
            );
          }
          n2 -= buf.length;
        } while (n2 > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error3 = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error3);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          const error3 = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error3);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error3 = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error3);
            return;
          }
          if (!this._fragmented) {
            const error3 = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error3);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error3 = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error3);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error3 = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error3);
            return;
          }
          if (compressed) {
            const error3 = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error3);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error3 = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error3);
            return;
          }
        } else {
          const error3 = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error3);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error3 = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error3);
            return;
          }
        } else if (this._masked) {
          const error3 = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error3);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error3 = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error3);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error3 = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error3);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error3 = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error3);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error3 = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error3);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error3 = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error3);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error3 = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error3);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob: isBlob3, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length2 = Buffer.byteLength(data);
          if (length2 > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length2);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob3(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob3(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob3(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob3(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob3(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob3(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob2, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob2.arrayBuffer().then((arrayBuffer2) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer2);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_2, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error3) {
            const event = new ErrorEvent("error", {
              error: error3,
              message: error3.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse3(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(
            Object.keys(params).map((k) => {
              let values2 = params[k];
              if (!Array.isArray(values2)) values2 = [values2];
              return values2.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse: parse3 };
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http = __require("http");
    var net = __require("net");
    var tls = __require("tls");
    var { randomBytes, createHash } = __require("crypto");
    var { Duplex, Readable: Readable4 } = __require("stream");
    var { URL: URL2 } = __require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob: isBlob3 } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse: parse3 } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse3(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length2 = isBlob3(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length2;
        else websocket._bufferedAmount += length2;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error3(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error3(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse3(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse: parse3 };
  }
});

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http = __require("http");
    var { Duplex } = __require("stream");
    var { createHash } = __require("crypto");
    var extension = require_extension();
    var PerMessageDeflate = require_permessage_deflate();
    var subprotocol = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );
          try {
            const offers = extension.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// ../../packages/core/lib/public/route/router.js
var init_router2 = __esm({
  "../../packages/core/lib/public/route/router.js"() {
    "use strict";
    init_router();
  }
});

// ../../packages/primate/lib/public/router.js
var init_router3 = __esm({
  "../../packages/primate/lib/public/router.js"() {
    "use strict";
    init_router2();
  }
});

// ../../packages/sqlite/lib/private/typemap.js
function identity(column) {
  return {
    bind: (value) => value,
    column,
    unbind: (value) => value
  };
}
function number(column) {
  return {
    bind: (value) => value,
    column,
    unbind: (value) => Number(value)
  };
}
var typemap, typemap_default;
var init_typemap = __esm({
  "../../packages/sqlite/lib/private/typemap.js"() {
    "use strict";
    typemap = {
      blob: {
        async bind(value) {
          return new Uint8Array(await value.arrayBuffer());
        },
        column: "BLOB",
        unbind(value) {
          return new Blob([value], { type: "application/octet-stream" });
        }
      },
      boolean: {
        bind(value) {
          return value === true ? 1 : 0;
        },
        column: "INTEGER",
        unbind(value) {
          return Number(value) === 1;
        }
      },
      datetime: {
        bind(value) {
          return value.toJSON();
        },
        column: "TEXT",
        unbind(value) {
          return new Date(value);
        }
      },
      f32: identity("REAL"),
      f64: identity("REAL"),
      i128: {
        bind(value) {
          return String(value);
        },
        column: "TEXT",
        unbind(value) {
          return BigInt(value);
        }
      },
      i16: number("INTEGER"),
      i32: number("INTEGER"),
      i64: {
        bind(value) {
          return value;
        },
        column: "INTEGER",
        unbind(value) {
          return BigInt(value);
        }
      },
      i8: number("INTEGER"),
      string: identity("TEXT"),
      time: identity("TEXT"),
      u128: {
        bind(value) {
          return String(value);
        },
        column: "TEXT",
        unbind(value) {
          return BigInt(value);
        }
      },
      u16: number("INTEGER"),
      u32: number("INTEGER"),
      u64: {
        bind(value) {
          return String(value);
        },
        column: "TEXT",
        unbind(value) {
          return BigInt(value);
        }
      },
      u8: number("INTEGER"),
      url: {
        bind(value) {
          return value.toString();
        },
        column: "TEXT",
        unbind(value) {
          return new URL(value);
        }
      }
    };
    typemap_default = typemap;
  }
});

// ../../packages/core/lib/private/db/common.js
var UNSIGNED_BIGINT_TYPES, SIGNED_BIGINT_TYPES, BIGINT_STRING_TYPES, INT_TYPES, BASE, common_default;
var init_common = __esm({
  "../../packages/core/lib/private/db/common.js"() {
    "use strict";
    UNSIGNED_BIGINT_TYPES = ["u64", "u128"];
    SIGNED_BIGINT_TYPES = ["i128"];
    BIGINT_STRING_TYPES = [...UNSIGNED_BIGINT_TYPES, ...SIGNED_BIGINT_TYPES];
    INT_TYPES = ["u8", "u16", "u32", "i8", "i16", "i32"];
    BASE = {
      withed(args) {
        return args.with !== void 0;
      },
      fields(base, ...add) {
        if (base === void 0)
          return void 0;
        const set = new Set(base);
        for (const f of add)
          if (f !== null)
            set.add(f);
        return [...set];
      },
      project(row, fields) {
        if (fields === void 0 || fields.length === 0)
          return { ...row };
        const out = {};
        for (const k of fields)
          if (k in row)
            out[k] = row[k];
        return out;
      },
      expand(as, fields, relations) {
        const fks = Object.values(relations).flatMap((r) => r.reverse ? [r.fk] : []);
        return BASE.fields(fields, as.pk, ...fks);
      },
      BIGINT_STRING_TYPES,
      UNSIGNED_BIGINT_TYPES,
      INT_TYPES
    };
    common_default = BASE;
  }
});

// ../../packages/core/lib/public/db.js
var init_db = __esm({
  "../../packages/core/lib/public/db.js"() {
    "use strict";
    init_common();
  }
});

// ../../packages/core/lib/private/db/error.js
function coded(fns) {
  return Object.fromEntries(Object.entries(fns).map(([key, fn]) => [
    key,
    (...args) => {
      const err = fn(...args);
      err.code = key;
      return err;
    }
  ]));
}
function db_missing() {
  return fail("database missing");
}
function store_name_required() {
  return fail("store name required");
}
function unregistered_schema() {
  return fail("no store registered for schema");
}
function record_not_found(field, value) {
  return fail("no record with {0} = {1}", field, value);
}
function key_duplicate(key) {
  return fail("key {0} already exists", key);
}
function pk_undefined(store) {
  return fail("{0}: store has no primary key", store);
}
function pk_immutable(pk) {
  return fail("primary key {0} cannot be updated", pk);
}
function pk_duplicate(pk) {
  return fail("primary key {0} already exists", pk);
}
function pk_invalid(pk) {
  return fail("pk must be string, number or bigint, got {0}", kind_of(pk));
}
function pk_required(table) {
  return fail("pk is required but has generate={0} in table {1}", false, table);
}
function field_unknown(field, context) {
  return fail("{0}: unknown field on {1}", field, context);
}
function field_duplicate(field, context) {
  return fail("{0}: duplicate field on {1}", field, context);
}
function field_required(operator) {
  return fail("{0}: at least one field required", operator);
}
function field_undefined(field, context) {
  return fail("{0}: undefined value on {1}", field, context);
}
function fields_unknown(fields) {
  return fail("unknown fields {0}", fields.join(", "));
}
function null_not_allowed(field) {
  return fail("{0}: null not allowed", field);
}
function kind_of(x) {
  if (x === null)
    return "null";
  if (x instanceof Date)
    return "Date";
  if (x instanceof URL)
    return "URL";
  if (x instanceof Blob)
    return "Blob";
  return typeof x;
}
function wrong_type(type, field, got, op = "value") {
  return fail("{0}: {1} requires {2}, got {3}", field, op, type, kind_of(got));
}
function operator_unknown(field, operator) {
  return fail("{0}: unknown operator {1}", field, operator);
}
function operator_empty(field) {
  return fail("{0}: empty operator", field);
}
function operator_scalar(field) {
  return fail("{0}: operator requires scalar value", field);
}
function sort_empty() {
  return fail("empty sort");
}
function sort_invalid() {
  return fail("sort invalid");
}
function sort_invalid_value(field, value) {
  return fail("{0}: invalid sort value, received {1}", field, kind_of(value));
}
function select_empty() {
  return fail("empty select");
}
function select_invalid() {
  return fail("invalid select");
}
function limit_invalid() {
  return fail("invalid limit");
}
function select_invalid_value(index, x) {
  return fail("select[{0}]: must be string, received {1}", index, kind_of(x));
}
function where_required() {
  return fail("where required");
}
function where_invalid() {
  return fail("where invalid");
}
function where_invalid_value(field, value) {
  return fail("{0}: invalid where value, received {1}", field, kind_of(value));
}
function set_empty() {
  return fail("empty set on update");
}
function relation_unknown(relation) {
  return fail("unknown relation {0}", relation);
}
function relation_requires_pk(type) {
  return fail("relation loading requires {0} primary key", type);
}
function option_unknown(option) {
  return fail("unknown option {0}", option);
}
function identifier_invalid(identifier) {
  return fail("invalid identifier {0}", identifier);
}
function count_with_invalid() {
  return fail("count and with are mutually exclusive");
}
function count_overflow(table, count) {
  return fail("{0}: count overflow, received {1} (max {2})", table, count, Number.MAX_SAFE_INTEGER);
}
var STORE, PK, FIELD, NULL, OPERATOR, QUERY, RELATION, MISC, errors, Code, error_default;
var init_error2 = __esm({
  "../../packages/core/lib/private/db/error.js"() {
    "use strict";
    init_fail();
    STORE = coded({
      db_missing,
      store_name_required,
      unregistered_schema,
      record_not_found,
      key_duplicate
    });
    PK = coded({
      pk_undefined,
      pk_immutable,
      pk_duplicate,
      pk_invalid,
      pk_required
    });
    FIELD = coded({
      field_unknown,
      field_duplicate,
      field_required,
      field_undefined,
      fields_unknown
    });
    NULL = coded({
      null_not_allowed
    });
    OPERATOR = coded({
      operator_unknown,
      operator_empty,
      wrong_type,
      operator_scalar
    });
    QUERY = coded({
      sort_empty,
      sort_invalid,
      sort_invalid_value,
      select_empty,
      select_invalid,
      select_invalid_value,
      where_required,
      where_invalid,
      where_invalid_value,
      set_empty,
      limit_invalid
    });
    RELATION = coded({
      relation_unknown,
      relation_requires_pk
    });
    MISC = coded({
      option_unknown,
      identifier_invalid,
      count_with_invalid,
      count_overflow
    });
    errors = {
      ...STORE,
      ...PK,
      ...FIELD,
      ...NULL,
      ...OPERATOR,
      ...QUERY,
      ...RELATION,
      ...MISC
    };
    Code = Object.fromEntries(Object.keys(errors).map((k) => [k, k]));
    error_default = errors;
  }
});

// ../../packages/core/lib/public/db/error.js
var init_error3 = __esm({
  "../../packages/core/lib/public/db/error.js"() {
    "use strict";
    init_error2();
  }
});

// ../../packages/core/lib/private/db/sql.js
function normalize_sort(key, direction) {
  if (!private_default.string(direction))
    throw error_default.sort_invalid();
  const l = direction.toLowerCase();
  if (l !== "asc" && l !== "desc")
    throw error_default.sort_invalid_value(key, direction);
  return l.toUpperCase();
}
function assert_columns(types, columns) {
  const known = new Set(Object.keys(types));
  const unknown = columns.filter((c) => !known.has(c));
  if (unknown.length > 0)
    throw error_default.fields_unknown(unknown);
}
function quote(name) {
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name))
    throw error_default.identifier_invalid(name);
  return `\`${name}\``;
}
function Q(strings, ...values2) {
  return strings.reduce((result2, string, i) => {
    if (i === values2.length)
      return result2 + string;
    const value = values2[i];
    let processed;
    if (Array.isArray(value)) {
      processed = value.join(", ");
    } else if (typeof value === "string") {
      processed = sql.quote(value);
    } else {
      throw "Q: use only strings or arrays";
    }
    return result2 + string + processed;
  }, "");
}
var OPS, sql, sql_default;
var init_sql = __esm({
  "../../packages/core/lib/private/db/sql.js"() {
    "use strict";
    init_error2();
    init_public2();
    init_public();
    OPS = {
      $gt: ">",
      $gte: ">=",
      $lt: "<",
      $lte: "<=",
      $after: ">",
      $before: "<"
    };
    sql = {
      quote,
      orderBy(types, sort, alias) {
        if (sort === void 0)
          return "";
        const columns = Object.entries(sort);
        if (columns.length === 0)
          throw error_default.field_required("sort");
        assert_columns(types, columns.map(([k]) => k));
        const order = columns.map(([k, direction]) => {
          const quoted = quote(k);
          const col = alias ? `${alias}.${quoted}` : quoted;
          return `${col} ${normalize_sort(k, direction)}`;
        }).join(", ");
        return ` ORDER BY ${order}`;
      },
      limit(limit) {
        return limit !== void 0 ? ` LIMIT ${limit}` : "";
      },
      aliases(tables) {
        const counts = {};
        const result2 = {};
        for (const table of tables) {
          const prefix = table[0].toLowerCase();
          counts[prefix] ??= 0;
          result2[table] = `${prefix}${counts[prefix]++}`;
        }
        return result2;
      },
      aliased(aliases, as, fields) {
        const alias = aliases[as.table];
        return (fields ?? Object.keys(as.types)).map((f) => `${alias}.${quote(f)} AS ${alias}_${f}`).join(", ");
      },
      columns(types, columns) {
        if (columns === void 0)
          return "*";
        if (columns.length === 0)
          throw error_default.field_required("select");
        assert_columns(types, columns);
        return columns.map(quote).join(", ");
      },
      bindKey(column, op) {
        const suffix = op.startsWith("$") ? op.slice(1) : op;
        return `${column}__${suffix}`;
      },
      joinable(parent, relations) {
        const rels = Object.values(relations);
        if (rels.length !== 1)
          return false;
        const r = rels[0];
        if (parent.pk === null)
          return false;
        return !r.reverse && r.kind === "many" && r.limit === void 0 && r.sort === void 0 && Object.keys(r.where).length === 0 && r.as.pk !== null;
      },
      unbind(types, row, unbinder) {
        const out = {};
        for (const [key, value] of Object.entries(row)) {
          if (value === null)
            continue;
          assert_default.true(key in types, `unexpected column: ${key}`);
          out[key] = unbinder(types[key], value);
        }
        return out;
      },
      nest(as, args, relation_args, unbind2) {
        if (as.pk === null)
          throw error_default.relation_requires_pk("parent");
        const base_alias = args.aliases[as.table];
        const base_pk_key = `${base_alias}_${as.pk}`;
        const base_fields = relation_args.fields ?? Object.keys(as.types);
        const grouped = /* @__PURE__ */ new Map();
        for (const base_row of args.rows) {
          const pk_value = base_row[base_pk_key];
          const relation_entries = Object.entries(relation_args.with);
          if (!grouped.has(pk_value)) {
            const parent2 = {};
            for (const f of base_fields) {
              const v = base_row[`${base_alias}_${f}`];
              if (v == null)
                continue;
              parent2[f] = unbind2(as.types[f], v);
            }
            for (const [name, relation] of relation_entries) {
              parent2[name] = relation.kind === "many" ? [] : null;
            }
            grouped.set(pk_value, parent2);
          }
          const parent = grouped.get(pk_value);
          for (const [name, relation] of relation_entries) {
            const alias = args.aliases[relation.as.table];
            const pk = relation.as.pk;
            if (pk === null)
              continue;
            const pk_key = `${alias}_${pk}`;
            if (base_row[pk_key] == null)
              continue;
            const fields = relation.fields ?? Object.keys(relation.as.types);
            const row = {};
            for (const field of fields) {
              const v = base_row[`${alias}_${field}`];
              if (v == null)
                continue;
              row[field] = unbind2(relation.as.types[field], v);
            }
            if (relation.kind === "many") {
              parent[name].push(row);
            } else if (parent[name] === null) {
              parent[name] = row;
            }
          }
        }
        return [...grouped.values()];
      },
      Q,
      OPS
    };
    sql_default = sql;
  }
});

// ../../packages/core/lib/public/db/sql.js
var init_sql2 = __esm({
  "../../packages/core/lib/public/db/sql.js"() {
    "use strict";
    init_sql();
  }
});

// ../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/api/Database.js
var Database;
var init_Database = __esm({
  "../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/api/Database.js"() {
    "use strict";
    Database = class {
      exec(sql2, first, ...rest) {
        return this.prepare(sql2).run(first, ...rest);
      }
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/api/defaults.js
var defaults_default;
var init_defaults = __esm({
  "../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/api/defaults.js"() {
    "use strict";
    defaults_default = {};
  }
});

// ../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/node/Statement.js
var Statement_default;
var init_Statement = __esm({
  "../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/node/Statement.js"() {
    "use strict";
    Statement_default = class {
      #statement;
      constructor(statement) {
        this.#statement = statement;
      }
      get(first, ...rest) {
        if (first === void 0) {
          return this.#statement.get();
        }
        if (typeof first === "object" && first !== null) {
          return this.#statement.get(first);
        }
        return this.#statement.get(first, ...rest);
      }
      all(first, ...rest) {
        if (first === void 0) {
          return this.#statement.all();
        }
        if (typeof first === "object" && first !== null) {
          return this.#statement.all(first);
        }
        return this.#statement.all(first, ...rest);
      }
      run(first, ...rest) {
        if (first === void 0) {
          return this.#statement.run();
        }
        if (typeof first === "object" && first !== null) {
          return this.#statement.run(first);
        }
        return this.#statement.run(first, ...rest);
      }
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/node/Database.js
import { DatabaseSync as NodeSqlite } from "node:sqlite";
var Database_default;
var init_Database2 = __esm({
  "../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/private/node/Database.js"() {
    "use strict";
    init_Database();
    init_defaults();
    init_Statement();
    Database_default = class extends Database {
      #opened = false;
      #client;
      #safeIntegers = false;
      constructor(path, options = defaults_default) {
        super();
        this.#client = new NodeSqlite(path, {
          readOnly: options.readonly ?? false
        });
        if (options.safeIntegers) {
          this.#safeIntegers = true;
        }
        this.#opened = true;
      }
      close() {
        if (this.#opened) {
          this.#client.close();
          this.#opened = false;
        }
      }
      prepare(sql2) {
        const statement = this.#client.prepare(sql2);
        if (this.#safeIntegers) {
          statement.setReadBigInts(true);
        }
        return new Statement_default(statement);
      }
    };
  }
});

// ../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/public/index.js
var init_public5 = __esm({
  "../../node_modules/.pnpm/@rcompat+sqlite@0.8.0/node_modules/@rcompat/sqlite/lib/public/index.js"() {
    "use strict";
    init_Database2();
  }
});

// ../../packages/sqlite/lib/private/SQLite.js
function like_to_glob(pattern) {
  return pattern.replace(/\\%/g, "<<PERCENT>>").replace(/\\_/g, "<<UNDERSCORE>>").replace(/\[/g, "<<LBRACKET>>").replace(/\]/g, "<<RBRACKET>>").replace(/\*/g, "[*]").replace(/\?/g, "[?]").replace(/%/g, "*").replace(/_/g, "?").replace(/<<PERCENT>>/g, "%").replace(/<<UNDERSCORE>>/g, "_").replace(/<<LBRACKET>>/g, "[[]").replace(/<<RBRACKET>>/g, "[]]");
}
function u_cmp(field, a, b, op) {
  const la = `LENGTH(${a})`;
  const lb = `LENGTH(${b})`;
  switch (op) {
    case ">":
      return `${la}>${lb} OR (${la}=${lb} AND ${a}>${b})`;
    case ">=":
      return `${a}=${b} OR ${la}>${lb} OR (${la}=${lb} AND ${a}>${b})`;
    case "<":
      return `${la}<${lb} OR (${la}=${lb} AND ${a}<${b})`;
    case "<=":
      return `${a}=${b} OR ${la}<${lb} OR (${la}=${lb} AND ${a}<${b})`;
    default:
      throw error_default.operator_unknown(field, op);
  }
}
function i_cmp(field, binding, op) {
  const a = `CAST(${field} AS TEXT)`;
  const b = `CAST(${binding} AS TEXT)`;
  const a_neg = `(${a} LIKE '-%')`;
  const b_neg = `(${b} LIKE '-%')`;
  const a_abs = `CASE WHEN ${a_neg} THEN SUBSTR(${a}, 2) ELSE ${a} END`;
  const b_abs = `CASE WHEN ${b_neg} THEN SUBSTR(${b}, 2) ELSE ${b} END`;
  const is_gt = op === ">" || op === ">=";
  const strict = op === ">" || op === "<";
  const pos_neg_case = is_gt ? `(${a_neg} = 0 AND ${b_neg} = 1)` : `(${a_neg} = 1 AND ${b_neg} = 0)`;
  const abs_op_positive = strict ? op : is_gt ? ">" : "<";
  const abs_op_negative = is_gt ? strict ? "<" : "<=" : strict ? ">" : ">=";
  const same_sign = `(${a_neg} = ${b_neg} AND ((${a_neg} = 0 AND (${u_cmp(field, a, b, abs_op_positive)})) OR (${a_neg} = 1 AND (${u_cmp(field, a_abs, b_abs, abs_op_negative)}))))`;
  const core = `${pos_neg_case} OR ${same_sign}`;
  return strict ? `(${core})` : `(${a} = ${b} OR (${core}))`;
}
function cmp_expr(field, key, op, datatype) {
  const rhs = `${BIND_BY}${key}`;
  const sql_op = sql_default.OPS[op];
  assert_default.defined(sql_op, error_default.operator_unknown(field, op));
  if (common_default.BIGINT_STRING_TYPES.includes(datatype)) {
    const cmp = common_default.UNSIGNED_BIGINT_TYPES.includes(datatype) ? u_cmp(field, `CAST(${field} AS TEXT)`, `CAST(${rhs} AS TEXT)`, sql_op) : i_cmp(field, rhs, sql_op);
    return `(${cmp})`;
  }
  return `${field} ${sql_op} ${rhs}`;
}
function like(field, key, case_insensitive) {
  const rhs = `${BIND_BY}${key}`;
  if (case_insensitive)
    return `LOWER(${field}) LIKE LOWER(${rhs})`;
  return `CAST(${field} AS TEXT) GLOB ${rhs}`;
}
function get_column(key) {
  return typemap_default[key].column;
}
function bind_one(key, value) {
  return value === null ? null : typemap_default[key].bind(value);
}
function unbind_one(key, value) {
  return typemap_default[key].unbind(value);
}
async function bind(types, fields) {
  const out = {};
  for (const [key, value] of Object.entries(fields)) {
    if (private_default.dict(value))
      throw error_default.operator_scalar(key);
    const raw = key.startsWith("s_") ? key.slice(2) : key;
    out[`${BIND_BY}${key}`] = await bind_one(types[raw.split("__")[0]], value);
  }
  return out;
}
function unbind(types, row) {
  return sql_default.unbind(types, row, unbind_one);
}
var BIND_BY, Q2, schema2, SQLite;
var init_SQLite = __esm({
  "../../packages/sqlite/lib/private/SQLite.js"() {
    "use strict";
    init_typemap();
    init_db();
    init_error3();
    init_sql2();
    init_public2();
    init_public();
    init_public5();
    init_public3();
    BIND_BY = "$";
    Q2 = sql_default.Q;
    schema2 = private_default3({ database: private_default3.string.default(":memory:") });
    SQLite = class {
      #factory;
      #client;
      #debug = false;
      #explain = {};
      static config;
      constructor(config, options) {
        const parsed = schema2.parse(config);
        this.#factory = () => new Database_default(parsed.database, { safeIntegers: true });
        this.#debug = options?.debug ?? false;
      }
      get #db() {
        return this.#client ??= this.#factory();
      }
      #sql(query) {
        return this.#db.prepare(query);
      }
      #query_all(as, query, binds) {
        this.#capture(as.table, query, binds);
        const rows = this.#sql(query).all(binds);
        return rows.map((r) => unbind(as.types, r));
      }
      #query_run(query, binds) {
        return Number(this.#sql(query).run(binds).changes);
      }
      #capture(table, query, binds) {
        if (!this.#debug)
          return;
        const rows = this.#sql(`EXPLAIN QUERY PLAN ${query}`).all(binds);
        this.#explain[table] = { query, plans: rows.map((r) => r.detail) };
      }
      get explain() {
        return this.#explain;
      }
      get schema() {
        return {
          create: (as, store) => {
            const columns = [];
            for (const [key, value] of Object.entries(store)) {
              const column_type = get_column(value.datatype);
              const column = `${sql_default.quote(key)} ${column_type}`;
              const is_int = column_type === "INTEGER";
              if (key === as.pk) {
                const generate = as.generate_pk && is_int ? " AUTOINCREMENT" : "";
                columns.push(`${column} PRIMARY KEY${generate}`);
              } else {
                columns.push(column);
              }
            }
            this.#sql(Q2`CREATE TABLE IF NOT EXISTS ${as.table} (${columns})`).run();
          },
          delete: (table) => {
            this.#sql(Q2`DROP TABLE IF EXISTS ${table}`).run();
          }
        };
      }
      #where(types, where, alias) {
        const fields = Object.keys(where);
        if (fields.length === 0)
          return "";
        const parts = [];
        for (const field of fields) {
          const value = where[field];
          const datatype = types[field];
          const q = sql_default.quote(field);
          const quoted = alias ? `${alias}.${q}` : q;
          if (value === null) {
            parts.push(`${quoted} IS NULL`);
            continue;
          }
          if (private_default.dict(value)) {
            const ops = Object.entries(value);
            if (ops.length === 0)
              throw error_default.operator_empty(field);
            for (const [op] of ops) {
              const bound_key = sql_default.bindKey(field, op);
              switch (op) {
                case "$like":
                  parts.push(like(quoted, bound_key, false));
                  break;
                case "$ilike":
                  parts.push(like(quoted, bound_key, true));
                  break;
                case "$ne":
                  parts.push(`${quoted} != ${BIND_BY}${bound_key}`);
                  break;
                case "$gt":
                case "$gte":
                case "$lt":
                case "$lte":
                case "$after":
                case "$before":
                  parts.push(cmp_expr(quoted, bound_key, op, datatype));
                  break;
                default:
                  throw error_default.operator_unknown(field, op);
              }
            }
            continue;
          }
          parts.push(`${quoted} = ${BIND_BY}${field}`);
        }
        return `WHERE ${parts.join(" AND ")}`;
      }
      async #bind_where(types, where) {
        const filtered = {};
        for (const [field, value] of Object.entries(where)) {
          if (value === null)
            continue;
          if (private_default.dict(value)) {
            const ops = Object.entries(value);
            for (const [op, op_value] of ops) {
              const bound_key = sql_default.bindKey(field, op);
              switch (op) {
                case "$like":
                  filtered[bound_key] = like_to_glob(op_value);
                  break;
                case "$ilike":
                case "$gte":
                case "$gt":
                case "$after":
                case "$lte":
                case "$lt":
                case "$before":
                case "$ne":
                  filtered[bound_key] = op_value;
                  break;
                default:
                  throw error_default.operator_unknown(field, op);
              }
            }
            continue;
          }
          filtered[field] = value;
        }
        return bind(types, filtered);
      }
      #set(set) {
        const columns = Object.keys(set);
        if (columns.length === 0)
          throw error_default.field_required("set");
        return Q2`SET ${columns.map((c) => `${sql_default.quote(c)}=${BIND_BY}s_${c}`)}`;
      }
      async #bind_set(types, set) {
        const columns = Object.keys(set);
        if (columns.length === 0)
          throw error_default.field_required("set");
        const raw = Object.fromEntries(columns.map((c) => [`s_${c}`, set[c]]));
        return await bind(types, raw);
      }
      #generate_pk(as) {
        const pk = as.pk;
        const type = as.types[pk];
        if (type === "string")
          return crypto.randomUUID();
        if (common_default.BIGINT_STRING_TYPES.includes(type)) {
          const query = Q2`SELECT ${pk} AS v
        FROM ${as.table} ORDER BY LENGTH(${pk}) DESC, ${pk} DESC LIMIT 1`;
          const rows = this.#sql(query).all();
          return rows[0]?.v ? BigInt(rows[0].v) + 1n : 1n;
        }
        throw "unreachable";
      }
      #create(record) {
        const fields = Object.keys(record);
        return [
          fields.map(sql_default.quote),
          fields.map((field) => `${BIND_BY}${field}`)
        ];
      }
      async create(as, record) {
        assert_default.dict(record);
        const pk = as.pk;
        const table = as.table;
        if (pk === null || pk in record) {
          const [keys2, values3] = this.#create(record);
          const query2 = keys2.length > 0 ? Q2`INSERT INTO ${as.table} (${keys2}) VALUES (${values3})` : Q2`INSERT INTO ${as.table} DEFAULT VALUES`;
          this.#sql(query2).run(await bind(as.types, record));
          return record;
        }
        if (as.generate_pk === false)
          throw error_default.pk_required(pk);
        const type = as.types[pk];
        if (!common_default.BIGINT_STRING_TYPES.includes(type) && type !== "string") {
          const [keys2, values3] = this.#create(record);
          const query2 = keys2.length > 0 ? Q2`INSERT INTO ${table} (${keys2}) VALUES (${values3}) RETURNING ${pk}` : Q2`INSERT INTO ${table} DEFAULT VALUES RETURNING ${pk}`;
          const rows = this.#sql(query2).all(await bind(as.types, record));
          const pk_value2 = unbind_one(type, rows[0][pk]);
          return { ...record, [pk]: pk_value2 };
        }
        const pk_value = this.#generate_pk(as);
        const to_insert = { ...record, [pk]: pk_value };
        const [keys, values2] = this.#create(to_insert);
        const query = Q2`INSERT INTO ${table} (${keys}) VALUES (${values2})`;
        this.#sql(query).run(await bind(as.types, to_insert));
        return to_insert;
      }
      async read(as, args) {
        assert_default.dict(args.where);
        this.#explain = {};
        if (args.count === true)
          return this.#count(as, args.where);
        if (common_default.withed(args)) {
          return sql_default.joinable(as, args.with) ? this.#read_joined(as, args) : this.#read_phased(as, args);
        }
        return this.#read_base(as, args);
      }
      async #count(as, where) {
        const WHERE = this.#where(as.types, where);
        const binds = await this.#bind_where(as.types, where);
        const table = as.table;
        const query = `SELECT COUNT(*) AS n FROM ${sql_default.quote(table)} ${WHERE}`;
        this.#capture(table, query, binds);
        const rows = this.#sql(query).all(binds);
        assert_default.true(rows.length === 1, `COUNT(*) must return 1 row (got ${rows.length})`);
        const n2 = rows[0].n;
        assert_default.bigint(n2, `COUNT returned non-bigint: ${typeof n2}`);
        if (n2 > BigInt(Number.MAX_SAFE_INTEGER))
          throw error_default.count_overflow(table, n2);
        return Number(n2);
      }
      async #read_base(as, args) {
        const query = this.#base_query(as, args);
        const binds = await this.#bind_where(as.types, args.where);
        return this.#query_all(as, query, binds);
      }
      async #read_phased(as, args) {
        const fields = common_default.expand(as, args.fields, args.with);
        const rows = await this.#read_base(as, { ...args, fields });
        const out = rows.map((row) => common_default.project(row, args.fields));
        for (const [table, relation] of Object.entries(args.with)) {
          await this.#attach_relation(as, { rows, out, table, relation });
        }
        return out;
      }
      async #attach_relation(as, args) {
        const relation = args.relation;
        const by = relation.reverse ? relation.as.pk : relation.fk;
        if (by === null)
          throw error_default.relation_requires_pk("target");
        const parent_by = relation.reverse ? relation.fk : as.pk;
        if (parent_by === null)
          throw error_default.relation_requires_pk("parent");
        const join_values = [...new Set(args.rows.map((r) => r[parent_by]).filter((v) => v != null))];
        const is_many = relation.kind === "many";
        const many = is_many ? [] : null;
        if (join_values.length === 0) {
          for (const row of args.out)
            row[args.table] = many;
          return;
        }
        const related = await this.#load_related({ by, join_values, ...relation });
        const grouped = /* @__PURE__ */ new Map();
        for (const row of related) {
          const key = row[by];
          grouped.set(key, grouped.get(key)?.concat(row) ?? [row]);
        }
        for (let i = 0; i < args.out.length; i++) {
          const join_value = args.rows[i][parent_by];
          if (join_value == null) {
            args.out[i][args.table] = many;
            continue;
          }
          const rows = grouped.get(join_value) ?? [];
          args.out[i][args.table] = is_many ? rows.map((r) => common_default.project(r, relation.fields)) : rows[0] ? common_default.project(rows[0], relation.fields) : null;
        }
      }
      async #load_related(args) {
        const per_parent = args.kind === "one" ? 1 : args.limit;
        const in_binds = {};
        const placeholders = [];
        for (let i = 0; i < args.join_values.length; i++) {
          const key = `${args.by}__in${i}`;
          in_binds[key] = args.join_values[i];
          placeholders.push(`${BIND_BY}${key}`);
        }
        const where = this.#where(args.as.types, args.where);
        const where_part = where ? where.slice("WHERE ".length) : "";
        const in_part = Q2`${args.by} IN (${placeholders})`;
        const where_parts = where_part ? [`(${where_part})`, `(${in_part})`] : [in_part];
        const WHERE = `WHERE ${where_parts.join(" AND ")}`;
        const all_columns = Object.keys(args.as.types);
        const fields = args.fields !== void 0 && args.fields.length > 0 ? args.fields : all_columns;
        const SELECT = sql_default.columns(args.as.types, common_default.fields(fields, args.by));
        const base_order = `${sql_default.quote(args.by)} ASC`;
        const user_order = sql_default.orderBy(args.as.types, args.sort).replace(/^ ORDER BY /, "");
        const ORDER_BY = user_order ? ` ORDER BY ${base_order}, ${user_order}` : ` ORDER BY ${base_order}`;
        const where_binds = await this.#bind_where(args.as.types, args.where);
        const in_binds_bound = await bind(args.as.types, in_binds);
        let query;
        let binds;
        const table = args.as.table;
        if (per_parent !== void 0) {
          const per_key = `${args.by}__limit__per_parent`;
          query = `
        WITH ranked AS (
          SELECT
            ${SELECT},
            ROW_NUMBER() OVER (
              PARTITION BY ${sql_default.quote(args.by)}
              ${user_order ? `ORDER BY ${user_order}` : ""}
            ) AS __rn
          FROM ${sql_default.quote(table)}
          ${WHERE}
        )
        SELECT ${SELECT}
        FROM ranked
        WHERE __rn <= ${BIND_BY}${per_key}
        ${ORDER_BY}
      `;
          binds = {
            ...where_binds,
            ...in_binds_bound,
            [`${BIND_BY}${per_key}`]: per_parent
          };
        } else {
          query = `SELECT ${SELECT} FROM ${sql_default.quote(table)} ${WHERE}${ORDER_BY}`;
          binds = { ...where_binds, ...in_binds_bound };
        }
        return this.#query_all(args.as, query, binds);
      }
      #join(as, aliases, relation) {
        const parent_alias = aliases[as.table];
        const alias = aliases[relation.as.table];
        const table = sql_default.quote(relation.as.table);
        const by = relation.reverse ? relation.as.pk : relation.fk;
        const parent_by = relation.reverse ? relation.fk : as.pk;
        if (by === null)
          throw error_default.relation_requires_pk("target");
        if (parent_by === null)
          throw error_default.relation_requires_pk("parent");
        const left = `${alias}.${sql_default.quote(by)}`;
        const right = `${parent_alias}.${sql_default.quote(parent_by)}`;
        return `LEFT JOIN ${table} ${alias} ON ${left} = ${right}`;
      }
      #base_query(as, args) {
        const SELECT = sql_default.columns(as.types, args.fields);
        const WHERE = this.#where(as.types, args.where);
        const ORDER_BY = sql_default.orderBy(as.types, args.sort);
        const LIMIT = sql_default.limit(args.limit);
        const table = sql_default.quote(as.table);
        return `SELECT ${SELECT} FROM ${table} ${WHERE}${ORDER_BY}${LIMIT}`;
      }
      async #read_joined(as, args) {
        if (as.pk === null)
          throw error_default.relation_requires_pk("parent");
        const tables = [as.table, ...Object.values(args.with).map((r) => r.as.table)];
        const aliases = sql_default.aliases(tables);
        const alias = aliases[as.table];
        const fields = common_default.fields(args.fields, as.pk);
        const SELECT = [
          sql_default.aliased(aliases, as, fields),
          ...Object.values(args.with).map((relation) => {
            return sql_default.aliased(aliases, relation.as, relation.as.pk !== null ? common_default.fields(relation.fields, relation.as.pk) : relation.fields);
          })
        ].join(", ");
        const SUBQUERY = `(${this.#base_query(as, { ...args, fields })})`;
        const FROM = `${SUBQUERY} ${alias}`;
        const JOINS = Object.values(args.with).map((relation) => this.#join(as, aliases, relation)).join("\n");
        const ORDER_BY = sql_default.orderBy(as.types, args.sort, alias);
        const query = `SELECT ${SELECT} FROM ${FROM} ${JOINS} ${ORDER_BY}`;
        const binds = await this.#bind_where(as.types, args.where);
        const rows = this.#sql(query).all(binds);
        this.#capture(as.table, query, binds);
        return sql_default.nest(as, { rows, aliases }, args, unbind_one);
      }
      async update(as, args) {
        assert_default.nonempty(args.set);
        assert_default.dict(args.where);
        const WHERE = this.#where(as.types, args.where);
        const where_binds = await this.#bind_where(as.types, args.where);
        const SET = this.#set(args.set);
        const set_binds = await this.#bind_set(as.types, args.set);
        const query = `UPDATE ${sql_default.quote(as.table)} ${SET} ${WHERE}`;
        return this.#query_run(query, { ...where_binds, ...set_binds });
      }
      async delete(as, args) {
        assert_default.nonempty(args.where);
        const WHERE = this.#where(as.types, args.where);
        const query = `DELETE FROM ${sql_default.quote(as.table)} ${WHERE}`;
        const binds = await this.#bind_where(as.types, args.where);
        return this.#query_run(query, binds);
      }
      close() {
        this.#db.close();
      }
    };
  }
});

// ../../packages/sqlite/lib/public/index.js
var public_default;
var init_public6 = __esm({
  "../../packages/sqlite/lib/public/index.js"() {
    "use strict";
    init_SQLite();
    public_default = (config) => new SQLite(config);
  }
});

// config/db/index.ts
var db_default;
var init_db2 = __esm({
  "config/db/index.ts"() {
    "use strict";
    init_public6();
    db_default = public_default();
  }
});

// primate-db:db-default
var init_db_default = __esm({
  "primate-db:db-default"() {
    "use strict";
    init_db2();
  }
});

// ../../packages/core/lib/private/db/symbol/wrap.js
var wrap_default;
var init_wrap = __esm({
  "../../packages/core/lib/private/db/symbol/wrap.js"() {
    "use strict";
    wrap_default = /* @__PURE__ */ Symbol("@primate/core/db/wrap");
  }
});

// ../../packages/core/lib/private/orm/wrap.js
function wrapStore(name, store, db) {
  return store[wrap_default](name, db);
}
var init_wrap2 = __esm({
  "../../packages/core/lib/private/orm/wrap.js"() {
    "use strict";
    init_wrap();
  }
});

// ../../packages/core/lib/public/orm/wrap.js
var init_wrap3 = __esm({
  "../../packages/core/lib/public/orm/wrap.js"() {
    "use strict";
    init_wrap2();
  }
});

// ../../packages/primate/lib/public/orm/wrap.js
var init_wrap4 = __esm({
  "../../packages/primate/lib/public/orm/wrap.js"() {
    "use strict";
    init_wrap3();
  }
});

// ../../packages/core/lib/private/orm/ForeignKey.js
var ForeignKey;
var init_ForeignKey = __esm({
  "../../packages/core/lib/private/orm/ForeignKey.js"() {
    "use strict";
    ForeignKey = class {
      #type;
      constructor(type) {
        this.#type = type;
      }
      get type() {
        return this.#type;
      }
      get datatype() {
        return this.#type.datatype;
      }
      get name() {
        return this.#type.name;
      }
      get nullable() {
        return this.#type.nullable;
      }
      parse(value) {
        return this.#type.parse(value);
      }
    };
  }
});

// ../../packages/core/lib/private/orm/foreign.js
function foreign(type) {
  return new ForeignKey(type);
}
var init_foreign = __esm({
  "../../packages/core/lib/private/orm/foreign.js"() {
    "use strict";
    init_ForeignKey();
  }
});

// ../../packages/core/lib/private/orm/PrimaryKey.js
var RECOMMENDED_TYPES, PrimaryKey;
var init_PrimaryKey = __esm({
  "../../packages/core/lib/private/orm/PrimaryKey.js"() {
    "use strict";
    init_log();
    RECOMMENDED_TYPES = /* @__PURE__ */ new Set([
      "string",
      "u16",
      "u32",
      "u64",
      "u128"
    ]);
    PrimaryKey = class {
      #type;
      #generate;
      constructor(type, options) {
        this.#type = type;
        this.#generate = options?.generate ?? true;
        const datatype = this.#type.datatype;
        if (!RECOMMENDED_TYPES.has(datatype)) {
          log_default.warn("key.primary: {0} is unusual for a primary key", datatype);
        }
      }
      get type() {
        return this.#type;
      }
      get datatype() {
        return this.#type.datatype;
      }
      get name() {
        return this.#type.name;
      }
      get nullable() {
        return false;
      }
      get generate() {
        return this.#generate;
      }
      parse(value) {
        return this.#type.parse(value);
      }
    };
  }
});

// ../../packages/core/lib/private/orm/primary.js
function primary(type, options) {
  return new PrimaryKey(type, options);
}
var init_primary = __esm({
  "../../packages/core/lib/private/orm/primary.js"() {
    "use strict";
    init_PrimaryKey();
  }
});

// ../../packages/core/lib/private/orm/key.js
var key_default;
var init_key = __esm({
  "../../packages/core/lib/private/orm/key.js"() {
    "use strict";
    init_foreign();
    init_primary();
    key_default = { primary, foreign };
  }
});

// ../../packages/core/lib/public/orm/key.js
var init_key2 = __esm({
  "../../packages/core/lib/public/orm/key.js"() {
    "use strict";
    init_key();
  }
});

// ../../packages/primate/lib/public/orm/key.js
var init_key3 = __esm({
  "../../packages/primate/lib/public/orm/key.js"() {
    "use strict";
    init_key2();
  }
});

// ../../packages/core/lib/private/orm/parse.js
function parse2(input) {
  let pk = null;
  let generate_pk = true;
  const fks = /* @__PURE__ */ new Map();
  const schema3 = {};
  for (const [key, value] of Object.entries(input)) {
    if (is_pk(value)) {
      if (pk !== null)
        throw fail("multiple primary keys: {0}, {1}", pk, key);
      pk = key;
      generate_pk = value.generate;
      schema3[key] = value.type;
    } else if (is_fk(value)) {
      fks.set(key, value);
      schema3[key] = value.type;
    } else {
      schema3[key] = value;
    }
  }
  return { pk, generate_pk, fks, schema: schema3 };
}
var is_pk, is_fk;
var init_parse = __esm({
  "../../packages/core/lib/private/orm/parse.js"() {
    "use strict";
    init_fail();
    init_ForeignKey();
    init_PrimaryKey();
    is_pk = (x) => x instanceof PrimaryKey;
    is_fk = (x) => x instanceof ForeignKey;
  }
});

// ../../packages/pema/lib/private/PartialType.js
var PartialType;
var init_PartialType = __esm({
  "../../packages/pema/lib/private/PartialType.js"() {
    "use strict";
    init_DefaultType();
    init_fail2();
    init_ParsedKey();
    init_ParseError();
    init_join();
    init_next();
    init_VirtualType();
    init_public();
    PartialType = class extends VirtualType {
      #spec;
      constructor(spec) {
        super();
        this.#spec = spec;
      }
      get name() {
        return "partial";
      }
      get schema() {
        return this.#spec;
      }
      default(value) {
        return new DefaultType(this, value);
      }
      parse(x, options = {}) {
        if (!private_default.dict(x))
          throw fail2("object", x, options);
        const input = x;
        const out = {};
        const issues = [];
        for (const key of Object.keys(this.#spec)) {
          if (!(key in input) || input[key] === void 0)
            continue;
          try {
            const parsed = this.#spec[key].parse(input[key], next(key, options));
            if (parsed !== void 0)
              out[key] = parsed;
          } catch (e) {
            if (e instanceof ParseError) {
              if (e.issues && e.issues.length)
                issues.push(...e.issues);
            } else {
              const message = e && typeof e.message === "string" ? e.message : String(e);
              issues.push({
                input: input[key],
                message,
                path: join(options[ParsedKey] ?? "", key)
              });
            }
          }
        }
        if (issues.length > 0)
          throw new ParseError(issues);
        return out;
      }
      toJSON() {
        return { type: this.name, of: { type: "string" } };
      }
    };
  }
});

// ../../packages/pema/lib/private/StoreType.js
var StoreType;
var init_StoreType = __esm({
  "../../packages/pema/lib/private/StoreType.js"() {
    "use strict";
    init_ObjectType();
    init_PartialType();
    init_fail2();
    init_next();
    init_public();
    StoreType = class extends ObjectType {
      #pk;
      constructor(properties, pk = null) {
        super(properties);
        this.#pk = pk;
      }
      get name() {
        return "store";
      }
      parse(x, options = {}) {
        const $options = { ...options };
        if (x !== void 0 && !private_default.dict(x))
          throw fail2("object", x, $options);
        const input = x ?? {};
        const out = {};
        for (const k in this.properties) {
          if (k === this.#pk && !(k in input))
            continue;
          const parsed = this.properties[k].parse(input[k], next(k, $options));
          if (parsed !== void 0)
            out[k] = parsed;
        }
        return out;
      }
      partial() {
        return new PartialType(this.properties);
      }
    };
  }
});

// ../../packages/pema/lib/public/StoreType.js
var init_StoreType2 = __esm({
  "../../packages/pema/lib/public/StoreType.js"() {
    "use strict";
    init_StoreType();
  }
});

// ../../packages/core/lib/private/orm/Store.js
function guard_options(options, allowed) {
  if (options === void 0)
    return;
  const allowed_set = new Set(allowed);
  for (const k of Object.keys(options)) {
    if (!allowed_set.has(k))
      throw error_default.option_unknown(k);
  }
}
function assert_number_value(key, datatype, value) {
  if (!private_default.finite(value))
    throw error_default.where_invalid_value(key, value);
  if (datatype in INT_LIMITS) {
    if (!private_default.safeint(value))
      throw error_default.where_invalid_value(key, value);
    const [min3, max3] = INT_LIMITS[datatype];
    if (value < min3 || value > max3)
      throw error_default.where_invalid_value(key, value);
  }
}
function assert_bigint_value(key, datatype, value) {
  const [min3, max3] = BIGINT_LIMITS[datatype];
  if (value < min3 || value > max3)
    throw error_default.where_invalid_value(key, value);
}
var NUMBER_KEYS, BIGINT_KEYS, is_number_key, is_bigint_key, VALID_IDENTIFIER, INT_LIMITS, BIGINT_LIMITS, registry, STRING_OPS, NUMBER_OPS, BIGINT_OPS, DATE_OPS, Store;
var init_Store = __esm({
  "../../packages/core/lib/private/orm/Store.js"() {
    "use strict";
    init_error2();
    init_wrap();
    init_parse();
    init_public2();
    init_public();
    init_StoreType2();
    NUMBER_KEYS = [
      "u8",
      "u16",
      "u32",
      "i8",
      "i16",
      "i32",
      "f32",
      "f64"
    ];
    BIGINT_KEYS = ["u64", "u128", "i64", "i128"];
    is_number_key = (d) => NUMBER_KEYS.includes(d);
    is_bigint_key = (d) => BIGINT_KEYS.includes(d);
    VALID_IDENTIFIER = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    INT_LIMITS = {
      u8: [0, 255],
      u16: [0, 65535],
      u32: [0, 4294967295],
      i8: [-128, 127],
      i16: [-32768, 32767],
      i32: [-2147483648, 2147483647]
    };
    BIGINT_LIMITS = {
      u64: [0n, (1n << 64n) - 1n],
      i64: [-(1n << 63n), (1n << 63n) - 1n],
      u128: [0n, (1n << 128n) - 1n],
      i128: [-(1n << 127n), (1n << 127n) - 1n]
    };
    registry = /* @__PURE__ */ new Map();
    STRING_OPS = ["$like", "$ilike"];
    NUMBER_OPS = ["$gt", "$gte", "$lt", "$lte", "$ne"];
    BIGINT_OPS = ["$gt", "$gte", "$lt", "$lte", "$ne"];
    DATE_OPS = ["$before", "$after", "$ne"];
    Store = class _Store {
      #schema;
      #type;
      #types;
      #nullables;
      #db;
      #name;
      #pk;
      #generate_pk;
      #fks;
      #relations;
      constructor(input, config = {}) {
        const { pk, generate_pk, fks, schema: schema3 } = parse2(input);
        this.#schema = schema3;
        this.#type = new StoreType(schema3, pk);
        this.#types = Object.fromEntries(Object.entries(schema3).map(([key, value]) => [key, value.datatype]));
        this.#name = config.name;
        this.#db = config.db;
        this.#pk = pk;
        this.#generate_pk = generate_pk;
        this.#fks = fks;
        this.#relations = config.relations ?? {};
        this.#nullables = new Set(Object.entries(this.#type.properties).filter(([, v]) => v.nullable).map(([k]) => k));
        registry.set(input, this);
      }
      static new(input, config = {}) {
        return new _Store(input, config);
      }
      get #as() {
        return {
          table: this.name,
          pk: this.#pk,
          generate_pk: this.#generate_pk,
          types: this.#types
        };
      }
      get collection() {
        const db = this.db;
        const name = this.name;
        const schema3 = this.#schema;
        const as = this.#as;
        return {
          create: () => db.schema.create(as, schema3),
          delete: () => db.schema.delete(name)
        };
      }
      get infer() {
        return void 0;
      }
      get schema() {
        return this.#schema;
      }
      get type() {
        return this.#type;
      }
      [wrap_default](name, db) {
        this.#db ??= db;
        this.#name ??= name;
        return this;
      }
      get db() {
        if (this.#db === void 0)
          throw error_default.db_missing();
        return this.#db;
      }
      get types() {
        return this.#types;
      }
      get name() {
        const name = this.#name;
        if (name === void 0)
          throw error_default.store_name_required();
        if (!VALID_IDENTIFIER.test(name))
          throw error_default.identifier_invalid(name);
        return name;
      }
      #parse_query(query, types) {
        const { where, select, sort, limit } = query;
        if (where !== void 0)
          this.#parse_where(where, types);
        if (select !== void 0)
          this.#parse_select(select, types);
        if (sort !== void 0)
          this.#parse_sort(sort, types);
        if (limit !== void 0 && !private_default.uint(limit))
          throw error_default.limit_invalid();
      }
      #with(options) {
        if (options === void 0)
          return void 0;
        const plan = {};
        for (const [name, query] of Object.entries(options)) {
          if (query === void 0)
            continue;
          const relation = this.#relations[name];
          if (relation === void 0)
            throw error_default.relation_unknown(name);
          const store = registry.get(relation.schema);
          if (store === void 0)
            throw error_default.unregistered_schema();
          const { pk: target_pk } = parse2(relation.schema);
          const target_types = store.types;
          const base = {
            as: {
              table: store.name,
              pk: target_pk,
              types: target_types
            },
            kind: relation.type,
            fk: relation.fk,
            reverse: "reverse" in relation && relation.reverse === true
          };
          if (query === true) {
            plan[name] = { ...base, where: {} };
            continue;
          }
          this.#parse_query(query, target_types);
          plan[name] = {
            ...base,
            where: query.where ?? {},
            fields: query.select ? [...query.select] : void 0,
            sort: query.sort,
            limit: query.limit
          };
        }
        return plan;
      }
      #parse_where(where, types) {
        if (!private_default.dict(where))
          throw error_default.where_invalid();
        for (const [k, value] of Object.entries(where)) {
          if (!VALID_IDENTIFIER.test(k))
            throw error_default.identifier_invalid(k);
          if (!(k in types))
            throw error_default.field_unknown(k, "where");
          if (value === void 0)
            throw error_default.field_undefined(k, "where");
          const datatype = types[k];
          if (value === null)
            continue;
          if (private_default.array(value))
            throw error_default.where_invalid_value(k, value);
          if (private_default.dict(value)) {
            const ops = Object.entries(value);
            if (ops.length === 0)
              throw error_default.operator_empty(k);
            for (const [op, op_val] of ops) {
              if (op_val === void 0)
                throw error_default.field_undefined(k, "where");
              if (datatype === "string" || datatype === "time") {
                if (!STRING_OPS.includes(op))
                  throw error_default.operator_unknown(k, op);
                if (!private_default.string(op_val))
                  throw error_default.wrong_type("string", k, op_val, op);
                continue;
              }
              if (is_number_key(datatype)) {
                if (!NUMBER_OPS.includes(op))
                  throw error_default.operator_unknown(k, op);
                if (!private_default.number(op_val))
                  throw error_default.wrong_type("number", k, op_val, op);
                assert_number_value(k, datatype, op_val);
                continue;
              }
              if (is_bigint_key(datatype)) {
                if (!BIGINT_OPS.includes(op))
                  throw error_default.operator_unknown(k, op);
                if (!private_default.bigint(op_val))
                  throw error_default.wrong_type("bigint", k, op_val, op);
                assert_bigint_value(k, datatype, op_val);
                continue;
              }
              if (datatype === "datetime") {
                if (!DATE_OPS.includes(op))
                  throw error_default.operator_unknown(k, op);
                if (!private_default.date(op_val))
                  throw error_default.wrong_type("date", k, op_val, op);
                continue;
              }
              throw error_default.operator_unknown(k, op);
            }
            continue;
          }
          switch (datatype) {
            case "string":
            case "time":
              if (!private_default.string(value))
                throw error_default.wrong_type("string", k, value);
              continue;
            case "u8":
            case "u16":
            case "u32":
            case "i8":
            case "i16":
            case "i32":
            case "f32":
            case "f64":
              if (!private_default.number(value))
                throw error_default.wrong_type("number", k, value);
              assert_number_value(k, datatype, value);
              continue;
            case "u64":
            case "u128":
            case "i64":
            case "i128":
              if (!private_default.bigint(value))
                throw error_default.wrong_type("bigint", k, value);
              assert_bigint_value(k, datatype, value);
              continue;
            case "datetime":
              if (!private_default.date(value))
                throw error_default.wrong_type("date", k, value);
              continue;
            case "boolean":
              if (!private_default.boolean(value))
                throw error_default.wrong_type("boolean", k, value);
              continue;
            case "url":
              if (!private_default.url(value))
                throw error_default.wrong_type("url", k, value);
              continue;
            case "blob":
              if (!private_default.blob(value))
                throw error_default.wrong_type("blob", k, value);
              continue;
            default:
              throw error_default.where_invalid_value(k, value);
          }
        }
      }
      #parse_select(select, types) {
        if (!private_default.array(select))
          throw error_default.select_invalid();
        if (select.length === 0)
          throw error_default.select_empty();
        const seen = /* @__PURE__ */ new Set();
        for (const [i, v] of select.entries()) {
          if (!private_default.string(v))
            throw error_default.select_invalid_value(i, v);
          if (!VALID_IDENTIFIER.test(v))
            throw error_default.identifier_invalid(v);
          if (!(v in types))
            throw error_default.field_unknown(v, "select");
          if (seen.has(v))
            throw error_default.field_duplicate(v, "select");
          seen.add(v);
        }
      }
      #parse_sort(sort, types) {
        if (!private_default.dict(sort))
          throw error_default.sort_invalid();
        const keys = Object.keys(sort);
        if (keys.length === 0)
          throw error_default.sort_empty();
        for (const [k, direction] of Object.entries(sort)) {
          if (!private_default.string(direction))
            throw error_default.sort_invalid_value(k, direction);
          if (!(k in types))
            throw error_default.field_unknown(k, "sort");
          const l = direction.toLowerCase();
          if (l !== "asc" && l !== "desc")
            throw error_default.sort_invalid_value(k, direction);
        }
      }
      #parse_insert(record) {
        for (const [k, v] of Object.entries(record)) {
          if (!(k in this.#types))
            throw error_default.field_unknown(k, "insert");
          if (v === void 0)
            throw error_default.field_undefined(k, "insert");
          if (v === null)
            throw error_default.null_not_allowed(k);
        }
      }
      /**
       * Count records
       */
      async count(options) {
        this.#parse_query(options ?? {}, this.#types);
        if (private_default.defined(options) && "with" in options)
          throw error_default.count_with_invalid();
        return await this.db.read(this.#as, {
          count: true,
          where: options?.where ?? {}
        });
      }
      /**
       * Check whether a record with the given primary key exists.
       */
      async has(pkv) {
        if (this.#pk === null)
          throw error_default.pk_undefined(this.name);
        return await this.count({ where: { [this.#pk]: pkv } }) === 1;
      }
      async get(pkv, options) {
        const pk = this.#pk;
        if (pk === null)
          throw error_default.pk_undefined(this.name);
        guard_options(options, ["select", "with"]);
        this.#parse_query(options ?? {}, this.#types);
        const $with = this.#with(options?.with);
        const records = await this.db.read(this.#as, {
          where: { [pk]: pkv },
          fields: options?.select ? [...options.select] : void 0,
          with: $with
        });
        assert_default.true(records.length <= 1);
        if (records.length === 0) {
          const err = error_default.record_not_found(pk, pkv);
          err.not_found = true;
          throw err;
        }
        const raw = records[0];
        if (options?.select)
          return raw;
        const base_only = Object.fromEntries(Object.entries(raw).filter(([k]) => k in this.#types));
        const parsed = this.#type.parse(base_only);
        if ($with === void 0)
          return parsed;
        return {
          ...parsed,
          ...Object.fromEntries(Object.keys($with).map((k) => [k, raw[k]]))
        };
      }
      async try(pkv, options) {
        try {
          return await this.get(pkv, options);
        } catch (error3) {
          if (error3?.not_found === true)
            return void 0;
          throw error3;
        }
      }
      /**
       * Insert a single record.
       */
      async insert(record) {
        assert_default.dict(record);
        this.#parse_insert(record);
        const entries = Object.entries(record);
        const to_parse = Object.fromEntries(entries.filter(([k, v]) => !(v === null && this.#nullables.has(k))));
        return this.db.create(this.#as, this.#type.parse(to_parse));
      }
      async update(arg0, options) {
        const by_pk = options !== void 0;
        const set = by_pk ? options.set : arg0.set;
        if (!private_default.dict(set) || private_default.empty(set))
          throw error_default.set_empty();
        const pk = this.#pk;
        if (pk !== null && pk in set)
          throw error_default.pk_immutable(pk);
        for (const [k, v] of Object.entries(set)) {
          if (!(k in this.#types))
            throw error_default.field_unknown(k, "set");
          if (v === null && !this.#nullables.has(k))
            throw error_default.null_not_allowed(k);
        }
        const entries = Object.entries(set);
        const to_parse = Object.fromEntries(entries.filter(([key, value]) => value !== null || !this.#nullables.has(key)));
        const nulls = Object.fromEntries(entries.filter(([key, value]) => value === null && this.#nullables.has(key)));
        const parsed = {
          ...this.#type.partial().parse(to_parse),
          ...nulls
        };
        if (by_pk) {
          return this.#update_1(arg0, parsed);
        }
        const where = arg0.where;
        if (where !== void 0)
          this.#parse_where(where, this.#types);
        return this.#update_n(where ?? {}, parsed);
      }
      async #update_1(pkv, set) {
        const pk = this.#pk;
        if (pk === null)
          throw error_default.pk_undefined(this.name);
        const n2 = await this.db.update(this.#as, {
          set,
          where: { [pk]: pkv }
        });
        assert_default.true(n2 === 1, `${n2} records updated instead of 1`);
      }
      async #update_n(where, set) {
        return await this.db.update(this.#as, {
          set,
          where
        });
      }
      async delete(pkv_or_options) {
        if (private_default.dict(pkv_or_options)) {
          const where = pkv_or_options.where;
          if (!private_default.dict(where) || private_default.empty(where))
            throw error_default.where_required();
          this.#parse_where(where, this.#types);
          return this.#delete_n(where);
        }
        return this.#delete_1(pkv_or_options);
      }
      async #delete_1(pkv) {
        const pk = this.#pk;
        if (pk === null)
          throw error_default.pk_undefined(this.name);
        const n2 = await this.db.delete(this.#as, { where: { [pk]: pkv } });
        assert_default.true(n2 === 1, `${n2} records deleted instead of 1`);
      }
      async #delete_n(where) {
        return await this.db.delete(this.#as, { where });
      }
      /**
       * Find matching records
       *
       */
      async find(options) {
        guard_options(options, ["where", "select", "sort", "limit", "with"]);
        this.#parse_query(options ?? {}, this.#types);
        const result2 = await this.db.read(this.#as, {
          where: options?.where ?? {},
          fields: options?.select ? [...options.select] : void 0,
          limit: options?.limit,
          sort: options?.sort,
          with: this.#with(options?.with)
        });
        return result2;
      }
      toJSON() {
        return this.#type.toJSON();
      }
      extend(extensor) {
        const extensions = extensor(this);
        const keys = Object.keys(extensions);
        for (const k of keys)
          if (k in this)
            throw error_default.key_duplicate(k);
        Object.assign(this, extensions);
        return this;
      }
    };
  }
});

// ../../packages/core/lib/public/orm/Store.js
var init_Store2 = __esm({
  "../../packages/core/lib/public/orm/Store.js"() {
    "use strict";
    init_Store();
  }
});

// ../../packages/primate/lib/public/orm/store.js
var store_default;
var init_store = __esm({
  "../../packages/primate/lib/public/orm/store.js"() {
    "use strict";
    init_Store2();
    store_default = Store.new;
  }
});

// primate-store-raw:/home/pip/projects/primate-run/primate/apps/db/stores/User.ts
var User_default;
var init_User = __esm({
  "primate-store-raw:/home/pip/projects/primate-run/primate/apps/db/stores/User.ts"() {
    "use strict";
    init_public3();
    init_key3();
    init_store();
    User_default = store_default({
      id: key_default.primary(private_default3.u32),
      name: private_default3.string,
      age: private_default3.u8.range(0, 120),
      lastname: private_default3.string.optional()
    });
  }
});

// primate-store-wrapper:User
var User_default2;
var init_User2 = __esm({
  "primate-store-wrapper:User"() {
    "use strict";
    init_db_default();
    init_wrap4();
    init_User();
    User_default2 = wrapStore("User", User_default, db_default);
  }
});

// stores/User.ts
var init_User3 = __esm({
  "stores/User.ts"() {
    "use strict";
    init_User2();
  }
});

// ../../packages/core/lib/private/request/verbs.js
var verbs_default;
var init_verbs = __esm({
  "../../packages/core/lib/private/request/verbs.js"() {
    "use strict";
    verbs_default = [
      "get",
      "post",
      "put",
      "delete",
      "head",
      "connect",
      "options",
      "trace",
      "patch"
    ];
  }
});

// ../../packages/core/lib/private/route.js
var route_default2;
var init_route = __esm({
  "../../packages/core/lib/private/route.js"() {
    "use strict";
    init_verbs();
    init_router();
    route_default2 = Object.fromEntries(verbs_default.map((verb) => [verb, (handler, options) => {
      router_default.add(verb, handler, options);
    }]));
  }
});

// ../../packages/core/lib/public/route.js
var init_route2 = __esm({
  "../../packages/core/lib/public/route.js"() {
    "use strict";
    init_route();
  }
});

// ../../packages/primate/lib/public/route.js
var route_default3;
var init_route3 = __esm({
  "../../packages/primate/lib/public/route.js"() {
    "use strict";
    init_route2();
    route_default3 = route_default2;
  }
});

// primate-route:count
var count_exports = {};
var init_count = __esm({
  "primate-route:count"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("count");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      await User_default2.insert({ age: 30, name: "Donald" });
      await User_default2.insert({ age: 40, name: "Ryan" });
      const count = await User_default2.count();
      return { count };
    });
    router_default.pop();
  }
});

// primate-route:delete
var delete_exports = {};
var init_delete = __esm({
  "primate-route:delete"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("delete");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      const { id } = await User_default2.insert({ age: 30, name: "Donald" });
      await User_default2.delete(id);
      return "deleted";
    });
    router_default.pop();
  }
});

// primate-route:find
var find_exports = {};
var init_find = __esm({
  "primate-route:find"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("find");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      await User_default2.insert({ age: 30, name: "Donald" });
      return User_default2.find({
        where: { age: 30 },
        select: ["age", "name"]
      });
    });
    router_default.pop();
  }
});

// primate-route:get
var get_exports = {};
var init_get = __esm({
  "primate-route:get"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("get");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      const { id } = await User_default2.insert({ age: 30, name: "Donald" });
      const { id: _id, ...donald } = await User_default2.get(id);
      return donald;
    });
    router_default.pop();
  }
});

// primate-route:has
var has_exports = {};
var init_has = __esm({
  "primate-route:has"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("has");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      const donald = await User_default2.insert({ age: 30, name: "Donald" });
      const has = await User_default2.has(donald.id);
      return { has };
    });
    router_default.pop();
  }
});

// primate-route:index
var index_exports = {};
var init_index = __esm({
  "primate-route:index"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("index");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      return { count: await User_default2.count() };
    });
    router_default.pop();
  }
});

// primate-route:insert
var insert_exports = {};
var init_insert = __esm({
  "primate-route:insert"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("insert");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      const { id: _id, ...donald } = await User_default2.insert({
        age: 30,
        name: "Donald"
      });
      return donald;
    });
    router_default.pop();
  }
});

// primate-store-raw:/home/pip/projects/primate-run/primate/apps/db/stores/ExtendedUser.ts
var ExtendedUser_default;
var init_ExtendedUser = __esm({
  "primate-store-raw:/home/pip/projects/primate-run/primate/apps/db/stores/ExtendedUser.ts"() {
    "use strict";
    init_User3();
    ExtendedUser_default = User_default2.extend((User) => {
      return {
        findByAge(age) {
          return User.find({ age });
        }
      };
    });
  }
});

// primate-store-wrapper:ExtendedUser
var ExtendedUser_default2;
var init_ExtendedUser2 = __esm({
  "primate-store-wrapper:ExtendedUser"() {
    "use strict";
    init_db_default();
    init_wrap4();
    init_ExtendedUser();
    ExtendedUser_default2 = wrapStore("ExtendedUser", ExtendedUser_default, db_default);
  }
});

// primate-stores:stores-virtual
var stores, stores_virtual_default;
var init_stores_virtual = __esm({
  "primate-stores:stores-virtual"() {
    "use strict";
    init_ExtendedUser2();
    init_User2();
    stores = {};
    stores["ExtendedUser"] = ExtendedUser_default2;
    stores["User"] = User_default2;
    stores_virtual_default = stores;
  }
});

// primate-route:programmatic
var programmatic_exports = {};
var init_programmatic = __esm({
  "primate-route:programmatic"() {
    "use strict";
    init_router3();
    init_public2();
    init_stores_virtual();
    init_route3();
    router_default.push("programmatic");
    route_default3.get(() => {
      return (app2) => {
        const key = Object.keys(stores_virtual_default).filter((k) => k === "User")[0];
        assert_default.defined(key);
        return new Response(key);
      };
    });
    router_default.pop();
  }
});

// primate-route:test
var test_exports = {};
var init_test = __esm({
  "primate-route:test"() {
    "use strict";
    init_router3();
    init_route3();
    router_default.push("test");
    route_default3.get(() => {
      return "hi";
    });
    router_default.pop();
  }
});

// primate-route:try
var try_exports = {};
var init_try = __esm({
  "primate-route:try"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("try");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      const { id } = await User_default2.insert({ age: 30, name: "Donald" });
      const { id: _id, ...donald } = await User_default2.try(id);
      return donald;
    });
    router_default.pop();
  }
});

// primate-route:update
var update_exports = {};
var init_update = __esm({
  "primate-route:update"() {
    "use strict";
    init_router3();
    init_User3();
    init_route3();
    router_default.push("update");
    route_default3.get(async () => {
      await User_default2.collection.delete();
      await User_default2.collection.create();
      const { id } = await User_default2.insert({ age: 30, name: "Donald" });
      await User_default2.update(id, { set: { age: 35 } });
      const { id: _id, ...updated } = await User_default2.get(id);
      return updated;
    });
    router_default.pop();
  }
});

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/empty.js
init_public2();
var empty_default = (dict2) => {
  assert_default.dict(dict2);
  return Object.keys(dict2).length === 0;
};

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/entries.js
init_public2();
var Entries = class _Entries {
  #entries;
  constructor(entries) {
    assert_default.array(entries);
    this.#entries = entries;
  }
  filter(predicate) {
    assert_default.function(predicate);
    return new _Entries(this.#entries.filter(predicate));
  }
  map(mapper) {
    assert_default.function(mapper);
    return new _Entries(this.#entries.map(mapper));
  }
  keymap(mapper) {
    assert_default.function(mapper);
    return new _Entries(this.#entries.map((entry) => [mapper(entry), entry[1]]));
  }
  valmap(mapper) {
    assert_default.function(mapper);
    return new _Entries(this.#entries.map((entry) => [entry[0], mapper(entry)]));
  }
  get() {
    return Object.fromEntries(this.#entries);
  }
  [Symbol.iterator]() {
    return this.#entries.values();
  }
};
var entries_default = (record) => new Entries(Object.entries(record));

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/exclude.js
init_public2();
var exclude_default = (dict2, excludes) => {
  assert_default.dict(dict2);
  assert_default.array(excludes);
  return entries_default(dict2).filter((entry) => !excludes.includes(entry[0])).get();
};

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/get.js
var get_default = (dict2, path) => path.split(".").reduce((subobject, key) => subobject[key], dict2);

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/inflate.js
init_public2();
var BY = ".";
function inflate(path, initial, by) {
  assert_default.string(path);
  assert_default.maybe.dict(initial);
  assert_default.maybe.string(by);
  return path.split(by ?? BY).reduceRight((depathed, key) => ({ [key]: depathed }), initial ?? {});
}
var inflate_default = inflate;

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/nullproto.js
function hasDepth(o) {
  const keys = [
    ...Object.getOwnPropertyNames(o),
    ...Object.getOwnPropertySymbols(o)
  ];
  for (const key of keys) {
    const descriptor = Object.getOwnPropertyDescriptor(o, key);
    if (descriptor === void 0 || !("value" in descriptor))
      continue;
    const value = descriptor.value;
    if (value !== null && typeof value === "object") {
      return true;
    }
  }
  return false;
}
function nullproto(init, options) {
  const hasInit = init !== void 0;
  if (options?.frozen && hasInit && hasDepth(init)) {
    throw new TypeError("nullproto: cannot freeze a non-flat object");
  }
  const o = /* @__PURE__ */ Object.create(null);
  hasInit && Object.defineProperties(o, Object.getOwnPropertyDescriptors(init));
  return options?.frozen ? Object.freeze(o) : o;
}

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/override.js
init_public2();
init_public();
var recurse = (t, u) => (private_default.dict(t) && private_default.dict(u) ? override(t, u) : u) ?? t;
var override = (base, over) => {
  assert_default.dict(base);
  assert_default.dict(over);
  return Object.keys(over).reduce((overridden, key) => ({
    ...overridden,
    [key]: recurse(base[key], over[key])
  }), base);
};
var override_default = override;

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/toQueryString.js
function toQueryString(dict2) {
  return Object.entries(dict2).map(([key, value]) => `${key}=${value}`).join("&");
}

// ../../node_modules/.pnpm/@rcompat+dict@0.3.1/node_modules/@rcompat/dict/lib/private/index.js
var private_default2 = {
  empty: empty_default,
  exclude: exclude_default,
  get: get_default,
  inflate: inflate_default,
  nullproto,
  override: override_default,
  toQueryString
};

// ../../packages/core/lib/private/app/Facade.js
var s_attach = /* @__PURE__ */ Symbol("attach");
var s_config = /* @__PURE__ */ Symbol("config");
var AppFacade = class {
  #config;
  #app;
  constructor(config) {
    this.#config = config;
  }
  [s_attach](app2) {
    this.#app = app2;
  }
  get [s_config]() {
    return this.#config;
  }
  config(path) {
    return private_default2.get(this.#config, path);
  }
  get #with() {
    if (!this.#app)
      throw new Error("ServeApp not bound yet (used too early)");
    return this.#app;
  }
  view(name) {
    return this.#with.loadView(name);
  }
  get root() {
    return this.#with.root;
  }
};

// ../../packages/core/lib/private/App.js
init_fail();

// ../../packages/core/lib/private/location.js
var location_default = {
  // default rendering template
  app_html: "app.html",
  // client build
  client: "client",
  // config
  config: "config",
  // error rendering template
  error_html: "error.html",
  // HTML pages
  pages: "pages",
  // hierarchical routes
  routes: "routes",
  // static assets
  static: "static",
  // stores
  stores: "stores",
  // locales
  locales: "locales",
  // views
  views: "views"
};

// ../../packages/core/lib/private/reducer.js
async function reducer(modules, dragon, hook) {
  if (modules.length === 0) {
    return dragon;
  }
  const [head, ...tail] = modules;
  const method = head[hook].bind(head);
  return await method(dragon, (next2) => tail.length === 0 ? Promise.resolve(next2) : reducer(tail, next2, hook));
}

// ../../packages/core/lib/private/target/Manager.js
init_fail();
var web = {
  name: "web",
  runner: () => {
  },
  target: "web"
};
var TargetManager = class {
  #name = "web";
  #targets = [web];
  #app;
  constructor(app2) {
    this.#app = app2;
  }
  get name() {
    return this.#name;
  }
  get target() {
    return this.get().target;
  }
  has(name) {
    return this.#targets.find((target) => target.name === name) !== void 0;
  }
  get() {
    return this.#targets.find((target) => target.name === this.#name);
  }
  set(name) {
    if (!this.has(name)) {
      let message = "no target {0}, available targets {1}";
      if (this.#targets.length === 1) {
        message += "\n   - add {2} for more targets";
      }
      const targets = this.#targets.map((p) => p.name).join(", ");
      throw fail(message, name, targets, "@primate/native");
    }
    this.#name = name;
  }
  add(target) {
    if (this.has(target.name)) {
      throw fail("cannot add target {0} twice", target.name);
    }
    this.#targets.push(target);
  }
  async run() {
    await this.get().runner(this.#app);
  }
};

// ../../packages/core/lib/private/App.js
init_public3();
var doubled = (set) => set.find((part, i, array2) => array2.filter((_2, j) => i !== j).includes(part)) ?? "";
var App = class {
  #path;
  #root;
  #config;
  #modules;
  #kv = /* @__PURE__ */ new Map();
  #mode;
  #target;
  #target_name;
  constructor(root, config, flags) {
    if (Object.values(location_default).includes(flags.dir)) {
      throw fail("cannot build to {0} - reserved directory", flags.dir);
    }
    this.#root = root;
    this.#config = config;
    this.#modules = config.modules?.flat(10) ?? [];
    this.#path = entries_default({
      ...location_default,
      build: flags.dir
    }).valmap(([, path]) => root.join(path)).get();
    this.#mode = flags.mode;
    this.#target = new TargetManager(this);
    this.#target_name = flags.target;
  }
  async init() {
    const names = this.#modules.map(({ name }) => name);
    if (new Set(names).size !== this.#modules.length) {
      throw fail("module {0} loaded twice", doubled(names));
    }
    const app2 = await reducer(this.#modules, this, "init");
    this.#target.set(this.#target_name);
    return app2;
  }
  get location() {
    return { ...location_default };
  }
  get target() {
    return this.#target;
  }
  get root() {
    return this.#root;
  }
  get path() {
    return this.#path;
  }
  get mode() {
    return this.#mode;
  }
  get modules() {
    return [...this.#modules];
  }
  get livereload() {
    const { host = this.config("http.host"), port = private_default3.uint.port().parse(this.config("http.port") - 1) } = this.config("livereload");
    return { host, port };
  }
  get(key) {
    return this.#kv.get(key);
  }
  set(key, value) {
    this.#kv.set(key, value);
  }
  config(path) {
    return private_default2.get(this.#config, path);
  }
  runpath(...directories) {
    return this.#path.build.join(...directories);
  }
};

// ../../packages/core/lib/private/serve/App.js
init_fail();

// ../../packages/core/lib/private/hash.js
var encoder = new TextEncoder();
async function hash(data, algorithm = "sha-384") {
  const bytes = await crypto.subtle.digest(algorithm, encoder.encode(data));
  const prefix = algorithm.replace("-", (_2) => "");
  return `${prefix}-${btoa(String.fromCharCode(...new Uint8Array(bytes)))}`;
}
var hash_default = hash;

// ../../packages/core/lib/private/i18n/Module.js
init_AppError();

// ../../packages/core/lib/private/bye.js
init_color2();
init_print2();
var bye_default = () => print_default(color_default.dim(color_default.yellow("~~ bye\n")));

// ../../packages/core/lib/private/cookie.js
init_public2();
init_public3();
var Schema = private_default3({
  httpOnly: private_default3.boolean.default(true),
  path: private_default3.string.default("/"),
  sameSite: private_default3.union("Lax", "None", "Strict"),
  secure: private_default3.boolean,
  maxAge: private_default3.number.optional()
  // seconds
});
function cookie(name, value, options) {
  assert_default.string(name);
  assert_default.string(value);
  const parsed = Schema.parse(options);
  const parts = [`${name}=${value}`];
  parts.push(`Path=${parsed.path}`);
  parts.push(`SameSite=${parsed.sameSite}`);
  if (parsed.maxAge !== void 0)
    parts.push(`Max-Age=${parsed.maxAge}`);
  if (parsed.httpOnly)
    parts.push("HttpOnly");
  if (parsed.secure && parsed.sameSite !== "None")
    parts.push("Secure");
  return parts.join("; ");
}

// ../../packages/core/lib/private/i18n/constant/COOKIE_NAME.js
var COOKIE_NAME_default = "primate-i18n";

// ../../packages/core/lib/private/i18n/constant/PERSIST_HEADER.js
var PERSIST_HEADER_default = "Primate-I18N-Locale";

// ../../packages/core/lib/private/i18n/storage.js
init_public4();

// ../../node_modules/.pnpm/@rcompat+kv@0.6.0/node_modules/@rcompat/kv/lib/private/cache.js
init_public2();
var Cache = class {
  #entries = {};
  get(key, init) {
    assert_default.symbol(key);
    assert_default.maybe.function(init);
    if (this.#entries[key] === void 0 && init !== void 0) {
      this.#entries[key] = init();
    }
    return this.#entries[key];
  }
};
var cache_default = new Cache();

// ../../packages/core/lib/private/i18n/storage.js
var s = /* @__PURE__ */ Symbol("primate/i18n");
var storage_default = () => cache_default.get(s, () => new private_default4.async.Context());

// ../../packages/core/lib/private/i18n/Module.js
init_log();

// ../../packages/core/lib/private/Module.js
var Module = class {
  init(app2, next2) {
    return next2(app2);
  }
  build(app2, next2) {
    return next2(app2);
  }
  serve(app2, next2) {
    return next2(app2);
  }
  handle(request, next2) {
    return next2(request);
  }
  route(request, next2) {
    return next2(request);
  }
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/Status.js
var Status_default = {
  ACCEPTED: 202,
  ALREADY_REPORTED: 208,
  BAD_GATEWAY: 502,
  // 4xx client error
  BAD_REQUEST: 400,
  CONFLICT: 409,
  // 1xx information
  CONTINUE: 100,
  CREATED: 201,
  EARLY_HINTS: 103,
  EXPECTATION_FAILED: 417,
  FAILED_DEPENDENCY: 424,
  FORBIDDEN: 403,
  FOUND: 302,
  GATEWAY_TIMEOUT: 504,
  GONE: 410,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  IM_A_TEAPOT: 418,
  IM_USED: 226,
  INSUFFICIENT_STORAGE: 507,
  // 5xx server error
  INTERNAL_SERVER_ERROR: 500,
  LENGTH_REQUIRED: 411,
  LOCKED: 423,
  LOOP_DETECTED: 508,
  METHOD_NOT_ALLOWED: 405,
  MISDIRECTED_REQUEST: 421,
  MOVED_PERMANENTLY: 301,
  // 3xx redirect
  MULTIPLE_CHOICES: 300,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  NO_CONTENT: 204,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NOT_ACCEPTABLE: 406,
  NOT_EXTENDED: 510,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501,
  NOT_MODIFIED: 304,
  // 2xx success
  OK: 200,
  PARTIAL_CONTENT: 206,
  PAYLOAD_TOO_LARGE: 413,
  PAYMENT_REQUIRED: 402,
  PERMANENT_REDIRECT: 308,
  PRECONDITION_FAILED: 412,
  PRECONDITION_REQUIRED: 428,
  PROCESS: 102,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  RANGE_NOT_SATISFIABLE: 416,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  REQUEST_TIMEOUT: 408,
  RESET_CONTENT: 205,
  SEE_OTHER: 303,
  SERVICE_UNAVAILABLE: 503,
  SWITCH_PROXY: 306,
  SWITCHING_PROTOCOLS: 101,
  TEMPORARY_REDIRECT: 307,
  TOO_EARLY: 425,
  TOO_MANY_REQUESTS: 429,
  UNAUTHORIZED: 401,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  UNPROCESSABLE_ENTITY: 422,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UPGRADE_REQUIRED: 426,
  URI_TOO_LONG: 414,
  USE_PROXY: 305,
  VARIANT_ALSO_NEGOTIATES: 506
};

// ../../packages/core/lib/private/i18n/Module.js
function toLowerCase(string) {
  return string.toLowerCase();
}
function pick(client, server) {
  const lower = server.map(toLowerCase);
  for (const raw of client.map(toLowerCase)) {
    const locale = raw.trim();
    if (!locale)
      continue;
    const exact = lower.indexOf(locale);
    if (exact !== -1)
      return server[exact];
    const base = locale.split("-")[0];
    const index = lower.findIndex((s3) => s3 === base || s3.startsWith(`${base}-`));
    if (index !== -1)
      return server[index];
  }
  return void 0;
}
function fail5(message, ...params) {
  const error3 = new AppError(`{0} ${message}`, "[i18n]", ...params);
  log_default.error(error3);
  bye_default();
  process.exit(1);
}
var I18NModule = class extends Module {
  name = "builtin/i18n";
  #secure = false;
  #defaultLocale;
  #locales;
  #persist = "cookie";
  #currency;
  constructor(config) {
    super();
    const defaultLocale = config.defaultLocale;
    const locales = Object.keys(config.locales);
    if (locales.length < 1)
      fail5("must have at least 1 locale");
    if (defaultLocale === void 0)
      fail5("must have a default locale");
    if (!locales.includes(defaultLocale))
      fail5("default locale not in locales");
    this.#defaultLocale = defaultLocale;
    this.#locales = locales;
    this.#persist = config.persist ?? "cookie";
    this.#currency = config.currency ?? "USD";
  }
  #configured(locale) {
    return this.#locales.includes(locale);
  }
  serve(app2, next2) {
    this.#secure = app2.secure;
    return next2(app2);
  }
  async handle(request, next2) {
    const requested = request.headers.try(PERSIST_HEADER_default);
    if (requested === void 0) {
      const locale = request.cookies.try(COOKIE_NAME_default);
      if (locale === void 0)
        return next2(request);
      return await new Promise((resolve3, reject) => {
        storage_default().run({ locale }, async () => {
          try {
            resolve3(await next2(request));
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    if (this.#persist !== "cookie")
      return new Response(null, {
        headers: {
          "Content-Length": String(0)
        },
        status: Status_default.NO_CONTENT
      });
    if (!this.#configured(requested))
      return new Response(null, {
        headers: {
          "Content-Length": String(0)
        },
        status: Status_default.NO_CONTENT
      });
    const header = cookie(COOKIE_NAME_default, requested, {
      secure: this.#secure,
      path: "/",
      sameSite: "Strict"
    });
    return new Response(null, {
      headers: {
        "Set-Cookie": header,
        "Content-Length": String(0)
      },
      status: Status_default.NO_CONTENT
    });
  }
  route(request, next2) {
    const server_locales = this.#locales;
    const accept_language = request.headers.try("Accept-Language") ?? "";
    const client_locales = accept_language.split(",").map((s3) => s3.split(";")[0].trim()).filter(Boolean);
    const mode = this.#persist;
    const cookie_locale = mode === "cookie" ? request.cookies.try(COOKIE_NAME_default) : void 0;
    const locale = cookie_locale ?? pick(client_locales, server_locales) ?? this.#defaultLocale;
    return next2(request.set("i18n", {
      currency: this.#currency,
      mode,
      locale,
      locales: server_locales
    }));
  }
};

// ../../packages/core/lib/private/serve/App.js
init_log();

// ../../packages/core/lib/private/request/RequestBag.js
init_fail();
init_public2();

// ../../node_modules/.pnpm/@rcompat+fn@0.3.0/node_modules/@rcompat/fn/lib/private/identity.js
var identity_default = (t) => t;

// ../../node_modules/.pnpm/@rcompat+fn@0.3.0/node_modules/@rcompat/fn/lib/private/async/map.js
var map_default = (array2, mapper) => Promise.all(array2.map(mapper));

// ../../node_modules/.pnpm/@rcompat+fn@0.3.0/node_modules/@rcompat/fn/lib/private/async.js
var async_default2 = {
  map: map_default
};

// ../../node_modules/.pnpm/@rcompat+fn@0.3.0/node_modules/@rcompat/fn/lib/private/defined.js
var defined_default = (t) => t !== void 0;

// ../../node_modules/.pnpm/@rcompat+fn@0.3.0/node_modules/@rcompat/fn/lib/private/index.js
var private_default5 = {
  async: async_default2,
  defined: defined_default,
  identity: identity_default
};

// ../../packages/core/lib/private/request/RequestBag.js
var RequestBag = class {
  #contents;
  #name;
  #normalize;
  #raw;
  /**
   * Create a new RequestBag.
   *
   * @param input - Initial key-value entries.
   * @param name - Human-readable bag name used in error messages.
   * @param options - Optional `normalize` function and `raw` string.
   */
  constructor(input, name, options) {
    assert_default.dict(input);
    assert_default.string(name);
    assert_default.maybe.dict(options);
    assert_default.maybe.function(options?.normalize);
    assert_default.maybe.string(options?.raw);
    this.#name = name;
    this.#normalize = options?.normalize ?? private_default5.identity;
    this.#raw = options?.raw ?? "";
    const contents = /* @__PURE__ */ Object.create(null);
    for (const key of Object.keys(input)) {
      contents[this.#normalize(key)] = input[key];
    }
    this.#contents = contents;
  }
  #hasOwn(k) {
    return Object.hasOwn(this.#contents, k);
  }
  /**
   * The untouched, original source string for this bag. For example,
   * - `"?a=1&b=2"` for a query bag,
   * - the Cookie header for cookies,
   * - the pathname for request path.
   */
  get raw() {
    return this.#raw;
  }
  /**
   * @returns the number of elements in the bag.
   */
  get size() {
    return Object.keys(this.#contents).length;
  }
  /**
   * Iterate over `[key, value]` entries in the bag.
   * Keys are post-normalization; entries with `undefined` values are skipped.
   */
  *[Symbol.iterator]() {
    for (const k of Object.keys(this.#contents)) {
      const v = this.#contents[k];
      if (v !== void 0)
        yield [k, v];
    }
  }
  /**
   * Get a value by key.
   *
   * @param key - Key to look up (pre-normalization).
   * @returns The defined value.
   * @throws If the key is absent or its value is `undefined`.
   */
  get(key) {
    const k = this.#normalize(key);
    if (this.#hasOwn(k)) {
      const v = this.#contents[k];
      if (v !== void 0)
        return v;
    }
    throw fail("{0} has no key {1}", this.#name, key);
  }
  /**
   * Try to get a value by key.
   *
   * @param key - Key to look up (pre-normalization).
   * @returns The value, or `undefined` if absent/undefined.
   */
  try(key) {
    const k = this.#normalize(key);
    return this.#hasOwn(k) ? this.#contents[k] : void 0;
  }
  /**
   * Whether the bag contains a defined value for the key.
   *
   * @param key - Key to test (pre-normalization).
   * @returns `true` if present with a defined value; otherwise `false`.
   */
  has(key) {
    const k = this.#normalize(key);
    return this.#hasOwn(k) && this.#contents[k] !== void 0;
  }
  /**
   * Parse the entire bag with a schema.
   *
   * The schema receives the bag's normalized contents.
   *
   * @typeParam T - Parsed/validated result type.
   * @param schema - Object exposing `parse(input)`.
   * @returns The parsed value.
   * @throws Whatever the schema throws.
   */
  parse(schema3) {
    return schema3.parse(this.#contents);
  }
  /** Returns {@link raw}. Useful in template strings. */
  toString() {
    return this.raw;
  }
  /**
   * JSON view of the normalized bag.
   *
   * @returns A shallow null-prototype clone of the bag's contents.
   */
  toJSON() {
    return Object.assign(/* @__PURE__ */ Object.create(null), this.#contents);
  }
};

// ../../packages/core/lib/private/request/RequestBody.js
init_fail();

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/mime/extensions.js
var extensions_default = {
  "7z": "application/x-7z-compressed",
  atom: "application/atom+xml",
  bin: "application/octet-stream",
  bz2: "application/x-bzip2",
  gz: "application/gzip",
  json: "application/json",
  jsonld: "application/ld+json",
  map: "application/json",
  pdf: "application/pdf",
  rar: "application/x-rar-compressed",
  rss: "application/rss+xml",
  tar: "application/x-tar",
  wasm: "application/wasm",
  webmanifest: "application/manifest+json",
  xml: "application/xml",
  yaml: "application/yaml",
  yml: "application/yaml",
  zip: "application/zip",
  mp3: "audio/mpeg",
  ogg: "audio/ogg",
  wav: "audio/wav",
  weba: "audio/webm",
  otf: "font/otf",
  ttf: "font/ttf",
  woff: "font/woff",
  woff2: "font/woff2",
  apng: "image/apng",
  avif: "image/avif",
  bmp: "image/bmp",
  gif: "image/gif",
  ico: "image/x-icon",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  webp: "image/webp",
  css: "text/css",
  csv: "text/csv",
  htm: "text/html",
  html: "text/html",
  js: "text/javascript",
  md: "text/markdown",
  markdown: "text/markdown",
  mjs: "text/javascript",
  rtf: "text/rtf",
  text: "text/plain",
  tsv: "text/tab-separated-values",
  txt: "text/plain",
  vtt: "text/vtt",
  mov: "video/quicktime",
  mp4: "video/mp4",
  ogv: "video/ogg",
  ts: "video/mp2t",
  webm: "video/webm"
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/mime/resolve.js
var isExtension = (extension) => typeof extension === "string" && extension in extensions_default;
var regex = /\.(?<extension>[a-z0-9]+)$/i;
var DEFAULT_EXTENSION = extensions_default.bin;
var match = (filename) => filename.match(regex)?.groups?.extension;
function resolve(filename) {
  const matched = match(filename.toLowerCase());
  return isExtension(matched) ? extensions_default[matched] : DEFAULT_EXTENSION;
}

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/mime/types.js
var types_default = {
  APPLICATION_GZIP: "application/gzip",
  APPLICATION_JSON: "application/json",
  APPLICATION_LD_JSON: "application/ld+json",
  APPLICATION_MANIFEST_JSON: "application/manifest+json",
  APPLICATION_OCTET_STREAM: "application/octet-stream",
  APPLICATION_PDF: "application/pdf",
  APPLICATION_RSS_XML: "application/rss+xml",
  APPLICATION_WASM: "application/wasm",
  APPLICATION_X_7Z_COMPRESSED: "application/x-7z-compressed",
  APPLICATION_X_BZIP2: "application/x-bzip2",
  APPLICATION_X_RAR_COMPRESSED: "application/x-rar-compressed",
  APPLICATION_X_TAR: "application/x-tar",
  APPLICATION_X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",
  APPLICATION_XML: "application/xml",
  APPLICATION_YAML: "application/yaml",
  APPLICATION_ZIP: "application/zip",
  AUDIO_MPEG: "audio/mpeg",
  AUDIO_OGG: "audio/ogg",
  AUDIO_WAV: "audio/wav",
  AUDIO_WEBM: "audio/webm",
  FONT_OTF: "font/otf",
  FONT_TTF: "font/ttf",
  FONT_WOFF: "font/woff",
  FONT_WOFF2: "font/woff2",
  IMAGE_APNG: "image/apng",
  IMAGE_AVIF: "image/avif",
  IMAGE_BMP: "image/bmp",
  IMAGE_GIF: "image/gif",
  IMAGE_JPEG: "image/jpeg",
  IMAGE_PNG: "image/png",
  IMAGE_SVG_XML: "image/svg+xml",
  IMAGE_TIFF: "image/tiff",
  IMAGE_WEBP: "image/webp",
  IMAGE_X_ICON: "image/x-icon",
  MULTIPART_FORM_DATA: "multipart/form-data",
  TEXT_CSS: "text/css",
  TEXT_CSV: "text/csv",
  TEXT_EVENT_STREAM: "text/event-stream",
  TEXT_HTML: "text/html",
  TEXT_JAVASCRIPT: "text/javascript",
  TEXT_MARKDOWN: "text/markdown",
  TEXT_PLAIN: "text/plain",
  TEXT_RTF: "text/rtf",
  TEXT_TAB_SEPARATED_VALUES: "text/tab-separated-values",
  TEXT_VTT: "text/vtt",
  VIDEO_MP2T: "video/mp2t",
  VIDEO_MP4: "video/mp4",
  VIDEO_OGG: "video/ogg",
  VIDEO_QUICKTIME: "video/quicktime",
  VIDEO_WEBM: "video/webm"
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/mime.js
var mime_default = {
  extension: extensions_default,
  resolve,
  ...types_default
};

// ../../packages/core/lib/private/request/RequestBody.js
init_public();
async function anyform(request) {
  const form = /* @__PURE__ */ Object.create(null);
  const files = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of (await request.formData()).entries()) {
    if (private_default.string(value)) {
      form[key] = value;
    } else {
      files[key] = value;
    }
  }
  return { form, files };
}
var RequestBody = class _RequestBody {
  #parsed;
  #files;
  static async parse(request, url) {
    const raw = request.headers.get("content-type") ?? "none";
    const type = raw.split(";")[0].trim().toLowerCase();
    const path = url.pathname;
    try {
      switch (type) {
        case mime_default.APPLICATION_OCTET_STREAM:
          return new _RequestBody({ type: "binary", value: await request.blob() });
        case mime_default.APPLICATION_X_WWW_FORM_URLENCODED:
        case mime_default.MULTIPART_FORM_DATA: {
          const { form, files } = await anyform(request);
          return new _RequestBody({ type: "form", value: form }, files);
        }
        case mime_default.APPLICATION_JSON:
          return new _RequestBody({ type: "json", value: await request.json() });
        case mime_default.TEXT_PLAIN:
          return new _RequestBody({ type: "text", value: await request.text() });
        case "none":
          return _RequestBody.none();
        default:
          throw fail("{0}: unsupported content type {1}", path, type);
      }
    } catch (cause) {
      const message = "{0}: unparseable content type {1} - cause:\n[2]";
      throw fail(message, path, type, cause);
    }
  }
  static none() {
    return new _RequestBody({ type: "none", value: null });
  }
  constructor(parsed, files = {}) {
    this.#parsed = parsed;
    this.#files = files;
  }
  get type() {
    return this.#parsed.type;
  }
  #value() {
    return this.#parsed.value;
  }
  #throw(expected) {
    throw fail("request body: expected {0}, got {1}", expected, this.type);
  }
  json(schema3) {
    if (this.type !== "json") {
      this.#throw("JSON");
    }
    const value = this.#value();
    return schema3 ? schema3.parse(value) : value;
  }
  form(schema3) {
    if (this.type !== "form") {
      this.#throw("form");
    }
    const value = this.#value();
    return schema3 ? schema3.parse(value) : value;
  }
  files() {
    if (this.type !== "form") {
      this.#throw("form");
    }
    return this.#files;
  }
  text() {
    if (this.type !== "text") {
      this.#throw("plaintext");
    }
    return this.#value();
  }
  binary() {
    if (this.type !== "binary") {
      this.#throw("binary");
    }
    return this.#value();
  }
  none() {
    if (this.type !== "none") {
      this.#throw("none");
    }
    return null;
  }
};

// ../../packages/core/lib/private/request/RequestContext.js
var RequestContext = class {
  #data = /* @__PURE__ */ new Map();
  set(key, value) {
    this.#data.set(key, value);
  }
  update(key, fn) {
    const prev = this.try(key);
    this.set(key, fn(prev));
  }
  has(key) {
    return this.#data.has(key);
  }
  try(key) {
    return this.#data.get(key);
  }
  get(key) {
    if (!this.#data.has(key))
      throw new Error(`Missing context key: ${key}`);
    return this.#data.get(key);
  }
  delete(key) {
    this.#data.delete(key);
  }
  toJSON() {
    const out = /* @__PURE__ */ Object.create(null);
    for (const [k, v] of this.#data)
      out[k] = v;
    return out;
  }
};

// ../../packages/core/lib/private/request/sContext.js
var sContext_default = /* @__PURE__ */ Symbol("primate.request.context");

// ../../packages/core/lib/private/request/parse.js
init_public();
function decode(s3) {
  try {
    return decodeURIComponent(s3);
  } catch {
    return s3;
  }
}
function normalize2(k) {
  return k.toLowerCase();
}
function header_bag(request) {
  const headers = Object.fromEntries([...request.headers].map(([k, v]) => [k.toLowerCase(), v]));
  return new RequestBag(headers, "headers", {
    normalize: normalize2
  });
}
function cookie_bag(request) {
  const header = request.headers.get("cookie");
  const entries = Object.fromEntries(header ? header.split(";").map((s3) => s3.trim()).filter(Boolean).map((s3) => {
    const i = s3.indexOf("=");
    const key = i === -1 ? s3 : s3.slice(0, i);
    const value = i === -1 ? "" : s3.slice(i + 1);
    return [decode(key), decode(value)];
  }) : []);
  return new RequestBag(entries, "cookies", {
    raw: header ?? ""
  });
}
function query_bag(url) {
  return new RequestBag(Object.fromEntries(url.searchParams), "query", {
    normalize: normalize2,
    raw: url.search
  });
}
function path_bag(url) {
  return new RequestBag(/* @__PURE__ */ Object.create(null), "path", { raw: url.pathname });
}
function parse(request) {
  const url = new URL(request.url);
  const facade = {
    body: RequestBody.none(),
    cookies: cookie_bag(request),
    forward(to11, headers) {
      return fetch(to11, {
        body: request.body,
        duplex: "half",
        headers: {
          ...headers,
          "Content-Type": request.headers.get("Content-Type")
        },
        method: request.method
      });
    },
    headers: header_bag(request),
    original: request,
    path: path_bag(url),
    query: query_bag(url),
    target: url.pathname + url.search,
    url,
    has(key) {
      return this[sContext_default].has(key);
    },
    try(key) {
      return this[sContext_default].try(key);
    },
    get(key) {
      return this[sContext_default].get(key);
    },
    set(key, value) {
      if (private_default.function(value)) {
        this[sContext_default].update(key, value);
      } else {
        this[sContext_default].set(key, value);
      }
      return this;
    },
    delete(key) {
      this[sContext_default].delete(key);
      return this;
    },
    toJSON() {
      return {
        context: this[sContext_default].toJSON(),
        cookies: this.cookies.toJSON(),
        headers: this.headers.toJSON(),
        path: this.path.toJSON(),
        query: this.query.toJSON(),
        url: this.url
      };
    },
    [sContext_default]: new RequestContext()
  };
  return facade;
}
var parse_default = parse;

// ../../packages/core/lib/private/serve/App.js
init_router();

// ../../packages/core/lib/private/serve/module/Dev.js
init_log();
init_color2();
function pass(address, request) {
  return fetch(address, {
    body: request.body,
    duplex: "half",
    headers: request.headers,
    method: request.method
  });
}
var DevModule = class extends Module {
  name = "builtin/dev";
  #paths;
  #reload;
  constructor(app2) {
    super();
    const assets = app2.assets.map((asset) => asset.src);
    this.#paths = ["/esbuild"].concat(assets);
    const { host, port } = app2.livereload;
    this.#reload = `http://${host}:${port}`;
    log_default.print(`\u21BB live reload ${color_default.dim(this.#reload)}
`);
  }
  handle(request, next2) {
    const { pathname } = new URL(request.url);
    return this.#paths.includes(pathname) ? pass(`${this.#reload}${pathname}`, request.original) : next2(request);
  }
};

// ../../packages/core/lib/private/request/route.js
init_fail();
init_log();

// ../../packages/core/lib/private/response/error.js
function error2(options) {
  return (app2) => app2.view({
    body: options?.body ?? "Not Found",
    page: options?.page ?? location_default.error_html,
    status: options?.status ?? Status_default.NOT_FOUND
  });
}

// ../../packages/core/lib/private/response.js
var response_default = (mime, mapper) => (body, init) => ((app2) => app2.respond(mapper(body), app2.media(mime, init)));

// ../../packages/core/lib/private/response/json.js
var json_default = response_default(mime_default.APPLICATION_JSON, JSON.stringify);

// ../../packages/core/lib/private/response/respond.js
init_fail();

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/Streamable.js
var STREAMABLE = /* @__PURE__ */ Symbol.for("std:Streamable");
function isStream(x) {
  return x != null && typeof x.getReader === "function";
}
function isBlob2(x) {
  return x != null && typeof x.arrayBuffer === "function" && typeof x.stream === "function";
}
var Streamable = class _Streamable {
  constructor() {
    Object.defineProperty(this, STREAMABLE, { value: true });
  }
  static [Symbol.hasInstance](x) {
    return typeof x === "object" && x !== null && Object.hasOwn(x, STREAMABLE);
  }
  static is(x) {
    return _Streamable[Symbol.hasInstance](x) || isStream(x) || isBlob2(x);
  }
  static named(x) {
    return _Streamable.is(x) && typeof x.name === "string";
  }
  static stream(x) {
    if (_Streamable[Symbol.hasInstance](x) || isBlob2(x)) {
      return x.stream();
    }
    if (isStream(x)) {
      return x;
    }
    throw new TypeError("Value is not Blob | ReadableStream | Streamable");
  }
};

// ../../packages/core/lib/private/response/binary.js
init_public();
var encodeRFC5987 = (s3) => encodeURIComponent(s3).replace(/['()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
function toContentDisposition(filename) {
  const clean = filename.replace(/[\r\n]/g, "").slice(0, 255);
  const ascii = clean.replace(/[^\x20-\x7E]/g, "_").replace(/["\\]/g, "_");
  const utf8 = encodeRFC5987(clean);
  return `attachment; filename="${ascii}"; filename*=UTF-8''${utf8}`;
}
function binary(source, init) {
  return (app2) => {
    const { headers, ...rest } = app2.media(mime_default.APPLICATION_OCTET_STREAM, init);
    const name = Streamable.named(source) ? source.name : "default.bin";
    const out = new Headers(headers);
    out.set("Content-Disposition", toContentDisposition(name));
    if (private_default.blob(source)) {
      source.type && out.set("Content-Type", source.type);
      out.set("Content-Length", String(source.size));
    }
    return app2.respond(Streamable.stream(source), {
      ...rest,
      headers: Object.fromEntries(out.entries())
    });
  };
}

// ../../packages/core/lib/private/response/redirect.js
var redirect_default = (location, status) => (
  // no body
  (app2) => app2.respond(null, {
    headers: {
      "Content-Length": String(0),
      Location: location,
      "Cache-Control": "no-cache"
    },
    status: status ?? Status_default.FOUND
  })
);

// ../../packages/core/lib/private/response/text.js
var text_default = response_default(mime_default.TEXT_PLAIN, private_default5.identity);

// ../../packages/core/lib/private/response/respond.js
init_public();
function invalid_body(body) {
  throw fail("invalid body {0} returned from route", body);
}
function match2(m) {
  return m;
}
var guesses = match2([
  [private_default.null, () => () => new Response(null, { status: Status_default.NO_CONTENT })],
  [private_default.url, (value) => redirect_default(value.toString())],
  [Streamable.is, (value) => binary(value)],
  [private_default.response, (value) => (_2) => value],
  [private_default.dict, json_default],
  [private_default.array, json_default],
  [private_default.string, text_default]
]);
var guess = (value) => guesses.find(([_if]) => _if(value))?.[1](value) ?? invalid_body(`${value}`);
var respond_default = (result2) => typeof result2 === "function" ? result2 : guess(result2);

// ../../packages/pema/lib/public/ParseError.js
init_ParseError();

// ../../packages/core/lib/private/request/route.js
var result = (request, response) => ({ request, response });
function wrap_hook(h) {
  return async (request, next2) => {
    let downstream;
    let called_next = false;
    const response = await h(request, async (r) => {
      if (called_next)
        throw fail("hook called next() more than once");
      called_next = true;
      downstream = await next2(r);
      return downstream.response;
    });
    if (response === void 0) {
      if (called_next) {
        throw fail("hook called next() but did not return a result; did you forget `return next(request)`?");
      }
      throw fail("hook must return a response-like value or return next(request)");
    }
    return downstream !== void 0 ? result(downstream.request, response) : result(request, response);
  };
}
async function run(hooks, request) {
  const [first, ...rest] = hooks;
  if (first === void 0)
    return result(request, new Response());
  if (rest.length === 0)
    return first(request, async (r) => result(r, new Response()));
  return first(request, (r) => run(rest, r));
}
async function route_default(app2, partial_request) {
  let errorRoute;
  try {
    const route11 = await app2.route(partial_request);
    if (route11 === void 0) {
      return error2()(app2, {}, partial_request);
    }
    const { errors: errors2, hooks, layouts, handler } = route11;
    errorRoute = errors2[0];
    const module_hooks = app2.modules.map((m) => wrap_hook(m.route.bind(m)));
    const route_hooks = hooks.map(wrap_hook);
    const last = async (req, _next) => result(req, await handler(req));
    const { request, response } = await run([...module_hooks, ...route_hooks, last], route11.request);
    return await respond_default(response)(app2, {
      layouts: await Promise.all(layouts.map((layout) => layout(request)))
    }, request);
  } catch (error3) {
    const request = partial_request;
    if (error3 instanceof ParseError) {
      return json_default(error3.toJSON(), { status: Status_default.BAD_REQUEST })(app2);
    }
    log_default.error(error3);
    try {
      return respond_default(await errorRoute(request))(app2, {}, request);
    } catch {
      return error2()(app2, {}, request);
    }
  }
}

// ../../packages/core/lib/private/serve/module/Handle.js
var HandleModule = class extends Module {
  name = "builtin/handle";
  #app;
  constructor(app2) {
    super();
    this.#app = app2;
  }
  async handle(request) {
    return await this.#app.serve_assets(request.url.pathname) ?? route_default(this.#app, request);
  }
};

// ../../packages/core/lib/private/session/SessionModule.js
init_fail();

// ../../packages/core/lib/private/session/k-serialize.js
var k_serialize_default = /* @__PURE__ */ Symbol("primate.session.introspect");

// ../../packages/core/lib/private/session/SessionHandle.js
init_public2();
init_public();
var SessionHandle = class {
  #id;
  #data;
  #schema;
  #dirty = false;
  constructor(id, data, schema3) {
    assert_default.maybe.uuid(id);
    assert_default.maybe.dict(data);
    assert_default.maybe.object(schema3);
    assert_default.maybe.function(schema3?.parse);
    assert_default.true(id === void 0 === (data === void 0), "both `id` and `data` must be defined or undefined");
    this.#id = id;
    this.#data = data;
    this.#schema = schema3?.parse ? schema3 : { parse: (x) => x };
  }
  get exists() {
    return this.#id !== void 0;
  }
  get id() {
    return this.#id;
  }
  get() {
    if (!this.exists)
      throw new Error("session does not exist");
    return this.#data;
  }
  try() {
    return this.exists ? this.#data : void 0;
  }
  create(initial) {
    if (this.exists)
      return;
    const parsed = this.#schema.parse(initial ?? {});
    this.#id = crypto.randomUUID();
    this.#data = parsed;
    this.#dirty = true;
  }
  set(next2) {
    if (!this.exists)
      throw new Error("cannot set() on non-existent session");
    const previous = this.#data;
    const candidate = private_default.function(next2) ? next2(previous) : next2;
    this.#data = this.#schema.parse(candidate);
    this.#dirty = true;
  }
  destroy() {
    if (!this.exists)
      return;
    this.#id = void 0;
    this.#data = void 0;
    this.#dirty = true;
  }
  [k_serialize_default]() {
    return {
      data: this.#data,
      dirty: this.#dirty,
      exists: this.exists,
      id: this.#id
    };
  }
};

// ../../packages/core/lib/private/session/storage.js
init_public4();
var s2 = /* @__PURE__ */ Symbol("primate.session");
var storage_default2 = () => cache_default.get(s2, () => new private_default4.async.Context());

// ../../packages/core/lib/private/session/SessionModule.js
init_public3();
var cookie2 = (name, value, options) => {
  const parts = [`${name}=${value}`];
  parts.push(`Path=${options.path}`);
  parts.push(`SameSite=${options.sameSite}`);
  if (options.maxAge !== void 0)
    parts.push(`Max-Age=${options.maxAge}`);
  if (options.httpOnly)
    parts.push("HttpOnly");
  if (options.secure)
    parts.push("Secure");
  return parts.join("; ");
};
var SessionModule = class extends Module {
  name = "builtin/session";
  #store;
  #secure;
  #config;
  constructor(secure, config) {
    super();
    this.#secure = secure;
    this.#config = config;
    this.#store = config.store;
    const props = this.#store.type.properties;
    if (!("session_id" in props)) {
      throw fail("Session store must have a session_id field");
    }
    try {
      props.session_id.parse(crypto.randomUUID());
    } catch {
      throw fail("Session store session_id must be a string type");
    }
  }
  async serve(app2, next2) {
    await this.#store.collection.create();
    return next2(app2);
  }
  async handle(request, next2) {
    const { name, ...config } = this.#config.cookie;
    const sid = request.cookies.try(name);
    const existing = sid !== void 0 ? await this.#store.find({ where: { session_id: sid }, limit: 1 }) : [];
    const exists = existing.length > 0;
    let data = void 0;
    let db_id = void 0;
    if (exists) {
      const record = existing[0];
      const { id: _id, session_id: _sid, ...rest } = record;
      data = rest;
      db_id = _id;
    }
    const session_type = private_default3.omit(this.#store.type, "id", "session_id");
    const session = new SessionHandle(sid, data, session_type);
    const response = await new Promise((resolve3, reject) => {
      storage_default2().run(session, async () => {
        try {
          resolve3(await next2(request));
        } catch (e) {
          reject(e);
        }
      });
    });
    const snap = session[k_serialize_default]();
    if (sid === void 0 && !snap.exists)
      return response;
    const options = {
      httpOnly: !!config.httpOnly,
      path: config.path,
      sameSite: config.sameSite,
      secure: this.#secure
    };
    if (!exists) {
      if (!snap.exists) {
        if (sid !== void 0) {
          response.headers.append("set-cookie", cookie2(name, "", {
            ...options,
            maxAge: 0
          }));
        }
        return response;
      }
      await this.#store.insert({ session_id: snap.id, ...snap.data });
      response.headers.append("set-cookie", cookie2(name, snap.id, options));
      return response;
    }
    if (snap.exists && snap.id === sid && !snap.dirty)
      return response;
    if (!snap.exists) {
      await this.#store.delete(db_id);
      response.headers.append("set-cookie", cookie2(name, "", {
        ...options,
        maxAge: 0
      }));
      return response;
    }
    if (snap.id !== sid) {
      await this.#store.delete(db_id);
      await this.#store.insert({ session_id: snap.id, ...snap.data });
      response.headers.append("set-cookie", cookie2(name, snap.id, options));
      return response;
    }
    await this.#store.update(db_id, { set: snap.data });
    return response;
  }
};

// ../../packages/core/lib/private/tags.js
var attribute = (attributes) => private_default2.empty(attributes) ? "" : " ".concat(Object.entries(attributes).map(([key, value]) => `${key}="${value}"`).join(" "));
var tag = (name, { attributes = {}, close = true, code = "" }) => `<${name}${attribute(attributes)}${close ? `>${code}</${name}>` : "/>"}`;
var nctag = (name, properties) => tag(name, { ...properties, close: false });
var tags_default = {
  font({ as = "font", crossorigin = "true", href, rel = "preload", type }) {
    return nctag("link", { attributes: { as, crossorigin, href, rel, type } });
  },
  // inline: <script type integrity>...</script>
  // outline: <script type integrity src></script>
  script({ code, id, inline, integrity, src, type }) {
    return inline ? id === void 0 ? tag("script", { attributes: { integrity, type }, code }) : tag("script", { attributes: { id, integrity, type }, code }) : tag("script", { attributes: { integrity, src, type } });
  },
  // inline: <style>...</style>
  // outline: <link rel="stylesheet" href />
  style({ code, href, inline }) {
    return inline ? tag("style", { code }) : nctag("link", { attributes: { href, rel: "stylesheet" } });
  }
};

// ../../packages/core/lib/private/serve/App.js
init_public2();

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/native/node.js
import fs from "node:fs";
import { readFile, stat, writeFile } from "node:fs/promises";
import { Readable as Readable2 } from "node:stream";
var text = (path) => readFile(path, { encoding: "utf8" });
var node = {
  async arrayBuffer(path) {
    const u8 = await readFile(path);
    return u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength);
  },
  async json(path) {
    return JSON.parse(await text(path));
  },
  stream(path) {
    const options = { flags: "r" };
    return Readable2.toWeb(fs.createReadStream(path, options));
  },
  text(path) {
    return text(path);
  },
  async size(path) {
    return (await stat(path)).size;
  },
  async write(path, input) {
    let out;
    if (input instanceof ReadableStream) {
      out = await new Response(input).bytes();
    } else if (input instanceof Blob || input instanceof Response) {
      out = await input.bytes();
    } else if (input instanceof ArrayBuffer) {
      out = new Uint8Array(input);
    } else {
      out = input;
    }
    await writeFile(path, out);
  }
};
var node_default2 = node;

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/parse.js
import { fileURLToPath } from "node:url";
var parse_default2 = (p) => p.startsWith("file://") ? fileURLToPath(p) : p;

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/separator.js
import { sep } from "node:path";
var separator_default = sep;

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/FileRef.js
init_public2();

// ../../node_modules/.pnpm/@rcompat+crypto@0.14.0/node_modules/@rcompat/crypto/lib/private/hash.js
var encoder2 = new TextEncoder();
async function hash2(data, algorithm = "SHA-256") {
  const to_digest = typeof data === "string" ? encoder2.encode(data) : data;
  const digest = await crypto.subtle.digest(algorithm, to_digest);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/FileRef.js
import { copyFile, lstat, mkdir, readdir, realpath, rm } from "node:fs/promises";
import { basename, dirname, extname, join as join2 } from "node:path";
import { pathToFileURL as to_url } from "node:url";
var ensure_parents = async (file) => {
  const { directory } = file;
  if (!await directory.exists())
    await directory.create();
};
var { decodeURIComponent: decode2 } = globalThis;
var assert_boundary = (directory) => {
  assert_default.instance(directory, FileRef);
  if (dirname(directory.path) === directory.path) {
    throw new Error("stopping at filesystem root");
  }
};
var as_string = (path) => typeof path === "string" ? path : path.path;
var FileRef = class _FileRef extends Streamable {
  #path;
  constructor(path) {
    super();
    assert_default.defined(path);
    this.#path = parse_default2(as_string(path));
  }
  get Name() {
    return "FileRef";
  }
  #stats() {
    return lstat(this.#path);
  }
  [Symbol.replace](string, replacement) {
    return string.replace(
      this.toString(),
      replacement
      /* TS bug*/
    );
  }
  toString() {
    return this.path;
  }
  webpath() {
    return this.path.replaceAll(separator_default, "/");
  }
  async import(name) {
    assert_default.maybe.string(name);
    const imported = await import(`${to_url(this.path)}`);
    return name === void 0 ? imported : imported[name];
  }
  join(...paths) {
    if (paths.length === 0)
      return this;
    const [first, ...rest] = paths;
    const path = join2(this.path, as_string(first));
    const file = new _FileRef(path);
    return paths.length === 1 ? file : file.join(...rest);
  }
  async kind() {
    try {
      const stats = await this.#stats();
      if (stats.isFile())
        return "file";
      if (stats.isDirectory())
        return "directory";
      if (stats.isSymbolicLink())
        return "link";
      throw new Error("unknown kind");
    } catch (error3) {
      if (error3?.code === "ENOENT")
        return null;
      throw error3;
    }
  }
  async list(options) {
    const k = await this.kind();
    if (k !== "directory")
      return [];
    const { recursive = false, filter } = options ?? {};
    const match3 = filter === void 0 ? void 0 : filter instanceof RegExp ? (info) => filter.test(info.path) : filter;
    const names = await readdir(this.#path);
    let results = [];
    for (const name of names) {
      const ref = this.join(name);
      const kind = await ref.kind();
      if (kind === null)
        continue;
      if (recursive && kind === "directory") {
        results = results.concat(await ref.list(options));
      }
      const info = {
        path: ref.path,
        name,
        extension: ref.extension,
        fullExtension: ref.fullExtension,
        kind
      };
      if (!match3 || await match3(info))
        results.push(ref);
    }
    return results;
  }
  files(options) {
    const user = options?.filter;
    return this.list({
      ...options,
      filter: (e) => e.kind === "file" && (user === void 0 ? true : user instanceof RegExp ? user.test(e.path) : user(e))
    });
  }
  dirs(options) {
    const user = options?.filter;
    return this.list({
      ...options,
      filter: (e) => e.kind === "directory" && (user === void 0 ? true : user instanceof RegExp ? user.test(e.path) : user(e))
    });
  }
  async modified() {
    return Math.round((await this.#stats()).mtimeMs);
  }
  async exists() {
    try {
      await this.#stats();
      return true;
    } catch (error3) {
      if (error3?.code === "ENOENT")
        return false;
      throw error3;
    }
  }
  bare(append) {
    const bare = this.directory.join(this.base);
    return append === void 0 ? bare : bare.append(append);
  }
  append(suffix) {
    return new _FileRef(`${this.path}${suffix}`);
  }
  get path() {
    return this.#path;
  }
  get directory() {
    return new _FileRef(dirname(this.path));
  }
  get name() {
    return basename(this.path);
  }
  get base() {
    return basename(this.path, this.extension);
  }
  get core() {
    return basename(this.path, this.fullExtension);
  }
  get extension() {
    return extname(this.path);
  }
  get fullExtension() {
    const n2 = this.name;
    const i = n2.indexOf(".");
    return i === -1 ? "" : n2.slice(i);
  }
  up(levels2) {
    if (levels2 === 0) {
      return this;
    }
    const { directory } = this;
    assert_boundary(directory);
    return directory.up(levels2 - 1);
  }
  arrayBuffer() {
    return node_default2.arrayBuffer(this.path);
  }
  async bytes() {
    return new Uint8Array(await this.arrayBuffer());
  }
  text() {
    return node_default2.text(this.path);
  }
  json() {
    return node_default2.json(this.path);
  }
  size() {
    return node_default2.size(this.path);
  }
  async copy(to11, filter) {
    await ensure_parents(to11);
    assert_default.maybe.function(filter);
    const path = this.#path;
    const kind = await this.kind();
    if (kind === null)
      throw new Error(`cannot copy missing path: ${this.path}`);
    if (kind === "link") {
      await new _FileRef(await realpath(path)).copy(to11, filter);
      return;
    }
    if (kind === "directory") {
      await to11.remove();
      await to11.create();
      const children = await this.list();
      await Promise.all(children.map(async (child) => {
        const child_kind = await child.kind();
        if (child_kind === null)
          return;
        if (child_kind === "directory") {
          await child.copy(to11.join(child.name), filter);
          return;
        }
        if (filter !== void 0) {
          const info = {
            path: child.path,
            name: child.name,
            extension: child.extension,
            fullExtension: child.fullExtension,
            kind: child_kind
          };
          if (!await filter(info))
            return;
        }
        await child.copy(to11.join(child.name), filter);
      }));
      return;
    }
    await copyFile(path, to11.path);
  }
  async create(options) {
    assert_default.maybe.dict(options);
    assert_default.maybe.boolean(options?.recursive);
    await mkdir(this.#path, { recursive: options?.recursive ?? true });
  }
  async remove(options) {
    assert_default.maybe.dict(options);
    assert_default.maybe.boolean(options?.fail);
    assert_default.maybe.boolean(options?.recursive);
    if (!options?.fail && !await this.exists())
      return;
    await rm(this.#path, { recursive: options?.recursive ?? true });
  }
  async write(input) {
    await ensure_parents(this);
    const to_write = typeof input === "string" && !input.endsWith("\n") ? input + "\n" : input;
    await node_default2.write(this.path, to_write);
  }
  writeJSON(input) {
    return this.write(JSON.stringify(input, null, 2));
  }
  async discover(filename) {
    const file = new _FileRef(this.path).join(filename);
    if (await file.exists()) {
      return this;
    }
    const { directory } = this;
    assert_boundary(directory);
    return directory.discover(filename);
  }
  debase(base, suffix = "") {
    const { href: pathed } = to_url(this.path);
    const { href: based } = to_url(as_string(base));
    const path = decode2(pathed).replace(`${decode2(based)}${suffix}`, (_2) => "");
    return new _FileRef(path);
  }
  stream() {
    return node_default2.stream(this.path);
  }
  async hash(algorithm = "SHA-256") {
    return await hash2(await this.arrayBuffer(), algorithm);
  }
};

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/index.js
init_public2();
import { resolve as resolve2 } from "node:path";
function fs_resolve(path) {
  assert_default.maybe.string(path);
  return new FileRef(path === void 0 ? resolve2() : resolve2(parse_default2(path)));
}
function project_root(relative_to) {
  assert_default.maybe.string(relative_to);
  return fs_resolve(relative_to).discover("package.json");
}
var fs2 = {
  FileRef,
  ref: (path) => new FileRef(path),
  cwd: () => fs_resolve(),
  resolve: fs_resolve,
  list: (path, opts) => new FileRef(path).list(opts),
  files: (path, opts) => new FileRef(path).files(opts),
  dirs: (path, opts) => new FileRef(path).dirs(opts),
  exists: (path) => new FileRef(path).exists(),
  arrayBuffer: (path) => new FileRef(path).arrayBuffer(),
  bytes: (path) => new FileRef(path).bytes(),
  text: (path) => new FileRef(path).text(),
  json: (path) => new FileRef(path).json(),
  stream: (path) => new FileRef(path).stream(),
  write: (path, val) => new FileRef(path).write(val),
  writeJSON: (path, val) => new FileRef(path).writeJSON(val),
  size: (path) => new FileRef(path).size(),
  webpath: (path) => new FileRef(path).webpath(),
  join: (path, ...paths) => new FileRef(path).join(...paths),
  discover: (path, filename) => new FileRef(path).discover(filename),
  kind: (path) => new FileRef(path).kind(),
  project: {
    root: project_root,
    package: async (from11) => {
      assert_default.maybe.string(from11);
      return (await project_root(from11)).join("package.json");
    }
  }
};
var private_default6 = fs2;

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/router/errors.js
var errors_exports = {};
__export(errors_exports, {
  DoubleParam: () => DoubleParam,
  DoubleRoute: () => DoubleRoute,
  OptionalRoute: () => OptionalRoute,
  RestRoute: () => RestRoute
});
var BaseError = class extends Error {
  route;
  constructor(message, route11) {
    super(message);
    this.route = route11;
  }
};
var DoubleRoute = class extends BaseError {
  constructor(route11) {
    super("double route", route11);
  }
};
var OptionalRoute = class extends BaseError {
  constructor(route11) {
    super("optional routes must be leaves", route11);
  }
};
var RestRoute = class extends BaseError {
  constructor(route11) {
    super("rest routes must be leaves", route11);
  }
};
var DoubleParam = class extends BaseError {
  constructor(param) {
    super("double param", param);
  }
};

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/router/Node.js
var ROOT = /* @__PURE__ */ Symbol("root");
var SPECIAL = /* @__PURE__ */ Symbol("special");
var STATIC = /* @__PURE__ */ Symbol("static");
var CATCH = /* @__PURE__ */ Symbol("catch");
var OPTIONAL_CATCH = /* @__PURE__ */ Symbol("optional-catch");
var REST = /* @__PURE__ */ Symbol("rest");
var OPTIONAL_REST = /* @__PURE__ */ Symbol("optional-rest");
var type_to_string = (symbol) => {
  if (symbol === ROOT) {
    return "root";
  }
  if (symbol === SPECIAL) {
    return "special";
  }
  if (symbol === STATIC) {
    return "static";
  }
  if (symbol === CATCH) {
    return "catch";
  }
  if (symbol === OPTIONAL_CATCH) {
    return "optional-catch";
  }
  if (symbol === REST) {
    return "rest";
  }
  if (symbol === OPTIONAL_REST) {
    return "optional-rest";
  }
};
var to_type = (segment) => {
  if (segment.startsWith("+")) {
    return SPECIAL;
  }
  if (segment.startsWith("[[...")) {
    return OPTIONAL_REST;
  }
  if (segment.startsWith("[...")) {
    return REST;
  }
  if (segment.startsWith("[[")) {
    return OPTIONAL_CATCH;
  }
  if (segment.startsWith("[")) {
    return CATCH;
  }
  if (segment === "$") {
    return ROOT;
  }
  return STATIC;
};
function decodeParam(s3) {
  try {
    return decodeURIComponent(s3);
  } catch {
    return s3;
  }
}
var Node = class _Node {
  #parent;
  #segment;
  #type;
  #path;
  static #config;
  #statics = [];
  #dynamics = [];
  #specials = [];
  static set config(config) {
    this.#config = { ...config };
  }
  static get config() {
    return this.#config;
  }
  constructor(parent, segment, path) {
    this.#parent = parent;
    this.#type = to_type(segment);
    this.#segment = segment.startsWith("[[") ? segment.slice(1, -1) : segment;
    this.#path = path;
  }
  get parent() {
    return this.#parent;
  }
  get segment() {
    return this.#segment;
  }
  get path() {
    return this.#path;
  }
  get type() {
    return this.#type;
  }
  get dynamic() {
    return this.catch || this.rest;
  }
  get catch() {
    return this.type === CATCH || this.type === OPTIONAL_CATCH;
  }
  get rest() {
    return this.type === REST || this.type === OPTIONAL_REST;
  }
  get optional() {
    return this.type === OPTIONAL_CATCH || this.type === OPTIONAL_REST;
  }
  get leaf() {
    return this.#statics.length + this.#dynamics.length + this.#specials.length === 0;
  }
  get has_path() {
    return this.path !== void 0;
  }
  get #children() {
    return [...this.#statics, ...this.#dynamics, ...this.#specials];
  }
  check(predicate) {
    predicate(this);
    for (const child of this.#children) {
      child.check(predicate);
    }
  }
  statics() {
    return this.#statics;
  }
  optionals() {
    return this.#dynamics.filter(({ type }) => type === OPTIONAL_CATCH || type === OPTIONAL_REST);
  }
  dynamics() {
    return this.#dynamics;
  }
  specials() {
    return this.#specials;
  }
  // collects depth values for all nodes that satisfy a predicate, returning
  // the highest max
  max(predicate, depth = 1) {
    let max3 = predicate(this) ? depth : 1;
    for (const child of this.#children) {
      const child_max = child.max(predicate, depth + 1);
      if (child_max > max3) {
        max3 = child_max;
      }
    }
    return max3;
  }
  collect(collected = {}, recursed = /* @__PURE__ */ new Set()) {
    const { parent } = this;
    if (parent === null) {
      return collected;
    }
    for (const $special of parent.specials()) {
      const name = $special.#segment.slice(1);
      const { recursive } = _Node.#config.specials?.[name] ?? {};
      if (!recursive && recursed.has(name)) {
        continue;
      }
      const arr = collected[name] === void 0 ? [] : collected[name];
      collected[name] = arr.concat($special.#path);
      if (!recursive) {
        recursed.add(name);
      }
    }
    return parent.collect(collected, recursed);
  }
  filed(segment, path) {
    const child = new _Node(this, segment, path);
    if (child.type === SPECIAL) {
      this.#specials.push(child);
    } else if (child.dynamic) {
      this.#dynamics.push(child);
    } else {
      this.#statics.push(child);
    }
  }
  interim(segment) {
    const target_array = to_type(segment) === STATIC ? this.#statics : this.#dynamics;
    for (const child of target_array) {
      if (child.#segment === segment) {
        return child;
      }
    }
    const interim = new _Node(this, segment);
    if (interim.type === STATIC) {
      this.#statics.push(interim);
    } else {
      this.#dynamics.push(interim);
    }
    return interim;
  }
  next(parts, params) {
    if (parts.length === 0)
      return void 0;
    const [first] = parts;
    const static_child = this.#statics.find((child) => child.#segment === first);
    if (static_child) {
      return static_child.match(parts, params);
    }
    for (const child of this.#dynamics) {
      const matched = child.match(parts, params);
      if (matched !== void 0) {
        return matched;
      }
    }
    return void 0;
  }
  return(parts, params, path = this.#path) {
    const segment = this.#segment;
    const specials = this.collect();
    if (parts.length > 0 && this.#segment === parts[0]) {
      return { params, path, segment, specials };
    }
    if (parts.length === 0) {
      if (this.dynamic && !this.optional) {
        return void 0;
      }
      return { params, path, segment, specials };
    }
    const next2 = { ...params };
    if (this.catch) {
      const key = this.#segment.slice(1, -1);
      const captured = parts[0];
      if (captured === void 0 && !this.optional) {
        return void 0;
      }
      if (captured !== void 0) {
        next2[key] = decodeParam(captured);
      }
      return { params: next2, path, segment, specials };
    }
    if (this.rest) {
      const name = this.#segment.slice(4, -1);
      const raw = parts.join("/");
      if (raw === "" && !this.optional) {
        return void 0;
      }
      if (raw !== "") {
        next2[name] = decodeParam(raw);
      }
      return { params: next2, path, segment, specials };
    }
  }
  #match_anchor(parts, params) {
    if (this.#path !== void 0) {
      return this.return(parts, params);
    }
    const optional = this.dynamics().find((d) => d.optional);
    if (optional) {
      return optional.return([], params, optional.#path);
    }
  }
  #match_recurse(parts, params) {
    if (parts.length === 0) {
      return void 0;
    }
    const [first, ...rest] = parts;
    if (this.#segment === first) {
      return this.next(rest, params);
    }
    if (this.catch) {
      const key = this.#segment.slice(1, -1);
      const next_params = { ...params, [key]: decodeParam(first) };
      return this.next(rest, next_params);
    }
    if (this.rest) {
      const name = this.#segment.slice(4, -1);
      const next_params = { ...params, [name]: parts.join("/") };
      return this.return([first, ...rest], next_params);
    }
  }
  match(parts, params = {}) {
    if (this.#type === ROOT) {
      if (parts.length === 0) {
        const optional = this.dynamics().find((d) => d.optional);
        if (optional) {
          return optional.return([], params, optional.#path);
        }
        return void 0;
      }
      return this.next(parts, params);
    }
    if (parts.length <= 1) {
      return this.#match_anchor(parts, params);
    }
    return this.#match_recurse(parts, params);
  }
  flatten() {
    const children = this.#children;
    return children.map(({ path, segment, type }) => ({ path, segment, type })).concat(this.leaf ? [] : children.flatMap((child) => child.flatten()));
  }
  print(i = 0) {
    console.log(`${"-".repeat(i)}${this.#segment} (${type_to_string(this.#type)})`);
    for (const child of this.#children) {
      child.print(i + 1);
    }
  }
  unique() {
    const children = this.#children;
    const counts = children.reduce((acc, child) => {
      const key = `${child.#segment}::${child.#type.toString()}`;
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    }, {});
    for (const [key, count] of Object.entries(counts)) {
      if (count > 1) {
        const seg = key.split("::")[0];
        throw new DoubleRoute(seg);
      }
    }
    const has_optionals = this.optionals().length > 0;
    if (has_optionals && this.has_path) {
      throw new DoubleRoute(this.#segment);
    }
    for (const $static of this.statics()) {
      if ($static.#segment === "index" && $static.#path !== void 0) {
        if (this.#type === STATIC && this.has_path) {
          throw new DoubleRoute(this.#segment);
        }
        if (has_optionals) {
          throw new DoubleRoute(this.#segment);
        }
      }
    }
  }
};

// ../../node_modules/.pnpm/@rcompat+fs@0.25.2/node_modules/@rcompat/fs/lib/private/FileRouter.js
var defaults = {
  directory: void 0,
  extensions: [".js"],
  specials: {}
};
var FileRouter = class _FileRouter {
  static Error = errors_exports;
  #root;
  #config;
  constructor(config) {
    this.#config = private_default2.override(defaults, config);
    Node.config = {
      specials: this.#config.specials
    };
    this.#root = new Node(null, "$");
  }
  #add(node3, parts, path) {
    const names = parts.filter((p) => p.startsWith("[")).map((p) => p.replace(/\[|\]|\.{3}/g, ""));
    const seen = /* @__PURE__ */ new Set();
    for (const name of names) {
      if (seen.has(name)) {
        throw new DoubleParam(name);
      }
      seen.add(name);
    }
    const [first, ...rest] = parts;
    if (parts.length === 1) {
      node3.filed(first, path);
    } else {
      this.#add(node3.interim(first), rest, path);
    }
  }
  #normalize(pathname) {
    const deslashed = pathname.replace(/\/{2,}/g, "/");
    const detrailed = deslashed !== "/" && deslashed.endsWith("/") ? deslashed.slice(0, -1) : deslashed;
    const segments = detrailed.split("/").filter(Boolean);
    if (segments.at(-1) === "index" && segments.at(-2) !== "index") {
      return segments.slice(0, -1);
    }
    return segments;
  }
  match(request) {
    const root = this.#root;
    const segments = this.#normalize(new URL(request.url).pathname);
    const exact = root.match(segments);
    if (exact !== void 0)
      return exact;
    const index_segments = [...segments, "index"];
    const index_match = root.match(index_segments);
    if (index_match && index_match.segment === "index")
      return index_match;
  }
  init(objects) {
    for (const path of objects.toSorted((a, b) => a.localeCompare(b))) {
      this.#add(this.#root, private_default6.webpath(path).split("/"), path);
    }
    this.#root.check((node3) => {
      node3.unique();
      const dynamics = node3.dynamics();
      if (dynamics.length > 1) {
        throw new DoubleRoute(dynamics[1].segment);
      }
      if (dynamics.length === 0) {
        return true;
      }
      const [dynamic] = dynamics;
      if (dynamic.optional && !dynamic.leaf) {
        throw new OptionalRoute(dynamic.segment);
      }
      if (dynamic.rest && !dynamic.leaf) {
        throw new RestRoute(dynamic.segment);
      }
      return true;
    });
    return this;
  }
  async load() {
    const { directory, extensions } = this.#config;
    const escaped = extensions.map((e) => e.replace(".", "\\."));
    const filter = new RegExp(`^.*(${escaped.join("|")})$`, "u");
    return this.init(directory === void 0 ? [] : (await private_default6.files(directory, { filter, recursive: true })).map((file) => `${file}`.replace(directory, (_2) => "").slice(1, -file.extension.length)));
  }
  all() {
    return this.#root.flatten();
  }
  depth(special) {
    return this.#root.max((node3) => node3.specials().filter(({ segment }) => segment.slice(1) === special).length > 0);
  }
  static init(config, objects) {
    return new _FileRouter(config).init(objects);
  }
  static load(config) {
    return new _FileRouter(config).load();
  }
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/is-secure.js
init_public2();
var is_secure_default = (conf) => {
  assert_default.dict(conf);
  const { ssl } = conf;
  return ssl?.key instanceof private_default6.FileRef && ssl.cert instanceof private_default6.FileRef;
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/get-options.js
init_public2();
var get_options_default = async (conf) => {
  assert_default.dict(conf);
  return is_secure_default(conf) ? {
    cert: await conf.ssl.cert.text(),
    key: await conf.ssl.key.text()
  } : {};
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/handle-ws-node.js
var handle_ws_node_default = (socket, actions) => {
  const { close, message, open } = actions;
  if (message !== void 0) {
    socket.addEventListener("message", (event) => {
      message(socket, event.data);
    });
  }
  if (close !== void 0) {
    socket.addEventListener("close", () => close(socket));
  }
  open?.(socket);
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/PseudoRequest.js
init_public2();
var import_busboy = __toESM(require_lib(), 1);
import { Readable as Readable3 } from "node:stream";
import { arrayBuffer, blob, json, text as text2 } from "node:stream/consumers";
var no_body = ["GET", "HEAD"];
var unimplemented = () => {
  throw new Error("unimplemented");
};
var PseudoRequest = class {
  #incoming;
  #body = null;
  #body_used = false;
  #headers = new Headers();
  #url;
  #method;
  constructor(url, incoming) {
    assert_default.string(url);
    assert_default.string(incoming.method);
    assert_default.object(incoming.headers);
    this.#url = url;
    this.#incoming = incoming;
    this.#method = incoming.method ?? "GET";
    Object.entries(incoming.headers).filter((header) => typeof header[1] === "string").forEach((entry) => this.#headers.set(...entry));
  }
  get #parsable() {
    return this.#body === null && !no_body.includes(this.#method);
  }
  get body() {
    if (this.#parsable) {
      this.#body = Readable3.toWeb(this.#incoming);
    }
    return this.#body;
  }
  get bodyUsed() {
    return this.#body_used;
  }
  get cache() {
    return "default";
  }
  get credentials() {
    return "same-origin";
  }
  get destination() {
    return "";
  }
  get duplex() {
    return "half";
  }
  get headers() {
    return this.#headers;
  }
  get integrity() {
    return "";
  }
  get keepalive() {
    return true;
  }
  get method() {
    return this.#method;
  }
  get mode() {
    return "same-origin";
  }
  get redirect() {
    return "follow";
  }
  get referrer() {
    return this.#incoming.headers.referer;
  }
  get referrerPolicy() {
    return "";
  }
  get signal() {
    unimplemented();
    return new AbortSignal();
  }
  get url() {
    return this.#url;
  }
  // not in spec
  get original() {
    return this.#incoming;
  }
  #use_body() {
    if (this.#body_used) {
      throw new Error("ERR_BODY_ALREADY_USED");
    }
    this.#body_used = true;
  }
  arrayBuffer() {
    this.#use_body();
    return arrayBuffer(this.#incoming);
  }
  async bytes() {
    this.#use_body();
    const buffer = await arrayBuffer(this.#incoming);
    return new Uint8Array(buffer);
  }
  blob() {
    this.#use_body();
    return blob(this.#incoming);
  }
  clone() {
    unimplemented();
    return this;
  }
  async formData() {
    this.#use_body();
    const bb = (0, import_busboy.default)({ headers: this.#incoming.headers });
    const formData = new FormData();
    return new Promise((resolve3, reject) => {
      bb.on("file", (name, file, info) => {
        const chunks = [];
        const { filename, mimeType } = info;
        file.on("data", (chunk) => chunks.push(chunk));
        file.on("close", () => {
          const buffer = Buffer.concat(chunks);
          formData.append(name, new File([buffer], filename, {
            type: mimeType
          }));
        });
      });
      bb.on("field", (key, value) => {
        formData.set(key, value);
      });
      bb.on("close", () => {
        resolve3(formData);
      });
      bb.once("error", reject);
      this.#incoming.pipe(bb);
    });
  }
  async json() {
    this.#use_body();
    return json(this.#incoming);
  }
  async text() {
    this.#use_body();
    return text2(this.#incoming);
  }
};

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/serve/node.js
import { Writable as Writable2 } from "node:stream";

// ../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);

// ../../node_modules/.pnpm/@rcompat+http@0.21.0/node_modules/@rcompat/http/lib/private/serve/node.js
var wss = new import_websocket_server.default({ noServer: true });
function toURL(request) {
  try {
    const host = request.headers.host ?? "localhost";
    const raw = request.url ?? "/";
    return new URL(`http://${host}${raw}`);
  } catch (error3) {
    console.error(error3);
    return null;
  }
}
var defaults2 = {
  host: "localhost",
  port: 6161
};
var node_default3 = async (handler, conf) => {
  const $conf = private_default2.override(defaults2, conf ?? {});
  const module = await (is_secure_default($conf) ? import("https") : import("http"));
  const options = await get_options_default($conf);
  const server = module.createServer(options, async (node_request, node_response) => {
    const url = toURL(node_request);
    if (url === null) {
      node_response.end();
      return;
    }
    const request = new PseudoRequest(`${url}`, node_request);
    let response;
    try {
      response = await handler(request);
    } catch {
      response = new Response(null, { status: Status_default.INTERNAL_SERVER_ERROR });
    }
    if (response === null)
      return;
    [...response.headers.entries()].forEach(([name, value]) => {
      node_response.setHeader(name, value);
    });
    node_response.writeHead(response.status);
    if (response.body === null)
      return node_response.end();
    const { body } = response;
    try {
      await body.pipeTo(Writable2.toWeb(node_response));
    } catch {
      await body.cancel();
    }
  }).listen($conf.port, $conf.host);
  return {
    stop() {
      server.close();
    },
    upgrade(request, actions) {
      const { original } = request;
      const null_buffer = Buffer.from([]);
      wss.handleUpgrade(original, original.socket, null_buffer, (socket) => {
        handle_ws_node_default(socket, actions);
      });
      return null;
    }
  };
};

// ../../packages/core/lib/private/serve/App.js
init_public();

// ../../node_modules/.pnpm/@rcompat+string@0.13.0/node_modules/@rcompat/string/lib/private/native/node.js
var node2 = {
  utf8_bytelength(str) {
    return Buffer.byteLength(str, "utf8");
  }
};
var node_default4 = node2;

// ../../node_modules/.pnpm/@rcompat+string@0.13.0/node_modules/@rcompat/string/lib/private/utf8/bytelength.js
function utf8Bytelength(string) {
  return node_default4.utf8_bytelength(string);
}

// ../../node_modules/.pnpm/@rcompat+string@0.13.0/node_modules/@rcompat/string/lib/private/utf8/size.js
function utf8Size(string) {
  let size = 0;
  for (let i = 0; i < string.length; i++) {
    const code = string.codePointAt(i);
    if (code <= 127) {
      size++;
    } else if (code <= 2047) {
      size += 2;
    } else if (code <= 65535) {
      size += 3;
    } else if (code <= 1114111) {
      size += 4;
    } else {
      throw new Error(`Invalid code point: ${code}`);
    }
    if (code > 65535) {
      i++;
    }
  }
  return size;
}

// ../../node_modules/.pnpm/@rcompat+string@0.13.0/node_modules/@rcompat/string/lib/private/utf8.js
var utf8_default = {
  bytelength: utf8Bytelength,
  size: utf8Size
};

// ../../packages/core/lib/private/serve/App.js
init_public3();
var deroot = (pathname) => pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
var deslash = (url) => url.replaceAll(/\/{2,}/gu, (_2) => "/");
var normalize3 = (pathname) => deroot(deslash(pathname));
var to_csp = (config_csp, assets, override2) => config_csp.map(([key, directives]) => (
  // enrich with application assets
  [key, assets[key] ? directives.concat(...assets[key]) : directives]
)).map(([key, directives]) => (
  // enrich with explicit csp
  [key, override2[key] ? directives.concat(...override2[key]) : directives]
)).map(([key, directives]) => `${key} ${directives.join(" ")}`).join(";");
var render_head = (assets, head) => {
  const fonts = assets.filter((asset) => asset.src?.endsWith(".woff2"));
  const rest = assets.filter((asset) => !asset.src?.endsWith(".woff2") && asset.type !== "js");
  return fonts.map((font) => tags_default.font({ href: font.src, type: "font/woff2" })).join("\n").concat("\n", rest.map(({ code, inline, integrity, src, type }) => type === "style" ? tags_default.style({ code, href: src, inline }) : tags_default.script({ code, inline, integrity, src, type })).join("\n")).concat("\n", head ?? "");
};
var s_http = /* @__PURE__ */ Symbol("s_http");
var ServeApp = class extends App {
  #init;
  #server;
  #views;
  #csp = {};
  #assets = [];
  #serve_assets;
  #pages;
  #stores;
  #frontends = {};
  #router;
  #builtins;
  #i18n_config;
  constructor(rootfile, init) {
    const dir = private_default6.ref(rootfile).directory;
    super(dir, init.facade[s_config], {
      mode: init.mode,
      target: init.target,
      dir: dir.path
    });
    this.#init = init;
    this.#views = Object.fromEntries(init.views ?? []);
    this.#stores = Object.fromEntries(init.stores?.map(([k, s3]) => [k, s3.default]) ?? []);
    this.#serve_assets = init.assets;
    this.#pages = init.pages;
    const http = this.#init.facade[s_config].http;
    this.#i18n_config = init.i18n_config;
    this.set(s_http, {
      host: http.host,
      port: http.port,
      ssl: this.secure ? {
        cert: this.root.join(http.ssl.cert),
        key: this.root.join(http.ssl.key)
      } : {}
    });
    this.#router = FileRouter.init({
      extensions: [".js"],
      specials: {
        error: { recursive: false },
        layout: { recursive: true },
        hook: { recursive: true }
      }
    }, init.routes.map((s3) => s3[0]));
    this.#builtins = {
      dev: init.mode === "development" ? new DevModule(this) : void 0,
      handle: new HandleModule(this),
      session: init.session_config ? new SessionModule(this.secure, init.session_config) : void 0,
      i18n: init.i18n_config ? new I18NModule(init.i18n_config) : void 0
    };
  }
  get secure() {
    const ssl = this.config("http.ssl");
    return ssl.key !== void 0 && ssl.cert !== void 0;
  }
  get assets() {
    return this.#assets;
  }
  get modules() {
    const { session, i18n } = this.#builtins;
    return [session, i18n, ...super.modules].filter((m) => m !== void 0);
  }
  get url() {
    const { host, port } = this.config("http");
    return `http${this.secure ? "s" : ""}://${host}:${port}`;
  }
  get router() {
    return this.#router;
  }
  get frontends() {
    return { ...this.#frontends };
  }
  get stores() {
    return this.#stores;
  }
  get i18n() {
    return this.#i18n_config;
  }
  loadView(name) {
    const f = private_default6.ref(name).path;
    const frontends = Object.keys(this.frontends);
    const extension = frontends.find((frontend) => f.endsWith(frontend));
    const base = extension === void 0 ? name : f.slice(0, -extension.length);
    const view2 = this.#views[base];
    if (view2 === void 0)
      throw fail("no view {0}", name);
    if (view2.default === void 0) {
      throw fail("view {0} must export a default component", name);
    }
    return view2.default;
  }
  headers(csp = {}) {
    const base = Object.entries(this.config("http.csp") ?? {});
    return {
      ...this.config("http.headers") ?? {},
      ...base.length === 0 ? {} : {
        "Content-Security-Policy": to_csp(base, this.#csp, csp)
      }
    };
  }
  render(content) {
    const { body, head, page, partial, placeholders = {} } = content;
    ["body", "head"].forEach((key) => assert_default.undefined(placeholders[key]));
    return partial ? body : Object.entries(placeholders).reduce((rendered, [key, value]) => rendered.replaceAll(`%${key}%`, value?.toString() ?? ""), this.page(page)).replaceAll(/(?<keep>%(?:head|body)%)|%.*?%/gus, "$1").replace("%body%", body).replace("%head%", render_head(this.#assets, head));
  }
  body_length(body) {
    return private_default.string(body) ? utf8_default.size(body) : 0;
  }
  respond(body, init) {
    const { headers, status } = private_default3({
      headers: private_default3.dict(),
      status: private_default3.uint.values(Status_default).default(Status_default.OK)
    }).parse(init);
    const body_length = this.body_length(body);
    return new Response(body, {
      headers: {
        "Content-Type": mime_default.TEXT_HTML,
        ...this.headers(),
        ...body_length ? {
          ...headers,
          "Content-Length": String(body_length)
        } : headers
      },
      status
    });
  }
  view(options) {
    const { headers = {}, status = Status_default.OK, statusText, ...rest } = options;
    return this.respond(this.render(rest), { headers, status });
  }
  media(content_type, response = {}) {
    return {
      headers: { ...response.headers, "Content-Type": content_type },
      status: response.status ?? Status_default.OK
    };
  }
  async publish({ code, inline = false, src, type = "" }) {
    if (inline || type === "style") {
      this.#assets.push({
        code: inline ? code : "",
        inline,
        integrity: await hash_default(code),
        src: private_default6.join(this.config("http.static.root"), src ?? "").path,
        type
      });
    }
    this.create_csp();
  }
  create_csp() {
    this.#csp = this.#assets.map(({ integrity, type: directive }) => [`${directive === "style" ? "style" : "script"}-src`, integrity]).reduce((csp, [directive, _hash]) => ({
      ...csp,
      [directive]: csp[directive].concat(`'${_hash}'`)
    }), { "script-src": [], "style-src": [] });
  }
  register(extension, viewFunction) {
    if (this.#frontends[extension] !== void 0) {
      throw fail("double file extension {0}", extension);
    }
    this.#frontends[extension] = viewFunction;
  }
  page(name) {
    const page_name = name ?? location_default.app_html;
    return this.#pages[page_name];
  }
  async #try_serve(ref) {
    if (await ref.exists() && await ref.kind() === "file") {
      return new Response(ref.stream(), {
        headers: {
          "Content-Type": mime_default.resolve(ref.name),
          "Content-Length": String(await ref.size())
        },
        status: Status_default.OK
      });
    }
  }
  async serve_assets(pathname) {
    const static_root = this.config("http.static.root");
    if (!pathname.startsWith(static_root))
      return void 0;
    if (this.mode === "development") {
      const client_asset = this.root.join(location_default.client, pathname);
      const client_response = await this.#try_serve(client_asset);
      if (client_response !== void 0)
        return client_response;
      const static_asset = this.root.join("..", location_default.static, pathname);
      const static_response = await this.#try_serve(static_asset);
      if (static_response !== void 0)
        return static_response;
      return void 0;
    }
    const assets = this.#serve_assets;
    const asset = assets.client[pathname] ?? assets.static[pathname];
    if (asset === void 0)
      return void 0;
    const binary2 = atob(asset.data);
    const bytes = new Uint8Array(binary2.length);
    for (let i = 0; i < binary2.length; i++) {
      bytes[i] = binary2.charCodeAt(i);
    }
    return new Response(bytes, {
      headers: {
        "Content-Type": asset.mime,
        "Content-Length": String(bytes.length)
      },
      status: Status_default.OK
    });
  }
  async start() {
    if (this.mode === "production") {
      this.#assets = await Promise.all(Object.entries(this.#serve_assets.client).filter(([src]) => src.endsWith(".css") || src.endsWith(".js")).map(async ([src, asset]) => {
        const type = src.endsWith(".css") ? "style" : "js";
        const code = atob(asset.data);
        return {
          code,
          inline: false,
          integrity: await hash_default(code),
          src,
          type
        };
      }));
    } else {
      const client_dir = this.root.join(location_default.client);
      const files = await client_dir.exists() ? await client_dir.files({
        recursive: true,
        filter: (info) => info.extension === ".js" || info.extension === ".css"
      }) : [];
      this.#assets = await Promise.all(files.map(async (file) => {
        const type = file.extension === ".css" ? "style" : "js";
        const code = await file.text();
        return {
          code,
          inline: false,
          integrity: await hash_default(code),
          src: `/${file.name}`,
          type
        };
      }));
    }
    const modules = [
      this.#builtins.dev,
      ...this.modules,
      this.#builtins.handle
    ].filter((m) => m !== void 0);
    const handle = (request) => reducer(modules, request, "handle");
    this.#server = await node_default3(async (request) => {
      try {
        return await handle(parse_default(request));
      } catch (error3) {
        log_default.error(error3);
        return new Response(null, {
          headers: {
            "Content-Length": String(0),
            "Cache-Control": "no-cache"
          },
          status: Status_default.INTERNAL_SERVER_ERROR
        });
      }
    }, {
      ...this.get(s_http),
      timeout: this.mode === "development" ? 0 : void 0
    });
    function bright(x) {
      return `\x1B[38;2;0;200;255m${x}\x1B[0m`;
    }
    log_default.print(`\xBB app url     ${bright(this.url)}
`);
  }
  stop() {
    this.#server.stop();
    log_default.system("stopped {0}", this.url);
  }
  upgrade(request, actions) {
    return this.#server.upgrade(request, actions);
  }
  async route(request) {
    const { original, url } = request;
    const pathname = normalize3(url.pathname);
    const route11 = this.router.match(original);
    if (route11 === void 0) {
      log_default.info("no {0} route to {1}", original.method, pathname);
      return;
    }
    const verb = original.method.toLowerCase();
    const specials = route11.specials;
    const errors2 = (specials.error ?? []).map((v) => router_default.get(v)[verb]?.handler).filter(Boolean).toReversed();
    const layouts = (specials.layout ?? []).map((v) => router_default.get(v)[verb]?.handler).filter(Boolean).toReversed();
    const hooks = (specials.hook ?? []).toReversed().flatMap((v) => router_default.getHooks(v));
    const verbs = router_default.get(route11.path);
    const route_path = verbs[verb];
    if (route_path === void 0) {
      throw fail("route {0} has no {1} verb", route11.path, verb);
    }
    const handler = route_path.handler;
    const parse_body = route_path.options.parseBody;
    const body = parse_body ?? this.config("request.body.parse") ? await RequestBody.parse(original, url) : RequestBody.none();
    const refined = Object.assign(Object.create(request), {
      body,
      path: new RequestBag(route11.params, "path", {
        normalize: (k) => k.toLowerCase(),
        raw: url.pathname
      })
    });
    return { errors: errors2, hooks, layouts, handler, request: refined };
  }
};

// ../../packages/core/lib/private/serve/hook.js
async function post(app2) {
  await app2.start();
  return app2;
}
var hook_default = async (app2) => post(await reducer(app2.modules, app2, "serve"));

// ../../packages/core/lib/private/serve/index.js
var serve_default = async (root, options) => {
  const facade = options.facade;
  const app2 = await new ServeApp(root, options).init();
  facade[s_attach](app2);
  return hook_default(app2);
};

// primate-views:views-virtual
var view = [];
var views_virtual_default = view;

// primate-routes:routes-virtual
var route = [];
var route0 = (await Promise.resolve().then(() => (init_count(), count_exports))).default;
route.push(["count", route0]);
var route1 = (await Promise.resolve().then(() => (init_delete(), delete_exports))).default;
route.push(["delete", route1]);
var route2 = (await Promise.resolve().then(() => (init_find(), find_exports))).default;
route.push(["find", route2]);
var route3 = (await Promise.resolve().then(() => (init_get(), get_exports))).default;
route.push(["get", route3]);
var route4 = (await Promise.resolve().then(() => (init_has(), has_exports))).default;
route.push(["has", route4]);
var route5 = (await Promise.resolve().then(() => (init_index(), index_exports))).default;
route.push(["index", route5]);
var route6 = (await Promise.resolve().then(() => (init_insert(), insert_exports))).default;
route.push(["insert", route6]);
var route7 = (await Promise.resolve().then(() => (init_programmatic(), programmatic_exports))).default;
route.push(["programmatic", route7]);
var route8 = (await Promise.resolve().then(() => (init_test(), test_exports))).default;
route.push(["test", route8]);
var route9 = (await Promise.resolve().then(() => (init_try(), try_exports))).default;
route.push(["try", route9]);
var route10 = (await Promise.resolve().then(() => (init_update(), update_exports))).default;
route.push(["update", route10]);
var routes_virtual_default = route;

// primate-pages:pages-virtual
var pages = {
  "app.html": '<!doctype html>\n<html>\n  <head>\n    <title>Primate app</title>\n    <meta charset="utf-8" />\n    %head%\n  </head>\n  <body>%body%</body>\n</html>\n',
  "error.html": '<!doctype html>\n<html>\n  <head>\n    <title>Error page</title>\n    <meta charset="utf-8" />\n    %head%\n  </head>\n  <body>\n    <h1>Error page</h1>\n    <p>\n      %body%\n    </p>\n  </body>\n</html>\n'
};
var pages_virtual_default = pages;

// primate-assets:assets-virtual
var assets_virtual_default = {
  client: {},
  static: {}
};

// ../../packages/core/lib/private/config/schema.js
init_public3();
var schema_default = private_default3({
  http: {
    csp: private_default3.dict(private_default3.array(private_default3.string)).optional(),
    headers: private_default3.dict().optional(),
    host: private_default3.string.default("localhost"),
    port: private_default3.uint.port().default(6161),
    ssl: {
      cert: private_default3.union(private_default6.FileRef, private_default3.string).optional(),
      key: private_default3.union(private_default6.FileRef, private_default3.string).optional()
    },
    static: {
      root: private_default3.string.default("/")
    }
  },
  livereload: {
    exclude: private_default3.array(private_default3.string).optional(),
    host: private_default3.string.optional(),
    port: private_default3.uint.port().optional()
  },
  modules: private_default3.array(private_default3.constructor(Module)).optional(),
  request: {
    body: {
      parse: private_default3.boolean.default(true)
    }
  }
});

// ../../packages/core/lib/private/config/index.js
var config_default2 = (input = {}) => new AppFacade(schema_default.parse(input));

// config/app.ts
var app_default = config_default2({
  http: {
    port: 10002
  }
});

// build/serve.js
var session_config = void 0;
var i18n_config = void 0;
var app = await serve_default(import.meta.url, {
  assets: assets_virtual_default,
  facade: app_default,
  routes: routes_virtual_default,
  views: views_virtual_default,
  pages: pages_virtual_default,
  mode: "testing",
  session_config,
  i18n_config,
  target: "web"
});
var serve_default2 = app;
export {
  serve_default2 as default
};
