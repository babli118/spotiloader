import React from "react";
import Link from "next/link";

const FootLink = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="text-[2px] sm:text-lg font-normal sm:font-semibold  rounded-sm hover:scale-110 mx-2 px-2 sm:mx-4  underline hover:bg-[#1ED760] transition-all "
    >
      {name}
    </Link>
  );
};

export default FootLink;
