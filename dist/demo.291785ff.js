// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3vZPq":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "df451b235d37aac697ed072c291785ff";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5kqcu":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
* reveal.js 4.0.2
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2020 Hakim El Hattab, https://hakim.se
*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Reveal = t();
})(this, function () {
  "use strict";
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function n(e, t, n) {
    return (e(n = {
      path: t,
      exports: {},
      require: function (e, t) {
        return (function () {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        })(null == t && n.path);
      }
    }, n.exports), n.exports);
  }
  var i = function (e) {
    return e && e.Math == Math && e;
  }, r = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")(), a = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  }, o = !a(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1];
  }), s = ({}).propertyIsEnumerable, l = Object.getOwnPropertyDescriptor, u = {
    f: l && !s.call({
      1: 2
    }, 1) ? function (e) {
      var t = l(this, e);
      return !!t && t.enumerable;
    } : s
  }, c = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  }, d = ({}).toString, h = function (e) {
    return d.call(e).slice(8, -1);
  }, f = ("").split, v = a(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (e) {
    return "String" == h(e) ? f.call(e, "") : Object(e);
  } : Object, g = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  }, p = function (e) {
    return v(g(e));
  }, m = function (e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
  }, y = function (e, t) {
    if (!m(e)) return e;
    var n, i;
    if (t && "function" == typeof (n = e.toString) && !m(i = n.call(e))) return i;
    if ("function" == typeof (n = e.valueOf) && !m(i = n.call(e))) return i;
    if (!t && "function" == typeof (n = e.toString) && !m(i = n.call(e))) return i;
    throw TypeError("Can't convert object to primitive value");
  }, b = ({}).hasOwnProperty, w = function (e, t) {
    return b.call(e, t);
  }, S = r.document, E = m(S) && m(S.createElement), k = function (e) {
    return E ? S.createElement(e) : {};
  }, A = !o && !a(function () {
    return 7 != Object.defineProperty(k("div"), "a", {
      get: function () {
        return 7;
      }
    }).a;
  }), R = Object.getOwnPropertyDescriptor, x = {
    f: o ? R : function (e, t) {
      if ((e = p(e), t = y(t, !0), A)) try {
        return R(e, t);
      } catch (e) {}
      if (w(e, t)) return c(!u.f.call(e, t), e[t]);
    }
  }, L = function (e) {
    if (!m(e)) throw TypeError(String(e) + " is not an object");
    return e;
  }, C = Object.defineProperty, P = {
    f: o ? C : function (e, t, n) {
      if ((L(e), t = y(t, !0), L(n), A)) try {
        return C(e, t, n);
      } catch (e) {}
      if (("get" in n) || ("set" in n)) throw TypeError("Accessors not supported");
      return (("value" in n) && (e[t] = n.value), e);
    }
  }, N = o ? function (e, t, n) {
    return P.f(e, t, c(1, n));
  } : function (e, t, n) {
    return (e[t] = n, e);
  }, M = function (e, t) {
    try {
      N(r, e, t);
    } catch (n) {
      r[e] = t;
    }
    return t;
  }, I = "__core-js_shared__", O = r[I] || M(I, {}), T = Function.toString;
  "function" != typeof O.inspectSource && (O.inspectSource = function (e) {
    return T.call(e);
  });
  var D, j, z, H = O.inspectSource, F = r.WeakMap, U = "function" == typeof F && (/native code/).test(H(F)), B = n(function (e) {
    (e.exports = function (e, t) {
      return O[e] || (O[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }), q = 0, W = Math.random(), _ = function (e) {
    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++q + W).toString(36);
  }, V = B("keys"), K = function (e) {
    return V[e] || (V[e] = _(e));
  }, $ = {}, X = r.WeakMap;
  if (U) {
    var Y = new X(), G = Y.get, J = Y.has, Q = Y.set;
    (D = function (e, t) {
      return (Q.call(Y, e, t), t);
    }, j = function (e) {
      return G.call(Y, e) || ({});
    }, z = function (e) {
      return J.call(Y, e);
    });
  } else {
    var Z = K("state");
    ($[Z] = !0, D = function (e, t) {
      return (N(e, Z, t), t);
    }, j = function (e) {
      return w(e, Z) ? e[Z] : {};
    }, z = function (e) {
      return w(e, Z);
    });
  }
  var ee, te, ne = {
    set: D,
    get: j,
    has: z,
    enforce: function (e) {
      return z(e) ? j(e) : D(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!m(t) || (n = j(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
        return n;
      };
    }
  }, ie = n(function (e) {
    var t = ne.get, n = ne.enforce, i = String(String).split("String");
    (e.exports = function (e, t, a, o) {
      var s = !!o && !!o.unsafe, l = !!o && !!o.enumerable, u = !!o && !!o.noTargetGet;
      ("function" == typeof a && ("string" != typeof t || w(a, "name") || N(a, "name", t), n(a).source = i.join("string" == typeof t ? t : "")), e !== r ? (s ? !u && e[t] && (l = !0) : delete e[t], l ? e[t] = a : N(e, t, a)) : l ? e[t] = a : M(t, a));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && t(this).source || H(this);
    });
  }), re = r, ae = function (e) {
    return "function" == typeof e ? e : void 0;
  }, oe = function (e, t) {
    return arguments.length < 2 ? ae(re[e]) || ae(r[e]) : re[e] && re[e][t] || r[e] && r[e][t];
  }, se = Math.ceil, le = Math.floor, ue = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? le : se)(e);
  }, ce = Math.min, de = function (e) {
    return e > 0 ? ce(ue(e), 9007199254740991) : 0;
  }, he = Math.max, fe = Math.min, ve = function (e, t) {
    var n = ue(e);
    return n < 0 ? he(n + t, 0) : fe(n, t);
  }, ge = function (e) {
    return function (t, n, i) {
      var r, a = p(t), o = de(a.length), s = ve(i, o);
      if (e && n != n) {
        for (; o > s; ) if ((r = a[s++]) != r) return !0;
      } else for (; o > s; s++) if ((e || (s in a)) && a[s] === n) return e || s || 0;
      return !e && -1;
    };
  }, pe = {
    includes: ge(!0),
    indexOf: ge(!1)
  }, me = pe.indexOf, ye = function (e, t) {
    var n, i = p(e), r = 0, a = [];
    for (n in i) !w($, n) && w(i, n) && a.push(n);
    for (; t.length > r; ) w(i, n = t[r++]) && (~me(a, n) || a.push(n));
    return a;
  }, be = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], we = be.concat("length", "prototype"), Se = {
    f: Object.getOwnPropertyNames || (function (e) {
      return ye(e, we);
    })
  }, Ee = {
    f: Object.getOwnPropertySymbols
  }, ke = oe("Reflect", "ownKeys") || (function (e) {
    var t = Se.f(L(e)), n = Ee.f;
    return n ? t.concat(n(e)) : t;
  }), Ae = function (e, t) {
    for (var n = ke(t), i = P.f, r = x.f, a = 0; a < n.length; a++) {
      var o = n[a];
      w(e, o) || i(e, o, r(t, o));
    }
  }, Re = /#|\.prototype\./, xe = function (e, t) {
    var n = Ce[Le(e)];
    return n == Ne || n != Pe && ("function" == typeof t ? a(t) : !!t);
  }, Le = xe.normalize = function (e) {
    return String(e).replace(Re, ".").toLowerCase();
  }, Ce = xe.data = {}, Pe = xe.NATIVE = "N", Ne = xe.POLYFILL = "P", Me = xe, Ie = x.f, Oe = function (e, t) {
    var n, i, a, o, s, l = e.target, u = e.global, c = e.stat;
    if (n = u ? r : c ? r[l] || M(l, {}) : (r[l] || ({})).prototype) for (i in t) {
      if ((o = t[i], a = e.noTargetGet ? (s = Ie(n, i)) && s.value : n[i], !Me(u ? i : l + (c ? "." : "#") + i, e.forced) && void 0 !== a)) {
        if (typeof o == typeof a) continue;
        Ae(o, a);
      }
      ((e.sham || a && a.sham) && N(o, "sham", !0), ie(n, i, o, e));
    }
  }, Te = Array.isArray || (function (e) {
    return "Array" == h(e);
  }), De = function (e) {
    return Object(g(e));
  }, je = function (e, t, n) {
    var i = y(t);
    (i in e) ? P.f(e, i, c(0, n)) : e[i] = n;
  }, ze = !!Object.getOwnPropertySymbols && !a(function () {
    return !String(Symbol());
  }), He = ze && !Symbol.sham && "symbol" == typeof Symbol.iterator, Fe = B("wks"), Ue = r.Symbol, Be = He ? Ue : Ue && Ue.withoutSetter || _, qe = function (e) {
    return (w(Fe, e) || (ze && w(Ue, e) ? Fe[e] = Ue[e] : Fe[e] = Be("Symbol." + e)), Fe[e]);
  }, We = qe("species"), _e = function (e, t) {
    var n;
    return (Te(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Te(n.prototype) ? m(n) && null === (n = n[We]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t));
  }, Ve = oe("navigator", "userAgent") || "", Ke = r.process, $e = Ke && Ke.versions, Xe = $e && $e.v8;
  Xe ? te = (ee = Xe.split("."))[0] + ee[1] : Ve && (!(ee = Ve.match(/Edge\/(\d+)/)) || ee[1] >= 74) && (ee = Ve.match(/Chrome\/(\d+)/)) && (te = ee[1]);
  var Ye = te && +te, Ge = qe("species"), Je = function (e) {
    return Ye >= 51 || !a(function () {
      var t = [];
      return ((t.constructor = {})[Ge] = function () {
        return {
          foo: 1
        };
      }, 1 !== t[e](Boolean).foo);
    });
  }, Qe = qe("isConcatSpreadable"), Ze = 9007199254740991, et = "Maximum allowed index exceeded", tt = Ye >= 51 || !a(function () {
    var e = [];
    return (e[Qe] = !1, e.concat()[0] !== e);
  }), nt = Je("concat"), it = function (e) {
    if (!m(e)) return !1;
    var t = e[Qe];
    return void 0 !== t ? !!t : Te(e);
  };
  Oe({
    target: "Array",
    proto: !0,
    forced: !tt || !nt
  }, {
    concat: function (e) {
      var t, n, i, r, a, o = De(this), s = _e(o, 0), l = 0;
      for ((t = -1, i = arguments.length); t < i; t++) if (it(a = -1 === t ? o : arguments[t])) {
        if (l + (r = de(a.length)) > Ze) throw TypeError(et);
        for (n = 0; n < r; (n++, l++)) (n in a) && je(s, l, a[n]);
      } else {
        if (l >= Ze) throw TypeError(et);
        je(s, l++, a);
      }
      return (s.length = l, s);
    }
  });
  var rt = function (e) {
    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
    return e;
  }, at = function (e, t, n) {
    if ((rt(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function () {
          return e.call(t);
        };
      case 1:
        return function (n) {
          return e.call(t, n);
        };
      case 2:
        return function (n, i) {
          return e.call(t, n, i);
        };
      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  }, ot = [].push, st = function (e) {
    var t = 1 == e, n = 2 == e, i = 3 == e, r = 4 == e, a = 6 == e, o = 5 == e || a;
    return function (s, l, u, c) {
      for (var d, h, f = De(s), g = v(f), p = at(l, u, 3), m = de(g.length), y = 0, b = c || _e, w = t ? b(s, m) : n ? b(s, 0) : void 0; m > y; y++) if ((o || (y in g)) && (h = p(d = g[y], y, f), e)) if (t) w[y] = h; else if (h) switch (e) {
        case 3:
          return !0;
        case 5:
          return d;
        case 6:
          return y;
        case 2:
          ot.call(w, d);
      } else if (r) return !1;
      return a ? -1 : i || r ? r : w;
    };
  }, lt = {
    forEach: st(0),
    map: st(1),
    filter: st(2),
    some: st(3),
    every: st(4),
    find: st(5),
    findIndex: st(6)
  }, ut = function (e, t) {
    var n = [][e];
    return !!n && a(function () {
      n.call(null, t || (function () {
        throw 1;
      }), 1);
    });
  }, ct = Object.defineProperty, dt = {}, ht = function (e) {
    throw e;
  }, ft = function (e, t) {
    if (w(dt, e)) return dt[e];
    t || (t = {});
    var n = [][e], i = !!w(t, "ACCESSORS") && t.ACCESSORS, r = w(t, 0) ? t[0] : ht, s = w(t, 1) ? t[1] : void 0;
    return dt[e] = !!n && !a(function () {
      if (i && !o) return !0;
      var e = {
        length: -1
      };
      (i ? ct(e, 1, {
        enumerable: !0,
        get: ht
      }) : e[1] = 1, n.call(e, r, s));
    });
  }, vt = lt.forEach, gt = ut("forEach"), pt = ft("forEach"), mt = gt && pt ? [].forEach : function (e) {
    return vt(this, e, arguments.length > 1 ? arguments[1] : void 0);
  };
  Oe({
    target: "Array",
    proto: !0,
    forced: [].forEach != mt
  }, {
    forEach: mt
  });
  var yt = lt.map, bt = Je("map"), wt = ft("map");
  Oe({
    target: "Array",
    proto: !0,
    forced: !bt || !wt
  }, {
    map: function (e) {
      return yt(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var St = Object.keys || (function (e) {
    return ye(e, be);
  }), Et = Object.assign, kt = Object.defineProperty, At = !Et || a(function () {
    if (o && 1 !== Et({
      b: 1
    }, Et(kt({}, "a", {
      enumerable: !0,
      get: function () {
        kt(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b) return !0;
    var e = {}, t = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
    return (e[n] = 7, i.split("").forEach(function (e) {
      t[e] = e;
    }), 7 != Et({}, e)[n] || St(Et({}, t)).join("") != i);
  }) ? function (e, t) {
    for (var n = De(e), i = arguments.length, r = 1, a = Ee.f, s = u.f; i > r; ) for (var l, c = v(arguments[r++]), d = a ? St(c).concat(a(c)) : St(c), h = d.length, f = 0; h > f; ) (l = d[f++], o && !s.call(c, l) || (n[l] = c[l]));
    return n;
  } : Et;
  Oe({
    target: "Object",
    stat: !0,
    forced: Object.assign !== At
  }, {
    assign: At
  });
  var Rt, xt = o ? Object.defineProperties : function (e, t) {
    L(e);
    for (var n, i = St(t), r = i.length, a = 0; r > a; ) P.f(e, n = i[a++], t[n]);
    return e;
  }, Lt = oe("document", "documentElement"), Ct = K("IE_PROTO"), Pt = function () {}, Nt = function (e) {
    return "<script>" + e + "</" + "script>";
  }, Mt = function () {
    try {
      Rt = document.domain && new ActiveXObject("htmlfile");
    } catch (e) {}
    var e, t;
    Mt = Rt ? (function (e) {
      (e.write(Nt("")), e.close());
      var t = e.parentWindow.Object;
      return (e = null, t);
    })(Rt) : ((t = k("iframe")).style.display = "none", Lt.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Nt("document.F=Object")), e.close(), e.F);
    for (var n = be.length; n--; ) delete Mt.prototype[be[n]];
    return Mt();
  };
  $[Ct] = !0;
  var It = Object.create || (function (e, t) {
    var n;
    return (null !== e ? (Pt.prototype = L(e), n = new Pt(), Pt.prototype = null, n[Ct] = e) : n = Mt(), void 0 === t ? n : xt(n, t));
  }), Ot = Se.f, Tt = ({}).toString, Dt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], jt = {
    f: function (e) {
      return Dt && "[object Window]" == Tt.call(e) ? (function (e) {
        try {
          return Ot(e);
        } catch (e) {
          return Dt.slice();
        }
      })(e) : Ot(p(e));
    }
  }, zt = {
    f: qe
  }, Ht = P.f, Ft = P.f, Ut = qe("toStringTag"), Bt = function (e, t, n) {
    e && !w(e = n ? e : e.prototype, Ut) && Ft(e, Ut, {
      configurable: !0,
      value: t
    });
  }, qt = lt.forEach, Wt = K("hidden"), _t = "Symbol", Vt = qe("toPrimitive"), Kt = ne.set, $t = ne.getterFor(_t), Xt = Object.prototype, Yt = r.Symbol, Gt = oe("JSON", "stringify"), Jt = x.f, Qt = P.f, Zt = jt.f, en = u.f, tn = B("symbols"), nn = B("op-symbols"), rn = B("string-to-symbol-registry"), an = B("symbol-to-string-registry"), on = B("wks"), sn = r.QObject, ln = !sn || !sn.prototype || !sn.prototype.findChild, un = o && a(function () {
    return 7 != It(Qt({}, "a", {
      get: function () {
        return Qt(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (e, t, n) {
    var i = Jt(Xt, t);
    (i && delete Xt[t], Qt(e, t, n), i && e !== Xt && Qt(Xt, t, i));
  } : Qt, cn = function (e, t) {
    var n = tn[e] = It(Yt.prototype);
    return (Kt(n, {
      type: _t,
      tag: e,
      description: t
    }), o || (n.description = t), n);
  }, dn = He ? function (e) {
    return "symbol" == typeof e;
  } : function (e) {
    return Object(e) instanceof Yt;
  }, hn = function (e, t, n) {
    (e === Xt && hn(nn, t, n), L(e));
    var i = y(t, !0);
    return (L(n), w(tn, i) ? (n.enumerable ? (w(e, Wt) && e[Wt][i] && (e[Wt][i] = !1), n = It(n, {
      enumerable: c(0, !1)
    })) : (w(e, Wt) || Qt(e, Wt, c(1, {})), e[Wt][i] = !0), un(e, i, n)) : Qt(e, i, n));
  }, fn = function (e, t) {
    L(e);
    var n = p(t), i = St(n).concat(mn(n));
    return (qt(i, function (t) {
      o && !vn.call(n, t) || hn(e, t, n[t]);
    }), e);
  }, vn = function (e) {
    var t = y(e, !0), n = en.call(this, t);
    return !(this === Xt && w(tn, t) && !w(nn, t)) && (!(n || !w(this, t) || !w(tn, t) || w(this, Wt) && this[Wt][t]) || n);
  }, gn = function (e, t) {
    var n = p(e), i = y(t, !0);
    if (n !== Xt || !w(tn, i) || w(nn, i)) {
      var r = Jt(n, i);
      return (!r || !w(tn, i) || w(n, Wt) && n[Wt][i] || (r.enumerable = !0), r);
    }
  }, pn = function (e) {
    var t = Zt(p(e)), n = [];
    return (qt(t, function (e) {
      w(tn, e) || w($, e) || n.push(e);
    }), n);
  }, mn = function (e) {
    var t = e === Xt, n = Zt(t ? nn : p(e)), i = [];
    return (qt(n, function (e) {
      !w(tn, e) || t && !w(Xt, e) || i.push(tn[e]);
    }), i);
  };
  if ((ze || (ie((Yt = function () {
    if (this instanceof Yt) throw TypeError("Symbol is not a constructor");
    var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, t = _(e), n = function (e) {
      (this === Xt && n.call(nn, e), w(this, Wt) && w(this[Wt], t) && (this[Wt][t] = !1), un(this, t, c(1, e)));
    };
    return (o && ln && un(Xt, t, {
      configurable: !0,
      set: n
    }), cn(t, e));
  }).prototype, "toString", function () {
    return $t(this).tag;
  }), ie(Yt, "withoutSetter", function (e) {
    return cn(_(e), e);
  }), u.f = vn, P.f = hn, x.f = gn, Se.f = jt.f = pn, Ee.f = mn, zt.f = function (e) {
    return cn(qe(e), e);
  }, o && (Qt(Yt.prototype, "description", {
    configurable: !0,
    get: function () {
      return $t(this).description;
    }
  }), ie(Xt, "propertyIsEnumerable", vn, {
    unsafe: !0
  }))), Oe({
    global: !0,
    wrap: !0,
    forced: !ze,
    sham: !ze
  }, {
    Symbol: Yt
  }), qt(St(on), function (e) {
    !(function (e) {
      var t = re.Symbol || (re.Symbol = {});
      w(t, e) || Ht(t, e, {
        value: zt.f(e)
      });
    })(e);
  }), Oe({
    target: _t,
    stat: !0,
    forced: !ze
  }, {
    for: function (e) {
      var t = String(e);
      if (w(rn, t)) return rn[t];
      var n = Yt(t);
      return (rn[t] = n, an[n] = t, n);
    },
    keyFor: function (e) {
      if (!dn(e)) throw TypeError(e + " is not a symbol");
      if (w(an, e)) return an[e];
    },
    useSetter: function () {
      ln = !0;
    },
    useSimple: function () {
      ln = !1;
    }
  }), Oe({
    target: "Object",
    stat: !0,
    forced: !ze,
    sham: !o
  }, {
    create: function (e, t) {
      return void 0 === t ? It(e) : fn(It(e), t);
    },
    defineProperty: hn,
    defineProperties: fn,
    getOwnPropertyDescriptor: gn
  }), Oe({
    target: "Object",
    stat: !0,
    forced: !ze
  }, {
    getOwnPropertyNames: pn,
    getOwnPropertySymbols: mn
  }), Oe({
    target: "Object",
    stat: !0,
    forced: a(function () {
      Ee.f(1);
    })
  }, {
    getOwnPropertySymbols: function (e) {
      return Ee.f(De(e));
    }
  }), Gt)) {
    var yn = !ze || a(function () {
      var e = Yt();
      return "[null]" != Gt([e]) || "{}" != Gt({
        a: e
      }) || "{}" != Gt(Object(e));
    });
    Oe({
      target: "JSON",
      stat: !0,
      forced: yn
    }, {
      stringify: function (e, t, n) {
        for (var i, r = [e], a = 1; arguments.length > a; ) r.push(arguments[a++]);
        if ((i = t, (m(t) || void 0 !== e) && !dn(e))) return (Te(t) || (t = function (e, t) {
          if (("function" == typeof i && (t = i.call(this, e, t)), !dn(t))) return t;
        }), r[1] = t, Gt.apply(null, r));
      }
    });
  }
  (Yt.prototype[Vt] || N(Yt.prototype, Vt, Yt.prototype.valueOf), Bt(Yt, _t), $[Wt] = !0);
  var bn = P.f, wn = r.Symbol;
  if (o && "function" == typeof wn && (!(("description" in wn.prototype)) || void 0 !== wn().description)) {
    var Sn = {}, En = function () {
      var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), t = this instanceof En ? new wn(e) : void 0 === e ? wn() : wn(e);
      return ("" === e && (Sn[t] = !0), t);
    };
    Ae(En, wn);
    var kn = En.prototype = wn.prototype;
    kn.constructor = En;
    var An = kn.toString, Rn = "Symbol(test)" == String(wn("test")), xn = /^Symbol\((.*)\)[^)]+$/;
    (bn(kn, "description", {
      configurable: !0,
      get: function () {
        var e = m(this) ? this.valueOf() : this, t = An.call(e);
        if (w(Sn, e)) return "";
        var n = Rn ? t.slice(7, -1) : t.replace(xn, "$1");
        return "" === n ? void 0 : n;
      }
    }), Oe({
      global: !0,
      forced: !0
    }, {
      Symbol: En
    }));
  }
  var Ln = function (e, t, n, i) {
    try {
      return i ? t(L(n)[0], n[1]) : t(n);
    } catch (t) {
      var r = e.return;
      throw (void 0 !== r && L(r.call(e)), t);
    }
  }, Cn = {}, Pn = qe("iterator"), Nn = Array.prototype, Mn = function (e) {
    return void 0 !== e && (Cn.Array === e || Nn[Pn] === e);
  }, In = {};
  In[qe("toStringTag")] = "z";
  var On = "[object z]" === String(In), Tn = qe("toStringTag"), Dn = "Arguments" == h((function () {
    return arguments;
  })()), jn = On ? h : function (e) {
    var t, n, i;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = (function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    })(t = Object(e), Tn)) ? n : Dn ? h(t) : "Object" == (i = h(t)) && "function" == typeof t.callee ? "Arguments" : i;
  }, zn = qe("iterator"), Hn = function (e) {
    if (null != e) return e[zn] || e["@@iterator"] || Cn[jn(e)];
  }, Fn = qe("iterator"), Un = !1;
  try {
    var Bn = 0, qn = {
      next: function () {
        return {
          done: !!Bn++
        };
      },
      return: function () {
        Un = !0;
      }
    };
    (qn[Fn] = function () {
      return this;
    }, Array.from(qn, function () {
      throw 2;
    }));
  } catch (e) {}
  var Wn = function (e, t) {
    if (!t && !Un) return !1;
    var n = !1;
    try {
      var i = {};
      (i[Fn] = function () {
        return {
          next: function () {
            return {
              done: n = !0
            };
          }
        };
      }, e(i));
    } catch (e) {}
    return n;
  }, _n = !Wn(function (e) {
    Array.from(e);
  });
  Oe({
    target: "Array",
    stat: !0,
    forced: _n
  }, {
    from: function (e) {
      var t, n, i, r, a, o, s = De(e), l = "function" == typeof this ? this : Array, u = arguments.length, c = u > 1 ? arguments[1] : void 0, d = void 0 !== c, h = Hn(s), f = 0;
      if ((d && (c = at(c, u > 2 ? arguments[2] : void 0, 2)), null == h || l == Array && Mn(h))) for (n = new l(t = de(s.length)); t > f; f++) (o = d ? c(s[f], f) : s[f], je(n, f, o)); else for ((a = (r = h.call(s)).next, n = new l()); !(i = a.call(r)).done; f++) (o = d ? Ln(r, c, [i.value, f], !0) : i.value, je(n, f, o));
      return (n.length = f, n);
    }
  });
  var Vn = pe.indexOf, Kn = [].indexOf, $n = !!Kn && 1 / [1].indexOf(1, -0) < 0, Xn = ut("indexOf"), Yn = ft("indexOf", {
    ACCESSORS: !0,
    1: 0
  });
  Oe({
    target: "Array",
    proto: !0,
    forced: $n || !Xn || !Yn
  }, {
    indexOf: function (e) {
      return $n ? Kn.apply(this, arguments) || 0 : Vn(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Gn = Je("splice"), Jn = ft("splice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }), Qn = Math.max, Zn = Math.min, ei = 9007199254740991, ti = "Maximum allowed length exceeded";
  Oe({
    target: "Array",
    proto: !0,
    forced: !Gn || !Jn
  }, {
    splice: function (e, t) {
      var n, i, r, a, o, s, l = De(this), u = de(l.length), c = ve(e, u), d = arguments.length;
      if ((0 === d ? n = i = 0 : 1 === d ? (n = 0, i = u - c) : (n = d - 2, i = Zn(Qn(ue(t), 0), u - c)), u + n - i > ei)) throw TypeError(ti);
      for ((r = _e(l, i), a = 0); a < i; a++) ((o = c + a) in l) && je(r, a, l[o]);
      if ((r.length = i, n < i)) {
        for (a = c; a < u - i; a++) (s = a + n, ((o = a + i) in l) ? l[s] = l[o] : delete l[s]);
        for (a = u; a > u - i + n; a--) delete l[a - 1];
      } else if (n > i) for (a = u - i; a > c; a--) (s = a + n - 1, ((o = a + i - 1) in l) ? l[s] = l[o] : delete l[s]);
      for (a = 0; a < n; a++) l[a + c] = arguments[a + 2];
      return (l.length = u - i + n, r);
    }
  });
  var ni = P.f, ii = Function.prototype, ri = ii.toString, ai = /^\s*function ([^ (]*)/, oi = "name";
  o && !((oi in ii)) && ni(ii, oi, {
    configurable: !0,
    get: function () {
      try {
        return ri.call(this).match(ai)[1];
      } catch (e) {
        return "";
      }
    }
  });
  var si = Object.setPrototypeOf || (("__proto__" in ({})) ? (function () {
    var e, t = !1, n = {};
    try {
      ((e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array);
    } catch (e) {}
    return function (n, i) {
      return (L(n), (function (e) {
        if (!m(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
      })(i), t ? e.call(n, i) : n.__proto__ = i, n);
    };
  })() : void 0), li = function (e, t, n) {
    var i, r;
    return (si && "function" == typeof (i = t.constructor) && i !== n && m(r = i.prototype) && r !== n.prototype && si(e, r), e);
  }, ui = "\t\n\v\f\r                　\u2028\u2029\ufeff", ci = "[" + ui + "]", di = RegExp("^" + ci + ci + "*"), hi = RegExp(ci + ci + "*$"), fi = function (e) {
    return function (t) {
      var n = String(g(t));
      return (1 & e && (n = n.replace(di, "")), 2 & e && (n = n.replace(hi, "")), n);
    };
  }, vi = {
    start: fi(1),
    end: fi(2),
    trim: fi(3)
  }, gi = Se.f, pi = x.f, mi = P.f, yi = vi.trim, bi = "Number", wi = r.Number, Si = wi.prototype, Ei = h(It(Si)) == bi, ki = function (e) {
    var t, n, i, r, a, o, s, l, u = y(e, !1);
    if ("string" == typeof u && u.length > 2) if (43 === (t = (u = yi(u)).charCodeAt(0)) || 45 === t) {
      if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
    } else if (48 === t) {
      switch (u.charCodeAt(1)) {
        case 66:
        case 98:
          (i = 2, r = 49);
          break;
        case 79:
        case 111:
          (i = 8, r = 55);
          break;
        default:
          return +u;
      }
      for ((o = (a = u.slice(2)).length, s = 0); s < o; s++) if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
      return parseInt(a, i);
    }
    return +u;
  };
  if (Me(bi, !wi(" 0o1") || !wi("0b1") || wi("+0x1"))) {
    for (var Ai, Ri = function (e) {
      var t = arguments.length < 1 ? 0 : e, n = this;
      return n instanceof Ri && (Ei ? a(function () {
        Si.valueOf.call(n);
      }) : h(n) != bi) ? li(new wi(ki(t)), n, Ri) : ki(t);
    }, xi = o ? gi(wi) : ("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger").split(","), Li = 0; xi.length > Li; Li++) w(wi, Ai = xi[Li]) && !w(Ri, Ai) && mi(Ri, Ai, pi(wi, Ai));
    (Ri.prototype = Si, Si.constructor = Ri, ie(r, bi, Ri));
  }
  var Ci = On ? ({}).toString : function () {
    return "[object " + jn(this) + "]";
  };
  On || ie(Object.prototype, "toString", Ci, {
    unsafe: !0
  });
  var Pi, Ni, Mi, Ii = r.Promise, Oi = qe("species"), Ti = n(function (e) {
    var t = function (e, t) {
      (this.stopped = e, this.result = t);
    };
    (e.exports = function (e, n, i, r, a) {
      var o, s, l, u, c, d, h, f = at(n, i, r ? 2 : 1);
      if (a) o = e; else {
        if ("function" != typeof (s = Hn(e))) throw TypeError("Target is not iterable");
        if (Mn(s)) {
          for ((l = 0, u = de(e.length)); u > l; l++) if ((c = r ? f(L(h = e[l])[0], h[1]) : f(e[l])) && c instanceof t) return c;
          return new t(!1);
        }
        o = s.call(e);
      }
      for (d = o.next; !(h = d.call(o)).done; ) if ("object" == typeof (c = Ln(o, f, h.value, r)) && c && c instanceof t) return c;
      return new t(!1);
    }).stop = function (e) {
      return new t(!0, e);
    };
  }), Di = qe("species"), ji = function (e, t) {
    var n, i = L(e).constructor;
    return void 0 === i || null == (n = L(i)[Di]) ? t : rt(n);
  }, zi = (/(iphone|ipod|ipad).*applewebkit/i).test(Ve), Hi = r.location, Fi = r.setImmediate, Ui = r.clearImmediate, Bi = r.process, qi = r.MessageChannel, Wi = r.Dispatch, _i = 0, Vi = {}, Ki = "onreadystatechange", $i = function (e) {
    if (Vi.hasOwnProperty(e)) {
      var t = Vi[e];
      (delete Vi[e], t());
    }
  }, Xi = function (e) {
    return function () {
      $i(e);
    };
  }, Yi = function (e) {
    $i(e.data);
  }, Gi = function (e) {
    r.postMessage(e + "", Hi.protocol + "//" + Hi.host);
  };
  Fi && Ui || (Fi = function (e) {
    for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
    return (Vi[++_i] = function () {
      ("function" == typeof e ? e : Function(e)).apply(void 0, t);
    }, Pi(_i), _i);
  }, Ui = function (e) {
    delete Vi[e];
  }, "process" == h(Bi) ? Pi = function (e) {
    Bi.nextTick(Xi(e));
  } : Wi && Wi.now ? Pi = function (e) {
    Wi.now(Xi(e));
  } : qi && !zi ? (Mi = (Ni = new qi()).port2, Ni.port1.onmessage = Yi, Pi = at(Mi.postMessage, Mi, 1)) : !r.addEventListener || "function" != typeof postMessage || r.importScripts || a(Gi) || "file:" === Hi.protocol ? Pi = (Ki in k("script")) ? function (e) {
    Lt.appendChild(k("script")).onreadystatechange = function () {
      (Lt.removeChild(this), $i(e));
    };
  } : function (e) {
    setTimeout(Xi(e), 0);
  } : (Pi = Gi, r.addEventListener("message", Yi, !1)));
  var Ji, Qi, Zi, er, tr, nr, ir, rr, ar = {
    set: Fi,
    clear: Ui
  }, or = x.f, sr = ar.set, lr = r.MutationObserver || r.WebKitMutationObserver, ur = r.process, cr = r.Promise, dr = "process" == h(ur), hr = or(r, "queueMicrotask"), fr = hr && hr.value;
  fr || (Ji = function () {
    var e, t;
    for (dr && (e = ur.domain) && e.exit(); Qi; ) {
      (t = Qi.fn, Qi = Qi.next);
      try {
        t();
      } catch (e) {
        throw (Qi ? er() : Zi = void 0, e);
      }
    }
    (Zi = void 0, e && e.enter());
  }, dr ? er = function () {
    ur.nextTick(Ji);
  } : lr && !zi ? (tr = !0, nr = document.createTextNode(""), new lr(Ji).observe(nr, {
    characterData: !0
  }), er = function () {
    nr.data = tr = !tr;
  }) : cr && cr.resolve ? (ir = cr.resolve(void 0), rr = ir.then, er = function () {
    rr.call(ir, Ji);
  }) : er = function () {
    sr.call(r, Ji);
  });
  var vr, gr, pr, mr, yr = fr || (function (e) {
    var t = {
      fn: e,
      next: void 0
    };
    (Zi && (Zi.next = t), Qi || (Qi = t, er()), Zi = t);
  }), br = function (e) {
    var t, n;
    (this.promise = new e(function (e, i) {
      if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
      (t = e, n = i);
    }), this.resolve = rt(t), this.reject = rt(n));
  }, wr = {
    f: function (e) {
      return new br(e);
    }
  }, Sr = function (e, t) {
    if ((L(e), m(t) && t.constructor === e)) return t;
    var n = wr.f(e);
    return ((0, n.resolve)(t), n.promise);
  }, Er = function (e) {
    try {
      return {
        error: !1,
        value: e()
      };
    } catch (e) {
      return {
        error: !0,
        value: e
      };
    }
  }, kr = ar.set, Ar = qe("species"), Rr = "Promise", xr = ne.get, Lr = ne.set, Cr = ne.getterFor(Rr), Pr = Ii, Nr = r.TypeError, Mr = r.document, Ir = r.process, Or = oe("fetch"), Tr = wr.f, Dr = Tr, jr = "process" == h(Ir), zr = !!(Mr && Mr.createEvent && r.dispatchEvent), Hr = "unhandledrejection", Fr = Me(Rr, function () {
    if (!(H(Pr) !== String(Pr))) {
      if (66 === Ye) return !0;
      if (!jr && "function" != typeof PromiseRejectionEvent) return !0;
    }
    if (Ye >= 51 && (/native code/).test(Pr)) return !1;
    var e = Pr.resolve(1), t = function (e) {
      e(function () {}, function () {});
    };
    return ((e.constructor = {})[Ar] = t, !(e.then(function () {}) instanceof t));
  }), Ur = Fr || !Wn(function (e) {
    Pr.all(e).catch(function () {});
  }), Br = function (e) {
    var t;
    return !(!m(e) || "function" != typeof (t = e.then)) && t;
  }, qr = function (e, t, n) {
    if (!t.notified) {
      t.notified = !0;
      var i = t.reactions;
      yr(function () {
        for (var r = t.value, a = 1 == t.state, o = 0; i.length > o; ) {
          var s, l, u, c = i[o++], d = a ? c.ok : c.fail, h = c.resolve, f = c.reject, v = c.domain;
          try {
            d ? (a || (2 === t.rejection && Kr(e, t), t.rejection = 1), !0 === d ? s = r : (v && v.enter(), s = d(r), v && (v.exit(), u = !0)), s === c.promise ? f(Nr("Promise-chain cycle")) : (l = Br(s)) ? l.call(s, h, f) : h(s)) : f(r);
          } catch (e) {
            (v && !u && v.exit(), f(e));
          }
        }
        (t.reactions = [], t.notified = !1, n && !t.rejection && _r(e, t));
      });
    }
  }, Wr = function (e, t, n) {
    var i, a;
    (zr ? ((i = Mr.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), r.dispatchEvent(i)) : i = {
      promise: t,
      reason: n
    }, (a = r["on" + e]) ? a(i) : e === Hr && (function (e, t) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    })("Unhandled promise rejection", n));
  }, _r = function (e, t) {
    kr.call(r, function () {
      var n, i = t.value;
      if (Vr(t) && (n = Er(function () {
        jr ? Ir.emit("unhandledRejection", i, e) : Wr(Hr, e, i);
      }), t.rejection = jr || Vr(t) ? 2 : 1, n.error)) throw n.value;
    });
  }, Vr = function (e) {
    return 1 !== e.rejection && !e.parent;
  }, Kr = function (e, t) {
    kr.call(r, function () {
      jr ? Ir.emit("rejectionHandled", e) : Wr("rejectionhandled", e, t.value);
    });
  }, $r = function (e, t, n, i) {
    return function (r) {
      e(t, n, r, i);
    };
  }, Xr = function (e, t, n, i) {
    t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, qr(e, t, !0));
  }, Yr = function (e, t, n, i) {
    if (!t.done) {
      (t.done = !0, i && (t = i));
      try {
        if (e === n) throw Nr("Promise can't be resolved itself");
        var r = Br(n);
        r ? yr(function () {
          var i = {
            done: !1
          };
          try {
            r.call(n, $r(Yr, e, i, t), $r(Xr, e, i, t));
          } catch (n) {
            Xr(e, i, n, t);
          }
        }) : (t.value = n, t.state = 1, qr(e, t, !1));
      } catch (n) {
        Xr(e, {
          done: !1
        }, n, t);
      }
    }
  };
  (Fr && (Pr = function (e) {
    (!(function (e, t, n) {
      if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    })(this, Pr, Rr), rt(e), vr.call(this));
    var t = xr(this);
    try {
      e($r(Yr, this, t), $r(Xr, this, t));
    } catch (e) {
      Xr(this, t, e);
    }
  }, (vr = function (e) {
    Lr(this, {
      type: Rr,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0
    });
  }).prototype = (function (e, t, n) {
    for (var i in t) ie(e, i, t[i], n);
    return e;
  })(Pr.prototype, {
    then: function (e, t) {
      var n = Cr(this), i = Tr(ji(this, Pr));
      return (i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = jr ? Ir.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && qr(this, n, !1), i.promise);
    },
    catch: function (e) {
      return this.then(void 0, e);
    }
  }), gr = function () {
    var e = new vr(), t = xr(e);
    (this.promise = e, this.resolve = $r(Yr, e, t), this.reject = $r(Xr, e, t));
  }, wr.f = Tr = function (e) {
    return e === Pr || e === pr ? new gr(e) : Dr(e);
  }, "function" == typeof Ii && (mr = Ii.prototype.then, ie(Ii.prototype, "then", function (e, t) {
    var n = this;
    return new Pr(function (e, t) {
      mr.call(n, e, t);
    }).then(e, t);
  }, {
    unsafe: !0
  }), "function" == typeof Or && Oe({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function (e) {
      return Sr(Pr, Or.apply(r, arguments));
    }
  }))), Oe({
    global: !0,
    wrap: !0,
    forced: Fr
  }, {
    Promise: Pr
  }), Bt(Pr, Rr, !1), (function (e) {
    var t = oe(e), n = P.f;
    o && t && !t[Oi] && n(t, Oi, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  })(Rr), pr = oe(Rr), Oe({
    target: Rr,
    stat: !0,
    forced: Fr
  }, {
    reject: function (e) {
      var t = Tr(this);
      return (t.reject.call(void 0, e), t.promise);
    }
  }), Oe({
    target: Rr,
    stat: !0,
    forced: Fr
  }, {
    resolve: function (e) {
      return Sr(this, e);
    }
  }), Oe({
    target: Rr,
    stat: !0,
    forced: Ur
  }, {
    all: function (e) {
      var t = this, n = Tr(t), i = n.resolve, r = n.reject, a = Er(function () {
        var n = rt(t.resolve), a = [], o = 0, s = 1;
        (Ti(e, function (e) {
          var l = o++, u = !1;
          (a.push(void 0), s++, n.call(t, e).then(function (e) {
            u || (u = !0, a[l] = e, --s || i(a));
          }, r));
        }), --s || i(a));
      });
      return (a.error && r(a.value), n.promise);
    },
    race: function (e) {
      var t = this, n = Tr(t), i = n.reject, r = Er(function () {
        var r = rt(t.resolve);
        Ti(e, function (e) {
          r.call(t, e).then(n.resolve, i);
        });
      });
      return (r.error && i(r.value), n.promise);
    }
  }));
  var Gr = function () {
    var e = L(this), t = "";
    return (e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t);
  };
  function Jr(e, t) {
    return RegExp(e, t);
  }
  var Qr, Zr, ea = {
    UNSUPPORTED_Y: a(function () {
      var e = Jr("a", "y");
      return (e.lastIndex = 2, null != e.exec("abcd"));
    }),
    BROKEN_CARET: a(function () {
      var e = Jr("^r", "gy");
      return (e.lastIndex = 2, null != e.exec("str"));
    })
  }, ta = RegExp.prototype.exec, na = String.prototype.replace, ia = ta, ra = (Qr = /a/, Zr = /b*/g, ta.call(Qr, "a"), ta.call(Zr, "a"), 0 !== Qr.lastIndex || 0 !== Zr.lastIndex), aa = ea.UNSUPPORTED_Y || ea.BROKEN_CARET, oa = void 0 !== (/()??/).exec("")[1];
  (ra || oa || aa) && (ia = function (e) {
    var t, n, i, r, a = this, o = aa && a.sticky, s = Gr.call(a), l = a.source, u = 0, c = e;
    return (o && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), c = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (l = "(?: " + l + ")", c = " " + c, u++), n = new RegExp("^(?:" + l + ")", s)), oa && (n = new RegExp("^" + l + "$(?!\\s)", s)), ra && (t = a.lastIndex), i = ta.call(o ? n : a, c), o ? i ? (i.input = i.input.slice(u), i[0] = i[0].slice(u), i.index = a.lastIndex, a.lastIndex += i[0].length) : a.lastIndex = 0 : ra && i && (a.lastIndex = a.global ? i.index + i[0].length : t), oa && i && i.length > 1 && na.call(i[0], n, function () {
      for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0);
    }), i);
  });
  var sa = ia;
  Oe({
    target: "RegExp",
    proto: !0,
    forced: (/./).exec !== sa
  }, {
    exec: sa
  });
  var la, ua, ca, da = function (e) {
    return function (t, n) {
      var i, r, a = String(g(t)), o = ue(n), s = a.length;
      return o < 0 || o >= s ? e ? "" : void 0 : (i = a.charCodeAt(o)) < 55296 || i > 56319 || o + 1 === s || (r = a.charCodeAt(o + 1)) < 56320 || r > 57343 ? e ? a.charAt(o) : i : e ? a.slice(o, o + 2) : r - 56320 + (i - 55296 << 10) + 65536;
    };
  }, ha = {
    codeAt: da(!1),
    charAt: da(!0)
  }, fa = !a(function () {
    function e() {}
    return (e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype);
  }), va = K("IE_PROTO"), ga = Object.prototype, pa = fa ? Object.getPrototypeOf : function (e) {
    return (e = De(e), w(e, va) ? e[va] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ga : null);
  }, ma = qe("iterator"), ya = !1;
  ([].keys && (("next" in (ca = [].keys())) ? (ua = pa(pa(ca))) !== Object.prototype && (la = ua) : ya = !0), null == la && (la = {}), w(la, ma) || N(la, ma, function () {
    return this;
  }));
  var ba = {
    IteratorPrototype: la,
    BUGGY_SAFARI_ITERATORS: ya
  }, wa = ba.IteratorPrototype, Sa = function () {
    return this;
  }, Ea = ba.IteratorPrototype, ka = ba.BUGGY_SAFARI_ITERATORS, Aa = qe("iterator"), Ra = "keys", xa = "values", La = "entries", Ca = function () {
    return this;
  }, Pa = ha.charAt, Na = "String Iterator", Ma = ne.set, Ia = ne.getterFor(Na);
  !(function (e, t, n, i, r, a, o) {
    !(function (e, t, n) {
      var i = t + " Iterator";
      (e.prototype = It(wa, {
        next: c(1, n)
      }), Bt(e, i, !1), Cn[i] = Sa);
    })(n, t, i);
    var s, l, u, d = function (e) {
      if (e === r && p) return p;
      if (!ka && (e in v)) return v[e];
      switch (e) {
        case Ra:
        case xa:
        case La:
          return function () {
            return new n(this, e);
          };
      }
      return function () {
        return new n(this);
      };
    }, h = t + " Iterator", f = !1, v = e.prototype, g = v[Aa] || v["@@iterator"] || r && v[r], p = !ka && g || d(r), m = "Array" == t && v.entries || g;
    if ((m && (s = pa(m.call(new e())), Ea !== Object.prototype && s.next && (pa(s) !== Ea && (si ? si(s, Ea) : "function" != typeof s[Aa] && N(s, Aa, Ca)), Bt(s, h, !0))), r == xa && g && g.name !== xa && (f = !0, p = function () {
      return g.call(this);
    }), v[Aa] !== p && N(v, Aa, p), Cn[t] = p, r)) if ((l = {
      values: d(xa),
      keys: a ? p : d(Ra),
      entries: d(La)
    }, o)) for (u in l) (ka || f || !((u in v))) && ie(v, u, l[u]); else Oe({
      target: t,
      proto: !0,
      forced: ka || f
    }, l);
  })(String, "String", function (e) {
    Ma(this, {
      type: Na,
      string: String(e),
      index: 0
    });
  }, function () {
    var e, t = Ia(this), n = t.string, i = t.index;
    return i >= n.length ? {
      value: void 0,
      done: !0
    } : (e = Pa(n, i), t.index += e.length, {
      value: e,
      done: !1
    });
  });
  var Oa = qe("species"), Ta = !a(function () {
    var e = /./;
    return (e.exec = function () {
      var e = [];
      return (e.groups = {
        a: "7"
      }, e);
    }, "7" !== ("").replace(e, "$<a>"));
  }), Da = "$0" === ("a").replace(/./, "$0"), ja = qe("replace"), za = !!(/./)[ja] && "" === (/./)[ja]("a", "$0"), Ha = !a(function () {
    var e = /(?:)/, t = e.exec;
    e.exec = function () {
      return t.apply(this, arguments);
    };
    var n = ("ab").split(e);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  }), Fa = function (e, t, n, i) {
    var r = qe(e), o = !a(function () {
      var t = {};
      return (t[r] = function () {
        return 7;
      }, 7 != ("")[e](t));
    }), s = o && !a(function () {
      var t = !1, n = /a/;
      return ("split" === e && ((n = {}).constructor = {}, n.constructor[Oa] = function () {
        return n;
      }, n.flags = "", n[r] = (/./)[r]), n.exec = function () {
        return (t = !0, null);
      }, n[r](""), !t);
    });
    if (!o || !s || "replace" === e && (!Ta || !Da || za) || "split" === e && !Ha) {
      var l = (/./)[r], u = n(r, ("")[e], function (e, t, n, i, r) {
        return t.exec === sa ? o && !r ? {
          done: !0,
          value: l.call(t, n, i)
        } : {
          done: !0,
          value: e.call(n, t, i)
        } : {
          done: !1
        };
      }, {
        REPLACE_KEEPS_$0: Da,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: za
      }), c = u[0], d = u[1];
      (ie(String.prototype, e, c), ie(RegExp.prototype, r, 2 == t ? function (e, t) {
        return d.call(e, this, t);
      } : function (e) {
        return d.call(e, this);
      }));
    }
    i && N(RegExp.prototype[r], "sham", !0);
  }, Ua = ha.charAt, Ba = function (e, t, n) {
    return t + (n ? Ua(e, t).length : 1);
  }, qa = function (e, t) {
    var n = e.exec;
    if ("function" == typeof n) {
      var i = n.call(e, t);
      if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
      return i;
    }
    if ("RegExp" !== h(e)) throw TypeError("RegExp#exec called on incompatible receiver");
    return sa.call(e, t);
  };
  Fa("match", 1, function (e, t, n) {
    return [function (t) {
      var n = g(this), i = null == t ? void 0 : t[e];
      return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
    }, function (e) {
      var i = n(t, e, this);
      if (i.done) return i.value;
      var r = L(e), a = String(this);
      if (!r.global) return qa(r, a);
      var o = r.unicode;
      r.lastIndex = 0;
      for (var s, l = [], u = 0; null !== (s = qa(r, a)); ) {
        var c = String(s[0]);
        (l[u] = c, "" === c && (r.lastIndex = Ba(a, de(r.lastIndex), o)), u++);
      }
      return 0 === u ? null : l;
    }];
  });
  var Wa = qe("match"), _a = [].push, Va = Math.min, Ka = 4294967295, $a = !a(function () {
    return !RegExp(Ka, "y");
  });
  Fa("split", 2, function (e, t, n) {
    var i;
    return (i = "c" == ("abbc").split(/(b)*/)[1] || 4 != ("test").split(/(?:)/, -1).length || 2 != ("ab").split(/(?:ab)*/).length || 4 != (".").split(/(.?)(.?)/).length || (".").split(/()()/).length > 1 || ("").split(/.?/).length ? function (e, n) {
      var i, r, a = String(g(this)), o = void 0 === n ? Ka : n >>> 0;
      if (0 === o) return [];
      if (void 0 === e) return [a];
      if (!m(i = e) || !(void 0 !== (r = i[Wa]) ? r : "RegExp" == h(i))) return t.call(a, e, o);
      for (var s, l, u, c = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, v = new RegExp(e.source, d + "g"); (s = sa.call(v, a)) && !((l = v.lastIndex) > f && (c.push(a.slice(f, s.index)), s.length > 1 && s.index < a.length && _a.apply(c, s.slice(1)), u = s[0].length, f = l, c.length >= o)); ) v.lastIndex === s.index && v.lastIndex++;
      return (f === a.length ? !u && v.test("") || c.push("") : c.push(a.slice(f)), c.length > o ? c.slice(0, o) : c);
    } : ("0").split(void 0, 0).length ? function (e, n) {
      return void 0 === e && 0 === n ? [] : t.call(this, e, n);
    } : t, [function (t, n) {
      var r = g(this), a = null == t ? void 0 : t[e];
      return void 0 !== a ? a.call(t, r, n) : i.call(String(r), t, n);
    }, function (e, r) {
      var a = n(i, e, this, r, i !== t);
      if (a.done) return a.value;
      var o = L(e), s = String(this), l = ji(o, RegExp), u = o.unicode, c = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + ($a ? "y" : "g"), d = new l($a ? o : "^(?:" + o.source + ")", c), h = void 0 === r ? Ka : r >>> 0;
      if (0 === h) return [];
      if (0 === s.length) return null === qa(d, s) ? [s] : [];
      for (var f = 0, v = 0, g = []; v < s.length; ) {
        d.lastIndex = $a ? v : 0;
        var p, m = qa(d, $a ? s : s.slice(v));
        if (null === m || (p = Va(de(d.lastIndex + ($a ? 0 : v)), s.length)) === f) v = Ba(s, v, u); else {
          if ((g.push(s.slice(f, v)), g.length === h)) return g;
          for (var y = 1; y <= m.length - 1; y++) if ((g.push(m[y]), g.length === h)) return g;
          v = f = p;
        }
      }
      return (g.push(s.slice(f)), g);
    }]);
  }, !$a);
  var Xa, Ya = vi.trim;
  Oe({
    target: "String",
    proto: !0,
    forced: (Xa = "trim", a(function () {
      return !!ui[Xa]() || "​᠎" != ("​᠎")[Xa]() || ui[Xa].name !== Xa;
    }))
  }, {
    trim: function () {
      return Ya(this);
    }
  });
  for (var Ga in {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }) {
    var Ja = r[Ga], Qa = Ja && Ja.prototype;
    if (Qa && Qa.forEach !== mt) try {
      N(Qa, "forEach", mt);
    } catch (e) {
      Qa.forEach = mt;
    }
  }
  function Za(e) {
    return (Za = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }
  function eo(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function to(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1, i.configurable = !0, ("value" in i) && (i.writable = !0), Object.defineProperty(e, i.key, i));
    }
  }
  function no(e, t, n) {
    return (t && to(e.prototype, t), n && to(e, n), e);
  }
  function io(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function ro(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      (t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i));
    }
    return n;
  }
  function ao(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ro(Object(n), !0).forEach(function (t) {
        io(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ro(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function oo(e) {
    return (function (e) {
      if (Array.isArray(e)) return so(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return so(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return so(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function so(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  var lo = ".slides section", uo = ".slides>section", co = ".slides>section.present>section", ho = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/, fo = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/, vo = Math.max, go = Math.min, po = Math.floor, mo = /\$([$&'`]|\d\d?|<[^>]*>)/g, yo = /\$([$&'`]|\d\d?)/g;
  Fa("replace", 2, function (e, t, n, i) {
    var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, a = i.REPLACE_KEEPS_$0, o = r ? "$" : "$0";
    return [function (n, i) {
      var r = g(this), a = null == n ? void 0 : n[e];
      return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i);
    }, function (e, i) {
      if (!r && a || "string" == typeof i && -1 === i.indexOf(o)) {
        var l = n(t, e, this, i);
        if (l.done) return l.value;
      }
      var u = L(e), c = String(this), d = "function" == typeof i;
      d || (i = String(i));
      var h = u.global;
      if (h) {
        var f = u.unicode;
        u.lastIndex = 0;
      }
      for (var v = []; ; ) {
        var g = qa(u, c);
        if (null === g) break;
        if ((v.push(g), !h)) break;
        "" === String(g[0]) && (u.lastIndex = Ba(c, de(u.lastIndex), f));
      }
      for (var p, m = "", y = 0, b = 0; b < v.length; b++) {
        g = v[b];
        for (var w = String(g[0]), S = vo(go(ue(g.index), c.length), 0), E = [], k = 1; k < g.length; k++) E.push(void 0 === (p = g[k]) ? p : String(p));
        var A = g.groups;
        if (d) {
          var R = [w].concat(E, S, c);
          void 0 !== A && R.push(A);
          var x = String(i.apply(void 0, R));
        } else x = s(w, c, S, E, A, i);
        S >= y && (m += c.slice(y, S) + x, y = S + w.length);
      }
      return m + c.slice(y);
    }];
    function s(e, n, i, r, a, o) {
      var s = i + e.length, l = r.length, u = yo;
      return (void 0 !== a && (a = De(a), u = mo), t.call(o, u, function (t, o) {
        var u;
        switch (o.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return n.slice(0, i);
          case "'":
            return n.slice(s);
          case "<":
            u = a[o.slice(1, -1)];
            break;
          default:
            var c = +o;
            if (0 === c) return t;
            if (c > l) {
              var d = po(c / 10);
              return 0 === d ? t : d <= l ? void 0 === r[d - 1] ? o.charAt(1) : r[d - 1] + o.charAt(1) : t;
            }
            u = r[c - 1];
        }
        return void 0 === u ? "" : u;
      }));
    }
  });
  var bo = Object.is || (function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  });
  Fa("search", 1, function (e, t, n) {
    return [function (t) {
      var n = g(this), i = null == t ? void 0 : t[e];
      return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
    }, function (e) {
      var i = n(t, e, this);
      if (i.done) return i.value;
      var r = L(e), a = String(this), o = r.lastIndex;
      bo(o, 0) || (r.lastIndex = 0);
      var s = qa(r, a);
      return (bo(r.lastIndex, o) || (r.lastIndex = o), null === s ? -1 : s.index);
    }];
  });
  var wo = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }, So = function (e, t) {
    return Array.from(e.querySelectorAll(t));
  }, Eo = function (e, t, n) {
    n ? e.classList.add(t) : e.classList.remove(t);
  }, ko = function (e) {
    if ("string" == typeof e) {
      if ("null" === e) return null;
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
  }, Ao = function (e, t) {
    e.style.transform = t;
  }, Ro = function (e, t) {
    var n = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!n || !n.call(e, t));
  }, xo = function (e, t) {
    if ("function" == typeof e.closest) return e.closest(t);
    for (; e; ) {
      if (Ro(e, t)) return e;
      e = e.parentNode;
    }
    return null;
  }, Lo = function (e, t, n) {
    for (var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = e.querySelectorAll("." + n), a = 0; a < r.length; a++) {
      var o = r[a];
      if (o.parentNode === e) return o;
    }
    var s = document.createElement(t);
    return (s.className = n, s.innerHTML = i, e.appendChild(s), s);
  }, Co = function (e) {
    var t = document.createElement("style");
    return (t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t);
  }, Po = function () {
    var e = {};
    for (var t in (location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function (t) {
      e[t.split("=").shift()] = t.split("=").pop();
    }), e)) {
      var n = e[t];
      e[t] = ko(unescape(n));
    }
    return (void 0 !== e.dependencies && delete e.dependencies, e);
  }, No = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (e) {
      var n, i = e.style.height;
      return (e.style.height = "0px", e.parentNode.style.height = "auto", n = t - e.parentNode.offsetHeight, e.style.height = i + "px", e.parentNode.style.removeProperty("height"), n);
    }
    return t;
  }, Mo = navigator.userAgent, Io = document.createElement("div"), Oo = (/(iphone|ipod|ipad|android)/gi).test(Mo) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, To = (/chrome/i).test(Mo) && !(/edge/i).test(Mo), Do = (/android/gi).test(Mo), jo = ("zoom" in Io.style) && !Oo && (To || (/Version\/[\d\.]+.*Safari/).test(Mo)), zo = t(n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    });
    t.default = (function (e) {
      if (e) {
        var t = function (e) {
          return [].slice.call(e);
        }, i = 0, r = 1, a = 2, o = 3, s = [], l = null, u = ("requestAnimationFrame" in e) ? function () {
          (e.cancelAnimationFrame(l), l = e.requestAnimationFrame(function () {
            return d(s.filter(function (e) {
              return e.dirty && e.active;
            }));
          }));
        } : function () {}, c = function (e) {
          return function () {
            (s.forEach(function (t) {
              return t.dirty = e;
            }), u());
          };
        }, d = function (e) {
          (e.filter(function (e) {
            return !e.styleComputed;
          }).forEach(function (e) {
            e.styleComputed = g(e);
          }), e.filter(p).forEach(m));
          var t = e.filter(v);
          (t.forEach(f), t.forEach(function (e) {
            (m(e), h(e));
          }), t.forEach(y));
        }, h = function (e) {
          return e.dirty = i;
        }, f = function (e) {
          (e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap");
        }, v = function (e) {
          return e.dirty !== a || e.dirty === a && e.element.parentNode.clientWidth !== e.availableWidth;
        }, g = function (t) {
          var n = e.getComputedStyle(t.element, null);
          (t.currentFontSize = parseInt(n.getPropertyValue("font-size"), 10), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space"));
        }, p = function (e) {
          var t = !1;
          return !e.preStyleTestCompleted && ((/inline-/).test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
        }, m = function (e) {
          (e.originalStyle || (e.originalStyle = e.element.getAttribute("style") || ""), e.element.style.cssText = e.originalStyle + ";white-space:" + e.whiteSpace + ";display:" + e.display + ";font-size:" + e.currentFontSize + "px");
        }, y = function (e) {
          e.element.dispatchEvent(new CustomEvent("fit", {
            detail: {
              oldValue: e.previousFontSize,
              newValue: e.currentFontSize,
              scaleFactor: e.currentFontSize / e.previousFontSize
            }
          }));
        }, b = function (e, t) {
          return function () {
            (e.dirty = t, e.active && u());
          };
        }, w = function (e) {
          return function () {
            (s = s.filter(function (t) {
              return t.element !== e.element;
            }), e.observeMutations && e.observer.disconnect(), e.element.style.cssText = e.originalStyle);
          };
        }, S = function (e) {
          return function () {
            e.active || (e.active = !0, u());
          };
        }, E = function (e) {
          return function () {
            return e.active = !1;
          };
        }, k = function (e) {
          e.observeMutations && (e.observer = new MutationObserver(b(e, r)), e.observer.observe(e.element, e.observeMutations));
        }, A = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: ("MutationObserver" in e) && ({
            subtree: !0,
            childList: !0,
            characterData: !0
          })
        }, R = null, x = function () {
          (e.clearTimeout(R), R = e.setTimeout(c(a), P.observeWindowDelay));
        }, L = ["resize", "orientationchange"];
        return (Object.defineProperty(P, "observeWindow", {
          set: function (t) {
            var n = (t ? "add" : "remove") + "EventListener";
            L.forEach(function (t) {
              e[n](t, x);
            });
          }
        }), P.observeWindow = !0, P.observeWindowDelay = 100, P.fitAll = c(o), P);
      }
      function C(e, t) {
        var i = n({}, A, t), r = e.map(function (e) {
          var t = n({}, i, {
            element: e,
            active: !0
          });
          return ((function (e) {
            (k(e), e.newbie = !0, e.dirty = !0, s.push(e));
          })(t), {
            element: e,
            fit: b(t, o),
            unfreeze: S(t),
            freeze: E(t),
            unsubscribe: w(t)
          });
        });
        return (u(), r);
      }
      function P(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" == typeof e ? C(t(document.querySelectorAll(e)), n) : C([e], n)[0];
      }
    })("undefined" == typeof window ? null : window);
  })), Ho = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this));
    }
    return (no(e, [{
      key: "shouldPreload",
      value: function (e) {
        var t = this.Reveal.getConfig().preloadIframes;
        return ("boolean" != typeof t && (t = e.hasAttribute("data-preload")), t);
      }
    }, {
      key: "load",
      value: function (e) {
        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (e.style.display = this.Reveal.getConfig().display, So(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(function (e) {
          ("IFRAME" !== e.tagName || t.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"));
        }), So(e, "video, audio").forEach(function (e) {
          var t = 0;
          (So(e, "source[data-src]").forEach(function (e) {
            (e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1);
          }), Oo && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), t > 0 && e.load());
        }));
        var i = e.slideBackgroundElement;
        if (i) {
          i.style.display = "block";
          var r = e.slideBackgroundContentElement, a = e.getAttribute("data-background-iframe");
          if (!1 === i.hasAttribute("data-loaded")) {
            i.setAttribute("data-loaded", "true");
            var o = e.getAttribute("data-background-image"), s = e.getAttribute("data-background-video"), l = e.hasAttribute("data-background-video-loop"), u = e.hasAttribute("data-background-video-muted");
            if (o) r.style.backgroundImage = "url(" + encodeURI(o) + ")"; else if (s && !this.Reveal.isSpeakerNotes()) {
              var c = document.createElement("video");
              (l && c.setAttribute("loop", ""), u && (c.muted = !0), Oo && (c.muted = !0, c.setAttribute("playsinline", "")), s.split(",").forEach(function (e) {
                c.innerHTML += '<source src="' + e + '">';
              }), r.appendChild(c));
            } else if (a && !0 !== n.excludeIframes) {
              var d = document.createElement("iframe");
              (d.setAttribute("allowfullscreen", ""), d.setAttribute("mozallowfullscreen", ""), d.setAttribute("webkitallowfullscreen", ""), d.setAttribute("allow", "autoplay"), d.setAttribute("data-src", a), d.style.width = "100%", d.style.height = "100%", d.style.maxHeight = "100%", d.style.maxWidth = "100%", r.appendChild(d));
            }
          }
          var h = r.querySelector("iframe[data-src]");
          h && this.shouldPreload(i) && !(/autoplay=(1|true|yes)/gi).test(a) && h.getAttribute("src") !== a && h.setAttribute("src", a);
        }
        Array.from(e.querySelectorAll(".r-fit-text:not([data-fitted])")).forEach(function (e) {
          (e.dataset.fitted = "", zo(e, {
            minSize: 24,
            maxSize: .8 * t.Reveal.getConfig().height,
            observeMutations: !1,
            observeWindow: !1
          }));
        });
      }
    }, {
      key: "unload",
      value: function (e) {
        e.style.display = "none";
        var t = this.Reveal.getSlideBackground(e);
        (t && (t.style.display = "none", So(t, "iframe[src]").forEach(function (e) {
          e.removeAttribute("src");
        })), So(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(function (e) {
          (e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src"));
        }), So(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(function (e) {
          (e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src"));
        }));
      }
    }, {
      key: "formatEmbeddedContent",
      value: function () {
        var e = this, t = function (t, n, i) {
          So(e.Reveal.getSlidesElement(), "iframe[" + t + '*="' + n + '"]').forEach(function (e) {
            var n = e.getAttribute(t);
            n && -1 === n.indexOf(i) && e.setAttribute(t, n + ((/\?/).test(n) ? "&" : "?") + i);
          });
        };
        (t("src", "youtube.com/embed/", "enablejsapi=1"), t("data-src", "youtube.com/embed/", "enablejsapi=1"), t("src", "player.vimeo.com/", "api=1"), t("data-src", "player.vimeo.com/", "api=1"));
      }
    }, {
      key: "startEmbeddedContent",
      value: function (e) {
        var t = this;
        e && !this.Reveal.isSpeakerNotes() && (So(e, 'img[src$=".gif"]').forEach(function (e) {
          e.setAttribute("src", e.getAttribute("src"));
        }), So(e, "video, audio").forEach(function (e) {
          if (!xo(e, ".fragment") || xo(e, ".fragment.visible")) {
            var n = t.Reveal.getConfig().autoPlayMedia;
            if (("boolean" != typeof n && (n = e.hasAttribute("data-autoplay") || !!xo(e, ".slide-background")), n && "function" == typeof e.play)) if (e.readyState > 1) t.startEmbeddedMedia({
              target: e
            }); else if (Oo) {
              var i = e.play();
              i && "function" == typeof i.catch && !1 === e.controls && i.catch(function () {
                (e.controls = !0, e.addEventListener("play", function () {
                  e.controls = !1;
                }));
              });
            } else (e.removeEventListener("loadeddata", t.startEmbeddedMedia), e.addEventListener("loadeddata", t.startEmbeddedMedia));
          }
        }), So(e, "iframe[src]").forEach(function (e) {
          xo(e, ".fragment") && !xo(e, ".fragment.visible") || t.startEmbeddedIframe({
            target: e
          });
        }), So(e, "iframe[data-src]").forEach(function (e) {
          xo(e, ".fragment") && !xo(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", t.startEmbeddedIframe), e.addEventListener("load", t.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
        }));
      }
    }, {
      key: "startEmbeddedMedia",
      value: function (e) {
        var t = !!xo(e.target, "html"), n = !!xo(e.target, ".present");
        (t && n && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia));
      }
    }, {
      key: "startEmbeddedIframe",
      value: function (e) {
        var t = e.target;
        if (t && t.contentWindow) {
          var n = !!xo(e.target, "html"), i = !!xo(e.target, ".present");
          if (n && i) {
            var r = this.Reveal.getConfig().autoPlayMedia;
            ("boolean" != typeof r && (r = t.hasAttribute("data-autoplay") || !!xo(t, ".slide-background")), (/youtube\.com\/embed\//).test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : (/player\.vimeo\.com\//).test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*"));
          }
        }
      }
    }, {
      key: "stopEmbeddedContent",
      value: function (e) {
        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (n = wo({
          unloadIframes: !0
        }, n), e && e.parentNode && (So(e, "video, audio").forEach(function (e) {
          e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause());
        }), So(e, "iframe").forEach(function (e) {
          (e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", t.startEmbeddedIframe));
        }), So(e, 'iframe[src*="youtube.com/embed/"]').forEach(function (e) {
          !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        }), So(e, 'iframe[src*="player.vimeo.com/"]').forEach(function (e) {
          !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*");
        }), !0 === n.unloadIframes && So(e, "iframe[data-src]").forEach(function (e) {
          (e.setAttribute("src", "about:blank"), e.removeAttribute("src"));
        })));
      }
    }]), e);
  })(), Fo = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t);
    }
    return (no(e, [{
      key: "render",
      value: function () {
        (this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element));
      }
    }, {
      key: "configure",
      value: function (e, t) {
        var n = "none";
        (e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (n = "block"), this.element.style.display = n);
      }
    }, {
      key: "update",
      value: function () {
        this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
      }
    }, {
      key: "getSlideNumber",
      value: function () {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide(), n = this.Reveal.getConfig(), i = "h.v";
        if ("function" == typeof n.slideNumber) e = n.slideNumber(t); else {
          ("string" == typeof n.slideNumber && (i = n.slideNumber), (/c/).test(i) || 1 !== this.Reveal.getHorizontalSlides().length || (i = "c"));
          var r = t && "uncounted" === t.dataset.visibility ? 0 : 1;
          switch ((e = [], i)) {
            case "c":
              e.push(this.Reveal.getSlidePastCount(t) + r);
              break;
            case "c/t":
              e.push(this.Reveal.getSlidePastCount(t) + r, "/", this.Reveal.getTotalSlides());
              break;
            default:
              var a = this.Reveal.getIndices(t);
              e.push(a.h + r);
              var o = "h/v" === i ? "/" : ".";
              this.Reveal.isVerticalSlide(t) && e.push(o, a.v + 1);
          }
        }
        var s = "#" + this.Reveal.location.getHash(t);
        return this.formatNumber(e[0], e[1], e[2], s);
      }
    }, {
      key: "formatNumber",
      value: function (e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#" + this.Reveal.location.getHash();
        return "number" != typeof n || isNaN(n) ? ('<a href="').concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, "</span>\n\t\t\t\t\t</a>") : ('<a href="').concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">').concat(t, '</span>\n\t\t\t\t\t<span class="slide-number-b">').concat(n, "</span>\n\t\t\t\t\t</a>");
      }
    }]), e);
  })(), Uo = function (e) {
    var t = e.match(/^#([0-9a-f]{3})$/i);
    if (t && t[1]) return (t = t[1], {
      r: 17 * parseInt(t.charAt(0), 16),
      g: 17 * parseInt(t.charAt(1), 16),
      b: 17 * parseInt(t.charAt(2), 16)
    });
    var n = e.match(/^#([0-9a-f]{6})$/i);
    if (n && n[1]) return (n = n[1], {
      r: parseInt(n.substr(0, 2), 16),
      g: parseInt(n.substr(2, 2), 16),
      b: parseInt(n.substr(4, 2), 16)
    });
    var i = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (i) return {
      r: parseInt(i[1], 10),
      g: parseInt(i[2], 10),
      b: parseInt(i[3], 10)
    };
    var r = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
    return r ? {
      r: parseInt(r[1], 10),
      g: parseInt(r[2], 10),
      b: parseInt(r[3], 10),
      a: parseFloat(r[4])
    } : null;
  }, Bo = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t);
    }
    return (no(e, [{
      key: "render",
      value: function () {
        (this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element));
      }
    }, {
      key: "create",
      value: function () {
        var e = this;
        this.Reveal.isPrintingPDF();
        (this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(function (t) {
          var n = e.createBackground(t, e.element);
          So(t, "section").forEach(function (t) {
            (e.createBackground(t, n), n.classList.add("stack"));
          });
        }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(function () {
          e.Reveal.getRevealElement().classList.add("has-parallax-background");
        }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background")));
      }
    }, {
      key: "createBackground",
      value: function (e, t) {
        var n = document.createElement("div");
        n.className = "slide-background " + e.className.replace(/present|past|future/, "");
        var i = document.createElement("div");
        return (i.className = "slide-background-content", n.appendChild(i), t.appendChild(n), e.slideBackgroundElement = n, e.slideBackgroundContentElement = i, this.sync(e), n);
      }
    }, {
      key: "sync",
      value: function (e) {
        var t = e.slideBackgroundElement, n = e.slideBackgroundContentElement;
        (e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", n.style.backgroundSize = "", n.style.backgroundRepeat = "", n.style.backgroundPosition = "", n.style.backgroundImage = "", n.style.opacity = "", n.innerHTML = "");
        var i = {
          background: e.getAttribute("data-background"),
          backgroundSize: e.getAttribute("data-background-size"),
          backgroundImage: e.getAttribute("data-background-image"),
          backgroundVideo: e.getAttribute("data-background-video"),
          backgroundIframe: e.getAttribute("data-background-iframe"),
          backgroundColor: e.getAttribute("data-background-color"),
          backgroundRepeat: e.getAttribute("data-background-repeat"),
          backgroundPosition: e.getAttribute("data-background-position"),
          backgroundTransition: e.getAttribute("data-background-transition"),
          backgroundOpacity: e.getAttribute("data-background-opacity")
        };
        (i.background && ((/^(http|file|\/\/)/gi).test(i.background) || (/\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi).test(i.background) ? e.setAttribute("data-background-image", i.background) : t.style.background = i.background), (i.background || i.backgroundColor || i.backgroundImage || i.backgroundVideo || i.backgroundIframe) && t.setAttribute("data-background-hash", i.background + i.backgroundSize + i.backgroundImage + i.backgroundVideo + i.backgroundIframe + i.backgroundColor + i.backgroundRepeat + i.backgroundPosition + i.backgroundTransition + i.backgroundOpacity), i.backgroundSize && t.setAttribute("data-background-size", i.backgroundSize), i.backgroundColor && (t.style.backgroundColor = i.backgroundColor), i.backgroundTransition && t.setAttribute("data-background-transition", i.backgroundTransition), e.hasAttribute("data-preload") && t.setAttribute("data-preload", ""), i.backgroundSize && (n.style.backgroundSize = i.backgroundSize), i.backgroundRepeat && (n.style.backgroundRepeat = i.backgroundRepeat), i.backgroundPosition && (n.style.backgroundPosition = i.backgroundPosition), i.backgroundOpacity && (n.style.opacity = i.backgroundOpacity));
        var r, a = i.backgroundColor;
        if (!a) {
          var o = window.getComputedStyle(t);
          o && o.backgroundColor && (a = o.backgroundColor);
        }
        if (a) {
          var s = Uo(a);
          s && 0 !== s.a && ("string" == typeof (r = a) && (r = Uo(r)), (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"));
        }
      }
    }, {
      key: "update",
      value: function () {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this.Reveal.getCurrentSlide(), i = this.Reveal.getIndices(), r = null, a = this.Reveal.getConfig().rtl ? "future" : "past", o = this.Reveal.getConfig().rtl ? "past" : "future";
        if ((Array.from(this.element.childNodes).forEach(function (e, n) {
          (e.classList.remove("past", "present", "future"), n < i.h ? e.classList.add(a) : n > i.h ? e.classList.add(o) : (e.classList.add("present"), r = e), (t || n === i.h) && So(e, ".slide-background").forEach(function (e, t) {
            (e.classList.remove("past", "present", "future"), t < i.v ? e.classList.add("past") : t > i.v ? e.classList.add("future") : (e.classList.add("present"), n === i.h && (r = e)));
          }));
        }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
          unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
        }), r)) {
          this.Reveal.slideContent.startEmbeddedContent(r);
          var s = r.querySelector(".slide-background-content");
          if (s) {
            var l = s.style.backgroundImage || "";
            (/\.gif/i).test(l) && (s.style.backgroundImage = "", window.getComputedStyle(s).opacity, s.style.backgroundImage = l);
          }
          var u = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, c = r.getAttribute("data-background-hash");
          (c && c === u && r !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = r);
        }
        (n && ["has-light-background", "has-dark-background"].forEach(function (t) {
          n.classList.contains(t) ? e.Reveal.getRevealElement().classList.add(t) : e.Reveal.getRevealElement().classList.remove(t);
        }, this), setTimeout(function () {
          e.element.classList.remove("no-transition");
        }, 1));
      }
    }, {
      key: "updateParallax",
      value: function () {
        var e = this.Reveal.getIndices();
        if (this.Reveal.getConfig().parallaxBackgroundImage) {
          var t, n, i = this.Reveal.getHorizontalSlides(), r = this.Reveal.getVerticalSlides(), a = this.element.style.backgroundSize.split(" ");
          1 === a.length ? t = n = parseInt(a[0], 10) : (t = parseInt(a[0], 10), n = parseInt(a[1], 10));
          var o, s = this.element.offsetWidth, l = i.length;
          o = ("number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : l > 1 ? (t - s) / (l - 1) : 0) * e.h * -1;
          var u, c, d = this.element.offsetHeight, h = r.length;
          (u = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (n - d) / (h - 1), c = h > 0 ? u * e.v : 0, this.element.style.backgroundPosition = o + "px " + -c + "px");
        }
      }
    }]), e);
  })(), qo = lt.filter, Wo = Je("filter"), _o = ft("filter");
  Oe({
    target: "Array",
    proto: !0,
    forced: !Wo || !_o
  }, {
    filter: function (e) {
      return qo(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Vo = [].join, Ko = v != Object, $o = ut("join", ",");
  Oe({
    target: "Array",
    proto: !0,
    forced: Ko || !$o
  }, {
    join: function (e) {
      return Vo.call(p(this), void 0 === e ? "," : e);
    }
  });
  var Xo = function (e) {
    return function (t, n, i, r) {
      rt(n);
      var a = De(t), o = v(a), s = de(a.length), l = e ? s - 1 : 0, u = e ? -1 : 1;
      if (i < 2) for (; ; ) {
        if ((l in o)) {
          (r = o[l], l += u);
          break;
        }
        if ((l += u, e ? l < 0 : s <= l)) throw TypeError("Reduce of empty array with no initial value");
      }
      for (; e ? l >= 0 : s > l; l += u) (l in o) && (r = n(r, o[l], l, a));
      return r;
    };
  }, Yo = ({
    left: Xo(!1),
    right: Xo(!0)
  }).left, Go = ut("reduce"), Jo = ft("reduce", {
    1: 0
  });
  Oe({
    target: "Array",
    proto: !0,
    forced: !Go || !Jo
  }, {
    reduce: function (e) {
      return Yo(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Qo = Je("slice"), Zo = ft("slice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }), es = qe("species"), ts = [].slice, ns = Math.max;
  Oe({
    target: "Array",
    proto: !0,
    forced: !Qo || !Zo
  }, {
    slice: function (e, t) {
      var n, i, r, a = p(this), o = de(a.length), s = ve(e, o), l = ve(void 0 === t ? o : t, o);
      if (Te(a) && ("function" != typeof (n = a.constructor) || n !== Array && !Te(n.prototype) ? m(n) && null === (n = n[es]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return ts.call(a, s, l);
      for ((i = new (void 0 === n ? Array : n)(ns(l - s, 0)), r = 0); s < l; (s++, r++)) (s in a) && je(i, r, a[s]);
      return (i.length = r, i);
    }
  });
  var is = a(function () {
    St(1);
  });
  Oe({
    target: "Object",
    stat: !0,
    forced: is
  }, {
    keys: function (e) {
      return St(De(e));
    }
  });
  var rs = 0, as = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t);
    }
    return (no(e, [{
      key: "run",
      value: function (e, t) {
        var n = this;
        if ((this.reset(), e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate"))) {
          this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || Co();
          var i = this.getAutoAnimateOptions(t);
          (e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending");
          var r = this.Reveal.getSlides();
          i.slideDirection = r.indexOf(t) > r.indexOf(e) ? "forward" : "backward";
          var a = this.getAutoAnimatableElements(e, t).map(function (e) {
            return n.autoAnimateElements(e.from, e.to, e.options || ({}), i, rs++);
          });
          if ("false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
            var o = .8 * i.duration, s = .2 * i.duration;
            (this.getUnmatchedAutoAnimateElements(t).forEach(function (e) {
              var t = n.getAutoAnimateOptions(e, i), r = "unmatched";
              (t.duration === i.duration && t.delay === i.delay || (r = "unmatched-" + rs++, a.push(('[data-auto-animate="running"] [data-auto-animate-target="').concat(r, '"] { transition: opacity ').concat(t.duration, "s ease ").concat(t.delay, "s; }"))), e.dataset.autoAnimateTarget = r);
            }, this), a.push(('[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ').concat(o, "s ease ").concat(s, "s; }")));
          }
          (this.autoAnimateStyleSheet.innerHTML = a.join(""), requestAnimationFrame(function () {
            n.autoAnimateStyleSheet && (getComputedStyle(n.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running");
          }), this.Reveal.dispatchEvent({
            type: "autoanimate",
            data: {
              fromSlide: e,
              toSlide: t,
              sheet: this.autoAnimateStyleSheet
            }
          }));
        }
      }
    }, {
      key: "reset",
      value: function () {
        (So(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(function (e) {
          e.dataset.autoAnimate = "";
        }), So(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(function (e) {
          delete e.dataset.autoAnimateTarget;
        }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null));
      }
    }, {
      key: "autoAnimateElements",
      value: function (e, t, n, i, r) {
        (e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = r);
        var a = this.getAutoAnimateOptions(t, i);
        (void 0 !== n.delay && (a.delay = n.delay), void 0 !== n.duration && (a.duration = n.duration), void 0 !== n.easing && (a.easing = n.easing));
        var o = this.getAutoAnimatableProperties("from", e, n), s = this.getAutoAnimatableProperties("to", t, n);
        t.classList.contains("fragment") && (delete s.styles.opacity, e.classList.contains("fragment") && (e.className.match(fo) || [""])[0] === (t.className.match(fo) || [""])[0] && "forward" === i.slideDirection && t.classList.add("visible", "disabled"));
        if (!1 !== n.translate || !1 !== n.scale) {
          var l = this.Reveal.getScale(), u = {
            x: (o.x - s.x) / l,
            y: (o.y - s.y) / l,
            scaleX: o.width / s.width,
            scaleY: o.height / s.height
          };
          (u.x = Math.round(1e3 * u.x) / 1e3, u.y = Math.round(1e3 * u.y) / 1e3, u.scaleX = Math.round(1e3 * u.scaleX) / 1e3, u.scaleX = Math.round(1e3 * u.scaleX) / 1e3);
          var c = !1 !== n.translate && (0 !== u.x || 0 !== u.y), d = !1 !== n.scale && (0 !== u.scaleX || 0 !== u.scaleY);
          if (c || d) {
            var h = [];
            (c && h.push(("translate(").concat(u.x, "px, ").concat(u.y, "px)")), d && h.push(("scale(").concat(u.scaleX, ", ").concat(u.scaleY, ")")), o.styles.transform = h.join(" "), o.styles["transform-origin"] = "top left", s.styles.transform = "none");
          }
        }
        for (var f in s.styles) {
          var v = s.styles[f], g = o.styles[f];
          v === g ? delete s.styles[f] : (!0 === v.explicitValue && (s.styles[f] = v.value), !0 === g.explicitValue && (o.styles[f] = g.value));
        }
        var p = "", m = Object.keys(s.styles);
        m.length > 0 && (o.styles.transition = "none", s.styles.transition = ("all ").concat(a.duration, "s ").concat(a.easing, " ").concat(a.delay, "s"), s.styles["transition-property"] = m.join(", "), s.styles["will-change"] = m.join(", "), p = '[data-auto-animate-target="' + r + '"] {' + Object.keys(o.styles).map(function (e) {
          return e + ": " + o.styles[e] + " !important;";
        }).join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + r + '"] {' + Object.keys(s.styles).map(function (e) {
          return e + ": " + s.styles[e] + " !important;";
        }).join("") + "}");
        return p;
      }
    }, {
      key: "getAutoAnimateOptions",
      value: function (e, t) {
        var n = {
          easing: this.Reveal.getConfig().autoAnimateEasing,
          duration: this.Reveal.getConfig().autoAnimateDuration,
          delay: 0
        };
        if ((n = wo(n, t), e.parentNode)) {
          var i = xo(e.parentNode, "[data-auto-animate-target]");
          i && (n = this.getAutoAnimateOptions(i, n));
        }
        return (e.dataset.autoAnimateEasing && (n.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (n.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (n.delay = parseFloat(e.dataset.autoAnimateDelay)), n);
      }
    }, {
      key: "getAutoAnimatableProperties",
      value: function (e, t, n) {
        var i = this.Reveal.getConfig(), r = {
          styles: []
        };
        if (!1 !== n.translate || !1 !== n.scale) {
          var a;
          if ("function" == typeof n.measure) a = n.measure(t); else if (i.center) a = t.getBoundingClientRect(); else {
            var o = this.Reveal.getScale();
            a = {
              x: t.offsetLeft * o,
              y: t.offsetTop * o,
              width: t.offsetWidth * o,
              height: t.offsetHeight * o
            };
          }
          (r.x = a.x, r.y = a.y, r.width = a.width, r.height = a.height);
        }
        var s = getComputedStyle(t);
        return ((n.styles || i.autoAnimateStyles).forEach(function (t) {
          var n;
          ("string" == typeof t && (t = {
            property: t
          }), "" !== (n = void 0 !== t.from && "from" === e ? {
            value: t.from,
            explicitValue: !0
          } : void 0 !== t.to && "to" === e ? {
            value: t.to,
            explicitValue: !0
          } : s[t.property]) && (r.styles[t.property] = n));
        }), r);
      }
    }, {
      key: "getAutoAnimatableElements",
      value: function (e, t) {
        var n = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t), i = [];
        return n.filter(function (e, t) {
          if (-1 === i.indexOf(e.to)) return (i.push(e.to), !0);
        });
      }
    }, {
      key: "getAutoAnimatePairs",
      value: function (e, t) {
        var n = this, i = [], r = "h1, h2, h3, h4, h5, h6, p, li";
        return (this.findAutoAnimateMatches(i, e, t, "[data-id]", function (e) {
          return e.nodeName + ":::" + e.getAttribute("data-id");
        }), this.findAutoAnimateMatches(i, e, t, r, function (e) {
          return e.nodeName + ":::" + e.innerText;
        }), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", function (e) {
          return e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"));
        }), this.findAutoAnimateMatches(i, e, t, "pre", function (e) {
          return e.nodeName + ":::" + e.innerText;
        }), i.forEach(function (e) {
          Ro(e.from, r) ? e.options = {
            scale: !1
          } : Ro(e.from, "pre") && (e.options = {
            scale: !1,
            styles: ["width", "height"]
          }, n.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", function (e) {
            return e.textContent;
          }, {
            scale: !1,
            styles: [],
            measure: n.getLocalBoundingBox.bind(n)
          }), n.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", function (e) {
            return e.getAttribute("data-line-number");
          }, {
            scale: !1,
            styles: ["width"],
            measure: n.getLocalBoundingBox.bind(n)
          }));
        }, this), i);
      }
    }, {
      key: "getLocalBoundingBox",
      value: function (e) {
        var t = this.Reveal.getScale();
        return {
          x: Math.round(e.offsetLeft * t * 100) / 100,
          y: Math.round(e.offsetTop * t * 100) / 100,
          width: Math.round(e.offsetWidth * t * 100) / 100,
          height: Math.round(e.offsetHeight * t * 100) / 100
        };
      }
    }, {
      key: "findAutoAnimateMatches",
      value: function (e, t, n, i, r, a) {
        var o = {}, s = {};
        ([].slice.call(t.querySelectorAll(i)).forEach(function (e, t) {
          var n = r(e);
          "string" == typeof n && n.length && (o[n] = o[n] || [], o[n].push(e));
        }), [].slice.call(n.querySelectorAll(i)).forEach(function (t, n) {
          var i, l = r(t);
          if ((s[l] = s[l] || [], s[l].push(t), o[l])) {
            var u = s[l].length - 1, c = o[l].length - 1;
            o[l][u] ? (i = o[l][u], o[l][u] = null) : o[l][c] && (i = o[l][c], o[l][c] = null);
          }
          i && e.push({
            from: i,
            to: t,
            options: a
          });
        }));
      }
    }, {
      key: "getUnmatchedAutoAnimateElements",
      value: function (e) {
        var t = this;
        return [].slice.call(e.children).reduce(function (e, n) {
          var i = n.querySelector("[data-auto-animate-target]");
          return (n.hasAttribute("data-auto-animate-target") || i || e.push(n), n.querySelector("[data-auto-animate-target]") && (e = e.concat(t.getUnmatchedAutoAnimateElements(n))), e);
        }, []);
      }
    }]), e);
  })(), os = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t);
    }
    return (no(e, [{
      key: "configure",
      value: function (e, t) {
        !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
      }
    }, {
      key: "disable",
      value: function () {
        So(this.Reveal.getSlidesElement(), ".fragment").forEach(function (e) {
          (e.classList.add("visible"), e.classList.remove("current-fragment"));
        });
      }
    }, {
      key: "enable",
      value: function () {
        So(this.Reveal.getSlidesElement(), ".fragment").forEach(function (e) {
          (e.classList.remove("visible"), e.classList.remove("current-fragment"));
        });
      }
    }, {
      key: "availableRoutes",
      value: function () {
        var e = this.Reveal.getCurrentSlide();
        if (e && this.Reveal.getConfig().fragments) {
          var t = e.querySelectorAll(".fragment:not(.disabled)"), n = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
          return {
            prev: t.length - n.length > 0,
            next: !!n.length
          };
        }
        return {
          prev: !1,
          next: !1
        };
      }
    }, {
      key: "sort",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e = Array.from(e);
        var n = [], i = [], r = [];
        (e.forEach(function (e) {
          if (e.hasAttribute("data-fragment-index")) {
            var t = parseInt(e.getAttribute("data-fragment-index"), 10);
            (n[t] || (n[t] = []), n[t].push(e));
          } else i.push([e]);
        }), n = n.concat(i));
        var a = 0;
        return (n.forEach(function (e) {
          (e.forEach(function (e) {
            (r.push(e), e.setAttribute("data-fragment-index", a));
          }), a++);
        }), !0 === t ? n : r);
      }
    }, {
      key: "sortAll",
      value: function () {
        var e = this;
        this.Reveal.getHorizontalSlides().forEach(function (t) {
          var n = So(t, "section");
          (n.forEach(function (t, n) {
            e.sort(t.querySelectorAll(".fragment"));
          }, e), 0 === n.length && e.sort(t.querySelectorAll(".fragment")));
        });
      }
    }, {
      key: "update",
      value: function (e, t) {
        var n = this, i = {
          shown: [],
          hidden: []
        }, r = this.Reveal.getCurrentSlide();
        if (r && this.Reveal.getConfig().fragments && (t = t || this.sort(r.querySelectorAll(".fragment"))).length) {
          var a = 0;
          if ("number" != typeof e) {
            var o = this.sort(r.querySelectorAll(".fragment.visible")).pop();
            o && (e = parseInt(o.getAttribute("data-fragment-index") || 0, 10));
          }
          (Array.from(t).forEach(function (t, r) {
            if ((t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), a = Math.max(a, r), r <= e)) {
              var o = t.classList.contains("visible");
              (t.classList.add("visible"), t.classList.remove("current-fragment"), r === e && (n.Reveal.announceStatus(n.Reveal.getStatusText(t)), t.classList.add("current-fragment"), n.Reveal.slideContent.startEmbeddedContent(t)), o || (i.shown.push(t), n.Reveal.dispatchEvent({
                target: t,
                type: "visible",
                bubbles: !1
              })));
            } else {
              var s = t.classList.contains("visible");
              (t.classList.remove("visible"), t.classList.remove("current-fragment"), s && (i.hidden.push(t), n.Reveal.dispatchEvent({
                target: t,
                type: "hidden",
                bubbles: !1
              })));
            }
          }), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, a), -1), r.setAttribute("data-fragment", e));
        }
        return i;
      }
    }, {
      key: "sync",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
        return this.sort(e.querySelectorAll(".fragment"));
      }
    }, {
      key: "goto",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.Reveal.getCurrentSlide();
        if (n && this.Reveal.getConfig().fragments) {
          var i = this.sort(n.querySelectorAll(".fragment:not(.disabled)"));
          if (i.length) {
            if ("number" != typeof e) {
              var r = this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();
              e = r ? parseInt(r.getAttribute("data-fragment-index") || 0, 10) : -1;
            }
            e += t;
            var a = this.update(e, i);
            return (a.hidden.length && this.Reveal.dispatchEvent({
              type: "fragmenthidden",
              data: {
                fragment: a.hidden[0],
                fragments: a.hidden
              }
            }), a.shown.length && this.Reveal.dispatchEvent({
              type: "fragmentshown",
              data: {
                fragment: a.shown[0],
                fragments: a.shown
              }
            }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a.shown.length && !a.hidden.length));
          }
        }
        return !1;
      }
    }, {
      key: "next",
      value: function () {
        return this.goto(null, 1);
      }
    }, {
      key: "prev",
      value: function () {
        return this.goto(null, -1);
      }
    }]), e);
  })(), ss = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this));
    }
    return (no(e, [{
      key: "activate",
      value: function () {
        var e = this;
        if (this.Reveal.getConfig().overview && !this.isActive()) {
          (this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), So(this.Reveal.getRevealElement(), lo).forEach(function (t) {
            t.classList.contains("stack") || t.addEventListener("click", e.onSlideClicked, !0);
          }));
          var t = this.Reveal.getComputedSlideSize();
          (this.overviewSlideWidth = t.width + 70, this.overviewSlideHeight = t.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout());
          var n = this.Reveal.getIndices();
          this.Reveal.dispatchEvent({
            type: "overviewshown",
            data: {
              indexh: n.h,
              indexv: n.v,
              currentSlide: this.Reveal.getCurrentSlide()
            }
          });
        }
      }
    }, {
      key: "layout",
      value: function () {
        var e = this;
        (this.Reveal.getHorizontalSlides().forEach(function (t, n) {
          (t.setAttribute("data-index-h", n), Ao(t, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), t.classList.contains("stack") && So(t, "section").forEach(function (t, i) {
            (t.setAttribute("data-index-h", n), t.setAttribute("data-index-v", i), Ao(t, "translate3d(0, " + i * e.overviewSlideHeight + "px, 0)"));
          }));
        }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(function (t, n) {
          (Ao(t, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), So(t, ".slide-background").forEach(function (t, n) {
            Ao(t, "translate3d(0, " + n * e.overviewSlideHeight + "px, 0)");
          }));
        }));
      }
    }, {
      key: "update",
      value: function () {
        var e = Math.min(window.innerWidth, window.innerHeight), t = Math.max(e / 5, 150) / e, n = this.Reveal.getIndices();
        this.Reveal.transformSlides({
          overview: ["scale(" + t + ")", "translateX(" + -n.h * this.overviewSlideWidth + "px)", "translateY(" + -n.v * this.overviewSlideHeight + "px)"].join(" ")
        });
      }
    }, {
      key: "deactivate",
      value: function () {
        var e = this;
        if (this.Reveal.getConfig().overview) {
          (this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(function () {
            e.Reveal.getRevealElement().classList.remove("overview-deactivating");
          }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), So(this.Reveal.getRevealElement(), lo).forEach(function (t) {
            (Ao(t, ""), t.removeEventListener("click", e.onSlideClicked, !0));
          }), So(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(function (e) {
            Ao(e, "");
          }), this.Reveal.transformSlides({
            overview: ""
          }));
          var t = this.Reveal.getIndices();
          (this.Reveal.slide(t.h, t.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
            type: "overviewhidden",
            data: {
              indexh: t.h,
              indexv: t.v,
              currentSlide: this.Reveal.getCurrentSlide()
            }
          }));
        }
      }
    }, {
      key: "toggle",
      value: function (e) {
        "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
      }
    }, {
      key: "isActive",
      value: function () {
        return this.active;
      }
    }, {
      key: "onSlideClicked",
      value: function (e) {
        if (this.isActive()) {
          e.preventDefault();
          for (var t = e.target; t && !t.nodeName.match(/section/gi); ) t = t.parentNode;
          if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
            var n = parseInt(t.getAttribute("data-index-h"), 10), i = parseInt(t.getAttribute("data-index-v"), 10);
            this.Reveal.slide(n, i);
          }
        }
      }
    }]), e);
  })(), ls = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this));
    }
    return (no(e, [{
      key: "configure",
      value: function (e, t) {
        ("linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts.P = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Home  ,  Shift &#8592;"] = "First slide", this.shortcuts["End  ,  Shift &#8594;"] = "Last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview");
      }
    }, {
      key: "bind",
      value: function () {
        (document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1));
      }
    }, {
      key: "unbind",
      value: function () {
        (document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1));
      }
    }, {
      key: "addKeyBinding",
      value: function (e, t) {
        "object" === Za(e) && e.keyCode ? this.bindings[e.keyCode] = {
          callback: t,
          key: e.key,
          description: e.description
        } : this.bindings[e] = {
          callback: t,
          key: null,
          description: null
        };
      }
    }, {
      key: "removeKeyBinding",
      value: function (e) {
        delete this.bindings[e];
      }
    }, {
      key: "triggerKey",
      value: function (e) {
        this.onDocumentKeyDown({
          keyCode: e
        });
      }
    }, {
      key: "registerKeyboardShortcut",
      value: function (e, t) {
        this.shortcuts[e] = t;
      }
    }, {
      key: "getShortcuts",
      value: function () {
        return this.shortcuts;
      }
    }, {
      key: "getBindings",
      value: function () {
        return this.bindings;
      }
    }, {
      key: "onDocumentKeyPress",
      value: function (e) {
        e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
      }
    }, {
      key: "onDocumentKeyDown",
      value: function (e) {
        var t = this.Reveal.getConfig();
        if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
        if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
        var n = e.keyCode, i = !this.Reveal.isAutoSliding();
        this.Reveal.onUserInput(e);
        var r = document.activeElement && !0 === document.activeElement.isContentEditable, a = document.activeElement && document.activeElement.tagName && (/input|textarea/i).test(document.activeElement.tagName), o = document.activeElement && document.activeElement.className && (/speaker-notes/i).test(document.activeElement.className), s = e.shiftKey && 32 === e.keyCode, l = e.shiftKey && 37 === n, u = e.shiftKey && 39 === n, c = !s && !l && !u && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
        if (!(r || a || o || c)) {
          var d, h = [66, 86, 190, 191];
          if ("object" === Za(t.keyboard)) for (d in t.keyboard) "togglePause" === t.keyboard[d] && h.push(parseInt(d, 10));
          if (this.Reveal.isPaused() && -1 === h.indexOf(n)) return !1;
          var f, v, g = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), p = !1;
          if ("object" === Za(t.keyboard)) for (d in t.keyboard) if (parseInt(d, 10) === n) {
            var m = t.keyboard[d];
            ("function" == typeof m ? m.apply(null, [e]) : "string" == typeof m && "function" == typeof this.Reveal[m] && this.Reveal[m].call(), p = !0);
          }
          if (!1 === p) for (d in this.bindings) if (parseInt(d, 10) === n) {
            var y = this.bindings[d].callback;
            ("function" == typeof y ? y.apply(null, [e]) : "string" == typeof y && "function" == typeof this.Reveal[y] && this.Reveal[y].call(), p = !0);
          }
          (!1 === p && (p = !0, 80 === n || 33 === n ? this.Reveal.prev() : 78 === n || 34 === n ? this.Reveal.next() : 72 === n || 37 === n ? l ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.left() : 76 === n || 39 === n ? u ? this.Reveal.slide(Number.MAX_VALUE) : !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.right() : 75 === n || 38 === n ? !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.up() : 74 === n || 40 === n ? !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.down() : 36 === n ? this.Reveal.slide(0) : 35 === n ? this.Reveal.slide(Number.MAX_VALUE) : 32 === n ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev() : this.Reveal.next()) : 58 === n || 59 === n || 66 === n || 86 === n || 190 === n || 191 === n ? this.Reveal.togglePause() : 70 === n ? (f = t.embedded ? this.Reveal.getViewportElement() : document.documentElement, (v = (f = f || document.documentElement).requestFullscreen || f.webkitRequestFullscreen || f.webkitRequestFullScreen || f.mozRequestFullScreen || f.msRequestFullscreen) && v.apply(f)) : 65 === n ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(i) : p = !1), p ? e.preventDefault && e.preventDefault() : 27 !== n && 79 !== n || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide());
        }
      }
    }]), e);
  })(), us = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this));
    }
    return (no(e, [{
      key: "bind",
      value: function () {
        window.addEventListener("hashchange", this.onWindowHashChange, !1);
      }
    }, {
      key: "unbind",
      value: function () {
        window.removeEventListener("hashchange", this.onWindowHashChange, !1);
      }
    }, {
      key: "readURL",
      value: function () {
        var e = this.Reveal.getConfig(), t = this.Reveal.getIndices(), n = this.Reveal.getCurrentSlide(), i = window.location.hash, r = i.slice(2).split("/"), a = i.replace(/#\/?/gi, "");
        if (!(/^[0-9]*$/).test(r[0]) && a.length) {
          var o, s;
          (/\/[-\d]+$/g).test(a) && (s = parseInt(a.split("/").pop(), 10), s = isNaN(s) ? void 0 : s, a = a.split("/").shift());
          try {
            o = document.getElementById(decodeURIComponent(a));
          } catch (e) {}
          var l = !!n && n.getAttribute("id") === a;
          if (o) {
            if (!l || void 0 !== s) {
              var u = this.Reveal.getIndices(o);
              this.Reveal.slide(u.h, u.v, s);
            }
          } else this.Reveal.slide(t.h || 0, t.v || 0);
        } else {
          var c, d = e.hashOneBasedIndex ? 1 : 0, h = parseInt(r[0], 10) - d || 0, f = parseInt(r[1], 10) - d || 0;
          (e.fragmentInURL && (c = parseInt(r[2], 10), isNaN(c) && (c = void 0)), h === t.h && f === t.v && void 0 === c || this.Reveal.slide(h, f, c));
        }
      }
    }, {
      key: "writeURL",
      value: function (e) {
        var t = this.Reveal.getConfig(), n = this.Reveal.getCurrentSlide();
        if ((clearTimeout(this.writeURLTimeout), "number" == typeof e)) this.writeURLTimeout = setTimeout(this.writeURL, e); else if (n) {
          var i = this.getHash();
          t.history ? window.location.hash = i : t.hash && ("/" === i ? window.history.replaceState(null, null, window.location.pathname + window.location.search) : window.history.replaceState(null, null, "#" + i));
        }
      }
    }, {
      key: "getHash",
      value: function (e) {
        var t = "/", n = e || this.Reveal.getCurrentSlide(), i = n ? n.getAttribute("id") : null;
        i && (i = encodeURIComponent(i));
        var r = this.Reveal.getIndices(e);
        if ((this.Reveal.getConfig().fragmentInURL || (r.f = void 0), "string" == typeof i && i.length)) (t = "/" + i, r.f >= 0 && (t += "/" + r.f)); else {
          var a = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
          ((r.h > 0 || r.v > 0 || r.f >= 0) && (t += r.h + a), (r.v > 0 || r.f >= 0) && (t += "/" + (r.v + a)), r.f >= 0 && (t += "/" + r.f));
        }
        return t;
      }
    }, {
      key: "onWindowHashChange",
      value: function (e) {
        this.readURL();
      }
    }]), e);
  })(), cs = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this));
    }
    return (no(e, [{
      key: "render",
      value: function () {
        var e = this.Reveal.getConfig().rtl, t = this.Reveal.getRevealElement();
        (this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = ('<button class="navigate-left" aria-label="').concat(e ? "next slide" : "previous slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="').concat(e ? "previous slide" : "next slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = So(t, ".navigate-left"), this.controlsRight = So(t, ".navigate-right"), this.controlsUp = So(t, ".navigate-up"), this.controlsDown = So(t, ".navigate-down"), this.controlsPrev = So(t, ".navigate-prev"), this.controlsNext = So(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down"));
      }
    }, {
      key: "configure",
      value: function (e, t) {
        (this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows));
      }
    }, {
      key: "bind",
      value: function () {
        var e = this, t = ["touchstart", "click"];
        (Do && (t = ["touchstart"]), t.forEach(function (t) {
          (e.controlsLeft.forEach(function (n) {
            return n.addEventListener(t, e.onNavigateLeftClicked, !1);
          }), e.controlsRight.forEach(function (n) {
            return n.addEventListener(t, e.onNavigateRightClicked, !1);
          }), e.controlsUp.forEach(function (n) {
            return n.addEventListener(t, e.onNavigateUpClicked, !1);
          }), e.controlsDown.forEach(function (n) {
            return n.addEventListener(t, e.onNavigateDownClicked, !1);
          }), e.controlsPrev.forEach(function (n) {
            return n.addEventListener(t, e.onNavigatePrevClicked, !1);
          }), e.controlsNext.forEach(function (n) {
            return n.addEventListener(t, e.onNavigateNextClicked, !1);
          }));
        }));
      }
    }, {
      key: "unbind",
      value: function () {
        var e = this;
        ["touchstart", "click"].forEach(function (t) {
          (e.controlsLeft.forEach(function (n) {
            return n.removeEventListener(t, e.onNavigateLeftClicked, !1);
          }), e.controlsRight.forEach(function (n) {
            return n.removeEventListener(t, e.onNavigateRightClicked, !1);
          }), e.controlsUp.forEach(function (n) {
            return n.removeEventListener(t, e.onNavigateUpClicked, !1);
          }), e.controlsDown.forEach(function (n) {
            return n.removeEventListener(t, e.onNavigateDownClicked, !1);
          }), e.controlsPrev.forEach(function (n) {
            return n.removeEventListener(t, e.onNavigatePrevClicked, !1);
          }), e.controlsNext.forEach(function (n) {
            return n.removeEventListener(t, e.onNavigateNextClicked, !1);
          }));
        });
      }
    }, {
      key: "update",
      value: function () {
        var e = this.Reveal.availableRoutes();
        ([].concat(oo(this.controlsLeft), oo(this.controlsRight), oo(this.controlsUp), oo(this.controlsDown), oo(this.controlsPrev), oo(this.controlsNext)).forEach(function (e) {
          (e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled"));
        }), e.left && this.controlsLeft.forEach(function (e) {
          (e.classList.add("enabled"), e.removeAttribute("disabled"));
        }), e.right && this.controlsRight.forEach(function (e) {
          (e.classList.add("enabled"), e.removeAttribute("disabled"));
        }), e.up && this.controlsUp.forEach(function (e) {
          (e.classList.add("enabled"), e.removeAttribute("disabled"));
        }), e.down && this.controlsDown.forEach(function (e) {
          (e.classList.add("enabled"), e.removeAttribute("disabled"));
        }), (e.left || e.up) && this.controlsPrev.forEach(function (e) {
          (e.classList.add("enabled"), e.removeAttribute("disabled"));
        }), (e.right || e.down) && this.controlsNext.forEach(function (e) {
          (e.classList.add("enabled"), e.removeAttribute("disabled"));
        }));
        var t = this.Reveal.getCurrentSlide();
        if (t) {
          var n = this.Reveal.fragments.availableRoutes();
          (n.prev && this.controlsPrev.forEach(function (e) {
            (e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled"));
          }), n.next && this.controlsNext.forEach(function (e) {
            (e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled"));
          }), this.Reveal.isVerticalSlide(t) ? (n.prev && this.controlsUp.forEach(function (e) {
            (e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled"));
          }), n.next && this.controlsDown.forEach(function (e) {
            (e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled"));
          })) : (n.prev && this.controlsLeft.forEach(function (e) {
            (e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled"));
          }), n.next && this.controlsRight.forEach(function (e) {
            (e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled"));
          })));
        }
        if (this.Reveal.getConfig().controlsTutorial) {
          var i = this.Reveal.getIndices();
          !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === i.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === i.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
        }
      }
    }, {
      key: "onNavigateLeftClicked",
      value: function (e) {
        (e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left());
      }
    }, {
      key: "onNavigateRightClicked",
      value: function (e) {
        (e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right());
      }
    }, {
      key: "onNavigateUpClicked",
      value: function (e) {
        (e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up());
      }
    }, {
      key: "onNavigateDownClicked",
      value: function (e) {
        (e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down());
      }
    }, {
      key: "onNavigatePrevClicked",
      value: function (e) {
        (e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev());
      }
    }, {
      key: "onNavigateNextClicked",
      value: function (e) {
        (e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next());
      }
    }]), e);
  })(), ds = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.onProgressClicked = this.onProgressClicked.bind(this));
    }
    return (no(e, [{
      key: "render",
      value: function () {
        (this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar));
      }
    }, {
      key: "configure",
      value: function (e, t) {
        this.element.style.display = e.progress ? "block" : "none";
      }
    }, {
      key: "bind",
      value: function () {
        this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
      }
    }, {
      key: "unbind",
      value: function () {
        this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
      }
    }, {
      key: "update",
      value: function () {
        if (this.Reveal.getConfig().progress && this.bar) {
          var e = this.Reveal.getProgress();
          (this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")");
        }
      }
    }, {
      key: "getMaxWidth",
      value: function () {
        return this.Reveal.getRevealElement().offsetWidth;
      }
    }, {
      key: "onProgressClicked",
      value: function (e) {
        (this.Reveal.onUserInput(e), e.preventDefault());
        var t = this.Reveal.getHorizontalSlides().length, n = Math.floor(e.clientX / this.getMaxWidth() * t);
        (this.Reveal.getConfig().rtl && (n = t - n), this.Reveal.slide(n));
      }
    }]), e);
  })(), hs = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this));
    }
    return (no(e, [{
      key: "configure",
      value: function (e, t) {
        (e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1)));
      }
    }, {
      key: "showCursor",
      value: function () {
        this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
      }
    }, {
      key: "hideCursor",
      value: function () {
        !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
      }
    }, {
      key: "onDocumentCursorActive",
      value: function (e) {
        (this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime));
      }
    }, {
      key: "onDocumentMouseScroll",
      value: function (e) {
        if (Date.now() - this.lastMouseWheelStep > 1e3) {
          this.lastMouseWheelStep = Date.now();
          var t = e.detail || -e.wheelDelta;
          t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
        }
      }
    }]), e);
  })(), fs = u.f, vs = function (e) {
    return function (t) {
      for (var n, i = p(t), r = St(i), a = r.length, s = 0, l = []; a > s; ) (n = r[s++], o && !fs.call(i, n) || l.push(e ? [n, i[n]] : i[n]));
      return l;
    };
  }, gs = ({
    entries: vs(!0),
    values: vs(!1)
  }).values;
  Oe({
    target: "Object",
    stat: !0
  }, {
    values: function (e) {
      return gs(e);
    }
  });
  var ps = function (e, t) {
    var n = document.createElement("script");
    (n.type = "text/javascript", n.async = !1, n.defer = !1, n.src = e, "function" == typeof t && (n.onload = n.onreadystatechange = function (e) {
      ("load" === e.type || (/loaded|complete/).test(n.readyState)) && (n.onload = n.onreadystatechange = n.onerror = null, t());
    }, n.onerror = function (e) {
      (n.onload = n.onreadystatechange = n.onerror = null, t(new Error("Failed loading script: " + n.src + "\n" + e)));
    }));
    var i = document.querySelector("head");
    i.insertBefore(n, i.lastChild);
  }, ms = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = []);
    }
    return (no(e, [{
      key: "load",
      value: function (e, t) {
        var n = this;
        return (this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise(function (e) {
          var i = [], r = 0;
          if ((t.forEach(function (e) {
            e.condition && !e.condition() || (e.async ? n.asyncDependencies.push(e) : i.push(e));
          }), i.length)) {
            r = i.length;
            var a = function (t) {
              (t && "function" == typeof t.callback && t.callback(), 0 == --r && n.initPlugins().then(e));
            };
            i.forEach(function (e) {
              "string" == typeof e.id ? (n.registerPlugin(e), a(e)) : "string" == typeof e.src ? ps(e.src, function () {
                return a(e);
              }) : (console.warn("Unrecognized plugin format", e), a());
            });
          } else n.initPlugins().then(e);
        }));
      }
    }, {
      key: "initPlugins",
      value: function () {
        var e = this;
        return new Promise(function (t) {
          var n = Object.values(e.registeredPlugins), i = n.length;
          if (0 === i) e.loadAsync().then(t); else {
            var r, a = function () {
              0 == --i ? e.loadAsync().then(t) : r();
            }, o = 0;
            (r = function () {
              var t = n[o++];
              if ("function" == typeof t.init) {
                var i = t.init(e.Reveal);
                i && "function" == typeof i.then ? i.then(a) : a();
              } else a();
            })();
          }
        });
      }
    }, {
      key: "loadAsync",
      value: function () {
        return (this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(function (e) {
          ps(e.src, e.callback);
        }), Promise.resolve());
      }
    }, {
      key: "registerPlugin",
      value: function (e) {
        2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
        var t = e.id;
        "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered');
      }
    }, {
      key: "hasPlugin",
      value: function (e) {
        return !!this.registeredPlugins[e];
      }
    }, {
      key: "getPlugin",
      value: function (e) {
        return this.registeredPlugins[e];
      }
    }, {
      key: "getRegisteredPlugins",
      value: function () {
        return this.registeredPlugins;
      }
    }]), e);
  })(), ys = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t);
    }
    return (no(e, [{
      key: "setupPDF",
      value: function () {
        var e = this.Reveal.getConfig(), t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n = Math.floor(t.width * (1 + e.margin)), i = Math.floor(t.height * (1 + e.margin)), r = t.width, a = t.height;
        (Co("@page{size:" + n + "px " + i + "px; margin: 0px;}"), Co(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + r + "px; max-height:" + a + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = n + "px", document.body.style.height = i + "px", this.Reveal.layoutSlideContents(r, a));
        var o = e.slideNumber && (/all|print/i).test(e.showSlideNumber);
        (So(this.Reveal.getRevealElement(), lo).forEach(function (e) {
          e.setAttribute("data-slide-number", this.Reveal.slideNumber.getSlideNumber(e));
        }, this), So(this.Reveal.getRevealElement(), lo).forEach(function (t) {
          if (!1 === t.classList.contains("stack")) {
            var s = (n - r) / 2, l = (i - a) / 2, u = t.scrollHeight, c = Math.max(Math.ceil(u / i), 1);
            (1 === (c = Math.min(c, e.pdfMaxPagesPerSlide)) && e.center || t.classList.contains("center")) && (l = Math.max((i - u) / 2, 0));
            var d = document.createElement("div");
            if ((d.className = "pdf-page", d.style.height = (i + e.pdfPageHeightOffset) * c + "px", t.parentNode.insertBefore(d, t), d.appendChild(t), t.style.left = s + "px", t.style.top = l + "px", t.style.width = r + "px", t.slideBackgroundElement && d.insertBefore(t.slideBackgroundElement, t), e.showNotes)) {
              var h = this.Reveal.getSlideNotes(t);
              if (h) {
                var f = "string" == typeof e.showNotes ? e.showNotes : "inline", v = document.createElement("div");
                (v.classList.add("speaker-notes"), v.classList.add("speaker-notes-pdf"), v.setAttribute("data-layout", f), v.innerHTML = h, "separate-page" === f ? d.parentNode.insertBefore(v, d.nextSibling) : (v.style.left = "8px", v.style.bottom = "8px", v.style.width = n - 16 + "px", d.appendChild(v)));
              }
            }
            if (o) {
              var g = document.createElement("div");
              (g.classList.add("slide-number"), g.classList.add("slide-number-pdf"), g.innerHTML = t.getAttribute("data-slide-number"), d.appendChild(g));
            }
            if (e.pdfSeparateFragments) {
              var p, m, y = this.Reveal.fragments.sort(d.querySelectorAll(".fragment"), !0);
              (y.forEach(function (e) {
                (p && p.forEach(function (e) {
                  e.classList.remove("current-fragment");
                }), e.forEach(function (e) {
                  e.classList.add("visible", "current-fragment");
                }, this));
                var t = d.cloneNode(!0);
                (d.parentNode.insertBefore(t, (m || d).nextSibling), p = e, m = t);
              }, this), y.forEach(function (e) {
                e.forEach(function (e) {
                  e.classList.remove("visible", "current-fragment");
                });
              }));
            } else So(d, ".fragment:not(.fade-out)").forEach(function (e) {
              e.classList.add("visible");
            });
          }
        }, this), this.Reveal.dispatchEvent({
          type: "pdf-ready"
        }));
      }
    }, {
      key: "isPrintingPDF",
      value: function () {
        return (/print-pdf/gi).test(window.location.search);
      }
    }]), e);
  })(), bs = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this));
    }
    return (no(e, [{
      key: "bind",
      value: function () {
        var e = this.Reveal.getRevealElement();
        ("onpointerdown" in window) ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
      }
    }, {
      key: "unbind",
      value: function () {
        var e = this.Reveal.getRevealElement();
        (e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1));
      }
    }, {
      key: "isSwipePrevented",
      value: function (e) {
        for (; e && "function" == typeof e.hasAttribute; ) {
          if (e.hasAttribute("data-prevent-swipe")) return !0;
          e = e.parentNode;
        }
        return !1;
      }
    }, {
      key: "onTouchStart",
      value: function (e) {
        if (this.isSwipePrevented(e.target)) return !0;
        (this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length);
      }
    }, {
      key: "onTouchMove",
      value: function (e) {
        if (this.isSwipePrevented(e.target)) return !0;
        var t = this.Reveal.getConfig();
        if (this.touchCaptured) Do && e.preventDefault(); else {
          this.Reveal.onUserInput(e);
          var n = e.touches[0].clientX, i = e.touches[0].clientY;
          if (1 === e.touches.length && 2 !== this.touchStartCount) {
            var r = this.Reveal.availableRoutes({
              includeFragments: !0
            }), a = n - this.touchStartX, o = i - this.touchStartY;
            (a > 40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o > 40 && r.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : o < -40 && r.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault());
          }
        }
      }
    }, {
      key: "onTouchEnd",
      value: function (e) {
        this.touchCaptured = !1;
      }
    }, {
      key: "onPointerDown",
      value: function (e) {
        e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
          clientX: e.clientX,
          clientY: e.clientY
        }], this.onTouchStart(e));
      }
    }, {
      key: "onPointerMove",
      value: function (e) {
        e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
          clientX: e.clientX,
          clientY: e.clientY
        }], this.onTouchMove(e));
      }
    }, {
      key: "onPointerUp",
      value: function (e) {
        e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
          clientX: e.clientX,
          clientY: e.clientY
        }], this.onTouchEnd(e));
      }
    }]), e);
  })(), ws = "focus", Ss = "blur", Es = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this));
    }
    return (no(e, [{
      key: "configure",
      value: function (e, t) {
        e.embedded ? this.blur() : (this.focus(), this.unbind());
      }
    }, {
      key: "bind",
      value: function () {
        this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
      }
    }, {
      key: "unbind",
      value: function () {
        (this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1));
      }
    }, {
      key: "focus",
      value: function () {
        (this.state !== ws && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = ws);
      }
    }, {
      key: "blur",
      value: function () {
        (this.state !== Ss && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = Ss);
      }
    }, {
      key: "isFocused",
      value: function () {
        return this.state === ws;
      }
    }, {
      key: "onRevealPointerDown",
      value: function (e) {
        this.focus();
      }
    }, {
      key: "onDocumentPointerDown",
      value: function (e) {
        var t = xo(e.target, ".reveal");
        t && t === this.Reveal.getRevealElement() || this.blur();
      }
    }]), e);
  })(), ks = (function () {
    function e(t) {
      (eo(this, e), this.Reveal = t);
    }
    return (no(e, [{
      key: "render",
      value: function () {
        (this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element));
      }
    }, {
      key: "configure",
      value: function (e, t) {
        e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline");
      }
    }, {
      key: "update",
      value: function () {
        this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
      }
    }, {
      key: "updateVisibility",
      value: function () {
        this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
      }
    }, {
      key: "hasNotes",
      value: function () {
        return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
      }
    }, {
      key: "isSpeakerNotesWindow",
      value: function () {
        return !!window.location.search.match(/receiver/gi);
      }
    }, {
      key: "getSlideNotes",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
        if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
        var t = e.querySelector("aside.notes");
        return t ? t.innerHTML : null;
      }
    }]), e);
  })(), As = qe("unscopables"), Rs = Array.prototype;
  null == Rs[As] && P.f(Rs, As, {
    configurable: !0,
    value: It(null)
  });
  (Oe({
    target: "Array",
    proto: !0
  }, {
    fill: function (e) {
      for (var t = De(this), n = de(t.length), i = arguments.length, r = ve(i > 1 ? arguments[1] : void 0, n), a = i > 2 ? arguments[2] : void 0, o = void 0 === a ? n : ve(a, n); o > r; ) t[r++] = e;
      return t;
    }
  }), (function (e) {
    Rs[As][e] = !0;
  })("fill"));
  var xs = (function () {
    function e(t, n) {
      (eo(this, e), this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = t, this.progressCheck = n, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render());
    }
    return (no(e, [{
      key: "setPlaying",
      value: function (e) {
        var t = this.playing;
        (this.playing = e, !t && this.playing ? this.animate() : this.render());
      }
    }, {
      key: "animate",
      value: function () {
        var e = this.progress;
        (this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this)));
      }
    }, {
      key: "render",
      value: function () {
        var e = this.playing ? this.progress : 0, t = this.diameter2 - this.thickness, n = this.diameter2, i = this.diameter2, r = 28;
        this.progressOffset += .1 * (1 - this.progressOffset);
        var a = -Math.PI / 2 + e * (2 * Math.PI), o = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
        (this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(n, i, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(n, i, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(n, i, t, o, a, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(n - 14, i - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, r), this.context.fillRect(18, 0, 10, r)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, r), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore());
      }
    }, {
      key: "on",
      value: function (e, t) {
        this.canvas.addEventListener(e, t, !1);
      }
    }, {
      key: "off",
      value: function (e, t) {
        this.canvas.removeEventListener(e, t, !1);
      }
    }, {
      key: "destroy",
      value: function () {
        (this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas));
      }
    }]), e);
  })(), Ls = {
    width: 960,
    height: 700,
    margin: .04,
    minScale: .2,
    maxScale: 2,
    controls: !0,
    controlsTutorial: !0,
    controlsLayout: "bottom-right",
    controlsBackArrows: "faded",
    progress: !0,
    slideNumber: !1,
    showSlideNumber: "all",
    hashOneBasedIndex: !1,
    hash: !1,
    respondToHashChanges: !0,
    history: !1,
    keyboard: !0,
    keyboardCondition: null,
    disableLayout: !1,
    overview: !0,
    center: !0,
    touch: !0,
    loop: !1,
    rtl: !1,
    navigationMode: "default",
    shuffle: !1,
    fragments: !0,
    fragmentInURL: !0,
    embedded: !1,
    help: !0,
    pause: !0,
    showNotes: !1,
    showHiddenSlides: !1,
    autoPlayMedia: null,
    preloadIframes: null,
    autoAnimate: !0,
    autoAnimateMatcher: null,
    autoAnimateEasing: "ease",
    autoAnimateDuration: 1,
    autoAnimateUnmatched: !0,
    autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
    autoSlide: 0,
    autoSlideStoppable: !0,
    autoSlideMethod: null,
    defaultTiming: null,
    mouseWheel: !1,
    previewLinks: !1,
    postMessage: !0,
    postMessageEvents: !1,
    focusBodyOnPageVisibilityChange: !0,
    transition: "slide",
    transitionSpeed: "default",
    backgroundTransition: "fade",
    parallaxBackgroundImage: "",
    parallaxBackgroundSize: "",
    parallaxBackgroundRepeat: "",
    parallaxBackgroundPosition: "",
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,
    pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
    pdfSeparateFragments: !0,
    pdfPageHeightOffset: -1,
    viewDistance: 3,
    mobileViewDistance: 2,
    display: "block",
    hideInactiveCursor: !0,
    hideCursorTime: 5e3,
    dependencies: [],
    plugins: []
  }, Cs = "4.1.0";
  function Ps(e, t) {
    arguments.length < 2 && (t = arguments[0], e = document.querySelector(".reveal"));
    var n, i, r, a, o, s = {}, l = {}, u = !1, c = {
      hasNavigatedHorizontally: !1,
      hasNavigatedVertically: !1
    }, d = [], h = 1, f = {
      layout: "",
      overview: ""
    }, v = {}, g = "idle", p = 0, m = 0, y = -1, b = !1, w = new Ho(s), S = new Fo(s), E = new as(s), k = new Bo(s), A = new os(s), R = new ss(s), x = new ls(s), L = new us(s), C = new cs(s), P = new ds(s), N = new hs(s), M = new ms(s), I = new ys(s), O = new Es(s), T = new bs(s), D = new ks(s);
    function j(n) {
      return (v.wrapper = e, v.slides = e.querySelector(".slides"), l = ao(ao(ao(ao(ao({}, Ls), l), t), n), Po()), z(), window.addEventListener("load", oe, !1), M.load(l.plugins, l.dependencies).then(H), new Promise(function (e) {
        return s.on("ready", e);
      }));
    }
    function z() {
      (!0 === l.embedded ? v.viewport = xo(e, ".reveal-viewport") || e : (v.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), v.viewport.classList.add("reveal-viewport"));
    }
    function H() {
      (u = !0, F(), U(), V(), _(), Ae(), K(), L.readURL(), k.update(!0), setTimeout(function () {
        (v.slides.classList.remove("no-transition"), v.wrapper.classList.add("ready"), Q({
          type: "ready",
          data: {
            indexh: n,
            indexv: i,
            currentSlide: a
          }
        }));
      }, 1), I.isPrintingPDF() && (X(), "complete" === document.readyState ? I.setupPDF() : window.addEventListener("load", function () {
        I.setupPDF();
      })));
    }
    function F() {
      l.showHiddenSlides || So(v.wrapper, 'section[data-visibility="hidden"]').forEach(function (e) {
        e.parentNode.removeChild(e);
      });
    }
    function U() {
      (v.slides.classList.add("no-transition"), Oo ? v.wrapper.classList.add("no-hover") : v.wrapper.classList.remove("no-hover"), k.render(), S.render(), C.render(), P.render(), D.render(), v.pauseOverlay = Lo(v.wrapper, "div", "pause-overlay", l.controls ? '<button class="resume-button">Resume presentation</button>' : null), v.statusElement = B(), v.wrapper.setAttribute("role", "application"));
    }
    function B() {
      var e = v.wrapper.querySelector(".aria-status");
      return (e || ((e = document.createElement("div")).style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), v.wrapper.appendChild(e)), e);
    }
    function q(e) {
      v.statusElement.textContent = e;
    }
    function W(e) {
      var t = "";
      if (3 === e.nodeType) t += e.textContent; else if (1 === e.nodeType) {
        var n = e.getAttribute("aria-hidden"), i = "none" === window.getComputedStyle(e).display;
        "true" === n || i || Array.from(e.childNodes).forEach(function (e) {
          t += W(e);
        });
      }
      return "" === (t = t.trim()) ? "" : t + " ";
    }
    function _() {
      setInterval(function () {
        0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft || (v.wrapper.scrollTop = 0, v.wrapper.scrollLeft = 0);
      }, 1e3);
    }
    function V() {
      l.postMessage && window.addEventListener("message", function (e) {
        var t = e.data;
        if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t)).method && "function" == typeof s[t.method]) if (!1 === ho.test(t.method)) {
          var n = s[t.method].apply(s, t.args);
          Z("callback", {
            method: t.method,
            result: n
          });
        } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
      }, !1);
    }
    function K(e) {
      var t = ao({}, l);
      if (("object" === Za(e) && wo(l, e), !1 !== s.isReady())) {
        var n = v.wrapper.querySelectorAll(lo).length;
        (v.wrapper.classList.remove(t.transition), v.wrapper.classList.add(l.transition), v.wrapper.setAttribute("data-transition-speed", l.transitionSpeed), v.wrapper.setAttribute("data-background-transition", l.backgroundTransition), v.viewport.style.setProperty("--slide-width", l.width + "px"), v.viewport.style.setProperty("--slide-height", l.height + "px"), l.shuffle && Re(), Eo(v.wrapper, "embedded", l.embedded), Eo(v.wrapper, "rtl", l.rtl), Eo(v.wrapper, "center", l.center), !1 === l.pause && pe(), l.previewLinks ? (ee(), te("[data-preview-link=false]")) : (te(), ee("[data-preview-link]:not([data-preview-link=false])")), E.reset(), o && (o.destroy(), o = null), n > 1 && l.autoSlide && l.autoSlideStoppable && ((o = new xs(v.wrapper, function () {
          return Math.min(Math.max((Date.now() - y) / p, 0), 1);
        })).on("click", at), b = !1), "default" !== l.navigationMode ? v.wrapper.setAttribute("data-navigation-mode", l.navigationMode) : v.wrapper.removeAttribute("data-navigation-mode"), D.configure(l, t), O.configure(l, t), N.configure(l, t), C.configure(l, t), P.configure(l, t), x.configure(l, t), A.configure(l, t), S.configure(l, t), Ee());
      }
    }
    function $() {
      (window.addEventListener("resize", nt, !1), l.touch && T.bind(), l.keyboard && x.bind(), l.progress && P.bind(), l.respondToHashChanges && L.bind(), C.bind(), O.bind(), v.slides.addEventListener("transitionend", tt, !1), v.pauseOverlay.addEventListener("click", pe, !1), l.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", it, !1));
    }
    function X() {
      (T.unbind(), O.unbind(), x.unbind(), C.unbind(), P.unbind(), L.unbind(), window.removeEventListener("resize", nt, !1), v.slides.removeEventListener("transitionend", tt, !1), v.pauseOverlay.removeEventListener("click", pe, !1));
    }
    function Y(t, n, i) {
      e.addEventListener(t, n, i);
    }
    function G(t, n, i) {
      e.removeEventListener(t, n, i);
    }
    function J(e) {
      ("string" == typeof e.layout && (f.layout = e.layout), "string" == typeof e.overview && (f.overview = e.overview), f.layout ? Ao(v.slides, f.layout + " " + f.overview) : Ao(v.slides, f.overview));
    }
    function Q(e) {
      var t = e.target, n = void 0 === t ? v.wrapper : t, i = e.type, r = e.data, a = e.bubbles, o = void 0 === a || a, s = document.createEvent("HTMLEvents", 1, 2);
      (s.initEvent(i, o, !0), wo(s, r), n.dispatchEvent(s), n === v.wrapper && Z(i));
    }
    function Z(e, t) {
      if (l.postMessageEvents && window.parent !== window.self) {
        var n = {
          namespace: "reveal",
          eventName: e,
          state: qe()
        };
        (wo(n, t), window.parent.postMessage(JSON.stringify(n), "*"));
      }
    }
    function ee() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
      Array.from(v.wrapper.querySelectorAll(e)).forEach(function (e) {
        (/^(http|www)/gi).test(e.getAttribute("href")) && e.addEventListener("click", rt, !1);
      });
    }
    function te() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
      Array.from(v.wrapper.querySelectorAll(e)).forEach(function (e) {
        (/^(http|www)/gi).test(e.getAttribute("href")) && e.removeEventListener("click", rt, !1);
      });
    }
    function ne(e) {
      (ae(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-preview"), v.wrapper.appendChild(v.overlay), v.overlay.innerHTML = ('<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="').concat(e, '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="').concat(e, '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'), v.overlay.querySelector("iframe").addEventListener("load", function (e) {
        v.overlay.classList.add("loaded");
      }, !1), v.overlay.querySelector(".close").addEventListener("click", function (e) {
        (ae(), e.preventDefault());
      }, !1), v.overlay.querySelector(".external").addEventListener("click", function (e) {
        ae();
      }, !1));
    }
    function ie(e) {
      "boolean" == typeof e ? e ? re() : ae() : v.overlay ? ae() : re();
    }
    function re() {
      if (l.help) {
        (ae(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-help"), v.wrapper.appendChild(v.overlay));
        var e = '<p class="title">Keyboard Shortcuts</p><br/>', t = x.getShortcuts(), n = x.getBindings();
        for (var i in (e += "<table><th>KEY</th><th>ACTION</th>", t)) e += ("<tr><td>").concat(i, "</td><td>").concat(t[i], "</td></tr>");
        for (var r in n) n[r].key && n[r].description && (e += ("<tr><td>").concat(n[r].key, "</td><td>").concat(n[r].description, "</td></tr>"));
        (e += "</table>", v.overlay.innerHTML = ('\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">').concat(e, "</div>\n\t\t\t\t</div>\n\t\t\t"), v.overlay.querySelector(".close").addEventListener("click", function (e) {
          (ae(), e.preventDefault());
        }, !1));
      }
    }
    function ae() {
      return !!v.overlay && (v.overlay.parentNode.removeChild(v.overlay), v.overlay = null, !0);
    }
    function oe() {
      if (v.wrapper && !I.isPrintingPDF()) {
        if (!l.disableLayout) {
          Oo && !l.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
          var e = le(), t = h;
          (se(l.width, l.height), v.slides.style.width = e.width + "px", v.slides.style.height = e.height + "px", h = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), h = Math.max(h, l.minScale), 1 === (h = Math.min(h, l.maxScale)) ? (v.slides.style.zoom = "", v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", J({
            layout: ""
          })) : h > 1 && jo && window.devicePixelRatio < 2 ? (v.slides.style.zoom = h, v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", J({
            layout: ""
          })) : (v.slides.style.zoom = "", v.slides.style.left = "50%", v.slides.style.top = "50%", v.slides.style.bottom = "auto", v.slides.style.right = "auto", J({
            layout: "translate(-50%, -50%) scale(" + h + ")"
          })));
          for (var n = Array.from(v.wrapper.querySelectorAll(lo)), i = 0, r = n.length; i < r; i++) {
            var a = n[i];
            "none" !== a.style.display && (l.center || a.classList.contains("center") ? a.classList.contains("stack") ? a.style.top = 0 : a.style.top = Math.max((e.height - a.scrollHeight) / 2, 0) + "px" : a.style.top = "");
          }
          t !== h && Q({
            type: "resize",
            data: {
              oldScale: t,
              scale: h,
              size: e
            }
          });
        }
        (P.update(), k.updateParallax(), R.isActive() && R.update());
      }
    }
    function se(e, t) {
      So(v.slides, "section > .stretch, section > .r-stretch").forEach(function (n) {
        var i = No(n, t);
        if ((/(img|video)/gi).test(n.nodeName)) {
          var r = n.naturalWidth || n.videoWidth, a = n.naturalHeight || n.videoHeight, o = Math.min(e / r, i / a);
          (n.style.width = r * o + "px", n.style.height = a * o + "px");
        } else (n.style.width = e + "px", n.style.height = i + "px");
      });
    }
    function le(e, t) {
      var n = {
        width: l.width,
        height: l.height,
        presentationWidth: e || v.wrapper.offsetWidth,
        presentationHeight: t || v.wrapper.offsetHeight
      };
      return (n.presentationWidth -= n.presentationWidth * l.margin, n.presentationHeight -= n.presentationHeight * l.margin, "string" == typeof n.width && (/%$/).test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth), "string" == typeof n.height && (/%$/).test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight), n);
    }
    function ue(e, t) {
      "object" === Za(e) && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0);
    }
    function ce(e) {
      if ("object" === Za(e) && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
        var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
        return parseInt(e.getAttribute(t) || 0, 10);
      }
      return 0;
    }
    function de() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
      return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
    }
    function he() {
      return !(!a || !de(a)) && !a.nextElementSibling;
    }
    function fe() {
      return 0 === n && 0 === i;
    }
    function ve() {
      return !!a && (!a.nextElementSibling && (!de(a) || !a.parentNode.nextElementSibling));
    }
    function ge() {
      if (l.pause) {
        var e = v.wrapper.classList.contains("paused");
        (Ve(), v.wrapper.classList.add("paused"), !1 === e && Q({
          type: "paused"
        }));
      }
    }
    function pe() {
      var e = v.wrapper.classList.contains("paused");
      (v.wrapper.classList.remove("paused"), _e(), e && Q({
        type: "resumed"
      }));
    }
    function me(e) {
      "boolean" == typeof e ? e ? ge() : pe() : ye() ? pe() : ge();
    }
    function ye() {
      return v.wrapper.classList.contains("paused");
    }
    function be(e) {
      "boolean" == typeof e ? e ? $e() : Ke() : b ? $e() : Ke();
    }
    function we() {
      return !(!p || b);
    }
    function Se(e, t, o, s) {
      r = a;
      var u = v.wrapper.querySelectorAll(uo);
      if (0 !== u.length) {
        (void 0 !== t || R.isActive() || (t = ce(u[e])), r && r.parentNode && r.parentNode.classList.contains("stack") && ue(r.parentNode, i));
        var c = d.concat();
        d.length = 0;
        var h = n || 0, f = i || 0;
        (n = xe(uo, void 0 === e ? n : e), i = xe(co, void 0 === t ? i : t));
        var p = n !== h || i !== f;
        p || (r = null);
        var m = u[n], y = m.querySelectorAll("section");
        a = y[i] || m;
        var b = !1;
        (p && r && a && !R.isActive() && (r.hasAttribute("data-auto-animate") && a.hasAttribute("data-auto-animate") && (b = !0, v.slides.classList.add("disable-slide-transitions")), g = "running"), Le(), oe(), R.isActive() && R.update(), void 0 !== o && A.goto(o), r && r !== a && (r.classList.remove("present"), r.setAttribute("aria-hidden", "true"), fe() && setTimeout(function () {
          De().forEach(function (e) {
            ue(e, 0);
          });
        }, 0)));
        e: for (var x = 0, N = d.length; x < N; x++) {
          for (var M = 0; M < c.length; M++) if (c[M] === d[x]) {
            c.splice(M, 1);
            continue e;
          }
          (v.viewport.classList.add(d[x]), Q({
            type: d[x]
          }));
        }
        for (; c.length; ) v.viewport.classList.remove(c.pop());
        (p && Q({
          type: "slidechanged",
          data: {
            indexh: n,
            indexv: i,
            previousSlide: r,
            currentSlide: a,
            origin: s
          }
        }), !p && r || (w.stopEmbeddedContent(r), w.startEmbeddedContent(a)), q(W(a)), P.update(), C.update(), D.update(), k.update(), k.updateParallax(), S.update(), A.update(), L.writeURL(), _e(), b && (setTimeout(function () {
          v.slides.classList.remove("disable-slide-transitions");
        }, 0), l.autoAnimate && E.run(r, a)));
      }
    }
    function Ee() {
      (X(), $(), oe(), p = l.autoSlide, _e(), k.create(), L.writeURL(), A.sortAll(), C.update(), P.update(), Le(), D.update(), D.updateVisibility(), k.update(!0), S.update(), w.formatEmbeddedContent(), !1 === l.autoPlayMedia ? w.stopEmbeddedContent(a, {
        unloadIframes: !1
      }) : w.startEmbeddedContent(a), R.isActive() && R.layout());
    }
    function ke() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
      (k.sync(e), A.sync(e), w.load(e), k.update(), D.update());
    }
    function Ae() {
      Oe().forEach(function (e) {
        So(e, "section").forEach(function (e, t) {
          t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
        });
      });
    }
    function Re() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe();
      e.forEach(function (t, n) {
        var i = e[Math.floor(Math.random() * e.length)];
        i.parentNode === t.parentNode && t.parentNode.insertBefore(t, i);
        var r = t.querySelectorAll("section");
        r.length && Re(r);
      });
    }
    function xe(e, t) {
      var n = So(v.wrapper, e), i = n.length, r = I.isPrintingPDF();
      if (i) {
        (l.loop && (t %= i) < 0 && (t = i + t), t = Math.max(Math.min(t, i - 1), 0));
        for (var a = 0; a < i; a++) {
          var o = n[a], s = l.rtl && !de(o);
          (o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), r ? o.classList.add("present") : a < t ? (o.classList.add(s ? "future" : "past"), l.fragments && So(o, ".fragment").forEach(function (e) {
            (e.classList.add("visible"), e.classList.remove("current-fragment"));
          })) : a > t && (o.classList.add(s ? "past" : "future"), l.fragments && So(o, ".fragment.visible").forEach(function (e) {
            e.classList.remove("visible", "current-fragment");
          })));
        }
        var u = n[t], c = u.classList.contains("present");
        (u.classList.add("present"), u.removeAttribute("hidden"), u.removeAttribute("aria-hidden"), c || Q({
          target: u,
          type: "visible",
          bubbles: !1
        }));
        var h = u.getAttribute("data-state");
        h && (d = d.concat(h.split(" ")));
      } else t = 0;
      return t;
    }
    function Le() {
      var e, t = Oe(), r = t.length;
      if (r && void 0 !== n) {
        var a = R.isActive() ? 10 : l.viewDistance;
        (Oo && (a = R.isActive() ? 6 : l.mobileViewDistance), I.isPrintingPDF() && (a = Number.MAX_VALUE));
        for (var o = 0; o < r; o++) {
          var s = t[o], u = So(s, "section"), c = u.length;
          if ((e = Math.abs((n || 0) - o) || 0, l.loop && (e = Math.abs(((n || 0) - o) % (r - a)) || 0), e < a ? w.load(s) : w.unload(s), c)) for (var d = ce(s), h = 0; h < c; h++) {
            var f = u[h];
            e + (o === (n || 0) ? Math.abs((i || 0) - h) : Math.abs(h - d)) < a ? w.load(f) : w.unload(f);
          }
        }
        (ze() ? v.wrapper.classList.add("has-vertical-slides") : v.wrapper.classList.remove("has-vertical-slides"), je() ? v.wrapper.classList.add("has-horizontal-slides") : v.wrapper.classList.remove("has-horizontal-slides"));
      }
    }
    function Ce() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.includeFragments, r = void 0 !== t && t, a = v.wrapper.querySelectorAll(uo), o = v.wrapper.querySelectorAll(co), s = {
        left: n > 0,
        right: n < a.length - 1,
        up: i > 0,
        down: i < o.length - 1
      };
      if ((l.loop && (a.length > 1 && (s.left = !0, s.right = !0), o.length > 1 && (s.up = !0, s.down = !0)), a.length > 1 && "linear" === l.navigationMode && (s.right = s.right || s.down, s.left = s.left || s.up), !0 === r)) {
        var u = A.availableRoutes();
        (s.left = s.left || u.prev, s.up = s.up || u.prev, s.down = s.down || u.next, s.right = s.right || u.next);
      }
      if (l.rtl) {
        var c = s.left;
        (s.left = s.right, s.right = c);
      }
      return s;
    }
    function Pe() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, t = Oe(), n = 0;
      e: for (var i = 0; i < t.length; i++) {
        for (var r = t[i], o = r.querySelectorAll("section"), s = 0; s < o.length; s++) {
          if (o[s] === e) break e;
          "uncounted" !== o[s].dataset.visibility && n++;
        }
        if (r === e) break;
        !1 === r.classList.contains("stack") && "uncounted" !== r.dataset.visibility && n++;
      }
      return n;
    }
    function Ne() {
      var e = Fe(), t = Pe();
      if (a) {
        var n = a.querySelectorAll(".fragment");
        if (n.length > 0) {
          t += a.querySelectorAll(".fragment.visible").length / n.length * .9;
        }
      }
      return Math.min(t / (e - 1), 1);
    }
    function Me(e) {
      var t, r = n, o = i;
      if (e) {
        var s = de(e), l = s ? e.parentNode : e, u = Oe();
        (r = Math.max(u.indexOf(l), 0), o = void 0, s && (o = Math.max(So(e.parentNode, "section").indexOf(e), 0)));
      }
      if (!e && a && a.querySelectorAll(".fragment").length > 0) {
        var c = a.querySelector(".current-fragment");
        t = c && c.hasAttribute("data-fragment-index") ? parseInt(c.getAttribute("data-fragment-index"), 10) : a.querySelectorAll(".fragment.visible").length - 1;
      }
      return {
        h: r,
        v: o,
        f: t
      };
    }
    function Ie() {
      return So(v.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])');
    }
    function Oe() {
      return So(v.wrapper, uo);
    }
    function Te() {
      return So(v.wrapper, ".slides>section>section");
    }
    function De() {
      return So(v.wrapper, ".slides>section.stack");
    }
    function je() {
      return Oe().length > 1;
    }
    function ze() {
      return Te().length > 1;
    }
    function He() {
      return Ie().map(function (e) {
        for (var t = {}, n = 0; n < e.attributes.length; n++) {
          var i = e.attributes[n];
          t[i.name] = i.value;
        }
        return t;
      });
    }
    function Fe() {
      return Ie().length;
    }
    function Ue(e, t) {
      var n = Oe()[e], i = n && n.querySelectorAll("section");
      return i && i.length && "number" == typeof t ? i ? i[t] : void 0 : n;
    }
    function Be(e, t) {
      var n = "number" == typeof e ? Ue(e, t) : e;
      if (n) return n.slideBackgroundElement;
    }
    function qe() {
      var e = Me();
      return {
        indexh: e.h,
        indexv: e.v,
        indexf: e.f,
        paused: ye(),
        overview: R.isActive()
      };
    }
    function We(e) {
      if ("object" === Za(e)) {
        Se(ko(e.indexh), ko(e.indexv), ko(e.indexf));
        var t = ko(e.paused), n = ko(e.overview);
        ("boolean" == typeof t && t !== ye() && me(t), "boolean" == typeof n && n !== R.isActive() && R.toggle(n));
      }
    }
    function _e() {
      if ((Ve(), a && !1 !== l.autoSlide)) {
        var e = a.querySelector(".current-fragment");
        e || (e = a.querySelector(".fragment"));
        var t = e ? e.getAttribute("data-autoslide") : null, n = a.parentNode ? a.parentNode.getAttribute("data-autoslide") : null, i = a.getAttribute("data-autoslide");
        (t ? p = parseInt(t, 10) : i ? p = parseInt(i, 10) : n ? p = parseInt(n, 10) : (p = l.autoSlide, 0 === a.querySelectorAll(".fragment").length && So(a, "video, audio").forEach(function (e) {
          e.hasAttribute("data-autoplay") && p && 1e3 * e.duration / e.playbackRate > p && (p = 1e3 * e.duration / e.playbackRate + 1e3);
        })), !p || b || ye() || R.isActive() || ve() && !A.availableRoutes().next && !0 !== l.loop || (m = setTimeout(function () {
          ("function" == typeof l.autoSlideMethod ? l.autoSlideMethod() : Ze(), _e());
        }, p), y = Date.now()), o && o.setPlaying(-1 !== m));
      }
    }
    function Ve() {
      (clearTimeout(m), m = -1);
    }
    function Ke() {
      p && !b && (b = !0, Q({
        type: "autoslidepaused"
      }), clearTimeout(m), o && o.setPlaying(!1));
    }
    function $e() {
      p && b && (b = !1, Q({
        type: "autoslideresumed"
      }), _e());
    }
    function Xe() {
      (c.hasNavigatedHorizontally = !0, l.rtl ? (R.isActive() || !1 === A.next()) && Ce().left && Se(n + 1, "grid" === l.navigationMode ? i : void 0) : (R.isActive() || !1 === A.prev()) && Ce().left && Se(n - 1, "grid" === l.navigationMode ? i : void 0));
    }
    function Ye() {
      (c.hasNavigatedHorizontally = !0, l.rtl ? (R.isActive() || !1 === A.prev()) && Ce().right && Se(n - 1, "grid" === l.navigationMode ? i : void 0) : (R.isActive() || !1 === A.next()) && Ce().right && Se(n + 1, "grid" === l.navigationMode ? i : void 0));
    }
    function Ge() {
      (R.isActive() || !1 === A.prev()) && Ce().up && Se(n, i - 1);
    }
    function Je() {
      (c.hasNavigatedVertically = !0, (R.isActive() || !1 === A.next()) && Ce().down && Se(n, i + 1));
    }
    function Qe() {
      var e;
      if (!1 === A.prev()) if (Ce().up) Ge(); else if (e = l.rtl ? So(v.wrapper, ".slides>section.future").pop() : So(v.wrapper, ".slides>section.past").pop()) {
        var t = e.querySelectorAll("section").length - 1 || void 0;
        Se(n - 1, t);
      }
    }
    function Ze() {
      if ((c.hasNavigatedHorizontally = !0, c.hasNavigatedVertically = !0, !1 === A.next())) {
        var e = Ce();
        (e.down && e.right && l.loop && he() && (e.down = !1), e.down ? Je() : l.rtl ? Xe() : Ye());
      }
    }
    function et(e) {
      l.autoSlideStoppable && Ke();
    }
    function tt(e) {
      "running" === g && (/section/gi).test(e.target.nodeName) && (g = "idle", Q({
        type: "slidetransitionend",
        data: {
          indexh: n,
          indexv: i,
          previousSlide: r,
          currentSlide: a
        }
      }));
    }
    function nt(e) {
      oe();
    }
    function it(e) {
      !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
    }
    function rt(e) {
      if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
        var t = e.currentTarget.getAttribute("href");
        t && (ne(t), e.preventDefault());
      }
    }
    function at(e) {
      ve() && !1 === l.loop ? (Se(0, 0), $e()) : b ? $e() : Ke();
    }
    var ot = {
      VERSION: Cs,
      initialize: j,
      configure: K,
      sync: Ee,
      syncSlide: ke,
      syncFragments: A.sync.bind(A),
      slide: Se,
      left: Xe,
      right: Ye,
      up: Ge,
      down: Je,
      prev: Qe,
      next: Ze,
      navigateLeft: Xe,
      navigateRight: Ye,
      navigateUp: Ge,
      navigateDown: Je,
      navigatePrev: Qe,
      navigateNext: Ze,
      navigateFragment: A.goto.bind(A),
      prevFragment: A.prev.bind(A),
      nextFragment: A.next.bind(A),
      on: Y,
      off: G,
      addEventListener: Y,
      removeEventListener: G,
      layout: oe,
      shuffle: Re,
      availableRoutes: Ce,
      availableFragments: A.availableRoutes.bind(A),
      toggleHelp: ie,
      toggleOverview: R.toggle.bind(R),
      togglePause: me,
      toggleAutoSlide: be,
      isFirstSlide: fe,
      isLastSlide: ve,
      isLastVerticalSlide: he,
      isVerticalSlide: de,
      isPaused: ye,
      isAutoSliding: we,
      isSpeakerNotes: D.isSpeakerNotesWindow.bind(D),
      isOverview: R.isActive.bind(R),
      isFocused: O.isFocused.bind(O),
      isPrintingPDF: I.isPrintingPDF.bind(I),
      isReady: function () {
        return u;
      },
      loadSlide: w.load.bind(w),
      unloadSlide: w.unload.bind(w),
      addEventListeners: $,
      removeEventListeners: X,
      dispatchEvent: Q,
      getState: qe,
      setState: We,
      getProgress: Ne,
      getIndices: Me,
      getSlidesAttributes: He,
      getSlidePastCount: Pe,
      getTotalSlides: Fe,
      getSlide: Ue,
      getPreviousSlide: function () {
        return r;
      },
      getCurrentSlide: function () {
        return a;
      },
      getSlideBackground: Be,
      getSlideNotes: D.getSlideNotes.bind(D),
      getSlides: Ie,
      getHorizontalSlides: Oe,
      getVerticalSlides: Te,
      hasHorizontalSlides: je,
      hasVerticalSlides: ze,
      hasNavigatedHorizontally: function () {
        return c.hasNavigatedHorizontally;
      },
      hasNavigatedVertically: function () {
        return c.hasNavigatedVertically;
      },
      addKeyBinding: x.addKeyBinding.bind(x),
      removeKeyBinding: x.removeKeyBinding.bind(x),
      triggerKey: x.triggerKey.bind(x),
      registerKeyboardShortcut: x.registerKeyboardShortcut.bind(x),
      getComputedSlideSize: le,
      getScale: function () {
        return h;
      },
      getConfig: function () {
        return l;
      },
      getQueryHash: Po,
      getRevealElement: function () {
        return e;
      },
      getSlidesElement: function () {
        return v.slides;
      },
      getViewportElement: function () {
        return v.viewport;
      },
      getBackgroundsElement: function () {
        return k.element;
      },
      registerPlugin: M.registerPlugin.bind(M),
      hasPlugin: M.hasPlugin.bind(M),
      getPlugin: M.getPlugin.bind(M),
      getPlugins: M.getRegisteredPlugins.bind(M)
    };
    return (wo(s, ao(ao({}, ot), {}, {
      announceStatus: q,
      getStatusText: W,
      print: I,
      focus: O,
      progress: P,
      controls: C,
      location: L,
      overview: R,
      fragments: A,
      slideContent: w,
      slideNumber: S,
      onUserInput: et,
      closeOverlay: ae,
      updateSlidesVisibility: Le,
      layoutSlideContents: se,
      transformSlides: J,
      cueAutoSlide: _e,
      cancelAutoSlide: Ve
    })), ot);
  }
  var Ns = Ps, Ms = [];
  return (Ns.initialize = function (e) {
    return (Object.assign(Ns, new Ps(document.querySelector(".reveal"), e)), Ms.map(function (e) {
      return e(Ns);
    }), Ns.initialize());
  }, ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach(function (e) {
    Ns[e] = function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      Ms.push(function (t) {
        var i;
        return (i = t[e]).call.apply(i, [null].concat(n));
      });
    };
  }), Ns.isReady = function () {
    return !1;
  }, Ns.VERSION = Cs, Ns);
});

},{}]},["3vZPq","5kqcu"], "5kqcu", "parcelRequire3d4e")

//# sourceMappingURL=demo.291785ff.js.map
