import React from 'react';
import LoginForm from "./components/LoginForm";
import {Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
          <Route exact path="/">
          <LoginForm/>
          </Route>
    </div>
  );
}

export default App;
