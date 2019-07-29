import {
  GET_SUBCATEGORIES,
  SUBCATEGORIES_LOADING
} from './types';

const data = {
  soup: [
    { value: 'clear', label: 'Clear' },
    { value: 'thick', label: 'Thick' },
    { value: 'miscellaneous', label: 'Miscellaneous' },
  ],
  appetizer: [
    { value: 'fruits_and_vegetables', label: 'Fruits and Vegetables' },
    { value: 'meat_and_cheese', label: 'Meat and Cheese' },
    { value: 'hot', label: 'Hot' },
  ],
  sidedish: [
    { value: 'bread', label: 'Bread' },
    { value: 'pasta', label: 'Pasta' },
    { value: 'fruits_and_vegetables', label: 'Fruits and Vegetables' },
    { value: 'colds', label: 'Colds' },
  ],
  maincourse: [
    { value: 'beef', label: 'Beef' },
    { value: 'chicken', label: 'Chicken' },
    { value: 'pork', label: 'Pork' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'fish', label: 'Fish' },
  ],
  dessert: [
    { value: 'cakes', label: 'Cakes' },
    { value: 'chocolates_and_candies', label: 'Chocolates and Candies' },
    { value: 'deep_fried', label: 'Deep Fried' },
    { value: 'frozen', label: 'Frozen' },
    { value: 'pastries', label: 'Pastries' },
  ],
}

export const setSubcategoriesLoading = () => {
  return {
    type: SUBCATEGORIES_LOADING,
  };
};

export const getSubcategories = (course) => dispatch => {
  dispatch(setSubcategoriesLoading());
  dispatch({
    type: GET_SUBCATEGORIES,
    payload: data[course] || [],
  });
};
