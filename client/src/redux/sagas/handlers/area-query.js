
// import { call, put } from "redux-saga/effects";
import { nearestVertex } from "@arcgis/core/geometry/geometryEngine";
import { call, put, putResolve } from "redux-saga/effects";
import { areaQueryPuts, areaQueryPush, areaQuerySend, areaQueryDone, areaQueryFail } from "../../reducers/area-query";
import { areaQueryRequest } from "../requests/area-query";
/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Action Handlers - Area Queries    │
  *  └──────────────────────────────────────┘
/*/
//_PUTS - Adds`payload` to request API
export function* handleAreaQueryPuts(action) {
  console.log("Area Query 'PUTS': ", action);
  try {

    const props = yield putResolve(areaQueryPuts(action));
    yield put({ type: 'AREA_QUERY_PUSH', props })
  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

//_PUSH - Updates `payload` to request API
export function* handleAreaQueryPush(action) {
  console.log("Area Query: 'PUSH'", action);
  try {
    const response = yield put(areaQueryPush(action));
    if (response) {
      yield put({ type: 'AREA_QUERY_SEND', response });
    }
    yield put(areaQueryPush(action));

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

//_SEND - Fires `search` request to API
export function* handleAreaQuerySend(action) {
  console.log("Search Params: ", action);
  try {
    const response = yield call(areaQueryRequest, action.payload);
    const { data } = response;
    console.log("Handler Response: ", response);
    const res = yield put(areaQuerySend(data));
    if (res) { 
      yield put({ type: 'AREA_QUERY_DONE', res });
    }

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}
//_FAIL - Handle error gracefully
export function* handleAreaQueryFail(action) {
  console.log("Area Query: ", action);
  try {
    yield put(areaQueryFail(action));

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}