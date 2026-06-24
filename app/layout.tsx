import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./overrides.css";
import "./palette.css";
import Scripts from "./Scripts";

const SITE_TITLE =
  "Soul Surfer — Independent Boutique Surf Camp in Weligama, Sri Lanka";
const SITE_DESCRIPTION =
  "Soul Surfer is an independent boutique surf retreat in Weligama, Sri Lanka — brand-new rooms, a rooftop infinity pool, sea-view dining, and surf weeks for the dedicated surfer.";
const HERO_IMAGE = "/assets/inline/img-02-17464eee.jpeg";
// Responsive sources for the hero so phones preload a small WebP, not the 442 KB
// desktop JPEG. Mirrors the srcset injected into the <img> in main.html.
const HERO_SRCSET =
  "/assets/inline/img-02-17464eee-480w.webp 480w, " +
  "/assets/inline/img-02-17464eee-768w.webp 768w, " +
  "/assets/inline/img-02-17464eee-1200w.webp 1200w, " +
  "/assets/inline/img-02-17464eee.jpeg 1920w";
const FAVICON =
  "/assets/www.beyondsenses.de/wp-content/uploads/2025/10/favicon-icon.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://soulsurfer.example"
  ),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Soul Surfer",
  keywords: [
    "Soul Surfer",
    "surf camp Weligama",
    "Sri Lanka surf retreat",
    "surf and yoga",
    "Weligama surf lessons",
  ],
  icons: { icon: FAVICON, apple: FAVICON },
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Soul Surfer",
    images: [{ url: HERO_IMAGE, width: 1920, height: 1080, alt: "Soul Surfer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [HERO_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// The exact <body> classes from the original page — Elementor's CSS targets these
// (elementor-kit-6, elementor-page-2, etc.), so they must be preserved verbatim.
const BODY_CLASS =
  "home wp-singular page-template page-template-elementor_header_footer page page-id-2 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-2 e--ua-blink e--ua-chrome e--ua-webkit";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload the LCP hero so it starts downloading before the CSS/JS,
            shaving the largest-contentful-paint time. */}
        <link
          rel="preload"
          as="image"
          href={HERO_IMAGE}
          imageSrcSet={HERO_SRCSET}
          imageSizes="100vw"
          fetchPriority="high"
        />
        {/* All 49 original stylesheets, concatenated in document order. Served as a
            static file so the cascade and every url(../assets/…) resolve exactly
            as on the original page. */}
        <link rel="stylesheet" href="/css/app.css" />
      </head>
      <body className={BODY_CLASS} data-elementor-device-mode="tablet">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
