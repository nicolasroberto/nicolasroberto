import { Icon } from "@iconify/react";
import "../assets/css/Skills.css";
export const CardSkill = (props) => {
  const { skill } = props;
  return (
    <div className="col-6 col-sm-4 col-lg-4 mt-4">
      <div className="card skillcard">
        <Icon icon={`logos:${skill.logo}`} height="80" className="header-img" />
        <h5>{`${skill.name}`}</h5>
      </div>
    </div>
  );
};
