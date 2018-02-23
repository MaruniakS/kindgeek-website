import { DECREMENT, INCREMENT, ASYNC } from '../actions/actionTypes';

const initialState = {
  value: 0,
  async: false
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
        async: !state.async
      };
    }

    default:
      return state;
  }
};
