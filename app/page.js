import SiteHeader from "../components/SiteHeader";
import SiteMain from "../components/SiteMain";
import SiteFooter from "../components/SiteFooter";
import SectionAnchors from "../components/SectionAnchors";

// The page is now composed from real components — header, main and footer are
// separate units instead of one monolithic HTML blob. Each is server-rendered
// (fully SSR'd, SEO-friendly); SectionAnchors is the only client island.
export default function Page() {
  return (
    <>
      <SiteHeader />
      <SiteMain />
      <SiteFooter />
      <SectionAnchors />
    </>
  );
}
