import React from "react";
import TaskBar from "../components/taskBar.jsx";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <TaskBar />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-5xl font-semibold text-center my-10 text-[#1ED760]">
          Page Not Found
        </h3>
        <div className="mt-10 transform  transition-all mx-auto ">
          <Link
            href={"/"}
            className="bg-[#1ED760] hover:bg-[#24974c] hover:scale-110   transition-all   text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
