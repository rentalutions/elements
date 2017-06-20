'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 1em;\n  background: ', ';\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12);\n'], ['\n  padding: 1em;\n  background: ', ';\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12);\n']);

exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var bgImage = _ref.bgImage,
      bgColor = _ref.bgColor;
  return bgImage ? 'url(' + bgImage + ')' : bgColor ? bgColor : '#F9F9F9';
});

function Card(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      title = _ref2.title,
      cardActions = _ref2.cardActions,
      bgImage = _ref2.bgImage,
      bgColor = _ref2.bgColor;

  return _react2.default.createElement(
    CardWrapper,
    { className: className, bgImage: bgImage, bgColor: bgColor },
    title && _react2.default.createElement(
      _Text2.default,
      { title: true },
      title
    ),
    children
  );
}