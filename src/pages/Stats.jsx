import { useEffect, useState } from "react";
import { useDataStanding } from "../hooks/";

export const Stats = () => {

  const East =  useDataStanding('East');
  const West =  useDataStanding('West');


  // if(West[14].team.logo = null){
  //   West[14].team.logo = "https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20185710.png"
  // };
  
  const [tableEast, settableEast] = useState([]);
  const [tableWest, settableWest] = useState([]);

 

  useEffect(() => {
    settableEast(East.sort((a,b) => a.conference.rank - b.conference.rank))
    settableWest(West.sort((a,b) => a.conference.rank - b.conference.rank))
  }, [East, West])
  

  return (
    <div>
      <h1 className="animate__animated animate__slideInDown">Positions</h1>
      <div className="row">
        <div className="col-5 me-5">
          <h2>Western Conference</h2>
          <table className="table table-hover animate__animated animate__bounceInLeft">
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nombre</th>
                <th>Win</th>
                <th>Lose</th>
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              {tableEast.map((equipo) => (
                <tr key={equipo.team.id}>
                  <td>{equipo.conference.rank}</td>
                  <td>
                    <img
                      src={equipo.team.logo}
                      className="rounded-start mx-2"
                      alt="Team Logo"
                      style={{ maxWidth: "20px", height: "auto" }}
                    />
                    {equipo.team.name}
                  </td>
                  <td>{equipo.division.win}</td>
                  <td>{equipo.division.loss}</td>
                  <td>
                    {equipo.division.win}-{equipo.division.loss}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-5">
          <h2 className="ms-5">Eastern Conference</h2>
          <table className="table table-hover animate__animated animate__bounceInRight ms-4">
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nombre</th>
                <th>Win</th>
                <th>Lose</th>
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              {tableWest.map((equipo) => (
                <tr key={equipo.team.id}>
                  <td>{equipo.conference.rank}</td>
                  <td><img
                      src={equipo.team.logo}
                      className="rounded-start mx-2"
                      alt="Team Logo"
                      style={{ maxWidth: "28.2px", height: "auto" }}
                    />
                    {equipo.team.name}</td>
                  <td>{equipo.division.win}</td>
                  <td>{equipo.division.loss}</td>
                  <td>
                    {equipo.division.win}-{equipo.division.loss}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};