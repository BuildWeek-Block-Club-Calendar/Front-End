import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { addEvent } from '../actions/index';
import { connect } from 'react-redux';
import cuid from 'cuid';

const initialEventState = {
    eventTitle: '',
    eventStart: '',
    eventEnd: '',
    eventDescription: '',
    eventAddress: '',
    eventCity: '',
    eventCountry: '',
    eventCreator: window.localStorage.getItem('user_id'),
    id: cuid()
};

function AddEventForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const [newEvent, setNewEvent] = useState(initialEventState);

    const handleChanges = (e) => {
      setNewEvent({
        ...newEvent,
        [e.target.name]: e.target.value
      });
    };

    const onSubmit = (e) => {
        props.addEvent(newEvent);
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

        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add an Event</h1>
            <label htmlFor="eventTitle">Event Title</label>
            <br />
            <input
                name="eventTitle"
                ref={register({ required: true })}
                onChange={handleChanges}
            />
            {errors.eventTitle && <span>Title is required!</span>}
            <br />
            <label htmlFor="eventDescription">Event Description</label>
            <br />
            <input
                name="eventDescription"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="eventStart">Event Start</label>
            <br />
            <input
                name="eventStart"
                type="datetime-local"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="eventEnd">Event End</label>
            <br />
            <input
                name="eventEnd"
                type="datetime-local"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="eventAddress">Event Address</label>
            <br />
            <input
                name="eventAddress"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="eventCity">Event City</label>
            <br />
            <input
                name="eventCity"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="eventCountry">Event Country</label>
            <br />
            <input
                name="eventCountry"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <input type="submit" />
        </form>
      </div>
    )
}

export default connect(null, { addEvent })(AddEventForm);