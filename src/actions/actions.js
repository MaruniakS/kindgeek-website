import { DECREMENT, INCREMENT, CHANGE_VALUE } from './actionTypes';

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
