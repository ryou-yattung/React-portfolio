import React from "react";

const aboutBg = () => {
  return (
    <section className="w-screen sm:h-screen pt-[10vh] sm:p-0">
      <h1 className="relative z-30 text-txt sm:text-txh1 text-center text-ftcolor font-bold sm:translate-y-16">
        About me
      </h1>
      <h2 className="sm:hidden text-txf font-light text-center text-ftcolor mb-3">
        自己紹介
      </h2>

      <div className="relative z-20 w-screen sm:w-[1000px] h-[250px] sm:h-[600px] m-auto bg-white/20 bg-intro2 bg-cover bg-no-repeat">
        <div className="sm:hidden bg-white/20 sm:bg-transparent w-full h-full">
          <h3 className="text-2xl font-bold tracking-widest font-ftcolor pt-20 pl-3">
            リョウイットン
          </h3>
          <p className="text-txf font-ftcolor leading-5 pt-6 pl-3">
            香港出身で、フォントエンジニアを目指している。
            <br />
            2019年日本に留学し始める。
            <br />
            2020年ECCコンピュータ専門学校に入学して
            <br />
            2022年ECCコンピュータ専門学校を卒業予定。
          </p>
          <h4 className="font-ftcolor text-txfs font-bold pt-2 pl-3">
            好きなこと：水泳・アニメ・旅行
          </h4>
        </div>
        {/* <img src={MyImg} alt="myimg" className="object-cover" /> */}
      </div>
    </section>
  );
};

export default aboutBg;
