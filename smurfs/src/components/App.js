import React, { useEffect } from "react";
import { connect } from "react-redux";

import {getData} from '../actions/SmurfActions'



import "./App.css";
import Smurfs from './Smurfs'
import SmurfInputs from './SmurfInputs'

function App ({getData, errorMessage, loadingData}) {

    useEffect(() =>{
      getData()
    },[getData])
 
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        {
        !loadingData 
        ?  <Smurfs />
        : <img src="https://i.pinimg.com/474x/40/a7/d5/40a7d54f63dd89c338575a17b5f91a71.jpg" alt="waiting pic"/>
      }
      {
        errorMessage !=='' ? <img src={errorMessage} alt="wating"/> : null
      }
        <SmurfInputs />
      </div>
    );
  
}

function mapStateToProps(state) {
  return {
    loadingData: state.loadingData,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps,{getData})(App);
