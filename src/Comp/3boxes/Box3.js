import React from "react";
import "./Boxes.css";

function Box3(props) {
  return (
    <div>
      <div className="div">
        <h1 className="sheadings">Feeds</h1>
        <div className="block"> </div>
        <div className="iconlike">
          <iconify-icon icon="wpf:like"></iconify-icon>{" "}
        </div>
        <div className="iconcom">
          {" "}
          <iconify-icon icon="ic:baseline-mode-comment"></iconify-icon>
        </div>
      </div>
    </div>
  );
}

export default Box3;
