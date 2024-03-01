import { useTranslations } from "next-intl";
import { Link } from "../navigation";
import React from "react";

const ReturnBtn = ({ text }) => {
  const t = useTranslations();
  return (
    <div className="mt-10 transform  transition-all mx-auto items-center flex justify-center  ">
      <Link
        href={"/"}
        className="bg-primary  hover:scale-110   transition-all   text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
      >
        {t("return")}
      </Link>
    </div>
  );
};

export default ReturnBtn;
