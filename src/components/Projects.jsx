import { Card } from "./Card";
import "../assets/css/Projects.css";
import Project from "../data/projects.json";

export const Projects = () => {
  const mapped = Project.map((a) => a)
    .reverse()
    .map((a) => a);
  return (
    <>
      <section className="py-5 text-center container">
        <div className="album py-5">
          <div className="container">
            <h2 className="fw-light titleMB">Proyectos:</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {mapped.map((project) => (
                <Card project={project} key={project.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
