import "./App.css";
import React, { useState } from "react";
// Use hooks to init the state for the click right and click left buttons
// Use the spread syntax to initialize and assign the props {//variables here//}

const Increase = ({ increase, currentNum }) => (
  <button onClick={increase}> {currentNum} </button>
);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Hello world!
      <Increase currentNum={counter} increase={() => setCounter(counter + 1)} />
    </div>
  );
}

export default App;
