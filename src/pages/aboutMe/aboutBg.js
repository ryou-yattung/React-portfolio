import React from "react";
import MyImg from "../../img/intro2.jpg";

const aboutBg = () => {
  return (
    <section className="w-screen h-auto pt-[10vh]">
      <h1 className="text-txt text-center">About me</h1>
      <h2 className="text-txf font-light text-center mb-3">自己紹介</h2>

      <div className="relative w-screen h-[300px] bg-intro2 bg-contain bg-no-repeat">
        <h3 className="text-txt font-bold font-ftcolor ml-6">リョウイットン</h3>
        <p className="text-txf font-ftcolor ml-6">
          香港出身で、フォントエンジニアを目指している。
          <br />
          2019年日本に留学し始める。 2020年ECCコンピュータ専門学校に入学して
          <br />
          2022年ECCコンピュータ専門学校を卒業予定。
        </p>
        <h4 className="font-ftcolor ml-6">好きなこと：水泳・アニメ・旅行</h4>
        {/* <img src={MyImg} alt="myimg" className="object-cover" /> */}
      </div>
    </section>
  );
};

export default aboutBg;
