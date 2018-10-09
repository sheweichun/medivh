MedivhRender(/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Rpc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rpc__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dev_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_index__ = __webpack_require__(4);







var Rpc = __WEBPACK_IMPORTED_MODULE_0__rpc__;
var Constant = __WEBPACK_IMPORTED_MODULE_1__constant__;
var Dev = __WEBPACK_IMPORTED_MODULE_2__dev_index__;
var Util = __WEBPACK_IMPORTED_MODULE_3__util_index__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_RENDER", function() { return GLOBAL_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_RENDER", function() { return COMPONENT_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION", function() { return LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID", function() { return ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCOMPONENT", function() { return VCOMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_TYPE", function() { return COMPONENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_ID", function() { return COMPONENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARENT_COMPONENT_ID", function() { return PARENT_COMPONENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF", function() { return REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIEF_CYCLE", function() { return LIEF_CYCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUN_CALLBACK", function() { return FUN_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIEF_CYCLE_CALLBACK", function() { return LIEF_CYCLE_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_PROPAGATION", function() { return STOP_PROPAGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVENT_DEFAULT", function() { return PREVENT_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_LIST", function() { return EVENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMPONENTIDS", function() { return REMOVE_COMPONENTIDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTOR", function() { return CONSTRUCTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE", function() { return INVOKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE_CALLBACK", function() { return INVOKE_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE_CALLBACK_ID", function() { return INVOKE_CALLBACK_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_CREATE", function() { return DOM_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_APPENDCHILD", function() { return DOM_APPENDCHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_INSERTBEFORE", function() { return DOM_INSERTBEFORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RENDER_PARAM", function() { return GET_RENDER_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_RENDER_PARAM", function() { return SEND_RENDER_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ELE", function() { return REMOVE_ELE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ELE", function() { return ADD_ELE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGGE_ELE", function() { return CHANGGE_ELE; });


var GLOBAL_RENDER = 'global_render';
var COMPONENT_RENDER = 'component_render';

var LOCATION = '$$location';
var ID = '$$com_fun_id';
var VCOMPONENT = '$$VCompoennt';
var STATE = '$$state';
var TYPE = '$$type';
var COMPONENT_TYPE = '$$ctp';
var COMPONENT_ID = '$$componentId';
var PARENT_COMPONENT_ID = '$$parentComponentId';
// export const HIDDEN_CONTEXT = '$$context';
var REF = '$$ref';
var LIEF_CYCLE = '$$lifecycle';

var FUN_CALLBACK = 'function_callback';
var LIEF_CYCLE_CALLBACK = 'lifecycle_callback';

var STOP_PROPAGATION = 'StopPropagation';
var PREVENT_DEFAULT = 'PreventDefault';
var EVENT_LIST = '$$event_list';
var IDENTITY = '$$identity';

// export const COMPONENT_DESTROY = '$$componentDestroy';
var REMOVE_COMPONENTIDS = 'removeComponentIdList';
var CONSTRUCTOR = '$$construct';
var INVOKE = '$$invoke';
var INVOKE_CALLBACK = '$$invoke_callback';
var INVOKE_CALLBACK_ID = '$$fun_id$$';

var DOM_CREATE = 'domCreate';
var DOM_APPENDCHILD = 'domAppendChild';
var DOM_INSERTBEFORE = 'domInsertBefore';

// export const TRIGGLE_WORKER_RENDER = '$$worker_start_rende';
var GET_RENDER_PARAM = '$$get_render_param';
var SEND_RENDER_PARAM = '$$send_render_param';

var REMOVE_ELE = 1;
var ADD_ELE = 2;
var CHANGGE_ELE = 3;

// export const VLIST = 'vlist';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["invoke"] = invoke;
/* harmony export (immutable) */ __webpack_exports__["init"] = init;


function invoke(type, data) {
  global.postMessage({
    type: type,
    data: data
  });
}

function init(cb) {
  if (global.addMessage) {
    global.addMessage(cb);
  } else {
    global.onmessage = function (_ref) {
      var data = _ref.data;

      cb(data);
    };
    // global.addEventListener('message', function({data}) {
    //   cb(data);
    // });
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isObject"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["isString"] = isString;
/* harmony export (immutable) */ __webpack_exports__["isFunc"] = isFunc;
/* harmony export (immutable) */ __webpack_exports__["isSymbol"] = isSymbol;
/* harmony export (immutable) */ __webpack_exports__["assign"] = assign;
/* harmony export (immutable) */ __webpack_exports__["toArray"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["isEvent"] = isEvent;
/* harmony export (immutable) */ __webpack_exports__["clonePropsByFilter"] = clonePropsByFilter;
/* harmony export (immutable) */ __webpack_exports__["toHump"] = toHump;
/* harmony export (immutable) */ __webpack_exports__["cloneArgs"] = cloneArgs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(1);
var _INVALID_ATTR_NAME_MA;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isFunc(obj) {
  return typeof obj === 'function';
}

function isSymbol(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'symbol';
}

function assign(obj) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    var newObj = args[i];
    if (newObj) {
      for (var _i in newObj) {
        obj[_i] = newObj[_i];
      }
    }
  }
  return obj;
}

function toArray(obj) {
  if (obj == null) return [];
  return isArray(obj) ? [].concat(obj) : [obj];
}

function isEvent(obj) {
  return obj && obj.hasOwnProperty('clientX') && obj.hasOwnProperty('clientY');
}

var INVALID_ATTR_NAME_MAP = (_INVALID_ATTR_NAME_MA = {
  children: true
}, _defineProperty(_INVALID_ATTR_NAME_MA, __WEBPACK_IMPORTED_MODULE_0__constant__["STATE"], true), _defineProperty(_INVALID_ATTR_NAME_MA, __WEBPACK_IMPORTED_MODULE_0__constant__["TYPE"], true), _defineProperty(_INVALID_ATTR_NAME_MA, 'key', true), _INVALID_ATTR_NAME_MA);

function clonePropsByFilter(obj) {
  var filterMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cb = arguments[2];

  var newObj = {};
  for (var attr in obj) {
    if (filterMap[attr]) continue;
    if (cb && !INVALID_ATTR_NAME_MAP[attr]) {
      newObj[attr] = cb(obj[attr], attr);
    } else {
      newObj[attr] = obj[attr];
    }
  };
  return newObj;
}

// export function cloneEvent(obj,filterMap={}){
//     const newObj = {};
//     for (let attr in obj){
//         if(filterMap[attr] || attr.charAt(0) === '_') continue;
//         newObj[attr] = obj[attr];
//     };
//     return newObj;
// }

function toHump(str) {
  return str.replace(/^\S/, function (val) {
    return val.toUpperCase();
  });
}

function cloneArgs(args) {
  var dep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  if (dep < 0 || isSymbol(args)) return null;
  if (isArray(args)) {
    return args.map(function (item) {
      return cloneArgs(item, dep - 1);
    });
  } else if (isObject(args)) {
    return Object.keys(args).reduce(function (ret, name) {
      ret[name] = args[name] ? cloneArgs(args[name], dep - 1) : args[name];
      return ret;
    }, {});
  } else if (isFunc(args)) {
    return null;
  }
  return args;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = postMessage;
/* harmony export (immutable) */ __webpack_exports__["a"] = genOnMessage;


function postMessage(worker, data) {
  worker.postMessage(data);
}

function genOnMessage(cb) {
  return function (_ref) {
    var data = _ref.data;

    cb(data);
  };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_index__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_0__render_index__["a"]; });




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__load_worker__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoke__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(5);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';






var cloneArgs = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].cloneArgs,
    isEvent = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isEvent,
    isArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isArray,
    isString = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isString,
    assign = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].assign;
var devHandle = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["b" /* Dev */].devHandle;
var GLOBAL_RENDER = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].GLOBAL_RENDER,
    COMPONENT_RENDER = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_RENDER,
    INVOKE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE,
    FUN_CALLBACK = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].FUN_CALLBACK,
    GET_RENDER_PARAM = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].GET_RENDER_PARAM,
    SEND_RENDER_PARAM = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].SEND_RENDER_PARAM,
    LIEF_CYCLE_CALLBACK = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LIEF_CYCLE_CALLBACK,
    STOP_PROPAGATION = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].STOP_PROPAGATION,
    PREVENT_DEFAULT = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].PREVENT_DEFAULT,
    LOCATION = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LOCATION;


function genPostLifeCycleMessage(worker) {
  return function (componentId, cycleName, args) {
    Object(__WEBPACK_IMPORTED_MODULE_5__util__["b" /* postMessage */])(worker, {
      type: LIEF_CYCLE_CALLBACK,
      data: {
        id: componentId,
        cycleName: cycleName,
        params: []
      }
    });
  };
}
function generateFunProxy(worker) {
  return function (attrName, componentId, funId, targetProps) {
    for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      args[_key - 4] = arguments[_key];
    }

    var newArgs = args.map(function (arg) {
      if (isEvent(arg)) {
        var preventDefaultFlag = targetProps['' + attrName + PREVENT_DEFAULT];
        var stopPropagationFlag = targetProps['' + attrName + STOP_PROPAGATION];
        if (preventDefaultFlag) {
          arg.preventDefault && arg.preventDefault();
        }
        if (stopPropagationFlag) {
          arg.stopPropagation && arg.stopPropagation();
        }
        return {
          metaKey: arg.metaKey,
          altKey: arg.altKey,
          ctrlKey: arg.ctrlKey,
          shiftKey: arg.shiftKey,
          button: arg.button
        };
      }
      return arg;
    });
    var sendArgs = cloneArgs(newArgs);
    Object(__WEBPACK_IMPORTED_MODULE_5__util__["b" /* postMessage */])(worker, {
      type: FUN_CALLBACK,
      data: {
        id: funId,
        componentId: componentId,
        params: sendArgs
      }
    });
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (option) {
  var workers = option.workers,
      vdom = option.vdom,
      vdomRender = option.vdomRender,
      uiFrameworks = option.uiFrameworks,
      context = option.context;

  var preWorkerList = isArray(workers) ? workers : [workers];
  var workerList = [];
  var initFlag = false;
  var uiFrameworkList = isArray(uiFrameworks) ? uiFrameworks : [uiFrameworks];
  var invokeContext = context || {};
  var instance = {
    addWorker: function addWorker(preWorkerItem) {
      var _this2 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_1__load_worker__["a" /* default */])(preWorkerItem).then(function (workerItem) {
        var ret = _this2.initWorker(workerItem);
        workerList.push(ret);
        return ret;
      });
    },
    getWorkerList: function getWorkerList() {
      return workerList;
    },
    registerContext: function registerContext(namespace, ctx) {
      invokeContext[namespace] = ctx;
    },
    registerFrameWorker: function registerFrameWorker(newUIFramework) {
      uiFrameworkList.push(newUIFramework);
    },
    initWorkerList: function initWorkerList() {
      var _this3 = this;

      if (initFlag) return;
      initFlag = true;
      preWorkerList.forEach(function (preWorkerItem) {
        Object(__WEBPACK_IMPORTED_MODULE_1__load_worker__["a" /* default */])(preWorkerItem).then(function (workerItem) {
          workerList.push(_this3.initWorker(workerItem));
        }, function (err) {
          console.error(err);
        });
      });
    },
    removeWorker: function removeWorker(workItem) {
      for (var i = 0; i < workerList.length; i++) {
        if (workerList[i] === workItem) {
          workerList.splice(i, 1);
          return;
        }
      }
    },
    initWorker: function initWorker(workerItem) {
      var _this = this;
      try {
        var worker = workerItem.worker,
            el = workerItem.el,
            bundleJs = workerItem.bundleJs,
            cssEls = workerItem.cssEls,
            cssUrls = workerItem.cssUrls,
            query = workerItem.query,
            hash = workerItem.hash;

        workerItem.destroy = function (clear) {
          if (clear) {
            if (vdomRender && vdomRender.unmountComponentAtNode) {
              vdomRender.unmountComponentAtNode(el);
              el.innerHTML = '';
            }
            Object(__WEBPACK_IMPORTED_MODULE_1__load_worker__["b" /* removeCssEls */])(cssEls);
          }
          worker.terminate();
          _this.removeWorker(this);
        };
        workerItem.reload = function () {
          this.destroy();
          if (bundleJs) {
            _this.addWorker({
              el: el,
              worker: bundleJs,
              cssUrls: cssUrls
            });
          }
        };
        workerItem.componentMap = Object(__WEBPACK_IMPORTED_MODULE_4__component_map__["a" /* default */])(workerItem);
        var parser = Object(__WEBPACK_IMPORTED_MODULE_2__parse__["a" /* default */])({
          React: vdom,
          ReactDOM: vdomRender,
          componentMap: workerItem.componentMap,
          UIFrameworks: uiFrameworkList,
          FunProxy: generateFunProxy(worker),
          postLifeCycleMessage: genPostLifeCycleMessage(worker)
        });
        worker.onmessage = Object(__WEBPACK_IMPORTED_MODULE_5__util__["a" /* genOnMessage */])(function (data) {
          var type = data.type;

          if (type === GLOBAL_RENDER) {
            var renderData = data.data.data;

            vdomRender.render(parser(renderData), el);
          } else if (type === COMPONENT_RENDER) {
            var _data$data = data.data,
                stateData = _data$data.data,
                componentId = _data$data.componentId;

            var target = workerItem.componentMap.get(componentId);
            if (!target) return;
            target.setState({
              data: parser(stateData)
            });
          } else if (type === INVOKE) {
            var _data$data2 = data.data,
                api = _data$data2.api,
                params = _data$data2.params,
                method = _data$data2.method,
                success = _data$data2.success,
                error = _data$data2.error;

            if (__WEBPACK_IMPORTED_MODULE_3__invoke__["a" /* default */][method]) {
              // console.log('api :', api, params);
              __WEBPACK_IMPORTED_MODULE_3__invoke__["a" /* default */][method](invokeContext, api, Object(__WEBPACK_IMPORTED_MODULE_3__invoke__["b" /* deserialize */])(params, worker, parser), Object(__WEBPACK_IMPORTED_MODULE_3__invoke__["b" /* deserialize */])(success, worker, parser), Object(__WEBPACK_IMPORTED_MODULE_3__invoke__["b" /* deserialize */])(error, worker, parser));
            }
          } else if (type === GET_RENDER_PARAM) {
            Object(__WEBPACK_IMPORTED_MODULE_5__util__["b" /* postMessage */])(worker, {
              type: SEND_RENDER_PARAM,
              data: assign({}, query, _defineProperty({}, LOCATION, {
                hash: hash || location.hash,
                host: location.host,
                hostname: location.hostname,
                href: location.href,
                origin: location.origin,
                pathname: location.pathname,
                port: location.port,
                protocol: location.protocol
              }))
            });
          }
          devHandle(data, worker);
        });
        return workerItem;
      } catch (e) {
        console.error(e);
      }
    }
  };
  instance.initWorkerList();
  return instance;
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["devHook"] = devHook;
/* harmony export (immutable) */ __webpack_exports__["devHandle"] = devHandle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rpc_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





function devHook() {
  if (true) {
    var genId = function genId() {
      return PREFIX + '-' + ++count;
    };

    var PREFIX = 'webworkerstyle';
    var count = 0;

    var Element = function () {
      function Element(tag, isQuery) {
        _classCallCheck(this, Element);

        this.tag = tag;
        this.nodeType = 1;
        this[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]] = genId();
        this.isQuery = isQuery;
        this.attrs = Object.create(null);
        this.child = [];
        this.childJS = [];
        this.firstChild = null;
        this.lastChild = null;
        this.nextSibling = null;
        if (!isQuery) {
          Object(__WEBPACK_IMPORTED_MODULE_1__rpc_index__["invoke"])(__WEBPACK_IMPORTED_MODULE_0__constant__["DOM_CREATE"], this.toJS());
        }
      }

      _createClass(Element, [{
        key: 'setAttribute',
        value: function setAttribute(key, value) {
          this.attrs[key] = value;
        }
      }, {
        key: 'appendChild',
        value: function appendChild(item) {
          var _invoke;

          var ele = item.toJS();
          var tag = this.tag,
              nodeType = this.nodeType,
              isQuery = this.isQuery,
              attrs = this.attrs;

          var beforeLastChild = this.child[this.child.length - 1];
          if (beforeLastChild) {
            beforeLastChild.nextSibling = item;
          }
          this.child.push(item);
          this.childJS.push(ele);
          this.firstChild = this.child[0];
          this.lastChild = this.child[this.child.length - 1];
          Object(__WEBPACK_IMPORTED_MODULE_1__rpc_index__["invoke"])(__WEBPACK_IMPORTED_MODULE_0__constant__["DOM_APPENDCHILD"], (_invoke = {
            tag: tag,
            nodeType: nodeType,
            isQuery: isQuery,
            attrs: attrs
          }, _defineProperty(_invoke, __WEBPACK_IMPORTED_MODULE_0__constant__["ID"], this[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]]), _defineProperty(_invoke, 'child', [ele]), _invoke));
        }
      }, {
        key: 'insertBefore',
        value: function insertBefore(item, target) {
          var index = -1,
              targetEl = void 0;
          var ele = item.toJS();
          for (var i = 0; i < this.child.length; i++) {
            targetEl = this.child[i];
            if (targetEl[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]] === target[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]]) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            return;
          }
          var beforeSibling = this.child[index - 1];
          beforeSibling && (beforeSibling.nextSibling = item);
          item.nextSibling = target;
          this.child.splice(index, 0, item);
          this.childJS.splice(index, 0, ele);
          this.firstChild = this.child[0];
          this.lastChild = this.child[this.child.length - 1];
          Object(__WEBPACK_IMPORTED_MODULE_1__rpc_index__["invoke"])(__WEBPACK_IMPORTED_MODULE_0__constant__["DOM_INSERTBEFORE"], {
            opr: this.toJS(),
            ele: ele,
            target: target.toJS()
          });
        }
      }, {
        key: 'toJS',
        value: function toJS() {
          var tag = this.tag,
              nodeType = this.nodeType,
              isQuery = this.isQuery,
              attrs = this.attrs,
              childJS = this.childJS;

          return _defineProperty({
            tag: tag,
            nodeType: nodeType,
            isQuery: isQuery,
            attrs: attrs,
            child: childJS
          }, __WEBPACK_IMPORTED_MODULE_0__constant__["ID"], this[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]]);
        }
      }]);

      return Element;
    }();

    var Text = function () {
      function Text(content) {
        _classCallCheck(this, Text);

        this.nodeType = 3;
        this.content = content;
        this[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]] = genId();
        Object(__WEBPACK_IMPORTED_MODULE_1__rpc_index__["invoke"])(__WEBPACK_IMPORTED_MODULE_0__constant__["DOM_CREATE"], this.toJS());
      }

      _createClass(Text, [{
        key: 'toJS',
        value: function toJS() {
          var nodeType = this.nodeType,
              content = this.content;

          return _defineProperty({
            nodeType: nodeType,
            content: content
          }, __WEBPACK_IMPORTED_MODULE_0__constant__["ID"], this[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]]);
        }
      }]);

      return Text;
    }();

    global.window = {};
    global.document = {
      createElement: function createElement(tag) {
        return new Element(tag);
      },
      querySelector: function querySelector(target) {
        return new Element(target, true);
      },

      createTextNode: function createTextNode(content) {
        return new Text(content);
      }
    };
  }
}

