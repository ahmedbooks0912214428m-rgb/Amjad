const CACHE_NAME='amjad-v1';
const ASSETS=['/','/index.html','/style.css','/lang.js','/app.js','/auth.js','/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(e.request.url.includes('/api/'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&res.type==='basic'){const cl=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cl))}return res}).catch(()=>caches.match('/index.html'))))});