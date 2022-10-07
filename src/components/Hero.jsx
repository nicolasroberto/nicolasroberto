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
                Soy técnico en programación especializado en Frontend, de Buenos
                Aires, Argentina. Mi experiencia laboral se basa en 4 meses de
                prácticas como frontend, durante mi período académico en Teclab.
                Actualmente estoy realizando un curso de React.JS en{" "}
                <a
                  href="https://www.solvd.com/"
                  target="_blank"
                  className="text-dark"
                >
                  Solvd,Inc
                </a>
                .
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <a
                  href="https://drive.google.com/file/d/1_00g_XNZeSEM2neo6Xilyx4n8ueaO0my/view?usp=sharing"
                  type="button"
                  className="btn btn-outline-secondary"
                  target="_blank"
                >
                  CV español
                </a>
                <a
                  href="https://drive.google.com/file/d/1GF06-RKZS8XK2VwZIQCNZqOUoI55GgLT/view?usp=sharing"
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
