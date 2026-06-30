import type { Metadata } from "next";
import SiteMain from "../components/SiteMain";

// Canonical URL for the home page (prevents duplicate-content ambiguity).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Home page — the full original homepage content, unchanged. The header, footer
// and client islands are provided by the shared layout, so this renders only the
// page body (hero → packages → about → … → FAQ) exactly as before.
export default function Page() {
  return <SiteMain />;
}
