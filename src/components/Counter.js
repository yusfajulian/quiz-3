import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
    const title = `Proses ${counter}`;

    const addCounter = ()=>{
        setCounter((c)=>c+1);
    };

    const adCounter = ()=>{
        setCounter((d)=>d-1);
    };

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={adCounter}> - </button>
            <button onClick={addCounter}> + </button>
        </div>
    )
}

export default Counter