"use client";

import { useEffect } from "react";

// The original page's scripts, in exact document order. Loaded after the markup is
// in the DOM. `async = false` on dynamically-created scripts guarantees they execute
// in insertion order (jQuery before Elementor, *-before configs before their script,
// etc.) — exactly like the original page.
const SCRIPTS = [
  "/js/j006-ear-licensing-helper-js-after.js",
  "/js/j007-jquery-core-js.js",
  "/js/j008-inline.js",
  "/js/j009-pmcs-1-video-play-fallback-js.js",
  "/js/j011-inline.js",
  "/js/j012-elementor-webpack-runtime-js.js",
  "/js/j013-elementor-frontend-modules-js.js",
  "/js/j014-jquery-ui-core-js.js",
  "/js/j015-elementor-frontend-js-before.js",
  "/js/j016-elementor-frontend-js.js",
  "/js/j017-smartmenus-js.js",
  "/js/j018-e-sticky-js.js",
  "/js/j019-imagesloaded-js.js",
  "/js/j020-perfmatters-lazy-load-js-before.js",
  "/js/j021-perfmatters-lazy-load-js.js",
  "/js/j022-trustindex-loader-js-js.js",
  "/js/j023-elementor-pro-webpack-runtime-js.js",
  "/js/j024-wp-hooks-js.js",
  "/js/j025-wp-i18n-js.js",
  "/js/j026-wp-i18n-js-after.js",
  "/js/j027-elementor-pro-frontend-js-before.js",
  "/js/j028-elementor-pro-frontend-js.js",
  "/js/j029-pro-elements-handlers-js.js",
  "/js/j032-inline.js",
  "/js/j033-inline.js",
  "/js/j034-perfmatters-delayed-scripts-js.js",
  "/js/j035-inline.js",
  "/js/j036-inline.js",
  "/js/zz-reveal.js",
];

export default function Scripts() {
  useEffect(() => {
    // Guard against accidental double-injection (e.g. fast refresh).
    if (window.__soulSurferScriptsLoaded) return;
    window.__soulSurferScriptsLoaded = true;

    for (const src of SCRIPTS) {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // preserve execution order
      document.body.appendChild(s);
    }
  }, []);

  return null;
}
