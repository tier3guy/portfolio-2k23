const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Next JS",
    "Tailwind CSS",
    "React JS",
    "Node.js",
    "Express JS",
    "MongoDB",
    "SQL",
    "React Native",
    "Solidity",
    "Third Web",
    "Java",
    "C++",
    "Git",
    "Github",
    "Docker",
    "K8s",
  ];

  return (
    <div className="w-[92%] md:w-[80%] m-auto flex flex-col items-center justify-center">
      <div
        id="about-section"
        className="flex flex-col md:items-center md:text-center gap-4"
      >
        <span className="font-cursive text-7xl text-primary">about me</span>
        <p>
          As an engineering student majoring in Information and Technology, I am
          passionate about exploring the latest technologies and their potential
          to solve real-world problems. Since beginning my B.Tech in 2020, I
          have been developing my skills in web development using the MERN
          stack. I have also gained experience in mobile app development with
          React Native, which has allowed me to build functional and
          user-friendly mobile applications.
        </p>
        <p>
          With a current CGPA of 9.5, I have consistently demonstrated my
          ability to learn quickly and adapt to new challenges. I am a diligent
          and detail-oriented individual who is committed to delivering
          high-quality work. Recently, I have shifted my focus to blockchain
          development, recognizing its potential to transform industries and
          create new opportunities. I believe that blockchain is the future of
          technology, and I am excited to be a part of this emerging field.
        </p>
        <p>
          With my skills in web and mobile app development, coupled with my
          interest in blockchain, I am well-equipped to take on exciting
          projects in the tech industry. I am always seeking new challenges and
          opportunities to learn and grow, and I am excited to see where my
          career in technology will take me.
        </p>
        <p>Why did I joined Engineering?</p>
        <audio controls className="bg-white">
          <source src={require("../../assets/farhan_dialogue.m4a")} />
        </audio>
        <span className="mt-16 text-7xl text-primary font-cursive md:text-center">
          skills
        </span>
        <div className="flex flex-wrap gap-2 md:justify-center md:w-[80%]">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border-[2px] border-primary px-4 py-2 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
