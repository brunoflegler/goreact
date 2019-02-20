export const Types = {
  SET_ERROR: ':error/SET_ERROR',
  SET_HIDE: ':error/SET_HIDE',
};

const INITIAL_STATE = {
  visible: false,
  message: null,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ERROR:
      return { ...state, visible: true, message: action.payload.message };

    case Types.SET_HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  setError: message => ({ type: Types.SET_ERROR, payload: { message } }),
  setHideError: () => ({
    type: Types.SET_HIDE,
  }),
};
