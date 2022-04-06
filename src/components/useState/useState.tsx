import { useState } from "react"

export const UseState = () => {
    console.log('UseState rendered');
    
    const [counter,setCounter] = useState(0)
    return <>
    <div>
        <button onClick={()=>{setCounter(counter+1)}}>{counter}</button>
    </div>
    </>
}