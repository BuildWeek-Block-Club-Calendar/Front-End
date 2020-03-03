import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

const MoreDetails = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (event) => {
    setModal(!modal);
    props.history.push(`/api/events/${event.id}`);
  };

  return (
    <div>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/api/events">Upcoming Events</Link>
        <Link to="/api/users/events">My Events</Link>
        <Link to="/api/create-event">Create Event</Link>
      </nav>

      <Modal key={props.event.id} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.event.eventTitle}</ModalHeader>
        <ModalBody>{props.event.eventDescription}</ModalBody>
        <ModalBody>{props.event.eventAddress}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.saveEvent(props.event)}>Confirm</Button>{' '}
          <Button color="primary" onClick={() => props.updateEvent(props.event.id)}>Update</Button>{' '}
          <Button color="secondary" onClick={() => props.deleteEvent(props.event.id)}>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MoreDetails;