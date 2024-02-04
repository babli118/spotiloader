"use client";
import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useRouter, usePathname } from "../navigation.js";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function LanguageChanger({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  const handleChangeLanguage = (newLocale) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div
      onClick={() => setShowOptions(!showOptions)}
      className="relative cursor-pointer hover:text-white"
    >
      <div className="flex  text-xl text-black  justify-center gap-2 bg-[#1ED760] p-2 rounded-md items-center duration-50  hover:text-white   transition-all ">
        <button className=" transition-all  ">Language</button>
        <div className=" mt-1.8 text-base">
          {showOptions ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {showOptions && (
        <div className="absolute mt-4 text-[#121212] bottom w-full transition-all duration-50  bg-[#1ED760] rounded-md">
          <div className="py-1 flex text-[#121212] flex-col items-center justify-center">
            <button
              className={`mt-2 block px-6 py-2 text-left text-sm   hover:text-white`}
              onClick={() => handleChangeLanguage("en")}
            >
              English
            </button>
            <button
              className={`block px-4 py-2 text-left text-sm   hover:text-white `}
              onClick={() => handleChangeLanguage("de")}
            >
              Deutsch
            </button>
            <button
              className={`block px-4 py-2 text-left text-sm hover:text-white `}
              onClick={() => handleChangeLanguage("es")}
            >
              Español
            </button>
            <button
              className={`block px-4 py-2 text-left text-sm hover:text-white`}
              onClick={() => handleChangeLanguage("pt")}
            >
              português
            </button>
            <button
              className={`block px-4 py-2 text-left text-sm hover:text-white`}
              onClick={() => handleChangeLanguage("id")}
            >
              indonesian
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
