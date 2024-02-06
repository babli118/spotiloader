"use client";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import { useRouter, usePathname } from "../navigation.js";

const HamDropdown = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  const handleChangeLanguage = (newLocale) => {
    router.push(pathname, { locale: newLocale });
  };
  const t = useTranslations();
  return (
    <div className="mx-4 bg-[#121212] rounded-lg  transition-all  ">
      <div className="flex flex-col gap-2   ">
        <Link
          className=" text-[#1ED760] border-top-2 text-xl mt-2  mx-4 px-4 font-semibold transition-all "
          href={"https://spotifyloader.com"}
        >
          {t("header")}
        </Link>
        <Link className="    text-xl  mx-4 px-4  transition-all " href="/about">
          {t("about")}
        </Link>
        <Link
          className="     text-xl  mx-4 px-4 transition-all "
          href="/contact"
        >
          {t("contact")}
        </Link>
        <Link
          className="     text-xl  mx-4 px-4   transition-all "
          href="/copyright"
        >
          Copyright
        </Link>
      </div>
      <div>
        <div
          onClick={() => setShowOptions(!showOptions)}
          className="flex  gap-1 cursor-pointer  text-xl  mx-4 px-4 rounded-md items-center duration-50 hover:text-white transition-all "
        >
          <button className=" transition-all py-2   font-bold ">
            Language
          </button>
          <div className=" mt-2 ml-1 text-base">
            {showOptions ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
        {showOptions && (
          <div className=" -mt-2 shadow-lg shadow-black  bottom w-[300px] mx-auto left-10 transition-all  bg-[#121212] rounded-md">
            <div className="py-1 flex  flex-col transition-all items-center justify-center">
              <button
                className={`mt-2 block px-2 py-2 text-left text-sm font-semibold `}
                onClick={() => handleChangeLanguage("en")}
              >
                English
              </button>
              <button
                className={`block px-4 py-2 text-left text-sm font-semibold   `}
                onClick={() => handleChangeLanguage("de")}
              >
                Deutsch
              </button>
              <button
                className={`block px-4 py-2 text-left text-sm font-semibold`}
                onClick={() => handleChangeLanguage("es")}
              >
                Español
              </button>
              <button
                className={`block px-4 py-2 text-left text-sm font-semibold`}
                onClick={() => handleChangeLanguage("pt")}
              >
                português
              </button>
              <button
                className={`block px-4 py-2 text-left text-sm font-semibold`}
                onClick={() => handleChangeLanguage("id")}
              >
                indonesian
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamDropdown;