function devHandle(data, worker) {
  if (true) {
    var getElement = function getElement(data) {
      if (data.isQuery) {
        return document.querySelector(data.tag);
      }
      return domMap.get(data[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]]);
    };

    var parse = function parse(data) {
      if (data == null) return data;
      if (Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["isArray"])(data)) {
        return data.map(function (item) {
          return parse(item);
        });
      }
      var tag = data.tag,
          nodeType = data.nodeType,
          isQuery = data.isQuery,
          attrs = data.attrs,
          child = data.child,
          content = data.content;

      var eleChild = parse(child);
      var ele = getElement(data);
      var attrsKeys = attrs ? Object.keys(attrs) : null;
      attrsKeys && attrsKeys.forEach(function (name) {
        ele.setAttribute(name, attrs[name]);
      });
      eleChild && ele && eleChild.forEach(function (ch) {
        ele.appendChild(ch);
      });
      return ele;
    };

    var createElement = function createElement(data) {
      var tag = data.tag,
          nodeType = data.nodeType,
          content = data.content;

      var ele = void 0;
      if (nodeType === 1) {
        ele = document.createElement(tag);
      } else {
        ele = document.createTextNode(content);
      }
      domMap.set(data[__WEBPACK_IMPORTED_MODULE_0__constant__["ID"]], ele);
    };

    var insertBefore = function insertBefore(vopr, vele, vtarget) {
      var opr = getElement(vopr);
      var ele = getElement(vele);
      var target = getElement(vtarget);
      opr.insertBefore(ele, target);
    };

    var domMap = worker.domMap;
    if (domMap == null) {
      domMap = worker.domMap = new Map();
    }
    var type = data.type;

    if (type === __WEBPACK_IMPORTED_MODULE_0__constant__["DOM_CREATE"]) {
      createElement(data.data);
    } else if (type === __WEBPACK_IMPORTED_MODULE_0__constant__["DOM_APPENDCHILD"]) {
      parse(data.data);
    } else if (type === __WEBPACK_IMPORTED_MODULE_0__constant__["DOM_INSERTBEFORE"]) {
      var _data$data = data.data,
          opr = _data$data.opr,
          ele = _data$data.ele,
          target = _data$data.target;

      insertBefore(opr, ele, target);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = removeCssEls;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);



