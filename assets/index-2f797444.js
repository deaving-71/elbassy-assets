(() => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const l of i)
        if (l.type === "childList")
          for (const s of l.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const l = {};
      return (
        i.integrity && (l.integrity = i.integrity),
        i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (l.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
        l
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const l = n(i);
      fetch(i.href, l);
    }
  })();
  function ed(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Ta = { exports: {} },
    Ei = {},
    ka = { exports: {} },
    R = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var cr = Symbol.for("react.element"),
    td = Symbol.for("react.portal"),
    nd = Symbol.for("react.fragment"),
    rd = Symbol.for("react.strict_mode"),
    id = Symbol.for("react.profiler"),
    ld = Symbol.for("react.provider"),
    sd = Symbol.for("react.context"),
    od = Symbol.for("react.forward_ref"),
    ad = Symbol.for("react.suspense"),
    ud = Symbol.for("react.memo"),
    cd = Symbol.for("react.lazy"),
    uo = Symbol.iterator;
  function dd(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (uo && e[uo]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Pa = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _a = Object.assign,
    La = {};
  function En(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = La),
      (this.updater = n || Pa);
  }
  En.prototype.isReactComponent = {};
  En.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  En.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function za() {}
  za.prototype = En.prototype;
  function ps(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = La),
      (this.updater = n || Pa);
  }
  var ms = (ps.prototype = new za());
  ms.constructor = ps;
  _a(ms, En.prototype);
  ms.isPureReactComponent = !0;
  var co = Array.isArray,
    Ma = Object.prototype.hasOwnProperty,
    hs = { current: null },
    Oa = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Na(e, t, n) {
    var r,
      i = {},
      l = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (l = "" + t.key),
      t))
        Ma.call(t, r) && !Oa.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var o = Array(a), d = 0; d < a; d++) o[d] = arguments[d + 2];
      i.children = o;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
      $$typeof: cr,
      type: e,
      key: l,
      ref: s,
      props: i,
      _owner: hs.current,
    };
  }
  function fd(e, t) {
    return {
      $$typeof: cr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function vs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === cr;
  }
  function pd(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var fo = /\/+/g;
  function ji(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? pd("" + e.key)
      : t.toString(36);
  }
  function Rr(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (l) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case cr:
            case td:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (i = i(s)),
        (e = r === "" ? "." + ji(s, 0) : r),
        co(i)
          ? ((n = ""),
            e != null && (n = e.replace(fo, "$&/") + "/"),
            Rr(i, t, n, "", function (d) {
              return d;
            }))
          : i != null &&
            (vs(i) &&
              (i = fd(
                i,
                n +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(fo, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), co(e)))
      for (var a = 0; a < e.length; a++) {
        l = e[a];
        var o = r + ji(l, a);
        s += Rr(l, t, n, o, i);
      }
    else if (((o = dd(e)), typeof o == "function"))
      for (e = o.call(e), a = 0; !(l = e.next()).done; )
        (l = l.value), (o = r + ji(l, a++)), (s += Rr(l, t, n, o, i));
    else if (l === "object")
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
    return s;
  }
  function vr(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      Rr(e, r, "", "", function (l) {
        return t.call(n, l, i++);
      }),
      r
    );
  }
  function md(e) {
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
  var me = { current: null },
    Fr = { transition: null },
    hd = {
      ReactCurrentDispatcher: me,
      ReactCurrentBatchConfig: Fr,
      ReactCurrentOwner: hs,
    };
  R.Children = {
    map: vr,
    forEach: function (e, t, n) {
      vr(
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
        vr(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        vr(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!vs(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  R.Component = En;
  R.Fragment = nd;
  R.Profiler = id;
  R.PureComponent = ps;
  R.StrictMode = rd;
  R.Suspense = ad;
  R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hd;
  R.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = _a({}, e.props),
      i = e.key,
      l = e.ref,
      s = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((l = t.ref), (s = hs.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (o in t)
        Ma.call(t, o) &&
          !Oa.hasOwnProperty(o) &&
          (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
    }
    var o = arguments.length - 2;
    if (o === 1) r.children = n;
    else if (1 < o) {
      a = Array(o);
      for (var d = 0; d < o; d++) a[d] = arguments[d + 2];
      r.children = a;
    }
    return { $$typeof: cr, type: e.type, key: i, ref: l, props: r, _owner: s };
  };
  R.createContext = function (e) {
    return (
      (e = {
        $$typeof: sd,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: ld, _context: e }),
      (e.Consumer = e)
    );
  };
  R.createElement = Na;
  R.createFactory = function (e) {
    var t = Na.bind(null, e);
    return (t.type = e), t;
  };
  R.createRef = function () {
    return { current: null };
  };
  R.forwardRef = function (e) {
    return { $$typeof: od, render: e };
  };
  R.isValidElement = vs;
  R.lazy = function (e) {
    return { $$typeof: cd, _payload: { _status: -1, _result: e }, _init: md };
  };
  R.memo = function (e, t) {
    return { $$typeof: ud, type: e, compare: t === void 0 ? null : t };
  };
  R.startTransition = function (e) {
    var t = Fr.transition;
    Fr.transition = {};
    try {
      e();
    } finally {
      Fr.transition = t;
    }
  };
  R.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  R.useCallback = function (e, t) {
    return me.current.useCallback(e, t);
  };
  R.useContext = function (e) {
    return me.current.useContext(e);
  };
  R.useDebugValue = function () {};
  R.useDeferredValue = function (e) {
    return me.current.useDeferredValue(e);
  };
  R.useEffect = function (e, t) {
    return me.current.useEffect(e, t);
  };
  R.useId = function () {
    return me.current.useId();
  };
  R.useImperativeHandle = function (e, t, n) {
    return me.current.useImperativeHandle(e, t, n);
  };
  R.useInsertionEffect = function (e, t) {
    return me.current.useInsertionEffect(e, t);
  };
  R.useLayoutEffect = function (e, t) {
    return me.current.useLayoutEffect(e, t);
  };
  R.useMemo = function (e, t) {
    return me.current.useMemo(e, t);
  };
  R.useReducer = function (e, t, n) {
    return me.current.useReducer(e, t, n);
  };
  R.useRef = function (e) {
    return me.current.useRef(e);
  };
  R.useState = function (e) {
    return me.current.useState(e);
  };
  R.useSyncExternalStore = function (e, t, n) {
    return me.current.useSyncExternalStore(e, t, n);
  };
  R.useTransition = function () {
    return me.current.useTransition();
  };
  R.version = "18.2.0";
  ka.exports = R;
  var $ = ka.exports;
  const Z = ed($);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var vd = $,
    gd = Symbol.for("react.element"),
    yd = Symbol.for("react.fragment"),
    wd = Object.prototype.hasOwnProperty,
    Sd =
      vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ed = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ia(e, t, n) {
    var r,
      i = {},
      l = null,
      s = null;
    n !== void 0 && (l = "" + n),
      t.key !== void 0 && (l = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
    for (r in t) wd.call(t, r) && !Ed.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: gd,
      type: e,
      key: l,
      ref: s,
      props: i,
      _owner: Sd.current,
    };
  }
  Ei.Fragment = yd;
  Ei.jsx = Ia;
  Ei.jsxs = Ia;
  Ta.exports = Ei;
  var ze = Ta.exports,
    vl = {},
    Da = { exports: {} },
    Pe = {},
    Ra = { exports: {} },
    Fa = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(L, O) {
      var D = L.length;
      L.push(O);
      e: for (; 0 < D; ) {
        var U = (D - 1) >>> 1,
          q = L[U];
        if (0 < i(q, O)) (L[U] = O), (L[D] = q), (D = U);
        else break e;
      }
    }
    function n(L) {
      return L.length === 0 ? null : L[0];
    }
    function r(L) {
      if (L.length === 0) return null;
      var O = L[0],
        D = L.pop();
      if (D !== O) {
        L[0] = D;
        e: for (var U = 0, q = L.length, Qt = q >>> 1; U < Qt; ) {
          var Lt = 2 * (U + 1) - 1,
            Ai = L[Lt],
            zt = Lt + 1,
            hr = L[zt];
          if (0 > i(Ai, D))
            zt < q && 0 > i(hr, Ai)
              ? ((L[U] = hr), (L[zt] = D), (U = zt))
              : ((L[U] = Ai), (L[Lt] = D), (U = Lt));
          else if (zt < q && 0 > i(hr, D)) (L[U] = hr), (L[zt] = D), (U = zt);
          else break e;
        }
      }
      return O;
    }
    function i(L, O) {
      var D = L.sortIndex - O.sortIndex;
      return D !== 0 ? D : L.id - O.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var l = performance;
      e.unstable_now = function () {
        return l.now();
      };
    } else {
      var s = Date,
        a = s.now();
      e.unstable_now = function () {
        return s.now() - a;
      };
    }
    var o = [],
      d = [],
      p = 1,
      m = null,
      h = 3,
      v = !1,
      w = !1,
      y = !1,
      x = typeof setTimeout == "function" ? setTimeout : null,
      f = typeof clearTimeout == "function" ? clearTimeout : null,
      u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function c(L) {
      for (var O = n(d); O !== null; ) {
        if (O.callback === null) r(d);
        else if (O.startTime <= L)
          r(d), (O.sortIndex = O.expirationTime), t(o, O);
        else break;
        O = n(d);
      }
    }
    function g(L) {
      if (((y = !1), c(L), !w))
        if (n(o) !== null) (w = !0), de(S);
        else {
          var O = n(d);
          O !== null && _t(g, O.startTime - L);
        }
    }
    function S(L, O) {
      (w = !1), y && ((y = !1), f(P), (P = -1)), (v = !0);
      var D = h;
      try {
        for (
          c(O), m = n(o);
          m !== null && (!(m.expirationTime > O) || (L && !_()));

        ) {
          var U = m.callback;
          if (typeof U == "function") {
            (m.callback = null), (h = m.priorityLevel);
            var q = U(m.expirationTime <= O);
            (O = e.unstable_now()),
              typeof q == "function" ? (m.callback = q) : m === n(o) && r(o),
              c(O);
          } else r(o);
          m = n(o);
        }
        if (m !== null) var Qt = !0;
        else {
          var Lt = n(d);
          Lt !== null && _t(g, Lt.startTime - O), (Qt = !1);
        }
        return Qt;
      } finally {
        (m = null), (h = D), (v = !1);
      }
    }
    var T = !1,
      E = null,
      P = -1,
      C = 5,
      I = -1;
    function _() {
      return !(e.unstable_now() - I < C);
    }
    function M() {
      if (E !== null) {
        var L = e.unstable_now();
        I = L;
        var O = !0;
        try {
          O = E(!0, L);
        } finally {
          O ? N() : ((T = !1), (E = null));
        }
      } else T = !1;
    }
    var N;
    if (typeof u == "function")
      N = function () {
        u(M);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(),
        G = F.port2;
      (F.port1.onmessage = M),
        (N = function () {
          G.postMessage(null);
        });
    } else
      N = function () {
        x(M, 0);
      };
    function de(L) {
      (E = L), T || ((T = !0), N());
    }
    function _t(L, O) {
      P = x(function () {
        L(e.unstable_now());
      }, O);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (L) {
        L.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        w || v || ((w = !0), de(S));
      }),
      (e.unstable_forceFrameRate = function (L) {
        0 > L || 125 < L
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (C = 0 < L ? Math.floor(1e3 / L) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(o);
      }),
      (e.unstable_next = function (L) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var O = 3;
            break;
          default:
            O = h;
        }
        var D = h;
        h = O;
        try {
          return L();
        } finally {
          h = D;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (L, O) {
        switch (L) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            L = 3;
        }
        var D = h;
        h = L;
        try {
          return O();
        } finally {
          h = D;
        }
      }),
      (e.unstable_scheduleCallback = function (L, O, D) {
        var U = e.unstable_now();
        switch (
          (typeof D == "object" && D !== null
            ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? U + D : U))
            : (D = U),
          L)
        ) {
          case 1:
            var q = -1;
            break;
          case 2:
            q = 250;
            break;
          case 5:
            q = 1073741823;
            break;
          case 4:
            q = 1e4;
            break;
          default:
            q = 5e3;
        }
        return (
          (q = D + q),
          (L = {
            id: p++,
            callback: O,
            priorityLevel: L,
            startTime: D,
            expirationTime: q,
            sortIndex: -1,
          }),
          D > U
            ? ((L.sortIndex = D),
              t(d, L),
              n(o) === null &&
                L === n(d) &&
                (y ? (f(P), (P = -1)) : (y = !0), _t(g, D - U)))
            : ((L.sortIndex = q), t(o, L), w || v || ((w = !0), de(S))),
          L
        );
      }),
      (e.unstable_shouldYield = _),
      (e.unstable_wrapCallback = function (L) {
        var O = h;
        return function () {
          var D = h;
          h = O;
          try {
            return L.apply(this, arguments);
          } finally {
            h = D;
          }
        };
      });
  })(Fa);
  Ra.exports = Fa;
  var xd = Ra.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Aa = $,
    ke = xd;
  function k(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
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
  var ja = new Set(),
    Qn = {};
  function Ut(e, t) {
    mn(e, t), mn(e + "Capture", t);
  }
  function mn(e, t) {
    for (Qn[e] = t, e = 0; e < t.length; e++) ja.add(t[e]);
  }
  var tt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    gl = Object.prototype.hasOwnProperty,
    Cd =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    po = {},
    mo = {};
  function Td(e) {
    return gl.call(mo, e)
      ? !0
      : gl.call(po, e)
      ? !1
      : Cd.test(e)
      ? (mo[e] = !0)
      : ((po[e] = !0), !1);
  }
  function kd(e, t, n, r) {
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
  function Pd(e, t, n, r) {
    if (t === null || typeof t > "u" || kd(e, t, n, r)) return !0;
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
  function he(e, t, n, r, i, l, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = s);
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      se[e] = new he(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    se[t] = new he(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    se[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    se[e] = new he(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      se[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    se[e] = new he(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    se[e] = new he(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    se[e] = new he(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    se[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var gs = /[\-:]([a-z])/g;
  function ys(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(gs, ys);
      se[t] = new he(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(gs, ys);
      se[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(gs, ys);
    se[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    se[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  se.xlinkHref = new he(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    se[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ws(e, t, n, r) {
    var i = se.hasOwnProperty(t) ? se[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Pd(t, n, i, r) && (n = null),
      r || i === null
        ? Td(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var lt = Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    gr = Symbol.for("react.element"),
    Xt = Symbol.for("react.portal"),
    Kt = Symbol.for("react.fragment"),
    Ss = Symbol.for("react.strict_mode"),
    yl = Symbol.for("react.profiler"),
    $a = Symbol.for("react.provider"),
    Ba = Symbol.for("react.context"),
    Es = Symbol.for("react.forward_ref"),
    wl = Symbol.for("react.suspense"),
    Sl = Symbol.for("react.suspense_list"),
    xs = Symbol.for("react.memo"),
    ot = Symbol.for("react.lazy"),
    Va = Symbol.for("react.offscreen"),
    ho = Symbol.iterator;
  function Tn(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ho && e[ho]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Y = Object.assign,
    $i;
  function In(e) {
    if ($i === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        $i = (t && t[1]) || "";
      }
    return (
      `
` +
      $i +
      e
    );
  }
  var Bi = !1;
  function Vi(e, t) {
    if (!e || Bi) return "";
    Bi = !0;
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
          } catch (d) {
            var r = d;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (d) {
            r = d;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (d) {
          r = d;
        }
        e();
      }
    } catch (d) {
      if (d && r && typeof d.stack == "string") {
        for (
          var i = d.stack.split(`
`),
            l = r.stack.split(`
`),
            s = i.length - 1,
            a = l.length - 1;
          1 <= s && 0 <= a && i[s] !== l[a];

        )
          a--;
        for (; 1 <= s && 0 <= a; s--, a--)
          if (i[s] !== l[a]) {
            if (s !== 1 || a !== 1)
              do
                if ((s--, a--, 0 > a || i[s] !== l[a])) {
                  var o =
                    `
` + i[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      o.includes("<anonymous>") &&
                      (o = o.replace("<anonymous>", e.displayName)),
                    o
                  );
                }
              while (1 <= s && 0 <= a);
            break;
          }
      }
    } finally {
      (Bi = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? In(e) : "";
  }
  function _d(e) {
    switch (e.tag) {
      case 5:
        return In(e.type);
      case 16:
        return In("Lazy");
      case 13:
        return In("Suspense");
      case 19:
        return In("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Vi(e.type, !1)), e;
      case 11:
        return (e = Vi(e.type.render, !1)), e;
      case 1:
        return (e = Vi(e.type, !0)), e;
      default:
        return "";
    }
  }
  function El(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Kt:
        return "Fragment";
      case Xt:
        return "Portal";
      case yl:
        return "Profiler";
      case Ss:
        return "StrictMode";
      case wl:
        return "Suspense";
      case Sl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ba:
          return (e.displayName || "Context") + ".Consumer";
        case $a:
          return (e._context.displayName || "Context") + ".Provider";
        case Es:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case xs:
          return (
            (t = e.displayName || null), t !== null ? t : El(e.type) || "Memo"
          );
        case ot:
          (t = e._payload), (e = e._init);
          try {
            return El(e(t));
          } catch {}
      }
    return null;
  }
  function Ld(e) {
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
        return El(t);
      case 8:
        return t === Ss ? "StrictMode" : "Mode";
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
  function xt(e) {
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
  function Ha(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function zd(e) {
    var t = Ha(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        l = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (s) {
            (r = "" + s), l.call(this, s);
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
  function yr(e) {
    e._valueTracker || (e._valueTracker = zd(e));
  }
  function Ga(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Ha(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Yr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function xl(e, t) {
    var n = t.checked;
    return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function vo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = xt(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Ua(e, t) {
    (t = t.checked), t != null && ws(e, "checked", t, !1);
  }
  function Cl(e, t) {
    Ua(e, t);
    var n = xt(t.value),
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
      ? Tl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Tl(e, t.type, xt(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function go(e, t, n) {
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
  function Tl(e, t, n) {
    (t !== "number" || Yr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return Y({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function yo(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(k(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(k(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: xt(n) };
  }
  function Wa(e, t) {
    var n = xt(t.value),
      r = xt(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function wo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ba(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ba(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var wr,
    Qa = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          wr = wr || document.createElement("div"),
            wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = wr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var An = {
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
    Md = ["Webkit", "ms", "Moz", "O"];
  Object.keys(An).forEach(function (e) {
    Md.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
    });
  });
  function Ya(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Xa(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = Ya(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Od = Y(
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
  function _l(e, t) {
    if (t) {
      if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Ll(e, t) {
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
  var zl = null;
  function Cs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ml = null,
    un = null,
    cn = null;
  function So(e) {
    if ((e = pr(e))) {
      if (typeof Ml != "function") throw Error(k(280));
      var t = e.stateNode;
      t && ((t = Pi(t)), Ml(e.stateNode, e.type, t));
    }
  }
  function Ka(e) {
    un ? (cn ? cn.push(e) : (cn = [e])) : (un = e);
  }
  function qa() {
    if (un) {
      var e = un,
        t = cn;
      if (((cn = un = null), So(e), t)) for (e = 0; e < t.length; e++) So(t[e]);
    }
  }
  function Za(e, t) {
    return e(t);
  }
  function Ja() {}
  var Hi = !1;
  function eu(e, t, n) {
    if (Hi) return e(t, n);
    Hi = !0;
    try {
      return Za(e, t, n);
    } finally {
      (Hi = !1), (un !== null || cn !== null) && (Ja(), qa());
    }
  }
  function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pi(n);
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
  var Ol = !1;
  if (tt)
    try {
      var kn = {};
      Object.defineProperty(kn, "passive", {
        get: function () {
          Ol = !0;
        },
      }),
        window.addEventListener("test", kn, kn),
        window.removeEventListener("test", kn, kn);
    } catch {
      Ol = !1;
    }
  function Nd(e, t, n, r, i, l, s, a, o) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, d);
    } catch (p) {
      this.onError(p);
    }
  }
  var jn = !1,
    Xr = null,
    Kr = !1,
    Nl = null,
    Id = {
      onError: function (e) {
        (jn = !0), (Xr = e);
      },
    };
  function Dd(e, t, n, r, i, l, s, a, o) {
    (jn = !1), (Xr = null), Nd.apply(Id, arguments);
  }
  function Rd(e, t, n, r, i, l, s, a, o) {
    if ((Dd.apply(this, arguments), jn)) {
      if (jn) {
        var d = Xr;
        (jn = !1), (Xr = null);
      } else throw Error(k(198));
      Kr || ((Kr = !0), (Nl = d));
    }
  }
  function Wt(e) {
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
  function tu(e) {
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
  function Eo(e) {
    if (Wt(e) !== e) throw Error(k(188));
  }
  function Fd(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Wt(e)), t === null)) throw Error(k(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var l = i.alternate;
      if (l === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === n) return Eo(i), e;
          if (l === r) return Eo(i), t;
          l = l.sibling;
        }
        throw Error(k(188));
      }
      if (n.return !== r.return) (n = i), (r = l);
      else {
        for (var s = !1, a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!s) {
          for (a = l.child; a; ) {
            if (a === n) {
              (s = !0), (n = l), (r = i);
              break;
            }
            if (a === r) {
              (s = !0), (r = l), (n = i);
              break;
            }
            a = a.sibling;
          }
          if (!s) throw Error(k(189));
        }
      }
      if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
  }
  function nu(e) {
    return (e = Fd(e)), e !== null ? ru(e) : null;
  }
  function ru(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ru(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var iu = ke.unstable_scheduleCallback,
    xo = ke.unstable_cancelCallback,
    Ad = ke.unstable_shouldYield,
    jd = ke.unstable_requestPaint,
    K = ke.unstable_now,
    $d = ke.unstable_getCurrentPriorityLevel,
    Ts = ke.unstable_ImmediatePriority,
    lu = ke.unstable_UserBlockingPriority,
    qr = ke.unstable_NormalPriority,
    Bd = ke.unstable_LowPriority,
    su = ke.unstable_IdlePriority,
    xi = null,
    Qe = null;
  function Vd(e) {
    if (Qe && typeof Qe.onCommitFiberRoot == "function")
      try {
        Qe.onCommitFiberRoot(xi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Be = Math.clz32 ? Math.clz32 : Ud,
    Hd = Math.log,
    Gd = Math.LN2;
  function Ud(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Hd(e) / Gd) | 0)) | 0;
  }
  var Sr = 64,
    Er = 4194304;
  function Rn(e) {
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
  function Zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      l = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? (r = Rn(a)) : ((l &= s), l !== 0 && (r = Rn(l)));
    } else (s = n & ~i), s !== 0 ? (r = Rn(s)) : l !== 0 && (r = Rn(l));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Be(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function Wd(e, t) {
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
  function bd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        l = e.pendingLanes;
      0 < l;

    ) {
      var s = 31 - Be(l),
        a = 1 << s,
        o = i[s];
      o === -1
        ? (!(a & n) || a & r) && (i[s] = Wd(a, t))
        : o <= t && (e.expiredLanes |= a),
        (l &= ~a);
    }
  }
  function Il(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ou() {
    var e = Sr;
    return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
  }
  function Gi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function dr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Be(t)),
      (e[t] = n);
  }
  function Qd(e, t) {
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
      var i = 31 - Be(n),
        l = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
  }
  function ks(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Be(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var j = 0;
  function au(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var uu,
    Ps,
    cu,
    du,
    fu,
    Dl = !1,
    xr = [],
    mt = null,
    ht = null,
    vt = null,
    Kn = new Map(),
    qn = new Map(),
    ut = [],
    Yd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Co(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mt = null;
        break;
      case "dragenter":
      case "dragleave":
        ht = null;
        break;
      case "mouseover":
      case "mouseout":
        vt = null;
        break;
      case "pointerover":
      case "pointerout":
        Kn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qn.delete(t.pointerId);
    }
  }
  function Pn(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [i],
        }),
        t !== null && ((t = pr(t)), t !== null && Ps(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Xd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (mt = Pn(mt, e, t, n, r, i)), !0;
      case "dragenter":
        return (ht = Pn(ht, e, t, n, r, i)), !0;
      case "mouseover":
        return (vt = Pn(vt, e, t, n, r, i)), !0;
      case "pointerover":
        var l = i.pointerId;
        return Kn.set(l, Pn(Kn.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (l = i.pointerId), qn.set(l, Pn(qn.get(l) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function pu(e) {
    var t = Nt(e.target);
    if (t !== null) {
      var n = Wt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = tu(n)), t !== null)) {
            (e.blockedOn = t),
              fu(e.priority, function () {
                cu(n);
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
  function Ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (zl = r), n.target.dispatchEvent(r), (zl = null);
      } else return (t = pr(n)), t !== null && Ps(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function To(e, t, n) {
    Ar(e) && n.delete(t);
  }
  function Kd() {
    (Dl = !1),
      mt !== null && Ar(mt) && (mt = null),
      ht !== null && Ar(ht) && (ht = null),
      vt !== null && Ar(vt) && (vt = null),
      Kn.forEach(To),
      qn.forEach(To);
  }
  function _n(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Dl ||
        ((Dl = !0),
        ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Kd)));
  }
  function Zn(e) {
    function t(i) {
      return _n(i, e);
    }
    if (0 < xr.length) {
      _n(xr[0], e);
      for (var n = 1; n < xr.length; n++) {
        var r = xr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      mt !== null && _n(mt, e),
        ht !== null && _n(ht, e),
        vt !== null && _n(vt, e),
        Kn.forEach(t),
        qn.forEach(t),
        n = 0;
      n < ut.length;
      n++
    )
      (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
      pu(n), n.blockedOn === null && ut.shift();
  }
  var dn = lt.ReactCurrentBatchConfig,
    Jr = !0;
  function qd(e, t, n, r) {
    var i = j,
      l = dn.transition;
    dn.transition = null;
    try {
      (j = 1), _s(e, t, n, r);
    } finally {
      (j = i), (dn.transition = l);
    }
  }
  function Zd(e, t, n, r) {
    var i = j,
      l = dn.transition;
    dn.transition = null;
    try {
      (j = 4), _s(e, t, n, r);
    } finally {
      (j = i), (dn.transition = l);
    }
  }
  function _s(e, t, n, r) {
    if (Jr) {
      var i = Rl(e, t, n, r);
      if (i === null) Ji(e, t, r, ei, n), Co(e, r);
      else if (Xd(i, e, t, n, r)) r.stopPropagation();
      else if ((Co(e, r), t & 4 && -1 < Yd.indexOf(e))) {
        for (; i !== null; ) {
          var l = pr(i);
          if (
            (l !== null && uu(l),
            (l = Rl(e, t, n, r)),
            l === null && Ji(e, t, r, ei, n),
            l === i)
          )
            break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else Ji(e, t, r, null, n);
    }
  }
  var ei = null;
  function Rl(e, t, n, r) {
    if (((ei = null), (e = Cs(r)), (e = Nt(e)), e !== null))
      if (((t = Wt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = tu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ei = e), null;
  }
  function mu(e) {
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
        switch ($d()) {
          case Ts:
            return 1;
          case lu:
            return 4;
          case qr:
          case Bd:
            return 16;
          case su:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var dt = null,
    Ls = null,
    jr = null;
  function hu() {
    if (jr) return jr;
    var e,
      t = Ls,
      n = t.length,
      r,
      i = "value" in dt ? dt.value : dt.textContent,
      l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
    return (jr = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function $r(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cr() {
    return !0;
  }
  function ko() {
    return !1;
  }
  function _e(e) {
    function t(n, r, i, l, s) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = l),
        (this.target = s),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? Cr
          : ko),
        (this.isPropagationStopped = ko),
        this
      );
    }
    return (
      Y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Cr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cr));
        },
        persist: function () {},
        isPersistent: Cr,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zs = _e(xn),
    fr = Y({}, xn, { view: 0, detail: 0 }),
    Jd = _e(fr),
    Ui,
    Wi,
    Ln,
    Ci = Y({}, fr, {
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
      getModifierState: Ms,
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
          : (e !== Ln &&
              (Ln && e.type === "mousemove"
                ? ((Ui = e.screenX - Ln.screenX), (Wi = e.screenY - Ln.screenY))
                : (Wi = Ui = 0),
              (Ln = e)),
            Ui);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Wi;
      },
    }),
    Po = _e(Ci),
    ef = Y({}, Ci, { dataTransfer: 0 }),
    tf = _e(ef),
    nf = Y({}, fr, { relatedTarget: 0 }),
    bi = _e(nf),
    rf = Y({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lf = _e(rf),
    sf = Y({}, xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    of = _e(sf),
    af = Y({}, xn, { data: 0 }),
    _o = _e(af),
    uf = {
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
    cf = {
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
    df = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ff(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = df[e])
      ? !!t[e]
      : !1;
  }
  function Ms() {
    return ff;
  }
  var pf = Y({}, fr, {
      key: function (e) {
        if (e.key) {
          var t = uf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = $r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? cf[e.keyCode] || "Unidentified"
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
      getModifierState: Ms,
      charCode: function (e) {
        return e.type === "keypress" ? $r(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $r(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    mf = _e(pf),
    hf = Y({}, Ci, {
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
    Lo = _e(hf),
    vf = Y({}, fr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ms,
    }),
    gf = _e(vf),
    yf = Y({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wf = _e(yf),
    Sf = Y({}, Ci, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    Ef = _e(Sf),
    xf = [9, 13, 27, 32],
    Os = tt && "CompositionEvent" in window,
    $n = null;
  tt && "documentMode" in document && ($n = document.documentMode);
  var Cf = tt && "TextEvent" in window && !$n,
    vu = tt && (!Os || ($n && 8 < $n && 11 >= $n)),
    zo = String.fromCharCode(32),
    Mo = !1;
  function gu(e, t) {
    switch (e) {
      case "keyup":
        return xf.indexOf(t.keyCode) !== -1;
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
  function yu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var qt = !1;
  function Tf(e, t) {
    switch (e) {
      case "compositionend":
        return yu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Mo = !0), zo);
      case "textInput":
        return (e = t.data), e === zo && Mo ? null : e;
      default:
        return null;
    }
  }
  function kf(e, t) {
    if (qt)
      return e === "compositionend" || (!Os && gu(e, t))
        ? ((e = hu()), (jr = Ls = dt = null), (qt = !1), e)
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
        return vu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Pf = {
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
  function Oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Pf[e.type] : t === "textarea";
  }
  function wu(e, t, n, r) {
    Ka(r),
      (t = ti(t, "onChange")),
      0 < t.length &&
        ((n = new zs("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Bn = null,
    Jn = null;
  function _f(e) {
    Mu(e, 0);
  }
  function Ti(e) {
    var t = en(e);
    if (Ga(t)) return e;
  }
  function Lf(e, t) {
    if (e === "change") return t;
  }
  var Su = !1;
  if (tt) {
    var Qi;
    if (tt) {
      var Yi = "oninput" in document;
      if (!Yi) {
        var No = document.createElement("div");
        No.setAttribute("oninput", "return;"),
          (Yi = typeof No.oninput == "function");
      }
      Qi = Yi;
    } else Qi = !1;
    Su = Qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Io() {
    Bn && (Bn.detachEvent("onpropertychange", Eu), (Jn = Bn = null));
  }
  function Eu(e) {
    if (e.propertyName === "value" && Ti(Jn)) {
      var t = [];
      wu(t, Jn, e, Cs(e)), eu(_f, t);
    }
  }
  function zf(e, t, n) {
    e === "focusin"
      ? (Io(), (Bn = t), (Jn = n), Bn.attachEvent("onpropertychange", Eu))
      : e === "focusout" && Io();
  }
  function Mf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ti(Jn);
  }
  function Of(e, t) {
    if (e === "click") return Ti(t);
  }
  function Nf(e, t) {
    if (e === "input" || e === "change") return Ti(t);
  }
  function If(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var He = typeof Object.is == "function" ? Object.is : If;
  function er(e, t) {
    if (He(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!gl.call(t, i) || !He(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Do(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ro(e, t) {
    var n = Do(e);
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
      n = Do(n);
    }
  }
  function xu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? xu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Cu() {
    for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Yr(e.document);
    }
    return t;
  }
  function Ns(e) {
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
  function Df(e) {
    var t = Cu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      xu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ns(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            l = Math.min(r.start, i);
          (r = r.end === void 0 ? l : Math.min(r.end, i)),
            !e.extend && l > r && ((i = r), (r = l), (l = i)),
            (i = Ro(n, l));
          var s = Ro(n, r);
          i &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            l > r
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
  var Rf = tt && "documentMode" in document && 11 >= document.documentMode,
    Zt = null,
    Fl = null,
    Vn = null,
    Al = !1;
  function Fo(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Al ||
      Zt == null ||
      Zt !== Yr(r) ||
      ((r = Zt),
      "selectionStart" in r && Ns(r)
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
      (Vn && er(Vn, r)) ||
        ((Vn = r),
        (r = ti(Fl, "onSelect")),
        0 < r.length &&
          ((t = new zs("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Zt))));
  }
  function Tr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Jt = {
      animationend: Tr("Animation", "AnimationEnd"),
      animationiteration: Tr("Animation", "AnimationIteration"),
      animationstart: Tr("Animation", "AnimationStart"),
      transitionend: Tr("Transition", "TransitionEnd"),
    },
    Xi = {},
    Tu = {};
  tt &&
    ((Tu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Jt.animationend.animation,
      delete Jt.animationiteration.animation,
      delete Jt.animationstart.animation),
    "TransitionEvent" in window || delete Jt.transitionend.transition);
  function ki(e) {
    if (Xi[e]) return Xi[e];
    if (!Jt[e]) return e;
    var t = Jt[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tu) return (Xi[e] = t[n]);
    return e;
  }
  var ku = ki("animationend"),
    Pu = ki("animationiteration"),
    _u = ki("animationstart"),
    Lu = ki("transitionend"),
    zu = new Map(),
    Ao =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Tt(e, t) {
    zu.set(e, t), Ut(t, [e]);
  }
  for (var Ki = 0; Ki < Ao.length; Ki++) {
    var qi = Ao[Ki],
      Ff = qi.toLowerCase(),
      Af = qi[0].toUpperCase() + qi.slice(1);
    Tt(Ff, "on" + Af);
  }
  Tt(ku, "onAnimationEnd");
  Tt(Pu, "onAnimationIteration");
  Tt(_u, "onAnimationStart");
  Tt("dblclick", "onDoubleClick");
  Tt("focusin", "onFocus");
  Tt("focusout", "onBlur");
  Tt(Lu, "onTransitionEnd");
  mn("onMouseEnter", ["mouseout", "mouseover"]);
  mn("onMouseLeave", ["mouseout", "mouseover"]);
  mn("onPointerEnter", ["pointerout", "pointerover"]);
  mn("onPointerLeave", ["pointerout", "pointerover"]);
  Ut(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  Ut(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Ut(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  Ut(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  Ut(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    jf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Fn)
    );
  function jo(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Rd(r, t, void 0, e), (e.currentTarget = null);
  }
  function Mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var a = r[s],
              o = a.instance,
              d = a.currentTarget;
            if (((a = a.listener), o !== l && i.isPropagationStopped()))
              break e;
            jo(i, a, d), (l = o);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((a = r[s]),
              (o = a.instance),
              (d = a.currentTarget),
              (a = a.listener),
              o !== l && i.isPropagationStopped())
            )
              break e;
            jo(i, a, d), (l = o);
          }
      }
    }
    if (Kr) throw ((e = Nl), (Kr = !1), (Nl = null), e);
  }
  function V(e, t) {
    var n = t[Hl];
    n === void 0 && (n = t[Hl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ou(t, e, 2, !1), n.add(r));
  }
  function Zi(e, t, n) {
    var r = 0;
    t && (r |= 4), Ou(n, e, r, t);
  }
  var kr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[kr]) {
      (e[kr] = !0),
        ja.forEach(function (n) {
          n !== "selectionchange" && (jf.has(n) || Zi(n, !1, e), Zi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[kr] || ((t[kr] = !0), Zi("selectionchange", !1, t));
    }
  }
  function Ou(e, t, n, r) {
    switch (mu(t)) {
      case 1:
        var i = qd;
        break;
      case 4:
        i = Zd;
        break;
      default:
        i = _s;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Ol ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Ji(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var o = s.tag;
              if (
                (o === 3 || o === 4) &&
                ((o = s.stateNode.containerInfo),
                o === i || (o.nodeType === 8 && o.parentNode === i))
              )
                return;
              s = s.return;
            }
          for (; a !== null; ) {
            if (((s = Nt(a)), s === null)) return;
            if (((o = s.tag), o === 5 || o === 6)) {
              r = l = s;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    eu(function () {
      var d = l,
        p = Cs(n),
        m = [];
      e: {
        var h = zu.get(e);
        if (h !== void 0) {
          var v = zs,
            w = e;
          switch (e) {
            case "keypress":
              if ($r(n) === 0) break e;
            case "keydown":
            case "keyup":
              v = mf;
              break;
            case "focusin":
              (w = "focus"), (v = bi);
              break;
            case "focusout":
              (w = "blur"), (v = bi);
              break;
            case "beforeblur":
            case "afterblur":
              v = bi;
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
              v = Po;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = tf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = gf;
              break;
            case ku:
            case Pu:
            case _u:
              v = lf;
              break;
            case Lu:
              v = wf;
              break;
            case "scroll":
              v = Jd;
              break;
            case "wheel":
              v = Ef;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = of;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Lo;
          }
          var y = (t & 4) !== 0,
            x = !y && e === "scroll",
            f = y ? (h !== null ? h + "Capture" : null) : h;
          y = [];
          for (var u = d, c; u !== null; ) {
            c = u;
            var g = c.stateNode;
            if (
              (c.tag === 5 &&
                g !== null &&
                ((c = g),
                f !== null &&
                  ((g = Xn(u, f)), g != null && y.push(nr(u, g, c)))),
              x)
            )
              break;
            u = u.return;
          }
          0 < y.length &&
            ((h = new v(h, w, null, n, p)), m.push({ event: h, listeners: y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (v = e === "mouseout" || e === "pointerout"),
            h &&
              n !== zl &&
              (w = n.relatedTarget || n.fromElement) &&
              (Nt(w) || w[nt]))
          )
            break e;
          if (
            (v || h) &&
            ((h =
              p.window === p
                ? p
                : (h = p.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            v
              ? ((w = n.relatedTarget || n.toElement),
                (v = d),
                (w = w ? Nt(w) : null),
                w !== null &&
                  ((x = Wt(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                  (w = null))
              : ((v = null), (w = d)),
            v !== w)
          ) {
            if (
              ((y = Po),
              (g = "onMouseLeave"),
              (f = "onMouseEnter"),
              (u = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((y = Lo),
                (g = "onPointerLeave"),
                (f = "onPointerEnter"),
                (u = "pointer")),
              (x = v == null ? h : en(v)),
              (c = w == null ? h : en(w)),
              (h = new y(g, u + "leave", v, n, p)),
              (h.target = x),
              (h.relatedTarget = c),
              (g = null),
              Nt(p) === d &&
                ((y = new y(f, u + "enter", w, n, p)),
                (y.target = c),
                (y.relatedTarget = x),
                (g = y)),
              (x = g),
              v && w)
            )
              t: {
                for (y = v, f = w, u = 0, c = y; c; c = Yt(c)) u++;
                for (c = 0, g = f; g; g = Yt(g)) c++;
                for (; 0 < u - c; ) (y = Yt(y)), u--;
                for (; 0 < c - u; ) (f = Yt(f)), c--;
                for (; u--; ) {
                  if (y === f || (f !== null && y === f.alternate)) break t;
                  (y = Yt(y)), (f = Yt(f));
                }
                y = null;
              }
            else y = null;
            v !== null && $o(m, h, v, y, !1),
              w !== null && x !== null && $o(m, x, w, y, !0);
          }
        }
        e: {
          if (
            ((h = d ? en(d) : window),
            (v = h.nodeName && h.nodeName.toLowerCase()),
            v === "select" || (v === "input" && h.type === "file"))
          )
            var S = Lf;
          else if (Oo(h))
            if (Su) S = Nf;
            else {
              S = Mf;
              var T = zf;
            }
          else
            (v = h.nodeName) &&
              v.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (S = Of);
          if (S && (S = S(e, d))) {
            wu(m, S, n, p);
            break e;
          }
          T && T(e, h, d),
            e === "focusout" &&
              (T = h._wrapperState) &&
              T.controlled &&
              h.type === "number" &&
              Tl(h, "number", h.value);
        }
        switch (((T = d ? en(d) : window), e)) {
          case "focusin":
            (Oo(T) || T.contentEditable === "true") &&
              ((Zt = T), (Fl = d), (Vn = null));
            break;
          case "focusout":
            Vn = Fl = Zt = null;
            break;
          case "mousedown":
            Al = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Al = !1), Fo(m, n, p);
            break;
          case "selectionchange":
            if (Rf) break;
          case "keydown":
          case "keyup":
            Fo(m, n, p);
        }
        var E;
        if (Os)
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
          qt
            ? gu(e, n) && (P = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (P = "onCompositionStart");
        P &&
          (vu &&
            n.locale !== "ko" &&
            (qt || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && qt && (E = hu())
              : ((dt = p),
                (Ls = "value" in dt ? dt.value : dt.textContent),
                (qt = !0))),
          (T = ti(d, P)),
          0 < T.length &&
            ((P = new _o(P, e, null, n, p)),
            m.push({ event: P, listeners: T }),
            E ? (P.data = E) : ((E = yu(n)), E !== null && (P.data = E)))),
          (E = Cf ? Tf(e, n) : kf(e, n)) &&
            ((d = ti(d, "onBeforeInput")),
            0 < d.length &&
              ((p = new _o("onBeforeInput", "beforeinput", null, n, p)),
              m.push({ event: p, listeners: d }),
              (p.data = E)));
      }
      Mu(m, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ti(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        l = i.stateNode;
      i.tag === 5 &&
        l !== null &&
        ((i = l),
        (l = Xn(e, n)),
        l != null && r.unshift(nr(e, l, i)),
        (l = Xn(e, t)),
        l != null && r.push(nr(e, l, i))),
        (e = e.return);
    }
    return r;
  }
  function Yt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $o(e, t, n, r, i) {
    for (var l = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n,
        o = a.alternate,
        d = a.stateNode;
      if (o !== null && o === r) break;
      a.tag === 5 &&
        d !== null &&
        ((a = d),
        i
          ? ((o = Xn(n, l)), o != null && s.unshift(nr(n, o, a)))
          : i || ((o = Xn(n, l)), o != null && s.push(nr(n, o, a)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var $f = /\r\n?/g,
    Bf = /\u0000|\uFFFD/g;
  function Bo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        $f,
        `
`
      )
      .replace(Bf, "");
  }
  function Pr(e, t, n) {
    if (((t = Bo(t)), Bo(e) !== t && n)) throw Error(k(425));
  }
  function ni() {}
  var jl = null,
    $l = null;
  function Bl(e, t) {
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
  var Vl = typeof setTimeout == "function" ? setTimeout : void 0,
    Vf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vo = typeof Promise == "function" ? Promise : void 0,
    Hf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vo < "u"
        ? function (e) {
            return Vo.resolve(null).then(e).catch(Gf);
          }
        : Vl;
  function Gf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function el(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), Zn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    Zn(t);
  }
  function gt(e) {
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
  function Ho(e) {
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
  var Cn = Math.random().toString(36).slice(2),
    We = "__reactFiber$" + Cn,
    rr = "__reactProps$" + Cn,
    nt = "__reactContainer$" + Cn,
    Hl = "__reactEvents$" + Cn,
    Uf = "__reactListeners$" + Cn,
    Wf = "__reactHandles$" + Cn;
  function Nt(e) {
    var t = e[We];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[nt] || n[We])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ho(e); e !== null; ) {
            if ((n = e[We])) return n;
            e = Ho(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function pr(e) {
    return (
      (e = e[We] || e[nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function en(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
  }
  function Pi(e) {
    return e[rr] || null;
  }
  var Gl = [],
    tn = -1;
  function kt(e) {
    return { current: e };
  }
  function H(e) {
    0 > tn || ((e.current = Gl[tn]), (Gl[tn] = null), tn--);
  }
  function B(e, t) {
    tn++, (Gl[tn] = e.current), (e.current = t);
  }
  var Ct = {},
    ce = kt(Ct),
    ye = kt(!1),
    jt = Ct;
  function hn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ct;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      l;
    for (l in n) i[l] = t[l];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function we(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ri() {
    H(ye), H(ce);
  }
  function Go(e, t, n) {
    if (ce.current !== Ct) throw Error(k(168));
    B(ce, t), B(ye, n);
  }
  function Nu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(k(108, Ld(e) || "Unknown", i));
    return Y({}, n, r);
  }
  function ii(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ct),
      (jt = ce.current),
      B(ce, e),
      B(ye, ye.current),
      !0
    );
  }
  function Uo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
      ? ((e = Nu(e, t, jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        H(ye),
        H(ce),
        B(ce, e))
      : H(ye),
      B(ye, n);
  }
  var qe = null,
    _i = !1,
    tl = !1;
  function Iu(e) {
    qe === null ? (qe = [e]) : qe.push(e);
  }
  function bf(e) {
    (_i = !0), Iu(e);
  }
  function Pt() {
    if (!tl && qe !== null) {
      tl = !0;
      var e = 0,
        t = j;
      try {
        var n = qe;
        for (j = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (qe = null), (_i = !1);
      } catch (i) {
        throw (qe !== null && (qe = qe.slice(e + 1)), iu(Ts, Pt), i);
      } finally {
        (j = t), (tl = !1);
      }
    }
    return null;
  }
  var nn = [],
    rn = 0,
    li = null,
    si = 0,
    Me = [],
    Oe = 0,
    $t = null,
    Ze = 1,
    Je = "";
  function Mt(e, t) {
    (nn[rn++] = si), (nn[rn++] = li), (li = e), (si = t);
  }
  function Du(e, t, n) {
    (Me[Oe++] = Ze), (Me[Oe++] = Je), (Me[Oe++] = $t), ($t = e);
    var r = Ze;
    e = Je;
    var i = 32 - Be(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - Be(t) + i;
    if (30 < l) {
      var s = i - (i % 5);
      (l = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (i -= s),
        (Ze = (1 << (32 - Be(t) + i)) | (n << i) | r),
        (Je = l + e);
    } else (Ze = (1 << l) | (n << i) | r), (Je = e);
  }
  function Is(e) {
    e.return !== null && (Mt(e, 1), Du(e, 1, 0));
  }
  function Ds(e) {
    for (; e === li; )
      (li = nn[--rn]), (nn[rn] = null), (si = nn[--rn]), (nn[rn] = null);
    for (; e === $t; )
      ($t = Me[--Oe]),
        (Me[Oe] = null),
        (Je = Me[--Oe]),
        (Me[Oe] = null),
        (Ze = Me[--Oe]),
        (Me[Oe] = null);
  }
  var Te = null,
    Ce = null,
    W = !1,
    $e = null;
  function Ru(e, t) {
    var n = Ne(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Wo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Te = e), (Ce = gt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Te = e), (Ce = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = $t !== null ? { id: Ze, overflow: Je } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ne(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Te = e),
              (Ce = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ul(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wl(e) {
    if (W) {
      var t = Ce;
      if (t) {
        var n = t;
        if (!Wo(e, t)) {
          if (Ul(e)) throw Error(k(418));
          t = gt(n.nextSibling);
          var r = Te;
          t && Wo(e, t)
            ? Ru(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Te = e));
        }
      } else {
        if (Ul(e)) throw Error(k(418));
        (e.flags = (e.flags & -4097) | 2), (W = !1), (Te = e);
      }
    }
  }
  function bo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Te = e;
  }
  function _r(e) {
    if (e !== Te) return !1;
    if (!W) return bo(e), (W = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps))),
      t && (t = Ce))
    ) {
      if (Ul(e)) throw (Fu(), Error(k(418)));
      for (; t; ) Ru(e, t), (t = gt(t.nextSibling));
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(k(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ce = gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ce = null;
      }
    } else Ce = Te ? gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fu() {
    for (var e = Ce; e; ) e = gt(e.nextSibling);
  }
  function vn() {
    (Ce = Te = null), (W = !1);
  }
  function Rs(e) {
    $e === null ? ($e = [e]) : $e.push(e);
  }
  var Qf = lt.ReactCurrentBatchConfig;
  function Ae(e, t) {
    if (e && e.defaultProps) {
      (t = Y({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var oi = kt(null),
    ai = null,
    ln = null,
    Fs = null;
  function As() {
    Fs = ln = ai = null;
  }
  function js(e) {
    var t = oi.current;
    H(oi), (e._currentValue = t);
  }
  function bl(e, t, n) {
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
  function fn(e, t) {
    (ai = e),
      (Fs = ln = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (ge = !0), (e.firstContext = null));
  }
  function De(e) {
    var t = e._currentValue;
    if (Fs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ln === null)) {
        if (ai === null) throw Error(k(308));
        (ln = e), (ai.dependencies = { lanes: 0, firstContext: e });
      } else ln = ln.next = e;
    return t;
  }
  var It = null;
  function $s(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  function Au(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), $s(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      rt(e, r)
    );
  }
  function rt(e, t) {
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
  var at = !1;
  function Bs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ju(e, t) {
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
  function et(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), A & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        rt(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), $s(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      rt(e, n)
    );
  }
  function Br(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ks(e, n);
    }
  }
  function Qo(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        l = null;
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
          l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
        } while (n !== null);
        l === null ? (i = l = t) : (l = l.next = t);
      } else i = l = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: l,
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
  function ui(e, t, n, r) {
    var i = e.updateQueue;
    at = !1;
    var l = i.firstBaseUpdate,
      s = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var o = a,
        d = o.next;
      (o.next = null), s === null ? (l = d) : (s.next = d), (s = o);
      var p = e.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (a = p.lastBaseUpdate),
        a !== s &&
          (a === null ? (p.firstBaseUpdate = d) : (a.next = d),
          (p.lastBaseUpdate = o)));
    }
    if (l !== null) {
      var m = i.baseState;
      (s = 0), (p = d = o = null), (a = l);
      do {
        var h = a.lane,
          v = a.eventTime;
        if ((r & h) === h) {
          p !== null &&
            (p = p.next =
              {
                eventTime: v,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var w = e,
              y = a;
            switch (((h = t), (v = n), y.tag)) {
              case 1:
                if (((w = y.payload), typeof w == "function")) {
                  m = w.call(v, m, h);
                  break e;
                }
                m = w;
                break e;
              case 3:
                w.flags = (w.flags & -65537) | 128;
              case 0:
                if (
                  ((w = y.payload),
                  (h = typeof w == "function" ? w.call(v, m, h) : w),
                  h == null)
                )
                  break e;
                m = Y({}, m, h);
                break e;
              case 2:
                at = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (h = i.effects),
            h === null ? (i.effects = [a]) : h.push(a));
        } else
          (v = {
            eventTime: v,
            lane: h,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            p === null ? ((d = p = v), (o = m)) : (p = p.next = v),
            (s |= h);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (h = a),
            (a = h.next),
            (h.next = null),
            (i.lastBaseUpdate = h),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (p === null && (o = m),
        (i.baseState = o),
        (i.firstBaseUpdate = d),
        (i.lastBaseUpdate = p),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (s |= i.lane), (i = i.next);
        while (i !== t);
      } else l === null && (i.shared.lanes = 0);
      (Vt |= s), (e.lanes = s), (e.memoizedState = m);
    }
  }
  function Yo(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(k(191, i));
          i.call(r);
        }
      }
  }
  var $u = new Aa.Component().refs;
  function Ql(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Y({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Li = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Wt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = pe(),
        i = St(e),
        l = et(r, i);
      (l.payload = t),
        n != null && (l.callback = n),
        (t = yt(e, l, i)),
        t !== null && (Ve(t, e, i, r), Br(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = pe(),
        i = St(e),
        l = et(r, i);
      (l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = yt(e, l, i)),
        t !== null && (Ve(t, e, i, r), Br(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = pe(),
        r = St(e),
        i = et(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = yt(e, i, r)),
        t !== null && (Ve(t, e, r, n), Br(t, e, r));
    },
  };
  function Xo(e, t, n, r, i, l, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, l, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !er(n, r) || !er(i, l)
        : !0
    );
  }
  function Bu(e, t, n) {
    var r = !1,
      i = Ct,
      l = t.contextType;
    return (
      typeof l == "object" && l !== null
        ? (l = De(l))
        : ((i = we(t) ? jt : ce.current),
          (r = t.contextTypes),
          (l = (r = r != null) ? hn(e, i) : Ct)),
      (t = new t(n, l)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Li),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function Ko(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Li.enqueueReplaceState(t, t.state, null);
  }
  function Yl(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = $u), Bs(e);
    var l = t.contextType;
    typeof l == "object" && l !== null
      ? (i.context = De(l))
      : ((l = we(t) ? jt : ce.current), (i.context = hn(e, l))),
      (i.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == "function" && (Ql(e, t, l, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Li.enqueueReplaceState(i, i.state, null),
        ui(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(k(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(k(147, e));
        var i = r,
          l = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === l
          ? t.ref
          : ((t = function (s) {
              var a = i.refs;
              a === $u && (a = i.refs = {}),
                s === null ? delete a[l] : (a[l] = s);
            }),
            (t._stringRef = l),
            t);
      }
      if (typeof e != "string") throw Error(k(284));
      if (!n._owner) throw Error(k(290, e));
    }
    return e;
  }
  function Lr(e, t) {
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
  function qo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vu(e) {
    function t(f, u) {
      if (e) {
        var c = f.deletions;
        c === null ? ((f.deletions = [u]), (f.flags |= 16)) : c.push(u);
      }
    }
    function n(f, u) {
      if (!e) return null;
      for (; u !== null; ) t(f, u), (u = u.sibling);
      return null;
    }
    function r(f, u) {
      for (f = new Map(); u !== null; )
        u.key !== null ? f.set(u.key, u) : f.set(u.index, u), (u = u.sibling);
      return f;
    }
    function i(f, u) {
      return (f = Et(f, u)), (f.index = 0), (f.sibling = null), f;
    }
    function l(f, u, c) {
      return (
        (f.index = c),
        e
          ? ((c = f.alternate),
            c !== null
              ? ((c = c.index), c < u ? ((f.flags |= 2), u) : c)
              : ((f.flags |= 2), u))
          : ((f.flags |= 1048576), u)
      );
    }
    function s(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function a(f, u, c, g) {
      return u === null || u.tag !== 6
        ? ((u = al(c, f.mode, g)), (u.return = f), u)
        : ((u = i(u, c)), (u.return = f), u);
    }
    function o(f, u, c, g) {
      var S = c.type;
      return S === Kt
        ? p(f, u, c.props.children, g, c.key)
        : u !== null &&
          (u.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === ot &&
              qo(S) === u.type))
        ? ((g = i(u, c.props)), (g.ref = zn(f, u, c)), (g.return = f), g)
        : ((g = br(c.type, c.key, c.props, null, f.mode, g)),
          (g.ref = zn(f, u, c)),
          (g.return = f),
          g);
    }
    function d(f, u, c, g) {
      return u === null ||
        u.tag !== 4 ||
        u.stateNode.containerInfo !== c.containerInfo ||
        u.stateNode.implementation !== c.implementation
        ? ((u = ul(c, f.mode, g)), (u.return = f), u)
        : ((u = i(u, c.children || [])), (u.return = f), u);
    }
    function p(f, u, c, g, S) {
      return u === null || u.tag !== 7
        ? ((u = Ft(c, f.mode, g, S)), (u.return = f), u)
        : ((u = i(u, c)), (u.return = f), u);
    }
    function m(f, u, c) {
      if ((typeof u == "string" && u !== "") || typeof u == "number")
        return (u = al("" + u, f.mode, c)), (u.return = f), u;
      if (typeof u == "object" && u !== null) {
        switch (u.$$typeof) {
          case gr:
            return (
              (c = br(u.type, u.key, u.props, null, f.mode, c)),
              (c.ref = zn(f, null, u)),
              (c.return = f),
              c
            );
          case Xt:
            return (u = ul(u, f.mode, c)), (u.return = f), u;
          case ot:
            var g = u._init;
            return m(f, g(u._payload), c);
        }
        if (Dn(u) || Tn(u))
          return (u = Ft(u, f.mode, c, null)), (u.return = f), u;
        Lr(f, u);
      }
      return null;
    }
    function h(f, u, c, g) {
      var S = u !== null ? u.key : null;
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return S !== null ? null : a(f, u, "" + c, g);
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case gr:
            return c.key === S ? o(f, u, c, g) : null;
          case Xt:
            return c.key === S ? d(f, u, c, g) : null;
          case ot:
            return (S = c._init), h(f, u, S(c._payload), g);
        }
        if (Dn(c) || Tn(c)) return S !== null ? null : p(f, u, c, g, null);
        Lr(f, c);
      }
      return null;
    }
    function v(f, u, c, g, S) {
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return (f = f.get(c) || null), a(u, f, "" + g, S);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case gr:
            return (
              (f = f.get(g.key === null ? c : g.key) || null), o(u, f, g, S)
            );
          case Xt:
            return (
              (f = f.get(g.key === null ? c : g.key) || null), d(u, f, g, S)
            );
          case ot:
            var T = g._init;
            return v(f, u, c, T(g._payload), S);
        }
        if (Dn(g) || Tn(g)) return (f = f.get(c) || null), p(u, f, g, S, null);
        Lr(u, g);
      }
      return null;
    }
    function w(f, u, c, g) {
      for (
        var S = null, T = null, E = u, P = (u = 0), C = null;
        E !== null && P < c.length;
        P++
      ) {
        E.index > P ? ((C = E), (E = null)) : (C = E.sibling);
        var I = h(f, E, c[P], g);
        if (I === null) {
          E === null && (E = C);
          break;
        }
        e && E && I.alternate === null && t(f, E),
          (u = l(I, u, P)),
          T === null ? (S = I) : (T.sibling = I),
          (T = I),
          (E = C);
      }
      if (P === c.length) return n(f, E), W && Mt(f, P), S;
      if (E === null) {
        for (; P < c.length; P++)
          (E = m(f, c[P], g)),
            E !== null &&
              ((u = l(E, u, P)),
              T === null ? (S = E) : (T.sibling = E),
              (T = E));
        return W && Mt(f, P), S;
      }
      for (E = r(f, E); P < c.length; P++)
        (C = v(E, f, P, c[P], g)),
          C !== null &&
            (e && C.alternate !== null && E.delete(C.key === null ? P : C.key),
            (u = l(C, u, P)),
            T === null ? (S = C) : (T.sibling = C),
            (T = C));
      return (
        e &&
          E.forEach(function (_) {
            return t(f, _);
          }),
        W && Mt(f, P),
        S
      );
    }
    function y(f, u, c, g) {
      var S = Tn(c);
      if (typeof S != "function") throw Error(k(150));
      if (((c = S.call(c)), c == null)) throw Error(k(151));
      for (
        var T = (S = null), E = u, P = (u = 0), C = null, I = c.next();
        E !== null && !I.done;
        P++, I = c.next()
      ) {
        E.index > P ? ((C = E), (E = null)) : (C = E.sibling);
        var _ = h(f, E, I.value, g);
        if (_ === null) {
          E === null && (E = C);
          break;
        }
        e && E && _.alternate === null && t(f, E),
          (u = l(_, u, P)),
          T === null ? (S = _) : (T.sibling = _),
          (T = _),
          (E = C);
      }
      if (I.done) return n(f, E), W && Mt(f, P), S;
      if (E === null) {
        for (; !I.done; P++, I = c.next())
          (I = m(f, I.value, g)),
            I !== null &&
              ((u = l(I, u, P)),
              T === null ? (S = I) : (T.sibling = I),
              (T = I));
        return W && Mt(f, P), S;
      }
      for (E = r(f, E); !I.done; P++, I = c.next())
        (I = v(E, f, P, I.value, g)),
          I !== null &&
            (e && I.alternate !== null && E.delete(I.key === null ? P : I.key),
            (u = l(I, u, P)),
            T === null ? (S = I) : (T.sibling = I),
            (T = I));
      return (
        e &&
          E.forEach(function (M) {
            return t(f, M);
          }),
        W && Mt(f, P),
        S
      );
    }
    function x(f, u, c, g) {
      if (
        (typeof c == "object" &&
          c !== null &&
          c.type === Kt &&
          c.key === null &&
          (c = c.props.children),
        typeof c == "object" && c !== null)
      ) {
        switch (c.$$typeof) {
          case gr:
            e: {
              for (var S = c.key, T = u; T !== null; ) {
                if (T.key === S) {
                  if (((S = c.type), S === Kt)) {
                    if (T.tag === 7) {
                      n(f, T.sibling),
                        (u = i(T, c.props.children)),
                        (u.return = f),
                        (f = u);
                      break e;
                    }
                  } else if (
                    T.elementType === S ||
                    (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === ot &&
                      qo(S) === T.type)
                  ) {
                    n(f, T.sibling),
                      (u = i(T, c.props)),
                      (u.ref = zn(f, T, c)),
                      (u.return = f),
                      (f = u);
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              c.type === Kt
                ? ((u = Ft(c.props.children, f.mode, g, c.key)),
                  (u.return = f),
                  (f = u))
                : ((g = br(c.type, c.key, c.props, null, f.mode, g)),
                  (g.ref = zn(f, u, c)),
                  (g.return = f),
                  (f = g));
            }
            return s(f);
          case Xt:
            e: {
              for (T = c.key; u !== null; ) {
                if (u.key === T)
                  if (
                    u.tag === 4 &&
                    u.stateNode.containerInfo === c.containerInfo &&
                    u.stateNode.implementation === c.implementation
                  ) {
                    n(f, u.sibling),
                      (u = i(u, c.children || [])),
                      (u.return = f),
                      (f = u);
                    break e;
                  } else {
                    n(f, u);
                    break;
                  }
                else t(f, u);
                u = u.sibling;
              }
              (u = ul(c, f.mode, g)), (u.return = f), (f = u);
            }
            return s(f);
          case ot:
            return (T = c._init), x(f, u, T(c._payload), g);
        }
        if (Dn(c)) return w(f, u, c, g);
        if (Tn(c)) return y(f, u, c, g);
        Lr(f, c);
      }
      return (typeof c == "string" && c !== "") || typeof c == "number"
        ? ((c = "" + c),
          u !== null && u.tag === 6
            ? (n(f, u.sibling), (u = i(u, c)), (u.return = f), (f = u))
            : (n(f, u), (u = al(c, f.mode, g)), (u.return = f), (f = u)),
          s(f))
        : n(f, u);
    }
    return x;
  }
  var gn = Vu(!0),
    Hu = Vu(!1),
    mr = {},
    Ye = kt(mr),
    ir = kt(mr),
    lr = kt(mr);
  function Dt(e) {
    if (e === mr) throw Error(k(174));
    return e;
  }
  function Vs(e, t) {
    switch ((B(lr, t), B(ir, e), B(Ye, mr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Pl(t, e));
    }
    H(Ye), B(Ye, t);
  }
  function yn() {
    H(Ye), H(ir), H(lr);
  }
  function Gu(e) {
    Dt(lr.current);
    var t = Dt(Ye.current),
      n = Pl(t, e.type);
    t !== n && (B(ir, e), B(Ye, n));
  }
  function Hs(e) {
    ir.current === e && (H(Ye), H(ir));
  }
  var b = kt(0);
  function ci(e) {
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
  var nl = [];
  function Gs() {
    for (var e = 0; e < nl.length; e++)
      nl[e]._workInProgressVersionPrimary = null;
    nl.length = 0;
  }
  var Vr = lt.ReactCurrentDispatcher,
    rl = lt.ReactCurrentBatchConfig,
    Bt = 0,
    Q = null,
    ee = null,
    ne = null,
    di = !1,
    Hn = !1,
    sr = 0,
    Yf = 0;
  function oe() {
    throw Error(k(321));
  }
  function Us(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!He(e[n], t[n])) return !1;
    return !0;
  }
  function Ws(e, t, n, r, i, l) {
    if (
      ((Bt = l),
      (Q = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Vr.current = e === null || e.memoizedState === null ? Zf : Jf),
      (e = n(r, i)),
      Hn)
    ) {
      l = 0;
      do {
        if (((Hn = !1), (sr = 0), 25 <= l)) throw Error(k(301));
        (l += 1),
          (ne = ee = null),
          (t.updateQueue = null),
          (Vr.current = ep),
          (e = n(r, i));
      } while (Hn);
    }
    if (
      ((Vr.current = fi),
      (t = ee !== null && ee.next !== null),
      (Bt = 0),
      (ne = ee = Q = null),
      (di = !1),
      t)
    )
      throw Error(k(300));
    return e;
  }
  function bs() {
    var e = sr !== 0;
    return (sr = 0), e;
  }
  function Ue() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e), ne;
  }
  function Re() {
    if (ee === null) {
      var e = Q.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ee.next;
    var t = ne === null ? Q.memoizedState : ne.next;
    if (t !== null) (ne = t), (ee = e);
    else {
      if (e === null) throw Error(k(310));
      (ee = e),
        (e = {
          memoizedState: ee.memoizedState,
          baseState: ee.baseState,
          baseQueue: ee.baseQueue,
          queue: ee.queue,
          next: null,
        }),
        ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e);
    }
    return ne;
  }
  function or(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function il(e) {
    var t = Re(),
      n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = ee,
      i = r.baseQueue,
      l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var s = i.next;
        (i.next = l.next), (l.next = s);
      }
      (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
      (l = i.next), (r = r.baseState);
      var a = (s = null),
        o = null,
        d = l;
      do {
        var p = d.lane;
        if ((Bt & p) === p)
          o !== null &&
            (o = o.next =
              {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null,
              }),
            (r = d.hasEagerState ? d.eagerState : e(r, d.action));
        else {
          var m = {
            lane: p,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null,
          };
          o === null ? ((a = o = m), (s = r)) : (o = o.next = m),
            (Q.lanes |= p),
            (Vt |= p);
        }
        d = d.next;
      } while (d !== null && d !== l);
      o === null ? (s = r) : (o.next = a),
        He(r, t.memoizedState) || (ge = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = o),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (l = i.lane), (Q.lanes |= l), (Vt |= l), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ll(e) {
    var t = Re(),
      n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = (i = i.next);
      do (l = e(l, s.action)), (s = s.next);
      while (s !== i);
      He(l, t.memoizedState) || (ge = !0),
        (t.memoizedState = l),
        t.baseQueue === null && (t.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, r];
  }
  function Uu() {}
  function Wu(e, t) {
    var n = Q,
      r = Re(),
      i = t(),
      l = !He(r.memoizedState, i);
    if (
      (l && ((r.memoizedState = i), (ge = !0)),
      (r = r.queue),
      Qs(Yu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ar(9, Qu.bind(null, n, r, i, t), void 0, null),
        re === null)
      )
        throw Error(k(349));
      Bt & 30 || bu(n, t, i);
    }
    return i;
  }
  function bu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Q.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Q.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Qu(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Xu(t) && Ku(e);
  }
  function Yu(e, t, n) {
    return n(function () {
      Xu(t) && Ku(e);
    });
  }
  function Xu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !He(e, n);
    } catch {
      return !0;
    }
  }
  function Ku(e) {
    var t = rt(e, 1);
    t !== null && Ve(t, e, 1, -1);
  }
  function Zo(e) {
    var t = Ue();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: or,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = qf.bind(null, Q, e)),
      [t.memoizedState, e]
    );
  }
  function ar(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Q.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Q.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function qu() {
    return Re().memoizedState;
  }
  function Hr(e, t, n, r) {
    var i = Ue();
    (Q.flags |= e),
      (i.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function zi(e, t, n, r) {
    var i = Re();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (ee !== null) {
      var s = ee.memoizedState;
      if (((l = s.destroy), r !== null && Us(r, s.deps))) {
        i.memoizedState = ar(t, n, l, r);
        return;
      }
    }
    (Q.flags |= e), (i.memoizedState = ar(1 | t, n, l, r));
  }
  function Jo(e, t) {
    return Hr(8390656, 8, e, t);
  }
  function Qs(e, t) {
    return zi(2048, 8, e, t);
  }
  function Zu(e, t) {
    return zi(4, 2, e, t);
  }
  function Ju(e, t) {
    return zi(4, 4, e, t);
  }
  function ec(e, t) {
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
  function tc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), zi(4, 4, ec.bind(null, t, e), n)
    );
  }
  function Ys() {}
  function nc(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Us(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function rc(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Us(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ic(e, t, n) {
    return Bt & 21
      ? (He(n, t) ||
          ((n = ou()), (Q.lanes |= n), (Vt |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
  }
  function Xf(e, t) {
    var n = j;
    (j = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = rl.transition;
    rl.transition = {};
    try {
      e(!1), t();
    } finally {
      (j = n), (rl.transition = r);
    }
  }
  function lc() {
    return Re().memoizedState;
  }
  function Kf(e, t, n) {
    var r = St(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sc(e))
    )
      oc(t, n);
    else if (((n = Au(e, t, n, r)), n !== null)) {
      var i = pe();
      Ve(n, e, r, i), ac(n, t, r);
    }
  }
  function qf(e, t, n) {
    var r = St(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (sc(e)) oc(t, i);
    else {
      var l = e.alternate;
      if (
        e.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = t.lastRenderedReducer), l !== null)
      )
        try {
          var s = t.lastRenderedState,
            a = l(s, n);
          if (((i.hasEagerState = !0), (i.eagerState = a), He(a, s))) {
            var o = t.interleaved;
            o === null
              ? ((i.next = i), $s(t))
              : ((i.next = o.next), (o.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Au(e, t, i, r)),
        n !== null && ((i = pe()), Ve(n, e, r, i), ac(n, t, r));
    }
  }
  function sc(e) {
    var t = e.alternate;
    return e === Q || (t !== null && t === Q);
  }
  function oc(e, t) {
    Hn = di = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ac(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ks(e, n);
    }
  }
  var fi = {
      readContext: De,
      useCallback: oe,
      useContext: oe,
      useEffect: oe,
      useImperativeHandle: oe,
      useInsertionEffect: oe,
      useLayoutEffect: oe,
      useMemo: oe,
      useReducer: oe,
      useRef: oe,
      useState: oe,
      useDebugValue: oe,
      useDeferredValue: oe,
      useTransition: oe,
      useMutableSource: oe,
      useSyncExternalStore: oe,
      useId: oe,
      unstable_isNewReconciler: !1,
    },
    Zf = {
      readContext: De,
      useCallback: function (e, t) {
        return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: De,
      useEffect: Jo,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Hr(4194308, 4, ec.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Hr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Hr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ue();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ue();
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
          (e = e.dispatch = Kf.bind(null, Q, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ue();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Zo,
      useDebugValue: Ys,
      useDeferredValue: function (e) {
        return (Ue().memoizedState = e);
      },
      useTransition: function () {
        var e = Zo(!1),
          t = e[0];
        return (e = Xf.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Q,
          i = Ue();
        if (W) {
          if (n === void 0) throw Error(k(407));
          n = n();
        } else {
          if (((n = t()), re === null)) throw Error(k(349));
          Bt & 30 || bu(r, t, n);
        }
        i.memoizedState = n;
        var l = { value: n, getSnapshot: t };
        return (
          (i.queue = l),
          Jo(Yu.bind(null, r, l, e), [e]),
          (r.flags |= 2048),
          ar(9, Qu.bind(null, r, l, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ue(),
          t = re.identifierPrefix;
        if (W) {
          var n = Je,
            r = Ze;
          (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = sr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Yf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Jf = {
      readContext: De,
      useCallback: nc,
      useContext: De,
      useEffect: Qs,
      useImperativeHandle: tc,
      useInsertionEffect: Zu,
      useLayoutEffect: Ju,
      useMemo: rc,
      useReducer: il,
      useRef: qu,
      useState: function () {
        return il(or);
      },
      useDebugValue: Ys,
      useDeferredValue: function (e) {
        var t = Re();
        return ic(t, ee.memoizedState, e);
      },
      useTransition: function () {
        var e = il(or)[0],
          t = Re().memoizedState;
        return [e, t];
      },
      useMutableSource: Uu,
      useSyncExternalStore: Wu,
      useId: lc,
      unstable_isNewReconciler: !1,
    },
    ep = {
      readContext: De,
      useCallback: nc,
      useContext: De,
      useEffect: Qs,
      useImperativeHandle: tc,
      useInsertionEffect: Zu,
      useLayoutEffect: Ju,
      useMemo: rc,
      useReducer: ll,
      useRef: qu,
      useState: function () {
        return ll(or);
      },
      useDebugValue: Ys,
      useDeferredValue: function (e) {
        var t = Re();
        return ee === null ? (t.memoizedState = e) : ic(t, ee.memoizedState, e);
      },
      useTransition: function () {
        var e = ll(or)[0],
          t = Re().memoizedState;
        return [e, t];
      },
      useMutableSource: Uu,
      useSyncExternalStore: Wu,
      useId: lc,
      unstable_isNewReconciler: !1,
    };
  function wn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += _d(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (l) {
      i =
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function sl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var tp = typeof WeakMap == "function" ? WeakMap : Map;
  function uc(e, t, n) {
    (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        mi || ((mi = !0), (ls = r)), Xl(e, t);
      }),
      n
    );
  }
  function cc(e, t, n) {
    (n = et(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          Xl(e, t);
        });
    }
    var l = e.stateNode;
    return (
      l !== null &&
        typeof l.componentDidCatch == "function" &&
        (n.callback = function () {
          Xl(e, t),
            typeof r != "function" &&
              (wt === null ? (wt = new Set([this])) : wt.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function ea(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new tp();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = hp.bind(null, e, t, n)), t.then(e, e));
  }
  function ta(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function na(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = et(-1, 1)), (t.tag = 2), yt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var np = lt.ReactCurrentOwner,
    ge = !1;
  function fe(e, t, n, r) {
    t.child = e === null ? Hu(t, null, n, r) : gn(t, e.child, n, r);
  }
  function ra(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return (
      fn(t, i),
      (r = Ws(e, t, n, r, l, i)),
      (n = bs()),
      e !== null && !ge
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          it(e, t, i))
        : (W && n && Is(t), (t.flags |= 1), fe(e, t, r, i), t.child)
    );
  }
  function ia(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" &&
        !no(l) &&
        l.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = l), dc(e, t, l, r, i))
        : ((e = br(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
      var s = l.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : er), n(s, r) && e.ref === t.ref)
      )
        return it(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Et(l, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function dc(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (er(l, r) && e.ref === t.ref)
        if (((ge = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
          e.flags & 131072 && (ge = !0);
        else return (t.lanes = e.lanes), it(e, t, i);
    }
    return Kl(e, t, n, r, i);
  }
  function fc(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          B(on, Ee),
          (Ee |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = l !== null ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            B(on, Ee),
            (Ee |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = l !== null ? l.baseLanes : n),
          B(on, Ee),
          (Ee |= r);
      }
    else
      l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        B(on, Ee),
        (Ee |= r);
    return fe(e, t, i, n), t.child;
  }
  function pc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Kl(e, t, n, r, i) {
    var l = we(n) ? jt : ce.current;
    return (
      (l = hn(t, l)),
      fn(t, i),
      (n = Ws(e, t, n, r, l, i)),
      (r = bs()),
      e !== null && !ge
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          it(e, t, i))
        : (W && r && Is(t), (t.flags |= 1), fe(e, t, n, i), t.child)
    );
  }
  function la(e, t, n, r, i) {
    if (we(n)) {
      var l = !0;
      ii(t);
    } else l = !1;
    if ((fn(t, i), t.stateNode === null))
      Gr(e, t), Bu(t, n, r), Yl(t, n, r, i), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        a = t.memoizedProps;
      s.props = a;
      var o = s.context,
        d = n.contextType;
      typeof d == "object" && d !== null
        ? (d = De(d))
        : ((d = we(n) ? jt : ce.current), (d = hn(t, d)));
      var p = n.getDerivedStateFromProps,
        m =
          typeof p == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      m ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== r || o !== d) && Ko(t, s, r, d)),
        (at = !1);
      var h = t.memoizedState;
      (s.state = h),
        ui(t, r, s, i),
        (o = t.memoizedState),
        a !== r || h !== o || ye.current || at
          ? (typeof p == "function" && (Ql(t, n, p, r), (o = t.memoizedState)),
            (a = at || Xo(t, n, a, r, h, o, d))
              ? (m ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = o)),
            (s.props = r),
            (s.state = o),
            (s.context = d),
            (r = a))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        ju(e, t),
        (a = t.memoizedProps),
        (d = t.type === t.elementType ? a : Ae(t.type, a)),
        (s.props = d),
        (m = t.pendingProps),
        (h = s.context),
        (o = n.contextType),
        typeof o == "object" && o !== null
          ? (o = De(o))
          : ((o = we(n) ? jt : ce.current), (o = hn(t, o)));
      var v = n.getDerivedStateFromProps;
      (p =
        typeof v == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== m || h !== o) && Ko(t, s, r, o)),
        (at = !1),
        (h = t.memoizedState),
        (s.state = h),
        ui(t, r, s, i);
      var w = t.memoizedState;
      a !== m || h !== w || ye.current || at
        ? (typeof v == "function" && (Ql(t, n, v, r), (w = t.memoizedState)),
          (d = at || Xo(t, n, d, r, h, w, o) || !1)
            ? (p ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, w, o),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, w, o)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = w)),
          (s.props = r),
          (s.state = w),
          (s.context = o),
          (r = d))
        : (typeof s.componentDidUpdate != "function" ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ql(e, t, n, r, l, i);
  }
  function ql(e, t, n, r, i, l) {
    pc(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Uo(t, n, !1), it(e, t, l);
    (r = t.stateNode), (np.current = t);
    var a =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = gn(t, e.child, null, l)), (t.child = gn(t, null, a, l)))
        : fe(e, t, a, l),
      (t.memoizedState = r.state),
      i && Uo(t, n, !0),
      t.child
    );
  }
  function mc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Go(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Go(e, t.context, !1),
      Vs(e, t.containerInfo);
  }
  function sa(e, t, n, r, i) {
    return vn(), Rs(i), (t.flags |= 256), fe(e, t, n, r), t.child;
  }
  var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function hc(e, t, n) {
    var r = t.pendingProps,
      i = b.current,
      l = !1,
      s = (t.flags & 128) !== 0,
      a;
    if (
      ((a = s) ||
        (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((l = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      B(b, i & 1),
      e === null)
    )
      return (
        Wl(t),
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
            l
              ? ((r = t.mode),
                (l = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && l !== null
                  ? ((l.childLanes = 0), (l.pendingProps = s))
                  : (l = Ni(s, r, 0, null)),
                (e = Ft(e, r, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = Jl(n)),
                (t.memoizedState = Zl),
                e)
              : Xs(t, s))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return rp(e, t, s, r, a, i, n);
    if (l) {
      (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
      var o = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = o),
            (t.deletions = null))
          : ((r = Et(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (l = Et(a, l)) : ((l = Ft(l, s, n, null)), (l.flags |= 2)),
        (l.return = t),
        (r.return = t),
        (r.sibling = l),
        (t.child = r),
        (r = l),
        (l = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? Jl(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (l.memoizedState = s),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Zl),
        r
      );
    }
    return (
      (l = e.child),
      (e = l.sibling),
      (r = Et(l, { mode: "visible", children: r.children })),
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
  function Xs(e, t) {
    return (
      (t = Ni({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function zr(e, t, n, r) {
    return (
      r !== null && Rs(r),
      gn(t, e.child, null, n),
      (e = Xs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rp(e, t, n, r, i, l, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = sl(Error(k(422)))), zr(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = Ni({ mode: "visible", children: r.children }, i, 0, null)),
          (l = Ft(l, i, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && gn(t, e.child, null, s),
          (t.child.memoizedState = Jl(s)),
          (t.memoizedState = Zl),
          l);
    if (!(t.mode & 1)) return zr(e, t, s, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (l = Error(k(419))), (r = sl(l, r, void 0)), zr(e, t, s, r)
      );
    }
    if (((a = (s & e.childLanes) !== 0), ge || a)) {
      if (((r = re), r !== null)) {
        switch (s & -s) {
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
        (i = i & (r.suspendedLanes | s) ? 0 : i),
          i !== 0 &&
            i !== l.retryLane &&
            ((l.retryLane = i), rt(e, i), Ve(r, e, i, -1));
      }
      return to(), (r = sl(Error(k(421)))), zr(e, t, s, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = vp.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = l.treeContext),
        (Ce = gt(i.nextSibling)),
        (Te = t),
        (W = !0),
        ($e = null),
        e !== null &&
          ((Me[Oe++] = Ze),
          (Me[Oe++] = Je),
          (Me[Oe++] = $t),
          (Ze = e.id),
          (Je = e.overflow),
          ($t = t)),
        (t = Xs(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function oa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), bl(e.return, t, n);
  }
  function ol(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = i));
  }
  function vc(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      l = r.tail;
    if ((fe(e, t, r.children, n), (r = b.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && oa(e, n, t);
          else if (e.tag === 19) oa(e, n, t);
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
    if ((B(b, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && ci(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            ol(t, !1, i, n, l);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && ci(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          ol(t, !0, n, null, l);
          break;
        case "together":
          ol(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Gr(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function it(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Vt |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Et(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function ip(e, t, n) {
    switch (t.tag) {
      case 3:
        mc(t), vn();
        break;
      case 5:
        Gu(t);
        break;
      case 1:
        we(t.type) && ii(t);
        break;
      case 4:
        Vs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        B(oi, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (B(b, b.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? hc(e, t, n)
            : (B(b, b.current & 1),
              (e = it(e, t, n)),
              e !== null ? e.sibling : null);
        B(b, b.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return vc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          B(b, b.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), fc(e, t, n);
    }
    return it(e, t, n);
  }
  var gc, es, yc, wc;
  gc = function (e, t) {
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
  es = function () {};
  yc = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      (e = t.stateNode), Dt(Ye.current);
      var l = null;
      switch (n) {
        case "input":
          (i = xl(e, i)), (r = xl(e, r)), (l = []);
          break;
        case "select":
          (i = Y({}, i, { value: void 0 })),
            (r = Y({}, r, { value: void 0 })),
            (l = []);
          break;
        case "textarea":
          (i = kl(e, i)), (r = kl(e, r)), (l = []);
          break;
        default:
          typeof i.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = ni);
      }
      _l(n, r);
      var s;
      n = null;
      for (d in i)
        if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
          if (d === "style") {
            var a = i[d];
            for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
          } else
            d !== "dangerouslySetInnerHTML" &&
              d !== "children" &&
              d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              d !== "autoFocus" &&
              (Qn.hasOwnProperty(d)
                ? l || (l = [])
                : (l = l || []).push(d, null));
      for (d in r) {
        var o = r[d];
        if (
          ((a = i != null ? i[d] : void 0),
          r.hasOwnProperty(d) && o !== a && (o != null || a != null))
        )
          if (d === "style")
            if (a) {
              for (s in a)
                !a.hasOwnProperty(s) ||
                  (o && o.hasOwnProperty(s)) ||
                  (n || (n = {}), (n[s] = ""));
              for (s in o)
                o.hasOwnProperty(s) &&
                  a[s] !== o[s] &&
                  (n || (n = {}), (n[s] = o[s]));
            } else n || (l || (l = []), l.push(d, n)), (n = o);
          else
            d === "dangerouslySetInnerHTML"
              ? ((o = o ? o.__html : void 0),
                (a = a ? a.__html : void 0),
                o != null && a !== o && (l = l || []).push(d, o))
              : d === "children"
              ? (typeof o != "string" && typeof o != "number") ||
                (l = l || []).push(d, "" + o)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Qn.hasOwnProperty(d)
                  ? (o != null && d === "onScroll" && V("scroll", e),
                    l || a === o || (l = []))
                  : (l = l || []).push(d, o));
      }
      n && (l = l || []).push("style", n);
      var d = l;
      (t.updateQueue = d) && (t.flags |= 4);
    }
  };
  wc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Mn(e, t) {
    if (!W)
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
  function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function lp(e, t, n) {
    var r = t.pendingProps;
    switch ((Ds(t), t.tag)) {
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
        return ae(t), null;
      case 1:
        return we(t.type) && ri(), ae(t), null;
      case 3:
        return (
          (r = t.stateNode),
          yn(),
          H(ye),
          H(ce),
          Gs(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (_r(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), $e !== null && (as($e), ($e = null)))),
          es(e, t),
          ae(t),
          null
        );
      case 5:
        Hs(t);
        var i = Dt(lr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          yc(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(k(166));
            return ae(t), null;
          }
          if (((e = Dt(Ye.current)), _r(t))) {
            (r = t.stateNode), (n = t.type);
            var l = t.memoizedProps;
            switch (((r[We] = t), (r[rr] = l), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                V("cancel", r), V("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fn.length; i++) V(Fn[i], r);
                break;
              case "source":
                V("error", r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", r), V("load", r);
                break;
              case "details":
                V("toggle", r);
                break;
              case "input":
                vo(r, l), V("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!l.multiple }),
                  V("invalid", r);
                break;
              case "textarea":
                yo(r, l), V("invalid", r);
            }
            _l(n, l), (i = null);
            for (var s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (l.suppressHydrationWarning !== !0 &&
                        Pr(r.textContent, a, e),
                      (i = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (l.suppressHydrationWarning !== !0 &&
                        Pr(r.textContent, a, e),
                      (i = ["children", "" + a]))
                  : Qn.hasOwnProperty(s) &&
                    a != null &&
                    s === "onScroll" &&
                    V("scroll", r);
              }
            switch (n) {
              case "input":
                yr(r), go(r, l, !0);
                break;
              case "textarea":
                yr(r), wo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = ni);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ba(n)),
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
              (e[We] = t),
              (e[rr] = r),
              gc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = Ll(n, r)), n)) {
                case "dialog":
                  V("cancel", e), V("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  V("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Fn.length; i++) V(Fn[i], e);
                  i = r;
                  break;
                case "source":
                  V("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  V("error", e), V("load", e), (i = r);
                  break;
                case "details":
                  V("toggle", e), (i = r);
                  break;
                case "input":
                  vo(e, r), (i = xl(e, r)), V("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = Y({}, r, { value: void 0 })),
                    V("invalid", e);
                  break;
                case "textarea":
                  yo(e, r), (i = kl(e, r)), V("invalid", e);
                  break;
                default:
                  i = r;
              }
              _l(n, i), (a = i);
              for (l in a)
                if (a.hasOwnProperty(l)) {
                  var o = a[l];
                  l === "style"
                    ? Xa(e, o)
                    : l === "dangerouslySetInnerHTML"
                    ? ((o = o ? o.__html : void 0), o != null && Qa(e, o))
                    : l === "children"
                    ? typeof o == "string"
                      ? (n !== "textarea" || o !== "") && Yn(e, o)
                      : typeof o == "number" && Yn(e, "" + o)
                    : l !== "suppressContentEditableWarning" &&
                      l !== "suppressHydrationWarning" &&
                      l !== "autoFocus" &&
                      (Qn.hasOwnProperty(l)
                        ? o != null && l === "onScroll" && V("scroll", e)
                        : o != null && ws(e, l, o, s));
                }
              switch (n) {
                case "input":
                  yr(e), go(e, r, !1);
                  break;
                case "textarea":
                  yr(e), wo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + xt(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (l = r.value),
                    l != null
                      ? an(e, !!r.multiple, l, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ni);
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
        return ae(t), null;
      case 6:
        if (e && t.stateNode != null) wc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
          if (((n = Dt(lr.current)), Dt(Ye.current), _r(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[We] = t),
              (l = r.nodeValue !== n) && ((e = Te), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Pr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[We] = t),
              (t.stateNode = r);
        }
        return ae(t), null;
      case 13:
        if (
          (H(b),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (W && Ce !== null && t.mode & 1 && !(t.flags & 128))
            Fu(), vn(), (t.flags |= 98560), (l = !1);
          else if (((l = _r(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(k(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(k(317));
              l[We] = t;
            } else
              vn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            ae(t), (l = !1);
          } else $e !== null && (as($e), ($e = null)), (l = !0);
          if (!l) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || b.current & 1 ? te === 0 && (te = 3) : to())),
            t.updateQueue !== null && (t.flags |= 4),
            ae(t),
            null);
      case 4:
        return (
          yn(),
          es(e, t),
          e === null && tr(t.stateNode.containerInfo),
          ae(t),
          null
        );
      case 10:
        return js(t.type._context), ae(t), null;
      case 17:
        return we(t.type) && ri(), ae(t), null;
      case 19:
        if ((H(b), (l = t.memoizedState), l === null)) return ae(t), null;
        if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
          if (r) Mn(l, !1);
          else {
            if (te !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = ci(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Mn(l, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (l = n),
                      (e = r),
                      (l.flags &= 14680066),
                      (s = l.alternate),
                      s === null
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.subtreeFlags = 0),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = s.childLanes),
                          (l.lanes = s.lanes),
                          (l.child = s.child),
                          (l.subtreeFlags = 0),
                          (l.deletions = null),
                          (l.memoizedProps = s.memoizedProps),
                          (l.memoizedState = s.memoizedState),
                          (l.updateQueue = s.updateQueue),
                          (l.type = s.type),
                          (e = s.dependencies),
                          (l.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return B(b, (b.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null &&
              K() > Sn &&
              ((t.flags |= 128), (r = !0), Mn(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ci(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Mn(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !s.alternate &&
                  !W)
              )
                return ae(t), null;
            } else
              2 * K() - l.renderingStartTime > Sn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Mn(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = l.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (l.last = s));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = K()),
            (t.sibling = null),
            (n = b.current),
            B(b, r ? (n & 1) | 2 : n & 1),
            t)
          : (ae(t), null);
      case 22:
      case 23:
        return (
          eo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Ee & 1073741824 &&
              (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ae(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, t.tag));
  }
  function sp(e, t) {
    switch ((Ds(t), t.tag)) {
      case 1:
        return (
          we(t.type) && ri(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          yn(),
          H(ye),
          H(ce),
          Gs(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Hs(t), null;
      case 13:
        if (
          (H(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(k(340));
          vn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return H(b), null;
      case 4:
        return yn(), null;
      case 10:
        return js(t.type._context), null;
      case 22:
      case 23:
        return eo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Mr = !1,
    ue = !1,
    op = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
  function sn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          X(e, t, r);
        }
      else n.current = null;
  }
  function ts(e, t, n) {
    try {
      n();
    } catch (r) {
      X(e, t, r);
    }
  }
  var aa = !1;
  function ap(e, t) {
    if (((jl = Jr), (e = Cu()), Ns(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              a = -1,
              o = -1,
              d = 0,
              p = 0,
              m = e,
              h = null;
            t: for (;;) {
              for (
                var v;
                m !== n || (i !== 0 && m.nodeType !== 3) || (a = s + i),
                  m !== l || (r !== 0 && m.nodeType !== 3) || (o = s + r),
                  m.nodeType === 3 && (s += m.nodeValue.length),
                  (v = m.firstChild) !== null;

              )
                (h = m), (m = v);
              for (;;) {
                if (m === e) break t;
                if (
                  (h === n && ++d === i && (a = s),
                  h === l && ++p === r && (o = s),
                  (v = m.nextSibling) !== null)
                )
                  break;
                (m = h), (h = m.parentNode);
              }
              m = v;
            }
            n = a === -1 || o === -1 ? null : { start: a, end: o };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      $l = { focusedElem: e, selectionRange: n }, Jr = !1, z = t;
      z !== null;

    )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e);
      else
        for (; z !== null; ) {
          t = z;
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
                      x = w.memoizedState,
                      f = t.stateNode,
                      u = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? y : Ae(t.type, y),
                        x
                      );
                    f.__reactInternalSnapshotBeforeUpdate = u;
                  }
                  break;
                case 3:
                  var c = t.stateNode.containerInfo;
                  c.nodeType === 1
                    ? (c.textContent = "")
                    : c.nodeType === 9 &&
                      c.documentElement &&
                      c.removeChild(c.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(k(163));
              }
          } catch (g) {
            X(t, t.return, g);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (z = e);
            break;
          }
          z = t.return;
        }
    return (w = aa), (aa = !1), w;
  }
  function Gn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          (i.destroy = void 0), l !== void 0 && ts(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Mi(e, t) {
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
  function ns(e) {
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
  function Sc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Sc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[We],
          delete t[rr],
          delete t[Hl],
          delete t[Uf],
          delete t[Wf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ec(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ua(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ec(e.return)) return null;
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
  function rs(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = ni));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (rs(e, t, n), e = e.sibling; e !== null; )
        rs(e, t, n), (e = e.sibling);
  }
  function is(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (is(e, t, n), e = e.sibling; e !== null; )
        is(e, t, n), (e = e.sibling);
  }
  var ie = null,
    je = !1;
  function st(e, t, n) {
    for (n = n.child; n !== null; ) xc(e, t, n), (n = n.sibling);
  }
  function xc(e, t, n) {
    if (Qe && typeof Qe.onCommitFiberUnmount == "function")
      try {
        Qe.onCommitFiberUnmount(xi, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ue || sn(n, t);
      case 6:
        var r = ie,
          i = je;
        (ie = null),
          st(e, t, n),
          (ie = r),
          (je = i),
          ie !== null &&
            (je
              ? ((e = ie),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ie.removeChild(n.stateNode));
        break;
      case 18:
        ie !== null &&
          (je
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8
                ? el(e.parentNode, n)
                : e.nodeType === 1 && el(e, n),
              Zn(e))
            : el(ie, n.stateNode));
        break;
      case 4:
        (r = ie),
          (i = je),
          (ie = n.stateNode.containerInfo),
          (je = !0),
          st(e, t, n),
          (ie = r),
          (je = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ue &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var l = i,
              s = l.destroy;
            (l = l.tag),
              s !== void 0 && (l & 2 || l & 4) && ts(n, t, s),
              (i = i.next);
          } while (i !== r);
        }
        st(e, t, n);
        break;
      case 1:
        if (
          !ue &&
          (sn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            X(n, t, a);
          }
        st(e, t, n);
        break;
      case 21:
        st(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ue = (r = ue) || n.memoizedState !== null), st(e, t, n), (ue = r))
          : st(e, t, n);
        break;
      default:
        st(e, t, n);
    }
  }
  function ca(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new op()),
        t.forEach(function (r) {
          var i = gp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Fe(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var l = e,
            s = t,
            a = s;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (ie = a.stateNode), (je = !1);
                break e;
              case 3:
                (ie = a.stateNode.containerInfo), (je = !0);
                break e;
              case 4:
                (ie = a.stateNode.containerInfo), (je = !0);
                break e;
            }
            a = a.return;
          }
          if (ie === null) throw Error(k(160));
          xc(l, s, i), (ie = null), (je = !1);
          var o = i.alternate;
          o !== null && (o.return = null), (i.return = null);
        } catch (d) {
          X(i, t, d);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Cc(t, e), (t = t.sibling);
  }
  function Cc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Fe(t, e), Ge(e), r & 4)) {
          try {
            Gn(3, e, e.return), Mi(3, e);
          } catch (y) {
            X(e, e.return, y);
          }
          try {
            Gn(5, e, e.return);
          } catch (y) {
            X(e, e.return, y);
          }
        }
        break;
      case 1:
        Fe(t, e), Ge(e), r & 512 && n !== null && sn(n, n.return);
        break;
      case 5:
        if (
          (Fe(t, e),
          Ge(e),
          r & 512 && n !== null && sn(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Yn(i, "");
          } catch (y) {
            X(e, e.return, y);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var l = e.memoizedProps,
            s = n !== null ? n.memoizedProps : l,
            a = e.type,
            o = e.updateQueue;
          if (((e.updateQueue = null), o !== null))
            try {
              a === "input" && l.type === "radio" && l.name != null && Ua(i, l),
                Ll(a, s);
              var d = Ll(a, l);
              for (s = 0; s < o.length; s += 2) {
                var p = o[s],
                  m = o[s + 1];
                p === "style"
                  ? Xa(i, m)
                  : p === "dangerouslySetInnerHTML"
                  ? Qa(i, m)
                  : p === "children"
                  ? Yn(i, m)
                  : ws(i, p, m, d);
              }
              switch (a) {
                case "input":
                  Cl(i, l);
                  break;
                case "textarea":
                  Wa(i, l);
                  break;
                case "select":
                  var h = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!l.multiple;
                  var v = l.value;
                  v != null
                    ? an(i, !!l.multiple, v, !1)
                    : h !== !!l.multiple &&
                      (l.defaultValue != null
                        ? an(i, !!l.multiple, l.defaultValue, !0)
                        : an(i, !!l.multiple, l.multiple ? [] : "", !1));
              }
              i[rr] = l;
            } catch (y) {
              X(e, e.return, y);
            }
        }
        break;
      case 6:
        if ((Fe(t, e), Ge(e), r & 4)) {
          if (e.stateNode === null) throw Error(k(162));
          (i = e.stateNode), (l = e.memoizedProps);
          try {
            i.nodeValue = l;
          } catch (y) {
            X(e, e.return, y);
          }
        }
        break;
      case 3:
        if (
          (Fe(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Zn(t.containerInfo);
          } catch (y) {
            X(e, e.return, y);
          }
        break;
      case 4:
        Fe(t, e), Ge(e);
        break;
      case 13:
        Fe(t, e),
          Ge(e),
          (i = e.child),
          i.flags & 8192 &&
            ((l = i.memoizedState !== null),
            (i.stateNode.isHidden = l),
            !l ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Zs = K())),
          r & 4 && ca(e);
        break;
      case 22:
        if (
          ((p = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ue = (d = ue) || p), Fe(t, e), (ue = d)) : Fe(t, e),
          Ge(e),
          r & 8192)
        ) {
          if (
            ((d = e.memoizedState !== null),
            (e.stateNode.isHidden = d) && !p && e.mode & 1)
          )
            for (z = e, p = e.child; p !== null; ) {
              for (m = z = p; z !== null; ) {
                switch (((h = z), (v = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Gn(4, h, h.return);
                    break;
                  case 1:
                    sn(h, h.return);
                    var w = h.stateNode;
                    if (typeof w.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (t = r),
                          (w.props = t.memoizedProps),
                          (w.state = t.memoizedState),
                          w.componentWillUnmount();
                      } catch (y) {
                        X(r, n, y);
                      }
                    }
                    break;
                  case 5:
                    sn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      fa(m);
                      continue;
                    }
                }
                v !== null ? ((v.return = h), (z = v)) : fa(m);
              }
              p = p.sibling;
            }
          e: for (p = null, m = e; ; ) {
            if (m.tag === 5) {
              if (p === null) {
                p = m;
                try {
                  (i = m.stateNode),
                    d
                      ? ((l = i.style),
                        typeof l.setProperty == "function"
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none"))
                      : ((a = m.stateNode),
                        (o = m.memoizedProps.style),
                        (s =
                          o != null && o.hasOwnProperty("display")
                            ? o.display
                            : null),
                        (a.style.display = Ya("display", s)));
                } catch (y) {
                  X(e, e.return, y);
                }
              }
            } else if (m.tag === 6) {
              if (p === null)
                try {
                  m.stateNode.nodeValue = d ? "" : m.memoizedProps;
                } catch (y) {
                  X(e, e.return, y);
                }
            } else if (
              ((m.tag !== 22 && m.tag !== 23) ||
                m.memoizedState === null ||
                m === e) &&
              m.child !== null
            ) {
              (m.child.return = m), (m = m.child);
              continue;
            }
            if (m === e) break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e) break e;
              p === m && (p = null), (m = m.return);
            }
            p === m && (p = null),
              (m.sibling.return = m.return),
              (m = m.sibling);
          }
        }
        break;
      case 19:
        Fe(t, e), Ge(e), r & 4 && ca(e);
        break;
      case 21:
        break;
      default:
        Fe(t, e), Ge(e);
    }
  }
  function Ge(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ec(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(k(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Yn(i, ""), (r.flags &= -33));
            var l = ua(e);
            is(e, l, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              a = ua(e);
            rs(e, a, s);
            break;
          default:
            throw Error(k(161));
        }
      } catch (o) {
        X(e, e.return, o);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function up(e, t, n) {
    (z = e), Tc(e);
  }
  function Tc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var i = z,
        l = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Mr;
        if (!s) {
          var a = i.alternate,
            o = (a !== null && a.memoizedState !== null) || ue;
          a = Mr;
          var d = ue;
          if (((Mr = s), (ue = o) && !d))
            for (z = i; z !== null; )
              (s = z),
                (o = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? pa(i)
                  : o !== null
                  ? ((o.return = s), (z = o))
                  : pa(i);
          for (; l !== null; ) (z = l), Tc(l), (l = l.sibling);
          (z = i), (Mr = a), (ue = d);
        }
        da(e);
      } else
        i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (z = l)) : da(e);
    }
  }
  function da(e) {
    for (; z !== null; ) {
      var t = z;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ue || Mi(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ue)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ae(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var l = t.updateQueue;
                l !== null && Yo(t, l, r);
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
                  Yo(t, s, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var o = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      o.autoFocus && n.focus();
                      break;
                    case "img":
                      o.src && (n.src = o.src);
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
                  var d = t.alternate;
                  if (d !== null) {
                    var p = d.memoizedState;
                    if (p !== null) {
                      var m = p.dehydrated;
                      m !== null && Zn(m);
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
                throw Error(k(163));
            }
          ue || (t.flags & 512 && ns(t));
        } catch (h) {
          X(t, t.return, h);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function fa(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function pa(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Mi(4, t);
            } catch (o) {
              X(t, n, o);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (o) {
                X(t, i, o);
              }
            }
            var l = t.return;
            try {
              ns(t);
            } catch (o) {
              X(t, l, o);
            }
            break;
          case 5:
            var s = t.return;
            try {
              ns(t);
            } catch (o) {
              X(t, s, o);
            }
        }
      } catch (o) {
        X(t, t.return, o);
      }
      if (t === e) {
        z = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (z = a);
        break;
      }
      z = t.return;
    }
  }
  var cp = Math.ceil,
    pi = lt.ReactCurrentDispatcher,
    Ks = lt.ReactCurrentOwner,
    Ie = lt.ReactCurrentBatchConfig,
    A = 0,
    re = null,
    J = null,
    le = 0,
    Ee = 0,
    on = kt(0),
    te = 0,
    ur = null,
    Vt = 0,
    Oi = 0,
    qs = 0,
    Un = null,
    ve = null,
    Zs = 0,
    Sn = 1 / 0,
    Ke = null,
    mi = !1,
    ls = null,
    wt = null,
    Or = !1,
    ft = null,
    hi = 0,
    Wn = 0,
    ss = null,
    Ur = -1,
    Wr = 0;
  function pe() {
    return A & 6 ? K() : Ur !== -1 ? Ur : (Ur = K());
  }
  function St(e) {
    return e.mode & 1
      ? A & 2 && le !== 0
        ? le & -le
        : Qf.transition !== null
        ? (Wr === 0 && (Wr = ou()), Wr)
        : ((e = j),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mu(e.type))),
          e)
      : 1;
  }
  function Ve(e, t, n, r) {
    if (50 < Wn) throw ((Wn = 0), (ss = null), Error(k(185)));
    dr(e, n, r),
      (!(A & 2) || e !== re) &&
        (e === re && (!(A & 2) && (Oi |= n), te === 4 && ct(e, le)),
        Se(e, r),
        n === 1 && A === 0 && !(t.mode & 1) && ((Sn = K() + 500), _i && Pt()));
  }
  function Se(e, t) {
    var n = e.callbackNode;
    bd(e, t);
    var r = Zr(e, e === re ? le : 0);
    if (r === 0)
      n !== null && xo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && xo(n), t === 1))
        e.tag === 0 ? bf(ma.bind(null, e)) : Iu(ma.bind(null, e)),
          Hf(function () {
            !(A & 6) && Pt();
          }),
          (n = null);
      else {
        switch (au(r)) {
          case 1:
            n = Ts;
            break;
          case 4:
            n = lu;
            break;
          case 16:
            n = qr;
            break;
          case 536870912:
            n = su;
            break;
          default:
            n = qr;
        }
        n = Nc(n, kc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function kc(e, t) {
    if (((Ur = -1), (Wr = 0), A & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (pn() && e.callbackNode !== n) return null;
    var r = Zr(e, e === re ? le : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = vi(e, r);
    else {
      t = r;
      var i = A;
      A |= 2;
      var l = _c();
      (re !== e || le !== t) && ((Ke = null), (Sn = K() + 500), Rt(e, t));
      do
        try {
          pp();
          break;
        } catch (a) {
          Pc(e, a);
        }
      while (1);
      As(),
        (pi.current = l),
        (A = i),
        J !== null ? (t = 0) : ((re = null), (le = 0), (t = te));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Il(e)), i !== 0 && ((r = i), (t = os(e, i)))),
        t === 1)
      )
        throw ((n = ur), Rt(e, 0), ct(e, r), Se(e, K()), n);
      if (t === 6) ct(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !dp(i) &&
            ((t = vi(e, r)),
            t === 2 && ((l = Il(e)), l !== 0 && ((r = l), (t = os(e, l)))),
            t === 1))
        )
          throw ((n = ur), Rt(e, 0), ct(e, r), Se(e, K()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Ot(e, ve, Ke);
            break;
          case 3:
            if (
              (ct(e, r),
              (r & 130023424) === r && ((t = Zs + 500 - K()), 10 < t))
            ) {
              if (Zr(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                pe(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Vl(Ot.bind(null, e, ve, Ke), t);
              break;
            }
            Ot(e, ve, Ke);
            break;
          case 4:
            if ((ct(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - Be(r);
              (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
            }
            if (
              ((r = i),
              (r = K() - r),
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
                  : 1960 * cp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Vl(Ot.bind(null, e, ve, Ke), r);
              break;
            }
            Ot(e, ve, Ke);
            break;
          case 5:
            Ot(e, ve, Ke);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return Se(e, K()), e.callbackNode === n ? kc.bind(null, e) : null;
  }
  function os(e, t) {
    var n = Un;
    return (
      e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
      (e = vi(e, t)),
      e !== 2 && ((t = ve), (ve = n), t !== null && as(t)),
      e
    );
  }
  function as(e) {
    ve === null ? (ve = e) : ve.push.apply(ve, e);
  }
  function dp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              l = i.getSnapshot;
            i = i.value;
            try {
              if (!He(l(), i)) return !1;
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
  function ct(e, t) {
    for (
      t &= ~qs,
        t &= ~Oi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Be(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function ma(e) {
    if (A & 6) throw Error(k(327));
    pn();
    var t = Zr(e, 0);
    if (!(t & 1)) return Se(e, K()), null;
    var n = vi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Il(e);
      r !== 0 && ((t = r), (n = os(e, r)));
    }
    if (n === 1) throw ((n = ur), Rt(e, 0), ct(e, t), Se(e, K()), n);
    if (n === 6) throw Error(k(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ot(e, ve, Ke),
      Se(e, K()),
      null
    );
  }
  function Js(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      (A = n), A === 0 && ((Sn = K() + 500), _i && Pt());
    }
  }
  function Ht(e) {
    ft !== null && ft.tag === 0 && !(A & 6) && pn();
    var t = A;
    A |= 1;
    var n = Ie.transition,
      r = j;
    try {
      if (((Ie.transition = null), (j = 1), e)) return e();
    } finally {
      (j = r), (Ie.transition = n), (A = t), !(A & 6) && Pt();
    }
  }
  function eo() {
    (Ee = on.current), H(on);
  }
  function Rt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Vf(n)), J !== null))
      for (n = J.return; n !== null; ) {
        var r = n;
        switch ((Ds(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ri();
            break;
          case 3:
            yn(), H(ye), H(ce), Gs();
            break;
          case 5:
            Hs(r);
            break;
          case 4:
            yn();
            break;
          case 13:
            H(b);
            break;
          case 19:
            H(b);
            break;
          case 10:
            js(r.type._context);
            break;
          case 22:
          case 23:
            eo();
        }
        n = n.return;
      }
    if (
      ((re = e),
      (J = e = Et(e.current, null)),
      (le = Ee = t),
      (te = 0),
      (ur = null),
      (qs = Oi = Vt = 0),
      (ve = Un = null),
      It !== null)
    ) {
      for (t = 0; t < It.length; t++)
        if (((n = It[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            l = n.pending;
          if (l !== null) {
            var s = l.next;
            (l.next = i), (r.next = s);
          }
          n.pending = r;
        }
      It = null;
    }
    return e;
  }
  function Pc(e, t) {
    do {
      var n = J;
      try {
        if ((As(), (Vr.current = fi), di)) {
          for (var r = Q.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          di = !1;
        }
        if (
          ((Bt = 0),
          (ne = ee = Q = null),
          (Hn = !1),
          (sr = 0),
          (Ks.current = null),
          n === null || n.return === null)
        ) {
          (te = 1), (ur = t), (J = null);
          break;
        }
        e: {
          var l = e,
            s = n.return,
            a = n,
            o = t;
          if (
            ((t = le),
            (a.flags |= 32768),
            o !== null && typeof o == "object" && typeof o.then == "function")
          ) {
            var d = o,
              p = a,
              m = p.tag;
            if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
              var h = p.alternate;
              h
                ? ((p.updateQueue = h.updateQueue),
                  (p.memoizedState = h.memoizedState),
                  (p.lanes = h.lanes))
                : ((p.updateQueue = null), (p.memoizedState = null));
            }
            var v = ta(s);
            if (v !== null) {
              (v.flags &= -257),
                na(v, s, a, l, t),
                v.mode & 1 && ea(l, d, t),
                (t = v),
                (o = d);
              var w = t.updateQueue;
              if (w === null) {
                var y = new Set();
                y.add(o), (t.updateQueue = y);
              } else w.add(o);
              break e;
            } else {
              if (!(t & 1)) {
                ea(l, d, t), to();
                break e;
              }
              o = Error(k(426));
            }
          } else if (W && a.mode & 1) {
            var x = ta(s);
            if (x !== null) {
              !(x.flags & 65536) && (x.flags |= 256),
                na(x, s, a, l, t),
                Rs(wn(o, a));
              break e;
            }
          }
          (l = o = wn(o, a)),
            te !== 4 && (te = 2),
            Un === null ? (Un = [l]) : Un.push(l),
            (l = s);
          do {
            switch (l.tag) {
              case 3:
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var f = uc(l, o, t);
                Qo(l, f);
                break e;
              case 1:
                a = o;
                var u = l.type,
                  c = l.stateNode;
                if (
                  !(l.flags & 128) &&
                  (typeof u.getDerivedStateFromError == "function" ||
                    (c !== null &&
                      typeof c.componentDidCatch == "function" &&
                      (wt === null || !wt.has(c))))
                ) {
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                  var g = cc(l, a, t);
                  Qo(l, g);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        zc(n);
      } catch (S) {
        (t = S), J === n && n !== null && (J = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function _c() {
    var e = pi.current;
    return (pi.current = fi), e === null ? fi : e;
  }
  function to() {
    (te === 0 || te === 3 || te === 2) && (te = 4),
      re === null || (!(Vt & 268435455) && !(Oi & 268435455)) || ct(re, le);
  }
  function vi(e, t) {
    var n = A;
    A |= 2;
    var r = _c();
    (re !== e || le !== t) && ((Ke = null), Rt(e, t));
    do
      try {
        fp();
        break;
      } catch (i) {
        Pc(e, i);
      }
    while (1);
    if ((As(), (A = n), (pi.current = r), J !== null)) throw Error(k(261));
    return (re = null), (le = 0), te;
  }
  function fp() {
    for (; J !== null; ) Lc(J);
  }
  function pp() {
    for (; J !== null && !Ad(); ) Lc(J);
  }
  function Lc(e) {
    var t = Oc(e.alternate, e, Ee);
    (e.memoizedProps = e.pendingProps),
      t === null ? zc(e) : (J = t),
      (Ks.current = null);
  }
  function zc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = sp(n, t)), n !== null)) {
          (n.flags &= 32767), (J = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (te = 6), (J = null);
          return;
        }
      } else if (((n = lp(n, t, Ee)), n !== null)) {
        J = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        J = t;
        return;
      }
      J = t = e;
    } while (t !== null);
    te === 0 && (te = 5);
  }
  function Ot(e, t, n) {
    var r = j,
      i = Ie.transition;
    try {
      (Ie.transition = null), (j = 1), mp(e, t, n, r);
    } finally {
      (Ie.transition = i), (j = r);
    }
    return null;
  }
  function mp(e, t, n, r) {
    do pn();
    while (ft !== null);
    if (A & 6) throw Error(k(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
      (Qd(e, l),
      e === re && ((J = re = null), (le = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Or ||
        ((Or = !0),
        Nc(qr, function () {
          return pn(), null;
        })),
      (l = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || l)
    ) {
      (l = Ie.transition), (Ie.transition = null);
      var s = j;
      j = 1;
      var a = A;
      (A |= 4),
        (Ks.current = null),
        ap(e, n),
        Cc(n, e),
        Df($l),
        (Jr = !!jl),
        ($l = jl = null),
        (e.current = n),
        up(n),
        jd(),
        (A = a),
        (j = s),
        (Ie.transition = l);
    } else e.current = n;
    if (
      (Or && ((Or = !1), (ft = e), (hi = i)),
      (l = e.pendingLanes),
      l === 0 && (wt = null),
      Vd(n.stateNode),
      Se(e, K()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (mi) throw ((mi = !1), (e = ls), (ls = null), e);
    return (
      hi & 1 && e.tag !== 0 && pn(),
      (l = e.pendingLanes),
      l & 1 ? (e === ss ? Wn++ : ((Wn = 0), (ss = e))) : (Wn = 0),
      Pt(),
      null
    );
  }
  function pn() {
    if (ft !== null) {
      var e = au(hi),
        t = Ie.transition,
        n = j;
      try {
        if (((Ie.transition = null), (j = 16 > e ? 16 : e), ft === null))
          var r = !1;
        else {
          if (((e = ft), (ft = null), (hi = 0), A & 6)) throw Error(k(331));
          var i = A;
          for (A |= 4, z = e.current; z !== null; ) {
            var l = z,
              s = l.child;
            if (z.flags & 16) {
              var a = l.deletions;
              if (a !== null) {
                for (var o = 0; o < a.length; o++) {
                  var d = a[o];
                  for (z = d; z !== null; ) {
                    var p = z;
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gn(8, p, l);
                    }
                    var m = p.child;
                    if (m !== null) (m.return = p), (z = m);
                    else
                      for (; z !== null; ) {
                        p = z;
                        var h = p.sibling,
                          v = p.return;
                        if ((Sc(p), p === d)) {
                          z = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = v), (z = h);
                          break;
                        }
                        z = v;
                      }
                  }
                }
                var w = l.alternate;
                if (w !== null) {
                  var y = w.child;
                  if (y !== null) {
                    w.child = null;
                    do {
                      var x = y.sibling;
                      (y.sibling = null), (y = x);
                    } while (y !== null);
                  }
                }
                z = l;
              }
            }
            if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (z = s);
            else
              e: for (; z !== null; ) {
                if (((l = z), l.flags & 2048))
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  (f.return = l.return), (z = f);
                  break e;
                }
                z = l.return;
              }
          }
          var u = e.current;
          for (z = u; z !== null; ) {
            s = z;
            var c = s.child;
            if (s.subtreeFlags & 2064 && c !== null) (c.return = s), (z = c);
            else
              e: for (s = u; z !== null; ) {
                if (((a = z), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mi(9, a);
                    }
                  } catch (S) {
                    X(a, a.return, S);
                  }
                if (a === s) {
                  z = null;
                  break e;
                }
                var g = a.sibling;
                if (g !== null) {
                  (g.return = a.return), (z = g);
                  break e;
                }
                z = a.return;
              }
          }
          if (
            ((A = i), Pt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
          )
            try {
              Qe.onPostCommitFiberRoot(xi, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (j = n), (Ie.transition = t);
      }
    }
    return !1;
  }
  function ha(e, t, n) {
    (t = wn(n, t)),
      (t = uc(e, t, 1)),
      (e = yt(e, t, 1)),
      (t = pe()),
      e !== null && (dr(e, 1, t), Se(e, t));
  }
  function X(e, t, n) {
    if (e.tag === 3) ha(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ha(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (wt === null || !wt.has(r)))
          ) {
            (e = wn(n, e)),
              (e = cc(t, e, 1)),
              (t = yt(t, e, 1)),
              (e = pe()),
              t !== null && (dr(t, 1, e), Se(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function hp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      re === e &&
        (le & n) === n &&
        (te === 4 || (te === 3 && (le & 130023424) === le && 500 > K() - Zs)
          ? Rt(e, 0)
          : (qs |= n)),
      Se(e, t);
  }
  function Mc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
        : (t = 1));
    var n = pe();
    (e = rt(e, t)), e !== null && (dr(e, t, n), Se(e, n));
  }
  function vp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Mc(e, n);
  }
  function gp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    r !== null && r.delete(t), Mc(e, n);
  }
  var Oc;
  Oc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), ip(e, t, n);
        ge = !!(e.flags & 131072);
      }
    else (ge = !1), W && t.flags & 1048576 && Du(t, si, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Gr(e, t), (e = t.pendingProps);
        var i = hn(t, ce.current);
        fn(t, n), (i = Ws(null, t, r, e, i, n));
        var l = bs();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              we(r) ? ((l = !0), ii(t)) : (l = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Bs(t),
              (i.updater = Li),
              (t.stateNode = i),
              (i._reactInternals = t),
              Yl(t, r, e, n),
              (t = ql(null, t, r, !0, l, n)))
            : ((t.tag = 0), W && l && Is(t), fe(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Gr(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = wp(r)),
            (e = Ae(r, e)),
            i)
          ) {
            case 0:
              t = Kl(null, t, r, e, n);
              break e;
            case 1:
              t = la(null, t, r, e, n);
              break e;
            case 11:
              t = ra(null, t, r, e, n);
              break e;
            case 14:
              t = ia(null, t, r, Ae(r.type, e), n);
              break e;
          }
          throw Error(k(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ae(r, i)),
          Kl(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ae(r, i)),
          la(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((mc(t), e === null)) throw Error(k(387));
          (r = t.pendingProps),
            (l = t.memoizedState),
            (i = l.element),
            ju(e, t),
            ui(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), l.isDehydrated))
            if (
              ((l = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              (i = wn(Error(k(423)), t)), (t = sa(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = wn(Error(k(424)), t)), (t = sa(e, t, r, n, i));
              break e;
            } else
              for (
                Ce = gt(t.stateNode.containerInfo.firstChild),
                  Te = t,
                  W = !0,
                  $e = null,
                  n = Hu(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((vn(), r === i)) {
              t = it(e, t, n);
              break e;
            }
            fe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Gu(t),
          e === null && Wl(t),
          (r = t.type),
          (i = t.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (s = i.children),
          Bl(r, i) ? (s = null) : l !== null && Bl(r, l) && (t.flags |= 32),
          pc(e, t),
          fe(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && Wl(t), null;
      case 13:
        return hc(e, t, n);
      case 4:
        return (
          Vs(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = gn(t, null, r, n)) : fe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ae(r, i)),
          ra(e, t, r, i, n)
        );
      case 7:
        return fe(e, t, t.pendingProps, n), t.child;
      case 8:
        return fe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return fe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (l = t.memoizedProps),
            (s = i.value),
            B(oi, r._currentValue),
            (r._currentValue = s),
            l !== null)
          )
            if (He(l.value, s)) {
              if (l.children === i.children && !ye.current) {
                t = it(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var a = l.dependencies;
                if (a !== null) {
                  s = l.child;
                  for (var o = a.firstContext; o !== null; ) {
                    if (o.context === r) {
                      if (l.tag === 1) {
                        (o = et(-1, n & -n)), (o.tag = 2);
                        var d = l.updateQueue;
                        if (d !== null) {
                          d = d.shared;
                          var p = d.pending;
                          p === null
                            ? (o.next = o)
                            : ((o.next = p.next), (p.next = o)),
                            (d.pending = o);
                        }
                      }
                      (l.lanes |= n),
                        (o = l.alternate),
                        o !== null && (o.lanes |= n),
                        bl(l.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    o = o.next;
                  }
                } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((s = l.return), s === null)) throw Error(k(341));
                  (s.lanes |= n),
                    (a = s.alternate),
                    a !== null && (a.lanes |= n),
                    bl(s, n, t),
                    (s = l.sibling);
                } else s = l.child;
                if (s !== null) s.return = l;
                else
                  for (s = l; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((l = s.sibling), l !== null)) {
                      (l.return = s.return), (s = l);
                      break;
                    }
                    s = s.return;
                  }
                l = s;
              }
          fe(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          fn(t, n),
          (i = De(i)),
          (r = r(i)),
          (t.flags |= 1),
          fe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = Ae(r, t.pendingProps)),
          (i = Ae(r.type, i)),
          ia(e, t, r, i, n)
        );
      case 15:
        return dc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Ae(r, i)),
          Gr(e, t),
          (t.tag = 1),
          we(r) ? ((e = !0), ii(t)) : (e = !1),
          fn(t, n),
          Bu(t, r, i),
          Yl(t, r, i, n),
          ql(null, t, r, !0, e, n)
        );
      case 19:
        return vc(e, t, n);
      case 22:
        return fc(e, t, n);
    }
    throw Error(k(156, t.tag));
  };
  function Nc(e, t) {
    return iu(e, t);
  }
  function yp(e, t, n, r) {
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
  function Ne(e, t, n, r) {
    return new yp(e, t, n, r);
  }
  function no(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function wp(e) {
    if (typeof e == "function") return no(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Es)) return 11;
      if (e === xs) return 14;
    }
    return 2;
  }
  function Et(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ne(e.tag, t, e.key, e.mode)),
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
  function br(e, t, n, r, i, l) {
    var s = 2;
    if (((r = e), typeof e == "function")) no(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case Kt:
          return Ft(n.children, i, l, t);
        case Ss:
          (s = 8), (i |= 8);
          break;
        case yl:
          return (
            (e = Ne(12, n, t, i | 2)), (e.elementType = yl), (e.lanes = l), e
          );
        case wl:
          return (e = Ne(13, n, t, i)), (e.elementType = wl), (e.lanes = l), e;
        case Sl:
          return (e = Ne(19, n, t, i)), (e.elementType = Sl), (e.lanes = l), e;
        case Va:
          return Ni(n, i, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $a:
                s = 10;
                break e;
              case Ba:
                s = 9;
                break e;
              case Es:
                s = 11;
                break e;
              case xs:
                s = 14;
                break e;
              case ot:
                (s = 16), (r = null);
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ne(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
    );
  }
  function Ft(e, t, n, r) {
    return (e = Ne(7, e, r, t)), (e.lanes = n), e;
  }
  function Ni(e, t, n, r) {
    return (
      (e = Ne(22, e, r, t)),
      (e.elementType = Va),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function al(e, t, n) {
    return (e = Ne(6, e, null, t)), (e.lanes = n), e;
  }
  function ul(e, t, n) {
    return (
      (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Sp(e, t, n, r, i) {
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
      (this.eventTimes = Gi(0)),
      (this.expirationTimes = Gi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ro(e, t, n, r, i, l, s, a, o) {
    return (
      (e = new Sp(e, t, n, a, o)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = Ne(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Bs(l),
      e
    );
  }
  function Ep(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Xt,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ic(e) {
    if (!e) return Ct;
    e = e._reactInternals;
    e: {
      if (Wt(e) !== e || e.tag !== 1) throw Error(k(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (we(t.type)) {
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
      if (we(n)) return Nu(e, n, t);
    }
    return t;
  }
  function Dc(e, t, n, r, i, l, s, a, o) {
    return (
      (e = ro(n, r, !0, e, i, l, s, a, o)),
      (e.context = Ic(null)),
      (n = e.current),
      (r = pe()),
      (i = St(n)),
      (l = et(r, i)),
      (l.callback = t ?? null),
      yt(n, l, i),
      (e.current.lanes = i),
      dr(e, i, r),
      Se(e, r),
      e
    );
  }
  function Ii(e, t, n, r) {
    var i = t.current,
      l = pe(),
      s = St(i);
    return (
      (n = Ic(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = et(l, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = yt(i, t, s)),
      e !== null && (Ve(e, i, s, l), Br(e, i, s)),
      s
    );
  }
  function gi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function va(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function io(e, t) {
    va(e, t), (e = e.alternate) && va(e, t);
  }
  function xp() {
    return null;
  }
  var Rc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function lo(e) {
    this._internalRoot = e;
  }
  Di.prototype.render = lo.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Ii(e, t, null, null);
  };
  Di.prototype.unmount = lo.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ht(function () {
        Ii(null, e, null, null);
      }),
        (t[nt] = null);
    }
  };
  function Di(e) {
    this._internalRoot = e;
  }
  Di.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = du();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
      ut.splice(n, 0, e), n === 0 && pu(e);
    }
  };
  function so(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ri(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ga() {}
  function Cp(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function () {
          var d = gi(s);
          l.call(d);
        };
      }
      var s = Dc(t, r, e, 0, null, !1, !1, "", ga);
      return (
        (e._reactRootContainer = s),
        (e[nt] = s.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        Ht(),
        s
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var d = gi(o);
        a.call(d);
      };
    }
    var o = ro(e, 0, !1, null, null, !1, !1, "", ga);
    return (
      (e._reactRootContainer = o),
      (e[nt] = o.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      Ht(function () {
        Ii(t, o, n, r);
      }),
      o
    );
  }
  function Fi(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var s = l;
      if (typeof i == "function") {
        var a = i;
        i = function () {
          var o = gi(s);
          a.call(o);
        };
      }
      Ii(t, s, e, i);
    } else s = Cp(n, t, e, i, r);
    return gi(s);
  }
  uu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Rn(t.pendingLanes);
          n !== 0 &&
            (ks(t, n | 1), Se(t, K()), !(A & 6) && ((Sn = K() + 500), Pt()));
        }
        break;
      case 13:
        Ht(function () {
          var r = rt(e, 1);
          if (r !== null) {
            var i = pe();
            Ve(r, e, 1, i);
          }
        }),
          io(e, 1);
    }
  };
  Ps = function (e) {
    if (e.tag === 13) {
      var t = rt(e, 134217728);
      if (t !== null) {
        var n = pe();
        Ve(t, e, 134217728, n);
      }
      io(e, 134217728);
    }
  };
  cu = function (e) {
    if (e.tag === 13) {
      var t = St(e),
        n = rt(e, t);
      if (n !== null) {
        var r = pe();
        Ve(n, e, t, r);
      }
      io(e, t);
    }
  };
  du = function () {
    return j;
  };
  fu = function (e, t) {
    var n = j;
    try {
      return (j = e), t();
    } finally {
      j = n;
    }
  };
  Ml = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
              var i = Pi(r);
              if (!i) throw Error(k(90));
              Ga(r), Cl(r, i);
            }
          }
        }
        break;
      case "textarea":
        Wa(e, n);
        break;
      case "select":
        (t = n.value), t != null && an(e, !!n.multiple, t, !1);
    }
  };
  Za = Js;
  Ja = Ht;
  var Tp = { usingClientEntryPoint: !1, Events: [pr, en, Pi, Ka, qa, Js] },
    On = {
      findFiberByHostInstance: Nt,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    kp = {
      bundleType: On.bundleType,
      version: On.version,
      rendererPackageName: On.rendererPackageName,
      rendererConfig: On.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: lt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = nu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: On.findFiberByHostInstance || xp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nr.isDisabled && Nr.supportsFiber)
      try {
        (xi = Nr.inject(kp)), (Qe = Nr);
      } catch {}
  }
  Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp;
  Pe.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!so(t)) throw Error(k(200));
    return Ep(e, t, null, n);
  };
  Pe.createRoot = function (e, t) {
    if (!so(e)) throw Error(k(299));
    var n = !1,
      r = "",
      i = Rc;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = ro(e, 1, !1, null, null, n, !1, r, i)),
      (e[nt] = t.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      new lo(t)
    );
  };
  Pe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(k(188))
        : ((e = Object.keys(e).join(",")), Error(k(268, e)));
    return (e = nu(t)), (e = e === null ? null : e.stateNode), e;
  };
  Pe.flushSync = function (e) {
    return Ht(e);
  };
  Pe.hydrate = function (e, t, n) {
    if (!Ri(t)) throw Error(k(200));
    return Fi(null, e, t, !0, n);
  };
  Pe.hydrateRoot = function (e, t, n) {
    if (!so(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      l = "",
      s = Rc;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (t = Dc(t, null, e, 1, n ?? null, i, !1, l, s)),
      (e[nt] = t.current),
      tr(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i);
    return new Di(t);
  };
  Pe.render = function (e, t, n) {
    if (!Ri(t)) throw Error(k(200));
    return Fi(null, e, t, !1, n);
  };
  Pe.unmountComponentAtNode = function (e) {
    if (!Ri(e)) throw Error(k(40));
    return e._reactRootContainer
      ? (Ht(function () {
          Fi(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[nt] = null);
          });
        }),
        !0)
      : !1;
  };
  Pe.unstable_batchedUpdates = Js;
  Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ri(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Fi(e, t, n, !1, r);
  };
  Pe.version = "18.2.0-next-9e3b772b8-20220608";
  function Fc() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc);
      } catch (e) {
        console.error(e);
      }
  }
  Fc(), (Da.exports = Pe);
  var Pp = Da.exports,
    ya = Pp;
  (vl.createRoot = ya.createRoot), (vl.hydrateRoot = ya.hydrateRoot);
  function wa(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function oo(e, t) {
    e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      Object.keys(t).forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : wa(t[n]) &&
            wa(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            oo(e[n], t[n]);
      });
  }
  const Ac = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function bt() {
    const e = typeof document < "u" ? document : {};
    return oo(e, Ac), e;
  }
  const _p = {
    document: Ac,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function Le() {
    const e = typeof window < "u" ? window : {};
    return oo(e, _p), e;
  }
  function Lp(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch {}
      try {
        delete t[n];
      } catch {}
    });
  }
  function us(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
  }
  function yi() {
    return Date.now();
  }
  function zp(e) {
    const t = Le();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function Mp(e, t) {
    t === void 0 && (t = "x");
    const n = Le();
    let r, i, l;
    const s = zp(e);
    return (
      n.WebKitCSSMatrix
        ? ((i = s.transform || s.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((a) => a.replace(",", "."))
              .join(", ")),
          (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
        : ((l =
            s.MozTransform ||
            s.OTransform ||
            s.MsTransform ||
            s.msTransform ||
            s.transform ||
            s
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = l.toString().split(","))),
      t === "x" &&
        (n.WebKitCSSMatrix
          ? (i = l.m41)
          : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
      t === "y" &&
        (n.WebKitCSSMatrix
          ? (i = l.m42)
          : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
      i || 0
    );
  }
  function Ir(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function Op(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function xe() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (r != null && !Op(r)) {
        const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
        for (let l = 0, s = i.length; l < s; l += 1) {
          const a = i[l],
            o = Object.getOwnPropertyDescriptor(r, a);
          o !== void 0 &&
            o.enumerable &&
            (Ir(e[a]) && Ir(r[a])
              ? r[a].__swiper__
                ? (e[a] = r[a])
                : xe(e[a], r[a])
              : !Ir(e[a]) && Ir(r[a])
              ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : xe(e[a], r[a]))
              : (e[a] = r[a]));
        }
      }
    }
    return e;
  }
  function Dr(e, t, n) {
    e.style.setProperty(t, n);
  }
  function jc(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Le(),
      l = -t.translate;
    let s = null,
      a;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const d = n > l ? "next" : "prev",
      p = (h, v) => (d === "next" && h >= v) || (d === "prev" && h <= v),
      m = () => {
        (a = new Date().getTime()), s === null && (s = a);
        const h = Math.max(Math.min((a - s) / o, 1), 0),
          v = 0.5 - Math.cos(h * Math.PI) / 2;
        let w = l + v * (n - l);
        if ((p(w, n) && (w = n), t.wrapperEl.scrollTo({ [r]: w }), p(w, n))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [r]: w });
            }),
            i.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = i.requestAnimationFrame(m);
      };
    m();
  }
  function be(e, t) {
    return (
      t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t))
    );
  }
  function $c(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
  }
  function Np(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
      const r = e.previousElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function Ip(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
      const r = e.nextElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function pt(e, t) {
    return Le().getComputedStyle(e, null).getPropertyValue(t);
  }
  function wi(e) {
    let t = e,
      n;
    if (t) {
      for (n = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (n += 1);
      return n;
    }
  }
  function Bc(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; )
      t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
    return n;
  }
  function cs(e, t, n) {
    const r = Le();
    return n
      ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let cl;
  function Dp() {
    const e = Le(),
      t = bt();
    return {
      smoothScroll:
        t.documentElement &&
        t.documentElement.style &&
        "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
    };
  }
  function Vc() {
    return cl || (cl = Dp()), cl;
  }
  let dl;
  function Rp(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = Vc(),
      r = Le(),
      i = r.navigator.platform,
      l = t || r.navigator.userAgent,
      s = { ios: !1, android: !1 },
      a = r.screen.width,
      o = r.screen.height,
      d = l.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = l.match(/(iPad).*OS\s([\d_]+)/);
    const m = l.match(/(iPod)(.*OS\s([\d_]+))?/),
      h = !p && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      v = i === "Win32";
    let w = i === "MacIntel";
    const y = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !p &&
        w &&
        n.touch &&
        y.indexOf(`${a}x${o}`) >= 0 &&
        ((p = l.match(/(Version)\/([\d.]+)/)),
        p || (p = [0, 1, "13_0_0"]),
        (w = !1)),
      d && !v && ((s.os = "android"), (s.android = !0)),
      (p || h || m) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function Fp(e) {
    return e === void 0 && (e = {}), dl || (dl = Rp(e)), dl;
  }
  let fl;
  function Ap() {
    const e = Le();
    let t = !1;
    function n() {
      const r = e.navigator.userAgent.toLowerCase();
      return (
        r.indexOf("safari") >= 0 &&
        r.indexOf("chrome") < 0 &&
        r.indexOf("android") < 0
      );
    }
    if (n()) {
      const r = String(e.navigator.userAgent);
      if (r.includes("Version/")) {
        const [i, l] = r
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((s) => Number(s));
        t = i < 16 || (i === 16 && l < 2);
      }
    }
    return {
      isSafari: t || n(),
      needPerspectiveFix: t,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
    };
  }
  function jp() {
    return fl || (fl = Ap()), fl;
  }
  function $p(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = Le();
    let l = null,
      s = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
      },
      o = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((l = new ResizeObserver((m) => {
            s = i.requestAnimationFrame(() => {
              const { width: h, height: v } = t;
              let w = h,
                y = v;
              m.forEach((x) => {
                let { contentBoxSize: f, contentRect: u, target: c } = x;
                (c && c !== t.el) ||
                  ((w = u ? u.width : (f[0] || f).inlineSize),
                  (y = u ? u.height : (f[0] || f).blockSize));
              }),
                (w !== h || y !== v) && a();
            });
          })),
          l.observe(t.el));
      },
      d = () => {
        s && i.cancelAnimationFrame(s),
          l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
      },
      p = () => {
        !t || t.destroyed || !t.initialized || r("orientationchange");
      };
    n("init", () => {
      if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
        o();
        return;
      }
      i.addEventListener("resize", a),
        i.addEventListener("orientationchange", p);
    }),
      n("destroy", () => {
        d(),
          i.removeEventListener("resize", a),
          i.removeEventListener("orientationchange", p);
      });
  }
  function Bp(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const l = [],
      s = Le(),
      a = function (p, m) {
        m === void 0 && (m = {});
        const h = s.MutationObserver || s.WebkitMutationObserver,
          v = new h((w) => {
            if (t.__preventObserver__) return;
            if (w.length === 1) {
              i("observerUpdate", w[0]);
              return;
            }
            const y = function () {
              i("observerUpdate", w[0]);
            };
            s.requestAnimationFrame
              ? s.requestAnimationFrame(y)
              : s.setTimeout(y, 0);
          });
        v.observe(p, {
          attributes: typeof m.attributes > "u" ? !0 : m.attributes,
          childList: typeof m.childList > "u" ? !0 : m.childList,
          characterData: typeof m.characterData > "u" ? !0 : m.characterData,
        }),
          l.push(v);
      },
      o = () => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const p = Bc(t.hostEl);
            for (let m = 0; m < p.length; m += 1) a(p[m]);
          }
          a(t.hostEl, { childList: t.params.observeSlideChildren }),
            a(t.wrapperEl, { attributes: !1 });
        }
      },
      d = () => {
        l.forEach((p) => {
          p.disconnect();
        }),
          l.splice(0, l.length);
      };
    n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      r("init", o),
      r("destroy", d);
  }
  var Vp = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      const i = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((l) => {
          r.eventsListeners[l] || (r.eventsListeners[l] = []),
            r.eventsListeners[l][i](t);
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      function i() {
        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
          s[a] = arguments[a];
        t.apply(r, s);
      }
      return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          e.split(" ").forEach((r) => {
            typeof t > "u"
              ? (n.eventsListeners[r] = [])
              : n.eventsListeners[r] &&
                n.eventsListeners[r].forEach((i, l) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    n.eventsListeners[r].splice(l, 1);
                });
          }),
        n
      );
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, n, r;
      for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
        l[s] = arguments[s];
      return (
        typeof l[0] == "string" || Array.isArray(l[0])
          ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
          : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
        n.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((d) => {
              d.apply(r, [o, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[o] &&
              e.eventsListeners[o].forEach((d) => {
                d.apply(r, n);
              });
        }),
        e
      );
    },
  };
  function Hp() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (t = e.params.width)
      : (t = r.clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (n = e.params.height)
        : (n = r.clientHeight),
      !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(pt(r, "padding-left") || 0, 10) -
          parseInt(pt(r, "padding-right") || 0, 10)),
        (n =
          n -
          parseInt(pt(r, "padding-top") || 0, 10) -
          parseInt(pt(r, "padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function Gp() {
    const e = this;
    function t(_) {
      return e.isHorizontal()
        ? _
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[_];
    }
    function n(_, M) {
      return parseFloat(_.getPropertyValue(t(M)) || 0);
    }
    const r = e.params,
      { wrapperEl: i, slidesEl: l, size: s, rtlTranslate: a, wrongRTL: o } = e,
      d = e.virtual && r.virtual.enabled,
      p = d ? e.virtual.slides.length : e.slides.length,
      m = be(l, `.${e.params.slideClass}, swiper-slide`),
      h = d ? e.virtual.slides.length : m.length;
    let v = [];
    const w = [],
      y = [];
    let x = r.slidesOffsetBefore;
    typeof x == "function" && (x = r.slidesOffsetBefore.call(e));
    let f = r.slidesOffsetAfter;
    typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
    const u = e.snapGrid.length,
      c = e.slidesGrid.length;
    let g = r.spaceBetween,
      S = -x,
      T = 0,
      E = 0;
    if (typeof s > "u") return;
    typeof g == "string" && g.indexOf("%") >= 0
      ? (g = (parseFloat(g.replace("%", "")) / 100) * s)
      : typeof g == "string" && (g = parseFloat(g)),
      (e.virtualSize = -g),
      m.forEach((_) => {
        a ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
          (_.style.marginBottom = ""),
          (_.style.marginTop = "");
      }),
      r.centeredSlides &&
        r.cssMode &&
        (Dr(i, "--swiper-centered-offset-before", ""),
        Dr(i, "--swiper-centered-offset-after", ""));
    const P = r.grid && r.grid.rows > 1 && e.grid;
    P && e.grid.initSlides(h);
    let C;
    const I =
      r.slidesPerView === "auto" &&
      r.breakpoints &&
      Object.keys(r.breakpoints).filter(
        (_) => typeof r.breakpoints[_].slidesPerView < "u"
      ).length > 0;
    for (let _ = 0; _ < h; _ += 1) {
      C = 0;
      let M;
      if (
        (m[_] && (M = m[_]),
        P && e.grid.updateSlide(_, M, h, t),
        !(m[_] && pt(M, "display") === "none"))
      ) {
        if (r.slidesPerView === "auto") {
          I && (m[_].style[t("width")] = "");
          const N = getComputedStyle(M),
            F = M.style.transform,
            G = M.style.webkitTransform;
          if (
            (F && (M.style.transform = "none"),
            G && (M.style.webkitTransform = "none"),
            r.roundLengths)
          )
            C = e.isHorizontal() ? cs(M, "width", !0) : cs(M, "height", !0);
          else {
            const de = n(N, "width"),
              _t = n(N, "padding-left"),
              L = n(N, "padding-right"),
              O = n(N, "margin-left"),
              D = n(N, "margin-right"),
              U = N.getPropertyValue("box-sizing");
            if (U && U === "border-box") C = de + O + D;
            else {
              const { clientWidth: q, offsetWidth: Qt } = M;
              C = de + _t + L + O + D + (Qt - q);
            }
          }
          F && (M.style.transform = F),
            G && (M.style.webkitTransform = G),
            r.roundLengths && (C = Math.floor(C));
        } else
          (C = (s - (r.slidesPerView - 1) * g) / r.slidesPerView),
            r.roundLengths && (C = Math.floor(C)),
            m[_] && (m[_].style[t("width")] = `${C}px`);
        m[_] && (m[_].swiperSlideSize = C),
          y.push(C),
          r.centeredSlides
            ? ((S = S + C / 2 + T / 2 + g),
              T === 0 && _ !== 0 && (S = S - s / 2 - g),
              _ === 0 && (S = S - s / 2 - g),
              Math.abs(S) < 1 / 1e3 && (S = 0),
              r.roundLengths && (S = Math.floor(S)),
              E % r.slidesPerGroup === 0 && v.push(S),
              w.push(S))
            : (r.roundLengths && (S = Math.floor(S)),
              (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                e.params.slidesPerGroup ===
                0 && v.push(S),
              w.push(S),
              (S = S + C + g)),
          (e.virtualSize += C + g),
          (T = C),
          (E += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, s) + f),
      a &&
        o &&
        (r.effect === "slide" || r.effect === "coverflow") &&
        (i.style.width = `${e.virtualSize + g}px`),
      r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + g}px`),
      P && e.grid.updateWrapperSize(C, v, t),
      !r.centeredSlides)
    ) {
      const _ = [];
      for (let M = 0; M < v.length; M += 1) {
        let N = v[M];
        r.roundLengths && (N = Math.floor(N)),
          v[M] <= e.virtualSize - s && _.push(N);
      }
      (v = _),
        Math.floor(e.virtualSize - s) - Math.floor(v[v.length - 1]) > 1 &&
          v.push(e.virtualSize - s);
    }
    if (d && r.loop) {
      const _ = y[0] + g;
      if (r.slidesPerGroup > 1) {
        const M = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
          ),
          N = _ * r.slidesPerGroup;
        for (let F = 0; F < M; F += 1) v.push(v[v.length - 1] + N);
      }
      for (
        let M = 0;
        M < e.virtual.slidesBefore + e.virtual.slidesAfter;
        M += 1
      )
        r.slidesPerGroup === 1 && v.push(v[v.length - 1] + _),
          w.push(w[w.length - 1] + _),
          (e.virtualSize += _);
    }
    if ((v.length === 0 && (v = [0]), g !== 0)) {
      const _ = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
      m.filter((M, N) =>
        !r.cssMode || r.loop ? !0 : N !== m.length - 1
      ).forEach((M) => {
        M.style[_] = `${g}px`;
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let _ = 0;
      y.forEach((N) => {
        _ += N + (g || 0);
      }),
        (_ -= g);
      const M = _ - s;
      v = v.map((N) => (N <= 0 ? -x : N > M ? M + f : N));
    }
    if (r.centerInsufficientSlides) {
      let _ = 0;
      if (
        (y.forEach((M) => {
          _ += M + (g || 0);
        }),
        (_ -= g),
        _ < s)
      ) {
        const M = (s - _) / 2;
        v.forEach((N, F) => {
          v[F] = N - M;
        }),
          w.forEach((N, F) => {
            w[F] = N + M;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: m,
        snapGrid: v,
        slidesGrid: w,
        slidesSizesGrid: y,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      Dr(i, "--swiper-centered-offset-before", `${-v[0]}px`),
        Dr(
          i,
          "--swiper-centered-offset-after",
          `${e.size / 2 - y[y.length - 1] / 2}px`
        );
      const _ = -e.snapGrid[0],
        M = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((N) => N + _)),
        (e.slidesGrid = e.slidesGrid.map((N) => N + M));
    }
    if (
      (h !== p && e.emit("slidesLengthChange"),
      v.length !== u &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      w.length !== c && e.emit("slidesGridLengthChange"),
      r.watchSlidesProgress && e.updateSlidesOffset(),
      !d && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
    ) {
      const _ = `${r.containerModifierClass}backface-hidden`,
        M = e.el.classList.contains(_);
      h <= r.maxBackfaceHiddenSlides
        ? M || e.el.classList.add(_)
        : M && e.el.classList.remove(_);
    }
  }
  function Up(e) {
    const t = this,
      n = [],
      r = t.virtual && t.params.virtual.enabled;
    let i = 0,
      l;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || []).forEach((a) => {
          n.push(a);
        });
      else
        for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
          const a = t.activeIndex + l;
          if (a > t.slides.length && !r) break;
          n.push(s(a));
        }
    else n.push(s(t.activeIndex));
    for (l = 0; l < n.length; l += 1)
      if (typeof n[l] < "u") {
        const a = n[l].offsetHeight;
        i = a > i ? a : i;
      }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
  }
  function Wp() {
    const e = this,
      t = e.slides,
      n = e.isElement
        ? e.isHorizontal()
          ? e.wrapperEl.offsetLeft
          : e.wrapperEl.offsetTop
        : 0;
    for (let r = 0; r < t.length; r += 1)
      t[r].swiperSlideOffset =
        (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
        n -
        e.cssOverflowAdjustment();
  }
  function bp(e) {
    e === void 0 && (e = (this && this.translate) || 0);
    const t = this,
      n = t.params,
      { slides: r, rtlTranslate: i, snapGrid: l } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let s = -e;
    i && (s = e),
      r.forEach((o) => {
        o.classList.remove(n.slideVisibleClass);
      }),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = []);
    let a = n.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
      ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
      : typeof a == "string" && (a = parseFloat(a));
    for (let o = 0; o < r.length; o += 1) {
      const d = r[o];
      let p = d.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (p -= r[0].swiperSlideOffset);
      const m =
          (s + (n.centeredSlides ? t.minTranslate() : 0) - p) /
          (d.swiperSlideSize + a),
        h =
          (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - p) /
          (d.swiperSlideSize + a),
        v = -(s - p),
        w = v + t.slidesSizesGrid[o];
      ((v >= 0 && v < t.size - 1) ||
        (w > 1 && w <= t.size) ||
        (v <= 0 && w >= t.size)) &&
        (t.visibleSlides.push(d),
        t.visibleSlidesIndexes.push(o),
        r[o].classList.add(n.slideVisibleClass)),
        (d.progress = i ? -m : m),
        (d.originalProgress = i ? -h : h);
    }
  }
  function Qp(e) {
    const t = this;
    if (typeof e > "u") {
      const p = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * p) || 0;
    }
    const n = t.params,
      r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
    const o = l,
      d = s;
    if (r === 0) (i = 0), (l = !0), (s = !0);
    else {
      i = (e - t.minTranslate()) / r;
      const p = Math.abs(e - t.minTranslate()) < 1,
        m = Math.abs(e - t.maxTranslate()) < 1;
      (l = p || i <= 0), (s = m || i >= 1), p && (i = 0), m && (i = 1);
    }
    if (n.loop) {
      const p = t.getSlideIndexByData(0),
        m = t.getSlideIndexByData(t.slides.length - 1),
        h = t.slidesGrid[p],
        v = t.slidesGrid[m],
        w = t.slidesGrid[t.slidesGrid.length - 1],
        y = Math.abs(e);
      y >= h ? (a = (y - h) / w) : (a = (y + w - v) / w), a > 1 && (a -= 1);
    }
    Object.assign(t, {
      progress: i,
      progressLoop: a,
      isBeginning: l,
      isEnd: s,
    }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        t.updateSlidesProgress(e),
      l && !o && t.emit("reachBeginning toEdge"),
      s && !d && t.emit("reachEnd toEdge"),
      ((o && !l) || (d && !s)) && t.emit("fromEdge"),
      t.emit("progress", i);
  }
  function Yp() {
    const e = this,
      { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
      l = e.virtual && n.virtual.enabled,
      s = (o) => be(r, `.${n.slideClass}${o}, swiper-slide${o}`)[0];
    t.forEach((o) => {
      o.classList.remove(
        n.slideActiveClass,
        n.slideNextClass,
        n.slidePrevClass
      );
    });
    let a;
    if (l)
      if (n.loop) {
        let o = i - e.virtual.slidesBefore;
        o < 0 && (o = e.virtual.slides.length + o),
          o >= e.virtual.slides.length && (o -= e.virtual.slides.length),
          (a = s(`[data-swiper-slide-index="${o}"]`));
      } else a = s(`[data-swiper-slide-index="${i}"]`);
    else a = t[i];
    if (a) {
      a.classList.add(n.slideActiveClass);
      let o = Ip(a, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !o && (o = t[0]), o && o.classList.add(n.slideNextClass);
      let d = Np(a, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !d === 0 && (d = t[t.length - 1]),
        d && d.classList.add(n.slidePrevClass);
    }
    e.emitSlidesClasses();
  }
  const Qr = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const n = () =>
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        r = t.closest(n());
      if (r) {
        let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !i &&
          e.isElement &&
          (r.shadowRoot
            ? (i = r.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                r.shadowRoot &&
                  ((i = r.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  )),
                  i && i.remove());
              })),
          i && i.remove();
      }
    },
    pl = (e, t) => {
      if (!e.slides[t]) return;
      const n = e.slides[t].querySelector('[loading="lazy"]');
      n && n.removeAttribute("loading");
    },
    ds = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const n = e.slides.length;
      if (!n || !t || t < 0) return;
      t = Math.min(t, n);
      const r =
          e.params.slidesPerView === "auto"
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          a = [s - t];
        a.push(...Array.from({ length: t }).map((o, d) => s + r + d)),
          e.slides.forEach((o, d) => {
            a.includes(o.column) && pl(e, d);
          });
        return;
      }
      const l = i + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let s = i - t; s <= l + t; s += 1) {
          const a = ((s % n) + n) % n;
          (a < i || a > l) && pl(e, a);
        }
      else
        for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
          s !== i && (s > l || s < i) && pl(e, s);
    };
  function Xp(e) {
    const { slidesGrid: t, params: n } = e,
      r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let l = 0; l < t.length; l += 1)
      typeof t[l + 1] < "u"
        ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
          ? (i = l)
          : r >= t[l] && r < t[l + 1] && (i = l + 1)
        : r >= t[l] && (i = l);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
  }
  function Kp(e) {
    const t = this,
      n = t.rtlTranslate ? t.translate : -t.translate,
      {
        snapGrid: r,
        params: i,
        activeIndex: l,
        realIndex: s,
        snapIndex: a,
      } = t;
    let o = e,
      d;
    const p = (h) => {
      let v = h - t.virtual.slidesBefore;
      return (
        v < 0 && (v = t.virtual.slides.length + v),
        v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
        v
      );
    };
    if ((typeof o > "u" && (o = Xp(t)), r.indexOf(n) >= 0)) d = r.indexOf(n);
    else {
      const h = Math.min(i.slidesPerGroupSkip, o);
      d = h + Math.floor((o - h) / i.slidesPerGroup);
    }
    if ((d >= r.length && (d = r.length - 1), o === l)) {
      d !== a && ((t.snapIndex = d), t.emit("snapIndexChange")),
        t.params.loop &&
          t.virtual &&
          t.params.virtual.enabled &&
          (t.realIndex = p(o));
      return;
    }
    let m;
    t.virtual && i.virtual.enabled && i.loop
      ? (m = p(o))
      : t.slides[o]
      ? (m = parseInt(
          t.slides[o].getAttribute("data-swiper-slide-index") || o,
          10
        ))
      : (m = o),
      Object.assign(t, {
        previousSnapIndex: a,
        snapIndex: d,
        previousRealIndex: s,
        realIndex: m,
        previousIndex: l,
        activeIndex: o,
      }),
      t.initialized && ds(t),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) &&
        (s !== m && t.emit("realIndexChange"), t.emit("slideChange"));
  }
  function qp(e, t) {
    const n = this,
      r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i &&
      n.isElement &&
      t &&
      t.length > 1 &&
      t.includes(e) &&
      [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
        !i &&
          a.matches &&
          a.matches(`.${r.slideClass}, swiper-slide`) &&
          (i = a);
      });
    let l = !1,
      s;
    if (i) {
      for (let a = 0; a < n.slides.length; a += 1)
        if (n.slides[a] === i) {
          (l = !0), (s = a);
          break;
        }
    }
    if (i && l)
      (n.clickedSlide = i),
        n.virtual && n.params.virtual.enabled
          ? (n.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (n.clickedIndex = s);
    else {
      (n.clickedSlide = void 0), (n.clickedIndex = void 0);
      return;
    }
    r.slideToClickedSlide &&
      n.clickedIndex !== void 0 &&
      n.clickedIndex !== n.activeIndex &&
      n.slideToClickedSlide();
  }
  var Zp = {
    updateSize: Hp,
    updateSlides: Gp,
    updateAutoHeight: Up,
    updateSlidesOffset: Wp,
    updateSlidesProgress: bp,
    updateProgress: Qp,
    updateSlidesClasses: Yp,
    updateActiveIndex: Kp,
    updateClickedSlide: qp,
  };
  function Jp(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
      { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let s = Mp(l, e);
    return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
  }
  function em(e, t) {
    const n = this,
      { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
    let a = 0,
      o = 0;
    const d = 0;
    n.isHorizontal() ? (a = r ? -e : e) : (o = e),
      i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? a : o),
      i.cssMode
        ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -a
            : -o)
        : i.virtualTranslate ||
          (n.isHorizontal()
            ? (a -= n.cssOverflowAdjustment())
            : (o -= n.cssOverflowAdjustment()),
          (l.style.transform = `translate3d(${a}px, ${o}px, ${d}px)`));
    let p;
    const m = n.maxTranslate() - n.minTranslate();
    m === 0 ? (p = 0) : (p = (e - n.minTranslate()) / m),
      p !== s && n.updateProgress(e),
      n.emit("setTranslate", n.translate, t);
  }
  function tm() {
    return -this.snapGrid[0];
  }
  function nm() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function rm(e, t, n, r, i) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      r === void 0 && (r = !0);
    const l = this,
      { params: s, wrapperEl: a } = l;
    if (l.animating && s.preventInteractionOnTransition) return !1;
    const o = l.minTranslate(),
      d = l.maxTranslate();
    let p;
    if (
      (r && e > o ? (p = o) : r && e < d ? (p = d) : (p = e),
      l.updateProgress(p),
      s.cssMode)
    ) {
      const m = l.isHorizontal();
      if (t === 0) a[m ? "scrollLeft" : "scrollTop"] = -p;
      else {
        if (!l.support.smoothScroll)
          return (
            jc({ swiper: l, targetPosition: -p, side: m ? "left" : "top" }), !0
          );
        a.scrollTo({ [m ? "left" : "top"]: -p, behavior: "smooth" });
      }
      return !0;
    }
    return (
      t === 0
        ? (l.setTransition(0),
          l.setTranslate(p),
          n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
        : (l.setTransition(t),
          l.setTranslate(p),
          n &&
            (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
          l.animating ||
            ((l.animating = !0),
            l.onTranslateToWrapperTransitionEnd ||
              (l.onTranslateToWrapperTransitionEnd = function (h) {
                !l ||
                  l.destroyed ||
                  (h.target === this &&
                    (l.wrapperEl.removeEventListener(
                      "transitionend",
                      l.onTranslateToWrapperTransitionEnd
                    ),
                    (l.onTranslateToWrapperTransitionEnd = null),
                    delete l.onTranslateToWrapperTransitionEnd,
                    n && l.emit("transitionEnd")));
              }),
            l.wrapperEl.addEventListener(
              "transitionend",
              l.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var im = {
    getTranslate: Jp,
    setTranslate: em,
    minTranslate: tm,
    maxTranslate: nm,
    translateTo: rm,
  };
  function lm(e, t) {
    const n = this;
    n.params.cssMode ||
      ((n.wrapperEl.style.transitionDuration = `${e}ms`),
      (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
      n.emit("setTransition", e, t);
  }
  function Hc(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: l, previousIndex: s } = t;
    let a = r;
    if (
      (a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")),
      t.emit(`transition${i}`),
      n && l !== s)
    ) {
      if (a === "reset") {
        t.emit(`slideResetTransition${i}`);
        return;
      }
      t.emit(`slideChangeTransition${i}`),
        a === "next"
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  function sm(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      Hc({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function om(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        Hc({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  var am = { setTransition: lm, transitionStart: sm, transitionEnd: om };
  function um(e, t, n, r, i) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const l = this;
    let s = e;
    s < 0 && (s = 0);
    const {
      params: a,
      snapGrid: o,
      slidesGrid: d,
      previousIndex: p,
      activeIndex: m,
      rtlTranslate: h,
      wrapperEl: v,
      enabled: w,
    } = l;
    if ((l.animating && a.preventInteractionOnTransition) || (!w && !r && !i))
      return !1;
    const y = Math.min(l.params.slidesPerGroupSkip, s);
    let x = y + Math.floor((s - y) / l.params.slidesPerGroup);
    x >= o.length && (x = o.length - 1);
    const f = -o[x];
    if (a.normalizeSlideIndex)
      for (let c = 0; c < d.length; c += 1) {
        const g = -Math.floor(f * 100),
          S = Math.floor(d[c] * 100),
          T = Math.floor(d[c + 1] * 100);
        typeof d[c + 1] < "u"
          ? g >= S && g < T - (T - S) / 2
            ? (s = c)
            : g >= S && g < T && (s = c + 1)
          : g >= S && (s = c);
      }
    if (
      l.initialized &&
      s !== m &&
      ((!l.allowSlideNext &&
        (h
          ? f > l.translate && f > l.minTranslate()
          : f < l.translate && f < l.minTranslate())) ||
        (!l.allowSlidePrev &&
          f > l.translate &&
          f > l.maxTranslate() &&
          (m || 0) !== s))
    )
      return !1;
    s !== (p || 0) && n && l.emit("beforeSlideChangeStart"),
      l.updateProgress(f);
    let u;
    if (
      (s > m ? (u = "next") : s < m ? (u = "prev") : (u = "reset"),
      (h && -f === l.translate) || (!h && f === l.translate))
    )
      return (
        l.updateActiveIndex(s),
        a.autoHeight && l.updateAutoHeight(),
        l.updateSlidesClasses(),
        a.effect !== "slide" && l.setTranslate(f),
        u !== "reset" && (l.transitionStart(n, u), l.transitionEnd(n, u)),
        !1
      );
    if (a.cssMode) {
      const c = l.isHorizontal(),
        g = h ? f : -f;
      if (t === 0) {
        const S = l.virtual && l.params.virtual.enabled;
        S &&
          ((l.wrapperEl.style.scrollSnapType = "none"),
          (l._immediateVirtual = !0)),
          S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
            ? ((l._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                v[c ? "scrollLeft" : "scrollTop"] = g;
              }))
            : (v[c ? "scrollLeft" : "scrollTop"] = g),
          S &&
            requestAnimationFrame(() => {
              (l.wrapperEl.style.scrollSnapType = ""),
                (l._immediateVirtual = !1);
            });
      } else {
        if (!l.support.smoothScroll)
          return (
            jc({ swiper: l, targetPosition: g, side: c ? "left" : "top" }), !0
          );
        v.scrollTo({ [c ? "left" : "top"]: g, behavior: "smooth" });
      }
      return !0;
    }
    return (
      l.setTransition(t),
      l.setTranslate(f),
      l.updateActiveIndex(s),
      l.updateSlidesClasses(),
      l.emit("beforeTransitionStart", t, r),
      l.transitionStart(n, u),
      t === 0
        ? l.transitionEnd(n, u)
        : l.animating ||
          ((l.animating = !0),
          l.onSlideToWrapperTransitionEnd ||
            (l.onSlideToWrapperTransitionEnd = function (g) {
              !l ||
                l.destroyed ||
                (g.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onSlideToWrapperTransitionEnd
                  ),
                  (l.onSlideToWrapperTransitionEnd = null),
                  delete l.onSlideToWrapperTransitionEnd,
                  l.transitionEnd(n, u)));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function cm(e, t, n, r) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    let l = e;
    return (
      i.params.loop &&
        (i.virtual && i.params.virtual.enabled
          ? (l = l + i.virtual.slidesBefore)
          : (l = i.getSlideIndexByData(l))),
      i.slideTo(l, t, n, r)
    );
  }
  function dm(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
      { enabled: i, params: l, animating: s } = r;
    if (!i) return r;
    let a = l.slidesPerGroup;
    l.slidesPerView === "auto" &&
      l.slidesPerGroup === 1 &&
      l.slidesPerGroupAuto &&
      (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
      d = r.virtual && l.virtual.enabled;
    if (l.loop) {
      if (s && !d && l.loopPreventsSliding) return !1;
      if (
        (r.loopFix({ direction: "next" }),
        (r._clientLeft = r.wrapperEl.clientLeft),
        r.activeIndex === r.slides.length - 1 && l.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            r.slideTo(r.activeIndex + o, e, t, n);
          }),
          !0
        );
    }
    return l.rewind && r.isEnd
      ? r.slideTo(0, e, t, n)
      : r.slideTo(r.activeIndex + o, e, t, n);
  }
  function fm(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
      {
        params: i,
        snapGrid: l,
        slidesGrid: s,
        rtlTranslate: a,
        enabled: o,
        animating: d,
      } = r;
    if (!o) return r;
    const p = r.virtual && i.virtual.enabled;
    if (i.loop) {
      if (d && !p && i.loopPreventsSliding) return !1;
      r.loopFix({ direction: "prev" }),
        (r._clientLeft = r.wrapperEl.clientLeft);
    }
    const m = a ? r.translate : -r.translate;
    function h(f) {
      return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
    }
    const v = h(m),
      w = l.map((f) => h(f));
    let y = l[w.indexOf(v) - 1];
    if (typeof y > "u" && i.cssMode) {
      let f;
      l.forEach((u, c) => {
        v >= u && (f = c);
      }),
        typeof f < "u" && (y = l[f > 0 ? f - 1 : f]);
    }
    let x = 0;
    if (
      (typeof y < "u" &&
        ((x = s.indexOf(y)),
        x < 0 && (x = r.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((x = x - r.slidesPerViewDynamic("previous", !0) + 1),
          (x = Math.max(x, 0)))),
      i.rewind && r.isBeginning)
    ) {
      const f =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(f, e, t, n);
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
      return (
        requestAnimationFrame(() => {
          r.slideTo(x, e, t, n);
        }),
        !0
      );
    return r.slideTo(x, e, t, n);
  }
  function pm(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function mm(e, t, n, r) {
    e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      r === void 0 && (r = 0.5);
    const i = this;
    let l = i.activeIndex;
    const s = Math.min(i.params.slidesPerGroupSkip, l),
      a = s + Math.floor((l - s) / i.params.slidesPerGroup),
      o = i.rtlTranslate ? i.translate : -i.translate;
    if (o >= i.snapGrid[a]) {
      const d = i.snapGrid[a],
        p = i.snapGrid[a + 1];
      o - d > (p - d) * r && (l += i.params.slidesPerGroup);
    } else {
      const d = i.snapGrid[a - 1],
        p = i.snapGrid[a];
      o - d <= (p - d) * r && (l -= i.params.slidesPerGroup);
    }
    return (
      (l = Math.max(l, 0)),
      (l = Math.min(l, i.slidesGrid.length - 1)),
      i.slideTo(l, e, t, n)
    );
  }
  function hm() {
    const e = this,
      { params: t, slidesEl: n } = e,
      r =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
      l;
    const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
      if (e.animating) return;
      (l = parseInt(
        e.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        t.centeredSlides
          ? i < e.loopedSlides - r / 2 ||
            i > e.slides.length - e.loopedSlides + r / 2
            ? (e.loopFix(),
              (i = e.getSlideIndex(
                be(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
              )),
              us(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i)
          : i > e.slides.length - r
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              be(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
            )),
            us(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
    } else e.slideTo(i);
  }
  var vm = {
    slideTo: um,
    slideToLoop: cm,
    slideNext: dm,
    slidePrev: fm,
    slideReset: pm,
    slideToClosest: mm,
    slideToClickedSlide: hm,
  };
  function gm(e) {
    const t = this,
      { params: n, slidesEl: r } = t;
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
    be(r, `.${n.slideClass}, swiper-slide`).forEach((l, s) => {
      l.setAttribute("data-swiper-slide-index", s);
    }),
      t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next",
      });
  }
  function ym(e) {
    let {
      slideRealIndex: t,
      slideTo: n = !0,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: s,
      byMousewheel: a,
    } = e === void 0 ? {} : e;
    const o = this;
    if (!o.params.loop) return;
    o.emit("beforeLoopFix");
    const {
      slides: d,
      allowSlidePrev: p,
      allowSlideNext: m,
      slidesEl: h,
      params: v,
    } = o;
    if (
      ((o.allowSlidePrev = !0),
      (o.allowSlideNext = !0),
      o.virtual && v.virtual.enabled)
    ) {
      n &&
        (!v.centeredSlides && o.snapIndex === 0
          ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
          : v.centeredSlides && o.snapIndex < v.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 &&
            o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        (o.allowSlidePrev = p),
        (o.allowSlideNext = m),
        o.emit("loopFix");
      return;
    }
    const w =
      v.slidesPerView === "auto"
        ? o.slidesPerViewDynamic()
        : Math.ceil(parseFloat(v.slidesPerView, 10));
    let y = v.loopedSlides || w;
    y % v.slidesPerGroup !== 0 &&
      (y += v.slidesPerGroup - (y % v.slidesPerGroup)),
      (o.loopedSlides = y);
    const x = [],
      f = [];
    let u = o.activeIndex;
    typeof l > "u"
      ? (l = o.getSlideIndex(
          o.slides.filter((E) => E.classList.contains(v.slideActiveClass))[0]
        ))
      : (u = l);
    const c = r === "next" || !r,
      g = r === "prev" || !r;
    let S = 0,
      T = 0;
    if (l < y) {
      S = Math.max(y - l, v.slidesPerGroup);
      for (let E = 0; E < y - l; E += 1) {
        const P = E - Math.floor(E / d.length) * d.length;
        x.push(d.length - P - 1);
      }
    } else if (l > o.slides.length - y * 2) {
      T = Math.max(l - (o.slides.length - y * 2), v.slidesPerGroup);
      for (let E = 0; E < T; E += 1) {
        const P = E - Math.floor(E / d.length) * d.length;
        f.push(P);
      }
    }
    if (
      (g &&
        x.forEach((E) => {
          (o.slides[E].swiperLoopMoveDOM = !0),
            h.prepend(o.slides[E]),
            (o.slides[E].swiperLoopMoveDOM = !1);
        }),
      c &&
        f.forEach((E) => {
          (o.slides[E].swiperLoopMoveDOM = !0),
            h.append(o.slides[E]),
            (o.slides[E].swiperLoopMoveDOM = !1);
        }),
      o.recalcSlides(),
      v.slidesPerView === "auto" && o.updateSlides(),
      v.watchSlidesProgress && o.updateSlidesOffset(),
      n)
    ) {
      if (x.length > 0 && g)
        if (typeof t > "u") {
          const E = o.slidesGrid[u],
            C = o.slidesGrid[u + S] - E;
          a
            ? o.setTranslate(o.translate - C)
            : (o.slideTo(u + S, 0, !1, !0),
              i &&
                ((o.touches[o.isHorizontal() ? "startX" : "startY"] += C),
                (o.touchEventsData.currentTranslate = o.translate)));
        } else
          i &&
            (o.slideToLoop(t, 0, !1, !0),
            (o.touchEventsData.currentTranslate = o.translate));
      else if (f.length > 0 && c)
        if (typeof t > "u") {
          const E = o.slidesGrid[u],
            C = o.slidesGrid[u - T] - E;
          a
            ? o.setTranslate(o.translate - C)
            : (o.slideTo(u - T, 0, !1, !0),
              i &&
                ((o.touches[o.isHorizontal() ? "startX" : "startY"] += C),
                (o.touchEventsData.currentTranslate = o.translate)));
        } else o.slideToLoop(t, 0, !1, !0);
    }
    if (
      ((o.allowSlidePrev = p),
      (o.allowSlideNext = m),
      o.controller && o.controller.control && !s)
    ) {
      const E = {
        slideRealIndex: t,
        direction: r,
        setTranslate: i,
        activeSlideIndex: l,
        byController: !0,
      };
      Array.isArray(o.controller.control)
        ? o.controller.control.forEach((P) => {
            !P.destroyed &&
              P.params.loop &&
              P.loopFix({
                ...E,
                slideTo: P.params.slidesPerView === v.slidesPerView ? n : !1,
              });
          })
        : o.controller.control instanceof o.constructor &&
          o.controller.control.params.loop &&
          o.controller.control.loopFix({
            ...E,
            slideTo:
              o.controller.control.params.slidesPerView === v.slidesPerView
                ? n
                : !1,
          });
    }
    o.emit("loopFix");
  }
  function wm() {
    const e = this,
      { params: t, slidesEl: n } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach((i) => {
      const l =
        typeof i.swiperSlideIndex > "u"
          ? i.getAttribute("data-swiper-slide-index") * 1
          : i.swiperSlideIndex;
      r[l] = i;
    }),
      e.slides.forEach((i) => {
        i.removeAttribute("data-swiper-slide-index");
      }),
      r.forEach((i) => {
        n.append(i);
      }),
      e.recalcSlides(),
      e.slideTo(e.realIndex, 0);
  }
  var Sm = { loopCreate: gm, loopFix: ym, loopDestroy: wm };
  function Em(e) {
    const t = this;
    if (
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
    )
      return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
      (n.style.cursor = "move"),
      (n.style.cursor = e ? "grabbing" : "grab"),
      t.isElement &&
        requestAnimationFrame(() => {
          t.__preventObserver__ = !1;
        });
  }
  function xm() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.isElement && (e.__preventObserver__ = !0),
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        }));
  }
  var Cm = { setGrabCursor: Em, unsetGrabCursor: xm };
  function Tm(e, t) {
    t === void 0 && (t = this);
    function n(r) {
      if (!r || r === bt() || r === Le()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function km(e) {
    const t = this,
      n = bt(),
      r = Le(),
      i = t.touchEventsData;
    i.evCache.push(e);
    const { params: l, touches: s, enabled: a } = t;
    if (
      !a ||
      (!l.simulateTouch && e.pointerType === "mouse") ||
      (t.animating && l.preventInteractionOnTransition)
    )
      return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let d = o.target;
    if (
      (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d)) ||
      ("which" in o && o.which === 3) ||
      ("button" in o && o.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    const p = !!l.noSwipingClass && l.noSwipingClass !== "",
      m = e.composedPath ? e.composedPath() : e.path;
    p && o.target && o.target.shadowRoot && m && (d = m[0]);
    const h = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      v = !!(o.target && o.target.shadowRoot);
    if (l.noSwiping && (v ? Tm(h, d) : d.closest(h))) {
      t.allowClick = !0;
      return;
    }
    if (l.swipeHandler && !d.closest(l.swipeHandler)) return;
    (s.currentX = o.pageX), (s.currentY = o.pageY);
    const w = s.currentX,
      y = s.currentY,
      x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      f = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (x && (w <= f || w >= r.innerWidth - f))
      if (x === "prevent") e.preventDefault();
      else return;
    Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (s.startX = w),
      (s.startY = y),
      (i.touchStartTime = yi()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (i.allowThresholdMove = !1);
    let u = !0;
    d.matches(i.focusableElements) &&
      ((u = !1), d.nodeName === "SELECT" && (i.isTouched = !1)),
      n.activeElement &&
        n.activeElement.matches(i.focusableElements) &&
        n.activeElement !== d &&
        n.activeElement.blur();
    const c = u && t.allowTouchMove && l.touchStartPreventDefault;
    (l.touchStartForcePreventDefault || c) &&
      !d.isContentEditable &&
      o.preventDefault(),
      l.freeMode &&
        l.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !l.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", o);
  }
  function Pm(e) {
    const t = bt(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
    if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
      return;
    }
    const d = r.evCache.findIndex((E) => E.pointerId === o.pointerId);
    d >= 0 && (r.evCache[d] = o);
    const p = r.evCache.length > 1 ? r.evCache[0] : o,
      m = p.pageX,
      h = p.pageY;
    if (o.preventedByNestedSwiper) {
      (l.startX = m), (l.startY = h);
      return;
    }
    if (!n.allowTouchMove) {
      o.target.matches(r.focusableElements) || (n.allowClick = !1),
        r.isTouched &&
          (Object.assign(l, {
            startX: m,
            startY: h,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: m,
            currentY: h,
          }),
          (r.touchStartTime = yi()));
      return;
    }
    if (i.touchReleaseOnEdges && !i.loop) {
      if (n.isVertical()) {
        if (
          (h < l.startY && n.translate <= n.maxTranslate()) ||
          (h > l.startY && n.translate >= n.minTranslate())
        ) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if (
        (m < l.startX && n.translate <= n.maxTranslate()) ||
        (m > l.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      t.activeElement &&
      o.target === t.activeElement &&
      o.target.matches(r.focusableElements)
    ) {
      (r.isMoved = !0), (n.allowClick = !1);
      return;
    }
    if (
      (r.allowTouchCallbacks && n.emit("touchMove", o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (l.currentX = m), (l.currentY = h);
    const v = l.currentX - l.startX,
      w = l.currentY - l.startY;
    if (n.params.threshold && Math.sqrt(v ** 2 + w ** 2) < n.params.threshold)
      return;
    if (typeof r.isScrolling > "u") {
      let E;
      (n.isHorizontal() && l.currentY === l.startY) ||
      (n.isVertical() && l.currentX === l.startX)
        ? (r.isScrolling = !1)
        : v * v + w * w >= 25 &&
          ((E = (Math.atan2(Math.abs(w), Math.abs(v)) * 180) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? E > i.touchAngle
            : 90 - E > i.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", o),
      typeof r.startMoving > "u" &&
        (l.currentX !== l.startX || l.currentY !== l.startY) &&
        (r.startMoving = !0),
      r.isScrolling ||
        (n.zoom &&
          n.params.zoom &&
          n.params.zoom.enabled &&
          r.evCache.length > 1))
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !i.cssMode && o.cancelable && o.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
    let y = n.isHorizontal() ? v : w,
      x = n.isHorizontal()
        ? l.currentX - l.previousX
        : l.currentY - l.previousY;
    i.oneWayMovement &&
      ((y = Math.abs(y) * (s ? 1 : -1)), (x = Math.abs(x) * (s ? 1 : -1))),
      (l.diff = y),
      (y *= i.touchRatio),
      s && ((y = -y), (x = -x));
    const f = n.touchesDirection;
    (n.swipeDirection = y > 0 ? "prev" : "next"),
      (n.touchesDirection = x > 0 ? "prev" : "next");
    const u = n.params.loop && !i.cssMode,
      c =
        (n.swipeDirection === "next" && n.allowSlideNext) ||
        (n.swipeDirection === "prev" && n.allowSlidePrev);
    if (!r.isMoved) {
      if (
        (u && c && n.loopFix({ direction: n.swipeDirection }),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating)
      ) {
        const E = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        n.wrapperEl.dispatchEvent(E);
      }
      (r.allowMomentumBounce = !1),
        i.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", o);
    }
    let g;
    r.isMoved &&
      f !== n.touchesDirection &&
      u &&
      c &&
      Math.abs(y) >= 1 &&
      (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (g = !0)),
      n.emit("sliderMove", o),
      (r.isMoved = !0),
      (r.currentTranslate = y + r.startTranslate);
    let S = !0,
      T = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (T = 0),
      y > 0
        ? (u &&
            c &&
            !g &&
            r.currentTranslate >
              (i.centeredSlides
                ? n.minTranslate() - n.size / 2
                : n.minTranslate()) &&
            n.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          r.currentTranslate > n.minTranslate() &&
            ((S = !1),
            i.resistance &&
              (r.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + r.startTranslate + y) ** T)))
        : y < 0 &&
          (u &&
            c &&
            !g &&
            r.currentTranslate <
              (i.centeredSlides
                ? n.maxTranslate() + n.size / 2
                : n.maxTranslate()) &&
            n.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                n.slides.length -
                (i.slidesPerView === "auto"
                  ? n.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(i.slidesPerView, 10))),
            }),
          r.currentTranslate < n.maxTranslate() &&
            ((S = !1),
            i.resistance &&
              (r.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - r.startTranslate - y) ** T))),
      S && (o.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        n.swipeDirection === "next" &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        n.swipeDirection === "prev" &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (r.currentTranslate = r.startTranslate),
      i.threshold > 0)
    )
      if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (l.startX = l.currentX),
            (l.startY = l.currentY),
            (r.currentTranslate = r.startTranslate),
            (l.diff = n.isHorizontal()
              ? l.currentX - l.startX
              : l.currentY - l.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !i.followFinger ||
      i.cssMode ||
      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
        i.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      i.freeMode &&
        i.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function _m(e) {
    const t = this,
      n = t.touchEventsData,
      r = n.evCache.findIndex((c) => c.pointerId === e.pointerId);
    if (
      (r >= 0 && n.evCache.splice(r, 1),
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        e.type
      ) &&
        !(
          ["pointercancel", "contextmenu"].includes(e.type) &&
          (t.browser.isSafari || t.browser.isWebView)
        ))
    )
      return;
    const {
      params: i,
      touches: l,
      rtlTranslate: s,
      slidesGrid: a,
      enabled: o,
    } = t;
    if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", d),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const p = yi(),
      m = p - n.touchStartTime;
    if (t.allowClick) {
      const c = d.path || (d.composedPath && d.composedPath());
      t.updateClickedSlide((c && c[0]) || d.target, c),
        t.emit("tap click", d),
        m < 300 &&
          p - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d);
    }
    if (
      ((n.lastClickTime = yi()),
      us(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        l.diff === 0 ||
        n.currentTranslate === n.startTranslate)
    ) {
      (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
      return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let h;
    if (
      (i.followFinger
        ? (h = s ? t.translate : -t.translate)
        : (h = -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (i.freeMode && i.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: h });
      return;
    }
    let v = 0,
      w = t.slidesSizesGrid[0];
    for (
      let c = 0;
      c < a.length;
      c += c < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const g = c < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      typeof a[c + g] < "u"
        ? h >= a[c] && h < a[c + g] && ((v = c), (w = a[c + g] - a[c]))
        : h >= a[c] && ((v = c), (w = a[a.length - 1] - a[a.length - 2]));
    }
    let y = null,
      x = null;
    i.rewind &&
      (t.isBeginning
        ? (x =
            i.virtual && i.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (y = 0));
    const f = (h - a[v]) / w,
      u = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (m > i.longSwipesMs) {
      if (!i.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (f >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? y : v + u)
          : t.slideTo(v)),
        t.swipeDirection === "prev" &&
          (f > 1 - i.longSwipesRatio
            ? t.slideTo(v + u)
            : x !== null && f < 0 && Math.abs(f) > i.longSwipesRatio
            ? t.slideTo(x)
            : t.slideTo(v));
    } else {
      if (!i.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
        ? d.target === t.navigation.nextEl
          ? t.slideTo(v + u)
          : t.slideTo(v)
        : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : v + u),
          t.swipeDirection === "prev" && t.slideTo(x !== null ? x : v));
    }
  }
  function Sa() {
    const e = this,
      { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
      s = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const a = s && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides &&
    !a
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.params.loop && !s
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = r),
      e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
  }
  function Lm(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function zm() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let i;
    const l = e.maxTranslate() - e.minTranslate();
    l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
      i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function Mm(e) {
    const t = this;
    Qr(t, e.target),
      !(
        t.params.cssMode ||
        (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
      ) && t.update();
  }
  let Ea = !1;
  function Om() {}
  const Gc = (e, t) => {
    const n = bt(),
      { params: r, el: i, wrapperEl: l, device: s } = e,
      a = !!r.nested,
      o = t === "on" ? "addEventListener" : "removeEventListener",
      d = t;
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
      n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
      n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
      n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
      n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
      n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
      n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) &&
        i[o]("click", e.onClick, !0),
      r.cssMode && l[o]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[d](
            s.ios || s.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Sa,
            !0
          )
        : e[d]("observerUpdate", Sa, !0),
      i[o]("load", e.onLoad, { capture: !0 });
  };
  function Nm() {
    const e = this,
      t = bt(),
      { params: n } = e;
    (e.onTouchStart = km.bind(e)),
      (e.onTouchMove = Pm.bind(e)),
      (e.onTouchEnd = _m.bind(e)),
      n.cssMode && (e.onScroll = zm.bind(e)),
      (e.onClick = Lm.bind(e)),
      (e.onLoad = Mm.bind(e)),
      Ea || (t.addEventListener("touchstart", Om), (Ea = !0)),
      Gc(e, "on");
  }
  function Im() {
    Gc(this, "off");
  }
  var Dm = { attachEvents: Nm, detachEvents: Im };
  const xa = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function Rm() {
    const e = this,
      { realIndex: t, initialized: n, params: r, el: i } = e,
      l = r.breakpoints;
    if (!l || (l && Object.keys(l).length === 0)) return;
    const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
    if (!s || e.currentBreakpoint === s) return;
    const o = (s in l ? l[s] : void 0) || e.originalParams,
      d = xa(e, r),
      p = xa(e, o),
      m = r.enabled;
    d && !p
      ? (i.classList.remove(
          `${r.containerModifierClass}grid`,
          `${r.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !d &&
        p &&
        (i.classList.add(`${r.containerModifierClass}grid`),
        ((o.grid.fill && o.grid.fill === "column") ||
          (!o.grid.fill && r.grid.fill === "column")) &&
          i.classList.add(`${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((f) => {
        if (typeof o[f] > "u") return;
        const u = r[f] && r[f].enabled,
          c = o[f] && o[f].enabled;
        u && !c && e[f].disable(), !u && c && e[f].enable();
      });
    const h = o.direction && o.direction !== r.direction,
      v = r.loop && (o.slidesPerView !== r.slidesPerView || h),
      w = r.loop;
    h && n && e.changeDirection(), xe(e.params, o);
    const y = e.params.enabled,
      x = e.params.loop;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      m && !y ? e.disable() : !m && y && e.enable(),
      (e.currentBreakpoint = s),
      e.emit("_beforeBreakpoint", o),
      n &&
        (v
          ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
          : !w && x
          ? (e.loopCreate(t), e.updateSlides())
          : w && !x && e.loopDestroy()),
      e.emit("breakpoint", o);
  }
  function Fm(e, t, n) {
    if ((t === void 0 && (t = "window"), !e || (t === "container" && !n)))
      return;
    let r = !1;
    const i = Le(),
      l = t === "window" ? i.innerHeight : n.clientHeight,
      s = Object.keys(e).map((a) => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const o = parseFloat(a.substr(1));
          return { value: l * o, point: a };
        }
        return { value: a, point: a };
      });
    s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
    for (let a = 0; a < s.length; a += 1) {
      const { point: o, value: d } = s[a];
      t === "window"
        ? i.matchMedia(`(min-width: ${d}px)`).matches && (r = o)
        : d <= n.clientWidth && (r = o);
    }
    return r || "max";
  }
  var Am = { setBreakpoint: Rm, getBreakpoint: Fm };
  function jm(e, t) {
    const n = [];
    return (
      e.forEach((r) => {
        typeof r == "object"
          ? Object.keys(r).forEach((i) => {
              r[i] && n.push(t + i);
            })
          : typeof r == "string" && n.push(t + r);
      }),
      n
    );
  }
  function $m() {
    const e = this,
      { classNames: t, params: n, rtl: r, el: i, device: l } = e,
      s = jm(
        [
          "initialized",
          n.direction,
          { "free-mode": e.params.freeMode && n.freeMode.enabled },
          { autoheight: n.autoHeight },
          { rtl: r },
          { grid: n.grid && n.grid.rows > 1 },
          {
            "grid-column":
              n.grid && n.grid.rows > 1 && n.grid.fill === "column",
          },
          { android: l.android },
          { ios: l.ios },
          { "css-mode": n.cssMode },
          { centered: n.cssMode && n.centeredSlides },
          { "watch-progress": n.watchSlidesProgress },
        ],
        n.containerModifierClass
      );
    t.push(...s), i.classList.add(...t), e.emitContainerClasses();
  }
  function Bm() {
    const e = this,
      { el: t, classNames: n } = e;
    t.classList.remove(...n), e.emitContainerClasses();
  }
  var Vm = { addClasses: $m, removeClasses: Bm };
  function Hm() {
    const e = this,
      { isLocked: t, params: n } = e,
      { slidesOffsetBefore: r } = n;
    if (r) {
      const i = e.slides.length - 1,
        l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
      e.isLocked = e.size > l;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  var Gm = { checkOverflow: Hm },
    fs = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function Um(e, t) {
    return function (r) {
      r === void 0 && (r = {});
      const i = Object.keys(r)[0],
        l = r[i];
      if (typeof l != "object" || l === null) {
        xe(t, r);
        return;
      }
      if (
        (e[i] === !0 && (e[i] = { enabled: !0 }),
        i === "navigation" &&
          e[i] &&
          e[i].enabled &&
          !e[i].prevEl &&
          !e[i].nextEl &&
          (e[i].auto = !0),
        ["pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] &&
          e[i].enabled &&
          !e[i].el &&
          (e[i].auto = !0),
        !(i in e && "enabled" in l))
      ) {
        xe(t, r);
        return;
      }
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
        e[i] || (e[i] = { enabled: !1 }),
        xe(t, r);
    };
  }
  const ml = {
      eventsEmitter: Vp,
      update: Zp,
      translate: im,
      transition: am,
      slide: vm,
      loop: Sm,
      grabCursor: Cm,
      events: Dm,
      breakpoints: Am,
      checkOverflow: Gm,
      classes: Vm,
    },
    hl = {};
  let ao = class Xe {
    constructor() {
      let t, n;
      for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
        i[l] = arguments[l];
      i.length === 1 &&
      i[0].constructor &&
      Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
        ? (n = i[0])
        : ([t, n] = i),
        n || (n = {}),
        (n = xe({}, n)),
        t && !n.el && (n.el = t);
      const s = bt();
      if (
        n.el &&
        typeof n.el == "string" &&
        s.querySelectorAll(n.el).length > 1
      ) {
        const p = [];
        return (
          s.querySelectorAll(n.el).forEach((m) => {
            const h = xe({}, n, { el: m });
            p.push(new Xe(h));
          }),
          p
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = Vc()),
        (a.device = Fp({ userAgent: n.userAgent })),
        (a.browser = jp()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
      const o = {};
      a.modules.forEach((p) => {
        p({
          params: n,
          swiper: a,
          extendParams: Um(n, o),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const d = xe({}, fs, o);
      return (
        (a.params = xe({}, d, hl, n)),
        (a.originalParams = xe({}, a.params)),
        (a.passedParams = xe({}, n)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((p) => {
            a.on(p, a.params.on[p]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getSlideIndex(t) {
      const { slidesEl: n, params: r } = this,
        i = be(n, `.${r.slideClass}, swiper-slide`),
        l = wi(i[0]);
      return wi(t) - l;
    }
    getSlideIndexByData(t) {
      return this.getSlideIndex(
        this.slides.filter(
          (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
        )[0]
      );
    }
    recalcSlides() {
      const t = this,
        { slidesEl: n, params: r } = t;
      t.slides = be(n, `.${r.slideClass}, swiper-slide`);
    }
    enable() {
      const t = this;
      t.enabled ||
        ((t.enabled = !0),
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled &&
        ((t.enabled = !1),
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"));
    }
    setProgress(t, n) {
      const r = this;
      t = Math.min(Math.max(t, 0), 1);
      const i = r.minTranslate(),
        s = (r.maxTranslate() - i) * t + i;
      r.translateTo(s, typeof n > "u" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = t.el.className
        .split(" ")
        .filter(
          (r) =>
            r.indexOf("swiper") === 0 ||
            r.indexOf(t.params.containerModifierClass) === 0
        );
      t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
      const n = this;
      return n.destroyed
        ? ""
        : t.className
            .split(" ")
            .filter(
              (r) =>
                r.indexOf("swiper-slide") === 0 ||
                r.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = [];
      t.slides.forEach((r) => {
        const i = t.getSlideClasses(r);
        n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
      }),
        t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t, n) {
      t === void 0 && (t = "current"), n === void 0 && (n = !1);
      const r = this,
        {
          params: i,
          slides: l,
          slidesGrid: s,
          slidesSizesGrid: a,
          size: o,
          activeIndex: d,
        } = r;
      let p = 1;
      if (typeof i.slidesPerView == "number") return i.slidesPerView;
      if (i.centeredSlides) {
        let m = l[d] ? l[d].swiperSlideSize : 0,
          h;
        for (let v = d + 1; v < l.length; v += 1)
          l[v] &&
            !h &&
            ((m += l[v].swiperSlideSize), (p += 1), m > o && (h = !0));
        for (let v = d - 1; v >= 0; v -= 1)
          l[v] &&
            !h &&
            ((m += l[v].swiperSlideSize), (p += 1), m > o && (h = !0));
      } else if (t === "current")
        for (let m = d + 1; m < l.length; m += 1)
          (n ? s[m] + a[m] - s[d] < o : s[m] - s[d] < o) && (p += 1);
      else for (let m = d - 1; m >= 0; m -= 1) s[d] - s[m] < o && (p += 1);
      return p;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: n, params: r } = t;
      r.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
          s.complete && Qr(t, s);
        }),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
      function i() {
        const s = t.rtlTranslate ? t.translate * -1 : t.translate,
          a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
        t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let l;
      if (r.freeMode && r.freeMode.enabled && !r.cssMode)
        i(), r.autoHeight && t.updateAutoHeight();
      else {
        if (
          (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
          t.isEnd &&
          !r.centeredSlides
        ) {
          const s =
            t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
          l = t.slideTo(s.length - 1, 0, !1, !0);
        } else l = t.slideTo(t.activeIndex, 0, !1, !0);
        l || i();
      }
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, n) {
      n === void 0 && (n = !0);
      const r = this,
        i = r.params.direction;
      return (
        t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i ||
          (t !== "horizontal" && t !== "vertical") ||
          (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
          r.el.classList.add(`${r.params.containerModifierClass}${t}`),
          r.emitContainerClasses(),
          (r.params.direction = t),
          r.slides.forEach((l) => {
            t === "vertical" ? (l.style.width = "") : (l.style.height = "");
          }),
          r.emit("changeDirection"),
          n && r.update()),
        r
      );
    }
    changeLanguageDirection(t) {
      const n = this;
      (n.rtl && t === "rtl") ||
        (!n.rtl && t === "ltr") ||
        ((n.rtl = t === "rtl"),
        (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
        n.rtl
          ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "rtl"))
          : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "ltr")),
        n.update());
    }
    mount(t) {
      const n = this;
      if (n.mounted) return !0;
      let r = t || n.params.el;
      if ((typeof r == "string" && (r = document.querySelector(r)), !r))
        return !1;
      (r.swiper = n),
        r.parentNode &&
          r.parentNode.host &&
          r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
          (n.isElement = !0);
      const i = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let s = (() =>
        r && r.shadowRoot && r.shadowRoot.querySelector
          ? r.shadowRoot.querySelector(i())
          : be(r, i())[0])();
      return (
        !s &&
          n.params.createElements &&
          ((s = $c("div", n.params.wrapperClass)),
          r.append(s),
          be(r, `.${n.params.slideClass}`).forEach((a) => {
            s.append(a);
          })),
        Object.assign(n, {
          el: r,
          wrapperEl: s,
          slidesEl:
            n.isElement && !r.parentNode.host.slideSlots
              ? r.parentNode.host
              : s,
          hostEl: n.isElement ? r.parentNode.host : r,
          mounted: !0,
          rtl: r.dir.toLowerCase() === "rtl" || pt(r, "direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (r.dir.toLowerCase() === "rtl" || pt(r, "direction") === "rtl"),
          wrongRTL: pt(s, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(t) {
      const n = this;
      if (n.initialized || n.mount(t) === !1) return n;
      n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents();
      const i = [...n.el.querySelectorAll('[loading="lazy"]')];
      return (
        n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
        i.forEach((l) => {
          l.complete
            ? Qr(n, l)
            : l.addEventListener("load", (s) => {
                Qr(n, s.target);
              });
        }),
        ds(n),
        (n.initialized = !0),
        ds(n),
        n.emit("init"),
        n.emit("afterInit"),
        n
      );
    }
    destroy(t, n) {
      t === void 0 && (t = !0), n === void 0 && (n = !0);
      const r = this,
        { params: i, el: l, wrapperEl: s, slides: a } = r;
      return (
        typeof r.params > "u" ||
          r.destroyed ||
          (r.emit("beforeDestroy"),
          (r.initialized = !1),
          r.detachEvents(),
          i.loop && r.loopDestroy(),
          n &&
            (r.removeClasses(),
            l.removeAttribute("style"),
            s.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((o) => {
                o.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  o.removeAttribute("style"),
                  o.removeAttribute("data-swiper-slide-index");
              })),
          r.emit("destroy"),
          Object.keys(r.eventsListeners).forEach((o) => {
            r.off(o);
          }),
          t !== !1 && ((r.el.swiper = null), Lp(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      xe(hl, t);
    }
    static get extendedDefaults() {
      return hl;
    }
    static get defaults() {
      return fs;
    }
    static installModule(t) {
      Xe.prototype.__modules__ || (Xe.prototype.__modules__ = []);
      const n = Xe.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => Xe.installModule(n)), Xe)
        : (Xe.installModule(t), Xe);
    }
  };
  Object.keys(ml).forEach((e) => {
    Object.keys(ml[e]).forEach((t) => {
      ao.prototype[t] = ml[e][t];
    });
  });
  ao.use([$p, Bp]);
  const Uc = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopedSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control",
  ];
  function Gt(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
      !e.__swiper__
    );
  }
  function At(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((r) => n.indexOf(r) < 0)
      .forEach((r) => {
        typeof e[r] > "u"
          ? (e[r] = t[r])
          : Gt(t[r]) && Gt(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : At(e[r], t[r])
          : (e[r] = t[r]);
      });
  }
  function Wc(e) {
    return (
      e === void 0 && (e = {}),
      e.navigation &&
        typeof e.navigation.nextEl > "u" &&
        typeof e.navigation.prevEl > "u"
    );
  }
  function bc(e) {
    return (
      e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
    );
  }
  function Qc(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
  }
  function Yc(e) {
    e === void 0 && (e = "");
    const t = e
        .split(" ")
        .map((r) => r.trim())
        .filter((r) => !!r),
      n = [];
    return (
      t.forEach((r) => {
        n.indexOf(r) < 0 && n.push(r);
      }),
      n.join(" ")
    );
  }
  function Wm(e) {
    return (
      e === void 0 && (e = ""),
      e
        ? e.includes("swiper-wrapper")
          ? e
          : `swiper-wrapper ${e}`
        : "swiper-wrapper"
    );
  }
  function bm(e) {
    let {
      swiper: t,
      slides: n,
      passedParams: r,
      changedParams: i,
      nextEl: l,
      prevEl: s,
      scrollbarEl: a,
      paginationEl: o,
    } = e;
    const d = i.filter(
        (C) => C !== "children" && C !== "direction" && C !== "wrapperClass"
      ),
      {
        params: p,
        pagination: m,
        navigation: h,
        scrollbar: v,
        virtual: w,
        thumbs: y,
      } = t;
    let x, f, u, c, g, S, T, E;
    i.includes("thumbs") &&
      r.thumbs &&
      r.thumbs.swiper &&
      p.thumbs &&
      !p.thumbs.swiper &&
      (x = !0),
      i.includes("controller") &&
        r.controller &&
        r.controller.control &&
        p.controller &&
        !p.controller.control &&
        (f = !0),
      i.includes("pagination") &&
        r.pagination &&
        (r.pagination.el || o) &&
        (p.pagination || p.pagination === !1) &&
        m &&
        !m.el &&
        (u = !0),
      i.includes("scrollbar") &&
        r.scrollbar &&
        (r.scrollbar.el || a) &&
        (p.scrollbar || p.scrollbar === !1) &&
        v &&
        !v.el &&
        (c = !0),
      i.includes("navigation") &&
        r.navigation &&
        (r.navigation.prevEl || s) &&
        (r.navigation.nextEl || l) &&
        (p.navigation || p.navigation === !1) &&
        h &&
        !h.prevEl &&
        !h.nextEl &&
        (g = !0);
    const P = (C) => {
      t[C] &&
        (t[C].destroy(),
        C === "navigation"
          ? (t.isElement && (t[C].prevEl.remove(), t[C].nextEl.remove()),
            (p[C].prevEl = void 0),
            (p[C].nextEl = void 0),
            (t[C].prevEl = void 0),
            (t[C].nextEl = void 0))
          : (t.isElement && t[C].el.remove(),
            (p[C].el = void 0),
            (t[C].el = void 0)));
    };
    i.includes("loop") &&
      t.isElement &&
      (p.loop && !r.loop ? (S = !0) : !p.loop && r.loop ? (T = !0) : (E = !0)),
      d.forEach((C) => {
        if (Gt(p[C]) && Gt(r[C]))
          At(p[C], r[C]),
            (C === "navigation" || C === "pagination" || C === "scrollbar") &&
              "enabled" in r[C] &&
              !r[C].enabled &&
              P(C);
        else {
          const I = r[C];
          (I === !0 || I === !1) &&
          (C === "navigation" || C === "pagination" || C === "scrollbar")
            ? I === !1 && P(C)
            : (p[C] = r[C]);
        }
      }),
      d.includes("controller") &&
        !f &&
        t.controller &&
        t.controller.control &&
        p.controller &&
        p.controller.control &&
        (t.controller.control = p.controller.control),
      i.includes("children") &&
        n &&
        w &&
        p.virtual.enabled &&
        ((w.slides = n), w.update(!0)),
      i.includes("children") && n && p.loop && (E = !0),
      x && y.init() && y.update(!0),
      f && (t.controller.control = p.controller.control),
      u &&
        (t.isElement &&
          (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-pagination"),
          o.part.add("pagination"),
          t.el.appendChild(o)),
        o && (p.pagination.el = o),
        m.init(),
        m.render(),
        m.update()),
      c &&
        (t.isElement &&
          (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-scrollbar"),
          a.part.add("scrollbar"),
          t.el.appendChild(a)),
        a && (p.scrollbar.el = a),
        v.init(),
        v.updateSize(),
        v.setTranslate()),
      g &&
        (t.isElement &&
          ((!l || typeof l == "string") &&
            ((l = document.createElement("div")),
            l.classList.add("swiper-button-next"),
            (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
            l.part.add("button-next"),
            t.el.appendChild(l)),
          (!s || typeof s == "string") &&
            ((s = document.createElement("div")),
            s.classList.add("swiper-button-prev"),
            (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
            s.part.add("button-prev"),
            t.el.appendChild(s))),
        l && (p.navigation.nextEl = l),
        s && (p.navigation.prevEl = s),
        h.init(),
        h.update()),
      i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
      i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
      i.includes("direction") && t.changeDirection(r.direction, !1),
      (S || E) && t.loopDestroy(),
      (T || E) && t.loopCreate(),
      t.update();
  }
  function Qm(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const n = { on: {} },
      r = {},
      i = {};
    At(n, fs), (n._emitClasses = !0), (n.init = !1);
    const l = {},
      s = Uc.map((o) => o.replace(/_/, "")),
      a = Object.assign({}, e);
    return (
      Object.keys(a).forEach((o) => {
        typeof e[o] > "u" ||
          (s.indexOf(o) >= 0
            ? Gt(e[o])
              ? ((n[o] = {}), (i[o] = {}), At(n[o], e[o]), At(i[o], e[o]))
              : ((n[o] = e[o]), (i[o] = e[o]))
            : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? t
              ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
              : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (l[o] = e[o]));
      }),
      ["navigation", "pagination", "scrollbar"].forEach((o) => {
        n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
      }),
      { params: n, passedParams: i, rest: l, events: r }
    );
  }
  function Ym(e, t) {
    let {
      el: n,
      nextEl: r,
      prevEl: i,
      paginationEl: l,
      scrollbarEl: s,
      swiper: a,
    } = e;
    Wc(t) &&
      r &&
      i &&
      ((a.params.navigation.nextEl = r),
      (a.originalParams.navigation.nextEl = r),
      (a.params.navigation.prevEl = i),
      (a.originalParams.navigation.prevEl = i)),
      bc(t) &&
        l &&
        ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
      Qc(t) &&
        s &&
        ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
      a.init(n);
  }
  function Xm(e, t, n, r, i) {
    const l = [];
    if (!t) return l;
    const s = (o) => {
      l.indexOf(o) < 0 && l.push(o);
    };
    if (n && r) {
      const o = r.map(i),
        d = n.map(i);
      o.join("") !== d.join("") && s("children"),
        r.length !== n.length && s("children");
    }
    return (
      Uc.filter((o) => o[0] === "_")
        .map((o) => o.replace(/_/, ""))
        .forEach((o) => {
          if (o in e && o in t)
            if (Gt(e[o]) && Gt(t[o])) {
              const d = Object.keys(e[o]),
                p = Object.keys(t[o]);
              d.length !== p.length
                ? s(o)
                : (d.forEach((m) => {
                    e[o][m] !== t[o][m] && s(o);
                  }),
                  p.forEach((m) => {
                    e[o][m] !== t[o][m] && s(o);
                  }));
            } else e[o] !== t[o] && s(o);
        }),
      l
    );
  }
  const Km = (e) => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.parallax &&
        e.params.parallax &&
        e.params.parallax.enabled &&
        e.parallax.setTranslate());
  };
  function Si() {
    return (
      (Si = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Si.apply(this, arguments)
    );
  }
  function Xc(e) {
    return (
      e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    );
  }
  function Kc(e) {
    const t = [];
    return (
      Z.Children.toArray(e).forEach((n) => {
        Xc(n)
          ? t.push(n)
          : n.props &&
            n.props.children &&
            Kc(n.props.children).forEach((r) => t.push(r));
      }),
      t
    );
  }
  function qm(e) {
    const t = [],
      n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": [],
      };
    return (
      Z.Children.toArray(e).forEach((r) => {
        if (Xc(r)) t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
          n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
          const i = Kc(r.props.children);
          i.length > 0
            ? i.forEach((l) => t.push(l))
            : n["container-end"].push(r);
        } else n["container-end"].push(r);
      }),
      { slides: t, slots: n }
    );
  }
  function Zm(e, t, n) {
    if (!n) return null;
    const r = (p) => {
        let m = p;
        return (
          p < 0 ? (m = t.length + p) : m >= t.length && (m = m - t.length), m
        );
      },
      i = e.isHorizontal()
        ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
        : { top: `${n.offset}px` },
      { from: l, to: s } = n,
      a = e.params.loop ? -t.length : 0,
      o = e.params.loop ? t.length * 2 : t.length,
      d = [];
    for (let p = a; p < o; p += 1) p >= l && p <= s && d.push(t[r(p)]);
    return d.map((p, m) =>
      Z.cloneElement(p, { swiper: e, style: i, key: `slide-${m}` })
    );
  }
  function bn(e, t) {
    return typeof window > "u" ? $.useEffect(e, t) : $.useLayoutEffect(e, t);
  }
  const Ca = $.createContext(null),
    Jm = $.createContext(null),
    qc = $.forwardRef(function (e, t) {
      let {
          className: n,
          tag: r = "div",
          wrapperTag: i = "div",
          children: l,
          onSwiper: s,
          ...a
        } = e === void 0 ? {} : e,
        o = !1;
      const [d, p] = $.useState("swiper"),
        [m, h] = $.useState(null),
        [v, w] = $.useState(!1),
        y = $.useRef(!1),
        x = $.useRef(null),
        f = $.useRef(null),
        u = $.useRef(null),
        c = $.useRef(null),
        g = $.useRef(null),
        S = $.useRef(null),
        T = $.useRef(null),
        E = $.useRef(null),
        { params: P, passedParams: C, rest: I, events: _ } = Qm(a),
        { slides: M, slots: N } = qm(l),
        F = () => {
          w(!v);
        };
      Object.assign(P.on, {
        _containerClasses(O, D) {
          p(D);
        },
      });
      const G = () => {
        Object.assign(P.on, _), (o = !0);
        const O = { ...P };
        if (
          (delete O.wrapperClass,
          (f.current = new ao(O)),
          f.current.virtual && f.current.params.virtual.enabled)
        ) {
          f.current.virtual.slides = M;
          const D = {
            cache: !1,
            slides: M,
            renderExternal: h,
            renderExternalUpdate: !1,
          };
          At(f.current.params.virtual, D),
            At(f.current.originalParams.virtual, D);
        }
      };
      x.current || G(), f.current && f.current.on("_beforeBreakpoint", F);
      const de = () => {
          o ||
            !_ ||
            !f.current ||
            Object.keys(_).forEach((O) => {
              f.current.on(O, _[O]);
            });
        },
        _t = () => {
          !_ ||
            !f.current ||
            Object.keys(_).forEach((O) => {
              f.current.off(O, _[O]);
            });
        };
      $.useEffect(() => () => {
        f.current && f.current.off("_beforeBreakpoint", F);
      }),
        $.useEffect(() => {
          !y.current &&
            f.current &&
            (f.current.emitSlidesClasses(), (y.current = !0));
        }),
        bn(() => {
          if ((t && (t.current = x.current), !!x.current))
            return (
              f.current.destroyed && G(),
              Ym(
                {
                  el: x.current,
                  nextEl: g.current,
                  prevEl: S.current,
                  paginationEl: T.current,
                  scrollbarEl: E.current,
                  swiper: f.current,
                },
                P
              ),
              s && s(f.current),
              () => {
                f.current && !f.current.destroyed && f.current.destroy(!0, !1);
              }
            );
        }, []),
        bn(() => {
          de();
          const O = Xm(C, u.current, M, c.current, (D) => D.key);
          return (
            (u.current = C),
            (c.current = M),
            O.length &&
              f.current &&
              !f.current.destroyed &&
              bm({
                swiper: f.current,
                slides: M,
                passedParams: C,
                changedParams: O,
                nextEl: g.current,
                prevEl: S.current,
                scrollbarEl: E.current,
                paginationEl: T.current,
              }),
            () => {
              _t();
            }
          );
        }),
        bn(() => {
          Km(f.current);
        }, [m]);
      function L() {
        return P.virtual
          ? Zm(f.current, M, m)
          : M.map((O, D) =>
              Z.cloneElement(O, { swiper: f.current, swiperSlideIndex: D })
            );
      }
      return Z.createElement(
        r,
        Si({ ref: x, className: Yc(`${d}${n ? ` ${n}` : ""}`) }, I),
        Z.createElement(
          Jm.Provider,
          { value: f.current },
          N["container-start"],
          Z.createElement(
            i,
            { className: Wm(P.wrapperClass) },
            N["wrapper-start"],
            L(),
            N["wrapper-end"]
          ),
          Wc(P) &&
            Z.createElement(
              Z.Fragment,
              null,
              Z.createElement("div", {
                ref: S,
                className: "swiper-button-prev",
              }),
              Z.createElement("div", {
                ref: g,
                className: "swiper-button-next",
              })
            ),
          Qc(P) &&
            Z.createElement("div", { ref: E, className: "swiper-scrollbar" }),
          bc(P) &&
            Z.createElement("div", { ref: T, className: "swiper-pagination" }),
          N["container-end"]
        )
      );
    });
  qc.displayName = "Swiper";
  const Zc = $.forwardRef(function (e, t) {
    let {
      tag: n = "div",
      children: r,
      className: i = "",
      swiper: l,
      zoom: s,
      lazy: a,
      virtualIndex: o,
      swiperSlideIndex: d,
      ...p
    } = e === void 0 ? {} : e;
    const m = $.useRef(null),
      [h, v] = $.useState("swiper-slide"),
      [w, y] = $.useState(!1);
    function x(g, S, T) {
      S === m.current && v(T);
    }
    bn(() => {
      if (
        (typeof d < "u" && (m.current.swiperSlideIndex = d),
        t && (t.current = m.current),
        !(!m.current || !l))
      ) {
        if (l.destroyed) {
          h !== "swiper-slide" && v("swiper-slide");
          return;
        }
        return (
          l.on("_slideClass", x),
          () => {
            l && l.off("_slideClass", x);
          }
        );
      }
    }),
      bn(() => {
        l && m.current && !l.destroyed && v(l.getSlideClasses(m.current));
      }, [l]);
    const f = {
        isActive: h.indexOf("swiper-slide-active") >= 0,
        isVisible: h.indexOf("swiper-slide-visible") >= 0,
        isPrev: h.indexOf("swiper-slide-prev") >= 0,
        isNext: h.indexOf("swiper-slide-next") >= 0,
      },
      u = () => (typeof r == "function" ? r(f) : r),
      c = () => {
        y(!0);
      };
    return Z.createElement(
      n,
      Si(
        {
          ref: m,
          className: Yc(`${h}${i ? ` ${i}` : ""}`),
          "data-swiper-slide-index": o,
          onLoad: c,
        },
        p
      ),
      s &&
        Z.createElement(
          Ca.Provider,
          { value: f },
          Z.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof s == "number" ? s : void 0,
            },
            u(),
            a &&
              !w &&
              Z.createElement("div", { className: "swiper-lazy-preloader" })
          )
        ),
      !s &&
        Z.createElement(
          Ca.Provider,
          { value: f },
          u(),
          a &&
            !w &&
            Z.createElement("div", { className: "swiper-lazy-preloader" })
        )
    );
  });
  Zc.displayName = "SwiperSlide";
  function Jc(e, t, n, r) {
    return (
      e.params.createElements &&
        Object.keys(r).forEach((i) => {
          if (!n[i] && n.auto === !0) {
            let l = be(e.el, `.${r[i]}`)[0];
            l || ((l = $c("div", r[i])), (l.className = r[i]), e.el.append(l)),
              (n[i] = l),
              (t[i] = l);
          }
        }),
      n
    );
  }
  function eh(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    n({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = { nextEl: null, prevEl: null });
    const l = (y) => (Array.isArray(y) ? y : [y]).filter((x) => !!x);
    function s(y) {
      let x;
      return y &&
        typeof y == "string" &&
        t.isElement &&
        ((x = t.el.querySelector(y)), x)
        ? x
        : (y &&
            (typeof y == "string" && (x = [...document.querySelectorAll(y)]),
            t.params.uniqueNavElements &&
              typeof y == "string" &&
              x.length > 1 &&
              t.el.querySelectorAll(y).length === 1 &&
              (x = t.el.querySelector(y))),
          y && !x ? y : x);
    }
    function a(y, x) {
      const f = t.params.navigation;
      (y = l(y)),
        y.forEach((u) => {
          u &&
            (u.classList[x ? "add" : "remove"](...f.disabledClass.split(" ")),
            u.tagName === "BUTTON" && (u.disabled = x),
            t.params.watchOverflow &&
              t.enabled &&
              u.classList[t.isLocked ? "add" : "remove"](f.lockClass));
        });
    }
    function o() {
      const { nextEl: y, prevEl: x } = t.navigation;
      if (t.params.loop) {
        a(x, !1), a(y, !1);
        return;
      }
      a(x, t.isBeginning && !t.params.rewind),
        a(y, t.isEnd && !t.params.rewind);
    }
    function d(y) {
      y.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
          (t.slidePrev(), i("navigationPrev"));
    }
    function p(y) {
      y.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) &&
          (t.slideNext(), i("navigationNext"));
    }
    function m() {
      const y = t.params.navigation;
      if (
        ((t.params.navigation = Jc(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(y.nextEl || y.prevEl))
      )
        return;
      let x = s(y.nextEl),
        f = s(y.prevEl);
      Object.assign(t.navigation, { nextEl: x, prevEl: f }),
        (x = l(x)),
        (f = l(f));
      const u = (c, g) => {
        c && c.addEventListener("click", g === "next" ? p : d),
          !t.enabled && c && c.classList.add(...y.lockClass.split(" "));
      };
      x.forEach((c) => u(c, "next")), f.forEach((c) => u(c, "prev"));
    }
    function h() {
      let { nextEl: y, prevEl: x } = t.navigation;
      (y = l(y)), (x = l(x));
      const f = (u, c) => {
        u.removeEventListener("click", c === "next" ? p : d),
          u.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      y.forEach((u) => f(u, "next")), x.forEach((u) => f(u, "prev"));
    }
    r("init", () => {
      t.params.navigation.enabled === !1 ? w() : (m(), o());
    }),
      r("toEdge fromEdge lock unlock", () => {
        o();
      }),
      r("destroy", () => {
        h();
      }),
      r("enable disable", () => {
        let { nextEl: y, prevEl: x } = t.navigation;
        if (((y = l(y)), (x = l(x)), t.enabled)) {
          o();
          return;
        }
        [...y, ...x]
          .filter((f) => !!f)
          .forEach((f) => f.classList.add(t.params.navigation.lockClass));
      }),
      r("click", (y, x) => {
        let { nextEl: f, prevEl: u } = t.navigation;
        (f = l(f)), (u = l(u));
        const c = x.target;
        if (
          t.params.navigation.hideOnClick &&
          !u.includes(c) &&
          !f.includes(c)
        ) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === c || t.pagination.el.contains(c))
          )
            return;
          let g;
          f.length
            ? (g = f[0].classList.contains(t.params.navigation.hiddenClass))
            : u.length &&
              (g = u[0].classList.contains(t.params.navigation.hiddenClass)),
            i(g === !0 ? "navigationShow" : "navigationHide"),
            [...f, ...u]
              .filter((S) => !!S)
              .forEach((S) =>
                S.classList.toggle(t.params.navigation.hiddenClass)
              );
        }
      });
    const v = () => {
        t.el.classList.remove(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          m(),
          o();
      },
      w = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          h();
      };
    Object.assign(t.navigation, {
      enable: v,
      disable: w,
      update: o,
      init: m,
      destroy: h,
    });
  }
  function Nn(e) {
    return (
      e === void 0 && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function th(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const l = "swiper-pagination";
    n({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (u) => u,
        formatFractionTotal: (u) => u,
        bulletClass: `${l}-bullet`,
        bulletActiveClass: `${l}-bullet-active`,
        modifierClass: `${l}-`,
        currentClass: `${l}-current`,
        totalClass: `${l}-total`,
        hiddenClass: `${l}-hidden`,
        progressbarFillClass: `${l}-progressbar-fill`,
        progressbarOppositeClass: `${l}-progressbar-opposite`,
        clickableClass: `${l}-clickable`,
        lockClass: `${l}-lock`,
        horizontalClass: `${l}-horizontal`,
        verticalClass: `${l}-vertical`,
        paginationDisabledClass: `${l}-disabled`,
      },
    }),
      (t.pagination = { el: null, bullets: [] });
    let s,
      a = 0;
    const o = (u) => (Array.isArray(u) ? u : [u]).filter((c) => !!c);
    function d() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
      );
    }
    function p(u, c) {
      const { bulletActiveClass: g } = t.params.pagination;
      u &&
        ((u = u[`${c === "prev" ? "previous" : "next"}ElementSibling`]),
        u &&
          (u.classList.add(`${g}-${c}`),
          (u = u[`${c === "prev" ? "previous" : "next"}ElementSibling`]),
          u && u.classList.add(`${g}-${c}-${c}`)));
    }
    function m(u) {
      const c = u.target.closest(Nn(t.params.pagination.bulletClass));
      if (!c) return;
      u.preventDefault();
      const g = wi(c) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === g) return;
        const S = t.realIndex,
          T = t.getSlideIndexByData(g),
          E = t.getSlideIndexByData(t.realIndex),
          P = (C) => {
            const I = t.activeIndex;
            t.loopFix({ direction: C, activeSlideIndex: T, slideTo: !1 });
            const _ = t.activeIndex;
            I === _ && t.slideToLoop(S, 0, !1, !0);
          };
        if (T > t.slides.length - t.loopedSlides) P(T > E ? "next" : "prev");
        else if (t.params.centeredSlides) {
          const C =
            t.params.slidesPerView === "auto"
              ? t.slidesPerViewDynamic()
              : Math.ceil(parseFloat(t.params.slidesPerView, 10));
          T < Math.floor(C / 2) && P("prev");
        }
        t.slideToLoop(g);
      } else t.slideTo(g);
    }
    function h() {
      const u = t.rtl,
        c = t.params.pagination;
      if (d()) return;
      let g = t.pagination.el;
      g = o(g);
      let S, T;
      const E =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        P = t.params.loop
          ? Math.ceil(E / t.params.slidesPerGroup)
          : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((T = t.previousRealIndex || 0),
            (S =
              t.params.slidesPerGroup > 1
                ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                : t.realIndex))
          : typeof t.snapIndex < "u"
          ? ((S = t.snapIndex), (T = t.previousSnapIndex))
          : ((T = t.previousIndex || 0), (S = t.activeIndex || 0)),
        c.type === "bullets" &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const C = t.pagination.bullets;
        let I, _, M;
        if (
          (c.dynamicBullets &&
            ((s = cs(C[0], t.isHorizontal() ? "width" : "height", !0)),
            g.forEach((N) => {
              N.style[t.isHorizontal() ? "width" : "height"] = `${
                s * (c.dynamicMainBullets + 4)
              }px`;
            }),
            c.dynamicMainBullets > 1 &&
              T !== void 0 &&
              ((a += S - (T || 0)),
              a > c.dynamicMainBullets - 1
                ? (a = c.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (I = Math.max(S - a, 0)),
            (_ = I + (Math.min(C.length, c.dynamicMainBullets) - 1)),
            (M = (_ + I) / 2)),
          C.forEach((N) => {
            const F = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((G) => `${c.bulletActiveClass}${G}`),
            ]
              .map((G) =>
                typeof G == "string" && G.includes(" ") ? G.split(" ") : G
              )
              .flat();
            N.classList.remove(...F);
          }),
          g.length > 1)
        )
          C.forEach((N) => {
            const F = wi(N);
            F === S
              ? N.classList.add(...c.bulletActiveClass.split(" "))
              : t.isElement && N.setAttribute("part", "bullet"),
              c.dynamicBullets &&
                (F >= I &&
                  F <= _ &&
                  N.classList.add(...`${c.bulletActiveClass}-main`.split(" ")),
                F === I && p(N, "prev"),
                F === _ && p(N, "next"));
          });
        else {
          const N = C[S];
          if (
            (N && N.classList.add(...c.bulletActiveClass.split(" ")),
            t.isElement &&
              C.forEach((F, G) => {
                F.setAttribute("part", G === S ? "bullet-active" : "bullet");
              }),
            c.dynamicBullets)
          ) {
            const F = C[I],
              G = C[_];
            for (let de = I; de <= _; de += 1)
              C[de] &&
                C[de].classList.add(
                  ...`${c.bulletActiveClass}-main`.split(" ")
                );
            p(F, "prev"), p(G, "next");
          }
        }
        if (c.dynamicBullets) {
          const N = Math.min(C.length, c.dynamicMainBullets + 4),
            F = (s * N - s) / 2 - M * s,
            G = u ? "right" : "left";
          C.forEach((de) => {
            de.style[t.isHorizontal() ? G : "top"] = `${F}px`;
          });
        }
      }
      g.forEach((C, I) => {
        if (
          (c.type === "fraction" &&
            (C.querySelectorAll(Nn(c.currentClass)).forEach((_) => {
              _.textContent = c.formatFractionCurrent(S + 1);
            }),
            C.querySelectorAll(Nn(c.totalClass)).forEach((_) => {
              _.textContent = c.formatFractionTotal(P);
            })),
          c.type === "progressbar")
        ) {
          let _;
          c.progressbarOpposite
            ? (_ = t.isHorizontal() ? "vertical" : "horizontal")
            : (_ = t.isHorizontal() ? "horizontal" : "vertical");
          const M = (S + 1) / P;
          let N = 1,
            F = 1;
          _ === "horizontal" ? (N = M) : (F = M),
            C.querySelectorAll(Nn(c.progressbarFillClass)).forEach((G) => {
              (G.style.transform = `translate3d(0,0,0) scaleX(${N}) scaleY(${F})`),
                (G.style.transitionDuration = `${t.params.speed}ms`);
            });
        }
        c.type === "custom" && c.renderCustom
          ? ((C.innerHTML = c.renderCustom(t, S + 1, P)),
            I === 0 && i("paginationRender", C))
          : (I === 0 && i("paginationRender", C), i("paginationUpdate", C)),
          t.params.watchOverflow &&
            t.enabled &&
            C.classList[t.isLocked ? "add" : "remove"](c.lockClass);
      });
    }
    function v() {
      const u = t.params.pagination;
      if (d()) return;
      const c =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length;
      let g = t.pagination.el;
      g = o(g);
      let S = "";
      if (u.type === "bullets") {
        let T = t.params.loop
          ? Math.ceil(c / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && T > c && (T = c);
        for (let E = 0; E < T; E += 1)
          u.renderBullet
            ? (S += u.renderBullet.call(t, E, u.bulletClass))
            : (S += `<${u.bulletElement} ${
                t.isElement ? 'part="bullet"' : ""
              } class="${u.bulletClass}"></${u.bulletElement}>`);
      }
      u.type === "fraction" &&
        (u.renderFraction
          ? (S = u.renderFraction.call(t, u.currentClass, u.totalClass))
          : (S = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
        u.type === "progressbar" &&
          (u.renderProgressbar
            ? (S = u.renderProgressbar.call(t, u.progressbarFillClass))
            : (S = `<span class="${u.progressbarFillClass}"></span>`)),
        (t.pagination.bullets = []),
        g.forEach((T) => {
          u.type !== "custom" && (T.innerHTML = S || ""),
            u.type === "bullets" &&
              t.pagination.bullets.push(
                ...T.querySelectorAll(Nn(u.bulletClass))
              );
        }),
        u.type !== "custom" && i("paginationRender", g[0]);
    }
    function w() {
      t.params.pagination = Jc(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        { el: "swiper-pagination" }
      );
      const u = t.params.pagination;
      if (!u.el) return;
      let c;
      typeof u.el == "string" && t.isElement && (c = t.el.querySelector(u.el)),
        !c &&
          typeof u.el == "string" &&
          (c = [...document.querySelectorAll(u.el)]),
        c || (c = u.el),
        !(!c || c.length === 0) &&
          (t.params.uniqueNavElements &&
            typeof u.el == "string" &&
            Array.isArray(c) &&
            c.length > 1 &&
            ((c = [...t.el.querySelectorAll(u.el)]),
            c.length > 1 &&
              (c = c.filter((g) => Bc(g, ".swiper")[0] === t.el)[0])),
          Array.isArray(c) && c.length === 1 && (c = c[0]),
          Object.assign(t.pagination, { el: c }),
          (c = o(c)),
          c.forEach((g) => {
            u.type === "bullets" &&
              u.clickable &&
              g.classList.add(...(u.clickableClass || "").split(" ")),
              g.classList.add(u.modifierClass + u.type),
              g.classList.add(
                t.isHorizontal() ? u.horizontalClass : u.verticalClass
              ),
              u.type === "bullets" &&
                u.dynamicBullets &&
                (g.classList.add(`${u.modifierClass}${u.type}-dynamic`),
                (a = 0),
                u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
              u.type === "progressbar" &&
                u.progressbarOpposite &&
                g.classList.add(u.progressbarOppositeClass),
              u.clickable && g.addEventListener("click", m),
              t.enabled || g.classList.add(u.lockClass);
          }));
    }
    function y() {
      const u = t.params.pagination;
      if (d()) return;
      let c = t.pagination.el;
      c &&
        ((c = o(c)),
        c.forEach((g) => {
          g.classList.remove(u.hiddenClass),
            g.classList.remove(u.modifierClass + u.type),
            g.classList.remove(
              t.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.clickable &&
              (g.classList.remove(...(u.clickableClass || "").split(" ")),
              g.removeEventListener("click", m));
        })),
        t.pagination.bullets &&
          t.pagination.bullets.forEach((g) =>
            g.classList.remove(...u.bulletActiveClass.split(" "))
          );
    }
    r("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const u = t.params.pagination;
      let { el: c } = t.pagination;
      (c = o(c)),
        c.forEach((g) => {
          g.classList.remove(u.horizontalClass, u.verticalClass),
            g.classList.add(
              t.isHorizontal() ? u.horizontalClass : u.verticalClass
            );
        });
    }),
      r("init", () => {
        t.params.pagination.enabled === !1 ? f() : (w(), v(), h());
      }),
      r("activeIndexChange", () => {
        typeof t.snapIndex > "u" && h();
      }),
      r("snapIndexChange", () => {
        h();
      }),
      r("snapGridLengthChange", () => {
        v(), h();
      }),
      r("destroy", () => {
        y();
      }),
      r("enable disable", () => {
        let { el: u } = t.pagination;
        u &&
          ((u = o(u)),
          u.forEach((c) =>
            c.classList[t.enabled ? "remove" : "add"](
              t.params.pagination.lockClass
            )
          ));
      }),
      r("lock unlock", () => {
        h();
      }),
      r("click", (u, c) => {
        const g = c.target,
          S = o(t.pagination.el);
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          S &&
          S.length > 0 &&
          !g.classList.contains(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && g === t.navigation.nextEl) ||
              (t.navigation.prevEl && g === t.navigation.prevEl))
          )
            return;
          const T = S[0].classList.contains(t.params.pagination.hiddenClass);
          i(T === !0 ? "paginationShow" : "paginationHide"),
            S.forEach((E) =>
              E.classList.toggle(t.params.pagination.hiddenClass)
            );
        }
      });
    const x = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let { el: u } = t.pagination;
        u &&
          ((u = o(u)),
          u.forEach((c) =>
            c.classList.remove(t.params.pagination.paginationDisabledClass)
          )),
          w(),
          v(),
          h();
      },
      f = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: u } = t.pagination;
        u &&
          ((u = o(u)),
          u.forEach((c) =>
            c.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          y();
      };
    Object.assign(t.pagination, {
      enable: x,
      disable: f,
      render: v,
      update: h,
      init: w,
      destroy: y,
    });
  }
  const nh = [
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F1.jpg?alt=media&token=b5d32dee-f432-4e11-b554-2c8d3d5f00d3",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F10.jpg?alt=media&token=167254c5-3fa5-4ecc-acf6-c24b3223c740",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F11.jpg?alt=media&token=b583c22f-cabf-48ee-a255-b535717dd052",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F12.jpg?alt=media&token=0c931144-b566-46e6-b2c9-bf960172bfca",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F13.jpg?alt=media&token=dba0c23c-6833-40d0-a660-fa71e24a15f8",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F14.jpg?alt=media&token=0c1d502d-36a1-4378-9568-25cc8ca4e5e8",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F15.jpg?alt=media&token=4ce30bbb-7468-4519-8f0e-700037bdc34d",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F16.jpg?alt=media&token=072d8319-9e8c-48e9-bac1-f8cc29efe02b",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F17.jpg?alt=media&token=a184530a-cd59-4d8a-b6e9-7952acb7628d",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F18.jpg?alt=media&token=fa21a0b9-5424-4a29-bb55-43d3d570bc9f",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F19.5.jpg?alt=media&token=b0aa9b38-3180-47a3-beab-183531e0713d",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F19.jpg?alt=media&token=3b024061-ef47-48b6-84c5-7c643af52790",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F2.jpg?alt=media&token=0f4b961f-098d-41f8-be2c-ba2dd939eeb2",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F21.jpg?alt=media&token=d3ecdda0-3df4-4a19-b09d-4b5e30693222",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F22.jpg?alt=media&token=e6c518e8-b74d-4085-885d-103b444ac906",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F23.jpg?alt=media&token=2b82ea47-4bcf-4a75-92a4-4c42a6bc898f",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F24.jpg?alt=media&token=4c3a83c3-b9dd-4d19-ae45-8a771646d3dc",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F25.jpg?alt=media&token=56113f2c-2657-42a2-9833-0558547f3bbb",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F27.jpg?alt=media&token=4094112c-e8db-4ce4-a3c4-c8058579c7ff",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F28.jpg?alt=media&token=182ff48c-fdb3-420f-97e1-78075882a50d",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F29.jpg?alt=media&token=49156059-0ae5-47ae-8003-7ddda27ff461",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F3.jpg?alt=media&token=6f4c0e38-3ab1-49e7-a031-4808487f6d4f",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F30.jpg?alt=media&token=aec9453a-df63-420e-a63c-d8ad0d9882f1",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F30.jpg?alt=media&token=aec9453a-df63-420e-a63c-d8ad0d9882f1",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F4.jpg?alt=media&token=6c746041-ce26-4177-9ffa-5082a481c667",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F5.jpg?alt=media&token=44bad1e8-48fe-4c78-b3d0-8e39b51a28e6",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F6.jpg?alt=media&token=7b95b32c-b9d4-4652-8e5e-cc5b83054e0a",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F8.jpg?alt=media&token=984495cd-7a34-424d-87c0-8fa302f53076",
    "https://firebasestorage.googleapis.com/v0/b/elbassy-a2109.appspot.com/o/elbassy-reviews%2F9.jpg?alt=media&token=decb61d1-f51d-4e34-95e2-98121a6d5060",
  ];
  function rh() {
    return ze.jsxs("section", {
      className: "container",
      children: [
        ze.jsxs("div", {
          className: "text-center",
          children: [
            ze.jsx("h2", {
              className: "font-bold text-3xl py-6 ",
              children: "أرائكم تهمنا",
            }),
            ze.jsxs("p", {
              className: "text-xl",
              children: [
                "لكي لا تنخدعوا بالتسويق الحديث ! نشارك معكم أراء زبائن البسي الصريحة",
                " ",
                ze.jsx("br", {}),
                "رسائل شكر❤️ من عائلة البسي",
              ],
            }),
          ],
        }),
        ze.jsx("div", {
          className: "overflow-hidden cursor-grab relative bg-[#810000] py-8",
          children: ze.jsx(qc, {
            modules: [eh, th],
            navigation: !0,
            centeredSlides: !0,
            loop: !0,
            spaceBetween: 50,
            scrollbar: { draggable: !0 },
            slidesPerView: "auto",
            className: "select-none",
            children: nh.map((e, t) =>
              ze.jsx(
                Zc,
                {
                  className: "!w-[150px] md:!w-[300px]",
                  children: ze.jsx("div", {
                    children: ze.jsx("img", {
                      src: e,
                      alt: "product review",
                      loading: "lazy",
                      className: "!w-[180px] md:!w-[300px]",
                    }),
                  }),
                },
                e + t
              )
            ),
          }),
        }),
      ],
    });
  }
  vl.createRoot(document.getElementById("reviews-carousel")).render(
    ze.jsx(Z.StrictMode, { children: ze.jsx(rh, {}) })
  );
})();
