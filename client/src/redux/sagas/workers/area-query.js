
import { call, put } from "redux-saga/effects";
import {
  areaQueryPuts,
  areaQueryPush,
  areaQuerySend,
  areaQueryFail } from "../../actions/area-query-actions";
// import { 
//   areaQueryPuts, 
//   areaQueryPush, 
//   areaQuerySend, 
//   areaQueryFail } from "../../reducers/area-reducer";
import { areaQueryRequest } from "../requests/area-query";
/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Action Workers - Area Queries     │
  *  └──────────────────────────────────────┘
/*/
//_PUTS - Adds`payload` to request API
export function* handleAreaQueryPuts(action) {
  console.log("Area Query 'PUTS' Handler: ", action);
  try {
    const props = yield put(areaQueryPuts(action));
    yield put({ type: 'AREA_QUERY_PUSH', props })
  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

//_PUSH - Updates `payload` to request API
export function* handleAreaQueryPush(action) {
  console.log("Area Query 'PUSH' Handler:", action);
  try {
    yield put(areaQueryPush(action));
    
  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}

//_SEND - Fires `search` request to API
export function* handleAreaQuerySend(action) {
  console.log("Search Params Handler: ", action);
  try {
    const response = yield call(areaQueryRequest, action.payload);
    const { data } = response;
    console.log("Handler Response: ", response);
    const res = yield put(areaQuerySend(data));
    // if (res) { 
    //   yield put({ type: 'AREA_QUERY_DONE', res });
    // }

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}
//_FAIL - Handle error gracefully
export function* handleAreaQueryFail(action) {
  console.log("Area Query Handler:", action);
  try {
    yield put(areaQueryFail(action));

  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
}