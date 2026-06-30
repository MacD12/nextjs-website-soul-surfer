import type { Metadata } from "next";
import SiteMain from "../components/SiteMain";
import FaqSchema from "../components/FaqSchema";

// Canonical URL for the home page (prevents duplicate-content ambiguity).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Home page — the full original homepage content, unchanged. The header, footer
// and client islands are provided by the shared layout, so this renders only the
// page body (hero → packages → about → … → FAQ) exactly as before. FaqSchema adds
// the FAQPage structured data for the FAQ section near the bottom of the page.
export default function Page() {
  return (
    <>
      <FaqSchema />
      <SiteMain />
    </>
  );
}
