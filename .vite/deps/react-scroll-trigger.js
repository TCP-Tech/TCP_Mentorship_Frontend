import {
  require_prop_types
} from "./chunk-NMIZHWR2.js";
import "./chunk-ORBZ5EXD.js";
import {
  require_react_dom
} from "./chunk-4ZSTBHIF.js";
import {
  require_react
} from "./chunk-HAZNF34R.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle2;
  }
});

// node_modules/react-scroll-trigger/es/index.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_react_dom = __toESM(require_react_dom());
var import_lodash = __toESM(require_lodash());

// node_modules/clean-react-props/es/constants.js
var HTMLProps = [
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  // ?
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "capture",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charSet",
  "checked",
  "cite",
  "classID",
  "className",
  "colSpan",
  "cols",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "controlsList",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "encType",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "htmlFor",
  "httpEquiv",
  "icon",
  "id",
  "inputMode",
  "integrity",
  "is",
  "keyParams",
  "keyType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "low",
  "manifest",
  "marginHeight",
  "marginWidth",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "nonce",
  "open",
  "optimum",
  "pattern",
  "placeholder",
  "poster",
  "preload",
  "profile",
  "radioGroup",
  "readOnly",
  "rel",
  "required",
  "reversed",
  "role",
  "rowSpan",
  "rows",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcLang",
  "srcSet",
  "start",
  "step",
  "style",
  "summary",
  "tabIndex",
  "target",
  "title",
  "type",
  "useMap",
  "value",
  "width",
  "wmode",
  "wrap"
];
var RDFProps = ["about", "datatype", "inlist", "prefix", "property", "resource", "typeof", "vocab"];
var ValidEvents = [
  // Clipboard Events
  "onCopy",
  "onCut",
  "onPaste",
  // Composition Events
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  // Keyboard Events
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  // Focus Events
  "onFocus",
  "onBlur",
  // Form Events
  "onChange",
  "onInput",
  "onInvalid",
  "onReset",
  "onSubmit",
  // Mouse Events
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  // Pointer Events
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  // Selection Events
  "onSelect",
  // Touch Events
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  // UI Events
  "onScroll",
  // Wheel Events
  "onWheel",
  // Media Events
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting",
  // Image Events
  "onLoad",
  "onError",
  // Animation Events
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  // Transition Events
  "onTransitionEnd",
  // Other Events
  "onToggle"
];

// node_modules/clean-react-props/es/index.js
var DataRegex = /data-([a-zA-Z0-9\-]*)/;
var AriaRegex = /aria-([a-zA-Z0-9\-]*)/;
var cleanProps = function cleanProps2(props, excludes, customAttributes) {
  if (props === void 0) {
    props = {};
  }
  if (excludes === void 0) {
    excludes = [];
  }
  if (customAttributes === void 0) {
    customAttributes = [];
  }
  var returnProps = Object.assign({}, props);
  var validProps = Object.keys(returnProps).filter(function(key) {
    if (excludes.indexOf(key) !== -1) {
      return false;
    }
    if (customAttributes.indexOf(key) > -1) {
      return true;
    }
    if (HTMLProps.indexOf(key) !== -1) {
      return true;
    }
    if (RDFProps.indexOf(key) !== -1) {
      return true;
    }
    if (DataRegex.test(key)) {
      return true;
    }
    if (AriaRegex.test(key)) {
      return true;
    }
    if (ValidEvents.indexOf(key) !== -1) {
      return true;
    }
    return false;
  });
  Object.keys(returnProps).forEach(function(key) {
    if (validProps.indexOf(key) === -1) {
      delete returnProps[key];
    }
  });
  return returnProps;
};
var es_default = cleanProps;

