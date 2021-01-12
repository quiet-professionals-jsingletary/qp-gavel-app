import { call, put  } from "redux-saga/effects";
import { types } from "../reducers/security-token";
// import { getAppConfig } from "../../utils/request";

// WORKER //
function* checkSecurityToken(action) {
  try {
    yield put({
      type: types.SECURITY_TOKEN_CHECK,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/checkSecurityToken, ", e);
  }
}

function* setSecurityToken(action) {

  console.log("Action: ", action);

  try {
    yield put({
      type: types.SECURITY_TOKEN_SET,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/setSecurityToken, ", e);
  }
}

// TODO: Replace with a FAIL action type
function* decryptSecurityToken(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.SECURITY_TOKEN_DECRYPT,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/decryptSecurityToken, ", e);
  }
}
