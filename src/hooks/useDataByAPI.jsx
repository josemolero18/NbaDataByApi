import { useEffect, useState } from "react";

export const useDataByAPI = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://v1.basketball.api-sports.io/teams?league=12&season=2022-2023",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v1.basketball.api-sports.io",
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