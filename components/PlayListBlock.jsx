import React, { useState, useEffect } from "react";
import SongCard from "./SongCard";
import getDlLink from "../utils/getDlLink.js";
import { useRouter } from "next/navigation";
import { MdOutlineFileDownload } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

const PlayListBlock = ({ playlist, resetState, download }) => {
  const [songInfo, setSongInfo] = useState(null);
  const allTracks = playlist.tracks;
  const filteredTracks = allTracks.filter((track) => track.name.length > 0);
  const tracks = filteredTracks;
  const router = useRouter();
  const [downloadStatus, setDownloadStatus] = useState(
    Array(tracks.length).fill(false)
  );

  useEffect(() => {}, [songInfo]);

  const fetchdlLink = async (track, index, e) => {
    const name = track.name + "SongAuthor" + track.artist;
    const duration = track.duration;

    // Set download status to 'Downloading' for the specific track
    setDownloadStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = true;
      return newStatus;
    });

    const dlLinkInfo = await getDlLink(name, duration);
    const dlLink = dlLinkInfo.dlLink.url;

    // Reset download status to false when download is complete
    setDownloadStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = false;
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
      <div className="text-text pt-4">
        {tracks.map((track, index) => (
          <div key={index}>
            <div className="bg-primary/20 my-4 flex items-center justify-between  px-4 rounded-md   w-[85vw] md:w-[80vw] xl:w-[43vw]">
              <div className="flex justify-center items-center  ">
                <div className=" flex">
                  <div className="pr-4 text-lg flex ">
                    <p>{index + 1}</p> <span>.</span>{" "}
                  </div>
                </div>
                <div className="flex flex-col justify-center py-4   ">
                  <p className="text-lg text-text font-semibold mr-2">
                    {track.name}
                  </p>
                  <p className="text-sm pr-4">{track.artist}</p>
                </div>
              </div>
              <div
                onClick={(e) => {
                  fetchdlLink(track, index);
                }}
                disabled={downloadStatus[index]} // Here, we directly use the disabled attribute
                className="flex flex-col items-center justify-center cursor-pointer w-[120px]   hover:bg-[#3e8f5a]  disabled:bg-[#3e8f5a] transition-all bg-primary rounded-md   "
              >
                <button
                  disabled={downloadStatus[index]} // Here, we directly use the disabled attribute
                  id={index}
                  className="flex items-center justify-center text-grey font-bold  text-black text-4xl  ml-2 transition-all py-2 px-4  "
                >
                  {downloadStatus[index] ? (
                    <TailSpin
                      visible={true}
                      height="24"
                      width="20"
                      color="#000000"
                      ariaLabel="three-circles-loading"
                    />
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <p className="sm:text-base text-sm">{download}</p>
                    </div>
                  )}
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
