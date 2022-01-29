import React from "react";

const aboutReason = () => {
  return (
    <section className="relative z-0 w-screen h-[1000px]">
      {/* bg */}
      <div className="w-full h-screen fixed top-0 z-10 bg-aboutBg bg-cover opacity-40"></div>
      <div className="relative z-20 w-[1000px] h-full m-auto">
        <div className="hidden sm:block absolute top-10 left-0 w-[300px] h-auto bg-white shadow-lg cursor-pointer">
          <p className="text-txfs text-ftcolor p-10 hover:bg-ftcolor hover:text-white">
            １、どうして日本に？
          </p>
          <p className="text-txfs text-ftcolor p-10 hover:bg-ftcolor hover:text-white">
            ２、どうして旅行が好き？
          </p>
          <p className="text-txfs text-ftcolor p-10 hover:bg-ftcolor hover:text-white">
            ３、どうしてWEBコース？
          </p>
        </div>

        <div className="absolute top-10 right-0 w-[600px] h-auto bg-slate-500">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default aboutReason;
