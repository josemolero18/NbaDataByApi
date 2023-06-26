import { Route, Routes } from "react-router-dom";
import { Stats, HomeComponent, Navbar, Oeste, SearchTeam } from "../pages/index";

export const NbaDataByAPIRoute = () => {
  return (
    <div className="min-vh-100">
      <Navbar />

      <div className="container" >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Oeste" element={<Oeste />} />
          <Route path="/SearchTeam" element={<SearchTeam />} />
        </Routes>
      </div>
    </div>
  );
};
