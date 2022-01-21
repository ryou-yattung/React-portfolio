import React from "react";
import Fly from "../img/fly.png";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-bgcolor1">
      <div className="text-center mb-9 pt-8">
        <h2 className="text-4xl">Contact</h2>
        <h3 className="text-xs">お問い合わせ</h3>
      </div>

      <div className="mb-3 text-center">
        <a
          href="mailto:yattungleung159@gmail.com"
          className="w-auto border-solid border-b-2 border-ftcolor tracking-widest font-l"
        >
          yattungleung159@gmail.com
        </a>
      </div>

      <div className="text-center">
        <p className="text-xs tracking-tighter">
          Webサイトにご訪問いただき、ありがとうございます。
          <br />
          気軽にご連絡ください。
        </p>
      </div>

      <div className="w-full h-20 relative">
        <img
          className="w-8 h-8 absolute right-1/2 bottom-0 transformA animeFly cursor-pointer"
          src={Fly}
          alt="flyAction"
        />
        <p className="absolute right-1/2 bottom-0 animeFly">TOP</p>
      </div>
    </footer>
  );
};

export default Footer;
