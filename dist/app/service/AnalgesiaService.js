"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnalgesiaData = createAnalgesiaData;
exports.createOrUpdateAnalgesiaData = createOrUpdateAnalgesiaData;
exports["default"] = void 0;
exports.getAnalgesiaDataByPatientId = getAnalgesiaDataByPatientId;
exports.updateAnalgesiaData = updateAnalgesiaData;
var _AnalgesiaDao = _interopRequireDefault(require("../dao/AnalgesiaDao.js"));
var _Response = require("../utils/Response.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 获取某个 Patient ID 的 Analgesia 数据
 * @param patientId
 * @returns {Promise<string>}
 */
function getAnalgesiaDataByPatientId(_x) {
  return _getAnalgesiaDataByPatientId.apply(this, arguments);
}
/**
 * 创建一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
function _getAnalgesiaDataByPatientId() {
  _getAnalgesiaDataByPatientId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(patientId) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _Response.buildSuccess;
            _context.next = 3;
            return _AnalgesiaDao["default"].getAnalgesiaDataByPatientId(patientId);
          case 3:
            _context.t1 = _context.sent;
            return _context.abrupt("return", (0, _context.t0)(_context.t1));
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAnalgesiaDataByPatientId.apply(this, arguments);
}
function createAnalgesiaData(_x2, _x3) {
  return _createAnalgesiaData.apply(this, arguments);
}
/**
 * 更新一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
function _createAnalgesiaData() {
  _createAnalgesiaData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(patientId, data) {
    var error, _iterator, _step, item, analgesiaData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            error = [];
            _iterator = _createForOfIteratorHelper(data);
            _context2.prev = 2;
            _iterator.s();
          case 4:
            if ((_step = _iterator.n()).done) {
              _context2.next = 22;
              break;
            }
            item = _step.value;
            analgesiaData = _objectSpread(_objectSpread({}, item), {}, {
              patientId: patientId
            });
            _context2.next = 9;
            return _AnalgesiaDao["default"].isAnalgesiaDataExist(patientId, analgesiaData.timePoint);
          case 9:
            if (!_context2.sent) {
              _context2.next = 12;
              break;
            }
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " data is exist."));
            return _context2.abrupt("continue", 20);
          case 12:
            _context2.prev = 12;
            _context2.next = 15;
            return _AnalgesiaDao["default"].createAnalgesiaData(analgesiaData);
          case 15:
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](12);
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " create failure."));
          case 20:
            _context2.next = 4;
            break;
          case 22:
            _context2.next = 27;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t1 = _context2["catch"](2);
            _iterator.e(_context2.t1);
          case 27:
            _context2.prev = 27;
            _iterator.f();
            return _context2.finish(27);
          case 30:
            if (!(error.length > 0)) {
              _context2.next = 32;
              break;
            }
            return _context2.abrupt("return", (0, _Response.buildError)(error.join(' ')));
          case 32:
            return _context2.abrupt("return", (0, _Response.buildSuccess)(data.length));
          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 24, 27, 30], [12, 17]]);
  }));
  return _createAnalgesiaData.apply(this, arguments);
}
function updateAnalgesiaData(_x4, _x5) {
  return _updateAnalgesiaData.apply(this, arguments);
}
/**
 * 创建或更新一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
function _updateAnalgesiaData() {
  _updateAnalgesiaData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(patientId, data) {
    var error, _iterator2, _step2, item, analgesiaData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            error = [];
            _iterator2 = _createForOfIteratorHelper(data);
            _context3.prev = 2;
            _iterator2.s();
          case 4:
            if ((_step2 = _iterator2.n()).done) {
              _context3.next = 22;
              break;
            }
            item = _step2.value;
            analgesiaData = _objectSpread(_objectSpread({}, item), {}, {
              patientId: patientId
            });
            _context3.next = 9;
            return _AnalgesiaDao["default"].isAnalgesiaDataExist(patientId, analgesiaData.timePoint);
          case 9:
            if (_context3.sent) {
              _context3.next = 12;
              break;
            }
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " data is not exist."));
            return _context3.abrupt("continue", 20);
          case 12:
            _context3.prev = 12;
            _context3.next = 15;
            return _AnalgesiaDao["default"].updateAnalgesiaData(analgesiaData);
          case 15:
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](12);
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " update failure."));
          case 20:
            _context3.next = 4;
            break;
          case 22:
            _context3.next = 27;
            break;
          case 24:
            _context3.prev = 24;
            _context3.t1 = _context3["catch"](2);
            _iterator2.e(_context3.t1);
          case 27:
            _context3.prev = 27;
            _iterator2.f();
            return _context3.finish(27);
          case 30:
            if (!(error.length > 0)) {
              _context3.next = 32;
              break;
            }
            return _context3.abrupt("return", (0, _Response.buildError)(error.join(' ')));
          case 32:
            return _context3.abrupt("return", (0, _Response.buildSuccess)(data.length));
          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 24, 27, 30], [12, 17]]);
  }));
  return _updateAnalgesiaData.apply(this, arguments);
}
function createOrUpdateAnalgesiaData(_x6, _x7) {
  return _createOrUpdateAnalgesiaData.apply(this, arguments);
}
function _createOrUpdateAnalgesiaData() {
  _createOrUpdateAnalgesiaData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(patientId, data) {
    var error, _iterator3, _step3, item, analgesiaData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            error = [];
            _iterator3 = _createForOfIteratorHelper(data);
            _context4.prev = 2;
            _iterator3.s();
          case 4:
            if ((_step3 = _iterator3.n()).done) {
              _context4.next = 17;
              break;
            }
            item = _step3.value;
            analgesiaData = _objectSpread(_objectSpread({}, item), {}, {
              patientId: patientId
            });
            _context4.prev = 7;
            _context4.next = 10;
            return _AnalgesiaDao["default"].createOrUpdateAnalgesiaData(analgesiaData);
          case 10:
            _context4.next = 15;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](7);
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " update failure."));
          case 15:
            _context4.next = 4;
            break;
          case 17:
            _context4.next = 22;
            break;
          case 19:
            _context4.prev = 19;
            _context4.t1 = _context4["catch"](2);
            _iterator3.e(_context4.t1);
          case 22:
            _context4.prev = 22;
            _iterator3.f();
            return _context4.finish(22);
          case 25:
            if (!(error.length > 0)) {
              _context4.next = 27;
              break;
            }
            return _context4.abrupt("return", (0, _Response.buildError)(error.join(' ')));
          case 27:
            return _context4.abrupt("return", (0, _Response.buildSuccess)(data.length));
          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 19, 22, 25], [7, 12]]);
  }));
  return _createOrUpdateAnalgesiaData.apply(this, arguments);
}
var _default = {
  getAnalgesiaDataByPatientId: getAnalgesiaDataByPatientId,
  createAnalgesiaData: createAnalgesiaData,
  updateAnalgesiaData: updateAnalgesiaData,
  createOrUpdateAnalgesiaData: createOrUpdateAnalgesiaData
};
exports["default"] = _default;