import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { useDataByAPI } from '../hooks/useDataByAPI';

export const HomeComponent = () => {
  const data = useDataByAPI();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <div><h1>Cargando...</h1></div>
      ) : (
        <div className='row mt-4'>
          {data.map((team) => (
            <Card team={team} key={team.id}/>
          ))}
        </div>
      )}
    </div>
  );
};
