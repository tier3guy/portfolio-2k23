/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// Styles
import "./styles.css";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
