import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGuestEvents } from '../actions/index';
import { Link } from 'react-router-dom';
import formatTime from '../utils/formatTime';
import formatDate from '../utils/formatDate';
import getLocation from '../utils/getLocation';

const GuestEventList = (props) => {
  useEffect(() => {
    getLocation();
    props.getGuestEvents();
  }, []);

  return (
    <div>
      <nav className="nav_links">
        <Link to="/">Login</Link>
        <Link to="/events">Upcoming Events</Link>
      </nav>

      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div key={event._id}>
              {event.eventCity === window.localStorage.getItem('user_city') ? (
                <div key={event._id} className="event">
                  <h3>{event.eventTitle}</h3>
                  <p>{formatDate(event)}</p>
                  <p>{formatTime(event)}</p>
                  <p>{event.eventDescription}</p>
                  <address>{event.eventAddress}, {event.eventCity}</address>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    events: state.events,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getGuestEvents })(GuestEventList);