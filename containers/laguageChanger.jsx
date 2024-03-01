"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import NavLink from "./NavLink.jsx";

export default function LanguageChanger({ locale, pathname }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      value={locale}
      onClick={() => setShowOptions(!showOptions)}
      className="relative cursor-pointer z-40 "
    >
      <div
        style={{
          padding: "0.5rem 1rem",
          background: "#41fc9c",
        }}
        className={
          "flex text-lg font-medium    justify-center  gap-2 rounded-md items-center duration-50 transition-all bg-text/10" +
          (showOptions
            ? "bg-text/10 text-text"
            : "text-text hover:text-primary")
        }
      >
        <button>Language</button>
        <div className=" mt-1.8 text-base transition-all   ">
          {showOptions ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      <div style={{ position: "absoulute" }}>
        {showOptions && (
          <div
            style={{
              position: "absolute",
              left: "4px",
              background: "#1ED760",
            }}
            className=" mt-2 transition-all duration-50  rounded-md absolute shadow-md"
          >
            <div className="py-2 transition-all px-4 text-grey  flex flex-col">
              <NavLink
                c={true}
                href={pathname}
                locale="en"
                name={<span className="flex gap-2 text-base ">English</span>}
              />

              <NavLink
                c={true}
                href={pathname}
                locale="de"
                name={<span className="flex gap-2 text-base ">Deutsch</span>}
              />

              <NavLink
                c={true}
                href={pathname}
                locale="es"
                name={<span className="flex gap-2 text-base ">Español</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="pt"
                name={<span className="flex gap-2 text-base ">português</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="it"
                name={<span className="flex gap-2 text-base ">Italian</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="nl"
                name={<span className="flex gap-2 text-base ">Dutch</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="id"
                name={<span className="flex gap-2 text-base ">Indonesian</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="ar"
                name={<span className="flex gap-2 text-base ">Arabic</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="tr"
                name={<span className="flex gap-2 text-base ">Türkçe</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="vi"
                name={<span className="flex gap-2 text-base ">Vietnamese</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="ru"
                name={<span className="flex gap-2 text-base ">россия</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="hi"
                name={<span className="flex gap-2 text-base ">Hindi</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="fr"
                name={<span className="flex gap-2 text-base ">Français</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="zh"
                name={<span className="flex gap-2 text-base ">Chinese</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="ja"
                name={<span className="flex gap-2 text-base ">Japanese</span>}
              />
              <NavLink
                c={true}
                href={pathname}
                locale="th"
                name={<span className="flex gap-2 text-base ">Thai</span>}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
