import { call, put  } from "redux-saga/effects";
import { types } from "../reducers/security-token";
// import { getAppConfig } from "../../utils/request";

// WORKER SAGAS //
function* checkSecurityTokenSaga(action) {
  try {
    yield put({
      type: types.SECURITY_TOKEN_CHECK,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/checkSecurityTokenSaga, ", e);
  }
}

function* setSecurityTokenSaga(action) {

  console.log("Action: ", action);

  try {
    yield put({
      type: types.SECURITY_TOKEN_SET,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/setSecurityTokenSaga, ", e);
  }
}

// TODO: Replace with a FAIL action type
function* decryptSecurityTokenSaga(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.SECURITY_TOKEN_DECRYPT,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/decryptSecurityTokenSaga, ", e);
  }
}
