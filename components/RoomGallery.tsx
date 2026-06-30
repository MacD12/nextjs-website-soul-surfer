"use client";

import { useEffect } from "react";

// Per-room image galleries.
//
// Each "Featured Rooms" card normally shows a single image. This upgrades each
// card into a small click-through gallery (prev/next arrows + dots). Images are
// clean photos from /assets/inline (the glitchy generated PNGs are intentionally
// avoided, which also replaces the broken Mixed Dormitory image). It runs in the
// browser and re-applies to swiper's duplicated slides via a MutationObserver —
// the same resilient pattern as the other client islands. The design is untouched
// aside from swapping the single image widget for the gallery.

// Self-hosted sample room photos (downloaded into /public/assets/rooms). Each
// room type gets three relevant images. Swap these paths for the real room photos
// whenever they're available.
const GALLERIES: Record<string, string[]> = {
  "mixed dormitory": [
    "/assets/rooms/dorm-1.jpg",
    "/assets/rooms/dorm-2.jpg",
    "/assets/rooms/dorm-3.jpg",
  ],
  "private single room ensuite": [
    "/assets/rooms/single-1.jpg",
    "/assets/rooms/single-2.jpg",
    "/assets/rooms/single-3.jpg",
  ],
  "private double / twin room ensuite": [
    "/assets/rooms/double-1.jpg",
    "/assets/rooms/double-2.jpg",
    "/assets/rooms/double-3.jpg",
  ],
};

type Gal = HTMLElement & { __ssGal?: boolean };

function galleryForCard(widget: Element): string[] | null {
  const card =
    widget.closest(".elementor-element-3b62ef7") ||
    widget.closest(".swiper-slide") ||
    widget.parentElement;
  const title = (card?.textContent || "").toLowerCase();
  for (const key of Object.keys(GALLERIES)) {
    if (title.includes(key)) return GALLERIES[key];
  }
  return null;
}

export default function RoomGallery() {
  useEffect(() => {
    function build(widget: Gal): void {
      if (widget.__ssGal) return;
      const images = galleryForCard(widget);
      if (!images || images.length === 0) return;
      widget.__ssGal = true;

      const alt =
        widget.querySelector("img")?.getAttribute("alt") ||
        "Soul Surfer room in Weligama, Sri Lanka";
      let index = 0;

      const gal = document.createElement("div");
      gal.className = "ss-gal";
      gal.innerHTML =
        `<img class="ss-gal-img" alt="${alt}" src="${images[0]}">` +
        `<button type="button" class="ss-gal-nav ss-gal-prev" aria-label="Previous photo">&#8249;</button>` +
        `<button type="button" class="ss-gal-nav ss-gal-next" aria-label="Next photo">&#8250;</button>` +
        `<div class="ss-gal-dots">` +
        images
          .map(
            (_, i) =>
              `<button type="button" class="ss-gal-dot${
                i === 0 ? " is-active" : ""
              }" aria-label="Photo ${i + 1} of ${images.length}"></button>`
          )
          .join("") +
        `</div>`;

      // Preload the other photos so switching is instant.
      images.forEach((src) => {
        const im = new window.Image();
        im.src = src;
      });

      const imgEl = gal.querySelector(".ss-gal-img") as HTMLImageElement;
      const dots = Array.from(gal.querySelectorAll(".ss-gal-dot"));
      function show(n: number): void {
        index = (n + images!.length) % images!.length;
        imgEl.src = images![index];
        dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
      }

      // Click handling. stopPropagation keeps the outer rooms carousel still.
      gal.addEventListener("click", (event) => {
        const target = event.target as Element;
        if (target.closest(".ss-gal-next")) {
          event.stopPropagation();
          event.preventDefault();
          show(index + 1);
        } else if (target.closest(".ss-gal-prev")) {
          event.stopPropagation();
          event.preventDefault();
          show(index - 1);
        } else if (target.closest(".ss-gal-dot")) {
          event.stopPropagation();
          event.preventDefault();
          show(dots.indexOf(target.closest(".ss-gal-dot") as Element));
        }
      });

      const original = widget.querySelector("picture") || widget.querySelector("img");
      if (original) original.replaceWith(gal);
      else widget.appendChild(gal);
    }

    function mountAll(): void {
      document
        .querySelectorAll<Gal>(
          ".elementor-element-2e3cd55 .elementor-element-e77e946"
        )
        .forEach(build);
    }

    mountAll();

    // Swiper clones slides for looping; re-apply to any late-added clones.
    const observer = new MutationObserver((mutations) => {
      const added = mutations.some((m) => m.addedNodes.length > 0);
      if (added) mountAll();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
