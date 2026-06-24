"use client";

import { useEffect } from "react";
import de from "../lib/dictionary-de";

// EN/DE language experience.
//
// The page content is server-rendered English Elementor markup, so translation
// happens in the browser: an EN/DE toggle is injected into the header, and the
// selected language swaps the visible text nodes in place using the German
// catalog. The choice is persisted, <html lang> is updated, and a MutationObserver
// keeps dynamically-injected content (carousel clones, the reviews widget, the
// sticky-header clone) translated too. Nothing in the design markup is changed.

const STORAGE_KEY = "ss-lang";
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "SVG",
  "PATH",
  "TEXTAREA",
  "CODE",
  "PRE",
]);

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function translateTextNode(node, toGerman) {
  const value = node.nodeValue;
  if (!value || !value.trim()) return;

  if (toGerman) {
    const translation = de[normalize(value)];
    if (!translation) return;
    if (node.__en === undefined) node.__en = value; // remember the original
    const lead = value.match(/^\s*/)[0];
    const trail = value.match(/\s*$/)[0];
    node.nodeValue = lead + translation + trail;
  } else if (node.__en !== undefined) {
    node.nodeValue = node.__en; // restore English
  }
}

function translateTree(root, toGerman) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim())
        return NodeFilter.FILTER_REJECT;
      const parent = node.parentNode;
      if (parent && SKIP_TAGS.has(parent.nodeName))
        return NodeFilter.FILTER_REJECT;
      // Never touch the toggle's own labels.
      if (parent && parent.closest && parent.closest("[data-ss-lang]"))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) translateTextNode(node, toGerman);
}

export default function LanguageSwitcher() {
  useEffect(() => {
    let current = "en";

    function syncButtons(lang) {
      document.querySelectorAll("[data-ss-lang-btn]").forEach((btn) => {
        const active = btn.getAttribute("data-ss-lang-btn") === lang;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function setLanguage(lang) {
      current = lang;
      translateTree(document.body, lang === "de");
      document.documentElement.lang = lang;
      syncButtons(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
    }

    function buildToggle(floating) {
      const toggle = document.createElement("div");
      toggle.className = floating ? "ss-lang ss-lang--float" : "ss-lang";
      toggle.__ssLive = true; // distinguishes a real toggle from a cloned (dead) one
      toggle.setAttribute("data-ss-lang", "");
      toggle.setAttribute("role", "group");
      toggle.setAttribute("aria-label", "Language / Sprache");
      toggle.innerHTML =
        '<button type="button" data-ss-lang-btn="en" class="ss-lang-btn is-active" aria-pressed="true" lang="en">EN</button>' +
        '<span class="ss-lang-sep" aria-hidden="true"></span>' +
        '<button type="button" data-ss-lang-btn="de" class="ss-lang-btn" aria-pressed="false" lang="de">DE</button>';
      toggle.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-ss-lang-btn]");
        if (!btn) return;
        event.preventDefault();
        setLanguage(btn.getAttribute("data-ss-lang-btn"));
      });
      return toggle;
    }

    // Ensure every header carries one live toggle, grouped with the Book Now
    // button. Sticky-header cloning copies the toggle's markup but not its click
    // handler, so a clone without the __ssLive flag is replaced with a fresh one.
    function mountToggles() {
      const headers = document.querySelectorAll(
        "header.elementor-location-header"
      );
      if (headers.length === 0) {
        if (!document.querySelector(".ss-lang--float")) {
          document.body.appendChild(buildToggle(true));
        }
        return;
      }
      headers.forEach((header) => {
        const existing = header.querySelector("[data-ss-lang]");
        if (existing && existing.__ssLive) return; // already good
        if (existing) existing.remove(); // dead clone — drop it
        const toggle = buildToggle(false);
        const bookBtn = header.querySelector("a.elementor-button");
        const anchor = bookBtn ? bookBtn.closest(".elementor-widget") : null;
        if (anchor && anchor.parentNode) {
          anchor.parentNode.insertBefore(toggle, anchor);
        } else {
          const row = header.querySelector(".e-con-inner") || header;
          row.appendChild(toggle);
        }
        syncButtons(current);
      });
    }

    mountToggles();

    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    setLanguage(saved === "de" ? "de" : "en");

    // One persistent observer handles both late-mounted headers (sticky clone)
    // and late-injected content (carousel clones, the reviews widget). nodeValue
    // edits are characterData mutations, which we don't observe, so no loop.
    const observer = new MutationObserver((mutations) => {
      let headersChanged = false;
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((added) => {
          if (added.nodeType === 1) {
            if (
              added.matches?.("header.elementor-location-header") ||
              added.querySelector?.("header.elementor-location-header")
            ) {
              headersChanged = true;
            }
            if (current === "de") translateTree(added, true);
          } else if (added.nodeType === 3 && current === "de") {
            translateTextNode(added, true);
          }
        });
      }
      if (headersChanged) mountToggles();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
