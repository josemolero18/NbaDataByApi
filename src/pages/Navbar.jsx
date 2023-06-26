import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className='d-flex '>
            <h3 className='text-primary'> NBA</h3> 
            <h3 className='ms-1 text-danger'> Data</h3>
            </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">All Teams</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SearchTeam">Search Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Stats">Standings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Oeste">Conference West</Link>
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
