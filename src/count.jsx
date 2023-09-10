import { useState } from "react"

export default function Counter () {
    let [count , setCount] = useState(0)
    const increment = () =>{
        let newCount = count + 1;
        let newCount1 = count++;
        setCount(newCount)
    }
    return (
        <div>
            <h3> Counter: {count}</h3>
            <button onClick={increment}>Add</button>
        </div>
    )
}