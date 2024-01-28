const getSongInfo = async (inputValue) => {
  try {
    const parts = inputValue.split("/");
    const trackId = parts[parts.length - 1];
    const id = trackId.split("?")[0];

    const options = {
      method: "POST",
    };
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URl}/songInfo?id=${id}`;
    const songFetch = await fetch(url, options);
    const songInfo = await songFetch.json();

    return songInfo;
  } catch (error) {
    console.log(error);
  }
};

export default getSongInfo;
