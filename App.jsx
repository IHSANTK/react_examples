import React from "react";
import { Provider } from 'react-redux';
import "./App.css";
import Store from "./redux/Store"
import Counters from "./Counters";

const App= ()=> {

  
    return (
      <Provider store={Store}>
      <div className="App">
     <Counters />
      </div>
      </Provider>
    );
  
}

export default App;

