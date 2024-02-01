import React, { useState, useEffect } from "react";
import SongCard from "./SongCard";
import getDlLink from "../utils/getDlLink.js";
import getSongInfo from "../utils/getSongInfo.js";
import PlayListSongCard from "./PlayListSongCard.jsx";

const PlayListBlock = ({ playlist, resetState }) => {
  const [duration, setDuration] = useState(null);
  const [songInfo, setSongInfo] = useState(null);
  const [downloadMode, setDownloadMode] = useState(null);

  const allTracks = playlist.tracks;
  const filteredTracks = allTracks.filter((track) => track.name.length > 0);
  const tracks = filteredTracks;

  useEffect(() => {
    console.log(songInfo);
  }, [songInfo]);

  const fetchdlLink = async (track, index, e) => {
    try {
      const uri = track.uri;
      const parts = uri.split(":");
      const id = parts[parts.length - 1];
      console.log(id);

      const fetchedSongInfo = await getSongInfo(id);
      setDuration(fetchedSongInfo.tracks[0].duration);
      setSongInfo(fetchedSongInfo.preview);
      setDownloadMode(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error fetching song info:", error);
      // Handle errors here
    }
  };

  return (
    <div>
      {downloadMode ? (
        <PlayListSongCard
          duration={duration}
          song={songInfo}
          resetState={resetState}
          setDownloadMode={setDownloadMode}
        />
      ) : (
        <div>
          <div className="flex justify-center items-center ">
            <SongCard
              song={playlist.preview}
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
                      onClick={async () => {
                        await fetchdlLink(track);
                      }}
                      className="text-black font-bold text-base sm:w-[130px]  focus:bg-[#3e8f5a] hover:bg-[#3e8f5a] my-4 transition-all bg-[#1ED760] py-2 px-4 rounded-full"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayListBlock;
