import React, { useState, useEffect } from "react";
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

  //wide¥thSet
  const [size, setSize] = useState({ setSize: undefined });

  useEffect(() => {
    const introWidth = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    console.log(size);

    window.addEventListener("resize", introWidth);
    return () => window.removeEventListener("resize", introWidth);
  }, []);

  // if width(size)>768=f
  // useEffect(() => {
  //   if (size.width > 768 && isHeightOver) {
  //     setIsHeightOver(false);
  //     console.log(isHeightOver);
  //   }
  // }, [size.width, isHeightOver]);

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
