import React, { Component } from "react";
import UpdatedComponent from './NewCompo';

class HoverComb extends Component {
    


  render() {

    const {counter,increment} = this.props

    return (
      <div>

        <h2 onMouseOver={increment}>Hoverd {counter} Times</h2>
      
      </div>
    );
  }
}

export default UpdatedComponent(HoverComb);