import React, { Component } from 'react'

export default class RegCom extends Component {
  render() {

    console.log("regular component render");
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}
