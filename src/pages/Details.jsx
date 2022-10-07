import { CardDetails } from "../components/CardDetails";
import Project from "../data/projects.json";
import { useParams } from "react-router-dom";
import { Projects } from "../components/Projects";
import "../assets/css/Details.css";
import { useEffect } from "react";

export const Details = () => {
  let location = useParams();
  const id = location.id;
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [id]);

  return (
    <main>
      <section className="py-5 text-center container-fluid detailsBG">
        <div className="album py-5">
          <div className="container">
            <h2 className="fw-light titleMB">Detalles:</h2>
            <div className="row col-lg-4 offset-lg-4">
              {Project.filter((project) => project.furl === id).map(
                (project) => (
                  <CardDetails project={project} key={id} />
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <Projects />
    </main>
  );
};
