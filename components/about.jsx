import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex  flex-col items-center justify-center text-start w-[80vw] md:w-[60vw] mb-10"
    >
      <h3 className="text-4xl text-start font-semibold text-[#1ED760] my-6">
        Benefits of using the Spotify Downloader Online
      </h3>{" "}
      <div className="text-white text-base ">
        <div>
          <h3 className="mb-2 text-lg">
            There are many benefits to using Spotify Downloader online.
          </h3>
          <p>
            <span className="text-[#1ED760] font-semibold text-lg">1{")"}</span>
            To start with, it&apos;s completely free and easy to use. No
            technical knowledge or special software is required!
          </p>
        </div>{" "}
        <p>
          <span className="text-[#1ED760] font-semibold text-lg">2{")"}</span>
          In addition, our advanced settings allow you to customize your music
          in a number of different ways so that you can download your music at
          the highest quality possible.
        </p>{" "}
        <p>
          <span className="text-[#1ED760] font-semibold text-lg">3{")"}</span>
          And finally, our fast and reliable service means you never have to
          worry about waiting around for your songs - they&apos;ll be ready and
          waiting for you the second you need them!
        </p>{" "}
        <p>
          <span className="text-[#1ED760] font-semibold text-lg">4{")"}</span>
          So if you&apos;re an avid music fan who wants a simple way to easily
          download all their favorite tracks from one of the most popular
          streaming platforms, look no further than our Spotify Downloader
          online!
        </p>{" "}
        <p className="text-base mt-8">
          So why wait? Try it out today and discover the world of music
          downloading for yourself! And don&apos;t forget to tell your friends
          about all the amazing benefits of using our tool - we&apos;re sure
          they&apos;ll thank you for it!
        </p>
      </div>
    </section>
  );
};

export default About;
