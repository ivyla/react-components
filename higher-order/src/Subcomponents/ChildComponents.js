import React, { useState } from "react";

// Let's refactor our application so that it's
// composed of three smaller components, one component
//  for displaying the counter and two components for buttons.

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}> {text} </button>
);
const Display = ({ counter }) => <div> {counter} </div>;

function ChildComponents() {
  const [counter, setCounter] = useState(0);
  const IncreaseByOne = () => setCounter(counter + 1);
  const ResetCounter = () => setCounter(0);

  return (
    <div>
      Hello child components
      <Button text="Decrease counter" handleClick={IncreaseByOne} />
      <Button text="Reset counter" handleClick={ResetCounter} />
      <Display counter={counter} />
    </div>
  );
}

export default ChildComponents;
