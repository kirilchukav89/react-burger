import {
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT
} from '../actions';

const initialState = {
  data: {}
}

export const currentIngredient = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        data: action.data
      };
    }
    case CLEAR_CURRENT_INGREDIENT: {
      return {
        ...state,
        data: {}
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}