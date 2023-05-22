import React from "react";

const Projects = () => {
  return (
    <div
      id="works-section"
      className="experience-container container center flex-column"
    >
      <span>products</span>

      <div
        className="experience-content center flex-column align-start"
        style={{
          marginBottom: "2em",
        }}
      >
        <div className="experience-heading center justify-between w-100">
          <a href="https://www.npmjs.com/package/create-react-avinash-app">
            <h1>01. React Starter Templates</h1>
          </a>
          <a
            target="__black"
            href="https://github.com/tier3guy/create-react-app-starter-template"
          >
            <i className="fa-solid fa-github" style={{ fontSize: "30px" }} />
          </a>
        </div>

        <p className="experience-subheading">
          This React app starter template provides a solid foundation for
          building modern, scalable, and feature-rich web applications. It
          incorporates best practices, industry standards, and a powerful set of
          tools to streamline your development process.
        </p>

        <p className="experience-subheading">
          <span
            style={{ fontFamily: "var(--poppins)" }}
            className="border-bottom"
          >
            To install, try runnning
          </span>
        </p>
        <p className="experience-subheading">
          <p
            style={{
              fontFamily: "var(--poppins)",
              marginLeft: "0px",
              padding: "10px 20px",
              background: "var(--black)",
              color: "var(--white)",
              borderRadius: "5px",
            }}
            className="cursor-pointer"
          >
            npm install create-react-avinash-app ./your-folder-name
          </p>
        </p>
      </div>

      <div
        id="code"
        className="experience-content center flex-column align-start"
        style={{
          marginBottom: "2em",
        }}
      >
        <div className="experience-heading center justify-between w-100">
          <a href="https://www.npmjs.com/package/create-expo-app-starter-template-js">
            <h1>02. Expo App Starter Templates</h1>
          </a>
          <a
            target="__black"
            href="https://github.com/tier3guy/create-expo-app-starter-template"
          >
            <i className="fa-solid fa-github" style={{ fontSize: "30px" }} />
          </a>
        </div>
        <p className="experience-subheading">
          This Expo app starter template provides a solid foundation for
          building cross-platform mobile applications using React Native and
          Expo. It comes with essential configurations, libraries, and tools to
          accelerate your development process and simplify the deployment of
          your app.
        </p>
        <p className="experience-subheading">
          <span
            style={{ fontFamily: "var(--poppins)" }}
            className="border-bottom"
          >
            To install, try runnning
          </span>
        </p>
        <p className="experience-subheading">
          <p
            style={{
              fontFamily: "var(--poppins)",
              marginLeft: "0px",
              padding: "10px 20px",
              background: "var(--black)",
              color: "var(--white)",
              borderRadius: "5px",
            }}
            className="cursor-pointer"
          >
            npm install create-expo-app-starter-template-js ./your-folder-name
          </p>
        </p>
      </div>

      <div
        className="experience-content center flex-column align-start"
        style={{
          marginBottom: "2em",
        }}
      >
        <div className="experience-heading center justify-between w-100">
          <a href="https://www.npmjs.com/package/create-express-backend-app">
            <h1>03. Express Backend Templates</h1>
          </a>
          <a
            target="__black"
            href="https://github.com/tier3guy/node-express-backend-template"
          >
            <i className="fa-solid fa-github" style={{ fontSize: "30px" }} />
          </a>
        </div>
        <p className="experience-subheading">
          This Express app starter template is designed to jumpstart your web
          application development using the popular Express.js framework. It
          comes preconfigured with integrated MongoDB support, allowing you to
          easily build powerful and scalable server-side applications.
        </p>
        <p className="experience-subheading">
          <span
            style={{ fontFamily: "var(--poppins)" }}
            className="border-bottom"
          >
            To install, try runnning
          </span>
        </p>
        <p className="experience-subheading">
          <p
            style={{
              fontFamily: "var(--poppins)",
              marginLeft: "0px",
              padding: "10px 20px",
              background: "var(--black)",
              color: "var(--white)",
              borderRadius: "5px",
            }}
            className="cursor-pointer"
            id="code"
          >
            npm install create-express-backend-app ./your-folder-name
          </p>
        </p>
      </div>
    </div>
  );
};

export default Projects;
