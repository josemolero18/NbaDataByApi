import React from 'react'

export const MainNews = () => {
  return (
    <main>
      <article
        className="mt-3 rounded p-2 pt-3 ps-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="row">
          <div className="col-1">
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phx.png&w=288&h=288"
              alt="Hola"
              className="d-block w-100 px-0 pe-0"
            />
          </div>
          <div className="col-11 ps-0 pb-0">
            <div className="row">
              <div className="col-10">
                <h6 className="mb-0">
                  <b>SUNS</b>
                </h6>
                <p className="mt-0" style={{ fontSize: "9px", color: "#666" }}>
                  NBA
                </p>
              </div>
              <div className="col-2">
                <a
                  href="#"
                  className="ms-4 pt-5 text-decoration-none"
                  style={{ fontSize: "14px" }}
                >
                  Ver Todo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 border border-top-0 border-secondary-subtle">
          <img
            src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0706%2Fr1194859_1296x518_5%2D2.jpg&w=628&h=251&scale=crop&cquality=80&location=center&format=jpg"
            className="card-img-top "
            alt="D-wade"
          />
          <div className="card-body border-top border-info ">
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              El agresivo plan de los Suns para ganar ahora en la NBA
            </h5>
            <p className="card-text">
              <small className="text-body-secondary">
                1d Brian Windhorst | Escritor senior de ESPN
              </small>
            </p>
          </div>
        </div>
      </article>
      <article
        className="mt-3 rounded p-2 pt-3 ps-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="row">
          <div className="col-1">
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/wnba/500/chi.png&w=288&h=288"
              alt="Hola"
              className="d-block w-100 px-0 pe-0"
            />
          </div>
          <div className="col-11 ps-0 pb-0">
            <h6 className="mb-0">
              <b>SKY</b>
            </h6>
            <p className="mt-0" style={{ fontSize: "9px", color: "#666" }}>
              WNBA
            </p>
          </div>
        </div>

        <div className="card mb-3 border border-top-0 border-secondary-subtle">
          <img
            src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0714%2Fr1197875_1296x518_5%2D2.jpg&w=628&h=251&scale=crop&cquality=80&location=center&format=jpg"
            className="card-img-top "
            alt="D-wade"
          />
          <div className="card-body border-top border-info ">
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              WNBA: D-Wade se une a dueños de Chicago Sky
            </h5>
            <p className="card-text">
              <small className="text-body-secondary">
                16h Alexa Philippou | ESPN
              </small>
            </p>
          </div>
        </div>
      </article>
      <article
        className="mt-3 rounded p-2 pt-3 ps-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="row">
          <div className="col-1">
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/wnba.png&w=288&h=288&transparent=true"
              alt="Hola"
              className="d-block w-100 px-0 pe-0"
            />
          </div>
          <div className="col-11 ps-0 pb-0">
            <h6 className="mb-0">
              <b>JUEGO DE LAS ESTRELLAS</b>
            </h6>
            <p className="mt-0" style={{ fontSize: "9px", color: "#666" }}>
              CONCURSO DE HABILIDADES
            </p>
          </div>
        </div>

        <div className="card mb-3 border border-top-0 border-secondary-subtle">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CfPsyMkLAdQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='card-img-top'
          ></iframe>
          <div className="card-body border-top border-info ">
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              Ionescu hizo historia con 37 puntos en el concurso de triples
            </h5>
            <p className="card-text">
              <small className="text-body-secondary">20h</small>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
