import React, { useEffect, useState } from "react";
import { ListTeams } from "../components/ListTeams";
import { useDataByAPI } from "../hooks/useDataByAPI";

export const SearchTeam = () => {
  
  const [Allteams, setAllteams] = useState([]);

  const dataAtlantic = useDataByAPI("Atlantic");
  const dataCentral = useDataByAPI("Central");
  const dataNorthwest = useDataByAPI("Northwest");
  const dataPacific = useDataByAPI("Pacific");
  const dataSoutheast = useDataByAPI("Southeast");
  const dataSouthwest = useDataByAPI("Southwest");

  


  const nortWest = dataNorthwest.slice(0, dataNorthwest.length - 2);

  

  useEffect(() => {
    setAllteams([dataAtlantic, dataCentral, dataNorthwest, dataPacific, dataSoutheast, dataSouthwest])
  }, [dataAtlantic,dataCentral, dataNorthwest, dataPacific, dataSoutheast,dataSouthwest]);
  

  return (
    <div className="row mt-2 rounded bg-light">

      <div className="row d-flex justify-content-center mb-4">
        <div className="col-6 col-md-6 mt-4 ">
            <h2>Atlantic</h2>
            <hr />
            {Allteams[0]?.map((team) => (
              <ListTeams game={team} key={team.id} />
            ))}
        </div>
        <div className="col-6 col-md-6 mt-4">
            <h2>Central</h2>
            <hr />
            {dataCentral?.map((team) => (
              <ListTeams game={team} key={team.id} />
            ))}
        </div>
        <div className="col-6 col-md-6 mt-4">
          
            <h2>Northwest</h2>
            <hr />
            {nortWest?.map((team) => (
              <ListTeams game={team} key={team.id} />
            ))}
        </div>
        <div className="col-6 col-md-6 mt-4">
         
            <h2>Pacific</h2>
            <hr />
            {Allteams[3]?.map((team) => (
              <ListTeams game={team} key={team.id} />
            ))}
        </div>
        <div className="col-6 col-md-6 mt-4">
            <h2>Southeast</h2>
            <hr />
            {Allteams[4]?.map((team) => (
              <ListTeams game={team} key={team.id} />
            ))}
        </div>
        <div className="col-6 col-md-6 mt-4">
            <h2>Southwest</h2>
            <hr />
            {Allteams[5]?.map((team) => (
              <ListTeams game={team} key={team.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
