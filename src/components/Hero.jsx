import React from "react";
import "../assets/css/Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="py-5 text-center container-fluid bg-img">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <div class="glass">
              <h1 className="fw-light titleMB">Sobre mí:</h1>
              <p className="lead text-dark">
                Soy técnico en programación especializado en Frontend, de Buenos
                Aires, Argentina. Mi experiencia laboral se basa en 4 meses de
                prácticas, tuve dos durante mi período académico en Teclab, de
                dos meses de duración cada una. En dichas prácticas, continué mi
                capacitación como frontend. Luego, realicé un curso intensivo
                (Summerhack 2022) Fullstack Js con React.js y Firebase en
                Escuela Dev Rock.
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <a
                  href="https://drive.google.com/file/d/1_00g_XNZeSEM2neo6Xilyx4n8ueaO0my/view?usp=sharing"
                  type="button"
                  className="btn btn-outline-primary"
                  target="_blank"
                >
                  CV español
                </a>
                <a
                  href="https://drive.google.com/file/d/1GF06-RKZS8XK2VwZIQCNZqOUoI55GgLT/view?usp=sharing"
                  type="button"
                  className="btn btn-outline-primary"
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
