import { request } from "../../utils/api";
import { v4 as uuidv4 } from 'uuid';

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
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    // fetch(`${API_BASE_URL}/ingredients`)
    //   .then(res  => {
    //     if (res && res.ok) {
    //       return res.json();
    //     } else {
    //       return Promise.reject(res.status);
    //     }
    //   })
    request('/ingredients')
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
    request('/orders', {
        method: 'POST',
        body: JSON.stringify({
          ingredients: orderIngredients
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(data => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          data: data
        }),
        dispatch({
          type: RESET_CONSTRUCTOR
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ORDER_ERROR,
          data: err
        })
      })
  }
}

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  data: {
    ...ingredient,
    uniqueId: uuidv4()
  }
})

export const removeIngredient = (index) => ({
  type: REMOVE_INGREDIENT,
  data: index
})

export const moveIngredient = (items) => ({
  type: MOVE_INGREDIENT,
  data: items
})
