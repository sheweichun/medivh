


export function postMessage(worker, data) {
  worker.postMessage(data);
}

export function genOnMessage(cb) {
  return function({data}) {
    cb(data);
  };
}