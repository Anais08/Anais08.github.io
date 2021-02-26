if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js', { scope: './' }).then(function(reg) {
		console.log('Registration succeeded. Scope is ' + reg.scope);
		}).catch(function(error) {
		console.log('Registration failed with ' + error);
	});
};

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll([
				'/index.html',
				'/portfolioind.css',
				'/affiche1.jpg',
				'/affiche2.jpg',
				'/affiche3.jpg',
				'/banderole1.jpg',
				'/banderole2.jpg',
				'/bmaffiche2.jpg',
				'/carteBio.png',
				'/carteBioVerso.png',
                '/CartonRecto2.png',
                '/CartonVerso2.png',
                '/chienPlumes.jpg',
                '/chienPlumes2.jpg',
                '/csslogo.png',
                '/EMBLEME2.png',
                '/favicon.png',
                '/fb.png',
                '/FC1.jpg',
                '/FC2.jpg',
                '/FC3.jpg',
                '/FC4.jpg',
                '/FC5.jpg',
                '/FSD2.jpg',
                '/html5.png',
                '/illustrator.png',
                '/indesign.png',
                '/insta.jpg',
                '/legumicity.jpg',
                '/legumicity2.jpg',
                '/linkedin.png',
                '/LogoBio.jpg',
                '/logoChoeurs2.jpg',
                '/LogoRP2.jpg',
                '/maisonSports.jpg',
                '/maisonSports2.jpg',
                '/moi2.jpg',
                '/photoFond.png',
                '/photoshop.png',
                '/Plaquette.jpg',
                '/POVF2.jpg',
                '/xd.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((r) => {
			console.log('[Service Worker] RÃ©cupÃ©ration de la ressource: '+e.request.url);
			return r || fetch(e.request).then((response) => {
                return caches.open('v1').then((cache) => {
					console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
					cache.put(e.request, response.clone());
					return response;
				});
			});
		})
	);
});