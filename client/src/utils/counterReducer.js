// vanilla react
import {INCREMENT} from "../actions/counter/types";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {  ...state, count: state.count + 1};
    case 'DECREMENT':
      return { ...state, count: state.count - 1};
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};