

import {Constant, Rpc, Dev} from 'medivh-common';
import FunMap from './fun_map';
import {invokeCallback, invokePromise, invokePromisePreserved, onInvoke} from './invoke';
import Render, {start} from './render';
// import {getQuery} from './util';
const {devHook} = Dev;
const {FUN_CALLBACK, LIEF_CYCLE_CALLBACK, INVOKE_CALLBACK, SEND_RENDER_PARAM} = Constant;
const {init} = Rpc;

export const render = Render;
devHook();

init(function(data) {
  const type = data.type;
  if (FUN_CALLBACK === type) {
    const {id, componentId, params} = data.data;
    const record = FunMap.getFun(componentId, id);
    if (record) {
      record.method.apply(record.context, params);
    }
  } else if (LIEF_CYCLE_CALLBACK === type) {
    // FunMap.show();
    const {id, cycleName, params} = data.data;
    // console.log('cycleName :', cycleName, id);
    const targetComponent = FunMap.getComponent(id);
    if (targetComponent) {
      targetComponent[cycleName](...params);
    }
  } else if (INVOKE_CALLBACK === type) {
    onInvoke(data.data);
  } else if (SEND_RENDER_PARAM === type) {
    start(data.data);
  }
});





export default {
  invokeCallback,
  invokePromise,
  invokePromisePreserved,
};