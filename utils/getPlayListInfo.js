const getPlayListInfo = async (inputValue) => {
  const parts = inputValue.split("/");
  const trackId = parts[parts.length - 1];
  const id = trackId.split("?")[0];

  const options = {
    method: "POST",
  };

  const url = `http://localhost:3001/playListInfo?id=${id}`;
  console.log(url);
  const playListFetch = await fetch(url, options);
  const playListInfo = await playListFetch.json();

  return playListInfo;
};

export default getPlayListInfo;
