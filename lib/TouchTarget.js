'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.5em 1em;\n  background-color: ', ';\n  border: 2px solid ', ';\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 1rem;\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n'], ['\n  padding: 0.5em 1em;\n  background-color: ', ';\n  border: 2px solid ', ';\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 1rem;\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n']);

exports.default = TouchTarget;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (_ref) {
  var primary = _ref.primary,
      success = _ref.success;
  return primary ? _variables.colors.primary : 'transparent';
}, function (_ref2) {
  var color = _ref2.color,
      primary = _ref2.primary,
      success = _ref2.success;
  return color ? color : _variables.colors.dark;
}, _variables.colors.dark, _variables.colors.light);
Button.displayName = 'Button';

var Link = Button.withComponent(_reactRouterDom.Link);

Link.displayName = 'Link';

function TouchTarget(props) {
  if (props.to) return Link;else return Button;
}