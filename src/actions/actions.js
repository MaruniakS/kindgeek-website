import { DECREMENT, INCREMENT, CHANGE_VALUE, ASYNC } from './actionTypes';

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

export const async = () => {
  return {
    type: ASYNC
  };
};

export const asyncIncrement = () => {
  return dispatch => {
    dispatch(async());

    return setTimeout(() => {
      dispatch(increment());
      dispatch(async());
    }, 3000);
  };
};

export const asyncDecrement = () => {
  return dispatch => {
    dispatch(async());

    return setTimeout(() => {
      dispatch(decrement());
      dispatch(async());
    }, 3000);
  };
};
