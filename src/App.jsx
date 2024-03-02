import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Header/Navbar";
import "../node_modules/flowbite/dist/flowbite.min.js";

import Landing from "./assets/components/Header/Landing/Landing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="" element={<Landing />} />
            </Routes>
      
    </BrowserRouter>
  );
}

export default App;
