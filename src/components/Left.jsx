import React from "react";
import PDF from "./PDF";

const Left = () => {
  return (
    <div className="left">
      <div className="preview">
        <div className="page">
          <div className="scale">
            <PDF />
          </div>
        </div>
        <div>1</div>
      </div>
      <h1>Made by Yash</h1>
    </div>
  );
};

export default Left;
