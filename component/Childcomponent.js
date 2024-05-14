import React from 'react'

export default function Childcomponent(props) {
  return (
    <div>
   <button onClick={()=>props.ok("yes")}>Click</button>
    </div>
  )
}
