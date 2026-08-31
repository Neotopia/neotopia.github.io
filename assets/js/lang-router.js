/**
 * lang-router.js — persists the chosen language across pages (classic
 * navigation, no SPA). Load priority: ?lang= > localStorage > 'en'.
 * Updates [data-lang-link] links on change. Depends on i18n.js, include it
 * first.
 */
(function () {
  function readStoredLang() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }
  function storeLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  function updateLangLinks(lang) {
    document.querySelectorAll('[data-lang-link]').forEach(function (a) {
      var base = a.getAttribute('data-lang-link');
      a.href = base + '?lang=' + lang;
    });
  }

  document.addEventListener('langchange', function (e) {
    storeLang(e.detail.lang);
    updateLangLinks(e.detail.lang);
  });

  var urlLang = new URLSearchParams(window.location.search).get('lang');
  var storedLang = readStoredLang();
  var initialLang = (urlLang === 'fr' || urlLang === 'en') ? urlLang : (storedLang || 'en');

  setLang(initialLang);
})();
