import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "700", "500", "300"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SpotiLoader",
  description: "Spotify to mp3 Downloader Online ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "bg-black flex flex-col h-auto overflow-x-hidden  scroll-smooth   "
        }
      >
        <div className={montserrat.className}>{children}</div>
      </body>
    </html>
  );
}
