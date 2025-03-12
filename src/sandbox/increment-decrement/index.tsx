import { useState } from "react";

function incrementHandler(setCount: React.Dispatch<React.SetStateAction<number>>
){
    setCount(cur => cur + 1)
}
function decrementHandler(setCount: React.Dispatch<React.SetStateAction<number>>
){
    setCount(cur => cur - 1)
}

function IncrementDecrement(){
    const [count, setCount] = useState(0);

    
    return (
        <div>
            <div reian-testid='count'>{count}</div>
            <button onClick={() => incrementHandler(setCount)}>Increment</button>
            <button onClick={() => decrementHandler(setCount)}>Decrement</button>
        </div>
    )
}

export default IncrementDecrement;