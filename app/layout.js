import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";
require("dotenv").config();

const poppins = Poppins({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Spotify Downloader - Spotify Songs and Playlists Downloader Online",
  description:
    "SpotifyLoader is a Spotify Song Downloader that allows you to effortlessly download your favorite Spotify songs, playlists and albums in mp3 with just one click.",
  keywords:
    "SpotifyLoader, Spotify playlist downloader, Spotify songs downloader, Spotify, mp3,Spotify to MP3, MP3 Downloader, Spotify Downloader, Online Downloader, downloader, online, music, spotify to mp3, spotify downloader, spotify converter,spotify downloader, spotify downloader mp3, spotify download mp3, download spotify songs, download spotify playlist, download spotify album, spotify playlist downloader, spotify to mp3, spotify 320kbps mp3 download, free spotify downloader, spotify download, spotify mp3 downloader",
  author: "SpotifyLoader",
  twitter: {
    title: "SpotifyLoader - Spotify to MP3 Downloader Online",
    card: "summary_large_image",
    description:
      "Download your favorite Spotify music to MP3 with SpotifyLoader, the online Spotify to MP3 downloader.",
  },
  metadataBase: new URL("https://spotifyloader.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      de: "/de",
      ar: "/ar",
      es: "/es",
      fr: "/fr",
      pt: "/pt",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "bg-black flex flex-col h-auto overflow-x-hidden  scroll-smooth   "
        }
      >
        <GoogleAnalytics
          ga_id={
            process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
              ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
              : "G-148JN8F3PN"
          }
        />

        <div className={poppins.className + "overflow-x-hidden"}>
          {children}
        </div>
      </body>
    </html>
  );
}