var isString = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isString,
    isArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isArray,
    isObject = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isObject,
    assign = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].assign;

var JS_CACHE = Object.create(null);
var workerId = 1;

// function generateQuery(param = {}) {
//   const paramStr = JSON.stringify(param);
//   return `?query=${paramStr}&hash=${location.hash}`;
// }

// function appendQuery(url, param = {luodan: 444}) {
//   if (param == null || url == null) return url;
//   const hashIndex = url.indexOf('#');
//   let hashStr = location.hash;
//   if (hashIndex >= 0) {
//     url = url.substring(0, hashIndex);
//   }
//   const askIndex = url.indexOf('?');
//   const paramStr = JSON.stringify(param);
//   const queryStr = encodeURIComponent(`query=${paramStr}&hash=${hashStr}`);
//   if (askIndex >= 0) {
//     if (url.charAt(url.length - 1) === '&') {
//       return `${url}${queryStr}`;
//     }
//     return `${url}${queryStr ? '&' + queryStr : queryStr}`;
//   }
//   return `${url}${queryStr ? '?' + queryStr : queryStr}`;
// }

function createWorker(content, url) {
  // content = `
  // console.log('location11123')
  // (function(global,$$search){
  //   // console.log('location1112 :',location,global,$$search)
  //   ${content}
  // }({

  // }),"${generateQuery(query)}")`;
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
        blob = new BlobBuilder();
        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }
      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (url) {
      // throw Error('Inline worker is not supported');
      return new Worker(url);
    }

    // return new Worker(url);
  }
}

