import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageSections from "../../components/PageSections";

export const metadata: Metadata = {
  title: "FAQ — Soul Surfer",
  description:
    "Frequently asked questions about Soul Surfer Camp in Weligama — how it differs from the Beach Camp and TS2, surf levels, facilities and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        subtitle="Everything you might want to know before you book your surf week with Soul Surfer."
      />
      <PageSections blocks={["faq"]} />
    </>
  );
}
