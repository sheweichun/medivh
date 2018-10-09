
import {Constant, Util} from 'medivh-common';
import {postMessage} from './util';
const {INVOKE_CALLBACK, ID, INVOKE_CALLBACK_ID} = Constant; 
const {isArray, isObject} = Util;

function genProxyFunction(funId, worker) {
  const ret = function(...args) {
    return postMessage(worker, {
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
  let apiList = api.split('.');
  const ret = apiList.reduce((ret, name) => {
    ret.context = ret.target;
    if (ret.target) {
      ret.target = ret.target[name];
    }
    return ret;
  }, {context: null, target: context});
  return ret;
}

export function deserialize(data, worker, parser) {
  if (data == null) return;
  if (isArray(data)) {
    return data.map((item) => {
      return deserialize(parser(item), worker, parser)
;
    });
  }
  data = parser(data);
  if (isObject(data)) {
    // 此处为兼容性代码，应用只需要去data[ID]，INVOKE_CALLBACK_ID是为了兼容老的
    const fun_flag_id = data[ID] || data[INVOKE_CALLBACK_ID];
    if (fun_flag_id) { // 组件里的函数标识
      return genProxyFunction(fun_flag_id, worker);
    } else {
      const ret = {}; 
      for (let attr in data) {
        ret[attr] = deserialize(parser(data[attr]), worker, parser);
      }
    }
  }
  return data;
}


const Invoker = {
  invokeContextCallback(context, api, params) {
    const ret = getContextAndTarget(context, api);
    if (ret.context && ret.target) {
      ret.target.apply(ret.context, params);
    }
  },
  invokeContextPromise(context, api, params, success, error) {
    const ret = getContextAndTarget(context, api);
    if (ret.context && ret.target) {
      try {
        const result = ret.target.apply(ret.context, params);
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
      error && error(`此API【${api}】不存在`);
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

export default Invoker;