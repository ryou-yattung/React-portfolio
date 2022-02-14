import React, { useEffect, useState } from "react";
import WorkDetail from "./Works/WorkDetail";
import Work from "./Works/Work";
// import WorkList from "../../data/WorkList.json";

const Index = () => {
  const [workNum, setWorkNum] = useState(0);
  useEffect(() => {
    console.log(workNum);

    return console.log(workNum);
  });

  return (
    <>
      <WorkDetail setWorkNum={setWorkNum} />
      <Work workNum={workNum} />
    </>
  );
};

export default Index;
