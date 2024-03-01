import React from "react";
import { Link } from "../navigation";

const NavLink = ({ name, href, locale, p, c }) => {
  return (
    <Link
      locale={locale}
      style={{
        padding: `${p ? p : "0.2"}rem 0.4rem`,
        color: `${c ? "#121212" : "#f2ecec"}`,
      }}
      href={href}
      className="text-base text-text  hover:text-text  w-full rounded-md   font-medium hover:scale-105  transition-all "
    >
      {name}
    </Link>
  );
};

export default NavLink;
