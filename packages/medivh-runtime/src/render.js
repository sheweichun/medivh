import {Constant, Rpc, Util} from 'medivh-common';
import {sanitize, instantial, getQuery} from './util';
import Updater from './updater';

const {invoke} = Rpc;
const {GLOBAL_RENDER, GET_RENDER_PARAM, LOCATION} = Constant;

// let renderParams;
let renderFunc, renderOption, renderParams, rendeFlag = false;


function renderDomByData(data, options) {
  const mountData = instantial(null, data, {}, Updater);
  const sendData = sanitize(mountData);
  invoke(GLOBAL_RENDER, {
    data: sendData,
    options: options
  });
}
export function start(params) {
  if (renderFunc) {
    renderParams = params;
    const data = renderFunc(renderParams, renderParams[LOCATION]);
    renderFunc = null;
    renderDomByData(data, renderOption);
  } 
  rendeFlag = true;
}


// GET_RENDER_PARAM
export default function render(data, options) {
  if (Util.isFunc(data)) {
    renderFunc = data;
    renderOption = options;
    if (rendeFlag) {
      start(renderParams);
    } else {
      invoke(GET_RENDER_PARAM);
    }
    // renderDomByData(renderFunc(renderParams), options);
  } else {
    renderDomByData(data, options);
  }
}