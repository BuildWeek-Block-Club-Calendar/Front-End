import React from 'react';
import { connect } from 'react-redux';
import { removeFromConfirmedList } from '../actions/index';
import { Link } from 'react-router-dom';
import formatTime from '../utils/formatTime';
import formatDate from '../utils/formatDate';

const MyEvents = (props) => {
  const unconfirmEvent = (id) => {
    props.removeFromConfirmedList(id)
  };

  const signOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_city');
  };

  return ( 
    <div>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
        <Link to="/" onClick={signOut}>Signout</Link>
      </nav>
      
      {props.confirmed.map(event => (
        <div key={event._id}>
          <h3>{event.eventTitle}</h3>
          <p>{formatDate(event)}</p>
          <p>{formatTime(event)}</p>
          <p>{event.eventDescription}</p>
          <address>{event.eventAddress}</address>
          <button onClick={() => unconfirmEvent(event._id)}>Unconfirm</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    confirmed: state.confirmed
  }
}

export default connect(mapStateToProps, { removeFromConfirmedList })(MyEvents);