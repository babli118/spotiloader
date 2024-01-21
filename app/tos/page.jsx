/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TaskBar from "../../components/taskBar";
import Link from "next/link";
import Footer from "../../components/Footer";

const Tos = () => {
  return (
    <div className=" flex flex-col ">
      <TaskBar />
      <div className="mx-10 sm:mx-[12rem] md:mx-[25rem] text-white ">
        <h3 className="text-4xl  font-semibold  text-[#1ED760] my-10 text-center   ">
          TERMS OF SERVICE - SPOTIFYLOADER
        </h3>
        <p className="text-xl font-semibold text-[#1ED760] my-2">1. Terms</p>
        <p>
          By accessing this Website, accessible from https://spotifyloader/, you
          are agreeing to be bound by these Website Terms and Conditions of Use
          and agree that you are responsible for the agreement with any
          applicable local laws. If you disagree with any of these terms, you
          are prohibited from accessing this site. The materials contained in
          this Website are protected by copyright and trade mark law.
        </p>
        <p className="text-xl font-semibold text-[#1ED760] my-2">
          2. Use License
        </p>
        <p>
          Permission is granted to temporarily download one copy of the
          materials on SpotifyLoader Website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not: modify or copy
          the materials; use the materials for any commercial purpose or for any
          public display; attempt to reverse engineer any software contained on
          SpotifyLoader Website; remove any copyright or other proprietary
          notations from the materials; or transferring the materials to another
          person or "mirror" the materials on any other server. This will let
          SpotifyLoader to terminate upon violations of any of these
          restrictions. Upon termination, your viewing right will also be
          terminated and you should destroy any downloaded materials in your
          possession whether it is printed or electronic format.
        </p>
        <p className="text-xl font-semibold text-[#1ED760] my-2">
          3. Disclaimer
        </p>
        <p>
          All the materials on SpotifyLoader’s Website are provided "as is".
          SpotifyLoader makes no warranties, may it be expressed or implied,
          therefore negates all other warranties. Furthermore, SpotifyLoader
          does not make any representations concerning the accuracy or
          reliability of the use of the materials on its Website or otherwise
          relating to such materials or any sites linked to this Website.
        </p>
        <p className="text-xl font-semibold text-[#1ED760] my-2">
          4. Limitations
        </p>
        <p>
          SpotifyLoader or its suppliers will not be hold accountable for any
          damages that will arise with the use or inability to use the materials
          on SpotifyLoader’s Website, even if SpotifyLoader or an authorize
          representative of this Website has been notified, orally or written,
          of the possibility of such damage. Some jurisdiction does not allow
          limitations on implied warranties or limitations of liability for
          incidental damages, these limitations may not apply to you.
        </p>

        <p className="text-xl font-semibold text-[#1ED760] my-2">
          5. Revisions and Errata
        </p>
        <p>
          The materials appearing on SpotifyLoader’s Website may include
          technical, typographical, or photographic errors. SpotifyLoader will
          not promise that any of the materials in this Website are accurate,
          complete, or current. SpotifyLoader may change the materials contained
          on its Website at any time without notice. SpotifyLoader does not make
          any commitment to update the materials.
        </p>
        <p className="text-xl font-semibold text-[#1ED760] my-2">6. Links</p>
        <p>
          SpotifyLoader has not reviewed all of the sites linked to its Website
          and is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by SpotifyLoader of
          the site. The use of any linked website is at the user’s own risk.
        </p>
        <p className="text-xl font-semibold text-[#1ED760] my-2">
          7. Site Terms of Use Modifications
        </p>
        <p>
          SpotifyLoader may revise these Terms of Use for its Website at any
          time without prior notice. By using this Website, you are agreeing to
          be bound by the current version of these Terms and Conditions of Use.
        </p>

        <p className="text-xl font-semibold text-[#1ED760] my-2">
          8. Your Privacy
        </p>
        <p>Please read our Privacy Policy.</p>
        <p className="text-xl font-semibold text-[#1ED760] my-2">
          9. Governing Law
        </p>
        <p>
          Any claim related to SpotifyLoader's Website shall be governed by the
          laws of ae without regards to its conflict of law provisions.
        </p>
      </div>
      <div className="mt-10 transform  transition-all mx-auto items-center flex justify-center my-7 ">
        <Link
          href={"/"}
          className="bg-[#1ED760] hover:bg-[#24974c] hover:scale-110   transition-all   text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
        >
          Return to homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Tos;
