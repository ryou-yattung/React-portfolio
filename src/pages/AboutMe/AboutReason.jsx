import React from "react";
import { Link as Scroll } from "react-scroll";
import JpImg from "../../img/about_jap.jpeg";
import TriImg from "../../img/about_tri.jpeg";
import WebImg from "../../img/about_web.jpeg";

const AboutReason = () => {
  const aaa = () => {
    console.log(this);
  };

  return (
    <section className="relative z-0 w-screen h-auto">
      {/* bg */}
      <div className="w-full h-screen fixed top-0 z-10 bg-aboutBg bg-cover bg-center bg-no-repeat sm:opacity-40"></div>
      <div className="relative z-20 sm:w-[1000px] sm:h-[1700px] mx-5 my-10  sm:m-auto">
        <div className="hidden sm:block absolute top-10 left-0 w-[300px] h-auto bg-white shadow-lg cursor-pointer">
          <Scroll to="whyJapan" smooth={true} duration={800}>
            <p
              className="text-txfs text-ftcolor p-12 ease duration-300 hover:bg-ftcolor hover:text-white"
              onClick={aaa}
            >
              １、どうして日本に？
            </p>
          </Scroll>

          <Scroll to="whyTri" smooth={true} duration={800}>
            <p className="text-txfs text-ftcolor p-12 ease duration-300 hover:bg-ftcolor hover:text-white">
              ２、どうして旅行が好き？
            </p>
          </Scroll>

          <Scroll to="whyWeb" smooth={true} duration={800}>
            <p className="text-txfs text-ftcolor p-12 ease duration-300 hover:bg-ftcolor hover:text-white">
              ３、どうしてWEBコース？
            </p>
          </Scroll>
        </div>

        <div
          className="sm:absolute top-10 right-0 sm:w-[600px] h-auto text-ftcolor"
          id="whyJapan"
        >
          <div className="sm:w-[600px] h-auto mb-10 pb-10 bg-white shadow-2xl">
            <img
              className="w-full sm:h-[300px] object-cover"
              src={JpImg}
              alt="jpimg"
            />
            <h1 className="text-txfs sm:text-2xl font-bold px-10 py-8">
              1、どうして日本に？
            </h1>
            <p className="text-txf sm:text-txfs px-10">
              中学生の時、一回日本に旅行へ行って日本の景色を見た後、好きになった。日本は香港と違って四季がはっきりしているから、それは香港が決して見られないことだからです。
            </p>
          </div>

          <div
            className="sm:w-[600px] h-auto mb-10 pb-10 bg-white shadow-2xl"
            id="whyTri"
          >
            <img
              className="w-full sm:h-[300px] object-cover"
              src={TriImg}
              alt="triImg"
            />
            <h1 className="text-txfs sm:text-2xl font-bold px-10 py-8">
              2、どうして旅行が好き？
            </h1>
            <p className="text-txf sm:text-txfs px-10">
              香港にいる時、たまに国際交流会に参加していた。様々な国籍な人と出会って、色々な異文化の話を聞いて、外国に行ってみたいなという気持ちが現れた。
            </p>
          </div>

          <div
            className="sm:w-[600px] h-auto mb-10 pb-10 bg-white shadow-2xl"
            id="whyWeb"
          >
            <img
              className="w-full sm:h-[300px] object-cover"
              src={WebImg}
              alt="webimg"
            />
            <h1 className="text-txfs sm:text-2xl font-bold px-10 py-8">
              ３、どうしてWEBコース？
            </h1>
            <p className="text-txf sm:text-txfs px-10">
              昔旅行ブログが好きでブログを通じて色々な人の旅行体験と経験をみられるから。その時WEBの魅力を感じ、WEBコースを選んた。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReason;
