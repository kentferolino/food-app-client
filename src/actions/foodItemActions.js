import {
  GET_FOODITEMS,
  FOODITEMS_LOADING
} from './types';
import { foodItems } from '../utils/index';

export const setFoodItemsLoading = () => {
  return {
    type: FOODITEMS_LOADING,
  };
};

export const getFoodItems = ({ course, subcategory }) => dispatch => {
  debugger;
  console.log(JSON.stringify(foodItems['appetizer']))
  dispatch(setFoodItemsLoading());
  dispatch({
    type: GET_FOODITEMS,
    payload: foodItems[course] || [],
  });
};
