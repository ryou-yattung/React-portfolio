import React from "react";
import Book from "../../img/book.png";
import Pen from "../../img/pen.png";
import Computer from "../../img/computer.png";

const challenge = () => {
  return (
    <section className="relative z-10 w-full h-auto sm:pb-16 sm:h-auto sm:ml-[30px] sm:pt-32 bg-bgcolor2">
      <h1 className="titleh1 sm:text-right sm:mr-20">Challenge</h1>
      <h2 className="titleh2 sm:text-right sm:mr-20">常に挑戦すること</h2>

      <div className="flex justify-around align-center flex-wrap sm:flex-nowrap overflow-scroll">
        <div className="text-center w-[400px] px-9 mb-16">
          <h3 className="text-txt text-ftcolor sm:text-txts">ゲンゴ</h3>
          <h4 className="text-txf text-[#71613f] font-bold mb-8">LANGUAGE</h4>
          <img src={Book} alt="book" className="w-[100px] m-auto mb-8" />
          <p className="text-left text-txf sm:text-txfs">
            日本に来てから、ずっと日本語を勉強していま
            す。最初は日本語全然喋られなかったけど、今では日本語能力試験N1に合格しました。
          </p>
        </div>

        <div className="text-center w-[400px] px-9 mb-16">
          <h3 className="text-txt text-ftcolor sm:text-txts">デザイン</h3>
          <h4 className="text-txf  text-[#71613f] font-bold mb-8">DESIGN</h4>
          <img src={Pen} alt="pen" className="w-[100px] m-auto mb-8" />
          <p className="text-left text-txf sm:text-txfs">
            WEBデザインコースから色々なデザインツールを
            勉強し、身につけました。中崎町キャン
            ドルナイトというポスター募集に参加して1位を収まりました。
          </p>
        </div>

        <div className="text-center w-[400px] px-9 mb-16">
          <h3 className="text-txt text-ftcolor sm:text-txts">コーディング</h3>
          <h4 className="text-txf text-[#71613f] font-bold mb-8">CODING</h4>
          <img
            src={Computer}
            alt="computer"
            className="w-[100px] m-auto mb-8"
          />
          <p className="text-left text-txf sm:text-txfs">
            フロントエンドエンジニアを目指し、学校以外の時間
            にデータベースを独学で勉強しています。今ではPHPでログイン機能がで
            きるようになりました。
          </p>
        </div>
      </div>
    </section>
  );
};

export default challenge;
