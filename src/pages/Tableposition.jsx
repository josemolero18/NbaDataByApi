import React from 'react'
import { useDataStanding } from '../hooks/';

export const Tableposition = () => {


  const data = useDataStanding('Western Conference');
  const dataGood = data[0];
  


  return (
    <div>
      <h1 className="animate__animated animate__bounce">Positions</h1>
      <div className="row">
        <div className="col-12">
        <h2>Western Conference</h2>
          <table className="table table-light table-striped-columns">
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
            {dataGood.map((equipo) => (
              <tr key={equipo.position}>
                <td>{equipo.position}</td>
                <td>{equipo.team.name}</td>
                <td>{equipo.games.win.total}</td>
                <td>{equipo.games.lose.total}</td>
                <td>{equipo.games.win.total}-{equipo.games.lose.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
