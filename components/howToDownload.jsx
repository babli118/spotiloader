import React from "react";
import Image from "next/image";
import dots from "../public/dots.jpg";
import share from "../public/share.jpg";
import download from "../public/download.jpg";
import search from "../public/search.jpg";

const HowToDownload = () => {
  return (
    <section
      id="use"
      className="text-white scroll-smooth text-start mx-auto flex flex-col items-center justify-center w-[80vw] md:w-[60vw]  mt-10"
    >
      <h3 className="text-4xl text-[#1ED760] font-semibold ">
        How to use SpotiLoader?
      </h3>
      <div className="my-4 ">
        <p className="text-lg">
          Here&apos;s a simple tutorial how to use SpotifyLoader:
        </p>
        <ul className="my-4 flex flex-col gap-1">
          <li>
            <p>
              <span className="text-[#1ED760]">1.</span> Open your Spotify App
            </p>{" "}
          </li>
          <li>
            <p>
              <span className="text-[#1ED760]">2.</span> Find the song
              you&apos;d like to download
            </p>
          </li>

          <li>
            <p>
              <span className="text-[#1ED760]">3.</span> Click on the 3
              &quot;dots&quot; button. The button looks like this
              &quot;...&quot;
            </p>
          </li>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={dots}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <li>
            <p>
              <span className="text-[#1ED760]">4.</span> Click &quot;Share&quot;
              and then &quot;Copy Link&quot; button
            </p>
          </li>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={share}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <li>
            <p>
              <span className="text-[#1ED760]">5.</span> Paste copied link above
              and press &quot;Search&quot;
            </p>
          </li>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={search}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <li>
            <span className="text-[#1ED760]">6.</span> Wait for the processing
            to finish and click &quot;Download&quot; button
          </li>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={download}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default HowToDownload;
