import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAILURE = 'UPDATE_EVENT_FAILURE';

export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';

export const getEvents = () => (dispatch) => {
  // CHANGE BACK TO FETCH_EVENTS
  dispatch({ type: FETCH_EVENTS_SUCCESS });
  axiosWithAuth().get('')
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
    });
};

export const addEvent = (event) => (dispatch) => {
  dispatch({ type: ADD_EVENT });
  axiosWithAuth().all([
    axiosWithAuth().post('', event),
    axiosWithAuth().get('')
  ])
  .then(axiosWithAuth().spread((post, get) => {
    console.log(post);
    console.log(get);
    dispatch({ type: ADD_EVENT_SUCCESS, payload: get.data });
  }))
  .catch(error => {
    console.log(error);
    dispatch({ type: ADD_EVENT_FAILURE, payload: error.message });
  });
};

export const updateEvent = (updatedEvent) => (dispatch) => {
  dispatch({ type: UPDATE_EVENT });
  axiosWithAuth().all([
    axiosWithAuth().put('', updatedEvent),
    axiosWithAuth().get('')
  ])
  .then(axiosWithAuth().spread((put, get) => {
    console.log(put);
    console.log(get);
    dispatch({ type: UPDATE_EVENT_SUCCESS, payload: get.data });
  }))
  .catch(error => {
    console.log(error);
    dispatch({ type: UPDATE_EVENT_FAILURE, payload: error.message });
  });
};

export const deleteEvent = (id) => (dispatch) => {
  dispatch({ type: DELETE_EVENT });
  axiosWithAuth().all([
    axiosWithAuth().delete(''),
    axiosWithAuth().get('')
  ])
  .then(axiosWithAuth().spread((remove, get) => {
    console.log(remove);
    console.log(get);
    dispatch({ type: DELETE_EVENT_SUCCESS, payload: get.data });
  }))
  .catch(error => {
    console.log(error);
    dispatch({ type: DELETE_EVENT_FAILURE, payload: error.message });
  });
};