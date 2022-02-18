import React from "react";
import qrcode from "../img/qrCode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, toggle, toTop }) => {
  return (
    <nav
      className={`fixed w-screen h-screen top-0 z-40 transition-[] duration-500 bg-bgcolor1 text-white
      ${isOpen ? "left-[0%]" : "left-[-100%]"}`}
    >
      <div className="w-1/4 h-full absolute left-0 hidden sm:flex flex-col items-center justify-center">
        <img src={qrcode} alt="qrcode" />
        <p className="text-3xl tracking-widest mt-5">スマホ用</p>
      </div>

      <div
        className="w-1/3 h-full absolute m-auto right-0 left-0 flex flex-col items-center justify-center text-center"
        onClick={toTop}
      >
        <ul className="text-3xl sm:text-4xl">
          <li className="mb-16 hover:text-ftcolor cursor-pointer">
            <Link to="/" onClick={toggle}>
              Homepage
            </Link>
          </li>
          <li className="mb-16 hover:text-ftcolor cursor-pointer">
            <Link to="aboutMe" onClick={toggle}>
              AboutMe
            </Link>
          </li>
          <li className="mb-24 sm:mb-16 hover:text-ftcolor tracking-widest cursor-pointer">
            <Link to="/works" onClick={toggle}>
              Works
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-20 h-12 sm:h-full absolute bottom-28 sm:bottom-0 sm:right-5">
        <ul className="w-3/5 sm:w-20 sm:h-full m-auto flex sm:flex-col items-center justify-between sm:justify-center">
          <li
            className="mb-14 cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/_ryou_lyt/", "_blank")
            }
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-4xl sm:text-5xl hover:text-ftcolor"
            />
          </li>
          <li
            className="mb-14 cursor-pointer"
            onClick={() =>
              window.open("https://www.wantedly.com/id/itsu_ryou", "_blank")
            }
          >
            <svg
              id="Logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 394"
              className="w-14 h-14 sm:w-16 sm:h-16 fill-white hover:fill-ftcolor"
            >
              <defs></defs>
              <circle cx="375" cy="122.95" r="38.98" />
              <path d="M217.17 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.22-5.14-3.23-7.18l-3.77-9.08-32.28-77.95H85.89l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.68a1.34 1.34 0 0 0-.51-1.62ZM338.15 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.23-5.14-3.24-7.19l-3.75-9.07-32.29-77.95h-64.58l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.67a1.36 1.36 0 0 0-.51-1.63Z" />
            </svg>
          </li>
          <li
            className="mb-14 cursor-pointer"
            onClick={() =>
              window.open("https://github.com/ryou-yattung", "_blank")
            }
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl sm:text-5xl hover:text-ftcolor"
            />
          </li>
        </ul>
      </div>

      <div className="hidden w-full h-20 absolute bottom-10 sm:bottom-5 m-auto right-0 left-0">
        <ul className="flex items-center justify-center text-1xl sm:text-2xl ">
          <li className="mr-5">
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              className="text-3xl sm:text-4xl "
            />
          </li>
          <li className="mr-1 after:ml-5 hover:text-ftcolor cursor-pointer">
            日本語
          </li>
          <li className="mr-5">/</li>
          <li className="mr-1 after:ml-5 hover:text-ftcolor cursor-pointer">
            中文
          </li>
          <li className="mr-5">/</li>
          <li className="hover:text-ftcolor cursor-pointer">ENGLISH</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
