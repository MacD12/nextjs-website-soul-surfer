import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageSections from "../../components/PageSections";

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
      <PageSections blocks={["about", "included", "location"]} />
    </>
  );
}
