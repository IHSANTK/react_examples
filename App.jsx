import React from "react";
import { Provider } from 'react-redux';
import "./App.css";
import Store from "./redux/Store"
import Todo from "./Todo";

const App= ()=> {

  
    return (
      <Provider store={Store}>
      <div className="App">
        <Todo />
      </div>
      </Provider>
    );
  
}

export default App;

