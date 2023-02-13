import React from "react";
import "./mapblock.css";
function Mapblock(props) {
  return (
    <div>
      <div className="mapblock">
        <iframe
          className="gmap_iframe"
          frameBorder={"0"}
          scrolling="no"
          marginHeight={"0"}
          marginWidth={"0"}
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=IIT Bhilai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <div className="comp">
          <h2> Indian Institute of Technology Bhilai </h2>
          GEC Campus, Old Dhamatari Rd, Sejbahar, Chhattisgarh{" "}
        </div>
      </div>
    </div>
  );
}

export default Mapblock;
