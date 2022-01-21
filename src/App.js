import React from "react";
// import { Switch, Route } from "react-router-dom";
import Intro from "./pages/page1/Intro";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  // intro
  const [isHeightOver, setIsHeightOver] = React.useState(true);

  return (
    <div className="font-serif">
      {isHeightOver === true ? (
        <Intro setState={setIsHeightOver} />
      ) : (
        <div className="relative z-50 w-screen h-auto">
          <Navbar />
          <Menu />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
