import { useEffect, useState } from "react";

export const useDataByAPI = (division) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://v2.nba.api-sports.io/teams/?division=${division}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v2.nba.API-SPORTS.io",
            "x-rapidapi-key": "3dd1898a14c9cdb4d413d049f76ced4a",
          },
        }
      );
      const jsonData = await response.json();
      setData(jsonData.response);
    } catch (error) {
      console.log("La solicitud no fue válida: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};