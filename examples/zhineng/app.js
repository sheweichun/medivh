import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'worker-react-render';
const Mock = {};


setTimeout(() => {
  if (!window.workbench) {
    // mock data
    let apis = {};
    let qn = window._QN_Open_SDK.QN;
    window._QN_Open_SDK.QN = window._QN_Open_SDK.QN_T;
    Object.keys(window._QN_Open_SDK.QN).map(name => {
      apis[name] = function(params) {
        if (Mock[name]) {
          return new Promise((resolve, reject) => {
            resolve(Mock[name]);
          });
        } else {
          return qn[name];
        }
      };
    });
    window._QN_Open_SDK.QN = apis;
  }
  const renderer = render({
    workers: [{
      el: 'container',
      cssUrls: ['http://g.alicdn.com/taefed/smart-guider/demo/app.worker.bundle.css'],
      worker: 'http://g.alicdn.com/taefed/smart-guider/demo/app.worker.js'
    }],
    vdom: React,
    vdomRender: ReactDOM, 
    uiFrameworks: [window.Next, {
      Kf: window._QN_Open_Componets
    }],
    context: window._QN_Open_SDK
  });
}, 1000);
