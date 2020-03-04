import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGuestEvents } from '../actions/index';
import { Link } from 'react-router-dom';


const GuestEventList = (props) => {
  useEffect(() => {
    props.getGuestEvents()
  }, []);

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
      <nav className="nav_links">
        <Link to="/">Login</Link>
        <Link to="/events">Upcoming Events</Link>
      </nav>

      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div key={event.id} className="event">
              <h3>{event.eventTitle}</h3>
              <p>{formatDate(event)}</p>
              <p>{formatTime(event)}</p>
              <p>{event.eventDescription}</p>
              <address>{event.eventAddress}, {event.eventCity}</address>
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