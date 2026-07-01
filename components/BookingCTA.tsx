// Conversion CTA banner — the primary "next step" at the foot of every sub-page.
// A full-bleed photo with an espresso gradient overlay, refined type, and two
// polished buttons (cream primary with a sliding arrow + a glass secondary).
// `variant` is accepted for backward-compatibility but the banner is always used.
export default function BookingCTA({
  title = "Ready for your surf week?",
  text = "Our team helps you pick the right package and room and get booked with confidence — minutes from the bay and the surf.",
  ctaLabel = "Plan your trip",
  ctaHref = "/rates",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}) {
  return (
    <section className="relative overflow-hidden bg-ss-espresso">
      {/* Full-bleed background photo + gradient overlay for a premium banner feel */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/assets/activities/act-beach.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ss-espresso/92 via-ss-espresso/86 to-ss-cocoa/94" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
        <p className="m-0 mb-4 font-onest text-xs font-semibold uppercase tracking-[3px] text-ss-sage">
          Plan your stay
        </p>
        <h2 className="m-0 font-onest text-[clamp(30px,4.4vw,48px)] font-semibold leading-[1.08] text-white">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-onest text-[16px] leading-relaxed text-white/75">
          {text}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={ctaHref}
            className="group inline-flex items-center gap-2 rounded-full bg-ss-cream px-8 py-4 font-onest text-sm font-semibold uppercase tracking-wide text-ss-espresso no-underline shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            {ctaLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          {secondaryLabel && secondaryHref ? (
            <a
              href={secondaryHref}
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 font-onest text-sm font-semibold uppercase tracking-wide text-white no-underline backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
