import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center text-start w-[80vw] md:w-[60vw] my-10">
      <h1 className="text-4xl text-start font-semibold text-[#1ED760] my-6">
        FAQs for SpotifyDownloader
      </h1>
      <div className="text-white ">
        <h1 className="text-[#1ED760] font-semibold text-lg">
          Is this free to use?
        </h1>
        <p className="text-base">
          Yes, totally free to use. You can download as many songs as you want
          completely for free!
        </p>{" "}
        <h1 className="text-[#1ED760] font-semibold text-lg">
          Do I need a Spotify account to use this?
        </h1>{" "}
        <p className="text-base">
          No. You don&apos;t need a Spotify account to use this tool. You
          don&apos;t even need Spotify Premium to download songs from here.
          SpotifyDownloader is fully automated and requires no login at all.
        </p>
        <h1 className="text-[#1ED760] font-semibold text-lg">
          Do you need Spotify premium to download songs?{" "}
        </h1>
        <p className="text-base">
          No. With SpotfiyDown, you can download songs from Spotify without a
          premium account. Our tool works with both free and premium accounts,
          so anyone can enjoy the benefits of downloading music for offline
          listening whenever they want.
        </p>
        <h1 className="text-[#1ED760] font-semibold text-lg">
          How fast is the Spotify Downloader?
        </h1>{" "}
        <p className="text-base">
          The Spotify mp3 downloader is extremely fast, allowing you to download
          songs in seconds. Our advanced technology ensures a seamless and
          smooth downloading process every time, so you never have to worry
          about waiting around for your music.
        </p>{" "}
        <h1 className="text-[#1ED760] font-semibold text-lg">
          Is SpotifyDown safe to use?
        </h1>{" "}
        <p className="text-base">
          Yes. The Spotify Downloader uses cutting-edge encryption technologies
          to protect your data and privacy completely. In addition, our tool is
          regularly updated to avoid potential security threats so that you can
          trust us with all your downloading needs.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
