const getDlLink = async (name, duration) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({ duration: duration }),
    };
    const trimmedname = encodeURIComponent(name);

    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URl}/songDl?name=${trimmedname}`;
    const songFetch = await fetch(url, options);
    const songInfo = await songFetch.json();
    return songInfo;
  } catch (error) {
    return (songInfo = error);
  }
};
export default getDlLink;
