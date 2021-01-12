import { takeLatest } from "redux-saga/effects";

import { handleSetSecurityToken } from "./handlers/security-token";
import { handleLocationDataSearch } from "./handlers/location-data";

import { handleQueryDevicesPush } from "./handlers/query-devices";
import { handleQueryDevicesSend } from "./handlers/query-devices";

import { types as securityTypes } from "../reducers/security-token";
import { types as locationDataTypes } from "../reducers/location-data";
import { types as queryDevicesTypes } from "../reducers/query-devices";

export function* watcherSaga() {
  yield takeLatest(securityTypes.SECURITY_TOKEN_SET, handleSetSecurityToken);
  yield takeLatest(locationDataTypes.LOCATION_DATA_SEARCH, handleLocationDataSearch);
  yield takeLatest(queryDevicesTypes.QUERY_DEVICES_PUSH, handleQueryDevicesPush);
  yield takeLatest(queryDevicesTypes.QUERY_DEVICES_SEND, handleQueryDevicesSend);
}