import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { updateEvent } from '../actions/index';
import { Link } from 'react-router-dom';
import moment from 'moment';

const initialEventState = {
  eventTitle: '',
  eventStart: '',
  eventEnd: '',
  eventDescription: '',
  eventAddress: '',
  eventCity: '',
  eventCountry: '',
  eventCreator: window.localStorage.getItem('token'),
  _id: ''
};

console.log(initialEventState.eventCreator);

const UpdateEvent = (props) => {
  const [updatedEvent, setUpdatedEvent] = useState(initialEventState);
  const { id } = useParams();

  useEffect(() => {
    const eventToEdit = props.events.find(event => `${event._id}` === id);

    if (eventToEdit) {
      console.log(eventToEdit);
      setUpdatedEvent(eventToEdit);
    };
  }, [props.events, id]);

  const handleChange = event => {
    setUpdatedEvent({
      ...updatedEvent,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    props.updateEvent(updatedEvent);
    props.history.push('/api/events');
  };

  return (
    <div>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
      </nav>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="eventTitle"
            type="text"
            defaultValue={updatedEvent.eventTitle}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="eventDescription"
            type="text"
            defaultValue={updatedEvent.eventDescription}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="start_time">Start Time</label>
          <input
            id="start_time"
            name="eventStart"
            type="time"
            defaultValue={updatedEvent.eventStart}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="end_time">End Time</label>
          <input
              id="end_time"
              name="eventEnd"
              type="time"
              defaultValue={updatedEvent.eventEnd}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
              id="address"
              name="eventAddress"
              type="text"
              defaultValue={updatedEvent.eventAddress}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
              id="city"
              name="eventCity"
              type="text"
              defaultValue={updatedEvent.eventCity}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
              id="country"
              name="eventCountry"
              type="text"
              defaultValue={updatedEvent.eventCountry}
              onChange={handleChange} />
        </div>
        <button>Update Event</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps, { updateEvent })(UpdateEvent);