var docHead = void 0;
function loadCss(cssUrl) {
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = cssUrl;
  if (!docHead) {
    docHead = document.getElementsByTagName('head')[0];
  }
  docHead.appendChild(link);
  return link;
}

function loadCssList(cssUrlList) {
  return cssUrlList.map(function (cssURL) {
    return loadCss(cssURL);
  });
}

function removeCssEls(cssEls) {
  if (cssEls == null) return;
  return cssEls.forEach(function (el) {
    docHead.removeChild(el);
  });
}

function toArray(obj) {
  if (obj == null) return [];
  if (isArray(obj)) {
    return obj;
  }
  return [obj];
}

function get(url, cache) {
  return new Promise(function (resolve, reject) {
    var urlResp = JS_CACHE[url];
    if (cache && urlResp) {
      return resolve(urlResp);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function () {
      if (cache) {
        JS_CACHE[url] = this.responseText;
      }
      return resolve(this.responseText);
    }, false);
    oReq.addEventListener('abort', reject, false);
    oReq.addEventListener('error', reject, false);
    oReq.open('get', url, true);
    oReq.send();
  });
}

function getList() {
  var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var splitChar = arguments[1];

  return Promise.all(urls.map(function (url) {
    if (isObject(url)) {
      return get(url.url, url.cache);
    }
    return get(url);
  })).then(function (resps) {
    return resps.join(splitChar);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function (item) {
  var worker = item.worker,
      preEl = item.el,
      cssUrls = item.cssUrls,
      jsUrls = item.jsUrls,
      _item$jsCodes = item.jsCodes,
      jsCodes = _item$jsCodes === undefined ? '' : _item$jsCodes,
      _item$splitChar = item.splitChar,
      splitChar = _item$splitChar === undefined ? '\n' : _item$splitChar;

  var el = isString(preEl) ? document.getElementById(preEl) : preEl;
  var cssUrlList = toArray(cssUrls);
  var jsUrlList = toArray(jsUrls);
  return new Promise(function (resolve, reject) {
    if (worker == null) return reject(new Error('worker不能为空'));
    if (worker instanceof Worker) {
      worker.id = workerId++;
      return resolve(assign({}, item, {
        bundleJs: '',
        worker: worker,
        el: el,
        cssEls: loadCssList(cssUrlList)
      }));
    }
    getList([].concat(jsUrlList, worker), splitChar).then(function (responseText) {
      var loadedWorker = createWorker(jsCodes + responseText, null);
      loadedWorker.id = workerId++;
      return resolve(assign({}, item, {
        bundleJs: worker,
        worker: loadedWorker,
        el: el,
        cssEls: loadCssList(cssUrlList)
      }));
    }, reject);
  });
});;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vcomponent__ = __webpack_require__(11);
var _FILTER_ATTR_MAP;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var isArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isArray,
    isObject = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isObject,
    toHump = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].toHump;
var VCOMPONENT = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].VCOMPONENT,
    STATE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].STATE,
    ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].ID,
    COMPONENT_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_ID,
    LIEF_CYCLE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LIEF_CYCLE,
    COMPONENT_TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_TYPE,
    TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].TYPE;


