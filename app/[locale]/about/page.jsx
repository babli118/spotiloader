/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTranslations } from "next-intl";
import ReturnBtn from "../../../containers/returnBtn.jsx";

export const metadata = {
  title: "About - SpotifyLoader",
  metadataBase: new URL("https://spotifyloader.com"),
  alternates: {
    canonical: "/about",
  },
};

const Page = () => {
  const t = useTranslations();
  return (
    <div className=" flex flex-col mt-10">
      <div className=" mx-auto w-[85vw] md:w-[80vw] xl:w-[43vw]  text-text ">
        <h3 className="text-4xl text-center font-semibold  text-primary my-10 ">
          {t("about")} - SpotifyLoader
        </h3>
        <p className="text-text text-base leading-7 ">{t("aboutpara")}</p>
        <ReturnBtn />
      </div>
    </div>
  );
};

export default Page;
