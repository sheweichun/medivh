MedivhRuntime(/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Rpc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rpc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dev_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_index__ = __webpack_require__(6);







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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);


var COMPONENT_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_ID,
    INVOKE_CALLBACK_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE_CALLBACK_ID;

var PREFIX = 'webworker';
var Cache = new Map();
var ComponentCounter = 1;
var PureFunCounter = 1;
var pureFunMap = new Map();

var FunMap = {
  registerComponent: function registerComponent(component) {
    var componentId = PREFIX + '-' + ComponentCounter++;
    var record = new Map();
    record.set('data', new Map());
    record.set('children', []);
    record.set('counter', 1);
    record.set('component', component);
    Cache.set(componentId, record);
    // console.log('register :', componentId, component);
    component[COMPONENT_ID] = componentId;
    return componentId;
  },
  show: function show() {
    console.log('size :', Cache.size);
  },
  registerParentComponent: function registerParentComponent(parentComponentId, componentId) {
    if (parentComponentId != null) {
      var parentRecord = Cache.get(parentComponentId);
      if (parentRecord) {
        var parentRecordChildren = parentRecord.get('children');
        parentRecordChildren.push(componentId);
      }
    }
  },
  removeFun: function removeFun(componentId) {
    var record = Cache.get(componentId);
    var recordData = record.get('data');
    recordData.clear();
  },
  pushRelativeIdByFunId: function pushRelativeIdByFunId(funId, relativeId) {
    var item = pureFunMap.get(funId);
    if (item) {
      item.relativeIds.push(relativeId);
    }
  },
  registerFun: function registerFun(componentId, context, method, relativeIds, keeped) {
    // console.log('componentId :', componentId);
    if (method[INVOKE_CALLBACK_ID]) {
      return method[INVOKE_CALLBACK_ID];
    }
    if (componentId == null) {
      var funId = 'funCallback-' + PureFunCounter++;
      method[INVOKE_CALLBACK_ID] = funId;
      pureFunMap.set(funId, {
        value: method,
        keeped: keeped || method.$$keep,
        relativeIds: relativeIds || []
      });
      return funId;
    }
    var record = Cache.get(componentId);
    var counter = record.get('counter') + 1;
    record.set('counter', counter);
    var id = componentId + '-' + counter;
    var recordData = record.get('data');
    recordData.set(id, { context: context, method: method });
    // console.log('Cache :',Cache,Cache.size);
    return id;
  },
  unregisterByComponentId: function unregisterByComponentId(parentComponentId) {
    var record = Cache.get(parentComponentId);
    if (record == null) return;
    var children = record.get('children');
    children.forEach(function (child) {
      FunMap.unregisterByComponentId(child);
      // console.log('unregisterComponent :', child);
      Cache.delete(child);
    });
    // Cache.reduc
    // ComponentCounter = 
  },
  deleteByComponentId: function deleteByComponentId(componentId) {
    FunMap.unregisterByComponentId(componentId);
    // console.log('unregisterComponent :', componentId);
    Cache.delete(componentId);
  },
  getComponent: function getComponent(componentId) {
    return Cache.get(componentId).get('component');
  },
  deletePureFun: function deletePureFun(id) {
    return pureFunMap.delete(id);
  },
  getPureFun: function getPureFun(id) {
    return pureFunMap.get(id);
  },
  getFun: function getFun(componentId, id) {
    if (componentId == null) {
      var pureFun = pureFunMap.get(id);
      return pureFun.value;
    }
    var record = Cache.get(componentId);
    if (record == null) return record;
    return record.get('data').get(id);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (FunMap);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = instantial;
/* harmony export (immutable) */ __webpack_exports__["b"] = isComponent;
/* unused harmony export isComponentClass */
/* harmony export (immutable) */ __webpack_exports__["c"] = sanitize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fun_map__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var COMPONENT_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_ID,
    TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].TYPE,
    STATE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].STATE,
    ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].ID,
    VCOMPONENT = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].VCOMPONENT,
    LIEF_CYCLE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LIEF_CYCLE,
    CONSTRUCTOR = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].CONSTRUCTOR,
    COMPONENT_TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_TYPE,
    REF = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].REF;
var isArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].isArray,
    isFunc = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].isFunc,
    isString = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].isString,
    clonePropsByFilter = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].clonePropsByFilter;


function componentWillUnmount(obj) {
  __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].deleteByComponentId(obj[COMPONENT_ID]);
  var ref = obj.props[REF];

  if (ref && isFunc(ref)) {
    ref();
  }
}

function componentDidMount(obj) {
  var ref = obj.props[REF];

  if (ref && isFunc(ref)) {
    ref(obj);
  }
}

function proxyMethod(obj, name, fn) {
  var method = obj[name];
  if (method) {
    obj[name] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(undefined, [obj].concat(args));
      return method.apply(obj, args);
    };
  } else {
    obj[LIEF_CYCLE][name] = true;
    obj[name] = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      fn.apply(undefined, [obj].concat(args));
    };
  }
}

// let globalQuery;
// export function getQuery() {
//   if (globalQuery) return globalQuery;
//   let query = decodeURIComponent(location.search);
//   if (query.indexOf('?') === 0) {
//     query = query.substring(1);
//   }
//   const param = query.split('&').reduce((ret, item) => {
//     if (item == null || item === '') return ret;
//     const itemArr = item.split('=');
//     ret[itemArr[0]] = itemArr[1];
//     return ret;
//   }, {});
//   if (param.query) {
//     param.query = JSON.parse(param.query);
//   } else {
//     param.query = {};
//   }
//   if (param.hash) {
//     location.hash = param.hash;
//   }
//   globalQuery = param;
//   return globalQuery;
// }

function instantial(parent, data) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var updater = arguments[3];

  if (data == null) return;
  if (isArray(data)) return data.map(function (o) {
    return instantial(parent, o, context, updater);
  });
  var type = data[TYPE];
  if (type == null) return data;
  var retInstance = void 0;
  var ComponentConstructor = data[CONSTRUCTOR];
  if (isComponent(data)) {
    return data;
    // return null;
  }
  var cloneData = clonePropsByFilter(data, _defineProperty({}, CONSTRUCTOR, true), function (val) {
    return instantial(parent, val, context, updater);
  });
  var registerParentFlag = true;
  if (type === VCOMPONENT) {
    if (isComponentClass(ComponentConstructor)) {
      if (ComponentConstructor.defaultProps) {
        cloneData = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].assign({}, ComponentConstructor.defaultProps, cloneData);
      }
      retInstance = new ComponentConstructor(cloneData, context);
      retInstance._updater = updater;
      proxyMethod(retInstance, 'componentWillUnmount', componentWillUnmount);
      proxyMethod(retInstance, 'componentDidMount', componentDidMount);
      retInstance.context = retInstance.context || context;
      registerParentFlag = false;
    } else {
      var instanFun = ComponentConstructor;
      return instantial(parent, instanFun(cloneData), context, updater);
    }
  } else {
    retInstance = new ComponentConstructor(cloneData, context);
    // retInstance.context = retInstance.context || context;
  }
  __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].registerComponent(retInstance);
  if (!isComponent(retInstance)) {
    throw new Error('<' + ComponentConstructor.name + '> is not a medivh Component');
  }
  if (registerParentFlag && parent) {
    __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].registerParentComponent(parent[COMPONENT_ID], retInstance[COMPONENT_ID]);
  }
  // parent && FunMap.registerParentComponent(parent[COMPONENT_ID], retInstance[COMPONENT_ID]);

  var newContext = context;
  if (retInstance.getChildContext && isFunc(retInstance.getChildContext)) {
    var childContext = retInstance.getChildContext() || {};
    newContext = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].assign({}, context, childContext);
  }
  if (retInstance && retInstance.render) {
    retInstance.props[STATE] = instantial(retInstance, retInstance.render(), newContext, updater);
  } else {
    var children = retInstance.props.children;
    if (children) {
      retInstance.props.children = instantial(retInstance, children, newContext, updater);
    }
  }
  return retInstance;
}