var FILTER_ATTR_MAP = (_FILTER_ATTR_MAP = {}, _defineProperty(_FILTER_ATTR_MAP, STATE, true), _defineProperty(_FILTER_ATTR_MAP, TYPE, true), _FILTER_ATTR_MAP);

var typeMap = new Map();

function extractUIComponent(frameworks, type) {
  var cacheComponent = typeMap.get(type);
  if (cacheComponent) {
    return cacheComponent;
  }
  var typeList = type.split('-');
  var target = void 0;
  for (var i = 0; i < frameworks.length; i++) {
    target = frameworks[i];
    for (var _i = 0; _i < typeList.length; _i++) {
      var item = toHump(typeList[_i]);
      // console.log('item :',item);
      target = target[item];
      if (target == null) break;
    }
    if (target) {
      break;
    }
  }
  // console.log('target :',target,type);
  typeMap.set(type, target);
  return target;
}

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var React = _ref.React,
      ReactDOM = _ref.ReactDOM,
      UIFrameworks = _ref.UIFrameworks,
      FunProxy = _ref.FunProxy,
      postLifeCycleMessage = _ref.postLifeCycleMessage,
      componentMap = _ref.componentMap;

  var VComponent = Object(__WEBPACK_IMPORTED_MODULE_1__vcomponent__["a" /* default */])({ React: React, ReactDOM: ReactDOM, postLifeCycleMessage: postLifeCycleMessage, componentMap: componentMap });
  function parse(data, index) {
    if (data == null) return;
    if (isArray(data)) {
      return data.map(function (item, index) {
        return parse(item, index);
      });
    } else if (!isObject(data) || !data[COMPONENT_TYPE]) {
      return data;
    }
    var componentId = data.componentId,
        props = data.props,
        children = data.children,
        lifeCycle = data.lifeCycle;

    var type = data[COMPONENT_TYPE];
    var RenderComponent = type;
    var newProps = {};
    if (props) {
      for (var name in props) {
        var item = props[name];
        if (item && item[ID]) {
          newProps[name] = FunProxy.bind(null, name, componentId, item[ID], props);
        } else if (!FILTER_ATTR_MAP[name]) {
          newProps[name] = parse(props[name]);
        }
      }
      if (props[STATE]) {
        newProps[STATE] = parse(props[STATE]);
      }
    }
    if (VCOMPONENT === type) {
      RenderComponent = VComponent;
      newProps[COMPONENT_ID] = componentId;
      newProps[LIEF_CYCLE] = lifeCycle;
    } else if (UIFrameworks) {
      var humpComponent = extractUIComponent(UIFrameworks, type);
      humpComponent && (RenderComponent = humpComponent);
    }
    // if (index != null && newProps.key == null) {
    //   newProps.key = componentId;
    // }
    // if (componentId) {
    //   newProps.key = componentId;
    // }
    if (componentId) {
      newProps.key = props && props.key != null ? props.key : componentId;
    }
    // if (newProps.$$construct) {
    //   console.log('newProps :', newProps);
    // }
    // props[COMPONENT_ID] = componentId;
    // props[LIEF_CYCLE] = lifeCycle;
    var renderChildren = children ? parse(children) : [];
    var retComponent = React.createElement.apply(React, [RenderComponent, newProps].concat(_toConsumableArray(renderChildren)));
    return retComponent;
  }
  return parse;
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var COMPONENT_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_ID,
    LIEF_CYCLE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LIEF_CYCLE,
    STATE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].STATE;
