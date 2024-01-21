import React from "react";
import Image from "next/image";
import logo1 from "../public/logo1.png";
import Link from "next/link";

const TaskBar = () => {
  return (
    <div className="sticky top-2 ">
      <div className="my-3 sm:mx-20 mx-4 p-4 flex justify-center sm:justify-between content-center bg-[#121212] rounded-md ">
        <Link
          href={"/"}
          className="text-[#1ED760]  text-center text-2xl sm:text-4xl font-bold flex flex-row justify-center  items-center"
        >
          <div className="mr-2">
            <Image
              src={logo1}
              width={50}
              height={100}
              alt="SpotifyLoader Logo"
            />
          </div>
          <span>SpotifyLoader</span>
        </Link>
        <div className="text-white hidden md:flex justify-center items-center">
          <div className="text-xl font-semibold flex items-center justify-center">
            <Link
              href={"/"}
              className="text-xl t hover:scale-110 hover:bg-[#44ad69] hover:text-white rounded-md py-2  mx-4 px-4  transition-all "
            >
              Spotify Downloader
            </Link>
            <Link
              className="text-xl hover:scale-110 mx-4 px-4 hover:text-[#1ED760] transition-all "
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-xl hover:scale-110 mx-4 px-4 hover:text-[#1ED760] transition-all "
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
