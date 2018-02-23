import { DECREMENT, INCREMENT, CHANGE_VALUE, ASYNC } from './actionTypes';
import { DECREMENT_REQUEST, INCREMENT_REQUEST } from '../constants/counter';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const changeValue = value => {
  return {
    type: CHANGE_VALUE,
    value
  };
};

export const async = value => {
  return {
    type: ASYNC,
    value
  };
};

export const asyncIncrement = () => {
  return dispatch => {
    dispatch(async(INCREMENT_REQUEST));

    return setTimeout(() => {
      dispatch(increment());
      dispatch(async(INCREMENT_REQUEST));
    }, 3000);
  };
};

export const asyncDecrement = () => {
  return dispatch => {
    dispatch(async(DECREMENT_REQUEST));

    return setTimeout(() => {
      dispatch(decrement());
      dispatch(async(DECREMENT_REQUEST));
    }, 3000);
  };
};
