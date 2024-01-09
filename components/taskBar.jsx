import React from "react";
import Image from "next/image";

const TaskBar = () => {
  return (
    <div>
      <div className="my-3 mx-4 p-4 flex justify-between content-center bg-[#121212]">
        <div className="text-[#1ED760] text-3xl font-bold">
          <div>
            <Image
              src="../app/logo.svg"
              width={100}
              height={100}
              alt="SpotiLoad Logo"
            />
          </div>
          <h1>SpotiLoader</h1>
        </div>

        <div>hy</div>
      </div>
    </div>
  );
};

export default TaskBar;
