import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent, addToConfirmedList } from '../actions/index';
import { Link } from 'react-router-dom';
import formatTime from '../utils/formatTime';
import formatDate from '../utils/formatDate';
// import getLocation from '../utils/getLocation';
import signOut from '../utils/signOut';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import '../App.css';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const EventList = (props) => {
  useEffect(() => {
    // getLocation();
    props.getEvents();
  }, []);

  const deleteEvent = (id) => {
    props.deleteEvent(id);
  };

  const updateEvent = (id) => {
    props.history.push(`/api/update-event/${id}`);
  };

  const saveEvent = (confirmedEvent, id) => {
    props.addToConfirmedList(confirmedEvent, id);
  };

  return (
    <Container>
      <nav className="nav_links">
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
        <Link to="/" onClick={signOut}>Signout</Link>
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
                  <Button onClick={() => saveEvent(event, window.localStorage.getItem('user_id'))}>Confirm</Button>{' '}
                  {event.eventCreator === window.localStorage.getItem('user_id') ? (<><Button className="user_action_buttons" onClick={() => updateEvent(event._id)}>Update</Button>{' '}
                  <Button className="user_action_buttons" onClick={() => deleteEvent(event._id)}>Delete</Button></>) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </Container>
  )
};

const mapStateToProps = state => {
  return {
    events: state.events,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getEvents, deleteEvent, addToConfirmedList })(EventList);