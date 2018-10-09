import {STATE, TYPE} from '../constant';
export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export function isObject(obj) {
  return obj != null && typeof obj === 'object';
}

export function isString(obj) {
  return typeof obj === 'string';
}

export function isFunc(obj) {
  return typeof obj === 'function';
}

export function isSymbol(obj) {
  return typeof obj === 'symbol';
}

export function assign(obj, ...args) {
  for (let i = 0; i < args.length; i++) {
    const newObj = args[i];
    if (newObj) {
      for (let i in newObj) obj[i] = newObj[i];
    }
  }
  return obj;
}

export function toArray(obj) {
  if (obj == null) return [];
  return isArray(obj) ? [].concat(obj) : [obj];
}

export function isEvent(obj) {
  return obj && obj.hasOwnProperty('clientX') && obj.hasOwnProperty('clientY');
}

const INVALID_ATTR_NAME_MAP = {
  children: true,
  [STATE]: true,
  [TYPE]: true,
  key: true
  // props: true
};

export function clonePropsByFilter(obj, filterMap = {}, cb) {
  const newObj = {};
  for (let attr in obj) {
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

export function toHump(str) {
  return str.replace(/^\S/, (val) => {
    return val.toUpperCase();
  });
}

export function cloneArgs(args, dep = 3) {
  if (dep < 0 || isSymbol(args)) return null;
  if (isArray(args)) {
    return args.map((item) => {
      return cloneArgs(item, dep - 1);
    });
  } else if (isObject(args)) {
    return Object.keys(args).reduce((ret, name) => {
      ret[name] = args[name] ? cloneArgs(args[name], dep - 1) : args[name];
      return ret;
    }, {});
  } else if (isFunc(args)) {
    return null;
  }
  return args;
}





