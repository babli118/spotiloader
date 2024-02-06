"use client";
import { useState } from "react";
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
      className="relative cursor-pointer "
    >
      <div className="flex  text-xl text-black  justify-center gap-2 bg-[#1ED760] p-2 hover:text-white rounded-md items-center duration-50     transition-all ">
        <button className=" transition-all hover:text-white ">Language</button>
        <div className=" mt-1.8 text-base hover:text-white">
          {showOptions ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {showOptions && (
        <div className="absolute mt-4  bottom w-full transition-all duration-50  bg-[#1ED760] rounded-md">
          <div className="py-1 flex  flex-col items-center justify-center">
            <button
              className={`mt-2 block px-6 py-2 text-left text-sm   hover:text-white `}
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
