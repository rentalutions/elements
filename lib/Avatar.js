'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: ', ';\n  height: ', ';\n  width: ', ';\n  overflow: hidden;\n  > ', ' {\n    margin: 0;\n    padding: 0;\n    color: ', ';\n    font-size: ', ';\n  }\n  img {\n    width: 100%;\n  }\n'], ['\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: ', ';\n  height: ', ';\n  width: ', ';\n  overflow: hidden;\n  > ', ' {\n    margin: 0;\n    padding: 0;\n    color: ', ';\n    font-size: ', ';\n  }\n  img {\n    width: 100%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _variables = require('./variables');

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AvatarLogic = function AvatarLogic(_ref) {
  var className = _ref.className,
      initials = _ref.initials,
      image = _ref.image,
      rest = _objectWithoutProperties(_ref, ['className', 'initials', 'image']);

  var classes = (0, _classnames2.default)('avatar', className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, rest),
    image ? _react2.default.createElement('img', { src: image, alt: 'avatar image' }) : _react2.default.createElement(
      _Text2.default,
      null,
      initials
    )
  );
};

var Avatar = (0, _styledComponents2.default)(AvatarLogic).attrs({
  size: function size(props) {
    return props.lg ? '5em' : props.sm ? '2em' : '3em';
  }
})(_templateObject, function (_ref2) {
  var bgColor = _ref2.bgColor;
  return bgColor ? bgColor : _variables.colors.grey.darkSecondary;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, _Text2.default, _variables.colors.grey.light, function (props) {
  return props.sm ? '0.75em' : 'inherit';
});

exports.default = Avatar;