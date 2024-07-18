import React from "react";
import PDF from "./PDF";

const Left = ({isOpen}) => {
  return (
    <div className={`left ${isOpen? "":"closel"} `}>
      <div className="preview">
        <div className="page">
          <div className="scale">
            <PDF />
          </div>
        </div>
        <div>1</div>
      </div>
      <h1></h1>
    </div>
  );
};

export default Left;
