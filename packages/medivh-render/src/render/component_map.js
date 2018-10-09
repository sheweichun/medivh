

import {Constant} from 'medivh-common';
const {COMPONENT_ID} = Constant;

// const Cache = new Map();
export default function(worker) {
  const Cache = new Map();
  return {
    register(component) {
      Cache.set(component[COMPONENT_ID], component);
    },
    replace(oldId, component) {
      Cache.delete(oldId);
      Cache.set(component[COMPONENT_ID], component);
    },
    unregister(component) {
      Cache.delete(component[COMPONENT_ID]);
    },
    get(id) {
      return Cache.get(id);
    }
        // show(){
        //     Cache.forEach(function(value, key, mapObj) {
        //         console.log(value + '---' + key + '---' + mapObj);
        //     });
        // }
  };
}