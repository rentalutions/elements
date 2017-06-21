'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  padding: 1em;\n  background: ', ';\n  border-radius: 2px;\n  box-shadow: 0 1px 3px ', ';\n  > ', ' {\n    margin-top: 0;\n    color: ', ';\n  }\n'], ['\n  padding: 1em;\n  background: ', ';\n  border-radius: 2px;\n  box-shadow: 0 1px 3px ', ';\n  > ', ' {\n    margin-top: 0;\n    color: ', ';\n  }\n']);

exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var bgImage = _ref.bgImage,
      bgColor = _ref.bgColor;
  return bgImage ? 'url(' + bgImage + ')' : bgColor ? bgColor : _variables.colors.grey.light;
}, (0, _polished.tint)(0.12, _variables.colors.grey.dark), _Text2.default, _variables.colors.grey.darkSecondary);

function Card(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      title = _ref2.title,
      cardActions = _ref2.cardActions,
      bgImage = _ref2.bgImage,
      bgColor = _ref2.bgColor,
      rest = _objectWithoutProperties(_ref2, ['className', 'children', 'title', 'cardActions', 'bgImage', 'bgColor']);

  return _react2.default.createElement(
    CardWrapper,
    _extends({ className: className, bgImage: bgImage, bgColor: bgColor }, rest),
    title && _react2.default.createElement(
      _Text2.default,
      { title: true },
      title
    ),
    children
  );
}