
import {Constant} from 'medivh-common';
const {COMPONENT_ID, INVOKE_CALLBACK_ID} = Constant;
const PREFIX = 'webworker';
const Cache = new Map();
let ComponentCounter = 1;
let PureFunCounter = 1;
const pureFunMap = new Map();

const FunMap = {
  registerComponent(component) {
    const componentId = `${PREFIX}-${ComponentCounter++}`;
    const record = new Map();
    record.set('data', new Map());
    record.set('children', []);
    record.set('counter', 1);
    record.set('component', component);
    Cache.set(componentId, record);
    // console.log('register :', componentId, component);
    component[COMPONENT_ID] = componentId;
    return componentId;
        
  },
  show() {
    console.log('size :', Cache.size);
  },
  registerParentComponent(parentComponentId, componentId) {
    if (parentComponentId != null) {
      let parentRecord = Cache.get(parentComponentId);
      if (parentRecord) {
        const parentRecordChildren = parentRecord.get('children');
        parentRecordChildren.push(componentId);
      }
    }
  },
  removeFun(componentId) {
    const record = Cache.get(componentId);
    const recordData = record.get('data');
    recordData.clear();
  },
  pushRelativeIdByFunId(funId, relativeId) {
    const item = pureFunMap.get(funId);
    if (item) {
      item.relativeIds.push(relativeId);
    }
  },
  registerFun(componentId, context, method, relativeIds, keeped) {
    // console.log('componentId :', componentId);
    if (method[INVOKE_CALLBACK_ID]) {
      return method[INVOKE_CALLBACK_ID];
    }
    if (componentId == null) {
      const funId = `funCallback-${PureFunCounter++}`;
      method[INVOKE_CALLBACK_ID] = funId;
      pureFunMap.set(funId, {
        value: method,
        keeped: keeped || method.$$keep,
        relativeIds: relativeIds || []
      });
      return funId;
    }
    const record = Cache.get(componentId);
    const counter = record.get('counter') + 1;
    record.set('counter', counter);
    const id = `${componentId}-${counter}`;
    const recordData = record.get('data');
    recordData.set(id, {context, method});
        // console.log('Cache :',Cache,Cache.size);
    return id;
  },
  unregisterByComponentId(parentComponentId) {
    const record = Cache.get(parentComponentId);
    if (record == null) return;
    const children = record.get('children');
    children.forEach((child) => {
      FunMap.unregisterByComponentId(child);
      // console.log('unregisterComponent :', child);
      Cache.delete(child);
    });
        // Cache.reduc
        // ComponentCounter = 
  },
  deleteByComponentId(componentId) {
    FunMap.unregisterByComponentId(componentId);
    // console.log('unregisterComponent :', componentId);
    Cache.delete(componentId);
  },
  getComponent(componentId) {
    return Cache.get(componentId).get('component');
  },
  deletePureFun(id) {
    return pureFunMap.delete(id);
  },
  getPureFun(id) {
    return pureFunMap.get(id);
  },
  getFun(componentId, id) {
    if (componentId == null) {
      const pureFun = pureFunMap.get(id);
      return pureFun.value;
    }
    const record = Cache.get(componentId);
    if (record == null) return record;
    return record.get('data').get(id);
  }
};


export default FunMap;