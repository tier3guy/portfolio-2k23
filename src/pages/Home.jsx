// Componets
import { Products } from ".";
import { Navbar, Footer } from "../components";

// Pages
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="home-container center">
        <div className="home-content center flex-column">
          <h1 className="home-heading">
            Hi there, I'm <span>avinash</span>
          </h1>
          <p className="home-subheading">
            Fuelled by a passion for designing compelling products, I have a
            deep desire to excel and continuously improve in my work. Learn more
            about my journey below.
          </p>
          <a href="#about-section" className="home-btn border-bottom">
            Know More
          </a>
        </div>
      </div>
      <About />
      <Experiences />
      <Projects />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
