import { DECREMENT, INCREMENT, ASYNC } from '../actions/actionTypes';
import { DECREMENT_REQUEST, INCREMENT_REQUEST } from '../constants/counter';

const initialState = {
  value: 0,
  asyncIncrement: false,
  asyncDecrement: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1
      };
    }

    case DECREMENT: {
      return {
        ...state,
        value: state.value - 1
      };
    }

    case ASYNC: {
      return {
        ...state,
        asyncIncrement:
          action.value === INCREMENT_REQUEST
            ? !state.asyncIncrement
            : state.asyncIncrement,
        asyncDecrement:
          action.value === DECREMENT_REQUEST
            ? !state.asyncDecrement
            : state.asyncDecrement
      };
    }

    default:
      return state;
  }
};
