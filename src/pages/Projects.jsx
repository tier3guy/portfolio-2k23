import React from "react";

const Projects = () => {
  return (
    <div
      id="works-section prjects"
      className="experience-container container center flex-column"
    >
      <span>projects</span>
      <div
        className="experience-content center flex-column align-start"
        style={{
          marginBottom: "2em",
        }}
      >
        <div className="experience-heading center justify-between w-100">
          <a href="https://www.linkcrate.vercel.app/">
            <h1>01. Linkcrate</h1>
          </a>
          <a target="__black" href="https://github.com/tier3guy/linkcrate">
            <i className="fa-solid fa-github" style={{ fontSize: "30px" }} />
          </a>
        </div>
        <p className="experience-subheading">
          Linkcrate is a web application that allows users to collect and
          organize their various links in one central location. It provides a
          simple and intuitive way for individuals and businesses to create a
          personalized page with their preferred links, making it easy to share
          with others.
        </p>
        <p className="experience-subheading">
          <span
            style={{ fontFamily: "var(--poppins)" }}
            className="border-bottom"
          >
            Tech Stack
          </span>{" "}
          ~ React, Tailwind , Firebase & Vercel (For deployment)
        </p>
      </div>
      <div
        className="experience-content center flex-column align-start"
        style={{
          marginBottom: "2em",
        }}
      >
        <div className="experience-heading center justify-between w-100">
          <a href="">
            <h1>02. ChatGPT - Mobile</h1>
          </a>
          <a
            target="__black"
            href="https://github.com/tier3guy/chat-gpt-mobile"
          >
            <i className="fa-solid fa-github" style={{ fontSize: "30px" }} />
          </a>
        </div>
        <p className="experience-subheading">
          ChatGPT Mobile App is a fan-based mobile application built on top of
          React Native. The app utilizes the DeepAI API to power its chatbot
          feature. The app allows users to chat with an AI-powered chatbot that
          uses machine learning to generate human-like responses to users'
          messages.
        </p>
        <p className="experience-subheading">
          <span
            style={{ fontFamily: "var(--poppins)" }}
            className="border-bottom"
          >
            Tech Stack
          </span>{" "}
          ~ React Native, Node JS / Express JS , Mongo DB & Deep AI API
        </p>
      </div>
    </div>
  );
};

export default Projects;
