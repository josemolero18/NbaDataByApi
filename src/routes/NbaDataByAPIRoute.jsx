import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Stats, HomeComponent, Oeste, SearchTeam } from "../pages/index";

export const NbaDataByAPIRoute = () => {
  return (
    <div style={{ background: '#FFFAFA' }} >
      <Navbar />

      <div className="container" >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Oeste" element={<Oeste />} />
          <Route path="/SearchTeam" element={<SearchTeam />} />
        </Routes>

      </div>
        <Footer/>
    </div>
  );
};
