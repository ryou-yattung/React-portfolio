import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Tri01 from "../../img/tri01.jpeg";
import Tri02 from "../../img/tri02.jpg";
import Tri03 from "../../img/tri03.jpg";
import Tri04 from "../../img/tri04.jpg";
import Tri05 from "../../img/tri05.jpg";
import Tri06 from "../../img/tri06.jpg";

const aboutTri = () => {
  return (
    <section className="relative z-40 w-full h-auto py-20 bg-white">
      <div className="w-[1000px] m-auto flex flex-wrap justify-between gap-10">
        <div className="w-[300px] shadow-xl">
          <img
            src={Tri01}
            alt="tri01"
            className="w-full h-[200px] object-cover"
          />
          <div>
            <h1>箱根山スキー場</h1>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h2>滋賀県</h2>
            <p></p>
          </div>
        </div>
        <div className="w-[300px]">
          <img
            src={Tri02}
            alt="tri02"
            className="w-full h-[200px] object-cover"
          />
          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="w-[300px]">
          <img
            src={Tri03}
            alt="tri03"
            className="w-full h-[200px] object-cover"
          />
          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="w-[300px]">
          <img
            src={Tri04}
            alt="tri04"
            className="w-full h-[200px] object-cover"
          />
          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="w-[300px]">
          <img
            src={Tri05}
            alt="tri05"
            className="w-full h-[200px] object-cover"
          />
          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="w-[300px]">
          <img
            src={Tri06}
            alt="tri06"
            className="w-full h-[200px] object-cover"
          />
          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutTri;
