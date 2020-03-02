import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from "./components/LoginForm";
import EventList from './components/EventList';
import UpdateEventForm from './components/UpdateEvent';
import RegistrationForm from "./components/RegistrationForm";
import MyEvents from './components/MyEvents';
import './App.css';

function App() {
  const [confirmed, setConfirmed] = useState([]);
  console.log(confirmed);

  const addToConfirmedList = confirmedEvent => {
    setConfirmed([...confirmed, confirmedEvent]);
  };

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
      <Route path="/api/users/register">
       <RegistrationForm/>
      </Route>
      <Route path="/api/events" render={(props) =>
        <EventList {...props} addToConfirmedList={addToConfirmedList} />} />
      {/* Make a PrivateRoute */}
      <Route path="/api/update-event/:id" component={UpdateEventForm} />
      <Route path="/api/users/events" render={(props) => <MyEvents {...props} confirmed={confirmed} />} />
      {/* <PrivateRoute path="/api/users/events" component={} />
      <PrivateRoute path="/api/create-event" component={} /> */}
    </div>
  );
}

export default App;
