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
          <Button color="primary" onClick={() => props.saveprops.event(props.event)}>Confirm</Button>{' '}
          <Button color="primary" onClick={() => props.updateprops.event(props.event.id)}>Update</Button>{' '}
          <Button color="secondary" onClick={() => props.deleteprops.event(props.event.id)}>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MoreDetails;