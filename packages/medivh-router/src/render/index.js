
import {Constant} from 'medivh-common';
const {ID} = Constant;

const HASH_CHANGE = 'hashchange';
const HandlerMap = {};

export default {
  window: {
    addHashEventListener(handler, options) {
      // console.log('in addEventListener :', handler);
      const invokeId = handler[ID];
      if (invokeId && HandlerMap[invokeId]) {
        handler = HandlerMap[invokeId];
      } else {
        const prevHandler = handler;
        handler = function(e) {
          prevHandler({
            hash: location.hash
          });
        };
        HandlerMap[invokeId] = handler;
      }
      window.addEventListener(HASH_CHANGE, handler, options);
    },
    removeHashEventListener(handler, options) {
      const invokeId = handler[ID];
      if (invokeId && HandlerMap[invokeId]) {
        handler = HandlerMap[invokeId];
        window.removeEventListener(HASH_CHANGE, handler, options);
      }
    },
    changeHash(hash) {
      if (hash == null) {
        hash = '#/';
      }
      location.hash = hash;
    }
  }
};