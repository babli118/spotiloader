import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="items-centre mt-10 ">
      <div className=" flex justify-center gap-4 text-white">
        <Link
          className="text-lg font-semibold bg-white/20 rounded-sm hover:scale-110 hover:underline   mx-4 px-4 hover:bg-[#1ED760] transition-all "
          href={"/about"}
        >
          ・ About
        </Link>
        <Link
          className="text-lg font-semibold bg-white/20 rounded-sm hover:scale-110 hover:underline   mx-4 px-4 hover:bg-[#1ED760] transition-all "
          href={"/privacy-policy"}
        >
          ・ Privacy Policy
        </Link>
      </div>
      <div className="text-white text-center p-4 sm:text-base text-sm ">
        <p>
          This website is not affiliated with or endorsed by Spotify AB. Our use
          of the name &quot;Spotify&quot; is for context, not claiming any
          ownership. It remains the property of the copyright holder.
        </p>
        <p>
          spotiLoader.com doesn&lsquo;t host any copyrighted material. We
          utilize third party services to accomplish our goals.
        </p>
        <p className="text-[#1ED760] mt-2">© 2024 SpotiLoader.com</p>
      </div>
    </div>
  );
};

export default Footer;
