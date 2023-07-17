import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, PlayerDetails, TeamStatics } from "../components/";
import { Stats, HomeComponent, Calendar, Teams } from "../pages/";

export const NbaDataByAPIRoute = () => {
  return (
    <div style={{ background: '#edeef0' }} >
      <Navbar />

      <div className="container" >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/players/:teamId" element={<PlayerDetails/>} />
          <Route path="/teams/statistics/:teamId" element={<TeamStatics/>} />
        </Routes>

      </div>
        <Footer/>
    </div>
  );
};
