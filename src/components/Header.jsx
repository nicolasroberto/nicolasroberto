import React from "react";
import logo from "../assets/static/logo.svg";
export const Header = () => {
  return (
    <>
      <header>
        <div className="collapse bg-dark bg-gradient" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Contactame</h4>
                <p className="text-light">
                  En los enlaces a tu derecha, vas a encontrar diferentes
                  fuentes para contactar conmigo y así coordinar una entrevista
                  o consultar tus dudas sobre mis proyectos. Si te gustó mi
                  trabajo y interesa tener tu propia página web, no dudes en
                  hablarme.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Mis links:</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nicol%C3%A1s-roberto/"
                      target="_blank"
                      className="link-warning"
                    >
                      Contactame por Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/nicolasroberto"
                      target="_blank"
                      className="link-warning"
                    >
                      Mirá mi repo en GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:nicolaseugroberto@gmail.com"
                      target="_blank"
                      className="link-warning"
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
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-roberto/"
              target="_blank"
              className="navbar-brand d-flex align-items-center"
            >
              <img src={logo} className="App-logo" alt="logo" />
              <strong> Nicolás Roberto</strong>
            </a>
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
