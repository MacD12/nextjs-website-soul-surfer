import fs from "node:fs";
import path from "node:path";

// Read the original page's <body> markup (scripts stripped, asset paths rewritten
// to /assets). This is a Server Component, so the file is read at build/render time
// and the HTML is sent fully server-rendered — identical to the static page.
const bodyHtml = fs.readFileSync(
  path.join(process.cwd(), "data", "body.html"),
  "utf8"
);

export default function Page() {
  // `display:contents` makes this wrapper generate no box, so the injected markup
  // behaves as if it were a direct child of <body> (no extra layout element).
  return (
    <div
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
