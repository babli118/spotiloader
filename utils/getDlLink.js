const getDlLink = async (name) => {
  const options = {
    method: "POST",
  };
  const url = `http://localhost:3001/songDl?name=${name}`;
  const songFetch = await fetch(url, options);
  const songInfo = await songFetch.json();
  return songInfo;
};
export default getDlLink;
