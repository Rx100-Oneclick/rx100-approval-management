var Xh = Object.defineProperty;
var _h = (e, t, r) => t in e ? Xh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var nn = (e, t, r) => _h(e, typeof t != "symbol" ? t + "" : t, r);
var dc = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni = Symbol.for("react.element"), $h = Symbol.for("react.portal"), ef = Symbol.for("react.fragment"), tf = Symbol.for("react.strict_mode"), rf = Symbol.for("react.profiler"), nf = Symbol.for("react.provider"), af = Symbol.for("react.context"), of = Symbol.for("react.forward_ref"), sf = Symbol.for("react.suspense"), lf = Symbol.for("react.memo"), uf = Symbol.for("react.lazy"), xl = Symbol.iterator;
function cf(e) {
  return e === null || typeof e != "object" ? null : (e = xl && e[xl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var hc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fc = Object.assign, pc = {};
function $r(e, t, r) {
  this.props = e, this.context = t, this.refs = pc, this.updater = r || hc;
}
$r.prototype.isReactComponent = {};
$r.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$r.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gc() {
}
gc.prototype = $r.prototype;
function Cs(e, t, r) {
  this.props = e, this.context = t, this.refs = pc, this.updater = r || hc;
}
var Os = Cs.prototype = new gc();
Os.constructor = Cs;
fc(Os, $r.prototype);
Os.isPureReactComponent = !0;
var Al = Array.isArray, mc = Object.prototype.hasOwnProperty, Ts = { current: null }, vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, r) {
  var n, i = {}, a = null, o = null;
  if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) mc.call(t, n) && !vc.hasOwnProperty(n) && (i[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) i.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in s = e.defaultProps, s) i[n] === void 0 && (i[n] = s[n]);
  return { $$typeof: ni, type: e, key: a, ref: o, props: i, _owner: Ts.current };
}
function df(e, t) {
  return { $$typeof: ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Rs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function hf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Sl = /\/+/g;
function Wa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hf("" + e.key) : t.toString(36);
}
function zi(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (a) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ni:
        case $h:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = n === "" ? "." + Wa(o, 0) : n, Al(i) ? (r = "", e != null && (r = e.replace(Sl, "$&/") + "/"), zi(i, t, r, "", function(u) {
    return u;
  })) : i != null && (Rs(i) && (i = df(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Sl, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", Al(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = n + Wa(a, s);
    o += zi(a, t, r, l, i);
  }
  else if (l = cf(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = n + Wa(a, s++), o += zi(a, t, r, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ci(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return zi(e, n, "", "", function(a) {
    return t.call(r, a, i++);
  }), n;
}
function ff(e) {
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
var ke = { current: null }, Ui = { transition: null }, pf = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: Ui, ReactCurrentOwner: Ts };
function yc() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: ci, forEach: function(e, t, r) {
  ci(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ci(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ci(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Rs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = $r;
M.Fragment = ef;
M.Profiler = rf;
M.PureComponent = Cs;
M.StrictMode = tf;
M.Suspense = sf;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pf;
M.act = yc;
M.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = fc({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Ts.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) mc.call(t, l) && !vc.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: a, props: n, _owner: o };
};
M.createContext = function(e) {
  return e = { $$typeof: af, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: nf, _context: e }, e.Consumer = e;
};
M.createElement = wc;
M.createFactory = function(e) {
  var t = wc.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: of, render: e };
};
M.isValidElement = Rs;
M.lazy = function(e) {
  return { $$typeof: uf, _payload: { _status: -1, _result: e }, _init: ff };
};
M.memo = function(e, t) {
  return { $$typeof: lf, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = Ui.transition;
  Ui.transition = {};
  try {
    e();
  } finally {
    Ui.transition = t;
  }
};
M.unstable_act = yc;
M.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
M.useContext = function(e) {
  return ke.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
M.useId = function() {
  return ke.current.useId();
};
M.useImperativeHandle = function(e, t, r) {
  return ke.current.useImperativeHandle(e, t, r);
};
M.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
M.useReducer = function(e, t, r) {
  return ke.current.useReducer(e, t, r);
};
M.useRef = function(e) {
  return ke.current.useRef(e);
};
M.useState = function(e) {
  return ke.current.useState(e);
};
M.useSyncExternalStore = function(e, t, r) {
  return ke.current.useSyncExternalStore(e, t, r);
};
M.useTransition = function() {
  return ke.current.useTransition();
};
M.version = "18.3.1";
dc.exports = M;
var F = dc.exports, bc = { exports: {} }, ze = {}, kc = { exports: {} }, xc = {};
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
  function t(O, j) {
    var z = O.length;
    O.push(j);
    e: for (; 0 < z; ) {
      var A = z - 1 >>> 1, U = O[A];
      if (0 < i(U, j)) O[A] = j, O[z] = U, z = A;
      else break e;
    }
  }
  function r(O) {
    return O.length === 0 ? null : O[0];
  }
  function n(O) {
    if (O.length === 0) return null;
    var j = O[0], z = O.pop();
    if (z !== j) {
      O[0] = z;
      e: for (var A = 0, U = O.length, H = U >>> 1; A < H; ) {
        var we = 2 * (A + 1) - 1, Qt = O[we], it = we + 1, pr = O[it];
        if (0 > i(Qt, z)) it < U && 0 > i(pr, Qt) ? (O[A] = pr, O[it] = z, A = it) : (O[A] = Qt, O[we] = z, A = we);
        else if (it < U && 0 > i(pr, z)) O[A] = pr, O[it] = z, A = it;
        else break e;
      }
    }
    return j;
  }
  function i(O, j) {
    var z = O.sortIndex - j.sortIndex;
    return z !== 0 ? z : O.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var l = [], u = [], c = 1, f = null, h = 3, m = !1, v = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(O) {
    for (var j = r(u); j !== null; ) {
      if (j.callback === null) n(u);
      else if (j.startTime <= O) n(u), j.sortIndex = j.expirationTime, t(l, j);
      else break;
      j = r(u);
    }
  }
  function b(O) {
    if (w = !1, g(O), !v) if (r(l) !== null) v = !0, hr(k);
    else {
      var j = r(u);
      j !== null && fr(b, j.startTime - O);
    }
  }
  function k(O, j) {
    v = !1, w && (w = !1, p(R), R = -1), m = !0;
    var z = h;
    try {
      for (g(j), f = r(l); f !== null && (!(f.expirationTime > j) || O && !ne()); ) {
        var A = f.callback;
        if (typeof A == "function") {
          f.callback = null, h = f.priorityLevel;
          var U = A(f.expirationTime <= j);
          j = e.unstable_now(), typeof U == "function" ? f.callback = U : f === r(l) && n(l), g(j);
        } else n(l);
        f = r(l);
      }
      if (f !== null) var H = !0;
      else {
        var we = r(u);
        we !== null && fr(b, we.startTime - j), H = !1;
      }
      return H;
    } finally {
      f = null, h = z, m = !1;
    }
  }
  var E = !1, C = null, R = -1, L = 5, D = -1;
  function ne() {
    return !(e.unstable_now() - D < L);
  }
  function vt() {
    if (C !== null) {
      var O = e.unstable_now();
      D = O;
      var j = !0;
      try {
        j = C(!0, O);
      } finally {
        j ? Wt() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var Wt;
  if (typeof d == "function") Wt = function() {
    d(vt);
  };
  else if (typeof MessageChannel < "u") {
    var ui = new MessageChannel(), Ja = ui.port2;
    ui.port1.onmessage = vt, Wt = function() {
      Ja.postMessage(null);
    };
  } else Wt = function() {
    x(vt, 0);
  };
  function hr(O) {
    C = O, E || (E = !0, Wt());
  }
  function fr(O, j) {
    R = x(function() {
      O(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    v || m || (v = !0, hr(k));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(O) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = h;
    }
    var z = h;
    h = j;
    try {
      return O();
    } finally {
      h = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, j) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var z = h;
    h = O;
    try {
      return j();
    } finally {
      h = z;
    }
  }, e.unstable_scheduleCallback = function(O, j, z) {
    var A = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? A + z : A) : z = A, O) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = z + U, O = { id: c++, callback: j, priorityLevel: O, startTime: z, expirationTime: U, sortIndex: -1 }, z > A ? (O.sortIndex = z, t(u, O), r(l) === null && O === r(u) && (w ? (p(R), R = -1) : w = !0, fr(b, z - A))) : (O.sortIndex = U, t(l, O), v || m || (v = !0, hr(k))), O;
  }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(O) {
    var j = h;
    return function() {
      var z = h;
      h = j;
      try {
        return O.apply(this, arguments);
      } finally {
        h = z;
      }
    };
  };
})(xc);
kc.exports = xc;
var gf = kc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf = F, je = gf;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ac = /* @__PURE__ */ new Set(), In = {};
function cr(e, t) {
  Yr(e, t), Yr(e + "Capture", t);
}
function Yr(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) Ac.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ao = Object.prototype.hasOwnProperty, vf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, El = {}, Cl = {};
function wf(e) {
  return Ao.call(Cl, e) ? !0 : Ao.call(El, e) ? !1 : vf.test(e) ? Cl[e] = !0 : (El[e] = !0, !1);
}
function yf(e, t, r, n) {
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
function bf(e, t, r, n) {
  if (t === null || typeof t > "u" || yf(e, t, r, n)) return !0;
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
function xe(e, t, r, n, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ps = /[\-:]([a-z])/g;
function Ns(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ps,
    Ns
  );
  fe[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ps, Ns);
  fe[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ps, Ns);
  fe[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Is(e, t, r, n) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bf(t, r, i, n) && (r = null), n || i === null ? wf(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var gt = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, di = Symbol.for("react.element"), Cr = Symbol.for("react.portal"), Or = Symbol.for("react.fragment"), js = Symbol.for("react.strict_mode"), So = Symbol.for("react.profiler"), Sc = Symbol.for("react.provider"), Ec = Symbol.for("react.context"), zs = Symbol.for("react.forward_ref"), Eo = Symbol.for("react.suspense"), Co = Symbol.for("react.suspense_list"), Us = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Cc = Symbol.for("react.offscreen"), Ol = Symbol.iterator;
function an(e) {
  return e === null || typeof e != "object" ? null : (e = Ol && e[Ol] || e["@@iterator"], typeof e == "function" ? e : null);
}
var X = Object.assign, Qa;
function mn(e) {
  if (Qa === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    Qa = t && t[1] || "";
  }
  return `
` + Qa + e;
}
var Ka = !1;
function Ha(e, t) {
  if (!e || Ka) return "";
  Ka = !0;
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
      for (var i = u.stack.split(`
`), a = n.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || i[o] !== a[s]) {
              var l = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Ka = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? mn(e) : "";
}
function kf(e) {
  switch (e.tag) {
    case 5:
      return mn(e.type);
    case 16:
      return mn("Lazy");
    case 13:
      return mn("Suspense");
    case 19:
      return mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ha(e.type, !1), e;
    case 11:
      return e = Ha(e.type.render, !1), e;
    case 1:
      return e = Ha(e.type, !0), e;
    default:
      return "";
  }
}
function Oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Or:
      return "Fragment";
    case Cr:
      return "Portal";
    case So:
      return "Profiler";
    case js:
      return "StrictMode";
    case Eo:
      return "Suspense";
    case Co:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ec:
      return (e.displayName || "Context") + ".Consumer";
    case Sc:
      return (e._context.displayName || "Context") + ".Provider";
    case zs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Us:
      return t = e.displayName || null, t !== null ? t : Oo(e.type) || "Memo";
    case bt:
      t = e._payload, e = e._init;
      try {
        return Oo(e(t));
      } catch {
      }
  }
  return null;
}
function xf(e) {
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
      return Oo(t);
    case 8:
      return t === js ? "StrictMode" : "Mode";
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
function Dt(e) {
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
function Oc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Af(e) {
  var t = Oc(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, a = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      n = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function hi(e) {
  e._valueTracker || (e._valueTracker = Af(e));
}
function Tc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = Oc(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Yi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function To(e, t) {
  var r = t.checked;
  return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Tl(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Dt(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Rc(e, t) {
  t = t.checked, t != null && Is(e, "checked", t, !1);
}
function Ro(e, t) {
  Rc(e, t);
  var r = Dt(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Po(e, t.type, r) : t.hasOwnProperty("defaultValue") && Po(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Rl(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Po(e, t, r) {
  (t !== "number" || Yi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var vn = Array.isArray;
function Br(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Dt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function No(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pl(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(S(92));
      if (vn(r)) {
        if (1 < r.length) throw Error(S(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Dt(r) };
}
function Pc(e, t) {
  var r = Dt(t.value), n = Dt(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Nl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Io(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fi, Ic = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fi = fi || document.createElement("div"), fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function jn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = {
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
}, Sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function(e) {
  Sf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kn[t] = kn[e];
  });
});
function jc(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || kn.hasOwnProperty(e) && kn[e] ? ("" + t).trim() : t + "px";
}
function zc(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = jc(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var Ef = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function jo(e, t) {
  if (t) {
    if (Ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function zo(e, t) {
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
var Uo = null;
function Ds(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Do = null, Fr = null, Jr = null;
function Il(e) {
  if (e = oi(e)) {
    if (typeof Do != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Sa(t), Do(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  Fr ? Jr ? Jr.push(e) : Jr = [e] : Fr = e;
}
function Dc() {
  if (Fr) {
    var e = Fr, t = Jr;
    if (Jr = Fr = null, Il(e), t) for (e = 0; e < t.length; e++) Il(t[e]);
  }
}
function Mc(e, t) {
  return e(t);
}
function Lc() {
}
var Ya = !1;
function Bc(e, t, r) {
  if (Ya) return e(t, r);
  Ya = !0;
  try {
    return Mc(e, t, r);
  } finally {
    Ya = !1, (Fr !== null || Jr !== null) && (Lc(), Dc());
  }
}
function zn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Sa(r);
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
  if (r && typeof r != "function") throw Error(S(231, t, typeof r));
  return r;
}
var Mo = !1;
if (dt) try {
  var on = {};
  Object.defineProperty(on, "passive", { get: function() {
    Mo = !0;
  } }), window.addEventListener("test", on, on), window.removeEventListener("test", on, on);
} catch {
  Mo = !1;
}
function Cf(e, t, r, n, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var xn = !1, Vi = null, qi = !1, Lo = null, Of = { onError: function(e) {
  xn = !0, Vi = e;
} };
function Tf(e, t, r, n, i, a, o, s, l) {
  xn = !1, Vi = null, Cf.apply(Of, arguments);
}
function Rf(e, t, r, n, i, a, o, s, l) {
  if (Tf.apply(this, arguments), xn) {
    if (xn) {
      var u = Vi;
      xn = !1, Vi = null;
    } else throw Error(S(198));
    qi || (qi = !0, Lo = u);
  }
}
function dr(e) {
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
function Fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function jl(e) {
  if (dr(e) !== e) throw Error(S(188));
}
function Pf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = dr(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return jl(i), e;
        if (a === n) return jl(i), t;
        a = a.sibling;
      }
      throw Error(S(188));
    }
    if (r.return !== n.return) r = i, n = a;
    else {
      for (var o = !1, s = i.child; s; ) {
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
      if (!o) {
        for (s = a.child; s; ) {
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
        if (!o) throw Error(S(189));
      }
    }
    if (r.alternate !== n) throw Error(S(190));
  }
  if (r.tag !== 3) throw Error(S(188));
  return r.stateNode.current === r ? e : t;
}
function Jc(e) {
  return e = Pf(e), e !== null ? Wc(e) : null;
}
function Wc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qc = je.unstable_scheduleCallback, zl = je.unstable_cancelCallback, Nf = je.unstable_shouldYield, If = je.unstable_requestPaint, ee = je.unstable_now, jf = je.unstable_getCurrentPriorityLevel, Ms = je.unstable_ImmediatePriority, Kc = je.unstable_UserBlockingPriority, Gi = je.unstable_NormalPriority, zf = je.unstable_LowPriority, Hc = je.unstable_IdlePriority, ba = null, rt = null;
function Uf(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function") try {
    rt.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ge = Math.clz32 ? Math.clz32 : Lf, Df = Math.log, Mf = Math.LN2;
function Lf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Df(e) / Mf | 0) | 0;
}
var pi = 64, gi = 4194304;
function wn(e) {
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
function Zi(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, a = e.pingedLanes, o = r & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? n = wn(s) : (a &= o, a !== 0 && (n = wn(a)));
  } else o = r & ~i, o !== 0 ? n = wn(o) : a !== 0 && (n = wn(a));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - Ge(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function Bf(e, t) {
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
function Ff(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Ge(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & r) || s & n) && (i[o] = Bf(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Bo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Yc() {
  var e = pi;
  return pi <<= 1, !(pi & 4194240) && (pi = 64), e;
}
function Va(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ii(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ge(t), e[t] = r;
}
function Jf(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - Ge(r), a = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~a;
  }
}
function Ls(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - Ge(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var W = 0;
function Vc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qc, Bs, Gc, Zc, Xc, Fo = !1, mi = [], Tt = null, Rt = null, Pt = null, Un = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), At = [], Wf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ul(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dn.delete(t.pointerId);
  }
}
function sn(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: a, targetContainers: [i] }, t !== null && (t = oi(t), t !== null && Bs(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Qf(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return Tt = sn(Tt, e, t, r, n, i), !0;
    case "dragenter":
      return Rt = sn(Rt, e, t, r, n, i), !0;
    case "mouseover":
      return Pt = sn(Pt, e, t, r, n, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return Un.set(a, sn(Un.get(a) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, Dn.set(a, sn(Dn.get(a) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function _c(e) {
  var t = _t(e.target);
  if (t !== null) {
    var r = dr(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = Fc(r), t !== null) {
          e.blockedOn = t, Xc(e.priority, function() {
            Gc(r);
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
function Di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Uo = n, r.target.dispatchEvent(n), Uo = null;
    } else return t = oi(r), t !== null && Bs(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Dl(e, t, r) {
  Di(e) && r.delete(t);
}
function Kf() {
  Fo = !1, Tt !== null && Di(Tt) && (Tt = null), Rt !== null && Di(Rt) && (Rt = null), Pt !== null && Di(Pt) && (Pt = null), Un.forEach(Dl), Dn.forEach(Dl);
}
function ln(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, Kf)));
}
function Mn(e) {
  function t(i) {
    return ln(i, e);
  }
  if (0 < mi.length) {
    ln(mi[0], e);
    for (var r = 1; r < mi.length; r++) {
      var n = mi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Tt !== null && ln(Tt, e), Rt !== null && ln(Rt, e), Pt !== null && ln(Pt, e), Un.forEach(t), Dn.forEach(t), r = 0; r < At.length; r++) n = At[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < At.length && (r = At[0], r.blockedOn === null); ) _c(r), r.blockedOn === null && At.shift();
}
var Wr = gt.ReactCurrentBatchConfig, Xi = !0;
function Hf(e, t, r, n) {
  var i = W, a = Wr.transition;
  Wr.transition = null;
  try {
    W = 1, Fs(e, t, r, n);
  } finally {
    W = i, Wr.transition = a;
  }
}
function Yf(e, t, r, n) {
  var i = W, a = Wr.transition;
  Wr.transition = null;
  try {
    W = 4, Fs(e, t, r, n);
  } finally {
    W = i, Wr.transition = a;
  }
}
function Fs(e, t, r, n) {
  if (Xi) {
    var i = Jo(e, t, r, n);
    if (i === null) no(e, t, n, _i, r), Ul(e, n);
    else if (Qf(i, e, t, r, n)) n.stopPropagation();
    else if (Ul(e, n), t & 4 && -1 < Wf.indexOf(e)) {
      for (; i !== null; ) {
        var a = oi(i);
        if (a !== null && qc(a), a = Jo(e, t, r, n), a === null && no(e, t, n, _i, r), a === i) break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else no(e, t, n, null, r);
  }
}
var _i = null;
function Jo(e, t, r, n) {
  if (_i = null, e = Ds(n), e = _t(e), e !== null) if (t = dr(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = Fc(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return _i = e, null;
}
function $c(e) {
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
      switch (jf()) {
        case Ms:
          return 1;
        case Kc:
          return 4;
        case Gi:
        case zf:
          return 16;
        case Hc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null, Js = null, Mi = null;
function ed() {
  if (Mi) return Mi;
  var e, t = Js, r = t.length, n, i = "value" in Ct ? Ct.value : Ct.textContent, a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++) ;
  return Mi = i.slice(e, 1 < n ? 1 - n : void 0);
}
function Li(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vi() {
  return !0;
}
function Ml() {
  return !1;
}
function Ue(e) {
  function t(r, n, i, a, o) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? vi : Ml, this.isPropagationStopped = Ml, this;
  }
  return X(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = vi);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = vi);
  }, persist: function() {
  }, isPersistent: vi }), t;
}
var en = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ws = Ue(en), ai = X({}, en, { view: 0, detail: 0 }), Vf = Ue(ai), qa, Ga, un, ka = X({}, ai, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== un && (un && e.type === "mousemove" ? (qa = e.screenX - un.screenX, Ga = e.screenY - un.screenY) : Ga = qa = 0, un = e), qa);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ga;
} }), Ll = Ue(ka), qf = X({}, ka, { dataTransfer: 0 }), Gf = Ue(qf), Zf = X({}, ai, { relatedTarget: 0 }), Za = Ue(Zf), Xf = X({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _f = Ue(Xf), $f = X({}, en, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ep = Ue($f), tp = X({}, en, { data: 0 }), Bl = Ue(tp), rp = {
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
}, np = {
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
}, ip = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
}
function Qs() {
  return ap;
}
var op = X({}, ai, { key: function(e) {
  if (e.key) {
    var t = rp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? np[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qs, charCode: function(e) {
  return e.type === "keypress" ? Li(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), sp = Ue(op), lp = X({}, ka, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fl = Ue(lp), up = X({}, ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qs }), cp = Ue(up), dp = X({}, en, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hp = Ue(dp), fp = X({}, ka, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pp = Ue(fp), gp = [9, 13, 27, 32], Ks = dt && "CompositionEvent" in window, An = null;
dt && "documentMode" in document && (An = document.documentMode);
var mp = dt && "TextEvent" in window && !An, td = dt && (!Ks || An && 8 < An && 11 >= An), Jl = " ", Wl = !1;
function rd(e, t) {
  switch (e) {
    case "keyup":
      return gp.indexOf(t.keyCode) !== -1;
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
function nd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Tr = !1;
function vp(e, t) {
  switch (e) {
    case "compositionend":
      return nd(t);
    case "keypress":
      return t.which !== 32 ? null : (Wl = !0, Jl);
    case "textInput":
      return e = t.data, e === Jl && Wl ? null : e;
    default:
      return null;
  }
}
function wp(e, t) {
  if (Tr) return e === "compositionend" || !Ks && rd(e, t) ? (e = ed(), Mi = Js = Ct = null, Tr = !1, e) : null;
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
      return td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ql(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yp[e.type] : t === "textarea";
}
function id(e, t, r, n) {
  Uc(n), t = $i(t, "onChange"), 0 < t.length && (r = new Ws("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Sn = null, Ln = null;
function bp(e) {
  gd(e, 0);
}
function xa(e) {
  var t = Nr(e);
  if (Tc(t)) return e;
}
function kp(e, t) {
  if (e === "change") return t;
}
var ad = !1;
if (dt) {
  var Xa;
  if (dt) {
    var _a = "oninput" in document;
    if (!_a) {
      var Kl = document.createElement("div");
      Kl.setAttribute("oninput", "return;"), _a = typeof Kl.oninput == "function";
    }
    Xa = _a;
  } else Xa = !1;
  ad = Xa && (!document.documentMode || 9 < document.documentMode);
}
function Hl() {
  Sn && (Sn.detachEvent("onpropertychange", od), Ln = Sn = null);
}
function od(e) {
  if (e.propertyName === "value" && xa(Ln)) {
    var t = [];
    id(t, Ln, e, Ds(e)), Bc(bp, t);
  }
}
function xp(e, t, r) {
  e === "focusin" ? (Hl(), Sn = t, Ln = r, Sn.attachEvent("onpropertychange", od)) : e === "focusout" && Hl();
}
function Ap(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xa(Ln);
}
function Sp(e, t) {
  if (e === "click") return xa(t);
}
function Ep(e, t) {
  if (e === "input" || e === "change") return xa(t);
}
function Cp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xe = typeof Object.is == "function" ? Object.is : Cp;
function Bn(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Ao.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function Yl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vl(e, t) {
  var r = Yl(e);
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
    r = Yl(r);
  }
}
function sd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ld() {
  for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Yi(e.document);
  }
  return t;
}
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Op(e) {
  var t = ld(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && sd(r.ownerDocument.documentElement, r)) {
    if (n !== null && Hs(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, a = Math.min(n.start, i);
        n = n.end === void 0 ? a : Math.min(n.end, i), !e.extend && a > n && (i = n, n = a, a = i), i = Vl(r, a);
        var o = Vl(
          r,
          n
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Tp = dt && "documentMode" in document && 11 >= document.documentMode, Rr = null, Wo = null, En = null, Qo = !1;
function ql(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Qo || Rr == null || Rr !== Yi(n) || (n = Rr, "selectionStart" in n && Hs(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), En && Bn(En, n) || (En = n, n = $i(Wo, "onSelect"), 0 < n.length && (t = new Ws("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Rr)));
}
function wi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Pr = { animationend: wi("Animation", "AnimationEnd"), animationiteration: wi("Animation", "AnimationIteration"), animationstart: wi("Animation", "AnimationStart"), transitionend: wi("Transition", "TransitionEnd") }, $a = {}, ud = {};
dt && (ud = document.createElement("div").style, "AnimationEvent" in window || (delete Pr.animationend.animation, delete Pr.animationiteration.animation, delete Pr.animationstart.animation), "TransitionEvent" in window || delete Pr.transitionend.transition);
function Aa(e) {
  if ($a[e]) return $a[e];
  if (!Pr[e]) return e;
  var t = Pr[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in ud) return $a[e] = t[r];
  return e;
}
var cd = Aa("animationend"), dd = Aa("animationiteration"), hd = Aa("animationstart"), fd = Aa("transitionend"), pd = /* @__PURE__ */ new Map(), Gl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Lt(e, t) {
  pd.set(e, t), cr(t, [e]);
}
for (var eo = 0; eo < Gl.length; eo++) {
  var to = Gl[eo], Rp = to.toLowerCase(), Pp = to[0].toUpperCase() + to.slice(1);
  Lt(Rp, "on" + Pp);
}
Lt(cd, "onAnimationEnd");
Lt(dd, "onAnimationIteration");
Lt(hd, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(fd, "onTransitionEnd");
Yr("onMouseEnter", ["mouseout", "mouseover"]);
Yr("onMouseLeave", ["mouseout", "mouseover"]);
Yr("onPointerEnter", ["pointerout", "pointerover"]);
Yr("onPointerLeave", ["pointerout", "pointerover"]);
cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Np = new Set("cancel close invalid load scroll toggle".split(" ").concat(yn));
function Zl(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, Rf(n, t, void 0, e), e.currentTarget = null;
}
function gd(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = n.length - 1; 0 <= o; o--) {
        var s = n[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Zl(i, s, u), a = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (s = n[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Zl(i, s, u), a = l;
      }
    }
  }
  if (qi) throw e = Lo, qi = !1, Lo = null, e;
}
function Y(e, t) {
  var r = t[qo];
  r === void 0 && (r = t[qo] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (md(t, e, 2, !1), r.add(n));
}
function ro(e, t, r) {
  var n = 0;
  t && (n |= 4), md(r, e, n, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function Fn(e) {
  if (!e[yi]) {
    e[yi] = !0, Ac.forEach(function(r) {
      r !== "selectionchange" && (Np.has(r) || ro(r, !1, e), ro(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || (t[yi] = !0, ro("selectionchange", !1, t));
  }
}
function md(e, t, r, n) {
  switch ($c(t)) {
    case 1:
      var i = Hf;
      break;
    case 4:
      i = Yf;
      break;
    default:
      i = Fs;
  }
  r = i.bind(null, t, r, e), i = void 0, !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function no(e, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var o = n.tag;
    if (o === 3 || o === 4) {
      var s = n.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (o === 4) for (o = n.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = _t(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    n = n.return;
  }
  Bc(function() {
    var u = a, c = Ds(r), f = [];
    e: {
      var h = pd.get(e);
      if (h !== void 0) {
        var m = Ws, v = e;
        switch (e) {
          case "keypress":
            if (Li(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = sp;
            break;
          case "focusin":
            v = "focus", m = Za;
            break;
          case "focusout":
            v = "blur", m = Za;
            break;
          case "beforeblur":
          case "afterblur":
            m = Za;
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
            m = Ll;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = cp;
            break;
          case cd:
          case dd:
          case hd:
            m = _f;
            break;
          case fd:
            m = hp;
            break;
          case "scroll":
            m = Vf;
            break;
          case "wheel":
            m = pp;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = ep;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Fl;
        }
        var w = (t & 4) !== 0, x = !w && e === "scroll", p = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var d = u, g; d !== null; ) {
          g = d;
          var b = g.stateNode;
          if (g.tag === 5 && b !== null && (g = b, p !== null && (b = zn(d, p), b != null && w.push(Jn(d, b, g)))), x) break;
          d = d.return;
        }
        0 < w.length && (h = new m(h, v, null, r, c), f.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", h && r !== Uo && (v = r.relatedTarget || r.fromElement) && (_t(v) || v[ht])) break e;
        if ((m || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (v = r.relatedTarget || r.toElement, m = u, v = v ? _t(v) : null, v !== null && (x = dr(v), v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = u), m !== v)) {
          if (w = Ll, b = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = Fl, b = "onPointerLeave", p = "onPointerEnter", d = "pointer"), x = m == null ? h : Nr(m), g = v == null ? h : Nr(v), h = new w(b, d + "leave", m, r, c), h.target = x, h.relatedTarget = g, b = null, _t(c) === u && (w = new w(p, d + "enter", v, r, c), w.target = g, w.relatedTarget = x, b = w), x = b, m && v) t: {
            for (w = m, p = v, d = 0, g = w; g; g = gr(g)) d++;
            for (g = 0, b = p; b; b = gr(b)) g++;
            for (; 0 < d - g; ) w = gr(w), d--;
            for (; 0 < g - d; ) p = gr(p), g--;
            for (; d--; ) {
              if (w === p || p !== null && w === p.alternate) break t;
              w = gr(w), p = gr(p);
            }
            w = null;
          }
          else w = null;
          m !== null && Xl(f, h, m, w, !1), v !== null && x !== null && Xl(f, x, v, w, !0);
        }
      }
      e: {
        if (h = u ? Nr(u) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file") var k = kp;
        else if (Ql(h)) if (ad) k = Ep;
        else {
          k = Ap;
          var E = xp;
        }
        else (m = h.nodeName) && m.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = Sp);
        if (k && (k = k(e, u))) {
          id(f, k, r, c);
          break e;
        }
        E && E(e, h, u), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && Po(h, "number", h.value);
      }
      switch (E = u ? Nr(u) : window, e) {
        case "focusin":
          (Ql(E) || E.contentEditable === "true") && (Rr = E, Wo = u, En = null);
          break;
        case "focusout":
          En = Wo = Rr = null;
          break;
        case "mousedown":
          Qo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qo = !1, ql(f, r, c);
          break;
        case "selectionchange":
          if (Tp) break;
        case "keydown":
        case "keyup":
          ql(f, r, c);
      }
      var C;
      if (Ks) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Tr ? rd(e, r) && (R = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
      R && (td && r.locale !== "ko" && (Tr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Tr && (C = ed()) : (Ct = c, Js = "value" in Ct ? Ct.value : Ct.textContent, Tr = !0)), E = $i(u, R), 0 < E.length && (R = new Bl(R, e, null, r, c), f.push({ event: R, listeners: E }), C ? R.data = C : (C = nd(r), C !== null && (R.data = C)))), (C = mp ? vp(e, r) : wp(e, r)) && (u = $i(u, "onBeforeInput"), 0 < u.length && (c = new Bl("onBeforeInput", "beforeinput", null, r, c), f.push({ event: c, listeners: u }), c.data = C));
    }
    gd(f, t);
  });
}
function Jn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function $i(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = zn(e, r), a != null && n.unshift(Jn(e, a, i)), a = zn(e, t), a != null && n.push(Jn(e, a, i))), e = e.return;
  }
  return n;
}
function gr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xl(e, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = zn(r, a), l != null && o.unshift(Jn(r, l, s))) : i || (l = zn(r, a), l != null && o.push(Jn(r, l, s)))), r = r.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ip = /\r\n?/g, jp = /\u0000|\uFFFD/g;
function _l(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(jp, "");
}
function bi(e, t, r) {
  if (t = _l(t), _l(e) !== t && r) throw Error(S(425));
}
function ea() {
}
var Ko = null, Ho = null;
function Yo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Vo = typeof setTimeout == "function" ? setTimeout : void 0, zp = typeof clearTimeout == "function" ? clearTimeout : void 0, $l = typeof Promise == "function" ? Promise : void 0, Up = typeof queueMicrotask == "function" ? queueMicrotask : typeof $l < "u" ? function(e) {
  return $l.resolve(null).then(e).catch(Dp);
} : Vo;
function Dp(e) {
  setTimeout(function() {
    throw e;
  });
}
function io(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), Mn(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  Mn(t);
}
function Nt(e) {
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
function eu(e) {
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
var tn = Math.random().toString(36).slice(2), tt = "__reactFiber$" + tn, Wn = "__reactProps$" + tn, ht = "__reactContainer$" + tn, qo = "__reactEvents$" + tn, Mp = "__reactListeners$" + tn, Lp = "__reactHandles$" + tn;
function _t(e) {
  var t = e[tt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[ht] || r[tt]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = eu(e); e !== null; ) {
        if (r = e[tt]) return r;
        e = eu(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function oi(e) {
  return e = e[tt] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Sa(e) {
  return e[Wn] || null;
}
var Go = [], Ir = -1;
function Bt(e) {
  return { current: e };
}
function V(e) {
  0 > Ir || (e.current = Go[Ir], Go[Ir] = null, Ir--);
}
function K(e, t) {
  Ir++, Go[Ir] = e.current, e.current = t;
}
var Mt = {}, ve = Bt(Mt), Ee = Bt(!1), ir = Mt;
function Vr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Mt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in r) i[a] = t[a];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ce(e) {
  return e = e.childContextTypes, e != null;
}
function ta() {
  V(Ee), V(ve);
}
function tu(e, t, r) {
  if (ve.current !== Mt) throw Error(S(168));
  K(ve, t), K(Ee, r);
}
function vd(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(S(108, xf(e) || "Unknown", i));
  return X({}, r, n);
}
function ra(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, ir = ve.current, K(ve, e), K(Ee, Ee.current), !0;
}
function ru(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(S(169));
  r ? (e = vd(e, t, ir), n.__reactInternalMemoizedMergedChildContext = e, V(Ee), V(ve), K(ve, e)) : V(Ee), K(Ee, r);
}
var st = null, Ea = !1, ao = !1;
function wd(e) {
  st === null ? st = [e] : st.push(e);
}
function Bp(e) {
  Ea = !0, wd(e);
}
function Ft() {
  if (!ao && st !== null) {
    ao = !0;
    var e = 0, t = W;
    try {
      var r = st;
      for (W = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      st = null, Ea = !1;
    } catch (i) {
      throw st !== null && (st = st.slice(e + 1)), Qc(Ms, Ft), i;
    } finally {
      W = t, ao = !1;
    }
  }
  return null;
}
var jr = [], zr = 0, na = null, ia = 0, De = [], Me = 0, ar = null, lt = 1, ut = "";
function Yt(e, t) {
  jr[zr++] = ia, jr[zr++] = na, na = e, ia = t;
}
function yd(e, t, r) {
  De[Me++] = lt, De[Me++] = ut, De[Me++] = ar, ar = e;
  var n = lt;
  e = ut;
  var i = 32 - Ge(n) - 1;
  n &= ~(1 << i), r += 1;
  var a = 32 - Ge(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, lt = 1 << 32 - Ge(t) + i | r << i | n, ut = a + e;
  } else lt = 1 << a | r << i | n, ut = e;
}
function Ys(e) {
  e.return !== null && (Yt(e, 1), yd(e, 1, 0));
}
function Vs(e) {
  for (; e === na; ) na = jr[--zr], jr[zr] = null, ia = jr[--zr], jr[zr] = null;
  for (; e === ar; ) ar = De[--Me], De[Me] = null, ut = De[--Me], De[Me] = null, lt = De[--Me], De[Me] = null;
}
var Ie = null, Ne = null, q = !1, qe = null;
function bd(e, t) {
  var r = Le(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function nu(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Ne = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = ar !== null ? { id: lt, overflow: ut } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Le(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ie = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xo(e) {
  if (q) {
    var t = Ne;
    if (t) {
      var r = t;
      if (!nu(e, t)) {
        if (Zo(e)) throw Error(S(418));
        t = Nt(r.nextSibling);
        var n = Ie;
        t && nu(e, t) ? bd(n, r) : (e.flags = e.flags & -4097 | 2, q = !1, Ie = e);
      }
    } else {
      if (Zo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, q = !1, Ie = e;
    }
  }
}
function iu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ie = e;
}
function ki(e) {
  if (e !== Ie) return !1;
  if (!q) return iu(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yo(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Zo(e)) throw kd(), Error(S(418));
    for (; t; ) bd(e, t), t = Nt(t.nextSibling);
  }
  if (iu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ne = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Ie ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function kd() {
  for (var e = Ne; e; ) e = Nt(e.nextSibling);
}
function qr() {
  Ne = Ie = null, q = !1;
}
function qs(e) {
  qe === null ? qe = [e] : qe.push(e);
}
var Fp = gt.ReactCurrentBatchConfig;
function cn(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(S(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(S(147, e));
      var i = n, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!r._owner) throw Error(S(290, e));
  }
  return e;
}
function xi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function au(e) {
  var t = e._init;
  return t(e._payload);
}
function xd(e) {
  function t(p, d) {
    if (e) {
      var g = p.deletions;
      g === null ? (p.deletions = [d], p.flags |= 16) : g.push(d);
    }
  }
  function r(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), d = d.sibling;
    return null;
  }
  function n(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function i(p, d) {
    return p = Ut(p, d), p.index = 0, p.sibling = null, p;
  }
  function a(p, d, g) {
    return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < d ? (p.flags |= 2, d) : g) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, g, b) {
    return d === null || d.tag !== 6 ? (d = fo(g, p.mode, b), d.return = p, d) : (d = i(d, g), d.return = p, d);
  }
  function l(p, d, g, b) {
    var k = g.type;
    return k === Or ? c(p, d, g.props.children, b, g.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === bt && au(k) === d.type) ? (b = i(d, g.props), b.ref = cn(p, d, g), b.return = p, b) : (b = Hi(g.type, g.key, g.props, null, p.mode, b), b.ref = cn(p, d, g), b.return = p, b);
  }
  function u(p, d, g, b) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = po(g, p.mode, b), d.return = p, d) : (d = i(d, g.children || []), d.return = p, d);
  }
  function c(p, d, g, b, k) {
    return d === null || d.tag !== 7 ? (d = nr(g, p.mode, b, k), d.return = p, d) : (d = i(d, g), d.return = p, d);
  }
  function f(p, d, g) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = fo("" + d, p.mode, g), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case di:
          return g = Hi(d.type, d.key, d.props, null, p.mode, g), g.ref = cn(p, null, d), g.return = p, g;
        case Cr:
          return d = po(d, p.mode, g), d.return = p, d;
        case bt:
          var b = d._init;
          return f(p, b(d._payload), g);
      }
      if (vn(d) || an(d)) return d = nr(d, p.mode, g, null), d.return = p, d;
      xi(p, d);
    }
    return null;
  }
  function h(p, d, g, b) {
    var k = d !== null ? d.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return k !== null ? null : s(p, d, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case di:
          return g.key === k ? l(p, d, g, b) : null;
        case Cr:
          return g.key === k ? u(p, d, g, b) : null;
        case bt:
          return k = g._init, h(
            p,
            d,
            k(g._payload),
            b
          );
      }
      if (vn(g) || an(g)) return k !== null ? null : c(p, d, g, b, null);
      xi(p, g);
    }
    return null;
  }
  function m(p, d, g, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return p = p.get(g) || null, s(d, p, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case di:
          return p = p.get(b.key === null ? g : b.key) || null, l(d, p, b, k);
        case Cr:
          return p = p.get(b.key === null ? g : b.key) || null, u(d, p, b, k);
        case bt:
          var E = b._init;
          return m(p, d, g, E(b._payload), k);
      }
      if (vn(b) || an(b)) return p = p.get(g) || null, c(d, p, b, k, null);
      xi(d, b);
    }
    return null;
  }
  function v(p, d, g, b) {
    for (var k = null, E = null, C = d, R = d = 0, L = null; C !== null && R < g.length; R++) {
      C.index > R ? (L = C, C = null) : L = C.sibling;
      var D = h(p, C, g[R], b);
      if (D === null) {
        C === null && (C = L);
        break;
      }
      e && C && D.alternate === null && t(p, C), d = a(D, d, R), E === null ? k = D : E.sibling = D, E = D, C = L;
    }
    if (R === g.length) return r(p, C), q && Yt(p, R), k;
    if (C === null) {
      for (; R < g.length; R++) C = f(p, g[R], b), C !== null && (d = a(C, d, R), E === null ? k = C : E.sibling = C, E = C);
      return q && Yt(p, R), k;
    }
    for (C = n(p, C); R < g.length; R++) L = m(C, p, R, g[R], b), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? R : L.key), d = a(L, d, R), E === null ? k = L : E.sibling = L, E = L);
    return e && C.forEach(function(ne) {
      return t(p, ne);
    }), q && Yt(p, R), k;
  }
  function w(p, d, g, b) {
    var k = an(g);
    if (typeof k != "function") throw Error(S(150));
    if (g = k.call(g), g == null) throw Error(S(151));
    for (var E = k = null, C = d, R = d = 0, L = null, D = g.next(); C !== null && !D.done; R++, D = g.next()) {
      C.index > R ? (L = C, C = null) : L = C.sibling;
      var ne = h(p, C, D.value, b);
      if (ne === null) {
        C === null && (C = L);
        break;
      }
      e && C && ne.alternate === null && t(p, C), d = a(ne, d, R), E === null ? k = ne : E.sibling = ne, E = ne, C = L;
    }
    if (D.done) return r(
      p,
      C
    ), q && Yt(p, R), k;
    if (C === null) {
      for (; !D.done; R++, D = g.next()) D = f(p, D.value, b), D !== null && (d = a(D, d, R), E === null ? k = D : E.sibling = D, E = D);
      return q && Yt(p, R), k;
    }
    for (C = n(p, C); !D.done; R++, D = g.next()) D = m(C, p, R, D.value, b), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? R : D.key), d = a(D, d, R), E === null ? k = D : E.sibling = D, E = D);
    return e && C.forEach(function(vt) {
      return t(p, vt);
    }), q && Yt(p, R), k;
  }
  function x(p, d, g, b) {
    if (typeof g == "object" && g !== null && g.type === Or && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case di:
          e: {
            for (var k = g.key, E = d; E !== null; ) {
              if (E.key === k) {
                if (k = g.type, k === Or) {
                  if (E.tag === 7) {
                    r(p, E.sibling), d = i(E, g.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === bt && au(k) === E.type) {
                  r(p, E.sibling), d = i(E, g.props), d.ref = cn(p, E, g), d.return = p, p = d;
                  break e;
                }
                r(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            g.type === Or ? (d = nr(g.props.children, p.mode, b, g.key), d.return = p, p = d) : (b = Hi(g.type, g.key, g.props, null, p.mode, b), b.ref = cn(p, d, g), b.return = p, p = b);
          }
          return o(p);
        case Cr:
          e: {
            for (E = g.key; d !== null; ) {
              if (d.key === E) if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                r(p, d.sibling), d = i(d, g.children || []), d.return = p, p = d;
                break e;
              } else {
                r(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = po(g, p.mode, b), d.return = p, p = d;
          }
          return o(p);
        case bt:
          return E = g._init, x(p, d, E(g._payload), b);
      }
      if (vn(g)) return v(p, d, g, b);
      if (an(g)) return w(p, d, g, b);
      xi(p, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, d !== null && d.tag === 6 ? (r(p, d.sibling), d = i(d, g), d.return = p, p = d) : (r(p, d), d = fo(g, p.mode, b), d.return = p, p = d), o(p)) : r(p, d);
  }
  return x;
}
var Gr = xd(!0), Ad = xd(!1), aa = Bt(null), oa = null, Ur = null, Gs = null;
function Zs() {
  Gs = Ur = oa = null;
}
function Xs(e) {
  var t = aa.current;
  V(aa), e._currentValue = t;
}
function _o(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function Qr(e, t) {
  oa = e, Gs = Ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (Gs !== e) if (e = { context: e, memoizedValue: t, next: null }, Ur === null) {
    if (oa === null) throw Error(S(308));
    Ur = e, oa.dependencies = { lanes: 0, firstContext: e };
  } else Ur = Ur.next = e;
  return t;
}
var $t = null;
function _s(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function Sd(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, _s(t)) : (r.next = i.next, i.next = r), t.interleaved = r, ft(e, n);
}
function ft(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var kt = !1;
function $s(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ed(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function It(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, B & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, ft(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, _s(n)) : (t.next = i.next, i.next = t), n.interleaved = t, ft(e, r);
}
function Bi(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ls(e, r);
  }
}
function ou(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, a = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        a === null ? i = a = o : a = a.next = o, r = r.next;
      } while (r !== null);
      a === null ? i = a = t : a = a.next = t;
    } else i = a = t;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function sa(e, t, r, n) {
  var i = e.updateQueue;
  kt = !1;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? a = u : o.next = u, o = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== o && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (a !== null) {
    var f = i.baseState;
    o = 0, c = u = l = null, s = a;
    do {
      var h = s.lane, m = s.eventTime;
      if ((n & h) === h) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var v = e, w = s;
          switch (h = t, m = r, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                f = v.call(m, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, h = typeof v == "function" ? v.call(m, f, h) : v, h == null) break e;
              f = X({}, f, h);
              break e;
            case 2:
              kt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [s] : h.push(s));
      } else m = { eventTime: m, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = m, l = f) : c = c.next = m, o |= h;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    sr |= o, e.lanes = o, e.memoizedState = f;
  }
}
function su(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(S(191, i));
      i.call(n);
    }
  }
}
var si = {}, nt = Bt(si), Qn = Bt(si), Kn = Bt(si);
function er(e) {
  if (e === si) throw Error(S(174));
  return e;
}
function el(e, t) {
  switch (K(Kn, t), K(Qn, e), K(nt, si), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Io(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Io(t, e);
  }
  V(nt), K(nt, t);
}
function Zr() {
  V(nt), V(Qn), V(Kn);
}
function Cd(e) {
  er(Kn.current);
  var t = er(nt.current), r = Io(t, e.type);
  t !== r && (K(Qn, e), K(nt, r));
}
function tl(e) {
  Qn.current === e && (V(nt), V(Qn));
}
var G = Bt(0);
function la(e) {
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
var oo = [];
function rl() {
  for (var e = 0; e < oo.length; e++) oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var Fi = gt.ReactCurrentDispatcher, so = gt.ReactCurrentBatchConfig, or = 0, Z = null, ae = null, se = null, ua = !1, Cn = !1, Hn = 0, Jp = 0;
function pe() {
  throw Error(S(321));
}
function nl(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!Xe(e[r], t[r])) return !1;
  return !0;
}
function il(e, t, r, n, i, a) {
  if (or = a, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fi.current = e === null || e.memoizedState === null ? Hp : Yp, e = r(n, i), Cn) {
    a = 0;
    do {
      if (Cn = !1, Hn = 0, 25 <= a) throw Error(S(301));
      a += 1, se = ae = null, t.updateQueue = null, Fi.current = Vp, e = r(n, i);
    } while (Cn);
  }
  if (Fi.current = ca, t = ae !== null && ae.next !== null, or = 0, se = ae = Z = null, ua = !1, t) throw Error(S(300));
  return e;
}
function al() {
  var e = Hn !== 0;
  return Hn = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? Z.memoizedState = se = e : se = se.next = e, se;
}
function Je() {
  if (ae === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = se === null ? Z.memoizedState : se.next;
  if (t !== null) se = t, ae = e;
  else {
    if (e === null) throw Error(S(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, se === null ? Z.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lo(e) {
  var t = Je(), r = t.queue;
  if (r === null) throw Error(S(311));
  r.lastRenderedReducer = e;
  var n = ae, i = n.baseQueue, a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    n.baseQueue = i = a, r.pending = null;
  }
  if (i !== null) {
    a = i.next, n = n.baseState;
    var s = o = null, l = null, u = a;
    do {
      var c = u.lane;
      if ((or & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = f, o = n) : l = l.next = f, Z.lanes |= c, sr |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = n : l.next = s, Xe(n, t.memoizedState) || (Se = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, Z.lanes |= a, sr |= a, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function uo(e) {
  var t = Je(), r = t.queue;
  if (r === null) throw Error(S(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    Xe(a, t.memoizedState) || (Se = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a;
  }
  return [a, n];
}
function Od() {
}
function Td(e, t) {
  var r = Z, n = Je(), i = t(), a = !Xe(n.memoizedState, i);
  if (a && (n.memoizedState = i, Se = !0), n = n.queue, ol(Nd.bind(null, r, n, e), [e]), n.getSnapshot !== t || a || se !== null && se.memoizedState.tag & 1) {
    if (r.flags |= 2048, Vn(9, Pd.bind(null, r, n, i, t), void 0, null), le === null) throw Error(S(349));
    or & 30 || Rd(r, t, i);
  }
  return i;
}
function Rd(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function Pd(e, t, r, n) {
  t.value = r, t.getSnapshot = n, Id(t) && jd(e);
}
function Nd(e, t, r) {
  return r(function() {
    Id(t) && jd(e);
  });
}
function Id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Xe(e, r);
  } catch {
    return !0;
  }
}
function jd(e) {
  var t = ft(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function lu(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kp.bind(null, Z, e), [t.memoizedState, e];
}
function Vn(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function zd() {
  return Je().memoizedState;
}
function Ji(e, t, r, n) {
  var i = et();
  Z.flags |= e, i.memoizedState = Vn(1 | t, r, void 0, n === void 0 ? null : n);
}
function Ca(e, t, r, n) {
  var i = Je();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (ae !== null) {
    var o = ae.memoizedState;
    if (a = o.destroy, n !== null && nl(n, o.deps)) {
      i.memoizedState = Vn(t, r, a, n);
      return;
    }
  }
  Z.flags |= e, i.memoizedState = Vn(1 | t, r, a, n);
}
function uu(e, t) {
  return Ji(8390656, 8, e, t);
}
function ol(e, t) {
  return Ca(2048, 8, e, t);
}
function Ud(e, t) {
  return Ca(4, 2, e, t);
}
function Dd(e, t) {
  return Ca(4, 4, e, t);
}
function Md(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ld(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Ca(4, 4, Md.bind(null, t, e), r);
}
function sl() {
}
function Bd(e, t) {
  var r = Je();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && nl(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function Fd(e, t) {
  var r = Je();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && nl(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function Jd(e, t, r) {
  return or & 21 ? (Xe(r, t) || (r = Yc(), Z.lanes |= r, sr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = r);
}
function Wp(e, t) {
  var r = W;
  W = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = so.transition;
  so.transition = {};
  try {
    e(!1), t();
  } finally {
    W = r, so.transition = n;
  }
}
function Wd() {
  return Je().memoizedState;
}
function Qp(e, t, r) {
  var n = zt(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, Qd(e)) Kd(t, r);
  else if (r = Sd(e, t, r, n), r !== null) {
    var i = be();
    Ze(r, e, n, i), Hd(r, t, n);
  }
}
function Kp(e, t, r) {
  var n = zt(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Qd(e)) Kd(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, r);
      if (i.hasEagerState = !0, i.eagerState = s, Xe(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, _s(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = Sd(e, t, i, n), r !== null && (i = be(), Ze(r, e, n, i), Hd(r, t, n));
  }
}
function Qd(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function Kd(e, t) {
  Cn = ua = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Hd(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ls(e, r);
  }
}
var ca = { readContext: Fe, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Hp = { readContext: Fe, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: uu, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Ji(
    4194308,
    4,
    Md.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Ji(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ji(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = et();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = et();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = Qp.bind(null, Z, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: lu, useDebugValue: sl, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = lu(!1), t = e[0];
  return e = Wp.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Z, i = et();
  if (q) {
    if (r === void 0) throw Error(S(407));
    r = r();
  } else {
    if (r = t(), le === null) throw Error(S(349));
    or & 30 || Rd(n, t, r);
  }
  i.memoizedState = r;
  var a = { value: r, getSnapshot: t };
  return i.queue = a, uu(Nd.bind(
    null,
    n,
    a,
    e
  ), [e]), n.flags |= 2048, Vn(9, Pd.bind(null, n, a, r, t), void 0, null), r;
}, useId: function() {
  var e = et(), t = le.identifierPrefix;
  if (q) {
    var r = ut, n = lt;
    r = (n & ~(1 << 32 - Ge(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Hn++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = Jp++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Yp = {
  readContext: Fe,
  useCallback: Bd,
  useContext: Fe,
  useEffect: ol,
  useImperativeHandle: Ld,
  useInsertionEffect: Ud,
  useLayoutEffect: Dd,
  useMemo: Fd,
  useReducer: lo,
  useRef: zd,
  useState: function() {
    return lo(Yn);
  },
  useDebugValue: sl,
  useDeferredValue: function(e) {
    var t = Je();
    return Jd(t, ae.memoizedState, e);
  },
  useTransition: function() {
    var e = lo(Yn)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: Od,
  useSyncExternalStore: Td,
  useId: Wd,
  unstable_isNewReconciler: !1
}, Vp = { readContext: Fe, useCallback: Bd, useContext: Fe, useEffect: ol, useImperativeHandle: Ld, useInsertionEffect: Ud, useLayoutEffect: Dd, useMemo: Fd, useReducer: uo, useRef: zd, useState: function() {
  return uo(Yn);
}, useDebugValue: sl, useDeferredValue: function(e) {
  var t = Je();
  return ae === null ? t.memoizedState = e : Jd(t, ae.memoizedState, e);
}, useTransition: function() {
  var e = uo(Yn)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: Od, useSyncExternalStore: Td, useId: Wd, unstable_isNewReconciler: !1 };
function Ke(e, t) {
  if (e && e.defaultProps) {
    t = X({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function $o(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : X({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Oa = { isMounted: function(e) {
  return (e = e._reactInternals) ? dr(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = be(), i = zt(e), a = ct(n, i);
  a.payload = t, r != null && (a.callback = r), t = It(e, a, i), t !== null && (Ze(t, e, i, n), Bi(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = be(), i = zt(e), a = ct(n, i);
  a.tag = 1, a.payload = t, r != null && (a.callback = r), t = It(e, a, i), t !== null && (Ze(t, e, i, n), Bi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = be(), n = zt(e), i = ct(r, n);
  i.tag = 2, t != null && (i.callback = t), t = It(e, i, n), t !== null && (Ze(t, e, n, r), Bi(t, e, n));
} };
function cu(e, t, r, n, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(r, n) || !Bn(i, a) : !0;
}
function Yd(e, t, r) {
  var n = !1, i = Mt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Fe(a) : (i = Ce(t) ? ir : ve.current, n = t.contextTypes, a = (n = n != null) ? Vr(e, i) : Mt), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Oa, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function du(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Oa.enqueueReplaceState(t, t.state, null);
}
function es(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, $s(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Fe(a) : (a = Ce(t) ? ir : ve.current, i.context = Vr(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && ($o(e, t, a, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Oa.enqueueReplaceState(i, i.state, null), sa(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xr(e, t) {
  try {
    var r = "", n = t;
    do
      r += kf(n), n = n.return;
    while (n);
    var i = r;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function co(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ts(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var qp = typeof WeakMap == "function" ? WeakMap : Map;
function Vd(e, t, r) {
  r = ct(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    ha || (ha = !0, ds = n), ts(e, t);
  }, r;
}
function qd(e, t, r) {
  r = ct(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      ts(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
    ts(e, t), typeof n != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), r;
}
function hu(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new qp();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = lg.bind(null, e, t, r), t.then(e, e));
}
function fu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pu(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = ct(-1, 1), t.tag = 2, It(r, t, 1))), r.lanes |= 1), e);
}
var Gp = gt.ReactCurrentOwner, Se = !1;
function ye(e, t, r, n) {
  t.child = e === null ? Ad(t, null, r, n) : Gr(t, e.child, r, n);
}
function gu(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return Qr(t, i), n = il(e, t, r, n, a, i), r = al(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : (q && r && Ys(t), t.flags |= 1, ye(e, t, n, i), t.child);
}
function mu(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" && !gl(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, Gd(e, t, a, n, i)) : (e = Hi(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Bn, r(o, n) && e.ref === t.ref) return pt(e, t, i);
  }
  return t.flags |= 1, e = Ut(a, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Gd(e, t, r, n, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Bn(a, n) && e.ref === t.ref) if (Se = !1, t.pendingProps = n = a, (e.lanes & i) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, pt(e, t, i);
  }
  return rs(e, t, r, n, i);
}
function Zd(e, t, r) {
  var n = t.pendingProps, i = n.children, a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Mr, Re), Re |= r;
  else {
    if (!(r & 1073741824)) return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Mr, Re), Re |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = a !== null ? a.baseLanes : r, K(Mr, Re), Re |= n;
  }
  else a !== null ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, K(Mr, Re), Re |= n;
  return ye(e, t, i, r), t.child;
}
function Xd(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function rs(e, t, r, n, i) {
  var a = Ce(r) ? ir : ve.current;
  return a = Vr(t, a), Qr(t, i), r = il(e, t, r, n, a, i), n = al(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : (q && n && Ys(t), t.flags |= 1, ye(e, t, r, i), t.child);
}
function vu(e, t, r, n, i) {
  if (Ce(r)) {
    var a = !0;
    ra(t);
  } else a = !1;
  if (Qr(t, i), t.stateNode === null) Wi(e, t), Yd(t, r, n), es(t, r, n, i), n = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Fe(u) : (u = Ce(r) ? ir : ve.current, u = Vr(t, u));
    var c = r.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== n || l !== u) && du(t, o, n, u), kt = !1;
    var h = t.memoizedState;
    o.state = h, sa(t, n, o, i), l = t.memoizedState, s !== n || h !== l || Ee.current || kt ? (typeof c == "function" && ($o(t, r, c, n), l = t.memoizedState), (s = kt || cu(t, r, s, n, h, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = u, n = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    o = t.stateNode, Ed(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Ke(t.type, s), o.props = u, f = t.pendingProps, h = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = Fe(l) : (l = Ce(r) ? ir : ve.current, l = Vr(t, l));
    var m = r.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || h !== l) && du(t, o, n, l), kt = !1, h = t.memoizedState, o.state = h, sa(t, n, o, i);
    var v = t.memoizedState;
    s !== f || h !== v || Ee.current || kt ? (typeof m == "function" && ($o(t, r, m, n), v = t.memoizedState), (u = kt || cu(t, r, u, n, h, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, v, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, v, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), o.props = n, o.state = v, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return ns(e, t, r, n, a, i);
}
function ns(e, t, r, n, i, a) {
  Xd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && ru(t, r, !1), pt(e, t, a);
  n = t.stateNode, Gp.current = t;
  var s = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && o ? (t.child = Gr(t, e.child, null, a), t.child = Gr(t, null, s, a)) : ye(e, t, s, a), t.memoizedState = n.state, i && ru(t, r, !0), t.child;
}
function _d(e) {
  var t = e.stateNode;
  t.pendingContext ? tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tu(e, t.context, !1), el(e, t.containerInfo);
}
function wu(e, t, r, n, i) {
  return qr(), qs(i), t.flags |= 256, ye(e, t, r, n), t.child;
}
var is = { dehydrated: null, treeContext: null, retryLane: 0 };
function as(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $d(e, t, r) {
  var n = t.pendingProps, i = G.current, a = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), K(G, i & 1), e === null)
    return Xo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = n.children, e = n.fallback, a ? (n = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(n & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Pa(o, n, 0, null), e = nr(e, n, r, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = as(r), t.memoizedState = is, e) : ll(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Zp(e, t, o, n, s, i, r);
  if (a) {
    a = n.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Ut(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = Ut(s, a) : (a = nr(a, o, r, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, o = e.child.memoizedState, o = o === null ? as(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~r, t.memoizedState = is, n;
  }
  return a = e.child, e = a.sibling, n = Ut(a, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function ll(e, t) {
  return t = Pa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ai(e, t, r, n) {
  return n !== null && qs(n), Gr(t, e.child, null, r), e = ll(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Zp(e, t, r, n, i, a, o) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = co(Error(S(422))), Ai(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = n.fallback, i = t.mode, n = Pa({ mode: "visible", children: n.children }, i, 0, null), a = nr(a, i, o, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, t.mode & 1 && Gr(t, e.child, null, o), t.child.memoizedState = as(o), t.memoizedState = is, a);
  if (!(t.mode & 1)) return Ai(e, t, o, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var s = n.dgst;
    return n = s, a = Error(S(419)), n = co(a, n, void 0), Ai(e, t, o, n);
  }
  if (s = (o & e.childLanes) !== 0, Se || s) {
    if (n = le, n !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, ft(e, i), Ze(n, e, i, -1));
    }
    return pl(), n = co(Error(S(421))), Ai(e, t, o, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ug.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, Ne = Nt(i.nextSibling), Ie = t, q = !0, qe = null, e !== null && (De[Me++] = lt, De[Me++] = ut, De[Me++] = ar, lt = e.id, ut = e.overflow, ar = t), t = ll(t, n.children), t.flags |= 4096, t);
}
function yu(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), _o(e.return, t, r);
}
function ho(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i);
}
function eh(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, a = n.tail;
  if (ye(e, t, n.children, r), n = G.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && yu(e, r, t);
      else if (e.tag === 19) yu(e, r, t);
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
  if (K(G, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && la(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), ho(t, !1, i, r, a);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && la(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      ho(t, !0, r, null, a);
      break;
    case "together":
      ho(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), sr |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, r = Ut(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Ut(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function Xp(e, t, r) {
  switch (t.tag) {
    case 3:
      _d(t), qr();
      break;
    case 5:
      Cd(t);
      break;
    case 1:
      Ce(t.type) && ra(t);
      break;
    case 4:
      el(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      K(aa, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (K(G, G.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? $d(e, t, r) : (K(G, G.current & 1), e = pt(e, t, r), e !== null ? e.sibling : null);
      K(G, G.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return eh(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K(G, G.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zd(e, t, r);
  }
  return pt(e, t, r);
}
var th, os, rh, nh;
th = function(e, t) {
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
os = function() {
};
rh = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, er(nt.current);
    var a = null;
    switch (r) {
      case "input":
        i = To(e, i), n = To(e, n), a = [];
        break;
      case "select":
        i = X({}, i, { value: void 0 }), n = X({}, n, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = No(e, i), n = No(e, n), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ea);
    }
    jo(r, n);
    var o;
    r = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (In.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = i?.[u], n.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (r || (r = {}), r[o] = l[o]);
      } else r || (a || (a = []), a.push(
        u,
        r
      )), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (In.hasOwnProperty(u) ? (l != null && u === "onScroll" && Y("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
nh = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function dn(e, t) {
  if (!q) switch (e.tailMode) {
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
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function _p(e, t, r) {
  var n = t.pendingProps;
  switch (Vs(t), t.tag) {
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
      return ge(t), null;
    case 1:
      return Ce(t.type) && ta(), ge(t), null;
    case 3:
      return n = t.stateNode, Zr(), V(Ee), V(ve), rl(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qe !== null && (ps(qe), qe = null))), os(e, t), ge(t), null;
    case 5:
      tl(t);
      var i = er(Kn.current);
      if (r = t.type, e !== null && t.stateNode != null) rh(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(S(166));
          return ge(t), null;
        }
        if (e = er(nt.current), ki(t)) {
          n = t.stateNode, r = t.type;
          var a = t.memoizedProps;
          switch (n[tt] = t, n[Wn] = a, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              Y("cancel", n), Y("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < yn.length; i++) Y(yn[i], n);
              break;
            case "source":
              Y("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                n
              ), Y("load", n);
              break;
            case "details":
              Y("toggle", n);
              break;
            case "input":
              Tl(n, a), Y("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!a.multiple }, Y("invalid", n);
              break;
            case "textarea":
              Pl(n, a), Y("invalid", n);
          }
          jo(r, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? n.textContent !== s && (a.suppressHydrationWarning !== !0 && bi(n.textContent, s, e), i = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && bi(
              n.textContent,
              s,
              e
            ), i = ["children", "" + s]) : In.hasOwnProperty(o) && s != null && o === "onScroll" && Y("scroll", n);
          }
          switch (r) {
            case "input":
              hi(n), Rl(n, a, !0);
              break;
            case "textarea":
              hi(n), Nl(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = ea);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nc(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, { is: n.is }) : (e = o.createElement(r), r === "select" && (o = e, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r), e[tt] = t, e[Wn] = n, th(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = zo(r, n), r) {
              case "dialog":
                Y("cancel", e), Y("close", e), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < yn.length; i++) Y(yn[i], e);
                i = n;
                break;
              case "source":
                Y("error", e), i = n;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), i = n;
                break;
              case "details":
                Y("toggle", e), i = n;
                break;
              case "input":
                Tl(e, n), i = To(e, n), Y("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = X({}, n, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                Pl(e, n), i = No(e, n), Y("invalid", e);
                break;
              default:
                i = n;
            }
            jo(r, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? zc(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ic(e, l)) : a === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && jn(e, l) : typeof l == "number" && jn(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (In.hasOwnProperty(a) ? l != null && a === "onScroll" && Y("scroll", e) : l != null && Is(e, a, l, o));
            }
            switch (r) {
              case "input":
                hi(e), Rl(e, n, !1);
                break;
              case "textarea":
                hi(e), Nl(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Dt(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, a = n.value, a != null ? Br(e, !!n.multiple, a, !1) : n.defaultValue != null && Br(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ea);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) nh(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(S(166));
        if (r = er(Kn.current), er(nt.current), ki(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[tt] = t, (a = n.nodeValue !== r) && (e = Ie, e !== null)) switch (e.tag) {
            case 3:
              bi(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && bi(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[tt] = t, t.stateNode = n;
      }
      return ge(t), null;
    case 13:
      if (V(G), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && Ne !== null && t.mode & 1 && !(t.flags & 128)) kd(), qr(), t.flags |= 98560, a = !1;
        else if (a = ki(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(S(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(S(317));
            a[tt] = t;
          } else qr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ge(t), a = !1;
        } else qe !== null && (ps(qe), qe = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? oe === 0 && (oe = 3) : pl())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
    case 4:
      return Zr(), os(e, t), e === null && Fn(t.stateNode.containerInfo), ge(t), null;
    case 10:
      return Xs(t.type._context), ge(t), null;
    case 17:
      return Ce(t.type) && ta(), ge(t), null;
    case 19:
      if (V(G), a = t.memoizedState, a === null) return ge(t), null;
      if (n = (t.flags & 128) !== 0, o = a.rendering, o === null) if (n) dn(a, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = la(e), o !== null) {
            for (t.flags |= 128, dn(a, !1), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) a = r, e = n, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return K(G, G.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && ee() > _r && (t.flags |= 128, n = !0, dn(a, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = la(o), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), dn(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !q) return ge(t), null;
        } else 2 * ee() - a.renderingStartTime > _r && r !== 1073741824 && (t.flags |= 128, n = !0, dn(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (r = a.last, r !== null ? r.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ee(), t.sibling = null, r = G.current, K(G, n ? r & 1 | 2 : r & 1), t) : (ge(t), null);
    case 22:
    case 23:
      return fl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Re & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function $p(e, t) {
  switch (Vs(t), t.tag) {
    case 1:
      return Ce(t.type) && ta(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Zr(), V(Ee), V(ve), rl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return tl(t), null;
    case 13:
      if (V(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        qr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(G), null;
    case 4:
      return Zr(), null;
    case 10:
      return Xs(t.type._context), null;
    case 22:
    case 23:
      return fl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Si = !1, me = !1, eg = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Dr(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    $(e, t, n);
  }
  else r.current = null;
}
function ss(e, t, r) {
  try {
    r();
  } catch (n) {
    $(e, t, n);
  }
}
var bu = !1;
function tg(e, t) {
  if (Ko = Xi, e = ld(), Hs(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, a = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, a.nodeType;
        } catch {
          r = null;
          break e;
        }
        var o = 0, s = -1, l = -1, u = 0, c = 0, f = e, h = null;
        t: for (; ; ) {
          for (var m; f !== r || i !== 0 && f.nodeType !== 3 || (s = o + i), f !== a || n !== 0 && f.nodeType !== 3 || (l = o + n), f.nodeType === 3 && (o += f.nodeValue.length), (m = f.firstChild) !== null; )
            h = f, f = m;
          for (; ; ) {
            if (f === e) break t;
            if (h === r && ++u === i && (s = o), h === a && ++c === n && (l = o), (m = f.nextSibling) !== null) break;
            f = h, h = f.parentNode;
          }
          f = m;
        }
        r = s === -1 || l === -1 ? null : { start: s, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Ho = { focusedElem: e, selectionRange: r }, Xi = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
  else for (; T !== null; ) {
    t = T;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, x = v.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ke(t.type, w), x);
            p.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(S(163));
      }
    } catch (b) {
      $(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return v = bu, bu = !1, v;
}
function On(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && ss(t, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Ta(e, t) {
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
function ls(e) {
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
function ih(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ih(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tt], delete t[Wn], delete t[qo], delete t[Mp], delete t[Lp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ah(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ah(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function us(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ea));
  else if (n !== 4 && (e = e.child, e !== null)) for (us(e, t, r), e = e.sibling; e !== null; ) us(e, t, r), e = e.sibling;
}
function cs(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (cs(e, t, r), e = e.sibling; e !== null; ) cs(e, t, r), e = e.sibling;
}
var de = null, Ye = !1;
function wt(e, t, r) {
  for (r = r.child; r !== null; ) oh(e, t, r), r = r.sibling;
}
function oh(e, t, r) {
  if (rt && typeof rt.onCommitFiberUnmount == "function") try {
    rt.onCommitFiberUnmount(ba, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      me || Dr(r, t);
    case 6:
      var n = de, i = Ye;
      de = null, wt(e, t, r), de = n, Ye = i, de !== null && (Ye ? (e = de, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : de.removeChild(r.stateNode));
      break;
    case 18:
      de !== null && (Ye ? (e = de, r = r.stateNode, e.nodeType === 8 ? io(e.parentNode, r) : e.nodeType === 1 && io(e, r), Mn(e)) : io(de, r.stateNode));
      break;
    case 4:
      n = de, i = Ye, de = r.stateNode.containerInfo, Ye = !0, wt(e, t, r), de = n, Ye = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && ss(r, t, o), i = i.next;
        } while (i !== n);
      }
      wt(e, t, r);
      break;
    case 1:
      if (!me && (Dr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (s) {
        $(r, t, s);
      }
      wt(e, t, r);
      break;
    case 21:
      wt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (me = (n = me) || r.memoizedState !== null, wt(e, t, r), me = n) : wt(e, t, r);
      break;
    default:
      wt(e, t, r);
  }
}
function xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new eg()), t.forEach(function(n) {
      var i = cg.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function We(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            de = s.stateNode, Ye = !1;
            break e;
          case 3:
            de = s.stateNode.containerInfo, Ye = !0;
            break e;
          case 4:
            de = s.stateNode.containerInfo, Ye = !0;
            break e;
        }
        s = s.return;
      }
      if (de === null) throw Error(S(160));
      oh(a, o, i), de = null, Ye = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      $(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sh(t, e), t = t.sibling;
}
function sh(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (We(t, e), $e(e), n & 4) {
        try {
          On(3, e, e.return), Ta(3, e);
        } catch (w) {
          $(e, e.return, w);
        }
        try {
          On(5, e, e.return);
        } catch (w) {
          $(e, e.return, w);
        }
      }
      break;
    case 1:
      We(t, e), $e(e), n & 512 && r !== null && Dr(r, r.return);
      break;
    case 5:
      if (We(t, e), $e(e), n & 512 && r !== null && Dr(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          jn(i, "");
        } catch (w) {
          $(e, e.return, w);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = r !== null ? r.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && Rc(i, a), zo(s, o);
          var u = zo(s, a);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], f = l[o + 1];
            c === "style" ? zc(i, f) : c === "dangerouslySetInnerHTML" ? Ic(i, f) : c === "children" ? jn(i, f) : Is(i, c, f, u);
          }
          switch (s) {
            case "input":
              Ro(i, a);
              break;
            case "textarea":
              Pc(i, a);
              break;
            case "select":
              var h = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var m = a.value;
              m != null ? Br(i, !!a.multiple, m, !1) : h !== !!a.multiple && (a.defaultValue != null ? Br(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Br(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[Wn] = a;
        } catch (w) {
          $(e, e.return, w);
        }
      }
      break;
    case 6:
      if (We(t, e), $e(e), n & 4) {
        if (e.stateNode === null) throw Error(S(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (w) {
          $(e, e.return, w);
        }
      }
      break;
    case 3:
      if (We(t, e), $e(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Mn(t.containerInfo);
      } catch (w) {
        $(e, e.return, w);
      }
      break;
    case 4:
      We(t, e), $e(e);
      break;
    case 13:
      We(t, e), $e(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (dl = ee())), n & 4 && xu(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (me = (u = me) || c, We(t, e), me = u) : We(t, e), $e(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (T = e, c = e.child; c !== null; ) {
          for (f = T = c; T !== null; ) {
            switch (h = T, m = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                On(4, h, h.return);
                break;
              case 1:
                Dr(h, h.return);
                var v = h.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  n = h, r = h.return;
                  try {
                    t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    $(n, r, w);
                  }
                }
                break;
              case 5:
                Dr(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Su(f);
                  continue;
                }
            }
            m !== null ? (m.return = h, T = m) : Su(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = jc("display", o));
              } catch (w) {
                $(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (w) {
              $(e, e.return, w);
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
      We(t, e), $e(e), n & 4 && xu(e);
      break;
    case 21:
      break;
    default:
      We(
        t,
        e
      ), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (ah(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(S(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (jn(i, ""), n.flags &= -33);
          var a = ku(e);
          cs(e, a, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, s = ku(e);
          us(e, s, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (l) {
      $(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rg(e, t, r) {
  T = e, lh(e);
}
function lh(e, t, r) {
  for (var n = (e.mode & 1) !== 0; T !== null; ) {
    var i = T, a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Si;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || me;
        s = Si;
        var u = me;
        if (Si = o, (me = l) && !u) for (T = i; T !== null; ) o = T, l = o.child, o.tag === 22 && o.memoizedState !== null ? Eu(i) : l !== null ? (l.return = o, T = l) : Eu(i);
        for (; a !== null; ) T = a, lh(a), a = a.sibling;
        T = i, Si = s, me = u;
      }
      Au(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, T = a) : Au(e);
  }
}
function Au(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            me || Ta(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !me) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : Ke(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && su(t, a, n);
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
              su(t, o, r);
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
                  f !== null && Mn(f);
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
            throw Error(S(163));
        }
        me || t.flags & 512 && ls(t);
      } catch (h) {
        $(t, t.return, h);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, T = r;
      break;
    }
    T = t.return;
  }
}
function Su(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, T = r;
      break;
    }
    T = t.return;
  }
}
function Eu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Ta(4, t);
          } catch (l) {
            $(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              $(t, i, l);
            }
          }
          var a = t.return;
          try {
            ls(t);
          } catch (l) {
            $(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ls(t);
          } catch (l) {
            $(t, o, l);
          }
      }
    } catch (l) {
      $(t, t.return, l);
    }
    if (t === e) {
      T = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, T = s;
      break;
    }
    T = t.return;
  }
}
var ng = Math.ceil, da = gt.ReactCurrentDispatcher, ul = gt.ReactCurrentOwner, Be = gt.ReactCurrentBatchConfig, B = 0, le = null, re = null, he = 0, Re = 0, Mr = Bt(0), oe = 0, qn = null, sr = 0, Ra = 0, cl = 0, Tn = null, Ae = null, dl = 0, _r = 1 / 0, at = null, ha = !1, ds = null, jt = null, Ei = !1, Ot = null, fa = 0, Rn = 0, hs = null, Qi = -1, Ki = 0;
function be() {
  return B & 6 ? ee() : Qi !== -1 ? Qi : Qi = ee();
}
function zt(e) {
  return e.mode & 1 ? B & 2 && he !== 0 ? he & -he : Fp.transition !== null ? (Ki === 0 && (Ki = Yc()), Ki) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $c(e.type)), e) : 1;
}
function Ze(e, t, r, n) {
  if (50 < Rn) throw Rn = 0, hs = null, Error(S(185));
  ii(e, r, n), (!(B & 2) || e !== le) && (e === le && (!(B & 2) && (Ra |= r), oe === 4 && St(e, he)), Oe(e, n), r === 1 && B === 0 && !(t.mode & 1) && (_r = ee() + 500, Ea && Ft()));
}
function Oe(e, t) {
  var r = e.callbackNode;
  Ff(e, t);
  var n = Zi(e, e === le ? he : 0);
  if (n === 0) r !== null && zl(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && zl(r), t === 1) e.tag === 0 ? Bp(Cu.bind(null, e)) : wd(Cu.bind(null, e)), Up(function() {
      !(B & 6) && Ft();
    }), r = null;
    else {
      switch (Vc(n)) {
        case 1:
          r = Ms;
          break;
        case 4:
          r = Kc;
          break;
        case 16:
          r = Gi;
          break;
        case 536870912:
          r = Hc;
          break;
        default:
          r = Gi;
      }
      r = mh(r, uh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function uh(e, t) {
  if (Qi = -1, Ki = 0, B & 6) throw Error(S(327));
  var r = e.callbackNode;
  if (Kr() && e.callbackNode !== r) return null;
  var n = Zi(e, e === le ? he : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = pa(e, n);
  else {
    t = n;
    var i = B;
    B |= 2;
    var a = dh();
    (le !== e || he !== t) && (at = null, _r = ee() + 500, rr(e, t));
    do
      try {
        og();
        break;
      } catch (s) {
        ch(e, s);
      }
    while (!0);
    Zs(), da.current = a, B = i, re !== null ? t = 0 : (le = null, he = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (i = Bo(e), i !== 0 && (n = i, t = fs(e, i))), t === 1) throw r = qn, rr(e, 0), St(e, n), Oe(e, ee()), r;
    if (t === 6) St(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !ig(i) && (t = pa(e, n), t === 2 && (a = Bo(e), a !== 0 && (n = a, t = fs(e, a))), t === 1)) throw r = qn, rr(e, 0), St(e, n), Oe(e, ee()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Vt(e, Ae, at);
          break;
        case 3:
          if (St(e, n), (n & 130023424) === n && (t = dl + 500 - ee(), 10 < t)) {
            if (Zi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              be(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Vo(Vt.bind(null, e, Ae, at), t);
            break;
          }
          Vt(e, Ae, at);
          break;
        case 4:
          if (St(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - Ge(n);
            a = 1 << o, o = t[o], o > i && (i = o), n &= ~a;
          }
          if (n = i, n = ee() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * ng(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = Vo(Vt.bind(null, e, Ae, at), n);
            break;
          }
          Vt(e, Ae, at);
          break;
        case 5:
          Vt(e, Ae, at);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Oe(e, ee()), e.callbackNode === r ? uh.bind(null, e) : null;
}
function fs(e, t) {
  var r = Tn;
  return e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256), e = pa(e, t), e !== 2 && (t = Ae, Ae = r, t !== null && ps(t)), e;
}
function ps(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function ig(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Xe(a(), i)) return !1;
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
function St(e, t) {
  for (t &= ~cl, t &= ~Ra, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - Ge(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Cu(e) {
  if (B & 6) throw Error(S(327));
  Kr();
  var t = Zi(e, 0);
  if (!(t & 1)) return Oe(e, ee()), null;
  var r = pa(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Bo(e);
    n !== 0 && (t = n, r = fs(e, n));
  }
  if (r === 1) throw r = qn, rr(e, 0), St(e, t), Oe(e, ee()), r;
  if (r === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vt(e, Ae, at), Oe(e, ee()), null;
}
function hl(e, t) {
  var r = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = r, B === 0 && (_r = ee() + 500, Ea && Ft());
  }
}
function lr(e) {
  Ot !== null && Ot.tag === 0 && !(B & 6) && Kr();
  var t = B;
  B |= 1;
  var r = Be.transition, n = W;
  try {
    if (Be.transition = null, W = 1, e) return e();
  } finally {
    W = n, Be.transition = r, B = t, !(B & 6) && Ft();
  }
}
function fl() {
  Re = Mr.current, V(Mr);
}
function rr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, zp(r)), re !== null) for (r = re.return; r !== null; ) {
    var n = r;
    switch (Vs(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && ta();
        break;
      case 3:
        Zr(), V(Ee), V(ve), rl();
        break;
      case 5:
        tl(n);
        break;
      case 4:
        Zr();
        break;
      case 13:
        V(G);
        break;
      case 19:
        V(G);
        break;
      case 10:
        Xs(n.type._context);
        break;
      case 22:
      case 23:
        fl();
    }
    r = r.return;
  }
  if (le = e, re = e = Ut(e.current, null), he = Re = t, oe = 0, qn = null, cl = Ra = sr = 0, Ae = Tn = null, $t !== null) {
    for (t = 0; t < $t.length; t++) if (r = $t[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, a = r.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, n.next = o;
      }
      r.pending = n;
    }
    $t = null;
  }
  return e;
}
function ch(e, t) {
  do {
    var r = re;
    try {
      if (Zs(), Fi.current = ca, ua) {
        for (var n = Z.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        ua = !1;
      }
      if (or = 0, se = ae = Z = null, Cn = !1, Hn = 0, ul.current = null, r === null || r.return === null) {
        oe = 1, qn = t, re = null;
        break;
      }
      e: {
        var a = e, o = r.return, s = r, l = t;
        if (t = he, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = fu(o);
          if (m !== null) {
            m.flags &= -257, pu(m, o, s, a, t), m.mode & 1 && hu(a, u, t), t = m, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(l), t.updateQueue = w;
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              hu(a, u, t), pl();
              break e;
            }
            l = Error(S(426));
          }
        } else if (q && s.mode & 1) {
          var x = fu(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), pu(x, o, s, a, t), qs(Xr(l, s));
            break e;
          }
        }
        a = l = Xr(l, s), oe !== 4 && (oe = 2), Tn === null ? Tn = [a] : Tn.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var p = Vd(a, l, t);
              ou(a, p);
              break e;
            case 1:
              s = l;
              var d = a.type, g = a.stateNode;
              if (!(a.flags & 128) && (typeof d.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (jt === null || !jt.has(g)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var b = qd(a, s, t);
                ou(a, b);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      fh(r);
    } catch (k) {
      t = k, re === r && r !== null && (re = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function dh() {
  var e = da.current;
  return da.current = ca, e === null ? ca : e;
}
function pl() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), le === null || !(sr & 268435455) && !(Ra & 268435455) || St(le, he);
}
function pa(e, t) {
  var r = B;
  B |= 2;
  var n = dh();
  (le !== e || he !== t) && (at = null, rr(e, t));
  do
    try {
      ag();
      break;
    } catch (i) {
      ch(e, i);
    }
  while (!0);
  if (Zs(), B = r, da.current = n, re !== null) throw Error(S(261));
  return le = null, he = 0, oe;
}
function ag() {
  for (; re !== null; ) hh(re);
}
function og() {
  for (; re !== null && !Nf(); ) hh(re);
}
function hh(e) {
  var t = gh(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? fh(e) : re = t, ul.current = null;
}
function fh(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = $p(r, t), r !== null) {
        r.flags &= 32767, re = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, re = null;
        return;
      }
    } else if (r = _p(r, t, Re), r !== null) {
      re = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Vt(e, t, r) {
  var n = W, i = Be.transition;
  try {
    Be.transition = null, W = 1, sg(e, t, r, n);
  } finally {
    Be.transition = i, W = n;
  }
  return null;
}
function sg(e, t, r, n) {
  do
    Kr();
  while (Ot !== null);
  if (B & 6) throw Error(S(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = r.lanes | r.childLanes;
  if (Jf(e, a), e === le && (re = le = null, he = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Ei || (Ei = !0, mh(Gi, function() {
    return Kr(), null;
  })), a = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || a) {
    a = Be.transition, Be.transition = null;
    var o = W;
    W = 1;
    var s = B;
    B |= 4, ul.current = null, tg(e, r), sh(r, e), Op(Ho), Xi = !!Ko, Ho = Ko = null, e.current = r, rg(r), If(), B = s, W = o, Be.transition = a;
  } else e.current = r;
  if (Ei && (Ei = !1, Ot = e, fa = i), a = e.pendingLanes, a === 0 && (jt = null), Uf(r.stateNode), Oe(e, ee()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (ha) throw ha = !1, e = ds, ds = null, e;
  return fa & 1 && e.tag !== 0 && Kr(), a = e.pendingLanes, a & 1 ? e === hs ? Rn++ : (Rn = 0, hs = e) : Rn = 0, Ft(), null;
}
function Kr() {
  if (Ot !== null) {
    var e = Vc(fa), t = Be.transition, r = W;
    try {
      if (Be.transition = null, W = 16 > e ? 16 : e, Ot === null) var n = !1;
      else {
        if (e = Ot, Ot = null, fa = 0, B & 6) throw Error(S(331));
        var i = B;
        for (B |= 4, T = e.current; T !== null; ) {
          var a = T, o = a.child;
          if (T.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (T = u; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, T = f;
                  else for (; T !== null; ) {
                    c = T;
                    var h = c.sibling, m = c.return;
                    if (ih(c), c === u) {
                      T = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = m, T = h;
                      break;
                    }
                    T = m;
                  }
                }
              }
              var v = a.alternate;
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
              T = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, T = o;
          else e: for (; T !== null; ) {
            if (a = T, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                On(9, a, a.return);
            }
            var p = a.sibling;
            if (p !== null) {
              p.return = a.return, T = p;
              break e;
            }
            T = a.return;
          }
        }
        var d = e.current;
        for (T = d; T !== null; ) {
          o = T;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) g.return = o, T = g;
          else e: for (o = d; T !== null; ) {
            if (s = T, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ta(9, s);
              }
            } catch (k) {
              $(s, s.return, k);
            }
            if (s === o) {
              T = null;
              break e;
            }
            var b = s.sibling;
            if (b !== null) {
              b.return = s.return, T = b;
              break e;
            }
            T = s.return;
          }
        }
        if (B = i, Ft(), rt && typeof rt.onPostCommitFiberRoot == "function") try {
          rt.onPostCommitFiberRoot(ba, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      W = r, Be.transition = t;
    }
  }
  return !1;
}
function Ou(e, t, r) {
  t = Xr(r, t), t = Vd(e, t, 1), e = It(e, t, 1), t = be(), e !== null && (ii(e, 1, t), Oe(e, t));
}
function $(e, t, r) {
  if (e.tag === 3) Ou(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ou(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (jt === null || !jt.has(n))) {
        e = Xr(r, e), e = qd(t, e, 1), t = It(t, e, 1), e = be(), t !== null && (ii(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function lg(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & r, le === e && (he & r) === r && (oe === 4 || oe === 3 && (he & 130023424) === he && 500 > ee() - dl ? rr(e, 0) : cl |= r), Oe(e, t);
}
function ph(e, t) {
  t === 0 && (e.mode & 1 ? (t = gi, gi <<= 1, !(gi & 130023424) && (gi = 4194304)) : t = 1);
  var r = be();
  e = ft(e, t), e !== null && (ii(e, t, r), Oe(e, r));
}
function ug(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), ph(e, r);
}
function cg(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  n !== null && n.delete(t), ph(e, r);
}
var gh;
gh = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) Se = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return Se = !1, Xp(e, t, r);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, q && t.flags & 1048576 && yd(t, ia, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Wi(e, t), e = t.pendingProps;
      var i = Vr(t, ve.current);
      Qr(t, r), i = il(null, t, n, e, i, r);
      var a = al();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ce(n) ? (a = !0, ra(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, $s(t), i.updater = Oa, t.stateNode = i, i._reactInternals = t, es(t, n, e, r), t = ns(null, t, n, !0, a, r)) : (t.tag = 0, q && a && Ys(t), ye(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Wi(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = hg(n), e = Ke(n, e), i) {
          case 0:
            t = rs(null, t, n, e, r);
            break e;
          case 1:
            t = vu(null, t, n, e, r);
            break e;
          case 11:
            t = gu(null, t, n, e, r);
            break e;
          case 14:
            t = mu(null, t, n, Ke(n.type, e), r);
            break e;
        }
        throw Error(S(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Ke(n, i), rs(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Ke(n, i), vu(e, t, n, i, r);
    case 3:
      e: {
        if (_d(t), e === null) throw Error(S(387));
        n = t.pendingProps, a = t.memoizedState, i = a.element, Ed(e, t), sa(t, n, null, r);
        var o = t.memoizedState;
        if (n = o.element, a.isDehydrated) if (a = { element: n, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = Xr(Error(S(423)), t), t = wu(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = Xr(Error(S(424)), t), t = wu(e, t, n, r, i);
          break e;
        } else for (Ne = Nt(t.stateNode.containerInfo.firstChild), Ie = t, q = !0, qe = null, r = Ad(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (qr(), n === i) {
            t = pt(e, t, r);
            break e;
          }
          ye(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cd(t), e === null && Xo(t), n = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Yo(n, i) ? o = null : a !== null && Yo(n, a) && (t.flags |= 32), Xd(e, t), ye(e, t, o, r), t.child;
    case 6:
      return e === null && Xo(t), null;
    case 13:
      return $d(e, t, r);
    case 4:
      return el(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Gr(t, null, n, r) : ye(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Ke(n, i), gu(e, t, n, i, r);
    case 7:
      return ye(e, t, t.pendingProps, r), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, K(aa, n._currentValue), n._currentValue = o, a !== null) if (Xe(a.value, o)) {
          if (a.children === i.children && !Ee.current) {
            t = pt(e, t, r);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === n) {
                if (a.tag === 1) {
                  l = ct(-1, r & -r), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), _o(
                  a.return,
                  r,
                  t
                ), s.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error(S(341));
            o.lanes |= r, s = o.alternate, s !== null && (s.lanes |= r), _o(o, r, t), o = a.sibling;
          } else o = a.child;
          if (o !== null) o.return = a;
          else for (o = a; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (a = o.sibling, a !== null) {
              a.return = o.return, o = a;
              break;
            }
            o = o.return;
          }
          a = o;
        }
        ye(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, Qr(t, r), i = Fe(i), n = n(i), t.flags |= 1, ye(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = Ke(n, t.pendingProps), i = Ke(n.type, i), mu(e, t, n, i, r);
    case 15:
      return Gd(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Ke(n, i), Wi(e, t), t.tag = 1, Ce(n) ? (e = !0, ra(t)) : e = !1, Qr(t, r), Yd(t, n, i), es(t, n, i, r), ns(null, t, n, !0, e, r);
    case 19:
      return eh(e, t, r);
    case 22:
      return Zd(e, t, r);
  }
  throw Error(S(156, t.tag));
};
function mh(e, t) {
  return Qc(e, t);
}
function dg(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Le(e, t, r, n) {
  return new dg(e, t, r, n);
}
function gl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hg(e) {
  if (typeof e == "function") return gl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === zs) return 11;
    if (e === Us) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var r = e.alternate;
  return r === null ? (r = Le(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Hi(e, t, r, n, i, a) {
  var o = 2;
  if (n = e, typeof e == "function") gl(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Or:
      return nr(r.children, i, a, t);
    case js:
      o = 8, i |= 8;
      break;
    case So:
      return e = Le(12, r, t, i | 2), e.elementType = So, e.lanes = a, e;
    case Eo:
      return e = Le(13, r, t, i), e.elementType = Eo, e.lanes = a, e;
    case Co:
      return e = Le(19, r, t, i), e.elementType = Co, e.lanes = a, e;
    case Cc:
      return Pa(r, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Sc:
          o = 10;
          break e;
        case Ec:
          o = 9;
          break e;
        case zs:
          o = 11;
          break e;
        case Us:
          o = 14;
          break e;
        case bt:
          o = 16, n = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Le(o, r, t, i), t.elementType = e, t.type = n, t.lanes = a, t;
}
function nr(e, t, r, n) {
  return e = Le(7, e, n, t), e.lanes = r, e;
}
function Pa(e, t, r, n) {
  return e = Le(22, e, n, t), e.elementType = Cc, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function fo(e, t, r) {
  return e = Le(6, e, null, t), e.lanes = r, e;
}
function po(e, t, r) {
  return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fg(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Va(0), this.expirationTimes = Va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Va(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ml(e, t, r, n, i, a, o, s, l) {
  return e = new fg(e, t, r, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Le(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $s(a), e;
}
function pg(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Cr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function vh(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (dr(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ce(r)) return vd(e, r, t);
  }
  return t;
}
function wh(e, t, r, n, i, a, o, s, l) {
  return e = ml(r, n, !0, e, i, a, o, s, l), e.context = vh(null), r = e.current, n = be(), i = zt(r), a = ct(n, i), a.callback = t ?? null, It(r, a, i), e.current.lanes = i, ii(e, i, n), Oe(e, n), e;
}
function Na(e, t, r, n) {
  var i = t.current, a = be(), o = zt(i);
  return r = vh(r), t.context === null ? t.context = r : t.pendingContext = r, t = ct(a, o), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = It(i, t, o), e !== null && (Ze(e, i, o, a), Bi(e, i, o)), o;
}
function ga(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function vl(e, t) {
  Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function gg() {
  return null;
}
var yh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wl(e) {
  this._internalRoot = e;
}
Ia.prototype.render = wl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Na(e, t, null, null);
};
Ia.prototype.unmount = wl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lr(function() {
      Na(null, e, null, null);
    }), t[ht] = null;
  }
};
function Ia(e) {
  this._internalRoot = e;
}
Ia.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < At.length && t !== 0 && t < At[r].priority; r++) ;
    At.splice(r, 0, e), r === 0 && _c(e);
  }
};
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ja(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ru() {
}
function mg(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function() {
        var u = ga(o);
        a.call(u);
      };
    }
    var o = wh(t, n, e, 0, null, !1, !1, "", Ru);
    return e._reactRootContainer = o, e[ht] = o.current, Fn(e.nodeType === 8 ? e.parentNode : e), lr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = ga(l);
      s.call(u);
    };
  }
  var l = ml(e, 0, !1, null, null, !1, !1, "", Ru);
  return e._reactRootContainer = l, e[ht] = l.current, Fn(e.nodeType === 8 ? e.parentNode : e), lr(function() {
    Na(t, l, r, n);
  }), l;
}
function za(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = ga(o);
        s.call(l);
      };
    }
    Na(t, o, e, i);
  } else o = mg(r, t, e, i, n);
  return ga(o);
}
qc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = wn(t.pendingLanes);
        r !== 0 && (Ls(t, r | 1), Oe(t, ee()), !(B & 6) && (_r = ee() + 500, Ft()));
      }
      break;
    case 13:
      lr(function() {
        var n = ft(e, 1);
        if (n !== null) {
          var i = be();
          Ze(n, e, 1, i);
        }
      }), vl(e, 1);
  }
};
Bs = function(e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var r = be();
      Ze(t, e, 134217728, r);
    }
    vl(e, 134217728);
  }
};
Gc = function(e) {
  if (e.tag === 13) {
    var t = zt(e), r = ft(e, t);
    if (r !== null) {
      var n = be();
      Ze(r, e, t, n);
    }
    vl(e, t);
  }
};
Zc = function() {
  return W;
};
Xc = function(e, t) {
  var r = W;
  try {
    return W = e, t();
  } finally {
    W = r;
  }
};
Do = function(e, t, r) {
  switch (t) {
    case "input":
      if (Ro(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Sa(n);
            if (!i) throw Error(S(90));
            Tc(n), Ro(n, i);
          }
        }
      }
      break;
    case "textarea":
      Pc(e, r);
      break;
    case "select":
      t = r.value, t != null && Br(e, !!r.multiple, t, !1);
  }
};
Mc = hl;
Lc = lr;
var vg = { usingClientEntryPoint: !1, Events: [oi, Nr, Sa, Uc, Dc, hl] }, hn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wg = { bundleType: hn.bundleType, version: hn.version, rendererPackageName: hn.rendererPackageName, rendererConfig: hn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Jc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: hn.findFiberByHostInstance || gg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ci.isDisabled && Ci.supportsFiber) try {
    ba = Ci.inject(wg), rt = Ci;
  } catch {
  }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg;
ze.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yl(t)) throw Error(S(200));
  return pg(e, t, null, r);
};
ze.createRoot = function(e, t) {
  if (!yl(e)) throw Error(S(299));
  var r = !1, n = "", i = yh;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ml(e, 1, !1, null, null, r, !1, n, i), e[ht] = t.current, Fn(e.nodeType === 8 ? e.parentNode : e), new wl(t);
};
ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Jc(t), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return lr(e);
};
ze.hydrate = function(e, t, r) {
  if (!ja(t)) throw Error(S(200));
  return za(null, e, t, !0, r);
};
ze.hydrateRoot = function(e, t, r) {
  if (!yl(e)) throw Error(S(405));
  var n = r != null && r.hydratedSources || null, i = !1, a = "", o = yh;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = wh(t, null, e, 1, r ?? null, i, !1, a, o), e[ht] = t.current, Fn(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new Ia(t);
};
ze.render = function(e, t, r) {
  if (!ja(t)) throw Error(S(200));
  return za(null, e, t, !1, r);
};
ze.unmountComponentAtNode = function(e) {
  if (!ja(e)) throw Error(S(40));
  return e._reactRootContainer ? (lr(function() {
    za(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ht] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = hl;
ze.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!ja(r)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return za(e, t, r, !1, n);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function bh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bh);
    } catch (e) {
      console.error(e);
    }
}
bh(), bc.exports = ze;
var yg = bc.exports, kh, Pu = yg;
kh = Pu.createRoot, Pu.hydrateRoot;
const bg = `@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}:root{--font-size: 16px;--background: 0 0% 100%;--foreground: 0 0% 9%;--card: 0 0% 100%;--card-foreground: 0 0% 9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 9%;--primary: 243 96% 5%;--primary-foreground: 0 0% 100%;--secondary: 264 12% 95%;--secondary-foreground: 243 96% 5%;--muted: 240 6% 93%;--muted-foreground: 240 5% 48%;--accent: 220 10% 92%;--accent-foreground: 243 96% 5%;--destructive: 348 82% 46%;--destructive-foreground: 0 0% 100%;--border: 0 0% 80%;--input: 0 0% 80%;--ring: 0 0% 44%;--radius: .625rem;--chart-1: 20 80% 50%;--chart-2: 180 40% 45%;--chart-3: 210 30% 35%;--chart-4: 50 70% 55%;--chart-5: 40 70% 52%;--sidebar-bg: 0 0% 97%;--sidebar-foreground: 0 0% 9%;--sidebar-primary: 243 96% 5%;--sidebar-primary-foreground: 0 0% 97%;--sidebar-accent: 0 0% 96%;--sidebar-accent-foreground: 0 0% 12%;--sidebar-border: 0 0% 87%;--sidebar-ring: 0 0% 44%}.dark{--background: 0 0% 9%;--foreground: 0 0% 97%;--card: 0 0% 9%;--card-foreground: 0 0% 97%;--popover: 0 0% 9%;--popover-foreground: 0 0% 97%;--primary: 0 0% 97%;--primary-foreground: 0 0% 12%;--secondary: 0 0% 17%;--secondary-foreground: 0 0% 97%;--muted: 0 0% 17%;--muted-foreground: 0 0% 44%;--accent: 0 0% 17%;--accent-foreground: 0 0% 97%;--destructive: 0 60% 40%;--destructive-foreground: 0 80% 55%;--border: 0 0% 17%;--input: 0 0% 17%;--ring: 0 0% 27%;--sidebar-bg: 0 0% 12%;--sidebar-foreground: 0 0% 97%;--sidebar-primary: 264 80% 50%;--sidebar-primary-foreground: 0 0% 97%;--sidebar-accent: 0 0% 17%;--sidebar-accent-foreground: 0 0% 97%;--sidebar-border: 0 0% 17%;--sidebar-ring: 0 0% 27%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground));font-family:Inter,sans-serif}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#94a3b8}html{font-size:var(--font-size)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.inset-y-0{top:0;bottom:0}.-bottom-12{bottom:-3rem}.-left-12{left:-3rem}.-left-\\[23px\\]{left:-23px}.-right-1\\.5{right:-.375rem}.-right-12{right:-3rem}.-top-1\\.5{top:-.375rem}.-top-12{top:-3rem}.bottom-0{bottom:0}.bottom-2{bottom:.5rem}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-2{left:.5rem}.left-3{left:.75rem}.left-\\[50\\%\\]{left:50%}.left-\\[7px\\]{left:7px}.right-0{right:0}.right-1{right:.25rem}.right-2{right:.5rem}.right-3{right:.75rem}.right-4{right:1rem}.top-0{top:0}.top-1{top:.25rem}.top-1\\.5{top:.375rem}.top-1\\/2{top:50%}.top-2{top:.5rem}.top-3\\.5{top:.875rem}.top-4{top:1rem}.top-\\[1px\\]{top:1px}.top-\\[50\\%\\]{top:50%}.top-\\[60\\%\\]{top:60%}.top-full{top:100%}.isolate{isolation:isolate}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1\\]{z-index:1}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2 / span 2}.row-start-1{grid-row-start:1}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-3\\.5{margin-left:.875rem;margin-right:.875rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0\\.5{margin-top:.125rem;margin-bottom:.125rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.-ml-4{margin-left:-1rem}.-mt-4{margin-top:-1rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:.25rem}.ml-auto{margin-left:auto}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-auto{margin-top:auto}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-row{display:table-row}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.aspect-video{aspect-ratio:16 / 9}.size-10{width:2.5rem;height:2.5rem}.size-2{width:.5rem;height:.5rem}.size-2\\.5{width:.625rem;height:.625rem}.size-3{width:.75rem;height:.75rem}.size-3\\.5{width:.875rem;height:.875rem}.size-4{width:1rem;height:1rem}.size-7{width:1.75rem;height:1.75rem}.size-8{width:2rem;height:2rem}.size-9{width:2.25rem;height:2.25rem}.size-full{width:100%;height:100%}.h-1\\.5{height:.375rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-28{height:7rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[1\\.15rem\\]{height:1.15rem}.h-\\[calc\\(100\\%-1px\\)\\]{height:calc(100% - 1px)}.h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\]{height:var(--radix-navigation-menu-viewport-height)}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.h-svh{height:100svh}.max-h-96{max-height:24rem}.max-h-\\[300px\\]{max-height:300px}.min-h-0{min-height:0px}.min-h-16{min-height:4rem}.min-h-4{min-height:1rem}.min-h-screen{min-height:100vh}.min-h-svh{min-height:100svh}.w-0{width:0px}.w-0\\.5{width:.125rem}.w-1{width:.25rem}.w-1\\.5{width:.375rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-3\\/4{width:75%}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-80{width:20rem}.w-9{width:2.25rem}.w-\\[100px\\]{width:100px}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-px{width:1px}.min-w-0{min-width:0px}.min-w-10{min-width:2.5rem}.min-w-5{min-width:1.25rem}.min-w-8{min-width:2rem}.min-w-9{min-width:2.25rem}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-\\[60\\%\\]{max-width:60%}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.grow-0{flex-grow:0}.basis-full{flex-basis:100%}.caption-bottom{caption-side:bottom}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0\\.5{--tw-translate-y: .125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(-50\\%_-_2px\\)\\]{--tw-translate-y: calc(-50% - 2px) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.resize{resize:both}.scroll-my-1{scroll-margin-top:.25rem;scroll-margin-bottom:.25rem}.scroll-py-1{scroll-padding-top:.25rem;scroll-padding-bottom:.25rem}.list-none{list-style-type:none}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-\\[0_1fr\\]{grid-template-columns:0 1fr}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-start{justify-items:start}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-y-0\\.5{row-gap:.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.25rem * var(--tw-space-x-reverse));margin-left:calc(.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity, 1))}.self-start{align-self:flex-start}.justify-self-end{justify-self:end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.text-balance{text-wrap:balance}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-\\[2px\\]{border-radius:2px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-tl-sm{border-top-left-radius:calc(var(--radius) - 4px)}.border{border-width:1px}.border-2{border-width:2px}.border-\\[1\\.5px\\]{border-width:1.5px}.border-y{border-top-width:1px;border-bottom-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-amber-200{--tw-border-opacity: 1;border-color:rgb(253 230 138 / var(--tw-border-opacity, 1))}.border-blue-200{--tw-border-opacity: 1;border-color:rgb(191 219 254 / var(--tw-border-opacity, 1))}.border-border\\/50{border-color:hsl(var(--border) / .5)}.border-emerald-200{--tw-border-opacity: 1;border-color:rgb(167 243 208 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-input{border-color:hsl(var(--input))}.border-primary{border-color:hsl(var(--primary))}.border-purple-200{--tw-border-opacity: 1;border-color:rgb(233 213 255 / var(--tw-border-opacity, 1))}.border-sidebar-border{border-color:hsl(var(--sidebar-border))}.border-slate-200{--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.border-l-transparent{border-left-color:transparent}.border-t-transparent{border-top-color:transparent}.bg-accent{background-color:hsl(var(--accent))}.bg-amber-100{--tw-bg-opacity: 1;background-color:rgb(254 243 199 / var(--tw-bg-opacity, 1))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity, 1))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity, 1))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/40{background-color:#0006}.bg-black\\/50{background-color:#00000080}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-border{background-color:hsl(var(--border))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-emerald-100{--tw-bg-opacity: 1;background-color:rgb(209 250 229 / var(--tw-bg-opacity, 1))}.bg-emerald-50\\/60{background-color:#ecfdf599}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity, 1))}.bg-foreground{background-color:hsl(var(--foreground))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgb(224 231 255 / var(--tw-bg-opacity, 1))}.bg-indigo-600{--tw-bg-opacity: 1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.bg-muted{background-color:hsl(var(--muted))}.bg-muted\\/50{background-color:hsl(var(--muted) / .5)}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-primary\\/20{background-color:hsl(var(--primary) / .2)}.bg-purple-50{--tw-bg-opacity: 1;background-color:rgb(250 245 255 / var(--tw-bg-opacity, 1))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-sidebar{background-color:hsl(var(--sidebar-bg))}.bg-sidebar-border{background-color:hsl(var(--sidebar-border))}.bg-slate-100{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-indigo-600{--tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-violet-600{--tw-gradient-to: #7c3aed var(--tw-gradient-to-position)}.fill-current{fill:currentColor}.fill-primary{fill:hsl(var(--primary))}.p-0{padding:0}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-12{padding:3rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-\\[3px\\]{padding:3px}.p-px{padding:1px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-10{padding-left:2.5rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-6{padding-left:1.5rem}.pl-8{padding-left:2rem}.pr-2{padding-right:.5rem}.pr-2\\.5{padding-right:.625rem}.pr-4{padding-right:1rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.pt-1{padding-top:.25rem}.pt-3{padding-top:.75rem}.pt-4{padding-top:1rem}.pt-6{padding-top:1.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\\[0\\.8rem\\]{font-size:.8rem}.text-\\[11px\\]{font-size:11px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-\\[rgb\\(16\\,40\\,40\\)\\]{--tw-text-opacity: 1;color:rgb(16 40 40 / var(--tw-text-opacity, 1))}.text-accent-foreground{color:hsl(var(--accent-foreground))}.text-amber-600{--tw-text-opacity: 1;color:rgb(217 119 6 / var(--tw-text-opacity, 1))}.text-amber-700{--tw-text-opacity: 1;color:rgb(180 83 9 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-card-foreground{color:hsl(var(--card-foreground))}.text-current{color:currentColor}.text-destructive{color:hsl(var(--destructive))}.text-emerald-600{--tw-text-opacity: 1;color:rgb(5 150 105 / var(--tw-text-opacity, 1))}.text-emerald-700{--tw-text-opacity: 1;color:rgb(4 120 87 / var(--tw-text-opacity, 1))}.text-foreground{color:hsl(var(--foreground))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-indigo-600{--tw-text-opacity: 1;color:rgb(79 70 229 / var(--tw-text-opacity, 1))}.text-indigo-700{--tw-text-opacity: 1;color:rgb(67 56 202 / var(--tw-text-opacity, 1))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-sidebar-foreground{color:hsl(var(--sidebar-foreground))}.text-sidebar-foreground\\/70{color:hsl(var(--sidebar-foreground) / .7)}.text-slate-700{--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-border\\)\\)\\]{--tw-shadow: 0 0 0 1px hsl(var(--sidebar-border));--tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-4{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-emerald-50{--tw-ring-opacity: 1;--tw-ring-color: rgb(236 253 245 / var(--tw-ring-opacity, 1))}.ring-gray-50{--tw-ring-opacity: 1;--tw-ring-color: rgb(249 250 251 / var(--tw-ring-opacity, 1))}.ring-ring\\/50{--tw-ring-color: hsl(var(--ring) / .5)}.ring-sidebar-ring{--tw-ring-color: hsl(var(--sidebar-ring))}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[left\\,right\\,width\\]{transition-property:left,right,width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[margin\\,opacity\\]{transition-property:margin,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[width\\,height\\,padding\\]{transition-property:width,height,padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[width\\]{transition-property:width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-none{transition-property:none}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-1000{transition-duration:1s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{transition-timing-function:linear}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.fade-in-0{--tw-enter-opacity: 0}.zoom-in-95{--tw-enter-scale: .95}.duration-1000{animation-duration:1s}.duration-200{animation-duration:.2s}.duration-300{animation-duration:.3s}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{animation-timing-function:linear}.ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.selection\\:bg-primary *::-moz-selection{background-color:hsl(var(--primary))}.selection\\:bg-primary *::selection{background-color:hsl(var(--primary))}.selection\\:text-primary-foreground *::-moz-selection{color:hsl(var(--primary-foreground))}.selection\\:text-primary-foreground *::selection{color:hsl(var(--primary-foreground))}.selection\\:bg-primary::-moz-selection{background-color:hsl(var(--primary))}.selection\\:bg-primary::selection{background-color:hsl(var(--primary))}.selection\\:text-primary-foreground::-moz-selection{color:hsl(var(--primary-foreground))}.selection\\:text-primary-foreground::selection{color:hsl(var(--primary-foreground))}.file\\:inline-flex::file-selector-button{display:inline-flex}.file\\:h-7::file-selector-button{height:1.75rem}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.file\\:text-foreground::file-selector-button{color:hsl(var(--foreground))}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-2:after{content:var(--tw-content);inset:-.5rem}.after\\:inset-y-0:after{content:var(--tw-content);top:0;bottom:0}.after\\:left-1\\/2:after{content:var(--tw-content);left:50%}.after\\:w-1:after{content:var(--tw-content);width:.25rem}.after\\:w-\\[2px\\]:after{content:var(--tw-content);width:2px}.after\\:-translate-x-1\\/2:after{content:var(--tw-content);--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.first\\:rounded-l-md:first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.first\\:border-l:first-child{border-left-width:1px}.last\\:rounded-r-md:last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.last\\:border-b-0:last-child{border-bottom-width:0px}.focus-within\\:relative:focus-within{position:relative}.focus-within\\:z-20:focus-within{z-index:20}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-amber-100:hover{--tw-bg-opacity: 1;background-color:rgb(254 243 199 / var(--tw-bg-opacity, 1))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-muted:hover{background-color:hsl(var(--muted))}.hover\\:bg-muted\\/50:hover{background-color:hsl(var(--muted) / .5)}.hover\\:bg-primary:hover{background-color:hsl(var(--primary))}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:bg-sidebar-accent:hover{background-color:hsl(var(--sidebar-accent))}.hover\\:from-indigo-700:hover{--tw-gradient-from: #4338ca var(--tw-gradient-from-position);--tw-gradient-to: rgb(67 56 202 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.hover\\:to-violet-700:hover{--tw-gradient-to: #6d28d9 var(--tw-gradient-to-position)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-foreground:hover{color:hsl(var(--foreground))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:text-indigo-800:hover{--tw-text-opacity: 1;color:rgb(55 48 163 / var(--tw-text-opacity, 1))}.hover\\:text-muted-foreground:hover{color:hsl(var(--muted-foreground))}.hover\\:text-primary-foreground:hover{color:hsl(var(--primary-foreground))}.hover\\:text-sidebar-accent-foreground:hover{color:hsl(var(--sidebar-accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-accent\\)\\)\\]:hover{--tw-shadow: 0 0 0 1px hsl(var(--sidebar-accent));--tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:ring-4:hover{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.hover\\:after\\:bg-sidebar-border:hover:after{content:var(--tw-content);background-color:hsl(var(--sidebar-border))}.focus\\:z-10:focus{z-index:10}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:bg-primary:focus{background-color:hsl(var(--primary))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:text-primary-foreground:focus{color:hsl(var(--primary-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1))}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:z-10:focus-visible{z-index:10}.focus-visible\\:border-ring:focus-visible{border-color:hsl(var(--ring))}.focus-visible\\:outline-1:focus-visible{outline-width:1px}.focus-visible\\:outline-ring:focus-visible{outline-color:hsl(var(--ring))}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-4:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-destructive\\/20:focus-visible{--tw-ring-color: hsl(var(--destructive) / .2)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color: hsl(var(--ring) / .5)}.focus-visible\\:ring-offset-1:focus-visible{--tw-ring-offset-width: 1px}.active\\:bg-sidebar-accent:active{background-color:hsl(var(--sidebar-accent))}.active\\:text-sidebar-accent-foreground:active{color:hsl(var(--sidebar-accent-foreground))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group\\/menu-item:focus-within .group-focus-within\\/menu-item\\:opacity-100{opacity:1}.group\\/menu-item:hover .group-hover\\/menu-item\\:opacity-100{opacity:1}.peer\\/menu-button:hover~.peer-hover\\/menu-button\\:text-sidebar-accent-foreground{color:hsl(var(--sidebar-accent-foreground))}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.has-\\[\\>svg\\]\\:grid-cols-\\[calc\\(var\\(--spacing\\)\\*4\\)_1fr\\]:has(>svg){grid-template-columns:calc(var(--spacing) * 4) 1fr}.has-\\[\\>svg\\]\\:gap-x-3:has(>svg){-moz-column-gap:.75rem;column-gap:.75rem}.has-\\[\\>svg\\]\\:px-2\\.5:has(>svg){padding-left:.625rem;padding-right:.625rem}.has-\\[\\>svg\\]\\:px-3:has(>svg){padding-left:.75rem;padding-right:.75rem}.has-\\[\\>svg\\]\\:px-4:has(>svg){padding-left:1rem;padding-right:1rem}.aria-disabled\\:pointer-events-none[aria-disabled=true]{pointer-events:none}.aria-disabled\\:opacity-50[aria-disabled=true]{opacity:.5}.aria-selected\\:bg-accent[aria-selected=true]{background-color:hsl(var(--accent))}.aria-selected\\:bg-primary[aria-selected=true]{background-color:hsl(var(--primary))}.aria-selected\\:text-accent-foreground[aria-selected=true]{color:hsl(var(--accent-foreground))}.aria-selected\\:text-muted-foreground[aria-selected=true]{color:hsl(var(--muted-foreground))}.aria-selected\\:text-primary-foreground[aria-selected=true]{color:hsl(var(--primary-foreground))}.aria-selected\\:opacity-100[aria-selected=true]{opacity:1}.data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true],.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[vaul-drawer-direction\\=bottom\\]\\:inset-x-0[data-vaul-drawer-direction=bottom]{left:0;right:0}.data-\\[vaul-drawer-direction\\=left\\]\\:inset-y-0[data-vaul-drawer-direction=left],.data-\\[vaul-drawer-direction\\=right\\]\\:inset-y-0[data-vaul-drawer-direction=right]{top:0;bottom:0}.data-\\[vaul-drawer-direction\\=top\\]\\:inset-x-0[data-vaul-drawer-direction=top]{left:0;right:0}.data-\\[vaul-drawer-direction\\=bottom\\]\\:bottom-0[data-vaul-drawer-direction=bottom]{bottom:0}.data-\\[vaul-drawer-direction\\=left\\]\\:left-0[data-vaul-drawer-direction=left]{left:0}.data-\\[vaul-drawer-direction\\=right\\]\\:right-0[data-vaul-drawer-direction=right]{right:0}.data-\\[vaul-drawer-direction\\=top\\]\\:top-0[data-vaul-drawer-direction=top]{top:0}.data-\\[active\\=true\\]\\:z-10[data-active=true]{z-index:10}.data-\\[vaul-drawer-direction\\=bottom\\]\\:mt-24[data-vaul-drawer-direction=bottom]{margin-top:6rem}.data-\\[vaul-drawer-direction\\=top\\]\\:mb-24[data-vaul-drawer-direction=top]{margin-bottom:6rem}.data-\\[orientation\\=horizontal\\]\\:h-4[data-orientation=horizontal]{height:1rem}.data-\\[orientation\\=horizontal\\]\\:h-full[data-orientation=horizontal]{height:100%}.data-\\[orientation\\=horizontal\\]\\:h-px[data-orientation=horizontal]{height:1px}.data-\\[orientation\\=vertical\\]\\:h-full[data-orientation=vertical]{height:100%}.data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction=vertical]{height:1px}.data-\\[size\\=default\\]\\:h-9[data-size=default]{height:2.25rem}.data-\\[size\\=sm\\]\\:h-8[data-size=sm]{height:2rem}.data-\\[vaul-drawer-direction\\=bottom\\]\\:max-h-\\[80vh\\][data-vaul-drawer-direction=bottom],.data-\\[vaul-drawer-direction\\=top\\]\\:max-h-\\[80vh\\][data-vaul-drawer-direction=top]{max-height:80vh}.data-\\[orientation\\=vertical\\]\\:min-h-44[data-orientation=vertical]{min-height:11rem}.data-\\[orientation\\=horizontal\\]\\:w-full[data-orientation=horizontal]{width:100%}.data-\\[orientation\\=vertical\\]\\:w-1\\.5[data-orientation=vertical]{width:.375rem}.data-\\[orientation\\=vertical\\]\\:w-auto[data-orientation=vertical]{width:auto}.data-\\[orientation\\=vertical\\]\\:w-full[data-orientation=vertical]{width:100%}.data-\\[orientation\\=vertical\\]\\:w-px[data-orientation=vertical]{width:1px}.data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction=vertical]{width:100%}.data-\\[vaul-drawer-direction\\=left\\]\\:w-3\\/4[data-vaul-drawer-direction=left],.data-\\[vaul-drawer-direction\\=right\\]\\:w-3\\/4[data-vaul-drawer-direction=right]{width:75%}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=checked\\]\\:translate-x-\\[calc\\(100\\%-2px\\)\\][data-state=checked]{--tw-translate-x: calc(100% - 2px) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes accordion-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state=closed]{animation:accordion-up .2s ease-out}@keyframes accordion-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}.data-\\[state\\=open\\]\\:animate-accordion-down[data-state=open]{animation:accordion-down .2s ease-out}.data-\\[orientation\\=vertical\\]\\:flex-col[data-orientation=vertical],.data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction=vertical]{flex-direction:column}.data-\\[vaul-drawer-direction\\=bottom\\]\\:rounded-t-lg[data-vaul-drawer-direction=bottom]{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius)}.data-\\[vaul-drawer-direction\\=top\\]\\:rounded-b-lg[data-vaul-drawer-direction=top]{border-bottom-right-radius:var(--radius);border-bottom-left-radius:var(--radius)}.data-\\[variant\\=outline\\]\\:border-l-0[data-variant=outline]{border-left-width:0px}.data-\\[vaul-drawer-direction\\=bottom\\]\\:border-t[data-vaul-drawer-direction=bottom]{border-top-width:1px}.data-\\[vaul-drawer-direction\\=left\\]\\:border-r[data-vaul-drawer-direction=left]{border-right-width:1px}.data-\\[vaul-drawer-direction\\=right\\]\\:border-l[data-vaul-drawer-direction=right]{border-left-width:1px}.data-\\[vaul-drawer-direction\\=top\\]\\:border-b[data-vaul-drawer-direction=top]{border-bottom-width:1px}.data-\\[active\\=true\\]\\:border-ring[data-active=true]{border-color:hsl(var(--ring))}.data-\\[state\\=checked\\]\\:border-primary[data-state=checked]{border-color:hsl(var(--primary))}.data-\\[active\\=true\\]\\:bg-accent\\/50[data-active=true]{background-color:hsl(var(--accent) / .5)}.data-\\[active\\=true\\]\\:bg-sidebar-accent[data-active=true]{background-color:hsl(var(--sidebar-accent))}.data-\\[selected\\=true\\]\\:bg-accent[data-selected=true]{background-color:hsl(var(--accent))}.data-\\[state\\=active\\]\\:bg-card[data-state=active]{background-color:hsl(var(--card))}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:hsl(var(--primary))}.data-\\[state\\=on\\]\\:bg-accent[data-state=on],.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:bg-accent\\/50[data-state=open]{background-color:hsl(var(--accent) / .5)}.data-\\[state\\=open\\]\\:bg-secondary[data-state=open]{background-color:hsl(var(--secondary))}.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected]{background-color:hsl(var(--muted))}.data-\\[inset\\]\\:pl-8[data-inset]{padding-left:2rem}.data-\\[active\\=true\\]\\:font-medium[data-active=true]{font-weight:500}.data-\\[active\\=true\\]\\:text-accent-foreground[data-active=true]{color:hsl(var(--accent-foreground))}.data-\\[active\\=true\\]\\:text-sidebar-accent-foreground[data-active=true]{color:hsl(var(--sidebar-accent-foreground))}.data-\\[error\\=true\\]\\:text-destructive[data-error=true]{color:hsl(var(--destructive))}.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:hsl(var(--muted-foreground))}.data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=true]{color:hsl(var(--accent-foreground))}.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked]{color:hsl(var(--primary-foreground))}.data-\\[state\\=on\\]\\:text-accent-foreground[data-state=on],.data-\\[state\\=open\\]\\:text-accent-foreground[data-state=open]{color:hsl(var(--accent-foreground))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[variant\\=destructive\\]\\:text-destructive[data-variant=destructive]{color:hsl(var(--destructive))}.data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=true],.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:opacity-100[data-state=open]{opacity:1}.data-\\[active\\=true\\]\\:ring-\\[3px\\][data-active=true]{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.data-\\[active\\=true\\]\\:ring-ring\\/50[data-active=true]{--tw-ring-color: hsl(var(--ring) / .5)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{transition-duration:.3s}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{transition-duration:.5s}.data-\\[motion\\^\\=from-\\]\\:animate-in[data-motion^=from-],.data-\\[state\\=open\\]\\:animate-in[data-state=open],.data-\\[state\\=visible\\]\\:animate-in[data-state=visible]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[motion\\^\\=to-\\]\\:animate-out[data-motion^=to-],.data-\\[state\\=closed\\]\\:animate-out[data-state=closed],.data-\\[state\\=hidden\\]\\:animate-out[data-state=hidden]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[motion\\^\\=from-\\]\\:fade-in[data-motion^=from-]{--tw-enter-opacity: 0}.data-\\[motion\\^\\=to-\\]\\:fade-out[data-motion^=to-],.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed],.data-\\[state\\=hidden\\]\\:fade-out[data-state=hidden]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open],.data-\\[state\\=visible\\]\\:fade-in[data-state=visible]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-90[data-state=open]{--tw-enter-scale: .9}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[motion\\=from-end\\]\\:slide-in-from-right-52[data-motion=from-end]{--tw-enter-translate-x: 13rem}.data-\\[motion\\=from-start\\]\\:slide-in-from-left-52[data-motion=from-start]{--tw-enter-translate-x: -13rem}.data-\\[motion\\=to-end\\]\\:slide-out-to-right-52[data-motion=to-end]{--tw-exit-translate-x: 13rem}.data-\\[motion\\=to-start\\]\\:slide-out-to-left-52[data-motion=to-start]{--tw-exit-translate-x: -13rem}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed]{--tw-exit-translate-y: 100%}.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed]{--tw-exit-translate-x: -100%}.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed]{--tw-exit-translate-x: 100%}.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed]{--tw-exit-translate-y: -100%}.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open]{--tw-enter-translate-y: 100%}.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open]{--tw-enter-translate-x: -100%}.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open]{--tw-enter-translate-x: 100%}.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open]{--tw-enter-translate-y: -100%}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{animation-duration:.3s}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{animation-duration:.5s}.\\*\\:data-\\[slot\\=select-value\\]\\:line-clamp-1[data-slot=select-value]>*{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\*\\:data-\\[slot\\=select-value\\]\\:flex[data-slot=select-value]>*{display:flex}.\\*\\:data-\\[slot\\=select-value\\]\\:items-center[data-slot=select-value]>*{align-items:center}.\\*\\:data-\\[slot\\=select-value\\]\\:gap-2[data-slot=select-value]>*{gap:.5rem}.\\*\\:data-\\[slot\\=alert-description\\]\\:text-destructive\\/90[data-slot=alert-description]>*{color:hsl(var(--destructive) / .9)}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction=vertical]:after{content:var(--tw-content);left:0}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction=vertical]:after{content:var(--tw-content);height:.25rem}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction=vertical]:after{content:var(--tw-content);width:100%}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction=vertical]:after{content:var(--tw-content);--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction=vertical]:after{content:var(--tw-content);--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[variant\\=outline\\]\\:first\\:border-l:first-child[data-variant=outline]{border-left-width:1px}.data-\\[active\\=true\\]\\:hover\\:bg-accent:hover[data-active=true],.data-\\[state\\=open\\]\\:hover\\:bg-accent:hover[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:hover\\:bg-sidebar-accent:hover[data-state=open]{background-color:hsl(var(--sidebar-accent))}.data-\\[state\\=open\\]\\:hover\\:text-sidebar-accent-foreground:hover[data-state=open]{color:hsl(var(--sidebar-accent-foreground))}.data-\\[active\\=true\\]\\:focus\\:bg-accent:focus[data-active=true]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:focus\\:bg-accent:focus[data-state=open]{background-color:hsl(var(--accent))}.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10:focus[data-variant=destructive]{background-color:hsl(var(--destructive) / .1)}.data-\\[variant\\=destructive\\]\\:focus\\:text-destructive:focus[data-variant=destructive]{color:hsl(var(--destructive))}.group[data-disabled=true] .group-data-\\[disabled\\=true\\]\\:pointer-events-none{pointer-events:none}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:left-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\]{left:calc(var(--sidebar-width) * -1)}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:right-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\]{right:calc(var(--sidebar-width) * -1)}.group[data-side=left] .group-data-\\[side\\=left\\]\\:-right-4{right:-1rem}.group[data-side=right] .group-data-\\[side\\=right\\]\\:left-0{left:0}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:top-full{top:100%}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:-mt-8{margin-top:-2rem}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:mt-1\\.5{margin-top:.375rem}.group\\/drawer-content[data-vaul-drawer-direction=bottom] .group-data-\\[vaul-drawer-direction\\=bottom\\]\\/drawer-content\\:block{display:block}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:hidden{display:none}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\)\\]{width:calc(var(--sidebar-width-icon) + (--spacing(4)))}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\+2px\\)\\]{width:calc(var(--sidebar-width-icon) + (--spacing(4)) + 2px)}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:w-0{width:0px}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group[data-side=right] .group-data-\\[side\\=right\\]\\:rotate-180,.group[data-state=open] .group-data-\\[state\\=open\\]\\:rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:overflow-hidden,.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:overflow-hidden{overflow:hidden}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:rounded-lg{border-radius:var(--radius)}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:rounded-md{border-radius:calc(var(--radius) - 2px)}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:border,.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:border{border-width:1px}.group[data-side=left] .group-data-\\[side\\=left\\]\\:border-r{border-right-width:1px}.group[data-side=right] .group-data-\\[side\\=right\\]\\:border-l{border-left-width:1px}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:border-sidebar-border{border-color:hsl(var(--sidebar-border))}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:bg-popover{background-color:hsl(var(--popover))}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:text-popover-foreground{color:hsl(var(--popover-foreground))}.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:opacity-0{opacity:0}.group[data-disabled=true] .group-data-\\[disabled\\=true\\]\\:opacity-50{opacity:.5}.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:duration-200{transition-duration:.2s;animation-duration:.2s}.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:after\\:left-full:after{content:var(--tw-content);left:100%}.group[data-collapsible=offcanvas] .hover\\:group-data-\\[collapsible\\=offcanvas\\]\\:bg-sidebar:hover{background-color:hsl(var(--sidebar-bg))}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.group\\/navigation-menu[data-viewport=false] .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.peer\\/menu-button[data-size=default]~.peer-data-\\[size\\=default\\]\\/menu-button\\:top-1\\.5{top:.375rem}.peer\\/menu-button[data-size=lg]~.peer-data-\\[size\\=lg\\]\\/menu-button\\:top-2\\.5{top:.625rem}.peer\\/menu-button[data-size=sm]~.peer-data-\\[size\\=sm\\]\\/menu-button\\:top-1{top:.25rem}.peer\\/menu-button[data-active=true]~.peer-data-\\[active\\=true\\]\\/menu-button\\:text-sidebar-accent-foreground{color:hsl(var(--sidebar-accent-foreground))}.dark\\:border-input:is(.dark *){border-color:hsl(var(--input))}.dark\\:bg-destructive\\/60:is(.dark *){background-color:hsl(var(--destructive) / .6)}.dark\\:bg-input\\/30:is(.dark *){background-color:hsl(var(--input) / .3)}.dark\\:text-muted-foreground:is(.dark *){color:hsl(var(--muted-foreground))}.dark\\:hover\\:bg-accent\\/50:hover:is(.dark *){background-color:hsl(var(--accent) / .5)}.dark\\:hover\\:bg-input\\/50:hover:is(.dark *){background-color:hsl(var(--input) / .5)}.dark\\:focus-visible\\:ring-destructive\\/40:focus-visible:is(.dark *){--tw-ring-color: hsl(var(--destructive) / .4)}.dark\\:data-\\[state\\=active\\]\\:border-input[data-state=active]:is(.dark *){border-color:hsl(var(--input))}.dark\\:data-\\[state\\=active\\]\\:bg-input\\/30[data-state=active]:is(.dark *){background-color:hsl(var(--input) / .3)}.dark\\:data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]:is(.dark *){background-color:hsl(var(--primary))}.dark\\:data-\\[state\\=checked\\]\\:bg-primary-foreground[data-state=checked]:is(.dark *){background-color:hsl(var(--primary-foreground))}.dark\\:data-\\[state\\=unchecked\\]\\:bg-card-foreground[data-state=unchecked]:is(.dark *){background-color:hsl(var(--card-foreground))}.dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80[data-state=unchecked]:is(.dark *){background-color:hsl(var(--input) / .8)}.dark\\:data-\\[state\\=active\\]\\:text-foreground[data-state=active]:is(.dark *){color:hsl(var(--foreground))}.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20:focus[data-variant=destructive]:is(.dark *){background-color:hsl(var(--destructive) / .2)}@media (min-width: 640px){.sm\\:right-0{right:0}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:w-80{width:20rem}.sm\\:w-auto{width:auto}.sm\\:max-w-lg{max-width:32rem}.sm\\:max-w-sm{max-width:24rem}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:gap-2\\.5{gap:.625rem}.sm\\:pl-2\\.5{padding-left:.625rem}.sm\\:pr-2\\.5{padding-right:.625rem}.sm\\:text-left{text-align:left}.data-\\[vaul-drawer-direction\\=left\\]\\:sm\\:max-w-sm[data-vaul-drawer-direction=left],.data-\\[vaul-drawer-direction\\=right\\]\\:sm\\:max-w-sm[data-vaul-drawer-direction=right]{max-width:24rem}}@media (min-width: 768px){.md\\:absolute{position:absolute}.md\\:inset-y-0{top:0;bottom:0}.md\\:left-auto{left:auto}.md\\:right-0{right:0}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[500px\\]{width:500px}.md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\]{width:var(--radix-navigation-menu-viewport-width)}.md\\:w-auto{width:auto}.md\\:space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.md\\:border-l{border-left-width:1px}.md\\:p-5{padding:1.25rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:opacity-0{opacity:0}.md\\:after\\:hidden:after{content:var(--tw-content);display:none}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:m-2{margin:.5rem}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:ml-0{margin-left:0}.peer[data-variant=inset][data-state=collapsed]~.md\\:peer-data-\\[variant\\=inset\\]\\:peer-data-\\[state\\=collapsed\\]\\:ml-2{margin-left:.5rem}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:rounded-xl{border-radius:.75rem}.peer[data-variant=inset]~.md\\:peer-data-\\[variant\\=inset\\]\\:shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}@media (min-width: 1024px){.lg\\:w-auto{width:auto}.lg\\:flex-row{flex-direction:row}.lg\\:items-center{align-items:center}.lg\\:gap-6{gap:1.5rem}.lg\\:px-12{padding-left:3rem;padding-right:3rem}}.\\[\\&\\:has\\(\\>\\.day-range-end\\)\\]\\:rounded-r-md:has(>.day-range-end){border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\>\\.day-range-start\\)\\]\\:rounded-l-md:has(>.day-range-start){border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-md:has([aria-selected]){border-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:bg-accent:has([aria-selected]){background-color:hsl(var(--accent))}.first\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-l-md:has([aria-selected]):first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.last\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-r-md:has([aria-selected]):last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[aria-selected\\]\\.day-range-end\\)\\]\\:rounded-r-md:has([aria-selected].day-range-end){border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]){padding-right:0}.\\[\\&\\:last-child\\]\\:pb-6:last-child{padding-bottom:1.5rem}.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\]>[role=checkbox]{--tw-translate-y: 2px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\:last-child\\]\\:truncate>span:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:size-3>svg{width:.75rem;height:.75rem}.\\[\\&\\>svg\\]\\:size-3\\.5>svg{width:.875rem;height:.875rem}.\\[\\&\\>svg\\]\\:size-4>svg{width:1rem;height:1rem}.\\[\\&\\>svg\\]\\:h-2\\.5>svg{height:.625rem}.\\[\\&\\>svg\\]\\:h-3>svg{height:.75rem}.\\[\\&\\>svg\\]\\:w-2\\.5>svg{width:.625rem}.\\[\\&\\>svg\\]\\:w-3>svg{width:.75rem}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}.\\[\\&\\>svg\\]\\:translate-y-0\\.5>svg{--tw-translate-y: .125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:text-current>svg{color:currentColor}.\\[\\&\\>svg\\]\\:text-muted-foreground>svg{color:hsl(var(--muted-foreground))}.\\[\\&\\>svg\\]\\:text-sidebar-accent-foreground>svg{color:hsl(var(--sidebar-accent-foreground))}.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child>tr{border-bottom-width:0px}.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction=vertical]>div{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state=open]>svg{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&_\\.recharts-cartesian-axis-tick_text\\]\\:fill-muted-foreground .recharts-cartesian-axis-tick text{fill:hsl(var(--muted-foreground))}.\\[\\&_\\.recharts-cartesian-grid_line\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border\\/50 .recharts-cartesian-grid line[stroke="#ccc"]{stroke:hsl(var(--border) / .5)}.\\[\\&_\\.recharts-curve\\.recharts-tooltip-cursor\\]\\:stroke-border .recharts-curve.recharts-tooltip-cursor{stroke:hsl(var(--border))}.\\[\\&_\\.recharts-dot\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent .recharts-dot[stroke="#fff"]{stroke:transparent}.\\[\\&_\\.recharts-polar-grid_\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border .recharts-polar-grid [stroke="#ccc"]{stroke:hsl(var(--border))}.\\[\\&_\\.recharts-radial-bar-background-sector\\]\\:fill-muted .recharts-radial-bar-background-sector,.\\[\\&_\\.recharts-rectangle\\.recharts-tooltip-cursor\\]\\:fill-muted .recharts-rectangle.recharts-tooltip-cursor{fill:hsl(var(--muted))}.\\[\\&_\\.recharts-reference-line_\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border .recharts-reference-line [stroke="#ccc"]{stroke:hsl(var(--border))}.\\[\\&_\\.recharts-sector\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent .recharts-sector[stroke="#fff"]{stroke:transparent}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-top:.375rem;padding-bottom:.375rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:.75rem;line-height:1rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{font-weight:500}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:hsl(var(--muted-foreground))}.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:0}.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:1.25rem}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:1.25rem}.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:3rem}.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-top:.75rem;padding-bottom:.75rem}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:1.25rem}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:1.25rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:1rem;height:1rem}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:hsl(var(--muted-foreground))}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child{border-width:0px}.\\[\\&_tr\\]\\:border-b tr{border-bottom-width:1px}[data-side=left][data-collapsible=offcanvas] .\\[\\[data-side\\=left\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-right-2{right:-.5rem}[data-side=left][data-state=collapsed] .\\[\\[data-side\\=left\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-e-resize{cursor:e-resize}[data-side=right][data-collapsible=offcanvas] .\\[\\[data-side\\=right\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-left-2{left:-.5rem}[data-side=right][data-state=collapsed] .\\[\\[data-side\\=right\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-w-resize{cursor:w-resize}a.\\[a\\&\\]\\:hover\\:bg-accent:hover{background-color:hsl(var(--accent))}a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover{background-color:hsl(var(--secondary) / .9)}a.\\[a\\&\\]\\:hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}`;
var xh = { exports: {} }, Ua = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kg = F, xg = Symbol.for("react.element"), Ag = Symbol.for("react.fragment"), Sg = Object.prototype.hasOwnProperty, Eg = kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Cg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ah(e, t, r) {
  var n, i = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Sg.call(t, n) && !Cg.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: xg, type: e, key: a, ref: o, props: i, _owner: Eg.current };
}
Ua.Fragment = Ag;
Ua.jsx = Ah;
Ua.jsxs = Ah;
xh.exports = Ua;
var y = xh.exports;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sh = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tg = {
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
const Rg = F.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: o,
    ...s
  }, l) => F.createElement(
    "svg",
    {
      ref: l,
      ...Tg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Sh("lucide", i),
      ...s
    },
    [
      ...o.map(([u, c]) => F.createElement(u, c)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = (e, t) => {
  const r = F.forwardRef(
    ({ className: n, ...i }, a) => F.createElement(Rg, {
      ref: a,
      iconNode: t,
      className: Sh(`lucide-${Og(e)}`, n),
      ...i
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
const Pg = Jt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = Jt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = Jt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = Jt("Eye", [
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
const zg = Jt("FileText", [
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
const Ug = Jt("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = Jt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = Jt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function _e(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function ur(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Eh = 6048e5, Mg = 864e5;
let Lg = {};
function Da() {
  return Lg;
}
function Gn(e, t) {
  const r = Da(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = _e(e), a = i.getDay(), o = (a < n ? 7 : 0) + a - n;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function ma(e) {
  return Gn(e, { weekStartsOn: 1 });
}
function Ch(e) {
  const t = _e(e), r = t.getFullYear(), n = ur(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const i = ma(n), a = ur(e, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const o = ma(a);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1;
}
function Iu(e) {
  const t = _e(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ju(e) {
  const t = _e(e), r = new Date(
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
function Bg(e, t) {
  const r = Iu(e), n = Iu(t), i = +r - ju(r), a = +n - ju(n);
  return Math.round((i - a) / Mg);
}
function Fg(e) {
  const t = Ch(e), r = ur(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), ma(r);
}
function Jg(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Wg(e) {
  if (!Jg(e) && typeof e != "number")
    return !1;
  const t = _e(e);
  return !isNaN(Number(t));
}
function Qg(e) {
  const t = _e(e), r = ur(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Kg = {
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
}, Hg = (e, t, r) => {
  let n;
  const i = Kg[e];
  return typeof i == "string" ? n = i : t === 1 ? n = i.one : n = i.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function go(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Yg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Vg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, qg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gg = {
  date: go({
    formats: Yg,
    defaultWidth: "full"
  }),
  time: go({
    formats: Vg,
    defaultWidth: "full"
  }),
  dateTime: go({
    formats: qg,
    defaultWidth: "full"
  })
}, Zg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xg = (e, t, r, n) => Zg[e];
function fn(e) {
  return (t, r) => {
    const n = r?.context ? String(r.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, s = r?.width ? String(r.width) : o;
      i = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, s = r?.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[o];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const _g = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, $g = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, em = {
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
}, tm = {
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
}, rm = {
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
}, nm = {
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
}, im = (e, t) => {
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
}, am = {
  ordinalNumber: im,
  era: fn({
    values: _g,
    defaultWidth: "wide"
  }),
  quarter: fn({
    values: $g,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: fn({
    values: em,
    defaultWidth: "wide"
  }),
  day: fn({
    values: tm,
    defaultWidth: "wide"
  }),
  dayPeriod: fn({
    values: rm,
    defaultWidth: "wide",
    formattingValues: nm,
    defaultFormattingWidth: "wide"
  })
};
function pn(e) {
  return (t, r = {}) => {
    const n = r.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const o = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? sm(s, (f) => f.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      om(s, (f) => f.test(o))
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
function om(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function sm(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function lm(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const um = /^(\d+)(th|st|nd|rd)?/i, cm = /\d+/i, dm = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, hm = {
  any: [/^b/i, /^(a|c)/i]
}, fm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gm = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, mm = {
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
}, vm = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, wm = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ym = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, bm = {
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
}, km = {
  ordinalNumber: lm({
    matchPattern: um,
    parsePattern: cm,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: pn({
    matchPatterns: dm,
    defaultMatchWidth: "wide",
    parsePatterns: hm,
    defaultParseWidth: "any"
  }),
  quarter: pn({
    matchPatterns: fm,
    defaultMatchWidth: "wide",
    parsePatterns: pm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: pn({
    matchPatterns: gm,
    defaultMatchWidth: "wide",
    parsePatterns: mm,
    defaultParseWidth: "any"
  }),
  day: pn({
    matchPatterns: vm,
    defaultMatchWidth: "wide",
    parsePatterns: wm,
    defaultParseWidth: "any"
  }),
  dayPeriod: pn({
    matchPatterns: ym,
    defaultMatchWidth: "any",
    parsePatterns: bm,
    defaultParseWidth: "any"
  })
}, xm = {
  code: "en-US",
  formatDistance: Hg,
  formatLong: Gg,
  formatRelative: Xg,
  localize: am,
  match: km,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Am(e) {
  const t = _e(e);
  return Bg(t, Qg(t)) + 1;
}
function Sm(e) {
  const t = _e(e), r = +ma(t) - +Fg(t);
  return Math.round(r / Eh) + 1;
}
function Oh(e, t) {
  const r = _e(e), n = r.getFullYear(), i = Da(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = ur(e, 0);
  o.setFullYear(n + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = Gn(o, t), l = ur(e, 0);
  l.setFullYear(n, 0, a), l.setHours(0, 0, 0, 0);
  const u = Gn(l, t);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= u.getTime() ? n : n - 1;
}
function Em(e, t) {
  const r = Da(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = Oh(e, t), a = ur(e, 0);
  return a.setFullYear(i, 0, n), a.setHours(0, 0, 0, 0), Gn(a, t);
}
function Cm(e, t) {
  const r = _e(e), n = +Gn(r, t) - +Em(r, t);
  return Math.round(n / Eh) + 1;
}
function J(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const yt = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return J(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : J(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return J(e.getDate(), t.length);
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
    return J(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return J(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return J(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return J(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return J(i, t.length);
  }
}, mr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zu = {
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
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return r.ordinalNumber(i, { unit: "year" });
    }
    return yt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const i = Oh(e, n), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const o = a % 100;
      return J(o, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : J(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Ch(e);
    return J(r, t.length);
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
    return J(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return J(n, 2);
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
        return J(n, 2);
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
        return yt.M(e, t);
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
        return J(n + 1, 2);
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
    const i = Cm(e, n);
    return t === "wo" ? r.ordinalNumber(i, { unit: "week" }) : J(i, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Sm(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : J(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : yt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Am(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : J(n, t.length);
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
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return J(a, 2);
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return J(a, t.length);
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return J(i, t.length);
      case "io":
        return r.ordinalNumber(i, { unit: "day" });
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
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = mr.noon : n === 0 ? i = mr.midnight : i = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = mr.evening : n >= 12 ? i = mr.afternoon : n >= 4 ? i = mr.morning : i = mr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
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
    return yt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : yt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : J(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : J(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : yt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : yt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return yt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Du(n);
      case "XXXX":
      case "XX":
        return qt(n);
      case "XXXXX":
      case "XXX":
      default:
        return qt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Du(n);
      case "xxxx":
      case "xx":
        return qt(n);
      case "xxxxx":
      case "xxx":
      default:
        return qt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Uu(n, ":");
      case "OOOO":
      default:
        return "GMT" + qt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Uu(n, ":");
      case "zzzz":
      default:
        return "GMT" + qt(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return J(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return J(n, t.length);
  }
};
function Uu(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(i) : r + String(i) + t + J(a, 2);
}
function Du(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : qt(e, t);
}
function qt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = J(Math.trunc(n / 60), 2), a = J(n % 60, 2);
  return r + i + t + a;
}
const Mu = (e, t) => {
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
}, Th = (e, t) => {
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
}, Om = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], i = r[2];
  if (!i)
    return Mu(e, t);
  let a;
  switch (n) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Mu(n, t)).replace("{{time}}", Th(i, t));
}, Tm = {
  p: Th,
  P: Om
}, Rm = /^D+$/, Pm = /^Y+$/, Nm = ["D", "DD", "YY", "YYYY"];
function Im(e) {
  return Rm.test(e);
}
function jm(e) {
  return Pm.test(e);
}
function zm(e, t, r) {
  const n = Um(e, t, r);
  if (console.warn(n), Nm.includes(e)) throw new RangeError(n);
}
function Um(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Dm = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Mm = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Lm = /^'([^]*?)'?$/, Bm = /''/g, Fm = /[a-zA-Z]/;
function Lu(e, t, r) {
  const n = Da(), i = n.locale ?? xm, a = n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = _e(e);
  if (!Wg(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Mm).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const h = Tm[f];
      return h(c, i.formatLong);
    }
    return c;
  }).join("").match(Dm).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: Jm(c) };
    if (zu[f])
      return { isToken: !0, value: c };
    if (f.match(Fm))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: o,
    locale: i
  };
  return l.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (jm(f) || Im(f)) && zm(f, t, String(e));
    const h = zu[f[0]];
    return h(s, f, i.localize, u);
  }).join("");
}
function Jm(e) {
  const t = e.match(Lm);
  return t ? t[1].replace(Bm, "'") : e;
}
function Ma(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Wm(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
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
      c.done ? a(c.value) : i(c.value).then(s, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
const Qm = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t);
class bl extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), this.name = r, this.context = n;
  }
}
class Km extends bl {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class Bu extends bl {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Fu extends bl {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var gs;
(function(e) {
  e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(gs || (gs = {}));
class Hm {
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
  constructor(t, { headers: r = {}, customFetch: n, region: i = gs.Any } = {}) {
    this.url = t, this.headers = r, this.region = i, this.fetch = Qm(n);
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
    return Wm(this, arguments, void 0, function* (r, n = {}) {
      var i;
      let a, o;
      try {
        const { headers: s, method: l, body: u, signal: c, timeout: f } = n;
        let h = {}, { region: m } = n;
        m || (m = this.region);
        const v = new URL(`${this.url}/${r}`);
        m && m !== "any" && (h["x-region"] = m, v.searchParams.set("forceFunctionRegion", m));
        let w;
        u && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (h["Content-Type"] = "application/octet-stream", w = u) : typeof u == "string" ? (h["Content-Type"] = "text/plain", w = u) : typeof FormData < "u" && u instanceof FormData ? w = u : (h["Content-Type"] = "application/json", w = JSON.stringify(u)) : u && typeof u != "string" && !(typeof Blob < "u" && u instanceof Blob) && !(u instanceof ArrayBuffer) && !(typeof FormData < "u" && u instanceof FormData) ? w = JSON.stringify(u) : w = u;
        let x = c;
        f && (o = new AbortController(), a = setTimeout(() => o.abort(), f), c ? (x = o.signal, c.addEventListener("abort", () => o.abort())) : x = o.signal);
        const p = yield this.fetch(v.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, h), this.headers), s),
          body: w,
          signal: x
        }).catch((k) => {
          throw new Km(k);
        }), d = p.headers.get("x-relay-error");
        if (d && d === "true")
          throw new Bu(p);
        if (!p.ok)
          throw new Fu(p);
        let g = ((i = p.headers.get("Content-Type")) !== null && i !== void 0 ? i : "text/plain").split(";")[0].trim(), b;
        return g === "application/json" ? b = yield p.json() : g === "application/octet-stream" || g === "application/pdf" ? b = yield p.blob() : g === "text/event-stream" ? b = p : g === "multipart/form-data" ? b = yield p.formData() : b = yield p.text(), { data: b, error: null, response: p };
      } catch (s) {
        return {
          data: null,
          error: s,
          response: s instanceof Fu || s instanceof Bu ? s.context : void 0
        };
      } finally {
        a && clearTimeout(a);
      }
    });
  }
}
var Ym = class extends Error {
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
}, Vm = class {
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
    let i = n(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (a) => {
      let o = null, s = null, l = null, u = a.status, c = a.statusText;
      if (a.ok) {
        var f, h;
        if (r.method !== "HEAD") {
          var m;
          const p = await a.text();
          p === "" || (r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && (!((m = r.headers.get("Accept")) === null || m === void 0) && m.includes("application/vnd.pgrst.plan+text")) ? s = p : s = JSON.parse(p));
        }
        const w = (f = r.headers.get("Prefer")) === null || f === void 0 ? void 0 : f.match(/count=(exact|planned|estimated)/), x = (h = a.headers.get("content-range")) === null || h === void 0 ? void 0 : h.split("/");
        w && x && x.length > 1 && (l = parseInt(x[1])), r.isMaybeSingle && r.method === "GET" && Array.isArray(s) && (s.length > 1 ? (o = {
          code: "PGRST116",
          details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, s = null, l = null, u = 406, c = "Not Acceptable") : s.length === 1 ? s = s[0] : s = null);
      } else {
        var v;
        const w = await a.text();
        try {
          o = JSON.parse(w), Array.isArray(o) && a.status === 404 && (s = [], o = null, u = 200, c = "OK");
        } catch {
          a.status === 404 && w === "" ? (u = 204, c = "No Content") : o = { message: w };
        }
        if (o && r.isMaybeSingle && (!(o == null || (v = o.details) === null || v === void 0) && v.includes("0 rows")) && (o = null, u = 200, c = "OK"), o && r.shouldThrowOnError) throw new Ym(o);
      }
      return {
        error: o,
        data: s,
        count: l,
        status: u,
        statusText: c
      };
    });
    return this.shouldThrowOnError || (i = i.catch((a) => {
      var o;
      let s = "", l = "", u = "";
      const c = a?.cause;
      if (c) {
        var f, h, m, v;
        const p = (f = c?.message) !== null && f !== void 0 ? f : "", d = (h = c?.code) !== null && h !== void 0 ? h : "";
        s = `${(m = a?.name) !== null && m !== void 0 ? m : "FetchError"}: ${a?.message}`, s += `

Caused by: ${(v = c?.name) !== null && v !== void 0 ? v : "Error"}: ${p}`, d && (s += ` (${d})`), c?.stack && (s += `
${c.stack}`);
      } else {
        var w;
        s = (w = a?.stack) !== null && w !== void 0 ? w : "";
      }
      const x = this.url.toString().length;
      return a?.name === "AbortError" || a?.code === "ABORT_ERR" ? (u = "", l = "Request was aborted (timeout or manual cancellation)", x > this.urlLengthLimit && (l += `. Note: Your request URL is ${x} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (c?.name === "HeadersOverflowError" || c?.code === "UND_ERR_HEADERS_OVERFLOW") && (u = "", l = "HTTP headers exceeded server limits (typically 16KB)", x > this.urlLengthLimit && (l += `. Your request URL is ${x} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        error: {
          message: `${(o = a?.name) !== null && o !== void 0 ? o : "FetchError"}: ${a?.message}`,
          details: s,
          hint: l,
          code: u
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), i.then(e, t);
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
}, qm = class extends Vm {
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
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: n, referencedTable: i = n } = {}) {
    const a = i ? `${i}.order` : "order", o = this.url.searchParams.get(a);
    return this.url.searchParams.set(a, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
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
    const i = typeof n > "u" ? "offset" : `${n}.offset`, a = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(a, `${t - e + 1}`), this;
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
  explain({ analyze: e = !1, verbose: t = !1, settings: r = !1, buffers: n = !1, wal: i = !1, format: a = "text" } = {}) {
    var o;
    const s = [
      e ? "analyze" : null,
      t ? "verbose" : null,
      r ? "settings" : null,
      n ? "buffers" : null,
      i ? "wal" : null
    ].filter(Boolean).join("|"), l = (o = this.headers.get("Accept")) !== null && o !== void 0 ? o : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${a}; for="${l}"; options=${s};`), a === "json" ? this : this;
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
const Ju = /* @__PURE__ */ new RegExp("[,()]");
var Ar = class extends qm {
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
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && Ju.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && Ju.test(n) ? `"${n}"` : `${n}`).join(",");
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
    let i = "";
    n === "plain" ? i = "pl" : n === "phrase" ? i = "ph" : n === "websearch" && (i = "w");
    const a = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${i}fts${a}.${t}`), this;
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
}, Gm = class {
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
  constructor(e, { headers: t = {}, schema: r, fetch: n, urlLengthLimit: i = 8e3 }) {
    this.url = e, this.headers = new Headers(t), this.schema = r, this.fetch = n, this.urlLengthLimit = i;
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
    const { head: r = !1, count: n } = t ?? {}, i = r ? "HEAD" : "GET";
    let a = !1;
    const o = (e ?? "*").split("").map((u) => /\s/.test(u) && !a ? "" : (u === '"' && (a = !a), u)).join(""), { url: s, headers: l } = this.cloneRequestState();
    return s.searchParams.set("select", o), n && l.append("Prefer", `count=${n}`), new Ar({
      method: i,
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
    const i = "POST", { url: a, headers: o } = this.cloneRequestState();
    if (t && o.append("Prefer", `count=${t}`), r || o.append("Prefer", "missing=default"), Array.isArray(e)) {
      const s = e.reduce((l, u) => l.concat(Object.keys(u)), []);
      if (s.length > 0) {
        const l = [...new Set(s)].map((u) => `"${u}"`);
        a.searchParams.set("columns", l.join(","));
      }
    }
    return new Ar({
      method: i,
      url: a,
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
  upsert(e, { onConflict: t, ignoreDuplicates: r = !1, count: n, defaultToNull: i = !0 } = {}) {
    var a;
    const o = "POST", { url: s, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), t !== void 0 && s.searchParams.set("on_conflict", t), n && l.append("Prefer", `count=${n}`), i || l.append("Prefer", "missing=default"), Array.isArray(e)) {
      const u = e.reduce((c, f) => c.concat(Object.keys(f)), []);
      if (u.length > 0) {
        const c = [...new Set(u)].map((f) => `"${f}"`);
        s.searchParams.set("columns", c.join(","));
      }
    }
    return new Ar({
      method: o,
      url: s,
      headers: l,
      schema: this.schema,
      body: e,
      fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
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
    const n = "PATCH", { url: i, headers: a } = this.cloneRequestState();
    return t && a.append("Prefer", `count=${t}`), new Ar({
      method: n,
      url: i,
      headers: a,
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
    const r = "DELETE", { url: n, headers: i } = this.cloneRequestState();
    return e && i.append("Prefer", `count=${e}`), new Ar({
      method: r,
      url: n,
      headers: i,
      schema: this.schema,
      fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function Zm(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xm(e) {
  var t = Zm(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function _m(e, t, r) {
  return (t = Xm(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Wu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wu(Object(r), !0).forEach(function(n) {
      _m(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var $m = class Rh {
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
  constructor(t, { headers: r = {}, schema: n, fetch: i, timeout: a, urlLengthLimit: o = 8e3 } = {}) {
    this.url = t, this.headers = new Headers(r), this.schemaName = n, this.urlLengthLimit = o;
    const s = i ?? globalThis.fetch;
    a !== void 0 && a > 0 ? this.fetch = (l, u) => {
      const c = new AbortController(), f = setTimeout(() => c.abort(), a), h = u?.signal;
      if (h) {
        if (h.aborted)
          return clearTimeout(f), s(l, u);
        const m = () => {
          clearTimeout(f), c.abort();
        };
        return h.addEventListener("abort", m, { once: !0 }), s(l, Oi(Oi({}, u), {}, { signal: c.signal })).finally(() => {
          clearTimeout(f), h.removeEventListener("abort", m);
        });
      }
      return s(l, Oi(Oi({}, u), {}, { signal: c.signal })).finally(() => clearTimeout(f));
    } : this.fetch = s;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new Gm(new URL(`${this.url}/${t}`), {
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
    return new Rh(this.url, {
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
  rpc(t, r = {}, { head: n = !1, get: i = !1, count: a } = {}) {
    var o;
    let s;
    const l = new URL(`${this.url}/rpc/${t}`);
    let u;
    const c = (m) => m !== null && typeof m == "object" && (!Array.isArray(m) || m.some(c)), f = n && Object.values(r).some(c);
    f ? (s = "POST", u = r) : n || i ? (s = n ? "HEAD" : "GET", Object.entries(r).filter(([m, v]) => v !== void 0).map(([m, v]) => [m, Array.isArray(v) ? `{${v.join(",")}}` : `${v}`]).forEach(([m, v]) => {
      l.searchParams.append(m, v);
    })) : (s = "POST", u = r);
    const h = new Headers(this.headers);
    return f ? h.set("Prefer", a ? `count=${a},return=minimal` : "return=minimal") : a && h.set("Prefer", `count=${a}`), new Ar({
      method: s,
      url: l,
      headers: h,
      schema: this.schemaName,
      body: u,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class ev {
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
        const i = n.node, a = parseInt(i.replace(/^v/, "").split(".")[0]);
        return a >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${a} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${a} detected without native WebSocket support.`,
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
const tv = "2.95.3", rv = `realtime-js/${tv}`, nv = "1.0.0", Ph = "2.0.0", Qu = Ph, ms = 1e4, iv = 1e3, av = 100;
var xt;
(function(e) {
  e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
})(xt || (xt = {}));
var ie;
(function(e) {
  e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
})(ie || (ie = {}));
var Ve;
(function(e) {
  e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
})(Ve || (Ve = {}));
var vs;
(function(e) {
  e.websocket = "websocket";
})(vs || (vs = {}));
var Zt;
(function(e) {
  e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
})(Zt || (Zt = {}));
class ov {
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
    const i = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, i);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const i = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}, o = new TextEncoder().encode(JSON.stringify(i)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var i, a;
    const o = t.topic, s = (i = t.ref) !== null && i !== void 0 ? i : "", l = (a = t.join_ref) !== null && a !== void 0 ? a : "", u = t.payload.event, c = this.allowedMetadataKeys ? this._pick(t.payload, this.allowedMetadataKeys) : {}, f = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
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
    const h = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + s.length + o.length + u.length + f.length, m = new ArrayBuffer(this.HEADER_LENGTH + h);
    let v = new DataView(m), w = 0;
    v.setUint8(w++, this.KINDS.userBroadcastPush), v.setUint8(w++, l.length), v.setUint8(w++, s.length), v.setUint8(w++, o.length), v.setUint8(w++, u.length), v.setUint8(w++, f.length), v.setUint8(w++, r), Array.from(l, (p) => v.setUint8(w++, p.charCodeAt(0))), Array.from(s, (p) => v.setUint8(w++, p.charCodeAt(0))), Array.from(o, (p) => v.setUint8(w++, p.charCodeAt(0))), Array.from(u, (p) => v.setUint8(w++, p.charCodeAt(0))), Array.from(f, (p) => v.setUint8(w++, p.charCodeAt(0)));
    var x = new Uint8Array(m.byteLength + n.byteLength);
    return x.set(new Uint8Array(m), 0), x.set(new Uint8Array(n), m.byteLength), x.buffer;
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t), [i, a, o, s, l] = n;
      return r({ join_ref: i, ref: a, topic: o, event: s, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t), n = r.getUint8(0), i = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, i);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const i = r.getUint8(1), a = r.getUint8(2), o = r.getUint8(3), s = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = n.decode(t.slice(l, l + i));
    l = l + i;
    const c = n.decode(t.slice(l, l + a));
    l = l + a;
    const f = n.decode(t.slice(l, l + o));
    l = l + o;
    const h = t.slice(l, t.byteLength), m = s === this.JSON_ENCODING ? JSON.parse(n.decode(h)) : h, v = {
      type: this.BROADCAST_EVENT,
      event: c,
      payload: m
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
class Nh {
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
var Q;
(function(e) {
  e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(Q || (Q = {}));
const Ku = (e, t, r = {}) => {
  var n;
  const i = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
  return t ? Object.keys(t).reduce((a, o) => (a[o] = sv(o, e, t, i), a), {}) : {};
}, sv = (e, t, r, n) => {
  const i = t.find((s) => s.name === e), a = i?.type, o = r[e];
  return a && !n.includes(a) ? Ih(a, o) : ws(o);
}, Ih = (e, t) => {
  if (e.charAt(0) === "_") {
    const r = e.slice(1, e.length);
    return dv(t, r);
  }
  switch (e) {
    case Q.bool:
      return lv(t);
    case Q.float4:
    case Q.float8:
    case Q.int2:
    case Q.int4:
    case Q.int8:
    case Q.numeric:
    case Q.oid:
      return uv(t);
    case Q.json:
    case Q.jsonb:
      return cv(t);
    case Q.timestamp:
      return hv(t);
    case Q.abstime:
    case Q.date:
    case Q.daterange:
    case Q.int4range:
    case Q.int8range:
    case Q.money:
    case Q.reltime:
    case Q.text:
    case Q.time:
    case Q.timestamptz:
    case Q.timetz:
    case Q.tsrange:
    case Q.tstzrange:
      return ws(t);
    default:
      return ws(t);
  }
}, ws = (e) => e, lv = (e) => {
  switch (e) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return e;
  }
}, uv = (e) => {
  if (typeof e == "string") {
    const t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return e;
}, cv = (e) => {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e;
}, dv = (e, t) => {
  if (typeof e != "string")
    return e;
  const r = e.length - 1, n = e[r];
  if (e[0] === "{" && n === "}") {
    let a;
    const o = e.slice(1, r);
    try {
      a = JSON.parse("[" + o + "]");
    } catch {
      a = o ? o.split(",") : [];
    }
    return a.map((s) => Ih(t, s));
  }
  return e;
}, hv = (e) => typeof e == "string" ? e.replace(" ", "T") : e, jh = (e) => {
  const t = new URL(e);
  return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast", t.href;
};
class mo {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(t, r, n = {}, i = ms) {
    this.channel = t, this.event = r, this.payload = n, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
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
var Hu;
(function(e) {
  e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(Hu || (Hu = {}));
class Pn {
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
    this.channel._on(n.state, {}, (i) => {
      const { onJoin: a, onLeave: o, onSync: s } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = Pn.syncState(this.state, i, a, o), this.pendingDiffs.forEach((l) => {
        this.state = Pn.syncDiff(this.state, l, a, o);
      }), this.pendingDiffs = [], s();
    }), this.channel._on(n.diff, {}, (i) => {
      const { onJoin: a, onLeave: o, onSync: s } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = Pn.syncDiff(this.state, i, a, o), s());
    }), this.onJoin((i, a, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: i,
        currentPresences: a,
        newPresences: o
      });
    }), this.onLeave((i, a, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: i,
        currentPresences: a,
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
  static syncState(t, r, n, i) {
    const a = this.cloneDeep(t), o = this.transformState(r), s = {}, l = {};
    return this.map(a, (u, c) => {
      o[u] || (l[u] = c);
    }), this.map(o, (u, c) => {
      const f = a[u];
      if (f) {
        const h = c.map((x) => x.presence_ref), m = f.map((x) => x.presence_ref), v = c.filter((x) => m.indexOf(x.presence_ref) < 0), w = f.filter((x) => h.indexOf(x.presence_ref) < 0);
        v.length > 0 && (s[u] = v), w.length > 0 && (l[u] = w);
      } else
        s[u] = c;
    }), this.syncDiff(a, { joins: s, leaves: l }, n, i);
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
  static syncDiff(t, r, n, i) {
    const { joins: a, leaves: o } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves)
    };
    return n || (n = () => {
    }), i || (i = () => {
    }), this.map(a, (s, l) => {
      var u;
      const c = (u = t[s]) !== null && u !== void 0 ? u : [];
      if (t[s] = this.cloneDeep(l), c.length > 0) {
        const f = t[s].map((m) => m.presence_ref), h = c.filter((m) => f.indexOf(m.presence_ref) < 0);
        t[s].unshift(...h);
      }
      n(s, c, l);
    }), this.map(o, (s, l) => {
      let u = t[s];
      if (!u)
        return;
      const c = l.map((f) => f.presence_ref);
      u = u.filter((f) => c.indexOf(f.presence_ref) < 0), t[s] = u, i(s, u, l), u.length === 0 && delete t[s];
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
      const i = t[n];
      return "metas" in i ? r[n] = i.metas.map((a) => (a.presence_ref = a.phx_ref, delete a.phx_ref, delete a.phx_ref_prev, a)) : r[n] = i, r;
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
var Yu;
(function(e) {
  e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(Yu || (Yu = {}));
var Nn;
(function(e) {
  e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(Nn || (Nn = {}));
var ot;
(function(e) {
  e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(ot || (ot = {}));
class Lr {
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
    var i, a;
    if (this.topic = t, this.params = r, this.socket = n, this.bindings = {}, this.state = ie.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.timeout = this.socket.timeout, this.joinPush = new mo(this, Ve.join, this.params, this.timeout), this.rejoinTimer = new Nh(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = ie.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = ie.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = ie.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = ie.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = ie.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Ve.reply, {}, (o, s) => {
      this._trigger(this._replyEventName(s), o);
    }), this.presence = new Pn(this), this.broadcastEndpointURL = jh(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((a = (i = this.params.config) === null || i === void 0 ? void 0 : i.broadcast) === null || a === void 0) && a.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(t, r = this.timeout) {
    var n, i, a;
    if (this.socket.isConnected() || this.socket.connect(), this.state == ie.closed) {
      const { config: { broadcast: o, presence: s, private: l } } = this.params, u = (i = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((m) => m.filter)) !== null && i !== void 0 ? i : [], c = !!this.bindings[Nn.PRESENCE] && this.bindings[Nn.PRESENCE].length > 0 || ((a = this.params.config.presence) === null || a === void 0 ? void 0 : a.enabled) === !0, f = {}, h = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, s), { enabled: c }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (f.access_token = this.socket.accessTokenValue), this._onError((m) => t?.(ot.CHANNEL_ERROR, m)), this._onClose(() => t?.(ot.CLOSED)), this.updateJoinPayload(Object.assign({ config: h }, f)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({ postgres_changes: m }) => {
        var v;
        if (this.socket._isManualToken() || this.socket.setAuth(), m === void 0) {
          t?.(ot.SUBSCRIBED);
          return;
        } else {
          const w = this.bindings.postgres_changes, x = (v = w?.length) !== null && v !== void 0 ? v : 0, p = [];
          for (let d = 0; d < x; d++) {
            const g = w[d], { filter: { event: b, schema: k, table: E, filter: C } } = g, R = m && m[d];
            if (R && R.event === b && Lr.isFilterValueEqual(R.schema, k) && Lr.isFilterValueEqual(R.table, E) && Lr.isFilterValueEqual(R.filter, C))
              p.push(Object.assign(Object.assign({}, g), { id: R.id }));
            else {
              this.unsubscribe(), this.state = ie.errored, t?.(ot.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = p, t && t(ot.SUBSCRIBED);
          return;
        }
      }).receive("error", (m) => {
        this.state = ie.errored, t?.(ot.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(m).join(", ") || "error")));
      }).receive("timeout", () => {
        t?.(ot.TIMED_OUT);
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
    return this.state === ie.joined && t === Nn.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(t, r, n);
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
    var i;
    if (r == null)
      return Promise.reject("Payload is required for httpSend()");
    const a = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
      method: "POST",
      headers: a,
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
    }, s = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (i = n.timeout) !== null && i !== void 0 ? i : this.timeout);
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
    var n, i;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: a, payload: o } = t, s = {
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
              event: a,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
        return await ((i = u.body) === null || i === void 0 ? void 0 : i.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((a) => {
        var o, s, l;
        const u = this._push(t.type, t, r.timeout || this.timeout);
        t.type === "broadcast" && !(!((l = (s = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || s === void 0 ? void 0 : s.broadcast) === null || l === void 0) && l.ack) && a("ok"), u.receive("ok", () => a("ok")), u.receive("error", () => a("error")), u.receive("timeout", () => a("timed out"));
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
    this.state = ie.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Ve.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((i) => {
      n = new mo(this, Ve.leave, {}, t), n.receive("ok", () => {
        r(), i("ok");
      }).receive("timeout", () => {
        r(), i("timed out");
      }).receive("error", () => {
        i("error");
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
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = ie.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(t, r, n) {
    const i = new AbortController(), a = setTimeout(() => i.abort(), n), o = await this.socket.fetch(t, Object.assign(Object.assign({}, r), { signal: i.signal }));
    return clearTimeout(a), o;
  }
  /** @internal */
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new mo(this, t, r, n);
    return this._canPush() ? i.send() : this._addToPushBuffer(i), i;
  }
  /** @internal */
  _addToPushBuffer(t) {
    if (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > av) {
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
    var i, a;
    const o = t.toLocaleLowerCase(), { close: s, error: l, leave: u, join: c } = Ve;
    if (n && [s, l, u, c].indexOf(o) >= 0 && n !== this._joinRef())
      return;
    let h = this._onMessage(o, r, n);
    if (r && !h)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((m) => {
      var v, w, x;
      return ((v = m.filter) === null || v === void 0 ? void 0 : v.event) === "*" || ((x = (w = m.filter) === null || w === void 0 ? void 0 : w.event) === null || x === void 0 ? void 0 : x.toLocaleLowerCase()) === o;
    }).map((m) => m.callback(h, n)) : (a = this.bindings[o]) === null || a === void 0 || a.filter((m) => {
      var v, w, x, p, d, g;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in m) {
          const b = m.id, k = (v = m.filter) === null || v === void 0 ? void 0 : v.event;
          return b && ((w = r.ids) === null || w === void 0 ? void 0 : w.includes(b)) && (k === "*" || k?.toLocaleLowerCase() === ((x = r.data) === null || x === void 0 ? void 0 : x.type.toLocaleLowerCase()));
        } else {
          const b = (d = (p = m?.filter) === null || p === void 0 ? void 0 : p.event) === null || d === void 0 ? void 0 : d.toLocaleLowerCase();
          return b === "*" || b === ((g = r?.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase());
        }
      else
        return m.type.toLocaleLowerCase() === o;
    }).map((m) => {
      if (typeof h == "object" && "ids" in h) {
        const v = h.data, { schema: w, table: x, commit_timestamp: p, type: d, errors: g } = v;
        h = Object.assign(Object.assign({}, {
          schema: w,
          table: x,
          commit_timestamp: p,
          eventType: d,
          new: {},
          old: {},
          errors: g
        }), this._getPayloadRecords(v));
      }
      m.callback(h, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === ie.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === ie.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === ie.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === ie.leaving;
  }
  /** @internal */
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  /** @internal */
  _on(t, r, n) {
    const i = t.toLocaleLowerCase(), a = {
      type: i,
      filter: r,
      callback: n
    };
    return this.bindings[i] ? this.bindings[i].push(a) : this.bindings[i] = [a], this;
  }
  /** @internal */
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter((i) => {
      var a;
      return !(((a = i.type) === null || a === void 0 ? void 0 : a.toLocaleLowerCase()) === n && Lr.isEqual(i.filter, r));
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
    this._on(Ve.close, {}, t);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(t) {
    this._on(Ve.error, {}, (r) => t(r));
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
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = ie.joining, this.joinPush.resend(t));
  }
  /** @internal */
  _getPayloadRecords(t) {
    const r = {
      new: {},
      old: {}
    };
    return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = Ku(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (r.old = Ku(t.columns, t.old_record)), r;
  }
}
const vo = () => {
}, Ti = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, fv = [1e3, 2e3, 5e3, 1e4], pv = 1e4, gv = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class mv {
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
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = ms, this.transport = null, this.heartbeatIntervalMs = Ti.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = vo, this.ref = 0, this.reconnectTimer = null, this.vsn = Qu, this.logger = vo, this.conn = null, this.sendBuffer = [], this.serializer = new ov(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._heartbeatSentAt = null, this._resolveFetch = (i) => i ? (...a) => i(...a) : (...a) => fetch(...a), !(!((n = r?.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey, this.endPoint = `${t}/${vs.websocket}`, this.httpEndpoint = jh(t), this._initializeOptions(r), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(r?.fetch);
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
          this.conn = ev.createWebSocket(this.endpointURL());
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
      case xt.connecting:
        return Zt.Connecting;
      case xt.open:
        return Zt.Open;
      case xt.closing:
        return Zt.Closing;
      default:
        return Zt.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Zt.Open;
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
    const n = `realtime:${t}`, i = this.getChannels().find((a) => a.topic === n);
    if (i)
      return i;
    {
      const a = new Lr(`realtime:${t}`, r, this);
      return this.channels.push(a), a;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(t) {
    const { topic: r, event: n, payload: i, ref: a } = t, o = () => {
      this.encode(t, (s) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(s);
      });
    };
    this.log("push", `${r} ${n} (${a})`, i), this.isConnected() ? o() : this.sendBuffer.push(o);
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
      this._wasManualDisconnect = !1, (t = this.conn) === null || t === void 0 || t.close(iv, "heartbeat timeout"), setTimeout(() => {
        var r;
        this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout();
      }, Ti.HEARTBEAT_TIMEOUT_FALLBACK);
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
      const { topic: n, event: i, payload: a, ref: o } = r, s = o ? `(${o})` : "", l = a.status || "";
      this.log("receive", `${l} ${n} ${i} ${s}`.trim(), a), this.channels.filter((u) => u._isMember(n)).forEach((u) => u._trigger(i, a, o)), this._triggerStateCallbacks("message", r);
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
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (t) => this._onConnError(t), this.conn.onmessage = (t) => this._onConnMessage(t), this.conn.onclose = (t) => this._onConnClose(t), this.conn.readyState === xt.open && this._onConnOpen());
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === xt.open || this.conn.readyState === xt.connecting)
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
    this.channels.forEach((t) => t._trigger(Ve.error));
  }
  /** @internal */
  _appendParams(t, r) {
    if (Object.keys(r).length === 0)
      return t;
    const n = t.match(/\?/) ? "&" : "?", i = new URLSearchParams(r);
    return `${t}${n}${i}`;
  }
  _workerObjectUrl(t) {
    let r;
    if (t)
      r = t;
    else {
      const n = new Blob([gv], { type: "application/javascript" });
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
      } catch (i) {
        this.log("error", "Error fetching access token from callback", i), r = this.accessTokenValue;
      }
    else
      r = this.accessTokenValue;
    n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((i) => {
      const a = {
        access_token: r,
        version: rv
      };
      r && i.updateJoinPayload(a), i.joinedOnce && i._isJoined() && i._push(Ve.access_token, {
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
        } catch (i) {
          this.log("error", `error in ${t} callback`, i);
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
    this.reconnectTimer = new Nh(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Ti.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(t) {
    var r, n, i, a, o, s, l, u, c, f, h, m;
    switch (this.transport = (r = t?.transport) !== null && r !== void 0 ? r : null, this.timeout = (n = t?.timeout) !== null && n !== void 0 ? n : ms, this.heartbeatIntervalMs = (i = t?.heartbeatIntervalMs) !== null && i !== void 0 ? i : Ti.HEARTBEAT_INTERVAL, this.worker = (a = t?.worker) !== null && a !== void 0 ? a : !1, this.accessToken = (o = t?.accessToken) !== null && o !== void 0 ? o : null, this.heartbeatCallback = (s = t?.heartbeatCallback) !== null && s !== void 0 ? s : vo, this.vsn = (l = t?.vsn) !== null && l !== void 0 ? l : Qu, t?.params && (this.params = t.params), t?.logger && (this.logger = t.logger), (t?.logLevel || t?.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (u = t?.reconnectAfterMs) !== null && u !== void 0 ? u : (v) => fv[v - 1] || pv, this.vsn) {
      case nv:
        this.encode = (c = t?.encode) !== null && c !== void 0 ? c : (v, w) => w(JSON.stringify(v)), this.decode = (f = t?.decode) !== null && f !== void 0 ? f : (v, w) => w(JSON.parse(v));
        break;
      case Ph:
        this.encode = (h = t?.encode) !== null && h !== void 0 ? h : this.serializer.encode.bind(this.serializer), this.decode = (m = t?.decode) !== null && m !== void 0 ? m : this.serializer.decode.bind(this.serializer);
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
var Xn = class extends Error {
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
function vv(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [i, a] of Object.entries(r))
      a !== void 0 && n.searchParams.set(i, a);
  return n.toString();
}
async function wv(e) {
  return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function yv(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: n,
      query: i,
      body: a,
      headers: o
    }) {
      const s = vv(e.baseUrl, n, i), l = await wv(e.auth), u = await t(s, {
        method: r,
        headers: {
          ...a ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: a ? JSON.stringify(a) : void 0
      }), c = await u.text(), f = (u.headers.get("content-type") || "").includes("application/json"), h = f && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const m = f ? h : void 0, v = m?.error;
        throw new Xn(
          v?.message ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: v?.type,
            icebergCode: v?.code,
            details: m
          }
        );
      }
      return { status: u.status, headers: u.headers, data: h };
    }
  };
}
function Ri(e) {
  return e.join("");
}
var bv = class {
  constructor(e, t = "") {
    this.client = e, this.prefix = t;
  }
  async listNamespaces(e) {
    const t = e ? { parent: Ri(e.namespace) } : void 0;
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
      path: `${this.prefix}/namespaces/${Ri(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Ri(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Ri(e.namespace)}`
      }), !0;
    } catch (t) {
      if (t instanceof Xn && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof Xn && r.status === 409)
        return;
      throw r;
    }
  }
};
function vr(e) {
  return e.join("");
}
var kv = class {
  constructor(e, t = "", r) {
    this.client = e, this.prefix = t, this.accessDelegation = r;
  }
  async listTables(e) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${vr(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${vr(e.namespace)}/tables`,
      body: t,
      headers: r
    })).data.metadata;
  }
  async updateTable(e, t) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,
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
      path: `${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,
      query: { purgeRequested: String(t?.purge ?? !1) }
    });
  }
  async loadTable(e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    const t = {};
    this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,
        headers: t
      }), !0;
    } catch (r) {
      if (r instanceof Xn && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (r) {
      if (r instanceof Xn && r.status === 409)
        return await this.loadTable({ namespace: e.namespace, name: t.name });
      throw r;
    }
  }
}, xv = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(e) {
    let t = "v1";
    e.catalogName && (t += `/${e.catalogName}`);
    const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
    this.client = yv({
      baseUrl: r,
      auth: e.auth,
      fetchImpl: e.fetch
    }), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new bv(this.client, t), this.tableOps = new kv(this.client, t, this.accessDelegation);
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
}, La = class extends Error {
  constructor(e, t = "storage", r, n) {
    super(e), this.__isStorageError = !0, this.namespace = t, this.name = t === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = n;
  }
};
function Ba(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var Pi = class extends La {
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
}, zh = class extends La {
  constructor(e, t, r = "storage") {
    super(e, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
  }
};
const Av = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), Sv = (e) => {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ys = (e) => {
  if (Array.isArray(e)) return e.map((r) => ys(r));
  if (typeof e == "function" || e !== Object(e)) return e;
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const i = r.replace(/([-_][a-z])/gi, (a) => a.toUpperCase().replace(/[-_]/g, ""));
    t[i] = ys(n);
  }), t;
}, Ev = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e);
}
function Cv(e, t) {
  if (_n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ov(e) {
  var t = Cv(e, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function Tv(e, t, r) {
  return (t = Ov(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Vu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vu(Object(r), !0).forEach(function(n) {
      Tv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const qu = (e) => {
  var t;
  return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : (t = e.error) === null || t === void 0 ? void 0 : t.message) || JSON.stringify(e);
}, Rv = async (e, t, r, n) => {
  if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number" && !r?.noResolveJson) {
    const i = e, a = i.status || 500;
    if (typeof i.json == "function") i.json().then((o) => {
      const s = o?.statusCode || o?.code || a + "";
      t(new Pi(qu(o), a, s, n));
    }).catch(() => {
      if (n === "vectors") {
        const o = a + "";
        t(new Pi(i.statusText || `HTTP ${a} error`, a, o, n));
      } else {
        const o = a + "";
        t(new Pi(i.statusText || `HTTP ${a} error`, a, o, n));
      }
    });
    else {
      const o = a + "";
      t(new Pi(i.statusText || `HTTP ${a} error`, a, o, n));
    }
  } else t(new zh(qu(e), e, n));
}, Pv = (e, t, r, n) => {
  const i = {
    method: e,
    headers: t?.headers || {}
  };
  return e === "GET" || e === "HEAD" || !n ? I(I({}, i), r) : (Sv(n) ? (i.headers = I({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(n)) : i.body = n, t?.duplex && (i.duplex = t.duplex), I(I({}, i), r));
};
async function gn(e, t, r, n, i, a, o) {
  return new Promise((s, l) => {
    e(r, Pv(t, n, i, a)).then((u) => {
      if (!u.ok) throw u;
      if (n?.noResolveJson) return u;
      if (o === "vectors") {
        const c = u.headers.get("content-type");
        if (u.headers.get("content-length") === "0" || u.status === 204) return {};
        if (!c || !c.includes("application/json")) return {};
      }
      return u.json();
    }).then((u) => s(u)).catch((u) => Rv(u, l, n, o));
  });
}
function Uh(e = "storage") {
  return {
    get: async (t, r, n, i) => gn(t, "GET", r, n, i, void 0, e),
    post: async (t, r, n, i, a) => gn(t, "POST", r, i, a, n, e),
    put: async (t, r, n, i, a) => gn(t, "PUT", r, i, a, n, e),
    head: async (t, r, n, i) => gn(t, "HEAD", r, I(I({}, n), {}, { noResolveJson: !0 }), i, void 0, e),
    remove: async (t, r, n, i, a) => gn(t, "DELETE", r, i, a, n, e)
  };
}
const Nv = Uh("storage"), { get: $n, post: He, put: bs, head: Iv, remove: kl } = Nv, Pe = Uh("vectors");
var rn = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(e, t = {}, r, n = "storage") {
    this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.fetch = Av(r), this.namespace = n;
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
      if (Ba(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
}, jv = class {
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
      if (Ba(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
let Dh;
Dh = Symbol.toStringTag;
var zv = class {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t, this[Dh] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new jv(this.downloadFn, this.shouldThrowOnError);
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
      if (Ba(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
const Uv = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Gu = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var Dv = class extends rn {
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
    var i = this;
    return i.handleOperation(async () => {
      let a;
      const o = I(I({}, Gu), n);
      let s = I(I({}, i.headers), e === "POST" && { "x-upsert": String(o.upsert) });
      const l = o.metadata;
      typeof Blob < "u" && r instanceof Blob ? (a = new FormData(), a.append("cacheControl", o.cacheControl), l && a.append("metadata", i.encodeMetadata(l)), a.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (a = r, a.has("cacheControl") || a.append("cacheControl", o.cacheControl), l && !a.has("metadata") && a.append("metadata", i.encodeMetadata(l))) : (a = r, s["cache-control"] = `max-age=${o.cacheControl}`, s["content-type"] = o.contentType, l && (s["x-metadata"] = i.toBase64(i.encodeMetadata(l))), (typeof ReadableStream < "u" && a instanceof ReadableStream || a && typeof a == "object" && "pipe" in a && typeof a.pipe == "function") && !o.duplex && (o.duplex = "half")), n?.headers && (s = I(I({}, s), n.headers));
      const u = i._removeEmptyFolders(t), c = i._getFinalPath(u), f = await (e == "PUT" ? bs : He)(i.fetch, `${i.url}/object/${c}`, a, I({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}));
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
    var i = this;
    const a = i._removeEmptyFolders(e), o = i._getFinalPath(a), s = new URL(i.url + `/object/upload/sign/${o}`);
    return s.searchParams.set("token", t), i.handleOperation(async () => {
      let l;
      const u = I({ upsert: Gu.upsert }, n), c = I(I({}, i.headers), { "x-upsert": String(u.upsert) });
      return typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType), {
        path: a,
        fullPath: (await bs(i.fetch, s.toString(), l, { headers: c })).Key
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
      const i = I({}, r.headers);
      t?.upsert && (i["x-upsert"] = "true");
      const a = await He(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, { headers: i }), o = new URL(r.url + a.url), s = o.searchParams.get("token");
      if (!s) throw new La("No token returned by API");
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
    return n.handleOperation(async () => await He(n.fetch, `${n.url}/object/move`, {
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
    return n.handleOperation(async () => ({ path: (await He(n.fetch, `${n.url}/object/copy`, {
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
      let i = n._getFinalPath(e), a = await He(n.fetch, `${n.url}/object/sign/${i}`, I({ expiresIn: t }, r?.transform ? { transform: r.transform } : {}), { headers: n.headers });
      const o = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return { signedUrl: encodeURI(`${n.url}${a.signedURL}${o}`) };
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
      const i = await He(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
        expiresIn: t,
        paths: e
      }, { headers: n.headers }), a = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return i.map((o) => I(I({}, o), {}, { signedUrl: o.signedURL ? encodeURI(`${n.url}${o.signedURL}${a}`) : null }));
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
    const n = typeof t?.transform < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString(t?.transform || {}), a = i ? `?${i}` : "", o = this._getFinalPath(e), s = () => $n(this.fetch, `${this.url}/${n}/${o}${a}`, {
      headers: this.headers,
      noResolveJson: !0
    }, r);
    return new zv(s, this.shouldThrowOnError);
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
    return t.handleOperation(async () => ys(await $n(t.fetch, `${t.url}/object/info/${r}`, { headers: t.headers })));
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
      return await Iv(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }), {
        data: !0,
        error: null
      };
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (Ba(n) && n instanceof zh) {
        const i = n.originalError;
        if ([400, 404].includes(i?.status)) return {
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
    const r = this._getFinalPath(e), n = [], i = t?.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && n.push(i);
    const a = typeof t?.transform < "u" ? "render/image" : "object", o = this.transformOptsToQueryString(t?.transform || {});
    o !== "" && n.push(o);
    let s = n.join("&");
    return s !== "" && (s = `?${s}`), { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${s}`) } };
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
    return t.handleOperation(async () => await kl(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
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
      const i = I(I(I({}, Uv), t), {}, { prefix: e || "" });
      return await He(n.fetch, `${n.url}/object/list/${n.bucketId}`, i, { headers: n.headers }, r);
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
      const n = I({}, e);
      return await He(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, { headers: r.headers }, t);
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
const Mv = "2.95.3", li = { "X-Client-Info": `storage-js/${Mv}` };
var Lv = class extends rn {
  constructor(e, t = {}, r, n) {
    const i = new URL(e);
    n?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
    const a = i.href.replace(/\/$/, ""), o = I(I({}, li), t);
    super(a, o, r, "storage");
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
      return await $n(t.fetch, `${t.url}/bucket${r}`, { headers: t.headers });
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
    return t.handleOperation(async () => await $n(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
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
    return r.handleOperation(async () => await He(r.fetch, `${r.url}/bucket`, {
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
    return r.handleOperation(async () => await bs(r.fetch, `${r.url}/bucket/${e}`, {
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
    return t.handleOperation(async () => await He(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
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
    return t.handleOperation(async () => await kl(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
  }
}, Bv = class extends rn {
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
    const n = e.replace(/\/$/, ""), i = I(I({}, li), t);
    super(n, i, r, "storage");
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
    return t.handleOperation(async () => await He(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
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
      const n = r.toString(), i = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
      return await $n(t.fetch, i, { headers: t.headers });
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
    return t.handleOperation(async () => await kl(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
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
    if (!Ev(e)) throw new La("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const r = new xv({
      baseUrl: this.url,
      catalogName: e,
      auth: {
        type: "custom",
        getHeaders: async () => t.headers
      },
      fetch: this.fetch
    }), n = this.shouldThrowOnError;
    return new Proxy(r, { get(i, a) {
      const o = i[a];
      return typeof o != "function" ? o : async (...s) => {
        try {
          return {
            data: await o.apply(i, s),
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
}, Fv = class extends rn {
  /** Creates a new VectorIndexApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = I(I({}, li), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Pe.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Pe.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }) || {});
  }
}, Jv = class extends rn {
  /** Creates a new VectorDataApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = I(I({}, li), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(e) {
    var t = this;
    if (e.vectors.length < 1 || e.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(e) {
    var t = this;
    if (e.segmentCount !== void 0) {
      if (e.segmentCount < 1 || e.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
    }
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(e) {
    var t = this;
    if (e.keys.length < 1 || e.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
  }
}, Wv = class extends rn {
  /** Creates a new VectorBucketApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = I(I({}, li), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(e = {}) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Pe.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
}, Qv = class extends Wv {
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
    return new Kv(this.url, this.headers, e, this.fetch);
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
}, Kv = class extends Fv {
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
    return t().call(r, I(I({}, e), {}, { vectorBucketName: r.vectorBucketName }));
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
    return t().call(r, I(I({}, e), {}, { vectorBucketName: r.vectorBucketName }));
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
    return new Hv(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
}, Hv = class extends Jv {
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
  constructor(e, t, r, n, i) {
    super(e, t, i), this.vectorBucketName = r, this.indexName = n;
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
    return t().call(r, I(I({}, e), {}, {
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
    return t().call(r, I(I({}, e), {}, {
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
    return t().call(r, I(I({}, e), {}, {
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
    return t().call(r, I(I({}, e), {}, {
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
    return t().call(r, I(I({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
}, Yv = class extends Lv {
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
    return new Dv(this.url, this.headers, e, this.fetch);
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
    return new Qv(this.url + "/vector", {
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
    return new Bv(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Mh = "2.95.3", Sr = 30 * 1e3, ks = 3, wo = ks * Sr, Vv = "http://localhost:9999", qv = "supabase.auth.token", Gv = { "X-Client-Info": `gotrue-js/${Mh}` }, xs = "X-Supabase-Api-Version", Lh = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Zv = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Xv = 10 * 60 * 1e3;
class ei extends Error {
  constructor(t, r, n) {
    super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n;
  }
}
function P(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class _v extends ei {
  constructor(t, r, n) {
    super(t, r, n), this.name = "AuthApiError", this.status = r, this.code = n;
  }
}
function $v(e) {
  return P(e) && e.name === "AuthApiError";
}
class Xt extends ei {
  constructor(t, r) {
    super(t), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class mt extends ei {
  constructor(t, r, n, i) {
    super(t, n, i), this.name = r, this.status = n;
  }
}
class Te extends mt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function yo(e) {
  return P(e) && e.name === "AuthSessionMissingError";
}
class wr extends mt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Ni extends mt {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Ii extends mt {
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
function e0(e) {
  return P(e) && e.name === "AuthImplicitGrantRedirectError";
}
class Zu extends mt {
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
class t0 extends mt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class As extends mt {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function bo(e) {
  return P(e) && e.name === "AuthRetryableFetchError";
}
class Xu extends mt {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n;
  }
}
class Ss extends mt {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const va = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), _u = ` 	
\r=`.split(""), r0 = (() => {
  const e = new Array(128);
  for (let t = 0; t < e.length; t += 1)
    e[t] = -1;
  for (let t = 0; t < _u.length; t += 1)
    e[_u[t].charCodeAt(0)] = -2;
  for (let t = 0; t < va.length; t += 1)
    e[va[t].charCodeAt(0)] = t;
  return e;
})();
function $u(e, t, r) {
  if (e !== null)
    for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(va[n]), t.queuedBits -= 6;
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(va[n]), t.queuedBits -= 6;
    }
}
function Bh(e, t, r) {
  const n = r0[e];
  if (n > -1)
    for (t.queue = t.queue << 6 | n, t.queuedBits += 6; t.queuedBits >= 8; )
      r(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function ec(e) {
  const t = [], r = (o) => {
    t.push(String.fromCodePoint(o));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, a = (o) => {
    a0(o, n, r);
  };
  for (let o = 0; o < e.length; o += 1)
    Bh(e.charCodeAt(o), i, a);
  return t.join("");
}
function n0(e, t) {
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
function i0(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const i = (n - 55296) * 1024 & 65535;
      n = (e.charCodeAt(r + 1) - 56320 & 65535 | i) + 65536, r += 1;
    }
    n0(n, t);
  }
}
function a0(e, t, r) {
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
function Hr(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  for (let i = 0; i < e.length; i += 1)
    Bh(e.charCodeAt(i), r, n);
  return new Uint8Array(t);
}
function o0(e) {
  const t = [];
  return i0(e, (r) => t.push(r)), new Uint8Array(t);
}
function tr(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  return e.forEach((i) => $u(i, r, n)), $u(null, r, n), t.join("");
}
function s0(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function l0() {
  return Symbol("auth-callback");
}
const ce = () => typeof window < "u" && typeof document < "u", Kt = {
  tested: !1,
  writable: !1
}, Fh = () => {
  if (!ce())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Kt.tested)
    return Kt.writable;
  const e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Kt.tested = !0, Kt.writable = !0;
  } catch {
    Kt.tested = !0, Kt.writable = !1;
  }
  return Kt.writable;
};
function u0(e) {
  const t = {}, r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((i, a) => {
        t[a] = i;
      });
    } catch {
    }
  return r.searchParams.forEach((n, i) => {
    t[i] = n;
  }), t;
}
const Jh = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), c0 = (e) => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", Er = async (e, t, r) => {
  await e.setItem(t, JSON.stringify(r));
}, Ht = async (e, t) => {
  const r = await e.getItem(t);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}, ue = async (e, t) => {
  await e.removeItem(t);
};
class Fa {
  constructor() {
    this.promise = new Fa.promiseConstructor((t, r) => {
      this.resolve = t, this.reject = r;
    });
  }
}
Fa.promiseConstructor = Promise;
function ji(e) {
  const t = e.split(".");
  if (t.length !== 3)
    throw new Ss("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!Zv.test(t[n]))
      throw new Ss("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(ec(t[0])),
    payload: JSON.parse(ec(t[1])),
    signature: Hr(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function d0(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function h0(e, t) {
  return new Promise((n, i) => {
    (async () => {
      for (let a = 0; a < 1 / 0; a++)
        try {
          const o = await e(a);
          if (!t(a, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!t(a, o)) {
            i(o);
            return;
          }
        }
    })();
  });
}
function f0(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function p0() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = r.length;
    let i = "";
    for (let a = 0; a < 56; a++)
      i += r.charAt(Math.floor(Math.random() * n));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, f0).join("");
}
async function g0(e) {
  const r = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", r), i = new Uint8Array(n);
  return Array.from(i).map((a) => String.fromCharCode(a)).join("");
}
async function m0(e) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
  const r = await g0(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function yr(e, t, r = !1) {
  const n = p0();
  let i = n;
  r && (i += "/PASSWORD_RECOVERY"), await Er(e, `${t}-code-verifier`, i);
  const a = await m0(n);
  return [a, n === a ? "plain" : "s256"];
}
const v0 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function w0(e) {
  const t = e.headers.get(xs);
  if (!t || !t.match(v0))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function y0(e) {
  if (!e)
    throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t)
    throw new Error("JWT has expired");
}
function b0(e) {
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
const k0 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function br(e) {
  if (!k0.test(e))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function ko() {
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
function x0(e, t) {
  return new Proxy(e, {
    get: (r, n, i) => {
      if (n === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof n == "symbol") {
        const a = n.toString();
        if (a === "Symbol(Symbol.toPrimitive)" || a === "Symbol(Symbol.toStringTag)" || a === "Symbol(util.inspect.custom)" || a === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(r, n, i);
      }
      return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(r, n, i);
    }
  });
}
function tc(e) {
  return JSON.parse(JSON.stringify(e));
}
const Gt = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), A0 = [502, 503, 504];
async function rc(e) {
  var t;
  if (!c0(e))
    throw new As(Gt(e), 0);
  if (A0.includes(e.status))
    throw new As(Gt(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (a) {
    throw new Xt(Gt(a), a);
  }
  let n;
  const i = w0(e);
  if (i && i.getTime() >= Lh["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
    if (n === "weak_password")
      throw new Xu(Gt(r), e.status, ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
    if (n === "session_not_found")
      throw new Te();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((a, o) => a && typeof o == "string", !0))
    throw new Xu(Gt(r), e.status, r.weak_password.reasons);
  throw new _v(Gt(r), e.status || 500, n);
}
const S0 = (e, t, r, n) => {
  const i = { method: e, headers: t?.headers || {} };
  return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(n), Object.assign(Object.assign({}, i), r));
};
async function N(e, t, r, n) {
  var i;
  const a = Object.assign({}, n?.headers);
  a[xs] || (a[xs] = Lh["2024-01-01"].name), n?.jwt && (a.Authorization = `Bearer ${n.jwt}`);
  const o = (i = n?.query) !== null && i !== void 0 ? i : {};
  n?.redirectTo && (o.redirect_to = n.redirectTo);
  const s = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await E0(e, t, r + s, {
    headers: a,
    noResolveJson: n?.noResolveJson
  }, {}, n?.body);
  return n?.xform ? n?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function E0(e, t, r, n, i, a) {
  const o = S0(t, n, i, a);
  let s;
  try {
    s = await e(r, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new As(Gt(l), 0);
  }
  if (s.ok || await rc(s), n?.noResolveJson)
    return s;
  try {
    return await s.json();
  } catch (l) {
    await rc(l);
  }
}
function Qe(e) {
  var t;
  let r = null;
  T0(e) && (r = Object.assign({}, e), e.expires_at || (r.expires_at = s0(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function nc(e) {
  const t = Qe(e);
  return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function Et(e) {
  var t;
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null };
}
function C0(e) {
  return { data: e, error: null };
}
function O0(e) {
  const { action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: a } = e, o = Ma(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), s = {
    action_link: t,
    email_otp: r,
    hashed_token: n,
    redirect_to: i,
    verification_type: a
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: s,
      user: l
    },
    error: null
  };
}
function ic(e) {
  return e;
}
function T0(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const xo = ["global", "local", "others"];
class R0 {
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
    this.url = t, this.headers = r, this.fetch = Jh(n), this.mfa = {
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
  async signOut(t, r = xo[0]) {
    if (xo.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${xo.join(", ")}`);
    try {
      return await N(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: t,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (P(n))
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
      return await N(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Et
      });
    } catch (n) {
      if (P(n))
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
      const { options: r } = t, n = Ma(t, ["options"]), i = Object.assign(Object.assign({}, n), r);
      return "newEmail" in n && (i.new_email = n?.newEmail, delete i.newEmail), await N(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: O0,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (P(r))
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
      return await N(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Et
      });
    } catch (r) {
      if (P(r))
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
    var r, n, i, a, o, s, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await N(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (a = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && a !== void 0 ? a : ""
        },
        xform: ic
      });
      if (c.error)
        throw c.error;
      const f = await c.json(), h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, m = (l = (s = c.headers.get("link")) === null || s === void 0 ? void 0 : s.split(",")) !== null && l !== void 0 ? l : [];
      return m.length > 0 && (m.forEach((v) => {
        const w = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), x = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${x}Page`] = w;
      }), u.total = parseInt(h)), { data: Object.assign(Object.assign({}, f), u), error: null };
    } catch (u) {
      if (P(u))
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
    br(t);
    try {
      return await N(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Et
      });
    } catch (r) {
      if (P(r))
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
    br(t);
    try {
      return await N(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Et
      });
    } catch (n) {
      if (P(n))
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
    br(t);
    try {
      return await N(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: Et
      });
    } catch (n) {
      if (P(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    br(t.userId);
    try {
      const { data: r, error: n } = await N(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: r, error: n };
    } catch (r) {
      if (P(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    br(t.userId), br(t.id);
    try {
      return { data: await N(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (P(r))
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
    var r, n, i, a, o, s, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await N(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (a = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && a !== void 0 ? a : ""
        },
        xform: ic
      });
      if (c.error)
        throw c.error;
      const f = await c.json(), h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, m = (l = (s = c.headers.get("link")) === null || s === void 0 ? void 0 : s.split(",")) !== null && l !== void 0 ? l : [];
      return m.length > 0 && (m.forEach((v) => {
        const w = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), x = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${x}Page`] = w;
      }), u.total = parseInt(h)), { data: Object.assign(Object.assign({}, f), u), error: null };
    } catch (u) {
      if (P(u))
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
      return await N(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (P(r))
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
      return await N(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (P(r))
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
      return await N(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (P(n))
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
      return await N(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (P(r))
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
      return await N(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (P(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function ac(e = {}) {
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
const kr = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Fh() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Wh extends Error {
  constructor(t) {
    super(t), this.isAcquireTimeout = !0;
  }
}
class P0 extends Wh {
}
async function N0(e, t, r) {
  kr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return t > 0 && setTimeout(() => {
    n.abort(), kr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
  }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (i) => {
    if (i) {
      kr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, i.name);
      try {
        return await r();
      } finally {
        kr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, i.name);
      }
    } else {
      if (t === 0)
        throw kr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new P0(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
      if (kr.debug)
        try {
          const a = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(a, null, "  "));
        } catch (a) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", a);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r();
    }
  }));
}
function I0() {
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
function Qh(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function j0(e) {
  return parseInt(e, 16);
}
function z0(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function U0(e) {
  var t;
  const { chainId: r, domain: n, expirationTime: i, issuedAt: a = /* @__PURE__ */ new Date(), nonce: o, notBefore: s, requestId: l, resources: u, scheme: c, uri: f, version: h } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!n)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!f)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (h !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`);
    if (!((t = e.statement) === null || t === void 0) && t.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
  }
  const m = Qh(e.address), v = c ? `${c}://${n}` : n, w = e.statement ? `${e.statement}
` : "", x = `${v} wants you to sign in with your Ethereum account:
${m}

${w}`;
  let p = `URI: ${f}
Version: ${h}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${a.toISOString()}`;
  if (i && (p += `
Expiration Time: ${i.toISOString()}`), s && (p += `
Not Before: ${s.toISOString()}`), l && (p += `
Request ID: ${l}`), u) {
    let d = `
Resources:`;
    for (const g of u) {
      if (!g || typeof g != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${g}`);
      d += `
- ${g}`;
    }
    p += d;
  }
  return `${x}
${p}`;
}
class te extends Error {
  constructor({ message: t, code: r, cause: n, name: i }) {
    var a;
    super(t, { cause: n }), this.__isWebAuthnError = !0, this.name = (a = i ?? (n instanceof Error ? n.name : void 0)) !== null && a !== void 0 ? a : "Unknown Error", this.code = r;
  }
}
class wa extends te {
  constructor(t, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function D0({ error: e, options: t }) {
  var r, n, i;
  const { publicKey: a } = t;
  if (!a)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new te({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else if (e.name === "ConstraintError") {
    if (((r = a.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new te({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      t.mediation === "conditional" && ((n = a.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required"
    )
      return new te({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e
      });
    if (((i = a.authenticatorSelection) === null || i === void 0 ? void 0 : i.userVerification) === "required")
      return new te({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e
      });
  } else {
    if (e.name === "InvalidStateError")
      return new te({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e
      });
    if (e.name === "NotAllowedError")
      return new te({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "NotSupportedError")
      return a.pubKeyCredParams.filter((s) => s.type === "public-key").length === 0 ? new te({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: e
      }) : new te({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: e
      });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (Kh(o)) {
        if (a.rp.id !== o)
          return new te({
            message: `The RP ID "${a.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new te({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "TypeError") {
      if (a.user.id.byteLength < 1 || a.user.id.byteLength > 64)
        return new te({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e
        });
    } else if (e.name === "UnknownError")
      return new te({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new te({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
function M0({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new te({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else {
    if (e.name === "NotAllowedError")
      return new te({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (Kh(n)) {
        if (r.rpId !== n)
          return new te({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new te({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "UnknownError")
      return new te({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new te({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
class L0 {
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
const B0 = new L0();
function F0(e) {
  if (!e)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      e
    );
  const { challenge: t, user: r, excludeCredentials: n } = e, i = Ma(
    e,
    ["challenge", "user", "excludeCredentials"]
  ), a = Hr(t).buffer, o = Object.assign(Object.assign({}, r), { id: Hr(r.id).buffer }), s = Object.assign(Object.assign({}, i), {
    challenge: a,
    user: o
  });
  if (n && n.length > 0) {
    s.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      s.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: Hr(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return s;
}
function J0(e) {
  if (!e)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e, n = Ma(
    e,
    ["challenge", "allowCredentials"]
  ), i = Hr(t).buffer, a = Object.assign(Object.assign({}, n), { challenge: i });
  if (r && r.length > 0) {
    a.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      a.allowCredentials[o] = Object.assign(Object.assign({}, s), {
        id: Hr(s.id).buffer,
        type: s.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: s.transports
      });
    }
  }
  return a;
}
function W0(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: tr(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: tr(new Uint8Array(e.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Q0(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e, n = e.getClientExtensionResults(), i = e.response;
  return {
    id: e.id,
    rawId: e.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: tr(new Uint8Array(i.authenticatorData)),
      clientDataJSON: tr(new Uint8Array(i.clientDataJSON)),
      signature: tr(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? tr(new Uint8Array(i.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: n,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Kh(e) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
  );
}
function oc() {
  var e, t;
  return !!(ce() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.create) == "function" && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.get) == "function");
}
async function K0(e) {
  try {
    const t = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new wa("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new wa("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: D0({
        error: t,
        options: e
      })
    };
  }
}
async function H0(e) {
  try {
    const t = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new wa("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new wa("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: M0({
        error: t,
        options: e
      })
    };
  }
}
const Y0 = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, V0 = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function ya(...e) {
  const t = (i) => i !== null && typeof i == "object" && !Array.isArray(i), r = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i), n = {};
  for (const i of e)
    if (i)
      for (const a in i) {
        const o = i[a];
        if (o !== void 0)
          if (Array.isArray(o))
            n[a] = o;
          else if (r(o))
            n[a] = o;
          else if (t(o)) {
            const s = n[a];
            t(s) ? n[a] = ya(s, o) : n[a] = ya(o);
          } else
            n[a] = o;
      }
  return n;
}
function q0(e, t) {
  return ya(Y0, e, t || {});
}
function G0(e, t) {
  return ya(V0, e, t || {});
}
class Z0 {
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
  async _challenge({ factorId: t, webauthn: r, friendlyName: n, signal: i }, a) {
    var o;
    try {
      const { data: s, error: l } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r
      });
      if (!s)
        return { data: null, error: l };
      const u = i ?? B0.createNewAbortSignal();
      if (s.webauthn.type === "create") {
        const { user: c } = s.webauthn.credential_options.publicKey;
        if (!c.name) {
          const f = n;
          if (f)
            c.name = `${c.id}:${f}`;
          else {
            const m = (await this.client.getUser()).data.user, v = ((o = m?.user_metadata) === null || o === void 0 ? void 0 : o.name) || m?.email || m?.id || "User";
            c.name = `${c.id}:${v}`;
          }
        }
        c.displayName || (c.displayName = c.name);
      }
      switch (s.webauthn.type) {
        case "create": {
          const c = q0(s.webauthn.credential_options.publicKey, a?.create), { data: f, error: h } = await K0({
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
          } : { data: null, error: h };
        }
        case "request": {
          const c = G0(s.webauthn.credential_options.publicKey, a?.request), { data: f, error: h } = await H0(Object.assign(Object.assign({}, s.webauthn.credential_options), { publicKey: c, signal: u }));
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
          } : { data: null, error: h };
        }
      }
    } catch (s) {
      return P(s) ? { data: null, error: s } : {
        data: null,
        error: new Xt("Unexpected error in challenge", s)
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
  async _authenticate({ factorId: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, a) {
    if (!r)
      return {
        data: null,
        error: new ei("rpId is required for WebAuthn authentication")
      };
    try {
      if (!oc())
        return {
          data: null,
          error: new Xt("Browser does not support WebAuthn", null)
        };
      const { data: o, error: s } = await this.challenge({
        factorId: t,
        webauthn: { rpId: r, rpOrigins: n },
        signal: i
      }, { request: a });
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
      return P(o) ? { data: null, error: o } : {
        data: null,
        error: new Xt("Unexpected error in authenticate", o)
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
  async _register({ friendlyName: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, a) {
    if (!r)
      return {
        data: null,
        error: new ei("rpId is required for WebAuthn registration")
      };
    try {
      if (!oc())
        return {
          data: null,
          error: new Xt("Browser does not support WebAuthn", null)
        };
      const { data: o, error: s } = await this._enroll({
        friendlyName: t
      });
      if (!o)
        return await this.client.mfa.listFactors().then((c) => {
          var f;
          return (f = c.data) === null || f === void 0 ? void 0 : f.all.find((h) => h.factor_type === "webauthn" && h.friendly_name === t && h.status !== "unverified");
        }).then((c) => c ? this.client.mfa.unenroll({ factorId: c?.id }) : void 0), { data: null, error: s };
      const { data: l, error: u } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: r, rpOrigins: n },
        signal: i
      }, {
        create: a
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
      return P(o) ? { data: null, error: o } : {
        data: null,
        error: new Xt("Unexpected error in register", o)
      };
    }
  }
}
I0();
const X0 = {
  url: Vv,
  storageKey: qv,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Gv,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4
  // 10 seconds
};
async function sc(e, t, r) {
  return await r();
}
const xr = {};
class ti {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var t, r;
    return (r = (t = xr[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(t) {
    xr[this.storageKey] = Object.assign(Object.assign({}, xr[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, r;
    return (r = (t = xr[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    xr[this.storageKey] = Object.assign(Object.assign({}, xr[this.storageKey]), { cachedAt: t });
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
    var r, n, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const a = Object.assign(Object.assign({}, X0), t);
    if (this.storageKey = a.storageKey, this.instanceID = (r = ti.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, ti.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!a.debug, typeof a.debug == "function" && (this.logger = a.debug), this.instanceID > 0 && ce()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = a.persistSession, this.autoRefreshToken = a.autoRefreshToken, this.admin = new R0({
      url: a.url,
      headers: a.headers,
      fetch: a.fetch
    }), this.url = a.url, this.headers = a.headers, this.fetch = Jh(a.fetch), this.lock = a.lock || sc, this.detectSessionInUrl = a.detectSessionInUrl, this.flowType = a.flowType, this.hasCustomAuthorizationHeader = a.hasCustomAuthorizationHeader, this.throwOnError = a.throwOnError, this.lockAcquireTimeout = a.lockAcquireTimeout, a.lock ? this.lock = a.lock : this.persistSession && ce() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = N0 : this.lock = sc, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Z0(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (a.storage ? this.storage = a.storage : Fh() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = ac(this.memoryStorage)), a.userStorage && (this.userStorage = a.userStorage)) : (this.memoryStorage = {}, this.storage = ac(this.memoryStorage)), ce() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (i = this.broadcastChannel) === null || i === void 0 || i.addEventListener("message", async (o) => {
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
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Mh}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
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
      if (ce() && (r = u0(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), ce() && this.detectSessionInUrl && n !== "none") {
        const { data: i, error: a } = await this._getSessionFromURL(r, n);
        if (a) {
          if (this._debug("#_initialize()", "error detecting session from URL", a), e0(a)) {
            const l = (t = a.details) === null || t === void 0 ? void 0 : t.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: a };
          }
          return { error: a };
        }
        const { session: o, redirectType: s } = i;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", s), await this._saveSession(o), setTimeout(async () => {
          s === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return P(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new Xt("Unexpected error during initialization", r)
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
    var r, n, i;
    try {
      const a = await N(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (r = t?.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (i = t?.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: Qe
      }), { data: o, error: s } = a;
      if (s || !o)
        return this._returnResult({ data: { user: null, session: null }, error: s });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (a) {
      if (P(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
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
    var r, n, i;
    try {
      let a;
      if ("email" in t) {
        const { email: c, password: f, options: h } = t;
        let m = null, v = null;
        this.flowType === "pkce" && ([m, v] = await yr(this.storage, this.storageKey)), a = await N(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: h?.emailRedirectTo,
          body: {
            email: c,
            password: f,
            data: (r = h?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: h?.captchaToken },
            code_challenge: m,
            code_challenge_method: v
          },
          xform: Qe
        });
      } else if ("phone" in t) {
        const { phone: c, password: f, options: h } = t;
        a = await N(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: f,
            data: (n = h?.data) !== null && n !== void 0 ? n : {},
            channel: (i = h?.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: Qe
        });
      } else
        throw new Ni("You must provide either an email or phone number and a password");
      const { data: o, error: s } = a;
      if (s || !o)
        return await ue(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: s });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (a) {
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
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
        const { email: a, password: o, options: s } = t;
        r = await N(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: a,
            password: o,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          xform: nc
        });
      } else if ("phone" in t) {
        const { phone: a, password: o, options: s } = t;
        r = await N(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: a,
            password: o,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          xform: nc
        });
      } else
        throw new Ni("You must provide either an email or phone number and a password");
      const { data: n, error: i } = r;
      if (i)
        return this._returnResult({ data: { user: null, session: null }, error: i });
      if (!n || !n.session || !n.user) {
        const a = new wr();
        return this._returnResult({ data: { user: null, session: null }, error: a });
      }
      return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: i
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(t) {
    var r, n, i, a;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams: (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (a = t.options) === null || a === void 0 ? void 0 : a.skipBrowserRedirect
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
    var r, n, i, a, o, s, l, u, c, f, h;
    let m, v;
    if ("message" in t)
      m = t.message, v = t.signature;
    else {
      const { chain: w, wallet: x, statement: p, options: d } = t;
      let g;
      if (ce())
        if (typeof x == "object")
          g = x;
        else {
          const L = window;
          if ("ethereum" in L && typeof L.ethereum == "object" && "request" in L.ethereum && typeof L.ethereum.request == "function")
            g = L.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof x != "object" || !d?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        g = x;
      }
      const b = new URL((r = d?.url) !== null && r !== void 0 ? r : window.location.href), k = await g.request({
        method: "eth_requestAccounts"
      }).then((L) => L).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!k || k.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const E = Qh(k[0]);
      let C = (n = d?.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
      if (!C) {
        const L = await g.request({
          method: "eth_chainId"
        });
        C = j0(L);
      }
      const R = {
        domain: b.host,
        address: E,
        statement: p,
        uri: b.href,
        version: "1",
        chainId: C,
        nonce: (i = d?.signInWithEthereum) === null || i === void 0 ? void 0 : i.nonce,
        issuedAt: (o = (a = d?.signInWithEthereum) === null || a === void 0 ? void 0 : a.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (s = d?.signInWithEthereum) === null || s === void 0 ? void 0 : s.expirationTime,
        notBefore: (l = d?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = d?.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (c = d?.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
      };
      m = U0(R), v = await g.request({
        method: "personal_sign",
        params: [z0(m), E]
      });
    }
    try {
      const { data: w, error: x } = await N(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: m,
          signature: v
        }, !((f = t.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (h = t.options) === null || h === void 0 ? void 0 : h.captchaToken } } : null),
        xform: Qe
      });
      if (x)
        throw x;
      if (!w || !w.session || !w.user) {
        const p = new wr();
        return this._returnResult({ data: { user: null, session: null }, error: p });
      }
      return w.session && (await this._saveSession(w.session), await this._notifyAllSubscribers("SIGNED_IN", w.session)), this._returnResult({ data: Object.assign({}, w), error: x });
    } catch (w) {
      if (P(w))
        return this._returnResult({ data: { user: null, session: null }, error: w });
      throw w;
    }
  }
  async signInWithSolana(t) {
    var r, n, i, a, o, s, l, u, c, f, h, m;
    let v, w;
    if ("message" in t)
      v = t.message, w = t.signature;
    else {
      const { chain: x, wallet: p, statement: d, options: g } = t;
      let b;
      if (ce())
        if (typeof p == "object")
          b = p;
        else {
          const E = window;
          if ("solana" in E && typeof E.solana == "object" && ("signIn" in E.solana && typeof E.solana.signIn == "function" || "signMessage" in E.solana && typeof E.solana.signMessage == "function"))
            b = E.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof p != "object" || !g?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        b = p;
      }
      const k = new URL((r = g?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in b && b.signIn) {
        const E = await b.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, g?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: k.host,
          uri: k.href
        }), d ? { statement: d } : null));
        let C;
        if (Array.isArray(E) && E[0] && typeof E[0] == "object")
          C = E[0];
        else if (E && typeof E == "object" && "signedMessage" in E && "signature" in E)
          C = E;
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
          `${k.host} wants you to sign in with your Solana account:`,
          b.publicKey.toBase58(),
          ...d ? ["", d, ""] : [""],
          "Version: 1",
          `URI: ${k.href}`,
          `Issued At: ${(i = (n = g?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((a = g?.signInWithSolana) === null || a === void 0) && a.notBefore ? [`Not Before: ${g.signInWithSolana.notBefore}`] : [],
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
        const E = await b.signMessage(new TextEncoder().encode(v), "utf8");
        if (!E || !(E instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        w = E;
      }
    }
    try {
      const { data: x, error: p } = await N(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: v, signature: tr(w) }, !((h = t.options) === null || h === void 0) && h.captchaToken ? { gotrue_meta_security: { captcha_token: (m = t.options) === null || m === void 0 ? void 0 : m.captchaToken } } : null),
        xform: Qe
      });
      if (p)
        throw p;
      if (!x || !x.session || !x.user) {
        const d = new wr();
        return this._returnResult({ data: { user: null, session: null }, error: d });
      }
      return x.session && (await this._saveSession(x.session), await this._notifyAllSubscribers("SIGNED_IN", x.session)), this._returnResult({ data: Object.assign({}, x), error: p });
    } catch (x) {
      if (P(x))
        return this._returnResult({ data: { user: null, session: null }, error: x });
      throw x;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await Ht(this.storage, `${this.storageKey}-code-verifier`), [n, i] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce")
        throw new t0();
      const { data: a, error: o } = await N(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: t,
          code_verifier: n
        },
        xform: Qe
      });
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!a || !a.session || !a.user) {
        const s = new wr();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: s
        });
      }
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", a.session)), this._returnResult({ data: Object.assign(Object.assign({}, a), { redirectType: i ?? null }), error: o });
    } catch (a) {
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(a))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      throw a;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(t) {
    try {
      const { options: r, provider: n, token: i, access_token: a, nonce: o } = t, s = await N(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: i,
          access_token: a,
          nonce: o,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: Qe
      }), { data: l, error: u } = s;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const c = new wr();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (r) {
      if (P(r))
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
    var r, n, i, a, o;
    try {
      if ("email" in t) {
        const { email: s, options: l } = t;
        let u = null, c = null;
        this.flowType === "pkce" && ([u, c] = await yr(this.storage, this.storageKey));
        const { error: f } = await N(this.fetch, "POST", `${this.url}/otp`, {
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
        const { phone: s, options: l } = t, { data: u, error: c } = await N(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: s,
            data: (i = l?.data) !== null && i !== void 0 ? i : {},
            create_user: (a = l?.shouldCreateUser) !== null && a !== void 0 ? a : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (o = l?.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: u?.message_id },
          error: c
        });
      }
      throw new Ni("You must provide either an email or phone number.");
    } catch (s) {
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(s))
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
      let i, a;
      "options" in t && (i = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo, a = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
      const { data: o, error: s } = await N(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: a } }),
        redirectTo: i,
        xform: Qe
      });
      if (s)
        throw s;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, u = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (P(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
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
    var r, n, i, a, o;
    try {
      let s = null, l = null;
      this.flowType === "pkce" && ([s, l] = await yr(this.storage, this.storageKey));
      const u = await N(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null), "domain" in t ? { domain: t.domain } : null), { redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((i = t?.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: s, code_challenge_method: l }),
        headers: this.headers,
        xform: C0
      });
      return !((a = u.data) === null || a === void 0) && a.url && ce() && !(!((o = t.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (s) {
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(s))
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
          throw new Te();
        const { error: i } = await N(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: i });
      });
    } catch (t) {
      if (P(t))
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
        const { email: n, type: i, options: a } = t, { error: o } = await N(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: n,
            type: i,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          redirectTo: a?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in t) {
        const { phone: n, type: i, options: a } = t, { data: o, error: s } = await N(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: n,
            type: i,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o?.message_id },
          error: s
        });
      }
      throw new Ni("You must provide either an email or phone number and a type");
    } catch (r) {
      if (P(r))
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
        const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await n, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
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
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
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
      const r = await Ht(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t)
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < wo : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at), !n) {
        if (this.userStorage) {
          const o = await Ht(this.userStorage, this.storageKey + "-user");
          o?.user ? t.user = o.user : t.user = ko();
        }
        if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          t.user = x0(t.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: t }, error: null };
      }
      const { data: i, error: a } = await this._callRefreshToken(t.refresh_token);
      return a ? this._returnResult({ data: { session: null }, error: a }) : this._returnResult({ data: { session: i }, error: null });
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
      return t ? await N(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: t,
        xform: Et
      }) : await this._useSession(async (r) => {
        var n, i, a;
        const { data: o, error: s } = r;
        if (s)
          throw s;
        return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Te() } : await N(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (a = (i = o.session) === null || i === void 0 ? void 0 : i.access_token) !== null && a !== void 0 ? a : void 0,
          xform: Et
        });
      });
    } catch (r) {
      if (P(r))
        return yo(r) && (await this._removeSession(), await ue(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
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
        const { data: i, error: a } = n;
        if (a)
          throw a;
        if (!i.session)
          throw new Te();
        const o = i.session;
        let s = null, l = null;
        this.flowType === "pkce" && t.email != null && ([s, l] = await yr(this.storage, this.storageKey));
        const { data: u, error: c } = await N(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), { code_challenge: s, code_challenge_method: l }),
          jwt: o.access_token,
          xform: Et
        });
        if (c)
          throw c;
        return o.user = u.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (n) {
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(n))
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
        throw new Te();
      const r = Date.now() / 1e3;
      let n = r, i = !0, a = null;
      const { payload: o } = ji(t.access_token);
      if (o.exp && (n = o.exp, i = n <= r), i) {
        const { data: s, error: l } = await this._callRefreshToken(t.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!s)
          return { data: { user: null, session: null }, error: null };
        a = s;
      } else {
        const { data: s, error: l } = await this._getUser(t.access_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        a = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: s.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n
        }, await this._saveSession(a), await this._notifyAllSubscribers("SIGNED_IN", a);
      }
      return this._returnResult({ data: { user: a.user, session: a }, error: null });
    } catch (r) {
      if (P(r))
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
          throw new Te();
        const { data: i, error: a } = await this._callRefreshToken(t.refresh_token);
        return a ? this._returnResult({ data: { user: null, session: null }, error: a }) : i ? this._returnResult({ data: { user: i.user, session: i }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(t, r) {
    try {
      if (!ce())
        throw new Ii("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new Ii(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Zu("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Ii("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
          throw new Zu("No code detected.");
        const { data: d, error: g } = await this._exchangeCodeForSession(t.code);
        if (g)
          throw g;
        const b = new URL(window.location.href);
        return b.searchParams.delete("code"), window.history.replaceState(window.history.state, "", b.toString()), { data: { session: d.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: i, access_token: a, refresh_token: o, expires_in: s, expires_at: l, token_type: u } = t;
      if (!a || !s || !o || !u)
        throw new Ii("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), f = parseInt(s);
      let h = c + f;
      l && (h = parseInt(l));
      const m = h - c;
      m * 1e3 <= Sr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${f}s`);
      const v = h - f;
      c - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, h, c) : c - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, h, c);
      const { data: w, error: x } = await this._getUser(a);
      if (x)
        throw x;
      const p = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: a,
        expires_in: f,
        expires_at: h,
        refresh_token: o,
        token_type: u,
        user: w.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: p, redirectType: t.type }, error: null });
    } catch (n) {
      if (P(n))
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
    const r = await Ht(this.storage, `${this.storageKey}-code-verifier`);
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
      const { data: i, error: a } = r;
      if (a && !yo(a))
        return this._returnResult({ error: a });
      const o = (n = i.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: s } = await this.admin.signOut(o, t);
        if (s && !($v(s) && (s.status === 404 || s.status === 401 || s.status === 403) || yo(s)))
          return this._returnResult({ error: s });
      }
      return t !== "others" && (await this._removeSession(), await ue(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(t) {
    const r = l0(), n = {
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
      var n, i;
      try {
        const { data: { session: a }, error: o } = r;
        if (o)
          throw o;
        await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", a)), this._debug("INITIAL_SESSION", "callback id", t, "session", a);
      } catch (a) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", a), console.error(a);
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
    let n = null, i = null;
    this.flowType === "pkce" && ([n, i] = await yr(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await N(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (a) {
      if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(a))
        return this._returnResult({ data: null, error: a });
      throw a;
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
      if (P(r))
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
      const { data: n, error: i } = await this._useSession(async (a) => {
        var o, s, l, u, c;
        const { data: f, error: h } = a;
        if (h)
          throw h;
        const m = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
          redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (s = t.options) === null || s === void 0 ? void 0 : s.scopes,
          queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await N(this.fetch, "GET", m, {
          headers: this.headers,
          jwt: (c = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (i)
        throw i;
      return ce() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n?.url), this._returnResult({
        data: { provider: t.provider, url: n?.url },
        error: null
      });
    } catch (n) {
      if (P(n))
        return this._returnResult({ data: { provider: t.provider, url: null }, error: n });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const { error: i, data: { session: a } } = r;
        if (i)
          throw i;
        const { options: o, provider: s, token: l, access_token: u, nonce: c } = t, f = await N(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (n = a?.access_token) !== null && n !== void 0 ? n : void 0,
          body: {
            provider: s,
            id_token: l,
            access_token: u,
            nonce: c,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Qe
        }), { data: h, error: m } = f;
        return m ? this._returnResult({ data: { user: null, session: null }, error: m }) : !h || !h.session || !h.user ? this._returnResult({
          data: { user: null, session: null },
          error: new wr()
        }) : (h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("USER_UPDATED", h.session)), this._returnResult({ data: h, error: m }));
      } catch (i) {
        if (await ue(this.storage, `${this.storageKey}-code-verifier`), P(i))
          return this._returnResult({ data: { user: null, session: null }, error: i });
        throw i;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: a, error: o } = r;
        if (o)
          throw o;
        return await N(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt: (i = (n = a.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (r) {
      if (P(r))
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
      return await h0(async (i) => (i > 0 && await d0(200 * Math.pow(2, i - 1)), this._debug(r, "refreshing attempt", i), await N(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: t },
        headers: this.headers,
        xform: Qe
      })), (i, a) => {
        const o = 200 * Math.pow(2, i);
        return a && bo(a) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - n < Sr;
      });
    } catch (n) {
      if (this._debug(r, "error", n), P(n))
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
    return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n), ce() && !r.skipBrowserRedirect && window.location.assign(n), { data: { provider: t, url: n }, error: null };
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
      const i = await Ht(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let o = await Ht(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: i.user }, await Er(this.userStorage, this.storageKey + "-user", o)), i.user = (t = o?.user) !== null && t !== void 0 ? t : ko();
      } else if (i && !i.user && !i.user) {
        const o = await Ht(this.storage, this.storageKey + "-user");
        o && o?.user ? (i.user = o.user, await ue(this.storage, this.storageKey + "-user"), await Er(this.storage, this.storageKey, i)) : i.user = ko();
      }
      if (this._debug(n, "session from storage", i), !this._isValidSession(i)) {
        this._debug(n, "session is not valid"), i !== null && await this._removeSession();
        return;
      }
      const a = ((r = i.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < wo;
      if (this._debug(n, `session has${a ? "" : " not"} expired with margin of ${wo}s`), a) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: o } = await this._callRefreshToken(i.refresh_token);
          o && (console.error(o), bo(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (i.user && i.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: s } = await this._getUser(i.access_token);
          !s && o?.user ? (i.user = o.user, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(n, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", i);
    } catch (i) {
      this._debug(n, "error", i), console.error(i);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t)
      throw new Te();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new Fa();
      const { data: a, error: o } = await this._refreshAccessToken(t);
      if (o)
        throw o;
      if (!a.session)
        throw new Te();
      await this._saveSession(a.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", a.session);
      const s = { data: a.session, error: null };
      return this.refreshingDeferred.resolve(s), s;
    } catch (a) {
      if (this._debug(i, "error", a), P(a)) {
        const o = { data: null, error: a };
        return bo(a) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o), o;
      }
      throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(a), a;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel && n && this.broadcastChannel.postMessage({ event: t, session: r });
      const a = [], o = Array.from(this.stateChangeEmitters.values()).map(async (s) => {
        try {
          await s.callback(t, r);
        } catch (l) {
          a.push(l);
        }
      });
      if (await Promise.all(o), a.length > 0) {
        for (let s = 0; s < a.length; s += 1)
          console.error(a[s]);
        throw a[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(t) {
    this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0, await ue(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, t), n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && r.user && await Er(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const i = Object.assign({}, r);
      delete i.user;
      const a = tc(i);
      await Er(this.storage, this.storageKey, a);
    } else {
      const i = tc(r);
      await Er(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await ue(this.storage, this.storageKey), await ue(this.storage, this.storageKey + "-code-verifier"), await ue(this.storage, this.storageKey + "-user"), this.userStorage && await ue(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      t && ce() && window?.removeEventListener && window.removeEventListener("visibilitychange", t);
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
    const t = setInterval(() => this._autoRefreshTokenTick(), Sr);
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
              const i = Math.floor((n.expires_at * 1e3 - t) / Sr);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${Sr}ms, refresh threshold is ${ks} ticks`), i <= ks && await this._callRefreshToken(n.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof Wh)
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
    if (this._debug("#_handleVisibilityChange()"), !ce() || !window?.addEventListener)
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
    const i = [`provider=${encodeURIComponent(r)}`];
    if (n?.redirectTo && i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && i.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
      const [a, o] = await yr(this.storage, this.storageKey), s = new URLSearchParams({
        code_challenge: `${encodeURIComponent(a)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      i.push(s.toString());
    }
    if (n?.queryParams) {
      const a = new URLSearchParams(n.queryParams);
      i.push(a.toString());
    }
    return n?.skipBrowserRedirect && i.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${t}?${i.join("&")}`;
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: i, error: a } = r;
        return a ? this._returnResult({ data: null, error: a }) : await N(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
          headers: this.headers,
          jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: a, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        const s = Object.assign({ friendly_name: t.friendlyName, factor_type: t.factorType }, t.factorType === "phone" ? { phone: t.phone } : t.factorType === "totp" ? { issuer: t.issuer } : {}), { data: l, error: u } = await N(this.fetch, "POST", `${this.url}/factors`, {
          body: s,
          headers: this.headers,
          jwt: (n = a?.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (t.factorType === "totp" && l.type === "totp" && (!((i = l?.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: a } = r;
          if (a)
            return this._returnResult({ data: null, error: a });
          const o = Object.assign({ challenge_id: t.challengeId }, "webauthn" in t ? {
            webauthn: Object.assign(Object.assign({}, t.webauthn), { credential_response: t.webauthn.type === "create" ? W0(t.webauthn.credential_response) : Q0(t.webauthn.credential_response) })
          } : { code: t.code }), { data: s, error: l } = await N(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + s.expires_in }, s)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s), this._returnResult({ data: s, error: l }));
        });
      } catch (r) {
        if (P(r))
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
          const { data: i, error: a } = r;
          if (a)
            return this._returnResult({ data: null, error: a });
          const o = await N(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
            body: t,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          if (o.error)
            return o;
          const { data: s } = o;
          if (s.type !== "webauthn")
            return { data: s, error: null };
          switch (s.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, s), { webauthn: Object.assign(Object.assign({}, s.webauthn), { credential_options: Object.assign(Object.assign({}, s.webauthn.credential_options), { publicKey: F0(s.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, s), { webauthn: Object.assign(Object.assign({}, s.webauthn), { credential_options: Object.assign(Object.assign({}, s.webauthn.credential_options), { publicKey: J0(s.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (P(r))
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
    const i = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const a of (t = r?.factors) !== null && t !== void 0 ? t : [])
      i.all.push(a), a.status === "verified" && i[a.factor_type].push(a);
    return {
      data: i,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(t) {
    var r, n, i, a;
    if (t)
      try {
        const { payload: m } = ji(t);
        let v = null;
        m.aal && (v = m.aal);
        let w = v;
        const { data: { user: x }, error: p } = await this.getUser(t);
        if (p)
          return this._returnResult({ data: null, error: p });
        ((n = (r = x?.factors) === null || r === void 0 ? void 0 : r.filter((b) => b.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (w = "aal2");
        const g = m.amr || [];
        return { data: { currentLevel: v, nextLevel: w, currentAuthenticationMethods: g }, error: null };
      } catch (m) {
        if (P(m))
          return this._returnResult({ data: null, error: m });
        throw m;
      }
    const { data: { session: o }, error: s } = await this.getSession();
    if (s)
      return this._returnResult({ data: null, error: s });
    if (!o)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = ji(o.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let c = u;
    ((a = (i = o.user.factors) === null || i === void 0 ? void 0 : i.filter((m) => m.status === "verified")) !== null && a !== void 0 ? a : []).length > 0 && (c = "aal2");
    const h = l.amr || [];
    return { data: { currentLevel: u, nextLevel: c, currentAuthenticationMethods: h }, error: null };
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
        const { data: { session: n }, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : n ? await N(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (a) => ({ data: a, error: null })
        }) : this._returnResult({ data: null, error: new Te() });
      });
    } catch (r) {
      if (P(r))
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
        const { data: { session: i }, error: a } = n;
        if (a)
          return this._returnResult({ data: null, error: a });
        if (!i)
          return this._returnResult({ data: null, error: new Te() });
        const o = await N(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "approve" },
          xform: (s) => ({ data: s, error: null })
        });
        return o.data && o.data.redirect_url && ce() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (P(n))
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
        const { data: { session: i }, error: a } = n;
        if (a)
          return this._returnResult({ data: null, error: a });
        if (!i)
          return this._returnResult({ data: null, error: new Te() });
        const o = await N(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "deny" },
          xform: (s) => ({ data: s, error: null })
        });
        return o.data && o.data.redirect_url && ce() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (P(n))
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
        return n ? this._returnResult({ data: null, error: n }) : r ? await N(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new Te() });
      });
    } catch (t) {
      if (P(t))
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
        const { data: { session: n }, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : n ? (await N(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          query: { client_id: t.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new Te() });
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((s) => s.kid === t);
    if (n)
      return n;
    const i = Date.now();
    if (n = this.jwks.keys.find((s) => s.kid === t), n && this.jwks_cached_at + Xv > i)
      return n;
    const { data: a, error: o } = await N(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !a.keys || a.keys.length === 0 || (this.jwks = a, this.jwks_cached_at = i, n = a.keys.find((s) => s.kid === t), !n) ? null : n;
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
        const { data: m, error: v } = await this.getSession();
        if (v || !m.session)
          return this._returnResult({ data: null, error: v });
        n = m.session.access_token;
      }
      const { header: i, payload: a, signature: o, raw: { header: s, payload: l } } = ji(n);
      r?.allowExpired || y0(a.exp);
      const u = !i.alg || i.alg.startsWith("HS") || !i.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(i.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!u) {
        const { error: m } = await this.getUser(n);
        if (m)
          throw m;
        return {
          data: {
            claims: a,
            header: i,
            signature: o
          },
          error: null
        };
      }
      const c = b0(i.alg), f = await crypto.subtle.importKey("jwk", u, c, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(c, f, o, o0(`${s}.${l}`)))
        throw new Ss("Invalid JWT signature");
      return {
        data: {
          claims: a,
          header: i,
          signature: o
        },
        error: null
      };
    } catch (n) {
      if (P(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
ti.nextInstanceID = {};
const _0 = ti, $0 = "2.95.3";
let bn = "";
typeof Deno < "u" ? bn = "deno" : typeof document < "u" ? bn = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? bn = "react-native" : bn = "node";
const ew = { "X-Client-Info": `supabase-js-${bn}/${$0}` }, tw = { headers: ew }, rw = { schema: "public" }, nw = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, iw = {};
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function aw(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ow(e) {
  var t = aw(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function sw(e, t, r) {
  return (t = ow(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function lc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lc(Object(r), !0).forEach(function(n) {
      sw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const lw = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), uw = () => Headers, cw = (e, t, r) => {
  const n = lw(r), i = uw();
  return async (a, o) => {
    var s;
    const l = (s = await t()) !== null && s !== void 0 ? s : e;
    let u = new i(o?.headers);
    return u.has("apikey") || u.set("apikey", e), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), n(a, _(_({}, o), {}, { headers: u }));
  };
};
function dw(e) {
  return e.endsWith("/") ? e : e + "/";
}
function hw(e, t) {
  var r, n;
  const { db: i, auth: a, realtime: o, global: s } = e, { db: l, auth: u, realtime: c, global: f } = t, h = {
    db: _(_({}, l), i),
    auth: _(_({}, u), a),
    realtime: _(_({}, c), o),
    storage: {},
    global: _(_(_({}, f), s), {}, { headers: _(_({}, (r = f?.headers) !== null && r !== void 0 ? r : {}), (n = s?.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: async () => ""
  };
  return e.accessToken ? h.accessToken = e.accessToken : delete h.accessToken, h;
}
function fw(e) {
  const t = e?.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(dw(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var pw = class extends _0 {
  constructor(e) {
    super(e);
  }
}, gw = class {
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
    var n, i;
    this.supabaseUrl = e, this.supabaseKey = t;
    const a = fw(e);
    if (!t) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", a), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", a), this.storageUrl = new URL("storage/v1", a), this.functionsUrl = new URL("functions/v1", a);
    const o = `sb-${a.hostname.split(".")[0]}-auth-token`, s = {
      db: rw,
      realtime: iw,
      auth: _(_({}, nw), {}, { storageKey: o }),
      global: tw
    }, l = hw(r ?? {}, s);
    if (this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = l.global.headers) !== null && i !== void 0 ? i : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (c, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      } });
    else {
      var u;
      this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch);
    }
    this.fetch = cw(t, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(_({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((c) => this.realtime.setAuth(c)).catch((c) => console.warn("Failed to set initial Realtime auth token:", c)), this.rest = new $m(new URL("rest/v1", a).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new Yv(this.storageUrl.href, this.headers, this.fetch, r?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new Hm(this.functionsUrl.href, {
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
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, userStorage: i, storageKey: a, flowType: o, lock: s, debug: l, throwOnError: u }, c, f) {
    const h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new pw({
      url: this.authUrl.href,
      headers: _(_({}, h), c),
      storageKey: a,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      userStorage: i,
      flowType: o,
      lock: s,
      debug: l,
      throwOnError: u,
      fetch: f,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((m) => m.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(e) {
    return new mv(this.realtimeUrl.href, _(_({}, e), {}, { params: _(_({}, { apikey: this.supabaseKey }), e?.params) }));
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
const Hh = (e, t, r) => new gw(e, t, r);
function mw() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
mw() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
async function vw(e) {
  const t = e.projectKey.trim();
  if (!t) throw new Error("XOOS projectKey is required.");
  const r = await e.bridge.getProjectConfig(t);
  if (r.provider !== "supabase")
    throw new Error(`Unsupported XOOS data provider '${r.provider}'.`);
  const n = Hh(r.supabaseUrl, r.publishableKey, {
    accessToken: async () => e.bridge.getAccessToken(t),
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
    }
  });
  return { projectKey: t, config: r, supabase: n };
}
async function ww(e) {
  return (await vw(e)).supabase;
}
const Yh = "https://tafhttyrrxmizdcffywx.supabase.co".trim() || "", Vh = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZmh0dHlycnhtaXpkY2ZmeXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTYwNTgsImV4cCI6MjA4MzYzMjA1OH0.g5p9I9ztmH_kuCU3FwXJL-SNqkm95wjeV5Y7BpehRsw".trim() || "";
(!Yh || !Vh) && console.warn(
  "Standalone preview Supabase configuration is missing. XOOS runtime hosting does not use these values."
);
const uc = Hh(
  Yh || "https://example.invalid",
  Vh || "preview-not-configured",
  {
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
    }
  }
), qh = F.createContext(null);
function yw({
  bridge: e,
  props: t = {},
  children: r
}) {
  return /* @__PURE__ */ y.jsx(qh.Provider, { value: { bridge: e, props: t }, children: r });
}
function Gh() {
  return F.useContext(qh);
}
function bw() {
  const e = Gh();
  return F.useMemo(() => {
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
      isRuntimeHosted: !1
    };
  }, [e]);
}
async function kw(e, t, r = {}) {
  if (!e)
    throw new Error("XOOS Runtime navigation is unavailable in standalone preview mode.");
  const n = e.navigation;
  if (typeof n.openMicroapp == "function") {
    await n.openMicroapp({ microappKey: t, props: r });
    return;
  }
  if (typeof n.navigate == "function") {
    await n.navigate(t, r);
    return;
  }
  throw new Error("XOOS Runtime navigation API is unavailable.");
}
const cc = /* @__PURE__ */ new WeakMap();
function xw(e) {
  const t = typeof e.datasourceKey == "string" ? e.datasourceKey.trim() : typeof e.datasource_key == "string" ? e.datasource_key.trim() : "";
  if (t) return t;
  throw new Error(
    "BLOCKED_DATASOURCE_MAPPING: XOOS datasourceKey was not supplied by the runtime/control-plane mapping."
  );
}
async function Aw(e, t) {
  const r = xw(t);
  let n = cc.get(e);
  n || (n = /* @__PURE__ */ new Map(), cc.set(e, n));
  let i = n.get(r);
  return i || (i = ww({
    projectKey: r,
    bridge: e.data
  }), n.set(r, i)), i;
}
function Sw() {
  const e = Gh(), [t, r] = F.useState(
    e ? null : uc
  ), [n, i] = F.useState(null);
  return F.useEffect(() => {
    let a = !1;
    return i(null), e ? (r(null), Aw(e.bridge, e.props).then((o) => {
      a || r(o);
    }).catch((o) => {
      a || i(o instanceof Error ? o : new Error(String(o)));
    }), () => {
      a = !0;
    }) : (r(uc), () => {
      a = !0;
    });
  }, [e]), { client: t, error: n, isReady: !!t };
}
function Ew() {
  const e = bw();
  return {
    tenantId: e.tenantId || null,
    userId: e.userId || null,
    email: e.email || null,
    isAuthenticated: !!(e.userId && e.tenantId),
    isLoading: !1,
    bridge: e.bridge
  };
}
function Cw(e) {
  const { client: t, error: r } = Sw(), [n, i] = F.useState([]), [a, o] = F.useState(!0), [s, l] = F.useState(null), u = F.useCallback(async () => {
    if (!e || !t) {
      o(!1);
      return;
    }
    o(!0), l(null);
    try {
      const { data: c, error: f } = await t.from("approval_templates").select("*").eq("tenant_id", e);
      if (f) throw f;
      if (!c || c.length === 0) {
        i([]), o(!1);
        return;
      }
      const h = c.map((k) => k.template_id), { data: m, error: v } = await t.from("approval_template_versions").select("*").in("template_id", h).order("version_number", { ascending: !1 });
      if (v) throw v;
      const w = /* @__PURE__ */ new Map();
      for (const k of m || [])
        w.has(k.template_id) || w.set(k.template_id, {
          version_number: k.version_number,
          status: k.status
        });
      const x = [...new Set(c.map((k) => k.created_by))], { data: p, error: d } = await t.from("organization_members").select("user_id, full_name, email").in("user_id", x);
      if (d) throw d;
      const g = /* @__PURE__ */ new Map();
      for (const k of p || [])
        k.user_id && g.set(k.user_id, { full_name: k.full_name, email: k.email });
      const b = c.map((k) => {
        const E = w.get(k.template_id), C = g.get(k.created_by);
        return {
          template_id: k.template_id,
          approval_template_name: k.approval_template_name,
          approval_type: k.approval_type,
          description: k.description,
          created_by: k.created_by,
          created_at: k.created_at,
          updated_at: k.updated_at,
          tenant_id: k.tenant_id,
          version_number: E?.version_number ?? null,
          version_status: E?.status ?? null,
          creator_name: C?.full_name ?? null,
          creator_email: C?.email ?? null
        };
      });
      i(b);
    } catch (c) {
      console.error("Failed to fetch approval templates:", c), l(c.message || "Failed to fetch data");
    } finally {
      o(!1);
    }
  }, [t, e]);
  return F.useEffect(() => {
    if (r) {
      l(r.message), o(!1);
      return;
    }
    u();
  }, [r, u]), { data: n, isLoading: a, error: s, refetch: u };
}
const Ow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApoAAAF3CAYAAAAFPus+AAAAAXNSR0IArs4c6QAAIABJREFUeF7svQmAHUW1Pn6qer3bzGQPAURU3KLiElHALciOij59oOIC6gM3BEQEFEwQEBABURbDoiAoyhMUEAQFo4DK84GiCKioKHsgyWx36a2q/v/vVPfMTcT3Hj8dSGbqaphk5k7f7q+rur76zjnfEeReDgGHgEPAIeAQcAg4BBwCDoEpQEBMwTHdIR0CDgGHgEPAIeAQcAg4BBwC5IimGwQOAYeAQ8Ah4BBwCDgEHAJTgoAjmlMCqzuoQ8Ah4BBwCDgEHAIOAYeAI5puDDgEHAIOAYeAQ8Ah4BBwCEwJAo5oTgms7qAOAYeAQ8Ah4BBwCDgEHAKOaLox4BBwCDgEHAIOAYeAQ8AhMCUIOKI5JbC6gzoEHAIOAYeAQ8Ah4BBwCDii6caAQ8Ah4BBwCDgEHAIOAYfAlCDgiOaUwOoO6hBwCDgEHAIOAYeAQ8Ah4IimGwMOAYeAQ8Ah4BBwCDgEHAJTgoAjmlMCqzuoQ8Ah4BBwCDgEHAIOAYeAI5puDDgEHAIOAYeAQ8Ah4BBwCEwJAo5oTgms7qAOAYeAQ8Ah4BBwCDgEHAKOaLox4BBwCDgEHAIOAYeAQ8AhMCUIOKI5JbC6gzoEHAIOAYeAQ8Ah4BBwCDii6caAQ8Ah4BBwCDgEHAIOAYfAlCDgiOaUwOoO6hBwCDgEHAIOAYeAQ8Ah4IimGwMOAYeAQ8Ah4BBwCDgEHAJTgoAjmlMCqzuoQ8Ah4BBwCDgEHAIOAYeAI5puDDgEHAIOAYeAQ8Ah4BBwCEwJAo5oTgms7qAOAYeAQ8Ah4BBwCDgEHAKOaLox4BBwCDgEHAIOAYeAQ8AhMCUIOKI5JbC6gzoEHAIOAYeAQ8Ah4BBwCDii6caAQ8Ah4BBwCDgEHAIOAYfAlCDgiOaUwOoO6hBwCDgEHAIOAYeAQ8Ah4IimGwMOAYeAQ8Ah4BBwCDgEHAJTgoAjmlMCqzuoQ8Ah4BBwCDgEHAIOAYeAI5puDDgEHAIOAYeAQ8Ah4BBwCEwJAo5oTgms7qAOAYeAQ8Ah4BBwCDgEHAKOaLox4BBwCDgEHAIOAYeAQ8AhMCUIOKI5JbC6gzoEHAIOAYeAQ8Ah4BBwCDii6caAQ8Ah4BBwCDgEHAIOAYfAlCDgiOaUwOoO6hBwCDgEHAIOAYeAQ8Ah4IimGwMOAYeAQ8Ah4BBwCDgEHAJTgoAjmlMCqzuoQ8Ah4BBwCDgEHAIOAYeAI5puDDgEHAIOAYeAQ8Ah4BBwCEwJAo5oTgms7qAOAYeAQ8Ah4BBwCDgEHAKOaLox4BBwCDgEHAIOAYeAQ8AhMCUIOKI5JbC6gzoEHAIOAYeAQ8Ah4BBwCDii6caAQ8Ah4BBwCDgEHAIOAYfAlCDgiOaUwOoO6hBwCDgEHAIOAYeAQ8Ah4IimGwMOAYeAQ8Ah4BBwCDgEHAJTgoAjmlMCqzuoQ8Ah4BBwCDgEHAIOAYeAI5puDDgEHAIOAYeAQ8Ah4BBwCEwJAo5oTgms7qAOAYeAQ8Ah4BBwCDgEHAKOaLox4BBwCDgEHAIOAYeAQ8AhMCUIOKI5JbC6gzoEHAIOAYeAQ8Ah4BBwCDii6caAQ8Ah4BBwCDgEHAIOAYfAlCDgiOaUwOoO6hBwCDgEZg4C11xzzcAvbv/F83xfbBaEwdxeLwvieiw0aVloYdcZD/+RpC0smrQoAs/+Uxi8R5MniRS/VfJXY4wgqYiMlxlTKImDeERSGKGNMEYbIaQw9pD4Df4dI4Thz/Q8TxvSOYnqY/kkJl9KkcIhFf3dV3vOHh/W4ARN9Tn9v7/u8ewZKPLII0WKAl8KfE/60g8i6eNwhSo8pXN7uoWnjRbGSCMkyRj/YHD44smXRJTkuck7SVJr1P62/QtefPuOO+65auaMLHel0wEBRzSnw12chtdw2cqLN7v+putf43lyjh96gQg8Q6R9Y6TAYiXJeMpITxjPqFwYrYzRSgiTCKGNMZ4oFwWJhacwWM2MkML3hYclQwthPCmJtCaBxSyXVBiFNYoXLanxiCfCWyZfmlS5gPHPhBB4H9Y7LG20znvtb2mt11mkhLCLLt6Khcuei10Zy48kLJxS4hqJQunzcXzPMykW4iAQfj0WMvZpYHZT1WfXVNiQeeh7WgjlS8+XSihpiszixNdfrsC8gGv+cCmAGvmhlGlnOHlw3tDc3w49d+EDS8XSYhoOJ3dJU4TAz37zs/nf/MbFu/3kpytfNzo2+vw8LeZ5od/yPM8f67QpiiLMR8H0CVMXg4+ngDTGKKZTWmgmZvxVMCMU+Io5oZQSJDSRkYWRRuN9JA1JEoSJagLmf2CbzF1LSovJxVdsDE99Vb59HRRw2Io6Sm1ICSI8ZQoyJE05/3E+xuA4fO4eCVJk+Pc0GSq0/f7Ey0i+DvvwEEyIZehRFAVeGHuYnpTrXGZZQjrXJHPPSOXhNHFBQUWuRfkYUoUWQRDowPfzXq+3+mmbbHrXdq/c7uo9937nFbsu3m7tFN1Wd1iHwL8UAUc0/6VwuoP9MwiAbu16wK4LY4/2uH/VfXsPj699vvRN5Ie+kAE/wKVWCtyQlQ6jpTBFZIpcUt4rKMs06UwTGJvAqgFiFQgyRrFOAIrp+YEQPv4CIidI5wUZkEFlSaFmKQGEzBK8yZddPEq9YeLbvPBNfB8ixLov3+fj4GQMOCZOg9cgLFR2rbT/AdH0BeE9IJme55En7MKG7wV+QPi5V4uo1mpSfWiABjcZMvO2HDLRYGBqkW8EZCAcGEhpXZJMgw9k/iyNISEN+Z4hKYX2tJGeIq1y1fOkf18tbN44vzHvov944Ufu/mfuo/vd6Y/ASrPSP2OfM17/5/vuee8jjz681JCe3Wg0gizLRFYUFAQBSd+jPM95zkBfxMgEIcRekXmVIMrBAytixj/n/RE2YfxVKzPBBnn+gIBKYQmf1JQrRcYTJHAcS+zs55Dh4/vS468ghut/xV3y8U7Mi/LnpCtSObk04uel0DhBKfE9DdW15JTltCbsWfkccR1CgzGT8Ij8SFJUD/irEZrSNKEsychLA5JK8jnwMcuPFeV5COFRkiR8HXiWRH6gSJvH5s9feOXCeQsvuP78q24R1aZ6+g87d4UbKQKOaG6kN246nTZI4y7v2WXew48+uN+Dj923f9wKF1Co4qDueTIwJCNJ0mfCSJkqSDHZ1ERFQFTUqUgEpd2C8lyTyH0SwidhpF20oDsYBVWRhC8oiELyArvYMUFMFRkFgkl83GrNw8LDpK9kjtUCwJywX8CwvLH8rIqI9tFTHLh89R+vFDZ58WBOjMVXChIVyQTRhBypQBgl+VHI75O1gOJmg1pzZtHsp82h2Vu0qDYUUhR79jqr6zXKLnggmFh8eTEtmHyGgUdCahJaka+JojigXpprqUQmezQ2oFpfmy8XnrX/qw663y1i02mm/fPXYozx99jrzc+7867bT1OmeBl5phGEnt/r9USWZVSrRRMEE3HwAnOVqV8ZMpdlrBwETxgqSmLYf2b9CqdVCyfnEL8PhBLzThomcZg3komlIE9YsuZhJoDcFoq/4tP5q8aG1W70+l/8pOA5Yknf5KsigfY7lQJavQfTG7QXn2C/1/c8wPMjwPkpEqGgsOZR1AQ+hrpZh5KxhLw0JKk8UhOq6brnBWUX8x88GpvPPMswrw1pk0ci7HqZ+M7LX/bKY64597IH3Vz958e3O8LUIOCI5tTg6o76f0TgoYceqr/vmI9te/2Prjl1cG7zhanpiMasiOqtkDrZKAV1n2TEKwdpXVCh85JoYhEJSKYNUj1BSZKTShFlg6wXkCgVSSh4HD2ThgmmH/kkQpAyY8kqyKkWfMxK1cRigxdUk/5Fxy5gYjI0Zle9CaXEhgZL5ab8iqQsXmYnYnqWlFYKCn8uZ7J5lvyWCwurmlJS6IE4CyaaBchhFFDYrNPA3Nk0d4s5NPfpQ1SbFVIY+lh77KIsLLnmBUppJsYglYigI+krCK3yAzyVKigIPcryLgXSo0iHFPS8wqwSP37Bplt/8nkvWXLXErEEB3avGY7APWvuGfjw+z+8322333rIrLmznjY8Oixq9YDa7TGq15vUbNap1+vxXJKBT7kqeOyCwFWxa4Nx3jdvQCptNiXL7utTSh7Ddk6V+Zd9mzrMbcUbKjOxqeQNHJTEcpMpOfVkPaJafn71mf23tVIuOQTBmzS/VBvXWypLxRHc0obZLdHE84fFWImNLpFG9MA3JCJDfk1S3Ir47720S+2xDvlpRFL5NppSEuDqK45XFJrV4aIoWNWEQtxoNJgoByIgkSnVGevcuPSVr/7k6V85/Xdbii2TGT5M3eVvgAg4orkB3pSZcEoIvY38uLfFxVd+e48rrv3+hxoDtWdHdU8qLyWvZiisaeoVHYoHIoS8yWBRUTkpA/VRk1KGRO6Rl9ao6BGlnYxUJkmYgDwTME3Eg9rzkFOFEJYmP/QoqPl4QpfHUCQLJPsb4pA8kv4Rci6JJudh9SmSIJITITYb7eZQGZaxMrfMLoqsoNjQYH/IrlIxWdkslz8omiCaxvMnVc0qfE5WzaiIpvaJRBxQ1GrQ4Lw5NG+L+dScX6PaUExh5JNSKSs6vMbyYmtKoskXwos1Ul3D0GOimZmUTAitJ6fQA+HOKev0aCAeID+Nk2wV3bxkq+2//KItX/rjxWJxeyaMS3eNj4/A3Q/cPefoTx39gV/+6hcHFkIvylQmolpIRZ5SEGDsaSqK3KZ8YHPFpNFSSh55ZU4jws28IYNyaHM6JsLF6yqJ9jygWFaEsPp5FULH+JaejVrY75VKJIclOCubQ/V/n9DCR+bj2uztyc/AefW/kBpT5Wf2nx/mPcLskr+W18OKKFcqWYLMhU2KN8oyNCRjorDlkR9LSlSXeu2EqOtPEk3O/YQ2W+balES3egZh04l5bZ9/ip8xPiTT3OSRDH+z9FU7nHzoQQd/f8miJV03jh0CGxICjmhuSHdjBp3LYZ8/aqvzLvjq8syTbwha8YCilIzISIQFhQ2EtlOKB3xbDurZsDlIJiuApQKJAh6ZhKS7RGk3J1145JmQPBGiSrVcIDSCZiQCQ37sUVgLmWgyaVWGJOLRIJgKRFaRKOziV61+UDCrF+d59imTlRLTf9tYwSnLA/oJKBf/lL/bfwxeED3JIXONRROJllAzhSWY1R8ZBUgoIxMHFA80aXDeLCaaQ5sNUW0wYNXDqJRx4o+BPIvrLgkxL7Y6Iz8QFAZ2UU51RnkoSJmMfAOyqUgVKZnCUBwMkMxikzxMd7/i2dsdvc0ztvn+YrE4m0FD1F1qicDdd989Z/nJy//jJzf/5KN+7G2aqYxEOYZUllMcR2V+s1XfWJ3LC1Y1QTKrohn793WJ5uTksjmV6+dSsiqP8huootg4lvmP/BXRCiaXkwomVE77skSzUkQncmLWI5JVlHzyc/siFKxqlqFwPHNA/PjIkqocSi5LRF4mCCLn15RzFuXzyDFFgVMsSQSadFRQWPcoaEhSIqOsm1M+hmeQZzGzoi2K98rXZBg/8qFqZhPqJnBmuiwEZUlOIflGpPK/dnv9Hh+/8HPnu7xNN3s3KAQc0dygbsfMOJlf3/vrodftusunw0b84dSnOkLC5CvyIyIZKvJC/B1fJSFHk0NQGopJQRpVnqjsLGBaYlgRUAlRniC/MiBpQhKcXG+HNqc5QgXwFEW1gKJmzOEsPLTxkFaZJZu6sCS2IppYOLBmVWF0m+BfLmETs8aqIesSR5tD9ncLZh9hrX5n4ve4kL5cgCHheJL8kmiyookq2zCwRLTmUzzUYqI59+nzaXDTBhNyKKNaZZNhc2ND5qysgnRC4TSapAfPFPvV+ESIs+GjA4TddcJ5nFgvGeYipKCo66Bb//lWg8/89EdeeNDPhGC3FveaIQggteXAww9+z40/+/Gn4ma8eWYyTkOBCo8XNmKW21l2NLGZKr9jtztIKUTKCeaiVezWqdQucx/xvv55U6WiVEolNpoYmFUhX4GhiGK/ckhakjlJOvl8HscJwpI5+1lemXyNKAaSS8oivYmoxiTRtASUi4X4gWSJsaqeM5zbaaueUMDDPk3AyRckIxs652dbTZCsYW9bkMkVqVFNJivTePDMwUYVG98y37Pa6NqUgHUxxnmkeUKNRovydkYyl0k2kl2562t2OuqyFZfdM0OGqLvMjQABRzQ3gps0nU7x3w/599oDf1116l1/+MNeOhSzdeyR8pFPaMiLQDA1eb4mP9bkhYJ832OSpAqQQ5jdIbztWWKYSdIpkeoZgpsPCKakiNVM5F1WeYpKKrj5UdQIKW7VWAnJirQkmtZ+D4omV6ArFAxMKpoTYfQ+JbMqDLJVtDYnrP/Vn4PJjK0kntXC2U80q6IjwwvTpKJZhcy5IAih9MgjBaJZ9ykabNHg/Fk0H6HzTWsUD9iKVKWt4CigahpYxdjzmySaiiQiex6KgmxCWIbwo5QUmIKELkgSiCY0YKQTSMp6RPMaC4vRP4/91zNazznuyKVHXjudxqO7ln+MAIr0/u2d/7b9LbfecnZm0sX1Zl2kqseFeRghPEYxX0qiyeN+vcNVUwnV2UzMhC3GqULn1dsfL2zeP084j7lMY6lUfh6nKLaZIGAl0exTNfsJWv+p9RNN++t/XwTEnz8x2ctc0VJtrM4XRBMOmFURkQH1Bg4wzORESkki0hw6B9n0YkNeDeesSeF509ZckFjkyGK1uEx8JraJVTbAejnelqvblKIsKyiggHzlk0y8JB/LTrn7hjs+t2jRIhdCdxN8g0DAEc0N4jbMnJPYesdX7PfXB+89k2KvFg3E1Mk7pP2CPN+QFxKrmUGkWd2EM5CHanMNxdEmxuscISrJ4V1VeEyE8oxYmbSFQKFVI9g+xaobmldDxRWftYE6aakpLVKrqjDJJCauXKFaGFY18fulQDKh1Py9olkVIax7/zgHs+SqHGJDzhYLsZMVqRNhca6Ix8KE/CuEA+F9af9wbiYvzFigfCaash5QBEVz/iyau8V8ai2KKWpZOyQUA9kFlL1BmWiWzLMM+KE4wxJNFFeh8hwYWTEVvtiwQrKqDkBhiyQvpJE1HYqKutIj8s7nzX7+HocvPfyBmTNiZ+6VGmOCuVvOulpL2qE12PIKY4vxUDyW5ikXp0AR5Arw8tUvINrtF3KADRXsmG5D55zWWOYw81Bbp8rbHkiXZLE/faSfaDIn49xmW9VtSWml+CEUYXOU/6cXF/tUfrnlG6tioEpxnVA0y8lf/Xyi6ry89onvC5trDTKOCYgCRAoMUYiNMwqCBHkxsECaSkaUYcOsKEs5Z6ckmhY3VLMjZ7zauP5d5IQ01Rp1Gh4epkbYJNXVpHuG0rXpvS945otf9esf/eyhmTt63ZVvSAg4orkh3Y1pfi677bPPwHU/vfym5tzBF8UDDVo9+hhFrYDIy0kGgoIQBNOUX0EyraUHQtoqh+Io0EmDNIhnLkgVPvV6hnJ4k3NdtCQP8WAOe3OpdanOFVwMFLfqVB+scQgaISebayUs0cxBMhWZHISTSECC0XjUTy6d/UpmdavWD831L7oT7ylzLe3iWHK/Kv+y9P9DbqatOrckE0omE1bkqEF1jDzSviRRDygeatDg/LmsaLYW1Sho4H1IL4AqgqIeLFgohEIlRbncs1+h4jA88l7xVchiUt1EbhlIgwaG1vqI0xWYcApK2opqpqW6D6TXbtXc6ohlb1n2ByGEq0afpnP2Hfu/Y+6Prr/uy1E93stArvOIckQBPKIwDCnPMx5f4Hj9fK4/F5kJY0k0ofytSzix47EV6RPzaiI0PbmB6yeabJS+zsaNS77LiIL9HSaXfVXnk6H0yRv1d0U9/fdwwsesVDAn/j2Zq8m52mzUPmmgC0LKpJlTXWDH5rGaiVod/AHZBNEMYg9dEkhRRnne40MgJajIFH8lbJY5jxTz0aqsfCZQOjFnuYgKG0lcmaJuu0Pz5i2g0eE2Nf06USqJEqHqFL35vl/+5fvTdHi6y9rIEHBEcyO7YRvz6b7u33c66Ld/vOv4aKjRWDWymhpDdcp1h0PleBizkhkShQgvhVDabFgXSmYBM3YFBdInVUDRhMoZULdjqMiFVSENchuhAtiqbiw6TJTAQgNiNbMx2LC5iZBBkevJfUNgc2RI5SCaxYSqaR/yVYu5yalS6SRcXc7fngydV0SzoqeVMlm9o59o9hNR9tG0cqPN0SxDcKiqZbuTQJLyJXnNkOJZKAaaQwueNp+GFtbIr1vzeU4VQFCTux1Zks6vykdzgmhC2QTRzMgLEEYv61w1KvBhDAXJCfmwBUHFAg5ZSpS3NZlhWQzfO3LbK5/+8mXHvPP4613O5sY8Ix//3G+99dbBDxz6/s8/svqR92qhI21ggRUy0cFmrFLWeGxX4ewyjaSKWle5lpVyyVsgNOCaqD5Hhosd2yCbFWerIgEli1u3gA6TrcyNrFJOJpXLkmiul6c5WRxUXav9rEpE5a4/PIftjOXzLrsAcXh/ouKvStAu319GPJDfPXGtOD3psZrpBdglo/WkYA9NWBxJeGmGknPPlcqom3f4Z8jXVHi+FYV9rnHHIrtZxqkwkS+JJr6HlIHJYiQ86wLuMoTNuOoqqss6+Zk49dFfP3zo9Bud7oo2RgQc0dwY79pGeM5X/3LlwoMPO/CS4d7Ya8byHrquUdCAsXpBfqApCEGmDOdo9hNNPPTzHDlMSJJHklfARFOxuulTbxwhdElSIz/MErQq/wqhYWUKUpSTKIlmc1aLkA+ZFTkn/xNEBLBAPKTxoM+ssmlXRIS8K8poDdVx7ImAHJTGvl5ArECW96ZSeUD2qkKifp/AarHmSlsmmLYgiDseQxFB9XnpxwflAlXnsDeSjZDqsweoNX8OLdhiHg3NrzM5t36hNmzORJPbVoZ20ZzIIQW55CRU/mqJZsaFQez/h0IG4Ih0AxBNFH6g5lcpSjoFeUVI+VpDw/ePpKv/tvbq3V6+2zHHv+f43wmxXpLqRjg+3SlbBO68887mESccsc9v7rx9WWGKTTB/MH6gYuKVJSkXAHFOMIrnyhWk8ollgbHPJ7afaCqteVohjM78DYpm2TFonfD5ep2CMD0rZdPOP+S7SN6TVYplv2E78hZ5w8W2Y1YxnSzysf/GR/z9Z1d5mOx8W3Jda1002fmnIqo2HWYdoon+ldIvyaX9WoXPPSiboaAYBNS3nYHa2SiJ2G6yef4V9lmHfHE0Xi/7dpY2ShUGIJ92juNPAIcNkjQ+Mk4DzSEyKQIWkjqPdX6e/HFsezeuHQIbAgKOaG4Id2EGnMN7D/nA+3/wkx8eP5q2F4RDDUp0xnmHnlFsIM5Es6w2DyPBYSYtoKppQscRtJk02iehfP470puQr6na8IqEF531zPNLWyNrMqTIgGyiwtPXrGbWZw2yNUuKUDm6iSC9C52BkPOJ5Hy0sERifmlzxD/nha5SNtdVYLCQ8WJXdRJaj2hWimYljMAipSKe/BXklSu/kSgJs2dLTDl8XvpowotPwJAda1QrotrsARpYMJvmbz6XBufH5AW2abNVYK1HKBZB3w/68t+AZ0UwkZtZcOg8CBRhPeT6jLItIN6nhKLC5JwjO7ZmlObW51BvbUp63KO1D43Tow+PdUbvHb36LS/fc8V+n3j3zc76aOOfxLAxOvzYw9960y03fsSv+YuNZzz40CI9BGFdmP/70rfG/jJkj8gCGxKJXuVW2eu3A2MayN0CoNrBs5IoV4ZybipgN1cY67zhK1+8WeqLxTOxLDdjnEbCHXRwNGzIShcyLrazRXfwh+WOQWVKig3YT7akXMcNopQ1J0luX9SCQ+brFubgFCvbTT5PrsexhBR7YBBcAYP4AMV7aMEpOdUA0YggwDPNoxAhddLUSzrU7o0QxSkFNUmBj1J0Q3lqIypUWH9Oq2paJdeSbfv7VYMJJKkWaUHN5gB12wmp1FAsIsrG0r8dduipz12+337OwH3jn5ob/RU4ornR38IN/wIuvfTScNlZx5/+0PBj76NYhgkIJO/+4dcoKUDu0oSiaSiEFUiA56xtN5nmCC2hKChgsqkQxk0Q3ZVkulA2ra8dAshVNx87sK2CV4BUeUTxYEyt2QNEoU8pejCjOAEP9YposqJpw+goDoKiYEOFVd5UqYJUCxTbpzw+0bTktM/mqJR+JoLs5SKLxclWm4N04uyt4TP3Oa9yNLGowVgdimYrptrsFhPNBcjRnBOtQzQ5d2uCaKKricWBuwXxuULJxB+cCdRk9IO2BBXV6hzK9KAZIeGgYILhQWHpGqKepGREUTKm6cG/rqaxhzqJWEW/3PFlOxxwzgln/H7DH4nuDP8RAsYYucdee+x88y9u+kJjqPEc48OY0W70wiigIst581MPYsrTjEO1aBKQ62Kin2M/0ZwsXLFV5qBlGVrIasOZKprlervR4hFqvYPWOz10uLI+nBifnPeI34dDAs896z1rP8s+TyqiaedfVbI9mfNZkcoJLlvmWvbXI1lyZwtzJkPnVc6mPcVJcmq/b3mpJZqYqzKyiiaKlfxAUhh5FAQeBZ49dq8zTmPdYTJBj+JmRHEc82flaU4qty1xWdHk1GpLOm3ExG54OW9dGfIpYhWUG2EKn4pEk6886qztrH3p4iVb/9flP3GFe27aP+UIOKL5lN+C6X8Cy1ac+LTTzjpjBUW0S+EpAQLjRT4Zyiguw+asasYeRXWUQyOsnfHChpZrUEFALlFlDq9MrTzKU01ZVxGl+J5t0ziRRM+8anKRURJV1obCVkiN2S2uPi/w6XnC4SrBHppQNW3VOcimhq1kYeNrfKzyQT9ZjVrmlfVVx/bfyYk8tnL57K8YnQgDssKI9pg2P9MumlW1uU/SeBMG1SiWolCSqXsUz2nRnM3n0exN5tDg3JZVJ7nHuV1oZama8oJUmVYL5FqicgNtKK3ay11LQt+STf49eNAg2RVFS1Z7MrffAAAgAElEQVRpYu/SvGDyXSSGinGi7qiixx4Yp0fvGyYa05nXoct23vY1Hztn+Tmrp/9onp5XeNn1lz3jgx8+4Ezpy9cT+JAvuMK8fxyzallaGFVFchzGLSu8+9NGJiulbUtG5GdiZIFspiCLEjmaaJs6YY3w9x18uJWqbUtZGbTbFrCW27ISamP13CEI54ExDIUVeccT6ST9xXhlT3E7bW0P8creqCKQ/f3OsclkFbUsCqpOtyKazEd5i2uJsOcFrGCCbBLyMsv2uWiUgLB5IBCNSSntJNRLxij1EoqaPsX1mP1BbVtYFAZZ+yMkA1lnDFuoZ4kmcjztZthTIT8zWOE0gtJOSjWvRkVbDT/nWc9ffNvlNz08PUesu6qNCQFHNDemu7WRnusJF37pJZ//8hfOzKTaVvsI4eZM/KJYkCczVjCRQwk7o6geUBhJVi1QRZ1CPVFkczRzFKuEXAWd9xRliSbKPG77xkogHvjreBBV9kY2dB4iv3FWnWCrBPuUQmWlokn8UFdscYTqdo0mOlbV5BA6HvJW4ahegqtoQRTtQri+9Uj17//x+0gUY0XTEjur8JREEzZNJChAr2UcH96FWLQaPtVmN2ju0xbSnEVzqTW7brPR4J1ZVp1PtuSzuXBWNbK9zj0mBbY6nX8vQmWspEAo8ggXzb1buDwe140WfSD7wASm+EVbsKK55uEOrX5gmLzUJ9HVWT5W/Oz1L3v1p796wopfbKTDdMae9ja7brPtQw8/eHqWZS8Oa2GADRiHzNmD1aqB1eaFlUT+N36OuVHllkza8LCaWKWScPGKJWOFMJRoqJqKCq7O9jlfs8p/nLwB1SbREk0+XllR3j+fMKJRzMO5mhyht9GFSr1ni1sQzj6iaf11+2yP+PT7TJlKQjmxUUW2Z9kqs79tJquY3OLS5oaDkFbtNy3R9LgbGQoPUfDDaqYvOcVHpegK1KM07VFGXQrqHoWNgPzQdkLDnLNks+BoDUgmoeBRoyEmnneTRFMWtt2u70tqt9s0UBukrJNSe03y0Navfc7TbzvnNucMMWNn9oZz4Y5objj3YtqeyedWfPEVp6w49ctd3Xu5X/PIiyRlKqF60yMtEqrVPfIjz3ppBoJ7kqPSFRYqWZYz0UToXCufTGGLgUB6sp7mPsG8y2cSOEk0rSphK2QRgidPk1f3mWjWBmo2FA3dFLmaGkQTFkrIz0R+FPI1tU3KRxjdCoFW/ajuUmmfhCZ764f81lcvH0/pnHgP52VWxUBW2cTPfBFMEE0mslA0YyiakhpzWzRnswU0a+EsGhiqs0shF0ho26qP19syNM95n2Unl0rRtEQTBDlnoskG+cCnJJpQjyqiicUcObLw+gPmuicp7xANP9KjNQ+OkRrF9wx5mSjWPvjYD9++59sPPGvZqX91BUIbx3S+6bc3zXrj29600vf9rev1OrXbY+yTCWLEaRNoJGCjwn1qZv+yMRnutvY7loJV7wAxQl4yitxAKlOjmWhyhyCMzbJj0LporRtCr+bxBGEsi4VsTnFlA2aJJjxnudKHCWaZ1oI5VXJJFu15jpShcM4enYj+T4bKq4hIv71Z5aWJdphVXmmVTw0l07eED/nUSHw2IaIUqDb3Oc2AiXtWUJoklHczUnmPDCU8/wI0YmiEJEMbayhgL4YpnZZpPAUSUmE9FqxLNDUK/myONwq1RCEp9iIaeXjstvyPnSUbxyh0ZzndEXBEc7rf4Q3g+k4670vbnHHel8/oFO2XEzpkhOjM07Om7DVFfk1So1Hj0DnID2cIasVKGroBwdYIhT8ImaMtIpyJ8qSgIoXJOMgldvXVgmiH9ATRZLUQ4b2Ce51HgzHVZzUojANWG9Ks4NC89dG0OZtcEISvpcKJaDIrnWwbNDllQNagN4KyTiidfR08KiXmHxFNqLBVsQSrjmWuJhYkD3mhpYsnFxRBJYklUSOg2pwmzV40h2YvmEWNWTXbgg/G72wIaouCOCzIRT6eDclxtx8QTBQBYVHGcpaTqIykhSKJXvNlP+mKaLK1UQbPP0UFiGbikeoJGn00obUPj1PyWEaBDiltZ1Tz425vbfd7b9x5j9MO3edDv9tyyy1dIcIGMP/+0Sl894bvPvOkU0/6+B/+cs8BtSj2lLLFX1DmMJY417fMoWSi2Uc4J49ZtXzkNjq2WUBfhyCu9i7HIogm9nFQNVnJFJjvfRXefND18jTXMzRAAdDkCzOvnPcY02V0wBJOa9heKbKVt2YVAuc8TO6hXpq9lyLnZMvJyeryKo8Un8vNI1BEyP6f2rbD9GxnLvYV5ZA5zEYlGR9/F5wm5EdgkJrSnlUzkYuJikZfoG0sCiM99hQOah6htWbOoXDDRJOfRTm6MKHYkZPXOXSOCIwvI8rQWSjLKA4jJpq6p6khGmc9dMvfPrIBDz93ajMIAUc0Z9DNfqou9bNfPvGFZ5//5bOUb16lw5w7eQSxoIFZDfIamrrFOCsncQMeIMgLTCnHYlSU/nLoXQ6jdgW/OCS8E+WpIp3B1sgjqf3S9LmyIrH9SFip4Hx6FLkUbC8SNRE+b1DciNkEHX6aWFChYHLnIeRlsjm8VTf5Ic9EFArnpEGzxVIz0fxHJPMfEc3JsHoV84O6U55sqWjCsJ3/V66sAotWbDsD1ee2aO6mc2nWwiGKBkJur2lDfbYXtK3MtaHvqrioMq/nPMyyKxCTelSd44+HJdvmenLrShtz5xAe58mC9KMncyKZaI4N5zT6UJuoLWl41RgFXkSBDCht54lK1c27v3bnZecsO+UWp2w+VbPuf/7cjy8/8tlfu+Dc5RSat4T1KDYa3qrwefR5Y1HlNwalFyvmky32scUoE8U0JRGtQtZMK+HRWk4LJLVY/VyyigmimWFMIccSquY/WoH+zjHLzuf+MDgTv/IArBaWRBNTxha+wV2hv2NQ34eVIXSOBKyjaJYnXuVkTuQ7WyMzO7dKEloWMyHaEAQBdwHCPBW+V+Zo4qtPMgxs565cU6/T49B2kefkaU0RZaRNypvvaDCgoOmzCooiK3yOypAjDSUUm2qPPDVJNLVCnrmhetzg4+m0IJVoCgufBsLWvvf97K8Xbpijz53VTEPAEc2Zdsefgus9bcVpm3zhK6euyGX2BoqMQLh87oLZ9LRnLSLZ1PTgo/ez3QdURlgyKp1TVhSUpjnXptiQOdRMj3QWUJpoKrDTz0E0UTQDxa4cymVIrJ9oVoomkvMRoqoPNqjRapCo+aRMxhYtthjIKpqco1nZjIBscucgG0rnMHpf1Wll5/KPcjHXh3udfDEOUfs2h7KsPucFE6HzMlczQMEEFBSEAmPJPprNOXWav/kmNGvhIJm6IBQ7caZbVUGLc+S/W/+XiqxySBMV59ybEhZGGeeu+oGhAN2CUBwEsllWt/JCh+rWAmkMOYfPQTJV5lF7RFP7sYQ6q7pEOciJYpsV+P/5xk9VL//P3Xbc6dhzjjzlHvG/9QJ8CsbkTP7IG39147xjjv/cEb+9+3cf8AIzgE0Y7nmep0wQUSWNVxSFXCBn1UyrVFZ2PlVjgkmiaPOVrSKJohxLxriBAuczY46CaApKVemnycqjVdsrI/JJv0sM3cnvQ2nHHADRZZ9Mnue6VF9B/hC1YJHUbqSgZlZktfQ0mvy9ijCWOah9KZtsk1TNb3wG+9BO2jCxEwWrpbaXOTx5ETJHqgFyM6FgIp8am1gQTi8MWPXEhg/WRWlJNPGcwSbVN2lJNDX5LZ/CVkAmRlpL2ZkrU2QyQyZFUwqfiyEFR3Y0FbB0C+BnCuVTgcFTw2+Ql8rMy+l1D/7yQZcvPZMn+gZ07Y5obkA3Y7qeysqVK/3jv3LCyXf/7a4DTFjUcpHSnHkDtNkzFlI4IOjhNfezgTFyM0EyETYCwel2EzaoY6KZB2SURyrxuQgIfnHIWULFeVVtzhpjOaKrDiUsuEhbYQ2jcnh31gZiarSanLNJEZLvQTSrEBUqzjWpxPrZIXeT0x85lG7zOa1qWIbosVysN4vWJ53rK579hULc0Qe/jzRT63LECzrsjfgrwpj4HkJwyGVtoHK+TnM3mUfNBQNk6j7lqKovlUwULVkrQdgV2eIDmGnbwg5ra4R2nHgTFjMsvj6O7dtCIVQ/cQVtaXyP+6AL5JMhVaGgjEN5ASUdou7qgsZXJ9QZTimO6pQlKK6C+oIiLTWej/dWvnbbV51y6SkX3jhdx/bGdl03/PyGTY89+YQD7/rj799jhF7oBUJ00y4rciCYzVqdCef42BjVanE5FrhZK19qf+U5E7KJHEZbhFPlRVZEEwkgFdFEvnCuBaUwbleCi4MKuBtwbifmgfWmtL6XNuUF4xDjFOOb7YvY/qvKsdRUjwObz61zqzRyi1U7h3A8PkcmnJbQcjFNWeQERdDo9Zw/J+yO7EatannJud44PueFguBaAslEM5D87GKDdlSal0QTCmfVNAHPjyzJKevA69K6OIBosreDzEiHBXl1SX4Lm0kovZPV55ZowszUIwmyqYJ1iCY25PA1zTsZ1SmmzmNjd5z1hTN33m+P/R7Z2ManO9/piYAjmtPzvm5wV7XfEft/4Ac3XHWcCYsFFGq29BicG5OJC+oVYxRFqDb3qZf1rFWHFhNEE7ZGlCHHCWFzn5KeYvsheKRwzhK/yo42ZYWoJZqlqbJECA2KhyEvElRr1ajGRBMtHfGot5507KeJ8DAqrFPrqVkRTYTWcV5sNVItOKx2+OXnW4WFFydbjTPx7/W/z+0fS+NlXsDLylicH6tG5ULJi5vW3M4urIUUoTK1EVN9IKbWvEFqzG2SaYakQBoRaoNBIXIs0bnFlDme7C8K4mhtaJDPKT38HU6ZikksChi4DShyPVF9zpUTyH2FmgxsctJFYhdKEHwVUdGT1BlTNLoqoWQcDgA5h85ValMPYj+g0ceGc1nom3bd5XVvvWD5BSMb3KCcYSd0z5p7Bvba650H/+X+ew+OavEQSnKKIqdaHZEEQb1eh83YPV9SFISkimyyCKgsBuonmpZ8WXXcTkFLNFn9LFVCjCHelLFyj8IgyYpmhi44QqComq2OJpVMq0xW/7ahd2vADuWffXJhzM7nY6gW280pxqji91hfWlsEiBzTskcQNl74nLLxAuc/YrqAaK7jJtGnaHKKgG2ogOP191rnfMyyAEgGPhcxop+58LVtORlInrccMsdjIy2o4PxMFNbl7GbBOi9IcABXDEU6VhQMeOQ1sbksKCtS7n2OZw88bB+PaKIgneeqEhSgQn1cI+Xz5N/9+rfLF4lF3Rk2xN3lbqAIOKK5gd6Y6XZah5xwxLMuvfKSCylWr+zqtqwNoLl5QWFLUWMgYqLkozJTGhobG6OCTYulJX7KI8ojMrlHeSIp70FpxAoGV2kQqslcr6oa1OoUk0QzyVB8FFCjVWd/wKF5cyiXOYVDAQX1iHOhuu0OhX6NjZK7410KZUBJFwaeCJ3bMDJCViB/IHRcWFBJqI9DLK3NkO3kURHQ6t+T368WaIS4UT0qbKitTAVg4skhOI+8WDJJHpgzQLPmDlI81CSqRZRz0UN1Xgh1ojqVlx+ucq3XYsph5YTFSyWkPUX1Zkzj3XHbgQiLoq9JFQlFsU+hB9U44wIHozh3gYq8RxkKpzJU5QeUZ5KKJKC1q3o0Ptqjopfbe4EOTgj3lZX6vvSK3lj30qXbLj3y6yeueEgI7krvXk8yAneaO8M3L3nzTg889uhXW7Na84IoEuPdUVslDQ/V0j6ICRwKa5iv2U0LSB47EdhRvM6ZBwEMw3MqlKJ6I6ak27HqqIeONRmFfmCUMonnxd28yPNuZoq00CYvNBIbYdzOvuQlXRXsl4n9lo1OCF8YD2QK4xkm77yBxFeeb4o8jxOnObpddRCyLgtVhMASTk6Crr5OXAF8NMue4khPYb9cZsb8DlYw2T4JKihIsu24JQKPfM+mvKAFJJ5biNIESMXBM60eCC30QBCFAd6TJzmlbRQAFaRTuGig85jNp4a/pvFzokCTjg3JuiJZs6SVN8eFsAbuiSTKJHkcPvfIoJYIhu1xRL12j0IKqCHrNPbQyEObDCzY9483//EGlx/9JE8y93H/EAFHNN3geNIQWPrunT9211/u+KxsyMGw4ZGOMvLrGYV1G9bllnIozCnNh8fHuvCOLvMzQTQlFV1JaQLVEYteUNpQ/mOiiSIHECYspvDm7CRdag02TWNoQMetmgnrPnfBiYOIfCguuaasl5m0i7h5mbOJ8DFUzjwXtmioMNznGQsFWs49/mtibvWF0o2Y/AevZhPFPmXRQuX7Z1uc2Kpx8iwZDGKf6gN1GpzTotlzZ+laq2FMEMLcSHKRAoxkKo9AK66YyPfNeHuconokw0YgMtMLcq+QxtNUmMyaaeucohjdSyQVKuEuMFAna1FMRZ6yfRIUTXSE4fafcAFgm6mQhldn1B5O2IA6gAMAJCrOa7W5rd1ulyI/yocfHfmvvd7wls+ee8wZPxYoeXevJw2Bm3//+9aH9t/7nX978IFjm0OteZ2kQ6kqqNVq8n3lzUylppfqIYinx38vfTMr/8z1iCbmAYglXkEUssUOCFQtispuQt6qZz3z2WcOhLVzV7XM8Obp5ix/3h/dz4mgzUeafRmSRO2FbdEbXzAxd+Z1OpNr1GZESSeZ+HfciE1juGE6szoC3x8aGBJJd/LnaTPl90btaOIz8L3q3/zz1UR5o7XeOriWgk5gotj+3uj46MTvZ61BMZDY4/Kx48iM1mMTrx2V+eYtkSerxH0PP/ac2fNnXdjudZ+bpimlSYZnCuVZxhs/EE1SBWMbhCge0lT4BZlQk6gVfUTTumcUKXLGxQTRhARsQEAxxxCRoJC8XJBqF+nzNn/2KWeedObJL9nyJS6C8KTNMPdB/xsCjmj+bwi5n//LEFh+5vLmuZdecG67aO9ZH4xq0ZBPQbNHaPOLsDlIEkyHUW2OXKz2eI+JJkLmJofqSFR0JOWcJ1iaJENx6espUpkrV5lXsAG0Ni1l7mMgO7Vm88ev33nHNarIVKPWEvAJCcOYk8PS8R6SvEzoBypPCsN9z2EGlBuhVJnLaYxROCj/H02JC/j5TcwlOdm3zspDfa/+CSe4esJW8RpUISCEDgslG61jsTQMYmOEMFBl/FDCJkU0WpGuNWuqFscFFFjUb2hjRAHxxkDbtKIPaELkC5Vp2Nb4wXg26j8yuurpa7trlqQynx/UpYSlVJq1qTAJt8kD4UchUugHTCy9ynMTRJOrzxUVKEagiEjXaHgko9E1XcrGeuQXkhVNaJYQfZEDByUoSTISyqRFN7tmr53ffOyXjj7lDqds/sum1f94IORHH3nyZ/b9/Z/+eJyRegFyfWuNGvXSlKMHcCHAHJkMiduCnn6i6ZVV5P0qe/WhcEdI0pxqtRqBVCHtglXOJIcaOPLixS/60mc+dczpixdvt/bJueKn9lNWPrBys08ef+TJuTF7j/c6otDaRgISuDbkHOZHlAAZ0jyLPJ9TWUA0dZCTqGkmmmjBCxKJ56BCCk+PSosjny2MKqKJtpOxF/O86zzW/tXpx5360ffu9l5XBPTUDgP36esh4IimGxJPKgKfveDExV/91tcO9GL5Dr+pBvJwLUnkJgU2TyxJEl6wuNmN8di7Ed2ARB4ywcy72OFjLfS4orXkZLaKpux/g6+VwTTyzJAnhfxLLKy1Rmv4/+eRnzvh6M+csd/S/Wacz+PFv7lss29fc+mb/GbwURMUz+vkIyQi5G0qCtHNRNoUAa52zwsKUDwEzbdIKSss0VQaSaQ1EqJGY+OKRtd0qDfaJUqJZA4bFuSWQrRhJ2m2jUJR0tjqkc781pwf7rr968762LKP3bSV2Ap30r2mCIGrbr21fuqJn97prnt+v9yQepEiJb0All522GPzhdRCLjpDHi9PIWu2DhJU5fZaF4Ky+G09n1ijNcHovdeD+bhtkdiIG6bX7j36wudvfeFHD/74ile/fMe/TNElblCHveKOKxasuOj8T45lYweMdNsNALp2ZMxuzmA9hO5jyHc2mTV8kppCiVxPQ8rPSQeK5yJ8hdG60hYtwWnDkEIUB5abyieBfFfkqGNDlxoKRUgypZGXv2ibL59w+PGnvWiLFw1vUMC4k5nxCDiiOeOHwJMPwBcuO2OLiy756pGjxdp9G5tQRDGS+RVlmQ3jQdHsdRI0YGQPOVh6mBT5mUR5z5q3o+0kqzBlG7gqtsXV5eWL88pQDCOhACCfy0PTH8gED2+33bZHXnvaZTPSZ+6ae66Jzv3mxW9K/N7Z8RxvjgoSVjWFj5wxz/oocvgzJol+11jRTMr3JWWiiYKMOnl+g3oJ0eiaNnVGutyPXnCxkMdyLAgmWoji3s5uDdL42jHSHTR6Ln6+2867f/yCz517+5M/+mbGJ668d2W8/BMnveWOO393eCGKxUHk+0gf6aY9zqXEPUabSVQ+VySTrbfYmsgW2lREk0kmF/qUvqx9EEINRSQC93pocDZ3jxofb48veckrzvzYoQeetv3Wuzw6ExC/4vdXtL7zn9/56N1//ePHu5TORQbJyOgY55EXsAXL0HgCf1KbJkQ5F/3hHjDR9BRpvyiJpsfRC35uoQ0sK5pIF/JIwGkDnSaQ6VwIqlGE4p9kbE3nmmWHHn30J971ibtmAt7uGjcuBBzR3Lju17Q4W2OMPP3ys172te+c9/lubfWrgpbxkUfZ7dmwORaubrtnE/V1yNWWKkV+JvwzrZ+mR9jZQ0GBPYgdxuCQFdGswnyofoZC6gtbAcqLotG6Vqvdvf02r1z20d3ff8XSpUtnXIHKVQ9dVT/7zPOOTuvdD3gDNDeMBPXSNi9+QYDFEWqmJB+WUAahPhDGnHJ2ZoHaUifh1VndHB3uUne0x7ZTOfrPwyUAfoO5ptAP2Ux6bHiEButNogzKjk5Vml+3+w47fuS8Y857YFoM6g3sIl77tl1efdvtv/5irdnY2ojCQwMEYwqK45jnWbNZpzxJJwp+2Mq1dCfgynEkdZRkE5dmPTLLnOHyWkFKfZiWc9GMYMsiUlLPnb3wm2ef8/VDt37W1jOCZN782M2t0087/X1/eujew/2BaGG76AlsyEbGxjjFx2TEBXIaeZlcXAdD/II3dlCYjaf4j/YKgiOHHwryYPTOzRoEW7lhE4dwOednGo+JJlTNMPdyL5M/eN22Oxx7wEkH3L5UzLxn2QY29dzpPA4Cjmi6YfGUIGCM8U+98tQXXvrTiz7zSOf+3X3fD5H2iBAck0ZIj1qSQVcMFKAkgoouep7D2w5FQOiQgWIc2wqOf4e7AJW9jKuqbWWLi2phjVUc3wsoLXLadNNN1cija/+02cCs5Xtev+ely8Xy9XrfPSWwPKkfuvLelUPHXXDcG8Zo+Jj5m8zdUlEuesk4RVzIoZAdSyFsCzWkStsaNNeSYC1qEDr3YvJkTONjCbXHE+p10ccZ+bPoiGmLgvJuyupo7PmUIy8Qt9WqzPnIA2tu2meHtx214osrXE7Zv+jOG2O8bXZ57fYPrnrwpEKaJWmW+SK0B0eFM+YXh8x9RAYKin2P8zGZ0vBX20YS0YCKcHIuZ1UENJmKzPdS5Qk1m03eFAoRmDyhC77/nasO3WKGhG/vueee6JCvfvKdq0Ye+ULPpLNMzROr1qzmivAoqPEGTGQo5LGV5kLlJE1OnlTcLEFHqKIypGE5hqYJvlqHaEqDHE3bCa0imnDjQFoK+i00dfSjZz3jOfveuOLGVa7K/F80idxh/uUIOKL5L4fUHfCJIHDydcdu+f2VV5y1avUjO8pQ+qPdUW4/iRfyMwMKSaceFT2irIuHrSWZeAAjD9CrupGUyko/W1zHkkURF7MMDAxQN024UGWg0SRP6d8d+pFDjtju7dv8cIlYgsynGfXiMPoV5+736OiDy+OWP097uUSuZq+XUByF5BtUFZXhc1j5wWyb+zz7RDKiWjxI7fGU2h0QTUWdrm2Zh3Z5OtPk5bbQJOt2SuULioyhdrdDraCh6LH8xh23f80BXzv9a392C+U/P/QWv+olW99739+u9hvxpkHksyUQrMPgslXkNlyOh34IJwMwTlWsQzQ9LiUD0bSerlVHoKr63EYKJizVKUC/cjhFFCKZNWvuGZdd/OPlCxcu7PzzV7LhH2GlWekfdcDyV2c1fWFmss07WZe9NrGRzVJN3fEO+SrkDZfIQTLhVKFIMNFEybmiItBkAlgoocuQIphYwMoMqqZVNGWZ44lGEtjveWSUTyozuZeJv2z3wu3edvWXrv7dho+WO8OZjIAjmjP57m8g137Kt49Z+r3rrjh8VI/uMKxGgp7pse8jShRkHhAlHpnMo7yDqmzY6gjKck3NRoN0/vjcsOphPFEpWyZx8uKJRRaGy1B2Ao+ateavVFsd860fX/iDmUg2r7vjus2/9YOvf+C+kXv2CWfpp6ci5VArFrlQRhSKoCQemhfDXtqhzCiq1Vsk/AYJimhktEcjwx32Oi0yoqyTkQeVq9CcH1t1VeKcM3i6F4pEbshLqBcV4podX/v6U4758FG3b7755lbSdq8njMD3f/Gj573nfe+5SIbey+D5iC5Y2FxN0EKjOSeTGyIykTSWbJbtBbgoqI9o4n0gmnhFge2BDrUbOYbY5CFxBV1qyHij8+YuvPLE444/asmSne57wie+Ef4C0n92/8Rb3vRI9ujpWVA8DWQbTQuQpmP9Mm2HMWy2EJ1BK08Bvy+DFAZFnk8EpdmEBWmR23sCX04PvmSCvAgFQQirE3U6HVJIS8gkBapOuifTsAh/ss3zt/ns907/3i9ci9eNcADNsFN2RHOG3fAN9XLPuPyUZ3/lkjPPzeLkNW3qUm4KztcMVER5V5DuQtGEr1xAUdhgX2UsolWb8PWva32iWf3cduWxrR3hLBTGIR8nFrU/fuQDHzrgyHcc8pMNFYFLsRsAACAASURBVKOpPK/rfnNd4+vfP3Pvx9IHj05kZwvjk4jraEdo+02DMNqORZrIL0j6khKVU1ifRdKvUaed0chw16Y4pJqKnvXS9NmLFFXrIJu4K3CTEkw00ZYvVJJUL019JW952xvfvOxLR556s/PZfGJ32hgjvvj1Fa88+9wvHz/SHX1dmmVChB6TniBEbBaZfmVrUrYuQo9tdMopVcsydF7ZGNncTMM/h12R7YSlOL8z6fb4K44dhXWKRXN00SZPu+QTh378pG233e2vT+zMN953f+iUA195259v/1YnSrYopOZUE7YwShT3Hee8TFSZo5AHvpno3AWSycWKCMUgDxNkEznmBXmIHGATgHvjE4WtiMJGQO28Z++jrFF7bUI11VJ+Fv7itVsvPfQbJ33jVhcF2HjH0Ew6c0c0Z9Ld3sCv9eTLj93h9HNPO90fkC/oqYzyvCCPYipSw50xTOFTniC/zyfPD9gMHOHdqq/5OpdX5m32maXzglkRTYSlIOYg6R6verNJgYxvPuQ/PvaxD+3+3l9v4FBNyelddetV9fMvP/2To9ljBwUtGmpnYxTXIxIeq1YUBQFlma2ajWuS2mmPwoEhCmpNyjKikeEe9drKFi/AjqUwJEtFU6MYAt6abHs0STTRFEUnGXpQpzrJr3zDTrt/9rzjz77TqTT/91t8xAlHv+y8r59/kgjEa3JTBBjTaZ5RXK9RntniOjzoYdXKJLKfaE60lrQFPyA7VREQ/o0NQuBJtrvCC6RJKU1hGJJWstcZzq488ODDlh384cP/8H8/4437nVfcecVLzvvW146/b80DOxWR8BOdkUoKVjQV7Nhya0UERRNtYQ0aULB3pm37ys8gHz3SUXGFvEykKsDoV5GQOQWRR42hOtUHm9TptanbSamzNqFZtflFulrd/qoX73DiKSd8/prNhVP/N+6RNHPO3hHNmXOvN/grNebW4AtXXL3rl84541NhI9gmSXOZ5ugTrCntEvkeTMKtbQ6UGnj4weB8ohtO/xU+DtHEj0GSuOhB2tZ7QeiTHweUaUNBEJo5s+b+9B1v2OvkT+190DUbPGBTcIIr77x64SnnnbR35o8faqJk81T3SISSlJbUaLS4O1+WJNwfO0fHoDigWmuA44CjIwm1RzPKYIOaoJuJIYFiLCy4IJoIIbKRO1GOvuy5Jh9dhpiEagq8sNteM37jrq/b5fRLTjv/2im4vGl3yIuu+tbWnzv5xGXDo2t2UVLXNWm0D+DCON5kcS9yuBNZEmnD5mU/e/QC53YEVYW5JZlVS0oE1WHej7kCJdPzfO6yhXaOzeZA9ugjay9fut3On1ux4mJsDGZEMd1ld13xmnO/seLI8XT8tZ2iV+sZa/mFFqwgmiZDMZwlmugCBHLPSiYIJ+WWaIJTIjyOfFn0a/CQo4k+7Tn/8SNiktkcaNDYWJuSsYwQLA/S8KalL91p+YH7f/zWJYuWuD7m0242T98LckRz+t7bjfLKmGxe+v3XfuX8c441QfDKQlnblLHxLrdci+M6F/LAKqQyYrcEskrCXHe9q1o8Vj+3qqY1Q7bKApEf+5SKggaHhkCK1EBYv/mQdx948P577DcjfR6vueeaga98+XP7tc3q42VLN0QkuIAqiGKq15o2ZQHBWF9RHmqqDQ1QGLVs+Hxtj9KubRFa9ArrGoA8NXgJlm0pUTHLfy8QYs8pCkI26oexNbo5J+PdX79r9z33POdz5zy8UQ7iJ+mkr7nx+ucfdtQnPz/cHtmhl/VqUJ97WcL5zWFcoyTPKESLmbKBQT/RZCsj7mVeVptXBJP7hkP1nOx1js1BHKIdKX7mkQfnhqS46usXn//Blzxnp4dnivp82W8ve8Z5l331+Mc6q/9ttL02rA9gzBdc+JMlGSuYUDO5N3mKjZWt4McfPHdg1I7+5RIE08dmFz6abOtA2gfJTEnJnMg3FNcDftYFFFB3bWqCrPbXJc/fdv/vHPs9tHCdEaT+SZpG7mOeBAQc0XwSQHYf8cQQQKL9Z8876o0XX/Kt48aS3vOVh/40aHWXWSVSQlVLuZtQ1Wry8Yjm+i3z+pVP7rqBUCEXT3us2hU6p0ajQaEJs0WNeT9+15v3XvbBN39wRuZB3XD7VZuedv6JR3bM6nd6TTNkQi0UOpkEMacuQJU0nqE8TikaaFKjMYvyTHD4vNvJuXtT0UO+GhZfwQuvysvwOYhmYZWfPM1ZbYObFcS3tJtR5IUqMP41b1y64yfOWXYGqtFdb/T1ptBNv/3vZ+yz77u+2M06u/Wynj8w1KJ2r8OpDtDO2r2EBgcHKesi1YG7m5aKJizBbOcfVjKhaJYh86olZUUyMUcCCQeClOpRk9VoQYEaGRn51QteuORt3//P62dE4Q+gv+5P121+yldP//SwGn5fLtMgigJas2aU8kRwOg86/0CxR/tVSzTxF25vxjhzARUSN5H3ikIgv9zsepI0hneQEfno3ZSyvyaebTW/Rn4R6bCo/fV5T3vxBy8//gqQTDcXnthy4t69ASDgiOYGcBPcKTw+Akd96agdr/jBNSf+5cEHXuw1Yg9P7FwVFIYB5VlCcRiRLg3e11csOVy4Xru8dSLrJdEUkUdeKCjPU2q1GjQ2PkJzZs+jVjxA+Xh622EfOeLg9+34jp/PRBXhR7f+aPDC757+/vvX/PEQUUs3FbER2jMU1Rvoog53I+rKNgXNmAYG55EUqD7vUreD3s6G8g6IJsKIyNksq3AL2OzYcDrbU5GgsbExihsNrq6F5VTayygd6ynVTm9/2xv3XHbB8edd6xbYydF77W0rn/X2d7zz7CDyd8QGCRsmpQreKIFkwh4nDGNqt9sUIQ4LRZOrxC3ZRHi8n2iysjkRMq8UzbItJQmq11vUG08pz0yycJNFNyycvejgiy++8k8z5bl1wx+u2vS4s089K4vzN42bLmVll6ysk5PqwX4N/r55H9G0LgtYXJHTCps1hMwROjdSke9LJppQN7nZBG5OCAP3gguDUHRX8+tUlw0TFfU/Pn+Lrff+9rHf/c1Mwdtd5/RDwBHN6XdPp9UVHXn6st2/cdmlXxzujG/l1QLK8pTgD9jrtDlfDKFBkMzHC43/T0BUiiYqRv3QZwNrdMHx4T3IOW6CBpuzjMzokkM+fMhxH3jNu38/U0KE/bh999ffHfru5ece/vDIn/9D1ovZuUxF1GqQgpG0b0gHOXl1nwZnzaUgBFHv0Xg7Y0Uz6ZQ2L6hE52pca+YOkslkU6F1IYpVBFvn8H1ERyIUH2UFxSLIdWJ+uOeOuy7b67N7/cZ1PSG67GdXb3HQQQed002TnZHfh05YhUbHn5AKrbh5AfJd2XwI+ZVwDEDBDyuapb0RE8vS4qhsNzlJNOFNWyqd3MIVLgFEcVDPkqT4yRe/eMYhO77mzTOmzeF1j1zXOOWEEw7pBdmxo2qMgkaNennGFkZpNyfVEaQSoiLL4VzEeccgmcANzxhVIApjSSUrmp62HYE8bsWEDpVEUnG4HA8brZE+IqjhN/WAN/DXl261zTEXLTviEjEDPX6n1UI2wy/GEc0ZPgA2hst/7k4v3feh1auO8mvBM1ONvug51WoRk5MASZblq59w9ofNH69YCD/HciwCG0IPyyp0VIJCJRKRTzKQVI/qmV/QlR97z4dP/eCOH5yRHWyuve3SZ33zsnM+8ODav+znDYn5siGpp3MKUBAkc4pqEQW1Gg3Omgerb1ozPE5pqqg3jrw1n1uHmhThRWJlE7mZXBCUK8oKa/8CKxgUTEht2H8T1khSCYQiuzpX171pxz3OOeLYw36ypdgy2RjG7FSc41W3/HCro5Z/5vB777/3XX7kR9L3KM+R92d7k4Nk8gYK/zbWH1No2OaIiZaS3NtcVuqmZn9MlduOTZ4PH0dkbcKBBz8Lube2VpSQCX7x0iUvP/ngD33mhsWLF2dTcX0b2jGvveuyTc7+5nnvGy3GDu3pziwC3oao282o28vY27do2zxk5C2Tgg0U2iWxXWb5HxB/bAByQtQbJLMqBDK8UdOU5miO4NsNQqEoklHRNM1bl26785mHvO/w7y2ev7i9oWHjzsch8EQQcETziaDl3vuUILDi1hXBw3d0/v30M045PjXF0+NGTL2kY82jkdzX96pIZVXw849IJn4FqiWqHjgpvySaIrBGyhQZEhGR8Dya1RowXk/e8O6937nPYbscNiP6N69/o1f+4aq5Z6446aNjevURpqEir+VRJlLyAkl+LSLjSWoODVLcaFInyWm83aP2mF2Ms54m3YNFlaAsKbiVHgonQDRzFATBAglEM1fsu4mcTV6skeKmiLrjvWyg1vrNLq9+/cfPP3HFz2aisnzlzdcuPugThx422ht5a1gLm6OdMVb0q6K2fpLJBPNxiCaTTDZpN6VxO6rQNSuf3JJS2yp05HOqoqA4quM+oVX9jS9Z8vKjl33yC7dttdVW6VPyEHiSP3S5WS5/e8Ltn3pk7MFPFrJocYGU9ClLDXfCGm/npME6gUYOZd5WloPYg2xi3GpT2A1ASTQr5RKCPaucPtKXE6o366Rg8YV7lgsdZN7vd33VG5Yd/vajr5opeD/Jt9d93JOMgCOaTzLg7uP+3xD4+f3313be5SXviRq1Y3PK5wVRyEbGVVX5+vmY1b+xePb/DJlnvBCDZJYKEP8dRUYeQlmG/e1ECKKpSaJDh+9RI24lC5oLztt3x3ec8P6d3//Q/9tVbNy/dcsdVyw45uzjz2iL1W+Sg0VYnx1RliuKmjG8p6g1d5Bac4aonSQ0PNphs/dkHJXlKAyy3po5vpaVuVkKU35Dhn0Hcw6XewVXTvAGAkQzRz97gT7pRRFoeeMbX7/bIed97uzfbtxIPrGzv/6/r3/GQYd/8ug1o2v/nQLR6GY9KozmnGJ4ydrXuuPcfm8ydM7emSCabApO5JOyfppCcr7z0MAgV/6DZLZag2zVEwexaY93f/fc5yw+6NvfuPYnM4ngv/XEPd9472N/Pjn3i2eHkS8iLyJRSErGNI2PJdTpKCpysmFyLnIDO4d3l003YHUSJu3SkIHhFArFOUSONpPsJ0XCQ24m8msVodg8QsVdIv/6isXbnvSJDx95yaue+6rxJzZS3LsdAhsmAo5obpj3xZ3V4yBw/hVXtD712QP3Gx4fPXLWvNkLezBs7Otusv6vcHic89UmX/1EE4MfCy8S8qHIoYqaK9EDTewKEyjyGgGHJIfmzDWUmu4mtU2u22ePt39m/x32vXMm3qSVd3/36SeffcLHitrYAdGArOce7KE8KjzFRHPOormU6ILWDI+S0oI6YzllXU1FF3maxGF0lRkqMk0pfAeVVTdRlQ6iiapdKELWc9OQH0Rc1BKHNYr9qBhZteaO3XfYadklp1101UzA/9a7bt3k7fu/95jxbnufbt6riwBVysR5yuPj41SL4nLjtK6yb2km9lLQKG3OpS36gTk4kS+QC2go9HxW87vtDtXrdS4eQjFWIAMaG+3ct9Wznvv2H1z1s/8Wgu/MtH/d+tBV9aO/eOq7hsXIYW1qP51i6cdBSJGOOEzeHs6p21aUwpAd+cboVMAkE7YJCJ0LTgtB6gH7Z8L0viSa3Ms8QI4mIiWIqGjrpWkk1SiifDS//xUv3OaDZx/x1Z8sWrTI+WRO+9E2cy7QEc2Zc6+nxZWi3d7BJx22z7e+e/lne1nv6TKE+7pdZDk/rTSo/ruLLUOJ1fc55Mj+gjZ0WHByPiomDCfme74hQhg9EtwzOjWKFsxdQGEuillh88L3vuk9R+37un1XzSSVp8Ju5b1XLzzn3C8c3dYj7/eH/KgIMspFQcGAT/OfNp/iwToNd8a5MCjtKko6IJqS8h5R3tNUJGjZZyjvIvwIn01FCn/g08iLdGl6Db9UdoiBDVJGYRCgFaYukvS3/7bnGz907qfPBQGatnYvN9z+8033fvfbTi5I7R3VY6mEoRSJrtJuoNAKErhgyGIzNDkHEBK3LxBNicIfJpqogNaco2kVTeLWouj6U49qlMJqykj4ZOpAhH/ZZNEW/3bFf15/x7R4cPwfLgK2al/75Vd2X/Hts89qy/ZmYSsUwvfINx6ZhCgZzqg7hjaTgtJMcGEbXC9gyo6Eb6ti4hlk0z/wFcVaBkPUA+nEBhbJsMYateP+KA2vTDO7Nqc9f2DeQT/92s+/9n84VfcWh8BGhYAjmhvV7XInCwQuvvjigSPPOP7ATtY+QPl6M1SNTOZkrjukq7C5gQzU95ooFipz1LDqQn1ghdTDYoBQuiYKPK6qDmohhZFPQ80GFb3ksfmzBs/dZ9d3fvW92+1/70y0Plr5m8tfcNEVF3760fSBPVQ9a0YDgdA1RbXZdZq/+XxKqaDVa9ZSmgiuPs/bnvUc7KIoSFOeKMo6GVEqmWjaMLq1POL8tgK9KjUrmwjvohUi8nKb9QbaYOaNeu2nu7x+txM+uM++t0zHLim33HHLgre9b+/jMq3fh/6EqUp5TMIRAaHWqt94UFLKKkdzYiMFssOV5pbRIGzOnbBgYwSLnTKEDuGe8zH9GpuxN+st1R5P//L85yz+7DcvPObbM6Xa+dZbbw3uyH+9/UVXXfCZR9NHlqogo+asAfKFRwYOCm3FRBMtVrmoLRPcxxyE3vaCt0QTY7fyLYWiCVOjCaLJhUD2Dz9nDFGNQuNlwV+eu8Wzz/7hipWnzcRniVvVpj8CjmhO/3s8La/wtO9+behX//XLva780feOM76eVxFNGzB8nFefotmfs4kFGm32IGjCsNrw6ixJw+sO4XRfUhgHpHVGfixo7oIBCpseFTpJ6rp+6cfedugn9nrpXo9NS5D/l4v64a+v2ur7v/jG4X8buecdXkvWZVOwgfu8zeZT2IxptNu2YcZOQVnHY0Wz6BJ7bKa9gop2TqYLSyNDaVZQpjQVynYNYpsYaJUpFDfBLRChD/H9CQS1e201FA7+5r27vevodx721h8tmUb2L1f+9LotP3XMJw95aPUjH4pbNR8pItgEYTxCfQehqayhwlIaw9hd54VwLofP+4mmJm59ABsv/AyhdE1Ui2P2Og2CSPc62R+2feX2Jx931NGXLly4dWemjOs3H7jbzo+JNad0wvEX6HpBYWRV44HaAPXaBXVGUk4DYUU+RXtJuwmSqOjh4h+o79gc9XUpK90z1yGagSJRRk+klhT0/Ad32n7Ho9+/3/6XLN1y6Yx1VJgp42ymXqcjmjP1zk+T65699cKjlW8+LqUcYvNjria3YXQOJ/YRTM5Z6y8GgpqDECLyDLkAHb9vOF+TPI9Jpgx8ylVOcexTYyAgFeZUGwppYH6D/Ex0BsYGlr/prW89/YAlB+TTBNIndBnX3nnRs/7zR98+cVX3wbdEcz1Z1HMaWjRIjVktSjUKJ7qUdhSH0DMOnUurbHYM5W1FplPwop3kBWV5we1GUQjEYXQ4CuBPbqPjWheUFhllJqfmUJPyXl7Mlo0fvXW3t5z4hoNO/PnSaZBHeNn1lz3j86efcvjfHvjbPhR7DZiwq/IprQwq9XNWdcfHO9zFiq2JysYE1j3TemaC/IB7QqXkVqus3Ns+5xjrPkLo6PMjfBtWJ093Oumfdt5xt1MO+fBB337mM5eMPqGBsBG/+dKbL3rOOd8994JVvYde6c1GpzC76WzWWyQLn8ZHUu541RlNScE9oUDKATD2uMpcGGGVzAJFQbbdJCROPI8UfiAVodEBOgKB2eN5A8x95T9sxsRZ533pvK+8ccn/x953gMtVlV2vffqZfm8qQQQUFKVDBEOoIr2LBKU3RTqhJSSEJKaTEAIkhITQgrQoTYoUMR8qiBpR9ANREJCE1FunnL73+Z93n5kkor8PHyTh3swZn+u93NyZOefde2bWWe+71jqmrReXMD30tAL/tQIp0Ew3SK+uwL2P3tvnyvEjLnRc99JssdCXqBp6g3dCVwomiCGjD2LpJShnMuv+gmRkzRgioiBIAFRX4FIOMTGasUp+hGRBQqpzBmlJYgF6RoVV0GEVTWQMHa12y0rdFXeedvi3bz9x1+8t69XF/IQH/5v3H/3K7IdvHdOtt30ns6XF1KKK1oH9pVq/VnXR3d0N3w9kRKVbJeW5htizEdViCTQpTtR3Xdk+lywmZ0lyUJi0J4k5ImN3Ek64vgcOATujIxI+DFP1Lc380yF7HTrrnpF3PPQJT6FH3I2YzAnTxl61sm3lqSGiAlfoUimZ81t3waQk9k90I9cEytFmkuul5ricsdSkmFmVgJPAOTk0JLOCMdQ4kgK4rKrCIC8voUJnehxFfOkeew6eOPrqaxc1E8i8+9d3fP2hF348YnnbO0dnW1QtUhwohirTkGKuA7GFjjVVdHc4CNxQWnTFIWFHJlXnjGmJpZHMNaf6UgYQ7VCSAHF5UUTRraZtQNNUcNdH3soi9sOlQ3cfetN3jj/1/m8N/VZTWqb1iBddehCbpAIp0NwkZU6fZGNW4LanbmuZcN3UM2MmrhW60p/AZogIvgjAyCRTtgnrptXEJcSJ7YtUhJLSvN5GlIBUSRI9aGaTmCRFl/SPbNeS1ZGeYbBzBuyiBcummTYd2wwY1Okuq95x+rFHXH/k9pc2hc/gR9fz5VXPfPG2h2ZM9TKVb1sDLFgtFlq3aEW1WkZnuVvmZZMHoVchmyMj+XIATkIhL4TvetKuCtIyhuY46zZIpFAn+yPyeFQU8DCU/oTk38mVEEpRprLE+Sj3j2GHnXjSrItm/Wlj7rWN9djP/e6lra4ZfeWo1V2rT4kYzztejWVoHjiO5P6kPZswZbR366wlpc0QqCGvxgb2XA9oythJFdIQnALOLQI7TIESRdA4hyFUaMxCJlPo2mLQFpPGj7np9h13bB5z8IcWL9xp7lN3TVkTLD/UznHDtKnWHnTLhK7mAGQQ+Cra1zgod9UQOZR0lcwQK5GeBA+gDjRl2AAHk1dKAiHBTSYQqZHsrARRCE1R0TdbQq2zUt5/8JBbp425cdoO/XZILYw21osqfdweU4EUaPaYpUgP5NNU4O6n7x44buwPr/BEcJ7QUKL3f2qBk0o3SUpJHl2l/9GHbZzYxNCIVQNoSpKo3naX4iD6mTKJyY5EY1KBrtkMZs5EtmDAzmhoabFhqWqcUzMfqr4x9dvfPHbhcTuc23QfHuQG8D9LH9tx7kO33GINUvbPbGWqmQEmfDVEd7kKrxLAl+1yQARMAsnIFYhdTc69ecRoeiFEQMAxUaaT3yaLNfg1ypHmiHgAJji4IHW0ALMBJU+yFo68Ygkz1F49euiRF994xdzXe5Oo4ud/eXXAD84/e2x7pePsbD5rBSKUymSfRzJMgPZpg8Vc34id9mvCVCZ7W6qdCWjGTLKajWxzGuPUDQ2+7yJjWrAVBX6lgtZ8C4lavFKx76g7nnt4bjOlLj3x6gMDbn/orh++X33/bLuPqpsmjW2UkS8YKJVaEfoqgkBDtRyjs8NBpcuVe5L2LhHMKtcl4KRxhsQ7k2pPFDJxy+sYTdktMRQp4CrYeXAndC3ocw885MCpd4+6uylnuz/N+3x6395ZgRRo9s51S4/6P1TggSceGDB68pgru2qVs8281SegTwUST9CHMX0IyxY6zazRdykUla3x/wQ06cP7o0ATBqCZgJk1kClYyGRVFFsMZG0DuVwOaqTVKh/W7j31iLMmD9vtzA+bcZFeWvrk9o/+z/3j4y3c4/WBih1mQlRdB9XuCEGZSxaTMs954CMiC0JHR+QyuK6L0CfbowRkUoIQ92MwrsGrefJCgQehtObhpMYQEVRLQXdUQ+uAFvi1KjKaFau++vbBQw4bc/6ISx7rDQKh51/79aDTzzt1YiTCM+1cRtKVHZVOrGUzJYu57iZHP+T8ZXKhRB7h8gJJ/r9Yy3aScQL9t+AhMpYpxxNyWVtmycdhgP6lVnS3d5e/8uVdJjz64xdn9iZg/mleV3RB9MhvH9hu8qypo1guPiW0XEPLceh6gIzNsPU2W6K1pS9Wr6xi9aoKOjo4urs8OGUfnII3aRKbZjM5xaTWLY0oYIDWqb4Ya22NqI0uQpngREwy9yJ3t512Hv+LO38x7dOcQ3rftAK9rQIp0OxtK5Ye73+twLxH7tti2vQJV3d0t5+Vby20UPuc5twatu3rq3PJbVAKiKSnZpKs0mA0G5nRNJ9JM1bUOmcGg2oIaLaGXMGGlVPR0s+GmVWgGQqydgZuu1cO1/CxFx5+1vxjBp/flKbLv17x0x2fWHL/RNE/OELtp5gV4aBSDlDrCiBIZe5zcJq1JAN3V0fox9K8PfI5QvLXrKvSSXiBkMF3fVhMR+C5UARZI1WhMCFbk6xgyvakaVEcY4ysVYyjKl457pATx1xwzgWvbM96bmTiM68u/tylV1/yw1pUO0szdFZ1KjLxJ5vPoOa50msxEfoQkElY+caMsUSZFCApfcIT9TiTU5qNnU77OfHTpPxyJaImb4yWbB6B69G2X73TV3a5c9LY26Zvu+22Xc3ytvLoywv7j71l4jSRYWcJ3QezfKimj0JBR6lgYcstBqGlmADND95vR0d7iHJXCM+LQEQzCGBGNCdLlltU/FDWP/lKPDQbX5J9jyL0KZVQ7eguq1x54ufPvnhhml3eLLstPc9GBVKgme6Fza4Cdzxyx+emTr/hmo5K53lm1rJpDlOaXMuP7ITdTGggUqYr8juJgf5/QFOq12lG06BZzVjaHGVyNuyijlyrJr+gRSiVigirHtw14ftqZ2bmsMNPfuDMvS9u3+wK/DFO6OerHhjyyj9+MYL3C45wDd/oqtXQ2VUFp2QghyOsudLWSHhaAi79SEZWhj6kfQyp1InhVAIgcCiaUsCrOtCobS4ibLlFPzmHu6rWDSf2ESkhdNuSH/Y5qxjovvmbg/c+7NbRx494ZquttnI/xiFv0j8h4c/Um6dd/e7y986pehVTNXQpx7DoRAAAIABJREFUGCHKNgg8eXGk67p0PJBblej1OpOZ/HcysyniRPWs0oyg/D0hTgFRt+qi1B+yQMprJoKqA5OplAa0Ypddd5t76dXD5w7+8kFNo3Z+7vWF2WsmTbrC09yRIq9kYITIFynnPUAuq8HQIJXmpUI/lNsDLH2/C9UaUC1z+D6XLCbZSiVAU5PjHCSuktk/lGZFFwQNv966abut6pRjvmrwrns8sOt2O8yZcPUN7zZjyMMmfXGlT9bjKpACzR63JOkBbYgKLHhkwdZjJ02cGrHoOOjMJnaIxD0kJBF1oJmwmYnPYANoSj9NUps30oZIgU7MmaFIRjPWBFSDIZPPwCwqsFoVlPrbsG2yL+HIWlmU19RQXSbWZP2+s56e8OLkDXE+vfExFnc8tNPv//nyRD/vHtcWd6Ct3AnfJZDJEZY5FDK9pnZ5RN6EkVTxRiGToqGgSmr0GMLl4J6Q8ZSi5sGAQCmfwT577YmIcfz2zdfx9vIPYJXyMm89EFwyeCYMwarx/x6731FX33LJvJ/3pNbwYy8/88UbZs646m/v/P0ULasVgtiXQicvDKCSGtzSJYiMonCtdVGDqJRCICk4r1t5iSQYSxeiPseZDGdGcrYzYTdVocCIYvQv9kG1vatr1x13mT9myoSZO3/h66t64776JMf8o2d+VJg+f8JVvulfGlhBMbIE9GyMjB3DtoHWQhamoSFrZKCxDNpXOli1oobQN1Ath/DJEUGwxOOVk60Rtc5pVCGSUZMRGLhUZNEFQHJRoJJ7gutXjjjw4DuuvXjEDTt/YeemqfcnWaP0PptvBVKgufmubdOf2YJHF+w05ofjRsWG8i2mMVMoxDwIcPpwUGh8k+YzG6r0hNFsAM1G0gqp1gloUkKQYjKZGsT0GJmcBauko/S5nGy/0YxX/355ROTz6AqUV0eIu61lh+15/AWjjhrzVLMuxk0vXfMV0S9a0MZW7bPSWYOa78FzOaKygBKqED4JgMgfUiCkSL8Q8D0CmtQiFwhdAqQAqLXueFDDAMWshYP32w+1yMVLr/0WK8td4LqGWuij1K8Fvu8hoytQXC76KKVXh+58wCVzrrn7tZ6wBot+9dPP33jjjBHLVi4/NYiDgit8plu6FItomoJIcJimCdd1JKNJantqmdO1UQNkSkZT+jeSEIUsdWIYpISWQEdAqEwCTbqwoseIQ4GSngGvBeWv7f61eVddPuLm3Xbbp2lmiBctWqTe+sSM733Q/sEPeSbqp5YY4gyTvri6zuVsZjFnI2vZNOcLpyyweqUjQaZfZShX6TXtywxzyWgKFQpZW3ABVQRJRCrpgGIFnBhmWhsRQ+fMYUH85IVnnT/h+otHvtET9l96DGkFPosKpEDzs6h6+pybpAKUXTzvsbt2Hjdl/EQRiyNUU1M97suEFfJtJ8Vow8CdGE0CngQ9iaGQP+skNyf1uZAtTWqbU3wc+eyZGR1qJkbrViVkSgo0zUGuoKFQtFGteOhc48HvVoRWzb0zSBs088DdDrvv/GOab2aTxBfTf3HN7lE/d0p7vObQjqAL3W4NPoHICoceMAiazawDTWpLhgHk3KbwgNARiGqUIBRCuAGY78FQFWQ1DWRzuKLSCY+sqEieralQDLL0iaGpHDZTYEd6pHrqX/fb9eBRc0Yt/EwB/8//8vMBV1573agVq1eczWOeizXqxpIPJrW96wylFK01ZjOTl0kj5nB9wCnBJs0DBi5sVYUNFVsOGIhqtYquagUBE/CotasZUGMVBT0bDSj1nXvnAw9fv21L88xkzlsyT79/5sJhS7uWXS+scLtAcxW7jwVh8ARoGkDG1lHIWCjk8jBjHWtWdqOjLYSCHJwyUK158N1gbSKTZJMp/5wYTV6f0YSCIBRQmAFd1eGUa64B9Y5jDjxyyt03zFnDGAWep7e0As1ZgRRoNue6N81ZE9CZ+/iCPSZNnTTB59FBsRqbmq2zgCf+hI1bAjRJjZ60G+W8pqbKViaxn9RKp7a5jI/TYyk+UTMMfbduQb5Vh6I6sHMMxRYLNdeVSSJBmcFvj+Pa8uCDs489feyVR42/n20G6TWfZPO8VHnoK08ueWpaVes+3NF8vaPWhThiYGQE5TEEEQknyB1mfaDJpAUSzXQKJ4BwfYRVF4zM2+MIfszhMgU++aHShYFMciLvUyGBpq7E0Mjr3ONxH2PA3/baZej5s6+855XPYg2ef+vXg7537venuWHtO27oacXWIrrKnaDZzH8Fmg1RWuKMIMc46rnlSYb2urdsBo6MAviVMsxYwW477QLP87B02TKEjCGot3JzdsHrWNH+8w//3nHCZ3Hun2S/bIj7LFkyT//BxDvOeG/Vu+ONkj5IyTEW2xxWXoPQAmTyJkxTRcY2kM+aKGQKYEKVQLO7jSy0cvAchmrFlR6vMXVDSAAk6PI0mdGMQ1++R1SrLkrFVnhOBB5w7nbVXjzpqDO+dd+MGU0T47kh1ix9jM2zAinQ3DzXNT2rj1Rg5qJbd54957bx3bXykYZtmKGMiKvnE8sP9H8HmsRikjWJnOVUE8/NZCAOMEwFqsWwxef7IttXBzQXeo6j0GLJ9nm17MIrRwgrDKpnobzS+/2Zx5wz8SsDdnvxsF0Pa8oPn5teHLXHh/F747xs7ZvtrNNe3bYGdlCE4isIQw7BKV9akbOapDznpDivhOBODHgckeNLQQunD/0gghdFiAwT1FlnCpfm+pouJNhU65F/hq4idDxYwuTM0/905AEnTjn35Aue25TK35ffeb3/CSefMA26OIvQI+07aeBNyVVRVJ/DrF/gkB9jPVJShgys9w69VsRW39tkEA6vgpZcVgLwfi19yc4d7R1diJkqhW5CsPIXt/7Swp22+eKYWbPuaRp1+RvxG8bPHnzqyFnzbp0kbP5VlgECzYeeZTCzGhSVI1u0oZsKMraFYt5GxspKIVrbym6UOyIoyMP3IGNUPc+RDDIpzWXgg9BkvrmuKnCqNWRtUvMHNFtcdp3glWHHnXjZwilz/p6+EacVSCvQsF9LK5FWoAkqMOP+m/ect2D+rI5q9z6aoStu5MEwNCmaaCjO1bqze5KVXm9hqsSUUeucZjQJcMYy3lK3FfTfsohS/wwivQrFClBotWWedK3iwe324VQE3G4ONczAXR38PeuXJt1/3YMPb799z7Xd2ZhbYdYvr9rlL23/OyHq6x9Wi1wzJOgTKBJw0fzbWrBJVpmhCr9Ks5kCnEREToCg5kEEZOBO2egCLldl/CJTA2jkCKBBZkqTwT5ZU3mRi5xtgYUxdGEg6MLbJxxy8vjLL7zy0a3YxlejP/3ai1uPHDXy6pVday5UTY0Re+l4nszSbgDK5Ps6oCnb5RJkJklV69+kdU79V4ocaHVkFGpQ82EqOizdQhhwOesaidix7OyDC+bdMWb/wYev2Jjr2pMeO45jddbDNx5654/umFgRzh7CiuHDg5oFrDxdhURQjBiZjIFM1oJtWygVMrAMG241xJpVVbgVQGU5uI5AubsCz3GTEQYZ/MPWAk2axSQLIxKsZTXbj31l4eHf2HfMgskLUuFPT9oU6bF8phVIGc3PtPzpk2/qCsz+8YKDp9w0bZzrOfvmSnmZiS4Y5T8zJE5H6wCAzI+mdqWuQTHVRHlOInU1AZqqzdBnizz6DipAaFUIzZFA09QZ3FqASlcVlc4QItQQ+zqYo0F0qW+eeNCJF44adv1Lm/rce8rzTf6fq4a8W35zapwR+1ZrnkIgMwxDRKFYBzYjFXGkytQgmtMMSKnuBvCrHkISEIURvCBCGKnSRYAxH6omoFHrXKP2uSYvDEj4pesqAsdBzsxAj0yEVbbkxCNOuv7wc45+4SB2ULSx6vLIi49sPfHm6SOWr1l9htCQdXwHqp74fUp3TGmOmbwFN96I1yYA1fchzQonf5DsS5ofliOCso0uYBI76vnQYhXcj6TC3FRMqJHarcTK44ceeuT02TPn/7Unqe43Vr0bjzvr4Rn73zJ/5o2wlcG1qIbYAIQewSzaUPUYQiNboyxMS4Vt6cjaJorFPAzNRLnTQXtbFYGnQ1PyqFUjlDvLCdAkoQ8prBrJQDGT+9bUdKih4nmd1V8PO/6ka24Zc+OfUgujjb3K6eP3pgqkQLM3rVZ6rBukArc+smDo1KmTb/IQfo3yy4XKJdBMPszXAU0yzyYQQ+BAs/W1QFOolBCkQbNitG6Rw4CtiuBaFTwuy9Z5JmvCqwXo7KjCKUcAN+B2k5iFIS4zKJ7+22P2PWrUxHNm/GKDnFAve5Bx8ThFeaFryD87/zkhsv2DvNiRH9gNsClITB2SfUwST0mempyU6C6XdSUD98gP4HvkiZrE+yEOJNBUNLKZApihSRbasC3UahVpXcNDQWQWsmZWuGX3T4fvc+Ss2y+7576NUb6nX35660kzp13xj+UfnMG1uERqe/JepVk/y7LASWIvfTCTSeF/B5rEaCYCNfnvZFckf0j2JN3IE5Z7ASzTlKK2yA1hkwGUG9X23GmPRaef8N0Jw4ad8d7GOL+e+phT7p+x5+13zbol25rdp+x1ghmxNPSXIj6TRGMcZs5AriUHsAiFjIGcZaLUUoDCNHS2VdDR7iDmNnS1gGolRGcHMZqOjPYkL00KEZARlHWgqTKlogfKY0cddMjcK0679I/N2q3oqXsiPa7PvgIp0Pzs1yA9gk1cAWqt3fLgvEPGThk7Wy9aX/wo0KTPdmlZIrg0xFZMXXobqpYmjbBpXlM1VCh2jJYt89hi6xawuAsB70SxZCFbyMEPONo6Kqh1RQhrZHViICiHCCshbKMItxL88fAhR143/eyZz2zi0+8RT0ciredWP7bLw79cOLOmd36D80i2z0WUsJo8YpLRpEx0mZEeMIReBM8J4XsRQp8sZwLCl1KUQcwlzWkyyWhyaa6v6pSck4xA5OwcHIfyLzkyJpl0C7grg6XHDT7puFuvvfOPG7IoL/3upa2unTR65D9XLjslVEUxNhVG7LgXetK6KHApUlOBoesytVBGnTaUaSTgWTvKIRNUE6BZj0Sl1nvCaBLIZmS+DgLmTs2FqZlQPERRl/vzH5x13qXTx0x/e0OeV09/rGkLb/rK7fffegs3o4NiLVJhCHheFbHC5SwmJXrpGQ1mzkZsMIjYw8BSHlnLkECTwPrqVZ3o6iBfU2I4iyh3++jqqMCt1iRrrJJvVMjAIiNJAmIi6mrr/Pm3Dv/WFQsnzPlbMzHHPX0/pMfXcyqQAs2esxbpkWzCCsRxrE2+c+YBt941e0qsicGJA3ZiVrg+0CQLJEWmtlhrgSbN/zWAZvFzWWy5dQlMVOD5bSi12CiUCvAigfbOKsrtPlikwe3ywHwFCtfR1VEGgy6yIv/yWd887/zLT778rWZstRHYvGDhqV+raO2zQ8XbM2KREiGUDCUp0GNOHlQ6AieWrKbnRnDdQGahU5JQ4AXgTiDZQRkzTQBNzmjGUA0aeVBAPqhkZ0UGQsQA2qYK1yvDcyvol2mNC87AJUN3OuiqWSNm/2pDrMHr77ze/5RzThnTWSufG9vMDhlHEPPErUBREPmhBJiWSl6ZrrTNIozZeCNuCH6SmeEGo5kkW0mbLTkiKGQKDXlokkqaYhHJBEmHFosa/9khXxty6UPzHmqqBJrpC6fvdM/D905tc9ccqucUPVACMHKJkMCcssyTCFkjb0Al31KNo6WUQ9agixANpVJBqv1WrmhHd2cAXSvA1Asy57xjTRl+NYBK/pnUOg9V+ZpmQuHljq7XjvjG4aMfmHYHhQL8azD9Jnw/S58qrUBPrkAKNHvy6qTHttErMP7OaQfNvn32dM1kuxuWrnihm9jN6Ar8MEDII5gZG6ZlJeDS0EDGSIquQsuRj6aNLT5fQBRUwGMy2eYYsEV/qIqOD1esRqXsIyL7Hmr/ugzCY+AeR+CFYK4Gszv7l5OOGnbtUd8/6vnBbHCSN9hkt3GLLvnqSrF6coV1HlGJuwzKpzcMC145gI6MNG4PfAHPDeG6IUKPyy+/5kuBkAi5bIvTjVrNqsqkxREZ69O8JtlSkZKDcEAyF5kYnROraMYmogpfesQ+R4+5+NKrHtyR7Ugi9k90e/X1Vz934jknTdSz+pkO98AMSipKfBYlKylNC0gXzqDFCVVJGHH9fGz6nQSe9dnNJAAolhc6jleDbZsIRIAgDGFrJHJiMGIdnuNHLMLLBx207xE/vunHPS5y8xMV9GPciS5WJt83Y8e5d9w6TSjh4bHOlViPUGjJoOY7NFwAJoV8MVRLhZ7VJODULAWZrI68paCQ1dGvXx94XoCVy7sRSPxPrfMcyp0eutpc+BUugxgsTUfkkthK47awnzx0t73Ov33G7as/xqGmf5JWoGkrkALNpl369MSpAuPGjVN+v+y1U955792rK155R0WDykygXO1GrCryA9/ImjCtTMKQ6aoEmkxTYGRj9N0mg4FbE9CsIRKubMkOGNgXqqZh1ao1iZ8mzRc6MSIP0oScYhdJ2BK7CqywELtr/F+fc/rZV40+Y/SSZm293f/G3L2eePnRiY5VPoBlmEGzjBozgFABd8lbUyDwOFxSnvtCJrX4tVDWkfsENOvCLZD3KQHNpIXOdAGhRWAqgc1GRGDihUi3MPSRNXJAl/qn0486a/Rpp5/z4vbs/+4I8NzvntvqguEX3xTE/olCB9zIRxhH0MgnkxjNej45iXVoHlitA02ZSU5K8pj41oTbbABNUZ8XpplOj9CPRNIxIiT6pYxug9UoplP4GrRX9t17yIiHb3v4983yyiaQOfG+GdvMvev2K/ywcq5hM5uRAb5CM5kC+dYCumtlCTSFwaDbKjQ7iZI1bCaBZoHM2rM6+vZtkWz5yuUVBB6DrlrQtYwEmiuXdqLaEaIl3we19i5kzXxY6fT/94gDjjn93gk3pYk/zbLh0vP8xBVIgeYnLl16x82pApPvvuHIe++7ayqPw51rgQsjY6Cr2i1FJQQ0NcuGRoymRkrmpC2rZWP02zaL/lvnEYUOuPCgqRH69+8jo//WrGlHR3vt34BmJBk5EgfF8Lo4SkZL4FfCB047/rQ5484f91ozgs1F8SL1Nw8/e/CqcMVVkRUc2O136tT2plED7imIfRU8EPBqIYIgguv5cGseIidC5EWIAprt5CAYR6MPlEe/FmiqHIyc2+v59TRbR2ym5ApjDh0G8qzAu1dUX/3WwSffcvVJI58aNGiQ83H397N/eHa70WOvH7GyfdUZEeMGORnkW4oSHNLoBd2oqbo+oynjJKWKPMG8cUwJQQm7uZbNJIMDVUXNraJUKsnHqTkV5PIUdRrBq3nIs6xnxOZzB+2/77TTJ5/++42pov+49dhUfzf9jlu3vXHBjdeVo8op2ZxhRdyBZeswczoUPYYbetL7NtYoZCEBmnqG3CMSoJnN6CiRUXvWRGtrAY6TAM0oUKHpGRh6FtVuH0vfXwVTZOGXPQjHdyxh/urrexx0+32T5z3VTAb4m2pd0+fZ/CqQAs3Nb03TM/qEFdjjkD1OWLr8g7nFPvkBPgQ6at3Qsyb0jAUtY0h2SvppsiSXmlrnfb6QR/+tCgiDGrhwJNDs168VhmGgvb0Ta1Z3SYaECKnIrccq+gSOAnD6nU/JNQoZinuiFv/6rG+fff31P7j+N5/wFHr13Qhsen9btfszv3l6UoV1H2rkTdnOjP0YSmhKNth3I/hBBMdz4VQd2caMHA7fD9aZaStkbwSosn0OCDX8F6ApiyQZzSRyVAQcitBhxCZEVfn74UOPGj77ituf/TiA//FXH//q2KkTrq65zrf9MMjVvJqc6Y1ZLEEmXZRQq14CS/mlQKX5y7XTfAmDGdd9NBNYmtxohIMCAwhU0n4iIE3zncT20u+KmULkrqn99rjDjh+1YOrtv/44x9urN8h6B0/55ZdMunJeWTin9duqr9nZvhq5kiW9VAUiqSwnoC9UClhIPHCpXU5AU7EAw1KRyxrok7OQz+hoaS3KMZeVK2oQkQ7DzELXLbS3VdC1poauFWVkYUcWV184cPC+E08afcrvmgnUby77Jj2Pz6YCKdD8bOqePmsPrMDixYu184afearQ2CiH+18SpoLIZNAyJrSsIUEmKZkp+o+8GfU8JNDs97k8Ar8KEbtQlVC24UxLl7YopGINSDntxAipde4DnLwhXR+BT+rpGIyrEDWBLMtxO8w88+1DTzpj3PBxTZPi8tGtcMEdZ+7ZFq+8M8oFu3qxDx6RLZEJ5rHE7sgP4XoeajVXRlT6TiRb6XJOUyQimgajSerzBtCUM5oS4SWMJv0YBQGydgY1x5Mq4rxVBPON177+1X3G3HPNff/VEeD5N5/ffuLMKde9v2zpt/wwzBEQjASX9kXEuEoj+Xq6j4yTlOBSrBX+gOY1G+7rEpjS8SXMZnJLYGcum0W14kiQSSpzOkceRGHgBa8ee/Axky++dMIvB/8fGNge+NL7Px3SzAUzW2+++7Yru6qV4bl+RbvsdkNVYmTzBvygClsymor0vnUCJwGaGoNmqzDrQNO0NeRyGvpmDZRyNoqFFnR2e1ixvAbEifhP12x0d1XRvryMWlsUuavdP590+LETL7zqwqc/zSzv/+lk0z9OK7AZVCAFmpvBIqansOEq8Mwzz5gXj7zg6FCPb+6OnC2tPnkgq0OxyEcT0NVYehoaGpNAs//2rSgOtBEGVcTClYxmnz4lCTS7OstYvap7LdAMiNH0IVu9gRMiIuU0F1C4AuGAgCZUV3fzLPv4d044ZfLV5139vxvuzHrPI8VxrJw8/cghYSGcwrPBfn4cQiEFupzXhDRsp0xvR3pqcgQO2R4FlDGNmAsJ6JIZzRiqmTCaFDkoU50aVKJI2EVEHLlcDrXAQSDD1lWwUDoCvH/w4EN+OPey+ff+p8q99NZL214+9tLJK7rajlEtI0sMo+v4yGbJ5NuVLXBN0xOPT8md1kFnvZW+ViAUUwIA3ZLEn8S+SKwVEJGc3jTIcZzJmUzfcWFoRux54ZIDhxx47oiZw99qJhEZgczZ99/xQz/yTwsVXiQLsjAOUCpm0VleA8tWkC/l5FpHMb2+IsBAAjQzCqwMvZYB01Yk0ByQN1DK5lAotqK900mAJjNgWQZUVYfTHaKy0ok6ljm/+cbXvjFm/Gnn/n7QoMEfe6yi97zq0iNNK7DxKpACzY1X2/SRe2kFnlzyZOay84eftdrpHJ0b1DoQWV2BnShXNTWGosawyQy8wNB/u1bk+9vwvTLAfGgqR2ufImzzPwPNiDK860CT8r3JVam7s4Ki2YKoGsFGNuZO7GdU86nvfffMEcPPufbdXlrGT3XYJPT46fKHdrv/hYWzHMUZKsBV6a/px4iDWLbL3ZoPV7KZEdxqgNBL2ucyNYfWSYuhWQmj2QCaa3vWNKdJADCIZfZ4qAhwEpJAhSZMKL4e6zXz3W/secgl80fMf54xliBGALscu8uXuRL8qBq7u7nc18jYn0CJ4MRah2BMhaHaqFarMDUjYTXrYLLBUkqrImrfi0Rw9lGgmUBPDjVWJZPJIsjUHzXWhPD5h7vvusd5T81//PlPVeReduf34vesSWOnjPzZ/zx/WbdbKUJXGFNUGDZdTQSI4KNYsuFHroyWpXZ5GEVyThM61gJNSvQioJnP6+ifU9BSzCNf7Iv2dhcfrqiAwUDG0qFBh+pp8Xv/u/If++/0zXNnXTZrg1hg9bKyp4ebVuBTVyAFmp+6hOkDbI4VWLx4ce7y6aNObQs6r0JW/UJsKQoBTbLNITBpmxrMooY+X2hBvp8F3+mWQJNU5+sDzVUru/6F0eTEaLohfDeE8MnmSAARAQgCEwwsIOsbjSIEqwix4IIzz5ox/IzRK5pp/q6xn4jZPHvBsIOrrDLe1/09eRwYYRgnYNIN4dW4jAikWnpVYjcTqyNiNcnmiARAlEcPNQTqjOZHgabBVOlnaRVtVDwHkgrjGligISvycSbMvj508H5jL77i4l98FV+tPf+P5z932fCLF0YmP9AVLiKZ1AMpUFKZBl0x4VZdqMwg/bts+0vFeR1MrgWa1FgXJAaqJ/+sZTPp7IluTVhNhSIlNRNaJJXqXBXa67vvvMvUx+Y+9uPN8XX3/zunW+66pd/M2TdcFRi4INB4nmClahnkv4+IUypUjGzWguN3o1jKQTdNuL4DQXmROkNMFx22mrTVLcDKqAmjWdTQWsgiV+qD9vYaPlxegcIsZDUThjA4q2j/3DL/hRGzLpr3k2aqd3quaQU2ZAVSoLkhq5k+1mZVgXlLluj33DzyondXfXCV1SczKNYjFqsRFI3amQr6blFE67YlKJkYQqrOHZgG0FLMwbINVMo1rFzRCd8jtTRZ8hAjB8loEjjinoBwKGVEhZC5i0wynAQuiPBShVIOXP/BC8+/dOq13732/c2quB/zZBbHi7VXnnthvzdXvjkq0Lz9a0HV8ENPqsvLnTVwR4VXDSWrWas4IEU/dcepnpoJaW+k6KQ6FxJD0tiDZAtJ3U0hT3HiW0nzlPQlmCpnZkkcpEc6mKdCFdp739z34HEffPDPD95672+XR3F0HEUZhmQ0JIlORYJGJhTEkQLGaT9QJjbNgSbCH1KVS7BJALLOVtJ9FEVDEITQNFXO/7qBL9k4Gg2wdAMiFDBUAxZ0YcT634buNeTSe6ff+4tmuvB44403cqdd/J3vr6m0j/JY1IcbMWJiKyGgKiaYdBOIJGutk6LcVMFUFUIRCHgggaZhGWCGgJHTYGU1aEaMQsFAiw1sOagvNNNApRbiw2VlKNxATs3HVmD+fsct9vjh6GHTnv6Y2zX9s7QCaQX+QwVSoJlui7QC/6UCdy9eNHDOgrlnvLfmn5cW+ue2dHkFuZINwwSsoo5BXxoIJcMRR660N7KNGMVSVkYNlrurWLWyA76HjwBNIfO6BVkj1ihlJAGaDT9FeThErjY5AAAgAElEQVSCAJNCrdiqyYw5Z5557uTxp40vN+tijXtixP6/feeVyXpJG8K1UCmXy4i5grDG4Hb7Erg7FbI7SszYuSAPSyaZLkj1OQFNsRZoJjWmRjmxigQwKZIwUaJLgEizmjQ/GcaSKR3Yd+Br5Uq3HQTh9tRdJ2gT8iDpftP8ZayBcYaY04WDAkFWlxJ01pvmDduieroP2SrR82maAUVRUXWqEoiapi4z31WmQCEPV9VA5AaRxaw399hx91unTZr88A79dqg0yz6Yt2hesXPFyjN+/NSjwythdduaCODAA0wFIbHFdGHAGBS6AFRiCTQ1U4VCxDQoRjb8d6CZ06EbsWydf65PDpmMJl/T3RUPH77fBVMUue7Zf9vrK/uOPvToE59uphnYZtlX6Xlu2gqkQHPT1jt9tl5YgR+9+qPC9Jm3frvd75yUaTEHxibZp2goDsig9fMtYGaEOKohRgDbYCgUMzB1A+VyFatWrAOaPs1nSkazATQZUEm8IgloUpsvAT2kNiZRSwxdMVDtqLb3yfWZ950zTxs/bti4T5xc0wtLv/aQyfroxXlPDy1rHZPWuKv31QuKtD4KyjHc7lAKgmplB2FNyFryiJjnGJpO83kJ0JSgs8FoysjKhNVMKE5VpvZQK1u2tOsTmZJpVhh815PteEosIgaScrEJ4ATkTyVBqyrZ6JjGHxpAk5MTFgHZdW+zRL4lXvF0YcEQEfspBIrFomQxgyCQyUFZ25b2TQbThakaf/jGvt+YOvKKq15oJpC5cOHC7Kw7Z4x1Iud0N/IHRiqHK3wEjEPN6BJoaoouXQZoNEJVAcNM4mGJ5SSgSYKgxEMzYTTNrAarDjQLBUtmnffrk4OZieE4PlZ/4ERwMksGb3/ATcd/7Yxnduy/Y7U3v27SY08r0BMqkALNnrAK6TH0+Ao89/pz2QvHXH6Fr7jDiwPzLUZRQ8ugIvJbZMAMytuuAfBgmwoKxRwMTUW57PwL0AxdJn0zI58n84RuDFQ0qahuAM0kHYYsbhL1dMw5NKbD4Hq51ubMufnKOWOGDRu2VpjS4wu3AQ+QBEI//uDePe597J6b46wYWnWrYFyDUwkQ1EI43R48J4QIBKIwlOb6mi4k0CRXICaBZt3Qsg7+Gv6VCjGSlBtO7e96Ug99J9aSxCa1Wk3GkBJjSZnr4HHibRklKT0U1iMBpVAR8xgIGRhXJGBNfp+kEjWM2ikaUeaTGwZIFNYAmMSEk6hJVRRosRqrQlm+9557jZ966aSF22//f08s2oDl3+QPdfCwg6/52ztvXRuJsGTmTPgIEcYCkSqg6bpUlCf2Uew/Ak0Sack6fxRo5lUYhoJi0Ub/Qh6ljIH+A4voXlOJV73v/vUrn9/rurOPu+pn27JtvU1+0ukTphXYDCuQAs3NcFHTU9o4FVj0yqItJ902+UqRic82S2Zpyx22AMsTY+IiCmtQWJgAzbwNQ9Ml0Fy5oh2+C/g1QDKaAUNIqnMvBHdoRpNa5wm4kexZQo+t/S4JOM6QMWwIl7d9ffe9J9w3adEtG+cMe/6jkkBo2NRjDwwsbzbL4itlpwbH8RA6IardngSc0jaK1N8qZIt0faBJv0tuVFkyVG/YD9E8JYFNRYLCZJRBSLBKgIWAIJmn+14E08zKSEw5Gkgtcfr7tYCyzobKNjpNQCRzt0RjSnEPkgNo2BuRKjqfz0sgaxk2/Joj53PzmRLcitOxw7bbjf/RjQvv2GqrrZomv/yWW24xH1z88CVrutZc6fq1AUxTmEcm9YzLbHhKjCKWmdhKSuCigjGWMNa6qUIz6apCyHVrAE0jYwI6TxjNvArTVCXQHFjIYat+/aBBgdMRrR5gf2nUccd8/77UJ7PnvxekR9h7KpACzd6zVumR9oAKELM55f4pFys5fURhUK7EigETmgMeOdCVADYljuQy0BQV3d21ZEazDjQDP8k6DwLyfgwgrY4c6qXSXGBDoJLY3RCIScBIMnMYBoFUHyucrWnJlWZcdPoZc889bkTTzOqtv/QENs+bfdaQKuua2M27hla8qk7g3ekO4FdDaTFEjDGxwgQ0peJYOgYQQCE/y3rmuQQjdaBZj6WURu4yEzL5Pa1FFAVQVMosZ3BqPjL5AgKf5nIl5SyBJrXbG4Iu+jtiPmlNhWQ1CYwmYJNM2qWZEbGmBHc1BtdxoKuGnMdEKOTPLFK69t5t8Ok/mfPwUz1g22+yQ1i0eFHu6pHXDvfgDmcaa/FFCDtrSaso3TLX5cAjlqMMEkiuBzRNi4Q+qhw/IY9NAqPMUEBAU4qBMqoEmoatobVoYWA+i365FvTPbvGW5RcvvvKIW17cZCebPlFagSapQAo0m2Sh09PccBW4741F273wm2ev6eRt31JbolahV5mIXJiaQMbWkM2YlLgtk4FkBKXP4NYZzX8Bmr5ASCppORNITBopzTVpiyOBCflM69SC78LAgf3RXe6UIhFd11cef9yx08489QcLdmTNO0N2z+/nDn3s1ccmd0ddQyIv1gloetRGdwOZg058FrXOE6BJJu5MspxrbwrN8K2bQqCUnkZiEM3HEh4l0EqAhkQ75LXu+hyKpsMPIznTqRLDth7QTNrkBDqTa4QopH+n9Y0l8CSg2Yi/JEGQHJEABQCYCJ0AGT0TOzV3za477Hrriwt/NoklqLgpbr/6869afvL0o999+Kc/GaFl9c97UYBIhFA1Jo3vNRJGCS5rK3Pt5booYApPfFN1gIAmqfcJYBJbTN6oHwWadkGrA00TfWwF/c0+y7/6ub0vuHDIDT9tikKnJ5lWYBNXIAWam7jg6dNtHhVY9NaibX/x++fPblM+vFgYTouIfRh6LBWsWZvYrxjtbZ3oaK9J1XkCNInRZAjrM5rU4o2CSNrpENBUiJwhD8060KQXZyQiZDIWOrrXwLYt2LYpP3ht23znqAOPmXbRd69+cCAbSAOiTXdbsmSJftOvJx3WydtHuqHYu1Z1tVrNgV/14FVcyTYSY0izmYyiQ40EaBIwSW6JYKSRRU6/aQBNYpSpnUqenQrT4Lo+FKZDM0yEZBxPdkXUfg8Tg/iGa0DyPWmb03cecslqSpBJ8591CytpiSRBbpL8E9R86NBhM/sfX9ttz3njxlw/t5mEKDPmzeh78/xbLxCG8oNIjQa5oQfVIpsiJfE5tSy5YmTar5LqR7LNidiH1pNmoil2lIAmicCCOJRCrVhhYLoqIyVlsldWhZ03oGeBvoU8BmmZt3feapcbDzr4vLtSdXnTvYWkJ7yJKpACzU1U6PRpNr8K/OqfT7Xc+Yv5k127+3sRD1TL0pHJasjmDLhBFavWtKO7i4CmAs9RwD0NwlMQeNQ6dyXIpIQbApcy85p8FaWBd5LDTTcaRyNAQq6N9MHKdPqgZcjlsuhban173132ufHk035wd7POlJEa/fnZP93vvbalUxzF/3rVr6JzzWpolCEfcllPxdAhbB2hxhEpAXQDMEiVHPpSPS5jKxum6jwZVbANGxkrK6MtKZOe/C7JG8kLQglOiU0LAw6dWXUGk4zbI/A4SkCnnMlkiIIYppFBpduBqhgScJKxO/07xVZqCqRDQUwiJpevPOygw264fuR1d27fZ/umsbIikdegvbe5NhDeFaqu9IGuytlZLlvi6trsd+l9Ko3vkxlmao/ThUSMCLqmyAsyyjKPmA8nqsIL6GJDgWFnUMyW4IQeMi0ZWK0mYoujj1F69+gvfHPKGXue/ODAgbs25cXa5veunJ5RT6xACjR74qqkx9RrKvD0u/dvfdfPbp+SLZonQo+MfIuOiAWSPVm2fAUqZQ++q8CvqeC+htgloEl2PC44AU2XxgYJWKqJWKSRFLM2MYYYNwIwPGHi1AR8ZnIZtLbkkdPUpXvtOuTqH3533sO9pmgb+EAJqJx8w4kHLiuvmO/w2nZUr5X/eA8FKyfV3xFh96wJihElo3WoATQWgpFquW5npLDEU7Mh7qFWtm1m4FGKkx9C5hgqFGkoaWfEcnaTw1AyoDhtLsLEOYD+rW4YT0/sOT4ydh7lrhrZb0KJdSlWoshKErLwMEIcRlAjZbUeKHPHXD76tgvOuGD1Bi5Rj324mYtm2n/661+//9OfPj4qk7P7M01BzXVkLKisT32ERF53rZ0iqNt/Ee1MqT8x1VOFZWtJ5ChCeNyTjgFkxE4XCaqio6VPq2Q68605uMJZtYU18MZR375+/iFfPKS7xxYoPbC0AptBBVKguRksYnoKn20Fnlp1/xeeeOaBK3P9lPN9pVM1SjraurrRVXbR1ekjcBRE9OUriD1KCIoQOh4isuHxE3D5b0CzPkxIbCYxmdTklRbUJGZROOysLXOdS3kd+WzuvV22GTJ87HdueeKzrcRn9+zEbC4YseCYldVlUzj8HXgUoFYpSwGVLyIolgY9Z8ooII4AGiXJsEQtLpnjOtCUzXRyxFF0mLol1eUENGWKj0Y2VAnDTDcSm5COHBKgUis8mc2kzHNBbXIOWJqFzrYOZM08QjeQHqqFbAERCcICYkopeYi1Dd5p8OSrfnD5Pfvtsl/nZ1fFTfvMc+bMyc15Yv7olZ2rzzFNvT/N1BJQJ1ZY0bWEGW6o9OtAM8GaZLyfCOWI3Y8VjlijJChVMpzycUSiOqeLA5XW3tSlSI/AqxJjdUuu5eaDBx8+f9wx49o27Vmnz5ZWoPkqkALN5lvz9Iw3QgV+vuzeLz3+y4emWn35MYHuqZ21KmvrrKFcpja5IplLms+kiMTQISYzkGCDgkvILJyYNQl46t8bzuIEamT7PFGSyBY6zRSatoF8wUCfgTZNEsatmf7/3GWbvceMOvHGBxmTuYhNd4vjWL3rD/OHzJg9Y46ihTsFcaAQaKF0GMXUYFi6FN8QQNFoVpNADU9Uy4kWnKIrI+ldSjZExIJxzpK8cqZCp7gZOSeYGOtTy1Y+NuWqwwAXlG1OX4naXLKlkYDnuNKeKg6E9NakrPvIF8hnivDdyN2y/6BbFj5+5/XNNP4Qx7FxwbUXXf3oC09coeeNFsZiVnGq0hWAvESZpsL3fTAaWaD0pvWAptRHybZ6DJUAJ7HUBinnmLx/A/DTfTSal9YA3WLIZDIomtmuHbb5yrRxF068aXvWXL6kTfeGkJ5wj6lACjR7zFKkB9LbK/Dc8nk7LP7js6NdtXxcjfu5pavXsEqFI/BURK6QQFO4CdAkdotAplQlN6IPPwI0aR6NgA8BTZmRXfcFJPBJzIxVUGCWYhRbbeRNE5bIvL3HdvtfN+z4C59o1g/RN954wxhx9+VHvbX0r2MCzd851oVGqnPyTdT0xK9UUSj6kQAM+WhGsrYSxxDDSSwaTwQ9UrBDmeUk+1EUqfhXGSmgE6NwyrunvGzfcVGpRnBdBi50iNgEl8bvJAJzkLVsBJ4Pgv/EaFI7P2PmENV415atW93/td13GXnbuNuaIoGGrKmmz5++7YJ77rqoyt0zuMb7EOMYkPcXMZSSyYzAkRixJ4yxXB15oZXcGoxmlFwwaERBJ2wml2lL9fVTGGJDgUbetoUMuB9UjFC/9ZSjT2/ahK3e/h6bHn/vrEAKNHvnuqVH3UMr8FL7XVs9+MyDEzp517CK79qdZCYeAOF6jCavEdCMJNCU6mSJc9YxmongIfnvhNFMFMqyrUvuOBJ8KtCzDNmBGuw8iVdilOwCNN/609e+esD4YUdc9myzJpssfm+xNW32pCP/tvzNa33m7AYLmmWTLVQCLmmej+b2yDpHCqzqKnQJ7JGoyBuxkSIkbXnCZGoENAn180imAuXzBnbeYVusWbkKHyxtQ3uXD85tCGYhjICQZi9VRcZXEhvqO54EmSrX4ZaD2oF7HzRz5iVTJjVL4g/N0s59dO62N98659qOSsepiqnaZEVUrlVQLOalSpz2NbW8qf7/GWgSk8nqjCaHYiQZ52Q/RV5TNNMZRBTnGlOjAMzQUCoV4Ndqa76+29fu2HebfSdeMeyKpjG/76Fvk+lhNVkFUqDZZAuenu7Gr8CcxeN2e+lPi8f6hnN0h9OluWEILwC4r4DXgMihVCCesGX1EKD187DXB5oSgiqKBJeSyZEsT52BMyLoJYF8Hx3FkgZd5cgZVswcY8mQrx4y4aojfvAcYzs2ZTb64sWLtclPTjjhvba/jwng7KhYQjFsFdT9pmQZaoVTTckqiupKwITwS117ItlImsukiQUCpcRyUoPc1HXEBDQ1SoCysMN2W6JjTRs+XF5GR1eAIDIko+lzApqhvECIAg86TYXSfKZRgtPlV5zu8Imf3PfIiEN32Hf5xt+RPeMZfjh76o633TPnYujx6dCQhUqtbgbXrcms94pTkSBf1wnYKzIHntZp/VvDVpRmNGMlBDNpdEFAhyXtp2g2NhAhQjm3CWmL5Fe9jpJWuOPZ+c9Maqas+J6x6ulRpBVI+hHpLa1AWoENWAFibu7/y+ydHvvZw9e1Rx3DHOGjFglwyjl3QC1TCTTluGW9G9gAmgnITBjOxs+NFnoCOpNUGSEVKxx2KwOMAFsMKkEzQjB4yGpZbkWtr+32haEjrz129i824Kn1qodatHSRPXP81GM7g1UTQt3b3syp0g1AsIQllkmGNP8nleKJpyZ1zCWYJ1EPCUoiIe2ICHBqCoOh6xBhAOI+81kDuhpJUQ+1zR2fLI8MhOQgUEesUejD0jSEjg+NG3A7ozX77HHAwgOHfuOOy4694J1mmaedftesvW9fOG9Ml9P5TcVUTDJR5zyUvpi2YcLxHTnO0ACSkUj8MmPKn1/vtv58JldDKHYyY2vEFtSY2u6QjGhIrgLkpi9YW8Es/uisI0+7dezZY99rJgP8XvViTQ92s65ACjQ36+VNT+6zrMBz7/1kh7E3X3ePyIm9fSWG60XgboyQ5jWrom7Q3jjCxizafz/ihuKZ/ipWfKiWj2zJQK4lDyMH6GYAwwAsYQgjKCwZst1hFww/Zvprn2UdPsvnfubtZ8xxk68+cEVt+YL8wMznYJJwhJT8yQiCNMdnSZuWfBkJaMrWrfTBRAI0yW2TkTWR7M4mRJyEpRwRiyBiBWGkgUcaokiD4FqSXEOq9CiExmMoPkNYjfyhO+3/wGXfGzly6HZDm8bC6PpZE09e9MRDl3f73YO5FmlcierzlCSOStjLhNpP6t+40JLfKX+eFovmLWl8RNp80ZwtxSkJxAapywMJ4m3DQhSESS69oSHworLw2IJLzrtq5sQzRq9gFIie3tIKpBXY5BVIgeYmL3n6hM1SARI+HDJ8v/3LrHuqr/O9CcB0dXRD4Rq0SEdALJeyjsFs1GUdq/mvlVqbfV7/dYwATHVgF3XkW4owChq0TADdjGCoMSxh84LY4uVdthl65RVH3bCkWer+0fMksDnx5tHfX1ldNr44INMijBCVShcKxZwEhJLBrDPJ1EKXzKYEmqRKTx6NAKmCWBqsayopyoWc8QwZo3AgCK6DR8TSqTJNKBZ0IcGhkcm4G6Gg5+B3Bv885pvfvuLGi257tBnWgpj9o04/9qR3P3xvfNnt2p5ZihoigFC5zJ0nVbkKs87qJxjw34FmMuaQ/J5WJ5mrVWkhdHoFhLDztrwYcMpVCVkNpsOp+p5w+U+uOOfS0ePPn/ZBM9Q7Pce0Aj21AinQ7Kkrkx7XZlOBO39/55fv/sk9Uztr7UfX3KpGtjdety89HgUZgDdSaegH8slc2z7/d6D5L8nXUsZchZHTkCnasEsW1Cz5CQoYFoet6ijoBaG62T/s8rl9Lx5+9LQlzcrqLF69ODf5xutOXV75YKSaEZ9XrFiG/UijdWmVU7c3IhqT+EqKkVwPaFKeObXZSbluUEuX3DijCCHFTApF2hnRUib+mXFikSRiaEJAFwoUHyhZfYTTxl/59pGnjj713FN/u7k6A9AF1o+eenjnKTMmX9PW1XakaqlFzVZZEAdwIweaoUIzif0lp/skCasxrLx2lITVGX7ymJUXAgnQFIqQbKYqg5oUqJYB13egGOS4GSOOOKqry+7A/MAfn3LEySMnD5+1YrN5I0lPJK1AL61ACjR76cKlh927KjDlqenfvPNH8yeYGW2PilM1RBjD0MincZ3lZdIiTIY2G8AnYTHpK3mprpvpJOBDihUfii5g5lUJNPW8Bs2OJatpGgw6EyiZrb7q5J/dcav9Jlx51GGvM3YQKYua7rZk+ZOZMbdMOa09bBsRG9E2jqgo5K9IQLMBdBp2OtKLkQAQJ4spIb+ISSNbKd0gcVYyvylZzJi8M8kqKREQJRGUxGjG5A8PJQT65vvAjG3U2gN0rKi8HbmYMfKKax65+FsXt29OC/H222+bL7/528Gjx4+6QbXUfXRTA1cECGTKeE5GwisyZk8YTIUUO2stjMS6/V0HmnLWVbL+CciULgEqAf5kYFljhgwxcMMqNJppCCJfdZWfnH7keefPuHpGGiu5OW2u9Fx6bQVSoNlrly498N5UgcWLF1tPvfXsAb/74ytXLF35wYG6aRjExFBEXnKrK8rrH8AN3/ZGu3xtNGXjpOs9RgKbnPnQzFC20CnL2cioUM1YioOiqIL+rX2QUwp+bVX87IGDj5/8g/0OeK1ZwSbl09+0YOaZH1Y/vCTO8m1CtaZwNViXbigtpepJPwR2iKkUvN5ij+V6rQWaoQCLVMlmCkEenMSQkjVP4sdJEvbI82WUZRzEiH0GTdjwyEe1xlebsXnPZedd/rMvb/XF1478+pG9OtucWMyFP124041zbty3Uu0+R7X1PWu+S1OsElRSbjlZQpHXJbXMqT5kzE6k5r+w9HVHhbgBNOsgVHqcEtAk5K4SoxlDYRqYUKVoyA9q0KE4osaf+87xp1178+U3/603vT+kx5pWYHOuQAo0N+fVTc+tx1XgzufvHDx7wew53W73Xlbeghe40lKnobZNGM24brOzTruw1rZaRh0SdZa8dOmbiEPEqoNMQUO+aMMqaFBtQNEDZHIKdE1A+DH62APd6jI8M2S3Q8cOP2zqm82qwH3qz/e33Pfsj7/z9+V/uQ5Fd5DQEqApW7T11nmiGlcQC5q75BJsxmT0bqjQdUVOC9IsJkICo2SVRKwnxSeKJNaSvDgFk7Odfs2DqdnSM1X4FEHKoTENtQ4nVDz9rf6FAY9cM3zUojMO+c5fe9yG/RgHRBdRN903+dC/vvP2RVW/NtTK2dmonppEym+qm5DepAlbTxic6k3scBhSsda1ztcyy+sBzXUgk4ZlyTxfgGnJiIkWk6I/AuNxjVfDx8876/zpU8+f+udm3dsfY7nSP0krsMkrkALNTV7y9AmbvQKHnnXoMX9+988z7RZ7O0agpR6nJ+siZzQTP8dGUg3ZtxBgods69kc2zhES5CFTd8ahGwKZgoJcSYWRE4ARQbWYNCQv5vKIPQUZXnKdNvbU0D0Pu/6qw6a81axrseiNRbm7H5190erovXFcd61GBKUiZzOTryS/nBhNEv4Q+BfJfCG1zslik3rlAbGZiRUSAUxqmUsDfpo9FAzcJ5oT0sIn9JOMe0ECJJGA1LhqxH5FlL+87Zd/ufMOOz5ywsEnvHDovof2Cm9NivwcOe3Snf7x/lun/PaPfzjatI0vqVlTK9fKiGjMgBhLkVhJCRr9ICciRqIqVc5Sks8okz3whNH/1+9Kci1Vn52NVWqZE9CMoaiUYV7vAHABneu+7hhPf/f4UydOuWQKgcymjGBt1tdyet49vwIp0Oz5a5Qe4WZWAYpJ/N3S3+099eap00IrGhKRCpdmz2RKTd0rk3AOWe5QRKKkLuvJQfVaEFdGYIeUzzJrmxg5JYSVEci2KDDzAMjqyFJBNpC5fEayP1pkQji6F5a1F/ff4/ALrjxs0tLNrLwf+3QWdy4uXTfjohGhVrmMqbDJb4qy0BtZ2SQIotlYOY/Jaa4QUHUCmoklUkTzmJTuRN/p3+vxlQSoiAklBlOJVWmNVC3XkNFN8DBE6PrUY5expCzMQIeNyOGhGrO2rQdu/WZrvvUX+XyfR3508109tv178RXnHLu8bdXhb/7jT183ctr2fhhkYxWs2ykjW8zD54EEm7RvCY+TAI6QI9WE2FwJNuWIAf06mZFN7KXWdyCiF0P9I0pNfE9l61yjv+Nyzysh/KgrfP68k743YcplM/7IGGvK+eOPvenTP0wr8BlUIAWan0HR06dMK0AzbXsetueBH4rl80SGfbGlmGdOtYKcZUE3VJQrFdiFDAIeJXN/9VYiAUyZ1133fowCskiqc0HEfBocmbyGDCUFZQQUPQIJXgyDIhh1GJoJCA2BI4KwW3lg710Ovmz8kbf26vnAT7ObFi9/su+0+ZOvdHn3pVz37FAJGNnmOEEo60WCH/LbJAaOmGWm6tB1k/Tna9Xmch6TQFMYSEaToirJy5HWiqg1HjHEZHnEGcgLKQ4EREAemwyxrwJckznoEoxx8NCLfJMZS3PZ7G2H7rPXwpvG3l3tCQAqjmNt4q1jtv7lyz+/vFrpOMUNvZyIY90NXGZYpgSFNd9BrCkQCkNImfCqLscMklkQBpo1pvNkgoEJYn2T8Q8yXyd/TU6+pAQ2lST6U/69SLLpwyiAnTVQ8SrIt2QRVoLQquZ+dcIhJ147c/TMpnVU+DT7P71vWoFNUYEUaG6KKqfPkVbgP1RgyZIlmavnjzx+lbPimsBzv6rp0OV8ZhzBtA1016pSfEI2LgQ0E0CT2L2QaTVEjDgMpO2OnBlkAmTZY2YUZAq6NHDXjAiayaFbNFvIksdjJMgIEVbguR9Gj5yw3yljrjpm+vvNOtf2ytJnW6ffPe3i9mDFRaHp9eV6pESKgOt70hmA4ifJrojqrWqGzNWmFrBUmZO9EbGZfoiYh7AMErhEyRe12yUgBQS1yYlri5S6MIh+jhH5hF9ViJCYPAJeMXjAZaZ63spwv1p7p5QrPHXEwcc8fvxRRy8bOLDU1V7itcFscLixX68Z49AAACAASURBVFTUGv/LB78uGLFR+tkLz2/9+JOLTgm4c7xqs76uW2HkXu/5pLxfN38pWUo1qRMxml4Uyr3bYIflCIggwEkkJiHMpEW+PtAklXrDRJ/4yYyVlfUk4E+gP5M3sbp9Dc8we/HZ3zx7xORrmjeQYGPvgfTx0wpsiAqkQHNDVDF9jLQCn6ICI+8Y+Y2fPPbwNC2j7M6VUKWYRGohKromxRKkqpXsGKdkFEpFoR6ikP+ty4QbAUF2PPXWo2rEsHKqFAVZdgzV5NAMQCe7I0uX7BAxdVE1RtCuulZYWjTsqPPGnT3kgvc/xWn06rs+986j/e954s7vvdf99x+oBWxZi8qMmOWoPmOJMBEK0ZqoOglcCERGUGWKkJSbo5gvoG/fvli+bAWqjgOfmMtYR8SZtEEisMkaQDOAzLrnXixnF8keSTJ9dP0QRfLiIWtaUIVAzrJR7apWdbD3VcVc3JJref2qy678ezZXfO/AvY/4cENfILyz8uX+77/1zhfvumfB1l5QG7qmo+0QRVM/H2uxDTVEt9MNTQMCESMUJjTVRuC4UJkCDQS8IyiqBjcKwA1idRk4XShJ0U/CapL1U2MWlkZEaL9zsj0iu3xZWxoFSWIoSaWeMS2YuiWfw3Vdbqja6yd96zvfv/F7N/6hV2+89ODTCjRBBVKg2QSLnJ5iz67AokWL1PlPzjlnWdeHV8eZ+IuxKRSK1SPah+b7ZJuxnoneOBP5gRzHkvmiti59iNOHdURehSqHmdFkC90uKLKdrpkxdAKblg7D0JI5RA8QjomuD2vdQwcfcPvOW+126xlDhi/f0MClZ1d/3dH9P/beA9yyqjwff1fb9ZTbpw8zwwwdUaqKDcUGRjEo0V/0r4m9F7AgqAFFxWis8adYiBoTA6JBBVHRiVLUiEaQoQ0wzMC0O7eeutva6/98a99BEn+JEgZn5t51nuc8t52zz17v2vfe93zf977v1fd9c/iiyz7/ps3TG1/HIz3Y110rXaG5QhL92JvidkazFBQ9mcATRBgzS4BWrDgAy5Ysw29u/C1mZ7rIC4NMU/42nyOawh7HWh09kGgWbE59DdD0IlVGab8jz0MgBfJ+gkYc2UpnzQ+h87KYnW7vGK4N/tsJxx13zWGHPGJHo1mbQmHaQuS71q5dNHH44Wdkfwj39ZvWB35vV1Qks8u7vdmG70XNLMuGf3Dl946/6+5NTwc3y8qyDJM8hfI99IsEaZ5YeyGKeJxqd5FAQckQZTdBAAFlmCWFjcEBTM7MYirtIq0mBlBYL9g5sknlYDLGf0DkJF3P9j73hqka6yxtJTOQClmSw+d+Lkp+wylPO/UDf3/m33/3D63R/dwh4BDY+wg4orn398CdgUMAV//i6uH3fuzck6f19Lm5lx3BfJKdU8UMRCxsBUhRHAonEQql2ZAwomq1EtGkqhH96yaiqQ21ygG/rhA3PZsUpAIimuQDKeD5slLwaoX+dAHFIkztnNolsvifTjzqKR/4yP/32QWTw/1fL731k1cu/8QXPvLmre07XxkMiHqSJ9XIAmWZk+hZCXAFMKlRmj586gHTHG1RYHBgGGNjS3HH7XchSTU0ZaDnAgUlB+UkHBIwJB6iz6lSSh8TIpbMkkgiWZL+IusSnJWWZPqCox6GoFlcey2kGUIvgkfzo2lWsjzv1Wu1XWmaTvtStLxAjA82GtsOPviQmXp9JPO8UDOJbGBUtetDCiJM6kmRBa3ZNGh3ZgbKPBncsmXTyp3bJxut6V4TpRjWOauZksksKyCEsqp7qtBal3Qm0M9y9PoJ/HqMGV118FmvQB0SgWY4YPkKrD5wDbZPTOJXt92CPjPoG1NFddqrlIOE43QrqJNO9fqymt20an9r21VUDgyS2wqyMByB9HV/Or3+ec9+/gc+8Za/+xFj7GEfH3B/mhwCDoGHjoAjmg8dQ3cEh8AeQWD9+vXyPV895zmbxu+5KBz0hvKybys5nFJmGJGQataNvBqpEsQl5WpXbdvdRJNIUU4tXY/mMRlimtWMYO9CURsd8INKOU1iCwkfE7ta8GWM1nh/ViX1T1z7kZvPW6hRlbSR68evWPyJL33oHeOdra9nkZE5z1HoytuUC2FHEBgvbO42LzP4noc8yZFnGvV6A1MzHUpFR57Bks1SSzufWZFNmqutiKWtbvblHNHMLaGlPWZlCcErohlS+77fh5IcoZJVazovILkCNyUN9drH0QyjJxmYKAx0oX0/zHVhdFaUZdxUetXBY+mKtSOQUebD05KJQMJARcoTm+7azLZs3on2VAZuAvvGo9fNwJhEq9MBl6ryBlUKrXYPYD6y3KDgHD1JoQAZVAZEmkHlJQ5YvAxLV6zEjqkp3LZlM/qsRJeIJinL7w8aqOy6ck4qKAFB4JaiEkTZ8IKqskmZ6ISLJ7yyP9O78dUvfvV5L33VS6+ar/Gde+QPiTuIQ2AfQ8ARzX1sQ9zpLGwEvn/j9+M3v/eN70hZ59X1oWBUFynCgMOTAmmRI0mzah6TympU+bGzbtW8G5li23lN26GkapCGigRCaqHXhW2h0/d8Ol6gICRDkWlkZCKekfVRgGyqnD1y5SPPveg1l356Ie/E1XdfvujDn3/feXnUfVWieuiDVNHVvKxPVU1qA5OJOzQC5SHXBkmSgQLUSaBOSvOCPjHSfl6SEIhIJhHOrLyfaOpEgmuBIsssWaTWOU0zSmEQkksAjU+YAoFSNLxpySYRTdq3gbiOopegFviVVyUpi0wKqVhlv1RUojKvxrHqkGGsWDuE0usiL7uQQQwlA0Sqjttv2YR77twBxeqYmcrBdJXYk/TTylRdF+h2u3YmU5DxPPORpox0TeizFAWR7YJB5CVkTi1/mtv00ElS9JhBau8Mqa1nVp6aNA5C8wGFldszW7G03yNkrVVXZchO13Qtjg0yduszT37WOWe++U1XrWark4V8bbq1OwT2NwQc0dzfdsyd77xH4Pp7rw/f8Z63nNrNJj7AvfzAwZE693yO2XYbs50+tBVP+Chy8hI09h+zVT/b+EMSBRFElCldgAdVVZNU6EQ0ye5IBkAQeVUnlDFLNPtdDparytS9jFoHDq775FvfcMH7F3Ll6Lod3x87/zPnvrWrWn/V452RQuSc05yrUpCmSgMigkcV5t1WRkVOdkhAntFsoW+xtb6a1DLPSmtzZK2N8tJWNos+WRsJFHkOneWWwFKpkXK7Y1+RZh2B5Mj6PUsoma7U15WJqkZNSJRZbgmwpNlJUULM+ZXTPC6NWZBx/6qDh7HmiDGIKEHG+vD8GEoFMIWEySV+ds1N6M4aFP0AzARIusSMyaYpQafXQRzHyA1Dr5sjKwUCr4mJVgvw6SrLwbMSvABC6dlRDyLdMgiRlAVNCNjqJ81okijIFjVJxG/jUwt7DVoV+lzcJGFAd6LzHs19aNzx9Cc946zPvOMz31vIlfZ5/4fPLXDeIuCI5rzdWrew/RmBn2+8snHBx9/319snN795cElteX2oJiZa05icbaOgKlkpwUwlEiKySa1NaxhOhNPOwVVCCjK4ViGzOehBDDuvyT0DL+TwfQFOYpZSIG0z5FYBTe1coBkM7VgzevAHX/fycy4+hB3S3p+xfCjn/sOpHzY//bnz/3pcb3tjz8yuUJESNDNI84v1WrPyObVRQEBGaTekHqcBWENVSkoAEuA0g5mWlmjaqibtU6ahU1KdVxGWVKUs88JaKXmcIZASvmK2Na64se4Cgu5kUm6V2zSuaxCgegyJwigrSlriRiIyejPC7HhFwROsOnQEqw4dQzhcwsgMZIpFWeNUSSwzhltu2oL7Ns3CZDGyhOyWKHrTWKJpRzV0YYlmqYUVOBW5RE6Ke55BkwBtLh3JmtcTt7bpSnMemYaRk5O9W/GPJZs0j6ntWpQnbRSrDSyYSwLiJUcoQ4Q8vO0xRz/6rC+e/+UrHso+uuc6BBwCew8BRzT3HvbulR0C/yMCP/rNJcs+9YWPPm9nb+src5YezEIpprsJuPKh/Dr67cSKR/4r0bT1zLnfbJrYlD6HXxPwY25nNStxEM1wkom7gBI+8m5VhaO5zaSfW6LRUIObDz/gqI8//1kv++oJjRMmF+p2XbP5u4OfufzTZ2xrb3qF9pKjeKQkJUgmOrOzriTFovYytYANU0iS1PqUKuaDzxFNk5LSnGInDWm8UGQFyoxbH01DWelEMulewBJNapsT0ZTGWKLpAdaYn5ck+q5a42StFPDSPobcCSQnoknkrfqahGMkGMtFH0tX13DQ0csRDZMAJ7WVRRUqeHTOhcCmOyZw98YJ9Gck8lRB07nlxsZEFmVhrbT+K9EkAmpMDs1ySyJJ7GMFP5ZYVlnvNHFJH4l82zFMSu0sySWhWoMvaO5zBmHsW8Ja6AxxGMFjvkln843PfOIz3/6F8y++fKFee27dDoH5gIAjmvNhF90a5i0C119/SXjB1y544bbZbeelvFwWNhusrzVmWn0MNIeQ93v2v3cVTlN5Mla3KkOdbozaqaFBWBNQMYMXkiCIbI+qxJXIj0jBjH4vJzm1Tbzp59rODoY8vu+QZYde+LoXnf0Ph7PDO/MW6D+wsEs2XOJt3vHrx62/4Qdn9UTvmTz2kegOsrJtCTv3FNI8QyfJILiq1Npz5JLnAkiBMqXIxMq4ndrLOq0M28k+iQzbSblO2hiPc0RSWpEPtc5JNuPbqiXZH9GUI7WVKTVHwxM010l+qtJWPIloCks4pSVyNsbUS1Eb0TjmCYcgHNXIRQIjpCXJit6pFAKTOzPctmEHxrf0ofMAeUIVWfLENFYIRUSTCrK7K5q6IDW9AS9zKz4jDp2yEhljc+pyao9XkZM0e0mVWCqfEzmlKjB9SRiVSQHfV6CjKJ9stzT67V4RyHDjaU997vmffsf/vdRlly/U3zq37vmCgCOa82Un3TrmLQLX3nZ5/ewPvP1ts2X3DYViA1owZHPtWkkDbw8gmvRP3RLOuXk3IhuaZuh8apeTiTtHUOPwqaLpkfE4Qz2K7RBhr5cgJ0U0kU1SAnNlZwK9zLv7+LWPPufPn/vyy/4UiTT78kb+610XH/nxL3/sQt6Uj+vqmXp9iKOXz6JP8ZOCw9ioRGo1l2A03lAISy7JTLJMyFCSTNsZ8sygsFGUlDpUEU+a2yTbH4+LimhyMkDXkKy0FU1LJIlkkvod9DNSY5c26JKIpZ3tZJWJP6nXLTOlSUg/A486OPHpj0B9CUPGuzA0oCsBT0iYUiHtStxy473YdPskdB4i7ysUdC2QqInSiuaIJn2d6coXlL7PyPifGUs0E1YiAc1illZtT9ehdSkiwknvhOhsbBqlVftYV83Yq6HbaiMvc9QaMbrtTs8X3nXPeeZpF5374ldcuXTpsb19+Xpw5+YQcAj8YQQc0fzDGLlHOAT2OgI/3Xjl6BvOftOrtW/eLGp8qKfJOJvanlRmInKp7Xzf75S7leiC/tmTtyZVNe1cZl1UqUExVbSMJSNh5CHwYFXK/dSgR7GCRlqBCYVw11UE1uWbDl9x1Ic+esaXLtrrYOzlE7j8zq+u/cxXP3uyaBavbettR8aDHvo6QzdPwX2FXkbV4RQ+5coXRCypokm55twSTdLnkKp799xmSY5EFEFZaEjN4QuJkNTtJO4hT1QimjR3SX5EjIYbqrYzFSMrUkktdg7FGBQnX1S6NDg4J29VDQQpCjmBxz/zURg+wLNEU0tqsAO+H8OUJAiKccet23D7zVuRdCSKvrBkMs1LSyjp2kh1aWeBSX1e0DlTy5/mNUsGcofPUNrZT5rdLGn2s6zSjiqFfmmPYWuxkiy6KlU+JSU1a00kvX5RFMWdEvLrL3z+C7/58te//I6FLETby5e4e3mHwB5FwBHNPQqnO5hD4OFD4IZt60deeeYb3t4X/TeWfuYZYVhpq0XEKHVlLD6XI135ERKZoDvF+mmIAFVVM66qmiqS4D4D8UmpKgV1VgBZStGCVCczNmqQ7HtIUVxDbecJBz/x1LOf/KEFH/u30Wz0v3f915/4nZ987fxEdI/xaqEoFdhsn6qFhKePfrdnq5dEpkhwU6akiKmENrsrmrsFQruJpiork/aQPDSpVT5HNCX5qFqiWVU1aa9oh5WgtjSzBJR+5lGVk9PnRDTnxidUH6mcxAlPPgzLD2oglT2UnCrXRDR9G5PJdITtW1q445btGN/eQ9rlKDKBXMMSTfIIzYy2bXSycqKZ1KIk/04PhSHl/e9mL20KEAUJWPEQ7HnYKvtcVdPaFhHxpAou88mQs0y6/X975lOe/pa//dDf3rUES/oLNZ3q4fvr4Y7sENh7CDiiufewd6/sEHjQCPzgth8sffeH3/aOXen2F4hIjJhScqoOsd0VTepK2shKbgUYVoQxlx/NiEx6VNkEooYPP5Z2dlNTFYxMyAVV24ggCBjtWfJA2d7aZIhihZqKTK2obTxq+XFn/8UTXvu9FWxF/0EvYJ494fM3vnf5dTf94mVbdtz3l8bjKzNR+GmZ2flYEtJQK9wSTaoS21QgajtT67ya0TRZlc9oFeq6hCpJIMMRKYmAGSgUUChtVZNa5VTFpLY4dcUFkU9hw0fhQ0JxAd+20yU8Vs2JkuVVwXsovBkc+ZjVWH34CAovtyMTJQ1OyhycEdEM0G1zbLpjEpvuGEdrurTq86JUKAqBPK8qmpZ00txmqZGXDKmhFnrFIa2Hq3U/oAwByis31tKomBvzsIpyOkZRUMVVe17YnZnt/nb18oP++RGHHPq1f/ibf5iZZ5eHW45DwCFAOgGHgkPAIbB/IfD9O7859uFP/+2r7hnf/BoeqMWlMcy2SEmcQRVOQ2rfKnmF/tkb64VD9xKM55ABQ70Rwa9JmDCHCBiCqDL9zrKsigHUNGsIGC5s5dPwFPUwwFhtMWp64J5Vg4e9+9mPfeGlrr1ZXTsfu+78x3zze998Fa/zU3jIRifaEwjrAXSW2pEGO49JgYlZRTTp64La6RndaUazAM+1NWwPqaIpBAKypqKKJpFNSzTnBEGWZHJITglC1FonVTqHzxl8UnJzmu/07IytNgap6aL0elj3qGU48FFLUQYJSklEk5Q6OaRUMDoAK2Ns3TSNm2+6F1O7CqR9gSzzkRPRzAxSrecIJn0kuyODflmJx6y1FhHNubsm4klvgKSwIQN0TVGEapmXJk+LbhgGNw41hv/1kMOO+spX/+arCzbydP/6y+PO1iHwv0PAEc3/HW7uWQ6BvYrAVTdcteTDn7vg7O3Ztpd2dKseeEGlZM40Ai+0ghSb/GMKGKGtAIN8ComccDIDDyPEAwHUQIlCkgm4gFA0l0nzc7BtzZxm7Li0MYBCMYRhiGajgUbcMM1w4GeL2PJzn3jUs69d6AKh3RfCF6/9Yv3Wbb9+xa9v++WLTFwcPJtNRWRm7nkSvU7fRk1yrVD0iHgaeDxG0eXod3fnmCeQRYmheoSQWuNFDo9RNZMea2wVk5OdFVU6qWVOrW9OinSyONIImEbNkwgZh88UfOnZaiOZovd4B8sPHcPqo5dBDmtkXoJM0xxpgLJg8FSMMhXotAw23bULt/x2G5KujzyP0emQIr6KoOz2W8jKvo0z7RFZRg291KBWq2GmNWlb5HS9JEliPTyzJIcvQ+snmrTTrsn4XevWHPSTRx5xzMUffecnb3QG7Hv1z4h7cYfAnwQBRzT/JDC7F3EI7HkEvn7N1w/62FcufGvXzL4oSfJY2lSWgrqTVshD/o6Ghitt7ApldZfWi5FamFEQIhrwIBslmK8hKO7QV2B2rk9XRNO6HXLwORJKVc+4ESOq+4iiMB0Ri647IFvz8Sc+4rQfuMpmtb/Xm+vDO35703E3b/zVib+6/YanZUiOL5iOyPqI5hx1XlkPJd0caSeHQAzy2OTWKqiEZzRkWSIwpMiulORENK3Ah4gmTd0SyRQ0lwlE1DbnJXym4fMCsQQichKQPmpRbNvYJBybyVsYWj2EdcevgiCiGfaQI4MsAxuTSW9OrHVRyjC+vY9bb7oX27YlSHshitxHSr6apUFapihMH6VJ0c9K5LpmCSd51FNLPIwDm49Otlndbh+Bisjvtcu1d2vNq3/jDX/9phvWrj785pMfffLOPf8b4Y7oEHAI7IsIOKK5L+6KOyeHwB+JwL/+9l9XXPCRc8/uZv3X2AE+wdFLugiiCGmegFM6jBVjaJsUZJXIvLRVtqAhoeqlbZ17lIm9m2hSu51MkawhNwOjSifNDMYB6vUYYc0joomm1yyCGe/GYbb0da8/9j2/+CNPeUE8jGJE7+vcvvbKH33vlDvuue0lqckP4aFi/byPJKd8cG39S7u7epDkW9rtQZUlIulB6BJ1pdAIAug0gUfpOWRpxCpplyTbIyns92JWwhfUWs8RihyxLBFLhtF6HcODQ1YoNtWdwc7OJIKxEIedeCj4gEEWpXY211oQgSIlPZiSw5Q+um2NW2/aig03b0PaC5DnNaSpQEYzpuSTqTNkeR9U5DTGB1cBJqdmEEUxkqxAnpOXp0/pSEVrqnv3i//yJZ85+ohjrxvOF9980kknuZzyBfEb4BbpEPgdAo5ouqvBIbCfI/Cd33xn2Rvf8aovNkYGntrOWlwEEiWvLGkkV1BCzHlrUqmztASD2pseJQXVDFQkEEUBpC/BrEkjeW8SMQXyUkNIUqcrO8fZaDQQ1kLEcYg6Jbik0Ml48W8r5CGvff0J77pjP4dyj5/+hvENtQs/c/7SO8fvfuVEZ/o5A0uaB0x1pxXzgOmJacQitAKgtN+HMAaR8OysJc1oIstsQhB5aHo0d7u7skl2RhRRyehx1FrP4LEUgSzQUCUaHsfYwCCWjI4gKwwmZiaxoz0JHTMc8fjDIYYFdEjG7VSzNlYE5tGcJrW9Kd608HD3nTtx841b0G0ptGZJvBSg0B45MFkimeRkaEQe7AozM7OI4ibSpECaGIRBI5+Z7t4EeN950V/89VV/9cq/uskJx/b4peUO6BDYbxBwRHO/2Sp3og6B/x6Bb9/w7ZVnv/+s80STv6Bb9AJO0YhaQ5QUTUiJKzYUHVAGmmWAR3ZHVMmkeEqJuBbZhBtqgRLZpDY7VUCJinAhrPo8jCPUmg3E9Qi1WoS4FqBIOuCp0tMb042L+erXn/eMC3/srGl+f5/IDmnjnRsbF37qwsd1TOf/dIve44zRw7woZdrpMZ3nVXSk1og8D7XAB/IEkVS2fW4jKKmaSR8Fg8dElYkuaEsLeDxHJAvUfYO64hisxRhpNpHmBpOzk5hMWuirHIedeCTCJSF5VSFjBQyXtgquBI1b0KAEA4OH6akEW+6ZxM2/uQ+TEwWYqaPQPvp9A0GRpbq0wjFKlJIyKE3J86nJzn1Ll66+arCx6Ovnnnvhbw4bJXvNw3J3Pbi/XA6BhY2AI5oLe//d6ucRAt/7j2+teu+nzj9/Z3v8+SqSAc1bImeWaNKNtOmWaFIlS5DaHPA8MnD3EMYeZECCIBJ90DAgNc8pk9rY1jkJO/woRL1BRLNmiSapqvOii6JbYGZLqvNt5tojh45+87tOee9vXWzgf39hGWPYqe889fFpkZ4xPr7j5G6nNaw4q0vBPWY0821bvEQgOaShiMkqGeiB85qk4KbWeaU0L6F4jlACDZ9Z/00SE0VeYKdsW70u2qaPRKRY+ahVGF0zBjkgkfECBWe2Ys2s+pyU7OTJSmbtEq0ZjV/+/HZsu7eFIovR7TJQ4iljJBLSmkH1da5bzXhws1Lhel+Fn/vqJ6/eMo9+pdxSHAIOgT2AgCOaewBEdwiHwL6CwJd++rmjL/raRefOJq2n5aaI6bwUr9qiVKVkysDsbp97BpREGNR8RDUf0heQPgOfq2xShjV5cHIiIp6HIAxRb1LrPLat8ziOrU/nxM4JZK0cya406W1Jvn/E4kd+5PXPf/OvXLv0D18V53zhnON3TUwes2P7fY+4Y+Oth3KmVzQb0WDabTfrtYBLRvOXhU0G2u2lSZVMqmoS0SShUCjpcwOPFYikQEQznJq8Njk4k+gXGXJRoM27GF49hAOOXIlwNEDCE1DquB8p5EXfkkxfUSQlPTdAlijcvmGbtTuaGM/BTJwq0Zju9vSkMfzWg9YdeXtNDt541NHH/ez0k15x3x9erXuEQ8AhsBARcERzIe66W/O8RuAfb7j4yM9/5Yvv3j65/c+YNAEjz0QimtBgVlVCAUIFuGTWtoiM20ngowIBRWQzqlroRDTJ8Jv7AsLzEcTR3IxmbGc646gJGtXrtrqYmtyFzngL3e39THXUdSeseuK73v8X7/+Fa5v+cZfahg0bvO/d+L01Jk8OTXV/xXU/+fFJU1M7TqjHXl2yIvREKSr1OXlnkiCI3kAYKK4Rkv2UIcN3Up2TB6cCNdxFWaVDZSaHViXapg1/LMDBx65DPBYjFwkyk6JWD5CmiRWNxUEIDg+CRSgyH7NTLP/ZdRt27djW3bpy2aHXrV191G+7Pb05jJr//rLnvKP9x63OPcoh4BBYyAg4ormQd9+tfd4i8JLzX3j4tb/5+cf9hnqK8TTLitRmo5Pwg4gnpctQhZN7DMI38EMFPxYIIg8i5CCOollOiZb2OcoPEdSIaNYQN+oIowi+ilBmlUfkxPhOzExMIu/kyKaKtK4H/+WwJYe/7+9e9Hd3ObL54C+z9b+6fO1vbvrlI757xXdG67Fa0+/OHiJMvlqwckQwEzfrtYghkZ7KIJFDkPqc0+wmtdKp9S4hmLRJPbR/faTomh78EYU1h6/C8AHDKHgCbRI7a0viorSfF6XmnUANTCtWv7fI4807t/ZvY/nAxpHhtfcefNjxtx44dOzsg1+Ne4ZDwCGwkBFwRHMh775b+7xG4AmvfMKRO6Y3fxY1/thU9xE1IysQorSWIi3gRz6Y0OABgx9wyFDADwVkqMA8hpLb8EpSn8DzPES1GLVGvfLSjCJ4eSfHvAAAIABJREFUKoJOObrtPqYnpzA7MYO8lyFpJ8hbuj2qRq8/YuwR51/44guvn9dAP4yLW79+vcTATG0ojAbT/myz3Z+JvvLlr4ZF2lvEUazkpj/CWbZEwCwT0COSYUCWzJeMJnRp1tJwGXg0b6un87aWES+XH7SivXzdsh1R3Z8pWdYRXOyUSu6Kwvq2keElWxePrpwVqtbW/bglZjC9ZMmzEmes/jBusju0Q2CeI+CI5jzfYLe8hY3AN3/79UPf+cGzv6Qa8tGJTiAUty1SW6qkFmzIwQMDzxfgPoMXSEs4iWySL2dJIiLJLdEkM25LNOt1xLUQngpQFCU60z20xtuYHm9RVQym0NYXkue88BJ2zWsPWvHUM864VC/sndizqzdmvbzvvrUqCLrS87RKkrYSWSnTrCsYyxhLSdUDXHPtj9jo8gPNAYtWmmAggBnwTBCosiCv9bivY/hlAV6kkMUSmpbAMYWrQO/ZvXJHcwgsdAQc0VzoV4Bb/7xGgBTOJ73hccfcN77l78Oh+FH9vKviRg1FkVlfzJylFcH0rU8OpEeVTWXv5LVpeNVulz4RzdAatluyGYf2e3meozXZRncix/SOFrqzqU2wscZIuoAqoBus8bVj1h537jlPe/9WVxmb15ebW5xDwCHgEPg9BBzRdBeFQ2CeI7DerJefP+9Tj71vcvu7ukXriZ28HdQG65jqTKA5WIMgEZBnJcwgJyQr/vE9cI/iJ6WNpSRSGdXI3qhmySYRTeVLa9w9tXMWyXSJ7lSC9mTftue1yW1MYRhINIIoq7PGVY8++Nh3v+bod5H1EWViuptDwCHgEHAILAAEHNFcAJvslugQIAQ+dMn7H/f1K7/2/kT0HssipoKGB3Bt/TOVEhR5bdXm3JfgHrXOAekFVp2uAh9xzUdtN9Gs+VDShzbAtnvH0ZvuozeToz+bo+rLknFOBhmVGBluYPnIUKfB4n86ctkxf/v85a+921U23TXpEHAIOAQWBgKOaC6MfXardAiALHTO/vKZz7htx4Z3xYvDYzPWF0GoIDxhzbppFpNIJZFM5lFiDIPwPAgloAJlTdobTapoRojI4F2F0LmH7dvHMT05gc50G1m3BCs9oBDgooRRCZauqGNskY8DFy+dYNPqslXBus+esuy1ztTdXZMOAYeAQ2ABIOCI5gLYZLdEh8BuBK7ceKV/0Vc/+bjb7tvw0XDIP0rWDAQVNqVnZzFJYU6tc3hEPBmkV81qBkHwAKJZs0lCSoXotArMTHfQbs3Y7O60nYNpBZNzG2nIwh5WrhnE6BKBkVoNK+IVLT7tXzaSLTv75DWv2Ol2xiHgEHAIOATmNwKOaM7v/XWrcwj8HgLGXCJOffXnnjxtxi9SK/QqHhvojEMq31Y1Kcswlym0b2yF01obeREacQ2NxgBqzRpUzbPei/1ehtmpDiZ3tNGd7kOnBXRegBsGIwqIIMMBa4exeEmAxUODGJKD4G20l3hjFzypvuIjjJ3h1OjuGnUIOAQcAvMYAUc05/HmuqU5BP47BMge58/e+L5nztZ2fbCIk0N9P+ZgHCnT4JGAbCj0y75NClJKIQ4ixFHdJgPVB5vwYs8av2fdFLOTPUxu76M3m6Dop1ZtTjcmczSHFZasbGBoSGK02cCS2hgCLRBp1ovz4fc/Jl7yYUc23XXqEHAIOATmLwKOaM7fvXUrcwj8jwiQ9dHpF576+LsnbvtkY6R5BA+FUDUKP2eYac+iPlRDWZYQvrCt87geo95ogBTrZPYuhKiI5kQXE5ZoptAZ2Rrl9nW5KhAPcKw+cBRjYz4agY9hbwBDIgYFHZazYibIVr7qMWMvvsRtlUPAIeAQcAjMTwQc0Zyf++pW5RD4oxD4zrbvRP94yReet6uz9Z15oA9Sg0r0TQovDGw2OtkbSY8SgzxE9RDNgToaAzFCP4AQCkk3w9SuDqa299FtJdB5Dq1zawrPVIGoARx08BIsW1xDKBlqZYDhoIEmApQpLzq7gitGgwNec+zo6dv/qBN2D3IIOAQcAg6B/QoBRzT3q+1yJ+sQ2PMI/PCuHza/9sPPv/DumbveJIblulTlQkYBkiyDFwTW7iiIBWp1H8PNGgapsukFYJBo9wrs2tXF1I4Oeu0MeZFWRFNyKM9gaFGEVSsHMDKk0PAkBkQNg6KGCBJJXyPLajt7O/13n37Q0i+5Fvqe31t3RIeAQ8AhsLcRcERzb++Ae32HwD6AwPrp9QNfvORTz5tWM++eNZ0VJhBMk2pcSXCfI6xJNBoBRhsxhms1DAgfMALTPY2dE21M7eii181Q6ARFWdj5TS9kGBuLsXJ5AyMDEkOhjyExiAgePJRIEo12IvKZHeY7hy5+yltPHHzK5n0ACncKDgGHgEPAIbAHEXBEcw+C6Q7lENifEVg/vr726Us++pI0zj86XbR91BW0x8BDhqAmMVgPsahZx2hYQ4MpSzQnezm2T1JFs4V+L4cuU+TUcvc4gpBhaMjD2lWjGGsINH2FIT4IBQ5uNHID7Gr10Z1Wd670H3XWqcv+8vL9GT937g4Bh4BDwCHw+wg4oumuCoeAQ+B+BG4wN0Tv/tBZF8rF0etnWRu6JoCIIaorNBsxFjfqGI5j1KFgjMBUp7AVzemdbSRJhsykKFhhvTj9UGDJohhrV45gyDeoC45hbwgKAjkR0tJgvJ+gtUvPsF2D5z3yhJM/fRI7qZKsu5tDwCHgEHAIzAsEHNGcF9voFuEQ2HMIXLvr2vr//cZH39UK229MoiJiTQ4RSAwMNDE2MISBKELkKejMoNXOsX37NNpTffT7fUs0NdfW8L05EFmiuXysgcWxxKDnoY4YgIFGjtksxWxRYmZnWhbbxOdPWHXyOScv//PJPbcSdySHgEPAIeAQ2NsIOKK5t3fAvb5DYB9E4Pvtb4596KIPvj9YEb2CiKYMfDQGB7BoYAj1uAbfUyjSHO3ZDDu3zaA900OSJMhMglJosECgPhBh2VgdK0cbGA25JZoxIhiUIGV7O01x73QbJpXwp/1LH3Pok992Yni6m9PcB68Hd0oOAYeAQ+B/i4Ajmv9b5NzzHALzGIEr25eMfuof//48M2JeI5oSKgwwODiI0eYwalGMwBNIkwIzrRTj26bQme4hTVNolqBUJXjg2YrmsrEGlg/XsCjkaEoJHxEyFOiVfcwkCWb6BZLpEsk93W8/4ZCTz3zGipffOY9hdUtzCDgEHAILDgFHNBfclrsFOwT+ZwQuXn/xwJ3lbS//xd3XnylGxGJR5/CDEMNDQxhtDqIWRvCkRJpmmJ5OsXPHNLozfWRZcj/RJHukgcEYy0abFdFUQF0JSIRIUWBWdzHd72O6laJsc5Tb9GVPftQpZ500+MJ73P44BBwCDgGHwPxBwBHN+bOXbiUOgYeMwMXrLw6+8tOvnc8X8ReLEb648FP4NYko8DEy0LREsx5E8ARHkmqMT/UwvrOF/kwPWZ6gZAmMb0BEc2i4gWV0H4oxqhhqUkDARxcZpoo2prpddNo5+jvLgo97Fz/76Oeee+LiPx9/yItwB3AIOAQcAg6BfQYBRzT3ma1wJ+IQ2PsIPPcTp7+1G/Xfk0V5M1OpVY6HdYU4DDAyUMdos4l6GEBxjl6/wPhUivEds0haVNFMYXgCBICKQwyPNLB0uI5lAzWMSSAUAgweWjrBLt3CVKcFnXBM3tWejWfHLnjxmmd84vDDz8j2PgruDBwCDgGHgENgTyHgiOaeQtIdxyGwHyPwySs/6V+7+dpXpQP52RPF9CKtCub7CkoAtXqAOFIYHqljaLCBKPAgjUGnpzE+kWFyZwtpK0Wep4CsiKZfjzE8Qm3zBpY1YwzzEj5jKCExk/exvZjBVGsW3ckE5YR/xyOGn3TWy49463f2YwjdqTsEHAIOAYfA/wMBRzTdZeEQWOAIXH7tF+sX/eQbb+zFvbfkdT2MGoeRpbUh8pRAsx6iXvMxMtrE0GAdoZIQBuh0Cks0J3a1kbT7KPIURuYQIUfQiDE6XLdEc2kzRpOV8Mk/ExyzaQfb0glMzXaAtizyHep7j13xzDefftBf373At8It3yHgEHAIzDsEHNGcd1vqFuQQ+OMR+Nambw38+50/eel/3Hbj2/o8XRoMxUh5jsQkkBGH8qVVjzfjCCMDDQzX64iFB54btGb72DGTY6rVRb/dQlkWKJmxZu0DQ3UMD9exYqxGvBWL/BoAjSwvkZgUG8fvRN5nKCeinXyq9h516sov/A37G2K37uYQcAg4BBwC8wgBRzTn0Wa6pTgEHgwCH/vWxwa+dcM/vZ4tYq+MGrUVTFHFsUBiMhSehhcrGz/ZHIgrotloYiSsI+YeZEpEs4ftEx3MdHro9vsoOaVScgiPozEYYmQowNLBGIvrdUTgkBDolznu3bkVRQBM3NvSemv4k6NXHPfSFx555r0P5tzdYx0CDgGHgENg/0DAEc39Y5/cWToE9igCxhj59LOf/IZ2NHNuMBIM+WGAAiVKijD3gVIZlLJEUFMYGKyhUYswVKtjOCCiqcAzg2S6g9ldbcy0EkwlBgnn0D4gAo2BAYHRQQ/LB2pYXBuARAljDKa7XRRC4u6t29EdL2eGu4vf+d6nfeZze3Rx7mAOAYeAQ8AhsM8g4IjmPrMV7kQcAn86BM699KxXXXvrde9Vw2oJCxiYEDCSWaKZsQylNBAh4EceBofqv0c0WVoimWyDtQtMTfexvVegBSD1CohIY2RIYslQiNVjQ/CKFHUvQFqkSDTHlq1TSHVcJOP8fU99xNP//uSGi5380+28eyWHgEPAIfCnRcARzT8t3u7VHAJ7FQFjDHvZJ1/02jtmbnkXHxRLM13Ai0L4UQgZSJTCoKd7MNLY1jkRTfLDpNb5YBRjIKjZiqZJNPq72vA7wNR0F1vTHLO8QKIKiNBgbDC0/plLmgFGgwAMXSR5hn4iMTmusfnu/IvPe+rL3/Z49vjpvQqIe3GHgEPAIeAQeFgRcETzYYXXHdwhsO8gsMFs8L789YtefcPGX5wdLPEWTafTzA9qkEEIcIYCGlAMzAOYx8ADhrjmYXCwjgaRzDBC048RMYmim6G9owUzXaDdyTBuEvSURqIMVCCwaKCOpcMxlg74qMsSChnKAmZie561dsorHnfsC958PHuim8vcdy4PdyYOAYeAQ+BhQcARzYcFVndQh8C+hcBdUzc0L/7xv7z013f/8m2p6i+b6E2iNlBHzhhqA4PwAoVMUwp5YUmmiiT82ENI/pmDddT8EM0wQiOI4YEjbyeY2DqN9kSOfpajy3sofINcCniexKKhQSwdqmOsIVATBbjOgK6aTXcF/3zE0kd/4MjoNEcy961LxJ2NQ8Ah4BB4WBBwRPNhgdUd1CGw7yCwwWyo/fNl//Cyazb89F2mpseYZwAmwDwJFnqAZDCcARLWmohMMrnP4AfSmrUPN2uoBQGaYWwrmhISaauH7dsmMDWVo18UyFgfUAaGE9H0sGioiaWjTYzWJWI6dI+1MOt97cCBoz90RPTsLfsOOvv3mRhj+NV3X13vTnYbHjeegFRpaYQpM8GZz4DcLpC+JYQoUWTaMFVwzTPBRLvVbHXOcGlM+/dF4M7eIbCPI+CI5j6+Qe70HAIPBYGNZqN/yRVf+ctrb/vpu1I/ObBgBbTWiGQNpWBAXQEhMUyGguVgklrnDEEoEccBapFn5zOJaDaCCDU/QsA9dNs9bN68HbvaCVpJgigIkWQpOOcYHGygFnIsXzSAFY0BY7p5q5ENfX1VdMTfHRqcfMdDWc9Cfe4N5gb1m+t/vpQJtaIos5F+t98wsqzffNeGxu133rK42+mNBmEY5v3UL8tSKSVlmhaMg8OQ4r80MAaaG2QAz2F0D4WcUsYf//M/e+5k5EVdoXir0Hw6UMF0XMZ3vuiUF5G+y90cAg4Bh8BDQsARzYcEn3uyQ2DfRuDcfznrFTfe++t3jGe7DvSbvj1Zo4lbxtbzsmwImJgDjEHPzWhKnyMMFWpENAOFZi1ELfBR92JLND2u0J7tYNOWbdhBiUBEZjLAVwE4B5RnsHzJIJYND8LPoUfF6GfWRId+9DD2lM37Nlr71tlRtfJDV5y3KmPdE+7afPfRm7ZuOUSjWMqEGch1HnMpIq5YMDM7K6UQzPd9JP3MvpGQQiDLMigura0U3avSZvUnn75mJQPPhFbSS9rT7WRoaKRTarTSbtpSzLvrcY85cWMcN3/1yJWPvOaMk87o7FvouLNxCDgE9hcEHNHcX3bKnadD4EEi8J7L3/b8X9317x/roLMMPoNUCkVWWqIZqAjMFyiaAizktnWueQEuOTwimpGHWuxboklq85rnoebHCL0Akkm0Ztq4e/NW7OqkyEuOMhUIPR9SMXiexuKRASyqDWGEj1yyevCwNx3PTtrxIE9/QT78kksuEb/sXbMq5b3jOmXv2bfdteEg7rFFaZkM59CB9CUDNyiKwu5jmQK85JZYlmWJLC3AGIPk0hJOtptkzhFMbvj9pNO+seDGVqGLTINBIOtn8KQHnVP1k3c52K51aw66/bCDD72+22pfMzi85Kb3nvbeWcbYHHNdkNvkFu0QcAg8CAQc0XwQYLmHOgT2FwTe869v+4tf3HH9B3WsV5WqZERCihxgRkAJD57vQ8YSSWBgAgYjOQwrIT0JPxCIwopo1j2JASKavofYixBKH8xItGfa2Lj5XkwnGq1uhthrALpEoDgGGzEiIcqVgwd89bgljz7nkeyxW/cX3PbGeVJb/OMfPn9NGYqnt/PWs6DKgxPdr7eSmRpTXGlWzVkaAUsmC60t0aTxy5DXILREnufIs8w+TnAF+sNeamOJ5u5KJlUxuf2yIptENDXXKI2x5JK+R0RTMGnJarfbh5RU3Q712nVr+nEc9rTRaRCoW2u18Aurl6z++ZnHX+BEXXvjonGv6RDYjxBwRHM/2ix3qg6BP4TAJrMp+MKln3rtz+689p3hWDjaLdq2Wllm1DJnUIqqjsqKflgskSljK5tENJkwkH5FNGuRj2boI/YkmmGImvIReRECyjk3EjMzLWzcvBXTfYN2L0MzroPpElznGAqaybL60i8ev+KY80+sP338D53zQvw5kUvd1o33fPasA2b09IVBPXqsQR6leQKmrFbLugDQKEKWFZYEUiVZZ0QWOYQQlvDnvRzMcEs8WWns903JUOS5rVAKXpFKNpciT3VIY9j9VU2lFHq9nn2Ofa4xSJLEEtoSGszjCGMfzdE6hhYNwgs5SqEhfQFfe63BfOyfjlt77OeOf+QJW8aRtk5iJxULcT/dmh0CDoH/HgFHNN3V4RCYJwhsM9uiL135qdOvuenf3i2H1bp+2a0IJARYwQEwcKFgJECtdB4qFEQ0A88SGygOP/QQ+BXRbAQeIiUwGISIlY9QBvCEZ6uilmjesx27Eo2CiI8xiIUHdLNOQ8fffswRJ51/xrIzbp8n0O6xZVy58cpG1u8c8N2f/OCoX972s9M69ekTm8vjxbVahCTrQwUeMp2i226BZi4tKSwMBBNQ8CzRLFODsjDQmkgns9VHaqPbWqVBVe0s6U2Fso/7faJJZc25FjpZpypliWaeUkWUoSg1kjxFrjMYqSEjgaCpsGzNUgQNibTsIRqIoCAwiGaZz+bbY1W/lifq28964qkbVowdeO/h7LFTeww0dyCHgENgv0bAEc39evvcyTsEKgTuNfeG/3jV50/7tw0/PNfU9GFUdSKBj61kUs+VCAupzCUHDzlkqMBDSa6ZFdFUDFwJBJFviWYcepZo1qSwFc1QKEs0FaO2rMD09Cw2btmBbUkBzSWQ9BGWqrPIG75sbX3dha878nW3ur35HQJUwfzRpT961LeuuvTkTKanFbw8FPUiZqMFqy+J0e12EDcitNuzEJ6CJzjSNK2IJm1lwcC1gNCqEvSUwpJMmsMkIkkVSPv5HOEUpqpm6rzKmP/PFU0in1VVU0DAaBqrKMEMQ55rlCXAJbPXQqITdLM2ZI1h2ZpFqI1GKHluzfyZLNGo+wj9ACGrYWrLTH/YX3Rboxy4+oSDH/1PR6w76dZ1bF3qrgOHgENgYSPgiObC3n+3+nmAgDFGXHjFec+/5rYfnatryeEm0JBW0GEArVBqRgY3xE1s8o+MJFggkJsS8DzI0LdtU2qpkwiIrI2ikKMeKNQkQyMIEHMfgQghmYcSDJPTbdx57zbsSkpkBYNPVpqt4pvHrTrm/Lcc+RZHMh9wXX35h59beduWjc+7+vofPy/j6eHG0w0v9tDjHQRLJbwBDikl+lTRVHOinn5i97DIctsyNzRfWwrIUsJoIpD0dVW9tIryObEPvaziAqUG0iSBJ6kq+v9unVOrnUilYBxFXn2epwWiKLJt8zTt22tmujOBaCjE2IpRDCyOIWOGgqcQgYGIjX1jUnQ1YhYjKEIEeS1RWfTzpfUVV6xZedjlp6956V2M7aa68+AXzi3BIeAQeFAIOKL5oOByD3YI7HsInHfFOaf//NaffpDX8nWUMw5WgPrjJQT6BbMDf6Up7KxmEHhQoUKuJApB7XMJISUU8+H7IeKYKpoGflhYL8ya4qhJiQaJTkoPnPmQMsa21iRuvXMzOp0C9WDQ9LZ1/vmU455x3guWv8D5ZM5dIhf/5LPrfvrrnz3nnh13nzzdmTpO+GxIE4UzGaTvgcUa/lKOMtRW+U2VRapMEgG0lUlNVUZekUhNVUwGpulxlUUVEU+au7VEkt5MlFX1kgwzYWhkghRErBIEldXjqLW+u5pZVUILSzCJaFL7nCtpz6UsMuR5hrxIkZW5HbcYXjqERWtGIOIShexBxhwiUDYJyqPXKjQ5dMJHgIDXjDTBtCqDm5YMrfxpVISXv+6Y9/6HU6vve38/3Bk5BB5uBBzRfLgRdsd3CDyMCJzzjbe/ZMOOm97TYTNrZKDBWQolJAQkMs3RZxwlFyCNsRDMtjmFr5AoAXjSJgAJ6cHjHkLft0pzz6cqlUYtZAilQdOPIHMJn4UYUKPoQ+OendsxPd1Dvw3cd8fO7772z//qNSdFp9z3MC51vzr0aeee9qRZPX1OqvvH9IpuU3PNpUfVygJFWVhyJhoc/mKBMshBtNCSTHqPQMSRxiwtA6RZSoBbIkkfq9lKU3D7NSsrInq/V6aea5XP2RgRUX1gRfP+xxJpNdQmL1AQD9X0ZqQSBJFzkS5y5HmKklKfChqPAJpjDSxaNQx/kKEM+hABIMhXlYimKFHqFExr692peABO9LPgpqbqndBEWxd5yz701mM//OX9aiPdyToEHAIPGQFHNB8yhO4ADoE/PQLGGHnBZe99zvW3XPfhNOivDoYEgyKSWSAKQ5SZQS8z6JMRO+OWPBAhsAITyZFJAU6zmR6H5ykoTyDwyKRdIVQcngJiUp8TieACPhQUkwgRWwKxa3wSW+7eVdy3uXPN4oFVb7jwGRdu+NOjsG+9Is1h7rpn17IPfOR9b0BgTutknQM0L4XwGEDWRMiRz3lXBnGAcFBCDnFolYLU4JZYUmXxDxBNqwifI5wPJJkV2ZyrcJYVYd3dUqeKpz0u2R5R5ZOqpPZ15p5DLXmQYIxupSWati1faKT0eakRDvgYXTWI+uIAIi4AVULuJpqSTD1pILiEZKSKJ4skgciPQUw25rEJiqgVJ7XLhvylFz/5hBf9ci3WZq7CuW9dw+5sHAIPBwKOaD4cqLpjOgQeRgRI+PPFyy967vU3XXee11BrtUxgwhRgKeKI26plnpByGJZoUkWTqpl+UPlnFswgVwIqDMDIoD0U8MiuhtTmIRFNgYBzRJ5CFAQwRQJfegjh2RnBsIzQn+53d9zd/jaKwfPedOK5dyx0wnDjjuvGLvjUB1+5dXbHi1nADmIekJYFGLXEOUC2RXmZ2HhP+hnNaNZGQiDSMDKnMPL7xTwPbJ3bIUlbyawqmrZ1bonmf26B765o3t8WnxMF7Z6M3C0Sssemljn9fI7QWoNOo2xlszqOtgSz1BXRzDRVNXM72zu4vI7RlQ34TdIjFRB+AD9QCMjJACnKUts3NVQZpVjTOIxsVVRqjkHVRD4F9HYV48nO4tJnPOE5Xzn8qKf85nB2eGUA6m4OAYfAvETAEc15ua1uUfMVAbIw+vy3P//cH974w3NlnR8iOYP0DFiYASxBPZLwlWeJZmEkOtRKldKKTbzAg/CEJZqlUvDi0BJQL6KfVYlAsU+kQSGk6qWSCJQkdmOHAhs8wgCa0J2y47f9bw3Xll9wXGNhWxitN+vl9I1b1lxyxTfO3DKx+SWq5vnkS9rudS3mZJJPN7IKIicAETKUfgkVccTDAZhP6TyU1lQpx4kQ2jnKuRlNEv78V6K5+3HVjGV1/Ptb5+XuWc0HzmRSZfN3j9n9PKpyUoFVgKPQEnqOgJJ0jOZDTalR5hXRzMkySQH1xREWHTCA+qiPUmbgHr15oWo4I2MkGJCNJl1z3HqAGlYgDHxIMDRkjLIFdMYzIpt65t7+r0596gs+uG7R2vVPPfCM2fn6O+vW5RBY6Ag4ornQrwC3/v0GgQ1mg3fZZV8/7bq7bnh31+sckfMMAZcIAwkVFijRRSNSqNdq6Pc0+kmOvhFgngehhCWZwoqASjDyxIx9SC4Q1hRUKCA9hsjzEAiFgAn70ZOUNEMCD2qf+yZMw26c1C9dFa78yDr/lFv2G/AehhO9YddVS/75isuefNeWjc/vlL2nikhGKXLM9lrwVICkm0Iy37avScVNRNOEGogM/CZHbTBCaVN/KiJI9kT3t7qJr82Jfuhnuz+niuYDiWZVqZyb25zLL69EQXOznrs/PmCOc3frvBIeUQudQZcUWTnXUmdEeEsa3ITONUxuUJgSBSsQDEksOmAIg0sjcL+cG70QUB5dJ2UlOmPGFknJIimKPWvdNNiogyaHeV+gP5Vj5z1T8HQTeUvd2pvQ337+01562Suf9MpfPgzb5A7pEHAI7GWKWMWIAAAgAElEQVQEHNHcyxvgXt4h8Mci8MFvv+eFV/37D8/RdRzeEznsnB+XEFxD+RnAU0s04zhG0i/R7iYwKoQMQzBPzJmyi4oEeCHC0IcSAkHswQup6snh+wq+IOGPQCgEPM6hDEPMA8jMK4J2dNFBtYP+bl3wlLv+2POej4/7/I0XLr/5jt+cecfGzacbjiWFLGW36KKVdOGHgbUjojz5MqmqkyS6yVmKIigQDgsEI6T+57Y1bVmmrUQ+wKaIZjWtSod8NMmeaM5Pc45oUiXTVj+pKjk3W2mrmnOVUft4Ip5zYqCq1V61zXf7btqZUMtIiWhyaPscqkxWRLMscpQFCZLsmCVyZOChwaJVg7aqqWKKLqWUIAaPAgCo+EptferX04ympONmaDbrSPtt1IIalPbRmehjensPSauEzoh4mlS16z875fhTP/r257/9u/PxenFrcggsZAQc0VzIu+/Wvt8g8L5L3/m0q2+4+rO6gdVlyK2Qh1qaMdnkmAz1ukAYGniqmo8rMoEC3NobeVFkFeYFEQDFbFVTegGCIIAvuK06UVudSYPAk1CCwycCyiUCIxAYH6IjEOvGFeuG1rzyEPa0bfsNcA/DiX7pxg8f/Yt7f/KGyc7Uc2e2503OFGaTdjV/qaSdZ8y7GsIoiJwsiIjPaRQyBWol6ktDeAMCSdmDgqzyx+da3lWLm1nVeVGUEGWlOqdkp4pIko3QXMuc7Ig0qccrEY993Jw3ZkVuK3sk+7y51vluCyRLCGkWk9rlxGcNxU9W1U26kRjIZJUBPBFeDYZcJzBegdEDBrDswDH4DW7b58wv4XkCfC6LnURFTHBwSWSTaHCJ0BdQwoNnfEztaKE7naM7ndp0o6zFMHF7t2jo4VseueIRX3jaSU/7xulPOH37w7B17pAOAYfAXkDAEc29ALp7SYfAg0Hggkve89Rrb/3pJ2bZzCGFb5gf+1Z1TAkyVEWKQgZP5vC9EnHNs5GCScqQ5DSAF4Ik5MaTYIpyqo0lAGEYW6JJWuNGLbDKc2I33DOWFFAlM4BAZGrADMdwMfatNaNrzzyEPXHTgzn3+fbYT/3H2SfOiG2fnRHTa+/bPh7MbCmR98n8vrDZ5CQAIvWPKBVMZiAKYecdrV+lX0ANMYSjHniNmum5JZSUXb5bPV610Kl8WJFJIpKVvVFl5L6bkM6NzVoiWebVoCbn0ra6idrtVplTMhBdD/1+3z7GvgmheUsKmyRHAk0WRyUKqpTS8xi/fz6TFOlFRnZFCp1+AsNKZKyP+piPgx6xGqpugEDbOVMymqdrkZTmFV8l1Tl9baA8Bl9xBDKAKIUlmNM7u+h3c+gsQ94T2HF7F3qSaz+NpoeDoStf97JXve+Mk864c75dP249DoGFiIAjmgtx192a9wsENhjjXXrJ+0/5xS0//fBkOb5WxGDwOJTv2UoTzQFyZWzbMpQFgqBErR6CS4F+ZpAQnxARSiEBnwOesCINapFHQYzIDxCFPpjJ4ZGlkVdCKo3AJxsjmqgTCNJGNlou/fbycN1Zh7ETN+8XwD0MJ7nJrA+uuvnH/2cnv/P8cjBbmoqUbd40jul7GJJZblXlmtxKi7kUnpLy5RmQU8u7QEkkPjQIhgX8EQEWlCi5hkmrtvj9lUfb+ib10G6iWc1kQtty4X8mmnMVTjJYp2ohkUnKou90elCCjPUlsl42543JLMHM80qdRCTTfk7HoNa7UTA28J4EQpW9EaOPmbHJRL00u59oxoMKa49YgWDYQxmSQ7uGT76sNJJBxNcevyKaRD59xez15VMKFQnUphJM7uwiaacosxR5l2HnpgzZjIegjE1vsodmULs576RnfuqKj60/iZ1UMWN3cwg4BPZLBBzR3C+3zZ30fEdgk9kU/OMVl5xy7W9/ct5MNnGEX5OArJJciEAQ+fACBUkemFIj8jQadZrPDJBzIMkNUjuMGVp7I+0xcJ+qmqRKF4hUiMCnNCAFjhxRQDOFJRjrIvSIaNKcoer7s40frG088tzj/GfdPN8x/+/Wd5e5ofnjTd970W/Hf/EuPposrY35Ni6yM6mx4w6N2V0a/X5qK5nQxuaLW4dzYlwlEbwUTBbwmxLhsAdVh21BaxLdZPr+iqa1HCIu+QCiSWT1dwbtlXinaoXPyc0BJFnfvvHwBcWOlhBCoSwYdJajFtUwO9u2xJKuG5uHPuelWVI1M6M9F2CgJClpq6e2AkvWRiQOoqosJUxluZ3xTUwffp1hzWHL0FgSQ5PbQaDtuAVXRJiph0+VUVa9Ji/n3sQYBMqDYB46Uz1M7OwgaWUAVTX7Cju3lpjamUOYyMam0nywTvSmsXj4TR9/3wd+duzSYycW6vXn1u0Q2N8RcERzf99Bd/7zDgFSl19+1RUn//g/rn5f6vWPLlhWWeUUGThj1nid2pi+71W2RSJHLfj/2XsPMMnKMm34ftMJdaqqq+NM90QYkoMIuCCfI6AIrGFBd3VlV1ZXERMGFMwZBRVdlRVRZDEvuoph5UMxIiIIAiNBkoASJ3VPx0onvu/7X897Gv2+699vFQR2Zvq0V1/jMFXVdZ5zquuu+7kD0Gr5CBsBEqvRyymoXcEwH4ZTKHhZF8hpLS4VGtJ3b/zEQtVCgVAaKJ4iEBo+ZxC5jHk3/MEgX3fGswdffsMuN+Q/84Butz8d/vlvf/HSW7s3vJ4Np2tQS0E1n4J0jbGPrb8rMD+ZozefwBYMhiIxczLSlGtpt54G5Wda1IfKkHYWEA7NnEaSL+Zh/kGjST3mZP5xzUCkxyyD1U2+2By0CDQdE0nfi0GZD67V3e1J71lQ3SQHs8Ixl7Q+p9tkWVYadiy1P/nI47xcdxvuDD/EyLqqSrOoz8w1mBbIqA5TALHpQ4Qaa/aewLLdh1AEKaxfQKqSvSzZUmoXYuSFB8VvKWkQKLiyAElAcyHB9q0dJAs5eN+gP2sxs51hYZY+SAWlVpQC4gmYan/bxMiyr5xy4mvOO2avo+7+M09bdbNqAtUEdqAJVEBzBzoZ1VOpJmCt5R/5/oeOvvqOX753AZ0NhaKKwGKRISOzjg/hEXGWL2rfPIQSGKxxDLQoskihbwt0CfCIABrKNQNpijYKJGQg4QuFuvDgKwXpC0hlwHWKumQYDgKw2OS2LX7cEuPvO2b0Db9eqmdlo904cO3d33n1TZPXvt4MpSt0LUNY9x2rvGxwEAvb+2hPeZjdmqI93UXe1zDJYv+4pupvUmFmMLKAqnNEgz5qDQVLzLTNFqshCVSVa/KSuVwMZv8/gCaxl2Xl5IN0Z8mU0u0JzJLu0miL7kIXI60x9Dt95z4nbWXaJ0lF4P5Oq3Vn0uEcaZq6WCUy8DAuQVEEOYXGLwJN5hhNYjfJgFSCXwK1xGjCy7B6j+VYtc9ypGHfaU9LoPnHtxPK5hSO0YQDmr5kLuVA8ACd+QST29qI53IERYi5zX3MTFn02gzWeKWO1OaI6iGU9IHCdNYtX/21E4874aPHrKnA5lJ9PVbHvfNOoAKaO++5q575LjiBT1324af97Pqf/6uOiif0WcooAtuBEGKqALeipDf8gmeOLWoEPpqBxEjE0RzwwSKFbpGhQ00yInCh7Za6zqlbu0ardnL/SgxwD0oKMJ85kKCMRlP4aFofdlb/uIll73rO+Ot+vVQbf4hVvuS2r77p3vim16XRwoRpaGS274B+LQjR8AJkMdCb5ZjZEqOzvQ/dB/KeRUqAk7bnjO6TgEVA0PJRG1CunYlCzGktTV3jpSO9PMfOEf5fAM0/dp67nso/VEuWzCNDnhYQTMKXPjoLPURe3Wk2i0T/wZEed2MHMJkUDmQS40h291T3wanFh8nFzvPF6soihy4KcNdMJBzQJPsSMZpWpZhYO4K1+06gaCQwPjHupRlo0bQODglJ7DsVCggL5YBmCF/UMN9OsW3LgjMFFfMF8o5Ed5qjv2CRJxZCMmRFHzKUqA8OOKAcCG9+jxV7/HhMNb7w3OOO+cUGtqF0N1Vf1QSqCezwE6iA5g5/iqonuFQm8PGffPjAjXdf+eVMJfu10zaE7yHuE9QkbZ2F5bbMwhRkAJJQzCDiAoMND8uaPqK6hA0kOiZD2wFNH4URzgxEcUg8lBCL3eVN6i6XHEYVUIHnGM4gEfC63i+G9cRJz11+wu1LFWTS9fbhG9/8ts3FXW/p19rDcsiil7YR1hRMVmCw0XTr8UZtGL35Atu3dJHPa3g2QjKfY/vWOfQS0mUypDKB11KIhkKoaBGMuepHAprWZVXSqvi/ApquTtL5dSywyGjSfR7MweQFhyhKdzuHyDnE/MJse1sowi2e8rfoxE4LrvqcyUQX2gSBN9Bpd0c73c6o7wfLZ9qTywfHG2NaINSGMbrGtKU8TA6qNHoQaDpnO63WTe4YTSMTjKwccEBTDhbQQe4MZmVOU7k6L4Emh3KsJnPsOyUdeKKOdjvDli1ttOcS2MQgngUmf9+B6XAoTXFbPkFad20SXR+1mhgcGgEyk6qU37k8Gn3Ls15x9E+PY8ctFm0uld8Q1XFWE9g5J1ABzZ3zvFXPeheagLWWnXPZv2y49p5rPh173f0SdN1bdprmsIUCg0JBmjnOHBsmBNVFStg8QcMTWNaqYVkzRC0SyD2gbTXahiOTHnLNIKSCCDzIkBqCCAJw1JmER4ymRyypQGRrBvPs6oGs9eoXrzr51qUKMi+77DR5Kd/8pmRo/h3zYvtAUc+Q24QCKl22KMkNSOPqUQ6pCoCMY2ZzGyKto+mPoTtd4K4778PM7CwQGOQqQ33ER304crOmWken3SzK9p4He83/wFovtgE9uEr/g4vdhbML8IIbVnDNCpaIQt3t6fBOacSvGcMtIme/O+Xd790+Cl70Eeoh9EyBcUviC3q5EPRroy18+Dyej8UXvvWF+m13/ma3Aunj48KsT5JkTy3Mein5GNGYttDCOpkpcx92EhMjNT1olaG1PMKa9ROoLRPQQQYujfsgRF9kHuL0QQYCigtIsZh0UKtDyRo6CwW2bJnHwnyKpJMhpxzNe3pQiQcbU/qrBmQOUWMQAz6ikQEkeYbhwREoKsCK7d3LGsve9dKXHP+dypG+C/0irA5ll51ABTR32VNbHdjOMAFa0X7vmm899cY7bvgX45n9Y5YgNYnT0lGGoSVTT5q7FSgxTaRfK+3MQLMRYPlwAJ52sXp4AAOtGto6xTw0ZqREIhT6mUaz2YSw5C62bn1Jj+FRxSQBUG3RVI1Uz5jLh8XYO48fP+kGxhYdJjvDAB+h50hg/z/u+eTYxslrT+mHMydhKGt27QIYBVYSSLMEmAQ8Ak0+AXeJQFLOqIJuM3S2S+R9agKqY9vWGWye2gytUoRDEmGTOzbTNebQypyXrKTLs6TYIs1QxBaBCGFSi263i2argW7cL80+hlmbIJeJvzDqLbt+UAxeMeGvuOS9LzzzETdpnXvpuSsuvfLSDYUtNjzwwH1PB7dr0yKNvMAXtDZPeIzcS+A3JfZ4wlo0xiO3OueBRmF7YOQylz5kISE1h899cEEGNo7W8AgY8zE1uYDtk30szKSI2zk6Myl6kzl0l0FqgqcUfG9gPYNgUIHXFTjVrCrhDEzKktQDaU1HH3rnCe88+0B24PwjdBlUD1NNoJrAozCBCmg+CkOtHrKawJ8zAQKZl970v5928+Yb3j/f7RwiQsVikyLJ0rLeOtNlx3VmIJ2DuGSLCLAQWBwajLB+rxVI5rah5S/2SsNigQMzQqBLjJLvIUkyDEVN1Gs19OIYYc1HFPkoun0MyaG0mM4vX1Zb8b5/WnbStUsRZNK5+vam81ded/+lb5urz/6zHUybierCEsjMyWHOIa2C5CUzRwYqEXJncImYhO5xLGyT6C94sEkN0zMdTC9Muiag5ojvMvOFIvc52brLDwnUtUNxRkYzp7NkRqI330MjaDqjD4FNaoKE5jES9oDtYePq1pqfvPh5r/nu0UNHL/w519dfepvTv3L6435z640vuHfrfYfHRW/PQhWjosWChXyWhaMhVuw9jsG1TeSyDy+EM5VZk8PkJCPwUPcj0AglFwgCD0Mjoy7IfXLbLLZta2N+OnE1lN3pHL3tBYougyik05tyBzQ1/EEPoi7AqCLV4wgI5DNqXdKIbNjZrb7Hp57x5Ged88zRZ1ZNQn/pCa/uX03gUZpABTQfpcFWD1tN4L+bgLWXyc9eu/HwX9937fv6vHMoU5IbBfTzBHlRlBXU2qDIypYYCs0uDSRUt2IhlcLoUBOP330tegtbEAUpvEiizxk6XGHOCCSk3ONw942CBohA8/wAfiSRZzMYDhsppsQvh9iyjz5h1aE/O4gdVKZ5L6EvYjK/uemsiTu2/uZVnXDulVkrXtb3ekhY4tz+ghg2Ix3QV4xDKgbpk3SBqjypqpMiACQ6kxbt7RpFXyLu5+gnHec2D1seNDfIQdmUJRldZmESyqRGJ4mFhQXX1kTRQ2TkmZuaw4A3mNd0c2MLQ1etHl7z8xGx5urXHfW6mcf61FxmL5M3fuPGPef60wdcffOv/tfds3cdyup6n2A0CJurQzb+V2OwYQZJh5PlkCT0kL4zG5lCw5cePCEReTUMt4ZhGMfWqRls3r4dczMJ8nmB3lSB3nTuADsBTWo4ckDT1wgGfYgad0BTeAI+pSdwA8kKBNxDy6vPxtvzCw7ebcNn3nrEW+9cqpKPx/q6qH5eNYGHMoEKaD6UaVW3rSbwCE3gnGs+9OTbtt78kZ7tPAU+4wRGUl04w4W2pqwhpDzE1MAsAk0K2LbEfnFy5kqMDDWxrBZBsT5GRgX8AQ9tbTGbW3QMdZdTVWWBehghTTTqzUGAKWgdY3iAm2yqc/kEX/f+J6w8/KqlCDLpVF64+czVd0ze8Oa+6v9Dc01trK9iTPan0Depa8yhKklmBJShVnILT5KxxcILLDhlkwoPChGSLne1imnHuNB0ApJGECvHkBQ5styiIBOQKXMuSZtJDDWFqj/IcKZxRppPK3PvAd72f/Ccw573pT39Vbcfve64x4TB/FOX9g8f+OHQb++85fHf+sk3nrdp7v7j9n3qXuNqrYWJcheZRbmX3C42DhFYdI1FpUwjEgFajRYMGLZNz2Db7DTm51KkMwL97Rr9mcIBTa6J0eRgvgV8i2CA6jopHYESE2j29OHJwBMUBM/KLNiUt2tJ48ITnvHiDx4x+Kx7/9RxVP9eTaCawGM7gQpoPrbzrn5aNQF89vpPHHTT5uv+rccXnmCZEUwx5FY7gAnOUOQaWZIvdl1zB1xctZ+ht2nhgCa9iQ/UQzQEw8iAhxWrG+A1jtk0x2xcoKs9SL/ushTJfEKB3cLzEXoBkBYwvd5NY3LkdetXP+VXS9VQcfGW82obt/3okxhO/kH7ulEE5HJmaBd9tOMEUvooMuEYTWWpO8dCCoPAt2VdJ7n2uUTIB2GhMD/TR28uc33jZXwQQ5xn6Gc54txAGwoxF4vxRIUDmtKSBreAji1EKrqsx3/O+v7nj3vaC6958fpX7ZDr4IvuvmjZOZ/72NHeGF46fvDIkzFY1FLbg+UGUGQ+owYg5fI8qYHK5xS9JDDQaEBbi+3Tc9g+PY/52RzxDBDPWgc0i5g5YE9udQq4ZyGgGrJcnVODFcVwUQWrKM8Dsco5p7KCEENiYGFVNP6tiXzFR1/xpFPvqpjN6hdtNYEdZwIV0NxxzkX1TJbABP79tnOeeN1913wuiZIDuvkCFWE744+LrHH9f0CWFSgyApfKxeg44EIxRcY4gEnpM0SMNUKFoVBibCjE+PK6CwKfzzJ0CoaeCcFV3UkCCWTSujdLEjS9AfCY/SaI5ZvWPG79ZUs1IubCqU8vv2Pbde/u1adOKOrdGrGPBctB8oWCA1nOHTC0RoJZ6ZqAJKg1qYDvFQg9yoakcHYPgdeCQA3dTGNhLnHsMcUQESkdpxmSrEA/K5BTpBEBUNJomsJJIgKtYLtAqKN7e9vis5+z4Tnf3eMJBz2wo4P/u+xd/q1bNo5957L/eGq0MnizHDb7o0FpBz108z5CVXcZocpS65RE4Ek0G5GTD0xtn8f2qTbmtseIZwXiOYP+PIFtVkoVJHOlBAQ0JRmBatSmJMCldUDTgUxpXM4mrdbJuxbBYlg1+/UF9Yt9hvd//Yv3PfV3S+DXSXWI1QR2iglUQHOnOE3Vk9zZJ2CtFefd8tED7+3ceU7ixwdvmZ3kYTNAkVNDS5mVSOvUojBlO4su6wOL5I9As2yBKXMOyRDUqAkM1wVWjDYwMdxAWqTo5gY9KHRNiFyFhGUQRh76vXmMNId0MZNvbGWDbzll/T5XsSWYQ+g0mVvO3euGbVecacaSZ5lG7E/3Jp2jOYwCpHmGwhKgD5DkhfuTBLOuDZwV8FiOQJVA02cCng4geQNQdRQI0O4V6PVz5Bm17FDnfIas0OgniTN5uZB1+qCgC4g+wBZkUk+bv9p/tye+522H7H/1znZOqMnqkq1fW/XL+y870Y7ql8aN/opN81s4FwqBF4ATSawkfMXRiOoocouZybZznc9NJkjmLPrzFvGChs7g2GMyulEhEA8ZWCQgIwXmObExaFNOTUMkX1BBCUD9ABgdlBhUAqOyaTCpr5qwe7zs+AMOvYexI4qd/XdH9fyrCezsE6iA5s5+Bqvnv8NPYKPdqG77/dWH/b57+wfbmH3SQt7mllH7SQFtCnAXPcRchJEtyDTCYTIgJ60fdVwXpYGE4nAIpBDYZBxo1hWGI43dV4xgJQHNOMFsrNFnHqa1h5RWmL6HvEjQCIM8n02uX84nTnvKumdduhQ1mQT2v7H50+vuXNj4jm5j4bi2mK2lPIUKCfmRAYs0mMqxwJnWkCpEUZrEwWHAHdDMUJMGoTIIuERUhI7VRDAAy5uIC+nAZpoUznxFQJOqKLtpjF6vU7J8jINnFqIjNk/w1d9doybOftNRH75zh7+Q/5sneNk9XwxuY/c+e5N94ORpPf1XLOT1XtxBSOYzUa67a0GEImfYPtnFzPYE7ekUvWmDZN4g7mgUKUkJJKSiulQOETCwGqBqPuBRq1EJNAVVWpJONhSu7YqKCmp+gpGGQmQZwlTpcKGxcUTufvqhjzviZ6uqFqGd+dKqnvsuMIEKaO4CJ7E6hB13AuQu/8bk7QfdNXvL6V3VOapnE/STGHmaOe3kg5mYnFhNCuV2K3LApNwBTZMxZwxihrSauQOanqKGGYtWXWBiQGCftWNoiBxJP0EhW5jOGLbkHLZRR4YECjxHW9+43Ftx5n5rDr3kCHZEsuNO7NF5ZgQyL9p0zvrb4+vf1A6n/77jJVEiM1erSOeAgSKkGMkqQUpK+i9k8LdCLp4j+i+0OicntUVNcIScI8gYFA+hSabAIhg0obVCr6fR6cfoZylyFOglsTu/pkf93j76U9179xtbf/oxT37Jv+9KoP8r2z61240PXHtKr9Z5IYv0iOEpwlDBFxIeD5ClAtsmFzDfKTCzrYd0miGdM0i6FOUlnLmK1AXK55DkNg8smC/BfUHZXhCeRRAK+L5xgDOMfNRCgVbEUfMMfJbCNxYqFcaLo5tX1vb98L71/S7ZZ/S5nUfnyqoetZpANYE/NYEKaP6pCVX/Xk3gYU6A1orfmj3/fz3Qv/2d2/XUkQlPg16aI01yMG1cXBEFcped1VRHaME06f4YipQYTKoeLHumYSxsocFZ2RtN5oqhpsCey+qYGFBoeda1t3RtiG2JxZYCSJWikHadd7Kb14a7fehJq/f//kHs2P7DPJyd9m60Lv/+1s/sc3ty8zvm/c3HxlHcyoRGRg5/mi0xloY85gQx6U+CntQpT0CzrFakbhyCn4pb198dSI6QuryNgWIChkdgrAHOm4AN0e8bdOIMPZNjIe4hZxa6b2DndRr01C2rvRXnHX/YC76+Dzt0lwNAF97z6eW/2nzNK/hwfjyLsj2Zr4XWOepRy2lft052cM/mGcTzBnqGI5nXSPsWnLSwQpWsPTnMaxKWAKVXAk3n8ifJQsAXgWaBqO4h8iWaoUJNGSj0IZCC2QIyVQXmG7fvNXLIv65fs+Gbu+Ksd9oXZfXEl9QEKqC5pE53dbCP5QS+Pv1vB9/Tv+3jfW/2ybnIZKZz9Hs58pzYGwudFxDUEU1fuXamH9DanIwoWcloWiOgs9KhTDtdqudTnCEMFFYMh3j8RB0tpdH0fDCuMKs5pg3HlOXoUlpOO7tjZWO30/ZZteG7S5HJpNFevPXcJ93cve4t7WjmWXogjwqRIi9SJ0Wgbm8q36H50jedDZcBSQwzGcfJ8EPAh9pqmPP8O6BJkT1SFPCkBid9LQIoHiHAACTqyDKGblZgqt/FTNyDjBrI29Zm9/V/ud/o/h845vF/e9X+bP/eY3k9PlY/i4D9jzZ9c3CyuO+w+/p3viL120eEI37NSGCum2Fyuo/JyT56sxbpVIasbZHFJB9RkMIDF3BRRiJk4D4Dd6t0z7nOSbtJbnMv0FBSI6or1D2JulIIGeVr9sFYDMMS55gTSWj5QvP34/JxHzv6ic/8SrVGf6yugurnVBP44wQqoFldDdUEHoUJfLt/wcrbJjd+1Qz2D01Fl+fEnmU58sQ4pjJLDfIkRRh4DuAYAj2Zhc3Kthidc2ecIL1mkRZwL1RdQBrKEAQa9QBrRxtYPx6iycvwasM89JSPNvOwJS4wN1dsHpbjJz9h9yN/sGGJ6tQu2nz2gb/r3/rZqXDLARjWXiZzZEUKTgJKqoHUZR2kJVSpS5BJZiv6ckBz0XzlQCajcKLyT8lIvlBAqhyC0QcACQ8BamgiQB2wPmJNcVMpZvMcD0zNgGVhUe/Uv3Dg6IEnn7znyaULbBf+Im3y7Xf+dP3v23ecrMbFP/RlHC2kGbbPxJibNZifSpBOa+g+nD6TOfDugTvXuYWgUPyAO6DJqRHI5WgCKrDwKfpIatQjjlByRJzyOqnYIANYDC1S5yuDil8AACAASURBVOwPeB3ptLF8prl1UE988pRnnv3RXXjk1aFVE9ghJ1ABzR3ytFRPameewNcnP7//TdPXfqK2Wh6eeYlMih6KJC7rBw0FWmskCRyjSX3ZxJ9RzaTJKcCbVugcuqA8TcJCi0CTDEO6gIIBydWGG3XsNj6AvUY8RJyqEhksD1HUGphLuZ1cMPcXSf3dB+197Dd2JQ3gQ7kufrT506tu6m78/Hww+fS0kQtTM0gKAu0WoRBgViPOYndaHNBcXJ4T4CnBJvWSA4KR4bnsmueLrCbdBiggPb0INDk8BzV91GwDCnVY+Nja7iKRPrZ1ekgTbrNJc9NhezzlTa8efvVlSyHr0bn8bztr8I7+nS+p7x598J7tW4O5OGf33jMDoSPMbe1Ax7w0vEFBSgkaLfcspE/OcgUmaWWuHLtJQJPC8qny0vc16h6DJywC+oBAgJ8XZT89M2CUpVRosB5gFxiSSdud8Nad+ua/+7fPL9Wq1Yfy+qluW03gkZpABTQfqUlWj7PkJ0CazE/d/okn/Wbbrz/V2tM/yB/hyJHC2AwmyVx8EbFoSZwhzSjmRkIa6m2m1blBkdI6nWJxhIvG0cRsFoDJS0aT5Rl8ZlD3FEZbDew+PogVDVYCTW2QaYme8Yt2P7jZ89ectmLiqT9YiiCTmLT7N1992G/nrj+jF00/KY7aIg8MNNMu8N5XPjwwpFkMKoekOCNtOAyt0ZmkfXkZGu4sQRqSKg85gyK3/2IOpgOlFq4pyEVOOVWngGclfBMiohW6aCCDj7lc496FOaQ5B4tDdB/o3lHcn5355he/+cKD2EFLRjN7xjVveEEc5Wc+MD+zeraby5npLuI5DZuWchHamVO0EZPWMZq0Kg9CspkTw0lZsGW+Zgk0jYuYogQAJTS4c3HR+t26b3pNMcqdTTOITKM3tQCZBOhuMu0V9T3OOOml7zh3jO3bXfK/tKoBVBN4DCZQAc3HYMjVj9j1J0Cd0NffcP2+l9x40Ttae9Sfu3Lv5YGsFZDSQLAcRZa79ThpLlMyBKUpJL2xajJBAKyAC2mnLEFdcOSFhTHcrdjJNCSI0cxz1ITFYBRibLCBtcuG0PINApY6A0Sa2KLTq98W8nUf3nvtURctRT0aucu/v/XcDddsveKD+WDvKbHf49qndWruGpV8FUBQW1LBUegMTBLQLFAQc0wp+Ew5MOqYS0b6Sw2PayjSDQrrHsOt1VFmPobMd+v0QhGIpXuWQLOhm1BsAL4cxnTRx1QWY6rbQz8ukLU1+pP9u47e56/fcNLKk37MHAW3639RAsMHLv/e0XctPPC2Kds7eLrdq9k2peN7TiJCLLED7YumHwKcni8doyl9D4oijzzSb2qoQKPmadRFAck1cimc4YpOIX1I8AtA5QX8XKPodpEtxGhPdaHyBnrTemrP8cd/4sTnv/ZzK5uHPOb98bv+ma6OsJrA/z2BCmhWV0Q1gb9wAi6M/dpzDrzohv9811ww94yxvYfDFeuWu3w/wTLHhOX9xDX+EItJJpQ0jUvwqKnasNQH5hmFVpduc5MTq8ldgDtlaJIb2mYx6tJirBlh+VAda0aH0PAAnXTBjdZF5t8u7apPjq889MI92bPbf+Fh7XR3t3ajunjLNYfc3bn5jZ363LHzbNaLEYP5f2QmlZCL7KWPoBYiL7ooUCAnpz81ARGTSZmmjM6LhiCnOSu7tUtGk8CMdfpNYQQatubmpKWB4eT7V1A2RKTr8BABLAJEiGmbYHuvg3Y/Rb9fIO9qpPdn1z599REfeFx9v0uP2G1pRE7dam/1LvjJBQdvvPumV/ehn51mbNBoxizVMXECmRJCcdcA5JhNxZ1mUwUevJBB+AZcFVCKgvMNGlKDcYNCCGT0MqJcdyvgawM/NdALXdS5wtzkdqQLKXimXDi8yeTm9Sv/6tMnPu+k8yeaB03vdBd79YSrCexEE6iA5k50sqqnumNO4PybPrLy6lt/debvZu/9h07YkyseN4EV60YR1j14sgxbZwWDLUqnudYZtI3BigJClyCT1re0unWsZgywjIMbhTTVrraP1oI666EVCqxdNoAVgwGGI4+quSG1b9NucHfAV3502YoNF+7GjpjfMSf16D6ri+/7+JF3Llz3PjtYPMnUrT/ZnUZO/nFRgPEMXBjHjjGyLqMGQ+YepqEpTdNYZNQ3TyGmpNakLEeaLazTaJLTnBICnHSTl650Ws8GmrkAdkgBJy4kfpNierQCqTZrsungqoaPBBZz3RjT8z20uymQeli4f+HWcTH+gfP/5vwLH93p7DiPThKTC67+5u6X3/rLV962cM/LUFPDcbcHoaSbo6oF8EMPhSFASbFGZAAqQSbzc8dohiJ34D9Q3L02iMksQGtz0moyqIJBphqsn8F0Y6TzCXQ/RR5r6MQgzwxEHmxZt2yfC/75hSf9y97NIyqwueNcItUz2cUmUAHNXeyEVofz2E7g63d+5HG3bb7xXVvb88feOz/ZnNFtLNtzOVbuMYqg6bmeZ3oX5ItA02bUBpRBm5js5RCUm1lo5AQ0DdVNAjq2YJkE19xVGbogdykgbIahmsCqkRDLmgxDQYBI1rAwVUw15J4f2GvV/7pgiB298NhOYMf4ad/Z9PG97tpy9Zd0q32IGmKcEukzAN1eH4Y0rCwFk8bVGHLhwwrfqSppJW6tRkE5l9a4JiD6uyCdH9lTODGb1skcSgd66Ux33iFj4VtLgfhgwgc5h5xJyFLIu3Bd9T4P6KeAwYeGh74GZjsx5toxeqnB/FzHsAX+66etOexNp+596hU7xjQfm2dx7dS1y8/69lfecMvW2182Mj46RkAxJ5lCzUOcJE6XWa9H4Ioc6FQ7aSAIaKocvtROliJJ7bAoZ9AUM0WSB4qpKozTZrJ+gaKbolhIyj8TSnfQbqsAyltK1MK65es/9fKTPnjGnmzPXT4J4LE5s9VPqSbwf0+gAprVFVFN4GFO4D9vOGvtjZsu/2xPxU/LfeXfNzeFzd3tGFw9hlV7TiAa9EugaTVYToHrtP4mRjOHsfRGZyEK5YBmZhIHNC3FGqUWSIVjOg1VUhYWniBPs8Fo3cNu4w2M1gtEQqHo1GdqYuK9a5ev/8oYO25JmhsuuvNjh98+ec1p/WD6cD6YCa+lYJSHbpIjI0aY5ooMlltwj8wmAlYoF8ROETmWa4o1LfuB9GLvPBGX1kCR4xmLjCZtdxdjT+mSoVgkSYDSudG9xbV7CTSFYzbpw4GC5AEE8yBQc8xm3xjMtnuY7+VYSECr9ry9aeb6oaT5oVc988QlZeC64r4rBs+96KvPfiCb+WDf02u8SEGFEoYqK+t1WJ073abwucss9UQB7hVEJUPIAtKSjrZkoYnVdGy0sWC5BqdYsH4B202QtRPoXuaApskNtIsa8CBYA9BqfrjR+tzjxw9+/2uPO21JvoYe5q/A6m7VBP6sCVRA888aU3WjagJ/nABFtnzvprMmrvnNzz5qh+Lnm4bxTRBgS6+NLZ05yMEalq8Zx8BQHT6FTmvtvo0LZS9KwEnrdNqIFxTtQv9GAFQ7YEmxRiYlgElh4gzcMAwENTQEw3BNYc2yBppebpGISZnv9sFVK9d/fhU7Ll5q54hWsN+8/UNH3rLlV2fm3vz+tWVCJKoD1Dj8qIk41sgzOJ0rgXvacDOvZIfZorsZMgVzjKeApq55y9w3JQQwApoEckh7uRhzJEhHWPqB3BfFTxH6pLBxxoVjNF2su5XgVGmpBSTzIHkIQd8IHbPZKXLMd3NM9nLMdXr080zngYXb/nqfo9526prX/nApxe9cZq385FknPm+W9z/Bmnyc1QTPSe4ggCAIFh3/lJsJBzSZb2Ec0DRQOnbSBvoiEQSdO06fFlIDluTgtDrvpcjbGXQ/g05JB0299q50FIVRiNMCrVYjKWL+9Wcc8NxTX3PMO+aW2mupOt5qAo/mBCqg+WhOt3rsXW4CBDK/ceX797zm+h+/p7XCe35W74dZzcAEITJPYnsSo6MzNEeGMLx8GEGNO+eyMDlsnrnVuCV2Uy8CEl0yloZijUif6WoRCSARKLXghQeCJ7uPj2FFq47Ipgg5M6Hl2zwz8sndlx/22eElaPy5y97lX3XrNw7+7ZYr358FM09FkArRYCS9hHXB3jUE4QA6c2TCMs71T0Ye0vuVYJO5rEYIYjqp2tMDmIS1wn0IoBgqWqFTtNGDQNOt0Z0GkLrnS51mQV1CnD40qBK8EsikHE4HNrmTPygQm+mDlvBSRg5s5uDoaWBbN0FsgV4aoz+bwM6Yq562++GnPWPiab9YSqvcq+wD4Xmf+9jxm83sa2yLr1d1FXTTDoJ6BMWYq/sk178l849vAbUINE3idLYl0DSucctqDdDanKpeeylsL0fRzWH6OfI0h85LmQrFKRnK7fQCVznEILu7rdzzC88/8gVnHFZ/1vRSyDnd5X5BVwe0Q06gApo75GmpntSOOoHvXn7Gqh9efdF7mN85vr5cRmIQyEICmj7EQANdDWxtz8MfaGF81UoXMC0YrfgctYYio9UdvStSIxAxaCTKBGyqnBGoKAho5sh14YAmrdZDAzxht1XYe3wMrN/Rtmd/3/JWnD82steXx9lx23fUWT1az+sue4n/y9/8+hk333f1u3R96q+KoEtkIeCTg8fCrwcIa00H/uK+QdrXyBMaOqUXaXBJphJyNANWkQCWTD4KnDI0SZFJ7nPHjpGjmcAmMZpk+gGI0XRw0lDCpoWLf3fUNK3QKYOTopEkuMvZJJBJCk4BpmVpEuIBpCCw6SGHQhcW81mCqfkOrJHI2gXiLfGt0fbw9C+/4PwLlxLYofzT8/7jGxvunt/0dm+8doSh9HtF+aVASD30DmhSbhGdRzonGlLHLqCdZAxkqHNZtRQ+m2ogyd3aHHEB3StQxBlMSvrMRaDJGArJkFC2rbFYs24PUj3Mpe3ia4fscdjZ7zj0fb9bSszyo/V6rR63mkAFNKtroJrAnzEBYjK/c+WZu13+y++9Llftl8FLBrQfozERgDUEcqrGG2whFQLb2l3IaAhj4+PwfAIwOTgnoJnDpLkDmrZQZX855TuSXCz1kScWeZ6jIEbT0DrdQFmBmjHYb+UY1rYGjR+z+1pi/F9XjR7w7y12zJJb8VGU1Fdu+ujhG+/88UdNvX0QG8gQmza8yIcMFXKbodaood5sIEsLCOYj6eaI+6VWk4uCbPoQXg7mcVhFWk0JIUqgyRiBf4ovWgw3xR8ZTdcQROt3IkItRbQvrs+JACVoyanVhh7DNaODWQKnXimTcBFVHjgLwKnTm3Sb8KAQYCbrQXgt3Ld9Bgmd+75Fb0ty1zP2PeqElw+96Jd/xuW5y9yE5BBv+88PHHnd9B3v8pc3nuwHzGPUJ+9ZMIqY4mT40WAUlM8L2Dx2HwYeBJqu5omAZqLBSA/dTsDIaR5nsAmtzUug6c4xpQeQH8gUqA0Pw/oCJlKk8uyH2r/g8L0O/8CpB7x78y4z3OpAqgn8D02gApr/Q4OvfuzONYHv/PRDw7+49scf77PZ52V2oVGwAkFLQA4aBKM+jA+EIy2gXsNUpw8j64iaQ4gaDXBixFgOS2vxNHF1k7Ygiwlgee6YLwqtLvoGWWpRGOuAJpmEAmYxyCX2GRnFMI+mmnrwU+tGNnx2onnskoxjOe+KM15w492/OBVR+xA0Y5aKDlTdA6VEQXAENaospPpCjsHBQQfq+50M/Z6GLihwnUCKBlMFOAELcotL5RppyNRD63WCjZbQP30vAk0yAUliPsvW+VKnaandqQSmrjHIBY4Tq+kykMrbURqnoVB+sWgI8p1ZiMCmz0N4IBbVQwaPEj+xrd3BQjeGzgQwx365T7j+I4fss/4HR7Ajip3rFfPwn+1l99wT/A43H3D5LVe+OpX9462fKeMV7rxRpimnIP0HM00zAppUjEXxYEW5EtcFeGJgaU1OQJMMQEnhXncFSVIWgaahfFtdQNZ85NLC1hXQ8jG8bAw2L2a92PvCIcs3fPqUA99x78M/muqe1QSqCVRAs7oGqgn8iQkQm/n69x95OvM6p6S8W0uKfhlH5OWIxjyIpkVtOEAwHIHVPaTCQ8YCGFFDszVc9mabFMIWYLQWz0irSbV5HJayHamZMtXot3N4fACdhcyBzUAJ1HiCUS/Ect6aH9Aj/3rI44/99ARbmpl/Z1321r+/7pafnhmNinU5+qgN+0h5D0YZSBFA+rKsKfQpd9FCKYYgqLvVeWehQJIuzpyqCkXmHOgIIucWN0wjqvvIdQZBkZgEMEVZU1kPa9AkZdAaYRg6dzMxz75UpbuZdJt0LhfX6HaxK52JkvWkZTut5AlsEshkpNlkEtJKRLYGJSj6SCADrXEFOqnBQjdBZz7Vet7etHdrr9PeveepFy+1F+qv+jet/NjF554tx+TfGd6DF5FBi7S2ZRpAt9v9YwoAJxOXgSFDXUYZpWW8UdGNHdDUcQ6dFOXaXJMwguQR5YcBun50qMHqCnKwgdrQAMJmDTUVzadTxU8OGnzCKRWzudSuvup4H8kJVEDzkZxm9Vi73ATOu/i02h2/vvb0md4DJ0q/GEh5jNwUsAQsPAPUNOqjHqIRHxSro4ZCeANNFKqORAsorw6hPNfsw6HBDRkSetBkTqE9rASyJAXTxMBQHE4T3YXMxexIU2AkFBhR9V4zGfrks5/4wjNH2aGdXW7If8YBfeZX73zCVTf98CuxnXuCVTkbGBiEERqybl0rjxQ+lC/dilX6Bh5pMH2gXm8gTwU67Rz9LoXf80VNJa3OJTJrUR9sAoJijorFqkqNgUaEXqeL0AvLeCkvcGCyn8WurYa0oEkcoy48CFO2Cbl4HbJKU9q7cIGbrqnG/Zvrf+IuUocyNul/0ngIbM1FVzEXAk+A1EemOdqZQT/N0emlure5d82Rex7+1pcPvXRJrdHpsnjpF0/es+u3z4rG1TNz1hNBnVJNSeecQSqOOM3L8+kIZjq/FMiewpARiPTQ/RScGoIIZDqgWTrTqRyB7kdyCbqOsjCDjQRkM4I/VEdtqAG/FqEmgozP2i+srK17w2n7nkbRrNVXNYFqAg9xAhXQfIgDq26+dCbw1e99ePDSSy/6SD+fe5HyWUjgoqD1N7fUJQMrDSx1jbc8RKMS4YiHaFkdtZEWWNRAZhUSzSBUCMUptLsAswXypAedxxDEeAnSZWpIy6FjjrzPkPU0AqEQWG6HvGhuwDTP/JsDTvj0BDuov3SmXx7phQ9cGH7rgk+9RNdn3x208hX9oo0gCqFTDr/mO5bLAU7pQXgCgsK9PQ0RUk82Q63RcGHp/Q5He55yNS20LqskCRMa6jCPOIKIo5vNo94KHYgh4D8QDULkwkrrxyY3Xc1RVzURFiJjXdMD8ZU+fHC3ty+/HHstiKm2MJy5lT5pAUm7SZ8qCHC6MHcSB1pyI/nwuIeAHO2WwbM+wAPkkOgbYLbbAcslFu5duFvOsA8cu9+zv3nsxLFL6jq4wd7Q+srPL3jTrJ05WQW2kduEwRSOcc5MaQJymktqdlpkNInBJNc54syxmybLy7W5pmQHEkQsShuIZBZA5jPoGgNvSnhDNdSHhxGS410JpPO9LIrFxbt5u733fQd+7LeVQWip/RaqjvcvnUAFNP/SCVb33yUncM2m7wz/6vKfvua6jb94vZBmVHo+kjxxTAhpADOdwjINEUgYlcMbZGgsr6ExHiEYrsMfakLVG4hJi8kVDL2bGQqXzlHkCWyeuI5m0gI6tzM5jrsGugfovkaNS9vk9cllwbLzn7jv0efsz54xtUsO+r85KOrF/vnl//78K2756RmJ2L47q+WIsx6U9OGJOnzfh6oZWEWrVN8BTa6MA5oypHPDUavV4Kk6skRiYS5D0qEaUFqzEtCkDm2B2PTh1YmlzOHVSPCnHeBrqpZJp/XU2uW7fwNafnd+fvo5aZAer/1sWSx7kJ7rPXRGHwrfd600pPWUzIFLAps5qSYIaCoFWqlT35Bbn1OMEuU4Mh+SKYSWwydDNWk5uQfNPRSc3OsBNm3f6tIHFjYt3MO2mVP++dh//v5S0mzSJXLR9osmrrj1ijf2ePfF/aI9poTmtFkw3DgZCwHMB13nLkYsTp1GkxznSAsYWqNTji2tzR2bSXIJU2pyJZDT6zhSsAMcwVAN0eCASy8wNnWreE8jlfPe9w4cfNL73rb+PbctpTSApfZ7pzreR34CFdB85GdaPeJOPoHzL/rgsmuv/eFrsnzhlULy5cR/GC2QJIlzKEtFMX19IqYce5Ujh4iMYzRry31EyyJE44OIhluAF8AwiSSzrvZOEJuiM0Cn4CigKYmRKRSJgDA+JNVOziXWT8TU6tbunz9k9yPOWR89c+tOPtKH/PR/dNNXovvn7zjme1d+6+TWqtqGmf4kCqHheRJpmqIWNKiwEGHTdxWFBDRJo0lAk/naaTRlAAdGKerI5iG68yn6bYOc2j8XrTXS40htH6hZNIYidOMF1P0Iw94y09uS3rk6Wnfu3msP/vozGv889aPOuWM33rXxhAUx/VYxbIZIRkHeE2dAoZYnClSiJiFKFqfPFRzIif12EgkBQ/FHf+hDJyGFRCYlFPMRaglPU+4m6Ujp/nRbWhP7SFMqZwTyfoF4e3xjPqnff9QeR/zouFVLK6T/0ulLV3z3mu8en8rkVcrXuxmW8p5JkdCHt6Js3KLzYIrCgUxGc0uI0aRYsbIwoaAGKOt2C+WHPCrgkoAOFUzTB2uFUIM+vAZlsTIwMhZRahaXGBQD7bDDvrT/sgPPevXyt99Xgc2H/LKu7rBEJ1ABzSV64qvD/q8n8NvtVzY+8Zl3nppnnddrkw47PZemthHPvZkRa0XO5YIaSTyBnMqxfWLDDHQthzfEMbB6AENrWgiGa4iGh5zRI82APCNAUr556aIEmpzR2o8jTzkCEUF3c8vadn7cW/nZJ+311HOeGD13y1I7VxRx84qPHHVS20yegma+jkAmaea4kkhorU0Gb6vRaETQIgdXHJ7nlRpNMn0vrs5VAPffo6gBznxkHSDpFOh3ChR9ameiSCICmqnT15IphD5UNPxB9Lfm9+w1sP6Mpx/0zK8fxP64qr54y3m127Zc94Epu+llbACD1M1NMgo6rw92otO6lYxGVHme0YcJSav0EjySttcxmgQ4mUBK/ehCwqcPGZb60f+4gi9D3xUKbZEZjUCFmN42i3ze3CXnvQ8edfih/3EcO25J6QavtFc2vv2jb7+yny+8NebdMRtapCZ1r01ykJuCihEWgWZODUGk1SQWu+w314YAvoVZZDTpHFnFYGoe0AxgWwHYAAerlYHwHmcIuYLHFRrWx+NXrJvSm7Lzd+N7fOr43d84udRem9XxVhN4OBOogObDmVp1n11yAi4r86r3vei666/82Oatm8YEuYEL6h5nUNyD1cQsERdCb1gZhKQKOwvrSbd+S2QCG+UuW7O1to7aWIChiTGwIIS2EkXOYTVzfeeGVueWlGK0djXOnSyth3Qmz1ZFu33y4PHD/3Upgky6sL569elH/eTq734p5t0VffRhSBtLZiqPcioFtElhLJlADIIogFDCVRUqn7sgbwpkJ42mChg8f3F9LkKiF508oTdPK/QcKBQolyrROWSTVugxwiCC0tGt9WTo48/Z/+++ecTY/78//n9vPm/1tb/7+SvnvZkTdGQmCGwKSxpLQDEOSawmdaorCgS30MSaOd1myWhyTnmaZcC762EnACoUjNPxkjudrory2igce1tDmtLPoPuFaC90bZJnt8pJ9t6j64d+/7h9lxbYvHjLxSM/ufEnL+3KzhtitFfmyFwqAAFJU2SuBcoxmpQIkJW95wQ03XodAsZaaM7LSCzKUg0IWCrYhoJpSdg6g46YY8cbNekkDePeMNbURjEimmipxqZt92/+/AGD+5919NCrFnbJX4bVQVUTeAQnUAHNR3CY1UPt3BP43EVvfp0V3bffdfetK6ZnZl11oeQRkn5OHmEYQyBTOxOCW387kwcvo444d4Ao9xKgqdFcG6C1uonR3cag6jVIFTlmFDlDnhYuT7MEmrTGJbWegixCLbrBOYc9/q9PP4Q9b2bnnuZDf/YbN56nNk7e/KJNc79/y/1z9z6uo3suTNsBAmrmqfnQjPjDDEpJZHnfrdKl7y0CTeHc4JS3KEIGSQ70gCEMfdSCAMIq2D5DbzZBPE85pdQcBCjPRyfuozk4hP5Cdr1Ig7ec9MKXX73h/9Ef77rut/7b8M9+89N/Shrdt6YynSBwyKmZhrbkkpdrfI+Ybo5cMGjSbTonOl8Mh/fAOeVuklaQoRACltzn5E6nxihKKCDtoSHCkiOLDTwVIe0bKN9DJ1sogo68feje6ON/u/ffXrhh1YYl1XVPzObZnz/7SG+YfSwT/XXUc05GvYLiw/JSn8lo20BbBKqcLOjfrVubawrl5wIFaaR9DhsK8MgDqwuYOgMjvW6dPixwRIpjrFbH3gOrMIYWfMpF1akpRLqw8ED8n/vJDR/4m4l/uu+hX+3VPaoJLJ0JVEBz6Zzr6kj/HxOwdqM66z++fPLd9/72HcPD0fDmLfc7HaCLPiHG0q3PF4O5qeKOTASUfckK5IJy/Rg4OYi5hPYsEj8BG9HwJzyse+JaGN9i2ehyV0eoINDudJD3++5+ZE5QNoLtBlnTLDv/Kfsc/e4D2RHzS+1kWXuh+PKVvzhxvn3vu+f70yvv2T7J5pMMqZGOzWQ8d8lALKDoIAZO9daG1ptUKSmdFtMPfXD6d6fTNC7qqNYInZYzCiUatTpE5qE9kyCeIbaQJA0Feu0cQ/Ux3d6e3dAoRt7+j6967eV/jtnmsi0Xj1xw5Wdfw4eK1xQFxiwzjELgHbMqARX6zghkfNJiFjDUtU5eIFqbixq8IChlAM5EJCEX6ytdyw0WTS6k86QPMtQeVVhwaJ3MagAAIABJREFUatKkmm5j4Glh9Pb493JavuvEp7/yuwexg8qezSXydY+9J3jf597591nQe4/29B5WaJ7ovjP59DodeNKHiRcrXglgWuakLrnW5TnwOVKvgA4ZwlYNwWAIFpJxy6AWBWhGAZY1WxgN6xhEjbhml75pUKCru0i6RWpm1M/2aD7+lBePvuaOJTL26jCrCTzkCVRA8yGPrLrDrjSB38xfMfjjy775iht/fd2bo5o/SvrJ9sIcoqjmDjNJUudQJiaE3uwdwKRGGGKdhEbBSDNI3dcKjICmtIhVCt3SkMsEhvcYxPgey1zbzMTQ2GKzjEHS62N+po162ELRkZ0WJj73xN2f/sFD2FFLiskkdvDG+Z8P3D97xfNu+M1l76xHxbpu3MWdD0yhrzniXDpNHVgGKzUQlkBTGAGuCbjRt4HyPHg1BR5IMAKklKPp0RpdozkQIvAFPC4QiqaLkJqdTJG06TxQsHeYBrr18yE18d4zXnDudQ/F5HHJXRc0v/2rr53A694bWcjX9HWP8YBD1cg0ppAycsELx5wZyVztZeE6LCUoyYA0mUpKhDKAJ5X7O7mnU6uRMwviM1NSgRLYdEBTO7AptHO1gHELr69uS+/OPvDivz7+h0ezo5fUKnfjlo2183949rO7rP3mIsyfmPC+mpqbQqvZxMJcGz7znR6WZAokf021QVzQVBkYsc5NAe0byJpEOBDCr0vUGyGGmhFa9Tpa0kcI6fS3tKJPbIrcFkh0iizJITMV13oDX92brX/fP6563daHcu3sSr9Hq2OpJvDfTaACmtX1sWQncNkdF498+5IvvjZO518b+d6oLjL0FuYdy0Rv4uQyV8r7P4Am0UqlW4OAJjEnBDrLO7h4REAyxCJBUTNgQxwje4ygNlbDxO4TIBpuIIjc+m1udtpF1uQLYm7Qm7jgcWMH/MtTay98YKmdjKsWfjh0yY+/dvJc+vtXRfVieavJMT09jcm5GJkNMN/LSzYPqVuJU9UnF8QMe+CWmGTrAD8ZgGSNgweeq5YUHoNUFl5QoBZI1MIQoYogWc0lCPR6MZI5QM+GmYibP3vqQUe89/nrXnvdw5n/ZZddJr9876deWdTSd2q/WAHfOKc596Xr5JaegJQSNlDQNYFc0r/nCJQHpSVqKkQU1BzQpOspK3KkukBK/5+xEnAayv/URG+CEeCkv1NVphLozPQxaAc2ic3FWSce+Y+fOYIdkTyc49hZ72Ptafyln7nlqDk+974iSg9OkCh6fVI2bdLNHMgkIxll1qamQEKGIcGhAumMQF4k0RxqYGCohoHBCI1miHoYUEIqFMjsVaBAhlgn6NnEGbwylkMUwEAewM6aGZW1zt9j8JBzXjJyUtWNvrNeSNXzftQmUAHNR2201QPvyBP4zxu+2Jrubjnx2o2/eKPv8ZVFEmNuegaeEK5aMOnHiKLoD4wmhTw7UOmCoYnRLI/ONb645pccTMEZQOhNKPctbJPDn6hjeO0Imivq8AKOsYEh6CyBX0joWbRFZ+Cra8b3+cjfDL58yem8LrnrbL8jixN+ffsVp8lab5mUMZB30WvHmJpNsW2mB8ap/pFc3Qk0tfcoBi49+MxzmksnP2DU8pOC+7SRLvM0yYGuPIN6nSPLexhsNNGot8qAdFVHnhWYfSC2cmb0+4fte9QZf7vXq675S65XimP60lUXvr4YyF7Hm3JFJixkKKCIfRW0SpdggQfd8JCpHPAyBKQt1R7qMkQtCKGUclINAppJRrKBAgWTDmjSTpy62ilwnBLHSc6hrUVfZ5DCg8wZwo7Y7G8xJz/7qCO/t9Tc6JfcdYl/wY8+f+Q8pt9kauaplhUiTWMwSyH5ZSc9ZZqmNkfOC/eBRNXKkP/WYAOjy4YwNNxAo+HBFxLCiRcypwemWlLKzU2RI2UFUnp9Mw3fMjQyhiD1wGy0NZsOP3tw86nnHjf+su1/ybVU3beawK42gQpo7mpntDqePzmBC6/6RPjjGy59h4xwQmDFyqTbQdancEXr6gTLFpGy21qIkmVy63NyCFuqsCuBJq3kLPPcSo6WnKS/44ryEk1pAGkIpC2DsX2Wgw9zDC1voSF9jNYG4Pd4X86HX1rX2P+sDQPH/e5PPuld7AYX33HeyHX3XvnGnmr/k1HdtZp3kPbnMBSE6HcybNnShbYhur3MrYytjh23ZEgKS61JLATF/4DmTTCMussJaPoMyukkJSStsD3aUhvUA+l6ymt+C6FqIo25jSfVD5686q/fdszql9/ySIz3h7deOHT+Ly84rmjpt7OGXaNCSXJRCK5gPQVZD8EaApnMkasMnscRWlm2QCnPRTHRNeVW51mOjOJ6LEGektEkM0uhSWNI1yJ9yCmvSdKnpr0uvEwg7Hk3hnPe2f9w4HO/c/TQ0lqjn2ZP47vfsuqJ3/zp1/+liNKnJTwmMSsyrcFyauFi0BQ0UANkS0I2PAwPj6LZrKM1UEfoM4o7dVWxFEylLbHpBTIyGOkMBdPIic20GTSVNcAizArURAjBWgiK1laz1X5ht/o+n33FyrdteiSuqeoxqgnsChOogOaucBarY3hIE3j7l178pp6ae5cW+WC20IdnBbJ+5vL30k4Gqy2iMEQaZ2D0dkJAk2COA5pl1R0BTcriYxR7RFZjQ6YgCykIaNIbGkfeYGDLPWQDBDbHEDYCBFpiwh/BcgydvffQgR89gB27JFdt7770RacVte6pqeo04mIemem5GsZBL8L8tjY2bepAyia6ndQ5hq2mSCONnFPItgdSzjndnaI+8cJpNSW1AlHvucchQ+o+Jwu4QaNF7TsZfOVhsDaMvCtNTa64aP/xw0571tArfvOQLp4/ceMLf3/hwIVXXPjyWLVP9ltqdeD5LsCdk2RioAZZV0h5ij7LwD0Dz1oozh2bSUCTVuyOIafVeGGRazIClbWJpC9MKaKHWE9nUrMuKstTAiT7KOIcA0HLJNuS39V79Y++9Mjnf/nPMTU9kse/IzzWhbdf+FfnfffsL6Kl98u8FIWh1zFpYhV4RKHsAt6YB78ZuK0FvdbDQEEwTY4rGJOVr3doxxpruu4M/X/6N4oi084QKJmFyBOE0gdnEQI0wNp2Lt8ifvTE+uFvfsne1Rp9R7gequfwPz+BCmj+z5+D6hk8hhM4/8rTT7z1/hvOzFRvJEm6EBmDTQzSbgKPldq/uJM4h6+ifEOqq3NsJvFKJdh0TckOaAIFBXAzAUGh7mDwmOe0YJnHkDcszIQEGxaIJhpoNpukpUOjH37pyH2OOWVpusste9uP/+l4MZJ+uCemV/aLeZabGFICHiSCjMP0BaanUmyf7IATY0yr4iJxgCF38+bwbM1pY23IXNe5xzkkLyA4GYCYA5oyJHOQgIoYfJWiJj0M8GE9YMe/sdfo008/ZvyVdz4avdXf2fSd4a9e8qUX+cu9U03AVjMl4YUB6q0mZCMALWH7VE3kUQ96DKqLIoBJ31RhKSjFAMI1DVGjDTHt5P0pg9sNEkOOdLi58CwDMgLRgct1ne10EPCajnR4s7/gvef4Jx/7w6UGNslg9rWbvnLwF39y/sd0Mz0s93MXoC8jDzz0wBocfFi4D37QBUJPIaDrhWJOOXWnFw5Y5k6dWUaYkWOdXvvOgMYYFHnSrAGKDD7FVhX0OyRHMxiBnWMppvDFI9ZsOPW4Vacuqdipx/BXefWjdqIJVEBzJzpZ1VN9+BO4y97lf/uSz52yee7Ot+SyPwiRM13kkAV33eKUtZf2NEy/gITn+quJ2SRtV8liErNUMhrEZhDQ1LSWg3HrdVkoBw6oQUQLhjQ0SJsacZShNtHAyIox+CzMhszwBUftd/RbNrBnzj78o9k57/nV2z675zW/vfyt4v9j7zvA7arKbcecq+9yWnojtEAg0kFFxSuKgCBduFiRq4ICIoqIFCE0KYIooAiIFAEloIJUEQnqE0EQASX0Tnpy6i6rz/eNf+2dRN59V69Skpy9+cLJ2dllrbnKHHP84x9jXHN/Z3zS1cRyVQsHkOcsURpU3BKqaQlDixtYvLAuesqIzUBpBmQEmgki7rpiSdqThg5aRykmuFhGJn8mLSmCTj+AxS70iiXWSNWybYLcq40xE+dsv+mHztil54svvJGjOMfMsX55zU0fT/swO/Xz6Z7naAJNt1pGiAwhJRh+jlSFMA4tmqwidcrkAjBtGr8rW5p+CDS54CHQjNj9nGcyDjxHnSQFm/Fpk8Xz1PJdmDRDkNumKy092b3cOXbPd+5/52izPuKxvfGZ62Zd8+urz4yqzV3QZdysYpDYKSI7gQosuOw0DyzYWsHzHXieA23TFSCTJKYMCgllMrZfxIIS2KeiyiZRLnGhjJJVvD8ksSQ7xU26a7no0ZUwWWhufPeUXU792PqHPtvpRn8jr7bOZ6/uI9ABmqv7Eeps3789Ak+aJ6t3/vb6A//2wkMnwI+mKyeFpXLkSYosZEwdkPNPaKBiGypVUMzCJmXJCV2xdF4kjxjxPTRic8QSWmoVQDNvKNi2C98roa5CJOUcSSWF6nXhVnxMGje15sTB7b3p+BOO23H2qNNkXvvY93t//eDdX0q6h77as45TLk8CcqeJsDEsnodxnCDQZfTpbjT6E8x/dRBpohCHNFZnrGCMVCx/OO4KdurCMISaxuyeArIGPIeLA8ALSmKg75R95HaMaqVkVGyWTS5Pu26nWXt/+4N9h778b59U/8QHzHl8TuXmR2/5bDYRR9qBXtfvKikC4FjlSF0LoS4sm4ydQ1lKgCYXMQSWBJhczDBxiEAmJ6YRTh1ij0Smjc+RSXdp3wMNkySwkgjdjotJ3b2YWB4Dd9i6b93y9BPG+5veN0vNGlVxlQXY/MlW18+97qTamMGd03FZ0LRD5fb4LEWIhpeemZQw+C6lC5QtkNHMJSTAWIpEpdhJ8D+aHLETXSe52Eu1Gc2ccgbG07ZAKL1yPVZHUq/h1qwbN5u27SkfnzD7+X/ilOm8pDMCa+UIdIDmWnlYOzvVHoHHBh/r/c2DN3/iifmPHpkH4YZGR4BKoE2CLMoEVJoYyJsGJtIF0EyYR14ATVZqi7YLauNSYY2EeRIdXQ7L16jXmqiWe0VH10xDWF0esq4csZOh3FeFZwUj64/d+BcTq9O/+ZktRp+x8/fmfnvD3z322/+MS8NfQE84xR+fYdIGXaj02OhfshjNegNJkkmDTy+6CqA5fwCJVIVTZEkKnSQCAMggs4xMoCnHgN02TALSMUolX4y4GVNpOR7CuIkxfd0wsVoypWvdH71n1s7f22/qkW9qkwbB5txX5+435NVOK02sTCv3dUuj2PL6sJRyo4xWO4bqCwE5fJA9541Z5ZnIOUQXmGXI2AxEgEmwLZIOJREASDKo3KCsFCa4HsaXA4zzSyg7HsqoYGhR/QF72D9/q7Hb3TFjzDuHR9vdYc4T12x2y9M3fXWg2r9n0hX1qLKNPMkli55NWfRdLZHRdG253hVXKwwFUFbheABaJVkSL+rynpAbOLmCpaijjWXsi7cY+NqCaxd2Vny9b9v92WL34pnVHS7ca0InG320nXud/S1GoAM0O2fCWjsCD5mHSn/4/a8+c//jfzgWXjIl6LKRpYwtZDwLgWYMlVowZDMJNEMFnTgCNLXM5iuBpjQCtDrOjQBNLROMZierNAwYOOUAg/EQ7G4fpgx45RKs3G2OK028eb/3Hnjq9mM/+MRaO9j/nx373tzvVe784y8vWRot3KN33Uo19WvwxxhMWbcHvX2B+JaGjQaSOINrPHTrCqKhFPMXLEezmSNNmVPNKEHmy+fCBpLJs3MtrDL1mLQ3slwbftVDzO7gPENPd5eYuicj+dIJwTrn7vmeA6/aa/3PLX4rxp9l9DvvvuuL8ThzzPgNJ0zuj0YQssHJKrLOCyZTiT6QBVtmuAvmJJPettWiVJNNZ0ZWPnLrplckJQQqJkhPMSHwsU6liglBgDLIchqMNEOUgl4sWzLynBWVz9ty2qwfz1I71t6KcXgrv3POi1evd9sTvzw67osOH8QQ3LKHobQOVBQs30IpcARsutpItcNlOZ3NZlkuzCUNj2xKEyhtINOsWcHQhZQmN7Cp0c4ZnU7/VgkJA1Frnlsoo2tB89XsqinuzEv3nnjyS50y+lt5JnS++60YgQ7QfCtGvfOdb/gIsCHg3N+c/F8Pv/jwN4wXT3fZNJLFJCrguxbStC4aN8Xmk9AgbyqYiL9bsFINixM69XHM+yO4YWOASWWil/I5/8cyGm2OJMcaGE4aqE7qxlA8gqBaRpogmdq93nX7feDAs0cjyKSN1BV33PHFETV0qjtGe1mQIHPqKI+1MWach4mTeoGsKYxmM4qhE40ep4KsbrBg4TLUGgmyVCFn50tEfSxNZ6hHzEQjZ4mlZCIRlPDYTaSRWUlRAk2oU6ws7zHjLtpz14POP2CDQ9/SxJw5r8zp+83i33282ZcdbvfaG9casWSWkwXnmoZgkwCT5xt/F7DJDPS0+Gm1DOr5j2TXCHz4f8fYKCmNPldjbOBhnOeiIj3WOXKTokGLHm0xHd4M9cdPq2HvzI3W3epnO45CsPnL/jnrXHvPtd8Nu5p7D2MI9hgXiWvgBBbKFR+lwIJvazg6FwcE37Ykb17nmegyGQ4g1CV12Ww4s6jKtuV5i6+hkT6PocUQAblzwEEZzTBGn9/bX3s1+9F6pU1O223MKaOOVX7Db/idL1itR6ADNFfrw9PZuH91BI674YuHvjT4/EkNPTzZ73WRRqGwDV3lCrIkRBpHEG4osZBHZDM1QNu9xIadWVIeK1gl+ma2rE6YxAItGkFq4jj9SxndApgX4lZd1NlB7bqolrpgZcHV/3XgkcdtXX7Pgn91P9bU911090Ub3XrPL44ezof30VU1TvlAPR2GKmWo9Fno6XOx/kZT4FoZmmENI7Ua0ihFtx0AscLCRcswQg/NWCFP6bQNAZoptbGULNDjlCAtNWJbk4p/KWB7Bt1dFQzMH1g2MZh6wUF7HnbZ7usdvGh1GMdrll/TNXfJn/YJg+TEUhBsGKUJYvo6kiKThwgCC2kw9aciz2BJ1pYSuZ3ZcDMNDy5K2kPJclB2HASWRq+jUbZYSqeSMxYAnlITYiksGRmACSgr8LNl8+vPlqPuy981aeur3l3dZcnqMC5v5jbcuuDnm3z/lu+dVg+G99NjFBI7gVVSqFQCBBUHjqtg2QYex9IGhJjMM2nSEr6ZlRCweUuJJZWvXdj0Ms0S2NTbkJ1mF7rlQivCU8DWNsJmil5v3EC4yFw5NZ1x5gEzzuyYur+ZB77zXW/pCHSA5ls6/J0vf71HwBijv3nTCbv8bdEjl8VOY4rTTfubFHHURNkP4BEVppmI/6M6bYwKjaYJARVp6NiBzZJ5pqiGg1LUBBbWRmwQIItJfRw5I6NpFm5ge8w4TxGnIbSjCTKzrGHdeegBXzh460m7jboJ5ZKHLum+6prLTsvc9GBdsssM7IPDbt4Exongl4GecQEmTunGmHElpCZErdlAVGugoom8gMVL+lGrxchiCybWUBHLmEp0mtQrWuwAZuncuJKgwxQey7EQRU3jGm/xlMr0b3/ovf/5w49vftjA632O/TufR7D52wWPHqKD/CsNO5oYlY1KbSOAhEuXFQ8BmpYATcJMP3cRGBddqoReq4xer4KSbcOzDCwksJHCKlqFJC4xzOqIEaPeHIbte6jnGZoxfTf9fGBRbUGQVM9+/xY7XTnamE1WOn4x/+oZl9x8xakjzsC+qGSOKhl4VRtexYMOCBJpbUZPXMCnaDNPBWwyloFVDTmPLYhnrq88uCaHgwiWlYkVkrIcWNqVTnU2CLGjnW9PoxxduqthD/dcM1ZtdeJ/zTh+1N0b/p1rp/PeNXcEOkBzzT12nS1/zQgsMo+Wf3jTT/Z8/NVHZ3t91owxk7vVUNSPocaAlCJpbG2iBL5i7F8ZcTNGnmTIWI9l2TzSsFIbVkqgSRWcgdIFi0FWMyMFaixJazFkK6yiXBtmITIVo7tahq/9RjKUXfflQ044YcPqu0cVY2SMsS763UXrXPnTHx1anuB9rp6O9CVZKgwv4ZK2WVJModwYlV4bXtVg2gZjYPvM9snAhCafAD/Lsbx/EHVqNEOFPHSgIgvIbNFf0u7ITpPWsQgwEtbgl1N4js59BC9164kXfuRDn7zsgFmHr5ZaxDlL5lZ+u/D2A2u9ybHDpXj92M20zdx2YcoJOKUzSMaMEg0ymWUTYIxVxXinBxPsbvToEhyLmtVBJAhl/Aoz8VSAe2xGkGQN5MogDEMp8ZJVi1MLueVhqBG+gOXWuXtO3XvOjpN3XDbabia/nD9nnStuu/zkQW/Zf8alsKTKtrIqDlSJaVPUXlOrCXjUXJJGz1LRZvI+kvJ+0JI2OLSgUhlyi+xxCs3QBkVhgwtbU0ecw3Y0l6VUiaCEbqDp1lQcXDZr8jtP/8zUkwc6ms3RdvaNvv3tAM3Rd8zXyj1eZBaVL73pwo8//uKfjs9KyfTusRW8bZtZeHXhi3h5/otI8hC+78HTDnQK5LUUJZ86ygR5TA0g9Zn0JSTQLErnBJfUZ9JWR9JANDlOS9gJBpsbpgAxe9srvPiaw/XGpO4pv/jkXp85ebMJH3hurRzo/2GnLrrtoo2uvf26M5rWyO7GSQK3bIvtSxCUMDg0IiXFUo+PhClAZaAyxkbfFB/lniKfnDGKTpZKA8bAwBDiyCCinSazpCMHJrUEaGZkjltAU+se0Ww6OjKOweNbbPSOszefud0vPrXFMfXVefznmDnu3Y89+KnBcY2TQj+ZJp6Z1GmKnVbhasBmn8Aqw00sdKGEcU43Jvi96LNKcBP6ajZQ14NInVi60cn20ms0yQqgmbPMa1LRwHrwxEIqyVguttCfNOE2g6WV58uXfGybnc7aYuIuq/V4vRHH8mdPX7v+VfdedkzNrx2Ylky3qTKy3ELuMn1KVAfCZNI7U9OsnebtXHBSQkO9JoMbyHjqDKktafRSBRGfTeUI0MyyRCrp/BzfCqBjDzkXU9oaxNLgmt2nH3D+xzY76oUO2HwjjnDnM1eXEegAzdXlSHS2418eAXaX33PPr/d68K+/P16Vkrfldgg4GaatPxXLB/sRxyGyJJJJgQJ/W1uS8FGE/BTNJjpS6HLKKKkyoqEmmiN1SWkhuGxG/DwtcYCMCUzSHK4dFFnUrhHfxqyOGiLrtl3es9tZB7z7kEf+5Z1ZQ9/4nV9+Z50bf/3zI4fj4cMs1wQ0Sfd8G1lLJ5joDM0sguXbsBxKD1JUxriojleo9HnoHdOHJAoRN0cEtDdGahhePgKdBUjqbNiiJY0F2yWjHKHRWA7H9pA2SihZ3SYZDp+fUpn89Z/OvvfGNWUIf7XoV+WfLPrlofF4fMl3S+tQoJHQ4lElUCZFt1dGOQ1QRZkG4KhqHwEtdqgQptWRSlGz6ogVTZ8Ucvo/tnK5k6St0yxCBgj404RAlGbkRlJvdGzBGdbL7AH7yzt9YJef76H2aKwpY/d6bedPnv3RtBvvveHohtf4XNqVlEwFMEGOJI3gug7ylN5nmTRW0XaKDYLS75PbhZbWAyKa8IJenDZyer7mDBBgqhhL7cxE5/lON04Fi2HrYiig4UXlkcrAuB99aqeDztxpwsfeEkeE12scO5/TGYH/aQQ6QLNzfqzRI8DEn6t/c+1Bjz/x0Be1m86KUVOWm8OrOEizSFg0JvpQz+fYNnzHFYahoCWLdJUkSkVrNbYyBm5uY3DpEEb6a9LwY9kukiSBWwoQJTFCmjtqhUq5S0qS2qFfnt/s9cfOefsW7z17n60/+eRoYyfOvP3MrW6+/dYv1ePa3qWy152bGBXqAhuD4jMasVfctxCpBAmNrTU1cBrlLgd+rxGgWe0piR6WjRh8f50MaKiQjADRSI7A7kGjHqPRqAmATVgaDg38tC/34q6/vHfbHc/Zbd2Zv9h220NJLa0xj2vM7V33zbv7o6lvHaW7vZmxn8iYZWmEsV43SrmHIPNRyn2J6GRplsyZhAWoBLEVS5KN5KFnxU+CSgJO+buAz8IDlgsj/j1rPUctrJs7cJr2E1jiXLzjlrvduN+4XReuMYP3Om3oLa/MmXLF7Vd8XY3FZ0a84SALUhimfqURjHjnFnnz4q/ZAol0pZAIWtFlUmaTF1GpWSrMp8P8+YxWVcVGFqlP1BS3bLkojEg9ePWuJbMmb/69id3TLvjyVrMHX6dd6nxMZwRWqxHoAM3V6nB0NuZ/OwKn3XXazo88+/APm0ltWqXbRTMeQqYiBGUHiYkLVpI3dTJBjgVHW0VTqCqe49xBH0fq4spBBSrTaNYSpM0MOrOhclu6oVkpy3TR+JOYhG+GrR1UdLcZWda8bdrEdb9y+sEXPPO/3f41/fXn3HbOxOtvuf67ylJ7kjCO4gZcR6ES+IBtUItrGMkaUBVXfido92wLAfVrOoPXY6NrfICgy4GyU8klT5IIw/0DsHMP8VAOLw9QG4zgKFcY5VqzLkDLzjxYw5WHdnnXh0/e7sM737WmZnrfvvz2rtuX/n5/PdH+Wm93aaNmXkdZVwWwlOHBygp9Kg3aWZwlwMxUQxwRxA6JHq+rAM024CyeKwAntbKMrpTnqOUU/0cljgsVu5SHw+YVt+FeuM/7dvvBLmr0ldEJNi+99dIT8gn5wWk19YeiQfHPSuOkSGlKCRCLKFqjjTgFFHZUtDSiLrPwoeAiSnxReYYKwM/aAWPCcEoDW8sD1TIOnNhDOetZapboK275yh+OU1xtdR6dEVjLRqADNNeyAzqadufsW8/Y8b6n7rvI7rI3zdkJihCWx1t8gjhvCqvAcjl9rmUiYCwhAaat4XseAtsWP8ZarYYoipDmBlHMKrkHW/nIqdtMLHq7C2Dl+zOVI0IK7QE+SogXZzd97mOHH/7uaR9cONqYzG/f+e2+n9+39zzFAAAgAElEQVR20/HD6chnjcm6LM0RSESe8M7tt0OtOYwnXngaw2kdocWSbSJMZsDkniSHrXO4XQ6CXg+VsR6Ul8AO6IYNNEYayCKDtJZKiZeuAElEo3YCLgtRmEAnwbzdttvr+J322P/2NT3L++pFV5fnhU/tqqrZyeXuYDPHKkMZS7Ck5j5TW2mAhBGJVorEiqBZYk+4ICoAJEu2qwJOAZhJVDCbLZDZZjkJegyz0rWHsBEyOjXXDf1sMGSf+dH3f/T6d6l3NUfTvYT7OocNQrdf+uVmuX5o3aoH7NxnIw8dKNiQxZ85PXV1KrZIBJoemUoatlOO09LWEowSZFqOlioIwxzoTlGwofw/l7WFRRrPZyu00aPHjmzQvfFp5+975bdG27h39nftH4EO0Fz7j/Fat4fGzLVPuflXn37shUdP0V3OpNjEyqhUOkVThDAqkyg5CvqL2zpLtRYsS4uXJgFouVRC2bMRtPSAjThBlBlJo8mMDZXZyMIcnlVCEiYSBUiw2UwS2J5Dz8Y07I9vOunzs4/YrPLOUaWvokXMhb/6wXaXXvODE1HG++GgFMVNxchEMpmB52CrLTdDI6xj3rNPooEIw1kTiUlR8QPYuUGfX8bGG2+AkXgEy+tL4JRpMaNh7BSWqxAnGZr1Joiu4lqMihOgOZSghCrSppUkDe+BPd6734lf/uA3fr+2sEC05roi+sFuS5P+MyzHelujGWvYgegvKfFgG0qicsR2KsCdjq52GMliSZpTslWAZpYUjFpaxKZKyZylXIIeYeaKP0wboh8kM+e77Ipxm/bi8NXmRf/5wYMu3rV71/617ubxD3bougXXjb3yFz88dMBadkTiRRPIR4rsJmfSOe3MaL0bi2SBd5vAaMma50I2zWIEQQDfdzHSqBcsMhcB7Dgn+CSjKZlOK0Epu9LZJKSaGuW4OrTZ+K3O+uj+h12wrdp21OllR9u5Npr2twM0R9PRXgv29XHzuHv77Td+6OGX/nJ27IUb5zYQ55HopAguo4QlRSNg0rKYrJLCIpNp2XBtDUspOJaSMnrg0Pw6QRqTdaBlkYtG06AZpjBkGhQbUFhmt9AcbsC1PfheGVGUNeIou3fdvnW/dvanv/f4WjCs//QuEAx9986LZ/zo+suPi3Tz407JsQeGl2HSlCkYGh5AHkeolkpwLTLIQD2qI7HINSdQrkbJ8eQ1G06djt0/vCteXPgiHnvyYYRZDdVeD5lOJIOaYCiMGqJ7o+9pWk/hZT6cRjnx4t7737f9h4/98k4n/fGf3vA15IWzzWyNR6I9TZ99htMTbNLIlaJ/K5mwXKXC1kcqpX+9eLs6cQa71aTSBpsCKtN4hWZzVZaT7Bu7pts/E9rvaKDqudJdbSUWvCRYPPBc49j93/+xG/aYPPoahC556BLnpj///PAF9VeOzdxkgtFGSRoTpTZaCaOcWrTXyuAmGXzbgdWqmGw4Y31MnjwZz7/4PJ57/nnErS71Nrhvpz6LZ2rrPpWEkRjy+6YMe9gf3nLaNhcf9bEjz9xAbfuWplmtIZdMZzPXgBHoAM014CB1NrEYgSXm8coVd/9854ef/dMxqZts18wbVmZnoptM01hKhEHJF4DJUjh/Z/cnNVScCAg0JQ2ITSc0WtcZSlaCql+CVgGadYh3Y0LfPLIUto3BkWH0VLuQRUyicWDF/rCvu385fdz63/rSnsf/bW1h0/6Zc4xM5vfuvOSdl1//wy+Edry3sbOqtOBqg5BNE6R+aABlDLrLJckx9zxH4rkZ7sPXifwgjTF57Hi8Y/vtsHhoPl549Tlhh0pdriSuaE8jtwr/0iissfcFeSODE5Zie6h8z67b7HPmUbuf8bt/ZpvXxNcwG/0v8+btY8a7Z4d5vD61wYWxK8vjrSafrGAxRbXJxjaykyyfsyElLbxGCx3m35fT2TUtZVz5WVw7Sa2OLtvBelOmoVyuYmggxOL5Q08teW75eZ/d49Bbdh+/+2qRrPRmHss5z8wZd/ktlxy1PFvy6diOJmWsm2sjQJMl8yKGNoed0lpLie7Y931sttlmmDJlCv4676948umnhNUkCyqMJvWcraz6tjk/WWkuyMTVIkpQNhWU4ur8zSduc/7nPvzZH23es8NqFTjwZh6DznetPSPQAZprz7Fcq/dkrplr//HX9+784DP3n5t68SaWbyExETJOwEzp0LqwE0mLxgjRYzqO2BiJ351i807xpzDG5nMJeqsW1l9nOixTxoKXl2JwIAI0O9Yz6Tq1XBuNWg2+HcBJgzBalt/ywe33nP2J935+3lo94P/Nzn37pgs3u3LOlReHTvQOHcAWW5c8RalSwWBzmFEpkoJChkanGTxLwyRsyFIwtkbCBB/G9nmeaNSCqgP4sZTLWXKklpbMtOUTW9IkP5GGl5yNWQ2dWc3yrz7yno+dcMi7Z6/19lEE9V948OuftcY4J8ZutA6Bt9FF7Ca1mDpplb9VARhFn9kGlyyhp0TnhVaQ4FNAZ+tnu2xO4JolMSquh7Ky8Y6tt0V3uQdPvvwsHnp0HuJhs9we9i755C4HnXPABgeMOnZtzuNz+r73s+8cWHdGvhHajYmJjpHpFshUlrDMNn0yAWlSY7Vk0qRJKJcDvPDyS6jX66LMJChte29SAiFr3VZTkCweaP7uAnEaI7ADWJEHr1F6afsZ7/nekf95+GXrqa063eij7Wa7lu1vB2iuZQd0bdwdTrrfmnvau+5/5o9noWre08xHJOpNcsg1NVC0HilMrqnILEjL4tR25bmiYEWtpgBNrVssZ4bxvWXM3Ghj9FbH49GH52HRwuVQysLIyAhc34NiskojRqDKCRrOTVNKG5x56mcueGTUNf7c/O0N59z68zMGwoH9la+UsSWUU0ztOVHGFiRrvJhEczgp2RsDh9q1lGBSw/Hsls0LfUht2E4G40WwAsArV4oJ19ZwfcoYQgGqTGnKaiZNl5nf7/PBj5542Pan/3G0jD270X/+5B0fN5Pto2IdbUSgHgQVpI0QVq2BwHfRaDX6kKEUAMmyeZIKq8nFlbCclB5Qq/kaoCkm4lojqTcxtqcXG8/YCEHZx/OvvIQnnn8ew0NNUxvIFk33p599wM4HXPGJGZ8YXhvvL//TPt3+zO3emVfNPnK5WnpCWo674QJhFsG2fRlPyxTVEcpzPIcJWMT3hQ0SqyqSWd8CmwSXvE/xQZK6PfkaLhbIlrYazumx6aYe/Li8YMup253/9YNPu2g9tV442sa+s79rzwh0gObacyzX2j05/c6T9vvzi38+xe5TM5tmxAqzBjzPQ5yEcBzCR5YOi/A+MRkh25DTt67IwyZrUHR7FhOCGCirwpaEJd5xY8bCshwsXLAUwwMjLTCki89Mc6jEhg7dWw/c89Nf3HXdA18aLUCnfUKd87Pz333bb2/5+pLa0vfnTl4ilk/yotmEnbVkeagjbANNzXzuLCusXLQqLKZsSE40WTWOe9ULEJRsRGoYVkkjZ+eWo0Cmml6ajsphszM9dJpm2P7V/jt98twt37nzn9b07vL/7UU6Z8mcys2P37V3oxqfGIypbBxFCfIwRjdLuHmKlEAxK9jLAmjmyOLCNJzj3waXBJ8COvkcNZ2ZkbQbX1lIm5Gw/+VyWTxMF/cvwdLhYcQpLxkvj5blL09Vk3/0+X0PufyjW390wf92H9b01//8iavGnH31eQcP6sEvqC6sPxyNoFKpiI+ugEa29zDJCQau4wioj+OiMUgY5dYAyGK37aPZepL3odaaWJjPnIvnlibXyTy49WDJllO3OevyL/z0/DV9HDvbP3pHoAM0R++xXyP2/PzfnbH1/c/cf0MaZOtlTqyGm8PwK7aUWQl2XEGSpBEkd4P9nK2bv1X41lGR1mqWEMApE0LBb/KtrioSPJpxKKBJzK6THI52JZbSSQIT9Sd/WH/8xp8693M/fGGNGLTXcSMvuOWCLX56x/Xfenn5y+/zuwM7Q6bIJks6p6WR0jxcPAWLL2VpV1K6JXaJjVoJcrI6BJGOhpUZsYTZYsOZeMf2W+PBx+7Hi0tewkgSwi07cMsuxE+qGaPHqqbOgHf3Pv9xwAkH73D8o0qJceSoe8x5ZU5w2yt/2H9Jvvyk7p7S+hpGpbQtSmI5n8U3M6NWswCaZDVZOpfmIDb/EOy0y+qEQzx4RDc5meeiQY7sdBg30AzraIQhYr7eUE+roCI7TweTZVODaece95njLtltxm6jjtm8z9wX3HvfXbtf8rPvn+mN8TbIVKpolM8FKgE8NeBpHMK1HfiuJ3KbiJ6xnifna3HfKRKBZAGWU+tppPFN2M3MlteR1aQcKGNOLjS83IM14gxsPmGbM67+8g3fHm2L3FF3sa+lO9wBmmvpgV3Td+sF84L/k1//aJsnlj55/pDp38YOLB1mZDAtaMdguDaIcoWmmUXJsLiBsyTuSMlQmAYDpIyEk26SQqtJtlNu/FRWkdgJi1jJDLGwCQSaDvPQE5op+5EZcW4bZ0/42oVHXjWqssuNMc65v/jODj+59drTRvLh7VFSKtdF6oyMn7FlEm2kDeR0v2/pzpjzzHKiHBcRsVmIVYpEZeJJSKDpG4W3b7o53v+B9+KeP/wGjzz1GOyyi8zm54fo6+o2VohmJa3cs+fbP3LK53c88aE1/Xz+d7efDUJ3/vGPew40F5+WW+kmluORR4ZmnjlN2VtAUkzF2xpNgs52M1BaXCcEO7TZ4etY4c3FN9ZCihhhVEMYRdK4ksYGcZTKdWUzLlH7iJfHi0rNyrdP/uIpV++12V6jytKLx2/OfXOC79xy1ieWZUu/FupoPafiWM2E8Z9GZAwE+mG9IeljnucKqymR6K9JBioy0yn9yWG4MmulBFk5mX0CzVTsk+jZyc8Y44+FNeguf9ukrU4668vHXDm5Y330715Onfe/ySPQAZpv8oB3vu4fjwAtjO6694Y973/ugVOsPmvmUDKgjVKw7MIcWelcbsIkuKi3LBI3ipK5Fre7ll4zzxHF9UJH2LrjG1W8jmVxnTPzvEgLYppQFIXyeT3lPgwsrMVuWJo7tbrBMecfeulf//FWrz2vMMZYF9150U4/uPbSb0VWuJlVdVFP69KoI1nvBCBkxDj2YmBdTJYy7vRbFyBTNEGQ9dG+jSYSZHkquksvNxjjlTFx/FgsGlqKZt4UdtrxHPRUqmgONpI+Z+z1H37fPrOPfPc3RhXA/0dn0RFzj9r7ldqCs2zP3zjJQwkpYFjByi5zdp6s0hjUAppFY7rUzYsGFT5PXTPswtA9CYXNjJNEYisVk3BSI7nqCU3h6UNrHDSXJcN6WF1x4SkXnjQamU2CzV8++rN9H3nuz8c07eZmpmTpNE+QxLEwmSZLEIeRlM35kCYsPlrd5qy5cNIVoEl1uY7Fvt0xDizSm6DEJENsRZJlT3N4EwMlU0Uprbzyrk12OPvgfT5/zbZ9Heujf3StdP599RmBDtBcfY5FZ0sAsLv8iT88uP0Dz/yfM3Sf3mFJYwmciiNaP8YXxo2meGJ2V6qo1QehvZYrO4GjlM7bDSecUDPEcUN+rgCaouF05MbP5BXX2MjTGGP6elAOSuhfPEBj8DDqz/8wY9pm5376E0feM0vNikfTwfnund/d8bKf/uj0Jhrvsrs8xCZCvdGAV/YKe6I4gev4olFzaMKoWYkluC9Y5KKrX6ZZhEkIRYcAAlKVS2qQJmucZJLQlHsKdmAhrjfRXe6CFevES0u//89d9j/08B1nPzuaxv2f2Vd6PC5Ui/f561PzZidOvEms68itRBZghb1RC9y0rI74XPGnBTSJeVpWSASaRlmt92VIohhhHCFLMjiwxYi83UjERCLWeR14yIeSoXGm6/hjjzzpx3vN3Gvkn9nute01+37rw/s88uIj5zS9eMNSbxlRrYEsT1ApleX6YCOQpJLZrftTW9JDcC9NQQXQZEMjdZqF6MeClpjRXBZomWLuvSXXWdktw05cJMuyF3fdfvfzDjr4kB9v2/HZXNtOq7V2fzpAc609tGvejokZ+z3X7f7Xl/5yROImOzR1w8ld5grT+iOSxA3P9pDWm9BJAWwSHYm3HVnKgi2wi8YfZhKbRJobqNFkeUtITSmd23R7LPSESSqNKW+bMRNje8bjT3MfjEaWhndtssG2Z350q50fnjFjN3pjj5rHN285b7drfnbFybrLfnusYjQTMmZFBCd1Zkw/4TCyeSTPUriimsyRWdYKraY0R8hkmhem+SaVcmChWjDio8luZ7/kIbJSNBoNjA264Ed2TQ1Zdx6456fO/9Ius+8bNYP+v9xRmuafee8p+z704p+/MaRHNs89pgQVHeY5pQ0rOtBXAsyiEWhlIhDL42KKn3ANpWHYySWl9BwmSeGwSqA1mlGIoFTB4HANtu3A0678u8qSV7rynh8cve9xP/7of3z0lf/lLqzxL587d7b9pRtu+NiIM3RcXTdmVoMSms0iYIB+mix5y880aS25WvISNimuotVUtGcDG4IKP9p2RCUrBu3nKJFQtoKV2/BVGXF/+vwOm/3HBcccccLls9Ss2ho/mJ0dWOtHoAM01/pDvObs4Bm/Ov5tf3vxgRt1F2Y00NQ5iUensBOhqTETfTJaK8YGQe4I8GnmoQAc/p26y0KDqcTHsbDeYbtKEcNXlMtZntLCwEkzhE5RdgJM652CbqvXPPXAcw9stM7bjj7xk98fdUDn3Ju/897rf3X9eXXUtqllIyq3ctiei1Q6xYuUJZbOldaoN2rCAKs4FUYmkab/FqVJj1KW0FXR9VwoFRQydp0jh+eSd2bzSRPac+BoH25T1YLEv+HgfT97/iHvPfbx0WSE/69coc+YZ7zr7rpy798+/fvZppTOpOSY49sOLpBmE/4xLQCa8zoodMorGE3SnNpCkuaIkqJcLgk4fDrPCpcASyOiVZLlIo2TlouDgWUZkw2ZJevp9S89+pBjzv/w5h8edcbitD7606t/+tBl13/vm5atNuHCqR7WUa5WxB5N3C90q8mnLSchmpf1Fl0tDPxWI1aOdEX3ebFoZuWFKzwlPqmadmJ0cshduJkLHXnzZ4yb8dNbTrnz2NHaJPevXDed97w1I9ABmm/NuHe+9TUjcMb9x0944LHfXWWX0p1TFSu4LlKdI3EyNKM6yh4NkW1kcQ6PgW1JjjzTSIySMlOCRG7IGTWaRsGjxoysjZUIEI0zBRMbjPV6ENbq0IEqSo5WiqQWY5I3FeFizFsnWP+Qc4749ANK7Vh0vYySx/l3X7DTtT+/5tRGPrJdiMi2Sw6ilLnx9B0tJsuMcZBtLaZMkIV5NZkvPvI8hcMuWkL7LJRmocwoNJsRXK8kAMcjw5k0YOkQgetBJR7cvDTSWB7ddvABnznnKx/6BrvLW8K2UTL4/+Ju3rLgltKFl35nt6wr/EbupZulVqxSRQbfQGc20pAMp4EX+CJhSE0kLJl0ORuI9jLj6yQLvehaIdCU7nVTJAtJSFZrEce1WrtEz9fq3M6tmvXKpNKE8447/LirRqNmc+4Lc/0vnHLIgbEeOU1X1NSmCiUFK01odVQCfb+k+Ye55ymvCUeOhe06wjzrJEPJD1AnG6otOLYn1RdWEKT87nAt0EojMgYWdeVcfacWVGjV3rHxNif89NhfXPAvnkKdt3VG4E0ZgQ7QfFOGufMl/78RoBn7N+85edc7H7n9vLwcbTRmTGApnSAly8KWWNvAchUslqRcF7ZyEY5EMGxIgYPYWHJjTvK40DUJF6BbQLPIQfcqLGHlKGsf+fI6nXZgdTlopg3YrgUnD/J4Uf7YRGvdAy//2s1PjyYLkblz59pfu+nE/RrNodO0rzeAk+koiUSXqdyiUUSrAmiSACPQEO2ZZG9nyO3CLoe6WcYjmiwS3SYbttLMIMoMyqVuNBuxeAxG9RF0VRwEfo5x1d5Ijfgv9M9v/viT+3z6R4ftdszi0TT2r8ddwZg51tFzfrPLn59/+OzIiTYNTUOTQW67MKi8OIZJFoOOXQShcRxKAxwlJPTKzFimbZXW29GI7d/lmJNZM0XTHZcAhd65+N0kxvi5N6SG7Wu+ddSZZ+619V6jzmfzirlX+N+54py9kiA6aRjDM40HneQGzSgRYCgG7PSTtQFbARErNGxsZFpZxkKAEgcAbTsMqUSUJuKu4foOorhZLPZYXqdzRqvpkVIHnWiUjNu/ybRZp55x0rcuHm1a8tfj+ul8xpszAh2g+eaMc+db/psR4CR57m8en3XXg7+6eMCub18a6yntRvAcAx1H8DXQbDYxtq8KpRKMG9uDrqCKV15djGXLIsDy0KRpNT0EE96I2eXMTmjemIvOcgLJIn6PDSg5xmoP606fhgVDSxHR3DrSSdifPjUxmHzcpV865s7RxGQ+88wz3h2L7tj5Bz/+wVmpSjaVPG1HQ1k5GkkTfrkkDVgtcaWU+qTrvzXxiXcm5Qz0M7UJSMjkNIWN0ZaHRhjB8asYHiK47BZtZuBYsE2CaZP7ssndky4b50y+0Ht2+pOzZ8/usJj/xl1iz2/uuu9A0n9yVjGbDUVDyvY1Go0aSq6HPErEN9NzHMT0iWVGt++JFCKhpLPdSMTj27IGEz9O0XS2MrWkDC8iZ9lKPs/fqcFNagmCOAjdun3KZWdddskO00dnPvcRlxyx90333HCGXcVMHVi6kUdFqIF2BKDTGSBLElmUWVY7ncwgpQ+nZRW2Uim1zKwJsEmIYQdstqPMp2jy4ri3JUJ2ZkGHQMUq9288dZNvn/Xlb1w4Y8w7R53H6b9x2XTe+iaNQAdovkkD3fmavx8Basx+ec+V2/zh0d9/ZcAMfUh1ByV6x1lejq6Shk+AWa3AxEw0acL2cmwycwNMnTQZzz4/Hw/PewkDdRbMaU6dw4ponGwQKdVqDmqZsrfYtzJ1gc0Q644Zg+232xYvLViM556fHw0sie+b2rXhd776hSN/PU29qzlajhP1ZWecfupHhp2hr6GkNrc9jZHGCNzAhdEGsUmlA9m22cVflMYLv1KzIgVFsQabJfAYGcl0cjKa7Gg2pNQ8pJlCrm2ZbCt+IGymlWUYU62yCWv+29bfYo/Lv/DLv4yWMX+j9/OUm0/a/ZYHbj8v9qONI5t2VGnRsGUUnJxNclpK5G4pkEXEYH0EzUYkTXIrbHhax7nwnV0JKE1eBCDwXGgDUEpVuNAQG6TYRZdVXZYujs4/++unXrXHlgfMf6P3d3X7/Dlz5lgX3PWdT72w/Jlj7C7MbKCuYpPA8lwg01KN0ZlCQJ9NS2PSpAkSFLF46SK5fvgfG4MYfcvmR143wiTzHtYC+kW6ZaHftMiU0uid64hQLXj/u3b+7h477HT5vu84aPnqNjad7RndI9ABmqP7+L9le/+tO766+R+evP+8SDXel3m5HcEgdQ28kkKgc6xb6cYWMzZkciEefvQB5G6KWZtvjA2nr4eFywdx132P4pVF/dCaFiw200skySSmaF4xqcOwD1eaf1yyAnmEMVUf07p68N7t3oWXnl+Y3jf30b+sM26Lk8/9wl53KXXAqEqd2ePru330hcXPn4NSNlUFCvQCpME6G0AIMLv7egvzbqbK0HtUcEcuY8oHXY0sbShewCYbbyBNEK8sWCil2DgjGAkA2xWdme97MGkoncxBbiMabtbHd0+4+CPvP+TEI3c7clR19b/RF9znLz38gAdfuP+shju0XuzUaatAHwZ4uStlXKQ2gkoZTrWEwZFh1Or0mV3Zjd5eUJC5bAchyHMtoFlYcRZMZ6GJLphPzzjI6xm6UGp2mer3jz/8yNP32ergwTd6f1e3z6f91Ct/fW73a2+/6lsmSDeM7YhySsRRDld74pfpQGNcTxU77LADlg4tx4MPP4SR2gAcz0KWR4VLQ5bDdlwYI0nqwkgXzV2tBR/lP7KAsJCnCrbjI0/U/MbyxrUH7vnx7170xYtGnYRhdTsXOtuzcgQ6QLNzNrzpI3Dxr2aPf+DlB46bX5//eSuwfa76wzyVCMKEGr8kxnbrzcDWG28Ksmb3/P5uxG6CiZPHo6+riuEowZ+feg7LR5rS9KBTFzr1kSkCzVTSNhRSyXIuWR7yOEGaNdFbLotR+Kx1Z+ZPP/D036aMnXnGR3b/9G1bTNyl/qYPwlv0hXMen+M+9thf9rzt/9x+WqgaM/2KI81W1PVZniWWN9SIUfdKlotdswXgKDZYMwVSGdGauVaGsd0B3vcf78HA0CD+9PAjGByJEWcOMuMKLKX/aZY0YZsMJe3ADnVNh/Zdn/vYF44/7P3HPvUWDcNa+7WsFOx78L4fDau1o+0x+dtyLxZLKivRCKhRTgu9peW7aEShdKLzmLcBZht0tkvkIkEpjrwAHVYNZPHRyhyl1jCOIyntVv0K0kZs7FAv2WDsuud8bq/DrzzgXQf0r7WD/T/s2Dq7TPqkKTXPToN4knKpPvEQR4mYr/u2g7FdXdhyyy2xbHgYTz73FMLGEJTDqy5CuVoS+7ChkSbShPpNjTyTYNcVx0mZRBhqpgmxgWgkbKJcqqIxVK+pprnwV3fNPX3bToLQaDz1Vst97gDN1fKwrL0bNee+2X1/W/7sJ/vT4eOfXPDieOPYaGYxwrQmK3r6L/qZwvSu8eirdAn4fPz5eUhcBcdj8kaGKI2wtD4MZRVMpp37sHIHOa1anAy5TqCQiEWLk1GIbyEolZA0ElihxhjdN29aMO2IL+551P3Tpo2ecjkbf06/6ZSDFowsPFp3640THWtbZ2LEToBRb9Ir0RYT75F6rdCWWUUziZhMC0ucCtC0LAPXyjGlL8C2W2+JxcsH8dd5z2GkyWYHegAWGdC2zhF4NvLaCNzYHgqS6o8P3OugS7fabYcndhxlnf1v1lV93ytzgpsf+NMetz9w00lJOZyV2inyJIWtbdjGgeIhVJZ4aEozV2vD/p7ZbMW4srmOpVsau2eMdGWnOlFxlVIAACAASURBVDvSiyQodrVTp8mFCpOfFAFohLzH6l44wZ1wzeGf/uJF+22x36tv1r6vLt9zy0O3lA494RMfK4/xTlheX7putbsiGswsyQs5Cu2/LBtpaiPNqeNMADtGV3eALbfZHOPGTcC8x5/Gk088hzih9pl2SIWXrdi25YU/J1lqx/HQ5ALdd5GGMSq6tHzTyTMurL5r0uk3HHDDqKrUrC7Hv7Mdfz8CHaDZOSPetBG45KFDnJdeHfjalI0m7faXJ+Zt/9z8+aqWpNAVD1Fel4Qej1nlzRROqNBdqsC4BktrQ8gsBe16Eq+XmASxacgE6COAk7uwGd9GEb1jxBycJT1aigSwUPZoM6LFSievO4O9qvegnxx3x62jzUbnmzeftu+1N13zTdNtzYitUDPizmFaT+AiTaSlXLrzaTZN5GDbrgCLtn6P7GQBNBn9CXh2hpKVYNKE8Vi0dBhDtRDa6UJE+0X6HCGHayvk9RBBboV2aF/3sb0OOvXo3U5/udNd/sZedtTgHnXa4Z9Eb3qy02dNpfk+7acCr4SyW4JjLNQbIUaiJh14/kdGU5q7dLHgYP45zwkymgSaJilcCOKsAcvRcOlUkOTwTcmM9cc/1WONPfNrHz/65zvO2nHUGYvPNXP9X//kpx/5+R03ntmMhqcqp/AkpRsDO8zJViJ1pRHIIIa2I0yeMg4f2Pl9WG/6unjoz4/hnrv/ABLGcVR0+hNoSvyuKYCmo2kU34TlF3GwaZbANRaC3B9O+9PL9j/gUydceOSFHXnKG3u5dT79H4xAB2h2TpE3fASYnX3KrV/t/csT9x09fWbfl+K87j/99PMqyoHYUcjYIatiWeXbkYZqGgRwxWcu0amoAqm/pFZQjI5VCqVj0MmRVkYly8G4chemT1sH85cuxsLlS5F5LuqNEXQTZEZAl92LvO4+jbA8+44zfzNnNJkc3/zkzdUTTjvu4yNm5ITquPKUWt5UcCQrEhZzrclUKqtQ3LW6W8me8NEukRYnSS4emTL+isXVGCWHkXo093YLT0aW9yxOiDw2BiXbNaqZj6hhddsn9vzM6V/de/a8N/yE63zBihH4ypwv7XnXA7eemQTJzNSONWM/37bxJhjbNRZ/fuhRDNRHuHRYmSbUKqO3u895khAI8Sc7ogkihfmkzRF7gejsYGs0kxocR8FxWWxng5CFdSbNMKg7Sxc+v/SS00896/K+9Urzl+J9ZhzulXmniqoawUibUP2Xjho/o/3GbfB8y7lgnJqHpRqYJf/URPP/+Q5+b/u9/902tP+Nn0n9Nm3YgBv0vRin3oelrc/bH8ANq2z3/q3fVj437955as5F3zpwyvQJx40kI+st7h/wa0muavQDdrugIxdpFMPzNSy7+Dl9/akY2zcOy/uHMe9vzyHPmMJVmO/LgwlCLeN3bViXp59tEU7Bv8t9NLPhpt7IputsdsGVs8/55uTJ2zb+pQHuvKkzAq/DCHSA5uswiJ2P+J9H4Py7zt/yZ/dcdfrS+JUPVnstN89DmHomKTNOt4fE0RikJyOTykMLqpnTdl2sdRi9xrs649dyAk3pgCaLwpQSsnAGFdfF9DFjsOlGG+HlVxbgb88+jzphkwICmiDnNkro6R9bnnL457/61RtHU8l2zn1zgqO/+aWDvLHeqXaXO244GoFf9YS1FCNujiFNa8iUSDReC0S0bG3IW614cBITjWaRzyyW7XETvhvAcn3Um4lYsfieA20y+I4LNLMhPyn98MCdD/rWUXudsLhzrbz5I/Dlaz6/z92P3H1ewxpZz/IUxo4dK2buw8M1NBI2gRFoyv9aFkYrc9FlAdIqlYutVctPM894/IlrbDBG0VIpbDtHljfFiN+zS1A59dEOmjWDwKre3b9k4OrAC6K8GVqebRzP9XSU5JkiFdd+GJ5dGb+n8PRhI598FS2zCkzFk08qyCZWPRVHI4/sMWO7wg3Wm7Kwq8sxyweG+hYsXjx+ZCTKh2u5aTRh0pgnr2XoEJSnuclUbixBbi5dEnIoLrHoLES2VmvN9nCjValUWmj57jNWko+rN2vrJGli57kyImLOaHqfMBYiM0rr3CR5rlXGbbesjPESZuL4amg5zUWbbLHher0Tej93x72//8ArSwacSAfIUw9lU0YSRrCoLUeENGugXPHhOz4GhxuwESDj4jplbC5Xd1wg0m2zwLqKFSBxnWI0LJcMrYQh5tJnDuzEWbjz9jufecRhR16+bQdsvvkXX+cbi/O0Mw6dEXgjR+DhkYfHXXTdeSc++OJ9n03cRillKkaWocd20Ru48LwETQ0szNm/7EFHFrIwhaXFeA4p5xrqmcQ42pLUDWoxlSp0TjRCdjVQcQzG9Y5B/9IBLF02gsx3YBwLjsXXMLLNmbfDOz947bRpMxcEqZu7iVGOxZQOZMbRJqOhtTJa6TzndGQsQqnU5JlKHZ3HuZFZqqTyXCmLRXejjBgL+pKVU7TLFPOlYfs22yyMNppRfRIirShYzFROqJY5fD8fpGqV1sZIJmbxMJqfy/g6gX10zpOJViBfXpigyCRnJUj5Vo5MbsFLbaMzh/3Aiv+lbqou+NF3xw8lg0e53fYUGtQHQYChoQGU/LJoxZgOUzyYO1ikmLQbP4qJrLCzaW2ZNGdxMiscj/Iiez7NpLu8XK0CeYIsDTFl/PjUU/5jIwtH5h6271FnHrTTER3LlTfyQvsHn73Vf238mZo3fKzVpWc08whaOYiT7O+swMRVoJ2T3jrmxTlC2yo2dtF9QLf8HLnmY5QrL9MIgV00h1lIse7UKVh//Q2xfNkwnnz6VUD5WLpkkE0txnPcVOeZZWujYwIsyy3OeX6QuMFzMbnyJ5/nOScLntf8u1KJiZuDpuSrbPPNZ4y8+z3bvjJxYh8WLl4w6dFHHh/71FMv6WbsoN4wCMOimUlSrJh6ZBJhZaEC0T7yKi0mxCKms83oViqVl0ul0l+yOJs+ODi4SRRFnjhdME0pATyrJG9gzG2u5GLKHQWLQa28yLtKanCn97/nNxvPWn/ALnmzvn/l1e984pXFTmJ1I2oqBImGShNYNrWbShK1uC28CulxasGDYZWAWfSMtCTGFVeN1vRNA3fegWT7UxidyTHJuCjIbdiJnaOR/3m/nfb7+sWnXXzvaJMLvYWXXOerVxmBDtDsnA5v2Ag8MfzEmPOvOvOIv85/+NBlamBSZiewjUKgFMb5AbaaMR1juxWemf8q/vLqMAYTW5p6siQVhkToC4ldY9xdoU9K6PQhndBekX6S5tKUkmchAkcjGY7Y6wwrKCNjQo2j0Gg0ENhdCJtZrlUpT2vNvKKg4jAxuVdhP0Nu8hiOTVoiMZRPBUGgmlHTGGWlBiaU9us8qyiTawI5JW2g2iSxbiV7t6BYgcraVa4W85Lz5p9rrRNjjM7znLMrcSYhs1C0MnGRW5LkD2VYruSkkEscCP8qMJMAlxO9kXhAZRDKxKiVnVqwMyu3M7tw1dZGJXaiYyuyrRJ0rFPxu4xI72S5dAg3ak1Yriudx2Q2hbFqxUmyqaOdD78CABMLaO5LUW6XR6alQ1Z0nUjhORo2DMaWu56b3Dv1a7tu/R/3fnbX2aOy8/gNu7D+hQ+mx+N9tbsOuO2Pt51oStamDDpgDCIbUXg8ed7xTC4agrhIajNmRYKN6APFb7Pw3BRvVcaQaoOcXqo6h6dSdPsOZs7YEG/f9h1YtKwff7j/Ybw8fzFSQ5NyB8PDwxK5SB/JNlP62t1ZubBZlVltb8fK5wjvLCTwXYV1152IjTeejnHju+WKeOWVhXjiiRewZGkTjVAhiqkvdoQgZcIpNY5yzRlX0ngE7ArA+/vcAMoASqWS+I8yv5w/nRY4zmNeZn4xZiphPplUW+jI4BVcKSaP6cFWW27aP2X6xPjlhQt775z7f9z+Rq5Sqxt5xsVhkSsvumcSq4YNV4wRVcVCMG6Z5FODTqEQcbLM2hLRJACca7+iuiM4F5mixRtfUzgNJMNRiHr+46u+c8kpe3xg9Pmb/guXS+ctr/MIdIDm6zygnY9bAbicQ8787IGPzP/TuSPO0PjUYzd4hqpXhp1mmNxbxd47/Qc2mtaN3/3xT7j1j/OwpA44bllutNrEEJaRd1aJ1Si4hkwYTWoBPSmnu7ktusEQTXj00OwfEvmhw8YhzxYD94jZz2TeWiJ8X2uYoUGUvArfhZCG01YGTQY1qqHke6h0VdGMI4yEMXLDInFxqag8gzKpaBv5sLS/YqKS2z/B2ApyMpdO0/aDz2d5vkpzDW1LClH/CjAnk5bQmvI57CgtEGZLM9lKbOFkTwiasnSpLFi5EqsT/im2g0A0kxmPfodD9QGUPB+OZYlhdGNwBIFfRky7GkEQRRKJsEfc/pZBdDt+UibidoWzFZYtwD8rsrNLgY8obKBkWUhqUXOs333BoQcccc5nd/1KB2SuJjeFF8xc/8Kr53zkZ7++ebbd7W0Qc4GmaGVF0ELbo3bpfOU5SzaTCwk5p1opN5S88Pyj32qqFWzN8y6CYzJUHAvjx/Rhww03RP/QMB5/8lksHhiEX+4VD0h5ZDka9RoqQUnOn1XP/f9uqNrX04rUopbvJ890gj42/TmOhucpeL5CV1cXslRhweJ+YTLTTCNJC6BGf12pAUiZmdrGlYy9sJotZrO9HVz0cv8ldSzJpSnKVmR1eUEQ5Ply/rP6zvdr2qopyFjYKgML3pVSgGpXGYuXLMOyoSbsUg+ijHmgXFgn4knL1CBxaZDPLu4RxaKvtX1i3E6w3dZOF4sB1jnEEWIFQOY+FfdJebBZi3nrzfzld2/5jk/dcsUdv11NTsfOZoyiEegAzVF0sN/MXX186L6+T3/18J8lpeb7GrqB3KUHH+GhLtJhKgG2njUDM6ePx6NPPIUH5r2KoZjdKYGU6hzaEynG5aUFuGxrBpluQsDGTtjcRpA7wq41TAN2HqLbZFh/yiSJcVvQP4gl9SZGEgMvCKAtR8yQo2YDPWRz4gzG9mXS8DlbJCHIb1SqJfm+ME1RT3mvVuLRWbA6OSwCYE4qAvTUSkNzzjAFKhRYSmBWsCYrexGK39lUo6CtgjUULM33tCYRyr9atMUqzTgFoyTJOyI0U63caWa7F5NPm2QUzCDVdeYth+jp6UIUJYWuK6VHTYKqz3hJgn+HBbfWRFV0npPFEWApKUC0Oyp2qw0JuF8EpFQIEHQIm5nmEncYDow0uuzuOw864FOnHrvPqY91usvfzKvuH3/XQwseKv30np/ufeNdN3wjtKKZumQjU4mwYys9NNtsZnGuEfBQ3Mi/06uxUqnINTowNEQRBTzbolgROk/gMNMbkNdwoUaOLUqMLGiazVjAJcEbmXn5XJ7PPF9XuUb+f3uxcgFXvJ56UUsVFRCbCyRdRDxqbg8UGiGb1lh6JrdYNDSR+WPtgKKU9ueJ7HMVNrf9/QWD2yqjt5AbLYlIQLIMIp341Kq2StrFNViAWJay6TlLYEtmsllvwLZ9ufxsp4IkNUhTLhbjwlKMGDdXcGgpRkVNK3ve5NKqtcKCSnTqrWtTmMxVrtViu9sIs6W91kakSN2lrnR48dBXbr7tF5ftuN6O4T8+Uzqv6IzA6zcCHaD5+o1l55NWGYEPHPaOjyxKl/6khtBObQPXZh5GDp1yMqLtjQ2XYibboB4m6GecpOUXRt9xirIiU5Ijt1OkWiMlCDM2vFTc+5DZLNUCeTOX5hNYKUo6w6YTu7HDO7bFcFTD3Af/gmeX1KC9btSGQinVlXsq8pORbpwxyIY62oC8pKtyzFx/fXSVK5j39HPCZg5FOWJFgNpiDslQkkGR9xY8AmEj963NZrYToVs1b7Faaj+ErWDWhyq6eVlua4PHdlmyeF/hX8iJTSYWAsvWzzYg0LmC3eoOz5Egp60TJ22hOKif4xY6iJsxfD+ASTK4toU0bCJLYrguTe4t0bxyHITRkbJiMbm2mz+kT4QwVQn3Jc0I8lC0aglRqZQw0l8zrnFqE6qTr9x/133OPmH/0xd29GCr5y1hrplr337NLXv94nc3f7NmGjNSiy7uBDPtkvkqBv2tXrA28GEZWUrJcYahkRqMLPTopxnDZrdORv1uywC+xXiL4T+bilg5UGzzs+BoC2GjCc1rd5UmpNeO2GsB6Kpgk6+1lS1sIPXcsgfUCGcEeXQ/sETnSF9YMfpcpSmBV16hRS6YTt4Liu9qXauqYOp5TQogpjicr9RsjjICNAuNalJcK3BEyrOi/M7nCXyzDLblolmLEASlgmGkEjQvQhGMxeuKANWS9CWJmiTBLECTGeis5HDJKOWUQsPKu41IWsloFmNdAFDuDz+ruDNxYSmaTmapszWpkd3062tv/8LbZ7190ep5Zna2am0dgQ7QXFuP7Fu8X9t9ZtMfvzqy8BN2d6lgzHJWsm0gi5AloZSjKGCU0jInnSRn0QnQvjBqHglGJta4SiLcMt7IlQUvYekqQ27R6zGV0hnNqCnuD3SGDcdV8Y5tt8TSWj9+c9+DWBpyoimh5FQRsvnAsVrgEPBZAkzq0shgJ1z1+/jwzruiWq3i1tvuxJKBYYwkQGwssIe0cA4kvkpht5iOtr6rGO6iFFdMVsXPYopY+Tu1V5yMqFejLcz4sX1Ikhj1MBQtaUKWVUr9jgDRItu4zfgItbuCedKMoGs1JnD0UpUgYxOVlNg4+bFpgZNXMYFxQraYkcxOglaZNBNGtng9u1ZpVVRMqNSDFeV7Tm4CNqXlV5qVWkCToJSULz1LVdjj9d70mY986kvH7Dt7yVt8+nW+/p8Ygc9d8F8fv+PBu05MrGRjrmO4QKHkogCcXIxxwdICRi3Gk6piMnApr8+YizRXTMj5oIcmrXosl5rdqLVYKc4herLGzRA2GAnrIqzVUS6XJXyhzZj/3SYLoPp/H7pF27c1wgIqW1ngwr7SC4HG6MI0soeOcKudz74SQBe4rQU0W530bU24/Fs7LSkrGElez/xMKZPzGuaAMRUpaxb72QasrftAYcFGX8uCCXbtQKyhuNzmPhg2RXLRRzKYkgT6bGiys5D4yfb1l9NSqmVl1AaaYp4v5XIjnyX3B9nHluRGXDpawLQ1jGli0BhovHrdxZfvfOAHD3zinzg9Oi/pjMDrNgIdoPm6DWXng9ojMOe+OX0nf/sbT9XQGGsc6oVyASdy45dGkuK0E8ZghZioBWZas05xo29NfKINLCasokzc8n4Um4/Cr1FYSoJN10UQeEiyFMONJkK2rSuyDUVpuvCMbDU3KAr7GexmkDQjjO3pxswNZwiL8fxzL6J/cAhJXpTNJZJRsfTWKo+1JieW6NvlKmmiIMAU5q+lLW1NPMJQ0ghFmilSAZqOY2Hq5CnwPA9LliyRPxYtgQApR/u+LyxQ+8HG9DbGW/Ecjehtgmd20vJzi3ESsEo/Q5YoySzFtJ9xC8soTr7tLlsytW3cyPetcnyKg1Q0CHEyJGHFz48JDgxZag86saAi03CMdfNh/3XYuV/b72sPd66ENWcEDr/o8N1uvvfm84yNmcbTqKf1FmNt4LCZLktlcSMLFWr/COS4QCRbTm0wS8grFkJFM8uqD/FMWOU5lrtXnXTkmljlifbCTTTR7HQXHbSDTBpkaNxAgMVSOfXBqZTJeYlr7YqZPAQYunLdtK+DVQHkCoa0xQwWfrEtWUoL0P0diyq9eHIhtMr17b1raaFbv0qFZNWH3LPISq7yPLWS7fuBlC1yKa/Tn5T3AC7oROLSin0VnTalBfKe9ue0kGMLiEuhpwhAL5qCeKxa99f2Ql6Acm5heOnAQNUpf6J/3sI7OpKWNecaXRu2tAM014ajuJrtw46f3WWvlxe+cGPqJDa7nY1FBrLYSLHHaz1YsEVW/IOATunjLhpZ5LUt2zijiwmMjIvY7ZD4bEUi8kbNUl3Rwcobty2pNLx5M8uZjF97ohDg1boJt0vDbDwKPOo1E5CzrJSqyOIE9XqTs5ewrVLaLqaNlY0+7WYZ/vtrxr/g/bgfLG21urcFsxV/b+u+WD6XdCPfR71elz+e54vGk9vPCaLdENAej/ZXtSdDlgWlLGlS+WxOwPJvBLNKwyYryvSlVjc5k38IHoVJZgORgOcWc7lKM1N7n6QrOc8FvDMzO45DsUhStpZITzcqxW5uX3/YEV/6+rF7fXHBanYqdjbnnxiBz3/n8/v97I6fne/1lKY1kcDyNEaaQ608ezabkAksWDxZdCmNVEzcaQze7tRuL14KHXN78bVyYVSUc19rY7TqwqmN1QqwWTDpUnoWOzMCVlYweGamyNPCY5ffHqUpHDKGGUvcLWDK8raArsKMXq4f6dIu9I6yP60AiPbz7deseo0VDOZrr/BCDy2NRK2Nfi3Afu112v7973haNuAJaC60oLzm2fxXfGZhkC+67ZY+vX0fa91Ii/ulXdyf2Lmuxdt05b2Tf8taLKdht7yxEis2Ry97fP73R1NgxT9xCXRe8gaPQAdovsEDPBo/fpt9t/vGUDh4chORlVqZREISGa4KMosJptAQ8lHcuNs/i5vlqsBTCtFk21gO1kWJrCgYrWRI21GJLfnliqabFTd5Aaet7vGW8TvLhGxooeUPlfrUN0kCSv5/2zsXIDvKKo+f7r59HzOTyWSSEJS3EjFiRCC7teuCiLWFi4iwChp5yUMTWEUNu+AqEsQXIiDsou5bV3DBXQUJIgYXCwWFLQRlxcCWIEGTkEASksnMfd/u3jrnfF/3d+8MJGi4NUn/b9XUvO7tx68f37/Pd87/xFptasYYkyWVHk47hcbCVosZspbCNojB3yUfy05H20iDrZrl6cd2JIJSBhqzTl6JRGjtlLYpAJjqXLICkqvZhSiPS6aSl/NieVy24paXKQURnLsmOWmaDKCDri6doyD63RwPtmkpFsWWplLmaHGFarUJ5d/2WqVG+d6PLFl2wYWnfOSXeTzXd4d9fjx5vHTtddeeevP3blkWjgy+dqwxRoVKQfJvuUpFo/gmB1BydTWvUK5bzjOU8ztLGRGrHVuUkkYEORrflb3cdd3r7IU5B62uMw9AUo3Ntj5xm8ol9jdri8PBzFnDUow0tm2CwkKZgqBEzRq7OPCbTW6zifbJOc3PWCK+1Hi+S7ilUVnz53S7Jx9hLUQyHvdmOa6AfKHCJleQas9yFs+eFkCGIc0amU0bN240uaGFtChQt9x0RrObaISmRJz5OBmhKTnccv2qmK5VGzQyPEL8zN/ZUv34c48/eyWE5u5w5e46+wChuescq11mS486/aj/eGr9msWdQuRzj+XIj9ICEpm+NgOJTCv1JGjJdJdzN5Zogwl7aB6heZmop75VLMu1NRtHQZxiFhVXRrXy+5zonQyUPG6Z3C62abGrVuHHEQeN3FihqQUyJjoiy7KDrjvF7R6qrNuKreaWXCs7WEQsKvWzVgTLBLwZyMTuxA7AKhM1smtUOQ/q/Dn5jORUanS3FIaSA/eKffYTc/bHHnuMtoxt1ahOEBpGvhGl2meEOadbxpFREdAq6mV9PI3Jx0AtjZoDweAd57z7fVdf8t6PPeB5XLqM165KYE2ypnLl33/xhBtv++YlVPFfExViascN4v72cm5qNUom0IyxuuQEOyKtN7KXCTp7wndHB/m6zaLz3R6W/Ak+pyXSF/jEzR5KxYSKoU/Dw0O0aNFh1IxieviXj9CmjVvIS4zvpJkOF5N5nVXO7gFWYBohqik63TnUcj+R903+uyuou25d5npUE/jsqVkf4sz1KqJcaAlLXncgnbZiCgslWrBgAc2fP58eeOBBevrpDRR1NMqZikz5aE/uqqTuqBen5NSaoi4t2gso4AgpWydxKnW1Hu0xMHr+737++D+hUG9XvVJ3ze2G0Nw1j9u03uqDjn71yobXOqbutTyuhI5lusve7TVny4o1lnJy280a46Siy06hpyLM5Fe6EQMeiNTuh0WjCiLrXWkjgrJA02LPDnzpFBpPv9mCAun2wdNVnky/S2SApwudyXGJAEp6lRGHFKSFMvag6JicDcCaK2am/42tSra/HrVaus50X3hKkqe8OXLiiGvmwdtvv6u/qIn2mAIgGTZjrsQv0ciMYTru2LfS7Flz6JZbbqG1a9dSs81FVL5ENDkXzA5cMk5KMYjuhfXM5G1q1hs0OnOUmhMN2Z64GUWDlcF73nvqmRd/6oxLWGRm4dxpfWZi416IwOpkdfmKK648/dt33nppy2vtVR4eoHqnmVZi28gmX858nXEmMl/bHVusIikw3ULIDjD2mlUB57wctaY/ZkI0rYKPIypXitRu1sijFs2cMUALX7eATj75JNo6MUG33nY7PfzwryhqcupMmXzJ6eQHLp7xsNXYtn2mPcEz/0l+zOoViDx3oj23JAO1SyBaoajXidkXI7x7UwOkk5LYKXULVytYOce8027S8IwROvLII+mwww6je+75CT3yyCO0ZctW86DrRF97eEmtnkkJ0EiyvmSWxSNqtDpiKZW0EvLa0Ta/Toufe2L9SuRo4l7QTwIQmv2knZN1zT/qoBV1ah3fSJpezPmTHPUwwos7/EhHCzOesF+lihw7pS1JVV3G525EU27utiJUhBh3FNaooa2SdoWo9aa0HpSa26liV+7ZHCkxZuVSsRqpXYmIPjOdp8n2OmTx5yQy6U6tscjLrC+7LFJkEDC5mVLJa7vvsFE6Rwu9IrUiNWqWtiVsyO6rETM3m5ROQHaaUtR5T5ERV6yywJZe5VlFOud6zRgcote9diG97GUvp/9eeSc9t3WbDkLq5iIC2jS21HWYyLEr8LnyXQoMuJCBzeFbcXt4aPihvzzxxEuuPO/yH2LA2r0uau5cde5nzz3+9h/94PJqu35QXPJ87QTFD1ixmH/LZSONaRLiRlRs+J8Jye4hZVLtuBGaVhxJKkw6Za7PK3q+q2iSop92UwqTWNKyIXq55NOBB76CSlk8AwAAGLdJREFU3nT0G6nabNC99/6UfvPEU1pYmHDvb05FkfirfufCPZP3yJeyiD475W1sHawMlJVy5b24MWhkUx+6phKKRtCZUh1+MOwdUC2X7hz0zCGMk0o5T5wLmPbbbz/ad9996cknV0thYKPeSr1101SE3hJ9cyNNjSDch0XyJe1lbMsYDVdmUGNb7bHbv7nibX/+R0c+uXudtdib6U4AQnO6H6FdcPsOOfbQq9Y8u/4jhYFi0ErY31Gnp+SeyP2GZRzRPCKd4nFFpkbW0lfX/7Indok2miT5NK/QiDqbt2hFqQpELZIRi0kz/c1jD0f2NGLJFeiBWgpJ85K2VLUGbMNkzKFl4JMpL+2/rrlQRij3CE1bYW+3QYUwSR4Wr4MjpxxdZO88KUowPFSw6gDHBT5hkBmmK5dsSGRrE54y40pw3gebMiC5qolHReloEtOs4Vm0YcMG8RPk6lbeZ+kbzzlrZuDSsdfydTiLCC5wIQH5kR8PFQfvOvOUUz++/P3LH9oFT01s8g4SOO9zH3z7d76/4rqG19mXxaTMCHOkn6N87GRgLtEOd8Qxy3y+Bzy7yt7cRY1+ZlI0e8DJClpYYLLQlHaT7FZU4Ohjk0qlkGbNGZEHwo2bnuMeBCx/pSNQwl98/hfL0s3HPqnp86kWv3G1udwLJAqo96Z0T4xfpTuDoFXn3bmoVvP1ylAXcSbA3Rx0m4oQUyHkAibOCc/M8dnInfO22X+Tczc1N7N3qDb3gSmqkNxUm04nopHBmbRty9a47BWvu/uOOz556AGHbt3B0wBvA4GdQgBCc6dgxEJcAoe+9Y/fs27ThuvbflTgqTUVTvoOHqR06lkjl1rFyn07eApau9JoVTnbqZhcJhvR6ymm0RxCTkXiQYMjk20xOmYjZVvhbbuPSF90sw1pNw0pbOW2i2KQlLaGlMgEBw4DFmNO3+eEhabmcVqhyWWt3c4muhLuCGKLmbgbkZgrF0Op3ra9wev1ppo0s/CM1OaEc+LEyD2N2moU1L7kJxNdYn5szRQUfGlt2ZHt5gHRkyp6XgaLRLZKKpUqGsH0Q6pzhIgFtIn2iBhmS6bsIKVinKvSeWI8ZAfAlvf4krOXnHLZuZ94EGf87k9g6fLzzr955XeXtQrRARxl5+uSc3RFnNnz07ocTMLRM4XuPDt2C1J9nz606YOgq6n4uuAmA9rNh6Uge+Zya1pjRC7XKD8MlagjAlh7qqvwZEN391ribbdFNSbfVMSj3md4qlzX3S0dWWD2uhel4rln6tzOOGiDBZM7bpY3VdEU7xfPothWs5KPWijJvYhFJkc6FdBUQlO31a0VtGzl4dk8iBc4naje3vaGw//0A5ffuPw/F3mLkE+9+1++02oPITSn1eHYPTbmM1+9ep9rv3Ltz5KA5olZOxsbN9igWAcVtivhbjXFUkGiaqwA2R9Tc5lU9PDv8p37mndaIoy4uIVvpBMTEyLKJGIhg4+ZHpOqdDeDKoteij5LhaZy5lVzLmYrUmsgEYgcNmEDlU5b/idDmzFnl2ytSLv6hJ5ar0h3EFPxLZFS83mOUIrRMgtMXg47MXseLVy4kObNm0erVq2iNU+vF+FnixU0SpvGh9IB2EZHpVMQeRKRFFP7UihdkXgA4+grs6zWayIqeZASiyRfq/olt1N+yoQxRzX5//xejrbalpm85aVQK/GTTkyhV6ASlf7vpLed+Om/u/iaG3ePsxR7sT0CPI3+4csvOP2m73z74qiQzG9ETSmeK1VK1GpYQ/ZsCOkVkFnKCIcLnZaP6fWitkWZaLM2ZuYv1qvW/Mpxe7lqPe1TLvpLrMc0Sik+t+Kj5uQ02o4HehWYh00bIeQWluYhU0SZieQbtStXsN5csm3sgcYPtLohqWVGWgw0Ve4nv0/iw+wvaps5pB1/7MJdkd7DtzfHlR8QreOE71MhDOX+yN2bODLK13ApLMeNsdo9X/vHfz5/8Vve8avtHXf8HwR2NgEIzZ1NFMsTArMP3fvfIi8+WyZ7ixpVEDsPrrQ0OY48PST5lY63pmsTJEODEXKcayT+jUlC49Wq9DTmSCBLSzf+4FZ08+dtpXevyLSRk9jXvsLSbzjuSPQvDAviTycm5X53FTsLTTFG5kpvyY80RTumi07Mgs94YMo0dVvNzeWLItp7n/1o5swZ9NvfrqGxsTE1l3aiPdnpk/1RKr1NdaxW6UYivIcGBukNf7KIBodn0MqVK2nL+IRWoMeUdTNpm04/kjKghUuSKCBXvs+WhIZxR6yR0oGf96PdpkowwEh/veSMcy59x4dOuBnRkHxd4FyN/vlPX33qjTff9MmgEu4VhUS1RpVK5TI1m83UpzbLKdYHGZuTqDMUtlrdGpg79kcOTp2qdmzN7DR3+vjIok9FpuM/IZ3KdWpbvTflZau/zS+un6cKQ9OSUm5Q3WLO3oPkmnX+x4Kz91K1bgy9Z4VdX2+6gH2fs8ZM4Box7C5rkoVnj9Dke4rMTiSJPDDyd77vbBuboMGBARHgtbHxbSccd+JlX7josq8ccMAB6HOer0t4WuwthOa0OAy730bMee3eb4r8+DavEMyQKW1x29DTzZowi39k2l/ZkVjm7pr6SPIUcKEgN1SOjDRaTe1vzNN2xoand8rNRiemEphWTPG4xNPaLBa1ipwNzwMRXNLGzghEbZPJvc65NYoONRxbFOskibpq1xArPHlbPTP1xQJZLEo4jzJq08DAkER2t22b0CCIk6PGy+0uitIK8sAs362C5eUODlbouGPfQiOzR+mmm26izWPbZDtabZ5u10hrFtHUrebx152F45lDqaSXaCxRo9GQKM9AqSxMGuONjQOlyqW3f+87X1/08kW13e9MxR5tj8CqZ1cNXXPNl06+deVtH+sE0fwOFwBxGoZpBsDnj52BYJUpjQ0cX1yO6Ov10tbiHJNrnImwLCcz+5x06jadwMxDkW0ey7nJXR2FNEJpu/CorZGTb2ym5Lv20whNlqxpu0fOGZce41m6TKZap6bU26lrspCc2vDduds9D369V6aMemzZ7If4SNj38fHgnNSBSoXqE3WZlYib0Vi7Xv/qZz5x6ZXLli5bv71jjf+DwEtBAELzpaCKZdLdq38x8vZjjrl2xsjMMzpx22u0G6YyOlaDdCPiQp4+72gUUIYT08HG3jzTCJtT5Z0m2LPw44hkz1mc5VlNni53G+CJ0OTOQJWKTO3zHPZQpSyRgWZHDZT5PTwtLR14uHWjGb8CNmo3U1aSAmBM3ufMmUN77rknNWt1Wrt2DbXbum+cn8nfrZWSNYS3RutuVau2ydRWmzG3+OMfTbU5V+lyq0nmxO0295g3R7Zzzbp11Gx3qFqvU6lSEXsXEZFcNd5zPrpuhRzx0DSEouS3clekkNtjBoWkVas/N2to1tUXnL/8yx867TQtWccrlwRWJauK11z8pXf914pvfyocKu9fi5rSFT2U1q7Gr5LznY1Lgo1ksg4KyyV5j03nsNe07ZCVAbVnplv8osbrmduCFu+IwOM86K7WjKa63ERG9WHTJoy4scgs8smFePKgWdAIJ2+Teu/q5+w1nk6r9xz9HRGaz3fC8H2sx9XNeetkoWn/2ZWzzbmz5iFXetC3IukENmvmKNW2jTebE42bP7hkybKrPnnVs7k8cbHT04IAhOa0OAy750Z849ZvLDxj6TnXD4/MfE1YCorFgQpN1KtUKHI1dEfyiHiKmqNoPA3HL77p6x1eb6Bunpfe9LVtowhGFpnOZJZrizL5pqwDxyTRFXfkyZ8VJIssXuKcWaM0OjpC47WqmJzX21yAoNFT1bu8DeyzqQU8LPS4ipx/Hh0dlRzMRq1Ga9f+TqbGJSrJ74kikw/pi2gVSyIjVnvtU2xPd+kVLfYxmkMW+lpJLtHTApunt4XfwMwZFMWJtN3k3FW2fZJpdu521HN69U7/scD0zXs5GtKqNpNmtbZ5rz32uubCsz585dKlS1E8sHteoi96r8666NwP3vaD2/+m1mnsWx6qeJ1mS5bhRjD5VLXXJ+u1sFiUa5bTUmzHKyviNP94ityRNOxuhGa6pZl45M9laSfdnX5UAHIxji47m2q3OZXGX5O3tBCkKQD8EMfbaO89HIU1N6QpWbmiT9fzwq/eXXXvXy/qYNgpdKN0WWBWymW5P9QmqpS04kaB6Cdnn3L2x6757BdQvPei4OLNO5vA9q6Lnb0+LC9HBLiY4F3vO3XRU2ueuOTXT/7mzUEpGAjKIbWiFrU7HZo7d64IRSs0+eZuI5rWhiirvrbC0xQQGCEq0+fOWex6QMqNPw0ZqBdgr9Bknz42JK+UitobnBJ689FH0+tf/zp66Bc/p/vuv5+qzRa1Ze6fK9t16lmFpm6vFNJE2sWD18GRBY7k8MAqP0tAxvY516gtFxHJ+52QSFcxhS1cYlN1k27A/y8G2e+ciRCy57qWHUlrPRbx49U6lQolPdNMuzz3tNOWmbb4KdDOSFIly/6IPlE72TwyOOOGjy674LNLT1m6KUenLHZ1Bwic89FzF99x152f2rRt8/zKYCW9xtxiNpv2ErE9Fl8D5qHKjWJOyl90VVh6UbsCsns6XFwrrLQzFdb2es+Ept4cuoSmY6vED5Cc1iI+tvJ8q+1n7SvLGbeR0azYUIKqvY0mdkBouvs9qZh8O593p9LlvmBmN7ianlNsOvU2i+bNQUS3vP+MM798xfIr/ncHDineAgIvKQEIzZcULxbOBG747g2HfO3fv/7XP/3ZfccOjsyYnXixxzlehSLnQ2rVsxvp4Jsp50pKpDBS26F0utxUoqqG4naKGgG1bSsn2ZDY9pU9QROdeovFOqVerVG5UKBKqUQDpSK97di30iGHLKS77/kx/fien9BEs65Ck22IpCMKi1s7tZ1N+UvhUoftSiIqBkVJymexKQMCZ5xJlx/j52kKfGxnD3um9F6QVhpzZFIKqXiazwzage9Rq1mlcrlI1XpDRGaxPEC1Ohtcc3GTFmV0L9OpoBVlKRtHARcKdSLOydx8+uJTP3/Qqw7+xkVnfWADzmAQmIrAWRf91Ukrvn/r37aSzkLyk6Kb8tL1UONUm/cuR85jo7S0pE+uZOdtbsmM6xuZNYCQPGoJima2Re56pBiwK0fTTpvbiGb3VskcieP+0OXpq54NXQXmk4qDdkBoZiLW9CT/A04xeUj0fa4sp+rERLvkF9e98Ygjv7rgoP2/eNWFV1X/gEXjoyCw0whAaO40lFjQCxFYcfeKAz9+ySfevGb9mtPanc6hQ6PDQ1zUo5XjahkkVc8SqYyoVCxSuaz5kjaHk02QbMK/3O05Z9IMNL1DlN0WNYt3OnG4BTdcUCDtGkPyoo505eGI4YIFr6Z99tmHHn30UVr79DqqNpsiNLmogX0/ZRtMJIOjCFYIS3SDp7qN+bIIZhPRZKsRP+Tp8iCdPpdiCm5CbIdYpwjKVt8mHRWXdvCzhUdaJMTjshYzSaTIL1CLc0sLWQ6sDMDGAF4sqa3/oZ1BZAsjrlT1i51GtbE29Ir/sPWJ9VehFzKu5xcikCRJ4fzLLjziX6//l3d7Be+4IAj2DIIg7LIrkoh/lstso5w2qqkPTF2y1PySVaW7y9NqdvV7FdnJ1j72mhGhaavPM/nHQnFSxbkYoGsEU1wl+PHP7fRlOgPJdWM7lqWL7NpgbTphquyn4tUbte2dOnc/71br2+tf7odSte9U4/Otzzw+cmeu2kSt6Xn+s75HPz7+L95+++WfXn7nK0dfOYYzGASmCwEIzelyJHKwHQ8++GD41MZ1Cx7+5S/2v/6G6w/bOjF+jFfyD6q36jNnzhgMEva86zRpaKBCc2ePJq961YHrgqAw66GHfj74zMZNVCxXqBlxzEO7fjTbEbE9kR0QpG7caU9pI4DPh9ZGLziqKQMKGz77PoWh/s4Cl8Vwb7V2d6M5zbWUgh8jCDnnk9MBrCjU9but7LItcmqfujbT5rxx1Xi9Xpd1cNGSLSji4p1GoyY90fllB3HLIBWmHLK0Pn2mDahdERcCea2kRe3415TQ95csPe+Hbzji9fedcMQJ4zk4HbGLfyCBJEm8b/3oW/NuufmOV9/1g7sObDXqhw8MDOzf7LTLnXbbK5VKnhGC7jgjks24bGV2RO62iLrSP8R2qsK4JfgUS3dIP9aePgm56cMmv1s/atcpcw9OYN/8XRWkl3he7FOiDRiselM/iK7oqvi5pyXzXDgnW8i3G/582lTLTTj1KOEHaPOS9aXbYdbl+57HXsMmXivLMduTRGK5KVmcTIFr4eVZkeV1kHhJnMSc6LKWYnrgiD876omzTn/P6pOPP3md53GLBbxAYPoQgNCcPsciN1vCA9Sjjz46uNVrzv7SddfOvPd/7j/quY3rjwoL/stDjypR1Ij3GJ216fBFhz04Pr5tj9Wr1yzaMjZW8YJi0mjHXsx9H/0iNVtN8sMC35pNzDJ11CwmiTeTKC50Ohwn6O70YX9PKE7CghcHvkQMgyiKC4XA93mZZnrai82AohPt3aMPDwCFIOT3BGFYKgaB50lXng53Lilo7mZqBC1DCTtwdnUe0XEk3T7rQGj3x4si9sULqdlsc/DCC8NS0mzWkyhKOkHgJaYoyfdiz2OrJjWuTmI/8aKYwz+dJI69OAooqEVePF6gII4pjgKvsIHi5OmyV77/nSecdN85ixf/9vDDDx9HJDM3l+FO3dFVq1YVx2hsiAoDlUKrpeqqUqEKETWdsGSpJ8RXf5FbUUrc0OOOf7jpuYaYL/w5vzfxUq7cSY6Wkxayo9u2I9sy1bISG741a46TOKkklWYcx+MHH3yw5ujgBQLTkACE5jQ8KHnbJBZ5TxAVyrRWBqi9iegp6iT70+aIqOKtpeEgWB949LLtk4koSgKdiH9x5/YzRM/QM90r4F/nbX+dZ592diEshLNqtdirVWv+nnuOJFu31L1SmXM024nnsyDkya8G8c/Npp/4gW/+xsuvk9ecXHrLn4lLZa9arXpcDR7HvPyq987jj2udefKZEzSXiDY628e/y2suzZ7bPSBzFIT/w3z4e0f47s8KN0IEZPvHGO8AARAAARD4/Qi8uMH491sHPgUCIAACIAACIAACIJBDAhCaOTzo2GUQAAEQAAEQAAEQ6AcBCM1+UMY6QAAEQAAEQAAEQCCHBCA0c3jQscsgAAIgAAIgAAIg0A8CEJr9oIx1gAAIgAAIgAAIgEAOCUBo5vCgY5dBAARAAARAAARAoB8EIDT7QRnrAAEQAAEQAAEQAIEcEoDQzOFBxy6DAAiAAAiAAAiAQD8IQGj2gzLWAQIgAAIgAAIgAAI5JAChmcODjl0GARAAARAAARAAgX4QgNDsB2WsAwRAAARAAARAAARySABCM4cHHbsMAiAAAiAAAiAAAv0gAKHZD8pYBwiAAAiAAAiAAAjkkACEZg4POnYZBEAABEAABEAABPpBAEKzH5SxDhAAARAAARAAARDIIQEIzRwedOwyCIAACIAACIAACPSDAIRmPyhjHSAAAiAAAiAAAiCQQwIQmjk86NhlEAABEAABEAABEOgHAQjNflDGOkAABEAABEAABEAghwQgNHN40LHLIAACIAACIAACINAPAhCa/aCMdYAACIAACIAACIBADglAaObwoGOXQQAEQAAEQAAEQKAfBCA0+0EZ6wABEAABEAABEACBHBKA0MzhQccugwAIgAAIgAAIgEA/CEBo9oMy1gECIAACIAACIAACOSQAoZnDg45dBgEQAAEQAAEQAIF+EIDQ7AdlrAMEQAAEQAAEQAAEckgAQjOHBx27DAIgAAIgAAIgAAL9IACh2Q/KWAcIgAAIgAAIgAAI5JAAhGYODzp2GQRAAARAAARAAAT6QQBCsx+UsQ4QAAEQAAEQAAEQyCEBCM0cHnTsMgiAAAiAAAiAAAj0gwCEZj8oYx0gAAIgAAIgAAIgkEMCEJo5POjYZRAAARAAARAAARDoBwEIzX5QxjpAAARAAARAAARAIIcEIDRzeNCxyyAAAiAAAiAAAiDQDwIQmv2gjHWAAAiAAAiAAAiAQA4JQGjm8KBjl0EABEAABEAABECgHwQgNPtBGesAARAAARAAARAAgRwSgNDM4UHHLoMACIAACIAACIBAPwhAaPaDMtYBAiAAAiAAAiAAAjkkAKGZw4OOXQYBEAABEAABEACBfhCA0OwHZawDBEAABEAABEAABHJIAEIzhwcduwwCIAACIAACIAAC/SAAodkPylgHCIAACIAACIAACOSQAIRmDg86dhkEQAAEQAAEQAAE+kEAQrMflLEOEAABEAABEAABEMghAQjNHB507DIIgAAIgAAIgAAI9IMAhGY/KGMdIAACIAACIAACIJBDAhCaOTzo2GUQAAEQAAEQAAEQ6AcBCM1+UMY6QAAEQAAEQAAEQCCHBCA0c3jQscsgAAIgAAIgAAIg0A8C/w/m52ZduuickAAAAABJRU5ErkJggg==";
function Tw() {
  return /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-center min-h-screen w-full bg-white", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "relative w-28 h-28 flex items-center justify-center", children: [
        /* @__PURE__ */ y.jsx("div", { className: "absolute inset-0 rounded-full border-2 border-emerald-200 animate-logo-ring" }),
        /* @__PURE__ */ y.jsx("div", { className: "absolute w-20 h-20 rounded-full bg-emerald-50/60" }),
        /* @__PURE__ */ y.jsx(
          "img",
          {
            src: Ow,
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
const Rw = ["Active", "Draft", "Retired"];
function Pw() {
  const { tenantId: e, isLoading: t, bridge: r } = Ew(), { data: n, isLoading: i, error: a, refetch: o } = Cw(e), [s, l] = F.useState(null), [u, c] = F.useState(""), [f, h] = F.useState(!1), [m, v] = F.useState({ status: [] }), [w, x] = F.useState(1), [p, d] = F.useState(10), g = F.useRef(null), b = F.useRef(null);
  F.useEffect(() => {
    const A = () => {
      const U = window.innerHeight, H = 140, we = 48, Qt = 40, it = 56, pr = U - H - we - Qt - 60, Zh = Math.floor(pr / it);
      d(Math.max(5, Zh));
    };
    return A(), window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, []), F.useEffect(() => {
    if (!r) return;
    const A = r.events.on("create-authority.close", (U) => {
      U?.action === "created" && o();
    });
    return typeof A == "function" ? A : void 0;
  }, [r, o]), F.useEffect(() => {
    const A = (U) => {
      b.current && !U.composedPath().includes(b.current) && h(!1);
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, []);
  const k = () => l(null), E = (A, U) => {
    v((H) => ({
      ...H,
      [A]: H[A].includes(U) ? H[A].filter((we) => we !== U) : [...H[A], U]
    })), x(1);
  }, C = (A, U) => {
    v((H) => ({
      ...H,
      [A]: H[A].filter((we) => we !== U)
    }));
  }, R = () => {
    v({ status: [] });
  }, L = m.status.length;
  if (t || i)
    return /* @__PURE__ */ y.jsx(Tw, {});
  const D = n.filter((A) => {
    const U = A.approval_template_name.toLowerCase().includes(u.toLowerCase()), H = A.version_status || "", we = m.status.length === 0 || m.status.some((Qt) => Qt.toLowerCase() === H.toLowerCase());
    return U && we;
  }), ne = Math.ceil(D.length / p), vt = D.slice(
    (w - 1) * p,
    w * p
  ), Wt = n.filter((A) => A.version_status?.toLowerCase() === "active").length, ui = n.filter((A) => A.version_status?.toLowerCase() === "draft").length, Ja = n.filter((A) => A.version_status?.toLowerCase() === "retired").length, hr = (A) => ({
    Financial: "bg-blue-50 text-blue-700 border-blue-200",
    Access: "bg-purple-50 text-purple-700 border-purple-200",
    Policy: "bg-amber-50 text-amber-700 border-amber-200",
    Operational: "bg-slate-100 text-slate-700 border-slate-200"
  })[A] || "bg-gray-50 text-gray-700 border-gray-200", fr = (A) => ({
    Active: "bg-emerald-500",
    Draft: "bg-amber-500",
    Retired: "bg-gray-400"
  })[A] || "bg-gray-400", O = (A) => {
    if (!A) return "-";
    try {
      return Lu(new Date(A), "MMM dd, yyyy");
    } catch {
      return "-";
    }
  }, j = (A) => {
    if (!A) return "-";
    try {
      return Lu(new Date(A), "MMMM d, yyyy • HH:mm 'UTC'");
    } catch {
      return "-";
    }
  }, z = (A) => A == null ? "-" : `v${A}`;
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
                /* @__PURE__ */ y.jsx(Dg, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" }),
                /* @__PURE__ */ y.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search authorities...",
                    value: u,
                    onChange: (A) => c(A.target.value),
                    className: "w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  }
                )
              ] }) }),
              /* @__PURE__ */ y.jsxs("div", { className: "relative", ref: b, children: [
                /* @__PURE__ */ y.jsxs(
                  "button",
                  {
                    onClick: () => h(!f),
                    className: "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative w-full sm:w-auto justify-center",
                    children: [
                      /* @__PURE__ */ y.jsx(Ug, { className: "w-4 h-4" }),
                      "Filter",
                      /* @__PURE__ */ y.jsx(Pg, { className: `w-4 h-4 transition-transform ${f ? "rotate-180" : ""}` }),
                      L > 0 && /* @__PURE__ */ y.jsx("span", { className: "absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-semibold", children: L })
                    ]
                  }
                ),
                f && /* @__PURE__ */ y.jsx("div", { className: "absolute left-0 sm:right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-30 overflow-hidden", children: /* @__PURE__ */ y.jsx("div", { className: "p-4 space-y-4 max-h-96 overflow-y-auto", children: /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("label", { className: "block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2", children: "Status" }),
                  /* @__PURE__ */ y.jsx("div", { className: "space-y-2", children: Rw.map((A) => /* @__PURE__ */ y.jsxs("label", { className: "flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors", children: [
                    /* @__PURE__ */ y.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: m.status.includes(A),
                        onChange: () => E("status", A),
                        className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }
                    ),
                    /* @__PURE__ */ y.jsx("span", { className: "text-sm text-gray-700", children: A })
                  ] }, A)) })
                ] }) }) })
              ] })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex flex-wrap items-center gap-4 lg:gap-6", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ y.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold", children: Wt }),
                /* @__PURE__ */ y.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Active" })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ y.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold", children: ui }),
                /* @__PURE__ */ y.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Draft" })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ y.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-700 text-xs font-bold", children: Ja }),
                /* @__PURE__ */ y.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Retired" })
              ] }),
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  onClick: () => {
                    kw(r, "create-authority");
                  },
                  className: "px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all",
                  children: "Create Approval Workflow"
                }
              )
            ] })
          ] }),
          L > 0 && /* @__PURE__ */ y.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200", children: [
            m.status.map((A) => /* @__PURE__ */ y.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full",
                children: [
                  "Status: ",
                  A,
                  /* @__PURE__ */ y.jsx(
                    "button",
                    {
                      onClick: () => C("status", A),
                      className: "hover:bg-amber-100 rounded-full p-0.5 transition-colors",
                      children: /* @__PURE__ */ y.jsx(Nu, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              `status-${A}`
            )),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: R,
                className: "text-xs font-medium text-indigo-600 hover:text-indigo-800 underline",
                children: "Clear all"
              }
            )
          ] })
        ] }),
        n.length === 0 && !a && /* @__PURE__ */ y.jsxs("div", { className: "p-12 text-center", children: [
          /* @__PURE__ */ y.jsx(zg, { className: "w-12 h-12 text-gray-300 mx-auto mb-4" }),
          /* @__PURE__ */ y.jsx("h3", { className: "text-sm font-medium text-gray-900 mb-1", children: "No approval authorities found" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-500", children: "No approval templates exist for this tenant yet." })
        ] }),
        a && /* @__PURE__ */ y.jsx("div", { className: "p-12 text-center", children: /* @__PURE__ */ y.jsx("p", { className: "text-sm text-red-600", children: a }) }),
        n.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "hidden md:block overflow-x-auto", ref: g, children: /* @__PURE__ */ y.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ y.jsx("thead", { children: /* @__PURE__ */ y.jsxs("tr", { className: "bg-gray-50 border-b border-gray-200", children: [
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Authority Name" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Type" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center", children: "Version" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Last Updated" }),
            /* @__PURE__ */ y.jsx("th", { className: "px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ y.jsx("tbody", { className: "divide-y divide-gray-100", children: vt.map((A) => /* @__PURE__ */ y.jsxs(
            "tr",
            {
              className: "hover:bg-gray-50 cursor-pointer transition-colors",
              onClick: () => l(A),
              children: [
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ y.jsx("span", { className: "text-sm font-medium text-[rgb(16,40,40)]", children: A.approval_template_name }) }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border uppercase ${hr(A.approval_type)}`, children: A.approval_type }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2 text-center", children: /* @__PURE__ */ y.jsx("span", { className: "text-sm text-gray-500", children: z(A.version_number) }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-gray-700", children: [
                  /* @__PURE__ */ y.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${fr(A.version_status || "")}` }),
                  A.version_status || "-"
                ] }) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2 text-sm text-gray-500", children: O(A.updated_at) }),
                /* @__PURE__ */ y.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ y.jsxs(
                  "button",
                  {
                    onClick: (U) => {
                      U.stopPropagation(), l(A);
                    },
                    className: "inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors",
                    children: [
                      /* @__PURE__ */ y.jsx(jg, { className: "w-3.5 h-3.5" }),
                      "View details"
                    ]
                  }
                ) }) })
              ]
            },
            A.template_id
          )) })
        ] }) }),
        n.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "md:hidden divide-y divide-gray-100", children: vt.map((A) => /* @__PURE__ */ y.jsxs(
          "div",
          {
            onClick: () => l(A),
            className: "p-4 hover:bg-gray-50 cursor-pointer transition-colors",
            children: [
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ y.jsx("div", { className: "flex-1", children: /* @__PURE__ */ y.jsx("h3", { className: "text-sm font-medium text-gray-900 mb-1", children: A.approval_template_name }) }),
                /* @__PURE__ */ y.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-gray-700", children: [
                  /* @__PURE__ */ y.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${fr(A.version_status || "")}` }),
                  A.version_status || "-"
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
                /* @__PURE__ */ y.jsx("span", { className: `px-2 py-0.5 rounded border uppercase ${hr(A.approval_type)}`, children: A.approval_type }),
                /* @__PURE__ */ y.jsx("span", { children: O(A.updated_at) })
              ] })
            ]
          },
          A.template_id
        )) }),
        ne > 1 && /* @__PURE__ */ y.jsxs("div", { className: "px-4 py-2 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2", children: [
          /* @__PURE__ */ y.jsxs("span", { className: "text-xs text-gray-500", children: [
            "Showing ",
            (w - 1) * p + 1,
            " to",
            " ",
            Math.min(w * p, D.length),
            " of",
            " ",
            D.length,
            " authorities"
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: () => x(Math.max(1, w - 1)),
                disabled: w === 1,
                className: "w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: /* @__PURE__ */ y.jsx(Ng, { className: "w-4 h-4" })
              }
            ),
            Array.from({ length: Math.min(5, ne) }, (A, U) => {
              let H;
              return ne <= 5 || w <= 3 ? H = U + 1 : w >= ne - 2 ? H = ne - 4 + U : H = w - 2 + U, /* @__PURE__ */ y.jsx(
                "button",
                {
                  onClick: () => x(H),
                  className: `w-8 h-8 flex items-center justify-center rounded text-xs font-medium transition-all ${w === H ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm border border-transparent" : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"}`,
                  children: H
                },
                H
              );
            }),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: () => x(Math.min(ne, w + 1)),
                disabled: w === ne,
                className: "w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: /* @__PURE__ */ y.jsx(Ig, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    s && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
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
                  children: /* @__PURE__ */ y.jsx(Nu, { className: "w-5 h-5 text-gray-600" })
                }
              )
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-6 md:space-y-8", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsx("h5", { className: "text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider", children: "Basic Information" }),
                /* @__PURE__ */ y.jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-4", children: /* @__PURE__ */ y.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Name" }),
                    /* @__PURE__ */ y.jsx("span", { className: "font-medium text-gray-900 text-right max-w-[60%]", children: s.approval_template_name })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Type" }),
                    /* @__PURE__ */ y.jsx("span", { className: "font-medium text-gray-900", children: s.approval_type })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Version" }),
                    /* @__PURE__ */ y.jsx("span", { className: "font-medium text-gray-900", children: z(s.version_number) })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ y.jsx("span", { className: "text-gray-600", children: "Status" }),
                    /* @__PURE__ */ y.jsx("span", { className: `font-semibold ${s.version_status === "Active" ? "text-emerald-600" : s.version_status === "Draft" ? "text-amber-600" : "text-gray-500"}`, children: s.version_status || "-" })
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
                      /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: O(s.updated_at) })
                    ] })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ y.jsx("div", { className: "absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-gray-400 border-2 border-white ring-4 ring-gray-50" }),
                    /* @__PURE__ */ y.jsxs("div", { children: [
                      /* @__PURE__ */ y.jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Created" }),
                      /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: j(s.created_at) })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsx("h5", { className: "text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider", children: "Created By" }),
                /* @__PURE__ */ y.jsx("div", { className: "p-4 bg-white border border-gray-200 rounded-lg", children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm", children: (s.creator_name || "?").charAt(0).toUpperCase() }),
                  /* @__PURE__ */ y.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ y.jsx("p", { className: "text-sm font-medium text-gray-900", children: s.creator_name || "Unknown" }),
                    /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: s.creator_email || "-" })
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
function Nw() {
  return /* @__PURE__ */ y.jsx("div", { className: "size-full", children: /* @__PURE__ */ y.jsx(Pw, {}) });
}
const Es = {
  schemaVersion: "1",
  microappKey: "approval-authority-mgm",
  version: "1.0.1",
  elementName: "xoos-approval-authority-management",
  entry: "https://bolngokjtpjomleifuto.supabase.co/storage/v1/object/public/xoos-microapps/xoos-approval-authority-management/1.0.1/xoos-microapp.js",
  deliveryType: "native_esm",
  contractVersion: "1",
  minimumRuntimeVersion: "1.0.0"
};
class Iw extends HTMLElement {
  constructor() {
    super(...arguments);
    nn(this, "xoos");
    nn(this, "xoosProps");
    nn(this, "root", null);
    nn(this, "mountPoint", null);
  }
  connectedCallback() {
    if (this.root) return;
    const r = this.shadowRoot ?? this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = bg, r.appendChild(n);
    const i = document.createElement("div");
    if (i.setAttribute("data-xoos-microapp", Es.microappKey), i.style.display = "contents", r.appendChild(i), this.mountPoint = i, !this.xoos) {
      i.textContent = "XOOS runtime bridge missing.";
      return;
    }
    this.root = kh(i), this.root.render(
      F.createElement(yw, {
        bridge: this.xoos,
        props: this.xoosProps ?? {},
        children: F.createElement(Nw)
      })
    );
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = null, this.mountPoint?.remove(), this.mountPoint = null;
  }
}
customElements.get(Es.elementName) || customElements.define(
  Es.elementName,
  Iw
);
export {
  Iw as XoosApprovalAuthorityManagementElement,
  Iw as default,
  Es as microappConfig
};
