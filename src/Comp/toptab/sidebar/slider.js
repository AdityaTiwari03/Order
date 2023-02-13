import React from "react";
import { useState } from "react";
import "./slider.css";
function Slider() {
  function hi() {
    var x = document.getElementById("icon");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const [theme, changetheme] = useState("white");
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }
  document.getElementsByClassName("div").style.width = "10px";
  return (
    <div>
      <div onClick={closeNav} className="hello">
        Close
      </div>
      <br />
      <h2>Change Theme</h2>
      <br />
      <h3 onClick={() => changetheme("white") + hi}>Black</h3>
      <h3 onClick={() => changetheme("Black") + hi}>White</h3>
    </div>
  );
}

export default Slider;
