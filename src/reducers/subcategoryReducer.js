/* eslint-disable no-underscore-dangle */
import {
  GET_SUBCATEGORIES,
  SUBCATEGORIES_LOADING
} from '../actions/types';

const initialState = {
  subcategories: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUBCATEGORIES:
      return { ...state, subcategories: action.payload, loading: false };
    case SUBCATEGORIES_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
