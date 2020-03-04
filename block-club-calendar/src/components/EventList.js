import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent, addToConfirmedList } from '../actions/index';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const EventList = (props) => {
  useEffect(() => {
    props.getEvents();
  }, []);

  const addClass = (event) => {
    if (event.eventCreator === window.localStorage.getItem('user_id')) {
      showButtons.classList.add("show");
    };
  };

  const showButtons = document.querySelectorAll('.user_action_buttons');
  console.log(showButtons);
  // showButtons.addEventListener('load', alert('Page loaded'));

  const deleteEvent = (event) => {
    props.deleteEvent(event._id);
  };

  const updateEvent = (id) => {
    props.history.push(`/api/update-event/${id}`);
  };

  const saveEvent = (confirmedEvent) => {
    props.addToConfirmedList(confirmedEvent);
  };

  return (
    <Container>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
      </nav>

      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div key={event._id}>
              <h3>{event.eventTitle}</h3>
              <p>{event.eventStart} - {event.eventEnd}</p>
              <p>{event.eventDescription}</p>
              <address>{event.eventAddress}, {event.eventCity}</address>
              {/* <p>{event.eventCreator}</p> */}
                <Button onClick={() => saveEvent(event)}>Confirm</Button>{' '}
                <Button className="user_action_buttons" onClick={() => updateEvent(event._id)}>Update</Button>{' '}
                <Button className="user_action_buttons" onClick={() => deleteEvent(event._id)}>Delete</Button>
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