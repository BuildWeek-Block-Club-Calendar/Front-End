import React from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from "./components/LoginForm";
import GuestEventList from './components/GuestEventList';
import EventList from './components/EventList';
import UpdateEventForm from './components/UpdateEvent';
import RegistrationForm from "./components/RegistrationForm";
import MyEvents from './components/MyEvents';
import AddEventForm from './components/AddEventForm';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <LoginForm {...props} />} />
      <Route path="/api/users/register" render={(props) => <RegistrationForm {...props} />} />
      <Route path="/events" component={GuestEventList} />
      <PrivateRoute path="/api/events" component={EventList} />
      <PrivateRoute path="/api/users/events" component={MyEvents} />
      <PrivateRoute path="/api/update-event/:id" component={UpdateEventForm} />
      <PrivateRoute path="/api/create-event" component={AddEventForm} />
    </div>
  );
}

export default App;