// import ComponentMap from './component_map';


function registerLifeCycle(component, postLifeCycleMessage) {
  var cycleMap = component.props[LIEF_CYCLE];
  Object.keys(cycleMap).forEach(function (name) {
    var method = component[name];
    component[name] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      method && method.apply(component, args);
      postLifeCycleMessage(component[COMPONENT_ID], name, args);
    };
  });
}

// function proxyComponentWillUnmount(obj){
//     if(obj.componentWillUnmount){
//         const method = obj.componentWillUnmount;
//         obj.componentWillUnmount = function(...args){
//             ComponentMap.unregister(obj)
//             return method.apply(obj,args)
//         }
//     }else{
//         obj.componentWillUnmount = function(){
//             ComponentMap.unregister(obj);
//         }
//     }
// }

function replaceComponentId(obj, nextProps, componentMap) {
  var newId = nextProps[COMPONENT_ID];
  if (newId) {
    var oldId = obj[COMPONENT_ID];
    obj[COMPONENT_ID] = newId;
    componentMap.replace(oldId, obj);
  }
}

// function proxyComponentWillReceiveProps(obj){
//     if(obj.componentWillReceiveProps){
//         const method = obj.componentWillReceiveProps;
//         obj.componentWillReceiveProps = function(nextProps){
//             replaceComponentId(obj,nextProps);
//             return method.apply(obj,nextProps)
//         }
//     }else{
//         obj.componentWillReceiveProps = function(nextProps){
//             console.log('nextProps :',nextProps);
//             replaceComponentId(obj,nextProps);
//         }
//     }
// }

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var React = _ref.React,
      ReactDOM = _ref.ReactDOM,
      postLifeCycleMessage = _ref.postLifeCycleMessage,
      componentMap = _ref.componentMap;

  return function (_React$Component) {
    _inherits(VComponent, _React$Component);

    function VComponent(props) {
      _classCallCheck(this, VComponent);

      var _this = _possibleConstructorReturn(this, (VComponent.__proto__ || Object.getPrototypeOf(VComponent)).call(this, props));

      if (props[COMPONENT_ID]) {
        _this[COMPONENT_ID] = props[COMPONENT_ID];
        componentMap.register(_this);
      }
      _this[COMPONENT_ID] = props[COMPONENT_ID];
      registerLifeCycle(_this, postLifeCycleMessage);
      // proxyComponentWillUnmount(this);
      // const {$$state} = props;
      _this.state = {
        data: props[STATE]
      };
      return _this;
    }

    _createClass(VComponent, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // console.log(this.props[COMPONENT_ID]);
        componentMap.unregister(this);
      }
      // componentDidMount(){
      //     console.log('did mount',this.props);
      // }
      // componentDidUpdate(){
      //     console.log('did update');
      // }

    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.state.data = nextProps[STATE];
        replaceComponentId(this, nextProps, componentMap);
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.state.data;

        return data == null ? '' : data;
      }
    }]);

    return VComponent;
  }(React.Component);
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = deserialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



