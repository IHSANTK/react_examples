import React, { Component } from "react";

class Counter extends Component {
    
    state ={
        counter:0
    }

    onincrement= ()=>{
        this.setState({
            counter:this.state.counter+1
        },()=>console.log("value",this.state.counter))

    }
    ondicrement= ()=>{
        if(this.state.counter>0){
        this.setState({
            counter:this.state.counter-1
        })
    }
    }
  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <h2>{this.state.counter}</h2>
        <button onClick={this.onincrement}>+</button>
        <button onClick={this.ondicrement}>-</button>
      </div>
    );
  }
}

export default Counter;