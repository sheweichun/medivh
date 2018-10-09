

import {Constant, Rpc, Util, Dev} from 'medivh-common';
import {instantial, sanitize, isComponent} from './util';
const {toArray, clonePropsByFilter, assign, isFunc, isArray} = Util;
const {TYPE, CONSTRUCTOR, STATE, COMPONENT_ID, COMPONENT_RENDER, HIDDEN_CONTEXT} = Constant;
const {invoke} = Rpc;




let isBatchSetState = false;
let isBatchForceUpdate = false;
const setstateCallbackList = [];
const forceUpdateCallbackList = [];
// const delMutations = [];
// const addMutations = [];
// const changeMutations = [];

function setState(target, partialState, callback) {
  callback && setstateCallbackList.push(callback);
  let newState;
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
    const ret = target.render();
    // target.context = getNewChildContext(target, target.context);
    target.props[STATE] = update(target, target.props[STATE], ret, getNewChildContext(target, target.context));
    const componentId = target[COMPONENT_ID];
        // console.log('target.props[STATE] :',target.props[STATE]);
    const sanintizedData = sanitize(target.props[STATE], componentId);
    invoke(COMPONENT_RENDER, {
      data: sanintizedData,
      componentId: componentId
    });
  }
  isBatchSetState = false;
  setstateCallbackList.forEach((cb) => {
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
  const ret = target.render();
  target.props[STATE] = update(target, target.props[STATE], ret, getNewChildContext(target, target.context), true);
  const componentId = target[COMPONENT_ID];
  const sanintizedData = sanitize(target.props[STATE], componentId);
  invoke(COMPONENT_RENDER, {
    data: sanintizedData,
    componentId: componentId
  });
  isBatchForceUpdate = false;
  forceUpdateCallbackList.forEach((cb) => {
    cb();
  });
  forceUpdateCallbackList.splice(0, forceUpdateCallbackList.length - 1);
}

const updater = {
  setState,
  forceUpdate
};


function getNewChildContext(target, curContext = {}) {
  if (target && target.getChildContext && isFunc(target.getChildContext)) {
    const childContext = target.getChildContext() || {};
    return Util.assign({}, curContext, childContext);
  }
  return curContext;
}
// getNewChildContext(target,target.context)
function update(target, oldElement, newElementState, newContext = {}, forceUpdate) {
  const oldElementList = toArray(oldElement);
  const newElementStateList = toArray(newElementState);
  const newIsArray = isArray(newElementState);
  const ret = newElementStateList.map((nEleStateItem, index) => {
    if (oldElementList.length > 0) {
      for (let i = 0; i < oldElementList.length; i++) {
        const oEleItem = oldElementList[i];
        if (oEleItem && nEleStateItem && 
                    oEleItem[TYPE] &&
                     oEleItem[TYPE] === nEleStateItem[TYPE] && 
                     ((oEleItem.props.key === nEleStateItem.key) || i === index)) {
          if (isComponent(nEleStateItem)) {
            return nEleStateItem;
          }
          if (oEleItem.render) {
            const cloenEleStateItem = clonePropsByFilter(nEleStateItem, {[CONSTRUCTOR]: true}, function(val, name) {
              return update(target, oEleItem.props[name], val, newContext, forceUpdate);
            });
            oEleItem.componentWillReceiveProps && oEleItem.componentWillReceiveProps(cloenEleStateItem, newContext);
            oEleItem.context = newContext;
            if (forceUpdate || !oEleItem.shouldComponentUpdate || oEleItem.shouldComponentUpdate(cloenEleStateItem, oEleItem.state)) {
              const prevState = oEleItem.props[STATE]; // 保留之前的state状态
              oEleItem.props = cloenEleStateItem;
              const renderRet = oEleItem.render();
              oEleItem.props[STATE] = update(oEleItem, prevState, renderRet, getNewChildContext(oEleItem, oEleItem.context), forceUpdate);
            }
          } else {
            const oldChild = oEleItem.props.children;
            oEleItem.props = clonePropsByFilter(nEleStateItem, {[CONSTRUCTOR]: true}, function(val, name) {
              return update(target, oEleItem.props[name], val, newContext, forceUpdate);
              // return instantial(target, val, target.context, updater);
            });
            oEleItem.props.children = update(oEleItem, oldChild, nEleStateItem.children, newContext, forceUpdate);
          }
          oldElementList.splice(i, 1);
          return oEleItem;
        } else {
          // console.log(oEleItem, nEleStateItem);
        }
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
    return instantial(target, nEleStateItem, newContext, updater);
  });
  return newIsArray ? ret : ret[0];
}



export default updater;
