import {
  GET_INGREDIENTS_REQUEST
} from '../actions';

const initialState = {
  data: []
}

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}