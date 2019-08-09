import { SHOW_MODAL, HIDE_MODAL, SET_CONFIRM } from "./types";

export const confirm = onConfirm => dispatch => {
  dispatch({ type: SET_CONFIRM, payload: onConfirm });
};

export const showModal = () => dispatch => {
  dispatch({ type: SHOW_MODAL });
};

export const hideModal = () => dispatch => {
  dispatch({ type: HIDE_MODAL });
};
