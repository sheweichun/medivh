

import {Util} from 'medivh-common';
const {isString, isArray, isObject, assign} = Util;
const JS_CACHE = Object.create(null);
let workerId = 1;

// function generateQuery(param = {}) {
//   const paramStr = JSON.stringify(param);
//   return `?query=${paramStr}&hash=${location.hash}`;
// }

// function appendQuery(url, param = {luodan: 444}) {
//   if (param == null || url == null) return url;
//   const hashIndex = url.indexOf('#');
//   let hashStr = location.hash;
//   if (hashIndex >= 0) {
//     url = url.substring(0, hashIndex);
//   }
//   const askIndex = url.indexOf('?');
//   const paramStr = JSON.stringify(param);
//   const queryStr = encodeURIComponent(`query=${paramStr}&hash=${hashStr}`);
//   if (askIndex >= 0) {
//     if (url.charAt(url.length - 1) === '&') {
//       return `${url}${queryStr}`;
//     }
//     return `${url}${queryStr ? '&' + queryStr : queryStr}`;
//   }
//   return `${url}${queryStr ? '?' + queryStr : queryStr}`;
// }

function createWorker(content, url) {
  // content = `
  // console.log('location11123')
  // (function(global,$$search){
  //   // console.log('location1112 :',location,global,$$search)
  //   ${content}
  // }({
    
  // }),"${generateQuery(query)}")`;
  try {
    try {
      var blob;
    
      try {
            // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
        blob = new BlobBuilder();
        blob.append(content);
    
        blob = blob.getBlob();
      } catch (e) {
            // The proposed API
        blob = new Blob([content]);
      }
      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (url) {
      // throw Error('Inline worker is not supported');
      return new Worker(url);
    }
    
    // return new Worker(url);
  }
}

let docHead;
function loadCss(cssUrl) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = cssUrl;
  if (!docHead) {
    docHead = document.getElementsByTagName('head')[0];
  }
  docHead.appendChild(link);
  return link;
}

function loadCssList(cssUrlList) {
  return cssUrlList.map((cssURL) => {
    return loadCss(cssURL);
  });
}

export function removeCssEls(cssEls) {
  if (cssEls == null) return;
  return cssEls.forEach((el) => {
    docHead.removeChild(el);
  });
}

function toArray(obj) {
  if (obj == null) return [];
  if (isArray(obj)) {
    return obj;
  }
  return [obj];
}


function get(url, cache) {
  return new Promise((resolve, reject) => {
    const urlResp = JS_CACHE[url];
    if (cache && urlResp) {
      return resolve(urlResp);
    }
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function() {
      if (cache) {
        JS_CACHE[url] = this.responseText;
      }
      return resolve(this.responseText);
    }, false);
    oReq.addEventListener('abort', reject, false);
    oReq.addEventListener('error', reject, false);
    oReq.open('get', url, true);
    oReq.send();
  });
}

function getList(urls = [], splitChar) {
  return Promise.all(urls.map(function(url) {
    if (isObject(url)) {
      return get(url.url, url.cache);
    }
    return get(url);
  })).then(function(resps) {
    return resps.join(splitChar);
  });
}


export default function(item) {
  const {worker, el: preEl, cssUrls, jsUrls, jsCodes = '', splitChar = '\n'} = item;
  const el = isString(preEl) ? document.getElementById(preEl) : preEl;
  const cssUrlList = toArray(cssUrls);
  const jsUrlList = toArray(jsUrls);
  return new Promise((resolve, reject) => {
    if (worker == null) return reject(new Error('worker不能为空'));
    if (worker instanceof Worker) {
      worker.id = workerId++;
      return resolve(assign({}, item, {
        bundleJs: '',
        worker: worker,
        el,
        cssEls: loadCssList(cssUrlList)
      }));
    }
    getList([].concat(jsUrlList, worker), splitChar).then(function(responseText) {
      const loadedWorker = createWorker(jsCodes + responseText, null);
      loadedWorker.id = workerId++;
      return resolve(assign({}, item, {
        bundleJs: worker,
        worker: loadedWorker,
        el,
        cssEls: loadCssList(cssUrlList)
      }));
    }, reject);
  });
};