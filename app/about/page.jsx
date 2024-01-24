/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TaskBar from "../../components/taskBar";
import Footer from "../../components/Footer";
import Link from "next/link";
const Page = () => {
  return (
    <div className=" flex flex-col ">
      <TaskBar />
      <div className="mx-10 sm:mx-[12rem] md:mx-[25rem] text-white ">
        <h3 className="text-4xl text-center font-semibold  text-[#1ED760] my-10">
          About - SpotifyLoader
        </h3>
        <p className="text-white text-base  ">
          If you're in search of a hassle-free method to download your favorite
          songs and playlists from Spotify in the highest possible quality, look
          no further – SpotifyLoader has got you covered! This user-friendly
          tool simplifies the process, allowing you to download any Spotify
          songs or playlists with just a single click. The best part? You don't
          need to install anything. Everything happens seamlessly within your
          web browser. Enjoy the convenience of the fastest download speeds
          available. Our Spotify downloader takes it a step further, enabling
          you to effortlessly download songs into a mp3 file with just one
          click. It's as easy as pasting the song link, hitting the download
          button, and voila! What sets us apart is not just the speed but the
          exceptional MP3 quality we provide. The conversion time for songs is
          incredibly quick – mere seconds – allowing you to instantly convert
          and save any songs you desire at a super-fast download speed. And
          here's the best part: there are no rate limits! Download an unlimited
          number of songs without any restrictions, and the best part is, it's
          all completely free! Say goodbye to complicated processes and
          limitations. With SpotifyLoader, enjoy the freedom to build your music
          collection effortlessly and in the best quality possible. Try it today
          and experience the ease of downloading your favorite Spotify songs and
          playlists like never before!
        </p>
        <div className="mt-10 transform  transition-all mx-auto items-center flex justify-center my-7 ">
          <Link
            href={"/"}
            className="bg-[#1ED760] hover:bg-[#24974c] hover:scale-110   transition-all   text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
          >
            Return to homepage
          </Link>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
