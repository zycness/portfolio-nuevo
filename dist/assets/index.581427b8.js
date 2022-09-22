var q0 = Object.defineProperty;
var Yc = Object.getOwnPropertySymbols;
var e1 = Object.prototype.hasOwnProperty,
  t1 = Object.prototype.propertyIsEnumerable;
var Xc = (e, t, n) =>
    t in e
      ? q0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Zc = (e, t) => {
    for (var n in t || (t = {})) e1.call(t, n) && Xc(e, n, t[n]);
    if (Yc) for (var n of Yc(t)) t1.call(t, n) && Xc(e, n, t[n]);
    return e;
  };
const n1 = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
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
};
n1();
var C = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ao = Symbol.for("react.element"),
  r1 = Symbol.for("react.portal"),
  o1 = Symbol.for("react.fragment"),
  i1 = Symbol.for("react.strict_mode"),
  a1 = Symbol.for("react.profiler"),
  l1 = Symbol.for("react.provider"),
  u1 = Symbol.for("react.context"),
  s1 = Symbol.for("react.forward_ref"),
  c1 = Symbol.for("react.suspense"),
  f1 = Symbol.for("react.memo"),
  d1 = Symbol.for("react.lazy"),
  Jc = Symbol.iterator;
function p1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jc && e[Jc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zp = Object.assign,
  Fp = {};
function wr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || jp);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $p() {}
$p.prototype = wr.prototype;
function Ss(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || jp);
}
var ws = (Ss.prototype = new $p());
ws.constructor = Ss;
zp(ws, wr.prototype);
ws.isPureReactComponent = !0;
var qc = Array.isArray,
  bp = Object.prototype.hasOwnProperty,
  xs = { current: null },
  Up = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bp(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      bp.call(t, r) && !Up.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ao,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: xs.current,
  };
}
function v1(e, t) {
  return {
    $$typeof: Ao,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Es(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ao;
}
function h1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ef = /\/+/g;
function vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? h1("" + e.key)
    : t.toString(36);
}
function hi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ao:
          case r1:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + vl(a, 0) : r),
      qc(o)
        ? ((n = ""),
          e != null && (n = e.replace(ef, "$&/") + "/"),
          hi(o, t, n, "", function (s) {
            return s;
          }))
        : o != null &&
          (Es(o) &&
            (o = v1(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ef, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), qc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = r + vl(i, l);
      a += hi(i, t, n, u, o);
    }
  else if (((u = p1(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + vl(i, l++)), (a += hi(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Wo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    hi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function m1(e) {
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
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  mi = { transition: null },
  y1 = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: mi,
    ReactCurrentOwner: xs,
  };
F.Children = {
  map: Wo,
  forEach: function (e, t, n) {
    Wo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Es(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = wr;
F.Fragment = o1;
F.Profiler = a1;
F.PureComponent = Ss;
F.StrictMode = i1;
F.Suspense = c1;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y1;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zp({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = xs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      bp.call(t, u) &&
        !Up.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Ao, type: e.type, key: o, ref: i, props: r, _owner: a };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: u1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: l1, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Bp;
F.createFactory = function (e) {
  var t = Bp.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: s1, render: e };
};
F.isValidElement = Es;
F.lazy = function (e) {
  return { $$typeof: d1, _payload: { _status: -1, _result: e }, _init: m1 };
};
F.memo = function (e, t) {
  return { $$typeof: f1, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = mi.transition;
  mi.transition = {};
  try {
    e();
  } finally {
    mi.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Me.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
F.useId = function () {
  return Me.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Me.current.useRef(e);
};
F.useState = function (e) {
  return Me.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Me.current.useTransition();
};
F.version = "18.1.0";
C.exports = F;
var ft = C.exports,
  nu = {},
  Ps = { exports: {} },
  He = {},
  Hp = { exports: {} },
  Wp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, I) {
    var j = N.length;
    N.push(I);
    e: for (; 0 < j; ) {
      var K = (j - 1) >>> 1,
        b = N[K];
      if (0 < o(b, I)) (N[K] = I), (N[j] = b), (j = K);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var I = N[0],
      j = N.pop();
    if (j !== I) {
      N[0] = j;
      e: for (var K = 0, b = N.length, $ = b >>> 1; K < $; ) {
        var M = 2 * (K + 1) - 1,
          V = N[M],
          te = M + 1,
          vt = N[te];
        if (0 > o(V, j))
          te < b && 0 > o(vt, V)
            ? ((N[K] = vt), (N[te] = j), (K = te))
            : ((N[K] = V), (N[M] = j), (K = M));
        else if (te < b && 0 > o(vt, j)) (N[K] = vt), (N[te] = j), (K = te);
        else break e;
      }
    }
    return I;
  }
  function o(N, I) {
    var j = N.sortIndex - I.sortIndex;
    return j !== 0 ? j : N.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var u = [],
    s = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    v = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= N)
        r(s), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(s);
    }
  }
  function S(N) {
    if (((g = !1), y(N), !v))
      if (n(u) !== null) (v = !0), Qe(x);
      else {
        var I = n(s);
        I !== null && we(S, I.startTime - N);
      }
  }
  function x(N, I) {
    (v = !1), g && ((g = !1), m(P), (P = -1)), (p = !0);
    var j = f;
    try {
      for (
        y(I), d = n(u);
        d !== null && (!(d.expirationTime > I) || (N && !z()));

      ) {
        var K = d.callback;
        if (typeof K == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var b = K(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof b == "function" ? (d.callback = b) : d === n(u) && r(u),
            y(I);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var $ = !0;
      else {
        var M = n(s);
        M !== null && we(S, M.startTime - I), ($ = !1);
      }
      return $;
    } finally {
      (d = null), (f = j), (p = !1);
    }
  }
  var _ = !1,
    E = null,
    P = -1,
    R = 5,
    L = -1;
  function z() {
    return !(e.unstable_now() - L < R);
  }
  function W() {
    if (E !== null) {
      var N = e.unstable_now();
      L = N;
      var I = !0;
      try {
        I = E(!0, N);
      } finally {
        I ? ee() : ((_ = !1), (E = null));
      }
    } else _ = !1;
  }
  var ee;
  if (typeof h == "function")
    ee = function () {
      h(W);
    };
  else if (typeof MessageChannel != "undefined") {
    var ue = new MessageChannel(),
      Ae = ue.port2;
    (ue.port1.onmessage = W),
      (ee = function () {
        Ae.postMessage(null);
      });
  } else
    ee = function () {
      w(W, 0);
    };
  function Qe(N) {
    (E = N), _ || ((_ = !0), ee());
  }
  function we(N, I) {
    P = w(function () {
      N(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), Qe(x));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var j = f;
      f = I;
      try {
        return N();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, I) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = f;
      f = N;
      try {
        return I();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (N, I, j) {
      var K = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? K + j : K))
          : (j = K),
        N)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = j + b),
        (N = {
          id: c++,
          callback: I,
          priorityLevel: N,
          startTime: j,
          expirationTime: b,
          sortIndex: -1,
        }),
        j > K
          ? ((N.sortIndex = j),
            t(s, N),
            n(u) === null &&
              N === n(s) &&
              (g ? (m(P), (P = -1)) : (g = !0), we(S, j - K)))
          : ((N.sortIndex = b), t(u, N), v || p || ((v = !0), Qe(x))),
        N
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (N) {
      var I = f;
      return function () {
        var j = f;
        f = I;
        try {
          return N.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(Wp);
Hp.exports = Wp;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kp = C.exports,
  Ue = Hp.exports;
function k(e) {
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
var Qp = new Set(),
  oo = {};
function Vn(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (oo[e] = t, e = 0; e < t.length; e++) Qp.add(t[e]);
}
var At = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  ru = Object.prototype.hasOwnProperty,
  g1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  tf = {},
  nf = {};
function S1(e) {
  return ru.call(nf, e)
    ? !0
    : ru.call(tf, e)
    ? !1
    : g1.test(e)
    ? (nf[e] = !0)
    : ((tf[e] = !0), !1);
}
function w1(e, t, n, r) {
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
function x1(e, t, n, r) {
  if (t === null || typeof t == "undefined" || w1(e, t, n, r)) return !0;
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
function Le(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function _s(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, _s);
    Se[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, _s);
    Se[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cs, _s);
  Se[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ts(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (x1(t, n, o, r) && (n = null),
    r || o === null
      ? S1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ft = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ko = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  bn = Symbol.for("react.fragment"),
  ks = Symbol.for("react.strict_mode"),
  ou = Symbol.for("react.profiler"),
  Gp = Symbol.for("react.provider"),
  Yp = Symbol.for("react.context"),
  Os = Symbol.for("react.forward_ref"),
  iu = Symbol.for("react.suspense"),
  au = Symbol.for("react.suspense_list"),
  Rs = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  Xp = Symbol.for("react.offscreen"),
  rf = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rf && e[rf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  hl;
function jr(e) {
  if (hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hl = (t && t[1]) || "";
    }
  return (
    `
` +
    hl +
    e
  );
}
var ml = !1;
function yl(e, t) {
  if (!e || ml) return "";
  ml = !0;
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
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var u =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (ml = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function E1(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yl(e.type, !1)), e;
    case 11:
      return (e = yl(e.type.render, !1)), e;
    case 1:
      return (e = yl(e.type, !0)), e;
    default:
      return "";
  }
}
function lu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case $n:
      return "Portal";
    case ou:
      return "Profiler";
    case ks:
      return "StrictMode";
    case iu:
      return "Suspense";
    case au:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yp:
        return (e.displayName || "Context") + ".Consumer";
      case Gp:
        return (e._context.displayName || "Context") + ".Provider";
      case Os:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Rs:
        return (
          (t = e.displayName || null), t !== null ? t : lu(e.type) || "Memo"
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return lu(e(t));
        } catch {}
    }
  return null;
}
function P1(e) {
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
      return lu(t);
    case 8:
      return t === ks ? "StrictMode" : "Mode";
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
function un(e) {
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
function Zp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function C1(e) {
  var t = Zp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
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
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qo(e) {
  e._valueTracker || (e._valueTracker = C1(e));
}
function Jp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mi(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uu(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function of(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qp(e, t) {
  (t = t.checked), t != null && Ts(e, "checked", t, !1);
}
function su(e, t) {
  qp(e, t);
  var n = un(t.value),
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
    ? cu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && cu(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function af(e, t, n) {
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
function cu(e, t, n) {
  (t !== "number" || Mi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function fu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function ev(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function du(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Go,
  nv = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
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
        Go = Go || document.createElement("div"),
          Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Go.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
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
  _1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  _1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function rv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function ov(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = rv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var T1 = oe(
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
  }
);
function pu(e, t) {
  if (t) {
    if (T1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function vu(e, t) {
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
var hu = null;
function Ms(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var mu = null,
  tr = null,
  nr = null;
function sf(e) {
  if ((e = Io(e))) {
    if (typeof mu != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Pa(t)), mu(e.stateNode, e.type, t));
  }
}
function iv(e) {
  tr ? (nr ? nr.push(e) : (nr = [e])) : (tr = e);
}
function av() {
  if (tr) {
    var e = tr,
      t = nr;
    if (((nr = tr = null), sf(e), t)) for (e = 0; e < t.length; e++) sf(t[e]);
  }
}
function lv(e, t) {
  return e(t);
}
function uv() {}
var gl = !1;
function sv(e, t, n) {
  if (gl) return e(t, n);
  gl = !0;
  try {
    return lv(e, t, n);
  } finally {
    (gl = !1), (tr !== null || nr !== null) && (uv(), av());
  }
}
function ao(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pa(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var yu = !1;
if (At)
  try {
    var kr = {};
    Object.defineProperty(kr, "passive", {
      get: function () {
        yu = !0;
      },
    }),
      window.addEventListener("test", kr, kr),
      window.removeEventListener("test", kr, kr);
  } catch {
    yu = !1;
  }
function k1(e, t, n, r, o, i, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Br = !1,
  Li = null,
  Ni = !1,
  gu = null,
  O1 = {
    onError: function (e) {
      (Br = !0), (Li = e);
    },
  };
function R1(e, t, n, r, o, i, a, l, u) {
  (Br = !1), (Li = null), k1.apply(O1, arguments);
}
function M1(e, t, n, r, o, i, a, l, u) {
  if ((R1.apply(this, arguments), Br)) {
    if (Br) {
      var s = Li;
      (Br = !1), (Li = null);
    } else throw Error(k(198));
    Ni || ((Ni = !0), (gu = s));
  }
}
function Dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cv(e) {
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
function cf(e) {
  if (Dn(e) !== e) throw Error(k(188));
}
function L1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(k(188));
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
        if (i === n) return cf(o), e;
        if (i === r) return cf(o), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function fv(e) {
  return (e = L1(e)), e !== null ? dv(e) : null;
}
function dv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pv = Ue.unstable_scheduleCallback,
  ff = Ue.unstable_cancelCallback,
  N1 = Ue.unstable_shouldYield,
  A1 = Ue.unstable_requestPaint,
  le = Ue.unstable_now,
  V1 = Ue.unstable_getCurrentPriorityLevel,
  Ls = Ue.unstable_ImmediatePriority,
  vv = Ue.unstable_UserBlockingPriority,
  Ai = Ue.unstable_NormalPriority,
  D1 = Ue.unstable_LowPriority,
  hv = Ue.unstable_IdlePriority,
  Sa = null,
  St = null;
function I1(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : F1,
  j1 = Math.log,
  z1 = Math.LN2;
function F1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((j1(e) / z1) | 0)) | 0;
}
var Yo = 64,
  Xo = 4194304;
function Fr(e) {
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
function Vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = Fr(l)) : ((i &= a), i !== 0 && (r = Fr(i)));
  } else (a = n & ~o), a !== 0 ? (r = Fr(a)) : i !== 0 && (r = Fr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function $1(e, t) {
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
function b1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - dt(i),
      l = 1 << a,
      u = o[a];
    u === -1
      ? ((l & n) === 0 || (l & r) !== 0) && (o[a] = $1(l, t))
      : u <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Su(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mv() {
  var e = Yo;
  return (Yo <<= 1), (Yo & 4194240) === 0 && (Yo = 64), e;
}
function Sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function U1(e, t) {
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
    var o = 31 - dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Ns(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var B = 0;
function yv(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var gv,
  As,
  Sv,
  wv,
  xv,
  wu = !1,
  Zo = [],
  qt = null,
  en = null,
  tn = null,
  lo = new Map(),
  uo = new Map(),
  Kt = [],
  B1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function df(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      lo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      uo.delete(t.pointerId);
  }
}
function Or(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Io(t)), t !== null && As(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function H1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (qt = Or(qt, e, t, n, r, o)), !0;
    case "dragenter":
      return (en = Or(en, e, t, n, r, o)), !0;
    case "mouseover":
      return (tn = Or(tn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return lo.set(i, Or(lo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), uo.set(i, Or(uo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ev(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cv(n)), t !== null)) {
          (e.blockedOn = t),
            xv(e.priority, function () {
              Sv(n);
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
function yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (hu = r), n.target.dispatchEvent(r), (hu = null);
    } else return (t = Io(n)), t !== null && As(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pf(e, t, n) {
  yi(e) && n.delete(t);
}
function W1() {
  (wu = !1),
    qt !== null && yi(qt) && (qt = null),
    en !== null && yi(en) && (en = null),
    tn !== null && yi(tn) && (tn = null),
    lo.forEach(pf),
    uo.forEach(pf);
}
function Rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wu ||
      ((wu = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, W1)));
}
function so(e) {
  function t(o) {
    return Rr(o, e);
  }
  if (0 < Zo.length) {
    Rr(Zo[0], e);
    for (var n = 1; n < Zo.length; n++) {
      var r = Zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && Rr(qt, e),
      en !== null && Rr(en, e),
      tn !== null && Rr(tn, e),
      lo.forEach(t),
      uo.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    Ev(n), n.blockedOn === null && Kt.shift();
}
var rr = Ft.ReactCurrentBatchConfig,
  Di = !0;
function K1(e, t, n, r) {
  var o = B,
    i = rr.transition;
  rr.transition = null;
  try {
    (B = 1), Vs(e, t, n, r);
  } finally {
    (B = o), (rr.transition = i);
  }
}
function Q1(e, t, n, r) {
  var o = B,
    i = rr.transition;
  rr.transition = null;
  try {
    (B = 4), Vs(e, t, n, r);
  } finally {
    (B = o), (rr.transition = i);
  }
}
function Vs(e, t, n, r) {
  if (Di) {
    var o = xu(e, t, n, r);
    if (o === null) Rl(e, t, r, Ii, n), df(e, r);
    else if (H1(o, e, t, n, r)) r.stopPropagation();
    else if ((df(e, r), t & 4 && -1 < B1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Io(o);
        if (
          (i !== null && gv(i),
          (i = xu(e, t, n, r)),
          i === null && Rl(e, t, r, Ii, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var Ii = null;
function xu(e, t, n, r) {
  if (((Ii = null), (e = Ms(r)), (e = En(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ii = e), null;
}
function Pv(e) {
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
      switch (V1()) {
        case Ls:
          return 1;
        case vv:
          return 4;
        case Ai:
        case D1:
          return 16;
        case hv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Ds = null,
  gi = null;
function Cv() {
  if (gi) return gi;
  var e,
    t = Ds,
    n = t.length,
    r,
    o = "value" in Yt ? Yt.value : Yt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (gi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Jo() {
  return !0;
}
function vf() {
  return !1;
}
function We(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Jo
        : vf),
      (this.isPropagationStopped = vf),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Jo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Jo));
      },
      persist: function () {},
      isPersistent: Jo,
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Is = We(xr),
  Do = oe({}, xr, { view: 0, detail: 0 }),
  G1 = We(Do),
  wl,
  xl,
  Mr,
  wa = oe({}, Do, {
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
    getModifierState: js,
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
        : (e !== Mr &&
            (Mr && e.type === "mousemove"
              ? ((wl = e.screenX - Mr.screenX), (xl = e.screenY - Mr.screenY))
              : (xl = wl = 0),
            (Mr = e)),
          wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xl;
    },
  }),
  hf = We(wa),
  Y1 = oe({}, wa, { dataTransfer: 0 }),
  X1 = We(Y1),
  Z1 = oe({}, Do, { relatedTarget: 0 }),
  El = We(Z1),
  J1 = oe({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q1 = We(J1),
  ey = oe({}, xr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ty = We(ey),
  ny = oe({}, xr, { data: 0 }),
  mf = We(ny),
  ry = {
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
  oy = {
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
  iy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ay(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = iy[e]) ? !!t[e] : !1;
}
function js() {
  return ay;
}
var ly = oe({}, Do, {
    key: function (e) {
      if (e.key) {
        var t = ry[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? oy[e.keyCode] || "Unidentified"
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
    getModifierState: js,
    charCode: function (e) {
      return e.type === "keypress" ? Si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  uy = We(ly),
  sy = oe({}, wa, {
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
  yf = We(sy),
  cy = oe({}, Do, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: js,
  }),
  fy = We(cy),
  dy = oe({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  py = We(dy),
  vy = oe({}, wa, {
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
  hy = We(vy),
  my = [9, 13, 27, 32],
  zs = At && "CompositionEvent" in window,
  Hr = null;
At && "documentMode" in document && (Hr = document.documentMode);
var yy = At && "TextEvent" in window && !Hr,
  _v = At && (!zs || (Hr && 8 < Hr && 11 >= Hr)),
  gf = String.fromCharCode(32),
  Sf = !1;
function Tv(e, t) {
  switch (e) {
    case "keyup":
      return my.indexOf(t.keyCode) !== -1;
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
function kv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function gy(e, t) {
  switch (e) {
    case "compositionend":
      return kv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Sf = !0), gf);
    case "textInput":
      return (e = t.data), e === gf && Sf ? null : e;
    default:
      return null;
  }
}
function Sy(e, t) {
  if (Un)
    return e === "compositionend" || (!zs && Tv(e, t))
      ? ((e = Cv()), (gi = Ds = Yt = null), (Un = !1), e)
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
      return _v && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wy = {
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
function wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wy[e.type] : t === "textarea";
}
function Ov(e, t, n, r) {
  iv(r),
    (t = ji(t, "onChange")),
    0 < t.length &&
      ((n = new Is("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wr = null,
  co = null;
function xy(e) {
  Fv(e, 0);
}
function xa(e) {
  var t = Wn(e);
  if (Jp(t)) return e;
}
function Ey(e, t) {
  if (e === "change") return t;
}
var Rv = !1;
if (At) {
  var Pl;
  if (At) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var xf = document.createElement("div");
      xf.setAttribute("oninput", "return;"),
        (Cl = typeof xf.oninput == "function");
    }
    Pl = Cl;
  } else Pl = !1;
  Rv = Pl && (!document.documentMode || 9 < document.documentMode);
}
function Ef() {
  Wr && (Wr.detachEvent("onpropertychange", Mv), (co = Wr = null));
}
function Mv(e) {
  if (e.propertyName === "value" && xa(co)) {
    var t = [];
    Ov(t, co, e, Ms(e)), sv(xy, t);
  }
}
function Py(e, t, n) {
  e === "focusin"
    ? (Ef(), (Wr = t), (co = n), Wr.attachEvent("onpropertychange", Mv))
    : e === "focusout" && Ef();
}
function Cy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xa(co);
}
function _y(e, t) {
  if (e === "click") return xa(t);
}
function Ty(e, t) {
  if (e === "input" || e === "change") return xa(t);
}
function ky(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : ky;
function fo(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ru.call(t, o) || !pt(e[o], t[o])) return !1;
  }
  return !0;
}
function Pf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cf(e, t) {
  var n = Pf(e);
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
    n = Pf(n);
  }
}
function Lv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nv() {
  for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mi(e.document);
  }
  return t;
}
function Fs(e) {
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
function Oy(e) {
  var t = Nv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fs(n)) {
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
          (o = Cf(n, i));
        var a = Cf(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var Ry = At && "documentMode" in document && 11 >= document.documentMode,
  Bn = null,
  Eu = null,
  Kr = null,
  Pu = !1;
function _f(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pu ||
    Bn == null ||
    Bn !== Mi(r) ||
    ((r = Bn),
    "selectionStart" in r && Fs(r)
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
    (Kr && fo(Kr, r)) ||
      ((Kr = r),
      (r = ji(Eu, "onSelect")),
      0 < r.length &&
        ((t = new Is("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Bn))));
}
function qo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hn = {
    animationend: qo("Animation", "AnimationEnd"),
    animationiteration: qo("Animation", "AnimationIteration"),
    animationstart: qo("Animation", "AnimationStart"),
    transitionend: qo("Transition", "TransitionEnd"),
  },
  _l = {},
  Av = {};
At &&
  ((Av = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  "TransitionEvent" in window || delete Hn.transitionend.transition);
function Ea(e) {
  if (_l[e]) return _l[e];
  if (!Hn[e]) return e;
  var t = Hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Av) return (_l[e] = t[n]);
  return e;
}
var Vv = Ea("animationend"),
  Dv = Ea("animationiteration"),
  Iv = Ea("animationstart"),
  jv = Ea("transitionend"),
  zv = new Map(),
  Tf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, t) {
  zv.set(e, t), Vn(t, [e]);
}
for (var Tl = 0; Tl < Tf.length; Tl++) {
  var kl = Tf[Tl],
    My = kl.toLowerCase(),
    Ly = kl[0].toUpperCase() + kl.slice(1);
  vn(My, "on" + Ly);
}
vn(Vv, "onAnimationEnd");
vn(Dv, "onAnimationIteration");
vn(Iv, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(jv, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
Vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ny = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function kf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), M1(r, t, void 0, e), (e.currentTarget = null);
}
function Fv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
          kf(o, l, s), (i = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          kf(o, l, s), (i = u);
        }
    }
  }
  if (Ni) throw ((e = gu), (Ni = !1), (gu = null), e);
}
function X(e, t) {
  var n = t[Ou];
  n === void 0 && (n = t[Ou] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($v(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), $v(n, e, r, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function po(e) {
  if (!e[ei]) {
    (e[ei] = !0),
      Qp.forEach(function (n) {
        n !== "selectionchange" && (Ny.has(n) || Ol(n, !1, e), Ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || ((t[ei] = !0), Ol("selectionchange", !1, t));
  }
}
function $v(e, t, n, r) {
  switch (Pv(t)) {
    case 1:
      var o = K1;
      break;
    case 4:
      o = Q1;
      break;
    default:
      o = Vs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !yu ||
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
function Rl(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = En(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  sv(function () {
    var s = i,
      c = Ms(n),
      d = [];
    e: {
      var f = zv.get(e);
      if (f !== void 0) {
        var p = Is,
          v = e;
        switch (e) {
          case "keypress":
            if (Si(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = uy;
            break;
          case "focusin":
            (v = "focus"), (p = El);
            break;
          case "focusout":
            (v = "blur"), (p = El);
            break;
          case "beforeblur":
          case "afterblur":
            p = El;
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
            p = hf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = X1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = fy;
            break;
          case Vv:
          case Dv:
          case Iv:
            p = q1;
            break;
          case jv:
            p = py;
            break;
          case "scroll":
            p = G1;
            break;
          case "wheel":
            p = hy;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = ty;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = yf;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var h = s, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = ao(h, m)), S != null && g.push(vo(h, S, y)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new p(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== hu &&
            (v = n.relatedTarget || n.fromElement) &&
            (En(v) || v[Vt]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = s),
              (v = v ? En(v) : null),
              v !== null &&
                ((w = Dn(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = s)),
          p !== v)
        ) {
          if (
            ((g = hf),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = yf),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (w = p == null ? f : Wn(p)),
            (y = v == null ? f : Wn(v)),
            (f = new g(S, h + "leave", p, n, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (S = null),
            En(c) === s &&
              ((g = new g(m, h + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = w),
              (S = g)),
            (w = S),
            p && v)
          )
            t: {
              for (g = p, m = v, h = 0, y = g; y; y = zn(y)) h++;
              for (y = 0, S = m; S; S = zn(S)) y++;
              for (; 0 < h - y; ) (g = zn(g)), h--;
              for (; 0 < y - h; ) (m = zn(m)), y--;
              for (; h--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = zn(g)), (m = zn(m));
              }
              g = null;
            }
          else g = null;
          p !== null && Of(d, f, p, g, !1),
            v !== null && w !== null && Of(d, w, v, g, !0);
        }
      }
      e: {
        if (
          ((f = s ? Wn(s) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var x = Ey;
        else if (wf(f))
          if (Rv) x = Ty;
          else {
            x = Cy;
            var _ = Py;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (x = _y);
        if (x && (x = x(e, s))) {
          Ov(d, x, n, c);
          break e;
        }
        _ && _(e, f, s),
          e === "focusout" &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === "number" &&
            cu(f, "number", f.value);
      }
      switch (((_ = s ? Wn(s) : window), e)) {
        case "focusin":
          (wf(_) || _.contentEditable === "true") &&
            ((Bn = _), (Eu = s), (Kr = null));
          break;
        case "focusout":
          Kr = Eu = Bn = null;
          break;
        case "mousedown":
          Pu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pu = !1), _f(d, n, c);
          break;
        case "selectionchange":
          if (Ry) break;
        case "keydown":
        case "keyup":
          _f(d, n, c);
      }
      var E;
      if (zs)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Un
          ? Tv(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (_v &&
          n.locale !== "ko" &&
          (Un || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Un && (E = Cv())
            : ((Yt = c),
              (Ds = "value" in Yt ? Yt.value : Yt.textContent),
              (Un = !0))),
        (_ = ji(s, P)),
        0 < _.length &&
          ((P = new mf(P, e, null, n, c)),
          d.push({ event: P, listeners: _ }),
          E ? (P.data = E) : ((E = kv(n)), E !== null && (P.data = E)))),
        (E = yy ? gy(e, n) : Sy(e, n)) &&
          ((s = ji(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new mf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = E)));
    }
    Fv(d, t);
  });
}
function vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ji(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ao(e, n)),
      i != null && r.unshift(vo(e, i, o)),
      (i = ao(e, t)),
      i != null && r.push(vo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Of(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      o
        ? ((u = ao(n, i)), u != null && a.unshift(vo(n, u, l)))
        : o || ((u = ao(n, i)), u != null && a.push(vo(n, u, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ay = /\r\n?/g,
  Vy = /\u0000|\uFFFD/g;
function Rf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ay,
      `
`
    )
    .replace(Vy, "");
}
function ti(e, t, n) {
  if (((t = Rf(t)), Rf(e) !== t && n)) throw Error(k(425));
}
function zi() {}
var Cu = null,
  _u = null;
function Tu(e, t) {
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
var ku = typeof setTimeout == "function" ? setTimeout : void 0,
  Dy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mf = typeof Promise == "function" ? Promise : void 0,
  Iy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mf != "undefined"
      ? function (e) {
          return Mf.resolve(null).then(e).catch(jy);
        }
      : ku;
function jy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), so(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  so(t);
}
function Rt(e) {
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
function Lf(e) {
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
var Er = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + Er,
  ho = "__reactProps$" + Er,
  Vt = "__reactContainer$" + Er,
  Ou = "__reactEvents$" + Er,
  zy = "__reactListeners$" + Er,
  Fy = "__reactHandles$" + Er;
function En(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lf(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Io(e) {
  return (
    (e = e[gt] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Pa(e) {
  return e[ho] || null;
}
var Ru = [],
  Kn = -1;
function hn(e) {
  return { current: e };
}
function Z(e) {
  0 > Kn || ((e.current = Ru[Kn]), (Ru[Kn] = null), Kn--);
}
function Y(e, t) {
  Kn++, (Ru[Kn] = e.current), (e.current = t);
}
var sn = {},
  Te = hn(sn),
  je = hn(!1),
  On = sn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sn;
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
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Fi() {
  Z(je), Z(Te);
}
function Nf(e, t, n) {
  if (Te.current !== sn) throw Error(k(168));
  Y(Te, t), Y(je, n);
}
function bv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, P1(e) || "Unknown", o));
  return oe({}, n, r);
}
function $i(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
    (On = Te.current),
    Y(Te, e),
    Y(je, je.current),
    !0
  );
}
function Af(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = bv(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(je),
      Z(Te),
      Y(Te, e))
    : Z(je),
    Y(je, n);
}
var Ot = null,
  Ca = !1,
  Ll = !1;
function Uv(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function $y(e) {
  (Ca = !0), Uv(e);
}
function mn() {
  if (!Ll && Ot !== null) {
    Ll = !0;
    var e = 0,
      t = B;
    try {
      var n = Ot;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ot = null), (Ca = !1);
    } catch (o) {
      throw (Ot !== null && (Ot = Ot.slice(e + 1)), pv(Ls, mn), o);
    } finally {
      (B = t), (Ll = !1);
    }
  }
  return null;
}
var by = Ft.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bi = hn(null),
  Ui = null,
  Qn = null,
  $s = null;
function bs() {
  $s = Qn = Ui = null;
}
function Us(e) {
  var t = bi.current;
  Z(bi), (e._currentValue = t);
}
function Mu(e, t, n) {
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
function or(e, t) {
  (Ui = e),
    ($s = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if ($s !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
      if (Ui === null) throw Error(k(308));
      (Qn = e), (Ui.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return t;
}
var ct = null,
  Ht = !1;
function Bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bv(e, t) {
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
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nn(e, t) {
  var n = e.updateQueue;
  n !== null &&
    ((n = n.shared),
    Nh(e)
      ? ((e = n.interleaved),
        e === null
          ? ((t.next = t), ct === null ? (ct = [n]) : ct.push(n))
          : ((t.next = e.next), (e.next = t)),
        (n.interleaved = t))
      : ((e = n.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (n.pending = t)));
}
function wi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ns(e, n);
  }
}
function Vf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
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
function Bi(e, t, n, r) {
  var o = e.updateQueue;
  Ht = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), a === null ? (i = s) : (a.next = s), (a = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = s = u = null), (l = i);
    do {
      var f = l.lane,
        p = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            g = l;
          switch (((f = t), (p = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(p, d, f) : v),
                f == null)
              )
                break e;
              d = oe({}, d, f);
              break e;
            case 2:
              Ht = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = p), (u = d)) : (c = c.next = p),
          (a |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = d),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Ln |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Df(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var Hv = new Kp.Component().refs;
function Lu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _a = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = on(e),
      i = Nt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      nn(e, i),
      (t = Je(e, o, r)),
      t !== null && wi(t, e, o);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = on(e),
      i = Nt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      nn(e, i),
      (t = Je(e, o, r)),
      t !== null && wi(t, e, o);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = on(e),
      o = Nt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      nn(e, o),
      (t = Je(e, r, n)),
      t !== null && wi(t, e, r);
  },
};
function If(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fo(n, r) || !fo(o, i)
      : !0
  );
}
function Wv(e, t, n) {
  var r = !1,
    o = sn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qe(i))
      : ((o = ze(t) ? On : Te.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, o) : sn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _a),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function jf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _a.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Hv), Bs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = qe(i))
    : ((i = ze(t) ? On : Te.current), (o.context = fr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Lu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && _a.enqueueReplaceState(o, o.state, null),
      Bi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
var Gn = [],
  Yn = 0,
  Hi = null,
  Wi = 0,
  Ge = [],
  Ye = 0,
  Rn = null,
  Mt = 1,
  Lt = "";
function Sn(e, t) {
  (Gn[Yn++] = Wi), (Gn[Yn++] = Hi), (Hi = e), (Wi = t);
}
function Kv(e, t, n) {
  (Ge[Ye++] = Mt), (Ge[Ye++] = Lt), (Ge[Ye++] = Rn), (Rn = e);
  var r = Mt;
  e = Lt;
  var o = 32 - dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Mt = (1 << (32 - dt(t) + o)) | (n << o) | r),
      (Lt = i + e);
  } else (Mt = (1 << i) | (n << o) | r), (Lt = e);
}
function Hs(e) {
  e.return !== null && (Sn(e, 1), Kv(e, 1, 0));
}
function Ws(e) {
  for (; e === Hi; )
    (Hi = Gn[--Yn]), (Gn[Yn] = null), (Wi = Gn[--Yn]), (Gn[Yn] = null);
  for (; e === Rn; )
    (Rn = Ge[--Ye]),
      (Ge[Ye] = null),
      (Lt = Ge[--Ye]),
      (Ge[Ye] = null),
      (Mt = Ge[--Ye]),
      (Ge[Ye] = null);
}
var be = null,
  De = null,
  q = !1,
  ut = null;
function Qv(e, t) {
  var n = Xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (De = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rn !== null ? { id: Mt, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Au(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vu(e) {
  if (q) {
    var t = De;
    if (t) {
      var n = t;
      if (!zf(e, t)) {
        if (Au(e)) throw Error(k(418));
        t = Rt(n.nextSibling);
        var r = be;
        t && zf(e, t)
          ? Qv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (be = e));
      }
    } else {
      if (Au(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (be = e);
    }
  }
}
function Ff(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Lr(e) {
  if (e !== be) return !1;
  if (!q) return Ff(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tu(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (Au(e)) {
      for (e = De; e; ) e = Rt(e.nextSibling);
      throw Error(k(418));
    }
    for (; t; ) Qv(e, t), (t = Rt(t.nextSibling));
  }
  if ((Ff(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = be ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function dr() {
  (De = be = null), (q = !1);
}
function Ks(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
function Nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Hv && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function $f(e) {
  var t = e._init;
  return t(e._payload);
}
function Gv(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
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
    return (m = cn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, y, S) {
    return h === null || h.tag !== 6
      ? ((h = jl(y, m.mode, S)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function u(m, h, y, S) {
    var x = y.type;
    return x === bn
      ? c(m, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Bt &&
            $f(x) === h.type))
      ? ((S = o(h, y.props)), (S.ref = Nr(m, h, y)), (S.return = m), S)
      : ((S = _i(y.type, y.key, y.props, null, m.mode, S)),
        (S.ref = Nr(m, h, y)),
        (S.return = m),
        S);
  }
  function s(m, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = zl(y, m.mode, S)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, S, x) {
    return h === null || h.tag !== 7
      ? ((h = kn(y, m.mode, S, x)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = jl("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ko:
          return (
            (y = _i(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = Nr(m, null, h)),
            (y.return = m),
            y
          );
        case $n:
          return (h = zl(h, m.mode, y)), (h.return = m), h;
        case Bt:
          var S = h._init;
          return d(m, S(h._payload), y);
      }
      if (zr(h) || Tr(h))
        return (h = kn(h, m.mode, y, null)), (h.return = m), h;
      ni(m, h);
    }
    return null;
  }
  function f(m, h, y, S) {
    var x = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return x !== null ? null : l(m, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ko:
          return y.key === x ? u(m, h, y, S) : null;
        case $n:
          return y.key === x ? s(m, h, y, S) : null;
        case Bt:
          return (x = y._init), f(m, h, x(y._payload), S);
      }
      if (zr(y) || Tr(y)) return x !== null ? null : c(m, h, y, S, null);
      ni(m, y);
    }
    return null;
  }
  function p(m, h, y, S, x) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(y) || null), l(h, m, "" + S, x);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ko:
          return (m = m.get(S.key === null ? y : S.key) || null), u(h, m, S, x);
        case $n:
          return (m = m.get(S.key === null ? y : S.key) || null), s(h, m, S, x);
        case Bt:
          var _ = S._init;
          return p(m, h, y, _(S._payload), x);
      }
      if (zr(S) || Tr(S)) return (m = m.get(y) || null), c(h, m, S, x, null);
      ni(h, S);
    }
    return null;
  }
  function v(m, h, y, S) {
    for (
      var x = null, _ = null, E = h, P = (h = 0), R = null;
      E !== null && P < y.length;
      P++
    ) {
      E.index > P ? ((R = E), (E = null)) : (R = E.sibling);
      var L = f(m, E, y[P], S);
      if (L === null) {
        E === null && (E = R);
        break;
      }
      e && E && L.alternate === null && t(m, E),
        (h = i(L, h, P)),
        _ === null ? (x = L) : (_.sibling = L),
        (_ = L),
        (E = R);
    }
    if (P === y.length) return n(m, E), q && Sn(m, P), x;
    if (E === null) {
      for (; P < y.length; P++)
        (E = d(m, y[P], S)),
          E !== null &&
            ((h = i(E, h, P)), _ === null ? (x = E) : (_.sibling = E), (_ = E));
      return q && Sn(m, P), x;
    }
    for (E = r(m, E); P < y.length; P++)
      (R = p(E, m, P, y[P], S)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? P : R.key),
          (h = i(R, h, P)),
          _ === null ? (x = R) : (_.sibling = R),
          (_ = R));
    return (
      e &&
        E.forEach(function (z) {
          return t(m, z);
        }),
      q && Sn(m, P),
      x
    );
  }
  function g(m, h, y, S) {
    var x = Tr(y);
    if (typeof x != "function") throw Error(k(150));
    if (((y = x.call(y)), y == null)) throw Error(k(151));
    for (
      var _ = (x = null), E = h, P = (h = 0), R = null, L = y.next();
      E !== null && !L.done;
      P++, L = y.next()
    ) {
      E.index > P ? ((R = E), (E = null)) : (R = E.sibling);
      var z = f(m, E, L.value, S);
      if (z === null) {
        E === null && (E = R);
        break;
      }
      e && E && z.alternate === null && t(m, E),
        (h = i(z, h, P)),
        _ === null ? (x = z) : (_.sibling = z),
        (_ = z),
        (E = R);
    }
    if (L.done) return n(m, E), q && Sn(m, P), x;
    if (E === null) {
      for (; !L.done; P++, L = y.next())
        (L = d(m, L.value, S)),
          L !== null &&
            ((h = i(L, h, P)), _ === null ? (x = L) : (_.sibling = L), (_ = L));
      return q && Sn(m, P), x;
    }
    for (E = r(m, E); !L.done; P++, L = y.next())
      (L = p(E, m, P, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? P : L.key),
          (h = i(L, h, P)),
          _ === null ? (x = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        E.forEach(function (W) {
          return t(m, W);
        }),
      q && Sn(m, P),
      x
    );
  }
  function w(m, h, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === bn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ko:
          e: {
            for (var x = y.key, _ = h; _ !== null; ) {
              if (_.key === x) {
                if (((x = y.type), x === bn)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (h = o(_, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  _.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Bt &&
                    $f(x) === _.type)
                ) {
                  n(m, _.sibling),
                    (h = o(_, y.props)),
                    (h.ref = Nr(m, _, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            y.type === bn
              ? ((h = kn(y.props.children, m.mode, S, y.key)),
                (h.return = m),
                (m = h))
              : ((S = _i(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = Nr(m, h, y)),
                (S.return = m),
                (m = S));
          }
          return a(m);
        case $n:
          e: {
            for (_ = y.key; h !== null; ) {
              if (h.key === _)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, y.children || [])),
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
            (h = zl(y, m.mode, S)), (h.return = m), (m = h);
          }
          return a(m);
        case Bt:
          return (_ = y._init), w(m, h, _(y._payload), S);
      }
      if (zr(y)) return v(m, h, y, S);
      if (Tr(y)) return g(m, h, y, S);
      ni(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = jl(y, m.mode, S)), (h.return = m), (m = h)),
        a(m))
      : n(m, h);
  }
  return w;
}
var pr = Gv(!0),
  Yv = Gv(!1),
  jo = {},
  wt = hn(jo),
  mo = hn(jo),
  yo = hn(jo);
function Pn(e) {
  if (e === jo) throw Error(k(174));
  return e;
}
function Qs(e, t) {
  switch ((Y(yo, t), Y(mo, e), Y(wt, jo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : du(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = du(t, e));
  }
  Z(wt), Y(wt, t);
}
function vr() {
  Z(wt), Z(mo), Z(yo);
}
function Xv(e) {
  Pn(yo.current);
  var t = Pn(wt.current),
    n = du(t, e.type);
  t !== n && (Y(mo, e), Y(wt, n));
}
function Gs(e) {
  mo.current === e && (Z(wt), Z(mo));
}
var ne = hn(0);
function Ki(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
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
var Nl = [];
function Ys() {
  for (var e = 0; e < Nl.length; e++)
    Nl[e]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var xi = Ft.ReactCurrentDispatcher,
  Al = Ft.ReactCurrentBatchConfig,
  Mn = 0,
  re = null,
  ce = null,
  ve = null,
  Qi = !1,
  Qr = !1,
  go = 0,
  Uy = 0;
function xe() {
  throw Error(k(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, o, i) {
  if (
    ((Mn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xi.current = e === null || e.memoizedState === null ? Ky : Qy),
    (e = n(r, o)),
    Qr)
  ) {
    i = 0;
    do {
      if (((Qr = !1), (go = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (ve = ce = null),
        (t.updateQueue = null),
        (xi.current = Gy),
        (e = n(r, o));
    } while (Qr);
  }
  if (
    ((xi.current = Gi),
    (t = ce !== null && ce.next !== null),
    (Mn = 0),
    (ve = ce = re = null),
    (Qi = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Js() {
  var e = go !== 0;
  return (go = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ve === null ? (re.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function et() {
  if (ce === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = ve === null ? re.memoizedState : ve.next;
  if (t !== null) (ve = t), (ce = e);
  else {
    if (e === null) throw Error(k(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      ve === null ? (re.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function So(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ce,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      u = null,
      s = i;
    do {
      var c = s.lane;
      if ((Mn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (a = r)) : (u = u.next = d),
          (re.lanes |= c),
          (Ln |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (a = r) : (u.next = l),
      pt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (re.lanes |= i), (Ln |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    pt(i, t.memoizedState) || (Ie = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Zv() {}
function Jv(e, t) {
  var n = re,
    r = et(),
    o = t(),
    i = !pt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ie = !0)),
    (r = r.queue),
    qs(th.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wo(9, eh.bind(null, n, r, o, t), void 0, null),
      de === null)
    )
      throw Error(k(349));
    (Mn & 30) !== 0 || qv(n, t, o);
  }
  return o;
}
function qv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function eh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), nh(t) && Je(e, 1, -1);
}
function th(e, t, n) {
  return n(function () {
    nh(t) && Je(e, 1, -1);
  });
}
function nh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function bf(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: So,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wy.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rh() {
  return et().memoizedState;
}
function Ei(e, t, n, r) {
  var o = mt();
  (re.flags |= e),
    (o.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ta(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ce !== null) {
    var a = ce.memoizedState;
    if (((i = a.destroy), r !== null && Xs(r, a.deps))) {
      o.memoizedState = wo(t, n, i, r);
      return;
    }
  }
  (re.flags |= e), (o.memoizedState = wo(1 | t, n, i, r));
}
function Uf(e, t) {
  return Ei(8390656, 8, e, t);
}
function qs(e, t) {
  return Ta(2048, 8, e, t);
}
function oh(e, t) {
  return Ta(4, 2, e, t);
}
function ih(e, t) {
  return Ta(4, 4, e, t);
}
function ah(e, t) {
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
function lh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ta(4, 4, ah.bind(null, t, e), n)
  );
}
function ec() {}
function uh(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sh(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ch(e, t, n) {
  return (Mn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
    : (pt(n, t) || ((n = mv()), (re.lanes |= n), (Ln |= n), (e.baseState = !0)),
      t);
}
function By(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Al.transition = r);
  }
}
function fh() {
  return et().memoizedState;
}
function Hy(e, t, n) {
  var r = on(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    dh(e)
      ? ph(t, n)
      : (vh(e, t, n), (n = Re()), (e = Je(e, r, n)), e !== null && hh(e, t, r));
}
function Wy(e, t, n) {
  var r = on(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dh(e)) ph(t, o);
  else {
    vh(e, t, o);
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), pt(l, a))) return;
      } catch {
      } finally {
      }
    (n = Re()), (e = Je(e, r, n)), e !== null && hh(e, t, r);
  }
}
function dh(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function ph(e, t) {
  Qr = Qi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vh(e, t, n) {
  Nh(e)
    ? ((e = t.interleaved),
      e === null
        ? ((n.next = n), ct === null ? (ct = [t]) : ct.push(t))
        : ((n.next = e.next), (e.next = n)),
      (t.interleaved = n))
    : ((e = t.pending),
      e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
      (t.pending = n));
}
function hh(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ns(e, n);
  }
}
var Gi = {
    readContext: qe,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Ky = {
    readContext: qe,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: Uf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ei(4194308, 4, ah.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ei(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ei(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
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
        (e = e.dispatch = Hy.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bf,
    useDebugValue: ec,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = bf(!1),
        t = e[0];
      return (e = By.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        o = mt();
      if (q) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(k(349));
        (Mn & 30) !== 0 || qv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Uf(th.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        wo(9, eh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = de.identifierPrefix;
      if (q) {
        var n = Lt,
          r = Mt;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = go++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qy = {
    readContext: qe,
    useCallback: uh,
    useContext: qe,
    useEffect: qs,
    useImperativeHandle: lh,
    useInsertionEffect: oh,
    useLayoutEffect: ih,
    useMemo: sh,
    useReducer: Vl,
    useRef: rh,
    useState: function () {
      return Vl(So);
    },
    useDebugValue: ec,
    useDeferredValue: function (e) {
      var t = et();
      return ch(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(So)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Zv,
    useSyncExternalStore: Jv,
    useId: fh,
    unstable_isNewReconciler: !1,
  },
  Gy = {
    readContext: qe,
    useCallback: uh,
    useContext: qe,
    useEffect: qs,
    useImperativeHandle: lh,
    useInsertionEffect: oh,
    useLayoutEffect: ih,
    useMemo: sh,
    useReducer: Dl,
    useRef: rh,
    useState: function () {
      return Dl(So);
    },
    useDebugValue: ec,
    useDeferredValue: function (e) {
      var t = et();
      return ce === null ? (t.memoizedState = e) : ch(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(So)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Zv,
    useSyncExternalStore: Jv,
    useId: fh,
    unstable_isNewReconciler: !1,
  };
function tc(e, t) {
  try {
    var n = "",
      r = t;
    do (n += E1(r)), (r = r.return);
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
  return { value: e, source: t, stack: o };
}
function Du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yy = typeof WeakMap == "function" ? WeakMap : Map;
function mh(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xi || ((Xi = !0), (Hu = r)), Du(e, t);
    }),
    n
  );
}
function yh(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Du(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Du(e, t),
          typeof r != "function" &&
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Bf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ug.bind(null, e, t, n)), t.then(e, e));
}
function Hf(e) {
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
function Wf(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), nn(n, t))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var gh, Iu, Sh, wh;
gh = function (e, t) {
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
Iu = function () {};
Sh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Pn(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = uu(e, o)), (r = uu(e, r)), (i = []);
        break;
      case "select":
        (o = oe({}, o, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = fu(e, o)), (r = fu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zi);
    }
    pu(n, r);
    var a;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var l = o[s];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (oo.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (oo.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && X("scroll", e),
                  i || l === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
wh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ar(e, t) {
  if (!q)
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
function Ee(e) {
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
function Xy(e, t, n) {
  var r = t.pendingProps;
  switch ((Ws(t), t.tag)) {
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
      return ze(t.type) && Fi(), Ee(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        Z(je),
        Z(Te),
        Ys(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), ut !== null && (Qu(ut), (ut = null)))),
        Iu(e, t),
        Ee(t),
        null
      );
    case 5:
      Gs(t);
      var o = Pn(yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Ee(t), null;
        }
        if (((e = Pn(wt.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[ho] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < $r.length; o++) X($r[o], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              of(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              lf(r, i), X("invalid", r);
          }
          pu(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ti(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ti(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : oo.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              Qo(r), af(r, i, !0);
              break;
            case "textarea":
              Qo(r), uf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = zi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tv(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[gt] = t),
            (e[ho] = r),
            gh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = vu(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < $r.length; o++) X($r[o], e);
                o = r;
                break;
              case "source":
                X("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (o = r);
                break;
              case "details":
                X("toggle", e), (o = r);
                break;
              case "input":
                of(e, r), (o = uu(e, r)), X("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = oe({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                lf(e, r), (o = fu(e, r)), X("invalid", e);
                break;
              default:
                o = r;
            }
            pu(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === "style"
                  ? ov(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && nv(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && io(e, u)
                    : typeof u == "number" && io(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (oo.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && X("scroll", e)
                      : u != null && Ts(e, i, u, a));
              }
            switch (n) {
              case "input":
                Qo(e), af(e, r, !1);
                break;
              case "textarea":
                Qo(e), uf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zi);
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
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) wh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Pn(yo.current)), Pn(wt.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                ti(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ti(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Ee(t), null;
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        q && De !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (r = De; r; ) r = Rt(r.nextSibling);
        return dr(), (t.flags |= 98560), t;
      }
      if (r !== null && r.dehydrated !== null) {
        if (((r = Lr(t)), e === null)) {
          if (!r) throw Error(k(318));
          if (
            ((r = t.memoizedState), (r = r !== null ? r.dehydrated : null), !r)
          )
            throw Error(k(317));
          r[gt] = t;
        } else
          dr(),
            (t.flags & 128) === 0 && (t.memoizedState = null),
            (t.flags |= 4);
        return Ee(t), null;
      }
      return (
        ut !== null && (Qu(ut), (ut = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null ? Lr(t) : (n = e.memoizedState !== null),
            r !== n &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ne.current & 1) !== 0
                  ? fe === 0 && (fe = 3)
                  : lc())),
            t.updateQueue !== null && (t.flags |= 4),
            Ee(t),
            null)
      );
    case 4:
      return (
        vr(), Iu(e, t), e === null && po(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return Us(t.type._context), Ee(t), null;
    case 17:
      return ze(t.type) && Fi(), Ee(t), null;
    case 19:
      if ((Z(ne), (i = t.memoizedState), i === null)) return Ee(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Ar(i, !1);
        else {
          if (fe !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = Ki(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ar(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > hr &&
            ((t.flags |= 128), (r = !0), Ar(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ki(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ar(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !q)
            )
              return Ee(t), null;
          } else
            2 * le() - i.renderingStartTime > hr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ar(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = ne.current),
          Y(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        ac(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? ($e & 1073741824) !== 0 &&
            (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ee(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
var Zy = Ft.ReactCurrentOwner,
  Ie = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Yv(t, null, n, r) : pr(t, e.child, n, r);
}
function Kf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    or(t, o),
    (r = Zs(e, t, n, r, i, o)),
    (n = Js()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dt(e, t, o))
      : (q && n && Hs(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
  );
}
function Qf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !uc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), xh(e, t, i, r, o))
      : ((e = _i(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fo), n(a, r) && e.ref === t.ref)
    )
      return Dt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = cn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fo(i, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Ie = !0);
      else return (t.lanes = e.lanes), Dt(e, t, o);
  }
  return ju(e, t, n, r, o);
}
function Eh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Zn, $e),
        ($e |= n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(Zn, $e),
        ($e |= r);
    else
      return (
        (e = i !== null ? i.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (t.updateQueue = null),
        Y(Zn, $e),
        ($e |= e),
        null
      );
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Zn, $e),
      ($e |= r);
  return Oe(e, t, o, n), t.child;
}
function Ph(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ju(e, t, n, r, o) {
  var i = ze(n) ? On : Te.current;
  return (
    (i = fr(t, i)),
    or(t, o),
    (n = Zs(e, t, n, r, i, o)),
    (r = Js()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dt(e, t, o))
      : (q && r && Hs(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
  );
}
function Gf(e, t, n, r, o) {
  if (ze(n)) {
    var i = !0;
    $i(t);
  } else i = !1;
  if ((or(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Wv(t, n, r),
      Nu(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var u = a.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = qe(s))
      : ((s = ze(n) ? On : Te.current), (s = fr(t, s)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || u !== s) && jf(t, a, r, s)),
      (Ht = !1);
    var f = t.memoizedState;
    (a.state = f),
      Bi(t, r, a, o),
      (u = t.memoizedState),
      l !== r || f !== u || je.current || Ht
        ? (typeof c == "function" && (Lu(t, n, c, r), (u = t.memoizedState)),
          (l = Ht || If(t, n, l, r, f, u, s))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = s),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Bv(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : it(t.type, l)),
      (a.props = s),
      (d = t.pendingProps),
      (f = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = qe(u))
        : ((u = ze(n) ? On : Te.current), (u = fr(t, u)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || f !== u) && jf(t, a, r, u)),
      (Ht = !1),
      (f = t.memoizedState),
      (a.state = f),
      Bi(t, r, a, o);
    var v = t.memoizedState;
    l !== d || f !== v || je.current || Ht
      ? (typeof p == "function" && (Lu(t, n, p, r), (v = t.memoizedState)),
        (s = Ht || If(t, n, s, r, f, v, u) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = u),
        (r = s))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zu(e, t, n, r, i, o);
}
function zu(e, t, n, r, o, i) {
  Ph(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Af(t, n, !1), Dt(e, t, i);
  (r = t.stateNode), (Zy.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = pr(t, e.child, null, i)), (t.child = pr(t, null, l, i)))
      : Oe(e, t, l, i),
    (t.memoizedState = r.state),
    o && Af(t, n, !0),
    t.child
  );
}
function Ch(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Nf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Nf(e, t.context, !1),
    Qs(e, t.containerInfo);
}
function Yf(e, t, n, r, o) {
  return dr(), Ks(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xf(e, t) {
  return {
    baseLanes: e.baseLanes | t,
    cachePool: null,
    transitions: e.transitions,
  };
}
function _h(e, t, n) {
  var r = t.pendingProps,
    o = ne.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Y(ne, o & 1),
    e === null)
  )
    return (
      Vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = qi(o, r, 0, null)),
              (e = kn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = oi(n)),
              (t.memoizedState = ri),
              e)
            : Fu(t, o))
    );
  if (((o = e.memoizedState), o !== null)) {
    if (((l = o.dehydrated), l !== null)) {
      if (a)
        return t.flags & 256
          ? ((t.flags &= -257), ii(e, t, n, Error(k(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (o = t.mode),
            (r = qi({ mode: "visible", children: r.children }, o, 0, null)),
            (i = kn(i, o, n, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && pr(t, e.child, null, n),
            (t.child.memoizedState = oi(n)),
            (t.memoizedState = ri),
            i);
      if ((t.mode & 1) === 0) t = ii(e, t, n, null);
      else if (l.data === "$!") t = ii(e, t, n, Error(k(419)));
      else if (((r = (n & e.childLanes) !== 0), Ie || r)) {
        if (((r = de), r !== null)) {
          switch (n & -n) {
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
          (r = (i & (r.suspendedLanes | n)) !== 0 ? 0 : i),
            r !== 0 && r !== o.retryLane && ((o.retryLane = r), Je(e, r, -1));
        }
        lc(), (t = ii(e, t, n, Error(k(421))));
      } else
        l.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = sg.bind(null, e)),
            (l._reactRetry = t),
            (t = null))
          : ((n = o.treeContext),
            (De = Rt(l.nextSibling)),
            (be = t),
            (q = !0),
            (ut = null),
            n !== null &&
              ((Ge[Ye++] = Mt),
              (Ge[Ye++] = Lt),
              (Ge[Ye++] = Rn),
              (Mt = n.id),
              (Lt = n.overflow),
              (Rn = t)),
            (t = Fu(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? ((r = Jf(e, t, r.children, r.fallback, n)),
        (i = t.child),
        (o = e.child.memoizedState),
        (i.memoizedState = o === null ? oi(n) : Xf(o, n)),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = ri),
        r)
      : ((n = Zf(e, t, r.children, n)), (t.memoizedState = null), n);
  }
  return i
    ? ((r = Jf(e, t, r.children, r.fallback, n)),
      (i = t.child),
      (o = e.child.memoizedState),
      (i.memoizedState = o === null ? oi(n) : Xf(o, n)),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ri),
      r)
    : ((n = Zf(e, t, r.children, n)), (t.memoizedState = null), n);
}
function Fu(e, t) {
  return (
    (t = qi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zf(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = cn(o, { mode: "visible", children: n })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n)
  );
}
function Jf(e, t, n, r, o) {
  var i = t.mode;
  e = e.child;
  var a = e.sibling,
    l = { mode: "hidden", children: n };
  return (
    (i & 1) === 0 && t.child !== e
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = l),
        (t.deletions = null))
      : ((n = cn(e, l)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
    a !== null ? (r = cn(a, r)) : ((r = kn(r, i, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function ii(e, t, n, r) {
  return (
    r !== null && Ks(r),
    pr(t, e.child, null, n),
    (e = Fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mu(e.return, t, n);
}
function Il(e, t, n, r, o) {
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
function Th(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = ne.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qf(e, n, t);
        else if (e.tag === 19) qf(e, n, t);
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
  if ((Y(ne, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ki(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Il(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ki(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Il(t, !0, n, null, i);
        break;
      case "together":
        Il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ln |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jy(e, t, n) {
  switch (t.tag) {
    case 3:
      Ch(t), dr();
      break;
    case 5:
      Xv(t);
      break;
    case 1:
      ze(t.type) && $i(t);
      break;
    case 4:
      Qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Y(bi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ne, ne.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? _h(e, t, n)
          : (Y(ne, ne.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Th(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Y(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Eh(e, t, n);
  }
  return Dt(e, t, n);
}
function qy(e, t) {
  switch ((Ws(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && Fi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        Z(je),
        Z(Te),
        Ys(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Gs(t), null;
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ne), null;
    case 4:
      return vr(), null;
    case 10:
      return Us(t.type._context), null;
    case 22:
    case 23:
      return ac(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ai = !1,
  _e = !1,
  eg = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function $u(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var ed = !1;
function tg(e, t) {
  if (((Cu = Di), (e = Nv()), Fs(e))) {
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
          var a = 0,
            l = -1,
            u = -1,
            s = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++s === o && (l = a),
                f === i && ++c === r && (u = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_u = { focusedElem: e, selectionRange: n }, Di = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                if (y.nodeType === 1) y.textContent = "";
                else if (y.nodeType === 9) {
                  var S = y.body;
                  S != null && (S.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          ie(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = ed), (ed = !1), v;
}
function Gr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && $u(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ka(e, t) {
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
function bu(e) {
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
function kh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[ho], delete t[Ou], delete t[zy], delete t[Fy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Oh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function td(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oh(e.return)) return null;
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
function Uu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), (e = e.sibling);
}
function Bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bu(e, t, n), e = e.sibling; e !== null; ) Bu(e, t, n), (e = e.sibling);
}
var ye = null,
  at = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Rh(e, t, n), (n = n.sibling);
}
function Rh(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(Sa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Xn(n, t);
    case 6:
      var r = ye,
        o = at;
      (ye = null),
        $t(e, t, n),
        (ye = r),
        (at = o),
        ye !== null &&
          (at
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (at
          ? ((e = ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, n)
              : e.nodeType === 1 && Ml(e, n),
            so(e))
          : Ml(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (o = at),
        (ye = n.stateNode.containerInfo),
        (at = !0),
        $t(e, t, n),
        (ye = r),
        (at = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && $u(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ie(n, t, l);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), $t(e, t, n), (_e = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function nd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eg()),
      t.forEach(function (r) {
        var o = cg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ye = l.stateNode), (at = !1);
              break e;
            case 3:
              (ye = l.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (ye = l.stateNode.containerInfo), (at = !0);
              break e;
          }
          l = l.return;
        }
        if (ye === null) throw Error(k(160));
        Rh(i, a, o), (ye = null), (at = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (s) {
        ie(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mh(t, e), (t = t.sibling);
}
function Mh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rt(t, e), ht(e), r & 4)) {
        try {
          Gr(3, e, e.return), ka(3, e);
        } catch (v) {
          ie(e, e.return, v);
        }
        try {
          Gr(5, e, e.return);
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 1:
      rt(t, e), ht(e), r & 512 && n !== null && Xn(n, n.return);
      break;
    case 5:
      if (
        (rt(t, e),
        ht(e),
        r & 512 && n !== null && Xn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          io(o, "");
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && qp(o, i),
              vu(l, a);
            var s = vu(l, i);
            for (a = 0; a < u.length; a += 2) {
              var c = u[a],
                d = u[a + 1];
              c === "style"
                ? ov(o, d)
                : c === "dangerouslySetInnerHTML"
                ? nv(o, d)
                : c === "children"
                ? io(o, d)
                : Ts(o, c, d, s);
            }
            switch (l) {
              case "input":
                su(o, i);
                break;
              case "textarea":
                ev(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? er(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? er(o, !!i.multiple, i.defaultValue, !0)
                      : er(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ho] = i;
          } catch (v) {
            ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((rt(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (s = e.stateNode), (c = e.memoizedProps);
        try {
          s.nodeValue = c;
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (rt(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          so(t.containerInfo);
        } catch (v) {
          ie(e, e.return, v);
        }
      break;
    case 4:
      rt(t, e), ht(e);
      break;
    case 13:
      rt(t, e),
        ht(e),
        (s = e.child),
        s.flags & 8192 &&
          s.memoizedState !== null &&
          (s.alternate === null || s.alternate.memoizedState === null) &&
          (oc = le()),
        r & 4 && nd(e);
      break;
    case 22:
      if (
        ((s = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (c = _e) || s), rt(t, e), (_e = c)) : rt(t, e),
        ht(e),
        r & 8192)
      ) {
        c = e.memoizedState !== null;
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = rv("display", a)));
              } catch (v) {
                ie(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                ie(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
        if (c && !s && (e.mode & 1) !== 0)
          for (A = e, e = e.child; e !== null; ) {
            for (s = A = e; A !== null; ) {
              switch (((c = A), (d = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, c, c.return);
                  break;
                case 1:
                  if (
                    (Xn(c, c.return),
                    (i = c.stateNode),
                    typeof i.componentWillUnmount == "function")
                  ) {
                    (f = c), (p = c.return);
                    try {
                      (o = f),
                        (i.props = o.memoizedProps),
                        (i.state = o.memoizedState),
                        i.componentWillUnmount();
                    } catch (v) {
                      ie(f, p, v);
                    }
                  }
                  break;
                case 5:
                  Xn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    od(s);
                    continue;
                  }
              }
              d !== null ? ((d.return = c), (A = d)) : od(s);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      rt(t, e), ht(e), r & 4 && nd(e);
      break;
    case 21:
      break;
    default:
      rt(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (io(o, ""), (r.flags &= -33));
          var i = td(e);
          Bu(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = td(e);
          Uu(e, l, a);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ng(e, t, n) {
  (A = e), Lh(e);
}
function Lh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ai;
      if (!a) {
        var l = o.alternate,
          u = (l !== null && l.memoizedState !== null) || _e;
        l = ai;
        var s = _e;
        if (((ai = a), (_e = u) && !s))
          for (A = o; A !== null; )
            (a = A),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? id(o)
                : u !== null
                ? ((u.return = a), (A = u))
                : id(o);
        for (; i !== null; ) (A = i), Lh(i), (i = i.sibling);
        (A = o), (ai = l), (_e = s);
      }
      rd(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (A = i))
        : rd(e);
  }
}
function rd(e) {
  for (; A !== null; ) {
    var t = A;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || ka(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Df(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Df(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && so(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(k(163));
          }
        _e || (t.flags & 512 && bu(t));
      } catch (f) {
        ie(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function od(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function id(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ka(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, o, u);
            }
          }
          var i = t.return;
          try {
            bu(t);
          } catch (u) {
            ie(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            bu(t);
          } catch (u) {
            ie(t, a, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var rg = Math.ceil,
  Yi = Ft.ReactCurrentDispatcher,
  nc = Ft.ReactCurrentOwner,
  Ze = Ft.ReactCurrentBatchConfig,
  U = 0,
  de = null,
  se = null,
  ge = 0,
  $e = 0,
  Zn = hn(0),
  fe = 0,
  xo = null,
  Ln = 0,
  Oa = 0,
  rc = 0,
  Yr = null,
  Ve = null,
  oc = 0,
  hr = 1 / 0,
  kt = null,
  Xi = !1,
  Hu = null,
  rn = null,
  li = !1,
  Xt = null,
  Zi = 0,
  Xr = 0,
  Wu = null,
  Pi = -1,
  Ci = 0;
function Re() {
  return (U & 6) !== 0 ? le() : Pi !== -1 ? Pi : (Pi = le());
}
function on(e) {
  return (e.mode & 1) === 0
    ? 1
    : (U & 2) !== 0 && ge !== 0
    ? ge & -ge
    : by.transition !== null
    ? (Ci === 0 && (Ci = mv()), Ci)
    : ((e = B),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pv(e.type))),
      e);
}
function Je(e, t, n) {
  if (50 < Xr) throw ((Xr = 0), (Wu = null), Error(k(185)));
  var r = Ra(e, t);
  return r === null
    ? null
    : (Vo(r, t, n),
      ((U & 2) === 0 || r !== de) &&
        (r === de && ((U & 2) === 0 && (Oa |= t), fe === 4 && Qt(r, ge)),
        Fe(r, n),
        t === 1 &&
          U === 0 &&
          (e.mode & 1) === 0 &&
          ((hr = le() + 500), Ca && mn())),
      r);
}
function Ra(e, t) {
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
function Nh(e) {
  return (de !== null || ct !== null) && (e.mode & 1) !== 0 && (U & 2) === 0;
}
function Fe(e, t) {
  var n = e.callbackNode;
  b1(e, t);
  var r = Vi(e, e === de ? ge : 0);
  if (r === 0)
    n !== null && ff(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ff(n), t === 1))
      e.tag === 0 ? $y(ad.bind(null, e)) : Uv(ad.bind(null, e)),
        Iy(function () {
          U === 0 && mn();
        }),
        (n = null);
    else {
      switch (yv(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = vv;
          break;
        case 16:
          n = Ai;
          break;
        case 536870912:
          n = hv;
          break;
        default:
          n = Ai;
      }
      n = $h(n, Ah.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ah(e, t) {
  if (((Pi = -1), (Ci = 0), (U & 6) !== 0)) throw Error(k(327));
  var n = e.callbackNode;
  if (ir() && e.callbackNode !== n) return null;
  var r = Vi(e, e === de ? ge : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ji(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = Dh();
    (de !== e || ge !== t) && ((kt = null), (hr = le() + 500), Tn(e, t));
    do
      try {
        ag();
        break;
      } catch (l) {
        Vh(e, l);
      }
    while (1);
    bs(),
      (Yi.current = i),
      (U = o),
      se !== null ? (t = 0) : ((de = null), (ge = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Su(e)), o !== 0 && ((r = o), (t = Ku(e, o)))), t === 1)
    )
      throw ((n = xo), Tn(e, 0), Qt(e, r), Fe(e, le()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !og(o) &&
          ((t = Ji(e, r)),
          t === 2 && ((i = Su(e)), i !== 0 && ((r = i), (t = Ku(e, i)))),
          t === 1))
      )
        throw ((n = xo), Tn(e, 0), Qt(e, r), Fe(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          wn(e, Ve, kt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = oc + 500 - le()), 10 < t))
          ) {
            if (Vi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ku(wn.bind(null, e, Ve, kt), t);
            break;
          }
          wn(e, Ve, kt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - dt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = le() - r),
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
                : 1960 * rg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ku(wn.bind(null, e, Ve, kt), r);
            break;
          }
          wn(e, Ve, kt);
          break;
        case 5:
          wn(e, Ve, kt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Fe(e, le()), e.callbackNode === n ? Ah.bind(null, e) : null;
}
function Ku(e, t) {
  var n = Yr;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Ji(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && Qu(t)),
    e
  );
}
function Qu(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function og(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!pt(i(), o)) return !1;
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
function Qt(e, t) {
  for (
    t &= ~rc,
      t &= ~Oa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ad(e) {
  if ((U & 6) !== 0) throw Error(k(327));
  ir();
  var t = Vi(e, 0);
  if ((t & 1) === 0) return Fe(e, le()), null;
  var n = Ji(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Su(e);
    r !== 0 && ((t = r), (n = Ku(e, r)));
  }
  if (n === 1) throw ((n = xo), Tn(e, 0), Qt(e, t), Fe(e, le()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, Ve, kt),
    Fe(e, le()),
    null
  );
}
function ic(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((hr = le() + 500), Ca && mn());
  }
}
function Nn(e) {
  Xt !== null && Xt.tag === 0 && (U & 6) === 0 && ir();
  var t = U;
  U |= 1;
  var n = Ze.transition,
    r = B;
  try {
    if (((Ze.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ze.transition = n), (U = t), (U & 6) === 0 && mn();
  }
}
function ac() {
  ($e = Zn.current), Z(Zn);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dy(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((Ws(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Fi();
          break;
        case 3:
          vr(), Z(je), Z(Te), Ys();
          break;
        case 5:
          Gs(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          Z(ne);
          break;
        case 19:
          Z(ne);
          break;
        case 10:
          Us(r.type._context);
          break;
        case 22:
        case 23:
          ac();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (se = e = cn(e.current, null)),
    (ge = $e = t),
    (fe = 0),
    (xo = null),
    (rc = Oa = Ln = 0),
    (Ve = Yr = null),
    ct !== null)
  ) {
    for (t = 0; t < ct.length; t++)
      if (((n = ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    ct = null;
  }
  return e;
}
function Vh(e, t) {
  do {
    var n = se;
    try {
      if ((bs(), (xi.current = Gi), Qi)) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Qi = !1;
      }
      if (
        ((Mn = 0),
        (ve = ce = re = null),
        (Qr = !1),
        (go = 0),
        (nc.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (xo = t), (se = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          u = t;
        if (
          ((t = ge),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = l,
            d = c.tag;
          if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Hf(a);
          if (p !== null) {
            (p.flags &= -257),
              Wf(p, a, l, i, t),
              p.mode & 1 && Bf(i, s, t),
              (t = p),
              (u = s);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else v.add(u);
            break e;
          } else {
            if ((t & 1) === 0) {
              Bf(i, s, t), lc();
              break e;
            }
            u = Error(k(426));
          }
        } else if (q && l.mode & 1) {
          var w = Hf(a);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256),
              Wf(w, a, l, i, t),
              Ks(u);
            break e;
          }
        }
        (i = u),
          fe !== 4 && (fe = 2),
          Yr === null ? (Yr = [i]) : Yr.push(i),
          (u = tc(u, l)),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = mh(l, u, t);
              Vf(l, m);
              break e;
            case 1:
              i = u;
              var h = l.type,
                y = l.stateNode;
              if (
                (l.flags & 128) === 0 &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (rn === null || !rn.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = yh(l, i, t);
                Vf(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      jh(n);
    } catch (x) {
      (t = x), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Dh() {
  var e = Yi.current;
  return (Yi.current = Gi), e === null ? Gi : e;
}
function lc() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    de === null ||
      ((Ln & 268435455) === 0 && (Oa & 268435455) === 0) ||
      Qt(de, ge);
}
function Ji(e, t) {
  var n = U;
  U |= 2;
  var r = Dh();
  (de !== e || ge !== t) && ((kt = null), Tn(e, t));
  do
    try {
      ig();
      break;
    } catch (o) {
      Vh(e, o);
    }
  while (1);
  if ((bs(), (U = n), (Yi.current = r), se !== null)) throw Error(k(261));
  return (de = null), (ge = 0), fe;
}
function ig() {
  for (; se !== null; ) Ih(se);
}
function ag() {
  for (; se !== null && !N1(); ) Ih(se);
}
function Ih(e) {
  var t = Fh(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? jh(e) : (se = t),
    (nc.current = null);
}
function jh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Xy(n, t, $e)), n !== null)) {
        se = n;
        return;
      }
    } else {
      if (((n = qy(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (se = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function wn(e, t, n) {
  var r = B,
    o = Ze.transition;
  try {
    (Ze.transition = null), (B = 1), lg(e, t, n, r);
  } finally {
    (Ze.transition = o), (B = r);
  }
  return null;
}
function lg(e, t, n, r) {
  do ir();
  while (Xt !== null);
  if ((U & 6) !== 0) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (U1(e, i),
    e === de && ((se = de = null), (ge = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      li ||
      ((li = !0),
      $h(Ai, function () {
        return ir(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Ze.transition), (Ze.transition = null);
    var a = B;
    B = 1;
    var l = U;
    (U |= 4),
      (nc.current = null),
      tg(e, n),
      Mh(n, e),
      Oy(_u),
      (Di = !!Cu),
      (_u = Cu = null),
      (e.current = n),
      ng(n),
      A1(),
      (U = l),
      (B = a),
      (Ze.transition = i);
  } else e.current = n;
  if (
    (li && ((li = !1), (Xt = e), (Zi = o)),
    (i = e.pendingLanes),
    i === 0 && (rn = null),
    I1(n.stateNode),
    Fe(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
  if (Xi) throw ((Xi = !1), (e = Hu), (Hu = null), e);
  return (
    (Zi & 1) !== 0 && e.tag !== 0 && ir(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Wu ? Xr++ : ((Xr = 0), (Wu = e))) : (Xr = 0),
    mn(),
    null
  );
}
function ir() {
  if (Xt !== null) {
    var e = yv(Zi),
      t = Ze.transition,
      n = B;
    try {
      if (((Ze.transition = null), (B = 16 > e ? 16 : e), Xt === null))
        var r = !1;
      else {
        if (((e = Xt), (Xt = null), (Zi = 0), (U & 6) !== 0))
          throw Error(k(331));
        var o = U;
        for (U |= 4, A = e.current; A !== null; ) {
          var i = A,
            a = i.child;
          if ((A.flags & 16) !== 0) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (A = s; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (A = d);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var f = c.sibling,
                        p = c.return;
                      if ((kh(c), c === s)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (A = f);
                        break;
                      }
                      A = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              A = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = i), (A = a);
          else
            e: for (; A !== null; ) {
              if (((i = A), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (A = m);
                break e;
              }
              A = i.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          a = A;
          var y = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && y !== null)
            (y.return = a), (A = y);
          else
            e: for (a = h; A !== null; ) {
              if (((l = A), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ka(9, l);
                  }
                } catch (x) {
                  ie(l, l.return, x);
                }
              if (l === a) {
                A = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (A = S);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((U = o), mn(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(Sa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ze.transition = t);
    }
  }
  return !1;
}
function ld(e, t, n) {
  (t = tc(n, t)),
    (t = mh(e, t, 1)),
    nn(e, t),
    (t = Re()),
    (e = Ra(e, 1)),
    e !== null && (Vo(e, 1, t), Fe(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) ld(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ld(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = tc(n, e)),
            (e = yh(t, e, 1)),
            nn(t, e),
            (e = Re()),
            (t = Ra(t, 1)),
            t !== null && (Vo(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ug(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (ge & n) === n &&
      (fe === 4 || (fe === 3 && (ge & 130023424) === ge && 500 > le() - oc)
        ? Tn(e, 0)
        : (rc |= n)),
    Fe(e, t);
}
function zh(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Xo), (Xo <<= 1), (Xo & 130023424) === 0 && (Xo = 4194304)));
  var n = Re();
  (e = Ra(e, t)), e !== null && (Vo(e, t, n), Fe(e, n));
}
function sg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zh(e, n);
}
function cg(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), zh(e, n);
}
var Fh;
Fh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Ie = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Ie = !1), Jy(e, t, n);
      Ie = (e.flags & 131072) !== 0;
    }
  else (Ie = !1), q && (t.flags & 1048576) !== 0 && Kv(t, Wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var o = fr(t, Te.current);
      or(t, n), (o = Zs(null, t, r, e, o, n));
      var i = Js();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((i = !0), $i(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Bs(t),
            (o.updater = _a),
            (t.stateNode = o),
            (o._reactInternals = t),
            Nu(t, r, e, n),
            (t = zu(null, t, r, !0, i, n)))
          : ((t.tag = 0), q && i && Hs(t), Oe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dg(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = ju(null, t, r, e, n);
            break e;
          case 1:
            t = Gf(null, t, r, e, n);
            break e;
          case 11:
            t = Kf(null, t, r, e, n);
            break e;
          case 14:
            t = Qf(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ju(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Gf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ch(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Bv(e, t),
          Bi(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Error(k(423))), (t = Yf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Error(k(424))), (t = Yf(e, t, r, n, o));
            break e;
          } else
            for (
              De = Rt(t.stateNode.containerInfo.firstChild),
                be = t,
                q = !0,
                ut = null,
                n = Yv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dr(), r === o)) {
            t = Dt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xv(t),
        e === null && Vu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Tu(r, o) ? (a = null) : i !== null && Tu(r, i) && (t.flags |= 32),
        Ph(e, t),
        Oe(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Vu(t), null;
    case 13:
      return _h(e, t, n);
    case 4:
      return (
        Qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Kf(e, t, r, o, n)
      );
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Y(bi, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (pt(i.value, a)) {
            if (i.children === o.children && !je.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Nt(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Mu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(k(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Mu(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Oe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (o = qe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        Qf(e, t, r, o, n)
      );
    case 15:
      return xh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ze(r) ? ((e = !0), $i(t)) : (e = !1),
        or(t, n),
        Wv(t, r, o),
        Nu(t, r, o, n),
        zu(null, t, r, !0, e, n)
      );
    case 19:
      return Th(e, t, n);
    case 22:
      return Eh(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function $h(e, t) {
  return pv(e, t);
}
function fg(e, t, n, r) {
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
function Xe(e, t, n, r) {
  return new fg(e, t, n, r);
}
function uc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dg(e) {
  if (typeof e == "function") return uc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Os)) return 11;
    if (e === Rs) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
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
function _i(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) uc(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case bn:
        return kn(n.children, o, i, t);
      case ks:
        (a = 8), (o |= 8);
        break;
      case ou:
        return (
          (e = Xe(12, n, t, o | 2)), (e.elementType = ou), (e.lanes = i), e
        );
      case iu:
        return (e = Xe(13, n, t, o)), (e.elementType = iu), (e.lanes = i), e;
      case au:
        return (e = Xe(19, n, t, o)), (e.elementType = au), (e.lanes = i), e;
      case Xp:
        return qi(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gp:
              a = 10;
              break e;
            case Yp:
              a = 9;
              break e;
            case Os:
              a = 11;
              break e;
            case Rs:
              a = 14;
              break e;
            case Bt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Xe(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function kn(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}
function qi(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = Xp),
    (e.lanes = n),
    (e.stateNode = {}),
    e
  );
}
function jl(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function zl(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pg(e, t, n, r, o) {
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
    (this.eventTimes = Sl(0)),
    (this.expirationTimes = Sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function sc(e, t, n, r, o, i, a, l, u) {
  return (
    (e = new pg(e, t, n, l, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Xe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bs(i),
    e
  );
}
function vg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bh(e) {
  if (!e) return sn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return bv(e, n, t);
  }
  return t;
}
function Uh(e, t, n, r, o, i, a, l, u) {
  return (
    (e = sc(n, r, !0, e, o, i, a, l, u)),
    (e.context = bh(null)),
    (n = e.current),
    (r = Re()),
    (o = on(n)),
    (i = Nt(r, o)),
    (i.callback = t != null ? t : null),
    nn(n, i),
    (e.current.lanes = o),
    Vo(e, o, r),
    Fe(e, r),
    e
  );
}
function Ma(e, t, n, r) {
  var o = t.current,
    i = Re(),
    a = on(o);
  return (
    (n = bh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    nn(o, t),
    (e = Je(o, a, i)),
    e !== null && wi(e, o, a),
    a
  );
}
function ea(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ud(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cc(e, t) {
  ud(e, t), (e = e.alternate) && ud(e, t);
}
function hg() {
  return null;
}
var Bh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fc(e) {
  this._internalRoot = e;
}
La.prototype.render = fc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ma(e, t, null, null);
};
La.prototype.unmount = fc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      Ma(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function La(e) {
  this._internalRoot = e;
}
La.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && Ev(e);
  }
};
function dc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Na(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function sd() {}
function mg(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = ea(a);
        i.call(s);
      };
    }
    var a = Uh(t, r, e, 0, null, !1, !1, "", sd);
    return (
      (e._reactRootContainer = a),
      (e[Vt] = a.current),
      po(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = ea(u);
      l.call(s);
    };
  }
  var u = sc(e, 0, !1, null, null, !1, !1, "", sd);
  return (
    (e._reactRootContainer = u),
    (e[Vt] = u.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      Ma(t, u, n, r);
    }),
    u
  );
}
function Aa(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var u = ea(a);
        l.call(u);
      };
    }
    Ma(t, a, e, o);
  } else a = mg(n, t, e, o, r);
  return ea(a);
}
gv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (Ns(t, n | 1),
          Fe(t, le()),
          (U & 6) === 0 && ((hr = le() + 500), mn()));
      }
      break;
    case 13:
      var r = Re();
      Nn(function () {
        return Je(e, 1, r);
      }),
        cc(e, 1);
  }
};
As = function (e) {
  if (e.tag === 13) {
    var t = Re();
    Je(e, 134217728, t), cc(e, 134217728);
  }
};
Sv = function (e) {
  if (e.tag === 13) {
    var t = Re(),
      n = on(e);
    Je(e, n, t), cc(e, n);
  }
};
wv = function () {
  return B;
};
xv = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
mu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((su(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Pa(r);
            if (!o) throw Error(k(90));
            Jp(r), su(r, o);
          }
        }
      }
      break;
    case "textarea":
      ev(e, n);
      break;
    case "select":
      (t = n.value), t != null && er(e, !!n.multiple, t, !1);
  }
};
lv = ic;
uv = Nn;
var yg = { usingClientEntryPoint: !1, Events: [Io, Wn, Pa, iv, av, ic] },
  Vr = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  },
  gg = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || hg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ui.isDisabled && ui.supportsFiber)
    try {
      (Sa = ui.inject(gg)), (St = ui);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yg;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dc(t)) throw Error(k(200));
  return vg(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!dc(e)) throw Error(k(299));
  var n = !1,
    r = "",
    o = Bh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = sc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Vt] = t.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    new fc(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = fv(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return Nn(e);
};
He.hydrate = function (e, t, n) {
  if (!Na(t)) throw Error(k(200));
  return Aa(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!dc(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Bh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Uh(t, null, e, 1, n != null ? n : null, o, !1, i, a)),
    (e[Vt] = t.current),
    po(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new La(t);
};
He.render = function (e, t, n) {
  if (!Na(t)) throw Error(k(200));
  return Aa(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Na(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Nn(function () {
        Aa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = ic;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Na(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Aa(e, t, n, !1, r);
};
He.version = "18.1.0-next-22edb9f77-20220426";
function Hh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hh);
    } catch (e) {
      console.error(e);
    }
}
Hh(), (Ps.exports = He);
var cd = Ps.exports;
(nu.createRoot = cd.createRoot), (nu.hydrateRoot = cd.hydrateRoot);
function ta() {
  return (
    (ta =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ta.apply(this, arguments)
  );
}
var Cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Cn || (Cn = {}));
var fd = function (e) {
    return e;
  },
  dd = "beforeunload",
  Sg = "popstate";
function wg(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    o = r.history;
  function i() {
    var E = r.location,
      P = E.pathname,
      R = E.search,
      L = E.hash,
      z = o.state || {};
    return [
      z.idx,
      fd({
        pathname: P,
        search: R,
        hash: L,
        state: z.usr || null,
        key: z.key || "default",
      }),
    ];
  }
  var a = null;
  function l() {
    if (a) p.call(a), (a = null);
    else {
      var E = Cn.Pop,
        P = i(),
        R = P[0],
        L = P[1];
      if (p.length) {
        if (R != null) {
          var z = c - R;
          z &&
            ((a = {
              action: E,
              location: L,
              retry: function () {
                x(z * -1);
              },
            }),
            x(z));
        }
      } else h(E);
    }
  }
  r.addEventListener(Sg, l);
  var u = Cn.Pop,
    s = i(),
    c = s[0],
    d = s[1],
    f = vd(),
    p = vd();
  c == null && ((c = 0), o.replaceState(ta({}, o.state, { idx: c }), ""));
  function v(E) {
    return typeof E == "string" ? E : Gu(E);
  }
  function g(E, P) {
    return (
      P === void 0 && (P = null),
      fd(
        ta(
          { pathname: d.pathname, hash: "", search: "" },
          typeof E == "string" ? In(E) : E,
          { state: P, key: xg() }
        )
      )
    );
  }
  function w(E, P) {
    return [{ usr: E.state, key: E.key, idx: P }, v(E)];
  }
  function m(E, P, R) {
    return !p.length || (p.call({ action: E, location: P, retry: R }), !1);
  }
  function h(E) {
    u = E;
    var P = i();
    (c = P[0]), (d = P[1]), f.call({ action: u, location: d });
  }
  function y(E, P) {
    var R = Cn.Push,
      L = g(E, P);
    function z() {
      y(E, P);
    }
    if (m(R, L, z)) {
      var W = w(L, c + 1),
        ee = W[0],
        ue = W[1];
      try {
        o.pushState(ee, "", ue);
      } catch {
        r.location.assign(ue);
      }
      h(R);
    }
  }
  function S(E, P) {
    var R = Cn.Replace,
      L = g(E, P);
    function z() {
      S(E, P);
    }
    if (m(R, L, z)) {
      var W = w(L, c),
        ee = W[0],
        ue = W[1];
      o.replaceState(ee, "", ue), h(R);
    }
  }
  function x(E) {
    o.go(E);
  }
  var _ = {
    get action() {
      return u;
    },
    get location() {
      return d;
    },
    createHref: v,
    push: y,
    replace: S,
    go: x,
    back: function () {
      x(-1);
    },
    forward: function () {
      x(1);
    },
    listen: function (P) {
      return f.push(P);
    },
    block: function (P) {
      var R = p.push(P);
      return (
        p.length === 1 && r.addEventListener(dd, pd),
        function () {
          R(), p.length || r.removeEventListener(dd, pd);
        }
      );
    },
  };
  return _;
}
function pd(e) {
  e.preventDefault(), (e.returnValue = "");
}
function vd() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function xg() {
  return Math.random().toString(36).substr(2, 8);
}
function Gu(e) {
  var t = e.pathname,
    n = t === void 0 ? "/" : t,
    r = e.search,
    o = r === void 0 ? "" : r,
    i = e.hash,
    a = i === void 0 ? "" : i;
  return (
    o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o),
    a && a !== "#" && (n += a.charAt(0) === "#" ? a : "#" + a),
    n
  );
}
function In(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const pc = C.exports.createContext(null),
  vc = C.exports.createContext(null),
  zo = C.exports.createContext({ outlet: null, matches: [] });
function _t(e, t) {
  if (!e) throw new Error(t);
}
function Eg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? In(t) : t,
    o = Qh(r.pathname || "/", n);
  if (o == null) return null;
  let i = Wh(e);
  Pg(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) a = Ng(i[l], o);
  return a;
}
function Wh(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((o, i) => {
      let a = {
        relativePath: o.path || "",
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: i,
        route: o,
      };
      a.relativePath.startsWith("/") &&
        (a.relativePath.startsWith(r) || _t(!1),
        (a.relativePath = a.relativePath.slice(r.length)));
      let l = an([r, a.relativePath]),
        u = n.concat(a);
      o.children &&
        o.children.length > 0 &&
        (o.index === !0 && _t(!1), Wh(o.children, t, u, l)),
        !(o.path == null && !o.index) &&
          t.push({ path: l, score: Mg(l, o.index), routesMeta: u });
    }),
    t
  );
}
function Pg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Lg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Cg = /^:\w+$/,
  _g = 3,
  Tg = 2,
  kg = 1,
  Og = 10,
  Rg = -2,
  hd = (e) => e === "*";
function Mg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(hd) && (r += Rg),
    t && (r += Tg),
    n
      .filter((o) => !hd(o))
      .reduce((o, i) => o + (Cg.test(i) ? _g : i === "" ? kg : Og), r)
  );
}
function Lg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ng(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      s = o === "/" ? t : t.slice(o.length) || "/",
      c = Ag(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    i.push({
      params: r,
      pathname: an([o, c.pathname]),
      pathnameBase: Gh(an([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = an([o, c.pathnameBase]));
  }
  return i;
}
function Ag(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vg(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((s, c, d) => {
      if (c === "*") {
        let f = l[d] || "";
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (s[c] = Dg(l[d] || "")), s;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function Vg(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0);
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (a, l) => (r.push(l), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (o += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Dg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Ig(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? In(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : jg(n, t)) : t,
    search: Fg(r),
    hash: $g(o),
  };
}
function jg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Kh(e, t, n) {
  let r = typeof e == "string" ? In(e) : e,
    o = e === "" || r.pathname === "" ? "/" : r.pathname,
    i;
  if (o == null) i = n;
  else {
    let l = t.length - 1;
    if (o.startsWith("..")) {
      let u = o.split("/");
      for (; u[0] === ".."; ) u.shift(), (l -= 1);
      r.pathname = u.join("/");
    }
    i = l >= 0 ? t[l] : "/";
  }
  let a = Ig(r, i);
  return (
    o &&
      o !== "/" &&
      o.endsWith("/") &&
      !a.pathname.endsWith("/") &&
      (a.pathname += "/"),
    a
  );
}
function zg(e) {
  return e === "" || e.pathname === ""
    ? "/"
    : typeof e == "string"
    ? In(e).pathname
    : e.pathname;
}
function Qh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = e.charAt(t.length);
  return n && n !== "/" ? null : e.slice(t.length) || "/";
}
const an = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Fg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $g = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function bg(e) {
  Fo() || _t(!1);
  let { basename: t, navigator: n } = C.exports.useContext(pc),
    { hash: r, pathname: o, search: i } = Yh(e),
    a = o;
  if (t !== "/") {
    let l = zg(e),
      u = l != null && l.endsWith("/");
    a = o === "/" ? t + (u ? "/" : "") : an([t, o]);
  }
  return n.createHref({ pathname: a, search: i, hash: r });
}
function Fo() {
  return C.exports.useContext(vc) != null;
}
function Va() {
  return Fo() || _t(!1), C.exports.useContext(vc).location;
}
function Ug() {
  Fo() || _t(!1);
  let { basename: e, navigator: t } = C.exports.useContext(pc),
    { matches: n } = C.exports.useContext(zo),
    { pathname: r } = Va(),
    o = JSON.stringify(n.map((l) => l.pathnameBase)),
    i = C.exports.useRef(!1);
  return (
    C.exports.useEffect(() => {
      i.current = !0;
    }),
    C.exports.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let s = Kh(l, JSON.parse(o), r);
        e !== "/" && (s.pathname = an([e, s.pathname])),
          (u.replace ? t.replace : t.push)(s, u.state);
      },
      [e, t, o, r]
    )
  );
}
const Bg = C.exports.createContext(null);
function Hg(e) {
  let t = C.exports.useContext(zo).outlet;
  return t && C.exports.createElement(Bg.Provider, { value: e }, t);
}
function Yh(e) {
  let { matches: t } = C.exports.useContext(zo),
    { pathname: n } = Va(),
    r = JSON.stringify(t.map((o) => o.pathnameBase));
  return C.exports.useMemo(() => Kh(e, JSON.parse(r), n), [e, r, n]);
}
function Wg(e, t) {
  Fo() || _t(!1);
  let { matches: n } = C.exports.useContext(zo),
    r = n[n.length - 1],
    o = r ? r.params : {};
  r && r.pathname;
  let i = r ? r.pathnameBase : "/";
  r && r.route;
  let a = Va(),
    l;
  if (t) {
    var u;
    let f = typeof t == "string" ? In(t) : t;
    i === "/" ||
      ((u = f.pathname) == null ? void 0 : u.startsWith(i)) ||
      _t(!1),
      (l = f);
  } else l = a;
  let s = l.pathname || "/",
    c = i === "/" ? s : s.slice(i.length) || "/",
    d = Eg(e, { pathname: c });
  return Kg(
    d &&
      d.map((f) =>
        Object.assign({}, f, {
          params: Object.assign({}, o, f.params),
          pathname: an([i, f.pathname]),
          pathnameBase: f.pathnameBase === "/" ? i : an([i, f.pathnameBase]),
        })
      ),
    n
  );
}
function Kg(e, t) {
  return (
    t === void 0 && (t = []),
    e == null
      ? null
      : e.reduceRight(
          (n, r, o) =>
            C.exports.createElement(zo.Provider, {
              children: r.route.element !== void 0 ? r.route.element : n,
              value: { outlet: n, matches: t.concat(e.slice(0, o + 1)) },
            }),
          null
        )
  );
}
function Qg(e) {
  return Hg(e.context);
}
function Fn(e) {
  _t(!1);
}
function Gg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Cn.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Fo() && _t(!1);
  let l = Gh(t),
    u = C.exports.useMemo(
      () => ({ basename: l, navigator: i, static: a }),
      [l, i, a]
    );
  typeof r == "string" && (r = In(r));
  let {
      pathname: s = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: p = "default",
    } = r,
    v = C.exports.useMemo(() => {
      let g = Qh(s, l);
      return g == null
        ? null
        : { pathname: g, search: c, hash: d, state: f, key: p };
    }, [l, s, c, d, f, p]);
  return v == null
    ? null
    : C.exports.createElement(
        pc.Provider,
        { value: u },
        C.exports.createElement(vc.Provider, {
          children: n,
          value: { location: v, navigationType: o },
        })
      );
}
function Yg(e) {
  let { children: t, location: n } = e;
  return Wg(Yu(t), n);
}
function Yu(e) {
  let t = [];
  return (
    C.exports.Children.forEach(e, (n) => {
      if (!C.exports.isValidElement(n)) return;
      if (n.type === C.exports.Fragment) {
        t.push.apply(t, Yu(n.props.children));
        return;
      }
      n.type !== Fn && _t(!1);
      let r = {
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        index: n.props.index,
        path: n.props.path,
      };
      n.props.children && (r.children = Yu(n.props.children)), t.push(r);
    }),
    t
  );
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xu() {
  return (
    (Xu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Xu.apply(this, arguments)
  );
}
function Xg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Zg = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function Jg(e) {
  let { basename: t, children: n, window: r } = e,
    o = C.exports.useRef();
  o.current == null && (o.current = wg({ window: r }));
  let i = o.current,
    [a, l] = C.exports.useState({ action: i.action, location: i.location });
  return (
    C.exports.useLayoutEffect(() => i.listen(l), [i]),
    C.exports.createElement(Gg, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function qg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Fl = C.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      reloadDocument: o,
      replace: i = !1,
      state: a,
      target: l,
      to: u,
    } = t,
    s = Xg(t, Zg),
    c = bg(u),
    d = e2(u, { replace: i, state: a, target: l });
  function f(p) {
    r && r(p), !p.defaultPrevented && !o && d(p);
  }
  return C.exports.createElement(
    "a",
    Xu({}, s, { href: c, onClick: f, ref: n, target: l })
  );
});
function e2(e, t) {
  let { target: n, replace: r, state: o } = t === void 0 ? {} : t,
    i = Ug(),
    a = Va(),
    l = Yh(e);
  return C.exports.useCallback(
    (u) => {
      if (u.button === 0 && (!n || n === "_self") && !qg(u)) {
        u.preventDefault();
        let s = !!r || Gu(a) === Gu(l);
        i(e, { replace: s, state: o });
      }
    },
    [a, i, l, r, o, n, e]
  );
}
var Xh = { exports: {} },
  Zh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mr = C.exports;
function t2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var n2 = typeof Object.is == "function" ? Object.is : t2,
  r2 = mr.useState,
  o2 = mr.useEffect,
  i2 = mr.useLayoutEffect,
  a2 = mr.useDebugValue;
function l2(e, t) {
  var n = t(),
    r = r2({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    i2(
      function () {
        (o.value = n), (o.getSnapshot = t), $l(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    o2(
      function () {
        return (
          $l(o) && i({ inst: o }),
          e(function () {
            $l(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    a2(n),
    n
  );
}
function $l(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !n2(e, n);
  } catch {
    return !0;
  }
}
function u2(e, t) {
  return t();
}
var s2 =
  typeof window == "undefined" ||
  typeof window.document == "undefined" ||
  typeof window.document.createElement == "undefined"
    ? u2
    : l2;
Zh.useSyncExternalStore =
  mr.useSyncExternalStore !== void 0 ? mr.useSyncExternalStore : s2;
Xh.exports = Zh;
var Jh = { exports: {} },
  qh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Da = C.exports,
  c2 = Xh.exports;
function f2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var d2 = typeof Object.is == "function" ? Object.is : f2,
  p2 = c2.useSyncExternalStore,
  v2 = Da.useRef,
  h2 = Da.useEffect,
  m2 = Da.useMemo,
  y2 = Da.useDebugValue;
qh.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = v2(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = m2(
    function () {
      function u(p) {
        if (!s) {
          if (((s = !0), (c = p), (p = r(p)), o !== void 0 && a.hasValue)) {
            var v = a.value;
            if (o(v, p)) return (d = v);
          }
          return (d = p);
        }
        if (((v = d), d2(c, p))) return v;
        var g = r(p);
        return o !== void 0 && o(v, g) ? v : ((c = p), (d = g));
      }
      var s = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        f === null
          ? void 0
          : function () {
              return u(f());
            },
      ];
    },
    [t, n, r, o]
  );
  var l = p2(e, i[0], i[1]);
  return (
    h2(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l]
    ),
    y2(l),
    l
  );
};
Jh.exports = qh;
function g2(e) {
  e();
}
let em = g2;
const S2 = (e) => (em = e),
  w2 = () => em,
  fn = ft.createContext(null);
function tm() {
  return C.exports.useContext(fn);
}
const x2 = () => {
  throw new Error("uSES not initialized!");
};
let nm = x2;
const E2 = (e) => {
    nm = e;
  },
  P2 = (e, t) => e === t;
function C2(e = fn) {
  const t = e === fn ? tm : () => C.exports.useContext(e);
  return function (r, o = P2) {
    const { store: i, subscription: a, getServerState: l } = t(),
      u = nm(a.addNestedSub, i.getState, l || i.getState, r, o);
    return C.exports.useDebugValue(u), u;
  };
}
const Pr = C2();
var rm = { exports: {} },
  H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var me = typeof Symbol == "function" && Symbol.for,
  hc = me ? Symbol.for("react.element") : 60103,
  mc = me ? Symbol.for("react.portal") : 60106,
  Ia = me ? Symbol.for("react.fragment") : 60107,
  ja = me ? Symbol.for("react.strict_mode") : 60108,
  za = me ? Symbol.for("react.profiler") : 60114,
  Fa = me ? Symbol.for("react.provider") : 60109,
  $a = me ? Symbol.for("react.context") : 60110,
  yc = me ? Symbol.for("react.async_mode") : 60111,
  ba = me ? Symbol.for("react.concurrent_mode") : 60111,
  Ua = me ? Symbol.for("react.forward_ref") : 60112,
  Ba = me ? Symbol.for("react.suspense") : 60113,
  _2 = me ? Symbol.for("react.suspense_list") : 60120,
  Ha = me ? Symbol.for("react.memo") : 60115,
  Wa = me ? Symbol.for("react.lazy") : 60116,
  T2 = me ? Symbol.for("react.block") : 60121,
  k2 = me ? Symbol.for("react.fundamental") : 60117,
  O2 = me ? Symbol.for("react.responder") : 60118,
  R2 = me ? Symbol.for("react.scope") : 60119;
function Ke(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hc:
        switch (((e = e.type), e)) {
          case yc:
          case ba:
          case Ia:
          case za:
          case ja:
          case Ba:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case $a:
              case Ua:
              case Wa:
              case Ha:
              case Fa:
                return e;
              default:
                return t;
            }
        }
      case mc:
        return t;
    }
  }
}
function om(e) {
  return Ke(e) === ba;
}
H.AsyncMode = yc;
H.ConcurrentMode = ba;
H.ContextConsumer = $a;
H.ContextProvider = Fa;
H.Element = hc;
H.ForwardRef = Ua;
H.Fragment = Ia;
H.Lazy = Wa;
H.Memo = Ha;
H.Portal = mc;
H.Profiler = za;
H.StrictMode = ja;
H.Suspense = Ba;
H.isAsyncMode = function (e) {
  return om(e) || Ke(e) === yc;
};
H.isConcurrentMode = om;
H.isContextConsumer = function (e) {
  return Ke(e) === $a;
};
H.isContextProvider = function (e) {
  return Ke(e) === Fa;
};
H.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === hc;
};
H.isForwardRef = function (e) {
  return Ke(e) === Ua;
};
H.isFragment = function (e) {
  return Ke(e) === Ia;
};
H.isLazy = function (e) {
  return Ke(e) === Wa;
};
H.isMemo = function (e) {
  return Ke(e) === Ha;
};
H.isPortal = function (e) {
  return Ke(e) === mc;
};
H.isProfiler = function (e) {
  return Ke(e) === za;
};
H.isStrictMode = function (e) {
  return Ke(e) === ja;
};
H.isSuspense = function (e) {
  return Ke(e) === Ba;
};
H.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ia ||
    e === ba ||
    e === za ||
    e === ja ||
    e === Ba ||
    e === _2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Wa ||
        e.$$typeof === Ha ||
        e.$$typeof === Fa ||
        e.$$typeof === $a ||
        e.$$typeof === Ua ||
        e.$$typeof === k2 ||
        e.$$typeof === O2 ||
        e.$$typeof === R2 ||
        e.$$typeof === T2))
  );
};
H.typeOf = Ke;
rm.exports = H;
var im = rm.exports,
  M2 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  L2 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  am = {};
am[im.ForwardRef] = M2;
am[im.Memo] = L2;
var Q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gc = Symbol.for("react.element"),
  Sc = Symbol.for("react.portal"),
  Ka = Symbol.for("react.fragment"),
  Qa = Symbol.for("react.strict_mode"),
  Ga = Symbol.for("react.profiler"),
  Ya = Symbol.for("react.provider"),
  Xa = Symbol.for("react.context"),
  N2 = Symbol.for("react.server_context"),
  Za = Symbol.for("react.forward_ref"),
  Ja = Symbol.for("react.suspense"),
  qa = Symbol.for("react.suspense_list"),
  el = Symbol.for("react.memo"),
  tl = Symbol.for("react.lazy"),
  A2 = Symbol.for("react.offscreen"),
  lm;
lm = Symbol.for("react.module.reference");
function tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gc:
        switch (((e = e.type), e)) {
          case Ka:
          case Ga:
          case Qa:
          case Ja:
          case qa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case N2:
              case Xa:
              case Za:
              case tl:
              case el:
              case Ya:
                return e;
              default:
                return t;
            }
        }
      case Sc:
        return t;
    }
  }
}
Q.ContextConsumer = Xa;
Q.ContextProvider = Ya;
Q.Element = gc;
Q.ForwardRef = Za;
Q.Fragment = Ka;
Q.Lazy = tl;
Q.Memo = el;
Q.Portal = Sc;
Q.Profiler = Ga;
Q.StrictMode = Qa;
Q.Suspense = Ja;
Q.SuspenseList = qa;
Q.isAsyncMode = function () {
  return !1;
};
Q.isConcurrentMode = function () {
  return !1;
};
Q.isContextConsumer = function (e) {
  return tt(e) === Xa;
};
Q.isContextProvider = function (e) {
  return tt(e) === Ya;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === gc;
};
Q.isForwardRef = function (e) {
  return tt(e) === Za;
};
Q.isFragment = function (e) {
  return tt(e) === Ka;
};
Q.isLazy = function (e) {
  return tt(e) === tl;
};
Q.isMemo = function (e) {
  return tt(e) === el;
};
Q.isPortal = function (e) {
  return tt(e) === Sc;
};
Q.isProfiler = function (e) {
  return tt(e) === Ga;
};
Q.isStrictMode = function (e) {
  return tt(e) === Qa;
};
Q.isSuspense = function (e) {
  return tt(e) === Ja;
};
Q.isSuspenseList = function (e) {
  return tt(e) === qa;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ka ||
    e === Ga ||
    e === Qa ||
    e === Ja ||
    e === qa ||
    e === A2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === tl ||
        e.$$typeof === el ||
        e.$$typeof === Ya ||
        e.$$typeof === Xa ||
        e.$$typeof === Za ||
        e.$$typeof === lm ||
        e.getModuleId !== void 0))
  );
};
Q.typeOf = tt;
function V2() {
  const e = w2();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const md = { notify() {}, get: () => [] };
function D2(e, t) {
  let n,
    r = md;
  function o(d) {
    return u(), r.subscribe(d);
  }
  function i() {
    r.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return Boolean(n);
  }
  function u() {
    n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = V2()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = md));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const I2 =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  j2 = I2 ? C.exports.useLayoutEffect : C.exports.useEffect;
var nl = { exports: {} },
  rl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z2 = C.exports,
  F2 = Symbol.for("react.element"),
  $2 = Symbol.for("react.fragment"),
  b2 = Object.prototype.hasOwnProperty,
  U2 = z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function um(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) b2.call(t, r) && !B2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: F2,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: U2.current,
  };
}
rl.Fragment = $2;
rl.jsx = um;
rl.jsxs = um;
nl.exports = rl;
const T = nl.exports.jsx,
  he = nl.exports.jsxs,
  sm = nl.exports.Fragment;
function H2({ store: e, context: t, children: n, serverState: r }) {
  const o = C.exports.useMemo(() => {
      const l = D2(e);
      return {
        store: e,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    i = C.exports.useMemo(() => e.getState(), [e]);
  return (
    j2(() => {
      const { subscription: l } = o;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        i !== e.getState() && l.notifyNestedSubs(),
        () => {
          l.tryUnsubscribe(), (l.onStateChange = void 0);
        }
      );
    }, [o, i]),
    T((t || fn).Provider, { value: o, children: n })
  );
}
function cm(e = fn) {
  const t = e === fn ? tm : () => C.exports.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const W2 = cm();
function K2(e = fn) {
  const t = e === fn ? W2 : cm(e);
  return function () {
    return t().dispatch;
  };
}
const fm = K2();
E2(Jh.exports.useSyncExternalStoreWithSelector);
S2(Ps.exports.unstable_batchedUpdates);
function st(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function dn(e) {
  return !!e && !!e[J];
}
function pn(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != "object") return !1;
      var n = Object.getPrototypeOf(t);
      if (n === null) return !0;
      var r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return (
        r === Object ||
        (typeof r == "function" && Function.toString.call(r) === t3)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Pd] ||
      !!e.constructor[Pd] ||
      wc(e) ||
      xc(e))
  );
}
function An(e, t, n) {
  n === void 0 && (n = !1),
    Cr(e) === 0
      ? (n ? Object.keys : lr)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function Cr(e) {
  var t = e[J];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : wc(e)
    ? 2
    : xc(e)
    ? 3
    : 0;
}
function ar(e, t) {
  return Cr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Q2(e, t) {
  return Cr(e) === 2 ? e.get(t) : e[t];
}
function dm(e, t, n) {
  var r = Cr(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function pm(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function wc(e) {
  return q2 && e instanceof Map;
}
function xc(e) {
  return e3 && e instanceof Set;
}
function xn(e) {
  return e.o || e.t;
}
function Ec(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = hm(e);
  delete t[J];
  for (var n = lr(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Pc(e, t) {
  return (
    t === void 0 && (t = !1),
    Cc(e) ||
      dn(e) ||
      !pn(e) ||
      (Cr(e) > 1 && (e.set = e.add = e.clear = e.delete = G2),
      Object.freeze(e),
      t &&
        An(
          e,
          function (n, r) {
            return Pc(r, !0);
          },
          !0
        )),
    e
  );
}
function G2() {
  st(2);
}
function Cc(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function xt(e) {
  var t = es[e];
  return t || st(18, e), t;
}
function Y2(e, t) {
  es[e] || (es[e] = t);
}
function Zu() {
  return Eo;
}
function bl(e, t) {
  t && (xt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function na(e) {
  Ju(e), e.p.forEach(X2), (e.p = null);
}
function Ju(e) {
  e === Eo && (Eo = e.l);
}
function yd(e) {
  return (Eo = { p: [], l: Eo, h: e, m: !0, _: 0 });
}
function X2(e) {
  var t = e[J];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function Ul(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || xt("ES5").S(t, e, r),
    r
      ? (n[J].P && (na(t), st(4)),
        pn(e) && ((e = ra(t, e)), t.l || oa(t, e)),
        t.u && xt("Patches").M(n[J].t, e, t.u, t.s))
      : (e = ra(t, n, [])),
    na(t),
    t.u && t.v(t.u, t.s),
    e !== vm ? e : void 0
  );
}
function ra(e, t, n) {
  if (Cc(t)) return t;
  var r = t[J];
  if (!r)
    return (
      An(
        t,
        function (i, a) {
          return gd(e, r, t, i, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return oa(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = Ec(r.k)) : r.o;
    An(r.i === 3 ? new Set(o) : o, function (i, a) {
      return gd(e, r, o, i, a, n);
    }),
      oa(e, o, !1),
      n && e.u && xt("Patches").R(r, n, e.u, e.s);
  }
  return r.o;
}
function gd(e, t, n, r, o, i) {
  if (dn(o)) {
    var a = ra(e, o, i && t && t.i !== 3 && !ar(t.D, r) ? i.concat(r) : void 0);
    if ((dm(n, r, a), !dn(a))) return;
    e.m = !1;
  }
  if (pn(o) && !Cc(o)) {
    if (!e.h.F && e._ < 1) return;
    ra(e, o), (t && t.A.l) || oa(e, o);
  }
}
function oa(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Pc(t, n);
}
function Bl(e, t) {
  var n = e[J];
  return (n ? xn(n) : e)[t];
}
function Sd(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Gt(e) {
  e.P || ((e.P = !0), e.l && Gt(e.l));
}
function Hl(e) {
  e.o || (e.o = Ec(e.t));
}
function qu(e, t, n) {
  var r = wc(t)
    ? xt("MapSet").N(t, n)
    : xc(t)
    ? xt("MapSet").T(t, n)
    : e.g
    ? (function (o, i) {
        var a = Array.isArray(o),
          l = {
            i: a ? 1 : 0,
            A: i ? i.A : Zu(),
            P: !1,
            I: !1,
            D: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          u = l,
          s = Po;
        a && ((u = [l]), (s = br));
        var c = Proxy.revocable(u, s),
          d = c.revoke,
          f = c.proxy;
        return (l.k = f), (l.j = d), f;
      })(t, n)
    : xt("ES5").J(t, n);
  return (n ? n.A : Zu()).p.push(r), r;
}
function Z2(e) {
  return (
    dn(e) || st(22, e),
    (function t(n) {
      if (!pn(n)) return n;
      var r,
        o = n[J],
        i = Cr(n);
      if (o) {
        if (!o.P && (o.i < 4 || !xt("ES5").K(o))) return o.t;
        (o.I = !0), (r = wd(n, i)), (o.I = !1);
      } else r = wd(n, i);
      return (
        An(r, function (a, l) {
          (o && Q2(o.t, a) === l) || dm(r, a, t(l));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function wd(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Ec(e);
}
function J2() {
  function e(i, a) {
    var l = o[i];
    return (
      l
        ? (l.enumerable = a)
        : (o[i] = l =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var u = this[J];
                return Po.get(u, i);
              },
              set: function (u) {
                var s = this[J];
                Po.set(s, i, u);
              },
            }),
      l
    );
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var l = i[a][J];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && Gt(l);
            break;
          case 4:
            n(l) && Gt(l);
        }
    }
  }
  function n(i) {
    for (var a = i.t, l = i.k, u = lr(l), s = u.length - 1; s >= 0; s--) {
      var c = u[s];
      if (c !== J) {
        var d = a[c];
        if (d === void 0 && !ar(a, c)) return !0;
        var f = l[c],
          p = f && f[J];
        if (p ? p.t !== d : !pm(f, d)) return !0;
      }
    }
    var v = !!a[J];
    return u.length !== lr(a).length + (v ? 0 : 1);
  }
  function r(i) {
    var a = i.k;
    if (a.length !== i.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (l && !l.get) return !0;
    for (var u = 0; u < a.length; u++) if (!a.hasOwnProperty(u)) return !0;
    return !1;
  }
  var o = {};
  Y2("ES5", {
    J: function (i, a) {
      var l = Array.isArray(i),
        u = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), p = 0; p < d.length; p++)
              Object.defineProperty(f, "" + p, e(p, !0));
            return f;
          }
          var v = hm(d);
          delete v[J];
          for (var g = lr(v), w = 0; w < g.length; w++) {
            var m = g[w];
            v[m] = e(m, c || !!v[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), v);
        })(l, i),
        s = {
          i: l ? 5 : 4,
          A: a ? a.A : Zu(),
          P: !1,
          I: !1,
          D: {},
          l: a,
          t: i,
          k: u,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(u, J, { value: s, writable: !0 }), u;
    },
    S: function (i, a, l) {
      l
        ? dn(a) && a[J].A === i && t(i.p)
        : (i.u &&
            (function u(s) {
              if (s && typeof s == "object") {
                var c = s[J];
                if (c) {
                  var d = c.t,
                    f = c.k,
                    p = c.D,
                    v = c.i;
                  if (v === 4)
                    An(f, function (y) {
                      y !== J &&
                        (d[y] !== void 0 || ar(d, y)
                          ? p[y] || u(f[y])
                          : ((p[y] = !0), Gt(c)));
                    }),
                      An(d, function (y) {
                        f[y] !== void 0 || ar(f, y) || ((p[y] = !1), Gt(c));
                      });
                  else if (v === 5) {
                    if ((r(c) && (Gt(c), (p.length = !0)), f.length < d.length))
                      for (var g = f.length; g < d.length; g++) p[g] = !1;
                    else for (var w = d.length; w < f.length; w++) p[w] = !0;
                    for (
                      var m = Math.min(f.length, d.length), h = 0;
                      h < m;
                      h++
                    )
                      f.hasOwnProperty(h) || (p[h] = !0),
                        p[h] === void 0 && u(f[h]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
var xd,
  Eo,
  _c = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol",
  q2 = typeof Map != "undefined",
  e3 = typeof Set != "undefined",
  Ed =
    typeof Proxy != "undefined" &&
    Proxy.revocable !== void 0 &&
    typeof Reflect != "undefined",
  vm = _c
    ? Symbol.for("immer-nothing")
    : (((xd = {})["immer-nothing"] = !0), xd),
  Pd = _c ? Symbol.for("immer-draftable") : "__$immer_draftable",
  J = _c ? Symbol.for("immer-state") : "__$immer_state",
  t3 = "" + Object.prototype.constructor,
  lr =
    typeof Reflect != "undefined" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  hm =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        lr(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  es = {},
  Po = {
    get: function (e, t) {
      if (t === J) return e;
      var n = xn(e);
      if (!ar(n, t))
        return (function (o, i, a) {
          var l,
            u = Sd(i, a);
          return u
            ? "value" in u
              ? u.value
              : (l = u.get) === null || l === void 0
              ? void 0
              : l.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !pn(r)
        ? r
        : r === Bl(e.t, t)
        ? (Hl(e), (e.o[t] = qu(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in xn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(xn(e));
    },
    set: function (e, t, n) {
      var r = Sd(xn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = Bl(xn(e), t),
          i = o == null ? void 0 : o[J];
        if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (pm(n, o) && (n !== void 0 || ar(e.t, t))) return !0;
        Hl(e), Gt(e);
      }
      return (
        (e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Bl(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Hl(e), Gt(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = xn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      st(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      st(12);
    },
  },
  br = {};
An(Po, function (e, t) {
  br[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (br.deleteProperty = function (e, t) {
    return br.set.call(this, e, t, void 0);
  }),
  (br.set = function (e, t, n) {
    return Po.set.call(this, e[0], t, n, e[0]);
  });
var n3 = (function () {
    function e(n) {
      var r = this;
      (this.g = Ed),
        (this.F = !0),
        (this.produce = function (o, i, a) {
          if (typeof o == "function" && typeof i != "function") {
            var l = i;
            i = o;
            var u = r;
            return function (g) {
              var w = this;
              g === void 0 && (g = l);
              for (
                var m = arguments.length, h = Array(m > 1 ? m - 1 : 0), y = 1;
                y < m;
                y++
              )
                h[y - 1] = arguments[y];
              return u.produce(g, function (S) {
                var x;
                return (x = i).call.apply(x, [w, S].concat(h));
              });
            };
          }
          var s;
          if (
            (typeof i != "function" && st(6),
            a !== void 0 && typeof a != "function" && st(7),
            pn(o))
          ) {
            var c = yd(r),
              d = qu(r, o, void 0),
              f = !0;
            try {
              (s = i(d)), (f = !1);
            } finally {
              f ? na(c) : Ju(c);
            }
            return typeof Promise != "undefined" && s instanceof Promise
              ? s.then(
                  function (g) {
                    return bl(c, a), Ul(g, c);
                  },
                  function (g) {
                    throw (na(c), g);
                  }
                )
              : (bl(c, a), Ul(s, c));
          }
          if (!o || typeof o != "object") {
            if (
              ((s = i(o)) === void 0 && (s = o),
              s === vm && (s = void 0),
              r.F && Pc(s, !0),
              a)
            ) {
              var p = [],
                v = [];
              xt("Patches").M(o, s, p, v), a(p, v);
            }
            return s;
          }
          st(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == "function")
            return function (s) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1;
                f < c;
                f++
              )
                d[f - 1] = arguments[f];
              return r.produceWithPatches(s, function (p) {
                return o.apply(void 0, [p].concat(d));
              });
            };
          var a,
            l,
            u = r.produce(o, i, function (s, c) {
              (a = s), (l = c);
            });
          return typeof Promise != "undefined" && u instanceof Promise
            ? u.then(function (s) {
                return [s, a, l];
              })
            : [u, a, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        pn(n) || st(8), dn(n) && (n = Z2(n));
        var r = yd(this),
          o = qu(this, n, void 0);
        return (o[J].C = !0), Ju(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[J],
          i = o.A;
        return bl(i, r), Ul(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Ed && st(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var a = xt("Patches").$;
        return dn(n)
          ? a(n, r)
          : this.produce(n, function (l) {
              return a(l, r);
            });
      }),
      e
    );
  })(),
  Be = new n3(),
  r3 = Be.produce;
Be.produceWithPatches.bind(Be);
Be.setAutoFreeze.bind(Be);
Be.setUseProxies.bind(Be);
Be.applyPatches.bind(Be);
Be.createDraft.bind(Be);
Be.finishDraft.bind(Be);
var Ti = r3;
function o3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Cd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cd(Object(n), !0).forEach(function (r) {
          o3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Cd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ce(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Td = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Wl = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  ia = {
    INIT: "@@redux/INIT" + Wl(),
    REPLACE: "@@redux/REPLACE" + Wl(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Wl();
    },
  };
function i3(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function mm(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ce(0));
  if (
    (typeof t == "function" &&
      typeof n == "undefined" &&
      ((n = t), (t = void 0)),
    typeof n != "undefined")
  ) {
    if (typeof n != "function") throw new Error(Ce(1));
    return n(mm)(e, t);
  }
  if (typeof e != "function") throw new Error(Ce(2));
  var o = e,
    i = t,
    a = [],
    l = a,
    u = !1;
  function s() {
    l === a && (l = a.slice());
  }
  function c() {
    if (u) throw new Error(Ce(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function") throw new Error(Ce(4));
    if (u) throw new Error(Ce(5));
    var w = !0;
    return (
      s(),
      l.push(g),
      function () {
        if (!!w) {
          if (u) throw new Error(Ce(6));
          (w = !1), s();
          var h = l.indexOf(g);
          l.splice(h, 1), (a = null);
        }
      }
    );
  }
  function f(g) {
    if (!i3(g)) throw new Error(Ce(7));
    if (typeof g.type == "undefined") throw new Error(Ce(8));
    if (u) throw new Error(Ce(9));
    try {
      (u = !0), (i = o(i, g));
    } finally {
      u = !1;
    }
    for (var w = (a = l), m = 0; m < w.length; m++) {
      var h = w[m];
      h();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function") throw new Error(Ce(10));
    (o = g), f({ type: ia.REPLACE });
  }
  function v() {
    var g,
      w = d;
    return (
      (g = {
        subscribe: function (h) {
          if (typeof h != "object" || h === null) throw new Error(Ce(11));
          function y() {
            h.next && h.next(c());
          }
          y();
          var S = w(y);
          return { unsubscribe: S };
        },
      }),
      (g[Td] = function () {
        return this;
      }),
      g
    );
  }
  return (
    f({ type: ia.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: p }),
    (r[Td] = v),
    r
  );
}
function a3(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: ia.INIT });
    if (typeof r == "undefined") throw new Error(Ce(12));
    if (typeof n(void 0, { type: ia.PROBE_UNKNOWN_ACTION() }) == "undefined")
      throw new Error(Ce(13));
  });
}
function l3(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    a;
  try {
    a3(n);
  } catch (l) {
    a = l;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), a)) throw a;
    for (var c = !1, d = {}, f = 0; f < i.length; f++) {
      var p = i[f],
        v = n[p],
        g = u[p],
        w = v(g, s);
      if (typeof w == "undefined") throw (s && s.type, new Error(Ce(14)));
      (d[p] = w), (c = c || w !== g);
    }
    return (c = c || i.length !== Object.keys(u).length), c ? d : u;
  };
}
function aa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function u3() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Ce(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        l = t.map(function (u) {
          return u(a);
        });
      return (
        (i = aa.apply(void 0, l)(o.dispatch)),
        _d(_d({}, o), {}, { dispatch: i })
      );
    };
  };
}
function ym(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (a) {
      return function (l) {
        return typeof l == "function" ? l(o, i, e) : a(l);
      };
    };
  };
  return t;
}
var gm = ym();
gm.withExtraArgument = ym;
var kd = gm,
  s3 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })();
globalThis && globalThis.__generator;
var la =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  c3 = Object.defineProperty,
  Od = Object.getOwnPropertySymbols,
  f3 = Object.prototype.hasOwnProperty,
  d3 = Object.prototype.propertyIsEnumerable,
  Rd = function (e, t, n) {
    return t in e
      ? c3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Co = function (e, t) {
    for (var n in t || (t = {})) f3.call(t, n) && Rd(e, n, t[n]);
    if (Od)
      for (var r = 0, o = Od(t); r < o.length; r++) {
        var n = o[r];
        d3.call(t, n) && Rd(e, n, t[n]);
      }
    return e;
  },
  p3 =
    typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? aa
              : aa.apply(null, arguments);
        };
function v3(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var h3 = (function (e) {
  s3(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var o = e.apply(this, n) || this;
    return Object.setPrototypeOf(o, t.prototype), o;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, la([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, la([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function m3(e) {
  return typeof e == "boolean";
}
function y3() {
  return function (t) {
    return g3(t);
  };
}
function g3(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new h3();
  return (
    n && (m3(n) ? r.push(kd) : r.push(kd.withExtraArgument(n.extraArgument))), r
  );
}
var S3 = !0;
function w3(e) {
  var t = y3(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    a = i === void 0 ? t() : i,
    l = n.devTools,
    u = l === void 0 ? !0 : l,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    d = n.enhancers,
    f = d === void 0 ? void 0 : d,
    p;
  if (typeof o == "function") p = o;
  else if (v3(o)) p = l3(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = a;
  typeof v == "function" && (v = v(t));
  var g = u3.apply(void 0, v),
    w = aa;
  u && (w = p3(Co({ trace: !S3 }, typeof u == "object" && u)));
  var m = [g];
  Array.isArray(f) ? (m = la([g], f)) : typeof f == "function" && (m = f(m));
  var h = w.apply(void 0, m);
  return mm(p, c, h);
}
function _o(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error("prepareAction did not return an object");
      return Co(
        Co({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Sm(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, a) {
        var l = typeof i == "string" ? i : i.type;
        if (l in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[l] = a), o;
      },
      addMatcher: function (i, a) {
        return n.push({ matcher: i, reducer: a }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function x3(e) {
  return typeof e == "function";
}
function E3(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? Sm(t) : [t, n, r],
    i = o[0],
    a = o[1],
    l = o[2],
    u;
  if (x3(e))
    u = function () {
      return Ti(e(), function () {});
    };
  else {
    var s = Ti(e, function () {});
    u = function () {
      return s;
    };
  }
  function c(d, f) {
    d === void 0 && (d = u());
    var p = la(
      [i[f.type]],
      a
        .filter(function (v) {
          var g = v.matcher;
          return g(f);
        })
        .map(function (v) {
          var g = v.reducer;
          return g;
        })
    );
    return (
      p.filter(function (v) {
        return !!v;
      }).length === 0 && (p = [l]),
      p.reduce(function (v, g) {
        if (g)
          if (dn(v)) {
            var w = v,
              m = g(w, f);
            return typeof m == "undefined" ? v : m;
          } else {
            if (pn(v))
              return Ti(v, function (h) {
                return g(h, f);
              });
            var m = g(v, f);
            if (typeof m == "undefined") {
              if (v === null) return v;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return m;
          }
        return v;
      }, d)
    );
  }
  return (c.getInitialState = u), c;
}
function P3(e, t) {
  return e + "/" + t;
}
function C3(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  var n =
      typeof e.initialState == "function"
        ? e.initialState
        : Ti(e.initialState, function () {}),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    a = {},
    l = {};
  o.forEach(function (c) {
    var d = r[c],
      f = P3(t, c),
      p,
      v;
    "reducer" in d ? ((p = d.reducer), (v = d.prepare)) : (p = d),
      (i[c] = p),
      (a[f] = p),
      (l[c] = v ? _o(f, v) : _o(f));
  });
  function u() {
    var c =
        typeof e.extraReducers == "function"
          ? Sm(e.extraReducers)
          : [e.extraReducers],
      d = c[0],
      f = d === void 0 ? {} : d,
      p = c[1],
      v = p === void 0 ? [] : p,
      g = c[2],
      w = g === void 0 ? void 0 : g,
      m = Co(Co({}, f), a);
    return E3(n, m, v, w);
  }
  var s;
  return {
    name: t,
    reducer: function (c, d) {
      return s || (s = u()), s(c, d);
    },
    actions: l,
    caseReducers: i,
    getInitialState: function () {
      return s || (s = u()), s.getInitialState();
    },
  };
}
var Tc = "listenerMiddleware";
_o(Tc + "/add");
_o(Tc + "/removeAll");
_o(Tc + "/remove");
J2();
const _3 = { value: !0 },
  wm = C3({
    name: "theme",
    initialState: _3,
    reducers: {
      changeTheme: (e) => {
        e.value = !e.value;
      },
      changeThemeLight: (e) => {
        e.value = !0;
      },
      changeThemeDark: (e) => {
        e.value = !1;
      },
    },
  }),
  { changeTheme: T3, changeThemeLight: k3, changeThemeDark: O3 } = wm.actions;
var R3 = wm.reducer,
  xm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  yr = ft.createContext && ft.createContext(xm),
  ln =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ln =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        ln.apply(this, arguments)
      );
    },
  M3 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function Em(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ft.createElement(t.tag, ln({ key: n }, t.attr), Em(t.child));
    })
  );
}
function Ne(e) {
  return function (t) {
    return ft.createElement(L3, ln({ attr: ln({}, e.attr) }, t), Em(e.child));
  };
}
function L3(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      a = M3(e, ["attr", "size", "title"]),
      l = o || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      ft.createElement(
        "svg",
        ln(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: u,
            style: ln(ln({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ft.createElement("title", null, i),
        e.children
      )
    );
  };
  return yr !== void 0
    ? ft.createElement(yr.Consumer, null, function (n) {
        return t(n);
      })
    : t(xm);
}
function N3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z",
        },
      },
    ],
  })(e);
}
function A3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z",
        },
      },
    ],
  })(e);
}
function V3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function D3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        },
      },
    ],
  })(e);
}
function I3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z",
        },
      },
    ],
  })(e);
}
function j3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
      },
    ],
  })(e);
}
function z3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function F3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        },
      },
    ],
  })(e);
}
function $3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
function b3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        },
      },
    ],
  })(e);
}
function U3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z",
        },
      },
    ],
  })(e);
}
function B3(e) {
  return Ne({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z",
        },
      },
    ],
  })(e);
}
const H3 = () => {
  const e = fm(),
    t = Pr((r) => r.theme.value),
    n = () => {
      e(T3()), localStorage.setItem("theme", t ? "dark" : "light");
    };
  return T("nav", {
    className: "navbar",
    children: he("ul", {
      className: t ? "navbar__list" : "navbar__list dark",
      children: [
        T("li", {
          className: "navbar__list-item",
          children: T(Fl, {
            to: "/proyectos",
            className: t
              ? "navbar__list-item__link"
              : "navbar__list-item__link dark",
            children: "Proyectos",
          }),
        }),
        T("li", {
          className: "navbar__list-item",
          children: T(Fl, {
            to: "/sobre-mi",
            className: t
              ? "navbar__list-item__link"
              : "navbar__list-item__link dark",
            children: "Sobre m\xED",
          }),
        }),
        T("li", {
          className: "navbar__list-item",
          children: T(Fl, {
            to: "/contacto",
            className: t
              ? "navbar__list-item__link"
              : "navbar__list-item__link dark",
            children: "Contacto",
          }),
        }),
        T(yr.Provider, {
          value: { size: "1rem", className: "themeIcon" },
          children: T("button", {
            className: t ? "theme__btn btn2" : "theme__btn btn2 dark",
            onClick: n,
            children: t ? T(U3, {}) : T(B3, {}),
          }),
        }),
      ],
    }),
  });
};
var W3 = "/assets/profileImage.a8c150d6.jpg";
const K3 = () => {
  const e = Pr((t) => t.theme.value);
  return T(sm, {
    children: he("article", {
      className: e ? "profile" : "profile dark",
      children: [
        T("img", {
          src: W3,
          alt: "Profile image",
          className: "profile__image",
        }),
        T("h1", {
          className: e ? "profile__title" : "profile__title dark",
          children: "Kevin Flores",
        }),
        T("h2", {
          className: "profile__desc",
          children: "FULLSTACK DEVELOPER",
        }),
        T("button", {
          className: "btn",
          children: T("a", {
            href: "../file/CURRICULUM.pdf",
            download: !0,
            className: "profile__cv",
            children: "Descargar CV",
          }),
        }),
        T("div", {
          className: "profile__socialMedias",
          children: he(yr.Provider, {
            value: {
              size: "1.5rem",
              className: `${e ? "profileIcons" : "profileIcons dark"}`,
            },
            children: [
              T("a", {
                href: "https://www.linkedin.com/in/kevinnahuelf/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: e ? "profile__link" : "profile__link dark",
                children: T(j3, {}),
              }),
              T("a", {
                href: "https://github.com/zycness",
                target: "_blank",
                rel: "noopener noreferrer",
                className: e ? "profile__link" : "profile__link dark",
                children: T(V3, {}),
              }),
              T("a", {
                href: "https://wa.me/541138084961",
                target: "_blank",
                rel: "noopener noreferrer",
                className: e ? "profile__link" : "profile__link dark",
                children: T(b3, {}),
              }),
              T("a", {
                href: "https://twitter.com/Codelearner13",
                target: "_blank",
                rel: "noopener noreferrer",
                className: e ? "profile__link" : "profile__link dark",
                children: T($3, {}),
              }),
            ],
          }),
        }),
        he("div", {
          className: "profile__about",
          children: [
            T("h3", {
              className: e
                ? "profile__about-title"
                : "profile__about-title dark",
              children: "Sobre m\xED",
            }),
            T("p", {
              className: e ? "profile__about-desc" : "profile__about-desc dark",
              children:
                "Soy un joven muy apasionado por el desarrollo web, en b\xFAsqueda de nuevos desaf\xEDos, super\xE1ndose d\xEDa a d\xEDa con perseverancia, capacidad y motivaci\xF3n. Puedo comunicar de manera eficiente los problemas y dar su resoluci\xF3n de una forma l\xF3gica entablando una conversaci\xF3n c\xE1lida.",
            }),
          ],
        }),
      ],
    }),
  });
};
function Q3() {
  const e = fm(),
    t = Pr((o) => o.theme.value),
    [n, r] = C.exports.useState(!0);
  return (
    C.exports.useEffect(() => {
      const o = localStorage.getItem("theme");
      o.toString() == "dark" ? e(O3()) : o.toString() == "light" && e(k3()),
        r(!!t);
    }, [t]),
    T(sm, {
      children: he(yr.Provider, {
        value: { size: "1.5rem", className: "footer_icon" },
        children: [
          he("main", {
            className: n ? "App" : "App dark",
            children: [
              T("section", { className: "App__profile", children: T(K3, {}) }),
              he("section", {
                className: "App__content",
                children: [T(H3, {}), T(Qg, {})],
              }),
            ],
          }),
          T("footer", {
            id: "footer",
            children: he("h5", {
              className: "footer_title",
              children: [
                "HECHO POR",
                " ",
                he("a", {
                  href: "https://www.linkedin.com/in/kevinnahuelf/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "footer_link",
                  children: ["KEVIN FLORES", T(z3, {})],
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function G3(e) {
  return Ne({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      { tag: "path", attr: { d: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" } },
    ],
  })(e);
}
function Y3(e) {
  return Ne({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z",
        },
      },
    ],
  })(e);
}
function X3(e) {
  return Ne({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z",
        },
      },
    ],
  })(e);
}
var Z3 = [
  T(F3, {}),
  T(N3, {}),
  T(D3, {}),
  T(I3, {}),
  T(X3, {}),
  T(Y3, {}),
  T(G3, {}),
  T(A3, {}),
];
const J3 = [
  { title: "REACT.JS", subTech: ["HOOKS", "REACT HEAD (SEO)"] },
  {
    title: "CSS3",
    subTech: [
      "DISE\xD1O RESPONSIVO",
      "FLEXBOX",
      "GRID",
      "MEDIA QUERIES",
      "DISE\xD1O MODERNO",
    ],
  },
  {
    title: "HTML5",
    subTech: ["SEO", "C\xD3DIGO SEM\xC1NTICO", "CRUCE ENTRE PLATAFORMAS"],
  },
  {
    title: "JAVASCRIPT",
    subTech: ["BUENAS PR\xC1CTICAS", "ASINCRONISMO", "FETCH API", "POO"],
  },
  { title: "REDUX@TOOLKIT", subTech: ["STORE", "SLICES", "REDUCERS", "HOOKS"] },
  { title: "REACT ROUTER V6", subTech: ["ROUTES", "ROUTE", "LINK", "HOOKS"] },
  {
    title: "FRAMER MOTION",
    subTech: ["ANIMACIONES", "HOOKS", "TRANSICIONES", "VARIANTES"],
  },
  {
    title: "GIT",
    subTech: [
      "CONTROL DE PAQUETES",
      "GESTIONAMIENTO",
      "CONTROL DE VERSIONES",
      "RAMAS",
    ],
  },
];
var q3 = { tecnologias: J3 };
var ts = function (e, t) {
  return (
    (ts =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    ts(e, t)
  );
};
function Pm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  ts(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var O = function () {
  return (
    (O =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    O.apply(this, arguments)
  );
};
function nt(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function pe(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    o,
    i = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function Et(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var e4 = "production",
  Cm =
    typeof process == "undefined" || process.env === void 0 ? e4 : "production",
  Tt = function (e) {
    return {
      isEnabled: function (t) {
        return e.some(function (n) {
          return !!t[n];
        });
      },
    };
  },
  To = {
    measureLayout: Tt(["layout", "layoutId", "drag"]),
    animation: Tt([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
      "whileInView",
    ]),
    exit: Tt(["exit"]),
    drag: Tt(["drag", "dragControls"]),
    focus: Tt(["whileFocus"]),
    hover: Tt(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: Tt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: Tt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    inView: Tt(["whileInView", "onViewportEnter", "onViewportLeave"]),
  };
function t4(e) {
  for (var t in e)
    e[t] !== null &&
      (t === "projectionNodeConstructor"
        ? (To.projectionNodeConstructor = e[t])
        : (To[t].Component = e[t]));
}
var n4 = function () {},
  ua = function () {},
  _m = C.exports.createContext({ strict: !1 }),
  Tm = Object.keys(To),
  r4 = Tm.length;
function o4(e, t, n) {
  var r = [],
    o = C.exports.useContext(_m);
  if (!t) return null;
  Cm !== "production" && n && o.strict;
  for (var i = 0; i < r4; i++) {
    var a = Tm[i],
      l = To[a],
      u = l.isEnabled,
      s = l.Component;
    u(e) &&
      s &&
      r.push(
        C.exports.createElement(s, O({ key: a }, e, { visualElement: t }))
      );
  }
  return r;
}
var kc = C.exports.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    isStatic: !1,
    reducedMotion: "never",
  }),
  ol = C.exports.createContext({});
function i4() {
  return C.exports.useContext(ol).visualElement;
}
var il = C.exports.createContext(null),
  _r = typeof document != "undefined",
  Md = _r ? C.exports.useLayoutEffect : C.exports.useEffect,
  ns = { current: null },
  km = !1;
function a4() {
  if (((km = !0), !!_r))
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"),
        t = function () {
          return (ns.current = e.matches);
        };
      e.addListener(t), t();
    } else ns.current = !1;
}
function l4() {
  !km && a4();
  var e = pe(C.exports.useState(ns.current), 1),
    t = e[0];
  return t;
}
function u4() {
  var e = l4(),
    t = C.exports.useContext(kc).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function s4(e, t, n, r) {
  var o = C.exports.useContext(_m),
    i = i4(),
    a = C.exports.useContext(il),
    l = u4(),
    u = C.exports.useRef(void 0);
  r || (r = o.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceId: a == null ? void 0 : a.id,
        blockInitialAnimation: (a == null ? void 0 : a.initial) === !1,
        shouldReduceMotion: l,
      }));
  var s = u.current;
  return (
    Md(function () {
      s == null || s.syncRender();
    }),
    C.exports.useEffect(function () {
      var c;
      (c = s == null ? void 0 : s.animationState) === null ||
        c === void 0 ||
        c.animateChanges();
    }),
    Md(function () {
      return function () {
        return s == null ? void 0 : s.notifyUnmount();
      };
    }, []),
    s
  );
}
function Jn(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function c4(e, t, n) {
  return C.exports.useCallback(
    function (r) {
      var o;
      r && ((o = e.mount) === null || o === void 0 || o.call(e, r)),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Jn(n) && (n.current = r));
    },
    [t]
  );
}
function Om(e) {
  return Array.isArray(e);
}
function lt(e) {
  return typeof e == "string" || Om(e);
}
function f4(e) {
  var t = {};
  return (
    e.forEachValue(function (n, r) {
      return (t[r] = n.get());
    }),
    t
  );
}
function d4(e) {
  var t = {};
  return (
    e.forEachValue(function (n, r) {
      return (t[r] = n.getVelocity());
    }),
    t
  );
}
function Rm(e, t, n, r, o) {
  var i;
  return (
    r === void 0 && (r = {}),
    o === void 0 && (o = {}),
    typeof t == "function" && (t = t(n != null ? n : e.custom, r, o)),
    typeof t == "string" &&
      (t = (i = e.variants) === null || i === void 0 ? void 0 : i[t]),
    typeof t == "function" && (t = t(n != null ? n : e.custom, r, o)),
    t
  );
}
function al(e, t, n) {
  var r = e.getProps();
  return Rm(r, t, n != null ? n : r.custom, f4(e), d4(e));
}
function ll(e) {
  var t;
  return (
    typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) ==
      "function" ||
    lt(e.initial) ||
    lt(e.animate) ||
    lt(e.whileHover) ||
    lt(e.whileDrag) ||
    lt(e.whileTap) ||
    lt(e.whileFocus) ||
    lt(e.exit)
  );
}
function Mm(e) {
  return Boolean(ll(e) || e.variants);
}
function p4(e, t) {
  if (ll(e)) {
    var n = e.initial,
      r = e.animate;
    return {
      initial: n === !1 || lt(n) ? n : void 0,
      animate: lt(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function v4(e) {
  var t = p4(e, C.exports.useContext(ol)),
    n = t.initial,
    r = t.animate;
  return C.exports.useMemo(
    function () {
      return { initial: n, animate: r };
    },
    [Ld(n), Ld(r)]
  );
}
function Ld(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function ul(e) {
  var t = C.exports.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
var Zr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  h4 = 1;
function m4() {
  return ul(function () {
    if (Zr.hasEverUpdated) return h4++;
  });
}
var Lm = C.exports.createContext({}),
  Nm = C.exports.createContext({});
function y4(e, t, n, r) {
  var o,
    i = t.layoutId,
    a = t.layout,
    l = t.drag,
    u = t.dragConstraints,
    s = t.layoutScroll,
    c = C.exports.useContext(Nm);
  !r ||
    !n ||
    (n == null ? void 0 : n.projection) ||
    ((n.projection = new r(
      e,
      n.getLatestValues(),
      (o = n.parent) === null || o === void 0 ? void 0 : o.projection
    )),
    n.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: Boolean(l) || (u && Jn(u)),
      visualElement: n,
      scheduleRender: function () {
        return n.scheduleRender();
      },
      animationType: typeof a == "string" ? a : "both",
      initialPromotionConfig: c,
      layoutScroll: s,
    }));
}
var g4 = (function (e) {
  Pm(t, e);
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.getSnapshotBeforeUpdate = function () {
      return this.updateProps(), null;
    }),
    (t.prototype.componentDidUpdate = function () {}),
    (t.prototype.updateProps = function () {
      var n = this.props,
        r = n.visualElement,
        o = n.props;
      r && r.setProps(o);
    }),
    (t.prototype.render = function () {
      return this.props.children;
    }),
    t
  );
})(ft.Component);
function S4(e) {
  var t = e.preloadedFeatures,
    n = e.createVisualElement,
    r = e.projectionNodeConstructor,
    o = e.useRender,
    i = e.useVisualState,
    a = e.Component;
  t && t4(t);
  function l(u, s) {
    var c = w4(u);
    u = O(O({}, u), { layoutId: c });
    var d = C.exports.useContext(kc),
      f = null,
      p = v4(u),
      v = d.isStatic ? void 0 : m4(),
      g = i(u, d.isStatic);
    return (
      !d.isStatic &&
        _r &&
        ((p.visualElement = s4(a, g, O(O({}, d), u), n)),
        y4(v, u, p.visualElement, r || To.projectionNodeConstructor),
        (f = o4(u, p.visualElement, t))),
      C.exports.createElement(
        g4,
        { visualElement: p.visualElement, props: O(O({}, d), u) },
        f,
        C.exports.createElement(
          ol.Provider,
          { value: p },
          o(a, u, v, c4(g, p.visualElement, s), g, d.isStatic, p.visualElement)
        )
      )
    );
  }
  return C.exports.forwardRef(l);
}
function w4(e) {
  var t,
    n = e.layoutId,
    r = (t = C.exports.useContext(Lm)) === null || t === void 0 ? void 0 : t.id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function x4(e) {
  function t(r, o) {
    return o === void 0 && (o = {}), S4(e(r, o));
  }
  if (typeof Proxy == "undefined") return t;
  var n = new Map();
  return new Proxy(t, {
    get: function (r, o) {
      return n.has(o) || n.set(o, t(o)), n.get(o);
    },
  });
}
var E4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view",
];
function Oc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(E4.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var sa = {};
function P4(e) {
  Object.assign(sa, e);
}
var rs = ["", "X", "Y", "Z"],
  C4 = ["translate", "scale", "rotate", "skew"],
  ko = ["transformPerspective", "x", "y", "z"];
C4.forEach(function (e) {
  return rs.forEach(function (t) {
    return ko.push(e + t);
  });
});
function _4(e, t) {
  return ko.indexOf(e) - ko.indexOf(t);
}
var T4 = new Set(ko);
function $o(e) {
  return T4.has(e);
}
var k4 = new Set(["originX", "originY", "originZ"]);
function Am(e) {
  return k4.has(e);
}
function Vm(e, t) {
  var n = t.layout,
    r = t.layoutId;
  return (
    $o(e) || Am(e) || ((n || r !== void 0) && (!!sa[e] || e === "opacity"))
  );
}
var It = function (e) {
    return Boolean(e !== null && typeof e == "object" && e.getVelocity);
  },
  O4 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  };
function R4(e, t, n, r) {
  var o = e.transform,
    i = e.transformKeys,
    a = t.enableHardwareAcceleration,
    l = a === void 0 ? !0 : a,
    u = t.allowTransformNone,
    s = u === void 0 ? !0 : u,
    c = "";
  i.sort(_4);
  for (var d = !1, f = i.length, p = 0; p < f; p++) {
    var v = i[p];
    (c += "".concat(O4[v] || v, "(").concat(o[v], ") ")), v === "z" && (d = !0);
  }
  return (
    !d && l ? (c += "translateZ(0)") : (c = c.trim()),
    r ? (c = r(o, n ? "" : c)) : s && n && (c = "none"),
    c
  );
}
function M4(e) {
  var t = e.originX,
    n = t === void 0 ? "50%" : t,
    r = e.originY,
    o = r === void 0 ? "50%" : r,
    i = e.originZ,
    a = i === void 0 ? 0 : i;
  return "".concat(n, " ").concat(o, " ").concat(a);
}
function Dm(e) {
  return e.startsWith("--");
}
var L4 = function (e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
const Im = (e, t) => (n) => Math.max(Math.min(n, t), e),
  Jr = (e) => (e % 1 ? Number(e.toFixed(5)) : e),
  Oo = /(-)?([\d]*\.?[\d])+/g,
  os =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  N4 =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function bo(e) {
  return typeof e == "string";
}
const jn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  qr = Object.assign(Object.assign({}, jn), { transform: Im(0, 1) }),
  si = Object.assign(Object.assign({}, jn), { default: 1 }),
  Uo = (e) => ({
    test: (t) => bo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  bt = Uo("deg"),
  Pt = Uo("%"),
  D = Uo("px"),
  A4 = Uo("vh"),
  V4 = Uo("vw"),
  Nd = Object.assign(Object.assign({}, Pt), {
    parse: (e) => Pt.parse(e) / 100,
    transform: (e) => Pt.transform(e * 100),
  }),
  Rc = (e, t) => (n) =>
    Boolean(
      (bo(n) && N4.test(n) && n.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  jm = (e, t, n) => (r) => {
    if (!bo(r)) return r;
    const [o, i, a, l] = r.match(Oo);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  _n = {
    test: Rc("hsl", "hue"),
    parse: jm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Pt.transform(Jr(t)) +
      ", " +
      Pt.transform(Jr(n)) +
      ", " +
      Jr(qr.transform(r)) +
      ")",
  },
  D4 = Im(0, 255),
  Kl = Object.assign(Object.assign({}, jn), {
    transform: (e) => Math.round(D4(e)),
  }),
  Zt = {
    test: Rc("rgb", "red"),
    parse: jm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Kl.transform(e) +
      ", " +
      Kl.transform(t) +
      ", " +
      Kl.transform(n) +
      ", " +
      Jr(qr.transform(r)) +
      ")",
  };
function I4(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)),
        (n = e.substr(3, 2)),
        (r = e.substr(5, 2)),
        (o = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (n = e.substr(2, 1)),
        (r = e.substr(3, 1)),
        (o = e.substr(4, 1)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const is = { test: Rc("#"), parse: I4, transform: Zt.transform },
  ke = {
    test: (e) => Zt.test(e) || is.test(e) || _n.test(e),
    parse: (e) =>
      Zt.test(e) ? Zt.parse(e) : _n.test(e) ? _n.parse(e) : is.parse(e),
    transform: (e) =>
      bo(e) ? e : e.hasOwnProperty("red") ? Zt.transform(e) : _n.transform(e),
  },
  zm = "${c}",
  Fm = "${n}";
function j4(e) {
  var t, n, r, o;
  return (
    isNaN(e) &&
    bo(e) &&
    ((n = (t = e.match(Oo)) === null || t === void 0 ? void 0 : t.length) !==
      null && n !== void 0
      ? n
      : 0) +
      ((o = (r = e.match(os)) === null || r === void 0 ? void 0 : r.length) !==
        null && o !== void 0
        ? o
        : 0) >
      0
  );
}
function $m(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0;
  const r = e.match(os);
  r && ((n = r.length), (e = e.replace(os, zm)), t.push(...r.map(ke.parse)));
  const o = e.match(Oo);
  return (
    o && ((e = e.replace(Oo, Fm)), t.push(...o.map(jn.parse))),
    { values: t, numColors: n, tokenised: e }
  );
}
function bm(e) {
  return $m(e).values;
}
function Um(e) {
  const { values: t, numColors: n, tokenised: r } = $m(e),
    o = t.length;
  return (i) => {
    let a = r;
    for (let l = 0; l < o; l++)
      a = a.replace(l < n ? zm : Fm, l < n ? ke.transform(i[l]) : Jr(i[l]));
    return a;
  };
}
const z4 = (e) => (typeof e == "number" ? 0 : e);
function F4(e) {
  const t = bm(e);
  return Um(e)(t.map(z4));
}
const jt = {
    test: j4,
    parse: bm,
    createTransformer: Um,
    getAnimatableNone: F4,
  },
  $4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function b4(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Oo) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = $4.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const U4 = /([a-z-]*)\(.*?\)/g,
  as = Object.assign(Object.assign({}, jt), {
    getAnimatableNone: (e) => {
      const t = e.match(U4);
      return t ? t.map(b4).join(" ") : e;
    },
  });
var Ad = O(O({}, jn), { transform: Math.round }),
  Bm = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: bt,
    rotateX: bt,
    rotateY: bt,
    rotateZ: bt,
    scale: si,
    scaleX: si,
    scaleY: si,
    scaleZ: si,
    skew: bt,
    skewX: bt,
    skewY: bt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: qr,
    originX: Nd,
    originY: Nd,
    originZ: D,
    zIndex: Ad,
    fillOpacity: qr,
    strokeOpacity: qr,
    numOctaves: Ad,
  };
function Mc(e, t, n, r) {
  var o,
    i = e.style,
    a = e.vars,
    l = e.transform,
    u = e.transformKeys,
    s = e.transformOrigin;
  u.length = 0;
  var c = !1,
    d = !1,
    f = !0;
  for (var p in t) {
    var v = t[p];
    if (Dm(p)) {
      a[p] = v;
      continue;
    }
    var g = Bm[p],
      w = L4(v, g);
    if ($o(p)) {
      if (((c = !0), (l[p] = w), u.push(p), !f)) continue;
      v !== ((o = g.default) !== null && o !== void 0 ? o : 0) && (f = !1);
    } else Am(p) ? ((s[p] = w), (d = !0)) : (i[p] = w);
  }
  c
    ? (i.transform = R4(e, n, f, r))
    : r
    ? (i.transform = r({}, ""))
    : !t.transform && i.transform && (i.transform = "none"),
    d && (i.transformOrigin = M4(s));
}
var Lc = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function Hm(e, t, n) {
  for (var r in t) !It(t[r]) && !Vm(r, n) && (e[r] = t[r]);
}
function B4(e, t, n) {
  var r = e.transformTemplate;
  return C.exports.useMemo(
    function () {
      var o = Lc();
      Mc(o, t, { enableHardwareAcceleration: !n }, r);
      var i = o.vars,
        a = o.style;
      return O(O({}, i), a);
    },
    [t]
  );
}
function H4(e, t, n) {
  var r = e.style || {},
    o = {};
  return (
    Hm(o, r, e),
    Object.assign(o, B4(e, t, n)),
    e.transformValues && (o = e.transformValues(o)),
    o
  );
}
function W4(e, t, n) {
  var r = {},
    o = H4(e, t, n);
  return (
    Boolean(e.drag) &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x"))),
    (r.style = o),
    r
  );
}
var K4 = new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll",
]);
function ca(e) {
  return K4.has(e);
}
var Wm = function (e) {
  return !ca(e);
};
function Q4(e) {
  !e ||
    (Wm = function (t) {
      return t.startsWith("on") ? !ca(t) : e(t);
    });
}
try {
  Q4(require("@emotion/is-prop-valid").default);
} catch {}
function G4(e, t, n) {
  var r = {};
  for (var o in e)
    (Wm(o) ||
      (n === !0 && ca(o)) ||
      (!t && !ca(o)) ||
      (e.draggable && o.startsWith("onDrag"))) &&
      (r[o] = e[o]);
  return r;
}
function Vd(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function Y4(e, t, n) {
  var r = Vd(t, e.x, e.width),
    o = Vd(n, e.y, e.height);
  return "".concat(r, " ").concat(o);
}
var X4 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Z4 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function J4(e, t, n, r, o) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 0),
    o === void 0 && (o = !0),
    (e.pathLength = 1);
  var i = o ? X4 : Z4;
  e[i.offset] = D.transform(-r);
  var a = D.transform(t),
    l = D.transform(n);
  e[i.array] = "".concat(a, " ").concat(l);
}
function Nc(e, t, n, r) {
  var o = t.attrX,
    i = t.attrY,
    a = t.originX,
    l = t.originY,
    u = t.pathLength,
    s = t.pathSpacing,
    c = s === void 0 ? 1 : s,
    d = t.pathOffset,
    f = d === void 0 ? 0 : d,
    p = nt(t, [
      "attrX",
      "attrY",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  Mc(e, p, n, r), (e.attrs = e.style), (e.style = {});
  var v = e.attrs,
    g = e.style,
    w = e.dimensions;
  v.transform && (w && (g.transform = v.transform), delete v.transform),
    w &&
      (a !== void 0 || l !== void 0 || g.transform) &&
      (g.transformOrigin = Y4(
        w,
        a !== void 0 ? a : 0.5,
        l !== void 0 ? l : 0.5
      )),
    o !== void 0 && (v.x = o),
    i !== void 0 && (v.y = i),
    u !== void 0 && J4(v, u, c, f, !1);
}
var Km = function () {
  return O(O({}, Lc()), { attrs: {} });
};
function q4(e, t) {
  var n = C.exports.useMemo(
    function () {
      var o = Km();
      return (
        Nc(o, t, { enableHardwareAcceleration: !1 }, e.transformTemplate),
        O(O({}, o.attrs), { style: O({}, o.style) })
      );
    },
    [t]
  );
  if (e.style) {
    var r = {};
    Hm(r, e.style, e), (n.style = O(O({}, r), n.style));
  }
  return n;
}
function eS(e) {
  e === void 0 && (e = !1);
  var t = function (n, r, o, i, a, l) {
    var u = a.latestValues,
      s = Oc(n) ? q4 : W4,
      c = s(r, u, l),
      d = G4(r, typeof n == "string", e),
      f = O(O(O({}, d), c), { ref: i });
    return o && (f["data-projection-id"] = o), C.exports.createElement(n, f);
  };
  return t;
}
var tS = /([a-z])([A-Z])/g,
  nS = "$1-$2",
  Qm = function (e) {
    return e.replace(tS, nS).toLowerCase();
  };
function Gm(e, t, n, r) {
  var o = t.style,
    i = t.vars;
  Object.assign(e.style, o, r && r.getProjectionStyles(n));
  for (var a in i) e.style.setProperty(a, i[a]);
}
var Ym = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
]);
function Xm(e, t, n, r) {
  Gm(e, t, void 0, r);
  for (var o in t.attrs) e.setAttribute(Ym.has(o) ? o : Qm(o), t.attrs[o]);
}
function Ac(e) {
  var t = e.style,
    n = {};
  for (var r in t) (It(t[r]) || Vm(r, e)) && (n[r] = t[r]);
  return n;
}
function Zm(e) {
  var t = Ac(e);
  for (var n in e)
    if (It(e[n])) {
      var r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function Vc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var Ro = function (e) {
    return Array.isArray(e);
  },
  rS = function (e) {
    return Boolean(e && typeof e == "object" && e.mix && e.toValue);
  },
  Jm = function (e) {
    return Ro(e) ? e[e.length - 1] || 0 : e;
  };
function ki(e) {
  var t = It(e) ? e.get() : e;
  return rS(t) ? t.toValue() : t;
}
function Dd(e, t, n, r) {
  var o = e.scrapeMotionValuesFromProps,
    i = e.createRenderState,
    a = e.onMount,
    l = { latestValues: oS(t, n, r, o), renderState: i() };
  return (
    a &&
      (l.mount = function (u) {
        return a(t, u, l);
      }),
    l
  );
}
var qm = function (e) {
  return function (t, n) {
    var r = C.exports.useContext(ol),
      o = C.exports.useContext(il);
    return n
      ? Dd(e, t, r, o)
      : ul(function () {
          return Dd(e, t, r, o);
        });
  };
};
function oS(e, t, n, r) {
  var o = {},
    i = (n == null ? void 0 : n.initial) === !1,
    a = r(e);
  for (var l in a) o[l] = ki(a[l]);
  var u = e.initial,
    s = e.animate,
    c = ll(e),
    d = Mm(e);
  t &&
    d &&
    !c &&
    e.inherit !== !1 &&
    (u != null || (u = t.initial), s != null || (s = t.animate));
  var f = i || u === !1,
    p = f ? s : u;
  if (p && typeof p != "boolean" && !Vc(p)) {
    var v = Array.isArray(p) ? p : [p];
    v.forEach(function (g) {
      var w = Rm(e, g);
      if (!!w) {
        var m = w.transitionEnd;
        w.transition;
        var h = nt(w, ["transitionEnd", "transition"]);
        for (var y in h) {
          var S = h[y];
          if (Array.isArray(S)) {
            var x = f ? S.length - 1 : 0;
            S = S[x];
          }
          S !== null && (o[y] = S);
        }
        for (var y in m) o[y] = m[y];
      }
    });
  }
  return o;
}
var iS = {
    useVisualState: qm({
      scrapeMotionValuesFromProps: Zm,
      createRenderState: Km,
      onMount: function (e, t, n) {
        var r = n.renderState,
          o = n.latestValues;
        try {
          r.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Nc(r, o, { enableHardwareAcceleration: !1 }, e.transformTemplate),
          Xm(t, r);
      },
    }),
  },
  aS = {
    useVisualState: qm({
      scrapeMotionValuesFromProps: Ac,
      createRenderState: Lc,
    }),
  };
function lS(e, t, n, r, o) {
  var i = t.forwardMotionProps,
    a = i === void 0 ? !1 : i,
    l = Oc(e) ? iS : aS;
  return O(O({}, l), {
    preloadedFeatures: n,
    useRender: eS(a),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: e,
  });
}
var G;
(function (e) {
  (e.Animate = "animate"),
    (e.Hover = "whileHover"),
    (e.Tap = "whileTap"),
    (e.Drag = "whileDrag"),
    (e.Focus = "whileFocus"),
    (e.InView = "whileInView"),
    (e.Exit = "exit");
})(G || (G = {}));
function sl(e, t, n, r) {
  return (
    r === void 0 && (r = { passive: !0 }),
    e.addEventListener(t, n, r),
    function () {
      return e.removeEventListener(t, n);
    }
  );
}
function ls(e, t, n, r) {
  C.exports.useEffect(
    function () {
      var o = e.current;
      if (n && o) return sl(o, t, n, r);
    },
    [e, t, n, r]
  );
}
function uS(e) {
  var t = e.whileFocus,
    n = e.visualElement,
    r = function () {
      var i;
      (i = n.animationState) === null ||
        i === void 0 ||
        i.setActive(G.Focus, !0);
    },
    o = function () {
      var i;
      (i = n.animationState) === null ||
        i === void 0 ||
        i.setActive(G.Focus, !1);
    };
  ls(n, "focus", t ? r : void 0), ls(n, "blur", t ? o : void 0);
}
function e0(e) {
  return typeof PointerEvent != "undefined" && e instanceof PointerEvent
    ? e.pointerType === "mouse"
    : e instanceof MouseEvent;
}
function t0(e) {
  var t = !!e.touches;
  return t;
}
function sS(e) {
  return function (t) {
    var n = t instanceof MouseEvent,
      r = !n || (n && t.button === 0);
    r && e(t);
  };
}
var cS = { pageX: 0, pageY: 0 };
function fS(e, t) {
  t === void 0 && (t = "page");
  var n = e.touches[0] || e.changedTouches[0],
    r = n || cS;
  return { x: r[t + "X"], y: r[t + "Y"] };
}
function dS(e, t) {
  return t === void 0 && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
}
function Dc(e, t) {
  return t === void 0 && (t = "page"), { point: t0(e) ? fS(e, t) : dS(e, t) };
}
var n0 = function (e, t) {
    t === void 0 && (t = !1);
    var n = function (r) {
      return e(r, Dc(r));
    };
    return t ? sS(n) : n;
  },
  pS = function () {
    return _r && window.onpointerdown === null;
  },
  vS = function () {
    return _r && window.ontouchstart === null;
  },
  hS = function () {
    return _r && window.onmousedown === null;
  },
  mS = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  yS = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function r0(e) {
  return pS() ? e : vS() ? yS[e] : hS() ? mS[e] : e;
}
function ur(e, t, n, r) {
  return sl(e, r0(t), n0(n, t === "pointerdown"), r);
}
function fa(e, t, n, r) {
  return ls(e, r0(t), n && n0(n, t === "pointerdown"), r);
}
function o0(e) {
  var t = null;
  return function () {
    var n = function () {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Id = o0("dragHorizontal"),
  jd = o0("dragVertical");
function i0(e) {
  var t = !1;
  if (e === "y") t = jd();
  else if (e === "x") t = Id();
  else {
    var n = Id(),
      r = jd();
    n && r
      ? (t = function () {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function a0() {
  var e = i0(!0);
  return e ? (e(), !1) : !0;
}
function zd(e, t, n) {
  return function (r, o) {
    var i;
    !e0(r) ||
      a0() ||
      ((i = e.animationState) === null ||
        i === void 0 ||
        i.setActive(G.Hover, t),
      n == null || n(r, o));
  };
}
function gS(e) {
  var t = e.onHoverStart,
    n = e.onHoverEnd,
    r = e.whileHover,
    o = e.visualElement;
  fa(o, "pointerenter", t || r ? zd(o, !0, t) : void 0, { passive: !t }),
    fa(o, "pointerleave", n || r ? zd(o, !1, n) : void 0, { passive: !n });
}
var l0 = function (e, t) {
  return t ? (e === t ? !0 : l0(e, t.parentElement)) : !1;
};
function u0(e) {
  return C.exports.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
const da = (e, t, n) => Math.min(Math.max(n, e), t),
  Ql = 0.001,
  SS = 0.01,
  Fd = 10,
  wS = 0.05,
  xS = 1;
function ES({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  n4(e <= Fd * 1e3);
  let a = 1 - t;
  (a = da(wS, xS, a)),
    (e = da(SS, Fd, e / 1e3)),
    a < 1
      ? ((o = (s) => {
          const c = s * a,
            d = c * e,
            f = c - n,
            p = us(s, a),
            v = Math.exp(-d);
          return Ql - (f / p) * v;
        }),
        (i = (s) => {
          const d = s * a * e,
            f = d * n + n,
            p = Math.pow(a, 2) * Math.pow(s, 2) * e,
            v = Math.exp(-d),
            g = us(Math.pow(s, 2), a);
          return ((-o(s) + Ql > 0 ? -1 : 1) * ((f - p) * v)) / g;
        }))
      : ((o = (s) => {
          const c = Math.exp(-s * e),
            d = (s - n) * e + 1;
          return -Ql + c * d;
        }),
        (i = (s) => {
          const c = Math.exp(-s * e),
            d = (n - s) * (e * e);
          return c * d;
        }));
  const l = 5 / e,
    u = CS(o, i, l);
  if (((e = e * 1e3), isNaN(u)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const s = Math.pow(u, 2) * r;
    return { stiffness: s, damping: a * 2 * Math.sqrt(r * s), duration: e };
  }
}
const PS = 12;
function CS(e, t, n) {
  let r = n;
  for (let o = 1; o < PS; o++) r = r - e(r) / t(r);
  return r;
}
function us(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const _S = ["duration", "bounce"],
  TS = ["stiffness", "damping", "mass"];
function $d(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function kS(e) {
  let t = Object.assign(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    e
  );
  if (!$d(e, TS) && $d(e, _S)) {
    const n = ES(e);
    (t = Object.assign(Object.assign(Object.assign({}, t), n), {
      velocity: 0,
      mass: 1,
    })),
      (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Ic(e) {
  var { from: t = 0, to: n = 1, restSpeed: r = 2, restDelta: o } = e,
    i = nt(e, ["from", "to", "restSpeed", "restDelta"]);
  const a = { done: !1, value: t };
  let {
      stiffness: l,
      damping: u,
      mass: s,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = kS(i),
    p = bd,
    v = bd;
  function g() {
    const w = c ? -(c / 1e3) : 0,
      m = n - t,
      h = u / (2 * Math.sqrt(l * s)),
      y = Math.sqrt(l / s) / 1e3;
    if ((o === void 0 && (o = Math.min(Math.abs(n - t) / 100, 0.4)), h < 1)) {
      const S = us(y, h);
      (p = (x) => {
        const _ = Math.exp(-h * y * x);
        return (
          n -
          _ * (((w + h * y * m) / S) * Math.sin(S * x) + m * Math.cos(S * x))
        );
      }),
        (v = (x) => {
          const _ = Math.exp(-h * y * x);
          return (
            h *
              y *
              _ *
              ((Math.sin(S * x) * (w + h * y * m)) / S + m * Math.cos(S * x)) -
            _ * (Math.cos(S * x) * (w + h * y * m) - S * m * Math.sin(S * x))
          );
        });
    } else if (h === 1) p = (S) => n - Math.exp(-y * S) * (m + (w + y * m) * S);
    else {
      const S = y * Math.sqrt(h * h - 1);
      p = (x) => {
        const _ = Math.exp(-h * y * x),
          E = Math.min(S * x, 300);
        return (
          n - (_ * ((w + h * y * m) * Math.sinh(E) + S * m * Math.cosh(E))) / S
        );
      };
    }
  }
  return (
    g(),
    {
      next: (w) => {
        const m = p(w);
        if (f) a.done = w >= d;
        else {
          const h = v(w) * 1e3,
            y = Math.abs(h) <= r,
            S = Math.abs(n - m) <= o;
          a.done = y && S;
        }
        return (a.value = a.done ? n : m), a;
      },
      flipTarget: () => {
        (c = -c), ([t, n] = [n, t]), g();
      },
    }
  );
}
Ic.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const bd = (e) => 0,
  Mo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ae = (e, t, n) => -n * e + n * t + e;
function Gl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Ud({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - l;
    (o = Gl(u, l, e + 1 / 3)), (i = Gl(u, l, e)), (a = Gl(u, l, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const OS = (e, t, n) => {
    const r = e * e,
      o = t * t;
    return Math.sqrt(Math.max(0, n * (o - r) + r));
  },
  RS = [is, Zt, _n],
  Bd = (e) => RS.find((t) => t.test(e)),
  s0 = (e, t) => {
    let n = Bd(e),
      r = Bd(t),
      o = n.parse(e),
      i = r.parse(t);
    n === _n && ((o = Ud(o)), (n = Zt)), r === _n && ((i = Ud(i)), (r = Zt));
    const a = Object.assign({}, o);
    return (l) => {
      for (const u in a) u !== "alpha" && (a[u] = OS(o[u], i[u], l));
      return (a.alpha = ae(o.alpha, i.alpha, l)), n.transform(a);
    };
  },
  ss = (e) => typeof e == "number",
  MS = (e, t) => (n) => t(e(n)),
  cl = (...e) => e.reduce(MS);
function c0(e, t) {
  return ss(e) ? (n) => ae(e, t, n) : ke.test(e) ? s0(e, t) : d0(e, t);
}
const f0 = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, a) => c0(i, t[a]));
    return (i) => {
      for (let a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  LS = (e, t) => {
    const n = Object.assign(Object.assign({}, e), t),
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = c0(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  };
function Hd(e) {
  const t = jt.parse(e),
    n = t.length;
  let r = 0,
    o = 0,
    i = 0;
  for (let a = 0; a < n; a++)
    r || typeof t[a] == "number" ? r++ : t[a].hue !== void 0 ? i++ : o++;
  return { parsed: t, numNumbers: r, numRGB: o, numHSL: i };
}
const d0 = (e, t) => {
    const n = jt.createTransformer(t),
      r = Hd(e),
      o = Hd(t);
    return r.numHSL === o.numHSL &&
      r.numRGB === o.numRGB &&
      r.numNumbers >= o.numNumbers
      ? cl(f0(r.parsed, o.parsed), n)
      : (a) => `${a > 0 ? t : e}`;
  },
  NS = (e, t) => (n) => ae(e, t, n);
function AS(e) {
  if (typeof e == "number") return NS;
  if (typeof e == "string") return ke.test(e) ? s0 : d0;
  if (Array.isArray(e)) return f0;
  if (typeof e == "object") return LS;
}
function VS(e, t, n) {
  const r = [],
    o = n || AS(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let l = o(e[a], e[a + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[a] : t;
      l = cl(u, l);
    }
    r.push(l);
  }
  return r;
}
function DS([e, t], [n]) {
  return (r) => n(Mo(e, t, r));
}
function IS(e, t) {
  const n = e.length,
    r = n - 1;
  return (o) => {
    let i = 0,
      a = !1;
    if ((o <= e[0] ? (a = !0) : o >= e[r] && ((i = r - 1), (a = !0)), !a)) {
      let u = 1;
      for (; u < n && !(e[u] > o || u === r); u++);
      i = u - 1;
    }
    const l = Mo(e[i], e[i + 1], o);
    return t[i](l);
  };
}
function p0(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  ua(i === t.length),
    ua(!r || !Array.isArray(r) || r.length === i - 1),
    e[0] > e[i - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
  const a = VS(t, r, o),
    l = i === 2 ? DS(e, a) : IS(e, a);
  return n ? (u) => l(da(e[0], e[i - 1], u)) : l;
}
const fl = (e) => (t) => 1 - e(1 - t),
  jc = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  jS = (e) => (t) => Math.pow(t, e),
  v0 = (e) => (t) => t * t * ((e + 1) * t - e),
  zS = (e) => {
    const t = v0(e);
    return (n) =>
      (n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
  },
  h0 = 1.525,
  FS = 4 / 11,
  $S = 8 / 11,
  bS = 9 / 10,
  zc = (e) => e,
  Fc = jS(2),
  US = fl(Fc),
  m0 = jc(Fc),
  y0 = (e) => 1 - Math.sin(Math.acos(e)),
  $c = fl(y0),
  BS = jc($c),
  bc = v0(h0),
  HS = fl(bc),
  WS = jc(bc),
  KS = zS(h0),
  QS = 4356 / 361,
  GS = 35442 / 1805,
  YS = 16061 / 1805,
  pa = (e) => {
    if (e === 1 || e === 0) return e;
    const t = e * e;
    return e < FS
      ? 7.5625 * t
      : e < $S
      ? 9.075 * t - 9.9 * e + 3.4
      : e < bS
      ? QS * t - GS * e + YS
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  XS = fl(pa),
  ZS = (e) => (e < 0.5 ? 0.5 * (1 - pa(1 - e * 2)) : 0.5 * pa(e * 2 - 1) + 0.5);
function JS(e, t) {
  return e.map(() => t || m0).splice(0, e.length - 1);
}
function qS(e) {
  const t = e.length;
  return e.map((n, r) => (r !== 0 ? r / (t - 1) : 0));
}
function ew(e, t) {
  return e.map((n) => n * t);
}
function Oi({ from: e = 0, to: t = 1, ease: n, offset: r, duration: o = 300 }) {
  const i = { done: !1, value: e },
    a = Array.isArray(t) ? t : [e, t],
    l = ew(r && r.length === a.length ? r : qS(a), o);
  function u() {
    return p0(l, a, { ease: Array.isArray(n) ? n : JS(a, n) });
  }
  let s = u();
  return {
    next: (c) => ((i.value = s(c)), (i.done = c >= o), i),
    flipTarget: () => {
      a.reverse(), (s = u());
    },
  };
}
function tw({
  velocity: e = 0,
  from: t = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: i,
}) {
  const a = { done: !1, value: t };
  let l = n * e;
  const u = t + l,
    s = i === void 0 ? u : i(u);
  return (
    s !== u && (l = s - t),
    {
      next: (c) => {
        const d = -l * Math.exp(-c / r);
        return (a.done = !(d > o || d < -o)), (a.value = a.done ? s : s + d), a;
      },
      flipTarget: () => {},
    }
  );
}
const Wd = { keyframes: Oi, spring: Ic, decay: tw };
function nw(e) {
  if (Array.isArray(e.to)) return Oi;
  if (Wd[e.type]) return Wd[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || (t.has("duration") && !t.has("dampingRatio"))
    ? Oi
    : t.has("dampingRatio") ||
      t.has("stiffness") ||
      t.has("mass") ||
      t.has("damping") ||
      t.has("restSpeed") ||
      t.has("restDelta")
    ? Ic
    : Oi;
}
const g0 = (1 / 60) * 1e3,
  rw =
    typeof performance != "undefined"
      ? () => performance.now()
      : () => Date.now(),
  S0 =
    typeof window != "undefined"
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(rw()), g0);
function ow(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    l = {
      schedule: (u, s = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return (
          s && a.add(u),
          f.indexOf(u) === -1 && (f.push(u), d && o && (r = t.length)),
          u
        );
      },
      cancel: (u) => {
        const s = n.indexOf(u);
        s !== -1 && n.splice(s, 1), a.delete(u);
      },
      process: (u) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let s = 0; s < r; s++) {
            const c = t[s];
            c(u), a.has(c) && (l.schedule(c), e());
          }
        (o = !1), i && ((i = !1), l.process(u));
      },
    };
  return l;
}
const iw = 40;
let cs = !0,
  Lo = !1,
  fs = !1;
const sr = { delta: 0, timestamp: 0 },
  Bo = ["read", "update", "preRender", "render", "postRender"],
  dl = Bo.reduce((e, t) => ((e[t] = ow(() => (Lo = !0))), e), {}),
  Ct = Bo.reduce((e, t) => {
    const n = dl[t];
    return (e[t] = (r, o = !1, i = !1) => (Lo || lw(), n.schedule(r, o, i))), e;
  }, {}),
  gr = Bo.reduce((e, t) => ((e[t] = dl[t].cancel), e), {}),
  Yl = Bo.reduce((e, t) => ((e[t] = () => dl[t].process(sr)), e), {}),
  aw = (e) => dl[e].process(sr),
  w0 = (e) => {
    (Lo = !1),
      (sr.delta = cs ? g0 : Math.max(Math.min(e - sr.timestamp, iw), 1)),
      (sr.timestamp = e),
      (fs = !0),
      Bo.forEach(aw),
      (fs = !1),
      Lo && ((cs = !1), S0(w0));
  },
  lw = () => {
    (Lo = !0), (cs = !0), fs || S0(w0);
  },
  va = () => sr;
function x0(e, t, n = 0) {
  return e - t - n;
}
function uw(e, t, n = 0, r = !0) {
  return r ? x0(t + -e, t, n) : t - (e - t) + n;
}
function sw(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const cw = (e) => {
  const t = ({ delta: n }) => e(n);
  return { start: () => Ct.update(t, !0), stop: () => gr.update(t) };
};
function E0(e) {
  var t,
    n,
    {
      from: r,
      autoplay: o = !0,
      driver: i = cw,
      elapsed: a = 0,
      repeat: l = 0,
      repeatType: u = "loop",
      repeatDelay: s = 0,
      onPlay: c,
      onStop: d,
      onComplete: f,
      onRepeat: p,
      onUpdate: v,
    } = e,
    g = nt(e, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]);
  let { to: w } = g,
    m,
    h = 0,
    y = g.duration,
    S,
    x = !1,
    _ = !0,
    E;
  const P = nw(g);
  !((n = (t = P).needsInterpolation) === null || n === void 0) &&
    n.call(t, r, w) &&
    ((E = p0([0, 100], [r, w], { clamp: !1 })), (r = 0), (w = 100));
  const R = P(Object.assign(Object.assign({}, g), { from: r, to: w }));
  function L() {
    h++,
      u === "reverse"
        ? ((_ = h % 2 === 0), (a = uw(a, y, s, _)))
        : ((a = x0(a, y, s)), u === "mirror" && R.flipTarget()),
      (x = !1),
      p && p();
  }
  function z() {
    m.stop(), f && f();
  }
  function W(ue) {
    if ((_ || (ue = -ue), (a += ue), !x)) {
      const Ae = R.next(Math.max(0, a));
      (S = Ae.value), E && (S = E(S)), (x = _ ? Ae.done : a <= 0);
    }
    v == null || v(S),
      x &&
        (h === 0 && (y != null || (y = a)),
        h < l ? sw(a, y, s, _) && L() : z());
  }
  function ee() {
    c == null || c(), (m = i(W)), m.start();
  }
  return (
    o && ee(),
    {
      stop: () => {
        d == null || d(), m.stop();
      },
    }
  );
}
function P0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function fw({
  from: e = 0,
  velocity: t = 0,
  min: n,
  max: r,
  power: o = 0.8,
  timeConstant: i = 750,
  bounceStiffness: a = 500,
  bounceDamping: l = 10,
  restDelta: u = 1,
  modifyTarget: s,
  driver: c,
  onUpdate: d,
  onComplete: f,
  onStop: p,
}) {
  let v;
  function g(y) {
    return (n !== void 0 && y < n) || (r !== void 0 && y > r);
  }
  function w(y) {
    return n === void 0
      ? r
      : r === void 0 || Math.abs(n - y) < Math.abs(r - y)
      ? n
      : r;
  }
  function m(y) {
    v == null || v.stop(),
      (v = E0(
        Object.assign(Object.assign({}, y), {
          driver: c,
          onUpdate: (S) => {
            var x;
            d == null || d(S),
              (x = y.onUpdate) === null || x === void 0 || x.call(y, S);
          },
          onComplete: f,
          onStop: p,
        })
      ));
  }
  function h(y) {
    m(
      Object.assign(
        { type: "spring", stiffness: a, damping: l, restDelta: u },
        y
      )
    );
  }
  if (g(e)) h({ from: e, velocity: t, to: w(e) });
  else {
    let y = o * t + e;
    typeof s != "undefined" && (y = s(y));
    const S = w(y),
      x = S === n ? -1 : 1;
    let _, E;
    const P = (R) => {
      (_ = E),
        (E = R),
        (t = P0(R - _, va().delta)),
        ((x === 1 && R > S) || (x === -1 && R < S)) &&
          h({ from: R, to: S, velocity: t });
    };
    m({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: i,
      power: o,
      restDelta: u,
      modifyTarget: s,
      onUpdate: g(y) ? P : void 0,
    });
  }
  return { stop: () => (v == null ? void 0 : v.stop()) };
}
const ds = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"),
  Kd = (e) => ds(e) && e.hasOwnProperty("z"),
  ci = (e, t) => Math.abs(e - t);
function C0(e, t) {
  if (ss(e) && ss(t)) return ci(e, t);
  if (ds(e) && ds(t)) {
    const n = ci(e.x, t.x),
      r = ci(e.y, t.y),
      o = Kd(e) && Kd(t) ? ci(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
  }
}
const _0 = (e, t) => 1 - 3 * t + 3 * e,
  T0 = (e, t) => 3 * t - 6 * e,
  k0 = (e) => 3 * e,
  ha = (e, t, n) => ((_0(t, n) * e + T0(t, n)) * e + k0(t)) * e,
  O0 = (e, t, n) => 3 * _0(t, n) * e * e + 2 * T0(t, n) * e + k0(t),
  dw = 1e-7,
  pw = 10;
function vw(e, t, n, r, o) {
  let i,
    a,
    l = 0;
  do (a = t + (n - t) / 2), (i = ha(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > dw && ++l < pw);
  return a;
}
const hw = 8,
  mw = 0.001;
function yw(e, t, n, r) {
  for (let o = 0; o < hw; ++o) {
    const i = O0(t, n, r);
    if (i === 0) return t;
    t -= (ha(t, n, r) - e) / i;
  }
  return t;
}
const Ri = 11,
  fi = 1 / (Ri - 1);
function gw(e, t, n, r) {
  if (e === t && n === r) return zc;
  const o = new Float32Array(Ri);
  for (let a = 0; a < Ri; ++a) o[a] = ha(a * fi, e, n);
  function i(a) {
    let l = 0,
      u = 1;
    const s = Ri - 1;
    for (; u !== s && o[u] <= a; ++u) l += fi;
    --u;
    const c = (a - o[u]) / (o[u + 1] - o[u]),
      d = l + c * fi,
      f = O0(d, e, n);
    return f >= mw ? yw(a, d, e, n) : f === 0 ? d : vw(a, l, l + fi, e, n);
  }
  return (a) => (a === 0 || a === 1 ? a : ha(i(a), t, r));
}
function Sw(e) {
  var t = e.onTap,
    n = e.onTapStart,
    r = e.onTapCancel,
    o = e.whileTap,
    i = e.visualElement,
    a = t || n || r || o,
    l = C.exports.useRef(!1),
    u = C.exports.useRef(null),
    s = { passive: !(n || t || r || v) };
  function c() {
    var g;
    (g = u.current) === null || g === void 0 || g.call(u), (u.current = null);
  }
  function d() {
    var g;
    return (
      c(),
      (l.current = !1),
      (g = i.animationState) === null || g === void 0 || g.setActive(G.Tap, !1),
      !a0()
    );
  }
  function f(g, w) {
    !d() ||
      (l0(i.getInstance(), g.target)
        ? t == null || t(g, w)
        : r == null || r(g, w));
  }
  function p(g, w) {
    !d() || r == null || r(g, w);
  }
  function v(g, w) {
    var m;
    c(),
      !l.current &&
        ((l.current = !0),
        (u.current = cl(
          ur(window, "pointerup", f, s),
          ur(window, "pointercancel", p, s)
        )),
        (m = i.animationState) === null ||
          m === void 0 ||
          m.setActive(G.Tap, !0),
        n == null || n(g, w));
  }
  fa(i, "pointerdown", a ? v : void 0, s), u0(c);
}
var Qd = new Set();
function ww(e, t, n) {
  e || Qd.has(t) || (console.warn(t), n && console.warn(n), Qd.add(t));
}
var ps = new WeakMap(),
  Xl = new WeakMap(),
  xw = function (e) {
    var t;
    (t = ps.get(e.target)) === null || t === void 0 || t(e);
  },
  Ew = function (e) {
    e.forEach(xw);
  };
function Pw(e) {
  var t = e.root,
    n = nt(e, ["root"]),
    r = t || document;
  Xl.has(r) || Xl.set(r, {});
  var o = Xl.get(r),
    i = JSON.stringify(n);
  return o[i] || (o[i] = new IntersectionObserver(Ew, O({ root: t }, n))), o[i];
}
function Cw(e, t, n) {
  var r = Pw(t);
  return (
    ps.set(e, n),
    r.observe(e),
    function () {
      ps.delete(e), r.unobserve(e);
    }
  );
}
function _w(e) {
  var t = e.visualElement,
    n = e.whileInView,
    r = e.onViewportEnter,
    o = e.onViewportLeave,
    i = e.viewport,
    a = i === void 0 ? {} : i,
    l = C.exports.useRef({ hasEnteredView: !1, isInView: !1 }),
    u = Boolean(n || r || o);
  a.once && l.current.hasEnteredView && (u = !1);
  var s = typeof IntersectionObserver == "undefined" ? Ow : kw;
  s(u, l.current, t, a);
}
var Tw = { some: 0, all: 1 };
function kw(e, t, n, r) {
  var o = r.root,
    i = r.margin,
    a = r.amount,
    l = a === void 0 ? "some" : a,
    u = r.once;
  C.exports.useEffect(
    function () {
      if (!!e) {
        var s = {
            root: o == null ? void 0 : o.current,
            rootMargin: i,
            threshold: typeof l == "number" ? l : Tw[l],
          },
          c = function (d) {
            var f,
              p = d.isIntersecting;
            if (
              t.isInView !== p &&
              ((t.isInView = p), !(u && !p && t.hasEnteredView))
            ) {
              p && (t.hasEnteredView = !0),
                (f = n.animationState) === null ||
                  f === void 0 ||
                  f.setActive(G.InView, p);
              var v = n.getProps(),
                g = p ? v.onViewportEnter : v.onViewportLeave;
              g == null || g(d);
            }
          };
        return Cw(n.getInstance(), s, c);
      }
    },
    [e, o, i, l]
  );
}
function Ow(e, t, n, r) {
  var o = r.fallback,
    i = o === void 0 ? !0 : o;
  C.exports.useEffect(
    function () {
      !e ||
        !i ||
        (Cm !== "production" &&
          ww(
            !1,
            "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
          ),
        requestAnimationFrame(function () {
          var a;
          t.hasEnteredView = !0;
          var l = n.getProps().onViewportEnter;
          l == null || l(null),
            (a = n.animationState) === null ||
              a === void 0 ||
              a.setActive(G.InView, !0);
        }));
    },
    [e]
  );
}
var Jt = function (e) {
    return function (t) {
      return e(t), null;
    };
  },
  Rw = { inView: Jt(_w), tap: Jt(Sw), focus: Jt(uS), hover: Jt(gS) },
  Mw = 0,
  Lw = function () {
    return Mw++;
  },
  Nw = function () {
    return ul(Lw);
  };
function R0() {
  var e = C.exports.useContext(il);
  if (e === null) return [!0, null];
  var t = e.isPresent,
    n = e.onExitComplete,
    r = e.register,
    o = Nw();
  C.exports.useEffect(function () {
    return r(o);
  }, []);
  var i = function () {
    return n == null ? void 0 : n(o);
  };
  return !t && n ? [!1, i] : [!0];
}
function M0(e, t) {
  if (!Array.isArray(t)) return !1;
  var n = t.length;
  if (n !== e.length) return !1;
  for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var ma = function (e) {
    return e * 1e3;
  },
  Aw = {
    linear: zc,
    easeIn: Fc,
    easeInOut: m0,
    easeOut: US,
    circIn: y0,
    circInOut: BS,
    circOut: $c,
    backIn: bc,
    backInOut: WS,
    backOut: HS,
    anticipate: KS,
    bounceIn: XS,
    bounceInOut: ZS,
    bounceOut: pa,
  },
  Gd = function (e) {
    if (Array.isArray(e)) {
      ua(e.length === 4);
      var t = pe(e, 4),
        n = t[0],
        r = t[1],
        o = t[2],
        i = t[3];
      return gw(n, r, o, i);
    } else if (typeof e == "string") return Aw[e];
    return e;
  },
  Vw = function (e) {
    return Array.isArray(e) && typeof e[0] != "number";
  },
  Yd = function (e, t) {
    return e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && jt.test(t) && !t.startsWith("url("))
        );
  },
  yn = function () {
    return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
  },
  di = function (e) {
    return {
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    };
  },
  Zl = function () {
    return { type: "keyframes", ease: "linear", duration: 0.3 };
  },
  Dw = function (e) {
    return { type: "keyframes", duration: 0.8, values: e };
  },
  Xd = {
    x: yn,
    y: yn,
    z: yn,
    rotate: yn,
    rotateX: yn,
    rotateY: yn,
    rotateZ: yn,
    scaleX: di,
    scaleY: di,
    scale: di,
    opacity: Zl,
    backgroundColor: Zl,
    color: Zl,
    default: di,
  },
  Iw = function (e, t) {
    var n;
    return Ro(t) ? (n = Dw) : (n = Xd[e] || Xd.default), O({ to: t }, n(t));
  },
  jw = O(O({}, Bm), {
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: as,
    WebkitFilter: as,
  }),
  Uc = function (e) {
    return jw[e];
  };
function Bc(e, t) {
  var n,
    r = Uc(e);
  return (
    r !== as && (r = jt),
    (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
  );
}
var zw = { current: !1 };
function Fw(e) {
  e.when,
    e.delay,
    e.delayChildren,
    e.staggerChildren,
    e.staggerDirection,
    e.repeat,
    e.repeatType,
    e.repeatDelay,
    e.from;
  var t = nt(e, [
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
  ]);
  return !!Object.keys(t).length;
}
function $w(e) {
  var t = e.ease,
    n = e.times,
    r = e.yoyo,
    o = e.flip,
    i = e.loop,
    a = nt(e, ["ease", "times", "yoyo", "flip", "loop"]),
    l = O({}, a);
  return (
    n && (l.offset = n),
    a.duration && (l.duration = ma(a.duration)),
    a.repeatDelay && (l.repeatDelay = ma(a.repeatDelay)),
    t && (l.ease = Vw(t) ? t.map(Gd) : Gd(t)),
    a.type === "tween" && (l.type = "keyframes"),
    (r || i || o) &&
      (r
        ? (l.repeatType = "reverse")
        : i
        ? (l.repeatType = "loop")
        : o && (l.repeatType = "mirror"),
      (l.repeat = i || r || o || a.repeat)),
    a.type !== "spring" && (l.type = "keyframes"),
    l
  );
}
function bw(e, t) {
  var n,
    r,
    o = Hc(e, t) || {};
  return (r = (n = o.delay) !== null && n !== void 0 ? n : e.delay) !== null &&
    r !== void 0
    ? r
    : 0;
}
function Uw(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = Et([], pe(e.to), !1)), (e.to[0] = e.from)),
    e
  );
}
function Bw(e, t, n) {
  var r;
  return (
    Array.isArray(t.to) &&
      (((r = e.duration) !== null && r !== void 0) || (e.duration = 0.8)),
    Uw(t),
    Fw(e) || (e = O(O({}, e), Iw(n, t.to))),
    O(O({}, t), $w(e))
  );
}
function Hw(e, t, n, r, o) {
  var i,
    a = Hc(r, e),
    l = (i = a.from) !== null && i !== void 0 ? i : t.get(),
    u = Yd(e, n);
  l === "none" && u && typeof n == "string"
    ? (l = Bc(e, n))
    : Zd(l) && typeof n == "string"
    ? (l = Jd(n))
    : !Array.isArray(n) && Zd(n) && typeof l == "string" && (n = Jd(l));
  var s = Yd(e, l);
  function c() {
    var f = {
      from: l,
      to: n,
      velocity: t.getVelocity(),
      onComplete: o,
      onUpdate: function (p) {
        return t.set(p);
      },
    };
    return a.type === "inertia" || a.type === "decay"
      ? fw(O(O({}, f), a))
      : E0(
          O(O({}, Bw(a, f, e)), {
            onUpdate: function (p) {
              var v;
              f.onUpdate(p),
                (v = a.onUpdate) === null || v === void 0 || v.call(a, p);
            },
            onComplete: function () {
              var p;
              f.onComplete(),
                (p = a.onComplete) === null || p === void 0 || p.call(a);
            },
          })
        );
  }
  function d() {
    var f,
      p,
      v = Jm(n);
    return (
      t.set(v),
      o(),
      (f = a == null ? void 0 : a.onUpdate) === null ||
        f === void 0 ||
        f.call(a, v),
      (p = a == null ? void 0 : a.onComplete) === null ||
        p === void 0 ||
        p.call(a),
      { stop: function () {} }
    );
  }
  return !s || !u || a.type === !1 ? d : c;
}
function Zd(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function Jd(e) {
  return typeof e == "number" ? 0 : Bc("", e);
}
function Hc(e, t) {
  return e[t] || e.default || e;
}
function Wc(e, t, n, r) {
  return (
    r === void 0 && (r = {}),
    zw.current && (r = { type: !1 }),
    t.start(function (o) {
      var i,
        a,
        l = Hw(e, t, n, r, o),
        u = bw(r, e),
        s = function () {
          return (a = l());
        };
      return (
        u ? (i = window.setTimeout(s, ma(u))) : s(),
        function () {
          clearTimeout(i), a == null || a.stop();
        }
      );
    })
  );
}
var Ww = function (e) {
    return /^\-?\d*\.?\d+$/.test(e);
  },
  Kw = function (e) {
    return /^0[^.\s]+$/.test(e);
  };
function Kc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qc(e, t) {
  var n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var eo = (function () {
    function e() {
      this.subscriptions = [];
    }
    return (
      (e.prototype.add = function (t) {
        var n = this;
        return (
          Kc(this.subscriptions, t),
          function () {
            return Qc(n.subscriptions, t);
          }
        );
      }),
      (e.prototype.notify = function (t, n, r) {
        var o = this.subscriptions.length;
        if (!!o)
          if (o === 1) this.subscriptions[0](t, n, r);
          else
            for (var i = 0; i < o; i++) {
              var a = this.subscriptions[i];
              a && a(t, n, r);
            }
      }),
      (e.prototype.getSize = function () {
        return this.subscriptions.length;
      }),
      (e.prototype.clear = function () {
        this.subscriptions.length = 0;
      }),
      e
    );
  })(),
  Qw = function (e) {
    return !isNaN(parseFloat(e));
  },
  Gw = (function () {
    function e(t) {
      var n = this;
      (this.version = "6.5.1"),
        (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new eo()),
        (this.velocityUpdateSubscribers = new eo()),
        (this.renderSubscribers = new eo()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function (r, o) {
          o === void 0 && (o = !0), (n.prev = n.current), (n.current = r);
          var i = va(),
            a = i.delta,
            l = i.timestamp;
          n.lastUpdated !== l &&
            ((n.timeDelta = a),
            (n.lastUpdated = l),
            Ct.postRender(n.scheduleVelocityCheck)),
            n.prev !== n.current && n.updateSubscribers.notify(n.current),
            n.velocityUpdateSubscribers.getSize() &&
              n.velocityUpdateSubscribers.notify(n.getVelocity()),
            o && n.renderSubscribers.notify(n.current);
        }),
        (this.scheduleVelocityCheck = function () {
          return Ct.postRender(n.velocityCheck);
        }),
        (this.velocityCheck = function (r) {
          var o = r.timestamp;
          o !== n.lastUpdated &&
            ((n.prev = n.current),
            n.velocityUpdateSubscribers.notify(n.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = t),
        (this.canTrackVelocity = Qw(this.current));
    }
    return (
      (e.prototype.onChange = function (t) {
        return this.updateSubscribers.add(t);
      }),
      (e.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      }),
      (e.prototype.onRenderRequest = function (t) {
        return t(this.get()), this.renderSubscribers.add(t);
      }),
      (e.prototype.attach = function (t) {
        this.passiveEffect = t;
      }),
      (e.prototype.set = function (t, n) {
        n === void 0 && (n = !0),
          !n || !this.passiveEffect
            ? this.updateAndNotify(t, n)
            : this.passiveEffect(t, this.updateAndNotify);
      }),
      (e.prototype.get = function () {
        return this.current;
      }),
      (e.prototype.getPrevious = function () {
        return this.prev;
      }),
      (e.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? P0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (e.prototype.start = function (t) {
        var n = this;
        return (
          this.stop(),
          new Promise(function (r) {
            (n.hasAnimated = !0), (n.stopAnimation = t(r));
          }).then(function () {
            return n.clearAnimation();
          })
        );
      }),
      (e.prototype.stop = function () {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      }),
      (e.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      }),
      (e.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      }),
      (e.prototype.destroy = function () {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      }),
      e
    );
  })();
function Sr(e) {
  return new Gw(e);
}
var L0 = function (e) {
    return function (t) {
      return t.test(e);
    };
  },
  Yw = {
    test: function (e) {
      return e === "auto";
    },
    parse: function (e) {
      return e;
    },
  },
  N0 = [jn, D, Pt, bt, V4, A4, Yw],
  Dr = function (e) {
    return N0.find(L0(e));
  },
  Xw = Et(Et([], pe(N0), !1), [ke, jt], !1),
  Zw = function (e) {
    return Xw.find(L0(e));
  };
function Jw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Sr(n));
}
function qw(e, t) {
  var n = al(e, t),
    r = n ? e.makeTargetAnimatable(n, !1) : {},
    o = r.transitionEnd,
    i = o === void 0 ? {} : o;
  r.transition;
  var a = nt(r, ["transitionEnd", "transition"]);
  a = O(O({}, a), i);
  for (var l in a) {
    var u = Jm(a[l]);
    Jw(e, l, u);
  }
}
function e5(e, t, n) {
  var r,
    o,
    i,
    a,
    l = Object.keys(t).filter(function (p) {
      return !e.hasValue(p);
    }),
    u = l.length;
  if (!!u)
    for (var s = 0; s < u; s++) {
      var c = l[s],
        d = t[c],
        f = null;
      Array.isArray(d) && (f = d[0]),
        f === null &&
          (f =
            (o = (r = n[c]) !== null && r !== void 0 ? r : e.readValue(c)) !==
              null && o !== void 0
              ? o
              : t[c]),
        f != null &&
          (typeof f == "string" && (Ww(f) || Kw(f))
            ? (f = parseFloat(f))
            : !Zw(f) && jt.test(d) && (f = Bc(c, d)),
          e.addValue(c, Sr(f)),
          ((i = (a = n)[c]) !== null && i !== void 0) || (a[c] = f),
          e.setBaseTarget(c, f));
    }
}
function t5(e, t) {
  if (!!t) {
    var n = t[e] || t.default || t;
    return n.from;
  }
}
function n5(e, t, n) {
  var r,
    o,
    i = {};
  for (var a in e)
    i[a] =
      (r = t5(a, t)) !== null && r !== void 0
        ? r
        : (o = n.getValue(a)) === null || o === void 0
        ? void 0
        : o.get();
  return i;
}
function r5(e, t, n) {
  n === void 0 && (n = {}), e.notifyAnimationStart(t);
  var r;
  if (Array.isArray(t)) {
    var o = t.map(function (a) {
      return vs(e, a, n);
    });
    r = Promise.all(o);
  } else if (typeof t == "string") r = vs(e, t, n);
  else {
    var i = typeof t == "function" ? al(e, t, n.custom) : t;
    r = A0(e, i, n);
  }
  return r.then(function () {
    return e.notifyAnimationComplete(t);
  });
}
function vs(e, t, n) {
  var r;
  n === void 0 && (n = {});
  var o = al(e, t, n.custom),
    i = (o || {}).transition,
    a = i === void 0 ? e.getDefaultTransition() || {} : i;
  n.transitionOverride && (a = n.transitionOverride);
  var l = o
      ? function () {
          return A0(e, o, n);
        }
      : function () {
          return Promise.resolve();
        },
    u =
      !((r = e.variantChildren) === null || r === void 0) && r.size
        ? function (p) {
            p === void 0 && (p = 0);
            var v = a.delayChildren,
              g = v === void 0 ? 0 : v,
              w = a.staggerChildren,
              m = a.staggerDirection;
            return o5(e, t, g + p, w, m, n);
          }
        : function () {
            return Promise.resolve();
          },
    s = a.when;
  if (s) {
    var c = pe(s === "beforeChildren" ? [l, u] : [u, l], 2),
      d = c[0],
      f = c[1];
    return d().then(f);
  } else return Promise.all([l(), u(n.delay)]);
}
function A0(e, t, n) {
  var r,
    o = n === void 0 ? {} : n,
    i = o.delay,
    a = i === void 0 ? 0 : i,
    l = o.transitionOverride,
    u = o.type,
    s = e.makeTargetAnimatable(t),
    c = s.transition,
    d = c === void 0 ? e.getDefaultTransition() : c,
    f = s.transitionEnd,
    p = nt(s, ["transition", "transitionEnd"]);
  l && (d = l);
  var v = [],
    g =
      u &&
      ((r = e.animationState) === null || r === void 0
        ? void 0
        : r.getState()[u]);
  for (var w in p) {
    var m = e.getValue(w),
      h = p[w];
    if (!(!m || h === void 0 || (g && a5(g, w)))) {
      var y = O({ delay: a }, d);
      e.shouldReduceMotion &&
        $o(w) &&
        (y = O(O({}, y), { type: !1, delay: 0 }));
      var S = Wc(w, m, h, y);
      v.push(S);
    }
  }
  return Promise.all(v).then(function () {
    f && qw(e, f);
  });
}
function o5(e, t, n, r, o, i) {
  n === void 0 && (n = 0), r === void 0 && (r = 0), o === void 0 && (o = 1);
  var a = [],
    l = (e.variantChildren.size - 1) * r,
    u =
      o === 1
        ? function (s) {
            return s === void 0 && (s = 0), s * r;
          }
        : function (s) {
            return s === void 0 && (s = 0), l - s * r;
          };
  return (
    Array.from(e.variantChildren)
      .sort(i5)
      .forEach(function (s, c) {
        a.push(
          vs(s, t, O(O({}, i), { delay: n + u(c) })).then(function () {
            return s.notifyAnimationComplete(t);
          })
        );
      }),
    Promise.all(a)
  );
}
function i5(e, t) {
  return e.sortNodePosition(t);
}
function a5(e, t) {
  var n = e.protectedKeys,
    r = e.needsAnimating,
    o = n.hasOwnProperty(t) && r[t] !== !0;
  return (r[t] = !1), o;
}
var Gc = [G.Animate, G.InView, G.Focus, G.Hover, G.Tap, G.Drag, G.Exit],
  l5 = Et([], pe(Gc), !1).reverse(),
  u5 = Gc.length;
function s5(e) {
  return function (t) {
    return Promise.all(
      t.map(function (n) {
        var r = n.animation,
          o = n.options;
        return r5(e, r, o);
      })
    );
  };
}
function c5(e) {
  var t = s5(e),
    n = d5(),
    r = {},
    o = !0,
    i = function (c, d) {
      var f = al(e, d);
      if (f) {
        f.transition;
        var p = f.transitionEnd,
          v = nt(f, ["transition", "transitionEnd"]);
        c = O(O(O({}, c), v), p);
      }
      return c;
    };
  function a(c) {
    return r[c] !== void 0;
  }
  function l(c) {
    t = c(e);
  }
  function u(c, d) {
    for (
      var f,
        p = e.getProps(),
        v = e.getVariantContext(!0) || {},
        g = [],
        w = new Set(),
        m = {},
        h = 1 / 0,
        y = function (E) {
          var P = l5[E],
            R = n[P],
            L = (f = p[P]) !== null && f !== void 0 ? f : v[P],
            z = lt(L),
            W = P === d ? R.isActive : null;
          W === !1 && (h = E);
          var ee = L === v[P] && L !== p[P] && z;
          if (
            (ee && o && e.manuallyAnimateOnMount && (ee = !1),
            (R.protectedKeys = O({}, m)),
            (!R.isActive && W === null) ||
              (!L && !R.prevProp) ||
              Vc(L) ||
              typeof L == "boolean")
          )
            return "continue";
          var ue = f5(R.prevProp, L),
            Ae = ue || (P === d && R.isActive && !ee && z) || (E > h && z),
            Qe = Array.isArray(L) ? L : [L],
            we = Qe.reduce(i, {});
          W === !1 && (we = {});
          var N = R.prevResolvedValues,
            I = N === void 0 ? {} : N,
            j = O(O({}, I), we),
            K = function (V) {
              (Ae = !0), w.delete(V), (R.needsAnimating[V] = !0);
            };
          for (var b in j) {
            var $ = we[b],
              M = I[b];
            m.hasOwnProperty(b) ||
              ($ !== M
                ? Ro($) && Ro(M)
                  ? !M0($, M) || ue
                    ? K(b)
                    : (R.protectedKeys[b] = !0)
                  : $ !== void 0
                  ? K(b)
                  : w.add(b)
                : $ !== void 0 && w.has(b)
                ? K(b)
                : (R.protectedKeys[b] = !0));
          }
          (R.prevProp = L),
            (R.prevResolvedValues = we),
            R.isActive && (m = O(O({}, m), we)),
            o && e.blockInitialAnimation && (Ae = !1),
            Ae &&
              !ee &&
              g.push.apply(
                g,
                Et(
                  [],
                  pe(
                    Qe.map(function (V) {
                      return { animation: V, options: O({ type: P }, c) };
                    })
                  ),
                  !1
                )
              );
        },
        S = 0;
      S < u5;
      S++
    )
      y(S);
    if (((r = O({}, m)), w.size)) {
      var x = {};
      w.forEach(function (E) {
        var P = e.getBaseTarget(E);
        P !== void 0 && (x[E] = P);
      }),
        g.push({ animation: x });
    }
    var _ = Boolean(g.length);
    return (
      o && p.initial === !1 && !e.manuallyAnimateOnMount && (_ = !1),
      (o = !1),
      _ ? t(g) : Promise.resolve()
    );
  }
  function s(c, d, f) {
    var p;
    if (n[c].isActive === d) return Promise.resolve();
    (p = e.variantChildren) === null ||
      p === void 0 ||
      p.forEach(function (w) {
        var m;
        return (m = w.animationState) === null || m === void 0
          ? void 0
          : m.setActive(c, d);
      }),
      (n[c].isActive = d);
    var v = u(f, c);
    for (var g in n) n[g].protectedKeys = {};
    return v;
  }
  return {
    isAnimated: a,
    animateChanges: u,
    setActive: s,
    setAnimateFunction: l,
    getState: function () {
      return n;
    },
  };
}
function f5(e, t) {
  return typeof t == "string" ? t !== e : Om(t) ? !M0(t, e) : !1;
}
function gn(e) {
  return (
    e === void 0 && (e = !1),
    {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
function d5() {
  var e;
  return (
    (e = {}),
    (e[G.Animate] = gn(!0)),
    (e[G.InView] = gn()),
    (e[G.Hover] = gn()),
    (e[G.Tap] = gn()),
    (e[G.Drag] = gn()),
    (e[G.Focus] = gn()),
    (e[G.Exit] = gn()),
    e
  );
}
var p5 = {
    animation: Jt(function (e) {
      var t = e.visualElement,
        n = e.animate;
      t.animationState || (t.animationState = c5(t)),
        Vc(n) &&
          C.exports.useEffect(
            function () {
              return n.subscribe(t);
            },
            [n]
          );
    }),
    exit: Jt(function (e) {
      var t = e.custom,
        n = e.visualElement,
        r = pe(R0(), 2),
        o = r[0],
        i = r[1],
        a = C.exports.useContext(il);
      C.exports.useEffect(
        function () {
          var l, u;
          n.isPresent = o;
          var s =
            (l = n.animationState) === null || l === void 0
              ? void 0
              : l.setActive(G.Exit, !o, {
                  custom:
                    (u = a == null ? void 0 : a.custom) !== null && u !== void 0
                      ? u
                      : t,
                });
          !o && (s == null || s.then(i));
        },
        [o]
      );
    }),
  },
  V0 = (function () {
    function e(t, n, r) {
      var o = this,
        i = r === void 0 ? {} : r,
        a = i.transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
            var f = ql(o.lastMoveEventInfo, o.history),
              p = o.startEvent !== null,
              v = C0(f.offset, { x: 0, y: 0 }) >= 3;
            if (!(!p && !v)) {
              var g = f.point,
                w = va().timestamp;
              o.history.push(O(O({}, g), { timestamp: w }));
              var m = o.handlers,
                h = m.onStart,
                y = m.onMove;
              p ||
                (h && h(o.lastMoveEvent, f), (o.startEvent = o.lastMoveEvent)),
                y && y(o.lastMoveEvent, f);
            }
          }
        }),
        (this.handlePointerMove = function (f, p) {
          if (
            ((o.lastMoveEvent = f),
            (o.lastMoveEventInfo = Jl(p, o.transformPagePoint)),
            e0(f) && f.buttons === 0)
          ) {
            o.handlePointerUp(f, p);
            return;
          }
          Ct.update(o.updatePoint, !0);
        }),
        (this.handlePointerUp = function (f, p) {
          o.end();
          var v = o.handlers,
            g = v.onEnd,
            w = v.onSessionEnd,
            m = ql(Jl(p, o.transformPagePoint), o.history);
          o.startEvent && g && g(f, m), w && w(f, m);
        }),
        !(t0(t) && t.touches.length > 1))
      ) {
        (this.handlers = n), (this.transformPagePoint = a);
        var l = Dc(t),
          u = Jl(l, this.transformPagePoint),
          s = u.point,
          c = va().timestamp;
        this.history = [O(O({}, s), { timestamp: c })];
        var d = n.onSessionStart;
        d && d(t, ql(u, this.history)),
          (this.removeListeners = cl(
            ur(window, "pointermove", this.handlePointerMove),
            ur(window, "pointerup", this.handlePointerUp),
            ur(window, "pointercancel", this.handlePointerUp)
          ));
      }
    }
    return (
      (e.prototype.updateHandlers = function (t) {
        this.handlers = t;
      }),
      (e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          gr.update(this.updatePoint);
      }),
      e
    );
  })();
function Jl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function qd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ql(e, t) {
  var n = e.point;
  return {
    point: n,
    delta: qd(n, D0(t)),
    offset: qd(n, v5(t)),
    velocity: h5(t, 0.1),
  };
}
function v5(e) {
  return e[0];
}
function D0(e) {
  return e[e.length - 1];
}
function h5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var n = e.length - 1, r = null, o = D0(e);
    n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > ma(t)));

  )
    n--;
  if (!r) return { x: 0, y: 0 };
  var i = (o.timestamp - r.timestamp) / 1e3;
  if (i === 0) return { x: 0, y: 0 };
  var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function zt(e) {
  return e.max - e.min;
}
function ep(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 0.01), C0(e, t) < n;
}
function tp(e, t, n, r) {
  r === void 0 && (r = 0.5),
    (e.origin = r),
    (e.originPoint = ae(t.min, t.max, e.origin)),
    (e.scale = zt(n) / zt(t)),
    (ep(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ae(n.min, n.max, e.origin) - e.originPoint),
    (ep(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function to(e, t, n, r) {
  tp(e.x, t.x, n.x, r == null ? void 0 : r.originX),
    tp(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function np(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + zt(t));
}
function m5(e, t, n) {
  np(e.x, t.x, n.x), np(e.y, t.y, n.y);
}
function rp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + zt(t));
}
function no(e, t, n) {
  rp(e.x, t.x, n.x), rp(e.y, t.y, n.y);
}
function y5(e, t, n) {
  var r = t.min,
    o = t.max;
  return (
    r !== void 0 && e < r
      ? (e = n ? ae(r, e, n.min) : Math.max(e, r))
      : o !== void 0 && e > o && (e = n ? ae(o, e, n.max) : Math.min(e, o)),
    e
  );
}
function op(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function g5(e, t) {
  var n = t.top,
    r = t.left,
    o = t.bottom,
    i = t.right;
  return { x: op(e.x, r, i), y: op(e.y, n, o) };
}
function ip(e, t) {
  var n,
    r = t.min - e.min,
    o = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min &&
      ((n = pe([o, r], 2)), (r = n[0]), (o = n[1])),
    { min: r, max: o }
  );
}
function S5(e, t) {
  return { x: ip(e.x, t.x), y: ip(e.y, t.y) };
}
function w5(e, t) {
  var n = 0.5,
    r = zt(e),
    o = zt(t);
  return (
    o > r
      ? (n = Mo(t.min, t.max - r, e.min))
      : r > o && (n = Mo(e.min, e.max - o, t.min)),
    da(0, 1, n)
  );
}
function x5(e, t) {
  var n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var hs = 0.35;
function E5(e) {
  return (
    e === void 0 && (e = hs),
    e === !1 ? (e = 0) : e === !0 && (e = hs),
    { x: ap(e, "left", "right"), y: ap(e, "top", "bottom") }
  );
}
function ap(e, t, n) {
  return { min: lp(e, t), max: lp(e, n) };
}
function lp(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0;
}
var up = function () {
    return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
  },
  ro = function () {
    return { x: up(), y: up() };
  },
  sp = function () {
    return { min: 0, max: 0 };
  },
  Pe = function () {
    return { x: sp(), y: sp() };
  };
function yt(e) {
  return [e("x"), e("y")];
}
function I0(e) {
  var t = e.top,
    n = e.left,
    r = e.right,
    o = e.bottom;
  return { x: { min: n, max: r }, y: { min: t, max: o } };
}
function P5(e) {
  var t = e.x,
    n = e.y;
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function C5(e, t) {
  if (!t) return e;
  var n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function eu(e) {
  return e === void 0 || e === 1;
}
function j0(e) {
  var t = e.scale,
    n = e.scaleX,
    r = e.scaleY;
  return !eu(t) || !eu(n) || !eu(r);
}
function Ut(e) {
  return (
    j0(e) || cp(e.x) || cp(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
  );
}
function cp(e) {
  return e && e !== "0%";
}
function ya(e, t, n) {
  var r = e - n,
    o = t * r;
  return n + o;
}
function fp(e, t, n, r, o) {
  return o !== void 0 && (e = ya(e, o, r)), ya(e, n, r) + t;
}
function ms(e, t, n, r, o) {
  t === void 0 && (t = 0),
    n === void 0 && (n = 1),
    (e.min = fp(e.min, t, n, r, o)),
    (e.max = fp(e.max, t, n, r, o));
}
function z0(e, t) {
  var n = t.x,
    r = t.y;
  ms(e.x, n.translate, n.scale, n.originPoint),
    ms(e.y, r.translate, r.scale, r.originPoint);
}
function _5(e, t, n, r) {
  var o, i;
  r === void 0 && (r = !1);
  var a = n.length;
  if (!!a) {
    t.x = t.y = 1;
    for (var l, u, s = 0; s < a; s++)
      (l = n[s]),
        (u = l.projectionDelta),
        ((i = (o = l.instance) === null || o === void 0 ? void 0 : o.style) ===
          null || i === void 0
          ? void 0
          : i.display) !== "contents" &&
          (r &&
            l.options.layoutScroll &&
            l.scroll &&
            l !== l.root &&
            qn(e, { x: -l.scroll.x, y: -l.scroll.y }),
          u && ((t.x *= u.x.scale), (t.y *= u.y.scale), z0(e, u)),
          r && Ut(l.latestValues) && qn(e, l.latestValues));
  }
}
function Wt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function dp(e, t, n) {
  var r = pe(n, 3),
    o = r[0],
    i = r[1],
    a = r[2],
    l = t[a] !== void 0 ? t[a] : 0.5,
    u = ae(e.min, e.max, l);
  ms(e, t[o], t[i], u, t.scale);
}
var T5 = ["x", "scaleX", "originX"],
  k5 = ["y", "scaleY", "originY"];
function qn(e, t) {
  dp(e.x, t, T5), dp(e.y, t, k5);
}
function F0(e, t) {
  return I0(C5(e.getBoundingClientRect(), t));
}
function O5(e, t, n) {
  var r = F0(e, n),
    o = t.scroll;
  return o && (Wt(r.x, o.x), Wt(r.y, o.y)), r;
}
var R5 = new WeakMap(),
  M5 = (function () {
    function e(t) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Pe()),
        (this.visualElement = t);
    }
    return (
      (e.prototype.start = function (t, n) {
        var r = this,
          o = n === void 0 ? {} : n,
          i = o.snapToCursor,
          a = i === void 0 ? !1 : i;
        if (this.visualElement.isPresent !== !1) {
          var l = function (d) {
              r.stopAnimation(), a && r.snapToCursor(Dc(d, "page").point);
            },
            u = function (d, f) {
              var p,
                v = r.getProps(),
                g = v.drag,
                w = v.dragPropagation,
                m = v.onDragStart;
              (g &&
                !w &&
                (r.openGlobalLock && r.openGlobalLock(),
                (r.openGlobalLock = i0(g)),
                !r.openGlobalLock)) ||
                ((r.isDragging = !0),
                (r.currentDirection = null),
                r.resolveConstraints(),
                r.visualElement.projection &&
                  ((r.visualElement.projection.isAnimationBlocked = !0),
                  (r.visualElement.projection.target = void 0)),
                yt(function (h) {
                  var y,
                    S,
                    x = r.getAxisMotionValue(h).get() || 0;
                  if (Pt.test(x)) {
                    var _ =
                      (S =
                        (y = r.visualElement.projection) === null ||
                        y === void 0
                          ? void 0
                          : y.layout) === null || S === void 0
                        ? void 0
                        : S.actual[h];
                    if (_) {
                      var E = zt(_);
                      x = E * (parseFloat(x) / 100);
                    }
                  }
                  r.originPoint[h] = x;
                }),
                m == null || m(d, f),
                (p = r.visualElement.animationState) === null ||
                  p === void 0 ||
                  p.setActive(G.Drag, !0));
            },
            s = function (d, f) {
              var p = r.getProps(),
                v = p.dragPropagation,
                g = p.dragDirectionLock,
                w = p.onDirectionLock,
                m = p.onDrag;
              if (!(!v && !r.openGlobalLock)) {
                var h = f.offset;
                if (g && r.currentDirection === null) {
                  (r.currentDirection = L5(h)),
                    r.currentDirection !== null &&
                      (w == null || w(r.currentDirection));
                  return;
                }
                r.updateAxis("x", f.point, h),
                  r.updateAxis("y", f.point, h),
                  r.visualElement.syncRender(),
                  m == null || m(d, f);
              }
            },
            c = function (d, f) {
              return r.stop(d, f);
            };
          this.panSession = new V0(
            t,
            { onSessionStart: l, onStart: u, onMove: s, onSessionEnd: c },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
      }),
      (e.prototype.stop = function (t, n) {
        var r = this.isDragging;
        if ((this.cancel(), !!r)) {
          var o = n.velocity;
          this.startAnimation(o);
          var i = this.getProps().onDragEnd;
          i == null || i(t, n);
        }
      }),
      (e.prototype.cancel = function () {
        var t, n;
        (this.isDragging = !1),
          this.visualElement.projection &&
            (this.visualElement.projection.isAnimationBlocked = !1),
          (t = this.panSession) === null || t === void 0 || t.end(),
          (this.panSession = void 0);
        var r = this.getProps().dragPropagation;
        !r &&
          this.openGlobalLock &&
          (this.openGlobalLock(), (this.openGlobalLock = null)),
          (n = this.visualElement.animationState) === null ||
            n === void 0 ||
            n.setActive(G.Drag, !1);
      }),
      (e.prototype.updateAxis = function (t, n, r) {
        var o = this.getProps().drag;
        if (!(!r || !pi(t, o, this.currentDirection))) {
          var i = this.getAxisMotionValue(t),
            a = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (a = y5(a, this.constraints[t], this.elastic[t])),
            i.set(a);
        }
      }),
      (e.prototype.resolveConstraints = function () {
        var t = this,
          n = this.getProps(),
          r = n.dragConstraints,
          o = n.dragElastic,
          i = (this.visualElement.projection || {}).layout,
          a = this.constraints;
        r && Jn(r)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : r && i
          ? (this.constraints = g5(i.actual, r))
          : (this.constraints = !1),
          (this.elastic = E5(o)),
          a !== this.constraints &&
            i &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            yt(function (l) {
              t.getAxisMotionValue(l) &&
                (t.constraints[l] = x5(i.actual[l], t.constraints[l]));
            });
      }),
      (e.prototype.resolveRefConstraints = function () {
        var t = this.getProps(),
          n = t.dragConstraints,
          r = t.onMeasureDragConstraints;
        if (!n || !Jn(n)) return !1;
        var o = n.current,
          i = this.visualElement.projection;
        if (!i || !i.layout) return !1;
        var a = O5(o, i.root, this.visualElement.getTransformPagePoint()),
          l = S5(i.layout.actual, a);
        if (r) {
          var u = r(P5(l));
          (this.hasMutatedConstraints = !!u), u && (l = I0(u));
        }
        return l;
      }),
      (e.prototype.startAnimation = function (t) {
        var n = this,
          r = this.getProps(),
          o = r.drag,
          i = r.dragMomentum,
          a = r.dragElastic,
          l = r.dragTransition,
          u = r.dragSnapToOrigin,
          s = r.onDragTransitionEnd,
          c = this.constraints || {},
          d = yt(function (f) {
            var p;
            if (!!pi(f, o, n.currentDirection)) {
              var v =
                (p = c == null ? void 0 : c[f]) !== null && p !== void 0
                  ? p
                  : {};
              u && (v = { min: 0, max: 0 });
              var g = a ? 200 : 1e6,
                w = a ? 40 : 1e7,
                m = O(
                  O(
                    {
                      type: "inertia",
                      velocity: i ? t[f] : 0,
                      bounceStiffness: g,
                      bounceDamping: w,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10,
                    },
                    l
                  ),
                  v
                );
              return n.startAxisValueAnimation(f, m);
            }
          });
        return Promise.all(d).then(s);
      }),
      (e.prototype.startAxisValueAnimation = function (t, n) {
        var r = this.getAxisMotionValue(t);
        return Wc(t, r, 0, n);
      }),
      (e.prototype.stopAnimation = function () {
        var t = this;
        yt(function (n) {
          return t.getAxisMotionValue(n).stop();
        });
      }),
      (e.prototype.getAxisMotionValue = function (t) {
        var n,
          r,
          o = "_drag" + t.toUpperCase(),
          i = this.visualElement.getProps()[o];
        return (
          i ||
          this.visualElement.getValue(
            t,
            (r =
              (n = this.visualElement.getProps().initial) === null ||
              n === void 0
                ? void 0
                : n[t]) !== null && r !== void 0
              ? r
              : 0
          )
        );
      }),
      (e.prototype.snapToCursor = function (t) {
        var n = this;
        yt(function (r) {
          var o = n.getProps().drag;
          if (!!pi(r, o, n.currentDirection)) {
            var i = n.visualElement.projection,
              a = n.getAxisMotionValue(r);
            if (i && i.layout) {
              var l = i.layout.actual[r],
                u = l.min,
                s = l.max;
              a.set(t[r] - ae(u, s, 0.5));
            }
          }
        });
      }),
      (e.prototype.scalePositionWithinConstraints = function () {
        var t = this,
          n,
          r = this.getProps(),
          o = r.drag,
          i = r.dragConstraints,
          a = this.visualElement.projection;
        if (!(!Jn(i) || !a || !this.constraints)) {
          this.stopAnimation();
          var l = { x: 0, y: 0 };
          yt(function (s) {
            var c = t.getAxisMotionValue(s);
            if (c) {
              var d = c.get();
              l[s] = w5({ min: d, max: d }, t.constraints[s]);
            }
          });
          var u = this.visualElement.getProps().transformTemplate;
          (this.visualElement.getInstance().style.transform = u
            ? u({}, "")
            : "none"),
            (n = a.root) === null || n === void 0 || n.updateScroll(),
            a.updateLayout(),
            this.resolveConstraints(),
            yt(function (s) {
              if (!!pi(s, o, null)) {
                var c = t.getAxisMotionValue(s),
                  d = t.constraints[s],
                  f = d.min,
                  p = d.max;
                c.set(ae(f, p, l[s]));
              }
            });
        }
      }),
      (e.prototype.addListeners = function () {
        var t = this,
          n;
        R5.set(this.visualElement, this);
        var r = this.visualElement.getInstance(),
          o = ur(r, "pointerdown", function (s) {
            var c = t.getProps(),
              d = c.drag,
              f = c.dragListener,
              p = f === void 0 ? !0 : f;
            d && p && t.start(s);
          }),
          i = function () {
            var s = t.getProps().dragConstraints;
            Jn(s) && (t.constraints = t.resolveRefConstraints());
          },
          a = this.visualElement.projection,
          l = a.addEventListener("measure", i);
        a &&
          !a.layout &&
          ((n = a.root) === null || n === void 0 || n.updateScroll(),
          a.updateLayout()),
          i();
        var u = sl(window, "resize", function () {
          return t.scalePositionWithinConstraints();
        });
        return (
          a.addEventListener("didUpdate", function (s) {
            var c = s.delta,
              d = s.hasLayoutChanged;
            t.isDragging &&
              d &&
              (yt(function (f) {
                var p = t.getAxisMotionValue(f);
                !p ||
                  ((t.originPoint[f] += c[f].translate),
                  p.set(p.get() + c[f].translate));
              }),
              t.visualElement.syncRender());
          }),
          function () {
            u(), o(), l();
          }
        );
      }),
      (e.prototype.getProps = function () {
        var t = this.visualElement.getProps(),
          n = t.drag,
          r = n === void 0 ? !1 : n,
          o = t.dragDirectionLock,
          i = o === void 0 ? !1 : o,
          a = t.dragPropagation,
          l = a === void 0 ? !1 : a,
          u = t.dragConstraints,
          s = u === void 0 ? !1 : u,
          c = t.dragElastic,
          d = c === void 0 ? hs : c,
          f = t.dragMomentum,
          p = f === void 0 ? !0 : f;
        return O(O({}, t), {
          drag: r,
          dragDirectionLock: i,
          dragPropagation: l,
          dragConstraints: s,
          dragElastic: d,
          dragMomentum: p,
        });
      }),
      e
    );
  })();
function pi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function L5(e, t) {
  t === void 0 && (t = 10);
  var n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
function N5(e) {
  var t = e.dragControls,
    n = e.visualElement,
    r = ul(function () {
      return new M5(n);
    });
  C.exports.useEffect(
    function () {
      return t && t.subscribe(r);
    },
    [r, t]
  ),
    C.exports.useEffect(
      function () {
        return r.addListeners();
      },
      [r]
    );
}
function A5(e) {
  var t = e.onPan,
    n = e.onPanStart,
    r = e.onPanEnd,
    o = e.onPanSessionStart,
    i = e.visualElement,
    a = t || n || r || o,
    l = C.exports.useRef(null),
    u = C.exports.useContext(kc).transformPagePoint,
    s = {
      onSessionStart: o,
      onStart: n,
      onMove: t,
      onEnd: function (d, f) {
        (l.current = null), r && r(d, f);
      },
    };
  C.exports.useEffect(function () {
    l.current !== null && l.current.updateHandlers(s);
  });
  function c(d) {
    l.current = new V0(d, s, { transformPagePoint: u });
  }
  fa(i, "pointerdown", a && c),
    u0(function () {
      return l.current && l.current.end();
    });
}
var V5 = { pan: Jt(A5), drag: Jt(N5) },
  vi = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "LayoutAnimationStart",
    "SetAxisTarget",
    "Unmount",
  ];
function D5() {
  var e = vi.map(function () {
      return new eo();
    }),
    t = {},
    n = {
      clearAllListeners: function () {
        return e.forEach(function (r) {
          return r.clear();
        });
      },
      updatePropListeners: function (r) {
        vi.forEach(function (o) {
          var i,
            a = "on" + o,
            l = r[a];
          (i = t[o]) === null || i === void 0 || i.call(t),
            l && (t[o] = n[a](l));
        });
      },
    };
  return (
    e.forEach(function (r, o) {
      (n["on" + vi[o]] = function (i) {
        return r.add(i);
      }),
        (n["notify" + vi[o]] = function () {
          for (var i = [], a = 0; a < arguments.length; a++)
            i[a] = arguments[a];
          return r.notify.apply(r, Et([], pe(i), !1));
        });
    }),
    n
  );
}
function I5(e, t, n) {
  var r;
  for (var o in t) {
    var i = t[o],
      a = n[o];
    if (It(i)) e.addValue(o, i);
    else if (It(a)) e.addValue(o, Sr(i));
    else if (a !== i)
      if (e.hasValue(o)) {
        var l = e.getValue(o);
        !l.hasAnimated && l.set(i);
      } else
        e.addValue(
          o,
          Sr((r = e.getStaticValue(o)) !== null && r !== void 0 ? r : i)
        );
  }
  for (var o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
var $0 = function (e) {
    var t = e.treeType,
      n = t === void 0 ? "" : t,
      r = e.build,
      o = e.getBaseTarget,
      i = e.makeTargetAnimatable,
      a = e.measureViewportBox,
      l = e.render,
      u = e.readValueFromInstance,
      s = e.removeValueFromRenderState,
      c = e.sortNodePosition,
      d = e.scrapeMotionValuesFromProps;
    return function (f, p) {
      var v = f.parent,
        g = f.props,
        w = f.presenceId,
        m = f.blockInitialAnimation,
        h = f.visualState,
        y = f.shouldReduceMotion;
      p === void 0 && (p = {});
      var S = !1,
        x = h.latestValues,
        _ = h.renderState,
        E,
        P = D5(),
        R = new Map(),
        L = new Map(),
        z = {},
        W = O({}, x),
        ee;
      function ue() {
        !E || !S || (Ae(), l(E, _, g.style, $.projection));
      }
      function Ae() {
        r($, _, x, p, g);
      }
      function Qe() {
        P.notifyUpdate(x);
      }
      function we(M, V) {
        var te = V.onChange(function (Ho) {
            (x[M] = Ho), g.onUpdate && Ct.update(Qe, !1, !0);
          }),
          vt = V.onRenderRequest($.scheduleRender);
        L.set(M, function () {
          te(), vt();
        });
      }
      var N = d(g);
      for (var I in N) {
        var j = N[I];
        x[I] !== void 0 && It(j) && j.set(x[I], !1);
      }
      var K = ll(g),
        b = Mm(g),
        $ = O(
          O(
            {
              treeType: n,
              current: null,
              depth: v ? v.depth + 1 : 0,
              parent: v,
              children: new Set(),
              presenceId: w,
              shouldReduceMotion: y,
              variantChildren: b ? new Set() : void 0,
              isVisible: void 0,
              manuallyAnimateOnMount: Boolean(
                v == null ? void 0 : v.isMounted()
              ),
              blockInitialAnimation: m,
              isMounted: function () {
                return Boolean(E);
              },
              mount: function (M) {
                (S = !0),
                  (E = $.current = M),
                  $.projection && $.projection.mount(M),
                  b &&
                    v &&
                    !K &&
                    (ee = v == null ? void 0 : v.addVariantChild($)),
                  R.forEach(function (V, te) {
                    return we(te, V);
                  }),
                  v == null || v.children.add($),
                  $.setProps(g);
              },
              unmount: function () {
                var M;
                (M = $.projection) === null || M === void 0 || M.unmount(),
                  gr.update(Qe),
                  gr.render(ue),
                  L.forEach(function (V) {
                    return V();
                  }),
                  ee == null || ee(),
                  v == null || v.children.delete($),
                  P.clearAllListeners(),
                  (E = void 0),
                  (S = !1);
              },
              addVariantChild: function (M) {
                var V,
                  te = $.getClosestVariantNode();
                if (te)
                  return (
                    (V = te.variantChildren) === null ||
                      V === void 0 ||
                      V.add(M),
                    function () {
                      return te.variantChildren.delete(M);
                    }
                  );
              },
              sortNodePosition: function (M) {
                return !c || n !== M.treeType
                  ? 0
                  : c($.getInstance(), M.getInstance());
              },
              getClosestVariantNode: function () {
                return b ? $ : v == null ? void 0 : v.getClosestVariantNode();
              },
              getLayoutId: function () {
                return g.layoutId;
              },
              getInstance: function () {
                return E;
              },
              getStaticValue: function (M) {
                return x[M];
              },
              setStaticValue: function (M, V) {
                return (x[M] = V);
              },
              getLatestValues: function () {
                return x;
              },
              setVisibility: function (M) {
                $.isVisible !== M && (($.isVisible = M), $.scheduleRender());
              },
              makeTargetAnimatable: function (M, V) {
                return V === void 0 && (V = !0), i($, M, g, V);
              },
              measureViewportBox: function () {
                return a(E, g);
              },
              addValue: function (M, V) {
                $.hasValue(M) && $.removeValue(M),
                  R.set(M, V),
                  (x[M] = V.get()),
                  we(M, V);
              },
              removeValue: function (M) {
                var V;
                R.delete(M),
                  (V = L.get(M)) === null || V === void 0 || V(),
                  L.delete(M),
                  delete x[M],
                  s(M, _);
              },
              hasValue: function (M) {
                return R.has(M);
              },
              getValue: function (M, V) {
                var te = R.get(M);
                return (
                  te === void 0 &&
                    V !== void 0 &&
                    ((te = Sr(V)), $.addValue(M, te)),
                  te
                );
              },
              forEachValue: function (M) {
                return R.forEach(M);
              },
              readValue: function (M) {
                var V;
                return (V = x[M]) !== null && V !== void 0 ? V : u(E, M, p);
              },
              setBaseTarget: function (M, V) {
                W[M] = V;
              },
              getBaseTarget: function (M) {
                if (o) {
                  var V = o(g, M);
                  if (V !== void 0 && !It(V)) return V;
                }
                return W[M];
              },
            },
            P
          ),
          {
            build: function () {
              return Ae(), _;
            },
            scheduleRender: function () {
              Ct.render(ue, !1, !0);
            },
            syncRender: ue,
            setProps: function (M) {
              (M.transformTemplate || g.transformTemplate) &&
                $.scheduleRender(),
                (g = M),
                P.updatePropListeners(M),
                (z = I5($, d(g), z));
            },
            getProps: function () {
              return g;
            },
            getVariant: function (M) {
              var V;
              return (V = g.variants) === null || V === void 0 ? void 0 : V[M];
            },
            getDefaultTransition: function () {
              return g.transition;
            },
            getTransformPagePoint: function () {
              return g.transformPagePoint;
            },
            getVariantContext: function (M) {
              if ((M === void 0 && (M = !1), M))
                return v == null ? void 0 : v.getVariantContext();
              if (!K) {
                var V = (v == null ? void 0 : v.getVariantContext()) || {};
                return g.initial !== void 0 && (V.initial = g.initial), V;
              }
              for (var te = {}, vt = 0; vt < j5; vt++) {
                var Ho = b0[vt],
                  pl = g[Ho];
                (lt(pl) || pl === !1) && (te[Ho] = pl);
              }
              return te;
            },
          }
        );
      return $;
    };
  },
  b0 = Et(["initial"], pe(Gc), !1),
  j5 = b0.length;
function ys(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var U0 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function z5(e) {
  var t = U0.exec(e);
  if (!t) return [,];
  var n = pe(t, 3),
    r = n[1],
    o = n[2];
  return [r, o];
}
function gs(e, t, n) {
  var r = pe(z5(e), 2),
    o = r[0],
    i = r[1];
  if (!!o) {
    var a = window.getComputedStyle(t).getPropertyValue(o);
    return a ? a.trim() : ys(i) ? gs(i, t) : i;
  }
}
function F5(e, t, n) {
  var r,
    o = nt(t, []),
    i = e.getInstance();
  if (!(i instanceof Element)) return { target: o, transitionEnd: n };
  n && (n = O({}, n)),
    e.forEachValue(function (s) {
      var c = s.get();
      if (!!ys(c)) {
        var d = gs(c, i);
        d && s.set(d);
      }
    });
  for (var a in o) {
    var l = o[a];
    if (!!ys(l)) {
      var u = gs(l, i);
      !u ||
        ((o[a] = u),
        n && (((r = n[a]) !== null && r !== void 0) || (n[a] = l)));
    }
  }
  return { target: o, transitionEnd: n };
}
var $5 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
  ]),
  B0 = function (e) {
    return $5.has(e);
  },
  b5 = function (e) {
    return Object.keys(e).some(B0);
  },
  H0 = function (e, t) {
    e.set(t, !1), e.set(t);
  },
  pp = function (e) {
    return e === jn || e === D;
  },
  vp;
(function (e) {
  (e.width = "width"),
    (e.height = "height"),
    (e.left = "left"),
    (e.right = "right"),
    (e.top = "top"),
    (e.bottom = "bottom");
})(vp || (vp = {}));
var hp = function (e, t) {
    return parseFloat(e.split(", ")[t]);
  },
  mp = function (e, t) {
    return function (n, r) {
      var o = r.transform;
      if (o === "none" || !o) return 0;
      var i = o.match(/^matrix3d\((.+)\)$/);
      if (i) return hp(i[1], t);
      var a = o.match(/^matrix\((.+)\)$/);
      return a ? hp(a[1], e) : 0;
    };
  },
  U5 = new Set(["x", "y", "z"]),
  B5 = ko.filter(function (e) {
    return !U5.has(e);
  });
function H5(e) {
  var t = [];
  return (
    B5.forEach(function (n) {
      var r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.syncRender(),
    t
  );
}
var yp = {
    width: function (e, t) {
      var n = e.x,
        r = t.paddingLeft,
        o = r === void 0 ? "0" : r,
        i = t.paddingRight,
        a = i === void 0 ? "0" : i;
      return n.max - n.min - parseFloat(o) - parseFloat(a);
    },
    height: function (e, t) {
      var n = e.y,
        r = t.paddingTop,
        o = r === void 0 ? "0" : r,
        i = t.paddingBottom,
        a = i === void 0 ? "0" : i;
      return n.max - n.min - parseFloat(o) - parseFloat(a);
    },
    top: function (e, t) {
      var n = t.top;
      return parseFloat(n);
    },
    left: function (e, t) {
      var n = t.left;
      return parseFloat(n);
    },
    bottom: function (e, t) {
      var n = e.y,
        r = t.top;
      return parseFloat(r) + (n.max - n.min);
    },
    right: function (e, t) {
      var n = e.x,
        r = t.left;
      return parseFloat(r) + (n.max - n.min);
    },
    x: mp(4, 13),
    y: mp(5, 14),
  },
  W5 = function (e, t, n) {
    var r = t.measureViewportBox(),
      o = t.getInstance(),
      i = getComputedStyle(o),
      a = i.display,
      l = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach(function (s) {
        l[s] = yp[s](r, i);
      }),
      t.syncRender();
    var u = t.measureViewportBox();
    return (
      n.forEach(function (s) {
        var c = t.getValue(s);
        H0(c, l[s]), (e[s] = yp[s](u, i));
      }),
      e
    );
  },
  K5 = function (e, t, n, r) {
    n === void 0 && (n = {}),
      r === void 0 && (r = {}),
      (t = O({}, t)),
      (r = O({}, r));
    var o = Object.keys(t).filter(B0),
      i = [],
      a = !1,
      l = [];
    if (
      (o.forEach(function (c) {
        var d = e.getValue(c);
        if (!!e.hasValue(c)) {
          var f = n[c],
            p = Dr(f),
            v = t[c],
            g;
          if (Ro(v)) {
            var w = v.length,
              m = v[0] === null ? 1 : 0;
            (f = v[m]), (p = Dr(f));
            for (var h = m; h < w; h++) g ? ua(Dr(v[h]) === g) : (g = Dr(v[h]));
          } else g = Dr(v);
          if (p !== g)
            if (pp(p) && pp(g)) {
              var y = d.get();
              typeof y == "string" && d.set(parseFloat(y)),
                typeof v == "string"
                  ? (t[c] = parseFloat(v))
                  : Array.isArray(v) && g === D && (t[c] = v.map(parseFloat));
            } else
              (p == null ? void 0 : p.transform) &&
              (g == null ? void 0 : g.transform) &&
              (f === 0 || v === 0)
                ? f === 0
                  ? d.set(g.transform(f))
                  : (t[c] = p.transform(v))
                : (a || ((i = H5(e)), (a = !0)),
                  l.push(c),
                  (r[c] = r[c] !== void 0 ? r[c] : t[c]),
                  H0(d, v));
        }
      }),
      l.length)
    ) {
      var u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        s = W5(t, e, l);
      return (
        i.length &&
          i.forEach(function (c) {
            var d = pe(c, 2),
              f = d[0],
              p = d[1];
            e.getValue(f).set(p);
          }),
        e.syncRender(),
        u !== null && window.scrollTo({ top: u }),
        { target: s, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Q5(e, t, n, r) {
  return b5(t) ? K5(e, t, n, r) : { target: t, transitionEnd: r };
}
var G5 = function (e, t, n, r) {
  var o = F5(e, t, r);
  return (t = o.target), (r = o.transitionEnd), Q5(e, t, n, r);
};
function Y5(e) {
  return window.getComputedStyle(e);
}
var W0 = {
    treeType: "dom",
    readValueFromInstance: function (e, t) {
      if ($o(t)) {
        var n = Uc(t);
        return (n && n.default) || 0;
      } else {
        var r = Y5(e);
        return (Dm(t) ? r.getPropertyValue(t) : r[t]) || 0;
      }
    },
    sortNodePosition: function (e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    },
    getBaseTarget: function (e, t) {
      var n;
      return (n = e.style) === null || n === void 0 ? void 0 : n[t];
    },
    measureViewportBox: function (e, t) {
      var n = t.transformPagePoint;
      return F0(e, n);
    },
    resetTransform: function (e, t, n) {
      var r = n.transformTemplate;
      (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
    },
    restoreTransform: function (e, t) {
      e.style.transform = t.style.transform;
    },
    removeValueFromRenderState: function (e, t) {
      var n = t.vars,
        r = t.style;
      delete n[e], delete r[e];
    },
    makeTargetAnimatable: function (e, t, n, r) {
      var o = n.transformValues;
      r === void 0 && (r = !0);
      var i = t.transition,
        a = t.transitionEnd,
        l = nt(t, ["transition", "transitionEnd"]),
        u = n5(l, i || {}, e);
      if ((o && (a && (a = o(a)), l && (l = o(l)), u && (u = o(u))), r)) {
        e5(e, l, u);
        var s = G5(e, l, u, a);
        (a = s.transitionEnd), (l = s.target);
      }
      return O({ transition: i, transitionEnd: a }, l);
    },
    scrapeMotionValuesFromProps: Ac,
    build: function (e, t, n, r, o) {
      e.isVisible !== void 0 &&
        (t.style.visibility = e.isVisible ? "visible" : "hidden"),
        Mc(t, n, r, o.transformTemplate);
    },
    render: Gm,
  },
  X5 = $0(W0),
  Z5 = $0(
    O(O({}, W0), {
      getBaseTarget: function (e, t) {
        return e[t];
      },
      readValueFromInstance: function (e, t) {
        var n;
        return $o(t)
          ? ((n = Uc(t)) === null || n === void 0 ? void 0 : n.default) || 0
          : ((t = Ym.has(t) ? t : Qm(t)), e.getAttribute(t));
      },
      scrapeMotionValuesFromProps: Zm,
      build: function (e, t, n, r, o) {
        Nc(t, n, r, o.transformTemplate);
      },
      render: Xm,
    })
  ),
  J5 = function (e, t) {
    return Oc(e)
      ? Z5(t, { enableHardwareAcceleration: !1 })
      : X5(t, { enableHardwareAcceleration: !0 });
  };
function gp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Ir = {
    correct: function (e, t) {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      var n = gp(e, t.target.x),
        r = gp(e, t.target.y);
      return "".concat(n, "% ").concat(r, "%");
    },
  },
  Sp = "_$css",
  q5 = {
    correct: function (e, t) {
      var n = t.treeScale,
        r = t.projectionDelta,
        o = e,
        i = e.includes("var("),
        a = [];
      i &&
        (e = e.replace(U0, function (g) {
          return a.push(g), Sp;
        }));
      var l = jt.parse(e);
      if (l.length > 5) return o;
      var u = jt.createTransformer(e),
        s = typeof l[0] != "number" ? 1 : 0,
        c = r.x.scale * n.x,
        d = r.y.scale * n.y;
      (l[0 + s] /= c), (l[1 + s] /= d);
      var f = ae(c, d, 0.5);
      typeof l[2 + s] == "number" && (l[2 + s] /= f),
        typeof l[3 + s] == "number" && (l[3 + s] /= f);
      var p = u(l);
      if (i) {
        var v = 0;
        p = p.replace(Sp, function () {
          var g = a[v];
          return v++, g;
        });
      }
      return p;
    },
  },
  ex = (function (e) {
    Pm(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.componentDidMount = function () {
        var n = this,
          r = this.props,
          o = r.visualElement,
          i = r.layoutGroup,
          a = r.switchLayoutGroup,
          l = r.layoutId,
          u = o.projection;
        P4(nx),
          u &&
            (i != null && i.group && i.group.add(u),
            (a == null ? void 0 : a.register) && l && a.register(u),
            u.root.didUpdate(),
            u.addEventListener("animationComplete", function () {
              n.safeToRemove();
            }),
            u.setOptions(
              O(O({}, u.options), {
                onExitComplete: function () {
                  return n.safeToRemove();
                },
              })
            )),
          (Zr.hasEverUpdated = !0);
      }),
      (t.prototype.getSnapshotBeforeUpdate = function (n) {
        var r = this,
          o = this.props,
          i = o.layoutDependency,
          a = o.visualElement,
          l = o.drag,
          u = o.isPresent,
          s = a.projection;
        return (
          s &&
            ((s.isPresent = u),
            l || n.layoutDependency !== i || i === void 0
              ? s.willUpdate()
              : this.safeToRemove(),
            n.isPresent !== u &&
              (u
                ? s.promote()
                : s.relegate() ||
                  Ct.postRender(function () {
                    var c;
                    (!((c = s.getStack()) === null || c === void 0) &&
                      c.members.length) ||
                      r.safeToRemove();
                  }))),
          null
        );
      }),
      (t.prototype.componentDidUpdate = function () {
        var n = this.props.visualElement.projection;
        n &&
          (n.root.didUpdate(),
          !n.currentAnimation && n.isLead() && this.safeToRemove());
      }),
      (t.prototype.componentWillUnmount = function () {
        var n = this.props,
          r = n.visualElement,
          o = n.layoutGroup,
          i = n.switchLayoutGroup,
          a = r.projection;
        a &&
          (a.scheduleCheckAfterUnmount(),
          o != null && o.group && o.group.remove(a),
          i != null && i.deregister && i.deregister(a));
      }),
      (t.prototype.safeToRemove = function () {
        var n = this.props.safeToRemove;
        n == null || n();
      }),
      (t.prototype.render = function () {
        return null;
      }),
      t
    );
  })(ft.Component);
function tx(e) {
  var t = pe(R0(), 2),
    n = t[0],
    r = t[1],
    o = C.exports.useContext(Lm);
  return T(
    ex,
    Zc(
      {},
      O({}, e, {
        layoutGroup: o,
        switchLayoutGroup: C.exports.useContext(Nm),
        isPresent: n,
        safeToRemove: r,
      })
    )
  );
}
var nx = {
    borderRadius: O(O({}, Ir), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: Ir,
    borderTopRightRadius: Ir,
    borderBottomLeftRadius: Ir,
    borderBottomRightRadius: Ir,
    boxShadow: q5,
  },
  rx = { measureLayout: tx };
function ox(e, t, n) {
  n === void 0 && (n = {});
  var r = It(e) ? e : Sr(e);
  return (
    Wc("", r, t, n),
    {
      stop: function () {
        return r.stop();
      },
      isAnimating: function () {
        return r.isAnimating();
      },
    }
  );
}
var K0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ix = K0.length,
  wp = function (e) {
    return typeof e == "string" ? parseFloat(e) : e;
  },
  xp = function (e) {
    return typeof e == "number" || D.test(e);
  };
function ax(e, t, n, r, o, i) {
  var a, l, u, s;
  o
    ? ((e.opacity = ae(
        0,
        (a = n.opacity) !== null && a !== void 0 ? a : 1,
        lx(r)
      )),
      (e.opacityExit = ae(
        (l = t.opacity) !== null && l !== void 0 ? l : 1,
        0,
        ux(r)
      )))
    : i &&
      (e.opacity = ae(
        (u = t.opacity) !== null && u !== void 0 ? u : 1,
        (s = n.opacity) !== null && s !== void 0 ? s : 1,
        r
      ));
  for (var c = 0; c < ix; c++) {
    var d = "border".concat(K0[c], "Radius"),
      f = Ep(t, d),
      p = Ep(n, d);
    if (!(f === void 0 && p === void 0)) {
      f || (f = 0), p || (p = 0);
      var v = f === 0 || p === 0 || xp(f) === xp(p);
      v
        ? ((e[d] = Math.max(ae(wp(f), wp(p), r), 0)),
          (Pt.test(p) || Pt.test(f)) && (e[d] += "%"))
        : (e[d] = p);
    }
  }
  (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
}
function Ep(e, t) {
  var n;
  return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius;
}
var lx = Q0(0, 0.5, $c),
  ux = Q0(0.5, 0.95, zc);
function Q0(e, t, n) {
  return function (r) {
    return r < e ? 0 : r > t ? 1 : n(Mo(e, t, r));
  };
}
function Pp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ot(e, t) {
  Pp(e.x, t.x), Pp(e.y, t.y);
}
function Cp(e, t, n, r, o) {
  return (
    (e -= t), (e = ya(e, 1 / n, r)), o !== void 0 && (e = ya(e, 1 / o, r)), e
  );
}
function sx(e, t, n, r, o, i, a) {
  if (
    (t === void 0 && (t = 0),
    n === void 0 && (n = 1),
    r === void 0 && (r = 0.5),
    i === void 0 && (i = e),
    a === void 0 && (a = e),
    Pt.test(t))
  ) {
    t = parseFloat(t);
    var l = ae(a.min, a.max, t / 100);
    t = l - a.min;
  }
  if (typeof t == "number") {
    var u = ae(i.min, i.max, r);
    e === i && (u -= t),
      (e.min = Cp(e.min, t, n, u, o)),
      (e.max = Cp(e.max, t, n, u, o));
  }
}
function _p(e, t, n, r, o) {
  var i = pe(n, 3),
    a = i[0],
    l = i[1],
    u = i[2];
  sx(e, t[a], t[l], t[u], t.scale, r, o);
}
var cx = ["x", "scaleX", "originX"],
  fx = ["y", "scaleY", "originY"];
function Tp(e, t, n, r) {
  _p(e.x, t, cx, n == null ? void 0 : n.x, r == null ? void 0 : r.x),
    _p(e.y, t, fx, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function kp(e) {
  return e.translate === 0 && e.scale === 1;
}
function G0(e) {
  return kp(e.x) && kp(e.y);
}
function Y0(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
var dx = (function () {
    function e() {
      this.members = [];
    }
    return (
      (e.prototype.add = function (t) {
        Kc(this.members, t), t.scheduleRender();
      }),
      (e.prototype.remove = function (t) {
        if (
          (Qc(this.members, t),
          t === this.prevLead && (this.prevLead = void 0),
          t === this.lead)
        ) {
          var n = this.members[this.members.length - 1];
          n && this.promote(n);
        }
      }),
      (e.prototype.relegate = function (t) {
        var n = this.members.findIndex(function (a) {
          return t === a;
        });
        if (n === 0) return !1;
        for (var r, o = n; o >= 0; o--) {
          var i = this.members[o];
          if (i.isPresent !== !1) {
            r = i;
            break;
          }
        }
        return r ? (this.promote(r), !0) : !1;
      }),
      (e.prototype.promote = function (t, n) {
        var r,
          o = this.lead;
        if (t !== o && ((this.prevLead = o), (this.lead = t), t.show(), o)) {
          o.instance && o.scheduleRender(),
            t.scheduleRender(),
            (t.resumeFrom = o),
            n && (t.resumeFrom.preserveOpacity = !0),
            o.snapshot &&
              ((t.snapshot = o.snapshot),
              (t.snapshot.latestValues = o.animationValues || o.latestValues),
              (t.snapshot.isShared = !0)),
            !((r = t.root) === null || r === void 0) &&
              r.isUpdating &&
              (t.isLayoutDirty = !0);
          var i = t.options.crossfade;
          i === !1 && o.hide();
        }
      }),
      (e.prototype.exitAnimationComplete = function () {
        this.members.forEach(function (t) {
          var n, r, o, i, a;
          (r = (n = t.options).onExitComplete) === null ||
            r === void 0 ||
            r.call(n),
            (a =
              (o = t.resumingFrom) === null || o === void 0
                ? void 0
                : (i = o.options).onExitComplete) === null ||
              a === void 0 ||
              a.call(i);
        });
      }),
      (e.prototype.scheduleRender = function () {
        this.members.forEach(function (t) {
          t.instance && t.scheduleRender(!1);
        });
      }),
      (e.prototype.removeLeadSnapshot = function () {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }),
      e
    );
  })(),
  px = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function Op(e, t, n) {
  var r = e.x.translate / t.x,
    o = e.y.translate / t.y,
    i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
  if (((i += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n)) {
    var a = n.rotate,
      l = n.rotateX,
      u = n.rotateY;
    a && (i += "rotate(".concat(a, "deg) ")),
      l && (i += "rotateX(".concat(l, "deg) ")),
      u && (i += "rotateY(".concat(u, "deg) "));
  }
  var s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (i += "scale(".concat(s, ", ").concat(c, ")")), i === px ? "none" : i;
}
var vx = function (e, t) {
    return e.depth - t.depth;
  },
  hx = (function () {
    function e() {
      (this.children = []), (this.isDirty = !1);
    }
    return (
      (e.prototype.add = function (t) {
        Kc(this.children, t), (this.isDirty = !0);
      }),
      (e.prototype.remove = function (t) {
        Qc(this.children, t), (this.isDirty = !0);
      }),
      (e.prototype.forEach = function (t) {
        this.isDirty && this.children.sort(vx),
          (this.isDirty = !1),
          this.children.forEach(t);
      }),
      e
    );
  })(),
  Rp = 1e3;
function X0(e) {
  var t = e.attachResizeListener,
    n = e.defaultParent,
    r = e.measureScroll,
    o = e.checkIsScrollRoot,
    i = e.resetTransform;
  return (function () {
    function a(l, u, s) {
      var c = this;
      u === void 0 && (u = {}),
        s === void 0 && (s = n == null ? void 0 : n()),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = function () {
          c.isUpdating && ((c.isUpdating = !1), c.clearAllSnapshots());
        }),
        (this.updateProjection = function () {
          c.nodes.forEach(xx), c.nodes.forEach(Ex);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.id = l),
        (this.latestValues = u),
        (this.root = s ? s.root || s : this),
        (this.path = s ? Et(Et([], pe(s.path), !1), [s], !1) : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0),
        l && this.root.registerPotentialNode(l, this);
      for (var d = 0; d < this.path.length; d++)
        this.path[d].shouldResetTransform = !0;
      this.root === this && (this.nodes = new hx());
    }
    return (
      (a.prototype.addEventListener = function (l, u) {
        return (
          this.eventHandlers.has(l) || this.eventHandlers.set(l, new eo()),
          this.eventHandlers.get(l).add(u)
        );
      }),
      (a.prototype.notifyListeners = function (l) {
        for (var u = [], s = 1; s < arguments.length; s++)
          u[s - 1] = arguments[s];
        var c = this.eventHandlers.get(l);
        c == null || c.notify.apply(c, Et([], pe(u), !1));
      }),
      (a.prototype.hasListeners = function (l) {
        return this.eventHandlers.has(l);
      }),
      (a.prototype.registerPotentialNode = function (l, u) {
        this.potentialNodes.set(l, u);
      }),
      (a.prototype.mount = function (l, u) {
        var s = this,
          c;
        if ((u === void 0 && (u = !1), !this.instance)) {
          (this.isSVG = l instanceof SVGElement && l.tagName !== "svg"),
            (this.instance = l);
          var d = this.options,
            f = d.layoutId,
            p = d.layout,
            v = d.visualElement;
          if (
            (v && !v.getInstance() && v.mount(l),
            this.root.nodes.add(this),
            (c = this.parent) === null || c === void 0 || c.children.add(this),
            this.id && this.root.potentialNodes.delete(this.id),
            u && (p || f) && (this.isLayoutDirty = !0),
            t)
          ) {
            var g,
              w = function () {
                return (s.root.updateBlockedByResize = !1);
              };
            t(l, function () {
              (s.root.updateBlockedByResize = !0),
                clearTimeout(g),
                (g = window.setTimeout(w, 250)),
                Zr.hasAnimatedSinceResize &&
                  ((Zr.hasAnimatedSinceResize = !1), s.nodes.forEach(wx));
            });
          }
          f && this.root.registerSharedNode(f, this),
            this.options.animate !== !1 &&
              v &&
              (f || p) &&
              this.addEventListener("didUpdate", function (m) {
                var h,
                  y,
                  S,
                  x,
                  _,
                  E = m.delta,
                  P = m.hasLayoutChanged,
                  R = m.hasRelativeTargetChanged,
                  L = m.layout;
                if (s.isTreeAnimationBlocked()) {
                  (s.target = void 0), (s.relativeTarget = void 0);
                  return;
                }
                var z =
                    (y =
                      (h = s.options.transition) !== null && h !== void 0
                        ? h
                        : v.getDefaultTransition()) !== null && y !== void 0
                      ? y
                      : kx,
                  W = v.getProps(),
                  ee = W.onLayoutAnimationStart,
                  ue = W.onLayoutAnimationComplete,
                  Ae = !s.targetLayout || !Y0(s.targetLayout, L) || R,
                  Qe = !P && R;
                if (
                  ((S = s.resumeFrom) === null || S === void 0
                    ? void 0
                    : S.instance) ||
                  Qe ||
                  (P && (Ae || !s.currentAnimation))
                ) {
                  s.resumeFrom &&
                    ((s.resumingFrom = s.resumeFrom),
                    (s.resumingFrom.resumingFrom = void 0)),
                    s.setAnimationOrigin(E, Qe);
                  var we = O(O({}, Hc(z, "layout")), {
                    onPlay: ee,
                    onComplete: ue,
                  });
                  v.shouldReduceMotion && ((we.delay = 0), (we.type = !1)),
                    s.startAnimation(we);
                } else !P && s.animationProgress === 0 && s.finishAnimation(), s.isLead() && ((_ = (x = s.options).onExitComplete) === null || _ === void 0 || _.call(x));
                s.targetLayout = L;
              });
        }
      }),
      (a.prototype.unmount = function () {
        var l, u;
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this),
          (l = this.getStack()) === null || l === void 0 || l.remove(this),
          (u = this.parent) === null || u === void 0 || u.children.delete(this),
          (this.instance = void 0),
          gr.preRender(this.updateProjection);
      }),
      (a.prototype.blockUpdate = function () {
        this.updateManuallyBlocked = !0;
      }),
      (a.prototype.unblockUpdate = function () {
        this.updateManuallyBlocked = !1;
      }),
      (a.prototype.isUpdateBlocked = function () {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }),
      (a.prototype.isTreeAnimationBlocked = function () {
        var l;
        return (
          this.isAnimationBlocked ||
          ((l = this.parent) === null || l === void 0
            ? void 0
            : l.isTreeAnimationBlocked()) ||
          !1
        );
      }),
      (a.prototype.startUpdate = function () {
        var l;
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          (l = this.nodes) === null || l === void 0 || l.forEach(Px));
      }),
      (a.prototype.willUpdate = function (l) {
        var u, s, c;
        if ((l === void 0 && (l = !0), this.root.isUpdateBlocked())) {
          (s = (u = this.options).onExitComplete) === null ||
            s === void 0 ||
            s.call(u);
          return;
        }
        if (
          (!this.root.isUpdating && this.root.startUpdate(),
          !this.isLayoutDirty)
        ) {
          this.isLayoutDirty = !0;
          for (var d = 0; d < this.path.length; d++) {
            var f = this.path[d];
            (f.shouldResetTransform = !0), f.updateScroll();
          }
          var p = this.options,
            v = p.layoutId,
            g = p.layout;
          if (!(v === void 0 && !g)) {
            var w =
              (c = this.options.visualElement) === null || c === void 0
                ? void 0
                : c.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              w == null ? void 0 : w(this.latestValues, "")),
              this.updateSnapshot(),
              l && this.notifyListeners("willUpdate");
          }
        }
      }),
      (a.prototype.didUpdate = function () {
        var l = this.isUpdateBlocked();
        if (l) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(Mp);
          return;
        }
        !this.isUpdating ||
          ((this.isUpdating = !1),
          this.potentialNodes.size &&
            (this.potentialNodes.forEach(Ox), this.potentialNodes.clear()),
          this.nodes.forEach(Sx),
          this.nodes.forEach(mx),
          this.nodes.forEach(yx),
          this.clearAllSnapshots(),
          Yl.update(),
          Yl.preRender(),
          Yl.render());
      }),
      (a.prototype.clearAllSnapshots = function () {
        this.nodes.forEach(gx), this.sharedNodes.forEach(Cx);
      }),
      (a.prototype.scheduleUpdateProjection = function () {
        Ct.preRender(this.updateProjection, !1, !0);
      }),
      (a.prototype.scheduleCheckAfterUnmount = function () {
        var l = this;
        Ct.postRender(function () {
          l.isLayoutDirty ? l.root.didUpdate() : l.root.checkUpdateFailed();
        });
      }),
      (a.prototype.updateSnapshot = function () {
        if (!(this.snapshot || !this.instance)) {
          var l = this.measure(),
            u = this.removeTransform(this.removeElementScroll(l));
          Vp(u), (this.snapshot = { measured: l, layout: u, latestValues: {} });
        }
      }),
      (a.prototype.updateLayout = function () {
        var l;
        if (
          !!this.instance &&
          (this.updateScroll(),
          !(
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty
          ))
        ) {
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (var u = 0; u < this.path.length; u++) {
              var s = this.path[u];
              s.updateScroll();
            }
          var c = this.measure();
          Vp(c);
          var d = this.layout;
          (this.layout = { measured: c, actual: this.removeElementScroll(c) }),
            (this.layoutCorrected = Pe()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.actual),
            (l = this.options.visualElement) === null ||
              l === void 0 ||
              l.notifyLayoutMeasure(
                this.layout.actual,
                d == null ? void 0 : d.actual
              );
        }
      }),
      (a.prototype.updateScroll = function () {
        this.options.layoutScroll &&
          this.instance &&
          ((this.isScrollRoot = o(this.instance)),
          (this.scroll = r(this.instance)));
      }),
      (a.prototype.resetTransform = function () {
        var l;
        if (!!i) {
          var u = this.isLayoutDirty || this.shouldResetTransform,
            s = this.projectionDelta && !G0(this.projectionDelta),
            c =
              (l = this.options.visualElement) === null || l === void 0
                ? void 0
                : l.getProps().transformTemplate,
            d = c == null ? void 0 : c(this.latestValues, ""),
            f = d !== this.prevTransformTemplateValue;
          u &&
            (s || Ut(this.latestValues) || f) &&
            (i(this.instance, d),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
      }),
      (a.prototype.measure = function () {
        var l = this.options.visualElement;
        if (!l) return Pe();
        var u = l.measureViewportBox(),
          s = this.root.scroll;
        return s && (Wt(u.x, s.x), Wt(u.y, s.y)), u;
      }),
      (a.prototype.removeElementScroll = function (l) {
        var u = Pe();
        ot(u, l);
        for (var s = 0; s < this.path.length; s++) {
          var c = this.path[s],
            d = c.scroll,
            f = c.options,
            p = c.isScrollRoot;
          if (c !== this.root && d && f.layoutScroll) {
            if (p) {
              ot(u, l);
              var v = this.root.scroll;
              v && (Wt(u.x, -v.x), Wt(u.y, -v.y));
            }
            Wt(u.x, d.x), Wt(u.y, d.y);
          }
        }
        return u;
      }),
      (a.prototype.applyTransform = function (l, u) {
        u === void 0 && (u = !1);
        var s = Pe();
        ot(s, l);
        for (var c = 0; c < this.path.length; c++) {
          var d = this.path[c];
          !u &&
            d.options.layoutScroll &&
            d.scroll &&
            d !== d.root &&
            qn(s, { x: -d.scroll.x, y: -d.scroll.y }),
            Ut(d.latestValues) && qn(s, d.latestValues);
        }
        return Ut(this.latestValues) && qn(s, this.latestValues), s;
      }),
      (a.prototype.removeTransform = function (l) {
        var u,
          s = Pe();
        ot(s, l);
        for (var c = 0; c < this.path.length; c++) {
          var d = this.path[c];
          if (!!d.instance && !!Ut(d.latestValues)) {
            j0(d.latestValues) && d.updateSnapshot();
            var f = Pe(),
              p = d.measure();
            ot(f, p),
              Tp(
                s,
                d.latestValues,
                (u = d.snapshot) === null || u === void 0 ? void 0 : u.layout,
                f
              );
          }
        }
        return Ut(this.latestValues) && Tp(s, this.latestValues), s;
      }),
      (a.prototype.setTargetDelta = function (l) {
        (this.targetDelta = l), this.root.scheduleUpdateProjection();
      }),
      (a.prototype.setOptions = function (l) {
        var u;
        this.options = O(O(O({}, this.options), l), {
          crossfade: (u = l.crossfade) !== null && u !== void 0 ? u : !0,
        });
      }),
      (a.prototype.clearMeasurements = function () {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }),
      (a.prototype.resolveTargetDelta = function () {
        var l,
          u = this.options,
          s = u.layout,
          c = u.layoutId;
        !this.layout ||
          !(s || c) ||
          (!this.targetDelta &&
            !this.relativeTarget &&
            ((this.relativeParent = this.getClosestProjectingParent()),
            this.relativeParent &&
              this.relativeParent.layout &&
              ((this.relativeTarget = Pe()),
              (this.relativeTargetOrigin = Pe()),
              no(
                this.relativeTargetOrigin,
                this.layout.actual,
                this.relativeParent.layout.actual
              ),
              ot(this.relativeTarget, this.relativeTargetOrigin))),
          !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = Pe()), (this.targetWithTransforms = Pe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            ((l = this.relativeParent) === null || l === void 0
              ? void 0
              : l.target)
              ? m5(this.target, this.relativeTarget, this.relativeParent.target)
              : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.actual))
                  : ot(this.target, this.layout.actual),
                z0(this.target, this.targetDelta))
              : ot(this.target, this.layout.actual),
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              (this.relativeParent = this.getClosestProjectingParent()),
              this.relativeParent &&
                Boolean(this.relativeParent.resumingFrom) ===
                  Boolean(this.resumingFrom) &&
                !this.relativeParent.options.layoutScroll &&
                this.relativeParent.target &&
                ((this.relativeTarget = Pe()),
                (this.relativeTargetOrigin = Pe()),
                no(
                  this.relativeTargetOrigin,
                  this.target,
                  this.relativeParent.target
                ),
                ot(this.relativeTarget, this.relativeTargetOrigin)))));
      }),
      (a.prototype.getClosestProjectingParent = function () {
        if (!(!this.parent || Ut(this.parent.latestValues)))
          return (this.parent.relativeTarget || this.parent.targetDelta) &&
            this.parent.layout
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }),
      (a.prototype.calcProjection = function () {
        var l,
          u = this.options,
          s = u.layout,
          c = u.layoutId;
        if (
          ((this.isTreeAnimating = Boolean(
            ((l = this.parent) === null || l === void 0
              ? void 0
              : l.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !(!this.layout || !(s || c)))
        ) {
          var d = this.getLead();
          ot(this.layoutCorrected, this.layout.actual),
            _5(
              this.layoutCorrected,
              this.treeScale,
              this.path,
              Boolean(this.resumingFrom) || this !== d
            );
          var f = d.target;
          if (!!f) {
            this.projectionDelta ||
              ((this.projectionDelta = ro()),
              (this.projectionDeltaWithTransform = ro()));
            var p = this.treeScale.x,
              v = this.treeScale.y,
              g = this.projectionTransform;
            to(
              this.projectionDelta,
              this.layoutCorrected,
              f,
              this.latestValues
            ),
              (this.projectionTransform = Op(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== g ||
                this.treeScale.x !== p ||
                this.treeScale.y !== v) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", f));
          }
        }
      }),
      (a.prototype.hide = function () {
        this.isVisible = !1;
      }),
      (a.prototype.show = function () {
        this.isVisible = !0;
      }),
      (a.prototype.scheduleRender = function (l) {
        var u, s, c;
        l === void 0 && (l = !0),
          (s = (u = this.options).scheduleRender) === null ||
            s === void 0 ||
            s.call(u),
          l &&
            ((c = this.getStack()) === null ||
              c === void 0 ||
              c.scheduleRender()),
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
      }),
      (a.prototype.setAnimationOrigin = function (l, u) {
        var s = this,
          c;
        u === void 0 && (u = !1);
        var d = this.snapshot,
          f = (d == null ? void 0 : d.latestValues) || {},
          p = O({}, this.latestValues),
          v = ro();
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !u);
        var g = Pe(),
          w = d == null ? void 0 : d.isShared,
          m =
            (((c = this.getStack()) === null || c === void 0
              ? void 0
              : c.members.length) || 0) <= 1,
          h = Boolean(
            w && !m && this.options.crossfade === !0 && !this.path.some(Tx)
          );
        (this.animationProgress = 0),
          (this.mixTargetDelta = function (y) {
            var S,
              x = y / 1e3;
            Lp(v.x, l.x, x),
              Lp(v.y, l.y, x),
              s.setTargetDelta(v),
              s.relativeTarget &&
                s.relativeTargetOrigin &&
                s.layout &&
                ((S = s.relativeParent) === null || S === void 0
                  ? void 0
                  : S.layout) &&
                (no(g, s.layout.actual, s.relativeParent.layout.actual),
                _x(s.relativeTarget, s.relativeTargetOrigin, g, x)),
              w && ((s.animationValues = p), ax(p, f, s.latestValues, x, h, m)),
              s.root.scheduleUpdateProjection(),
              s.scheduleRender(),
              (s.animationProgress = x);
          }),
          this.mixTargetDelta(0);
      }),
      (a.prototype.startAnimation = function (l) {
        var u = this,
          s,
          c;
        this.notifyListeners("animationStart"),
          (s = this.currentAnimation) === null || s === void 0 || s.stop(),
          this.resumingFrom &&
            ((c = this.resumingFrom.currentAnimation) === null ||
              c === void 0 ||
              c.stop()),
          this.pendingAnimation &&
            (gr.update(this.pendingAnimation),
            (this.pendingAnimation = void 0)),
          (this.pendingAnimation = Ct.update(function () {
            (Zr.hasAnimatedSinceResize = !0),
              (u.currentAnimation = ox(
                0,
                Rp,
                O(O({}, l), {
                  onUpdate: function (d) {
                    var f;
                    u.mixTargetDelta(d),
                      (f = l.onUpdate) === null || f === void 0 || f.call(l, d);
                  },
                  onComplete: function () {
                    var d;
                    (d = l.onComplete) === null || d === void 0 || d.call(l),
                      u.completeAnimation();
                  },
                })
              )),
              u.resumingFrom &&
                (u.resumingFrom.currentAnimation = u.currentAnimation),
              (u.pendingAnimation = void 0);
          }));
      }),
      (a.prototype.completeAnimation = function () {
        var l;
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0)),
          (l = this.getStack()) === null ||
            l === void 0 ||
            l.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }),
      (a.prototype.finishAnimation = function () {
        var l;
        this.currentAnimation &&
          ((l = this.mixTargetDelta) === null ||
            l === void 0 ||
            l.call(this, Rp),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }),
      (a.prototype.applyTransformsToTarget = function () {
        var l = this.getLead(),
          u = l.targetWithTransforms,
          s = l.target,
          c = l.layout,
          d = l.latestValues;
        !u ||
          !s ||
          !c ||
          (ot(u, s),
          qn(u, d),
          to(this.projectionDeltaWithTransform, this.layoutCorrected, u, d));
      }),
      (a.prototype.registerSharedNode = function (l, u) {
        var s, c, d;
        this.sharedNodes.has(l) || this.sharedNodes.set(l, new dx());
        var f = this.sharedNodes.get(l);
        f.add(u),
          u.promote({
            transition:
              (s = u.options.initialPromotionConfig) === null || s === void 0
                ? void 0
                : s.transition,
            preserveFollowOpacity:
              (d =
                (c = u.options.initialPromotionConfig) === null || c === void 0
                  ? void 0
                  : c.shouldPreserveFollowOpacity) === null || d === void 0
                ? void 0
                : d.call(c, u),
          });
      }),
      (a.prototype.isLead = function () {
        var l = this.getStack();
        return l ? l.lead === this : !0;
      }),
      (a.prototype.getLead = function () {
        var l,
          u = this.options.layoutId;
        return u
          ? ((l = this.getStack()) === null || l === void 0
              ? void 0
              : l.lead) || this
          : this;
      }),
      (a.prototype.getPrevLead = function () {
        var l,
          u = this.options.layoutId;
        return u
          ? (l = this.getStack()) === null || l === void 0
            ? void 0
            : l.prevLead
          : void 0;
      }),
      (a.prototype.getStack = function () {
        var l = this.options.layoutId;
        if (l) return this.root.sharedNodes.get(l);
      }),
      (a.prototype.promote = function (l) {
        var u = l === void 0 ? {} : l,
          s = u.needsReset,
          c = u.transition,
          d = u.preserveFollowOpacity,
          f = this.getStack();
        f && f.promote(this, d),
          s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          c && this.setOptions({ transition: c });
      }),
      (a.prototype.relegate = function () {
        var l = this.getStack();
        return l ? l.relegate(this) : !1;
      }),
      (a.prototype.resetRotation = function () {
        var l = this.options.visualElement;
        if (!!l) {
          for (var u = !1, s = {}, c = 0; c < rs.length; c++) {
            var d = rs[c],
              f = "rotate" + d;
            !l.getStaticValue(f) ||
              ((u = !0), (s[f] = l.getStaticValue(f)), l.setStaticValue(f, 0));
          }
          if (!!u) {
            l == null || l.syncRender();
            for (var f in s) l.setStaticValue(f, s[f]);
            l.scheduleRender();
          }
        }
      }),
      (a.prototype.getProjectionStyles = function (l) {
        var u, s, c, d, f, p;
        l === void 0 && (l = {});
        var v = {};
        if (!this.instance || this.isSVG) return v;
        if (this.isVisible) v.visibility = "";
        else return { visibility: "hidden" };
        var g =
          (u = this.options.visualElement) === null || u === void 0
            ? void 0
            : u.getProps().transformTemplate;
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (v.opacity = ""),
            (v.pointerEvents = ki(l.pointerEvents) || ""),
            (v.transform = g ? g(this.latestValues, "") : "none"),
            v
          );
        var w = this.getLead();
        if (!this.projectionDelta || !this.layout || !w.target) {
          var m = {};
          return (
            this.options.layoutId &&
              ((m.opacity =
                (s = this.latestValues.opacity) !== null && s !== void 0
                  ? s
                  : 1),
              (m.pointerEvents = ki(l.pointerEvents) || "")),
            this.hasProjected &&
              !Ut(this.latestValues) &&
              ((m.transform = g ? g({}, "") : "none"),
              (this.hasProjected = !1)),
            m
          );
        }
        var h = w.animationValues || w.latestValues;
        this.applyTransformsToTarget(),
          (v.transform = Op(
            this.projectionDeltaWithTransform,
            this.treeScale,
            h
          )),
          g && (v.transform = g(h, v.transform));
        var y = this.projectionDelta,
          S = y.x,
          x = y.y;
        (v.transformOrigin = ""
          .concat(S.origin * 100, "% ")
          .concat(x.origin * 100, "% 0")),
          w.animationValues
            ? (v.opacity =
                w === this
                  ? (d =
                      (c = h.opacity) !== null && c !== void 0
                        ? c
                        : this.latestValues.opacity) !== null && d !== void 0
                    ? d
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
            : (v.opacity =
                w === this
                  ? (f = h.opacity) !== null && f !== void 0
                    ? f
                    : ""
                  : (p = h.opacityExit) !== null && p !== void 0
                  ? p
                  : 0);
        for (var _ in sa)
          if (h[_] !== void 0) {
            var E = sa[_],
              P = E.correct,
              R = E.applyTo,
              L = P(h[_], w);
            if (R) for (var z = R.length, W = 0; W < z; W++) v[R[W]] = L;
            else v[_] = L;
          }
        return (
          this.options.layoutId &&
            (v.pointerEvents = w === this ? ki(l.pointerEvents) || "" : "none"),
          v
        );
      }),
      (a.prototype.clearSnapshot = function () {
        this.resumeFrom = this.snapshot = void 0;
      }),
      (a.prototype.resetTree = function () {
        this.root.nodes.forEach(function (l) {
          var u;
          return (u = l.currentAnimation) === null || u === void 0
            ? void 0
            : u.stop();
        }),
          this.root.nodes.forEach(Mp),
          this.root.sharedNodes.clear();
      }),
      a
    );
  })();
}
function mx(e) {
  e.updateLayout();
}
function yx(e) {
  var t,
    n,
    r,
    o,
    i =
      (n =
        (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !==
        null && n !== void 0
        ? n
        : e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    var a = e.layout,
      l = a.actual,
      u = a.measured;
    e.options.animationType === "size"
      ? yt(function (h) {
          var y = i.isShared ? i.measured[h] : i.layout[h],
            S = zt(y);
          (y.min = l[h].min), (y.max = y.min + S);
        })
      : e.options.animationType === "position" &&
        yt(function (h) {
          var y = i.isShared ? i.measured[h] : i.layout[h],
            S = zt(l[h]);
          y.max = y.min + S;
        });
    var s = ro();
    to(s, l, i.layout);
    var c = ro();
    i.isShared
      ? to(c, e.applyTransform(u, !0), i.measured)
      : to(c, l, i.layout);
    var d = !G0(s),
      f = !1;
    if (
      !e.resumeFrom &&
      ((e.relativeParent = e.getClosestProjectingParent()),
      e.relativeParent && !e.relativeParent.resumeFrom)
    ) {
      var p = e.relativeParent,
        v = p.snapshot,
        g = p.layout;
      if (v && g) {
        var w = Pe();
        no(w, i.layout, v.layout);
        var m = Pe();
        no(m, l, g.actual), Y0(w, m) || (f = !0);
      }
    }
    e.notifyListeners("didUpdate", {
      layout: l,
      snapshot: i,
      delta: c,
      layoutDelta: s,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: f,
    });
  } else
    e.isLead() &&
      ((o = (r = e.options).onExitComplete) === null ||
        o === void 0 ||
        o.call(r));
  e.options.transition = void 0;
}
function gx(e) {
  e.clearSnapshot();
}
function Mp(e) {
  e.clearMeasurements();
}
function Sx(e) {
  var t = e.options.visualElement;
  t != null &&
    t.getProps().onBeforeLayoutMeasure &&
    t.notifyBeforeLayoutMeasure(),
    e.resetTransform();
}
function wx(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function xx(e) {
  e.resolveTargetDelta();
}
function Ex(e) {
  e.calcProjection();
}
function Px(e) {
  e.resetRotation();
}
function Cx(e) {
  e.removeLeadSnapshot();
}
function Lp(e, t, n) {
  (e.translate = ae(t.translate, 0, n)),
    (e.scale = ae(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Np(e, t, n, r) {
  (e.min = ae(t.min, n.min, r)), (e.max = ae(t.max, n.max, r));
}
function _x(e, t, n, r) {
  Np(e.x, t.x, n.x, r), Np(e.y, t.y, n.y, r);
}
function Tx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var kx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function Ox(e, t) {
  for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
    if (Boolean(e.path[r].instance)) {
      n = e.path[r];
      break;
    }
  var o = n && n !== e.root ? n.instance : document,
    i = o.querySelector('[data-projection-id="'.concat(t, '"]'));
  i && e.mount(i, !0);
}
function Ap(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function Vp(e) {
  Ap(e.x), Ap(e.y);
}
var Rx = X0({
    attachResizeListener: function (e, t) {
      return sl(e, "resize", t);
    },
    measureScroll: function () {
      return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      };
    },
    checkIsScrollRoot: function () {
      return !0;
    },
  }),
  tu = { current: void 0 },
  Mx = X0({
    measureScroll: function (e) {
      return { x: e.scrollLeft, y: e.scrollTop };
    },
    defaultParent: function () {
      if (!tu.current) {
        var e = new Rx(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (tu.current = e);
      }
      return tu.current;
    },
    resetTransform: function (e, t) {
      e.style.transform = t != null ? t : "none";
    },
    checkIsScrollRoot: function (e) {
      return Boolean(window.getComputedStyle(e).position === "fixed");
    },
  }),
  Lx = O(O(O(O({}, p5), Rw), V5), rx),
  ga = x4(function (e, t) {
    return lS(e, t, Lx, J5, Mx);
  });
const Nx = () => {
  const e = Pr((i) => i.theme.value),
    [t, n] = C.exports.useState(!0),
    r = {
      visible: {
        opacity: 1,
        transition: { when: "beforeChildren", staggerChildren: 0.1 },
      },
      hidden: { opacity: 0, transition: { when: "afterChildren" } },
    },
    o = { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 100 } };
  return (
    C.exports.useEffect(() => {
      n(!!e);
    }, [e]),
    he("article", {
      className: t ? "about" : "about dark",
      children: [
        he("section", {
          className: t ? "firstSec" : "firstSec dark",
          children: [
            T("h4", {
              className: t ? "firstSec__title" : "firstSec__title dark",
              children: "\xBFQui\xE9n soy?",
            }),
            T("p", {
              className: e ? "firstSec__desc" : "firstSec__desc dark",
              children:
                "\xA1Hola! Soy Kevin, tengo 20 a\xF1os, soy un apasionado por la programaci\xF3n desde muy chico, actualmente me encuentro estudiando de forma autodidacta, d\xEDa tras d\xEDa sin parar, con la intenci\xF3n y motivaci\xF3n de poder ser muy bueno en lo que hago y poder ayudar a otros; tengo la capacidad y perseverancia para afrontar y seguir a trav\xE9s de cualquier aventura/problema que se me ponga en frente.",
            }),
            T("p", {
              className: e ? "firstSec__desc" : "firstSec__desc dark",
              children:
                "Voy a dar mi mejor intento tratando de solucionar cualquier inconveniente o problema por el cual est\xE9s/en cruzando utilizando todos mis recursos y capacidad para llegar a una soluci\xF3n que le/s satisfaga.",
            }),
          ],
        }),
        he("section", {
          className: t ? "secondSec" : "secondSec dark",
          children: [
            T("h4", {
              className: t ? "secondSec__title" : "secondSec__title dark",
              children: "Tecnolog\xEDas que utilizo",
            }),
            T("article", {
              children: T(yr.Provider, {
                value: { size: "3rem", className: "techIcon" },
                children: T(ga.ul, {
                  className: "tech__list",
                  initial: "hidden",
                  animate: "visible",
                  variants: r,
                  children: q3.tecnologias.map((i, a) =>
                    he(
                      ga.li,
                      {
                        variants: o,
                        className: e
                          ? "tech__list-item"
                          : "tech__list-item dark",
                        children: [
                          Z3[a],
                          T("h5", {
                            className: e ? "tech__title" : "tech__title dark",
                            children: i.title,
                          }),
                          T("div", {
                            className: "subTech",
                            children:
                              i.subTech &&
                              i.subTech.map((l, u) =>
                                T(
                                  "span",
                                  {
                                    className: e
                                      ? "subTech__desc"
                                      : "subTech__desc dark",
                                    children: l,
                                  },
                                  u
                                )
                              ),
                          }),
                        ],
                      },
                      a
                    )
                  ),
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
};
const Ax = [
  {
    title: "Weather App",
    demo: "https://weather-app-ecru-phi.vercel.app/",
    repo: "https://github.com/zycness/weather-app",
    subTech: ["JAVASCRIPT", "CSS3", "HTML5", "FETCH", "WEATHER API"],
  },
  {
    title: "To-do List",
    demo: "https://todo-list-swart-eight.vercel.app/",
    repo: "https://github.com/zycness/todo-list",
    subTech: ["JAVASCRIPT", "HTML5", "CSS3", "LOCALSTORAGE"],
  },
  {
    title: "Pel\xEDculas recomendadas",
    demo: "https://movie-searcher-mu.vercel.app/",
    repo: "https://github.com/zycness/movie-searcher",
    subTech: ["REACT.JS", "REDUX@TOOLKIT", "ROUTERV6", "HOOKS", "MANTINE UI"],
  },
];
var Vx = { proyectos: Ax };
const Dx = ({ proyectoData: e, image: t, darkLight: n }) => {
  const r = { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 100 } };
  return he(ga.li, {
    variants: r,
    className: n ? "proyectos__list-item" : "proyectos__list-item dark",
    children: [
      T("img", {
        src: t,
        alt: e.title,
        className: "proyectos__list-item__img",
      }),
      T("h5", {
        className: n
          ? "proyectos__list-item__title"
          : "proyectos__list-item__title dark",
        children: e.title,
      }),
      T("div", {
        className: "subTech__container",
        children: e.subTech.map((o, i) =>
          T(
            "span",
            {
              className: n ? "subTech__desc" : "subTech__desc dark",
              children: o,
            },
            i
          )
        ),
      }),
      he("div", {
        className: "secBtn__container",
        children: [
          T("button", {
            className: "secBtn",
            children: T("a", {
              href: e.demo,
              target: "_blank",
              rel: "noopener noreferrer",
              className: n ? "secBtn__link" : "secBtn__link dark",
              children: "DEMO",
            }),
          }),
          T("button", {
            className: "secBtn",
            children: T("a", {
              href: e.repo,
              target: "_blank",
              rel: "noopener noreferrer",
              className: n ? "secBtn__link" : "secBtn__link dark",
              children: "C\xD3DIGO",
            }),
          }),
        ],
      }),
    ],
  });
};
var Ix = "/assets/WeatherAPP.11d505d7.png",
  jx = "/assets/todoList.3ad10a7c.png",
  zx = "/assets/movieSearcher.4142e957.png",
  Fx = [Ix, jx, zx];
const Dp = () => {
  const e = Pr((o) => o.theme.value),
    [t, n] = C.exports.useState(!0);
  C.exports.useEffect(() => {
    n(!!e);
  }, [e]);
  const r = {
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
  };
  return he("article", {
    className: "proyectos",
    children: [
      T("h4", {
        className: e ? "proyectos__title" : "proyectos__title dark",
        children: "Estos son mis proyectos",
      }),
      T("p", {
        className: e ? "proyectos__desc" : "proyectos__desc dark",
        children:
          "Todos los proyectos fueron hechos a trav\xE9s de documentaci\xF3n, sin referencia visual alguna.",
      }),
      T(ga.ul, {
        className: "proyectos__list",
        initial: "hidden",
        animate: "visible",
        variants: r,
        children: Vx.proyectos.map((o, i) =>
          T(Dx, { proyectoData: o, image: Fx[i], darkLight: t }, i)
        ),
      }),
    ],
  });
};
const No = { _origin: "https://api.emailjs.com" },
  $x = (e, t = "https://api.emailjs.com") => {
    (No._userID = e), (No._origin = t);
  },
  Z0 = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Ip {
  constructor(t) {
    (this.status = t.status), (this.text = t.responseText);
  }
}
const J0 = (e, t, n = {}) =>
    new Promise((r, o) => {
      const i = new XMLHttpRequest();
      i.addEventListener("load", ({ target: a }) => {
        const l = new Ip(a);
        l.status === 200 || l.text === "OK" ? r(l) : o(l);
      }),
        i.addEventListener("error", ({ target: a }) => {
          o(new Ip(a));
        }),
        i.open("POST", No._origin + e, !0),
        Object.keys(n).forEach((a) => {
          i.setRequestHeader(a, n[a]);
        }),
        i.send(t);
    }),
  bx = (e, t, n, r) => {
    const o = r || No._userID;
    Z0(o, e, t);
    const i = {
      lib_version: "3.6.2",
      user_id: o,
      service_id: e,
      template_id: t,
      template_params: n,
    };
    return J0("/api/v1.0/email/send", JSON.stringify(i), {
      "Content-type": "application/json",
    });
  },
  Ux = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Bx = (e, t, n, r) => {
    const o = r || No._userID,
      i = Ux(n);
    Z0(o, e, t);
    const a = new FormData(i);
    return (
      a.append("lib_version", "3.6.2"),
      a.append("service_id", e),
      a.append("template_id", t),
      a.append("user_id", o),
      J0("/api/v1.0/email/send-form", a)
    );
  };
var Hx = { init: $x, send: bx, sendForm: Bx };
const Wx = () => {
    const e = Pr((c) => c.theme.value),
      [t, n] = C.exports.useState(null),
      [r, o] = C.exports.useState(null),
      i = C.exports.useRef(),
      a = "service_q8at3rh",
      l = "template_b0gmu9s",
      u = "yuIqgbz26tFHVq_3B";
    async function s(c) {
      c.preventDefault(),
        await Hx.sendForm(a, l, i.current, u).then(
          (d) => {
            console.log(d), o(!0), n(!1);
          },
          (d) => {
            console.log(d), n(!0), o(!1);
          }
        );
    }
    return T("article", {
      className: "contacto",
      children: he("form", {
        onSubmit: (c) => s(c),
        className: e ? "contacto__form" : "contacto__form dark",
        ref: i,
        children: [
          T("h4", {
            className: e ? "contacto__title" : "contacto__title dark",
            children: "Cont\xE1cteme y ser\xE1 respondido/a a la brevedad.",
          }),
          T("label", {
            htmlFor: "nombre",
            className: e ? "contacto__label" : "contacto__label dark",
            children: "Nombre:",
          }),
          T("input", {
            type: "text",
            name: "nombre",
            id: "nombre",
            required: !0,
            placeholder: "Escriba su nombre y apellido *",
            className: e ? "contacto__input" : "contacto__input dark",
          }),
          T("label", {
            htmlFor: "correo",
            className: e ? "contacto__label" : "contacto__label dark",
            children: "Correo:",
          }),
          T("input", {
            type: "email",
            name: "correo",
            id: "correo",
            required: !0,
            placeholder: "Escriba su correo *",
            className: e ? "contacto__input" : "contacto__input dark",
          }),
          T("label", {
            htmlFor: "telefono",
            className: e ? "contacto__label" : "contacto__label dark",
            children: "Tel\xE9fono:",
          }),
          T("input", {
            type: "tel",
            name: "telefono",
            id: "telefono",
            className: e ? "contacto__input" : "contacto__input dark",
            placeholder: "Escriba su tel\xE9fono",
          }),
          T("label", {
            htmlFor: "mensaje",
            className: e ? "contacto__label" : "contacto__label dark",
            children: "Mensaje:",
          }),
          T("textarea", {
            name: "mensaje",
            id: "mensaje",
            required: !0,
            placeholder: "Escriba su mensaje *",
            className: e ? "contacto__textarea" : "contacto__textarea dark",
          }),
          T("button", {
            type: "submit",
            className: "btn",
            value: "send",
            children: "Enviar mensaje",
          }),
          t &&
            T("p", {
              className: "error",
              children: "Ha surgido un error al enviar el mensaje.",
            }),
          r &&
            T("p", {
              className: "success",
              children: "\xA1Se ha enviado su mensaje correctamente!",
            }),
        ],
      }),
    });
  },
  Kx = w3({ reducer: { theme: R3 } });
nu.createRoot(document.getElementById("root")).render(
  T(ft.StrictMode, {
    children: T(H2, {
      store: Kx,
      children: T(Jg, {
        children: T(Yg, {
          children: he(Fn, {
            path: "/",
            element: T(Q3, {}),
            children: [
              T(Fn, { index: !0, element: T(Dp, {}) }),
              T(Fn, { path: "sobre-mi", element: T(Nx, {}) }),
              T(Fn, { path: "contacto", element: T(Wx, {}) }),
              T(Fn, { path: "proyectos", element: T(Dp, {}) }),
            ],
          }),
        }),
      }),
    }),
  })
);
