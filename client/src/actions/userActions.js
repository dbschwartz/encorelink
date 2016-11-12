import { browserHistory } from 'react-router';
import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  START_LOGIN_VALID_CHECK
} from '../constants/reduxConstants';
import { getUserId } from '../reducers/userManager';
import { get, post } from '../utils/apiHelpers';

const startLoginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createErrorAction(LOGIN_FAILURE);

export function loginRequest(loginData) {
  return createApiAction({
    callApi: () => post('users/login?include=user', {
      body: JSON.stringify(loginData),
    }),
    startAction: startLoginRequest,
    successAction: (res) => loginSuccess(res),
    failAction: (error) => loginFailure(error)
  });
}

const logout = createAction(LOGOUT);

export function logoutUser() {
  browserHistory.push('/');
  return logout();
}

const startRegisterRequest = createAction(REGISTER_REQUEST);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerFailure = createErrorAction(REGISTER_FAILURE);

function registerSuccessAndLogin(response, email, password) {
  return dispatch => {
    dispatch(registerSuccess(response));
    dispatch(loginRequest({ email, password }));
  };
}

export function registerRequest(email, password, isMusician) {
  return createApiAction({
    callApi: () => post('users', {
      body: JSON.stringify({ isMusician, email, password })
    }),

    startAction: () => startRegisterRequest(),
    successAction: (res) => registerSuccessAndLogin(res, email, password),
    failAction: (error) => registerFailure(error)
  });
}

const startLoginValidCheck = createAction(START_LOGIN_VALID_CHECK);

export function checkIfLoginIsValid() {
  return createApiAction({
    shouldCallApi: (state) => getUserId(state),
    callApi: (state) => get(`users/${getUserId(state)}`),
    startAction: startLoginValidCheck,
    failAction: logoutUser
  });
}
