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
        <div>
          <p></p>
        </div>
      </div>

      <div className="w-full my-10">
        <img src={Work02} alt="work02" className="w-full h-auto object-cover" />
        <div></div>
      </div>

      <div className="w-full my-10">
        <img src={Work03} alt="work03" className="w-full h-auto object-cover" />
        <div></div>
      </div>

      <div className="w-full my-10">
        <img src={Work04} alt="work04" className="w-full h-auto object-cover" />
        <div></div>
      </div>
    </section>
  );
};

export default workDetail;
