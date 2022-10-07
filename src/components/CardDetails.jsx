import "../assets/css/CardDetails.css";
export const CardDetails = (props) => {
  const { project } = props;
  return (
    <div className="col">
      <div className="card shadow-sm cardDetail">
        <div className="cardMargin">
          <img
            className="cardImg detailImg"
            src={`${project.img}`}
            alt={`${project.furl}`}
          />
        </div>

        <div className="card-body cardDetail">
          <h5 className="card-text mb-4">{project.name}</h5>
          <p className="fs-6 text-start">{project.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={project.url}
                className="btn btn-sm btn-outline-secondary"
                target="_blank"
              >
                Link
              </a>
              <a
                href={`${project.code}`}
                className="btn btn-sm btn-outline-secondary"
                target="_blank"
              >
                Código
              </a>
            </div>
            <small className="text-muted">{project.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
