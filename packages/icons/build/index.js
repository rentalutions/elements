'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var p = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var p__default = /*#__PURE__*/_interopDefaultLegacy(p);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded$4l = ["color", "size"];
var Activity = /*#__PURE__*/React.forwardRef(function Activity(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4l);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 12H18L15 21L9 3L6 12H2"
  }));
});
Activity.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Activity.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Activity.displayName = "Activity";

var _excluded$4k = ["color", "size"];
var Airplay = /*#__PURE__*/React.forwardRef(function Airplay(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4k);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15L17 21H7L12 15Z"
  }));
});
Airplay.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Airplay.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Airplay.displayName = "Airplay";

var _excluded$4j = ["color", "size"];
var AlertCircle = /*#__PURE__*/React.forwardRef(function AlertCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4j);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8V12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16H12.01"
  }));
});
AlertCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlertCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlertCircle.displayName = "AlertCircle";

var _excluded$4i = ["color", "size"];
var AlertOctagon = /*#__PURE__*/React.forwardRef(function AlertOctagon(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4i);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16H12.01"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8V12"
  }));
});
AlertOctagon.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlertOctagon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlertOctagon.displayName = "AlertOctagon";

var _excluded$4h = ["color", "size"];
var AlertTriangle = /*#__PURE__*/React.forwardRef(function AlertTriangle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4h);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.29 3.85996L1.82001 18C1.64537 18.3024 1.55297 18.6453 1.55199 18.9945C1.55102 19.3437 1.6415 19.6871 1.81443 19.9905C1.98737 20.2939 2.23673 20.5467 2.53771 20.7238C2.8387 20.9009 3.1808 20.9961 3.53001 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.85996C13.5317 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3437 2.89722 12 2.89722C11.6563 2.89722 11.3183 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996V3.85996Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 17H12.01"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 9V13"
  }));
});
AlertTriangle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlertTriangle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlertTriangle.displayName = "AlertTriangle";

var _excluded$4g = ["color", "size"];
var AlignCenter = /*#__PURE__*/React.forwardRef(function AlignCenter(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4g);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 10H6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 6H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 14H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 18H6"
  }));
});
AlignCenter.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlignCenter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlignCenter.displayName = "AlignCenter";

var _excluded$4f = ["color", "size"];
var AlignJustify = /*#__PURE__*/React.forwardRef(function AlignJustify(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4f);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 10H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 6H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 14H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 18H3"
  }));
});
AlignJustify.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlignJustify.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlignJustify.displayName = "AlignJustify";

var _excluded$4e = ["color", "size"];
var AlignLeft = /*#__PURE__*/React.forwardRef(function AlignLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4e);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 10H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 6H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 14H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18H3"
  }));
});
AlignLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlignLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlignLeft.displayName = "AlignLeft";

var _excluded$4d = ["color", "size"];
var AlignRight = /*#__PURE__*/React.forwardRef(function AlignRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4d);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 10H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 6H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 14H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 18H7"
  }));
});
AlignRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AlignRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AlignRight.displayName = "AlignRight";

var _excluded$4c = ["color", "size"];
var Anchor = /*#__PURE__*/React.forwardRef(function Anchor(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4c);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22V8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12H2C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19"
  }));
});
Anchor.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Anchor.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Anchor.displayName = "Anchor";

var _excluded$4b = ["color", "size"];
var Aperture = /*#__PURE__*/React.forwardRef(function Aperture(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4b);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.31 8L20.05 17.94"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.69 8H21.17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7.38 12.0001L13.12 2.06006"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.69001 16L3.95001 6.06"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.31 16H2.82999"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.62 12L10.88 21.94"
  }));
});
Aperture.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Aperture.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Aperture.displayName = "Aperture";

var _excluded$4a = ["color", "size"];
var Archive = /*#__PURE__*/React.forwardRef(function Archive(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4a);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 8V21H3V8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 3H1V8H23V3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 12H14"
  }));
});
Archive.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Archive.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Archive.displayName = "Archive";

var _excluded$49 = ["color", "size"];
var ArrowDownCircle = /*#__PURE__*/React.forwardRef(function ArrowDownCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$49);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12L12 16L16 12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8V16"
  }));
});
ArrowDownCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowDownCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowDownCircle.displayName = "ArrowDownCircle";

var _excluded$48 = ["color", "size"];
var ArrowDownLeft = /*#__PURE__*/React.forwardRef(function ArrowDownLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$48);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 7L7 17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 17H7V7"
  }));
});
ArrowDownLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowDownLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowDownLeft.displayName = "ArrowDownLeft";

var _excluded$47 = ["color", "size"];
var ArrowDownRight = /*#__PURE__*/React.forwardRef(function ArrowDownRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$47);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 7L17 17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 7V17H7"
  }));
});
ArrowDownRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowDownRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowDownRight.displayName = "ArrowDownRight";

var _excluded$46 = ["color", "size"];
var ArrowDown = /*#__PURE__*/React.forwardRef(function ArrowDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$46);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 5V19"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 12L12 19L5 12"
  }));
});
ArrowDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowDown.displayName = "ArrowDown";

var _excluded$45 = ["color", "size"];
var ArrowLeftCircle = /*#__PURE__*/React.forwardRef(function ArrowLeftCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$45);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8L8 12L12 16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 12H8"
  }));
});
ArrowLeftCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowLeftCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowLeftCircle.displayName = "ArrowLeftCircle";

var _excluded$44 = ["color", "size"];
var ArrowLeft = /*#__PURE__*/React.forwardRef(function ArrowLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$44);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19L5 12L12 5"
  }));
});
ArrowLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowLeft.displayName = "ArrowLeft";

var _excluded$43 = ["color", "size"];
var ArrowRightCircle = /*#__PURE__*/React.forwardRef(function ArrowRightCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$43);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16L16 12L12 8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16"
  }));
});
ArrowRightCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowRightCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowRightCircle.displayName = "ArrowRightCircle";

var _excluded$42 = ["color", "size"];
var ArrowRight = /*#__PURE__*/React.forwardRef(function ArrowRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$42);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12H19"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 5L19 12L12 19"
  }));
});
ArrowRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowRight.displayName = "ArrowRight";

var _excluded$41 = ["color", "size"];
var ArrowUpCircle = /*#__PURE__*/React.forwardRef(function ArrowUpCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$41);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 12L12 8L8 12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16V8"
  }));
});
ArrowUpCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowUpCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowUpCircle.displayName = "ArrowUpCircle";

var _excluded$40 = ["color", "size"];
var ArrowUpLeft = /*#__PURE__*/React.forwardRef(function ArrowUpLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$40);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 17L7 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 17V7H17"
  }));
});
ArrowUpLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowUpLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowUpLeft.displayName = "ArrowUpLeft";

var _excluded$3$ = ["color", "size"];
var ArrowUpRight = /*#__PURE__*/React.forwardRef(function ArrowUpRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3$);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 17L17 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 7H17V17"
  }));
});
ArrowUpRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowUpRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowUpRight.displayName = "ArrowUpRight";

var _excluded$3_ = ["color", "size"];
var ArrowUp = /*#__PURE__*/React.forwardRef(function ArrowUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3_);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19V5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12L12 5L19 12"
  }));
});
ArrowUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ArrowUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ArrowUp.displayName = "ArrowUp";

var _excluded$3Z = ["color", "size"];
var AtSign = /*#__PURE__*/React.forwardRef(function AtSign(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3Z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2043 16 19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4705 2.77521 14.2726 2.26229C12.0747 1.74936 9.76793 1.99503 7.72734 2.95936C5.68676 3.92368 4.03239 5.54995 3.03325 7.57371C2.03411 9.59748 1.74896 11.8997 2.22416 14.1061C2.69936 16.3125 3.90697 18.2932 5.65062 19.7263C7.39428 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94"
  }));
});
AtSign.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
AtSign.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
AtSign.displayName = "AtSign";

var _excluded$3Y = ["color", "size"];
var Award = /*#__PURE__*/React.forwardRef(function Award(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3Y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
  }));
});
Award.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Award.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Award.displayName = "Award";

var _excluded$3X = ["color", "size"];
var BarChart2 = /*#__PURE__*/React.forwardRef(function BarChart2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3X);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 20V10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 20V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 20V14"
  }));
});
BarChart2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
BarChart2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
BarChart2.displayName = "BarChart2";

var _excluded$3W = ["color", "size"];
var BarChart = /*#__PURE__*/React.forwardRef(function BarChart(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3W);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 20V10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 20V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 20V16"
  }));
});
BarChart.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
BarChart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
BarChart.displayName = "BarChart";

var _excluded$3V = ["color", "size"];
var BatteryCharging = /*#__PURE__*/React.forwardRef(function BatteryCharging(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3V);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 13V11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 6L7 12H13L9 18"
  }));
});
BatteryCharging.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
BatteryCharging.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
BatteryCharging.displayName = "BatteryCharging";

var _excluded$3U = ["color", "size"];
var Battery = /*#__PURE__*/React.forwardRef(function Battery(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3U);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 6H3C1.89543 6 1 6.89543 1 8V16C1 17.1046 1.89543 18 3 18H17C18.1046 18 19 17.1046 19 16V8C19 6.89543 18.1046 6 17 6Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 13V11"
  }));
});
Battery.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Battery.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Battery.displayName = "Battery";

var _excluded$3T = ["color", "size"];
var BellOff = /*#__PURE__*/React.forwardRef(function BellOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3T);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.56 2.89997C9.62531 2.29886 10.8295 1.98739 12.0527 1.9966C13.2759 2.00581 14.4753 2.33538 15.5314 2.95247C16.5876 3.56956 17.4636 4.45263 18.0721 5.51369C18.6807 6.57476 19.0006 7.77677 19 8.99997V13M13.73 21C13.5542 21.3031 13.3018 21.5546 12.9982 21.7295C12.6946 21.9044 12.3504 21.9964 12 21.9964C11.6496 21.9964 11.3054 21.9044 11.0018 21.7295C10.6982 21.5546 10.4458 21.3031 10.27 21M17 17H2C2.79565 17 3.55871 16.6839 4.12132 16.1213C4.68393 15.5587 5 14.7956 5 14V8.99997C4.99859 7.87969 5.26608 6.77543 5.78 5.77997L17 17Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }));
});
BellOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
BellOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
BellOff.displayName = "BellOff";

var _excluded$3S = ["color", "size"];
var Bell = /*#__PURE__*/React.forwardRef(function Bell(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3S);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M22 17H2C2.79565 17 3.55871 16.6839 4.12132 16.1213C4.68393 15.5587 5 14.7956 5 14V9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9V14C19 14.7956 19.3161 15.5587 19.8787 16.1213C20.4413 16.6839 21.2044 17 22 17Z"
  }));
});
Bell.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Bell.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Bell.displayName = "Bell";

var _excluded$3R = ["color", "size"];
var Bluetooth = /*#__PURE__*/React.forwardRef(function Bluetooth(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3R);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.5 6.5L17.5 17.5L12 23V1L17.5 6.5L6.5 17.5"
  }));
});
Bluetooth.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Bluetooth.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Bluetooth.displayName = "Bluetooth";

var _excluded$3Q = ["color", "size"];
var Bold = /*#__PURE__*/React.forwardRef(function Bold(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3Q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 4H14C15.0609 4 16.0783 4.42143 16.8284 5.17157C17.5786 5.92172 18 6.93913 18 8C18 9.06087 17.5786 10.0783 16.8284 10.8284C16.0783 11.5786 15.0609 12 14 12H6V4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 12H15C16.0609 12 17.0783 12.4214 17.8284 13.1716C18.5786 13.9217 19 14.9391 19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20H6V12Z"
  }));
});
Bold.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Bold.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Bold.displayName = "Bold";

var _excluded$3P = ["color", "size"];
var BookOpen = /*#__PURE__*/React.forwardRef(function BookOpen(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3P);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
  }));
});
BookOpen.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
BookOpen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
BookOpen.displayName = "BookOpen";

var _excluded$3O = ["color", "size"];
var Book = /*#__PURE__*/React.forwardRef(function Book(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3O);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z"
  }));
});
Book.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Book.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Book.displayName = "Book";

var _excluded$3N = ["color", "size"];
var Bookmark = /*#__PURE__*/React.forwardRef(function Bookmark(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3N);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
  }));
});
Bookmark.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Bookmark.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Bookmark.displayName = "Bookmark";

var _excluded$3M = ["color", "size"];
var Box = /*#__PURE__*/React.forwardRef(function Box(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3M);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12.89 1.45003L20.89 5.45003C21.2232 5.6156 21.5036 5.87085 21.6997 6.18707C21.8958 6.50329 21.9998 6.86794 22 7.24003V16.77C21.9998 17.1421 21.8958 17.5068 21.6997 17.823C21.5036 18.1392 21.2232 18.3945 20.89 18.56L12.89 22.56C12.6121 22.6991 12.3057 22.7715 11.995 22.7715C11.6843 22.7715 11.3779 22.6991 11.1 22.56L3.1 18.56C2.76713 18.3923 2.48775 18.1349 2.29339 17.8168C2.09902 17.4988 1.99741 17.1328 2 16.76V7.24003C2.0002 6.86794 2.10419 6.50329 2.30028 6.18707C2.49637 5.87085 2.77679 5.6156 3.11 5.45003L11.11 1.45003C11.3866 1.3126 11.6912 1.24109 12 1.24109C12.3088 1.24109 12.6134 1.3126 12.89 1.45003V1.45003Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.32 6.15997L12 11L21.68 6.15997"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22.76V11"
  }));
});
Box.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Box.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Box.displayName = "Box";

var _excluded$3L = ["color", "size"];
var Briefcase = /*#__PURE__*/React.forwardRef(function Briefcase(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3L);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
  }));
});
Briefcase.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Briefcase.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Briefcase.displayName = "Briefcase";

var _excluded$3K = ["color", "size"];
var Calendar = /*#__PURE__*/React.forwardRef(function Calendar(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3K);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 2V6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 2V6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 10H21"
  }));
});
Calendar.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Calendar.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Calendar.displayName = "Calendar";

