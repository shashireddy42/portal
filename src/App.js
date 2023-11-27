import logo from "./logo.svg";
import { saveAs } from 'file-saver';

import "./App.css";
import Homepage from "./components/Homepage";
import bgvideo from "../src/assets/bgvideo.mp4";
import About from "./components/About";
import Experience from "./components/experince";
import Projects from "./components/projects";
import Contactus from "./components/contact-us";
import javapng from "./assets/java.png"
import resume from"./assets/shivani.pdf";

function App() {
  const handleDownload=()=>{
    const pdfPath = resume; // Replace with the actual path
    saveAs(pdfPath, 'shivaniresume.pdf');

  }
  return (
    <div className="App">
      <div className="nav-bar">
        <div className="nav-bar-content">Shivani Portfolio</div>
        <div className="nav-bar-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button className="resume-btn" onClick={handleDownload}>Resume</button>
            </li>
          </ul>
        </div>
      </div>
      <div  id="home"className="video-background">
        <video autoPlay muted loop>
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>
      <div className="main-content">
        <div id="home">
          <Homepage  />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
        <div id="contact">
          <Contactus />
        </div>
      </div>
    </div>
  );
}

export default App;
