(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Medivh"] = factory();
	else
		root["Medivh"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Rpc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* unused harmony export Dev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rpc__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dev_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_index__ = __webpack_require__(4);







var Rpc = __WEBPACK_IMPORTED_MODULE_0__rpc__;
var Constant = __WEBPACK_IMPORTED_MODULE_1__constant__;
var Dev = __WEBPACK_IMPORTED_MODULE_2__dev_index__;
var Util = __WEBPACK_IMPORTED_MODULE_3__util_index__;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(7);




var VCOMPONENT = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].VCOMPONENT,
    TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].TYPE,
    CONSTRUCTOR = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].CONSTRUCTOR,
    REF = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].REF;


var Component = __WEBPACK_IMPORTED_MODULE_1__component__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = ({
  Component: __WEBPACK_IMPORTED_MODULE_1__component__["a" /* default */],
  Children: {
    count: function count(data) {
      if (data == null) return 0;
      return data.length || 0;
    }
  },
  createElement: function createElement(type, props) {
    var nProps = {};
    for (var attr in props) {
      var value = props[attr];
      if (attr === 'ref') {
        nProps[REF] = value;
      } else {
        nProps[attr] = value;
      }
    }

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    nProps.children = nProps.children || children;
    if (__WEBPACK_IMPORTED_MODULE_0_medivh_common__["b" /* Util */].isFunc(type)) {
      nProps[CONSTRUCTOR] = type;
      nProps[TYPE] = VCOMPONENT;
    } else {
      nProps[CONSTRUCTOR] = __WEBPACK_IMPORTED_MODULE_1__component__["a" /* default */];
      nProps[TYPE] = type;
    }
    return nProps;
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["devHook"] = devHook;
/* harmony export (immutable) */ __webpack_exports__["devHandle"] = devHandle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medivh_common__ = __webpack_require__(1);

var TYPE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].TYPE,
    LIEF_CYCLE = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["a" /* Constant */].LIEF_CYCLE;
var isFunc = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["b" /* Util */].isFunc;


var LIFE_CYCLE_LIST = ['componentWillMount', 'componentDidMount', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

function extractLifeCycle(obj) {
  return LIFE_CYCLE_LIST.reduce(function (ret, name) {
    if (obj[name]) {
      ret[name] = true;
    }
    return ret;
  }, {});
}

// function deleteByComponentId(obj){
//     FunMap.deleteByComponentId(obj[COMPONENT_ID]);
// }


function Component(props, context) {
  this.context = context;
  this[TYPE] = props[TYPE];
  this.props = props || {};
  this[LIEF_CYCLE] = extractLifeCycle(this);
}
Component.prototype.$$component_flag = true;
Component.prototype.setState = function (inState, callback) {
  if (!this._updater) {
    this.state = __WEBPACK_IMPORTED_MODULE_0_medivh_common__["b" /* Util */].assign({}, this.state, isFunc(inState) ? inState(this.state) : inState);
    return;
  }
  this._updater.setState(this, inState, callback);
};
Component.prototype.forceUpdate = function (callback) {
  this._updater && this._updater.forceUpdate(this, callback);
};

/* harmony default export */ __webpack_exports__["a"] = (Component);

/***/ })
/******/ ]);
});
//# sourceMappingURL=medivh.js.map