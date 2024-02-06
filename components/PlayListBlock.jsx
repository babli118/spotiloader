import React, { useState, useEffect } from "react";
import SongCard from "./SongCard";
import getDlLink from "../utils/getDlLink.js";
import { useRouter } from "next/navigation";
const PlayListBlock = ({ playlist, resetState }) => {
  const [songInfo, setSongInfo] = useState(null);
  const allTracks = playlist.tracks;
  const filteredTracks = allTracks.filter((track) => track.name.length > 0);
  const tracks = filteredTracks;
  const router = useRouter();
  const [downloadStatus, setDownloadStatus] = useState(
    Array(tracks.length).fill("Download")
  );

  useEffect(() => {
    console.log("");
  }, [songInfo]);

  const fetchdlLink = async (track, index, e) => {
    const name = track.name + "SongAuthor" + track.artist;
    const duration = track.duration;

    // Set download status to 'Downloading' for the specific track
    setDownloadStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = "Downloading..";
      return newStatus;
    });

    const dlLinkInfo = await getDlLink(name, duration);
    const dlLink = dlLinkInfo.dlLink.url;

    setDownloadStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = "Download";
      return newStatus;
    });
    // Redirect to the download link
    router.push(dlLink);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center ">
        <SongCard
          songInfo={playlist.preview}
          name={playlist.preview.description}
        />
      </div>
      <div className="text-white pt-4">
        {tracks.map((track, index) => (
          <div key={index}>
            <div className="bg-[#121212] my-4 flex items-center justify-between px-4 rounded-md">
              <div className="flex justify-center items-center  ">
                <div className=" flex">
                  <div className="pr-4 text-lg flex ">
                    <p>{index + 1}</p> <span>.</span>{" "}
                  </div>
                </div>
                <div className="flex flex-col justify-center py-4  ">
                  <p className="md:text-lg text-lg text-[#1ED760] mr-2">
                    {track.name}
                  </p>
                  <p className="text-sm pr-4">{track.artist}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  id={index}
                  onClick={(e) => {
                    fetchdlLink(track, index);
                  }}
                  className="text-black flex items-center justify-center font-bold text-base sm:w-[130px] disabled:bg-[#3e8f5a] focus:bg-[#3e8f5a] hover:bg-[#3e8f5a] my-4 transition-all bg-[#1ED760] py-2 px-4 rounded-full"
                  style={{ width: "120px" }} // Set a fixed width for the button
                  disabled={downloadStatus[index] === "Downloading..."}
                >
                  {downloadStatus[index]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayListBlock;
