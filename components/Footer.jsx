import React from "react";
import FootLink from "../containers/footLink.jsx";

const Footer = ({ locale }) => {
  return (
    <div className="items-centre mt-10 bg-background border-t-text/10 border-t-2 flex flex-col justify-center items-center ">
      <div className="w-[85vw] md:w-[80vw] xl:w-[43vw]">
        <div className=" flex justify-center items-center   mx-0  pt-4  sm:gap-4 text-sm text-white ">
          <FootLink name={"About"} href={"/about"} locale={locale} />
          <FootLink
            name={"Privacy Policy"}
            href={"/privacy-policy"}
            locale={locale}
          />
          <FootLink name={"Copyright"} href={"/copyright"} locale={locale} />
          <FootLink name={"Terms of Service"} href={"/tos"} locale={locale} />
          <FootLink name={"Contact"} href={"/contact"} locale={locale} />
        </div>
        <div className="text-text text-center p-4 sm:text-base text-sm ">
          <p>
            This website is not affiliated with or endorsed by Spotify AB. Our
            use of the name &quot;Spotify&quot; is for context, not claiming any
            ownership. It remains the property of the copyright holder.
          </p>
          <p>
            spotifyloader.com doesn&lsquo;t host any copyrighted material. We
            utilize third party services to accomplish our goals.
          </p>
          <p className="text-primary font-semibold mt-2 text-base">
            © 2024 Spotifyloader.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
