"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _SequelizeGenerator = _interopRequireDefault(require("../utils/SequelizeGenerator.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * @file EPPlacementPointModel.js
 */

// Vendors

var sequelizeInstance = (0, _SequelizeGenerator["default"])();
var EPPlacementPoint = sequelizeInstance.define('ep_placement_point', {
  id: {
    field: 'id',
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    field: 'name',
    type: _sequelize["default"].STRING(20)
  }
}, {
  freezeTableName: true,
  timestamps: false
});
var _default = EPPlacementPoint;
exports["default"] = _default;