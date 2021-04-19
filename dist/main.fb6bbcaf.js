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
})({"js/main.js":[function(require,module,exports) {
var $ = function $(s) {
  return document.querySelector(s);
};

var $$ = function $$(s) {
  return document.querySelectorAll(s);
};

var isMain = function isMain(str) {
  return /^#{1,2}(?!#)/.test(str);
};

var isSub = function isSub(str) {
  return /^#{3}(?!#)/.test(str);
};

var convert = function convert(raw) {
  var arr = raw.split(/\n(?=\s*#)/).filter(function (s) {
    return s != "";
  }).map(function (s) {
    return s.trim();
  });
  var html = '';

  for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined) {
      if (isMain(arr[i]) && isMain(arr[i + 1])) {
        html += "\n                        <section data-markdown>\n                        <textarea data-template>\n                        ".concat(arr[i], "\n                        </textarea>\n                        </section>\n                    ");
      } else if (isMain(arr[i]) && isSub(arr[i + 1])) {
        html += "\n                        <section>\n                        <section data-markdown>\n                        <textarea data-template>\n                        ".concat(arr[i], "\n                        </textarea>\n                        </section>\n                    ");
      } else if (isSub(arr[i]) && isSub(arr[i + 1])) {
        html += "\n                        <section data-markdown>\n                        <textarea data-template>\n                        ".concat(arr[i], "\n                        </textarea>\n                        </section>\n                    ");
      } else if (isSub(arr[i]) && isMain(arr[i + 1])) {
        html += "\n                        <section data-markdown>\n                        <textarea data-template>\n                        ".concat(arr[i], "\n                        </textarea>\n                        </section>\n                        </section>\n                    ");
      }
    } else {
      if (isMain(arr[i])) {
        html += "\n                        <section data-markdown>\n                        <textarea data-template>\n                        ".concat(arr[i], "\n                        </textarea>\n                        </section>\n                    ");
      } else if (isSub(arr[i])) {
        html += "\n                        <section data-markdown>\n                        <textarea data-template>\n                        ".concat(arr[i], "\n                        </textarea>\n                        </section>\n                        </section>\n                    ");
      }
    }
  }

  return html;
}; // // 把 markdown 变成符合要求的 HTML


var Menu = {
  // menu 模块
  init: function init() {
    console.log('menu init...');
    this.$settingIcon = $('.control .icon-setting');
    this.$menu = $('.menu');
    this.$closeIcon = $('.menu .icon-close'); // 命名技巧：如果是 DOM 对象，就用 $name 这种形式，以作区分。

    this.bind();
  },
  bind: function bind() {
    var _this = this;

    // 绑定数据
    // let xxx = this // 不用箭头函数也可以一开始将 this 保存下来
    this.$settingIcon.onclick = function () {
      _this.$menu.classList.add('open'); // xxx.$menu.classList.add('open')
      // 能用 class 来切换的样式变化，尽量用 class 来做。这也方便后期修改样式。

    };

    this.$closeIcon.onclick = function () {
      _this.$menu.classList.remove('open');
    };
  }
};
var Editor = {
  init: function init() {
    // 初始化
    console.log('editor init...');
  }
};
var App = {
  // App 模块
  init: function init() {
    Array.prototype.slice.call(arguments).forEach(function (Module) {
      return Module.init();
    });
  }
};
App.init(Menu, Editor); // 初始化 App 的时候也初始化 menu

function loadMarkdown(raw) {
  localStorage.markdown = raw;
  location.reload();
} // 把用户输入的 raw 存进 localStorage 并刷新页面


function start() {
  var TPL = "# One Slide";
  var html = convert(localStorage.markdown || TPL);
  document.querySelector('.slides').innerHTML = html;
  Reveal.initialize({
    controls: true,
    progress: true,
    center: true,
    hash: true,
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
  });
} // 看有没有 localStorage，将 localStorage/TPL 赋值给 html ，
// 然后把 html 放进 .slides 里面，然后渲染页面。


start(); // 每次进来都会先运行 start() 函数
// 用户进来先会触发 start() ，此时没有 localStorage 所以页面上
// 只有 TPL，然后用户开始写 markdown，用户写好点击保存，会触发
// loadMarkdown，loadMarkdown 将用户的 markdown 保存进
// localStorage.markdown ，然后重新刷新页面，又会再执行一次 start() ，
// 这次触发 start() ，页面上就会显示由用户刚保存的 markdown 生成的页面。
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57354" + '/');

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
},{}]},{},["../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map