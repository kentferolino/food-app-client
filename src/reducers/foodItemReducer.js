/* eslint-disable no-underscore-dangle */
import {
  GET_FOODITEMS,
  FOODITEMS_LOADING
} from '../actions/types';

const initialState = {
  foodItems: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FOODITEMS:
      debugger;
      return { ...state, foodItems: action.payload, loading: false };
    case FOODITEMS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
