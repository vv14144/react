import { useEffect, useState } from "react"

const Timmer=()=>{
    const [time,setTime]=useState(new Date())

    useEffect(()=>{

  const myinterval= setInterval(()=>{
    setTime(new Date())
console.log('my interval call')
},1000)    

return ()=> clearInterval(myinterval)
    },[])


    return <h1>current Time is : {time.toLocaleTimeString()} </h1>
}

export default Timmer