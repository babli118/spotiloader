import React from "react";

const FeaturesCard = ({ heading, text }) => {
  return (
    <div className="bg-[#121212] w-[16rem] h-[16rem] rounded-md text-center">
      <div className="px-6 py-4">
        <p className="font-semibold  text-[#1ED760] text-xl uppercase ">
          FAST FREE AND EASY TO USE
        </p>{" "}
        <p className="mt-4">
          We support all device platforms. Easy to convert YouTube videos to MP3
          files regardless of whether you are using Windows, Mac or Linux,
          Android, iPhone.
        </p>{" "}
      </div>
    </div>
  );
};

export default FeaturesCard;
