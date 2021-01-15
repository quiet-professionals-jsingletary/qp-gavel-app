import { call, put } from "redux-saga/effects";
import { areaQueryPush, areaQuerySend, areaQueryDone, areaQueryFail } from "../../reducers/area-query";
import { areaQueryRequest } from "../requests/area-query";

/*/
  *  ┌────────────────────────────────────────┐
  *  │ |> Action Handlers - Area Queries      │
  *  └────────────────────────────────────────┘
/*/
// PUSH
export function* handleAreaQueryPush(action) {
  console.log("Search Params: ", action);
  try {
    yield put(areaQueryPush(action));

  } catch (error) {
    console.log('Error: ', error)
  }
}

// SEND
export function* handleAreaQuerySend(action) {
  console.log("Search Params: ", action);
  try {
    const response = yield call(areaQueryRequest, action.payload.tempSecurityToken);
    // const response = yield call(mockDataSearchRequest, action.payload.tempSecurityToken);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(areaQueryDone(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}