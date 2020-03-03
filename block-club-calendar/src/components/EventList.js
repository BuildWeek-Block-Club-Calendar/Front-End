import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent, addToConfirmedList } from '../actions/index';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const EventList = (props) => {
  useEffect(() => {
    props.getEvents()
  }, []);

  const deleteEvent = (id) => {
    props.deleteEvent(id);
  };

  const updateEvent = (id) => {
    props.history.push(`/api/update-event/${id}`);
  };

  const getDetails = (id) => {
    props.history.push(`/api/events/${id}`);
  };

  const saveEvent = (confirmedEvent) => {
    props.addToConfirmedList(confirmedEvent);
  };

  return (
    <div>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
      </nav>

      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div key={event.id}>
              <h3>{event.eventTitle}</h3>
              <p>{event.eventStart} - {event.eventEnd}</p>
              <p>{event.eventDescription}</p>
              <address>{event.eventAddress}</address>
              <Button onClick={() => saveEvent(event)}>Confirm</Button>{' '}
              <Button onClick={() => updateEvent(event.id)}>Update</Button>{' '}
              <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
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

export default connect(mapStateToProps, { getEvents, deleteEvent, addToConfirmedList })(EventList);