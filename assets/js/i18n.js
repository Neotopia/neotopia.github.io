/**
 * i18n.js — applies a language to [data-i18n] elements, from `translations`
 * (declared in the page, before this script). Ignores the URL and
 * localStorage — that's lang-router.js's job.
 *
 * API: window.setLang(lang). Emits `langchange` on `document`.
 */
(function () {
  window.currentLang = 'en';

  window.setLang = function (lang) {
    var dict = (typeof translations !== 'undefined') ? translations[lang] : null;
    if (!dict) return;

    window.currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      // data-i18n-html: value contains trusted markup (e.g. an inline <a>),
      // set with innerHTML instead of textContent. Never use for user input.
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.documentElement.lang = lang;

    var btnEn = document.getElementById('btn-en');
    var btnFr = document.getElementById('btn-fr');
    if (btnEn) {
      btnEn.classList.toggle('lang-active', lang === 'en');
      btnEn.classList.toggle('text-slate-500', lang !== 'en');
      btnEn.setAttribute('aria-pressed', lang === 'en');
    }
    if (btnFr) {
      btnFr.classList.toggle('lang-active', lang === 'fr');
      btnFr.classList.toggle('text-slate-500', lang !== 'fr');
      btnFr.setAttribute('aria-pressed', lang === 'fr');
    }

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  };
})();
