import React from "react";
import "./Boxes.css";
function Box1(props) {
  const d = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  return (
    <div>
      <div className="div">
        <p id="heading">Date</p>{" "}
        <p class="des">{d.getDate() + ", " + month + ", " + year} </p>
        <p id="heading">Order was booked on </p>{" "}
        <p class="des" id="time">
          Click "Place"
        </p>
        <p id="heading">Description</p>
        <p id="order" class="des"></p>
      </div>
    </div>
  );
}

export default Box1;
