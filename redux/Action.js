

export const Addtask = (data) => ({
      type: 'ADD_DATA',
      payload: data,
     });
export const deletetask = (index)=>({
    type:'DELETE_DATA',
    payload:index,
})  
export const updatetask =(index,inputvalue)=>({

    type:'UPDATED_DATA',
     payload:{index,inputvalue}
})

