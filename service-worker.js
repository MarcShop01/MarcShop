// service-worker.js

const CACHE_NAME = 'marcshop-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/panier.html',
    '/produits.html',
    '/styles.css',
    '/scripts.js',
    '/images/icon-192x192.png', // Assurez-vous de lier correctement vos icônes
    '/images/icon-512x512.png'
];

// Lors de l'installation du service worker, nous mettons en cache les fichiers nécessaires
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Lors de la récupération de ressources (par exemple, lors de l'accès à des pages), nous les servons depuis le cache si elles sont disponibles
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Si la ressource est dans le cache, la retourner
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Sinon, effectuer la requête réseau
                return fetch(event.request);
            })
    );
});

// Lors de la mise à jour du service worker, nous supprimons les anciennes versions du cache
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});