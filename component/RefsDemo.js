import React, { Component } from 'react'

export default class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    onchnage = ()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        refs component
        <input type='text' ref={this.inputRef} />
        <button onClick={this.onchnage}>Click</button>
      </div>
    )
  }
}
