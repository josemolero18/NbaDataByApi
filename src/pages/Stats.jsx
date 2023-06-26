import { useEffect, useState } from "react";
import { useDataByAPI } from "../hooks/useDataByAPI";

export const Stats = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <div>
        <h1>Posicions</h1>
        <div className="row">
          <div className="col-6">
            <h2>East</h2>
          </div>
          <div className="col-6">
            <h2>West</h2>
          </div>
        </div>
    </div>
  );
};