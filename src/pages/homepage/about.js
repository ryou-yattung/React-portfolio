import React from "react";
import MyImg from "../../img/intro2.jpg";

const about = () => {
  return (
    <section className="relative z-20 w-screen h-auto sm:before:w-[calc(100%-30px)] before:w-full before:h-[520px] sm:before:h-[1000px] before:block before:absolute before:z-10 before:top-[-30vh] before:bg-bgcolor1">
      <div className="relative z-30 w-screen h-auto">
        <h1 className="titleh1 sm:ml-20">About me</h1>
        <h2 className="titleh2 sm:ml-20 ">自己紹介</h2>
        <div className="w-[90%] m-auto sm:m-0 flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center">
          <img
            src={MyImg}
            alt="myphone"
            className="w-[200px] sm:w-[600px] h-[148px] sm:h-auto object-cover"
          />
          <div className="absolute left-4 sm:static sm:ml-16 text-ftcolor 2xl:flex">
            {/* 2xl */}
            <div>
              <h3 className="text-2xl sm:text-txts mb-3 sm:mb-8 font-bold">
                リョウイットン
              </h3>
              <p className="text-txf sm:text-[1rem] leading-6 sm:leading-8 font-bold mb-5">
                香港出身でフロントエンドエンジニアを目指している。
                <br />
                2019年日本に留学し始める。
                <br />
                2020年ECCコンピュータ専門学校に入学して
                <br />
                2023年ECCコンピュータ専門学校を卒業予定。
              </p>
            </div>

            <div className="hidden sm:block">
              <h4 className="text-txfs font-bold mb-2">人生の軸</h4>
              <p className="text-txf w-[400px]">
                常に新しいことに挑戦する。新しいことに直面旅に、それを
                乗り越えたら新しいスキルを身につけ、自分の限界も超える気
                がするから。例えば初めて自分のサイトを作るとき、本当にで
                きるのか、どこまでできるのかと不安と感じました。でもサイ
                トができた時、想像よりいい感じではないかと思って、自分の
                限界を超えた気がする。しかも達成感はこれ以上ないです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
