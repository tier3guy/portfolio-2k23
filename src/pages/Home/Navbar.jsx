/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  const [isopen, setIsopen] = React.useState(false);

  const toggle = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div
        className="hidden md:flex p-4 px-16 justify-between items-center fixed top-0 left-0 w-full z-20"
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="">
          <a href="/" className="text-xl  text-primary">
            {"tier3guy"}
          </a>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-fit flex items-center gap-4">
          <a href="https://www.linkedin.com/in/avinash-gupta-3321041ba/">
            LinkedIn
          </a>
          <a href="https://twitter.com/tier3guy">Twitter</a>
          <a href="https://leetcode.com/tier_3_guy/">Leetcode</a>
          <a href="#about-section">About</a>
          <a href="#works-section">Works</a>
        </div>

        <div>
          <a
            href="https://drive.google.com/file/d/1MrKnFrXRFATz_YjCRlCVP-M7XqQk5piD/view?usp=sharing"
            target="__blank"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hidden">
        <button onClick={toggle}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div
        className="hidden"
        style={{
          right: isopen ? "0" : "-100%",
          animation: isopen ? "slideIn 0.3s" : "slideOut 0.5s",
        }}
      >
        <div className=" center flex-column">
          <a
            onClick={toggle}
            href="https://www.linkedin.com/in/avinash-gupta-3321041ba/"
          >
            LinkedIn
          </a>
          <a onClick={toggle} href="https://twitter.com/Avinash35925012">
            Twitter
          </a>
          <a onClick={toggle} href="https://leetcode.com/tier_3_guy/">
            Leetcode
          </a>
          <a onClick={toggle} href="#about-section">
            About
          </a>
          <a onClick={toggle} href="#works-section">
            Works
          </a>
          <a
            onClick={toggle}
            href="https://drive.google.com/file/d/1fKdtJF8W1Idu-Q1DQKAsq7QOoWs6j2kQ/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
