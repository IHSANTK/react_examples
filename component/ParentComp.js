import React, { Component } from 'react'
import MemoComb from './MemoComb';
// import RegCom from './RegCom'
// import PureComp from './PureComp'

export default class ParentComp extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"Ihsan"
        }
    }

    componentDidMount(){
     
    }
  render() {

    console.log("********************parent component***************");
    return (
      <div>
        Parent Component
        {/* <RegCom name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComb name={this.state.name}/>
      </div>
    )
  }
}
