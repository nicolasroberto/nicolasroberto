import { CardSkill } from "./CardSkill";
import "../assets/css/Skills.css";

import Skill from "../data/skills.json";

export const Skills = () => {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-light titleMB">Tecnologías:</h1>
            </div>
          </div>
          <div className="row">
            {Skill.map((skill) => (
              <CardSkill skill={skill} key={skill.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
