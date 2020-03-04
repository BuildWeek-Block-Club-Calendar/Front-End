import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent, addToConfirmedList } from '../actions/index';
import { Link } from 'react-router-dom';
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
    props.getEvents();
  }, []);

  const deleteEvent = (id) => {
    props.deleteEvent(id);
  };

  const updateEvent = (id) => {
    props.history.push(`/api/update-event/${id}`);
  };

  const saveEvent = (confirmedEvent) => {
    props.addToConfirmedList(confirmedEvent);
  };

  const signOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
  };

  const formatDate = (event) => {
    const format = new Date(event.eventStart);
    var day;
    var month;

    switch (format.getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    };

    switch (format.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    };

    return `${day}, ${month} ${format.getDate()}, ${format.getFullYear()}`
  };

  const formatTime = (event) => {
    const formatStart = new Date(event.eventStart);
    const formatEnd = new Date(event.eventEnd);

    if (formatStart.getHours() > 12 && formatEnd.getHours() > 12) {
      const newStart = formatStart.getHours() - 12;
      const newEnd = formatEnd.getHours() - 12;

      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
          return `${newStart}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${newStart}:0${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
        };
      } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
          return `${newStart}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${newStart}:${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        };
      } else {
        return `${newStart}:${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
      };
    }

    else if (formatEnd.getHours() > 12) {
      const newEnd = formatEnd.getHours() - 12;

      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${newEnd}:${formatEnd.getMinutes()}PM`;
        };
      } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        };
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${newEnd}:${formatEnd.getMinutes()}PM`;
      };
    }

    else if (formatStart.getHours() === 12 && formatEnd.getHours() === 12) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
        };
      } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
        };
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
      };
    }

    else if (formatStart.getHours() === 12) {
      const newEnd = formatEnd.getHours() - 12;

      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
        };
      } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
        };
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
      };
    }

    else if (formatEnd.getHours() === 12) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
        };
      } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
        } else {
          return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
        };
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
      };
    }

    else {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}AM`;
        } else {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}AM`;
        };
      } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
          return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}AM`;
        } else {
          return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}AM`;
        };
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}AM`;
      };
    }
  };

  return (
    <Container>
      <nav className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
        <Link to="/" onClick={signOut}>Signout</Link>
      </nav>

      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div>
              {event.eventCity === window.localStorage.getItem('user_city') ? (
                <div key={event._id} className="event">
                  <h3>{event.eventTitle}</h3>
                  <p>{formatDate(event)}</p>
                  <p>{formatTime(event)}</p>
                  <p>{event.eventDescription}</p>
                  <address>{event.eventAddress}, {event.eventCity}</address>
                  <Button onClick={() => saveEvent(event)}>Confirm</Button>{' '}
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