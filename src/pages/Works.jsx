import React, { useState } from "react";
import WorkDetail from "./Works/WorkDetail";
import Work from "./Works/Work";

const Index = () => {
  // WorkNum change state
  const [workNum, setWorkNum] = useState(0);

  // WorkPage change state
  const [workDetail, setWorkDetail] = useState(false);

  // console.log(workNum, workDetail);

  return (
    <div className="relative">
      <WorkDetail setWorkNum={setWorkNum} setWorkDetail={setWorkDetail} />
      <Work
        workNum={workNum}
        workDetail={workDetail}
        setWorkDetail={setWorkDetail}
      />
    </div>
  );
};

export default Index;
