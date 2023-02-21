import React from "react";
import "./sidebar.css";
function sidebar(props) {
  return (
    <div>
      <ul>
        <li id="hi">
          <a href="made by.html">
            <iconify-icon icon="healthicons:ui-user-profile-outline" />
          </a>
        </li>
        <li id="hi">
          <a href="made by.html">
            <iconify-icon icon="uil:calender" />
          </a>
        </li>
        <li id="hi">
          <a href="made by.html">
            <iconify-icon icon="material-symbols:phone-enabled-sharp" />
          </a>
        </li>
        <li id="hi">
          <a href="made by.html">
            <iconify-icon icon="mdi:about-circle-outline" />
          </a>
        </li>
       </ul>
    </div>
  );
}

export default sidebar;
