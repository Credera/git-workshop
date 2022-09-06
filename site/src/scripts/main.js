// Reload page if webpage cache is outdated
// https://web.dev/appcache-beginner/

window.addEventListener('load', function(e) {

  var appCache = window.applicationCache;

  if (appCache.status == appCache.UPDATEREADY) {
    window.applicationCache.swapCache();
    window.location.reload();
  }

}, false);