var _excluded$3J = ["color", "size"];
var CameraOff = /*#__PURE__*/React.forwardRef(function CameraOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3J);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V17.34M15.28 15.28C14.9481 15.765 14.5134 16.171 14.0068 16.469C13.5002 16.7669 12.9342 16.9496 12.3489 17.004C11.7637 17.0584 11.1737 16.9831 10.6209 16.7836C10.0681 16.5841 9.56601 16.2652 9.15042 15.8496C8.73483 15.434 8.41593 14.9319 8.2164 14.3791C8.01688 13.8263 7.94163 13.2363 7.99601 12.6511C8.05039 12.0658 8.23306 11.4998 8.53103 10.9932C8.829 10.4866 9.23495 10.0519 9.72 9.72M21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6L21 21Z"
  }));
});
CameraOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CameraOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CameraOff.displayName = "CameraOff";

var _excluded$3I = ["color", "size"];
var Camera = /*#__PURE__*/React.forwardRef(function Camera(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3I);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
  }));
});
Camera.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Camera.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Camera.displayName = "Camera";

var _excluded$3H = ["color", "size"];
var Cast = /*#__PURE__*/React.forwardRef(function Cast(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3H);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Cast.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Cast.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Cast.displayName = "Cast";

var _excluded$3G = ["color", "size"];
var CheckCircle = /*#__PURE__*/React.forwardRef(function CheckCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3G);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 4L12 14.01L9 11.01"
  }));
});
CheckCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CheckCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CheckCircle.displayName = "CheckCircle";

var _excluded$3F = ["color", "size"];
var CheckSquare = /*#__PURE__*/React.forwardRef(function CheckSquare(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3F);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 11L12 14L22 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
  }));
});
CheckSquare.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CheckSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CheckSquare.displayName = "CheckSquare";

var _excluded$3E = ["color", "size"];
var Check = /*#__PURE__*/React.forwardRef(function Check(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3E);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 6L9 17L4 12"
  }));
});
Check.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Check.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Check.displayName = "Check";

var _excluded$3D = ["color", "size"];
var ChevronDown = /*#__PURE__*/React.forwardRef(function ChevronDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3D);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9L12 15L18 9"
  }));
});
ChevronDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronDown.displayName = "ChevronDown";

var _excluded$3C = ["color", "size"];
var ChevronLeft = /*#__PURE__*/React.forwardRef(function ChevronLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3C);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 18L9 12L15 6"
  }));
});
ChevronLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronLeft.displayName = "ChevronLeft";

var _excluded$3B = ["color", "size"];
var ChevronRight = /*#__PURE__*/React.forwardRef(function ChevronRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3B);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 18L15 12L9 6"
  }));
});
ChevronRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronRight.displayName = "ChevronRight";

var _excluded$3A = ["color", "size"];
var ChevronUp = /*#__PURE__*/React.forwardRef(function ChevronUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3A);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 15L12 9L6 15"
  }));
});
ChevronUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronUp.displayName = "ChevronUp";

var _excluded$3z = ["color", "size"];
var ChevronsDown = /*#__PURE__*/React.forwardRef(function ChevronsDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 13L12 18L17 13"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 6L12 11L17 6"
  }));
});
ChevronsDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronsDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronsDown.displayName = "ChevronsDown";

var _excluded$3y = ["color", "size"];
var ChevronsLeft = /*#__PURE__*/React.forwardRef(function ChevronsLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 17L6 12L11 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 17L13 12L18 7"
  }));
});
ChevronsLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronsLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronsLeft.displayName = "ChevronsLeft";

var _excluded$3x = ["color", "size"];
var ChevronsRight = /*#__PURE__*/React.forwardRef(function ChevronsRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3x);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 17L18 12L13 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 17L11 12L6 7"
  }));
});
ChevronsRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronsRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronsRight.displayName = "ChevronsRight";

var _excluded$3w = ["color", "size"];
var ChevronsUp = /*#__PURE__*/React.forwardRef(function ChevronsUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3w);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 11L12 6L7 11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18L12 13L7 18"
  }));
});
ChevronsUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ChevronsUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ChevronsUp.displayName = "ChevronsUp";

var _excluded$3v = ["color", "size"];
var Chrome = /*#__PURE__*/React.forwardRef(function Chrome(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3v);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21.17 8H12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.95 6.06L8.54 14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.88 21.94L15.46 14"
  }));
});
Chrome.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Chrome.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Chrome.displayName = "Chrome";

var _excluded$3u = ["color", "size"];
var Circle = /*#__PURE__*/React.forwardRef(function Circle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3u);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }));
});
Circle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Circle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Circle.displayName = "Circle";

var _excluded$3t = ["color", "size"];
var Clipboard = /*#__PURE__*/React.forwardRef(function Clipboard(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3t);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
  }));
});
Clipboard.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Clipboard.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Clipboard.displayName = "Clipboard";

var _excluded$3s = ["color", "size"];
var Clock = /*#__PURE__*/React.forwardRef(function Clock(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3s);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 6V12L16 14"
  }));
});
Clock.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Clock.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Clock.displayName = "Clock";

var _excluded$3r = ["color", "size"];
var CloudDrizzle = /*#__PURE__*/React.forwardRef(function CloudDrizzle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3r);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 13V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 13V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 21V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15V17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8189 4.63797 14.9773 3.68982C14.1358 2.74167 13.0809 2.00709 11.8998 1.54664C10.7186 1.08619 9.44491 0.913035 8.18368 1.04146C6.92246 1.16989 5.70981 1.59622 4.6457 2.2853C3.58158 2.97439 2.69647 3.9065 2.06331 5.00482C1.43015 6.10313 1.06708 7.33619 1.00401 8.60237C0.940954 9.86855 1.17971 11.1316 1.70061 12.2874C2.2215 13.4432 3.00962 14.4586 4 15.25"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
CloudDrizzle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CloudDrizzle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CloudDrizzle.displayName = "CloudDrizzle";

var _excluded$3q = ["color", "size"];
var CloudLightning = /*#__PURE__*/React.forwardRef(function CloudLightning(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 16.9C20.2152 16.6532 21.2953 15.9638 22.0307 14.9655C22.7661 13.9671 23.1043 12.7312 22.9797 11.4975C22.8551 10.2638 22.2765 9.12046 21.3563 8.28937C20.4361 7.45828 19.24 6.99875 18 6.99999H16.74C16.4087 5.71731 15.764 4.53698 14.8639 3.56498C13.9638 2.59298 12.8363 1.85972 11.5828 1.43106C10.3293 1.00239 8.98898 0.891726 7.68214 1.109C6.3753 1.32628 5.14287 1.86469 4.09551 2.6759C3.04814 3.48711 2.21863 4.54573 1.68144 5.75671C1.14424 6.96768 0.916192 8.29311 1.01776 9.61399C1.11932 10.9349 1.54732 12.2098 2.26332 13.3245C2.97933 14.4391 3.96093 15.3584 5.12 16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 11L9 17H15L11 23"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
CloudLightning.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CloudLightning.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CloudLightning.displayName = "CloudLightning";

var _excluded$3p = ["color", "size"];
var CloudOff = /*#__PURE__*/React.forwardRef(function CloudOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3p);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.61 16.95C22.9322 16.1893 23.0609 15.3606 22.9845 14.5381C22.9082 13.7155 22.6293 12.9246 22.1726 12.2362C21.716 11.5478 21.0959 10.9832 20.3677 10.593C19.6396 10.2027 18.8261 9.99902 18 10H16.74C16.3318 8.39249 15.4341 6.95158 14.171 5.87666C12.908 4.80173 11.3421 4.14593 9.68999 4M4.99999 5C3.43807 5.86364 2.2098 7.22478 1.51058 8.86691C0.811359 10.509 0.681344 12.3378 1.14122 14.0623C1.60109 15.7869 2.62444 17.3081 4.04847 18.384C5.47251 19.4599 7.21543 20.0288 8.99999 20H18C18.5798 19.9993 19.155 19.8978 19.7 19.7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
CloudOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CloudOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CloudOff.displayName = "CloudOff";

var _excluded$3o = ["color", "size"];
var CloudRain = /*#__PURE__*/React.forwardRef(function CloudRain(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3o);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 13V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 13V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8189 4.63797 14.9773 3.68982C14.1358 2.74167 13.0809 2.00709 11.8998 1.54664C10.7186 1.08619 9.44491 0.913035 8.18368 1.04146C6.92246 1.16989 5.70981 1.59622 4.6457 2.2853C3.58158 2.97439 2.69647 3.9065 2.06331 5.00482C1.43015 6.10313 1.06708 7.33619 1.00401 8.60237C0.940954 9.86855 1.17971 11.1316 1.70061 12.2874C2.2215 13.4432 3.00962 14.4586 4 15.25"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
CloudRain.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CloudRain.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CloudRain.displayName = "CloudRain";

var _excluded$3n = ["color", "size"];
var CloudSnow = /*#__PURE__*/React.forwardRef(function CloudSnow(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3n);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 17.58C21.0512 17.1196 21.9121 16.3116 22.4381 15.2916C22.9641 14.2715 23.1231 13.1016 22.8886 11.9782C22.6541 10.8548 22.0402 9.84623 21.15 9.12185C20.2599 8.39748 19.1476 8.00137 18 8.00002H16.74C16.423 6.77254 15.8189 5.63797 14.9773 4.68982C14.1358 3.74167 13.0809 3.00709 11.8998 2.54664C10.7186 2.08618 9.44491 1.91304 8.18368 2.04146C6.92246 2.16989 5.70981 2.59622 4.6457 3.2853C3.58158 3.97439 2.69647 4.9065 2.06331 6.00482C1.43015 7.10313 1.06708 8.33619 1.00401 9.60237C0.940954 10.8685 1.17971 12.1316 1.70061 13.2874C2.2215 14.4432 3.00962 15.4586 4 16.25"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
CloudSnow.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CloudSnow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CloudSnow.displayName = "CloudSnow";

var _excluded$3m = ["color", "size"];
var Cloud = /*#__PURE__*/React.forwardRef(function Cloud(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3m);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14113 3.86256 7.6201 3.97804 6.21666 4.49759C4.81322 5.01714 3.58364 5.91993 2.66766 7.10338C1.75167 8.28683 1.18599 9.70348 1.03491 11.1924C0.883828 12.6812 1.15339 14.1826 1.81298 15.526C2.47256 16.8693 3.49572 18.0007 4.76619 18.7916C6.03665 19.5824 7.50348 20.0011 9 20H18C19.3261 20 20.5979 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5979 10.5268 19.3261 10 18 10Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Cloud.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Cloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Cloud.displayName = "Cloud";

var _excluded$3l = ["color", "size"];
var Code = /*#__PURE__*/React.forwardRef(function Code(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3l);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 18L22 12L16 6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 6L2 12L8 18"
  }));
});
Code.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Code.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Code.displayName = "Code";

var _excluded$3k = ["color", "size"];
var Codepen = /*#__PURE__*/React.forwardRef(function Codepen(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3k);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22V15.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 8.5L12 15.5L2 8.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 15.5L12 8.5L22 15.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2V8.5"
  }));
});
Codepen.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Codepen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Codepen.displayName = "Codepen";

var _excluded$3j = ["color", "size"];
var Coffee = /*#__PURE__*/React.forwardRef(function Coffee(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3j);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 1V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 1V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 1V4"
  }));
});
Coffee.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Coffee.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Coffee.displayName = "Coffee";

var _excluded$3i = ["color", "size"];
var Command = /*#__PURE__*/React.forwardRef(function Command(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3i);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z"
  }));
});
Command.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Command.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Command.displayName = "Command";

var _excluded$3h = ["color", "size"];
var Compass = /*#__PURE__*/React.forwardRef(function Compass(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3h);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.24 7.76001L14.12 14.12L7.76 16.24L9.88 9.88001L16.24 7.76001Z"
  }));
});
Compass.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Compass.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Compass.displayName = "Compass";

var _excluded$3g = ["color", "size"];
var Copy = /*#__PURE__*/React.forwardRef(function Copy(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3g);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
  }));
});
Copy.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Copy.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Copy.displayName = "Copy";

var _excluded$3f = ["color", "size"];
var CornerDownLeft = /*#__PURE__*/React.forwardRef(function CornerDownLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3f);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 10L4 15L9 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 4V11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15H4"
  }));
});
CornerDownLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerDownLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerDownLeft.displayName = "CornerDownLeft";

var _excluded$3e = ["color", "size"];
var CornerDownRight = /*#__PURE__*/React.forwardRef(function CornerDownRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3e);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 10L20 15L15 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20"
  }));
});
CornerDownRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerDownRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerDownRight.displayName = "CornerDownRight";

var _excluded$3d = ["color", "size"];
var CornerLeftDown = /*#__PURE__*/React.forwardRef(function CornerLeftDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3d);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 15L9 20L4 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 4H13C11.9391 4 10.9217 4.42143 10.1716 5.17157C9.42143 5.92172 9 6.93913 9 8V20"
  }));
});
CornerLeftDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerLeftDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerLeftDown.displayName = "CornerLeftDown";

var _excluded$3c = ["color", "size"];
var CornerLeftUp = /*#__PURE__*/React.forwardRef(function CornerLeftUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3c);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 9L9 4L4 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 20H13C11.9391 20 10.9217 19.5786 10.1716 18.8284C9.42143 18.0783 9 17.0609 9 16V4"
  }));
});
CornerLeftUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerLeftUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerLeftUp.displayName = "CornerLeftUp";

var _excluded$3b = ["color", "size"];
var CornerRightDown = /*#__PURE__*/React.forwardRef(function CornerRightDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3b);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 15L15 20L20 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4H11C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8V20"
  }));
});
CornerRightDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerRightDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerRightDown.displayName = "CornerRightDown";

var _excluded$3a = ["color", "size"];
var CornerRightUp = /*#__PURE__*/React.forwardRef(function CornerRightUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3a);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 9L15 4L20 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4"
  }));
});
CornerRightUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerRightUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerRightUp.displayName = "CornerRightUp";

var _excluded$39 = ["color", "size"];
var CornerUpLeft = /*#__PURE__*/React.forwardRef(function CornerUpLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$39);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 14L4 9L9 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
  }));
});
CornerUpLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerUpLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerUpLeft.displayName = "CornerUpLeft";

var _excluded$38 = ["color", "size"];
var CornerUpRight = /*#__PURE__*/React.forwardRef(function CornerUpRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$38);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 14L20 9L15 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20"
  }));
});
CornerUpRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CornerUpRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CornerUpRight.displayName = "CornerUpRight";

