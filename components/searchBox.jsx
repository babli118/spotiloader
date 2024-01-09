"use client";
import React, { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsClicked(true);
  };

  const handleInputPaste = (e) => {
    const pastedContent = e.clipboardData.getData("text");
    setInputValue(pastedContent);
  };
  const handleSearchClick = () => {
    // Check if the input value matches the expected syntax
    const isValidSyntax = inputValue.startsWith(
      "https://open.spotify.com/track/"
    );
    setError(isValidSyntax ? "" : "Please enter a valid Spotify track url");
  };
  return (
    <div className="flex flex-col justify-center content-center w-screen mt-10">
      <div className="flex justify-center content-center">
        <div>
          <input
            className={`  bg-[#121212] text-white p-4 rounded-md transition-all duration-300 ease-in-out  w-[15rem] sm:w-[35rem] md:w-[50rem] lg ${
              isClicked ? "w-[55rem]" : ""
            }`}
            type="text"
            placeholder="https://open.spotify.com/..../...."
            required
            autoComplete="off"
            onClick={handleInputChange}
            onPaste={handleInputPaste}
            onChange={handleInputValue}
          />
        </div>
        <button
          onClick={handleSearchClick}
          className="bg-[#1ED760] text-lg text-black font-bold px-4  mx-2 rounded-md"
        >
          Search
        </button>
      </div>
      <div>{error && <p className="text-red-500">{error}</p>}</div>
    </div>
  );
};

export default SearchBox;
