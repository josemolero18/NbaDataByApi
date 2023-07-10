import { useEffect, useState } from "react";

export const useDataGames = () => {
    const [data, setData] = useState([]);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const fetchData = async () => {
      try {
        const response = await fetch(
        `https://v1.basketball.api-sports.io/games?date=2023-04-09&league=12&season=2022-2023`,
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
}
