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
                desarrollo front-end. Hasta el mes de diciembre de 2022,
                participé de un curso de selección de personal de React.js en de{" "}
                <a
                  href="https://www.solvd.com/"
                  target="_blank"
                  className="text-dark"
                >
                  Solvd,Inc
                </a>
                . Dicho curso duró 6 meses y durante el último desarrollamos una
                plataforma ecommerce grupal con Next.js, Material UI y React
                Query.
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <a
                  href="https://www.canva.com/design/DAE-SSocO0o/TeiQk92fuDO1VkqgR6O3xQ/view?utm_content=DAE-SSocO0o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  type="button"
                  className="btn btn-outline-secondary"
                  target="_blank"
                >
                  CV español
                </a>
                <a
                  href="https://www.canva.com/design/DAFWvKXVIKI/vwQWFx5a1EJlus9fP58LdA/view?utm_content=DAFWvKXVIKI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
