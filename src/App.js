import "./App.css";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Technicalskills from "./Technicalskills";
import Socialnetwork from "./socialnetwork";
import Contact from "./contact";
import Achievements from "./Achievements.js";

import Footer from "./footer";
function App() {
  return (
    <>
      <header className="header">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#Home">
              HOME
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#About">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Projects">
              PROJECTS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">
              CONTACT
            </a>
          </li>
        </ul>
      </header>
      <Home />
      <About />
      <Technicalskills />
      <Projects />
      <Achievements />
      <Socialnetwork />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
