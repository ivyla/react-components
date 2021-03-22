import "./App.css"
import React, { useState } from "react"
import "./Subcomponents/ChildComponents"
import ChildComponents from "./Subcomponents/ChildComponents"
import ComplexState from "./Subcomponents/ComplexState"
import axios from "axios"

// Use hooks to init the state for the click right and click left buttons
// Use the spread syntax to initialize and assign the props {//variables here//}

function App() {
    const promise = axios
        .get("http://localhost:3001/notes")
        .then((response) => console.log(response.data))
    console.log(promise)

    // const promise2 = axios.get("http://localhost:3001/notes/foobar").then((response) => console.log(response.data))
    // console.log(promise2)

    return (
        <div>
            simple example with spread operator
            {/* <Increase currentNum={firstCounter} increase={() => firstCounter(firstCounter + 1)} /> */}
            {/* ChildComponents.js */}
            <div>
                <ChildComponents />
            </div>
            <div>
                <ComplexState />
            </div>
        </div>
    )
}

export default App
