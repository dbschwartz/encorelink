import {
  CREATE_EVENT_REQUEST,
  LOAD_EVENTS_REQUEST,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENT_SUCCESS,
  SIGNUP_FOR_EVENT_SUCCESS
} from '../constants/reduxConstants';

const initialState = {
  isFetching: true,
  event: {
    date: '',
    endDate: '',
    id: 0,
    location: '',
    name: '',
    volunteers: []
  }
};

const eventManager = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_EVENTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false
      };
    case LOAD_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload,
        isFetching: false
      };
    case SIGNUP_FOR_EVENT_SUCCESS:
      return {
        ...state,
        event: {
          ...state.event,
          volunteers: [...state.event.volunteers, action.payload]
        }
      };
    default:
      return state;
  }
};

export default eventManager;
