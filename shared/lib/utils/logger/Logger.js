"use strict";

const dotenv = require("dotenv");
dotenv.config();

var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var NEXT_PUBLIC_LOGGER_STATE = process.env.NEXT_PUBLIC_LOGGER_STATE;
var NEXT_PUBLIC_TRACE_ERRORS = process.env.NEXT_PUBLIC_TRACE_ERRORS;
var nodeColors = {
  Reset: "\x1b[0m",
  magenta: "\x1b[35m",
  green: "\x1b[32m",
  orange: "\x1b[33m",
  red: "\x1b[31m",
};
/**
 * Класс Logger выводит сообщения в консоль в зависимости от настроек окружения.
 *
 * **🚀 Get started**
 *
 * Использовать вместо обычного console.log, console.error, console.warn. Данный
 * класс должен использоваться только во время разработки. После сборки проекта
 * отключить вывод сообщений в консоль в .env файле поставив переменную окружения
 * `NEXT_PUBLIC_LOGGER_STATE = off`. Изначально переменная окружения `NEXT_PUBLIC_LOGGER_STATE`
 * стоит в значении `on`.
 *
 * Если в логере нужно отслеживать где была вызвана ошибка, то в переменной окружения
 * в .env файле нужно поставить переменную окружения `NEXT_PUBLIC_NEXT_PUBLIC_TRACE_ERRORS = true`.
 * Таким образом в консоли будет отображаться стек вызовов функций.
 *
 * **ℹ️ Usage**
 *
 * @example
 *
 * // Логирование без контекста
 * Logger.log("log message");     // [LOG]    05:10:21  -  log message
 * Logger.debug("debug message"); // [DEBUG]  05:10:21  -  debug message
 * Logger.warn("warn message");   // [WARN]   05:10:21  -  warn message
 * Logger.error("error message"); // [ERROR]  05:10:21  -  error message
 *
 * // Логирование c контекста
 * const logger = new Logger("context");
 * logger.log("log message with context");     // [LOG]    05:10:21  [context]  - log message with context
 * logger.debug("debug message with context"); // [DEBUG]  05:10:21  [context]  - debug message with context
 * logger.warn("warn message with context");   // [WARN]   05:10:21  [context]  - warn message with context
 * logger.error("error message with context"); // [ERROR]  05:10:21  [context]  - error message with context
 */
var Logger = /** @class */ (function () {
  function Logger(context) {
    this.context = context;
  }
  Object.defineProperty(Logger, "consoleAlwd", {
    get: function () {
      // eslint-disable-next-line no-console
      return console;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Logger, "isDebug", {
    get: function () {
      if (NEXT_PUBLIC_LOGGER_STATE === undefined) {
        var logMsg =
          'Logger can not find NEXT_PUBLIC_LOGGER_STATE variable. Look at .env file and be sure that you have NEXT_PUBLIC_LOGGER_STATE in .env file with proper value "on" or "off"';
        this.consoleAlwd.error(logMsg);
        return false;
      }
      return NEXT_PUBLIC_LOGGER_STATE === "on";
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Logger, "isTracingErrors", {
    get: function () {
      if (NEXT_PUBLIC_TRACE_ERRORS === undefined) {
        this.consoleAlwd.warn("NEXT_PUBLIC_TRACE_ERRORS is not defined");
        return false;
      }
      if (NEXT_PUBLIC_TRACE_ERRORS !== "true" && NEXT_PUBLIC_TRACE_ERRORS === "false") {
        this.consoleAlwd.warn('NEXT_PUBLIC_TRACE_ERRORS could be only "true" or "false"');
        return false;
      }
      return NEXT_PUBLIC_TRACE_ERRORS === "true";
    },
    enumerable: false,
    configurable: true,
  });
  Logger.getTime = function () {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, "0");
    var minutes = now.getMinutes().toString().padStart(2, "0");
    var seconds = now.getSeconds().toString().padStart(2, "0");
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
  };
  Logger.textColor = function (text, color) {
    return nodeColors[color] + text + nodeColors.Reset;
  };
  Logger.printLog = function (_a) {
    var _b, _c, _d, _e;
    var logType = _a.logType,
      context = _a.context,
      message = _a.message,
      optionalParams = _a.optionalParams;
    if (!this.isDebug) return; // если дебаг мод выключен, но не выводим логи
    var isNode = typeof window === "undefined";
    var textColor;
    switch (logType) {
      case "[LOG]  ":
        textColor = "green";
        break;
      case "[WARN] ":
        textColor = "orange";
        break;
      case "[DEBUG]":
        textColor = "magenta";
        break;
      case "[ERROR]":
        textColor = "red";
        break;
      default:
        textColor = "green";
        break;
    }
    var currentTime = "".concat(this.getTime());
    if (context) {
      if (isNode) {
        (_b = this.consoleAlwd).log.apply(
          _b,
          __spreadArray(
            [
              Logger.textColor(logType, textColor),
              currentTime,
              Logger.textColor("[".concat(context, "]"), textColor),
              "-",
              message,
            ],
            optionalParams,
            false,
          ),
        );
      } else {
        (_c = this.consoleAlwd).log.apply(
          _c,
          __spreadArray(
            [
              "%c".concat(logType, " ") +
                "%c".concat(currentTime, " ") +
                "%c[".concat(context, "] "),
              "color: ".concat(textColor),
              "color: inherit",
              "color: ".concat(textColor),
              message,
            ],
            optionalParams,
            false,
          ),
        );
      }
    } else {
      if (isNode) {
        (_d = this.consoleAlwd).log.apply(
          _d,
          __spreadArray(
            [Logger.textColor(logType, textColor), currentTime, " - ", message],
            optionalParams,
            false,
          ),
        );
      } else {
        (_e = this.consoleAlwd).log.apply(
          _e,
          __spreadArray(
            [
              "%c".concat(logType, " ") + "%c".concat(currentTime, " "),
              "color: ".concat(textColor),
              "color: inherit",
              message,
            ],
            optionalParams,
            false,
          ),
        );
      }
    }
  };
  Logger.prototype.log = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[LOG]  ",
      context: this.context,
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.prototype.warn = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[WARN] ",
      context: this.context,
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.prototype.debug = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[DEBUG]",
      context: this.context,
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.prototype.error = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[ERROR]",
      context: this.context,
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.log = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[LOG]  ",
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.warn = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[WARN] ",
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.debug = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[DEBUG]",
      message: message,
      optionalParams: optionalParams,
    });
  };
  Logger.error = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      optionalParams[_i - 1] = arguments[_i];
    }
    Logger.printLog({
      logType: "[ERROR]",
      message: message,
      optionalParams: optionalParams,
    });
  };
  return Logger;
})();
exports.Logger = Logger;
