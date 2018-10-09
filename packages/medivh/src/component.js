import {Constant, Util} from 'medivh-common';
const {TYPE, LIEF_CYCLE} = Constant;
const {isFunc} = Util;

const LIFE_CYCLE_LIST = [
  'componentWillMount',
  'componentDidMount',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount'
];

function extractLifeCycle(obj) {
  return LIFE_CYCLE_LIST.reduce((ret, name) => {
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
Component.prototype.setState = function(inState, callback) {
  if (!this._updater) { 
    this.state = Util.assign({}, this.state, isFunc(inState) ? inState(this.state) : inState);
    return;
  }
  this._updater.setState(this, inState, callback);
};
Component.prototype.forceUpdate = function(callback) {
  this._updater && this._updater.forceUpdate(this, callback);
};




export default Component;