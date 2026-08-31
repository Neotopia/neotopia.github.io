# Portfolio

Personal portfolio site, Digital Analytics & Data Analyst.

**Live site → [neotopia.github.io](https://neotopia.github.io)**

## About

Covers background, skills, and projects in digital analytics and data.

## Stack

- Plain HTML/CSS/JS, no build step
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Hosted on GitHub Pages

## Tracking & privacy

The site uses Google Analytics 4 (via Google Tag Manager, including a server-side container on Cloud Run) for basic audience measurement, with Cookiebot for cookie consent. See the [privacy policy](https://neotopia.github.io/politique-confidentialite.html) for details.

## File structure

```
index.html                      # Main portfolio page
politique-confidentialite.html  # Privacy policy (FR/EN)
assets/
  css/style.css                 # Shared styles
  js/
    tailwind-config.js          # Design tokens (colors, font)
    i18n.js                     # Translation engine
    lang-router.js              # Language persistence across pages
    tracking.js                 # Click tracking → dataLayer
```

## Contact

- LinkedIn: [linkedin.com/in/lisa-momas](https://www.linkedin.com/in/lisa-momas/)
- GitHub: [github.com/Neotopia](https://github.com/Neotopia)
- Medium: [medium.com/@lisamomas](https://medium.com/@lisamomas)
