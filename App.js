import React, { Component } from "react";
import "./App.css";
// import Protelsdemo from "./component/Protelsdemo";
import Counter from "./component/Counter";
import HoverComp from "./component/HoverComp";
// import ParentComp from "./component/ParentComp";
// import RefsDemo from "./component/RefsDemo";
// import Counter from "./component/Counter";
// import Message from "./component/Message";
// import List from "./component/List";
// import Form from "./component/Form";
// import Demo from "./component/Demo"



class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <h1>Events</h1>
      <Demo name="ihsan" ><p>This is Childrens</p></Demo>

      <Demo ><button>action</button></Demo> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Form /> */}
      {/* <RefsDemo /> */}
      <Counter />
      <HoverComp />
      </div>
    );
  }
}

export default App;

