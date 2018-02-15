import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from '../reducers/counter';
import changeText from '../reducers/inputText';

export default combineReducers({
  routing: routerReducer,
  counter,
  changeText
});
