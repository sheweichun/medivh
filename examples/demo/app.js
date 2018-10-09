// import DomRenderer from './webWorker/runtime/index';
// import Worker from './webWorker/index.worker';
// import '@alife/next/dist/next.css';


// DomRenderer({worker:new Worker()})


// import SaasWorker from './test.worker';
import SaasWorker from './app.worker';
// import SaasWorker1 from './saas1.worker';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'worker-react-render';
// import './pwa';
import './worker.less';

// Render({
//     worker:new SaasWorker(),
//     React,
//     ReactDOM,
//     UIFramework:Next
// })
const renderer = render({
  workers: [],
  vdom: React,
  vdomRender: ReactDOM,
  uiFrameworks: [window.Next, {
    Next: window.Next
  }],
  context: {
    QN: {
      test(a, b) {
        console.log('params :', a, b);
                // throw new Error('不知道发生了什么错误');
        return 1234;
      },
      demo(param) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            param.name = '洛丹';
            reject(param);
          }, 1000);
        });
      },
      showDialog(title, content) {
        console.log('title :', title, content);
        Next.Dialog.confirm({
          title,
          content
        });
      }
    },
  },
});
console.log(1);
const sassWorker = SaasWorker();
console.log(2);
// console.log('sassWorker :', sassWorker);
renderer.addWorker({
  el: 'container',
  params: {
    a: 123
  },
  worker: sassWorker,
  // cssUrls: ['http://g-assets.daily.taobao.net//taefed/externals/0.0.2/??next.css']
}).then((worker) => {
  // setTimeout(() => {
  //   worker.destroy();
  //   renderer.addWorker({
  //     el: 'container1',
  //     worker: new SaasWorker(),
  //     cssUrls: ['http://g-assets.daily.taobao.net//taefed/externals/0.0.2/??next.css']
  //   }).then(() => {
  //     console.log(renderer.getWorkerList().length);
  //   });
  // }, 2000);
});

// ReactDOM.render(<div>
//   loading Lest
//   <Next.Loading visible={false}>loading...</Next.Loading>
//   </div>, document.getElementById('container1'));
// renderer.registerContext('QN',{
//     test(a,b){
//         console.log('params :',a,b);
//         // throw new Error('不知道发生了什么错误');
//         return 123;
//     },
//     demo(param){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 param.name = '洛丹'
//                 reject(param)
//             },1000)
//         })
//     }
// })
// renderer.addWorker({
//     el:'container1',
//     worker:new SaasWorker1()
// });
// setTimeout(()=>{
//     renderer.addWorker({
//         el:'container2',
//         worker:new SaasWorker1()
//     });
// },500)

/** sandbox
import Sandbox from './sandbox/index';

Sandbox({
    onRequest:function(url,opt){
        console.log(url,opt);
        return true;
    },
    onSetNodeProp:function(props,value,target){
        console.log(props,value,target);
        return true
    }
});

const iframe = document.createElement('iframe');
// console.log('iframe :',iframe);
iframe.src = '//www.baidu.com';
document.body.appendChild(iframe)
const div = document.getElementsByTagName('div')[0];
const test = document.createElement('span');
test.innerHTML = '洛丹123';
// console.log('div :',div);
const a = document.createElement('a');
a.src = 'http://www.baidu.com';
a.innerHTML = '点击我'
div.appendChild(test);
div.appendChild(a);
a.click();
* */

// import {mutation} from './webWorker/driver/decorator';

// class A{
//     @mutation()
//     test(msg){
//         console.log('test');
//     }
// }

// const testA = new A();
// testA.test('hello');
// testA.test('world');
// new A().test('good')
// })
