'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin: 1rem 0;\n  padding: 0;\n  color: ', ';\n  font-family: \'Nunito\';\n  font-size: 1rem;\n  &.small { font-size: 0.75rem; }\n  &.title {\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n  &.headline { font-size: 2rem; }\n  &.hero {\n    font-size: 4rem;\n    font-weight: 300;\n  }\n  &.center { text-align: center; }\n  &.right { text-align: right; }\n  &.bold { font-weight: bolder; }\n'], ['\n  margin: 1rem 0;\n  padding: 0;\n  color: ', ';\n  font-family: \'Nunito\';\n  font-size: 1rem;\n  &.small { font-size: 0.75rem; }\n  &.title {\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n  &.headline { font-size: 2rem; }\n  &.hero {\n    font-size: 4rem;\n    font-weight: 300;\n  }\n  &.center { text-align: center; }\n  &.right { text-align: right; }\n  &.bold { font-weight: bolder; }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TextLogic(_ref) {
  var center = _ref.center,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      headline = _ref.headline,
      hero = _ref.hero,
      right = _ref.right,
      small = _ref.small,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ['center', 'children', 'className', 'color', 'headline', 'hero', 'right', 'small', 'title']);

  var classes = (0, _classnames2.default)({
    center: center, right: right, hero: hero, headline: headline, title: title, small: small
  }, className);
  return hero ? _react2.default.createElement(
    'h1',
    { className: classes },
    children
  ) : headline ? _react2.default.createElement(
    'h2',
    { className: classes },
    children
  ) : title ? _react2.default.createElement(
    'h3',
    { className: classes },
    children
  ) : small ? _react2.default.createElement(
    'p',
    { className: classes },
    children
  ) : _react2.default.createElement(
    'p',
    _extends({ className: classes }, rest),
    children
  );
}

var Text = (0, _styledComponents2.default)(TextLogic)(_templateObject, _variables.colors.grey.dark);

Text.propTypes = {
  center: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  headline: _propTypes2.default.bool,
  hero: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  title: _propTypes2.default.bool
};

Text.defaultProps = {
  center: false,
  headline: false,
  hero: false,
  right: false,
  small: false,
  title: false
};

exports.default = Text;