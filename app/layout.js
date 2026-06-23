import "./overrides.css";
import Scripts from "./Scripts";

// Metadata kept identical to the original export (non-visual).
export const metadata = {
  title:
    "Maldives Honeymoons & Sri Lanka Tours | Luxury Travel from the Specialist | Tailor-Made Luxury Tours in Cologne | The Surfer Travel GmbH",
  description:
    "Independent boutique surf retreat in Weligama, Sri Lanka — brand-new rooms, a rooftop infinity pool, sea-view dining, and surf weeks for the dedicated surfer.",
  icons: {
    icon: "/assets/www.beyondsenses.de/wp-content/uploads/2025/10/favicon-icon.png",
    apple: "/assets/www.beyondsenses.de/wp-content/uploads/2025/10/favicon-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// The exact <body> classes from the original page — Elementor's CSS targets these
// (elementor-kit-6, elementor-page-2, etc.), so they must be preserved verbatim.
const BODY_CLASS =
  "home wp-singular page-template page-template-elementor_header_footer page page-id-2 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-2 e--ua-blink e--ua-chrome e--ua-webkit";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
