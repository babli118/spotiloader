import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SpotiLoader",
  description: "Spotify to mp3 Downloader Online ",
  keywords:
    "SpotiLoader, Spotify, mp3,Spotify to MP3, MP3 Downloader, Spotify Downloader, Online Downloader, downloader, online, music, spotify to mp3, spotify downloader, spotify converter",
  author: "SpotiLoader",
  twitter: {
    title: "SpotiLoader - Spotify to MP3 Downloader Online",
    card: "summary_large_image",
    description:
      "Download your favorite Spotify music to MP3 with SpotiLoader, the online Spotify to MP3 downloader.",
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
        <div className={poppins.className}>{children}</div>
      </body>
    </html>
  );
}
