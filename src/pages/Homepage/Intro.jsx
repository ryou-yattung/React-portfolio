import React, { useEffect } from "react";

// fadeOut
const Intro = ({ setIsHeightOver, toTop }) => {
  const fadeOut = (node, duration) => {
    node.style.opacity = 1;

    var start = performance.now();

    requestAnimationFrame(function tick(timestamp) {
      var easing = (timestamp - start) / duration;

      node.style.opacity = Math.max(1 - easing, 0);

      if (easing < 1) {
        requestAnimationFrame(tick);
      } else {
        node.style.opacity = "";
        node.style.display = "none";
      }
    });
  };

  //scroll function
  const changeDisplayState = () => {
    if (document.scrollingElement.scrollTop > 50) {
      fadeOut(document.querySelector(".fo"), 1200);

      setTimeout(() => {
        setIsHeightOver(false);
        toTop();
      }, 1100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeDisplayState);
    return () => window.removeEventListener("scroll", changeDisplayState);
  });

  return (
    <div className="fo h-[calc(100vh+70px)]">
      <div className="fixed w-screen h-screen introBg">
        <div className="absolute top-52 sm:60 left-10 sm:left-20">
          <h1 className="text-txt sm:text-txts font-bold text-white tracking-widest leading-normal">
            リョウ　イットン
            <br />
            ポートフォリオ
          </h1>
        </div>

        <div className="absolute bottom-44 left-10 sm:bottom-24 sm:left-20 text-white">
          <p className="text-txf sm:text-txfs leading-8">
            香港出身でフロントエンドエンジニアを目指している。
            <br />
            2019年日本に留学し始める。
            <br />
            2020年ECCコンピュータ専門学校に入学して
            <br />
            2023年ECCコンピュータ専門学校を卒業予定。
          </p>
        </div>

        <div className="absolute bottom-0 right-10 sm:right-20 flex justify-between w-10 h-36">
          <span className="relative inline-block left-1 w-1 h-full bg-white before:block before:absolute before:w-3 before:h-3 before:rounded-full before:bg-white before:-inset-x-1 before:m-auto before:animate-[toBottom_2s_ease-in-out_infinite]"></span>
          <p className="vertical-rl text-white">SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
