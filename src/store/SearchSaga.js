import { call, put, takeEvery } from 'redux-saga/effects';

import { REQUEST_SEARCH_DATA, receiveSearchdata } from './action';
import { Search } from './api';

function* searchData() {
  try {
    const data = yield call(Search);
    yield put(receiveSearchdata(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* searchDataSaga() {
  yield takeEvery(REQUEST_SEARCH_DATA, searchData);
}
