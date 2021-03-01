import React, { useState } from "react";
// Have left and right in a single object - more complex, but just making for practice
// Very basic practice with updating the object

const ComplexState = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  //   const addLeft = () => addClicks({ ...clicks, left: clicks.left + 1 });
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };
  return (
    <div>
      <button onClick={handleLeftClick}> Left </button>
      <p> left: {clicks.left} </p>
      <button> Right </button>
      <p> right: {clicks.right} </p>
    </div>
  );
};

export default ComplexState;
