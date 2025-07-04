require("../@babel/runtime/helpers/Arrayincludes");

var _assertThisInitialized2 = require("../@babel/runtime/helpers/assertThisInitialized");

var _wrapNativeSuper2 = require("../@babel/runtime/helpers/wrapNativeSuper");

var _regeneratorRuntime2 = require("../@babel/runtime/helpers/regeneratorRuntime");

var _asyncToGenerator2 = require("../@babel/runtime/helpers/asyncToGenerator");

require("../@babel/runtime/helpers/Objectentries");

var _toArray2 = require("../@babel/runtime/helpers/toArray");

var _objectSpread2 = require("../@babel/runtime/helpers/objectSpread2");

var _possibleConstructorReturn2 = require("../@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf2 = require("../@babel/runtime/helpers/getPrototypeOf");

var _inherits2 = require("../@babel/runtime/helpers/inherits");

var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../@babel/runtime/helpers/createClass");

var _defineProperty2 = require("../@babel/runtime/helpers/defineProperty");

var _toConsumableArray2 = require("../@babel/runtime/helpers/toConsumableArray");

var _typeof2 = require("../@babel/runtime/helpers/typeof");

var _slicedToArray2 = require("../@babel/runtime/helpers/slicedToArray");

var _createForOfIteratorHelper2 = require("../@babel/runtime/helpers/createForOfIteratorHelper");

var _ErrorTypeStrings$, _ErrorTypeStrings;

function _callSuper(_this, derived, args) {
    function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        } catch (e) {
            return false;
        }
    }
    derived = _getPrototypeOf2(derived);
    return _possibleConstructorReturn2(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf2(_this).constructor) : derived.apply(_this, args));
}

var _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s2, _t2, _u, _v;

var _export_sfc = function _export_sfc(sfc, props2) {
    var target = sfc.__vccOpts || sfc;
    var _iterator = _createForOfIteratorHelper2(props2), _step;
    try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray2(_step.value, 2), key = _step$value[0], val = _step$value[1];
            target[key] = val;
        }
    } catch (err) {
        _iterator.e(err);
    } finally {
        _iterator.f();
    }
    return target;
};

/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ function makeMap$1(str, expectsLowerCase) {
    var set2 = new Set(str.split(","));
    return expectsLowerCase ? function(val) {
        return set2.has(val.toLowerCase());
    } : function(val) {
        return set2.has(val);
    };
}

var EMPTY_OBJ = Object.freeze({});

var EMPTY_ARR = Object.freeze([]);

var NOOP = function NOOP() {};

var NO = function NO() {
    return false;
};

var isOn = function isOn(key) {
    return key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (
    // uppercase letter
    key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
};

var isModelListener = function isModelListener(key) {
    return key.startsWith("onUpdate:");
};

var extend = Object.assign;

var remove = function remove(arr, el) {
    var i2 = arr.indexOf(el);
    if (i2 > -1) {
        arr.splice(i2, 1);
    }
};

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
    return hasOwnProperty$1.call(val, key);
};

var isArray$1 = Array.isArray;

var isMap = function isMap(val) {
    return toTypeString(val) === "[object Map]";
};

var isSet = function isSet(val) {
    return toTypeString(val) === "[object Set]";
};

var isFunction = function isFunction(val) {
    return typeof val === "function";
};

var isString = function isString(val) {
    return typeof val === "string";
};

var isSymbol = function isSymbol(val) {
    return _typeof2(val) === "symbol";
};

var isObject$1 = function isObject$1(val) {
    return val !== null && _typeof2(val) === "object";
};

var isPromise = function isPromise(val) {
    return (isObject$1(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value2) {
    return objectToString.call(value2);
};

var toRawType = function toRawType(value2) {
    return toTypeString(value2).slice(8, -1);
};

var isPlainObject$2 = function isPlainObject$2(val) {
    return toTypeString(val) === "[object Object]";
};

var isIntegerKey = function isIntegerKey(key) {
    return isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
};

var isReservedProp = /*   */ makeMap$1(
// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");

var isBuiltInDirective = /*   */ makeMap$1("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");

var cacheStringFunction = function cacheStringFunction(fn) {
    var cache = /*   */ Object.create(null);
    return function(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};

var camelizeRE = /-(\w)/g;

var camelize = cacheStringFunction(function(str) {
    return str.replace(camelizeRE, function(_2, c2) {
        return c2 ? c2.toUpperCase() : "";
    });
});

var hyphenateRE = /\B([A-Z])/g;

var hyphenate = cacheStringFunction(function(str) {
    return str.replace(hyphenateRE, "-$1").toLowerCase();
});

var capitalize = cacheStringFunction(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});

var toHandlerKey = cacheStringFunction(function(str) {
    var s2 = str ? "on".concat(capitalize(str)) : "";
    return s2;
});

var hasChanged = function hasChanged(value2, oldValue) {
    return !Object.is(value2, oldValue);
};

var invokeArrayFns$1 = function invokeArrayFns$1(fns, arg) {
    for (var i2 = 0; i2 < fns.length; i2++) {
        fns[i2](arg);
    }
};

var def = function def(obj, key, value2) {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value: value2
    });
};

var looseToNumber = function looseToNumber(val) {
    var n2 = parseFloat(val);
    return isNaN(n2) ? val : n2;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};

function normalizeStyle(value2) {
    if (isArray$1(value2)) {
        var res = {};
        for (var i2 = 0; i2 < value2.length; i2++) {
            var item = value2[i2];
            var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) {
                for (var key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    } else if (isString(value2) || isObject$1(value2)) {
        return value2;
    }
}

var listDelimiterRE = /;(?![^(]*\))/g;

var propertyDelimiterRE = /:([^]+)/;

var styleCommentRE = /\/\*[^]*?\*\//g;

function parseStringStyle(cssText) {
    var ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(function(item) {
        if (item) {
            var tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}

function normalizeClass(value2) {
    var res = "";
    if (isString(value2)) {
        res = value2;
    } else if (isArray$1(value2)) {
        for (var i2 = 0; i2 < value2.length; i2++) {
            var normalized = normalizeClass(value2[i2]);
            if (normalized) {
                res += normalized + " ";
            }
        }
    } else if (isObject$1(value2)) {
        for (var name in value2) {
            if (value2[name]) {
                res += name + " ";
            }
        }
    }
    return res.trim();
}

var toDisplayString = function toDisplayString(val) {
    return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, _replacer, 2) : String(val);
};

var _replacer = function replacer(_key, val) {
    if (val && val.__v_isRef) {
        return _replacer(_key, val.value);
    } else if (isMap(val)) {
        return _defineProperty2({}, "Map(".concat(val.size, ")"), _toConsumableArray2(val.entries()).reduce(function(entries, _ref, i2) {
            var _ref2 = _slicedToArray2(_ref, 2), key = _ref2[0], val2 = _ref2[1];
            entries[stringifySymbol(key, i2) + " =>"] = val2;
            return entries;
        }, {}));
    } else if (isSet(val)) {
        return _defineProperty2({}, "Set(".concat(val.size, ")"), _toConsumableArray2(val.values()).map(function(v2) {
            return stringifySymbol(v2);
        }));
    } else if (isSymbol(val)) {
        return stringifySymbol(val);
    } else if (isObject$1(val) && !isArray$1(val) && !isPlainObject$2(val)) {
        return String(val);
    }
    return val;
};

var stringifySymbol = function stringifySymbol(v2) {
    var i2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var _a;
    return isSymbol(v2) ? "Symbol(".concat((_a = v2.description) != null ? _a : i2, ")") : v2;
};

var SLOT_DEFAULT_NAME = "d";

var ON_SHOW = "onShow";

var ON_HIDE = "onHide";

var ON_LAUNCH = "onLaunch";

var ON_ERROR = "onError";

var ON_THEME_CHANGE = "onThemeChange";

var ON_PAGE_NOT_FOUND = "onPageNotFound";

var ON_UNHANDLE_REJECTION = "onUnhandledRejection";

var ON_EXIT = "onExit";

var ON_LOAD = "onLoad";

var ON_READY = "onReady";

var ON_UNLOAD = "onUnload";

var ON_INIT = "onInit";

var ON_SAVE_EXIT_STATE = "onSaveExitState";

var ON_RESIZE = "onResize";

var ON_BACK_PRESS = "onBackPress";

var ON_PAGE_SCROLL = "onPageScroll";

var ON_TAB_ITEM_TAP = "onTabItemTap";

var ON_REACH_BOTTOM = "onReachBottom";

var ON_PULL_DOWN_REFRESH = "onPullDownRefresh";

var ON_SHARE_TIMELINE = "onShareTimeline";

var ON_ADD_TO_FAVORITES = "onAddToFavorites";

var ON_SHARE_APP_MESSAGE = "onShareAppMessage";

var ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";

var ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";

var ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";

var ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";

var ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";

var customizeRE = /:/g;

function customizeEvent(str) {
    return camelize(str.replace(customizeRE, "-"));
}

function hasLeadingSlash(str) {
    return str.indexOf("/") === 0;
}

function addLeadingSlash(str) {
    return hasLeadingSlash(str) ? str : "/" + str;
}

var invokeArrayFns = function invokeArrayFns(fns, arg) {
    var ret;
    for (var i2 = 0; i2 < fns.length; i2++) {
        ret = fns[i2](arg);
    }
    return ret;
};

function once(fn) {
    var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var res;
    return function() {
        if (fn) {
            for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                args[_key2] = arguments[_key2];
            }
            res = fn.apply(ctx, args);
            fn = null;
        }
        return res;
    };
}

function getValueByDataPath(obj, path) {
    if (!isString(path)) {
        return;
    }
    path = path.replace(/\[(\d+)\]/g, ".$1");
    var parts = path.split(".");
    var key = parts[0];
    if (!obj) {
        obj = {};
    }
    if (parts.length === 1) {
        return obj[key];
    }
    return getValueByDataPath(obj[key], parts.slice(1).join("."));
}

function sortObject(obj) {
    var sortObj = {};
    if (isPlainObject$2(obj)) {
        Object.keys(obj).sort().forEach(function(key) {
            var _key = key;
            sortObj[_key] = obj[_key];
        });
    }
    return !Object.keys(sortObj) ? obj : sortObj;
}

var encode$1 = encodeURIComponent;

function stringifyQuery(obj) {
    var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode$1;
    var res = obj ? Object.keys(obj).map(function(key) {
        var val = obj[key];
        if (_typeof2(val) === void 0 || val === null) {
            val = "";
        } else if (isPlainObject$2(val)) {
            val = JSON.stringify(val);
        }
        return encodeStr(key) + "=" + encodeStr(val);
    }).filter(function(x) {
        return x.length > 0;
    }).join("&") : null;
    return res ? "?".concat(res) : "";
}

var PAGE_HOOKS = [ ON_INIT, ON_LOAD, ON_SHOW, ON_HIDE, ON_UNLOAD, ON_BACK_PRESS, ON_PAGE_SCROLL, ON_TAB_ITEM_TAP, ON_REACH_BOTTOM, ON_PULL_DOWN_REFRESH, ON_SHARE_TIMELINE, ON_SHARE_APP_MESSAGE, ON_ADD_TO_FAVORITES, ON_SAVE_EXIT_STATE, ON_NAVIGATION_BAR_BUTTON_TAP, ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED, ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED, ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED, ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED ];

function isRootHook(name) {
    return PAGE_HOOKS.indexOf(name) > -1;
}

var UniLifecycleHooks = [ ON_SHOW, ON_HIDE, ON_LAUNCH, ON_ERROR, ON_THEME_CHANGE, ON_PAGE_NOT_FOUND, ON_UNHANDLE_REJECTION, ON_EXIT, ON_INIT, ON_LOAD, ON_READY, ON_UNLOAD, ON_RESIZE, ON_BACK_PRESS, ON_PAGE_SCROLL, ON_TAB_ITEM_TAP, ON_REACH_BOTTOM, ON_PULL_DOWN_REFRESH, ON_SHARE_TIMELINE, ON_ADD_TO_FAVORITES, ON_SHARE_APP_MESSAGE, ON_SAVE_EXIT_STATE, ON_NAVIGATION_BAR_BUTTON_TAP, ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED, ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED, ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED, ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED ];

var MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /*   */ function() {
    return {
        onPageScroll: 1,
        onShareAppMessage: 1 << 1,
        onShareTimeline: 1 << 2
    };
}();

function isUniLifecycleHook(name, value2) {
    var checkType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (checkType && !isFunction(value2)) {
        return false;
    }
    if (UniLifecycleHooks.indexOf(name) > -1) {
        return true;
    } else if (name.indexOf("on") === 0) {
        return true;
    }
    return false;
}

var vueApp;

var createVueAppHooks = [];

function onCreateVueApp(hook) {
    if (vueApp) {
        return hook(vueApp);
    }
    createVueAppHooks.push(hook);
}

function invokeCreateVueAppHook(app) {
    vueApp = app;
    createVueAppHooks.forEach(function(hook) {
        return hook(app);
    });
}

var invokeCreateErrorHandler = once(function(app, createErrorHandler2) {
    if (isFunction(app._component.onError)) {
        return createErrorHandler2(app);
    }
});

var E$1 = function E$1() {};

E$1.prototype = {
    on: function on(name, callback, ctx) {
        var e2 = this.e || (this.e = {});
        (e2[name] || (e2[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function once(name, callback, ctx) {
        var self2 = this;
        function listener() {
            self2.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function emit(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i2 = 0;
        var len = evtArr.length;
        for (i2; i2 < len; i2++) {
            evtArr[i2].fn.apply(evtArr[i2].ctx, data);
        }
        return this;
    },
    off: function off(name, callback) {
        var e2 = this.e || (this.e = {});
        var evts = e2[name];
        var liveEvents = [];
        if (evts && callback) {
            for (var i2 = evts.length - 1; i2 >= 0; i2--) {
                if (evts[i2].fn === callback || evts[i2].fn._ === callback) {
                    evts.splice(i2, 1);
                    break;
                }
            }
            liveEvents = evts;
        }
        liveEvents.length ? e2[name] = liveEvents : delete e2[name];
        return this;
    }
};

var E$1$1 = E$1;

var LOCALE_ZH_HANS = "zh-Hans";

var LOCALE_ZH_HANT = "zh-Hant";

var LOCALE_EN = "en";

var LOCALE_FR = "fr";

var LOCALE_ES = "es";

function include(str, parts) {
    return !!parts.find(function(part) {
        return str.indexOf(part) !== -1;
    });
}

function startsWith(str, parts) {
    return parts.find(function(part) {
        return str.indexOf(part) === 0;
    });
}

function normalizeLocale(locale, messages) {
    if (!locale) {
        return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
        return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
        return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
        if (locale.indexOf("-hans") > -1) {
            return LOCALE_ZH_HANS;
        }
        if (locale.indexOf("-hant") > -1) {
            return LOCALE_ZH_HANT;
        }
        if (include(locale, [ "-tw", "-hk", "-mo", "-cht" ])) {
            return LOCALE_ZH_HANT;
        }
        return LOCALE_ZH_HANS;
    }
    var locales = [ LOCALE_EN, LOCALE_FR, LOCALE_ES ];
    if (messages && Object.keys(messages).length > 0) {
        locales = Object.keys(messages);
    }
    var lang = startsWith(locale, locales);
    if (lang) {
        return lang;
    }
}

function getBaseSystemInfo() {
    return wx.getSystemInfoSync();
}

function validateProtocolFail(name, msg) {
    console.warn("".concat(name, ": ").concat(msg));
}

function validateProtocol(name, data, protocol, onFail) {
    if (!onFail) {
        onFail = validateProtocolFail;
    }
    for (var key in protocol) {
        var errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn(data, key));
        if (isString(errMsg)) {
            onFail(name, errMsg);
        }
    }
}

function validateProtocols(name, args, protocol, onFail) {
    if (!protocol) {
        return;
    }
    if (!isArray$1(protocol)) {
        return validateProtocol(name, args[0] || /*   */ Object.create(null), protocol, onFail);
    }
    var len = protocol.length;
    var argsLen = args.length;
    for (var i2 = 0; i2 < len; i2++) {
        var opts = protocol[i2];
        var data = /*   */ Object.create(null);
        if (argsLen > i2) {
            data[opts.name] = args[i2];
        }
        validateProtocol(name, data, _defineProperty2({}, opts.name, opts), onFail);
    }
}

function validateProp$1(name, value2, prop, isAbsent) {
    if (!isPlainObject$2(prop)) {
        prop = {
            type: prop
        };
    }
    var _prop = prop, type = _prop.type, required = _prop.required, validator = _prop.validator;
    if (required && isAbsent) {
        return 'Missing required args: "' + name + '"';
    }
    if (value2 == null && !required) {
        return;
    }
    if (type != null) {
        var isValid = false;
        var types = isArray$1(type) ? type : [ type ];
        var expectedTypes = [];
        for (var i2 = 0; i2 < types.length && !isValid; i2++) {
            var _assertType$ = assertType$1(value2, types[i2]), valid = _assertType$.valid, expectedType = _assertType$.expectedType;
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            return getInvalidTypeMessage$1(name, value2, expectedTypes);
        }
    }
    if (validator) {
        return validator(value2);
    }
}

var isSimpleType$1 = /*   */ makeMap$1("String,Number,Boolean,Function,Symbol");

function assertType$1(value2, type) {
    var valid;
    var expectedType = getType$1(type);
    if (isSimpleType$1(expectedType)) {
        var t2 = _typeof2(value2);
        valid = t2 === expectedType.toLowerCase();
        if (!valid && t2 === "object") {
            valid = value2 instanceof type;
        }
    } else if (expectedType === "Object") {
        valid = isObject$1(value2);
    } else if (expectedType === "Array") {
        valid = isArray$1(value2);
    } else {
        {
            valid = value2 instanceof type;
        }
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}

function getInvalidTypeMessage$1(name, value2, expectedTypes) {
    var message = 'Invalid args: type check failed for args "'.concat(name, '". Expected ').concat(expectedTypes.map(capitalize).join(", "));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value2);
    var expectedValue = styleValue$1(value2, expectedType);
    var receivedValue = styleValue$1(value2, receivedType);
    if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$1(expectedType, receivedType)) {
        message += " with value ".concat(expectedValue);
    }
    message += ", got ".concat(receivedType, " ");
    if (isExplicable$1(receivedType)) {
        message += "with value ".concat(receivedValue, ".");
    }
    return message;
}

function getType$1(ctor) {
    var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : "";
}

function styleValue$1(value2, type) {
    if (type === "String") {
        return '"'.concat(value2, '"');
    } else if (type === "Number") {
        return "".concat(Number(value2));
    } else {
        return "".concat(value2);
    }
}

function isExplicable$1(type) {
    var explicitTypes = [ "string", "number", "boolean" ];
    return explicitTypes.some(function(elem) {
        return type.toLowerCase() === elem;
    });
}

function isBoolean$1() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
    }
    return args.some(function(elem) {
        return elem.toLowerCase() === "boolean";
    });
}

function tryCatch(fn) {
    return function() {
        try {
            return fn.apply(fn, arguments);
        } catch (e2) {
            console.error(e2);
        }
    };
}

var invokeCallbackId = 1;

var invokeCallbacks = {};

function addInvokeCallback(id, name, callback) {
    var keepAlive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    invokeCallbacks[id] = {
        name: name,
        keepAlive: keepAlive,
        callback: callback
    };
    return id;
}

function invokeCallback(id, res, extras) {
    if (typeof id === "number") {
        var opts = invokeCallbacks[id];
        if (opts) {
            if (!opts.keepAlive) {
                delete invokeCallbacks[id];
            }
            return opts.callback(res, extras);
        }
    }
    return res;
}

var API_SUCCESS = "success";

var API_FAIL = "fail";

var API_COMPLETE = "complete";

function getApiCallbacks(args) {
    var apiCallbacks = {};
    for (var name in args) {
        var fn = args[name];
        if (isFunction(fn)) {
            apiCallbacks[name] = tryCatch(fn);
            delete args[name];
        }
    }
    return apiCallbacks;
}

function normalizeErrMsg(errMsg, name) {
    if (!errMsg || errMsg.indexOf(":fail") === -1) {
        return name + ":ok";
    }
    return name + errMsg.substring(errMsg.indexOf(":fail"));
}

function createAsyncApiCallback(name) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, beforeAll = _ref5.beforeAll, beforeSuccess = _ref5.beforeSuccess;
    if (!isPlainObject$2(args)) {
        args = {};
    }
    var _getApiCallbacks = getApiCallbacks(args), success = _getApiCallbacks.success, fail = _getApiCallbacks.fail, complete = _getApiCallbacks.complete;
    var hasSuccess = isFunction(success);
    var hasFail = isFunction(fail);
    var hasComplete = isFunction(complete);
    var callbackId = invokeCallbackId++;
    addInvokeCallback(callbackId, name, function(res) {
        res = res || {};
        res.errMsg = normalizeErrMsg(res.errMsg, name);
        isFunction(beforeAll) && beforeAll(res);
        if (res.errMsg === name + ":ok") {
            isFunction(beforeSuccess) && beforeSuccess(res, args);
            hasSuccess && success(res);
        } else {
            hasFail && fail(res);
        }
        hasComplete && complete(res);
    });
    return callbackId;
}

var HOOK_SUCCESS = "success";

var HOOK_FAIL = "fail";

var HOOK_COMPLETE = "complete";

var globalInterceptors = {};

var scopedInterceptors = {};

function wrapperHook(hook, params) {
    return function(data) {
        return hook(data, params) || data;
    };
}

function queue$2(hooks, data, params) {
    var promise2 = false;
    for (var i2 = 0; i2 < hooks.length; i2++) {
        var hook = hooks[i2];
        if (promise2) {
            promise2 = Promise.resolve(wrapperHook(hook, params));
        } else {
            var res = hook(data, params);
            if (isPromise(res)) {
                promise2 = Promise.resolve(res);
            }
            if (res === false) {
                return {
                    then: function then() {},
                    catch: function _catch() {}
                };
            }
        }
    }
    return promise2 || {
        then: function then(callback) {
            return callback(data);
        },
        catch: function _catch() {}
    };
}

function wrapperOptions(interceptors2) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    [ HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE ].forEach(function(name) {
        var hooks = interceptors2[name];
        if (!isArray$1(hooks)) {
            return;
        }
        var oldCallback = options[name];
        options[name] = function callbackInterceptor(res) {
            queue$2(hooks, res, options).then(function(res2) {
                return isFunction(oldCallback) && oldCallback(res2) || res2;
            });
        };
    });
    return options;
}

function wrapperReturnValue(method, returnValue) {
    var returnValueHooks = [];
    if (isArray$1(globalInterceptors.returnValue)) {
        returnValueHooks.push.apply(returnValueHooks, _toConsumableArray2(globalInterceptors.returnValue));
    }
    var interceptor = scopedInterceptors[method];
    if (interceptor && isArray$1(interceptor.returnValue)) {
        returnValueHooks.push.apply(returnValueHooks, _toConsumableArray2(interceptor.returnValue));
    }
    returnValueHooks.forEach(function(hook) {
        returnValue = hook(returnValue) || returnValue;
    });
    return returnValue;
}

function getApiInterceptorHooks(method) {
    var interceptor = /*   */ Object.create(null);
    Object.keys(globalInterceptors).forEach(function(hook) {
        if (hook !== "returnValue") {
            interceptor[hook] = globalInterceptors[hook].slice();
        }
    });
    var scopedInterceptor = scopedInterceptors[method];
    if (scopedInterceptor) {
        Object.keys(scopedInterceptor).forEach(function(hook) {
            if (hook !== "returnValue") {
                interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
            }
        });
    }
    return interceptor;
}

function invokeApi(method, api, options, params) {
    var interceptor = getApiInterceptorHooks(method);
    if (interceptor && Object.keys(interceptor).length) {
        if (isArray$1(interceptor.invoke)) {
            var res = queue$2(interceptor.invoke, options);
            return res.then(function(options2) {
                return api.apply(void 0, [ wrapperOptions(getApiInterceptorHooks(method), options2) ].concat(_toConsumableArray2(params)));
            });
        } else {
            return api.apply(void 0, [ wrapperOptions(interceptor, options) ].concat(_toConsumableArray2(params)));
        }
    }
    return api.apply(void 0, [ options ].concat(_toConsumableArray2(params)));
}

function hasCallback(args) {
    if (isPlainObject$2(args) && [ API_SUCCESS, API_FAIL, API_COMPLETE ].find(function(cb) {
        return isFunction(args[cb]);
    })) {
        return true;
    }
    return false;
}

function handlePromise(promise2) {
    return promise2;
}

function promisify$1(name, fn) {
    return function() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
            rest[_key4 - 1] = arguments[_key4];
        }
        if (hasCallback(args)) {
            return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
        }
        return wrapperReturnValue(name, handlePromise(new Promise(function(resolve2, reject) {
            invokeApi(name, fn, extend(args, {
                success: resolve2,
                fail: reject
            }), rest);
        })));
    };
}

function formatApiArgs(args, options) {
    var params = args[0];
    if (!options || !options.formatArgs || !isPlainObject$2(options.formatArgs) && isPlainObject$2(params)) {
        return;
    }
    var formatArgs = options.formatArgs;
    var keys = Object.keys(formatArgs);
    for (var i2 = 0; i2 < keys.length; i2++) {
        var name = keys[i2];
        var formatterOrDefaultValue = formatArgs[name];
        if (isFunction(formatterOrDefaultValue)) {
            var errMsg = formatterOrDefaultValue(args[0][name], params);
            if (isString(errMsg)) {
                return errMsg;
            }
        } else {
            if (!hasOwn(params, name)) {
                params[name] = formatterOrDefaultValue;
            }
        }
    }
}

function invokeSuccess(id, name, res) {
    var result = {
        errMsg: name + ":ok"
    };
    return invokeCallback(id, extend(res || {}, result));
}

function invokeFail(id, name, errMsg) {
    var errRes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var apiErrMsg = name + ":fail" + (errMsg ? " " + errMsg : "");
    delete errRes.errCode;
    var res = extend({
        errMsg: apiErrMsg
    }, errRes);
    return invokeCallback(id, res);
}

function beforeInvokeApi(name, args, protocol, options) {
    {
        validateProtocols(name, args, protocol);
    }
    if (options && options.beforeInvoke) {
        var errMsg2 = options.beforeInvoke(args);
        if (isString(errMsg2)) {
            return errMsg2;
        }
    }
    var errMsg = formatApiArgs(args, options);
    if (errMsg) {
        return errMsg;
    }
}

function parseErrMsg(errMsg) {
    if (!errMsg || isString(errMsg)) {
        return errMsg;
    }
    if (errMsg.stack) {
        console.error(errMsg.message + "\n" + errMsg.stack);
        return errMsg.message;
    }
    return errMsg;
}

function wrapperTaskApi(name, fn, protocol, options) {
    return function(args) {
        var id = createAsyncApiCallback(name, args, options);
        var errMsg = beforeInvokeApi(name, [ args ], protocol, options);
        if (errMsg) {
            return invokeFail(id, name, errMsg);
        }
        return fn(args, {
            resolve: function resolve(res) {
                return invokeSuccess(id, name, res);
            },
            reject: function reject(errMsg2, errRes) {
                return invokeFail(id, name, parseErrMsg(errMsg2), errRes);
            }
        });
    };
}

function wrapperSyncApi(name, fn, protocol, options) {
    return function() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
            args[_key5] = arguments[_key5];
        }
        var errMsg = beforeInvokeApi(name, args, protocol, options);
        if (errMsg) {
            throw new Error(errMsg);
        }
        return fn.apply(null, args);
    };
}

function wrapperAsyncApi(name, fn, protocol, options) {
    return wrapperTaskApi(name, fn, protocol, options);
}

function defineSyncApi(name, fn, protocol, options) {
    return wrapperSyncApi(name, fn, protocol, options);
}

function defineAsyncApi(name, fn, protocol, options) {
    return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}

var API_UPX2PX = "upx2px";

var Upx2pxProtocol = [ {
    name: "upx",
    type: [ Number, String ],
    required: true
} ];

var EPS = 1e-4;

var BASE_DEVICE_WIDTH = 750;

var isIOS = false;

var deviceWidth = 0;

var deviceDPR = 0;

function checkDeviceWidth() {
    var _getBaseSystemInfo = getBaseSystemInfo(), platform2 = _getBaseSystemInfo.platform, pixelRatio = _getBaseSystemInfo.pixelRatio, windowWidth2 = _getBaseSystemInfo.windowWidth;
    deviceWidth = windowWidth2;
    deviceDPR = pixelRatio;
    isIOS = platform2 === "ios";
}

var upx2px = defineSyncApi(API_UPX2PX, function(number2, newDeviceWidth) {
    if (deviceWidth === 0) {
        checkDeviceWidth();
    }
    number2 = Number(number2);
    if (number2 === 0) {
        return 0;
    }
    var width = newDeviceWidth || deviceWidth;
    var result = number2 / BASE_DEVICE_WIDTH * width;
    if (result < 0) {
        result = -result;
    }
    result = Math.floor(result + EPS);
    if (result === 0) {
        if (deviceDPR === 1 || !isIOS) {
            result = 1;
        } else {
            result = .5;
        }
    }
    return number2 < 0 ? -result : result;
}, Upx2pxProtocol);

var API_ADD_INTERCEPTOR = "addInterceptor";

var API_REMOVE_INTERCEPTOR = "removeInterceptor";

var AddInterceptorProtocol = [ {
    name: "method",
    type: [ String, Object ],
    required: true
} ];

var RemoveInterceptorProtocol = AddInterceptorProtocol;

function mergeInterceptorHook(interceptors2, interceptor) {
    Object.keys(interceptor).forEach(function(hook) {
        if (isFunction(interceptor[hook])) {
            interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
        }
    });
}

function removeInterceptorHook(interceptors2, interceptor) {
    if (!interceptors2 || !interceptor) {
        return;
    }
    Object.keys(interceptor).forEach(function(name) {
        var hooks = interceptors2[name];
        var hook = interceptor[name];
        if (isArray$1(hooks) && isFunction(hook)) {
            remove(hooks, hook);
        }
    });
}

function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : isArray$1(childVal) ? childVal : [ childVal ] : parentVal;
    return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
    var res = [];
    for (var i2 = 0; i2 < hooks.length; i2++) {
        if (res.indexOf(hooks[i2]) === -1) {
            res.push(hooks[i2]);
        }
    }
    return res;
}

var addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, function(method, interceptor) {
    if (isString(method) && isPlainObject$2(interceptor)) {
        mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
    } else if (isPlainObject$2(method)) {
        mergeInterceptorHook(globalInterceptors, method);
    }
}, AddInterceptorProtocol);

var removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, function(method, interceptor) {
    if (isString(method)) {
        if (isPlainObject$2(interceptor)) {
            removeInterceptorHook(scopedInterceptors[method], interceptor);
        } else {
            delete scopedInterceptors[method];
        }
    } else if (isPlainObject$2(method)) {
        removeInterceptorHook(globalInterceptors, method);
    }
}, RemoveInterceptorProtocol);

var interceptors = {};

var API_ON = "$on";

var OnProtocol = [ {
    name: "event",
    type: String,
    required: true
}, {
    name: "callback",
    type: Function,
    required: true
} ];

var API_ONCE = "$once";

var OnceProtocol = OnProtocol;

var API_OFF = "$off";

var OffProtocol = [ {
    name: "event",
    type: [ String, Array ]
}, {
    name: "callback",
    type: Function
} ];

var API_EMIT = "$emit";

var EmitProtocol = [ {
    name: "event",
    type: String,
    required: true
} ];

var emitter = new E$1$1();

var $on = defineSyncApi(API_ON, function(name, callback) {
    emitter.on(name, callback);
    return function() {
        return emitter.off(name, callback);
    };
}, OnProtocol);

var $once = defineSyncApi(API_ONCE, function(name, callback) {
    emitter.once(name, callback);
    return function() {
        return emitter.off(name, callback);
    };
}, OnceProtocol);

var $off = defineSyncApi(API_OFF, function(name, callback) {
    if (!name) {
        emitter.e = {};
        return;
    }
    if (!isArray$1(name)) name = [ name ];
    name.forEach(function(n2) {
        return emitter.off(n2, callback);
    });
}, OffProtocol);

var $emit = defineSyncApi(API_EMIT, function(name) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key6 = 1; _key6 < _len5; _key6++) {
        args[_key6 - 1] = arguments[_key6];
    }
    emitter.emit.apply(emitter, [ name ].concat(args));
}, EmitProtocol);

var cid;

var cidErrMsg;

var enabled;

function normalizePushMessage(message) {
    try {
        return JSON.parse(message);
    } catch (e2) {}
    return message;
}

function invokePushCallback(args) {
    if (args.type === "enabled") {
        enabled = true;
    } else if (args.type === "clientId") {
        cid = args.cid;
        cidErrMsg = args.errMsg;
        invokeGetPushCidCallbacks(cid, args.errMsg);
    } else if (args.type === "pushMsg") {
        var message = {
            type: "receive",
            data: normalizePushMessage(args.message)
        };
        for (var i2 = 0; i2 < onPushMessageCallbacks.length; i2++) {
            var callback = onPushMessageCallbacks[i2];
            callback(message);
            if (message.stopped) {
                break;
            }
        }
    } else if (args.type === "click") {
        onPushMessageCallbacks.forEach(function(callback) {
            callback({
                type: "click",
                data: normalizePushMessage(args.message)
            });
        });
    }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid2, errMsg) {
    getPushCidCallbacks.forEach(function(callback) {
        callback(cid2, errMsg);
    });
    getPushCidCallbacks.length = 0;
}

var API_GET_PUSH_CLIENT_ID = "getPushClientId";

var getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, function(_2, _ref6) {
    var resolve2 = _ref6.resolve, reject = _ref6.reject;
    Promise.resolve().then(function() {
        if (typeof enabled === "undefined") {
            enabled = false;
            cid = "";
            cidErrMsg = "uniPush is not enabled";
        }
        getPushCidCallbacks.push(function(cid2, errMsg) {
            if (cid2) {
                resolve2({
                    cid: cid2
                });
            } else {
                reject(errMsg);
            }
        });
        if (typeof cid !== "undefined") {
            invokeGetPushCidCallbacks(cid, cidErrMsg);
        }
    });
});

var onPushMessageCallbacks = [];

var onPushMessage = function onPushMessage(fn) {
    if (onPushMessageCallbacks.indexOf(fn) === -1) {
        onPushMessageCallbacks.push(fn);
    }
};

var offPushMessage = function offPushMessage(fn) {
    if (!fn) {
        onPushMessageCallbacks.length = 0;
    } else {
        var index2 = onPushMessageCallbacks.indexOf(fn);
        if (index2 > -1) {
            onPushMessageCallbacks.splice(index2, 1);
        }
    }
};

var SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

var CONTEXT_API_RE_EXC = [ "createBLEConnection" ];

var ASYNC_API = [ "createBLEConnection" ];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
    return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}

function isSyncApi(name) {
    return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
    return CALLBACK_API_RE.test(name) && name !== "onPush";
}

function shouldPromise(name) {
    if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
        return false;
    }
    return true;
}

if (!Promise.prototype.finally) {
    Promise.prototype.finally = function(onfinally) {
        var promise2 = this.constructor;
        return this.then(function(value2) {
            return promise2.resolve(onfinally && onfinally()).then(function() {
                return value2;
            });
        }, function(reason) {
            return promise2.resolve(onfinally && onfinally()).then(function() {
                throw reason;
            });
        });
    };
}

function promisify(name, api) {
    if (!shouldPromise(name)) {
        return api;
    }
    if (!isFunction(api)) {
        return api;
    }
    return function promiseApi() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key7 = 1; _key7 < _len6; _key7++) {
            rest[_key7 - 1] = arguments[_key7];
        }
        if (isFunction(options.success) || isFunction(options.fail) || isFunction(options.complete)) {
            return wrapperReturnValue(name, invokeApi(name, api, options, rest));
        }
        return wrapperReturnValue(name, handlePromise(new Promise(function(resolve2, reject) {
            invokeApi(name, api, extend({}, options, {
                success: resolve2,
                fail: reject
            }), rest);
        })));
    };
}

var CALLBACKS = [ "success", "fail", "cancel", "complete" ];

function initWrapper(protocols2) {
    function processCallback(methodName, method, returnValue) {
        return function(res) {
            return method(processReturnValue(methodName, res, returnValue));
        };
    }
    function processArgs(methodName, fromArgs) {
        var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        if (isPlainObject$2(fromArgs)) {
            var toArgs = keepFromArgs === true ? fromArgs : {};
            if (isFunction(argsOption)) {
                argsOption = argsOption(fromArgs, toArgs) || {};
            }
            for (var key in fromArgs) {
                if (hasOwn(argsOption, key)) {
                    var keyOption = argsOption[key];
                    if (isFunction(keyOption)) {
                        keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
                    }
                    if (!keyOption) {
                        console.warn("微信小程序 ".concat(methodName, " 暂不支持 ").concat(key));
                    } else if (isString(keyOption)) {
                        toArgs[keyOption] = fromArgs[key];
                    } else if (isPlainObject$2(keyOption)) {
                        toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
                    }
                } else if (CALLBACKS.indexOf(key) !== -1) {
                    var callback = fromArgs[key];
                    if (isFunction(callback)) {
                        toArgs[key] = processCallback(methodName, callback, returnValue);
                    }
                } else {
                    if (!keepFromArgs && !hasOwn(toArgs, key)) {
                        toArgs[key] = fromArgs[key];
                    }
                }
            }
            return toArgs;
        } else if (isFunction(fromArgs)) {
            fromArgs = processCallback(methodName, fromArgs, returnValue);
        }
        return fromArgs;
    }
    function processReturnValue(methodName, res, returnValue) {
        var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (isFunction(protocols2.returnValue)) {
            res = protocols2.returnValue(methodName, res);
        }
        return processArgs(methodName, res, returnValue, {}, keepReturnValue);
    }
    return function wrapper(methodName, method) {
        if (!hasOwn(protocols2, methodName)) {
            return method;
        }
        var protocol = protocols2[methodName];
        if (!protocol) {
            return function() {
                console.error("微信小程序 暂不支持".concat(methodName));
            };
        }
        return function(arg1, arg2) {
            var options = protocol;
            if (isFunction(protocol)) {
                options = protocol(arg1);
            }
            arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
            var args = [ arg1 ];
            if (typeof arg2 !== "undefined") {
                args.push(arg2);
            }
            var returnValue = wx[options.name || methodName].apply(wx, args);
            if (isSyncApi(methodName)) {
                return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
            }
            return returnValue;
        };
    };
}

var getLocale = function getLocale() {
    var app = isFunction(getApp) && getApp({
        allowDefault: true
    });
    if (app && app.$vm) {
        return app.$vm.$locale;
    }
    return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
};

var setLocale = function setLocale(locale) {
    var app = isFunction(getApp) && getApp();
    if (!app) {
        return false;
    }
    var oldLocale = app.$vm.$locale;
    if (oldLocale !== locale) {
        app.$vm.$locale = locale;
        onLocaleChangeCallbacks.forEach(function(fn) {
            return fn({
                locale: locale
            });
        });
        return true;
    }
    return false;
};

var onLocaleChangeCallbacks = [];

var onLocaleChange = function onLocaleChange(fn) {
    if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
        onLocaleChangeCallbacks.push(fn);
    }
};

if (typeof global !== "undefined") {
    global.getLocale = getLocale;
}

var UUID_KEY = "__DC_STAT_UUID";

var deviceId;

function useDeviceId() {
    var global2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : wx;
    return function addDeviceId(_2, toRes) {
        deviceId = deviceId || global2.getStorageSync(UUID_KEY);
        if (!deviceId) {
            deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
            wx.setStorage({
                key: UUID_KEY,
                data: deviceId
            });
        }
        toRes.deviceId = deviceId;
    };
}

function addSafeAreaInsets(fromRes, toRes) {
    if (fromRes.safeArea) {
        var safeArea = fromRes.safeArea;
        toRes.safeAreaInsets = {
            top: safeArea.top,
            left: safeArea.left,
            right: fromRes.windowWidth - safeArea.right,
            bottom: fromRes.screenHeight - safeArea.bottom
        };
    }
}

function populateParameters(fromRes, toRes) {
    var _fromRes$brand = fromRes.brand, brand = _fromRes$brand === void 0 ? "" : _fromRes$brand, _fromRes$model = fromRes.model, model = _fromRes$model === void 0 ? "" : _fromRes$model, _fromRes$system = fromRes.system, system2 = _fromRes$system === void 0 ? "" : _fromRes$system, _fromRes$language = fromRes.language, language = _fromRes$language === void 0 ? "" : _fromRes$language, theme = fromRes.theme, version2 = fromRes.version, platform2 = fromRes.platform, fontSizeSetting = fromRes.fontSizeSetting, SDKVersion = fromRes.SDKVersion, pixelRatio = fromRes.pixelRatio, deviceOrientation = fromRes.deviceOrientation;
    var osName = "";
    var osVersion = "";
    {
        osName = system2.split(" ")[0] || "";
        osVersion = system2.split(" ")[1] || "";
    }
    var hostVersion = version2;
    var deviceType = getGetDeviceType(fromRes, model);
    var deviceBrand = getDeviceBrand(brand);
    var _hostName = getHostName(fromRes);
    var _deviceOrientation = deviceOrientation;
    var _devicePixelRatio = pixelRatio;
    var _SDKVersion = SDKVersion;
    var hostLanguage = language.replace(/_/g, "-");
    var parameters = {
        appId: "__UNI__156631B",
        appName: "vue3",
        appVersion: "1.0.0",
        appVersionCode: "100",
        appLanguage: getAppLanguage(hostLanguage),
        uniCompileVersion: "4.29",
        uniRuntimeVersion: "4.29",
        uniPlatform: "mp-weixin",
        deviceBrand: deviceBrand,
        deviceModel: model,
        deviceType: deviceType,
        devicePixelRatio: _devicePixelRatio,
        deviceOrientation: _deviceOrientation,
        osName: osName.toLocaleLowerCase(),
        osVersion: osVersion,
        hostTheme: theme,
        hostVersion: hostVersion,
        hostLanguage: hostLanguage,
        hostName: _hostName,
        hostSDKVersion: _SDKVersion,
        hostFontSizeSetting: fontSizeSetting,
        windowTop: 0,
        windowBottom: 0,
        // TODO
        osLanguage: void 0,
        osTheme: void 0,
        ua: void 0,
        hostPackageName: void 0,
        browserName: void 0,
        browserVersion: void 0
    };
    extend(toRes, parameters);
}

function getGetDeviceType(fromRes, model) {
    var deviceType = fromRes.deviceType || "phone";
    {
        var deviceTypeMaps = {
            ipad: "pad",
            windows: "pc",
            mac: "pc"
        };
        var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
        var _model = model.toLocaleLowerCase();
        for (var index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
            var _m2 = deviceTypeMapsKeys[index2];
            if (_model.indexOf(_m2) !== -1) {
                deviceType = deviceTypeMaps[_m2];
                break;
            }
        }
    }
    return deviceType;
}

function getDeviceBrand(brand) {
    var deviceBrand = brand;
    if (deviceBrand) {
        deviceBrand = deviceBrand.toLocaleLowerCase();
    }
    return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
    return getLocale ? getLocale() : defaultLanguage;
}

function getHostName(fromRes) {
    var _platform = "WeChat";
    var _hostName = fromRes.hostName || _platform;
    {
        if (fromRes.environment) {
            _hostName = fromRes.environment;
        } else if (fromRes.host && fromRes.host.env) {
            _hostName = fromRes.host.env;
        }
    }
    return _hostName;
}

var getSystemInfo = {
    returnValue: function returnValue(fromRes, toRes) {
        addSafeAreaInsets(fromRes, toRes);
        useDeviceId()(fromRes, toRes);
        populateParameters(fromRes, toRes);
    }
};

var getSystemInfoSync = getSystemInfo;

var redirectTo = {};

var previewImage = {
    args: function args(fromArgs, toArgs) {
        var currentIndex = parseInt(fromArgs.current);
        if (isNaN(currentIndex)) {
            return;
        }
        var urls = fromArgs.urls;
        if (!isArray$1(urls)) {
            return;
        }
        var len = urls.length;
        if (!len) {
            return;
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= len) {
            currentIndex = len - 1;
        }
        if (currentIndex > 0) {
            toArgs.current = urls[currentIndex];
            toArgs.urls = urls.filter(function(item, index2) {
                return index2 < currentIndex ? item !== urls[currentIndex] : true;
            });
        } else {
            toArgs.current = urls[0];
        }
        return {
            indicator: false,
            loop: false
        };
    }
};

var showActionSheet = {
    args: function args(fromArgs, toArgs) {
        toArgs.alertText = fromArgs.title;
    }
};

var getDeviceInfo = {
    returnValue: function returnValue(fromRes, toRes) {
        var brand = fromRes.brand, model = fromRes.model;
        var deviceType = getGetDeviceType(fromRes, model);
        var deviceBrand = getDeviceBrand(brand);
        useDeviceId()(fromRes, toRes);
        toRes = sortObject(extend(toRes, {
            deviceType: deviceType,
            deviceBrand: deviceBrand,
            deviceModel: model
        }));
    }
};

var getAppBaseInfo = {
    returnValue: function returnValue(fromRes, toRes) {
        var version2 = fromRes.version, language = fromRes.language, SDKVersion = fromRes.SDKVersion, theme = fromRes.theme;
        var _hostName = getHostName(fromRes);
        var hostLanguage = language.replace(/_/g, "-");
        toRes = sortObject(extend(toRes, {
            hostVersion: version2,
            hostLanguage: hostLanguage,
            hostName: _hostName,
            hostSDKVersion: SDKVersion,
            hostTheme: theme,
            appId: "__UNI__156631B",
            appName: "vue3",
            appVersion: "1.0.0",
            appVersionCode: "100",
            appLanguage: getAppLanguage(hostLanguage)
        }));
    }
};

var getWindowInfo = {
    returnValue: function returnValue(fromRes, toRes) {
        addSafeAreaInsets(fromRes, toRes);
        toRes = sortObject(extend(toRes, {
            windowTop: 0,
            windowBottom: 0
        }));
    }
};

var getAppAuthorizeSetting = {
    returnValue: function returnValue(fromRes, toRes) {
        var locationReducedAccuracy = fromRes.locationReducedAccuracy;
        toRes.locationAccuracy = "unsupported";
        if (locationReducedAccuracy === true) {
            toRes.locationAccuracy = "reduced";
        } else if (locationReducedAccuracy === false) {
            toRes.locationAccuracy = "full";
        }
    }
};

var baseApis = {
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit,
    upx2px: upx2px,
    interceptors: interceptors,
    addInterceptor: addInterceptor,
    removeInterceptor: removeInterceptor,
    onCreateVueApp: onCreateVueApp,
    invokeCreateVueAppHook: invokeCreateVueAppHook,
    getLocale: getLocale,
    setLocale: setLocale,
    onLocaleChange: onLocaleChange,
    getPushClientId: getPushClientId,
    onPushMessage: onPushMessage,
    offPushMessage: offPushMessage,
    invokePushCallback: invokePushCallback
};

function initUni(api, protocols2) {
    var platform2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : wx;
    var wrapper = initWrapper(protocols2);
    var UniProxyHandlers = {
        get: function get(target, key) {
            if (hasOwn(target, key)) {
                return target[key];
            }
            if (hasOwn(api, key)) {
                return promisify(key, api[key]);
            }
            if (hasOwn(baseApis, key)) {
                return promisify(key, baseApis[key]);
            }
            return promisify(key, wrapper(key, platform2[key]));
        }
    };
    return new Proxy({}, UniProxyHandlers);
}

function initGetProvider(providers) {
    return function getProvider2(_ref7) {
        var service = _ref7.service, success = _ref7.success, fail = _ref7.fail, complete = _ref7.complete;
        var res;
        if (providers[service]) {
            res = {
                errMsg: "getProvider:ok",
                service: service,
                provider: providers[service]
            };
            isFunction(success) && success(res);
        } else {
            res = {
                errMsg: "getProvider:fail:服务[" + service + "]不存在"
            };
            isFunction(fail) && fail(res);
        }
        isFunction(complete) && complete(res);
    };
}

var objectKeys = [ "qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__" ];

var singlePageDisableKey = [ "lanDebug", "router", "worklet" ];

var launchOption = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;

function isWxKey(key) {
    if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
        return false;
    }
    return objectKeys.indexOf(key) > -1 || typeof wx[key] === "function";
}

function initWx() {
    var newWx = {};
    for (var key in wx) {
        if (isWxKey(key)) {
            newWx[key] = wx[key];
        }
    }
    if (typeof globalThis !== "undefined" && typeof requireMiniProgram === "undefined") {
        globalThis.wx = newWx;
    }
    return newWx;
}

var mocks$1 = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];

var getProvider = initGetProvider({
    oauth: [ "weixin" ],
    share: [ "weixin" ],
    payment: [ "wxpay" ],
    push: [ "weixin" ]
});

function initComponentMocks(component) {
    var res = /*   */ Object.create(null);
    mocks$1.forEach(function(name) {
        res[name] = component[name];
    });
    return res;
}

function createSelectorQuery() {
    var query = wx$2.createSelectorQuery();
    var oldIn = query.in;
    query.in = function newIn(component) {
        return oldIn.call(this, initComponentMocks(component));
    };
    return query;
}

var wx$2 = initWx();

var baseInfo = wx$2.getAppBaseInfo && wx$2.getAppBaseInfo();

if (!baseInfo) {
    baseInfo = wx$2.getSystemInfoSync();
}

var host = baseInfo ? baseInfo.host : null;

var shareVideoMessage = host && host.env === "SAAASDK" ? wx$2.miniapp.shareVideoMessage : wx$2.shareVideoMessage;

var shims = /*   */ Object.freeze({
    __proto__: null,
    createSelectorQuery: createSelectorQuery,
    getProvider: getProvider,
    shareVideoMessage: shareVideoMessage
});

var compressImage = {
    args: function args(fromArgs, toArgs) {
        if (fromArgs.compressedHeight && !toArgs.compressHeight) {
            toArgs.compressHeight = fromArgs.compressedHeight;
        }
        if (fromArgs.compressedWidth && !toArgs.compressWidth) {
            toArgs.compressWidth = fromArgs.compressedWidth;
        }
    }
};

var protocols = /*   */ Object.freeze({
    __proto__: null,
    compressImage: compressImage,
    getAppAuthorizeSetting: getAppAuthorizeSetting,
    getAppBaseInfo: getAppBaseInfo,
    getDeviceInfo: getDeviceInfo,
    getSystemInfo: getSystemInfo,
    getSystemInfoSync: getSystemInfoSync,
    getWindowInfo: getWindowInfo,
    previewImage: previewImage,
    redirectTo: redirectTo,
    showActionSheet: showActionSheet
});

var wx$1 = initWx();

var index$1 = initUni(shims, protocols, wx$1);

new Set(/*   */ Object.getOwnPropertyNames(Symbol).filter(function(key) {
    return key !== "arguments" && key !== "caller";
}).map(function(key) {
    return Symbol[key];
}).filter(isSymbol));

function toRaw$1(observed) {
    var raw = observed && observed["__v_raw"];
    return raw ? toRaw$1(raw) : observed;
}

function isRef$1(r2) {
    return !!(r2 && r2.__v_isRef === true);
}

/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var stack$1 = [];

function pushWarningContext$1(vnode) {
    stack$1.push(vnode);
}

function popWarningContext$1() {
    stack$1.pop();
}

function warn$1$1(msg) {
    var instance = stack$1.length ? stack$1[stack$1.length - 1].component : null;
    var appWarnHandler = instance && instance.appContext.config.warnHandler;
    var trace = getComponentTrace$1();
    for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key8 = 1; _key8 < _len7; _key8++) {
        args[_key8 - 1] = arguments[_key8];
    }
    if (appWarnHandler) {
        callWithErrorHandling$1(appWarnHandler, instance, 11, [ msg + args.map(function(a2) {
            var _a, _b;
            return (_b = (_a = a2.toString) == null ? void 0 : _a.call(a2)) != null ? _b : JSON.stringify(a2);
        }).join(""), instance && instance.proxy, trace.map(function(_ref8) {
            var vnode = _ref8.vnode;
            return "at <".concat(formatComponentName$1(instance, vnode.type), ">");
        }).join("\n"), trace ]);
    } else {
        var _console;
        var warnArgs = [ "[Vue warn]: ".concat(msg) ].concat(args);
        if (trace.length && 
        // avoid spamming console during tests
        true) {
            warnArgs.push.apply(warnArgs, [ "\n" ].concat(_toConsumableArray2(formatTrace$1(trace))));
        }
        (_console = console).warn.apply(_console, _toConsumableArray2(warnArgs));
    }
}

function getComponentTrace$1() {
    var currentVNode = stack$1[stack$1.length - 1];
    if (!currentVNode) {
        return [];
    }
    var normalizedStack = [];
    while (currentVNode) {
        var last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        } else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        var parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}

function formatTrace$1(trace) {
    var logs = [];
    trace.forEach(function(entry, i2) {
        logs.push.apply(logs, _toConsumableArray2(i2 === 0 ? [] : [ "\n" ]).concat(_toConsumableArray2(formatTraceEntry$1(entry))));
    });
    return logs;
}

function formatTraceEntry$1(_ref9) {
    var vnode = _ref9.vnode, recurseCount = _ref9.recurseCount;
    var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
    var isRoot = vnode.component ? vnode.component.parent == null : false;
    var open = " at <".concat(formatComponentName$1(vnode.component, vnode.type, isRoot));
    var close = ">" + postfix;
    return vnode.props ? [ open ].concat(_toConsumableArray2(formatProps$1(vnode.props)), [ close ]) : [ open + close ];
}

function formatProps$1(props2) {
    var res = [];
    var keys = Object.keys(props2);
    keys.slice(0, 3).forEach(function(key) {
        res.push.apply(res, _toConsumableArray2(formatProp$1(key, props2[key])));
    });
    if (keys.length > 3) {
        res.push(" ...");
    }
    return res;
}

function formatProp$1(key, value2, raw) {
    if (isString(value2)) {
        value2 = JSON.stringify(value2);
        return raw ? value2 : [ "".concat(key, "=").concat(value2) ];
    } else if (typeof value2 === "number" || typeof value2 === "boolean" || value2 == null) {
        return raw ? value2 : [ "".concat(key, "=").concat(value2) ];
    } else if (isRef$1(value2)) {
        value2 = formatProp$1(key, toRaw$1(value2.value), true);
        return raw ? value2 : [ "".concat(key, "=Ref<"), value2, ">" ];
    } else if (isFunction(value2)) {
        return [ "".concat(key, "=fn").concat(value2.name ? "<".concat(value2.name, ">") : "") ];
    } else {
        value2 = toRaw$1(value2);
        return raw ? value2 : [ "".concat(key, "="), value2 ];
    }
}

var ErrorTypeStrings$1 = (_ErrorTypeStrings$ = {}, _defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_ErrorTypeStrings$, "sp", "serverPrefetch hook"), "bc", "beforeCreate hook"), "c", "created hook"), "bm", "beforeMount hook"), "m", "mounted hook"), "bu", "beforeUpdate hook"), "u", "updated"), "bum", "beforeUnmount hook"), "um", "unmounted hook"), "a", "activated hook"), 
_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_ErrorTypeStrings$, "da", "deactivated hook"), "ec", "errorCaptured hook"), "rtc", "renderTracked hook"), "rtg", "renderTriggered hook"), 0, "setup function"), 1, "render function"), 2, "watcher getter"), 3, "watcher callback"), 4, "watcher cleanup function"), 5, "native event handler"), 
_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_ErrorTypeStrings$, 6, "component event handler"), 7, "vnode hook"), 8, "directive hook"), 9, "transition hook"), 10, "app errorHandler"), 11, "app warnHandler"), 12, "ref function"), 13, "async component loader"), 14, "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."));

function callWithErrorHandling$1(fn, instance, type, args) {
    try {
        return args ? fn.apply(void 0, _toConsumableArray2(args)) : fn();
    } catch (err) {
        handleError$1(err, instance, type);
    }
}

function handleError$1(err, instance, type) {
    var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var contextVNode = instance ? instance.vnode : null;
    if (instance) {
        var cur = instance.parent;
        var exposedInstance = instance.proxy;
        var errorInfo = ErrorTypeStrings$1[type];
        while (cur) {
            var errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (var i2 = 0; i2 < errorCapturedHooks.length; i2++) {
                    if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        var appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling$1(appErrorHandler, null, 10, [ err, exposedInstance, errorInfo ]);
            return;
        }
    }
    logError$1(err, type, contextVNode, throwInDev);
}

function logError$1(err, type, contextVNode) {
    var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    {
        var info = ErrorTypeStrings$1[type];
        if (contextVNode) {
            pushWarningContext$1(contextVNode);
        }
        warn$1$1("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));
        if (contextVNode) {
            popWarningContext$1();
        }
        if (throwInDev) {
            throw err;
        } else {
            console.error(err);
        }
    }
}

var isFlushing$1 = false;

var isFlushPending$1 = false;

var queue$1 = [];

var flushIndex$1 = 0;

var pendingPostFlushCbs$1 = [];

var activePostFlushCbs$1 = null;

var postFlushIndex$1 = 0;

var resolvedPromise$1 = /*   */ Promise.resolve();

var RECURSION_LIMIT$1 = 100;

function findInsertionIndex$1(id) {
    var start = flushIndex$1 + 1;
    var end = queue$1.length;
    while (start < end) {
        var middle = start + end >>> 1;
        var middleJob = queue$1[middle];
        var middleJobId = getId$1(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
}

function queueJob$1(job) {
    if (!queue$1.length || !queue$1.includes(job, isFlushing$1 && job.allowRecurse ? flushIndex$1 + 1 : flushIndex$1)) {
        if (job.id == null) {
            queue$1.push(job);
        } else {
            queue$1.splice(findInsertionIndex$1(job.id), 0, job);
        }
        queueFlush$1();
    }
}

function queueFlush$1() {
    if (!isFlushing$1 && !isFlushPending$1) {
        isFlushPending$1 = true;
        resolvedPromise$1.then(flushJobs$1);
    }
}

function queuePostFlushCb$1(cb) {
    if (!isArray$1(cb)) {
        if (!activePostFlushCbs$1 || !activePostFlushCbs$1.includes(cb, cb.allowRecurse ? postFlushIndex$1 + 1 : postFlushIndex$1)) {
            pendingPostFlushCbs$1.push(cb);
        }
    } else {
        pendingPostFlushCbs$1.push.apply(pendingPostFlushCbs$1, _toConsumableArray2(cb));
    }
    queueFlush$1();
}

function flushPostFlushCbs$1(seen) {
    if (pendingPostFlushCbs$1.length) {
        var deduped = _toConsumableArray2(new Set(pendingPostFlushCbs$1)).sort(function(a2, b2) {
            return getId$1(a2) - getId$1(b2);
        });
        pendingPostFlushCbs$1.length = 0;
        if (activePostFlushCbs$1) {
            var _activePostFlushCbs$;
            (_activePostFlushCbs$ = activePostFlushCbs$1).push.apply(_activePostFlushCbs$, _toConsumableArray2(deduped));
            return;
        }
        activePostFlushCbs$1 = deduped;
        {
            seen = seen || /*   */ new Map();
        }
        for (postFlushIndex$1 = 0; postFlushIndex$1 < activePostFlushCbs$1.length; postFlushIndex$1++) {
            if (checkRecursiveUpdates$1(seen, activePostFlushCbs$1[postFlushIndex$1])) {
                continue;
            }
            activePostFlushCbs$1[postFlushIndex$1]();
        }
        activePostFlushCbs$1 = null;
        postFlushIndex$1 = 0;
    }
}

var getId$1 = function getId$1(job) {
    return job.id == null ? Infinity : job.id;
};

var comparator$1 = function comparator$1(a2, b2) {
    var diff2 = getId$1(a2) - getId$1(b2);
    if (diff2 === 0) {
        if (a2.pre && !b2.pre) return -1;
        if (b2.pre && !a2.pre) return 1;
    }
    return diff2;
};

function flushJobs$1(seen) {
    isFlushPending$1 = false;
    isFlushing$1 = true;
    {
        seen = seen || /*   */ new Map();
    }
    queue$1.sort(comparator$1);
    var check = function check(job) {
        return checkRecursiveUpdates$1(seen, job);
    };
    try {
        for (flushIndex$1 = 0; flushIndex$1 < queue$1.length; flushIndex$1++) {
            var job = queue$1[flushIndex$1];
            if (job && job.active !== false) {
                if (check(job)) {
                    continue;
                }
                callWithErrorHandling$1(job, null, 14);
            }
        }
    } finally {
        flushIndex$1 = 0;
        queue$1.length = 0;
        flushPostFlushCbs$1(seen);
        isFlushing$1 = false;
        if (queue$1.length || pendingPostFlushCbs$1.length) {
            flushJobs$1(seen);
        }
    }
}

function checkRecursiveUpdates$1(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    } else {
        var count = seen.get(fn);
        if (count > RECURSION_LIMIT$1) {
            var instance = fn.ownerInstance;
            var componentName = instance && getComponentName$1(instance.type);
            handleError$1("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function."), null, 10);
            return true;
        } else {
            seen.set(fn, count + 1);
        }
    }
}

var hmrDirtyComponents = /*   */ new Set();

{
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
        createRecord: tryWrap(createRecord),
        rerender: tryWrap(rerender),
        reload: tryWrap(reload)
    };
}

var map = /*   */ new Map();

function createRecord(id, initialDef) {
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: /*   */ new Set()
    });
    return true;
}

function normalizeClassComponent(component) {
    return isClassComponent$1(component) ? component.__vccOpts : component;
}

function rerender(id, newRender) {
    var record = map.get(id);
    if (!record) {
        return;
    }
    record.initialDef.render = newRender;
    _toConsumableArray2(record.instances).forEach(function(instance) {
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        instance.effect.dirty = true;
        instance.update();
    });
}

function reload(id, newComp) {
    var record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    var instances = _toConsumableArray2(record.instances);
    var _iterator2 = _createForOfIteratorHelper2(instances), _step2;
    try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var instance = _step2.value;
            var oldComp = normalizeClassComponent(instance.type);
            if (!hmrDirtyComponents.has(oldComp)) {
                if (oldComp !== record.initialDef) {
                    updateComponentDef(oldComp, newComp);
                }
                hmrDirtyComponents.add(oldComp);
            }
            instance.appContext.propsCache.delete(instance.type);
            instance.appContext.emitsCache.delete(instance.type);
            instance.appContext.optionsCache.delete(instance.type);
            if (instance.ceReload) {
                hmrDirtyComponents.add(oldComp);
                instance.ceReload(newComp.styles);
                hmrDirtyComponents.delete(oldComp);
            } else if (instance.parent) {
                instance.parent.effect.dirty = true;
                queueJob$1(instance.parent.update);
            } else if (instance.appContext.reload) {
                instance.appContext.reload();
            } else if (typeof window !== "undefined") {
                window.location.reload();
            } else {
                console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
            }
        }
    } catch (err) {
        _iterator2.e(err);
    } finally {
        _iterator2.f();
    }
    queuePostFlushCb$1(function() {
        var _iterator3 = _createForOfIteratorHelper2(instances), _step3;
        try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var instance = _step3.value;
                hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
            }
        } catch (err) {
            _iterator3.e(err);
        } finally {
            _iterator3.f();
        }
    });
}

function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (var key in oldComp) {
        if (key !== "__file" && !(key in newComp)) {
            delete oldComp[key];
        }
    }
}

function tryWrap(fn) {
    return function(id, arg) {
        try {
            return fn(id, arg);
        } catch (e2) {
            console.error(e2);
            console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
        }
    };
}

{
    var g2 = getGlobalThis();
    var registerGlobalSetter = function registerGlobalSetter(key, setter) {
        var setters;
        if (!(setters = g2[key])) setters = g2[key] = [];
        setters.push(setter);
        return function(v2) {
            if (setters.length > 1) setters.forEach(function(set2) {
                return set2(v2);
            }); else setters[0](v2);
        };
    };
    registerGlobalSetter("__VUE_INSTANCE_SETTERS__", function(v2) {
        return v2;
    });
    registerGlobalSetter("__VUE_SSR_SETTERS__", function(v2) {
        return v2;
    });
}

var classifyRE$1 = /(?:^|[-_])(\w)/g;

var classify$1 = function classify$1(str) {
    return str.replace(classifyRE$1, function(c2) {
        return c2.toUpperCase();
    }).replace(/[-_]/g, "");
};

function getComponentName$1(Component2) {
    var includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}

function formatComponentName$1(instance, Component2) {
    var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var name = getComponentName$1(Component2);
    if (!name && Component2.__file) {
        var match = Component2.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        var inferFromRegistry = function inferFromRegistry(registry) {
            for (var key in registry) {
                if (registry[key] === Component2) {
                    return key;
                }
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify$1(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent$1(value2) {
    return isFunction(value2) && "__vccOpts" in value2;
}

/**
* @dcloudio/uni-mp-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ function warn$2(msg) {
    var _console2;
    for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key9 = 1; _key9 < _len8; _key9++) {
        args[_key9 - 1] = arguments[_key9];
    }
    (_console2 = console).warn.apply(_console2, [ "[Vue warn] ".concat(msg) ].concat(args));
}

var activeEffectScope;

var EffectScope = /* */ function() {
    function EffectScope() {
        var detached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        _classCallCheck2(this, EffectScope);
        this.detached = detached;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    return _createClass2(EffectScope, [ {
        key: "active",
        get: function get() {
            return this._active;
        }
    }, {
        key: "run",
        value: function run(fn) {
            if (this._active) {
                var currentEffectScope = activeEffectScope;
                try {
                    activeEffectScope = this;
                    return fn();
                } finally {
                    activeEffectScope = currentEffectScope;
                }
            } else {
                warn$2("cannot run an inactive effect scope.");
            }
        }
        /**
     * This should only be called on non-detached scopes
     * @internal
     */    }, {
        key: "on",
        value: function on() {
            activeEffectScope = this;
        }
        /**
     * This should only be called on non-detached scopes
     * @internal
     */    }, {
        key: "off",
        value: function off() {
            activeEffectScope = this.parent;
        }
    }, {
        key: "stop",
        value: function stop(fromParent) {
            if (this._active) {
                var i2, l2;
                for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
                    this.effects[i2].stop();
                }
                for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
                    this.cleanups[i2]();
                }
                if (this.scopes) {
                    for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
                        this.scopes[i2].stop(true);
                    }
                }
                if (!this.detached && this.parent && !fromParent) {
                    var last = this.parent.scopes.pop();
                    if (last && last !== this) {
                        this.parent.scopes[this.index] = last;
                        last.index = this.index;
                    }
                }
                this.parent = void 0;
                this._active = false;
            }
        }
    } ]);
}();

function effectScope(detached) {
    return new EffectScope(detached);
}

function recordEffectScope(effect2) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;
    if (scope && scope.active) {
        scope.effects.push(effect2);
    }
}

function getCurrentScope() {
    return activeEffectScope;
}

function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    } else {
        warn$2("onScopeDispose() is called when there is no active effect scope to be associated with.");
    }
}

var activeEffect;

var ReactiveEffect2 = /* */ function() {
    function ReactiveEffect2(fn, trigger2, scheduler, scope) {
        _classCallCheck2(this, ReactiveEffect2);
        this.fn = fn;
        this.trigger = trigger2;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this._dirtyLevel = 4;
        this._trackId = 0;
        this._runnings = 0;
        this._shouldSchedule = false;
        this._depsLength = 0;
        recordEffectScope(this, scope);
    }
    return _createClass2(ReactiveEffect2, [ {
        key: "dirty",
        get: function get() {
            if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
                this._dirtyLevel = 1;
                pauseTracking();
                for (var i2 = 0; i2 < this._depsLength; i2++) {
                    var dep = this.deps[i2];
                    if (dep.computed) {
                        triggerComputed(dep.computed);
                        if (this._dirtyLevel >= 4) {
                            break;
                        }
                    }
                }
                if (this._dirtyLevel === 1) {
                    this._dirtyLevel = 0;
                }
                resetTracking();
            }
            return this._dirtyLevel >= 4;
        },
        set: function set(v2) {
            this._dirtyLevel = v2 ? 4 : 0;
        }
    }, {
        key: "run",
        value: function run() {
            this._dirtyLevel = 0;
            if (!this.active) {
                return this.fn();
            }
            var lastShouldTrack = shouldTrack;
            var lastEffect = activeEffect;
            try {
                shouldTrack = true;
                activeEffect = this;
                this._runnings++;
                preCleanupEffect(this);
                return this.fn();
            } finally {
                postCleanupEffect(this);
                this._runnings--;
                activeEffect = lastEffect;
                shouldTrack = lastShouldTrack;
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            var _a;
            if (this.active) {
                preCleanupEffect(this);
                postCleanupEffect(this);
                (_a = this.onStop) == null ? void 0 : _a.call(this);
                this.active = false;
            }
        }
    } ]);
}();

function triggerComputed(computed2) {
    return computed2.value;
}

function preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
}

function postCleanupEffect(effect2) {
    if (effect2.deps.length > effect2._depsLength) {
        for (var i2 = effect2._depsLength; i2 < effect2.deps.length; i2++) {
            cleanupDepEffect(effect2.deps[i2], effect2);
        }
        effect2.deps.length = effect2._depsLength;
    }
}

function cleanupDepEffect(dep, effect2) {
    var trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) {
            dep.cleanup();
        }
    }
}

var shouldTrack = true;

var pauseScheduleStack = 0;

var trackStack = [];

function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}

function resetTracking() {
    var last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}

function pauseScheduling() {
    pauseScheduleStack++;
}

function resetScheduling() {
    pauseScheduleStack--;
    while (!pauseScheduleStack && queueEffectSchedulers.length) {
        queueEffectSchedulers.shift()();
    }
}

function trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        var oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
            if (oldDep) {
                cleanupDepEffect(oldDep, effect2);
            }
            effect2.deps[effect2._depsLength++] = dep;
        } else {
            effect2._depsLength++;
        }
        {
            (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend({
                effect: effect2
            }, debuggerEventExtraInfo));
        }
    }
}

var queueEffectSchedulers = [];

function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    pauseScheduling();
    var _iterator4 = _createForOfIteratorHelper2(dep.keys()), _step4;
    try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var effect2 = _step4.value;
            var tracking = void 0;
            if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
                effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
                effect2._dirtyLevel = dirtyLevel;
            }
            if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
                {
                    (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend({
                        effect: effect2
                    }, debuggerEventExtraInfo));
                }
                effect2.trigger();
                if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
                    effect2._shouldSchedule = false;
                    if (effect2.scheduler) {
                        queueEffectSchedulers.push(effect2.scheduler);
                    }
                }
            }
        }
    } catch (err) {
        _iterator4.e(err);
    } finally {
        _iterator4.f();
    }
    resetScheduling();
}

var createDep = function createDep(cleanup, computed2) {
    var dep = /*   */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed2;
    return dep;
};

var targetMap = /*   */ new WeakMap();

var ITERATE_KEY = Symbol("iterate");

var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");

function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        var depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, depsMap = /*   */ new Map());
        }
        var dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, dep = createDep(function() {
                return depsMap.delete(key);
            }));
        }
        trackEffect(activeEffect, dep, {
            target: target,
            type: type,
            key: key
        });
    }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
    var depsMap = targetMap.get(target);
    if (!depsMap) {
        return;
    }
    var deps = [];
    if (type === "clear") {
        deps = _toConsumableArray2(depsMap.values());
    } else if (key === "length" && isArray$1(target)) {
        var newLength = Number(newValue);
        depsMap.forEach(function(dep, key2) {
            if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
                deps.push(dep);
            }
        });
    } else {
        if (key !== void 0) {
            deps.push(depsMap.get(key));
        }
        switch (type) {
          case "add":
            if (!isArray$1(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (isMap(target)) {
                    deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
            } else if (isIntegerKey(key)) {
                deps.push(depsMap.get("length"));
            }
            break;

          case "delete":
            if (!isArray$1(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (isMap(target)) {
                    deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
            }
            break;

          case "set":
            if (isMap(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
            }
            break;
        }
    }
    pauseScheduling();
    var _iterator5 = _createForOfIteratorHelper2(deps), _step5;
    try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var dep = _step5.value;
            if (dep) {
                triggerEffects(dep, 4, {
                    target: target,
                    type: type,
                    key: key,
                    newValue: newValue,
                    oldValue: oldValue,
                    oldTarget: oldTarget
                });
            }
        }
    } catch (err) {
        _iterator5.e(err);
    } finally {
        _iterator5.f();
    }
    resetScheduling();
}

function getDepFromReactive(object2, key) {
    var _a;
    return (_a = targetMap.get(object2)) == null ? void 0 : _a.get(key);
}

var isNonTrackableKeys = /*   */ makeMap$1("__proto__,__v_isRef,__isVue");

var builtInSymbols = new Set(/*   */ Object.getOwnPropertyNames(Symbol).filter(function(key) {
    return key !== "arguments" && key !== "caller";
}).map(function(key) {
    return Symbol[key];
}).filter(isSymbol));

var arrayInstrumentations = /*   */ createArrayInstrumentations();

function createArrayInstrumentations() {
    var instrumentations = {};
    [ "includes", "indexOf", "lastIndexOf" ].forEach(function(key) {
        instrumentations[key] = function() {
            var arr = toRaw(this);
            for (var i2 = 0, l2 = this.length; i2 < l2; i2++) {
                track(arr, "get", i2 + "");
            }
            for (var _len9 = arguments.length, args = new Array(_len9), _key10 = 0; _key10 < _len9; _key10++) {
                args[_key10] = arguments[_key10];
            }
            var res = arr[key].apply(arr, args);
            if (res === -1 || res === false) {
                return arr[key].apply(arr, _toConsumableArray2(args.map(toRaw)));
            } else {
                return res;
            }
        };
    });
    [ "push", "pop", "shift", "unshift", "splice" ].forEach(function(key) {
        instrumentations[key] = function() {
            pauseTracking();
            pauseScheduling();
            for (var _len10 = arguments.length, args = new Array(_len10), _key11 = 0; _key11 < _len10; _key11++) {
                args[_key11] = arguments[_key11];
            }
            var res = toRaw(this)[key].apply(this, args);
            resetScheduling();
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}

function hasOwnProperty(key) {
    var obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}

var BaseReactiveHandler2 = /* */ function() {
    function BaseReactiveHandler2() {
        var _isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _isShallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        _classCallCheck2(this, BaseReactiveHandler2);
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
    }
    return _createClass2(BaseReactiveHandler2, [ {
        key: "get",
        value: function get(target, key, receiver) {
            var isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
            if (key === "__v_isReactive") {
                return !isReadonly2;
            } else if (key === "__v_isReadonly") {
                return isReadonly2;
            } else if (key === "__v_isShallow") {
                return isShallow2;
            } else if (key === "__v_raw") {
                if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || 
                // receiver is not the reactive proxy, but has the same prototype
                // this means the reciever is a user proxy of the reactive proxy
                Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
                    return target;
                }
                return;
            }
            var targetIsArray = isArray$1(target);
            if (!isReadonly2) {
                if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
                    return Reflect.get(arrayInstrumentations, key, receiver);
                }
                if (key === "hasOwnProperty") {
                    return hasOwnProperty;
                }
            }
            var res = Reflect.get(target, key, receiver);
            if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
                return res;
            }
            if (!isReadonly2) {
                track(target, "get", key);
            }
            if (isShallow2) {
                return res;
            }
            if (isRef(res)) {
                return targetIsArray && isIntegerKey(key) ? res : res.value;
            }
            if (isObject$1(res)) {
                return isReadonly2 ? readonly(res) : reactive(res);
            }
            return res;
        }
    } ]);
}();

var MutableReactiveHandler2 = /* */ function(_BaseReactiveHandler) {
    function MutableReactiveHandler2() {
        var isShallow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        _classCallCheck2(this, MutableReactiveHandler2);
        return _callSuper(this, MutableReactiveHandler2, [ false, isShallow2 ]);
    }
    _inherits2(MutableReactiveHandler2, _BaseReactiveHandler);
    return _createClass2(MutableReactiveHandler2, [ {
        key: "set",
        value: function set(target, key, value2, receiver) {
            var oldValue = target[key];
            if (!this._isShallow) {
                var isOldValueReadonly = isReadonly(oldValue);
                if (!isShallow(value2) && !isReadonly(value2)) {
                    oldValue = toRaw(oldValue);
                    value2 = toRaw(value2);
                }
                if (!isArray$1(target) && isRef(oldValue) && !isRef(value2)) {
                    if (isOldValueReadonly) {
                        return false;
                    } else {
                        oldValue.value = value2;
                        return true;
                    }
                }
            }
            var hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
            var result = Reflect.set(target, key, value2, receiver);
            if (target === toRaw(receiver)) {
                if (!hadKey) {
                    trigger(target, "add", key, value2);
                } else if (hasChanged(value2, oldValue)) {
                    trigger(target, "set", key, value2, oldValue);
                }
            }
            return result;
        }
    }, {
        key: "deleteProperty",
        value: function deleteProperty(target, key) {
            var hadKey = hasOwn(target, key);
            var oldValue = target[key];
            var result = Reflect.deleteProperty(target, key);
            if (result && hadKey) {
                trigger(target, "delete", key, void 0, oldValue);
            }
            return result;
        }
    }, {
        key: "has",
        value: function has(target, key) {
            var result = Reflect.has(target, key);
            if (!isSymbol(key) || !builtInSymbols.has(key)) {
                track(target, "has", key);
            }
            return result;
        }
    }, {
        key: "ownKeys",
        value: function ownKeys(target) {
            track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
            return Reflect.ownKeys(target);
        }
    } ]);
}(BaseReactiveHandler2);

var ReadonlyReactiveHandler2 = /* */ function(_BaseReactiveHandler2) {
    function ReadonlyReactiveHandler2() {
        var isShallow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        _classCallCheck2(this, ReadonlyReactiveHandler2);
        return _callSuper(this, ReadonlyReactiveHandler2, [ true, isShallow2 ]);
    }
    _inherits2(ReadonlyReactiveHandler2, _BaseReactiveHandler2);
    return _createClass2(ReadonlyReactiveHandler2, [ {
        key: "set",
        value: function set(target, key) {
            {
                warn$2('Set operation on key "'.concat(String(key), '" failed: target is readonly.'), target);
            }
            return true;
        }
    }, {
        key: "deleteProperty",
        value: function deleteProperty(target, key) {
            {
                warn$2('Delete operation on key "'.concat(String(key), '" failed: target is readonly.'), target);
            }
            return true;
        }
    } ]);
}(BaseReactiveHandler2);

var mutableHandlers = /*   */ new MutableReactiveHandler2();

var readonlyHandlers = /*   */ new ReadonlyReactiveHandler2();

var shallowReactiveHandlers = /*   */ new MutableReactiveHandler2(true);

var shallowReadonlyHandlers = /*   */ new ReadonlyReactiveHandler2(true);

var toShallow = function toShallow(value2) {
    return value2;
};

var getProto = function getProto(v2) {
    return Reflect.getPrototypeOf(v2);
};

function _get(target, key) {
    var isReadonly2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isShallow2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    target = target["__v_raw"];
    var rawTarget = toRaw(target);
    var rawKey = toRaw(key);
    if (!isReadonly2) {
        if (hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
    }
    var _getProto = getProto(rawTarget), has2 = _getProto.has;
    var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
        target.get(key);
    }
}

function _has(key) {
    var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var target = this["__v_raw"];
    var rawTarget = toRaw(target);
    var rawKey = toRaw(key);
    if (!isReadonly2) {
        if (hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
    var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}

function add(value2) {
    value2 = toRaw(value2);
    var target = toRaw(this);
    var proto = getProto(target);
    var hadKey = proto.has.call(target, value2);
    if (!hadKey) {
        target.add(value2);
        trigger(target, "add", value2, value2);
    }
    return this;
}

function set$1(key, value2) {
    value2 = toRaw(value2);
    var target = toRaw(this);
    var _getProto2 = getProto(target), has2 = _getProto2.has, get2 = _getProto2.get;
    var hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else {
        checkIdentityKeys(target, has2, key);
    }
    var oldValue = get2.call(target, key);
    target.set(key, value2);
    if (!hadKey) {
        trigger(target, "add", key, value2);
    } else if (hasChanged(value2, oldValue)) {
        trigger(target, "set", key, value2, oldValue);
    }
    return this;
}

function deleteEntry(key) {
    var target = toRaw(this);
    var _getProto3 = getProto(target), has2 = _getProto3.has, get2 = _getProto3.get;
    var hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else {
        checkIdentityKeys(target, has2, key);
    }
    var oldValue = get2 ? get2.call(target, key) : void 0;
    var result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
}

function clear() {
    var target = toRaw(this);
    var hadItems = target.size !== 0;
    var oldTarget = isMap(target) ? new Map(target) : new Set(target);
    var result = target.clear();
    if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
}

function createForEach(isReadonly2, isShallow2) {
    return function forEach3(callback, thisArg) {
        var observed = this;
        var target = observed["__v_raw"];
        var rawTarget = toRaw(target);
        var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach(function(value2, key) {
            return callback.call(thisArg, wrap(value2), wrap(key), observed);
        });
    };
}

function createIterableMethod(method, isReadonly2, isShallow2) {
    return function() {
        var target = this["__v_raw"];
        var rawTarget = toRaw(target);
        var targetIsMap = isMap(rawTarget);
        var isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        var isKeyOnly = method === "keys" && targetIsMap;
        var innerIterator = target[method].apply(target, arguments);
        var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return _defineProperty2({
            // iterator protocol
            next: function next() {
                var _innerIterator$next = innerIterator.next(), value2 = _innerIterator$next.value, done = _innerIterator$next.done;
                return done ? {
                    value: value2,
                    done: done
                } : {
                    value: isPair ? [ wrap(value2[0]), wrap(value2[1]) ] : wrap(value2),
                    done: done
                };
            }
        }, Symbol.iterator, function() {
            return this;
        });
    };
}

function createReadonlyMethod(type) {
    return function() {
        {
            var key = (arguments.length <= 0 ? undefined : arguments[0]) ? 'on key "'.concat(arguments.length <= 0 ? undefined : arguments[0], '" ') : "";
            warn$2("".concat(capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}

function createInstrumentations() {
    var mutableInstrumentations2 = {
        get: function get(key) {
            return _get(this, key);
        },
        get size() {
            return size(this);
        },
        has: _has,
        add: add,
        set: set$1,
        delete: deleteEntry,
        clear: clear,
        forEach: createForEach(false, false)
    };
    var shallowInstrumentations2 = {
        get: function get(key) {
            return _get(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has: _has,
        add: add,
        set: set$1,
        delete: deleteEntry,
        clear: clear,
        forEach: createForEach(false, true)
    };
    var readonlyInstrumentations2 = {
        get: function get(key) {
            return _get(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has: function has(key) {
            return _has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    var shallowReadonlyInstrumentations2 = {
        get: function get(key) {
            return _get(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has: function has(key) {
            return _has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    var iteratorMethods = [ "keys", "values", "entries", Symbol.iterator ];
    iteratorMethods.forEach(function(method) {
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [ mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2 ];
}

var _createInstrumentatio = /*   */ createInstrumentations(), _createInstrumentatio2 = _slicedToArray2(_createInstrumentatio, 4), mutableInstrumentations = _createInstrumentatio2[0], readonlyInstrumentations = _createInstrumentatio2[1], shallowInstrumentations = _createInstrumentatio2[2], shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly2, shallow) {
    var instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return function(target, key, receiver) {
        if (key === "__v_isReactive") {
            return !isReadonly2;
        } else if (key === "__v_isReadonly") {
            return isReadonly2;
        } else if (key === "__v_raw") {
            return target;
        }
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}

var mutableCollectionHandlers = {
    get: /*   */ createInstrumentationGetter(false, false)
};

var shallowCollectionHandlers = {
    get: /*   */ createInstrumentationGetter(false, true)
};

var readonlyCollectionHandlers = {
    get: /*   */ createInstrumentationGetter(true, false)
};

var shallowReadonlyCollectionHandlers = {
    get: /*   */ createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has2, key) {
    var rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        var type = toRawType(target);
        warn$2("Reactive ".concat(type, " contains both the raw and reactive versions of the same object").concat(type === "Map" ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."));
    }
}

var reactiveMap = /*   */ new WeakMap();

var shallowReactiveMap = /*   */ new WeakMap();

var readonlyMap = /*   */ new WeakMap();

var shallowReadonlyMap = /*   */ new WeakMap();

function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;

      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;

      default:
        return 0;
    }
}

function getTargetType(value2) {
    return value2["__v_skip"] || !Object.isExtensible(value2) ? 0 : targetTypeMap(toRawType(value2));
}

function reactive(target) {
    if (isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}

function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}

function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}

function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject$1(target)) {
        {
            warn$2("value cannot be made reactive: ".concat(String(target)));
        }
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
    }
    var existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    var targetType = getTargetType(target);
    if (targetType === 0) {
        return target;
    }
    var proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}

function isReactive(value2) {
    if (isReadonly(value2)) {
        return isReactive(value2["__v_raw"]);
    }
    return !!(value2 && value2["__v_isReactive"]);
}

function isReadonly(value2) {
    return !!(value2 && value2["__v_isReadonly"]);
}

function isShallow(value2) {
    return !!(value2 && value2["__v_isShallow"]);
}

function isProxy(value2) {
    return isReactive(value2) || isReadonly(value2);
}

function toRaw(observed) {
    var raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
}

function markRaw(value2) {
    if (Object.isExtensible(value2)) {
        def(value2, "__v_skip", true);
    }
    return value2;
}

var toReactive = function toReactive(value2) {
    return isObject$1(value2) ? reactive(value2) : value2;
};

var toReadonly = function toReadonly(value2) {
    return isObject$1(value2) ? readonly(value2) : value2;
};

var COMPUTED_SIDE_EFFECT_WARN = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";

var ComputedRefImpl = /* */ function() {
    function ComputedRefImpl(getter, _setter, isReadonly2, isSSR) {
        var _this2 = this;
        _classCallCheck2(this, ComputedRefImpl);
        this.getter = getter;
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new ReactiveEffect2(function() {
            return getter(_this2._value);
        }, function() {
            return triggerRefValue(_this2, _this2.effect._dirtyLevel === 2 ? 2 : 3);
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly2;
    }
    return _createClass2(ComputedRefImpl, [ {
        key: "value",
        get: function get() {
            var self2 = toRaw(this);
            if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
                triggerRefValue(self2, 4);
            }
            trackRefValue(self2);
            if (self2.effect._dirtyLevel >= 2) {
                if (this._warnRecursive) {
                    warn$2(COMPUTED_SIDE_EFFECT_WARN, "\n\ngetter: ", this.getter);
                }
                triggerRefValue(self2, 2);
            }
            return self2._value;
        },
        set: function set(newValue) {
            this._setter(newValue);
        }
        // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
        }, {
        key: "_dirty",
        get: function get() {
            return this.effect.dirty;
        },
        set: function set(v2) {
            this.effect.dirty = v2;
        }
        // #endregion
        } ]);
}();

function computed$1(getterOrOptions, debugOptions) {
    var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var getter;
    var setter;
    var onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = function setter() {
            warn$2("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}

function trackRefValue(ref2) {
    var _a;
    if (shouldTrack && activeEffect) {
        ref2 = toRaw(ref2);
        trackEffect(activeEffect, (_a = ref2.dep) != null ? _a : ref2.dep = createDep(function() {
            return ref2.dep = void 0;
        }, ref2 instanceof ComputedRefImpl ? ref2 : void 0), {
            target: ref2,
            type: "get",
            key: "value"
        });
    }
}

function triggerRefValue(ref2) {
    var dirtyLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var newVal = arguments.length > 2 ? arguments[2] : undefined;
    ref2 = toRaw(ref2);
    var dep = ref2.dep;
    if (dep) {
        triggerEffects(dep, dirtyLevel, {
            target: ref2,
            type: "set",
            key: "value",
            newValue: newVal
        });
    }
}

function isRef(r2) {
    return !!(r2 && r2.__v_isRef === true);
}

function ref(value2) {
    return createRef(value2, false);
}

function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}

var RefImpl = /* */ function() {
    function RefImpl(value2, __v_isShallow) {
        _classCallCheck2(this, RefImpl);
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value2 : toRaw(value2);
        this._value = __v_isShallow ? value2 : toReactive(value2);
    }
    return _createClass2(RefImpl, [ {
        key: "value",
        get: function get() {
            trackRefValue(this);
            return this._value;
        },
        set: function set(newVal) {
            var useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
            newVal = useDirectValue ? newVal : toRaw(newVal);
            if (hasChanged(newVal, this._rawValue)) {
                this._rawValue = newVal;
                this._value = useDirectValue ? newVal : toReactive(newVal);
                triggerRefValue(this, 4, newVal);
            }
        }
    } ]);
}();

function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
}

var shallowUnwrapHandlers = {
    get: function get(target, key, receiver) {
        return unref(Reflect.get(target, key, receiver));
    },
    set: function set(target, key, value2, receiver) {
        var oldValue = target[key];
        if (isRef(oldValue) && !isRef(value2)) {
            oldValue.value = value2;
            return true;
        } else {
            return Reflect.set(target, key, value2, receiver);
        }
    }
};

function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

function toRefs(object2) {
    if (!isProxy(object2)) {
        warn$2("toRefs() expects a reactive object but received a plain one.");
    }
    var ret = isArray$1(object2) ? new Array(object2.length) : {};
    for (var key in object2) {
        ret[key] = propertyToRef(object2, key);
    }
    return ret;
}

var ObjectRefImpl = /* */ function() {
    function ObjectRefImpl(_object, _key, _defaultValue) {
        _classCallCheck2(this, ObjectRefImpl);
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    return _createClass2(ObjectRefImpl, [ {
        key: "value",
        get: function get() {
            var val = this._object[this._key];
            return val === void 0 ? this._defaultValue : val;
        },
        set: function set(newVal) {
            this._object[this._key] = newVal;
        }
    }, {
        key: "dep",
        get: function get() {
            return getDepFromReactive(toRaw(this._object), this._key);
        }
    } ]);
}();

var GetterRefImpl = /* */ function() {
    function GetterRefImpl(_getter) {
        _classCallCheck2(this, GetterRefImpl);
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
    }
    return _createClass2(GetterRefImpl, [ {
        key: "value",
        get: function get() {
            return this._getter();
        }
    } ]);
}();

function toRef(source, key, defaultValue) {
    if (isRef(source)) {
        return source;
    } else if (isFunction(source)) {
        return new GetterRefImpl(source);
    } else if (isObject$1(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
    } else {
        return ref(source);
    }
}

function propertyToRef(source, key, defaultValue) {
    var val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}

var stack = [];

function pushWarningContext(vnode) {
    stack.push(vnode);
}

function popWarningContext() {
    stack.pop();
}

function warn$1(msg) {
    pauseTracking();
    var instance = stack.length ? stack[stack.length - 1].component : null;
    var appWarnHandler = instance && instance.appContext.config.warnHandler;
    var trace = getComponentTrace();
    for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key12 = 1; _key12 < _len11; _key12++) {
        args[_key12 - 1] = arguments[_key12];
    }
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11, [ msg + args.map(function(a2) {
            var _a, _b;
            return (_b = (_a = a2.toString) == null ? void 0 : _a.call(a2)) != null ? _b : JSON.stringify(a2);
        }).join(""), instance && instance.proxy, trace.map(function(_ref3) {
            var vnode = _ref3.vnode;
            return "at <".concat(formatComponentName(instance, vnode.type), ">");
        }).join("\n"), trace ]);
    } else {
        var _console3;
        var warnArgs = [ "[Vue warn]: ".concat(msg) ].concat(args);
        if (trace.length && 
        // avoid spamming console during tests
        true) {
            warnArgs.push.apply(warnArgs, [ "\n" ].concat(_toConsumableArray2(formatTrace(trace))));
        }
        (_console3 = console).warn.apply(_console3, _toConsumableArray2(warnArgs));
    }
    resetTracking();
}

function getComponentTrace() {
    var currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    var normalizedStack = [];
    while (currentVNode) {
        var last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        } else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        var parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}

function formatTrace(trace) {
    var logs = [];
    trace.forEach(function(entry, i2) {
        logs.push.apply(logs, _toConsumableArray2(i2 === 0 ? [] : [ "\n" ]).concat(_toConsumableArray2(formatTraceEntry(entry))));
    });
    return logs;
}

function formatTraceEntry(_ref4) {
    var vnode = _ref4.vnode, recurseCount = _ref4.recurseCount;
    var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
    var isRoot = vnode.component ? vnode.component.parent == null : false;
    var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
    var close = ">" + postfix;
    return vnode.props ? [ open ].concat(_toConsumableArray2(formatProps(vnode.props)), [ close ]) : [ open + close ];
}

function formatProps(props2) {
    var res = [];
    var keys = Object.keys(props2);
    keys.slice(0, 3).forEach(function(key) {
        res.push.apply(res, _toConsumableArray2(formatProp(key, props2[key])));
    });
    if (keys.length > 3) {
        res.push(" ...");
    }
    return res;
}

function formatProp(key, value2, raw) {
    if (isString(value2)) {
        value2 = JSON.stringify(value2);
        return raw ? value2 : [ "".concat(key, "=").concat(value2) ];
    } else if (typeof value2 === "number" || typeof value2 === "boolean" || value2 == null) {
        return raw ? value2 : [ "".concat(key, "=").concat(value2) ];
    } else if (isRef(value2)) {
        value2 = formatProp(key, toRaw(value2.value), true);
        return raw ? value2 : [ "".concat(key, "=Ref<"), value2, ">" ];
    } else if (isFunction(value2)) {
        return [ "".concat(key, "=fn").concat(value2.name ? "<".concat(value2.name, ">") : "") ];
    } else {
        value2 = toRaw(value2);
        return raw ? value2 : [ "".concat(key, "="), value2 ];
    }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_ErrorTypeStrings, "sp", "serverPrefetch hook"), "bc", "beforeCreate hook"), "c", "created hook"), "bm", "beforeMount hook"), "m", "mounted hook"), "bu", "beforeUpdate hook"), "u", "updated"), "bum", "beforeUnmount hook"), "um", "unmounted hook"), "a", "activated hook"), 
_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_ErrorTypeStrings, "da", "deactivated hook"), "ec", "errorCaptured hook"), "rtc", "renderTracked hook"), "rtg", "renderTriggered hook"), 0, "setup function"), 1, "render function"), 2, "watcher getter"), 3, "watcher callback"), 4, "watcher cleanup function"), 5, "native event handler"), 
_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_ErrorTypeStrings, 6, "component event handler"), 7, "vnode hook"), 8, "directive hook"), 9, "transition hook"), 10, "app errorHandler"), 11, "app warnHandler"), 12, "ref function"), 13, "async component loader"), 14, "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."));

function callWithErrorHandling(fn, instance, type, args) {
    try {
        return args ? fn.apply(void 0, _toConsumableArray2(args)) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
        var res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) {
            res.catch(function(err) {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    var values = [];
    for (var i2 = 0; i2 < fn.length; i2++) {
        values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
    }
    return values;
}

function handleError(err, instance, type) {
    var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var contextVNode = instance ? instance.vnode : null;
    if (instance) {
        var cur = instance.parent;
        var exposedInstance = instance.proxy;
        var errorInfo = ErrorTypeStrings[type] || type;
        while (cur) {
            var errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (var i2 = 0; i2 < errorCapturedHooks.length; i2++) {
                    if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        var appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10, [ err, exposedInstance, errorInfo ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
    var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    {
        var info = ErrorTypeStrings[type] || type;
        if (contextVNode) {
            pushWarningContext(contextVNode);
        }
        warn$1("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));
        if (contextVNode) {
            popWarningContext();
        }
        if (throwInDev) {
            console.error(err);
        } else {
            console.error(err);
        }
    }
}

var isFlushing = false;

var isFlushPending = false;

var queue = [];

var flushIndex = 0;

var pendingPostFlushCbs = [];

var activePostFlushCbs = null;

var postFlushIndex = 0;

var resolvedPromise = /*   */ Promise.resolve();

var currentFlushPromise = null;

var RECURSION_LIMIT = 100;

function nextTick$1(fn) {
    var p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}

function findInsertionIndex(id) {
    var start = flushIndex + 1;
    var end = queue.length;
    while (start < end) {
        var middle = start + end >>> 1;
        var middleJob = queue[middle];
        var middleJobId = getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
}

function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) {
            queue.push(job);
        } else {
            queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
    }
}

function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}

function hasQueueJob(job) {
    return queue.indexOf(job) > -1;
}

function invalidateJob(job) {
    var i2 = queue.indexOf(job);
    if (i2 > flushIndex) {
        queue.splice(i2, 1);
    }
}

function queuePostFlushCb(cb) {
    if (!isArray$1(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
            pendingPostFlushCbs.push(cb);
        }
    } else {
        pendingPostFlushCbs.push.apply(pendingPostFlushCbs, _toConsumableArray2(cb));
    }
    queueFlush();
}

function flushPreFlushCbs(instance, seen) {
    var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isFlushing ? flushIndex + 1 : 0;
    {
        seen = seen || /*   */ new Map();
    }
    for (;i2 < queue.length; i2++) {
        var cb = queue[i2];
        if (cb && cb.pre) {
            if (instance && cb.id !== instance.uid) {
                continue;
            }
            if (checkRecursiveUpdates(seen, cb)) {
                continue;
            }
            queue.splice(i2, 1);
            i2--;
            cb();
        }
    }
}

function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        var deduped = _toConsumableArray2(new Set(pendingPostFlushCbs)).sort(function(a2, b2) {
            return getId(a2) - getId(b2);
        });
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
            var _activePostFlushCbs;
            (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray2(deduped));
            return;
        }
        activePostFlushCbs = deduped;
        {
            seen = seen || /*   */ new Map();
        }
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
                continue;
            }
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}

var getId = function getId(job) {
    return job.id == null ? Infinity : job.id;
};

var comparator = function comparator(a2, b2) {
    var diff2 = getId(a2) - getId(b2);
    if (diff2 === 0) {
        if (a2.pre && !b2.pre) return -1;
        if (b2.pre && !a2.pre) return 1;
    }
    return diff2;
};

function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    {
        seen = seen || /*   */ new Map();
    }
    queue.sort(comparator);
    var check = function check(job) {
        return checkRecursiveUpdates(seen, job);
    };
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            var job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) {
                    continue;
                }
                callWithErrorHandling(job, null, 14);
            }
        }
    } finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}

function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    } else {
        var count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            var instance = fn.ownerInstance;
            var componentName = instance && getComponentName(instance.type);
            handleError("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function."), null, 10);
            return true;
        } else {
            seen.set(fn, count + 1);
        }
    }
}

var devtools;

var buffer = [];

var devtoolsNotInstalled = false;

function emit$1(event) {
    for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key13 = 1; _key13 < _len12; _key13++) {
        args[_key13 - 1] = arguments[_key13];
    }
    if (devtools) {
        var _devtools;
        (_devtools = devtools).emit.apply(_devtools, [ event ].concat(args));
    } else if (!devtoolsNotInstalled) {
        buffer.push({
            event: event,
            args: args
        });
    }
}

function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(function(_ref10) {
            var _devtools2;
            var event = _ref10.event, args = _ref10.args;
            return (_devtools2 = devtools).emit.apply(_devtools2, [ event ].concat(_toConsumableArray2(args)));
        });
        buffer = [];
    } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && 
    // some envs mock window but not fully
    window.HTMLElement && 
    // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push(function(newHook) {
            setDevtoolsHook(newHook, target);
        });
        setTimeout(function() {
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3e3);
    } else {
        devtoolsNotInstalled = true;
        buffer = [];
    }
}

function devtoolsInitApp(app, version2) {
    emit$1("app:init", app, version2, {
        Fragment: Fragment,
        Text: Text,
        Comment: Comment,
        Static: Static
    });
}

var devtoolsComponentAdded = /*   */ createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */);

var devtoolsComponentUpdated = /*   */ createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */);

var _devtoolsComponentRemoved = /*   */ createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */);

var devtoolsComponentRemoved = function devtoolsComponentRemoved(component) {
    if (devtools && typeof devtools.cleanupBuffer === "function" && 
    // remove the component if it wasn't buffered
    !devtools.cleanupBuffer(component)) {
        _devtoolsComponentRemoved(component);
    }
};

/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
    return function(component) {
        emit$1(hook, component.appContext.app, component.uid, 
        // fixed by xxxxxx
        // 为 0 是 App，无 parent 是 Page 指向 App
        component.uid === 0 ? void 0 : component.parent ? component.parent.uid : 0, component);
    };
}

var devtoolsPerfStart = /*   */ createDevtoolsPerformanceHook("perf:start"
/* PERFORMANCE_START */);

var devtoolsPerfEnd = /*   */ createDevtoolsPerformanceHook("perf:end"
/* PERFORMANCE_END */);

function createDevtoolsPerformanceHook(hook) {
    return function(component, type, time) {
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}

function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit", component.appContext.app, component, event, params);
}

function emit(instance, event) {
    if (instance.isUnmounted) return;
    var props2 = instance.vnode.props || EMPTY_OBJ;
    for (var _len13 = arguments.length, rawArgs = new Array(_len13 > 2 ? _len13 - 2 : 0), _key14 = 2; _key14 < _len13; _key14++) {
        rawArgs[_key14 - 2] = arguments[_key14];
    }
    {
        var emitsOptions = instance.emitsOptions, _instance$propsOption = _slicedToArray2(instance.propsOptions, 1), propsOptions = _instance$propsOption[0];
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
                    warn$1('Component emitted event "'.concat(event, '" but it is neither declared in the emits option nor as an "').concat(toHandlerKey(event), '" prop.'));
                }
            } else {
                var validator = emitsOptions[event];
                if (isFunction(validator)) {
                    var isValid = validator.apply(void 0, rawArgs);
                    if (!isValid) {
                        warn$1('Invalid event arguments: event validation failed for event "'.concat(event, '".'));
                    }
                }
            }
        }
    }
    var args = rawArgs;
    var isModelListener2 = event.startsWith("update:");
    var modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props2) {
        var modifiersKey = "".concat(modelArg === "modelValue" ? "model" : modelArg, "Modifiers");
        var _ref11 = props2[modifiersKey] || EMPTY_OBJ, number2 = _ref11.number, trim2 = _ref11.trim;
        if (trim2) {
            args = rawArgs.map(function(a2) {
                return isString(a2) ? a2.trim() : a2;
            });
        }
        if (number2) {
            args = rawArgs.map(looseToNumber);
        }
    }
    {
        devtoolsComponentEmit(instance, event, args);
    }
    {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props2[toHandlerKey(lowerCaseEvent)]) {
            warn$1('Event "'.concat(lowerCaseEvent, '" is emitted in component ').concat(formatComponentName(instance, instance.type), ' but the handler is registered for "').concat(event, '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "').concat(hyphenate(event), '" instead of "').concat(event, '".'));
        }
    }
    var handlerName;
    var handler = props2[handlerName = toHandlerKey(event)] || 
    // also try camelCase event handler (#2249)
    props2[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
        handler = props2[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    var onceHandler = props2[handlerName + "Once"];
    if (onceHandler) {
        if (!instance.emitted) {
            instance.emitted = {};
        } else if (instance.emitted[handlerName]) {
            return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
}

function normalizeEmitsOptions(comp, appContext) {
    var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var cache = appContext.emitsCache;
    var cached = cache.get(comp);
    if (cached !== void 0) {
        return cached;
    }
    var raw = comp.emits;
    var normalized = {};
    var hasExtends = false;
    if (!isFunction(comp)) {
        var extendEmits = function extendEmits(raw2) {
            var normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        if (isObject$1(comp)) {
            cache.set(comp, null);
        }
        return null;
    }
    if (isArray$1(raw)) {
        raw.forEach(function(key) {
            return normalized[key] = null;
        });
    } else {
        extend(normalized, raw);
    }
    if (isObject$1(comp)) {
        cache.set(comp, normalized);
    }
    return normalized;
}

function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}

var currentRenderingInstance = null;

function setCurrentRenderingInstance(instance) {
    var prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    instance && instance.type.__scopeId || null;
    return prev;
}

var COMPONENTS = "components";

function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

function resolveAsset(type, name) {
    var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var instance = currentRenderingInstance || currentInstance;
    if (instance) {
        var Component2 = instance.type;
        if (type === COMPONENTS) {
            var selfName = getComponentName(Component2, false);
            if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
                return Component2;
            }
        }
        var res = 
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component2[type], name) || 
        // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) {
            return Component2;
        }
        if (warnMissing && !res) {
            var extra = type === COMPONENTS ? "\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement." : "";
            warn$1("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name).concat(extra));
        }
        return res;
    } else {
        warn$1("resolve".concat(capitalize(type.slice(0, -1)), " can only be used in render() or setup()."));
    }
}

function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}

var INITIAL_WATCHER_VALUE = {};

function watch(source, cb, options) {
    if (!isFunction(cb)) {
        warn$1("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature.");
    }
    return doWatch(source, cb, options);
}

function doWatch(source, cb) {
    var _ref12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJ, immediate = _ref12.immediate, deep = _ref12.deep, flush = _ref12.flush, once2 = _ref12.once, onTrack = _ref12.onTrack, onTrigger = _ref12.onTrigger;
    if (cb && once2) {
        var _cb = cb;
        cb = function cb() {
            _cb.apply(void 0, arguments);
            unwatch();
        };
    }
    if (deep !== void 0 && typeof deep === "number") {
        warn$1('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.');
    }
    if (!cb) {
        if (immediate !== void 0) {
            warn$1('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.');
        }
        if (deep !== void 0) {
            warn$1('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.');
        }
        if (once2 !== void 0) {
            warn$1('watch() "once" option is only respected when using the watch(source, callback, options?) signature.');
        }
    }
    var warnInvalidSource = function warnInvalidSource(s2) {
        warn$1("Invalid watch source: ", s2, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
    };
    var instance = currentInstance;
    var reactiveGetter = function reactiveGetter(source2) {
        return deep === true ? source2 : 
        // for deep: false, only traverse root-level properties
        traverse(source2, deep === false ? 1 : void 0);
    };
    var getter;
    var forceTrigger = false;
    var isMultiSource = false;
    if (isRef(source)) {
        getter = function getter() {
            return source.value;
        };
        forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
        getter = function getter() {
            return reactiveGetter(source);
        };
        forceTrigger = true;
    } else if (isArray$1(source)) {
        isMultiSource = true;
        forceTrigger = source.some(function(s2) {
            return isReactive(s2) || isShallow(s2);
        });
        getter = function getter() {
            return source.map(function(s2) {
                if (isRef(s2)) {
                    return s2.value;
                } else if (isReactive(s2)) {
                    return reactiveGetter(s2);
                } else if (isFunction(s2)) {
                    return callWithErrorHandling(s2, instance, 2);
                } else {
                    warnInvalidSource(s2);
                }
            });
        };
    } else if (isFunction(source)) {
        if (cb) {
            getter = function getter() {
                return callWithErrorHandling(source, instance, 2);
            };
        } else {
            getter = function getter() {
                if (cleanup) {
                    cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3, [ onCleanup ]);
            };
        }
    } else {
        getter = NOOP;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        var baseGetter = getter;
        getter = function getter() {
            return traverse(baseGetter());
        };
    }
    var cleanup;
    var onCleanup = function onCleanup(fn) {
        cleanup = effect2.onStop = function() {
            callWithErrorHandling(fn, instance, 4);
            cleanup = effect2.onStop = void 0;
        };
    };
    var oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    var job = function job() {
        if (!effect2.active || !effect2.dirty) {
            return;
        }
        if (cb) {
            var newValue = effect2.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some(function(v2, i2) {
                return hasChanged(v2, oldValue[i2]);
            }) : hasChanged(newValue, oldValue)) || false) {
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3, [ newValue, 
                // pass undefined as the old value when it's changed for the first time
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, onCleanup ]);
                oldValue = newValue;
            }
        } else {
            effect2.run();
        }
    };
    job.allowRecurse = !!cb;
    var scheduler;
    if (flush === "sync") {
        scheduler = job;
    } else if (flush === "post") {
        scheduler = function scheduler() {
            return queuePostRenderEffect$1(job, instance && instance.suspense);
        };
    } else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = function scheduler() {
            return queueJob(job);
        };
    }
    var effect2 = new ReactiveEffect2(getter, NOOP, scheduler);
    var scope = getCurrentScope();
    var unwatch = function unwatch() {
        effect2.stop();
        if (scope) {
            remove(scope.effects, effect2);
        }
    };
    {
        effect2.onTrack = onTrack;
        effect2.onTrigger = onTrigger;
    }
    if (cb) {
        if (immediate) {
            job();
        } else {
            oldValue = effect2.run();
        }
    } else if (flush === "post") {
        queuePostRenderEffect$1(effect2.run.bind(effect2), instance && instance.suspense);
    } else {
        effect2.run();
    }
    return unwatch;
}

function instanceWatch(source, value2, options) {
    var publicThis = this.proxy;
    var getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : function() {
        return publicThis[source];
    } : source.bind(publicThis, publicThis);
    var cb;
    if (isFunction(value2)) {
        cb = value2;
    } else {
        cb = value2.handler;
        options = value2;
    }
    var reset = setCurrentInstance(this);
    var res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
}

function createPathGetter(ctx, path) {
    var segments = path.split(".");
    return function() {
        var cur = ctx;
        for (var i2 = 0; i2 < segments.length && cur; i2++) {
            cur = cur[segments[i2]];
        }
        return cur;
    };
}

function traverse(value2, depth) {
    var currentDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var seen = arguments.length > 3 ? arguments[3] : undefined;
    if (!isObject$1(value2) || value2["__v_skip"]) {
        return value2;
    }
    if (depth && depth > 0) {
        if (currentDepth >= depth) {
            return value2;
        }
        currentDepth++;
    }
    seen = seen || /*   */ new Set();
    if (seen.has(value2)) {
        return value2;
    }
    seen.add(value2);
    if (isRef(value2)) {
        traverse(value2.value, depth, currentDepth, seen);
    } else if (isArray$1(value2)) {
        for (var i2 = 0; i2 < value2.length; i2++) {
            traverse(value2[i2], depth, currentDepth, seen);
        }
    } else if (isSet(value2) || isMap(value2)) {
        value2.forEach(function(v2) {
            traverse(v2, depth, currentDepth, seen);
        });
    } else if (isPlainObject$2(value2)) {
        for (var key in value2) {
            traverse(value2[key], depth, currentDepth, seen);
        }
    }
    return value2;
}

function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn$1("Do not use built-in directive ids as custom directive id: " + name);
    }
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /*   */ Object.create(null),
        optionsCache: /*   */ new WeakMap(),
        propsCache: /*   */ new WeakMap(),
        emitsCache: /*   */ new WeakMap()
    };
}

var uid$1 = 0;

function createAppAPI(render, hydrate) {
    return function createApp2(rootComponent) {
        var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!isFunction(rootComponent)) {
            rootComponent = extend({}, rootComponent);
        }
        if (rootProps != null && !isObject$1(rootProps)) {
            warn$1("root props passed to app.mount() must be an object.");
            rootProps = null;
        }
        var context = createAppContext();
        var installedPlugins = /*   */ new WeakSet();
        var app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version: version$1,
            get config() {
                return context.config;
            },
            set config(v2) {
                {
                    warn$1("app.config cannot be replaced. Modify individual options instead.");
                }
            },
            use: function use(plugin2) {
                for (var _len14 = arguments.length, options = new Array(_len14 > 1 ? _len14 - 1 : 0), _key15 = 1; _key15 < _len14; _key15++) {
                    options[_key15 - 1] = arguments[_key15];
                }
                if (installedPlugins.has(plugin2)) {
                    warn$1("Plugin has already been applied to target app.");
                } else if (plugin2 && isFunction(plugin2.install)) {
                    installedPlugins.add(plugin2);
                    plugin2.install.apply(plugin2, [ app ].concat(options));
                } else if (isFunction(plugin2)) {
                    installedPlugins.add(plugin2);
                    plugin2.apply(void 0, [ app ].concat(options));
                } else {
                    warn$1('A plugin must either be a function or an object with an "install" function.');
                }
                return app;
            },
            mixin: function mixin(mixin2) {
                {
                    if (!context.mixins.includes(mixin2)) {
                        context.mixins.push(mixin2);
                    } else {
                        warn$1("Mixin has already been applied to target app" + (mixin2.name ? ": ".concat(mixin2.name) : ""));
                    }
                }
                return app;
            },
            component: function component(name, _component) {
                {
                    validateComponentName(name, context.config);
                }
                if (!_component) {
                    return context.components[name];
                }
                if (context.components[name]) {
                    warn$1('Component "'.concat(name, '" has already been registered in target app.'));
                }
                context.components[name] = _component;
                return app;
            },
            directive: function directive(name, _directive) {
                {
                    validateDirectiveName(name);
                }
                if (!_directive) {
                    return context.directives[name];
                }
                if (context.directives[name]) {
                    warn$1('Directive "'.concat(name, '" has already been registered in target app.'));
                }
                context.directives[name] = _directive;
                return app;
            },
            // fixed by xxxxxx
            mount: function mount() {},
            // fixed by xxxxxx
            unmount: function unmount() {},
            provide: function provide(key, value2) {
                if (key in context.provides) {
                    warn$1('App already provides property with key "'.concat(String(key), '". It will be overwritten with the new value.'));
                }
                context.provides[key] = value2;
                return app;
            },
            runWithContext: function runWithContext(fn) {
                var lastApp = currentApp;
                currentApp = app;
                try {
                    return fn();
                } finally {
                    currentApp = lastApp;
                }
            }
        };
        return app;
    };
}

var currentApp = null;

function provide(key, value2) {
    if (!currentInstance) {
        {
            warn$1("provide() can only be used inside setup().");
        }
    } else {
        var provides = currentInstance.provides;
        var parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        provides[key] = value2;
        if (currentInstance.type.mpType === "app") {
            currentInstance.appContext.app.provide(key, value2);
        }
    }
}

function inject(key, defaultValue) {
    var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
        var provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
        if (provides && key in provides) {
            return provides[key];
        } else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        } else {
            warn$1('injection "'.concat(String(key), '" not found.'));
        }
    } else {
        warn$1("inject() can only be used inside setup() or functional components.");
    }
}

function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
}

var isKeepAlive = function isKeepAlive(vnode) {
    return vnode.type.__isKeepAlive;
};

function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
}

function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
}

function registerKeepAliveHook(hook, type) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
    var wrappedHook = hook.__wdc || (hook.__wdc = function() {
        var current = target;
        while (current) {
            if (current.isDeactivated) {
                return;
            }
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
        var current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    var injected = injectHook(type, hook, keepAliveRoot, true
    /* prepend */);
    onUnmounted(function() {
        remove(keepAliveRoot[type], injected);
    }, target);
}

function injectHook(type, hook) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
    var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (target) {
        if (isRootHook(type)) {
            target = target.root;
        }
        var hooks = target[type] || (target[type] = []);
        var wrappedHook = hook.__weh || (hook.__weh = function() {
            if (target.isUnmounted) {
                return;
            }
            pauseTracking();
            var reset = setCurrentInstance(target);
            for (var _len15 = arguments.length, args = new Array(_len15), _key16 = 0; _key16 < _len15; _key16++) {
                args[_key16] = arguments[_key16];
            }
            var res = callWithAsyncErrorHandling(hook, target, type, args);
            reset();
            resetTracking();
            return res;
        });
        if (prepend) {
            hooks.unshift(wrappedHook);
        } else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    } else {
        var apiName = toHandlerKey((ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, ""));
        warn$1("".concat(apiName, " is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup()."));
    }
}

var createHook$1 = function createHook$1(lifecycle) {
    return function(hook) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
        return;
        // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
                // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, function() {
            return hook.apply(void 0, arguments);
        }, target);
    };
};

var onBeforeMount = createHook$1("bm");

var onMounted = createHook$1("m");

var onBeforeUpdate = createHook$1("bu");

var onUpdated = createHook$1("u");

var onBeforeUnmount = createHook$1("bum");

var onUnmounted = createHook$1("um");

var onServerPrefetch = createHook$1("sp");

var onRenderTriggered = createHook$1("rtg");

var onRenderTracked = createHook$1("rtc");

function onErrorCaptured(hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    injectHook("ec", hook, target);
}

var _getPublicInstance = function getPublicInstance(i2) {
    if (!i2) return null;
    if (isStatefulComponent(i2)) return getExposeProxy(i2) || i2.proxy;
    return _getPublicInstance(i2.parent);
};

var publicPropertiesMap = 
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*   */
extend(/*   */ Object.create(null), {
    $: function $(i2) {
        return i2;
    },
    // fixed by xxxxxx vue-i18n 在 dev 模式，访问了 $el，故模拟一个假的
    // $el: i => i.vnode.el,
    $el: function $el(i2) {
        return i2.__$el || (i2.__$el = {});
    },
    $data: function $data(i2) {
        return i2.data;
    },
    $props: function $props(i2) {
        return shallowReadonly(i2.props);
    },
    $attrs: function $attrs(i2) {
        return shallowReadonly(i2.attrs);
    },
    $slots: function $slots(i2) {
        return shallowReadonly(i2.slots);
    },
    $refs: function $refs(i2) {
        return shallowReadonly(i2.refs);
    },
    $parent: function $parent(i2) {
        return _getPublicInstance(i2.parent);
    },
    $root: function $root(i2) {
        return _getPublicInstance(i2.root);
    },
    $emit: function $emit(i2) {
        return i2.emit;
    },
    $options: function $options(i2) {
        return resolveMergedOptions(i2);
    },
    $forceUpdate: function $forceUpdate(i2) {
        return i2.f || (i2.f = function() {
            i2.effect.dirty = true;
            queueJob(i2.update);
        });
    },
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),// fixed by xxxxxx
    $watch: function $watch(i2) {
        return instanceWatch.bind(i2);
    }
});

var isReservedPrefix = function isReservedPrefix(key) {
    return key === "_" || key === "$";
};

var hasSetupBinding = function hasSetupBinding(state, key) {
    return state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
};

var PublicInstanceProxyHandlers = {
    get: function get(_ref13, key) {
        var instance = _ref13._;
        var ctx = instance.ctx, setupState = instance.setupState, data = instance.data, props2 = instance.props, accessCache = instance.accessCache, type = instance.type, appContext = instance.appContext;
        if (key === "__isVue") {
            return true;
        }
        var normalizedProps;
        if (key[0] !== "$") {
            var n2 = accessCache[key];
            if (n2 !== void 0) {
                switch (n2) {
                  case 1:
                    return setupState[key];

                  case 2:
                    return data[key];

                  case 4:
                    return ctx[key];

                  case 3:
                    return props2[key];
                }
            } else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1;
                return setupState[key];
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                accessCache[key] = 2;
                return data[key];
            } else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
                accessCache[key] = 3;
                return props2[key];
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                accessCache[key] = 4;
                return ctx[key];
            } else if (shouldCacheAccess) {
                accessCache[key] = 0;
            }
        }
        var publicGetter = publicPropertiesMap[key];
        var cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") {
                track(instance, "get", key);
            } else if (key === "$slots") {
                track(instance, "get", key);
            }
            return publicGetter(instance);
        } else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
            return cssModule;
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
        } else if (
        // global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
            {
                return globalProperties[key];
            }
        } else if (currentRenderingInstance && (!isString(key) || 
        // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
                warn$1("Property ".concat(JSON.stringify(key), ' must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.'));
            } else if (instance === currentRenderingInstance) {
                warn$1("Property ".concat(JSON.stringify(key), " was accessed during render but is not defined on instance."));
            }
        }
    },
    set: function set(_ref14, key, value2) {
        var instance = _ref14._;
        var data = instance.data, setupState = instance.setupState, ctx = instance.ctx;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value2;
            return true;
        } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
            warn$1('Cannot mutate <script setup> binding "'.concat(key, '" from Options API.'));
            return false;
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value2;
            return true;
        } else if (hasOwn(instance.props, key)) {
            warn$1('Attempting to mutate prop "'.concat(key, '". Props are readonly.'));
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn$1('Attempting to mutate public property "'.concat(key, '". Properties starting with $ are reserved and readonly.'));
            return false;
        } else {
            if (key in instance.appContext.config.globalProperties) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    value: value2
                });
            } else {
                ctx[key] = value2;
            }
        }
        return true;
    },
    has: function has(_ref15, key) {
        var _ref15$_ = _ref15._, data = _ref15$_.data, setupState = _ref15$_.setupState, accessCache = _ref15$_.accessCache, ctx = _ref15$_.ctx, appContext = _ref15$_.appContext, propsOptions = _ref15$_.propsOptions;
        var normalizedProps;
        return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty: function defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
            target._.accessCache[key] = 0;
        } else if (hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
    }
};

{
    PublicInstanceProxyHandlers.ownKeys = function(target) {
        warn$1("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.");
        return Reflect.ownKeys(target);
    };
}

function createDevRenderContext(instance) {
    var target = {};
    Object.defineProperty(target, "_", {
        configurable: true,
        enumerable: false,
        get: function get() {
            return instance;
        }
    });
    Object.keys(publicPropertiesMap).forEach(function(key) {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: function get() {
                return publicPropertiesMap[key](instance);
            },
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: NOOP
        });
    });
    return target;
}

function exposePropsOnRenderContext(instance) {
    var ctx = instance.ctx, _instance$propsOption2 = _slicedToArray2(instance.propsOptions, 1), propsOptions = _instance$propsOption2[0];
    if (propsOptions) {
        Object.keys(propsOptions).forEach(function(key) {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: function get() {
                    return instance.props[key];
                },
                set: NOOP
            });
        });
    }
}

function exposeSetupStateOnRenderContext(instance) {
    var ctx = instance.ctx, setupState = instance.setupState;
    Object.keys(toRaw(setupState)).forEach(function(key) {
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn$1("setup() return property ".concat(JSON.stringify(key), ' should not start with "$" or "_" which are reserved prefixes for Vue internals.'));
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: function get() {
                    return setupState[key];
                },
                set: NOOP
            });
        }
    });
}

function normalizePropsOrEmits(props2) {
    return isArray$1(props2) ? props2.reduce(function(normalized, p2) {
        return normalized[p2] = null, normalized;
    }, {}) : props2;
}

function createDuplicateChecker() {
    var cache = /*   */ Object.create(null);
    return function(type, key) {
        if (cache[key]) {
            warn$1("".concat(type, ' property "').concat(key, '" is already defined in ').concat(cache[key], "."));
        } else {
            cache[key] = type;
        }
    };
}

var shouldCacheAccess = true;

function applyOptions$1(instance) {
    var options = resolveMergedOptions(instance);
    var publicThis = instance.proxy;
    var ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
        callHook$1(options.beforeCreate, instance, "bc");
    }
    var dataOptions = options.data, computedOptions = options.computed, methods = options.methods, watchOptions = options.watch, provideOptions = options.provide, injectOptions = options.inject, created = options.created, beforeMount = options.beforeMount, mounted = options.mounted, beforeUpdate = options.beforeUpdate, updated = options.updated, activated = options.activated, deactivated = options.deactivated, beforeDestroy = options.beforeDestroy, beforeUnmount = options.beforeUnmount, destroyed = options.destroyed, unmounted = options.unmounted, render = options.render, renderTracked = options.renderTracked, renderTriggered = options.renderTriggered, errorCaptured = options.errorCaptured, serverPrefetch = options.serverPrefetch, expose = options.expose, inheritAttrs = options.inheritAttrs, components = options.components, directives = options.directives, filters = options.filters;
    var checkDuplicateProperties = createDuplicateChecker();
    {
        var _instance$propsOption3 = _slicedToArray2(instance.propsOptions, 1), propsOptions = _instance$propsOption3[0];
        if (propsOptions) {
            for (var key in propsOptions) {
                checkDuplicateProperties("Props", key);
            }
        }
    }
    if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
    if (methods) {
        for (var _key17 in methods) {
            var methodHandler = methods[_key17];
            if (isFunction(methodHandler)) {
                {
                    Object.defineProperty(ctx, _key17, {
                        value: methodHandler.bind(publicThis),
                        configurable: true,
                        enumerable: true,
                        writable: true
                    });
                }
                {
                    checkDuplicateProperties("Methods", _key17);
                }
            } else {
                warn$1('Method "'.concat(_key17, '" has type "').concat(_typeof2(methodHandler), '" in the component definition. Did you reference the function correctly?'));
            }
        }
    }
    if (dataOptions) {
        if (!isFunction(dataOptions)) {
            warn$1("The data option must be a function. Plain object usage is no longer supported.");
        }
        var data = dataOptions.call(publicThis, publicThis);
        if (isPromise(data)) {
            warn$1("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.");
        }
        if (!isObject$1(data)) {
            warn$1("data() should return an object.");
        } else {
            instance.data = reactive(data);
            {
                var _loop = function _loop(_key18) {
                    checkDuplicateProperties("Data", _key18);
                    if (!isReservedPrefix(_key18[0])) {
                        Object.defineProperty(ctx, _key18, {
                            configurable: true,
                            enumerable: true,
                            get: function get() {
                                return data[_key18];
                            },
                            set: NOOP
                        });
                    }
                };
                for (var _key18 in data) {
                    _loop(_key18);
                }
            }
        }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
        var _loop2 = function _loop2(_key19) {
            var opt = computedOptions[_key19];
            var get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
            if (get2 === NOOP) {
                warn$1('Computed property "'.concat(_key19, '" has no getter.'));
            }
            var set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : function() {
                warn$1('Write operation failed: computed property "'.concat(_key19, '" is readonly.'));
            };
            var c2 = computed({
                get: get2,
                set: set2
            });
            Object.defineProperty(ctx, _key19, {
                enumerable: true,
                configurable: true,
                get: function get() {
                    return c2.value;
                },
                set: function set(v2) {
                    return c2.value = v2;
                }
            });
            {
                checkDuplicateProperties("Computed", _key19);
            }
        };
        for (var _key19 in computedOptions) {
            _loop2(_key19);
        }
    }
    if (watchOptions) {
        for (var _key20 in watchOptions) {
            createWatcher(watchOptions[_key20], ctx, publicThis, _key20);
        }
    }
    {
        if (provideOptions) {
            var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
            Reflect.ownKeys(provides).forEach(function(key) {
                provide(key, provides[key]);
            });
        }
    }
    {
        if (created) {
            callHook$1(created, instance, "c");
        }
    }
    function registerLifecycleHook(register, hook) {
        if (isArray$1(hook)) {
            hook.forEach(function(_hook) {
                return register(_hook.bind(publicThis));
            });
        } else if (hook) {
            register(hook.bind(publicThis));
        }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray$1(expose)) {
        if (expose.length) {
            var exposed = instance.exposed || (instance.exposed = {});
            expose.forEach(function(key) {
                Object.defineProperty(exposed, key, {
                    get: function get() {
                        return publicThis[key];
                    },
                    set: function set(val) {
                        return publicThis[key] = val;
                    }
                });
            });
        } else if (!instance.exposed) {
            instance.exposed = {};
        }
    }
    if (render && instance.render === NOOP) {
        instance.render = render;
    }
    if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
    }
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
    if (instance.ctx.$onApplyOptions) {
        instance.ctx.$onApplyOptions(options, instance, publicThis);
    }
}

function resolveInjections(injectOptions, ctx) {
    var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOOP;
    if (isArray$1(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
    }
    var _loop3 = function _loop3() {
        var opt = injectOptions[key];
        var injected;
        if (isObject$1(opt)) {
            if ("default" in opt) {
                injected = inject(opt.from || key, opt.default, true);
            } else {
                injected = inject(opt.from || key);
            }
        } else {
            injected = inject(opt);
        }
        if (isRef(injected)) {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: function get() {
                    return injected.value;
                },
                set: function set(v2) {
                    return injected.value = v2;
                }
            });
        } else {
            ctx[key] = injected;
        }
        {
            checkDuplicateProperties("Inject", key);
        }
    };
    for (var key in injectOptions) {
        _loop3();
    }
}

function callHook$1(hook, instance, type) {
    callWithAsyncErrorHandling(isArray$1(hook) ? hook.map(function(h2) {
        return h2.bind(instance.proxy);
    }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
    var getter = key.includes(".") ? createPathGetter(publicThis, key) : function() {
        return publicThis[key];
    };
    if (isString(raw)) {
        var handler = ctx[raw];
        if (isFunction(handler)) {
            watch(getter, handler);
        } else {
            warn$1('Invalid watch handler specified by key "'.concat(raw, '"'), handler);
        }
    } else if (isFunction(raw)) {
        watch(getter, raw.bind(publicThis));
    } else if (isObject$1(raw)) {
        if (isArray$1(raw)) {
            raw.forEach(function(r2) {
                return createWatcher(r2, ctx, publicThis, key);
            });
        } else {
            var _handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (isFunction(_handler)) {
                watch(getter, _handler, raw);
            } else {
                warn$1('Invalid watch handler specified by key "'.concat(raw.handler, '"'), _handler);
            }
        }
    } else {
        warn$1('Invalid watch option: "'.concat(key, '"'), raw);
    }
}

function resolveMergedOptions(instance) {
    var base = instance.type;
    var mixins = base.mixins, extendsOptions = base.extends;
    var _instance$appContext = instance.appContext, globalMixins = _instance$appContext.mixins, cache = _instance$appContext.optionsCache, optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
    var cached = cache.get(base);
    var resolved;
    if (cached) {
        resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
            resolved = base;
        }
    } else {
        resolved = {};
        if (globalMixins.length) {
            globalMixins.forEach(function(m2) {
                return mergeOptions(resolved, m2, optionMergeStrategies, true);
            });
        }
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject$1(base)) {
        cache.set(base, resolved);
    }
    return resolved;
}

function mergeOptions(to, from, strats) {
    var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var mixins = from.mixins, extendsOptions = from.extends;
    if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
        mixins.forEach(function(m2) {
            return mergeOptions(to, m2, strats, true);
        });
    }
    for (var key in from) {
        if (asMixin && key === "expose") {
            warn$1('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
        } else {
            var strat = internalOptionMergeStrats[key] || strats && strats[key];
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}

var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray$1,
    created: mergeAsArray$1,
    beforeMount: mergeAsArray$1,
    mounted: mergeAsArray$1,
    beforeUpdate: mergeAsArray$1,
    updated: mergeAsArray$1,
    beforeDestroy: mergeAsArray$1,
    beforeUnmount: mergeAsArray$1,
    destroyed: mergeAsArray$1,
    unmounted: mergeAsArray$1,
    activated: mergeAsArray$1,
    deactivated: mergeAsArray$1,
    errorCaptured: mergeAsArray$1,
    serverPrefetch: mergeAsArray$1,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};

function mergeDataFn(to, from) {
    if (!from) {
        return to;
    }
    if (!to) {
        return from;
    }
    return function mergedDataFn() {
        return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
}

function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
    if (isArray$1(raw)) {
        var res = {};
        for (var i2 = 0; i2 < raw.length; i2++) {
            res[raw[i2]] = raw[i2];
        }
        return res;
    }
    return raw;
}

function mergeAsArray$1(to, from) {
    return to ? _toConsumableArray2(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
    return to ? extend(/*   */ Object.create(null), to, from) : from;
}

function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if (isArray$1(to) && isArray$1(from)) {
            return _toConsumableArray2(/*   */ new Set([].concat(_toConsumableArray2(to), _toConsumableArray2(from))));
        }
        return extend(/*   */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
    } else {
        return from;
    }
}

function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    var merged = extend(/*   */ Object.create(null), to);
    for (var key in from) {
        merged[key] = mergeAsArray$1(to[key], from[key]);
    }
    return merged;
}

function initProps$1(instance, rawProps, isStateful) {
    var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var props2 = {};
    var attrs = {};
    instance.propsDefaults = /*   */ Object.create(null);
    setFullProps(instance, rawProps, props2, attrs);
    for (var key in instance.propsOptions[0]) {
        if (!(key in props2)) {
            props2[key] = void 0;
        }
    }
    {
        validateProps(rawProps || {}, props2, instance);
    }
    if (isStateful) {
        instance.props = isSSR ? props2 : shallowReactive(props2);
    } else {
        if (!instance.type.props) {
            instance.props = attrs;
        } else {
            instance.props = props2;
        }
    }
    instance.attrs = attrs;
}

function isInHmrContext(instance) {
    while (instance) {
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
    var props2 = instance.props, attrs = instance.attrs, patchFlag = instance.vnode.patchFlag;
    var rawCurrentProps = toRaw(props2);
    var _instance$propsOption4 = _slicedToArray2(instance.propsOptions, 1), options = _instance$propsOption4[0];
    var hasAttrsChanged = false;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            var propsToUpdate = instance.vnode.dynamicProps;
            for (var i2 = 0; i2 < propsToUpdate.length; i2++) {
                var key = propsToUpdate[i2];
                if (isEmitListener(instance.emitsOptions, key)) {
                    continue;
                }
                var value2 = rawProps[key];
                if (options) {
                    if (hasOwn(attrs, key)) {
                        if (value2 !== attrs[key]) {
                            attrs[key] = value2;
                            hasAttrsChanged = true;
                        }
                    } else {
                        var camelizedKey = camelize(key);
                        props2[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value2, instance, false);
                    }
                } else {
                    if (value2 !== attrs[key]) {
                        attrs[key] = value2;
                        hasAttrsChanged = true;
                    }
                }
            }
        }
    } else {
        if (setFullProps(instance, rawProps, props2, attrs)) {
            hasAttrsChanged = true;
        }
        var kebabKey;
        for (var _key21 in rawCurrentProps) {
            if (!rawProps || 
            // for camelCase
            !hasOwn(rawProps, _key21) && (
            // it's possible the original props was passed in as kebab-case
            // and converted to camelCase (#955)
            (kebabKey = hyphenate(_key21)) === _key21 || !hasOwn(rawProps, kebabKey))) {
                if (options) {
                    if (rawPrevProps && (
                    // for camelCase
                    rawPrevProps[_key21] !== void 0 || 
                    // for kebab-case
                    rawPrevProps[kebabKey] !== void 0)) {
                        props2[_key21] = resolvePropValue(options, rawCurrentProps, _key21, void 0, instance, true);
                    }
                } else {
                    delete props2[_key21];
                }
            }
        }
        if (attrs !== rawCurrentProps) {
            for (var _key22 in attrs) {
                if (!rawProps || !hasOwn(rawProps, _key22) && true) {
                    delete attrs[_key22];
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (hasAttrsChanged) {
        trigger(instance, "set", "$attrs");
    }
    {
        validateProps(rawProps || {}, props2, instance);
    }
}

function setFullProps(instance, rawProps, props2, attrs) {
    var _instance$propsOption5 = _slicedToArray2(instance.propsOptions, 2), options = _instance$propsOption5[0], needCastKeys = _instance$propsOption5[1];
    var hasAttrsChanged = false;
    var rawCastValues;
    if (rawProps) {
        for (var key in rawProps) {
            if (isReservedProp(key)) {
                continue;
            }
            var value2 = rawProps[key];
            var camelKey = void 0;
            if (options && hasOwn(options, camelKey = camelize(key))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                    props2[camelKey] = value2;
                } else {
                    (rawCastValues || (rawCastValues = {}))[camelKey] = value2;
                }
            } else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value2 !== attrs[key]) {
                    attrs[key] = value2;
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (needCastKeys) {
        var rawCurrentProps = toRaw(props2);
        var castValues = rawCastValues || EMPTY_OBJ;
        for (var i2 = 0; i2 < needCastKeys.length; i2++) {
            var _key23 = needCastKeys[i2];
            props2[_key23] = resolvePropValue(options, rawCurrentProps, _key23, castValues[_key23], instance, !hasOwn(castValues, _key23));
        }
    }
    return hasAttrsChanged;
}

function resolvePropValue(options, props2, key, value2, instance, isAbsent) {
    var opt = options[key];
    if (opt != null) {
        var hasDefault = hasOwn(opt, "default");
        if (hasDefault && value2 === void 0) {
            var defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
                var propsDefaults = instance.propsDefaults;
                if (key in propsDefaults) {
                    value2 = propsDefaults[key];
                } else {
                    var reset = setCurrentInstance(instance);
                    value2 = propsDefaults[key] = defaultValue.call(null, props2);
                    reset();
                }
            } else {
                value2 = defaultValue;
            }
        }
        if (opt[0
        /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) {
                value2 = false;
            } else if (opt[1
            /* shouldCastTrue */ ] && (value2 === "" || value2 === hyphenate(key))) {
                value2 = true;
            }
        }
    }
    return value2;
}

function normalizePropsOptions(comp, appContext) {
    var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var cache = appContext.propsCache;
    var cached = cache.get(comp);
    if (cached) {
        return cached;
    }
    var raw = comp.props;
    var normalized = {};
    var needCastKeys = [];
    var hasExtends = false;
    if (!isFunction(comp)) {
        var extendProps = function extendProps(raw2) {
            hasExtends = true;
            var _normalizePropsOption = normalizePropsOptions(raw2, appContext, true), _normalizePropsOption2 = _slicedToArray2(_normalizePropsOption, 2), props2 = _normalizePropsOption2[0], keys = _normalizePropsOption2[1];
            extend(normalized, props2);
            if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray2(keys));
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        if (isObject$1(comp)) {
            cache.set(comp, EMPTY_ARR);
        }
        return EMPTY_ARR;
    }
    if (isArray$1(raw)) {
        for (var i2 = 0; i2 < raw.length; i2++) {
            if (!isString(raw[i2])) {
                warn$1("props must be strings when using array syntax.", raw[i2]);
            }
            var normalizedKey = camelize(raw[i2]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
            }
        }
    } else if (raw) {
        if (!isObject$1(raw)) {
            warn$1("invalid props options", raw);
        }
        for (var key in raw) {
            var _normalizedKey = camelize(key);
            if (validatePropName(_normalizedKey)) {
                var opt = raw[key];
                var prop = normalized[_normalizedKey] = isArray$1(opt) || isFunction(opt) ? {
                    type: opt
                } : extend({}, opt);
                if (prop) {
                    var booleanIndex = getTypeIndex(Boolean, prop.type);
                    var stringIndex = getTypeIndex(String, prop.type);
                    prop[0
                    /* shouldCast */ ] = booleanIndex > -1;
                    prop[1
                    /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    if (booleanIndex > -1 || hasOwn(prop, "default")) {
                        needCastKeys.push(_normalizedKey);
                    }
                }
            }
        }
    }
    var res = [ normalized, needCastKeys ];
    if (isObject$1(comp)) {
        cache.set(comp, res);
    }
    return res;
}

function validatePropName(key) {
    if (key[0] !== "$" && !isReservedProp(key)) {
        return true;
    } else {
        warn$1('Invalid prop name: "'.concat(key, '" is a reserved property.'));
    }
    return false;
}

function getType(ctor) {
    if (ctor === null) {
        return "null";
    }
    if (typeof ctor === "function") {
        return ctor.name || "";
    } else if (_typeof2(ctor) === "object") {
        var name = ctor.constructor && ctor.constructor.name;
        return name || "";
    }
    return "";
}

function isSameType(a2, b2) {
    return getType(a2) === getType(b2);
}

function getTypeIndex(type, expectedTypes) {
    if (isArray$1(expectedTypes)) {
        return expectedTypes.findIndex(function(t2) {
            return isSameType(t2, type);
        });
    } else if (isFunction(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}

function validateProps(rawProps, props2, instance) {
    var resolvedValues = toRaw(props2);
    var options = instance.propsOptions[0];
    for (var key in options) {
        var opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, shallowReadonly(resolvedValues), !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
}

function validateProp(name, value2, prop, props2, isAbsent) {
    var type = prop.type, required = prop.required, validator = prop.validator, skipCheck = prop.skipCheck;
    if (required && isAbsent) {
        warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value2 == null && !required) {
        return;
    }
    if (type != null && type !== true && !skipCheck) {
        var isValid = false;
        var types = isArray$1(type) ? type : [ type ];
        var expectedTypes = [];
        for (var i2 = 0; i2 < types.length && !isValid; i2++) {
            var _assertType = assertType(value2, types[i2]), valid = _assertType.valid, expectedType = _assertType.expectedType;
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn$1(getInvalidTypeMessage(name, value2, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value2, props2)) {
        warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}

var isSimpleType = /*   */ makeMap$1("String,Number,Boolean,Function,Symbol,BigInt");

function assertType(value2, type) {
    var valid;
    var expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        var t2 = _typeof2(value2);
        valid = t2 === expectedType.toLowerCase();
        if (!valid && t2 === "object") {
            valid = value2 instanceof type;
        }
    } else if (expectedType === "Object") {
        valid = isObject$1(value2);
    } else if (expectedType === "Array") {
        valid = isArray$1(value2);
    } else if (expectedType === "null") {
        valid = value2 === null;
    } else {
        valid = value2 instanceof type;
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}

function getInvalidTypeMessage(name, value2, expectedTypes) {
    if (expectedTypes.length === 0) {
        return 'Prop type [] for prop "'.concat(name, "\" won't match anything. Did you mean to use type Array instead?");
    }
    var message = 'Invalid prop: type check failed for prop "'.concat(name, '". Expected ').concat(expectedTypes.map(capitalize).join(" | "));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value2);
    var expectedValue = styleValue(value2, expectedType);
    var receivedValue = styleValue(value2, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
        message += " with value ".concat(expectedValue);
    }
    message += ", got ".concat(receivedType, " ");
    if (isExplicable(receivedType)) {
        message += "with value ".concat(receivedValue, ".");
    }
    return message;
}

function styleValue(value2, type) {
    if (type === "String") {
        return '"'.concat(value2, '"');
    } else if (type === "Number") {
        return "".concat(Number(value2));
    } else {
        return "".concat(value2);
    }
}

function isExplicable(type) {
    var explicitTypes = [ "string", "number", "boolean" ];
    return explicitTypes.some(function(elem) {
        return type.toLowerCase() === elem;
    });
}

function isBoolean() {
    for (var _len16 = arguments.length, args = new Array(_len16), _key24 = 0; _key24 < _len16; _key24++) {
        args[_key24] = arguments[_key24];
    }
    return args.some(function(elem) {
        return elem.toLowerCase() === "boolean";
    });
}

var supported;

var perf;

function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark("vue-".concat(type, "-").concat(instance.uid));
    }
    {
        devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
}

function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        var startTag = "vue-".concat(type, "-").concat(instance.uid);
        var endTag = startTag + ":end";
        perf.mark(endTag);
        perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    {
        devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
}

function isSupported() {
    if (supported !== void 0) {
        return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else {
        supported = false;
    }
    return supported;
}

var queuePostRenderEffect$1 = queuePostFlushCb;

var Fragment = Symbol.for("v-fgt");

var Text = Symbol.for("v-txt");

var Comment = Symbol.for("v-cmt");

var Static = Symbol.for("v-stc");

function isVNode(value2) {
    return value2 ? value2.__v_isVNode === true : false;
}

var InternalObjectKey = "__vInternal";

function guardReactiveProps(props2) {
    if (!props2) return null;
    return isProxy(props2) || InternalObjectKey in props2 ? extend({}, props2) : props2;
}

var emptyAppContext = createAppContext();

var uid = 0;

function createComponentInstance(vnode, parent, suspense) {
    var type = vnode.type;
    var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    var instance = {
        uid: uid++,
        vnode: vnode,
        type: type,
        parent: parent,
        appContext: appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new EffectScope(true
        /* detached */),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        // suspense related
        suspense: suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    {
        instance.ctx = createDevRenderContext(instance);
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
        vnode.ce(instance);
    }
    return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
    return currentInstance || currentRenderingInstance;
};

var internalSetCurrentInstance;

var setInSSRSetupState;

{
    internalSetCurrentInstance = function internalSetCurrentInstance(i2) {
        currentInstance = i2;
    };
    setInSSRSetupState = function setInSSRSetupState(v2) {
        isInSSRComponentSetup = v2;
    };
}

var setCurrentInstance = function setCurrentInstance(instance) {
    var prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return function() {
        instance.scope.off();
        internalSetCurrentInstance(prev);
    };
};

var unsetCurrentInstance = function unsetCurrentInstance() {
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
};

var isBuiltInTag = /*   */ makeMap$1("slot,component");

function validateComponentName(name, _ref16) {
    var isNativeTag = _ref16.isNativeTag;
    if (isBuiltInTag(name) || isNativeTag(name)) {
        warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
    }
}

function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
    var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    isSSR && setInSSRSetupState(isSSR);
    var props2 = instance.vnode.props;
    var isStateful = isStatefulComponent(instance);
    initProps$1(instance, props2, isStateful, isSSR);
    var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
    var Component2 = instance.type;
    {
        if (Component2.name) {
            validateComponentName(Component2.name, instance.appContext.config);
        }
        if (Component2.components) {
            var names = Object.keys(Component2.components);
            for (var i2 = 0; i2 < names.length; i2++) {
                validateComponentName(names[i2], instance.appContext.config);
            }
        }
        if (Component2.directives) {
            var _names = Object.keys(Component2.directives);
            for (var _i2 = 0; _i2 < _names.length; _i2++) {
                validateDirectiveName(_names[_i2]);
            }
        }
        if (Component2.compilerOptions && isRuntimeOnly()) {
            warn$1('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
        }
    }
    instance.accessCache = /*   */ Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    {
        exposePropsOnRenderContext(instance);
    }
    var setup = Component2.setup;
    if (setup) {
        var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        var reset = setCurrentInstance(instance);
        pauseTracking();
        var setupResult = callWithErrorHandling(setup, instance, 0, [ shallowReadonly(instance.props), setupContext ]);
        resetTracking();
        reset();
        if (isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            {
                warn$1("setup() returned a Promise, but the version of Vue you are using does not support it yet.");
            }
        } else {
            handleSetupResult(instance, setupResult, isSSR);
        }
    } else {
        finishComponentSetup(instance, isSSR);
    }
}

function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
        {
            instance.render = setupResult;
        }
    } else if (isObject$1(setupResult)) {
        if (isVNode(setupResult)) {
            warn$1("setup() should not return VNodes directly - return a render function instead.");
        }
        {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = proxyRefs(setupResult);
        {
            exposeSetupStateOnRenderContext(instance);
        }
    } else if (setupResult !== void 0) {
        warn$1("setup() should return an object. Received: ".concat(setupResult === null ? "null" : _typeof2(setupResult)));
    }
    finishComponentSetup(instance, isSSR);
}

var compile;

var isRuntimeOnly = function isRuntimeOnly() {
    return !compile;
};

function finishComponentSetup(instance, isSSR, skipOptions) {
    var Component2 = instance.type;
    if (!instance.render) {
        instance.render = Component2.render || NOOP;
    }
    {
        var reset = setCurrentInstance(instance);
        pauseTracking();
        try {
            applyOptions$1(instance);
        } finally {
            resetTracking();
            reset();
        }
    }
    if (!Component2.render && instance.render === NOOP && !isSSR) {
        if (Component2.template) {
            warn$1('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".');
        } else {
            warn$1("Component is missing template or render function.");
        }
    }
}

function getAttrsProxy(instance) {
    return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
        get: function get(target, key) {
            track(instance, "get", "$attrs");
            return target[key];
        },
        set: function set() {
            warn$1("setupContext.attrs is readonly.");
            return false;
        },
        deleteProperty: function deleteProperty() {
            warn$1("setupContext.attrs is readonly.");
            return false;
        }
    }));
}

function getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
        get: function get(target, key) {
            track(instance, "get", "$slots");
            return target[key];
        }
    }));
}

function createSetupContext(instance) {
    var expose = function expose(exposed) {
        {
            if (instance.exposed) {
                warn$1("expose() should be called only once per setup().");
            }
            if (exposed != null) {
                var exposedType = _typeof2(exposed);
                if (exposedType === "object") {
                    if (isArray$1(exposed)) {
                        exposedType = "array";
                    } else if (isRef(exposed)) {
                        exposedType = "ref";
                    }
                }
                if (exposedType !== "object") {
                    warn$1("expose() should be passed a plain object, received ".concat(exposedType, "."));
                }
            }
        }
        instance.exposed = exposed || {};
    };
    {
        return Object.freeze({
            get attrs() {
                return getAttrsProxy(instance);
            },
            get slots() {
                return getSlotsProxy(instance);
            },
            get emit() {
                return function(event) {
                    for (var _len17 = arguments.length, args = new Array(_len17 > 1 ? _len17 - 1 : 0), _key25 = 1; _key25 < _len17; _key25++) {
                        args[_key25 - 1] = arguments[_key25];
                    }
                    return instance.emit.apply(instance, [ event ].concat(args));
                };
            },
            expose: expose
        });
    }
}

function getExposeProxy(instance) {
    if (instance.exposed) {
        return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
            get: function get(target, key) {
                if (key in target) {
                    return target[key];
                }
                return instance.proxy[key];
            },
            has: function has(target, key) {
                return key in target || key in publicPropertiesMap;
            }
        }));
    }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
    return str.replace(classifyRE, function(c2) {
        return c2.toUpperCase();
    }).replace(/[-_]/g, "");
};

function getComponentName(Component2) {
    var includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}

function formatComponentName(instance, Component2) {
    var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var name = getComponentName(Component2);
    if (!name && Component2.__file) {
        var match = Component2.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        var inferFromRegistry = function inferFromRegistry(registry) {
            for (var key in registry) {
                if (registry[key] === Component2) {
                    return key;
                }
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

var computed = function computed(getterOrOptions, debugOptions) {
    var c2 = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
    {
        var i2 = getCurrentInstance();
        if (i2 && i2.appContext.config.warnRecursiveComputed) {
            c2._warnRecursive = true;
        }
    }
    return c2;
};

var version$1 = "3.4.21";

var warn = warn$1;

function unwrapper(target) {
    return unref(target);
}

var ARRAYTYPE = "[object Array]";

var OBJECTTYPE = "[object Object]";

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, "", result);
    return result;
}

function syncKeys(current, pre) {
    current = unwrapper(current);
    if (current === pre) return;
    var rootCurrentType = toTypeString(current);
    var rootPreType = toTypeString(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        for (var key in pre) {
            var currentValue = current[key];
            if (currentValue === void 0) {
                current[key] = null;
            } else {
                syncKeys(currentValue, pre[key]);
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function(item, index2) {
                syncKeys(current[index2], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    current = unwrapper(current);
    if (current === pre) return;
    var rootCurrentType = toTypeString(current);
    var rootPreType = toTypeString(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var _loop4 = function _loop4(key) {
                var currentValue = unwrapper(current[key]);
                var preValue = pre[key];
                var currentType = toTypeString(currentValue);
                var preType = toTypeString(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != preValue) {
                        setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function(item, index2) {
                                _diff(item, preValue[index2], (path == "" ? "" : path + ".") + key + "[" + index2 + "]", result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
                        }
                    }
                }
            };
            for (var key in current) {
                _loop4(key);
            }
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function(item, index2) {
                    _diff(item, pre[index2], path + "[" + index2 + "]", result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v2) {
    result[k] = v2;
}

function hasComponentEffect(instance) {
    return queue.includes(instance.update);
}

function flushCallbacks(instance) {
    var ctx = instance.ctx;
    var callbacks = ctx.__next_tick_callbacks;
    if (callbacks && callbacks.length) {
        var copies = callbacks.slice(0);
        callbacks.length = 0;
        for (var i2 = 0; i2 < copies.length; i2++) {
            copies[i2]();
        }
    }
}

function nextTick(instance, fn) {
    var ctx = instance.ctx;
    if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
        return nextTick$1(fn && fn.bind(instance.proxy));
    }
    var _resolve;
    if (!ctx.__next_tick_callbacks) {
        ctx.__next_tick_callbacks = [];
    }
    ctx.__next_tick_callbacks.push(function() {
        if (fn) {
            callWithErrorHandling(fn.bind(instance.proxy), instance, 14);
        } else if (_resolve) {
            _resolve(instance.proxy);
        }
    });
    return new Promise(function(resolve2) {
        _resolve = resolve2;
    });
}

function clone$1(src, seen) {
    src = unwrapper(src);
    var type = _typeof2(src);
    if (type === "object" && src !== null) {
        var copy = seen.get(src);
        if (typeof copy !== "undefined") {
            return copy;
        }
        if (isArray$1(src)) {
            var len = src.length;
            copy = new Array(len);
            seen.set(src, copy);
            for (var i2 = 0; i2 < len; i2++) {
                copy[i2] = clone$1(src[i2], seen);
            }
        } else {
            copy = {};
            seen.set(src, copy);
            for (var name in src) {
                if (hasOwn(src, name)) {
                    copy[name] = clone$1(src[name], seen);
                }
            }
        }
        return copy;
    }
    if (type !== "symbol") {
        return src;
    }
}

function deepCopy(src) {
    return clone$1(src, typeof WeakMap !== "undefined" ? /*   */ new WeakMap() : /*   */ new Map());
}

function getMPInstanceData(instance, keys) {
    var data = instance.data;
    var ret = /*   */ Object.create(null);
    keys.forEach(function(key) {
        ret[key] = data[key];
    });
    return ret;
}

function patch(instance, data, oldData) {
    if (!data) {
        return;
    }
    data = deepCopy(data);
    var ctx = instance.ctx;
    var mpType = ctx.mpType;
    if (mpType === "page" || mpType === "component") {
        data.r0 = 1;
        var mpInstance = ctx.$scope;
        var keys = Object.keys(data);
        var diffData = diff(data, oldData || getMPInstanceData(mpInstance, keys));
        if (Object.keys(diffData).length) {
            ctx.__next_tick_pending = true;
            mpInstance.setData(diffData, function() {
                ctx.__next_tick_pending = false;
                flushCallbacks(instance);
            });
            flushPreFlushCbs();
        } else {
            flushCallbacks(instance);
        }
    }
}

function initAppConfig(appConfig) {
    appConfig.globalProperties.$nextTick = function $nextTick(fn) {
        return nextTick(this.$, fn);
    };
}

function onApplyOptions(options, instance, publicThis) {
    instance.appContext.config.globalProperties.$applyOptions(options, instance, publicThis);
    var computedOptions = options.computed;
    if (computedOptions) {
        var keys = Object.keys(computedOptions);
        if (keys.length) {
            var _ctx$$computedKeys;
            var ctx = instance.ctx;
            if (!ctx.$computedKeys) {
                ctx.$computedKeys = [];
            }
            (_ctx$$computedKeys = ctx.$computedKeys).push.apply(_ctx$$computedKeys, keys);
        }
    }
    delete instance.ctx.$onApplyOptions;
}

function setRef$1(instance) {
    var isUnmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var setupState = instance.setupState, $templateRefs = instance.$templateRefs, _instance$ctx = instance.ctx, $scope = _instance$ctx.$scope, $mpPlatform = _instance$ctx.$mpPlatform;
    if ($mpPlatform === "mp-alipay") {
        return;
    }
    if (!$templateRefs || !$scope) {
        return;
    }
    if (isUnmount) {
        return $templateRefs.forEach(function(templateRef) {
            return setTemplateRef(templateRef, null, setupState);
        });
    }
    var check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
    var doSetByRefs = function doSetByRefs(refs) {
        var mpComponents = 
        // 字节小程序 selectAllComponents 可能返回 null
        // https://github.com/dcloudio/uni-app/issues/3954
        ($scope.selectAllComponents(".r") || []).concat($scope.selectAllComponents(".r-i-f") || []);
        return refs.filter(function(templateRef) {
            var refValue = findComponentPublicInstance(mpComponents, templateRef.i);
            if (check && refValue === null) {
                return true;
            }
            setTemplateRef(templateRef, refValue, setupState);
            return false;
        });
    };
    var doSet = function doSet() {
        var refs = doSetByRefs($templateRefs);
        if (refs.length && instance.proxy && instance.proxy.$scope) {
            instance.proxy.$scope.setData({
                r1: 1
            }, function() {
                doSetByRefs(refs);
            });
        }
    };
    if ($scope._$setRef) {
        $scope._$setRef(doSet);
    } else {
        nextTick(instance, doSet);
    }
}

function toSkip(value2) {
    if (isObject$1(value2)) {
        markRaw(value2);
    }
    return value2;
}

function findComponentPublicInstance(mpComponents, id) {
    var mpInstance = mpComponents.find(function(com) {
        return com && (com.properties || com.props).uI === id;
    });
    if (mpInstance) {
        var vm = mpInstance.$vm;
        if (vm) {
            return getExposeProxy(vm.$) || vm;
        }
        return toSkip(mpInstance);
    }
    return null;
}

function setTemplateRef(_ref17, refValue, setupState) {
    var r2 = _ref17.r, f2 = _ref17.f;
    if (isFunction(r2)) {
        r2(refValue, {});
    } else {
        var _isString = isString(r2);
        var _isRef = isRef(r2);
        if (_isString || _isRef) {
            if (f2) {
                if (!_isRef) {
                    return;
                }
                if (!isArray$1(r2.value)) {
                    r2.value = [];
                }
                var existing = r2.value;
                if (existing.indexOf(refValue) === -1) {
                    existing.push(refValue);
                    if (!refValue) {
                        return;
                    }
                    onBeforeUnmount(function() {
                        return remove(existing, refValue);
                    }, refValue.$);
                }
            } else if (_isString) {
                if (hasOwn(setupState, r2)) {
                    setupState[r2] = refValue;
                }
            } else if (isRef(r2)) {
                r2.value = refValue;
            } else {
                warnRef(r2);
            }
        } else {
            warnRef(r2);
        }
    }
}

function warnRef(ref2) {
    warn("Invalid template ref type:", ref2, "(".concat(_typeof2(ref2), ")"));
}

var queuePostRenderEffect = queuePostFlushCb;

function mountComponent(initialVNode, options) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
    {
        instance.ctx.$onApplyOptions = onApplyOptions;
        instance.ctx.$children = [];
    }
    if (options.mpType === "app") {
        instance.render = NOOP;
    }
    if (options.onBeforeSetup) {
        options.onBeforeSetup(instance, options);
    }
    {
        pushWarningContext(initialVNode);
        startMeasure(instance, "mount");
    }
    {
        startMeasure(instance, "init");
    }
    setupComponent(instance);
    {
        endMeasure(instance, "init");
    }
    {
        if (options.parentComponent && instance.proxy) {
            options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
        }
    }
    setupRenderEffect(instance);
    {
        popWarningContext();
        endMeasure(instance, "mount");
    }
    return instance.proxy;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
    var res;
    for (var key in attrs) {
        if (key === "class" || key === "style" || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};

function renderComponentRoot(instance) {
    var Component2 = instance.type, vnode = instance.vnode, proxy = instance.proxy, withProxy = instance.withProxy, props2 = instance.props, _instance$propsOption6 = _slicedToArray2(instance.propsOptions, 1), propsOptions = _instance$propsOption6[0], slots = instance.slots, attrs = instance.attrs, emit2 = instance.emit, render = instance.render, renderCache = instance.renderCache, data = instance.data, setupState = instance.setupState, ctx = instance.ctx, uid2 = instance.uid, pruneComponentPropsCache2 = instance.appContext.app.config.globalProperties.pruneComponentPropsCache, inheritAttrs = instance.inheritAttrs;
    instance.$templateRefs = [];
    instance.$ei = 0;
    pruneComponentPropsCache2(uid2);
    instance.__counter = instance.__counter === 0 ? 1 : 0;
    var result;
    var prev = setCurrentRenderingInstance(instance);
    try {
        if (vnode.shapeFlag & 4) {
            fallthroughAttrs(inheritAttrs, props2, propsOptions, attrs);
            var proxyToUse = withProxy || proxy;
            result = render.call(proxyToUse, proxyToUse, renderCache, props2, setupState, data, ctx);
        } else {
            fallthroughAttrs(inheritAttrs, props2, propsOptions, Component2.props ? attrs : getFunctionalFallthrough(attrs));
            var render2 = Component2;
            result = render2.length > 1 ? render2(props2, {
                attrs: attrs,
                slots: slots,
                emit: emit2
            }) : render2(props2, null
            /* we know it doesn't need it */);
        }
    } catch (err) {
        handleError(err, instance, 1);
        result = false;
    }
    setRef$1(instance);
    setCurrentRenderingInstance(prev);
    return result;
}

function fallthroughAttrs(inheritAttrs, props2, propsOptions, fallthroughAttrs2) {
    if (props2 && fallthroughAttrs2 && inheritAttrs !== false) {
        var keys = Object.keys(fallthroughAttrs2).filter(function(key) {
            return key !== "class" && key !== "style";
        });
        if (!keys.length) {
            return;
        }
        if (propsOptions && keys.some(isModelListener)) {
            keys.forEach(function(key) {
                if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
                    props2[key] = fallthroughAttrs2[key];
                }
            });
        } else {
            keys.forEach(function(key) {
                return props2[key] = fallthroughAttrs2[key];
            });
        }
    }
}

var updateComponentPreRender = function updateComponentPreRender(instance) {
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
};

function componentUpdateScopedSlotsFn() {
    var scopedSlotsData = this.$scopedSlotsData;
    if (!scopedSlotsData || scopedSlotsData.length === 0) {
        return;
    }
    var mpInstance = this.ctx.$scope;
    var oldData = mpInstance.data;
    var diffData = /*   */ Object.create(null);
    scopedSlotsData.forEach(function(_ref18) {
        var path = _ref18.path, index2 = _ref18.index, data = _ref18.data;
        var oldScopedSlotData = getValueByDataPath(oldData, path);
        var diffPath = isString(index2) ? "".concat(path, ".").concat(index2) : "".concat(path, "[").concat(index2, "]");
        if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
            diffData[diffPath] = data;
        } else {
            var diffScopedSlotData = diff(data, oldScopedSlotData[index2]);
            Object.keys(diffScopedSlotData).forEach(function(name) {
                diffData[diffPath + "." + name] = diffScopedSlotData[name];
            });
        }
    });
    scopedSlotsData.length = 0;
    if (Object.keys(diffData).length) {
        mpInstance.setData(diffData);
    }
}

function toggleRecurse(_ref19, allowed) {
    var effect2 = _ref19.effect, update = _ref19.update;
    effect2.allowRecurse = update.allowRecurse = allowed;
}

function setupRenderEffect(instance) {
    var updateScopedSlots = componentUpdateScopedSlotsFn.bind(instance);
    instance.$updateScopedSlots = function() {
        return nextTick$1(function() {
            return queueJob(updateScopedSlots);
        });
    };
    var componentUpdateFn = function componentUpdateFn() {
        if (!instance.isMounted) {
            onBeforeUnmount(function() {
                setRef$1(instance, true);
            }, instance);
            {
                startMeasure(instance, "patch");
            }
            patch(instance, renderComponentRoot(instance));
            {
                endMeasure(instance, "patch");
            }
            {
                devtoolsComponentAdded(instance);
            }
        } else {
            var next = instance.next, bu = instance.bu, u2 = instance.u;
            {
                pushWarningContext(next || instance.vnode);
            }
            toggleRecurse(instance, false);
            updateComponentPreRender();
            if (bu) {
                invokeArrayFns$1(bu);
            }
            toggleRecurse(instance, true);
            {
                startMeasure(instance, "patch");
            }
            patch(instance, renderComponentRoot(instance));
            {
                endMeasure(instance, "patch");
            }
            if (u2) {
                queuePostRenderEffect(u2);
            }
            {
                devtoolsComponentUpdated(instance);
            }
            {
                popWarningContext();
            }
        }
    };
    var effect2 = instance.effect = new ReactiveEffect2(componentUpdateFn, NOOP, function() {
        return queueJob(update);
    }, instance.scope);
    var update = instance.update = function() {
        if (effect2.dirty) {
            effect2.run();
        }
    };
    update.id = instance.uid;
    toggleRecurse(instance, true);
    {
        effect2.onTrack = instance.rtc ? function(e2) {
            return invokeArrayFns$1(instance.rtc, e2);
        } : void 0;
        effect2.onTrigger = instance.rtg ? function(e2) {
            return invokeArrayFns$1(instance.rtg, e2);
        } : void 0;
        update.ownerInstance = instance;
    }
    update();
}

function unmountComponent(instance) {
    var bum = instance.bum, scope = instance.scope, update = instance.update, um = instance.um;
    if (bum) {
        invokeArrayFns$1(bum);
    }
    scope.stop();
    if (update) {
        update.active = false;
    }
    if (um) {
        queuePostRenderEffect(um);
    }
    queuePostRenderEffect(function() {
        instance.isUnmounted = true;
    });
    {
        devtoolsComponentRemoved(instance);
    }
}

var oldCreateApp = createAppAPI();

function getTarget() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof my !== "undefined") {
        return my;
    }
}

function createVueApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var target = getTarget();
    target.__VUE__ = true;
    {
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    var app = oldCreateApp(rootComponent, rootProps);
    var appContext = app._context;
    initAppConfig(appContext.config);
    var createVNode2 = function createVNode2(initialVNode) {
        initialVNode.appContext = appContext;
        initialVNode.shapeFlag = 6;
        return initialVNode;
    };
    var createComponent2 = function createComponent22(initialVNode, options) {
        return mountComponent(createVNode2(initialVNode), options);
    };
    var destroyComponent = function destroyComponent2(component) {
        return component && unmountComponent(component.$);
    };
    app.mount = function mount() {
        rootComponent.render = NOOP;
        var instance = mountComponent(createVNode2({
            type: rootComponent
        }), {
            mpType: "app",
            mpInstance: null,
            parentComponent: null,
            slots: [],
            props: null
        });
        app._instance = instance.$;
        {
            devtoolsInitApp(app, version$1);
        }
        instance.$app = app;
        instance.$createComponent = createComponent2;
        instance.$destroyComponent = destroyComponent;
        appContext.$appInstance = instance;
        return instance;
    };
    app.unmount = function unmount() {
        warn("Cannot unmount an app.");
    };
    return app;
}

function injectLifecycleHook(name, hook, publicThis, instance) {
    if (isFunction(hook)) {
        injectHook(name, hook.bind(publicThis), instance);
    }
}

function initHooks$1(options, instance, publicThis) {
    var mpType = options.mpType || publicThis.$mpType;
    if (!mpType || mpType === "component") {
        return;
    }
    Object.keys(options).forEach(function(name) {
        if (isUniLifecycleHook(name, options[name], false)) {
            var hooks = options[name];
            if (isArray$1(hooks)) {
                hooks.forEach(function(hook) {
                    return injectLifecycleHook(name, hook, publicThis, instance);
                });
            } else {
                injectLifecycleHook(name, hooks, publicThis, instance);
            }
        }
    });
}

function applyOptions$2(options, instance, publicThis) {
    initHooks$1(options, instance, publicThis);
}

function set$2(target, key, val) {
    return target[key] = val;
}

function $callMethod(method) {
    var fn = this[method];
    if (fn) {
        for (var _len18 = arguments.length, args = new Array(_len18 > 1 ? _len18 - 1 : 0), _key26 = 1; _key26 < _len18; _key26++) {
            args[_key26 - 1] = arguments[_key26];
        }
        return fn.apply(void 0, args);
    }
    console.error("method ".concat(method, " not found"));
    return null;
}

function createErrorHandler(app) {
    return function errorHandler(err, instance, _info) {
        if (!instance) {
            throw err;
        }
        var appInstance = app._instance;
        if (!appInstance || !appInstance.proxy) {
            throw err;
        }
        {
            appInstance.proxy.$callHook(ON_ERROR, err);
        }
    };
}

function mergeAsArray(to, from) {
    return to ? _toConsumableArray2(new Set([].concat(to, from))) : from;
}

function initOptionMergeStrategies(optionMergeStrategies) {
    UniLifecycleHooks.forEach(function(name) {
        optionMergeStrategies[name] = mergeAsArray;
    });
}

var realAtob;

var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== "function") {
    realAtob = function realAtob(str) {
        str = String(str).replace(/[\t\n\f\r ]+/g, "");
        if (!b64re.test(str)) {
            throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
        }
        str += "==".slice(2 - (str.length & 3));
        var bitmap;
        var result = "";
        var r1;
        var r2;
        var i2 = 0;
        for (;i2 < str.length; ) {
            bitmap = b64.indexOf(str.charAt(i2++)) << 18 | b64.indexOf(str.charAt(i2++)) << 12 | (r1 = b64.indexOf(str.charAt(i2++))) << 6 | (r2 = b64.indexOf(str.charAt(i2++)));
            result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
        }
        return result;
    };
} else {
    realAtob = atob;
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(realAtob(str).split("").map(function(c2) {
        return "%" + ("00" + c2.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
}

function getCurrentUserInfo() {
    var token = index$1.getStorageSync("uni_id_token") || "";
    var tokenArr = token.split(".");
    if (!token || tokenArr.length !== 3) {
        return {
            uid: null,
            role: [],
            permission: [],
            tokenExpired: 0
        };
    }
    var userInfo;
    try {
        userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
    } catch (error2) {
        throw new Error("获取当前用户信息出错，详细错误信息为：" + error2.message);
    }
    userInfo.tokenExpired = userInfo.exp * 1e3;
    delete userInfo.exp;
    delete userInfo.iat;
    return userInfo;
}

function uniIdMixin(globalProperties) {
    globalProperties.uniIDHasRole = function(roleId) {
        var _getCurrentUserInfo = getCurrentUserInfo(), role = _getCurrentUserInfo.role;
        return role.indexOf(roleId) > -1;
    };
    globalProperties.uniIDHasPermission = function(permissionId) {
        var _getCurrentUserInfo2 = getCurrentUserInfo(), permission = _getCurrentUserInfo2.permission;
        return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
    };
    globalProperties.uniIDTokenValid = function() {
        var _getCurrentUserInfo3 = getCurrentUserInfo(), tokenExpired = _getCurrentUserInfo3.tokenExpired;
        return tokenExpired > Date.now();
    };
}

function initApp(app) {
    var appConfig = app._context.config;
    appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
    initOptionMergeStrategies(appConfig.optionMergeStrategies);
    var globalProperties = appConfig.globalProperties;
    {
        uniIdMixin(globalProperties);
    }
    {
        globalProperties.$set = set$2;
        globalProperties.$applyOptions = applyOptions$2;
        globalProperties.$callMethod = $callMethod;
    }
    {
        index$1.invokeCreateVueAppHook(app);
    }
}

var propsCaches = /*   */ Object.create(null);

function renderProps(props2) {
    var _getCurrentInstance = getCurrentInstance(), uid2 = _getCurrentInstance.uid, __counter = _getCurrentInstance.__counter;
    var propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props2)) - 1;
    return uid2 + "," + propsId + "," + __counter;
}

function pruneComponentPropsCache(uid2) {
    delete propsCaches[uid2];
}

function findComponentPropsData(up) {
    if (!up) {
        return;
    }
    var _up$split = up.split(","), _up$split2 = _slicedToArray2(_up$split, 2), uid2 = _up$split2[0], propsId = _up$split2[1];
    if (!propsCaches[uid2]) {
        return;
    }
    return propsCaches[uid2][parseInt(propsId)];
}

var plugin = {
    install: function install(app) {
        initApp(app);
        app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
        var oldMount = app.mount;
        app.mount = function mount(rootContainer) {
            var instance = oldMount.call(app, rootContainer);
            var createApp2 = getCreateApp();
            if (createApp2) {
                createApp2(instance);
            } else {
                if (typeof createMiniProgramApp !== "undefined") {
                    createMiniProgramApp(instance);
                }
            }
            return instance;
        };
    }
};

function getCreateApp() {
    var method = "createApp";
    if (typeof global !== "undefined" && typeof global[method] !== "undefined") {
        return global[method];
    } else if (typeof my !== "undefined") {
        return my[method];
    }
}

function vOn(value2, key) {
    var instance = getCurrentInstance();
    var ctx = instance.ctx;
    var extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq" || ctx.$mpPlatform === "mp-xhs") && (isString(key) || typeof key === "number") ? "_" + key : "";
    var name = "e" + instance.$ei++ + extraKey;
    var mpInstance = ctx.$scope;
    if (!value2) {
        delete mpInstance[name];
        return name;
    }
    var existingInvoker = mpInstance[name];
    if (existingInvoker) {
        existingInvoker.value = value2;
    } else {
        mpInstance[name] = createInvoker(value2, instance);
    }
    return name;
}

function createInvoker(initialValue, instance) {
    var _invoker = function invoker(e2) {
        patchMPEvent(e2);
        var args = [ e2 ];
        if (e2.detail && e2.detail.__args__) {
            args = e2.detail.__args__;
        }
        var eventValue = _invoker.value;
        var invoke = function invoke() {
            return callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
        };
        var eventTarget = e2.target;
        var eventSync = eventTarget ? eventTarget.dataset ? String(eventTarget.dataset.eventsync) === "true" : false : false;
        if (bubbles.includes(e2.type) && !eventSync) {
            setTimeout(invoke);
        } else {
            var res = invoke();
            if (e2.type === "input" && (isArray$1(res) || isPromise(res))) {
                return;
            }
            return res;
        }
    };
    _invoker.value = initialValue;
    return _invoker;
}

var bubbles = [ 
// touch事件暂不做延迟，否则在 Android 上会影响性能，比如一些拖拽跟手手势等
// 'touchstart',
// 'touchmove',
// 'touchcancel',
// 'touchend',
"tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend", "touchforcechange" ];

function patchMPEvent(event) {
    if (event.type && event.target) {
        event.preventDefault = NOOP;
        event.stopPropagation = NOOP;
        event.stopImmediatePropagation = NOOP;
        if (!hasOwn(event, "detail")) {
            event.detail = {};
        }
        if (hasOwn(event, "markerId")) {
            event.detail = _typeof2(event.detail) === "object" ? event.detail : {};
            event.detail.markerId = event.markerId;
        }
        if (isPlainObject$2(event.detail) && hasOwn(event.detail, "checked") && !hasOwn(event.detail, "value")) {
            event.detail.value = event.detail.checked;
        }
        if (isPlainObject$2(event.detail)) {
            event.target = extend({}, event.target, event.detail);
        }
    }
}

function patchStopImmediatePropagation(e2, value2) {
    if (isArray$1(value2)) {
        var originalStop = e2.stopImmediatePropagation;
        e2.stopImmediatePropagation = function() {
            originalStop && originalStop.call(e2);
            e2._stopped = true;
        };
        return value2.map(function(fn) {
            return function(e3) {
                return !e3._stopped && fn(e3);
            };
        });
    } else {
        return value2;
    }
}

function vFor(source, renderItem) {
    var ret;
    if (isArray$1(source) || isString(source)) {
        ret = new Array(source.length);
        for (var i2 = 0, l2 = source.length; i2 < l2; i2++) {
            ret[i2] = renderItem(source[i2], i2, i2);
        }
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) {
            warn("The v-for range expect an integer value but got ".concat(source, "."));
            return [];
        }
        ret = new Array(source);
        for (var _i3 = 0; _i3 < source; _i3++) {
            ret[_i3] = renderItem(_i3 + 1, _i3, _i3);
        }
    } else if (isObject$1(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, function(item, i2) {
                return renderItem(item, i2, i2);
            });
        } else {
            var keys = Object.keys(source);
            ret = new Array(keys.length);
            for (var _i4 = 0, _l2 = keys.length; _i4 < _l2; _i4++) {
                var key = keys[_i4];
                ret[_i4] = renderItem(source[key], key, _i4);
            }
        }
    } else {
        ret = [];
    }
    return ret;
}

function stringifyStyle(value2) {
    if (isString(value2)) {
        return value2;
    }
    return stringify(normalizeStyle(value2));
}

function stringify(styles) {
    var ret = "";
    if (!styles || isString(styles)) {
        return ret;
    }
    for (var key in styles) {
        ret += "".concat(key.startsWith("--") ? key : hyphenate(key), ":").concat(styles[key], ";");
    }
    return ret;
}

function setRef(ref2, id) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _getCurrentInstance2 = getCurrentInstance(), $templateRefs = _getCurrentInstance2.$templateRefs;
    $templateRefs.push({
        i: id,
        r: ref2,
        k: opts.k,
        f: opts.f
    });
}

var o$1 = function o$1(value2, key) {
    return vOn(value2, key);
};

var f$1 = function f$1(source, renderItem) {
    return vFor(source, renderItem);
};

var s$1 = function s$1(value2) {
    return stringifyStyle(value2);
};

var e$1 = function e$1(target) {
    for (var _len19 = arguments.length, sources = new Array(_len19 > 1 ? _len19 - 1 : 0), _key27 = 1; _key27 < _len19; _key27++) {
        sources[_key27 - 1] = arguments[_key27];
    }
    return extend.apply(void 0, [ target ].concat(sources));
};

var n$1 = function n$1(value2) {
    return normalizeClass(value2);
};

var t$1 = function t$1(val) {
    return toDisplayString(val);
};

var p$1 = function p$1(props2) {
    return renderProps(props2);
};

var sr = function sr(ref2, id, opts) {
    return setRef(ref2, id, opts);
};

function createApp$1(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    rootComponent && (rootComponent.mpType = "app");
    return createVueApp(rootComponent, rootProps).use(plugin);
}

var createSSRApp = createApp$1;

var MP_METHODS = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];

function createEmitFn(oldEmit, ctx) {
    return function emit2(event) {
        var scope = ctx.$scope;
        for (var _len20 = arguments.length, args = new Array(_len20 > 1 ? _len20 - 1 : 0), _key28 = 1; _key28 < _len20; _key28++) {
            args[_key28 - 1] = arguments[_key28];
        }
        if (scope && event) {
            var detail = {
                __args__: args
            };
            {
                scope.triggerEvent(event, detail);
            }
        }
        return oldEmit.apply(this, [ event ].concat(args));
    };
}

function initBaseInstance(instance, options) {
    var ctx = instance.ctx;
    ctx.mpType = options.mpType;
    ctx.$mpType = options.mpType;
    ctx.$mpPlatform = "mp-weixin";
    ctx.$scope = options.mpInstance;
    ctx.$mp = {};
    {
        ctx._self = {};
    }
    instance.slots = {};
    if (isArray$1(options.slots) && options.slots.length) {
        options.slots.forEach(function(name) {
            instance.slots[name] = true;
        });
        if (instance.slots[SLOT_DEFAULT_NAME]) {
            instance.slots.default = true;
        }
    }
    ctx.getOpenerEventChannel = function() {
        {
            return options.mpInstance.getOpenerEventChannel();
        }
    };
    ctx.$hasHook = hasHook;
    ctx.$callHook = callHook;
    instance.emit = createEmitFn(instance.emit, ctx);
}

function initComponentInstance(instance, options) {
    initBaseInstance(instance, options);
    var ctx = instance.ctx;
    MP_METHODS.forEach(function(method) {
        ctx[method] = function() {
            var mpInstance = ctx.$scope;
            if (mpInstance && mpInstance[method]) {
                for (var _len21 = arguments.length, args = new Array(_len21), _key29 = 0; _key29 < _len21; _key29++) {
                    args[_key29] = arguments[_key29];
                }
                return mpInstance[method].apply(mpInstance, args);
            }
        };
    });
}

function initMocks(instance, mpInstance, mocks2) {
    var ctx = instance.ctx;
    mocks2.forEach(function(mock) {
        if (hasOwn(mpInstance, mock)) {
            instance[mock] = ctx[mock] = mpInstance[mock];
        }
    });
}

function hasHook(name) {
    var hooks = this.$[name];
    if (hooks && hooks.length) {
        return true;
    }
    return false;
}

function callHook(name, args) {
    if (name === "mounted") {
        callHook.call(this, "bm");
        this.$.isMounted = true;
        name = "m";
    }
    var hooks = this.$[name];
    return hooks && invokeArrayFns(hooks, args);
}

var PAGE_INIT_HOOKS = [ ON_LOAD, ON_SHOW, ON_HIDE, ON_UNLOAD, ON_RESIZE, ON_TAB_ITEM_TAP, ON_REACH_BOTTOM, ON_PULL_DOWN_REFRESH, ON_ADD_TO_FAVORITES ];

function findHooks(vueOptions) {
    var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /*   */ new Set();
    if (vueOptions) {
        Object.keys(vueOptions).forEach(function(name) {
            if (isUniLifecycleHook(name, vueOptions[name])) {
                hooks.add(name);
            }
        });
        {
            var extendsOptions = vueOptions.extends, mixins = vueOptions.mixins;
            if (mixins) {
                mixins.forEach(function(mixin2) {
                    return findHooks(mixin2, hooks);
                });
            }
            if (extendsOptions) {
                findHooks(extendsOptions, hooks);
            }
        }
    }
    return hooks;
}

function initHook(mpOptions, hook, excludes) {
    if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
        mpOptions[hook] = function(args) {
            return this.$vm && this.$vm.$callHook(hook, args);
        };
    }
}

var EXCLUDE_HOOKS = [ ON_READY ];

function initHooks(mpOptions, hooks) {
    var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EXCLUDE_HOOKS;
    hooks.forEach(function(hook) {
        return initHook(mpOptions, hook, excludes);
    });
}

function initUnknownHooks(mpOptions, vueOptions) {
    var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EXCLUDE_HOOKS;
    findHooks(vueOptions).forEach(function(hook) {
        return initHook(mpOptions, hook, excludes);
    });
}

function initRuntimeHooks(mpOptions, runtimeHooks) {
    if (!runtimeHooks) {
        return;
    }
    var hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
    hooks.forEach(function(hook) {
        if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
            initHook(mpOptions, hook, []);
        }
    });
}

var findMixinRuntimeHooks = /*   */ once(function() {
    var runtimeHooks = [];
    var app = isFunction(getApp) && getApp({
        allowDefault: true
    });
    if (app && app.$vm && app.$vm.$) {
        var mixins = app.$vm.$.appContext.mixins;
        if (isArray$1(mixins)) {
            var hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
            mixins.forEach(function(mixin2) {
                hooks.forEach(function(hook) {
                    if (hasOwn(mixin2, hook) && !runtimeHooks.includes(hook)) {
                        runtimeHooks.push(hook);
                    }
                });
            });
        }
    }
    return runtimeHooks;
});

function initMixinRuntimeHooks(mpOptions) {
    initHooks(mpOptions, findMixinRuntimeHooks());
}

var HOOKS = [ ON_SHOW, ON_HIDE, ON_ERROR, ON_THEME_CHANGE, ON_PAGE_NOT_FOUND, ON_UNHANDLE_REJECTION ];

function parseApp(instance, parseAppOptions) {
    var internalInstance = instance.$;
    var appOptions = {
        globalData: instance.$options && instance.$options.globalData || {},
        $vm: instance,
        // mp-alipay 组件 data 初始化比 onLaunch 早，提前挂载
        onLaunch: function onLaunch(options) {
            this.$vm = instance;
            var ctx = internalInstance.ctx;
            if (this.$vm && ctx.$scope) {
                return;
            }
            initBaseInstance(internalInstance, {
                mpType: "app",
                mpInstance: this,
                slots: []
            });
            ctx.globalData = this.globalData;
            instance.$callHook(ON_LAUNCH, options);
        }
    };
    var onError = internalInstance.onError;
    if (onError) {
        internalInstance.appContext.config.errorHandler = function(err) {
            instance.$callHook(ON_ERROR, err);
        };
    }
    initLocale(instance);
    var vueOptions = instance.$.type;
    initHooks(appOptions, HOOKS);
    initUnknownHooks(appOptions, vueOptions);
    {
        var methods = vueOptions.methods;
        methods && extend(appOptions, methods);
    }
    if (parseAppOptions) {
        parseAppOptions.parse(appOptions);
    }
    return appOptions;
}

function initCreateApp(parseAppOptions) {
    return function createApp2(vm) {
        return App(parseApp(vm, parseAppOptions));
    };
}

function initCreateSubpackageApp(parseAppOptions) {
    return function createApp2(vm) {
        var appOptions = parseApp(vm, parseAppOptions);
        var app = isFunction(getApp) && getApp({
            allowDefault: true
        });
        if (!app) return;
        vm.$.ctx.$scope = app;
        var globalData = app.globalData;
        if (globalData) {
            Object.keys(appOptions.globalData).forEach(function(name) {
                if (!hasOwn(globalData, name)) {
                    globalData[name] = appOptions.globalData[name];
                }
            });
        }
        Object.keys(appOptions).forEach(function(name) {
            if (!hasOwn(app, name)) {
                app[name] = appOptions[name];
            }
        });
        initAppLifecycle(appOptions, vm);
    };
}

function initAppLifecycle(appOptions, vm) {
    if (isFunction(appOptions.onLaunch)) {
        var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
        appOptions.onLaunch(args);
    }
    if (isFunction(appOptions.onShow) && wx.onAppShow) {
        wx.onAppShow(function(args) {
            vm.$callHook("onShow", args);
        });
    }
    if (isFunction(appOptions.onHide) && wx.onAppHide) {
        wx.onAppHide(function(args) {
            vm.$callHook("onHide", args);
        });
    }
}

function initLocale(appVm) {
    var locale = ref(normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
    Object.defineProperty(appVm, "$locale", {
        get: function get() {
            return locale.value;
        },
        set: function set(v2) {
            locale.value = v2;
        }
    });
}

function initVueIds(vueIds, mpInstance) {
    if (!vueIds) {
        return;
    }
    var ids = vueIds.split(",");
    var len = ids.length;
    if (len === 1) {
        mpInstance._$vueId = ids[0];
    } else if (len === 2) {
        mpInstance._$vueId = ids[0];
        mpInstance._$vuePid = ids[1];
    }
}

var EXTRAS = [ "externalClasses" ];

function initExtraOptions(miniProgramComponentOptions, vueOptions) {
    EXTRAS.forEach(function(name) {
        if (hasOwn(vueOptions, name)) {
            miniProgramComponentOptions[name] = vueOptions[name];
        }
    });
}

var WORKLET_RE = /_(.*)_worklet_factory_/;

function initWorkletMethods(mpMethods, vueMethods) {
    if (vueMethods) {
        Object.keys(vueMethods).forEach(function(name) {
            var matches = name.match(WORKLET_RE);
            if (matches) {
                var workletName = matches[1];
                mpMethods[name] = vueMethods[name];
                mpMethods[workletName] = vueMethods[workletName];
            }
        });
    }
}

function initWxsCallMethods(methods, wxsCallMethods) {
    if (!isArray$1(wxsCallMethods)) {
        return;
    }
    wxsCallMethods.forEach(function(callMethod) {
        methods[callMethod] = function(args) {
            return this.$vm[callMethod](args);
        };
    });
}

function selectAllComponents(mpInstance, selector, $refs) {
    var components = mpInstance.selectAllComponents(selector);
    components.forEach(function(component) {
        var ref2 = component.properties.uR;
        $refs[ref2] = component.$vm || component;
    });
}

function initRefs(instance, mpInstance) {
    Object.defineProperty(instance, "refs", {
        get: function get() {
            var $refs = {};
            selectAllComponents(mpInstance, ".r", $refs);
            var forComponents = mpInstance.selectAllComponents(".r-i-f");
            forComponents.forEach(function(component) {
                var ref2 = component.properties.uR;
                if (!ref2) {
                    return;
                }
                if (!$refs[ref2]) {
                    $refs[ref2] = [];
                }
                $refs[ref2].push(component.$vm || component);
            });
            return $refs;
        }
    });
}

function findVmByVueId(instance, vuePid) {
    var $children = instance.$children;
    for (var i2 = $children.length - 1; i2 >= 0; i2--) {
        var childVm = $children[i2];
        if (childVm.$scope._$vueId === vuePid) {
            return childVm;
        }
    }
    var parentVm;
    for (var _i5 = $children.length - 1; _i5 >= 0; _i5--) {
        parentVm = findVmByVueId($children[_i5], vuePid);
        if (parentVm) {
            return parentVm;
        }
    }
}

var builtInProps = [ 
// 百度小程序,快手小程序自定义组件不支持绑定动态事件，动态dataset，故通过props传递事件信息
// event-opts
"eO", 
// 组件 ref
"uR", 
// 组件 ref-in-for
"uRIF", 
// 组件 id
"uI", 
// 组件类型 m: 小程序组件
"uT", 
// 组件 props
"uP", 
// 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
"uS" ];

function initDefaultProps(options) {
    var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var properties = {};
    if (!isBehavior) {
        builtInProps.forEach(function(name) {
            properties[name] = {
                type: null,
                value: ""
            };
        });
        properties.uS = {
            type: null,
            value: [],
            observer: function observer(newVal) {
                var $slots = /*   */ Object.create(null);
                newVal && newVal.forEach(function(slotName) {
                    $slots[slotName] = true;
                });
                this.setData({
                    $slots: $slots
                });
            }
        };
    }
    if (options.behaviors) {
        if (options.behaviors.includes("wx://form-field")) {
            if (!options.properties || !options.properties.name) {
                properties.name = {
                    type: null,
                    value: ""
                };
            }
            if (!options.properties || !options.properties.value) {
                properties.value = {
                    type: null,
                    value: ""
                };
            }
        }
    }
    return properties;
}

function initVirtualHostProps(options) {
    var properties = {};
    {
        if (options && options.virtualHost) {
            properties.virtualHostStyle = {
                type: null,
                value: ""
            };
            properties.virtualHostClass = {
                type: null,
                value: ""
            };
        }
    }
    return properties;
}

function initProps(mpComponentOptions) {
    if (!mpComponentOptions.properties) {
        mpComponentOptions.properties = {};
    }
    extend(mpComponentOptions.properties, initDefaultProps(mpComponentOptions), initVirtualHostProps(mpComponentOptions.options));
}

var PROP_TYPES = [ String, Number, Boolean, Object, Array, null ];

function parsePropType(type, defaultValue) {
    if (isArray$1(type) && type.length === 1) {
        return type[0];
    }
    return type;
}

function normalizePropType(type, defaultValue) {
    var res = parsePropType(type);
    return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}

function initPageProps(_ref20, rawProps) {
    var properties = _ref20.properties;
    if (isArray$1(rawProps)) {
        rawProps.forEach(function(key) {
            properties[key] = {
                type: String,
                value: ""
            };
        });
    } else if (isPlainObject$2(rawProps)) {
        Object.keys(rawProps).forEach(function(key) {
            var opts = rawProps[key];
            if (isPlainObject$2(opts)) {
                var value2 = opts.default;
                if (isFunction(value2)) {
                    value2 = value2();
                }
                var type = opts.type;
                opts.type = normalizePropType(type);
                properties[key] = {
                    type: opts.type,
                    value: value2
                };
            } else {
                properties[key] = {
                    type: normalizePropType(opts)
                };
            }
        });
    }
}

function findPropsData(properties, isPage2) {
    return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}

function findPagePropsData(properties) {
    var propsData = {};
    if (isPlainObject$2(properties)) {
        Object.keys(properties).forEach(function(name) {
            if (builtInProps.indexOf(name) === -1) {
                propsData[name] = properties[name];
            }
        });
    }
    return propsData;
}

function initFormField(vm) {
    var vueOptions = vm.$options;
    if (isArray$1(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
        vm.$watch("modelValue", function() {
            vm.$scope && vm.$scope.setData({
                name: vm.name,
                value: vm.modelValue
            });
        }, {
            immediate: true
        });
    }
}

function initData(_2) {
    return {};
}

function initPropsObserver(componentOptions) {
    var observe = function observe2() {
        var up = this.properties.uP;
        if (!up) {
            return;
        }
        if (this.$vm) {
            updateComponentProps(up, this.$vm.$);
        } else if (this.properties.uT === "m") {
            updateMiniProgramComponentProperties(up, this);
        }
    };
    {
        if (!componentOptions.observers) {
            componentOptions.observers = {};
        }
        componentOptions.observers.uP = observe;
    }
}

function updateMiniProgramComponentProperties(up, mpInstance) {
    var prevProps = mpInstance.properties;
    var nextProps = findComponentPropsData(up) || {};
    if (hasPropsChanged(prevProps, nextProps, false)) {
        mpInstance.setData(nextProps);
    }
}

function updateComponentProps(up, instance) {
    var prevProps = toRaw(instance.props);
    var nextProps = findComponentPropsData(up) || {};
    if (hasPropsChanged(prevProps, nextProps)) {
        updateProps(instance, nextProps, prevProps, false);
        if (hasQueueJob(instance.update)) {
            invalidateJob(instance.update);
        }
        {
            instance.update();
        }
    }
}

function hasPropsChanged(prevProps, nextProps) {
    var checkLen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var nextKeys = Object.keys(nextProps);
    if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (var i2 = 0; i2 < nextKeys.length; i2++) {
        var key = nextKeys[i2];
        if (nextProps[key] !== prevProps[key]) {
            return true;
        }
    }
    return false;
}

function initBehaviors(vueOptions) {
    var vueBehaviors = vueOptions.behaviors;
    var vueProps = vueOptions.props;
    if (!vueProps) {
        vueOptions.props = vueProps = [];
    }
    var behaviors = [];
    if (isArray$1(vueBehaviors)) {
        vueBehaviors.forEach(function(behavior) {
            behaviors.push(behavior.replace("uni://", "wx://"));
            if (behavior === "uni://form-field") {
                if (isArray$1(vueProps)) {
                    vueProps.push("name");
                    vueProps.push("modelValue");
                } else {
                    vueProps.name = {
                        type: String,
                        default: ""
                    };
                    vueProps.modelValue = {
                        type: [ String, Number, Boolean, Array, Object, Date ],
                        default: ""
                    };
                }
            }
        });
    }
    return behaviors;
}

function applyOptions(componentOptions, vueOptions) {
    componentOptions.data = initData();
    componentOptions.behaviors = initBehaviors(vueOptions);
}

function parseComponent(vueOptions, _ref21) {
    var parse = _ref21.parse, mocks2 = _ref21.mocks, isPage2 = _ref21.isPage, initRelation2 = _ref21.initRelation, handleLink2 = _ref21.handleLink, initLifetimes2 = _ref21.initLifetimes;
    vueOptions = vueOptions.default || vueOptions;
    var options = {
        multipleSlots: true,
        // styleIsolation: 'apply-shared',
        addGlobalClass: true,
        pureDataPattern: /^uP$/
    };
    if (isArray$1(vueOptions.mixins)) {
        vueOptions.mixins.forEach(function(item) {
            if (isObject$1(item.options)) {
                extend(options, item.options);
            }
        });
    }
    if (vueOptions.options) {
        extend(options, vueOptions.options);
    }
    var mpComponentOptions = {
        options: options,
        lifetimes: initLifetimes2({
            mocks: mocks2,
            isPage: isPage2,
            initRelation: initRelation2,
            vueOptions: vueOptions
        }),
        pageLifetimes: {
            show: function show() {
                this.$vm && this.$vm.$callHook("onPageShow");
            },
            hide: function hide() {
                this.$vm && this.$vm.$callHook("onPageHide");
            },
            resize: function resize(size2) {
                this.$vm && this.$vm.$callHook("onPageResize", size2);
            }
        },
        methods: {
            __l: handleLink2
        }
    };
    {
        applyOptions(mpComponentOptions, vueOptions);
    }
    initProps(mpComponentOptions);
    initPropsObserver(mpComponentOptions);
    initExtraOptions(mpComponentOptions, vueOptions);
    initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
    {
        initWorkletMethods(mpComponentOptions.methods, vueOptions.methods);
    }
    if (parse) {
        parse(mpComponentOptions, {
            handleLink: handleLink2
        });
    }
    return mpComponentOptions;
}

function initCreateComponent(parseOptions2) {
    return function createComponent2(vueComponentOptions) {
        return Component(parseComponent(vueComponentOptions, parseOptions2));
    };
}

var $createComponentFn;

var $destroyComponentFn;

function getAppVm() {
    return getApp().$vm;
}

function $createComponent(initialVNode, options) {
    if (!$createComponentFn) {
        $createComponentFn = getAppVm().$createComponent;
    }
    var proxy = $createComponentFn(initialVNode, options);
    return getExposeProxy(proxy.$) || proxy;
}

function $destroyComponent(instance) {
    if (!$destroyComponentFn) {
        $destroyComponentFn = getAppVm().$destroyComponent;
    }
    return $destroyComponentFn(instance);
}

function parsePage(vueOptions, parseOptions2) {
    var parse = parseOptions2.parse, mocks2 = parseOptions2.mocks, isPage2 = parseOptions2.isPage, initRelation2 = parseOptions2.initRelation, handleLink2 = parseOptions2.handleLink, initLifetimes2 = parseOptions2.initLifetimes;
    var miniProgramPageOptions = parseComponent(vueOptions, {
        mocks: mocks2,
        isPage: isPage2,
        initRelation: initRelation2,
        handleLink: handleLink2,
        initLifetimes: initLifetimes2
    });
    initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
    var methods = miniProgramPageOptions.methods;
    methods.onLoad = function(query) {
        this.options = query;
        this.$page = {
            fullPath: addLeadingSlash(this.route + stringifyQuery(query))
        };
        return this.$vm && this.$vm.$callHook(ON_LOAD, query);
    };
    initHooks(methods, PAGE_INIT_HOOKS);
    {
        initUnknownHooks(methods, vueOptions);
    }
    initRuntimeHooks(methods, vueOptions.__runtimeHooks);
    initMixinRuntimeHooks(methods);
    parse && parse(miniProgramPageOptions, {
        handleLink: handleLink2
    });
    return miniProgramPageOptions;
}

function initCreatePage(parseOptions2) {
    return function createPage2(vuePageOptions) {
        return Component(parsePage(vuePageOptions, parseOptions2));
    };
}

function initCreatePluginApp(parseAppOptions) {
    return function createApp2(vm) {
        initAppLifecycle(parseApp(vm, parseAppOptions), vm);
    };
}

var MPPage = Page;

var MPComponent = Component;

function initTriggerEvent(mpInstance) {
    var oldTriggerEvent = mpInstance.triggerEvent;
    var newTriggerEvent = function newTriggerEvent(event) {
        for (var _len22 = arguments.length, args = new Array(_len22 > 1 ? _len22 - 1 : 0), _key30 = 1; _key30 < _len22; _key30++) {
            args[_key30 - 1] = arguments[_key30];
        }
        return oldTriggerEvent.apply(mpInstance, [ customizeEvent(event) ].concat(args));
    };
    try {
        mpInstance.triggerEvent = newTriggerEvent;
    } catch (error2) {
        mpInstance._triggerEvent = newTriggerEvent;
    }
}

function initMiniProgramHook(name, options, isComponent) {
    var oldHook = options[name];
    if (!oldHook) {
        options[name] = function() {
            initTriggerEvent(this);
        };
    } else {
        options[name] = function() {
            initTriggerEvent(this);
            for (var _len23 = arguments.length, args = new Array(_len23), _key31 = 0; _key31 < _len23; _key31++) {
                args[_key31] = arguments[_key31];
            }
            return oldHook.apply(this, args);
        };
    }
}

Page = function Page(options) {
    initMiniProgramHook(ON_LOAD, options);
    return MPPage(options);
};

Component = function Component(options) {
    initMiniProgramHook("created", options);
    var isVueComponent = options.properties && options.properties.uP;
    if (!isVueComponent) {
        initProps(options);
        initPropsObserver(options);
    }
    return MPComponent(options);
};

function initLifetimes(_ref22) {
    var mocks2 = _ref22.mocks, isPage2 = _ref22.isPage, initRelation2 = _ref22.initRelation, vueOptions = _ref22.vueOptions;
    return {
        attached: function attached() {
            var properties = this.properties;
            initVueIds(properties.uI, this);
            var relationOptions = {
                vuePid: this._$vuePid
            };
            initRelation2(this, relationOptions);
            var mpInstance = this;
            var isMiniProgramPage = isPage2(mpInstance);
            var propsData = properties;
            this.$vm = $createComponent({
                type: vueOptions,
                props: findPropsData(propsData, isMiniProgramPage)
            }, {
                mpType: isMiniProgramPage ? "page" : "component",
                mpInstance: mpInstance,
                slots: properties.uS || {},
                // vueSlots
                parentComponent: relationOptions.parent && relationOptions.parent.$,
                onBeforeSetup: function onBeforeSetup(instance, options) {
                    initRefs(instance, mpInstance);
                    initMocks(instance, mpInstance, mocks2);
                    initComponentInstance(instance, options);
                }
            });
            if (!isMiniProgramPage) {
                initFormField(this.$vm);
            }
        },
        ready: function ready() {
            if (this.$vm) {
                {
                    this.$vm.$callHook("mounted");
                    this.$vm.$callHook(ON_READY);
                }
            }
        },
        detached: function detached() {
            if (this.$vm) {
                pruneComponentPropsCache(this.$vm.$.uid);
                $destroyComponent(this.$vm);
            }
        }
    };
}

var mocks = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];

function isPage(mpInstance) {
    return !!mpInstance.route;
}

function initRelation(mpInstance, detail) {
    mpInstance.triggerEvent("__l", detail);
}

function handleLink(event) {
    var detail = event.detail || event.value;
    var vuePid = detail.vuePid;
    var parentVm;
    if (vuePid) {
        parentVm = findVmByVueId(this.$vm, vuePid);
    }
    if (!parentVm) {
        parentVm = this.$vm;
    }
    detail.parent = parentVm;
}

var parseOptions = /*   */ Object.freeze({
    __proto__: null,
    handleLink: handleLink,
    initLifetimes: initLifetimes,
    initRelation: initRelation,
    isPage: isPage,
    mocks: mocks
});

var createApp = initCreateApp();

var createPage = initCreatePage(parseOptions);

var createComponent = initCreateComponent(parseOptions);

var createPluginApp = initCreatePluginApp();

var createSubpackageApp = initCreateSubpackageApp();

{
    wx.createApp = global.createApp = createApp;
    wx.createPage = createPage;
    wx.createComponent = createComponent;
    wx.createPluginApp = global.createPluginApp = createPluginApp;
    wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}

var toString = Object.prototype.toString;

function isArray(val) {
    return toString.call(val) === "[object Array]";
}

function isObject(val) {
    return val !== null && _typeof2(val) === "object";
}

function isDate(val) {
    return toString.call(val) === "[object Date]";
}

function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}

function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
        return;
    }
    if (_typeof2(obj) !== "object") {
        obj = [ obj ];
    }
    if (isArray(obj)) {
        for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
            fn.call(null, obj[i2], i2, obj);
        }
    } else {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}

function isPlainObject$1(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

function deepMerge$1() {
    var result = {};
    function assignValue(val, key) {
        if (_typeof2(result[key]) === "object" && _typeof2(val) === "object") {
            result[key] = deepMerge$1(result[key], val);
        } else if (_typeof2(val) === "object") {
            result[key] = deepMerge$1({}, val);
        } else {
            result[key] = val;
        }
    }
    for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
        forEach(arguments[i2], assignValue);
    }
    return result;
}

function isUndefined(val) {
    return typeof val === "undefined";
}

function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}

function buildURL(url2, params, paramsSerializer) {
    if (!params) {
        return url2;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams(params)) {
        serializedParams = params.toString();
    } else {
        var parts = [];
        forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
                return;
            }
            if (isArray(val)) {
                key = key + "[]";
            } else {
                val = [ val ];
            }
            forEach(val, function parseValue(v2) {
                if (isDate(v2)) {
                    v2 = v2.toISOString();
                } else if (isObject(v2)) {
                    v2 = JSON.stringify(v2);
                }
                parts.push(encode(key) + "=" + encode(v2));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url2.indexOf("#");
        if (hashmarkIndex !== -1) {
            url2 = url2.slice(0, hashmarkIndex);
        }
        url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
}

function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
}

function settle(resolve2, reject, response) {
    var validateStatus2 = response.config.validateStatus;
    var status = response.statusCode;
    if (status && (!validateStatus2 || validateStatus2(status))) {
        resolve2(response);
    } else {
        reject(response);
    }
}

var mergeKeys$1 = function mergeKeys$1(keys, config2) {
    var config3 = {};
    keys.forEach(function(prop) {
        if (!isUndefined(config2[prop])) {
            config3[prop] = config2[prop];
        }
    });
    return config3;
};

var adapter = function adapter(config2) {
    return new Promise(function(resolve2, reject) {
        var fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params, config2.paramsSerializer);
        var _config = {
            url: fullPath,
            header: config2.header,
            complete: function complete(response) {
                config2.fullPath = fullPath;
                response.config = config2;
                response.rawData = response.data;
                try {
                    var jsonParseHandle = false;
                    var forcedJSONParsingType = _typeof2(config2.forcedJSONParsing);
                    if (forcedJSONParsingType === "boolean") {
                        jsonParseHandle = config2.forcedJSONParsing;
                    } else if (forcedJSONParsingType === "object") {
                        var includesMethod = config2.forcedJSONParsing.include || [];
                        jsonParseHandle = includesMethod.includes(config2.method);
                    }
                    if (jsonParseHandle && typeof response.data === "string") {
                        response.data = JSON.parse(response.data);
                    }
                } catch (e2) {}
                settle(resolve2, reject, response);
            }
        };
        var requestTask;
        if (config2.method === "UPLOAD") {
            delete _config.header["content-type"];
            delete _config.header["Content-Type"];
            var otherConfig = {
                filePath: config2.filePath,
                name: config2.name
            };
            var optionalKeys = [ "timeout", "formData" ];
            requestTask = index$1.uploadFile(_objectSpread2(_objectSpread2(_objectSpread2({}, _config), otherConfig), mergeKeys$1(optionalKeys, config2)));
        } else if (config2.method === "DOWNLOAD") {
            var _optionalKeys = [ "timeout", "filePath" ];
            requestTask = index$1.downloadFile(_objectSpread2(_objectSpread2({}, _config), mergeKeys$1(_optionalKeys, config2)));
        } else {
            var _optionalKeys2 = [ "data", "method", "timeout", "dataType", "responseType", "enableHttp2", "enableQuic", "enableCache", "enableHttpDNS", "httpDNSServiceId", "enableChunked", "forceCellularNetwork" ];
            requestTask = index$1.request(_objectSpread2(_objectSpread2({}, _config), mergeKeys$1(_optionalKeys2, config2)));
        }
        if (config2.getTask) {
            config2.getTask(requestTask, config2);
        }
    });
};

var dispatchRequest = function dispatchRequest(config2) {
    return adapter(config2);
};

function InterceptorManager() {
    this.handlers = [];
}

InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
    });
    return this.handlers.length - 1;
};

InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};

InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach(function(h2) {
        if (h2 !== null) {
            fn(h2);
        }
    });
};

var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
    var config3 = {};
    keys.forEach(function(prop) {
        if (!isUndefined(config2[prop])) {
            config3[prop] = config2[prop];
        } else if (!isUndefined(globalsConfig[prop])) {
            config3[prop] = globalsConfig[prop];
        }
    });
    return config3;
};

var mergeConfig = function mergeConfig(globalsConfig) {
    var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var method = config2.method || globalsConfig.method || "GET";
    var config3 = {
        baseURL: config2.baseURL || globalsConfig.baseURL || "",
        method: method,
        url: config2.url || "",
        params: config2.params || {},
        custom: _objectSpread2(_objectSpread2({}, globalsConfig.custom || {}), config2.custom || {}),
        header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    var defaultToConfig2Keys = [ "getTask", "validateStatus", "paramsSerializer", "forcedJSONParsing" ];
    config3 = _objectSpread2(_objectSpread2({}, config3), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
    if (method === "DOWNLOAD") {
        var downloadKeys = [ "timeout", "filePath" ];
        config3 = _objectSpread2(_objectSpread2({}, config3), mergeKeys(downloadKeys, globalsConfig, config2));
    } else if (method === "UPLOAD") {
        delete config3.header["content-type"];
        delete config3.header["Content-Type"];
        var uploadKeys = [ "filePath", "name", "timeout", "formData" ];
        uploadKeys.forEach(function(prop) {
            if (!isUndefined(config2[prop])) {
                config3[prop] = config2[prop];
            }
        });
        if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
            config3["timeout"] = globalsConfig["timeout"];
        }
    } else {
        var defaultsKeys = [ "data", "timeout", "dataType", "responseType", "enableHttp2", "enableQuic", "enableCache", "enableHttpDNS", "httpDNSServiceId", "enableChunked", "forceCellularNetwork" ];
        config3 = _objectSpread2(_objectSpread2({}, config3), mergeKeys(defaultsKeys, globalsConfig, config2));
    }
    return config3;
};

var defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    paramsSerializer: null,
    responseType: "text",
    custom: {},
    timeout: 6e4,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    // 是否尝试将响应数据json化
    forcedJSONParsing: true
};

var clone = function() {
    function _instanceof(obj, type) {
        return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
        nativeMap = Map;
    } catch (_2) {
        nativeMap = function nativeMap() {};
    }
    var nativeSet;
    try {
        nativeSet = Set;
    } catch (_2) {
        nativeSet = function nativeSet() {};
    }
    var nativePromise;
    try {
        nativePromise = Promise;
    } catch (_2) {
        nativePromise = function nativePromise() {};
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
        if (_typeof2(circular) === "object") {
            depth = circular.depth;
            prototype = circular.prototype;
            includeNonEnumerable = circular.includeNonEnumerable;
            circular = circular.circular;
        }
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != "undefined";
        if (typeof circular == "undefined") circular = true;
        if (typeof depth == "undefined") depth = Infinity;
        function _clone(parent2, depth2) {
            if (parent2 === null) return null;
            if (depth2 === 0) return parent2;
            var child;
            var proto;
            if (_typeof2(parent2) != "object") {
                return parent2;
            }
            if (_instanceof(parent2, nativeMap)) {
                child = new nativeMap();
            } else if (_instanceof(parent2, nativeSet)) {
                child = new nativeSet();
            } else if (_instanceof(parent2, nativePromise)) {
                child = new nativePromise(function(resolve2, reject) {
                    parent2.then(function(value2) {
                        resolve2(_clone(value2, depth2 - 1));
                    }, function(err) {
                        reject(_clone(err, depth2 - 1));
                    });
                });
            } else if (clone2.__isArray(parent2)) {
                child = [];
            } else if (clone2.__isRegExp(parent2)) {
                child = new RegExp(parent2.source, __getRegExpFlags(parent2));
                if (parent2.lastIndex) child.lastIndex = parent2.lastIndex;
            } else if (clone2.__isDate(parent2)) {
                child = new Date(parent2.getTime());
            } else if (useBuffer && Buffer.isBuffer(parent2)) {
                if (Buffer.from) {
                    child = Buffer.from(parent2);
                } else {
                    child = new Buffer(parent2.length);
                    parent2.copy(child);
                }
                return child;
            } else if (_instanceof(parent2, Error)) {
                child = Object.create(parent2);
            } else {
                if (typeof prototype == "undefined") {
                    proto = Object.getPrototypeOf(parent2);
                    child = Object.create(proto);
                } else {
                    child = Object.create(prototype);
                    proto = prototype;
                }
            }
            if (circular) {
                var index2 = allParents.indexOf(parent2);
                if (index2 != -1) {
                    return allChildren[index2];
                }
                allParents.push(parent2);
                allChildren.push(child);
            }
            if (_instanceof(parent2, nativeMap)) {
                parent2.forEach(function(value2, key) {
                    var keyChild = _clone(key, depth2 - 1);
                    var valueChild = _clone(value2, depth2 - 1);
                    child.set(keyChild, valueChild);
                });
            }
            if (_instanceof(parent2, nativeSet)) {
                parent2.forEach(function(value2) {
                    var entryChild = _clone(value2, depth2 - 1);
                    child.add(entryChild);
                });
            }
            for (var i2 in parent2) {
                var attrs = Object.getOwnPropertyDescriptor(parent2, i2);
                if (attrs) {
                    child[i2] = _clone(parent2[i2], depth2 - 1);
                }
                try {
                    var objProperty = Object.getOwnPropertyDescriptor(parent2, i2);
                    if (objProperty.set === "undefined") {
                        continue;
                    }
                    child[i2] = _clone(parent2[i2], depth2 - 1);
                } catch (e2) {
                    if (e2 instanceof TypeError) {
                        continue;
                    } else if (e2 instanceof ReferenceError) {
                        continue;
                    }
                }
            }
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(parent2);
                for (var i2 = 0; i2 < symbols.length; i2++) {
                    var symbol = symbols[i2];
                    var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
                    if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                        continue;
                    }
                    child[symbol] = _clone(parent2[symbol], depth2 - 1);
                    Object.defineProperty(child, symbol, descriptor);
                }
            }
            if (includeNonEnumerable) {
                var allPropertyNames = Object.getOwnPropertyNames(parent2);
                for (var i2 = 0; i2 < allPropertyNames.length; i2++) {
                    var propertyName = allPropertyNames[i2];
                    var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
                    if (descriptor && descriptor.enumerable) {
                        continue;
                    }
                    child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
                    Object.defineProperty(child, propertyName, descriptor);
                }
            }
            return child;
        }
        return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;
        var c2 = function c2() {};
        c2.prototype = parent;
        return new c2();
    };
    function __objToStr(o2) {
        return Object.prototype.toString.call(o2);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o2) {
        return _typeof2(o2) === "object" && __objToStr(o2) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o2) {
        return _typeof2(o2) === "object" && __objToStr(o2) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o2) {
        return _typeof2(o2) === "object" && __objToStr(o2) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re2) {
        var flags = "";
        if (re2.global) flags += "g";
        if (re2.ignoreCase) flags += "i";
        if (re2.multiline) flags += "m";
        return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
}();

var Request = /* */ function() {
    /**
   * @param {Object} arg - 全局配置
   * @param {String} arg.baseURL - 全局根路径
   * @param {Object} arg.header - 全局header
   * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
   * @param {String} arg.dataType = [json] - 全局默认的dataType
   * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
   * @param {Object} arg.custom - 全局默认的自定义参数
   * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
   * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
   * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
   * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
   * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
   */
    function Request() {
        var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck2(this, Request);
        if (!isPlainObject$1(arg)) {
            arg = {};
            console.warn("设置全局参数必须接收一个Object");
        }
        this.config = clone(_objectSpread2(_objectSpread2({}, defaults), arg));
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        };
    }
    /**
   * @Function
   * @param {Request~setConfigCallback} f - 设置全局默认配置
   */    return _createClass2(Request, [ {
        key: "setConfig",
        value: function setConfig(f2) {
            this.config = f2(this.config);
        }
    }, {
        key: "middleware",
        value: function middleware(config2) {
            config2 = mergeConfig(this.config, config2);
            var chain = [ dispatchRequest, void 0 ];
            var promise2 = Promise.resolve(config2);
            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
            while (chain.length) {
                promise2 = promise2.then(chain.shift(), chain.shift());
            }
            return promise2;
        }
        /**
     * @Function
     * @param {Object} config - 请求配置项
     * @prop {String} options.url - 请求路径
     * @prop {Object} options.data - 请求参数
     * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
     * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
     * @prop {Object} [options.header = config.header] - 请求header
     * @prop {Object} [options.method = config.method] - 请求方法
     * @returns {Promise<unknown>}
     */    }, {
        key: "request",
        value: function request() {
            var config2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.middleware(config2);
        }
    }, {
        key: "get",
        value: function get(url2) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                method: "GET"
            }, options));
        }
    }, {
        key: "post",
        value: function post(url2, data) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "POST"
            }, options));
        }
    }, {
        key: "put",
        value: function put(url2, data) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "PUT"
            }, options));
        }
    }, {
        key: "delete",
        value: function _delete(url2, data) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "DELETE"
            }, options));
        }
    }, {
        key: "connect",
        value: function connect(url2, data) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "CONNECT"
            }, options));
        }
    }, {
        key: "head",
        value: function head(url2, data) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "HEAD"
            }, options));
        }
    }, {
        key: "options",
        value: function options(url2, data) {
            var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "OPTIONS"
            }, _options));
        }
    }, {
        key: "trace",
        value: function trace(url2, data) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.middleware(_objectSpread2({
                url: url2,
                data: data,
                method: "TRACE"
            }, options));
        }
    }, {
        key: "upload",
        value: function upload(url2) {
            var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            config2.url = url2;
            config2.method = "UPLOAD";
            return this.middleware(config2);
        }
    }, {
        key: "download",
        value: function download(url2) {
            var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            config2.url = url2;
            config2.method = "DOWNLOAD";
            return this.middleware(config2);
        }
    }, {
        key: "version",
        get: function get() {
            return "3.1.0";
        }
    } ]);
}();

function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
}

function mobile(value2) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value2);
}

function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
}

function date(value2) {
    if (!value2) return false;
    if (number(value2)) value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
}

function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
}

function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
}

function string(value2) {
    return typeof value2 === "string";
}

function digits(value2) {
    return /^\d+$/.test(value2);
}

function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value2);
}

function carNo(value2) {
    var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
        return creg.test(value2);
    }
    if (value2.length === 8) {
        return xreg.test(value2);
    }
    return false;
}

function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
}

function chinese(value2) {
    var reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
}

function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
}

function enOrNum(value2) {
    var reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
}

function contains(value2, param) {
    return value2.indexOf(param) >= 0;
}

function range$1(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
}

function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
}

function landline(value2) {
    var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
}

function empty(value2) {
    switch (_typeof2(value2)) {
      case "undefined":
        return true;

      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0) return true;
        break;

      case "boolean":
        if (!value2) return true;
        break;

      case "number":
        if (value2 === 0 || isNaN(value2)) return true;
        break;

      case "object":
        if (value2 === null || value2.length === 0) return true;
        for (var i2 in value2) {
            return false;
        }
        return true;
    }
    return false;
}

function jsonString(value2) {
    if (typeof value2 === "string") {
        try {
            var obj = JSON.parse(value2);
            if (_typeof2(obj) === "object" && obj) {
                return true;
            }
            return false;
        } catch (e2) {
            return false;
        }
    }
    return false;
}

function array(value2) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
}

function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
}

function code(value2) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    return new RegExp("^\\d{".concat(len, "}$")).test(value2);
}

function func(value2) {
    return typeof value2 === "function";
}

function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
}

function image(value2) {
    var newValue = value2.split("?")[0];
    var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
}

function video(value2) {
    var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
}

function regExp(o2) {
    return o2 && Object.prototype.toString.call(o2) === "[object RegExp]";
}

var test = /*   */ Object.freeze(/*   */ Object.defineProperty({
    __proto__: null,
    amount: amount,
    array: array,
    carNo: carNo,
    chinese: chinese,
    code: code,
    contains: contains,
    date: date,
    dateISO: dateISO,
    digits: digits,
    email: email,
    empty: empty,
    enOrNum: enOrNum,
    func: func,
    idCard: idCard,
    image: image,
    jsonString: jsonString,
    landline: landline,
    letter: letter,
    mobile: mobile,
    number: number,
    object: object,
    promise: promise,
    range: range$1,
    rangeLength: rangeLength,
    regExp: regExp,
    string: string,
    url: url,
    video: video
}, Symbol.toStringTag, {
    value: "Module"
}));

function strip(num) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
    return +parseFloat(Number(num).toPrecision(precision));
}

function digitLength(num) {
    var eSplit = num.toString().split(/[eE]/);
    var len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
}

function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
        return Number(num.toString().replace(".", ""));
    }
    var dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

function checkBoundary(num) {
    {
        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
            console.warn("".concat(num, " 超出了精度限制，结果可能不正确"));
        }
    }
}

function iteratorOperation(arr, operation) {
    var _arr = _toArray2(arr), num1 = _arr[0], num2 = _arr[1], others = _arr.slice(2);
    var res = operation(num1, num2);
    others.forEach(function(num) {
        res = operation(res, num);
    });
    return res;
}

function times() {
    for (var _len24 = arguments.length, nums = new Array(_len24), _key32 = 0; _key32 < _len24; _key32++) {
        nums[_key32] = arguments[_key32];
    }
    if (nums.length > 2) {
        return iteratorOperation(nums, times);
    }
    var num1 = nums[0], num2 = nums[1];
    var num1Changed = float2Fixed(num1);
    var num2Changed = float2Fixed(num2);
    var baseNum = digitLength(num1) + digitLength(num2);
    var leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
}

function divide() {
    for (var _len25 = arguments.length, nums = new Array(_len25), _key33 = 0; _key33 < _len25; _key33++) {
        nums[_key33] = arguments[_key33];
    }
    if (nums.length > 2) {
        return iteratorOperation(nums, divide);
    }
    var num1 = nums[0], num2 = nums[1];
    var num1Changed = float2Fixed(num1);
    var num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

function round(num, ratio) {
    var base = Math.pow(10, ratio);
    var result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
        result = times(result, -1);
    }
    return result;
}

function range() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var value2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return Math.max(min, Math.min(max, Number(value2)));
}

function getPx(value2) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (number(value2)) {
        return unit ? "".concat(value2, "px") : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
        return unit ? "".concat(index$1.upx2px(parseInt(value2)), "px") : Number(index$1.upx2px(parseInt(value2)));
    }
    return unit ? "".concat(parseInt(value2), "px") : parseInt(value2);
}

function sleep() {
    var value2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    return new Promise(function(resolve2) {
        setTimeout(function() {
            resolve2();
        }, value2);
    });
}

function os$1() {
    return index$1.getSystemInfoSync().platform.toLowerCase();
}

function sys() {
    return index$1.getSystemInfoSync();
}

function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
        var gab = max - min + 1;
        return Math.floor(Math.random() * gab + min);
    }
    return 0;
}

function guid() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var uuid = [];
    radix = radix || chars.length;
    if (len) {
        for (var i2 = 0; i2 < len; i2++) uuid[i2] = chars[0 | Math.random() * radix];
    } else {
        var r2;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";
        for (var _i6 = 0; _i6 < 36; _i6++) {
            if (!uuid[_i6]) {
                r2 = 0 | Math.random() * 16;
                uuid[_i6] = chars[_i6 == 19 ? r2 & 3 | 8 : r2];
            }
        }
    }
    if (firstU) {
        uuid.shift();
        return "u".concat(uuid.join(""));
    }
    return uuid.join("");
}

function $parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
    var parent = this.$parent;
    while (parent) {
        if (parent.$options && parent.$options.name !== name) {
            parent = parent.$parent;
        } else {
            return parent;
        }
    }
    return false;
}

function addStyle(customStyle) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "object";
    if (empty(customStyle) || _typeof2(customStyle) === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
        return customStyle;
    }
    if (target === "object") {
        customStyle = trim(customStyle);
        var styleArray = customStyle.split(";");
        var style = {};
        for (var i2 = 0; i2 < styleArray.length; i2++) {
            if (styleArray[i2]) {
                var item = styleArray[i2].split(":");
                style[trim(item[0])] = trim(item[1]);
            }
        }
        return style;
    }
    var string2 = "";
    for (var _i7 in customStyle) {
        var key = _i7.replace(/([A-Z])/g, "-$1").toLowerCase();
        string2 += "".concat(key, ":").concat(customStyle[_i7], ";");
    }
    return trim(string2);
}

function addUnit() {
    var value2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "auto";
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(_b) {
        return (_b = function(_a) {
            return (_a = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _a.config;
        }()) == null ? void 0 : _b.unit;
    }() ? function(_d) {
        return (_d = function(_c) {
            return (_c = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _c.config;
        }()) == null ? void 0 : _d.unit;
    }() : "px";
    value2 = String(value2);
    return number(value2) ? "".concat(value2).concat(unit) : value2;
}

function deepClone(obj) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /*   */ new WeakMap();
    if (obj === null || _typeof2(obj) !== "object") return obj;
    if (cache.has(obj)) return cache.get(obj);
    var clone2;
    if (obj instanceof Date) {
        clone2 = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
        clone2 = new RegExp(obj);
    } else if (obj instanceof Map) {
        clone2 = new Map(Array.from(obj, function(_ref23) {
            var _ref24 = _slicedToArray2(_ref23, 2), key = _ref24[0], value2 = _ref24[1];
            return [ key, deepClone(value2, cache) ];
        }));
    } else if (obj instanceof Set) {
        clone2 = new Set(Array.from(obj, function(value2) {
            return deepClone(value2, cache);
        }));
    } else if (Array.isArray(obj)) {
        clone2 = obj.map(function(value2) {
            return deepClone(value2, cache);
        });
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
        clone2 = Object.create(Object.getPrototypeOf(obj));
        cache.set(obj, clone2);
        for (var _i8 = 0, _Object$entries = Object.entries(obj); _i8 < _Object$entries.length; _i8++) {
            var _Object$entries$_i = _slicedToArray2(_Object$entries[_i8], 2), key = _Object$entries$_i[0], value2 = _Object$entries$_i[1];
            clone2[key] = deepClone(value2, cache);
        }
    } else {
        clone2 = Object.assign({}, obj);
    }
    cache.set(obj, clone2);
    return clone2;
}

function deepMerge() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    target = deepClone(target);
    if (_typeof2(target) !== "object" || target === null || _typeof2(source) !== "object" || source === null) return target;
    var merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) continue;
        var sourceValue = source[prop];
        var targetValue = merged[prop];
        if (sourceValue instanceof Date) {
            merged[prop] = new Date(sourceValue);
        } else if (sourceValue instanceof RegExp) {
            merged[prop] = new RegExp(sourceValue);
        } else if (sourceValue instanceof Map) {
            merged[prop] = new Map(sourceValue);
        } else if (sourceValue instanceof Set) {
            merged[prop] = new Set(sourceValue);
        } else if (_typeof2(sourceValue) === "object" && sourceValue !== null) {
            merged[prop] = deepMerge(targetValue, sourceValue);
        } else {
            merged[prop] = sourceValue;
        }
    }
    return merged;
}

function error(err) {
    {
        console.error("uvui提示：".concat(err));
    }
}

function randomArray() {
    var array2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return array2.sort(function() {
        return Math.random() - .5;
    });
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength) {
        var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " ";
        if (Object.prototype.toString.call(fillString) !== "[object String]") {
            throw new TypeError("fillString must be String");
        }
        var str = this;
        if (str.length >= maxLength) return String(str);
        var fillLength = maxLength - str.length;
        var times2 = Math.ceil(fillLength / fillString.length);
        while (times2 >>= 1) {
            fillString += fillString;
            if (times2 === 1) {
                fillString += fillString;
            }
        }
        return fillString.slice(0, fillLength) + str;
    };
}

function timeFormat() {
    var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yyyy-mm-dd";
    var date2;
    if (!dateTime) {
        date2 = /*   */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
        date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
        date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
        date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
        date2 = new Date(dateTime);
    }
    var timeSource = {
        y: date2.getFullYear().toString(),
        // 年
        m: (date2.getMonth() + 1).toString().padStart(2, "0"),
        // 月
        d: date2.getDate().toString().padStart(2, "0"),
        // 日
        h: date2.getHours().toString().padStart(2, "0"),
        // 时
        M: date2.getMinutes().toString().padStart(2, "0"),
        // 分
        s: date2.getSeconds().toString().padStart(2, "0")
    };
    for (var key in timeSource) {
        var _ref25 = new RegExp("".concat(key, "+")).exec(formatStr) || [], _ref26 = _slicedToArray2(_ref25, 1), ret = _ref26[0];
        if (ret) {
            var beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
            formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
        }
    }
    return formatStr;
}

function timeFrom() {
    var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yyyy-mm-dd";
    if (timestamp == null) timestamp = Number(/*   */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10) timestamp *= 1e3;
    var timer = /*   */ new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    var tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;

      case timer >= 300 && timer < 3600:
        tips = "".concat(parseInt(timer / 60), "分钟前");
        break;

      case timer >= 3600 && timer < 86400:
        tips = "".concat(parseInt(timer / 3600), "小时前");
        break;

      case timer >= 86400 && timer < 2592e3:
        tips = "".concat(parseInt(timer / 86400), "天前");
        break;

      default:
        if (format === false) {
            if (timer >= 2592e3 && timer < 365 * 86400) {
                tips = "".concat(parseInt(timer / (86400 * 30)), "个月前");
            } else {
                tips = "".concat(parseInt(timer / (86400 * 365)), "年前");
            }
        } else {
            tips = timeFormat(timestamp, format);
        }
    }
    return tips;
}

function trim(str) {
    var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "both";
    str = String(str);
    if (pos == "both") {
        return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
        return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
        return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
        return str.replace(/\s+/g, "");
    }
    return str;
}

function queryParams() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "brackets";
    var prefix = isPrefix ? "?" : "";
    var _result = [];
    if ([ "indices", "brackets", "repeat", "comma" ].indexOf(arrayFormat) == -1) arrayFormat = "brackets";
    var _loop5 = function _loop5(key) {
        var value2 = data[key];
        if ([ "", void 0, null ].indexOf(value2) >= 0) {
            return 1;
            // continue
                }
        if (value2.constructor === Array) {
            switch (arrayFormat) {
              case "indices":
                for (var i2 = 0; i2 < value2.length; i2++) {
                    _result.push("".concat(key, "[").concat(i2, "]=").concat(value2[i2]));
                }
                break;

              case "brackets":
                value2.forEach(function(_value) {
                    _result.push("".concat(key, "[]=").concat(_value));
                });
                break;

              case "repeat":
                value2.forEach(function(_value) {
                    _result.push("".concat(key, "=").concat(_value));
                });
                break;

              case "comma":
                var commaStr = "";
                value2.forEach(function(_value) {
                    commaStr += (commaStr ? "," : "") + _value;
                });
                _result.push("".concat(key, "=").concat(commaStr));
                break;

              default:
                value2.forEach(function(_value) {
                    _result.push("".concat(key, "[]=").concat(_value));
                });
            }
        } else {
            _result.push("".concat(key, "=").concat(value2));
        }
    };
    for (var key in data) {
        if (_loop5(key)) continue;
    }
    return _result.length ? prefix + _result.join("&") : "";
}

function toast(title) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2e3;
    index$1.showToast({
        title: String(title),
        icon: "none",
        duration: duration
    });
}

function type2icon() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "success";
    var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if ([ "primary", "info", "error", "warning", "success" ].indexOf(type) == -1) type = "success";
    var iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;

      case "info":
        iconName = "info-circle";
        break;

      case "error":
        iconName = "close-circle";
        break;

      case "warning":
        iconName = "error-circle";
        break;

      case "success":
        iconName = "checkmark-circle";
        break;

      default:
        iconName = "checkmark-circle";
    }
    if (fill) iconName += "-fill";
    return iconName;
}

function priceFormat(number2) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
    var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";
    number2 = "".concat(number2).replace(/[^0-9+-Ee.]/g, "");
    var n2 = !isFinite(+number2) ? 0 : +number2;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    var dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    var s2 = "";
    s2 = (prec ? round(n2, prec) + "" : "".concat(Math.round(n2))).split(".");
    var re2 = /(-?\d+)(\d{3})/;
    while (re2.test(s2[0])) {
        s2[0] = s2[0].replace(re2, "$1".concat(sep, "$2"));
    }
    if ((s2[1] || "").length < prec) {
        s2[1] = s2[1] || "";
        s2[1] += new Array(prec - s2[1].length + 1).join("0");
    }
    return s2.join(dec);
}

function getDuration(value2) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var valueNum = parseInt(value2);
    if (unit) {
        if (/s$/.test(value2)) return value2;
        return value2 > 30 ? "".concat(value2, "ms") : "".concat(value2, "s");
    }
    if (/ms$/.test(value2)) return valueNum;
    if (/s$/.test(value2)) return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
}

function padZero(value2) {
    return "00".concat(value2).slice(-2);
}

function formValidate(instance, event) {
    var formItem = $parent.call(instance, "uv-form-item");
    var form = $parent.call(instance, "uv-form");
    if (formItem && form) {
        form.validateField(formItem.prop, function() {}, event);
    }
}

function getProperty(obj, key) {
    if (!obj) {
        return;
    }
    if (typeof key !== "string" || key === "") {
        return "";
    }
    if (key.indexOf(".") !== -1) {
        var keys = key.split(".");
        var firstObj = obj[keys[0]] || {};
        for (var i2 = 1; i2 < keys.length; i2++) {
            if (firstObj) {
                firstObj = firstObj[keys[i2]];
            }
        }
        return firstObj;
    }
    return obj[key];
}

function setProperty(obj, key, value2) {
    if (!obj) {
        return;
    }
    var _inFn = function inFn(_obj, keys, v2) {
        if (keys.length === 1) {
            _obj[keys[0]] = v2;
            return;
        }
        while (keys.length > 1) {
            var k = keys[0];
            if (!_obj[k] || _typeof2(_obj[k]) !== "object") {
                _obj[k] = {};
            }
            keys.shift();
            _inFn(_obj[k], keys, v2);
        }
    };
    if (typeof key !== "string" || key === "") ; else if (key.indexOf(".") !== -1) {
        var keys = key.split(".");
        _inFn(obj, keys, value2);
    } else {
        obj[key] = value2;
    }
}

function page() {
    var _a;
    var pages2 = getCurrentPages();
    var route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return "/".concat(route2 ? route2 : "");
}

function pages$1() {
    var pages2 = getCurrentPages();
    return pages2;
}

function getHistoryPage() {
    var back = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var pages2 = getCurrentPages();
    var len = pages2.length;
    return pages2[len - 1 + back];
}

function setConfig(_ref27) {
    var _ref27$props = _ref27.props, props2 = _ref27$props === void 0 ? {} : _ref27$props, _ref27$config = _ref27.config, config2 = _ref27$config === void 0 ? {} : _ref27$config, _ref27$color = _ref27.color, color = _ref27$color === void 0 ? {} : _ref27$color, _ref27$zIndex = _ref27.zIndex, zIndex = _ref27$zIndex === void 0 ? {} : _ref27$zIndex;
    var deepMerge2 = index$1.$uv.deepMerge;
    index$1.$uv.config = deepMerge2(index$1.$uv.config, config2);
    index$1.$uv.props = deepMerge2(index$1.$uv.props, props2);
    index$1.$uv.color = deepMerge2(index$1.$uv.color, color);
    index$1.$uv.zIndex = deepMerge2(index$1.$uv.zIndex, zIndex);
}

var index = /*   */ Object.freeze(/*   */ Object.defineProperty({
    __proto__: null,
    $parent: $parent,
    addStyle: addStyle,
    addUnit: addUnit,
    deepClone: deepClone,
    deepMerge: deepMerge,
    error: error,
    formValidate: formValidate,
    getDuration: getDuration,
    getHistoryPage: getHistoryPage,
    getProperty: getProperty,
    getPx: getPx,
    guid: guid,
    os: os$1,
    padZero: padZero,
    page: page,
    pages: pages$1,
    priceFormat: priceFormat,
    queryParams: queryParams,
    random: random,
    randomArray: randomArray,
    range: range,
    setConfig: setConfig,
    setProperty: setProperty,
    sleep: sleep,
    sys: sys,
    timeFormat: timeFormat,
    timeFrom: timeFrom,
    toast: toast,
    trim: trim,
    type2icon: type2icon
}, Symbol.toStringTag, {
    value: "Module"
}));

var Router = /* */ function() {
    function Router() {
        _classCallCheck2(this, Router);
        this.config = {
            type: "navigateTo",
            url: "",
            delta: 1,
            // navigateBack页面后退时,回退的层数
            params: {},
            // 传递的参数
            animationType: "pop-in",
            // 窗口动画,只在APP有效
            animationDuration: 300,
            // 窗口动画持续时间,单位毫秒,只在APP有效
            intercept: false,
            // 是否需要拦截
            events: {}
        };
        this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
        return _createClass2(Router, [ {
        key: "addRootPath",
        value: function addRootPath(url2) {
            return url2[0] === "/" ? url2 : "/".concat(url2);
        }
        // 整合路由参数
        }, {
        key: "mixinParam",
        value: function mixinParam(url2, params) {
            url2 = url2 && this.addRootPath(url2);
            var query = "";
            if (/.*\/.*\?.*=.*/.test(url2)) {
                query = queryParams(params, false);
                return url2 += "&".concat(query);
            }
            query = queryParams(params);
            return url2 += query;
        }
        // 对外的方法名称
        }, {
        key: "route",
        value: function() {
            var _route = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee() {
                var options, params, mergeConfig2, isNext, _args = arguments;
                return _regeneratorRuntime2().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                        params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                        mergeConfig2 = {};
                        if (typeof options === "string") {
                            mergeConfig2.url = this.mixinParam(options, params);
                            mergeConfig2.type = "navigateTo";
                        } else {
                            mergeConfig2 = deepMerge(this.config, options);
                            mergeConfig2.url = this.mixinParam(options.url, options.params);
                        }
                        if (!(mergeConfig2.url === page())) {
                            _context.next = 6;
                            break;
                        }
                        return _context.abrupt("return");

                      case 6:
                        if (params.intercept) {
                            mergeConfig2.intercept = params.intercept;
                        }
                        mergeConfig2.params = params;
                        mergeConfig2 = deepMerge(this.config, mergeConfig2);
                        if (!(typeof mergeConfig2.intercept === "function")) {
                            _context.next = 16;
                            break;
                        }
                        _context.next = 12;
                        return new Promise(function(resolve2, reject) {
                            mergeConfig2.intercept(mergeConfig2, resolve2);
                        });

                      case 12:
                        isNext = _context.sent;
                        isNext && this.openPage(mergeConfig2);
                        _context.next = 17;
                        break;

                      case 16:
                        this.openPage(mergeConfig2);

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                }, _callee, this);
            }));
            function route() {
                return _route.apply(this, arguments);
            }
            return route;
        }()
    }, {
        key: "openPage",
        value: function openPage(config2) {
            var url2 = config2.url, type = config2.type, delta = config2.delta, animationType = config2.animationType, animationDuration = config2.animationDuration, events = config2.events;
            if (config2.type == "navigateTo" || config2.type == "to") {
                index$1.navigateTo({
                    url: url2,
                    animationType: animationType,
                    animationDuration: animationDuration,
                    events: events
                });
            }
            if (config2.type == "redirectTo" || config2.type == "redirect") {
                index$1.redirectTo({
                    url: url2
                });
            }
            if (config2.type == "switchTab" || config2.type == "tab") {
                index$1.switchTab({
                    url: url2
                });
            }
            if (config2.type == "reLaunch" || config2.type == "launch") {
                index$1.reLaunch({
                    url: url2
                });
            }
            if (config2.type == "navigateBack" || config2.type == "back") {
                index$1.navigateBack({
                    delta: delta
                });
            }
        }
    } ]);
}();

var route = new Router().route;

var timeout = null;

function debounce(func2) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (timeout !== null) clearTimeout(timeout);
    if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function() {
            timeout = null;
        }, wait);
        if (callNow) typeof func2 === "function" && func2();
    } else {
        timeout = setTimeout(function() {
            typeof func2 === "function" && func2();
        }, wait);
    }
}

var flag;

function throttle(func2) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (immediate) {
        if (!flag) {
            flag = true;
            typeof func2 === "function" && func2();
            setTimeout(function() {
                flag = false;
            }, wait);
        }
    } else if (!flag) {
        flag = true;
        setTimeout(function() {
            flag = false;
            typeof func2 === "function" && func2();
        }, wait);
    }
}

var mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
        // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
        customStyle: {
            type: [ Object, String ],
            default: function _default() {
                return {};
            }
        },
        customClass: {
            type: String,
            default: ""
        },
        // 跳转的页面路径
        url: {
            type: String,
            default: ""
        },
        // 页面跳转的类型
        linkType: {
            type: String,
            default: "navigateTo"
        }
    },
    data: function data() {
        return {};
    },
    onLoad: function onLoad() {
        this.$uv.getRect = this.$uvGetRect;
    },
    created: function created() {
        this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
        $uv: function $uv() {
            var _a, _b;
            return _objectSpread2(_objectSpread2({}, index), {}, {
                test: test,
                route: route,
                debounce: debounce,
                throttle: throttle,
                unit: (_b = (_a = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
            });
        },
        /**
     * 生成bem规则类名
     * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
     * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
     * @param {String} name 组件名称
     * @param {Array} fixed 一直会存在的类名
     * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
     * @returns {Array|string}
     */
        bem: function bem() {
            return function(name, fixed, change) {
                var _this3 = this;
                var prefix = "uv-".concat(name, "--");
                var classes = {};
                if (fixed) {
                    fixed.map(function(item) {
                        classes[prefix + _this3[item]] = true;
                    });
                }
                if (change) {
                    change.map(function(item) {
                        _this3[item] ? classes[prefix + item] = _this3[item] : delete classes[prefix + item];
                    });
                }
                return Object.keys(classes);
            };
        }
    },
    methods: {
        // 跳转某一个页面
        openPage: function openPage() {
            var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "url";
            var url2 = this[urlKey];
            if (url2) {
                index$1[this.linkType]({
                    url: url2
                });
            }
        },
        // 查询节点信息
        // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
        // 解决办法为在组件根部再套一个没有任何作用的view元素
        $uvGetRect: function $uvGetRect(selector, all) {
            var _this4 = this;
            return new Promise(function(resolve2) {
                index$1.createSelectorQuery().in(_this4)[all ? "selectAll" : "select"](selector).boundingClientRect(function(rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve2(rect);
                    }
                    if (!all && rect) {
                        resolve2(rect);
                    }
                }).exec();
            });
        },
        getParentData: function getParentData() {
            var _this5 = this;
            var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            if (!this.parent) this.parent = {};
            this.parent = this.$uv.$parent.call(this, parentName);
            if (this.parent.children) {
                this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
            }
            if (this.parent && this.parentData) {
                Object.keys(this.parentData).map(function(key) {
                    _this5.parentData[key] = _this5.parent[key];
                });
            }
        },
        // 阻止事件冒泡
        preventEvent: function preventEvent(e2) {
            e2 && typeof e2.stopPropagation === "function" && e2.stopPropagation();
        },
        // 空操作
        noop: function noop(e2) {
            this.preventEvent(e2);
        }
    },
    onReachBottom: function onReachBottom() {
        index$1.$emit("uvOnReachBottom");
    },
    beforeDestroy: function beforeDestroy() {
        var _this6 = this;
        if (this.parent && array(this.parent.children)) {
            var childrenList = this.parent.children;
            childrenList.map(function(child, index2) {
                if (child === _this6) {
                    childrenList.splice(index2, 1);
                }
            });
        }
    },
    // 兼容vue3
    unmounted: function unmounted() {
        var _this7 = this;
        if (this.parent && array(this.parent.children)) {
            var childrenList = this.parent.children;
            childrenList.map(function(child, index2) {
                if (child === _this7) {
                    childrenList.splice(index2, 1);
                }
            });
        }
    }
};

var mpMixin = {
    // 将自定义节点设置成虚拟的（去掉自定义组件包裹层），更加接近Vue组件的表现，能更好的使用flex属性
    options: {
        virtualHost: true
    }
};

var mpShare = {
    onLoad: function onLoad() {
        index$1.$uv.mpShare = {
            title: "",
            // 默认为小程序名称
            path: "",
            // 默认为当前页面路径
            imageUrl: ""
        };
    },
    onShareAppMessage: function onShareAppMessage() {
        return index$1.$uv.mpShare;
    }
};

function colorGradient() {
    var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rgb(0, 0, 0)";
    var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "rgb(255, 255, 255)";
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var startRGB = hexToRgb(startColor, false);
    var startR = startRGB[0];
    var startG = startRGB[1];
    var startB = startRGB[2];
    var endRGB = hexToRgb(endColor, false);
    var endR = endRGB[0];
    var endG = endRGB[1];
    var endB = endRGB[2];
    var sR = (endR - startR) / step;
    var sG = (endG - startG) / step;
    var sB = (endB - startB) / step;
    var colorArr = [];
    for (var i2 = 0; i2 < step; i2++) {
        var hex = rgbToHex("rgb(".concat(Math.round(sR * i2 + startR), ",").concat(Math.round(sG * i2 + startG), ",").concat(Math.round(sB * i2 + startB), ")"));
        if (i2 === 0) hex = rgbToHex(startColor);
        if (i2 === step - 1) hex = rgbToHex(endColor);
        colorArr.push(hex);
    }
    return colorArr;
}

function hexToRgb(sColor) {
    var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i2 = 1; i2 < 4; i2 += 1) {
                sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
            }
            sColor = sColorNew;
        }
        var sColorChange = [];
        for (var _i9 = 1; _i9 < 7; _i9 += 2) {
            sColorChange.push(parseInt("0x".concat(sColor.slice(_i9, _i9 + 2))));
        }
        if (!str) {
            return sColorChange;
        }
        return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
    if (/^(rgb|RGB)/.test(sColor)) {
        var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        return arr.map(function(val) {
            return Number(val);
        });
    }
    return sColor;
}

function rgbToHex(rgb) {
    var _this = rgb;
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
        var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i2 = 0; i2 < aColor.length; i2++) {
            var hex = Number(aColor[i2]).toString(16);
            hex = String(hex).length == 1 ? "".concat(0, hex) : hex;
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = _this;
        }
        return strHex;
    }
    if (reg.test(_this)) {
        var aNum = _this.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return _this;
        }
        if (aNum.length === 3) {
            var numHex = "#";
            for (var _i10 = 0; _i10 < aNum.length; _i10 += 1) {
                numHex += aNum[_i10] + aNum[_i10];
            }
            return numHex;
        }
    } else {
        return _this;
    }
}

function colorToRgba(color, alpha) {
    color = rgbToHex(color);
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = String(color).toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i2 = 1; i2 < 4; i2 += 1) {
                sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
            }
            sColor = sColorNew;
        }
        var sColorChange = [];
        for (var _i11 = 1; _i11 < 7; _i11 += 2) {
            sColorChange.push(parseInt("0x".concat(sColor.slice(_i11, _i11 + 2))));
        }
        return "rgba(".concat(sColorChange.join(","), ",").concat(alpha, ")");
    }
    return sColor;
}

var version = "1.1.20";

{
    console.log("\n %c uvui V".concat(version, " https://www.uvui.cn/ \n\n"), "color: #ffffff; background: #3c9cff; padding:5px 0; border-radius: 5px;");
}

var config$1 = {
    v: version,
    version: version,
    // 主题名称
    type: [ "primary", "success", "info", "error", "warning" ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
        "uv-primary": "#2979ff",
        "uv-warning": "#ff9900",
        "uv-success": "#19be6b",
        "uv-error": "#fa3534",
        "uv-info": "#909399",
        "uv-main-color": "#303133",
        "uv-content-color": "#606266",
        "uv-tips-color": "#909399",
        "uv-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
};

var platform = "none";

platform = "vue3";

platform = "weixin";

platform = "mp";

var platform$1 = platform;

var $uv = _objectSpread2(_objectSpread2({
    route: route,
    config: config$1,
    test: test,
    date: timeFormat
}, index), {}, {
    colorGradient: colorGradient,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    colorToRgba: colorToRgba,
    http: new Request(),
    debounce: debounce,
    throttle: throttle,
    platform: platform$1,
    mixin: mixin,
    mpMixin: mpMixin
});

index$1.$uv = $uv;

var install = function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _a, _b;
    var cloneMixin = deepClone(mixin);
    (_a = cloneMixin == null ? void 0 : cloneMixin.props) == null ? true : delete _a.customClass;
    (_b = cloneMixin == null ? void 0 : cloneMixin.props) == null ? true : delete _b.customStyle;
    Vue.mixin(cloneMixin);
    if (options.mpShare) {
        Vue.mixin(mpShare);
    }
    Vue.config.globalProperties.$uv = $uv;
};

var uvUI = {
    install: install
};

var isVue2 = false;

function set(target, key, val) {
    if (Array.isArray(target)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
    }
    target[key] = val;
    return val;
}

function del(target, key) {
    if (Array.isArray(target)) {
        target.splice(key, 1);
        return;
    }
    delete target[key];
}

/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ var activePinia;

var setActivePinia = function setActivePinia(pinia) {
    return activePinia = pinia;
};

var piniaSymbol = Symbol("pinia");

function isPlainObject(o2) {
    return o2 && _typeof2(o2) === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}

var MutationType;

(function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));

var IS_CLIENT = typeof window !== "undefined";

var USE_DEVTOOLS = IS_CLIENT;

var componentStateTypes = [];

var getStoreType = function getStoreType(id) {
    return "🍍 " + id;
};

function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
        componentStateTypes.push(getStoreType(store.$id));
    }
}

function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    var actions = actionNames.reduce(function(storeActions, actionName) {
        storeActions[actionName] = toRaw(store)[actionName];
        return storeActions;
    }, {});
    var _loop6 = function _loop6(actionName) {
        store[actionName] = function() {
            var trackedStore = wrapWithProxy ? new Proxy(store, {
                get: function get() {
                    return Reflect.get.apply(Reflect, arguments);
                },
                set: function set() {
                    return Reflect.set.apply(Reflect, arguments);
                }
            }) : store;
            var retValue = actions[actionName].apply(trackedStore, arguments);
            return retValue;
        };
    };
    for (var actionName in actions) {
        _loop6(actionName);
    }
}

function devtoolsPlugin(_ref28) {
    var app = _ref28.app, store = _ref28.store, options = _ref28.options;
    if (store.$id.startsWith("__hot:")) {
        return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    var originalHotUpdate = store._hotUpdate;
    toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(app, 
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store);
}

function createPinia() {
    var scope = effectScope(true);
    var state = scope.run(function() {
        return ref({});
    });
    var _p2 = [];
    var toBeInstalled = [];
    var pinia = markRaw({
        install: function install(app) {
            setActivePinia(pinia);
            {
                pinia._a = app;
                app.provide(piniaSymbol, pinia);
                app.config.globalProperties.$pinia = pinia;
                toBeInstalled.forEach(function(plugin2) {
                    return _p2.push(plugin2);
                });
                toBeInstalled = [];
            }
        },
        use: function use(plugin2) {
            if (!this._a && !isVue2) {
                toBeInstalled.push(plugin2);
            } else {
                _p2.push(plugin2);
            }
            return this;
        },
        _p: _p2,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: scope,
        _s: /*   */ new Map(),
        state: state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
        pinia.use(devtoolsPlugin);
    }
    return pinia;
}

function patchObject(newState, oldState) {
    for (var key in oldState) {
        var subPatch = oldState[key];
        if (!(key in newState)) {
            continue;
        }
        var targetValue = newState[key];
        if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
            newState[key] = patchObject(targetValue, subPatch);
        } else {
            {
                newState[key] = subPatch;
            }
        }
    }
    return newState;
}

var noop = function noop() {};

function addSubscription(subscriptions, callback, detached) {
    var onCleanup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
    subscriptions.push(callback);
    var removeSubscription = function removeSubscription() {
        var idx = subscriptions.indexOf(callback);
        if (idx > -1) {
            subscriptions.splice(idx, 1);
            onCleanup();
        }
    };
    if (!detached && getCurrentScope()) {
        onScopeDispose(removeSubscription);
    }
    return removeSubscription;
}

function triggerSubscriptions(subscriptions) {
    for (var _len26 = arguments.length, args = new Array(_len26 > 1 ? _len26 - 1 : 0), _key34 = 1; _key34 < _len26; _key34++) {
        args[_key34 - 1] = arguments[_key34];
    }
    subscriptions.slice().forEach(function(callback) {
        callback.apply(void 0, args);
    });
}

var fallbackRunWithContext = function fallbackRunWithContext(fn) {
    return fn();
};

function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
        patchToApply.forEach(function(value2, key) {
            return target.set(key, value2);
        });
    }
    if (target instanceof Set && patchToApply instanceof Set) {
        patchToApply.forEach(target.add, target);
    }
    for (var key in patchToApply) {
        if (!patchToApply.hasOwnProperty(key)) continue;
        var subPatch = patchToApply[key];
        var targetValue = target[key];
        if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
            target[key] = mergeReactiveObjects(targetValue, subPatch);
        } else {
            target[key] = subPatch;
        }
    }
    return target;
}

var skipHydrateSymbol = Symbol("pinia:skipHydration");

function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}

var assign = Object.assign;

function isComputed(o2) {
    return !!(isRef(o2) && o2.effect);
}

function createOptionsStore(id, options, pinia, hot) {
    var state = options.state, actions = options.actions, getters = options.getters;
    var initialState = pinia.state.value[id];
    var store;
    function setup() {
        if (!initialState && !hot) {
            {
                pinia.state.value[id] = state ? state() : {};
            }
        }
        var localState = hot ? 
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        toRefs(ref(state ? state() : {}).value) : toRefs(pinia.state.value[id]);
        return assign(localState, actions, Object.keys(getters || {}).reduce(function(computedGetters, name) {
            if (name in localState) {
                console.warn('[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "'.concat(name, '" in store "').concat(id, '".'));
            }
            computedGetters[name] = markRaw(computed(function() {
                setActivePinia(pinia);
                var store2 = pinia._s.get(id);
                return getters[name].call(store2, store2);
            }));
            return computedGetters;
        }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
}

function createSetupStore($id, setup) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var pinia = arguments.length > 3 ? arguments[3] : undefined;
    var hot = arguments.length > 4 ? arguments[4] : undefined;
    var isOptionsStore = arguments.length > 5 ? arguments[5] : undefined;
    var scope;
    var optionsForPlugin = assign({
        actions: {}
    }, options);
    if (!pinia._e.active) {
        throw new Error("Pinia destroyed");
    }
    var $subscribeOptions = {
        deep: true
    };
    {
        $subscribeOptions.onTrigger = function(event) {
            if (isListening) {
                debuggerEvents = event;
            } else if (isListening == false && !store._hotUpdating) {
                if (Array.isArray(debuggerEvents)) {
                    debuggerEvents.push(event);
                } else {
                    console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
                }
            }
        };
    }
    var isListening;
    var isSyncListening;
    var subscriptions = [];
    var actionSubscriptions = [];
    var debuggerEvents;
    var initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
        {
            pinia.state.value[$id] = {};
        }
    }
    var hotState = ref({});
    var activeListener;
    function $patch(partialStateOrMutator) {
        var subscriptionMutation;
        isListening = isSyncListening = false;
        {
            debuggerEvents = [];
        }
        if (typeof partialStateOrMutator === "function") {
            partialStateOrMutator(pinia.state.value[$id]);
            subscriptionMutation = {
                type: MutationType.patchFunction,
                storeId: $id,
                events: debuggerEvents
            };
        } else {
            mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
            subscriptionMutation = {
                type: MutationType.patchObject,
                payload: partialStateOrMutator,
                storeId: $id,
                events: debuggerEvents
            };
        }
        var myListenerId = activeListener = Symbol();
        nextTick$1().then(function() {
            if (activeListener === myListenerId) {
                isListening = true;
            }
        });
        isSyncListening = true;
        triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    var $reset = isOptionsStore ? function $reset2() {
        var state = options.state;
        var newState = state ? state() : {};
        this.$patch(function($state) {
            assign($state, newState);
        });
    } : /* istanbul ignore next */
    function() {
        throw new Error('🍍: Store "'.concat($id, '" is built using the setup syntax and does not implement $reset().'));
    };
    function $dispose() {
        scope.stop();
        subscriptions = [];
        actionSubscriptions = [];
        pinia._s.delete($id);
    }
    function wrapAction(name, action) {
        return function() {
            setActivePinia(pinia);
            var args = Array.from(arguments);
            var afterCallbackList = [];
            var onErrorCallbackList = [];
            function after(callback) {
                afterCallbackList.push(callback);
            }
            function onError(callback) {
                onErrorCallbackList.push(callback);
            }
            triggerSubscriptions(actionSubscriptions, {
                args: args,
                name: name,
                store: store,
                after: after,
                onError: onError
            });
            var ret;
            try {
                ret = action.apply(this && this.$id === $id ? this : store, args);
            } catch (error2) {
                triggerSubscriptions(onErrorCallbackList, error2);
                throw error2;
            }
            if (ret instanceof Promise) {
                return ret.then(function(value2) {
                    triggerSubscriptions(afterCallbackList, value2);
                    return value2;
                }).catch(function(error2) {
                    triggerSubscriptions(onErrorCallbackList, error2);
                    return Promise.reject(error2);
                });
            }
            triggerSubscriptions(afterCallbackList, ret);
            return ret;
        };
    }
    var _hmrPayload = /*   */ markRaw({
        actions: {},
        getters: {},
        state: [],
        hotState: hotState
    });
    var partialStore = {
        _p: pinia,
        // _s: scope,
        $id: $id,
        $onAction: addSubscription.bind(null, actionSubscriptions),
        $patch: $patch,
        $reset: $reset,
        $subscribe: function $subscribe(callback) {
            var options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var removeSubscription = addSubscription(subscriptions, callback, options2.detached, function() {
                return stopWatcher();
            });
            var stopWatcher = scope.run(function() {
                return watch(function() {
                    return pinia.state.value[$id];
                }, function(state) {
                    if (options2.flush === "sync" ? isSyncListening : isListening) {
                        callback({
                            storeId: $id,
                            type: MutationType.direct,
                            events: debuggerEvents
                        }, state);
                    }
                }, assign({}, $subscribeOptions, options2));
            });
            return removeSubscription;
        },
        $dispose: $dispose
    };
    var store = reactive(assign({
        _hmrPayload: _hmrPayload,
        _customProperties: markRaw(/*   */ new Set())
    }, partialStore));
    pinia._s.set($id, store);
    var runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    var setupStore = runWithContext(function() {
        return pinia._e.run(function() {
            return (scope = effectScope()).run(setup);
        });
    });
    for (var key in setupStore) {
        var prop = setupStore[key];
        if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
            if (hot) {
                set(hotState.value, key, toRef(setupStore, key));
            } else if (!isOptionsStore) {
                if (initialState && shouldHydrate(prop)) {
                    if (isRef(prop)) {
                        prop.value = initialState[key];
                    } else {
                        mergeReactiveObjects(prop, initialState[key]);
                    }
                }
                {
                    pinia.state.value[$id][key] = prop;
                }
            }
            {
                _hmrPayload.state.push(key);
            }
        } else if (typeof prop === "function") {
            var actionValue = hot ? prop : wrapAction(key, prop);
            {
                setupStore[key] = actionValue;
            }
            {
                _hmrPayload.actions[key] = prop;
            }
            optionsForPlugin.actions[key] = prop;
        } else {
            if (isComputed(prop)) {
                _hmrPayload.getters[key] = isOptionsStore ? 
                // @ts-expect-error
                options.getters[key] : prop;
                if (IS_CLIENT) {
                    var getters = setupStore._getters || (
                    // @ts-expect-error: same
                    setupStore._getters = markRaw([]));
                    getters.push(key);
                }
            }
        }
    }
    {
        assign(store, setupStore);
        assign(toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
        get: function get() {
            return hot ? hotState.value : pinia.state.value[$id];
        },
        set: function set(state) {
            if (hot) {
                throw new Error("cannot set hotState");
            }
            $patch(function($state) {
                assign($state, state);
            });
        }
    });
    {
        store._hotUpdate = markRaw(function(newStore) {
            store._hotUpdating = true;
            newStore._hmrPayload.state.forEach(function(stateKey) {
                if (stateKey in store.$state) {
                    var newStateTarget = newStore.$state[stateKey];
                    var oldStateSource = store.$state[stateKey];
                    if (_typeof2(newStateTarget) === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
                        patchObject(newStateTarget, oldStateSource);
                    } else {
                        newStore.$state[stateKey] = oldStateSource;
                    }
                }
                set(store, stateKey, toRef(newStore.$state, stateKey));
            });
            Object.keys(store.$state).forEach(function(stateKey) {
                if (!(stateKey in newStore.$state)) {
                    del(store, stateKey);
                }
            });
            isListening = false;
            isSyncListening = false;
            pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
            isSyncListening = true;
            nextTick$1().then(function() {
                isListening = true;
            });
            for (var actionName in newStore._hmrPayload.actions) {
                var action = newStore[actionName];
                set(store, actionName, wrapAction(actionName, action));
            }
            var _loop7 = function _loop7() {
                var getter = newStore._hmrPayload.getters[getterName];
                var getterValue = isOptionsStore ? 
                // special handling of options api
                computed(function() {
                    setActivePinia(pinia);
                    return getter.call(store, store);
                }) : getter;
                set(store, getterName, getterValue);
            };
            for (var getterName in newStore._hmrPayload.getters) {
                _loop7();
            }
            Object.keys(store._hmrPayload.getters).forEach(function(key) {
                if (!(key in newStore._hmrPayload.getters)) {
                    del(store, key);
                }
            });
            Object.keys(store._hmrPayload.actions).forEach(function(key) {
                if (!(key in newStore._hmrPayload.actions)) {
                    del(store, key);
                }
            });
            store._hmrPayload = newStore._hmrPayload;
            store._getters = newStore._getters;
            store._hotUpdating = false;
        });
    }
    if (USE_DEVTOOLS) {
        var nonEnumerable = {
            writable: true,
            configurable: true,
            // avoid warning on devtools trying to display this property
            enumerable: false
        };
        [ "_p", "_hmrPayload", "_getters", "_customProperties" ].forEach(function(p2) {
            Object.defineProperty(store, p2, assign({
                value: store[p2]
            }, nonEnumerable));
        });
    }
    pinia._p.forEach(function(extender) {
        if (USE_DEVTOOLS) {
            var extensions = scope.run(function() {
                return extender({
                    store: store,
                    app: pinia._a,
                    pinia: pinia,
                    options: optionsForPlugin
                });
            });
            Object.keys(extensions || {}).forEach(function(key) {
                return store._customProperties.add(key);
            });
            assign(store, extensions);
        } else {
            assign(store, scope.run(function() {
                return extender({
                    store: store,
                    app: pinia._a,
                    pinia: pinia,
                    options: optionsForPlugin
                });
            }));
        }
    });
    if (store.$state && _typeof2(store.$state) === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
        console.warn('[🍍]: The "state" must be a plain object. It cannot be\n\tstate: () => new MyClass()\nFound in store "'.concat(store.$id, '".'));
    }
    if (initialState && isOptionsStore && options.hydrate) {
        options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
}

function defineStore(idOrOptions, setup, setupOptions) {
    var id;
    var options;
    var isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
        id = idOrOptions;
        options = isSetupStore ? setupOptions : setup;
    } else {
        options = idOrOptions;
        id = idOrOptions.id;
        if (typeof id !== "string") {
            throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
        }
    }
    function useStore(pinia, hot) {
        var hasContext = hasInjectionContext();
        pinia = 
        // in test mode, ignore the argument provided as we can always retrieve a
        // pinia instance with getActivePinia()
        pinia || (hasContext ? inject(piniaSymbol, null) : null);
        if (pinia) setActivePinia(pinia);
        if (!activePinia) {
            throw new Error('[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?\nSee https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.\nThis will fail in production.');
        }
        pinia = activePinia;
        if (!pinia._s.has(id)) {
            if (isSetupStore) {
                createSetupStore(id, setup, options, pinia);
            } else {
                createOptionsStore(id, options, pinia);
            }
            {
                useStore._pinia = pinia;
            }
        }
        var store = pinia._s.get(id);
        if (hot) {
            var hotId = "__hot:" + id;
            var newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
            hot._hotUpdate(newStore);
            delete pinia.state.value[hotId];
            pinia._s.delete(hotId);
        }
        if (IS_CLIENT) {
            var currentInstance2 = getCurrentInstance();
            if (currentInstance2 && currentInstance2.proxy && 
            // avoid adding stores that are just built for hot module replacement
            !hot) {
                var vm = currentInstance2.proxy;
                var cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
                cache[id] = store;
            }
        }
        return store;
    }
    useStore.$id = id;
    return useStore;
}

var createHook = function createHook(lifecycle) {
    return function(hook) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstance();
        !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
    };
};

var onLoad = /*   */ createHook(ON_LOAD);

var onReady = /*   */ createHook(ON_READY);

var onUnload = /*   */ createHook(ON_UNLOAD);

var onReachBottom = /*   */ createHook(ON_REACH_BOTTOM);

var icons = {
    "uvicon-level": "e68f",
    "uvicon-checkbox-mark": "e659",
    "uvicon-folder": "e694",
    "uvicon-movie": "e67c",
    "uvicon-star-fill": "e61e",
    "uvicon-star": "e618",
    "uvicon-phone-fill": "e6ac",
    "uvicon-phone": "e6ba",
    "uvicon-apple-fill": "e635",
    "uvicon-backspace": "e64d",
    "uvicon-attach": "e640",
    "uvicon-empty-data": "e671",
    "uvicon-empty-address": "e68a",
    "uvicon-empty-favor": "e662",
    "uvicon-empty-car": "e657",
    "uvicon-empty-order": "e66b",
    "uvicon-empty-list": "e672",
    "uvicon-empty-search": "e677",
    "uvicon-empty-permission": "e67d",
    "uvicon-empty-news": "e67e",
    "uvicon-empty-history": "e685",
    "uvicon-empty-coupon": "e69b",
    "uvicon-empty-page": "e60e",
    "uvicon-empty-wifi-off": "e6cc",
    "uvicon-reload": "e627",
    "uvicon-order": "e695",
    "uvicon-server-man": "e601",
    "uvicon-search": "e632",
    "uvicon-more-dot-fill": "e66f",
    "uvicon-scan": "e631",
    "uvicon-map": "e665",
    "uvicon-map-fill": "e6a8",
    "uvicon-tags": "e621",
    "uvicon-tags-fill": "e613",
    "uvicon-eye": "e664",
    "uvicon-eye-fill": "e697",
    "uvicon-eye-off": "e69c",
    "uvicon-eye-off-outline": "e688",
    "uvicon-mic": "e66d",
    "uvicon-mic-off": "e691",
    "uvicon-calendar": "e65c",
    "uvicon-trash": "e623",
    "uvicon-trash-fill": "e6ce",
    "uvicon-play-left": "e6bf",
    "uvicon-play-right": "e6b3",
    "uvicon-minus": "e614",
    "uvicon-plus": "e625",
    "uvicon-info-circle": "e69f",
    "uvicon-info-circle-fill": "e6a7",
    "uvicon-question-circle": "e622",
    "uvicon-question-circle-fill": "e6bc",
    "uvicon-close": "e65a",
    "uvicon-checkmark": "e64a",
    "uvicon-checkmark-circle": "e643",
    "uvicon-checkmark-circle-fill": "e668",
    "uvicon-setting": "e602",
    "uvicon-setting-fill": "e6d0",
    "uvicon-heart": "e6a2",
    "uvicon-heart-fill": "e68b",
    "uvicon-camera": "e642",
    "uvicon-camera-fill": "e650",
    "uvicon-more-circle": "e69e",
    "uvicon-more-circle-fill": "e684",
    "uvicon-chat": "e656",
    "uvicon-chat-fill": "e63f",
    "uvicon-bag": "e647",
    "uvicon-error-circle": "e66e",
    "uvicon-error-circle-fill": "e655",
    "uvicon-close-circle": "e64e",
    "uvicon-close-circle-fill": "e666",
    "uvicon-share": "e629",
    "uvicon-share-fill": "e6bb",
    "uvicon-share-square": "e6c4",
    "uvicon-shopping-cart": "e6cb",
    "uvicon-shopping-cart-fill": "e630",
    "uvicon-bell": "e651",
    "uvicon-bell-fill": "e604",
    "uvicon-list": "e690",
    "uvicon-list-dot": "e6a9",
    "uvicon-zhifubao-circle-fill": "e617",
    "uvicon-weixin-circle-fill": "e6cd",
    "uvicon-weixin-fill": "e620",
    "uvicon-qq-fill": "e608",
    "uvicon-qq-circle-fill": "e6b9",
    "uvicon-moments-circel-fill": "e6c2",
    "uvicon-moments": "e6a0",
    "uvicon-car": "e64f",
    "uvicon-car-fill": "e648",
    "uvicon-warning-fill": "e6c7",
    "uvicon-warning": "e6c1",
    "uvicon-clock-fill": "e64b",
    "uvicon-clock": "e66c",
    "uvicon-edit-pen": "e65d",
    "uvicon-edit-pen-fill": "e679",
    "uvicon-email": "e673",
    "uvicon-email-fill": "e683",
    "uvicon-minus-circle": "e6a5",
    "uvicon-plus-circle": "e603",
    "uvicon-plus-circle-fill": "e611",
    "uvicon-file-text": "e687",
    "uvicon-file-text-fill": "e67f",
    "uvicon-pushpin": "e6d1",
    "uvicon-pushpin-fill": "e6b6",
    "uvicon-grid": "e68c",
    "uvicon-grid-fill": "e698",
    "uvicon-play-circle": "e6af",
    "uvicon-play-circle-fill": "e62a",
    "uvicon-pause-circle-fill": "e60c",
    "uvicon-pause": "e61c",
    "uvicon-pause-circle": "e696",
    "uvicon-gift-fill": "e6b0",
    "uvicon-gift": "e680",
    "uvicon-kefu-ermai": "e660",
    "uvicon-server-fill": "e610",
    "uvicon-coupon-fill": "e64c",
    "uvicon-coupon": "e65f",
    "uvicon-integral": "e693",
    "uvicon-integral-fill": "e6b1",
    "uvicon-home-fill": "e68e",
    "uvicon-home": "e67b",
    "uvicon-account": "e63a",
    "uvicon-account-fill": "e653",
    "uvicon-thumb-down-fill": "e628",
    "uvicon-thumb-down": "e60a",
    "uvicon-thumb-up": "e612",
    "uvicon-thumb-up-fill": "e62c",
    "uvicon-lock-fill": "e6a6",
    "uvicon-lock-open": "e68d",
    "uvicon-lock-opened-fill": "e6a1",
    "uvicon-lock": "e69d",
    "uvicon-red-packet": "e6c3",
    "uvicon-photo-fill": "e6b4",
    "uvicon-photo": "e60d",
    "uvicon-volume-off-fill": "e6c8",
    "uvicon-volume-off": "e6bd",
    "uvicon-volume-fill": "e624",
    "uvicon-volume": "e605",
    "uvicon-download": "e670",
    "uvicon-arrow-up-fill": "e636",
    "uvicon-arrow-down-fill": "e638",
    "uvicon-play-left-fill": "e6ae",
    "uvicon-play-right-fill": "e6ad",
    "uvicon-arrow-downward": "e634",
    "uvicon-arrow-leftward": "e63b",
    "uvicon-arrow-rightward": "e644",
    "uvicon-arrow-upward": "e641",
    "uvicon-arrow-down": "e63e",
    "uvicon-arrow-right": "e63c",
    "uvicon-arrow-left": "e646",
    "uvicon-arrow-up": "e633",
    "uvicon-skip-back-left": "e6c5",
    "uvicon-skip-forward-right": "e61f",
    "uvicon-arrow-left-double": "e637",
    "uvicon-man": "e675",
    "uvicon-woman": "e626",
    "uvicon-en": "e6b8",
    "uvicon-twitte": "e607",
    "uvicon-twitter-circle-fill": "e6cf"
};

var props$9 = {
    props: _objectSpread2({
        // 图标类名
        name: {
            type: String,
            default: ""
        },
        // 图标颜色，可接受主题色
        color: {
            type: String,
            default: "#606266"
        },
        // 字体大小，单位px
        size: {
            type: [ String, Number ],
            default: "16px"
        },
        // 是否显示粗体
        bold: {
            type: Boolean,
            default: false
        },
        // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
        index: {
            type: [ String, Number ],
            default: null
        },
        // 触摸图标时的类名
        hoverClass: {
            type: String,
            default: ""
        },
        // 自定义扩展前缀，方便用户扩展自己的图标库
        customPrefix: {
            type: String,
            default: "uvicon"
        },
        // 图标右边或者下面的文字
        label: {
            type: [ String, Number ],
            default: ""
        },
        // label的位置，只能右边或者下边
        labelPos: {
            type: String,
            default: "right"
        },
        // label的大小
        labelSize: {
            type: [ String, Number ],
            default: "15px"
        },
        // label的颜色
        labelColor: {
            type: String,
            default: "#606266"
        },
        // label与图标的距离
        space: {
            type: [ String, Number ],
            default: "3px"
        },
        // 图片的mode
        imgMode: {
            type: String,
            default: "aspectFit"
        },
        // 用于显示图片小图标时，图片的宽度
        width: {
            type: [ String, Number ],
            default: ""
        },
        // 用于显示图片小图标时，图片的高度
        height: {
            type: [ String, Number ],
            default: ""
        },
        // 用于解决某些情况下，让图标垂直居中的用途
        top: {
            type: [ String, Number ],
            default: 0
        },
        // 是否阻止事件传播
        stop: {
            type: Boolean,
            default: false
        }
    }, (_f = (_e2 = index$1.$uv) == null ? void 0 : _e2.props) == null ? void 0 : _f.icon)
};

var props$8 = {
    props: _objectSpread2({
        // 头像图片路径(不能为相对路径)
        src: {
            type: String,
            default: ""
        },
        // 头像形状，circle-圆形，square-方形
        shape: {
            type: String,
            default: "circle"
        },
        // 头像尺寸
        size: {
            type: [ String, Number ],
            default: 40
        },
        // 裁剪模式
        mode: {
            type: String,
            default: "scaleToFill"
        },
        // 显示的文字
        text: {
            type: String,
            default: ""
        },
        // 背景色
        bgColor: {
            type: String,
            default: "#c0c4cc"
        },
        // 文字颜色
        color: {
            type: String,
            default: "#fff"
        },
        // 文字大小
        fontSize: {
            type: [ String, Number ],
            default: 18
        },
        // 显示的图标
        icon: {
            type: String,
            default: ""
        },
        // 显示小程序头像，只对百度，微信，QQ小程序有效
        mpAvatar: {
            type: Boolean,
            default: false
        },
        // 是否使用随机背景色
        randomBgColor: {
            type: Boolean,
            default: false
        },
        // 加载失败的默认头像(组件有内置默认图片)
        defaultUrl: {
            type: String,
            default: ""
        },
        // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
        colorIndex: {
            type: [ String, Number ],
            // 校验参数规则，索引在0-19之间
            validator: function validator(n2) {
                return range$1(n2, [ 0, 19 ]) || n2 === "";
            },
            default: ""
        },
        // 组件标识符
        name: {
            type: String,
            default: ""
        }
    }, (_h = (_g = index$1.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.avatar)
};

var props$7 = {
    props: _objectSpread2({
        // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
        status: {
            type: String,
            default: "loadmore"
        },
        // 组件背景色
        bgColor: {
            type: String,
            default: "transparent"
        },
        // 是否显示加载中的图标
        icon: {
            type: Boolean,
            default: true
        },
        // 字体大小
        fontSize: {
            type: [ String, Number ],
            default: 14
        },
        // 图标大小
        iconSize: {
            type: [ String, Number ],
            default: 16
        },
        // 字体颜色
        color: {
            type: String,
            default: "#606266"
        },
        // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
        loadingIcon: {
            type: String,
            default: "spinner"
        },
        // 加载前的提示语
        loadmoreText: {
            type: String,
            default: "加载更多"
        },
        // 加载中提示语
        loadingText: {
            type: String,
            default: "正在加载..."
        },
        // 没有更多的提示语
        nomoreText: {
            type: String,
            default: "没有更多了"
        },
        // 在“没有更多”状态下，是否显示粗点
        isDot: {
            type: Boolean,
            default: false
        },
        // 加载中图标的颜色
        iconColor: {
            type: String,
            default: "#b7b7b7"
        },
        // 上边距
        marginTop: {
            type: [ String, Number ],
            default: 10
        },
        // 下边距
        marginBottom: {
            type: [ String, Number ],
            default: 10
        },
        // 高度，单位px
        height: {
            type: [ String, Number ],
            default: "auto"
        },
        // 是否显示左边分割线
        line: {
            type: Boolean,
            default: false
        },
        // 线条颜色
        lineColor: {
            type: String,
            default: "#E6E8EB"
        },
        // 是否虚线，true-虚线，false-实线
        dashed: {
            type: Boolean,
            default: false
        }
    }, (_j = (_i = index$1.$uv) == null ? void 0 : _i.props) == null ? void 0 : _j.loadmore)
};

var props$6 = {
    props: _objectSpread2({
        // 内置图标名称，或图片路径，建议绝对路径
        icon: {
            type: String,
            default: ""
        },
        // 提示文字
        text: {
            type: String,
            default: ""
        },
        // 文字颜色
        textColor: {
            type: String,
            default: "#c0c4cc"
        },
        // 文字大小
        textSize: {
            type: [ String, Number ],
            default: 14
        },
        // 图标的颜色
        iconColor: {
            type: String,
            default: "#c0c4cc"
        },
        // 图标的大小
        iconSize: {
            type: [ String, Number ],
            default: 90
        },
        // 选择预置的图标类型
        mode: {
            type: String,
            default: "data"
        },
        //  图标宽度，单位px
        width: {
            type: [ String, Number ],
            default: 160
        },
        // 图标高度，单位px
        height: {
            type: [ String, Number ],
            default: 160
        },
        // 是否显示组件
        show: {
            type: Boolean,
            default: true
        },
        // 组件距离上一个元素之间的距离，默认px单位
        marginTop: {
            type: [ String, Number ],
            default: 0
        }
    }, (_l = (_k = index$1.$uv) == null ? void 0 : _k.props) == null ? void 0 : _l.empty)
};

var pages = [ {
    path: "pages/index/index",
    style: {
        navigationBarTitleText: "首页"
    }
}, {
    path: "pages/my/my",
    style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
    }
}, {
    path: "pages/login/login",
    style: {
        navigationBarTitleText: "微信授权"
    }
}, {
    path: "pages/information/information",
    style: {
        navigationBarTitleText: "信息填写",
        navigationBarBackgroundColor: "#f8f8f8"
    }
}, {
    path: "pages/rank/rank",
    style: {
        navigationBarTitleText: "排行榜",
        navigationBarBackgroundColor: "#E6FAF0"
    }
}, {
    path: "pages/achievement/achievement",
    style: {
        navigationBarTitleText: "成就"
    }
}, {
    path: "pages/article/article",
    style: {
        navigationBarTitleText: "科普"
    }
}, {
    path: "pages/answer/answer",
    style: {
        navigationBarTitleText: "答题"
    }
}, {
    path: "pages/answerpage/answerpage",
    style: {
        navigationBarTitleText: "知识答题"
    }
}, {
    path: "pages/answersuccess/answersuccess",
    style: {
        navigationBarTitleText: "闯关成功"
    }
}, {
    path: "pages/health/health",
    style: {
        navigationBarTitleText: "健康"
    }
}, {
    path: "pages/articledetail/articledetail",
    style: {
        navigationBarTitleText: "详情"
    }
}, {
    path: "pages/protocol/protocol",
    style: {
        navigationBarTitleText: ""
    }
}, {
    path: "pages/answerdetail/answerdetail",
    style: {
        navigationBarTitleText: "详情"
    }
} ];

var globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "健康重庆 渝你同行",
    navigationBarBackgroundColor: "#fff",
    backgroundColor: "#fff"
};

var uniIdRouter = {};

var easycom = {
    autoscan: true,
    custom: {
        "^uv-(.*)": "@climblee/uv-ui/components/uv-$1/uv-$1.vue"
    }
};

var e = {
    pages: pages,
    globalStyle: globalStyle,
    uniIdRouter: uniIdRouter,
    easycom: easycom
};

var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];

function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}

function n(e2, t2, n2) {
    return e2(n2 = {
        path: t2,
        exports: {},
        require: function require(e3, t3) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
            }(null == t3 && n2.path);
        }
    }, n2.exports), n2.exports;
}

var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
        var n3 = Object.create || /*   */ function() {
            function e4() {}
            return function(t4) {
                var n4;
                return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
            };
        }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = {
            extend: function extend(e4) {
                var t4 = n3(this);
                return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
                    t4.$super.init.apply(this, arguments);
                }), t4.init.prototype = t4, t4.$super = this, t4;
            },
            create: function create() {
                var e4 = this.extend();
                return e4.init.apply(e4, arguments), e4;
            },
            init: function init() {},
            mixIn: function mixIn(e4) {
                for (var t4 in e4) e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
                e4.hasOwnProperty("toString") && (this.toString = e4.toString);
            },
            clone: function clone() {
                return this.init.prototype.extend(this);
            }
        }, o2 = r2.WordArray = i2.extend({
            init: function init(e4, n4) {
                e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
            },
            toString: function toString(e4) {
                return (e4 || c2).stringify(this);
            },
            concat: function concat(e4) {
                var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
                if (this.clamp(), s3 % 4) for (var i3 = 0; i3 < r3; i3++) {
                    var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
                    t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
                } else for (i3 = 0; i3 < r3; i3 += 4) t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
                return this.sigBytes += r3, this;
            },
            clamp: function clamp() {
                var t4 = this.words, n4 = this.sigBytes;
                t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
            },
            clone: function clone() {
                var e4 = i2.clone.call(this);
                return e4.words = this.words.slice(0), e4;
            },
            random: function random(t4) {
                for (var n4, s3 = [], r3 = function r3(t5) {
                    t5 = t5;
                    var n5 = 987654321, s4 = 4294967295;
                    return function() {
                        var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
                        return r4 /= 4294967296, (r4 += .5) * (e3.random() > .5 ? 1 : -1);
                    };
                }, i3 = 0; i3 < t4; i3 += 4) {
                    var a3 = r3(4294967296 * (n4 || e3.random()));
                    n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
                }
                return new o2.init(s3, t4);
            }
        }), a2 = s2.enc = {}, c2 = a2.Hex = {
            stringify: function stringify(e4) {
                for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
                    var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
                    s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
                }
                return s3.join("");
            },
            parse: function parse(e4) {
                for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2) n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
                return new o2.init(n4, t4 / 2);
            }
        }, u2 = a2.Latin1 = {
            stringify: function stringify(e4) {
                for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
                    var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
                    s3.push(String.fromCharCode(i3));
                }
                return s3.join("");
            },
            parse: function parse(e4) {
                for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++) n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
                return new o2.init(n4, t4);
            }
        }, l2 = a2.Utf8 = {
            stringify: function stringify(e4) {
                try {
                    return decodeURIComponent(escape(u2.stringify(e4)));
                } catch (e5) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            parse: function parse(e4) {
                return u2.parse(unescape(encodeURIComponent(e4)));
            }
        }, h2 = r2.BufferedBlockAlgorithm = i2.extend({
            reset: function reset() {
                this._data = new o2.init(), this._nDataBytes = 0;
            },
            _append: function _append(e4) {
                "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
            },
            _process: function _process(t4) {
                var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
                if (c3) {
                    for (var l3 = 0; l3 < c3; l3 += i3) this._doProcessBlock(s3, l3);
                    var h3 = s3.splice(0, c3);
                    n4.sigBytes -= u3;
                }
                return new o2.init(h3, u3);
            },
            clone: function clone() {
                var e4 = i2.clone.call(this);
                return e4._data = this._data.clone(), e4;
            },
            _minBufferSize: 0
        });
        r2.Hasher = h2.extend({
            cfg: i2.extend(),
            init: function init(e4) {
                this.cfg = this.cfg.extend(e4), this.reset();
            },
            reset: function reset() {
                h2.reset.call(this), this._doReset();
            },
            update: function update(e4) {
                return this._append(e4), this._process(), this;
            },
            finalize: function finalize(e4) {
                return e4 && this._append(e4), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function _createHelper(e4) {
                return function(t4, n4) {
                    return new e4.init(n4).finalize(t4);
                };
            },
            _createHmacHelper: function _createHmacHelper(e4) {
                return function(t4, n4) {
                    return new d2.HMAC.init(e4, n4).finalize(t4);
                };
            }
        });
        var d2 = s2.algo = {};
        return s2;
    }(Math), n2);
}), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
        var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
        !function() {
            for (var t4 = 0; t4 < 64; t4++) a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
        }();
        var c2 = o2.MD5 = i2.extend({
            _doReset: function _doReset() {
                this._hash = new r2.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
            },
            _doProcessBlock: function _doProcessBlock(e4, t4) {
                for (var n3 = 0; n3 < 16; n3++) {
                    var s3 = t4 + n3, r3 = e4[s3];
                    e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
                }
                var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], C2 = e4[t4 + 15], P2 = i3[0], T2 = i3[1], x2 = i3[2], O2 = i3[3];
                P2 = u2(P2, T2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, T2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, T2, p2, 17, a2[2]), 
                T2 = u2(T2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, T2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, T2, x2, m2, 12, a2[5]), 
                x2 = u2(x2, O2, P2, T2, y2, 17, a2[6]), T2 = u2(T2, x2, O2, P2, _2, 22, a2[7]), 
                P2 = u2(P2, T2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, T2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, T2, I2, 17, a2[10]), 
                T2 = u2(T2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, T2, x2, O2, b2, 7, a2[12]), 
                O2 = u2(O2, P2, T2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, T2, A2, 17, a2[14]), 
                P2 = l2(P2, T2 = u2(T2, x2, O2, P2, C2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = l2(O2, P2, T2, x2, y2, 9, a2[17]), 
                x2 = l2(x2, O2, P2, T2, S2, 14, a2[18]), T2 = l2(T2, x2, O2, P2, o3, 20, a2[19]), 
                P2 = l2(P2, T2, x2, O2, m2, 5, a2[20]), O2 = l2(O2, P2, T2, x2, I2, 9, a2[21]), 
                x2 = l2(x2, O2, P2, T2, C2, 14, a2[22]), T2 = l2(T2, x2, O2, P2, g2, 20, a2[23]), 
                P2 = l2(P2, T2, x2, O2, v2, 5, a2[24]), O2 = l2(O2, P2, T2, x2, A2, 9, a2[25]), 
                x2 = l2(x2, O2, P2, T2, f2, 14, a2[26]), T2 = l2(T2, x2, O2, P2, w2, 20, a2[27]), 
                P2 = l2(P2, T2, x2, O2, k2, 5, a2[28]), O2 = l2(O2, P2, T2, x2, p2, 9, a2[29]), 
                x2 = l2(x2, O2, P2, T2, _2, 14, a2[30]), P2 = h2(P2, T2 = l2(T2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), 
                O2 = h2(O2, P2, T2, x2, w2, 11, a2[33]), x2 = h2(x2, O2, P2, T2, S2, 16, a2[34]), 
                T2 = h2(T2, x2, O2, P2, A2, 23, a2[35]), P2 = h2(P2, T2, x2, O2, c3, 4, a2[36]), 
                O2 = h2(O2, P2, T2, x2, g2, 11, a2[37]), x2 = h2(x2, O2, P2, T2, _2, 16, a2[38]), 
                T2 = h2(T2, x2, O2, P2, I2, 23, a2[39]), P2 = h2(P2, T2, x2, O2, k2, 4, a2[40]), 
                O2 = h2(O2, P2, T2, x2, o3, 11, a2[41]), x2 = h2(x2, O2, P2, T2, f2, 16, a2[42]), 
                T2 = h2(T2, x2, O2, P2, y2, 23, a2[43]), P2 = h2(P2, T2, x2, O2, v2, 4, a2[44]), 
                O2 = h2(O2, P2, T2, x2, b2, 11, a2[45]), x2 = h2(x2, O2, P2, T2, C2, 16, a2[46]), 
                P2 = d2(P2, T2 = h2(T2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, T2, x2, _2, 10, a2[49]), 
                x2 = d2(x2, O2, P2, T2, A2, 15, a2[50]), T2 = d2(T2, x2, O2, P2, m2, 21, a2[51]), 
                P2 = d2(P2, T2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, T2, x2, f2, 10, a2[53]), 
                x2 = d2(x2, O2, P2, T2, I2, 15, a2[54]), T2 = d2(T2, x2, O2, P2, c3, 21, a2[55]), 
                P2 = d2(P2, T2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, T2, x2, C2, 10, a2[57]), 
                x2 = d2(x2, O2, P2, T2, y2, 15, a2[58]), T2 = d2(T2, x2, O2, P2, k2, 21, a2[59]), 
                P2 = d2(P2, T2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, T2, x2, S2, 10, a2[61]), 
                x2 = d2(x2, O2, P2, T2, p2, 15, a2[62]), T2 = d2(T2, x2, O2, P2, v2, 21, a2[63]), 
                i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + T2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
            },
            _doFinalize: function _doFinalize() {
                var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
                n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
                var i3 = e3.floor(s3 / 4294967296), o3 = s3;
                n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), 
                n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), 
                t4.sigBytes = 4 * (n3.length + 1), this._process();
                for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
                    var l3 = c3[u3];
                    c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
                }
                return a3;
            },
            clone: function clone() {
                var e4 = i2.clone.call(this);
                return e4._hash = this._hash.clone(), e4;
            }
        });
        function u2(e4, t4, n3, s3, r3, i3, o3) {
            var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
            return (a3 << i3 | a3 >>> 32 - i3) + t4;
        }
        function l2(e4, t4, n3, s3, r3, i3, o3) {
            var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
            return (a3 << i3 | a3 >>> 32 - i3) + t4;
        }
        function h2(e4, t4, n3, s3, r3, i3, o3) {
            var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
            return (a3 << i3 | a3 >>> 32 - i3) + t4;
        }
        function d2(e4, t4, n3, s3, r3, i3, o3) {
            var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
            return (a3 << i3 | a3 >>> 32 - i3) + t4;
        }
        t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
}), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
        var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
        e3.algo.HMAC = t3.extend({
            init: function init(e4, t4) {
                e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
                var n3 = e4.blockSize, r2 = 4 * n3;
                t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
                for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++) a2[u2] ^= 1549556828, 
                c2[u2] ^= 909522486;
                i2.sigBytes = o2.sigBytes = r2, this.reset();
            },
            reset: function reset() {
                var e4 = this._hasher;
                e4.reset(), e4.update(this._iKey);
            },
            update: function update(e4) {
                return this._hasher.update(e4), this;
            },
            finalize: function finalize(e4) {
                var t4 = this._hasher, n3 = t4.finalize(e4);
                return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
            }
        });
    }());
}), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
})), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
}), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
        var e3 = n2, t3 = e3.lib.WordArray;
        function s2(e4, n3, s3) {
            for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++) if (o2 % 4) {
                var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
                r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
            }
            return t3.create(r2, i2);
        }
        e3.enc.Base64 = {
            stringify: function stringify(e4) {
                var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
                e4.clamp();
                for (var r2 = [], i2 = 0; i2 < n3; i2 += 3) for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + .75 * a2 < n3; a2++) r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
                var c2 = s3.charAt(64);
                if (c2) for (;r2.length % 4; ) r2.push(c2);
                return r2.join("");
            },
            parse: function parse(e4) {
                var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
                if (!r2) {
                    r2 = this._reverseMap = [];
                    for (var i2 = 0; i2 < n3.length; i2++) r2[n3.charCodeAt(i2)] = i2;
                }
                var o2 = n3.charAt(64);
                if (o2) {
                    var a2 = e4.indexOf(o2);
                    -1 !== a2 && (t4 = a2);
                }
                return s2(e4, t4, r2);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
    }(), n2.enc.Base64);
});

var c = "FUNCTION", u = "OBJECT", l = "CLIENT_DB", h = "pending", d = "fulfilled", p = "rejected";

function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
}

function g(e2) {
    return "object" === f(e2);
}

function m(e2) {
    return "function" == typeof e2;
}

function y(e2) {
    return function() {
        try {
            return e2.apply(e2, arguments);
        } catch (e3) {
            console.error(e3);
        }
    };
}

var _ = "REJECTED", w = "NOT_PENDING";

var v = /* */ function() {
    function v() {
        var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref29.createPromise, _ref29$retryRule = _ref29.retryRule, t2 = _ref29$retryRule === void 0 ? _ : _ref29$retryRule;
        _classCallCheck2(this, v);
        this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    return _createClass2(v, [ {
        key: "needRetry",
        get: function get() {
            if (!this.status) return true;
            switch (this.retryRule) {
              case _:
                return this.status === p;

              case w:
                return this.status !== h;
            }
        }
    }, {
        key: "exec",
        value: function exec() {
            var _this8 = this;
            return this.needRetry ? (this.status = h, this.promise = this.createPromise().then(function(e2) {
                return _this8.status = d, Promise.resolve(e2);
            }, function(e2) {
                return _this8.status = p, Promise.reject(e2);
            }), this.promise) : this.promise;
        }
    } ]);
}();

function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
}

var S = true, b = "mp-weixin", A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), C = b, P = I(""), T = I("[]") || [];

var O = "";

try {
    O = "__UNI__156631B";
} catch (e2) {}

var E = {};

function L(e2) {
    var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), 
    E[e2];
}

var R = [ "invoke", "success", "fail", "complete" ], U = L("_globalUniCloudInterceptor");

function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach(function(n2) {
        R.indexOf(n2) > -1 && function(e3, t3, n3) {
            var s2 = U[e3][t3];
            s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
        }(e2, n2, t2[n2]);
    });
}

function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach(function(n2) {
        R.indexOf(n2) > -1 && function(e3, t3, n3) {
            var s2 = U[e3][t3];
            if (!s2) return;
            var r2 = s2.indexOf(n3);
            r2 > -1 && s2.splice(r2, 1);
        }(e2, n2, t2[n2]);
    }) : delete U[e2];
}

function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce(function(e3, n2) {
        return e3.then(function() {
            return n2(t2);
        });
    }, Promise.resolve()) : Promise.resolve();
}

function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
}

function F(e2) {
    N("callObject", e2);
}

var K = L("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W = "clientdb", H = "cloudfunction", J = "cloudobject";

function z(e2) {
    return K[e2] || (K[e2] = []), K[e2];
}

function V(e2, t2) {
    var n2 = z(e2);
    n2.includes(t2) || n2.push(t2);
}

function G(e2, t2) {
    var n2 = z(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
}

function Y(e2, t2) {
    var n2 = z(e2);
    for (var e3 = 0; e3 < n2.length; e3++) {
        (0, n2[e3])(t2);
    }
}

var Q, X = false;

function Z() {
    return Q || (Q = new Promise(function(e2) {
        X && e2(), function t2() {
            if ("function" == typeof getCurrentPages) {
                var t3 = getCurrentPages();
                t3 && t3[0] && (X = true, e2());
            }
            X || setTimeout(function() {
                t2();
            }, 30);
        }();
    }), Q);
}

function ee(e2) {
    var t2 = {};
    for (var n2 in e2) {
        var s2 = e2[n2];
        m(s2) && (t2[n2] = y(s2));
    }
    return t2;
}

var te = /* */ function(_Error) {
    function te(e2) {
        var _this9;
        _classCallCheck2(this, te);
        _this9 = _callSuper(this, te, [ e2.message ]), _this9.errMsg = e2.message || e2.errMsg || "unknown system error", 
        _this9.code = _this9.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", _this9.errSubject = _this9.subject = e2.subject || e2.errSubject, 
        _this9.cause = e2.cause, _this9.requestId = e2.requestId;
        return _this9;
    }
    _inherits2(te, _Error);
    return _createClass2(te, [ {
        key: "toJson",
        value: function toJson() {
            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            if (!(e2 >= 10)) return e2++, {
                errCode: this.errCode,
                errMsg: this.errMsg,
                errSubject: this.errSubject,
                cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause
            };
        }
    } ]);
}(/* */ _wrapNativeSuper2(Error));

var ne = {
    request: function request(e2) {
        return index$1.request(e2);
    },
    uploadFile: function uploadFile(e2) {
        return index$1.uploadFile(e2);
    },
    setStorageSync: function setStorageSync(e2, t2) {
        return index$1.setStorageSync(e2, t2);
    },
    getStorageSync: function getStorageSync(e2) {
        return index$1.getStorageSync(e2);
    },
    removeStorageSync: function removeStorageSync(e2) {
        return index$1.removeStorageSync(e2);
    },
    clearStorageSync: function clearStorageSync() {
        return index$1.clearStorageSync();
    },
    connectSocket: function connectSocket(e2) {
        return index$1.connectSocket(e2);
    }
};

function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
}

function re() {
    return {
        token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
        tokenExpired: ne.getStorageSync("uni_id_token_expired")
    };
}

function ie() {
    var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref30.token, t2 = _ref30.tokenExpired;
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
}

var oe, ae;

function ce() {
    return oe || (oe = index$1.getSystemInfoSync()), oe;
}

function ue() {
    var e2, t2;
    try {
        if (index$1.getLaunchOptionsSync) {
            if (index$1.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
            var _index$1$getLaunchOpt = index$1.getLaunchOptionsSync(), n2 = _index$1$getLaunchOpt.scene, s2 = _index$1$getLaunchOpt.channel;
            e2 = s2, t2 = n2;
        }
    } catch (e3) {}
    return {
        channel: e2,
        scene: t2
    };
}

var le = {};

function he() {
    var e2 = index$1.getLocale && index$1.getLocale() || "en";
    if (ae) return _objectSpread2(_objectSpread2(_objectSpread2({}, le), ae), {}, {
        locale: e2,
        LOCALE: e2
    });
    var t2 = ce(), n2 = t2.deviceId, s2 = t2.osName, r2 = t2.uniPlatform, i2 = t2.appId, o2 = [ "appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode" ];
    for (var e3 in t2) Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return ae = _objectSpread2(_objectSpread2({
        PLATFORM: r2,
        OS: s2,
        APPID: i2,
        DEVICEID: n2
    }, ue()), t2), _objectSpread2(_objectSpread2(_objectSpread2({}, le), ae), {}, {
        locale: e2,
        LOCALE: e2
    });
}

var de = {
    sign: function sign(e2, t2) {
        var n2 = "";
        return Object.keys(e2).sort().forEach(function(t3) {
            e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
        }), n2 = n2.slice(1), i(n2, t2).toString();
    },
    wrappedRequest: function wrappedRequest(e2, t2) {
        return new Promise(function(n2, s2) {
            t2(Object.assign(e2, {
                complete: function complete(e3) {
                    e3 || (e3 = {});
                    var t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
                    if (!e3.statusCode || e3.statusCode >= 400) {
                        var n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
                        return s2(new te({
                            code: n3,
                            message: r3,
                            requestId: t3
                        }));
                    }
                    var r2 = e3.data;
                    if (r2.error) return s2(new te({
                        code: r2.error.code,
                        message: r2.error.message,
                        requestId: t3
                    }));
                    r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
                }
            }));
        });
    },
    toBase64: function toBase64(e2) {
        return a.stringify(o.parse(e2));
    }
};

var pe = /* */ function() {
    function pe(e2) {
        var _this10 = this;
        _classCallCheck2(this, pe);
        [ "spaceId", "clientSecret" ].forEach(function(t2) {
            if (!Object.prototype.hasOwnProperty.call(e2, t2)) throw new Error("".concat(t2, " required"));
        }), this.config = Object.assign({}, {
            endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
        }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", 
        this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, 
        this.adapter = ne, this._getAccessTokenPromiseHub = new v({
            createPromise: function createPromise() {
                return _this10.requestAuth(_this10.setupRequest({
                    method: "serverless.auth.user.anonymousAuthorize",
                    params: "{}"
                }, "auth")).then(function(e3) {
                    if (!e3.result || !e3.result.accessToken) throw new te({
                        code: "AUTH_FAILED",
                        message: "获取accessToken失败"
                    });
                    _this10.setAccessToken(e3.result.accessToken);
                });
            },
            retryRule: w
        });
    }
    return _createClass2(pe, [ {
        key: "hasAccessToken",
        get: function get() {
            return !!this.accessToken;
        }
    }, {
        key: "setAccessToken",
        value: function setAccessToken(e2) {
            this.accessToken = e2;
        }
    }, {
        key: "requestWrapped",
        value: function requestWrapped(e2) {
            return de.wrappedRequest(e2, this.adapter.request);
        }
    }, {
        key: "requestAuth",
        value: function requestAuth(e2) {
            return this.requestWrapped(e2);
        }
    }, {
        key: "request",
        value: function request(e2, t2) {
            var _this11 = this;
            return Promise.resolve().then(function() {
                return _this11.hasAccessToken ? t2 ? _this11.requestWrapped(e2) : _this11.requestWrapped(e2).catch(function(t3) {
                    return new Promise(function(e3, n2) {
                        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
                    }).then(function() {
                        return _this11.getAccessToken();
                    }).then(function() {
                        var t4 = _this11.rebuildRequest(e2);
                        return _this11.request(t4, true);
                    });
                }) : _this11.getAccessToken().then(function() {
                    var t3 = _this11.rebuildRequest(e2);
                    return _this11.request(t3, true);
                });
            });
        }
    }, {
        key: "rebuildRequest",
        value: function rebuildRequest(e2) {
            var t2 = Object.assign({}, e2);
            return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, 
            t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
        }
    }, {
        key: "setupRequest",
        value: function setupRequest(e2, t2) {
            var n2 = Object.assign({}, e2, {
                spaceId: this.config.spaceId,
                timestamp: Date.now()
            }), s2 = {
                "Content-Type": "application/json"
            };
            return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), 
            s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), {
                url: this.config.requestUrl,
                method: "POST",
                data: n2,
                dataType: "json",
                header: s2
            };
        }
    }, {
        key: "getAccessToken",
        value: function getAccessToken() {
            return this._getAccessTokenPromiseHub.exec();
        }
    }, {
        key: "authorize",
        value: function() {
            var _authorize = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee2() {
                return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return this.getAccessToken();

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                }, _callee2, this);
            }));
            function authorize() {
                return _authorize.apply(this, arguments);
            }
            return authorize;
        }()
    }, {
        key: "callFunction",
        value: function callFunction(e2) {
            var t2 = {
                method: "serverless.function.runtime.invoke",
                params: JSON.stringify({
                    functionTarget: e2.name,
                    functionArgs: e2.data || {}
                })
            };
            return this.request(_objectSpread2(_objectSpread2({}, this.setupRequest(t2)), {}, {
                timeout: e2.timeout
            }));
        }
    }, {
        key: "getOSSUploadOptionsFromPath",
        value: function getOSSUploadOptionsFromPath(e2) {
            var t2 = {
                method: "serverless.file.resource.generateProximalSign",
                params: JSON.stringify(e2)
            };
            return this.request(this.setupRequest(t2));
        }
    }, {
        key: "uploadFileToOSS",
        value: function uploadFileToOSS(_ref31) {
            var _this12 = this;
            var e2 = _ref31.url, t2 = _ref31.formData, n2 = _ref31.name, s2 = _ref31.filePath, r2 = _ref31.fileType, i2 = _ref31.onUploadProgress;
            return new Promise(function(o2, a2) {
                var c2 = _this12.adapter.uploadFile({
                    url: e2,
                    formData: t2,
                    name: n2,
                    filePath: s2,
                    fileType: r2,
                    header: {
                        "X-OSS-server-side-encrpytion": "AES256"
                    },
                    success: function success(e3) {
                        e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({
                            code: "UPLOAD_FAILED",
                            message: "文件上传失败"
                        }));
                    },
                    fail: function fail(e3) {
                        a2(new te({
                            code: e3.code || "UPLOAD_FAILED",
                            message: e3.message || e3.errMsg || "文件上传失败"
                        }));
                    }
                });
                "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate(function(e3) {
                    i2({
                        loaded: e3.totalBytesSent,
                        total: e3.totalBytesExpectedToSend
                    });
                });
            });
        }
    }, {
        key: "reportOSSUpload",
        value: function reportOSSUpload(e2) {
            var t2 = {
                method: "serverless.file.resource.report",
                params: JSON.stringify(e2)
            };
            return this.request(this.setupRequest(t2));
        }
    }, {
        key: "uploadFile",
        value: function() {
            var _uploadFile = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee3(_ref32) {
                var e2, t2, _ref32$fileType, n2, _ref32$cloudPathAsRea, s2, r2, i2, o2, a2, c2, u2, l2, h2, d2, p2, g2, m2, y2, _2, e3, w2;
                return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        e2 = _ref32.filePath, t2 = _ref32.cloudPath, _ref32$fileType = _ref32.fileType, 
                        n2 = _ref32$fileType === void 0 ? "image" : _ref32$fileType, _ref32$cloudPathAsRea = _ref32.cloudPathAsRealPath, 
                        s2 = _ref32$cloudPathAsRea === void 0 ? false : _ref32$cloudPathAsRea, r2 = _ref32.onUploadProgress, 
                        i2 = _ref32.config;
                        if (!("string" !== f(t2))) {
                            _context3.next = 3;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "cloudPath必须为字符串类型"
                        });

                      case 3:
                        if (t2 = t2.trim()) {
                            _context3.next = 5;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "cloudPath不可为空"
                        });

                      case 5:
                        if (!/:\/\//.test(t2)) {
                            _context3.next = 7;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "cloudPath不合法"
                        });

                      case 7:
                        o2 = i2 && i2.envType || this.config.envType;
                        if (!(s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))) {
                            _context3.next = 10;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                        });

                      case 10:
                        _context3.next = 12;
                        return this.getOSSUploadOptionsFromPath({
                            env: o2,
                            filename: s2 ? t2.split("/").pop() : t2,
                            fileId: s2 ? t2 : void 0
                        });

                      case 12:
                        a2 = _context3.sent.result;
                        c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath;
                        u2 = a2.securityToken;
                        l2 = a2.accessKeyId;
                        h2 = a2.signature;
                        d2 = a2.host;
                        p2 = a2.ossPath;
                        g2 = a2.id;
                        m2 = a2.policy;
                        y2 = a2.ossCallbackUrl;
                        _2 = {
                            "Cache-Control": "max-age=2592000",
                            "Content-Disposition": "attachment",
                            OSSAccessKeyId: l2,
                            Signature: h2,
                            host: d2,
                            id: g2,
                            key: p2,
                            policy: m2,
                            success_action_status: 200
                        };
                        if (u2 && (_2["x-oss-security-token"] = u2), y2) {
                            e3 = JSON.stringify({
                                callbackUrl: y2,
                                callbackBody: JSON.stringify({
                                    fileId: g2,
                                    spaceId: this.config.spaceId
                                }),
                                callbackBodyType: "application/json"
                            });
                            _2.callback = de.toBase64(e3);
                        }
                        w2 = {
                            url: "https://" + a2.host,
                            formData: _2,
                            fileName: "file",
                            name: "file",
                            filePath: e2,
                            fileType: n2
                        };
                        _context3.next = 27;
                        return this.uploadFileToOSS(Object.assign({}, w2, {
                            onUploadProgress: r2
                        }));

                      case 27:
                        if (!y2) {
                            _context3.next = 29;
                            break;
                        }
                        return _context3.abrupt("return", {
                            success: true,
                            filePath: e2,
                            fileID: c2
                        });

                      case 29:
                        _context3.next = 31;
                        return this.reportOSSUpload({
                            id: g2
                        });

                      case 31:
                        if (!_context3.sent.success) {
                            _context3.next = 33;
                            break;
                        }
                        return _context3.abrupt("return", {
                            success: true,
                            filePath: e2,
                            fileID: c2
                        });

                      case 33:
                        throw new te({
                            code: "UPLOAD_FAILED",
                            message: "文件上传失败"
                        });

                      case 34:
                      case "end":
                        return _context3.stop();
                    }
                }, _callee3, this);
            }));
            function uploadFile(_x) {
                return _uploadFile.apply(this, arguments);
            }
            return uploadFile;
        }()
    }, {
        key: "getTempFileURL",
        value: function getTempFileURL() {
            var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref33.fileList;
            return new Promise(function(t2, n2) {
                Array.isArray(e2) && 0 !== e2.length || n2(new te({
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是非空的字符串"
                })), t2({
                    fileList: e2.map(function(e3) {
                        return {
                            fileID: e3,
                            tempFileURL: e3
                        };
                    })
                });
            });
        }
    }, {
        key: "getFileInfo",
        value: function() {
            var _getFileInfo = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee4() {
                var _ref34, e2, t2, _args4 = arguments;
                return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _ref34 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, e2 = _ref34.fileList;
                        if (!(!Array.isArray(e2) || 0 === e2.length)) {
                            _context4.next = 3;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是非空的字符串"
                        });

                      case 3:
                        t2 = {
                            method: "serverless.file.resource.info",
                            params: JSON.stringify({
                                id: e2.map(function(e3) {
                                    return e3.split("?")[0];
                                }).join(",")
                            })
                        };
                        _context4.next = 6;
                        return this.request(this.setupRequest(t2));

                      case 6:
                        _context4.t0 = _context4.sent.result;
                        return _context4.abrupt("return", {
                            fileList: _context4.t0
                        });

                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                }, _callee4, this);
            }));
            function getFileInfo() {
                return _getFileInfo.apply(this, arguments);
            }
            return getFileInfo;
        }()
    } ]);
}();

var fe = {
    init: function init(e2) {
        var t2 = new pe(e2), n2 = {
            signInAnonymously: function signInAnonymously() {
                return t2.authorize();
            },
            getLoginState: function getLoginState() {
                return Promise.resolve(false);
            }
        };
        return t2.auth = function() {
            return n2;
        }, t2.customAuth = t2.auth, t2;
    }
};

var ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";

var me;

!function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
}(me || (me = {}));

var ye = function ye() {}, _e = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
        var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
        !function() {
            function t4(t5) {
                for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++) if (!(t5 % s4)) return false;
                return true;
            }
            function n3(e4) {
                return 4294967296 * (e4 - (0 | e4)) | 0;
            }
            for (var s3 = 2, r3 = 0; r3 < 64; ) t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, .5))), 
            c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
        }();
        var u2 = [], l2 = o2.SHA256 = i2.extend({
            _doReset: function _doReset() {
                this._hash = new r2.init(a2.slice(0));
            },
            _doProcessBlock: function _doProcessBlock(e4, t4) {
                for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], h2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
                    if (p2 < 16) u2[p2] = 0 | e4[t4 + p2]; else {
                        var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
                        u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
                    }
                    var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & h2) + c2[p2] + u2[p2];
                    d2 = h2, h2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
                }
                n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, 
                n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + h2 | 0, n3[7] = n3[7] + d2 | 0;
            },
            _doFinalize: function _doFinalize() {
                var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
                return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), 
                n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), 
                this._hash;
            },
            clone: function clone() {
                var e4 = i2.clone.call(this);
                return e4._hash = this._hash.clone(), e4;
            }
        });
        t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
    }(Math), n2.SHA256);
}), we = _e, ve = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
});

var Ie = function Ie() {
    var e2;
    if (!Promise) {
        e2 = function e2() {}, e2.promise = {};
        var t3 = function t3() {
            throw new te({
                message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
            });
        };
        return Object.defineProperty(e2.promise, "then", {
            get: t3
        }), Object.defineProperty(e2.promise, "catch", {
            get: t3
        }), e2;
    }
    var t2 = new Promise(function(t3, n2) {
        e2 = function e2(e3, s2) {
            return e3 ? n2(e3) : t3(s2);
        };
    });
    return e2.promise = t2, e2;
};

function Se(e2) {
    return void 0 === e2;
}

function be(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
}

var ke;

function Ae(e2) {
    var t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [ e2 ]);
    var n2;
    var _iterator6 = _createForOfIteratorHelper2(t2), _step6;
    try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var e3 = _step6.value;
            var t3 = e3.isMatch, n3 = e3.genAdapter, s2 = e3.runtime;
            if (t3()) return {
                adapter: n3(),
                runtime: s2
            };
        }
    } catch (err) {
        _iterator6.e(err);
    } finally {
        _iterator6.f();
    }
}

!function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
}(ke || (ke = {}));

var Ce = {
    adapter: null,
    runtime: void 0
}, Pe = [ "anonymousUuidKey" ];

var Te = /* */ function(_ye) {
    function Te() {
        var _this13;
        _classCallCheck2(this, Te);
        _this13 = _callSuper(this, Te), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
        return _this13;
    }
    _inherits2(Te, _ye);
    return _createClass2(Te, [ {
        key: "setItem",
        value: function setItem(e2, t2) {
            Ce.adapter.root.tcbObject[e2] = t2;
        }
    }, {
        key: "getItem",
        value: function getItem(e2) {
            return Ce.adapter.root.tcbObject[e2];
        }
    }, {
        key: "removeItem",
        value: function removeItem(e2) {
            delete Ce.adapter.root.tcbObject[e2];
        }
    }, {
        key: "clear",
        value: function clear() {
            delete Ce.adapter.root.tcbObject;
        }
    } ]);
}(ye);

function xe(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();

      case "none":
        return new Te();

      default:
        return t2.sessionStorage || new Te();
    }
}

var Oe = /* */ function() {
    function Oe(e2) {
        _classCallCheck2(this, Oe);
        if (!this._storage) {
            this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Ce.adapter);
            var t2 = "access_token_".concat(e2.env), n2 = "access_token_expire_".concat(e2.env), s2 = "refresh_token_".concat(e2.env), r2 = "anonymous_uuid_".concat(e2.env), i2 = "login_type_".concat(e2.env), o2 = "user_info_".concat(e2.env);
            this.keys = {
                accessTokenKey: t2,
                accessTokenExpireKey: n2,
                refreshTokenKey: s2,
                anonymousUuidKey: r2,
                loginTypeKey: i2,
                userInfoKey: o2
            };
        }
    }
    return _createClass2(Oe, [ {
        key: "updatePersistence",
        value: function updatePersistence(e2) {
            if (e2 === this._persistence) return;
            var t2 = "local" === this._persistence;
            this._persistence = e2;
            var n2 = xe(e2, Ce.adapter);
            for (var e3 in this.keys) {
                var s2 = this.keys[e3];
                if (t2 && Pe.includes(e3)) continue;
                var r2 = this._storage.getItem(s2);
                Se(r2) || be(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
            }
            this._storage = n2;
        }
    }, {
        key: "setStore",
        value: function setStore(e2, t2, n2) {
            if (!this._storage) return;
            var s2 = {
                version: n2 || "localCachev1",
                content: t2
            }, r2 = JSON.stringify(s2);
            try {
                this._storage.setItem(e2, r2);
            } catch (e3) {
                throw e3;
            }
        }
    }, {
        key: "getStore",
        value: function getStore(e2, t2) {
            try {
                if (!this._storage) return;
            } catch (e3) {
                return "";
            }
            t2 = t2 || "localCachev1";
            var n2 = this._storage.getItem(e2);
            if (!n2) return "";
            if (n2.indexOf(t2) >= 0) {
                return JSON.parse(n2).content;
            }
            return "";
        }
    }, {
        key: "removeStore",
        value: function removeStore(e2) {
            this._storage.removeItem(e2);
        }
    } ]);
}();

var Ee = {}, Le = {};

function Re(e2) {
    return Ee[e2];
}

var Ue = /* */ _createClass2(function Ue(e2, t2) {
    _classCallCheck2(this, Ue);
    this.data = t2 || null, this.name = e2;
});

var Ne = /* */ function(_Ue) {
    function Ne(e2, t2) {
        var _this14;
        _classCallCheck2(this, Ne);
        _this14 = _callSuper(this, Ne, [ "error", {
            error: e2,
            data: t2
        } ]), _this14.error = e2;
        return _this14;
    }
    _inherits2(Ne, _Ue);
    return _createClass2(Ne);
}(Ue);

var De = new (/* */ function() {
    function _class() {
        _classCallCheck2(this, _class);
        this._listeners = {};
    }
    return _createClass2(_class, [ {
        key: "on",
        value: function on(e2, t2) {
            return function(e3, t3, n2) {
                n2[e3] = n2[e3] || [], n2[e3].push(t3);
            }(e2, t2, this._listeners), this;
        }
    }, {
        key: "off",
        value: function off(e2, t2) {
            return function(e3, t3, n2) {
                if (n2 && n2[e3]) {
                    var s2 = n2[e3].indexOf(t3);
                    -1 !== s2 && n2[e3].splice(s2, 1);
                }
            }(e2, t2, this._listeners), this;
        }
    }, {
        key: "fire",
        value: function fire(e2, t2) {
            if (e2 instanceof Ne) return console.error(e2.error), this;
            var n2 = "string" == typeof e2 ? new Ue(e2, t2 || {}) : e2;
            var s2 = n2.name;
            if (this._listens(s2)) {
                n2.target = this;
                var e3 = this._listeners[s2] ? _toConsumableArray2(this._listeners[s2]) : [];
                var _iterator7 = _createForOfIteratorHelper2(e3), _step7;
                try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                        var t3 = _step7.value;
                        t3.call(this, n2);
                    }
                } catch (err) {
                    _iterator7.e(err);
                } finally {
                    _iterator7.f();
                }
            }
            return this;
        }
    }, {
        key: "_listens",
        value: function _listens(e2) {
            return this._listeners[e2] && this._listeners[e2].length > 0;
        }
    } ]);
}())();

function Me(e2, t2) {
    De.on(e2, t2);
}

function qe(e2) {
    var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    De.fire(e2, t2);
}

function Fe(e2, t2) {
    De.off(e2, t2);
}

var Ke = "loginStateChanged", je = "loginStateExpire", $e = "loginTypeChanged", Be = "anonymousConverted", We = "refreshAccessToken";

var He;

!function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", 
    e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", 
    e2.NULL = "NULL";
}(He || (He = {}));

var Je = [ "auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered" ], ze = {
    "X-SDK-Version": "1.3.5"
};

function Ve(e2, t2, n2) {
    var s2 = e2[t2];
    e2[t2] = function(t3) {
        var r2 = {}, i2 = {};
        n2.forEach(function(n3) {
            var _n3$call = n3.call(e2, t3), s3 = _n3$call.data, o3 = _n3$call.headers;
            Object.assign(r2, s3), Object.assign(i2, o3);
        });
        var o2 = t3.data;
        return o2 && function() {
            var e3;
            if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3)) t3.data = _objectSpread2(_objectSpread2({}, o2), r2); else for (var e4 in r2) o2.append(e4, r2[e4]);
        }(), t3.headers = _objectSpread2(_objectSpread2({}, t3.headers || {}), i2), s2.call(e2, t3);
    };
}

function Ge() {
    var e2 = Math.random().toString(16).slice(2);
    return {
        data: {
            seqId: e2
        },
        headers: _objectSpread2(_objectSpread2({}, ze), {}, {
            "x-seqid": e2
        })
    };
}

var Ye = /* */ function() {
    function Ye() {
        var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck2(this, Ye);
        var t2;
        this.config = e2, this._reqClass = new Ce.adapter.reqClass({
            timeout: this.config.timeout,
            timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"),
            restrictedMethods: [ "post" ]
        }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, 
        Le[t2]), Ve(this._reqClass, "post", [ Ge ]), Ve(this._reqClass, "upload", [ Ge ]), 
        Ve(this._reqClass, "download", [ Ge ]);
    }
    return _createClass2(Ye, [ {
        key: "post",
        value: function() {
            var _post = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee5(e2) {
                return _regeneratorRuntime2().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return this._reqClass.post(e2);

                      case 2:
                        return _context5.abrupt("return", _context5.sent);

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                }, _callee5, this);
            }));
            function post(_x2) {
                return _post.apply(this, arguments);
            }
            return post;
        }()
    }, {
        key: "upload",
        value: function() {
            var _upload = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee6(e2) {
                return _regeneratorRuntime2().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return this._reqClass.upload(e2);

                      case 2:
                        return _context6.abrupt("return", _context6.sent);

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                }, _callee6, this);
            }));
            function upload(_x3) {
                return _upload.apply(this, arguments);
            }
            return upload;
        }()
    }, {
        key: "download",
        value: function() {
            var _download = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee7(e2) {
                return _regeneratorRuntime2().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this._reqClass.download(e2);

                      case 2:
                        return _context7.abrupt("return", _context7.sent);

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                }, _callee7, this);
            }));
            function download(_x4) {
                return _download.apply(this, arguments);
            }
            return download;
        }()
    }, {
        key: "refreshAccessToken",
        value: function() {
            var _refreshAccessToken2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee8() {
                var e2, t2;
                return _regeneratorRuntime2().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                        _context8.prev = 1;
                        _context8.next = 4;
                        return this._refreshAccessTokenPromise;

                      case 4:
                        e2 = _context8.sent;
                        _context8.next = 10;
                        break;

                      case 7:
                        _context8.prev = 7;
                        _context8.t0 = _context8["catch"](1);
                        t2 = _context8.t0;

                      case 10:
                        if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, 
                        t2)) {
                            _context8.next = 12;
                            break;
                        }
                        throw t2;

                      case 12:
                        return _context8.abrupt("return", e2);

                      case 13:
                      case "end":
                        return _context8.stop();
                    }
                }, _callee8, this, [ [ 1, 7 ] ]);
            }));
            function refreshAccessToken() {
                return _refreshAccessToken2.apply(this, arguments);
            }
            return refreshAccessToken;
        }()
    }, {
        key: "_refreshAccessToken",
        value: function() {
            var _refreshAccessToken3 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee9() {
                var _this$_cache$keys, e2, t2, n2, s2, r2, i2, o2, a2, e3, e4, t3, s3;
                return _regeneratorRuntime2().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        _this$_cache$keys = this._cache.keys, e2 = _this$_cache$keys.accessTokenKey, t2 = _this$_cache$keys.accessTokenExpireKey, 
                        n2 = _this$_cache$keys.refreshTokenKey, s2 = _this$_cache$keys.loginTypeKey, r2 = _this$_cache$keys.anonymousUuidKey;
                        this._cache.removeStore(e2), this._cache.removeStore(t2);
                        i2 = this._cache.getStore(n2);
                        if (i2) {
                            _context9.next = 5;
                            break;
                        }
                        throw new te({
                            message: "未登录CloudBase"
                        });

                      case 5:
                        o2 = {
                            refresh_token: i2
                        };
                        _context9.next = 8;
                        return this.request("auth.fetchAccessTokenWithRefreshToken", o2);

                      case 8:
                        a2 = _context9.sent;
                        if (!a2.data.code) {
                            _context9.next = 21;
                            break;
                        }
                        e3 = a2.data.code;
                        if (!("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3)) {
                            _context9.next = 20;
                            break;
                        }
                        if (!(this._cache.getStore(s2) === He.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3)) {
                            _context9.next = 19;
                            break;
                        }
                        e4 = this._cache.getStore(r2);
                        t3 = this._cache.getStore(n2);
                        _context9.next = 17;
                        return this.send("auth.signInAnonymously", {
                            anonymous_uuid: e4,
                            refresh_token: t3
                        });

                      case 17:
                        s3 = _context9.sent;
                        return _context9.abrupt("return", (this.setRefreshToken(s3.refresh_token), this._refreshAccessToken()));

                      case 19:
                        qe(je), this._cache.removeStore(n2);

                      case 20:
                        throw new te({
                            code: a2.data.code,
                            message: "刷新access token失败：".concat(a2.data.code)
                        });

                      case 21:
                        if (!a2.data.access_token) {
                            _context9.next = 23;
                            break;
                        }
                        return _context9.abrupt("return", (qe(We), this._cache.setStore(e2, a2.data.access_token), 
                        this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), {
                            accessToken: a2.data.access_token,
                            accessTokenExpire: a2.data.access_token_expire
                        }));

                      case 23:
                        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), 
                        this._refreshAccessToken());

                      case 24:
                      case "end":
                        return _context9.stop();
                    }
                }, _callee9, this);
            }));
            function _refreshAccessToken() {
                return _refreshAccessToken3.apply(this, arguments);
            }
            return _refreshAccessToken;
        }()
    }, {
        key: "getAccessToken",
        value: function() {
            var _getAccessToken = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee10() {
                var _this$_cache$keys2, e2, t2, n2, s2, r2, i2;
                return _regeneratorRuntime2().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        _this$_cache$keys2 = this._cache.keys, e2 = _this$_cache$keys2.accessTokenKey, t2 = _this$_cache$keys2.accessTokenExpireKey, 
                        n2 = _this$_cache$keys2.refreshTokenKey;
                        if (this._cache.getStore(n2)) {
                            _context10.next = 3;
                            break;
                        }
                        throw new te({
                            message: "refresh token不存在，登录状态异常"
                        });

                      case 3:
                        s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
                        _context10.t0 = this._shouldRefreshAccessTokenHook;
                        if (!_context10.t0) {
                            _context10.next = 9;
                            break;
                        }
                        _context10.next = 8;
                        return this._shouldRefreshAccessTokenHook(s2, r2);

                      case 8:
                        _context10.t0 = !_context10.sent;

                      case 9:
                        _context10.t1 = _context10.t0;
                        if (!_context10.t1) {
                            _context10.next = 12;
                            break;
                        }
                        i2 = false;

                      case 12:
                        return _context10.abrupt("return", (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : {
                            accessToken: s2,
                            accessTokenExpire: r2
                        });

                      case 13:
                      case "end":
                        return _context10.stop();
                    }
                }, _callee10, this);
            }));
            function getAccessToken() {
                return _getAccessToken.apply(this, arguments);
            }
            return getAccessToken;
        }()
    }, {
        key: "request",
        value: function() {
            var _request = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee11(e2, t2, n2) {
                var s2, r2, i2, e3, o2, _e3, _e4, a2, c2, u2, l2, h2, d2, p2, f2, g2;
                return _regeneratorRuntime2().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        s2 = "x-tcb-trace_".concat(this.config.env);
                        r2 = "application/x-www-form-urlencoded";
                        i2 = _objectSpread2({
                            action: e2,
                            env: this.config.env,
                            dataVersion: "2019-08-16"
                        }, t2);
                        if (!(-1 === Je.indexOf(e2))) {
                            _context11.next = 10;
                            break;
                        }
                        e3 = this._cache.keys.refreshTokenKey;
                        _context11.t0 = this._cache.getStore(e3);
                        if (!_context11.t0) {
                            _context11.next = 10;
                            break;
                        }
                        _context11.next = 9;
                        return this.getAccessToken();

                      case 9:
                        i2.access_token = _context11.sent.accessToken;

                      case 10:
                        if ("storage.uploadFile" === e2) {
                            o2 = new FormData();
                            for (_e3 in o2) o2.hasOwnProperty(_e3) && void 0 !== o2[_e3] && o2.append(_e3, i2[_e3]);
                            r2 = "multipart/form-data";
                        } else {
                            r2 = "application/json", o2 = {};
                            for (_e4 in i2) void 0 !== i2[_e4] && (o2[_e4] = i2[_e4]);
                        }
                        a2 = {
                            headers: {
                                "content-type": r2
                            }
                        };
                        n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
                        c2 = this._localCache.getStore(s2);
                        c2 && (a2.headers["X-TCB-Trace"] = c2);
                        u2 = t2.parse, l2 = t2.inQuery, h2 = t2.search;
                        d2 = {
                            env: this.config.env
                        };
                        u2 && (d2.parse = true), l2 && (d2 = _objectSpread2(_objectSpread2({}, l2), d2));
                        p2 = function(e3, t3) {
                            var n3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                            var s3 = /\?/.test(t3);
                            var r3 = "";
                            for (var e4 in n3) "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += "".concat(e4, "=").concat(encodeURIComponent(n3[e4]));
                            return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : "".concat(e3).concat(t3);
                        }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
                        h2 && (p2 += h2);
                        _context11.next = 22;
                        return this.post(_objectSpread2({
                            url: p2,
                            data: o2
                        }, a2));

                      case 22:
                        f2 = _context11.sent;
                        g2 = f2.header && f2.header["x-tcb-trace"];
                        if (!(g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)) {
                            _context11.next = 26;
                            break;
                        }
                        throw new te({
                            code: "NETWORK_ERROR",
                            message: "network request error"
                        });

                      case 26:
                        return _context11.abrupt("return", f2);

                      case 27:
                      case "end":
                        return _context11.stop();
                    }
                }, _callee11, this);
            }));
            function request(_x5, _x6, _x7) {
                return _request.apply(this, arguments);
            }
            return request;
        }()
    }, {
        key: "send",
        value: function() {
            var _send = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee12(e2) {
                var t2, n2, s2, s3, _args12 = arguments;
                return _regeneratorRuntime2().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        t2 = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                        n2 = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : {};
                        _context12.next = 4;
                        return this.request(e2, t2, _objectSpread2(_objectSpread2({}, n2), {}, {
                            onUploadProgress: t2.onUploadProgress
                        }));

                      case 4:
                        s2 = _context12.sent;
                        if (!("ACCESS_TOKEN_EXPIRED" === s2.data.code && -1 === Je.indexOf(e2))) {
                            _context12.next = 14;
                            break;
                        }
                        _context12.next = 8;
                        return this.refreshAccessToken();

                      case 8:
                        _context12.next = 10;
                        return this.request(e2, t2, _objectSpread2(_objectSpread2({}, n2), {}, {
                            onUploadProgress: t2.onUploadProgress
                        }));

                      case 10:
                        s3 = _context12.sent;
                        if (!s3.data.code) {
                            _context12.next = 13;
                            break;
                        }
                        throw new te({
                            code: s3.data.code,
                            message: s3.data.message
                        });

                      case 13:
                        return _context12.abrupt("return", s3.data);

                      case 14:
                        if (!s2.data.code) {
                            _context12.next = 16;
                            break;
                        }
                        throw new te({
                            code: s2.data.code,
                            message: s2.data.message
                        });

                      case 16:
                        return _context12.abrupt("return", s2.data);

                      case 17:
                      case "end":
                        return _context12.stop();
                    }
                }, _callee12, this);
            }));
            function send(_x8) {
                return _send.apply(this, arguments);
            }
            return send;
        }()
    }, {
        key: "setRefreshToken",
        value: function setRefreshToken(e2) {
            var _this$_cache$keys3 = this._cache.keys, t2 = _this$_cache$keys3.accessTokenKey, n2 = _this$_cache$keys3.accessTokenExpireKey, s2 = _this$_cache$keys3.refreshTokenKey;
            this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
        }
    } ]);
}();

var Qe = {};

function Xe(e2) {
    return Qe[e2];
}

var Ze = /* */ function() {
    function Ze(e2) {
        _classCallCheck2(this, Ze);
        this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env);
    }
    return _createClass2(Ze, [ {
        key: "setRefreshToken",
        value: function setRefreshToken(e2) {
            var _this$_cache$keys4 = this._cache.keys, t2 = _this$_cache$keys4.accessTokenKey, n2 = _this$_cache$keys4.accessTokenExpireKey, s2 = _this$_cache$keys4.refreshTokenKey;
            this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
        }
    }, {
        key: "setAccessToken",
        value: function setAccessToken(e2, t2) {
            var _this$_cache$keys5 = this._cache.keys, n2 = _this$_cache$keys5.accessTokenKey, s2 = _this$_cache$keys5.accessTokenExpireKey;
            this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
        }
    }, {
        key: "refreshUserInfo",
        value: function() {
            var _refreshUserInfo = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee13() {
                var _yield$this$_request$, e2;
                return _regeneratorRuntime2().wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return this._request.send("auth.getUserInfo", {});

                      case 2:
                        _yield$this$_request$ = _context13.sent;
                        e2 = _yield$this$_request$.data;
                        return _context13.abrupt("return", (this.setLocalUserInfo(e2), e2));

                      case 5:
                      case "end":
                        return _context13.stop();
                    }
                }, _callee13, this);
            }));
            function refreshUserInfo() {
                return _refreshUserInfo.apply(this, arguments);
            }
            return refreshUserInfo;
        }()
    }, {
        key: "setLocalUserInfo",
        value: function setLocalUserInfo(e2) {
            var t2 = this._cache.keys.userInfoKey;
            this._cache.setStore(t2, e2);
        }
    } ]);
}();

var et = /* */ function() {
    function et(e2) {
        _classCallCheck2(this, et);
        if (!e2) throw new te({
            code: "PARAM_ERROR",
            message: "envId is not defined"
        });
        this._envId = e2, this._cache = Re(this._envId), this._request = Xe(this._envId), 
        this.setUserInfo();
    }
    return _createClass2(et, [ {
        key: "linkWithTicket",
        value: function linkWithTicket(e2) {
            if ("string" != typeof e2) throw new te({
                code: "PARAM_ERROR",
                message: "ticket must be string"
            });
            return this._request.send("auth.linkWithTicket", {
                ticket: e2
            });
        }
    }, {
        key: "linkWithRedirect",
        value: function linkWithRedirect(e2) {
            e2.signInWithRedirect();
        }
    }, {
        key: "updatePassword",
        value: function updatePassword(e2, t2) {
            return this._request.send("auth.updatePassword", {
                oldPassword: t2,
                newPassword: e2
            });
        }
    }, {
        key: "updateEmail",
        value: function updateEmail(e2) {
            return this._request.send("auth.updateEmail", {
                newEmail: e2
            });
        }
    }, {
        key: "updateUsername",
        value: function updateUsername(e2) {
            if ("string" != typeof e2) throw new te({
                code: "PARAM_ERROR",
                message: "username must be a string"
            });
            return this._request.send("auth.updateUsername", {
                username: e2
            });
        }
    }, {
        key: "getLinkedUidList",
        value: function() {
            var _getLinkedUidList = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee14() {
                var _yield$this$_request$2, e2, t2, n2;
                return _regeneratorRuntime2().wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return this._request.send("auth.getLinkedUidList", {});

                      case 2:
                        _yield$this$_request$2 = _context14.sent;
                        e2 = _yield$this$_request$2.data;
                        t2 = false;
                        n2 = e2.users;
                        return _context14.abrupt("return", (n2.forEach(function(e3) {
                            e3.wxOpenId && e3.wxPublicId && (t2 = true);
                        }), {
                            users: n2,
                            hasPrimaryUid: t2
                        }));

                      case 7:
                      case "end":
                        return _context14.stop();
                    }
                }, _callee14, this);
            }));
            function getLinkedUidList() {
                return _getLinkedUidList.apply(this, arguments);
            }
            return getLinkedUidList;
        }()
    }, {
        key: "setPrimaryUid",
        value: function setPrimaryUid(e2) {
            return this._request.send("auth.setPrimaryUid", {
                uid: e2
            });
        }
    }, {
        key: "unlink",
        value: function unlink(e2) {
            return this._request.send("auth.unlink", {
                platform: e2
            });
        }
    }, {
        key: "update",
        value: function() {
            var _update = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee15(e2) {
                var t2, n2, s2, r2, i2, o2, _yield$this$_request$3, a2;
                return _regeneratorRuntime2().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        t2 = e2.nickName;
                        n2 = e2.gender;
                        s2 = e2.avatarUrl;
                        r2 = e2.province;
                        i2 = e2.country;
                        o2 = e2.city;
                        _context15.next = 8;
                        return this._request.send("auth.updateUserInfo", {
                            nickName: t2,
                            gender: n2,
                            avatarUrl: s2,
                            province: r2,
                            country: i2,
                            city: o2
                        });

                      case 8:
                        _yield$this$_request$3 = _context15.sent;
                        a2 = _yield$this$_request$3.data;
                        this.setLocalUserInfo(a2);

                      case 11:
                      case "end":
                        return _context15.stop();
                    }
                }, _callee15, this);
            }));
            function update(_x9) {
                return _update.apply(this, arguments);
            }
            return update;
        }()
    }, {
        key: "refresh",
        value: function() {
            var _refresh = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee16() {
                var _yield$this$_request$4, e2;
                return _regeneratorRuntime2().wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return this._request.send("auth.getUserInfo", {});

                      case 2:
                        _yield$this$_request$4 = _context16.sent;
                        e2 = _yield$this$_request$4.data;
                        return _context16.abrupt("return", (this.setLocalUserInfo(e2), e2));

                      case 5:
                      case "end":
                        return _context16.stop();
                    }
                }, _callee16, this);
            }));
            function refresh() {
                return _refresh.apply(this, arguments);
            }
            return refresh;
        }()
    }, {
        key: "setUserInfo",
        value: function setUserInfo() {
            var _this15 = this;
            var e2 = this._cache.keys.userInfoKey, t2 = this._cache.getStore(e2);
            [ "uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl" ].forEach(function(e3) {
                _this15[e3] = t2[e3];
            }), this.location = {
                country: t2.country,
                province: t2.province,
                city: t2.city
            };
        }
    }, {
        key: "setLocalUserInfo",
        value: function setLocalUserInfo(e2) {
            var t2 = this._cache.keys.userInfoKey;
            this._cache.setStore(t2, e2), this.setUserInfo();
        }
    } ]);
}();

var tt = /* */ function() {
    function tt(e2) {
        _classCallCheck2(this, tt);
        if (!e2) throw new te({
            code: "PARAM_ERROR",
            message: "envId is not defined"
        });
        this._cache = Re(e2);
        var _this$_cache$keys6 = this._cache.keys, t2 = _this$_cache$keys6.refreshTokenKey, n2 = _this$_cache$keys6.accessTokenKey, s2 = _this$_cache$keys6.accessTokenExpireKey, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
        this.credential = {
            refreshToken: r2,
            accessToken: i2,
            accessTokenExpire: o2
        }, this.user = new et(e2);
    }
    return _createClass2(tt, [ {
        key: "isAnonymousAuth",
        get: function get() {
            return this.loginType === He.ANONYMOUS;
        }
    }, {
        key: "isCustomAuth",
        get: function get() {
            return this.loginType === He.CUSTOM;
        }
    }, {
        key: "isWeixinAuth",
        get: function get() {
            return this.loginType === He.WECHAT || this.loginType === He.WECHAT_OPEN || this.loginType === He.WECHAT_PUBLIC;
        }
    }, {
        key: "loginType",
        get: function get() {
            return this._cache.getStore(this._cache.keys.loginTypeKey);
        }
    } ]);
}();

var nt = /* */ function(_Ze) {
    function nt() {
        _classCallCheck2(this, nt);
        return _callSuper(this, nt, arguments);
    }
    _inherits2(nt, _Ze);
    return _createClass2(nt, [ {
        key: "signIn",
        value: function() {
            var _signIn = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee17() {
                var _this$_cache$keys7, e2, t2, n2, s2, r2, e3;
                return _regeneratorRuntime2().wrap(function _callee17$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                      case 0:
                        this._cache.updatePersistence("local");
                        _this$_cache$keys7 = this._cache.keys;
                        e2 = _this$_cache$keys7.anonymousUuidKey;
                        t2 = _this$_cache$keys7.refreshTokenKey;
                        n2 = this._cache.getStore(e2) || void 0;
                        s2 = this._cache.getStore(t2) || void 0;
                        _context17.next = 8;
                        return this._request.send("auth.signInAnonymously", {
                            anonymous_uuid: n2,
                            refresh_token: s2
                        });

                      case 8:
                        r2 = _context17.sent;
                        if (!(r2.uuid && r2.refresh_token)) {
                            _context17.next = 20;
                            break;
                        }
                        this._setAnonymousUUID(r2.uuid);
                        this.setRefreshToken(r2.refresh_token);
                        _context17.next = 14;
                        return this._request.refreshAccessToken();

                      case 14:
                        qe(Ke);
                        qe($e, {
                            env: this.config.env,
                            loginType: He.ANONYMOUS,
                            persistence: "local"
                        });
                        e3 = new tt(this.config.env);
                        _context17.next = 19;
                        return e3.user.refresh();

                      case 19:
                        return _context17.abrupt("return", e3);

                      case 20:
                        throw new te({
                            message: "匿名登录失败"
                        });

                      case 21:
                      case "end":
                        return _context17.stop();
                    }
                }, _callee17, this);
            }));
            function signIn() {
                return _signIn.apply(this, arguments);
            }
            return signIn;
        }()
    }, {
        key: "linkAndRetrieveDataWithTicket",
        value: function() {
            var _linkAndRetrieveDataWithTicket = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee18(e2) {
                var _this$_cache$keys8, t2, n2, s2, r2, i2;
                return _regeneratorRuntime2().wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                      case 0:
                        _this$_cache$keys8 = this._cache.keys;
                        t2 = _this$_cache$keys8.anonymousUuidKey;
                        n2 = _this$_cache$keys8.refreshTokenKey;
                        s2 = this._cache.getStore(t2);
                        r2 = this._cache.getStore(n2);
                        _context18.next = 7;
                        return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                            anonymous_uuid: s2,
                            refresh_token: r2,
                            ticket: e2
                        });

                      case 7:
                        i2 = _context18.sent;
                        if (!i2.refresh_token) {
                            _context18.next = 16;
                            break;
                        }
                        this._clearAnonymousUUID();
                        this.setRefreshToken(i2.refresh_token);
                        _context18.next = 13;
                        return this._request.refreshAccessToken();

                      case 13:
                        qe(Be, {
                            env: this.config.env
                        });
                        qe($e, {
                            loginType: He.CUSTOM,
                            persistence: "local"
                        });
                        return _context18.abrupt("return", {
                            credential: {
                                refreshToken: i2.refresh_token
                            }
                        });

                      case 16:
                        throw new te({
                            message: "匿名转化失败"
                        });

                      case 17:
                      case "end":
                        return _context18.stop();
                    }
                }, _callee18, this);
            }));
            function linkAndRetrieveDataWithTicket(_x10) {
                return _linkAndRetrieveDataWithTicket.apply(this, arguments);
            }
            return linkAndRetrieveDataWithTicket;
        }()
    }, {
        key: "_setAnonymousUUID",
        value: function _setAnonymousUUID(e2) {
            var _this$_cache$keys9 = this._cache.keys, t2 = _this$_cache$keys9.anonymousUuidKey, n2 = _this$_cache$keys9.loginTypeKey;
            this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, He.ANONYMOUS);
        }
    }, {
        key: "_clearAnonymousUUID",
        value: function _clearAnonymousUUID() {
            this._cache.removeStore(this._cache.keys.anonymousUuidKey);
        }
    } ]);
}(Ze);

var st = /* */ function(_Ze2) {
    function st() {
        _classCallCheck2(this, st);
        return _callSuper(this, st, arguments);
    }
    _inherits2(st, _Ze2);
    return _createClass2(st, [ {
        key: "signIn",
        value: function() {
            var _signIn2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee19(e2) {
                var t2, n2;
                return _regeneratorRuntime2().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        if (!("string" != typeof e2)) {
                            _context19.next = 2;
                            break;
                        }
                        throw new te({
                            code: "PARAM_ERROR",
                            message: "ticket must be a string"
                        });

                      case 2:
                        t2 = this._cache.keys.refreshTokenKey;
                        _context19.next = 5;
                        return this._request.send("auth.signInWithTicket", {
                            ticket: e2,
                            refresh_token: this._cache.getStore(t2) || ""
                        });

                      case 5:
                        n2 = _context19.sent;
                        if (!n2.refresh_token) {
                            _context19.next = 15;
                            break;
                        }
                        this.setRefreshToken(n2.refresh_token);
                        _context19.next = 10;
                        return this._request.refreshAccessToken();

                      case 10:
                        qe(Ke);
                        qe($e, {
                            env: this.config.env,
                            loginType: He.CUSTOM,
                            persistence: this.config.persistence
                        });
                        _context19.next = 14;
                        return this.refreshUserInfo();

                      case 14:
                        return _context19.abrupt("return", new tt(this.config.env));

                      case 15:
                        throw new te({
                            message: "自定义登录失败"
                        });

                      case 16:
                      case "end":
                        return _context19.stop();
                    }
                }, _callee19, this);
            }));
            function signIn(_x11) {
                return _signIn2.apply(this, arguments);
            }
            return signIn;
        }()
    } ]);
}(Ze);

var rt = /* */ function(_Ze3) {
    function rt() {
        _classCallCheck2(this, rt);
        return _callSuper(this, rt, arguments);
    }
    _inherits2(rt, _Ze3);
    return _createClass2(rt, [ {
        key: "signIn",
        value: function() {
            var _signIn3 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee20(e2, t2) {
                var n2, s2, r2, i2, o2;
                return _regeneratorRuntime2().wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                      case 0:
                        if (!("string" != typeof e2)) {
                            _context20.next = 2;
                            break;
                        }
                        throw new te({
                            code: "PARAM_ERROR",
                            message: "email must be a string"
                        });

                      case 2:
                        n2 = this._cache.keys.refreshTokenKey;
                        _context20.next = 5;
                        return this._request.send("auth.signIn", {
                            loginType: "EMAIL",
                            email: e2,
                            password: t2,
                            refresh_token: this._cache.getStore(n2) || ""
                        });

                      case 5:
                        s2 = _context20.sent;
                        r2 = s2.refresh_token;
                        i2 = s2.access_token;
                        o2 = s2.access_token_expire;
                        if (!r2) {
                            _context20.next = 22;
                            break;
                        }
                        this.setRefreshToken(r2);
                        if (!(i2 && o2)) {
                            _context20.next = 15;
                            break;
                        }
                        this.setAccessToken(i2, o2);
                        _context20.next = 17;
                        break;

                      case 15:
                        _context20.next = 17;
                        return this._request.refreshAccessToken();

                      case 17:
                        _context20.next = 19;
                        return this.refreshUserInfo();

                      case 19:
                        qe(Ke);
                        qe($e, {
                            env: this.config.env,
                            loginType: He.EMAIL,
                            persistence: this.config.persistence
                        });
                        return _context20.abrupt("return", new tt(this.config.env));

                      case 22:
                        throw s2.code ? new te({
                            code: s2.code,
                            message: "邮箱登录失败: ".concat(s2.message)
                        }) : new te({
                            message: "邮箱登录失败"
                        });

                      case 23:
                      case "end":
                        return _context20.stop();
                    }
                }, _callee20, this);
            }));
            function signIn(_x12, _x13) {
                return _signIn3.apply(this, arguments);
            }
            return signIn;
        }()
    }, {
        key: "activate",
        value: function() {
            var _activate = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee21(e2) {
                return _regeneratorRuntime2().wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                      case 0:
                        return _context21.abrupt("return", this._request.send("auth.activateEndUserMail", {
                            token: e2
                        }));

                      case 1:
                      case "end":
                        return _context21.stop();
                    }
                }, _callee21, this);
            }));
            function activate(_x14) {
                return _activate.apply(this, arguments);
            }
            return activate;
        }()
    }, {
        key: "resetPasswordWithToken",
        value: function() {
            var _resetPasswordWithToken = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee22(e2, t2) {
                return _regeneratorRuntime2().wrap(function _callee22$(_context22) {
                    while (1) switch (_context22.prev = _context22.next) {
                      case 0:
                        return _context22.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                            token: e2,
                            newPassword: t2
                        }));

                      case 1:
                      case "end":
                        return _context22.stop();
                    }
                }, _callee22, this);
            }));
            function resetPasswordWithToken(_x15, _x16) {
                return _resetPasswordWithToken.apply(this, arguments);
            }
            return resetPasswordWithToken;
        }()
    } ]);
}(Ze);

var it = /* */ function(_Ze4) {
    function it() {
        _classCallCheck2(this, it);
        return _callSuper(this, it, arguments);
    }
    _inherits2(it, _Ze4);
    return _createClass2(it, [ {
        key: "signIn",
        value: function() {
            var _signIn4 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee23(e2, t2) {
                var n2, s2, r2, i2, o2;
                return _regeneratorRuntime2().wrap(function _callee23$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                      case 0:
                        if (!("string" != typeof e2)) {
                            _context23.next = 2;
                            break;
                        }
                        throw new te({
                            code: "PARAM_ERROR",
                            message: "username must be a string"
                        });

                      case 2:
                        "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
                        n2 = this._cache.keys.refreshTokenKey;
                        _context23.next = 6;
                        return this._request.send("auth.signIn", {
                            loginType: He.USERNAME,
                            username: e2,
                            password: t2,
                            refresh_token: this._cache.getStore(n2) || ""
                        });

                      case 6:
                        s2 = _context23.sent;
                        r2 = s2.refresh_token;
                        i2 = s2.access_token_expire;
                        o2 = s2.access_token;
                        if (!r2) {
                            _context23.next = 23;
                            break;
                        }
                        this.setRefreshToken(r2);
                        if (!(o2 && i2)) {
                            _context23.next = 16;
                            break;
                        }
                        this.setAccessToken(o2, i2);
                        _context23.next = 18;
                        break;

                      case 16:
                        _context23.next = 18;
                        return this._request.refreshAccessToken();

                      case 18:
                        _context23.next = 20;
                        return this.refreshUserInfo();

                      case 20:
                        qe(Ke);
                        qe($e, {
                            env: this.config.env,
                            loginType: He.USERNAME,
                            persistence: this.config.persistence
                        });
                        return _context23.abrupt("return", new tt(this.config.env));

                      case 23:
                        throw s2.code ? new te({
                            code: s2.code,
                            message: "用户名密码登录失败: ".concat(s2.message)
                        }) : new te({
                            message: "用户名密码登录失败"
                        });

                      case 24:
                      case "end":
                        return _context23.stop();
                    }
                }, _callee23, this);
            }));
            function signIn(_x17, _x18) {
                return _signIn4.apply(this, arguments);
            }
            return signIn;
        }()
    } ]);
}(Ze);

var ot = /* */ function() {
    function ot(e2) {
        _classCallCheck2(this, ot);
        this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), 
        this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Me($e, this._onLoginTypeChanged);
    }
    return _createClass2(ot, [ {
        key: "currentUser",
        get: function get() {
            var e2 = this.hasLoginState();
            return e2 && e2.user || null;
        }
    }, {
        key: "loginType",
        get: function get() {
            return this._cache.getStore(this._cache.keys.loginTypeKey);
        }
    }, {
        key: "anonymousAuthProvider",
        value: function anonymousAuthProvider() {
            return new nt(this.config);
        }
    }, {
        key: "customAuthProvider",
        value: function customAuthProvider() {
            return new st(this.config);
        }
    }, {
        key: "emailAuthProvider",
        value: function emailAuthProvider() {
            return new rt(this.config);
        }
    }, {
        key: "usernameAuthProvider",
        value: function usernameAuthProvider() {
            return new it(this.config);
        }
    }, {
        key: "signInAnonymously",
        value: function() {
            var _signInAnonymously = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee24() {
                return _regeneratorRuntime2().wrap(function _callee24$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                      case 0:
                        return _context24.abrupt("return", new nt(this.config).signIn());

                      case 1:
                      case "end":
                        return _context24.stop();
                    }
                }, _callee24, this);
            }));
            function signInAnonymously() {
                return _signInAnonymously.apply(this, arguments);
            }
            return signInAnonymously;
        }()
    }, {
        key: "signInWithEmailAndPassword",
        value: function() {
            var _signInWithEmailAndPassword = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee25(e2, t2) {
                return _regeneratorRuntime2().wrap(function _callee25$(_context25) {
                    while (1) switch (_context25.prev = _context25.next) {
                      case 0:
                        return _context25.abrupt("return", new rt(this.config).signIn(e2, t2));

                      case 1:
                      case "end":
                        return _context25.stop();
                    }
                }, _callee25, this);
            }));
            function signInWithEmailAndPassword(_x19, _x20) {
                return _signInWithEmailAndPassword.apply(this, arguments);
            }
            return signInWithEmailAndPassword;
        }()
    }, {
        key: "signInWithUsernameAndPassword",
        value: function signInWithUsernameAndPassword(e2, t2) {
            return new it(this.config).signIn(e2, t2);
        }
    }, {
        key: "linkAndRetrieveDataWithTicket",
        value: function() {
            var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee26(e2) {
                return _regeneratorRuntime2().wrap(function _callee26$(_context26) {
                    while (1) switch (_context26.prev = _context26.next) {
                      case 0:
                        this._anonymousAuthProvider || (this._anonymousAuthProvider = new nt(this.config)), 
                        Me(Be, this._onAnonymousConverted);
                        _context26.next = 3;
                        return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);

                      case 3:
                        return _context26.abrupt("return", _context26.sent);

                      case 4:
                      case "end":
                        return _context26.stop();
                    }
                }, _callee26, this);
            }));
            function linkAndRetrieveDataWithTicket(_x21) {
                return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
            }
            return linkAndRetrieveDataWithTicket;
        }()
    }, {
        key: "signOut",
        value: function() {
            var _signOut = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee27() {
                var _this$_cache$keys10, e2, t2, n2, s2, r2;
                return _regeneratorRuntime2().wrap(function _callee27$(_context27) {
                    while (1) switch (_context27.prev = _context27.next) {
                      case 0:
                        if (!(this.loginType === He.ANONYMOUS)) {
                            _context27.next = 2;
                            break;
                        }
                        throw new te({
                            message: "匿名用户不支持登出操作"
                        });

                      case 2:
                        _this$_cache$keys10 = this._cache.keys, e2 = _this$_cache$keys10.refreshTokenKey, 
                        t2 = _this$_cache$keys10.accessTokenKey, n2 = _this$_cache$keys10.accessTokenExpireKey, 
                        s2 = this._cache.getStore(e2);
                        if (s2) {
                            _context27.next = 5;
                            break;
                        }
                        return _context27.abrupt("return");

                      case 5:
                        _context27.next = 7;
                        return this._request.send("auth.logout", {
                            refresh_token: s2
                        });

                      case 7:
                        r2 = _context27.sent;
                        return _context27.abrupt("return", (this._cache.removeStore(e2), this._cache.removeStore(t2), 
                        this._cache.removeStore(n2), qe(Ke), qe($e, {
                            env: this.config.env,
                            loginType: He.NULL,
                            persistence: this.config.persistence
                        }), r2));

                      case 9:
                      case "end":
                        return _context27.stop();
                    }
                }, _callee27, this);
            }));
            function signOut() {
                return _signOut.apply(this, arguments);
            }
            return signOut;
        }()
    }, {
        key: "signUpWithEmailAndPassword",
        value: function() {
            var _signUpWithEmailAndPassword = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee28(e2, t2) {
                return _regeneratorRuntime2().wrap(function _callee28$(_context28) {
                    while (1) switch (_context28.prev = _context28.next) {
                      case 0:
                        return _context28.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                            email: e2,
                            password: t2
                        }));

                      case 1:
                      case "end":
                        return _context28.stop();
                    }
                }, _callee28, this);
            }));
            function signUpWithEmailAndPassword(_x22, _x23) {
                return _signUpWithEmailAndPassword.apply(this, arguments);
            }
            return signUpWithEmailAndPassword;
        }()
    }, {
        key: "sendPasswordResetEmail",
        value: function() {
            var _sendPasswordResetEmail = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee29(e2) {
                return _regeneratorRuntime2().wrap(function _callee29$(_context29) {
                    while (1) switch (_context29.prev = _context29.next) {
                      case 0:
                        return _context29.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                            email: e2
                        }));

                      case 1:
                      case "end":
                        return _context29.stop();
                    }
                }, _callee29, this);
            }));
            function sendPasswordResetEmail(_x24) {
                return _sendPasswordResetEmail.apply(this, arguments);
            }
            return sendPasswordResetEmail;
        }()
    }, {
        key: "onLoginStateChanged",
        value: function onLoginStateChanged(e2) {
            var _this16 = this;
            Me(Ke, function() {
                var t3 = _this16.hasLoginState();
                e2.call(_this16, t3);
            });
            var t2 = this.hasLoginState();
            e2.call(this, t2);
        }
    }, {
        key: "onLoginStateExpired",
        value: function onLoginStateExpired(e2) {
            Me(je, e2.bind(this));
        }
    }, {
        key: "onAccessTokenRefreshed",
        value: function onAccessTokenRefreshed(e2) {
            Me(We, e2.bind(this));
        }
    }, {
        key: "onAnonymousConverted",
        value: function onAnonymousConverted(e2) {
            Me(Be, e2.bind(this));
        }
    }, {
        key: "onLoginTypeChanged",
        value: function onLoginTypeChanged(e2) {
            var _this17 = this;
            Me($e, function() {
                var t2 = _this17.hasLoginState();
                e2.call(_this17, t2);
            });
        }
    }, {
        key: "getAccessToken",
        value: function() {
            var _getAccessToken2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee30() {
                return _regeneratorRuntime2().wrap(function _callee30$(_context30) {
                    while (1) switch (_context30.prev = _context30.next) {
                      case 0:
                        _context30.next = 2;
                        return this._request.getAccessToken();

                      case 2:
                        _context30.t0 = _context30.sent.accessToken;
                        _context30.t1 = this.config.env;
                        return _context30.abrupt("return", {
                            accessToken: _context30.t0,
                            env: _context30.t1
                        });

                      case 5:
                      case "end":
                        return _context30.stop();
                    }
                }, _callee30, this);
            }));
            function getAccessToken() {
                return _getAccessToken2.apply(this, arguments);
            }
            return getAccessToken;
        }()
    }, {
        key: "hasLoginState",
        value: function hasLoginState() {
            var e2 = this._cache.keys.refreshTokenKey;
            return this._cache.getStore(e2) ? new tt(this.config.env) : null;
        }
    }, {
        key: "isUsernameRegistered",
        value: function() {
            var _isUsernameRegistered = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee31(e2) {
                var _yield$this$_request$5, t2;
                return _regeneratorRuntime2().wrap(function _callee31$(_context31) {
                    while (1) switch (_context31.prev = _context31.next) {
                      case 0:
                        if (!("string" != typeof e2)) {
                            _context31.next = 2;
                            break;
                        }
                        throw new te({
                            code: "PARAM_ERROR",
                            message: "username must be a string"
                        });

                      case 2:
                        _context31.next = 4;
                        return this._request.send("auth.isUsernameRegistered", {
                            username: e2
                        });

                      case 4:
                        _yield$this$_request$5 = _context31.sent;
                        t2 = _yield$this$_request$5.data;
                        return _context31.abrupt("return", t2 && t2.isRegistered);

                      case 7:
                      case "end":
                        return _context31.stop();
                    }
                }, _callee31, this);
            }));
            function isUsernameRegistered(_x25) {
                return _isUsernameRegistered.apply(this, arguments);
            }
            return isUsernameRegistered;
        }()
    }, {
        key: "getLoginState",
        value: function getLoginState() {
            return Promise.resolve(this.hasLoginState());
        }
    }, {
        key: "signInWithTicket",
        value: function() {
            var _signInWithTicket = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee32(e2) {
                return _regeneratorRuntime2().wrap(function _callee32$(_context32) {
                    while (1) switch (_context32.prev = _context32.next) {
                      case 0:
                        return _context32.abrupt("return", new st(this.config).signIn(e2));

                      case 1:
                      case "end":
                        return _context32.stop();
                    }
                }, _callee32, this);
            }));
            function signInWithTicket(_x26) {
                return _signInWithTicket.apply(this, arguments);
            }
            return signInWithTicket;
        }()
    }, {
        key: "shouldRefreshAccessToken",
        value: function shouldRefreshAccessToken(e2) {
            this._request._shouldRefreshAccessTokenHook = e2.bind(this);
        }
    }, {
        key: "getUserInfo",
        value: function getUserInfo() {
            return this._request.send("auth.getUserInfo", {}).then(function(e2) {
                return e2.code ? e2 : _objectSpread2(_objectSpread2({}, e2.data), {}, {
                    requestId: e2.seqId
                });
            });
        }
    }, {
        key: "getAuthHeader",
        value: function getAuthHeader() {
            var _this$_cache$keys11 = this._cache.keys, e2 = _this$_cache$keys11.refreshTokenKey, t2 = _this$_cache$keys11.accessTokenKey, n2 = this._cache.getStore(e2);
            return {
                "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2
            };
        }
    }, {
        key: "_onAnonymousConverted",
        value: function _onAnonymousConverted(e2) {
            var t2 = e2.data.env;
            t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
        }
    }, {
        key: "_onLoginTypeChanged",
        value: function _onLoginTypeChanged(e2) {
            var _e2$data = e2.data, t2 = _e2$data.loginType, n2 = _e2$data.persistence, s2 = _e2$data.env;
            s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
        }
    } ]);
}();

var at = function at(e2, t2) {
    t2 = t2 || Ie();
    var n2 = Xe(this.config.env), s2 = e2.cloudPath, r2 = e2.filePath, i2 = e2.onUploadProgress, _e2$fileType = e2.fileType, o2 = _e2$fileType === void 0 ? "image" : _e2$fileType;
    return n2.send("storage.getUploadMetadata", {
        path: s2
    }).then(function(e3) {
        var _e3$data = e3.data, a2 = _e3$data.url, c2 = _e3$data.authorization, u2 = _e3$data.token, l2 = _e3$data.fileId, h2 = _e3$data.cosFileId, d2 = e3.requestId, p2 = {
            key: s2,
            signature: c2,
            "x-cos-meta-fileid": h2,
            success_action_status: "201",
            "x-cos-security-token": u2
        };
        n2.upload({
            url: a2,
            data: p2,
            file: r2,
            name: s2,
            fileType: o2,
            onUploadProgress: i2
        }).then(function(e4) {
            201 === e4.statusCode ? t2(null, {
                fileID: l2,
                requestId: d2
            }) : t2(new te({
                code: "STORAGE_REQUEST_FAIL",
                message: "STORAGE_REQUEST_FAIL: ".concat(e4.data)
            }));
        }).catch(function(e4) {
            t2(e4);
        });
    }).catch(function(e3) {
        t2(e3);
    }), t2.promise;
}, ct = function ct(e2, t2) {
    t2 = t2 || Ie();
    var n2 = Xe(this.config.env), s2 = e2.cloudPath;
    return n2.send("storage.getUploadMetadata", {
        path: s2
    }).then(function(e3) {
        t2(null, e3);
    }).catch(function(e3) {
        t2(e3);
    }), t2.promise;
}, ut = function ut(_ref35, t2) {
    var e2 = _ref35.fileList;
    if (t2 = t2 || Ie(), !e2 || !Array.isArray(e2)) return {
        code: "INVALID_PARAM",
        message: "fileList必须是非空的数组"
    };
    var _iterator8 = _createForOfIteratorHelper2(e2), _step8;
    try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            var t3 = _step8.value;
            if (!t3 || "string" != typeof t3) return {
                code: "INVALID_PARAM",
                message: "fileList的元素必须是非空的字符串"
            };
        }
    } catch (err) {
        _iterator8.e(err);
    } finally {
        _iterator8.f();
    }
    var n2 = {
        fileid_list: e2
    };
    return Xe(this.config.env).send("storage.batchDeleteFile", n2).then(function(e3) {
        e3.code ? t2(null, e3) : t2(null, {
            fileList: e3.data.delete_list,
            requestId: e3.requestId
        });
    }).catch(function(e3) {
        t2(e3);
    }), t2.promise;
}, lt = function lt(_ref36, t2) {
    var e2 = _ref36.fileList;
    t2 = t2 || Ie(), e2 && Array.isArray(e2) || t2(null, {
        code: "INVALID_PARAM",
        message: "fileList必须是非空的数组"
    });
    var n2 = [];
    var _iterator9 = _createForOfIteratorHelper2(e2), _step9;
    try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var s3 = _step9.value;
            "object" == _typeof2(s3) ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, {
                code: "INVALID_PARAM",
                message: "fileList的元素必须是包含fileID和maxAge的对象"
            }), n2.push({
                fileid: s3.fileID,
                max_age: s3.maxAge
            })) : "string" == typeof s3 ? n2.push({
                fileid: s3
            }) : t2(null, {
                code: "INVALID_PARAM",
                message: "fileList的元素必须是字符串"
            });
        }
    } catch (err) {
        _iterator9.e(err);
    } finally {
        _iterator9.f();
    }
    var s2 = {
        file_list: n2
    };
    return Xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then(function(e3) {
        e3.code ? t2(null, e3) : t2(null, {
            fileList: e3.data.download_list,
            requestId: e3.requestId
        });
    }).catch(function(e3) {
        t2(e3);
    }), t2.promise;
}, ht = /* */ function() {
    var _ref38 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee33(_ref37, t2) {
        var e2, n2, s2, r2;
        return _regeneratorRuntime2().wrap(function _callee33$(_context33) {
            while (1) switch (_context33.prev = _context33.next) {
              case 0:
                e2 = _ref37.fileID;
                _context33.next = 3;
                return lt.call(this, {
                    fileList: [ {
                        fileID: e2,
                        maxAge: 600
                    } ]
                });

              case 3:
                n2 = _context33.sent.fileList[0];
                if (!("SUCCESS" !== n2.code)) {
                    _context33.next = 6;
                    break;
                }
                return _context33.abrupt("return", t2 ? t2(n2) : new Promise(function(e3) {
                    e3(n2);
                }));

              case 6:
                s2 = Xe(this.config.env);
                r2 = n2.download_url;
                if (!(r2 = encodeURI(r2), !t2)) {
                    _context33.next = 10;
                    break;
                }
                return _context33.abrupt("return", s2.download({
                    url: r2
                }));

              case 10:
                _context33.t0 = t2;
                _context33.next = 13;
                return s2.download({
                    url: r2
                });

              case 13:
                _context33.t1 = _context33.sent;
                (0, _context33.t0)(_context33.t1);

              case 15:
              case "end":
                return _context33.stop();
            }
        }, _callee33, this);
    }));
    return function ht(_x27, _x28) {
        return _ref38.apply(this, arguments);
    };
}(), dt = function dt(_ref39, o2) {
    var e2 = _ref39.name, t2 = _ref39.data, n2 = _ref39.query, s2 = _ref39.parse, r2 = _ref39.search, i2 = _ref39.timeout;
    var a2 = o2 || Ie();
    var c2;
    try {
        c2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
        return Promise.reject(e3);
    }
    if (!e2) return Promise.reject(new te({
        code: "PARAM_ERROR",
        message: "函数名不能为空"
    }));
    var u2 = {
        inQuery: n2,
        parse: s2,
        search: r2,
        function_name: e2,
        request_data: c2
    };
    return Xe(this.config.env).send("functions.invokeFunction", u2, {
        timeout: i2
    }).then(function(e3) {
        if (e3.code) a2(null, e3); else {
            var t3 = e3.data.response_data;
            if (s2) a2(null, {
                result: t3,
                requestId: e3.requestId
            }); else try {
                t3 = JSON.parse(e3.data.response_data), a2(null, {
                    result: t3,
                    requestId: e3.requestId
                });
            } catch (e4) {
                a2(new te({
                    message: "response data must be json"
                }));
            }
        }
        return a2.promise;
    }).catch(function(e3) {
        a2(e3);
    }), a2.promise;
}, pt = {
    timeout: 15e3,
    persistence: "session"
}, ft = {};

var gt = /* */ function() {
    function gt(e2) {
        _classCallCheck2(this, gt);
        this.config = e2 || this.config, this.authObj = void 0;
    }
    return _createClass2(gt, [ {
        key: "init",
        value: function init(e2) {
            switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({
                timeout: e2.timeout || 5e3,
                timeoutMsg: "请求在".concat((e2.timeout || 5e3) / 1e3, "s内未完成，已中断")
            })), this.config = _objectSpread2(_objectSpread2({}, pt), e2), true) {
              case this.config.timeout > 6e5:
                console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
                break;

              case this.config.timeout < 100:
                console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
            }
            return new gt(this.config);
        }
    }, {
        key: "auth",
        value: function auth() {
            var _ref40 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref40.persistence;
            if (this.authObj) return this.authObj;
            var t2 = e2 || Ce.adapter.primaryStorage || pt.persistence;
            var n2;
            return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
                var t3 = e3.env;
                Ee[t3] = new Oe(e3), Le[t3] = new Oe(_objectSpread2(_objectSpread2({}, e3), {}, {
                    persistence: "local"
                }));
            }(this.config), n2 = this.config, Qe[n2.env] = new Ye(n2), this.authObj = new ot(this.config), 
            this.authObj;
        }
    }, {
        key: "on",
        value: function on(e2, t2) {
            return Me.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "off",
        value: function off(e2, t2) {
            return Fe.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "callFunction",
        value: function callFunction(e2, t2) {
            return dt.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "deleteFile",
        value: function deleteFile(e2, t2) {
            return ut.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "getTempFileURL",
        value: function getTempFileURL(e2, t2) {
            return lt.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "downloadFile",
        value: function downloadFile(e2, t2) {
            return ht.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "uploadFile",
        value: function uploadFile(e2, t2) {
            return at.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "getUploadMetadata",
        value: function getUploadMetadata(e2, t2) {
            return ct.apply(this, [ e2, t2 ]);
        }
    }, {
        key: "registerExtension",
        value: function registerExtension(e2) {
            ft[e2.name] = e2;
        }
    }, {
        key: "invokeExtension",
        value: function() {
            var _invokeExtension = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee34(e2, t2) {
                var n2;
                return _regeneratorRuntime2().wrap(function _callee34$(_context34) {
                    while (1) switch (_context34.prev = _context34.next) {
                      case 0:
                        n2 = ft[e2];
                        if (n2) {
                            _context34.next = 3;
                            break;
                        }
                        throw new te({
                            message: "扩展".concat(e2, " 必须先注册")
                        });

                      case 3:
                        _context34.next = 5;
                        return n2.invoke(t2, this);

                      case 5:
                        return _context34.abrupt("return", _context34.sent);

                      case 6:
                      case "end":
                        return _context34.stop();
                    }
                }, _callee34, this);
            }));
            function invokeExtension(_x29, _x30) {
                return _invokeExtension.apply(this, arguments);
            }
            return invokeExtension;
        }()
    }, {
        key: "useAdapters",
        value: function useAdapters(e2) {
            var _ref41 = Ae(e2) || {}, t2 = _ref41.adapter, n2 = _ref41.runtime;
            t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
        }
    } ]);
}();

var mt = new gt();

function yt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2) "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
}

var _t = /* */ function() {
    function _t() {
        _classCallCheck2(this, _t);
    }
    return _createClass2(_t, [ {
        key: "post",
        value: function post(e2) {
            var t2 = e2.url, n2 = e2.data, s2 = e2.headers, r2 = e2.timeout;
            return new Promise(function(e3, i2) {
                ne.request({
                    url: yt("https:", t2),
                    data: n2,
                    method: "POST",
                    header: s2,
                    timeout: r2,
                    success: function success(t3) {
                        e3(t3);
                    },
                    fail: function fail(e4) {
                        i2(e4);
                    }
                });
            });
        }
    }, {
        key: "upload",
        value: function upload(e2) {
            return new Promise(function(t2, n2) {
                var s2 = e2.url, r2 = e2.file, i2 = e2.data, o2 = e2.headers, a2 = e2.fileType, c2 = ne.uploadFile({
                    url: yt("https:", s2),
                    name: "file",
                    formData: Object.assign({}, i2),
                    filePath: r2,
                    fileType: a2,
                    header: o2,
                    success: function success(e3) {
                        var n3 = {
                            statusCode: e3.statusCode,
                            data: e3.data || {}
                        };
                        200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), 
                        t2(n3);
                    },
                    fail: function fail(e3) {
                        n2(new Error(e3.errMsg || "uploadFile:fail"));
                    }
                });
                "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate(function(t3) {
                    e2.onUploadProgress({
                        loaded: t3.totalBytesSent,
                        total: t3.totalBytesExpectedToSend
                    });
                });
            });
        }
    } ]);
}();

var wt = {
    setItem: function setItem(e2, t2) {
        ne.setStorageSync(e2, t2);
    },
    getItem: function getItem(e2) {
        return ne.getStorageSync(e2);
    },
    removeItem: function removeItem(e2) {
        ne.removeStorageSync(e2);
    },
    clear: function clear() {
        ne.clearStorageSync();
    }
};

var vt = {
    genAdapter: function genAdapter() {
        return {
            root: {},
            reqClass: _t,
            localStorage: wt,
            primaryStorage: "local"
        };
    },
    isMatch: function isMatch() {
        return true;
    },
    runtime: "uni_app"
};

mt.useAdapters(vt);

var It = mt, St = It.init;

It.init = function(e2) {
    e2.env = e2.spaceId;
    var t2 = St.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    var n2 = t2.auth;
    return t2.auth = function(e3) {
        var t3 = n2.call(this, e3);
        return [ "linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo" ].forEach(function(e4) {
            var n3;
            t3[e4] = (n3 = t3[e4], function(e5) {
                e5 = e5 || {};
                var _ee = ee(e5), t4 = _ee.success, s2 = _ee.fail, r2 = _ee.complete;
                if (!(t4 || s2 || r2)) return n3.call(this, e5);
                n3.call(this, e5).then(function(e6) {
                    t4 && t4(e6), r2 && r2(e6);
                }, function(e6) {
                    s2 && s2(e6), r2 && r2(e6);
                });
            }).bind(t3);
        }), t3;
    }, t2.customAuth = t2.auth, t2;
};

var bt = It;

function kt(_x31, _x32) {
    return _kt.apply(this, arguments);
}

function _kt() {
    _kt = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee44(e2, t2) {
        var n2, e3, s2;
        return _regeneratorRuntime2().wrap(function _callee44$(_context44) {
            while (1) switch (_context44.prev = _context44.next) {
              case 0:
                n2 = "http://".concat(e2, ":").concat(t2, "/system/ping");
                _context44.prev = 1;
                _context44.next = 4;
                return s2 = {
                    url: n2,
                    timeout: 500
                }, new Promise(function(e4, t3) {
                    ne.request(_objectSpread2(_objectSpread2({}, s2), {}, {
                        success: function success(t4) {
                            e4(t4);
                        },
                        fail: function fail(e5) {
                            t3(e5);
                        }
                    }));
                });

              case 4:
                e3 = _context44.sent;
                return _context44.abrupt("return", !(!e3.data || 0 !== e3.data.code));

              case 8:
                _context44.prev = 8;
                _context44.t0 = _context44["catch"](1);
                return _context44.abrupt("return", false);

              case 11:
              case "end":
                return _context44.stop();
            }
        }, _callee44, null, [ [ 1, 8 ] ]);
    }));
    return _kt.apply(this, arguments);
}

function At(_x33, _x34) {
    return _At.apply(this, arguments);
}

function _At() {
    _At = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee45(e2, t2) {
        var n2, s2, r2;
        return _regeneratorRuntime2().wrap(function _callee45$(_context45) {
            while (1) switch (_context45.prev = _context45.next) {
              case 0:
                s2 = 0;

              case 1:
                if (!(s2 < e2.length)) {
                    _context45.next = 11;
                    break;
                }
                r2 = e2[s2];
                _context45.next = 5;
                return kt(r2, t2);

              case 5:
                if (!_context45.sent) {
                    _context45.next = 8;
                    break;
                }
                n2 = r2;
                return _context45.abrupt("break", 11);

              case 8:
                s2++;
                _context45.next = 1;
                break;

              case 11:
                return _context45.abrupt("return", {
                    address: n2,
                    port: t2
                });

              case 12:
              case "end":
                return _context45.stop();
            }
        }, _callee45);
    }));
    return _At.apply(this, arguments);
}

var Ct = {
    "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign",
    "serverless.file.resource.report": "storage/report",
    "serverless.file.resource.delete": "storage/delete",
    "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url"
};

var Pt = /* */ function() {
    function Pt(e2) {
        _classCallCheck2(this, Pt);
        if ([ "spaceId", "clientSecret" ].forEach(function(t2) {
            if (!Object.prototype.hasOwnProperty.call(e2, t2)) throw new Error("".concat(t2, " required"));
        }), !e2.endpoint) throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
        this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", 
        this.config.envType = this.config.envType || "public", this.adapter = ne;
    }
    return _createClass2(Pt, [ {
        key: "request",
        value: function() {
            var _request2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee35(e2) {
                var _this18 = this;
                var t2, n2, _args35 = arguments;
                return _regeneratorRuntime2().wrap(function _callee35$(_context35) {
                    while (1) switch (_context35.prev = _context35.next) {
                      case 0:
                        t2 = _args35.length > 1 && _args35[1] !== undefined ? _args35[1] : true;
                        n2 = t2;
                        if (!n2) {
                            _context35.next = 8;
                            break;
                        }
                        _context35.next = 5;
                        return this.setupLocalRequest(e2);

                      case 5:
                        _context35.t0 = _context35.sent;
                        _context35.next = 9;
                        break;

                      case 8:
                        _context35.t0 = this.setupRequest(e2);

                      case 9:
                        e2 = _context35.t0;
                        return _context35.abrupt("return", Promise.resolve().then(function() {
                            return n2 ? _this18.requestLocal(e2) : de.wrappedRequest(e2, _this18.adapter.request);
                        }));

                      case 11:
                      case "end":
                        return _context35.stop();
                    }
                }, _callee35, this);
            }));
            function request(_x35) {
                return _request2.apply(this, arguments);
            }
            return request;
        }()
    }, {
        key: "requestLocal",
        value: function requestLocal(e2) {
            var _this19 = this;
            return new Promise(function(t2, n2) {
                _this19.adapter.request(Object.assign(e2, {
                    complete: function complete(e3) {
                        if (e3 || (e3 = {}), !e3.statusCode || e3.statusCode >= 400) {
                            var t3 = e3.data && e3.data.code || "SYS_ERR", s2 = e3.data && e3.data.message || "request:fail";
                            return n2(new te({
                                code: t3,
                                message: s2
                            }));
                        }
                        t2({
                            success: true,
                            result: e3.data
                        });
                    }
                }));
            });
        }
    }, {
        key: "setupRequest",
        value: function setupRequest(e2) {
            var t2 = Object.assign({}, e2, {
                spaceId: this.config.spaceId,
                timestamp: Date.now()
            }), n2 = {
                "Content-Type": "application/json"
            };
            n2["x-serverless-sign"] = de.sign(t2, this.config.clientSecret);
            var s2 = he();
            n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
            var _re = re(), r2 = _re.token;
            return n2["x-client-token"] = r2, {
                url: this.config.requestUrl,
                method: "POST",
                data: t2,
                dataType: "json",
                header: JSON.parse(JSON.stringify(n2))
            };
        }
    }, {
        key: "setupLocalRequest",
        value: function() {
            var _setupLocalRequest = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee36(e2) {
                var t2, _re2, n2, s2, _ref42, r2, i2, _yield$At, o2;
                return _regeneratorRuntime2().wrap(function _callee36$(_context36) {
                    while (1) switch (_context36.prev = _context36.next) {
                      case 0:
                        t2 = he();
                        _re2 = re();
                        n2 = _re2.token;
                        s2 = Object.assign({}, e2, {
                            spaceId: this.config.spaceId,
                            timestamp: Date.now(),
                            clientInfo: t2,
                            token: n2
                        });
                        _ref42 = this.__dev__ && this.__dev__.debugInfo || {};
                        r2 = _ref42.address;
                        i2 = _ref42.servePort;
                        _context36.next = 9;
                        return At(r2, i2);

                      case 9:
                        _yield$At = _context36.sent;
                        o2 = _yield$At.address;
                        return _context36.abrupt("return", {
                            url: "http://".concat(o2, ":").concat(i2, "/").concat(Ct[e2.method]),
                            method: "POST",
                            data: s2,
                            dataType: "json",
                            header: JSON.parse(JSON.stringify({
                                "Content-Type": "application/json"
                            }))
                        });

                      case 12:
                      case "end":
                        return _context36.stop();
                    }
                }, _callee36, this);
            }));
            function setupLocalRequest(_x36) {
                return _setupLocalRequest.apply(this, arguments);
            }
            return setupLocalRequest;
        }()
    }, {
        key: "callFunction",
        value: function callFunction(e2) {
            var t2 = {
                method: "serverless.function.runtime.invoke",
                params: JSON.stringify({
                    functionTarget: e2.name,
                    functionArgs: e2.data || {}
                })
            };
            return this.request(t2, false);
        }
    }, {
        key: "getUploadFileOptions",
        value: function getUploadFileOptions(e2) {
            var t2 = {
                method: "serverless.file.resource.generateProximalSign",
                params: JSON.stringify(e2)
            };
            return this.request(t2);
        }
    }, {
        key: "reportUploadFile",
        value: function reportUploadFile(e2) {
            var t2 = {
                method: "serverless.file.resource.report",
                params: JSON.stringify(e2)
            };
            return this.request(t2);
        }
    }, {
        key: "uploadFile",
        value: function uploadFile(_ref43) {
            var _this20 = this;
            var e2 = _ref43.filePath, t2 = _ref43.cloudPath, _ref43$fileType = _ref43.fileType, n2 = _ref43$fileType === void 0 ? "image" : _ref43$fileType, s2 = _ref43.onUploadProgress;
            if (!t2) throw new te({
                code: "CLOUDPATH_REQUIRED",
                message: "cloudPath不可为空"
            });
            var r2;
            return this.getUploadFileOptions({
                cloudPath: t2
            }).then(function(t3) {
                var _t3$result = t3.result, i2 = _t3$result.url, o2 = _t3$result.formData, a2 = _t3$result.name;
                return r2 = t3.result.fileUrl, new Promise(function(t4, r3) {
                    var c2 = _this20.adapter.uploadFile({
                        url: i2,
                        formData: o2,
                        name: a2,
                        filePath: e2,
                        fileType: n2,
                        success: function success(e3) {
                            e3 && e3.statusCode < 400 ? t4(e3) : r3(new te({
                                code: "UPLOAD_FAILED",
                                message: "文件上传失败"
                            }));
                        },
                        fail: function fail(e3) {
                            r3(new te({
                                code: e3.code || "UPLOAD_FAILED",
                                message: e3.message || e3.errMsg || "文件上传失败"
                            }));
                        }
                    });
                    "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate(function(e3) {
                        s2({
                            loaded: e3.totalBytesSent,
                            total: e3.totalBytesExpectedToSend
                        });
                    });
                });
            }).then(function() {
                return _this20.reportUploadFile({
                    cloudPath: t2
                });
            }).then(function(t3) {
                return new Promise(function(n3, s3) {
                    t3.success ? n3({
                        success: true,
                        filePath: e2,
                        fileID: r2
                    }) : s3(new te({
                        code: "UPLOAD_FAILED",
                        message: "文件上传失败"
                    }));
                });
            });
        }
    }, {
        key: "deleteFile",
        value: function deleteFile(_ref44) {
            var e2 = _ref44.fileList;
            var t2 = {
                method: "serverless.file.resource.delete",
                params: JSON.stringify({
                    fileList: e2
                })
            };
            return this.request(t2).then(function(e3) {
                if (e3.success) return e3.result;
                throw new te({
                    code: "DELETE_FILE_FAILED",
                    message: "删除文件失败"
                });
            });
        }
    }, {
        key: "getTempFileURL",
        value: function getTempFileURL() {
            var _ref45 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref45.fileList, t2 = _ref45.maxAge;
            if (!Array.isArray(e2) || 0 === e2.length) throw new te({
                code: "INVALID_PARAM",
                message: "fileList的元素必须是非空的字符串"
            });
            var n2 = {
                method: "serverless.file.resource.getTempFileURL",
                params: JSON.stringify({
                    fileList: e2,
                    maxAge: t2
                })
            };
            return this.request(n2).then(function(e3) {
                if (e3.success) return {
                    fileList: e3.result.fileList.map(function(e4) {
                        return {
                            fileID: e4.fileID,
                            tempFileURL: e4.tempFileURL
                        };
                    })
                };
                throw new te({
                    code: "GET_TEMP_FILE_URL_FAILED",
                    message: "获取临时文件链接失败"
                });
            });
        }
    } ]);
}();

var Tt = {
    init: function init(e2) {
        var t2 = new Pt(e2), n2 = {
            signInAnonymously: function signInAnonymously() {
                return Promise.resolve();
            },
            getLoginState: function getLoginState() {
                return Promise.resolve(false);
            }
        };
        return t2.auth = function() {
            return n2;
        }, t2.customAuth = t2.auth, t2;
    }
}, xt = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
});

function Ot() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
        var t2 = 16 * Math.random() | 0;
        return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
}

function Et() {
    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n2 = t2.data, s2 = t2.functionName, r2 = t2.method, i2 = t2.headers, _t2$signHeaderKeys = t2.signHeaderKeys, o2 = _t2$signHeaderKeys === void 0 ? [] : _t2$signHeaderKeys, a2 = t2.config, c2 = Date.now(), u2 = Ot(), l2 = Object.assign({}, i2, {
        "x-from-app-id": a2.spaceAppId,
        "x-from-env-id": a2.spaceId,
        "x-to-env-id": a2.spaceId,
        "x-from-instance-id": c2,
        "x-from-function-name": s2,
        "x-client-timestamp": c2,
        "x-alipay-source": "client",
        "x-request-id": u2,
        "x-alipay-callid": u2,
        "x-trace-id": u2
    }), h2 = [ "x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp" ].concat(o2), _ref46 = e2.split("?") || [], _ref47 = _slicedToArray2(_ref46, 2), _ref47$ = _ref47[0], d2 = _ref47$ === void 0 ? "" : _ref47$, _ref47$2 = _ref47[1], p2 = _ref47$2 === void 0 ? "" : _ref47$2, f2 = function(e3) {
        var t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map(function(t4) {
            return "".concat(t4.toLowerCase(), ":").concat(e3.headers[t4], "\n");
        }).join(""), s3 = we(e3.body).toString(xt), r3 = "".concat(e3.method.toUpperCase(), "\n").concat(e3.path, "\n").concat(e3.query, "\n").concat(n3, "\n").concat(t3, "\n").concat(s3, "\n"), i3 = we(r3).toString(xt), o3 = "HMAC-SHA256\n".concat(e3.timestamp, "\n").concat(i3, "\n"), a3 = ve(o3, e3.secretKey).toString(xt);
        return "HMAC-SHA256 Credential=".concat(e3.secretId, ", SignedHeaders=").concat(t3, ", Signature=").concat(a3);
    }({
        path: d2,
        query: p2,
        method: r2,
        headers: l2,
        timestamp: c2,
        body: JSON.stringify(n2),
        secretId: a2.accessKey,
        secretKey: a2.secretKey,
        signedHeaders: h2.sort()
    });
    return {
        url: "".concat(a2.endpoint).concat(e2),
        headers: Object.assign({}, l2, {
            Authorization: f2
        })
    };
}

function Lt(_ref48) {
    var e2 = _ref48.url, t2 = _ref48.data, _ref48$method = _ref48.method, n2 = _ref48$method === void 0 ? "POST" : _ref48$method, _ref48$headers = _ref48.headers, s2 = _ref48$headers === void 0 ? {} : _ref48$headers, r2 = _ref48.timeout;
    return new Promise(function(i2, o2) {
        ne.request({
            url: e2,
            method: n2,
            data: "object" == _typeof2(t2) ? JSON.stringify(t2) : t2,
            header: s2,
            dataType: "json",
            timeout: r2,
            complete: function complete() {
                var e3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var t3 = s2["x-trace-id"] || "";
                if (!e3.statusCode || e3.statusCode >= 400) {
                    var _ref49 = e3.data || {}, n3 = _ref49.message, s3 = _ref49.errMsg, r3 = _ref49.trace_id;
                    return o2(new te({
                        code: "SYS_ERR",
                        message: n3 || s3 || "request:fail",
                        requestId: r3 || t3
                    }));
                }
                i2({
                    status: e3.statusCode,
                    data: e3.data,
                    headers: e3.header,
                    requestId: t3
                });
            }
        });
    });
}

function Rt(e2, t2) {
    var n2 = e2.path, s2 = e2.data, _e2$method = e2.method, r2 = _e2$method === void 0 ? "GET" : _e2$method, _Et = Et(n2, {
        functionName: "",
        data: s2,
        method: r2,
        headers: {
            "x-alipay-cloud-mode": "oss",
            "x-data-api-type": "oss",
            "x-expire-timestamp": Date.now() + 6e4
        },
        signHeaderKeys: [ "x-data-api-type", "x-expire-timestamp" ],
        config: t2
    }), i2 = _Et.url, o2 = _Et.headers;
    return Lt({
        url: i2,
        data: s2,
        method: r2,
        headers: o2
    }).then(function(e3) {
        var t3 = e3.data || {};
        if (!t3.success) throw new te({
            code: e3.errCode,
            message: e3.errMsg,
            requestId: e3.requestId
        });
        return t3.data || {};
    }).catch(function(e3) {
        throw new te({
            code: e3.errCode,
            message: e3.errMsg,
            requestId: e3.requestId
        });
    });
}

function Ut() {
    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0) throw new te({
        code: "INVALID_PARAM",
        message: "fileID不合法"
    });
    var s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), 
    r2;
}

function Nt() {
    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
}

var Dt = /* */ function() {
    function Dt(e2) {
        _classCallCheck2(this, Dt);
        this.config = e2;
    }
    return _createClass2(Dt, [ {
        key: "signedURL",
        value: function signedURL(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var n2 = "/ws/function/".concat(e2), s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, {
                accessKeyId: this.config.accessKey,
                signatureNonce: Ot(),
                timestamp: "" + Date.now()
            }), i2 = [ n2, [ "accessKeyId", "authorization", "signatureNonce", "timestamp" ].sort().map(function(e3) {
                return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
            }).filter(Boolean).join("&"), "host:".concat(s2) ].join("\n"), o2 = [ "HMAC-SHA256", we(i2).toString(xt) ].join("\n"), a2 = ve(o2, this.config.secretKey).toString(xt), c2 = Object.keys(r2).map(function(e3) {
                return "".concat(e3, "=").concat(encodeURIComponent(r2[e3]));
            }).join("&");
            return "".concat(this.config.wsEndpoint).concat(n2, "?").concat(c2, "&signature=").concat(a2);
        }
    } ]);
}();

var Mt = /* */ function() {
    function Mt(e2) {
        _classCallCheck2(this, Mt);
        if ([ "spaceId", "spaceAppId", "accessKey", "secretKey" ].forEach(function(t2) {
            if (!Object.prototype.hasOwnProperty.call(e2, t2)) throw new Error("".concat(t2, " required"));
        }), e2.endpoint) {
            if ("string" != typeof e2.endpoint) throw new Error("endpoint must be string");
            if (!/^https:\/\//.test(e2.endpoint)) throw new Error("endpoint must start with https://");
            e2.endpoint = e2.endpoint.replace(/\/$/, "");
        }
        this.config = Object.assign({}, e2, {
            endpoint: e2.endpoint || "https://".concat(e2.spaceId, ".api-hz.cloudbasefunction.cn"),
            wsEndpoint: e2.wsEndpoint || "wss://".concat(e2.spaceId, ".api-hz.cloudbasefunction.cn")
        }), this._websocket = new Dt(this.config);
    }
    return _createClass2(Mt, [ {
        key: "callFunction",
        value: function callFunction(e2) {
            return function(e3, t2) {
                var n2 = e3.name, s2 = e3.data, _e3$async = e3.async, r2 = _e3$async === void 0 ? false : _e3$async, i2 = e3.timeout, o2 = "POST", a2 = {
                    "x-to-function-name": n2
                };
                r2 && (a2["x-function-invoke-type"] = "async");
                var _Et2 = Et("/functions/invokeFunction", {
                    functionName: n2,
                    data: s2,
                    method: o2,
                    headers: a2,
                    signHeaderKeys: [ "x-to-function-name" ],
                    config: t2
                }), c2 = _Et2.url, u2 = _Et2.headers;
                return Lt({
                    url: c2,
                    data: s2,
                    method: o2,
                    headers: u2,
                    timeout: i2
                }).then(function(e4) {
                    var t3 = 0;
                    if (r2) {
                        var n3 = e4.data || {};
                        t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
                    }
                    if (0 !== t3) throw new te({
                        code: t3,
                        message: e4.errMsg,
                        requestId: e4.requestId
                    });
                    return {
                        errCode: t3,
                        success: 0 === t3,
                        requestId: e4.requestId,
                        result: e4.data
                    };
                }).catch(function(e4) {
                    throw new te({
                        code: e4.errCode,
                        message: e4.errMsg,
                        requestId: e4.requestId
                    });
                });
            }(e2, this.config);
        }
    }, {
        key: "uploadFileToOSS",
        value: function uploadFileToOSS(_ref50) {
            var e2 = _ref50.url, t2 = _ref50.filePath, n2 = _ref50.fileType, s2 = _ref50.formData, r2 = _ref50.onUploadProgress;
            return new Promise(function(i2, o2) {
                var a2 = ne.uploadFile({
                    url: e2,
                    filePath: t2,
                    fileType: n2,
                    formData: s2,
                    name: "file",
                    success: function success(e3) {
                        e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({
                            code: "UPLOAD_FAILED",
                            message: "文件上传失败"
                        }));
                    },
                    fail: function fail(e3) {
                        o2(new te({
                            code: e3.code || "UPLOAD_FAILED",
                            message: e3.message || e3.errMsg || "文件上传失败"
                        }));
                    }
                });
                "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate(function(e3) {
                    r2({
                        loaded: e3.totalBytesSent,
                        total: e3.totalBytesExpectedToSend
                    });
                });
            });
        }
    }, {
        key: "uploadFile",
        value: function() {
            var _uploadFile2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee37(_ref51) {
                var e2, _ref51$cloudPath, t2, _ref51$fileType, n2, s2, r2, i2, o2, a2, c2;
                return _regeneratorRuntime2().wrap(function _callee37$(_context37) {
                    while (1) switch (_context37.prev = _context37.next) {
                      case 0:
                        e2 = _ref51.filePath, _ref51$cloudPath = _ref51.cloudPath, t2 = _ref51$cloudPath === void 0 ? "" : _ref51$cloudPath, 
                        _ref51$fileType = _ref51.fileType, n2 = _ref51$fileType === void 0 ? "image" : _ref51$fileType, 
                        s2 = _ref51.onUploadProgress;
                        if (!("string" !== f(t2))) {
                            _context37.next = 3;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "cloudPath必须为字符串类型"
                        });

                      case 3:
                        if (t2 = t2.trim()) {
                            _context37.next = 5;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "cloudPath不可为空"
                        });

                      case 5:
                        if (!/:\/\//.test(t2)) {
                            _context37.next = 7;
                            break;
                        }
                        throw new te({
                            code: "INVALID_PARAM",
                            message: "cloudPath不合法"
                        });

                      case 7:
                        _context37.next = 9;
                        return Rt({
                            path: "/".concat(t2.replace(/^\//, ""), "?post_url")
                        }, this.config);

                      case 9:
                        r2 = _context37.sent;
                        i2 = r2.file_id;
                        o2 = r2.upload_url;
                        a2 = r2.form_data;
                        c2 = a2 && a2.reduce(function(e3, t3) {
                            return e3[t3.key] = t3.value, e3;
                        }, {});
                        return _context37.abrupt("return", this.uploadFileToOSS({
                            url: o2,
                            filePath: e2,
                            fileType: n2,
                            formData: c2,
                            onUploadProgress: s2
                        }).then(function() {
                            return {
                                fileID: i2
                            };
                        }));

                      case 15:
                      case "end":
                        return _context37.stop();
                    }
                }, _callee37, this);
            }));
            function uploadFile(_x37) {
                return _uploadFile2.apply(this, arguments);
            }
            return uploadFile;
        }()
    }, {
        key: "getTempFileURL",
        value: function() {
            var _getTempFileURL = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee38(_ref52) {
                var _this21 = this;
                var e2;
                return _regeneratorRuntime2().wrap(function _callee38$(_context38) {
                    while (1) switch (_context38.prev = _context38.next) {
                      case 0:
                        e2 = _ref52.fileList;
                        return _context38.abrupt("return", new Promise(function(t2, n2) {
                            (!e2 || e2.length < 0) && n2(new te({
                                errCode: "INVALID_PARAM",
                                errMsg: "fileList不能为空数组"
                            })), e2.length > 50 && n2(new te({
                                errCode: "INVALID_PARAM",
                                errMsg: "fileList数组长度不能超过50"
                            }));
                            var s2 = [];
                            var _iterator10 = _createForOfIteratorHelper2(e2), _step10;
                            try {
                                for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                                    var t3 = _step10.value;
                                    "string" !== f(t3) && n2(new te({
                                        errCode: "INVALID_PARAM",
                                        errMsg: "fileList的元素必须是非空的字符串"
                                    }));
                                    var e3 = Ut.call(_this21, t3);
                                    s2.push({
                                        file_id: e3,
                                        expire: 600
                                    });
                                }
                            } catch (err) {
                                _iterator10.e(err);
                            } finally {
                                _iterator10.f();
                            }
                            Rt({
                                path: "/?download_url",
                                data: {
                                    file_list: s2
                                },
                                method: "POST"
                            }, _this21.config).then(function(e3) {
                                var _e3$file_list = e3.file_list, n3 = _e3$file_list === void 0 ? [] : _e3$file_list;
                                t2({
                                    fileList: n3.map(function(e4) {
                                        return {
                                            fileID: Nt.call(_this21, e4.file_id),
                                            tempFileURL: e4.download_url
                                        };
                                    })
                                });
                            }).catch(function(e3) {
                                return n2(e3);
                            });
                        }));

                      case 2:
                      case "end":
                        return _context38.stop();
                    }
                }, _callee38);
            }));
            function getTempFileURL(_x38) {
                return _getTempFileURL.apply(this, arguments);
            }
            return getTempFileURL;
        }()
    }, {
        key: "connectWebSocket",
        value: function() {
            var _connectWebSocket = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee39(e2) {
                var t2, n2;
                return _regeneratorRuntime2().wrap(function _callee39$(_context39) {
                    while (1) switch (_context39.prev = _context39.next) {
                      case 0:
                        t2 = e2.name, n2 = e2.query;
                        return _context39.abrupt("return", ne.connectSocket({
                            url: this._websocket.signedURL(t2, n2),
                            complete: function complete() {}
                        }));

                      case 2:
                      case "end":
                        return _context39.stop();
                    }
                }, _callee39, this);
            }));
            function connectWebSocket(_x39) {
                return _connectWebSocket.apply(this, arguments);
            }
            return connectWebSocket;
        }()
    } ]);
}();

var qt = {
    init: function init(e2) {
        e2.provider = "alipay";
        var t2 = new Mt(e2);
        return t2.auth = function() {
            return {
                signInAnonymously: function signInAnonymously() {
                    return Promise.resolve();
                },
                getLoginState: function getLoginState() {
                    return Promise.resolve(true);
                }
            };
        }, t2;
    }
};

function Ft(_ref53) {
    var e2 = _ref53.data;
    var t2;
    t2 = he();
    var n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, {
        clientInfo: t2
    }), !n2.uniIdToken) {
        var _re3 = re(), e3 = _re3.token;
        e3 && (n2.uniIdToken = e3);
    }
    return n2;
}

function Kt() {
    return _Kt.apply(this, arguments);
}

function _Kt() {
    _Kt = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee46() {
        var _this31 = this;
        var e2, _this$__dev__, t2, n2, s2, r2, i2, o2, _args8 = arguments;
        return _regeneratorRuntime2().wrap(function _callee46$(_context46) {
            while (1) switch (_context46.prev = _context46.next) {
              case 0:
                e2 = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
                _context46.next = 3;
                return this.__dev__.initLocalNetwork();

              case 3:
                _this$__dev__ = this.__dev__, t2 = _this$__dev__.localAddress, n2 = _this$__dev__.localPort, 
                s2 = {
                    aliyun: "aliyun",
                    tencent: "tcb",
                    alipay: "alipay",
                    dcloud: "dcloud"
                }[this.config.provider], r2 = this.config.spaceId, i2 = "http://".concat(t2, ":").concat(n2, "/system/check-function"), 
                o2 = "http://".concat(t2, ":").concat(n2, "/cloudfunctions/").concat(e2.name);
                return _context46.abrupt("return", new Promise(function(t3, n3) {
                    ne.request({
                        method: "POST",
                        url: i2,
                        data: {
                            name: e2.name,
                            platform: C,
                            provider: s2,
                            spaceId: r2
                        },
                        timeout: 3e3,
                        success: function success(e3) {
                            t3(e3);
                        },
                        fail: function fail() {
                            t3({
                                data: {
                                    code: "NETWORK_ERROR",
                                    message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                                }
                            });
                        }
                    });
                }).then(function() {
                    var _ref77 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e3 = _ref77.data;
                    var _ref79 = e3 || {}, t3 = _ref79.code, n3 = _ref79.message;
                    return {
                        code: 0 === t3 ? 0 : t3 || "SYS_ERR",
                        message: n3 || "SYS_ERR"
                    };
                }).then(function(_ref88) {
                    var t3 = _ref88.code, n3 = _ref88.message;
                    if (0 !== t3) {
                        switch (t3) {
                          case "MODULE_ENCRYPTED":
                            console.error("此云函数（".concat(e2.name, "）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数"));
                            break;

                          case "FUNCTION_ENCRYPTED":
                            console.error("此云函数（".concat(e2.name, "）已加密不可本地调试，自动切换为云端已部署的云函数"));
                            break;

                          case "ACTION_ENCRYPTED":
                            console.error(n3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                            break;

                          case "NETWORK_ERROR":
                            console.error(n3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
                            break;

                          case "SWITCH_TO_CLOUD":
                            break;

                          default:
                            {
                                var e3 = "检测本地调试服务出现错误：".concat(n3, "，请检查网络环境或重启客户端再试");
                                throw console.error(e3), new Error(e3);
                            }
                        }
                        return _this31._callCloudFunction(e2);
                    }
                    return new Promise(function(t4, n4) {
                        var r3 = Ft.call(_this31, {
                            data: e2.data
                        });
                        ne.request({
                            method: "POST",
                            url: o2,
                            data: {
                                provider: s2,
                                platform: C,
                                param: r3
                            },
                            timeout: e2.timeout,
                            success: function success() {
                                var _ref89 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e3 = _ref89.statusCode, s3 = _ref89.data;
                                return !e3 || e3 >= 400 ? n4(new te({
                                    code: s3.code || "SYS_ERR",
                                    message: s3.message || "request:fail"
                                })) : t4({
                                    result: s3
                                });
                            },
                            fail: function fail(e3) {
                                n4(new te({
                                    code: e3.code || e3.errCode || "SYS_ERR",
                                    message: e3.message || e3.errMsg || "request:fail"
                                }));
                            }
                        });
                    });
                }));

              case 5:
              case "end":
                return _context46.stop();
            }
        }, _callee46, this);
    }));
    return _Kt.apply(this, arguments);
}

var jt = [ {
    rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
    content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
    mode: "append"
} ];

var $t = /[\\^$.*+?()[\]{}|]/g, Bt = RegExp($t.source);

function Wt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Bt.test(s2) ? s2.replace($t, "\\$&") : s2, "g"), n2);
    var s2;
}

var Jt = "request", zt = "response", Vt = "both";

var En = {
    code: 2e4,
    message: "System error"
}, Ln = {
    code: 20101,
    message: "Invalid client"
};

function Nn(e2) {
    var _ref54 = e2 || {}, t2 = _ref54.errSubject, n2 = _ref54.subject, s2 = _ref54.errCode, r2 = _ref54.errMsg, i2 = _ref54.code, o2 = _ref54.message, a2 = _ref54.cause;
    return new te({
        subject: t2 || n2 || "uni-secure-network",
        code: s2 || i2 || En.code,
        message: r2 || o2,
        cause: a2
    });
}

var Mn;

function $n() {
    var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref55.secretType;
    return e2 === Jt || e2 === zt || e2 === Vt;
}

function Bn() {
    var _ref56 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref56.name, _ref56$data = _ref56.data, t2 = _ref56$data === void 0 ? {} : _ref56$data;
    return "app" === C;
}

function Wn() {
    var _ref57 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref57.provider, t2 = _ref57.spaceId, n2 = _ref57.functionName;
    var _ce = ce(), s2 = _ce.appId, r2 = _ce.uniPlatform, i2 = _ce.osName;
    var o2 = r2;
    "app" === r2 && (o2 = i2);
    var a2 = function() {
        var _ref58 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e3 = _ref58.provider, t3 = _ref58.spaceId;
        var n3 = A;
        if (!n3) return {};
        e3 = /*   */ function(e4) {
            return "tencent" === e4 ? "tcb" : e4;
        }(e3);
        var s3 = n3.find(function(n4) {
            return n4.provider === e3 && n4.spaceId === t3;
        });
        return s3 && s3.config;
    }({
        provider: e2,
        spaceId: t2
    });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable) return false;
    var c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length) return true;
    var l2 = function(e3, t3) {
        var n3, s3, r3;
        for (var i3 = 0; i3 < e3.length; i3++) {
            var o3 = e3[i3];
            o3 !== t3 ? "*" !== o3 ? o3.split(",").map(function(e4) {
                return e4.trim();
            }).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
        }
        return n3 || s3 || r3;
    }(u2, n2);
    if (!l2) return false;
    if ((c2[l2] || []).find(function() {
        var e3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase();
    })) return true;
    throw console.error("此应用[appId: ".concat(s2, ", platform: ").concat(o2, "]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), 
    Nn(Ln);
}

function Hn(_ref59) {
    var e2 = _ref59.functionName, t2 = _ref59.result, n2 = _ref59.logPvd;
    if (this.__dev__.debugLog && t2 && t2.requestId) {
        var s2 = JSON.stringify({
            spaceId: this.config.spaceId,
            functionName: e2,
            requestId: t2.requestId
        });
        console.log("[".concat(n2, "-request]").concat(s2, "[/").concat(n2, "-request]"));
    }
}

function Jn(e2) {
    var t2 = e2.callFunction, n2 = function n2(n3) {
        var _this22 = this;
        var s2 = n3.name;
        n3.data = Ft.call(e2, {
            data: n3.data
        });
        var r2 = {
            aliyun: "aliyun",
            tencent: "tcb",
            tcb: "tcb",
            alipay: "alipay",
            dcloud: "dcloud"
        }[this.config.provider], i2 = $n(n3), o2 = Bn(n3), a2 = i2 || o2;
        return t2.call(this, n3).then(function(e3) {
            return e3.errCode = 0, !a2 && Hn.call(_this22, {
                functionName: s2,
                result: e3,
                logPvd: r2
            }), Promise.resolve(e3);
        }, function(e3) {
            return !a2 && Hn.call(_this22, {
                functionName: s2,
                result: e3,
                logPvd: r2
            }), e3 && e3.message && (e3.message = function() {
                var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref60$message = _ref60.message, e4 = _ref60$message === void 0 ? "" : _ref60$message, _ref60$extraInfo = _ref60.extraInfo, t3 = _ref60$extraInfo === void 0 ? {} : _ref60$extraInfo, _ref60$formatter = _ref60.formatter, n4 = _ref60$formatter === void 0 ? [] : _ref60$formatter;
                for (var s3 = 0; s3 < n4.length; s3++) {
                    var _n4$s = n4[s3], r3 = _n4$s.rule, i3 = _n4$s.content, o3 = _n4$s.mode, a3 = e4.match(r3);
                    if (!a3) continue;
                    var c2 = i3;
                    for (var e5 = 1; e5 < a3.length; e5++) c2 = Wt(c2, "{$".concat(e5, "}"), a3[e5]);
                    for (var _e5 in t3) c2 = Wt(c2, "{".concat(_e5, "}"), t3[_e5]);
                    return "replace" === o3 ? c2 : e4 + c2;
                }
                return e4;
            }({
                message: "[".concat(n3.name, "]: ").concat(e3.message),
                formatter: jt,
                extraInfo: {
                    functionName: s2
                }
            })), Promise.reject(e3);
        });
    };
    e2.callFunction = function(t3) {
        var _e2$config = e2.config, s2 = _e2$config.provider, r2 = _e2$config.spaceId, i2 = t3.name;
        var o2, a2;
        if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && T ? (e2._callCloudFunction || (e2._callCloudFunction = n2, 
        e2._callLocalFunction = Kt), o2 = Kt) : o2 = n2, o2 = o2.bind(e2), Bn(t3)) ; else if (function(_ref61) {
            var e3 = _ref61.name, _ref61$data = _ref61.data, t4 = _ref61$data === void 0 ? {} : _ref61$data;
            return "uni-id-co" === e3 && "secureNetworkHandshakeByWeixin" === t4.method;
        }(t3)) a2 = o2.call(e2, t3); else if ($n(t3)) {
            a2 = new Mn({
                secretType: t3.secretType,
                uniCloudIns: e2
            }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
        } else if (Wn({
            provider: s2,
            spaceId: r2,
            functionName: i2
        })) {
            a2 = new Mn({
                secretType: t3.secretType,
                uniCloudIns: e2
            }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
        } else a2 = o2(t3);
        return Object.defineProperty(a2, "result", {
            get: function get() {
                return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), 
                {};
            }
        }), a2.then(function(e3) {
            return "undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), 
            e3;
        });
    };
}

Mn = /* */ _createClass2(function Mn() {
    _classCallCheck2(this, Mn);
    throw Nn({
        message: "Platform ".concat(C, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
});

var zn = Symbol("CLIENT_DB_INTERNAL");

function Vn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = zn, 
    e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, {
        get: function get(e3, n2, s2) {
            if ("_uniClient" === n2) return null;
            if ("symbol" == _typeof2(n2)) return e3[n2];
            if (n2 in e3 || "string" != typeof n2) {
                var t3 = e3[n2];
                return "function" == typeof t3 ? t3.bind(e3) : t3;
            }
            return t2.get(e3, n2, s2);
        }
    });
}

function Gn(e2) {
    return {
        on: function on(t2, n2) {
            e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
        },
        off: function off(t2, n2) {
            e2[t2] = e2[t2] || [];
            var s2 = e2[t2].indexOf(n2);
            -1 !== s2 && e2[t2].splice(s2, 1);
        }
    };
}

var Yn = [ "db.Geo", "db.command", "command.aggregate" ];

function Qn(e2, t2) {
    return Yn.indexOf("".concat(e2, ".").concat(t2)) > -1;
}

function Xn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map(function(e3) {
            return Xn(e3);
        });

      case "object":
        return e2._internalType === zn || Object.keys(e2).forEach(function(t2) {
            e2[t2] = Xn(e2[t2]);
        }), e2;

      case "regexp":
        return {
            $regexp: {
                source: e2.source,
                flags: e2.flags
            }
        };

      case "date":
        return {
            $date: e2.toISOString()
        };

      default:
        return e2;
    }
}

function Zn(e2) {
    return e2 && e2.content && e2.content.$method;
}

var es = /* */ function() {
    function es(e2, t2, n2) {
        _classCallCheck2(this, es);
        this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    return _createClass2(es, [ {
        key: "toJSON",
        value: function toJSON() {
            var e2 = this;
            var t2 = [ e2.content ];
            for (;e2.prevStage; ) e2 = e2.prevStage, t2.push(e2.content);
            return {
                $db: t2.reverse().map(function(e3) {
                    return {
                        $method: e3.$method,
                        $param: Xn(e3.$param)
                    };
                })
            };
        }
    }, {
        key: "toString",
        value: function toString() {
            return JSON.stringify(this.toJSON());
        }
    }, {
        key: "getAction",
        value: function getAction() {
            var e2 = this.toJSON().$db.find(function(e3) {
                return "action" === e3.$method;
            });
            return e2 && e2.$param && e2.$param[0];
        }
    }, {
        key: "getCommand",
        value: function getCommand() {
            return {
                $db: this.toJSON().$db.filter(function(e2) {
                    return "action" !== e2.$method;
                })
            };
        }
    }, {
        key: "isAggregate",
        get: function get() {
            var e2 = this;
            for (;e2; ) {
                var t2 = Zn(e2), n2 = Zn(e2.prevStage);
                if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2) return true;
                e2 = e2.prevStage;
            }
            return false;
        }
    }, {
        key: "isCommand",
        get: function get() {
            var e2 = this;
            for (;e2; ) {
                if ("command" === Zn(e2)) return true;
                e2 = e2.prevStage;
            }
            return false;
        }
    }, {
        key: "isAggregateCommand",
        get: function get() {
            var e2 = this;
            for (;e2; ) {
                var t2 = Zn(e2), n2 = Zn(e2.prevStage);
                if ("aggregate" === t2 && "command" === n2) return true;
                e2 = e2.prevStage;
            }
            return false;
        }
    }, {
        key: "getNextStageFn",
        value: function getNextStageFn(e2) {
            var t2 = this;
            return function() {
                return ts({
                    $method: e2,
                    $param: Xn(Array.from(arguments))
                }, t2, t2._database);
            };
        }
    }, {
        key: "count",
        get: function get() {
            return this.isAggregate ? this.getNextStageFn("count") : function() {
                return this._send("count", Array.from(arguments));
            };
        }
    }, {
        key: "remove",
        get: function get() {
            return this.isCommand ? this.getNextStageFn("remove") : function() {
                return this._send("remove", Array.from(arguments));
            };
        }
    }, {
        key: "get",
        value: function get() {
            return this._send("get", Array.from(arguments));
        }
    }, {
        key: "add",
        get: function get() {
            return this.isCommand ? this.getNextStageFn("add") : function() {
                return this._send("add", Array.from(arguments));
            };
        }
    }, {
        key: "update",
        value: function update() {
            return this._send("update", Array.from(arguments));
        }
    }, {
        key: "end",
        value: function end() {
            return this._send("end", Array.from(arguments));
        }
    }, {
        key: "set",
        get: function get() {
            return this.isCommand ? this.getNextStageFn("set") : function() {
                throw new Error("JQL禁止使用set方法");
            };
        }
    }, {
        key: "_send",
        value: function _send(e2, t2) {
            var n2 = this.getAction(), s2 = this.getCommand();
            if (s2.$db.push({
                $method: e2,
                $param: Xn(t2)
            }), S) {
                var e3 = s2.$db.find(function(e4) {
                    return "collection" === e4.$method;
                }), t3 = e3 && e3.$param;
                t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
            }
            return this._database._callCloudFunction({
                action: n2,
                command: s2
            });
        }
    } ]);
}();

function ts(e2, t2, n2) {
    return Vn(new es(e2, t2, n2), {
        get: function get(e3, t3) {
            var s2 = "db";
            return e3 && e3.content && (s2 = e3.content.$method), Qn(s2, t3) ? ts({
                $method: t3
            }, e3, n2) : function() {
                return ts({
                    $method: t3,
                    $param: Xn(Array.from(arguments))
                }, e3, n2);
            };
        }
    });
}

function ns(_ref62) {
    var e2 = _ref62.path, t2 = _ref62.method;
    return /* */ function() {
        function _class2() {
            _classCallCheck2(this, _class2);
            this.param = Array.from(arguments);
        }
        return _createClass2(_class2, [ {
            key: "toJSON",
            value: function toJSON() {
                return {
                    $newDb: [].concat(_toConsumableArray2(e2.map(function(e3) {
                        return {
                            $method: e3
                        };
                    })), [ {
                        $method: t2,
                        $param: this.param
                    } ])
                };
            }
        }, {
            key: "toString",
            value: function toString() {
                return JSON.stringify(this.toJSON());
            }
        } ]);
    }();
}

function ss(e2) {
    var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Vn(new e2(t2), {
        get: function get(e3, t3) {
            return Qn("db", t3) ? ts({
                $method: t3
            }, null, e3) : function() {
                return ts({
                    $method: t3,
                    $param: Xn(Array.from(arguments))
                }, null, e3);
            };
        }
    });
}

var rs = /* */ function(_ref63) {
    function rs() {
        _classCallCheck2(this, rs);
        return _callSuper(this, rs, arguments);
    }
    _inherits2(rs, _ref63);
    return _createClass2(rs, [ {
        key: "_parseResult",
        value: function _parseResult(e2) {
            return this._isJQL ? e2.result : e2;
        }
    }, {
        key: "_callCloudFunction",
        value: function _callCloudFunction(_ref64) {
            var _this23 = this;
            var e2 = _ref64.action, t2 = _ref64.command, n2 = _ref64.multiCommand, s2 = _ref64.queryList;
            function r2(e3, t3) {
                if (n2 && s2) for (var n3 = 0; n3 < s2.length; n3++) {
                    var r3 = s2[n3];
                    r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
                }
            }
            var i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
            function a2(e3) {
                return i2._callback("error", [ e3 ]), M(q(o2, "fail"), e3).then(function() {
                    return M(q(o2, "complete"), e3);
                }).then(function() {
                    return r2(null, e3), Y(j, {
                        type: W,
                        content: e3
                    }), Promise.reject(e3);
                });
            }
            var c2 = M(q(o2, "invoke")), u2 = this._uniClient;
            return c2.then(function() {
                return u2.callFunction({
                    name: "DCloud-clientDB",
                    type: l,
                    data: {
                        action: e2,
                        command: t2,
                        multiCommand: n2
                    }
                });
            }).then(function(e3) {
                var _e3$result = e3.result, t3 = _e3$result.code, n3 = _e3$result.message, s3 = _e3$result.token, c3 = _e3$result.tokenExpired, _e3$result$systemInfo = _e3$result.systemInfo, u3 = _e3$result$systemInfo === void 0 ? [] : _e3$result$systemInfo;
                if (u3) for (var e4 = 0; e4 < u3.length; e4++) {
                    var _u3$e = u3[e4], t4 = _u3$e.level, n4 = _u3$e.message, s4 = _u3$e.detail, r3 = console[t4] || console.log;
                    var i3 = "[System Info]" + n4;
                    s4 && (i3 = "".concat(i3, "\n详细信息：").concat(s4)), r3(i3);
                }
                if (t3) {
                    return a2(new te({
                        code: t3,
                        message: n3,
                        requestId: e3.requestId
                    }));
                }
                e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, 
                s3 && c3 && (ie({
                    token: s3,
                    tokenExpired: c3
                }), _this23._callbackAuth("refreshToken", [ {
                    token: s3,
                    tokenExpired: c3
                } ]), _this23._callback("refreshToken", [ {
                    token: s3,
                    tokenExpired: c3
                } ]), Y(B, {
                    token: s3,
                    tokenExpired: c3
                }));
                var l2 = [ {
                    prop: "affectedDocs",
                    tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
                }, {
                    prop: "code",
                    tips: "code不再推荐使用，请使用errCode替代"
                }, {
                    prop: "message",
                    tips: "message不再推荐使用，请使用errMsg替代"
                } ];
                var _loop8 = function _loop8() {
                    var _l2$_t = l2[_t3], n4 = _l2$_t.prop, s4 = _l2$_t.tips;
                    if (n4 in e3.result) {
                        var t5 = e3.result[n4];
                        Object.defineProperty(e3.result, n4, {
                            get: function get() {
                                return console.warn(s4), t5;
                            }
                        });
                    }
                };
                for (var _t3 = 0; _t3 < l2.length; _t3++) {
                    _loop8();
                }
                return function(e4) {
                    return M(q(o2, "success"), e4).then(function() {
                        return M(q(o2, "complete"), e4);
                    }).then(function() {
                        r2(e4, null);
                        var t4 = i2._parseResult(e4);
                        return Y(j, {
                            type: W,
                            content: t4
                        }), Promise.resolve(t4);
                    });
                }(e3);
            }, function(e3) {
                /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
                return a2(new te({
                    code: e3.code || "SYSTEM_ERROR",
                    message: e3.message,
                    requestId: e3.requestId
                }));
            });
        }
    } ]);
}(/* */ function() {
    function _class3() {
        var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref65$uniClient = _ref65.uniClient, e2 = _ref65$uniClient === void 0 ? {} : _ref65$uniClient, _ref65$isJQL = _ref65.isJQL, t2 = _ref65$isJQL === void 0 ? false : _ref65$isJQL;
        _classCallCheck2(this, _class3);
        this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), 
        t2 || (this.auth = Gn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Gn(this._dbCallBacks)), 
        this.env = Vn({}, {
            get: function get(e3, t3) {
                return {
                    $env: t3
                };
            }
        }), this.Geo = Vn({}, {
            get: function get(e3, t3) {
                return ns({
                    path: [ "Geo" ],
                    method: t3
                });
            }
        }), this.serverDate = ns({
            path: [],
            method: "serverDate"
        }), this.RegExp = ns({
            path: [],
            method: "RegExp"
        });
    }
    return _createClass2(_class3, [ {
        key: "getCloudEnv",
        value: function getCloudEnv(e2) {
            if ("string" != typeof e2 || !e2.trim()) throw new Error("getCloudEnv参数错误");
            return {
                $env: e2.replace("$cloudEnv_", "")
            };
        }
    }, {
        key: "_callback",
        value: function _callback(e2, t2) {
            var n2 = this._dbCallBacks;
            n2[e2] && n2[e2].forEach(function(e3) {
                e3.apply(void 0, _toConsumableArray2(t2));
            });
        }
    }, {
        key: "_callbackAuth",
        value: function _callbackAuth(e2, t2) {
            var n2 = this._authCallBacks;
            n2[e2] && n2[e2].forEach(function(e3) {
                e3.apply(void 0, _toConsumableArray2(t2));
            });
        }
    }, {
        key: "multiSend",
        value: function multiSend() {
            var e2 = Array.from(arguments), t2 = e2.map(function(e3) {
                var t3 = e3.getAction(), n2 = e3.getCommand();
                if ("getTemp" !== n2.$db[n2.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
                return {
                    action: t3,
                    command: n2
                };
            });
            return this._callCloudFunction({
                multiCommand: t2,
                queryList: e2
            });
        }
    } ]);
}());

var is = "token无效，跳转登录页面", os = "token过期，跳转登录页面", as = {
    TOKEN_INVALID_TOKEN_EXPIRED: os,
    TOKEN_INVALID_INVALID_CLIENTID: is,
    TOKEN_INVALID: is,
    TOKEN_INVALID_WRONG_TOKEN: is,
    TOKEN_INVALID_ANONYMOUS_USER: is
}, cs = {
    "uni-id-token-expired": os,
    "uni-id-check-token-failed": is,
    "uni-id-token-not-exist": is,
    "uni-id-check-device-feature-failed": is
};

function us(e2, t2) {
    var n2 = "";
    return n2 = e2 ? "".concat(e2, "/").concat(t2) : t2, n2.replace(/^\//, "");
}

function ls() {
    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var n2 = [], s2 = [];
    return e2.forEach(function(e3) {
        true === e3.needLogin ? n2.push(us(t2, e3.path)) : false === e3.needLogin && s2.push(us(t2, e3.path));
    }), {
        needLoginPage: n2,
        notNeedLoginPage: s2
    };
}

function hs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
}

function ds() {
    return function(e2) {
        var t2 = e2 && e2.$page && e2.$page.fullPath || "";
        return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
        var e2 = getCurrentPages();
        return e2[e2.length - 1];
    }());
}

function ps() {
    return hs(ds());
}

function fs() {
    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!e2) return false;
    if (!(t2 && t2.list && t2.list.length)) return false;
    var n2 = t2.list, s2 = hs(e2);
    return n2.some(function(e3) {
        return e3.pagePath === s2;
    });
}

var gs = !!e.uniIdRouter;

var _ref66 = function() {
    var _ref67 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e, _ref67$pages = _ref67.pages, t2 = _ref67$pages === void 0 ? [] : _ref67$pages, _ref67$subPackages = _ref67.subPackages, n2 = _ref67$subPackages === void 0 ? [] : _ref67$subPackages, _ref67$uniIdRouter = _ref67.uniIdRouter, s2 = _ref67$uniIdRouter === void 0 ? {} : _ref67$uniIdRouter, _ref67$tabBar = _ref67.tabBar, r2 = _ref67$tabBar === void 0 ? {} : _ref67$tabBar;
    var i2 = s2.loginPage, _s2$needLogin = s2.needLogin, o2 = _s2$needLogin === void 0 ? [] : _s2$needLogin, _s2$resToLogin = s2.resToLogin, a2 = _s2$resToLogin === void 0 ? true : _s2$resToLogin, _ls = ls(t2), c2 = _ls.needLoginPage, u2 = _ls.notNeedLoginPage, _ref68 = function() {
        var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t3 = [], n3 = [];
        return e2.forEach(function(e3) {
            var s3 = e3.root, _e3$pages = e3.pages, r3 = _e3$pages === void 0 ? [] : _e3$pages, _ls2 = ls(r3, s3), i3 = _ls2.needLoginPage, o3 = _ls2.notNeedLoginPage;
            t3.push.apply(t3, _toConsumableArray2(i3)), n3.push.apply(n3, _toConsumableArray2(o3));
        }), {
            needLoginPage: t3,
            notNeedLoginPage: n3
        };
    }(n2), l2 = _ref68.needLoginPage, h2 = _ref68.notNeedLoginPage;
    return {
        loginPage: i2,
        routerNeedLogin: o2,
        resToLogin: a2,
        needLoginPage: [].concat(_toConsumableArray2(c2), _toConsumableArray2(l2)),
        notNeedLoginPage: [].concat(_toConsumableArray2(u2), _toConsumableArray2(h2)),
        loginPageInTabBar: fs(i2, r2)
    };
}(), ms = _ref66.loginPage, ys = _ref66.routerNeedLogin, _s = _ref66.resToLogin, ws = _ref66.needLoginPage, vs = _ref66.notNeedLoginPage, Is = _ref66.loginPageInTabBar;

if (ws.indexOf(ms) > -1) throw new Error("Login page [".concat(ms, '] should not be "needLogin", please check your pages.json'));

function Ss(e2) {
    var t2 = ps();
    if ("/" === e2.charAt(0)) return e2;
    var _e2$split = e2.split("?"), _e2$split2 = _slicedToArray2(_e2$split, 2), n2 = _e2$split2[0], s2 = _e2$split2[1], r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (var e3 = 0; e3 < r2.length; e3++) {
        var t3 = r2[e3];
        ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
}

function bs(e2) {
    var t2 = hs(Ss(e2));
    return !(vs.indexOf(t2) > -1) && (ws.indexOf(t2) > -1 || ys.some(function(t3) {
        return function(e3, t4) {
            return new RegExp(t4).test(e3);
        }(e2, t3);
    }));
}

function ks(_ref69) {
    var e2 = _ref69.redirect;
    var t2 = hs(e2), n2 = hs(ms);
    return ps() !== n2 && t2 !== n2;
}

function As() {
    var _ref70 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref70.api, t2 = _ref70.redirect;
    if (!t2 || !ks({
        redirect: t2
    })) return;
    var n2 = function(e3, t3) {
        return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + "&uniIdRedirectUrl=".concat(encodeURIComponent(t3)) : e3 + "?uniIdRedirectUrl=".concat(encodeURIComponent(t3)) : e3;
    }(ms, t2);
    Is ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    var s2 = {
        navigateTo: index$1.navigateTo,
        redirectTo: index$1.redirectTo,
        switchTab: index$1.switchTab,
        reLaunch: index$1.reLaunch
    };
    setTimeout(function() {
        s2[e2]({
            url: n2
        });
    }, 0);
}

function Cs() {
    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref71.url;
    var t2 = {
        abortLoginPageJump: false,
        autoToLoginPage: false
    }, n2 = function() {
        var _re4 = re(), e3 = _re4.token, t3 = _re4.tokenExpired;
        var n3;
        if (e3) {
            if (t3 < Date.now()) {
                var e4 = "uni-id-token-expired";
                n3 = {
                    errCode: e4,
                    errMsg: cs[e4]
                };
            }
        } else {
            var _e6 = "uni-id-check-token-failed";
            n3 = {
                errCode: _e6,
                errMsg: cs[_e6]
            };
        }
        return n3;
    }();
    if (bs(e2) && n2) {
        n2.uniIdRedirectUrl = e2;
        if (z($).length > 0) return setTimeout(function() {
            Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
        t2.autoToLoginPage = true;
    }
    return t2;
}

function Ps() {
    !function() {
        var e3 = ds(), _Cs = Cs({
            url: e3
        }), t2 = _Cs.abortLoginPageJump, n2 = _Cs.autoToLoginPage;
        t2 || n2 && As({
            api: "redirectTo",
            redirect: e3
        });
    }();
    var e2 = [ "navigateTo", "redirectTo", "reLaunch", "switchTab" ];
    var _loop9 = function _loop9() {
        var n2 = e2[t2];
        index$1.addInterceptor(n2, {
            invoke: function invoke(e3) {
                var _Cs2 = Cs({
                    url: e3.url
                }), t3 = _Cs2.abortLoginPageJump, s2 = _Cs2.autoToLoginPage;
                return t3 ? e3 : s2 ? (As({
                    api: n2,
                    redirect: Ss(e3.url)
                }), false) : e3;
            }
        });
    };
    for (var t2 = 0; t2 < e2.length; t2++) {
        _loop9();
    }
}

function Ts() {
    this.onResponse(function(e2) {
        var t2 = e2.type, n2 = e2.content;
        var s2 = false;
        switch (t2) {
          case "cloudobject":
            s2 = function(e3) {
                if ("object" != _typeof2(e3)) return false;
                var _ref72 = e3 || {}, t3 = _ref72.errCode;
                return t3 in cs;
            }(n2);
            break;

          case "clientdb":
            s2 = function(e3) {
                if ("object" != _typeof2(e3)) return false;
                var _ref73 = e3 || {}, t3 = _ref73.errCode;
                return t3 in as;
            }(n2);
        }
        s2 && function() {
            var e3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t3 = z($);
            Z().then(function() {
                var n3 = ds();
                if (n3 && ks({
                    redirect: n3
                })) return t3.length > 0 ? Y($, Object.assign({
                    uniIdRedirectUrl: n3
                }, e3)) : void (ms && As({
                    api: "navigateTo",
                    redirect: n3
                }));
            });
        }(n2);
    });
}

function xs(e2) {
    !function(e3) {
        e3.onResponse = function(e4) {
            V(j, e4);
        }, e3.offResponse = function(e4) {
            G(j, e4);
        };
    }(e2), function(e3) {
        e3.onNeedLogin = function(e4) {
            V($, e4);
        }, e3.offNeedLogin = function(e4) {
            G($, e4);
        }, gs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, 
        Z().then(function() {
            Ps.call(e3);
        }), _s && Ts.call(e3)));
    }(e2), function(e3) {
        e3.onRefreshToken = function(e4) {
            V(B, e4);
        }, e3.offRefreshToken = function(e4) {
            G(B, e4);
        };
    }(e2);
}

var Os;

var Es = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ls = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

function Rs() {
    var e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length) return {
        uid: null,
        role: [],
        permission: [],
        tokenExpired: 0
    };
    var n2;
    try {
        n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Os(s2).split("").map(function(e3) {
            return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
        }).join(""))));
    } catch (e3) {
        throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
}

Os = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ls.test(e2)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; ) t2 = Es.indexOf(e2.charAt(i2++)) << 18 | Es.indexOf(e2.charAt(i2++)) << 12 | (n2 = Es.indexOf(e2.charAt(i2++))) << 6 | (s2 = Es.indexOf(e2.charAt(i2++))), 
    r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
} : atob;

var Us = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", {
        value: true
    });
    var n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
        return e3.tempFiles.forEach(function(e4, n3) {
            e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), 
            e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
        }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map(function(e4) {
            return e4.path;
        })), e3;
    }
    function i2(e3, t3, _ref74) {
        var s3 = _ref74.onChooseFile, r3 = _ref74.onUploadProgress;
        return t3.then(function(e4) {
            if (s3) {
                var t4 = s3(e4);
                if (void 0 !== t4) return Promise.resolve(t4).then(function(t5) {
                    return void 0 === t5 ? e4 : t5;
                });
            }
            return e4;
        }).then(function(t4) {
            return false === t4 ? {
                errMsg: n2,
                tempFilePaths: [],
                tempFiles: []
            } : function(e4, t5) {
                var s4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
                var r4 = arguments.length > 3 ? arguments[3] : undefined;
                (t5 = Object.assign({}, t5)).errMsg = n2;
                var i3 = t5.tempFiles, o2 = i3.length;
                var a2 = 0;
                return new Promise(function(n3) {
                    for (;a2 < s4; ) c2();
                    function c2() {
                        var s5 = a2++;
                        if (s5 >= o2) return void (!i3.find(function(e5) {
                            return !e5.url && !e5.errMsg;
                        }) && n3(t5));
                        var u2 = i3[s5];
                        e4.uploadFile({
                            provider: u2.provider,
                            filePath: u2.path,
                            cloudPath: u2.cloudPath,
                            fileType: u2.fileType,
                            cloudPathAsRealPath: u2.cloudPathAsRealPath,
                            onUploadProgress: function onUploadProgress(e5) {
                                e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
                            }
                        }).then(function(e5) {
                            u2.url = e5.fileID, s5 < o2 && c2();
                        }).catch(function(e5) {
                            u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
                        });
                    }
                });
            }(e3, t4, 5, r3);
        });
    }
    t2.initChooseAndUploadFile = function(e3) {
        return function() {
            var t3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                type: "all"
            };
            return "image" === t3.type ? i2(e3, function(e4) {
                var t4 = e4.count, n3 = e4.sizeType, _e4$sourceType = e4.sourceType, i3 = _e4$sourceType === void 0 ? [ "album", "camera" ] : _e4$sourceType, o2 = e4.extension;
                return new Promise(function(e5, a2) {
                    index$1.chooseImage({
                        count: t4,
                        sizeType: n3,
                        sourceType: i3,
                        extension: o2,
                        success: function success(t5) {
                            e5(r2(t5, "image"));
                        },
                        fail: function fail(e6) {
                            a2({
                                errMsg: e6.errMsg.replace("chooseImage:fail", s2)
                            });
                        }
                    });
                });
            }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
                var t4 = e4.camera, n3 = e4.compressed, i3 = e4.maxDuration, _e4$sourceType2 = e4.sourceType, o2 = _e4$sourceType2 === void 0 ? [ "album", "camera" ] : _e4$sourceType2, a2 = e4.extension;
                return new Promise(function(e5, c2) {
                    index$1.chooseVideo({
                        camera: t4,
                        compressed: n3,
                        maxDuration: i3,
                        sourceType: o2,
                        extension: a2,
                        success: function success(t5) {
                            var n4 = t5.tempFilePath, s3 = t5.duration, i4 = t5.size, o3 = t5.height, a3 = t5.width;
                            e5(r2({
                                errMsg: "chooseVideo:ok",
                                tempFilePaths: [ n4 ],
                                tempFiles: [ {
                                    name: t5.tempFile && t5.tempFile.name || "",
                                    path: n4,
                                    size: i4,
                                    type: t5.tempFile && t5.tempFile.type || "",
                                    width: a3,
                                    height: o3,
                                    duration: s3,
                                    fileType: "video",
                                    cloudPath: ""
                                } ]
                            }, "video"));
                        },
                        fail: function fail(e6) {
                            c2({
                                errMsg: e6.errMsg.replace("chooseVideo:fail", s2)
                            });
                        }
                    });
                });
            }(t3), t3) : i2(e3, function(e4) {
                var t4 = e4.count, n3 = e4.extension;
                return new Promise(function(e5, i3) {
                    var o2 = index$1.chooseFile;
                    if ("undefined" != typeof wx$1 && "function" == typeof wx$1.chooseMessageFile && (o2 = wx$1.chooseMessageFile), 
                    "function" != typeof o2) return i3({
                        errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                    });
                    o2({
                        type: "all",
                        count: t4,
                        extension: n3,
                        success: function success(t5) {
                            e5(r2(t5));
                        },
                        fail: function fail(e6) {
                            i3({
                                errMsg: e6.errMsg.replace("chooseFile:fail", s2)
                            });
                        }
                    });
                });
            }(t3), t3);
        };
    };
}), Ns = t(Us);

var Ds = "manual";

function Ms(e2) {
    return {
        props: {
            localdata: {
                type: Array,
                default: function _default() {
                    return [];
                }
            },
            options: {
                type: [ Object, Array ],
                default: function _default() {
                    return {};
                }
            },
            spaceInfo: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            collection: {
                type: [ String, Array ],
                default: ""
            },
            action: {
                type: String,
                default: ""
            },
            field: {
                type: String,
                default: ""
            },
            orderby: {
                type: String,
                default: ""
            },
            where: {
                type: [ String, Object ],
                default: ""
            },
            pageData: {
                type: String,
                default: "add"
            },
            pageCurrent: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 20
            },
            getcount: {
                type: [ Boolean, String ],
                default: false
            },
            gettree: {
                type: [ Boolean, String ],
                default: false
            },
            gettreepath: {
                type: [ Boolean, String ],
                default: false
            },
            startwith: {
                type: String,
                default: ""
            },
            limitlevel: {
                type: Number,
                default: 10
            },
            groupby: {
                type: String,
                default: ""
            },
            groupField: {
                type: String,
                default: ""
            },
            distinct: {
                type: [ Boolean, String ],
                default: false
            },
            foreignKey: {
                type: String,
                default: ""
            },
            loadtime: {
                type: String,
                default: "auto"
            },
            manual: {
                type: Boolean,
                default: false
            }
        },
        data: function data() {
            return {
                mixinDatacomLoading: false,
                mixinDatacomHasMore: false,
                mixinDatacomResData: [],
                mixinDatacomErrorMessage: "",
                mixinDatacomPage: {},
                mixinDatacomError: null
            };
        },
        created: function created() {
            var _this24 = this;
            this.mixinDatacomPage = {
                current: this.pageCurrent,
                size: this.pageSize,
                count: 0
            }, this.$watch(function() {
                var e3 = [];
                return [ "pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct" ].forEach(function(t2) {
                    e3.push(_this24[t2]);
                }), e3;
            }, function(e3, t2) {
                if (_this24.loadtime === Ds) return;
                var n2 = false;
                var s2 = [];
                for (var r2 = 2; r2 < e3.length; r2++) e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
                e3[0] !== t2[0] && (_this24.mixinDatacomPage.current = _this24.pageCurrent), _this24.mixinDatacomPage.size = _this24.pageSize, 
                _this24.onMixinDatacomPropsChange(n2, s2);
            });
        },
        methods: {
            onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e3, t2) {},
            mixinDatacomEasyGet: function mixinDatacomEasyGet() {
                var _this25 = this;
                var _ref75 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref75$getone = _ref75.getone, e3 = _ref75$getone === void 0 ? false : _ref75$getone, t2 = _ref75.success, n2 = _ref75.fail;
                this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", 
                this.mixinDatacomError = null, this.mixinDatacomGet().then(function(n3) {
                    _this25.mixinDatacomLoading = false;
                    var _n3$result = n3.result, s2 = _n3$result.data, r2 = _n3$result.count;
                    _this25.getcount && (_this25.mixinDatacomPage.count = r2), _this25.mixinDatacomHasMore = s2.length < _this25.pageSize;
                    var i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
                    _this25.mixinDatacomResData = i2, t2 && t2(i2);
                }).catch(function(e4) {
                    _this25.mixinDatacomLoading = false, _this25.mixinDatacomErrorMessage = e4, _this25.mixinDatacomError = e4, 
                    n2 && n2(e4);
                }));
            },
            mixinDatacomGet: function mixinDatacomGet() {
                var _n2;
                var t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var n2;
                t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
                var s2 = t2.action || this.action;
                s2 && (n2 = n2.action(s2));
                var r2 = t2.collection || this.collection;
                n2 = Array.isArray(r2) ? (_n2 = n2).collection.apply(_n2, _toConsumableArray2(r2)) : n2.collection(r2);
                var i2 = t2.where || this.where;
                i2 && Object.keys(i2).length && (n2 = n2.where(i2));
                var o2 = t2.field || this.field;
                o2 && (n2 = n2.field(o2));
                var a2 = t2.foreignKey || this.foreignKey;
                a2 && (n2 = n2.foreignKey(a2));
                var c2 = t2.groupby || this.groupby;
                c2 && (n2 = n2.groupBy(c2));
                var u2 = t2.groupField || this.groupField;
                u2 && (n2 = n2.groupField(u2));
                true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
                var l2 = t2.orderby || this.orderby;
                l2 && (n2 = n2.orderBy(l2));
                var h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = {
                    getCount: p2
                }, y2 = {
                    limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel,
                    startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith
                };
                return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), 
                n2;
            }
        }
    };
}

function qs(e2) {
    return function(t2) {
        var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        n2 = function(e3) {
            var t3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, 
            Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), 
            "object" == _typeof2(t3.secretMethods) && (e3.secretMethods = t3.secretMethods), 
            e3;
        }({
            customUI: false,
            loadingOptions: {
                title: "加载中...",
                mask: true
            },
            errorOptions: {
                type: "modal",
                retry: false
            }
        }, n2);
        var _n3 = n2, s2 = _n3.customUI, r2 = _n3.loadingOptions, i2 = _n3.errorOptions, o2 = _n3.parseSystemError, a2 = !s2;
        return new Proxy({}, {
            get: function get(s3, c2) {
                switch (c2) {
                  case "toString":
                    return "[object UniCloudObject]";

                  case "toJSON":
                    return {};
                }
                return function() {
                    var _ref76 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e3 = _ref76.fn, t3 = _ref76.interceptorName, n3 = _ref76.getCallbackArgs;
                    return /* */ _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee40() {
                        var _len27, s4, _key35, r3, i3, o3, _args2 = arguments;
                        return _regeneratorRuntime2().wrap(function _callee40$(_context40) {
                            while (1) switch (_context40.prev = _context40.next) {
                              case 0:
                                for (_len27 = _args2.length, s4 = new Array(_len27), _key35 = 0; _key35 < _len27; _key35++) {
                                    s4[_key35] = _args2[_key35];
                                }
                                r3 = n3 ? n3({
                                    params: s4
                                }) : {};
                                _context40.prev = 2;
                                _context40.next = 5;
                                return M(q(t3, "invoke"), _objectSpread2({}, r3));

                              case 5:
                                _context40.next = 7;
                                return e3.apply(void 0, s4);

                              case 7:
                                i3 = _context40.sent;
                                _context40.next = 10;
                                return M(q(t3, "success"), _objectSpread2(_objectSpread2({}, r3), {}, {
                                    result: i3
                                }));

                              case 10:
                                return _context40.abrupt("return", i3);

                              case 13:
                                _context40.prev = 13;
                                _context40.t0 = _context40["catch"](2);
                                o3 = _context40.t0;
                                _context40.next = 18;
                                return M(q(t3, "fail"), _objectSpread2(_objectSpread2({}, r3), {}, {
                                    error: o3
                                }));

                              case 18:
                                throw o3;

                              case 19:
                                _context40.prev = 19;
                                _context40.next = 22;
                                return M(q(t3, "complete"), o3 ? _objectSpread2(_objectSpread2({}, r3), {}, {
                                    error: o3
                                }) : _objectSpread2(_objectSpread2({}, r3), {}, {
                                    result: i3
                                }));

                              case 22:
                                return _context40.finish(19);

                              case 23:
                              case "end":
                                return _context40.stop();
                            }
                        }, _callee40, null, [ [ 2, 13, 19, 23 ] ]);
                    }));
                }({
                    fn: function() {
                        var _s3 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee42() {
                            var h2, _len28, l2, _key36, d2, p2, _ref78, f2, g2, m2, y2, e3, _yield, t3, n3, _args5 = arguments;
                            return _regeneratorRuntime2().wrap(function _callee42$(_context42) {
                                while (1) switch (_context42.prev = _context42.next) {
                                  case 0:
                                    a2 && index$1.showLoading({
                                        title: r2.title,
                                        mask: r2.mask
                                    });
                                    for (_len28 = _args5.length, l2 = new Array(_len28), _key36 = 0; _key36 < _len28; _key36++) {
                                        l2[_key36] = _args5[_key36];
                                    }
                                    d2 = {
                                        name: t2,
                                        type: u,
                                        data: {
                                            method: c2,
                                            params: l2
                                        }
                                    };
                                    "object" == _typeof2(n2.secretMethods) && function(e3, t3) {
                                        var n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
                                        r3 && (t3.secretType = r3);
                                    }(n2, d2);
                                    p2 = false;
                                    _context42.prev = 5;
                                    _context42.next = 8;
                                    return e2.callFunction(d2);

                                  case 8:
                                    h2 = _context42.sent;
                                    _context42.next = 14;
                                    break;

                                  case 11:
                                    _context42.prev = 11;
                                    _context42.t0 = _context42["catch"](5);
                                    p2 = true, h2 = {
                                        result: new te(_context42.t0)
                                    };

                                  case 14:
                                    _ref78 = h2.result || {}, f2 = _ref78.errSubject, g2 = _ref78.errCode, m2 = _ref78.errMsg, 
                                    y2 = _ref78.newToken;
                                    if (!(a2 && index$1.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), 
                                    Y(B, _objectSpread2({}, y2))), g2)) {
                                        _context42.next = 39;
                                        break;
                                    }
                                    e3 = m2;
                                    if (!(p2 && o2)) {
                                        _context42.next = 24;
                                        break;
                                    }
                                    _context42.next = 20;
                                    return o2({
                                        objectName: t2,
                                        methodName: c2,
                                        params: l2,
                                        errSubject: f2,
                                        errCode: g2,
                                        errMsg: m2
                                    });

                                  case 20:
                                    _context42.t1 = _context42.sent.errMsg;
                                    if (_context42.t1) {
                                        _context42.next = 23;
                                        break;
                                    }
                                    _context42.t1 = m2;

                                  case 23:
                                    e3 = _context42.t1;

                                  case 24:
                                    if (!a2) {
                                        _context42.next = 37;
                                        break;
                                    }
                                    if (!("toast" === i2.type)) {
                                        _context42.next = 29;
                                        break;
                                    }
                                    index$1.showToast({
                                        title: e3,
                                        icon: "none"
                                    });
                                    _context42.next = 37;
                                    break;

                                  case 29:
                                    if (!("modal" !== i2.type)) {
                                        _context42.next = 31;
                                        break;
                                    }
                                    throw new Error("Invalid errorOptions.type: ".concat(i2.type));

                                  case 31:
                                    _context42.next = 33;
                                    return _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee41() {
                                        var _ref80, e4, t4, n4, s5, r3, _args3 = arguments;
                                        return _regeneratorRuntime2().wrap(function _callee41$(_context41) {
                                            while (1) switch (_context41.prev = _context41.next) {
                                              case 0:
                                                _ref80 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e4 = _ref80.title, 
                                                t4 = _ref80.content, n4 = _ref80.showCancel, s5 = _ref80.cancelText, r3 = _ref80.confirmText;
                                                return _context41.abrupt("return", new Promise(function(i3, o3) {
                                                    index$1.showModal({
                                                        title: e4,
                                                        content: t4,
                                                        showCancel: n4,
                                                        cancelText: s5,
                                                        confirmText: r3,
                                                        success: function success(e5) {
                                                            i3(e5);
                                                        },
                                                        fail: function fail() {
                                                            i3({
                                                                confirm: false,
                                                                cancel: true
                                                            });
                                                        }
                                                    });
                                                }));

                                              case 2:
                                              case "end":
                                                return _context41.stop();
                                            }
                                        }, _callee41);
                                    }))({
                                        title: "提示",
                                        content: e3,
                                        showCancel: i2.retry,
                                        cancelText: "取消",
                                        confirmText: i2.retry ? "重试" : "确定"
                                    });

                                  case 33:
                                    _yield = _context42.sent;
                                    t3 = _yield.confirm;
                                    if (!(i2.retry && t3)) {
                                        _context42.next = 37;
                                        break;
                                    }
                                    return _context42.abrupt("return", s4.apply(void 0, l2));

                                  case 37:
                                    n3 = new te({
                                        subject: f2,
                                        code: g2,
                                        message: m2,
                                        requestId: h2.requestId
                                    });
                                    throw n3.detail = h2.result, Y(j, {
                                        type: J,
                                        content: n3
                                    }), n3;

                                  case 39:
                                    return _context42.abrupt("return", (Y(j, {
                                        type: J,
                                        content: h2.result
                                    }), h2.result));

                                  case 40:
                                  case "end":
                                    return _context42.stop();
                                }
                            }, _callee42, null, [ [ 5, 11 ] ]);
                        }));
                        function s4() {
                            return _s3.apply(this, arguments);
                        }
                        return s4;
                    }(),
                    interceptorName: "callObject",
                    getCallbackArgs: function getCallbackArgs() {
                        var _ref81 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e3 = _ref81.params;
                        return {
                            objectName: t2,
                            methodName: c2,
                            params: e3
                        };
                    }
                });
            }
        });
    };
}

function Fs(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
}

function Ks() {
    return _Ks.apply(this, arguments);
}

function _Ks() {
    _Ks = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee47() {
        var _ref90, e2, _ref90$callLoginByWei, t2, n2, s2, r2, _args9 = arguments;
        return _regeneratorRuntime2().wrap(function _callee47$(_context47) {
            while (1) switch (_context47.prev = _context47.next) {
              case 0:
                _ref90 = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {}, e2 = _ref90.openid, 
                _ref90$callLoginByWei = _ref90.callLoginByWeixin, t2 = _ref90$callLoginByWei === void 0 ? false : _ref90$callLoginByWei;
                n2 = Fs(this);
                if (!(e2 && t2)) {
                    _context47.next = 4;
                    break;
                }
                throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");

              case 4:
                if (!e2) {
                    _context47.next = 6;
                    break;
                }
                return _context47.abrupt("return", (n2.mpWeixinOpenid = e2, {}));

              case 6:
                _context47.next = 8;
                return new Promise(function(e3, t3) {
                    index$1.login({
                        success: function success(t4) {
                            e3(t4.code);
                        },
                        fail: function fail(e4) {
                            t3(new Error(e4.errMsg));
                        }
                    });
                });

              case 8:
                s2 = _context47.sent;
                r2 = this.importObject("uni-id-co", {
                    customUI: true
                });
                _context47.next = 12;
                return r2.secureNetworkHandshakeByWeixin({
                    code: s2,
                    callLoginByWeixin: t2
                });

              case 12:
                n2.mpWeixinCode = s2;
                return _context47.abrupt("return", {
                    code: s2
                });

              case 14:
              case "end":
                return _context47.stop();
            }
        }, _callee47, this);
    }));
    return _Ks.apply(this, arguments);
}

function js(_x40) {
    return _js.apply(this, arguments);
}

function _js() {
    _js = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee48(e2) {
        var t2;
        return _regeneratorRuntime2().wrap(function _callee48$(_context48) {
            while (1) switch (_context48.prev = _context48.next) {
              case 0:
                t2 = Fs(this);
                return _context48.abrupt("return", (t2.initPromise || (t2.initPromise = Ks.call(this, e2).then(function(e3) {
                    return e3;
                }).catch(function(e3) {
                    throw delete t2.initPromise, e3;
                })), t2.initPromise));

              case 2:
              case "end":
                return _context48.stop();
            }
        }, _callee48, this);
    }));
    return _js.apply(this, arguments);
}

function $s(e2) {
    return function() {
        var _ref82 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, t2 = _ref82.openid, _ref82$callLoginByWei = _ref82.callLoginByWeixin, n2 = _ref82$callLoginByWei === void 0 ? false : _ref82$callLoginByWei;
        return js.call(e2, {
            openid: t2,
            callLoginByWeixin: n2
        });
    };
}

function Bs(e2) {
    !function(e3) {
        le = e3;
    }(e2);
}

function Ws(e2) {
    var t2 = {
        getSystemInfo: index$1.getSystemInfo,
        getPushClientId: index$1.getPushClientId
    };
    return function(n2) {
        return new Promise(function(s2, r2) {
            t2[e2](_objectSpread2(_objectSpread2({}, n2), {}, {
                success: function success(e3) {
                    s2(e3);
                },
                fail: function fail(e3) {
                    r2(e3);
                }
            }));
        });
    };
}

var Hs = /* */ function(_ref83) {
    function Hs() {
        var _this26;
        _classCallCheck2(this, Hs);
        _this26 = _callSuper(this, Hs), _this26._uniPushMessageCallback = _this26._receivePushMessage.bind(_assertThisInitialized2(_this26)), 
        _this26._currentMessageId = -1, _this26._payloadQueue = [];
        return _this26;
    }
    _inherits2(Hs, _ref83);
    return _createClass2(Hs, [ {
        key: "init",
        value: function init() {
            var _this27 = this;
            return Promise.all([ Ws("getSystemInfo")(), Ws("getPushClientId")() ]).then(function() {
                var _ref84 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [], _ref85 = _slicedToArray2(_ref84, 2), _ref85$ = _ref85[0], _ref85$2 = _ref85$ === void 0 ? {} : _ref85$, e2 = _ref85$2.appId, _ref85$3 = _ref85[1], _ref85$4 = _ref85$3 === void 0 ? {} : _ref85$3, t2 = _ref85$4.cid;
                if (!e2) throw new Error("Invalid appId, please check the manifest.json file");
                if (!t2) throw new Error("Invalid push client id");
                _this27._appId = e2, _this27._pushClientId = t2, _this27._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), 
                _this27.emit("open"), _this27._initMessageListener();
            }, function(e2) {
                throw _this27.emit("error", e2), _this27.close(), e2;
            });
        }
    }, {
        key: "open",
        value: function() {
            var _open = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee43() {
                return _regeneratorRuntime2().wrap(function _callee43$(_context43) {
                    while (1) switch (_context43.prev = _context43.next) {
                      case 0:
                        return _context43.abrupt("return", this.init());

                      case 1:
                      case "end":
                        return _context43.stop();
                    }
                }, _callee43, this);
            }));
            function open() {
                return _open.apply(this, arguments);
            }
            return open;
        }()
    }, {
        key: "_isUniCloudSSE",
        value: function _isUniCloudSSE(e2) {
            if ("receive" !== e2.type) return false;
            var t2 = e2 && e2.data && e2.data.payload;
            return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
        }
    }, {
        key: "_receivePushMessage",
        value: function _receivePushMessage(e2) {
            if (!this._isUniCloudSSE(e2)) return;
            var t2 = e2 && e2.data && e2.data.payload, n2 = t2.action, s2 = t2.messageId, r2 = t2.message;
            this._payloadQueue.push({
                action: n2,
                messageId: s2,
                message: r2
            }), this._consumMessage();
        }
    }, {
        key: "_consumMessage",
        value: function _consumMessage() {
            var _this28 = this;
            for (;;) {
                var e2 = this._payloadQueue.find(function(e3) {
                    return e3.messageId === _this28._currentMessageId + 1;
                });
                if (!e2) break;
                this._currentMessageId++, this._parseMessagePayload(e2);
            }
        }
    }, {
        key: "_parseMessagePayload",
        value: function _parseMessagePayload(e2) {
            var t2 = e2.action, n2 = e2.messageId, s2 = e2.message;
            "end" === t2 ? this._end({
                messageId: n2,
                message: s2
            }) : "message" === t2 && this._appendMessage({
                messageId: n2,
                message: s2
            });
        }
    }, {
        key: "_appendMessage",
        value: function _appendMessage() {
            var _ref86 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref86.messageId, t2 = _ref86.message;
            this.emit("message", t2);
        }
    }, {
        key: "_end",
        value: function _end() {
            var _ref87 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e2 = _ref87.messageId, t2 = _ref87.message;
            this.emit("end", t2), this.close();
        }
    }, {
        key: "_initMessageListener",
        value: function _initMessageListener() {
            index$1.onPushMessage(this._uniPushMessageCallback);
        }
    }, {
        key: "_destroy",
        value: function _destroy() {
            index$1.offPushMessage(this._uniPushMessageCallback);
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            return {
                appId: this._appId,
                pushClientId: this._pushClientId,
                seqId: this._seqId
            };
        }
    }, {
        key: "close",
        value: function close() {
            this._destroy(), this.emit("close");
        }
    } ]);
}(/* */ function() {
    function _class4() {
        _classCallCheck2(this, _class4);
        this._callback = {};
    }
    return _createClass2(_class4, [ {
        key: "addListener",
        value: function addListener(e2, t2) {
            this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
        }
    }, {
        key: "on",
        value: function on(e2, t2) {
            return this.addListener(e2, t2);
        }
    }, {
        key: "removeListener",
        value: function removeListener(e2, t2) {
            if (!t2) throw new Error('The "listener" argument must be of type function. Received undefined');
            var n2 = this._callback[e2];
            if (!n2) return;
            var s2 = function(e3, t3) {
                for (var n3 = e3.length - 1; n3 >= 0; n3--) if (e3[n3] === t3) return n3;
                return -1;
            }(n2, t2);
            n2.splice(s2, 1);
        }
    }, {
        key: "off",
        value: function off(e2, t2) {
            return this.removeListener(e2, t2);
        }
    }, {
        key: "removeAllListener",
        value: function removeAllListener(e2) {
            delete this._callback[e2];
        }
    }, {
        key: "emit",
        value: function emit(e2) {
            var n2 = this._callback[e2];
            for (var _len29 = arguments.length, t2 = new Array(_len29 > 1 ? _len29 - 1 : 0), _key37 = 1; _key37 < _len29; _key37++) {
                t2[_key37 - 1] = arguments[_key37];
            }
            if (n2) for (var e3 = 0; e3 < n2.length; e3++) n2[e3].apply(n2, t2);
        }
    } ]);
}());

function Js(_x41) {
    return _Js.apply(this, arguments);
}

function _Js() {
    _Js = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee49(e2) {
        var t2, _t2$debugInfo, n2, s2, _yield$At2, r2, i2, o2;
        return _regeneratorRuntime2().wrap(function _callee49$(_context49) {
            while (1) switch (_context49.prev = _context49.next) {
              case 0:
                t2 = e2.__dev__;
                if (t2.debugInfo) {
                    _context49.next = 3;
                    break;
                }
                return _context49.abrupt("return");

              case 3:
                _t2$debugInfo = t2.debugInfo;
                n2 = _t2$debugInfo.address;
                s2 = _t2$debugInfo.servePort;
                _context49.next = 8;
                return At(n2, s2);

              case 8:
                _yield$At2 = _context49.sent;
                r2 = _yield$At2.address;
                if (!r2) {
                    _context49.next = 12;
                    break;
                }
                return _context49.abrupt("return", (t2.localAddress = r2, void (t2.localPort = s2)));

              case 12:
                i2 = console["warn"];
                o2 = "";
                if (!("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, 
                o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", 
                o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 
                0 === C.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), 
                !t2.debugInfo.forceRemote)) {
                    _context49.next = 16;
                    break;
                }
                throw new Error(o2);

              case 16:
                i2(o2);

              case 17:
              case "end":
                return _context49.stop();
            }
        }, _callee49);
    }));
    return _Js.apply(this, arguments);
}

function zs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({
        createPromise: function createPromise() {
            var t2 = Promise.resolve();
            var n2;
            n2 = 1, t2 = new Promise(function(e3) {
                setTimeout(function() {
                    e3();
                }, n2);
            });
            var s2 = e2.auth();
            return t2.then(function() {
                return s2.getLoginState();
            }).then(function(e3) {
                return e3 ? Promise.resolve() : s2.signInAnonymously();
            });
        }
    }));
}

var Vs = {
    tcb: bt,
    tencent: bt,
    aliyun: fe,
    private: Tt,
    dcloud: Tt,
    alipay: qt
};

var Gs = new (/* */ function() {
    function _class5() {
        _classCallCheck2(this, _class5);
    }
    return _createClass2(_class5, [ {
        key: "init",
        value: function init(e2) {
            var t2 = {};
            var n2 = Vs[e2.provider];
            if (!n2) throw new Error("未提供正确的provider参数");
            t2 = n2.init(e2), function(e3) {
                var t3 = {};
                e3.__dev__ = t3, t3.debugLog = "app" === C;
                var n3 = P;
                n3 && !n3.code && (t3.debugInfo = n3);
                var s2 = new v({
                    createPromise: function createPromise() {
                        return Js(e3);
                    }
                });
                t3.initLocalNetwork = function() {
                    return s2.exec();
                };
            }(t2), zs(t2), Jn(t2), function(e3) {
                var t3 = e3.uploadFile;
                e3.uploadFile = function(e4) {
                    return t3.call(this, e4);
                };
            }(t2), function(e3) {
                e3.database = function(t3) {
                    if (t3 && Object.keys(t3).length > 0) return e3.init(t3).database();
                    if (this._database) return this._database;
                    var n3 = ss(rs, {
                        uniClient: e3
                    });
                    return this._database = n3, n3;
                }, e3.databaseForJQL = function(t3) {
                    if (t3 && Object.keys(t3).length > 0) return e3.init(t3).databaseForJQL();
                    if (this._databaseForJQL) return this._databaseForJQL;
                    var n3 = ss(rs, {
                        uniClient: e3,
                        isJQL: true
                    });
                    return this._databaseForJQL = n3, n3;
                };
            }(t2), function(e3) {
                e3.getCurrentUserInfo = Rs, e3.chooseAndUploadFile = Ns.initChooseAndUploadFile(e3), 
                Object.assign(e3, {
                    get mixinDatacom() {
                        return Ms(e3);
                    }
                }), e3.SSEChannel = Hs, e3.initSecureNetworkByWeixin = $s(e3), e3.setCustomClientInfo = Bs, 
                e3.importObject = qs(e3);
            }(t2);
            return [ "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile" ].forEach(function(e3) {
                if (!t2[e3]) return;
                var n3 = t2[e3];
                t2[e3] = function() {
                    return n3.apply(t2, Array.from(arguments));
                }, t2[e3] = /*   */ function(e4, t3) {
                    return function(n4) {
                        var _this29 = this;
                        var s2 = false;
                        if ("callFunction" === t3) {
                            var e5 = n4 && n4.type || c;
                            s2 = e5 !== c;
                        }
                        var r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
                        n4 = n4 || {};
                        var _ee2 = ee(n4), o2 = _ee2.success, a2 = _ee2.fail, u2 = _ee2.complete, l2 = i2.then(function() {
                            return s2 ? Promise.resolve() : M(q(t3, "invoke"), n4);
                        }).then(function() {
                            return e4.call(_this29, n4);
                        }).then(function(e5) {
                            return s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(function() {
                                return M(q(t3, "complete"), e5);
                            }).then(function() {
                                return r2 && Y(j, {
                                    type: H,
                                    content: e5
                                }), Promise.resolve(e5);
                            });
                        }, function(e5) {
                            return s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(function() {
                                return M(q(t3, "complete"), e5);
                            }).then(function() {
                                return Y(j, {
                                    type: H,
                                    content: e5
                                }), Promise.reject(e5);
                            });
                        });
                        if (!(o2 || a2 || u2)) return l2;
                        l2.then(function(e5) {
                            o2 && o2(e5), u2 && u2(e5), r2 && Y(j, {
                                type: H,
                                content: e5
                            });
                        }, function(e5) {
                            a2 && a2(e5), u2 && u2(e5), r2 && Y(j, {
                                type: H,
                                content: e5
                            });
                        });
                    };
                }(t2[e3], e3).bind(t2);
            }), t2.init = this.init, t2;
        }
    } ]);
}())();

(function() {
    var e2 = T;
    var t2 = {};
    if (e2 && 1 === e2.length) t2 = e2[0], Gs = Gs.init(t2), Gs._isDefault = true; else {
        var t3 = [ "auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject" ];
        var n2;
        n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", 
        t3.forEach(function(e3) {
            Gs[e3] = function() {
                return console.error(n2), Promise.reject(new te({
                    code: "SYS_ERR",
                    message: n2
                }));
            };
        });
    }
    Object.assign(Gs, {
        get mixinDatacom() {
            return Ms(Gs);
        }
    }), xs(Gs), Gs.addInterceptor = N, Gs.removeInterceptor = D, Gs.interceptObject = F;
})();

var Ys = Gs;

var config = {
    // 信任的标签（保持标签名不变）
    trustTags: makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
    // 块级标签（转为 div，其他的非信任标签转为 span）
    blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
    // 行内标签
    inlineTags: makeMap("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
    // 要移除的标签
    ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
    // 自闭合的标签
    voidTags: makeMap("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    // html 实体
    entities: {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        ensp: " ",
        emsp: " ",
        nbsp: " ",
        semi: ";",
        ndash: "–",
        mdash: "—",
        middot: "·",
        lsquo: "‘",
        rsquo: "’",
        ldquo: "“",
        rdquo: "”",
        bull: "•",
        hellip: "…",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓"
    },
    // 默认的标签样式
    tagStyle: {
        address: "font-style:italic",
        big: "display:inline;font-size:1.2em",
        caption: "display:table-caption;text-align:center",
        center: "text-align:center",
        cite: "font-style:italic",
        dd: "margin-left:40px",
        mark: "background-color:yellow",
        pre: "font-family:monospace;white-space:pre",
        s: "text-decoration:line-through",
        small: "display:inline;font-size:0.8em",
        strike: "text-decoration:line-through",
        u: "text-decoration:underline"
    },
    // svg 大小写对照表
    svgDict: {
        animatetransform: "animateTransform",
        lineargradient: "linearGradient",
        viewbox: "viewBox",
        attributename: "attributeName",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur"
    }
};

var tagSelector = {};

var _index$1$getSystemInf = index$1.getSystemInfoSync(), windowWidth = _index$1$getSystemInf.windowWidth, system = _index$1$getSystemInf.system;

var blankChar = makeMap(" ,\r,\n,\t,\f");

var idIndex = 0;

function makeMap(str) {
    var map2 = /*   */ Object.create(null);
    var list = str.split(",");
    for (var i2 = list.length; i2--; ) {
        map2[list[i2]] = true;
    }
    return map2;
}

function decodeEntity(str, amp) {
    var i2 = str.indexOf("&");
    while (i2 !== -1) {
        var j2 = str.indexOf(";", i2 + 3);
        var code2 = void 0;
        if (j2 === -1) break;
        if (str[i2 + 1] === "#") {
            code2 = parseInt((str[i2 + 2] === "x" ? "0" : "") + str.substring(i2 + 2, j2));
            if (!isNaN(code2)) {
                str = str.substr(0, i2) + String.fromCharCode(code2) + str.substr(j2 + 1);
            }
        } else {
            code2 = str.substring(i2 + 1, j2);
            if (config.entities[code2] || code2 === "amp" && amp) {
                str = str.substr(0, i2) + (config.entities[code2] || "&") + str.substr(j2 + 1);
            }
        }
        i2 = str.indexOf("&", i2 + 1);
    }
    return str;
}

function mergeNodes(nodes) {
    var i2 = nodes.length - 1;
    for (var j2 = i2; j2 >= -1; j2--) {
        if (j2 === -1 || nodes[j2].c || !nodes[j2].name || nodes[j2].name !== "div" && nodes[j2].name !== "p" && nodes[j2].name[0] !== "h" || (nodes[j2].attrs.style || "").includes("inline")) {
            if (i2 - j2 >= 5) {
                nodes.splice(j2 + 1, i2 - j2, {
                    name: "div",
                    attrs: {},
                    children: nodes.slice(j2 + 1, i2 + 1)
                });
            }
            i2 = j2 - 1;
        }
    }
}

function Parser(vm) {
    this.options = vm || {};
    this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
    this.imgList = vm.imgList || [];
    this.imgList._unloadimgs = 0;
    this.plugins = vm.plugins || [];
    this.attrs = /*   */ Object.create(null);
    this.stack = [];
    this.nodes = [];
    this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
}

Parser.prototype.parse = function(content) {
    for (var i2 = this.plugins.length; i2--; ) {
        if (this.plugins[i2].onUpdate) {
            content = this.plugins[i2].onUpdate(content, config) || content;
        }
    }
    new Lexer(this).parse(content);
    while (this.stack.length) {
        this.popNode();
    }
    if (this.nodes.length > 50) {
        mergeNodes(this.nodes);
    }
    return this.nodes;
};

Parser.prototype.expose = function() {
    for (var i2 = this.stack.length; i2--; ) {
        var item = this.stack[i2];
        if (item.c || item.name === "a" || item.name === "video" || item.name === "audio") return;
        item.c = 1;
    }
};

Parser.prototype.hook = function(node) {
    for (var i2 = this.plugins.length; i2--; ) {
        if (this.plugins[i2].onParse && this.plugins[i2].onParse(node, this) === false) {
            return false;
        }
    }
    return true;
};

Parser.prototype.getUrl = function(url2) {
    var domain = this.options.domain;
    if (url2[0] === "/") {
        if (url2[1] === "/") {
            url2 = (domain ? domain.split("://")[0] : "http") + ":" + url2;
        } else if (domain) {
            url2 = domain + url2;
        }
    } else if (!url2.includes("data:") && !url2.includes("://")) {
        if (domain) {
            url2 = domain + "/" + url2;
        }
    }
    return url2;
};

Parser.prototype.parseStyle = function(node) {
    var attrs = node.attrs;
    var list = (this.tagStyle[node.name] || "").split(";").concat((attrs.style || "").split(";"));
    var styleObj = {};
    var tmp = "";
    if (attrs.id && !this.xml) {
        if (this.options.useAnchor) {
            this.expose();
        } else if (node.name !== "img" && node.name !== "a" && node.name !== "video" && node.name !== "audio") {
            attrs.id = void 0;
        }
    }
    if (attrs.width) {
        styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
        attrs.width = void 0;
    }
    if (attrs.height) {
        styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
        attrs.height = void 0;
    }
    for (var i2 = 0, len = list.length; i2 < len; i2++) {
        var info = list[i2].split(":");
        if (info.length < 2) continue;
        var key = info.shift().trim().toLowerCase();
        var value2 = info.join(":").trim();
        if (value2[0] === "-" && value2.lastIndexOf("-") > 0 || value2.includes("safe")) {
            tmp += ";".concat(key, ":").concat(value2);
        } else if (!styleObj[key] || value2.includes("import") || !styleObj[key].includes("import")) {
            if (value2.includes("url")) {
                var j2 = value2.indexOf("(") + 1;
                if (j2) {
                    while (value2[j2] === '"' || value2[j2] === "'" || blankChar[value2[j2]]) {
                        j2++;
                    }
                    value2 = value2.substr(0, j2) + this.getUrl(value2.substr(j2));
                }
            } else if (value2.includes("rpx")) {
                value2 = value2.replace(/[0-9.]+\s*rpx/g, function($2) {
                    return parseFloat($2) * windowWidth / 750 + "px";
                });
            }
            styleObj[key] = value2;
        }
    }
    node.attrs.style = tmp;
    return styleObj;
};

Parser.prototype.onTagName = function(name) {
    this.tagName = this.xml ? name : name.toLowerCase();
    if (this.tagName === "svg") {
        this.xml = (this.xml || 0) + 1;
        config.ignoreTags.style = void 0;
    }
};

Parser.prototype.onAttrName = function(name) {
    name = this.xml ? name : name.toLowerCase();
    if (name.substr(0, 5) === "data-") {
        if (name === "data-src" && !this.attrs.src) {
            this.attrName = "src";
        } else if (this.tagName === "img" || this.tagName === "a") {
            this.attrName = name;
        } else {
            this.attrName = void 0;
        }
    } else {
        this.attrName = name;
        this.attrs[name] = "T";
    }
};

Parser.prototype.onAttrVal = function(val) {
    var name = this.attrName || "";
    if (name === "style" || name === "href") {
        this.attrs[name] = decodeEntity(val, true);
    } else if (name.includes("src")) {
        this.attrs[name] = this.getUrl(decodeEntity(val, true));
    } else if (name) {
        this.attrs[name] = val;
    }
};

Parser.prototype.onOpenTag = function(selfClose) {
    var node = /*   */ Object.create(null);
    node.name = this.tagName;
    node.attrs = this.attrs;
    if (this.options.nodes.length) {
        node.type = "node";
    }
    this.attrs = /*   */ Object.create(null);
    var attrs = node.attrs;
    var parent = this.stack[this.stack.length - 1];
    var siblings = parent ? parent.children : this.nodes;
    var close = this.xml ? selfClose : config.voidTags[node.name];
    if (tagSelector[node.name]) {
        attrs.class = tagSelector[node.name] + (attrs.class ? " " + attrs.class : "");
    }
    if (node.name === "embed") {
        var src = attrs.src || "";
        if (src.includes(".mp4") || src.includes(".3gp") || src.includes(".m3u8") || (attrs.type || "").includes("video")) {
            node.name = "video";
        } else if (src.includes(".mp3") || src.includes(".wav") || src.includes(".aac") || src.includes(".m4a") || (attrs.type || "").includes("audio")) {
            node.name = "audio";
        }
        if (attrs.autostart) {
            attrs.autoplay = "T";
        }
        attrs.controls = "T";
    }
    if (node.name === "video" || node.name === "audio") {
        if (node.name === "video" && !attrs.id) {
            attrs.id = "v" + idIndex++;
        }
        if (!attrs.controls && !attrs.autoplay) {
            attrs.controls = "T";
        }
        node.src = [];
        if (attrs.src) {
            node.src.push(attrs.src);
            attrs.src = void 0;
        }
        this.expose();
    }
    if (close) {
        if (!this.hook(node) || config.ignoreTags[node.name]) {
            if (node.name === "base" && !this.options.domain) {
                this.options.domain = attrs.href;
            } else if (node.name === "source" && parent && (parent.name === "video" || parent.name === "audio") && attrs.src) {
                parent.src.push(attrs.src);
            }
            return;
        }
        var styleObj = this.parseStyle(node);
        if (node.name === "img") {
            if (attrs.src) {
                if (attrs.src.includes("webp")) {
                    node.webp = "T";
                }
                if (attrs.src.includes("data:") && !attrs["original-src"]) {
                    attrs.ignore = "T";
                }
                if (!attrs.ignore || node.webp || attrs.src.includes("cloud://")) {
                    for (var i2 = this.stack.length; i2--; ) {
                        var item = this.stack[i2];
                        if (item.name === "a") {
                            node.a = item.attrs;
                        }
                        if (item.name === "table" && !node.webp && !attrs.src.includes("cloud://")) {
                            if (!styleObj.display || styleObj.display.includes("inline")) {
                                node.t = "inline-block";
                            } else {
                                node.t = styleObj.display;
                            }
                            styleObj.display = void 0;
                        }
                        var style = item.attrs.style || "";
                        if (style.includes("flex:") && !style.includes("flex:0") && !style.includes("flex: 0") && (!styleObj.width || parseInt(styleObj.width) > 100)) {
                            styleObj.width = "100% !important";
                            styleObj.height = "";
                            for (var j2 = i2 + 1; j2 < this.stack.length; j2++) {
                                this.stack[j2].attrs.style = (this.stack[j2].attrs.style || "").replace("inline-", "");
                            }
                        } else if (style.includes("flex") && styleObj.width === "100%") {
                            for (var _j2 = i2 + 1; _j2 < this.stack.length; _j2++) {
                                var style2 = this.stack[_j2].attrs.style || "";
                                if (!style2.includes(";width") && !style2.includes(" width") && style2.indexOf("width") !== 0) {
                                    styleObj.width = "";
                                    break;
                                }
                            }
                        } else if (style.includes("inline-block")) {
                            if (styleObj.width && styleObj.width[styleObj.width.length - 1] === "%") {
                                item.attrs.style += ";max-width:" + styleObj.width;
                                styleObj.width = "";
                            } else {
                                item.attrs.style += ";max-width:100%";
                            }
                        }
                        item.c = 1;
                    }
                    attrs.i = this.imgList.length.toString();
                    var _src = attrs["original-src"] || attrs.src;
                    if (this.imgList.includes(_src)) {
                        var _i12 = _src.indexOf("://");
                        if (_i12 !== -1) {
                            _i12 += 3;
                            var newSrc = _src.substr(0, _i12);
                            for (;_i12 < _src.length; _i12++) {
                                if (_src[_i12] === "/") break;
                                newSrc += Math.random() > .5 ? _src[_i12].toUpperCase() : _src[_i12];
                            }
                            newSrc += _src.substr(_i12);
                            _src = newSrc;
                        }
                    }
                    this.imgList.push(_src);
                    if (!node.t) {
                        this.imgList._unloadimgs += 1;
                    }
                }
            }
            if (styleObj.display === "inline") {
                styleObj.display = "";
            }
            if (attrs.ignore) {
                styleObj["max-width"] = styleObj["max-width"] || "100%";
                attrs.style += ";-webkit-touch-callout:none";
            }
            if (parseInt(styleObj.width) > windowWidth) {
                styleObj.height = void 0;
            }
            if (!isNaN(parseInt(styleObj.width))) {
                node.w = "T";
            }
            if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent && (parent.attrs.style || "").includes("height"))) {
                node.h = "T";
            }
        } else if (node.name === "svg") {
            siblings.push(node);
            this.stack.push(node);
            this.popNode();
            return;
        }
        for (var key in styleObj) {
            if (styleObj[key]) {
                attrs.style += ";".concat(key, ":").concat(styleObj[key].replace(" !important", ""));
            }
        }
        attrs.style = attrs.style.substr(1) || void 0;
        if (!attrs.style) {
            delete attrs.style;
        }
    } else {
        if ((node.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
            this.pre = node.pre = 1;
        }
        node.children = [];
        this.stack.push(node);
    }
    siblings.push(node);
};

Parser.prototype.onCloseTag = function(name) {
    name = this.xml ? name : name.toLowerCase();
    var i2;
    for (i2 = this.stack.length; i2--; ) {
        if (this.stack[i2].name === name) break;
    }
    if (i2 !== -1) {
        while (this.stack.length > i2) {
            this.popNode();
        }
    } else if (name === "p" || name === "br") {
        var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
        siblings.push({
            name: name,
            attrs: {
                class: tagSelector[name] || "",
                style: this.tagStyle[name] || ""
            }
        });
    }
};

Parser.prototype.popNode = function() {
    var node = this.stack.pop();
    var attrs = node.attrs;
    var children = node.children;
    var parent = this.stack[this.stack.length - 1];
    var siblings = parent ? parent.children : this.nodes;
    if (!this.hook(node) || config.ignoreTags[node.name]) {
        if (node.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
            index$1.setNavigationBarTitle({
                title: children[0].text
            });
        }
        siblings.pop();
        return;
    }
    if (node.pre && this.pre !== 2) {
        this.pre = node.pre = void 0;
        for (var i2 = this.stack.length; i2--; ) {
            if (this.stack[i2].pre) {
                this.pre = 1;
            }
        }
    }
    var styleObj = {};
    if (node.name === "svg") {
        if (this.xml > 1) {
            this.xml--;
            return;
        }
        var src = "";
        var style = attrs.style;
        attrs.style = "";
        attrs.xmlns = "http://www.w3.org/2000/svg";
        (function traversal(node2) {
            if (node2.type === "text") {
                src += node2.text;
                return;
            }
            var name = config.svgDict[node2.name] || node2.name;
            src += "<" + name;
            for (var item in node2.attrs) {
                var val = node2.attrs[item];
                if (val) {
                    src += " ".concat(config.svgDict[item] || item, '="').concat(val, '"');
                }
            }
            if (!node2.children) {
                src += "/>";
            } else {
                src += ">";
                for (var _i13 = 0; _i13 < node2.children.length; _i13++) {
                    traversal(node2.children[_i13]);
                }
                src += "</" + name + ">";
            }
        })(node);
        node.name = "img";
        node.attrs = {
            src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
            style: style,
            ignore: "T"
        };
        node.children = void 0;
        this.xml = false;
        config.ignoreTags.style = true;
        return;
    }
    if (attrs.align) {
        if (node.name === "table") {
            if (attrs.align === "center") {
                styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
            } else {
                styleObj.float = attrs.align;
            }
        } else {
            styleObj["text-align"] = attrs.align;
        }
        attrs.align = void 0;
    }
    if (attrs.dir) {
        styleObj.direction = attrs.dir;
        attrs.dir = void 0;
    }
    if (node.name === "font") {
        if (attrs.color) {
            styleObj.color = attrs.color;
            attrs.color = void 0;
        }
        if (attrs.face) {
            styleObj["font-family"] = attrs.face;
            attrs.face = void 0;
        }
        if (attrs.size) {
            var size2 = parseInt(attrs.size);
            if (!isNaN(size2)) {
                if (size2 < 1) {
                    size2 = 1;
                } else if (size2 > 7) {
                    size2 = 7;
                }
                styleObj["font-size"] = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large" ][size2 - 1];
            }
            attrs.size = void 0;
        }
    }
    if ((attrs.class || "").includes("align-center")) {
        styleObj["text-align"] = "center";
    }
    Object.assign(styleObj, this.parseStyle(node));
    if (node.name !== "table" && parseInt(styleObj.width) > windowWidth) {
        styleObj["max-width"] = "100%";
        styleObj["box-sizing"] = "border-box";
    }
    if (config.blockTags[node.name]) {
        node.name = "div";
    } else if (!config.trustTags[node.name] && !this.xml) {
        node.name = "span";
    }
    if (node.name === "a" || node.name === "ad") {
        this.expose();
    } else if (node.name === "video") {
        if ((styleObj.height || "").includes("auto")) {
            styleObj.height = void 0;
        }
    } else if ((node.name === "ul" || node.name === "ol") && node.c) {
        var types = {
            a: "lower-alpha",
            A: "upper-alpha",
            i: "lower-roman",
            I: "upper-roman"
        };
        if (types[attrs.type]) {
            attrs.style += ";list-style-type:" + types[attrs.type];
            attrs.type = void 0;
        }
        for (var _i14 = children.length; _i14--; ) {
            if (children[_i14].name === "li") {
                children[_i14].c = 1;
            }
        }
    } else if (node.name === "table") {
        var padding = parseFloat(attrs.cellpadding);
        var spacing = parseFloat(attrs.cellspacing);
        var border = parseFloat(attrs.border);
        var bordercolor = styleObj["border-color"];
        var borderstyle = styleObj["border-style"];
        if (node.c) {
            if (isNaN(padding)) {
                padding = 2;
            }
            if (isNaN(spacing)) {
                spacing = 2;
            }
        }
        if (border) {
            attrs.style += ";border:".concat(border, "px ").concat(borderstyle || "solid", " ").concat(bordercolor || "gray");
        }
        if (node.flag && node.c) {
            styleObj.display = "grid";
            if (spacing) {
                styleObj["grid-gap"] = spacing + "px";
                styleObj.padding = spacing + "px";
            } else if (border) {
                attrs.style += ";border-left:0;border-top:0";
            }
            var width = [];
            var trList = [];
            var cells = [];
            var map2 = {};
            (function traversal(nodes) {
                for (var _i15 = 0; _i15 < nodes.length; _i15++) {
                    if (nodes[_i15].name === "tr") {
                        trList.push(nodes[_i15]);
                    } else {
                        traversal(nodes[_i15].children || []);
                    }
                }
            })(children);
            for (var row = 1; row <= trList.length; row++) {
                var col = 1;
                for (var j2 = 0; j2 < trList[row - 1].children.length; j2++) {
                    var td = trList[row - 1].children[j2];
                    if (td.name === "td" || td.name === "th") {
                        while (map2[row + "." + col]) {
                            col++;
                        }
                        var _style = td.attrs.style || "";
                        var start = _style.indexOf("width") ? _style.indexOf(";width") : 0;
                        if (start !== -1) {
                            var end = _style.indexOf(";", start + 6);
                            if (end === -1) {
                                end = _style.length;
                            }
                            if (!td.attrs.colspan) {
                                width[col] = _style.substring(start ? start + 7 : 6, end);
                            }
                            _style = _style.substr(0, start) + _style.substr(end);
                        }
                        _style += ";display:flex";
                        start = _style.indexOf("vertical-align");
                        if (start !== -1) {
                            var val = _style.substr(start + 15, 10);
                            if (val.includes("middle")) {
                                _style += ";align-items:center";
                            } else if (val.includes("bottom")) {
                                _style += ";align-items:flex-end";
                            }
                        } else {
                            _style += ";align-items:center";
                        }
                        start = _style.indexOf("text-align");
                        if (start !== -1) {
                            var _val = _style.substr(start + 11, 10);
                            if (_val.includes("center")) {
                                _style += ";justify-content: center";
                            } else if (_val.includes("right")) {
                                _style += ";justify-content: right";
                            }
                        }
                        _style = (border ? ";border:".concat(border, "px ").concat(borderstyle || "solid", " ").concat(bordercolor || "gray") + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? ";padding:".concat(padding, "px") : "") + ";" + _style;
                        if (td.attrs.colspan) {
                            _style += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + parseInt(td.attrs.colspan));
                            if (!td.attrs.rowspan) {
                                _style += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + 1);
                            }
                            col += parseInt(td.attrs.colspan) - 1;
                        }
                        if (td.attrs.rowspan) {
                            _style += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + parseInt(td.attrs.rowspan));
                            if (!td.attrs.colspan) {
                                _style += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + 1);
                            }
                            for (var rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                                for (var colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                                    map2[row + rowspan + "." + (col - colspan)] = 1;
                                }
                            }
                        }
                        if (_style) {
                            td.attrs.style = _style;
                        }
                        cells.push(td);
                        col++;
                    }
                }
                if (row === 1) {
                    var temp = "";
                    for (var _i16 = 1; _i16 < col; _i16++) {
                        temp += (width[_i16] ? width[_i16] : "auto") + " ";
                    }
                    styleObj["grid-template-columns"] = temp;
                }
            }
            node.children = cells;
        } else {
            if (node.c) {
                styleObj.display = "table";
            }
            if (!isNaN(spacing)) {
                styleObj["border-spacing"] = spacing + "px";
            }
            if (border || padding) {
                (function traversal(nodes) {
                    for (var _i17 = 0; _i17 < nodes.length; _i17++) {
                        var _td = nodes[_i17];
                        if (_td.name === "th" || _td.name === "td") {
                            if (border) {
                                _td.attrs.style = "border:".concat(border, "px ").concat(borderstyle || "solid", " ").concat(bordercolor || "gray", ";").concat(_td.attrs.style || "");
                            }
                            if (padding) {
                                _td.attrs.style = "padding:".concat(padding, "px;").concat(_td.attrs.style || "");
                            }
                        } else if (_td.children) {
                            traversal(_td.children);
                        }
                    }
                })(children);
            }
        }
        if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
            var table = Object.assign({}, node);
            node.name = "div";
            node.attrs = {
                style: "overflow:auto"
            };
            node.children = [ table ];
            attrs = table.attrs;
        }
    } else if ((node.name === "td" || node.name === "th") && (attrs.colspan || attrs.rowspan)) {
        for (var _i18 = this.stack.length; _i18--; ) {
            if (this.stack[_i18].name === "table") {
                this.stack[_i18].flag = 1;
                break;
            }
        }
    } else if (node.name === "ruby") {
        node.name = "span";
        for (var _i19 = 0; _i19 < children.length - 1; _i19++) {
            if (children[_i19].type === "text" && children[_i19 + 1].name === "rt") {
                children[_i19] = {
                    name: "div",
                    attrs: {
                        style: "display:inline-block;text-align:center"
                    },
                    children: [ {
                        name: "div",
                        attrs: {
                            style: "font-size:50%;" + (children[_i19 + 1].attrs.style || "")
                        },
                        children: children[_i19 + 1].children
                    }, children[_i19] ]
                };
                children.splice(_i19 + 1, 1);
            }
        }
    } else if (node.c) {
        (function traversal(node2) {
            node2.c = 2;
            for (var _i20 = node2.children.length; _i20--; ) {
                var child = node2.children[_i20];
                if (child.name && (config.inlineTags[child.name] || (child.attrs.style || "").includes("inline") && child.children) && !child.c) {
                    traversal(child);
                }
                if (!child.c || child.name === "table") {
                    node2.c = 1;
                }
            }
        })(node);
    }
    if ((styleObj.display || "").includes("flex") && !node.c) {
        for (var _i21 = children.length; _i21--; ) {
            var item = children[_i21];
            if (item.f) {
                item.attrs.style = (item.attrs.style || "") + item.f;
                item.f = void 0;
            }
        }
    }
    var flex = parent && ((parent.attrs.style || "").includes("flex") || (parent.attrs.style || "").includes("grid")) && !(node.c && wx$1.getNFCAdapter);
    if (flex) {
        node.f = ";max-width:100%";
    }
    if (children.length >= 50 && node.c && !(styleObj.display || "").includes("flex")) {
        mergeNodes(children);
    }
    for (var key in styleObj) {
        if (styleObj[key]) {
            var _val2 = ";".concat(key, ":").concat(styleObj[key].replace(" !important", ""));
            if (flex && (key.includes("flex") && key !== "flex-direction" || key === "align-self" || key.includes("grid") || styleObj[key][0] === "-" || key.includes("width") && _val2.includes("%"))) {
                node.f += _val2;
                if (key === "width") {
                    attrs.style += ";width:100%";
                }
            } else {
                attrs.style += _val2;
            }
        }
    }
    attrs.style = attrs.style.substr(1) || void 0;
    for (var _key38 in attrs) {
        if (!attrs[_key38]) {
            delete attrs[_key38];
        }
    }
};

Parser.prototype.onText = function(text) {
    if (!this.pre) {
        var trim2 = "";
        var flag2;
        for (var i2 = 0, len = text.length; i2 < len; i2++) {
            if (!blankChar[text[i2]]) {
                trim2 += text[i2];
            } else {
                if (trim2[trim2.length - 1] !== " ") {
                    trim2 += " ";
                }
                if (text[i2] === "\n" && !flag2) {
                    flag2 = true;
                }
            }
        }
        if (trim2 === " ") {
            if (flag2) return; else {
                var parent = this.stack[this.stack.length - 1];
                if (parent && parent.name[0] === "t") return;
            }
        }
        text = trim2;
    }
    var node = /*   */ Object.create(null);
    node.type = "text";
    node.text = decodeEntity(text);
    if (this.hook(node)) {
        if (this.options.selectable === "force" && system.includes("iOS") && !index$1.canIUse("rich-text.user-select")) {
            this.expose();
        }
        var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
        siblings.push(node);
    }
};

function Lexer(handler) {
    this.handler = handler;
}

Lexer.prototype.parse = function(content) {
    this.content = content || "";
    this.i = 0;
    this.start = 0;
    this.state = this.text;
    for (var len = this.content.length; this.i !== -1 && this.i < len; ) {
        this.state();
    }
};

Lexer.prototype.checkClose = function(method) {
    var selfClose = this.content[this.i] === "/";
    if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
        if (method) {
            this.handler[method](this.content.substring(this.start, this.i));
        }
        this.i += selfClose ? 2 : 1;
        this.start = this.i;
        this.handler.onOpenTag(selfClose);
        if (this.handler.tagName === "script") {
            this.i = this.content.indexOf("</", this.i);
            if (this.i !== -1) {
                this.i += 2;
                this.start = this.i;
            }
            this.state = this.endTag;
        } else {
            this.state = this.text;
        }
        return true;
    }
    return false;
};

Lexer.prototype.text = function() {
    this.i = this.content.indexOf("<", this.i);
    if (this.i === -1) {
        if (this.start < this.content.length) {
            this.handler.onText(this.content.substring(this.start, this.content.length));
        }
        return;
    }
    var c2 = this.content[this.i + 1];
    if (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z") {
        if (this.start !== this.i) {
            this.handler.onText(this.content.substring(this.start, this.i));
        }
        this.start = ++this.i;
        this.state = this.tagName;
    } else if (c2 === "/" || c2 === "!" || c2 === "?") {
        if (this.start !== this.i) {
            this.handler.onText(this.content.substring(this.start, this.i));
        }
        var next = this.content[this.i + 2];
        if (c2 === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
            this.i += 2;
            this.start = this.i;
            this.state = this.endTag;
            return;
        }
        var end = "--\x3e";
        if (c2 !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
            end = ">";
        }
        this.i = this.content.indexOf(end, this.i);
        if (this.i !== -1) {
            this.i += end.length;
            this.start = this.i;
        }
    } else {
        this.i++;
    }
};

Lexer.prototype.tagName = function() {
    if (blankChar[this.content[this.i]]) {
        this.handler.onTagName(this.content.substring(this.start, this.i));
        while (blankChar[this.content[++this.i]]) ;
        if (this.i < this.content.length && !this.checkClose()) {
            this.start = this.i;
            this.state = this.attrName;
        }
    } else if (!this.checkClose("onTagName")) {
        this.i++;
    }
};

Lexer.prototype.attrName = function() {
    var c2 = this.content[this.i];
    if (blankChar[c2] || c2 === "=") {
        this.handler.onAttrName(this.content.substring(this.start, this.i));
        var needVal = c2 === "=";
        var len = this.content.length;
        while (++this.i < len) {
            c2 = this.content[this.i];
            if (!blankChar[c2]) {
                if (this.checkClose()) return;
                if (needVal) {
                    this.start = this.i;
                    this.state = this.attrVal;
                    return;
                }
                if (this.content[this.i] === "=") {
                    needVal = true;
                } else {
                    this.start = this.i;
                    this.state = this.attrName;
                    return;
                }
            }
        }
    } else if (!this.checkClose("onAttrName")) {
        this.i++;
    }
};

Lexer.prototype.attrVal = function() {
    var c2 = this.content[this.i];
    var len = this.content.length;
    if (c2 === '"' || c2 === "'") {
        this.start = ++this.i;
        this.i = this.content.indexOf(c2, this.i);
        if (this.i === -1) return;
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
    } else {
        for (;this.i < len; this.i++) {
            if (blankChar[this.content[this.i]]) {
                this.handler.onAttrVal(this.content.substring(this.start, this.i));
                break;
            } else if (this.checkClose("onAttrVal")) return;
        }
    }
    while (blankChar[this.content[++this.i]]) ;
    if (this.i < len && !this.checkClose()) {
        this.start = this.i;
        this.state = this.attrName;
    }
};

Lexer.prototype.endTag = function() {
    var c2 = this.content[this.i];
    if (blankChar[c2] || c2 === ">" || c2 === "/") {
        this.handler.onCloseTag(this.content.substring(this.start, this.i));
        if (c2 !== ">") {
            this.i = this.content.indexOf(">", this.i);
            if (this.i === -1) return;
        }
        this.start = ++this.i;
        this.state = this.text;
    } else {
        this.i++;
    }
};

var props$5 = {
    props: _objectSpread2({
        // 是否显示遮罩
        show: {
            type: Boolean,
            default: false
        },
        // 层级z-index
        zIndex: {
            type: [ String, Number ],
            default: 10070
        },
        // 遮罩的过渡时间，单位为ms
        duration: {
            type: [ String, Number ],
            default: 300
        },
        // 不透明度值，当做rgba的第四个参数
        opacity: {
            type: [ String, Number ],
            default: .5
        }
    }, (_n = (_m = index$1.$uv) == null ? void 0 : _m.props) == null ? void 0 : _n.overlay)
};

var props$4 = {
    props: {
        bgColor: {
            type: String,
            default: "transparent"
        }
    }
};

var MPAnimation = /* */ function() {
    function MPAnimation(options, _this) {
        _classCallCheck2(this, MPAnimation);
        this.options = options;
        this.animation = index$1.createAnimation(_objectSpread2({}, options));
        this.currentStepAnimates = {};
        this.next = 0;
        this.$ = _this;
    }
    return _createClass2(MPAnimation, [ {
        key: "_nvuePushAnimates",
        value: function _nvuePushAnimates(type, args) {
            var aniObj = this.currentStepAnimates[this.next];
            var styles = {};
            if (!aniObj) {
                styles = {
                    styles: {},
                    config: {}
                };
            } else {
                styles = aniObj;
            }
            if (animateTypes1.includes(type)) {
                if (!styles.styles.transform) {
                    styles.styles.transform = "";
                }
                var unit = "";
                if (type === "rotate") {
                    unit = "deg";
                }
                styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
            } else {
                styles.styles[type] = "".concat(args);
            }
            this.currentStepAnimates[this.next] = styles;
        }
    }, {
        key: "_animateRun",
        value: function _animateRun() {
            var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var ref2 = this.$.$refs["ani"].ref;
            if (!ref2) return;
            return new Promise(function(resolve2, reject) {
                nvueAnimation.transition(ref2, _objectSpread2({
                    styles: styles
                }, config2), function(res) {
                    resolve2();
                });
            });
        }
    }, {
        key: "_nvueNextAnimate",
        value: function _nvueNextAnimate(animates) {
            var _this30 = this;
            var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var fn = arguments.length > 2 ? arguments[2] : undefined;
            var obj = animates[step];
            if (obj) {
                var styles = obj.styles, config2 = obj.config;
                this._animateRun(styles, config2).then(function() {
                    step += 1;
                    _this30._nvueNextAnimate(animates, step, fn);
                });
            } else {
                this.currentStepAnimates = {};
                typeof fn === "function" && fn();
                this.isEnd = true;
            }
        }
    }, {
        key: "step",
        value: function step() {
            var config2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.animation.step(config2);
            return this;
        }
    }, {
        key: "run",
        value: function run(fn) {
            this.$.animationData = this.animation.export();
            this.$.timer = setTimeout(function() {
                typeof fn === "function" && fn();
            }, this.$.durationTime);
        }
    } ]);
}();

var animateTypes1 = [ "matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ" ];

var animateTypes2 = [ "opacity", "backgroundColor" ];

var animateTypes3 = [ "width", "height", "left", "right", "top", "bottom" ];

animateTypes1.concat(animateTypes2, animateTypes3).forEach(function(type) {
    MPAnimation.prototype[type] = function() {
        var _this$animation;
        (_this$animation = this.animation)[type].apply(_this$animation, arguments);
        return this;
    };
});

function createAnimation(option, _this) {
    if (!_this) return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
}

var value = {
    computed: {
        // 经处理后需要显示的值
        value: function value() {
            var text = this.text, mode = this.mode, format = this.format, href = this.href;
            if (mode === "price") {
                if (!/^\d+(\.\d+)?$/.test(text)) {
                    error("金额模式下，text参数需要为金额格式");
                }
                if (func(format)) {
                    return format(text);
                }
                return priceFormat(text, 2);
            }
            if (mode === "date") {
                !date(text) && error("日期模式下，text参数需要为日期或时间戳格式");
                if (func(format)) {
                    return format(text);
                }
                if (format) {
                    return timeFormat(text, format);
                }
                return timeFormat(text, "yyyy-mm-dd");
            }
            if (mode === "phone") {
                if (func(format)) {
                    return format(text);
                }
                if (format === "encrypt") {
                    return "".concat(text.substr(0, 3), "****").concat(text.substr(7));
                }
                return text;
            }
            if (mode === "name") {
                !(typeof text === "string") && error("姓名模式下，text参数需要为字符串格式");
                if (func(format)) {
                    return format(text);
                }
                if (format === "encrypt") {
                    return this.formatName(text);
                }
                return text;
            }
            if (mode === "link") {
                !url(href) && error("超链接模式下，href参数需要为URL格式");
                return text;
            }
            return text;
        }
    },
    methods: {
        // 默认的姓名脱敏规则
        formatName: function formatName(name) {
            var value2 = "";
            if (name.length === 2) {
                value2 = name.substr(0, 1) + "*";
            } else if (name.length > 2) {
                var char = "";
                for (var i2 = 0, len = name.length - 2; i2 < len; i2++) {
                    char += "*";
                }
                value2 = name.substr(0, 1) + char + name.substr(-1, 1);
            } else {
                value2 = name;
            }
            return value2;
        }
    }
};

var button = {
    props: {
        lang: String,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        formType: String,
        openType: String
    }
};

var openType = {
    props: {
        openType: String
    },
    emits: [ "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp", "contact", "chooseavatar", "addgroupapp", "chooseaddress", "subscribe", "login", "im" ],
    methods: {
        onGetPhoneNumber: function onGetPhoneNumber(event) {
            this.$emit("getphonenumber", event.detail);
        },
        onGetUserInfo: function onGetUserInfo(event) {
            this.$emit("getuserinfo", event.detail);
        },
        onError: function onError(event) {
            this.$emit("error", event.detail);
        },
        onOpenSetting: function onOpenSetting(event) {
            this.$emit("opensetting", event.detail);
        },
        onLaunchApp: function onLaunchApp(event) {
            this.$emit("launchapp", event.detail);
        },
        onContact: function onContact(event) {
            this.$emit("contact", event.detail);
        },
        onChooseavatar: function onChooseavatar(event) {
            this.$emit("chooseavatar", event.detail);
        },
        onAgreeprivacyauthorization: function onAgreeprivacyauthorization(event) {
            this.$emit("agreeprivacyauthorization", event.detail);
        },
        onAddgroupapp: function onAddgroupapp(event) {
            this.$emit("addgroupapp", event.detail);
        },
        onChooseaddress: function onChooseaddress(event) {
            this.$emit("chooseaddress", event.detail);
        },
        onSubscribe: function onSubscribe(event) {
            this.$emit("subscribe", event.detail);
        },
        onLogin: function onLogin(event) {
            this.$emit("login", event.detail);
        },
        onIm: function onIm(event) {
            this.$emit("im", event.detail);
        }
    }
};

var props$3 = {
    props: _objectSpread2({
        // 主题颜色
        type: {
            type: String,
            default: ""
        },
        // 是否显示
        show: {
            type: Boolean,
            default: true
        },
        // 显示的值
        text: {
            type: [ String, Number ],
            default: ""
        },
        // 前置图标
        prefixIcon: {
            type: String,
            default: ""
        },
        // 后置图标
        suffixIcon: {
            type: String,
            default: ""
        },
        // 文本处理的匹配模式
        // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
        mode: {
            type: String,
            default: ""
        },
        // mode=link下，配置的链接
        href: {
            type: String,
            default: ""
        },
        // 格式化规则
        format: {
            type: [ String, Function ],
            default: ""
        },
        // mode=phone时，点击文本是否拨打电话
        call: {
            type: Boolean,
            default: true
        },
        // 小程序的打开方式
        openType: {
            type: String,
            default: ""
        },
        // 是否粗体，默认normal
        bold: {
            type: Boolean,
            default: false
        },
        // 是否块状
        block: {
            type: Boolean,
            default: false
        },
        // 文本显示的行数，如果设置，超出此行数，将会显示省略号
        lines: {
            type: [ String, Number ],
            default: ""
        },
        // 文本颜色
        color: {
            type: String,
            default: "#303133"
        },
        // 字体大小
        size: {
            type: [ String, Number ],
            default: 15
        },
        // 图标的样式
        iconStyle: {
            type: [ Object, String ],
            default: function _default() {
                return {
                    fontSize: "15px"
                };
            }
        },
        // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
        decoration: {
            type: String,
            default: "none"
        },
        // 外边距，对象、字符串，数值形式均可
        margin: {
            type: [ Object, String, Number ],
            default: 0
        },
        // 文本行高
        lineHeight: {
            type: [ String, Number ],
            default: ""
        },
        // 文本对齐方式，可选值left|center|right
        align: {
            type: String,
            default: "left"
        },
        // 文字换行，可选值break-word|normal|anywhere
        wordWrap: {
            type: String,
            default: "normal"
        }
    }, (_p = (_o = index$1.$uv) == null ? void 0 : _o.props) == null ? void 0 : _p.text)
};

var props$2 = {
    props: _objectSpread2({
        color: {
            type: String,
            default: "#d6d7d9"
        },
        // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
        length: {
            type: [ String, Number ],
            default: "100%"
        },
        // 线条方向，col-竖向，row-横向
        direction: {
            type: String,
            default: "row"
        },
        // 是否显示细边框
        hairline: {
            type: Boolean,
            default: true
        },
        // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
        margin: {
            type: [ String, Number ],
            default: 0
        },
        // 是否虚线，true-虚线，false-实线
        dashed: {
            type: Boolean,
            default: false
        }
    }, (_r = (_q = index$1.$uv) == null ? void 0 : _q.props) == null ? void 0 : _r.line)
};

var props$1 = {
    props: _objectSpread2({
        // 是否显示组件
        show: {
            type: Boolean,
            default: true
        },
        // 颜色
        color: {
            type: String,
            default: "#909193"
        },
        // 提示文字颜色
        textColor: {
            type: String,
            default: "#909193"
        },
        // 文字和图标是否垂直排列
        vertical: {
            type: Boolean,
            default: false
        },
        // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
        mode: {
            type: String,
            default: "spinner"
        },
        // 图标大小，单位默认px
        size: {
            type: [ String, Number ],
            default: 24
        },
        // 文字大小
        textSize: {
            type: [ String, Number ],
            default: 15
        },
        // 文字样式
        textStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        // 文字内容
        text: {
            type: [ String, Number ],
            default: ""
        },
        // 动画模式 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
        timingFunction: {
            type: String,
            default: "linear"
        },
        // 动画执行周期时间
        duration: {
            type: [ String, Number ],
            default: 1200
        },
        // mode=circle时的暗边颜色
        inactiveColor: {
            type: String,
            default: ""
        }
    }, (_t2 = (_s2 = index$1.$uv) == null ? void 0 : _s2.props) == null ? void 0 : _t2.loadingIcon)
};

var props = {
    props: _objectSpread2({
        // 文字颜色
        color: {
            type: String,
            default: ""
        },
        // 字体大小，单位px
        fontSize: {
            type: [ String, Number ],
            default: 14
        },
        // 是否显示下划线
        underLine: {
            type: Boolean,
            default: false
        },
        // 要跳转的链接
        href: {
            type: String,
            default: ""
        },
        // 小程序中复制到粘贴板的提示语
        mpTips: {
            type: String,
            default: "链接已复制，请在浏览器打开"
        },
        // 下划线颜色
        lineColor: {
            type: String,
            default: ""
        },
        // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
        text: {
            type: String,
            default: ""
        }
    }, (_v = (_u = index$1.$uv) == null ? void 0 : _u.props) == null ? void 0 : _v.link)
};

exports.Parser = Parser;

exports.Ys = Ys;

exports._export_sfc = _export_sfc;

exports.button = button;

exports.colorGradient = colorGradient;

exports.computed = computed;

exports.createAnimation = createAnimation;

exports.createPinia = createPinia;

exports.createSSRApp = createSSRApp;

exports.defineStore = defineStore;

exports.e = e$1;

exports.f = f$1;

exports.icons = icons;

exports.index = index$1;

exports.isRef = isRef;

exports.mixin = mixin;

exports.mpMixin = mpMixin;

exports.n = n$1;

exports.o = o$1;

exports.onLoad = onLoad;

exports.onMounted = onMounted;

exports.onReachBottom = onReachBottom;

exports.onReady = onReady;

exports.onUnload = onUnload;

exports.openType = openType;

exports.p = p$1;

exports.props = props$9;

exports.props$1 = props$8;

exports.props$2 = props$7;

exports.props$3 = props$6;

exports.props$4 = props$5;

exports.props$5 = props$4;

exports.props$6 = props$3;

exports.props$7 = props$2;

exports.props$8 = props$1;

exports.props$9 = props;

exports.ref = ref;

exports.resolveComponent = resolveComponent;

exports.s = s$1;

exports.sr = sr;

exports.t = t$1;

exports.unref = unref;

exports.uvUI = uvUI;

exports.value = value;

exports.wx$1 = wx$1;