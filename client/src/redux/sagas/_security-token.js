import { call, put  } from "redux-saga/effects";
import { types as securityTokenTypes } from "../reducers/security-token";
// import { getAppConfig } from "../../utils/request";

// WORKER //
function* checkSecurityToken(action) {
  try {
    // load config into Redux store
    yield put({
      type: securityTokenTypes.SECURITY_TOKEN_CHECK
    });
  } catch (e) {
    console.error("SAGA ERROR: config/checkSecurityToken, ", e);
  }
}

function* setSecurityToken(action) {

  console.log("Action: ", action);

  try {
    // load config into Redux store
    yield put({
      type: securityTokenTypes.SECURITY_TOKEN_SET,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/setSecurityToken, ", e);
  }
}

function* decryptSecurityToken(action) {
  console.log("SecuityToken Action: ", action);

  try {
    // load config into Redux store
    yield put({
      type: securityTokenTypes.SECURITY_TOKEN_DECRYPT,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: config/decryptSecurityToken, ", e);
  }
}
