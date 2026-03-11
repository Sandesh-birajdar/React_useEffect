import { useEffect, useState } from "react"

function Demo() {
       
     let [count,setCount]=useState(0);
   

    useEffect(()=>{
            console.log("Component created/updated");
            
    },[count]);

    //[] =>Run code single time
    //[count] => run code every time when it call
    return(
        <div>
            <h1>useEffect Hooks</h1>
            <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </div>
    )
}


export default Demo;