"use client";
import React, { useState } from "react";
import Link from "next/link.js";
import getSongInfo from "../utils/getSongInfo.js";
import getPlayListInfo from "../utils/getPlayListInfo.js";
import SongCard from "./SongCard";
import { ThreeCircles } from "react-loader-spinner";
import PlayListBlock from "./PlayListBlock.jsx";
import { useTranslations } from "next-intl";
import EmbedMetaData from "../utils/EmbedMetaData.js";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [songInfo, setSongInfo] = useState(null);
  const [playListInfo, setPlayListInfo] = useState(null);
  const [error, setError] = useState("");
  const [duration, setDuration] = useState("");
  const t = useTranslations();

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
    e.preventDefault(); // Prevent the default paste behavior
    const pastedContent = e.clipboardData.getData("text");
    setInputValue(pastedContent);
    console.log(inputValue);
  };
  const handleSearchClick = async (e) => {
    setError(null);
    setLoading(false);
    setSongInfo("");
    setPlayListInfo("");
    e.preventDefault();

    if (inputValue.startsWith("https://open.spotify.com/playlist/")) {
      setLoading(true);
      try {
        const playListInfo = await getPlayListInfo(inputValue);
        setLoading(false);
        setPlayListInfo(playListInfo);
      } catch (error) {
        console.log("error:", error);
        setError("Something went Wrong. Please try again later");
        setLoading(false);
        return;
      }
    } else if (inputValue.startsWith("https://open.spotify.com/track/")) {
      try {
        setLoading(true);
        const songInfo = await getSongInfo(inputValue);
        setLoading(false);
        setDuration(songInfo.tracks[0].duration);
        setSongInfo(songInfo.preview);
        if (songInfo.error) {
          setError(
            "Something went Wrong, Please recheck ur link or try again later"
          );
          setLoading(false);
          setSongInfo(null);
        }
      } catch (error) {
        setError("Something went Wrong. Please try again later");
      }
    } else {
      setError(
        "Invalid Spotify Song or Playlist url. Please enter a valid url and try again."
      );
      setLoading(false);
    }
    setLoading(false);
  };
  const resetState = () => {
    setSongInfo(null);
    setPlayListInfo(null);
    setInputValue(null);
    setInputValue("");
  };

  return (
    <div className="md:my-10 mb-12 mt-10 ">
      <div className="flex flex-col justify-center content-center w-screen mt-4 md:mt-20 mb-6">
        <div className="flex justify-center content-center">
          <div className="flex flex-col justify-center content-center">
            <h1 className="text-[#1ED760] text-center font-semibold text-4xl sm:text-5xl mb-4 sm:mb-8">
              {t("header")}
            </h1>
            <p className="text-white text-center font-medium  sm:font-semibold text-base mb-8 my-4 mx-8">
              {t("tagline")}
            </p>
            <div className="flex flex-col mx-auto  ">
              {/* w-[25rem] sm:w-[35rem] md:w-[50rem] */}
              <div className="flex mx-auto  w-[80vw] max-w-[780px]">
                <input
                  className={`bg-[#121212] border-solid border-2 border-transparent focus:outline-none focus:border-white appearance-none text-white p-4 w-full rounded-md transition-all duration-300 ease-in-out`}
                  type="text"
                  placeholder={t("pholder")}
                  required
                  value={inputValue}
                  autoComplete="off"
                  onClick={handleInputChange}
                  onPaste={handleInputPaste}
                  onChange={handleInputValue}
                />
                <button
                  onClick={handleSearchClick}
                  className="bg-[#1ED760] hover:scale-110 transition-all    text-lg text-black font-bold px-4 py-3   mx-2 rounded-md"
                >
                  {t("search")}
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
              {error && <p className="text-red-500 ml-2 mt-2"> {t("error")}</p>}
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
            <SongCard
              duration={duration}
              song={songInfo}
              resetState={resetState}
              pl={false}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {playListInfo ? (
        <div className="flex flex-col justify-center content-center  mt-4 mx-10 lg:mx-0">
          <div className="flex content-center mx-auto justify-between">
            <PlayListBlock resetState={resetState} playlist={playListInfo} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;
