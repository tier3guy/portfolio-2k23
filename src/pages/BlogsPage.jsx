import React from "react";

// Components
import { Navbar } from "../components";

const BlogsPage = () => {
  return (
    <div className="container">
      <Navbar blogs />
      <div className="home-container center">
        <div className="home-content center flex-column">
          <h1 className="home-heading">
            <span>the blogs</span>
          </h1>
          <p
            className="home-subheading"
            style={{
              marginTop: "20px",
              fontSize: "18px",
            }}
          >
            Welcome to the captivating world of my blog, nestled within the
            depths of my portfolio website. Here, I invite you to embark on a
            journey through my creative musings and insightful narratives, where
            I share my thoughts, experiences, and expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
