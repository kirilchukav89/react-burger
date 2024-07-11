import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR
} from '../actions';

const initialState = {
  data: {},
  loading: true,
  hasError: false,
  errorType: null
}

export const order = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: action.data
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        data: {},
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