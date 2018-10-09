
import {Constant, Util} from 'medivh-common';
import FunMap from './fun_map';

const {COMPONENT_ID, TYPE, STATE, ID, VCOMPONENT, LIEF_CYCLE, CONSTRUCTOR, COMPONENT_TYPE, REF} = Constant;
const {isArray, isFunc, isString, clonePropsByFilter} = Util;

function componentWillUnmount(obj) {
  FunMap.deleteByComponentId(obj[COMPONENT_ID]);
  const {[REF]: ref} = obj.props;
  if (ref && isFunc(ref)) {
    ref();
  }
}

function componentDidMount(obj) {
  const {[REF]: ref} = obj.props;
  if (ref && isFunc(ref)) {
    ref(obj);
  }
}

function proxyMethod(obj, name, fn) {
  const method = obj[name];
  if (method) {
    obj[name] = function(...args) {
      fn(obj, ...args);
      return method.apply(obj, args);
    };
  } else {
    obj[LIEF_CYCLE][name] = true;
    obj[name] = function(...args) {
      fn(obj, ...args);
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

export function instantial(parent, data, context = {}, updater) {
  if (data == null) return;
  if (isArray(data)) return data.map(o => instantial(parent, o, context, updater));
  const type = data[TYPE];
  if (type == null) return data;
  let retInstance;
  let ComponentConstructor = data[CONSTRUCTOR];
  if (isComponent(data)) {
    return data;
    // return null;
  }
  let cloneData = clonePropsByFilter(data, {[CONSTRUCTOR]: true}, function(val) {
    return instantial(parent, val, context, updater);
  });
  let registerParentFlag = true;
  if (type === VCOMPONENT) {
    if (isComponentClass(ComponentConstructor)) {
      if (ComponentConstructor.defaultProps) {
        cloneData = Util.assign({}, ComponentConstructor.defaultProps, cloneData);
      }
      retInstance = new ComponentConstructor(cloneData, context);
      retInstance._updater = updater;
      proxyMethod(retInstance, 'componentWillUnmount', componentWillUnmount);
      proxyMethod(retInstance, 'componentDidMount', componentDidMount);
      retInstance.context = retInstance.context || context;
      registerParentFlag = false;
    } else {
      const instanFun = ComponentConstructor;
      return instantial(parent, instanFun(cloneData), context, updater);
    }
  } else {
    retInstance = new ComponentConstructor(cloneData, context);
    // retInstance.context = retInstance.context || context;
  }
  FunMap.registerComponent(retInstance);
  if (!isComponent(retInstance)) {
    throw new Error(`<${ComponentConstructor.name}> is not a medivh Component`);
  }
  if (registerParentFlag && parent) {
    FunMap.registerParentComponent(parent[COMPONENT_ID], retInstance[COMPONENT_ID]);
  }
  // parent && FunMap.registerParentComponent(parent[COMPONENT_ID], retInstance[COMPONENT_ID]);

  let newContext = context;
  if (retInstance.getChildContext && isFunc(retInstance.getChildContext)) {
    const childContext = retInstance.getChildContext() || {};
    newContext = Util.assign({}, context, childContext);
  }
  if (retInstance && retInstance.render) {
    retInstance.props[STATE] = instantial(retInstance, retInstance.render(), newContext, updater);
  } else {
    const children = retInstance.props.children;
    if (children) {
      retInstance.props.children = instantial(retInstance, children, newContext, updater);
    }
  }
  return retInstance;
}


export function isComponent(component) {
  return component && component.$$component_flag;
}

export function isComponentClass(Component) {
  return !!(Component.prototype && Component.prototype.$$component_flag);
}

const FILTER_ATTR_NAME = {
  store: true,
  [REF]: true
};

export function sanitize(obj, pComponentId) {
  if (isArray(obj)) return obj.map(o => sanitize(o, pComponentId));
  if (isFunc(obj)) {
    const id = FunMap.registerFun(pComponentId, null, obj);
    return {
      [ID]: id,
      [COMPONENT_ID]: pComponentId
    };
  }
  if (!isComponent(obj)) {
    return obj;
  }
  let {props} = obj;
  const componentId = obj[COMPONENT_ID];
  let children, type = props[TYPE];
  let newProps = {};
  FunMap.removeFun(componentId); // 清除掉前面注册过的函数
  props && Object.keys(props).forEach((name) => {
    const value = props[name];
    if (name === 'children') {
      children = value;
      return;
    }
    if (FILTER_ATTR_NAME[name]) {
      return;
    }
    if (isFunc(value)) {
      const id = FunMap.registerFun(componentId, null, value);
      newProps[name] = {
        [ID]: id,
        [COMPONENT_ID]: componentId
      };
    } else {
      newProps[name] = sanitize(props[name], pComponentId);
    }
  });
  if (newProps.hasOwnProperty(STATE)) { // 有render出来的结果，其他属性就是多余的
    newProps = { 
      [STATE]: newProps[STATE]
    };
    children = null; 
    // newProps[STATE] = sanitize(newProps[STATE]);
  }
  const newType = isString(type) ? type : VCOMPONENT;
  const eleData = {
    [COMPONENT_TYPE]: newType,
    props: newProps,
    componentId: componentId,
  };
  const lifeCycle = obj[LIEF_CYCLE];
  lifeCycle && (eleData.lifeCycle = obj[LIEF_CYCLE]);
  children && (eleData.children = sanitize(children, componentId));
  return eleData;
}