"use client";

import { useState } from "react";

// Interactive room gallery that keeps the exact frame it replaces — one large
// image (col-span-2) + two thumbnails — but lets you move through the photos:
// arrows + dots on the main image, and click a thumbnail to bring it into view.
// Layout, sizes and corners are unchanged; only the images move.
//
// The kit styles every <button> with a dark fill + radius + padding, so each
// control forces its own look with `!` (important) + appearance-none — otherwise
// the dots render as dark pills and the thumbnails get a dark frame.
const ARROW =
  "absolute top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center appearance-none rounded-full !border !border-white/40 !bg-white/25 !p-0 text-lg font-bold leading-none !text-white opacity-0 shadow-md backdrop-blur-sm transition duration-300 hover:!bg-white/40 group-hover:opacity-100";

export default function RoomPhotos({
  images,
  name,
  className = "",
}: {
  images: string[];
  name: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (delta: number) => setActive((a) => (a + delta + count) % count);
  const thumbs = images.map((_, i) => i).filter((i) => i !== active);
  const src = (img: string) => `/assets/rooms/${img}.jpg`;

  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {/* Main image — same box as before (col-span-2, 300/340px, 15px radius) */}
      <div className="group relative col-span-2 overflow-hidden rounded-[15px] shadow-sm">
        <img
          src={src(images[active])}
          alt={`${name} at Soul Surfer Camp, Weligama — photo ${active + 1} of ${count}`}
          loading="lazy"
          width={800}
          height={600}
          className="h-[300px] w-full object-cover sm:h-[340px]"
        />
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className={`left-3 ${ARROW}`}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className={`right-3 ${ARROW}`}
        >
          ›
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-1.5 appearance-none !rounded-full !border-0 !p-0 shadow-[0_0_3px_rgba(0,0,0,0.4)] transition-all duration-300 ${
                i === active ? "w-5 !bg-white" : "w-1.5 !bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Two thumbnails — same boxes (130/150px, 12px radius), now clickable */}
      {thumbs.map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`View photo ${i + 1}`}
          className="group block appearance-none overflow-hidden !rounded-[12px] !border-0 !bg-transparent !p-0 shadow-sm"
        >
          <img
            src={src(images[i])}
            alt={`${name} at Soul Surfer Camp, Weligama`}
            loading="lazy"
            width={400}
            height={300}
            className="h-[130px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[150px]"
          />
        </button>
      ))}
    </div>
  );
}
