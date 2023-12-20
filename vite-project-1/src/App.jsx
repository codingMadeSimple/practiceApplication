import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import "./styles/NavBar.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Portfolio from './Components/PortfolioItem';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} className="page-margin"/>
        <Route path="/about" element={<About />} className="page-margin"/>
        <Route path="/contact" element={<Contact />} className="page-margin"/>
        <Route path="/experience" element={<Experience />} className="page-margin"/>
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;