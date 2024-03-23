import React from "react";

// Assets
import { ProductsData } from "../../assets/data";
import GithubIcon from "../../assets/icons/github.svg";

const Projects = () => {
  return (
    <div
      id="works-section"
      className="flex flex-col gap-4 w-[92%] md:w-[80%] m-auto mt-20"
    >
      <span className="text-7xl font-cursive text-primary mb-5 md:text-center">
        products
      </span>

      <div className="flex flex-col gap-10">
        {ProductsData.map((pdt, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-start md:items-center">
                <a href={pdt.live}>
                  <h1 className="text-3xl font-bold">
                    {`${pdt.id < 10 ? "0" + pdt.id : pdt.id}`}. {pdt.title}
                  </h1>
                </a>
                <a target="__black" href={pdt.gh}>
                  <img
                    src={GithubIcon}
                    style={{ height: "32px", width: "32px" }}
                    alt="gh-icon"
                  />
                </a>
              </div>

              <p className="experience-subheading">{pdt.description}</p>

              {pdt.command && (
                <div className="flex flex-col gap-2">
                  <div>
                    <span>To install, try runnning</span>
                  </div>
                  <div>
                    <p className="cursor-pointer border-[2px] border-primary px-4 py-2 w-fit text-sm">
                      {pdt.command}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
