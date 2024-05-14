import React from 'react'

const Demo =(props)=>{

 console.log(props.name);
    return (
      <div>
        {props.children}
        <h1>Hello {props.name}</h1>
        
      </div>
    )
  
}

export default Demo
