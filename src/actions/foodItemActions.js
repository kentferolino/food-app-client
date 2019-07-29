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

export const getFoodItems = ({ course, subcategories }) => dispatch => {
  const courseFoodItemsArray = foodItems[course];
  const subcatItemsArray = subcategories ? subcategories.map(subcat => {
    const subcatItem = courseFoodItemsArray[subcat.value];
    return subcatItem ? subcatItem.data.map(x => {
      return {
        ...x,
        imageUrl: subcatItem.imageUrl,
        subcategory: {
          value: subcat.value, label: subcat.label
        },
        subcategoryValue: subcat.value,
      }
    }) : [];
  }) : [];

  const mergedArrays = [].concat(...subcatItemsArray);

  dispatch(setFoodItemsLoading());
  dispatch({
    type: GET_FOODITEMS,
    payload: mergedArrays || [],
  });
};
