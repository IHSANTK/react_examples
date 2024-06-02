import React from "react";
import { Provider } from 'react-redux';
import "./App.css";
import Demo from './Demo'
import Store from "./redux/Store"

const App= ()=> {

  
    return (
      <Provider store={Store}>
      <div className="App">
        <Demo />
      </div>
      </Provider>
    );
  
}

export default App;

