


export function invoke(type, data) {
  global.postMessage({
    type,
    data
  });
}

export function init(cb) {
  if (global.addMessage) {
    global.addMessage(cb);
  } else {
    global.onmessage = function({ data }) {
      cb(data);
    };
    // global.addEventListener('message', function({data}) {
    //   cb(data);
    // });
  }
}

