import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const initialEventState = {
    eventTitle: '',
    eventStart: '',
    eventEnd: '',
    eventDescription: '',
    eventAddress: '',
    eventCity: '',
    eventCountry: '',
    eventCreator: window.localStorage.getItem('token'),
    id: ''
};

function AddEventForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const [newEvent, setNewEvent] = useState(initialEventState);

    const onSubmit = (data, e) => {
        e.target.reset();
        setNewEvent(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add an Event</h1>
            <label htmlFor="eventTitle">Event Title</label>
            <br />
            <input
                name="eventTitle"
                ref={register({ required: true })}
            />
            {errors.eventTitle && <span>Title is required!</span>}
            <br />
            <label htmlFor="eventDescription">Event Description</label>
            <br />
            <input
                name="eventDescription"
                ref={register}
            />
            <br />
            <label htmlFor="eventStart">Start Date</label>
            <br />
            <input
                name="eventStart"
                ref={register}
            />
            <br />
            <label htmlFor="eventEnd">End Date</label>
            <br />
            <input
                name="eventEnd"
                ref={register}
            />
            <br />
            <label htmlFor="eventAddress">Event Address</label>
            <br />
            <input
                name="eventAddress"
                ref={register}
            />
            <br />
            <label htmlFor="eventCity">Event City</label>
            <br />
            <input
                name="eventCity"
                ref={register}
            />
            <br />
            <label htmlFor="eventCountry">Event Country</label>
            <br />
            <input
                name="eventCountry"
                ref={register}
            />
            <br />
            <input type="submit" />
        </form>
    )
}

export default AddEventForm;