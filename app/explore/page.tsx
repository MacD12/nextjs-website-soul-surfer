import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageSections from "../../components/PageSections";
import TrustStrip from "../../components/TrustStrip";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Explore the Camp — Soul Surfer",
  description:
    "An independent boutique surf retreat in Weligama, Sri Lanka — its own location, a rooftop infinity pool and sea-view dining, built on 10+ years of The Surfer.",
};

export default function ExplorePage() {
  return (
    <>
      <PageHero
        eyebrow="The Soul Surfer story"
        title="Explore the Camp"
        subtitle="An independent retreat in Weligama with its own location, a rooftop infinity pool and a rhythm all of its own — just seconds from the beach."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Explore" }]} />
      <PageSections blocks={["about", "included", "location"]} />
      <TrustStrip />
      <BookingCTA
        title="Your surf week starts here"
        text="Brand-new rooms, a rooftop pool and a camp that runs on its own rhythm. Let's get you booked."
        ctaLabel="See packages"
        ctaHref="/rooms"
        secondaryLabel="View rates"
        secondaryHref="/rates"
      />
    </>
  );
}
