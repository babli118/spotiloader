import React from "react";
import { Link } from "../navigation";

const FootLink = ({ name, href, locale }) => {
  return (
    <Link
      locale={locale}
      href={href}
      className="text-[2px] sm:text-lg font-normal mt-6 sm:font-semibold  rounded-sm hover:scale-110 mx-2 px-2 sm:mx-4  underline text-text transition-all "
    >
      {name}
    </Link>
  );
};

export default FootLink;
