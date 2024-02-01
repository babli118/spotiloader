import React from "react";

const SpotifyLoaderInfo = ({ spotiinfo }) => {
  return (
    <div className="text-whitetext-start mx-auto flex flex-col items-center mb-8 justify-center w-[80vw] md:w-[60vw] ">
      <h2 className="text-4xl font-semibold text-[#1ED760]">SpotifyLoader</h2>
      <p className="text-base  mt-6 text-white">{spotiinfo}</p>
    </div>
  );
};

export default SpotifyLoaderInfo;
