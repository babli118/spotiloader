const getSongInfo = async (inputValue, id) => {
  try {
    let trackId;

    // Check if 'id' is provided directly
    if (id) {
      trackId = id;
    } else {
      // Extract track ID from 'inputValue'
      const parts = inputValue.split("/");
      const trackIdWithQuery = parts[parts.length - 1];
      trackId = trackIdWithQuery.split("?")[0];
    }

    const options = {
      method: "POST",
    };
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URl}/songInfo?id=${trackId}`;
    const songFetch = await fetch(url, options);
    const songInfo = await songFetch.json();

    return songInfo;
  } catch (error) {
    console.log(error);
  }
};

export default getSongInfo;
