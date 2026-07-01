import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/activities" },
  title: "Things to Do at Soul Surfer — Activities & Camp Life in Weligama",
  description:
    "More than surf lessons — guided sessions, theory and video analysis, rooftop yoga, boat parties and beach days. See a real day-in-the-life at Soul Surfer Camp, Weligama, Sri Lanka.",
};

// Three activity categories, each an alternating image + copy row.
const CATEGORIES = [
  {
    key: "surf",
    kicker: "The core",
    title: "Surf & theory",
    img: "/assets/activities/act-surf.jpg",
    alt: "Surfer riding a clean wave during a guided session at Soul Surfer, Weligama",
    lead: "The reason you came — sharpened. We don't just put you in the water and wave; we read the day's swell, take you to the right peak, and give you the tools to keep improving long after you fly home.",
    items: [
      "Daily guided surf sessions matched to your level and the conditions",
      "Spot guiding — we track the swell and pick the peak that suits you",
      "Theory classes: wave selection, positioning, paddling and etiquette",
      "Video analysis to see what you actually do — and fix it fast",
      "Board and equipment advice so you're always on the right kit",
    ],
  },
  {
    key: "wellness",
    kicker: "Recover & reset",
    title: "Yoga & wellness",
    img: "/assets/activities/act-yoga.jpg",
    alt: "Sunrise yoga session by the sea at Soul Surfer Camp, Sri Lanka",
    lead: "Surfing takes it out of you. The rooftop is where you put it back — breath, stretch and a sea view that does half the work. Come down loose, paddle out stronger.",
    items: [
      "Sunrise and sunset yoga on the rooftop, above the south coast",
      "Rooftop infinity pool to float in between sessions",
      "Mobility and recovery stretches built around your surf schedule",
      "Sea-view rooftop dining — fuel that actually helps you surf",
      "Quiet corners to rest, read and switch off",
    ],
  },
  {
    key: "social",
    kicker: "The stories",
    title: "Social — boat parties & beach days",
    img: "/assets/activities/act-boat.jpg",
    alt: "Guests on a boat trip — social activities at Soul Surfer Camp, Weligama",
    lead: "This is the part nobody warns you about: you arrive for the waves and leave with a crew from ten different countries. Camp life runs on shared dinners, salty afternoons and one very good boat party.",
    items: [
      "Boat parties on the water — the week's highlight for most",
      "Beach days and golden-hour sunset sessions",
      "Shared dinners with a crew from all over the world",
      "Town trips — markets, tuk-tuks and the best local rice & curry",
      "The kind of evenings that turn strangers into friends for life",
    ],
  },
];

// A genuine day-in-the-life outline — unique content that can't be copied.
const DAY = [
  { time: "Dawn", label: "First-light check", text: "We read the bay at sunrise. Keen surfers head out for the dawn patrol while the line-up is empty and glassy." },
  { time: "Morning", label: "Guided surf session", text: "The main session — coached, at the day's best peak, matched to your level. Photos and clips get taken for later." },
  { time: "Late morning", label: "Breakfast & theory", text: "Refuel on the rooftop, then a theory or video-analysis session to unpack what happened in the water." },
  { time: "Midday", label: "Free time", text: "Float in the pool, nap in a hammock, wander into town — the hottest hours are yours." },
  { time: "Afternoon", label: "Second surf or yoga", text: "A second paddle-out as the wind swings offshore, or a mobility and yoga session on the roof." },
  { time: "Evening", label: "Sunset & dinner", text: "A golden-hour session, then dinner with the crew as the sky goes pink over the coast." },
  { time: "Night", label: "Camp social", text: "Some nights it's a boat party, some nights just good conversation and a cold drink. Every night, new friends." },
];

