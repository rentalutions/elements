'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-width: sizes.xLarge;\n  padding: ', ';\n'], ['\n  max-width: sizes.xLarge;\n  padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div.attrs({
  padding: function padding(props) {
    return props.padded ? '1em' : 'initial';
  }
})(_templateObject, function (props) {
  return props.padding;
});

Container.displayName = 'Container';

exports.default = Container;