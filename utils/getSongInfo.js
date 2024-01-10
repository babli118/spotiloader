const getSongInfo = async (inputValue) => {
  const parts = inputValue.split("/");
  const trackId = parts[parts.length - 1];
  const id = trackId.split("?")[0];

  const options = {
    method: "POST",
  };
  const url = `http://localhost:3001/songInfo?id=${id}`;
  const songFetch = await fetch(url, options);
  const songInfo = await songFetch.json();

  return songInfo;
};

export default getSongInfo;