var _excluded$37 = ["color", "size"];
var Cpu = /*#__PURE__*/React.forwardRef(function Cpu(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$37);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9H9V15H15V9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 1V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 1V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 20V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 20V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 9H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 14H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 9H4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 14H4"
  }));
});
Cpu.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Cpu.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Cpu.displayName = "Cpu";

var _excluded$36 = ["color", "size"];
var CreditCard = /*#__PURE__*/React.forwardRef(function CreditCard(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$36);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 10H23"
  }));
});
CreditCard.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
CreditCard.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
CreditCard.displayName = "CreditCard";

var _excluded$35 = ["color", "size"];
var Crop = /*#__PURE__*/React.forwardRef(function Crop(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$35);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.13 1L6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 6.13L16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V23"
  }));
});
Crop.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Crop.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Crop.displayName = "Crop";

var _excluded$34 = ["color", "size"];
var Crosshair = /*#__PURE__*/React.forwardRef(function Crosshair(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$34);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 12H18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 12H2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 6V2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22V18"
  }));
});
Crosshair.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Crosshair.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Crosshair.displayName = "Crosshair";

var _excluded$33 = ["color", "size"];
var Database = /*#__PURE__*/React.forwardRef(function Database(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$33);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 5V19C3 20.66 7 22 12 22C17 22 21 20.66 21 19V5"
  }));
});
Database.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Database.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Database.displayName = "Database";

var _excluded$32 = ["color", "size"];
var Delete = /*#__PURE__*/React.forwardRef(function Delete(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$32);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4V4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 9L12 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 9L18 15"
  }));
});
Delete.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Delete.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Delete.displayName = "Delete";

var _excluded$31 = ["color", "size"];
var Disc = /*#__PURE__*/React.forwardRef(function Disc(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$31);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  }));
});
Disc.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Disc.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Disc.displayName = "Disc";

var _excluded$30 = ["color", "size"];
var DollarSign = /*#__PURE__*/React.forwardRef(function DollarSign(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$30);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 1V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
  }));
});
DollarSign.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
DollarSign.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
DollarSign.displayName = "DollarSign";

var _excluded$2$ = ["color", "size"];
var DownloadCloud = /*#__PURE__*/React.forwardRef(function DownloadCloud(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2$);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 17L12 21L16 17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 12V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.88 18.09C21.7494 17.4786 22.4014 16.6061 22.7413 15.5991C23.0812 14.5921 23.0914 13.503 22.7704 12.4898C22.4494 11.4766 21.8139 10.5921 20.9561 9.96456C20.0983 9.33703 19.0628 8.99916 18 8.99999H16.74C16.4392 7.82787 15.8765 6.73924 15.0941 5.81607C14.3118 4.89291 13.3301 4.15925 12.2232 3.67035C11.1163 3.18144 9.91285 2.95002 8.70353 2.99351C7.49421 3.037 6.31051 3.35426 5.24155 3.92142C4.17259 4.48858 3.24623 5.29084 2.53219 6.26782C1.81815 7.2448 1.33505 8.37104 1.11926 9.56174C0.903472 10.7524 0.960612 11.9766 1.28638 13.142C1.61215 14.3074 2.19806 15.3838 3 16.29"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
DownloadCloud.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
DownloadCloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
DownloadCloud.displayName = "DownloadCloud";

var _excluded$2_ = ["color", "size"];
var Download = /*#__PURE__*/React.forwardRef(function Download(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2_);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 10L12 15L17 10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15V3"
  }));
});
Download.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Download.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Download.displayName = "Download";

var _excluded$2Z = ["color", "size"];
var Drag = /*#__PURE__*/React.forwardRef(function Drag(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2Z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20Z"
  }));
});
Drag.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Drag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Drag.displayName = "Drag";

var _excluded$2Y = ["color", "size"];
var Droplet = /*#__PURE__*/React.forwardRef(function Droplet(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2Y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2.69L17.66 8.35C18.7793 9.46861 19.5418 10.8941 19.8509 12.4461C20.16 13.998 20.0019 15.6069 19.3965 17.069C18.7912 18.5311 17.7658 19.7808 16.4501 20.6601C15.1344 21.5394 13.5875 22.0087 12.005 22.0087C10.4225 22.0087 8.8756 21.5394 7.55989 20.6601C6.24419 19.7808 5.21881 18.5311 4.61346 17.069C4.00812 15.6069 3.85 13.998 4.1591 12.4461C4.46821 10.8941 5.23066 9.46861 6.35 8.35L12 2.69Z"
  }));
});
Droplet.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Droplet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Droplet.displayName = "Droplet";

var _excluded$2X = ["color", "size"];
var Edit2 = /*#__PURE__*/React.forwardRef(function Edit2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2X);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 3L21 8L8 21H3V16L16 3Z"
  }));
});
Edit2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Edit2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Edit2.displayName = "Edit2";

var _excluded$2W = ["color", "size"];
var Edit3 = /*#__PURE__*/React.forwardRef(function Edit3(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2W);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2L18 6L7 17H3V13L14 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 22H21"
  }));
});
Edit3.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Edit3.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Edit3.displayName = "Edit3";

var _excluded$2V = ["color", "size"];
var Edit = /*#__PURE__*/React.forwardRef(function Edit(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2V);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 14.66V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.34"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 2L22 6L12 16H8V12L18 2Z"
  }));
});
Edit.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Edit.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Edit.displayName = "Edit";

var _excluded$2U = ["color", "size"];
var ExternalLink = /*#__PURE__*/React.forwardRef(function ExternalLink(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2U);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 3H21V9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 14L21 3"
  }));
});
ExternalLink.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ExternalLink.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ExternalLink.displayName = "ExternalLink";

var _excluded$2T = ["color", "size"];
var EyeOff = /*#__PURE__*/React.forwardRef(function EyeOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2T);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }));
});
EyeOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
EyeOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
EyeOff.displayName = "EyeOff";

var _excluded$2S = ["color", "size"];
var Eye = /*#__PURE__*/React.forwardRef(function Eye(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2S);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  }));
});
Eye.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Eye.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Eye.displayName = "Eye";

var _excluded$2R = ["color", "size"];
var Facebook = /*#__PURE__*/React.forwardRef(function Facebook(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2R);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
  }));
});
Facebook.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Facebook.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Facebook.displayName = "Facebook";

var _excluded$2Q = ["color", "size"];
var FastForward = /*#__PURE__*/React.forwardRef(function FastForward(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2Q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 19L22 12L13 5V19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 19L11 12L2 5V19Z"
  }));
});
FastForward.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
FastForward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
FastForward.displayName = "FastForward";

var _excluded$2P = ["color", "size"];
var Feather = /*#__PURE__*/React.forwardRef(function Feather(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2P);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.24 12.24C21.3658 11.1141 21.9983 9.58716 21.9983 7.99497C21.9983 6.40279 21.3658 4.87582 20.24 3.74997C19.1142 2.62413 17.5872 1.99164 15.995 1.99164C14.4028 1.99164 12.8758 2.62413 11.75 3.74997L5 10.5V19H13.5L20.24 12.24Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 8L2 22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17.5 15H9"
  }));
});
Feather.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Feather.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Feather.displayName = "Feather";

var _excluded$2O = ["color", "size"];
var FileMinus = /*#__PURE__*/React.forwardRef(function FileMinus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2O);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2V8H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 15H15"
  }));
});
FileMinus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
FileMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
FileMinus.displayName = "FileMinus";

var _excluded$2N = ["color", "size"];
var FilePlus = /*#__PURE__*/React.forwardRef(function FilePlus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2N);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2V8H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 18V12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 15H15"
  }));
});
FilePlus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
FilePlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
FilePlus.displayName = "FilePlus";

var _excluded$2M = ["color", "size"];
var FileText = /*#__PURE__*/React.forwardRef(function FileText(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2M);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2V8H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 13H8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 17H8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 9H9H8"
  }));
});
FileText.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
FileText.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
FileText.displayName = "FileText";

var _excluded$2L = ["color", "size"];
var File = /*#__PURE__*/React.forwardRef(function File(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2L);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 2V9H20"
  }));
});
File.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
File.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
File.displayName = "File";

var _excluded$2K = ["color", "size"];
var Film = /*#__PURE__*/React.forwardRef(function Film(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2K);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 2V22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 2V22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 12H22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 7H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 17H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 17H22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 7H22"
  }));
});
Film.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Film.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Film.displayName = "Film";

var _excluded$2J = ["color", "size"];
var Filter = /*#__PURE__*/React.forwardRef(function Filter(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2J);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
  }));
});
Filter.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Filter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Filter.displayName = "Filter";

var _excluded$2I = ["color", "size"];
var Flag = /*#__PURE__*/React.forwardRef(function Flag(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2I);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 22V15"
  }));
});
Flag.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Flag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Flag.displayName = "Flag";

var _excluded$2H = ["color", "size"];
var FolderMinus = /*#__PURE__*/React.forwardRef(function FolderMinus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2H);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 14H15"
  }));
});
FolderMinus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
FolderMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
FolderMinus.displayName = "FolderMinus";

var _excluded$2G = ["color", "size"];
var FolderPlus = /*#__PURE__*/React.forwardRef(function FolderPlus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2G);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 11V17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 14H15"
  }));
});
FolderPlus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
FolderPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
FolderPlus.displayName = "FolderPlus";

var _excluded$2F = ["color", "size"];
var Folder = /*#__PURE__*/React.forwardRef(function Folder(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2F);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
  }));
});
Folder.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Folder.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Folder.displayName = "Folder";

var _excluded$2E = ["color", "size"];
var Frown = /*#__PURE__*/React.forwardRef(function Frown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2E);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 9H9.01"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9H15.01"
  }));
});
Frown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Frown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Frown.displayName = "Frown";

var _excluded$2D = ["color", "size"];
var Gift = /*#__PURE__*/React.forwardRef(function Gift(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2D);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 12V22H4V12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 7H2V12H22V7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22V7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
  }));
});
Gift.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Gift.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Gift.displayName = "Gift";

var _excluded$2C = ["color", "size"];
var GitBranch = /*#__PURE__*/React.forwardRef(function GitBranch(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2C);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 3V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18"
  }));
});
GitBranch.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
GitBranch.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
GitBranch.displayName = "GitBranch";

var _excluded$2B = ["color", "size"];
var GitCommit = /*#__PURE__*/React.forwardRef(function GitCommit(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2B);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1.04999 12H6.99999"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17.01 12H22.96"
  }));
});
GitCommit.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
GitCommit.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
GitCommit.displayName = "GitCommit";

var _excluded$2A = ["color", "size"];
var GitMerge = /*#__PURE__*/React.forwardRef(function GitMerge(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2A);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 21V9C6 11.3869 6.94821 13.6761 8.63604 15.364C10.3239 17.0518 12.6131 18 15 18"
  }));
});
GitMerge.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
GitMerge.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
GitMerge.displayName = "GitMerge";

var _excluded$2z = ["color", "size"];
var GitPullRequest = /*#__PURE__*/React.forwardRef(function GitPullRequest(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9V21"
  }));
});
GitPullRequest.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
GitPullRequest.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
GitPullRequest.displayName = "GitPullRequest";

var _excluded$2y = ["color", "size"];
var Github = /*#__PURE__*/React.forwardRef(function Github(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Github.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Github.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Github.displayName = "Github";

var _excluded$2x = ["color", "size"];
var Gitlab = /*#__PURE__*/React.forwardRef(function Gitlab(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2x);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.65 14.39L12 22.13L1.35 14.39C1.20722 14.285 1.10132 14.1375 1.04743 13.9687C0.993549 13.7998 0.994447 13.6183 1.05 13.45L2.27 9.66999L4.71 2.15999C4.73367 2.0988 4.77134 2.044 4.82 1.99999C4.89924 1.92761 5.00268 1.88748 5.11 1.88748C5.21732 1.88748 5.32076 1.92761 5.4 1.99999C5.45138 2.04966 5.48924 2.11161 5.51 2.17999L7.95 9.66999H16.05L18.49 2.15999C18.5137 2.0988 18.5513 2.044 18.6 1.99999C18.6792 1.92761 18.7827 1.88748 18.89 1.88748C18.9973 1.88748 19.1008 1.92761 19.18 1.99999C19.2314 2.04966 19.2692 2.11161 19.29 2.17999L21.73 9.68999L23 13.45C23.0505 13.6235 23.0438 13.8086 22.9807 13.978C22.9177 14.1473 22.8017 14.2918 22.65 14.39Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Gitlab.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Gitlab.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Gitlab.displayName = "Gitlab";

var _excluded$2w = ["color", "size"];
var Globe = /*#__PURE__*/React.forwardRef(function Globe(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2w);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 12H22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
  }));
});
Globe.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Globe.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Globe.displayName = "Globe";

var _excluded$2v = ["color", "size"];
var Grid = /*#__PURE__*/React.forwardRef(function Grid(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2v);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 3H3V10H10V3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 3H14V10H21V3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 14H14V21H21V14Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 14H3V21H10V14Z"
  }));
});
Grid.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Grid.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Grid.displayName = "Grid";

var _excluded$2u = ["color", "size"];
var HardDrive = /*#__PURE__*/React.forwardRef(function HardDrive(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2u);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 12H2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
HardDrive.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
HardDrive.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
HardDrive.displayName = "HardDrive";

var _excluded$2t = ["color", "size"];
var Hash = /*#__PURE__*/React.forwardRef(function Hash(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2t);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 9H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 15H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 3L8 21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 3L14 21"
  }));
});
Hash.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Hash.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Hash.displayName = "Hash";

var _excluded$2s = ["color", "size"];
var Headphones = /*#__PURE__*/React.forwardRef(function Headphones(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2s);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
  }));
});
Headphones.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Headphones.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Headphones.displayName = "Headphones";

var _excluded$2r = ["color", "size"];
var Heart = /*#__PURE__*/React.forwardRef(function Heart(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2r);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
  }));
});
Heart.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Heart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Heart.displayName = "Heart";

var _excluded$2q = ["color", "size"];
var HelpCircle = /*#__PURE__*/React.forwardRef(function HelpCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.09 8.99999C9.3251 8.33166 9.78915 7.7681 10.4 7.40912C11.0108 7.05015 11.7289 6.91893 12.4272 7.0387C13.1255 7.15848 13.7588 7.52151 14.2151 8.06352C14.6713 8.60552 14.9211 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 17H12.01"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
HelpCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
HelpCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
HelpCircle.displayName = "HelpCircle";

var _excluded$2p = ["color", "size"];
var Home = /*#__PURE__*/React.forwardRef(function Home(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2p);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 22V12H15V22"
  }));
});
Home.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Home.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Home.displayName = "Home";

