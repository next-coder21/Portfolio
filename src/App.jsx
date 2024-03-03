import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Header/Navbar";
import "../node_modules/flowbite/dist/flowbite.min.js";

import Landing from "./assets/components/Header/Landing/Landing.jsx";
import Skillset from "./assets/components/Skill/Skillset.jsx";
import Project from "./assets/components/Projects/project.jsx";
import Hero from "./assets/components/Header/Hero/Hero.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="" element={<Landing />} />
            <Route path="/hero" element={<Hero />}/>
            <Route path="/skills" element={<Skillset />} />
            <Route path="/project" element={<Project/>}/>
            </Routes>
      
    </BrowserRouter>
  );
}

export default App;
