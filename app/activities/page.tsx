import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageSections from "../../components/PageSections";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/activities" },
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
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Activities" }]}
      />
      <PageSections blocks={["activities", "whysurf"]} />
      <BookingCTA
        title="Come live the camp life"
        text="Surf, yoga, sunset dinners and a crew from all over the world. Pick your week and we'll handle the rest."
        ctaLabel="View packages"
        ctaHref="/rooms"
        secondaryLabel="See rates"
        secondaryHref="/rates"
      />
    </>
  );
}
