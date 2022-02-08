import React from "react";
import Html from "../../img/html.png";
import Pug from "../../img/pug.svg";
import Css from "../../img/css.png";
import Sass from "../../img/sass.svg";
import Tailwindcss from "../../img/tailwindcss.svg";
import Js from "../../img/js.png";
import ReactLogo from "../../img/react.png";
import Php from "../../img/php.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const aboutDetail = () => {
  return (
    <section className="relative z-40 w-screen h-auto sm:h-[900px] py-14 bg-white">
      <div className="text-ftcolor">
        <h2 className="pb-8 text-center sm:text-left text-txt sm:text-[4rem] leading-9 sm:leading-normal sm:font-bold sm:mt-[80px] 2xl:mt-[120px] sm:ml-[150px] 2xl:ml-[250px]">
          新しい体験をし
          <br />
          新発想を生み出す
        </h2>
        <p className="text-txf sm:text-txfs px-8 sm:p-0 sm:mt-[30px] sm:ml-[150px] 2xl:ml-[400px] sm:w-[550px] sm:leading-7 2xl:leading-10">
          自分の知らない土地、自分の知らない言語、自分の知らない人と出会い。
          まだみぬ場所に行けば自ずと学びも増え、楽しいあまりです。新しい体験をたくさんし、
          視野が広がり、新発想も生み出す分けだと思う。
        </p>
      </div>

      <div className="mt-10 px-7 sm:p-12 sm:w-[500px] sm:h-auto sm:absolute sm:-top-[140px] sm:right-0 sm:bg-white sm:shadow-md">
        <div className="hidden sm:block">
          <h2 className="text-2xl font-bold">
            リョウイットン <span className="text-txf ml-5">LEUNG YATTUNG</span>
          </h2>
          <p className="text-txf sm:font-bold font-ftcolor leading-5 pt-6 pl-3 sm:p-0 sm:mt-10  sm:leading-7">
            香港出身で、フォントエンジニアを目指している。
            <br />
            2019年日本に留学し始める。
            <br />
            2020年ECCコンピュータ専門学校に入学して
            <br />
            2022年ECCコンピュータ専門学校を卒業予定。
          </p>
          <h3 className="font-ftcolor text-txfs font-bold pt-2 pl-3 sm:p-0 sm:mt-10">
            好きなこと：水泳・アニメ・旅行
          </h3>
        </div>

        {/* skill */}
        <div className="sm:mt-14">
          <h3 className="text-txt border-b-4 border-ftcolor">Skill</h3>
          <div className="mt-8">
            <div className="flex flex-wrap justify-around items-end text-center">
              <div className="skillFlex">
                <img src={Html} alt="html" />
                <p className="mt-2">HTML</p>
              </div>
              <div className="skillFlex">
                <img src={Css} alt="css" />
                <p className="mt-2">CSS</p>
              </div>
              <div className="skillFlex">
                <img src={Pug} alt="pug" />
                <p className="mt-2">PUG</p>
              </div>

              <div className="skillFlex">
                <img src={Sass} alt="sass" />
                <p className="mt-2">SASS</p>
              </div>
            </div>

            <div className="flex flex-wrap  justify-around items-end text-center mt-10">
              <div className="skillFlex">
                <img src={Tailwindcss} alt="tailwindcss" />
                <p className="mt-4 -translate-x-3">TAILWIND</p>
              </div>
              <div className="skillFlex">
                <img src={Js} alt="js" className="w-12 m-auto" />
                <p className="mt-2">JS</p>
              </div>
              <div className="skillFlex">
                <img src={ReactLogo} alt="react" className="w-12" />
                <p className="mt-2">REACT</p>
              </div>
              <div className="skillFlex">
                <img src={Php} alt="php" className="w-12" />
                <p className="mt-4">PHP</p>
              </div>
            </div>
          </div>
        </div>

        {/* mysite */}
        <div className="mt-10 text-txf">
          <h3 className="text-txt border-b-4 border-ftcolor">My Site</h3>
          <div className="mt-5 flex justify-around items-end text-center">
            <div className="w-auto cursor-pointer group">
              <a
                href="https://www.instagram.com/_ryou_lyt/"
                target="_blank"
                rel="instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-5xl text-ftcolor group-hover:opacity-60"
                />
              </a>
              <p className="mt-2">INSTAGRAM</p>
            </div>
            <div className="w-auto cursor-pointer group">
              <a
                href="https://www.wantedly.com/id/itsu_ryou"
                target="_blank"
                rel="wantedly"
              >
                <svg
                  id="Logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 394"
                  className="w-16 h-16 pt-4 fill-ftcolor m-auto group-hover:opacity-60"
                >
                  <defs></defs>
                  <circle cx="375" cy="122.95" r="38.98" />
                  <path d="M217.17 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.22-5.14-3.23-7.18l-3.77-9.08-32.28-77.95H85.89l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.68a1.34 1.34 0 0 0-.51-1.62ZM338.15 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.23-5.14-3.24-7.19l-3.75-9.07-32.29-77.95h-64.58l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.67a1.36 1.36 0 0 0-.51-1.63Z" />
                </svg>
              </a>
              <p className="mt-2">WANTEDLY</p>
            </div>
            <div className="w-auto cursor-pointer group">
              <a
                href="https://github.com/ryou-yattung"
                target="_blank"
                rel="github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-5xl hover:text-ftcolor group-hover:opacity-60"
                />
              </a>
              <p className="mt-2">GITHUT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutDetail;
