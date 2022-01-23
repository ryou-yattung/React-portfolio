import React from "react";
import About from "./homepage/about";
import MyView from "./homepage/myView";
import Challenge from "./homepage/challenge";

const homepage = () => {
  return (
    <div>
      <MyView />
      <About />
      <Challenge />
    </div>
  );
};

export default homepage;
