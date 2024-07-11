import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  RESET_CONSTRUCTOR
} from '../actions';

const initialState = {
  data: [],
  totalPrice: 0
}

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      console.log(action.data.uniqueId);
      if (action.data.type === 'bun') {
        let isBun = state.data.find((item) => item.type == 'bun');
        return {
          ...state,
          data: [...state.data.filter((item) => item.type !== 'bun'), action.data],
          totalPrice: state.totalPrice + (action.data.price * 2) - (isBun ? isBun.price * 2 : 0)
        };
      } else {
        return {
          ...state,
          data: [...state.data, action.data],
          totalPrice: state.totalPrice + action.data.price
        };
      }
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        data: state.data.filter((item, index) => index !== action.data),
        totalPrice: state.totalPrice - state.data[action.data].price
      };
    }
    case MOVE_INGREDIENT: {
      const data = state.data;
      const { moveIndex, targetIndex } = action.data;
      if (moveIndex > targetIndex) {
        return {
          ...state,
          data: [...data.slice().toSpliced(moveIndex, 1).toSpliced(targetIndex, 0, data[moveIndex])]
        };
      } if (moveIndex < targetIndex) {
        return {
          ...state,
          data: [...data.slice().toSpliced(moveIndex, 1).toSpliced(targetIndex - 1, 0, data[moveIndex])]
        };
      } else {
        return {
          ...state
        }
      }
    }
    case RESET_CONSTRUCTOR: {
      return initialState
    }
    default: {
      return state;
    }
  }
}
