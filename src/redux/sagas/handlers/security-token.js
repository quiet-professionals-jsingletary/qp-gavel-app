import { call, put } from "redux-saga/effects";
import { setSecurityToken, securityTokenSuccess,  } from "../../reducers/security-token";
import { setSecurityTokenRequest, mockSecurityTokenRequest } from "../requests/security-token";

// !! File pending deletion - Needs to be deleted once Redux-Saga refactoring is complete !!
// !! Merge this logic into the corresponding file in '/requests' directory

export function* handleSetSecurityToken(action) {
  try {
    const response = yield call(setSecurityTokenRequest);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(securityTokenSuccess(data));

  } catch (error) {
    console.log('Error: ', error);
  }
}
