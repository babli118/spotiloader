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
      className="text-white scroll-smooth text-start  flex flex-col  mx-auto w-[85vw] md:w-[80vw] xl:w-[43vw]"
    >
      <h3 className="text-3xl text-text font-medium text-start  mb-4 ">
        {t("howto")}
      </h3>
      <div className="mb-2 ">
        <p className="text-base my-2 text-text">{t("tut")}</p>
        <div className="mb-4 flex flex-col gap-1 mx-auto text-base">
          <p className=" text-text">
            <span className="text-[#2DC251] font-semibold">1.</span>{" "}
            {t("step1")}
          </p>{" "}
          <p className=" text-text">
            <span className="text-[#2DC251] font-semibold ">2.</span>{" "}
            {t("step2")}
          </p>
          <p className=" text-text ">
            <span className="text-[#2DC251] font-semibold ">3.</span>{" "}
            {t("step3")}
          </p>
          <div className=" flex items-start justify-start w-[22rem] sm:ml-4  mb-2 ">
            <Image
              src={dots}
              height={80}
              width={400}
              alt="Image showing how to click on 3 dots"
            />
          </div>
          <p className=" text-text">
            <span className="text-[#2DC251] font-semibold">4.</span>{" "}
            {t("step4")}
          </p>
          <div className=" flex items-start justify-start w-[22rem] sm:ml-4   mb-2 ">
            <Image
              src={share}
              height={80}
              width={400}
              alt="Image showing how to copy song url"
            />
          </div>
          <p className=" text-text">
            <span className="text-[#2DC251] font-semibold">5.</span>{" "}
            {t("step5")}
          </p>
          <div className=" flex items-start justify-start w-[22rem] sm:ml-4  mb-2 ">
            <Image
              src={search}
              height={80}
              width={400}
              alt="Image showing how to paste song url"
            />
          </div>
          <p className="  text-text">
            <span className="text-[#2DC251] font-semibold">6. </span>{" "}
            {t("step6")}
          </p>
          <div className=" flex items-start justify-start w-[22rem] sm:ml-4 mb-2 ">
            <Image
              src={download}
              height={80}
              width={400}
              alt="Image showing how to start download"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToDownload;
