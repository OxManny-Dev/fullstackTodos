// Redux only allows us to use 1 reducer
// So they gave us a function called "combineReducers"
import { combineReducers } from 'redux';

import counterReducer from './counterReducer';

export default combineReducers({
  counter: counterReducer,
});



