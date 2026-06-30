import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageSections from "../../components/PageSections";
import BookingCTA from "../../components/BookingCTA";
import FaqSchema from "../../components/FaqSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ — Soul Surfer",
  description:
    "Frequently asked questions about Soul Surfer Camp in Weligama — how it differs from the Beach Camp and TS2, surf levels, facilities and more.",
};

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <PageHero
        eyebrow="Good to know"
        title="Questions & Answers"
        subtitle="Everything you might want to know before you book your surf week with Soul Surfer."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <PageSections blocks={["faq"]} />
      <BookingCTA
        title="Still have a question?"
        text="Can't find what you're looking for? Our team is happy to help you plan the perfect surf week."
        ctaLabel="Plan your trip"
        ctaHref="/rates"
        secondaryLabel="See the rooms"
        secondaryHref="/rooms"
      />
    </>
  );
}
