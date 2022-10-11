import React from "react";
import "./SoftwareSkill.scss";
//import {skillsSection} from "../../portfolio";

export default function SoftwareSkill({ softwareSkills }) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                <i className={skill.fontAwesomeClassname}></i>
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
