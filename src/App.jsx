import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors ">
    <Header />
    <Home id="home"/>
    <About id="about"/>
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
    </div>
  );
}
