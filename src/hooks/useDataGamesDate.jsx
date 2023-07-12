import { useEffect } from "react";

export const useDataGamesDate = (date) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v2.nba.api-sports.io/games?date=${date}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v2.nba.API-SPORTS.io",
              "x-rapidapi-key": "3dd1898a14c9cdb4d413d049f76ced4a",
            },
          }
        );
        const jsonData = await response.json();
        console.log(jsonData.response); // Muestra los datos en la consola
        // Aquí puedes hacer cualquier otra manipulación de los datos si es necesario
      } catch (error) {
        console.log("La solicitud no fue válida: " + error);
      }
    };

    fetchData();
  }, [date]);
};
