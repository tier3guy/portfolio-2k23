import React from "react";

// Assets
import { ProjectsData } from "../assets/data";
import GithubIcon from "../assets/icons/github.svg";

const Projects = () => {
  return (
    <div
      id="works-section prjects"
      className="experience-container container center flex-column"
    >
      <span>projects</span>

      {ProjectsData.map((proj, index) => {
        return (
          <div
            key={index}
            className="experience-content center flex-column align-start"
            style={{
              marginBottom: "2em",
            }}
          >
            <div className="experience-heading center justify-between w-100">
              <a href={proj.live}>
                <h1>
                  {`${proj.id < 10 ? "0" + proj.id : proj.id}`}. {proj.title}
                </h1>
              </a>
              <a target="__black" href={proj.gh}>
                <img
                  src={GithubIcon}
                  style={{ height: "32px", width: "32px" }}
                  alt="gh-icon"
                />
                {/* <i
                  className="fa-solid fa-github"
                  style={{ fontSize: "30px" }}
                /> */}
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
  );
};

export default Projects;
