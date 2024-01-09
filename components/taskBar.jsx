import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

const TaskBar = () => {
  return (
    <div className="my-3 mx-4 p-4 flex justify-between content-center bg-[#121212] rounded-md ">
      <div className="text-[#1ED760] text-4xl font-bold flex flex-row items-center">
        <div className="mr-2">
          <Image src={logo} width={50} height={100} alt="SpotiLoad Logo" />
        </div>
        <h1>SpotiLoader</h1>
      </div>
    </div>
  );
};

export default TaskBar;
