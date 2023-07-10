import { useEffect, useState } from "react";

export const UseYoutubeData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBCEqH7a63-1vpfbtzqSW2LK07G-f1c-j8&part=snippet,contentDetails,statistics,status";
      const resp = await fetch(url);
      const respJson = await resp.json();
      setData(respJson);
    } catch (error) {
      console.log("No se pudo cargar" + error);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, [data]);

  return <div>useYoutubeData</div>;
};
