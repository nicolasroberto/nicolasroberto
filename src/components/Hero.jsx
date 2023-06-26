import React from "react";
import "../assets/css/Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="py-5 text-center container-fluid bg-img">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <div className="glass">
              <h1 className="fw-light titleMB">Nicolás Roberto:</h1>
              <p className="lead text-dark">
                Soy Técnico Superior en Programación, especializado en
                desarrollo front-end. Actualmente me encuentro reaclizando
                prácticas en #NoCountry como frontend developer en proyectos
                mensuales.
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <a
                  href="https://www.canva.com/design/DAFm8Tw6TfA/SWVhciT9ADIM6kvrRItdow/view?utm_content=DAFm8Tw6TfA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  type="button"
                  className="btn btn-outline-secondary"
                  target="_blank"
                >
                  CV español
                </a>
                <a
                  href="https://www.canva.com/design/DAFgngbthHg/adaYA4ZWXQ9aSCkwuAqtig/view?utm_content=DAFgngbthHg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  type="button"
                  className="btn btn-outline-secondary"
                  target="_blank"
                >
                  CV inglés
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
