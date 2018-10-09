 // 注册 service worker
 console.log('hello');
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('../service_worker_filter.js').then(function(registration) {
         // 注册成功
     const serviceWorkerController = navigator.serviceWorker.controller;
     if (registration.active) {
       console.log('active');
       serviceWorkerController.postMessage({
         a: 3,
         b: 4
       });
     } else if (registration.waiting) {
       console.log('waiting');
     }
     console.log('ServiceWorker registration successful with scope: ', registration.scope);
   }).catch(function(err) {
         // 注册失败
     console.log('ServiceWorker registration failed: ', err);
   });
 }