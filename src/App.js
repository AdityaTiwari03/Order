import "./App.css";
import React from "react";
import Toptab from "./Comp/toptab/Toptab";
import Box1 from "./Comp/3boxes/Box1";
import Box2 from "./Comp/3boxes/Box2";
import Box3 from "./Comp/3boxes/Box3";
import Horiblock from "./Comp/horiblock/Horiblock";
import Mapblock from "./Comp/mapblock/Mapblock";
import Scroll from "./Comp/scrolltotop/Scroll";
import Sidebar from "./Comp/sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Toptab /> <br /><br /><br /><br /><br />
      <Box1 />  
      <Box2 />
      <Box3 />
      <Sidebar /> 
      <Horiblock />
      <Mapblock />
      <Scroll />
    </div>
  );
}

export default App;
