import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import recycleState from 'redux-recycle';

import userManager from './userManager';
import eventManager from './eventManager';
import miscStateManager from './miscStateManager';
import modelManager from './modelManager';
import { LOGOUT } from '../constants/reduxConstants';

const encoreLinkReducer = combineReducers({
  userManager,
  eventManager,
  miscStateManager,
  modelManager,
  form: formReducer
});

// resets the redux state on LOGOUT action
const resetableRootReducer = recycleState(encoreLinkReducer, [
  LOGOUT
]);

export default resetableRootReducer;
