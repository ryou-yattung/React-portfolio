import React from "react";
import WorkList from "../../data/WorkList.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Work = ({ workNum, workDetail, setWorkDetail }) => {
  return (
    <section
      className={`w-screen h-screen fixed top-0 z-[60] overflow-y-scroll pb-10 bg-white text-ftcolor ease-in-out duration-700
    ${workDetail ? "right-[0%]" : "right-[-100%]"}`}
    >
      <FontAwesomeIcon
        onClick={() => setWorkDetail(false)}
        icon={faAngleLeft}
        className="absolute top-7 left-7 cursor-pointer text-5xl"
      />
      <div className="h-auto px-10 sm:p-0 text-center">
        <div className="sm:w-screen sm:h-screen mb-8">
          <h1 className="text-txt pt-6 sm:pt-12 text-ftcolor text-center sm:text-7xl font-bold sm:mb-2">
            {WorkList[workNum].name[0]}
          </h1>
          <h2 className="text-txfs leading-[1] mb-8 sm:mb-20 text-ftcolor text-center sm:text-txt sm:font-bold">
            {WorkList[workNum].name[1]}
          </h2>

          <div className="sm:w-[1200px] 2xl:w-[1400px] h-auto m-auto sm:flex flex-nowrap items-center 2xl:mt-36">
            <img
              src={require(`../../img/work${WorkList[workNum].id}.png`)}
              alt={`Work${WorkList[workNum].id}`}
              className="w-full sm:w-3/4 2xl:w-4/5 h-auto m-auto object-contain"
            />
            <div className="hidden sm:block ml-10">
              <h3 className="workh3">制作詳細</h3>
              <p className="text-txf sm:text-txfs mb-10 sm:mb-14 text-center">
                {WorkList[workNum].detail}
              </p>

              <h3 className="workh3">役割分担</h3>
              <p className="text-txf sm:text-txfs mb-10 sm:mb-14 text-center">
                {WorkList[workNum].sharing}
              </p>

              <h3 className="workh3">使用技術</h3>
              <p className="text-txf sm:text-txfs mb-10 sm:mb-14 text-center">
                {WorkList[workNum].code}
              </p>
            </div>
          </div>
        </div>

        <div className="sm:w-[500px] sm:m-auto text-ftcolor">
          <h3 className="workh3">紹介</h3>
          <p className="workp">{WorkList[workNum].intro}</p>
          <h3 className="workh3">力を入れた点</h3>
          <p className="workp">{WorkList[workNum].study}</p>
          <h3 className="workh3">失敗と今後の目標</h3>
          <p className="workp">{WorkList[workNum].fail}</p>
        </div>
        <div className="w-full sm:w-[800px] sm:mx-auto sm:my-20 sm:flex justify-between">
          <p
            onClick={() => window.open(`${WorkList[workNum].githut}`)}
            className="w-full sm:w-[280px] h-[60px] sm:h-[70px] m-auto my-6 text-txfs bg-bgcolor1 font-bold text-center leading-[60px] sm:leading-[70px] cursor-pointer ease duration-500  hover:scale-110"
          >
            Github
          </p>
          <p
            onClick={() => window.open(`${WorkList[workNum].link}`)}
            className="w-full sm:w-[280px] h-[60px] sm:h-[70px] m-auto my-6 text-txfs bg-ftcolor font-bold text-center leading-[60px] sm:leading-[70px] text-white cursor-pointer ease duration-500  hover:scale-110"
          >
            サイトを見る
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
