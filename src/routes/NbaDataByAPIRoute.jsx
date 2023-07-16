import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { TeamDetails } from "../components/TeamDetails";
import { Stats, HomeComponent, Calendar, Teams } from "../pages/index";

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
          <Route path="/teams/:teamId" element={<TeamDetails/>} />
        </Routes>

      </div>
        <Footer/>
    </div>
  );
};
