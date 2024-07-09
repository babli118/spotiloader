import React from "react";

const SpotifyLoaderInfo = ({ spotiinfo, spdlQ }) => {
  return (
    <div className="text-start mx-auto flex flex-col items-start justify-start  mb-8 mt-4  w-[85vw] md:w-[60vw] xl:w-[43vw] ">
      <h2 className="text-3xl font-medium  text-text">{spdlQ}</h2>
      <p className="text-base text-text  mt-4 leading-7">{spotiinfo}</p>
    </div>
  );
};

export default SpotifyLoaderInfo;
