import React from "react";
import { Link } from "react-router-dom";
import Rupirasu from "../../img/rupirasu.png";
import graphic from "../../img/graphic.png";

const work = () => {
  //workBlock
  // const [workBlock, setWorkBlock] = useState(true);
  // const workNone = () => {
  //   setWorkBlock(!workBlock);
  // };
  // workNone();

  return (
    <section className="w-full h-auto">
      <div className="sm:flex sm:flex-nowrap sm:justify-between">
        <div>
          <h1 className="titleh1 sm:ml-20">WORKS</h1>
          <h2 className="titleh2 sm:ml-20">作品</h2>
        </div>

        <div className="hidden relative sm:flex mr-20 mt-20 h-[75px] w-[400px] after:absolute after:bottom-0 after:block after:h-1 after:w-full after:bg-ftcolor">
          <p className="w-1/2 text-txfs text-center leading-[70px] bg-ftcolor cursor-pointer">
            サイト
          </p>
          <p className="w-1/2 text-txfs text-center leading-[70px] cursor-pointer">
            グラフィック
          </p>
        </div>
      </div>

      {/* works(web) */}
      <div className="sm:block relative w-full h-auto sm:h-[900px] px-5">
        <div className="hidden sm:block absolute text-[13rem] text-[#372F1F60] tracking-widest leading-none font-bold">
          Website
        </div>

        <div className="hidden sm:block w-[600px] absolute z-30 left-0 2xl:left-20 bottom-0 text-ftcolor">
          <div className="">
            <h3 className="text-txts font-bold ml-14">サイト</h3>
            <h3 className="text-txts font-bold ml-28">Website</h3>
          </div>

          <div className="bg-bgcolor2 px-16 py-14">
            <h4 className="text-txt font-bold text-center">るぴなす</h4>
            <h4 className="text-txf text-[#372F1F60] text-center mb-6">
              Rupinasu
            </h4>
            <p className="text-txfs mb-6">
              るぴなすは若い歳で妊娠した女性や、妊娠したかもしれないと悩む女性に相談する場を設け、女性にとっても赤ちゃんにとって最悪の事態を避けたい。という思いから実現したサービスです。
            </p>

            <div className="flex mb-6 font-bold">
              <p className="mr-5">チーム制作</p>
              <p>2年</p>
            </div>

            <div className="flex font-bold">
              <p className="mr-5">HTML</p>
              <p className="mr-5">CSS</p>
              <p className="mr-5">JS</p>
              <p>PHP</p>
            </div>
          </div>
        </div>

        <img
          src={Rupirasu}
          alt="work1"
          className="object-cover sm:w-[1000px] 2xl:w-[1300px] sm:absolute sm:z-10 sm:right-0 2xl:right-20 sm:top-[140px]"
        />
        {/* phone title */}
        <p className="absolute bottom-0 text-txfs bg-white px-2 sm:hidden">
          るぴなす　<span className="text-txf opacity-70">Rupinasu</span>
        </p>
      </div>

      {/* works(graphic) */}
      <div className="hidden  relative w-[1200px] m-auto h-[1000px] px-5 ">
        <div className="sm:block absolute right-0 text-[13rem] text-[#372F1F60] tracking-widest leading-none font-bold">
          Graphic
        </div>

        <div className="hidden sm:block w-[500px] absolute z-30 right-20 bottom-0 text-ftcolor text-right">
          <div className="">
            <h3 className="text-txts font-bold mr-14">グラフィック</h3>
            <h3 className="text-txts font-bold mr-40">graphics</h3>

            <div className="bg-bgcolor1 px-12 py-14">
              <h4 className="text-txt font-bold text-center mb-5">
                中崎町キャンドル
              </h4>
              <p className="text-txfs text-left mb-6">
                2009年から続く、大阪中崎町で行われている「冬の済美祭り・中崎町キャンドルナイト」です。{" "}
              </p>

              <div className="flex mb-6 font-bold">
                <p className="mr-5">個人制作</p>
                <p>2年</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={graphic}
          alt="graphic"
          className="w-[550px] absolute bottom-20 left-20"
        />
      </div>

      {/* button */}
      <div className="w-[180px] sm:w-[280px] h-[50px] sm:h-[70px] m-auto my-10 sm:my-20">
        <Link
          className="block border-4 border-ftcolor bg-ftcolor text-white text-txfs sm:text-2xl sm:leading-[60px] leading-[40px] text-center ease-in duration-200 hover:text-ftcolor hover:bg-white"
          to="/works"
          onClick={() => window.scrollTo(0, 0)}
        >
          もっと詳しく
        </Link>
      </div>
    </section>
  );
};

export default work;
