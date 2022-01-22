// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <header className="flex justify-between items-center h-[10vh] relative  text-white">
      <Link to="/">
        <div className="ml-5 text-center font-bold sm:font-light text-white sm:text-ftcolor cursor-pointer">
          <div className="text-2xl tracking-tighter leading-none">
            LEUNG YATTUNG
          </div>
          <div className="text-3xl tracking-widest leading-none">portfolio</div>
        </div>
      </Link>

      <div className="fixed z-50 right-7 cursor-pointer">
        <FontAwesomeIcon
          onClick={toggle}
          icon={isOpen ? faTimes : faBars}
          className="text-ftcolor text-4xl"
        />
      </div>
    </header>
  );
};

export default Navbar;