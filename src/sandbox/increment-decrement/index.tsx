import { useState } from "react";

function incrementHandler(setCount: React.Dispatch<React.SetStateAction<number>>
){

}

export default function(){
    const [count, setCount] = useState(0);

    
    return (
        <div>
            <div>{count}</div>
            <button>Increment</button>
            
            <button>Decrement</button>
        </div>
    )
}
