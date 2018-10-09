
import {Component} from 'medivh';



 

function createProvider(storeKey = 'store') {
  const subscriptionKey = `${storeKey}Subscription`;
  class Provider extends Component {
    getChildContext() {
      return { 
        [storeKey]: this[storeKey], 
        [subscriptionKey]: null 
      };
    }

    constructor(props) {
      super(props);
      this[storeKey] = props.store;
    }

    render() {
      const child = this.props.children;
      if (!child || child.length > 1) {
        throw new Error('expected to receive a single element child');
      }
      return child[0];
    }
    }
  return Provider;
}

export default createProvider();