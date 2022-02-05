import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Fly from "../img/fly.png";

const Footer = ({ hgState }) => {
  return (
    <footer className="relative z-40 w-full h-auto pb-10 sm:pb-0 bg-bgcolor1 setHeight">
      <div className="pt-1 sm:pt-0">
        <h2 className="titleh1 sm:text-right sm:mr-20">Contact</h2>
        <h3 className="titleh2 sm:text-right sm:mr-20">お問い合わせ</h3>
      </div>

      <div className="w-auto text-center">
        <a
          href="mailto:yattungleung159@gmail.com"
          className="w-auto text-txfs sm:text-txts text-center border-b-2 sm:border-b-4 border-ftcolor"
        >
          yattungleung159@gmail.com
        </a>
        <p className="text-txf sm:text-txfs tracking-tighter mt-2 sm:mt-4">
          Webサイトにご訪問いただき、ありがとうございます。
          <br />
          気軽にご連絡ください。
        </p>
      </div>

      <div className="w-full h-20 sm:h-32 relative">
        {/* animeFly transformA */}
        <div
          className={`group w-7 h-7 sm:w-10 sm:h-10 absolute right-[calc(50%-10px)] sm:right-1/2 bottom-[15%] cursor-pointer transformA
          ${hgState ? "animeFly" : ""}`}
          onClick={() => scroll.scrollTo(0)}
        >
          <img className="" src={Fly} alt="flyAction" />
          <p className="text-txfs font-bold text-ftcolor ease duration-200 transformA sm:opacity-0 sm:group-hover:opacity-100 sm:rotate-[55deg] sm:scale-x-100 sm:group-hover:-scale-y-100 sm:-translate-x-6 sm:-translate-y-4">
            TOP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
