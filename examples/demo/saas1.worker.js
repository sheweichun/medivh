// import {Button,Radio,Input,Select} from '@alife/next';
import React, { Component, render } from './saasWorker/dsl';

import './worker1.less';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('in Test nextProps :', nextProps);
  }
  componentWillUnmount() {
    console.log('in Test componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate!!! test');
  }
  render() {
    const { count } = this.props;
    return (<button onClick={() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }}
    >teest {count} counter!!! state counter :{this.state.counter}</button>);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '洛丹',
      count: 0,
      radioValue: 'orange',
      show: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps :', nextProps);
  }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps,nextState);
    //     return true
    // }
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
    // onChange=(value)=> {
    //     this.setState({
    //         radioValue: value
    //     });
    // }
  renderList() {
    const ret = [];
    for (let i = 0; i < 2000; i++) {
      ret.push(<li key={i}>{i}</li>);
    }
    return ret;
  }
  render() {
    const { value, show, count } = this.state;
        // console.log('count :',count)
    const { children } = this.props;
    return (<div
      styleName="test"
      style={{ padding: '12px' }}
      onClick={() => {
        console.log('out click');
      }}
    >
      <button
        type="primary"
        $clickStopPropagation
        onClick={(e) => {
          console.log('inner clicked');
          this.setState({
            count: this.state.count + 1,
                    // show:!show
          });
        }}
      >洛丹又渲染了一个插件{count}</button>
      {children}
    </div>);
  }
}

render(<App a={3}>test33232</App>, '#container1', {});


// const el = document.querySelector('#demo');
// const demo1 = document.createElement('div');
// demo1.appendChild(document.createTextNode('demo1'));
// const demo2 = document.createElement('div');
// demo2.appendChild(document.createTextNode('demo2'));
// el.appendChild(demo1);
// el.insertBefore(demo2,demo1);
