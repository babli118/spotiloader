const getPlayListInfo = async (inputValue) => {
  const parts = inputValue.split("/");
  const trackId = parts[parts.length - 1];
  const id = trackId.split("?")[0];

  const options = {
    method: "POST",
  };
  const url = `${process.env.NEXT_PUBLIC_API_SERVER_URl}/playListInfo?id=${id}`;
  const playListFetch = await fetch(url, options);
  const playListInfo = await playListFetch.json();

  return playListInfo;
};

export default getPlayListInfo;
