'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.5rem 1rem;\n  background-color: ', ';\n  border: ', ';\n  border-radius: 2px;\n  color: ', ';\n  cursor: pointer;\n  font-family: \'Nunito\', sans-serif;\n  font-size: 1em;\n  font-weight: 600;\n  min-width: 90px;\n  outline: none;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  transition: all 200ms ', ';\n  &:hover {\n    background: ', ';\n    border: 2px solid ', ';\n    box-shadow: ', ';\n    color: ', ';\n  }\n'], ['\n  padding: 0.5rem 1rem;\n  background-color: ', ';\n  border: ', ';\n  border-radius: 2px;\n  color: ', ';\n  cursor: pointer;\n  font-family: \'Nunito\', sans-serif;\n  font-size: 1em;\n  font-weight: 600;\n  min-width: 90px;\n  outline: none;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  transition: all 200ms ', ';\n  &:hover {\n    background: ', ';\n    border: 2px solid ', ';\n    box-shadow: ', ';\n    color: ', ';\n  }\n']);

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var returnColor = function returnColor(props) {
  return props.primary ? _variables.colors.brand.primary : props.success ? _variables.colors.ui.positive : props.failure ? _variables.colors.ui.negative : props.warning ? _variables.colors.ui.warning : props.btnColor ? props.btnColor : _variables.colors.grey.darkSecondary;
};

var ButtonWrapper = _styledComponents2.default.button.attrs({
  computedColor: function computedColor(props) {
    return returnColor(props);
  }
})(_templateObject, function (_ref) {
  var computedColor = _ref.computedColor,
      primary = _ref.primary;
  return primary ? computedColor : 'transparent';
}, function (_ref2) {
  var bare = _ref2.bare,
      computedColor = _ref2.computedColor;
  return bare ? 'none' : '2px solid ' + computedColor;
}, function (_ref3) {
  var computedColor = _ref3.computedColor,
      primary = _ref3.primary;
  return primary ? _variables.colors.grey.light : computedColor;
}, (0, _polished.timingFunctions)('easeInQuad'), function (props) {
  return props.primary ? (0, _polished.darken)(0.24, props.computedColor) : props.computedColor;
}, function (props) {
  return props.primary ? (0, _polished.darken)(0.24, props.computedColor) : props.computedColor;
}, function (_ref4) {
  var primary = _ref4.primary;
  return primary ? '0 1px 3px rgba(0,0,0,0.12)' : 'inital';
}, _variables.colors.grey.light);

var Link = ButtonWrapper.withComponent(_reactRouterDom.Link);

var Button = function Button(_ref5) {
  var to = _ref5.to,
      className = _ref5.className,
      children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ['to', 'className', 'children']);

  if (to) return _react2.default.createElement(
    Link,
    { to: to, className: className },
    children
  );else return _react2.default.createElement(
    ButtonWrapper,
    { className: className },
    children
  );
};

Button.displayName = 'Button';

exports.default = Button;