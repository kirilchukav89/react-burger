import { combineReducers } from 'redux';

import { allIngredients } from './all-ingredients';
import { constructorIngredients } from './constructor-ingredients';
import { currentIngredient } from './current-ingredient';
import { order } from './order';

export const rootReducer = combineReducers({
  allIngredients,
  constructorIngredients,
  currentIngredient,
  order
});