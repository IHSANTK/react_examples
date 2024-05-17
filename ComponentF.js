import React, { Component } from 'react'
import { Userconsumer } from './Usercontext'

export default class ComponentF extends Component {
  render() {
    return (
      
    <Userconsumer >
        {
        name=>{
            return <div>Hello {name}</div>

        }
    }
    </Userconsumer>
    )
  }
}
