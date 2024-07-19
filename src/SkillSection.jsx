import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faBootstrap,
  faJava,
  faJs,
  faGithub,
  faGit,
  faAws,
  faJenkins,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
function SkillSection() {
  const skills = [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3, name: "CSS" },
    { icon: faBootstrap, name: "BOOTSTRAP" },
    { icon: faJava, name: "JAVA" },
    { icon: faJs, name: "JavaScript" },
    { icon: faGithub, name: "GITHUB" },
    { icon: faGit, name: "GIT" },
    { icon: faAws, name: "AWS" },
    { icon: faJenkins, name: "JENKINS" },
    { icon: faReact, name: "REACT JS" },
  ];
  return (
    <div className="row justify-content-around body_color" id="skills">
      <div className=" shadow-lg position-relative d-flex align-items-center justify-content-center nav_color">
        <h1
          className="display-3 text-uppercase text-white"
          style={{ WebkitTextStroke: "0.4px yellow" }}
        >
          Skills
        </h1>
      </div>
      {skills.map((skill, index) => (
        <div
          className="col-md-3 col-11 d-flex flex-column pt-4 text-center justify-content-center align-items-center bg  mx-1 my-5"
          style={{ width: " 100px", height: "100px" }}
          key={index}
        >
          <FontAwesomeIcon icon={skill.icon} size="4x" />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
export default SkillSection;
