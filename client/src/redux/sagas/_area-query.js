import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { areaQueryPuts, areaQuerySend } from "../actions/area-query-actions";
import { areaQueryRequest } from "./requests/area-query";

/*/
*  ┌───────────────────────────────┐
*  │ |> Redux-Saga - Generators    │
*  └───────────────────────────────┘
/*/

import * as actions from "../actions/area-query-actions";
import * as services from "../sagas/services/area-query";
import * as types from "../types/area-types";

// WORKER SAGAS //
export function* areaQueryPutsSaga(action) {
  console.log("SAGA ACTION: ", action);
  try {
    yield put(actions.areaQueryPuts(action.payload));
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryPutsSaga, ", error);
  }
}

export function* areaQueryPushSaga(action) {
  console.log("SAGA ACTION: ", action);

  // const { latitude, longitude, radius } = action;

  // const startDate = state.startDate;
  // const endDate = state.endDate;
  // let status = '';

  // // Validate all properties are ready
  // if ((startDate && endDate) && (latitude && longitude)) {
  //   status = 'ready';
  // } else {
  //   status = 'busy';
  // }

  try {
    yield put(actions.areaQueryPush(action.payload));
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryPushSaga, ", error);
  }
}

export function* areaQuerySendSaga(action) {
  console.log("SAGA ACTION: ", action);
  try {
    const response = yield call(areaQueryRequest, action.payload);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(actions.areaQuerySend(data));                                                                         
  } catch (error) {
    console.error("SAGA ERROR: data/areaQuerySendSaga, ", error);
  }
}
export function* areaQueryDoneSaga(action) {
  console.log("= ", action);

  try {
    yield put({
      type: AREA_QUERY_DONE,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryDoneSaga, ", error);
  }
}

export function* areaQueryFailSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: AREA_QUERY_FAIL,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryFailSaga, ", error);
  }n
}

export function* areaQueryStatusSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: AREA_QUERY_STATS
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryStatSaga, ", error);
  }
}

// WATCHER SAGAS //
function* watchAreaQueryPuts() {
  yield takeLatest(AREA_QUERY_PUTS_SAGA, handleAreaQueryPuts);
  // yield takeLatest(areaQueryTypes.AREA_QUERY_PUSH, (!handleAreaQueryPush) ?  handleErrors : handleAreaQueryPush);
  yield takeLatest(AREA_QUERY_PUSH_SAGA, handleAreaQueryPush);
  // yield takeLatest(areaQueryTypes.AREA_QUERY_PUSH, (!handleAreaQueryPush) ? handleErrors : handleAreaQueryPush);
  // yield takeLatest(areaQueryTypes.AREA_QUERY_SEND_SAGA, areaQuerySendSaga);
}

// export function* watchStartAPI() {
//   yield takeLatest(types.AUTH_CHECK, checkAuth);
//   yield takeLatest(types.AUTH_START, startAuth);
//   yield takeLatest(types.AUTH_COMPLETE, completeAuth);
//   yield takeLatest(types.LOGOUT, authLogout);
// }
