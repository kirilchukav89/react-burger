import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
} from '../actions';

const initialState = {
  data: [],
  loading: true,
  hasError: false,
  errorType: null
}

export const allIngredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: action.data
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        data: [],
        loading: false,
        hasError: true,
        errorType: action.data
      };
    }
    default: {
      return state;
    }
  }
}
