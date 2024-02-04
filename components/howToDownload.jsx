import React from "react";
import Image from "next/image";
import dots from "../public/dots.jpg";
import share from "../public/share.jpg";
import download from "../public/download.jpg";
import search from "../public/search.jpg";
import { useTranslations } from "next-intl";

const HowToDownload = () => {
  const t = useTranslations();
  return (
    <section
      id="use"
      className="text-white scroll-smooth text-start  flex flex-col items-center justify-center mx-auto w-[80vw] md:w-[60vw]"
    >
      <h3 className="text-4xl text-[#1ED760] font-semibold text-center mx-8 ">
        {t("howto")}
      </h3>
      <div className="my-4 mx-4">
        <p className="text-lg mx-4">{t("tut")}</p>
        <div className="my-4 flex flex-col gap-1 mx-auto">
          <p className="mx-4">
            <span className="text-[#1ED760]">1.</span> {t("step1")}
          </p>{" "}
          <p className="mx-4">
            <span className="text-[#1ED760] ">2.</span> {t("step2")}
          </p>
          <p className="mx-4">
            <span className="text-[#1ED760] ">3.</span> {t("step3")}
          </p>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={dots}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <p className="mx-4">
            <span className="text-[#1ED760]">4.</span> {t("step4")}
          </p>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={share}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <p className="mx-4">
            <span className="text-[#1ED760]">5.</span> {t("step5")}
          </p>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={search}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <p className=" mx-4">
            <span className="text-[#1ED760]">6. </span> {t("step6")}
          </p>
          <div className=" flex items-center justify-center w-[22rem] mx-auto my-4">
            <Image
              src={download}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToDownload;
