import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Tri01 from "../../img/tri01.jpeg";
import Tri02 from "../../img/tri02.jpg";
import Tri03 from "../../img/tri03.jpg";
import Tri04 from "../../img/tri04.jpg";
import Tri05 from "../../img/tri05.jpg";
import Tri06 from "../../img/tri06.jpg";

const AboutTri = () => {
  return (
    <section className="relative z-40 w-screen sm:w-full h-auto pb-10 sm:pb-20 bg-white text-ftcolor">
      <h1 className="titleh1 sm:ml-20 sm:tracking-widest font-bold">Travel</h1>
      <h2 className="titleh2 sm:ml-20">旅行</h2>
      <div className="w-screen overflow-x-scroll">
        <div className="h-auto w-[2000px] sm:w-[1000px] 2xl:w-[1200px] m-auto py-10 flex flex-nowrap sm:flex-wrap justify-start sm:justify-between gap-10">
          <div className="w-[300px] 2xl:w-[350px] ml-10 sm:m-0 shadow-xl">
            <img
              src={Tri01}
              alt="tri01"
              className="w-full h-[200px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-2">
                箱根山スキー場
              </h2>
              <div className="w-14 flex justify-center items-center m-auto">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-1 text-bgcolor2 text-txf"
                />
                <h3 className="text-txf font-bold">滋賀県</h3>
              </div>
              <p className="text-txf px-5 py-5">
                日本に来て初めてのスキーで何回も転んでいました。お尻が痛いけど、楽しかったです。
              </p>
            </div>
          </div>

          <div className="w-[300px] 2xl:w-[350px] shadow-xl">
            <img
              src={Tri02}
              alt="tri02"
              className="w-full h-[200px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-2">円月島</h2>
              <div className="w-20 flex justify-center items-center m-auto">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-1 text-bgcolor2 text-txf"
                />
                <h3 className="text-txf font-bold">和歌山県</h3>
              </div>
              <p className="text-txf px-5 py-5">
                最初この小島が何が有名なの？と疑問を持っていましたが、夕方は絶景だった。
              </p>
            </div>
          </div>
          <div className="w-[300px] 2xl:w-[350px] shadow-xl">
            <img
              src={Tri03}
              alt="tri03"
              className="w-full h-[200px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-2">
                殘波岬燈塔
              </h2>
              <div className="w-14 flex justify-center items-center m-auto">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-1 text-bgcolor2 text-txf"
                />
                <h3 className="text-txf font-bold">沖縄</h3>
              </div>
              <p className="text-txf px-5 py-5">
                沖縄といえば海、沖縄の海が世界一番綺麗だと思っています。
              </p>
            </div>
          </div>

          <div className="w-[300px] 2xl:w-[350px] shadow-xl">
            <img
              src={Tri04}
              alt="tri04"
              className="w-full h-[200px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-2">岩湧山</h2>
              <div className="w-14 flex justify-center items-center m-auto">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-1 text-bgcolor2 text-txf"
                />
                <h3 className="text-txf font-bold">大阪</h3>
              </div>
              <p className="text-txf px-6 py-5">
                ４時間かけて山を登ったのですが、ススキの草原が広がっている景色を見ると。登る価値があるなと思いました。{" "}
              </p>
            </div>
          </div>

          <div className="w-[300px] 2xl:w-[350px] shadow-xl">
            <img
              src={Tri05}
              alt="tri05"
              className="w-full h-[200px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-2">若草山</h2>
              <div className="w-14 flex justify-center items-center m-auto">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-1 text-bgcolor2 text-txf"
                />
                <h3 className="text-txf font-bold">奈良</h3>
              </div>
              <p className="text-txf px-5 py-5">
                頂上からは大仏殿をはじめ、奈良公園の眺望がよかった。しかもちょうど茜空を見えて最高です。
              </p>
            </div>
          </div>

          <div className="w-[300px] 2xl:w-[350px] mr-10 sm:m-0 shadow-xl">
            <img
              src={Tri06}
              alt="tri06"
              className="w-full h-[200px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-2">貴船神社</h2>
              <div className="w-12 flex justify-center items-center m-auto">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-1 text-bgcolor2 text-txf"
                />
                <h3 className="text-txf font-bold">京都</h3>
              </div>
              <p className="text-txf px-5 py-5">
                行く日に大雪でとても寒かった。でも大雪で貴船神社の違う姿が見えます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTri;
