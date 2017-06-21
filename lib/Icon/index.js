'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1em;\n'], ['\n  font-size: 1em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _iconData = require('./iconData.js');

var _iconData2 = _interopRequireDefault(_iconData);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getPaths = function getPaths(iconName) {
  var icon = _iconData2.default.icons.find(function (icon) {
    return icon.tags.includes(iconName);
  });
  if (icon) return icon.paths;else console.warn('icon ' + iconName + ' does not exist');
};

var IconMarkup = function IconMarkup(_ref) {
  var className = _ref.className,
      name = _ref.name,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['className', 'name', 'size']);

  var classes = (0, _classnames2.default)(className);
  return _react2.default.createElement(
    'svg',
    {
      width: size || '24',
      height: size || '24',
      viewBox: '0 0 1024 1024',
      className: classes,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      stroke: '#676065',
      strokeWidth: '85.333',
      fill: 'none'
    },
    getPaths(name).map(function (path) {
      return _react2.default.createElement('path', { strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: path
      });
    })
  );
};

var Icon = (0, _styledComponents2.default)(IconMarkup)(_templateObject);

Icon.displayName = 'Icon';

exports.default = Icon;