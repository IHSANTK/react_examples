import React, { Component } from 'react'


 class Todo extends Component {

  render() {
    return (
      <div>
        <h2>Thankyou todo component</h2>
        
        <p>{this.props.new}</p>

      </div>
    )
  }
}

export default Todo;