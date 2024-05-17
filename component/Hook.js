import React ,{useState} from 'react'

export default function Hook() {
    const [name,setName] = useState(1)

  return (
    <div>
        <button onClick={()=>setName(name+1)}>increment</button>
        <lable>{name}</lable>
        <button onClick={()=>setName(name-1)}>dicrement</button>

     
    </div>
  )
}
