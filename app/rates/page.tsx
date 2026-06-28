import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageSections from "../../components/PageSections";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Rates — Soul Surfer",
  description:
    "Surf packages and weekly rates at Soul Surfer Camp, Weligama — lessons, yoga, accommodation and full pricing per week and per night.",
};

export default function RatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan your week"
        title="Rates & Pricing"
        subtitle="Clear pricing for every package and room — lessons, yoga, theory, video analysis and daily social activities included."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Rates" }]} />
      <PageSections blocks={["rates"]} />
      <BookingCTA
        title="Ready to lock in your week?"
        text="Tell us your dates and group, and our Weligama team will confirm availability and hold your spot — no deposit required."
        ctaLabel="Book now"
        ctaHref="/rooms"
        secondaryLabel="Got questions?"
        secondaryHref="/faq"
      />
    </>
  );
}
