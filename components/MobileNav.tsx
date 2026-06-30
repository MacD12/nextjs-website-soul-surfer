"use client";

import { useEffect } from "react";

// Reliable mobile navigation.
//
// The ported Elementor menu widget is desktop-only (elementor-hidden-tablet /
// -mobile) and its responsive hamburger depends on the e-n-menu-tablet class +
// heavy menu JS that we had to disable to make the desktop nav work. So on
// phones/tablets there was no working navigation at all.
//
// This component provides its own hamburger + slide-in panel for <=1024px (where
// the desktop menu is hidden). It injects a burger button into every header —
// mirroring the EN/DE switcher — so the sticky-header clone gets one too, and
// builds a single overlay panel on <body>. Pure DOM + CSS; the design markup is
// untouched.

const LINKS = [
  { label: "Explore", href: "/explore" },
  { label: "Activities", href: "/activities" },
  { label: "Rooms", href: "/rooms" },
  { label: "Rates", href: "/rates" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogs", href: "/blog" },
];

type LiveBurger = HTMLButtonElement & { __ssLive?: boolean };

export default function MobileNav() {
  useEffect(() => {
    const OPEN_CLASS = "ss-mnav-active";

    function setExpanded(state: boolean): void {
      document
        .querySelectorAll("[data-ss-burger]")
        .forEach((b) => b.setAttribute("aria-expanded", state ? "true" : "false"));
    }
    function open(): void {
      document.body.classList.add(OPEN_CLASS);
      setExpanded(true);
    }
    function close(): void {
      document.body.classList.remove(OPEN_CLASS);
      setExpanded(false);
    }

    // --- the slide-in panel: built once, lives on <body> ---
    let panel = document.querySelector("[data-ss-mnav]") as HTMLElement | null;
    if (!panel) {
      panel = document.createElement("div");
      panel.className = "ss-mnav";
      panel.setAttribute("data-ss-mnav", "");
      panel.innerHTML =
        '<div class="ss-mnav-backdrop" data-ss-mnav-close></div>' +
        '<nav class="ss-mnav-panel" aria-label="Mobile navigation">' +
        '<button type="button" class="ss-mnav-x" data-ss-mnav-close aria-label="Close menu">&times;</button>' +
        '<ul class="ss-mnav-list">' +
        LINKS.map(
          (l) => `<li><a href="${l.href}" data-ss-mnav-link>${l.label}</a></li>`
        ).join("") +
        "</ul>" +
        '<a class="ss-mnav-book" href="/rooms" data-ss-mnav-link>Book Now</a>' +
        "</nav>";
      document.body.appendChild(panel);
      panel.addEventListener("click", (event) => {
        const target = event.target as Element | null;
        if (
          target?.closest("[data-ss-mnav-close]") ||
          target?.closest("[data-ss-mnav-link]")
        ) {
          close();
        }
      });
    }

    function onKey(event: KeyboardEvent): void {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);

    // --- inject a hamburger into every header (handles the sticky clone) ---
    function buildBurger(): LiveBurger {
      const burger = document.createElement("button") as LiveBurger;
      burger.type = "button";
      burger.className = "ss-burger";
      burger.__ssLive = true;
      burger.setAttribute("data-ss-burger", "");
      burger.setAttribute("aria-label", "Menu");
      burger.setAttribute("aria-expanded", "false");
      burger.innerHTML = "<span></span><span></span><span></span>";
      burger.addEventListener("click", (event) => {
        event.preventDefault();
        if (document.body.classList.contains(OPEN_CLASS)) close();
        else open();
      });
      return burger;
    }

    function mountBurgers(): void {
      const headers = document.querySelectorAll<HTMLElement>(
        "header.elementor-location-header"
      );
      headers.forEach((header) => {
        const existing = header.querySelector(
          "[data-ss-burger]"
        ) as LiveBurger | null;
        if (existing && existing.__ssLive) return; // already good
        if (existing) existing.remove(); // dead clone — replace it
        const burger = buildBurger();
        // Sit next to the other header controls (just before "Book Now").
        const bookBtn = header.querySelector("a.elementor-button");
        const anchor = bookBtn ? bookBtn.closest(".elementor-widget") : null;
        if (anchor && anchor.parentNode) {
          anchor.parentNode.insertBefore(burger, anchor);
        } else {
          const row = header.querySelector(".e-con-inner") || header;
          row.appendChild(burger);
        }
      });
    }

    mountBurgers();

    const observer = new MutationObserver((mutations) => {
      let headersChanged = false;
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((added) => {
          if (added.nodeType === 1) {
            const el = added as Element;
            if (
              el.matches?.("header.elementor-location-header") ||
              el.querySelector?.("header.elementor-location-header")
            ) {
              headersChanged = true;
            }
          }
        });
      }
      if (headersChanged) mountBurgers();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", onKey);
      close();
    };
  }, []);

  return null;
}
