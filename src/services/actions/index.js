export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

const API = 'https://norma.nomoreparties.space/api/ingredients';

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    fetch(API)
      .then(res  => {
        if (res && res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status}`);
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