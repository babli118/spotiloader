import axios from "axios";
const EmbedMetaData = async () => {
  const response = await axios.post(
    `${NEXT_PUBLIC_API_SERVER_URl}/embed-metadata`,
    {
      mp3Url:
        "https://file-examples.com/storage/fed61549c865b2b5c9768b5/2017/11/file_example_MP3_700KB.mp3",
      title: "New Title",
      artist: "New Artist",
      album: "New Album",
      coverImageUrl:
        "https://fastly.picsum.photos/id/427/200/300.jpg?hmac=3a8xqsGEgfpWKYUhKjkcHRNP0NcEsi0Oyvw5gT6Kpc8",
    },
    { responseType: "blob" }
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "modified_song.mp3");
  document.body.appendChild(link);
  link.click();
};

export default EmbedMetaData;
