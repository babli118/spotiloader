import React from "react";

const FeaturesCard = ({ heading, text }) => {
  return (
    <div
      style={{
        background: "#41fc9c",
        paddingLeft: "14px",
        paddingRight: "14px",
      }}
      className="bg-accent w-[16rem] h-[18rem]  rounded-md text-center shadow-md"
    >
      <div className="px-8 pt-10 ">
        <p
          style={{ padding: "0px 10px" }}
          className="font-medium  text-text mt-4 text-lg uppercase  mx-8 "
        >
          {heading}
        </p>
        <p className="mt-4 mx-4 mb-4 text-text text-base">{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
