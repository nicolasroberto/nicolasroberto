import { Link } from "react-router-dom";
import logo from "../assets/static/logo.svg";
export const Header = () => {
  return (
    <>
      <header>
        <div className="collapse bg-dark bg-gradient" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-light">Contactame</h4>
                <p className="text-light">
                  Si te gustó mi trabajo y interesa tener tu propia página web o
                  entrevistarme, no dudes en hablarme.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-light">Mis links:</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" target="_blank" className="link-light">
                      Contactame por Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/nicolasroberto"
                      target="_blank"
                      className="link-light"
                    >
                      Mi repositorio en GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:nicolaseugroberto@gmail.com"
                      target="_blank"
                      className="link-light"
                    >
                      Mandame un mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark bg-gradient shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} className="App-logo" alt="logo" />
              <strong> Frontend developer</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
