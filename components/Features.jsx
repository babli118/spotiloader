import React from "react";
import FeaturesCard from "../containers/featuresCard.jsx";

const Features = () => {
  return (
    <section
      id="features"
      className="text-white text-start mx-auto flex flex-col items-center justify-center w-[80vw] md:w-[60vw]  "
    >
      <h3 className="text-4xl font-semibold text-[#1ED760]">
        Top features of the SpotifyLoader
      </h3>
      <div className="grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-20 gap-y-6 sm:gap-y-10 text-white mt-14 mx-10 sm:mx-auto">
        <FeaturesCard
          heading={"QUICK AND EASY CONVERSION:"}
          text={`With a simple one-click conversion, you can get your favorite
              song to any audio format in no time at all.`}
        />
        <FeaturesCard
          heading={"FAST FREE AND EASY TO USE"}
          text={`We support all device platforms. Download spotify songs regardless of whether you are using Windows, Mac or
              Linux, Android, iPhone.`}
        />
        <FeaturesCard
          heading={"UNINTERRUPTED LISTENING:"}
          text={`Our powerful ad-block feature allows you to enjoy your music free from
          those pesky and annoying Spotify ads!`}
        />
        <FeaturesCard
          heading={"WITHOUT LIMITATION"}
          text={`Download as many spotify tracks as you want without limitation and always free.`}
        />
        <FeaturesCard
          heading={"100% SAFE AND CLEAN"}
          text={`With the rising awareness of device security, people attach great importance to personal data. The service is totally clean with no virus under intense supervision based on security database.`}
        />
        <FeaturesCard
          heading={"ALL PLATFORMS SUPPORTED"}
          text={`We support all device platforms. Easy to download Spotify songs regardless of whether you are using Windows, Mac or Linux, Android, iPhone.`}
        />
      </div>
      <div className="text-base mt-16">
        So if you want an easy way to download songs, albums, and playlists from
        the popular streaming service, look no further than our Spotify
        Downloader! Its fast and simple conversion process, ad-free listening,
        and high-quality output make it the perfect solution for all your music
        needs. Give it a try today!
      </div>
    </section>
  );
};

export default Features;
