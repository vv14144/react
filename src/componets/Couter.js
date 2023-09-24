import { useEffect, useState } from "react"

const Counter=()=>{




    const [Count,setCount]=useState(0)
    const [abc,setAbc]=useState(0)
    const increse=()=>{
        setCount(Count+1)
    }
    const decrement=()=>{
        setCount(Count-1)
    }
useEffect(()=>{
    console.log('use Effect called')

},[abc])


    return(<div>
    <h1>Count : {Count} <br></br>{abc}</h1>
    <button onClick={increse}>increse</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={()=>setAbc(abc+1)}>Abc</button>
    </div>)
}
export  default Counter