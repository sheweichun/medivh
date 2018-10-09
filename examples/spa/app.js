// import DomRenderer from './webWorker/runtime/index';
// import Worker from './webWorker/index.worker';
// import '@alife/next/dist/next.css';


// DomRenderer({worker:new Worker()})


import app from './app.worker';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterRender from 'worker-react-router/../render';
// import * as ReactRouterDom from 'react-router-dom';
import { render } from 'worker-react-render';
// app();
const renderer = render({
  workers: [{
    el: 'container',
    worker: app({a: 33}),
    query: {
      abc: 3
    }
    // worker: '//localhost:9000/25d762e83ca5154b24a7.worker.js'
  }],
  context: {
    RouterRender: RouterRender
  },
  vdom: React, 
  vdomRender: ReactDOM,
  uiFrameworks: [window.Next],
});

