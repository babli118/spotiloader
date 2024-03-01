import { useTranslations } from "next-intl";
import React from "react";

const Benifits = () => {
  const t = useTranslations();
  return (
    <section
      id="about"
      className="flex  flex-col items-start justify-start text-start w-[85vw] md:w-[80vw] xl:w-[43vw] mb-2 "
    >
      <h3 className="text-3xl text-start font-medium text-text  ">
        {t("benifits.heading")}
      </h3>{" "}
      <div className="text-text text-base ">
        <div>
          <h3 className=" text-lg mt-2">{t("benifits.content.0.title")}</h3>
          <p className="my-2">
            <span className="text-accent font-semibold text-base mr-2">
              1{")"}
            </span>
            {t("benifits.content.0.points.0")}
          </p>
        </div>{" "}
        <p className="my-2">
          <span className="text-accent font-semibold text-base mr-2">
            2{")"}
          </span>
          {t("benifits.content.0.points.1")}
        </p>{" "}
        <p className="my-2">
          <span className="text-accent font-semibold text-base mr-2">
            3{")"}
          </span>
          {t("benifits.content.0.points.2")}
        </p>{" "}
        <p className="my-2">
          <span className="text-accent font-semibold text-base mr-2">
            4{")"}
          </span>
          {t("benifits.content.0.points.3")}
        </p>{" "}
        <p className="my-2">
          <span className="text-accent font-semibold text-base mr-2">
            5{")"}
          </span>
          {t("benifits.content.0.points.4")}
        </p>{" "}
        <p className="text-base mt-8">{t("benifits.content.1.conclusion")}</p>
      </div>
    </section>
  );
};

export default Benifits;
