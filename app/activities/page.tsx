import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageSections from "../../components/PageSections";

export const metadata: Metadata = {
  title: "Activities — Soul Surfer",
  description:
    "More than just surf — boat parties, beach days, yoga, the rooftop pool and a camp that runs on its own rhythm in Weligama.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="More than just surf"
        title="Activities & Camp Life"
        subtitle="Boat parties, beach days, new friendships and stories you'll tell for years — here's everything that happens between the waves."
      />
      <PageSections blocks={["activities", "whysurf"]} />
    </>
  );
}
