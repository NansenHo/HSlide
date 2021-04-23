// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"plugin/search/search.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).RevealSearch = t();
}(this, function () {
  "use strict";

  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function t(e, t, n) {
    return e(n = {
      path: t,
      exports: {},
      require: function require(e, t) {
        return function () {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(null == t && n.path);
      }
    }, n.exports), n.exports;
  }

  var n = function n(e) {
    return e && e.Math == Math && e;
  },
      r = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || n("object" == _typeof(e) && e) || Function("return this")(),
      o = function o(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
      i = !o(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1];
  }),
      c = function c(e) {
    return "object" == _typeof(e) ? null !== e : "function" == typeof e;
  },
      u = r.document,
      a = c(u) && c(u.createElement),
      l = !i && !o(function () {
    return 7 != Object.defineProperty((e = "div", a ? u.createElement(e) : {}), "a", {
      get: function get() {
        return 7;
      }
    }).a;
    var e;
  }),
      f = function f(e) {
    if (!c(e)) throw TypeError(String(e) + " is not an object");
    return e;
  },
      s = function s(e, t) {
    if (!c(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !c(r = n.call(e))) return r;
    if ("function" == typeof (n = e.valueOf) && !c(r = n.call(e))) return r;
    if (!t && "function" == typeof (n = e.toString) && !c(r = n.call(e))) return r;
    throw TypeError("Can't convert object to primitive value");
  },
      p = Object.defineProperty,
      d = {
    f: i ? p : function (e, t, n) {
      if (f(e), t = s(t, !0), f(n), l) try {
        return p(e, t, n);
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (e[t] = n.value), e;
    }
  },
      g = function g(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
      h = i ? function (e, t, n) {
    return d.f(e, t, g(1, n));
  } : function (e, t, n) {
    return e[t] = n, e;
  },
      y = function y(e, t) {
    try {
      h(r, e, t);
    } catch (n) {
      r[e] = t;
    }

    return t;
  },
      v = "__core-js_shared__",
      b = r[v] || y(v, {}),
      x = t(function (e) {
    (e.exports = function (e, t) {
      return b[e] || (b[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }),
      m = {}.hasOwnProperty,
      E = function E(e, t) {
    return m.call(e, t);
  },
      S = 0,
      w = Math.random(),
      R = function R(e) {
    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++S + w).toString(36);
  },
      O = !!Object.getOwnPropertySymbols && !o(function () {
    return !String(Symbol());
  }),
      T = O && !Symbol.sham && "symbol" == _typeof(Symbol.iterator),
      _ = x("wks"),
      j = r.Symbol,
      P = T ? j : j && j.withoutSetter || R,
      I = function I(e) {
    return E(_, e) || (O && E(j, e) ? _[e] = j[e] : _[e] = P("Symbol." + e)), _[e];
  },
      C = {};

  C[I("toStringTag")] = "z";
  var N = "[object z]" === String(C),
      A = Function.toString;
  "function" != typeof b.inspectSource && (b.inspectSource = function (e) {
    return A.call(e);
  });
  var k,
      $,
      L,
      M,
      U = b.inspectSource,
      D = r.WeakMap,
      F = "function" == typeof D && /native code/.test(U(D)),
      K = x("keys"),
      z = {},
      B = r.WeakMap;

  if (F) {
    var W = new B(),
        q = W.get,
        G = W.has,
        V = W.set;
    k = function k(e, t) {
      return V.call(W, e, t), t;
    }, $ = function $(e) {
      return q.call(W, e) || {};
    }, L = function L(e) {
      return G.call(W, e);
    };
  } else {
    var Y = K[M = "state"] || (K[M] = R(M));
    z[Y] = !0, k = function k(e, t) {
      return h(e, Y, t), t;
    }, $ = function $(e) {
      return E(e, Y) ? e[Y] : {};
    }, L = function L(e) {
      return E(e, Y);
    };
  }

  var X = {
    set: k,
    get: $,
    has: L,
    enforce: function enforce(e) {
      return L(e) ? $(e) : k(e, {});
    },
    getterFor: function getterFor(e) {
      return function (t) {
        var n;
        if (!c(t) || (n = $(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
        return n;
      };
    }
  },
      H = t(function (e) {
    var t = X.get,
        n = X.enforce,
        o = String(String).split("String");
    (e.exports = function (e, t, i, c) {
      var u = !!c && !!c.unsafe,
          a = !!c && !!c.enumerable,
          l = !!c && !!c.noTargetGet;
      "function" == typeof i && ("string" != typeof t || E(i, "name") || h(i, "name", t), n(i).source = o.join("string" == typeof t ? t : "")), e !== r ? (u ? !l && e[t] && (a = !0) : delete e[t], a ? e[t] = i : h(e, t, i)) : a ? e[t] = i : y(t, i);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && t(this).source || U(this);
    });
  }),
      J = {}.toString,
      Q = function Q(e) {
    return J.call(e).slice(8, -1);
  },
      Z = I("toStringTag"),
      ee = "Arguments" == Q(function () {
    return arguments;
  }()),
      te = N ? Q : function (e) {
    var t, n, r;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    }(t = Object(e), Z)) ? n : ee ? Q(t) : "Object" == (r = Q(t)) && "function" == typeof t.callee ? "Arguments" : r;
  },
      ne = N ? {}.toString : function () {
    return "[object " + te(this) + "]";
  };

  N || H(Object.prototype, "toString", ne, {
    unsafe: !0
  });

  var re = /#|\.prototype\./,
      oe = function oe(e, t) {
    var n = ce[ie(e)];
    return n == ae || n != ue && ("function" == typeof t ? o(t) : !!t);
  },
      ie = oe.normalize = function (e) {
    return String(e).replace(re, ".").toLowerCase();
  },
      ce = oe.data = {},
      ue = oe.NATIVE = "N",
      ae = oe.POLYFILL = "P",
      le = oe,
      fe = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e,
        t = !1,
        n = {};

    try {
      (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
    } catch (e) {}

    return function (n, r) {
      return f(n), function (e) {
        if (!c(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
      }(r), t ? e.call(n, r) : n.__proto__ = r, n;
    };
  }() : void 0),
      se = "".split,
      pe = o(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (e) {
    return "String" == Q(e) ? se.call(e, "") : Object(e);
  } : Object,
      de = function de(e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
      ge = function ge(e) {
    return pe(de(e));
  },
      he = Math.ceil,
      ye = Math.floor,
      ve = function ve(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? ye : he)(e);
  },
      be = Math.min,
      xe = function xe(e) {
    return e > 0 ? be(ve(e), 9007199254740991) : 0;
  },
      me = Math.max,
      Ee = Math.min,
      Se = function Se(e) {
    return function (t, n, r) {
      var o,
          i = ge(t),
          c = xe(i.length),
          u = function (e, t) {
        var n = ve(e);
        return n < 0 ? me(n + t, 0) : Ee(n, t);
      }(r, c);

      if (e && n != n) {
        for (; c > u;) {
          if ((o = i[u++]) != o) return !0;
        }
      } else for (; c > u; u++) {
        if ((e || u in i) && i[u] === n) return e || u || 0;
      }

      return !e && -1;
    };
  },
      we = {
    includes: Se(!0),
    indexOf: Se(!1)
  }.indexOf,
      Re = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype"),
      Oe = {
    f: Object.getOwnPropertyNames || function (e) {
      return function (e, t) {
        var n,
            r = ge(e),
            o = 0,
            i = [];

        for (n in r) {
          !E(z, n) && E(r, n) && i.push(n);
        }

        for (; t.length > o;) {
          E(r, n = t[o++]) && (~we(i, n) || i.push(n));
        }

        return i;
      }(e, Re);
    }
  },
      Te = I("match"),
      _e = function _e() {
    var e = f(this),
        t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
  };

  function je(e, t) {
    return RegExp(e, t);
  }

  var Pe = {
    UNSUPPORTED_Y: o(function () {
      var e = je("a", "y");
      return e.lastIndex = 2, null != e.exec("abcd");
    }),
    BROKEN_CARET: o(function () {
      var e = je("^r", "gy");
      return e.lastIndex = 2, null != e.exec("str");
    })
  },
      Ie = r,
      Ce = function Ce(e) {
    return "function" == typeof e ? e : void 0;
  },
      Ne = function Ne(e, t) {
    return arguments.length < 2 ? Ce(Ie[e]) || Ce(r[e]) : Ie[e] && Ie[e][t] || r[e] && r[e][t];
  },
      Ae = I("species"),
      ke = d.f,
      $e = Oe.f,
      Le = X.set,
      Me = I("match"),
      Ue = r.RegExp,
      De = Ue.prototype,
      Fe = /a/g,
      Ke = /a/g,
      ze = new Ue(Fe) !== Fe,
      Be = Pe.UNSUPPORTED_Y;

  if (i && le("RegExp", !ze || Be || o(function () {
    return Ke[Me] = !1, Ue(Fe) != Fe || Ue(Ke) == Ke || "/a/i" != Ue(Fe, "i");
  }))) {
    for (var We = function We(e, t) {
      var n,
          r,
          o,
          i = this instanceof We,
          u = c(n = e) && (void 0 !== (r = n[Te]) ? !!r : "RegExp" == Q(n)),
          a = void 0 === t;
      if (!i && u && e.constructor === We && a) return e;
      ze ? u && !a && (e = e.source) : e instanceof We && (a && (t = _e.call(e)), e = e.source), Be && (o = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
      var l,
          f,
          s,
          p,
          d,
          g = (l = ze ? new Ue(e, t) : Ue(e, t), f = i ? this : De, s = We, fe && "function" == typeof (p = f.constructor) && p !== s && c(d = p.prototype) && d !== s.prototype && fe(l, d), l);
      return Be && o && Le(g, {
        sticky: o
      }), g;
    }, qe = function qe(e) {
      (e in We) || ke(We, e, {
        configurable: !0,
        get: function get() {
          return Ue[e];
        },
        set: function set(t) {
          Ue[e] = t;
        }
      });
    }, Ge = $e(Ue), Ve = 0; Ge.length > Ve;) {
      qe(Ge[Ve++]);
    }

    De.constructor = We, We.prototype = De, H(r, "RegExp", We);
  }

  !function (e) {
    var t = Ne(e),
        n = d.f;
    i && t && !t[Ae] && n(t, Ae, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  }("RegExp");

  var Ye = {}.propertyIsEnumerable,
      Xe = Object.getOwnPropertyDescriptor,
      He = {
    f: Xe && !Ye.call({
      1: 2
    }, 1) ? function (e) {
      var t = Xe(this, e);
      return !!t && t.enumerable;
    } : Ye
  },
      Je = Object.getOwnPropertyDescriptor,
      Qe = {
    f: i ? Je : function (e, t) {
      if (e = ge(e), t = s(t, !0), l) try {
        return Je(e, t);
      } catch (e) {}
      if (E(e, t)) return g(!He.f.call(e, t), e[t]);
    }
  },
      Ze = {
    f: Object.getOwnPropertySymbols
  },
      et = Ne("Reflect", "ownKeys") || function (e) {
    var t = Oe.f(f(e)),
        n = Ze.f;
    return n ? t.concat(n(e)) : t;
  },
      tt = function tt(e, t) {
    for (var n = et(t), r = d.f, o = Qe.f, i = 0; i < n.length; i++) {
      var c = n[i];
      E(e, c) || r(e, c, o(t, c));
    }
  },
      nt = Qe.f,
      rt = RegExp.prototype.exec,
      ot = String.prototype.replace,
      it = rt,
      ct = function () {
    var e = /a/,
        t = /b*/g;
    return rt.call(e, "a"), rt.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
  }(),
      ut = Pe.UNSUPPORTED_Y || Pe.BROKEN_CARET,
      at = void 0 !== /()??/.exec("")[1];

  (ct || at || ut) && (it = function it(e) {
    var t,
        n,
        r,
        o,
        i = this,
        c = ut && i.sticky,
        u = _e.call(i),
        a = i.source,
        l = 0,
        f = e;

    return c && (-1 === (u = u.replace("y", "")).indexOf("g") && (u += "g"), f = String(e).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== e[i.lastIndex - 1]) && (a = "(?: " + a + ")", f = " " + f, l++), n = new RegExp("^(?:" + a + ")", u)), at && (n = new RegExp("^" + a + "$(?!\\s)", u)), ct && (t = i.lastIndex), r = rt.call(c ? n : i, f), c ? r ? (r.input = r.input.slice(l), r[0] = r[0].slice(l), r.index = i.lastIndex, i.lastIndex += r[0].length) : i.lastIndex = 0 : ct && r && (i.lastIndex = i.global ? r.index + r[0].length : t), at && r && r.length > 1 && ot.call(r[0], n, function () {
      for (o = 1; o < arguments.length - 2; o++) {
        void 0 === arguments[o] && (r[o] = void 0);
      }
    }), r;
  });
  var lt = it;
  !function (e, t) {
    var n,
        o,
        i,
        c,
        u,
        a = e.target,
        l = e.global,
        f = e.stat;
    if (n = l ? r : f ? r[a] || y(a, {}) : (r[a] || {}).prototype) for (o in t) {
      if (c = t[o], i = e.noTargetGet ? (u = nt(n, o)) && u.value : n[o], !le(l ? o : a + (f ? "." : "#") + o, e.forced) && void 0 !== i) {
        if (_typeof(c) == _typeof(i)) continue;
        tt(c, i);
      }

      (e.sham || i && i.sham) && h(c, "sham", !0), H(n, o, c, e);
    }
  }({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== lt
  }, {
    exec: lt
  });
  var ft = "toString",
      st = RegExp.prototype,
      pt = st.toString,
      dt = o(function () {
    return "/a/b" != pt.call({
      source: "a",
      flags: "b"
    });
  }),
      gt = pt.name != ft;
  (dt || gt) && H(RegExp.prototype, ft, function () {
    var e = f(this),
        t = String(e.source),
        n = e.flags;
    return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in st) ? _e.call(e) : n);
  }, {
    unsafe: !0
  });

  var ht = I("species"),
      yt = !o(function () {
    var e = /./;
    return e.exec = function () {
      var e = [];
      return e.groups = {
        a: "7"
      }, e;
    }, "7" !== "".replace(e, "$<a>");
  }),
      vt = "$0" === "a".replace(/./, "$0"),
      bt = I("replace"),
      xt = !!/./[bt] && "" === /./[bt]("a", "$0"),
      mt = !o(function () {
    var e = /(?:)/,
        t = e.exec;

    e.exec = function () {
      return t.apply(this, arguments);
    };

    var n = "ab".split(e);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  }),
      Et = function Et(e) {
    return function (t, n) {
      var r,
          o,
          i = String(de(t)),
          c = ve(n),
          u = i.length;
      return c < 0 || c >= u ? e ? "" : void 0 : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === u || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? i.charAt(c) : r : e ? i.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
    };
  },
      St = {
    codeAt: Et(!1),
    charAt: Et(!0)
  }.charAt,
      wt = function wt(e, t, n) {
    return t + (n ? St(e, t).length : 1);
  },
      Rt = function Rt(e, t) {
    var n = e.exec;

    if ("function" == typeof n) {
      var r = n.call(e, t);
      if ("object" != _typeof(r)) throw TypeError("RegExp exec method returned something other than an Object or null");
      return r;
    }

    if ("RegExp" !== Q(e)) throw TypeError("RegExp#exec called on incompatible receiver");
    return lt.call(e, t);
  },
      Ot = Math.max,
      Tt = Math.min,
      _t = Math.floor,
      jt = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      Pt = /\$([$&'`]|\d\d?)/g;

  !function (e, t, n, r) {
    var i = I(e),
        c = !o(function () {
      var t = {};
      return t[i] = function () {
        return 7;
      }, 7 != ""[e](t);
    }),
        u = c && !o(function () {
      var t = !1,
          n = /a/;
      return "split" === e && ((n = {}).constructor = {}, n.constructor[ht] = function () {
        return n;
      }, n.flags = "", n[i] = /./[i]), n.exec = function () {
        return t = !0, null;
      }, n[i](""), !t;
    });

    if (!c || !u || "replace" === e && (!yt || !vt || xt) || "split" === e && !mt) {
      var a = /./[i],
          l = n(i, ""[e], function (e, t, n, r, o) {
        return t.exec === lt ? c && !o ? {
          done: !0,
          value: a.call(t, n, r)
        } : {
          done: !0,
          value: e.call(n, t, r)
        } : {
          done: !1
        };
      }, {
        REPLACE_KEEPS_$0: vt,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: xt
      }),
          f = l[0],
          s = l[1];
      H(String.prototype, e, f), H(RegExp.prototype, i, 2 == t ? function (e, t) {
        return s.call(e, this, t);
      } : function (e) {
        return s.call(e, this);
      });
    }

    r && h(RegExp.prototype[i], "sham", !0);
  }("replace", 2, function (e, t, n, r) {
    var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        i = r.REPLACE_KEEPS_$0,
        c = o ? "$" : "$0";
    return [function (n, r) {
      var o = de(this),
          i = null == n ? void 0 : n[e];
      return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r);
    }, function (e, r) {
      if (!o && i || "string" == typeof r && -1 === r.indexOf(c)) {
        var a = n(t, e, this, r);
        if (a.done) return a.value;
      }

      var l = f(e),
          s = String(this),
          p = "function" == typeof r;
      p || (r = String(r));
      var d = l.global;

      if (d) {
        var g = l.unicode;
        l.lastIndex = 0;
      }

      for (var h = [];;) {
        var y = Rt(l, s);
        if (null === y) break;
        if (h.push(y), !d) break;
        "" === String(y[0]) && (l.lastIndex = wt(s, xe(l.lastIndex), g));
      }

      for (var v, b = "", x = 0, m = 0; m < h.length; m++) {
        y = h[m];

        for (var E = String(y[0]), S = Ot(Tt(ve(y.index), s.length), 0), w = [], R = 1; R < y.length; R++) {
          w.push(void 0 === (v = y[R]) ? v : String(v));
        }

        var O = y.groups;

        if (p) {
          var T = [E].concat(w, S, s);
          void 0 !== O && T.push(O);

          var _ = String(r.apply(void 0, T));
        } else _ = u(E, s, S, w, O, r);

        S >= x && (b += s.slice(x, S) + _, x = S + E.length);
      }

      return b + s.slice(x);
    }];

    function u(e, n, r, o, i, c) {
      var u = r + e.length,
          a = o.length,
          l = Pt;
      return void 0 !== i && (i = Object(de(i)), l = jt), t.call(c, l, function (t, c) {
        var l;

        switch (c.charAt(0)) {
          case "$":
            return "$";

          case "&":
            return e;

          case "`":
            return n.slice(0, r);

          case "'":
            return n.slice(u);

          case "<":
            l = i[c.slice(1, -1)];
            break;

          default:
            var f = +c;
            if (0 === f) return t;

            if (f > a) {
              var s = _t(f / 10);

              return 0 === s ? t : s <= a ? void 0 === o[s - 1] ? c.charAt(1) : o[s - 1] + c.charAt(1) : t;
            }

            l = o[f - 1];
        }

        return void 0 === l ? "" : l;
      });
    }
  });
  return function () {
    var e, t, n, r, o, i, c;

    function u() {
      (t = document.createElement("div")).classList.add("searchbox"), t.style.position = "absolute", t.style.top = "10px", t.style.right = "10px", t.style.zIndex = 10, t.innerHTML = '<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>', (n = t.querySelector(".searchinput")).style.width = "240px", n.style.fontSize = "14px", n.style.padding = "4px 6px", n.style.color = "#000", n.style.background = "#fff", n.style.borderRadius = "2px", n.style.border = "0", n.style.outline = "0", n.style.boxShadow = "0 2px 18px rgba(0, 0, 0, 0.2)", n.style["-webkit-appearance"] = "none", e.getRevealElement().appendChild(t), n.addEventListener("keyup", function (t) {
        switch (t.keyCode) {
          case 13:
            t.preventDefault(), function () {
              if (i) {
                var t = n.value;
                "" === t ? (c && c.remove(), r = null) : (c = new f("slidecontent"), r = c.apply(t), o = 0);
              }

              r && (r.length && r.length <= o && (o = 0), r.length > o && (e.slide(r[o].h, r[o].v), o++));
            }(), i = !1;
            break;

          default:
            i = !0;
        }
      }, !1), l();
    }

    function a() {
      t || u(), t.style.display = "inline", n.focus(), n.select();
    }

    function l() {
      t || u(), t.style.display = "none", c && c.remove();
    }

    function f(t, n) {
      var r = document.getElementById(t) || document.body,
          o = n || "EM",
          i = new RegExp("^(?:" + o + "|SCRIPT|FORM)$"),
          c = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"],
          u = [],
          a = 0,
          l = "",
          f = [];
      this.setRegex = function (e) {
        e = e.replace(/^[^\w]+|[^\w]+$/g, "").replace(/[^\w'-]+/g, "|"), l = new RegExp("(" + e + ")", "i");
      }, this.getRegex = function () {
        return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g, "").replace(/\|/g, " ");
      }, this.hiliteWords = function (t) {
        if (null != t && t && l && !i.test(t.nodeName)) {
          if (t.hasChildNodes()) for (var n = 0; n < t.childNodes.length; n++) {
            this.hiliteWords(t.childNodes[n]);
          }
          var r, s;
          if (3 == t.nodeType) if ((r = t.nodeValue) && (s = l.exec(r))) {
            for (var p = t; null != p && "SECTION" != p.nodeName;) {
              p = p.parentNode;
            }

            var d = e.getIndices(p),
                g = f.length,
                h = !1;

            for (n = 0; n < g; n++) {
              f[n].h === d.h && f[n].v === d.v && (h = !0);
            }

            h || f.push(d), u[s[0].toLowerCase()] || (u[s[0].toLowerCase()] = c[a++ % c.length]);
            var y = document.createElement(o);
            y.appendChild(document.createTextNode(s[0])), y.style.backgroundColor = u[s[0].toLowerCase()], y.style.fontStyle = "inherit", y.style.color = "#000";
            var v = t.splitText(s.index);
            v.nodeValue = v.nodeValue.substring(s[0].length), t.parentNode.insertBefore(y, v);
          }
        }
      }, this.remove = function () {
        for (var e, t = document.getElementsByTagName(o); t.length && (e = t[0]);) {
          e.parentNode.replaceChild(e.firstChild, e);
        }
      }, this.apply = function (e) {
        if (null != e && e) return this.remove(), this.setRegex(e), this.hiliteWords(r), f;
      };
    }

    return {
      id: "search",
      init: function init(n) {
        (e = n).registerKeyboardShortcut("CTRL + Shift + F", "Search"), document.addEventListener("keydown", function (e) {
          "F" == e.key && (e.ctrlKey || e.metaKey) && (e.preventDefault(), t || u(), "inline" !== t.style.display ? a() : l());
        }, !1);
      },
      open: a
    };
  };
});
},{}],"../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63294" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","plugin/search/search.js"], null)
//# sourceMappingURL=/search.2e98e5dc.js.map