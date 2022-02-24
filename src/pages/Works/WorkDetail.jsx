import React from "react";
import WorkList from "../../data/WorkList.json";

const WorkDetail = ({ setWorkNum, setWorkDetail }) => {
  return (
    <section className="w-screen h-auto px-10 pt-[10vh] text-ftcolor">
      <h1 className="titleh1 sm:ml-20">Works</h1>
      <h2 className="titleh2 sm:ml-20">作品</h2>

      {/* 作品はここから */}
      {WorkList.map((work, workDetail) => {
        return (
          <div
            key={workDetail}
            className="w-full sm:w-[1200px] m-auto my-10 sm:my-32 sm:flex flex-nowrap justify-start"
          >
            <img
              onClick={() => {
                setWorkNum(`${work.num}`);
                setWorkDetail(true);
              }}
              src={require(`../../img/work${work.id}.png`)}
              alt={`Work${work.id}`}
              className="w-full sm:w-[600px] h-auto object-contain"
            />

            <div className="sm:w-[600px] h-auto sm:px-14">
              <h3 className="text-txfs sm:text-txt font-bold text-center mt-3 sm:m-0">
                {work.name[0] + "/" + work.name[1]}
              </h3>

              <div className="hidden sm:block">
                <p className="text-txfs font-light my-5 text-left">
                  {work.intro}
                </p>

                <div className="flex items-center mb-10">
                  <h4 className="mr-3 px-4 py-2 bg-bgcolor2 font-bold">
                    使用技術
                  </h4>

                  <p className="mr-8 text-txfs font-bold">{work.code}</p>
                </div>

                <div className="w-full m-auto flex justify-between">
                  <p
                    onClick={() => {
                      setWorkNum(`${work.num}`);
                      setWorkDetail(true);
                    }}
                    className="text-txfs font-bold bg-bgcolor1 px-16 py-5 cursor-pointer ease duration-500  hover:scale-110"
                  >
                    詳細を見る
                  </p>
                  <p
                    onClick={() => window.open(`${work.link}`)}
                    className="text-txfs font-bold bg-ftcolor text-white px-16 py-5 cursor-pointer ease duration-500  hover:scale-110"
                  >
                    WEBサイト
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WorkDetail;
