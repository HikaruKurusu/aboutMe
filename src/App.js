import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";
import myImage from "./head.png";

function Home() {
  return null;
}

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <h1>Hikaru Kurusu</h1>
          <div className="container2">
            <nav className="nav-icons">
              <a href="https://www.linkedin.com/in/hikaru-kurusu-404495223/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="nav-icon" />
              </a>
              <a href="https://github.com/HikaruKurusu" target="_blank" rel="noopener noreferrer">
                <FaGithub className="nav-icon" />
              </a>
            </nav>
          </div>
        </div>
        <div className="whiteBox"></div>
        <div className="content">
          <div className="profile">
            <div className="profile-pic">
              <img src={myImage} alt="Profile" className="profile-img" />
            </div>
            <div className="profile-text">
              <h2>Welcome to my portfolio website!</h2>
              <h2>Scroll down to learn more</h2>
            </div>
          </div>
        </div>
        <div className="AboutMe">
          <h2>About me</h2>
          <p className="about">I am Hikaru Kurusu, a fourth-year Computer Science and Engineering student at UC Merced, passionate about software development and problem-solving. I enjoy building websites, games, and software tools, with projects like an HTML game, a Unity FPS game, and an Electron-based file converter. My internship at Western Digital allowed me to develop software from scratch with a team, strengthening my collaboration and coding skills.</p>
          <p className="about">Beyond tech, I am a tricking instructor for my university’s martial arts club, where I lead students in developing their skills, discipline, and confidence. Teaching has sharpened my leadership and communication abilities, which I apply in both technical and team settings. I am always eager to learn, innovate, and grow as I continue my journey in the tech industry.</p>
        </div>
        <div className="Skills">
          <h2>Skills</h2>
          <p className="about">I am Hikaru Kurusu, a fourth-year Computer Science and Engineering student at UC Merced, passionate about software development and problem-solving. I enjoy building websites, games, and software tools, with projects like an HTML game, a Unity FPS game, and an Electron-based file converter. My internship at Western Digital allowed me to develop software from scratch with a team, strengthening my collaboration and coding skills.</p>
          <p className="about">Beyond tech, I am a tricking instructor for my university’s martial arts club, where I lead students in developing their skills, discipline, and confidence. Teaching has sharpened my leadership and communication abilities, which I apply in both technical and team settings. I am always eager to learn, innovate, and grow as I continue my journey in the tech industry.</p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
