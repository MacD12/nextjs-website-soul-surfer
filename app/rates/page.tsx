import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageSections from "../../components/PageSections";

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
        title="Surf Packages & Weekly Rates"
        subtitle="Clear pricing for every package and room — lessons, yoga, theory, video analysis and daily social activities included."
      />
      <PageSections blocks={["rates"]} />
    </>
  );
}
