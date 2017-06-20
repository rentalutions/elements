'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .text, .small, .title, .headline, .hero {\n    margin: 1rem 0;\n    padding: 0;\n    color: #404040;\n    font-family: \'Open Sans\';\n  }\n  .text { font-size: 1rem; }\n  .small { font-size: 0.75rem; }\n  .hero {\n    font-size: 3rem;\n    font-weight: 300;\n  }\n  .headline { font-size: 2rem; }\n  .title {\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n'], ['\n  .text, .small, .title, .headline, .hero {\n    margin: 1rem 0;\n    padding: 0;\n    color: #404040;\n    font-family: \'Open Sans\';\n  }\n  .text { font-size: 1rem; }\n  .small { font-size: 0.75rem; }\n  .hero {\n    font-size: 3rem;\n    font-weight: 300;\n  }\n  .headline { font-size: 2rem; }\n  .title {\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n']);

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextWrapper = _styledComponents2.default.span(_templateObject);

function Text(_ref) {
  var children = _ref.children,
      small = _ref.small,
      title = _ref.title,
      headline = _ref.headline,
      hero = _ref.hero,
      className = _ref.className;

  return _react2.default.createElement(
    TextWrapper,
    { className: className },
    hero ? _react2.default.createElement(
      'h1',
      { className: 'hero' },
      children
    ) : headline ? _react2.default.createElement(
      'h2',
      { className: 'headline' },
      children
    ) : title ? _react2.default.createElement(
      'h3',
      { className: 'title' },
      children
    ) : small ? _react2.default.createElement(
      'p',
      { className: 'small' },
      children
    ) : _react2.default.createElement(
      'p',
      { className: 'text' },
      children
    )
  );
}

Text.propTypes = {
  hero: _propTypes2.default.bool,
  headline: _propTypes2.default.bool,
  title: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  color: _propTypes2.default.string
};

Text.defaultProps = {
  hero: false,
  headline: false,
  title: false,
  small: false,
  color: ''
};