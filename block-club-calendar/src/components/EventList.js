import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent, addToConfirmedList } from '../actions/index';
import PrivateRoute from '../utils/PrivateRoute';
import { Route } from 'react-router-dom';
import MoreDetails from './MoreDetails';
import { Button } from 'reactstrap';

const EventList = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (event) => {
    setModal(!modal);
    props.history.push(`/api/events/${event.id}`);
  };

  useEffect(() => {
    props.getEvents()
  }, [props]);

  const deleteEvent = (id) => {
    props.deleteEvent(id);
  };

  const updateEvent = (id) => {
    props.history.push(`/api/update-event/${id}`);
  };

  const saveEvent = (confirmedEvent) => {
    props.addToConfirmedList(confirmedEvent);
  };

  return (
    <div>
      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div key={event.id}>
              <h3>{event.eventTitle}</h3>
              <p>{event.eventStart} - {event.eventEnd}</p>
              <p>{event.eventDescription}</p>
              <address>{event.eventAddress}</address>
              <Button onClick={() => toggle(event)}>More Details</Button>
              <Route path="/api/events/:id"  render={(props) => <MoreDetails {...props} event={event} toggle={toggle} modal={modal} saveEvent={saveEvent} updateEvent={updateEvent} deleteEvent={deleteEvent} />} />
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