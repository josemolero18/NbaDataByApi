import React, { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDataGamesDate } from '../hooks/useDataGamesDate';

const MyCalendar = () => {

  //2 hooks para obtener la fecha y la hora
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState("");

  console.log(formatedDate);
  
  const request = useDataGamesDate(formatedDate);

  console.log(request);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setFormatedDate(formattedDate);
  };
  

  useEffect(() => {

  }, [selectedDate]);

  return (
    <div>
      <div className="row">
        <div className="col-9">
          <h2 className="mt-3">Datos para {selectedDate.toDateString()}</h2>
          {/* Aquí puedes mostrar los datos correspondientes a la fecha seleccionada */}
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
      <div></div>
    </div>
  );
};

export default MyCalendar;
