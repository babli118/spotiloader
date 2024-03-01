"use client";
import React, { useRef, useState } from "react";
import { Link } from "../navigation";
import getSongInfo from "../utils/getSongInfo.js";
import getPlayListInfo from "../utils/getPlayListInfo.js";
import SongCard from "./SongCard";
import { ThreeCircles } from "react-loader-spinner";
import PlayListBlock from "./PlayListBlock.jsx";
import { useTranslations } from "next-intl";

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
    e.preventDefault();
    setError(null);
    setLoading(true); // Set loading to true initially

    try {
      setSongInfo("");
      setPlayListInfo("");

      if (
        inputValue.startsWith("https://open.spotify.com/playlist/") ||
        inputValue.startsWith("https://open.spotify.com/album/") ||
        inputValue.startsWith("https://open.spotify.com/artist/")
      ) {
        let playListInfo = null;

        if (inputValue.startsWith("https://open.spotify.com/playlist/")) {
          playListInfo = await getPlayListInfo(inputValue, "playlist");
        } else if (inputValue.startsWith("https://open.spotify.com/album/")) {
          playListInfo = await getPlayListInfo(inputValue, "album");
        } else if (inputValue.startsWith("https://open.spotify.com/artist/")) {
          playListInfo = await getPlayListInfo(inputValue, "artist");
        }

        setPlayListInfo(playListInfo);
        scrollToSong();
      } else if (inputValue.startsWith("https://open.spotify.com/track/")) {
        const songInfo = await getSongInfo(inputValue);
        setDuration(songInfo.tracks[0].duration);
        setSongInfo(songInfo.preview);
        scrollToSong();
      } else {
        setError(
          "Invalid Spotify URL. Please enter a valid URL and try again."
        );
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };
  const resetState = () => {
    setSongInfo(null);
    setPlayListInfo(null);
    setInputValue(null);
    setInputValue("");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="  ">
      <div className="flex flex-col justify-center content-center w-screen mt-10 mb-6">
        <div className=" flex flex-col mx-auto  justify-center content-center">
          <div className="flex flex-col md:flex-row  mx-auto  w-[85vw]  md:w-[60vw] lg:w-[40vw] xl:w-[38vw]  ">
            <input
              className={`bg-background  text-text border-4 border-solid border-primary  text-base outline-none focus:border-accent/60 transition-all  p-4 w-full rounded-md placeholder:font-medium placeholder:text-text/70 `}
              type="text"
              placeholder={t("pholder")}
              title="Paste Spotify Song or Playlist Link Here!"
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
                style={{ color: "#040409" }}
                className="!bg-primary w-full relative mt-4 md:mt-0 hover:scale-105 md:ml-2 transition-all text-lg !text-text font-semibold px-4 py-2  rounded-md"
              >
                {t("download")}
              </button>
            </div>
          </div>
          <div className="flex mx-6  md:mx-4 mt-2">
            <p className="text-text  ">
              By using our service you accept our{" "}
              <Link className="text-text/70 underline" href={"/tos"}>
                Terms of Service
              </Link>{" "}
              &{" "}
              <Link className="text-text/70 underline" href={"/privacy-policy"}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="text-center">
          {error && (
            <p className=" mx-10 mt-2 font-semibold text-base text-[red] ">
              {t("error")}
            </p>
          )}
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
                download={t("download")}
                downloadMore={t("downloadMore")}
                downloading={t("downloading")}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {playListInfo ? (
          <div className="flex flex-col justify-center content-center  mt-4 md:mx-10 mx-4 lg:mx-0">
            <div className="flex content-center mx-auto justify-between">
              <PlayListBlock
                resetState={resetState}
                playlist={playListInfo}
                download={t("download")}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBox;
