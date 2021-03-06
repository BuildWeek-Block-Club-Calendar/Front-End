import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_GUEST_EVENTS,
  FETCH_GUEST_EVENTS_SUCCESS,
  FETCH_GUEST_EVENTS_FAILURE,
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  DELETE_EVENT,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  ADD_CONFIRMED,
  REMOVE_CONFRIMED
} from '../actions/index';

const initialState = {
  events: [],
  confirmed: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case FETCH_GUEST_EVENTS:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_GUEST_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_GUEST_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_EVENT:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
        isFetching: false,
        error: ''
      }
    case ADD_EVENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case UPDATE_EVENT:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
        error: ''
      }
    case UPDATE_EVENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case DELETE_EVENT:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
        error: ''
      }
    case DELETE_EVENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_CONFIRMED:
      return {
        ...state,
        confirmed: [...state.confirmed, action.payload]
      }
    case REMOVE_CONFRIMED:
      return {
        ...state,
        confirmed: state.confirmed.filter((event) => {
          return event._id !== action.payload
        })
      }
    default:
      return state
  }
};