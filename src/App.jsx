import { useEffect } from "react";
import BackgroundVideo from "./assets/background.mp4";
import { Link, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import "./App.css";

function App() {
  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.style.opacity = 1;
    }
  }, []);

  return (
    <>
      <video src={BackgroundVideo} autoPlay loop muted></video>

      <div className="main-container">
        <div className="viewport-header">
          <h1 className='my-name'>Daniel Roberts</h1>
          <h2 className='subtitle'>Junior Software Developer</h2>
          <div className="social-media-links">
            <a target="_blank" href="your-linkedin-url">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/irlydo">
              <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="your-twitter-url">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
<hr></hr>
        <nav>
          <Link to="/">
            <button>About</button>
          </Link>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </nav>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      </div>
    </>
  );
}

export default App;
