import { Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "../../navigation.js";
require("dotenv").config();
import { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import TaskBar from "../../components/taskBar";
import Footer from "../../components/Footer";
import { GoogleAdSense } from "next-google-adsense";
import Script from "next/script";

const roboto = Roboto({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale });
  const canonicalURL = locale === "en" ? "/" : `/${locale}`;
  return {
    title: t("title"),
    description: t("descripton"),
    keywords:
      "SpotifyLoader, Spotify playlist downloader, Spotify songs downloader, Spotify, mp3,Spotify to MP3, MP3 Downloader, Spotify Downloader, Online Downloader, downloader, online, music, spotify to mp3, spotify downloader, spotify converter,spotify downloader, spotify downloader mp3, spotify download mp3, download spotify songs, download spotify playlist, download spotify album, spotify playlist downloader, spotify to mp3, spotify 320kbps mp3 download, free spotify downloader, spotify download, spotify mp3 downloader",
    author: "SpotifyLoader",
    manifest: "/manifest.webmanifest",
    twitter: {
      title: t("title"),
      card: "summary_large_image",
      description: t("twdesc"),
    },
    robots: "index,follow",
    metadataBase: new URL("https://spotifyloader.com"),
    alternates: {
      canonical: canonicalURL,
      languages: {
        en: "/en",
        ar: "/ar",
        de: "/de",
        es: "/es",
        fr: "/fr",
        hi: "/hi",
        id: "/id",
        it: "/it",
        ja: "/ja",
        nl: "/nl",
        pt: "/pt",
        ru: "/ru",
        th: "/th",
        tr: "/tr",
        vi: "/vi",
        zh: "/zh",
        "x-default": canonicalURL,
      },
    },
  };
}

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    locale = "en";
  }
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale} className={roboto.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={
            "bg-background1 flex flex-col h-auto overflow-x-hidden scroll-smooth text-black relative"
          }
        >
          {/* <GoogleAdSense publisherId="pub-8487155941342821" />
          <GoogleTagManager gtmId="GTM-TH35ND4D" /> */}
          {/* <Script
            type="text/javascript"
            src="//lockupaccede.com/8a/06/5e/8a065e7d02c958215d7363865fa2adef.js"
          ></Script> */}
          <div
            className={roboto.className + " overflow-x-hidden bg-background"}
          >
            <TaskBar locale={locale} />
            {children}
            <Footer locale={locale} />
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
