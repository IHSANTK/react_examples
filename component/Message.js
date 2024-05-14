import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export default class Message extends Component {
  constructor(props){
    super(props)
    this.state={
       name:"IHSAN"
    }
  }
 changetext = (child)=>{
 
      // this.setState({
      //   message:"Thankyou for Subscrib"
      // })
      alert(`Hello,${this.state.name},${child}`)
  }
  render() {
    return (
      <div>
        <Childcomponent ok={this.changetext}/>
        {/* <button onClick={this.changetext}>Click</button> */}
      </div>
    )
  }
}
