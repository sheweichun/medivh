// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import {Constant, Dev, Util} from 'medivh-common';
import loadWorker, {removeCssEls} from './load_worker';
import createParse from './parse';
import Invoker, {deserialize} from './invoke';
import genComponentMap from './component_map';
import {postMessage, genOnMessage} from './util';
const {cloneArgs, isEvent, isArray, isString, assign} = Util;
const {devHandle} = Dev;
const {GLOBAL_RENDER, COMPONENT_RENDER, INVOKE, FUN_CALLBACK, GET_RENDER_PARAM, SEND_RENDER_PARAM,
    LIEF_CYCLE_CALLBACK, STOP_PROPAGATION, PREVENT_DEFAULT, LOCATION} = Constant;

function genPostLifeCycleMessage(worker) {
  return function(componentId, cycleName, args) {
    postMessage(worker, {
      type: LIEF_CYCLE_CALLBACK,
      data: {
        id: componentId,
        cycleName,
        params: []
      }
    });
  };
}
function generateFunProxy(worker) {
  return function(attrName, componentId, funId, targetProps, ...args) {
    const newArgs = args.map((arg) => {
      if (isEvent(arg)) {
        const preventDefaultFlag = targetProps[`${attrName}${PREVENT_DEFAULT}`];
        const stopPropagationFlag = targetProps[`${attrName}${STOP_PROPAGATION}`];
        if (preventDefaultFlag) {
          arg.preventDefault && arg.preventDefault();
        }
        if (stopPropagationFlag) {
          arg.stopPropagation && arg.stopPropagation();
        }
        return {
          metaKey: arg.metaKey,
          altKey: arg.altKey,
          ctrlKey: arg.ctrlKey,
          shiftKey: arg.shiftKey,
          button: arg.button
        };
      }
      return arg;
    });
    const sendArgs = cloneArgs(newArgs);
    postMessage(worker, {
      type: FUN_CALLBACK,
      data: {
        id: funId,
        componentId,
        params: sendArgs
      }
    });
  };
}









export default function(option) {
  const {workers, vdom, vdomRender, uiFrameworks, context} = option;
  const preWorkerList = isArray(workers) ? workers : [workers];
  let workerList = [];
  let initFlag = false;
  const uiFrameworkList = isArray(uiFrameworks) ? uiFrameworks : [uiFrameworks];
  const invokeContext = context || {};
  const instance = {
    addWorker(preWorkerItem) {
      return loadWorker(preWorkerItem).then((workerItem) => {
        const ret = this.initWorker(workerItem);
        workerList.push(ret);
        return ret;
      });
    },
    getWorkerList() {
      return workerList;
    },
    registerContext(namespace, ctx) {
      invokeContext[namespace] = ctx;
    },
    registerFrameWorker(newUIFramework) {
      uiFrameworkList.push(newUIFramework);
    },
    initWorkerList() {
      if (initFlag) return;
      initFlag = true;
      preWorkerList.forEach((preWorkerItem) => {
        loadWorker(preWorkerItem).then((workerItem) => {
          workerList.push(this.initWorker(workerItem));
        }, (err) => {
          console.error(err);
        });
      });
    },
    removeWorker(workItem) {
      for (let i = 0; i < workerList.length; i++) {
        if (workerList[i] === workItem) {
          workerList.splice(i, 1);
          return;
        }
      }
    },
    initWorker(workerItem) {
      const _this = this;
      try {
        const {worker, el, bundleJs, cssEls, cssUrls, query, hash} = workerItem;
        workerItem.destroy = function(clear) {
          if (clear) {
            if (vdomRender && vdomRender.unmountComponentAtNode) {
              vdomRender.unmountComponentAtNode(el);
              el.innerHTML = '';
            }
            removeCssEls(cssEls);
          }
          worker.terminate();
          _this.removeWorker(this);
        };
        workerItem.reload = function() {
          this.destroy();
          if (bundleJs) {
            _this.addWorker({
              el: el,
              worker: bundleJs,
              cssUrls
            });
          }
        };
        workerItem.componentMap = genComponentMap(workerItem);
        const parser = createParse({
          React: vdom,
          ReactDOM: vdomRender,
          componentMap: workerItem.componentMap,
          UIFrameworks: uiFrameworkList,
          FunProxy: generateFunProxy(worker),
          postLifeCycleMessage: genPostLifeCycleMessage(worker)
        });
        worker.onmessage = genOnMessage((data) => {
          const {type} = data;
          if (type === GLOBAL_RENDER) {
            const {data: renderData} = data.data;
            vdomRender.render(parser(renderData), el);
          } else if (type === COMPONENT_RENDER) {
            const {data: stateData, componentId} = data.data;
            const target = workerItem.componentMap.get(componentId);
            if (!target) return;
            target.setState({
              data: parser(stateData)
            });
          } else if (type === INVOKE) {
            const {api, params, method, success, error} = data.data;
            if (Invoker[method]) {
              // console.log('api :', api, params);
              Invoker[method](invokeContext, api, deserialize(params, worker, parser), deserialize(success, worker, parser), deserialize(error, worker, parser));
            }
          } else if ( type === GET_RENDER_PARAM) {
            postMessage(worker, {
              type: SEND_RENDER_PARAM,
              data: assign({}, query, {
                [LOCATION]: {
                  hash: hash || location.hash,
                  host: location.host,
                  hostname: location.hostname,
                  href: location.href,
                  origin: location.origin,
                  pathname: location.pathname,
                  port: location.port,
                  protocol: location.protocol
                }
              })
            });
          }
          devHandle(data, worker);
        });
        return workerItem;
      } catch (e) {
        console.error(e);
      }
    }
  };
  instance.initWorkerList();
  return instance;
}
