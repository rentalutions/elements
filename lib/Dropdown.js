'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  &:hover {\n    .dropdown-menu {\n      display: block;\n    }\n  }\n  .dropdown-menu {\n    display: none;\n  }\n'], ['\n  position: relative;\n  &:hover {\n    .dropdown-menu {\n      display: block;\n    }\n  }\n  .dropdown-menu {\n    display: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownWrapper = _styledComponents2.default.div(_templateObject);

function Dropdown(_ref) {
  var className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    DropdownWrapper,
    { className: 'dropdown ' + className },
    children
  );
}

Dropdown.Menu = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;

  return _react2.default.createElement(
    'ul',
    { className: 'dropdown-menu ' + className },
    children
  );
};

exports.default = Dropdown;