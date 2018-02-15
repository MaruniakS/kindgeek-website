import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import changeText from './inputText';

export default combineReducers({
  routing: routerReducer,
  counter,
  changeText
});
