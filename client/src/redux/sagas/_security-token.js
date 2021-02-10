import { call, put  } from "redux-saga/effects";
// import { getAppConfig } from "../../utils/request";

/*/
*  ┌───────────────────────────────────────────┐
*  │ |> Redux-Saga - Security Worker Sagas     │
*  └───────────────────────────────────────────┘
/*/

import {
  SECURITY_TOKEN_CHECK,
  SECURITY_TOKEN_SET,
  SECURITY_TOKEN_DECRYPT,
  SECURITY_TOKEN_FAIL,
  SECURITY_TOKEN_SUCCESS
} from "../types/security-types";

// WORKER SAGAS //
function* checkSecurityTokenSaga(action) {
  try {
    yield put({
      type: SECURITY_TOKEN_CHECK,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: config/checkSecurityTokenSaga, ", error);
  }
}

function* setSecurityTokenSaga(action) {
  try {
    console.log("Action: ", action);
    yield put({
      type: SECURITY_TOKEN_SET,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: config/setSecurityTokenSaga, ", error);
  }
}

// TODO: Replace with a FAIL action type
function* decryptSecurityTokenSaga(action) {
  try {
    console.log("Action: ", action);
    yield put({
      type: SECURITY_TOKEN_DECRYPT,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: config/decryptSecurityTokenSaga, ", error);
  }
}
