import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useDataStanding from '../hooks/useDataStanding';
import { useDataTeamsById } from '../hooks/useDataTeamsById';
import { useDataTeamsStandings } from '../hooks/useDataTeamsStandings';

export const TeamNameCard = ({teamId}) => {


  const [filteredTeams, setfilteredTeams] = useState([]);

  const team = useDataTeamsById(teamId);
  const stats = useDataTeamsStandings(teamId);
  console.log(stats);

  const East =  useDataStanding('East');
  const West =  useDataStanding('West');

  const allteams = East.concat(West);

  const filteredbyId = allteams.filter((team)=> team.team.id == teamId);

  

  // const filteredposition = allteams.filter(team = team.id === teamId);

  console.log(filteredbyId[0]);



  return (
    <div className="row mt-3 container-fluid">
      {team.length === 0 && filteredbyId.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div className="col-12">
          {filteredbyId.length > 0 && (
            <div className="card mb-3">
              <div className="d-flex g-0">
                <img
                  src={team[0].logo}
                  className="img-fluid rounded-start ms-1 p-2"
                  style={{ display: "block", width: "70px" }}
                  alt={team[0].name + " Logo"}
                />
                <div className="card-body p-1">
                  <h4 className="card-title d-flex align-items-start p-0">
                    {team[0].name}
                  </h4>

                  {/* Verificar si existe la propiedad 'conference' */}
                  {filteredbyId[0].conference && (
                    <div className="d-flex">
                      <p className='custom-font'>
                      {filteredbyId[0].conference.win}-{" "}
                      {filteredbyId[0].conference.loss} 
                    </p>
                      <p className='ms-3 custom-font'>{filteredbyId[0].conference.rank}° en La Division {filteredbyId[0].division.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default TeamNameCard;