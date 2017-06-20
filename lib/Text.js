'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 1rem 0;\n  padding: 0;\n  color: #404040;\n  font-family: \'Open Sans\';\n  font-size: 1rem;\n  &.small { font-size: 0.75rem; }\n  &.title {\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n  &.headline { font-size: 2rem; }\n  &.hero {\n    font-size: 3rem;\n    font-weight: 300;\n  }\n  &.center { text-align: center; }\n  &.right { text-align: right; }\n  &.bold { font-weight: bolder; }\n'], ['\n  margin: 1rem 0;\n  padding: 0;\n  color: #404040;\n  font-family: \'Open Sans\';\n  font-size: 1rem;\n  &.small { font-size: 0.75rem; }\n  &.title {\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n  &.headline { font-size: 2rem; }\n  &.hero {\n    font-size: 3rem;\n    font-weight: 300;\n  }\n  &.center { text-align: center; }\n  &.right { text-align: right; }\n  &.bold { font-weight: bolder; }\n']);

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextWrapper = _styledComponents2.default.p(_templateObject);

function Text(_ref) {
  var center = _ref.center,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      headline = _ref.headline,
      hero = _ref.hero,
      right = _ref.right,
      small = _ref.small,
      title = _ref.title;

  var classes = (0, _classnames2.default)({
    center: center, right: right, hero: hero, headline: headline, title: title, small: small
  }, className);
  return _react2.default.createElement(
    TextWrapper,
    { color: color, className: classes },
    children
  );
}

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
  color: '',
  headline: false,
  hero: false,
  right: false,
  small: false,
  title: false
};