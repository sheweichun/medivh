

import {Rpc, Constant} from 'medivh-common';
import {sanitize, instantial} from './util';
import Updater from './updater';
const {ID} = Constant; 
import FunMap from './fun_map';
// const FunMap = new Map();
// const {isArray, isObject, isFunc} = Util;
let fun_count = 1;

function genFunId() {
  return `callback-${fun_count++}`;
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
  return function invokePromise(api, ...args) {
    return new Promise((resolve, reject) => {
      const sucId = FunMap.registerFun(null, null, resolve, null, keeped); 
      const errId = FunMap.registerFun(null, null, reject, null, keeped); 
      FunMap.pushRelativeIdByFunId(sucId, errId);
      FunMap.pushRelativeIdByFunId(errId, sucId);
      const success = {
        [ID]: sucId
      };
      const error = {
        [ID]: errId
      };
      const instantialData = instantial(null, args, null, Updater);
      // console.log('instantialData :', instantialData, args);
      Rpc.invoke(Constant.INVOKE, {
        method: name,
        api,
        params: sanitize(instantialData),
        success,
        error
      });
    });
  };
}

export function invokeCallback(api, ...args) {
  return Rpc.invoke(Constant.INVOKE, {
    method: 'invokeContextCallback',
    api,
    params: sanitize(instantial(null, args, null, Updater))
  });
}

export const invokePromise = genInvokePromise('invokeContextPromise');
export const invokePromisePreserved = genInvokePromise('invokeContextPromise', true);

export function onInvoke(data = {}) {
  const {params, id} = data;
  if (id) {
    const item = FunMap.getPureFun(id);
    if (item) {
      const {value, relativeIds, keeped} = item;
      if (!keeped) {
        if (relativeIds) {
          relativeIds.forEach((delId) => {
            FunMap.deletePureFun(delId);
          });
        }
        FunMap.deletePureFun(id);
      }
      if (value) {
        value.apply(null, params);
      }
    }
  }
}