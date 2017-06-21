'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  input {\n    width: 100%;\n    &:focus {\n      outline: none;\n    }\n  }\n  input + label {\n\n  }\n'], ['\n  input {\n    width: 100%;\n    &:focus {\n      outline: none;\n    }\n  }\n  input + label {\n\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('./variables');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputMarkup = function InputMarkup(props) {
  var classes = (0, _classnames2.default)('input-group', props.className);
  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement('input', { id: props.id, type: props.type, placeholder: props.placeholder }),
    _react2.default.createElement(
      'label',
      { htmlFor: props.id },
      props.label
    )
  );
};

var Input = (0, _styledComponents2.default)(InputMarkup)(_templateObject);

Input.displayName = 'Input';

exports.default = Input;