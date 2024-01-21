import React from "react";
import FootLink from "../containers/footLink.jsx";

const Footer = () => {
  return (
    <div className="items-centre mt-10 ">
      <div className=" sm:flex sm:justify-center sm:items-center flex  mx-4   sm:gap-4 text-sm text-white ">
        <FootLink name={"About"} href={"/about"} />
        <FootLink name={"Privacy Policy"} href={"/privacy-policy"} />
        <FootLink name={"Copyright"} href={"/copyright"} />
        <FootLink name={"Terms of Service"} href={"/tos"} />
        <FootLink name={"Contact"} href={"/contact"} />
      </div>
      <div className="text-white text-center p-4 sm:text-base text-sm ">
        <p>
          This website is not affiliated with or endorsed by Spotify AB. Our use
          of the name &quot;Spotify&quot; is for context, not claiming any
          ownership. It remains the property of the copyright holder.
        </p>
        <p>
          spotifyloader.com doesn&lsquo;t host any copyrighted material. We
          utilize third party services to accomplish our goals.
        </p>
        <p className="text-[#1ED760] mt-2">© 2024 Spotifyloader.com</p>
      </div>
    </div>
  );
};

export default Footer;
