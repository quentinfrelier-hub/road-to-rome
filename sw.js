const C='rtr-v31';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','manifest.webmanifest','icon-192.png','icon-512.png','map-t1.jpg','map-t2.jpg','map-t3.jpg','map-t4.jpg','map-t5.jpg','map-arena.jpg','map-europe.jpg','boss-eiffel.jpg','boss-montmartre.jpg','muscu-sprites-0.png','muscu-sprites-1.png','muscu-sprites-2.png','muscu-sprites-3.png','muscu-sprites-4.png','boss-champs.jpg'])).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));}return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));});
