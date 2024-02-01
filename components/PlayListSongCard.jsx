import React, { useState } from "react";
import Image from "next/image";
import getDlLink from "../utils/getDlLink.js";
import { useRouter } from "next/navigation";
import axios from "axios";

const PlayListSongCard = ({
  song,
  name,
  duration,
  resetState,
  setDownloadMode,
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // State to track download progress
  const [downloadstatus, setdownloadstatus] = useState(false); // State to track download progress
  const [downloadbtn, setdownloadbtn] = useState(true); // State to track download progress
  const router = useRouter();

  const fetchdlLink = async () => {
    setLoading(true);
    setProgress(0); // Reset progress
    setdownloadbtn(false);

    try {
      setProgress(1); // Reset progress

      await delay(1000); // Simulate delay
      setProgress(3); // Reset progress
      await delay(1000); // Simulate delay
      setProgress(6); // Reset progress
      // Simulate initial delay
      await delay(1000); // Simulate delay
      setProgress(10); // Reset progress
      await delay(500); // Simulate delay

      const name = song.track + "SongAuthor" + song.artist;
      setProgress(20); // Reset progress
      await delay(3000); // Simulate delay
      const dlLinkInfo = await getDlLink(name, duration);
      setProgress(30); // Reset progress
      await delay(1000); // Simulate delay

      const dlLink = dlLinkInfo.dlLink.url;
      setProgress(40); // Reset progress
      await delay(500); // Simulate delay
      setProgress(41); // Reset progress
      await delay(500); // Simulate delay
      setProgress(43); // Reset progress
      await delay(500); // Simulate delay
      setProgress(45); // Reset progress
      await delay(500); // Simulate delay
      setProgress(47); // Reset progress
      await delay(500); // Simulate delay
      setProgress(48); // Reset progress
      await delay(500); // Simulate delay
      const title = song.track;
      setProgress(50); // Reset progress
      await delay(1000); // Simulate delay
      const imageUrl = song.image;
      const songUrl = dlLink;
      setProgress(60); // Reset progress
      await delay(500); // Simulate delay
      const artist = song.artist;
      const album = song.title;
      setProgress(70); // Reset progress
      await delay(1000); // Simulate delay

      // Simulate processing delay
      setProgress(80); // Reset progress
      await delay(500); // Simulate delay
      setProgress(81); // Reset progress
      await delay(500); // Simulate delay
      setProgress(82); // Reset progress
      await delay(500); // Simulate delay
      setProgress(83); // Reset progress
      await delay(500); // Simulate delay
      setProgress(84); // Reset progress
      await delay(500); // Simulate delay
      setProgress(85); // Reset progress
      await delay(500); // Simulate delay
      setProgress(86); // Reset progress
      await delay(500); // Simulate delay
      setProgress(87); // Reset progress
      await delay(500); // Simulate delay

      setProgress(90); // Reset progress
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/embed-metadata",
        data: {
          mp3Url: songUrl,
          title: title,
          artist: artist,
          album: album,
          coverImageUrl: imageUrl,
        },
        responseType: "blob",
      });
      setProgress(95); // Reset progress
      await delay(500); // Simulate delay

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      setProgress(98); // Reset progress
      await delay(500); // Simulate delay
      link.href = url;
      link.setAttribute("download", `spotifyloader.com - ${title}.mp3`);
      setProgress(100); // Reset progress
      await delay(500); // Simulate delay
      document.body.appendChild(link);
      link.click();

      setLoading(false);
      setdownloadstatus(true);
      setProgress(0); // Reset progress
    } catch (error) {
      console.error("Error:", error.message);
      setError("Failed to embed metadata.");
      setLoading(false);
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#121212] text-white pt-4 py-2 px-4 rounded-md flex flex-col justify-center">
        <div className="flex justify-center items-center w-[60vw] sm:w-[40vw] md:w-[20vw] lg:w-[15vw] mx-auto">
          <Image
            className="rounded-md"
            src={song.image}
            width={300}
            height={200}
            alt="song cover image"
          />
        </div>
        <h3 className="text-xl font-bold mt-4">{song.title}</h3>
        <h3 className="text-md mt">{name ? name : song.artist}</h3>
      </div>

      {loading && (
        <div className="  ">
          <div className=" sm:w-[500px] h-6 text-center bg-[#282828] rounded-full">
            <div
              className="h-full bg-green-500  rounded-lg flex justify-center items-center my-4 transition-all duration-1000 px-6 text-sm font-semibold"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h3 className=" flex p-2 bg-green-500 text-black mt-4 rounded-sm font-semibold text-center">
              Your Song is Downloading, Please wait...
            </h3>
          </div>
        </div>
      )}

      {downloadstatus && (
        <div className="flex flex-row sm:mt-4  sm:flex-col gap-2 mt-2">
          <button
            onClick={() => {
              resetState();
              router.push("/");
            }}
            className="bg-[#1ED760]   sm:w-[300px] hover:bg-[#3e8f5a] sm:text-lg py-2 px-1 text-black  text-center rounded-full text-base font-bold hover:scale-105 transition-all"
          >
            Download more Songs
          </button>
          <button
            onClick={() => {
              setDownloadMode(false);
            }}
            className="bg-[#1ED760]   sm:w-[300px] hover:bg-[#3e8f5a]  sm:text-lg py-2 px-1 text-black  text-center rounded-full text-base font-bold hover:scale-105 transition-all"
          >
            Back to Playlist
          </button>
        </div>
      )}

      {downloadbtn && (
        <button
          onClick={fetchdlLink}
          className="text-black   font-bold text-lg hover:bg-[#3e8f5a] transition-all bg-[#1ED760] w-full p-2 rounded-full mt-4"
        >
          Download
        </button>
      )}
    </div>
  );
};

export default PlayListSongCard;
