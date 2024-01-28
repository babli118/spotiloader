import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "../../navigation.js";
require("dotenv").config();
import { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
const poppins = Poppins({
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

  return {
    title: t("title"),
    description: t("descripton"),
    keywords:
      "SpotifyLoader, Spotify playlist downloader, Spotify songs downloader, Spotify, mp3,Spotify to MP3, MP3 Downloader, Spotify Downloader, Online Downloader, downloader, online, music, spotify to mp3, spotify downloader, spotify converter,spotify downloader, spotify downloader mp3, spotify download mp3, download spotify songs, download spotify playlist, download spotify album, spotify playlist downloader, spotify to mp3, spotify 320kbps mp3 download, free spotify downloader, spotify download, spotify mp3 downloader",
    author: "SpotifyLoader",
    manifest: "/manifest.webmanifest",
    twitter: {
      title: t("SpotifyLoader - Spotify to MP3 Downloader Online"),
      card: "summary_large_image",
      description: t("twdesc"),
    },

    robots: "index,follow",
    metadataBase: new URL("https://spotifyloader.com"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        de: "/de",
        ar: "/ar",
        es: "/es",
        fr: "/fr",
        id: "/id",
        pt: "/pt",
        ru: "/ru",
        nl: "/nl",
      },
    },
  };
}

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    locale = "en";
  }
  const messages = useMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={
            "bg-black flex flex-col h-auto overflow-x-hidden  scroll-smooth   "
          }
        >
          <GoogleTagManager gtmId="GTM-TH35ND4D" />
          <div className={poppins.className + "overflow-x-hidden"}>
            {children}
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
