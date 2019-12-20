import React from 'react';
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path ='/signup' render={props =>(
        <SignUp {...props} />
      )}/>
      <Route path ='/login' render={props =>(
        <Login {...props} />
      )}/>
      <Route path='/jokes' component={Jokes}/>
    </div>
  )
}

export default App;
