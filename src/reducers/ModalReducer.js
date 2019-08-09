import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_CONFIRM,
  MODAL_COMPONENT
} from "../actions/types";

const INITIAL_STATE = {
  showModal: false,
  onConfirm: undefined,
  component: "",
  message: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_COMPONENT:
      return {
        ...state,
        showModal: true,
        onConfirm: action.payload.onConfirm,
        component: action.payload.component
      };
    case SET_CONFIRM:
      return {
        ...state,
        showModal: true,
        onConfirm: action.payload.onConfirm,
        message: action.payload.message,
        component: "message"
      };
    case SHOW_MODAL:
      return { ...state, showModal: true };
    case HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return { ...state };
  }
};
