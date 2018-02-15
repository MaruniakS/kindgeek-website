import { CHANGE_VALUE } from '../actions/actionTypes';

const initialState = {
  value: ''
};

export default (state = initialState, action) => {
  console.log(action.value);
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        value: action.value
      };
    }

    default:
      return state;
  }
};
