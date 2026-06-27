// A compact dark title band for sub-pages, built with Tailwind + the Soul Surfer
// palette. The site header is a transparent overlay with white text, so each
// sub-page needs a dark band beneath it for the nav to stay readable. The top
// padding clears the absolute/sticky header. Matches the homepage typography
// (Onest) and palette (espresso bg, sage eyebrow).
export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ss-espresso text-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-[150px] text-center">
        {eyebrow ? (
          <p className="m-0 mb-4 font-onest text-xs font-semibold uppercase tracking-[2px] text-ss-sage">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="m-0 font-onest text-[clamp(32px,5vw,52px)] font-semibold leading-tight text-white">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl font-onest text-[15px] leading-relaxed text-white/70">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
