//importScripts('js/analytics-helper.js');

//importScripts('js/sw-offline-google-analytics.js');
//goog.offlineGoogleAnalytics.initialize();
var CACHE_DYNAMIC_NAME = 'content-1';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
workbox.precaching.precacheAndRoute([
    '/',
	'/index.html',
	'/css/basic.css',
	'/css/newcreation.css',
	'/css/styles.css',
	'/files/images/NavBack.png',
	'/files/images/NavFront.png',
	'/files/images/NavBack.png',
	'/files/images/NavPath.png',
	'/files/newcreation/newcreation/confession.html',
	'/files/newcreation/newcreation/glossary.html',
	'/files/newcreation/newcreation/house.html',
	'/files/newcreation/newcreation/notes.html',
	'/files/newcreation/newcreation/path.html',
	'/files/newcreation/newcreation/pilgrimage.html',
	'/files/newcreation/newcreation/prayer.html',
	'/files/newcreation/newcreation/soil.html',
	'/files/newcreation/newcreation/toc.html',
	'/files/newcreation/newcreation/prayer.html',
	'/js/app.js',
	'/js/HomeView.js',
	'/js/PageView.js',
	'/js/BookListView.js',
	'/js/services/PageService.js',
]);

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  workbox.strategies.staleWhileRevalidate(),
);


workbox.routing.registerRoute(
  /.*\.(?:html|htm|shtml|png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.networkFirst({
    cacheName: CACHE_DYNAMIC_NAME,
  }),
);