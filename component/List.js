import React, { Component } from 'react'

export default class List extends Component {

    state={
        data:[{
            id:1,
            name:"ihsan",
            age:21,
        },
        {
           id:1,
           name:"ok",
           age:23,
        }
    ]
    }
  render() {
    return (
      <div>
        
            {this.state.data.map((value,index)=>{
                return(
                   <h1 key={index}>
                        {value.id}-
                        {value.name}-
                        {value.age}
                    </h1>
                )

            })}
        
      </div>
    )
  }
}
