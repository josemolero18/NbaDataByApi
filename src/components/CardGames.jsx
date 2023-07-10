export const CardGames = ({ game }) => {
    return (
      <div className="row mt-4">
        <div className="col-3 col-sm-12 col-md-4 col-lg-3" style={{ height: "40vh", minHeight: "100%" }}>
          <table className="table table-striped ms-5">
            <thead>
              <tr>
                <th scope="col">{game.league.name}</th>
                <th scope="col">Q1</th>
                <th scope="col">Q2</th>
                <th scope="col">Q3</th>
                <th scope="col">Q4</th>
                <th scope="col" className="pe-2">Total</th>
              </tr>
            </thead>
            <tbody className="p-5">
              <tr>
                <td>
                  <img
                    className="img-fluid"
                    src={game.teams.home.logo}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      display: "flex",
                      margin: "0 auto", // Centra la imagen horizontalmente
                    }}
                  />
                </td>
                <td className="text-center">{game.scores.home.quarter_1}</td>
                <td className="text-center">{game.scores.home.quarter_2}</td>
                <td className="text-center">{game.scores.home.quarter_3}</td>
                <td className="text-center">{game.scores.home.quarter_4}</td>
                <td className="text-center">{game.scores.home.total}</td>
              </tr>
              <tr>
                <td>
                  <img
                    className="img-fluid"
                    src={game.teams.away.logo}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      margin: "0 auto", // Centra la imagen horizontalmente
                    }}
                  />
                </td>
                <td className="text-center">{game.scores.away.quarter_1}</td>
                <td className="text-center">{game.scores.away.quarter_2}</td>
                <td className="text-center">{game.scores.away.quarter_3}</td>
                <td className="text-center">{game.scores.away.quarter_4}</td>
                <td className="text-center">{game.scores.away.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  