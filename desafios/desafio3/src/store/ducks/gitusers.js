/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'gitusers/ADD_REQUEST',
  ADD_SUCCESS: 'gitusers/ADD_SUCCESS',
  ADD_FAILURE: 'gitusers/ADD_FAILURE',
  REMOVE_REQUEST: 'gitusers/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'gitusers/REMOVE_SUCCESS',
};

/**
 * Actions
 */

export const Creators = {
  addGitUsersRequest: githubCoord => ({
    type: Types.ADD_REQUEST,
    payload: {
      githubCoord,
    },
  }),

  addGitUsersSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      data,
    },
  }),

  addGitUsersFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: {
      error,
    },
  }),

  removeGitUsersRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: {
      id,
    },
  }),

  removeGitUsersSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: {
      data,
    },
  }),
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
};

export default function gitusers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.REMOVE_REQUEST:
      return {
        ...state,
        id: action.payload.id,
      };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
