import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './action';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

/**
 * When the event are trigged, cancel multi-calls with takeLatest
 * with that, sagas call only one event.
 */
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
