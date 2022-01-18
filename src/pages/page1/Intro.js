// import React, { useEffect, useState } from "react";

// const scrollTop = (): number => {
//   return Math.max(
//     window.pageYOffset,
//     document.documentElement.scrollTop,
//     document.body.scrollTop
//   );
// };

const Intro = () => {
  return (
    <div className="h-[calc(100vh + 100px)]">
      <div className="fixed w-screen h-screen introBg">
        <div className="absolute top-52 sm:60 left-20">
          <h1 className="text-3xl sm:4xl font-bold text-white tracking-widest leading-normal">
            リョウ　イットン
            <br />
            ポートフォリオ
          </h1>
        </div>

        <div className="absolute bottom-44 left-10 sm:bottom-24 sm:left-20 text-white">
          <p className="text-sm sm:text-base leading-7">
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
          <span className="relative inline-block left-1 w-1 h-full bg-white before:block before:absolute before:w-3 before:h-3 before:rounded-full before:bg-white before:-inset-x-1 before:m-auto before:animate-[aaa_2s_ease-in-out_infinite]"></span>
          <p className="vertical-rl text-white">SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
