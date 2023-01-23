import React, { useState } from "react";

//Basic React State Example:
//Here, in this component I have used a state variable count which gets increased when we click on the "+" button 
//and the value of this variable is being rendered using h1 tag.

function Counter() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;