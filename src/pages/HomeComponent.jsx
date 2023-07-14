import React, { useEffect, useState } from 'react';
import { Carousel, NextGames} from '../components/index';
// import { Trade } from '../components/Trade';
import { useDataByAPI } from '../hooks/useDataByAPI';
import { UseYoutubeData } from '../hooks/useYoutubeData';

export const HomeComponent = () => {
  const data = useDataByAPI();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <div>
      <div className="row" style={{ minHeight: "84vh"}}>
        <div className="col-lg-8 col-sm-12 col-md-8">
          <Carousel/>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-4">
          <NextGames/>
        </div>
      </div>
      </div>
  );
};
