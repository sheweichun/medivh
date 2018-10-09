// import './console';
var cacheVersion = 0;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'index.js';
const self = this;
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil( 
    caches.open(currentCache.offline).then(function(cache) {
    //   return cache.addAll([
    //       offlineUrl,   
    //     //   'sdada'
    //   ]); 
    })
  );
});

self.addEventListener('activate', event => {
  // console.log('activate');
  self.addEventListener('message', event => {
    // console.log('data :', event.data);
  });
});

self.addEventListener('fetch', event => {
  console.log('event.request.url1111 :', event.request.url);
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    // console.log(111);
    event.respondWith(
          fetch(event.request.url).catch(error => {
              // Return the offline page
            return caches.match(offlineUrl);
          })
     );
  } else {
    // console.log(222);
    event.respondWith(caches.match(event.request)
                        .then(function(response) {
                          return response || fetch(event.request);
                        })
            );
  }
});

