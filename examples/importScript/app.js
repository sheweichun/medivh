// import DomRenderer from './webWorker/runtime/index';
// import Worker from './webWorker/index.worker';
// import '@alife/next/dist/next.css';


// DomRenderer({worker:new Worker()})


// import SaasWorker from './test.worker';
// import SaasWorker1 from './saas1.worker';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'worker-react-render';


const renderer = render({
  workers: [],
  vdom: React,
  vdomRender: ReactDOM,
  uiFrameworks: [window.Next, {
    Next: window.Next
  }]
});
renderer.addWorker({
  el: 'container',
  params: {
    a: 123
  },
  worker: 'http://192.168.125.118:8000/build/demo/app.worker.js',
  jsUrls: [
    'http://g.alicdn.com/taefed/saasFront/0.0.14/worker-react/worker-react.min.js',
    'http://g.alicdn.com/taefed/saasFront/0.0.14/worker-react-runtime/worker-react-runtime.min.js'
  ],
  cssUrls: ['http://192.168.125.118:8000/build/demo/app.worker.bundle.css']
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

