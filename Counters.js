import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,dicrement} from './redux/Reducers'

export default function Counters() {
    const dispatch = useDispatch() 

    const count = useSelector((state)=>state.count)

  return (
    <div>
       <button onClick={()=> dispatch(increment())}>Increment</button>
       {count}
       <button onClick={()=>dispatch(dicrement())}>Dicrement</button>
    </div>
  )
}
