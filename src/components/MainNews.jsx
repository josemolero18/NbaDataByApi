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
    </main>
  );
}
