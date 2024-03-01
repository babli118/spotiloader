"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo1 from "../public/logo1.png";
import { Link } from "../navigation";
import { usePathname } from "../navigation.js";
import HamDropDown from "../containers/hamDropdown.jsx";
import LanguageChanger from "../containers/laguageChanger";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const TaskBar = ({ locale }) => {
  const pathname = usePathname();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen((prevState) => !prevState);
  };

  return (
    <div className="mt-2 text-text bg-background shadow-md  ">
      <div className=" mx-auto p-4 flex justify-between sm:justify-between items-center gap-2 w-[85vw] md:w-[80vw] xl:min-w-[50vw]  ">
        <Link
          locale={locale}
          href={"/"}
          className="text-primary text-center text-3xl sm:text-4xl font-bold flex flex-row justify-center items-center"
        >
          <div className="mr-2">
            <Image
              src={logo1}
              width={50}
              height={100}
              alt="SpotifyLoader Logo"
            />
          </div>
          <div>
            <span className="text-primary drop-shadow-sm  ">SpotifyLoader</span>
          </div>
        </Link>
        <div>
          <div className="text-text font-normal lg:flex hidden transition-all justify-center items-center">
            <div className="hover:bg-secondary1 hidden"></div>
            <LanguageChanger locale={locale} pathname={pathname} />
          </div>

          <div
            className="text-text text-3xl cursor-pointer lg:hidden flex justify-center items-center"
            onClick={toggleDropDown}
          >
            {isDropDownOpen ? <RxCross2 /> : <RiMenuLine />}
          </div>
        </div>
      </div>

      {isDropDownOpen ? (
        <div className="transition-all lg:hidden">
          <div className="hover:text-primary1 hidden"></div>
          <HamDropDown locale={locale} pathname={pathname} />
        </div>
      ) : null}
    </div>
  );
};

export default TaskBar;