var _excluded$2o = ["color", "size"];
var Image = /*#__PURE__*/React.forwardRef(function Image(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2o);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15L16 10L5 21"
  }));
});
Image.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Image.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Image.displayName = "Image";

var _excluded$2n = ["color", "size"];
var Inbox = /*#__PURE__*/React.forwardRef(function Inbox(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2n);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 12H16L14 15H10L8 12H2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z"
  }));
});
Inbox.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Inbox.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Inbox.displayName = "Inbox";

var _excluded$2m = ["color", "size"];
var Info = /*#__PURE__*/React.forwardRef(function Info(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2m);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16V12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8H12.01"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Info.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Info.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Info.displayName = "Info";

var _excluded$2l = ["color", "size"];
var Instagram = /*#__PURE__*/React.forwardRef(function Instagram(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2l);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Instagram.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Instagram.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Instagram.displayName = "Instagram";

var _excluded$2k = ["color", "size"];
var Italic = /*#__PURE__*/React.forwardRef(function Italic(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2k);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 4H10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 20H5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 4L9 20"
  }));
});
Italic.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Italic.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Italic.displayName = "Italic";

var _excluded$2j = ["color", "size"];
var Key = /*#__PURE__*/React.forwardRef(function Key(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2j);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 2L19 4M11.3891 11.6109C12.3844 12.6062 13 13.9812 13 15.5C13 18.5376 10.5376 21 7.5 21C4.46244 21 2 18.5376 2 15.5C2 12.4624 4.46244 10 7.5 10C9.01878 10 10.3938 10.6156 11.3891 11.6109ZM11.3891 11.6109L15.5 7.5M15.5 7.5L18.5 10.5L22 6.99999L19 4M15.5 7.5L19 4"
  }));
});
Key.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Key.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Key.displayName = "Key";

var _excluded$2i = ["color", "size"];
var Layers = /*#__PURE__*/React.forwardRef(function Layers(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2i);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2L2 7L12 12L22 7L12 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 17L12 22L22 17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 12L12 17L22 12"
  }));
});
Layers.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Layers.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Layers.displayName = "Layers";

var _excluded$2h = ["color", "size"];
var Layout = /*#__PURE__*/React.forwardRef(function Layout(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2h);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 9H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 21V9"
  }));
});
Layout.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Layout.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Layout.displayName = "Layout";

var _excluded$2g = ["color", "size"];
var LifeBuoy = /*#__PURE__*/React.forwardRef(function LifeBuoy(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2g);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.92999 4.92999L9.16999 9.16999"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.83 14.83L19.07 19.07"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.83 9.16999L19.07 4.92999"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.83 9.17001L18.36 5.64001"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.92999 19.07L9.16999 14.83"
  }));
});
LifeBuoy.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
LifeBuoy.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
LifeBuoy.displayName = "LifeBuoy";

var _excluded$2f = ["color", "size"];
var Link2 = /*#__PURE__*/React.forwardRef(function Link2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2f);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 17H6C5.34339 17 4.69321 16.8707 4.08658 16.6194C3.47995 16.3681 2.92876 15.9998 2.46447 15.5355C1.52678 14.5979 1 13.3261 1 12C1 10.6739 1.52678 9.40215 2.46447 8.46447C3.40215 7.52678 4.67392 7 6 7H9M15 7H18C18.6566 7 19.3068 7.12933 19.9134 7.3806C20.52 7.63188 21.0712 8.00017 21.5355 8.46447C21.9998 8.92876 22.3681 9.47996 22.6194 10.0866C22.8707 10.6932 23 11.3434 23 12C23 12.6566 22.8707 13.3068 22.6194 13.9134C22.3681 14.52 21.9998 15.0712 21.5355 15.5355C21.0712 15.9998 20.52 16.3681 19.9134 16.6194C19.3068 16.8707 18.6566 17 18 17H15V7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16"
  }));
});
Link2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Link2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Link2.displayName = "Link2";

var _excluded$2e = ["color", "size"];
var Link = /*#__PURE__*/React.forwardRef(function Link(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2e);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 11C13.5705 10.4259 13.0226 9.95083 12.3935 9.60707C11.7643 9.26331 11.0685 9.05889 10.3534 9.00768C9.63821 8.95646 8.92041 9.05964 8.24866 9.31023C7.5769 9.56082 6.96689 9.95294 6.46 10.46L3.46 13.46C2.54921 14.403 2.04524 15.666 2.05663 16.977C2.06802 18.288 2.59387 19.5421 3.52091 20.4691C4.44795 21.3961 5.70201 21.922 7.013 21.9334C8.32398 21.9448 9.58699 21.4408 10.53 20.53L12.24 18.82"
  }));
});
Link.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Link.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Link.displayName = "Link";

var _excluded$2d = ["color", "size"];
var Linkedin = /*#__PURE__*/React.forwardRef(function Linkedin(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2d);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9H2V21H6V9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
  }));
});
Linkedin.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Linkedin.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Linkedin.displayName = "Linkedin";

var _excluded$2c = ["color", "size"];
var List = /*#__PURE__*/React.forwardRef(function List(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2c);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 6H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 18H21"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
List.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
List.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
List.displayName = "List";

var _excluded$2b = ["color", "size"];
var Loader = /*#__PURE__*/React.forwardRef(function Loader(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2b);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2V6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 18V22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.93 4.92999L7.76 7.75999"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.24 16.24L19.07 19.07"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 12H6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 12H22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.93 19.07L7.76 16.24"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.24 7.75999L19.07 4.92999"
  }));
});
Loader.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Loader.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Loader.displayName = "Loader";

var _excluded$2a = ["color", "size"];
var Lock = /*#__PURE__*/React.forwardRef(function Lock(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2a);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
  }));
});
Lock.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Lock.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Lock.displayName = "Lock";

var _excluded$29 = ["color", "size"];
var LogIn = /*#__PURE__*/React.forwardRef(function LogIn(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$29);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 17L15 12L10 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 12H3"
  }));
});
LogIn.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
LogIn.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
LogIn.displayName = "LogIn";

var _excluded$28 = ["color", "size"];
var LogOut = /*#__PURE__*/React.forwardRef(function LogOut(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$28);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 17L21 12L16 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12H9"
  }));
});
LogOut.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
LogOut.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
LogOut.displayName = "LogOut";

var _excluded$27 = ["color", "size"];
var Loudspeaker = /*#__PURE__*/React.forwardRef(function Loudspeaker(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$27);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 20L10 5L14 10L18 15L2 20Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 19L7.22427 19.4485C7.66938 20.3388 8.70135 20.7662 9.64558 20.4515L11.8787 19.7071C12.9983 19.3339 13.5278 18.0556 13 17V17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 6L21 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 4L14.5 2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 11H22"
  }));
});
Loudspeaker.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Loudspeaker.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Loudspeaker.displayName = "Loudspeaker";

var _excluded$26 = ["color", "size"];
var Mail = /*#__PURE__*/React.forwardRef(function Mail(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$26);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 6L12 13L2 6"
  }));
});
Mail.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Mail.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Mail.displayName = "Mail";

var _excluded$25 = ["color", "size"];
var MapPin = /*#__PURE__*/React.forwardRef(function MapPin(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$25);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
  }));
});
MapPin.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MapPin.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MapPin.displayName = "MapPin";

var _excluded$24 = ["color", "size"];
var Map = /*#__PURE__*/React.forwardRef(function Map(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$24);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 2V18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 6V22"
  }));
});
Map.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Map.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Map.displayName = "Map";

var _excluded$23 = ["color", "size"];
var Maximize2 = /*#__PURE__*/React.forwardRef(function Maximize2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$23);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 3H21V9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 21H3V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 3L14 10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 21L10 14"
  }));
});
Maximize2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Maximize2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Maximize2.displayName = "Maximize2";

var _excluded$22 = ["color", "size"];
var Maximize = /*#__PURE__*/React.forwardRef(function Maximize(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$22);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8"
  }));
});
Maximize.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Maximize.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Maximize.displayName = "Maximize";

var _excluded$21 = ["color", "size"];
var Meh = /*#__PURE__*/React.forwardRef(function Meh(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$21);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 15H16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 9H9.01"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9H15.01"
  }));
});
Meh.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Meh.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Meh.displayName = "Meh";

var _excluded$20 = ["color", "size"];
var Menu = /*#__PURE__*/React.forwardRef(function Menu(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$20);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 12H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 6H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 18H21"
  }));
});
Menu.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Menu.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Menu.displayName = "Menu";

var _excluded$1$ = ["color", "size"];
var MessageCircle = /*#__PURE__*/React.forwardRef(function MessageCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1$);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7117 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94695 20.885 8.91565 21 11V11.5Z"
  }));
});
MessageCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MessageCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MessageCircle.displayName = "MessageCircle";

var _excluded$1_ = ["color", "size"];
var MessageSquare = /*#__PURE__*/React.forwardRef(function MessageSquare(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1_);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
  }));
});
MessageSquare.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MessageSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MessageSquare.displayName = "MessageSquare";

var _excluded$1Z = ["color", "size"];
var MicOff = /*#__PURE__*/React.forwardRef(function MicOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1Z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9.34V4C15.0007 3.25603 14.725 2.53832 14.2264 1.9862C13.7277 1.43408 13.0417 1.08694 12.3015 1.01217C11.5613 0.937406 10.8197 1.14034 10.2207 1.58159C9.62172 2.02283 9.20805 2.67091 9.06 3.4M9 9V12C9.00052 12.593 9.17675 13.1725 9.50643 13.6653C9.83611 14.1582 10.3045 14.5423 10.8523 14.7691C11.4002 14.996 12.0029 15.0554 12.5845 14.9399C13.1661 14.8243 13.7005 14.539 14.12 14.12L9 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 16.95C16.0238 17.9464 14.7721 18.6285 13.4056 18.9086C12.0391 19.1887 10.62 19.0542 9.3305 18.5223C8.04096 17.9903 6.93976 17.0853 6.16817 15.9232C5.39658 14.761 4.9898 13.3949 5 12V10M19 10V12C18.9996 12.4124 18.9628 12.824 18.89 13.23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 23H16"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
MicOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MicOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MicOff.displayName = "MicOff";

var _excluded$1Y = ["color", "size"];
var Mic = /*#__PURE__*/React.forwardRef(function Mic(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1Y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1V1Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 23H16"
  }));
});
Mic.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Mic.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Mic.displayName = "Mic";

var _excluded$1X = ["color", "size"];
var Minimize2 = /*#__PURE__*/React.forwardRef(function Minimize2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1X);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 14H10V20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 10H14V4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 10L21 3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 21L10 14"
  }));
});
Minimize2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Minimize2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Minimize2.displayName = "Minimize2";

var _excluded$1W = ["color", "size"];
var Minimize = /*#__PURE__*/React.forwardRef(function Minimize(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1W);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 3V6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8H3M21 8H18C17.4696 8 16.9609 7.78929 16.5858 7.41421C16.2107 7.03914 16 6.53043 16 6V3M16 21V18C16 17.4696 16.2107 16.9609 16.5858 16.5858C16.9609 16.2107 17.4696 16 18 16H21M3 16H6C6.53043 16 7.03914 16.2107 7.41421 16.5858C7.78929 16.9609 8 17.4696 8 18V21"
  }));
});
Minimize.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Minimize.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Minimize.displayName = "Minimize";

var _excluded$1V = ["color", "size"];
var MinusCircle = /*#__PURE__*/React.forwardRef(function MinusCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1V);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16"
  }));
});
MinusCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MinusCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MinusCircle.displayName = "MinusCircle";

var _excluded$1U = ["color", "size"];
var MinusSquare = /*#__PURE__*/React.forwardRef(function MinusSquare(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1U);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16"
  }));
});
MinusSquare.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MinusSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MinusSquare.displayName = "MinusSquare";

var _excluded$1T = ["color", "size"];
var Minus = /*#__PURE__*/React.forwardRef(function Minus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1T);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12H19"
  }));
});
Minus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Minus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Minus.displayName = "Minus";

var _excluded$1S = ["color", "size"];
var Monitor = /*#__PURE__*/React.forwardRef(function Monitor(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1S);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 21H16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 17V21"
  }));
});
Monitor.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Monitor.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Monitor.displayName = "Monitor";

var _excluded$1R = ["color", "size"];
var Moon = /*#__PURE__*/React.forwardRef(function Moon(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1R);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41102 20.3741 6.88299 19.5345 5.67423 18.3258C4.46546 17.117 3.62594 15.589 3.25391 13.9205C2.88188 12.252 2.99272 10.5121 3.57346 8.9043C4.1542 7.29651 5.18083 5.88737 6.53321 4.84175C7.8856 3.79614 9.5078 3.15731 11.21 3C10.2134 4.34827 9.73385 6.00945 9.85853 7.68141C9.98322 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z"
  }));
});
Moon.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Moon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Moon.displayName = "Moon";

var _excluded$1Q = ["color", "size"];
var MoreHorizontal = /*#__PURE__*/React.forwardRef(function MoreHorizontal(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1Q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
  }));
});
MoreHorizontal.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MoreHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MoreHorizontal.displayName = "MoreHorizontal";

var _excluded$1P = ["color", "size"];
var MoreVertical = /*#__PURE__*/React.forwardRef(function MoreVertical(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1P);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
  }));
});
MoreVertical.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MoreVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MoreVertical.displayName = "MoreVertical";

var _excluded$1O = ["color", "size"];
var MousePointer = /*#__PURE__*/React.forwardRef(function MousePointer(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1O);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 13L19 19"
  }));
});
MousePointer.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
MousePointer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
MousePointer.displayName = "MousePointer";

var _excluded$1N = ["color", "size"];
var Move = /*#__PURE__*/React.forwardRef(function Move(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1N);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 9L2 12L5 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 5L12 2L15 5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 19L12 22L9 19"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 9L22 12L19 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 12H22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2V22"
  }));
});
Move.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Move.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Move.displayName = "Move";

var _excluded$1M = ["color", "size"];
var Music = /*#__PURE__*/React.forwardRef(function Music(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1M);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 17H5C4.46957 17 3.96086 17.2107 3.58579 17.5858C3.21071 17.9609 3 18.4696 3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H7C7.53043 21 8.03914 20.7893 8.41421 20.4142C8.78929 20.0391 9 19.5304 9 19V17ZM21 15H17C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V15Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 17V5L21 3V15"
  }));
});
Music.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Music.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Music.displayName = "Music";

