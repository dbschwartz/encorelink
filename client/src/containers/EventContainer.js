import { connect } from 'react-redux';
import { loadEvent } from '../actions';
import { isLoggedInUserAMusician, isLoggedInUserRegistered } from '../reducers/userManager';
import { signUpForEvent } from '../actions/eventActions';

import Event from '../components/Event';

const mapStateToProps = (state) => {
  return {
    isFetching: state.eventManager.isFetching,
    isMusician: isLoggedInUserAMusician(state),
    event: state.eventManager.event,
    isRegistered: isLoggedInUserRegistered(state)
  };
};

const mapDispatchToProps = {
  loadEvent,
  signUpForEvent
};

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);

export default EventContainer;
