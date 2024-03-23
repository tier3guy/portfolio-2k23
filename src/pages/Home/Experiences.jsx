import React from "react";
import { ExperiencesData } from "../../assets/data";

const Experiences = () => {
  return (
    <div
      id="works-section"
      className="flex flex-col gap-4 w-[92%] md:w-[80%] m-auto mt-20"
    >
      <span className="text-7xl font-cursive text-primary mb-5 md:text-center">
        experiences
      </span>

      <div className="flex flex-col gap-10">
        {ExperiencesData.map((exp, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-start md:items-center">
                <a href={exp.companyLink}>
                  <h1 className="text-3xl font-bold">
                    {`${exp.id < 10 ? "0" + exp.id : exp.id}`}. {exp.company}
                  </h1>
                </a>
                <a href={exp.pow}>
                  <p
                    className={`${
                      exp.pow
                        ? "border-b-[2px] border-primary"
                        : "cursor-not-allowed text-dark-gray"
                    }`}
                  >
                    PoW
                  </p>
                </a>
              </div>

              <div className="flex flex-col gap-2">
                {exp.info.map((inf, idx) => {
                  return (
                    <p key={idx + index} className="experience-subheading">
                      {inf.description}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
