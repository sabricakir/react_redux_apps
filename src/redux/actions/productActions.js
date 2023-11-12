import * as actionTypes from './actionTypes';

export function getProductList(products) {
  return { type: actionTypes.GET_PRODUCTS, payload: products };
}

export function getProducts() {
  return function (dispatch) {
    let url = 'http://localhost:3000/products';
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductList(result)));
  };
}