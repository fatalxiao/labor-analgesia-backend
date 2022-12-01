"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mappings = void 0;
exports.build = build;
exports.buildError = buildError;
exports.buildParamError = buildParamError;
exports.buildSuccess = buildSuccess;
exports["default"] = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @file Response.js
 */

var Mappings = {
  SUCCESS: [2000, 'success'],
  ERROR: [4000, 'error'],
  PARAM_INCORRECT: [4001, 'param incorrect']
};

/**
 * 格式化 Response
 * @param code
 * @param msg
 * @param data
 * @returns {string}
 */
exports.Mappings = Mappings;
function build(_ref, data) {
  var _ref2 = _slicedToArray(_ref, 2),
    code = _ref2[0],
    msg = _ref2[1];
  var json = {
    code: code,
    msg: msg
  };
  if (data) {
    json.data = data;
  }
  return JSON.stringify(json);
}

/**
 * 格式化 Success Response
 * @param data
 * @returns {string}
 */
function buildSuccess(data) {
  return build(Mappings.SUCCESS, data);
}

/**
 * 格式化 Error Response
 * @param data
 * @returns {string}
 */
function buildError(data) {
  return build(Mappings.ERROR, data);
}

/**
 * 格式化 Param Incorrect Response
 * @param data
 * @returns {string}
 */
function buildParamError(data) {
  return build(Mappings.PARAM_INCORRECT, data);
}
var _default = {
  build: build,
  buildSuccess: buildSuccess,
  buildError: buildError,
  buildParamError: buildParamError
};
exports["default"] = _default;