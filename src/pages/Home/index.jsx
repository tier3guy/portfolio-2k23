import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./Products";
import About from "./About";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
