/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'gitlist/ADD_REQUEST',
  ADD_SUCCESS: 'gitlist/ADD_SUCCESS',
  ADD_FAILURE: 'gitlist/ADD_FAILURE',
};

/**
 * Actions
 */

export const Creators = {
  addGitListRequest: githubCoord => ({
    type: Types.ADD_REQUEST,
    payload: {
      githubCoord,
    },
  }),

  addGitListSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      data,
    },
  }),

  addGitListFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: {
      error,
    },
  }),
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function gitlist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state };
    case Types.ADD_SUCCESS:
      console.log(action);

      return {
        ...state,
        data: [...state.data, action.payload.data],
      };
    default:
      return state;
  }
}
