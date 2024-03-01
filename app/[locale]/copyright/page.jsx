import React from "react";
import Link from "next/link";
import ReturnBtn from "../../../containers/returnBtn";

export const metadata = {
  title: "Copyright Information - SpotifyLoader",
  metadataBase: new URL("https://spotifyloader.com"),
  alternates: {
    canonical: "/copyright",
  },
};

const Page = () => {
  return (
    <div className=" flex flex-col ">
      <div className="mx-auto w-[85vw] md:w-[80vw] xl:w-[43vw]   ">
        <h3 className="text-4xl  font-semibold  text-primary my-10 text-center  ">
          COPYRIGHT - SPOTIFYLOADER
        </h3>
        <div className="text-text">
          <p>
            {" "}
            ・ We respect the intellectual property rights of others. You may
            not infringe the copyright, trademark or other proprietary
            informational rights of any party. We may in our sole discretion
            remove any Content we have reason to believe violates any of the
            intellectual property rights of others and may terminate your use of
            the Website if you submit any such Content.
          </p>
          <p className=" underline mt-4 ">
            REPEAT INFRINGER POLICY. AS PART OF OUR REPEAT-INFRINGEMENT POLICY,
            ANY USER FOR WHOSE MATERIAL WE RECEIVE THREE GOOD-FAITH AND
            EFFECTIVE COMPLAINTS WITHIN ANY CONTIGUOUS SIX-MONTH PERIOD WILL
            HAVE HIS GRANT OF USE OF THE WEBSITE TERMINATED.
          </p>
          <p className="mt-4">
            ・ Although we are not subject to United States law, we voluntarily
            comply with the Digital Millennium Copyright Act. Pursuant to Title
            17, Section 512(c)(2) of the United States Code, if you believe that
            any of your copyrighted material is being infringed on the Website,
            we have designated an agent to receive notifications of claimed
            copyright infringement. Notifications should be e-mailed to
            <span> </span>
            <a
              className="text-primary"
              href="mailto:abuse_spotifyloader@proton.me"
            >
              abuse_spotifyloader@proton.me
            </a>
          </p>
          <p className="mt-4">
            ・ All notifications not relevant to us or ineffective under the law
            will receive no response or action thereupon. An effective
            notification of claimed infringement must be a written communication
            to our agent that includes substantially the following:
          </p>
          <div className="ml-8">
            <p className="mt-4">
              {" "}
              ・ Identification of the copyrighted work that is believed to be
              infringed. Please describe the work and, where possible, include a
              copy or the location (e.g., a URL) of an authorized version of the
              work;
            </p>
            <p className="mt-4">
              {" "}
              ・ Information that will allow us to contact you, including your
              address, telephone number and, if available, your e-mail address;
            </p>
            <p className="mt-4">
              {" "}
              ・ A statement that you have a good faith belief that the use of
              the material complained of is not authorized by you, your agent or
              the law;
            </p>
            <p className="mt-4">
              {" "}
              ・ A statement that the information in the notification is
              accurate and that under penalty of perjury that you are the owner
              or are authorized to act on behalf of the owner of the work that
              is allegedly infringed; and
            </p>
            <p className="mt-4">
              {" "}
              ・ A physical or electronic signature from the copyright holder or
              an authorized representative.
            </p>
          </div>
          <p className="mt-4">
            ・ If your User Submission or a search result to your website is
            removed pursuant to a notification of claimed copyright
            infringement, you may provide us with a counter-notification, which
            must be a written communication to our above listed agent and
            satisfactory to us that includes substantially the following:
          </p>
          <div className="ml-8">
            <p className="mt-4"> ・ Your physical or electronic signature;</p>
            <p className="mt-4">
              {" "}
              ・ Identification of the material that has been removed or to
              which access has been disabled and the location at which the
              material appeared before it was removed or access to it was
              disabled;
            </p>
            <p className="mt-4">
              {" "}
              ・ A statement under penalty of perjury that you have a good faith
              belief that the material was removed or disabled as a result of
              mistake or misidentification of the material to be removed or
              disabled;
            </p>
            <p className="mt-4">
              {" "}
              ・ Your name, address, telephone number, email address and a
              statement that you consent to the jurisdiction of the courts in
              the address you provided, Anguilla and the location(s) in which
              the purported copyright owner is located; and
            </p>
            <p className="mt-4">
              {" "}
              ・ A statement that you will accept service of process from the
              purported copyright owner or its agent.
            </p>
          </div>
        </div>
        <ReturnBtn />
      </div>
    </div>
  );
};

export default Page;
