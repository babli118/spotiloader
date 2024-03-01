const withNextIntl = require("next-intl/plugin")();
/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";
const withPWA = require("next-pwa")({
  dest: "public",
  disable: prod ? false : true,
});

module.exports = withNextIntl(
  withPWA({
    images: {
      domains: ["i.scdn.co", "mosaic.scdn.co", "image-cdn-ak.spotifycdn.com"],
    },
  })
);
