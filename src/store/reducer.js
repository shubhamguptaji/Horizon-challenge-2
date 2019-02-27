import { RECEIVE_API_DATA } from './action';
import { combineReducers } from 'redux';

const data = (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};

export default combineReducers({ data });
