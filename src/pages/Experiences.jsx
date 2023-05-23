import React from "react";
import { ExperiencesData } from "../assets/data";

const Experiences = () => {
  return (
    <div
      id="works-section"
      className="experience-container container center flex-column"
    >
      <span>experiences</span>

      {ExperiencesData.map((exp, index) => {
        return (
          <div
            key={index}
            className="experience-content center flex-column align-start"
          >
            <div className="experience-heading center justify-between w-100">
              <a href={exp.companyLink}>
                <h1>
                  {`${exp.id < 10 ? "0" + exp.id : exp.id}`}. {exp.company}
                </h1>
              </a>
              <a href={exp.pow}>
                <p
                  className={`${
                    exp.pow ? "border-bottom" : "cursor-not-allowed"
                  }`}
                >
                  PoW
                </p>
              </a>
            </div>

            {exp.info.map((inf, idx) => {
              return (
                <p key={idx + index} className="experience-subheading">
                  {inf.description}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
