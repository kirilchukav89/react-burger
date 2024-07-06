import { API_INGREDIENTS, API_ORDER } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const CLEAR_CURRENT_INGREDIENT = 'CLEAR_CURRENT_INGREDIENT';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    fetch(API_INGREDIENTS)
      .then(res  => {
        if (res && res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then(data => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data: data.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_INGREDIENTS_ERROR,
          data: err
        })
      })
  }
}

export const setCurrentIngredient = (ingredient) => ({
  type: SET_CURRENT_INGREDIENT,
  data: ingredient
})

export function getOrder(orderIngredients = []) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    });
    fetch(API_ORDER, {
        method: 'POST',
        body: JSON.stringify({
          ingredients: orderIngredients
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
    })
      .then(res  => {
        if (res && res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: GET_ORDER_SUCCESS,
          data: data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_ORDER_ERROR,
          data: err
        })
      })
  }
}

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  data: ingredient
})

export const removeIngredient = (index) => ({
  type: REMOVE_INGREDIENT,
  data: index
})

export const moveIngredient = (items) => ({
  type: MOVE_INGREDIENT,
  data: items
})
