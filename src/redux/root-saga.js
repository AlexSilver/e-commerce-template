import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop';
import { userSagas } from './user';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas)]);
}
