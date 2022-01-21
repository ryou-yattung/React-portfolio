import React, { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";
import Intro from "./pages/page1/Intro";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
  // intro
  const [isHeightOver, setIsHeightOver] = React.useState(true);

  return (
    <div className="font-serif">
      {isHeightOver === true ? (
        <Intro state={setIsHeightOver} />
      ) : (
        <div className="relative z-50 w-screen h-[5000px]">
          <Navbar />
          <Menu />
        </div>
      )}
    </div>
  );
}

export default App;
