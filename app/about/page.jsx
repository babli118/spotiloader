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
          If you are looking for a method to download songs and playlists from
          Spotify at the highest possible quality, you have come to the right
          place. This tool basically does that. SpotifyDownloader allows you to
          download any Spotify song or playlist of your choice with a single
          click! No techincal knowledge is required to use this incredible tool.
          No need to even install anything. Everything happens inside your web
          browser fully automatedly. We provide the fastest download speeds too.
          Our Spotify playlist downloader lets you download dozens of songs in a
          ZIP file with just a single click! All you need to do is paste the
          link of the song that you want to save as MP3 and hit the download
          button. On top of all that, we also provide the best MP3 quality at
          blazing-fast speed. The conversion time for songs is mere seconds. You
          can instantly convert and save any song you want at a super fast
          download speed. We also don&apos;t have any rate limit. That means
          that you can download an unlimited number of songs without any
          restrictions totally for free!
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
