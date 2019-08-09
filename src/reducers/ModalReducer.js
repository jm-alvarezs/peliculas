import { SHOW_MODAL, HIDE_MODAL, SET_CONFIRM } from "../actions/types";

const INITIAL_STATE = {
  showModal: false,
  onConfirm: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CONFIRM:
        return {...state, onConfirm: action.payload };
    case SHOW_MODAL:
      return { ...state, showModal: true };
    case HIDE_MODAL:
        return {...state, showModal: false };
    default:
      return { ...state };
  }
};
