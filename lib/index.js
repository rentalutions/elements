'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Text = exports.Loader = exports.Input = exports.Image = exports.Icon = exports.Container = exports.Card = exports.Button = exports.Avatar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  *,*:before,*:after {\n    box-sizing: border-box;\n  }\n'], ['\n  *,*:before,*:after {\n    box-sizing: border-box;\n  }\n']);

var _styledComponents = require('styled-components');

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

exports.Avatar = _Avatar2.default;
exports.Button = _Button2.default;
exports.Card = _Card2.default;
exports.Container = _Container2.default;
exports.Icon = _Icon2.default;
exports.Image = Image;
exports.Input = _Input2.default;
exports.Loader = _Loader2.default;
exports.Text = _Text2.default;
exports.Tooltip = _Tooltip2.default;