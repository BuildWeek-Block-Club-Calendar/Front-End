import React from 'react';
import LoginForm from "./components/LoginForm";
import { Route, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import EventList from './components/EventList';
import UpdateEventForm from './components/UpdateEvent';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/api/users/login">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
      </nav>
      <Route exact path="/api/users/login">
        <LoginForm/>
      </Route>
      <Route path="/api/events" component={EventList} />
      <Route path="/api/update-event/:id" component={UpdateEventForm} />
      {/* <PrivateRoute path="/api/users/events" component={} />
      <PrivateRoute path="/api/users/my-events" component={} />
      <PrivateRoute path="/api/create-event" component={} /> */}
    </div>
  );
}

export default App;
