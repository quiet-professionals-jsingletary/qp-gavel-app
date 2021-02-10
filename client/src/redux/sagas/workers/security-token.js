import { call, put } from "redux-saga/effects";
import { securityTokenSuccessSaga } from "../../actions/security-token-actions";
import { setSecurityToken, securityTokenSuccess,  } from "../../reducers/security-reducer";
import { setSecurityTokenRequest, mockSecurityTokenRequest } from "../requests/security-token";

// TODO: Update generator name to reflect `worker` in place of `handle`
export function* handleSetSecurityToken(action) {
  try {
    const response = yield call(setSecurityTokenRequest);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(securityTokenSuccessSaga(data));

  } catch (error) {
    console.log('Error: ', error);

  }
}
