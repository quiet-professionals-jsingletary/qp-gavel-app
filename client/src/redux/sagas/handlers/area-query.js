import { nearestVertex } from "@arcgis/core/geometry/geometryEngine";
import { call, put, putResolve } from "redux-saga/effects";
import { areaQueryAddToState, areaQueryPush, areaQuerySend, areaQueryDone, areaQueryFail } from "../../reducers/area-query";
import { areaQueryRequest } from "../requests/area-query";

/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Action Handlers - Area Queries    │
  *  └──────────────────────────────────────┘
/*/
// PUTS - Adds`payload` to request API
export function* handleAreaQueryPuts(action) {
  console.log("Area Query 'PUTS': ", action);
  try {
    yield putResolve(areaQueryAddToState(action));
  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

// PUSH - Updates `payload` to request API
export function* handleAreaQueryPush(action) {
  console.log("Area Query: 'PUSH'", action);
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