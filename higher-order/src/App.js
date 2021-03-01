import "./App.css";
import React, { useState } from "react";
import "./Subcomponents/ChildComponents";
import ChildComponents from "./Subcomponents/ChildComponents";
// Use hooks to init the state for the click right and click left buttons
// Use the spread syntax to initialize and assign the props {//variables here//}

function App() {
  return (
    <div>
      simple example with spread operator
      {/* <Increase currentNum={firstCounter} increase={() => firstCounter(firstCounter + 1)} /> */}
      {/* ChildComponents.js */}
      <div>
        <ChildComponents />
      </div>
    </div>
  );
}

export default App;
