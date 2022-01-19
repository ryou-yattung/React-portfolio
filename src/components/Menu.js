import React from "react";
import wantedly from "../img/Wantedly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  return (
    <div className="fixed w-full h-full top-0 z-40 bg-bgcolor1 ">
      <div>
        <ul>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <img src={wantedly} alt="wantedly" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </ul>
      </div>

      <div>
        <li>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </li>
        <li>日本語</li>
        <li>中文</li>
        <li>ENGLISH</li>
      </div>
    </div>
  );
};

export default Menu;
