import { useState } from "react"

export default function Parent(){
    const [count, setCount] = useState<number>(0);
     return <div>
        <div reian-testid='count'>{count}</div>
        <Child setCount={setCount}/>
     </div>
}

interface ChildProps{
    setCount:React.Dispatch<React.SetStateAction<number>>
}
function Child({setCount}: ChildProps){
    return <div>
        <button onClick={() => setCount(cur => cur+1)}>Increment</button>
        <button onClick={() => setCount(cur => cur-1)}>Decrement</button>
    </div>
}