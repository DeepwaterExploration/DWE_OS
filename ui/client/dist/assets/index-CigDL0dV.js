function px(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function uf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function nr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var Wv = { exports: {} },
  Dl = {},
  Uv = { exports: {} },
  ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zs = Symbol.for("react.element"),
  hx = Symbol.for("react.portal"),
  mx = Symbol.for("react.fragment"),
  vx = Symbol.for("react.strict_mode"),
  gx = Symbol.for("react.profiler"),
  yx = Symbol.for("react.provider"),
  xx = Symbol.for("react.context"),
  bx = Symbol.for("react.forward_ref"),
  wx = Symbol.for("react.suspense"),
  Sx = Symbol.for("react.memo"),
  Cx = Symbol.for("react.lazy"),
  oh = Symbol.iterator;
function kx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (oh && e[oh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hv = Object.assign,
  qv = {};
function ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qv),
    (this.updater = n || Vv);
}
ai.prototype.isReactComponent = {};
ai.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ai.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kv() {}
Kv.prototype = ai.prototype;
function cf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qv),
    (this.updater = n || Vv);
}
var df = (cf.prototype = new Kv());
df.constructor = cf;
Hv(df, ai.prototype);
df.isPureReactComponent = !0;
var ih = Array.isArray,
  Gv = Object.prototype.hasOwnProperty,
  ff = { current: null },
  Yv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Gv.call(t, r) && !Yv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: zs,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: ff.current,
  };
}
function Ex(e, t) {
  return {
    $$typeof: zs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zs;
}
function Px(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sh = /\/+/g;
function Zu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Px("" + e.key)
    : t.toString(36);
}
function Da(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zs:
          case hx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Zu(s, 0) : r),
      ih(o)
        ? ((n = ""),
          e != null && (n = e.replace(sh, "$&/") + "/"),
          Da(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (pf(o) &&
            (o = Ex(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(sh, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ih(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Zu(i, a);
      s += Da(i, t, n, l, o);
    }
  else if (((l = kx(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Zu(i, a++)), (s += Da(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function oa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Da(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Rx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Tt = { current: null },
  Wa = { transition: null },
  $x = {
    ReactCurrentDispatcher: Tt,
    ReactCurrentBatchConfig: Wa,
    ReactCurrentOwner: ff,
  };
ye.Children = {
  map: oa,
  forEach: function (e, t, n) {
    oa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ye.Component = ai;
ye.Fragment = mx;
ye.Profiler = gx;
ye.PureComponent = cf;
ye.StrictMode = vx;
ye.Suspense = wx;
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $x;
ye.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Hv({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = ff.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Gv.call(t, l) &&
        !Yv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: zs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ye.createContext = function (e) {
  return (
    (e = {
      $$typeof: xx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yx, _context: e }),
    (e.Consumer = e)
  );
};
ye.createElement = Xv;
ye.createFactory = function (e) {
  var t = Xv.bind(null, e);
  return (t.type = e), t;
};
ye.createRef = function () {
  return { current: null };
};
ye.forwardRef = function (e) {
  return { $$typeof: bx, render: e };
};
ye.isValidElement = pf;
ye.lazy = function (e) {
  return { $$typeof: Cx, _payload: { _status: -1, _result: e }, _init: Rx };
};
ye.memo = function (e, t) {
  return { $$typeof: Sx, type: e, compare: t === void 0 ? null : t };
};
ye.startTransition = function (e) {
  var t = Wa.transition;
  Wa.transition = {};
  try {
    e();
  } finally {
    Wa.transition = t;
  }
};
ye.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ye.useCallback = function (e, t) {
  return Tt.current.useCallback(e, t);
};
ye.useContext = function (e) {
  return Tt.current.useContext(e);
};
ye.useDebugValue = function () {};
ye.useDeferredValue = function (e) {
  return Tt.current.useDeferredValue(e);
};
ye.useEffect = function (e, t) {
  return Tt.current.useEffect(e, t);
};
ye.useId = function () {
  return Tt.current.useId();
};
ye.useImperativeHandle = function (e, t, n) {
  return Tt.current.useImperativeHandle(e, t, n);
};
ye.useInsertionEffect = function (e, t) {
  return Tt.current.useInsertionEffect(e, t);
};
ye.useLayoutEffect = function (e, t) {
  return Tt.current.useLayoutEffect(e, t);
};
ye.useMemo = function (e, t) {
  return Tt.current.useMemo(e, t);
};
ye.useReducer = function (e, t, n) {
  return Tt.current.useReducer(e, t, n);
};
ye.useRef = function (e) {
  return Tt.current.useRef(e);
};
ye.useState = function (e) {
  return Tt.current.useState(e);
};
ye.useSyncExternalStore = function (e, t, n) {
  return Tt.current.useSyncExternalStore(e, t, n);
};
ye.useTransition = function () {
  return Tt.current.useTransition();
};
ye.version = "18.2.0";
Uv.exports = ye;
var x = Uv.exports;
const Cn = uf(x),
  Bc = px({ __proto__: null, default: Cn }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tx = x,
  _x = Symbol.for("react.element"),
  Ox = Symbol.for("react.fragment"),
  Nx = Object.prototype.hasOwnProperty,
  Mx = Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ix = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Nx.call(t, r) && !Ix.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: _x,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Mx.current,
  };
}
Dl.Fragment = Ox;
Dl.jsx = Qv;
Dl.jsxs = Qv;
Wv.exports = Dl;
var S = Wv.exports,
  jc = {},
  Jv = { exports: {} },
  Qt = {},
  Zv = { exports: {} },
  eg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, O) {
    var W = R.length;
    R.push(O);
    e: for (; 0 < W; ) {
      var Z = (W - 1) >>> 1,
        ee = R[Z];
      if (0 < o(ee, O)) (R[Z] = O), (R[W] = ee), (W = Z);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var O = R[0],
      W = R.pop();
    if (W !== O) {
      R[0] = W;
      e: for (var Z = 0, ee = R.length, ce = ee >>> 1; Z < ce; ) {
        var Y = 2 * (Z + 1) - 1,
          ie = R[Y],
          H = Y + 1,
          ue = R[H];
        if (0 > o(ie, W))
          H < ee && 0 > o(ue, ie)
            ? ((R[Z] = ue), (R[H] = W), (Z = H))
            : ((R[Z] = ie), (R[Y] = W), (Z = Y));
        else if (H < ee && 0 > o(ue, W)) (R[Z] = ue), (R[H] = W), (Z = H);
        else break e;
      }
    }
    return O;
  }
  function o(R, O) {
    var W = R.sortIndex - O.sortIndex;
    return W !== 0 ? W : R.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    p = null,
    f = 3,
    b = !1,
    w = !1,
    y = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(R) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= R)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function g(R) {
    if (((y = !1), d(R), !w))
      if (n(l) !== null) (w = !0), j(C);
      else {
        var O = n(u);
        O !== null && F(g, O.startTime - R);
      }
  }
  function C(R, O) {
    (w = !1), y && ((y = !1), m($), ($ = -1)), (b = !0);
    var W = f;
    try {
      for (
        d(O), p = n(l);
        p !== null && (!(p.expirationTime > O) || (R && !N()));

      ) {
        var Z = p.callback;
        if (typeof Z == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var ee = Z(p.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ee == "function" ? (p.callback = ee) : p === n(l) && r(l),
            d(O);
        } else r(l);
        p = n(l);
      }
      if (p !== null) var ce = !0;
      else {
        var Y = n(u);
        Y !== null && F(g, Y.startTime - O), (ce = !1);
      }
      return ce;
    } finally {
      (p = null), (f = W), (b = !1);
    }
  }
  var E = !1,
    k = null,
    $ = -1,
    _ = 5,
    T = -1;
  function N() {
    return !(e.unstable_now() - T < _);
  }
  function z() {
    if (k !== null) {
      var R = e.unstable_now();
      T = R;
      var O = !0;
      try {
        O = k(!0, R);
      } finally {
        O ? L() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var L;
  if (typeof h == "function")
    L = function () {
      h(z);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      I = B.port2;
    (B.port1.onmessage = z),
      (L = function () {
        I.postMessage(null);
      });
  } else
    L = function () {
      P(z, 0);
    };
  function j(R) {
    (k = R), E || ((E = !0), L());
  }
  function F(R, O) {
    $ = P(function () {
      R(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || b || ((w = !0), j(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var W = f;
      f = O;
      try {
        return R();
      } finally {
        f = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, O) {
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
      var W = f;
      f = R;
      try {
        return O();
      } finally {
        f = W;
      }
    }),
    (e.unstable_scheduleCallback = function (R, O, W) {
      var Z = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? Z + W : Z))
          : (W = Z),
        R)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = W + ee),
        (R = {
          id: c++,
          callback: O,
          priorityLevel: R,
          startTime: W,
          expirationTime: ee,
          sortIndex: -1,
        }),
        W > Z
          ? ((R.sortIndex = W),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (y ? (m($), ($ = -1)) : (y = !0), F(g, W - Z)))
          : ((R.sortIndex = ee), t(l, R), w || b || ((w = !0), j(C))),
        R
      );
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (R) {
      var O = f;
      return function () {
        var W = f;
        f = O;
        try {
          return R.apply(this, arguments);
        } finally {
          f = W;
        }
      };
    });
})(eg);
Zv.exports = eg;
var Lx = Zv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tg = x,
  Gt = Lx;
function U(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ng = new Set(),
  ps = {};
function ao(e, t) {
  Ko(e, t), Ko(e + "Capture", t);
}
function Ko(e, t) {
  for (ps[e] = t, e = 0; e < t.length; e++) ng.add(t[e]);
}
var Qn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fc = Object.prototype.hasOwnProperty,
  Ax =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ah = {},
  lh = {};
function zx(e) {
  return Fc.call(lh, e)
    ? !0
    : Fc.call(ah, e)
      ? !1
      : Ax.test(e)
        ? (lh[e] = !0)
        : ((ah[e] = !0), !1);
}
function Bx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jx(e, t, n, r) {
  if (t === null || typeof t > "u" || Bx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function _t(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  yt[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  yt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  yt[e] = new _t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  yt[e] = new _t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  yt[e] = new _t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  yt[e] = new _t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  yt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hf = /[\-:]([a-z])/g;
function mf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hf, mf);
    yt[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hf, mf);
    yt[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hf, mf);
  yt[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  yt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
yt.xlinkHref = new _t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  yt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vf(e, t, n, r) {
  var o = yt.hasOwnProperty(t) ? yt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jx(t, n, o, r) && (n = null),
    r || o === null
      ? zx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rr = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ia = Symbol.for("react.element"),
  Po = Symbol.for("react.portal"),
  Ro = Symbol.for("react.fragment"),
  gf = Symbol.for("react.strict_mode"),
  Dc = Symbol.for("react.profiler"),
  rg = Symbol.for("react.provider"),
  og = Symbol.for("react.context"),
  yf = Symbol.for("react.forward_ref"),
  Wc = Symbol.for("react.suspense"),
  Uc = Symbol.for("react.suspense_list"),
  xf = Symbol.for("react.memo"),
  ur = Symbol.for("react.lazy"),
  ig = Symbol.for("react.offscreen"),
  uh = Symbol.iterator;
function Ci(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uh && e[uh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ge = Object.assign,
  ec;
function Ui(e) {
  if (ec === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ec = (t && t[1]) || "";
    }
  return (
    `
` +
    ec +
    e
  );
}
var tc = !1;
function nc(e, t) {
  if (!e || tc) return "";
  tc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (tc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ui(e) : "";
}
function Fx(e) {
  switch (e.tag) {
    case 5:
      return Ui(e.type);
    case 16:
      return Ui("Lazy");
    case 13:
      return Ui("Suspense");
    case 19:
      return Ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nc(e.type, !1)), e;
    case 11:
      return (e = nc(e.type.render, !1)), e;
    case 1:
      return (e = nc(e.type, !0)), e;
    default:
      return "";
  }
}
function Vc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ro:
      return "Fragment";
    case Po:
      return "Portal";
    case Dc:
      return "Profiler";
    case gf:
      return "StrictMode";
    case Wc:
      return "Suspense";
    case Uc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case og:
        return (e.displayName || "Context") + ".Consumer";
      case rg:
        return (e._context.displayName || "Context") + ".Provider";
      case yf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xf:
        return (
          (t = e.displayName || null), t !== null ? t : Vc(e.type) || "Memo"
        );
      case ur:
        (t = e._payload), (e = e._init);
        try {
          return Vc(e(t));
        } catch {}
    }
  return null;
}
function Dx(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Vc(t);
    case 8:
      return t === gf ? "StrictMode" : "Mode";
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
function kr(e) {
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
function sg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wx(e) {
  var t = sg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sa(e) {
  e._valueTracker || (e._valueTracker = Wx(e));
}
function ag(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = sg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hc(e, t) {
  var n = t.checked;
  return Ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ch(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lg(e, t) {
  (t = t.checked), t != null && vf(e, "checked", t, !1);
}
function qc(e, t) {
  lg(e, t);
  var n = kr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Kc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Kc(e, t.type, kr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function dh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Kc(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vi = Array.isArray;
function Bo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92));
      if (Vi(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kr(n) };
}
function ug(e, t) {
  var n = kr(t.value),
    r = kr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ph(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var aa,
  dg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        aa = aa || document.createElement("div"),
          aa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = aa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qi = {
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
    strokeWidth: !0,
  },
  Ux = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qi).forEach(function (e) {
  Ux.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qi[t] = Qi[e]);
  });
});
function fg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Qi.hasOwnProperty(e) && Qi[e])
      ? ("" + t).trim()
      : t + "px";
}
function pg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = fg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Vx = Ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Xc(e, t) {
  if (t) {
    if (Vx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function Qc(e, t) {
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
var Jc = null;
function bf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zc = null,
  jo = null,
  Fo = null;
function hh(e) {
  if ((e = Fs(e))) {
    if (typeof Zc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = ql(t)), Zc(e.stateNode, e.type, t));
  }
}
function hg(e) {
  jo ? (Fo ? Fo.push(e) : (Fo = [e])) : (jo = e);
}
function mg() {
  if (jo) {
    var e = jo,
      t = Fo;
    if (((Fo = jo = null), hh(e), t)) for (e = 0; e < t.length; e++) hh(t[e]);
  }
}
function vg(e, t) {
  return e(t);
}
function gg() {}
var rc = !1;
function yg(e, t, n) {
  if (rc) return e(t, n);
  rc = !0;
  try {
    return vg(e, t, n);
  } finally {
    (rc = !1), (jo !== null || Fo !== null) && (gg(), mg());
  }
}
function ms(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ql(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var ed = !1;
if (Qn)
  try {
    var ki = {};
    Object.defineProperty(ki, "passive", {
      get: function () {
        ed = !0;
      },
    }),
      window.addEventListener("test", ki, ki),
      window.removeEventListener("test", ki, ki);
  } catch {
    ed = !1;
  }
function Hx(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ji = !1,
  cl = null,
  dl = !1,
  td = null,
  qx = {
    onError: function (e) {
      (Ji = !0), (cl = e);
    },
  };
function Kx(e, t, n, r, o, i, s, a, l) {
  (Ji = !1), (cl = null), Hx.apply(qx, arguments);
}
function Gx(e, t, n, r, o, i, s, a, l) {
  if ((Kx.apply(this, arguments), Ji)) {
    if (Ji) {
      var u = cl;
      (Ji = !1), (cl = null);
    } else throw Error(U(198));
    dl || ((dl = !0), (td = u));
  }
}
function lo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mh(e) {
  if (lo(e) !== e) throw Error(U(188));
}
function Yx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lo(e)), t === null)) throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return mh(o), e;
        if (i === r) return mh(o), t;
        i = i.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function bg(e) {
  return (e = Yx(e)), e !== null ? wg(e) : null;
}
function wg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sg = Gt.unstable_scheduleCallback,
  vh = Gt.unstable_cancelCallback,
  Xx = Gt.unstable_shouldYield,
  Qx = Gt.unstable_requestPaint,
  Ze = Gt.unstable_now,
  Jx = Gt.unstable_getCurrentPriorityLevel,
  wf = Gt.unstable_ImmediatePriority,
  Cg = Gt.unstable_UserBlockingPriority,
  fl = Gt.unstable_NormalPriority,
  Zx = Gt.unstable_LowPriority,
  kg = Gt.unstable_IdlePriority,
  Wl = null,
  Ln = null;
function eb(e) {
  if (Ln && typeof Ln.onCommitFiberRoot == "function")
    try {
      Ln.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var En = Math.clz32 ? Math.clz32 : rb,
  tb = Math.log,
  nb = Math.LN2;
function rb(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((tb(e) / nb) | 0)) | 0;
}
var la = 64,
  ua = 4194304;
function Hi(e) {
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
function pl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Hi(a)) : ((i &= s), i !== 0 && (r = Hi(i)));
  } else (s = n & ~o), s !== 0 ? (r = Hi(s)) : i !== 0 && (r = Hi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - En(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ob(e, t) {
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
function ib(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - En(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = ob(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function nd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Eg() {
  var e = la;
  return (la <<= 1), !(la & 4194240) && (la = 64), e;
}
function oc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - En(t)),
    (e[t] = n);
}
function sb(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - En(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Sf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - En(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Ne = 0;
function Pg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rg,
  Cf,
  $g,
  Tg,
  _g,
  rd = !1,
  ca = [],
  vr = null,
  gr = null,
  yr = null,
  vs = new Map(),
  gs = new Map(),
  dr = [],
  ab =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function gh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vr = null;
      break;
    case "dragenter":
    case "dragleave":
      gr = null;
      break;
    case "mouseover":
    case "mouseout":
      yr = null;
      break;
    case "pointerover":
    case "pointerout":
      vs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gs.delete(t.pointerId);
  }
}
function Ei(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Fs(t)), t !== null && Cf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function lb(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (vr = Ei(vr, e, t, n, r, o)), !0;
    case "dragenter":
      return (gr = Ei(gr, e, t, n, r, o)), !0;
    case "mouseover":
      return (yr = Ei(yr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return vs.set(i, Ei(vs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), gs.set(i, Ei(gs.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Og(e) {
  var t = Wr(e.target);
  if (t !== null) {
    var n = lo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xg(n)), t !== null)) {
          (e.blockedOn = t),
            _g(e.priority, function () {
              $g(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ua(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Jc = r), n.target.dispatchEvent(r), (Jc = null);
    } else return (t = Fs(n)), t !== null && Cf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yh(e, t, n) {
  Ua(e) && n.delete(t);
}
function ub() {
  (rd = !1),
    vr !== null && Ua(vr) && (vr = null),
    gr !== null && Ua(gr) && (gr = null),
    yr !== null && Ua(yr) && (yr = null),
    vs.forEach(yh),
    gs.forEach(yh);
}
function Pi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    rd ||
      ((rd = !0),
      Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority, ub)));
}
function ys(e) {
  function t(o) {
    return Pi(o, e);
  }
  if (0 < ca.length) {
    Pi(ca[0], e);
    for (var n = 1; n < ca.length; n++) {
      var r = ca[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vr !== null && Pi(vr, e),
      gr !== null && Pi(gr, e),
      yr !== null && Pi(yr, e),
      vs.forEach(t),
      gs.forEach(t),
      n = 0;
    n < dr.length;
    n++
  )
    (r = dr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dr.length && ((n = dr[0]), n.blockedOn === null); )
    Og(n), n.blockedOn === null && dr.shift();
}
var Do = rr.ReactCurrentBatchConfig,
  hl = !0;
function cb(e, t, n, r) {
  var o = Ne,
    i = Do.transition;
  Do.transition = null;
  try {
    (Ne = 1), kf(e, t, n, r);
  } finally {
    (Ne = o), (Do.transition = i);
  }
}
function db(e, t, n, r) {
  var o = Ne,
    i = Do.transition;
  Do.transition = null;
  try {
    (Ne = 4), kf(e, t, n, r);
  } finally {
    (Ne = o), (Do.transition = i);
  }
}
function kf(e, t, n, r) {
  if (hl) {
    var o = od(e, t, n, r);
    if (o === null) hc(e, t, r, ml, n), gh(e, r);
    else if (lb(o, e, t, n, r)) r.stopPropagation();
    else if ((gh(e, r), t & 4 && -1 < ab.indexOf(e))) {
      for (; o !== null; ) {
        var i = Fs(o);
        if (
          (i !== null && Rg(i),
          (i = od(e, t, n, r)),
          i === null && hc(e, t, r, ml, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else hc(e, t, r, null, n);
  }
}
var ml = null;
function od(e, t, n, r) {
  if (((ml = null), (e = bf(r)), (e = Wr(e)), e !== null))
    if (((t = lo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ml = e), null;
}
function Ng(e) {
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
      switch (Jx()) {
        case wf:
          return 1;
        case Cg:
          return 4;
        case fl:
        case Zx:
          return 16;
        case kg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pr = null,
  Ef = null,
  Va = null;
function Mg() {
  if (Va) return Va;
  var e,
    t = Ef,
    n = t.length,
    r,
    o = "value" in pr ? pr.value : pr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Va = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ha(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function da() {
  return !0;
}
function xh() {
  return !1;
}
function Jt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? da
        : xh),
      (this.isPropagationStopped = xh),
      this
    );
  }
  return (
    Ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = da));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = da));
      },
      persist: function () {},
      isPersistent: da,
    }),
    t
  );
}
var li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pf = Jt(li),
  js = Ge({}, li, { view: 0, detail: 0 }),
  fb = Jt(js),
  ic,
  sc,
  Ri,
  Ul = Ge({}, js, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ri &&
            (Ri && e.type === "mousemove"
              ? ((ic = e.screenX - Ri.screenX), (sc = e.screenY - Ri.screenY))
              : (sc = ic = 0),
            (Ri = e)),
          ic);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : sc;
    },
  }),
  bh = Jt(Ul),
  pb = Ge({}, Ul, { dataTransfer: 0 }),
  hb = Jt(pb),
  mb = Ge({}, js, { relatedTarget: 0 }),
  ac = Jt(mb),
  vb = Ge({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gb = Jt(vb),
  yb = Ge({}, li, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xb = Jt(yb),
  bb = Ge({}, li, { data: 0 }),
  wh = Jt(bb),
  wb = {
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
    MozPrintableKey: "Unidentified",
  },
  Sb = {
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
    224: "Meta",
  },
  Cb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function kb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cb[e]) ? !!t[e] : !1;
}
function Rf() {
  return kb;
}
var Eb = Ge({}, js, {
    key: function (e) {
      if (e.key) {
        var t = wb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ha(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Sb[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rf,
    charCode: function (e) {
      return e.type === "keypress" ? Ha(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ha(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Pb = Jt(Eb),
  Rb = Ge({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Sh = Jt(Rb),
  $b = Ge({}, js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rf,
  }),
  Tb = Jt($b),
  _b = Ge({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ob = Jt(_b),
  Nb = Ge({}, Ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Mb = Jt(Nb),
  Ib = [9, 13, 27, 32],
  $f = Qn && "CompositionEvent" in window,
  Zi = null;
Qn && "documentMode" in document && (Zi = document.documentMode);
var Lb = Qn && "TextEvent" in window && !Zi,
  Ig = Qn && (!$f || (Zi && 8 < Zi && 11 >= Zi)),
  Ch = " ",
  kh = !1;
function Lg(e, t) {
  switch (e) {
    case "keyup":
      return Ib.indexOf(t.keyCode) !== -1;
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
function Ag(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $o = !1;
function Ab(e, t) {
  switch (e) {
    case "compositionend":
      return Ag(t);
    case "keypress":
      return t.which !== 32 ? null : ((kh = !0), Ch);
    case "textInput":
      return (e = t.data), e === Ch && kh ? null : e;
    default:
      return null;
  }
}
function zb(e, t) {
  if ($o)
    return e === "compositionend" || (!$f && Lg(e, t))
      ? ((e = Mg()), (Va = Ef = pr = null), ($o = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ig && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bb[e.type] : t === "textarea";
}
function zg(e, t, n, r) {
  hg(r),
    (t = vl(t, "onChange")),
    0 < t.length &&
      ((n = new Pf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var es = null,
  xs = null;
function jb(e) {
  Gg(e, 0);
}
function Vl(e) {
  var t = Oo(e);
  if (ag(t)) return e;
}
function Fb(e, t) {
  if (e === "change") return t;
}
var Bg = !1;
if (Qn) {
  var lc;
  if (Qn) {
    var uc = "oninput" in document;
    if (!uc) {
      var Ph = document.createElement("div");
      Ph.setAttribute("oninput", "return;"),
        (uc = typeof Ph.oninput == "function");
    }
    lc = uc;
  } else lc = !1;
  Bg = lc && (!document.documentMode || 9 < document.documentMode);
}
function Rh() {
  es && (es.detachEvent("onpropertychange", jg), (xs = es = null));
}
function jg(e) {
  if (e.propertyName === "value" && Vl(xs)) {
    var t = [];
    zg(t, xs, e, bf(e)), yg(jb, t);
  }
}
function Db(e, t, n) {
  e === "focusin"
    ? (Rh(), (es = t), (xs = n), es.attachEvent("onpropertychange", jg))
    : e === "focusout" && Rh();
}
function Wb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vl(xs);
}
function Ub(e, t) {
  if (e === "click") return Vl(t);
}
function Vb(e, t) {
  if (e === "input" || e === "change") return Vl(t);
}
function Hb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rn = typeof Object.is == "function" ? Object.is : Hb;
function bs(e, t) {
  if (Rn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Fc.call(t, o) || !Rn(e[o], t[o])) return !1;
  }
  return !0;
}
function $h(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Th(e, t) {
  var n = $h(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $h(n);
  }
}
function Fg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Fg(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Dg() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function Tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qb(e) {
  var t = Dg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Th(n, i));
        var s = Th(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Kb = Qn && "documentMode" in document && 11 >= document.documentMode,
  To = null,
  id = null,
  ts = null,
  sd = !1;
function _h(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sd ||
    To == null ||
    To !== ul(r) ||
    ((r = To),
    "selectionStart" in r && Tf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ts && bs(ts, r)) ||
      ((ts = r),
      (r = vl(id, "onSelect")),
      0 < r.length &&
        ((t = new Pf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = To))));
}
function fa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _o = {
    animationend: fa("Animation", "AnimationEnd"),
    animationiteration: fa("Animation", "AnimationIteration"),
    animationstart: fa("Animation", "AnimationStart"),
    transitionend: fa("Transition", "TransitionEnd"),
  },
  cc = {},
  Wg = {};
Qn &&
  ((Wg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _o.animationend.animation,
    delete _o.animationiteration.animation,
    delete _o.animationstart.animation),
  "TransitionEvent" in window || delete _o.transitionend.transition);
function Hl(e) {
  if (cc[e]) return cc[e];
  if (!_o[e]) return e;
  var t = _o[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wg) return (cc[e] = t[n]);
  return e;
}
var Ug = Hl("animationend"),
  Vg = Hl("animationiteration"),
  Hg = Hl("animationstart"),
  qg = Hl("transitionend"),
  Kg = new Map(),
  Oh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Rr(e, t) {
  Kg.set(e, t), ao(t, [e]);
}
for (var dc = 0; dc < Oh.length; dc++) {
  var fc = Oh[dc],
    Gb = fc.toLowerCase(),
    Yb = fc[0].toUpperCase() + fc.slice(1);
  Rr(Gb, "on" + Yb);
}
Rr(Ug, "onAnimationEnd");
Rr(Vg, "onAnimationIteration");
Rr(Hg, "onAnimationStart");
Rr("dblclick", "onDoubleClick");
Rr("focusin", "onFocus");
Rr("focusout", "onBlur");
Rr(qg, "onTransitionEnd");
Ko("onMouseEnter", ["mouseout", "mouseover"]);
Ko("onMouseLeave", ["mouseout", "mouseover"]);
Ko("onPointerEnter", ["pointerout", "pointerover"]);
Ko("onPointerLeave", ["pointerout", "pointerover"]);
ao(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ao(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ao("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ao(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ao(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ao(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var qi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Xb = new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));
function Nh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Gx(r, t, void 0, e), (e.currentTarget = null);
}
function Gg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Nh(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Nh(o, a, u), (i = l);
        }
    }
  }
  if (dl) throw ((e = td), (dl = !1), (td = null), e);
}
function Be(e, t) {
  var n = t[dd];
  n === void 0 && (n = t[dd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Yg(t, e, 2, !1), n.add(r));
}
function pc(e, t, n) {
  var r = 0;
  t && (r |= 4), Yg(n, e, r, t);
}
var pa = "_reactListening" + Math.random().toString(36).slice(2);
function ws(e) {
  if (!e[pa]) {
    (e[pa] = !0),
      ng.forEach(function (n) {
        n !== "selectionchange" && (Xb.has(n) || pc(n, !1, e), pc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pa] || ((t[pa] = !0), pc("selectionchange", !1, t));
  }
}
function Yg(e, t, n, r) {
  switch (Ng(t)) {
    case 1:
      var o = cb;
      break;
    case 4:
      o = db;
      break;
    default:
      o = kf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ed ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function hc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Wr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  yg(function () {
    var u = i,
      c = bf(n),
      p = [];
    e: {
      var f = Kg.get(e);
      if (f !== void 0) {
        var b = Pf,
          w = e;
        switch (e) {
          case "keypress":
            if (Ha(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = Pb;
            break;
          case "focusin":
            (w = "focus"), (b = ac);
            break;
          case "focusout":
            (w = "blur"), (b = ac);
            break;
          case "beforeblur":
          case "afterblur":
            b = ac;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = bh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = hb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Tb;
            break;
          case Ug:
          case Vg:
          case Hg:
            b = gb;
            break;
          case qg:
            b = Ob;
            break;
          case "scroll":
            b = fb;
            break;
          case "wheel":
            b = Mb;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = xb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Sh;
        }
        var y = (t & 4) !== 0,
          P = !y && e === "scroll",
          m = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var h = u, d; h !== null; ) {
          d = h;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              m !== null && ((g = ms(h, m)), g != null && y.push(Ss(h, g, d)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new b(f, w, null, n, c)), p.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Jc &&
            (w = n.relatedTarget || n.fromElement) &&
            (Wr(w) || w[Jn]))
        )
          break e;
        if (
          (b || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          b
            ? ((w = n.relatedTarget || n.toElement),
              (b = u),
              (w = w ? Wr(w) : null),
              w !== null &&
                ((P = lo(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((b = null), (w = u)),
          b !== w)
        ) {
          if (
            ((y = bh),
            (g = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Sh),
              (g = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (P = b == null ? f : Oo(b)),
            (d = w == null ? f : Oo(w)),
            (f = new y(g, h + "leave", b, n, c)),
            (f.target = P),
            (f.relatedTarget = d),
            (g = null),
            Wr(c) === u &&
              ((y = new y(m, h + "enter", w, n, c)),
              (y.target = d),
              (y.relatedTarget = P),
              (g = y)),
            (P = g),
            b && w)
          )
            t: {
              for (y = b, m = w, h = 0, d = y; d; d = mo(d)) h++;
              for (d = 0, g = m; g; g = mo(g)) d++;
              for (; 0 < h - d; ) (y = mo(y)), h--;
              for (; 0 < d - h; ) (m = mo(m)), d--;
              for (; h--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = mo(y)), (m = mo(m));
              }
              y = null;
            }
          else y = null;
          b !== null && Mh(p, f, b, y, !1),
            w !== null && P !== null && Mh(p, P, w, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? Oo(u) : window),
          (b = f.nodeName && f.nodeName.toLowerCase()),
          b === "select" || (b === "input" && f.type === "file"))
        )
          var C = Fb;
        else if (Eh(f))
          if (Bg) C = Vb;
          else {
            C = Wb;
            var E = Db;
          }
        else
          (b = f.nodeName) &&
            b.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Ub);
        if (C && (C = C(e, u))) {
          zg(p, C, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Kc(f, "number", f.value);
      }
      switch (((E = u ? Oo(u) : window), e)) {
        case "focusin":
          (Eh(E) || E.contentEditable === "true") &&
            ((To = E), (id = u), (ts = null));
          break;
        case "focusout":
          ts = id = To = null;
          break;
        case "mousedown":
          sd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (sd = !1), _h(p, n, c);
          break;
        case "selectionchange":
          if (Kb) break;
        case "keydown":
        case "keyup":
          _h(p, n, c);
      }
      var k;
      if ($f)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        $o
          ? Lg(e, n) && ($ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (Ig &&
          n.locale !== "ko" &&
          ($o || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && $o && (k = Mg())
            : ((pr = c),
              (Ef = "value" in pr ? pr.value : pr.textContent),
              ($o = !0))),
        (E = vl(u, $)),
        0 < E.length &&
          (($ = new wh($, e, null, n, c)),
          p.push({ event: $, listeners: E }),
          k ? ($.data = k) : ((k = Ag(n)), k !== null && ($.data = k)))),
        (k = Lb ? Ab(e, n) : zb(e, n)) &&
          ((u = vl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wh("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Gg(p, t);
  });
}
function Ss(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ms(e, n)),
      i != null && r.unshift(Ss(e, i, o)),
      (i = ms(e, t)),
      i != null && r.push(Ss(e, i, o))),
      (e = e.return);
  }
  return r;
}
function mo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = ms(n, i)), l != null && s.unshift(Ss(n, l, a)))
        : o || ((l = ms(n, i)), l != null && s.push(Ss(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Qb = /\r\n?/g,
  Jb = /\u0000|\uFFFD/g;
function Ih(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qb,
      `
`,
    )
    .replace(Jb, "");
}
function ha(e, t, n) {
  if (((t = Ih(t)), Ih(e) !== t && n)) throw Error(U(425));
}
function gl() {}
var ad = null,
  ld = null;
function ud(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var cd = typeof setTimeout == "function" ? setTimeout : void 0,
  Zb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lh = typeof Promise == "function" ? Promise : void 0,
  ew =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lh < "u"
        ? function (e) {
            return Lh.resolve(null).then(e).catch(tw);
          }
        : cd;
function tw(e) {
  setTimeout(function () {
    throw e;
  });
}
function mc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ys(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ys(t);
}
function xr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ah(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ui = Math.random().toString(36).slice(2),
  Mn = "__reactFiber$" + ui,
  Cs = "__reactProps$" + ui,
  Jn = "__reactContainer$" + ui,
  dd = "__reactEvents$" + ui,
  nw = "__reactListeners$" + ui,
  rw = "__reactHandles$" + ui;
function Wr(e) {
  var t = e[Mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jn] || n[Mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ah(e); e !== null; ) {
          if ((n = e[Mn])) return n;
          e = Ah(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fs(e) {
  return (
    (e = e[Mn] || e[Jn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Oo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function ql(e) {
  return e[Cs] || null;
}
var fd = [],
  No = -1;
function $r(e) {
  return { current: e };
}
function je(e) {
  0 > No || ((e.current = fd[No]), (fd[No] = null), No--);
}
function Ae(e, t) {
  No++, (fd[No] = e.current), (e.current = t);
}
var Er = {},
  Ct = $r(Er),
  Mt = $r(!1),
  Zr = Er;
function Go(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Er;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function It(e) {
  return (e = e.childContextTypes), e != null;
}
function yl() {
  je(Mt), je(Ct);
}
function zh(e, t, n) {
  if (Ct.current !== Er) throw Error(U(168));
  Ae(Ct, t), Ae(Mt, n);
}
function Xg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(U(108, Dx(e) || "Unknown", o));
  return Ge({}, n, r);
}
function xl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Er),
    (Zr = Ct.current),
    Ae(Ct, e),
    Ae(Mt, Mt.current),
    !0
  );
}
function Bh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n
    ? ((e = Xg(e, t, Zr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      je(Mt),
      je(Ct),
      Ae(Ct, e))
    : je(Mt),
    Ae(Mt, n);
}
var Hn = null,
  Kl = !1,
  vc = !1;
function Qg(e) {
  Hn === null ? (Hn = [e]) : Hn.push(e);
}
function ow(e) {
  (Kl = !0), Qg(e);
}
function Tr() {
  if (!vc && Hn !== null) {
    vc = !0;
    var e = 0,
      t = Ne;
    try {
      var n = Hn;
      for (Ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Hn = null), (Kl = !1);
    } catch (o) {
      throw (Hn !== null && (Hn = Hn.slice(e + 1)), Sg(wf, Tr), o);
    } finally {
      (Ne = t), (vc = !1);
    }
  }
  return null;
}
var Mo = [],
  Io = 0,
  bl = null,
  wl = 0,
  nn = [],
  rn = 0,
  eo = null,
  Kn = 1,
  Gn = "";
function Br(e, t) {
  (Mo[Io++] = wl), (Mo[Io++] = bl), (bl = e), (wl = t);
}
function Jg(e, t, n) {
  (nn[rn++] = Kn), (nn[rn++] = Gn), (nn[rn++] = eo), (eo = e);
  var r = Kn;
  e = Gn;
  var o = 32 - En(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - En(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Kn = (1 << (32 - En(t) + o)) | (n << o) | r),
      (Gn = i + e);
  } else (Kn = (1 << i) | (n << o) | r), (Gn = e);
}
function _f(e) {
  e.return !== null && (Br(e, 1), Jg(e, 1, 0));
}
function Of(e) {
  for (; e === bl; )
    (bl = Mo[--Io]), (Mo[Io] = null), (wl = Mo[--Io]), (Mo[Io] = null);
  for (; e === eo; )
    (eo = nn[--rn]),
      (nn[rn] = null),
      (Gn = nn[--rn]),
      (nn[rn] = null),
      (Kn = nn[--rn]),
      (nn[rn] = null);
}
var qt = null,
  Ht = null,
  Ue = !1,
  Sn = null;
function Zg(e, t) {
  var n = an(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function jh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qt = e), (Ht = xr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qt = e), (Ht = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = eo !== null ? { id: Kn, overflow: Gn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = an(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qt = e),
            (Ht = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hd(e) {
  if (Ue) {
    var t = Ht;
    if (t) {
      var n = t;
      if (!jh(e, t)) {
        if (pd(e)) throw Error(U(418));
        t = xr(n.nextSibling);
        var r = qt;
        t && jh(e, t)
          ? Zg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (qt = e));
      }
    } else {
      if (pd(e)) throw Error(U(418));
      (e.flags = (e.flags & -4097) | 2), (Ue = !1), (qt = e);
    }
  }
}
function Fh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function ma(e) {
  if (e !== qt) return !1;
  if (!Ue) return Fh(e), (Ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ud(e.type, e.memoizedProps))),
    t && (t = Ht))
  ) {
    if (pd(e)) throw (e0(), Error(U(418)));
    for (; t; ) Zg(e, t), (t = xr(t.nextSibling));
  }
  if ((Fh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ht = xr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ht = null;
    }
  } else Ht = qt ? xr(e.stateNode.nextSibling) : null;
  return !0;
}
function e0() {
  for (var e = Ht; e; ) e = xr(e.nextSibling);
}
function Yo() {
  (Ht = qt = null), (Ue = !1);
}
function Nf(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
var iw = rr.ReactCurrentBatchConfig;
function xn(e, t) {
  if (e && e.defaultProps) {
    (t = Ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Sl = $r(null),
  Cl = null,
  Lo = null,
  Mf = null;
function If() {
  Mf = Lo = Cl = null;
}
function Lf(e) {
  var t = Sl.current;
  je(Sl), (e._currentValue = t);
}
function md(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wo(e, t) {
  (Cl = e),
    (Mf = Lo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Nt = !0), (e.firstContext = null));
}
function dn(e) {
  var t = e._currentValue;
  if (Mf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Lo === null)) {
      if (Cl === null) throw Error(U(308));
      (Lo = e), (Cl.dependencies = { lanes: 0, firstContext: e });
    } else Lo = Lo.next = e;
  return t;
}
var Ur = null;
function Af(e) {
  Ur === null ? (Ur = [e]) : Ur.push(e);
}
function t0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Af(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Zn(e, r)
  );
}
function Zn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var cr = !1;
function zf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function n0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function br(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ce & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Zn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Af(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Zn(e, n)
  );
}
function qa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sf(e, n);
  }
}
function Dh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var o = e.updateQueue;
  cr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        b = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: b,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((f = t), (b = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                p = w.call(b, p, f);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (f = typeof w == "function" ? w.call(b, p, f) : w),
                f == null)
              )
                break e;
              p = Ge({}, p, f);
              break e;
            case 2:
              cr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (b = {
          eventTime: b,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = b), (l = p)) : (c = c.next = b),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = p),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (no |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function Wh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(U(191, o));
        o.call(r);
      }
    }
}
var r0 = new tg.Component().refs;
function vd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      o = Sr(e),
      i = Yn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = br(e, i, o)),
      t !== null && (Pn(t, e, o, r), qa(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      o = Sr(e),
      i = Yn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = br(e, i, o)),
      t !== null && (Pn(t, e, o, r), qa(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Rt(),
      r = Sr(e),
      o = Yn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = br(e, o, r)),
      t !== null && (Pn(t, e, r, n), qa(t, e, r));
  },
};
function Uh(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bs(n, r) || !bs(o, i)
        : !0
  );
}
function o0(e, t, n) {
  var r = !1,
    o = Er,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = dn(i))
      : ((o = It(t) ? Zr : Ct.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Go(e, o) : Er)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Vh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function gd(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = r0), zf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = dn(i))
    : ((i = It(t) ? Zr : Ct.current), (o.context = Go(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (vd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Gl.enqueueReplaceState(o, o.state, null),
      kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function $i(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === r0 && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function va(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Hh(e) {
  var t = e._init;
  return t(e._payload);
}
function i0(e) {
  function t(m, h) {
    if (e) {
      var d = m.deletions;
      d === null ? ((m.deletions = [h]), (m.flags |= 16)) : d.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = Cr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, d) {
    return (
      (m.index = d),
      e
        ? ((d = m.alternate),
          d !== null
            ? ((d = d.index), d < h ? ((m.flags |= 2), h) : d)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, d, g) {
    return h === null || h.tag !== 6
      ? ((h = Cc(d, m.mode, g)), (h.return = m), h)
      : ((h = o(h, d)), (h.return = m), h);
  }
  function l(m, h, d, g) {
    var C = d.type;
    return C === Ro
      ? c(m, h, d.props.children, g, d.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === ur &&
              Hh(C) === h.type))
        ? ((g = o(h, d.props)), (g.ref = $i(m, h, d)), (g.return = m), g)
        : ((g = Ja(d.type, d.key, d.props, null, m.mode, g)),
          (g.ref = $i(m, h, d)),
          (g.return = m),
          g);
  }
  function u(m, h, d, g) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== d.containerInfo ||
      h.stateNode.implementation !== d.implementation
      ? ((h = kc(d, m.mode, g)), (h.return = m), h)
      : ((h = o(h, d.children || [])), (h.return = m), h);
  }
  function c(m, h, d, g, C) {
    return h === null || h.tag !== 7
      ? ((h = Gr(d, m.mode, g, C)), (h.return = m), h)
      : ((h = o(h, d)), (h.return = m), h);
  }
  function p(m, h, d) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Cc("" + h, m.mode, d)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ia:
          return (
            (d = Ja(h.type, h.key, h.props, null, m.mode, d)),
            (d.ref = $i(m, null, h)),
            (d.return = m),
            d
          );
        case Po:
          return (h = kc(h, m.mode, d)), (h.return = m), h;
        case ur:
          var g = h._init;
          return p(m, g(h._payload), d);
      }
      if (Vi(h) || Ci(h))
        return (h = Gr(h, m.mode, d, null)), (h.return = m), h;
      va(m, h);
    }
    return null;
  }
  function f(m, h, d, g) {
    var C = h !== null ? h.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : a(m, h, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ia:
          return d.key === C ? l(m, h, d, g) : null;
        case Po:
          return d.key === C ? u(m, h, d, g) : null;
        case ur:
          return (C = d._init), f(m, h, C(d._payload), g);
      }
      if (Vi(d) || Ci(d)) return C !== null ? null : c(m, h, d, g, null);
      va(m, d);
    }
    return null;
  }
  function b(m, h, d, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (m = m.get(d) || null), a(h, m, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ia:
          return (m = m.get(g.key === null ? d : g.key) || null), l(h, m, g, C);
        case Po:
          return (m = m.get(g.key === null ? d : g.key) || null), u(h, m, g, C);
        case ur:
          var E = g._init;
          return b(m, h, d, E(g._payload), C);
      }
      if (Vi(g) || Ci(g)) return (m = m.get(d) || null), c(h, m, g, C, null);
      va(h, g);
    }
    return null;
  }
  function w(m, h, d, g) {
    for (
      var C = null, E = null, k = h, $ = (h = 0), _ = null;
      k !== null && $ < d.length;
      $++
    ) {
      k.index > $ ? ((_ = k), (k = null)) : (_ = k.sibling);
      var T = f(m, k, d[$], g);
      if (T === null) {
        k === null && (k = _);
        break;
      }
      e && k && T.alternate === null && t(m, k),
        (h = i(T, h, $)),
        E === null ? (C = T) : (E.sibling = T),
        (E = T),
        (k = _);
    }
    if ($ === d.length) return n(m, k), Ue && Br(m, $), C;
    if (k === null) {
      for (; $ < d.length; $++)
        (k = p(m, d[$], g)),
          k !== null &&
            ((h = i(k, h, $)), E === null ? (C = k) : (E.sibling = k), (E = k));
      return Ue && Br(m, $), C;
    }
    for (k = r(m, k); $ < d.length; $++)
      (_ = b(k, m, $, d[$], g)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? $ : _.key),
          (h = i(_, h, $)),
          E === null ? (C = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        k.forEach(function (N) {
          return t(m, N);
        }),
      Ue && Br(m, $),
      C
    );
  }
  function y(m, h, d, g) {
    var C = Ci(d);
    if (typeof C != "function") throw Error(U(150));
    if (((d = C.call(d)), d == null)) throw Error(U(151));
    for (
      var E = (C = null), k = h, $ = (h = 0), _ = null, T = d.next();
      k !== null && !T.done;
      $++, T = d.next()
    ) {
      k.index > $ ? ((_ = k), (k = null)) : (_ = k.sibling);
      var N = f(m, k, T.value, g);
      if (N === null) {
        k === null && (k = _);
        break;
      }
      e && k && N.alternate === null && t(m, k),
        (h = i(N, h, $)),
        E === null ? (C = N) : (E.sibling = N),
        (E = N),
        (k = _);
    }
    if (T.done) return n(m, k), Ue && Br(m, $), C;
    if (k === null) {
      for (; !T.done; $++, T = d.next())
        (T = p(m, T.value, g)),
          T !== null &&
            ((h = i(T, h, $)), E === null ? (C = T) : (E.sibling = T), (E = T));
      return Ue && Br(m, $), C;
    }
    for (k = r(m, k); !T.done; $++, T = d.next())
      (T = b(k, m, $, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && k.delete(T.key === null ? $ : T.key),
          (h = i(T, h, $)),
          E === null ? (C = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        k.forEach(function (z) {
          return t(m, z);
        }),
      Ue && Br(m, $),
      C
    );
  }
  function P(m, h, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ro &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ia:
          e: {
            for (var C = d.key, E = h; E !== null; ) {
              if (E.key === C) {
                if (((C = d.type), C === Ro)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (h = o(E, d.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ur &&
                    Hh(C) === E.type)
                ) {
                  n(m, E.sibling),
                    (h = o(E, d.props)),
                    (h.ref = $i(m, E, d)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            d.type === Ro
              ? ((h = Gr(d.props.children, m.mode, g, d.key)),
                (h.return = m),
                (m = h))
              : ((g = Ja(d.type, d.key, d.props, null, m.mode, g)),
                (g.ref = $i(m, h, d)),
                (g.return = m),
                (m = g));
          }
          return s(m);
        case Po:
          e: {
            for (E = d.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === d.containerInfo &&
                  h.stateNode.implementation === d.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, d.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = kc(d, m.mode, g)), (h.return = m), (m = h);
          }
          return s(m);
        case ur:
          return (E = d._init), P(m, h, E(d._payload), g);
      }
      if (Vi(d)) return w(m, h, d, g);
      if (Ci(d)) return y(m, h, d, g);
      va(m, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, d)), (h.return = m), (m = h))
          : (n(m, h), (h = Cc(d, m.mode, g)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return P;
}
var Xo = i0(!0),
  s0 = i0(!1),
  Ds = {},
  An = $r(Ds),
  ks = $r(Ds),
  Es = $r(Ds);
function Vr(e) {
  if (e === Ds) throw Error(U(174));
  return e;
}
function Bf(e, t) {
  switch ((Ae(Es, t), Ae(ks, e), Ae(An, Ds), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yc(t, e));
  }
  je(An), Ae(An, t);
}
function Qo() {
  je(An), je(ks), je(Es);
}
function a0(e) {
  Vr(Es.current);
  var t = Vr(An.current),
    n = Yc(t, e.type);
  t !== n && (Ae(ks, e), Ae(An, n));
}
function jf(e) {
  ks.current === e && (je(An), je(ks));
}
var He = $r(0);
function El(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var gc = [];
function Ff() {
  for (var e = 0; e < gc.length; e++)
    gc[e]._workInProgressVersionPrimary = null;
  gc.length = 0;
}
var Ka = rr.ReactCurrentDispatcher,
  yc = rr.ReactCurrentBatchConfig,
  to = 0,
  Ke = null,
  ct = null,
  ft = null,
  Pl = !1,
  ns = !1,
  Ps = 0,
  sw = 0;
function xt() {
  throw Error(U(321));
}
function Df(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rn(e[n], t[n])) return !1;
  return !0;
}
function Wf(e, t, n, r, o, i) {
  if (
    ((to = i),
    (Ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ka.current = e === null || e.memoizedState === null ? cw : dw),
    (e = n(r, o)),
    ns)
  ) {
    i = 0;
    do {
      if (((ns = !1), (Ps = 0), 25 <= i)) throw Error(U(301));
      (i += 1),
        (ft = ct = null),
        (t.updateQueue = null),
        (Ka.current = fw),
        (e = n(r, o));
    } while (ns);
  }
  if (
    ((Ka.current = Rl),
    (t = ct !== null && ct.next !== null),
    (to = 0),
    (ft = ct = Ke = null),
    (Pl = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function Uf() {
  var e = Ps !== 0;
  return (Ps = 0), e;
}
function _n() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ft === null ? (Ke.memoizedState = ft = e) : (ft = ft.next = e), ft;
}
function fn() {
  if (ct === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ct.next;
  var t = ft === null ? Ke.memoizedState : ft.next;
  if (t !== null) (ft = t), (ct = e);
  else {
    if (e === null) throw Error(U(310));
    (ct = e),
      (e = {
        memoizedState: ct.memoizedState,
        baseState: ct.baseState,
        baseQueue: ct.baseQueue,
        queue: ct.queue,
        next: null,
      }),
      ft === null ? (Ke.memoizedState = ft = e) : (ft = ft.next = e);
  }
  return ft;
}
function Rs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xc(e) {
  var t = fn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = ct,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((to & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = p), (s = r)) : (l = l.next = p),
          (Ke.lanes |= c),
          (no |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Rn(r, t.memoizedState) || (Nt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ke.lanes |= i), (no |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bc(e) {
  var t = fn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Rn(i, t.memoizedState) || (Nt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function l0() {}
function u0(e, t) {
  var n = Ke,
    r = fn(),
    o = t(),
    i = !Rn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Nt = !0)),
    (r = r.queue),
    Vf(f0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $s(9, d0.bind(null, n, r, o, t), void 0, null),
      pt === null)
    )
      throw Error(U(349));
    to & 30 || c0(n, t, o);
  }
  return o;
}
function c0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function d0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), p0(t) && h0(e);
}
function f0(e, t, n) {
  return n(function () {
    p0(t) && h0(e);
  });
}
function p0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rn(e, n);
  } catch {
    return !0;
  }
}
function h0(e) {
  var t = Zn(e, 1);
  t !== null && Pn(t, e, 1, -1);
}
function qh(e) {
  var t = _n();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uw.bind(null, Ke, e)),
    [t.memoizedState, e]
  );
}
function $s(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function m0() {
  return fn().memoizedState;
}
function Ga(e, t, n, r) {
  var o = _n();
  (Ke.flags |= e),
    (o.memoizedState = $s(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yl(e, t, n, r) {
  var o = fn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ct !== null) {
    var s = ct.memoizedState;
    if (((i = s.destroy), r !== null && Df(r, s.deps))) {
      o.memoizedState = $s(t, n, i, r);
      return;
    }
  }
  (Ke.flags |= e), (o.memoizedState = $s(1 | t, n, i, r));
}
function Kh(e, t) {
  return Ga(8390656, 8, e, t);
}
function Vf(e, t) {
  return Yl(2048, 8, e, t);
}
function v0(e, t) {
  return Yl(4, 2, e, t);
}
function g0(e, t) {
  return Yl(4, 4, e, t);
}
function y0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function x0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yl(4, 4, y0.bind(null, t, e), n)
  );
}
function Hf() {}
function b0(e, t) {
  var n = fn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Df(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function w0(e, t) {
  var n = fn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Df(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function S0(e, t, n) {
  return to & 21
    ? (Rn(n, t) || ((n = Eg()), (Ke.lanes |= n), (no |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Nt = !0)), (e.memoizedState = n));
}
function aw(e, t) {
  var n = Ne;
  (Ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yc.transition;
  yc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ne = n), (yc.transition = r);
  }
}
function C0() {
  return fn().memoizedState;
}
function lw(e, t, n) {
  var r = Sr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    k0(e))
  )
    E0(t, n);
  else if (((n = t0(e, t, n, r)), n !== null)) {
    var o = Rt();
    Pn(n, e, r, o), P0(n, t, r);
  }
}
function uw(e, t, n) {
  var r = Sr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (k0(e)) E0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Rn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Af(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = t0(e, t, o, r)),
      n !== null && ((o = Rt()), Pn(n, e, r, o), P0(n, t, r));
  }
}
function k0(e) {
  var t = e.alternate;
  return e === Ke || (t !== null && t === Ke);
}
function E0(e, t) {
  ns = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function P0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sf(e, n);
  }
}
var Rl = {
    readContext: dn,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useInsertionEffect: xt,
    useLayoutEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useMutableSource: xt,
    useSyncExternalStore: xt,
    useId: xt,
    unstable_isNewReconciler: !1,
  },
  cw = {
    readContext: dn,
    useCallback: function (e, t) {
      return (_n().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dn,
    useEffect: Kh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ga(4194308, 4, y0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ga(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ga(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _n();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _n();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lw.bind(null, Ke, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _n();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qh,
    useDebugValue: Hf,
    useDeferredValue: function (e) {
      return (_n().memoizedState = e);
    },
    useTransition: function () {
      var e = qh(!1),
        t = e[0];
      return (e = aw.bind(null, e[1])), (_n().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ke,
        o = _n();
      if (Ue) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = t()), pt === null)) throw Error(U(349));
        to & 30 || c0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Kh(f0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        $s(9, d0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _n(),
        t = pt.identifierPrefix;
      if (Ue) {
        var n = Gn,
          r = Kn;
        (n = (r & ~(1 << (32 - En(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ps++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  dw = {
    readContext: dn,
    useCallback: b0,
    useContext: dn,
    useEffect: Vf,
    useImperativeHandle: x0,
    useInsertionEffect: v0,
    useLayoutEffect: g0,
    useMemo: w0,
    useReducer: xc,
    useRef: m0,
    useState: function () {
      return xc(Rs);
    },
    useDebugValue: Hf,
    useDeferredValue: function (e) {
      var t = fn();
      return S0(t, ct.memoizedState, e);
    },
    useTransition: function () {
      var e = xc(Rs)[0],
        t = fn().memoizedState;
      return [e, t];
    },
    useMutableSource: l0,
    useSyncExternalStore: u0,
    useId: C0,
    unstable_isNewReconciler: !1,
  },
  fw = {
    readContext: dn,
    useCallback: b0,
    useContext: dn,
    useEffect: Vf,
    useImperativeHandle: x0,
    useInsertionEffect: v0,
    useLayoutEffect: g0,
    useMemo: w0,
    useReducer: bc,
    useRef: m0,
    useState: function () {
      return bc(Rs);
    },
    useDebugValue: Hf,
    useDeferredValue: function (e) {
      var t = fn();
      return ct === null ? (t.memoizedState = e) : S0(t, ct.memoizedState, e);
    },
    useTransition: function () {
      var e = bc(Rs)[0],
        t = fn().memoizedState;
      return [e, t];
    },
    useMutableSource: l0,
    useSyncExternalStore: u0,
    useId: C0,
    unstable_isNewReconciler: !1,
  };
function Jo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Fx(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function wc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var pw = typeof WeakMap == "function" ? WeakMap : Map;
function R0(e, t, n) {
  (n = Yn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Tl || ((Tl = !0), ($d = r)), yd(e, t);
    }),
    n
  );
}
function $0(e, t, n) {
  (n = Yn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        yd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        yd(e, t),
          typeof r != "function" &&
            (wr === null ? (wr = new Set([this])) : wr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Gh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Rw.bind(null, e, t, n)), t.then(e, e));
}
function Yh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yn(-1, 1)), (t.tag = 2), br(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hw = rr.ReactCurrentOwner,
  Nt = !1;
function Et(e, t, n, r) {
  t.child = e === null ? s0(t, null, n, r) : Xo(t, e.child, n, r);
}
function Qh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Wo(t, o),
    (r = Wf(e, t, n, r, i, o)),
    (n = Uf()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        er(e, t, o))
      : (Ue && n && _f(t), (t.flags |= 1), Et(e, t, r, o), t.child)
  );
}
function Jh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Zf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), T0(e, t, i, r, o))
      : ((e = Ja(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bs), n(s, r) && e.ref === t.ref)
    )
      return er(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Cr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function T0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bs(i, r) && e.ref === t.ref)
      if (((Nt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Nt = !0);
      else return (t.lanes = e.lanes), er(e, t, o);
  }
  return xd(e, t, n, r, o);
}
function _0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ae(zo, Ut),
        (Ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ae(zo, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ae(zo, Ut),
        (Ut |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ae(zo, Ut),
      (Ut |= r);
  return Et(e, t, o, n), t.child;
}
function O0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xd(e, t, n, r, o) {
  var i = It(n) ? Zr : Ct.current;
  return (
    (i = Go(t, i)),
    Wo(t, o),
    (n = Wf(e, t, n, r, i, o)),
    (r = Uf()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        er(e, t, o))
      : (Ue && r && _f(t), (t.flags |= 1), Et(e, t, n, o), t.child)
  );
}
function Zh(e, t, n, r, o) {
  if (It(n)) {
    var i = !0;
    xl(t);
  } else i = !1;
  if ((Wo(t, o), t.stateNode === null))
    Ya(e, t), o0(t, n, r), gd(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dn(u))
      : ((u = It(n) ? Zr : Ct.current), (u = Go(t, u)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Vh(t, s, r, u)),
      (cr = !1);
    var f = t.memoizedState;
    (s.state = f),
      kl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Mt.current || cr
        ? (typeof c == "function" && (vd(t, n, c, r), (l = t.memoizedState)),
          (a = cr || Uh(t, n, a, r, f, l, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      n0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : xn(t.type, a)),
      (s.props = u),
      (p = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = dn(l))
        : ((l = It(n) ? Zr : Ct.current), (l = Go(t, l)));
    var b = n.getDerivedStateFromProps;
    (c =
      typeof b == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== p || f !== l) && Vh(t, s, r, l)),
      (cr = !1),
      (f = t.memoizedState),
      (s.state = f),
      kl(t, r, s, o);
    var w = t.memoizedState;
    a !== p || f !== w || Mt.current || cr
      ? (typeof b == "function" && (vd(t, n, b, r), (w = t.memoizedState)),
        (u = cr || Uh(t, n, u, r, f, w, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bd(e, t, n, r, i, o);
}
function bd(e, t, n, r, o, i) {
  O0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Bh(t, n, !1), er(e, t, i);
  (r = t.stateNode), (hw.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Xo(t, e.child, null, i)), (t.child = Xo(t, null, a, i)))
      : Et(e, t, a, i),
    (t.memoizedState = r.state),
    o && Bh(t, n, !0),
    t.child
  );
}
function N0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zh(e, t.context, !1),
    Bf(e, t.containerInfo);
}
function em(e, t, n, r, o) {
  return Yo(), Nf(o), (t.flags |= 256), Et(e, t, n, r), t.child;
}
var wd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function M0(e, t, n) {
  var r = t.pendingProps,
    o = He.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ae(He, o & 1),
    e === null)
  )
    return (
      hd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Jl(s, r, 0, null)),
              (e = Gr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Sd(n)),
              (t.memoizedState = wd),
              e)
            : qf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return mw(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Cr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Cr(a, i)) : ((i = Gr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Sd(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Cr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qf(e, t) {
  return (
    (t = Jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ga(e, t, n, r) {
  return (
    r !== null && Nf(r),
    Xo(t, e.child, null, n),
    (e = qf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wc(Error(U(422)))), ga(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Jl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Gr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Xo(t, e.child, null, s),
          (t.child.memoizedState = Sd(s)),
          (t.memoizedState = wd),
          i);
  if (!(t.mode & 1)) return ga(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(U(419))), (r = wc(i, r, void 0)), ga(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Nt || a)) {
    if (((r = pt), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Zn(e, o), Pn(r, e, o, -1));
    }
    return Jf(), (r = wc(Error(U(421)))), ga(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $w.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ht = xr(o.nextSibling)),
      (qt = t),
      (Ue = !0),
      (Sn = null),
      e !== null &&
        ((nn[rn++] = Kn),
        (nn[rn++] = Gn),
        (nn[rn++] = eo),
        (Kn = e.id),
        (Gn = e.overflow),
        (eo = t)),
      (t = qf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), md(e.return, t, n);
}
function Sc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function I0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Et(e, t, r.children, n), (r = He.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tm(e, n, t);
        else if (e.tag === 19) tm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ae(He, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && El(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Sc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && El(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Sc(t, !0, n, null, i);
        break;
      case "together":
        Sc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ya(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function er(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (no |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Cr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vw(e, t, n) {
  switch (t.tag) {
    case 3:
      N0(t), Yo();
      break;
    case 5:
      a0(t);
      break;
    case 1:
      It(t.type) && xl(t);
      break;
    case 4:
      Bf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ae(Sl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ae(He, He.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? M0(e, t, n)
            : (Ae(He, He.current & 1),
              (e = er(e, t, n)),
              e !== null ? e.sibling : null);
      Ae(He, He.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return I0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ae(He, He.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _0(e, t, n);
  }
  return er(e, t, n);
}
var L0, Cd, A0, z0;
L0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Cd = function () {};
A0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Vr(An.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Hc(e, o)), (r = Hc(e, r)), (i = []);
        break;
      case "select":
        (o = Ge({}, o, { value: void 0 })),
          (r = Ge({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Gc(e, o)), (r = Gc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    Xc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ps.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ps.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Be("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
z0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ti(e, t) {
  if (!Ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function bt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gw(e, t, n) {
  var r = t.pendingProps;
  switch ((Of(t), t.tag)) {
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
      return bt(t), null;
    case 1:
      return It(t.type) && yl(), bt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qo(),
        je(Mt),
        je(Ct),
        Ff(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ma(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Sn !== null && (Od(Sn), (Sn = null)))),
        Cd(e, t),
        bt(t),
        null
      );
    case 5:
      jf(t);
      var o = Vr(Es.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        A0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return bt(t), null;
        }
        if (((e = Vr(An.current)), ma(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Mn] = t), (r[Cs] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Be("cancel", r), Be("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Be("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qi.length; o++) Be(qi[o], r);
              break;
            case "source":
              Be("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Be("error", r), Be("load", r);
              break;
            case "details":
              Be("toggle", r);
              break;
            case "input":
              ch(r, i), Be("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Be("invalid", r);
              break;
            case "textarea":
              fh(r, i), Be("invalid", r);
          }
          Xc(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ha(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ha(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ps.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Be("scroll", r);
            }
          switch (n) {
            case "input":
              sa(r), dh(r, i, !0);
              break;
            case "textarea":
              sa(r), ph(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = gl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Mn] = t),
            (e[Cs] = r),
            L0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Qc(n, r)), n)) {
              case "dialog":
                Be("cancel", e), Be("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < qi.length; o++) Be(qi[o], e);
                o = r;
                break;
              case "source":
                Be("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", e), Be("load", e), (o = r);
                break;
              case "details":
                Be("toggle", e), (o = r);
                break;
              case "input":
                ch(e, r), (o = Hc(e, r)), Be("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ge({}, r, { value: void 0 })),
                  Be("invalid", e);
                break;
              case "textarea":
                fh(e, r), (o = Gc(e, r)), Be("invalid", e);
                break;
              default:
                o = r;
            }
            Xc(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? pg(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && dg(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && hs(e, l)
                        : typeof l == "number" && hs(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ps.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Be("scroll", e)
                          : l != null && vf(e, i, l, s));
              }
            switch (n) {
              case "input":
                sa(e), dh(e, r, !1);
                break;
              case "textarea":
                sa(e), ph(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return bt(t), null;
    case 6:
      if (e && t.stateNode != null) z0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (((n = Vr(Es.current)), Vr(An.current), ma(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mn] = t),
            (i = r.nodeValue !== n) && ((e = qt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ha(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ha(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mn] = t),
            (t.stateNode = r);
      }
      return bt(t), null;
    case 13:
      if (
        (je(He),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ue && Ht !== null && t.mode & 1 && !(t.flags & 128))
          e0(), Yo(), (t.flags |= 98560), (i = !1);
        else if (((i = ma(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(U(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(U(317));
            i[Mn] = t;
          } else
            Yo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          bt(t), (i = !1);
        } else Sn !== null && (Od(Sn), (Sn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || He.current & 1 ? dt === 0 && (dt = 3) : Jf())),
          t.updateQueue !== null && (t.flags |= 4),
          bt(t),
          null);
    case 4:
      return (
        Qo(), Cd(e, t), e === null && ws(t.stateNode.containerInfo), bt(t), null
      );
    case 10:
      return Lf(t.type._context), bt(t), null;
    case 17:
      return It(t.type) && yl(), bt(t), null;
    case 19:
      if ((je(He), (i = t.memoizedState), i === null)) return bt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Ti(i, !1);
        else {
          if (dt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = El(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ti(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ae(He, (He.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ze() > Zo &&
            ((t.flags |= 128), (r = !0), Ti(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = El(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ti(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ue)
            )
              return bt(t), null;
          } else
            2 * Ze() - i.renderingStartTime > Zo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ti(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ze()),
          (t.sibling = null),
          (n = He.current),
          Ae(He, r ? (n & 1) | 2 : n & 1),
          t)
        : (bt(t), null);
    case 22:
    case 23:
      return (
        Qf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ut & 1073741824 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : bt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function yw(e, t) {
  switch ((Of(t), t.tag)) {
    case 1:
      return (
        It(t.type) && yl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qo(),
        je(Mt),
        je(Ct),
        Ff(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return jf(t), null;
    case 13:
      if (
        (je(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        Yo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return je(He), null;
    case 4:
      return Qo(), null;
    case 10:
      return Lf(t.type._context), null;
    case 22:
    case 23:
      return Qf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ya = !1,
  St = !1,
  xw = typeof WeakSet == "function" ? WeakSet : Set,
  Q = null;
function Ao(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Je(e, t, r);
      }
    else n.current = null;
}
function kd(e, t, n) {
  try {
    n();
  } catch (r) {
    Je(e, t, r);
  }
}
var nm = !1;
function bw(e, t) {
  if (((ad = hl), (e = Dg()), Tf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var b;
              p !== n || (o !== 0 && p.nodeType !== 3) || (a = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (l = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (b = p.firstChild) !== null;

            )
              (f = p), (p = b);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (b = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = b;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ld = { focusedElem: e, selectionRange: n }, hl = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Q = e);
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    P = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : xn(t.type, y),
                      P,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (g) {
          Je(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Q = e);
          break;
        }
        Q = t.return;
      }
  return (w = nm), (nm = !1), w;
}
function rs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && kd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ed(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function B0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), B0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mn], delete t[Cs], delete t[dd], delete t[nw], delete t[rw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function j0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || j0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pd(e, t, n), e = e.sibling; e !== null; ) Pd(e, t, n), (e = e.sibling);
}
function Rd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rd(e, t, n), e = e.sibling; e !== null; ) Rd(e, t, n), (e = e.sibling);
}
var mt = null,
  bn = !1;
function ar(e, t, n) {
  for (n = n.child; n !== null; ) F0(e, t, n), (n = n.sibling);
}
function F0(e, t, n) {
  if (Ln && typeof Ln.onCommitFiberUnmount == "function")
    try {
      Ln.onCommitFiberUnmount(Wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      St || Ao(n, t);
    case 6:
      var r = mt,
        o = bn;
      (mt = null),
        ar(e, t, n),
        (mt = r),
        (bn = o),
        mt !== null &&
          (bn
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode));
      break;
    case 18:
      mt !== null &&
        (bn
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? mc(e.parentNode, n)
              : e.nodeType === 1 && mc(e, n),
            ys(e))
          : mc(mt, n.stateNode));
      break;
    case 4:
      (r = mt),
        (o = bn),
        (mt = n.stateNode.containerInfo),
        (bn = !0),
        ar(e, t, n),
        (mt = r),
        (bn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !St &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && kd(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      ar(e, t, n);
      break;
    case 1:
      if (
        !St &&
        (Ao(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Je(n, t, a);
        }
      ar(e, t, n);
      break;
    case 21:
      ar(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((St = (r = St) || n.memoizedState !== null), ar(e, t, n), (St = r))
        : ar(e, t, n);
      break;
    default:
      ar(e, t, n);
  }
}
function om(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xw()),
      t.forEach(function (r) {
        var o = Tw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function yn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (mt = a.stateNode), (bn = !1);
              break e;
            case 3:
              (mt = a.stateNode.containerInfo), (bn = !0);
              break e;
            case 4:
              (mt = a.stateNode.containerInfo), (bn = !0);
              break e;
          }
          a = a.return;
        }
        if (mt === null) throw Error(U(160));
        F0(i, s, o), (mt = null), (bn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Je(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) D0(t, e), (t = t.sibling);
}
function D0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yn(t, e), Tn(e), r & 4)) {
        try {
          rs(3, e, e.return), Xl(3, e);
        } catch (y) {
          Je(e, e.return, y);
        }
        try {
          rs(5, e, e.return);
        } catch (y) {
          Je(e, e.return, y);
        }
      }
      break;
    case 1:
      yn(t, e), Tn(e), r & 512 && n !== null && Ao(n, n.return);
      break;
    case 5:
      if (
        (yn(t, e),
        Tn(e),
        r & 512 && n !== null && Ao(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          hs(o, "");
        } catch (y) {
          Je(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && lg(o, i),
              Qc(a, s);
            var u = Qc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                p = l[s + 1];
              c === "style"
                ? pg(o, p)
                : c === "dangerouslySetInnerHTML"
                  ? dg(o, p)
                  : c === "children"
                    ? hs(o, p)
                    : vf(o, c, p, u);
            }
            switch (a) {
              case "input":
                qc(o, i);
                break;
              case "textarea":
                ug(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null
                  ? Bo(o, !!i.multiple, b, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bo(o, !!i.multiple, i.defaultValue, !0)
                      : Bo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Cs] = i;
          } catch (y) {
            Je(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((yn(t, e), Tn(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          Je(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (yn(t, e), Tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ys(t.containerInfo);
        } catch (y) {
          Je(e, e.return, y);
        }
      break;
    case 4:
      yn(t, e), Tn(e);
      break;
    case 13:
      yn(t, e),
        Tn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Yf = Ze())),
        r & 4 && om(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((St = (u = St) || c), yn(t, e), (St = u)) : yn(t, e),
        Tn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Q = e, c = e.child; c !== null; ) {
            for (p = Q = c; Q !== null; ) {
              switch (((f = Q), (b = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rs(4, f, f.return);
                  break;
                case 1:
                  Ao(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      Je(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ao(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    sm(p);
                    continue;
                  }
              }
              b !== null ? ((b.return = f), (Q = b)) : sm(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = p.stateNode),
                      (l = p.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = fg("display", s)));
              } catch (y) {
                Je(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                Je(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      yn(t, e), Tn(e), r & 4 && om(e);
      break;
    case 21:
      break;
    default:
      yn(t, e), Tn(e);
  }
}
function Tn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (j0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (hs(o, ""), (r.flags &= -33));
          var i = rm(e);
          Rd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = rm(e);
          Pd(e, a, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (l) {
      Je(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ww(e, t, n) {
  (Q = e), W0(e);
}
function W0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var o = Q,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ya;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || St;
        a = ya;
        var u = St;
        if (((ya = s), (St = l) && !u))
          for (Q = o; Q !== null; )
            (s = Q),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? am(o)
                : l !== null
                  ? ((l.return = s), (Q = l))
                  : am(o);
        for (; i !== null; ) (Q = i), W0(i), (i = i.sibling);
        (Q = o), (ya = a), (St = u);
      }
      im(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Q = i)) : im(e);
  }
}
function im(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || Xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : xn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Wh(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                    var p = c.dehydrated;
                    p !== null && ys(p);
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
              throw Error(U(163));
          }
        St || (t.flags & 512 && Ed(t));
      } catch (f) {
        Je(t, t.return, f);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function sm(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function am(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xl(4, t);
          } catch (l) {
            Je(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Je(t, o, l);
            }
          }
          var i = t.return;
          try {
            Ed(t);
          } catch (l) {
            Je(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ed(t);
          } catch (l) {
            Je(t, s, l);
          }
      }
    } catch (l) {
      Je(t, t.return, l);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (Q = a);
      break;
    }
    Q = t.return;
  }
}
var Sw = Math.ceil,
  $l = rr.ReactCurrentDispatcher,
  Kf = rr.ReactCurrentOwner,
  un = rr.ReactCurrentBatchConfig,
  Ce = 0,
  pt = null,
  ot = null,
  gt = 0,
  Ut = 0,
  zo = $r(0),
  dt = 0,
  Ts = null,
  no = 0,
  Ql = 0,
  Gf = 0,
  os = null,
  Ot = null,
  Yf = 0,
  Zo = 1 / 0,
  Vn = null,
  Tl = !1,
  $d = null,
  wr = null,
  xa = !1,
  hr = null,
  _l = 0,
  is = 0,
  Td = null,
  Xa = -1,
  Qa = 0;
function Rt() {
  return Ce & 6 ? Ze() : Xa !== -1 ? Xa : (Xa = Ze());
}
function Sr(e) {
  return e.mode & 1
    ? Ce & 2 && gt !== 0
      ? gt & -gt
      : iw.transition !== null
        ? (Qa === 0 && (Qa = Eg()), Qa)
        : ((e = Ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ng(e.type))),
          e)
    : 1;
}
function Pn(e, t, n, r) {
  if (50 < is) throw ((is = 0), (Td = null), Error(U(185)));
  Bs(e, n, r),
    (!(Ce & 2) || e !== pt) &&
      (e === pt && (!(Ce & 2) && (Ql |= n), dt === 4 && fr(e, gt)),
      Lt(e, r),
      n === 1 && Ce === 0 && !(t.mode & 1) && ((Zo = Ze() + 500), Kl && Tr()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  ib(e, t);
  var r = pl(e, e === pt ? gt : 0);
  if (r === 0)
    n !== null && vh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vh(n), t === 1))
      e.tag === 0 ? ow(lm.bind(null, e)) : Qg(lm.bind(null, e)),
        ew(function () {
          !(Ce & 6) && Tr();
        }),
        (n = null);
    else {
      switch (Pg(r)) {
        case 1:
          n = wf;
          break;
        case 4:
          n = Cg;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = kg;
          break;
        default:
          n = fl;
      }
      n = X0(n, U0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function U0(e, t) {
  if (((Xa = -1), (Qa = 0), Ce & 6)) throw Error(U(327));
  var n = e.callbackNode;
  if (Uo() && e.callbackNode !== n) return null;
  var r = pl(e, e === pt ? gt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ol(e, r);
  else {
    t = r;
    var o = Ce;
    Ce |= 2;
    var i = H0();
    (pt !== e || gt !== t) && ((Vn = null), (Zo = Ze() + 500), Kr(e, t));
    do
      try {
        Ew();
        break;
      } catch (a) {
        V0(e, a);
      }
    while (!0);
    If(),
      ($l.current = i),
      (Ce = o),
      ot !== null ? (t = 0) : ((pt = null), (gt = 0), (t = dt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = nd(e)), o !== 0 && ((r = o), (t = _d(e, o)))), t === 1)
    )
      throw ((n = Ts), Kr(e, 0), fr(e, r), Lt(e, Ze()), n);
    if (t === 6) fr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Cw(o) &&
          ((t = Ol(e, r)),
          t === 2 && ((i = nd(e)), i !== 0 && ((r = i), (t = _d(e, i)))),
          t === 1))
      )
        throw ((n = Ts), Kr(e, 0), fr(e, r), Lt(e, Ze()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          jr(e, Ot, Vn);
          break;
        case 3:
          if (
            (fr(e, r), (r & 130023424) === r && ((t = Yf + 500 - Ze()), 10 < t))
          ) {
            if (pl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Rt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = cd(jr.bind(null, e, Ot, Vn), t);
            break;
          }
          jr(e, Ot, Vn);
          break;
        case 4:
          if ((fr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - En(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ze() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Sw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = cd(jr.bind(null, e, Ot, Vn), r);
            break;
          }
          jr(e, Ot, Vn);
          break;
        case 5:
          jr(e, Ot, Vn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Lt(e, Ze()), e.callbackNode === n ? U0.bind(null, e) : null;
}
function _d(e, t) {
  var n = os;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = Ol(e, t)),
    e !== 2 && ((t = Ot), (Ot = n), t !== null && Od(t)),
    e
  );
}
function Od(e) {
  Ot === null ? (Ot = e) : Ot.push.apply(Ot, e);
}
function Cw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Rn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fr(e, t) {
  for (
    t &= ~Gf,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - En(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lm(e) {
  if (Ce & 6) throw Error(U(327));
  Uo();
  var t = pl(e, 0);
  if (!(t & 1)) return Lt(e, Ze()), null;
  var n = Ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = nd(e);
    r !== 0 && ((t = r), (n = _d(e, r)));
  }
  if (n === 1) throw ((n = Ts), Kr(e, 0), fr(e, t), Lt(e, Ze()), n);
  if (n === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jr(e, Ot, Vn),
    Lt(e, Ze()),
    null
  );
}
function Xf(e, t) {
  var n = Ce;
  Ce |= 1;
  try {
    return e(t);
  } finally {
    (Ce = n), Ce === 0 && ((Zo = Ze() + 500), Kl && Tr());
  }
}
function ro(e) {
  hr !== null && hr.tag === 0 && !(Ce & 6) && Uo();
  var t = Ce;
  Ce |= 1;
  var n = un.transition,
    r = Ne;
  try {
    if (((un.transition = null), (Ne = 1), e)) return e();
  } finally {
    (Ne = r), (un.transition = n), (Ce = t), !(Ce & 6) && Tr();
  }
}
function Qf() {
  (Ut = zo.current), je(zo);
}
function Kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zb(n)), ot !== null))
    for (n = ot.return; n !== null; ) {
      var r = n;
      switch ((Of(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && yl();
          break;
        case 3:
          Qo(), je(Mt), je(Ct), Ff();
          break;
        case 5:
          jf(r);
          break;
        case 4:
          Qo();
          break;
        case 13:
          je(He);
          break;
        case 19:
          je(He);
          break;
        case 10:
          Lf(r.type._context);
          break;
        case 22:
        case 23:
          Qf();
      }
      n = n.return;
    }
  if (
    ((pt = e),
    (ot = e = Cr(e.current, null)),
    (gt = Ut = t),
    (dt = 0),
    (Ts = null),
    (Gf = Ql = no = 0),
    (Ot = os = null),
    Ur !== null)
  ) {
    for (t = 0; t < Ur.length; t++)
      if (((n = Ur[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Ur = null;
  }
  return e;
}
function V0(e, t) {
  do {
    var n = ot;
    try {
      if ((If(), (Ka.current = Rl), Pl)) {
        for (var r = Ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((to = 0),
        (ft = ct = Ke = null),
        (ns = !1),
        (Ps = 0),
        (Kf.current = null),
        n === null || n.return === null)
      ) {
        (dt = 1), (Ts = t), (ot = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = gt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var b = Yh(s);
          if (b !== null) {
            (b.flags &= -257),
              Xh(b, s, a, i, t),
              b.mode & 1 && Gh(i, u, t),
              (t = b),
              (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Gh(i, u, t), Jf();
              break e;
            }
            l = Error(U(426));
          }
        } else if (Ue && a.mode & 1) {
          var P = Yh(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Xh(P, s, a, i, t),
              Nf(Jo(l, a));
            break e;
          }
        }
        (i = l = Jo(l, a)),
          dt !== 4 && (dt = 2),
          os === null ? (os = [i]) : os.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = R0(i, l, t);
              Dh(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (wr === null || !wr.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = $0(i, a, t);
                Dh(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      K0(n);
    } catch (C) {
      (t = C), ot === n && n !== null && (ot = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function H0() {
  var e = $l.current;
  return ($l.current = Rl), e === null ? Rl : e;
}
function Jf() {
  (dt === 0 || dt === 3 || dt === 2) && (dt = 4),
    pt === null || (!(no & 268435455) && !(Ql & 268435455)) || fr(pt, gt);
}
function Ol(e, t) {
  var n = Ce;
  Ce |= 2;
  var r = H0();
  (pt !== e || gt !== t) && ((Vn = null), Kr(e, t));
  do
    try {
      kw();
      break;
    } catch (o) {
      V0(e, o);
    }
  while (!0);
  if ((If(), (Ce = n), ($l.current = r), ot !== null)) throw Error(U(261));
  return (pt = null), (gt = 0), dt;
}
function kw() {
  for (; ot !== null; ) q0(ot);
}
function Ew() {
  for (; ot !== null && !Xx(); ) q0(ot);
}
function q0(e) {
  var t = Y0(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? K0(e) : (ot = t),
    (Kf.current = null);
}
function K0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yw(n, t)), n !== null)) {
        (n.flags &= 32767), (ot = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (dt = 6), (ot = null);
        return;
      }
    } else if (((n = gw(n, t, Ut)), n !== null)) {
      ot = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ot = t;
      return;
    }
    ot = t = e;
  } while (t !== null);
  dt === 0 && (dt = 5);
}
function jr(e, t, n) {
  var r = Ne,
    o = un.transition;
  try {
    (un.transition = null), (Ne = 1), Pw(e, t, n, r);
  } finally {
    (un.transition = o), (Ne = r);
  }
  return null;
}
function Pw(e, t, n, r) {
  do Uo();
  while (hr !== null);
  if (Ce & 6) throw Error(U(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (sb(e, i),
    e === pt && ((ot = pt = null), (gt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xa ||
      ((xa = !0),
      X0(fl, function () {
        return Uo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = un.transition), (un.transition = null);
    var s = Ne;
    Ne = 1;
    var a = Ce;
    (Ce |= 4),
      (Kf.current = null),
      bw(e, n),
      D0(n, e),
      qb(ld),
      (hl = !!ad),
      (ld = ad = null),
      (e.current = n),
      ww(n),
      Qx(),
      (Ce = a),
      (Ne = s),
      (un.transition = i);
  } else e.current = n;
  if (
    (xa && ((xa = !1), (hr = e), (_l = o)),
    (i = e.pendingLanes),
    i === 0 && (wr = null),
    eb(n.stateNode),
    Lt(e, Ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Tl) throw ((Tl = !1), (e = $d), ($d = null), e);
  return (
    _l & 1 && e.tag !== 0 && Uo(),
    (i = e.pendingLanes),
    i & 1 ? (e === Td ? is++ : ((is = 0), (Td = e))) : (is = 0),
    Tr(),
    null
  );
}
function Uo() {
  if (hr !== null) {
    var e = Pg(_l),
      t = un.transition,
      n = Ne;
    try {
      if (((un.transition = null), (Ne = 16 > e ? 16 : e), hr === null))
        var r = !1;
      else {
        if (((e = hr), (hr = null), (_l = 0), Ce & 6)) throw Error(U(331));
        var o = Ce;
        for (Ce |= 4, Q = e.current; Q !== null; ) {
          var i = Q,
            s = i.child;
          if (Q.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Q = u; Q !== null; ) {
                  var c = Q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (Q = p);
                  else
                    for (; Q !== null; ) {
                      c = Q;
                      var f = c.sibling,
                        b = c.return;
                      if ((B0(c), c === u)) {
                        Q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = b), (Q = f);
                        break;
                      }
                      Q = b;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var P = y.sibling;
                    (y.sibling = null), (y = P);
                  } while (y !== null);
                }
              }
              Q = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (Q = s);
          else
            e: for (; Q !== null; ) {
              if (((i = Q), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (Q = m);
                break e;
              }
              Q = i.return;
            }
        }
        var h = e.current;
        for (Q = h; Q !== null; ) {
          s = Q;
          var d = s.child;
          if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (Q = d);
          else
            e: for (s = h; Q !== null; ) {
              if (((a = Q), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl(9, a);
                  }
                } catch (C) {
                  Je(a, a.return, C);
                }
              if (a === s) {
                Q = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (Q = g);
                break e;
              }
              Q = a.return;
            }
        }
        if (
          ((Ce = o), Tr(), Ln && typeof Ln.onPostCommitFiberRoot == "function")
        )
          try {
            Ln.onPostCommitFiberRoot(Wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ne = n), (un.transition = t);
    }
  }
  return !1;
}
function um(e, t, n) {
  (t = Jo(n, t)),
    (t = R0(e, t, 1)),
    (e = br(e, t, 1)),
    (t = Rt()),
    e !== null && (Bs(e, 1, t), Lt(e, t));
}
function Je(e, t, n) {
  if (e.tag === 3) um(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        um(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (wr === null || !wr.has(r)))
        ) {
          (e = Jo(n, e)),
            (e = $0(t, e, 1)),
            (t = br(t, e, 1)),
            (e = Rt()),
            t !== null && (Bs(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pt === e &&
      (gt & n) === n &&
      (dt === 4 || (dt === 3 && (gt & 130023424) === gt && 500 > Ze() - Yf)
        ? Kr(e, 0)
        : (Gf |= n)),
    Lt(e, t);
}
function G0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ua), (ua <<= 1), !(ua & 130023424) && (ua = 4194304))
      : (t = 1));
  var n = Rt();
  (e = Zn(e, t)), e !== null && (Bs(e, t, n), Lt(e, n));
}
function $w(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), G0(e, n);
}
function Tw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  r !== null && r.delete(t), G0(e, n);
}
var Y0;
Y0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Mt.current) Nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Nt = !1), vw(e, t, n);
      Nt = !!(e.flags & 131072);
    }
  else (Nt = !1), Ue && t.flags & 1048576 && Jg(t, wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ya(e, t), (e = t.pendingProps);
      var o = Go(t, Ct.current);
      Wo(t, n), (o = Wf(null, t, r, e, o, n));
      var i = Uf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            It(r) ? ((i = !0), xl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            zf(t),
            (o.updater = Gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            gd(t, r, e, n),
            (t = bd(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ue && i && _f(t), Et(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ya(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ow(r)),
          (e = xn(r, e)),
          o)
        ) {
          case 0:
            t = xd(null, t, r, e, n);
            break e;
          case 1:
            t = Zh(null, t, r, e, n);
            break e;
          case 11:
            t = Qh(null, t, r, e, n);
            break e;
          case 14:
            t = Jh(null, t, r, xn(r.type, e), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : xn(r, o)),
        xd(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : xn(r, o)),
        Zh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((N0(t), e === null)) throw Error(U(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          n0(e, t),
          kl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Jo(Error(U(423)), t)), (t = em(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Jo(Error(U(424)), t)), (t = em(e, t, r, n, o));
            break e;
          } else
            for (
              Ht = xr(t.stateNode.containerInfo.firstChild),
                qt = t,
                Ue = !0,
                Sn = null,
                n = s0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yo(), r === o)) {
            t = er(e, t, n);
            break e;
          }
          Et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        a0(t),
        e === null && hd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ud(r, o) ? (s = null) : i !== null && ud(r, i) && (t.flags |= 32),
        O0(e, t),
        Et(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && hd(t), null;
    case 13:
      return M0(e, t, n);
    case 4:
      return (
        Bf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xo(t, null, r, n)) : Et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : xn(r, o)),
        Qh(e, t, r, o, n)
      );
    case 7:
      return Et(e, t, t.pendingProps, n), t.child;
    case 8:
      return Et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Ae(Sl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Rn(i.value, s)) {
            if (i.children === o.children && !Mt.current) {
              t = er(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Yn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      md(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(U(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  md(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Et(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Wo(t, n),
        (o = dn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = xn(r, t.pendingProps)),
        (o = xn(r.type, o)),
        Jh(e, t, r, o, n)
      );
    case 15:
      return T0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : xn(r, o)),
        Ya(e, t),
        (t.tag = 1),
        It(r) ? ((e = !0), xl(t)) : (e = !1),
        Wo(t, n),
        o0(t, r, o),
        gd(t, r, o, n),
        bd(null, t, r, !0, e, n)
      );
    case 19:
      return I0(e, t, n);
    case 22:
      return _0(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function X0(e, t) {
  return Sg(e, t);
}
function _w(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function an(e, t, n, r) {
  return new _w(e, t, n, r);
}
function Zf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ow(e) {
  if (typeof e == "function") return Zf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yf)) return 11;
    if (e === xf) return 14;
  }
  return 2;
}
function Cr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = an(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ja(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Zf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ro:
        return Gr(n.children, o, i, t);
      case gf:
        (s = 8), (o |= 8);
        break;
      case Dc:
        return (
          (e = an(12, n, t, o | 2)), (e.elementType = Dc), (e.lanes = i), e
        );
      case Wc:
        return (e = an(13, n, t, o)), (e.elementType = Wc), (e.lanes = i), e;
      case Uc:
        return (e = an(19, n, t, o)), (e.elementType = Uc), (e.lanes = i), e;
      case ig:
        return Jl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case rg:
              s = 10;
              break e;
            case og:
              s = 9;
              break e;
            case yf:
              s = 11;
              break e;
            case xf:
              s = 14;
              break e;
            case ur:
              (s = 16), (r = null);
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = an(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Gr(e, t, n, r) {
  return (e = an(7, e, r, t)), (e.lanes = n), e;
}
function Jl(e, t, n, r) {
  return (
    (e = an(22, e, r, t)),
    (e.elementType = ig),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Cc(e, t, n) {
  return (e = an(6, e, null, t)), (e.lanes = n), e;
}
function kc(e, t, n) {
  return (
    (t = an(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = oc(0)),
    (this.expirationTimes = oc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ep(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new Nw(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = an(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zf(i),
    e
  );
}
function Mw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Po,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Q0(e) {
  if (!e) return Er;
  e = e._reactInternals;
  e: {
    if (lo(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (It(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (It(n)) return Xg(e, n, t);
  }
  return t;
}
function J0(e, t, n, r, o, i, s, a, l) {
  return (
    (e = ep(n, r, !0, e, o, i, s, a, l)),
    (e.context = Q0(null)),
    (n = e.current),
    (r = Rt()),
    (o = Sr(n)),
    (i = Yn(r, o)),
    (i.callback = t ?? null),
    br(n, i, o),
    (e.current.lanes = o),
    Bs(e, o, r),
    Lt(e, r),
    e
  );
}
function Zl(e, t, n, r) {
  var o = t.current,
    i = Rt(),
    s = Sr(o);
  return (
    (n = Q0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = br(o, t, s)),
    e !== null && (Pn(e, o, s, i), qa(e, o, s)),
    s
  );
}
function Nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tp(e, t) {
  cm(e, t), (e = e.alternate) && cm(e, t);
}
function Iw() {
  return null;
}
var Z0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function np(e) {
  this._internalRoot = e;
}
eu.prototype.render = np.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  Zl(e, t, null, null);
};
eu.prototype.unmount = np.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ro(function () {
      Zl(null, e, null, null);
    }),
      (t[Jn] = null);
  }
};
function eu(e) {
  this._internalRoot = e;
}
eu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dr.length && t !== 0 && t < dr[n].priority; n++);
    dr.splice(n, 0, e), n === 0 && Og(e);
  }
};
function rp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function dm() {}
function Lw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Nl(s);
        i.call(u);
      };
    }
    var s = J0(t, r, e, 0, null, !1, !1, "", dm);
    return (
      (e._reactRootContainer = s),
      (e[Jn] = s.current),
      ws(e.nodeType === 8 ? e.parentNode : e),
      ro(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Nl(l);
      a.call(u);
    };
  }
  var l = ep(e, 0, !1, null, null, !1, !1, "", dm);
  return (
    (e._reactRootContainer = l),
    (e[Jn] = l.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    ro(function () {
      Zl(t, l, n, r);
    }),
    l
  );
}
function nu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Nl(s);
        a.call(l);
      };
    }
    Zl(t, s, e, o);
  } else s = Lw(n, t, e, o, r);
  return Nl(s);
}
Rg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hi(t.pendingLanes);
        n !== 0 &&
          (Sf(t, n | 1), Lt(t, Ze()), !(Ce & 6) && ((Zo = Ze() + 500), Tr()));
      }
      break;
    case 13:
      ro(function () {
        var r = Zn(e, 1);
        if (r !== null) {
          var o = Rt();
          Pn(r, e, 1, o);
        }
      }),
        tp(e, 1);
  }
};
Cf = function (e) {
  if (e.tag === 13) {
    var t = Zn(e, 134217728);
    if (t !== null) {
      var n = Rt();
      Pn(t, e, 134217728, n);
    }
    tp(e, 134217728);
  }
};
$g = function (e) {
  if (e.tag === 13) {
    var t = Sr(e),
      n = Zn(e, t);
    if (n !== null) {
      var r = Rt();
      Pn(n, e, t, r);
    }
    tp(e, t);
  }
};
Tg = function () {
  return Ne;
};
_g = function (e, t) {
  var n = Ne;
  try {
    return (Ne = e), t();
  } finally {
    Ne = n;
  }
};
Zc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ql(r);
            if (!o) throw Error(U(90));
            ag(r), qc(r, o);
          }
        }
      }
      break;
    case "textarea":
      ug(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bo(e, !!n.multiple, t, !1);
  }
};
vg = Xf;
gg = ro;
var Aw = { usingClientEntryPoint: !1, Events: [Fs, Oo, ql, hg, mg, Xf] },
  _i = {
    findFiberByHostInstance: Wr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  zw = {
    bundleType: _i.bundleType,
    version: _i.version,
    rendererPackageName: _i.rendererPackageName,
    rendererConfig: _i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _i.findFiberByHostInstance || Iw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ba.isDisabled && ba.supportsFiber)
    try {
      (Wl = ba.inject(zw)), (Ln = ba);
    } catch {}
}
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Aw;
Qt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rp(t)) throw Error(U(200));
  return Mw(e, t, null, n);
};
Qt.createRoot = function (e, t) {
  if (!rp(e)) throw Error(U(299));
  var n = !1,
    r = "",
    o = Z0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ep(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jn] = t.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    new np(t)
  );
};
Qt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return (e = bg(t)), (e = e === null ? null : e.stateNode), e;
};
Qt.flushSync = function (e) {
  return ro(e);
};
Qt.hydrate = function (e, t, n) {
  if (!tu(t)) throw Error(U(200));
  return nu(null, e, t, !0, n);
};
Qt.hydrateRoot = function (e, t, n) {
  if (!rp(e)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Z0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = J0(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Jn] = t.current),
    ws(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new eu(t);
};
Qt.render = function (e, t, n) {
  if (!tu(t)) throw Error(U(200));
  return nu(null, e, t, !1, n);
};
Qt.unmountComponentAtNode = function (e) {
  if (!tu(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (ro(function () {
        nu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jn] = null);
        });
      }),
      !0)
    : !1;
};
Qt.unstable_batchedUpdates = Xf;
Qt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!tu(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return nu(e, t, n, !1, r);
};
Qt.version = "18.2.0-next-9e3b772b8-20220608";
function ey() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey);
    } catch (e) {
      console.error(e);
    }
}
ey(), (Jv.exports = Qt);
var op = Jv.exports;
const wa = uf(op);
var fm = op;
(jc.createRoot = fm.createRoot), (jc.hydrateRoot = fm.hydrateRoot);
function v() {
  return (
    (v = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    v.apply(this, arguments)
  );
}
var ty = { exports: {} },
  Bw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  jw = Bw,
  Fw = jw;
function ny() {}
function ry() {}
ry.resetWarningCache = ny;
var Dw = function () {
  function e(r, o, i, s, a, l) {
    if (l !== Fw) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ry,
    resetWarningCache: ny,
  };
  return (n.PropTypes = n), n;
};
ty.exports = Dw();
var Ww = ty.exports;
const Oi = uf(Ww);
function ip(e, t) {
  const n = v({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = v({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
              ? (n[r] = i)
              : ((n[r] = v({}, i)),
                Object.keys(o).forEach((s) => {
                  n[r][s] = ip(o[s], i[s]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Uw(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : ip(t.components[n].defaultProps, r);
}
function K(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function oy(e) {
  if (!qn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = oy(e[n]);
    }),
    t
  );
}
function $t(e, t, n = { clone: !0 }) {
  const r = n.clone ? v({}, e) : e;
  return (
    qn(e) &&
      qn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (qn(t[o]) && o in e && qn(e[o])
            ? (r[o] = $t(e[o], t[o], n))
            : n.clone
              ? (r[o] = qn(t[o]) ? oy(t[o]) : t[o])
              : (r[o] = t[o]));
      }),
    r
  );
}
const Vw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $t, isPlainObject: qn },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Hw = ["values", "unit", "step"],
  qw = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => v({}, n, { [r.key]: r.val }), {})
    );
  };
function iy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = K(e, Hw),
    i = qw(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, b) {
    const w = s.indexOf(b);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : b) - r / 100}${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function p(f) {
    const b = s.indexOf(f);
    return b === 0
      ? a(s[1])
      : b === s.length - 1
        ? l(s[b])
        : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return v(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: p,
      unit: n,
    },
    o,
  );
}
const Kw = { borderRadius: 4 },
  Gw = Kw;
function ss(e, t) {
  return t ? $t(e, t, { clone: !1 }) : e;
}
const sp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  pm = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${sp[e]}px)`,
  };
function Bt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || pm;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || pm;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || sp).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function sy(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function ay(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Yw(e, ...t) {
  const n = sy(e),
    r = [n, ...t].reduce((o, i) => $t(o, i), {});
  return ay(Object.keys(n), r);
}
function Xw(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function Yr({ values: e, breakpoints: t, base: n }) {
  const r = n || Xw(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
          ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
          : (s[a] = e),
      s
    ),
    {},
  );
}
function oo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Qw = Object.freeze(
  Object.defineProperty({ __proto__: null, default: oo }, Symbol.toStringTag, {
    value: "Module",
  }),
);
function X(e) {
  if (typeof e != "string") throw new Error(oo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Jw = Object.freeze(
  Object.defineProperty({ __proto__: null, default: X }, Symbol.toStringTag, {
    value: "Module",
  }),
);
function ru(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ml(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = ru(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function et(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = ru(l, r) || {};
      return Bt(s, a, (p) => {
        let f = Ml(u, o, p);
        return (
          p === f &&
            typeof p == "string" &&
            (f = Ml(u, o, `${t}${p === "default" ? "" : X(p)}`, p)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function Zw(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const e2 = { m: "margin", p: "padding" },
  t2 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  hm = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  n2 = Zw((e) => {
    if (e.length > 2)
      if (hm[e]) e = hm[e];
      else return [e];
    const [t, n] = e.split(""),
      r = e2[t],
      o = t2[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  ap = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  lp = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...ap, ...lp];
function Ws(e, t, n, r) {
  var o;
  const i = (o = ru(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
      ? (s) => (typeof s == "string" ? s : i[s])
      : typeof i == "function"
        ? i
        : () => {};
}
function up(e) {
  return Ws(e, "spacing", 8);
}
function io(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function r2(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = io(t, n)), r), {});
}
function o2(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = n2(n),
    i = r2(o, r),
    s = e[n];
  return Bt(e, s, i);
}
function ly(e, t) {
  const n = up(e.theme);
  return Object.keys(e)
    .map((r) => o2(e, t, r, n))
    .reduce(ss, {});
}
function Xe(e) {
  return ly(e, ap);
}
Xe.propTypes = {};
Xe.filterProps = ap;
function Qe(e) {
  return ly(e, lp);
}
Qe.propTypes = {};
Qe.filterProps = lp;
function i2(e = 8) {
  if (e.mui) return e;
  const t = up({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function ou(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {},
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ss(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function on(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function vn(e, t) {
  return et({ prop: e, themeKey: "borders", transform: t });
}
const s2 = vn("border", on),
  a2 = vn("borderTop", on),
  l2 = vn("borderRight", on),
  u2 = vn("borderBottom", on),
  c2 = vn("borderLeft", on),
  d2 = vn("borderColor"),
  f2 = vn("borderTopColor"),
  p2 = vn("borderRightColor"),
  h2 = vn("borderBottomColor"),
  m2 = vn("borderLeftColor"),
  v2 = vn("outline", on),
  g2 = vn("outlineColor"),
  iu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ws(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: io(t, r) });
      return Bt(e, e.borderRadius, n);
    }
    return null;
  };
iu.propTypes = {};
iu.filterProps = ["borderRadius"];
ou(s2, a2, l2, u2, c2, d2, f2, p2, h2, m2, iu, v2, g2);
const su = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ws(e.theme, "spacing", 8),
      n = (r) => ({ gap: io(t, r) });
    return Bt(e, e.gap, n);
  }
  return null;
};
su.propTypes = {};
su.filterProps = ["gap"];
const au = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ws(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: io(t, r) });
    return Bt(e, e.columnGap, n);
  }
  return null;
};
au.propTypes = {};
au.filterProps = ["columnGap"];
const lu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ws(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: io(t, r) });
    return Bt(e, e.rowGap, n);
  }
  return null;
};
lu.propTypes = {};
lu.filterProps = ["rowGap"];
const y2 = et({ prop: "gridColumn" }),
  x2 = et({ prop: "gridRow" }),
  b2 = et({ prop: "gridAutoFlow" }),
  w2 = et({ prop: "gridAutoColumns" }),
  S2 = et({ prop: "gridAutoRows" }),
  C2 = et({ prop: "gridTemplateColumns" }),
  k2 = et({ prop: "gridTemplateRows" }),
  E2 = et({ prop: "gridTemplateAreas" }),
  P2 = et({ prop: "gridArea" });
ou(su, au, lu, y2, x2, b2, w2, S2, C2, k2, E2, P2);
function Vo(e, t) {
  return t === "grey" ? t : e;
}
const R2 = et({ prop: "color", themeKey: "palette", transform: Vo }),
  $2 = et({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Vo,
  }),
  T2 = et({ prop: "backgroundColor", themeKey: "palette", transform: Vo });
ou(R2, $2, T2);
function Vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _2 = et({ prop: "width", transform: Vt }),
  cp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || sp[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Vt(n) };
      };
      return Bt(e, e.maxWidth, t);
    }
    return null;
  };
cp.filterProps = ["maxWidth"];
const O2 = et({ prop: "minWidth", transform: Vt }),
  N2 = et({ prop: "height", transform: Vt }),
  M2 = et({ prop: "maxHeight", transform: Vt }),
  I2 = et({ prop: "minHeight", transform: Vt });
et({ prop: "size", cssProperty: "width", transform: Vt });
et({ prop: "size", cssProperty: "height", transform: Vt });
const L2 = et({ prop: "boxSizing" });
ou(_2, cp, O2, N2, M2, I2, L2);
const A2 = {
    border: { themeKey: "borders", transform: on },
    borderTop: { themeKey: "borders", transform: on },
    borderRight: { themeKey: "borders", transform: on },
    borderBottom: { themeKey: "borders", transform: on },
    borderLeft: { themeKey: "borders", transform: on },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: on },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: iu },
    color: { themeKey: "palette", transform: Vo },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Vo,
    },
    backgroundColor: { themeKey: "palette", transform: Vo },
    p: { style: Qe },
    pt: { style: Qe },
    pr: { style: Qe },
    pb: { style: Qe },
    pl: { style: Qe },
    px: { style: Qe },
    py: { style: Qe },
    padding: { style: Qe },
    paddingTop: { style: Qe },
    paddingRight: { style: Qe },
    paddingBottom: { style: Qe },
    paddingLeft: { style: Qe },
    paddingX: { style: Qe },
    paddingY: { style: Qe },
    paddingInline: { style: Qe },
    paddingInlineStart: { style: Qe },
    paddingInlineEnd: { style: Qe },
    paddingBlock: { style: Qe },
    paddingBlockStart: { style: Qe },
    paddingBlockEnd: { style: Qe },
    m: { style: Xe },
    mt: { style: Xe },
    mr: { style: Xe },
    mb: { style: Xe },
    ml: { style: Xe },
    mx: { style: Xe },
    my: { style: Xe },
    margin: { style: Xe },
    marginTop: { style: Xe },
    marginRight: { style: Xe },
    marginBottom: { style: Xe },
    marginLeft: { style: Xe },
    marginX: { style: Xe },
    marginY: { style: Xe },
    marginInline: { style: Xe },
    marginInlineStart: { style: Xe },
    marginInlineEnd: { style: Xe },
    marginBlock: { style: Xe },
    marginBlockStart: { style: Xe },
    marginBlockEnd: { style: Xe },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: su },
    rowGap: { style: lu },
    columnGap: { style: au },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Vt },
    maxWidth: { style: cp },
    minWidth: { transform: Vt },
    height: { transform: Vt },
    maxHeight: { transform: Vt },
    minHeight: { transform: Vt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Us = A2;
function z2(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function B2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uy() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: p } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = ru(o, u) || {};
    return p
      ? p(s)
      : Bt(s, r, (w) => {
          let y = Ml(f, c, w);
          return (
            w === y &&
              typeof w == "string" &&
              (y = Ml(f, c, `${n}${w === "default" ? "" : X(w)}`, w)),
            l === !1 ? y : { [l]: y }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Us;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = sy(i.breakpoints),
        p = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((b) => {
          const w = B2(u[b], i);
          if (w != null)
            if (typeof w == "object")
              if (s[b]) f = ss(f, e(b, w, i, s));
              else {
                const y = Bt({ theme: i }, w, (P) => ({ [b]: P }));
                z2(y, w) ? (f[b] = t({ sx: w, theme: i })) : (f = ss(f, y));
              }
            else f = ss(f, e(b, w, i, s));
        }),
        ay(p, f)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const ci = uy();
ci.filterProps = ["sx"];
function cy(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
      ? t
      : {};
}
const j2 = ["breakpoints", "palette", "spacing", "shape"];
function Vs(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = K(e, j2),
    a = iy(n),
    l = i2(o);
  let u = $t(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: v({ mode: "light" }, r),
      spacing: l,
      shape: v({}, Gw, i),
    },
    s,
  );
  return (
    (u.applyStyles = cy),
    (u = t.reduce((c, p) => $t(c, p), u)),
    (u.unstable_sxConfig = v({}, Us, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return ci({ sx: p, theme: this });
    }),
    u
  );
}
const F2 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Vs,
      private_createBreakpoints: iy,
      unstable_applyStyles: cy,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function dy(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var D2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  W2 = dy(function (e) {
    return (
      D2.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function U2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function V2(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var H2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(V2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = U2(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  wt = "-ms-",
  Il = "-moz-",
  Pe = "-webkit-",
  fy = "comm",
  dp = "rule",
  fp = "decl",
  q2 = "@import",
  py = "@keyframes",
  K2 = "@layer",
  G2 = Math.abs,
  uu = String.fromCharCode,
  Y2 = Object.assign;
function X2(e, t) {
  return vt(e, 0) ^ 45
    ? (((((((t << 2) ^ vt(e, 0)) << 2) ^ vt(e, 1)) << 2) ^ vt(e, 2)) << 2) ^
        vt(e, 3)
    : 0;
}
function hy(e) {
  return e.trim();
}
function Q2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, n) {
  return e.replace(t, n);
}
function Nd(e, t) {
  return e.indexOf(t);
}
function vt(e, t) {
  return e.charCodeAt(t) | 0;
}
function _s(e, t, n) {
  return e.slice(t, n);
}
function On(e) {
  return e.length;
}
function pp(e) {
  return e.length;
}
function Sa(e, t) {
  return t.push(e), e;
}
function J2(e, t) {
  return e.map(t).join("");
}
var cu = 1,
  ei = 1,
  my = 0,
  jt = 0,
  rt = 0,
  di = "";
function du(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: cu,
    column: ei,
    length: s,
    return: "",
  };
}
function Ni(e, t) {
  return Y2(du("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Z2() {
  return rt;
}
function eS() {
  return (
    (rt = jt > 0 ? vt(di, --jt) : 0), ei--, rt === 10 && ((ei = 1), cu--), rt
  );
}
function Kt() {
  return (
    (rt = jt < my ? vt(di, jt++) : 0), ei++, rt === 10 && ((ei = 1), cu++), rt
  );
}
function zn() {
  return vt(di, jt);
}
function Za() {
  return jt;
}
function Hs(e, t) {
  return _s(di, e, t);
}
function Os(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vy(e) {
  return (cu = ei = 1), (my = On((di = e))), (jt = 0), [];
}
function gy(e) {
  return (di = ""), e;
}
function el(e) {
  return hy(Hs(jt - 1, Md(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tS(e) {
  for (; (rt = zn()) && rt < 33; ) Kt();
  return Os(e) > 2 || Os(rt) > 3 ? "" : " ";
}
function nS(e, t) {
  for (
    ;
    --t &&
    Kt() &&
    !(rt < 48 || rt > 102 || (rt > 57 && rt < 65) || (rt > 70 && rt < 97));

  );
  return Hs(e, Za() + (t < 6 && zn() == 32 && Kt() == 32));
}
function Md(e) {
  for (; Kt(); )
    switch (rt) {
      case e:
        return jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Md(rt);
        break;
      case 40:
        e === 41 && Md(e);
        break;
      case 92:
        Kt();
        break;
    }
  return jt;
}
function rS(e, t) {
  for (; Kt() && e + rt !== 57; ) if (e + rt === 84 && zn() === 47) break;
  return "/*" + Hs(t, jt - 1) + "*" + uu(e === 47 ? e : Kt());
}
function oS(e) {
  for (; !Os(zn()); ) Kt();
  return Hs(e, jt);
}
function iS(e) {
  return gy(tl("", null, null, null, [""], (e = vy(e)), 0, [0], e));
}
function tl(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      p = s,
      f = 0,
      b = 0,
      w = 0,
      y = 1,
      P = 1,
      m = 1,
      h = 0,
      d = "",
      g = o,
      C = i,
      E = r,
      k = d;
    P;

  )
    switch (((w = h), (h = Kt()))) {
      case 40:
        if (w != 108 && vt(k, p - 1) == 58) {
          Nd((k += Re(el(h), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += el(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += tS(w);
        break;
      case 92:
        k += nS(Za() - 1, 7);
        continue;
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            Sa(sS(rS(Kt(), Za()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        a[u++] = On(k) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            P = 0;
          case 59 + c:
            m == -1 && (k = Re(k, /\f/g, "")),
              b > 0 &&
                On(k) - p &&
                Sa(
                  b > 32
                    ? vm(k + ";", r, n, p - 1)
                    : vm(Re(k, " ", "") + ";", r, n, p - 2),
                  l,
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (Sa((E = mm(k, t, n, u, c, o, a, d, (g = []), (C = []), p)), i),
              h === 123)
            )
              if (c === 0) tl(k, t, E, E, g, i, p, a, C);
              else
                switch (f === 99 && vt(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tl(
                      e,
                      E,
                      E,
                      r && Sa(mm(e, E, E, 0, 0, o, a, d, o, (g = []), p), C),
                      o,
                      C,
                      p,
                      a,
                      r ? g : C,
                    );
                    break;
                  default:
                    tl(k, E, E, E, [""], C, 0, a, C);
                }
        }
        (u = c = b = 0), (y = m = 1), (d = k = ""), (p = s);
        break;
      case 58:
        (p = 1 + On(k)), (b = w);
      default:
        if (y < 1) {
          if (h == 123) --y;
          else if (h == 125 && y++ == 0 && eS() == 125) continue;
        }
        switch (((k += uu(h)), h * y)) {
          case 38:
            m = c > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (a[u++] = (On(k) - 1) * m), (m = 1);
            break;
          case 64:
            zn() === 45 && (k += el(Kt())),
              (f = zn()),
              (c = p = On((d = k += oS(Za())))),
              h++;
            break;
          case 45:
            w === 45 && On(k) == 2 && (y = 0);
        }
    }
  return i;
}
function mm(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var p = o - 1, f = o === 0 ? i : [""], b = pp(f), w = 0, y = 0, P = 0;
    w < r;
    ++w
  )
    for (var m = 0, h = _s(e, p + 1, (p = G2((y = s[w])))), d = e; m < b; ++m)
      (d = hy(y > 0 ? f[m] + " " + h : Re(h, /&\f/g, f[m]))) && (l[P++] = d);
  return du(e, t, n, o === 0 ? dp : a, l, u, c);
}
function sS(e, t, n) {
  return du(e, t, n, fy, uu(Z2()), _s(e, 2, -2), 0);
}
function vm(e, t, n, r) {
  return du(e, t, n, fp, _s(e, 0, r), _s(e, r + 1, -1), r);
}
function Ho(e, t) {
  for (var n = "", r = pp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function aS(e, t, n, r) {
  switch (e.type) {
    case K2:
      if (e.children.length) break;
    case q2:
    case fp:
      return (e.return = e.return || e.value);
    case fy:
      return "";
    case py:
      return (e.return = e.value + "{" + Ho(e.children, r) + "}");
    case dp:
      e.value = e.props.join(",");
  }
  return On((n = Ho(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function lS(e) {
  var t = pp(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function uS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var cS = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = zn()), o === 38 && i === 12 && (n[r] = 1), !Os(i);

    )
      Kt();
    return Hs(t, jt);
  },
  dS = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Os(o)) {
        case 0:
          o === 38 && zn() === 12 && (n[r] = 1), (t[r] += cS(jt - 1, n, r));
          break;
        case 2:
          t[r] += el(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = zn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += uu(o);
      }
    while ((o = Kt()));
    return t;
  },
  fS = function (t, n) {
    return gy(dS(vy(t), n));
  },
  gm = new WeakMap(),
  pS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gm.get(r)) &&
        !o
      ) {
        gm.set(t, !0);
        for (
          var i = [], s = fS(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  hS = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function yy(e, t) {
  switch (X2(e, t)) {
    case 5103:
      return Pe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Pe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pe + e + Il + e + wt + e + e;
    case 6828:
    case 4268:
      return Pe + e + wt + e + e;
    case 6165:
      return Pe + e + wt + "flex-" + e + e;
    case 5187:
      return (
        Pe + e + Re(e, /(\w+).+(:[^]+)/, Pe + "box-$1$2" + wt + "flex-$1$2") + e
      );
    case 5443:
      return Pe + e + wt + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Pe +
        e +
        wt +
        "flex-line-pack" +
        Re(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Pe + e + wt + Re(e, "shrink", "negative") + e;
    case 5292:
      return Pe + e + wt + Re(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Pe +
        "box-" +
        Re(e, "-grow", "") +
        Pe +
        e +
        wt +
        Re(e, "grow", "positive") +
        e
      );
    case 4554:
      return Pe + Re(e, /([^-])(transform)/g, "$1" + Pe + "$2") + e;
    case 6187:
      return (
        Re(
          Re(Re(e, /(zoom-|grab)/, Pe + "$1"), /(image-set)/, Pe + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Pe + "$1$`$1");
    case 4968:
      return (
        Re(
          Re(e, /(.+:)(flex-)?(.*)/, Pe + "box-pack:$3" + wt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Pe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Pe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (On(e) - 1 - t > 6)
        switch (vt(e, t + 1)) {
          case 109:
            if (vt(e, t + 4) !== 45) break;
          case 102:
            return (
              Re(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Pe +
                  "$2-$3$1" +
                  Il +
                  (vt(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Nd(e, "stretch")
              ? yy(Re(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (vt(e, t + 1) !== 115) break;
    case 6444:
      switch (vt(e, On(e) - 3 - (~Nd(e, "!important") && 10))) {
        case 107:
          return Re(e, ":", ":" + Pe) + e;
        case 101:
          return (
            Re(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Pe +
                (vt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Pe +
                "$2$3$1" +
                wt +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (vt(e, t + 11)) {
        case 114:
          return Pe + e + wt + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Pe + e + wt + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Pe + e + wt + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Pe + e + wt + e + e;
  }
  return e;
}
var mS = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case fp:
          t.return = yy(t.value, t.length);
          break;
        case py:
          return Ho([Ni(t, { value: Re(t.value, "@", "@" + Pe) })], o);
        case dp:
          if (t.length)
            return J2(t.props, function (i) {
              switch (Q2(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ho(
                    [Ni(t, { props: [Re(i, /:(read-\w+)/, ":" + Il + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return Ho(
                    [
                      Ni(t, {
                        props: [Re(i, /:(plac\w+)/, ":" + Pe + "input-$1")],
                      }),
                      Ni(t, { props: [Re(i, /:(plac\w+)/, ":" + Il + "$1")] }),
                      Ni(t, { props: [Re(i, /:(plac\w+)/, wt + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  vS = [mS],
  xy = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (y) {
        var P = y.getAttribute("data-emotion");
        P.indexOf(" ") !== -1 &&
          (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || vS,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (y) {
          for (
            var P = y.getAttribute("data-emotion").split(" "), m = 1;
            m < P.length;
            m++
          )
            i[P[m]] = !0;
          a.push(y);
        },
      );
    var l,
      u = [pS, hS];
    {
      var c,
        p = [
          aS,
          uS(function (y) {
            c.insert(y);
          }),
        ],
        f = lS(u.concat(o, p)),
        b = function (P) {
          return Ho(iS(P), f);
        };
      l = function (P, m, h, d) {
        (c = h),
          b(P ? P + "{" + m.styles + "}" : m.styles),
          d && (w.inserted[m.name] = !0);
      };
    }
    var w = {
      key: n,
      sheet: new H2({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return w.sheet.hydrate(a), w;
  },
  by = { exports: {} },
  Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ht = typeof Symbol == "function" && Symbol.for,
  hp = ht ? Symbol.for("react.element") : 60103,
  mp = ht ? Symbol.for("react.portal") : 60106,
  fu = ht ? Symbol.for("react.fragment") : 60107,
  pu = ht ? Symbol.for("react.strict_mode") : 60108,
  hu = ht ? Symbol.for("react.profiler") : 60114,
  mu = ht ? Symbol.for("react.provider") : 60109,
  vu = ht ? Symbol.for("react.context") : 60110,
  vp = ht ? Symbol.for("react.async_mode") : 60111,
  gu = ht ? Symbol.for("react.concurrent_mode") : 60111,
  yu = ht ? Symbol.for("react.forward_ref") : 60112,
  xu = ht ? Symbol.for("react.suspense") : 60113,
  gS = ht ? Symbol.for("react.suspense_list") : 60120,
  bu = ht ? Symbol.for("react.memo") : 60115,
  wu = ht ? Symbol.for("react.lazy") : 60116,
  yS = ht ? Symbol.for("react.block") : 60121,
  xS = ht ? Symbol.for("react.fundamental") : 60117,
  bS = ht ? Symbol.for("react.responder") : 60118,
  wS = ht ? Symbol.for("react.scope") : 60119;
function Zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hp:
        switch (((e = e.type), e)) {
          case vp:
          case gu:
          case fu:
          case hu:
          case pu:
          case xu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case vu:
              case yu:
              case wu:
              case bu:
              case mu:
                return e;
              default:
                return t;
            }
        }
      case mp:
        return t;
    }
  }
}
function wy(e) {
  return Zt(e) === gu;
}
Me.AsyncMode = vp;
Me.ConcurrentMode = gu;
Me.ContextConsumer = vu;
Me.ContextProvider = mu;
Me.Element = hp;
Me.ForwardRef = yu;
Me.Fragment = fu;
Me.Lazy = wu;
Me.Memo = bu;
Me.Portal = mp;
Me.Profiler = hu;
Me.StrictMode = pu;
Me.Suspense = xu;
Me.isAsyncMode = function (e) {
  return wy(e) || Zt(e) === vp;
};
Me.isConcurrentMode = wy;
Me.isContextConsumer = function (e) {
  return Zt(e) === vu;
};
Me.isContextProvider = function (e) {
  return Zt(e) === mu;
};
Me.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === hp;
};
Me.isForwardRef = function (e) {
  return Zt(e) === yu;
};
Me.isFragment = function (e) {
  return Zt(e) === fu;
};
Me.isLazy = function (e) {
  return Zt(e) === wu;
};
Me.isMemo = function (e) {
  return Zt(e) === bu;
};
Me.isPortal = function (e) {
  return Zt(e) === mp;
};
Me.isProfiler = function (e) {
  return Zt(e) === hu;
};
Me.isStrictMode = function (e) {
  return Zt(e) === pu;
};
Me.isSuspense = function (e) {
  return Zt(e) === xu;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === fu ||
    e === gu ||
    e === hu ||
    e === pu ||
    e === xu ||
    e === gS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === wu ||
        e.$$typeof === bu ||
        e.$$typeof === mu ||
        e.$$typeof === vu ||
        e.$$typeof === yu ||
        e.$$typeof === xS ||
        e.$$typeof === bS ||
        e.$$typeof === wS ||
        e.$$typeof === yS))
  );
};
Me.typeOf = Zt;
by.exports = Me;
var SS = by.exports,
  Sy = SS,
  CS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  kS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Cy = {};
Cy[Sy.ForwardRef] = CS;
Cy[Sy.Memo] = kS;
var ES = !0;
function PS(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var ky = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || ES === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Ey = function (t, n, r) {
    ky(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function RS(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var $S = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  TS = /[A-Z]|^ms/g,
  _S = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Py = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ym = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ec = dy(function (e) {
    return Py(e) ? e : e.replace(TS, "-$&").toLowerCase();
  }),
  xm = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(_S, function (r, o, i) {
            return (Nn = { name: o, styles: i, next: Nn }), o;
          });
    }
    return $S[t] !== 1 && !Py(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Ns(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Nn = { name: n.name, styles: n.styles, next: Nn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Nn = { name: r.name, styles: r.styles, next: Nn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return OS(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Nn,
          s = n(e);
        return (Nn = i), Ns(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function OS(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Ns(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : ym(s) && (r += Ec(i) + ":" + xm(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          ym(s[a]) && (r += Ec(i) + ":" + xm(i, s[a]) + ";");
      else {
        var l = Ns(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ec(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var bm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Nn,
  gp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Nn = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Ns(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Ns(r, n, t[a])), o && (i += s[a]);
    bm.lastIndex = 0;
    for (var l = "", u; (u = bm.exec(i)) !== null; ) l += "-" + u[1];
    var c = RS(i) + l;
    return { name: c, styles: i, next: Nn };
  },
  NS = function (t) {
    return t();
  },
  Ry = Bc.useInsertionEffect ? Bc.useInsertionEffect : !1,
  MS = Ry || NS,
  wm = Ry || x.useLayoutEffect,
  $y = x.createContext(typeof HTMLElement < "u" ? xy({ key: "css" }) : null),
  IS = $y.Provider,
  Ty = function (t) {
    return x.forwardRef(function (n, r) {
      var o = x.useContext($y);
      return t(n, o, r);
    });
  },
  qs = x.createContext({}),
  Pc = { exports: {} },
  Sm;
function _y() {
  return (
    Sm ||
      ((Sm = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Pc)),
    Pc.exports
  );
}
_y();
var LS = Ty(function (e, t) {
  var n = e.styles,
    r = gp([n], void 0, x.useContext(qs)),
    o = x.useRef();
  return (
    wm(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]',
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t],
    ),
    wm(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && Ey(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name],
    ),
    null
  );
});
function Oy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return gp(t);
}
var Su = function () {
    var t = Oy.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  AS = W2,
  zS = function (t) {
    return t !== "theme";
  },
  Cm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? AS : zS;
  },
  km = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  BS = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      ky(n, r, o),
      MS(function () {
        return Ey(n, r, o);
      }),
      null
    );
  },
  jS = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = km(t, n, r),
      l = a || Cm(o),
      u = !l("as");
    return function () {
      var c = arguments,
        p =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && p.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        p.push.apply(p, c);
      else {
        p.push(c[0][0]);
        for (var f = c.length, b = 1; b < f; b++) p.push(c[b], c[0][b]);
      }
      var w = Ty(function (y, P, m) {
        var h = (u && y.as) || o,
          d = "",
          g = [],
          C = y;
        if (y.theme == null) {
          C = {};
          for (var E in y) C[E] = y[E];
          C.theme = x.useContext(qs);
        }
        typeof y.className == "string"
          ? (d = PS(P.registered, g, y.className))
          : y.className != null && (d = y.className + " ");
        var k = gp(p.concat(g), P.registered, C);
        (d += P.key + "-" + k.name), s !== void 0 && (d += " " + s);
        var $ = u && a === void 0 ? Cm(h) : l,
          _ = {};
        for (var T in y) (u && T === "as") || ($(T) && (_[T] = y[T]));
        return (
          (_.className = d),
          (_.ref = m),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(BS, {
              cache: P,
              serialized: k,
              isStringTag: typeof h == "string",
            }),
            x.createElement(h, _),
          )
        );
      });
      return (
        (w.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (w.defaultProps = t.defaultProps),
        (w.__emotion_real = w),
        (w.__emotion_base = o),
        (w.__emotion_styles = p),
        (w.__emotion_forwardProp = a),
        Object.defineProperty(w, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (w.withComponent = function (y, P) {
          return e(y, v({}, n, P, { shouldForwardProp: km(w, P, !0) })).apply(
            void 0,
            p,
          );
        }),
        w
      );
    };
  },
  FS = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Id = jS.bind();
FS.forEach(function (e) {
  Id[e] = Id(e);
});
let Ld;
typeof document == "object" && (Ld = xy({ key: "css", prepend: !0 }));
function DS(e) {
  const { injectFirst: t, children: n } = e;
  return t && Ld ? S.jsx(IS, { value: Ld, children: n }) : n;
}
function WS(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ny(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(WS(o) ? n : o) : t;
  return S.jsx(LS, { styles: r });
}
function yp(e, t) {
  return Id(e, t);
}
const My = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  US = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Ny,
        StyledEngineProvider: DS,
        ThemeContext: qs,
        css: Oy,
        default: yp,
        internal_processStyles: My,
        keyframes: Su,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function VS(e) {
  return Object.keys(e).length === 0;
}
function Iy(e = null) {
  const t = x.useContext(qs);
  return !t || VS(t) ? e : t;
}
const HS = Vs();
function Cu(e = HS) {
  return Iy(e);
}
function Ly({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Cu(n);
  return r && (o = o[r] || o), Uw({ theme: o, name: t, props: e });
}
const qS = ["sx"],
  KS = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Us;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Ks(e) {
  const { sx: t } = e,
    n = K(e, qS),
    { systemProps: r, otherProps: o } = KS(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
        ? (i = (...s) => {
            const a = t(...s);
            return qn(a) ? v({}, r, a) : r;
          })
        : (i = v({}, r, t)),
    v({}, o, { sx: i })
  );
}
const GS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: ci,
        extendSxProp: Ks,
        unstable_createStyleFunctionSx: uy,
        unstable_defaultSxConfig: Us,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Em = (e) => e,
  YS = () => {
    let e = Em;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Em;
      },
    };
  },
  XS = YS(),
  xp = XS,
  Ay = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function fe(e, t, n = "Mui") {
  const r = Ay[t];
  return r ? `${n}-${r}` : `${xp.generate(e)}-${t}`;
}
function QS(e, t) {
  return v(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t,
  );
}
var tt = {},
  zy = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(zy);
var fi = zy.exports;
const JS = nr(Qw);
function So(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const ZS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: So },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  eC = nr(ZS);
var By = fi;
Object.defineProperty(tt, "__esModule", { value: !0 });
var qe = (tt.alpha = Wy);
tt.blend = dC;
tt.colorChannel = void 0;
var bp = (tt.darken = Cp);
tt.decomposeColor = pn;
tt.emphasize = cC;
var tC = (tt.getContrastRatio = sC);
tt.getLuminance = Ll;
tt.hexToRgb = jy;
tt.hslToRgb = Dy;
var wp = (tt.lighten = kp);
tt.private_safeAlpha = aC;
tt.private_safeColorChannel = void 0;
tt.private_safeDarken = lC;
tt.private_safeEmphasize = Uy;
tt.private_safeLighten = uC;
tt.recomposeColor = pi;
tt.rgbToHex = iC;
var Pm = By(JS),
  nC = By(eC);
function Sp(e, t = 0, n = 1) {
  return (0, nC.default)(e, t, n);
}
function jy(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function rC(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function pn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return pn(jy(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, Pm.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o,
      ) === -1)
    )
      throw new Error((0, Pm.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const Fy = (e) => {
  const t = pn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
tt.colorChannel = Fy;
const oC = (e, t) => {
  try {
    return Fy(e);
  } catch {
    return e;
  }
};
tt.private_safeColorChannel = oC;
function pi(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function iC(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = pn(e);
  return `#${t.map((n, r) => rC(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Dy(e) {
  e = pn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), pi({ type: a, values: l })
  );
}
function Ll(e) {
  e = pn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? pn(Dy(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function sC(e, t) {
  const n = Ll(e),
    r = Ll(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wy(e, t) {
  return (
    (e = pn(e)),
    (t = Sp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    pi(e)
  );
}
function aC(e, t, n) {
  try {
    return Wy(e, t);
  } catch {
    return e;
  }
}
function Cp(e, t) {
  if (((e = pn(e)), (t = Sp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return pi(e);
}
function lC(e, t, n) {
  try {
    return Cp(e, t);
  } catch {
    return e;
  }
}
function kp(e, t) {
  if (((e = pn(e)), (t = Sp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return pi(e);
}
function uC(e, t, n) {
  try {
    return kp(e, t);
  } catch {
    return e;
  }
}
function cC(e, t = 0.15) {
  return Ll(e) > 0.5 ? Cp(e, t) : kp(e, t);
}
function Uy(e, t, n) {
  try {
    return Uy(e, t);
  } catch {
    return e;
  }
}
function dC(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = pn(e),
    s = pn(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ];
  return pi({ type: "rgb", values: a });
}
const fC = { black: "#000", white: "#fff" },
  Ms = fC,
  Ad = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  pC = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  vo = pC,
  hC = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  go = hC,
  mC = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Mi = mC,
  vC = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  yo = vC,
  gC = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  xo = gC,
  yC = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  bo = yC,
  xC = ["mode", "contrastThreshold", "tonalOffset"],
  Rm = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Ms.white, default: Ms.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Rc = {
    text: {
      primary: Ms.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Ms.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function $m(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
        ? (e.light = wp(e.main, o))
        : t === "dark" && (e.dark = bp(e.main, i)));
}
function bC(e = "light") {
  return e === "dark"
    ? { main: yo[200], light: yo[50], dark: yo[400] }
    : { main: yo[700], light: yo[400], dark: yo[800] };
}
function wC(e = "light") {
  return e === "dark"
    ? { main: vo[200], light: vo[50], dark: vo[400] }
    : { main: vo[500], light: vo[300], dark: vo[700] };
}
function SC(e = "light") {
  return e === "dark"
    ? { main: go[500], light: go[300], dark: go[700] }
    : { main: go[700], light: go[400], dark: go[800] };
}
function CC(e = "light") {
  return e === "dark"
    ? { main: xo[400], light: xo[300], dark: xo[700] }
    : { main: xo[700], light: xo[500], dark: xo[900] };
}
function kC(e = "light") {
  return e === "dark"
    ? { main: bo[400], light: bo[300], dark: bo[700] }
    : { main: bo[800], light: bo[500], dark: bo[900] };
}
function EC(e = "light") {
  return e === "dark"
    ? { main: Mi[400], light: Mi[300], dark: Mi[700] }
    : { main: "#ed6c02", light: Mi[500], dark: Mi[900] };
}
function PC(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = K(e, xC),
    i = e.primary || bC(t),
    s = e.secondary || wC(t),
    a = e.error || SC(t),
    l = e.info || CC(t),
    u = e.success || kC(t),
    c = e.warning || EC(t);
  function p(y) {
    return tC(y, Rc.text.primary) >= n ? Rc.text.primary : Rm.text.primary;
  }
  const f = ({
      color: y,
      name: P,
      mainShade: m = 500,
      lightShade: h = 300,
      darkShade: d = 700,
    }) => {
      if (
        ((y = v({}, y)),
        !y.main && y[m] && (y.main = y[m]),
        !y.hasOwnProperty("main"))
      )
        throw new Error(oo(11, P ? ` (${P})` : "", m));
      if (typeof y.main != "string")
        throw new Error(oo(12, P ? ` (${P})` : "", JSON.stringify(y.main)));
      return (
        $m(y, "light", h, r),
        $m(y, "dark", d, r),
        y.contrastText || (y.contrastText = p(y.main)),
        y
      );
    },
    b = { dark: Rc, light: Rm };
  return $t(
    v(
      {
        common: v({}, Ms),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: a, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: Ad,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: f,
        tonalOffset: r,
      },
      b[t],
    ),
    o,
  );
}
const RC = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function $C(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Tm = { textTransform: "uppercase" },
  _m = '"Roboto", "Helvetica", "Arial", sans-serif';
function TC(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = _m,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: p,
    } = n,
    f = K(n, RC),
    b = o / 14,
    w = p || ((m) => `${(m / u) * b}rem`),
    y = (m, h, d, g, C) =>
      v(
        { fontFamily: r, fontWeight: m, fontSize: w(h), lineHeight: d },
        r === _m ? { letterSpacing: `${$C(g / h)}em` } : {},
        C,
        c,
      ),
    P = {
      h1: y(i, 96, 1.167, -1.5),
      h2: y(i, 60, 1.2, -0.5),
      h3: y(s, 48, 1.167, 0),
      h4: y(s, 34, 1.235, 0.25),
      h5: y(s, 24, 1.334, 0),
      h6: y(a, 20, 1.6, 0.15),
      subtitle1: y(s, 16, 1.75, 0.15),
      subtitle2: y(a, 14, 1.57, 0.1),
      body1: y(s, 16, 1.5, 0.15),
      body2: y(s, 14, 1.43, 0.15),
      button: y(a, 14, 1.75, 0.4, Tm),
      caption: y(s, 12, 1.66, 0.4),
      overline: y(s, 12, 2.66, 1, Tm),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return $t(
    v(
      {
        htmlFontSize: u,
        pxToRem: w,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      P,
    ),
    f,
    { clone: !1 },
  );
}
const _C = 0.2,
  OC = 0.14,
  NC = 0.12;
function We(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_C})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${OC})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${NC})`,
  ].join(",");
}
const MC = [
    "none",
    We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  IC = ["duration", "easing", "delay"],
  LC = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Vy = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Om(e) {
  return `${Math.round(e)}ms`;
}
function AC(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function zC(e) {
  const t = v({}, LC, e.easing),
    n = v({}, Vy, e.duration);
  return v(
    {
      getAutoHeightDuration: AC,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          K(i, IC),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : Om(s)} ${a} ${typeof l == "string" ? l : Om(l)}`,
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n },
  );
}
const BC = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  jC = BC,
  FC = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Ep(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = K(e, FC);
  if (e.vars) throw new Error(oo(18));
  const a = PC(r),
    l = Vs(e);
  let u = $t(l, {
    mixins: QS(l.breakpoints, n),
    palette: a,
    shadows: MC.slice(),
    typography: TC(a, i),
    transitions: zC(o),
    zIndex: v({}, jC),
  });
  return (
    (u = $t(u, s)),
    (u = t.reduce((c, p) => $t(c, p), u)),
    (u.unstable_sxConfig = v({}, Us, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return ci({ sx: p, theme: this });
    }),
    u
  );
}
const DC = Ep(),
  ku = DC,
  Eu = "$$material";
function pe({ props: e, name: t }) {
  return Ly({ props: e, name: t, defaultTheme: ku, themeId: Eu });
}
function WC({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Cu(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return S.jsx(Ny, { styles: o });
}
function Hy(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Hy(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function G() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Hy(e)) && (r && (r += " "), (r += t));
  return r;
}
const UC = ["className", "component"];
function VC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = yp("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(ci);
  return x.forwardRef(function (l, u) {
    const c = Cu(n),
      p = Ks(l),
      { className: f, component: b = "div" } = p,
      w = K(p, UC);
    return S.jsx(
      i,
      v(
        {
          as: b,
          ref: u,
          className: G(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        w,
      ),
    );
  });
}
function le(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = fe(e, o, n);
    }),
    r
  );
}
const HC = le("MuiBox", ["root"]),
  qC = HC,
  KC = VC({ defaultClassName: qC.root, generateClassName: xp.generate }),
  GC = KC;
var qy = { exports: {} },
  Ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = Symbol.for("react.element"),
  Rp = Symbol.for("react.portal"),
  Pu = Symbol.for("react.fragment"),
  Ru = Symbol.for("react.strict_mode"),
  $u = Symbol.for("react.profiler"),
  Tu = Symbol.for("react.provider"),
  _u = Symbol.for("react.context"),
  YC = Symbol.for("react.server_context"),
  Ou = Symbol.for("react.forward_ref"),
  Nu = Symbol.for("react.suspense"),
  Mu = Symbol.for("react.suspense_list"),
  Iu = Symbol.for("react.memo"),
  Lu = Symbol.for("react.lazy"),
  XC = Symbol.for("react.offscreen"),
  Ky;
Ky = Symbol.for("react.module.reference");
function gn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Pp:
        switch (((e = e.type), e)) {
          case Pu:
          case $u:
          case Ru:
          case Nu:
          case Mu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case YC:
              case _u:
              case Ou:
              case Lu:
              case Iu:
              case Tu:
                return e;
              default:
                return t;
            }
        }
      case Rp:
        return t;
    }
  }
}
Ie.ContextConsumer = _u;
Ie.ContextProvider = Tu;
Ie.Element = Pp;
Ie.ForwardRef = Ou;
Ie.Fragment = Pu;
Ie.Lazy = Lu;
Ie.Memo = Iu;
Ie.Portal = Rp;
Ie.Profiler = $u;
Ie.StrictMode = Ru;
Ie.Suspense = Nu;
Ie.SuspenseList = Mu;
Ie.isAsyncMode = function () {
  return !1;
};
Ie.isConcurrentMode = function () {
  return !1;
};
Ie.isContextConsumer = function (e) {
  return gn(e) === _u;
};
Ie.isContextProvider = function (e) {
  return gn(e) === Tu;
};
Ie.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pp;
};
Ie.isForwardRef = function (e) {
  return gn(e) === Ou;
};
Ie.isFragment = function (e) {
  return gn(e) === Pu;
};
Ie.isLazy = function (e) {
  return gn(e) === Lu;
};
Ie.isMemo = function (e) {
  return gn(e) === Iu;
};
Ie.isPortal = function (e) {
  return gn(e) === Rp;
};
Ie.isProfiler = function (e) {
  return gn(e) === $u;
};
Ie.isStrictMode = function (e) {
  return gn(e) === Ru;
};
Ie.isSuspense = function (e) {
  return gn(e) === Nu;
};
Ie.isSuspenseList = function (e) {
  return gn(e) === Mu;
};
Ie.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Pu ||
    e === $u ||
    e === Ru ||
    e === Nu ||
    e === Mu ||
    e === XC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Lu ||
        e.$$typeof === Iu ||
        e.$$typeof === Tu ||
        e.$$typeof === _u ||
        e.$$typeof === Ou ||
        e.$$typeof === Ky ||
        e.getModuleId !== void 0))
  );
};
Ie.typeOf = gn;
qy.exports = Ie;
var Nm = qy.exports;
const QC = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Gy(e) {
  const t = `${e}`.match(QC);
  return (t && t[1]) || "";
}
function Yy(e, t = "") {
  return e.displayName || e.name || Gy(e) || t;
}
function Mm(e, t, n) {
  const r = Yy(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function JC(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return Yy(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nm.ForwardRef:
          return Mm(e, e.render, "ForwardRef");
        case Nm.Memo:
          return Mm(e, e.type, "memo");
        default:
          return;
      }
  }
}
const ZC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: JC, getFunctionName: Gy },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ek = ["ownerState"],
  tk = ["variants"],
  nk = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function rk(e) {
  return Object.keys(e).length === 0;
}
function ok(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function $c(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ik = Vs(),
  sk = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ca({ defaultTheme: e, theme: t, themeId: n }) {
  return rk(t) ? e : t[n] || t;
}
function ak(e) {
  return e ? (t, n) => n[e] : null;
}
function nl(e, t) {
  let { ownerState: n } = t,
    r = K(t, ek);
  const o = typeof e == "function" ? e(v({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => nl(i, v({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = K(o, tk);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(v({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(v({ ownerState: n }, r, n))
                : l.style,
            ));
      }),
      a
    );
  }
  return o;
}
function lk(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = ik,
      rootShouldForwardProp: r = $c,
      slotShouldForwardProp: o = $c,
    } = e,
    i = (s) =>
      ci(v({}, s, { theme: Ca(v({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      My(s, (C) => C.filter((E) => !(E != null && E.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: p,
          overridesResolver: f = ak(sk(u)),
        } = a,
        b = K(a, nk),
        w = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        y = p || !1;
      let P,
        m = $c;
      u === "Root" || u === "root"
        ? (m = r)
        : u
          ? (m = o)
          : ok(s) && (m = void 0);
      const h = yp(s, v({ shouldForwardProp: m, label: P }, b)),
        d = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) || qn(C)
            ? (E) =>
                nl(
                  C,
                  v({}, E, {
                    theme: Ca({ theme: E.theme, defaultTheme: n, themeId: t }),
                  }),
                )
            : C,
        g = (C, ...E) => {
          let k = d(C);
          const $ = E ? E.map(d) : [];
          l &&
            f &&
            $.push((N) => {
              const z = Ca(v({}, N, { defaultTheme: n, themeId: t }));
              if (
                !z.components ||
                !z.components[l] ||
                !z.components[l].styleOverrides
              )
                return null;
              const L = z.components[l].styleOverrides,
                B = {};
              return (
                Object.entries(L).forEach(([I, j]) => {
                  B[I] = nl(j, v({}, N, { theme: z }));
                }),
                f(N, B)
              );
            }),
            l &&
              !w &&
              $.push((N) => {
                var z;
                const L = Ca(v({}, N, { defaultTheme: n, themeId: t })),
                  B =
                    L == null ||
                    (z = L.components) == null ||
                    (z = z[l]) == null
                      ? void 0
                      : z.variants;
                return nl({ variants: B }, v({}, N, { theme: L }));
              }),
            y || $.push(i);
          const _ = $.length - E.length;
          if (Array.isArray(C) && _ > 0) {
            const N = new Array(_).fill("");
            (k = [...C, ...N]), (k.raw = [...C.raw, ...N]);
          }
          const T = h(k, ...$);
          return s.muiName && (T.muiName = s.muiName), T;
        };
      return h.withConfig && (g.withConfig = h.withConfig), g;
    }
  );
}
const uk = lk(),
  Yt = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function zd(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {},
  );
}
function Au(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function ck(e, t) {
  return () => null;
}
function as(e, t) {
  var n, r;
  return (
    x.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
            (r = r._payload) == null ||
            (r = r.value) == null
          ? void 0
          : r.muiName,
    ) !== -1
  );
}
function st(e) {
  return (e && e.ownerDocument) || document;
}
function Dn(e) {
  return st(e).defaultView || window;
}
function dk(e, t) {
  return () => null;
}
function Al(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Im = 0;
function fk(e) {
  const [t, n] = x.useState(e),
    r = e || t;
  return (
    x.useEffect(() => {
      t == null && ((Im += 1), n(`mui-${Im}`));
    }, [t]),
    r
  );
}
const Lm = Bc.useId;
function zu(e) {
  if (Lm !== void 0) {
    const t = Lm();
    return e ?? t;
  }
  return fk(e);
}
function pk(e, t, n, r, o) {
  return null;
}
function ti({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = x.useRef(e !== void 0),
    [i, s] = x.useState(t),
    a = o ? e : i,
    l = x.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function ln(e) {
  const t = x.useRef(e);
  return (
    Yt(() => {
      t.current = e;
    }),
    x.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Ve(...e) {
  return x.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Al(n, t);
            });
          },
    e,
  );
}
const Am = {};
function hk(e, t) {
  const n = x.useRef(Am);
  return n.current === Am && (n.current = e(t)), n;
}
const mk = [];
function vk(e) {
  x.useEffect(e, mk);
}
class Gs {
  constructor() {
    (this.currentId = 0),
      (this.clear = () => {
        this.currentId !== 0 &&
          (clearTimeout(this.currentId), (this.currentId = 0));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Gs();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = 0), n();
      }, t));
  }
}
function Hr() {
  const e = hk(Gs.create).current;
  return vk(e.disposeEffect), e;
}
let Bu = !0,
  Bd = !1;
const gk = new Gs(),
  yk = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function xk(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && yk[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function bk(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Bu = !0);
}
function Tc() {
  Bu = !1;
}
function wk() {
  this.visibilityState === "hidden" && Bd && (Bu = !0);
}
function Sk(e) {
  e.addEventListener("keydown", bk, !0),
    e.addEventListener("mousedown", Tc, !0),
    e.addEventListener("pointerdown", Tc, !0),
    e.addEventListener("touchstart", Tc, !0),
    e.addEventListener("visibilitychange", wk, !0);
}
function Ck(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Bu || xk(t);
}
function ju() {
  const e = x.useCallback((o) => {
      o != null && Sk(o.ownerDocument);
    }, []),
    t = x.useRef(!1);
  function n() {
    return t.current
      ? ((Bd = !0),
        gk.start(100, () => {
          Bd = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return Ck(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Xy(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const kk = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
  Ek = kk;
function he(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Pk = x.createContext(null),
  Qy = Pk;
function Jy() {
  return x.useContext(Qy);
}
const Rk = typeof Symbol == "function" && Symbol.for,
  $k = Rk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Tk(e, t) {
  return typeof t == "function" ? t(e) : v({}, e, t);
}
function _k(e) {
  const { children: t, theme: n } = e,
    r = Jy(),
    o = x.useMemo(() => {
      const i = r === null ? n : Tk(r, n);
      return i != null && (i[$k] = r !== null), i;
    }, [n, r]);
  return S.jsx(Qy.Provider, { value: o, children: t });
}
const zm = {};
function Bm(e, t, n, r = !1) {
  return x.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? v({}, t, { [e]: i }) : i;
      return r ? () => s : s;
    }
    return e ? v({}, t, { [e]: n }) : v({}, t, n);
  }, [e, t, n, r]);
}
function Ok(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = Iy(zm),
    i = Jy() || zm,
    s = Bm(r, o, n),
    a = Bm(r, i, n, !0);
  return S.jsx(_k, {
    theme: a,
    children: S.jsx(qs.Provider, { value: s, children: t }),
  });
}
const Nk = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  Mk = Vs(),
  Ik = uk("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function Lk(e) {
  return Ly({ props: e, name: "MuiStack", defaultTheme: Mk });
}
function Ak(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(x.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    [],
  );
}
const zk = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    })[e],
  Bk = ({ ownerState: e, theme: t }) => {
    let n = v(
      { display: "flex", flexDirection: "column" },
      Bt(
        { theme: t },
        Yr({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r }),
      ),
    );
    if (e.spacing) {
      const r = up(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, u) => (
            ((typeof e.spacing == "object" && e.spacing[u] != null) ||
              (typeof e.direction == "object" && e.direction[u] != null)) &&
              (l[u] = !0),
            l
          ),
          {},
        ),
        i = Yr({ values: e.direction, base: o }),
        s = Yr({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((l, u, c) => {
          if (!i[l]) {
            const f = u > 0 ? i[c[u - 1]] : "column";
            i[l] = f;
          }
        }),
        (n = $t(
          n,
          Bt({ theme: t }, s, (l, u) =>
            e.useFlexGap
              ? { gap: io(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${zk(u ? i[u] : e.direction)}`]: io(r, l),
                  },
                },
          ),
        ));
    }
    return (n = Yw(t.breakpoints, n)), n;
  };
function jk(e = {}) {
  const {
      createStyledComponent: t = Ik,
      useThemeProps: n = Lk,
      componentName: r = "MuiStack",
    } = e,
    o = () => he({ root: ["root"] }, (l) => fe(r, l), {}),
    i = t(Bk);
  return x.forwardRef(function (l, u) {
    const c = n(l),
      p = Ks(c),
      {
        component: f = "div",
        direction: b = "column",
        spacing: w = 0,
        divider: y,
        children: P,
        className: m,
        useFlexGap: h = !1,
      } = p,
      d = K(p, Nk),
      g = { direction: b, spacing: w, useFlexGap: h },
      C = o();
    return S.jsx(
      i,
      v({ as: f, ownerState: g, ref: u, className: G(C.root, m) }, d, {
        children: y ? Ak(P, y) : P,
      }),
    );
  });
}
function Zy(e) {
  return S.jsx(WC, v({}, e, { defaultTheme: ku, themeId: Eu }));
}
const Fk = (e, t) =>
    v(
      {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
      },
      t && !e.vars && { colorScheme: e.palette.mode },
    ),
  Dk = (e) =>
    v({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      "@media print": { backgroundColor: (e.vars || e).palette.common.white },
    }),
  Wk = (e, t = !1) => {
    var n;
    const r = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, a]) => {
        var l;
        r[e.getColorSchemeSelector(s).replace(/\s*&/, "")] = {
          colorScheme: (l = a.palette) == null ? void 0 : l.mode,
        };
      });
    let o = v(
      {
        html: Fk(e, t),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: e.typography.fontWeightBold },
        body: v({ margin: 0 }, Dk(e), {
          "&::backdrop": {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        }),
      },
      r,
    );
    const i =
      (n = e.components) == null || (n = n.MuiCssBaseline) == null
        ? void 0
        : n.styleOverrides;
    return i && (o = [o, i]), o;
  };
function Uk(e) {
  const t = pe({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t;
  return S.jsxs(x.Fragment, {
    children: [S.jsx(Zy, { styles: (o) => Wk(o, r) }), n],
  });
}
var Ys = {},
  _c = { exports: {} },
  jm;
function Vk() {
  return (
    jm ||
      ((jm = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            s,
            a;
          for (a = 0; a < i.length; a++)
            (s = i[a]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(_c)),
    _c.exports
  );
}
const e1 = nr(US),
  Hk = nr(Vw),
  qk = nr(Jw),
  Kk = nr(ZC),
  Gk = nr(F2),
  Yk = nr(GS);
var hi = fi;
Object.defineProperty(Ys, "__esModule", { value: !0 });
var Xk = (Ys.default = uE),
  t1 = (Ys.shouldForwardProp = rl);
Ys.systemDefaultTheme = void 0;
var en = hi(_y()),
  jd = hi(Vk()),
  Fm = rE(e1),
  Qk = Hk;
hi(qk);
hi(Kk);
var Jk = hi(Gk),
  Zk = hi(Yk);
const eE = ["ownerState"],
  tE = ["variants"],
  nE = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function n1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (n1 = function (r) {
    return r ? n : t;
  })(e);
}
function rE(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = n1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function oE(e) {
  return Object.keys(e).length === 0;
}
function iE(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function rl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const sE = (Ys.systemDefaultTheme = (0, Jk.default)()),
  aE = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ka({ defaultTheme: e, theme: t, themeId: n }) {
  return oE(t) ? e : t[n] || t;
}
function lE(e) {
  return e ? (t, n) => n[e] : null;
}
function ol(e, t) {
  let { ownerState: n } = t,
    r = (0, jd.default)(t, eE);
  const o =
    typeof e == "function" ? e((0, en.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => ol(i, (0, en.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, jd.default)(o, tE);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, en.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style((0, en.default)({ ownerState: n }, r, n))
                : l.style,
            ));
      }),
      a
    );
  }
  return o;
}
function uE(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = sE,
      rootShouldForwardProp: r = rl,
      slotShouldForwardProp: o = rl,
    } = e,
    i = (s) =>
      (0, Zk.default)(
        (0, en.default)({}, s, {
          theme: ka((0, en.default)({}, s, { defaultTheme: n, themeId: t })),
        }),
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, Fm.internal_processStyles)(s, (C) =>
        C.filter((E) => !(E != null && E.__mui_systemSx)),
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: p,
          overridesResolver: f = lE(aE(u)),
        } = a,
        b = (0, jd.default)(a, nE),
        w = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        y = p || !1;
      let P,
        m = rl;
      u === "Root" || u === "root"
        ? (m = r)
        : u
          ? (m = o)
          : iE(s) && (m = void 0);
      const h = (0, Fm.default)(
          s,
          (0, en.default)({ shouldForwardProp: m, label: P }, b),
        ),
        d = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) ||
          (0, Qk.isPlainObject)(C)
            ? (E) =>
                ol(
                  C,
                  (0, en.default)({}, E, {
                    theme: ka({ theme: E.theme, defaultTheme: n, themeId: t }),
                  }),
                )
            : C,
        g = (C, ...E) => {
          let k = d(C);
          const $ = E ? E.map(d) : [];
          l &&
            f &&
            $.push((N) => {
              const z = ka(
                (0, en.default)({}, N, { defaultTheme: n, themeId: t }),
              );
              if (
                !z.components ||
                !z.components[l] ||
                !z.components[l].styleOverrides
              )
                return null;
              const L = z.components[l].styleOverrides,
                B = {};
              return (
                Object.entries(L).forEach(([I, j]) => {
                  B[I] = ol(j, (0, en.default)({}, N, { theme: z }));
                }),
                f(N, B)
              );
            }),
            l &&
              !w &&
              $.push((N) => {
                var z;
                const L = ka(
                    (0, en.default)({}, N, { defaultTheme: n, themeId: t }),
                  ),
                  B =
                    L == null ||
                    (z = L.components) == null ||
                    (z = z[l]) == null
                      ? void 0
                      : z.variants;
                return ol(
                  { variants: B },
                  (0, en.default)({}, N, { theme: L }),
                );
              }),
            y || $.push(i);
          const _ = $.length - E.length;
          if (Array.isArray(C) && _ > 0) {
            const N = new Array(_).fill("");
            (k = [...C, ...N]), (k.raw = [...C.raw, ...N]);
          }
          const T = h(k, ...$);
          return s.muiName && (T.muiName = s.muiName), T;
        };
      return h.withConfig && (g.withConfig = h.withConfig), g;
    }
  );
}
const Ft = (e) => t1(e) && e !== "classes",
  $p = t1,
  V = Xk({ themeId: Eu, defaultTheme: ku, rootShouldForwardProp: Ft });
function Dm(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function zl(e, t = !1) {
  return (
    e &&
    ((Dm(e.value) && e.value !== "") ||
      (t && Dm(e.defaultValue) && e.defaultValue !== ""))
  );
}
function cE(e) {
  return e.startAdornment;
}
const dE = x.createContext(void 0),
  Tp = dE;
function fE(e) {
  return fe("MuiFormControl", e);
}
le("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const pE = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  hE = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${X(n)}`, r && "fullWidth"] };
    return he(o, fE, t);
  },
  mE = V("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      v({}, t.root, t[`margin${X(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    v(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" },
    ),
  ),
  vE = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: p = !1,
        hiddenLabel: f = !1,
        margin: b = "none",
        required: w = !1,
        size: y = "medium",
        variant: P = "outlined",
      } = r,
      m = K(r, pE),
      h = v({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: p,
        hiddenLabel: f,
        margin: b,
        required: w,
        size: y,
        variant: P,
      }),
      d = hE(h),
      [g, C] = x.useState(() => {
        let L = !1;
        return (
          o &&
            x.Children.forEach(o, (B) => {
              if (!as(B, ["Input", "Select"])) return;
              const I = as(B, ["Select"]) ? B.props.input : B;
              I && cE(I.props) && (L = !0);
            }),
          L
        );
      }),
      [E, k] = x.useState(() => {
        let L = !1;
        return (
          o &&
            x.Children.forEach(o, (B) => {
              as(B, ["Input", "Select"]) &&
                (zl(B.props, !0) || zl(B.props.inputProps, !0)) &&
                (L = !0);
            }),
          L
        );
      }),
      [$, _] = x.useState(!1);
    l && $ && _(!1);
    const T = c !== void 0 && !l ? c : $;
    let N;
    const z = x.useMemo(
      () => ({
        adornedStart: g,
        setAdornedStart: C,
        color: s,
        disabled: l,
        error: u,
        filled: E,
        focused: T,
        fullWidth: p,
        hiddenLabel: f,
        size: y,
        onBlur: () => {
          _(!1);
        },
        onEmpty: () => {
          k(!1);
        },
        onFilled: () => {
          k(!0);
        },
        onFocus: () => {
          _(!0);
        },
        registerEffect: N,
        required: w,
        variant: P,
      }),
      [g, s, l, u, E, T, p, f, N, w, y, P],
    );
    return S.jsx(Tp.Provider, {
      value: z,
      children: S.jsx(
        mE,
        v({ as: a, ownerState: h, className: G(d.root, i), ref: n }, m, {
          children: o,
        }),
      ),
    });
  }),
  gE = vE;
function or() {
  return x.useContext(Tp);
}
const yE = jk({
    createStyledComponent: V("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => pe({ props: e, name: "MuiStack" }),
  }),
  xE = yE;
function bE(e) {
  return fe("MuiTypography", e);
}
le("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const wE = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  SE = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${X(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return he(a, bE, s);
  },
  CE = V("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${X(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 },
    ),
  ),
  Wm = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  kE = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  EE = (e) => kE[e] || e,
  PE = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiTypography" }),
      o = EE(r.color),
      i = Ks(v({}, r, { color: o })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: p = !1,
        variant: f = "body1",
        variantMapping: b = Wm,
      } = i,
      w = K(i, wE),
      y = v({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: p,
        variant: f,
        variantMapping: b,
      }),
      P = l || (p ? "p" : b[f] || Wm[f]) || "span",
      m = SE(y);
    return S.jsx(
      CE,
      v({ as: P, ref: n, ownerState: y, className: G(m.root, a) }, w),
    );
  }),
  In = PE;
function RE(e) {
  return fe("MuiFormControlLabel", e);
}
const $E = le("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  Ki = $E;
function _r({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {},
  );
}
const TE = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "required",
    "slotProps",
    "value",
  ],
  _E = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          `labelPlacement${X(r)}`,
          o && "error",
          i && "required",
        ],
        label: ["label", n && "disabled"],
        asterisk: ["asterisk", o && "error"],
      };
    return he(s, RE, t);
  },
  OE = V("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ki.label}`]: t.label },
        t.root,
        t[`labelPlacement${X(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${Ki.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${Ki.label}`]: {
          [`&.${Ki.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      },
    ),
  ),
  NE = V("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ki.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  ME = x.forwardRef(function (t, n) {
    var r, o;
    const i = pe({ props: t, name: "MuiFormControlLabel" }),
      {
        className: s,
        componentsProps: a = {},
        control: l,
        disabled: u,
        disableTypography: c,
        label: p,
        labelPlacement: f = "end",
        required: b,
        slotProps: w = {},
      } = i,
      y = K(i, TE),
      P = or(),
      m =
        (r = u ?? l.props.disabled) != null
          ? r
          : P == null
            ? void 0
            : P.disabled,
      h = b ?? l.props.required,
      d = { disabled: m, required: h };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((_) => {
      typeof l.props[_] > "u" && typeof i[_] < "u" && (d[_] = i[_]);
    });
    const g = _r({ props: i, muiFormControl: P, states: ["error"] }),
      C = v({}, i, {
        disabled: m,
        labelPlacement: f,
        required: h,
        error: g.error,
      }),
      E = _E(C),
      k = (o = w.typography) != null ? o : a.typography;
    let $ = p;
    return (
      $ != null &&
        $.type !== In &&
        !c &&
        ($ = S.jsx(
          In,
          v({ component: "span" }, k, {
            className: G(E.label, k == null ? void 0 : k.className),
            children: $,
          }),
        )),
      S.jsxs(
        OE,
        v({ className: G(E.root, s), ownerState: C, ref: n }, y, {
          children: [
            x.cloneElement(l, d),
            h
              ? S.jsxs(xE, {
                  display: "block",
                  children: [
                    $,
                    S.jsxs(NE, {
                      ownerState: C,
                      "aria-hidden": !0,
                      className: E.asterisk,
                      children: [" ", "*"],
                    }),
                  ],
                })
              : $,
          ],
        }),
      )
    );
  }),
  r1 = ME;
function Bn(e) {
  return typeof e == "string";
}
function Gi(e, t, n) {
  return e === void 0 || Bn(e)
    ? t
    : v({}, t, { ownerState: v({}, t.ownerState, n) });
}
function IE(e, t, n = (r, o) => r === o) {
  return e.length === t.length && e.every((r, o) => n(r, t[o]));
}
const LE = { disableDefaultClasses: !1 },
  AE = x.createContext(LE);
function zE(e) {
  const { disableDefaultClasses: t } = x.useContext(AE);
  return (n) => (t ? "" : e(n));
}
function ls(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r),
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function BE(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Um(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function jE(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const b = G(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
      ),
      w = v(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style,
      ),
      y = v({}, n, o, r);
    return (
      b.length > 0 && (y.className = b),
      Object.keys(w).length > 0 && (y.style = w),
      { props: y, internalRef: void 0 }
    );
  }
  const s = ls(v({}, o, r)),
    a = Um(r),
    l = Um(o),
    u = t(s),
    c = G(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className,
    ),
    p = v(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style,
    ),
    f = v({}, u, n, l, a);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(p).length > 0 && (f.style = p),
    { props: f, internalRef: u.ref }
  );
}
const FE = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Pt(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = K(e, FE),
    a = i ? {} : BE(r, o),
    { props: l, internalRef: u } = jE(v({}, s, { externalSlotProps: a })),
    c = Ve(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref,
    );
  return Gi(n, v({}, l, { ref: c }), o);
}
function Fd(e, t) {
  return (
    (Fd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Fd(e, t)
  );
}
function o1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Fd(e, t);
}
const Vm = { disabled: !1 },
  Bl = Cn.createContext(null);
var DE = function (t) {
    return t.scrollTop;
  },
  Yi = "unmounted",
  Fr = "exited",
  Dr = "entering",
  Co = "entered",
  Dd = "exiting",
  ir = (function (e) {
    o1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = Fr), (i.appearStatus = Dr))
            : (l = Co)
          : r.unmountOnExit || r.mountOnEnter
            ? (l = Yi)
            : (l = Fr),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Yi ? { status: Fr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Dr && s !== Co && (i = Dr)
            : (s === Dr || s === Co) && (i = Dd);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Dr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : wa.findDOMNode(this);
              s && DE(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Fr &&
            this.setState({ status: Yi });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [wa.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          p = this.getTimeouts(),
          f = a ? p.appear : p.enter;
        if ((!o && !s) || Vm.disabled) {
          this.safeSetState({ status: Co }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Dr }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: Co }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : wa.findDOMNode(this);
        if (!i || Vm.disabled) {
          this.safeSetState({ status: Fr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Dd }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Fr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : wa.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Yi) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = K(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Cn.createElement(
          Bl.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : Cn.cloneElement(Cn.Children.only(s), a),
        );
      }),
      t
    );
  })(Cn.Component);
ir.contextType = Bl;
ir.propTypes = {};
function wo() {}
ir.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wo,
  onEntering: wo,
  onEntered: wo,
  onExit: wo,
  onExiting: wo,
  onExited: wo,
};
ir.UNMOUNTED = Yi;
ir.EXITED = Fr;
ir.ENTERING = Dr;
ir.ENTERED = Co;
ir.EXITING = Dd;
const Fu = ir;
function WE(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function _p(e, t) {
  var n = function (i) {
      return t && x.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      x.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function UE(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function qr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function VE(e, t) {
  return _p(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: qr(n, "appear", e),
      enter: qr(n, "enter", e),
      exit: qr(n, "exit", e),
    });
  });
}
function HE(e, t, n) {
  var r = _p(e.children),
    o = UE(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (x.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = x.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: qr(s, "exit", e),
              enter: qr(s, "enter", e),
            }))
          : !l && a && !c
            ? (o[i] = x.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              x.isValidElement(u) &&
              (o[i] = x.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: qr(s, "exit", e),
                enter: qr(s, "enter", e),
              }));
      }
    }),
    o
  );
}
var qE =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  KE = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Op = (function (e) {
    o1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(WE(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? VE(o, a) : HE(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = _p(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = v({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = K(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = qE(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? Cn.createElement(Bl.Provider, { value: l }, u)
            : Cn.createElement(
                Bl.Provider,
                { value: l },
                Cn.createElement(i, a, u),
              )
        );
      }),
      t
    );
  })(Cn.Component);
Op.propTypes = {};
Op.defaultProps = KE;
const GE = Op;
function YE(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, p] = x.useState(!1),
    f = G(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    b = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    w = G(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && p(!0),
    x.useEffect(() => {
      if (!a && l != null) {
        const y = setTimeout(l, u);
        return () => {
          clearTimeout(y);
        };
      }
    }, [l, a, u]),
    S.jsx("span", {
      className: f,
      style: b,
      children: S.jsx("span", { className: w }),
    })
  );
}
const tn = le("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  XE = ["center", "classes", "className"];
let Du = (e) => e,
  Hm,
  qm,
  Km,
  Gm;
const Wd = 550,
  QE = 80,
  JE = Su(
    Hm ||
      (Hm = Du`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`),
  ),
  ZE = Su(
    qm ||
      (qm = Du`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
  ),
  eP = Su(
    Km ||
      (Km = Du`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`),
  ),
  tP = V("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  nP = V(YE, { name: "MuiTouchRipple", slot: "Ripple" })(
    Gm ||
      (Gm = Du`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    tn.rippleVisible,
    JE,
    Wd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    tn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    tn.child,
    tn.childLeaving,
    ZE,
    Wd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    tn.childPulsate,
    eP,
    ({ theme: e }) => e.transitions.easing.easeInOut,
  ),
  rP = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = K(r, XE),
      [l, u] = x.useState([]),
      c = x.useRef(0),
      p = x.useRef(null);
    x.useEffect(() => {
      p.current && (p.current(), (p.current = null));
    }, [l]);
    const f = x.useRef(!1),
      b = Hr(),
      w = x.useRef(null),
      y = x.useRef(null),
      P = x.useCallback(
        (g) => {
          const {
            pulsate: C,
            rippleX: E,
            rippleY: k,
            rippleSize: $,
            cb: _,
          } = g;
          u((T) => [
            ...T,
            S.jsx(
              nP,
              {
                classes: {
                  ripple: G(i.ripple, tn.ripple),
                  rippleVisible: G(i.rippleVisible, tn.rippleVisible),
                  ripplePulsate: G(i.ripplePulsate, tn.ripplePulsate),
                  child: G(i.child, tn.child),
                  childLeaving: G(i.childLeaving, tn.childLeaving),
                  childPulsate: G(i.childPulsate, tn.childPulsate),
                },
                timeout: Wd,
                pulsate: C,
                rippleX: E,
                rippleY: k,
                rippleSize: $,
              },
              c.current,
            ),
          ]),
            (c.current += 1),
            (p.current = _);
        },
        [i],
      ),
      m = x.useCallback(
        (g = {}, C = {}, E = () => {}) => {
          const {
            pulsate: k = !1,
            center: $ = o || C.pulsate,
            fakeElement: _ = !1,
          } = C;
          if ((g == null ? void 0 : g.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (g == null ? void 0 : g.type) === "touchstart" && (f.current = !0);
          const T = _ ? null : y.current,
            N = T
              ? T.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let z, L, B;
          if (
            $ ||
            g === void 0 ||
            (g.clientX === 0 && g.clientY === 0) ||
            (!g.clientX && !g.touches)
          )
            (z = Math.round(N.width / 2)), (L = Math.round(N.height / 2));
          else {
            const { clientX: I, clientY: j } =
              g.touches && g.touches.length > 0 ? g.touches[0] : g;
            (z = Math.round(I - N.left)), (L = Math.round(j - N.top));
          }
          if ($)
            (B = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3)),
              B % 2 === 0 && (B += 1);
          else {
            const I =
                Math.max(Math.abs((T ? T.clientWidth : 0) - z), z) * 2 + 2,
              j = Math.max(Math.abs((T ? T.clientHeight : 0) - L), L) * 2 + 2;
            B = Math.sqrt(I ** 2 + j ** 2);
          }
          g != null && g.touches
            ? w.current === null &&
              ((w.current = () => {
                P({ pulsate: k, rippleX: z, rippleY: L, rippleSize: B, cb: E });
              }),
              b.start(QE, () => {
                w.current && (w.current(), (w.current = null));
              }))
            : P({ pulsate: k, rippleX: z, rippleY: L, rippleSize: B, cb: E });
        },
        [o, P, b],
      ),
      h = x.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      d = x.useCallback(
        (g, C) => {
          if (
            (b.clear(),
            (g == null ? void 0 : g.type) === "touchend" && w.current)
          ) {
            w.current(),
              (w.current = null),
              b.start(0, () => {
                d(g, C);
              });
            return;
          }
          (w.current = null),
            u((E) => (E.length > 0 ? E.slice(1) : E)),
            (p.current = C);
        },
        [b],
      );
    return (
      x.useImperativeHandle(n, () => ({ pulsate: h, start: m, stop: d }), [
        h,
        m,
        d,
      ]),
      S.jsx(
        tP,
        v({ className: G(tn.root, i.root, s), ref: y }, a, {
          children: S.jsx(GE, { component: null, exit: !0, children: l }),
        }),
      )
    );
  }),
  oP = rP;
function iP(e) {
  return fe("MuiButtonBase", e);
}
const sP = le("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  aP = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  lP = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = he({ root: ["root", t && "disabled", n && "focusVisible"] }, iP, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  uP = V("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${sP.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  cP = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: p = !1,
        focusRipple: f = !1,
        LinkComponent: b = "a",
        onBlur: w,
        onClick: y,
        onContextMenu: P,
        onDragLeave: m,
        onFocus: h,
        onFocusVisible: d,
        onKeyDown: g,
        onKeyUp: C,
        onMouseDown: E,
        onMouseLeave: k,
        onMouseUp: $,
        onTouchEnd: _,
        onTouchMove: T,
        onTouchStart: N,
        tabIndex: z = 0,
        TouchRippleProps: L,
        touchRippleRef: B,
        type: I,
      } = r,
      j = K(r, aP),
      F = x.useRef(null),
      R = x.useRef(null),
      O = Ve(R, B),
      { isFocusVisibleRef: W, onFocus: Z, onBlur: ee, ref: ce } = ju(),
      [Y, ie] = x.useState(!1);
    u && Y && ie(!1),
      x.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ie(!0), F.current.focus();
          },
        }),
        [],
      );
    const [H, ue] = x.useState(!1);
    x.useEffect(() => {
      ue(!0);
    }, []);
    const te = H && !c && !u;
    x.useEffect(() => {
      Y && f && !c && H && R.current.pulsate();
    }, [c, f, Y, H]);
    function oe(M, q, me = p) {
      return ln((be) => (q && q(be), !me && R.current && R.current[M](be), !0));
    }
    const $e = oe("start", E),
      ne = oe("stop", P),
      ke = oe("stop", m),
      re = oe("stop", $),
      de = oe("stop", (M) => {
        Y && M.preventDefault(), k && k(M);
      }),
      J = oe("start", N),
      ge = oe("stop", _),
      Le = oe("stop", T),
      Ee = oe(
        "stop",
        (M) => {
          ee(M), W.current === !1 && ie(!1), w && w(M);
        },
        !1,
      ),
      Fe = ln((M) => {
        F.current || (F.current = M.currentTarget),
          Z(M),
          W.current === !0 && (ie(!0), d && d(M)),
          h && h(M);
      }),
      Te = () => {
        const M = F.current;
        return l && l !== "button" && !(M.tagName === "A" && M.href);
      },
      se = x.useRef(!1),
      De = ln((M) => {
        f &&
          !se.current &&
          Y &&
          R.current &&
          M.key === " " &&
          ((se.current = !0),
          R.current.stop(M, () => {
            R.current.start(M);
          })),
          M.target === M.currentTarget &&
            Te() &&
            M.key === " " &&
            M.preventDefault(),
          g && g(M),
          M.target === M.currentTarget &&
            Te() &&
            M.key === "Enter" &&
            !u &&
            (M.preventDefault(), y && y(M));
      }),
      ze = ln((M) => {
        f &&
          M.key === " " &&
          R.current &&
          Y &&
          !M.defaultPrevented &&
          ((se.current = !1),
          R.current.stop(M, () => {
            R.current.pulsate(M);
          })),
          C && C(M),
          y &&
            M.target === M.currentTarget &&
            Te() &&
            M.key === " " &&
            !M.defaultPrevented &&
            y(M);
      });
    let xe = l;
    xe === "button" && (j.href || j.to) && (xe = b);
    const nt = {};
    xe === "button"
      ? ((nt.type = I === void 0 ? "button" : I), (nt.disabled = u))
      : (!j.href && !j.to && (nt.role = "button"),
        u && (nt["aria-disabled"] = u));
    const at = Ve(n, ce, F),
      lt = v({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: p,
        focusRipple: f,
        tabIndex: z,
        focusVisible: Y,
      }),
      A = lP(lt);
    return S.jsxs(
      uP,
      v(
        {
          as: xe,
          className: G(A.root, a),
          ownerState: lt,
          onBlur: Ee,
          onClick: y,
          onContextMenu: ne,
          onFocus: Fe,
          onKeyDown: De,
          onKeyUp: ze,
          onMouseDown: $e,
          onMouseLeave: de,
          onMouseUp: re,
          onDragLeave: ke,
          onTouchEnd: ge,
          onTouchMove: Le,
          onTouchStart: J,
          ref: at,
          tabIndex: u ? -1 : z,
          type: I,
        },
        nt,
        j,
        { children: [s, te ? S.jsx(oP, v({ ref: O, center: i }, L)) : null] },
      ),
    );
  }),
  Xs = cP,
  dP = x.createContext({}),
  Xr = dP;
function fP(e) {
  return fe("MuiListItem", e);
}
const pP = le("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  ko = pP,
  hP = le("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  mP = hP;
function vP(e) {
  return fe("MuiListItemSecondaryAction", e);
}
le("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const gP = ["className"],
  yP = (e) => {
    const { disableGutters: t, classes: n } = e;
    return he({ root: ["root", t && "disableGutters"] }, vP, n);
  },
  xP = V("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    v(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.disableGutters && { right: 0 },
    ),
  ),
  i1 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o } = r,
      i = K(r, gP),
      s = x.useContext(Xr),
      a = v({}, r, { disableGutters: s.disableGutters }),
      l = yP(a);
    return S.jsx(xP, v({ className: G(l.root, o), ownerState: a, ref: n }, i));
  });
i1.muiName = "ListItemSecondaryAction";
const bP = i1,
  wP = ["className"],
  SP = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  CP = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  kP = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: a,
      divider: l,
      hasSecondaryAction: u,
      selected: c,
    } = e;
    return he(
      {
        root: [
          "root",
          o && "dense",
          !s && "gutters",
          !a && "padding",
          l && "divider",
          i && "disabled",
          n && "button",
          t === "flex-start" && "alignItemsFlexStart",
          u && "secondaryAction",
          c && "selected",
        ],
        container: ["container"],
      },
      fP,
      r,
    );
  },
  EP = V("div", { name: "MuiListItem", slot: "Root", overridesResolver: CP })(
    ({ theme: e, ownerState: t }) =>
      v(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          v(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 },
          ),
        !!t.secondaryAction && { [`& > .${mP.root}`]: { paddingRight: 48 } },
        {
          [`&.${ko.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${ko.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : qe(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${ko.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : qe(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity,
                  ),
            },
          },
          [`&.${ko.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${ko.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : qe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : qe(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 },
      ),
  ),
  PP = V("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  RP = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: s = !1,
        children: a,
        className: l,
        component: u,
        components: c = {},
        componentsProps: p = {},
        ContainerComponent: f = "li",
        ContainerProps: { className: b } = {},
        dense: w = !1,
        disabled: y = !1,
        disableGutters: P = !1,
        disablePadding: m = !1,
        divider: h = !1,
        focusVisibleClassName: d,
        secondaryAction: g,
        selected: C = !1,
        slotProps: E = {},
        slots: k = {},
      } = r,
      $ = K(r.ContainerProps, wP),
      _ = K(r, SP),
      T = x.useContext(Xr),
      N = x.useMemo(
        () => ({ dense: w || T.dense || !1, alignItems: o, disableGutters: P }),
        [o, T.dense, w, P],
      ),
      z = x.useRef(null);
    Yt(() => {
      i && z.current && z.current.focus();
    }, [i]);
    const L = x.Children.toArray(a),
      B = L.length && as(L[L.length - 1], ["ListItemSecondaryAction"]),
      I = v({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: N.dense,
        disabled: y,
        disableGutters: P,
        disablePadding: m,
        divider: h,
        hasSecondaryAction: B,
        selected: C,
      }),
      j = kP(I),
      F = Ve(z, n),
      R = k.root || c.Root || EP,
      O = E.root || p.root || {},
      W = v({ className: G(j.root, O.className, l), disabled: y }, _);
    let Z = u || "li";
    return (
      s &&
        ((W.component = u || "div"),
        (W.focusVisibleClassName = G(ko.focusVisible, d)),
        (Z = Xs)),
      B
        ? ((Z = !W.component && !u ? "div" : Z),
          f === "li" &&
            (Z === "li"
              ? (Z = "div")
              : W.component === "li" && (W.component = "div")),
          S.jsx(Xr.Provider, {
            value: N,
            children: S.jsxs(
              PP,
              v(
                { as: f, className: G(j.container, b), ref: F, ownerState: I },
                $,
                {
                  children: [
                    S.jsx(
                      R,
                      v(
                        {},
                        O,
                        !Bn(R) && { as: Z, ownerState: v({}, I, O.ownerState) },
                        W,
                        { children: L },
                      ),
                    ),
                    L.pop(),
                  ],
                },
              ),
            ),
          }))
        : S.jsx(Xr.Provider, {
            value: N,
            children: S.jsxs(
              R,
              v(
                {},
                O,
                { as: Z, ref: F },
                !Bn(R) && { ownerState: v({}, I, O.ownerState) },
                W,
                { children: [L, g && S.jsx(bP, { children: g })] },
              ),
            ),
          })
    );
  }),
  Ud = RP;
function $P(e) {
  return fe("PrivateSwitchBase", e);
}
le("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const TP = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  _P = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${X(o)}`],
        input: ["input"],
      };
    return he(i, $P, t);
  },
  OP = V(Xs)(({ ownerState: e }) =>
    v(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
    ),
  ),
  NP = V("input", { shouldForwardProp: Ft })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  MP = x.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: p,
        id: f,
        inputProps: b,
        inputRef: w,
        name: y,
        onBlur: P,
        onChange: m,
        onFocus: h,
        readOnly: d,
        required: g = !1,
        tabIndex: C,
        type: E,
        value: k,
      } = t,
      $ = K(t, TP),
      [_, T] = ti({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      N = or(),
      z = (O) => {
        h && h(O), N && N.onFocus && N.onFocus(O);
      },
      L = (O) => {
        P && P(O), N && N.onBlur && N.onBlur(O);
      },
      B = (O) => {
        if (O.nativeEvent.defaultPrevented) return;
        const W = O.target.checked;
        T(W), m && m(O, W);
      };
    let I = l;
    N && typeof I > "u" && (I = N.disabled);
    const j = E === "checkbox" || E === "radio",
      F = v({}, t, { checked: _, disabled: I, disableFocusRipple: u, edge: c }),
      R = _P(F);
    return S.jsxs(
      OP,
      v(
        {
          component: "span",
          className: G(R.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: I,
          tabIndex: null,
          role: void 0,
          onFocus: z,
          onBlur: L,
          ownerState: F,
          ref: n,
        },
        $,
        {
          children: [
            S.jsx(
              NP,
              v(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: a,
                  className: R.input,
                  disabled: I,
                  id: j ? f : void 0,
                  name: y,
                  onChange: B,
                  readOnly: d,
                  ref: w,
                  required: g,
                  ownerState: F,
                  tabIndex: C,
                  type: E,
                },
                E === "checkbox" && k === void 0 ? {} : { value: k },
                b,
              ),
            ),
            _ ? i : p,
          ],
        },
      ),
    );
  }),
  IP = MP;
function LP(e) {
  return fe("MuiSwitch", e);
}
const AP = le("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  kt = AP,
  zP = ["className", "color", "edge", "size", "sx"],
  BP = (e) => {
    const {
        classes: t,
        edge: n,
        size: r,
        color: o,
        checked: i,
        disabled: s,
      } = e,
      a = {
        root: ["root", n && `edge${X(n)}`, `size${X(r)}`],
        switchBase: [
          "switchBase",
          `color${X(o)}`,
          i && "checked",
          s && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      l = he(a, LP, t);
    return v({}, t, l);
  },
  jP = V("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.edge && t[`edge${X(n.edge)}`], t[`size${X(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    v(
      {
        display: "inline-flex",
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: "hidden",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: "middle",
        "@media print": { colorAdjust: "exact" },
      },
      e.edge === "start" && { marginLeft: -8 },
      e.edge === "end" && { marginRight: -8 },
      e.size === "small" && {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${kt.thumb}`]: { width: 16, height: 16 },
        [`& .${kt.switchBase}`]: {
          padding: 4,
          [`&.${kt.checked}`]: { transform: "translateX(16px)" },
        },
      },
    ),
  ),
  FP = V(IP, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.switchBase,
        { [`& .${kt.input}`]: t.input },
        n.color !== "default" && t[`color${X(n.color)}`],
      ];
    },
  })(
    ({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${kt.checked}`]: { transform: "translateX(20px)" },
      [`&.${kt.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`,
      },
      [`&.${kt.checked} + .${kt.track}`]: { opacity: 0.5 },
      [`&.${kt.disabled} + .${kt.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${kt.input}`]: { left: "-100%", width: "300%" },
    }),
    ({ theme: e, ownerState: t }) =>
      v(
        {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : qe(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${kt.checked}`]: {
            color: (e.vars || e).palette[t.color].main,
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            [`&.${kt.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                : `${e.palette.mode === "light" ? wp(e.palette[t.color].main, 0.62) : bp(e.palette[t.color].main, 0.55)}`,
            },
          },
          [`&.${kt.checked} + .${kt.track}`]: {
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        },
      ),
  ),
  DP = V("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: e.transitions.create(["opacity", "background-color"], {
      duration: e.transitions.duration.shortest,
    }),
    backgroundColor: e.vars
      ? e.vars.palette.common.onBackground
      : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
    opacity: e.vars
      ? e.vars.opacity.switchTrack
      : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
  })),
  WP = V("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (e, t) => t.thumb,
  })(({ theme: e }) => ({
    boxShadow: (e.vars || e).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%",
  })),
  UP = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiSwitch" }),
      {
        className: o,
        color: i = "primary",
        edge: s = !1,
        size: a = "medium",
        sx: l,
      } = r,
      u = K(r, zP),
      c = v({}, r, { color: i, edge: s, size: a }),
      p = BP(c),
      f = S.jsx(WP, { className: p.thumb, ownerState: c });
    return S.jsxs(jP, {
      className: G(p.root, o),
      sx: l,
      ownerState: c,
      children: [
        S.jsx(
          FP,
          v(
            {
              type: "checkbox",
              icon: f,
              checkedIcon: f,
              ref: n,
              ownerState: c,
            },
            u,
            { classes: v({}, p, { root: p.switchBase }) },
          ),
        ),
        S.jsx(DP, { className: p.track, ownerState: c }),
      ],
    });
  }),
  Np = UP;
function VP(e) {
  return fe("MuiButton", e);
}
const HP = le("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Ea = HP,
  qP = x.createContext({}),
  KP = qP,
  GP = x.createContext(void 0),
  YP = GP,
  XP = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  QP = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${X(t)}`,
          `size${X(o)}`,
          `${i}Size${X(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${X(o)}`],
        endIcon: ["endIcon", `iconSize${X(o)}`],
      },
      l = he(a, VP, s);
    return v({}, s, l);
  },
  s1 = (e) =>
    v(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
    ),
  JP = V(Xs, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${X(n.color)}`],
        t[`size${X(n.size)}`],
        t[`${n.variant}Size${X(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return v(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short },
          ),
          "&:hover": v(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : qe(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              },
          ),
          "&:active": v(
            {},
            t.variant === "contained" && {
              boxShadow: (e.vars || e).shadows[8],
            },
          ),
          [`&.${Ea.focusVisible}`]: v(
            {},
            t.variant === "contained" && {
              boxShadow: (e.vars || e).shadows[6],
            },
          ),
          [`&.${Ea.disabled}`]: v(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            },
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${qe(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" },
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Ea.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Ea.disabled}`]: { boxShadow: "none" },
      },
  ),
  ZP = V("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${X(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    v(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      s1(e),
    ),
  ),
  eR = V("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${X(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    v(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      s1(e),
    ),
  ),
  tR = x.forwardRef(function (t, n) {
    const r = x.useContext(KP),
      o = x.useContext(YP),
      i = ip(r, t),
      s = pe({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: p = !1,
        disableElevation: f = !1,
        disableFocusRipple: b = !1,
        endIcon: w,
        focusVisibleClassName: y,
        fullWidth: P = !1,
        size: m = "medium",
        startIcon: h,
        type: d,
        variant: g = "text",
      } = s,
      C = K(s, XP),
      E = v({}, s, {
        color: l,
        component: u,
        disabled: p,
        disableElevation: f,
        disableFocusRipple: b,
        fullWidth: P,
        size: m,
        type: d,
        variant: g,
      }),
      k = QP(E),
      $ =
        h && S.jsx(ZP, { className: k.startIcon, ownerState: E, children: h }),
      _ = w && S.jsx(eR, { className: k.endIcon, ownerState: E, children: w }),
      T = o || "";
    return S.jsxs(
      JP,
      v(
        {
          ownerState: E,
          className: G(r.className, k.root, c, T),
          component: u,
          disabled: p,
          focusRipple: !b,
          focusVisibleClassName: G(k.focusVisible, y),
          ref: n,
          type: d,
        },
        C,
        { classes: k, children: [$, a, _] },
      ),
    );
  }),
  Wu = tR,
  Ym = Ep({
    palette: {
      grey: { main: Ad[200], dark: Ad[300] },
      primary: { dark: "#092037", main: "#15314d" },
    },
  }),
  Pa = Ep({ palette: { mode: "dark" } });
function Xn(e, t, n = () => {}) {
  console.log(`Making post request to ${e} with ${JSON.stringify(t)}`);
  var r = new XMLHttpRequest();
  r.open("POST", e, !0),
    r.setRequestHeader("Content-Type", "application/json"),
    r.send(JSON.stringify(t)),
    (r.onload = () => n(r));
}
function nR(e, t) {
  return new Promise((n) => {
    console.log(`Making post request to ${e} with ${JSON.stringify(t)}`);
    var r = new XMLHttpRequest();
    r.open("POST", e, !0),
      r.setRequestHeader("Content-Type", "application/json"),
      r.send(JSON.stringify(t)),
      (r.onload = () => n(r));
  });
}
function Qr(e, t) {
  const n = x.useRef(!1);
  x.useEffect(() => {
    n.current ? e() : (n.current = !0);
  }, t);
}
const Vd = () => S.jsx("br", {});
function sr() {
  const e = Cu(ku);
  return e[Eu] || e;
}
const rR = x.createContext(),
  Xm = rR;
function oR(e) {
  return fe("MuiGrid", e);
}
const iR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  sR = ["column-reverse", "column", "row-reverse", "row"],
  aR = ["nowrap", "wrap-reverse", "wrap"],
  Ii = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Is = le("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...iR.map((e) => `spacing-xs-${e}`),
    ...sR.map((e) => `direction-xs-${e}`),
    ...aR.map((e) => `wrap-xs-${e}`),
    ...Ii.map((e) => `grid-xs-${e}`),
    ...Ii.map((e) => `grid-sm-${e}`),
    ...Ii.map((e) => `grid-md-${e}`),
    ...Ii.map((e) => `grid-lg-${e}`),
    ...Ii.map((e) => `grid-xl-${e}`),
  ]),
  lR = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function qo(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function uR({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const s = Yr({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == "object" ? s[o] : s;
      if (a == null) return r;
      const l = `${Math.round((n / a) * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const p = `calc(${l} + ${qo(c)})`;
          u = { flexBasis: p, maxWidth: p };
        }
      }
      i = v({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function cR({ theme: e, ownerState: t }) {
  const n = Yr({ values: t.direction, breakpoints: e.breakpoints.values });
  return Bt({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${Is.item}`] = { maxWidth: "none" }),
      o
    );
  });
}
function a1({ breakpoints: e, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function dR({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Yr({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = a1({ breakpoints: e.breakpoints.values, values: i })),
      (o = Bt({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              marginTop: `-${qo(c)}`,
              [`& > .${Is.item}`]: { paddingTop: qo(c) },
            }
          : (u = s) != null && u.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${Is.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function fR({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Yr({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = a1({ breakpoints: e.breakpoints.values, values: i })),
      (o = Bt({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              width: `calc(100% + ${qo(c)})`,
              marginLeft: `-${qo(c)}`,
              [`& > .${Is.item}`]: { paddingLeft: qo(c) },
            }
          : (u = s) != null && u.includes(l)
            ? {}
            : {
                width: "100%",
                marginLeft: 0,
                [`& > .${Is.item}`]: { paddingLeft: 0 },
              };
      }));
  }
  return o;
}
function pR(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const hR = V("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: a,
        zeroMinWidth: l,
        breakpoints: u,
      } = n;
    let c = [];
    r && (c = pR(s, u, t));
    const p = [];
    return (
      u.forEach((f) => {
        const b = n[f];
        b && p.push(t[`grid-${f}-${String(b)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...c,
        o !== "row" && t[`direction-xs-${String(o)}`],
        a !== "wrap" && t[`wrap-xs-${String(a)}`],
        ...p,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    v(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap },
    ),
  cR,
  dR,
  fR,
  uR,
);
function mR(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const vR = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: l,
    } = e;
    let u = [];
    n && (u = mR(i, l));
    const c = [];
    l.forEach((f) => {
      const b = e[f];
      b && c.push(`grid-${f}-${String(b)}`);
    });
    const p = {
      root: [
        "root",
        n && "container",
        o && "item",
        a && "zeroMinWidth",
        ...u,
        r !== "row" && `direction-xs-${String(r)}`,
        s !== "wrap" && `wrap-xs-${String(s)}`,
        ...c,
      ],
    };
    return he(p, oR, t);
  },
  gR = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = sr(),
      i = Ks(r),
      {
        className: s,
        columns: a,
        columnSpacing: l,
        component: u = "div",
        container: c = !1,
        direction: p = "row",
        item: f = !1,
        rowSpacing: b,
        spacing: w = 0,
        wrap: y = "wrap",
        zeroMinWidth: P = !1,
      } = i,
      m = K(i, lR),
      h = b || w,
      d = l || w,
      g = x.useContext(Xm),
      C = c ? a || 12 : g,
      E = {},
      k = v({}, m);
    o.keys.forEach((T) => {
      m[T] != null && ((E[T] = m[T]), delete k[T]);
    });
    const $ = v(
        {},
        i,
        {
          columns: C,
          container: c,
          direction: p,
          item: f,
          rowSpacing: h,
          columnSpacing: d,
          wrap: y,
          zeroMinWidth: P,
          spacing: w,
        },
        E,
        { breakpoints: o.keys },
      ),
      _ = vR($);
    return S.jsx(Xm.Provider, {
      value: C,
      children: S.jsx(
        hR,
        v({ ownerState: $, className: G(_.root, s), as: u, ref: n }, k),
      ),
    });
  }),
  Mp = gR;
function yR(e) {
  return S.jsx(Mp, {
    container: !0,
    spacing: 0,
    alignItems: "baseline",
    style: { justifyContent: "center", paddingBottom: "20px" },
    children: e.children,
  });
}
var Ip = {},
  Oc = {};
function xR(e) {
  return fe("MuiSvgIcon", e);
}
le("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const bR = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  wR = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`],
      };
    return he(o, xR, r);
  },
  SR = V("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${X(n.color)}`],
        t[`fontSize${X(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, p, f, b, w;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (p =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? p
          : {
              action:
                (b = (e.vars || e).palette) == null || (b = b.action) == null
                  ? void 0
                  : b.active,
              disabled:
                (w = (e.vars || e).palette) == null || (w = w.action) == null
                  ? void 0
                  : w.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Hd = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: p,
        viewBox: f = "0 0 24 24",
      } = r,
      b = K(r, bR),
      w = x.isValidElement(o) && o.type === "svg",
      y = v({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: w,
      }),
      P = {};
    c || (P.viewBox = f);
    const m = wR(y);
    return S.jsxs(
      SR,
      v(
        {
          as: a,
          className: G(m.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": p ? void 0 : !0,
          role: p ? "img" : void 0,
          ref: n,
        },
        P,
        b,
        w && o.props,
        {
          ownerState: y,
          children: [
            w ? o.props.children : o,
            p ? S.jsx("title", { children: p }) : null,
          ],
        },
      ),
    );
  });
Hd.muiName = "SvgIcon";
function l1(e, t) {
  function n(r, o) {
    return S.jsx(
      Hd,
      v({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
    );
  }
  return (n.muiName = Hd.muiName), x.memo(x.forwardRef(n));
}
const CR = {
    configure: (e) => {
      xp.configure(e);
    },
  },
  kR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: X,
        createChainedFunction: zd,
        createSvgIcon: l1,
        debounce: Au,
        deprecatedPropType: ck,
        isMuiElement: as,
        ownerDocument: st,
        ownerWindow: Dn,
        requirePropFactory: dk,
        setRef: Al,
        unstable_ClassNameGenerator: CR,
        unstable_useEnhancedEffect: Yt,
        unstable_useId: zu,
        unsupportedProp: pk,
        useControlled: ti,
        useEventCallback: ln,
        useForkRef: Ve,
        useIsFocusVisible: ju,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ER = nr(kR);
var Qm;
function Uu() {
  return (
    Qm ||
      ((Qm = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = ER;
      })(Oc)),
    Oc
  );
}
var PR = fi;
Object.defineProperty(Ip, "__esModule", { value: !0 });
var u1 = (Ip.default = void 0),
  RR = PR(Uu()),
  $R = S;
u1 = Ip.default = (0, RR.default)(
  (0, $R.jsx)("path", { d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" }),
  "Warning",
);
const c1 = "base";
function TR(e) {
  return `${c1}--${e}`;
}
function _R(e, t) {
  return `${c1}-${e}-${t}`;
}
function d1(e, t) {
  const n = Ay[t];
  return n ? TR(n) : _R(e, t);
}
function OR(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = d1(e, r);
    }),
    n
  );
}
const NR = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function MR(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function IR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function LR(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    IR(e)
  );
}
function AR(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(NR)).forEach((r, o) => {
      const i = MR(r);
      i === -1 ||
        !LR(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex,
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function zR() {
  return !0;
}
function BR(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = AR,
      isEnabled: s = zR,
      open: a,
    } = e,
    l = x.useRef(!1),
    u = x.useRef(null),
    c = x.useRef(null),
    p = x.useRef(null),
    f = x.useRef(null),
    b = x.useRef(!1),
    w = x.useRef(null),
    y = Ve(t.ref, w),
    P = x.useRef(null);
  x.useEffect(() => {
    !a || !w.current || (b.current = !n);
  }, [n, a]),
    x.useEffect(() => {
      if (!a || !w.current) return;
      const d = st(w.current);
      return (
        w.current.contains(d.activeElement) ||
          (w.current.hasAttribute("tabIndex") ||
            w.current.setAttribute("tabIndex", "-1"),
          b.current && w.current.focus()),
        () => {
          o ||
            (p.current &&
              p.current.focus &&
              ((l.current = !0), p.current.focus()),
            (p.current = null));
        }
      );
    }, [a]),
    x.useEffect(() => {
      if (!a || !w.current) return;
      const d = st(w.current),
        g = (k) => {
          (P.current = k),
            !(r || !s() || k.key !== "Tab") &&
              d.activeElement === w.current &&
              k.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        C = () => {
          const k = w.current;
          if (k === null) return;
          if (!d.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            k.contains(d.activeElement) ||
            (r &&
              d.activeElement !== u.current &&
              d.activeElement !== c.current)
          )
            return;
          if (d.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!b.current) return;
          let $ = [];
          if (
            ((d.activeElement === u.current || d.activeElement === c.current) &&
              ($ = i(w.current)),
            $.length > 0)
          ) {
            var _, T;
            const N = !!(
                (_ = P.current) != null &&
                _.shiftKey &&
                ((T = P.current) == null ? void 0 : T.key) === "Tab"
              ),
              z = $[0],
              L = $[$.length - 1];
            typeof z != "string" &&
              typeof L != "string" &&
              (N ? L.focus() : z.focus());
          } else k.focus();
        };
      d.addEventListener("focusin", C), d.addEventListener("keydown", g, !0);
      const E = setInterval(() => {
        d.activeElement && d.activeElement.tagName === "BODY" && C();
      }, 50);
      return () => {
        clearInterval(E),
          d.removeEventListener("focusin", C),
          d.removeEventListener("keydown", g, !0);
      };
    }, [n, r, o, s, a, i]);
  const m = (d) => {
      p.current === null && (p.current = d.relatedTarget),
        (b.current = !0),
        (f.current = d.target);
      const g = t.props.onFocus;
      g && g(d);
    },
    h = (d) => {
      p.current === null && (p.current = d.relatedTarget), (b.current = !0);
    };
  return S.jsxs(x.Fragment, {
    children: [
      S.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      x.cloneElement(t, { ref: y, onFocus: m }),
      S.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function jR(e) {
  return typeof e == "function" ? e() : e;
}
const f1 = x.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = x.useState(null),
    l = Ve(x.isValidElement(r) ? r.ref : null, n);
  if (
    (Yt(() => {
      i || a(jR(o) || document.body);
    }, [o, i]),
    Yt(() => {
      if (s && !i)
        return (
          Al(n, s),
          () => {
            Al(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (x.isValidElement(r)) {
      const u = { ref: l };
      return x.cloneElement(r, u);
    }
    return S.jsx(x.Fragment, { children: r });
  }
  return S.jsx(x.Fragment, { children: s && op.createPortal(r, s) });
});
function FR(e) {
  const t = st(e);
  return t.body === e
    ? Dn(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function us(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Jm(e) {
  return parseInt(Dn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function DR(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Zm(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !DR(s);
    a && l && us(s, o);
  });
}
function Nc(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function WR(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (FR(r)) {
      const s = Xy(st(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Jm(r) + s}px`);
      const a = st(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Jm(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = st(r).body;
    else {
      const s = r.parentElement,
        a = Dn(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i },
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function UR(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class VR {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && us(t.modalRef, !1);
    const o = UR(n);
    Zm(n, t.mount, t.modalRef, o, !0);
    const i = Nc(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Nc(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = WR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Nc(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && us(t.modalRef, n),
        Zm(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && us(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function HR(e) {
  return typeof e == "function" ? e() : e;
}
function qR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const KR = new VR();
function GR(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = KR,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: c,
      rootRef: p,
    } = e,
    f = x.useRef({}),
    b = x.useRef(null),
    w = x.useRef(null),
    y = Ve(w, p),
    [P, m] = x.useState(!c),
    h = qR(l);
  let d = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (d = !1);
  const g = () => st(b.current),
    C = () => (
      (f.current.modalRef = w.current), (f.current.mount = b.current), f.current
    ),
    E = () => {
      o.mount(C(), { disableScrollLock: r }),
        w.current && (w.current.scrollTop = 0);
    },
    k = ln(() => {
      const j = HR(t) || g().body;
      o.add(C(), j), w.current && E();
    }),
    $ = x.useCallback(() => o.isTopModal(C()), [o]),
    _ = ln((j) => {
      (b.current = j), j && (c && $() ? E() : w.current && us(w.current, d));
    }),
    T = x.useCallback(() => {
      o.remove(C(), d);
    }, [d, o]);
  x.useEffect(
    () => () => {
      T();
    },
    [T],
  ),
    x.useEffect(() => {
      c ? k() : (!h || !i) && T();
    }, [c, T, h, i, k]);
  const N = (j) => (F) => {
      var R;
      (R = j.onKeyDown) == null || R.call(j, F),
        !(F.key !== "Escape" || F.which === 229 || !$()) &&
          (n || (F.stopPropagation(), u && u(F, "escapeKeyDown")));
    },
    z = (j) => (F) => {
      var R;
      (R = j.onClick) == null || R.call(j, F),
        F.target === F.currentTarget && u && u(F, "backdropClick");
    };
  return {
    getRootProps: (j = {}) => {
      const F = ls(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const R = v({}, F, j);
      return v({ role: "presentation" }, R, { onKeyDown: N(R), ref: y });
    },
    getBackdropProps: (j = {}) => {
      const F = j;
      return v({ "aria-hidden": !0 }, F, { onClick: z(F), open: c });
    },
    getTransitionProps: () => {
      const j = () => {
          m(!1), s && s();
        },
        F = () => {
          m(!0), a && a(), i && T();
        };
      return {
        onEnter: zd(j, l == null ? void 0 : l.props.onEnter),
        onExited: zd(F, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: y,
    portalRef: _,
    isTopModal: $,
    exited: P,
    hasTransition: h,
  };
}
var At = "top",
  hn = "bottom",
  mn = "right",
  zt = "left",
  Lp = "auto",
  Qs = [At, hn, mn, zt],
  ni = "start",
  Ls = "end",
  YR = "clippingParents",
  p1 = "viewport",
  Li = "popper",
  XR = "reference",
  ev = Qs.reduce(function (e, t) {
    return e.concat([t + "-" + ni, t + "-" + Ls]);
  }, []),
  h1 = [].concat(Qs, [Lp]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ni, t + "-" + Ls]);
  }, []),
  QR = "beforeRead",
  JR = "read",
  ZR = "afterRead",
  e$ = "beforeMain",
  t$ = "main",
  n$ = "afterMain",
  r$ = "beforeWrite",
  o$ = "write",
  i$ = "afterWrite",
  s$ = [QR, JR, ZR, e$, t$, n$, r$, o$, i$];
function Wn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function so(e) {
  var t = Xt(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = Xt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ap(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Xt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function a$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !cn(i) ||
      !Wn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (s) {
        var a = o[s];
        a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
      }));
  });
}
function l$(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = s.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !cn(o) ||
          !Wn(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const u$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: a$,
  effect: l$,
  requires: ["computeStyles"],
};
function jn(e) {
  return e.split("-")[0];
}
var Jr = Math.max,
  jl = Math.min,
  ri = Math.round;
function qd() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function m1() {
  return !/^((?!chrome|android).)*safari/i.test(qd());
}
function oi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    cn(e) &&
    ((o = (e.offsetWidth > 0 && ri(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ri(r.height) / e.offsetHeight) || 1));
  var s = so(e) ? Xt(e) : window,
    a = s.visualViewport,
    l = !m1() && n,
    u = (r.left + (l && a ? a.offsetLeft : 0)) / o,
    c = (r.top + (l && a ? a.offsetTop : 0)) / i,
    p = r.width / o,
    f = r.height / i;
  return {
    width: p,
    height: f,
    top: c,
    right: u + p,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function zp(e) {
  var t = oi(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function v1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ap(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tr(e) {
  return Xt(e).getComputedStyle(e);
}
function c$(e) {
  return ["table", "td", "th"].indexOf(Wn(e)) >= 0;
}
function Or(e) {
  return ((so(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Vu(e) {
  return Wn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Ap(e) ? e.host : null) || Or(e);
}
function tv(e) {
  return !cn(e) || tr(e).position === "fixed" ? null : e.offsetParent;
}
function d$(e) {
  var t = /firefox/i.test(qd()),
    n = /Trident/i.test(qd());
  if (n && cn(e)) {
    var r = tr(e);
    if (r.position === "fixed") return null;
  }
  var o = Vu(e);
  for (Ap(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(Wn(o)) < 0; ) {
    var i = tr(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Js(e) {
  for (var t = Xt(e), n = tv(e); n && c$(n) && tr(n).position === "static"; )
    n = tv(n);
  return n &&
    (Wn(n) === "html" || (Wn(n) === "body" && tr(n).position === "static"))
    ? t
    : n || d$(e) || t;
}
function Bp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cs(e, t, n) {
  return Jr(e, jl(t, n));
}
function f$(e, t, n) {
  var r = cs(e, t, n);
  return r > n ? n : r;
}
function g1() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function y1(e) {
  return Object.assign({}, g1(), e);
}
function x1(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var p$ = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    y1(typeof t != "number" ? t : x1(t, Qs))
  );
};
function h$(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = jn(n.placement),
    l = Bp(a),
    u = [zt, mn].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = p$(o.padding, n),
      f = zp(i),
      b = l === "y" ? At : zt,
      w = l === "y" ? hn : mn,
      y =
        n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
      P = s[l] - n.rects.reference[l],
      m = Js(i),
      h = m ? (l === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      d = y / 2 - P / 2,
      g = p[b],
      C = h - f[c] - p[w],
      E = h / 2 - f[c] / 2 + d,
      k = cs(g, E, C),
      $ = l;
    n.modifiersData[r] = ((t = {}), (t[$] = k), (t.centerOffset = k - E), t);
  }
}
function m$(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (v1(t.elements.popper, o) && (t.elements.arrow = o)));
}
const v$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: h$,
  effect: m$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ii(e) {
  return e.split("-")[1];
}
var g$ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function y$(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: ri(n * o) / o || 0, y: ri(r * o) / o || 0 };
}
function nv(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    p = e.isFixed,
    f = s.x,
    b = f === void 0 ? 0 : f,
    w = s.y,
    y = w === void 0 ? 0 : w,
    P = typeof c == "function" ? c({ x: b, y }) : { x: b, y };
  (b = P.x), (y = P.y);
  var m = s.hasOwnProperty("x"),
    h = s.hasOwnProperty("y"),
    d = zt,
    g = At,
    C = window;
  if (u) {
    var E = Js(n),
      k = "clientHeight",
      $ = "clientWidth";
    if (
      (E === Xt(n) &&
        ((E = Or(n)),
        tr(E).position !== "static" &&
          a === "absolute" &&
          ((k = "scrollHeight"), ($ = "scrollWidth"))),
      (E = E),
      o === At || ((o === zt || o === mn) && i === Ls))
    ) {
      g = hn;
      var _ = p && E === C && C.visualViewport ? C.visualViewport.height : E[k];
      (y -= _ - r.height), (y *= l ? 1 : -1);
    }
    if (o === zt || ((o === At || o === hn) && i === Ls)) {
      d = mn;
      var T = p && E === C && C.visualViewport ? C.visualViewport.width : E[$];
      (b -= T - r.width), (b *= l ? 1 : -1);
    }
  }
  var N = Object.assign({ position: a }, u && g$),
    z = c === !0 ? y$({ x: b, y }, Xt(n)) : { x: b, y };
  if (((b = z.x), (y = z.y), l)) {
    var L;
    return Object.assign(
      {},
      N,
      ((L = {}),
      (L[g] = h ? "0" : ""),
      (L[d] = m ? "0" : ""),
      (L.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + b + "px, " + y + "px)"
          : "translate3d(" + b + "px, " + y + "px, 0)"),
      L),
    );
  }
  return Object.assign(
    {},
    N,
    ((t = {}),
    (t[g] = h ? y + "px" : ""),
    (t[d] = m ? b + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function x$(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    s = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: jn(t.placement),
      variation: ii(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      nv(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        nv(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const b$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: x$,
  data: {},
};
var Ra = { passive: !0 };
function w$(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    s = r.resize,
    a = s === void 0 ? !0 : s,
    l = Xt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Ra);
      }),
    a && l.addEventListener("resize", n.update, Ra),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Ra);
        }),
        a && l.removeEventListener("resize", n.update, Ra);
    }
  );
}
const S$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: w$,
  data: {},
};
var C$ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function il(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return C$[t];
  });
}
var k$ = { start: "end", end: "start" };
function rv(e) {
  return e.replace(/start|end/g, function (t) {
    return k$[t];
  });
}
function jp(e) {
  var t = Xt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Fp(e) {
  return oi(Or(e)).left + jp(e).scrollLeft;
}
function E$(e, t) {
  var n = Xt(e),
    r = Or(e),
    o = n.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    var u = m1();
    (u || (!u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a + Fp(e), y: l };
}
function P$(e) {
  var t,
    n = Or(e),
    r = jp(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Jr(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0,
    ),
    s = Jr(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0,
    ),
    a = -r.scrollLeft + Fp(e),
    l = -r.scrollTop;
  return (
    tr(o || n).direction === "rtl" &&
      (a += Jr(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function Dp(e) {
  var t = tr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function b1(e) {
  return ["html", "body", "#document"].indexOf(Wn(e)) >= 0
    ? e.ownerDocument.body
    : cn(e) && Dp(e)
      ? e
      : b1(Vu(e));
}
function ds(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = b1(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Xt(r),
    s = o ? [i].concat(i.visualViewport || [], Dp(r) ? r : []) : r,
    a = t.concat(s);
  return o ? a : a.concat(ds(Vu(s)));
}
function Kd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function R$(e, t) {
  var n = oi(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function ov(e, t, n) {
  return t === p1 ? Kd(E$(e, n)) : so(t) ? R$(t, n) : Kd(P$(Or(e)));
}
function $$(e) {
  var t = ds(Vu(e)),
    n = ["absolute", "fixed"].indexOf(tr(e).position) >= 0,
    r = n && cn(e) ? Js(e) : e;
  return so(r)
    ? t.filter(function (o) {
        return so(o) && v1(o, r) && Wn(o) !== "body";
      })
    : [];
}
function T$(e, t, n, r) {
  var o = t === "clippingParents" ? $$(e) : [].concat(t),
    i = [].concat(o, [n]),
    s = i[0],
    a = i.reduce(
      function (l, u) {
        var c = ov(e, u, r);
        return (
          (l.top = Jr(c.top, l.top)),
          (l.right = jl(c.right, l.right)),
          (l.bottom = jl(c.bottom, l.bottom)),
          (l.left = Jr(c.left, l.left)),
          l
        );
      },
      ov(e, s, r),
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function w1(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? jn(r) : null,
    i = r ? ii(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case At:
      l = { x: s, y: t.y - n.height };
      break;
    case hn:
      l = { x: s, y: t.y + t.height };
      break;
    case mn:
      l = { x: t.x + t.width, y: a };
      break;
    case zt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Bp(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case ni:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ls:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function As(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    s = i === void 0 ? e.strategy : i,
    a = n.boundary,
    l = a === void 0 ? YR : a,
    u = n.rootBoundary,
    c = u === void 0 ? p1 : u,
    p = n.elementContext,
    f = p === void 0 ? Li : p,
    b = n.altBoundary,
    w = b === void 0 ? !1 : b,
    y = n.padding,
    P = y === void 0 ? 0 : y,
    m = y1(typeof P != "number" ? P : x1(P, Qs)),
    h = f === Li ? XR : Li,
    d = e.rects.popper,
    g = e.elements[w ? h : f],
    C = T$(so(g) ? g : g.contextElement || Or(e.elements.popper), l, c, s),
    E = oi(e.elements.reference),
    k = w1({ reference: E, element: d, strategy: "absolute", placement: o }),
    $ = Kd(Object.assign({}, d, k)),
    _ = f === Li ? $ : E,
    T = {
      top: C.top - _.top + m.top,
      bottom: _.bottom - C.bottom + m.bottom,
      left: C.left - _.left + m.left,
      right: _.right - C.right + m.right,
    },
    N = e.modifiersData.offset;
  if (f === Li && N) {
    var z = N[o];
    Object.keys(T).forEach(function (L) {
      var B = [mn, hn].indexOf(L) >= 0 ? 1 : -1,
        I = [At, hn].indexOf(L) >= 0 ? "y" : "x";
      T[L] += z[I] * B;
    });
  }
  return T;
}
function _$(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? h1 : l,
    c = ii(r),
    p = c
      ? a
        ? ev
        : ev.filter(function (w) {
            return ii(w) === c;
          })
      : Qs,
    f = p.filter(function (w) {
      return u.indexOf(w) >= 0;
    });
  f.length === 0 && (f = p);
  var b = f.reduce(function (w, y) {
    return (
      (w[y] = As(e, { placement: y, boundary: o, rootBoundary: i, padding: s })[
        jn(y)
      ]),
      w
    );
  }, {});
  return Object.keys(b).sort(function (w, y) {
    return b[w] - b[y];
  });
}
function O$(e) {
  if (jn(e) === Lp) return [];
  var t = il(e);
  return [rv(e), t, rv(t)];
}
function N$(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        s = n.altAxis,
        a = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        p = n.rootBoundary,
        f = n.altBoundary,
        b = n.flipVariations,
        w = b === void 0 ? !0 : b,
        y = n.allowedAutoPlacements,
        P = t.options.placement,
        m = jn(P),
        h = m === P,
        d = l || (h || !w ? [il(P)] : O$(P)),
        g = [P].concat(d).reduce(function (Y, ie) {
          return Y.concat(
            jn(ie) === Lp
              ? _$(t, {
                  placement: ie,
                  boundary: c,
                  rootBoundary: p,
                  padding: u,
                  flipVariations: w,
                  allowedAutoPlacements: y,
                })
              : ie,
          );
        }, []),
        C = t.rects.reference,
        E = t.rects.popper,
        k = new Map(),
        $ = !0,
        _ = g[0],
        T = 0;
      T < g.length;
      T++
    ) {
      var N = g[T],
        z = jn(N),
        L = ii(N) === ni,
        B = [At, hn].indexOf(z) >= 0,
        I = B ? "width" : "height",
        j = As(t, {
          placement: N,
          boundary: c,
          rootBoundary: p,
          altBoundary: f,
          padding: u,
        }),
        F = B ? (L ? mn : zt) : L ? hn : At;
      C[I] > E[I] && (F = il(F));
      var R = il(F),
        O = [];
      if (
        (i && O.push(j[z] <= 0),
        a && O.push(j[F] <= 0, j[R] <= 0),
        O.every(function (Y) {
          return Y;
        }))
      ) {
        (_ = N), ($ = !1);
        break;
      }
      k.set(N, O);
    }
    if ($)
      for (
        var W = w ? 3 : 1,
          Z = function (ie) {
            var H = g.find(function (ue) {
              var te = k.get(ue);
              if (te)
                return te.slice(0, ie).every(function (oe) {
                  return oe;
                });
            });
            if (H) return (_ = H), "break";
          },
          ee = W;
        ee > 0;
        ee--
      ) {
        var ce = Z(ee);
        if (ce === "break") break;
      }
    t.placement !== _ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = _), (t.reset = !0));
  }
}
const M$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: N$,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function iv(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function sv(e) {
  return [At, mn, hn, zt].some(function (t) {
    return e[t] >= 0;
  });
}
function I$(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = As(t, { elementContext: "reference" }),
    a = As(t, { altBoundary: !0 }),
    l = iv(s, r),
    u = iv(a, o, i),
    c = sv(l),
    p = sv(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": p,
    }));
}
const L$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: I$,
};
function A$(e, t, n) {
  var r = jn(e),
    o = [zt, At].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    s = i[0],
    a = i[1];
  return (
    (s = s || 0),
    (a = (a || 0) * o),
    [zt, mn].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function z$(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    s = h1.reduce(function (c, p) {
      return (c[p] = A$(p, t.rects, i)), c;
    }, {}),
    a = s[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const B$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: z$,
};
function j$(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = w1({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const F$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: j$,
  data: {},
};
function D$(e) {
  return e === "x" ? "y" : "x";
}
function W$(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    s = n.altAxis,
    a = s === void 0 ? !1 : s,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    p = n.padding,
    f = n.tether,
    b = f === void 0 ? !0 : f,
    w = n.tetherOffset,
    y = w === void 0 ? 0 : w,
    P = As(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: c }),
    m = jn(t.placement),
    h = ii(t.placement),
    d = !h,
    g = Bp(m),
    C = D$(g),
    E = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    $ = t.rects.popper,
    _ =
      typeof y == "function"
        ? y(Object.assign({}, t.rects, { placement: t.placement }))
        : y,
    T =
      typeof _ == "number"
        ? { mainAxis: _, altAxis: _ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
    N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (E) {
    if (i) {
      var L,
        B = g === "y" ? At : zt,
        I = g === "y" ? hn : mn,
        j = g === "y" ? "height" : "width",
        F = E[g],
        R = F + P[B],
        O = F - P[I],
        W = b ? -$[j] / 2 : 0,
        Z = h === ni ? k[j] : $[j],
        ee = h === ni ? -$[j] : -k[j],
        ce = t.elements.arrow,
        Y = b && ce ? zp(ce) : { width: 0, height: 0 },
        ie = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : g1(),
        H = ie[B],
        ue = ie[I],
        te = cs(0, k[j], Y[j]),
        oe = d ? k[j] / 2 - W - te - H - T.mainAxis : Z - te - H - T.mainAxis,
        $e = d
          ? -k[j] / 2 + W + te + ue + T.mainAxis
          : ee + te + ue + T.mainAxis,
        ne = t.elements.arrow && Js(t.elements.arrow),
        ke = ne ? (g === "y" ? ne.clientTop || 0 : ne.clientLeft || 0) : 0,
        re = (L = N == null ? void 0 : N[g]) != null ? L : 0,
        de = F + oe - re - ke,
        J = F + $e - re,
        ge = cs(b ? jl(R, de) : R, F, b ? Jr(O, J) : O);
      (E[g] = ge), (z[g] = ge - F);
    }
    if (a) {
      var Le,
        Ee = g === "x" ? At : zt,
        Fe = g === "x" ? hn : mn,
        Te = E[C],
        se = C === "y" ? "height" : "width",
        De = Te + P[Ee],
        ze = Te - P[Fe],
        xe = [At, zt].indexOf(m) !== -1,
        nt = (Le = N == null ? void 0 : N[C]) != null ? Le : 0,
        at = xe ? De : Te - k[se] - $[se] - nt + T.altAxis,
        lt = xe ? Te + k[se] + $[se] - nt - T.altAxis : ze,
        A = b && xe ? f$(at, Te, lt) : cs(b ? at : De, Te, b ? lt : ze);
      (E[C] = A), (z[C] = A - Te);
    }
    t.modifiersData[r] = z;
  }
}
const U$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: W$,
  requiresIfExists: ["offset"],
};
function V$(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function H$(e) {
  return e === Xt(e) || !cn(e) ? jp(e) : V$(e);
}
function q$(e) {
  var t = e.getBoundingClientRect(),
    n = ri(t.width) / e.offsetWidth || 1,
    r = ri(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function K$(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t),
    o = cn(t) && q$(t),
    i = Or(t),
    s = oi(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Wn(t) !== "body" || Dp(i)) && (a = H$(t)),
      cn(t)
        ? ((l = oi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = Fp(i))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function G$(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function Y$(e) {
  var t = G$(e);
  return s$.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      }),
    );
  }, []);
}
function X$(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Q$(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var av = { placement: "bottom", modifiers: [], strategy: "absolute" };
function lv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function J$(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? av : o;
  return function (a, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, av, i),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      p = [],
      f = !1,
      b = {
        state: c,
        setOptions: function (m) {
          var h = typeof m == "function" ? m(c.options) : m;
          y(),
            (c.options = Object.assign({}, i, c.options, h)),
            (c.scrollParents = {
              reference: so(a)
                ? ds(a)
                : a.contextElement
                  ? ds(a.contextElement)
                  : [],
              popper: ds(l),
            });
          var d = Y$(Q$([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = d.filter(function (g) {
              return g.enabled;
            })),
            w(),
            b.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var m = c.elements,
              h = m.reference,
              d = m.popper;
            if (lv(h, d)) {
              (c.rects = {
                reference: K$(h, Js(d), c.options.strategy === "fixed"),
                popper: zp(d),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (T) {
                  return (c.modifiersData[T.name] = Object.assign({}, T.data));
                });
              for (var g = 0; g < c.orderedModifiers.length; g++) {
                if (c.reset === !0) {
                  (c.reset = !1), (g = -1);
                  continue;
                }
                var C = c.orderedModifiers[g],
                  E = C.fn,
                  k = C.options,
                  $ = k === void 0 ? {} : k,
                  _ = C.name;
                typeof E == "function" &&
                  (c = E({ state: c, options: $, name: _, instance: b }) || c);
              }
            }
          }
        },
        update: X$(function () {
          return new Promise(function (P) {
            b.forceUpdate(), P(c);
          });
        }),
        destroy: function () {
          y(), (f = !0);
        },
      };
    if (!lv(a, l)) return b;
    b.setOptions(u).then(function (P) {
      !f && u.onFirstUpdate && u.onFirstUpdate(P);
    });
    function w() {
      c.orderedModifiers.forEach(function (P) {
        var m = P.name,
          h = P.options,
          d = h === void 0 ? {} : h,
          g = P.effect;
        if (typeof g == "function") {
          var C = g({ state: c, name: m, instance: b, options: d }),
            E = function () {};
          p.push(C || E);
        }
      });
    }
    function y() {
      p.forEach(function (P) {
        return P();
      }),
        (p = []);
    }
    return b;
  };
}
var Z$ = [S$, F$, b$, u$, B$, M$, U$, v$, L$],
  eT = J$({ defaultModifiers: Z$ });
const S1 = "Popper";
function tT(e) {
  return d1(S1, e);
}
OR(S1, ["root"]);
const nT = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  rT = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function oT(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Gd(e) {
  return typeof e == "function" ? e() : e;
}
function iT(e) {
  return e.nodeType !== void 0;
}
const sT = () => he({ root: ["root"] }, zE(tT)),
  aT = {},
  lT = x.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: s,
        disablePortal: a,
        modifiers: l,
        open: u,
        placement: c,
        popperOptions: p,
        popperRef: f,
        slotProps: b = {},
        slots: w = {},
        TransitionProps: y,
      } = t,
      P = K(t, nT),
      m = x.useRef(null),
      h = Ve(m, n),
      d = x.useRef(null),
      g = Ve(d, f),
      C = x.useRef(g);
    Yt(() => {
      C.current = g;
    }, [g]),
      x.useImperativeHandle(f, () => d.current, []);
    const E = oT(c, s),
      [k, $] = x.useState(E),
      [_, T] = x.useState(Gd(o));
    x.useEffect(() => {
      d.current && d.current.forceUpdate();
    }),
      x.useEffect(() => {
        o && T(Gd(o));
      }, [o]),
      Yt(() => {
        if (!_ || !u) return;
        const I = (R) => {
          $(R.placement);
        };
        let j = [
          { name: "preventOverflow", options: { altBoundary: a } },
          { name: "flip", options: { altBoundary: a } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: R }) => {
              I(R);
            },
          },
        ];
        l != null && (j = j.concat(l)),
          p && p.modifiers != null && (j = j.concat(p.modifiers));
        const F = eT(_, m.current, v({ placement: E }, p, { modifiers: j }));
        return (
          C.current(F),
          () => {
            F.destroy(), C.current(null);
          }
        );
      }, [_, a, l, u, p, E]);
    const N = { placement: k };
    y !== null && (N.TransitionProps = y);
    const z = sT(),
      L = (r = w.root) != null ? r : "div",
      B = Pt({
        elementType: L,
        externalSlotProps: b.root,
        externalForwardedProps: P,
        additionalProps: { role: "tooltip", ref: h },
        ownerState: t,
        className: z.root,
      });
    return S.jsx(L, v({}, B, { children: typeof i == "function" ? i(N) : i }));
  }),
  uT = x.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: s = "ltr",
        disablePortal: a = !1,
        keepMounted: l = !1,
        modifiers: u,
        open: c,
        placement: p = "bottom",
        popperOptions: f = aT,
        popperRef: b,
        style: w,
        transition: y = !1,
        slotProps: P = {},
        slots: m = {},
      } = t,
      h = K(t, rT),
      [d, g] = x.useState(!0),
      C = () => {
        g(!1);
      },
      E = () => {
        g(!0);
      };
    if (!l && !c && (!y || d)) return null;
    let k;
    if (i) k = i;
    else if (r) {
      const T = Gd(r);
      k = T && iT(T) ? st(T).body : st(null).body;
    }
    const $ = !c && l && (!y || d) ? "none" : void 0,
      _ = y ? { in: c, onEnter: C, onExited: E } : void 0;
    return S.jsx(f1, {
      disablePortal: a,
      container: k,
      children: S.jsx(
        lT,
        v(
          {
            anchorEl: r,
            direction: s,
            disablePortal: a,
            modifiers: u,
            ref: n,
            open: y ? !d : c,
            placement: p,
            popperOptions: f,
            popperRef: b,
            slotProps: P,
            slots: m,
          },
          h,
          {
            style: v({ position: "fixed", top: 0, left: 0, display: $ }, w),
            TransitionProps: _,
            children: o,
          },
        ),
      ),
    });
  }),
  cT = 2;
function C1(e, t) {
  return e - t;
}
function uv(e, t) {
  var n;
  const { index: r } =
    (n = e.reduce((o, i, s) => {
      const a = Math.abs(t - i);
      return o === null || a < o.distance || a === o.distance
        ? { distance: a, index: s }
        : o;
    }, null)) != null
      ? n
      : {};
  return r;
}
function $a(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const n = e;
    for (let r = 0; r < n.changedTouches.length; r += 1) {
      const o = n.changedTouches[r];
      if (o.identifier === t.current) return { x: o.clientX, y: o.clientY };
    }
    return !1;
  }
  return { x: e.clientX, y: e.clientY };
}
function Fl(e, t, n) {
  return ((e - t) * 100) / (n - t);
}
function dT(e, t, n) {
  return (n - t) * e + t;
}
function fT(e) {
  if (Math.abs(e) < 1) {
    const n = e.toExponential().split("e-"),
      r = n[0].split(".")[1];
    return (r ? r.length : 0) + parseInt(n[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function pT(e, t, n) {
  const r = Math.round((e - n) / t) * t + n;
  return Number(r.toFixed(fT(t)));
}
function cv({ values: e, newValue: t, index: n }) {
  const r = e.slice();
  return (r[n] = t), r.sort(C1);
}
function Ta({ sliderRef: e, activeIndex: t, setActive: n }) {
  var r, o;
  const i = st(e.current);
  if (
    !((r = e.current) != null && r.contains(i.activeElement)) ||
    Number(
      i == null || (o = i.activeElement) == null
        ? void 0
        : o.getAttribute("data-index"),
    ) !== t
  ) {
    var s;
    (s = e.current) == null ||
      s.querySelector(`[type="range"][data-index="${t}"]`).focus();
  }
  n && n(t);
}
function _a(e, t) {
  return typeof e == "number" && typeof t == "number"
    ? e === t
    : typeof e == "object" && typeof t == "object"
      ? IE(e, t)
      : !1;
}
const hT = {
    horizontal: {
      offset: (e) => ({ left: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    "horizontal-reverse": {
      offset: (e) => ({ right: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    vertical: {
      offset: (e) => ({ bottom: `${e}%` }),
      leap: (e) => ({ height: `${e}%` }),
    },
  },
  mT = (e) => e;
let Oa;
function dv() {
  return (
    Oa === void 0 &&
      (typeof CSS < "u" && typeof CSS.supports == "function"
        ? (Oa = CSS.supports("touch-action", "none"))
        : (Oa = !0)),
    Oa
  );
}
function vT(e) {
  const {
      "aria-labelledby": t,
      defaultValue: n,
      disabled: r = !1,
      disableSwap: o = !1,
      isRtl: i = !1,
      marks: s = !1,
      max: a = 100,
      min: l = 0,
      name: u,
      onChange: c,
      onChangeCommitted: p,
      orientation: f = "horizontal",
      rootRef: b,
      scale: w = mT,
      step: y = 1,
      shiftStep: P = 10,
      tabIndex: m,
      value: h,
    } = e,
    d = x.useRef(),
    [g, C] = x.useState(-1),
    [E, k] = x.useState(-1),
    [$, _] = x.useState(!1),
    T = x.useRef(0),
    [N, z] = ti({ controlled: h, default: n ?? l, name: "Slider" }),
    L =
      c &&
      ((A, M, q) => {
        const me = A.nativeEvent || A,
          be = new me.constructor(me.type, me);
        Object.defineProperty(be, "target", {
          writable: !0,
          value: { value: M, name: u },
        }),
          c(be, M, q);
      }),
    B = Array.isArray(N);
  let I = B ? N.slice().sort(C1) : [N];
  I = I.map((A) => (A == null ? l : So(A, l, a)));
  const j =
      s === !0 && y !== null
        ? [...Array(Math.floor((a - l) / y) + 1)].map((A, M) => ({
            value: l + y * M,
          }))
        : s || [],
    F = j.map((A) => A.value),
    { isFocusVisibleRef: R, onBlur: O, onFocus: W, ref: Z } = ju(),
    [ee, ce] = x.useState(-1),
    Y = x.useRef(),
    ie = Ve(Z, Y),
    H = Ve(b, ie),
    ue = (A) => (M) => {
      var q;
      const me = Number(M.currentTarget.getAttribute("data-index"));
      W(M),
        R.current === !0 && ce(me),
        k(me),
        A == null || (q = A.onFocus) == null || q.call(A, M);
    },
    te = (A) => (M) => {
      var q;
      O(M),
        R.current === !1 && ce(-1),
        k(-1),
        A == null || (q = A.onBlur) == null || q.call(A, M);
    },
    oe = (A, M) => {
      const q = Number(A.currentTarget.getAttribute("data-index")),
        me = I[q],
        be = F.indexOf(me);
      let D = M;
      if (j && y == null) {
        const ve = F[F.length - 1];
        D > ve
          ? (D = ve)
          : D < F[0]
            ? (D = F[0])
            : (D = D < me ? F[be - 1] : F[be + 1]);
      }
      if (((D = So(D, l, a)), B)) {
        o && (D = So(D, I[q - 1] || -1 / 0, I[q + 1] || 1 / 0));
        const ve = D;
        D = cv({ values: I, newValue: D, index: q });
        let Se = q;
        o || (Se = D.indexOf(ve)), Ta({ sliderRef: Y, activeIndex: Se });
      }
      z(D), ce(q), L && !_a(D, N) && L(A, D, q), p && p(A, D);
    },
    $e = (A) => (M) => {
      var q;
      if (y !== null) {
        const me = Number(M.currentTarget.getAttribute("data-index")),
          be = I[me];
        let D = null;
        ((M.key === "ArrowLeft" || M.key === "ArrowDown") && M.shiftKey) ||
        M.key === "PageDown"
          ? (D = Math.max(be - P, l))
          : (((M.key === "ArrowRight" || M.key === "ArrowUp") && M.shiftKey) ||
              M.key === "PageUp") &&
            (D = Math.min(be + P, a)),
          D !== null && (oe(M, D), M.preventDefault());
      }
      A == null || (q = A.onKeyDown) == null || q.call(A, M);
    };
  Yt(() => {
    if (r && Y.current.contains(document.activeElement)) {
      var A;
      (A = document.activeElement) == null || A.blur();
    }
  }, [r]),
    r && g !== -1 && C(-1),
    r && ee !== -1 && ce(-1);
  const ne = (A) => (M) => {
      var q;
      (q = A.onChange) == null || q.call(A, M), oe(M, M.target.valueAsNumber);
    },
    ke = x.useRef();
  let re = f;
  i && f === "horizontal" && (re += "-reverse");
  const de = ({ finger: A, move: M = !1 }) => {
      const { current: q } = Y,
        {
          width: me,
          height: be,
          bottom: D,
          left: ve,
        } = q.getBoundingClientRect();
      let Se;
      re.indexOf("vertical") === 0
        ? (Se = (D - A.y) / be)
        : (Se = (A.x - ve) / me),
        re.indexOf("-reverse") !== -1 && (Se = 1 - Se);
      let _e;
      if (((_e = dT(Se, l, a)), y)) _e = pT(_e, y, l);
      else {
        const $n = uv(F, _e);
        _e = F[$n];
      }
      _e = So(_e, l, a);
      let Oe = 0;
      if (B) {
        M ? (Oe = ke.current) : (Oe = uv(I, _e)),
          o && (_e = So(_e, I[Oe - 1] || -1 / 0, I[Oe + 1] || 1 / 0));
        const $n = _e;
        (_e = cv({ values: I, newValue: _e, index: Oe })),
          (o && M) || ((Oe = _e.indexOf($n)), (ke.current = Oe));
      }
      return { newValue: _e, activeIndex: Oe };
    },
    J = ln((A) => {
      const M = $a(A, d);
      if (!M) return;
      if (((T.current += 1), A.type === "mousemove" && A.buttons === 0)) {
        ge(A);
        return;
      }
      const { newValue: q, activeIndex: me } = de({ finger: M, move: !0 });
      Ta({ sliderRef: Y, activeIndex: me, setActive: C }),
        z(q),
        !$ && T.current > cT && _(!0),
        L && !_a(q, N) && L(A, q, me);
    }),
    ge = ln((A) => {
      const M = $a(A, d);
      if ((_(!1), !M)) return;
      const { newValue: q } = de({ finger: M, move: !0 });
      C(-1),
        A.type === "touchend" && k(-1),
        p && p(A, q),
        (d.current = void 0),
        Ee();
    }),
    Le = ln((A) => {
      if (r) return;
      dv() || A.preventDefault();
      const M = A.changedTouches[0];
      M != null && (d.current = M.identifier);
      const q = $a(A, d);
      if (q !== !1) {
        const { newValue: be, activeIndex: D } = de({ finger: q });
        Ta({ sliderRef: Y, activeIndex: D, setActive: C }),
          z(be),
          L && !_a(be, N) && L(A, be, D);
      }
      T.current = 0;
      const me = st(Y.current);
      me.addEventListener("touchmove", J, { passive: !0 }),
        me.addEventListener("touchend", ge, { passive: !0 });
    }),
    Ee = x.useCallback(() => {
      const A = st(Y.current);
      A.removeEventListener("mousemove", J),
        A.removeEventListener("mouseup", ge),
        A.removeEventListener("touchmove", J),
        A.removeEventListener("touchend", ge);
    }, [ge, J]);
  x.useEffect(() => {
    const { current: A } = Y;
    return (
      A.addEventListener("touchstart", Le, { passive: dv() }),
      () => {
        A.removeEventListener("touchstart", Le), Ee();
      }
    );
  }, [Ee, Le]),
    x.useEffect(() => {
      r && Ee();
    }, [r, Ee]);
  const Fe = (A) => (M) => {
      var q;
      if (
        ((q = A.onMouseDown) == null || q.call(A, M),
        r || M.defaultPrevented || M.button !== 0)
      )
        return;
      M.preventDefault();
      const me = $a(M, d);
      if (me !== !1) {
        const { newValue: D, activeIndex: ve } = de({ finger: me });
        Ta({ sliderRef: Y, activeIndex: ve, setActive: C }),
          z(D),
          L && !_a(D, N) && L(M, D, ve);
      }
      T.current = 0;
      const be = st(Y.current);
      be.addEventListener("mousemove", J, { passive: !0 }),
        be.addEventListener("mouseup", ge);
    },
    Te = Fl(B ? I[0] : l, l, a),
    se = Fl(I[I.length - 1], l, a) - Te,
    De = (A = {}) => {
      const M = ls(A),
        q = { onMouseDown: Fe(M || {}) },
        me = v({}, M, q);
      return v({}, A, { ref: H }, me);
    },
    ze = (A) => (M) => {
      var q;
      (q = A.onMouseOver) == null || q.call(A, M);
      const me = Number(M.currentTarget.getAttribute("data-index"));
      k(me);
    },
    xe = (A) => (M) => {
      var q;
      (q = A.onMouseLeave) == null || q.call(A, M), k(-1);
    };
  return {
    active: g,
    axis: re,
    axisProps: hT,
    dragging: $,
    focusedThumbIndex: ee,
    getHiddenInputProps: (A = {}) => {
      var M;
      const q = ls(A),
        me = {
          onChange: ne(q || {}),
          onFocus: ue(q || {}),
          onBlur: te(q || {}),
          onKeyDown: $e(q || {}),
        },
        be = v({}, q, me);
      return v(
        {
          tabIndex: m,
          "aria-labelledby": t,
          "aria-orientation": f,
          "aria-valuemax": w(a),
          "aria-valuemin": w(l),
          name: u,
          type: "range",
          min: e.min,
          max: e.max,
          step:
            e.step === null && e.marks
              ? "any"
              : (M = e.step) != null
                ? M
                : void 0,
          disabled: r,
        },
        A,
        be,
        {
          style: v({}, Ek, {
            direction: i ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
          }),
        },
      );
    },
    getRootProps: De,
    getThumbProps: (A = {}) => {
      const M = ls(A),
        q = { onMouseOver: ze(M || {}), onMouseLeave: xe(M || {}) };
      return v({}, A, M, q);
    },
    marks: j,
    open: E,
    range: B,
    rootRef: H,
    trackLeap: se,
    trackOffset: Te,
    values: I,
    getThumbStyle: (A) => ({
      pointerEvents: g !== -1 && g !== A ? "none" : void 0,
    }),
  };
}
const gT = ["onChange", "maxRows", "minRows", "style", "value"];
function Na(e) {
  return parseInt(e, 10) || 0;
}
const yT = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function xT(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const bT = x.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
    l = K(t, gT),
    { current: u } = x.useRef(a != null),
    c = x.useRef(null),
    p = Ve(n, c),
    f = x.useRef(null),
    b = x.useCallback(() => {
      const P = c.current,
        h = Dn(P).getComputedStyle(P);
      if (h.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const d = f.current;
      (d.style.width = h.width),
        (d.value = P.value || t.placeholder || "x"),
        d.value.slice(-1) ===
          `
` && (d.value += " ");
      const g = h.boxSizing,
        C = Na(h.paddingBottom) + Na(h.paddingTop),
        E = Na(h.borderBottomWidth) + Na(h.borderTopWidth),
        k = d.scrollHeight;
      d.value = "x";
      const $ = d.scrollHeight;
      let _ = k;
      i && (_ = Math.max(Number(i) * $, _)),
        o && (_ = Math.min(Number(o) * $, _)),
        (_ = Math.max(_, $));
      const T = _ + (g === "border-box" ? C + E : 0),
        N = Math.abs(_ - k) <= 1;
      return { outerHeightStyle: T, overflowing: N };
    }, [o, i, t.placeholder]),
    w = x.useCallback(() => {
      const P = b();
      if (xT(P)) return;
      const m = c.current;
      (m.style.height = `${P.outerHeightStyle}px`),
        (m.style.overflow = P.overflowing ? "hidden" : "");
    }, [b]);
  Yt(() => {
    const P = () => {
      w();
    };
    let m;
    const h = Au(P),
      d = c.current,
      g = Dn(d);
    g.addEventListener("resize", h);
    let C;
    return (
      typeof ResizeObserver < "u" &&
        ((C = new ResizeObserver(P)), C.observe(d)),
      () => {
        h.clear(),
          cancelAnimationFrame(m),
          g.removeEventListener("resize", h),
          C && C.disconnect();
      }
    );
  }, [b, w]),
    Yt(() => {
      w();
    });
  const y = (P) => {
    u || w(), r && r(P);
  };
  return S.jsxs(x.Fragment, {
    children: [
      S.jsx("textarea", v({ value: a, onChange: y, ref: p, rows: i }, l)),
      S.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: f,
        tabIndex: -1,
        style: v({}, yT.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function wT(e) {
  return fe("MuiInputBase", e);
}
const ST = le("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  si = ST,
  CT = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  Hu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${X(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  qu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  kT = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: p,
        size: f,
        startAdornment: b,
        type: w,
      } = e,
      y = {
        root: [
          "root",
          `color${X(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          f && f !== "medium" && `size${X(f)}`,
          c && "multiline",
          b && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          p && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          w === "search" && "inputTypeSearch",
          c && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          b && "inputAdornedStart",
          i && "inputAdornedEnd",
          p && "readOnly",
        ],
      };
    return he(y, wT, t);
  },
  Ku = V("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Hu })(
    ({ theme: e, ownerState: t }) =>
      v(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${si.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          v({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" },
      ),
  ),
  Gu = V("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: qu,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = v(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return v(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${si.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${si.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" },
    );
  }),
  ET = S.jsx(Zy, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  PT = x.forwardRef(function (t, n) {
    var r;
    const o = pe({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: p,
        disabled: f,
        disableInjectingGlobalStyles: b,
        endAdornment: w,
        fullWidth: y = !1,
        id: P,
        inputComponent: m = "input",
        inputProps: h = {},
        inputRef: d,
        maxRows: g,
        minRows: C,
        multiline: E = !1,
        name: k,
        onBlur: $,
        onChange: _,
        onClick: T,
        onFocus: N,
        onKeyDown: z,
        onKeyUp: L,
        placeholder: B,
        readOnly: I,
        renderSuffix: j,
        rows: F,
        slotProps: R = {},
        slots: O = {},
        startAdornment: W,
        type: Z = "text",
        value: ee,
      } = o,
      ce = K(o, CT),
      Y = h.value != null ? h.value : ee,
      { current: ie } = x.useRef(Y != null),
      H = x.useRef(),
      ue = x.useCallback((A) => {}, []),
      te = Ve(H, d, h.ref, ue),
      [oe, $e] = x.useState(!1),
      ne = or(),
      ke = _r({
        props: o,
        muiFormControl: ne,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (ke.focused = ne ? ne.focused : oe),
      x.useEffect(() => {
        !ne && f && oe && ($e(!1), $ && $());
      }, [ne, f, oe, $]);
    const re = ne && ne.onFilled,
      de = ne && ne.onEmpty,
      J = x.useCallback(
        (A) => {
          zl(A) ? re && re() : de && de();
        },
        [re, de],
      );
    Yt(() => {
      ie && J({ value: Y });
    }, [Y, J, ie]);
    const ge = (A) => {
        if (ke.disabled) {
          A.stopPropagation();
          return;
        }
        N && N(A),
          h.onFocus && h.onFocus(A),
          ne && ne.onFocus ? ne.onFocus(A) : $e(!0);
      },
      Le = (A) => {
        $ && $(A),
          h.onBlur && h.onBlur(A),
          ne && ne.onBlur ? ne.onBlur(A) : $e(!1);
      },
      Ee = (A, ...M) => {
        if (!ie) {
          const q = A.target || H.current;
          if (q == null) throw new Error(oo(1));
          J({ value: q.value });
        }
        h.onChange && h.onChange(A, ...M), _ && _(A, ...M);
      };
    x.useEffect(() => {
      J(H.current);
    }, []);
    const Fe = (A) => {
      H.current && A.currentTarget === A.target && H.current.focus(), T && T(A);
    };
    let Te = m,
      se = h;
    E &&
      Te === "input" &&
      (F
        ? (se = v({ type: void 0, minRows: F, maxRows: F }, se))
        : (se = v({ type: void 0, maxRows: g, minRows: C }, se)),
      (Te = bT));
    const De = (A) => {
      J(
        A.animationName === "mui-auto-fill-cancel" ? H.current : { value: "x" },
      );
    };
    x.useEffect(() => {
      ne && ne.setAdornedStart(!!W);
    }, [ne, W]);
    const ze = v({}, o, {
        color: ke.color || "primary",
        disabled: ke.disabled,
        endAdornment: w,
        error: ke.error,
        focused: ke.focused,
        formControl: ne,
        fullWidth: y,
        hiddenLabel: ke.hiddenLabel,
        multiline: E,
        size: ke.size,
        startAdornment: W,
        type: Z,
      }),
      xe = kT(ze),
      nt = O.root || u.Root || Ku,
      at = R.root || c.root || {},
      lt = O.input || u.Input || Gu;
    return (
      (se = v({}, se, (r = R.input) != null ? r : c.input)),
      S.jsxs(x.Fragment, {
        children: [
          !b && ET,
          S.jsxs(
            nt,
            v(
              {},
              at,
              !Bn(nt) && { ownerState: v({}, ze, at.ownerState) },
              { ref: n, onClick: Fe },
              ce,
              {
                className: G(
                  xe.root,
                  at.className,
                  l,
                  I && "MuiInputBase-readOnly",
                ),
                children: [
                  W,
                  S.jsx(Tp.Provider, {
                    value: null,
                    children: S.jsx(
                      lt,
                      v(
                        {
                          ownerState: ze,
                          "aria-invalid": ke.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: p,
                          disabled: ke.disabled,
                          id: P,
                          onAnimationStart: De,
                          name: k,
                          placeholder: B,
                          readOnly: I,
                          required: ke.required,
                          rows: F,
                          value: Y,
                          onKeyDown: z,
                          onKeyUp: L,
                          type: Z,
                        },
                        se,
                        !Bn(lt) && {
                          as: Te,
                          ownerState: v({}, ze, se.ownerState),
                        },
                        {
                          ref: te,
                          className: G(
                            xe.input,
                            se.className,
                            I && "MuiInputBase-readOnly",
                          ),
                          onBlur: Le,
                          onChange: Ee,
                          onFocus: ge,
                        },
                      ),
                    ),
                  }),
                  w,
                  j ? j(v({}, ke, { startAdornment: W })) : null,
                ],
              },
            ),
          ),
        ],
      })
    );
  }),
  Wp = PT;
function RT(e) {
  return fe("MuiInput", e);
}
const $T = v({}, si, le("MuiInput", ["root", "underline", "input"])),
  Ai = $T,
  TT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  _T = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = he({ root: ["root", !n && "underline"], input: ["input"] }, RT, t);
    return v({}, t, o);
  },
  OT = V(Ku, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Hu(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      v(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${Ai.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Ai.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${Ai.disabled}, .${Ai.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${Ai.disabled}:before`]: { borderBottomStyle: "dotted" },
        },
      )
    );
  }),
  NT = V(Gu, { name: "MuiInput", slot: "Input", overridesResolver: qu })({}),
  k1 = x.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = pe({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: p = !1,
        inputComponent: f = "input",
        multiline: b = !1,
        slotProps: w,
        slots: y = {},
        type: P = "text",
      } = a,
      m = K(a, TT),
      h = _T(a),
      g = { root: { ownerState: { disableUnderline: l } } },
      C = w ?? c ? $t(w ?? c, g) : g,
      E = (r = (o = y.root) != null ? o : u.Root) != null ? r : OT,
      k = (i = (s = y.input) != null ? s : u.Input) != null ? i : NT;
    return S.jsx(
      Wp,
      v(
        {
          slots: { root: E, input: k },
          slotProps: C,
          fullWidth: p,
          inputComponent: f,
          multiline: b,
          ref: n,
          type: P,
        },
        m,
        { classes: h },
      ),
    );
  });
k1.muiName = "Input";
const E1 = k1;
function MT(e) {
  return fe("MuiFilledInput", e);
}
const IT = v({}, si, le("MuiFilledInput", ["root", "underline", "input"])),
  zr = IT,
  LT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  AT = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = he({ root: ["root", !n && "underline"], input: ["input"] }, MT, t);
    return v({}, t, o);
  },
  zT = V(Ku, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Hu(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return v(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${zr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${zr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${zr.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${zr.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${zr.disabled}, .${zr.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${zr.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        v(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        ),
    );
  }),
  BT = V(Gu, { name: "MuiFilledInput", slot: "Input", overridesResolver: qu })(
    ({ theme: e, ownerState: t }) =>
      v(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      ),
  ),
  P1 = x.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = pe({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: p = "input",
        multiline: f = !1,
        slotProps: b,
        slots: w = {},
        type: y = "text",
      } = a,
      P = K(a, LT),
      m = v({}, a, { fullWidth: c, inputComponent: p, multiline: f, type: y }),
      h = AT(a),
      d = { root: { ownerState: m }, input: { ownerState: m } },
      g = b ?? u ? $t(d, b ?? u) : d,
      C = (r = (o = w.root) != null ? o : l.Root) != null ? r : zT,
      E = (i = (s = w.input) != null ? s : l.Input) != null ? i : BT;
    return S.jsx(
      Wp,
      v(
        {
          slots: { root: C, input: E },
          componentsProps: g,
          fullWidth: c,
          inputComponent: p,
          multiline: f,
          ref: n,
          type: y,
        },
        P,
        { classes: h },
      ),
    );
  });
P1.muiName = "Input";
const R1 = P1;
var fv;
const jT = ["children", "classes", "className", "label", "notched"],
  FT = V("fieldset", { shouldForwardProp: Ft })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  DT = V("legend", { shouldForwardProp: Ft })(({ ownerState: e, theme: t }) =>
    v(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        v(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        ),
    ),
  );
function WT(e) {
  const { className: t, label: n, notched: r } = e,
    o = K(e, jT),
    i = n != null && n !== "",
    s = v({}, e, { notched: r, withLabel: i });
  return S.jsx(
    FT,
    v({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: S.jsx(DT, {
        ownerState: s,
        children: i
          ? S.jsx("span", { children: n })
          : fv ||
            (fv = S.jsx("span", { className: "notranslate", children: "​" })),
      }),
    }),
  );
}
function UT(e) {
  return fe("MuiOutlinedInput", e);
}
const VT = v(
    {},
    si,
    le("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
  ),
  lr = VT,
  HT = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  qT = (e) => {
    const { classes: t } = e,
      r = he(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        UT,
        t,
      );
    return v({}, t, r);
  },
  KT = V(Ku, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Hu,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return v(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${lr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${lr.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${lr.focused} .${lr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${lr.error} .${lr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${lr.disabled} .${lr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        v(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" },
        ),
    );
  }),
  GT = V(WT, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  YT = V(Gu, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: qu,
  })(({ theme: e, ownerState: t }) =>
    v(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 },
    ),
  ),
  $1 = x.forwardRef(function (t, n) {
    var r, o, i, s, a;
    const l = pe({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: p = "input",
        label: f,
        multiline: b = !1,
        notched: w,
        slots: y = {},
        type: P = "text",
      } = l,
      m = K(l, HT),
      h = qT(l),
      d = or(),
      g = _r({
        props: l,
        muiFormControl: d,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      C = v({}, l, {
        color: g.color || "primary",
        disabled: g.disabled,
        error: g.error,
        focused: g.focused,
        formControl: d,
        fullWidth: c,
        hiddenLabel: g.hiddenLabel,
        multiline: b,
        size: g.size,
        type: P,
      }),
      E = (r = (o = y.root) != null ? o : u.Root) != null ? r : KT,
      k = (i = (s = y.input) != null ? s : u.Input) != null ? i : YT;
    return S.jsx(
      Wp,
      v(
        {
          slots: { root: E, input: k },
          renderSuffix: ($) =>
            S.jsx(GT, {
              ownerState: C,
              className: h.notchedOutline,
              label:
                f != null && f !== "" && g.required
                  ? a || (a = S.jsxs(x.Fragment, { children: [f, " ", "*"] }))
                  : f,
              notched:
                typeof w < "u"
                  ? w
                  : !!($.startAdornment || $.filled || $.focused),
            }),
          fullWidth: c,
          inputComponent: p,
          multiline: b,
          ref: n,
          type: P,
        },
        m,
        { classes: v({}, h, { notchedOutline: null }) },
      ),
    );
  });
$1.muiName = "Input";
const T1 = $1;
function XT(e) {
  return fe("MuiFormLabel", e);
}
const QT = le("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  fs = QT,
  JT = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  ZT = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${X(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return he(l, XT, t);
  },
  e_ = V("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      v(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled,
      ),
  })(({ theme: e, ownerState: t }) =>
    v({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${fs.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${fs.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${fs.error}`]: { color: (e.vars || e).palette.error.main },
    }),
  ),
  t_ = V("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${fs.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  n_ = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      a = K(r, JT),
      l = or(),
      u = _r({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = v({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      p = ZT(c);
    return S.jsxs(
      e_,
      v({ as: s, ownerState: c, className: G(p.root, i), ref: n }, a, {
        children: [
          o,
          u.required &&
            S.jsxs(t_, {
              ownerState: c,
              "aria-hidden": !0,
              className: p.asterisk,
              children: [" ", "*"],
            }),
        ],
      }),
    );
  }),
  r_ = n_;
function o_(e) {
  return fe("MuiInputLabel", e);
}
le("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const i_ = ["disableAnimation", "margin", "shrink", "variant", "className"],
  s_ = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${X(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = he(l, o_, t);
    return v({}, t, u);
  },
  a_ = V(r_, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${fs.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        v(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            v(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              },
            ),
        ),
      t.variant === "outlined" &&
        v(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        ),
    ),
  ),
  l_ = x.forwardRef(function (t, n) {
    const r = pe({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      a = K(r, i_),
      l = or();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = _r({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required", "focused"],
      }),
      p = v({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      f = s_(p);
    return S.jsx(
      a_,
      v(
        { "data-shrink": u, ownerState: p, ref: n, className: G(f.root, s) },
        a,
        { classes: f },
      ),
    );
  }),
  u_ = l_;
function c_(e) {
  return fe("MuiFormHelperText", e);
}
const d_ = le("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  pv = d_;
var hv;
const f_ = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  p_ = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${X(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return he(u, c_, t);
  },
  h_ = V("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${X(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${pv.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${pv.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 },
    ),
  ),
  m_ = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: s = "p" } = r,
      a = K(r, f_),
      l = or(),
      u = _r({
        props: r,
        muiFormControl: l,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      c = v({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      p = p_(c);
    return S.jsx(
      h_,
      v({ as: s, ownerState: c, className: G(p.root, i), ref: n }, a, {
        children:
          o === " "
            ? hv ||
              (hv = S.jsx("span", { className: "notranslate", children: "​" }))
            : o,
      }),
    );
  }),
  v_ = m_;
function g_(e) {
  return fe("MuiList", e);
}
le("MuiList", ["root", "padding", "dense", "subheader"]);
const y_ = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  x_ = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return he(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      g_,
      t,
    );
  },
  b_ = V("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    v(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 },
    ),
  ),
  w_ = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = K(r, y_),
      p = x.useMemo(() => ({ dense: a }), [a]),
      f = v({}, r, { component: s, dense: a, disablePadding: l }),
      b = x_(f);
    return S.jsx(Xr.Provider, {
      value: p,
      children: S.jsxs(
        b_,
        v({ as: s, className: G(b.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        }),
      ),
    });
  }),
  _1 = w_,
  S_ = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function Mc(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
        ? null
        : e.firstChild;
}
function mv(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
        ? null
        : e.lastChild;
}
function O1(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
        ? n[0] === t.keys[0]
        : n.indexOf(t.keys.join("")) === 0
  );
}
function zi(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !O1(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const C_ = x.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: p = "selectedMenu",
      } = t,
      f = K(t, S_),
      b = x.useRef(null),
      w = x.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    Yt(() => {
      o && b.current.focus();
    }, [o]),
      x.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (d, g) => {
            const C = !b.current.style.width;
            if (d.clientHeight < b.current.clientHeight && C) {
              const E = `${Xy(st(d))}px`;
              (b.current.style[
                g.direction === "rtl" ? "paddingLeft" : "paddingRight"
              ] = E),
                (b.current.style.width = `calc(100% + ${E})`);
            }
            return b.current;
          },
        }),
        [],
      );
    const y = (d) => {
        const g = b.current,
          C = d.key,
          E = st(g).activeElement;
        if (C === "ArrowDown") d.preventDefault(), zi(g, E, u, l, Mc);
        else if (C === "ArrowUp") d.preventDefault(), zi(g, E, u, l, mv);
        else if (C === "Home") d.preventDefault(), zi(g, null, u, l, Mc);
        else if (C === "End") d.preventDefault(), zi(g, null, u, l, mv);
        else if (C.length === 1) {
          const k = w.current,
            $ = C.toLowerCase(),
            _ = performance.now();
          k.keys.length > 0 &&
            (_ - k.lastTime > 500
              ? ((k.keys = []), (k.repeating = !0), (k.previousKeyMatched = !0))
              : k.repeating && $ !== k.keys[0] && (k.repeating = !1)),
            (k.lastTime = _),
            k.keys.push($);
          const T = E && !k.repeating && O1(E, k);
          k.previousKeyMatched && (T || zi(g, E, !1, l, Mc, k))
            ? d.preventDefault()
            : (k.previousKeyMatched = !1);
        }
        c && c(d);
      },
      P = Ve(b, n);
    let m = -1;
    x.Children.forEach(s, (d, g) => {
      if (!x.isValidElement(d)) {
        m === g && ((m += 1), m >= s.length && (m = -1));
        return;
      }
      d.props.disabled ||
        (((p === "selectedMenu" && d.props.selected) || m === -1) && (m = g)),
        m === g &&
          (d.props.disabled ||
            d.props.muiSkipListHighlight ||
            d.type.muiSkipListHighlight) &&
          ((m += 1), m >= s.length && (m = -1));
    });
    const h = x.Children.map(s, (d, g) => {
      if (g === m) {
        const C = {};
        return (
          i && (C.autoFocus = !0),
          d.props.tabIndex === void 0 &&
            p === "selectedMenu" &&
            (C.tabIndex = 0),
          x.cloneElement(d, C)
        );
      }
      return d;
    });
    return S.jsx(
      _1,
      v(
        {
          role: "menu",
          ref: P,
          className: a,
          onKeyDown: y,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: h },
      ),
    );
  }),
  k_ = C_,
  Up = (e) => e.scrollTop;
function Pr(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
          ? o
          : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
          ? i[t.mode]
          : i,
    delay: s.transitionDelay,
  };
}
const E_ = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function Yd(e) {
  return `scale(${e}, ${e ** 2})`;
}
const P_ = {
    entering: { opacity: 1, transform: Yd(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Ic =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  N1 = x.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: p,
        onExited: f,
        onExiting: b,
        style: w,
        timeout: y = "auto",
        TransitionComponent: P = Fu,
      } = t,
      m = K(t, E_),
      h = Hr(),
      d = x.useRef(),
      g = sr(),
      C = x.useRef(null),
      E = Ve(C, i.ref, n),
      k = (I) => (j) => {
        if (I) {
          const F = C.current;
          j === void 0 ? I(F) : I(F, j);
        }
      },
      $ = k(c),
      _ = k((I, j) => {
        Up(I);
        const {
          duration: F,
          delay: R,
          easing: O,
        } = Pr({ style: w, timeout: y, easing: s }, { mode: "enter" });
        let W;
        y === "auto"
          ? ((W = g.transitions.getAutoHeightDuration(I.clientHeight)),
            (d.current = W))
          : (W = F),
          (I.style.transition = [
            g.transitions.create("opacity", { duration: W, delay: R }),
            g.transitions.create("transform", {
              duration: Ic ? W : W * 0.666,
              delay: R,
              easing: O,
            }),
          ].join(",")),
          l && l(I, j);
      }),
      T = k(u),
      N = k(b),
      z = k((I) => {
        const {
          duration: j,
          delay: F,
          easing: R,
        } = Pr({ style: w, timeout: y, easing: s }, { mode: "exit" });
        let O;
        y === "auto"
          ? ((O = g.transitions.getAutoHeightDuration(I.clientHeight)),
            (d.current = O))
          : (O = j),
          (I.style.transition = [
            g.transitions.create("opacity", { duration: O, delay: F }),
            g.transitions.create("transform", {
              duration: Ic ? O : O * 0.666,
              delay: Ic ? F : F || O * 0.333,
              easing: R,
            }),
          ].join(",")),
          (I.style.opacity = 0),
          (I.style.transform = Yd(0.75)),
          p && p(I);
      }),
      L = k(f),
      B = (I) => {
        y === "auto" && h.start(d.current || 0, I), r && r(C.current, I);
      };
    return S.jsx(
      P,
      v(
        {
          appear: o,
          in: a,
          nodeRef: C,
          onEnter: _,
          onEntered: T,
          onEntering: $,
          onExit: z,
          onExited: L,
          onExiting: N,
          addEndListener: B,
          timeout: y === "auto" ? null : y,
        },
        m,
        {
          children: (I, j) =>
            x.cloneElement(
              i,
              v(
                {
                  style: v(
                    {
                      opacity: 0,
                      transform: Yd(0.75),
                      visibility: I === "exited" && !a ? "hidden" : void 0,
                    },
                    P_[I],
                    w,
                    i.props.style,
                  ),
                  ref: E,
                },
                j,
              ),
            ),
        },
      ),
    );
  });
N1.muiSupportAuto = !0;
const Xd = N1,
  R_ = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  $_ = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  T_ = x.forwardRef(function (t, n) {
    const r = sr(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: p,
        onEntering: f,
        onExit: b,
        onExited: w,
        onExiting: y,
        style: P,
        timeout: m = o,
        TransitionComponent: h = Fu,
      } = t,
      d = K(t, R_),
      g = x.useRef(null),
      C = Ve(g, a.ref, n),
      E = (B) => (I) => {
        if (B) {
          const j = g.current;
          I === void 0 ? B(j) : B(j, I);
        }
      },
      k = E(f),
      $ = E((B, I) => {
        Up(B);
        const j = Pr({ style: P, timeout: m, easing: l }, { mode: "enter" });
        (B.style.webkitTransition = r.transitions.create("opacity", j)),
          (B.style.transition = r.transitions.create("opacity", j)),
          c && c(B, I);
      }),
      _ = E(p),
      T = E(y),
      N = E((B) => {
        const I = Pr({ style: P, timeout: m, easing: l }, { mode: "exit" });
        (B.style.webkitTransition = r.transitions.create("opacity", I)),
          (B.style.transition = r.transitions.create("opacity", I)),
          b && b(B);
      }),
      z = E(w),
      L = (B) => {
        i && i(g.current, B);
      };
    return S.jsx(
      h,
      v(
        {
          appear: s,
          in: u,
          nodeRef: g,
          onEnter: $,
          onEntered: _,
          onEntering: k,
          onExit: N,
          onExited: z,
          onExiting: T,
          addEndListener: L,
          timeout: m,
        },
        d,
        {
          children: (B, I) =>
            x.cloneElement(
              a,
              v(
                {
                  style: v(
                    {
                      opacity: 0,
                      visibility: B === "exited" && !u ? "hidden" : void 0,
                    },
                    $_[B],
                    P,
                    a.props.style,
                  ),
                  ref: C,
                },
                I,
              ),
            ),
        },
      ),
    );
  }),
  __ = T_;
function O_(e) {
  return fe("MuiBackdrop", e);
}
le("MuiBackdrop", ["root", "invisible"]);
const N_ = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  M_ = (e) => {
    const { classes: t, invisible: n } = e;
    return he({ root: ["root", n && "invisible"] }, O_, t);
  },
  I_ = V("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    v(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" },
    ),
  ),
  L_ = x.forwardRef(function (t, n) {
    var r, o, i;
    const s = pe({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: p = {},
        invisible: f = !1,
        open: b,
        slotProps: w = {},
        slots: y = {},
        TransitionComponent: P = __,
        transitionDuration: m,
      } = s,
      h = K(s, N_),
      d = v({}, s, { component: u, invisible: f }),
      g = M_(d),
      C = (r = w.root) != null ? r : p.root;
    return S.jsx(
      P,
      v({ in: b, timeout: m }, h, {
        children: S.jsx(
          I_,
          v({ "aria-hidden": !0 }, C, {
            as: (o = (i = y.root) != null ? i : c.Root) != null ? o : u,
            className: G(g.root, l, C == null ? void 0 : C.className),
            ownerState: v({}, d, C == null ? void 0 : C.ownerState),
            classes: g,
            ref: n,
            children: a,
          }),
        ),
      }),
    );
  }),
  A_ = L_;
function z_(e) {
  return fe("MuiModal", e);
}
le("MuiModal", ["root", "hidden", "backdrop"]);
const B_ = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  j_ = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return he(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      z_,
      r,
    );
  },
  F_ = V("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" },
    ),
  ),
  D_ = V(A_, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  W_ = x.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = pe({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = D_,
        BackdropProps: p,
        className: f,
        closeAfterTransition: b = !1,
        children: w,
        container: y,
        component: P,
        components: m = {},
        componentsProps: h = {},
        disableAutoFocus: d = !1,
        disableEnforceFocus: g = !1,
        disableEscapeKeyDown: C = !1,
        disablePortal: E = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: $ = !1,
        hideBackdrop: _ = !1,
        keepMounted: T = !1,
        onBackdropClick: N,
        open: z,
        slotProps: L,
        slots: B,
      } = u,
      I = K(u, B_),
      j = v({}, u, {
        closeAfterTransition: b,
        disableAutoFocus: d,
        disableEnforceFocus: g,
        disableEscapeKeyDown: C,
        disablePortal: E,
        disableRestoreFocus: k,
        disableScrollLock: $,
        hideBackdrop: _,
        keepMounted: T,
      }),
      {
        getRootProps: F,
        getBackdropProps: R,
        getTransitionProps: O,
        portalRef: W,
        isTopModal: Z,
        exited: ee,
        hasTransition: ce,
      } = GR(v({}, j, { rootRef: n })),
      Y = v({}, j, { exited: ee }),
      ie = j_(Y),
      H = {};
    if ((w.props.tabIndex === void 0 && (H.tabIndex = "-1"), ce)) {
      const { onEnter: re, onExited: de } = O();
      (H.onEnter = re), (H.onExited = de);
    }
    const ue =
        (r = (o = B == null ? void 0 : B.root) != null ? o : m.Root) != null
          ? r
          : F_,
      te =
        (i = (s = B == null ? void 0 : B.backdrop) != null ? s : m.Backdrop) !=
        null
          ? i
          : c,
      oe = (a = L == null ? void 0 : L.root) != null ? a : h.root,
      $e = (l = L == null ? void 0 : L.backdrop) != null ? l : h.backdrop,
      ne = Pt({
        elementType: ue,
        externalSlotProps: oe,
        externalForwardedProps: I,
        getSlotProps: F,
        additionalProps: { ref: n, as: P },
        ownerState: Y,
        className: G(
          f,
          oe == null ? void 0 : oe.className,
          ie == null ? void 0 : ie.root,
          !Y.open && Y.exited && (ie == null ? void 0 : ie.hidden),
        ),
      }),
      ke = Pt({
        elementType: te,
        externalSlotProps: $e,
        additionalProps: p,
        getSlotProps: (re) =>
          R(
            v({}, re, {
              onClick: (de) => {
                N && N(de), re != null && re.onClick && re.onClick(de);
              },
            }),
          ),
        className: G(
          $e == null ? void 0 : $e.className,
          p == null ? void 0 : p.className,
          ie == null ? void 0 : ie.backdrop,
        ),
        ownerState: Y,
      });
    return !T && !z && (!ce || ee)
      ? null
      : S.jsx(f1, {
          ref: W,
          container: y,
          disablePortal: E,
          children: S.jsxs(
            ue,
            v({}, ne, {
              children: [
                !_ && c ? S.jsx(te, v({}, ke)) : null,
                S.jsx(BR, {
                  disableEnforceFocus: g,
                  disableAutoFocus: d,
                  disableRestoreFocus: k,
                  isEnabled: Z,
                  open: z,
                  children: x.cloneElement(w, H),
                }),
              ],
            }),
          ),
        });
  }),
  M1 = W_,
  vv = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
function U_(e) {
  return fe("MuiPaper", e);
}
le("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const V_ = ["className", "component", "elevation", "square", "variant"],
  H_ = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return he(i, U_, o);
  },
  q_ = V("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return v(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        v(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${qe("#fff", vv(t.elevation))}, ${qe("#fff", vv(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          },
        ),
    );
  }),
  K_ = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation",
      } = r,
      u = K(r, V_),
      c = v({}, r, { component: i, elevation: s, square: a, variant: l }),
      p = H_(c);
    return S.jsx(
      q_,
      v({ as: i, ownerState: c, className: G(p.root, o), ref: n }, u),
    );
  }),
  Yu = K_;
function G_(e) {
  return fe("MuiPopover", e);
}
le("MuiPopover", ["root", "paper"]);
const Y_ = ["onEntering"],
  X_ = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  Q_ = ["slotProps"];
function gv(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
        ? (n = e.height / 2)
        : t === "bottom" && (n = e.height),
    n
  );
}
function yv(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
        ? (n = e.width / 2)
        : t === "right" && (n = e.width),
    n
  );
}
function xv(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function Lc(e) {
  return typeof e == "function" ? e() : e;
}
const J_ = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"], paper: ["paper"] }, G_, t);
  },
  Z_ = V(M1, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  I1 = V(Yu, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  e3 = x.forwardRef(function (t, n) {
    var r, o, i;
    const s = pe({ props: t, name: "MuiPopover" }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: p = "anchorEl",
        children: f,
        className: b,
        container: w,
        elevation: y = 8,
        marginThreshold: P = 16,
        open: m,
        PaperProps: h = {},
        slots: d,
        slotProps: g,
        transformOrigin: C = { vertical: "top", horizontal: "left" },
        TransitionComponent: E = Xd,
        transitionDuration: k = "auto",
        TransitionProps: { onEntering: $ } = {},
        disableScrollLock: _ = !1,
      } = s,
      T = K(s.TransitionProps, Y_),
      N = K(s, X_),
      z = (r = g == null ? void 0 : g.paper) != null ? r : h,
      L = x.useRef(),
      B = Ve(L, z.ref),
      I = v({}, s, {
        anchorOrigin: u,
        anchorReference: p,
        elevation: y,
        marginThreshold: P,
        externalPaperSlotProps: z,
        transformOrigin: C,
        TransitionComponent: E,
        transitionDuration: k,
        TransitionProps: T,
      }),
      j = J_(I),
      F = x.useCallback(() => {
        if (p === "anchorPosition") return c;
        const re = Lc(l),
          J = (
            re && re.nodeType === 1 ? re : st(L.current).body
          ).getBoundingClientRect();
        return {
          top: J.top + gv(J, u.vertical),
          left: J.left + yv(J, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, p]),
      R = x.useCallback(
        (re) => ({
          vertical: gv(re, C.vertical),
          horizontal: yv(re, C.horizontal),
        }),
        [C.horizontal, C.vertical],
      ),
      O = x.useCallback(
        (re) => {
          const de = { width: re.offsetWidth, height: re.offsetHeight },
            J = R(de);
          if (p === "none")
            return { top: null, left: null, transformOrigin: xv(J) };
          const ge = F();
          let Le = ge.top - J.vertical,
            Ee = ge.left - J.horizontal;
          const Fe = Le + de.height,
            Te = Ee + de.width,
            se = Dn(Lc(l)),
            De = se.innerHeight - P,
            ze = se.innerWidth - P;
          if (P !== null && Le < P) {
            const xe = Le - P;
            (Le -= xe), (J.vertical += xe);
          } else if (P !== null && Fe > De) {
            const xe = Fe - De;
            (Le -= xe), (J.vertical += xe);
          }
          if (P !== null && Ee < P) {
            const xe = Ee - P;
            (Ee -= xe), (J.horizontal += xe);
          } else if (Te > ze) {
            const xe = Te - ze;
            (Ee -= xe), (J.horizontal += xe);
          }
          return {
            top: `${Math.round(Le)}px`,
            left: `${Math.round(Ee)}px`,
            transformOrigin: xv(J),
          };
        },
        [l, p, F, R, P],
      ),
      [W, Z] = x.useState(m),
      ee = x.useCallback(() => {
        const re = L.current;
        if (!re) return;
        const de = O(re);
        de.top !== null && (re.style.top = de.top),
          de.left !== null && (re.style.left = de.left),
          (re.style.transformOrigin = de.transformOrigin),
          Z(!0);
      }, [O]);
    x.useEffect(
      () => (
        _ && window.addEventListener("scroll", ee),
        () => window.removeEventListener("scroll", ee)
      ),
      [l, _, ee],
    );
    const ce = (re, de) => {
        $ && $(re, de), ee();
      },
      Y = () => {
        Z(!1);
      };
    x.useEffect(() => {
      m && ee();
    }),
      x.useImperativeHandle(
        a,
        () =>
          m
            ? {
                updatePosition: () => {
                  ee();
                },
              }
            : null,
        [m, ee],
      ),
      x.useEffect(() => {
        if (!m) return;
        const re = Au(() => {
            ee();
          }),
          de = Dn(l);
        return (
          de.addEventListener("resize", re),
          () => {
            re.clear(), de.removeEventListener("resize", re);
          }
        );
      }, [l, m, ee]);
    let ie = k;
    k === "auto" && !E.muiSupportAuto && (ie = void 0);
    const H = w || (l ? st(Lc(l)).body : void 0),
      ue = (o = d == null ? void 0 : d.root) != null ? o : Z_,
      te = (i = d == null ? void 0 : d.paper) != null ? i : I1,
      oe = Pt({
        elementType: te,
        externalSlotProps: v({}, z, {
          style: W ? z.style : v({}, z.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: y, ref: B },
        ownerState: I,
        className: G(j.paper, z == null ? void 0 : z.className),
      }),
      $e = Pt({
        elementType: ue,
        externalSlotProps: (g == null ? void 0 : g.root) || {},
        externalForwardedProps: N,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: H,
          open: m,
        },
        ownerState: I,
        className: G(j.root, b),
      }),
      { slotProps: ne } = $e,
      ke = K($e, Q_);
    return S.jsx(
      ue,
      v({}, ke, !Bn(ue) && { slotProps: ne, disableScrollLock: _ }, {
        children: S.jsx(
          E,
          v(
            { appear: !0, in: m, onEntering: ce, onExited: Y, timeout: ie },
            T,
            { children: S.jsx(te, v({}, oe, { children: f })) },
          ),
        ),
      }),
    );
  }),
  t3 = e3;
function n3(e) {
  return fe("MuiMenu", e);
}
le("MuiMenu", ["root", "paper", "list"]);
const r3 = ["onEntering"],
  o3 = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  i3 = { vertical: "top", horizontal: "right" },
  s3 = { vertical: "top", horizontal: "left" },
  a3 = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"], paper: ["paper"], list: ["list"] }, n3, t);
  },
  l3 = V(t3, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  u3 = V(I1, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  c3 = V(k_, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  d3 = x.forwardRef(function (t, n) {
    var r, o;
    const i = pe({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: p,
        open: f,
        PaperProps: b = {},
        PopoverClasses: w,
        transitionDuration: y = "auto",
        TransitionProps: { onEntering: P } = {},
        variant: m = "selectedMenu",
        slots: h = {},
        slotProps: d = {},
      } = i,
      g = K(i.TransitionProps, r3),
      C = K(i, o3),
      E = sr(),
      k = E.direction === "rtl",
      $ = v({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: P,
        PaperProps: b,
        transitionDuration: y,
        TransitionProps: g,
        variant: m,
      }),
      _ = a3($),
      T = s && !u && f,
      N = x.useRef(null),
      z = (O, W) => {
        N.current && N.current.adjustStyleForScrollbar(O, E), P && P(O, W);
      },
      L = (O) => {
        O.key === "Tab" && (O.preventDefault(), p && p(O, "tabKeyDown"));
      };
    let B = -1;
    x.Children.map(a, (O, W) => {
      x.isValidElement(O) &&
        (O.props.disabled ||
          (((m === "selectedMenu" && O.props.selected) || B === -1) &&
            (B = W)));
    });
    const I = (r = h.paper) != null ? r : u3,
      j = (o = d.paper) != null ? o : b,
      F = Pt({
        elementType: h.root,
        externalSlotProps: d.root,
        ownerState: $,
        className: [_.root, l],
      }),
      R = Pt({
        elementType: I,
        externalSlotProps: j,
        ownerState: $,
        className: _.paper,
      });
    return S.jsx(
      l3,
      v(
        {
          onClose: p,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: k ? "right" : "left",
          },
          transformOrigin: k ? i3 : s3,
          slots: { paper: I, root: h.root },
          slotProps: { root: F, paper: R },
          open: f,
          ref: n,
          transitionDuration: y,
          TransitionProps: v({ onEntering: z }, g),
          ownerState: $,
        },
        C,
        {
          classes: w,
          children: S.jsx(
            c3,
            v(
              {
                onKeyDown: L,
                actions: N,
                autoFocus: s && (B === -1 || u),
                autoFocusItem: T,
                variant: m,
              },
              c,
              { className: G(_.list, c.className), children: a },
            ),
          ),
        },
      ),
    );
  }),
  Vp = d3;
function f3(e) {
  return fe("MuiNativeSelect", e);
}
const p3 = le("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  Hp = p3,
  h3 = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  m3 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${X(n)}`, i && "iconOpen", r && "disabled"],
      };
    return he(a, f3, t);
  },
  L1 = ({ ownerState: e, theme: t }) =>
    v(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": v(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 },
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${Hp.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      },
    ),
  v3 = V("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Ft,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${Hp.multiple}`]: t.multiple },
      ];
    },
  })(L1),
  A1 = ({ ownerState: e, theme: t }) =>
    v(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${Hp.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 },
    ),
  g3 = V("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${X(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(A1),
  y3 = x.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
      } = t,
      u = K(t, h3),
      c = v({}, t, { disabled: o, variant: l, error: i }),
      p = m3(c);
    return S.jsxs(x.Fragment, {
      children: [
        S.jsx(
          v3,
          v(
            {
              ownerState: c,
              className: G(p.select, r),
              disabled: o,
              ref: a || n,
            },
            u,
          ),
        ),
        t.multiple
          ? null
          : S.jsx(g3, { as: s, ownerState: c, className: p.icon }),
      ],
    });
  }),
  x3 = y3;
function b3(e) {
  return fe("MuiSelect", e);
}
const Bi = le("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var bv;
const w3 = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  S3 = V("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Bi.select}`]: t.select },
        { [`&.${Bi.select}`]: t[n.variant] },
        { [`&.${Bi.error}`]: t.error },
        { [`&.${Bi.multiple}`]: t.multiple },
      ];
    },
  })(L1, {
    [`&.${Bi.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  C3 = V("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${X(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(A1),
  k3 = V("input", {
    shouldForwardProp: (e) => $p(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function wv(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function E3(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const P3 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${X(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return he(a, b3, t);
  },
  R3 = x.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: s,
        autoWidth: a,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: p,
        disabled: f,
        displayEmpty: b,
        error: w = !1,
        IconComponent: y,
        inputRef: P,
        labelId: m,
        MenuProps: h = {},
        multiple: d,
        name: g,
        onBlur: C,
        onChange: E,
        onClose: k,
        onFocus: $,
        onOpen: _,
        open: T,
        readOnly: N,
        renderValue: z,
        SelectDisplayProps: L = {},
        tabIndex: B,
        value: I,
        variant: j = "standard",
      } = t,
      F = K(t, w3),
      [R, O] = ti({ controlled: I, default: p, name: "Select" }),
      [W, Z] = ti({ controlled: T, default: c, name: "Select" }),
      ee = x.useRef(null),
      ce = x.useRef(null),
      [Y, ie] = x.useState(null),
      { current: H } = x.useRef(T != null),
      [ue, te] = x.useState(),
      oe = Ve(n, P),
      $e = x.useCallback((D) => {
        (ce.current = D), D && ie(D);
      }, []),
      ne = Y == null ? void 0 : Y.parentNode;
    x.useImperativeHandle(
      oe,
      () => ({
        focus: () => {
          ce.current.focus();
        },
        node: ee.current,
        value: R,
      }),
      [R],
    ),
      x.useEffect(() => {
        c &&
          W &&
          Y &&
          !H &&
          (te(a ? null : ne.clientWidth), ce.current.focus());
      }, [Y, a]),
      x.useEffect(() => {
        s && ce.current.focus();
      }, [s]),
      x.useEffect(() => {
        if (!m) return;
        const D = st(ce.current).getElementById(m);
        if (D) {
          const ve = () => {
            getSelection().isCollapsed && ce.current.focus();
          };
          return (
            D.addEventListener("click", ve),
            () => {
              D.removeEventListener("click", ve);
            }
          );
        }
      }, [m]);
    const ke = (D, ve) => {
        D ? _ && _(ve) : k && k(ve), H || (te(a ? null : ne.clientWidth), Z(D));
      },
      re = (D) => {
        D.button === 0 && (D.preventDefault(), ce.current.focus(), ke(!0, D));
      },
      de = (D) => {
        ke(!1, D);
      },
      J = x.Children.toArray(l),
      ge = (D) => {
        const ve = J.find((Se) => Se.props.value === D.target.value);
        ve !== void 0 && (O(ve.props.value), E && E(D, ve));
      },
      Le = (D) => (ve) => {
        let Se;
        if (ve.currentTarget.hasAttribute("tabindex")) {
          if (d) {
            Se = Array.isArray(R) ? R.slice() : [];
            const _e = R.indexOf(D.props.value);
            _e === -1 ? Se.push(D.props.value) : Se.splice(_e, 1);
          } else Se = D.props.value;
          if (
            (D.props.onClick && D.props.onClick(ve), R !== Se && (O(Se), E))
          ) {
            const _e = ve.nativeEvent || ve,
              Oe = new _e.constructor(_e.type, _e);
            Object.defineProperty(Oe, "target", {
              writable: !0,
              value: { value: Se, name: g },
            }),
              E(Oe, D);
          }
          d || ke(!1, ve);
        }
      },
      Ee = (D) => {
        N ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(D.key) !== -1 &&
            (D.preventDefault(), ke(!0, D)));
      },
      Fe = Y !== null && W,
      Te = (D) => {
        !Fe &&
          C &&
          (Object.defineProperty(D, "target", {
            writable: !0,
            value: { value: R, name: g },
          }),
          C(D));
      };
    delete F["aria-invalid"];
    let se, De;
    const ze = [];
    let xe = !1;
    (zl({ value: R }) || b) && (z ? (se = z(R)) : (xe = !0));
    const nt = J.map((D) => {
      if (!x.isValidElement(D)) return null;
      let ve;
      if (d) {
        if (!Array.isArray(R)) throw new Error(oo(2));
        (ve = R.some((Se) => wv(Se, D.props.value))),
          ve && xe && ze.push(D.props.children);
      } else (ve = wv(R, D.props.value)), ve && xe && (De = D.props.children);
      return x.cloneElement(D, {
        "aria-selected": ve ? "true" : "false",
        onClick: Le(D),
        onKeyUp: (Se) => {
          Se.key === " " && Se.preventDefault(),
            D.props.onKeyUp && D.props.onKeyUp(Se);
        },
        role: "option",
        selected: ve,
        value: void 0,
        "data-value": D.props.value,
      });
    });
    xe &&
      (d
        ? ze.length === 0
          ? (se = null)
          : (se = ze.reduce(
              (D, ve, Se) => (
                D.push(ve), Se < ze.length - 1 && D.push(", "), D
              ),
              [],
            ))
        : (se = De));
    let at = ue;
    !a && H && Y && (at = ne.clientWidth);
    let lt;
    typeof B < "u" ? (lt = B) : (lt = f ? null : 0);
    const A = L.id || (g ? `mui-component-select-${g}` : void 0),
      M = v({}, t, { variant: j, value: R, open: Fe, error: w }),
      q = P3(M),
      me = v({}, h.PaperProps, (r = h.slotProps) == null ? void 0 : r.paper),
      be = zu();
    return S.jsxs(x.Fragment, {
      children: [
        S.jsx(
          S3,
          v(
            {
              ref: $e,
              tabIndex: lt,
              role: "combobox",
              "aria-controls": be,
              "aria-disabled": f ? "true" : void 0,
              "aria-expanded": Fe ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [m, A].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: Ee,
              onMouseDown: f || N ? null : re,
              onBlur: Te,
              onFocus: $,
            },
            L,
            {
              ownerState: M,
              className: G(L.className, q.select, u),
              id: A,
              children: E3(se)
                ? bv ||
                  (bv = S.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : se,
            },
          ),
        ),
        S.jsx(
          k3,
          v(
            {
              "aria-invalid": w,
              value: Array.isArray(R) ? R.join(",") : R,
              name: g,
              ref: ee,
              "aria-hidden": !0,
              onChange: ge,
              tabIndex: -1,
              disabled: f,
              className: q.nativeInput,
              autoFocus: s,
              ownerState: M,
            },
            F,
          ),
        ),
        S.jsx(C3, { as: y, className: q.icon, ownerState: M }),
        S.jsx(
          Vp,
          v(
            {
              id: `menu-${g || ""}`,
              anchorEl: ne,
              open: Fe,
              onClose: de,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            h,
            {
              MenuListProps: v(
                {
                  "aria-labelledby": m,
                  role: "listbox",
                  "aria-multiselectable": d ? "true" : void 0,
                  disableListWrap: !0,
                  id: be,
                },
                h.MenuListProps,
              ),
              slotProps: v({}, h.slotProps, {
                paper: v({}, me, {
                  style: v({ minWidth: at }, me != null ? me.style : null),
                }),
              }),
              children: nt,
            },
          ),
        ),
      ],
    });
  }),
  $3 = R3,
  T3 = l1(S.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  _3 = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  O3 = ["root"],
  N3 = (e) => {
    const { classes: t } = e;
    return t;
  },
  qp = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Ft(e) && e !== "variant",
    slot: "Root",
  },
  M3 = V(E1, qp)(""),
  I3 = V(T1, qp)(""),
  L3 = V(R1, qp)(""),
  z1 = x.forwardRef(function (t, n) {
    const r = pe({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = T3,
        id: p,
        input: f,
        inputProps: b,
        label: w,
        labelId: y,
        MenuProps: P,
        multiple: m = !1,
        native: h = !1,
        onClose: d,
        onOpen: g,
        open: C,
        renderValue: E,
        SelectDisplayProps: k,
        variant: $ = "outlined",
      } = r,
      _ = K(r, _3),
      T = h ? x3 : $3,
      N = or(),
      z = _r({ props: r, muiFormControl: N, states: ["variant", "error"] }),
      L = z.variant || $,
      B = v({}, r, { variant: L, classes: s }),
      I = N3(B),
      j = K(I, O3),
      F =
        f ||
        {
          standard: S.jsx(M3, { ownerState: B }),
          outlined: S.jsx(I3, { label: w, ownerState: B }),
          filled: S.jsx(L3, { ownerState: B }),
        }[L],
      R = Ve(n, F.ref);
    return S.jsx(x.Fragment, {
      children: x.cloneElement(
        F,
        v(
          {
            inputComponent: T,
            inputProps: v(
              {
                children: i,
                error: z.error,
                IconComponent: c,
                variant: L,
                type: void 0,
                multiple: m,
              },
              h
                ? { id: p }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: y,
                    MenuProps: P,
                    onClose: d,
                    onOpen: g,
                    open: C,
                    renderValue: E,
                    SelectDisplayProps: v({ id: p }, k),
                  },
              b,
              { classes: b ? $t(j, b.classes) : j },
              f ? f.props.inputProps : {},
            ),
          },
          ((m && h) || u) && L === "outlined" ? { notched: !0 } : {},
          { ref: R, className: G(F.props.className, a, I.root) },
          !f && { variant: L },
          _,
        ),
      ),
    });
  });
z1.muiName = "Select";
const A3 = z1;
function z3(e) {
  return fe("MuiTextField", e);
}
le("MuiTextField", ["root"]);
const B3 = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  j3 = { standard: E1, filled: R1, outlined: T1 },
  F3 = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"] }, z3, t);
  },
  D3 = V(gE, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  W3 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: c = !1,
        error: p = !1,
        FormHelperTextProps: f,
        fullWidth: b = !1,
        helperText: w,
        id: y,
        InputLabelProps: P,
        inputProps: m,
        InputProps: h,
        inputRef: d,
        label: g,
        maxRows: C,
        minRows: E,
        multiline: k = !1,
        name: $,
        onBlur: _,
        onChange: T,
        onFocus: N,
        placeholder: z,
        required: L = !1,
        rows: B,
        select: I = !1,
        SelectProps: j,
        type: F,
        value: R,
        variant: O = "outlined",
      } = r,
      W = K(r, B3),
      Z = v({}, r, {
        autoFocus: i,
        color: l,
        disabled: c,
        error: p,
        fullWidth: b,
        multiline: k,
        required: L,
        select: I,
        variant: O,
      }),
      ee = F3(Z),
      ce = {};
    O === "outlined" &&
      (P && typeof P.shrink < "u" && (ce.notched = P.shrink), (ce.label = g)),
      I &&
        ((!j || !j.native) && (ce.id = void 0),
        (ce["aria-describedby"] = void 0));
    const Y = zu(y),
      ie = w && Y ? `${Y}-helper-text` : void 0,
      H = g && Y ? `${Y}-label` : void 0,
      ue = j3[O],
      te = S.jsx(
        ue,
        v(
          {
            "aria-describedby": ie,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: b,
            multiline: k,
            name: $,
            rows: B,
            maxRows: C,
            minRows: E,
            type: F,
            value: R,
            id: Y,
            inputRef: d,
            onBlur: _,
            onChange: T,
            onFocus: N,
            placeholder: z,
            inputProps: m,
          },
          ce,
          h,
        ),
      );
    return S.jsxs(
      D3,
      v(
        {
          className: G(ee.root, a),
          disabled: c,
          error: p,
          fullWidth: b,
          ref: n,
          required: L,
          color: l,
          variant: O,
          ownerState: Z,
        },
        W,
        {
          children: [
            g != null &&
              g !== "" &&
              S.jsx(u_, v({ htmlFor: Y, id: H }, P, { children: g })),
            I
              ? S.jsx(
                  A3,
                  v(
                    {
                      "aria-describedby": ie,
                      id: Y,
                      labelId: H,
                      value: R,
                      input: te,
                    },
                    j,
                    { children: s },
                  ),
                )
              : te,
            w && S.jsx(v_, v({ id: ie }, f, { children: w })),
          ],
        },
      ),
    );
  }),
  Qd = W3;
function U3(e) {
  return fe("MuiCard", e);
}
le("MuiCard", ["root"]);
const V3 = ["className", "raised"],
  H3 = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"] }, U3, t);
  },
  q3 = V(Yu, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  K3 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      s = K(r, V3),
      a = v({}, r, { raised: i }),
      l = H3(a);
    return S.jsx(
      q3,
      v(
        {
          className: G(l.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: a,
        },
        s,
      ),
    );
  }),
  G3 = K3;
function Y3(e) {
  return fe("MuiCardContent", e);
}
le("MuiCardContent", ["root"]);
const X3 = ["className", "component"],
  Q3 = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"] }, Y3, t);
  },
  J3 = V("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  Z3 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      s = K(r, X3),
      a = v({}, r, { component: i }),
      l = Q3(a);
    return S.jsx(
      J3,
      v({ as: i, className: G(l.root, o), ownerState: a, ref: n }, s),
    );
  }),
  eO = Z3;
function tO(e) {
  return fe("MuiCardHeader", e);
}
const nO = le("MuiCardHeader", [
    "root",
    "avatar",
    "action",
    "content",
    "title",
    "subheader",
  ]),
  Sv = nO,
  rO = [
    "action",
    "avatar",
    "className",
    "component",
    "disableTypography",
    "subheader",
    "subheaderTypographyProps",
    "title",
    "titleTypographyProps",
  ],
  oO = (e) => {
    const { classes: t } = e;
    return he(
      {
        root: ["root"],
        avatar: ["avatar"],
        action: ["action"],
        content: ["content"],
        title: ["title"],
        subheader: ["subheader"],
      },
      tO,
      t,
    );
  },
  iO = V("div", {
    name: "MuiCardHeader",
    slot: "Root",
    overridesResolver: (e, t) =>
      v(
        { [`& .${Sv.title}`]: t.title, [`& .${Sv.subheader}`]: t.subheader },
        t.root,
      ),
  })({ display: "flex", alignItems: "center", padding: 16 }),
  sO = V("div", {
    name: "MuiCardHeader",
    slot: "Avatar",
    overridesResolver: (e, t) => t.avatar,
  })({ display: "flex", flex: "0 0 auto", marginRight: 16 }),
  aO = V("div", {
    name: "MuiCardHeader",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: -4,
    marginRight: -8,
    marginBottom: -4,
  }),
  lO = V("div", {
    name: "MuiCardHeader",
    slot: "Content",
    overridesResolver: (e, t) => t.content,
  })({ flex: "1 1 auto" }),
  uO = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiCardHeader" }),
      {
        action: o,
        avatar: i,
        className: s,
        component: a = "div",
        disableTypography: l = !1,
        subheader: u,
        subheaderTypographyProps: c,
        title: p,
        titleTypographyProps: f,
      } = r,
      b = K(r, rO),
      w = v({}, r, { component: a, disableTypography: l }),
      y = oO(w);
    let P = p;
    P != null &&
      P.type !== In &&
      !l &&
      (P = S.jsx(
        In,
        v(
          {
            variant: i ? "body2" : "h5",
            className: y.title,
            component: "span",
            display: "block",
          },
          f,
          { children: P },
        ),
      ));
    let m = u;
    return (
      m != null &&
        m.type !== In &&
        !l &&
        (m = S.jsx(
          In,
          v(
            {
              variant: i ? "body2" : "body1",
              className: y.subheader,
              color: "text.secondary",
              component: "span",
              display: "block",
            },
            c,
            { children: m },
          ),
        )),
      S.jsxs(
        iO,
        v({ className: G(y.root, s), as: a, ref: n, ownerState: w }, b, {
          children: [
            i && S.jsx(sO, { className: y.avatar, ownerState: w, children: i }),
            S.jsxs(lO, {
              className: y.content,
              ownerState: w,
              children: [P, m],
            }),
            o && S.jsx(aO, { className: y.action, ownerState: w, children: o }),
          ],
        }),
      )
    );
  }),
  cO = uO;
function dO(e) {
  return fe("MuiFormGroup", e);
}
le("MuiFormGroup", ["root", "row", "error"]);
const fO = ["className", "row"],
  pO = (e) => {
    const { classes: t, row: n, error: r } = e;
    return he({ root: ["root", n && "row", r && "error"] }, dO, t);
  },
  hO = V("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.row && t.row];
    },
  })(({ ownerState: e }) =>
    v(
      { display: "flex", flexDirection: "column", flexWrap: "wrap" },
      e.row && { flexDirection: "row" },
    ),
  ),
  mO = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormGroup" }),
      { className: o, row: i = !1 } = r,
      s = K(r, fO),
      a = or(),
      l = _r({ props: r, muiFormControl: a, states: ["error"] }),
      u = v({}, r, { row: i, error: l.error }),
      c = pO(u);
    return S.jsx(hO, v({ className: G(c.root, o), ownerState: u, ref: n }, s));
  }),
  Kp = mO;
function vO(e) {
  return fe("MuiIcon", e);
}
le("MuiIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const gO = ["baseClassName", "className", "color", "component", "fontSize"],
  yO = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`],
      };
    return he(o, vO, r);
  },
  xO = V("span", {
    name: "MuiIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${X(n.color)}`],
        t[`fontSize${X(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => ({
    userSelect: "none",
    width: "1em",
    height: "1em",
    overflow: "hidden",
    display: "inline-block",
    textAlign: "center",
    flexShrink: 0,
    fontSize: {
      inherit: "inherit",
      small: e.typography.pxToRem(20),
      medium: e.typography.pxToRem(24),
      large: e.typography.pxToRem(36),
    }[t.fontSize],
    color: {
      primary: (e.vars || e).palette.primary.main,
      secondary: (e.vars || e).palette.secondary.main,
      info: (e.vars || e).palette.info.main,
      success: (e.vars || e).palette.success.main,
      warning: (e.vars || e).palette.warning.main,
      action: (e.vars || e).palette.action.active,
      error: (e.vars || e).palette.error.main,
      disabled: (e.vars || e).palette.action.disabled,
      inherit: void 0,
    }[t.color],
  })),
  B1 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiIcon" }),
      {
        baseClassName: o = "material-icons",
        className: i,
        color: s = "inherit",
        component: a = "span",
        fontSize: l = "medium",
      } = r,
      u = K(r, gO),
      c = v({}, r, { baseClassName: o, color: s, component: a, fontSize: l }),
      p = yO(c);
    return S.jsx(
      xO,
      v(
        {
          as: a,
          className: G(o, "notranslate", p.root, i),
          ownerState: c,
          "aria-hidden": !0,
          ref: n,
        },
        u,
      ),
    );
  });
B1.muiName = "Icon";
const bO = B1,
  wO = (e) => !e || !Bn(e);
function SO(e) {
  return fe("MuiSlider", e);
}
const kn = le("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "thumbColorError",
    "thumbColorSuccess",
    "thumbColorInfo",
    "thumbColorWarning",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical",
  ]),
  CO = (e) => {
    const { open: t } = e;
    return {
      offset: G(t && kn.valueLabelOpen),
      circle: kn.valueLabelCircle,
      label: kn.valueLabelLabel,
    };
  };
function kO(e) {
  const { children: t, className: n, value: r } = e,
    o = CO(e);
  return t
    ? x.cloneElement(
        t,
        { className: G(t.props.className) },
        S.jsxs(x.Fragment, {
          children: [
            t.props.children,
            S.jsx("span", {
              className: G(o.offset, n),
              "aria-hidden": !0,
              children: S.jsx("span", {
                className: o.circle,
                children: S.jsx("span", { className: o.label, children: r }),
              }),
            }),
          ],
        }),
      )
    : null;
}
const EO = [
  "aria-label",
  "aria-valuetext",
  "aria-labelledby",
  "component",
  "components",
  "componentsProps",
  "color",
  "classes",
  "className",
  "disableSwap",
  "disabled",
  "getAriaLabel",
  "getAriaValueText",
  "marks",
  "max",
  "min",
  "name",
  "onChange",
  "onChangeCommitted",
  "orientation",
  "shiftStep",
  "size",
  "step",
  "scale",
  "slotProps",
  "slots",
  "tabIndex",
  "track",
  "value",
  "valueLabelDisplay",
  "valueLabelFormat",
];
function Cv(e) {
  return e;
}
const PO = V("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${X(n.color)}`],
        n.size !== "medium" && t[`size${X(n.size)}`],
        n.marked && t.marked,
        n.orientation === "vertical" && t.vertical,
        n.track === "inverted" && t.trackInverted,
        n.track === !1 && t.trackFalse,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        borderRadius: 12,
        boxSizing: "content-box",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        touchAction: "none",
        color: (e.vars || e).palette[t.color].main,
        WebkitTapHighlightColor: "transparent",
      },
      t.orientation === "horizontal" &&
        v(
          {
            height: 4,
            width: "100%",
            padding: "13px 0",
            "@media (pointer: coarse)": { padding: "20px 0" },
          },
          t.size === "small" && { height: 2 },
          t.marked && { marginBottom: 20 },
        ),
      t.orientation === "vertical" &&
        v(
          {
            height: "100%",
            width: 4,
            padding: "0 13px",
            "@media (pointer: coarse)": { padding: "0 20px" },
          },
          t.size === "small" && { width: 2 },
          t.marked && { marginRight: 44 },
        ),
      {
        "@media print": { colorAdjust: "exact" },
        [`&.${kn.disabled}`]: {
          pointerEvents: "none",
          cursor: "default",
          color: (e.vars || e).palette.grey[400],
        },
        [`&.${kn.dragging}`]: {
          [`& .${kn.thumb}, & .${kn.track}`]: { transition: "none" },
        },
      },
    ),
  ),
  RO = V("span", {
    name: "MuiSlider",
    slot: "Rail",
    overridesResolver: (e, t) => t.rail,
  })(({ ownerState: e }) =>
    v(
      {
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        backgroundColor: "currentColor",
        opacity: 0.38,
      },
      e.orientation === "horizontal" && {
        width: "100%",
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.orientation === "vertical" && {
        height: "100%",
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
      e.track === "inverted" && { opacity: 1 },
    ),
  ),
  $O = V("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? wp(e.palette[t.color].main, 0.62)
        : bp(e.palette[t.color].main, 0.5);
    return v(
      {
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        border: "1px solid currentColor",
        backgroundColor: "currentColor",
        transition: e.transitions.create(
          ["left", "width", "bottom", "height"],
          { duration: e.transitions.duration.shortest },
        ),
      },
      t.size === "small" && { border: "none" },
      t.orientation === "horizontal" && {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
      t.orientation === "vertical" && {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
      t.track === !1 && { display: "none" },
      t.track === "inverted" && {
        backgroundColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : n,
        borderColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : n,
      },
    );
  }),
  TO = V("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.thumb,
        t[`thumbColor${X(n.color)}`],
        n.size !== "medium" && t[`thumbSize${X(n.size)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        position: "absolute",
        width: 20,
        height: 20,
        boxSizing: "border-box",
        borderRadius: "50%",
        outline: 0,
        backgroundColor: "currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: e.transitions.create(["box-shadow", "left", "bottom"], {
          duration: e.transitions.duration.shortest,
        }),
      },
      t.size === "small" && { width: 12, height: 12 },
      t.orientation === "horizontal" && {
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      t.orientation === "vertical" && {
        left: "50%",
        transform: "translate(-50%, 50%)",
      },
      {
        "&::before": v(
          {
            position: "absolute",
            content: '""',
            borderRadius: "inherit",
            width: "100%",
            height: "100%",
            boxShadow: (e.vars || e).shadows[2],
          },
          t.size === "small" && { boxShadow: "none" },
        ),
        "&::after": {
          position: "absolute",
          content: '""',
          borderRadius: "50%",
          width: 42,
          height: 42,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        [`&:hover, &.${kn.focusVisible}`]: {
          boxShadow: `0px 0px 0px 8px ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)` : qe(e.palette[t.color].main, 0.16)}`,
          "@media (hover: none)": { boxShadow: "none" },
        },
        [`&.${kn.active}`]: {
          boxShadow: `0px 0px 0px 14px ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)` : qe(e.palette[t.color].main, 0.16)}`,
        },
        [`&.${kn.disabled}`]: { "&:hover": { boxShadow: "none" } },
      },
    ),
  ),
  _O = V(kO, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (e, t) => t.valueLabel,
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        [`&.${kn.valueLabelOpen}`]: {
          transform: `${t.orientation === "vertical" ? "translateY(-50%)" : "translateY(-100%)"} scale(1)`,
        },
        zIndex: 1,
        whiteSpace: "nowrap",
      },
      e.typography.body2,
      {
        fontWeight: 500,
        transition: e.transitions.create(["transform"], {
          duration: e.transitions.duration.shortest,
        }),
        transform: `${t.orientation === "vertical" ? "translateY(-50%)" : "translateY(-100%)"} scale(0)`,
        position: "absolute",
        backgroundColor: (e.vars || e).palette.grey[600],
        borderRadius: 2,
        color: (e.vars || e).palette.common.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25rem 0.75rem",
      },
      t.orientation === "horizontal" && {
        top: "-10px",
        transformOrigin: "bottom center",
        "&::before": {
          position: "absolute",
          content: '""',
          width: 8,
          height: 8,
          transform: "translate(-50%, 50%) rotate(45deg)",
          backgroundColor: "inherit",
          bottom: 0,
          left: "50%",
        },
      },
      t.orientation === "vertical" && {
        right: t.size === "small" ? "20px" : "30px",
        top: "50%",
        transformOrigin: "right center",
        "&::before": {
          position: "absolute",
          content: '""',
          width: 8,
          height: 8,
          transform: "translate(-50%, -50%) rotate(45deg)",
          backgroundColor: "inherit",
          right: -8,
          top: "50%",
        },
      },
      t.size === "small" && {
        fontSize: e.typography.pxToRem(12),
        padding: "0.25rem 0.5rem",
      },
    ),
  ),
  OO = V("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => $p(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: n } = e;
      return [t.mark, n && t.markActive];
    },
  })(({ theme: e, ownerState: t, markActive: n }) =>
    v(
      {
        position: "absolute",
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundColor: "currentColor",
      },
      t.orientation === "horizontal" && {
        top: "50%",
        transform: "translate(-1px, -50%)",
      },
      t.orientation === "vertical" && {
        left: "50%",
        transform: "translate(-50%, 1px)",
      },
      n && {
        backgroundColor: (e.vars || e).palette.background.paper,
        opacity: 0.8,
      },
    ),
  ),
  NO = V("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => $p(e) && e !== "markLabelActive",
    overridesResolver: (e, t) => t.markLabel,
  })(({ theme: e, ownerState: t, markLabelActive: n }) =>
    v(
      {},
      e.typography.body2,
      {
        color: (e.vars || e).palette.text.secondary,
        position: "absolute",
        whiteSpace: "nowrap",
      },
      t.orientation === "horizontal" && {
        top: 30,
        transform: "translateX(-50%)",
        "@media (pointer: coarse)": { top: 40 },
      },
      t.orientation === "vertical" && {
        left: 36,
        transform: "translateY(50%)",
        "@media (pointer: coarse)": { left: 44 },
      },
      n && { color: (e.vars || e).palette.text.primary },
    ),
  ),
  MO = (e) => {
    const {
        disabled: t,
        dragging: n,
        marked: r,
        orientation: o,
        track: i,
        classes: s,
        color: a,
        size: l,
      } = e,
      u = {
        root: [
          "root",
          t && "disabled",
          n && "dragging",
          r && "marked",
          o === "vertical" && "vertical",
          i === "inverted" && "trackInverted",
          i === !1 && "trackFalse",
          a && `color${X(a)}`,
          l && `size${X(l)}`,
        ],
        rail: ["rail"],
        track: ["track"],
        mark: ["mark"],
        markActive: ["markActive"],
        markLabel: ["markLabel"],
        markLabelActive: ["markLabelActive"],
        valueLabel: ["valueLabel"],
        thumb: [
          "thumb",
          t && "disabled",
          l && `thumbSize${X(l)}`,
          a && `thumbColor${X(a)}`,
        ],
        active: ["active"],
        disabled: ["disabled"],
        focusVisible: ["focusVisible"],
      };
    return he(u, SO, s);
  },
  IO = ({ children: e }) => e,
  LO = x.forwardRef(function (t, n) {
    var r, o, i, s, a, l, u, c, p, f, b, w, y, P, m, h, d, g, C, E, k, $, _, T;
    const N = pe({ props: t, name: "MuiSlider" }),
      L = sr().direction === "rtl",
      {
        "aria-label": B,
        "aria-valuetext": I,
        "aria-labelledby": j,
        component: F = "span",
        components: R = {},
        componentsProps: O = {},
        color: W = "primary",
        classes: Z,
        className: ee,
        disableSwap: ce = !1,
        disabled: Y = !1,
        getAriaLabel: ie,
        getAriaValueText: H,
        marks: ue = !1,
        max: te = 100,
        min: oe = 0,
        orientation: $e = "horizontal",
        shiftStep: ne = 10,
        size: ke = "medium",
        step: re = 1,
        scale: de = Cv,
        slotProps: J,
        slots: ge,
        track: Le = "normal",
        valueLabelDisplay: Ee = "off",
        valueLabelFormat: Fe = Cv,
      } = N,
      Te = K(N, EO),
      se = v({}, N, {
        isRtl: L,
        max: te,
        min: oe,
        classes: Z,
        disabled: Y,
        disableSwap: ce,
        orientation: $e,
        marks: ue,
        color: W,
        size: ke,
        step: re,
        shiftStep: ne,
        scale: de,
        track: Le,
        valueLabelDisplay: Ee,
        valueLabelFormat: Fe,
      }),
      {
        axisProps: De,
        getRootProps: ze,
        getHiddenInputProps: xe,
        getThumbProps: nt,
        open: at,
        active: lt,
        axis: A,
        focusedThumbIndex: M,
        range: q,
        dragging: me,
        marks: be,
        values: D,
        trackOffset: ve,
        trackLeap: Se,
        getThumbStyle: _e,
      } = vT(v({}, se, { rootRef: n }));
    (se.marked = be.length > 0 && be.some((Ye) => Ye.label)),
      (se.dragging = me),
      (se.focusedThumbIndex = M);
    const Oe = MO(se),
      $n =
        (r = (o = ge == null ? void 0 : ge.root) != null ? o : R.Root) != null
          ? r
          : PO,
      Zs =
        (i = (s = ge == null ? void 0 : ge.rail) != null ? s : R.Rail) != null
          ? i
          : RO,
      ea =
        (a = (l = ge == null ? void 0 : ge.track) != null ? l : R.Track) != null
          ? a
          : $O,
      ta =
        (u = (c = ge == null ? void 0 : ge.thumb) != null ? c : R.Thumb) != null
          ? u
          : TO,
      vi =
        (p =
          (f = ge == null ? void 0 : ge.valueLabel) != null
            ? f
            : R.ValueLabel) != null
          ? p
          : _O,
      uo =
        (b = (w = ge == null ? void 0 : ge.mark) != null ? w : R.Mark) != null
          ? b
          : OO,
      co =
        (y =
          (P = ge == null ? void 0 : ge.markLabel) != null ? P : R.MarkLabel) !=
        null
          ? y
          : NO,
      gi =
        (m = (h = ge == null ? void 0 : ge.input) != null ? h : R.Input) != null
          ? m
          : "input",
      yi = (d = J == null ? void 0 : J.root) != null ? d : O.root,
      Qu = (g = J == null ? void 0 : J.rail) != null ? g : O.rail,
      xi = (C = J == null ? void 0 : J.track) != null ? C : O.track,
      Nr = (E = J == null ? void 0 : J.thumb) != null ? E : O.thumb,
      bi = (k = J == null ? void 0 : J.valueLabel) != null ? k : O.valueLabel,
      Mr = ($ = J == null ? void 0 : J.mark) != null ? $ : O.mark,
      wi = (_ = J == null ? void 0 : J.markLabel) != null ? _ : O.markLabel,
      Dt = (T = J == null ? void 0 : J.input) != null ? T : O.input,
      Ir = Pt({
        elementType: $n,
        getSlotProps: ze,
        externalSlotProps: yi,
        externalForwardedProps: Te,
        additionalProps: v({}, wO($n) && { as: F }),
        ownerState: v({}, se, yi == null ? void 0 : yi.ownerState),
        className: [Oe.root, ee],
      }),
      Ju = Pt({
        elementType: Zs,
        externalSlotProps: Qu,
        ownerState: se,
        className: Oe.rail,
      }),
      Lr = Pt({
        elementType: ea,
        externalSlotProps: xi,
        additionalProps: { style: v({}, De[A].offset(ve), De[A].leap(Se)) },
        ownerState: v({}, se, xi == null ? void 0 : xi.ownerState),
        className: Oe.track,
      }),
      Ar = Pt({
        elementType: ta,
        getSlotProps: nt,
        externalSlotProps: Nr,
        ownerState: v({}, se, Nr == null ? void 0 : Nr.ownerState),
        className: Oe.thumb,
      }),
      na = Pt({
        elementType: vi,
        externalSlotProps: bi,
        ownerState: v({}, se, bi == null ? void 0 : bi.ownerState),
        className: Oe.valueLabel,
      }),
      fo = Pt({
        elementType: uo,
        externalSlotProps: Mr,
        ownerState: se,
        className: Oe.mark,
      }),
      po = Pt({
        elementType: co,
        externalSlotProps: wi,
        ownerState: se,
        className: Oe.markLabel,
      }),
      ra = Pt({
        elementType: gi,
        getSlotProps: xe,
        externalSlotProps: Dt,
        ownerState: se,
      });
    return S.jsxs(
      $n,
      v({}, Ir, {
        children: [
          S.jsx(Zs, v({}, Ju)),
          S.jsx(ea, v({}, Lr)),
          be
            .filter((Ye) => Ye.value >= oe && Ye.value <= te)
            .map((Ye, ut) => {
              const Si = Fl(Ye.value, oe, te),
                ho = De[A].offset(Si);
              let ae;
              return (
                Le === !1
                  ? (ae = D.indexOf(Ye.value) !== -1)
                  : (ae =
                      (Le === "normal" &&
                        (q
                          ? Ye.value >= D[0] && Ye.value <= D[D.length - 1]
                          : Ye.value <= D[0])) ||
                      (Le === "inverted" &&
                        (q
                          ? Ye.value <= D[0] || Ye.value >= D[D.length - 1]
                          : Ye.value >= D[0]))),
                S.jsxs(
                  x.Fragment,
                  {
                    children: [
                      S.jsx(
                        uo,
                        v(
                          { "data-index": ut },
                          fo,
                          !Bn(uo) && { markActive: ae },
                          {
                            style: v({}, ho, fo.style),
                            className: G(fo.className, ae && Oe.markActive),
                          },
                        ),
                      ),
                      Ye.label != null
                        ? S.jsx(
                            co,
                            v(
                              { "aria-hidden": !0, "data-index": ut },
                              po,
                              !Bn(co) && { markLabelActive: ae },
                              {
                                style: v({}, ho, po.style),
                                className: G(
                                  Oe.markLabel,
                                  po.className,
                                  ae && Oe.markLabelActive,
                                ),
                                children: Ye.label,
                              },
                            ),
                          )
                        : null,
                    ],
                  },
                  ut,
                )
              );
            }),
          D.map((Ye, ut) => {
            const Si = Fl(Ye, oe, te),
              ho = De[A].offset(Si),
              ae = Ee === "off" ? IO : vi;
            return S.jsx(
              ae,
              v(
                {},
                !Bn(ae) && {
                  valueLabelFormat: Fe,
                  valueLabelDisplay: Ee,
                  value: typeof Fe == "function" ? Fe(de(Ye), ut) : Fe,
                  index: ut,
                  open: at === ut || lt === ut || Ee === "on",
                  disabled: Y,
                },
                na,
                {
                  children: S.jsx(
                    ta,
                    v({ "data-index": ut }, Ar, {
                      className: G(
                        Oe.thumb,
                        Ar.className,
                        lt === ut && Oe.active,
                        M === ut && Oe.focusVisible,
                      ),
                      style: v({}, ho, _e(ut), Ar.style),
                      children: S.jsx(
                        gi,
                        v(
                          {
                            "data-index": ut,
                            "aria-label": ie ? ie(ut) : B,
                            "aria-valuenow": de(Ye),
                            "aria-labelledby": j,
                            "aria-valuetext": H ? H(de(Ye), ut) : I,
                            value: D[ut],
                          },
                          ra,
                        ),
                      ),
                    }),
                  ),
                },
              ),
              ut,
            );
          }),
        ],
      }),
    );
  }),
  j1 = LO;
var Gp = {};
Object.defineProperty(Gp, "__esModule", { value: !0 });
var F1 = (Gp.default = void 0),
  AO = BO(x),
  zO = e1;
function D1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (D1 = function (r) {
    return r ? n : t;
  })(e);
}
function BO(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = D1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function jO(e) {
  return Object.keys(e).length === 0;
}
function FO(e = null) {
  const t = AO.useContext(zO.ThemeContext);
  return !t || jO(t) ? e : t;
}
F1 = Gp.default = FO;
const DO = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  WO = V(uT, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  UO = x.forwardRef(function (t, n) {
    var r;
    const o = F1(),
      i = pe({ props: t, name: "MuiPopper" }),
      {
        anchorEl: s,
        component: a,
        components: l,
        componentsProps: u,
        container: c,
        disablePortal: p,
        keepMounted: f,
        modifiers: b,
        open: w,
        placement: y,
        popperOptions: P,
        popperRef: m,
        transition: h,
        slots: d,
        slotProps: g,
      } = i,
      C = K(i, DO),
      E =
        (r = d == null ? void 0 : d.root) != null
          ? r
          : l == null
            ? void 0
            : l.Root,
      k = v(
        {
          anchorEl: s,
          container: c,
          disablePortal: p,
          keepMounted: f,
          modifiers: b,
          open: w,
          placement: y,
          popperOptions: P,
          popperRef: m,
          transition: h,
        },
        C,
      );
    return S.jsx(
      WO,
      v(
        {
          as: a,
          direction: o == null ? void 0 : o.direction,
          slots: { root: E },
          slotProps: g ?? u,
        },
        k,
        { ref: n },
      ),
    );
  }),
  W1 = UO;
function VO(e) {
  return fe("MuiTooltip", e);
}
const HO = le("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  mr = HO,
  qO = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function KO(e) {
  return Math.round(e * 1e5) / 1e5;
}
const GO = (e) => {
    const {
        classes: t,
        disableInteractive: n,
        arrow: r,
        touch: o,
        placement: i,
      } = e,
      s = {
        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
        tooltip: [
          "tooltip",
          r && "tooltipArrow",
          o && "touch",
          `tooltipPlacement${X(i.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return he(s, VO, t);
  },
  YO = V(W1, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: n }) =>
    v(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: "none" },
      !t.disableInteractive && { pointerEvents: "auto" },
      !n && { pointerEvents: "none" },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${mr.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${mr.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${mr.arrow}`]: v(
          {},
          t.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          },
        ),
        [`&[data-popper-placement*="left"] .${mr.arrow}`]: v(
          {},
          t.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          },
        ),
      },
    ),
  ),
  XO = V("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${X(n.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : qe(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: "relative", margin: 0 },
      t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${KO(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${mr.popper}[data-popper-placement*="left"] &`]: v(
          { transformOrigin: "right center" },
          t.isRtl
            ? v({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
            : v({ marginRight: "14px" }, t.touch && { marginRight: "24px" }),
        ),
        [`.${mr.popper}[data-popper-placement*="right"] &`]: v(
          { transformOrigin: "left center" },
          t.isRtl
            ? v({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
            : v({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" }),
        ),
        [`.${mr.popper}[data-popper-placement*="top"] &`]: v(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          t.touch && { marginBottom: "24px" },
        ),
        [`.${mr.popper}[data-popper-placement*="bottom"] &`]: v(
          { transformOrigin: "center top", marginTop: "14px" },
          t.touch && { marginTop: "24px" },
        ),
      },
    ),
  ),
  QO = V("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow,
  })(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : qe(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let Ma = !1;
const kv = new Gs();
let ji = { x: 0, y: 0 };
function Ia(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const JO = x.forwardRef(function (t, n) {
    var r, o, i, s, a, l, u, c, p, f, b, w, y, P, m, h, d, g, C;
    const E = pe({ props: t, name: "MuiTooltip" }),
      {
        arrow: k = !1,
        children: $,
        components: _ = {},
        componentsProps: T = {},
        describeChild: N = !1,
        disableFocusListener: z = !1,
        disableHoverListener: L = !1,
        disableInteractive: B = !1,
        disableTouchListener: I = !1,
        enterDelay: j = 100,
        enterNextDelay: F = 0,
        enterTouchDelay: R = 700,
        followCursor: O = !1,
        id: W,
        leaveDelay: Z = 0,
        leaveTouchDelay: ee = 1500,
        onClose: ce,
        onOpen: Y,
        open: ie,
        placement: H = "bottom",
        PopperComponent: ue,
        PopperProps: te = {},
        slotProps: oe = {},
        slots: $e = {},
        title: ne,
        TransitionComponent: ke = Xd,
        TransitionProps: re,
      } = E,
      de = K(E, qO),
      J = x.isValidElement($) ? $ : S.jsx("span", { children: $ }),
      ge = sr(),
      Le = ge.direction === "rtl",
      [Ee, Fe] = x.useState(),
      [Te, se] = x.useState(null),
      De = x.useRef(!1),
      ze = B || O,
      xe = Hr(),
      nt = Hr(),
      at = Hr(),
      lt = Hr(),
      [A, M] = ti({
        controlled: ie,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let q = A;
    const me = zu(W),
      be = x.useRef(),
      D = ln(() => {
        be.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = be.current),
          (be.current = void 0)),
          lt.clear();
      });
    x.useEffect(() => D, [D]);
    const ve = (ae) => {
        kv.clear(), (Ma = !0), M(!0), Y && !q && Y(ae);
      },
      Se = ln((ae) => {
        kv.start(800 + Z, () => {
          Ma = !1;
        }),
          M(!1),
          ce && q && ce(ae),
          xe.start(ge.transitions.duration.shortest, () => {
            De.current = !1;
          });
      }),
      _e = (ae) => {
        (De.current && ae.type !== "touchstart") ||
          (Ee && Ee.removeAttribute("title"),
          nt.clear(),
          at.clear(),
          j || (Ma && F)
            ? nt.start(Ma ? F : j, () => {
                ve(ae);
              })
            : ve(ae));
      },
      Oe = (ae) => {
        nt.clear(),
          at.start(Z, () => {
            Se(ae);
          });
      },
      { isFocusVisibleRef: $n, onBlur: Zs, onFocus: ea, ref: ta } = ju(),
      [, vi] = x.useState(!1),
      uo = (ae) => {
        Zs(ae), $n.current === !1 && (vi(!1), Oe(ae));
      },
      co = (ae) => {
        Ee || Fe(ae.currentTarget),
          ea(ae),
          $n.current === !0 && (vi(!0), _e(ae));
      },
      gi = (ae) => {
        De.current = !0;
        const Wt = J.props;
        Wt.onTouchStart && Wt.onTouchStart(ae);
      },
      yi = (ae) => {
        gi(ae),
          at.clear(),
          xe.clear(),
          D(),
          (be.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          lt.start(R, () => {
            (document.body.style.WebkitUserSelect = be.current), _e(ae);
          });
      },
      Qu = (ae) => {
        J.props.onTouchEnd && J.props.onTouchEnd(ae),
          D(),
          at.start(ee, () => {
            Se(ae);
          });
      };
    x.useEffect(() => {
      if (!q) return;
      function ae(Wt) {
        (Wt.key === "Escape" || Wt.key === "Esc") && Se(Wt);
      }
      return (
        document.addEventListener("keydown", ae),
        () => {
          document.removeEventListener("keydown", ae);
        }
      );
    }, [Se, q]);
    const xi = Ve(J.ref, ta, Fe, n);
    !ne && ne !== 0 && (q = !1);
    const Nr = x.useRef(),
      bi = (ae) => {
        const Wt = J.props;
        Wt.onMouseMove && Wt.onMouseMove(ae),
          (ji = { x: ae.clientX, y: ae.clientY }),
          Nr.current && Nr.current.update();
      },
      Mr = {},
      wi = typeof ne == "string";
    N
      ? ((Mr.title = !q && wi && !L ? ne : null),
        (Mr["aria-describedby"] = q ? me : null))
      : ((Mr["aria-label"] = wi ? ne : null),
        (Mr["aria-labelledby"] = q && !wi ? me : null));
    const Dt = v(
        {},
        Mr,
        de,
        J.props,
        {
          className: G(de.className, J.props.className),
          onTouchStart: gi,
          ref: xi,
        },
        O ? { onMouseMove: bi } : {},
      ),
      Ir = {};
    I || ((Dt.onTouchStart = yi), (Dt.onTouchEnd = Qu)),
      L ||
        ((Dt.onMouseOver = Ia(_e, Dt.onMouseOver)),
        (Dt.onMouseLeave = Ia(Oe, Dt.onMouseLeave)),
        ze || ((Ir.onMouseOver = _e), (Ir.onMouseLeave = Oe))),
      z ||
        ((Dt.onFocus = Ia(co, Dt.onFocus)),
        (Dt.onBlur = Ia(uo, Dt.onBlur)),
        ze || ((Ir.onFocus = co), (Ir.onBlur = uo)));
    const Ju = x.useMemo(() => {
        var ae;
        let Wt = [
          {
            name: "arrow",
            enabled: !!Te,
            options: { element: Te, padding: 4 },
          },
        ];
        return (
          (ae = te.popperOptions) != null &&
            ae.modifiers &&
            (Wt = Wt.concat(te.popperOptions.modifiers)),
          v({}, te.popperOptions, { modifiers: Wt })
        );
      }, [Te, te]),
      Lr = v({}, E, {
        isRtl: Le,
        arrow: k,
        disableInteractive: ze,
        placement: H,
        PopperComponentProp: ue,
        touch: De.current,
      }),
      Ar = GO(Lr),
      na = (r = (o = $e.popper) != null ? o : _.Popper) != null ? r : YO,
      fo =
        (i =
          (s = (a = $e.transition) != null ? a : _.Transition) != null
            ? s
            : ke) != null
          ? i
          : Xd,
      po = (l = (u = $e.tooltip) != null ? u : _.Tooltip) != null ? l : XO,
      ra = (c = (p = $e.arrow) != null ? p : _.Arrow) != null ? c : QO,
      Ye = Gi(
        na,
        v({}, te, (f = oe.popper) != null ? f : T.popper, {
          className: G(
            Ar.popper,
            te == null ? void 0 : te.className,
            (b = (w = oe.popper) != null ? w : T.popper) == null
              ? void 0
              : b.className,
          ),
        }),
        Lr,
      ),
      ut = Gi(
        fo,
        v({}, re, (y = oe.transition) != null ? y : T.transition),
        Lr,
      ),
      Si = Gi(
        po,
        v({}, (P = oe.tooltip) != null ? P : T.tooltip, {
          className: G(
            Ar.tooltip,
            (m = (h = oe.tooltip) != null ? h : T.tooltip) == null
              ? void 0
              : m.className,
          ),
        }),
        Lr,
      ),
      ho = Gi(
        ra,
        v({}, (d = oe.arrow) != null ? d : T.arrow, {
          className: G(
            Ar.arrow,
            (g = (C = oe.arrow) != null ? C : T.arrow) == null
              ? void 0
              : g.className,
          ),
        }),
        Lr,
      );
    return S.jsxs(x.Fragment, {
      children: [
        x.cloneElement(J, Dt),
        S.jsx(
          na,
          v(
            {
              as: ue ?? W1,
              placement: H,
              anchorEl: O
                ? {
                    getBoundingClientRect: () => ({
                      top: ji.y,
                      left: ji.x,
                      right: ji.x,
                      bottom: ji.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : Ee,
              popperRef: Nr,
              open: Ee ? q : !1,
              id: me,
              transition: !0,
            },
            Ir,
            Ye,
            {
              popperOptions: Ju,
              children: ({ TransitionProps: ae }) =>
                S.jsx(
                  fo,
                  v({ timeout: ge.transitions.duration.shorter }, ae, ut, {
                    children: S.jsxs(
                      po,
                      v({}, Si, {
                        children: [
                          ne,
                          k ? S.jsx(ra, v({}, ho, { ref: se })) : null,
                        ],
                      }),
                    ),
                  }),
                ),
            },
          ),
        ),
      ],
    });
  }),
  ZO = JO;
function e5(e) {
  return fe("MuiDivider", e);
}
const Ev = le("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  t5 = [
    "absolute",
    "children",
    "className",
    "component",
    "flexItem",
    "light",
    "orientation",
    "role",
    "textAlign",
    "variant",
  ],
  n5 = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return he(
      {
        root: [
          "root",
          t && "absolute",
          l,
          i && "light",
          s === "vertical" && "vertical",
          o && "flexItem",
          n && "withChildren",
          n && s === "vertical" && "withChildrenVertical",
          a === "right" && s !== "vertical" && "textAlignRight",
          a === "left" && s !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
      },
      e5,
      r,
    );
  },
  r5 = V("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === "vertical" && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === "vertical" && t.withChildrenVertical,
        n.textAlign === "right" &&
          n.orientation !== "vertical" &&
          t.textAlignRight,
        n.textAlign === "left" &&
          n.orientation !== "vertical" &&
          t.textAlignLeft,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      v(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: "thin",
        },
        t.absolute && {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : qe(e.palette.divider, 0.08),
        },
        t.variant === "inset" && { marginLeft: 72 },
        t.variant === "middle" &&
          t.orientation === "horizontal" && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2),
          },
        t.variant === "middle" &&
          t.orientation === "vertical" && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
        t.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
        t.flexItem && { alignSelf: "stretch", height: "auto" },
      ),
    ({ ownerState: e }) =>
      v(
        {},
        e.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          "&::before, &::after": { content: '""', alignSelf: "center" },
        },
      ),
    ({ theme: e, ownerState: t }) =>
      v(
        {},
        t.children &&
          t.orientation !== "vertical" && {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
            },
          },
      ),
    ({ theme: e, ownerState: t }) =>
      v(
        {},
        t.children &&
          t.orientation === "vertical" && {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
            },
          },
      ),
    ({ ownerState: e }) =>
      v(
        {},
        e.textAlign === "right" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        e.textAlign === "left" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          },
      ),
  ),
  o5 = V("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === "vertical" && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      },
    ),
  ),
  U1 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiDivider" }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? "div" : "hr",
        flexItem: l = !1,
        light: u = !1,
        orientation: c = "horizontal",
        role: p = a !== "hr" ? "separator" : void 0,
        textAlign: f = "center",
        variant: b = "fullWidth",
      } = r,
      w = K(r, t5),
      y = v({}, r, {
        absolute: o,
        component: a,
        flexItem: l,
        light: u,
        orientation: c,
        role: p,
        textAlign: f,
        variant: b,
      }),
      P = n5(y);
    return S.jsx(
      r5,
      v({ as: a, className: G(P.root, s), role: p, ref: n, ownerState: y }, w, {
        children: i
          ? S.jsx(o5, { className: P.wrapper, ownerState: y, children: i })
          : null,
      }),
    );
  });
U1.muiSkipListHighlight = !0;
const V1 = U1,
  i5 = le("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  Pv = i5,
  s5 = le("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  Rv = s5;
function a5(e) {
  return fe("MuiMenuItem", e);
}
const l5 = le("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Fi = l5,
  u5 = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  c5 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  d5 = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      l = he(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        a5,
        s,
      );
    return v({}, s, l);
  },
  f5 = V(Xs, {
    shouldForwardProp: (e) => Ft(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: c5,
  })(({ theme: e, ownerState: t }) =>
    v(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${Fi.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : qe(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Fi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : qe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity,
                ),
          },
        },
        [`&.${Fi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : qe(
                e.palette.primary.main,
                e.palette.action.selectedOpacity +
                  e.palette.action.hoverOpacity,
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : qe(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Fi.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${Fi.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${Ev.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${Ev.inset}`]: { marginLeft: 52 },
        [`& .${Rv.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Rv.inset}`]: { paddingLeft: 36 },
        [`& .${Pv.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        v(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Pv.root} svg`]: { fontSize: "1.25rem" } },
        ),
    ),
  ),
  p5 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: c = "menuitem",
        tabIndex: p,
        className: f,
      } = r,
      b = K(r, u5),
      w = x.useContext(Xr),
      y = x.useMemo(
        () => ({ dense: s || w.dense || !1, disableGutters: l }),
        [w.dense, s, l],
      ),
      P = x.useRef(null);
    Yt(() => {
      o && P.current && P.current.focus();
    }, [o]);
    const m = v({}, r, { dense: y.dense, divider: a, disableGutters: l }),
      h = d5(r),
      d = Ve(P, n);
    let g;
    return (
      r.disabled || (g = p !== void 0 ? p : -1),
      S.jsx(Xr.Provider, {
        value: y,
        children: S.jsx(
          f5,
          v(
            {
              ref: d,
              role: c,
              tabIndex: g,
              component: i,
              focusVisibleClassName: G(h.focusVisible, u),
              className: G(h.root, f),
            },
            b,
            { ownerState: m, classes: h },
          ),
        ),
      })
    );
  }),
  H1 = p5;
function Di(e) {
  if (typeof window > "u") return e;
  const t = x.useRef(null);
  return (
    x.useLayoutEffect(() => {
      t.current = e;
    }),
    x.useCallback((...n) => {
      var r;
      (r = t.current) === null || r === void 0 || r.call(t, ...n);
    }, [])
  );
}
const $v = {};
function h5(e, t) {
  $v[e] ||
    (($v[e] = !0), console.error("[material-ui-popup-state] WARNING", t));
}
const m5 = {
  isOpen: !1,
  setAnchorElUsed: !1,
  anchorEl: void 0,
  anchorPosition: void 0,
  hovered: !1,
  focused: !1,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: !1,
  _deferNextClose: !1,
};
function v5({
  parentPopupState: e,
  popupId: t,
  variant: n,
  disableAutoFocus: r,
}) {
  const o = x.useRef(!0);
  x.useEffect(
    () => (
      (o.current = !0),
      () => {
        o.current = !1;
      }
    ),
    [],
  );
  const [i, s] = x.useState(m5),
    a = x.useCallback((h) => {
      o.current && s(h);
    }, []),
    l = x.useCallback(
      (h) => a((d) => ({ ...d, setAnchorElUsed: !0, anchorEl: h ?? void 0 })),
      [],
    ),
    u = Di((h) => (i.isOpen ? f(h) : c(h), i)),
    c = Di((h) => {
      const d = h instanceof Element ? void 0 : h,
        g =
          h instanceof Element
            ? h
            : (h == null ? void 0 : h.currentTarget) instanceof Element
              ? h.currentTarget
              : void 0;
      if ((d == null ? void 0 : d.type) === "touchstart") {
        a((_) => ({ ..._, _deferNextOpen: !0 }));
        return;
      }
      const C = d == null ? void 0 : d.clientX,
        E = d == null ? void 0 : d.clientY,
        k =
          typeof C == "number" && typeof E == "number"
            ? { left: C, top: E }
            : void 0,
        $ = (_) => {
          if (
            (!h &&
              !_.setAnchorElUsed &&
              n !== "dialog" &&
              h5(
                "missingEventOrAnchorEl",
                "eventOrAnchorEl should be defined if setAnchorEl is not used",
              ),
            e)
          ) {
            if (!e.isOpen) return _;
            setTimeout(() => e._setChildPopupState(m));
          }
          const T = {
            ..._,
            isOpen: !0,
            anchorPosition: k,
            hovered: (d == null ? void 0 : d.type) === "mouseover" || _.hovered,
            focused: (d == null ? void 0 : d.type) === "focus" || _.focused,
            _openEventType: d == null ? void 0 : d.type,
          };
          return (
            d != null && d.currentTarget
              ? _.setAnchorElUsed ||
                (T.anchorEl = d == null ? void 0 : d.currentTarget)
              : g && (T.anchorEl = g),
            T
          );
        };
      a((_) =>
        _._deferNextOpen
          ? (setTimeout(() => a($), 0), { ..._, _deferNextOpen: !1 })
          : $(_),
      );
    }),
    p = (h) => {
      const { _childPopupState: d } = h;
      return (
        setTimeout(() => {
          d == null || d.close(), e == null || e._setChildPopupState(null);
        }),
        { ...h, isOpen: !1, hovered: !1, focused: !1 }
      );
    },
    f = Di((h) => {
      const d = h instanceof Element ? void 0 : h;
      if ((d == null ? void 0 : d.type) === "touchstart") {
        a((g) => ({ ...g, _deferNextClose: !0 }));
        return;
      }
      a((g) =>
        g._deferNextClose
          ? (setTimeout(() => a(p), 0), { ...g, _deferNextClose: !1 })
          : p(g),
      );
    }),
    b = x.useCallback((h, d) => {
      h ? c(d) : f(d);
    }, []),
    w = Di((h) => {
      const { relatedTarget: d } = h;
      a((g) =>
        g.hovered && !(d instanceof Element && Jd(d, m))
          ? g.focused
            ? { ...g, hovered: !1 }
            : p(g)
          : g,
      );
    }),
    y = Di((h) => {
      if (!h) return;
      const { relatedTarget: d } = h;
      a((g) =>
        g.focused && !(d instanceof Element && Jd(d, m))
          ? g.hovered
            ? { ...g, focused: !1 }
            : p(g)
          : g,
      );
    }),
    P = x.useCallback((h) => a((d) => ({ ...d, _childPopupState: h })), []),
    m = {
      ...i,
      setAnchorEl: l,
      popupId: t,
      variant: n,
      open: c,
      close: f,
      toggle: u,
      setOpen: b,
      onBlur: y,
      onMouseLeave: w,
      disableAutoFocus: r ?? !!(i.hovered || i.focused),
      _setChildPopupState: P,
    };
  return m;
}
function g5({ isOpen: e, popupId: t, variant: n }) {
  return {
    ...(n === "popover"
      ? { "aria-haspopup": !0, "aria-controls": e && t != null ? t : void 0 }
      : n === "popper"
        ? { "aria-describedby": e && t != null ? t : void 0 }
        : void 0),
  };
}
function y5(e) {
  return { ...g5(e), onClick: e.open, onTouchStart: e.open };
}
function x5({
  isOpen: e,
  anchorEl: t,
  anchorPosition: n,
  close: r,
  popupId: o,
  onMouseLeave: i,
  disableAutoFocus: s,
  _openEventType: a,
}) {
  return {
    id: o,
    anchorEl: t,
    anchorPosition: n,
    anchorReference: a === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: r,
    onMouseLeave: i,
    ...(s && {
      autoFocus: !1,
      disableAutoFocusItem: !0,
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0,
    }),
  };
}
function b5(e, { popupId: t }) {
  if (!t) return null;
  const n = typeof e.getRootNode == "function" ? e.getRootNode() : document;
  return typeof n.getElementById == "function" ? n.getElementById(t) : null;
}
function Jd(e, t) {
  const { anchorEl: n, _childPopupState: r } = t;
  return Tv(n, e) || Tv(b5(e, t), e) || (r != null && Jd(e, r));
}
function Tv(e, t) {
  if (!e) return !1;
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentElement;
  }
  return !1;
}
function q1({
  children: e,
  popupId: t,
  variant: n,
  parentPopupState: r,
  disableAutoFocus: o,
}) {
  const i = v5({
      popupId: t,
      variant: n,
      parentPopupState: r,
      disableAutoFocus: o,
    }),
    s = e(i);
  return s ?? null;
}
q1.propTypes = {
  children: Oi.func.isRequired,
  popupId: Oi.string,
  variant: Oi.oneOf(["popover", "popper"]).isRequired,
  parentPopupState: Oi.object,
  disableAutoFocus: Oi.bool,
};
function w5(e) {
  return fe("MuiCollapse", e);
}
le("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const S5 = [
    "addEndListener",
    "children",
    "className",
    "collapsedSize",
    "component",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  C5 = (e) => {
    const { orientation: t, classes: n } = e,
      r = {
        root: ["root", `${t}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${t}`],
        wrapperInner: ["wrapperInner", `${t}`],
      };
    return he(r, w5, n);
  },
  k5 = V("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.state === "entered" && t.entered,
        n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        height: 0,
        overflow: "hidden",
        transition: e.transitions.create("height"),
      },
      t.orientation === "horizontal" && {
        height: "auto",
        width: 0,
        transition: e.transitions.create("width"),
      },
      t.state === "entered" &&
        v(
          { height: "auto", overflow: "visible" },
          t.orientation === "horizontal" && { width: "auto" },
        ),
      t.state === "exited" &&
        !t.in &&
        t.collapsedSize === "0px" && { visibility: "hidden" },
    ),
  ),
  E5 = V("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper,
  })(({ ownerState: e }) =>
    v(
      { display: "flex", width: "100%" },
      e.orientation === "horizontal" && { width: "auto", height: "100%" },
    ),
  ),
  P5 = V("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner,
  })(({ ownerState: e }) =>
    v(
      { width: "100%" },
      e.orientation === "horizontal" && { width: "auto", height: "100%" },
    ),
  ),
  K1 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiCollapse" }),
      {
        addEndListener: o,
        children: i,
        className: s,
        collapsedSize: a = "0px",
        component: l,
        easing: u,
        in: c,
        onEnter: p,
        onEntered: f,
        onEntering: b,
        onExit: w,
        onExited: y,
        onExiting: P,
        orientation: m = "vertical",
        style: h,
        timeout: d = Vy.standard,
        TransitionComponent: g = Fu,
      } = r,
      C = K(r, S5),
      E = v({}, r, { orientation: m, collapsedSize: a }),
      k = C5(E),
      $ = sr(),
      _ = Hr(),
      T = x.useRef(null),
      N = x.useRef(),
      z = typeof a == "number" ? `${a}px` : a,
      L = m === "horizontal",
      B = L ? "width" : "height",
      I = x.useRef(null),
      j = Ve(n, I),
      F = (H) => (ue) => {
        if (H) {
          const te = I.current;
          ue === void 0 ? H(te) : H(te, ue);
        }
      },
      R = () => (T.current ? T.current[L ? "clientWidth" : "clientHeight"] : 0),
      O = F((H, ue) => {
        T.current && L && (T.current.style.position = "absolute"),
          (H.style[B] = z),
          p && p(H, ue);
      }),
      W = F((H, ue) => {
        const te = R();
        T.current && L && (T.current.style.position = "");
        const { duration: oe, easing: $e } = Pr(
          { style: h, timeout: d, easing: u },
          { mode: "enter" },
        );
        if (d === "auto") {
          const ne = $.transitions.getAutoHeightDuration(te);
          (H.style.transitionDuration = `${ne}ms`), (N.current = ne);
        } else
          H.style.transitionDuration = typeof oe == "string" ? oe : `${oe}ms`;
        (H.style[B] = `${te}px`),
          (H.style.transitionTimingFunction = $e),
          b && b(H, ue);
      }),
      Z = F((H, ue) => {
        (H.style[B] = "auto"), f && f(H, ue);
      }),
      ee = F((H) => {
        (H.style[B] = `${R()}px`), w && w(H);
      }),
      ce = F(y),
      Y = F((H) => {
        const ue = R(),
          { duration: te, easing: oe } = Pr(
            { style: h, timeout: d, easing: u },
            { mode: "exit" },
          );
        if (d === "auto") {
          const $e = $.transitions.getAutoHeightDuration(ue);
          (H.style.transitionDuration = `${$e}ms`), (N.current = $e);
        } else
          H.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
        (H.style[B] = z), (H.style.transitionTimingFunction = oe), P && P(H);
      }),
      ie = (H) => {
        d === "auto" && _.start(N.current || 0, H), o && o(I.current, H);
      };
    return S.jsx(
      g,
      v(
        {
          in: c,
          onEnter: O,
          onEntered: Z,
          onEntering: W,
          onExit: ee,
          onExited: ce,
          onExiting: Y,
          addEndListener: ie,
          nodeRef: I,
          timeout: d === "auto" ? null : d,
        },
        C,
        {
          children: (H, ue) =>
            S.jsx(
              k5,
              v(
                {
                  as: l,
                  className: G(
                    k.root,
                    s,
                    {
                      entered: k.entered,
                      exited: !c && z === "0px" && k.hidden,
                    }[H],
                  ),
                  style: v({ [L ? "minWidth" : "minHeight"]: z }, h),
                  ref: j,
                },
                ue,
                {
                  ownerState: v({}, E, { state: H }),
                  children: S.jsx(E5, {
                    ownerState: v({}, E, { state: H }),
                    className: k.wrapper,
                    ref: T,
                    children: S.jsx(P5, {
                      ownerState: v({}, E, { state: H }),
                      className: k.wrapperInner,
                      children: i,
                    }),
                  }),
                },
              ),
            ),
        },
      ),
    );
  });
K1.muiSupportAuto = !0;
const R5 = K1;
function $5(e) {
  return fe("MuiIconButton", e);
}
const T5 = le("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  _5 = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  O5 = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${X(r)}`,
          o && `edge${X(o)}`,
          `size${X(i)}`,
        ],
      };
    return he(s, $5, t);
  },
  N5 = V(Xs, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${X(n.color)}`],
        n.edge && t[`edge${X(n.edge)}`],
        t[`size${X(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      v(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : qe(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 },
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return v(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          v(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": v(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : qe(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } },
              ),
            },
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${T5.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        },
      );
    },
  ),
  M5 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: c = "medium",
      } = r,
      p = K(r, _5),
      f = v({}, r, {
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: c,
      }),
      b = O5(f);
    return S.jsx(
      N5,
      v(
        {
          className: G(b.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: l,
          ref: n,
        },
        p,
        { ownerState: f, children: i },
      ),
    );
  }),
  Zd = M5;
var Yp = {},
  I5 = fi;
Object.defineProperty(Yp, "__esModule", { value: !0 });
var ef = (Yp.default = void 0),
  L5 = I5(Uu()),
  A5 = S;
ef = Yp.default = (0, L5.default)(
  (0, A5.jsx)("path", { d: "m7 10 5 5 5-5z" }),
  "ArrowDropDown",
);
var Xp = {},
  z5 = fi;
Object.defineProperty(Xp, "__esModule", { value: !0 });
var G1 = (Xp.default = void 0),
  B5 = z5(Uu()),
  j5 = S;
G1 = Xp.default = (0, B5.default)(
  (0, j5.jsx)("path", { d: "m7 14 5-5 5 5z" }),
  "ArrowDropUp",
);
function F5(e) {
  return fe("MuiAppBar", e);
}
le("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const D5 = ["className", "color", "enableColorOnDark", "position"],
  W5 = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${X(t)}`, `position${X(n)}`] };
    return he(o, F5, r);
  },
  La = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  U5 = V(Yu, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${X(n.position)}`], t[`color${X(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return v(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        v(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            v(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" },
            ),
        ),
      e.vars &&
        v(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : La(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg,
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : La(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary,
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : La(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main,
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : La(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText,
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          },
        ),
    );
  }),
  V5 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
      } = r,
      l = K(r, D5),
      u = v({}, r, { color: i, position: a, enableColorOnDark: s }),
      c = W5(u);
    return S.jsx(
      U5,
      v(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: G(c.root, o, a === "fixed" && "mui-fixed"),
          ref: n,
        },
        l,
      ),
    );
  }),
  H5 = V5,
  q5 = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function K5(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = Dn(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s =
      u.getPropertyValue("-webkit-transform") ||
      u.getPropertyValue("transform");
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + a - r.left}px)`
      : `translateX(${i.innerWidth + a - r.left}px)`
    : e === "right"
      ? o
        ? `translateX(-${r.right - o.left - a}px)`
        : `translateX(-${r.left + r.width - a}px)`
      : e === "up"
        ? o
          ? `translateY(${o.bottom + l - r.top}px)`
          : `translateY(${i.innerHeight + l - r.top}px)`
        : o
          ? `translateY(-${r.top - o.top + r.height - l}px)`
          : `translateY(-${r.top + r.height - l}px)`;
}
function G5(e) {
  return typeof e == "function" ? e() : e;
}
function Aa(e, t, n) {
  const r = G5(n),
    o = K5(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const Y5 = x.forwardRef(function (t, n) {
    const r = sr(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp,
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: s,
        appear: a = !0,
        children: l,
        container: u,
        direction: c = "down",
        easing: p = o,
        in: f,
        onEnter: b,
        onEntered: w,
        onEntering: y,
        onExit: P,
        onExited: m,
        onExiting: h,
        style: d,
        timeout: g = i,
        TransitionComponent: C = Fu,
      } = t,
      E = K(t, q5),
      k = x.useRef(null),
      $ = Ve(l.ref, k, n),
      _ = (R) => (O) => {
        R && (O === void 0 ? R(k.current) : R(k.current, O));
      },
      T = _((R, O) => {
        Aa(c, R, u), Up(R), b && b(R, O);
      }),
      N = _((R, O) => {
        const W = Pr({ timeout: g, style: d, easing: p }, { mode: "enter" });
        (R.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          v({}, W),
        )),
          (R.style.transition = r.transitions.create("transform", v({}, W))),
          (R.style.webkitTransform = "none"),
          (R.style.transform = "none"),
          y && y(R, O);
      }),
      z = _(w),
      L = _(h),
      B = _((R) => {
        const O = Pr({ timeout: g, style: d, easing: p }, { mode: "exit" });
        (R.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          O,
        )),
          (R.style.transition = r.transitions.create("transform", O)),
          Aa(c, R, u),
          P && P(R);
      }),
      I = _((R) => {
        (R.style.webkitTransition = ""), (R.style.transition = ""), m && m(R);
      }),
      j = (R) => {
        s && s(k.current, R);
      },
      F = x.useCallback(() => {
        k.current && Aa(c, k.current, u);
      }, [c, u]);
    return (
      x.useEffect(() => {
        if (f || c === "down" || c === "right") return;
        const R = Au(() => {
            k.current && Aa(c, k.current, u);
          }),
          O = Dn(k.current);
        return (
          O.addEventListener("resize", R),
          () => {
            R.clear(), O.removeEventListener("resize", R);
          }
        );
      }, [c, f, u]),
      x.useEffect(() => {
        f || F();
      }, [f, F]),
      S.jsx(
        C,
        v(
          {
            nodeRef: k,
            onEnter: T,
            onEntered: z,
            onEntering: N,
            onExit: B,
            onExited: I,
            onExiting: L,
            addEndListener: j,
            appear: a,
            in: f,
            timeout: g,
          },
          E,
          {
            children: (R, O) =>
              x.cloneElement(
                l,
                v(
                  {
                    ref: $,
                    style: v(
                      { visibility: R === "exited" && !f ? "hidden" : void 0 },
                      d,
                      l.props.style,
                    ),
                  },
                  O,
                ),
              ),
          },
        ),
      )
    );
  }),
  X5 = Y5;
function Q5(e) {
  return fe("MuiDrawer", e);
}
le("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const J5 = ["BackdropProps"],
  Z5 = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  Y1 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  e4 = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${X(n)}`,
          r !== "temporary" && `paperAnchorDocked${X(n)}`,
        ],
      };
    return he(o, Q5, t);
  },
  t4 = V(M1, { name: "MuiDrawer", slot: "Root", overridesResolver: Y1 })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer }),
  ),
  _v = V("div", {
    shouldForwardProp: Ft,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Y1,
  })({ flex: "0 0 auto" }),
  n4 = V(Yu, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${X(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${X(n.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    v(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      t.anchor === "left" && { left: 0 },
      t.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "right" && { right: 0 },
      t.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "left" &&
        t.variant !== "temporary" && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "top" &&
        t.variant !== "temporary" && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "right" &&
        t.variant !== "temporary" && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "bottom" &&
        t.variant !== "temporary" && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
        },
    ),
  ),
  X1 = { left: "right", right: "left", top: "down", bottom: "up" };
function r4(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function o4(e, t) {
  return e.direction === "rtl" && r4(t) ? X1[t] : t;
}
const i4 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiDrawer" }),
      o = sr(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        anchor: s = "left",
        BackdropProps: a,
        children: l,
        className: u,
        elevation: c = 16,
        hideBackdrop: p = !1,
        ModalProps: { BackdropProps: f } = {},
        onClose: b,
        open: w = !1,
        PaperProps: y = {},
        SlideProps: P,
        TransitionComponent: m = X5,
        transitionDuration: h = i,
        variant: d = "temporary",
      } = r,
      g = K(r.ModalProps, J5),
      C = K(r, Z5),
      E = x.useRef(!1);
    x.useEffect(() => {
      E.current = !0;
    }, []);
    const k = o4(o, s),
      _ = v({}, r, { anchor: s, elevation: c, open: w, variant: d }, C),
      T = e4(_),
      N = S.jsx(
        n4,
        v({ elevation: d === "temporary" ? c : 0, square: !0 }, y, {
          className: G(T.paper, y.className),
          ownerState: _,
          children: l,
        }),
      );
    if (d === "permanent")
      return S.jsx(
        _v,
        v({ className: G(T.root, T.docked, u), ownerState: _, ref: n }, C, {
          children: N,
        }),
      );
    const z = S.jsx(
      m,
      v({ in: w, direction: X1[k], timeout: h, appear: E.current }, P, {
        children: N,
      }),
    );
    return d === "persistent"
      ? S.jsx(
          _v,
          v({ className: G(T.root, T.docked, u), ownerState: _, ref: n }, C, {
            children: z,
          }),
        )
      : S.jsx(
          t4,
          v(
            {
              BackdropProps: v({}, a, f, { transitionDuration: h }),
              className: G(T.root, T.modal, u),
              open: w,
              ownerState: _,
              onClose: b,
              hideBackdrop: p,
              ref: n,
            },
            C,
            g,
            { children: z },
          ),
        );
  }),
  s4 = i4;
function a4(e) {
  return fe("MuiToolbar", e);
}
le("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const l4 = ["className", "component", "disableGutters", "variant"],
  u4 = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return he({ root: ["root", !n && "gutters", r] }, a4, t);
  },
  c4 = V("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      v(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 },
      ),
    ({ theme: e, ownerState: t }) =>
      t.variant === "regular" && e.mixins.toolbar,
  ),
  d4 = x.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular",
      } = r,
      l = K(r, l4),
      u = v({}, r, { component: i, disableGutters: s, variant: a }),
      c = u4(u);
    return S.jsx(
      c4,
      v({ as: i, className: G(c.root, o), ref: n, ownerState: u }, l),
    );
  }),
  f4 = d4;
function Q1(e) {
  return S.jsx(In, {
    sx: { fontSize: 14 },
    color: "text.secondary",
    gutterBottom: !0,
    marginBottom: "14px",
    children: e.children,
  });
}
function tf(e) {
  return S.jsx(r1, {
    onChange: e.onChange,
    sx: { mt: "-10px" },
    control: S.jsx(Np, { name: e.name, checked: e.checked }),
    label: S.jsx(In, { color: "text.secondary", children: e.text }),
    children: e.children,
  });
}
const p4 = (e) => {
    const [t, n] = x.useState(null),
      r = !!t;
    let [o, i] = x.useState(e.defaultResolution);
    const s = (l) => {
        n(l.currentTarget);
      },
      a = () => {
        n(null);
      };
    return (
      Qr(() => {
        e.onResolutionChange(o);
      }, [o]),
      S.jsxs("div", {
        children: [
          S.jsxs(Wu, {
            color: "grey",
            variant: "contained",
            id: "basic-button",
            "aria-controls": r ? "basic-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": r ? "true" : void 0,
            onClick: s,
            children: ["Resolution: ", o],
          }),
          S.jsx(Vp, {
            id: "basic-menu",
            anchorEl: t,
            open: r,
            onClose: a,
            MenuListProps: { "aria-labelledby": "basic-button" },
            children: e.resolutions.map((l) =>
              S.jsx(
                H1,
                {
                  onClick: function () {
                    i(l), a();
                  },
                  children: l,
                },
                l,
              ),
            ),
          }),
        ],
      })
    );
  },
  h4 = (e) => {
    const t = e.device.devicePath,
      [n, r] = x.useState(e.device.options.bitrate),
      [o, i] = x.useState(e.device.options.bitrate),
      [s, a] = x.useState(e.device.options.h264),
      [l, u] = x.useState(e.device.options.vbr);
    return (
      Qr(() => {
        Xn("/options", {
          devicePath: t,
          options: { bitrate: n, h264: s, vbr: l },
        });
      }, [n, s, l]),
      S.jsxs(S.Fragment, {
        children: [
          S.jsxs(Q1, {
            children: [
              S.jsxs("span", { children: ["Bitrate: ", o, " Mbps"] }),
              S.jsx(j1, {
                name: "bitrate",
                defaultValue: e.device.options.bitrate,
                disabled: l,
                onChangeCommitted: (c, p) => {
                  r(p);
                },
                onChange: (c, p) => {
                  i(p);
                },
                style: { marginLeft: "20px", width: "calc(100% - 25px)" },
                size: "small",
                max: 15,
                min: 0.1,
                step: 0.1,
              }),
            ],
          }),
          S.jsxs(Kp, {
            children: [
              S.jsx(tf, {
                checked: s,
                name: "h264Switch",
                onChange: (c) => {
                  a(c.target.checked), u(c.target.checked ? !1 : l);
                },
                text: "H.264",
              }),
              S.jsx(tf, {
                checked: l,
                name: "vbrSwitch",
                onChange: (c) => {
                  u(c.target.checked), a(c.target.checked ? !1 : s);
                },
                text: "VBR (Variable Bitrate)",
              }),
            ],
          }),
        ],
      })
    );
  },
  m4 = (e) => {
    const t = e.device.devicePath,
      [n, r] = x.useState(e.device.stream.isStreaming),
      [o, i] = x.useState(e.device.stream.host),
      [s, a] = x.useState(e.device.stream.port),
      [l, u] = x.useState(e.device.stream.resolution),
      c = () => {
        Xn(
          "/restartStream",
          { devicePath: t, stream: { hostAddress: o, port: s, resolution: l } },
          (p) => {
            let f = JSON.parse(p.response);
            a(f.port);
          },
        );
      };
    return (
      Qr(() => {
        c();
      }, [l]),
      Qr(() => {
        n
          ? Xn(
              "/addStream",
              { devicePath: t, stream: { hostAddress: o, port: s } },
              (p) => {
                let f = JSON.parse(p.response);
                a(f.port);
              },
            )
          : Xn("/removeStream", { devicePath: t });
      }, [n]),
      S.jsxs(Kp, {
        children: [
          S.jsx(tf, {
            onChange: (p) => {
              r(p.target.checked);
            },
            checked: n,
            name: "streamSwitch",
            text: "UDP Stream",
          }),
          n
            ? S.jsxs(S.Fragment, {
                children: [
                  S.jsx(Qd, {
                    label: "address",
                    onChange: (p) => {
                      i(p.target.value);
                    },
                    variant: "standard",
                    value: o,
                  }),
                  S.jsx(Qd, {
                    label: "port",
                    onChange: (p) => {
                      a(p.target.value);
                    },
                    variant: "standard",
                    type: "number",
                    value: s,
                  }),
                  S.jsx("div", {
                    style: { marginTop: "20px" },
                    children: S.jsx(p4, {
                      onResolutionChange: (p) => {
                        u(p);
                      },
                      defaultResolution: l,
                      resolutions: e.device.resolutions,
                    }),
                  }),
                  S.jsx(Wu, {
                    color: "grey",
                    variant: "contained",
                    style: { marginTop: "20px" },
                    onClick: c,
                    children: "Restart Stream",
                  }),
                ],
              })
            : void 0,
        ],
      })
    );
  },
  v4 = (e) => {
    const t = e.controls,
      [n, r] = x.useState(!0);
    return S.jsx(S.Fragment, {
      children: S.jsxs("div", {
        style: { marginTop: "25px" },
        children: [
          S.jsx("span", { children: "Camera Controls" }),
          S.jsx(Zd, {
            onClick: () => r(!n),
            children: n ? S.jsx(ef, {}) : S.jsx(G1, {}),
          }),
          S.jsx(V1, {}),
          S.jsxs(R5, {
            in: !n,
            children: [
              S.jsx(Kp, {
                style: { marginTop: "25px" },
                children: t.map((o, i) => {
                  switch (o.type) {
                    case "int": {
                      let { min: s, max: a, step: l, name: u, id: c } = o,
                        p = o.value,
                        [f, b] = x.useState(p);
                      return (
                        Qr(() => {
                          Xn("/setControl", {
                            devicePath: e.devicePath,
                            id: c,
                            value: f,
                          });
                        }, [f]),
                        S.jsxs(S.Fragment, {
                          children: [
                            S.jsx("span", { children: u }),
                            S.jsx(j1, {
                              onChangeCommitted: (w, y) => {
                                b(y);
                              },
                              name: `control-${c}`,
                              min: s,
                              max: a,
                              step: l,
                              defaultValue: p,
                              style: {
                                marginLeft: "20px",
                                width: "calc(100% - 25px)",
                              },
                            }),
                          ],
                        })
                      );
                    }
                    case "bool": {
                      let { name: s, id: a } = o,
                        l = o.value;
                      s.includes("White Balance") &&
                        (s = "AI TrueColor Technology™");
                      let [u, c] = x.useState(l);
                      return (
                        Qr(() => {
                          Xn("/setControl", {
                            devicePath: e.devicePath,
                            id: a,
                            value: u,
                          });
                        }, [u]),
                        S.jsxs(S.Fragment, {
                          children: [
                            S.jsx("span", { children: s }),
                            S.jsx(Np, {
                              onChange: (p, f) => {
                                c(f);
                              },
                              name: `control-${a}`,
                              defaultChecked: l == 1,
                            }),
                          ],
                        })
                      );
                    }
                    case "menu": {
                      let { menu: s, name: a, id: l } = o,
                        u = s[o.value],
                        [c, p] = x.useState(u);
                      return (
                        Qr(() => {
                          Xn("/setControl", {
                            devicePath: e.devicePath,
                            id: l,
                            value: c,
                          });
                        }, [p]),
                        S.jsx(S.Fragment, {
                          children: S.jsx(q1, {
                            variant: "popover",
                            popupId: l,
                            children: (f) =>
                              S.jsxs(S.Fragment, {
                                children: [
                                  S.jsxs("div", {
                                    children: [
                                      S.jsxs("span", {
                                        children: [a, ": ", c],
                                      }),
                                      S.jsx(Zd, {
                                        variant: "text",
                                        ...y5(f),
                                        children: S.jsx(ef, {}),
                                      }),
                                    ],
                                  }),
                                  S.jsx(Vp, {
                                    ...x5(f),
                                    children: s.map((b, w) =>
                                      S.jsx(
                                        H1,
                                        {
                                          onClick: () => {
                                            p(b), f.close();
                                          },
                                          children: b,
                                        },
                                        l,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                          }),
                        })
                      );
                    }
                  }
                }),
              }),
              S.jsx(Vd, {}),
              S.jsx(Wu, {
                color: "grey",
                variant: "contained",
                onClick: async () => {
                  for (let o of t) {
                    let i = o.id,
                      s = o.default;
                    await nR("/setControl", {
                      devicePath: e.devicePath,
                      id: i,
                      value: s,
                    });
                  }
                  location.reload();
                },
                children: "Set to Default",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ov = (e) => {
    const t = e.device.controls;
    let n, r, o;
    return (
      e.device.caps.driver
        ? ((n = S.jsx(h4, { device: e.device })),
          (o = S.jsx(v4, { controls: t, devicePath: e.device.devicePath })),
          (r = null))
        : ((n = null),
          (o = null),
          (r = S.jsx(ZO, {
            title: "Device not compatible by DWE OS. Features will be limited.",
            children: S.jsx(bO, { children: S.jsx(u1, {}) }),
          }))),
      S.jsx(Mp, {
        item: !0,
        xs: 12,
        lg: 6,
        xl: 4,
        style: { display: "flex", justifyContent: "center", padding: "20px" },
        children: S.jsxs(G3, {
          textAlign: "left",
          sx: { minWidth: 500, boxShadow: 3 },
          children: [
            S.jsx(cO, {
              action: r,
              title: e.device.info.name,
              subheader: S.jsxs(S.Fragment, {
                children: [
                  e.device.info.manufacturer
                    ? `Manufacturer: ${e.device.info.manufacturer}`
                    : void 0,
                  S.jsx(Vd, {}),
                  e.device.info.model
                    ? `Model: ${e.device.info.model}`
                    : void 0,
                  S.jsx(Vd, {}),
                  S.jsx(Qd, {
                    onChange: (i) => {
                      Xn("/setDeviceName", {
                        devicePath: e.device.devicePath,
                        name: i.target.value,
                      });
                    },
                    helperText: "Device Nickname",
                    placeholder: "Device Nickname",
                    variant: "standard",
                    defaultValue: e.device.name,
                  }),
                ],
              }),
            }),
            S.jsxs(eO, {
              children: [
                S.jsxs(Q1, { children: ["Device: ", e.device.devicePath] }),
                n,
                S.jsx(m4, { device: e.device }),
                o,
                e.children,
              ],
            }),
          ],
        }),
      })
    );
  };
var Qp = {},
  g4 = fi;
Object.defineProperty(Qp, "__esModule", { value: !0 });
var J1 = (Qp.default = void 0),
  y4 = g4(Uu()),
  x4 = S;
J1 = Qp.default = (0, y4.default)(
  (0, x4.jsx)("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
  "Menu",
);
const b4 =
  "data:image/svg+xml,%3csvg%20width='705.93'%20height='208.77'%20version='1.1'%20viewBox='0%200%20705.93%20208.77'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='matrix(1.3333%200%200%201.3333%20-54.068%20-271.28)'%3e%3cg%20transform='scale(.94525%201)'%20fill='%2346bbe7'%3e%3cpath%20d='m493.34%20310c-29.503-1.2982-52.084%2014.645-52.084%2014.645l0.83398%201.1797s46.819-33.205%2093.447%200.91602h2e-3c9.9492%207.2787%2019.597%209.8458%2028.629%209.2637%209.0318-0.58209%2017.421-4.2899%2024.951-9.4414l-0.81446-1.1934c-7.3839%205.0515-15.533%208.633-24.229%209.1934s-17.962-1.878-27.684-8.9902c-14.801-10.831-29.642-14.982-43.053-15.572z'%20color='%23000000'%20style='-inkscape-stroke:none'/%3e%3cpath%20transform='scale(.92878%201)'%20d='m529.15%20315.63c-29.383-0.84314-51.199%2013.854-51.199%2013.854l11.473%2016.512s33.703-24.393%2072.348%200.21484l2e-3%202e-3c23.997%2015.276%2046.354%2015.687%2061.99%2011.654s25.494-12.535%2025.494-12.535l-13.178-15.186s-6.1146%205.3572-17.338%208.252c-11.223%202.8947-26.612%203.3032-46.17-9.1465h-2e-3c-15.145-9.6432-30.064-13.238-43.42-13.621z'%20color='%23000000'%20style='-inkscape-stroke:none'/%3e%3cpath%20d='m493.34%20256.77c-29.503-1.2981-52.084%2014.643-52.084%2014.643l0.83398%201.1797s46.821-33.202%2093.449%200.91602c9.9493%207.2782%2019.597%209.8448%2028.629%209.2617%209.0317-0.5831%2017.421-4.2935%2024.951-9.4414l-0.81446-1.1934c-7.384%205.0481-15.533%208.63-24.229%209.1914-8.6955%200.5614-17.962-1.8746-27.684-8.9863-14.801-10.83-29.642-14.98-43.053-15.57z'%20color='%23000000'%20style='-inkscape-stroke:none'/%3e%3cpath%20transform='scale(.92878%201)'%20d='m529.15%20262.4c-29.383-0.8456-51.197%2013.844-51.197%2013.844l11.469%2016.516s33.706-24.382%2072.352%200.22266c23.997%2015.277%2046.356%2015.686%2061.992%2011.65s25.494-12.539%2025.494-12.539l-13.182-15.184s-6.1127%205.3595-17.336%208.2559c-11.223%202.8964-26.614%203.3059-46.172-9.1445-15.145-9.6423-30.064-13.237-43.42-13.621z'%20color='%23000000'%20style='-inkscape-stroke:none'/%3e%3cpath%20d='m493.34%20203.53c-29.503-1.2962-52.084%2014.65-52.084%2014.65l0.83398%201.1797s46.819-33.214%2093.447%200.9082c9.9493%207.2843%2019.599%209.8523%2028.631%209.2695%209.0318-0.58273%2017.421-4.2921%2024.951-9.4395l-0.81446-1.1934c-7.384%205.0476-15.533%208.6284-24.229%209.1895-8.6954%200.56102-17.962-1.8745-27.684-8.9922-14.801-10.831-29.642-14.983-43.053-15.572z'%20color='%23000000'%20style='-inkscape-stroke:none'/%3e%3cpath%20transform='scale(.92878%201)'%20d='m529.15%20209.16c-29.383-0.84588-51.199%2013.848-51.199%2013.848l11.471%2016.512s33.702-24.388%2072.348%200.22461h2e-3c23.997%2015.274%2046.356%2015.685%2061.992%2011.65%2015.636-4.0345%2025.492-12.537%2025.492-12.537l-13.178-15.186s-6.1144%205.358-17.338%208.2539c-11.223%202.8958-26.613%203.306-46.17-9.1406l-2e-3%20-2e-3c-15.144-9.6444-30.063-13.239-43.418-13.623z'%20color='%23000000'%20style='-inkscape-stroke:none'/%3e%3c/g%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m186.34%20203.83%2023.761-0.242%2026.938%2077.016-12.547%2036.429z'/%3e%3cpath%20d='m311.48%20204.34-25.118%200.0586-52.906%20155.51%2024.875-0.0308%2038.61-112.99%2022.523%2069.56%2011.073-39.117-19.063-72.971z'/%3e%3cpath%20d='m382.75%20204.39h25.699l-54.199%20155.02-25.199%200.235z'/%3e%3c/g%3e%3cg%20transform='matrix(0%20-1%20.99723%200%200%200)'%20fill='%23fff'%3e%3cpath%20d='m-203.71%2040.663h-23.332v77.072c4e-3%206e-3%209e-3%200.0126%200.0132%200.0191-8e-3%2015.383-9.579%2030.164-26.738%2038.616-17.171%208.4482-39.028%208.4479-56.197-1e-3%20-17.18-8.4554-26.736-23.238-26.736-38.634h-0.0146v-53.676h82.645v-23.397h-105.96v23.397h0.0161v53.675l1e-3%201e-3h-3e-3c0%2025.114%2015.771%2047.748%2039.756%2059.552h1e-3c23.978%2011.8%2052.813%2011.8%2076.792%200h1e-3l1e-3%20-3e-3c23.966-11.805%2039.753-34.43%2039.753-59.551h1e-3z'%20color='%23000000'%20fill='%23fff'%20style='-inkscape-stroke:none'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function w4(e) {
  const [t, n] = x.useState(!1);
  return S.jsx(H5, {
    position: "fixed",
    style: { overflow: "hidden" },
    children: S.jsxs(f4, {
      children: [
        S.jsx(Zd, {
          onClick: () => n(!t),
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          sx: { mr: 2 },
          children: S.jsx(J1, {}),
        }),
        S.jsx(s4, {
          anchor: "left",
          open: t,
          onClose: () => n(!t),
          children: S.jsx(GC, {
            sx: { width: 300 },
            role: "presentation",
            children: S.jsxs(_1, {
              children: [
                S.jsx(Ud, {
                  children: S.jsx(In, {
                    variant: "h6",
                    color: "inherit",
                    children: "DWE OS Pre-Alpha",
                  }),
                }),
                S.jsx(V1, {}),
                e.drawerItems,
              ],
            }),
          }),
        }),
        S.jsx("img", { src: b4, style: { height: 30 }, alt: "DWE Logo" }),
        S.jsx(Mp, { container: !0, justifyContent: "flex-end" }),
        e.children,
      ],
    }),
  });
}
const Un = Object.create(null);
Un.open = "0";
Un.close = "1";
Un.ping = "2";
Un.pong = "3";
Un.message = "4";
Un.upgrade = "5";
Un.noop = "6";
const sl = Object.create(null);
Object.keys(Un).forEach((e) => {
  sl[Un[e]] = e;
});
const nf = { type: "error", data: "parser error" },
  Z1 =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  ex = typeof ArrayBuffer == "function",
  tx = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Jp = ({ type: e, data: t }, n, r) =>
    Z1 && t instanceof Blob
      ? n
        ? r(t)
        : Nv(t, r)
      : ex && (t instanceof ArrayBuffer || tx(t))
        ? n
          ? r(t)
          : Nv(new Blob([t]), r)
        : r(Un[e] + (t || "")),
  Nv = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function Mv(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ac;
function S4(e, t) {
  if (Z1 && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Mv).then(t);
  if (ex && (e.data instanceof ArrayBuffer || tx(e.data))) return t(Mv(e.data));
  Jp(e, !1, (n) => {
    Ac || (Ac = new TextEncoder()), t(Ac.encode(n));
  });
}
const Iv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Xi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Iv.length; e++) Xi[Iv.charCodeAt(e)] = e;
const C4 = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      o = 0,
      i,
      s,
      a,
      l;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t),
      c = new Uint8Array(u);
    for (r = 0; r < n; r += 4)
      (i = Xi[e.charCodeAt(r)]),
        (s = Xi[e.charCodeAt(r + 1)]),
        (a = Xi[e.charCodeAt(r + 2)]),
        (l = Xi[e.charCodeAt(r + 3)]),
        (c[o++] = (i << 2) | (s >> 4)),
        (c[o++] = ((s & 15) << 4) | (a >> 2)),
        (c[o++] = ((a & 3) << 6) | (l & 63));
    return u;
  },
  k4 = typeof ArrayBuffer == "function",
  Zp = (e, t) => {
    if (typeof e != "string") return { type: "message", data: nx(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: E4(e.substring(1), t) }
      : sl[n]
        ? e.length > 1
          ? { type: sl[n], data: e.substring(1) }
          : { type: sl[n] }
        : nf;
  },
  E4 = (e, t) => {
    if (k4) {
      const n = C4(e);
      return nx(n, t);
    } else return { base64: !0, data: e };
  },
  nx = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  rx = "",
  P4 = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let o = 0;
    e.forEach((i, s) => {
      Jp(i, !1, (a) => {
        (r[s] = a), ++o === n && t(r.join(rx));
      });
    });
  },
  R4 = (e, t) => {
    const n = e.split(rx),
      r = [];
    for (let o = 0; o < n.length; o++) {
      const i = Zp(n[o], t);
      if ((r.push(i), i.type === "error")) break;
    }
    return r;
  };
function $4() {
  return new TransformStream({
    transform(e, t) {
      S4(e, (n) => {
        const r = n.length;
        let o;
        if (r < 126)
          (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r);
        else if (r < 65536) {
          o = new Uint8Array(3);
          const i = new DataView(o.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const i = new DataView(o.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128),
          t.enqueue(o),
          t.enqueue(n);
      });
    },
  });
}
let zc;
function za(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Ba(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function T4(e, t) {
  zc || (zc = new TextDecoder());
  const n = [];
  let r = 0,
    o = -1,
    i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (za(n) < 1) break;
          const l = Ba(n, 1);
          (i = (l[0] & 128) === 128),
            (o = l[0] & 127),
            o < 126 ? (r = 3) : o === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (za(n) < 2) break;
          const l = Ba(n, 2);
          (o = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (za(n) < 8) break;
          const l = Ba(n, 8),
            u = new DataView(l.buffer, l.byteOffset, l.length),
            c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(nf);
            break;
          }
          (o = c * Math.pow(2, 32) + u.getUint32(4)), (r = 3);
        } else {
          if (za(n) < o) break;
          const l = Ba(n, o);
          a.enqueue(Zp(i ? l : zc.decode(l), t)), (r = 0);
        }
        if (o === 0 || o > e) {
          a.enqueue(nf);
          break;
        }
      }
    },
  });
}
const ox = 4;
function it(e) {
  if (e) return _4(e);
}
function _4(e) {
  for (var t in it.prototype) e[t] = it.prototype[t];
  return e;
}
it.prototype.on = it.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
it.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
it.prototype.off =
  it.prototype.removeListener =
  it.prototype.removeAllListeners =
  it.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, o = 0; o < n.length; o++)
        if (((r = n[o]), r === t || r.fn === t)) {
          n.splice(o, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
it.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t);
  }
  return this;
};
it.prototype.emitReserved = it.prototype.emit;
it.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
it.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const sn =
  typeof self < "u"
    ? self
    : typeof window < "u"
      ? window
      : Function("return this")();
function ix(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const O4 = sn.setTimeout,
  N4 = sn.clearTimeout;
function Xu(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = O4.bind(sn)), (e.clearTimeoutFn = N4.bind(sn)))
    : ((e.setTimeoutFn = sn.setTimeout.bind(sn)),
      (e.clearTimeoutFn = sn.clearTimeout.bind(sn)));
}
const M4 = 1.33;
function I4(e) {
  return typeof e == "string"
    ? L4(e)
    : Math.ceil((e.byteLength || e.size) * M4);
}
function L4(e) {
  let t = 0,
    n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
          ? (n += 2)
          : t < 55296 || t >= 57344
            ? (n += 3)
            : (r++, (n += 4));
  return n;
}
function A4(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function z4(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class B4 extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class eh extends it {
  constructor(t) {
    super(),
      (this.writable = !1),
      Xu(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new B4(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = Zp(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = A4(t);
    return n.length ? "?" + n : "";
  }
}
const sx =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      "",
    ),
  rf = 64,
  j4 = {};
let Lv = 0,
  ja = 0,
  Av;
function zv(e) {
  let t = "";
  do (t = sx[e % rf] + t), (e = Math.floor(e / rf));
  while (e > 0);
  return t;
}
function ax() {
  const e = zv(+new Date());
  return e !== Av ? ((Lv = 0), (Av = e)) : e + "." + zv(Lv++);
}
for (; ja < rf; ja++) j4[sx[ja]] = ja;
let lx = !1;
try {
  lx = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const F4 = lx;
function ux(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || F4)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new sn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function D4() {}
const W4 = (function () {
  return new ux({ xdomain: !1 }).responseType != null;
})();
class U4 extends eh {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let o = location.port;
      o || (o = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          o !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = W4 && !n),
      this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    R4(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      P4(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = ax()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new Fn(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (o, i) => {
        this.onError("xhr post error", o, i);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
class Fn extends it {
  constructor(t, n) {
    super(),
      Xu(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = ix(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new ux(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(o) &&
              r.setRequestHeader(o, this.opts.extraHeaders[o]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var o;
          r.readyState === 3 &&
            ((o = this.opts.cookieJar) === null ||
              o === void 0 ||
              o.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this.onError(o);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = Fn.requestsCount++), (Fn.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = D4), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete Fn.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
Fn.requestsCount = 0;
Fn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Bv);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in sn ? "pagehide" : "unload";
    addEventListener(e, Bv, !1);
  }
}
function Bv() {
  for (let e in Fn.requests)
    Fn.requests.hasOwnProperty(e) && Fn.requests[e].abort();
}
const th =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Fa = sn.WebSocket || sn.MozWebSocket,
  jv = !0,
  V4 = "arraybuffer",
  Fv =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class H4 extends eh {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Fv
        ? {}
        : ix(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = jv && !Fv ? (n ? new Fa(t, n) : new Fa(t)) : new Fa(t, n, r);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1;
      Jp(r, this.supportsBinary, (i) => {
        const s = {};
        try {
          jv && this.ws.send(i);
        } catch {}
        o &&
          th(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = ax()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!Fa;
  }
}
class q4 extends eh {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = T4(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            o = $4();
          o.readable.pipeTo(t.writable), (this.writer = o.writable.getWriter());
          const i = () => {
            r.read()
              .then(({ done: a, value: l }) => {
                a || (this.onPacket(l), i());
              })
              .catch((a) => {});
          };
          i();
          const s = { type: "open" };
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(s).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1;
      this.writer.write(r).then(() => {
        o &&
          th(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const K4 = { websocket: H4, webtransport: q4, polling: U4 },
  G4 =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Y4 = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function of(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let o = G4.exec(e || ""),
    i = {},
    s = 14;
  for (; s--; ) i[Y4[s]] = o[s] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((i.source = t),
      (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":")),
      (i.authority = i.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (i.ipv6uri = !0)),
    (i.pathNames = X4(i, i.path)),
    (i.queryKey = Q4(i, i.query)),
    i
  );
}
function X4(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function Q4(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
      o && (n[o] = i);
    }),
    n
  );
}
let cx = class Eo extends it {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = V4),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = of(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = of(n.host).host),
      Xu(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = n.transports || [
        "polling",
        "websocket",
        "webtransport",
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = z4(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = ox), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t],
    );
    return new K4[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      Eo.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Eo.priorWebsocketSuccess = !1;
    const o = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (p) => {
          if (!r)
            if (p.type === "pong" && p.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (Eo.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const f = new Error("probe error");
              (f.transport = n.name), this.emitReserved("upgradeError", f);
            }
        }));
    };
    function i() {
      r || ((r = !0), c(), n.close(), (n = null));
    }
    const s = (p) => {
      const f = new Error("probe error: " + p);
      (f.transport = n.name), i(), this.emitReserved("upgradeError", f);
    };
    function a() {
      s("transport closed");
    }
    function l() {
      s("socket closed");
    }
    function u(p) {
      n && p.name !== n.name && i();
    }
    const c = () => {
      n.removeListener("open", o),
        n.removeListener("error", s),
        n.removeListener("close", a),
        this.off("close", l),
        this.off("upgrading", u);
    };
    n.once("open", o),
      n.once("error", s),
      n.once("close", a),
      this.once("close", l),
      this.once("upgrading", u),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (Eo.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if ((o && (n += I4(o)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, o) {
    if (
      (typeof n == "function" && ((o = n), (n = void 0)),
      typeof r == "function" && ((o = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const i = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", i),
      this.writeBuffer.push(i),
      o && this.once("flush", o),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
            ? r()
            : t()),
      this
    );
  }
  onError(t) {
    (Eo.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1,
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const o = t.length;
    for (; r < o; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
cx.protocol = ox;
function J4(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = of(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + i + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const Z4 = typeof ArrayBuffer == "function",
  eN = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  dx = Object.prototype.toString,
  tN =
    typeof Blob == "function" ||
    (typeof Blob < "u" && dx.call(Blob) === "[object BlobConstructor]"),
  nN =
    typeof File == "function" ||
    (typeof File < "u" && dx.call(File) === "[object FileConstructor]");
function nh(e) {
  return (
    (Z4 && (e instanceof ArrayBuffer || eN(e))) ||
    (tN && e instanceof Blob) ||
    (nN && e instanceof File)
  );
}
function al(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (al(e[n])) return !0;
    return !1;
  }
  if (nh(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return al(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && al(e[n])) return !0;
  return !1;
}
function rN(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = sf(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function sf(e, t) {
  if (!e) return e;
  if (nh(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = sf(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = sf(e[r], t));
    return n;
  }
  return e;
}
function oN(e, t) {
  return (e.data = af(e.data, t)), delete e.attachments, e;
}
function af(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = af(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = af(e[n], t));
  return e;
}
const iN = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  sN = 5;
var we;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(we || (we = {}));
class aN {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === we.EVENT || t.type === we.ACK) && al(t)
      ? this.encodeAsBinary({
          type: t.type === we.EVENT ? we.BINARY_EVENT : we.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === we.BINARY_EVENT || t.type === we.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = rN(t),
      r = this.encodeAsString(n.packet),
      o = n.buffers;
    return o.unshift(r), o;
  }
}
function Dv(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class rh extends it {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === we.BINARY_EVENT;
      r || n.type === we.BINARY_ACK
        ? ((n.type = r ? we.EVENT : we.ACK),
          (this.reconstructor = new lN(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (nh(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (we[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === we.BINARY_EVENT || r.type === we.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const s = t.substring(i, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(i, n);
    } else r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const i = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (rh.isPayloadValid(r.type, i)) r.data = i;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case we.CONNECT:
        return Dv(n);
      case we.DISCONNECT:
        return n === void 0;
      case we.CONNECT_ERROR:
        return typeof n == "string" || Dv(n);
      case we.EVENT:
      case we.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && iN.indexOf(n[0]) === -1))
        );
      case we.ACK:
      case we.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class lN {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = oN(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const uN = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: rh,
      Encoder: aN,
      get PacketType() {
        return we;
      },
      protocol: sN,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function wn(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const cN = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class fx extends it {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      wn(t, "open", this.onopen.bind(this)),
      wn(t, "packet", this.onpacket.bind(this)),
      wn(t, "error", this.onerror.bind(this)),
      wn(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (cN.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: we.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const s = this.ids++,
        a = n.pop();
      this._registerAckCallback(s, a), (r.id = s);
    }
    const o =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!o || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const o =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
      n.call(this, new Error("operation has timed out"));
    }, o);
    this.acks[t] = (...s) => {
      this.io.clearTimeoutFn(i), n.apply(this, [null, ...s]);
    };
  }
  emitWithAck(t, ...n) {
    const r = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((o, i) => {
      n.push((s, a) => (r ? (s ? i(s) : o(a)) : o(s))), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((o, ...i) =>
      r !== this._queue[0]
        ? void 0
        : (o !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(o))
            : (this._queue.shift(), n && n(null, ...i)),
          (r.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: we.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n);
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case we.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case we.EVENT:
        case we.BINARY_EVENT:
          this.onevent(t);
          break;
        case we.ACK:
        case we.BINARY_ACK:
          this.onack(t);
          break;
        case we.DISCONNECT:
          this.ondisconnect();
          break;
        case we.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...o) {
      r || ((r = !0), n.packet({ type: we.ACK, id: t, data: o }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (n.apply(this, t.data), delete this.acks[t.id]);
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: we.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function mi(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
mi.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
mi.prototype.reset = function () {
  this.attempts = 0;
};
mi.prototype.setMin = function (e) {
  this.ms = e;
};
mi.prototype.setMax = function (e) {
  this.max = e;
};
mi.prototype.setJitter = function (e) {
  this.jitter = e;
};
class lf extends it {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      Xu(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5,
      ),
      (this.backoff = new mi({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const o = n.parser || uN;
    (this.encoder = new o.Encoder()),
      (this.decoder = new o.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new cx(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const o = wn(n, "open", function () {
        r.onopen(), t && t();
      }),
      i = (a) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", a),
          t ? t(a) : this.maybeReconnectOnOpen();
      },
      s = wn(n, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout,
        l = this.setTimeoutFn(() => {
          o(), i(new Error("timeout")), n.close();
        }, a);
      this.opts.autoUnref && l.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(l);
        });
    }
    return this.subs.push(o), this.subs.push(s), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      wn(t, "ping", this.onping.bind(this)),
      wn(t, "data", this.ondata.bind(this)),
      wn(t, "error", this.onerror.bind(this)),
      wn(t, "close", this.onclose.bind(this)),
      wn(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    th(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new fx(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((o) => {
              o
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", o))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Wi = {};
function ll(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = J4(e, t.path || "/socket.io"),
    r = n.source,
    o = n.id,
    i = n.path,
    s = Wi[o] && i in Wi[o].nsps,
    a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let l;
  return (
    a ? (l = new lf(r, t)) : (Wi[o] || (Wi[o] = new lf(r, t)), (l = Wi[o])),
    n.query && !t.query && (t.query = n.queryKey),
    l.socket(n.path, t)
  );
}
Object.assign(ll, { Manager: lf, Socket: fx, io: ll, connect: ll });
const dN = () => {
  const [e, t] = x.useState([]),
    [n, r] = x.useState([]),
    [o, i] = x.useState(localStorage.getItem("theme") === "dark" ? Pa : Ym),
    s = ll(),
    a = (f) => {
      f.caps.driver
        ? t((b) => [...b, S.jsx(Ov, { device: f }, b.length)])
        : r((b) => [...b, S.jsx(Ov, { device: f }, b.length)]);
    },
    l = (f) => {
      for (let b of f) a(b);
    },
    u = (f) => {
      let b = f.devicePath;
      f.caps.driver
        ? t((w) => w.filter((y) => y.props.device.devicePath !== b))
        : r((w) => w.filter((y) => y.props.device.devicePath !== b));
    },
    c = (f) => {
      localStorage.setItem("theme", f.target.checked ? "dark" : "light"),
        i(f.target.checked ? Pa : Ym);
    },
    p = () => {
      Xn("/resetSettings", {}, () => window.location.reload());
    };
  return (
    x.useEffect(
      () => (
        fetch("/devices")
          .then((f) => f.json())
          .then((f) => l(f)),
        s.on("added", (f) => {
          l(f);
        }),
        s.on("removed", (f) => {
          for (let b of f) u(b);
        }),
        () => {
          s.off("added"), s.off("removed");
        }
      ),
      [],
    ),
    S.jsxs(Ok, {
      theme: o,
      children: [
        S.jsx(Uk, {}),
        S.jsx(w4, {
          drawerItems: S.jsxs(S.Fragment, {
            children: [
              S.jsx(Ud, {
                children: S.jsx(r1, {
                  onChange: c,
                  control: S.jsx(Np, { checked: o === Pa, name: "Theme" }),
                  label: S.jsx(In, {
                    color: "text.secondary",
                    children: o === Pa ? "Dark Theme" : "Light Theme",
                  }),
                }),
              }),
              S.jsx(Ud, {
                children: S.jsx(Wu, {
                  color: "primary",
                  variant: "contained",
                  onClick: p,
                  children: "Reset Settings",
                }),
              }),
            ],
          }),
        }),
        S.jsx("div", { style: { minHeight: "64px" } }),
        S.jsx("div", {
          style: { overflowY: "auto", height: "calc(100vh - 64px)" },
          children: S.jsxs(yR, { children: [e, n] }),
        }),
      ],
    })
  );
};
jc.createRoot(document.getElementById("root")).render(
  S.jsx(Cn.StrictMode, { children: S.jsx(dN, {}) }),
);
