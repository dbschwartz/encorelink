import React, { PropTypes } from 'react';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

class Event extends React.Component {
  static propTypes = {
    loadEvent: PropTypes.func.isRequired,
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    isMusician: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
    signUpForEvent: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    isRegistered: PropTypes.bool
  }

  componentWillMount() {
    this.props.loadEvent(this.props.params.id, `?filter=${JSON.stringify({
      include: 'volunteers'
    })}`);
  }

  displayMusicianOptions() {
    const { isMusician, isRegistered } = this.props;

    if (isRegistered) {
      return (
        <p> You are signed up for this event </p>
      );
    }

    if (!isMusician) {
      return undefined;
    }

    return (
      <button
        className="button"
        onClick={() => this.props.signUpForEvent(this.props.event)}
      >
        Sign Up
      </button>
    );
  }

  render() {
    const { date, endDate, name, location } = this.props.event || {};
    if (this.props.isFetching) {
      return <p> Loading ... </p>;
    }

    const { day, time } = getFormattedDayAndTime(date, endDate);
    return (
      <div className="event">
        <h3>{ name }</h3>
        <h4>{ day } | { time }</h4>
        { location }
        { this.displayMusicianOptions() }
      </div>
    );
  }
}

export default Event;
