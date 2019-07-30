import axios from 'axios';
import { GET_SUBCATEGORIES, SUBCATEGORIES_LOADING } from './types';
import { tokenConfig } from './authActions';

export const setSubcategoriesLoading = () => {
  return {
    type: SUBCATEGORIES_LOADING,
  };
};

export const getSubcategories = () => dispatch => {
  dispatch(setSubcategoriesLoading());
  axios.get('/api/subcategories').then(res => {
    dispatch({
      type: GET_SUBCATEGORIES,
      payload: res.data,
    });
  });
};

export const getSubcategoriesByCourseName = (course) => (dispatch, getState) => {
  dispatch(setSubcategoriesLoading());
  axios.get(`/api/subcategories/coursename/${course}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: res.data,
      })
    );
};
