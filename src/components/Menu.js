import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  return (
    <nav className="fixed w-full h-full -left-full top-0 z-40 bg-bgcolor1 text-white">
      <div className="w-1/3 h-full absolute m-auto right-0 left-0 flex flex-col items-center justify-center text-center">
        <ul className="text-3xl sm:text-4xl">
          <li className="mb-10 hover:text-ftcolor cursor-pointer">About</li>
          <li className="mb-10 hover:text-ftcolor cursor-pointer">Works</li>
          <li className="mb-10 hover:text-ftcolor cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="w-20 h-full absolute right-0 flex flex-col items-center justify-center text-center">
        <ul>
          <li className="mb-8">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-3xl sm:text-5xl hover:text-ftcolor cursor-pointer"
            />
          </li>
          <li className="mb-8">
            <svg
              id="Logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 394"
              class="w-12 h-12 sm:w-16 sm:h-16 fill-white hover:fill-ftcolor"
            >
              <defs></defs>
              <circle cx="375" cy="122.95" r="38.98" />
              <path d="M217.17 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.22-5.14-3.23-7.18l-3.77-9.08-32.28-77.95H85.89l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.68a1.34 1.34 0 0 0-.51-1.62ZM338.15 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.23-5.14-3.24-7.19l-3.75-9.07-32.29-77.95h-64.58l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.67a1.36 1.36 0 0 0-.51-1.63Z" />
            </svg>
          </li>
          <li className="mb-8">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl sm:text-5xl hover:text-ftcolor cursor-pointer"
            />
          </li>
        </ul>
      </div>

      <div className="w-full h-20 absolute bottom-10 sm:bottom-5 m-auto right-0 left-0">
        <ul className="flex items-center justify-center text-1xl sm:text-2xl ">
          <li className="mr-5">
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              className="text-3xl sm:text-4xl "
            />
          </li>
          <li className="mr-5 after:content-['/'] after:ml-5">日本語</li>
          <li className="mr-5 after:content-['/'] after:ml-5">中文</li>
          <li>ENGLISH</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
