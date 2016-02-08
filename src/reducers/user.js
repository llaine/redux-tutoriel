import * as actions from '../constants/user';

const defaultState = {
  fetching_user:false,
  connected:false
};

/**
 * Principal reducer relatif aux actions de l'utilisateur.
 * @param state
 * @param action
 * @returns {*}
 */
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.CONNECT_USER_REQUEST:
      return {
        ...state,
        fetching_user:true,
        connected:false
      };
    case actions.CONNECT_USER_SUCCESS:
      return {
        ...state,
        fetching_user:false,
        connected:true,
        response:action.response
      };
    case actions.CONNECT_USER_FAILURE:
      return {
        ...state,
        fetching_user:false,
        connected:false,
        error:action.error
      };
    default:
      return state;
  }
}

export default reducer;