// node_modules/react-scroll-trigger/es/index.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
var ScrollTrigger = function(_Component) {
  _inheritsLoose(ScrollTrigger2, _Component);
  function ScrollTrigger2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.onScrollThrottled = (0, import_lodash.default)(_this.onScroll.bind(_assertThisInitialized(_this)), props.throttleScroll, {
      trailing: false
    });
    _this.onResizeThrottled = (0, import_lodash.default)(_this.onResize.bind(_assertThisInitialized(_this)), props.throttleResize, {
      trailing: false
    });
    _this.state = {
      inViewport: false,
      progress: 0,
      lastScrollPosition: null,
      lastScrollTime: null
    };
    return _this;
  }
  var _proto = ScrollTrigger2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    addEventListener("resize", this.onResizeThrottled);
    addEventListener("scroll", this.onScrollThrottled);
    if (this.props.triggerOnLoad) {
      this.checkStatus();
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.throttleScroll !== this.props.throttleScroll) {
      removeEventListener("scroll", this.onScrollThrottled);
      this.onScrollThrottled = (0, import_lodash.default)(this.onScroll.bind(this), this.props.throttleScroll, {
        trailing: false
      });
      addEventListener("scroll", this.onScrollThrottled);
    }
    if (prevProps.throttleResize !== this.props.throttleResize) {
      removeEventListener("resize", this.onResizeThrottled);
      this.onResizeThrottled = (0, import_lodash.default)(this.onResize.bind(this), this.props.throttleResize, {
        trailing: false
      });
      addEventListener("resize", this.onResizeThrottled);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    removeEventListener("resize", this.onResizeThrottled);
    removeEventListener("scroll", this.onScrollThrottled);
  };
  _proto.onResize = function onResize() {
    this.checkStatus();
  };
  _proto.onScroll = function onScroll() {
    this.checkStatus();
  };
  _proto.checkStatus = function checkStatus() {
    var _this$props = this.props, containerRef = _this$props.containerRef, onEnter2 = _this$props.onEnter, onExit2 = _this$props.onExit, onProgress2 = _this$props.onProgress;
    var _this$state = this.state, lastScrollPosition = _this$state.lastScrollPosition, lastScrollTime = _this$state.lastScrollTime;
    var element = import_react_dom.default.findDOMNode(this.element);
    var elementRect = element.getBoundingClientRect();
    var viewportStart = 0;
    var scrollingElement = typeof containerRef === "string" ? document.querySelector(containerRef) : containerRef;
    var viewportEnd = containerRef === document.documentElement ? Math.max(containerRef.clientHeight, window.innerHeight || 0) : scrollingElement.clientHeight;
    var inViewport = elementRect.top <= viewportEnd && elementRect.bottom >= viewportStart;
    var position = window.scrollY;
    var velocity = lastScrollPosition && lastScrollTime ? Math.abs((lastScrollPosition - position) / (lastScrollTime - Date.now())) : null;
    if (inViewport) {
      var progress = Math.max(0, Math.min(1, 1 - elementRect.bottom / (viewportEnd + elementRect.height)));
      if (!this.state.inViewport) {
        this.setState({
          inViewport
        });
        onEnter2({
          progress,
          velocity
        }, this);
      }
      onProgress2({
        progress,
        velocity
      }, this);
      this.setState({
        lastScrollPosition: position,
        lastScrollTime: Date.now()
      });
      return;
    }
    if (this.state.inViewport) {
      var _progress = elementRect.top <= viewportEnd ? 1 : 0;
      this.setState({
        lastScrollPosition: position,
        lastScrollTime: Date.now(),
        inViewport,
        progress: _progress
      });
      onProgress2({
        progress: _progress,
        velocity
      }, this);
      onExit2({
        progress: _progress,
        velocity
      }, this);
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props2 = this.props, children = _this$props2.children, component = _this$props2.component;
    var elementMethod = import_react.default.isValidElement(component) ? "cloneElement" : "createElement";
    return import_react.default[elementMethod](component, _objectSpread(_objectSpread({}, es_default(this.props, ["onProgress"])), {}, {
      ref: function ref(element) {
        _this2.element = element;
      }
    }), children);
  };
  return ScrollTrigger2;
}(import_react.Component);
ScrollTrigger.propTypes = {
  component: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.node]),
  containerRef: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
  throttleResize: import_prop_types.default.number,
  throttleScroll: import_prop_types.default.number,
  triggerOnLoad: import_prop_types.default.bool,
  onEnter: import_prop_types.default.func,
  onExit: import_prop_types.default.func,
  onProgress: import_prop_types.default.func
};
ScrollTrigger.defaultProps = {
  component: "div",
  containerRef: typeof document !== "undefined" ? document.documentElement : "html",
  throttleResize: 100,
  throttleScroll: 100,
  triggerOnLoad: true,
  onEnter: function onEnter() {
  },
  onExit: function onExit() {
  },
  onProgress: function onProgress() {
  }
};
var es_default2 = ScrollTrigger;
export {
  es_default2 as default
};
//# sourceMappingURL=react-scroll-trigger.js.map
