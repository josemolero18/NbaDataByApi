import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../assets/logo.png"

export const Navbar = () => {

  return (
    <nav className="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="logo"  width="100" height="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SearchTeam">Teams</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Stats">Standings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Oeste">Result</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="$#">Jose Fernandez</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
