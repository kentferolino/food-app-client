import axios from 'axios';
import { GET_COURSES, GET_COURSE, COURSES_LOADING } from './types';
import { tokenConfig } from './authActions';

export const setCoursesLoading = () => {
  return {
    type: COURSES_LOADING,
  };
};

export const getCourses = () => dispatch => {
  dispatch(setCoursesLoading());
  axios.get('/api/course').then(res =>
    dispatch({
      type: GET_COURSES,
      payload: res.data,
    }),
  );
};

export const getCourseByName = name => (dispatch, getState) => {
  dispatch(setCoursesLoading());
  axios.get(`/api/course/name/${name}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data,
      })
    );
};
