import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from './action';
import { fetchProductCategories } from './api';

function* getApiData() {
  try {
    const data = yield call(fetchProductCategories);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
