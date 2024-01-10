"use client";
import React, { useState } from "react";
import getSongInfo from "@/utils/getSongInfo";
import SongCard from "./SongCard";
import { ThreeCircles } from "react-loader-spinner";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [songInfo, setSongInfo] = useState(null);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsClicked(true);
  };

  const handleInputPaste = (e) => {
    const pastedContent = e.clipboardData.getData("text");
    setInputValue(pastedContent);
  };
  const handleSearchClick = async (e) => {
    setLoading(false);
    setSongInfo("");
    e.preventDefault();
    // Check if the input value matches the expected syntax

    const isValidSyntax = inputValue.startsWith(
      "https://open.spotify.com/track/"
    );
    setError(isValidSyntax ? "" : "Please enter a valid Spotify track url!");
    setLoading(true);

    const songInfo = await getSongInfo(inputValue);
    setLoading(false);

    setSongInfo(error ? null : songInfo);
  };
  return (
    <div>
      <div className="flex flex-col justify-center content-center w-screen mt-10">
        <div className="flex justify-center content-center">
          <div className="flex flex-col justify-center content-center">
            <h1 className="text-white text-center font-semibold text-5xl mb-8">
              Spotify to mp3 downloader
            </h1>
            <p className="text-white text-center font-semibold text-sm mb-8">
              Download your favorite Spotify tunes with our efficient Spotify to
              MP3 downloader – seamlessly convert and download tracks for
              offline listening anytime, anywhere!
            </p>
            <div className="mx-auto">
              <input
                className={`bg-[#121212] text-white p-4  rounded-md transition-all duration-300 ease-in-out  w-[15rem] sm:w-[35rem] md:w-[50rem] lg:${
                  isClicked ? "w-[55rem]" : ""
                }`}
                type="text"
                placeholder="https://open.spotify.com/..../...."
                required
                autoComplete="off"
                onClick={handleInputChange}
                onPaste={handleInputPaste}
                onChange={handleInputValue}
              />
              <button
                onClick={handleSearchClick}
                className="bg-[#1ED760] text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
              >
                Search
              </button>
            </div>
            <div className="text-center">
              {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      {loading === true ? (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10">
          <div className="flex content-center mx-auto justify-between">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#1ED760"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {songInfo ? (
        <div className="flex flex-col justify-center content-center  mt-10">
          <div className="flex content-center mx-auto justify-between">
            <SongCard song={songInfo} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBox;
