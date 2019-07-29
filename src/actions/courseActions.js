import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING } from './types';

export const setCoursesLoading = () => {
  return {
    type: COURSES_LOADING,
  };
};

export const getCourses = () => dispatch => {
  dispatch(setCoursesLoading());
  dispatch({
    type: GET_COURSES,
    payload: [],
  });
};
