import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MoreDetails = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (event) => {
    setModal(!modal);
    props.history.push(`/api/events/${event.id}`);
  };

  return (
    <div>
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