import React from 'react';
import { connect } from 'react-redux';
import { removeFromConfirmedList } from '../actions/index';

const MyEvents = (props) => {
  const unconfirmEvent = (event) => {
    props.removeFromConfirmedList(event)
  };

  return ( 
    <div>
      {props.confirmed.map(event => (
        <div key={event.id}>
          <h3>{event.eventTitle}</h3>
          <p>{event.eventStart} - {event.eventEnd}</p>
          <p>{event.eventDescription}</p>
          <address>{event.eventAddress}</address>
          <button onClick={() => unconfirmEvent(event)}>Unconfirm</button>
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