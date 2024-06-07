
import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name:'couter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        dicrement:(state)=>{
            state.count-=1
        }
    }
})

export const {increment,dicrement} = counterslice.actions
export default counterslice.reducer