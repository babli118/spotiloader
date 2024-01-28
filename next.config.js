const withNextIntl = require("next-intl/plugin")();
/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withNextIntl(
  withPWA({
    images: {
      domains: ["i.scdn.co", "mosaic.scdn.co"],
    },
  })
);
