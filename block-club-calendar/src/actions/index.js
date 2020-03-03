import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const FETCH_GUEST_EVENTS = 'FETCH_GUEST_EVENTS';
export const FETCH_GUEST_EVENTS_SUCCESS = 'FETCH_GUEST_EVENTS_SUCCESS';
export const FETCH_GUEST_EVENTS_FAILURE = 'FETCH_GUEST_EVENTS_FAILURE';

export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAILURE = 'UPDATE_EVENT_FAILURE';

export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';

export const ADD_CONFIRMED = 'ADD_CONFIRMED';
export const REMOVE_CONFRIMED = 'REMOVE_CONFIRMED';

export const getEvents = () => (dispatch) => {
  dispatch({ type: FETCH_EVENTS });
  axiosWithAuth().get('/api/rest/events')
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
    });
};

export const getGuestEvents = () => (dispatch) => {
  dispatch({ type: FETCH_GUEST_EVENTS });
  axios.get('https://evening-wildwood-75186.herokuapp.com/api/rest/events')
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_GUEST_EVENTS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_GUEST_EVENTS_FAILURE, payload: error.message });
    });
};

export const addEvent = (event) => (dispatch) => {
  dispatch({ type: ADD_EVENT });
  axios.all([
    axiosWithAuth().post('/api/rest/events', event),
    axiosWithAuth().get('/api/rest/events')
  ])
  .then(axios.spread((post, get) => {
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
  axios.all([
    axiosWithAuth().put(`/api/rest/events/${updateEvent.id}`, updatedEvent),
    axiosWithAuth().get('/api/rest/events')
  ])
  .then(axios.spread((put, get) => {
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
  axios.all([
    axiosWithAuth().delete(`/api/rest/events/${id}`),
    axiosWithAuth().get('/api/rest/events')
  ])
  .then(axios.spread((remove, get) => {
    console.log(remove);
    console.log(get);
    dispatch({ type: DELETE_EVENT_SUCCESS, payload: get.data });
  }))
  .catch(error => {
    console.log(error);
    dispatch({ type: DELETE_EVENT_FAILURE, payload: error.message });
  });
};

export const addToConfirmedList = (confirmedEvent) => (dispatch) => {
  dispatch({ type: ADD_CONFIRMED, payload: confirmedEvent });
};

export const removeFromConfirmedList = (confirmedEvent) => (dispatch) => {
  dispatch({ type: REMOVE_CONFRIMED, payload: confirmedEvent });
};