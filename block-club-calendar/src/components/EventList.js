import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent } from '../actions/index';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EventList = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    props.getEvents()
  }, []);

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
            <div>
              <h3>{event.eventTitle}</h3>
              <p>{event.eventStart} - {event.eventEnd}</p>
              <p>{event.eventDescription}</p>
              <address>{event.eventAddress}</address>
              <Button onClick={toggle}>More Details</Button>
              <Modal key={event.id} isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{event.eventTitle}</ModalHeader>
                <ModalBody>{event.eventDescription}</ModalBody>
                <ModalBody>{event.eventAddress}</ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => saveEvent(event)}>Confirm</Button>{' '}
                  <Button color="primary" onClick={() => updateEvent(event.id)}>Update</Button>{' '}
                  <Button color="secondary" onClick={() => deleteEvent(event.id)}>Delete</Button>
                </ModalFooter>
              </Modal>
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

export default connect(mapStateToProps, { getEvents, deleteEvent })(EventList);