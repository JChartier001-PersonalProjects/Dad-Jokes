import React from 'react';
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import SavedList from './components/SavedList';


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
      <Route path='/jokes' render={props =>(
        <Jokes {...props} />
      )}/>
      {/* <Route to='/saved' render={props => (<SavedList {...props} saved={saved}/>)}/> */}
    </div>
  )
}

export default App;
