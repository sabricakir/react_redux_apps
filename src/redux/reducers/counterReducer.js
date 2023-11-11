import * as actionTypes from '../actions/actionTypes';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_BY_ONE:
      newState = state + action.payload;
      return newState;
    case actionTypes.DECREASE_BY_ONE:
      newState = state - action.payload;
      return newState;
    case actionTypes.INCREASE_BY_TWO:
      newState = state + action.payload;
      return newState;
    case actionTypes.DECREASE_BY_TWO:
      newState = state - action.payload;
      return newState;
    default:
      return state;
  }
}

export default counterReducer;