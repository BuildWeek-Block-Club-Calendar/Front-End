import React from 'react';
import { Route, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from "./components/LoginForm";
import EventList from './components/EventList';
import UpdateEventForm from './components/UpdateEvent';
import RegistrationForm from "./components/RegistrationForm";
import MyEvents from './components/MyEvents';
import AddEventForm from './components/AddEventForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
      </nav>
      <Route exact path="/" render={(props) => <LoginForm {...props} />} />
      <Route path="/api/users/register" render={(props) => <RegistrationForm {...props} />} />
      <Route path="/api/events" component={EventList} />
      <PrivateRoute path="/api/users/events" component={MyEvents} />
      <PrivateRoute path="/api/update-event/:id" component={UpdateEventForm} />
      <PrivateRoute path="/api/create-event" component={AddEventForm} />
    </div>
  );
}

export default App;
