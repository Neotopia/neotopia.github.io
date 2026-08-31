(function () {
      window.dataLayer = window.dataLayer || [];

      // Truncate long text so we don't push huge blobs into the dataLayer
      function truncate(str, max) {
        if (!str) return undefined;
        str = str.trim().replace(/\s+/g, ' ');
        return str.length > max ? str.slice(0, max) + '…' : str;
      }

      document.addEventListener('click', function (e) {
        // Walk up from the clicked element to the nearest clickable ancestor
        // (link, button, or anything with a data-i18n / id / role) so that
        // clicking an icon inside a link still reports the link itself.
        var el = e.target.closest('a, button, [role="button"]') || e.target;

        // project_name: dynamic for project cards (slug shown in the element marked
        // data-project-slug — a tracking-only marker, independent from the visual style).
        // Deliberately NOT the <h3>: its text is translated (data-i18n EN/FR), which would
        // make project_name vary with the visitor's language. The slug is never translated.
        // Otherwise falls back to a manual value set via data-project (e.g. profil-github).
        var slugEl = el.querySelector ? el.querySelector('[data-project-slug]') : null;
        var projectName = slugEl
          ? slugEl.innerText.trim()
          : (el.dataset ? el.dataset.project || undefined : undefined);

        dataLayer.push({
          event: 'generic_click',

          // --- dynamic: read from the DOM element ---
          click_tag: el.tagName ? el.tagName.toLowerCase() : undefined,
          click_text: truncate(el.innerText || el.textContent, 100),
          click_id: el.id || undefined,
          click_classes: el.className && typeof el.className === 'string' ? el.className : undefined,
          click_url: el.href || undefined,
          click_target: el.getAttribute && el.getAttribute('target') || undefined,
          project_name: projectName,

          // --- manual: read from data-* attributes ---
          interaction_type: el.dataset ? el.dataset.interactionType || undefined : undefined,
          platform: el.dataset ? el.dataset.platform || undefined : undefined,
          page_section: el.dataset ? el.dataset.section || undefined : undefined
        });
      }, true);
    })();
