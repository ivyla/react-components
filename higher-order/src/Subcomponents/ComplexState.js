import React, { useState } from "react";
// Have left and right in a single object - more complex, but just making for practice
// Very basic practice with updating the object

const ComplexState = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);

    const [allClicks, setClicks] = useState([]);

    const handleLeft = () => {
        setLeft(left + 1);
        setClicks(allClicks.concat("L"));
    };

    const handleRight = () => {
        setRight(right + 1);
        setClicks(allClicks.concat("R"));
    };

    return (
        <div>
            <button onClick={handleLeft}> Left </button>
            <p> left: {left} </p>
            <button onClick={handleRight}> Right </button>
            <p> right: {right} </p>

            {allClicks.join("")}
        </div>
    );
};

export default ComplexState;
