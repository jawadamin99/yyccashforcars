/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force metadata to be rendered in <head> for all user agents.
  // This avoids streamed metadata blocks appearing later in the body.
  htmlLimitedBots: /.*/,
};

export default nextConfig;
