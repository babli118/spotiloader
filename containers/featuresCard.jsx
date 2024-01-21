import React from "react";

const FeaturesCard = ({ heading, text }) => {
  return (
    <div className="bg-[#121212] w-[16rem] h-[20rem]  rounded-md text-center">
      <div className="px-8 pt-10">
        <p className="font-semibold  text-[#1ED760] mt-4 text-xl uppercase px-6 mx-8 ">
          {heading}
        </p>
        <p className="mt-4 mx-4 mb-8">{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
