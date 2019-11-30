import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import SignUpCompany from './Component/SingnUpCompany'
import SignUpCondidate from './Component/SignUpCondidate'
 
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Home} ></Route>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
