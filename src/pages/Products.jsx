import React from "react";

// Assets
import { ProductsData } from "../assets/data";
import GithubIcon from "../assets/icons/github.svg";

const Projects = () => {
  return (
    <div
      id="works-section"
      className="experience-container container center flex-column"
    >
      <span>products</span>

      {ProductsData.map((pdt, index) => {
        return (
          <div
            key={index}
            className="experience-content center flex-column align-start"
            style={{
              marginBottom: "2em",
            }}
          >
            <div className="experience-heading center justify-between w-100">
              <a href={pdt.live}>
                <h1>
                  {`${pdt.id < 10 ? "0" + pdt.id : pdt.id}`}. {pdt.title}
                </h1>
              </a>
              <a target="__black" href={pdt.gh}>
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

            <p className="experience-subheading">{pdt.description}</p>

            {pdt.command && (
              <>
                <p className="experience-subheading">
                  <span
                    style={{ fontFamily: "var(--poppins)" }}
                    // className="border-bottom"
                  >
                    To install, try runnning
                  </span>
                </p>
                <p className="experience-subheading">
                  <p
                    style={{
                      fontFamily: "var(--poppins)",
                      marginLeft: "0px",
                      padding: "5px 20px",
                      // background: "var(--black)",
                      // color: "var(--white)",
                      // borderRadius: "5px",
                      fontSize: "14px",
                      border: "2px solid var(--orange)",
                    }}
                    className="cursor-pointer"
                  >
                    {pdt.command}
                  </p>
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
