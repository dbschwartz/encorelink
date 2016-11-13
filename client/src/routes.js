import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import Landing from './components/Landing';
import CreateEventContainer from './containers/CreateEventContainer';
import EventsContainer from './containers/EventsContainer';
import EventContainer from './containers/EventContainer';
import Terms from './components/Terms';
import OrganizerProfile from './components/OrganizerProfile';
import AuthenticatedRoutesContainer from './containers/AuthenticatedRoutesContainer';
import EventsAttendingContainer from './containers/EventsAttendingContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/terms" component={Terms} />

    <Route component={AuthenticatedRoutesContainer} >
      <Route path="/createEvent" component={CreateEventContainer} />
      <Route path="/organizerProfile" component={OrganizerProfile} />
      <Route path="/events" component={EventsContainer} />
      <Route path="/event/:id" component={EventContainer} />
      <Route path="/eventsAttending" component={EventsAttendingContainer} />
    </Route>
  </Route>
);

export default routes;
