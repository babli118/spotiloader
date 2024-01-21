import React from "react";
import TaskBar from "../../components/taskBar";
import Footer from "../../components/Footer";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" flex flex-col ">
      <TaskBar />
      <div className="mx-10 sm:mx-[12rem] md:mx-[25rem] text-white ">
        <h3 className="text-4xl text-center font-semibold  text-[#1ED760] my-10">
          CONTACT - SPOTIFYLOADER
        </h3>
        <p className="text-white text-base  ">jy</p>
        <div className="mt-10 transform  transition-all mx-auto items-center flex justify-center my-7 ">
          <Link
            href={"/"}
            className="bg-[#1ED760] hover:bg-[#24974c] hover:scale-110   transition-all   text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
          >
            Return to homepage
          </Link>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
