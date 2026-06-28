// Conversion CTA band — the primary "next step" at the foot of every sub-page.
// Espresso background with a cream pill button, matching the reference palette.
// Built with Tailwind so it stays consistent and easy to tune.
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
}) {
  return (
    <section className="bg-ss-espresso">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="m-0 mb-4 font-onest text-xs font-semibold uppercase tracking-[2px] text-ss-sage">
          Plan your stay
        </p>
        <h2 className="m-0 font-onest text-[clamp(26px,3.6vw,40px)] font-semibold leading-tight text-white">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-onest text-[15px] leading-relaxed text-white/70">
          {text}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={ctaHref}
            className="inline-block rounded-full bg-ss-cream px-9 py-3.5 font-onest text-sm font-semibold uppercase tracking-wide text-ss-espresso no-underline transition-colors hover:bg-white"
          >
            {ctaLabel}
          </a>
          {secondaryLabel && secondaryHref ? (
            <a
              href={secondaryHref}
              className="inline-block rounded-full border border-white/30 px-9 py-3.5 font-onest text-sm font-semibold uppercase tracking-wide text-white no-underline transition-colors hover:border-white/70"
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