var _excluded$1L = ["color", "size"];
var Navigation2 = /*#__PURE__*/React.forwardRef(function Navigation2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1L);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2L19 21L12 17L5 21L12 2Z"
  }));
});
Navigation2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Navigation2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Navigation2.displayName = "Navigation2";

var _excluded$1K = ["color", "size"];
var Navigation = /*#__PURE__*/React.forwardRef(function Navigation(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1K);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 11L22 2L13 21L11 13L3 11Z"
  }));
});
Navigation.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Navigation.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Navigation.displayName = "Navigation";

var _excluded$1J = ["color", "size"];
var Octagon = /*#__PURE__*/React.forwardRef(function Octagon(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1J);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
  }));
});
Octagon.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Octagon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Octagon.displayName = "Octagon";

var _excluded$1I = ["color", "size"];
var Package = /*#__PURE__*/React.forwardRef(function Package(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1I);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12.89 1.45L20.89 5.45C21.2232 5.61557 21.5036 5.87082 21.6997 6.18704C21.8958 6.50326 21.9998 6.86791 22 7.24V16.77C21.9998 17.1421 21.8958 17.5067 21.6997 17.823C21.5036 18.1392 21.2232 18.3944 20.89 18.56L12.89 22.56C12.6121 22.699 12.3057 22.7714 11.995 22.7714C11.6843 22.7714 11.3779 22.699 11.1 22.56L3.1 18.56C2.76713 18.3923 2.48776 18.1349 2.29339 17.8168C2.09903 17.4988 1.99741 17.1327 2 16.76V7.24C2.0002 6.86791 2.10419 6.50326 2.30028 6.18704C2.49637 5.87082 2.77679 5.61557 3.11 5.45L11.11 1.45C11.3866 1.31257 11.6912 1.24106 12 1.24106C12.3088 1.24106 12.6134 1.31257 12.89 1.45V1.45Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.32 6.16L12 11L21.68 6.16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22.76V11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 3.5L17 8.5"
  }));
});
Package.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Package.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Package.displayName = "Package";

var _excluded$1H = ["color", "size"];
var PaperCheck = /*#__PURE__*/React.forwardRef(function PaperCheck(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1H);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.1818 5H3.81818C2.81403 5 2 5.89543 2 7V16C2 17.1046 2.81403 18 3.81818 18H20.1818C21.186 18 22 17.1046 22 16V7C22 5.89543 21.186 5 20.1818 5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 14L8 14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 14L19 14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 10L16 10"
  }));
});
PaperCheck.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PaperCheck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PaperCheck.displayName = "PaperCheck";

var _excluded$1G = ["color", "size"];
var Paperclip = /*#__PURE__*/React.forwardRef(function Paperclip(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1G);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80943 14.7185 1.38777 15.78 1.38777C16.8415 1.38777 17.8594 1.80943 18.61 2.56C19.3606 3.31056 19.7822 4.32854 19.7822 5.39C19.7822 6.45145 19.3606 7.46943 18.61 8.22L9.41 17.41C9.03472 17.7853 8.52573 17.9961 7.995 17.9961C7.46427 17.9961 6.95528 17.7853 6.58 17.41C6.20472 17.0347 5.99389 16.5257 5.99389 15.995C5.99389 15.4643 6.20472 14.9553 6.58 14.58L15.07 6.1"
  }));
});
Paperclip.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Paperclip.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Paperclip.displayName = "Paperclip";

var _excluded$1F = ["color", "size"];
var PauseCircle = /*#__PURE__*/React.forwardRef(function PauseCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1F);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 15V9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 15V9"
  }));
});
PauseCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PauseCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PauseCircle.displayName = "PauseCircle";

var _excluded$1E = ["color", "size"];
var Pause = /*#__PURE__*/React.forwardRef(function Pause(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1E);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 4H6V20H10V4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 4H14V20H18V4Z"
  }));
});
Pause.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Pause.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Pause.displayName = "Pause";

var _excluded$1D = ["color", "size"];
var PenTool = /*#__PURE__*/React.forwardRef(function PenTool(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1D);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19L19 12L22 15L15 22L12 19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 2L9.58579 9.58579"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "11",
    cy: "11",
    r: "2"
  }));
});
PenTool.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PenTool.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PenTool.displayName = "PenTool";

var _excluded$1C = ["color", "size"];
var Percent = /*#__PURE__*/React.forwardRef(function Percent(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1C);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 5L5 19"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
  }));
});
Percent.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Percent.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Percent.displayName = "Percent";

var _excluded$1B = ["color", "size"];
var PhoneCall = /*#__PURE__*/React.forwardRef(function PhoneCall(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1B);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.05 5C16.0267 5.19057 16.9244 5.66826 17.6281 6.37194C18.3317 7.07561 18.8094 7.97326 19 8.95M15.05 1C17.0793 1.22544 18.9716 2.13417 20.4162 3.57701C21.8609 5.01984 22.772 6.91101 23 8.94M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
  }));
});
PhoneCall.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PhoneCall.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PhoneCall.displayName = "PhoneCall";

var _excluded$1A = ["color", "size"];
var PhoneForwarded = /*#__PURE__*/React.forwardRef(function PhoneForwarded(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1A);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 1L23 5L19 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 5H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001C9.51355 12.4136 11.5864 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
  }));
});
PhoneForwarded.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PhoneForwarded.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PhoneForwarded.displayName = "PhoneForwarded";

var _excluded$1z = ["color", "size"];
var PhoneIncoming = /*#__PURE__*/React.forwardRef(function PhoneIncoming(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 2V8H22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 1L16 8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001C9.51355 12.4136 11.5864 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
  }));
});
PhoneIncoming.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PhoneIncoming.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PhoneIncoming.displayName = "PhoneIncoming";

var _excluded$1y = ["color", "size"];
var PhoneMissed = /*#__PURE__*/React.forwardRef(function PhoneMissed(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 1L17 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 1L23 7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001C9.51355 12.4136 11.5864 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
  }));
});
PhoneMissed.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PhoneMissed.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PhoneMissed.displayName = "PhoneMissed";

var _excluded$1x = ["color", "size"];
var PhoneOff = /*#__PURE__*/React.forwardRef(function PhoneOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1x);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.18999 12.81C3.50585 10.213 2.45435 7.25717 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001M10.68 13.31C11.6948 14.3258 12.8418 15.2003 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7605 14.9579 21.2 15.1983 21.5165 15.5662C21.8329 15.9342 22.0048 16.4047 22 16.89V19.89C22.0011 20.1685 21.9441 20.4442 21.8325 20.6994C21.7209 20.9545 21.5573 21.1836 21.3521 21.3719C21.1468 21.5601 20.9046 21.7035 20.6407 21.7927C20.3769 21.8819 20.0974 21.9151 19.82 21.89C16.7428 21.5556 13.787 20.5041 11.19 18.82C9.98526 18.0551 8.86852 17.1597 7.85999 16.15L10.68 13.31Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 1L1 23"
  }));
});
PhoneOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PhoneOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PhoneOff.displayName = "PhoneOff";

var _excluded$1w = ["color", "size"];
var PhoneOutgoing = /*#__PURE__*/React.forwardRef(function PhoneOutgoing(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1w);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 7V1H17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 8L23 1"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.271 2.12 4.18001C2.09501 3.90347 2.12788 3.62477 2.2165 3.36163C2.30513 3.09849 2.44757 2.85669 2.63477 2.65163C2.82196 2.44656 3.04981 2.28271 3.30379 2.17053C3.55778 2.05834 3.83234 2.00027 4.11 2.00001H7.11C7.59531 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04208 3.23945 9.11 3.72001C9.23662 4.68007 9.47145 5.62273 9.81 6.53001C9.94455 6.88793 9.97366 7.27692 9.89391 7.65089C9.81415 8.02485 9.62886 8.36812 9.36 8.64001L8.09 9.91001C9.51356 12.4136 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
  }));
});
PhoneOutgoing.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PhoneOutgoing.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PhoneOutgoing.displayName = "PhoneOutgoing";

var _excluded$1v = ["color", "size"];
var Phone = /*#__PURE__*/React.forwardRef(function Phone(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1v);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.271 2.12 4.18001C2.09501 3.90347 2.12788 3.62477 2.2165 3.36163C2.30513 3.09849 2.44757 2.85669 2.63477 2.65163C2.82196 2.44656 3.04981 2.28271 3.30379 2.17053C3.55778 2.05834 3.83234 2.00027 4.11 2.00001H7.11C7.59531 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04208 3.23945 9.11 3.72001C9.23662 4.68007 9.47145 5.62273 9.81 6.53001C9.94455 6.88793 9.97366 7.27692 9.89391 7.65089C9.81415 8.02485 9.62886 8.36812 9.36 8.64001L8.09 9.91001C9.51356 12.4136 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
  }));
});
Phone.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Phone.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Phone.displayName = "Phone";

var _excluded$1u = ["color", "size"];
var PieChart = /*#__PURE__*/React.forwardRef(function PieChart(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1u);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.045 20.7824 15.5448 21.4874 13.9424 21.8048C12.3401 22.1221 10.6844 22.0421 9.12015 21.5718C7.55587 21.1015 6.13062 20.2551 4.96902 19.1067C3.80741 17.9582 2.94481 16.5428 2.45663 14.984C1.96845 13.4251 1.86956 11.7705 2.1686 10.1646C2.46763 8.55878 3.15549 7.05063 4.17204 5.77203C5.18859 4.49343 6.50288 3.48332 8 2.83"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z"
  }));
});
PieChart.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PieChart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PieChart.displayName = "PieChart";

var _excluded$1t = ["color", "size"];
var PlayCircle = /*#__PURE__*/React.forwardRef(function PlayCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1t);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 8L16 12L10 16V8Z"
  }));
});
PlayCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PlayCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PlayCircle.displayName = "PlayCircle";

var _excluded$1s = ["color", "size"];
var Play = /*#__PURE__*/React.forwardRef(function Play(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1s);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 3L19 12L5 21V3Z"
  }));
});
Play.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Play.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Play.displayName = "Play";

var _excluded$1r = ["color", "size"];
var PlusCircle = /*#__PURE__*/React.forwardRef(function PlusCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1r);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8V16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16"
  }));
});
PlusCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PlusCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PlusCircle.displayName = "PlusCircle";

var _excluded$1q = ["color", "size"];
var PlusSquare = /*#__PURE__*/React.forwardRef(function PlusSquare(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8V16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16"
  }));
});
PlusSquare.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
PlusSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
PlusSquare.displayName = "PlusSquare";

var _excluded$1p = ["color", "size"];
var Plus = /*#__PURE__*/React.forwardRef(function Plus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1p);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 5V19"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12H19"
  }));
});
Plus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Plus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Plus.displayName = "Plus";

var _excluded$1o = ["color", "size"];
var Pocket = /*#__PURE__*/React.forwardRef(function Pocket(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1o);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C10.6868 21 9.38642 20.7413 8.17317 20.2388C6.95991 19.7362 5.85752 18.9997 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3V3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 10L12 14L16 10"
  }));
});
Pocket.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Pocket.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Pocket.displayName = "Pocket";

var _excluded$1n = ["color", "size"];
var Power = /*#__PURE__*/React.forwardRef(function Power(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1n);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.36 6.64C19.6184 7.89879 20.4753 9.50244 20.8223 11.2482C21.1693 12.9939 20.9909 14.8034 20.3096 16.4478C19.6284 18.0921 18.4748 19.4976 16.9948 20.4864C15.5148 21.4752 13.7749 22.0029 11.995 22.0029C10.2151 22.0029 8.47515 21.4752 6.99517 20.4864C5.51519 19.4976 4.36164 18.0921 3.68036 16.4478C2.99909 14.8034 2.82069 12.9939 3.16772 11.2482C3.51475 9.50244 4.37162 7.89879 5.63 6.64"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2V12"
  }));
});
Power.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Power.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Power.displayName = "Power";

var _excluded$1m = ["color", "size"];
var Printer = /*#__PURE__*/React.forwardRef(function Printer(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1m);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9V2H18V9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 14H6V22H18V14Z"
  }));
});
Printer.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Printer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Printer.displayName = "Printer";

var _excluded$1l = ["color", "size"];
var Radio = /*#__PURE__*/React.forwardRef(function Radio(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1l);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.24 7.76C16.7979 8.31724 17.2404 8.97897 17.5424 9.70736C17.8443 10.4357 17.9997 11.2165 17.9997 12.005C17.9997 12.7935 17.8443 13.5743 17.5424 14.3026C17.2404 15.031 16.7979 15.6928 16.24 16.25M7.76 16.24C7.20214 15.6828 6.75959 15.021 6.45764 14.2926C6.1557 13.5643 6.00028 12.7835 6.00028 11.995C6.00028 11.2065 6.1557 10.4257 6.45764 9.69736C6.75959 8.96897 7.20214 8.30724 7.76 7.75M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M4.93 19.07C3.05529 17.1947 2.00214 14.6516 2.00214 12C2.00214 9.34836 3.05529 6.80528 4.93 4.93"
  }));
});
Radio.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Radio.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Radio.displayName = "Radio";

var _excluded$1k = ["color", "size"];
var RefreshCcw = /*#__PURE__*/React.forwardRef(function RefreshCcw(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1k);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 4V10H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 20V14H17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9845 5.27542C16.8482 4.26543 15.4745 3.55976 13.9917 3.22426C12.5089 2.88875 10.9652 2.93434 9.50481 3.35677C8.04437 3.77921 6.71475 4.56471 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15"
  }));
});
RefreshCcw.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
RefreshCcw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
RefreshCcw.displayName = "RefreshCcw";

var _excluded$1j = ["color", "size"];
var RefreshCw = /*#__PURE__*/React.forwardRef(function RefreshCw(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1j);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 4V10H17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 20V14H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.51 9C4.01717 7.56678 4.87913 6.2854 6.01547 5.27542C7.1518 4.26543 8.52547 3.55976 10.0083 3.22426C11.4911 2.88875 13.0348 2.93434 14.4952 3.35677C15.9556 3.77921 17.2853 4.56471 18.36 5.64L23 10M1 14L5.64 18.36C6.71475 19.4353 8.04437 20.2208 9.50481 20.6432C10.9652 21.0657 12.5089 21.1112 13.9917 20.7757C15.4745 20.4402 16.8482 19.7346 17.9845 18.7246C19.1209 17.7146 19.9828 16.4332 20.49 15"
  }));
});
RefreshCw.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
RefreshCw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
RefreshCw.displayName = "RefreshCw";

