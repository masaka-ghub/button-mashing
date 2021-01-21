importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  '/index.html',
  '/app.css',
  '/app.js'
]);

self.addEventListener('fetch', (e) => {})