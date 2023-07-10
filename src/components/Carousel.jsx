import React from 'react';
import wembiImage from "../assets/wembi.avif";
import twinsImage from "../assets/twins.jpg";
import hardenImage from "../assets/harden.jpg";

export const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-3">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="d-block w-100">
            <img src={wembiImage} className="d-block w-100 animate__animated animate__slideInDown" alt="..." style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              opacity: 0.9,
            }} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='h1 text-light'>SPURS ROLL OUT RED CARPET FOR NO. 1 PICK WEMBANYAMA</h5>
              <p className=' h6 text-white '>Victor Wembanyama's 1st 24 hours in San Antonio includes a rally at the iconic River Walk and dinner with Spurs legends.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={twinsImage} className="d-block w-100 animate__animated animate__slideInLeft" alt="..." style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              opacity: 0.9,
            }}/>
          <div className="carousel-caption d-none d-md-block">
          <h5 className='h1 text-light'>ALL-ACCESS: MIC'D UP WITH THE THOMPSONS AT NBA DRAFT</h5>
          <p className=' h6 text-white '>Listen in to the best of Amen and Ausar Thompson mic'd up at the 2023 NBA Draft!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={hardenImage} className="d-block w-100 animate__animated animate__slideInRight" alt="..." style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              opacity: 0.9,
            }}
            
            />
          <div className="carousel-caption d-none d-md-block">
          <h5 className='h1 text-light'>10 MOST INTRIGUING FREE AGENTS TO WATCH</h5>
          <p className=' h6 text-white '>Fred VanVleet, Draymond Green and James Harden are among the players who could change teams this offseason.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
