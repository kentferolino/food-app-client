/* eslint-disable no-underscore-dangle */
import { GET_COURSES, GET_COURSE, ADD_COURSE, DELETE_COURSE, COURSES_LOADING } from '../actions/types';

const initialState = {
  courses: [],
  course: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return { ...state, courses: action.payload, loading: false };
    case GET_COURSE:
      return { ...state, course: action.payload, loading: false };
    case COURSES_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
