import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Homepage/Intro";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import Works from "./pages/Works";
import Footer from "./components/Footer";

function App() {
  // intro
  const [isHeightOver, setIsHeightOver] = useState(true);

  //widthSet < 768 isHeightOver(hidden)
  useEffect(() => {
    const introWidth = () => {
      if (window.innerWidth < 768) {
        setIsHeightOver(false);
      } else {
        setIsHeightOver(true);
      }
    };

    introWidth();
    return () => introWidth();
  }, []);

  //menu
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  // toTop
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  // bottomHg
  const [hgState, setHgState] = useState(false);

  useEffect(() => {
    const getBottom = document.documentElement.scrollHeight;

    const scrollUp = () => {
      if (
        document.scrollingElement.scrollTop >=
        getBottom - window.innerHeight
      ) {
        setHgState(true);
        // console.log("aaa");
      } else {
        setHgState(false);
        // console.log("bbb");
      }
    };

    window.addEventListener("scroll", scrollUp);
    return () => window.removeEventListener("scroll", scrollUp);
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="font-Noto sm:overflow-hidden">
        {isHeightOver === true ? (
          <Intro setIsHeightOver={setIsHeightOver} toTop={toTop} />
        ) : (
          <div className="relative z-50 w-screen h-auto">
            <div className="absolute z-50">
              <Navbar isOpen={isOpen} toggle={toggle} />
              <Menu isOpen={isOpen} toggle={toggle} toTop={toTop} />
            </div>

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/works" element={<Works />} />
            </Routes>

            <Footer isHeightOver={isHeightOver} hgState={hgState} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
