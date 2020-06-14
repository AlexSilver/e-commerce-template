import { all, call, takeLatest, put } from 'redux-saga/effects';
import { UserActionTypes } from '../user';
import { clearCart } from './cart.actions';

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
