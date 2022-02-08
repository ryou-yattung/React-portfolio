import React from "react";
import Work01 from "../../img/work01.png";
import Work02 from "../../img/work02.png";
import Work03 from "../../img/work03.png";
import Work04 from "../../img/work04.png";

const workDetail = () => {
  return (
    <section className="w-screen h-auto px-10 pt-[10vh] text-ftcolor">
      <h1 className="titleh1 sm:ml-20">Works</h1>
      <h2 className="titleh2 sm:ml-20">作品</h2>

      <div className="w-full sm:w-[1200px] m-auto my-10 sm:my-20 2xl:my-32 sm:flex flex-nowrap justify-start">
        <img
          src={Work01}
          alt="work01"
          className="w-full sm:w-[600px] h-auto object-contain"
        />

        <div className="sm:w-[600px] h-auto px-14">
          <h3 className="text-txfs sm:text-txt font-bold text-center mt-3 sm:m-0">
            るぴなす/RUPINASU
          </h3>

          <div className="hidden sm:block">
            <p className="text-txfs font-light my-5 text-left">
              るぴなすは若い歳で妊娠した女性や、妊娠したかもしれないと悩む女性に相談する場を設け、
              女性にとっても赤ちゃんにとっても、最悪の事態を避けたい。という思いから実現したサービスです。
            </p>

            <div className="flex items-center mb-10">
              <h4 className="mr-3 px-4 py-2 bg-bgcolor2 font-bold">コード</h4>
              <p className="mr-8 text-txfs font-bold">PUG</p>
              <p className="mr-8 text-txfs font-bold">SASS</p>
              <p className="mr-8 text-txfs font-bold">JS</p>
              <p className="mr-8 text-txfs font-bold">PHP</p>
            </div>

            <div className="w-full m-auto flex justify-between">
              <a className="text-txfs font-bold bg-bgcolor1 px-16 py-5">
                もっと詳しく
              </a>
              <a className="text-txfs font-bold bg-ftcolor text-white px-16 py-5">
                サイトを見る
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[1200px] m-auto my-10 sm:my-20 2xl:my-32 sm:flex flex-nowrap justify-start">
        <img
          src={Work04}
          alt="work04"
          className="w-full sm:w-[600px] h-auto object-contain"
        />

        <div className="sm:w-[600px] h-auto sm:px-14">
          <h3 className="text-txfs sm:text-txt font-bold text-center mt-3 sm:m-0">
            ポートフォリオ/PORTFOLIO
          </h3>

          <div className="hidden sm:block">
            <p className="text-txfs font-light my-5 text-left">
              るぴなすは若い歳で妊娠した女性や、妊娠したかもしれないと悩む女性に相談する場を設け、
              女性にとっても赤ちゃんにとっても、最悪の事態を避けたい。という思いから実現したサービスです。
            </p>

            <div className="flex items-center mb-10">
              <h4 className="mr-3 px-4 py-2 bg-bgcolor2 font-bold">コード</h4>
              <p className="mr-8 text-txfs font-bold">REACT</p>
              <p className="mr-8 text-txfs font-bold">TAILWINDCSS</p>
            </div>

            <div className="w-full m-auto flex justify-between">
              <a className="text-txfs font-bold bg-bgcolor1 px-16 py-5">
                もっと詳しく
              </a>
              <a className="text-txfs font-bold bg-ftcolor text-white px-16 py-5">
                サイトを見る
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[1200px] m-auto my-10 sm:my-20 2xl:my-32 sm:flex flex-nowrap justify-start">
        <img
          src={Work02}
          alt="work02"
          className="w-full sm:w-[600px] h-auto object-contain"
        />

        <div className="sm:w-[600px] h-auto px-14">
          <h3 className="text-txfs sm:text-txt font-bold text-center mt-3 sm:m-0">
            ぼちたび/BOTITABI
          </h3>

          <div className="hidden sm:block">
            <p className="text-txfs font-light my-5 text-left">
              るぴなすは若い歳で妊娠した女性や、妊娠したかもしれないと悩む女性に相談する場を設け、
              女性にとっても赤ちゃんにとっても、最悪の事態を避けたい。という思いから実現したサービスです。
            </p>

            <div className="flex items-center mb-10">
              <h4 className="mr-3 px-4 py-2 bg-bgcolor2 font-bold">コード</h4>
              <p className="mr-8 text-txfs font-bold">PUG</p>
              <p className="mr-8 text-txfs font-bold">SASS</p>
              <p className="mr-8 text-txfs font-bold">JS</p>
              <p className="mr-8 text-txfs font-bold">PHP</p>
            </div>

            <div className="w-full m-auto flex justify-between">
              <a className="text-txfs font-bold bg-bgcolor1 px-16 py-5">
                もっと詳しく
              </a>
              <a className="text-txfs font-bold bg-ftcolor text-white px-16 py-5">
                サイトを見る
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[1200px] m-auto my-10 sm:my-20 2xl:my-32 sm:flex flex-nowrap justify-start">
        <img
          src={Work03}
          alt="work03"
          className="w-full sm:w-[600px] h-auto object-contain"
        />

        <div className="sm:w-[600px] h-auto px-14">
          <h3 className="text-txfs sm:text-txt font-bold text-center mt-3 sm:m-0">
            喫茶/KICHA
          </h3>

          <div className="hidden sm:block">
            <p className="text-txfs font-light my-5 text-left">
              るぴなすは若い歳で妊娠した女性や、妊娠したかもしれないと悩む女性に相談する場を設け、
              女性にとっても赤ちゃんにとっても、最悪の事態を避けたい。という思いから実現したサービスです。
            </p>

            <div className="flex items-center mb-10">
              <h4 className="mr-3 px-4 py-2 bg-bgcolor2 font-bold">コード</h4>
              <p className="mr-8 text-txfs font-bold">HTML</p>
              <p className="mr-8 text-txfs font-bold">CSS</p>
              <p className="mr-8 text-txfs font-bold">JS</p>
            </div>

            <div className="w-full m-auto flex justify-between">
              <a className="text-txfs font-bold bg-bgcolor1 px-16 py-5">
                もっと詳しく
              </a>
              <a className="text-txfs font-bold bg-ftcolor text-white px-16 py-5">
                サイトを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default workDetail;
