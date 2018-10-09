
function appendHash(url, hash) {
  if (url == null) return url;
  if (!hash) return url;
  const hashIndex = url.indexOf('#');
  if (hashIndex >= 0 ) {
    return url.substring(0, hashIndex) + hash;
  }
  return url + hash;
}




export default function(Runtime, prefix, location, sync) {
  const {invokeCallback} = Runtime;
  const localLocation = {
    host: location.host,
    hostname: location.hostname,
    origin: location.origin,
    pathname: location.pathname,
    port: location.port,
    protocol: location.protocol,
    reload() {

    },
    replace() {

    }
  };
  Object.defineProperty(localLocation, 'hash', {
    set: function(newHash) {
      localLocation._hash = newHash;
      localLocation.href = appendHash(location.href, newHash);
      sync && invokeCallback(`${prefix}.window.changeHash`, newHash);
    },
    get: function() {
      return localLocation._hash;
    }
  });
  localLocation.hash = localLocation.hash;
  const polyFill = {
    sync,
    addHashEventListener(event, handler, opt) {
      invokeCallback(`${prefix}.window.addHashEventListener`, event, handler, opt);
    },
    removeHashEventListener(event, handler, opt) {
      invokeCallback(`${prefix}.window.addEventListener`, event, handler, opt);
    },
    location: localLocation,
    history: {
      state: {

      },
      back() {

      },
      forward() {

      },
      go() {

      },
      pushState() {
        
      },
      replaceState() {

      }
    },
    navigator: {
      userAgent: ''
    },
    confirm: function(message) {

    },
  };
  return polyFill;
}