import React from "react";
import FeaturesCard from "../containers/featuresCard.jsx";
import { useTranslations } from "next-intl";

const Features = ({ heading }) => {
  const t = useTranslations();
  return (
    <section
      id="features"
      className="text-white text-start mx-auto flex flex-col items-center justify-center w-[85vw] md:w-[80vw] xl:w-[43vw] mb-8  "
    >
      <h3 className="text-3xl font-medium text-text">
        {t("features.heading")}
      </h3>
      <div className="grid sm:grid-cols-2 mx-10 sm:mx-0 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 sm:gap-x-10 gap-y-6 sm:gap-y-10 text-white mt-8  ">
        <FeaturesCard
          heading={t("features.c1heading")}
          text={t("features.c1text")}
        />
        <FeaturesCard
          heading={t("features.c2heading")}
          text={t("features.c2text")}
        />
        <FeaturesCard
          heading={t("features.c3heading")}
          text={t("features.c3text")}
        />
        <FeaturesCard
          heading={t("features.c4heading")}
          text={t("features.c4text")}
        />
        <FeaturesCard
          heading={t("features.c5heading")}
          text={t("features.c5text")}
        />
        <FeaturesCard
          heading={t("features.c6heading")}
          text={t("features.c6text")}
        />
      </div>
      <div className="text-base text-text mt-16">
        <h2 className="text-3xl  font-medium text-text mb-4 ">
          {t("info.heading")}
        </h2>
        <p className="text-base text-text leading-7">{t("info.text")}</p>
      </div>
    </section>
  );
};

export default Features;
