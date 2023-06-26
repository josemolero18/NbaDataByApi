

export const Card = ({team}) => {
  return (
    <div className="col-4 col-lg-4" key={team.id}>
              <div className="card mb-3 p-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={team.logo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{team.name}</h5>
                      <p className="card-text">
                        <small className="text-body-secondary">Country: {team.country.name}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
