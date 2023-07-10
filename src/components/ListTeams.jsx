import React, { useEffect, useState } from "react";
import spinnerSvg from "../assets/Dual Ring-1s-200px.svg";

export const ListTeams = ({ game }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga con un retardo de 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Limpiar el temporizador si el componente se desmonta antes de que se complete
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    ); // Mostrar un mensaje de carga mientras isLoading es verdadero
  }

  return (
    <div>
      <ul className="list-group list-group-flush animate__animated animate__backInUp ">
        <li className="list-group-item list-group-item-light">
          <div className="d-flex align-items-center">
            <img
              src={game.logo}
              className="rounded-start mx-2"
              alt="Team Logo"
              style={{ maxWidth: "50px", height: "auto" }}
            />
            <div>
              <h5 className="mb-0 ms-1">{game.name}</h5>
              <small className="mt-0">
                <p className="m-0">
                  <strong>City:</strong> {game.city} |{" "}
                  <strong>Nickname:</strong> {game.nickname} |{" "}
                  <strong>Conference:</strong>{" "}
                  {game.leagues.standard.conference} |{" "}
                  <strong>Division:</strong> {game.leagues.standard.division}
                </p>
              </small>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListTeams;
