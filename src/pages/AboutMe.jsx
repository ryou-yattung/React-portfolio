import React, { useState, useEffect } from "react";
import AboutBg from "./AboutMe/AboutBg";
import AboutDetail from "./AboutMe/AboutDetail";
import AboutReason from "./AboutMe/AboutReason";
import AboutTri from "./AboutMe/AboutTri";

const AboutMe = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const whyShow = () => {
    setScrollTop(document.scrollingElement.scrollTop);
    // console.log(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", whyShow);
    return () => window.removeEventListener("scroll", whyShow);
  });
  return (
    <>
      <AboutBg />
      <AboutDetail />
      <AboutReason scrollTop={scrollTop} />
      <AboutTri />
    </>
  );
};

export default AboutMe;
