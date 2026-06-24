import type { Config } from "tailwindcss";

// Tailwind is layered on top of the ported Elementor stylesheet. Preflight (the
// Tailwind CSS reset) is DISABLED on purpose: it would override the Elementor
// design (margins, headings, lists, form controls) and break the look. Utilities
// remain fully available for any new UI we build.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        onest: ['"Onest"', "sans-serif"],
      },
      colors: {
        // Soul Surfer palette — extracted from the reference design.
        "ss-taupe": "#D7D2C4", // Rooms section background
        "ss-cream": "#ECE8DD", // light section background
        "ss-white": "#FFFFFF", // cards & form surfaces
        "ss-espresso": "#2B2722", // buttons, dark card, headings
        "ss-cocoa": "#3A362E", // inner dark panels
        "ss-sage": "#7E9A82", // green accents & eyebrow labels
        "ss-body": "#6E6A61", // paragraph text
      },
    },
  },
  plugins: [],
};

export default config;
