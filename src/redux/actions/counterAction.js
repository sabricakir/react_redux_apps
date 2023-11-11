import * as actionTypes from './actionTypes';

export const incrementByOne = () => ({ type: actionTypes.INCREASE_BY_ONE, payload: 1 });
export const decrementByOne = () => ({ type: actionTypes.DECREASE_BY_ONE, payload: 1 });
export const incrementByTwo = () => ({ type: actionTypes.INCREASE_BY_TWO, payload: 2 });
export const decrementByTwo = () => ({ type: actionTypes.DECREASE_BY_TWO, payload: 2 });