var _excluded$1i = ["color", "size"];
var Repeat = /*#__PURE__*/React.forwardRef(function Repeat(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1i);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 1L21 5L17 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 23L3 19L7 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3"
  }));
});
Repeat.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Repeat.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Repeat.displayName = "Repeat";

var _excluded$1h = ["color", "size"];
var Rewind = /*#__PURE__*/React.forwardRef(function Rewind(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1h);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 19L2 12L11 5V19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19L13 12L22 5V19Z"
  }));
});
Rewind.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Rewind.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Rewind.displayName = "Rewind";

var _excluded$1g = ["color", "size"];
var RotateCcw = /*#__PURE__*/React.forwardRef(function RotateCcw(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1g);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 4V10H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.51 15C4.15839 16.8404 5.38734 18.4202 7.01166 19.5014C8.63598 20.5826 10.5677 21.1066 12.5157 20.9945C14.4637 20.8824 16.3226 20.1402 17.8121 18.8798C19.3017 17.6193 20.3413 15.909 20.7742 14.0064C21.2072 12.1037 21.0101 10.112 20.2126 8.3311C19.4152 6.55024 18.0605 5.07679 16.3528 4.13276C14.6451 3.18873 12.6769 2.82526 10.7447 3.09711C8.81245 3.36897 7.02091 4.26142 5.64 5.64L1 10"
  }));
});
RotateCcw.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
RotateCcw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
RotateCcw.displayName = "RotateCcw";

var _excluded$1f = ["color", "size"];
var RotateCw = /*#__PURE__*/React.forwardRef(function RotateCw(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1f);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 4V10H17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.49 15C19.84 16.8399 18.6096 18.4187 16.9842 19.4985C15.3588 20.5783 13.4265 21.1006 11.4784 20.9866C9.53038 20.8726 7.67216 20.1286 6.18376 18.8667C4.69536 17.6047 3.65743 15.8932 3.22637 13.9901C2.79531 12.0869 2.99448 10.0952 3.79386 8.31507C4.59325 6.53495 5.94954 5.06286 7.65836 4.12064C9.36717 3.17841 11.3359 2.8171 13.268 3.09114C15.2 3.36518 16.9906 4.25974 18.37 5.64L23 10"
  }));
});
RotateCw.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
RotateCw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
RotateCw.displayName = "RotateCw";

var _excluded$1e = ["color", "size"];
var Rss = /*#__PURE__*/React.forwardRef(function Rss(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1e);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
  }));
});
Rss.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Rss.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Rss.displayName = "Rss";

var _excluded$1d = ["color", "size"];
var Save = /*#__PURE__*/React.forwardRef(function Save(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1d);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 21V13H7V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 3V8H15"
  }));
});
Save.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Save.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Save.displayName = "Save";

var _excluded$1c = ["color", "size"];
var Scissors = /*#__PURE__*/React.forwardRef(function Scissors(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1c);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 4L8.12 15.88"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.47 14.48L20 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.12 8.12L12 12"
  }));
});
Scissors.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Scissors.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Scissors.displayName = "Scissors";

var _excluded$1b = ["color", "size"];
var Search = /*#__PURE__*/React.forwardRef(function Search(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1b);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 21L16.65 16.65"
  }));
});
Search.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Search.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Search.displayName = "Search";

var _excluded$1a = ["color", "size"];
var Send = /*#__PURE__*/React.forwardRef(function Send(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1a);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 2L11 13"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 2L15 22L11 13L2 9L22 2Z"
  }));
});
Send.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Send.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Send.displayName = "Send";

var _excluded$19 = ["color", "size"];
var Server = /*#__PURE__*/React.forwardRef(function Server(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$19);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Server.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Server.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Server.displayName = "Server";

var _excluded$18 = ["color", "size"];
var Settings = /*#__PURE__*/React.forwardRef(function Settings(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$18);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
  }));
});
Settings.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Settings.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Settings.displayName = "Settings";

var _excluded$17 = ["color", "size"];
var Share2 = /*#__PURE__*/React.forwardRef(function Share2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$17);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.59 13.51L15.42 17.49"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.41 6.51L8.59 10.49"
  }));
});
Share2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Share2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Share2.displayName = "Share2";

var _excluded$16 = ["color", "size"];
var Share = /*#__PURE__*/React.forwardRef(function Share(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$16);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 6L12 2L8 6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2V15"
  }));
});
Share.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Share.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Share.displayName = "Share";

var _excluded$15 = ["color", "size"];
var ShieldOff = /*#__PURE__*/React.forwardRef(function ShieldOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$15);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.69 14C19.8911 13.3522 19.9955 12.6783 20 12V5L12 2L8.84 3.18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.73 4.73L4 5V12C4 18 12 22 12 22C14.117 20.8829 16.0197 19.4001 17.62 17.62"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }));
});
ShieldOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ShieldOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ShieldOff.displayName = "ShieldOff";

var _excluded$14 = ["color", "size"];
var Shield = /*#__PURE__*/React.forwardRef(function Shield(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$14);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
  }));
});
Shield.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Shield.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Shield.displayName = "Shield";

var _excluded$13 = ["color", "size"];
var ShoppingBag = /*#__PURE__*/React.forwardRef(function ShoppingBag(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$13);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 6H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
  }));
});
ShoppingBag.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ShoppingBag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ShoppingBag.displayName = "ShoppingBag";

var _excluded$12 = ["color", "size"];
var ShoppingCart = /*#__PURE__*/React.forwardRef(function ShoppingCart(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$12);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
  }));
});
ShoppingCart.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ShoppingCart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ShoppingCart.displayName = "ShoppingCart";

var _excluded$11 = ["color", "size"];
var Shuffle = /*#__PURE__*/React.forwardRef(function Shuffle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$11);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 3H21V8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 20L21 3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 16V21H16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 15L21 21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4L9 9"
  }));
});
Shuffle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Shuffle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Shuffle.displayName = "Shuffle";

var _excluded$10 = ["color", "size"];
var Sidebar = /*#__PURE__*/React.forwardRef(function Sidebar(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$10);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 3V21"
  }));
});
Sidebar.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Sidebar.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Sidebar.displayName = "Sidebar";

var _excluded$$ = ["color", "size"];
var SkipBack = /*#__PURE__*/React.forwardRef(function SkipBack(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$$);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 20L9 12L19 4V20Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 19V5"
  }));
});
SkipBack.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
SkipBack.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
SkipBack.displayName = "SkipBack";

var _excluded$_ = ["color", "size"];
var SkipForward = /*#__PURE__*/React.forwardRef(function SkipForward(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$_);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 4L15 12L5 20V4Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 5V19"
  }));
});
SkipForward.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
SkipForward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
SkipForward.displayName = "SkipForward";

var _excluded$Z = ["color", "size"];
var Slack = /*#__PURE__*/React.forwardRef(function Slack(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$Z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.5 10C13.67 10 13 9.33 13 8.5V3.5C13 2.67 13.67 2 14.5 2C15.33 2 16 2.67 16 3.5V8.5C16 9.33 15.33 10 14.5 10Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.5 10H19V8.5C19 7.67 19.67 7 20.5 7C21.33 7 22 7.67 22 8.5C22 9.33 21.33 10 20.5 10Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.5 14C10.33 14 11 14.67 11 15.5V20.5C11 21.33 10.33 22 9.5 22C8.67 22 8 21.33 8 20.5V15.5C8 14.67 8.67 14 9.5 14Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.5 14H5V15.5C5 16.33 4.33 17 3.5 17C2.67 17 2 16.33 2 15.5C2 14.67 2.67 14 3.5 14Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 14.5C14 13.67 14.67 13 15.5 13H20.5C21.33 13 22 13.67 22 14.5C22 15.33 21.33 16 20.5 16H15.5C14.67 16 14 15.33 14 14.5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.5 19H14V20.5C14 21.33 14.67 22 15.5 22C16.33 22 17 21.33 17 20.5C17 19.67 16.33 19 15.5 19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 9.5C10 8.67 9.33 8 8.5 8H3.5C2.67 8 2 8.67 2 9.5C2 10.33 2.67 11 3.5 11H8.5C9.33 11 10 10.33 10 9.5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2C7.67 2 7 2.67 7 3.5C7 4.33 7.67 5 8.5 5Z"
  }));
});
Slack.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Slack.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Slack.displayName = "Slack";

var _excluded$Y = ["color", "size"];
var Slash = /*#__PURE__*/React.forwardRef(function Slash(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$Y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.92999 4.93L19.07 19.07"
  }));
});
Slash.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Slash.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Slash.displayName = "Slash";

var _excluded$X = ["color", "size"];
var Sliders = /*#__PURE__*/React.forwardRef(function Sliders(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$X);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 21V14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 10V3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 21V12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 8V3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 21V16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 12V3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 14H7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 8H15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 16H23"
  }));
});
Sliders.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Sliders.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Sliders.displayName = "Sliders";

var _excluded$W = ["color", "size"];
var Smartphone = /*#__PURE__*/React.forwardRef(function Smartphone(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$W);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 18H12.01"
  }));
});
Smartphone.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Smartphone.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Smartphone.displayName = "Smartphone";

var _excluded$V = ["color", "size"];
var Smile = /*#__PURE__*/React.forwardRef(function Smile(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$V);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 9H9.01"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9H15.01"
  }));
});
Smile.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Smile.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Smile.displayName = "Smile";

var _excluded$U = ["color", "size"];
var Speaker = /*#__PURE__*/React.forwardRef(function Speaker(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$U);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Speaker.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Speaker.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Speaker.displayName = "Speaker";

var _excluded$T = ["color", "size"];
var Square = /*#__PURE__*/React.forwardRef(function Square(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$T);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }));
});
Square.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Square.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Square.displayName = "Square";

var _excluded$S = ["color", "size"];
var Star = /*#__PURE__*/React.forwardRef(function Star(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$S);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
  }));
});
Star.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Star.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Star.displayName = "Star";

var _excluded$R = ["color", "size"];
var StopCircle = /*#__PURE__*/React.forwardRef(function StopCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$R);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9H9V15H15V9Z"
  }));
});
StopCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
StopCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
StopCircle.displayName = "StopCircle";

var _excluded$Q = ["color", "size"];
var Sun = /*#__PURE__*/React.forwardRef(function Sun(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$Q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 1V3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 21V23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.22 4.22L5.64 5.64"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.36 18.36L19.78 19.78"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 12H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.22 19.78L5.64 18.36"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.36 5.64L19.78 4.22"
  }));
});
Sun.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Sun.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Sun.displayName = "Sun";

var _excluded$P = ["color", "size"];
var Sunrise = /*#__PURE__*/React.forwardRef(function Sunrise(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$P);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2V9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.22 10.22L5.64 11.64"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 18H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 18H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.36 11.64L19.78 10.22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 22H1"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 6L12 2L16 6"
  }));
});
Sunrise.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Sunrise.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Sunrise.displayName = "Sunrise";

var _excluded$O = ["color", "size"];
var Sunset = /*#__PURE__*/React.forwardRef(function Sunset(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$O);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 9V2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.22 10.22L5.64 11.64"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 18H3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 18H23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.36 11.64L19.78 10.22"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 22H1"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 5L12 9L8 5"
  }));
});
Sunset.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Sunset.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Sunset.displayName = "Sunset";

var _excluded$N = ["color", "size"];
var Tablet = /*#__PURE__*/React.forwardRef(function Tablet(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$N);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 18H12.01M18 22H6C4.89543 22 4 21.1046 4 20L4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4L20 20C20 21.1046 19.1046 22 18 22Z"
  }));
});
Tablet.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Tablet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Tablet.displayName = "Tablet";

var _excluded$M = ["color", "size"];
var Tag = /*#__PURE__*/React.forwardRef(function Tag(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$M);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 7H7.01M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Tag.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Tag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Tag.displayName = "Tag";

var _excluded$L = ["color", "size"];
var Target = /*#__PURE__*/React.forwardRef(function Target(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$L);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
  }));
});
Target.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Target.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Target.displayName = "Target";

var _excluded$K = ["color", "size"];
var Terminal = /*#__PURE__*/React.forwardRef(function Terminal(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$K);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 17L10 11L4 5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19H20"
  }));
});
Terminal.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Terminal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Terminal.displayName = "Terminal";

var _excluded$J = ["color", "size"];
var Thermometer = /*#__PURE__*/React.forwardRef(function Thermometer(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$J);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 14.76V3.5C14 2.83696 13.7366 2.20107 13.2678 1.73223C12.7989 1.26339 12.163 1 11.5 1C10.837 1 10.2011 1.26339 9.73223 1.73223C9.26339 2.20107 9 2.83696 9 3.5V14.76C8.19728 15.2963 7.58832 16.0766 7.26307 16.9856C6.93782 17.8946 6.91352 18.8841 7.19376 19.8079C7.47399 20.7317 8.04391 21.541 8.81934 22.1161C9.59476 22.6912 10.5346 23.0017 11.5 23.0017C12.4654 23.0017 13.4052 22.6912 14.1807 22.1161C14.9561 21.541 15.526 20.7317 15.8062 19.8079C16.0865 18.8841 16.0622 17.8946 15.7369 16.9856C15.4117 16.0766 14.8027 15.2963 14 14.76Z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Thermometer.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Thermometer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Thermometer.displayName = "Thermometer";

var _excluded$I = ["color", "size"];
var ThumbsDown = /*#__PURE__*/React.forwardRef(function ThumbsDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$I);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 2H19.67C20.236 1.98999 20.7859 2.18814 21.2154 2.55682C21.6449 2.9255 21.9241 3.43906 22 4V11C21.9241 11.5609 21.6449 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7957 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72C5.23767 1.99455 4.76962 2.1636 4.40209 2.476C4.03457 2.7884 3.79232 3.2231 3.72 3.7L2.34 12.7C2.29649 12.9866 2.31583 13.2793 2.39666 13.5578C2.47749 13.8362 2.6179 14.0937 2.80814 14.3125C2.99839 14.5313 3.23392 14.7061 3.49843 14.8248C3.76294 14.9435 4.05009 15.0033 4.34 15H10Z"
  }));
});
ThumbsDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ThumbsDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ThumbsDown.displayName = "ThumbsDown";

