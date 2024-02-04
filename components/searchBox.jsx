"use client";
import React, { useRef, useState } from "react";
import Link from "next/link.js";
import getSongInfo from "../utils/getSongInfo.js";
import getPlayListInfo from "../utils/getPlayListInfo.js";
import SongCard from "./SongCard";
import { ThreeCircles } from "react-loader-spinner";
import PlayListBlock from "./PlayListBlock.jsx";
import { useTranslations } from "next-intl";
import { MdOutlineContentPaste } from "react-icons/md";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [songInfo, setSongInfo] = useState(null);
  const [playListInfo, setPlayListInfo] = useState(null);
  const [error, setError] = useState("");
  const [duration, setDuration] = useState("");
  const songRef = useRef(null);

  const t = useTranslations();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsClicked(true);
  };
  const handlePasteClick = () => {
    navigator.clipboard.readText().then((pastedContent) => {
      setInputValue(pastedContent);
    });
  };

  const handleInputPaste = (e) => {
    e.preventDefault(); // Prevent the default paste behavior
    const pastedContent = e.clipboardData.getData("text");
    setInputValue(pastedContent);
  };

  const scrollToSong = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640 && songRef.current) {
      // Adjust the value according to your 'sm' breakpoint
      const topPosition = songRef.current.offsetTop;
      const offset = 100; // Adjust this value according to your layout
      window.scrollTo({
        top: topPosition - offset,
        behavior: "smooth",
      });
    } else {
      null;
    }
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
        setPlayListInfo("");
        setError(null);
        const playListInfo = await getPlayListInfo(inputValue);
        setLoading(false);
        setPlayListInfo(playListInfo);
        scrollToSong();
      } catch (error) {
        setError("Something went Wrong. Please try again later");
        setLoading(false);
        return;
      }
    } else if (inputValue.startsWith("https://open.spotify.com/track/")) {
      try {
        setSongInfo("");
        setError(null);
        setLoading(true);
        const songInfo = await getSongInfo(inputValue);
        setLoading(false);
        setDuration(songInfo.tracks[0].duration);
        setSongInfo(songInfo.preview);
        scrollToSong();
      } catch (error) {
        setError("Something went Wrong. Please try again later");
      }
    } else {
      setError(
        "Invalid Spotify Song or Playlist url. Please enter a valid url and try again."
      );
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
    <div className="md:my-10 my-12  ">
      <div className="flex flex-col justify-center content-center w-screen mt-4 md:mt-20 mb-6">
        <div className="flex justify-center content-center">
          <div className="flex flex-col justify-center content-center">
            <h1 className="text-[#1ED760] text-center font-semibold text-4xl sm:text-5xl mb-4 sm:mb-8">
              {t("header")}
            </h1>
            <p className="text-white hidden sm:block text-center font-medium  sm:font-semibold text-base mb-8 my-4 mx-6">
              {t("tagline")}
            </p>
            <p className="text-white  sm:hidden text-center font-medium  sm:font-semibold text-base mb-8 my-4 mx-6">
              Convert and download Spotify Songs and Playlists to MP3
            </p>
            <div className=" flex flex-col mx-auto  ">
              <div className="flex flex-col sm:flex-row  mx-auto w-[85vw] max-w-[780px]">
                <input
                  className={`bg-[#121212] border-solid border-2 border-transparent focus:outline-none focus:border-white appearance-none text-white p-4 w-full rounded-md duration-50`}
                  type="text"
                  placeholder={"Paste Spotify Song or Playlist Link Here!"}
                  required
                  value={inputValue}
                  autoComplete="off"
                  onClick={handleInputChange}
                  onPaste={handleInputPaste}
                  onChange={handleInputValue}
                />

                <div className="flex">
                  <button
                    onClick={handleSearchClick}
                    className="bg-[#1ED760] w-full relative mt-4 sm:mt-0 hover:scale-110  transition-all text-lg text-black font-bold px-4 py-3 mx-2 rounded-md"
                  >
                    {t("search")}
                  </button>

                  <div
                    onClick={handlePasteClick}
                    className="text-white absolute -left-20 top-2 border-2 border-white/30 rounded-full cursor-pointer hover:bg-blue-800/30 transition-all   "
                  >
                    <div className="flex justify-center items-center  p-2">
                      <MdOutlineContentPaste />
                      <p>Paste</p>
                    </div>
                  </div>
                </div>
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
              {error && (
                <p className="text-red-500 mx-10 mt-2 "> {t("error")}</p>
              )}
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
      <div className=" " id={"song"} ref={songRef}>
        {songInfo ? (
          <div className="flex flex-col justify-center content-center  mt-4">
            <div className="mt-16 sm:hidden"></div>
            <div className="flex content-center mx-auto justify-between">
              <SongCard
                duration={duration}
                songInfo={songInfo}
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
    </div>
  );
};

export default SearchBox;
