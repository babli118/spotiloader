import React from "react";
import Image from "next/image";
import trackDl from "../public/download_track.jpg";

const HowToDownload = () => {
  return (
    <section
      id="use"
      className="text-white scroll-smooth text-start mx-auto flex flex-col items-center justify-center w-[80vw] md:w-[60vw]  mt-10"
    >
      <h1 className="text-4xl text-[#1ED760] font-semibold ">
        How to use SpotiLoader?
      </h1>
      <div className="my-4 ">
        <h3 className="text-lg">
          Here's a simple tutorial how to use SpotifyLoader:
        </h3>
        <ul className="my-4 flex flex-col gap-1">
          <li>
            <p>
              <span className="text-[#1ED760]">1.</span> Open your Spotify App
            </p>{" "}
          </li>
          <li>
            <p>
              <span className="text-[#1ED760]">2.</span> Find the song you'd
              like to download
            </p>
          </li>
          <li>
            <p>
              <span className="text-[#1ED760]">3.</span> Click on the "3 dots"
              button. The button looks like this "..."
            </p>
          </li>
          <li>
            <p>
              <span className="text-[#1ED760]">4.</span> Click "Share" and then
              "Copy Link" button{" "}
            </p>
          </li>
          <li>
            <p>
              <span className="text-[#1ED760]">5.</span> Paste copied link above
              and press "Search"
            </p>
          </li>
          <li>
            <span className="text-[#1ED760]">6.</span> Wait for the processing
            to finish and click "Download" button
          </li>
        </ul>
      </div>
      <div className="  w-[22rem]">
        <Image src={trackDl} height={80} width={400} />
      </div>
    </section>
  );
};

export default HowToDownload;