var INVOKE_CALLBACK = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE_CALLBACK,
    ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].ID,
    INVOKE_CALLBACK_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE_CALLBACK_ID;
var isArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isArray,
    isObject = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Util */].isObject;


function genProxyFunction(funId, worker) {
  var ret = function ret() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* postMessage */])(worker, {
      type: INVOKE_CALLBACK,
      data: {
        params: args,
        id: funId
      }
    });
  };
  ret[ID] = funId;
  return ret;
}
function getContextAndTarget(context, api) {
  if (!api) return {};
  var apiList = api.split('.');
  var ret = apiList.reduce(function (ret, name) {
    ret.context = ret.target;
    if (ret.target) {
      ret.target = ret.target[name];
    }
    return ret;
  }, { context: null, target: context });
  return ret;
}

function deserialize(data, worker, parser) {
  if (data == null) return;
  if (isArray(data)) {
    return data.map(function (item) {
      return deserialize(parser(item), worker, parser);
    });
  }
  data = parser(data);
  if (isObject(data)) {
    // 此处为兼容性代码，应用只需要去data[ID]，INVOKE_CALLBACK_ID是为了兼容老的
    var fun_flag_id = data[ID] || data[INVOKE_CALLBACK_ID];
    if (fun_flag_id) {
      // 组件里的函数标识
      return genProxyFunction(fun_flag_id, worker);
    } else {
      var ret = {};
      for (var attr in data) {
        ret[attr] = deserialize(parser(data[attr]), worker, parser);
      }
    }
  }
  return data;
}

