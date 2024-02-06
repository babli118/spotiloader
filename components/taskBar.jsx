"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo1 from "../public/logo1.png";
import Link from "next/link";
import HamDropDown from "../containers/hamDropdown.jsx";
import { useTranslations } from "next-intl";
import LanguageChanger from "../containers/laguageChanger";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const TaskBar = () => {
  const t = useTranslations();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen((prevState) => !prevState);
  };

  return (
    <div className="sticky top-2 text-[#9CA3AF] ">
      <div className="sm:mx-10 mx-4 p-4 flex justify-between sm:justify-between gap-2 content-center bg-[#121212] rounded-md ">
        <Link
          href={"https://spotifyloader.com"}
          className="text-[#1ED760] text-center text-3xl sm:text-4xl font-bold flex flex-row justify-center  items-center"
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
        <div
          id="dropdown"
          className="text-black flex lg:flex justify-center items-center relative"
        >
          <div className="text-xl font-semibold flex items-center justify-center">
            <Link
              className="hidden sm:block text-white text-xl hover:scale-110 mx-4 px-4 hover:text-[#1ED760] transition-all"
              href="/about"
            >
              {t("about")}
            </Link>
            <Link
              className="hidden sm:block text-white text-xl hover:scale-110 mx-4 px-4 hover:text-[#1ED760] transition-all"
              href="/contact"
            >
              {t("contact")}
            </Link>
            <div
              className="text-[#1ED760] sm:hidden   text-2xl cursor-pointer transition-all "
              onClick={toggleDropDown}
            >
              {isDropDownOpen ? <RxCross2 /> : <RiMenuLine />}
            </div>
            <div className=" text-black  sm:block hidden transition-all">
              <LanguageChanger />
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-2 transition-all">
        {isDropDownOpen && <HamDropDown />}
      </div>
    </div>
  );
};

export default TaskBar;
