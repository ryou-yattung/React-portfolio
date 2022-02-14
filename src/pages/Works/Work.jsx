import React from "react";
import WorkList from "../../data/WorkList.json";

const Work = () => {
  return (
    <section>
      <h1>aaa</h1>
      {WorkList.map((workList, index) => {
        return <h1 key={index}>{workList.name[0] + "/" + workList.name[0]}</h1>;
      })}
    </section>
  );
};

export default Work;
