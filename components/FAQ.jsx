import React from "react";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col  mx-auto items-start justify-start text-start w-[85vw] md:w-[80vw] xl:w-[43vw] my-10">
      <h3 className="text-3xl text-start font-medium text-text mb-8">
        {t("faq.heading")}
      </h3>
      <div className="text-text ">
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.0.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.1.answer")}</p>{" "}
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.1.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.0.answer")}</p>{" "}
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.2.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.2.answer")}</p>{" "}
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.2.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.2.answer")}</p>{" "}
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.3.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.3.answer")}</p>{" "}
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.4.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.4.answer")}</p>{" "}
        <h3 className="text-[#2DC251] font-medium text-lg mb-2">
          {t("faq.questions.5.question")}
        </h3>
        <p className="text-base mb-6">{t("faq.questions.5.answer")}</p>{" "}
      </div>
    </div>
  );
};

export default FAQ;
