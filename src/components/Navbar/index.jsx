/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// Styles
import "./styles.css";

const Navbar = () => {
  const [isopen, setIsopen] = React.useState(true);

  return (
    <>
      <div className="navbar-container center justify-between">
        <div className="navbar-logo center">
          <a href="#">avinash</a>
        </div>

        <div className="navbar-links center">
          <a href="https://www.linkedin.com/in/avinash-gupta-3321041ba/">
            LinkedIn
          </a>
          <a href="https://twitter.com/Avinash35925012">Twitter</a>
          <a href="https://leetcode.com/tier_3_guy/">Leetcode</a>
          <a href="#about-section">About</a>
          <a href="#works-section">Works</a>
        </div>

        <a href="https://drive.google.com/file/d/1fKdtJF8W1Idu-Q1DQKAsq7QOoWs6j2kQ/view?usp=sharing">
          Resume
        </a>
      </div>
      <div className="navbar-open-btn center">
        <button onClick={() => setIsopen(!isopen)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className="navbar-container-mobile center"
        style={{
          right: isopen ? "0" : "-100%",
          animation: isopen ? "slideIn 0.3s" : "slideOut 0.5s",
        }}
      >
        <div className=" center flex-column">
          <a href="https://www.linkedin.com/in/avinash-gupta-3321041ba/">
            LinkedIn
          </a>
          <a href="https://twitter.com/Avinash35925012">Twitter</a>
          <a href="https://leetcode.com/tier_3_guy/">Leetcode</a>
          <a href="#about-section">About</a>
          <a href="#works-section">Works</a>
          <a href="https://drive.google.com/file/d/1fKdtJF8W1Idu-Q1DQKAsq7QOoWs6j2kQ/view?usp=sharing">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
