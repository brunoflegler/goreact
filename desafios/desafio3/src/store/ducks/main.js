/**
 * Types
 */

export const Types = {
  OPEN_MODAL: 'main/OPEN_MODAL',
  CLOSE_MODAL: 'main/CLOSE_MODAL',
};

/**
 * Actions
 */

export const Creators = {
  openModal: () => ({
    type: Types.OPEN_MODAL,
    // payload: {
    //   modalIsOpen: true,
    // },
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
    // payload: {
    //   modalIsOpen: false,
    // },
  }),
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  modalIsOpen: false,
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, modalIsOpen: true };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
}
