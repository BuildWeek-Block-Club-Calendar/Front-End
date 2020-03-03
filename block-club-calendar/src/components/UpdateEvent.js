import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { updateEvent } from '../actions/index';

const initialEventState = {
  eventTitle: '',
  eventStart: '',
  eventEnd: '',
  eventDescription: '',
  eventAddress: '',
  eventCity: '',
  eventCountry: '',
  eventCreator: '',
  id: ''
};

const UpdateEvent = (props) => {
  const [updatedEvent, setUpdatedEvent] = useState(initialEventState);
  const { id } = useParams();

  useEffect(() => {
    const eventToEdit = props.events.find(event => `${event.id}` === id);

    if (eventToEdit) {
      setUpdatedEvent(eventToEdit);
    };
  }, [props.events, id]);

  const handleChange = event => {
    setUpdatedEvent({
      ...event,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateEvent(updatedEvent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={updatedEvent.eventTitle}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={updatedEvent.eventDescription}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="start_time">Start Time</label>
          <input
            id="start_time"
            name="start_time"
            type="text"
            value={updatedEvent.eventStart}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="end_time">End Time</label>
          <input
              id="end_time"
              name="end_time"
              type="text"
              value={updatedEvent.eventEnd}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
              id="address"
              name="address"
              type="text"
              value={updatedEvent.eventAddress}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
              id="city"
              name="city"
              type="text"
              value={updatedEvent.eventCity}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
              id="country"
              name="country"
              type="text"
              value={updatedEvent.eventCountry}
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