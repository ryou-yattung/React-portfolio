import React from "react";
import Work01 from "../../img/work01.png";
import Work02 from "../../img/work02.png";
import Work03 from "../../img/work03.png";
import Work04 from "../../img/work04.png";

const workDetail = () => {
  return (
    <section className="w-screen h-auto px-10 pt-[10vh] text-ftcolor">
      <h1 className="titleh1">WORKS</h1>
      <h2 className="titleh2">作品</h2>

      <div className="w-full my-10">
        <img src={Work01} alt="work01" className="w-full h-auto object-cover" />
        <h3 className="text-txfs font-bold text-center mt-3">
          るぴなす/RUPINASU
        </h3>
        <div className="hidden sm:block">
          <p className="text-txf font-light my-5 text-left">
            季茶は梅田にある喫茶店である。平日は喫茶店で週末は陶芸教室である。授業が終わった後、お茶一杯飲んで勉強が集中できる。陶芸教室は自分の手で自分のカップを作り、店に来るときにカップは持参できる。
          </p>
        </div>
      </div>

      <div className="w-full my-10">
        <img src={Work04} alt="work04" className="w-full h-auto object-cover" />
        <h3 className="text-txfs font-bold text-center mt-3">
          ポートフォリオ/PORTFOLIO
        </h3>
        <div className="hidden sm:block">
          <p className="text-txf font-light my-5 ">
            季茶は梅田にある喫茶店である。平日は喫茶店で、週末は陶芸教室である。梅田は色々な学校があるから、授業が終わった後、お茶一杯飲んで勉強が集中できる。陶芸教室は自分の手で自分のカップを作り、店に来るときにカップは持参できる。
          </p>
        </div>
      </div>

      <div className="w-full my-10">
        <img src={Work02} alt="work02" className="w-full h-auto object-cover" />
        <h3 className="text-txfs font-bold text-center mt-3">
          ぼちたび/BOTITABI
        </h3>
        <div className="hidden sm:block">
          <p className="text-txf font-light my-5 ">
            季茶は梅田にある喫茶店である。平日は喫茶店で、週末は陶芸教室である。梅田は色々な学校があるから、授業が終わった後、お茶一杯飲んで勉強が集中できる。陶芸教室は自分の手で自分のカップを作り、店に来るときにカップは持参できる。
          </p>
        </div>
      </div>

      <div className="w-full my-10">
        <img src={Work03} alt="work03" className="w-full h-auto object-cover" />
        <h3 className="text-txfs font-bold text-center mt-3">喫茶/KICHA</h3>
        <div className="hidden sm:block">
          <p className="text-txf font-light my-5 ">
            季茶は梅田にある喫茶店である。平日は喫茶店で、週末は陶芸教室である。梅田は色々な学校があるから、授業が終わった後、お茶一杯飲んで勉強が集中できる。陶芸教室は自分の手で自分のカップを作り、店に来るときにカップは持参できる。
          </p>
        </div>
      </div>
    </section>
  );
};

export default workDetail;
