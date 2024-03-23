import React from "react";

const Hero = () => {
  return (
    <div className="h-screen grid place-content-center">
      <div className="flex flex-col gap-2 items-center">
        <div className="text-center">
          <h1 className="text-4xl text-dark-gray px-4">
            Hey there, I'm
            <span className="font-cursive text-primary text-7xl">
              {" "}
              avinash{" "}
            </span>
            aka tier3guy
          </h1>
        </div>
        <p className="w-[80%] mt-4 md:mt-0 md:w-1/2 text-center">
          a 21-year-old software engineer driven by an insatiable passion for
          innovation and problem-solving. Originating from the culturally rich
          and bustling city of Kolkata.
        </p>
        <a href="#about-section">
          <div className="flex flex-col gap-2 items-center mt-6">
            <p>Read More</p>
            <i className="fa-solid fa-arrow-down-long text-primary" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
