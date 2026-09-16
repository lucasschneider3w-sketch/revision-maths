// Service worker : met toute l'appli en cache pour qu'elle marche sans réseau.
// ⚠️ Changer VERSION à chaque mise à jour du contenu ou du code.
const VERSION = '2026-09-16-1';
const CACHE = 'revision-maths-' + VERSION;

const FONTS = [
  'AMS-Regular', 'Caligraphic-Bold', 'Caligraphic-Regular', 'Fraktur-Bold', 'Fraktur-Regular',
  'Main-Bold', 'Main-BoldItalic', 'Main-Italic', 'Main-Regular', 'Math-BoldItalic', 'Math-Italic',
  'SansSerif-Bold', 'SansSerif-Italic', 'SansSerif-Regular', 'Script-Regular',
  'Size1-Regular', 'Size2-Regular', 'Size3-Regular', 'Size4-Regular', 'Typewriter-Regular',
].map((f) => `vendor/katex/fonts/KaTeX_${f}.woff2`);

const ASSETS = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'data/cours.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'vendor/katex/katex.min.css',
  'vendor/katex/katex.min.js',
  'vendor/katex/auto-render.min.js',
  ...FONTS,
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('revision-maths-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error()));
    })
  );
});
