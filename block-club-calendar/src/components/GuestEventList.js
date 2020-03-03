import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGuestEvents } from '../actions/index';

const GuestEventList = (props) => {
  useEffect(() => {
    props.getGuestEvents()
  }, []);

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