function isComponent(component) {
  return component && component.$$component_flag;
}

function isComponentClass(Component) {
  return !!(Component.prototype && Component.prototype.$$component_flag);
}

var FILTER_ATTR_NAME = _defineProperty({
  store: true
}, REF, true);

function sanitize(obj, pComponentId) {
  var _eleData;

  if (isArray(obj)) return obj.map(function (o) {
    return sanitize(o, pComponentId);
  });
  if (isFunc(obj)) {
    var _ref;

    var id = __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].registerFun(pComponentId, null, obj);
    return _ref = {}, _defineProperty(_ref, ID, id), _defineProperty(_ref, COMPONENT_ID, pComponentId), _ref;
  }
  if (!isComponent(obj)) {
    return obj;
  }
  var props = obj.props;

  var componentId = obj[COMPONENT_ID];
  var children = void 0,
      type = props[TYPE];
  var newProps = {};
  __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].removeFun(componentId); // 清除掉前面注册过的函数
  props && Object.keys(props).forEach(function (name) {
    var value = props[name];
    if (name === 'children') {
      children = value;
      return;
    }
    if (FILTER_ATTR_NAME[name]) {
      return;
    }
    if (isFunc(value)) {
      var _newProps$name;

      var _id = __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].registerFun(componentId, null, value);
      newProps[name] = (_newProps$name = {}, _defineProperty(_newProps$name, ID, _id), _defineProperty(_newProps$name, COMPONENT_ID, componentId), _newProps$name);
    } else {
      newProps[name] = sanitize(props[name], pComponentId);
    }
  });
  if (newProps.hasOwnProperty(STATE)) {
    // 有render出来的结果，其他属性就是多余的
    newProps = _defineProperty({}, STATE, newProps[STATE]);
    children = null;
    // newProps[STATE] = sanitize(newProps[STATE]);
  }
  var newType = isString(type) ? type : VCOMPONENT;
  var eleData = (_eleData = {}, _defineProperty(_eleData, COMPONENT_TYPE, newType), _defineProperty(_eleData, 'props', newProps), _defineProperty(_eleData, 'componentId', componentId), _eleData);
  var lifeCycle = obj[LIEF_CYCLE];
  lifeCycle && (eleData.lifeCycle = obj[LIEF_CYCLE]);
  children && (eleData.children = sanitize(children, componentId));
  return eleData;
}

/***/ }),
/* 4 */
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var toArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].toArray,
    clonePropsByFilter = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].clonePropsByFilter,
    assign = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].assign,
    isFunc = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].isFunc,
    isArray = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].isArray;
var TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].TYPE,
    CONSTRUCTOR = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].CONSTRUCTOR,
    STATE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].STATE,
    COMPONENT_ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_ID,
    COMPONENT_RENDER = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].COMPONENT_RENDER,
    HIDDEN_CONTEXT = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].HIDDEN_CONTEXT;
var invoke = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Rpc */].invoke;


var isBatchSetState = false;
var isBatchForceUpdate = false;
var setstateCallbackList = [];
var forceUpdateCallbackList = [];
// const delMutations = [];
// const addMutations = [];
// const changeMutations = [];

function setState(target, partialState, callback) {
  callback && setstateCallbackList.push(callback);
  var newState = void 0;
  if (isFunc(partialState)) {
    newState = assign({}, target.state, partialState(target.state));
  } else {
    newState = assign({}, target.state, partialState);
  }
  if (isBatchSetState || isBatchForceUpdate) {
    target.state = newState;
    return;
  }
  isBatchSetState = true;
  if (!target.shouldComponentUpdate || target.shouldComponentUpdate(target.props, newState)) {
    // if(!target.render){
    //     throw new Error('render is undefined');   
    // };
    target.state = newState;
    var ret = target.render();
    // target.context = getNewChildContext(target, target.context);
    target.props[STATE] = update(target, target.props[STATE], ret, getNewChildContext(target, target.context));
    var componentId = target[COMPONENT_ID];
    // console.log('target.props[STATE] :',target.props[STATE]);
    var sanintizedData = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* sanitize */])(target.props[STATE], componentId);
    invoke(COMPONENT_RENDER, {
      data: sanintizedData,
      componentId: componentId
    });
  }
  isBatchSetState = false;
  setstateCallbackList.forEach(function (cb) {
    cb();
  });
  setstateCallbackList.splice(0, setstateCallbackList.length - 1);
}