var _excluded$H = ["color", "size"];
var ThumbsUp = /*#__PURE__*/React.forwardRef(function ThumbsUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$H);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
  }));
});
ThumbsUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ThumbsUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ThumbsUp.displayName = "ThumbsUp";

var _excluded$G = ["color", "size"];
var ToggleLeft = /*#__PURE__*/React.forwardRef(function ToggleLeft(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$G);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 5H8C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 15C9.65685 15 11 13.6569 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15Z"
  }));
});
ToggleLeft.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ToggleLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ToggleLeft.displayName = "ToggleLeft";

var _excluded$F = ["color", "size"];
var ToggleRight = /*#__PURE__*/React.forwardRef(function ToggleRight(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$F);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 5H8C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
  }));
});
ToggleRight.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ToggleRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ToggleRight.displayName = "ToggleRight";

var _excluded$E = ["color", "size"];
var Tool = /*#__PURE__*/React.forwardRef(function Tool(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$E);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.7 6.30001C14.5168 6.48694 14.4141 6.73826 14.4141 7.00001C14.4141 7.26176 14.5168 7.51308 14.7 7.70001L16.3 9.30001C16.4869 9.48324 16.7382 9.58587 17 9.58587C17.2617 9.58587 17.5131 9.48324 17.7 9.30001L21.47 5.53001C21.9728 6.6412 22.1251 7.87924 21.9065 9.07916C21.6878 10.2791 21.1087 11.3839 20.2463 12.2463C19.3838 13.1087 18.279 13.6878 17.0791 13.9065C15.8792 14.1251 14.6412 13.9728 13.53 13.47L6.61999 20.38C6.22217 20.7778 5.6826 21.0013 5.11999 21.0013C4.55738 21.0013 4.01782 20.7778 3.61999 20.38C3.22217 19.9822 2.99867 19.4426 2.99867 18.88C2.99867 18.3174 3.22217 17.7778 3.61999 17.38L10.53 10.47C10.0272 9.35882 9.87491 8.12078 10.0935 6.92087C10.3122 5.72095 10.8913 4.61617 11.7537 3.75373C12.6161 2.8913 13.7209 2.31218 14.9208 2.09355C16.1208 1.87493 17.3588 2.02718 18.47 2.53001L14.71 6.29001L14.7 6.30001Z"
  }));
});
Tool.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Tool.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Tool.displayName = "Tool";

var _excluded$D = ["color", "size"];
var Trash2 = /*#__PURE__*/React.forwardRef(function Trash2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$D);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 6H5H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 11V17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 11V17"
  }));
});
Trash2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Trash2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Trash2.displayName = "Trash2";

var _excluded$C = ["color", "size"];
var Trash = /*#__PURE__*/React.forwardRef(function Trash(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$C);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 6H5H21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
  }));
});
Trash.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Trash.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Trash.displayName = "Trash";

var _excluded$B = ["color", "size"];
var Trello = /*#__PURE__*/React.forwardRef(function Trello(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$B);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 7H7V16H10V7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 7H14V12H17V7Z"
  }));
});
Trello.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Trello.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Trello.displayName = "Trello";

var _excluded$A = ["color", "size"];
var TrendingDown = /*#__PURE__*/React.forwardRef(function TrendingDown(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$A);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 18L13.5 8.5L8.5 13.5L1 6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18H23V12"
  }));
});
TrendingDown.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
TrendingDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
TrendingDown.displayName = "TrendingDown";

var _excluded$z = ["color", "size"];
var TrendingUp = /*#__PURE__*/React.forwardRef(function TrendingUp(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$z);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 6L13.5 15.5L8.5 10.5L1 18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 6H23V12"
  }));
});
TrendingUp.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
TrendingUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
TrendingUp.displayName = "TrendingUp";

var _excluded$y = ["color", "size"];
var Triangle = /*#__PURE__*/React.forwardRef(function Triangle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$y);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.29 3.86001L1.82 18C1.64537 18.3024 1.55297 18.6453 1.55199 18.9945C1.55101 19.3437 1.64149 19.6871 1.81443 19.9905C1.98736 20.2939 2.23673 20.5468 2.53771 20.7239C2.83869 20.901 3.1808 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5468 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86001C13.5317 3.56611 13.2807 3.32313 12.9812 3.15449C12.6817 2.98585 12.3437 2.89726 12 2.89726C11.6563 2.89726 11.3183 2.98585 11.0188 3.15449C10.7193 3.32313 10.4683 3.56611 10.29 3.86001V3.86001Z"
  }));
});
Triangle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Triangle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Triangle.displayName = "Triangle";

var _excluded$x = ["color", "size"];
var Truck = /*#__PURE__*/React.forwardRef(function Truck(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$x);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 3H1V16H16V3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 8H20L23 11V16H16V8Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
  }));
});
Truck.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Truck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Truck.displayName = "Truck";

var _excluded$w = ["color", "size"];
var Tv = /*#__PURE__*/React.forwardRef(function Tv(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$w);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 7H4C2.89543 7 2 7.89543 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 7.89543 21.1046 7 20 7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 2L12 7L7 2"
  }));
});
Tv.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Tv.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Tv.displayName = "Tv";

var _excluded$v = ["color", "size"];
var Twitter = /*#__PURE__*/React.forwardRef(function Twitter(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$v);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
  }));
});
Twitter.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Twitter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Twitter.displayName = "Twitter";

var _excluded$u = ["color", "size"];
var Type = /*#__PURE__*/React.forwardRef(function Type(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$u);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 7V4H20V7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 20H15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 4V20"
  }));
});
Type.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Type.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Type.displayName = "Type";

var _excluded$t = ["color", "size"];
var Umbrella = /*#__PURE__*/React.forwardRef(function Umbrella(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$t);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22C14.2044 22 13.4413 21.6839 12.8787 21.1213C12.3161 20.5587 12 19.7956 12 19V12M23 12C22.7388 9.26357 21.467 6.72275 19.433 4.87366C17.399 3.02458 14.7489 2 12 2C9.25114 2 6.60096 3.02458 4.56697 4.87366C2.53297 6.72275 1.2612 9.26357 1 12H23Z"
  }));
});
Umbrella.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Umbrella.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Umbrella.displayName = "Umbrella";

var _excluded$s = ["color", "size"];
var Underline = /*#__PURE__*/React.forwardRef(function Underline(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$s);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 3V10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10V3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 21H20"
  }));
});
Underline.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Underline.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Underline.displayName = "Underline";

var _excluded$r = ["color", "size"];
var Unlock = /*#__PURE__*/React.forwardRef(function Unlock(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$r);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 11V7C6.99876 5.76005 7.45828 4.56387 8.28938 3.64367C9.12047 2.72347 10.2638 2.1449 11.4975 2.02029C12.7312 1.89568 13.9671 2.2339 14.9655 2.96931C15.9638 3.70472 16.6533 4.78485 16.9 6"
  }));
});
Unlock.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Unlock.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Unlock.displayName = "Unlock";

var _excluded$q = ["color", "size"];
var UploadCloud = /*#__PURE__*/React.forwardRef(function UploadCloud(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$q);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 16L12 12L8 16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 12V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6901 21.9435 10.7355 21.0667 10.0534C20.1899 9.37138 19.1109 9.00073 18 9H16.74C16.4373 7.82924 15.8732 6.74233 15.09 5.82099C14.3067 4.89965 13.3249 4.16785 12.2181 3.68061C11.1114 3.19336 9.90856 2.96336 8.70012 3.00788C7.49169 3.05241 6.30907 3.3703 5.24118 3.93766C4.17329 4.50503 3.24792 5.3071 2.53463 6.28358C1.82134 7.26006 1.3387 8.38554 1.12299 9.57539C0.907276 10.7653 0.964111 11.9885 1.28922 13.1533C1.61433 14.318 2.19925 15.3939 3.00001 16.3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 16L12 12L8 16"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
UploadCloud.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
UploadCloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
UploadCloud.displayName = "UploadCloud";

var _excluded$p = ["color", "size"];
var Upload = /*#__PURE__*/React.forwardRef(function Upload(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$p);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 8L12 3L7 8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 3V15"
  }));
});
Upload.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Upload.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Upload.displayName = "Upload";

var _excluded$o = ["color", "size"];
var UserCheck = /*#__PURE__*/React.forwardRef(function UserCheck(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$o);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 11L19 13L23 9"
  }));
});
UserCheck.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
UserCheck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
UserCheck.displayName = "UserCheck";

var _excluded$n = ["color", "size"];
var UserMinus = /*#__PURE__*/React.forwardRef(function UserMinus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$n);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 11H17"
  }));
});
UserMinus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
UserMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
UserMinus.displayName = "UserMinus";

var _excluded$m = ["color", "size"];
var UserPlus = /*#__PURE__*/React.forwardRef(function UserPlus(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$m);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 8V14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 11H17"
  }));
});
UserPlus.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
UserPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
UserPlus.displayName = "UserPlus";

var _excluded$l = ["color", "size"];
var UserX = /*#__PURE__*/React.forwardRef(function UserX(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$l);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 8L23 13"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 8L18 13"
  }));
});
UserX.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
UserX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
UserX.displayName = "UserX";

var _excluded$k = ["color", "size"];
var User = /*#__PURE__*/React.forwardRef(function User(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$k);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
  }));
});
User.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
User.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
User.displayName = "User";

var _excluded$j = ["color", "size"];
var Users = /*#__PURE__*/React.forwardRef(function Users(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$j);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
  }));
});
Users.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Users.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Users.displayName = "Users";

var _excluded$i = ["color", "size"];
var VideoOff = /*#__PURE__*/React.forwardRef(function VideoOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$i);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.66 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V10.34L17 11.34L23 7V17M16 16V17C16 17.5304 15.7893 18.0391 15.4142 18.4142C15.0391 18.7893 14.5304 19 14 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V7C1 6.46957 1.21071 5.96086 1.58579 5.58579C1.96086 5.21071 2.46957 5 3 5H5L16 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }));
});
VideoOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
VideoOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
VideoOff.displayName = "VideoOff";

var _excluded$h = ["color", "size"];
var Video = /*#__PURE__*/React.forwardRef(function Video(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$h);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 7L16 12L23 17V7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
  }));
});
Video.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Video.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Video.displayName = "Video";

var _excluded$g = ["color", "size"];
var Voicemail = /*#__PURE__*/React.forwardRef(function Voicemail(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$g);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.5 16C7.98528 16 10 13.9853 10 11.5C10 9.01472 7.98528 7 5.5 7C3.01472 7 1 9.01472 1 11.5C1 13.9853 3.01472 16 5.5 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.5 16C20.9853 16 23 13.9853 23 11.5C23 9.01472 20.9853 7 18.5 7C16.0147 7 14 9.01472 14 11.5C14 13.9853 16.0147 16 18.5 16Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.5 16H18.5"
  }));
});
Voicemail.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Voicemail.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Voicemail.displayName = "Voicemail";

var _excluded$f = ["color", "size"];
var Volume1 = /*#__PURE__*/React.forwardRef(function Volume1(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$f);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 5L6 9H2V15H6L11 19V5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.54 8.45999C16.4774 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53"
  }));
});
Volume1.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Volume1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Volume1.displayName = "Volume1";

var _excluded$e = ["color", "size"];
var Volume2 = /*#__PURE__*/React.forwardRef(function Volume2(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$e);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 5L6 9H2V15H6L11 19V5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.07 4.92999C20.9447 6.80527 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.45999C16.4774 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53"
  }));
});
Volume2.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Volume2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Volume2.displayName = "Volume2";

var _excluded$d = ["color", "size"];
var VolumeX = /*#__PURE__*/React.forwardRef(function VolumeX(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$d);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 5L6 9H2V15H6L11 19V5Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 9L17 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 9L23 15"
  }));
});
VolumeX.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
VolumeX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
VolumeX.displayName = "VolumeX";

var _excluded$c = ["color", "size"];
var Volume = /*#__PURE__*/React.forwardRef(function Volume(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$c);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 5L6 9H2V15H6L11 19V5Z"
  }));
});
Volume.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Volume.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Volume.displayName = "Volume";

var _excluded$b = ["color", "size"];
var Watch = /*#__PURE__*/React.forwardRef(function Watch(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$b);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 9V12L13.5 13.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.51 17.35L16.16 21.18C16.1149 21.6786 15.8845 22.1422 15.5142 22.4792C15.1439 22.8162 14.6607 23.002 14.16 23H9.83C9.32932 23.002 8.8461 22.8162 8.4758 22.4792C8.1055 22.1422 7.87505 21.6786 7.83 21.18L7.48 17.35M7.49 6.64999L7.84 2.81999C7.8849 2.32306 8.11393 1.86087 8.48211 1.52414C8.8503 1.18741 9.33105 1.00046 9.83 0.999986H14.18C14.6807 0.997954 15.1639 1.18378 15.5342 1.52076C15.9045 1.85773 16.1349 2.32134 16.18 2.81999L16.53 6.64999"
  }));
});
Watch.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Watch.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Watch.displayName = "Watch";

var _excluded$a = ["color", "size"];
var WifiOff = /*#__PURE__*/React.forwardRef(function WifiOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$a);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.72 11.06C17.5391 11.4597 18.305 11.9603 19 12.55"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12.55C6.48208 11.3108 8.26587 10.4862 10.17 10.16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.71 5.05001C12.8524 4.87738 15.0076 5.13818 17.047 5.81683C19.0864 6.49549 20.9682 7.57809 22.58 9.00001"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1.42001 9C2.80718 7.77385 4.39771 6.79922 6.12001 6.12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 20H12.01"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
WifiOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
WifiOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
WifiOff.displayName = "WifiOff";

var _excluded$9 = ["color", "size"];
var Wifi = /*#__PURE__*/React.forwardRef(function Wifi(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$9);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("g", {
    "clip-path": "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12.55C6.97656 10.9037 9.46761 10.0021 12.04 10.0021C14.6124 10.0021 17.1034 10.9037 19.08 12.55"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1.42001 9.00001C4.34244 6.42397 8.10431 5.00266 12 5.00266C15.8957 5.00266 19.6576 6.42397 22.58 9.00001"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 20H12.01"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clippath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "24",
    height: "24"
  }))));
});
Wifi.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Wifi.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Wifi.displayName = "Wifi";

