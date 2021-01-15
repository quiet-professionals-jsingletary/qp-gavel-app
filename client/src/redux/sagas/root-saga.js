import { takeLatest } from "redux-saga/effects";

import { handleSetSecurityToken } from "./handlers/security-token";
// import { handleRefIdQueryPush } from "./handlers/refid-query";

import { handleAreaQueryPush } from "./handlers/area-query";
// import { handleAreaQuerySend } from "./handlers/area-query";

import { types as securityTypes } from "../reducers/security-token";
import { types as areaQueryTypes } from "../reducers/area-query";
// import { types as refIdQueryTypes } from "../reducers/refid-query";
// import { types as polygonQueryTypes } from "../reducers/polygon-query";

export function* watcherSaga() {
  yield takeLatest(securityTypes.SECURITY_TOKEN_SET, handleSetSecurityToken);
  // yield takeLatest(refIdQueryTypes.REF_ID_QUERY_PUSH, handleRefIdQueryPush);
  yield takeLatest(areaQueryTypes.AREA_QUERY_PUSH, handleAreaQueryPush);
  // yield takeLatest(queryDevicesTypes.QUERY_DEVICES_SEND, handleAreaQuerySend);
}