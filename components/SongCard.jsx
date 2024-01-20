import React from "react";
import Image from "next/image";
import getDlLink from "../utils/getDlLink.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CountdownTimer from "./countDown";

const SongCard = ({ song }) => {
  const [loading, setLoading] = useState(false);
  const [otherDl, setotherDl] = useState(false);
  const [timer, setTimer] = useState(10);

  const router = useRouter();

  const fetchdlLink = async () => {
    setTimer(10);
    setLoading(false);
    setLoading(true);

    const name = song.title + song.artist;
    const dlLinkInfo = await getDlLink(name);

    const dlLink = dlLinkInfo.dlLink.url;
    setTimer(0);

    router.push(dlLink);
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-[#121212] text-white pt-4 py-2 px-4 rounded-md flex flex-col justify-center ">
        <div className="flex justify-center items-center w-[60vw] sm:w-[40vw] md:w-[20vw] lg:w-[15vw] mx-auto  ">
          <Image
            className="rounded-md"
            src={song.image}
            width={300}
            height={200}
            alt="song cover image"
          />
        </div>
        <h3 className="text-xl font-bold mt-4">{song.title}</h3>
        <h3 className="text-md mt">{song.artist}</h3>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center items-center    ">
          <h3 className="bg-[#1ED760] flex p-2 text-black mt-4 text-center rounded-sm ">
            Your download will start in&nbsp;
            <CountdownTimer />
          </h3>
          {timer === 0 ? (
            <button
              onClick={() => {
                router.push("/");
              }}
              className="bg-[#1ED760] flex p-2 text-black mt-4 text-center rounded-sm text-lg font-semibold hover:scale-100   transition-all"
            >
              Download more Songs
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <button
          onClick={fetchdlLink}
          className="text-black font-bold text-lg hover:bg-[#3e8f5a] transition-all bg-[#1ED760] w-full p-2 rounded-full mt-4"
        >
          Download
        </button>
      )}
    </div>
  );
};

export default SongCard;
