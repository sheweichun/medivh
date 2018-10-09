

import {Constant, Util} from 'medivh-common';
import RenderComponent from './component';
const {VCOMPONENT, TYPE, CONSTRUCTOR, REF} = Constant;





export const Component = RenderComponent;
export default {
  Component: RenderComponent,
  Children: {
    count(data) {
      if (data == null) return 0;
      return data.length || 0;
    }
  },
  createElement(type, props, ...children) {
    const nProps = {};
    for (let attr in props) {
      const value = props[attr];
      if (attr === 'ref') {
        nProps[REF] = value;
      } else {
        nProps[attr] = value;
      }
    }
    nProps.children = nProps.children || children;
    if (Util.isFunc(type)) {
      nProps[CONSTRUCTOR] = type;
      nProps[TYPE] = VCOMPONENT;
    } else {
      nProps[CONSTRUCTOR] = RenderComponent;
      nProps[TYPE] = type;
    }
    return nProps;
  }
};