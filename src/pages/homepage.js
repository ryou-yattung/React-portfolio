import React from "react";
import About from "./homepage/about";
import MyView from "./homepage/myView";
import Challenge from "./homepage/challenge";
import Work from "./homepage/work";

const homepage = () => {
  return (
    <>
      <MyView />
      <About />
      <Challenge />
      <Work />
    </>
  );
};

export default homepage;
