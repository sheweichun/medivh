import React, { Component } from 'worker-react';
import {render} from 'worker-react-runtime';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  componentWillUnmount() {
    console.log('in Test componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate!!! test');
  }
  increment=() => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (<button onClick={this.increment}
    >{this.props.children}:{this.state.counter}</button>);
  }
}
console.log(global);


render(<App >计数器</App>);

