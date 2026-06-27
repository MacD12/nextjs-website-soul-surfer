import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageSections from "../../components/PageSections";

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
      <PageSections blocks={["packages"]} />
    </>
  );
}
