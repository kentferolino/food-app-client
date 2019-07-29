import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import authReducer from './authReducer';
import courseReducer from './courseReducer';
import subcategoryReducer from './subcategoryReducer';
import foodItemReducer from './foodItemReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  course: courseReducer,
  subcategories: subcategoryReducer,
  foodItems: foodItemReducer
});
