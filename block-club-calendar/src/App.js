import React from 'react';
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import {Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
          <Route exact path="/">
          <LoginForm/>
          </Route>
          <Route path="/sign-up">
          <RegistrationForm/>
          </Route>
    </div>
  );
}

export default App;
