import React from 'react';
import { connect } from 'react-redux';
import { removeFromConfirmedList } from '../actions/index';
import { Link } from 'react-router-dom';

const MyEvents = (props) => {
  const unconfirmEvent = (id) => {
    props.removeFromConfirmedList(id)
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