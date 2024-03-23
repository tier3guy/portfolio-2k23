import React from "react";

// Assets
import { ProjectsData } from "../../assets/data";
import GithubIcon from "../../assets/icons/github.svg";

const Projects = () => {
  return (
    <div
      id="works-section prjects"
      className="flex flex-col gap-4 w-[92%] md:w-[80%] m-auto mt-20"
    >
      <span className="text-7xl font-cursive text-primary mb-5 md:text-center">
        projects
      </span>

      <div className="flex flex-col gap-10">
        {ProjectsData.map((proj, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-start md:items-center">
                <a href={proj.live}>
                  <h1 className="text-3xl font-bold">
                    {`${proj.id < 10 ? "0" + proj.id : proj.id}`}. {proj.title}
                  </h1>
                </a>
                <a target="__black" href={proj.gh}>
                  <img
                    src={GithubIcon}
                    style={{ height: "32px", width: "32px" }}
                    alt="gh-icon"
                  />
                </a>
              </div>
              <p className="experience-subheading">{proj.description}</p>
              {proj.tech?.length && (
                <p className="experience-subheading">
                  <span
                    style={{ fontFamily: "var(--poppins)" }}
                    className="border-bottom"
                  >
                    Tech Stack
                  </span>
                  {` ~ `}
                  {proj.tech.map((tech, index) => {
                    if (proj.tech.length - 1 === index) return `& ${tech}`;
                    return `${tech}, `;
                  })}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
