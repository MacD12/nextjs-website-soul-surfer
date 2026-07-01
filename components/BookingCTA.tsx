// Conversion CTA band — the primary "next step" at the foot of every sub-page.
// Default is the espresso band with a cream pill button. Pass variant="light" for
// a taupe band with dark text + an espresso button (matches the light content
// sections), used where a dark band would clash. Built with Tailwind.
export default function BookingCTA({
  title = "Ready for your surf week?",
  text = "Our team helps you pick the right package and room and get booked with confidence — minutes from the bay and the surf.",
  ctaLabel = "Plan your trip",
  ctaHref = "/rates",
  secondaryLabel,
  secondaryHref,
  variant = "dark",
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}) {
  const light = variant === "light";
  return (
    <section className={light ? "bg-ss-taupe" : "bg-ss-espresso"}>
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="m-0 mb-4 font-onest text-xs font-semibold uppercase tracking-[2px] text-ss-sage">
          Plan your stay
        </p>
        <h2
          className={`m-0 font-onest text-[clamp(26px,3.6vw,40px)] font-semibold leading-tight ${
            light ? "text-ss-espresso" : "text-white"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mx-auto mt-5 max-w-2xl font-onest text-[15px] leading-relaxed ${
            light ? "text-ss-body" : "text-white/70"
          }`}
        >
          {text}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={ctaHref}
            className={`inline-block rounded-full px-9 py-3.5 font-onest text-sm font-semibold uppercase tracking-wide no-underline transition-colors ${
              light
                ? "bg-ss-espresso !text-white hover:bg-[#1f1c17]"
                : "bg-ss-cream text-ss-espresso hover:bg-white"
            }`}
          >
            {ctaLabel}
          </a>
          {secondaryLabel && secondaryHref ? (
            <a
              href={secondaryHref}
              className={`inline-block rounded-full border px-9 py-3.5 font-onest text-sm font-semibold uppercase tracking-wide no-underline transition-colors ${
                light
                  ? "border-ss-espresso/25 text-ss-espresso hover:bg-ss-espresso/5"
                  : "border-white/30 text-white hover:border-white/70"
              }`}
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
