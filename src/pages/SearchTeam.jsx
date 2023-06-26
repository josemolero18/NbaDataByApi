import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useDataByAPI } from "../hooks/useDataByAPI";

export const SearchTeam = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const data = useDataByAPI();

  const handleChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);
  };

  const setFilteredTeams = () => {
    const newData = data.filter((team) =>
      team.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilteredTeams();
  };

  useEffect(() => {
    setFilteredTeams();
  }, []);

  return (
    <div className="row">
      <div className="col-6 col-md-6 mt-4 ">
        <form className="d-flex justify-content-center " role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-auto"
            type="search"
            placeholder="Search a Team"
            aria-label="Search"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="submit" onClick={setFilteredTeams}>
            Search
          </button>
        </form>
      </div>
      <div className="col-6 col-md-6 mt-4">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="row">
              {filteredData.map((team) => (
                  <Card team={team} key={team.id}/>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
