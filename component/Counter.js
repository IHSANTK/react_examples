import React, { Component } from "react";
import UpdatedComponent from './NewCompo';

class Counter extends Component {
    


  render() {

    const {counter,increment} = this.props

    return (
      <div>
        <h2>Counter Component</h2>
        <button onClick={increment}>Clicked {counter} Times</button>
      
      </div>
    );
  }
}

export default UpdatedComponent(Counter);