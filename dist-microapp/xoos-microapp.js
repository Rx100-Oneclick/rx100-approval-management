var np = Object.defineProperty;
var ap = (e, t, r) => t in e ? np(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var je = (e, t, r) => ap(e, typeof t != "symbol" ? t + "" : t, r);
function ed(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var td = { exports: {} }, Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta = Symbol.for("react.element"), ip = Symbol.for("react.portal"), op = Symbol.for("react.fragment"), sp = Symbol.for("react.strict_mode"), lp = Symbol.for("react.profiler"), up = Symbol.for("react.provider"), cp = Symbol.for("react.context"), dp = Symbol.for("react.forward_ref"), hp = Symbol.for("react.suspense"), fp = Symbol.for("react.memo"), pp = Symbol.for("react.lazy"), uu = Symbol.iterator;
function gp(e) {
  return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nd = Object.assign, ad = {};
function Sn(e, t, r) {
  this.props = e, this.context = t, this.refs = ad, this.updater = r || rd;
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function id() {
}
id.prototype = Sn.prototype;
function al(e, t, r) {
  this.props = e, this.context = t, this.refs = ad, this.updater = r || rd;
}
var il = al.prototype = new id();
il.constructor = al;
nd(il, Sn.prototype);
il.isPureReactComponent = !0;
var cu = Array.isArray, od = Object.prototype.hasOwnProperty, ol = { current: null }, sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ld(e, t, r) {
  var n, a = {}, i = null, o = null;
  if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) od.call(t, n) && !sd.hasOwnProperty(n) && (a[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) a.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (n in s = e.defaultProps, s) a[n] === void 0 && (a[n] = s[n]);
  return { $$typeof: Ta, type: e, key: i, ref: o, props: a, _owner: ol.current };
}
function mp(e, t) {
  return { $$typeof: Ta, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function sl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ta;
}
function vp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var du = /\/+/g;
function yo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vp("" + e.key) : t.toString(36);
}
function oi(e, t, r, n, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ta:
        case ip:
          o = !0;
      }
  }
  if (o) return o = e, a = a(o), e = n === "" ? "." + yo(o, 0) : n, cu(a) ? (r = "", e != null && (r = e.replace(du, "$&/") + "/"), oi(a, t, r, "", function(u) {
    return u;
  })) : a != null && (sl(a) && (a = mp(a, r + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(du, "$&/") + "/") + e)), t.push(a)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", cu(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var l = n + yo(i, s);
    o += oi(i, t, r, l, a);
  }
  else if (l = gp(e), typeof l == "function") for (e = l.call(e), s = 0; !(i = e.next()).done; ) i = i.value, l = n + yo(i, s++), o += oi(i, t, r, l, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Ua(e, t, r) {
  if (e == null) return e;
  var n = [], a = 0;
  return oi(e, n, "", "", function(i) {
    return t.call(r, i, a++);
  }), n;
}
function wp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null }, si = { transition: null }, yp = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: si, ReactCurrentOwner: ol };
function ud() {
  throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = { map: Ua, forEach: function(e, t, r) {
  Ua(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return Ua(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ua(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!sl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Q.Component = Sn;
Q.Fragment = op;
Q.Profiler = lp;
Q.PureComponent = al;
Q.StrictMode = sp;
Q.Suspense = hp;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
Q.act = ud;
Q.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = nd({}, e.props), a = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = ol.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) od.call(t, l) && !sd.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Ta, type: e.type, key: a, ref: i, props: n, _owner: o };
};
Q.createContext = function(e) {
  return e = { $$typeof: cp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: up, _context: e }, e.Consumer = e;
};
Q.createElement = ld;
Q.createFactory = function(e) {
  var t = ld.bind(null, e);
  return t.type = e, t;
};
Q.createRef = function() {
  return { current: null };
};
Q.forwardRef = function(e) {
  return { $$typeof: dp, render: e };
};
Q.isValidElement = sl;
Q.lazy = function(e) {
  return { $$typeof: pp, _payload: { _status: -1, _result: e }, _init: wp };
};
Q.memo = function(e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function(e) {
  var t = si.transition;
  si.transition = {};
  try {
    e();
  } finally {
    si.transition = t;
  }
};
Q.unstable_act = ud;
Q.useCallback = function(e, t) {
  return Pe.current.useCallback(e, t);
};
Q.useContext = function(e) {
  return Pe.current.useContext(e);
};
Q.useDebugValue = function() {
};
Q.useDeferredValue = function(e) {
  return Pe.current.useDeferredValue(e);
};
Q.useEffect = function(e, t) {
  return Pe.current.useEffect(e, t);
};
Q.useId = function() {
  return Pe.current.useId();
};
Q.useImperativeHandle = function(e, t, r) {
  return Pe.current.useImperativeHandle(e, t, r);
};
Q.useInsertionEffect = function(e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function(e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
Q.useMemo = function(e, t) {
  return Pe.current.useMemo(e, t);
};
Q.useReducer = function(e, t, r) {
  return Pe.current.useReducer(e, t, r);
};
Q.useRef = function(e) {
  return Pe.current.useRef(e);
};
Q.useState = function(e) {
  return Pe.current.useState(e);
};
Q.useSyncExternalStore = function(e, t, r) {
  return Pe.current.useSyncExternalStore(e, t, r);
};
Q.useTransition = function() {
  return Pe.current.useTransition();
};
Q.version = "18.3.1";
td.exports = Q;
var L = td.exports;
const T = /* @__PURE__ */ ed(L);
var cd = { exports: {} }, Ve = {}, dd = { exports: {} }, hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, O) {
    var j = R.length;
    R.push(O);
    e: for (; 0 < j; ) {
      var G = j - 1 >>> 1, D = R[G];
      if (0 < a(D, O)) R[G] = O, R[j] = D, j = G;
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var O = R[0], j = R.pop();
    if (j !== O) {
      R[0] = j;
      e: for (var G = 0, D = R.length, S = D >>> 1; G < S; ) {
        var z = 2 * (G + 1) - 1, J = R[z], ie = z + 1, H = R[ie];
        if (0 > a(J, j)) ie < D && 0 > a(H, J) ? (R[G] = H, R[ie] = j, G = ie) : (R[G] = J, R[z] = j, G = z);
        else if (ie < D && 0 > a(H, j)) R[G] = H, R[ie] = j, G = ie;
        else break e;
      }
    }
    return O;
  }
  function a(R, O) {
    var j = R.sortIndex - O.sortIndex;
    return j !== 0 ? j : R.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var l = [], u = [], c = 1, f = null, p = 3, d = !1, v = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(R) {
    for (var O = r(u); O !== null; ) {
      if (O.callback === null) n(u);
      else if (O.startTime <= R) n(u), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = r(u);
    }
  }
  function b(R) {
    if (w = !1, g(R), !v) if (r(l) !== null) v = !0, Fe(A);
    else {
      var O = r(u);
      O !== null && Te(b, O.startTime - R);
    }
  }
  function A(R, O) {
    v = !1, w && (w = !1, m(N), N = -1), d = !0;
    var j = p;
    try {
      for (g(O), f = r(l); f !== null && (!(f.expirationTime > O) || R && !ue()); ) {
        var G = f.callback;
        if (typeof G == "function") {
          f.callback = null, p = f.priorityLevel;
          var D = G(f.expirationTime <= O);
          O = e.unstable_now(), typeof D == "function" ? f.callback = D : f === r(l) && n(l), g(O);
        } else n(l);
        f = r(l);
      }
      if (f !== null) var S = !0;
      else {
        var z = r(u);
        z !== null && Te(b, z.startTime - O), S = !1;
      }
      return S;
    } finally {
      f = null, p = j, d = !1;
    }
  }
  var k = !1, C = null, N = -1, W = 5, F = -1;
  function ue() {
    return !(e.unstable_now() - F < W);
  }
  function ce() {
    if (C !== null) {
      var R = e.unstable_now();
      F = R;
      var O = !0;
      try {
        O = C(!0, R);
      } finally {
        O ? me() : (k = !1, C = null);
      }
    } else k = !1;
  }
  var me;
  if (typeof h == "function") me = function() {
    h(ce);
  };
  else if (typeof MessageChannel < "u") {
    var Ge = new MessageChannel(), Ut = Ge.port2;
    Ge.port1.onmessage = ce, me = function() {
      Ut.postMessage(null);
    };
  } else me = function() {
    x(ce, 0);
  };
  function Fe(R) {
    C = R, k || (k = !0, me());
  }
  function Te(R, O) {
    N = x(function() {
      R(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    v || d || (v = !0, Fe(A));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = p;
    }
    var j = p;
    p = O;
    try {
      return R();
    } finally {
      p = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, O) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var j = p;
    p = R;
    try {
      return O();
    } finally {
      p = j;
    }
  }, e.unstable_scheduleCallback = function(R, O, j) {
    var G = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? G + j : G) : j = G, R) {
      case 1:
        var D = -1;
        break;
      case 2:
        D = 250;
        break;
      case 5:
        D = 1073741823;
        break;
      case 4:
        D = 1e4;
        break;
      default:
        D = 5e3;
    }
    return D = j + D, R = { id: c++, callback: O, priorityLevel: R, startTime: j, expirationTime: D, sortIndex: -1 }, j > G ? (R.sortIndex = j, t(u, R), r(l) === null && R === r(u) && (w ? (m(N), N = -1) : w = !0, Te(b, j - G))) : (R.sortIndex = D, t(l, R), v || d || (v = !0, Fe(A))), R;
  }, e.unstable_shouldYield = ue, e.unstable_wrapCallback = function(R) {
    var O = p;
    return function() {
      var j = p;
      p = O;
      try {
        return R.apply(this, arguments);
      } finally {
        p = j;
      }
    };
  };
})(hd);
dd.exports = hd;
var bp = dd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp = L, Ke = bp;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fd = /* @__PURE__ */ new Set(), na = {};
function Ir(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (na[e] = t, e = 0; e < t.length; e++) fd.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = Object.prototype.hasOwnProperty, kp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, hu = {}, fu = {};
function Sp(e) {
  return es.call(fu, e) ? !0 : es.call(hu, e) ? !1 : kp.test(e) ? fu[e] = !0 : (hu[e] = !0, !1);
}
function Ap(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ep(e, t, r, n) {
  if (t === null || typeof t > "u" || Ap(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null) switch (r.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ie(e, t, r, n, a, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Se[e] = new Ie(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Se[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Se[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Se[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Se[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Se[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Se[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Se[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Se[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ll = /[\-:]([a-z])/g;
function ul(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ll,
    ul
  );
  Se[t] = new Ie(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ll, ul);
  Se[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ll, ul);
  Se[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Se[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Se[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cl(e, t, r, n) {
  var a = Se.hasOwnProperty(t) ? Se[t] : null;
  (a !== null ? a.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ep(t, r, a, n) && (r = null), n || a === null ? Sp(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (t = a.attributeName, n = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var jt = xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Da = Symbol.for("react.element"), Gr = Symbol.for("react.portal"), Zr = Symbol.for("react.fragment"), dl = Symbol.for("react.strict_mode"), ts = Symbol.for("react.profiler"), pd = Symbol.for("react.provider"), gd = Symbol.for("react.context"), hl = Symbol.for("react.forward_ref"), rs = Symbol.for("react.suspense"), ns = Symbol.for("react.suspense_list"), fl = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), md = Symbol.for("react.offscreen"), pu = Symbol.iterator;
function Nn(e) {
  return e === null || typeof e != "object" ? null : (e = pu && e[pu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ae = Object.assign, bo;
function Jn(e) {
  if (bo === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    bo = t && t[1] || "";
  }
  return `
` + bo + e;
}
var xo = !1;
function ko(e, t) {
  if (!e || xo) return "";
  xo = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var n = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        n = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var a = u.stack.split(`
`), i = n.stack.split(`
`), o = a.length - 1, s = i.length - 1; 1 <= o && 0 <= s && a[o] !== i[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (a[o] !== i[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || a[o] !== i[s]) {
              var l = `
` + a[o].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    xo = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function Cp(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ko(e.type, !1), e;
    case 11:
      return e = ko(e.type.render, !1), e;
    case 1:
      return e = ko(e.type, !0), e;
    default:
      return "";
  }
}
function as(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zr:
      return "Fragment";
    case Gr:
      return "Portal";
    case ts:
      return "Profiler";
    case dl:
      return "StrictMode";
    case rs:
      return "Suspense";
    case ns:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gd:
      return (e.displayName || "Context") + ".Consumer";
    case pd:
      return (e._context.displayName || "Context") + ".Provider";
    case hl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fl:
      return t = e.displayName || null, t !== null ? t : as(e.type) || "Memo";
    case Jt:
      t = e._payload, e = e._init;
      try {
        return as(e(t));
      } catch {
      }
  }
  return null;
}
function Op(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return as(t);
    case 8:
      return t === dl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tp(e) {
  var t = vd(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var a = r.get, i = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(o) {
      n = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ma(e) {
  e._valueTracker || (e._valueTracker = Tp(e));
}
function wd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = vd(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function wi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function is(e, t) {
  var r = t.checked;
  return ae({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function gu(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = nr(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yd(e, t) {
  t = t.checked, t != null && cl(e, "checked", t, !1);
}
function os(e, t) {
  yd(e, t);
  var r = nr(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ss(e, t.type, r) : t.hasOwnProperty("defaultValue") && ss(e, t.type, nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function ss(e, t, r) {
  (t !== "number" || wi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Wn = Array.isArray;
function un(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
    for (r = 0; r < e.length; r++) a = t.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + nr(r), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === r) {
        e[a].selected = !0, n && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function ls(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ae({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function vu(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(E(92));
      if (Wn(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: nr(r) };
}
function bd(e, t) {
  var r = nr(t.value), n = nr(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function us(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var La, kd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (La = La || document.createElement("div"), La.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = La.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function aa(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Rp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function(e) {
  Rp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Kn[t] = Kn[e];
  });
});
function Sd(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px";
}
function Ad(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, a = Sd(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, a) : e[r] = a;
  }
}
var Np = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cs(e, t) {
  if (t) {
    if (Np[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function ds(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var hs = null;
function pl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fs = null, cn = null, dn = null;
function yu(e) {
  if (e = Pa(e)) {
    if (typeof fs != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Xi(t), fs(e.stateNode, e.type, t));
  }
}
function Ed(e) {
  cn ? dn ? dn.push(e) : dn = [e] : cn = e;
}
function Cd() {
  if (cn) {
    var e = cn, t = dn;
    if (dn = cn = null, yu(e), t) for (e = 0; e < t.length; e++) yu(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function Td() {
}
var So = !1;
function Rd(e, t, r) {
  if (So) return e(t, r);
  So = !0;
  try {
    return Od(e, t, r);
  } finally {
    So = !1, (cn !== null || dn !== null) && (Td(), Cd());
  }
}
function ia(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Xi(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var ps = !1;
if (Rt) try {
  var Pn = {};
  Object.defineProperty(Pn, "passive", { get: function() {
    ps = !0;
  } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
} catch {
  ps = !1;
}
function Pp(e, t, r, n, a, i, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Vn = !1, yi = null, bi = !1, gs = null, Ip = { onError: function(e) {
  Vn = !0, yi = e;
} };
function jp(e, t, r, n, a, i, o, s, l) {
  Vn = !1, yi = null, Pp.apply(Ip, arguments);
}
function zp(e, t, r, n, a, i, o, s, l) {
  if (jp.apply(this, arguments), Vn) {
    if (Vn) {
      var u = yi;
      Vn = !1, yi = null;
    } else throw Error(E(198));
    bi || (bi = !0, gs = u);
  }
}
function jr(e) {
  var t = e, r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Nd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bu(e) {
  if (jr(e) !== e) throw Error(E(188));
}
function Up(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jr(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var a = r.return;
    if (a === null) break;
    var i = a.alternate;
    if (i === null) {
      if (n = a.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (a.child === i.child) {
      for (i = a.child; i; ) {
        if (i === r) return bu(a), e;
        if (i === n) return bu(a), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) r = a, n = i;
    else {
      for (var o = !1, s = a.child; s; ) {
        if (s === r) {
          o = !0, r = a, n = i;
          break;
        }
        if (s === n) {
          o = !0, n = a, r = i;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === r) {
            o = !0, r = i, n = a;
            break;
          }
          if (s === n) {
            o = !0, n = i, r = a;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function Pd(e) {
  return e = Up(e), e !== null ? Id(e) : null;
}
function Id(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Id(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jd = Ke.unstable_scheduleCallback, xu = Ke.unstable_cancelCallback, Dp = Ke.unstable_shouldYield, Mp = Ke.unstable_requestPaint, le = Ke.unstable_now, Lp = Ke.unstable_getCurrentPriorityLevel, gl = Ke.unstable_ImmediatePriority, zd = Ke.unstable_UserBlockingPriority, xi = Ke.unstable_NormalPriority, Bp = Ke.unstable_LowPriority, Ud = Ke.unstable_IdlePriority, Vi = null, xt = null;
function Fp(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function") try {
    xt.onCommitFiberRoot(Vi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : Qp, Jp = Math.log, Wp = Math.LN2;
function Qp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jp(e) / Wp | 0) | 0;
}
var Ba = 64, Fa = 4194304;
function Qn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ki(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, a = e.suspendedLanes, i = e.pingedLanes, o = r & 268435455;
  if (o !== 0) {
    var s = o & ~a;
    s !== 0 ? n = Qn(s) : (i &= o, i !== 0 && (n = Qn(i)));
  } else o = r & ~a, o !== 0 ? n = Qn(o) : i !== 0 && (n = Qn(i));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & a) && (a = n & -n, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - pt(t), a = 1 << r, n |= e[r], t &= ~a;
  return n;
}
function Yp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hp(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - pt(i), s = 1 << o, l = a[o];
    l === -1 ? (!(s & r) || s & n) && (a[o] = Yp(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ms(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dd() {
  var e = Ba;
  return Ba <<= 1, !(Ba & 4194240) && (Ba = 64), e;
}
function Ao(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Ra(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = r;
}
function Kp(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var a = 31 - pt(r), i = 1 << a;
    t[a] = 0, n[a] = -1, e[a] = -1, r &= ~i;
  }
}
function ml(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - pt(r), a = 1 << n;
    a & t | e[n] & t && (e[n] |= t), r &= ~a;
  }
}
var V = 0;
function Md(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ld, vl, Bd, Fd, Jd, vs = !1, Ja = [], Gt = null, Zt = null, Xt = null, oa = /* @__PURE__ */ new Map(), sa = /* @__PURE__ */ new Map(), Yt = [], Vp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      oa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sa.delete(t.pointerId);
  }
}
function In(e, t, r, n, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Pa(t), t !== null && vl(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function qp(e, t, r, n, a) {
  switch (t) {
    case "focusin":
      return Gt = In(Gt, e, t, r, n, a), !0;
    case "dragenter":
      return Zt = In(Zt, e, t, r, n, a), !0;
    case "mouseover":
      return Xt = In(Xt, e, t, r, n, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return oa.set(i, In(oa.get(i) || null, e, t, r, n, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, sa.set(i, In(sa.get(i) || null, e, t, r, n, a)), !0;
  }
  return !1;
}
function Wd(e) {
  var t = br(e.target);
  if (t !== null) {
    var r = jr(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = Nd(r), t !== null) {
          e.blockedOn = t, Jd(e.priority, function() {
            Bd(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      hs = n, r.target.dispatchEvent(n), hs = null;
    } else return t = Pa(r), t !== null && vl(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Su(e, t, r) {
  li(e) && r.delete(t);
}
function Gp() {
  vs = !1, Gt !== null && li(Gt) && (Gt = null), Zt !== null && li(Zt) && (Zt = null), Xt !== null && li(Xt) && (Xt = null), oa.forEach(Su), sa.forEach(Su);
}
function jn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vs || (vs = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Gp)));
}
function la(e) {
  function t(a) {
    return jn(a, e);
  }
  if (0 < Ja.length) {
    jn(Ja[0], e);
    for (var r = 1; r < Ja.length; r++) {
      var n = Ja[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Gt !== null && jn(Gt, e), Zt !== null && jn(Zt, e), Xt !== null && jn(Xt, e), oa.forEach(t), sa.forEach(t), r = 0; r < Yt.length; r++) n = Yt[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Yt.length && (r = Yt[0], r.blockedOn === null); ) Wd(r), r.blockedOn === null && Yt.shift();
}
var hn = jt.ReactCurrentBatchConfig, Si = !0;
function Zp(e, t, r, n) {
  var a = V, i = hn.transition;
  hn.transition = null;
  try {
    V = 1, wl(e, t, r, n);
  } finally {
    V = a, hn.transition = i;
  }
}
function Xp(e, t, r, n) {
  var a = V, i = hn.transition;
  hn.transition = null;
  try {
    V = 4, wl(e, t, r, n);
  } finally {
    V = a, hn.transition = i;
  }
}
function wl(e, t, r, n) {
  if (Si) {
    var a = ws(e, t, r, n);
    if (a === null) zo(e, t, n, Ai, r), ku(e, n);
    else if (qp(a, e, t, r, n)) n.stopPropagation();
    else if (ku(e, n), t & 4 && -1 < Vp.indexOf(e)) {
      for (; a !== null; ) {
        var i = Pa(a);
        if (i !== null && Ld(i), i = ws(e, t, r, n), i === null && zo(e, t, n, Ai, r), i === a) break;
        a = i;
      }
      a !== null && n.stopPropagation();
    } else zo(e, t, n, null, r);
  }
}
var Ai = null;
function ws(e, t, r, n) {
  if (Ai = null, e = pl(n), e = br(e), e !== null) if (t = jr(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = Nd(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ai = e, null;
}
function Qd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Lp()) {
        case gl:
          return 1;
        case zd:
          return 4;
        case xi:
        case Bp:
          return 16;
        case Ud:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null, yl = null, ui = null;
function Yd() {
  if (ui) return ui;
  var e, t = yl, r = t.length, n, a = "value" in Vt ? Vt.value : Vt.textContent, i = a.length;
  for (e = 0; e < r && t[e] === a[e]; e++) ;
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === a[i - n]; n++) ;
  return ui = a.slice(e, 1 < n ? 1 - n : void 0);
}
function ci(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Wa() {
  return !0;
}
function Au() {
  return !1;
}
function qe(e) {
  function t(r, n, a, i, o) {
    this._reactName = r, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wa : Au, this.isPropagationStopped = Au, this;
  }
  return ae(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Wa);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Wa);
  }, persist: function() {
  }, isPersistent: Wa }), t;
}
var An = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bl = qe(An), Na = ae({}, An, { view: 0, detail: 0 }), _p = qe(Na), Eo, Co, zn, qi = ae({}, Na, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (Eo = e.screenX - zn.screenX, Co = e.screenY - zn.screenY) : Co = Eo = 0, zn = e), Eo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Co;
} }), Eu = qe(qi), $p = ae({}, qi, { dataTransfer: 0 }), eg = qe($p), tg = ae({}, Na, { relatedTarget: 0 }), Oo = qe(tg), rg = ae({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ng = qe(rg), ag = ae({}, An, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ig = qe(ag), og = ae({}, An, { data: 0 }), Cu = qe(og), sg = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, lg = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, ug = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function cg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ug[e]) ? !!t[e] : !1;
}
function xl() {
  return cg;
}
var dg = ae({}, Na, { key: function(e) {
  if (e.key) {
    var t = sg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xl, charCode: function(e) {
  return e.type === "keypress" ? ci(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hg = qe(dg), fg = ae({}, qi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ou = qe(fg), pg = ae({}, Na, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xl }), gg = qe(pg), mg = ae({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vg = qe(mg), wg = ae({}, qi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yg = qe(wg), bg = [9, 13, 27, 32], kl = Rt && "CompositionEvent" in window, qn = null;
Rt && "documentMode" in document && (qn = document.documentMode);
var xg = Rt && "TextEvent" in window && !qn, Hd = Rt && (!kl || qn && 8 < qn && 11 >= qn), Tu = " ", Ru = !1;
function Kd(e, t) {
  switch (e) {
    case "keyup":
      return bg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xr = !1;
function kg(e, t) {
  switch (e) {
    case "compositionend":
      return Vd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ru = !0, Tu);
    case "textInput":
      return e = t.data, e === Tu && Ru ? null : e;
    default:
      return null;
  }
}
function Sg(e, t) {
  if (Xr) return e === "compositionend" || !kl && Kd(e, t) ? (e = Yd(), ui = yl = Vt = null, Xr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Hd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ag = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ag[e.type] : t === "textarea";
}
function qd(e, t, r, n) {
  Ed(n), t = Ei(t, "onChange"), 0 < t.length && (r = new bl("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Gn = null, ua = null;
function Eg(e) {
  ih(e, 0);
}
function Gi(e) {
  var t = en(e);
  if (wd(t)) return e;
}
function Cg(e, t) {
  if (e === "change") return t;
}
var Gd = !1;
if (Rt) {
  var To;
  if (Rt) {
    var Ro = "oninput" in document;
    if (!Ro) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"), Ro = typeof Pu.oninput == "function";
    }
    To = Ro;
  } else To = !1;
  Gd = To && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Gn && (Gn.detachEvent("onpropertychange", Zd), ua = Gn = null);
}
function Zd(e) {
  if (e.propertyName === "value" && Gi(ua)) {
    var t = [];
    qd(t, ua, e, pl(e)), Rd(Eg, t);
  }
}
function Og(e, t, r) {
  e === "focusin" ? (Iu(), Gn = t, ua = r, Gn.attachEvent("onpropertychange", Zd)) : e === "focusout" && Iu();
}
function Tg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Gi(ua);
}
function Rg(e, t) {
  if (e === "click") return Gi(t);
}
function Ng(e, t) {
  if (e === "input" || e === "change") return Gi(t);
}
function Pg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mt = typeof Object.is == "function" ? Object.is : Pg;
function ca(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var a = r[n];
    if (!es.call(t, a) || !mt(e[a], t[a])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var r = ju(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = ju(r);
  }
}
function Xd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function _d() {
  for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = wi(e.document);
  }
  return t;
}
function Sl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ig(e) {
  var t = _d(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Xd(r.ownerDocument.documentElement, r)) {
    if (n !== null && Sl(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = r.textContent.length, i = Math.min(n.start, a);
        n = n.end === void 0 ? i : Math.min(n.end, a), !e.extend && i > n && (a = n, n = i, i = a), a = zu(r, i);
        var o = zu(
          r,
          n
        );
        a && o && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var jg = Rt && "documentMode" in document && 11 >= document.documentMode, _r = null, ys = null, Zn = null, bs = !1;
function Uu(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  bs || _r == null || _r !== wi(n) || (n = _r, "selectionStart" in n && Sl(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Zn && ca(Zn, n) || (Zn = n, n = Ei(ys, "onSelect"), 0 < n.length && (t = new bl("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = _r)));
}
function Qa(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var $r = { animationend: Qa("Animation", "AnimationEnd"), animationiteration: Qa("Animation", "AnimationIteration"), animationstart: Qa("Animation", "AnimationStart"), transitionend: Qa("Transition", "TransitionEnd") }, No = {}, $d = {};
Rt && ($d = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
function Zi(e) {
  if (No[e]) return No[e];
  if (!$r[e]) return e;
  var t = $r[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in $d) return No[e] = t[r];
  return e;
}
var eh = Zi("animationend"), th = Zi("animationiteration"), rh = Zi("animationstart"), nh = Zi("transitionend"), ah = /* @__PURE__ */ new Map(), Du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ir(e, t) {
  ah.set(e, t), Ir(t, [e]);
}
for (var Po = 0; Po < Du.length; Po++) {
  var Io = Du[Po], zg = Io.toLowerCase(), Ug = Io[0].toUpperCase() + Io.slice(1);
  ir(zg, "on" + Ug);
}
ir(eh, "onAnimationEnd");
ir(th, "onAnimationIteration");
ir(rh, "onAnimationStart");
ir("dblclick", "onDoubleClick");
ir("focusin", "onFocus");
ir("focusout", "onBlur");
ir(nh, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function Mu(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, zp(n, t, void 0, e), e.currentTarget = null;
}
function ih(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = n.length - 1; 0 <= o; o--) {
        var s = n[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== i && a.isPropagationStopped()) break e;
        Mu(a, s, u), i = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (s = n[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && a.isPropagationStopped()) break e;
        Mu(a, s, u), i = l;
      }
    }
  }
  if (bi) throw e = gs, bi = !1, gs = null, e;
}
function _(e, t) {
  var r = t[Es];
  r === void 0 && (r = t[Es] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (oh(t, e, 2, !1), r.add(n));
}
function jo(e, t, r) {
  var n = 0;
  t && (n |= 4), oh(r, e, n, t);
}
var Ya = "_reactListening" + Math.random().toString(36).slice(2);
function da(e) {
  if (!e[Ya]) {
    e[Ya] = !0, fd.forEach(function(r) {
      r !== "selectionchange" && (Dg.has(r) || jo(r, !1, e), jo(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ya] || (t[Ya] = !0, jo("selectionchange", !1, t));
  }
}
function oh(e, t, r, n) {
  switch (Qd(t)) {
    case 1:
      var a = Zp;
      break;
    case 4:
      a = Xp;
      break;
    default:
      a = wl;
  }
  r = a.bind(null, t, r, e), a = void 0, !ps || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: a }) : e.addEventListener(t, r, !0) : a !== void 0 ? e.addEventListener(t, r, { passive: a }) : e.addEventListener(t, r, !1);
}
function zo(e, t, r, n, a) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var o = n.tag;
    if (o === 3 || o === 4) {
      var s = n.stateNode.containerInfo;
      if (s === a || s.nodeType === 8 && s.parentNode === a) break;
      if (o === 4) for (o = n.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === a || l.nodeType === 8 && l.parentNode === a)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = br(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    n = n.return;
  }
  Rd(function() {
    var u = i, c = pl(r), f = [];
    e: {
      var p = ah.get(e);
      if (p !== void 0) {
        var d = bl, v = e;
        switch (e) {
          case "keypress":
            if (ci(r) === 0) break e;
          case "keydown":
          case "keyup":
            d = hg;
            break;
          case "focusin":
            v = "focus", d = Oo;
            break;
          case "focusout":
            v = "blur", d = Oo;
            break;
          case "beforeblur":
          case "afterblur":
            d = Oo;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = eg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = gg;
            break;
          case eh:
          case th:
          case rh:
            d = ng;
            break;
          case nh:
            d = vg;
            break;
          case "scroll":
            d = _p;
            break;
          case "wheel":
            d = yg;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = ig;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Ou;
        }
        var w = (t & 4) !== 0, x = !w && e === "scroll", m = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var b = g.stateNode;
          if (g.tag === 5 && b !== null && (g = b, m !== null && (b = ia(h, m), b != null && w.push(ha(h, b, g)))), x) break;
          h = h.return;
        }
        0 < w.length && (p = new d(p, v, null, r, c), f.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", p && r !== hs && (v = r.relatedTarget || r.fromElement) && (br(v) || v[Nt])) break e;
        if ((d || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, d ? (v = r.relatedTarget || r.toElement, d = u, v = v ? br(v) : null, v !== null && (x = jr(v), v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (d = null, v = u), d !== v)) {
          if (w = Eu, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (w = Ou, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = d == null ? p : en(d), g = v == null ? p : en(v), p = new w(b, h + "leave", d, r, c), p.target = x, p.relatedTarget = g, b = null, br(c) === u && (w = new w(m, h + "enter", v, r, c), w.target = g, w.relatedTarget = x, b = w), x = b, d && v) t: {
            for (w = d, m = v, h = 0, g = w; g; g = Lr(g)) h++;
            for (g = 0, b = m; b; b = Lr(b)) g++;
            for (; 0 < h - g; ) w = Lr(w), h--;
            for (; 0 < g - h; ) m = Lr(m), g--;
            for (; h--; ) {
              if (w === m || m !== null && w === m.alternate) break t;
              w = Lr(w), m = Lr(m);
            }
            w = null;
          }
          else w = null;
          d !== null && Lu(f, p, d, w, !1), v !== null && x !== null && Lu(f, x, v, w, !0);
        }
      }
      e: {
        if (p = u ? en(u) : window, d = p.nodeName && p.nodeName.toLowerCase(), d === "select" || d === "input" && p.type === "file") var A = Cg;
        else if (Nu(p)) if (Gd) A = Ng;
        else {
          A = Tg;
          var k = Og;
        }
        else (d = p.nodeName) && d.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (A = Rg);
        if (A && (A = A(e, u))) {
          qd(f, A, r, c);
          break e;
        }
        k && k(e, p, u), e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && ss(p, "number", p.value);
      }
      switch (k = u ? en(u) : window, e) {
        case "focusin":
          (Nu(k) || k.contentEditable === "true") && (_r = k, ys = u, Zn = null);
          break;
        case "focusout":
          Zn = ys = _r = null;
          break;
        case "mousedown":
          bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          bs = !1, Uu(f, r, c);
          break;
        case "selectionchange":
          if (jg) break;
        case "keydown":
        case "keyup":
          Uu(f, r, c);
      }
      var C;
      if (kl) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Xr ? Kd(e, r) && (N = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (N = "onCompositionStart");
      N && (Hd && r.locale !== "ko" && (Xr || N !== "onCompositionStart" ? N === "onCompositionEnd" && Xr && (C = Yd()) : (Vt = c, yl = "value" in Vt ? Vt.value : Vt.textContent, Xr = !0)), k = Ei(u, N), 0 < k.length && (N = new Cu(N, e, null, r, c), f.push({ event: N, listeners: k }), C ? N.data = C : (C = Vd(r), C !== null && (N.data = C)))), (C = xg ? kg(e, r) : Sg(e, r)) && (u = Ei(u, "onBeforeInput"), 0 < u.length && (c = new Cu("onBeforeInput", "beforeinput", null, r, c), f.push({ event: c, listeners: u }), c.data = C));
    }
    ih(f, t);
  });
}
function ha(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ei(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = ia(e, r), i != null && n.unshift(ha(e, i, a)), i = ia(e, t), i != null && n.push(ha(e, i, a))), e = e.return;
  }
  return n;
}
function Lr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lu(e, t, r, n, a) {
  for (var i = t._reactName, o = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 && u !== null && (s = u, a ? (l = ia(r, i), l != null && o.unshift(ha(r, l, s))) : a || (l = ia(r, i), l != null && o.push(ha(r, l, s)))), r = r.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Mg = /\r\n?/g, Lg = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Mg, `
`).replace(Lg, "");
}
function Ha(e, t, r) {
  if (t = Bu(t), Bu(e) !== t && r) throw Error(E(425));
}
function Ci() {
}
var xs = null, ks = null;
function Ss(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var As = typeof setTimeout == "function" ? setTimeout : void 0, Bg = typeof clearTimeout == "function" ? clearTimeout : void 0, Fu = typeof Promise == "function" ? Promise : void 0, Fg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fu < "u" ? function(e) {
  return Fu.resolve(null).then(e).catch(Jg);
} : As;
function Jg(e) {
  setTimeout(function() {
    throw e;
  });
}
function Uo(e, t) {
  var r = t, n = 0;
  do {
    var a = r.nextSibling;
    if (e.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
      if (n === 0) {
        e.removeChild(a), la(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = a;
  } while (r);
  la(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ju(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var En = Math.random().toString(36).slice(2), bt = "__reactFiber$" + En, fa = "__reactProps$" + En, Nt = "__reactContainer$" + En, Es = "__reactEvents$" + En, Wg = "__reactListeners$" + En, Qg = "__reactHandles$" + En;
function br(e) {
  var t = e[bt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Nt] || r[bt]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Ju(e); e !== null; ) {
        if (r = e[bt]) return r;
        e = Ju(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Pa(e) {
  return e = e[bt] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function en(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Xi(e) {
  return e[fa] || null;
}
var Cs = [], tn = -1;
function or(e) {
  return { current: e };
}
function $(e) {
  0 > tn || (e.current = Cs[tn], Cs[tn] = null, tn--);
}
function X(e, t) {
  tn++, Cs[tn] = e.current, e.current = t;
}
var ar = {}, Oe = or(ar), Me = or(!1), Cr = ar;
function vn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return ar;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in r) a[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Le(e) {
  return e = e.childContextTypes, e != null;
}
function Oi() {
  $(Me), $(Oe);
}
function Wu(e, t, r) {
  if (Oe.current !== ar) throw Error(E(168));
  X(Oe, t), X(Me, r);
}
function sh(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var a in n) if (!(a in t)) throw Error(E(108, Op(e) || "Unknown", a));
  return ae({}, r, n);
}
function Ti(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ar, Cr = Oe.current, X(Oe, e), X(Me, Me.current), !0;
}
function Qu(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r ? (e = sh(e, t, Cr), n.__reactInternalMemoizedMergedChildContext = e, $(Me), $(Oe), X(Oe, e)) : $(Me), X(Me, r);
}
var Et = null, _i = !1, Do = !1;
function lh(e) {
  Et === null ? Et = [e] : Et.push(e);
}
function Yg(e) {
  _i = !0, lh(e);
}
function sr() {
  if (!Do && Et !== null) {
    Do = !0;
    var e = 0, t = V;
    try {
      var r = Et;
      for (V = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Et = null, _i = !1;
    } catch (a) {
      throw Et !== null && (Et = Et.slice(e + 1)), jd(gl, sr), a;
    } finally {
      V = t, Do = !1;
    }
  }
  return null;
}
var rn = [], nn = 0, Ri = null, Ni = 0, Xe = [], _e = 0, Or = null, Ct = 1, Ot = "";
function pr(e, t) {
  rn[nn++] = Ni, rn[nn++] = Ri, Ri = e, Ni = t;
}
function uh(e, t, r) {
  Xe[_e++] = Ct, Xe[_e++] = Ot, Xe[_e++] = Or, Or = e;
  var n = Ct;
  e = Ot;
  var a = 32 - pt(n) - 1;
  n &= ~(1 << a), r += 1;
  var i = 32 - pt(t) + a;
  if (30 < i) {
    var o = a - a % 5;
    i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, Ct = 1 << 32 - pt(t) + a | r << a | n, Ot = i + e;
  } else Ct = 1 << i | r << a | n, Ot = e;
}
function Al(e) {
  e.return !== null && (pr(e, 1), uh(e, 1, 0));
}
function El(e) {
  for (; e === Ri; ) Ri = rn[--nn], rn[nn] = null, Ni = rn[--nn], rn[nn] = null;
  for (; e === Or; ) Or = Xe[--_e], Xe[_e] = null, Ot = Xe[--_e], Xe[_e] = null, Ct = Xe[--_e], Xe[_e] = null;
}
var He = null, Ye = null, te = !1, ft = null;
function ch(e, t) {
  var r = $e(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, He = e, Ye = _t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, He = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Or !== null ? { id: Ct, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = $e(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, He = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function Os(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ts(e) {
  if (te) {
    var t = Ye;
    if (t) {
      var r = t;
      if (!Yu(e, t)) {
        if (Os(e)) throw Error(E(418));
        t = _t(r.nextSibling);
        var n = He;
        t && Yu(e, t) ? ch(n, r) : (e.flags = e.flags & -4097 | 2, te = !1, He = e);
      }
    } else {
      if (Os(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, te = !1, He = e;
    }
  }
}
function Hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  He = e;
}
function Ka(e) {
  if (e !== He) return !1;
  if (!te) return Hu(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ss(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (Os(e)) throw dh(), Error(E(418));
    for (; t; ) ch(e, t), t = _t(t.nextSibling);
  }
  if (Hu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ye = _t(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = He ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function dh() {
  for (var e = Ye; e; ) e = _t(e.nextSibling);
}
function wn() {
  Ye = He = null, te = !1;
}
function Cl(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var Hg = jt.ReactCurrentBatchConfig;
function Un(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var a = n, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var s = a.refs;
        o === null ? delete s[i] : s[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function Va(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ku(e) {
  var t = e._init;
  return t(e._payload);
}
function hh(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? (m.deletions = [h], m.flags |= 16) : g.push(h);
    }
  }
  function r(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), h = h.sibling;
    return null;
  }
  function n(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function a(m, h) {
    return m = rr(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, g) {
    return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < h ? (m.flags |= 2, h) : g) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, g, b) {
    return h === null || h.tag !== 6 ? (h = Qo(g, m.mode, b), h.return = m, h) : (h = a(h, g), h.return = m, h);
  }
  function l(m, h, g, b) {
    var A = g.type;
    return A === Zr ? c(m, h, g.props.children, b, g.key) : h !== null && (h.elementType === A || typeof A == "object" && A !== null && A.$$typeof === Jt && Ku(A) === h.type) ? (b = a(h, g.props), b.ref = Un(m, h, g), b.return = m, b) : (b = vi(g.type, g.key, g.props, null, m.mode, b), b.ref = Un(m, h, g), b.return = m, b);
  }
  function u(m, h, g, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Yo(g, m.mode, b), h.return = m, h) : (h = a(h, g.children || []), h.return = m, h);
  }
  function c(m, h, g, b, A) {
    return h === null || h.tag !== 7 ? (h = Er(g, m.mode, b, A), h.return = m, h) : (h = a(h, g), h.return = m, h);
  }
  function f(m, h, g) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Qo("" + h, m.mode, g), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Da:
          return g = vi(h.type, h.key, h.props, null, m.mode, g), g.ref = Un(m, null, h), g.return = m, g;
        case Gr:
          return h = Yo(h, m.mode, g), h.return = m, h;
        case Jt:
          var b = h._init;
          return f(m, b(h._payload), g);
      }
      if (Wn(h) || Nn(h)) return h = Er(h, m.mode, g, null), h.return = m, h;
      Va(m, h);
    }
    return null;
  }
  function p(m, h, g, b) {
    var A = h !== null ? h.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return A !== null ? null : s(m, h, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Da:
          return g.key === A ? l(m, h, g, b) : null;
        case Gr:
          return g.key === A ? u(m, h, g, b) : null;
        case Jt:
          return A = g._init, p(
            m,
            h,
            A(g._payload),
            b
          );
      }
      if (Wn(g) || Nn(g)) return A !== null ? null : c(m, h, g, b, null);
      Va(m, g);
    }
    return null;
  }
  function d(m, h, g, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(g) || null, s(h, m, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Da:
          return m = m.get(b.key === null ? g : b.key) || null, l(h, m, b, A);
        case Gr:
          return m = m.get(b.key === null ? g : b.key) || null, u(h, m, b, A);
        case Jt:
          var k = b._init;
          return d(m, h, g, k(b._payload), A);
      }
      if (Wn(b) || Nn(b)) return m = m.get(g) || null, c(h, m, b, A, null);
      Va(h, b);
    }
    return null;
  }
  function v(m, h, g, b) {
    for (var A = null, k = null, C = h, N = h = 0, W = null; C !== null && N < g.length; N++) {
      C.index > N ? (W = C, C = null) : W = C.sibling;
      var F = p(m, C, g[N], b);
      if (F === null) {
        C === null && (C = W);
        break;
      }
      e && C && F.alternate === null && t(m, C), h = i(F, h, N), k === null ? A = F : k.sibling = F, k = F, C = W;
    }
    if (N === g.length) return r(m, C), te && pr(m, N), A;
    if (C === null) {
      for (; N < g.length; N++) C = f(m, g[N], b), C !== null && (h = i(C, h, N), k === null ? A = C : k.sibling = C, k = C);
      return te && pr(m, N), A;
    }
    for (C = n(m, C); N < g.length; N++) W = d(C, m, N, g[N], b), W !== null && (e && W.alternate !== null && C.delete(W.key === null ? N : W.key), h = i(W, h, N), k === null ? A = W : k.sibling = W, k = W);
    return e && C.forEach(function(ue) {
      return t(m, ue);
    }), te && pr(m, N), A;
  }
  function w(m, h, g, b) {
    var A = Nn(g);
    if (typeof A != "function") throw Error(E(150));
    if (g = A.call(g), g == null) throw Error(E(151));
    for (var k = A = null, C = h, N = h = 0, W = null, F = g.next(); C !== null && !F.done; N++, F = g.next()) {
      C.index > N ? (W = C, C = null) : W = C.sibling;
      var ue = p(m, C, F.value, b);
      if (ue === null) {
        C === null && (C = W);
        break;
      }
      e && C && ue.alternate === null && t(m, C), h = i(ue, h, N), k === null ? A = ue : k.sibling = ue, k = ue, C = W;
    }
    if (F.done) return r(
      m,
      C
    ), te && pr(m, N), A;
    if (C === null) {
      for (; !F.done; N++, F = g.next()) F = f(m, F.value, b), F !== null && (h = i(F, h, N), k === null ? A = F : k.sibling = F, k = F);
      return te && pr(m, N), A;
    }
    for (C = n(m, C); !F.done; N++, F = g.next()) F = d(C, m, N, F.value, b), F !== null && (e && F.alternate !== null && C.delete(F.key === null ? N : F.key), h = i(F, h, N), k === null ? A = F : k.sibling = F, k = F);
    return e && C.forEach(function(ce) {
      return t(m, ce);
    }), te && pr(m, N), A;
  }
  function x(m, h, g, b) {
    if (typeof g == "object" && g !== null && g.type === Zr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Da:
          e: {
            for (var A = g.key, k = h; k !== null; ) {
              if (k.key === A) {
                if (A = g.type, A === Zr) {
                  if (k.tag === 7) {
                    r(m, k.sibling), h = a(k, g.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (k.elementType === A || typeof A == "object" && A !== null && A.$$typeof === Jt && Ku(A) === k.type) {
                  r(m, k.sibling), h = a(k, g.props), h.ref = Un(m, k, g), h.return = m, m = h;
                  break e;
                }
                r(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            g.type === Zr ? (h = Er(g.props.children, m.mode, b, g.key), h.return = m, m = h) : (b = vi(g.type, g.key, g.props, null, m.mode, b), b.ref = Un(m, h, g), b.return = m, m = b);
          }
          return o(m);
        case Gr:
          e: {
            for (k = g.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                r(m, h.sibling), h = a(h, g.children || []), h.return = m, m = h;
                break e;
              } else {
                r(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Yo(g, m.mode, b), h.return = m, m = h;
          }
          return o(m);
        case Jt:
          return k = g._init, x(m, h, k(g._payload), b);
      }
      if (Wn(g)) return v(m, h, g, b);
      if (Nn(g)) return w(m, h, g, b);
      Va(m, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (r(m, h.sibling), h = a(h, g), h.return = m, m = h) : (r(m, h), h = Qo(g, m.mode, b), h.return = m, m = h), o(m)) : r(m, h);
  }
  return x;
}
var yn = hh(!0), fh = hh(!1), Pi = or(null), Ii = null, an = null, Ol = null;
function Tl() {
  Ol = an = Ii = null;
}
function Rl(e) {
  var t = Pi.current;
  $(Pi), e._currentValue = t;
}
function Rs(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function fn(e, t) {
  Ii = e, Ol = an = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (De = !0), e.firstContext = null);
}
function tt(e) {
  var t = e._currentValue;
  if (Ol !== e) if (e = { context: e, memoizedValue: t, next: null }, an === null) {
    if (Ii === null) throw Error(E(308));
    an = e, Ii.dependencies = { lanes: 0, firstContext: e };
  } else an = an.next = e;
  return t;
}
var xr = null;
function Nl(e) {
  xr === null ? xr = [e] : xr.push(e);
}
function ph(e, t, r, n) {
  var a = t.interleaved;
  return a === null ? (r.next = r, Nl(t)) : (r.next = a.next, a.next = r), t.interleaved = r, Pt(e, n);
}
function Pt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Wt = !1;
function Pl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $t(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, Y & 2) {
    var a = n.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, Pt(e, r);
  }
  return a = n.interleaved, a === null ? (t.next = t, Nl(n)) : (t.next = a.next, a.next = t), n.interleaved = t, Pt(e, r);
}
function di(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, ml(e, r);
  }
}
function Vu(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var a = null, i = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        i === null ? a = i = o : i = i.next = o, r = r.next;
      } while (r !== null);
      i === null ? a = i = t : i = i.next = t;
    } else a = i = t;
    r = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function ji(e, t, r, n) {
  var a = e.updateQueue;
  Wt = !1;
  var i = a.firstBaseUpdate, o = a.lastBaseUpdate, s = a.shared.pending;
  if (s !== null) {
    a.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? i = u : o.next = u, o = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== o && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var f = a.baseState;
    o = 0, c = u = l = null, s = i;
    do {
      var p = s.lane, d = s.eventTime;
      if ((n & p) === p) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var v = e, w = s;
          switch (p = t, d = r, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                f = v.call(d, f, p);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, p = typeof v == "function" ? v.call(d, f, p) : v, p == null) break e;
              f = ae({}, f, p);
              break e;
            case 2:
              Wt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [s] : p.push(s));
      } else d = { eventTime: d, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = d, l = f) : c = c.next = d, o |= p;
      if (s = s.next, s === null) {
        if (s = a.shared.pending, s === null) break;
        p = s, s = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        o |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    Rr |= o, e.lanes = o, e.memoizedState = f;
  }
}
function qu(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], a = n.callback;
    if (a !== null) {
      if (n.callback = null, n = r, typeof a != "function") throw Error(E(191, a));
      a.call(n);
    }
  }
}
var Ia = {}, kt = or(Ia), pa = or(Ia), ga = or(Ia);
function kr(e) {
  if (e === Ia) throw Error(E(174));
  return e;
}
function Il(e, t) {
  switch (X(ga, t), X(pa, e), X(kt, Ia), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : us(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = us(t, e);
  }
  $(kt), X(kt, t);
}
function bn() {
  $(kt), $(pa), $(ga);
}
function mh(e) {
  kr(ga.current);
  var t = kr(kt.current), r = us(t, e.type);
  t !== r && (X(pa, e), X(kt, r));
}
function jl(e) {
  pa.current === e && ($(kt), $(pa));
}
var re = or(0);
function zi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Mo = [];
function zl() {
  for (var e = 0; e < Mo.length; e++) Mo[e]._workInProgressVersionPrimary = null;
  Mo.length = 0;
}
var hi = jt.ReactCurrentDispatcher, Lo = jt.ReactCurrentBatchConfig, Tr = 0, ne = null, pe = null, ve = null, Ui = !1, Xn = !1, ma = 0, Kg = 0;
function Ae() {
  throw Error(E(321));
}
function Ul(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!mt(e[r], t[r])) return !1;
  return !0;
}
function Dl(e, t, r, n, a, i) {
  if (Tr = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hi.current = e === null || e.memoizedState === null ? Zg : Xg, e = r(n, a), Xn) {
    i = 0;
    do {
      if (Xn = !1, ma = 0, 25 <= i) throw Error(E(301));
      i += 1, ve = pe = null, t.updateQueue = null, hi.current = _g, e = r(n, a);
    } while (Xn);
  }
  if (hi.current = Di, t = pe !== null && pe.next !== null, Tr = 0, ve = pe = ne = null, Ui = !1, t) throw Error(E(300));
  return e;
}
function Ml() {
  var e = ma !== 0;
  return ma = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? ne.memoizedState = ve = e : ve = ve.next = e, ve;
}
function rt() {
  if (pe === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ve === null ? ne.memoizedState : ve.next;
  if (t !== null) ve = t, pe = e;
  else {
    if (e === null) throw Error(E(310));
    pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, ve === null ? ne.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function va(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bo(e) {
  var t = rt(), r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = pe, a = n.baseQueue, i = r.pending;
  if (i !== null) {
    if (a !== null) {
      var o = a.next;
      a.next = i.next, i.next = o;
    }
    n.baseQueue = a = i, r.pending = null;
  }
  if (a !== null) {
    i = a.next, n = n.baseState;
    var s = o = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Tr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = f, o = n) : l = l.next = f, ne.lanes |= c, Rr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? o = n : l.next = s, mt(n, t.memoizedState) || (De = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, ne.lanes |= i, Rr |= i, a = a.next;
    while (a !== e);
  } else a === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Fo(e) {
  var t = rt(), r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, a = r.pending, i = t.memoizedState;
  if (a !== null) {
    r.pending = null;
    var o = a = a.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== a);
    mt(i, t.memoizedState) || (De = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function vh() {
}
function wh(e, t) {
  var r = ne, n = rt(), a = t(), i = !mt(n.memoizedState, a);
  if (i && (n.memoizedState = a, De = !0), n = n.queue, Ll(xh.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || ve !== null && ve.memoizedState.tag & 1) {
    if (r.flags |= 2048, wa(9, bh.bind(null, r, n, a, t), void 0, null), we === null) throw Error(E(349));
    Tr & 30 || yh(r, t, a);
  }
  return a;
}
function yh(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function bh(e, t, r, n) {
  t.value = r, t.getSnapshot = n, kh(t) && Sh(e);
}
function xh(e, t, r) {
  return r(function() {
    kh(t) && Sh(e);
  });
}
function kh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !mt(e, r);
  } catch {
    return !0;
  }
}
function Sh(e) {
  var t = Pt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Gu(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: va, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gg.bind(null, ne, e), [t.memoizedState, e];
}
function wa(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function Ah() {
  return rt().memoizedState;
}
function fi(e, t, r, n) {
  var a = yt();
  ne.flags |= e, a.memoizedState = wa(1 | t, r, void 0, n === void 0 ? null : n);
}
function $i(e, t, r, n) {
  var a = rt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (pe !== null) {
    var o = pe.memoizedState;
    if (i = o.destroy, n !== null && Ul(n, o.deps)) {
      a.memoizedState = wa(t, r, i, n);
      return;
    }
  }
  ne.flags |= e, a.memoizedState = wa(1 | t, r, i, n);
}
function Zu(e, t) {
  return fi(8390656, 8, e, t);
}
function Ll(e, t) {
  return $i(2048, 8, e, t);
}
function Eh(e, t) {
  return $i(4, 2, e, t);
}
function Ch(e, t) {
  return $i(4, 4, e, t);
}
function Oh(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Th(e, t, r) {
  return r = r != null ? r.concat([e]) : null, $i(4, 4, Oh.bind(null, t, e), r);
}
function Bl() {
}
function Rh(e, t) {
  var r = rt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ul(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function Nh(e, t) {
  var r = rt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ul(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function Ph(e, t, r) {
  return Tr & 21 ? (mt(r, t) || (r = Dd(), ne.lanes |= r, Rr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = r);
}
function Vg(e, t) {
  var r = V;
  V = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Lo.transition;
  Lo.transition = {};
  try {
    e(!1), t();
  } finally {
    V = r, Lo.transition = n;
  }
}
function Ih() {
  return rt().memoizedState;
}
function qg(e, t, r) {
  var n = tr(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, jh(e)) zh(t, r);
  else if (r = ph(e, t, r, n), r !== null) {
    var a = Ne();
    gt(r, e, n, a), Uh(r, t, n);
  }
}
function Gg(e, t, r) {
  var n = tr(e), a = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (jh(e)) zh(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, r);
      if (a.hasEagerState = !0, a.eagerState = s, mt(s, o)) {
        var l = t.interleaved;
        l === null ? (a.next = a, Nl(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    r = ph(e, t, a, n), r !== null && (a = Ne(), gt(r, e, n, a), Uh(r, t, n));
  }
}
function jh(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function zh(e, t) {
  Xn = Ui = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Uh(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, ml(e, r);
  }
}
var Di = { readContext: tt, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, Zg = { readContext: tt, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: tt, useEffect: Zu, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, fi(
    4194308,
    4,
    Oh.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return fi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return fi(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = yt();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = yt();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = qg.bind(null, ne, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gu, useDebugValue: Bl, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = Gu(!1), t = e[0];
  return e = Vg.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = ne, a = yt();
  if (te) {
    if (r === void 0) throw Error(E(407));
    r = r();
  } else {
    if (r = t(), we === null) throw Error(E(349));
    Tr & 30 || yh(n, t, r);
  }
  a.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return a.queue = i, Zu(xh.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, wa(9, bh.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = yt(), t = we.identifierPrefix;
  if (te) {
    var r = Ot, n = Ct;
    r = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = ma++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = Kg++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Xg = {
  readContext: tt,
  useCallback: Rh,
  useContext: tt,
  useEffect: Ll,
  useImperativeHandle: Th,
  useInsertionEffect: Eh,
  useLayoutEffect: Ch,
  useMemo: Nh,
  useReducer: Bo,
  useRef: Ah,
  useState: function() {
    return Bo(va);
  },
  useDebugValue: Bl,
  useDeferredValue: function(e) {
    var t = rt();
    return Ph(t, pe.memoizedState, e);
  },
  useTransition: function() {
    var e = Bo(va)[0], t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: vh,
  useSyncExternalStore: wh,
  useId: Ih,
  unstable_isNewReconciler: !1
}, _g = { readContext: tt, useCallback: Rh, useContext: tt, useEffect: Ll, useImperativeHandle: Th, useInsertionEffect: Eh, useLayoutEffect: Ch, useMemo: Nh, useReducer: Fo, useRef: Ah, useState: function() {
  return Fo(va);
}, useDebugValue: Bl, useDeferredValue: function(e) {
  var t = rt();
  return pe === null ? t.memoizedState = e : Ph(t, pe.memoizedState, e);
}, useTransition: function() {
  var e = Fo(va)[0], t = rt().memoizedState;
  return [e, t];
}, useMutableSource: vh, useSyncExternalStore: wh, useId: Ih, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ae({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Ns(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : ae({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var eo = { isMounted: function(e) {
  return (e = e._reactInternals) ? jr(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = Ne(), a = tr(e), i = Tt(n, a);
  i.payload = t, r != null && (i.callback = r), t = $t(e, i, a), t !== null && (gt(t, e, a, n), di(t, e, a));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = Ne(), a = tr(e), i = Tt(n, a);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = $t(e, i, a), t !== null && (gt(t, e, a, n), di(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = Ne(), n = tr(e), a = Tt(r, n);
  a.tag = 2, t != null && (a.callback = t), t = $t(e, a, n), t !== null && (gt(t, e, n, r), di(t, e, n));
} };
function Xu(e, t, r, n, a, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ca(r, n) || !ca(a, i) : !0;
}
function Dh(e, t, r) {
  var n = !1, a = ar, i = t.contextType;
  return typeof i == "object" && i !== null ? i = tt(i) : (a = Le(t) ? Cr : Oe.current, n = t.contextTypes, i = (n = n != null) ? vn(e, a) : ar), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = eo, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function _u(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && eo.enqueueReplaceState(t, t.state, null);
}
function Ps(e, t, r, n) {
  var a = e.stateNode;
  a.props = r, a.state = e.memoizedState, a.refs = {}, Pl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = tt(i) : (i = Le(t) ? Cr : Oe.current, a.context = vn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ns(e, t, i, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && eo.enqueueReplaceState(a, a.state, null), ji(e, r, a, n), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t) {
  try {
    var r = "", n = t;
    do
      r += Cp(n), n = n.return;
    while (n);
    var a = r;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Jo(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Is(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var $g = typeof WeakMap == "function" ? WeakMap : Map;
function Mh(e, t, r) {
  r = Tt(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Li || (Li = !0, Ws = n), Is(e, t);
  }, r;
}
function Lh(e, t, r) {
  r = Tt(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var a = t.value;
    r.payload = function() {
      return n(a);
    }, r.callback = function() {
      Is(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    Is(e, t), typeof n != "function" && (er === null ? er = /* @__PURE__ */ new Set([this]) : er.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), r;
}
function $u(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new $g();
    var a = /* @__PURE__ */ new Set();
    n.set(t, a);
  } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
  a.has(r) || (a.add(r), e = fm.bind(null, e, t, r), t.then(e, e));
}
function ec(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tc(e, t, r, n, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Tt(-1, 1), t.tag = 2, $t(r, t, 1))), r.lanes |= 1), e);
}
var em = jt.ReactCurrentOwner, De = !1;
function Re(e, t, r, n) {
  t.child = e === null ? fh(t, null, r, n) : yn(t, e.child, r, n);
}
function rc(e, t, r, n, a) {
  r = r.render;
  var i = t.ref;
  return fn(t, a), n = Dl(e, t, r, n, i, a), r = Ml(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, It(e, t, a)) : (te && r && Al(t), t.flags |= 1, Re(e, t, n, a), t.child);
}
function nc(e, t, r, n, a) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Vl(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, Bh(e, t, i, n, a)) : (e = vi(r.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var o = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : ca, r(o, n) && e.ref === t.ref) return It(e, t, a);
  }
  return t.flags |= 1, e = rr(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Bh(e, t, r, n, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ca(i, n) && e.ref === t.ref) if (De = !1, t.pendingProps = n = i, (e.lanes & a) !== 0) e.flags & 131072 && (De = !0);
    else return t.lanes = e.lanes, It(e, t, a);
  }
  return js(e, t, r, n, a);
}
function Fh(e, t, r) {
  var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(sn, We), We |= r;
  else {
    if (!(r & 1073741824)) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(sn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, X(sn, We), We |= n;
  }
  else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, X(sn, We), We |= n;
  return Re(e, t, a, r), t.child;
}
function Jh(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function js(e, t, r, n, a) {
  var i = Le(r) ? Cr : Oe.current;
  return i = vn(t, i), fn(t, a), r = Dl(e, t, r, n, i, a), n = Ml(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, It(e, t, a)) : (te && n && Al(t), t.flags |= 1, Re(e, t, r, a), t.child);
}
function ac(e, t, r, n, a) {
  if (Le(r)) {
    var i = !0;
    Ti(t);
  } else i = !1;
  if (fn(t, a), t.stateNode === null) pi(e, t), Dh(t, r, n), Ps(t, r, n, a), n = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = tt(u) : (u = Le(r) ? Cr : Oe.current, u = vn(t, u));
    var c = r.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== n || l !== u) && _u(t, o, n, u), Wt = !1;
    var p = t.memoizedState;
    o.state = p, ji(t, n, o, a), l = t.memoizedState, s !== n || p !== l || Me.current || Wt ? (typeof c == "function" && (Ns(t, r, c, n), l = t.memoizedState), (s = Wt || Xu(t, r, s, n, p, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = u, n = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    o = t.stateNode, gh(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ut(t.type, s), o.props = u, f = t.pendingProps, p = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = tt(l) : (l = Le(r) ? Cr : Oe.current, l = vn(t, l));
    var d = r.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || p !== l) && _u(t, o, n, l), Wt = !1, p = t.memoizedState, o.state = p, ji(t, n, o, a);
    var v = t.memoizedState;
    s !== f || p !== v || Me.current || Wt ? (typeof d == "function" && (Ns(t, r, d, n), v = t.memoizedState), (u = Wt || Xu(t, r, u, n, p, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, v, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, v, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), o.props = n, o.state = v, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return zs(e, t, r, n, i, a);
}
function zs(e, t, r, n, a, i) {
  Jh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return a && Qu(t, r, !1), It(e, t, i);
  n = t.stateNode, em.current = t;
  var s = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && o ? (t.child = yn(t, e.child, null, i), t.child = yn(t, null, s, i)) : Re(e, t, s, i), t.memoizedState = n.state, a && Qu(t, r, !0), t.child;
}
function Wh(e) {
  var t = e.stateNode;
  t.pendingContext ? Wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wu(e, t.context, !1), Il(e, t.containerInfo);
}
function ic(e, t, r, n, a) {
  return wn(), Cl(a), t.flags |= 256, Re(e, t, r, n), t.child;
}
var Us = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qh(e, t, r) {
  var n = t.pendingProps, a = re.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), X(re, a & 1), e === null)
    return Ts(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = no(o, n, 0, null), e = Er(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ds(r), t.memoizedState = Us, e) : Fl(t, o));
  if (a = e.memoizedState, a !== null && (s = a.dehydrated, s !== null)) return tm(e, t, o, n, s, a, r);
  if (i) {
    i = n.fallback, o = t.mode, a = e.child, s = a.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = rr(a, l), n.subtreeFlags = a.subtreeFlags & 14680064), s !== null ? i = rr(s, i) : (i = Er(i, o, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ds(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~r, t.memoizedState = Us, n;
  }
  return i = e.child, e = i.sibling, n = rr(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Fl(e, t) {
  return t = no({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qa(e, t, r, n) {
  return n !== null && Cl(n), yn(t, e.child, null, r), e = Fl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function tm(e, t, r, n, a, i, o) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Jo(Error(E(422))), qa(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, a = t.mode, n = no({ mode: "visible", children: n.children }, a, 0, null), i = Er(i, a, o, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && yn(t, e.child, null, o), t.child.memoizedState = Ds(o), t.memoizedState = Us, i);
  if (!(t.mode & 1)) return qa(e, t, o, null);
  if (a.data === "$!") {
    if (n = a.nextSibling && a.nextSibling.dataset, n) var s = n.dgst;
    return n = s, i = Error(E(419)), n = Jo(i, n, void 0), qa(e, t, o, n);
  }
  if (s = (o & e.childLanes) !== 0, De || s) {
    if (n = we, n !== null) {
      switch (o & -o) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      a = a & (n.suspendedLanes | o) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Pt(e, a), gt(n, e, a, -1));
    }
    return Kl(), n = Jo(Error(E(421))), qa(e, t, o, n);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Ye = _t(a.nextSibling), He = t, te = !0, ft = null, e !== null && (Xe[_e++] = Ct, Xe[_e++] = Ot, Xe[_e++] = Or, Ct = e.id, Ot = e.overflow, Or = t), t = Fl(t, n.children), t.flags |= 4096, t);
}
function oc(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Rs(e.return, t, r);
}
function Wo(e, t, r, n, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = a);
}
function Yh(e, t, r) {
  var n = t.pendingProps, a = n.revealOrder, i = n.tail;
  if (Re(e, t, n.children, r), n = re.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && oc(e, r, t);
      else if (e.tag === 19) oc(e, r, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    n &= 1;
  }
  if (X(re, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && zi(e) === null && (a = r), r = r.sibling;
      r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Wo(t, !1, a, r, i);
      break;
    case "backwards":
      for (r = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && zi(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = r, r = a, a = e;
      }
      Wo(t, !0, r, null, i);
      break;
    case "together":
      Wo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function pi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function It(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Rr |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, r = rr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = rr(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function rm(e, t, r) {
  switch (t.tag) {
    case 3:
      Wh(t), wn();
      break;
    case 5:
      mh(t);
      break;
    case 1:
      Le(t.type) && Ti(t);
      break;
    case 4:
      Il(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, a = t.memoizedProps.value;
      X(Pi, n._currentValue), n._currentValue = a;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (X(re, re.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Qh(e, t, r) : (X(re, re.current & 1), e = It(e, t, r), e !== null ? e.sibling : null);
      X(re, re.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return Yh(e, t, r);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), X(re, re.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fh(e, t, r);
  }
  return It(e, t, r);
}
var Hh, Ms, Kh, Vh;
Hh = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Ms = function() {
};
Kh = function(e, t, r, n) {
  var a = e.memoizedProps;
  if (a !== n) {
    e = t.stateNode, kr(kt.current);
    var i = null;
    switch (r) {
      case "input":
        a = is(e, a), n = is(e, n), i = [];
        break;
      case "select":
        a = ae({}, a, { value: void 0 }), n = ae({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = ls(e, a), n = ls(e, n), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Ci);
    }
    cs(r, n);
    var o;
    r = null;
    for (u in a) if (!n.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null) if (u === "style") {
      var s = a[u];
      for (o in s) s.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (na.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = a?.[u], n.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (r || (r = {}), r[o] = l[o]);
      } else r || (i || (i = []), i.push(
        u,
        r
      )), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (na.hasOwnProperty(u) ? (l != null && u === "onScroll" && _("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vh = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Dn(e, t) {
  if (!te) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
  }
}
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var a = e.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags & 14680064, n |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function nm(e, t, r) {
  var n = t.pendingProps;
  switch (El(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ee(t), null;
    case 1:
      return Le(t.type) && Oi(), Ee(t), null;
    case 3:
      return n = t.stateNode, bn(), $(Me), $(Oe), zl(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ka(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Hs(ft), ft = null))), Ms(e, t), Ee(t), null;
    case 5:
      jl(t);
      var a = kr(ga.current);
      if (r = t.type, e !== null && t.stateNode != null) Kh(e, t, r, n, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return Ee(t), null;
        }
        if (e = kr(kt.current), Ka(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[bt] = t, n[fa] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              _("cancel", n), _("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              _("load", n);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Yn.length; a++) _(Yn[a], n);
              break;
            case "source":
              _("error", n);
              break;
            case "img":
            case "image":
            case "link":
              _(
                "error",
                n
              ), _("load", n);
              break;
            case "details":
              _("toggle", n);
              break;
            case "input":
              gu(n, i), _("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, _("invalid", n);
              break;
            case "textarea":
              vu(n, i), _("invalid", n);
          }
          cs(r, i), a = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && Ha(n.textContent, s, e), a = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ha(
              n.textContent,
              s,
              e
            ), a = ["children", "" + s]) : na.hasOwnProperty(o) && s != null && o === "onScroll" && _("scroll", n);
          }
          switch (r) {
            case "input":
              Ma(n), mu(n, i, !0);
              break;
            case "textarea":
              Ma(n), wu(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Ci);
          }
          n = a, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          o = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xd(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, { is: n.is }) : (e = o.createElement(r), r === "select" && (o = e, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r), e[bt] = t, e[fa] = n, Hh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ds(r, n), r) {
              case "dialog":
                _("cancel", e), _("close", e), a = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                _("load", e), a = n;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Yn.length; a++) _(Yn[a], e);
                a = n;
                break;
              case "source":
                _("error", e), a = n;
                break;
              case "img":
              case "image":
              case "link":
                _(
                  "error",
                  e
                ), _("load", e), a = n;
                break;
              case "details":
                _("toggle", e), a = n;
                break;
              case "input":
                gu(e, n), a = is(e, n), _("invalid", e);
                break;
              case "option":
                a = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, a = ae({}, n, { value: void 0 }), _("invalid", e);
                break;
              case "textarea":
                vu(e, n), a = ls(e, n), _("invalid", e);
                break;
              default:
                a = n;
            }
            cs(r, a), s = a;
            for (i in s) if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "style" ? Ad(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && kd(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && aa(e, l) : typeof l == "number" && aa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (na.hasOwnProperty(i) ? l != null && i === "onScroll" && _("scroll", e) : l != null && cl(e, i, l, o));
            }
            switch (r) {
              case "input":
                Ma(e), mu(e, n, !1);
                break;
              case "textarea":
                Ma(e), wu(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + nr(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? un(e, !!n.multiple, i, !1) : n.defaultValue != null && un(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ci);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) Vh(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(E(166));
        if (r = kr(ga.current), kr(kt.current), Ka(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[bt] = t, (i = n.nodeValue !== r) && (e = He, e !== null)) switch (e.tag) {
            case 3:
              Ha(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ha(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[bt] = t, t.stateNode = n;
      }
      return Ee(t), null;
    case 13:
      if ($(re), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Ye !== null && t.mode & 1 && !(t.flags & 128)) dh(), wn(), t.flags |= 98560, i = !1;
        else if (i = Ka(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[bt] = t;
          } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ee(t), i = !1;
        } else ft !== null && (Hs(ft), ft = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? ge === 0 && (ge = 3) : Kl())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
    case 4:
      return bn(), Ms(e, t), e === null && da(t.stateNode.containerInfo), Ee(t), null;
    case 10:
      return Rl(t.type._context), Ee(t), null;
    case 17:
      return Le(t.type) && Oi(), Ee(t), null;
    case 19:
      if ($(re), i = t.memoizedState, i === null) return Ee(t), null;
      if (n = (t.flags & 128) !== 0, o = i.rendering, o === null) if (n) Dn(i, !1);
      else {
        if (ge !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = zi(e), o !== null) {
            for (t.flags |= 128, Dn(i, !1), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) i = r, e = n, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return X(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && le() > kn && (t.flags |= 128, n = !0, Dn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = zi(o), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Dn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !te) return Ee(t), null;
        } else 2 * le() - i.renderingStartTime > kn && r !== 1073741824 && (t.flags |= 128, n = !0, Dn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (r = i.last, r !== null ? r.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = le(), t.sibling = null, r = re.current, X(re, n ? r & 1 | 2 : r & 1), t) : (Ee(t), null);
    case 22:
    case 23:
      return Hl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? We & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function am(e, t) {
  switch (El(t), t.tag) {
    case 1:
      return Le(t.type) && Oi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bn(), $(Me), $(Oe), zl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return jl(t), null;
    case 13:
      if ($(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        wn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return $(re), null;
    case 4:
      return bn(), null;
    case 10:
      return Rl(t.type._context), null;
    case 22:
    case 23:
      return Hl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ga = !1, Ce = !1, im = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function on(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    se(e, t, n);
  }
  else r.current = null;
}
function Ls(e, t, r) {
  try {
    r();
  } catch (n) {
    se(e, t, n);
  }
}
var sc = !1;
function om(e, t) {
  if (xs = Si, e = _d(), Sl(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var a = n.anchorOffset, i = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, i.nodeType;
        } catch {
          r = null;
          break e;
        }
        var o = 0, s = -1, l = -1, u = 0, c = 0, f = e, p = null;
        t: for (; ; ) {
          for (var d; f !== r || a !== 0 && f.nodeType !== 3 || (s = o + a), f !== i || n !== 0 && f.nodeType !== 3 || (l = o + n), f.nodeType === 3 && (o += f.nodeValue.length), (d = f.firstChild) !== null; )
            p = f, f = d;
          for (; ; ) {
            if (f === e) break t;
            if (p === r && ++u === a && (s = o), p === i && ++c === n && (l = o), (d = f.nextSibling) !== null) break;
            f = p, p = f.parentNode;
          }
          f = d;
        }
        r = s === -1 || l === -1 ? null : { start: s, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (ks = { focusedElem: e, selectionRange: r }, Si = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, x = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ut(t.type, w), x);
            m.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (b) {
      se(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return v = sc, sc = !1, v;
}
function _n(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var a = n = n.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && Ls(t, r, i);
      }
      a = a.next;
    } while (a !== n);
  }
}
function to(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Bs(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function qh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bt], delete t[fa], delete t[Es], delete t[Wg], delete t[Qg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fs(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ci));
  else if (n !== 4 && (e = e.child, e !== null)) for (Fs(e, t, r), e = e.sibling; e !== null; ) Fs(e, t, r), e = e.sibling;
}
function Js(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (Js(e, t, r), e = e.sibling; e !== null; ) Js(e, t, r), e = e.sibling;
}
var xe = null, dt = !1;
function Bt(e, t, r) {
  for (r = r.child; r !== null; ) Zh(e, t, r), r = r.sibling;
}
function Zh(e, t, r) {
  if (xt && typeof xt.onCommitFiberUnmount == "function") try {
    xt.onCommitFiberUnmount(Vi, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      Ce || on(r, t);
    case 6:
      var n = xe, a = dt;
      xe = null, Bt(e, t, r), xe = n, dt = a, xe !== null && (dt ? (e = xe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : xe.removeChild(r.stateNode));
      break;
    case 18:
      xe !== null && (dt ? (e = xe, r = r.stateNode, e.nodeType === 8 ? Uo(e.parentNode, r) : e.nodeType === 1 && Uo(e, r), la(e)) : Uo(xe, r.stateNode));
      break;
    case 4:
      n = xe, a = dt, xe = r.stateNode.containerInfo, dt = !0, Bt(e, t, r), xe = n, dt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        a = n = n.next;
        do {
          var i = a, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ls(r, t, o), a = a.next;
        } while (a !== n);
      }
      Bt(e, t, r);
      break;
    case 1:
      if (!Ce && (on(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (s) {
        se(r, t, s);
      }
      Bt(e, t, r);
      break;
    case 21:
      Bt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (Ce = (n = Ce) || r.memoizedState !== null, Bt(e, t, r), Ce = n) : Bt(e, t, r);
      break;
    default:
      Bt(e, t, r);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new im()), t.forEach(function(n) {
      var a = gm.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(a, a));
    });
  }
}
function ot(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var a = r[n];
    try {
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            xe = s.stateNode, dt = !1;
            break e;
          case 3:
            xe = s.stateNode.containerInfo, dt = !0;
            break e;
          case 4:
            xe = s.stateNode.containerInfo, dt = !0;
            break e;
        }
        s = s.return;
      }
      if (xe === null) throw Error(E(160));
      Zh(i, o, a), xe = null, dt = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (u) {
      se(a, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xh(t, e), t = t.sibling;
}
function Xh(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(t, e), wt(e), n & 4) {
        try {
          _n(3, e, e.return), to(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          _n(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 1:
      ot(t, e), wt(e), n & 512 && r !== null && on(r, r.return);
      break;
    case 5:
      if (ot(t, e), wt(e), n & 512 && r !== null && on(r, r.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          aa(a, "");
        } catch (w) {
          se(e, e.return, w);
        }
      }
      if (n & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, o = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && i.type === "radio" && i.name != null && yd(a, i), ds(s, o);
          var u = ds(s, i);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], f = l[o + 1];
            c === "style" ? Ad(a, f) : c === "dangerouslySetInnerHTML" ? kd(a, f) : c === "children" ? aa(a, f) : cl(a, c, f, u);
          }
          switch (s) {
            case "input":
              os(a, i);
              break;
            case "textarea":
              bd(a, i);
              break;
            case "select":
              var p = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? un(a, !!i.multiple, d, !1) : p !== !!i.multiple && (i.defaultValue != null ? un(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : un(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[fa] = i;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 6:
      if (ot(t, e), wt(e), n & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (ot(t, e), wt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        la(t.containerInfo);
      } catch (w) {
        se(e, e.return, w);
      }
      break;
    case 4:
      ot(t, e), wt(e);
      break;
    case 13:
      ot(t, e), wt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Ql = le())), n & 4 && uc(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (Ce = (u = Ce) || c, ot(t, e), Ce = u) : ot(t, e), wt(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (P = e, c = e.child; c !== null; ) {
          for (f = P = c; P !== null; ) {
            switch (p = P, d = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                _n(4, p, p.return);
                break;
              case 1:
                on(p, p.return);
                var v = p.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  n = p, r = p.return;
                  try {
                    t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    se(n, r, w);
                  }
                }
                break;
              case 5:
                on(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  dc(f);
                  continue;
                }
            }
            d !== null ? (d.return = p, P = d) : dc(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                a = f.stateNode, u ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Sd("display", o));
              } catch (w) {
                se(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (w) {
              se(e, e.return, w);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      ot(t, e), wt(e), n & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      ot(
        t,
        e
      ), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Gh(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var a = n.stateNode;
          n.flags & 32 && (aa(a, ""), n.flags &= -33);
          var i = lc(e);
          Js(e, i, a);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, s = lc(e);
          Fs(e, s, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sm(e, t, r) {
  P = e, _h(e);
}
function _h(e, t, r) {
  for (var n = (e.mode & 1) !== 0; P !== null; ) {
    var a = P, i = a.child;
    if (a.tag === 22 && n) {
      var o = a.memoizedState !== null || Ga;
      if (!o) {
        var s = a.alternate, l = s !== null && s.memoizedState !== null || Ce;
        s = Ga;
        var u = Ce;
        if (Ga = o, (Ce = l) && !u) for (P = a; P !== null; ) o = P, l = o.child, o.tag === 22 && o.memoizedState !== null ? hc(a) : l !== null ? (l.return = o, P = l) : hc(a);
        for (; i !== null; ) P = i, _h(i), i = i.sibling;
        P = a, Ga = s, Ce = u;
      }
      cc(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, P = i) : cc(e);
  }
}
function cc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || to(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !Ce) if (r === null) n.componentDidMount();
            else {
              var a = t.elementType === t.type ? r.memoizedProps : ut(t.type, r.memoizedProps);
              n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && qu(t, i, n);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              qu(t, o, r);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (r === null && t.flags & 4) {
              r = s;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && la(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(E(163));
        }
        Ce || t.flags & 512 && Bs(t);
      } catch (p) {
        se(t, t.return, p);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, P = r;
      break;
    }
    P = t.return;
  }
}
function dc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, P = r;
      break;
    }
    P = t.return;
  }
}
function hc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            to(4, t);
          } catch (l) {
            se(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var a = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              se(t, a, l);
            }
          }
          var i = t.return;
          try {
            Bs(t);
          } catch (l) {
            se(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Bs(t);
          } catch (l) {
            se(t, o, l);
          }
      }
    } catch (l) {
      se(t, t.return, l);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, P = s;
      break;
    }
    P = t.return;
  }
}
var lm = Math.ceil, Mi = jt.ReactCurrentDispatcher, Jl = jt.ReactCurrentOwner, et = jt.ReactCurrentBatchConfig, Y = 0, we = null, he = null, ke = 0, We = 0, sn = or(0), ge = 0, ya = null, Rr = 0, ro = 0, Wl = 0, $n = null, Ue = null, Ql = 0, kn = 1 / 0, St = null, Li = !1, Ws = null, er = null, Za = !1, qt = null, Bi = 0, ea = 0, Qs = null, gi = -1, mi = 0;
function Ne() {
  return Y & 6 ? le() : gi !== -1 ? gi : gi = le();
}
function tr(e) {
  return e.mode & 1 ? Y & 2 && ke !== 0 ? ke & -ke : Hg.transition !== null ? (mi === 0 && (mi = Dd()), mi) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qd(e.type)), e) : 1;
}
function gt(e, t, r, n) {
  if (50 < ea) throw ea = 0, Qs = null, Error(E(185));
  Ra(e, r, n), (!(Y & 2) || e !== we) && (e === we && (!(Y & 2) && (ro |= r), ge === 4 && Ht(e, ke)), Be(e, n), r === 1 && Y === 0 && !(t.mode & 1) && (kn = le() + 500, _i && sr()));
}
function Be(e, t) {
  var r = e.callbackNode;
  Hp(e, t);
  var n = ki(e, e === we ? ke : 0);
  if (n === 0) r !== null && xu(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && xu(r), t === 1) e.tag === 0 ? Yg(fc.bind(null, e)) : lh(fc.bind(null, e)), Fg(function() {
      !(Y & 6) && sr();
    }), r = null;
    else {
      switch (Md(n)) {
        case 1:
          r = gl;
          break;
        case 4:
          r = zd;
          break;
        case 16:
          r = xi;
          break;
        case 536870912:
          r = Ud;
          break;
        default:
          r = xi;
      }
      r = sf(r, $h.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function $h(e, t) {
  if (gi = -1, mi = 0, Y & 6) throw Error(E(327));
  var r = e.callbackNode;
  if (pn() && e.callbackNode !== r) return null;
  var n = ki(e, e === we ? ke : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Fi(e, n);
  else {
    t = n;
    var a = Y;
    Y |= 2;
    var i = tf();
    (we !== e || ke !== t) && (St = null, kn = le() + 500, Ar(e, t));
    do
      try {
        dm();
        break;
      } catch (s) {
        ef(e, s);
      }
    while (!0);
    Tl(), Mi.current = i, Y = a, he !== null ? t = 0 : (we = null, ke = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (a = ms(e), a !== 0 && (n = a, t = Ys(e, a))), t === 1) throw r = ya, Ar(e, 0), Ht(e, n), Be(e, le()), r;
    if (t === 6) Ht(e, n);
    else {
      if (a = e.current.alternate, !(n & 30) && !um(a) && (t = Fi(e, n), t === 2 && (i = ms(e), i !== 0 && (n = i, t = Ys(e, i))), t === 1)) throw r = ya, Ar(e, 0), Ht(e, n), Be(e, le()), r;
      switch (e.finishedWork = a, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          gr(e, Ue, St);
          break;
        case 3:
          if (Ht(e, n), (n & 130023424) === n && (t = Ql + 500 - le(), 10 < t)) {
            if (ki(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & n) !== n) {
              Ne(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = As(gr.bind(null, e, Ue, St), t);
            break;
          }
          gr(e, Ue, St);
          break;
        case 4:
          if (Ht(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, a = -1; 0 < n; ) {
            var o = 31 - pt(n);
            i = 1 << o, o = t[o], o > a && (a = o), n &= ~i;
          }
          if (n = a, n = le() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * lm(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = As(gr.bind(null, e, Ue, St), n);
            break;
          }
          gr(e, Ue, St);
          break;
        case 5:
          gr(e, Ue, St);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Be(e, le()), e.callbackNode === r ? $h.bind(null, e) : null;
}
function Ys(e, t) {
  var r = $n;
  return e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256), e = Fi(e, t), e !== 2 && (t = Ue, Ue = r, t !== null && Hs(t)), e;
}
function Hs(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function um(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var a = r[n], i = a.getSnapshot;
        a = a.value;
        try {
          if (!mt(i(), a)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ht(e, t) {
  for (t &= ~Wl, t &= ~ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - pt(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function fc(e) {
  if (Y & 6) throw Error(E(327));
  pn();
  var t = ki(e, 0);
  if (!(t & 1)) return Be(e, le()), null;
  var r = Fi(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = ms(e);
    n !== 0 && (t = n, r = Ys(e, n));
  }
  if (r === 1) throw r = ya, Ar(e, 0), Ht(e, t), Be(e, le()), r;
  if (r === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, gr(e, Ue, St), Be(e, le()), null;
}
function Yl(e, t) {
  var r = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = r, Y === 0 && (kn = le() + 500, _i && sr());
  }
}
function Nr(e) {
  qt !== null && qt.tag === 0 && !(Y & 6) && pn();
  var t = Y;
  Y |= 1;
  var r = et.transition, n = V;
  try {
    if (et.transition = null, V = 1, e) return e();
  } finally {
    V = n, et.transition = r, Y = t, !(Y & 6) && sr();
  }
}
function Hl() {
  We = sn.current, $(sn);
}
function Ar(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Bg(r)), he !== null) for (r = he.return; r !== null; ) {
    var n = r;
    switch (El(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Oi();
        break;
      case 3:
        bn(), $(Me), $(Oe), zl();
        break;
      case 5:
        jl(n);
        break;
      case 4:
        bn();
        break;
      case 13:
        $(re);
        break;
      case 19:
        $(re);
        break;
      case 10:
        Rl(n.type._context);
        break;
      case 22:
      case 23:
        Hl();
    }
    r = r.return;
  }
  if (we = e, he = e = rr(e.current, null), ke = We = t, ge = 0, ya = null, Wl = ro = Rr = 0, Ue = $n = null, xr !== null) {
    for (t = 0; t < xr.length; t++) if (r = xr[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var a = n.next, i = r.pending;
      if (i !== null) {
        var o = i.next;
        i.next = a, n.next = o;
      }
      r.pending = n;
    }
    xr = null;
  }
  return e;
}
function ef(e, t) {
  do {
    var r = he;
    try {
      if (Tl(), hi.current = Di, Ui) {
        for (var n = ne.memoizedState; n !== null; ) {
          var a = n.queue;
          a !== null && (a.pending = null), n = n.next;
        }
        Ui = !1;
      }
      if (Tr = 0, ve = pe = ne = null, Xn = !1, ma = 0, Jl.current = null, r === null || r.return === null) {
        ge = 1, ya = t, he = null;
        break;
      }
      e: {
        var i = e, o = r.return, s = r, l = t;
        if (t = ke, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = ec(o);
          if (d !== null) {
            d.flags &= -257, tc(d, o, s, i, t), d.mode & 1 && $u(i, u, t), t = d, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(l), t.updateQueue = w;
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              $u(i, u, t), Kl();
              break e;
            }
            l = Error(E(426));
          }
        } else if (te && s.mode & 1) {
          var x = ec(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), tc(x, o, s, i, t), Cl(xn(l, s));
            break e;
          }
        }
        i = l = xn(l, s), ge !== 4 && (ge = 2), $n === null ? $n = [i] : $n.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Mh(i, l, t);
              Vu(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (er === null || !er.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Lh(i, s, t);
                Vu(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nf(r);
    } catch (A) {
      t = A, he === r && r !== null && (he = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function tf() {
  var e = Mi.current;
  return Mi.current = Di, e === null ? Di : e;
}
function Kl() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), we === null || !(Rr & 268435455) && !(ro & 268435455) || Ht(we, ke);
}
function Fi(e, t) {
  var r = Y;
  Y |= 2;
  var n = tf();
  (we !== e || ke !== t) && (St = null, Ar(e, t));
  do
    try {
      cm();
      break;
    } catch (a) {
      ef(e, a);
    }
  while (!0);
  if (Tl(), Y = r, Mi.current = n, he !== null) throw Error(E(261));
  return we = null, ke = 0, ge;
}
function cm() {
  for (; he !== null; ) rf(he);
}
function dm() {
  for (; he !== null && !Dp(); ) rf(he);
}
function rf(e) {
  var t = of(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? nf(e) : he = t, Jl.current = null;
}
function nf(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = am(r, t), r !== null) {
        r.flags &= 32767, he = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, he = null;
        return;
      }
    } else if (r = nm(r, t, We), r !== null) {
      he = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function gr(e, t, r) {
  var n = V, a = et.transition;
  try {
    et.transition = null, V = 1, hm(e, t, r, n);
  } finally {
    et.transition = a, V = n;
  }
  return null;
}
function hm(e, t, r, n) {
  do
    pn();
  while (qt !== null);
  if (Y & 6) throw Error(E(327));
  r = e.finishedWork;
  var a = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (Kp(e, i), e === we && (he = we = null, ke = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Za || (Za = !0, sf(xi, function() {
    return pn(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = et.transition, et.transition = null;
    var o = V;
    V = 1;
    var s = Y;
    Y |= 4, Jl.current = null, om(e, r), Xh(r, e), Ig(ks), Si = !!xs, ks = xs = null, e.current = r, sm(r), Mp(), Y = s, V = o, et.transition = i;
  } else e.current = r;
  if (Za && (Za = !1, qt = e, Bi = a), i = e.pendingLanes, i === 0 && (er = null), Fp(r.stateNode), Be(e, le()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], n(a.value, { componentStack: a.stack, digest: a.digest });
  if (Li) throw Li = !1, e = Ws, Ws = null, e;
  return Bi & 1 && e.tag !== 0 && pn(), i = e.pendingLanes, i & 1 ? e === Qs ? ea++ : (ea = 0, Qs = e) : ea = 0, sr(), null;
}
function pn() {
  if (qt !== null) {
    var e = Md(Bi), t = et.transition, r = V;
    try {
      if (et.transition = null, V = 16 > e ? 16 : e, qt === null) var n = !1;
      else {
        if (e = qt, qt = null, Bi = 0, Y & 6) throw Error(E(331));
        var a = Y;
        for (Y |= 4, P = e.current; P !== null; ) {
          var i = P, o = i.child;
          if (P.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _n(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, P = f;
                  else for (; P !== null; ) {
                    c = P;
                    var p = c.sibling, d = c.return;
                    if (qh(c), c === u) {
                      P = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = d, P = p;
                      break;
                    }
                    P = d;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var x = w.sibling;
                    w.sibling = null, w = x;
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, P = o;
          else e: for (; P !== null; ) {
            if (i = P, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                _n(9, i, i.return);
            }
            var m = i.sibling;
            if (m !== null) {
              m.return = i.return, P = m;
              break e;
            }
            P = i.return;
          }
        }
        var h = e.current;
        for (P = h; P !== null; ) {
          o = P;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) g.return = o, P = g;
          else e: for (o = h; P !== null; ) {
            if (s = P, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  to(9, s);
              }
            } catch (A) {
              se(s, s.return, A);
            }
            if (s === o) {
              P = null;
              break e;
            }
            var b = s.sibling;
            if (b !== null) {
              b.return = s.return, P = b;
              break e;
            }
            P = s.return;
          }
        }
        if (Y = a, sr(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
          xt.onPostCommitFiberRoot(Vi, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      V = r, et.transition = t;
    }
  }
  return !1;
}
function pc(e, t, r) {
  t = xn(r, t), t = Mh(e, t, 1), e = $t(e, t, 1), t = Ne(), e !== null && (Ra(e, 1, t), Be(e, t));
}
function se(e, t, r) {
  if (e.tag === 3) pc(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pc(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (er === null || !er.has(n))) {
        e = xn(r, e), e = Lh(t, e, 1), t = $t(t, e, 1), e = Ne(), t !== null && (Ra(t, 1, e), Be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fm(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & r, we === e && (ke & r) === r && (ge === 4 || ge === 3 && (ke & 130023424) === ke && 500 > le() - Ql ? Ar(e, 0) : Wl |= r), Be(e, t);
}
function af(e, t) {
  t === 0 && (e.mode & 1 ? (t = Fa, Fa <<= 1, !(Fa & 130023424) && (Fa = 4194304)) : t = 1);
  var r = Ne();
  e = Pt(e, t), e !== null && (Ra(e, t, r), Be(e, r));
}
function pm(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), af(e, r);
}
function gm(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, a = e.memoizedState;
      a !== null && (r = a.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  n !== null && n.delete(t), af(e, r);
}
var of;
of = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) De = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return De = !1, rm(e, t, r);
    De = !!(e.flags & 131072);
  }
  else De = !1, te && t.flags & 1048576 && uh(t, Ni, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      pi(e, t), e = t.pendingProps;
      var a = vn(t, Oe.current);
      fn(t, r), a = Dl(null, t, n, e, a, r);
      var i = Ml();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(n) ? (i = !0, Ti(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Pl(t), a.updater = eo, t.stateNode = a, a._reactInternals = t, Ps(t, n, e, r), t = zs(null, t, n, !0, i, r)) : (t.tag = 0, te && i && Al(t), Re(null, t, a, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (pi(e, t), e = t.pendingProps, a = n._init, n = a(n._payload), t.type = n, a = t.tag = vm(n), e = ut(n, e), a) {
          case 0:
            t = js(null, t, n, e, r);
            break e;
          case 1:
            t = ac(null, t, n, e, r);
            break e;
          case 11:
            t = rc(null, t, n, e, r);
            break e;
          case 14:
            t = nc(null, t, n, ut(n.type, e), r);
            break e;
        }
        throw Error(E(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : ut(n, a), js(e, t, n, a, r);
    case 1:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : ut(n, a), ac(e, t, n, a, r);
    case 3:
      e: {
        if (Wh(t), e === null) throw Error(E(387));
        n = t.pendingProps, i = t.memoizedState, a = i.element, gh(e, t), ji(t, n, null, r);
        var o = t.memoizedState;
        if (n = o.element, i.isDehydrated) if (i = { element: n, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = xn(Error(E(423)), t), t = ic(e, t, n, r, a);
          break e;
        } else if (n !== a) {
          a = xn(Error(E(424)), t), t = ic(e, t, n, r, a);
          break e;
        } else for (Ye = _t(t.stateNode.containerInfo.firstChild), He = t, te = !0, ft = null, r = fh(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (wn(), n === a) {
            t = It(e, t, r);
            break e;
          }
          Re(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mh(t), e === null && Ts(t), n = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = a.children, Ss(n, a) ? o = null : i !== null && Ss(n, i) && (t.flags |= 32), Jh(e, t), Re(e, t, o, r), t.child;
    case 6:
      return e === null && Ts(t), null;
    case 13:
      return Qh(e, t, r);
    case 4:
      return Il(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = yn(t, null, n, r) : Re(e, t, n, r), t.child;
    case 11:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : ut(n, a), rc(e, t, n, a, r);
    case 7:
      return Re(e, t, t.pendingProps, r), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, X(Pi, n._currentValue), n._currentValue = o, i !== null) if (mt(i.value, o)) {
          if (i.children === a.children && !Me.current) {
            t = It(e, t, r);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            o = i.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === n) {
                if (i.tag === 1) {
                  l = Tt(-1, r & -r), l.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), Rs(
                  i.return,
                  r,
                  t
                ), s.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(E(341));
            o.lanes |= r, s = o.alternate, s !== null && (s.lanes |= r), Rs(o, r, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        Re(e, t, a.children, r), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, n = t.pendingProps.children, fn(t, r), a = tt(a), n = n(a), t.flags |= 1, Re(e, t, n, r), t.child;
    case 14:
      return n = t.type, a = ut(n, t.pendingProps), a = ut(n.type, a), nc(e, t, n, a, r);
    case 15:
      return Bh(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : ut(n, a), pi(e, t), t.tag = 1, Le(n) ? (e = !0, Ti(t)) : e = !1, fn(t, r), Dh(t, n, a), Ps(t, n, a, r), zs(null, t, n, !0, e, r);
    case 19:
      return Yh(e, t, r);
    case 22:
      return Fh(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function sf(e, t) {
  return jd(e, t);
}
function mm(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $e(e, t, r, n) {
  return new mm(e, t, r, n);
}
function Vl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vm(e) {
  if (typeof e == "function") return Vl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hl) return 11;
    if (e === fl) return 14;
  }
  return 2;
}
function rr(e, t) {
  var r = e.alternate;
  return r === null ? (r = $e(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function vi(e, t, r, n, a, i) {
  var o = 2;
  if (n = e, typeof e == "function") Vl(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Zr:
      return Er(r.children, a, i, t);
    case dl:
      o = 8, a |= 8;
      break;
    case ts:
      return e = $e(12, r, t, a | 2), e.elementType = ts, e.lanes = i, e;
    case rs:
      return e = $e(13, r, t, a), e.elementType = rs, e.lanes = i, e;
    case ns:
      return e = $e(19, r, t, a), e.elementType = ns, e.lanes = i, e;
    case md:
      return no(r, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case pd:
          o = 10;
          break e;
        case gd:
          o = 9;
          break e;
        case hl:
          o = 11;
          break e;
        case fl:
          o = 14;
          break e;
        case Jt:
          o = 16, n = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = $e(o, r, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
}
function Er(e, t, r, n) {
  return e = $e(7, e, n, t), e.lanes = r, e;
}
function no(e, t, r, n) {
  return e = $e(22, e, n, t), e.elementType = md, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Qo(e, t, r) {
  return e = $e(6, e, null, t), e.lanes = r, e;
}
function Yo(e, t, r) {
  return t = $e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function wm(e, t, r, n, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ao(0), this.expirationTimes = Ao(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ao(0), this.identifierPrefix = n, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function ql(e, t, r, n, a, i, o, s, l) {
  return e = new wm(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = $e(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pl(i), e;
}
function ym(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Gr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function lf(e) {
  if (!e) return ar;
  e = e._reactInternals;
  e: {
    if (jr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Le(r)) return sh(e, r, t);
  }
  return t;
}
function uf(e, t, r, n, a, i, o, s, l) {
  return e = ql(r, n, !0, e, a, i, o, s, l), e.context = lf(null), r = e.current, n = Ne(), a = tr(r), i = Tt(n, a), i.callback = t ?? null, $t(r, i, a), e.current.lanes = a, Ra(e, a, n), Be(e, n), e;
}
function ao(e, t, r, n) {
  var a = t.current, i = Ne(), o = tr(a);
  return r = lf(r), t.context === null ? t.context = r : t.pendingContext = r, t = Tt(i, o), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = $t(a, t, o), e !== null && (gt(e, a, o, i), di(e, a, o)), o;
}
function Ji(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Gl(e, t) {
  gc(e, t), (e = e.alternate) && gc(e, t);
}
function bm() {
  return null;
}
var cf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zl(e) {
  this._internalRoot = e;
}
io.prototype.render = Zl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  ao(e, t, null, null);
};
io.prototype.unmount = Zl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nr(function() {
      ao(null, e, null, null);
    }), t[Nt] = null;
  }
};
function io(e) {
  this._internalRoot = e;
}
io.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fd();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Yt.length && t !== 0 && t < Yt[r].priority; r++) ;
    Yt.splice(r, 0, e), r === 0 && Wd(e);
  }
};
function Xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function oo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mc() {
}
function xm(e, t, r, n, a) {
  if (a) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Ji(o);
        i.call(u);
      };
    }
    var o = uf(t, n, e, 0, null, !1, !1, "", mc);
    return e._reactRootContainer = o, e[Nt] = o.current, da(e.nodeType === 8 ? e.parentNode : e), Nr(), o;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Ji(l);
      s.call(u);
    };
  }
  var l = ql(e, 0, !1, null, null, !1, !1, "", mc);
  return e._reactRootContainer = l, e[Nt] = l.current, da(e.nodeType === 8 ? e.parentNode : e), Nr(function() {
    ao(t, l, r, n);
  }), l;
}
function so(e, t, r, n, a) {
  var i = r._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof a == "function") {
      var s = a;
      a = function() {
        var l = Ji(o);
        s.call(l);
      };
    }
    ao(t, o, e, a);
  } else o = xm(r, t, e, a, n);
  return Ji(o);
}
Ld = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Qn(t.pendingLanes);
        r !== 0 && (ml(t, r | 1), Be(t, le()), !(Y & 6) && (kn = le() + 500, sr()));
      }
      break;
    case 13:
      Nr(function() {
        var n = Pt(e, 1);
        if (n !== null) {
          var a = Ne();
          gt(n, e, 1, a);
        }
      }), Gl(e, 1);
  }
};
vl = function(e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var r = Ne();
      gt(t, e, 134217728, r);
    }
    Gl(e, 134217728);
  }
};
Bd = function(e) {
  if (e.tag === 13) {
    var t = tr(e), r = Pt(e, t);
    if (r !== null) {
      var n = Ne();
      gt(r, e, t, n);
    }
    Gl(e, t);
  }
};
Fd = function() {
  return V;
};
Jd = function(e, t) {
  var r = V;
  try {
    return V = e, t();
  } finally {
    V = r;
  }
};
fs = function(e, t, r) {
  switch (t) {
    case "input":
      if (os(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var a = Xi(n);
            if (!a) throw Error(E(90));
            wd(n), os(n, a);
          }
        }
      }
      break;
    case "textarea":
      bd(e, r);
      break;
    case "select":
      t = r.value, t != null && un(e, !!r.multiple, t, !1);
  }
};
Od = Yl;
Td = Nr;
var km = { usingClientEntryPoint: !1, Events: [Pa, en, Xi, Ed, Cd, Yl] }, Mn = { findFiberByHostInstance: br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: Mn.bundleType, version: Mn.version, rendererPackageName: Mn.rendererPackageName, rendererConfig: Mn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mn.findFiberByHostInstance || bm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xa.isDisabled && Xa.supportsFiber) try {
    Vi = Xa.inject(Sm), xt = Xa;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
Ve.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xl(t)) throw Error(E(200));
  return ym(e, t, null, r);
};
Ve.createRoot = function(e, t) {
  if (!Xl(e)) throw Error(E(299));
  var r = !1, n = "", a = cf;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ql(e, 1, !1, null, null, r, !1, n, a), e[Nt] = t.current, da(e.nodeType === 8 ? e.parentNode : e), new Zl(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Pd(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return Nr(e);
};
Ve.hydrate = function(e, t, r) {
  if (!oo(t)) throw Error(E(200));
  return so(null, e, t, !0, r);
};
Ve.hydrateRoot = function(e, t, r) {
  if (!Xl(e)) throw Error(E(405));
  var n = r != null && r.hydratedSources || null, a = !1, i = "", o = cf;
  if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = uf(t, null, e, 1, r ?? null, a, !1, i, o), e[Nt] = t.current, da(e), n) for (e = 0; e < n.length; e++) r = n[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(
    r,
    a
  );
  return new io(t);
};
Ve.render = function(e, t, r) {
  if (!oo(t)) throw Error(E(200));
  return so(null, e, t, !1, r);
};
Ve.unmountComponentAtNode = function(e) {
  if (!oo(e)) throw Error(E(40));
  return e._reactRootContainer ? (Nr(function() {
    so(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = Yl;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!oo(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return so(e, t, r, !1, n);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function df() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df);
    } catch (e) {
      console.error(e);
    }
}
df(), cd.exports = Ve;
var hf = cd.exports;
const Am = /* @__PURE__ */ ed(hf);
var Em = (e) => {
  switch (e) {
    case "success":
      return Tm;
    case "info":
      return Nm;
    case "warning":
      return Rm;
    case "error":
      return Pm;
    default:
      return null;
  }
}, Cm = Array(12).fill(0), Om = ({ visible: e, className: t }) => T.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, T.createElement("div", { className: "sonner-spinner" }, Cm.map((r, n) => T.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), Tm = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Rm = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Nm = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Pm = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Im = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, T.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), T.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), jm = () => {
  let [e, t] = T.useState(document.hidden);
  return T.useEffect(() => {
    let r = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, Ks = 1, zm = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: r, ...n } = e, a = typeof e?.id == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ks++, i = this.toasts.find((s) => s.id === a), o = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), i ? this.toasts = this.toasts.map((s) => s.id === a ? (this.publish({ ...s, ...e, id: a, title: r }), { ...s, ...e, id: a, dismissible: o, title: r }) : s) : this.addToast({ title: r, ...n, dismissible: o, id: a }), a;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let r;
      t.loading !== void 0 && (r = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let n = e instanceof Promise ? e : e(), a = r !== void 0, i, o = n.then(async (l) => {
        if (i = ["resolve", l], T.isValidElement(l)) a = !1, this.create({ id: r, type: "default", message: l });
        else if (Dm(l) && !l.ok) {
          a = !1;
          let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: r, type: "error", message: u, description: c });
        } else if (t.success !== void 0) {
          a = !1;
          let u = typeof t.success == "function" ? await t.success(l) : t.success, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: r, type: "success", message: u, description: c });
        }
      }).catch(async (l) => {
        if (i = ["reject", l], t.error !== void 0) {
          a = !1;
          let u = typeof t.error == "function" ? await t.error(l) : t.error, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: r, type: "error", message: u, description: c });
        }
      }).finally(() => {
        var l;
        a && (this.dismiss(r), r = void 0), (l = t.finally) == null || l.call(t);
      }), s = () => new Promise((l, u) => o.then(() => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
      return typeof r != "string" && typeof r != "number" ? { unwrap: s } : Object.assign(r, { unwrap: s });
    }, this.custom = (e, t) => {
      let r = t?.id || Ks++;
      return this.create({ jsx: e(r), id: r, ...t }), r;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, ze = new zm(), Um = (e, t) => {
  let r = t?.id || Ks++;
  return ze.addToast({ title: e, ...t, id: r }), r;
}, Dm = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Mm = Um, Lm = () => ze.toasts, Bm = () => ze.getActiveToasts(), Fm = Object.assign(Mm, { success: ze.success, info: ze.info, warning: ze.warning, error: ze.error, custom: ze.custom, message: ze.message, promise: ze.promise, dismiss: ze.dismiss, loading: ze.loading }, { getHistory: Lm, getToasts: Bm });
function Jm(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
Jm(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function _a(e) {
  return e.label !== void 0;
}
var Wm = 3, Qm = "32px", Ym = "16px", vc = 4e3, Hm = 356, Km = 14, Vm = 20, qm = 200;
function st(...e) {
  return e.filter(Boolean).join(" ");
}
function Gm(e) {
  let [t, r] = e.split("-"), n = [];
  return t && n.push(t), r && n.push(r), n;
}
var Zm = (e) => {
  var t, r, n, a, i, o, s, l, u, c, f;
  let { invert: p, toast: d, unstyled: v, interacting: w, setHeights: x, visibleToasts: m, heights: h, index: g, toasts: b, expanded: A, removeToast: k, defaultRichColors: C, closeButton: N, style: W, cancelButtonStyle: F, actionButtonStyle: ue, className: ce = "", descriptionClassName: me = "", duration: Ge, position: Ut, gap: Fe, loadingIcon: Te, expandByDefault: R, classNames: O, icons: j, closeButtonAriaLabel: G = "Close toast", pauseWhenPageIsHidden: D } = e, [S, z] = T.useState(null), [J, ie] = T.useState(null), [H, On] = T.useState(!1), [ur, zr] = T.useState(!1), [Tn, go] = T.useState(!1), [tu, Yf] = T.useState(!1), [Hf, ru] = T.useState(!1), [Kf, mo] = T.useState(0), [Vf, nu] = T.useState(0), Rn = T.useRef(d.duration || Ge || vc), au = T.useRef(null), cr = T.useRef(null), qf = g === 0, Gf = g + 1 <= m, Ze = d.type, Ur = d.dismissible !== !1, Zf = d.className || "", Xf = d.descriptionClassName || "", za = T.useMemo(() => h.findIndex((B) => B.toastId === d.id) || 0, [h, d.id]), _f = T.useMemo(() => {
    var B;
    return (B = d.closeButton) != null ? B : N;
  }, [d.closeButton, N]), iu = T.useMemo(() => d.duration || Ge || vc, [d.duration, Ge]), vo = T.useRef(0), Dr = T.useRef(0), ou = T.useRef(0), Mr = T.useRef(null), [$f, ep] = Ut.split("-"), su = T.useMemo(() => h.reduce((B, q, ee) => ee >= za ? B : B + q.height, 0), [h, za]), lu = jm(), tp = d.invert || p, wo = Ze === "loading";
  Dr.current = T.useMemo(() => za * Fe + su, [za, su]), T.useEffect(() => {
    Rn.current = iu;
  }, [iu]), T.useEffect(() => {
    On(!0);
  }, []), T.useEffect(() => {
    let B = cr.current;
    if (B) {
      let q = B.getBoundingClientRect().height;
      return nu(q), x((ee) => [{ toastId: d.id, height: q, position: d.position }, ...ee]), () => x((ee) => ee.filter((nt) => nt.toastId !== d.id));
    }
  }, [x, d.id]), T.useLayoutEffect(() => {
    if (!H) return;
    let B = cr.current, q = B.style.height;
    B.style.height = "auto";
    let ee = B.getBoundingClientRect().height;
    B.style.height = q, nu(ee), x((nt) => nt.find((at) => at.toastId === d.id) ? nt.map((at) => at.toastId === d.id ? { ...at, height: ee } : at) : [{ toastId: d.id, height: ee, position: d.position }, ...nt]);
  }, [H, d.title, d.description, x, d.id]);
  let Dt = T.useCallback(() => {
    zr(!0), mo(Dr.current), x((B) => B.filter((q) => q.toastId !== d.id)), setTimeout(() => {
      k(d);
    }, qm);
  }, [d, k, x, Dr]);
  T.useEffect(() => {
    if (d.promise && Ze === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let B;
    return A || w || D && lu ? (() => {
      if (ou.current < vo.current) {
        let q = (/* @__PURE__ */ new Date()).getTime() - vo.current;
        Rn.current = Rn.current - q;
      }
      ou.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Rn.current !== 1 / 0 && (vo.current = (/* @__PURE__ */ new Date()).getTime(), B = setTimeout(() => {
      var q;
      (q = d.onAutoClose) == null || q.call(d, d), Dt();
    }, Rn.current)), () => clearTimeout(B);
  }, [A, w, d, Ze, D, lu, Dt]), T.useEffect(() => {
    d.delete && Dt();
  }, [Dt, d.delete]);
  function rp() {
    var B, q, ee;
    return j != null && j.loading ? T.createElement("div", { className: st(O?.loader, (B = d?.classNames) == null ? void 0 : B.loader, "sonner-loader"), "data-visible": Ze === "loading" }, j.loading) : Te ? T.createElement("div", { className: st(O?.loader, (q = d?.classNames) == null ? void 0 : q.loader, "sonner-loader"), "data-visible": Ze === "loading" }, Te) : T.createElement(Om, { className: st(O?.loader, (ee = d?.classNames) == null ? void 0 : ee.loader), visible: Ze === "loading" });
  }
  return T.createElement("li", { tabIndex: 0, ref: cr, className: st(ce, Zf, O?.toast, (t = d?.classNames) == null ? void 0 : t.toast, O?.default, O?.[Ze], (r = d?.classNames) == null ? void 0 : r[Ze]), "data-sonner-toast": "", "data-rich-colors": (n = d.richColors) != null ? n : C, "data-styled": !(d.jsx || d.unstyled || v), "data-mounted": H, "data-promise": !!d.promise, "data-swiped": Hf, "data-removed": ur, "data-visible": Gf, "data-y-position": $f, "data-x-position": ep, "data-index": g, "data-front": qf, "data-swiping": Tn, "data-dismissible": Ur, "data-type": Ze, "data-invert": tp, "data-swipe-out": tu, "data-swipe-direction": J, "data-expanded": !!(A || R && H), style: { "--index": g, "--toasts-before": g, "--z-index": b.length - g, "--offset": `${ur ? Kf : Dr.current}px`, "--initial-height": R ? "auto" : `${Vf}px`, ...W, ...d.style }, onDragEnd: () => {
    go(!1), z(null), Mr.current = null;
  }, onPointerDown: (B) => {
    wo || !Ur || (au.current = /* @__PURE__ */ new Date(), mo(Dr.current), B.target.setPointerCapture(B.pointerId), B.target.tagName !== "BUTTON" && (go(!0), Mr.current = { x: B.clientX, y: B.clientY }));
  }, onPointerUp: () => {
    var B, q, ee, nt;
    if (tu || !Ur) return;
    Mr.current = null;
    let at = Number(((B = cr.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Mt = Number(((q = cr.current) == null ? void 0 : q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), dr = (/* @__PURE__ */ new Date()).getTime() - ((ee = au.current) == null ? void 0 : ee.getTime()), it = S === "x" ? at : Mt, Lt = Math.abs(it) / dr;
    if (Math.abs(it) >= Vm || Lt > 0.11) {
      mo(Dr.current), (nt = d.onDismiss) == null || nt.call(d, d), ie(S === "x" ? at > 0 ? "right" : "left" : Mt > 0 ? "down" : "up"), Dt(), Yf(!0), ru(!1);
      return;
    }
    go(!1), z(null);
  }, onPointerMove: (B) => {
    var q, ee, nt, at;
    if (!Mr.current || !Ur || ((q = window.getSelection()) == null ? void 0 : q.toString().length) > 0) return;
    let Mt = B.clientY - Mr.current.y, dr = B.clientX - Mr.current.x, it = (ee = e.swipeDirections) != null ? ee : Gm(Ut);
    !S && (Math.abs(dr) > 1 || Math.abs(Mt) > 1) && z(Math.abs(dr) > Math.abs(Mt) ? "x" : "y");
    let Lt = { x: 0, y: 0 };
    S === "y" ? (it.includes("top") || it.includes("bottom")) && (it.includes("top") && Mt < 0 || it.includes("bottom") && Mt > 0) && (Lt.y = Mt) : S === "x" && (it.includes("left") || it.includes("right")) && (it.includes("left") && dr < 0 || it.includes("right") && dr > 0) && (Lt.x = dr), (Math.abs(Lt.x) > 0 || Math.abs(Lt.y) > 0) && ru(!0), (nt = cr.current) == null || nt.style.setProperty("--swipe-amount-x", `${Lt.x}px`), (at = cr.current) == null || at.style.setProperty("--swipe-amount-y", `${Lt.y}px`);
  } }, _f && !d.jsx ? T.createElement("button", { "aria-label": G, "data-disabled": wo, "data-close-button": !0, onClick: wo || !Ur ? () => {
  } : () => {
    var B;
    Dt(), (B = d.onDismiss) == null || B.call(d, d);
  }, className: st(O?.closeButton, (a = d?.classNames) == null ? void 0 : a.closeButton) }, (i = j?.close) != null ? i : Im) : null, d.jsx || L.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : T.createElement(T.Fragment, null, Ze || d.icon || d.promise ? T.createElement("div", { "data-icon": "", className: st(O?.icon, (o = d?.classNames) == null ? void 0 : o.icon) }, d.promise || d.type === "loading" && !d.icon ? d.icon || rp() : null, d.type !== "loading" ? d.icon || j?.[Ze] || Em(Ze) : null) : null, T.createElement("div", { "data-content": "", className: st(O?.content, (s = d?.classNames) == null ? void 0 : s.content) }, T.createElement("div", { "data-title": "", className: st(O?.title, (l = d?.classNames) == null ? void 0 : l.title) }, typeof d.title == "function" ? d.title() : d.title), d.description ? T.createElement("div", { "data-description": "", className: st(me, Xf, O?.description, (u = d?.classNames) == null ? void 0 : u.description) }, typeof d.description == "function" ? d.description() : d.description) : null), L.isValidElement(d.cancel) ? d.cancel : d.cancel && _a(d.cancel) ? T.createElement("button", { "data-button": !0, "data-cancel": !0, style: d.cancelButtonStyle || F, onClick: (B) => {
    var q, ee;
    _a(d.cancel) && Ur && ((ee = (q = d.cancel).onClick) == null || ee.call(q, B), Dt());
  }, className: st(O?.cancelButton, (c = d?.classNames) == null ? void 0 : c.cancelButton) }, d.cancel.label) : null, L.isValidElement(d.action) ? d.action : d.action && _a(d.action) ? T.createElement("button", { "data-button": !0, "data-action": !0, style: d.actionButtonStyle || ue, onClick: (B) => {
    var q, ee;
    _a(d.action) && ((ee = (q = d.action).onClick) == null || ee.call(q, B), !B.defaultPrevented && Dt());
  }, className: st(O?.actionButton, (f = d?.classNames) == null ? void 0 : f.actionButton) }, d.action.label) : null));
};
function wc() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Xm(e, t) {
  let r = {};
  return [e, t].forEach((n, a) => {
    let i = a === 1, o = i ? "--mobile-offset" : "--offset", s = i ? Ym : Qm;
    function l(u) {
      ["top", "right", "bottom", "left"].forEach((c) => {
        r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach((u) => {
      n[u] === void 0 ? r[`${o}-${u}`] = s : r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u];
    }) : l(s);
  }), r;
}
var _m = L.forwardRef(function(e, t) {
  let { invert: r, position: n = "bottom-right", hotkey: a = ["altKey", "KeyT"], expand: i, closeButton: o, className: s, offset: l, mobileOffset: u, theme: c = "light", richColors: f, duration: p, style: d, visibleToasts: v = Wm, toastOptions: w, dir: x = wc(), gap: m = Km, loadingIcon: h, icons: g, containerAriaLabel: b = "Notifications", pauseWhenPageIsHidden: A } = e, [k, C] = T.useState([]), N = T.useMemo(() => Array.from(new Set([n].concat(k.filter((D) => D.position).map((D) => D.position)))), [k, n]), [W, F] = T.useState([]), [ue, ce] = T.useState(!1), [me, Ge] = T.useState(!1), [Ut, Fe] = T.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Te = T.useRef(null), R = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), O = T.useRef(null), j = T.useRef(!1), G = T.useCallback((D) => {
    C((S) => {
      var z;
      return (z = S.find((J) => J.id === D.id)) != null && z.delete || ze.dismiss(D.id), S.filter(({ id: J }) => J !== D.id);
    });
  }, []);
  return T.useEffect(() => ze.subscribe((D) => {
    if (D.dismiss) {
      C((S) => S.map((z) => z.id === D.id ? { ...z, delete: !0 } : z));
      return;
    }
    setTimeout(() => {
      Am.flushSync(() => {
        C((S) => {
          let z = S.findIndex((J) => J.id === D.id);
          return z !== -1 ? [...S.slice(0, z), { ...S[z], ...D }, ...S.slice(z + 1)] : [D, ...S];
        });
      });
    });
  }), []), T.useEffect(() => {
    if (c !== "system") {
      Fe(c);
      return;
    }
    if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Fe("dark") : Fe("light")), typeof window > "u") return;
    let D = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      D.addEventListener("change", ({ matches: S }) => {
        Fe(S ? "dark" : "light");
      });
    } catch {
      D.addListener(({ matches: z }) => {
        try {
          Fe(z ? "dark" : "light");
        } catch (J) {
          console.error(J);
        }
      });
    }
  }, [c]), T.useEffect(() => {
    k.length <= 1 && ce(!1);
  }, [k]), T.useEffect(() => {
    let D = (S) => {
      var z, J;
      a.every((ie) => S[ie] || S.code === ie) && (ce(!0), (z = Te.current) == null || z.focus()), S.code === "Escape" && (document.activeElement === Te.current || (J = Te.current) != null && J.contains(document.activeElement)) && ce(!1);
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [a]), T.useEffect(() => {
    if (Te.current) return () => {
      O.current && (O.current.focus({ preventScroll: !0 }), O.current = null, j.current = !1);
    };
  }, [Te.current]), T.createElement("section", { ref: t, "aria-label": `${b} ${R}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, N.map((D, S) => {
    var z;
    let [J, ie] = D.split("-");
    return k.length ? T.createElement("ol", { key: D, dir: x === "auto" ? wc() : x, tabIndex: -1, ref: Te, className: s, "data-sonner-toaster": !0, "data-theme": Ut, "data-y-position": J, "data-lifted": ue && k.length > 1 && !i, "data-x-position": ie, style: { "--front-toast-height": `${((z = W[0]) == null ? void 0 : z.height) || 0}px`, "--width": `${Hm}px`, "--gap": `${m}px`, ...d, ...Xm(l, u) }, onBlur: (H) => {
      j.current && !H.currentTarget.contains(H.relatedTarget) && (j.current = !1, O.current && (O.current.focus({ preventScroll: !0 }), O.current = null));
    }, onFocus: (H) => {
      H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || j.current || (j.current = !0, O.current = H.relatedTarget);
    }, onMouseEnter: () => ce(!0), onMouseMove: () => ce(!0), onMouseLeave: () => {
      me || ce(!1);
    }, onDragEnd: () => ce(!1), onPointerDown: (H) => {
      H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || Ge(!0);
    }, onPointerUp: () => Ge(!1) }, k.filter((H) => !H.position && S === 0 || H.position === D).map((H, On) => {
      var ur, zr;
      return T.createElement(Zm, { key: H.id, icons: g, index: On, toast: H, defaultRichColors: f, duration: (ur = w?.duration) != null ? ur : p, className: w?.className, descriptionClassName: w?.descriptionClassName, invert: r, visibleToasts: v, closeButton: (zr = w?.closeButton) != null ? zr : o, interacting: me, position: D, style: w?.style, unstyled: w?.unstyled, classNames: w?.classNames, cancelButtonStyle: w?.cancelButtonStyle, actionButtonStyle: w?.actionButtonStyle, removeToast: G, toasts: k.filter((Tn) => Tn.position == H.position), heights: W.filter((Tn) => Tn.position == H.position), setHeights: F, expandByDefault: i, gap: m, loadingIcon: h, expanded: ue, pauseWhenPageIsHidden: A, swipeDirections: e.swipeDirections });
    })) : null;
  }));
}), ff, yc = hf;
ff = yc.createRoot, yc.hydrateRoot;
var pf = { exports: {} }, lo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $m = L, ev = Symbol.for("react.element"), tv = Symbol.for("react.fragment"), rv = Object.prototype.hasOwnProperty, nv = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, av = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, r) {
  var n, a = {}, i = null, o = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) rv.call(t, n) && !av.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
  return { $$typeof: ev, type: e, key: i, ref: o, props: a, _owner: nv.current };
}
lo.Fragment = tv;
lo.jsx = gf;
lo.jsxs = gf;
pf.exports = lo;
var y = pf.exports, Vs = class extends Error {
  constructor(t, r, n) {
    super(r);
    je(this, "code");
    je(this, "cause");
    this.code = t, this.cause = n, this.name = "XOOSMicroappError";
  }
}, mf = L.createContext(null);
function _l() {
  const e = L.useContext(mf);
  if (!e)
    throw new Vs(
      "XOOS_CONTEXT_MISSING",
      "XOOS Microapp is not mounted inside the XOOS Runtime."
    );
  return e;
}
var iv = class extends T.Component {
  constructor() {
    super(...arguments);
    je(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    this.props.onError?.(t), this.props.bridge.telemetry.track("microapp.error", { microappKey: this.props.microappKey }, this.props.microappKey).catch(() => {
    });
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ y.jsx("div", { role: "alert", children: "This XOOS component could not be loaded." }) : this.props.children;
  }
}, vf = L.createContext(null);
function ov(e) {
  return /* @__PURE__ */ y.jsx(vf.Provider, { value: e.value, children: e.children });
}
function sv() {
  return L.useContext(vf);
}
function lv(e) {
  const { id: t, element: r, App: n, styles: a = "", shadowDom: i = !0, onError: o } = e;
  if (!t.trim()) throw new Vs("MICROAPP_ID_REQUIRED", "XOOS Microapp id is required.");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(r))
    throw new Vs(
      "ELEMENT_NAME_INVALID",
      "XOOS custom element name must be lowercase, hyphenated, and contain at least one hyphen."
    );
  if (customElements.get(r)) return;
  class s extends HTMLElement {
    constructor() {
      super(...arguments);
      je(this, "reactRoot", null);
      je(this, "mountNode", null);
      je(this, "portalNode", null);
      je(this, "bridge");
      je(this, "props", {});
      je(this, "mountedTelemetrySent", !1);
    }
    set xoos(c) {
      this.bridge = c, this.isConnected && this.renderMicroapp();
    }
    get xoos() {
      return this.bridge;
    }
    set xoosProps(c) {
      this.props = c ?? {}, this.isConnected && this.renderMicroapp();
    }
    get xoosProps() {
      return this.props;
    }
    connectedCallback() {
      this.mountMicroapp();
    }
    disconnectedCallback() {
      this.unmountMicroapp();
    }
    mountMicroapp() {
      if (this.reactRoot) return;
      const c = i ? this.shadowRoot ?? this.attachShadow({ mode: "open" }) : this;
      if (a && !c.querySelector("style[data-xoos-adapter-styles]")) {
        const f = document.createElement("style");
        f.setAttribute("data-xoos-adapter-styles", t), f.textContent = a, c.appendChild(f);
      }
      this.mountNode = document.createElement("div"), this.mountNode.setAttribute("data-xoos-microapp", t), c.appendChild(this.mountNode), this.portalNode = document.createElement("div"), this.portalNode.setAttribute("data-xoos-portal-root", t), c.appendChild(this.portalNode), this.reactRoot = ff(this.mountNode), this.renderMicroapp(), this.emitMountTelemetry();
    }
    renderMicroapp() {
      !this.reactRoot || !this.bridge || this.reactRoot.render(
        /* @__PURE__ */ y.jsx(iv, { microappKey: t, bridge: this.bridge, onError: o, children: /* @__PURE__ */ y.jsx(mf.Provider, { value: this.bridge, children: /* @__PURE__ */ y.jsx(ov, { value: this.portalNode, children: /* @__PURE__ */ y.jsx(n, { ...this.props }) }) }) })
      );
    }
    emitMountTelemetry() {
      !this.bridge || this.mountedTelemetrySent || (this.mountedTelemetrySent = !0, this.bridge.telemetry.track("microapp.mount", { microappKey: t }, t).catch(() => {
      }));
    }
    unmountMicroapp() {
      this.bridge && this.mountedTelemetrySent && this.bridge.telemetry.track("microapp.unmount", { microappKey: t }, t).catch(() => {
      }), this.reactRoot?.unmount(), this.reactRoot = null, this.mountNode = null, this.portalNode = null, this.mountedTelemetrySent = !1;
    }
  }
  customElements.define(r, s);
}
function uv() {
  const e = _l(), t = e.context.scopes, r = (n) => t.includes(n);
  return {
    list: () => e.permissions.list(),
    can: (n) => e.permissions.can(n),
    require: (n) => e.permissions.require(n),
    hasScope: r,
    hasAnyScope: (n) => n.some(r),
    hasAllScopes: (n) => n.every(r)
  };
}
var cv = class {
  constructor(e) {
    je(this, "bridge");
    je(this, "applications", {
      list: async (e = {}) => this.bridge.services.request(
        "xo-auth.applications.list",
        e
      )
    });
    je(this, "organizations", {
      list: async () => this.bridge.services.request(
        "xo-auth.organizations.list"
      )
    });
    je(this, "organizationMembers", {
      list: async (e = {}) => this.bridge.services.request(
        "xo-auth.organization-members.list",
        e
      )
    });
    this.bridge = e;
  }
};
function dv() {
  const e = _l();
  return L.useMemo(() => new cv(e), [e]);
}
const hv = `@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}:host,:root{--font-size: 16px;--background: 0 0% 100%;--foreground: 0 0% 9%;--card: 0 0% 100%;--card-foreground: 0 0% 9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 9%;--primary: 243 96% 5%;--primary-foreground: 0 0% 100%;--secondary: 264 12% 95%;--secondary-foreground: 243 96% 5%;--muted: 240 6% 93%;--muted-foreground: 240 5% 48%;--accent: 220 10% 92%;--accent-foreground: 243 96% 5%;--destructive: 348 82% 46%;--destructive-foreground: 0 0% 100%;--border: 0 0% 80%;--input: 0 0% 80%;--ring: 0 0% 44%;--radius: .625rem;--chart-1: 20 80% 50%;--chart-2: 180 40% 45%;--chart-3: 210 30% 35%;--chart-4: 50 70% 55%;--chart-5: 40 70% 52%;--sidebar-bg: 0 0% 97%;--sidebar-foreground: 0 0% 9%;--sidebar-primary: 243 96% 5%;--sidebar-primary-foreground: 0 0% 97%;--sidebar-accent: 0 0% 96%;--sidebar-accent-foreground: 0 0% 12%;--sidebar-border: 0 0% 87%;--sidebar-ring: 0 0% 44%}.dark{--background: 0 0% 9%;--foreground: 0 0% 97%;--card: 0 0% 9%;--card-foreground: 0 0% 97%;--popover: 0 0% 9%;--popover-foreground: 0 0% 97%;--primary: 0 0% 97%;--primary-foreground: 0 0% 12%;--secondary: 0 0% 17%;--secondary-foreground: 0 0% 97%;--muted: 0 0% 17%;--muted-foreground: 0 0% 44%;--accent: 0 0% 17%;--accent-foreground: 0 0% 97%;--destructive: 0 60% 40%;--destructive-foreground: 0 80% 55%;--border: 0 0% 17%;--input: 0 0% 17%;--ring: 0 0% 27%;--sidebar-bg: 0 0% 12%;--sidebar-foreground: 0 0% 97%;--sidebar-primary: 264 80% 50%;--sidebar-primary-foreground: 0 0% 97%;--sidebar-accent: 0 0% 17%;--sidebar-accent-foreground: 0 0% 97%;--sidebar-border: 0 0% 17%;--sidebar-ring: 0 0% 27%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground));font-family:Inter,sans-serif}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#94a3b8}html{font-size:var(--font-size)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.inset-y-0{top:0;bottom:0}.-bottom-12{bottom:-3rem}.-left-12{left:-3rem}.-left-\\[23px\\]{left:-23px}.-right-1\\.5{right:-.375rem}.-right-12{right:-3rem}.-top-1\\.5{top:-.375rem}.-top-12{top:-3rem}.bottom-0{bottom:0}.bottom-2{bottom:.5rem}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-2{left:.5rem}.left-3{left:.75rem}.left-\\[50\\%\\]{left:50%}.left-\\[7px\\]{left:7px}.right-0{right:0}.right-1{right:.25rem}.right-2{right:.5rem}.right-3{right:.75rem}.right-4{right:1rem}.top-0{top:0}.top-1{top:.25rem}.top-1\\.5{top:.375rem}.top-1\\/2{top:50%}.top-2{top:.5rem}.top-3\\.5{top:.875rem}.top-4{top:1rem}.top-\\[1px\\]{top:1px}.top-\\[50\\%\\]{top:50%}.top-\\[60\\%\\]{top:60%}.top-full{top:100%}.isolate{isolation:isolate}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1\\]{z-index:1}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2 / span 2}.row-start-1{grid-row-start:1}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-3\\.5{margin-left:.875rem;margin-right:.875rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0\\.5{margin-top:.125rem;margin-bottom:.125rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.-ml-4{margin-left:-1rem}.-mt-4{margin-top:-1rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:.25rem}.ml-auto{margin-left:auto}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-auto{margin-top:auto}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-row{display:table-row}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.aspect-video{aspect-ratio:16 / 9}.size-10{width:2.5rem;height:2.5rem}.size-2{width:.5rem;height:.5rem}.size-2\\.5{width:.625rem;height:.625rem}.size-3{width:.75rem;height:.75rem}.size-3\\.5{width:.875rem;height:.875rem}.size-4{width:1rem;height:1rem}.size-7{width:1.75rem;height:1.75rem}.size-8{width:2rem;height:2rem}.size-9{width:2.25rem;height:2.25rem}.size-full{width:100%;height:100%}.h-1\\.5{height:.375rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-28{height:7rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[1\\.15rem\\]{height:1.15rem}.h-\\[calc\\(100\\%-1px\\)\\]{height:calc(100% - 1px)}.h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\]{height:var(--radix-navigation-menu-viewport-height)}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.h-svh{height:100svh}.max-h-96{max-height:24rem}.max-h-\\[300px\\]{max-height:300px}.min-h-0{min-height:0px}.min-h-16{min-height:4rem}.min-h-4{min-height:1rem}.min-h-screen{min-height:100vh}.min-h-svh{min-height:100svh}.w-0{width:0px}.w-0\\.5{width:.125rem}.w-1{width:.25rem}.w-1\\.5{width:.375rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-3\\/4{width:75%}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-80{width:20rem}.w-9{width:2.25rem}.w-\\[100px\\]{width:100px}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-px{width:1px}.min-w-0{min-width:0px}.min-w-10{min-width:2.5rem}.min-w-5{min-width:1.25rem}.min-w-8{min-width:2rem}.min-w-9{min-width:2.25rem}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-\\[60\\%\\]{max-width:60%}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.grow-0{flex-grow:0}.basis-full{flex-basis:100%}.caption-bottom{caption-side:bottom}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0\\.5{--tw-translate-y: .125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(-50\\%_-_2px\\)\\]{--tw-translate-y: calc(-50% - 2px) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.resize{resize:both}.scroll-my-1{scroll-margin-top:.25rem;scroll-margin-bottom:.25rem}.scroll-py-1{scroll-padding-top:.25rem;scroll-padding-bottom:.25rem}.list-none{list-style-type:none}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-\\[0_1fr\\]{grid-template-columns:0 1fr}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-start{justify-items:start}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-y-0\\.5{row-gap:.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.25rem * var(--tw-space-x-reverse));margin-left:calc(.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity, 1))}.self-start{align-self:flex-start}.justify-self-end{justify-self:end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.text-balance{text-wrap:balance}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-\\[2px\\]{border-radius:2px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-tl-sm{border-top-left-radius:calc(var(--radius) - 4px)}.border{border-width:1px}.border-2{border-width:2px}.border-\\[1\\.5px\\]{border-width:1.5px}.border-y{border-top-width:1px;border-bottom-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-amber-200{--tw-border-opacity: 1;border-color:rgb(253 230 138 / var(--tw-border-opacity, 1))}.border-blue-200{--tw-border-opacity: 1;border-color:rgb(191 219 254 / var(--tw-border-opacity, 1))}.border-border\\/50{border-color:hsl(var(--border) / .5)}.border-emerald-200{--tw-border-opacity: 1;border-color:rgb(167 243 208 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-input{border-color:hsl(var(--input))}.border-primary{border-color:hsl(var(--primary))}.border-purple-200{--tw-border-opacity: 1;border-color:rgb(233 213 255 / var(--tw-border-opacity, 1))}.border-sidebar-border{border-color:hsl(var(--sidebar-border))}.border-slate-200{--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.border-l-transparent{border-left-color:transparent}.border-t-transparent{border-top-color:transparent}.bg-accent{background-color:hsl(var(--accent))}.bg-amber-100{--tw-bg-opacity: 1;background-color:rgb(254 243 199 / var(--tw-bg-opacity, 1))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity, 1))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity, 1))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/40{background-color:#0006}.bg-black\\/50{background-color:#00000080}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-border{background-color:hsl(var(--border))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-emerald-100{--tw-bg-opacity: 1;background-color:rgb(209 250 229 / var(--tw-bg-opacity, 1))}.bg-emerald-50\\/60{background-color:#ecfdf599}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity, 1))}.bg-foreground{background-color:hsl(var(--foreground))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgb(224 231 255 / var(--tw-bg-opacity, 1))}.bg-indigo-600{--tw-bg-opacity: 1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.bg-muted{background-color:hsl(var(--muted))}.bg-muted\\/50{background-color:hsl(var(--muted) / .5)}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-primary\\/20{background-color:hsl(var(--primary) / .2)}.bg-purple-50{--tw-bg-opacity: 1;background-color:rgb(250 245 255 / var(--tw-bg-opacity, 1))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-sidebar{background-color:hsl(var(--sidebar-bg))}.bg-sidebar-border{background-color:hsl(var(--sidebar-border))}.bg-slate-100{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-indigo-600{--tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-violet-600{--tw-gradient-to: #7c3aed var(--tw-gradient-to-position)}.fill-current{fill:currentColor}.fill-primary{fill:hsl(var(--primary))}.p-0{padding:0}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-12{padding:3rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-\\[3px\\]{padding:3px}.p-px{padding:1px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-10{padding-left:2.5rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-6{padding-left:1.5rem}.pl-8{padding-left:2rem}.pr-2{padding-right:.5rem}.pr-2\\.5{padding-right:.625rem}.pr-4{padding-right:1rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.pt-1{padding-top:.25rem}.pt-3{padding-top:.75rem}.pt-4{padding-top:1rem}.pt-6{padding-top:1.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\\[0\\.8rem\\]{font-size:.8rem}.text-\\[11px\\]{font-size:11px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-\\[rgb\\(16\\,40\\,40\\)\\]{--tw-text-opacity: 1;color:rgb(16 40 40 / var(--tw-text-opacity, 1))}.text-accent-foreground{color:hsl(var(--accent-foreground))}.text-amber-600{--tw-text-opacity: 1;color:rgb(217 119 6 / var(--tw-text-opacity, 1))}.text-amber-700{--tw-text-opacity: 1;color:rgb(180 83 9 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-card-foreground{color:hsl(var(--card-foreground))}.text-current{color:currentColor}.text-destructive{color:hsl(var(--destructive))}.text-emerald-600{--tw-text-opacity: 1;color:rgb(5 150 105 / var(--tw-text-opacity, 1))}.text-emerald-700{--tw-text-opacity: 1;color:rgb(4 120 87 / var(--tw-text-opacity, 1))}.text-foreground{color:hsl(var(--foreground))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-indigo-600{--tw-text-opacity: 1;color:rgb(79 70 229 / var(--tw-text-opacity, 1))}.text-indigo-700{--tw-text-opacity: 1;color:rgb(67 56 202 / var(--tw-text-opacity, 1))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-sidebar-foreground{color:hsl(var(--sidebar-foreground))}.text-sidebar-foreground\\/70{color:hsl(var(--sidebar-foreground) / .7)}.text-slate-700{--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-border\\)\\)\\]{--tw-shadow: 0 0 0 1px hsl(var(--sidebar-border));--tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-4{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-emerald-50{--tw-ring-opacity: 1;--tw-ring-color: rgb(236 253 245 / var(--tw-ring-opacity, 1))}.ring-gray-50{--tw-ring-opacity: 1;--tw-ring-color: rgb(249 250 251 / var(--tw-ring-opacity, 1))}.ring-ring\\/50{--tw-ring-color: hsl(var(--ring) / .5)}.ring-sidebar-ring{--tw-ring-color: hsl(var(--sidebar-ring))}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[left\\,right\\,width\\]{transition-property:left,right,width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[margin\\,opacity\\]{transition-property:margin,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[width\\,height\\,padding\\]{transition-property:width,height,padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[width\\]{transition-property:width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-none{transition-property:none}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-1000{transition-duration:1s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{transition-timing-function:linear}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.fade-in-0{--tw-enter-opacity: 0}.zoom-in-95{--tw-enter-scale: .95}.duration-1000{animation-duration:1s}.duration-200{animation-duration:.2s}.duration-300{animation-duration:.3s}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{animation-timing-function:linear}.ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}:host{display:block;min-height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}[data-xoos-microapp]{min-height:100%}.xoos-primary-action{border:0;color:#fff;background:linear-gradient(90deg,#4f46e5,#7c3aed);cursor:pointer}.xoos-primary-action:hover{background:linear-gradient(90deg,#4338ca,#6d28d9)}.xoos-primary-action:focus-visible{outline:2px solid #6366f1;outline-offset:2px}.selection\\:bg-primary *::-moz-selection{background-color:hsl(var(--primary))}.selection\\:bg-primary *::selection{background-color:hsl(var(--primary))}.selection\\:text-primary-foreground *::-moz-selection{color:hsl(var(--primary-foreground))}.selection\\:text-primary-foreground *::selection{color:hsl(var(--primary-foreground))}.selection\\:bg-primary::-moz-selection{background-color:hsl(var(--primary))}.selection\\:bg-primary::selection{background-color:hsl(var(--primary))}.selection\\:text-primary-foreground::-moz-selection{color:hsl(var(--primary-foreground))}.selection\\:text-primary-foreground::selection{color:hsl(var(--primary-foreground))}.file\\:inline-flex::file-selector-button{display:inline-flex}.file\\:h-7::file-selector-button{height:1.75rem}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.file\\:text-foreground::file-selector-button{color:hsl(var(--foreground))}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-2:after{content:var(--tw-content);inset:-.5rem}.after\\:inset-y-0:after{content:var(--tw-content);top:0;bottom:0}.after\\:left-1\\/2:after{content:var(--tw-content);left:50%}.after\\:w-1:after{content:var(--tw-content);width:.25rem}.after\\:w-\\[2px\\]:after{content:var(--tw-content);width:2px}.after\\:-translate-x-1\\/2:after{content:var(--tw-content);--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.first\\:rounded-l-md:first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.first\\:border-l:first-child{border-left-width:1px}.last\\:rounded-r-md:last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.last\\:border-b-0:last-child{border-bottom-width:0px}.focus-within\\:relative:focus-within{position:relative}.focus-within\\:z-20:focus-within{z-index:20}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-amber-100:hover{--tw-bg-opacity: 1;background-color:rgb(254 243 199 / var(--tw-bg-opacity, 1))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-muted:hover{background-color:hsl(var(--muted))}.hover\\:bg-muted\\/50:hover{background-color:hsl(var(--muted) / .5)}.hover\\:bg-primary:hover{background-color:hsl(var(--primary))}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:bg-sidebar-accent:hover{background-color:hsl(var(--sidebar-accent))}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-foreground:hover{color:hsl(var(--foreground))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:text-indigo-800:hover{--tw-text-opacity: 1;color:rgb(55 48 163 / var(--tw-text-opacity, 1))}.hover\\:text-muted-foreground:hover{color:hsl(var(--muted-foreground))}.hover\\:text-primary-foreground:hover{color:hsl(var(--primary-foreground))}.hover\\:text-sidebar-accent-foreground:hover{color:hsl(var(--sidebar-accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-accent\\)\\)\\]:hover{--tw-shadow: 0 0 0 1px hsl(var(--sidebar-accent));--tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:ring-4:hover{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.hover\\:after\\:bg-sidebar-border:hover:after{content:var(--tw-content);background-color:hsl(var(--sidebar-border))}.focus\\:z-10:focus{z-index:10}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:bg-primary:focus{background-color:hsl(var(--primary))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:text-primary-foreground:focus{color:hsl(var(--primary-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1))}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:z-10:focus-visible{z-index:10}.focus-visible\\:border-ring:focus-visible{border-color:hsl(var(--ring))}.focus-visible\\:outline-1:focus-visible{outline-width:1px}.focus-visible\\:outline-ring:focus-visible{outline-color:hsl(var(--ring))}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-4:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-destructive\\/20:focus-visible{--tw-ring-color: hsl(var(--destructive) / .2)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color: hsl(var(--ring) / .5)}.focus-visible\\:ring-offset-1:focus-visible{--tw-ring-offset-width: 1px}.active\\:bg-sidebar-accent:active{background-color:hsl(var(--sidebar-accent))}.active\\:text-sidebar-accent-foreground:active{color:hsl(var(--sidebar-accent-foreground))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group\\/menu-item:focus-within .group-focus-within\\/menu-item\\:opacity-100{opacity:1}.group\\/menu-item:hover .group-hover\\/menu-item\\:opacity-100{opacity:1}.peer\\/menu-button:hover~.peer-hover\\/menu-button\\:text-sidebar-accent-foreground{color:hsl(var(--sidebar-accent-foreground))}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.has-\\[\\>svg\\]\\:grid-cols-\\[calc\\(var\\(--spacing\\)\\*4\\)_1fr\\]:has(>svg){grid-template-columns:calc(var(--spacing) * 4) 1fr}.has-\\[\\>svg\\]\\:gap-x-3:has(>svg){-moz-column-gap:.75rem;column-gap:.75rem}.has-\\[\\>svg\\]\\:px-2\\.5:has(>svg){padding-left:.625rem;padding-right:.625rem}.has-\\[\\>svg\\]\\:px-3:has(>svg){padding-left:.75rem;padding-right:.75rem}.has-\\[\\>svg\\]\\:px-4:has(>svg){padding-left:1rem;padding-right:1rem}.aria-disabled\\:pointer-events-none[aria-disabled=true]{pointer-events:none}.aria-disabled\\:opacity-50[aria-disabled=true]{opacity:.5}.aria-selected\\:bg-accent[aria-selected=true]{background-color:hsl(var(--accent))}.aria-selected\\:bg-primary[aria-selected=true]{background-color:hsl(var(--primary))}.aria-selected\\:text-accent-foreground[aria-selected=true]{color:hsl(var(--accent-foreground))}.aria-selected\\:text-muted-foreground[aria-selected=true]{color:hsl(var(--muted-foreground))}.aria-selected\\:text-primary-foreground[aria-selected=true]{color:hsl(var(--primary-foreground))}.aria-selected\\:opacity-100[aria-selected=true]{opacity:1}.data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true],.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[vaul-drawer-direction\\=bottom\\]\\:inset-x-0[data-vaul-drawer-direction=bottom]{left:0;right:0}.data-\\[vaul-drawer-direction\\=left\\]\\:inset-y-0[data-vaul-drawer-direction=left],.data-\\[vaul-drawer-direction\\=right\\]\\:inset-y-0[data-vaul-drawer-direction=right]{top:0;bottom:0}.data-\\[vaul-drawer-direction\\=top\\]\\:inset-x-0[data-vaul-drawer-direction=top]{left:0;right:0}.data-\\[vaul-drawer-direction\\=bottom\\]\\:bottom-0[data-vaul-drawer-direction=bottom]{bottom:0}.data-\\[vaul-drawer-direction\\=left\\]\\:left-0[data-vaul-drawer-direction=left]{left:0}.data-\\[vaul-drawer-direction\\=right\\]\\:right-0[data-vaul-drawer-direction=right]{right:0}.data-\\[vaul-drawer-direction\\=top\\]\\:top-0[data-vaul-drawer-direction=top]{top:0}.data-\\[active\\=true\\]\\:z-10[data-active=true]{z-index:10}.data-\\[vaul-drawer-direction\\=bottom\\]\\:mt-24[data-vaul-drawer-direction=bottom]{margin-top:6rem}.data-\\[vaul-drawer-direction\\=top\\]\\:mb-24[data-vaul-drawer-direction=top]{margin-bottom:6rem}.data-\\[orientation\\=horizontal\\]\\:h-4[data-orientation=horizontal]{height:1rem}.data-\\[orientation\\=horizontal\\]\\:h-full[data-orientation=horizontal]{height:100%}.data-\\[orientation\\=horizontal\\]\\:h-px[data-orientation=horizontal]{height:1px}.data-\\[orientation\\=vertical\\]\\:h-full[data-orientation=vertical]{height:100%}.data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction=vertical]{height:1px}.data-\\[size\\=default\\]\\:h-9[data-size=default]{height:2.25rem}.data-\\[size\\=sm\\]\\:h-8[data-size=sm]{height:2rem}.data-\\[vaul-drawer-direction\\=bottom\\]\\:max-h-\\[80vh\\][data-vaul-drawer-direction=bottom],.data-\\[vaul-drawer-direction\\=top\\]\\:max-h-\\[80vh\\][data-vaul-drawer-direction=top]{max-height:80vh}.data-\\[orientation\\=vertical\\]\\:min-h-44[data-orientation=vertical]{min-height:11rem}.data-\\[orientation\\=horizontal\\]\\:w-full[data-orientation=horizontal]{width:100%}.data-\\[orientation\\=vertical\\]\\:w-1\\.5[data-orientation=vertical]{width:.375rem}.data-\\[orientation\\=vertical\\]\\:w-auto[data-orientation=vertical]{width:auto}.data-\\[orientation\\=vertical\\]\\:w-full[data-orientation=vertical]{width:100%}.data-\\[orientation\\=vertical\\]\\:w-px[data-orientation=vertical]{width:1px}.data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction=vertical]{width:100%}.data-\\[vaul-drawer-direction\\=left\\]\\:w-3\\/4[data-vaul-drawer-direction=left],.data-\\[vaul-drawer-direction\\=right\\]\\:w-3\\/4[data-vaul-drawer-direction=right]{width:75%}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=checked\\]\\:translate-x-\\[calc\\(100\\%-2px\\)\\][data-state=checked]{--tw-translate-x: calc(100% - 2px) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes accordion-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state=closed]{animation:accordion-up .2s ease-out}@keyframes accordion-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}.data-\\[state\\=open\\]\\:animate-accordion-down[data-state=open]{animation:accordion-down .2s ease-out}.data-\\[orientation\\=vertical\\]\\:flex-col[data-orientation=vertical],.data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction=vertical]{flex-direction:column}.data-\\[vaul-drawer-direction\\=bottom\\]\\:rounded-t-lg[data-vaul-drawer-direction=bottom]{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius)}.data-\\[vaul-drawer-direction\\=top\\]\\:rounded-b-lg[data-vaul-drawer-direction=top]{border-bottom-right-radius:var(--radius);border-bottom-left-radius:var(--radius)}.data-\\[variant\\=outline\\]\\:border-l-0[data-variant=outline]{border-left-width:0px}.data-\\[vaul-drawer-direction\\=bottom\\]\\:border-t[data-vaul-drawer-direction=bottom]{border-top-width:1px}.data-\\[vaul-drawer-direction\\=left\\]\\:border-r[data-vaul-drawer-direction=left]{border-right-width:1px}.data-\\[vaul-drawer-direction\\=right\\]\\:border-l[data-vaul-drawer-direction=right]{border-left-width:1px}.data-\\[vaul-drawer-direction\\=top\\]\\:border-b[data-vaul-drawer-direction=top]{border-bottom-width:1px}.data-\\[active\\=true\\]\\:border-ring[data-active=true]{border-color:hsl(var(--ring))}.data-\\[state\\=checked\\]\\:border-primary[data-state=checked]{border-color:hsl(var(--primary))}.data-\\[active\\=true\\]\\:bg-accent\\/50[data-active=true]{background-color:hsl(var(--accent) / .5)}.data-\\[active\\=true\\]\\:bg-sidebar-accent[data-active=true]{background-color:hsl(var(--sidebar-accent))}.data-\\[selected\\=true\\]\\:bg-accent[data-selected=true]{background-color:hsl(var(--accent))}.data-\\[state\\=active\\]\\:bg-card[data-state=active]{background-color:hsl(var(--card))}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:hsl(var(--primary))}.data-\\[state\\=on\\]\\:bg-accent[data-state=on],.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:bg-accent\\/50[data-state=open]{background-color:hsl(var(--accent) / .5)}.data-\\[state\\=open\\]\\:bg-secondary[data-state=open]{background-color:hsl(var(--secondary))}.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected]{background-color:hsl(var(--muted))}.data-\\[inset\\]\\:pl-8[data-inset]{padding-left:2rem}.data-\\[active\\=true\\]\\:font-medium[data-active=true]{font-weight:500}.data-\\[active\\=true\\]\\:text-accent-foreground[data-active=true]{color:hsl(var(--accent-foreground))}.data-\\[active\\=true\\]\\:text-sidebar-accent-foreground[data-active=true]{color:hsl(var(--sidebar-accent-foreground))}.data-\\[error\\=true\\]\\:text-destructive[data-error=true]{color:hsl(var(--destructive))}.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:hsl(var(--muted-foreground))}.data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=true]{color:hsl(var(--accent-foreground))}.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked]{color:hsl(var(--primary-foreground))}.data-\\[state\\=on\\]\\:text-accent-foreground[data-state=on],.data-\\[state\\=open\\]\\:text-accent-foreground[data-state=open]{color:hsl(var(--accent-foreground))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[variant\\=destructive\\]\\:text-destructive[data-variant=destructive]{color:hsl(var(--destructive))}.data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=true],.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:opacity-100[data-state=open]{opacity:1}.data-\\[active\\=true\\]\\:ring-\\[3px\\][data-active=true]{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.data-\\[active\\=true\\]\\:ring-ring\\/50[data-active=true]{--tw-ring-color: hsl(var(--ring) / .5)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{transition-duration:.3s}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{transition-duration:.5s}.data-\\[motion\\^\\=from-\\]\\:animate-in[data-motion^=from-],.data-\\[state\\=open\\]\\:animate-in[data-state=open],.data-\\[state\\=visible\\]\\:animate-in[data-state=visible]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[motion\\^\\=to-\\]\\:animate-out[data-motion^=to-],.data-\\[state\\=closed\\]\\:animate-out[data-state=closed],.data-\\[state\\=hidden\\]\\:animate-out[data-state=hidden]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[motion\\^\\=from-\\]\\:fade-in[data-motion^=from-]{--tw-enter-opacity: 0}.data-\\[motion\\^\\=to-\\]\\:fade-out[data-motion^=to-],.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed],.data-\\[state\\=hidden\\]\\:fade-out[data-state=hidden]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open],.data-\\[state\\=visible\\]\\:fade-in[data-state=visible]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-90[data-state=open]{--tw-enter-scale: .9}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[motion\\=from-end\\]\\:slide-in-from-right-52[data-motion=from-end]{--tw-enter-translate-x: 13rem}.data-\\[motion\\=from-start\\]\\:slide-in-from-left-52[data-motion=from-start]{--tw-enter-translate-x: -13rem}.data-\\[motion\\=to-end\\]\\:slide-out-to-right-52[data-motion=to-end]{--tw-exit-translate-x: 13rem}.data-\\[motion\\=to-start\\]\\:slide-out-to-left-52[data-motion=to-start]{--tw-exit-translate-x: -13rem}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed]{--tw-exit-translate-y: 100%}.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed]{--tw-exit-translate-x: -100%}.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed]{--tw-exit-translate-x: 100%}.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed]{--tw-exit-translate-y: -100%}.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open]{--tw-enter-translate-y: 100%}.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open]{--tw-enter-translate-x: -100%}.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open]{--tw-enter-translate-x: 100%}.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open]{--tw-enter-translate-y: -100%}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{animation-duration:.3s}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{animation-duration:.5s}.\\*\\:data-\\[slot\\=select-value\\]\\:line-clamp-1[data-slot=select-value]>*{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\*\\:data-\\[slot\\=select-value\\]\\:flex[data-slot=select-value]>*{display:flex}.\\*\\:data-\\[slot\\=select-value\\]\\:items-center[data-slot=select-value]>*{align-items:center}.\\*\\:data-\\[slot\\=select-value\\]\\:gap-2[data-slot=select-value]>*{gap:.5rem}.\\*\\:data-\\[slot\\=alert-description\\]\\:text-destructive\\/90[data-slot=alert-description]>*{color:hsl(var(--destructive) / .9)}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction=vertical]:after{content:var(--tw-content);left:0}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction=vertical]:after{content:var(--tw-content);height:.25rem}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction=vertical]:after{content:var(--tw-content);width:100%}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction=vertical]:after{content:var(--tw-content);--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction=vertical]:after{content:var(--tw-content);--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[variant\\=outline\\]\\:first\\:border-l:first-child[data-variant=outline]{border-left-width:1px}.data-\\[active\\=true\\]\\:hover\\:bg-accent:hover[data-active=true],.data-\\[state\\=open\\]\\:hover\\:bg-accent:hover[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:hover\\:bg-sidebar-accent:hover[data-state=open]{background-color:hsl(var(--sidebar-accent))}.data-\\[state\\=open\\]\\:hover\\:text-sidebar-accent-foreground:hover[data-state=open]{color:hsl(var(--sidebar-accent-foreground))}.data-\\[active\\=true\\]\\:focus\\:bg-accent:focus[data-active=true]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:focus\\:bg-accent:focus[data-state=open]{background-color:hsl(var(--accent))}.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10:focus[data-variant=destructive]{background-color:hsl(var(--destructive) / .1)}.data-\\[variant\\=destructive\\]\\:focus\\:text-destructive:focus[data-variant=destructive]{color:hsl(var(--destructive))}.group[data-disabled=true] .group-data-\\[disabled\\=true\\]\\:pointer-events-none{pointer-events:none}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:left-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\]{left:calc(var(--sidebar-width) * -1)}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:right-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\]{right:calc(var(--sidebar-width) * -1)}.group[data-side=left] .group-data-\\[side\\=left\\]\\:-right-4{right:-1rem}.group[data-side=right] .group-data-\\[side\\=right\\]\\:left-0{left:0}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:top-full{top:100%}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:-mt-8{margin-top:-2rem}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:mt-1\\.5{margin-top:.375rem}.group\\/drawer-content[data-vaul-drawer-direction=bottom] .group-data-\\[vaul-drawer-direction\\=bottom\\]\\/drawer-content\\:block{display:block}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:hidden{display:none}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\)\\]{width:calc(var(--sidebar-width-icon) + (--spacing(4)))}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\+2px\\)\\]{width:calc(var(--sidebar-width-icon) + (--spacing(4)) + 2px)}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:w-0{width:0px}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group[data-side=right] .group-data-\\[side\\=right\\]\\:rotate-180,.group[data-state=open] .group-data-\\[state\\=open\\]\\:rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:overflow-hidden,.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:overflow-hidden{overflow:hidden}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:rounded-lg{border-radius:var(--radius)}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:rounded-md{border-radius:calc(var(--radius) - 2px)}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:border,.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:border{border-width:1px}.group[data-side=left] .group-data-\\[side\\=left\\]\\:border-r{border-right-width:1px}.group[data-side=right] .group-data-\\[side\\=right\\]\\:border-l{border-left-width:1px}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:border-sidebar-border{border-color:hsl(var(--sidebar-border))}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:bg-popover{background-color:hsl(var(--popover))}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:text-popover-foreground{color:hsl(var(--popover-foreground))}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:opacity-0{opacity:0}.group[data-disabled=true] .group-data-\\[disabled\\=true\\]\\:opacity-50{opacity:.5}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:duration-200{transition-duration:.2s;animation-duration:.2s}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:after\\:left-full:after{content:var(--tw-content);left:100%}.group[data-collapsible=offcanvas] .hover\\:group-data-\\[collapsible\\=offcanvas\\]\\:bg-sidebar:hover{background-color:hsl(var(--sidebar-bg))}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.peer\\/menu-button[data-size=default]~.peer-data-\\[size\\=default\\]\\/menu-button\\:top-1\\.5{top:.375rem}.peer\\/menu-button[data-size=lg]~.peer-data-\\[size\\=lg\\]\\/menu-button\\:top-2\\.5{top:.625rem}.peer\\/menu-button[data-size=sm]~.peer-data-\\[size\\=sm\\]\\/menu-button\\:top-1{top:.25rem}.peer\\/menu-button[data-active=true]~.peer-data-\\[active\\=true\\]\\/menu-button\\:text-sidebar-accent-foreground{color:hsl(var(--sidebar-accent-foreground))}.dark\\:border-input:is(.dark *){border-color:hsl(var(--input))}.dark\\:bg-destructive\\/60:is(.dark *){background-color:hsl(var(--destructive) / .6)}.dark\\:bg-input\\/30:is(.dark *){background-color:hsl(var(--input) / .3)}.dark\\:text-muted-foreground:is(.dark *){color:hsl(var(--muted-foreground))}.dark\\:hover\\:bg-accent\\/50:hover:is(.dark *){background-color:hsl(var(--accent) / .5)}.dark\\:hover\\:bg-input\\/50:hover:is(.dark *){background-color:hsl(var(--input) / .5)}.dark\\:focus-visible\\:ring-destructive\\/40:focus-visible:is(.dark *){--tw-ring-color: hsl(var(--destructive) / .4)}.dark\\:data-\\[state\\=active\\]\\:border-input[data-state=active]:is(.dark *){border-color:hsl(var(--input))}.dark\\:data-\\[state\\=active\\]\\:bg-input\\/30[data-state=active]:is(.dark *){background-color:hsl(var(--input) / .3)}.dark\\:data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]:is(.dark *){background-color:hsl(var(--primary))}.dark\\:data-\\[state\\=checked\\]\\:bg-primary-foreground[data-state=checked]:is(.dark *){background-color:hsl(var(--primary-foreground))}.dark\\:data-\\[state\\=unchecked\\]\\:bg-card-foreground[data-state=unchecked]:is(.dark *){background-color:hsl(var(--card-foreground))}.dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80[data-state=unchecked]:is(.dark *){background-color:hsl(var(--input) / .8)}.dark\\:data-\\[state\\=active\\]\\:text-foreground[data-state=active]:is(.dark *){color:hsl(var(--foreground))}.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20:focus[data-variant=destructive]:is(.dark *){background-color:hsl(var(--destructive) / .2)}@media (min-width: 640px){.sm\\:right-0{right:0}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:w-80{width:20rem}.sm\\:w-auto{width:auto}.sm\\:max-w-lg{max-width:32rem}.sm\\:max-w-sm{max-width:24rem}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:gap-2\\.5{gap:.625rem}.sm\\:pl-2\\.5{padding-left:.625rem}.sm\\:pr-2\\.5{padding-right:.625rem}.sm\\:text-left{text-align:left}.data-\\[vaul-drawer-direction\\=left\\]\\:sm\\:max-w-sm[data-vaul-drawer-direction=left],.data-\\[vaul-drawer-direction\\=right\\]\\:sm\\:max-w-sm[data-vaul-drawer-direction=right]{max-width:24rem}}@media (min-width: 768px){.md\\:absolute{position:absolute}.md\\:inset-y-0{top:0;bottom:0}.md\\:left-auto{left:auto}.md\\:right-0{right:0}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[500px\\]{width:500px}.md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\]{width:var(--radix-navigation-menu-viewport-width)}.md\\:w-auto{width:auto}.md\\:space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.md\\:border-l{border-left-width:1px}.md\\:p-5{padding:1.25rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:opacity-0{opacity:0}.md\\:after\\:hidden:after{content:var(--tw-content);display:none}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:m-2{margin:.5rem}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:ml-0{margin-left:0}.peer[data-variant=inset][data-state=collapsed]~.md\\:peer-data-\\[variant\\=inset\\]\\:peer-data-\\[state\\=collapsed\\]\\:ml-2{margin-left:.5rem}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:rounded-xl{border-radius:.75rem}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}@media (min-width: 1024px){.lg\\:w-auto{width:auto}.lg\\:flex-row{flex-direction:row}.lg\\:items-center{align-items:center}.lg\\:gap-6{gap:1.5rem}.lg\\:px-12{padding-left:3rem;padding-right:3rem}}.\\[\\&\\:has\\(\\>\\.day-range-end\\)\\]\\:rounded-r-md:has(>.day-range-end){border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\>\\.day-range-start\\)\\]\\:rounded-l-md:has(>.day-range-start){border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-md:has([aria-selected]){border-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:bg-accent:has([aria-selected]){background-color:hsl(var(--accent))}.first\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-l-md:has([aria-selected]):first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.last\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-r-md:has([aria-selected]):last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[aria-selected\\]\\.day-range-end\\)\\]\\:rounded-r-md:has([aria-selected].day-range-end){border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]){padding-right:0}.\\[\\&\\:last-child\\]\\:pb-6:last-child{padding-bottom:1.5rem}.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\]>[role=checkbox]{--tw-translate-y: 2px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\:last-child\\]\\:truncate>span:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:size-3>svg{width:.75rem;height:.75rem}.\\[\\&\\>svg\\]\\:size-3\\.5>svg{width:.875rem;height:.875rem}.\\[\\&\\>svg\\]\\:size-4>svg{width:1rem;height:1rem}.\\[\\&\\>svg\\]\\:h-2\\.5>svg{height:.625rem}.\\[\\&\\>svg\\]\\:h-3>svg{height:.75rem}.\\[\\&\\>svg\\]\\:w-2\\.5>svg{width:.625rem}.\\[\\&\\>svg\\]\\:w-3>svg{width:.75rem}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}.\\[\\&\\>svg\\]\\:translate-y-0\\.5>svg{--tw-translate-y: .125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:text-current>svg{color:currentColor}.\\[\\&\\>svg\\]\\:text-muted-foreground>svg{color:hsl(var(--muted-foreground))}.\\[\\&\\>svg\\]\\:text-sidebar-accent-foreground>svg{color:hsl(var(--sidebar-accent-foreground))}.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child>tr{border-bottom-width:0px}.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction=vertical]>div{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state=open]>svg{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&_\\.recharts-cartesian-axis-tick_text\\]\\:fill-muted-foreground .recharts-cartesian-axis-tick text{fill:hsl(var(--muted-foreground))}.\\[\\&_\\.recharts-cartesian-grid_line\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border\\/50 .recharts-cartesian-grid line[stroke="#ccc"]{stroke:hsl(var(--border) / .5)}.\\[\\&_\\.recharts-curve\\.recharts-tooltip-cursor\\]\\:stroke-border .recharts-curve.recharts-tooltip-cursor{stroke:hsl(var(--border))}.\\[\\&_\\.recharts-dot\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent .recharts-dot[stroke="#fff"]{stroke:transparent}.\\[\\&_\\.recharts-polar-grid_\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border .recharts-polar-grid [stroke="#ccc"]{stroke:hsl(var(--border))}.\\[\\&_\\.recharts-radial-bar-background-sector\\]\\:fill-muted .recharts-radial-bar-background-sector,.\\[\\&_\\.recharts-rectangle\\.recharts-tooltip-cursor\\]\\:fill-muted .recharts-rectangle.recharts-tooltip-cursor{fill:hsl(var(--muted))}.\\[\\&_\\.recharts-reference-line_\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border .recharts-reference-line [stroke="#ccc"]{stroke:hsl(var(--border))}.\\[\\&_\\.recharts-sector\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent .recharts-sector[stroke="#fff"]{stroke:transparent}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-top:.375rem;padding-bottom:.375rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:.75rem;line-height:1rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{font-weight:500}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:hsl(var(--muted-foreground))}.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:0}.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:1.25rem}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:1.25rem}.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:3rem}.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-top:.75rem;padding-bottom:.75rem}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:1.25rem}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:1.25rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:1rem;height:1rem}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:hsl(var(--muted-foreground))}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child{border-width:0px}.\\[\\&_tr\\]\\:border-b tr{border-bottom-width:1px}[data-side=left][data-collapsible=offcanvas] .\\[\\[data-side\\=left\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-right-2{right:-.5rem}[data-side=left][data-state=collapsed] .\\[\\[data-side\\=left\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-e-resize{cursor:e-resize}[data-side=right][data-collapsible=offcanvas] .\\[\\[data-side\\=right\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-left-2{left:-.5rem}[data-side=right][data-state=collapsed] .\\[\\[data-side\\=right\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-w-resize{cursor:w-resize}a.\\[a\\&\\]\\:hover\\:bg-accent:hover{background-color:hsl(var(--accent))}a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover{background-color:hsl(var(--secondary) / .9)}a.\\[a\\&\\]\\:hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}`;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wf = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = L.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: i,
    iconNode: o,
    ...s
  }, l) => L.createElement(
    "svg",
    {
      ref: l,
      ...pv,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: wf("lucide", a),
      ...s
    },
    [
      ...o.map(([u, c]) => L.createElement(u, c)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = (e, t) => {
  const r = L.forwardRef(
    ({ className: n, ...a }, i) => L.createElement(gv, {
      ref: i,
      iconNode: t,
      className: wf(`lucide-${fv(e)}`, n),
      ...a
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mv = lr("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vv = lr("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = lr("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = lr("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = lr("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = lr("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = lr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = lr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function vt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Pr(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const yf = 6048e5, Sv = 864e5;
let Av = {};
function uo() {
  return Av;
}
function ba(e, t) {
  const r = uo(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = vt(e), i = a.getDay(), o = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function Wi(e) {
  return ba(e, { weekStartsOn: 1 });
}
function bf(e) {
  const t = vt(e), r = t.getFullYear(), n = Pr(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = Wi(n), i = Pr(e, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const o = Wi(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1;
}
function xc(e) {
  const t = vt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function kc(e) {
  const t = vt(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Ev(e, t) {
  const r = xc(e), n = xc(t), a = +r - kc(r), i = +n - kc(n);
  return Math.round((a - i) / Sv);
}
function Cv(e) {
  const t = bf(e), r = Pr(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Wi(r);
}
function Ov(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Tv(e) {
  if (!Ov(e) && typeof e != "number")
    return !1;
  const t = vt(e);
  return !isNaN(Number(t));
}
function Rv(e) {
  const t = vt(e), r = Pr(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Nv = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Pv = (e, t, r) => {
  let n;
  const a = Nv[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ho(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Iv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Uv = {
  date: Ho({
    formats: Iv,
    defaultWidth: "full"
  }),
  time: Ho({
    formats: jv,
    defaultWidth: "full"
  }),
  dateTime: Ho({
    formats: zv,
    defaultWidth: "full"
  })
}, Dv = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mv = (e, t, r, n) => Dv[e];
function Ln(e) {
  return (t, r) => {
    const n = r?.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, s = r?.width ? String(r.width) : o;
      a = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, s = r?.width ? String(r.width) : e.defaultWidth;
      a = e.values[s] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const Lv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Bv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Fv = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Jv = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Wv = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Qv = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Yv = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Hv = {
  ordinalNumber: Yv,
  era: Ln({
    values: Lv,
    defaultWidth: "wide"
  }),
  quarter: Ln({
    values: Bv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ln({
    values: Fv,
    defaultWidth: "wide"
  }),
  day: Ln({
    values: Jv,
    defaultWidth: "wide"
  }),
  dayPeriod: Ln({
    values: Wv,
    defaultWidth: "wide",
    formattingValues: Qv,
    defaultFormattingWidth: "wide"
  })
};
function Bn(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const o = i[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Vv(s, (f) => f.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Kv(s, (f) => f.test(o))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(u)
    ) : u;
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function Kv(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function Vv(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function qv(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const s = t.slice(a.length);
    return { value: o, rest: s };
  };
}
const Gv = /^(\d+)(th|st|nd|rd)?/i, Zv = /\d+/i, Xv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, _v = {
  any: [/^b/i, /^(a|c)/i]
}, $v = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, e0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, t0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, r0 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, n0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, a0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, i0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, o0 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, s0 = {
  ordinalNumber: qv({
    matchPattern: Gv,
    parsePattern: Zv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Bn({
    matchPatterns: Xv,
    defaultMatchWidth: "wide",
    parsePatterns: _v,
    defaultParseWidth: "any"
  }),
  quarter: Bn({
    matchPatterns: $v,
    defaultMatchWidth: "wide",
    parsePatterns: e0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Bn({
    matchPatterns: t0,
    defaultMatchWidth: "wide",
    parsePatterns: r0,
    defaultParseWidth: "any"
  }),
  day: Bn({
    matchPatterns: n0,
    defaultMatchWidth: "wide",
    parsePatterns: a0,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bn({
    matchPatterns: i0,
    defaultMatchWidth: "any",
    parsePatterns: o0,
    defaultParseWidth: "any"
  })
}, l0 = {
  code: "en-US",
  formatDistance: Pv,
  formatLong: Uv,
  formatRelative: Mv,
  localize: Hv,
  match: s0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function u0(e) {
  const t = vt(e);
  return Ev(t, Rv(t)) + 1;
}
function c0(e) {
  const t = vt(e), r = +Wi(t) - +Cv(t);
  return Math.round(r / yf) + 1;
}
function xf(e, t) {
  const r = vt(e), n = r.getFullYear(), a = uo(), i = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, o = Pr(e, 0);
  o.setFullYear(n + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = ba(o, t), l = Pr(e, 0);
  l.setFullYear(n, 0, i), l.setHours(0, 0, 0, 0);
  const u = ba(l, t);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= u.getTime() ? n : n - 1;
}
function d0(e, t) {
  const r = uo(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = xf(e, t), i = Pr(e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), ba(i, t);
}
function h0(e, t) {
  const r = vt(e), n = +ba(r, t) - +d0(r, t);
  return Math.round(n / yf) + 1;
}
function K(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Ft = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return K(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : K(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return K(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return K(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return K(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return K(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return K(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return K(a, t.length);
  }
}, Br = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Sc = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return Ft.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = xf(e, n), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const o = i % 100;
      return K(o, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : K(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = bf(e);
    return K(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return K(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return K(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return K(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ft.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return K(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const a = h0(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : K(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = c0(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : K(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ft.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = u0(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : K(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return K(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return K(i, t.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return K(a, t.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = Br.noon : n === 0 ? a = Br.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = Br.evening : n >= 12 ? a = Br.afternoon : n >= 4 ? a = Br.morning : a = Br.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Ft.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Ft.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : K(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : K(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ft.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ft.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ft.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ec(n);
      case "XXXX":
      case "XX":
        return mr(n);
      case "XXXXX":
      case "XXX":
      default:
        return mr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ec(n);
      case "xxxx":
      case "xx":
        return mr(n);
      case "xxxxx":
      case "xxx":
      default:
        return mr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ac(n, ":");
      case "OOOO":
      default:
        return "GMT" + mr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ac(n, ":");
      case "zzzz":
      default:
        return "GMT" + mr(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return K(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return K(n, t.length);
  }
};
function Ac(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(a) : r + String(a) + t + K(i, 2);
}
function Ec(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + K(Math.abs(e) / 60, 2) : mr(e, t);
}
function mr(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = K(Math.trunc(n / 60), 2), i = K(n % 60, 2);
  return r + a + t + i;
}
const Cc = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, kf = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, f0 = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return Cc(e, t);
  let i;
  switch (n) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Cc(n, t)).replace("{{time}}", kf(a, t));
}, p0 = {
  p: kf,
  P: f0
}, g0 = /^D+$/, m0 = /^Y+$/, v0 = ["D", "DD", "YY", "YYYY"];
function w0(e) {
  return g0.test(e);
}
function y0(e) {
  return m0.test(e);
}
function b0(e, t, r) {
  const n = x0(e, t, r);
  if (console.warn(n), v0.includes(e)) throw new RangeError(n);
}
function x0(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const k0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, S0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, A0 = /^'([^]*?)'?$/, E0 = /''/g, C0 = /[a-zA-Z]/;
function Oc(e, t, r) {
  const n = uo(), a = n.locale ?? l0, i = n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = vt(e);
  if (!Tv(s))
    throw new RangeError("Invalid time value");
  let l = t.match(S0).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const p = p0[f];
      return p(c, a.formatLong);
    }
    return c;
  }).join("").match(k0).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: O0(c) };
    if (Sc[f])
      return { isToken: !0, value: c };
    if (f.match(C0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: a
  };
  return l.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (y0(f) || w0(f)) && b0(f, t, String(e));
    const p = Sc[f[0]];
    return p(s, f, a.localize, u);
  }).join("");
}
function O0(e) {
  const t = e.match(A0);
  return t ? t[1].replace(E0, "'") : e;
}
function co(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
function T0(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function s(c) {
      try {
        u(n.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? i(c.value) : a(c.value).then(s, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
const R0 = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t);
class $l extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), this.name = r, this.context = n;
  }
}
class N0 extends $l {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class Tc extends $l {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Rc extends $l {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var qs;
(function(e) {
  e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(qs || (qs = {}));
class P0 {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'public-anon-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(t, { headers: r = {}, customFetch: n, region: a = qs.Any } = {}) {
    this.url = t, this.headers = r, this.region = a, this.fetch = R0(n);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   * @example
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(t) {
    return T0(this, arguments, void 0, function* (r, n = {}) {
      var a;
      let i, o;
      try {
        const { headers: s, method: l, body: u, signal: c, timeout: f } = n;
        let p = {}, { region: d } = n;
        d || (d = this.region);
        const v = new URL(`${this.url}/${r}`);
        d && d !== "any" && (p["x-region"] = d, v.searchParams.set("forceFunctionRegion", d));
        let w;
        u && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (p["Content-Type"] = "application/octet-stream", w = u) : typeof u == "string" ? (p["Content-Type"] = "text/plain", w = u) : typeof FormData < "u" && u instanceof FormData ? w = u : (p["Content-Type"] = "application/json", w = JSON.stringify(u)) : u && typeof u != "string" && !(typeof Blob < "u" && u instanceof Blob) && !(u instanceof ArrayBuffer) && !(typeof FormData < "u" && u instanceof FormData) ? w = JSON.stringify(u) : w = u;
        let x = c;
        f && (o = new AbortController(), i = setTimeout(() => o.abort(), f), c ? (x = o.signal, c.addEventListener("abort", () => o.abort())) : x = o.signal);
        const m = yield this.fetch(v.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, p), this.headers), s),
          body: w,
          signal: x
        }).catch((A) => {
          throw new N0(A);
        }), h = m.headers.get("x-relay-error");
        if (h && h === "true")
          throw new Tc(m);
        if (!m.ok)
          throw new Rc(m);
        let g = ((a = m.headers.get("Content-Type")) !== null && a !== void 0 ? a : "text/plain").split(";")[0].trim(), b;
        return g === "application/json" ? b = yield m.json() : g === "application/octet-stream" || g === "application/pdf" ? b = yield m.blob() : g === "text/event-stream" ? b = m : g === "multipart/form-data" ? b = yield m.formData() : b = yield m.text(), { data: b, error: null, response: m };
      } catch (s) {
        return {
          data: null,
          error: s,
          response: s instanceof Rc || s instanceof Tc ? s.context : void 0
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
var I0 = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
}, j0 = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example
  * ```ts
  * import PostgrestQueryBuilder from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'public-anon-key' }) }
  * )
  * ```
  */
  constructor(e) {
    var t, r, n;
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1, this.signal = e.signal, this.isMaybeSingle = (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.urlLengthLimit = (n = e.urlLengthLimit) !== null && n !== void 0 ? n : 8e3, e.fetch ? this.fetch = e.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  */
  setHeader(e, t) {
    return this.headers = new Headers(this.headers), this.headers.set(e, t), this;
  }
  then(e, t) {
    var r = this;
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
    const n = this.fetch;
    let a = n(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (i) => {
      let o = null, s = null, l = null, u = i.status, c = i.statusText;
      if (i.ok) {
        var f, p;
        if (r.method !== "HEAD") {
          var d;
          const m = await i.text();
          m === "" || (r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && (!((d = r.headers.get("Accept")) === null || d === void 0) && d.includes("application/vnd.pgrst.plan+text")) ? s = m : s = JSON.parse(m));
        }
        const w = (f = r.headers.get("Prefer")) === null || f === void 0 ? void 0 : f.match(/count=(exact|planned|estimated)/), x = (p = i.headers.get("content-range")) === null || p === void 0 ? void 0 : p.split("/");
        w && x && x.length > 1 && (l = parseInt(x[1])), r.isMaybeSingle && r.method === "GET" && Array.isArray(s) && (s.length > 1 ? (o = {
          code: "PGRST116",
          details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, s = null, l = null, u = 406, c = "Not Acceptable") : s.length === 1 ? s = s[0] : s = null);
      } else {
        var v;
        const w = await i.text();
        try {
          o = JSON.parse(w), Array.isArray(o) && i.status === 404 && (s = [], o = null, u = 200, c = "OK");
        } catch {
          i.status === 404 && w === "" ? (u = 204, c = "No Content") : o = { message: w };
        }
        if (o && r.isMaybeSingle && (!(o == null || (v = o.details) === null || v === void 0) && v.includes("0 rows")) && (o = null, u = 200, c = "OK"), o && r.shouldThrowOnError) throw new I0(o);
      }
      return {
        error: o,
        data: s,
        count: l,
        status: u,
        statusText: c
      };
    });
    return this.shouldThrowOnError || (a = a.catch((i) => {
      var o;
      let s = "", l = "", u = "";
      const c = i?.cause;
      if (c) {
        var f, p, d, v;
        const m = (f = c?.message) !== null && f !== void 0 ? f : "", h = (p = c?.code) !== null && p !== void 0 ? p : "";
        s = `${(d = i?.name) !== null && d !== void 0 ? d : "FetchError"}: ${i?.message}`, s += `

Caused by: ${(v = c?.name) !== null && v !== void 0 ? v : "Error"}: ${m}`, h && (s += ` (${h})`), c?.stack && (s += `
${c.stack}`);
      } else {
        var w;
        s = (w = i?.stack) !== null && w !== void 0 ? w : "";
      }
      const x = this.url.toString().length;
      return i?.name === "AbortError" || i?.code === "ABORT_ERR" ? (u = "", l = "Request was aborted (timeout or manual cancellation)", x > this.urlLengthLimit && (l += `. Note: Your request URL is ${x} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (c?.name === "HeadersOverflowError" || c?.code === "UND_ERR_HEADERS_OVERFLOW") && (u = "", l = "HTTP headers exceeded server limits (typically 16KB)", x > this.urlLengthLimit && (l += `. Your request URL is ${x} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        error: {
          message: `${(o = i?.name) !== null && o !== void 0 ? o : "FetchError"}: ${i?.message}`,
          details: s,
          hint: l,
          code: u
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), a.then(e, t);
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  */
  overrideTypes() {
    return this;
  }
}, z0 = class extends j0 {
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  */
  select(e) {
    let t = !1;
    const r = (e ?? "*").split("").map((n) => /\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)).join("");
    return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: n, referencedTable: a = n } = {}) {
    const i = a ? `${a}.order` : "order", o = this.url.searchParams.get(i);
    return this.url.searchParams.set(i, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `count`.
  *
  * @param count - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(n, `${e}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
    const a = typeof n > "u" ? "offset" : `${n}.offset`, i = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(a, `${e}`), this.url.searchParams.set(i, `${t - e + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  */
  maybeSingle() {
    return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  */
  explain({ analyze: e = !1, verbose: t = !1, settings: r = !1, buffers: n = !1, wal: a = !1, format: i = "text" } = {}) {
    var o;
    const s = [
      e ? "analyze" : null,
      t ? "verbose" : null,
      r ? "settings" : null,
      n ? "buffers" : null,
      a ? "wal" : null
    ].filter(Boolean).join("|"), l = (o = this.headers.get("Accept")) !== null && o !== void 0 ? o : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${l}"; options=${s};`), i === "json" ? this : this;
  }
  /**
  * Rollback the query.
  *
  * `data` will still be returned, but the query is not committed.
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param value - The maximum number of rows that can be affected
  */
  maxAffected(e) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this;
  }
};
const Nc = /* @__PURE__ */ new RegExp("[,()]");
var Kr = class extends z0 {
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  /**
  * Match only rows where `column` is greater than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  /**
  * Match only rows where `column` is greater than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  /**
  * Match only rows where `column` is less than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  /**
  * Match only rows where `column` is less than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-sensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  */
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-insensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  */
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-sensitively (using the `~` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexMatch(e, t) {
    return this.url.searchParams.append(e, `match.${t}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-insensitively (using the `~*` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexIMatch(e, t) {
    return this.url.searchParams.append(e, `imatch.${t}`), this;
  }
  /**
  * Match only rows where `column` IS `value`.
  *
  * For non-boolean columns, this is only relevant for checking if the value of
  * `column` is NULL by setting `value` to `null`.
  *
  * For boolean columns, you can also set `value` to `true` or `false` and it
  * will behave the same way as `.eq()`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(e, t) {
    return this.url.searchParams.append(e, `isdistinct.${t}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  in(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && Nc.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && Nc.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `not.in.(${r})`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * `column` contains every element appearing in `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  */
  contains(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * every element appearing in `column` is contained by `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  */
  containedBy(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is greater than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or greater than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is less than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or less than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where `column` is
  * mutually exclusive to `range` and there can be no element between the two
  * ranges.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  /**
  * Only relevant for array and range columns. Match only rows where
  * `column` and `value` have an element in common.
  *
  * @param column - The array or range column to filter on
  * @param value - The array or range value to filter with
  */
  overlaps(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
  }
  /**
  * Only relevant for text and tsvector columns. Match only rows where
  * `column` matches the query string in `query`.
  *
  * @param column - The text or tsvector column to filter on
  * @param query - The query text to match with
  * @param options - Named parameters
  * @param options.config - The text search configuration to use
  * @param options.type - Change how the `query` text is interpreted
  */
  textSearch(e, t, { config: r, type: n } = {}) {
    let a = "";
    n === "plain" ? a = "pl" : n === "phrase" ? a = "ph" : n === "websearch" && (a = "w");
    const i = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${a}fts${i}.${t}`), this;
  }
  /**
  * Match only rows where each column in `query` keys is equal to its
  * associated value. Shorthand for multiple `.eq()`s.
  *
  * @param query - The object to filter with, with column names as keys mapped
  * to their filter values
  */
  match(e) {
    return Object.entries(e).forEach(([t, r]) => {
      this.url.searchParams.append(t, `eq.${r}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  */
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  */
  or(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = r ? `${r}.or` : "or";
    return this.url.searchParams.append(n, `(${e})`), this;
  }
  /**
  * Match only rows which satisfy the filter. This is an escape hatch - you
  * should use the specific filter methods wherever possible.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to filter with, following PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  */
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
}, U0 = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @example
  * ```ts
  * import PostgrestQueryBuilder from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'public-anon-key' } }
  * )
  * ```
  */
  constructor(e, { headers: t = {}, schema: r, fetch: n, urlLengthLimit: a = 8e3 }) {
    this.url = e, this.headers = new Headers(t), this.schema = r, this.fetch = n, this.urlLengthLimit = a;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  */
  select(e, t) {
    const { head: r = !1, count: n } = t ?? {}, a = r ? "HEAD" : "GET";
    let i = !1;
    const o = (e ?? "*").split("").map((u) => /\s/.test(u) && !i ? "" : (u === '"' && (i = !i), u)).join(""), { url: s, headers: l } = this.cloneRequestState();
    return s.searchParams.set("select", o), n && l.append("Prefer", `count=${n}`), new Kr({
      method: a,
      url: s,
      headers: l,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  */
  insert(e, { count: t, defaultToNull: r = !0 } = {}) {
    var n;
    const a = "POST", { url: i, headers: o } = this.cloneRequestState();
    if (t && o.append("Prefer", `count=${t}`), r || o.append("Prefer", "missing=default"), Array.isArray(e)) {
      const s = e.reduce((l, u) => l.concat(Object.keys(u)), []);
      if (s.length > 0) {
        const l = [...new Set(s)].map((u) => `"${u}"`);
        i.searchParams.set("columns", l.join(","));
      }
    }
    return new Kr({
      method: a,
      url: i,
      headers: o,
      schema: this.schema,
      body: e,
      fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  */
  upsert(e, { onConflict: t, ignoreDuplicates: r = !1, count: n, defaultToNull: a = !0 } = {}) {
    var i;
    const o = "POST", { url: s, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), t !== void 0 && s.searchParams.set("on_conflict", t), n && l.append("Prefer", `count=${n}`), a || l.append("Prefer", "missing=default"), Array.isArray(e)) {
      const u = e.reduce((c, f) => c.concat(Object.keys(f)), []);
      if (u.length > 0) {
        const c = [...new Set(u)].map((f) => `"${f}"`);
        s.searchParams.set("columns", c.join(","));
      }
    }
    return new Kr({
      method: o,
      url: s,
      headers: l,
      schema: this.schema,
      body: e,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  update(e, { count: t } = {}) {
    var r;
    const n = "PATCH", { url: a, headers: i } = this.cloneRequestState();
    return t && i.append("Prefer", `count=${t}`), new Kr({
      method: n,
      url: a,
      headers: i,
      schema: this.schema,
      body: e,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  delete({ count: e } = {}) {
    var t;
    const r = "DELETE", { url: n, headers: a } = this.cloneRequestState();
    return e && a.append("Prefer", `count=${e}`), new Kr({
      method: r,
      url: n,
      headers: a,
      schema: this.schema,
      fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function D0(e, t) {
  if (xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M0(e) {
  var t = D0(e, "string");
  return xa(t) == "symbol" ? t : t + "";
}
function L0(e, t, r) {
  return (t = M0(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Pc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pc(Object(r), !0).forEach(function(n) {
      L0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var B0 = class Sf {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @example
  * ```ts
  * import PostgrestClient from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'public-anon-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(t, { headers: r = {}, schema: n, fetch: a, timeout: i, urlLengthLimit: o = 8e3 } = {}) {
    this.url = t, this.headers = new Headers(r), this.schemaName = n, this.urlLengthLimit = o;
    const s = a ?? globalThis.fetch;
    i !== void 0 && i > 0 ? this.fetch = (l, u) => {
      const c = new AbortController(), f = setTimeout(() => c.abort(), i), p = u?.signal;
      if (p) {
        if (p.aborted)
          return clearTimeout(f), s(l, u);
        const d = () => {
          clearTimeout(f), c.abort();
        };
        return p.addEventListener("abort", d, { once: !0 }), s(l, $a($a({}, u), {}, { signal: c.signal })).finally(() => {
          clearTimeout(f), p.removeEventListener("abort", d);
        });
      }
      return s(l, $a($a({}, u), {}, { signal: c.signal })).finally(() => clearTimeout(f));
    } : this.fetch = s;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new U0(new URL(`${this.url}/${t}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(t) {
    return new Sf(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  */
  rpc(t, r = {}, { head: n = !1, get: a = !1, count: i } = {}) {
    var o;
    let s;
    const l = new URL(`${this.url}/rpc/${t}`);
    let u;
    const c = (d) => d !== null && typeof d == "object" && (!Array.isArray(d) || d.some(c)), f = n && Object.values(r).some(c);
    f ? (s = "POST", u = r) : n || a ? (s = n ? "HEAD" : "GET", Object.entries(r).filter(([d, v]) => v !== void 0).map(([d, v]) => [d, Array.isArray(v) ? `{${v.join(",")}}` : `${v}`]).forEach(([d, v]) => {
      l.searchParams.append(d, v);
    })) : (s = "POST", u = r);
    const p = new Headers(this.headers);
    return f ? p.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && p.set("Prefer", `count=${i}`), new Kr({
      method: s,
      url: l,
      headers: p,
      schema: this.schemaName,
      body: u,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class F0 {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const r = globalThis.process;
    if (r) {
      const n = r.versions;
      if (n && n.node) {
        const a = n.node, i = parseInt(a.replace(/^v/, "").split(".")[0]);
        return i >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${i} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${i} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @example
   * ```ts
   * const WS = WebSocketFactory.getWebSocketConstructor()
   * const socket = new WS('wss://realtime.supabase.co/socket')
   * ```
   */
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor)
      return t.constructor;
    let r = t.error || "WebSocket not supported in this environment.";
    throw t.workaround && (r += `

Suggested solution: ${t.workaround}`), new Error(r);
  }
  /**
   * Creates a WebSocket using the detected constructor.
   *
   * @example
   * ```ts
   * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
   * ```
   */
  static createWebSocket(t, r) {
    const n = this.getWebSocketConstructor();
    return new n(t, r);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @example
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.warn('Falling back to long polling')
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const J0 = "2.95.3", W0 = `realtime-js/${J0}`, Q0 = "1.0.0", Af = "2.0.0", Ic = Af, Gs = 1e4, Y0 = 1e3, H0 = 100;
var Qt;
(function(e) {
  e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
})(Qt || (Qt = {}));
var fe;
(function(e) {
  e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
})(fe || (fe = {}));
var ht;
(function(e) {
  e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
})(ht || (ht = {}));
var Zs;
(function(e) {
  e.websocket = "websocket";
})(Zs || (Zs = {}));
var wr;
(function(e) {
  e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
})(wr || (wr = {}));
class K0 {
  constructor(t) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = t ?? [];
  }
  encode(t, r) {
    if (t.event === this.BROADCAST_EVENT && !(t.payload instanceof ArrayBuffer) && typeof t.payload.event == "string")
      return r(this._binaryEncodeUserBroadcastPush(t));
    let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var r;
    return this._isArrayBuffer((r = t.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(t) : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var r, n;
    const a = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, a);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const a = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}, o = new TextEncoder().encode(JSON.stringify(a)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var a, i;
    const o = t.topic, s = (a = t.ref) !== null && a !== void 0 ? a : "", l = (i = t.join_ref) !== null && i !== void 0 ? i : "", u = t.payload.event, c = this.allowedMetadataKeys ? this._pick(t.payload, this.allowedMetadataKeys) : {}, f = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (s.length > 255)
      throw new Error(`ref length ${s.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (f.length > 255)
      throw new Error(`metadata length ${f.length} exceeds maximum of 255`);
    const p = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + s.length + o.length + u.length + f.length, d = new ArrayBuffer(this.HEADER_LENGTH + p);
    let v = new DataView(d), w = 0;
    v.setUint8(w++, this.KINDS.userBroadcastPush), v.setUint8(w++, l.length), v.setUint8(w++, s.length), v.setUint8(w++, o.length), v.setUint8(w++, u.length), v.setUint8(w++, f.length), v.setUint8(w++, r), Array.from(l, (m) => v.setUint8(w++, m.charCodeAt(0))), Array.from(s, (m) => v.setUint8(w++, m.charCodeAt(0))), Array.from(o, (m) => v.setUint8(w++, m.charCodeAt(0))), Array.from(u, (m) => v.setUint8(w++, m.charCodeAt(0))), Array.from(f, (m) => v.setUint8(w++, m.charCodeAt(0)));
    var x = new Uint8Array(d.byteLength + n.byteLength);
    return x.set(new Uint8Array(d), 0), x.set(new Uint8Array(n), d.byteLength), x.buffer;
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t), [a, i, o, s, l] = n;
      return r({ join_ref: a, ref: i, topic: o, event: s, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t), n = r.getUint8(0), a = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, a);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const a = r.getUint8(1), i = r.getUint8(2), o = r.getUint8(3), s = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = n.decode(t.slice(l, l + a));
    l = l + a;
    const c = n.decode(t.slice(l, l + i));
    l = l + i;
    const f = n.decode(t.slice(l, l + o));
    l = l + o;
    const p = t.slice(l, t.byteLength), d = s === this.JSON_ENCODING ? JSON.parse(n.decode(p)) : p, v = {
      type: this.BROADCAST_EVENT,
      event: c,
      payload: d
    };
    return o > 0 && (v.meta = JSON.parse(f)), { join_ref: null, ref: null, topic: u, event: this.BROADCAST_EVENT, payload: v };
  }
  _isArrayBuffer(t) {
    var r;
    return t instanceof ArrayBuffer || ((r = t?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
  }
  _pick(t, r) {
    return !t || typeof t != "object" ? {} : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
class Ef {
  constructor(t, r) {
    this.callback = t, this.timerCalc = r, this.timer = void 0, this.tries = 0, this.callback = t, this.timerCalc = r;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var Z;
(function(e) {
  e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(Z || (Z = {}));
const jc = (e, t, r = {}) => {
  var n;
  const a = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
  return t ? Object.keys(t).reduce((i, o) => (i[o] = V0(o, e, t, a), i), {}) : {};
}, V0 = (e, t, r, n) => {
  const a = t.find((s) => s.name === e), i = a?.type, o = r[e];
  return i && !n.includes(i) ? Cf(i, o) : Xs(o);
}, Cf = (e, t) => {
  if (e.charAt(0) === "_") {
    const r = e.slice(1, e.length);
    return X0(t, r);
  }
  switch (e) {
    case Z.bool:
      return q0(t);
    case Z.float4:
    case Z.float8:
    case Z.int2:
    case Z.int4:
    case Z.int8:
    case Z.numeric:
    case Z.oid:
      return G0(t);
    case Z.json:
    case Z.jsonb:
      return Z0(t);
    case Z.timestamp:
      return _0(t);
    case Z.abstime:
    case Z.date:
    case Z.daterange:
    case Z.int4range:
    case Z.int8range:
    case Z.money:
    case Z.reltime:
    case Z.text:
    case Z.time:
    case Z.timestamptz:
    case Z.timetz:
    case Z.tsrange:
    case Z.tstzrange:
      return Xs(t);
    default:
      return Xs(t);
  }
}, Xs = (e) => e, q0 = (e) => {
  switch (e) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return e;
  }
}, G0 = (e) => {
  if (typeof e == "string") {
    const t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return e;
}, Z0 = (e) => {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e;
}, X0 = (e, t) => {
  if (typeof e != "string")
    return e;
  const r = e.length - 1, n = e[r];
  if (e[0] === "{" && n === "}") {
    let i;
    const o = e.slice(1, r);
    try {
      i = JSON.parse("[" + o + "]");
    } catch {
      i = o ? o.split(",") : [];
    }
    return i.map((s) => Cf(t, s));
  }
  return e;
}, _0 = (e) => typeof e == "string" ? e.replace(" ", "T") : e, Of = (e) => {
  const t = new URL(e);
  return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast", t.href;
};
class Ko {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(t, r, n = {}, a = Gs) {
    this.channel = t, this.event = r, this.payload = n, this.timeout = a, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(t) {
    this.timeout = t, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, r) {
    var n;
    return this._hasReceived(t) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({ status: t, callback: r }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const t = (r) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = r, this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, t), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(t, r) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: t, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: t, response: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var zc;
(function(e) {
  e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(zc || (zc = {}));
class ta {
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @example
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(t, r) {
    this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const n = r?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(n.state, {}, (a) => {
      const { onJoin: i, onLeave: o, onSync: s } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = ta.syncState(this.state, a, i, o), this.pendingDiffs.forEach((l) => {
        this.state = ta.syncDiff(this.state, l, i, o);
      }), this.pendingDiffs = [], s();
    }), this.channel._on(n.diff, {}, (a) => {
      const { onJoin: i, onLeave: o, onSync: s } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(a) : (this.state = ta.syncDiff(this.state, a, i, o), s());
    }), this.onJoin((a, i, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: a,
        currentPresences: i,
        newPresences: o
      });
    }), this.onLeave((a, i, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: a,
        currentPresences: i,
        leftPresences: o
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(t, r, n, a) {
    const i = this.cloneDeep(t), o = this.transformState(r), s = {}, l = {};
    return this.map(i, (u, c) => {
      o[u] || (l[u] = c);
    }), this.map(o, (u, c) => {
      const f = i[u];
      if (f) {
        const p = c.map((x) => x.presence_ref), d = f.map((x) => x.presence_ref), v = c.filter((x) => d.indexOf(x.presence_ref) < 0), w = f.filter((x) => p.indexOf(x.presence_ref) < 0);
        v.length > 0 && (s[u] = v), w.length > 0 && (l[u] = w);
      } else
        s[u] = c;
    }), this.syncDiff(i, { joins: s, leaves: l }, n, a);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(t, r, n, a) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves)
    };
    return n || (n = () => {
    }), a || (a = () => {
    }), this.map(i, (s, l) => {
      var u;
      const c = (u = t[s]) !== null && u !== void 0 ? u : [];
      if (t[s] = this.cloneDeep(l), c.length > 0) {
        const f = t[s].map((d) => d.presence_ref), p = c.filter((d) => f.indexOf(d.presence_ref) < 0);
        t[s].unshift(...p);
      }
      n(s, c, l);
    }), this.map(o, (s, l) => {
      let u = t[s];
      if (!u)
        return;
      const c = l.map((f) => f.presence_ref);
      u = u.filter((f) => c.indexOf(f.presence_ref) < 0), t[s] = u, a(s, u, l), u.length === 0 && delete t[s];
    }), t;
  }
  /** @internal */
  static map(t, r) {
    return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(t) {
    return t = this.cloneDeep(t), Object.getOwnPropertyNames(t).reduce((r, n) => {
      const a = t[n];
      return "metas" in a ? r[n] = a.metas.map((i) => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : r[n] = a, r;
    }, {});
  }
  /** @internal */
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  /** @internal */
  onJoin(t) {
    this.caller.onJoin = t;
  }
  /** @internal */
  onLeave(t) {
    this.caller.onLeave = t;
  }
  /** @internal */
  onSync(t) {
    this.caller.onSync = t;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Uc;
(function(e) {
  e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(Uc || (Uc = {}));
var ra;
(function(e) {
  e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(ra || (ra = {}));
var At;
(function(e) {
  e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(At || (At = {}));
class ln {
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(t, r = { config: {} }, n) {
    var a, i;
    if (this.topic = t, this.params = r, this.socket = n, this.bindings = {}, this.state = fe.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.timeout = this.socket.timeout, this.joinPush = new Ko(this, ht.join, this.params, this.timeout), this.rejoinTimer = new Ef(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = fe.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = fe.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = fe.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = fe.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = fe.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(ht.reply, {}, (o, s) => {
      this._trigger(this._replyEventName(s), o);
    }), this.presence = new ta(this), this.broadcastEndpointURL = Of(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((i = (a = this.params.config) === null || a === void 0 ? void 0 : a.broadcast) === null || i === void 0) && i.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(t, r = this.timeout) {
    var n, a, i;
    if (this.socket.isConnected() || this.socket.connect(), this.state == fe.closed) {
      const { config: { broadcast: o, presence: s, private: l } } = this.params, u = (a = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((d) => d.filter)) !== null && a !== void 0 ? a : [], c = !!this.bindings[ra.PRESENCE] && this.bindings[ra.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0, f = {}, p = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, s), { enabled: c }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (f.access_token = this.socket.accessTokenValue), this._onError((d) => t?.(At.CHANNEL_ERROR, d)), this._onClose(() => t?.(At.CLOSED)), this.updateJoinPayload(Object.assign({ config: p }, f)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({ postgres_changes: d }) => {
        var v;
        if (this.socket._isManualToken() || this.socket.setAuth(), d === void 0) {
          t?.(At.SUBSCRIBED);
          return;
        } else {
          const w = this.bindings.postgres_changes, x = (v = w?.length) !== null && v !== void 0 ? v : 0, m = [];
          for (let h = 0; h < x; h++) {
            const g = w[h], { filter: { event: b, schema: A, table: k, filter: C } } = g, N = d && d[h];
            if (N && N.event === b && ln.isFilterValueEqual(N.schema, A) && ln.isFilterValueEqual(N.table, k) && ln.isFilterValueEqual(N.filter, C))
              m.push(Object.assign(Object.assign({}, g), { id: N.id }));
            else {
              this.unsubscribe(), this.state = fe.errored, t?.(At.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = m, t && t(At.SUBSCRIBED);
          return;
        }
      }).receive("error", (d) => {
        this.state = fe.errored, t?.(At.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")));
      }).receive("timeout", () => {
        t?.(At.TIMED_OUT);
      });
    }
    return this;
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   */
  async track(t, r = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: t
    }, r.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   */
  async untrack(t = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, t);
  }
  on(t, r, n) {
    return this.state === fe.joined && t === ra.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(t, r, n);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(t, r, n = {}) {
    var a;
    if (r == null)
      return Promise.reject("Payload is required for httpSend()");
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
      method: "POST",
      headers: i,
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: t,
            payload: r,
            private: this.private
          }
        ]
      })
    }, s = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (a = n.timeout) !== null && a !== void 0 ? a : this.timeout);
    if (s.status === 202)
      return { success: !0 };
    let l = s.statusText;
    try {
      const u = await s.json();
      l = u.error || u.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(t, r = {}) {
    var n, a;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: i, payload: o } = t, s = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (s.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: s,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
        return await ((a = u.body) === null || a === void 0 ? void 0 : a.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, s, l;
        const u = this._push(t.type, t, r.timeout || this.timeout);
        t.type === "broadcast" && !(!((l = (s = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || s === void 0 ? void 0 : s.broadcast) === null || l === void 0) && l.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   */
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(t = this.timeout) {
    this.state = fe.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(ht.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((a) => {
      n = new Ko(this, ht.leave, {}, t), n.receive("ok", () => {
        r(), a("ok");
      }).receive("timeout", () => {
        r(), a("timed out");
      }).receive("error", () => {
        a("error");
      }), n.send(), this._canPush() || n.trigger("ok", {});
    }).finally(() => {
      n?.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = fe.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(t, r, n) {
    const a = new AbortController(), i = setTimeout(() => a.abort(), n), o = await this.socket.fetch(t, Object.assign(Object.assign({}, r), { signal: a.signal }));
    return clearTimeout(i), o;
  }
  /** @internal */
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let a = new Ko(this, t, r, n);
    return this._canPush() ? a.send() : this._addToPushBuffer(a), a;
  }
  /** @internal */
  _addToPushBuffer(t) {
    if (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > H0) {
      const r = this.pushBuffer.shift();
      r && (r.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${r.event}`, r.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(t, r, n) {
    return r;
  }
  /** @internal */
  _isMember(t) {
    return this.topic === t;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(t, r, n) {
    var a, i;
    const o = t.toLocaleLowerCase(), { close: s, error: l, leave: u, join: c } = ht;
    if (n && [s, l, u, c].indexOf(o) >= 0 && n !== this._joinRef())
      return;
    let p = this._onMessage(o, r, n);
    if (r && !p)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (a = this.bindings.postgres_changes) === null || a === void 0 || a.filter((d) => {
      var v, w, x;
      return ((v = d.filter) === null || v === void 0 ? void 0 : v.event) === "*" || ((x = (w = d.filter) === null || w === void 0 ? void 0 : w.event) === null || x === void 0 ? void 0 : x.toLocaleLowerCase()) === o;
    }).map((d) => d.callback(p, n)) : (i = this.bindings[o]) === null || i === void 0 || i.filter((d) => {
      var v, w, x, m, h, g;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in d) {
          const b = d.id, A = (v = d.filter) === null || v === void 0 ? void 0 : v.event;
          return b && ((w = r.ids) === null || w === void 0 ? void 0 : w.includes(b)) && (A === "*" || A?.toLocaleLowerCase() === ((x = r.data) === null || x === void 0 ? void 0 : x.type.toLocaleLowerCase()));
        } else {
          const b = (h = (m = d?.filter) === null || m === void 0 ? void 0 : m.event) === null || h === void 0 ? void 0 : h.toLocaleLowerCase();
          return b === "*" || b === ((g = r?.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase());
        }
      else
        return d.type.toLocaleLowerCase() === o;
    }).map((d) => {
      if (typeof p == "object" && "ids" in p) {
        const v = p.data, { schema: w, table: x, commit_timestamp: m, type: h, errors: g } = v;
        p = Object.assign(Object.assign({}, {
          schema: w,
          table: x,
          commit_timestamp: m,
          eventType: h,
          new: {},
          old: {},
          errors: g
        }), this._getPayloadRecords(v));
      }
      d.callback(p, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === fe.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === fe.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === fe.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === fe.leaving;
  }
  /** @internal */
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  /** @internal */
  _on(t, r, n) {
    const a = t.toLocaleLowerCase(), i = {
      type: a,
      filter: r,
      callback: n
    };
    return this.bindings[a] ? this.bindings[a].push(i) : this.bindings[a] = [i], this;
  }
  /** @internal */
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter((a) => {
      var i;
      return !(((i = a.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === n && ln.isEqual(a.filter, r));
    })), this;
  }
  /** @internal */
  static isEqual(t, r) {
    if (Object.keys(t).length !== Object.keys(r).length)
      return !1;
    for (const n in t)
      if (t[n] !== r[n])
        return !1;
    return !0;
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(t, r) {
    return (t ?? void 0) === (r ?? void 0);
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(t) {
    this._on(ht.close, {}, t);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(t) {
    this._on(ht.error, {}, (r) => t(r));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(t = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = fe.joining, this.joinPush.resend(t));
  }
  /** @internal */
  _getPayloadRecords(t) {
    const r = {
      new: {},
      old: {}
    };
    return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = jc(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (r.old = jc(t.columns, t.old_record)), r;
  }
}
const Vo = () => {
}, ei = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, $0 = [1e3, 2e3, 5e3, 1e4], ew = 1e4, tw = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class rw {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(t, r) {
    var n;
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Gs, this.transport = null, this.heartbeatIntervalMs = ei.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Vo, this.ref = 0, this.reconnectTimer = null, this.vsn = Ic, this.logger = Vo, this.conn = null, this.sendBuffer = [], this.serializer = new K0(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._heartbeatSentAt = null, this._resolveFetch = (a) => a ? (...i) => a(...i) : (...i) => fetch(...i), !(!((n = r?.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey, this.endPoint = `${t}/${Zs.websocket}`, this.httpEndpoint = Of(t), this._initializeOptions(r), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(r?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = F0.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const r = t.message;
          throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(t, r) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(n), this._setConnectionState("disconnected");
        }, typeof this.conn.close == "function" && (t ? this.conn.close(t, r ?? "") : this.conn.close()), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return r === "ok" && this._remove(t), this.channels.length === 0 && this.disconnect(), r;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return this.channels = [], this.disconnect(), t;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(t, r, n) {
    this.logger(t, r, n);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Qt.connecting:
        return wr.Connecting;
      case Qt.open:
        return wr.Open;
      case Qt.closing:
        return wr.Closing;
      default:
        return wr.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === wr.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   */
  channel(t, r = { config: {} }) {
    const n = `realtime:${t}`, a = this.getChannels().find((i) => i.topic === n);
    if (a)
      return a;
    {
      const i = new ln(`realtime:${t}`, r, this);
      return this.channels.push(i), i;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(t) {
    const { topic: r, event: n, payload: a, ref: i } = t, o = () => {
      this.encode(t, (s) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(s);
      });
    };
    this.log("push", `${r} ${n} (${i})`, a), this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   */
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this._heartbeatSentAt = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      this._wasManualDisconnect = !1, (t = this.conn) === null || t === void 0 || t.close(Y0, "heartbeat timeout"), setTimeout(() => {
        var r;
        this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout();
      }, ei.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this._heartbeatSentAt = Date.now(), this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
    this._setAuthSafely("heartbeat");
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   */
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let t = this.ref + 1;
    return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(t) {
    let r = this.channels.find((n) => n.topic === t && (n._isJoined() || n._isJoining()));
    r && (this.log("transport", `leaving duplicate topic "${t}"`), r.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(t) {
    this.channels = this.channels.filter((r) => r.topic !== t.topic);
  }
  /** @internal */
  _onConnMessage(t) {
    this.decode(t.data, (r) => {
      if (r.topic === "phoenix" && r.event === "phx_reply" && r.ref && r.ref === this.pendingHeartbeatRef) {
        const u = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : void 0;
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error", u);
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
        this._heartbeatSentAt = null, this.pendingHeartbeatRef = null;
      }
      const { topic: n, event: a, payload: i, ref: o } = r, s = o ? `(${o})` : "", l = i.status || "";
      this.log("receive", `${l} ${n} ${a} ${s}`.trim(), i), this.channels.filter((u) => u._isMember(n)).forEach((u) => u._trigger(a, i, o)), this._triggerStateCallbacks("message", r);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(t) {
    var r;
    t === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : t === "reconnect" && ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (t) => this._onConnError(t), this.conn.onmessage = (t) => this._onConnMessage(t), this.conn.onclose = (t) => this._onConnClose(t), this.conn.readyState === Qt.open && this._onConnOpen());
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === Qt.open || this.conn.readyState === Qt.connecting)
        try {
          this.conn.close();
        } catch (t) {
          this.log("error", "Error closing connection", t);
        }
      this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null;
    }
    this._clearAllTimers(), this._terminateWorker(), this.channels.forEach((t) => t.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      this.flushSendBuffer();
    }).catch((r) => {
      this.log("error", "error waiting for auth on connect", r), this.flushSendBuffer();
    }), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(t), this.workerRef.onerror = (r) => {
      this.log("worker", "worker error", r.message), this._terminateWorker();
    }, this.workerRef.onmessage = (r) => {
      r.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _onConnClose(t) {
    var r;
    this._setConnectionState("disconnected"), this.log("transport", "close", t), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout(), this._triggerStateCallbacks("close", t);
  }
  /** @internal */
  _onConnError(t) {
    this._setConnectionState("disconnected"), this.log("transport", `${t}`), this._triggerChanError(), this._triggerStateCallbacks("error", t);
    try {
      this.heartbeatCallback("error");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(ht.error));
  }
  /** @internal */
  _appendParams(t, r) {
    if (Object.keys(r).length === 0)
      return t;
    const n = t.match(/\?/) ? "&" : "?", a = new URLSearchParams(r);
    return `${t}${n}${a}`;
  }
  _workerObjectUrl(t) {
    let r;
    if (t)
      r = t;
    else {
      const n = new Blob([tw], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(t, r = !1) {
    this._connectionState = t, t === "connecting" ? this._wasManualDisconnect = !1 : t === "disconnecting" && (this._wasManualDisconnect = r);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(t = null) {
    let r, n = !1;
    if (t)
      r = t, n = !0;
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (a) {
        this.log("error", "Error fetching access token from callback", a), r = this.accessTokenValue;
      }
    else
      r = this.accessTokenValue;
    n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((a) => {
      const i = {
        access_token: r,
        version: W0
      };
      r && a.updateJoinPayload(i), a.joinedOnce && a._isJoined() && a._push(ht.access_token, {
        access_token: r
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(t = "general") {
    this._isManualToken() || this.setAuth().catch((r) => {
      this.log("error", `Error setting auth in ${t}`, r);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(t, r) {
    try {
      this.stateChangeCallbacks[t].forEach((n) => {
        try {
          n(r);
        } catch (a) {
          this.log("error", `error in ${t} callback`, a);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new Ef(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, ei.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(t) {
    var r, n, a, i, o, s, l, u, c, f, p, d;
    switch (this.transport = (r = t?.transport) !== null && r !== void 0 ? r : null, this.timeout = (n = t?.timeout) !== null && n !== void 0 ? n : Gs, this.heartbeatIntervalMs = (a = t?.heartbeatIntervalMs) !== null && a !== void 0 ? a : ei.HEARTBEAT_INTERVAL, this.worker = (i = t?.worker) !== null && i !== void 0 ? i : !1, this.accessToken = (o = t?.accessToken) !== null && o !== void 0 ? o : null, this.heartbeatCallback = (s = t?.heartbeatCallback) !== null && s !== void 0 ? s : Vo, this.vsn = (l = t?.vsn) !== null && l !== void 0 ? l : Ic, t?.params && (this.params = t.params), t?.logger && (this.logger = t.logger), (t?.logLevel || t?.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (u = t?.reconnectAfterMs) !== null && u !== void 0 ? u : (v) => $0[v - 1] || ew, this.vsn) {
      case Q0:
        this.encode = (c = t?.encode) !== null && c !== void 0 ? c : (v, w) => w(JSON.stringify(v)), this.decode = (f = t?.decode) !== null && f !== void 0 ? f : (v, w) => w(JSON.parse(v));
        break;
      case Af:
        this.encode = (p = t?.encode) !== null && p !== void 0 ? p : this.serializer.encode.bind(this.serializer), this.decode = (d = t?.decode) !== null && d !== void 0 ? d : this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t?.workerUrl;
    }
  }
}
var ka = class extends Error {
  constructor(e, t) {
    super(e), this.name = "IcebergError", this.status = t.status, this.icebergType = t.icebergType, this.icebergCode = t.icebergCode, this.details = t.details, this.isCommitStateUnknown = t.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(t.status) && t.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function nw(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [a, i] of Object.entries(r))
      i !== void 0 && n.searchParams.set(a, i);
  return n.toString();
}
async function aw(e) {
  return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function iw(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: n,
      query: a,
      body: i,
      headers: o
    }) {
      const s = nw(e.baseUrl, n, a), l = await aw(e.auth), u = await t(s, {
        method: r,
        headers: {
          ...i ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: i ? JSON.stringify(i) : void 0
      }), c = await u.text(), f = (u.headers.get("content-type") || "").includes("application/json"), p = f && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const d = f ? p : void 0, v = d?.error;
        throw new ka(
          v?.message ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: v?.type,
            icebergCode: v?.code,
            details: d
          }
        );
      }
      return { status: u.status, headers: u.headers, data: p };
    }
  };
}
function ti(e) {
  return e.join("");
}
var ow = class {
  constructor(e, t = "") {
    this.client = e, this.prefix = t;
  }
  async listNamespaces(e) {
    const t = e ? { parent: ti(e.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: t
    })).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: r
    })).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${ti(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${ti(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${ti(e.namespace)}`
      }), !0;
    } catch (t) {
      if (t instanceof ka && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof ka && r.status === 409)
        return;
      throw r;
    }
  }
};
function Fr(e) {
  return e.join("");
}
var sw = class {
  constructor(e, t = "", r) {
    this.client = e, this.prefix = t, this.accessDelegation = r;
  }
  async listTables(e) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Fr(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Fr(e.namespace)}/tables`,
      body: t,
      headers: r
    })).data.metadata;
  }
  async updateTable(e, t) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Fr(e.namespace)}/tables/${e.name}`,
      body: t
    });
    return {
      "metadata-location": r.data["metadata-location"],
      metadata: r.data.metadata
    };
  }
  async dropTable(e, t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Fr(e.namespace)}/tables/${e.name}`,
      query: { purgeRequested: String(t?.purge ?? !1) }
    });
  }
  async loadTable(e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Fr(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    const t = {};
    this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Fr(e.namespace)}/tables/${e.name}`,
        headers: t
      }), !0;
    } catch (r) {
      if (r instanceof ka && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (r) {
      if (r instanceof ka && r.status === 409)
        return await this.loadTable({ namespace: e.namespace, name: t.name });
      throw r;
    }
  }
}, lw = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(e) {
    let t = "v1";
    e.catalogName && (t += `/${e.catalogName}`);
    const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
    this.client = iw({
      baseUrl: r,
      auth: e.auth,
      fetchImpl: e.fetch
    }), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new ow(this.client, t), this.tableOps = new sw(this.client, t, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(e) {
    return this.namespaceOps.listNamespaces(e);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(e, t) {
    return this.namespaceOps.createNamespace(e, t);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(e) {
    await this.namespaceOps.dropNamespace(e);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(e) {
    return this.namespaceOps.loadNamespaceMetadata(e);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(e) {
    return this.tableOps.listTables(e);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(e, t) {
    return this.tableOps.createTable(e, t);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(e, t) {
    return this.tableOps.updateTable(e, t);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(e, t) {
    await this.tableOps.dropTable(e, t);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(e) {
    return this.tableOps.loadTable(e);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(e) {
    return this.namespaceOps.namespaceExists(e);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(e) {
    return this.tableOps.tableExists(e);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(e, t) {
    return this.namespaceOps.createNamespaceIfNotExists(e, t);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(e, t) {
    return this.tableOps.createTableIfNotExists(e, t);
  }
}, ho = class extends Error {
  constructor(e, t = "storage", r, n) {
    super(e), this.__isStorageError = !0, this.namespace = t, this.name = t === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = n;
  }
};
function fo(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var ri = class extends ho {
  constructor(e, t, r, n = "storage") {
    super(e, n, t, r), this.name = n === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}, Tf = class extends ho {
  constructor(e, t, r = "storage") {
    super(e, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
  }
};
const uw = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), cw = (e) => {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, _s = (e) => {
  if (Array.isArray(e)) return e.map((r) => _s(r));
  if (typeof e == "function" || e !== Object(e)) return e;
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = r.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    t[a] = _s(n);
  }), t;
}, dw = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function Sa(e) {
  "@babel/helpers - typeof";
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sa(e);
}
function hw(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fw(e) {
  var t = hw(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function pw(e, t, r) {
  return (t = fw(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Dc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dc(Object(r), !0).forEach(function(n) {
      pw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Mc = (e) => {
  var t;
  return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : (t = e.error) === null || t === void 0 ? void 0 : t.message) || JSON.stringify(e);
}, gw = async (e, t, r, n) => {
  if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number" && !r?.noResolveJson) {
    const a = e, i = a.status || 500;
    if (typeof a.json == "function") a.json().then((o) => {
      const s = o?.statusCode || o?.code || i + "";
      t(new ri(Mc(o), i, s, n));
    }).catch(() => {
      if (n === "vectors") {
        const o = i + "";
        t(new ri(a.statusText || `HTTP ${i} error`, i, o, n));
      } else {
        const o = i + "";
        t(new ri(a.statusText || `HTTP ${i} error`, i, o, n));
      }
    });
    else {
      const o = i + "";
      t(new ri(a.statusText || `HTTP ${i} error`, i, o, n));
    }
  } else t(new Tf(Mc(e), e, n));
}, mw = (e, t, r, n) => {
  const a = {
    method: e,
    headers: t?.headers || {}
  };
  return e === "GET" || e === "HEAD" || !n ? M(M({}, a), r) : (cw(n) ? (a.headers = M({ "Content-Type": "application/json" }, t?.headers), a.body = JSON.stringify(n)) : a.body = n, t?.duplex && (a.duplex = t.duplex), M(M({}, a), r));
};
async function Fn(e, t, r, n, a, i, o) {
  return new Promise((s, l) => {
    e(r, mw(t, n, a, i)).then((u) => {
      if (!u.ok) throw u;
      if (n?.noResolveJson) return u;
      if (o === "vectors") {
        const c = u.headers.get("content-type");
        if (u.headers.get("content-length") === "0" || u.status === 204) return {};
        if (!c || !c.includes("application/json")) return {};
      }
      return u.json();
    }).then((u) => s(u)).catch((u) => gw(u, l, n, o));
  });
}
function Rf(e = "storage") {
  return {
    get: async (t, r, n, a) => Fn(t, "GET", r, n, a, void 0, e),
    post: async (t, r, n, a, i) => Fn(t, "POST", r, a, i, n, e),
    put: async (t, r, n, a, i) => Fn(t, "PUT", r, a, i, n, e),
    head: async (t, r, n, a) => Fn(t, "HEAD", r, M(M({}, n), {}, { noResolveJson: !0 }), a, void 0, e),
    remove: async (t, r, n, a, i) => Fn(t, "DELETE", r, a, i, n, e)
  };
}
const vw = Rf("storage"), { get: Aa, post: ct, put: $s, head: ww, remove: eu } = vw, Qe = Rf("vectors");
var Cn = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(e, t = {}, r, n = "storage") {
    this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.fetch = uw(r), this.namespace = n;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(e) {
    var t = this;
    try {
      return {
        data: await e(),
        error: null
      };
    } catch (r) {
      if (t.shouldThrowOnError) throw r;
      if (fo(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
}, yw = class {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t;
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  async execute() {
    var e = this;
    try {
      return {
        data: (await e.downloadFn()).body,
        error: null
      };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (fo(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
let Nf;
Nf = Symbol.toStringTag;
var bw = class {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t, this[Nf] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new yw(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var e = this;
    try {
      return {
        data: await (await e.downloadFn()).blob(),
        error: null
      };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (fo(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
const xw = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Lc = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var kw = class extends Cn {
  constructor(e, t = {}, r, n) {
    super(e, t, n, "storage"), this.bucketId = r;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(e, t, r, n) {
    var a = this;
    return a.handleOperation(async () => {
      let i;
      const o = M(M({}, Lc), n);
      let s = M(M({}, a.headers), e === "POST" && { "x-upsert": String(o.upsert) });
      const l = o.metadata;
      typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", o.cacheControl), l && i.append("metadata", a.encodeMetadata(l)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.has("cacheControl") || i.append("cacheControl", o.cacheControl), l && !i.has("metadata") && i.append("metadata", a.encodeMetadata(l))) : (i = r, s["cache-control"] = `max-age=${o.cacheControl}`, s["content-type"] = o.contentType, l && (s["x-metadata"] = a.toBase64(a.encodeMetadata(l))), (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")), n?.headers && (s = M(M({}, s), n.headers));
      const u = a._removeEmptyFolders(t), c = a._getFinalPath(u), f = await (e == "PUT" ? $s : ct)(a.fetch, `${a.url}/object/${c}`, i, M({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}));
      return {
        path: u,
        id: f.Id,
        fullPath: f.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  */
  async upload(e, t, r) {
    return this.uploadOrUpdate("POST", e, t, r);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  */
  async uploadToSignedUrl(e, t, r, n) {
    var a = this;
    const i = a._removeEmptyFolders(e), o = a._getFinalPath(i), s = new URL(a.url + `/object/upload/sign/${o}`);
    return s.searchParams.set("token", t), a.handleOperation(async () => {
      let l;
      const u = M({ upsert: Lc.upsert }, n), c = M(M({}, a.headers), { "x-upsert": String(u.upsert) });
      return typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType), {
        path: i,
        fullPath: (await $s(a.fetch, s.toString(), l, { headers: c })).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createSignedUploadUrl(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      let n = r._getFinalPath(e);
      const a = M({}, r.headers);
      t?.upsert && (a["x-upsert"] = "true");
      const i = await ct(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, { headers: a }), o = new URL(r.url + i.url), s = o.searchParams.get("token");
      if (!s) throw new ho("No token returned by API");
      return {
        signedUrl: o.toString(),
        path: e,
        token: s
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: true
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  */
  async update(e, t, r) {
    return this.uploadOrUpdate("PUT", e, t, r);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  */
  async move(e, t, r) {
    var n = this;
    return n.handleOperation(async () => await ct(n.fetch, `${n.url}/object/move`, {
      bucketId: n.bucketId,
      sourceKey: e,
      destinationKey: t,
      destinationBucket: r?.destinationBucket
    }, { headers: n.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  */
  async copy(e, t, r) {
    var n = this;
    return n.handleOperation(async () => ({ path: (await ct(n.fetch, `${n.url}/object/copy`, {
      bucketId: n.bucketId,
      sourceKey: e,
      destinationKey: t,
      destinationBucket: r?.destinationBucket
    }, { headers: n.headers })).Key }));
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  */
  async createSignedUrl(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      let a = n._getFinalPath(e), i = await ct(n.fetch, `${n.url}/object/sign/${a}`, M({ expiresIn: t }, r?.transform ? { transform: r.transform } : {}), { headers: n.headers });
      const o = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return { signedUrl: encodeURI(`${n.url}${i.signedURL}${o}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  */
  async createSignedUrls(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      const a = await ct(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
        expiresIn: t,
        paths: e
      }, { headers: n.headers }), i = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return a.map((o) => M(M({}, o), {}, { signedUrl: o.signedURL ? encodeURI(`${n.url}${o.signedURL}${i}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options.transform Transform the asset before serving it to the client.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  */
  download(e, t, r) {
    const n = typeof t?.transform < "u" ? "render/image/authenticated" : "object", a = this.transformOptsToQueryString(t?.transform || {}), i = a ? `?${a}` : "", o = this._getFinalPath(e), s = () => Aa(this.fetch, `${this.url}/${n}/${o}${i}`, {
      headers: this.headers,
      noResolveJson: !0
    }, r);
    return new bw(s, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * @category File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  * ```
  */
  async info(e) {
    var t = this;
    const r = t._getFinalPath(e);
    return t.handleOperation(async () => _s(await Aa(t.fetch, `${t.url}/object/info/${r}`, { headers: t.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return await ww(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }), {
        data: !0,
        error: null
      };
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (fo(n) && n instanceof Tf) {
        const a = n.originalError;
        if ([400, 404].includes(a?.status)) return {
          data: !1,
          error: n
        };
      }
      throw n;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  */
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e), n = [], a = t?.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    a !== "" && n.push(a);
    const i = typeof t?.transform < "u" ? "render/image" : "object", o = this.transformOptsToQueryString(t?.transform || {});
    o !== "" && n.push(o);
    let s = n.join("&");
    return s !== "" && (s = `?${s}`), { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${r}${s}`) } };
  }
  /**
  * Deletes files within the same bucket
  *
  * @category File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  */
  async remove(e) {
    var t = this;
    return t.handleOperation(async () => await eu(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * @category File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  */
  async list(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      const a = M(M(M({}, xw), t), {}, { prefix: e || "" });
      return await ct(n.fetch, `${n.url}/object/list/${n.bucketId}`, a, { headers: n.headers }, r);
    });
  }
  /**
  * @experimental this method signature might change in the future
  *
  * @category File Buckets
  * @param options search options
  * @param parameters
  */
  async listV2(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const n = M({}, e);
      return await ct(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, { headers: r.headers }, t);
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
};
const Sw = "2.95.3", ja = { "X-Client-Info": `storage-js/${Sw}` };
var Aw = class extends Cn {
  constructor(e, t = {}, r, n) {
    const a = new URL(e);
    n?.useNewHostname && /supabase\.(co|in|red)$/.test(a.hostname) && !a.hostname.includes("storage.supabase.") && (a.hostname = a.hostname.replace("supabase.", "storage.supabase."));
    const i = a.href.replace(/\/$/, ""), o = M(M({}, ja), t);
    super(i, o, r, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  */
  async listBuckets(e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = t.listBucketOptionsToQueryString(e);
      return await Aa(t.fetch, `${t.url}/bucket${r}`, { headers: t.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  */
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Aa(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createBucket(e, t = { public: !1 }) {
    var r = this;
    return r.handleOperation(async () => await ct(r.fetch, `${r.url}/bucket`, {
      id: e,
      name: e,
      type: t.type,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes
    }, { headers: r.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  */
  async updateBucket(e, t) {
    var r = this;
    return r.handleOperation(async () => await $s(r.fetch, `${r.url}/bucket/${e}`, {
      id: e,
      name: e,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes
    }, { headers: r.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  */
  async emptyBucket(e) {
    var t = this;
    return t.handleOperation(async () => await ct(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await eu(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
  }
}, Ew = class extends Cn {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example
  * ```typescript
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), a = M(M({}, ja), t);
    super(n, a, r, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await ct(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  */
  async listBuckets(e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = new URLSearchParams();
      e?.limit !== void 0 && r.set("limit", e.limit.toString()), e?.offset !== void 0 && r.set("offset", e.offset.toString()), e?.sortColumn && r.set("sortColumn", e.sortColumn), e?.sortOrder && r.set("sortOrder", e.sortOrder), e?.search && r.set("search", e.search);
      const n = r.toString(), a = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
      return await Aa(t.fetch, a, { headers: t.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await eu(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(e) {
    var t = this;
    if (!dw(e)) throw new ho("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const r = new lw({
      baseUrl: this.url,
      catalogName: e,
      auth: {
        type: "custom",
        getHeaders: async () => t.headers
      },
      fetch: this.fetch
    }), n = this.shouldThrowOnError;
    return new Proxy(r, { get(a, i) {
      const o = a[i];
      return typeof o != "function" ? o : async (...s) => {
        try {
          return {
            data: await o.apply(a, s),
            error: null
          };
        } catch (l) {
          if (n) throw l;
          return {
            data: null,
            error: l
          };
        }
      };
    } });
  }
}, Cw = class extends Cn {
  /** Creates a new VectorIndexApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), a = M(M({}, ja), {}, { "Content-Type": "application/json" }, t);
    super(n, a, r, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Qe.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Qe.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }) || {});
  }
}, Ow = class extends Cn {
  /** Creates a new VectorDataApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), a = M(M({}, ja), {}, { "Content-Type": "application/json" }, t);
    super(n, a, r, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(e) {
    var t = this;
    if (e.vectors.length < 1 || e.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(e) {
    var t = this;
    if (e.segmentCount !== void 0) {
      if (e.segmentCount < 1 || e.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
    }
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(e) {
    var t = this;
    if (e.keys.length < 1 || e.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
  }
}, Tw = class extends Cn {
  /** Creates a new VectorBucketApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), a = M(M({}, ja), {}, { "Content-Type": "application/json" }, t);
    super(n, a, r, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(e = {}) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Qe.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
}, Rw = class extends Tw {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example
  * ```typescript
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(e, t = {}) {
    super(e, t.headers || {}, t.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(e) {
    return new Nw(this.url, this.headers, e, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(e) {
    var t = () => super.createBucket, r = this;
    return t().call(r, e);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(e) {
    var t = () => super.getBucket, r = this;
    return t().call(r, e);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(e = {}) {
    var t = () => super.listBuckets, r = this;
    return t().call(r, e);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(e) {
    var t = () => super.deleteBucket, r = this;
    return t().call(r, e);
  }
}, Nw = class extends Cw {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(e, t, r, n) {
    super(e, t, n), this.vectorBucketName = r;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(e) {
    var t = () => super.createIndex, r = this;
    return t().call(r, M(M({}, e), {}, { vectorBucketName: r.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(e = {}) {
    var t = () => super.listIndexes, r = this;
    return t().call(r, M(M({}, e), {}, { vectorBucketName: r.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(e) {
    var t = () => super.getIndex, r = this;
    return t().call(r, r.vectorBucketName, e);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(e) {
    var t = () => super.deleteIndex, r = this;
    return t().call(r, r.vectorBucketName, e);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(e) {
    return new Pw(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
}, Pw = class extends Ow {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(e, t, r, n, a) {
    super(e, t, a), this.vectorBucketName = r, this.indexName = n;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(e) {
    var t = () => super.putVectors, r = this;
    return t().call(r, M(M({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(e) {
    var t = () => super.getVectors, r = this;
    return t().call(r, M(M({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(e = {}) {
    var t = () => super.listVectors, r = this;
    return t().call(r, M(M({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing matches array of similar vectors ordered by distance or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(e) {
    var t = () => super.queryVectors, r = this;
    return t().call(r, M(M({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(e) {
    var t = () => super.deleteVectors, r = this;
    return t().call(r, M(M({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
}, Iw = class extends Aw {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category File Buckets
  * @example
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'public-anon-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(e, t = {}, r, n) {
    super(e, t, r, n);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category File Buckets
  * @param id The bucket id to operate on.
  *
  * @example
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(e) {
    return new kw(this.url, this.headers, e, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new Rw(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new Ew(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Pf = "2.95.3", Vr = 30 * 1e3, el = 3, qo = el * Vr, jw = "http://localhost:9999", zw = "supabase.auth.token", Uw = { "X-Client-Info": `gotrue-js/${Pf}` }, tl = "X-Supabase-Api-Version", If = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Dw = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Mw = 10 * 60 * 1e3;
class Ea extends Error {
  constructor(t, r, n) {
    super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n;
  }
}
function I(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class Lw extends Ea {
  constructor(t, r, n) {
    super(t, r, n), this.name = "AuthApiError", this.status = r, this.code = n;
  }
}
function Bw(e) {
  return I(e) && e.name === "AuthApiError";
}
class yr extends Ea {
  constructor(t, r) {
    super(t), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class zt extends Ea {
  constructor(t, r, n, a) {
    super(t, n, a), this.name = r, this.status = n;
  }
}
class Je extends zt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Go(e) {
  return I(e) && e.name === "AuthSessionMissingError";
}
class Jr extends zt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class ni extends zt {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ai extends zt {
  constructor(t, r = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function Fw(e) {
  return I(e) && e.name === "AuthImplicitGrantRedirectError";
}
class Bc extends zt {
  constructor(t, r = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Jw extends zt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class rl extends zt {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function Zo(e) {
  return I(e) && e.name === "AuthRetryableFetchError";
}
class Fc extends zt {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n;
  }
}
class nl extends zt {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Qi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Jc = ` 	
\r=`.split(""), Ww = (() => {
  const e = new Array(128);
  for (let t = 0; t < e.length; t += 1)
    e[t] = -1;
  for (let t = 0; t < Jc.length; t += 1)
    e[Jc[t].charCodeAt(0)] = -2;
  for (let t = 0; t < Qi.length; t += 1)
    e[Qi[t].charCodeAt(0)] = t;
  return e;
})();
function Wc(e, t, r) {
  if (e !== null)
    for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(Qi[n]), t.queuedBits -= 6;
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(Qi[n]), t.queuedBits -= 6;
    }
}
function jf(e, t, r) {
  const n = Ww[e];
  if (n > -1)
    for (t.queue = t.queue << 6 | n, t.queuedBits += 6; t.queuedBits >= 8; )
      r(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function Qc(e) {
  const t = [], r = (o) => {
    t.push(String.fromCodePoint(o));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, a = { queue: 0, queuedBits: 0 }, i = (o) => {
    Hw(o, n, r);
  };
  for (let o = 0; o < e.length; o += 1)
    jf(e.charCodeAt(o), a, i);
  return t.join("");
}
function Qw(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    t(192 | e >> 6), t(128 | e & 63);
    return;
  } else if (e <= 65535) {
    t(224 | e >> 12), t(128 | e >> 6 & 63), t(128 | e & 63);
    return;
  } else if (e <= 1114111) {
    t(240 | e >> 18), t(128 | e >> 12 & 63), t(128 | e >> 6 & 63), t(128 | e & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function Yw(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const a = (n - 55296) * 1024 & 65535;
      n = (e.charCodeAt(r + 1) - 56320 & 65535 | a) + 65536, r += 1;
    }
    Qw(n, t);
  }
}
function Hw(e, t, r) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      r(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!(e >> 7 - n & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2)
      t.codepoint = e & 31;
    else if (t.utf8seq === 3)
      t.codepoint = e & 15;
    else if (t.utf8seq === 4)
      t.codepoint = e & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127)
      throw new Error("Invalid UTF-8 sequence");
    t.codepoint = t.codepoint << 6 | e & 63, t.utf8seq -= 1, t.utf8seq === 0 && r(t.codepoint);
  }
}
function gn(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (a) => {
    t.push(a);
  };
  for (let a = 0; a < e.length; a += 1)
    jf(e.charCodeAt(a), r, n);
  return new Uint8Array(t);
}
function Kw(e) {
  const t = [];
  return Yw(e, (r) => t.push(r)), new Uint8Array(t);
}
function Sr(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (a) => {
    t.push(a);
  };
  return e.forEach((a) => Wc(a, r, n)), Wc(null, r, n), t.join("");
}
function Vw(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function qw() {
  return Symbol("auth-callback");
}
const be = () => typeof window < "u" && typeof document < "u", hr = {
  tested: !1,
  writable: !1
}, zf = () => {
  if (!be())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (hr.tested)
    return hr.writable;
  const e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), hr.tested = !0, hr.writable = !0;
  } catch {
    hr.tested = !0, hr.writable = !1;
  }
  return hr.writable;
};
function Gw(e) {
  const t = {}, r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((a, i) => {
        t[i] = a;
      });
    } catch {
    }
  return r.searchParams.forEach((n, a) => {
    t[a] = n;
  }), t;
}
const Uf = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), Zw = (e) => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", qr = async (e, t, r) => {
  await e.setItem(t, JSON.stringify(r));
}, fr = async (e, t) => {
  const r = await e.getItem(t);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}, ye = async (e, t) => {
  await e.removeItem(t);
};
class po {
  constructor() {
    this.promise = new po.promiseConstructor((t, r) => {
      this.resolve = t, this.reject = r;
    });
  }
}
po.promiseConstructor = Promise;
function ii(e) {
  const t = e.split(".");
  if (t.length !== 3)
    throw new nl("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!Dw.test(t[n]))
      throw new nl("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Qc(t[0])),
    payload: JSON.parse(Qc(t[1])),
    signature: gn(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function Xw(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function _w(e, t) {
  return new Promise((n, a) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await e(i);
          if (!t(i, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!t(i, o)) {
            a(o);
            return;
          }
        }
    })();
  });
}
function $w(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function ey() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = r.length;
    let a = "";
    for (let i = 0; i < 56; i++)
      a += r.charAt(Math.floor(Math.random() * n));
    return a;
  }
  return crypto.getRandomValues(t), Array.from(t, $w).join("");
}
async function ty(e) {
  const r = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", r), a = new Uint8Array(n);
  return Array.from(a).map((i) => String.fromCharCode(i)).join("");
}
async function ry(e) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
  const r = await ty(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Wr(e, t, r = !1) {
  const n = ey();
  let a = n;
  r && (a += "/PASSWORD_RECOVERY"), await qr(e, `${t}-code-verifier`, a);
  const i = await ry(n);
  return [i, n === i ? "plain" : "s256"];
}
const ny = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ay(e) {
  const t = e.headers.get(tl);
  if (!t || !t.match(ny))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function iy(e) {
  if (!e)
    throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t)
    throw new Error("JWT has expired");
}
function oy(e) {
  switch (e) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const sy = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Qr(e) {
  if (!sy.test(e))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Xo() {
  const e = {};
  return new Proxy(e, {
    get: (t, r) => {
      if (r === "__isUserNotAvailableProxy")
        return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (t, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (t, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function ly(e, t) {
  return new Proxy(e, {
    get: (r, n, a) => {
      if (n === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof n == "symbol") {
        const i = n.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(r, n, a);
      }
      return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(r, n, a);
    }
  });
}
function Yc(e) {
  return JSON.parse(JSON.stringify(e));
}
const vr = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), uy = [502, 503, 504];
async function Hc(e) {
  var t;
  if (!Zw(e))
    throw new rl(vr(e), 0);
  if (uy.includes(e.status))
    throw new rl(vr(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (i) {
    throw new yr(vr(i), i);
  }
  let n;
  const a = ay(e);
  if (a && a.getTime() >= If["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
    if (n === "weak_password")
      throw new Fc(vr(r), e.status, ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
    if (n === "session_not_found")
      throw new Je();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0))
    throw new Fc(vr(r), e.status, r.weak_password.reasons);
  throw new Lw(vr(r), e.status || 500, n);
}
const cy = (e, t, r, n) => {
  const a = { method: e, headers: t?.headers || {} };
  return e === "GET" ? a : (a.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), a.body = JSON.stringify(n), Object.assign(Object.assign({}, a), r));
};
async function U(e, t, r, n) {
  var a;
  const i = Object.assign({}, n?.headers);
  i[tl] || (i[tl] = If["2024-01-01"].name), n?.jwt && (i.Authorization = `Bearer ${n.jwt}`);
  const o = (a = n?.query) !== null && a !== void 0 ? a : {};
  n?.redirectTo && (o.redirect_to = n.redirectTo);
  const s = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await dy(e, t, r + s, {
    headers: i,
    noResolveJson: n?.noResolveJson
  }, {}, n?.body);
  return n?.xform ? n?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function dy(e, t, r, n, a, i) {
  const o = cy(t, n, a, i);
  let s;
  try {
    s = await e(r, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new rl(vr(l), 0);
  }
  if (s.ok || await Hc(s), n?.noResolveJson)
    return s;
  try {
    return await s.json();
  } catch (l) {
    await Hc(l);
  }
}
function lt(e) {
  var t;
  let r = null;
  py(e) && (r = Object.assign({}, e), e.expires_at || (r.expires_at = Vw(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function Kc(e) {
  const t = lt(e);
  return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function Kt(e) {
  var t;
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null };
}
function hy(e) {
  return { data: e, error: null };
}
function fy(e) {
  const { action_link: t, email_otp: r, hashed_token: n, redirect_to: a, verification_type: i } = e, o = co(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), s = {
    action_link: t,
    email_otp: r,
    hashed_token: n,
    redirect_to: a,
    verification_type: i
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: s,
      user: l
    },
    error: null
  };
}
function Vc(e) {
  return e;
}
function py(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const _o = ["global", "local", "others"];
class gy {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
   * })
   * ```
   */
  constructor({ url: t = "", headers: r = {}, fetch: n }) {
    this.url = t, this.headers = r, this.fetch = Uf(n), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(t, r = _o[0]) {
    if (_o.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${_o.join(", ")}`);
    try {
      return await U(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: t,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (I(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(t, r = {}) {
    try {
      return await U(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Kt
      });
    } catch (n) {
      if (I(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(t) {
    try {
      const { options: r } = t, n = co(t, ["options"]), a = Object.assign(Object.assign({}, n), r);
      return "newEmail" in n && (a.new_email = n?.newEmail, delete a.newEmail), await U(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: a,
        headers: this.headers,
        xform: fy,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (I(r))
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      throw r;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Kt
      });
    } catch (r) {
      if (I(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(t) {
    var r, n, a, i, o, s, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await U(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (i = (a = t?.perPage) === null || a === void 0 ? void 0 : a.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Vc
      });
      if (c.error)
        throw c.error;
      const f = await c.json(), p = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (s = c.headers.get("link")) === null || s === void 0 ? void 0 : s.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((v) => {
        const w = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), x = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${x}Page`] = w;
      }), u.total = parseInt(p)), { data: Object.assign(Object.assign({}, f), u), error: null };
    } catch (u) {
      if (I(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(t) {
    Qr(t);
    try {
      return await U(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Kt
      });
    } catch (r) {
      if (I(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(t, r) {
    Qr(t);
    try {
      return await U(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Kt
      });
    } catch (n) {
      if (I(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(t, r = !1) {
    Qr(t);
    try {
      return await U(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: Kt
      });
    } catch (n) {
      if (I(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    Qr(t.userId);
    try {
      const { data: r, error: n } = await U(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
        headers: this.headers,
        xform: (a) => ({ data: { factors: a }, error: null })
      });
      return { data: r, error: n };
    } catch (r) {
      if (I(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    Qr(t.userId), Qr(t.id);
    try {
      return { data: await U(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (I(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(t) {
    var r, n, a, i, o, s, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await U(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (i = (a = t?.perPage) === null || a === void 0 ? void 0 : a.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Vc
      });
      if (c.error)
        throw c.error;
      const f = await c.json(), p = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (s = c.headers.get("link")) === null || s === void 0 ? void 0 : s.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((v) => {
        const w = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), x = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${x}Page`] = w;
      }), u.total = parseInt(p)), { data: Object.assign(Object.assign({}, f), u), error: null };
    } catch (u) {
      if (I(u))
        return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (I(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(t) {
    try {
      return await U(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (I(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(t, r) {
    try {
      return await U(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (I(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(t) {
    try {
      return await U(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (I(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (I(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function qc(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    }
  };
}
const Yr = {
  /**
   * @experimental
   */
  debug: !!(globalThis && zf() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Df extends Error {
  constructor(t) {
    super(t), this.isAcquireTimeout = !0;
  }
}
class my extends Df {
}
async function vy(e, t, r) {
  Yr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return t > 0 && setTimeout(() => {
    n.abort(), Yr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
  }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (a) => {
    if (a) {
      Yr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, a.name);
      try {
        return await r();
      } finally {
        Yr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, a.name);
      }
    } else {
      if (t === 0)
        throw Yr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new my(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
      if (Yr.debug)
        try {
          const i = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "));
        } catch (i) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r();
    }
  }));
}
function wy() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Mf(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function yy(e) {
  return parseInt(e, 16);
}
function by(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function xy(e) {
  var t;
  const { chainId: r, domain: n, expirationTime: a, issuedAt: i = /* @__PURE__ */ new Date(), nonce: o, notBefore: s, requestId: l, resources: u, scheme: c, uri: f, version: p } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!n)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!f)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (p !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${p}`);
    if (!((t = e.statement) === null || t === void 0) && t.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
  }
  const d = Mf(e.address), v = c ? `${c}://${n}` : n, w = e.statement ? `${e.statement}
` : "", x = `${v} wants you to sign in with your Ethereum account:
${d}

${w}`;
  let m = `URI: ${f}
Version: ${p}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
  if (a && (m += `
Expiration Time: ${a.toISOString()}`), s && (m += `
Not Before: ${s.toISOString()}`), l && (m += `
Request ID: ${l}`), u) {
    let h = `
Resources:`;
    for (const g of u) {
      if (!g || typeof g != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${g}`);
      h += `
- ${g}`;
    }
    m += h;
  }
  return `${x}
${m}`;
}
class de extends Error {
  constructor({ message: t, code: r, cause: n, name: a }) {
    var i;
    super(t, { cause: n }), this.__isWebAuthnError = !0, this.name = (i = a ?? (n instanceof Error ? n.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error", this.code = r;
  }
}
class Yi extends de {
  constructor(t, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function ky({ error: e, options: t }) {
  var r, n, a;
  const { publicKey: i } = t;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new de({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else if (e.name === "ConstraintError") {
    if (((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new de({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      t.mediation === "conditional" && ((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required"
    )
      return new de({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e
      });
    if (((a = i.authenticatorSelection) === null || a === void 0 ? void 0 : a.userVerification) === "required")
      return new de({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e
      });
  } else {
    if (e.name === "InvalidStateError")
      return new de({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e
      });
    if (e.name === "NotAllowedError")
      return new de({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((s) => s.type === "public-key").length === 0 ? new de({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: e
      }) : new de({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: e
      });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (Lf(o)) {
        if (i.rp.id !== o)
          return new de({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new de({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new de({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e
        });
    } else if (e.name === "UnknownError")
      return new de({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new de({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
function Sy({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new de({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else {
    if (e.name === "NotAllowedError")
      return new de({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (Lf(n)) {
        if (r.rpId !== n)
          return new de({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new de({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "UnknownError")
      return new de({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new de({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
class Ay {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      r.name = "AbortError", this.controller.abort(r);
    }
    const t = new AbortController();
    return this.controller = t, t.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      t.name = "AbortError", this.controller.abort(t), this.controller = void 0;
    }
  }
}
const Ey = new Ay();
function Cy(e) {
  if (!e)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      e
    );
  const { challenge: t, user: r, excludeCredentials: n } = e, a = co(
    e,
    ["challenge", "user", "excludeCredentials"]
  ), i = gn(t).buffer, o = Object.assign(Object.assign({}, r), { id: gn(r.id).buffer }), s = Object.assign(Object.assign({}, a), {
    challenge: i,
    user: o
  });
  if (n && n.length > 0) {
    s.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      s.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: gn(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return s;
}
function Oy(e) {
  if (!e)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e, n = co(
    e,
    ["challenge", "allowCredentials"]
  ), a = gn(t).buffer, i = Object.assign(Object.assign({}, n), { challenge: a });
  if (r && r.length > 0) {
    i.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, s), {
        id: gn(s.id).buffer,
        type: s.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: s.transports
      });
    }
  }
  return i;
}
function Ty(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: Sr(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: Sr(new Uint8Array(e.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Ry(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e, n = e.getClientExtensionResults(), a = e.response;
  return {
    id: e.id,
    rawId: e.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Sr(new Uint8Array(a.authenticatorData)),
      clientDataJSON: Sr(new Uint8Array(a.clientDataJSON)),
      signature: Sr(new Uint8Array(a.signature)),
      userHandle: a.userHandle ? Sr(new Uint8Array(a.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: n,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Lf(e) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
  );
}
function Gc() {
  var e, t;
  return !!(be() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.create) == "function" && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.get) == "function");
}
async function Ny(e) {
  try {
    const t = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new Yi("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new Yi("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: ky({
        error: t,
        options: e
      })
    };
  }
}
async function Py(e) {
  try {
    const t = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new Yi("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new Yi("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: Sy({
        error: t,
        options: e
      })
    };
  }
}
const Iy = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, jy = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Hi(...e) {
  const t = (a) => a !== null && typeof a == "object" && !Array.isArray(a), r = (a) => a instanceof ArrayBuffer || ArrayBuffer.isView(a), n = {};
  for (const a of e)
    if (a)
      for (const i in a) {
        const o = a[i];
        if (o !== void 0)
          if (Array.isArray(o))
            n[i] = o;
          else if (r(o))
            n[i] = o;
          else if (t(o)) {
            const s = n[i];
            t(s) ? n[i] = Hi(s, o) : n[i] = Hi(o);
          } else
            n[i] = o;
      }
  return n;
}
function zy(e, t) {
  return Hi(Iy, e, t || {});
}
function Uy(e, t) {
  return Hi(jy, e, t || {});
}
class Dy {
  constructor(t) {
    this.client = t, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(t) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, t), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: t, webauthn: r, friendlyName: n, signal: a }, i) {
    var o;
    try {
      const { data: s, error: l } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r
      });
      if (!s)
        return { data: null, error: l };
      const u = a ?? Ey.createNewAbortSignal();
      if (s.webauthn.type === "create") {
        const { user: c } = s.webauthn.credential_options.publicKey;
        if (!c.name) {
          const f = n;
          if (f)
            c.name = `${c.id}:${f}`;
          else {
            const d = (await this.client.getUser()).data.user, v = ((o = d?.user_metadata) === null || o === void 0 ? void 0 : o.name) || d?.email || d?.id || "User";
            c.name = `${c.id}:${v}`;
          }
        }
        c.displayName || (c.displayName = c.name);
      }
      switch (s.webauthn.type) {
        case "create": {
          const c = zy(s.webauthn.credential_options.publicKey, i?.create), { data: f, error: p } = await Ny({
            publicKey: c,
            signal: u
          });
          return f ? {
            data: {
              factorId: t,
              challengeId: s.id,
              webauthn: {
                type: s.webauthn.type,
                credential_response: f
              }
            },
            error: null
          } : { data: null, error: p };
        }
        case "request": {
          const c = Uy(s.webauthn.credential_options.publicKey, i?.request), { data: f, error: p } = await Py(Object.assign(Object.assign({}, s.webauthn.credential_options), { publicKey: c, signal: u }));
          return f ? {
            data: {
              factorId: t,
              challengeId: s.id,
              webauthn: {
                type: s.webauthn.type,
                credential_response: f
              }
            },
            error: null
          } : { data: null, error: p };
        }
      }
    } catch (s) {
      return I(s) ? { data: null, error: s } : {
        data: null,
        error: new yr("Unexpected error in challenge", s)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: t, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({
      factorId: r,
      challengeId: t,
      webauthn: n
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: a } = {} }, i) {
    if (!r)
      return {
        data: null,
        error: new Ea("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Gc())
        return {
          data: null,
          error: new yr("Browser does not support WebAuthn", null)
        };
      const { data: o, error: s } = await this.challenge({
        factorId: t,
        webauthn: { rpId: r, rpOrigins: n },
        signal: a
      }, { request: i });
      if (!o)
        return { data: null, error: s };
      const { webauthn: l } = o;
      return this._verify({
        factorId: t,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response
        }
      });
    } catch (o) {
      return I(o) ? { data: null, error: o } : {
        data: null,
        error: new yr("Unexpected error in authenticate", o)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: a } = {} }, i) {
    if (!r)
      return {
        data: null,
        error: new Ea("rpId is required for WebAuthn registration")
      };
    try {
      if (!Gc())
        return {
          data: null,
          error: new yr("Browser does not support WebAuthn", null)
        };
      const { data: o, error: s } = await this._enroll({
        friendlyName: t
      });
      if (!o)
        return await this.client.mfa.listFactors().then((c) => {
          var f;
          return (f = c.data) === null || f === void 0 ? void 0 : f.all.find((p) => p.factor_type === "webauthn" && p.friendly_name === t && p.status !== "unverified");
        }).then((c) => c ? this.client.mfa.unenroll({ factorId: c?.id }) : void 0), { data: null, error: s };
      const { data: l, error: u } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: r, rpOrigins: n },
        signal: a
      }, {
        create: i
      });
      return l ? this._verify({
        factorId: o.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: r,
          rpOrigins: n,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: u };
    } catch (o) {
      return I(o) ? { data: null, error: o } : {
        data: null,
        error: new yr("Unexpected error in register", o)
      };
    }
  }
}
wy();
const My = {
  url: jw,
  storageKey: zw,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Uw,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4
  // 10 seconds
};
async function Zc(e, t, r) {
  return await r();
}
const Hr = {};
class Ca {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var t, r;
    return (r = (t = Hr[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(t) {
    Hr[this.storageKey] = Object.assign(Object.assign({}, Hr[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, r;
    return (r = (t = Hr[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Hr[this.storageKey] = Object.assign(Object.assign({}, Hr[this.storageKey]), { cachedAt: t });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'public-anon-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(t) {
    var r, n, a;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const i = Object.assign(Object.assign({}, My), t);
    if (this.storageKey = i.storageKey, this.instanceID = (r = Ca.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, Ca.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!i.debug, typeof i.debug == "function" && (this.logger = i.debug), this.instanceID > 0 && be()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = i.persistSession, this.autoRefreshToken = i.autoRefreshToken, this.admin = new gy({
      url: i.url,
      headers: i.headers,
      fetch: i.fetch
    }), this.url = i.url, this.headers = i.headers, this.fetch = Uf(i.fetch), this.lock = i.lock || Zc, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, this.throwOnError = i.throwOnError, this.lockAcquireTimeout = i.lockAcquireTimeout, i.lock ? this.lock = i.lock : this.persistSession && be() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = vy : this.lock = Zc, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Dy(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (i.storage ? this.storage = i.storage : zf() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = qc(this.memoryStorage)), i.userStorage && (this.userStorage = i.userStorage)) : (this.memoryStorage = {}, this.storage = qc(this.memoryStorage)), be() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (a = this.broadcastChannel) === null || a === void 0 || a.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o);
        try {
          await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
        } catch (s) {
          this._debug("#broadcastChannel", "error", s);
        }
      });
    }
    this.initialize().catch((o) => {
      this._debug("#initialize()", "error", o);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(t) {
    if (this.throwOnError && t && t.error)
      throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Pf}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...t) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...t), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var t;
    try {
      let r = {}, n = "none";
      if (be() && (r = Gw(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), be() && this.detectSessionInUrl && n !== "none") {
        const { data: a, error: i } = await this._getSessionFromURL(r, n);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), Fw(i)) {
            const l = (t = i.details) === null || t === void 0 ? void 0 : t.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: s } = a;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", s), await this._saveSession(o), setTimeout(async () => {
          s === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return I(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new yr("Unexpected error during initialization", r)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(t) {
    var r, n, a;
    try {
      const i = await U(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (r = t?.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (a = t?.options) === null || a === void 0 ? void 0 : a.captchaToken }
        },
        xform: lt
      }), { data: o, error: s } = i;
      if (s || !o)
        return this._returnResult({ data: { user: null, session: null }, error: s });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (I(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(t) {
    var r, n, a;
    try {
      let i;
      if ("email" in t) {
        const { email: c, password: f, options: p } = t;
        let d = null, v = null;
        this.flowType === "pkce" && ([d, v] = await Wr(this.storage, this.storageKey)), i = await U(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: p?.emailRedirectTo,
          body: {
            email: c,
            password: f,
            data: (r = p?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: p?.captchaToken },
            code_challenge: d,
            code_challenge_method: v
          },
          xform: lt
        });
      } else if ("phone" in t) {
        const { phone: c, password: f, options: p } = t;
        i = await U(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: f,
            data: (n = p?.data) !== null && n !== void 0 ? n : {},
            channel: (a = p?.channel) !== null && a !== void 0 ? a : "sms",
            gotrue_meta_security: { captcha_token: p?.captchaToken }
          },
          xform: lt
        });
      } else
        throw new ni("You must provide either an email or phone number and a password");
      const { data: o, error: s } = i;
      if (s || !o)
        return await ye(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: s });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: i, password: o, options: s } = t;
        r = await U(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: o,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          xform: Kc
        });
      } else if ("phone" in t) {
        const { phone: i, password: o, options: s } = t;
        r = await U(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: o,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          xform: Kc
        });
      } else
        throw new ni("You must provide either an email or phone number and a password");
      const { data: n, error: a } = r;
      if (a)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      if (!n || !n.session || !n.user) {
        const i = new Jr();
        return this._returnResult({ data: { user: null, session: null }, error: i });
      }
      return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: a
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(t) {
    var r, n, a, i;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams: (a = t.options) === null || a === void 0 ? void 0 : a.queryParams,
      skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(t) {
    return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(t));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(t) {
    const { chain: r } = t;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(t) {
    var r, n, a, i, o, s, l, u, c, f, p;
    let d, v;
    if ("message" in t)
      d = t.message, v = t.signature;
    else {
      const { chain: w, wallet: x, statement: m, options: h } = t;
      let g;
      if (be())
        if (typeof x == "object")
          g = x;
        else {
          const W = window;
          if ("ethereum" in W && typeof W.ethereum == "object" && "request" in W.ethereum && typeof W.ethereum.request == "function")
            g = W.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof x != "object" || !h?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        g = x;
      }
      const b = new URL((r = h?.url) !== null && r !== void 0 ? r : window.location.href), A = await g.request({
        method: "eth_requestAccounts"
      }).then((W) => W).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!A || A.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const k = Mf(A[0]);
      let C = (n = h?.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
      if (!C) {
        const W = await g.request({
          method: "eth_chainId"
        });
        C = yy(W);
      }
      const N = {
        domain: b.host,
        address: k,
        statement: m,
        uri: b.href,
        version: "1",
        chainId: C,
        nonce: (a = h?.signInWithEthereum) === null || a === void 0 ? void 0 : a.nonce,
        issuedAt: (o = (i = h?.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (s = h?.signInWithEthereum) === null || s === void 0 ? void 0 : s.expirationTime,
        notBefore: (l = h?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = h?.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (c = h?.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
      };
      d = xy(N), v = await g.request({
        method: "personal_sign",
        params: [by(d), k]
      });
    }
    try {
      const { data: w, error: x } = await U(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: d,
          signature: v
        }, !((f = t.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (p = t.options) === null || p === void 0 ? void 0 : p.captchaToken } } : null),
        xform: lt
      });
      if (x)
        throw x;
      if (!w || !w.session || !w.user) {
        const m = new Jr();
        return this._returnResult({ data: { user: null, session: null }, error: m });
      }
      return w.session && (await this._saveSession(w.session), await this._notifyAllSubscribers("SIGNED_IN", w.session)), this._returnResult({ data: Object.assign({}, w), error: x });
    } catch (w) {
      if (I(w))
        return this._returnResult({ data: { user: null, session: null }, error: w });
      throw w;
    }
  }
  async signInWithSolana(t) {
    var r, n, a, i, o, s, l, u, c, f, p, d;
    let v, w;
    if ("message" in t)
      v = t.message, w = t.signature;
    else {
      const { chain: x, wallet: m, statement: h, options: g } = t;
      let b;
      if (be())
        if (typeof m == "object")
          b = m;
        else {
          const k = window;
          if ("solana" in k && typeof k.solana == "object" && ("signIn" in k.solana && typeof k.solana.signIn == "function" || "signMessage" in k.solana && typeof k.solana.signMessage == "function"))
            b = k.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof m != "object" || !g?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        b = m;
      }
      const A = new URL((r = g?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in b && b.signIn) {
        const k = await b.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, g?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: A.host,
          uri: A.href
        }), h ? { statement: h } : null));
        let C;
        if (Array.isArray(k) && k[0] && typeof k[0] == "object")
          C = k[0];
        else if (k && typeof k == "object" && "signedMessage" in k && "signature" in k)
          C = k;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in C && "signature" in C && (typeof C.signedMessage == "string" || C.signedMessage instanceof Uint8Array) && C.signature instanceof Uint8Array)
          v = typeof C.signedMessage == "string" ? C.signedMessage : new TextDecoder().decode(C.signedMessage), w = C.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in b) || typeof b.signMessage != "function" || !("publicKey" in b) || typeof b != "object" || !b.publicKey || !("toBase58" in b.publicKey) || typeof b.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        v = [
          `${A.host} wants you to sign in with your Solana account:`,
          b.publicKey.toBase58(),
          ...h ? ["", h, ""] : [""],
          "Version: 1",
          `URI: ${A.href}`,
          `Issued At: ${(a = (n = g?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && a !== void 0 ? a : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((i = g?.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${g.signInWithSolana.notBefore}`] : [],
          ...!((o = g?.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${g.signInWithSolana.expirationTime}`] : [],
          ...!((s = g?.signInWithSolana) === null || s === void 0) && s.chainId ? [`Chain ID: ${g.signInWithSolana.chainId}`] : [],
          ...!((l = g?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${g.signInWithSolana.nonce}`] : [],
          ...!((u = g?.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${g.signInWithSolana.requestId}`] : [],
          ...!((f = (c = g?.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || f === void 0) && f.length ? [
            "Resources",
            ...g.signInWithSolana.resources.map((C) => `- ${C}`)
          ] : []
        ].join(`
`);
        const k = await b.signMessage(new TextEncoder().encode(v), "utf8");
        if (!k || !(k instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        w = k;
      }
    }
    try {
      const { data: x, error: m } = await U(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: v, signature: Sr(w) }, !((p = t.options) === null || p === void 0) && p.captchaToken ? { gotrue_meta_security: { captcha_token: (d = t.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: lt
      });
      if (m)
        throw m;
      if (!x || !x.session || !x.user) {
        const h = new Jr();
        return this._returnResult({ data: { user: null, session: null }, error: h });
      }
      return x.session && (await this._saveSession(x.session), await this._notifyAllSubscribers("SIGNED_IN", x.session)), this._returnResult({ data: Object.assign({}, x), error: m });
    } catch (x) {
      if (I(x))
        return this._returnResult({ data: { user: null, session: null }, error: x });
      throw x;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await fr(this.storage, `${this.storageKey}-code-verifier`), [n, a] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce")
        throw new Jw();
      const { data: i, error: o } = await U(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: t,
          code_verifier: n
        },
        xform: lt
      });
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!i || !i.session || !i.user) {
        const s = new Jr();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: s
        });
      }
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), this._returnResult({ data: Object.assign(Object.assign({}, i), { redirectType: a ?? null }), error: o });
    } catch (i) {
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(i))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i
        });
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(t) {
    try {
      const { options: r, provider: n, token: a, access_token: i, nonce: o } = t, s = await U(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: a,
          access_token: i,
          nonce: o,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: lt
      }), { data: l, error: u } = s;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const c = new Jr();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(t) {
    var r, n, a, i, o;
    try {
      if ("email" in t) {
        const { email: s, options: l } = t;
        let u = null, c = null;
        this.flowType === "pkce" && ([u, c] = await Wr(this.storage, this.storageKey));
        const { error: f } = await U(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: s,
            data: (r = l?.data) !== null && r !== void 0 ? r : {},
            create_user: (n = l?.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: u,
            code_challenge_method: c
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: f });
      }
      if ("phone" in t) {
        const { phone: s, options: l } = t, { data: u, error: c } = await U(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: s,
            data: (a = l?.data) !== null && a !== void 0 ? a : {},
            create_user: (i = l?.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (o = l?.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: u?.message_id },
          error: c
        });
      }
      throw new ni("You must provide either an email or phone number.");
    } catch (s) {
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(t) {
    var r, n;
    try {
      let a, i;
      "options" in t && (a = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo, i = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
      const { data: o, error: s } = await U(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: a,
        xform: lt
      });
      if (s)
        throw s;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, u = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (a) {
      if (I(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(t) {
    var r, n, a, i, o;
    try {
      let s = null, l = null;
      this.flowType === "pkce" && ([s, l] = await Wr(this.storage, this.storageKey));
      const u = await U(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null), "domain" in t ? { domain: t.domain } : null), { redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((a = t?.options) === null || a === void 0) && a.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: s, code_challenge_method: l }),
        headers: this.headers,
        xform: hy
      });
      return !((i = u.data) === null || i === void 0) && i.url && be() && !(!((o = t.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (s) {
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        if (n)
          throw n;
        if (!r)
          throw new Je();
        const { error: a } = await U(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: a });
      });
    } catch (t) {
      if (I(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: a, options: i } = t, { error: o } = await U(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: n,
            type: a,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          },
          redirectTo: i?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in t) {
        const { phone: n, type: a, options: i } = t, { data: o, error: s } = await U(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: n,
            type: a,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o?.message_id },
          error: s
        });
      }
      throw new ni("You must provide either an email or phone number and a type");
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (r) => r));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), a = (async () => (await n, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await a;
          } catch {
          }
        })()), a;
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const n = r();
          for (this.pendingInLock.push((async () => {
            try {
              await n;
            } catch {
            }
          })()), await n; this.pendingInLock.length; ) {
            const a = [...this.pendingInLock];
            await Promise.all(a), this.pendingInLock.splice(0, a.length);
          }
          return await n;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let t = null;
      const r = await fr(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t)
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < qo : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at), !n) {
        if (this.userStorage) {
          const o = await fr(this.userStorage, this.storageKey + "-user");
          o?.user ? t.user = o.user : t.user = Xo();
        }
        if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          t.user = ly(t.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: t }, error: null };
      }
      const { data: a, error: i } = await this._callRefreshToken(t.refresh_token);
      return i ? this._returnResult({ data: { session: null }, error: i }) : this._returnResult({ data: { session: a }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(t) {
    if (t)
      return await this._getUser(t);
    await this.initializePromise;
    const r = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    return r.data.user && (this.suppressGetSessionWarning = !0), r;
  }
  async _getUser(t) {
    try {
      return t ? await U(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: t,
        xform: Kt
      }) : await this._useSession(async (r) => {
        var n, a, i;
        const { data: o, error: s } = r;
        if (s)
          throw s;
        return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Je() } : await U(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (a = o.session) === null || a === void 0 ? void 0 : a.access_token) !== null && i !== void 0 ? i : void 0,
          xform: Kt
        });
      });
    } catch (r) {
      if (I(r))
        return Go(r) && (await this._removeSession(), await ye(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(t, r = {}) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(t, r));
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: a, error: i } = n;
        if (i)
          throw i;
        if (!a.session)
          throw new Je();
        const o = a.session;
        let s = null, l = null;
        this.flowType === "pkce" && t.email != null && ([s, l] = await Wr(this.storage, this.storageKey));
        const { data: u, error: c } = await U(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), { code_challenge: s, code_challenge_method: l }),
          jwt: o.access_token,
          xform: Kt
        });
        if (c)
          throw c;
        return o.user = u.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (n) {
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(n))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(t) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(t));
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token)
        throw new Je();
      const r = Date.now() / 1e3;
      let n = r, a = !0, i = null;
      const { payload: o } = ii(t.access_token);
      if (o.exp && (n = o.exp, a = n <= r), a) {
        const { data: s, error: l } = await this._callRefreshToken(t.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!s)
          return { data: { user: null, session: null }, error: null };
        i = s;
      } else {
        const { data: s, error: l } = await this._getUser(t.access_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        i = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: s.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({ data: { user: i.user, session: i }, error: null });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(t) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(t));
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: o, error: s } = r;
          if (s)
            throw s;
          t = (n = o.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!t?.refresh_token)
          throw new Je();
        const { data: a, error: i } = await this._callRefreshToken(t.refresh_token);
        return i ? this._returnResult({ data: { user: null, session: null }, error: i }) : a ? this._returnResult({ data: { user: a.user, session: a }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(t, r) {
    try {
      if (!be())
        throw new ai("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new ai(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Bc("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ai("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
          throw new Bc("No code detected.");
        const { data: h, error: g } = await this._exchangeCodeForSession(t.code);
        if (g)
          throw g;
        const b = new URL(window.location.href);
        return b.searchParams.delete("code"), window.history.replaceState(window.history.state, "", b.toString()), { data: { session: h.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: a, access_token: i, refresh_token: o, expires_in: s, expires_at: l, token_type: u } = t;
      if (!i || !s || !o || !u)
        throw new ai("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), f = parseInt(s);
      let p = c + f;
      l && (p = parseInt(l));
      const d = p - c;
      d * 1e3 <= Vr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${f}s`);
      const v = p - f;
      c - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, p, c) : c - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, p, c);
      const { data: w, error: x } = await this._getUser(i);
      if (x)
        throw x;
      const m = {
        provider_token: n,
        provider_refresh_token: a,
        access_token: i,
        expires_in: f,
        expires_at: p,
        refresh_token: o,
        token_type: u,
        user: w.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: m, redirectType: t.type }, error: null });
    } catch (n) {
      if (I(n))
        return this._returnResult({ data: { session: null, redirectType: null }, error: n });
      throw n;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), t) : !!(t.access_token || t.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(t) {
    const r = await fr(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(t = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(t));
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: a, error: i } = r;
      if (i && !Go(i))
        return this._returnResult({ error: i });
      const o = (n = a.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: s } = await this.admin.signOut(o, t);
        if (s && !(Bw(s) && (s.status === 404 || s.status === 401 || s.status === 403) || Go(s)))
          return this._returnResult({ error: s });
      }
      return t !== "others" && (await this._removeSession(), await ye(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(t) {
    const r = qw(), n = {
      id: r,
      callback: t,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(r);
    })))(), { data: { subscription: n } };
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, a;
      try {
        const { data: { session: i }, error: o } = r;
        if (o)
          throw o;
        await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", t, "session", i);
      } catch (i) {
        await ((a = this.stateChangeEmitters.get(t)) === null || a === void 0 ? void 0 : a.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", i), console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(t, r = {}) {
    let n = null, a = null;
    this.flowType === "pkce" && ([n, a] = await Wr(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await U(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: a,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (i) {
      if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n)
        throw n;
      return this._returnResult({ data: { identities: (t = r.user.identities) !== null && t !== void 0 ? t : [] }, error: null });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(t) {
    return "token" in t ? this.linkIdentityIdToken(t) : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var r;
    try {
      const { data: n, error: a } = await this._useSession(async (i) => {
        var o, s, l, u, c;
        const { data: f, error: p } = i;
        if (p)
          throw p;
        const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
          redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (s = t.options) === null || s === void 0 ? void 0 : s.scopes,
          queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await U(this.fetch, "GET", d, {
          headers: this.headers,
          jwt: (c = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (a)
        throw a;
      return be() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n?.url), this._returnResult({
        data: { provider: t.provider, url: n?.url },
        error: null
      });
    } catch (n) {
      if (I(n))
        return this._returnResult({ data: { provider: t.provider, url: null }, error: n });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const { error: a, data: { session: i } } = r;
        if (a)
          throw a;
        const { options: o, provider: s, token: l, access_token: u, nonce: c } = t, f = await U(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (n = i?.access_token) !== null && n !== void 0 ? n : void 0,
          body: {
            provider: s,
            id_token: l,
            access_token: u,
            nonce: c,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: lt
        }), { data: p, error: d } = f;
        return d ? this._returnResult({ data: { user: null, session: null }, error: d }) : !p || !p.session || !p.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Jr()
        }) : (p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("USER_UPDATED", p.session)), this._returnResult({ data: p, error: d }));
      } catch (a) {
        if (await ye(this.storage, `${this.storageKey}-code-verifier`), I(a))
          return this._returnResult({ data: { user: null, session: null }, error: a });
        throw a;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, a;
        const { data: i, error: o } = r;
        if (o)
          throw o;
        return await U(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt: (a = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && a !== void 0 ? a : void 0
        });
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await _w(async (a) => (a > 0 && await Xw(200 * Math.pow(2, a - 1)), this._debug(r, "refreshing attempt", a), await U(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: t },
        headers: this.headers,
        xform: lt
      })), (a, i) => {
        const o = 200 * Math.pow(2, a);
        return i && Zo(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - n < Vr;
      });
    } catch (n) {
      if (this._debug(r, "error", n), I(n))
        return this._returnResult({ data: { session: null, user: null }, error: n });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return typeof t == "object" && t !== null && "access_token" in t && "refresh_token" in t && "expires_at" in t;
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n), be() && !r.skipBrowserRedirect && window.location.assign(n), { data: { provider: t, url: n }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var t, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const a = await fr(this.storage, this.storageKey);
      if (a && this.userStorage) {
        let o = await fr(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: a.user }, await qr(this.userStorage, this.storageKey + "-user", o)), a.user = (t = o?.user) !== null && t !== void 0 ? t : Xo();
      } else if (a && !a.user && !a.user) {
        const o = await fr(this.storage, this.storageKey + "-user");
        o && o?.user ? (a.user = o.user, await ye(this.storage, this.storageKey + "-user"), await qr(this.storage, this.storageKey, a)) : a.user = Xo();
      }
      if (this._debug(n, "session from storage", a), !this._isValidSession(a)) {
        this._debug(n, "session is not valid"), a !== null && await this._removeSession();
        return;
      }
      const i = ((r = a.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < qo;
      if (this._debug(n, `session has${i ? "" : " not"} expired with margin of ${qo}s`), i) {
        if (this.autoRefreshToken && a.refresh_token) {
          const { error: o } = await this._callRefreshToken(a.refresh_token);
          o && (console.error(o), Zo(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (a.user && a.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: s } = await this._getUser(a.access_token);
          !s && o?.user ? (a.user = o.user, await this._saveSession(a), await this._notifyAllSubscribers("SIGNED_IN", a)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(n, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", a);
    } catch (a) {
      this._debug(n, "error", a), console.error(a);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t)
      throw new Je();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const a = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(a, "begin");
    try {
      this.refreshingDeferred = new po();
      const { data: i, error: o } = await this._refreshAccessToken(t);
      if (o)
        throw o;
      if (!i.session)
        throw new Je();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const s = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(s), s;
    } catch (i) {
      if (this._debug(a, "error", i), I(i)) {
        const o = { data: null, error: i };
        return Zo(i) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o), o;
      }
      throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(a, "end");
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const a = `#_notifyAllSubscribers(${t})`;
    this._debug(a, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel && n && this.broadcastChannel.postMessage({ event: t, session: r });
      const i = [], o = Array.from(this.stateChangeEmitters.values()).map(async (s) => {
        try {
          await s.callback(t, r);
        } catch (l) {
          i.push(l);
        }
      });
      if (await Promise.all(o), i.length > 0) {
        for (let s = 0; s < i.length; s += 1)
          console.error(i[s]);
        throw i[0];
      }
    } finally {
      this._debug(a, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(t) {
    this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0, await ye(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, t), n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && r.user && await qr(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const a = Object.assign({}, r);
      delete a.user;
      const i = Yc(a);
      await qr(this.storage, this.storageKey, i);
    } else {
      const a = Yc(r);
      await qr(this.storage, this.storageKey, a);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await ye(this.storage, this.storageKey), await ye(this.storage, this.storageKey + "-code-verifier"), await ye(this.storage, this.storageKey + "-user"), this.userStorage && await ye(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t && be() && window?.removeEventListener && window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), Vr);
    this.autoRefreshTicker = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t);
    const r = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    this.autoRefreshTicker = null, t && clearInterval(t);
    const r = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, r && clearTimeout(r);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const { data: { session: n } } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const a = Math.floor((n.expires_at * 1e3 - t) / Vr);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${a} ticks, a tick lasts ${Vr}ms, refresh threshold is ${el} ticks`), a <= el && await this._callRefreshToken(n.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof Df)
        this._debug("auto refresh token tick lock not available");
      else
        throw t;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !be() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (t) {
          this._debug("#visibilityChangedCallback", "error", t);
        }
      }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), t || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(t, r, n) {
    const a = [`provider=${encodeURIComponent(r)}`];
    if (n?.redirectTo && a.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && a.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
      const [i, o] = await Wr(this.storage, this.storageKey), s = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      a.push(s.toString());
    }
    if (n?.queryParams) {
      const i = new URLSearchParams(n.queryParams);
      a.push(i.toString());
    }
    return n?.skipBrowserRedirect && a.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${t}?${a.join("&")}`;
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: a, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : await U(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
          headers: this.headers,
          jwt: (n = a?.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, a;
        const { data: i, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        const s = Object.assign({ friendly_name: t.friendlyName, factor_type: t.factorType }, t.factorType === "phone" ? { phone: t.phone } : t.factorType === "totp" ? { issuer: t.issuer } : {}), { data: l, error: u } = await U(this.fetch, "POST", `${this.url}/factors`, {
          body: s,
          headers: this.headers,
          jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (t.factorType === "totp" && l.type === "totp" && (!((a = l?.totp) === null || a === void 0) && a.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: a, error: i } = r;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = Object.assign({ challenge_id: t.challengeId }, "webauthn" in t ? {
            webauthn: Object.assign(Object.assign({}, t.webauthn), { credential_response: t.webauthn.type === "create" ? Ty(t.webauthn.credential_response) : Ry(t.webauthn.credential_response) })
          } : { code: t.code }), { data: s, error: l } = await U(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (n = a?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + s.expires_in }, s)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s), this._returnResult({ data: s, error: l }));
        });
      } catch (r) {
        if (I(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: a, error: i } = r;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = await U(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
            body: t,
            headers: this.headers,
            jwt: (n = a?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          if (o.error)
            return o;
          const { data: s } = o;
          if (s.type !== "webauthn")
            return { data: s, error: null };
          switch (s.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, s), { webauthn: Object.assign(Object.assign({}, s.webauthn), { credential_options: Object.assign(Object.assign({}, s.webauthn.credential_options), { publicKey: Cy(s.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, s), { webauthn: Object.assign(Object.assign({}, s.webauthn), { credential_options: Object.assign(Object.assign({}, s.webauthn.credential_options), { publicKey: Oy(s.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (I(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId
    });
    return n ? this._returnResult({ data: null, error: n }) : await this._verify({
      factorId: t.factorId,
      challengeId: r.id,
      code: t.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var t;
    const { data: { user: r }, error: n } = await this.getUser();
    if (n)
      return { data: null, error: n };
    const a = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const i of (t = r?.factors) !== null && t !== void 0 ? t : [])
      a.all.push(i), i.status === "verified" && a[i.factor_type].push(i);
    return {
      data: a,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(t) {
    var r, n, a, i;
    if (t)
      try {
        const { payload: d } = ii(t);
        let v = null;
        d.aal && (v = d.aal);
        let w = v;
        const { data: { user: x }, error: m } = await this.getUser(t);
        if (m)
          return this._returnResult({ data: null, error: m });
        ((n = (r = x?.factors) === null || r === void 0 ? void 0 : r.filter((b) => b.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (w = "aal2");
        const g = d.amr || [];
        return { data: { currentLevel: v, nextLevel: w, currentAuthenticationMethods: g }, error: null };
      } catch (d) {
        if (I(d))
          return this._returnResult({ data: null, error: d });
        throw d;
      }
    const { data: { session: o }, error: s } = await this.getSession();
    if (s)
      return this._returnResult({ data: null, error: s });
    if (!o)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = ii(o.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let c = u;
    ((i = (a = o.user.factors) === null || a === void 0 ? void 0 : a.filter((d) => d.status === "verified")) !== null && i !== void 0 ? i : []).length > 0 && (c = "aal2");
    const p = l.amr || [];
    return { data: { currentLevel: u, nextLevel: c, currentAuthenticationMethods: p }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: a } = r;
        return a ? this._returnResult({ data: null, error: a }) : n ? await U(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new Je() });
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: a }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!a)
          return this._returnResult({ data: null, error: new Je() });
        const o = await U(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: a.access_token,
          body: { action: "approve" },
          xform: (s) => ({ data: s, error: null })
        });
        return o.data && o.data.redirect_url && be() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (I(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: a }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!a)
          return this._returnResult({ data: null, error: new Je() });
        const o = await U(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: a.access_token,
          body: { action: "deny" },
          xform: (s) => ({ data: s, error: null })
        });
        return o.data && o.data.redirect_url && be() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (I(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? await U(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (a) => ({ data: a, error: null })
        }) : this._returnResult({ data: null, error: new Je() });
      });
    } catch (t) {
      if (I(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: a } = r;
        return a ? this._returnResult({ data: null, error: a }) : n ? (await U(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          query: { client_id: t.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new Je() });
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((s) => s.kid === t);
    if (n)
      return n;
    const a = Date.now();
    if (n = this.jwks.keys.find((s) => s.kid === t), n && this.jwks_cached_at + Mw > a)
      return n;
    const { data: i, error: o } = await U(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = a, n = i.keys.find((s) => s.kid === t), !n) ? null : n;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(t, r = {}) {
    try {
      let n = t;
      if (!n) {
        const { data: d, error: v } = await this.getSession();
        if (v || !d.session)
          return this._returnResult({ data: null, error: v });
        n = d.session.access_token;
      }
      const { header: a, payload: i, signature: o, raw: { header: s, payload: l } } = ii(n);
      r?.allowExpired || iy(i.exp);
      const u = !a.alg || a.alg.startsWith("HS") || !a.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(a.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!u) {
        const { error: d } = await this.getUser(n);
        if (d)
          throw d;
        return {
          data: {
            claims: i,
            header: a,
            signature: o
          },
          error: null
        };
      }
      const c = oy(a.alg), f = await crypto.subtle.importKey("jwk", u, c, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(c, f, o, Kw(`${s}.${l}`)))
        throw new nl("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: a,
          signature: o
        },
        error: null
      };
    } catch (n) {
      if (I(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
Ca.nextInstanceID = {};
const Ly = Ca, By = "2.95.3";
let Hn = "";
typeof Deno < "u" ? Hn = "deno" : typeof document < "u" ? Hn = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Hn = "react-native" : Hn = "node";
const Fy = { "X-Client-Info": `supabase-js-${Hn}/${By}` }, Jy = { headers: Fy }, Wy = { schema: "public" }, Qy = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Yy = {};
function Oa(e) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oa(e);
}
function Hy(e, t) {
  if (Oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ky(e) {
  var t = Hy(e, "string");
  return Oa(t) == "symbol" ? t : t + "";
}
function Vy(e, t, r) {
  return (t = Ky(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Xc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xc(Object(r), !0).forEach(function(n) {
      Vy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const qy = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), Gy = () => Headers, Zy = (e, t, r) => {
  const n = qy(r), a = Gy();
  return async (i, o) => {
    var s;
    const l = (s = await t()) !== null && s !== void 0 ? s : e;
    let u = new a(o?.headers);
    return u.has("apikey") || u.set("apikey", e), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), n(i, oe(oe({}, o), {}, { headers: u }));
  };
};
function Xy(e) {
  return e.endsWith("/") ? e : e + "/";
}
function _y(e, t) {
  var r, n;
  const { db: a, auth: i, realtime: o, global: s } = e, { db: l, auth: u, realtime: c, global: f } = t, p = {
    db: oe(oe({}, l), a),
    auth: oe(oe({}, u), i),
    realtime: oe(oe({}, c), o),
    storage: {},
    global: oe(oe(oe({}, f), s), {}, { headers: oe(oe({}, (r = f?.headers) !== null && r !== void 0 ? r : {}), (n = s?.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: async () => ""
  };
  return e.accessToken ? p.accessToken = e.accessToken : delete p.accessToken, p;
}
function $y(e) {
  const t = e?.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Xy(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var eb = class extends Ly {
  constructor(e) {
    super(e);
  }
}, tb = class {
  /**
  * Create a new client for use in the browser.
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
  * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
  * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
  * @param options.realtime Options passed along to realtime-js constructor.
  * @param options.storage Options passed along to the storage-js constructor.
  * @param options.global.fetch A custom fetch implementation.
  * @param options.global.headers Any additional headers to send with each network request.
  * @example
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  */
  constructor(e, t, r) {
    var n, a;
    this.supabaseUrl = e, this.supabaseKey = t;
    const i = $y(e);
    if (!t) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", i), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", i), this.storageUrl = new URL("storage/v1", i), this.functionsUrl = new URL("functions/v1", i);
    const o = `sb-${i.hostname.split(".")[0]}-auth-token`, s = {
      db: Wy,
      realtime: Yy,
      auth: oe(oe({}, Qy), {}, { storageKey: o }),
      global: Jy
    }, l = _y(r ?? {}, s);
    if (this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (a = l.global.headers) !== null && a !== void 0 ? a : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (c, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      } });
    else {
      var u;
      this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch);
    }
    this.fetch = Zy(t, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(oe({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((c) => this.realtime.setAuth(c)).catch((c) => console.warn("Failed to set initial Realtime auth token:", c)), this.rest = new B0(new URL("rest/v1", i).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new Iw(this.storageUrl.href, this.headers, this.fetch, r?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new P0(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(e) {
    return this.rest.from(e);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(e) {
    return this.rest.schema(e);
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(e, t = {}, r = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(e, t, r);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
  * Returns all Realtime channels.
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var e = this, t, r;
    if (e.accessToken) return await e.accessToken();
    const { data: n } = await e.auth.getSession();
    return (t = (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !== null && t !== void 0 ? t : e.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, userStorage: a, storageKey: i, flowType: o, lock: s, debug: l, throwOnError: u }, c, f) {
    const p = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new eb({
      url: this.authUrl.href,
      headers: oe(oe({}, p), c),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      userStorage: a,
      flowType: o,
      lock: s,
      debug: l,
      throwOnError: u,
      fetch: f,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((d) => d.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(e) {
    return new rw(this.realtimeUrl.href, oe(oe({}, e), {}, { params: oe(oe({}, { apikey: this.supabaseKey }), e?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e, t) => {
      this._handleTokenChanged(e, "CLIENT", t?.access_token);
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const Bf = (e, t, r) => new tb(e, t, r);
function rb() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
rb() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
async function nb(e) {
  const t = e.projectKey.trim();
  if (!t) throw new Error("XOOS projectKey is required.");
  const r = await e.bridge.getProjectConfig(t);
  if (r.provider !== "supabase")
    throw new Error(`Unsupported XOOS data provider '${r.provider}'.`);
  const n = Bf(r.supabaseUrl, r.publishableKey, {
    accessToken: async () => e.bridge.getAccessToken(t),
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
    }
  });
  return { projectKey: t, config: r, supabase: n };
}
async function ab(e) {
  return (await nb(e)).supabase;
}
const Ki = {
  schemaVersion: "1",
  microappKey: "approval-authority-mgmt",
  version: "1.0.7",
  elementName: "xoos-approval-authority-management",
  deliveryType: "native_esm",
  contractVersion: "1",
  minimumRuntimeVersion: "1.0.0",
  dataProjectKey: "xoos-core"
}, Ff = "https://tafhttyrrxmizdcffywx.supabase.co".trim() || "", Jf = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZmh0dHlycnhtaXpkY2ZmeXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTYwNTgsImV4cCI6MjA4MzYzMjA1OH0.g5p9I9ztmH_kuCU3FwXJL-SNqkm95wjeV5Y7BpehRsw".trim() || "";
(!Ff || !Jf) && console.warn(
  "Standalone preview Supabase configuration is missing. XOOS runtime hosting does not use these values."
);
const _c = Bf(
  Ff || "https://example.invalid",
  Jf || "preview-not-configured",
  {
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
    }
  }
), Wf = L.createContext(null);
function ib({
  bridge: e,
  props: t = {},
  portalRoot: r = null,
  navigationTarget: n = null,
  children: a
}) {
  return /* @__PURE__ */ y.jsx(Wf.Provider, { value: { bridge: e, props: t, portalRoot: r, navigationTarget: n }, children: a });
}
function Qf() {
  return L.useContext(Wf);
}
function ob() {
  const e = Qf();
  return L.useMemo(() => {
    if (e) {
      const t = e.bridge.context.user;
      return {
        bridge: e.bridge,
        props: e.props,
        userId: e.bridge.context.user.id,
        email: t.email ?? (typeof e.props.email == "string" ? e.props.email : ""),
        tenantId: e.bridge.context.tenant.id,
        clientId: e.bridge.context.client.id,
        scopes: e.bridge.context.scopes,
        hasScope: (r) => e.bridge.context.scopes.includes(r),
        navigationTarget: e.navigationTarget,
        isRuntimeHosted: !0
      };
    }
    return {
      bridge: null,
      props: {},
      userId: "",
      email: "",
      tenantId: "",
      clientId: null,
      scopes: [],
      hasScope: () => !1,
      navigationTarget: null,
      isRuntimeHosted: !1
    };
  }, [e]);
}
async function sb(e, t, r = {}) {
  if (!e)
    throw new Error("XOOS Runtime navigation is unavailable in standalone preview mode.");
  const n = {
    parentMicroappKey: Ki.microappKey,
    ...r
  };
  await e.navigation.navigate(t, { props: n });
}
const $c = /* @__PURE__ */ new WeakMap();
function lb() {
  return Ki.dataProjectKey;
}
async function ub(e, t) {
  const r = lb();
  let n = $c.get(e);
  n || (n = /* @__PURE__ */ new Map(), $c.set(e, n));
  let a = n.get(r);
  return a || (a = ab({
    projectKey: r,
    bridge: e.data
  }), n.set(r, a)), a;
}
function cb() {
  const e = Qf(), [t, r] = L.useState(
    e ? null : _c
  ), [n, a] = L.useState(null);
  return L.useEffect(() => {
    let i = !1;
    return a(null), e ? (r(null), ub(e.bridge, e.props).then((o) => {
      i || r(o);
    }).catch((o) => {
      i || a(o instanceof Error ? o : new Error(String(o)));
    }), () => {
      i = !0;
    }) : (r(_c), () => {
      i = !0;
    });
  }, [e]), { client: t, error: n, isReady: !!t };
}
function db() {
  const e = ob();
  return {
    tenantId: e.tenantId || null,
    userId: e.userId || null,
    email: e.email || null,
    isAuthenticated: !!(e.userId && e.tenantId),
    isLoading: !1,
    bridge: e.bridge
  };
}
function hb(e, t) {
  if (Array.isArray(e)) return e;
  if (!e || typeof e != "object") return [];
  const r = e;
  return Array.isArray(r.data) ? r.data : Array.isArray(r[t]) ? r[t] : Array.isArray(r.items) ? r.items : [];
}
function fb(e) {
  return e && typeof e == "object" ? e : null;
}
function $o(e, ...t) {
  if (!e) return null;
  for (const r of t) {
    const n = e[r];
    if (typeof n == "string" && n.trim()) return n.trim();
  }
  return null;
}
function pb(e) {
  const { client: t, error: r } = cb(), n = dv(), [a, i] = L.useState([]), [o, s] = L.useState(!0), [l, u] = L.useState(null), c = L.useCallback(async () => {
    if (!e || !t) {
      s(!1);
      return;
    }
    s(!0), u(null);
    try {
      const { data: f, error: p } = await t.from("approval_templates").select("*").eq("tenant_id", e);
      if (p) throw p;
      if (!f || f.length === 0) {
        i([]), s(!1);
        return;
      }
      const d = f.map((b) => b.template_id), { data: v, error: w } = await t.from("approval_template_versions").select("*").in("template_id", d).order("version_number", { ascending: !1 });
      if (w) throw w;
      const x = /* @__PURE__ */ new Map();
      for (const b of v || [])
        x.has(b.template_id) || x.set(b.template_id, {
          version_number: b.version_number,
          status: b.status
        });
      const m = await n.organizationMembers.list(), h = /* @__PURE__ */ new Map();
      for (const b of hb(m, "organizationMembers")) {
        const A = fb(b), k = $o(A, "user_id", "userId", "id", "uuid", "member_id", "memberId");
        k && h.set(k, {
          full_name: $o(A, "full_name", "fullName", "name", "display_name", "displayName") || "—",
          email: $o(A, "email") || ""
        });
      }
      const g = f.map((b) => {
        const A = x.get(b.template_id), k = h.get(b.created_by);
        return {
          template_id: b.template_id,
          approval_template_name: b.approval_template_name,
          approval_type: b.approval_type,
          description: b.description,
          created_by: b.created_by,
          created_at: b.created_at,
          updated_at: b.updated_at,
          tenant_id: b.tenant_id,
          version_number: A?.version_number ?? null,
          version_status: A?.status ?? null,
          creator_name: k?.full_name ?? null,
          creator_email: k?.email ?? null
        };
      });
      i(g);
    } catch (f) {
      console.error("Failed to fetch approval templates:", f), u(f.message || "Failed to fetch data");
    } finally {
      s(!1);
    }
  }, [t, e, n]);
  return L.useEffect(() => {
    if (r) {
      u(r.message), s(!1);
      return;
    }
    c();
  }, [r, c]), { data: a, isLoading: o, error: l, refetch: c };
}
const gb = "data:image/png;base64,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";
function mb() {
  return /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-center min-h-screen w-full bg-white", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "relative w-28 h-28 flex items-center justify-center", children: [
        /* @__PURE__ */ y.jsx("div", { className: "absolute inset-0 rounded-full border-2 border-emerald-200 animate-logo-ring" }),
        /* @__PURE__ */ y.jsx("div", { className: "absolute w-20 h-20 rounded-full bg-emerald-50/60" }),
        /* @__PURE__ */ y.jsx(
          "img",
          {
            src: gb,
            alt: "Loading",
            className: "w-14 h-14 relative z-10"
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx("p", { className: "text-sm text-gray-500 font-medium tracking-wide", children: "Loading application..." })
    ] }),
    /* @__PURE__ */ y.jsx("style", { children: `
        @keyframes logoRing {
          0% { transform: rotate(0deg); border-color: rgba(16, 185, 129, 0.3); }
          50% { border-color: rgba(16, 185, 129, 0.6); }
          100% { transform: rotate(360deg); border-color: rgba(16, 185, 129, 0.3); }
        }
        .animate-logo-ring {
          animation: logoRing 2s linear infinite;
        }
      ` })
  ] });
}
const vb = ["Active", "Draft", "Retired"];
function wb() {
  const { tenantId: e, isLoading: t, bridge: r } = db(), n = uv(), { data: a, isLoading: i, error: o, refetch: s } = pb(e), [l, u] = L.useState(null), [c, f] = L.useState(""), [p, d] = L.useState(!1), [v, w] = L.useState({ status: [] }), [x, m] = L.useState(1), [h, g] = L.useState(10), b = L.useRef(null), A = L.useRef(null);
  L.useEffect(() => {
    const S = () => {
      const z = window.innerHeight, J = 140, ie = 48, H = 40, On = 56, ur = z - J - ie - H - 60, zr = Math.floor(ur / On);
      g(Math.max(5, zr));
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, []), L.useEffect(() => {
    if (!r) return;
    const S = r.events.on("create-authority.close", (z) => {
      z?.action === "created" && s();
    });
    return typeof S == "function" ? S : void 0;
  }, [r, s]), L.useEffect(() => {
    const S = (z) => {
      A.current && !z.composedPath().includes(A.current) && d(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, []);
  const k = () => u(null), C = () => {
    if (!n.can("CREATE")) {
      Fm.error("You don't have permission to create this record.");
      return;
    }
    n.require("CREATE"), sb(r, "create-authority");
  }, N = (S, z) => {
    w((J) => ({
      ...J,
      [S]: J[S].includes(z) ? J[S].filter((ie) => ie !== z) : [...J[S], z]
    })), m(1);
  }, W = (S, z) => {
    w((J) => ({
      ...J,
      [S]: J[S].filter((ie) => ie !== z)
    }));
  }, F = () => {
    w({ status: [] });
  }, ue = v.status.length;
  if (t || i)
    return /* @__PURE__ */ y.jsx(mb, {});
  const ce = a.filter((S) => {
    const z = S.approval_template_name.toLowerCase().includes(c.toLowerCase()), J = S.version_status || "", ie = v.status.length === 0 || v.status.some((H) => H.toLowerCase() === J.toLowerCase());
    return z && ie;
  }), me = Math.ceil(ce.length / h), Ge = ce.slice(
    (x - 1) * h,
    x * h
  ), Ut = a.filter((S) => S.version_status?.toLowerCase() === "active").length, Fe = a.filter((S) => S.version_status?.toLowerCase() === "draft").length, Te = a.filter((S) => S.version_status?.toLowerCase() === "retired").length, R = (S) => ({
    Financial: "bg-blue-50 text-blue-700 border-blue-200",
    Access: "bg-purple-50 text-purple-700 border-purple-200",
    Policy: "bg-amber-50 text-amber-700 border-amber-200",
    Operational: "bg-slate-100 text-slate-700 border-slate-200"
  })[S] || "bg-gray-50 text-gray-700 border-gray-200", O = (S) => ({
    Active: "bg-emerald-500",
    Draft: "bg-amber-500",
    Retired: "bg-gray-400"
  })[S] || "bg-gray-400", j = (S) => {
    if (!S) return "-";
    try {
      return Oc(new Date(S), "MMM dd, yyyy");
    } catch {
      return "-";
    }
  }, G = (S) => {
    if (!S) return "-";
    try {
      return Oc(new Date(S), "MMMM d, yyyy • HH:mm 'UTC'");
    } catch {
      return "-";
    }
  }, D = (S) => S == null ? "-" : `v${S}`;
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("div", { className: "min-h-screen bg-gray-50 px-4 py-6 md:px-8 lg:px-12", children: [
      /* @__PURE__ */ y.jsxs("header", { className: "mb-6", children: [
        /* @__PURE__ */ y.jsx("h1", { className: "text-xl md:text-2xl font-semibold text-gray-900 font-bold", children: "Approval Authorities" }),
        /* @__PURE__ */ y.jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Central inventory of defined approval authorities for governance and audit review." })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "p-4 md:p-5 border-b border-gray-200", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between", children: [
            /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 flex-1 w-full lg:w-auto", children: [
              /* @__PURE__ */ y.jsx("div", { className: "w-full sm:w-80", children: /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ y.jsx(kv, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" }),
                /* @__PURE__ */ y.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search authorities...",
                    value: c,
                    onChange: (S) => f(S.target.value),
                    className: "w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  }
                )
              ] }) }),
              /* @__PURE__ */ y.jsxs("div", { className: "relative", ref: A, children: [
                /* @__PURE__ */ y.jsxs(
                  "button",
                  {
                    onClick: () => d(!p),
                    className: "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative w-full sm:w-auto justify-center",
                    children: [
                      /* @__PURE__ */ y.jsx(xv, { className: "w-4 h-4" }),
                      "Filter",
                      /* @__PURE__ */ y.jsx(mv, { className: `w-4 h-4 transition-transform ${p ? "rotate-180" : ""}` }),
                      ue > 0 && /* @__PURE__ */ y.jsx("span", { className: "absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-semibold", children: ue })
                    ]
                  }
                ),
                p && /* @__PURE__ */ y.jsx("div", { className: "absolute left-0 sm:right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-30 overflow-hidden", children: /* @__PURE__ */ y.jsx("div", { className: "p-4 space-y-4 max-h-96 overflow-y-auto", children: /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("label", { className: "block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2", children: "Status" }),
                  /* @__PURE__ */ y.jsx("div", { className: "space-y-2", children: vb.map((S) => /* @__PURE__ */ y.jsxs("label", { className: "flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors", children: [
                    /* @__PURE__ */ y.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: v.status.includes(S),
                        onChange: () => N("status", S),
                        className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }
                    ),
                    /* @__PURE__ */ y.jsx("span", { className: "text-sm text-gray-700", children: S })
                  ] }, S)) })
                ] }) }) })
              ] })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex flex-wrap items-center gap-4 lg:gap-6", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ y.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold", children: Ut }),
                /* @__PURE__ */ y.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Active" })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ y.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold", children: Fe }),
                /* @__PURE__ */ y.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Draft" })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ y.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-700 text-xs font-bold", children: Te }),
                /* @__PURE__ */ y.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Retired" })
              ] }),
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  onClick: C,
                  className: "xoos-primary-action px-4 py-2.5 text-sm font-semibold rounded-lg shadow-sm transition-all",
                  children: "Create Approval Workflow"
                }
              )
            ] })
          ] }),
          ue > 0 && /* @__PURE__ */ y.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200", children: [
            v.status.map((S) => /* @__PURE__ */ y.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full",
                children: [
                  "Status: ",
                  S,
                  /* @__PURE__ */ y.jsx(
                    "button",
                    {
                      onClick: () => W("status", S),
                      className: "hover:bg-amber-100 rounded-full p-0.5 transition-colors",
                      children: /* @__PURE__ */ y.jsx(bc, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              `status-${S}`
            )),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: F,
                className: "text-xs font-medium text-indigo-600 hover:text-indigo-800 underline",
                children: "Clear all"
              }
            )
          ] })
        ] }),
        a.length === 0 && !o && /* @__PURE__ */ y.jsxs("div", { className: "p-12 text-center", children: [
          /* @__PURE__ */ y.jsx(bv, { className: "w-12 h-12 text-gray-300 mx-auto mb-4" }),
          /* @__PURE__ */ y.jsx("h3", { className: "text-sm font-medium text-gray-900 mb-1", children: "No approval authorities found" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-500", children: "No approval templates exist for this tenant yet." })
        ] }),
        o && /* @__PURE__ */ y.jsx("div", { className: "p-12 text-center", children: /* @__PURE__ */ y.jsx("p", { className: "text-sm text-red-600", children: o }) }),
        a.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "hidden md:block overflow-x-auto", ref: b, children: /* @__PURE__ */ y.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ y.jsx("thead", { children: /* @__PURE__ */ y.jsxs("tr", { className: "bg-gray-50 border-b border-gray-200", children: [
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Authority Name" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Type" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center", children: "Version" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Last Updated" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ y.jsx("tbody", { className: "divide-y divide-gray-100", children: Ge.map((S) => /* @__PURE__ */ y.jsxs(
            "tr",
            {
              className: "hover:bg-gray-50 cursor-pointer transition-colors",
              onClick: () => u(S),
              children: [
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ y.jsx("span", { className: "text-sm font-medium text-[rgb(16,40,40)]", children: S.approval_template_name }) }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border uppercase ${R(S.approval_type)}`, children: S.approval_type }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2 text-center", children: /* @__PURE__ */ y.jsx("span", { className: "text-sm text-gray-500", children: D(S.version_number) }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-gray-700", children: [
                  /* @__PURE__ */ y.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${O(S.version_status || "")}` }),
                  S.version_status || "-"
                ] }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2 text-sm text-gray-500", children: j(S.updated_at) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ y.jsxs(
                  "button",
                  {
                    onClick: (z) => {
                      z.stopPropagation(), u(S);
                    },
                    className: "inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors",
                    children: [
                      /* @__PURE__ */ y.jsx(yv, { className: "w-3.5 h-3.5" }),
                      "View details"
                    ]
                  }
                ) }) })
              ]
            },
            S.template_id
          )) })
        ] }) }),
        a.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "md:hidden divide-y divide-gray-100", children: Ge.map((S) => /* @__PURE__ */ y.jsxs(
          "div",
          {
            onClick: () => u(S),
            className: "p-4 hover:bg-gray-50 cursor-pointer transition-colors",
            children: [
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ y.jsx("div", { className: "flex-1", children: /* @__PURE__ */ y.jsx("h3", { className: "text-sm font-medium text-gray-900 mb-1", children: S.approval_template_name }) }),
                /* @__PURE__ */ y.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-gray-700", children: [
                  /* @__PURE__ */ y.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${O(S.version_status || "")}` }),
                  S.version_status || "-"
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
                /* @__PURE__ */ y.jsx("span", { className: `px-2 py-0.5 rounded border uppercase ${R(S.approval_type)}`, children: S.approval_type }),
                /* @__PURE__ */ y.jsx("span", { children: j(S.updated_at) })
              ] })
            ]
          },
          S.template_id
        )) }),
        me > 1 && /* @__PURE__ */ y.jsxs("div", { className: "px-4 py-2 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2", children: [
          /* @__PURE__ */ y.jsxs("span", { className: "text-xs text-gray-500", children: [
            "Showing ",
            (x - 1) * h + 1,
            " to",
            " ",
            Math.min(x * h, ce.length),
            " of",
            " ",
            ce.length,
            " authorities"
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: () => m(Math.max(1, x - 1)),
                disabled: x === 1,
                className: "w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: /* @__PURE__ */ y.jsx(vv, { className: "w-4 h-4" })
              }
            ),
            Array.from({ length: Math.min(5, me) }, (S, z) => {
              let J;
              return me <= 5 || x <= 3 ? J = z + 1 : x >= me - 2 ? J = me - 4 + z : J = x - 2 + z, /* @__PURE__ */ y.jsx(
                "button",
                {
                  onClick: () => m(J),
                  className: `w-8 h-8 flex items-center justify-center rounded text-xs font-medium transition-all ${x === J ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm border border-transparent" : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"}`,
                  children: J
                },
                J
              );
            }),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: () => m(Math.min(me, x + 1)),
                disabled: x === me,
                className: "w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: /* @__PURE__ */ y.jsx(wv, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    l && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/40 z-40 transition-opacity duration-200",
          onClick: k,
          style: { animation: "fadeIn 200ms ease-out" }
        }
      ),
      /* @__PURE__ */ y.jsxs(
        "aside",
        {
          className: "fixed inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[500px] bg-white z-50 flex flex-col md:border-l border-gray-200 shadow-2xl",
          style: { animation: "slideInRight 250ms ease-out" },
          children: [
            /* @__PURE__ */ y.jsxs("div", { className: "px-4 md:px-6 py-4 md:py-6 border-b border-gray-200 flex items-center justify-between", children: [
              /* @__PURE__ */ y.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Authority Details" }),
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  onClick: k,
                  className: "w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors",
                  children: /* @__PURE__ */ y.jsx(bc, { className: "w-5 h-5 text-gray-600" })
                }
              )
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-6 md:space-y-8", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsx("h5", { className: "text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider", children: "Basic Information" }),
                /* @__PURE__ */ y.jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-4", children: /* @__PURE__ */ y.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Name" }),
                    /* @__PURE__ */ y.jsx("span", { className: "font-medium text-gray-900 text-right max-w-[60%]", children: l.approval_template_name })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Type" }),
                    /* @__PURE__ */ y.jsx("span", { className: "font-medium text-gray-900", children: l.approval_type })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Version" }),
                    /* @__PURE__ */ y.jsx("span", { className: "font-medium text-gray-900", children: D(l.version_number) })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Status" }),
                    /* @__PURE__ */ y.jsx("span", { className: `font-semibold ${l.version_status === "Active" ? "text-emerald-600" : l.version_status === "Draft" ? "text-amber-600" : "text-gray-500"}`, children: l.version_status || "-" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsx("h5", { className: "text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider", children: "Timeline" }),
                /* @__PURE__ */ y.jsxs("div", { className: "relative pl-6 space-y-6", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200" }),
                  /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ y.jsx("div", { className: "absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white ring-4 ring-emerald-50" }),
                    /* @__PURE__ */ y.jsxs("div", { children: [
                      /* @__PURE__ */ y.jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Last Updated" }),
                      /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: j(l.updated_at) })
                    ] })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ y.jsx("div", { className: "absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-gray-400 border-2 border-white ring-4 ring-gray-50" }),
                    /* @__PURE__ */ y.jsxs("div", { children: [
                      /* @__PURE__ */ y.jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Created" }),
                      /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: G(l.created_at) })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsx("h5", { className: "text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider", children: "Created By" }),
                /* @__PURE__ */ y.jsx("div", { className: "p-4 bg-white border border-gray-200 rounded-lg", children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm", children: (l.creator_name || "?").charAt(0).toUpperCase() }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ y.jsx("p", { className: "text-sm font-medium text-gray-900", children: l.creator_name || "Unknown" }),
                    /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: l.creator_email || "-" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ y.jsx("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ y.jsx("p", { className: "text-xs text-blue-800 italic", children: "This record is read-only. For modifications, please contact the Governance Committee." }) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
      ` })
  ] });
}
function yb() {
  return /* @__PURE__ */ y.jsx("div", { className: "size-full", children: /* @__PURE__ */ y.jsx(wb, {}) });
}
function bb(e) {
  if (!e) return null;
  const t = e.getRootNode();
  return t instanceof ShadowRoot && t.host instanceof HTMLElement ? t.host.parentElement : null;
}
function xb(e) {
  const t = _l(), r = sv(), n = bb(r);
  return L.createElement(
    ib,
    {
      bridge: t,
      props: e,
      portalRoot: r,
      navigationTarget: n
    },
    L.createElement(
      L.Fragment,
      null,
      L.createElement(yb),
      L.createElement(_m, { position: "top-right", richColors: !0 })
    )
  );
}
lv({
  id: Ki.microappKey,
  element: Ki.elementName,
  App: xb,
  styles: hv,
  shadowDom: !0
});
export {
  xb as default,
  Ki as microappConfig
};
