import * as constants from '../constants/user';

import { login, logout, register } from '../services/user-api';

export function authenticateUserRequest() {
  return {
    type: constants.CONNECT_USER_REQUEST
  }
}

export function authenticateUserSuccess(response) {
  return {
    type: constants.CONNECT_USER_SUCCESS,
    response
  }
}

export function authenticateUserFailure(error) {
  return {
    type: constants.CONNECT_USER_FAILURE,
    error
  }
}

/**
 * Action de connection, qui va faire appel au service
 * de login utilisateur.
 * @param username
 * @param password
 * @returns {Function}
 */
export function connectUser(username, password) {
  return dispatch => {
    dispatch(authenticateUserRequest());
    login(username, password)
      .then(result => {
        dispatch(authenticateUserSuccess(result));
      })
      .catch(err => {
        dispatch(authenticateUserFailure(err))
      })
  }
}