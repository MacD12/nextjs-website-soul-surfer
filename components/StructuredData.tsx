// Server-rendered JSON-LD structured data. This is the biggest single SEO lever:
// it lets Google understand the business (local listing, rich results, ratings,
// breadcrumbs) rather than guessing from the page text. Output goes into the
// initial HTML so crawlers see it without running JS.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://soulsurfer.example";

const lodging = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#camp`,
  name: "Soul Surfer",
  alternateName: "Soul Surfer Camp",
  description:
    "Independent boutique surf retreat in Weligama, Sri Lanka — brand-new rooms, a rooftop infinity pool, sea-view dining and weekly surf packages for the dedicated surfer.",
  url: SITE_URL,
  image: `${SITE_URL}/assets/inline/img-02-17464eee.jpeg`,
  email: "info@thesurferweligama.com",
  priceRange: "€390–€490 / week",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 140/13, 3rd Lane, Paranakade",
    addressLocality: "Weligama",
    postalCode: "81700",
    addressRegion: "Southern Province",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.9749,
    longitude: 80.4294,
  },
  areaServed: { "@type": "Place", name: "Weligama, Sri Lanka" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Surf lessons & guiding", value: true },
    { "@type": "LocationFeatureSpecification", name: "Rooftop infinity pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sea-view rooftop restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Daily yoga sessions", value: true },
  ],
  makesOffer: [
    { "@type": "Offer", name: "Moderate Surf / Guiding", price: "390", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Surf & Yoga Package", price: "450", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Full Surf Package", price: "490", priceCurrency: "EUR" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "168",
  },
  parentOrganization: { "@type": "Organization", name: "The Surfer Surf Camps" },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Soul Surfer",
  publisher: { "@id": `${SITE_URL}/#camp` },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
