import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './Components/NavBar';
import "./styles/NavBar.css";
import LandingPage from './Components/LandingPage';


function App() {

  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
}

export default App;
