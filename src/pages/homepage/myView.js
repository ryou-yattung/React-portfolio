import React from "react";
import Intro from "../../img/intro.jpg";

const myView = () => {
  return (
    <div className="w-screen h-screen relative z-30 overflow-hidden">
      <div className="w-full h-full sm:h-[85%]  sm:bg-none">
        <img
          className="w-full h-full object-cover sm:pl-[230px] "
          src={Intro}
          alt=""
        />
      </div>

      <div className="absolute bottom-40 sm:bottom-1/3 left-10 sm:left-[70px]">
        <h2 className="text-txt sm:text-txts text-white sm:text-ftcolor sm:font-bold sm:tracking-[1rem]">
          新しい<span className="text-white">体験をし</span>
          <br />
          新発想<span className="text-white">を生み出す</span>
        </h2>
      </div>

      <section className="hidden sm:block w-[400px] h-auto absolute bottom-[15%] sm:left-[65px] bg-white/60">
        <p className="text-txf font-semibold py-3 px-5">
          自分の知らない土地、自分の知らない言語、自分
          の知らない人と出会い。まだみぬ場所に行けば自ず
          と学びも増え、楽しいあまりです。新しい体験をた
          くさんし、視野が広がり、新発想も生み出すと思う
        </p>
      </section>

      <div className="hidden sm:block absolute bottom-[3%] right-[200px]">
        <h2 className="text-[10rem] text-white tracking-[3rem]">travel</h2>
      </div>

      <div className="absolute bottom-0 right-10 sm:right-20 flex justify-between w-10 h-[15%]">
        <span className="relative inline-block left-1 w-1 h-full bg-white before:block before:absolute before:w-3 before:h-3 before:rounded-full before:bg-white before:-inset-x-1 before:m-auto before:animate-[toBottom_2s_ease-in-out_infinite]"></span>
        <p className="vertical-rl text-white">SCROLL</p>
      </div>
    </div>
  );
};

export default myView;
