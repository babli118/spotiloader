/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TaskBar from "../../../components/taskBar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ReturnBtn from "../../../containers/returnBtn.jsx";

const Page = () => {
  const t = useTranslations();
  return (
    <div className=" flex flex-col ">
      <TaskBar />
      <div className="mx-10 sm:mx-[12rem] md:mx-[15rem] lg:mx-[25rem] text-white ">
        <h3 className="text-4xl text-center font-semibold  text-[#1ED760] my-10">
          {t("about")} - SpotifyLoader
        </h3>
        <p className="text-white text-base  ">{t("aboutpara")}</p>
        <ReturnBtn text={t("return")} />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
