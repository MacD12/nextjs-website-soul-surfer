/** @type {import('next').NextConfig} */
const nextConfig = {
  // The page markup is injected as static HTML and the original jQuery/Elementor
  // scripts mutate the DOM. StrictMode double-invokes effects in dev, which would
  // load those scripts twice — disable it so the port behaves exactly like the
  // original static page.
  reactStrictMode: false,
};

export default nextConfig;
