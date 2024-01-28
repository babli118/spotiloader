import React from "react";
import TaskBar from "../../../components/taskBar";
import Footer from "../../../components/Footer";
import { useTranslations } from "next-intl";
import ReturnBtn from "../../../containers/returnBtn";

const Page = () => {
  const t = useTranslations();
  return (
    <div className=" flex flex-col ">
      <TaskBar />
      <div className="mx-10 sm:mx-[12rem] md:mx-[15rem] lg:mx-[25rem] text-white ">
        <h3 className="text-4xl text-center font-semibold  text-[#1ED760] my-10 capitalize">
          {t("contact")} - SPOTIFYLOADER
        </h3>
        <div className="flex gap-x-2 items-center justify-center">
          <p className="text-white text-base  ">{t("cntinfo")}</p>
          <a className="text-[#1ED760]" href="https://m.me/spotifyloader">
            m.me/SpotifyLoader
          </a>
        </div>
        <ReturnBtn text={t("return")} />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
