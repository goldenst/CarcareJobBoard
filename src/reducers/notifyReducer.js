import { NOTIFY_USER } from "../actions/types";

const initalstate = {
  mssage: null,
  messageType: null
};

export default function(state = initalstate, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    default:
      return state;
  }
}
