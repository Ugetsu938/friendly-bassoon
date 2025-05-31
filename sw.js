sw.js	js<br>(code block below)const CACHE='thirdspace-v8';
const OFFLINE='/offline.html';
self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll([
      '/','/index.html','/style.css','/main.js','/install.js',
      '/journal.html','/journal.css','/journal.js',OFFLINE
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match(OFFLINE)))
  );
});
