import React, { useState } from "react";


const Counter = ()=>  {
    
  const [count,setcounter]= useState(0)
  const [color,setcolor]= useState("")


const increment = ()=>{
       setcounter(count+1)
       if(count%2===0){
        setcolor("blue")
       }else{
        setcolor("green")
       }
}
const dicrement = ()=>{
  setcounter(count-1)
  if(count%2===0){
   setcolor("blue")
  }else{
   setcolor("green")
  }
}




    return (
      <div style={{ backgroundColor: color, padding: "20px",width:"100px" }}> 
         <button onClick={increment}>Increment</button>
        <h2>{count}</h2>
        <button onClick={dicrement}>dicrement</button>
       
      
      </div>
    );
  
}

export default Counter;