import { useSelector } from "react-redux";

import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { areaQuerySend } from "../actions/area-query-actions";
import { areaQueryRequest } from "./requests/area-query";

/*/
*  ┌───────────────────────────────┐
*  │ |> Redux-Saga - Generators    │
*  └───────────────────────────────┘
/*/

import {
  AREA_QUERY_PUTS,
  AREA_QUERY_PUSH,
  AREA_QUERY_READY,
  AREA_QUERY_SEND,
  AREA_QUERY_DONE,
  AREA_QUERY_FAIL,
  AREA_QUERY_STATS
} from "../types/action-types";

// const areaQuery = useSelector(state => state.areaQuery);

// WORKER SAGAS //
export function* areaQueryPutsSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({ type: AREA_QUERY_PUTS, payload: action.payload });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryPutsSaga, ", error);
  }
}

// function* areaQueryPushSaga(action) {
//   console.log("Action: ", action);

//   try {
//     yield put({
//       type: AREA_QUERY_PUTS,
//       payload: action.payload
//     });
//   } catch (error) {
//     console.error("SAGA ERROR: data/areaQueryPutsSaga, ", error);
//   }
// }

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
    yield put({
      type: AREA_QUERY_PUSH,
      payload: action.payload
    });
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
    yield put(areaQuerySend(data));

  } catch (error) {
    console.error("SAGA ERROR: data/areaQuerySendSaga, ", error);
  }
}

export function* areaQueryDoneSaga(action) {
  console.log("SAGA ACTION: ", action);

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
  }
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

// WATCHER //
// export function* watchStartAPI() {
//   yield takeLatest(types.AUTH_CHECK, checkAuth);
//   yield takeLatest(types.AUTH_START, startAuth);
//   yield takeLatest(types.AUTH_COMPLETE, completeAuth);
//   yield takeLatest(types.LOGOUT, authLogout);
// }
