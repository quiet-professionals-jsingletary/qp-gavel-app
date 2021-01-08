import { call, put, spawn } from "redux-saga/effects";
import { setSecurityToken, securityTokenSuccess, decryptSecurityToken,  } from "../../reducers/security-token";
import { setSecurityTokenRequest, decryptSecurityTokenRequest, mockSecurityTokenRequest } from "../requests/security-token";

export function* handleSetSecurityToken(action) {
  try {
    const response = yield call(setSecurityTokenRequest);
    const { data } = response;
    // console.log("Handler Response: ", response);
    yield put(securityTokenSuccess(data));
    // yield put(decryptSecurityToken(data));

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

    console.log('Error: ', error);
  }
}
