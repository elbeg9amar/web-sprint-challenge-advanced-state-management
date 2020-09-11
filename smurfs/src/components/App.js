import React, { Component } from "react";



import "./App.css";
import Smurfs from './Smurfs'
import SmurfInputs from './SmurfInputs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Smurfs />
        <SmurfInputs />
      </div>
    );
  }
}

export default App;
