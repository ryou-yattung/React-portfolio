import React from "react";
import wantedly from "../img/Wantedly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  return (
    <div className="fixed w-full h-full top-0 z-40 bg-bgcolor1 text-white">
      {/* -left-full */}
      <div className="w-1/3 h-full absolute m-auto right-0 left-0 flex flex-col items-center justify-center text-center">
        <ul className="text-3xl sm:text-4xl">
          <li className="mb-10">About</li>
          <li className="mb-10">Works</li>
          <li className="mb-10">Contact</li>
        </ul>
      </div>

      <div className="w-20 h-full absolute right-0 flex flex-col items-center justify-center text-center">
        <ul>
          <li className="mb-10">
            <FontAwesomeIcon icon={faInstagram} className="text-5xl" />
          </li>
          <li className="mb-10">
            <img src={wantedly} alt="wantedly" className="w-16 h-16" />
          </li>
          <li className="mb-10">
            <FontAwesomeIcon icon={faGithub} className="text-5xl" />
          </li>
        </ul>
      </div>

      <div className="w-full h-20 absolute bottom-10 sm:bottom-5 m-auto right-0 left-0">
        <ul className="flex items-center justify-center text-1xl sm:text-2xl ">
          <li className="mr-5">
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              className="text-3xl sm:text-4xl"
            />
          </li>
          <li className="mr-5 after:content-['/'] after:ml-5">日本語</li>
          <li className="mr-5 after:content-['/'] after:ml-5">中文</li>
          <li>ENGLISH</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
