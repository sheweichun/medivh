

import {Constant} from 'medivh-common';
const {COMPONENT_ID, LIEF_CYCLE, STATE} = Constant;
// import ComponentMap from './component_map';




function registerLifeCycle(component, postLifeCycleMessage) {
  const cycleMap = component.props[LIEF_CYCLE];
  Object.keys(cycleMap).forEach((name) => {
    const method = component[name];
    component[name] = function(...args) {
      method && method.apply(component, args);
      postLifeCycleMessage(component[COMPONENT_ID], name, args);
    };
  });
}


// function proxyComponentWillUnmount(obj){
//     if(obj.componentWillUnmount){
//         const method = obj.componentWillUnmount;
//         obj.componentWillUnmount = function(...args){
//             ComponentMap.unregister(obj)
//             return method.apply(obj,args)
//         }
//     }else{
//         obj.componentWillUnmount = function(){
//             ComponentMap.unregister(obj);
//         }
//     }
// }

function replaceComponentId(obj, nextProps, componentMap) {
  const newId = nextProps[COMPONENT_ID];
  if (newId) {
    const oldId = obj[COMPONENT_ID];
    obj[COMPONENT_ID] = newId;
    componentMap.replace(oldId, obj);
  }
}

// function proxyComponentWillReceiveProps(obj){
//     if(obj.componentWillReceiveProps){
//         const method = obj.componentWillReceiveProps;
//         obj.componentWillReceiveProps = function(nextProps){
//             replaceComponentId(obj,nextProps);
//             return method.apply(obj,nextProps)
//         }
//     }else{
//         obj.componentWillReceiveProps = function(nextProps){
//             console.log('nextProps :',nextProps);
//             replaceComponentId(obj,nextProps);
//         }
//     }
// }

export default function({React, ReactDOM, postLifeCycleMessage, componentMap}) {
  return class VComponent extends React.Component {
    constructor(props) {
      super(props);
      if (props[COMPONENT_ID]) {
        this[COMPONENT_ID] = props[COMPONENT_ID];
        componentMap.register(this);
      }
      this[COMPONENT_ID] = props[COMPONENT_ID];
      registerLifeCycle(this, postLifeCycleMessage);
            // proxyComponentWillUnmount(this);
            // const {$$state} = props;
      this.state = {
        data: props[STATE]
      };
    }
    componentWillUnmount() {
            // console.log(this.props[COMPONENT_ID]);
      componentMap.unregister(this);
    }
        // componentDidMount(){
        //     console.log('did mount',this.props);
        // }
        // componentDidUpdate(){
        //     console.log('did update');
        // }
    componentWillReceiveProps(nextProps) {
      this.state.data = nextProps[STATE];
      replaceComponentId(this, nextProps, componentMap);
    }
    render() {
      const {data} = this.state;
      return data == null ? '' : data;
    }
    };
}