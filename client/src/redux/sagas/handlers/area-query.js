import { call, put } from "redux-saga/effects";
import { areaQueryPush, areaQuerySend, areaQueryDone, areaQueryFail } from "../../reducers/area-query";
import { areaQueryRequest } from "../requests/area-query";

/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Action Handlers - Area Queries    │
  *  └──────────────────────────────────────┘
/*/
export function* handleAreaQueryPush(action) {
  console.log("Area Query: ", action);
  try {
    yield put(areaQueryPush(action));

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

// SEND - Fires `search` request to API
export function* handleAreaQuerySend(action) {
  console.log("Search Params: ", action);
  try {
    const response = yield call(areaQueryRequest, action.payload);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(areaQuerySend(data));

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

// FAIL - Handle error gracefully
export function* handleAreaQueryFail(action) {
  console.log("Area Query: ", action);
  try {
    yield put(areaQueryFail(action));

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}