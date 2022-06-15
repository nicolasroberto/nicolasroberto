import { Link } from "react-router-dom";
import "../assets/css/projects.css";

export const Card = (props) => {
  const { project } = props;
  return (
    <div className="col">
      <div className="card shadow-sm cardProject">
        <div className="cardMargin">
          <img
            className="cardImg"
            src={`${project.img}`}
            alt={`${project.furl}`}
          />
        </div>

        <div className="card-body">
          <h5 className="card-text mb-4">{project.name}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={project.url}
                className="btn btn-sm btn-outline-secondary"
                target="_blank"
              >
                Link
              </a>
              <Link
                to={`/details/${project.furl}`}
                className="btn btn-sm btn-outline-secondary"
              >
                Detalle
              </Link>
            </div>
            <small className="text-muted">{project.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
