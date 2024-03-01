"use client";
import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import NavLink from "../containers/NavLink.jsx";

const HamDropdown = ({ locale, pathname }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="mx-8  rounded-lg  transition-all  lg:hidden  ">
      <div className="bg-white lg:hidden transition-all flex flex-col justify-center items-center mx-auto px-4 w-[85vw] md:w-[80vw] xl:w-[50vw]">
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <NavLink
            c={true}
            p="0.1"
            href={"/"}
            locale={locale}
            name="Spotify Downlader"
          />
        </div>

        <div className="flex flex-col  w-full ">
          <div onClick={() => setShowOptions(!showOptions)}>
            <div
              style={{
                marginBottom: "1rem",
                marginTop: "0.5rem",
                background: "#1ED760",
              }}
              className="flex  gap-2  cursor-pointer  text-text text-base font-medium  rounded-md items-center duration-50 transition-all "
            >
              <button
                style={{ padding: "2px 0px 2px 8px" }}
                className=" transition-all      "
              >
                Language
              </button>
              <div style={{ marginTop: "5px" }} className="  text-base">
                {showOptions ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          </div>
          {showOptions && (
            <div className="flex flex-col ">
              <NavLink
                c={true}
                p="0.1"
                locale={"en"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span className="text-base ">English</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"de"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base ">
                    <span>Deutsch</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"es"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base ">
                    <span>Español</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />

              <NavLink
                c={true}
                p="0.1"
                locale={"pt"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>português</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"id"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>indonesian</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"it"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Italian</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"nl"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Dutch</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"tr"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Türkçe</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"ar"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Arabic</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"vi"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Vietnamese</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"ru"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>россия</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"hi"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Hindi</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"zh"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base ">
                    <span>Chinese</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"ja"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base ">
                    <span>Japanese</span>
                    <hr
                      style={{ color: "rgb(242 236 236 / 0.4)" }}
                      className=" w-full h-2"
                    />
                  </span>
                }
              />
              <NavLink
                c={true}
                p="0.1"
                locale={"th"}
                href={pathname}
                style={{ padding: "0.2rem 0.4rem" }}
                name={
                  <span className="text-base  ">
                    <span>Thai</span>
                  </span>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HamDropdown;
