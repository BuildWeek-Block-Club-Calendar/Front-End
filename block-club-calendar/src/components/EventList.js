import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/index';

const EventList = (props) => {
  useEffect(() => {
    props.getEvents()
  }, []);

  return (
    <div>
      {props.isFetching ? (<div>Loading Events...</div>) : (
        <div>
          {props.events.map((event) => (
            <div>
              <h3>{event.eventTitle}</h3>
              <p>{event.eventStart} - {event.eventEnd}</p>
              <p>{event.eventDescription}</p>
              <address>{event.eventAddress}</address>
              <button>More Details</button>
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

export default connect(mapStateToProps, { getEvents })(EventList);