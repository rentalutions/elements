'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.5em 1em;\n  background-color: ', ';\n  border: 2px solid ', ';\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 1rem;\n  text-transform: uppercase;\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n'], ['\n  padding: 0.5em 1em;\n  background-color: ', ';\n  border: 2px solid ', ';\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 1rem;\n  text-transform: uppercase;\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _polished = require('polished');

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var returnColor = function returnColor(props) {
  return props.primary ? _variables.colors.primary : props.success ? _variables.colors.positive : props.failure ? _variables.colors.negative : props.warning ? _variables.colors.warning : props.color ? props.color : _variables.colors.feedback;
};

var TouchTarget = function TouchTarget(_ref) {
  var to = _ref.to,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['to', 'className', 'children']);

  if (to) return _react2.default.createElement(
    _reactRouterDom.Link,
    _extends({ to: to, className: className }, rest),
    children
  );else return _react2.default.createElement(
    'button',
    _extends({ className: className }, rest),
    children
  );
};

var Button = (0, _styledComponents2.default)(TouchTarget).attrs({
  computedColor: returnColor(props)
})(_templateObject, function (_ref2) {
  var computedColor = _ref2.computedColor,
      primary = _ref2.primary;
  return primary ? computedColor : 'transparent';
}, function (_ref3) {
  var computedColor = _ref3.computedColor;
  return computedColor;
}, function (_ref4) {
  var computedColor = _ref4.computedColor,
      primary = _ref4.primary;
  return primary ? (0, _polished.darken)(0.2, computedColor) : computedColor;
}, _variables.colors.light);

Button.displayName = 'Button';

exports.default = Button;