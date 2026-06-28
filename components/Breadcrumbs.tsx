// Lightweight breadcrumb strip for orientation — sits between the title band and
// the page content. Taupe band, sage separators (reference palette).
export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-black/5 bg-ss-taupe">
      <ol className="mx-auto flex max-w-6xl items-center gap-2.5 px-6 py-3.5 font-onest text-[11px] font-semibold uppercase tracking-[1.5px] text-ss-body">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2.5">
            {item.href ? (
              <a
                href={item.href}
                className="no-underline transition-colors hover:text-ss-espresso"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-ss-espresso">{item.label}</span>
            )}
            {i < items.length - 1 ? (
              <span className="text-ss-sage" aria-hidden="true">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
