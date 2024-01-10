import React from "react";
import HowToDownload from "./howToDownload";
import SpotifyLoaderInfo from "./SpotifyLoaderInfo";
import About from "./about";
import Features from "./Features";
import FAQ from "./FAQ";
import Conclusion from "./conclusion";

const Info = () => {
  return (
    <div className=" mt-10 flex flex-col gap-4 items-center justify-center">
      <SpotifyLoaderInfo />
      <HowToDownload />
      <About />
      <Features />
      <FAQ />
      <Conclusion />
    </div>
  );
};

export default Info;