function forceUpdate(target, callback) {
  callback && forceUpdateCallbackList.push(callback);
  if (isBatchForceUpdate) {
    return;
  }
  isBatchForceUpdate = true;
  // if(!target.render){
  //     throw new Error('render is undefined');   
  // };
  var ret = target.render();
  target.props[STATE] = update(target, target.props[STATE], ret, getNewChildContext(target, target.context), true);
  var componentId = target[COMPONENT_ID];
  var sanintizedData = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* sanitize */])(target.props[STATE], componentId);
  invoke(COMPONENT_RENDER, {
    data: sanintizedData,
    componentId: componentId
  });
  isBatchForceUpdate = false;
  forceUpdateCallbackList.forEach(function (cb) {
    cb();
  });
  forceUpdateCallbackList.splice(0, forceUpdateCallbackList.length - 1);
}

var updater = {
  setState: setState,
  forceUpdate: forceUpdate
};

function getNewChildContext(target) {
  var curContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (target && target.getChildContext && isFunc(target.getChildContext)) {
    var childContext = target.getChildContext() || {};
    return __WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].assign({}, curContext, childContext);
  }
  return curContext;
}
// getNewChildContext(target,target.context)
function update(target, oldElement, newElementState) {
  var newContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var forceUpdate = arguments[4];

  var oldElementList = toArray(oldElement);
  var newElementStateList = toArray(newElementState);
  var newIsArray = isArray(newElementState);
  var ret = newElementStateList.map(function (nEleStateItem, index) {
    if (oldElementList.length > 0) {
      var _loop = function _loop(i) {
        var oEleItem = oldElementList[i];
        if (oEleItem && nEleStateItem && oEleItem[TYPE] && oEleItem[TYPE] === nEleStateItem[TYPE] && (oEleItem.props.key === nEleStateItem.key || i === index)) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isComponent */])(nEleStateItem)) {
            return {
              v: nEleStateItem
            };
          }
          if (oEleItem.render) {
            var cloenEleStateItem = clonePropsByFilter(nEleStateItem, _defineProperty({}, CONSTRUCTOR, true), function (val, name) {
              return update(target, oEleItem.props[name], val, newContext, forceUpdate);
            });
            oEleItem.componentWillReceiveProps && oEleItem.componentWillReceiveProps(cloenEleStateItem, newContext);
            oEleItem.context = newContext;
            if (forceUpdate || !oEleItem.shouldComponentUpdate || oEleItem.shouldComponentUpdate(cloenEleStateItem, oEleItem.state)) {
              var prevState = oEleItem.props[STATE]; // 保留之前的state状态
              oEleItem.props = cloenEleStateItem;
              var renderRet = oEleItem.render();
              oEleItem.props[STATE] = update(oEleItem, prevState, renderRet, getNewChildContext(oEleItem, oEleItem.context), forceUpdate);
            }
          } else {
            var oldChild = oEleItem.props.children;
            oEleItem.props = clonePropsByFilter(nEleStateItem, _defineProperty({}, CONSTRUCTOR, true), function (val, name) {
              return update(target, oEleItem.props[name], val, newContext, forceUpdate);
              // return instantial(target, val, target.context, updater);
            });
            oEleItem.props.children = update(oEleItem, oldChild, nEleStateItem.children, newContext, forceUpdate);
          }
          oldElementList.splice(i, 1);
          return {
            v: oEleItem
          };
        } else {
          // console.log(oEleItem, nEleStateItem);
        }
      };

      for (var i = 0; i < oldElementList.length; i++) {
        var _ret = _loop(i);

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      // if(oldElementList.length !== 0){
      //     oldElementList.forEach((oldEle)=>{
      //         delMutations.push(oldEle[COMPONENT_ID]);
      //     })
      // }
    }
    // console.log('nEleStateItem :', nEleStateItem);
    // addMutations.push(sanitize(newEle,target[COMPONENT_ID]))
    // if (oldElementList.length === 0) {
    //   debugger;
    // }
    // console.log('nEleStateItem :', nEleStateItem, newElementStateList, oldElementList);
    return Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* instantial */])(target, nEleStateItem, newContext, updater);
  });
  return newIsArray ? ret : ret[0];
}

