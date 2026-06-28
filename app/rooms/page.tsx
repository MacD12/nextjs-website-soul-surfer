import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageSections from "../../components/PageSections";
import TrustStrip from "../../components/TrustStrip";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Rooms & Packages — Soul Surfer",
  description:
    "Boutique-style rooms and surf packages at Soul Surfer Camp, Weligama — from mixed dormitories to private ensuite rooms.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay with us"
        title="Rooms & Surf Packages"
        subtitle="Boutique-style comfort for every kind of surfer — share a dorm, retreat to a private ensuite, or pair a room with the surf week that fits you."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Rooms" }]} />
      <PageSections blocks={["packages"]} />
      <TrustStrip />
      <BookingCTA
        title="Found your room?"
        text="See the full weekly rates, pick your package and lock in your dates — minutes from the bay and the surf."
        ctaLabel="See rates"
        ctaHref="/rates"
        secondaryLabel="Read FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
