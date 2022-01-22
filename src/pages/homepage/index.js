import React from "react";
import Intro from "../../img/intro.jpg";

const index = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-full sm:h-[85%] introBg sm:bg-none">
        <img
          className="w-full h-full object-cover sm:pl-[230px] hidden sm:block"
          src={Intro}
          alt=""
        />
      </div>

      <div className="absolute bottom-1/4 left-[120px]">
        <h2 className="text-txt">
          新しい<span>体験をし</span>
          <br />
          新発想<span>を生み出す</span>
        </h2>
      </div>
    </div>
  );
};

export default index;
