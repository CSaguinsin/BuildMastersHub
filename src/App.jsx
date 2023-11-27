import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import BuildMastersHub from './components/BuildMastersHub.jsx'
import Navbar from './components/Navbar.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/build-masters-hub" element={<BuildMastersHub />} />
      </Routes>
    </>
  )
}

export default App