/* harmony default export */ __webpack_exports__["a"] = (updater);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fun_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoke__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render__ = __webpack_require__(11);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





// import {getQuery} from './util';
var devHook = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["b" /* Dev */].devHook;
var FUN_CALLBACK = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].FUN_CALLBACK,
    LIEF_CYCLE_CALLBACK = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LIEF_CYCLE_CALLBACK,
    INVOKE_CALLBACK = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE_CALLBACK,
    SEND_RENDER_PARAM = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].SEND_RENDER_PARAM;
var init = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Rpc */].init;


var render = __WEBPACK_IMPORTED_MODULE_3__render__["a" /* default */];
devHook();

init(function (data) {
  var type = data.type;
  if (FUN_CALLBACK === type) {
    var _data$data = data.data,
        id = _data$data.id,
        componentId = _data$data.componentId,
        params = _data$data.params;

    var record = __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].getFun(componentId, id);
    if (record) {
      record.method.apply(record.context, params);
    }
  } else if (LIEF_CYCLE_CALLBACK === type) {
    // FunMap.show();
    var _data$data2 = data.data,
        _id = _data$data2.id,
        cycleName = _data$data2.cycleName,
        _params = _data$data2.params;
    // console.log('cycleName :', cycleName, id);

    var targetComponent = __WEBPACK_IMPORTED_MODULE_1__fun_map__["a" /* default */].getComponent(_id);
    if (targetComponent) {
      targetComponent[cycleName].apply(targetComponent, _toConsumableArray(_params));
    }
  } else if (INVOKE_CALLBACK === type) {
    Object(__WEBPACK_IMPORTED_MODULE_2__invoke__["d" /* onInvoke */])(data.data);
  } else if (SEND_RENDER_PARAM === type) {
    Object(__WEBPACK_IMPORTED_MODULE_3__render__["b" /* start */])(data.data);
  }
});

/* harmony default export */ __webpack_exports__["default"] = ({
  invokeCallback: __WEBPACK_IMPORTED_MODULE_2__invoke__["a" /* invokeCallback */],
  invokePromise: __WEBPACK_IMPORTED_MODULE_2__invoke__["b" /* invokePromise */],
  invokePromisePreserved: __WEBPACK_IMPORTED_MODULE_2__invoke__["c" /* invokePromisePreserved */]
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["devHook"] = devHook;
/* harmony export (immutable) */ __webpack_exports__["devHandle"] = devHandle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rpc_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index__ = __webpack_require__(6);
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = invokeCallback;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return invokePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return invokePromisePreserved; });
/* harmony export (immutable) */ __webpack_exports__["d"] = onInvoke;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updater__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fun_map__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ID = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].ID;


// const FunMap = new Map();
// const {isArray, isObject, isFunc} = Util;
var fun_count = 1;

function genFunId() {
  return 'callback-' + fun_count++;
}

