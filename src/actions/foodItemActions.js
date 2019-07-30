import axios from 'axios';
import { GET_FOODITEMS, FOODITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';

export const setFoodItemsLoading = () => {
  return {
    type: FOODITEMS_LOADING,
  };
};

export const getFoodItems = ({ subcategories }) => dispatch => {
  dispatch(setFoodItemsLoading());
  axios.get('/api/fooditem')
    .then(res => {
      const foodItemsArray = res.data;
      const subcatItemsArray = subcategories ? subcategories.map(subcat => {
        const subcatItem = foodItemsArray.filter(food => food.subcategory === subcat._id);
        return subcatItem ? subcatItem.map(x => {
          return {
            ...x,
            imageUrl: x.imageUrl || subcat.imageUrl,
            subcategory: {
              name: subcat.name, label: subcat.label
            },
            subcategoryName: subcat.name,
          }
        }) : [];
      }) : [];
      const mergedArrays = [].concat(...subcatItemsArray);
      dispatch({
        type: GET_FOODITEMS,
        payload: mergedArrays,
      })
    }
    );
};

export const getFoodItemsBySubcatID = (subcatID) => (dispatch, getState) => {
  dispatch(setFoodItemsLoading());
  axios.get(`/api/fooditem/subcategory/${subcatID}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_FOODITEMS,
        payload: res.data,
      })
    );
};
