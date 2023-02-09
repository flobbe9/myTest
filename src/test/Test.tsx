import React, { useState } from "react";

export default function Test(props) {
    let [state, setState] = useState(0);
    let [time, setTime] = useState(0);

    // update seconds
    setInterval(() => (setTime(new Date().getSeconds())), 1000);

    return (
        <div>
            <h1 id="h1">This is a test!</h1>

            <p>Here comes prop one: {props.one}</p>

            <p>And here goes prop two: {props.two}</p>

            <p>
                <button onClick={() => setState(++state)}>Click me!</button> 
                <br/>
                This button has been clicked {state} times.
            </p>

            <p>The time is {time}</p>
        </div>
    )
}