import { takeLatest } from "redux-saga/effects";

import { handleSetSecurityToken } from "./handlers/security-token";
import { handleLocationDataSearch } from "./handlers/location-data";

import { types as securityTypes } from "../reducers/security-token";
import { types as locationDataTypes } from "../reducers/location-data";

export function* watcherSaga() {
  yield takeLatest(securityTypes.SECURITY_TOKEN_SET, handleSetSecurityToken);
  yield takeLatest(locationDataTypes.LOCATION_DATA_SEARCH, handleLocationDataSearch);
}