// function serialize(data, funMap) {
//   if (data == null) return;
//   if (isArray(data)) {
//     return data.map((item) => {
//       return serialize(item)
// ;
//     });
//   }
//   if (isObject(data)) {
//     const ret = {}; 
//     for (let attr in data) {
//       const value = data[attr];
//       ret[attr] = serialize(value);
//     }
//     return ret;
//   } else if (isFunc(data)) {
//     if (data[INVOKE_CALLBACK_ID]) {
//       funId = data[INVOKE_CALLBACK_ID];
//     } else{
//       const funId = `callback-${fun_count++}`;
//       funMap.set(funId, {
//         value: data
//       });
//       data[INVOKE_CALLBACK_ID] = funId;
//     }
//     return {
//       [INVOKE_CALLBACK_ID]: funId
//     };
//   }
//   return data;
// }

function genInvokePromise(name, keeped) {
  return function invokePromise(api) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      var sucId = __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].registerFun(null, null, resolve, null, keeped);
      var errId = __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].registerFun(null, null, reject, null, keeped);
      __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].pushRelativeIdByFunId(sucId, errId);
      __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].pushRelativeIdByFunId(errId, sucId);
      var success = _defineProperty({}, ID, sucId);
      var error = _defineProperty({}, ID, errId);
      var instantialData = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* instantial */])(null, args, null, __WEBPACK_IMPORTED_MODULE_2__updater__["a" /* default */]);
      // console.log('instantialData :', instantialData, args);
      __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Rpc */].invoke(__WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE, {
        method: name,
        api: api,
        params: Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* sanitize */])(instantialData),
        success: success,
        error: error
      });
    });
  };
}

function invokeCallback(api) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Rpc */].invoke(__WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].INVOKE, {
    method: 'invokeContextCallback',
    api: api,
    params: Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* sanitize */])(Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* instantial */])(null, args, null, __WEBPACK_IMPORTED_MODULE_2__updater__["a" /* default */]))
  });
}

var invokePromise = genInvokePromise('invokeContextPromise');
var invokePromisePreserved = genInvokePromise('invokeContextPromise', true);

function onInvoke() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var params = data.params,
      id = data.id;

  if (id) {
    var item = __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].getPureFun(id);
    if (item) {
      var value = item.value,
          relativeIds = item.relativeIds,
          keeped = item.keeped;

      if (!keeped) {
        if (relativeIds) {
          relativeIds.forEach(function (delId) {
            __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].deletePureFun(delId);
          });
        }
        __WEBPACK_IMPORTED_MODULE_3__fun_map__["a" /* default */].deletePureFun(id);
      }
      if (value) {
        value.apply(null, params);
      }
    }
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = start;
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updater__ = __webpack_require__(7);




var invoke = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["c" /* Rpc */].invoke;
var GLOBAL_RENDER = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].GLOBAL_RENDER,
    GET_RENDER_PARAM = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].GET_RENDER_PARAM,
    LOCATION = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LOCATION;

// let renderParams;

var renderFunc = void 0,
    renderOption = void 0,
    renderParams = void 0,
    rendeFlag = false;

function renderDomByData(data, options) {
  var mountData = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* instantial */])(null, data, {}, __WEBPACK_IMPORTED_MODULE_2__updater__["a" /* default */]);
  var sendData = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* sanitize */])(mountData);
  invoke(GLOBAL_RENDER, {
    data: sendData,
    options: options
  });
}
function start(params) {
  if (renderFunc) {
    renderParams = params;
    var data = renderFunc(renderParams, renderParams[LOCATION]);
    renderFunc = null;
    renderDomByData(data, renderOption);
  }
  rendeFlag = true;
}

// GET_RENDER_PARAM
function render(data, options) {
  if (__WEBPACK_IMPORTED_MODULE_0_medivh_common__["d" /* Util */].isFunc(data)) {
    renderFunc = data;
    renderOption = options;
    if (rendeFlag) {
      start(renderParams);
    } else {
      invoke(GET_RENDER_PARAM);
    }
    // renderDomByData(renderFunc(renderParams), options);
  } else {
    renderDomByData(data, options);
  }
}

/***/ })
/******/ ]));;
//# sourceMappingURL=medivh-runtime.jsonp.js.map