import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="sm:mt-24 mt-14 w-[85vw] mx-auto md:w-[60vw] xl:w-[50vw] z-0 ">
      <h1 className="text-primary drop-shadow-sm text-center font-semibold text-4xl sm:text-5xl mb-4  ">
        {t("header")}
      </h1>
      <p className="text-text  text-center font-medium   text-base  mx-6">
        {t("tagline")}
      </p>
    </div>
  );
};

export default Hero;
