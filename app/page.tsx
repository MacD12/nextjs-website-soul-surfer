import SiteMain from "../components/SiteMain";

// Home page — the full original homepage content, unchanged. The header, footer
// and client islands are provided by the shared layout, so this renders only the
// page body (hero → packages → about → … → FAQ) exactly as before.
export default function Page() {
  return <SiteMain />;
}
