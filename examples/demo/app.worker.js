// import {Button,Radio,Input,Select} from '@alife/next';
import React from 'worker-react';
import Runtime, { render } from 'worker-react-runtime';
import App from './dashboard';
// console.log(3);
// fetch('http://localhost:9000/demo/index.html?luodan=3').then((resp) => {
//   return resp.text();
// }).then((resp) => {
// //   console.log('resp :', resp);
// });

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      Com: null
    };
  }
  componentDidMount() {
    import('./a').then((resp) => {
      // console.log('resp :', resp);
      this.setState({
        Com: resp.default
      });
    });
  }
  
  render() {
    const {count, Com} = this.state;
    console.log('Com :', Com);
    return (<div>
      <div>{count}</div>
      <button onClick={() => {
        this.setState({
          count: count + 1
        });
      }}>洛丹</button>
      <loading visible={false}>hello</loading>
      {Com && <Com />}
    </div>);
  }
}

// console.log(window, document, alert);
// Runtime.invokePromise('QN.test', 'a', 'b').then((resp) => {
//   console.log('resp :', resp);
// });

// Runtime.invokePromise('QN.showDialog', 'dialog 测试', <Demo>洛丹</Demo>);


render(<Demo a={3}>test332323</Demo>);


// setTimeout(() => {
//   render(<App a={3}>洛丹</App>);
// }, 1000);

// render(function(params) {
//   setTimeout(() => {
//     render(function(params) {
//       return {
//         data: <App a={3}>洛丹</App>,
//         options: {}
//       };
//     });
//   }, 1000);
//   return {
//     data: <App a={3}>test332323</App>,
//     options: {}
//   };
// });