/* 
   File Name: App.js
   Student Name: Yehong Hu
   Student ID: 301392896
   Date: 2024.09.28
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import './style.css';
import logo from './LOGO.jpg';  // Import your logo image

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">
                <img src={logo} alt="Logo" className="navbar-logo" /> {/* Add the logo here */}
              </a>
            </li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;