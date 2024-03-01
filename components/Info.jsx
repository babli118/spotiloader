import React from "react";
import HowToDownload from "./howToDownload";
import SpotifyLoaderInfo from "./SpotifyLoaderInfo";
import Benifits from "./benifits";
import Features from "./Features";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";

const Info = () => {
  const t = useTranslations();
  return (
    <div className=" mt-10 flex flex-col gap-4 overflow-x-hidden items-center justify-center">
      <SpotifyLoaderInfo spotiinfo={t("spotiinfo")} spdlQ={t("spdlQ")} />
      <HowToDownload />
      <Features />
      <Benifits />
      <FAQ />
    </div>
  );
};

export default Info;