var _excluded$8 = ["color", "size"];
var Wind = /*#__PURE__*/React.forwardRef(function Wind(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$8);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.59 4.59001C9.82231 4.35633 10.1088 4.18366 10.4239 4.08735C10.739 3.99105 11.073 3.9741 11.3963 4.038C11.7195 4.10191 12.022 4.24469 12.2768 4.45366C12.5315 4.66263 12.7307 4.9313 12.8566 5.23581C12.9825 5.54031 13.0313 5.8712 12.9985 6.19908C12.9657 6.52695 12.8524 6.84164 12.6687 7.11517C12.4849 7.38871 12.2365 7.61261 11.9454 7.76698C11.6542 7.92135 11.3295 8.0014 11 8.00001H2M12.59 19.41C12.8223 19.6437 13.1088 19.8164 13.4239 19.9127C13.739 20.009 14.073 20.0259 14.3963 19.962C14.7195 19.8981 15.022 19.7553 15.2768 19.5464C15.5315 19.3374 15.7307 19.0687 15.8566 18.7642C15.9825 18.4597 16.0313 18.1288 15.9985 17.8009C15.9657 17.4731 15.8524 17.1584 15.6687 16.8849C15.4849 16.6113 15.2365 16.3874 14.9454 16.233C14.6542 16.0787 14.3295 15.9986 14 16H2M17.73 7.73001C18.0208 7.4399 18.3787 7.22593 18.7719 7.10703C19.1652 6.98812 19.5816 6.96795 19.9845 7.0483C20.3874 7.12865 20.7642 7.30703 21.0817 7.56768C21.3993 7.82833 21.6477 8.16321 21.805 8.5427C21.9623 8.9222 22.0236 9.33461 21.9836 9.74346C21.9436 10.1523 21.8035 10.545 21.5756 10.8868C21.3477 11.2286 21.0391 11.509 20.6771 11.7032C20.3151 11.8973 19.9108 11.9993 19.5 12H2"
  }));
});
Wind.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Wind.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Wind.displayName = "Wind";

var _excluded$7 = ["color", "size"];
var XCircle = /*#__PURE__*/React.forwardRef(function XCircle(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$7);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9L9 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 9L15 15"
  }));
});
XCircle.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
XCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
XCircle.displayName = "XCircle";

var _excluded$6 = ["color", "size"];
var XSquare = /*#__PURE__*/React.forwardRef(function XSquare(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$6);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 9L15 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 9L9 15"
  }));
});
XSquare.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
XSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
XSquare.displayName = "XSquare";

var _excluded$5 = ["color", "size"];
var X = /*#__PURE__*/React.forwardRef(function X(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$5);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 6L6 18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 6L18 18"
  }));
});
X.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
X.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
X.displayName = "X";

var _excluded$4 = ["color", "size"];
var Youtube = /*#__PURE__*/React.forwardRef(function Youtube(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$4);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 0.999999 11.75C0.988779 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
  }));
});
Youtube.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Youtube.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Youtube.displayName = "Youtube";

var _excluded$3 = ["color", "size"];
var ZapOff = /*#__PURE__*/React.forwardRef(function ZapOff(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$3);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12.41 6.75L13 2L10.57 4.92"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.57 12.91L21 10H15.66"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 8L3 14H12L11 22L16 16"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1L23 23"
  }));
});
ZapOff.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ZapOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ZapOff.displayName = "ZapOff";

var _excluded$2 = ["color", "size"];
var Zap = /*#__PURE__*/React.forwardRef(function Zap(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$2);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 2L3 14H12L11 22L21 10H12L13 2Z"
  }));
});
Zap.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
Zap.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
Zap.displayName = "Zap";

var _excluded$1 = ["color", "size"];
var ZoomIn = /*#__PURE__*/React.forwardRef(function ZoomIn(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 21L16.65 16.65"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 8V14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 11H14"
  }));
});
ZoomIn.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ZoomIn.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ZoomIn.displayName = "ZoomIn";

var _excluded = ["color", "size"];
var ZoomOut = /*#__PURE__*/React.forwardRef(function ZoomOut(props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "currentColor" : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, rest, {
    ref: ref,
    stroke: color,
    width: size,
    height: size
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 21L16.65 16.65"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 11H14"
  }));
});
ZoomOut.propTypes = {
  color: p__default['default'].string,
  size: p__default['default'].oneOfType([p__default['default'].string, p__default['default'].number])
};
ZoomOut.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
ZoomOut.displayName = "ZoomOut";

exports.Activity = Activity;
exports.Airplay = Airplay;
exports.AlertCircle = AlertCircle;
exports.AlertOctagon = AlertOctagon;
exports.AlertTriangle = AlertTriangle;
exports.AlignCenter = AlignCenter;
exports.AlignJustify = AlignJustify;
exports.AlignLeft = AlignLeft;
exports.AlignRight = AlignRight;
exports.Anchor = Anchor;
exports.Aperture = Aperture;
exports.Archive = Archive;
exports.ArrowDown = ArrowDown;
exports.ArrowDownCircle = ArrowDownCircle;
exports.ArrowDownLeft = ArrowDownLeft;
exports.ArrowDownRight = ArrowDownRight;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftCircle = ArrowLeftCircle;
exports.ArrowRight = ArrowRight;
exports.ArrowRightCircle = ArrowRightCircle;
exports.ArrowUp = ArrowUp;
exports.ArrowUpCircle = ArrowUpCircle;
exports.ArrowUpLeft = ArrowUpLeft;
exports.ArrowUpRight = ArrowUpRight;
exports.AtSign = AtSign;
exports.Award = Award;
exports.BarChart = BarChart;
exports.BarChart2 = BarChart2;
exports.Battery = Battery;
exports.BatteryCharging = BatteryCharging;
exports.Bell = Bell;
exports.BellOff = BellOff;
exports.Bluetooth = Bluetooth;
exports.Bold = Bold;
exports.Book = Book;
exports.BookOpen = BookOpen;
exports.Bookmark = Bookmark;
exports.Box = Box;
exports.Briefcase = Briefcase;
exports.Calendar = Calendar;
exports.Camera = Camera;
exports.CameraOff = CameraOff;
exports.Cast = Cast;
exports.Check = Check;
exports.CheckCircle = CheckCircle;
exports.CheckSquare = CheckSquare;
exports.ChevronDown = ChevronDown;
exports.ChevronLeft = ChevronLeft;
exports.ChevronRight = ChevronRight;
exports.ChevronUp = ChevronUp;
exports.ChevronsDown = ChevronsDown;
exports.ChevronsLeft = ChevronsLeft;
exports.ChevronsRight = ChevronsRight;
exports.ChevronsUp = ChevronsUp;
exports.Chrome = Chrome;
exports.Circle = Circle;
exports.Clipboard = Clipboard;
exports.Clock = Clock;
exports.Cloud = Cloud;
exports.CloudDrizzle = CloudDrizzle;
exports.CloudLightning = CloudLightning;
exports.CloudOff = CloudOff;
exports.CloudRain = CloudRain;
exports.CloudSnow = CloudSnow;
exports.Code = Code;
exports.Codepen = Codepen;
exports.Coffee = Coffee;
exports.Command = Command;
exports.Compass = Compass;
exports.Copy = Copy;
exports.CornerDownLeft = CornerDownLeft;
exports.CornerDownRight = CornerDownRight;
exports.CornerLeftDown = CornerLeftDown;
exports.CornerLeftUp = CornerLeftUp;
exports.CornerRightDown = CornerRightDown;
exports.CornerRightUp = CornerRightUp;
exports.CornerUpLeft = CornerUpLeft;
exports.CornerUpRight = CornerUpRight;
exports.Cpu = Cpu;
exports.CreditCard = CreditCard;
exports.Crop = Crop;
exports.Crosshair = Crosshair;
exports.Database = Database;
exports.Delete = Delete;
exports.Disc = Disc;
exports.DollarSign = DollarSign;
exports.Download = Download;
exports.DownloadCloud = DownloadCloud;
exports.Drag = Drag;
exports.Droplet = Droplet;
exports.Edit = Edit;
exports.Edit2 = Edit2;
exports.Edit3 = Edit3;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeOff = EyeOff;
exports.Facebook = Facebook;
exports.FastForward = FastForward;
exports.Feather = Feather;
exports.File = File;
exports.FileMinus = FileMinus;
exports.FilePlus = FilePlus;
exports.FileText = FileText;
exports.Film = Film;
exports.Filter = Filter;
exports.Flag = Flag;
exports.Folder = Folder;
exports.FolderMinus = FolderMinus;
exports.FolderPlus = FolderPlus;
exports.Frown = Frown;
exports.Gift = Gift;
exports.GitBranch = GitBranch;
exports.GitCommit = GitCommit;
exports.GitMerge = GitMerge;
exports.GitPullRequest = GitPullRequest;
exports.Github = Github;
exports.Gitlab = Gitlab;
exports.Globe = Globe;
exports.Grid = Grid;
exports.HardDrive = HardDrive;
exports.Hash = Hash;
exports.Headphones = Headphones;
exports.Heart = Heart;
exports.HelpCircle = HelpCircle;
exports.Home = Home;
exports.Image = Image;
exports.Inbox = Inbox;
exports.Info = Info;
exports.Instagram = Instagram;
exports.Italic = Italic;
exports.Key = Key;
exports.Layers = Layers;
exports.Layout = Layout;
exports.LifeBuoy = LifeBuoy;
exports.Link = Link;
exports.Link2 = Link2;
exports.Linkedin = Linkedin;
exports.List = List;
exports.Loader = Loader;
exports.Lock = Lock;
exports.LogIn = LogIn;
exports.LogOut = LogOut;
exports.Loudspeaker = Loudspeaker;
exports.Mail = Mail;
exports.Map = Map;
exports.MapPin = MapPin;
exports.Maximize = Maximize;
exports.Maximize2 = Maximize2;
exports.Meh = Meh;
exports.Menu = Menu;
exports.MessageCircle = MessageCircle;
exports.MessageSquare = MessageSquare;
exports.Mic = Mic;
exports.MicOff = MicOff;
exports.Minimize = Minimize;
exports.Minimize2 = Minimize2;
exports.Minus = Minus;
exports.MinusCircle = MinusCircle;
exports.MinusSquare = MinusSquare;
exports.Monitor = Monitor;
exports.Moon = Moon;
exports.MoreHorizontal = MoreHorizontal;
exports.MoreVertical = MoreVertical;
exports.MousePointer = MousePointer;
exports.Move = Move;
exports.Music = Music;
exports.Navigation = Navigation;
exports.Navigation2 = Navigation2;
exports.Octagon = Octagon;
exports.Package = Package;
exports.PaperCheck = PaperCheck;
exports.Paperclip = Paperclip;
exports.Pause = Pause;
exports.PauseCircle = PauseCircle;
exports.PenTool = PenTool;
exports.Percent = Percent;
exports.Phone = Phone;
exports.PhoneCall = PhoneCall;
exports.PhoneForwarded = PhoneForwarded;
exports.PhoneIncoming = PhoneIncoming;
exports.PhoneMissed = PhoneMissed;
exports.PhoneOff = PhoneOff;
exports.PhoneOutgoing = PhoneOutgoing;
exports.PieChart = PieChart;
exports.Play = Play;
exports.PlayCircle = PlayCircle;
exports.Plus = Plus;
exports.PlusCircle = PlusCircle;
exports.PlusSquare = PlusSquare;
exports.Pocket = Pocket;
exports.Power = Power;
exports.Printer = Printer;
exports.Radio = Radio;
exports.RefreshCcw = RefreshCcw;
exports.RefreshCw = RefreshCw;
exports.Repeat = Repeat;
exports.Rewind = Rewind;
exports.RotateCcw = RotateCcw;
exports.RotateCw = RotateCw;
exports.Rss = Rss;
exports.Save = Save;
exports.Scissors = Scissors;
exports.Search = Search;
exports.Send = Send;
exports.Server = Server;
exports.Settings = Settings;
exports.Share = Share;
exports.Share2 = Share2;
exports.Shield = Shield;
exports.ShieldOff = ShieldOff;
exports.ShoppingBag = ShoppingBag;
exports.ShoppingCart = ShoppingCart;
exports.Shuffle = Shuffle;
exports.Sidebar = Sidebar;
exports.SkipBack = SkipBack;
exports.SkipForward = SkipForward;
exports.Slack = Slack;
exports.Slash = Slash;
exports.Sliders = Sliders;
exports.Smartphone = Smartphone;
exports.Smile = Smile;
exports.Speaker = Speaker;
exports.Square = Square;
exports.Star = Star;
exports.StopCircle = StopCircle;
exports.Sun = Sun;
exports.Sunrise = Sunrise;
exports.Sunset = Sunset;
exports.Tablet = Tablet;
exports.Tag = Tag;
exports.Target = Target;
exports.Terminal = Terminal;
exports.Thermometer = Thermometer;
exports.ThumbsDown = ThumbsDown;
exports.ThumbsUp = ThumbsUp;
exports.ToggleLeft = ToggleLeft;
exports.ToggleRight = ToggleRight;
exports.Tool = Tool;
exports.Trash = Trash;
exports.Trash2 = Trash2;
exports.Trello = Trello;
exports.TrendingDown = TrendingDown;
exports.TrendingUp = TrendingUp;
exports.Triangle = Triangle;
exports.Truck = Truck;
exports.Tv = Tv;
exports.Twitter = Twitter;
exports.Type = Type;
exports.Umbrella = Umbrella;
exports.Underline = Underline;
exports.Unlock = Unlock;
exports.Upload = Upload;
exports.UploadCloud = UploadCloud;
exports.User = User;
exports.UserCheck = UserCheck;
exports.UserMinus = UserMinus;
exports.UserPlus = UserPlus;
exports.UserX = UserX;
exports.Users = Users;
exports.Video = Video;
exports.VideoOff = VideoOff;
exports.Voicemail = Voicemail;
exports.Volume = Volume;
exports.Volume1 = Volume1;
exports.Volume2 = Volume2;
exports.VolumeX = VolumeX;
exports.Watch = Watch;
exports.Wifi = Wifi;
exports.WifiOff = WifiOff;
exports.Wind = Wind;
exports.X = X;
exports.XCircle = XCircle;
exports.XSquare = XSquare;
exports.Youtube = Youtube;
exports.Zap = Zap;
exports.ZapOff = ZapOff;
exports.ZoomIn = ZoomIn;
exports.ZoomOut = ZoomOut;
