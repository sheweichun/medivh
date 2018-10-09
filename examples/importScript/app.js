// import DomRenderer from './webWorker/runtime/index';
// import Worker from './webWorker/index.worker';
// import '@alife/next/dist/next.css';


// DomRenderer({worker:new Worker()})


// import SaasWorker from './test.worker';
// import SaasWorker1 from './saas1.worker';
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'worker-react-render';


const json_count_map = {};
const Jsonp = (options) => {
  const startTm = Date.now();
  return new Promise((resolve, reject) => {
    const {url, jsonpCallbackName = 'callbackName', jsonpCallback = 'callback'} = options;
    if (!url) {
      return reject(new Error('缺少url参数'));
    }
    let loaded = 0;
    try {
      if (!window[jsonpCallbackName]) {
        json_count_map[jsonpCallbackName] = {data: [], count: 1};
        window[jsonpCallbackName] = (data) => {
                    // console.log('data :',data);
          json_count_map[jsonpCallbackName].data.push(data);
        };
      } else {
        json_count_map[jsonpCallbackName].count += 1;
      }
      const readyState = 'readyState';
      const script = document.createElement('script');
      const head = document.getElementsByTagName('head')[0];
      script.type = 'text/javascript';
      script.src = `${url}?${jsonpCallback}=${jsonpCallbackName}`;
      script.async = true;
      script.onerror = function(e) {
        head.removeChild(script);
        if (json_count_map[jsonpCallbackName]) {
          json_count_map[jsonpCallbackName].count -= 1;
          if (json_count_map[jsonpCallbackName].count <= 0) {
            delete json_count_map[jsonpCallbackName];
            delete window[jsonpCallbackName]; 
          }
        }
        reject(new Error('加载失败'));
      };
      script.onload = script.onreadystatechange = function() {
        if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
          return false;
        }
        script.onload = script.onreadystatechange = null;
        script.onclick && script.onclick();
                // console.log(object);
                // Call the user callback with the last value stored and clean up values and scripts.
        let retValue;
        if (json_count_map[jsonpCallbackName]) {
          retValue = json_count_map[jsonpCallbackName].data.pop();
          json_count_map[jsonpCallbackName].count -= 1;
          if (json_count_map[jsonpCallbackName].count <= 0) {
            delete json_count_map[jsonpCallbackName];
            delete window[jsonpCallbackName]; 
          }
        }
        head.removeChild(script);
        loaded = 1;
        resolve(retValue);
      };
      head.appendChild(script);
    } catch (e) {
      reject(e.message);
    }
  });
};


Jsonp({
  jsonpCallbackName: 'MedivhRender',
  url: 'http://g-assets.daily.taobao.net/rock/medivh/0.0.2/medivh-render/medivh-render.jsonp.min.js'
}).then(({render}) => {
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
    worker: 'http://30.8.52.83:8000/build/demo/app.worker.js',
    jsUrls: [
      'http://g-assets.daily.taobao.net/rock/medivh/0.0.2/medivh/medivh.min.js',
      'http://g-assets.daily.taobao.net/rock/medivh/0.0.2/medivh-runtime/medivh-runtime.min.js'
    ],
    cssUrls: ['http://30.8.52.83:8000/build/demo/app.worker.bundle.css']
  }).then((worker) => {
    setTimeout(() => {
      worker.destroy();
    }, 1000);
  });
});



