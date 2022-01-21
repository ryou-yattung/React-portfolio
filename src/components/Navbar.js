import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-[10vh] relative  text-white">
      <div className="ml-5 text-center font-bold text-white sm:text-ftcolor">
        <div className="text-2xl leading-none ">LEUNG YATTUNG</div>
        <div className="text-3xl leading-none tracking-[0.4rem]">portfolio</div>
      </div>

      <div className="fixed z-50 right-5">
        <FontAwesomeIcon
          // onClick={changeMenu}
          icon={faBars}
          className="text-ftcolor text-4xl"
        />
      </div>
    </header>
  );
};

export default Navbar;