var Invoker = {
  invokeContextCallback: function invokeContextCallback(context, api, params) {
    var ret = getContextAndTarget(context, api);
    if (ret.context && ret.target) {
      ret.target.apply(ret.context, params);
    }
  },
  invokeContextPromise: function invokeContextPromise(context, api, params, success, error) {
    var ret = getContextAndTarget(context, api);
    if (ret.context && ret.target) {
      try {
        var result = ret.target.apply(ret.context, params);
        if (result && result.then) {
          result.then(success, error);
          return;
        } else {
          success && success(result);
          return;
        }
      } catch (e) {
        error && error(e.message);
        return;
      }
    } else {
      error && error('\u6B64API\u3010' + api + '\u3011\u4E0D\u5B58\u5728');
    }
  }
  //   invokeContextSync(context, api, params, success, error) {
  //     const ret = getContextAndTarget(context, api);
  //     if (ret.context && ret.target) {
  //       try {
  //         const result = ret.target.apply(ret.context, params);
  //         success && success(result);
  //       } catch (e) {
  //         error && error(e.message);
  //       }
  //     }
  //   }

};

/* harmony default export */ __webpack_exports__["a"] = (Invoker);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);



var COMPONENT_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_ID;

// const Cache = new Map();

/* harmony default export */ __webpack_exports__["a"] = (function (worker) {
  var Cache = new Map();
  return {
    register: function register(component) {
      Cache.set(component[COMPONENT_ID], component);
    },
    replace: function replace(oldId, component) {
      Cache.delete(oldId);
      Cache.set(component[COMPONENT_ID], component);
    },
    unregister: function unregister(component) {
      Cache.delete(component[COMPONENT_ID]);
    },
    get: function get(id) {
      return Cache.get(id);
    }
    // show(){
    //     Cache.forEach(function(value, key, mapObj) {
    //         console.log(value + '---' + key + '---' + mapObj);
    //     });
    // }

  };
});

/***/ })
/******/ ]));;
//# sourceMappingURL=medivh-render.jsonp.js.map