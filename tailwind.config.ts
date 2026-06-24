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
        // Brand colours pulled from the Elementor global palette.
        "ss-mint": "#BEF6D1",
      },
    },
  },
  plugins: [],
};

export default config;
