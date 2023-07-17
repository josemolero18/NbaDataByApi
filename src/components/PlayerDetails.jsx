import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataPlayersTeam } from '../hooks';
import TeamNameCard from './TeamNameCard';
import '../assets/styles.css'; 

export const PlayerDetails = () => {
  const { teamId } = useParams();
  const players = useDataPlayersTeam(teamId);
  console.log(players)

  return (
    <div className="container mt-4" style={{minHeight: "82vh" }}>
    <TeamNameCard teamId={teamId} />

    <h5><b>Jugador - Todos los splits</b></h5>

    <div className="row">
      <div className="col-4">

      </div>
      <div className="col-4">

      </div>
      <div className="col-4">

      </div>
    </div>

    <div className="table-responsive rounded">
      <table className="table table-hover table-sm table-striped"> {/* Agrega las clases table-sm y table-striped */}
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Fecha de Nacimiento</th>
            <th>País de Nacimiento</th>
            <th>Universidad</th>
            <th>Posición</th>
          </tr>
        </thead>
        <tbody>
          {players.map((playerStats) =>{
  // Comprobamos si las propiedades feets o inches son null
  const isValidHeight = playerStats.height.feets !== null && playerStats.height.inches !== null;

  // Si la altura es válida, mostramos la fila en la tabla
  if (isValidHeight) {
    return (
      <tr key={playerStats.id}>
        <td className="custom-font text-primary">{`${playerStats.firstname} ${playerStats.lastname}`}</td>
        <td className='custom-font'>{`${playerStats.height.feets}'${playerStats.height.inches}" (${playerStats.height.meters}m)`}</td>
        <td className='custom-font'>{`${playerStats.weight.pounds} lbs (${playerStats.weight.kilograms} kg)`}</td>
        <td className='custom-font'>{playerStats.birth.date}</td>
        <td className='custom-font'>{playerStats.birth.country}</td>
        <td className='custom-font'>{playerStats.college}</td>
        <td className='custom-font'>{playerStats.leagues.standard.pos}</td>
      </tr>
    );
  }

  // Si la altura no es válida, retornamos null para no renderizar la fila
  return null;
})}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default PlayerDetails;
