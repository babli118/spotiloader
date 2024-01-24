"use client";
import React, { useState } from "react";
import Link from "next/link.js";
import getSongInfo from "../utils/getSongInfo.js";
import getPlayListInfo from "../utils/getPlayListInfo.js";
import SongCard from "./SongCard";
import { ThreeCircles } from "react-loader-spinner";
import PlayListBlock from "./PlayListBlock.jsx";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [songInfo, setSongInfo] = useState(null);
  const [playListInfo, setPlayListInfo] = useState(null);
  const [error, setError] = useState("");

  const spotifyTrackRegex =
    /https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9]+)/;

  const spotifyPlayListRegex =
    /https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/;
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

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
    setError(null);
    setLoading(false);
    setSongInfo("");
    setPlayListInfo("");
    e.preventDefault();

    if (inputValue.startsWith("https://open.spotify.com/playlist/")) {
      console.log("playlist");
      setLoading(true);
      const playListInfo = await getPlayListInfo(inputValue);
      setLoading(false);
      setPlayListInfo(playListInfo);
    } else if (inputValue.startsWith("https://open.spotify.com/track/")) {
      console.log("track");
      setLoading(true);
      const songInfo = await getSongInfo(inputValue);
      setLoading(false);
      setSongInfo(songInfo);
    } else {
      setError(
        "Invalid Spotify Song or Playlist url. Please enter a valid url and try again."
      );
    }
  };
  return (
    <div className="md:my-10 mb-12 mt-10 ">
      <div className="flex flex-col justify-center content-center w-screen mt-4 md:mt-20 mb-6">
        <div className="flex justify-center content-center">
          <div className="flex flex-col justify-center content-center">
            <h1 className="text-[#1ED760] text-center font-semibold text-4xl sm:text-5xl mb-8">
              Spotify Downloader
            </h1>
            <p className="text-white text-center font-medium  sm:font-semibold text-base mb-8 my-4 mx-8">
              Download your favorite Spotify songs and playlists with our
              efficient Spotify to MP3 downloader – seamlessly convert and
              download songs for offline listening anytime, anywhere!
            </p>
            <div className="flex flex-col mx-auto  ">
              {/* w-[25rem] sm:w-[35rem] md:w-[50rem] */}
              <div className="flex mx-auto  w-[80vw] max-w-[780px]">
                <input
                  className={`bg-[#121212] border-solid border-2 border-transparent focus:outline-none focus:border-white appearance-none text-white p-4 w-full rounded-md transition-all duration-300 ease-in-out`}
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
                  className="bg-[#1ED760] hover:scale-110 transition-all    text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
                >
                  Search
                </button>
              </div>
              <div className="flex mx-12 lg:mx-4 mt-2">
                <p className="text-white  ">
                  By using our service you accept our{" "}
                  <Link className="text-[#A7A7A7] underline" href={"/tos"}>
                    Terms of Service
                  </Link>{" "}
                  &{" "}
                  <Link
                    className="text-[#A7A7A7] underline"
                    href={"/privacy-policy"}
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
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
        <div className="flex flex-col justify-center content-center  mt-4">
          <div className="flex content-center mx-auto justify-between">
            <SongCard song={songInfo} />
          </div>
        </div>
      ) : (
        ""
      )}
      {playListInfo ? (
        <div className="flex flex-col justify-center content-center  mt-4 mx-10 lg:mx-0">
          <div className="flex content-center mx-auto justify-between">
            <PlayListBlock playlist={playListInfo} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;