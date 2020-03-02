import React from 'react';

const MyEvents = (props) => {
  return ( 
    <div>
      {props.confirmed.map(event => (
        <div key={event.id}>
          <h3>{event.eventTitle}</h3>
          <p>{event.eventStart} - {event.eventEnd}</p>
          <p>{event.eventDescription}</p>
          <address>{event.eventAddress}</address>
          <button>Unconfirm</button>
        </div>
      ))}
    </div>
  );
};

export default MyEvents;