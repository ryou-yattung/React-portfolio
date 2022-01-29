import React, { useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import Fly from "../img/fly.png";

const Footer = ({ setIsHeightOver }) => {
  // flyanime
  // const getCurrent = useRef(null);
  // console.log(getCurrent);
  // const getHeight = getCurrent.current.offsetHeight;
  // console.log(getHeight);
  // const flyanime = () => {
  //   if (window.scrollY > getHeight) {
  //     console.log("aaa");
  //     this.classList.add("animeFly");
  //   } else {
  //     this.classList.remove("animeFly");
  //   }
  // };

  return (
    <footer
      className="relative z-40 w-full h-auto pb-10 sm:pb-0 bg-bgcolor1 setHeight"
      // ref={getCurrent}
    >
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
          className="group w-7 h-7 sm:w-10 sm:h-10 absolute right-1/2 bottom-[15%] cursor-pointer transformA"
          onClick={() => scroll.scrollTo(0)}
        >
          <img className="" src={Fly} alt="flyAction" />
          <p className="text-txfs font-bold ease duration-200 opacity-0 group-hover:opacity-100 rotate-[55deg] scale-x-100 group-hover:-scale-y-100 -translate-x-6 -translate-y-4">
            TOP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
