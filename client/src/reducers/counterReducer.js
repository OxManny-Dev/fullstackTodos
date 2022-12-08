import { INCREMENT } from '../actions/counter/types';

// Redux version
// action creator > dispatch > reducers > store
export const counterReducer = function(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1};
    default:
      return state;
  }
};
