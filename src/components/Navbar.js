// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <header className="flex justify-between items-center h-[10vh] relative">
      <div className="ml-5 sm:ml-10 text-center text-ftcolor bg-white/70 p-2 cursor-pointer">
        <Link to="/">
          <div className="text-1xl tracking-tighter leading-none">
            LEUNG YATTUNG
          </div>
          <div className="text-2xl tracking-widest leading-none">portfolio</div>
        </Link>
      </div>

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
