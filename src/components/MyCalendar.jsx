import React, { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDataGamesDate } from '../hooks/useDataGamesDate';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date('2023-06-14'));
  const [dateyymmdd, setDateyymmdd] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const Dateyymmdd = new Date(
      "Tue Jun 13 2023 00:00:00 GMT-0400 (hora estándar de Chile)"
    );
    const year = Dateyymmdd.getFullYear();
    const month = String(Dateyymmdd.getMonth() + 1).padStart(2, "0");
    const day = String(Dateyymmdd.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setDateyymmdd(formattedDate);
  };



  useEffect(() => {
    

  }, [])
  

  return (
    <div>
      <div className="row">
        <div className="col-9">
          <h2 className='mt-3'>Datos para {selectedDate.toDateString()}</h2>
          {/* Aquí puedes mostrar los datos correspondientes a la fecha seleccionada */}
        </div>
        <div className="col-3 text-center">
          <h1 className="mt-3">Calendario Nba</h1>
          <Calendar className="rounded bg-light mb-3" onChange={handleDateChange} value={selectedDate} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyCalendar;
