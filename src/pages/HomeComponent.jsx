import React, { useEffect, useState } from 'react';
import { Carousel, Aside, MainNews} from '../components/index';
import { useDataByAPI } from '../hooks/useDataByAPI';

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
          <MainNews/>
        </div>
        <aside className="col-lg-4 col-sm-12 col-md-4">
          <Aside/>
        </aside>
      </div>
      </div>
  );
};
