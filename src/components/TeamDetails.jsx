import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataPlayersTeam } from '../hooks';

export const TeamDetails = () => {
  const { teamId } = useParams();
  const players = useDataPlayersTeam(teamId);
  console.log(players)

  return (
    <div className="container mt-4">
        <h5><b>Jugador - Todos los splits</b></h5>
      <div className="table-responsive rounded">
        <table className="table  table-hover">
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
            {players.map((playerStats) => (
              <tr key={playerStats.id}>
                <td>{`${playerStats.firstname} ${playerStats.lastname}`}</td>
                <td>{`${playerStats.height.feets}'${playerStats.height.inches}" (${playerStats.height.meters}m)`}</td>
                <td>{`${playerStats.weight.pounds} lbs (${playerStats.weight.kilograms} kg)`}</td>
                <td>{playerStats.birth.date}</td>
                <td>{playerStats.birth.country}</td>
                <td>{playerStats.college}</td>
                <td>{playerStats.leagues.standard.pos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamDetails;
