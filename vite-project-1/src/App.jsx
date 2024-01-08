import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import "./styles/NavBar.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';



function App() {

  const projectObject = [
    {
      projectName: "Charcoal & Cabernet",
      projectDescription: "A web application for restaurants that allows users to reserve specific seating while booking a reservation. A user can register and log in. A user is able to store their favorites between sessions. A user will also receive texts that update their delivery status.",
      projectLink: "https://github.com/codingMadeSimple/Charcoal-Cabernet",
      projectScreenshot: "https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png",
      screenshotAlt: "Charcoal and Cabernet Screenshot Placeholder",
      frontendStack: "React JS, CSS, SCSS",
      backendStack: "Ruby and Rails Backend",
      apis: "Stripe, Twilio, Material-UI, React Router",
      partners: {
        Noah: {
          name: "Noah McMillan",
          github: "https://github.com/NeonWaffles222",
          linkedIn: "https://www.linkedin.com/in/noah-mcmillan-622756292/"
        }
        ,
        Steven: {
          name: "Steven Serruya",
          github: "https://github.com/steven-serruya",
          linkedIn: "https://www.linkedin.com/in/steven-serruya-b52425282/"
        }
      }
    },
  ];


  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio projectObject={projectObject} />} className="page-margin" />
          <Route path="/about" element={<About />} className="page-margin" />
          <Route path="/contact" element={<Contact />} className="page-margin" />
          <Route path="/experience" element={<Experience />} className="page-margin" />
        </Routes>
        <NavBar />
      </Router>
  );
}

export default App;