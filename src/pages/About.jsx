const About = () => {
  return (
    <div className="container">
      <div id="about-section" className="about-container center flex-column">
        <span>about me</span>
        <p className="home-subheading">
          As an engineering student majoring in Information and Technology, I am
          passionate about exploring the latest technologies and their potential
          to solve real-world problems. Since beginning my B.Tech in 2020, I
          have been developing my skills in web development using the MERN
          stack. I have also gained experience in mobile app development with
          React Native, which has allowed me to build functional and
          user-friendly mobile applications.
        </p>
        <p className="home-subheading">
          With a current CGPA of 9.5, I have consistently demonstrated my
          ability to learn quickly and adapt to new challenges. I am a diligent
          and detail-oriented individual who is committed to delivering
          high-quality work. Recently, I have shifted my focus to blockchain
          development, recognizing its potential to transform industries and
          create new opportunities. I believe that blockchain is the future of
          technology, and I am excited to be a part of this emerging field.
        </p>
        <p className="home-subheading">
          With my skills in web and mobile app development, coupled with my
          interest in blockchain, I am well-equipped to take on exciting
          projects in the tech industry. I am always seeking new challenges and
          opportunities to learn and grow, and I am excited to see where my
          career in technology will take me.
        </p>
        <p className="home-subheading border-bottom why-engineering">
          Why did I joined Engineering?
        </p>
        <audio
          controls
          style={{
            background: "var(--white)",
          }}
        >
          <source src={require("../assets/farhan_dialogue.m4a")} />
        </audio>
        <span
          style={{
            marginTop: "4rem",
          }}
        >
          skills
        </span>
        <div className="skills-container center">
          <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
          <span>TypeScript</span> <span>Next JS</span> <span>Tailwind CSS</span>
          <span>React JS</span> <span>Node.js</span> <span>Express</span>
          <span>MongoDB</span> <span>MySQL</span> <span>React Native</span>
          <span>Blockchain Development</span> <span>Solidity</span>
          <span>Java</span> <span>C++</span>
          <span>Git</span> <span>Github</span>
        </div>
      </div>
    </div>
  );
};

export default About;
