import {Constant, Util} from 'medivh-common';
import createVComponent from './vcomponent';
const {isArray, isObject, toHump} = Util;
const {VCOMPONENT, STATE, ID, COMPONENT_ID, LIEF_CYCLE, COMPONENT_TYPE, TYPE} = Constant;

const FILTER_ATTR_MAP = {
  [STATE]: true,
  [TYPE]: true
};

const typeMap = new Map();

function extractUIComponent(frameworks, type) {
  const cacheComponent = typeMap.get(type);
  if (cacheComponent) {
    return cacheComponent
;
  }
  const typeList = type.split('-');
  let target;
  for (let i = 0; i < frameworks.length; i++) {
    target = frameworks[i];
    for (let i = 0; i < typeList.length; i++) {
      const item = toHump(typeList[i]);
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


export default function({React, ReactDOM, UIFrameworks, 
    FunProxy, postLifeCycleMessage, componentMap}) {
  const VComponent = createVComponent({React, ReactDOM, postLifeCycleMessage, componentMap});
  function parse(data, index) {
    if (data == null) return;
    if (isArray(data)) {
      return data.map((item, index) => {
        return parse(item, index);
      });
    } else if (!isObject(data) || !data[COMPONENT_TYPE]) {
      return data;
    }
    let {componentId, props, children, lifeCycle} = data;
    let type = data[COMPONENT_TYPE];
    let RenderComponent = type;
    let newProps = {};
    if (props) {
      for (const name in props) {
        const item = props[name];
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
      const humpComponent = extractUIComponent(UIFrameworks, type);
      humpComponent && (RenderComponent = humpComponent);
    }
    // if (index != null && newProps.key == null) {
    //   newProps.key = componentId;
    // }
    // if (componentId) {
    //   newProps.key = componentId;
    // }
    if (componentId) {
      newProps.key = (props && props.key != null) ? props.key : componentId;
    }
    // if (newProps.$$construct) {
    //   console.log('newProps :', newProps);
    // }
    // props[COMPONENT_ID] = componentId;
    // props[LIEF_CYCLE] = lifeCycle;
    const renderChildren = children ? parse(children) : [];
    const retComponent = React.createElement(RenderComponent, newProps, ...renderChildren);
    return retComponent;
  }
  return parse;
}