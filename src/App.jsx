import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import BuildMastersHub from './components/BuildMastersHub.jsx'
import Navbar from './components/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import LogIn from './components/LogIn.jsx';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/build-masters-hub" element={<BuildMastersHub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
