import Link from "next/link";
import React from "react";

const ReturnBtn = ({ text }) => {
  return (
    <div className="mt-10 transform  transition-all mx-auto items-center flex justify-center my-7 ">
      <Link
        href={"/"}
        className="bg-[#1ED760] hover:bg-[#24974c] hover:scale-110   transition-all   text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
      >
        {text}
      </Link>
    </div>
  );
};

export default ReturnBtn;
