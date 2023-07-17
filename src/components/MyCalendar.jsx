import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDataGamesDate } from '../hooks';

export const MyCalendar = () => {
  const initialValue = 'Jun 13 2023';
  const [selectedDate, setSelectedDate] = useState(new Date(initialValue));
  const [formatedDate, setFormatedDate] = useState(selectedDate);
  const data = useDataGamesDate(formatedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setFormatedDate(formattedDate);
  }, [selectedDate]);


  return (
    <div>
      <div className="row" style={{ minHeight: "84vh"}}>
        <div className="col-9">
          <div className="container-fluid">
            {data?.map((game) => (
              <div key={game.id}>
                <h5 className="mt-3 mb-2">{selectedDate.toDateString()}</h5>
                <hr />
                <div className="row">
                  <div className="col-9">
                  <table>
                  <thead>
                    <tr>
                      <th>
                        {game.status.long === "Finished" ? (
                          <p>F</p>
                        ) : (
                          game.status.long
                        )}
                      </th>
                      <th></th>
                      <th className="ps-3">1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th className="ps-3">E</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={game.teams.visitors.logo}
                          alt="Logo voisitor"
                          style={{ maxWidth: "40px" }}
                        />
                      </td>
                      <td className="ps-2">
                        <b>{game.teams.visitors.nickname}</b>
                      </td>
                      <td className="ps-3">
                        {game.scores.visitors.linescore[0]}
                      </td>
                      <td>{game.scores.visitors.linescore[1]}</td>
                      <td>{game.scores.visitors.linescore[2]}</td>
                      <td>{game.scores.visitors.linescore[3]}</td>
                      <td className="ps-3">
                        {game.scores.visitors.points >
                        game.scores.home.points ? (
                          <span>
                            {game.scores.visitors.points} <b>*</b>
                          </span>
                        ) : (
                          game.scores.visitors.points
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={game.teams.home.logo}
                          alt="Logo voisitor"
                          style={{ maxWidth: "40px" }}
                        />
                      </td>
                      <td className="ps-2">
                        <b>{game.teams.home.nickname}</b>
                      </td>
                      <td className="ps-3">
                        {game.scores.home.linescore[0]}
                      </td>
                      <td>{game.scores.home.linescore[1]}</td>
                      <td>{game.scores.home.linescore[2]}</td>
                      <td>{game.scores.home.linescore[3]}</td>
                      <td className="ps-3">
                        {game.scores.home.points >
                        game.scores.visitors.points ? (
                          <span>
                            {game.scores.home.points} <b>*</b>
                          </span>
                        ) : (
                          game.scores.home.points
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                  <div className="col-3">
                  <h5>{game.arena.name}</h5> 
                    <p>{game.arena.city}, {game.arena.state}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3 text-center">
          <h1 className="mt-3">Calendario Nba</h1>
          <Calendar
            className="rounded bg-light mb-3"
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};
export default MyCalendar;