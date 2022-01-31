import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/homepage/Intro";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Homepage from "./pages/homepage";
import AboutMe from "./pages/aboutMe";
import Works from "./pages/works";
import Footer from "./components/Footer";

function App() {
  // intro
  const [isHeightOver, setIsHeightOver] = useState(true);

  //menu
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (isOpen) {
        setIsopen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="font-Noto sm:overflow-hidden">
        {isHeightOver === true ? (
          <Intro setIsHeightOver={setIsHeightOver} />
        ) : (
          <div className="relative z-50 w-screen h-auto">
            <div className="absolute z-50">
              <Navbar isOpen={isOpen} toggle={toggle} />
              <Menu isOpen={isOpen} toggle={toggle} />
            </div>

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/works" element={<Works />} />
            </Routes>

            <Footer setIsHeightOver={setIsHeightOver} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