// The four signature experiences — the reasons guests remember Soul Surfer. Each
// carries a short "why it matters" line so it reads as a headline activity, not
// just a photo.
const HIGHLIGHTS = [
  {
    img: "/assets/activities/act-surf.jpg",
    alt: "Surfer riding a wave on a surf holiday in Weligama, Sri Lanka",
    title: "Have An Unforgettable Surf Holiday",
    why: "It starts with the surf. Coached sessions at the right peaks, video analysis and theory mean you fly home a genuinely better surfer — the trip you'll measure every other holiday against.",
  },
  {
    img: "/assets/activities/act-people.jpg",
    alt: "Travellers from around the world meeting at Soul Surfer camp",
    title: "Meet New People From All Around The World",
    why: "Every week a fresh crew lands from a dozen countries. Shared sessions and dinners mean you're never a stranger for long — the whole camp is built to bring people together.",
  },
  {
    img: "/assets/activities/act-friends.jpg",
    alt: "New friends enjoying camp life at Soul Surfer, Weligama",
    title: "Make New Friends For Life",
    why: "The friendships are the part that lasts. The people you paddle out with at dawn and toast at sunset become the ones you plan your next trip around.",
  },
  {
    img: "/assets/activities/act-boat.jpg",
    alt: "Boat party on the water — Soul Surfer surf camp activities",
    title: "Boat Party",
    why: "The week's headline event. Music, open water and the whole camp together — the boat party is the story everyone tells the moment they get home.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Life at the camp"
        title="Life at Soul Surfer — more than surf"
        subtitle="Weligama's waves are why you book. The week that grows around them — the coaching, the rooftop, the crew, the boat party — is why you come back."
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Activities" }]}
      />

      {/* Intro — expands on the idea instead of repeating the home paragraph */}
      <section className="bg-ss-cream">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-onest text-[11px] font-semibold uppercase tracking-[2px] text-ss-sage">
            Beyond the line-up
          </p>
          <h2 className="mt-4 font-onest text-3xl font-semibold leading-tight text-ss-espresso sm:text-[34px]">
            A surf trip you'll actually miss when it's over
          </h2>
          <p className="mt-6 font-onest text-[17px] leading-relaxed text-ss-body">
            Plenty of camps hand you a board and a bed. Soul Surfer runs on a rhythm — dawn
            sessions and theory, an afternoon in the pool, sunset yoga, dinners that turn into
            plans, and a crew that arrives as strangers and leaves as a group chat. Here's
            everything that fills the hours between waves.
          </p>
        </div>
      </section>

      {/* Signature experiences — the four headline activities, with the "why" */}
      <section className="bg-ss-taupe">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="font-onest text-[11px] font-semibold uppercase tracking-[2px] text-ss-sage">
              The heart of camp life
            </p>
            <h2 className="mt-3 font-onest text-3xl font-semibold leading-tight text-ss-espresso sm:text-[36px]">
              The experiences guests fly home talking about
            </h2>
            <p className="mt-3 font-onest text-[16px] leading-relaxed text-ss-body">
              These four are why Soul Surfer isn't just a place to sleep between surfs. They're
              the moments that turn a week in Weligama into the trip you'll always compare the
              rest to.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <article
                key={h.title}
                className="group flex flex-col overflow-hidden rounded-[15px] bg-ss-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-[210px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-onest text-lg font-semibold leading-snug text-ss-espresso">
                    {h.title}
                  </h3>
                  <p className="mt-3 flex-1 font-onest text-[14px] leading-relaxed text-ss-body">
                    {h.why}
                  </p>
                  <a
                    href="/rooms"
                    className="mt-6 inline-flex items-center gap-1.5 font-onest text-[11px] font-semibold uppercase tracking-[1.5px] text-ss-sage no-underline transition-colors hover:text-ss-espresso"
                  >
                    Explore
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized activities — alternating image + copy rows */}
      <section className="bg-ss-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-onest text-3xl font-semibold leading-tight text-ss-espresso sm:text-[36px]">
              What fills your week
            </h2>
            <p className="mt-3 font-onest text-[16px] leading-relaxed text-ss-body">
              Three sides to camp life — the surf, the reset, and the stories. Every one of them
              is included, whichever package you choose.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.key}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`overflow-hidden rounded-[18px] shadow-sm ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    loading="lazy"
                    width={1000}
                    height={700}
                    className="h-[300px] w-full object-cover sm:h-[360px]"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-onest text-[11px] font-semibold uppercase tracking-[2px] text-ss-sage">
                    {cat.kicker}
                  </p>
                  <h3 className="mt-3 font-onest text-2xl font-semibold text-ss-espresso sm:text-[28px]">
                    {cat.title}
                  </h3>
                  <p className="mt-4 font-onest text-[16px] leading-relaxed text-ss-body">
                    {cat.lead}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-onest text-[15px] leading-snug text-ss-espresso"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ss-sage"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A day in the life — the unique, uncopyable content */}
      <section className="bg-ss-taupe">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="font-onest text-[11px] font-semibold uppercase tracking-[2px] text-ss-sage">
              Our rhythm
            </p>
            <h2 className="mt-4 font-onest text-3xl font-semibold text-ss-espresso sm:text-[36px]">
              A day in the life
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-onest text-[16px] leading-relaxed text-ss-body">
              No two days are identical — the ocean decides — but a typical day at Soul Surfer
              looks something like this.
            </p>
          </div>
          <ol className="relative flex flex-col gap-8 border-l-2 border-ss-sage/40 pl-8">
            {DAY.map((slot) => (
              <li key={slot.time} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-ss-sage bg-ss-cream"
                />
                <p className="font-onest text-[11px] font-semibold uppercase tracking-[1.5px] text-ss-sage">
                  {slot.time}
                </p>
                <h3 className="mt-1 font-onest text-lg font-semibold text-ss-espresso">
                  {slot.label}
                </h3>
                <p className="mt-1 font-onest text-[15px] leading-relaxed text-ss-body">
                  {slot.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Everything's included — link out to packages / rates */}
      <section className="bg-ss-cream">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-onest text-3xl font-semibold text-ss-espresso sm:text-[34px]">
            Every activity is included
          </h2>
          <p className="mt-5 font-onest text-[17px] leading-relaxed text-ss-body">
            Guided surf, theory, video analysis, rooftop yoga and the full social calendar come
            with every stay — no hidden extras. The only difference between packages is how much
            surf and coaching you want each week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/rooms"
              className="inline-flex items-center rounded-full bg-ss-espresso px-7 py-3.5 font-onest text-sm font-semibold !text-white no-underline transition-transform hover:-translate-y-0.5 hover:!text-white"
            >
              View packages
            </a>
            <a
              href="/rates"
              className="inline-flex items-center rounded-full border border-ss-espresso/25 px-7 py-3.5 font-onest text-sm font-semibold text-ss-espresso no-underline transition-colors hover:bg-ss-espresso/5"
            >
              See rates
            </a>
          </div>
        </div>
      </section>

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
