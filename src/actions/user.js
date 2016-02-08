import * as constants from '../constants/user';

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
