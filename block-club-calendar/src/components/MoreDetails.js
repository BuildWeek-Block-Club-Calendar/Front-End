import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const MoreDetails = (props) => {
  return (
    <div>
      <div key={props.event.id}>
        <h3>{props.event.eventTitle}</h3>
        <p>{props.event.eventDescription}</p>
        <p>{props.event.eventAddress}</p>
        <div>
          <Button color="primary" onClick={() => props.saveEvent(props.event)}>Confirm</Button>{' '}
          <Button color="primary" onClick={() => props.updateEvent(props.event.id)}>Update</Button>{' '}
          <Button color="secondary" onClick={() => props.deleteEvent(props.event.id)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;