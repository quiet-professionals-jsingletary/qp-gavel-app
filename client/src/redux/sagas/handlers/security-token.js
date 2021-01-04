import { call, put } from "redux-saga/effects";
import { setSecurityToken, decryptSecurityToken } from "../../reducers/security-token";
import { setSecurityTokenRequest, decryptSecurityTokenRequest } from "../requests/security-token";

export function* handleSetSecurityToken(action) {
  try {
    const response = yield call(setSecurityTokenRequest);
    const { data } = response;
    yield put(setSecurityToken(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}

export function* handleDecryptSecurityToken(action) {
  try {
    const response = yield call(decryptSecurityTokenRequest);
    const { data } = response;
    yield put(decryptSecurityToken(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}