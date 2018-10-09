// import DomRenderer from './webWorker/runtime/index';
// import Worker from './webWorker/index.worker';
// import '@alife/next/dist/next.css';


// DomRenderer({worker:new Worker()})


import app from './app.worker';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'worker-react-render';
import './app.less';

const renderer = render({
  workers: [{
    el: 'container',
    worker: app(),
  }], // 支持多个worker
  vdom: React,
  vdomRender: ReactDOM,
  uiFrameworks: [window.Next], // 可扩展
});

