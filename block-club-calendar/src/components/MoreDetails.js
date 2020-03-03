import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MoreDetails = (props) => {
  return (
    <div>
      <Modal key={props.event.id} isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.event.eventTitle}</ModalHeader>
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