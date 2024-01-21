import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="text-white text-start mx-auto flex flex-col items-center justify-center w-[80vw] md:w-[60vw] "
    >
      <h3 className="text-4xl font-semibold text-[#1ED760]">
        Top features of the Spotify Downloader
      </h3>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-40 gap-y-10 text-white mt-10">
        <div className="bg-[#121212] w-[16rem] h-[16rem] rounded-md text-center">
          <div className="px-6 py-4">
            <p className="font-semibold  text-[#1ED760] text-xl uppercase ">
              Quick and easy conversion:
            </p>{" "}
            <p className="mt-4">
              With a simple one-click conversion, you can get all your favorite
              songs to any audio format in no time at all.
            </p>{" "}
          </div>
        </div>
        <div className="bg-[#121212] w-[16rem] h-[16rem] rounded-md text-center">
          <div className="px-6 py-4">
            <p className="font-semibold  text-[#1ED760] text-xl uppercase ">
              FAST FREE AND EASY TO USE
            </p>{" "}
            <p className="mt-4">
              We support all device platforms. Easy to convert YouTube videos to
              MP3 files regardless of whether you are using Windows, Mac or
              Linux, Android, iPhone.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="text-base mt-4">
        <p className="font-semibold  text-[#1ED760]">
          Uninterrupted listening:
        </p>{" "}
        <p>
          Our powerful ad-block feature allows you to enjoy your music free from
          those pesky and annoying Spotify ads!
        </p>
        <p className="font-semibold  text-[#1ED760]">High-quality music:</p>{" "}
        <p>
          The great thing about our tool is that it keeps the original quality
          of your music intact, so you get an amazing listening experience every
          time.
        </p>{" "}
        <p className="font-semibold  text-[#1ED760]">
          Advanced settings support:
        </p>{" "}
        <p>
          If you want to get more out of your music, our Spotify Downloader also
          supports a variety of advanced audio settings, such as FLAC to MP3 and
          WAV to MP3.
        </p>{" "}
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
