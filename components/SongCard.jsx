import React, { useState } from "react";
import Image from "next/image";
import getDlLink from "../utils/getDlLink.js";
import { useRouter } from "next/navigation";
import { HiDownload } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
const SongCard = ({ songInfo, name, duration, resetState, pl }) => {
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState(songInfo);

  const [downloadstatus, setdownloadstatus] = useState(false); // State to track download progress
  const [downloadbtn, setdownloadbtn] = useState(true); // State to track download progress
  const router = useRouter();

  const fetchdlLink = async () => {
    setLoading(true);

    setdownloadbtn(false);

    try {
      const name = song.track + "SongAuthor" + song.artist;
      const dlLinkInfo = await getDlLink(name, duration);
      const dlLink = dlLinkInfo.dlLink.url;

      router.push(dlLink);
      setdownloadstatus(true);
    } catch (error) {
      setLoading(false);
    }
  };

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
          <div className="flex items-center justify-center">
            <h3 className=" flex p-2  bg-[#121212] text-white mt-4 rounded-sm font-base text-center ">
              Your Song is Now Downloading ...
            </h3>
          </div>
        </div>
      )}

      {downloadstatus && (
        <button
          onClick={() => {
            resetState();
            router.push("/");
          }}
          className="bg-[#1ED760] flex p-2 justify-center items-center gap-1 text-black mt-2 text-center rounded-sm text-lg font-semibold hover:scale-105 transition-all"
        >
          <div className="text-xl">
            <IoMdArrowRoundBack />
          </div>{" "}
          Download more Songs
        </button>
      )}

      {downloadbtn && pl === false ? (
        <button
          onClick={fetchdlLink}
          className="text-black font-bold text-lg hover:bg-[#3e8f5a] transition-all bg-[#1ED760] w-full p-2 rounded-full mt-4 flex justify-center items-center gap-1"
        >
          <HiDownload />
          <p>Download</p>
        </button>
      ) : null}
    </div>
  );
};

export default SongCard;
