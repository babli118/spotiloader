import React from "react";
import { useTranslations } from "next-intl";
import ReturnBtn from "../../../containers/returnBtn";

export const metadata = {
  title: "Contact - SpotifyLoader",
  metadataBase: new URL("https://spotifyloader.com"),
  alternates: {
    canonical: "/contact",
  },
};

const Page = () => {
  const t = useTranslations();
  return (
    <div className=" flex flex-col ">
      <div className="mx-10 sm:mx-[12rem] md:mx-[15rem] lg:mx-[25rem]  ">
        <h3 className="text-4xl text-center font-semibold  text-primary my-10 capitalize">
          {t("contact")} - SPOTIFYLOADER
        </h3>
        <div className="flex gap-x-2 items-center justify-center">
          <p className="text-text text-base  ">{t("cntinfo")}</p>
          <a
            className="text-primary font-semibold"
            href="https://m.me/spotifyloader"
          >
            m.me/SpotifyLoader
          </a>
        </div>
        <div className="mb-10">
          <ReturnBtn />
        </div>
      </div>
    </div>
  );
};

export default Page;
