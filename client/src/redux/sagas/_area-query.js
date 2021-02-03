import { useSelector } from "react-redux";

import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { types, areaQuerySend } from "../reducers/area-query";
import { areaQueryRequest } from "./requests/area-query";

// const areaQuery = useSelector(state => state.areaQuery);

// WORKER SAGAS //
export function* areaQueryPutsSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({ type: types.AREA_QUERY_PUTS, payload: action.payload });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPutsSaga, ", e);
  }
}

// function* areaQueryPushSaga(action) {
//   console.log("Action: ", action);

//   try {
//     yield put({
//       type: types.AREA_QUERY_PUTS,
//       payload: action.payload
//     });
//   } catch (e) {
//     console.error("SAGA ERROR: data/areaQueryPutsSaga, ", e);
//   }
// }

export function* areaQueryPushSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_PUSH,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPushSaga, ", e);
  }
}

export function* areaQuerySendSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_SEND,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQuerySendSaga, ", e);
  }
}

export function* areaQueryDoneSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_DONE,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryDoneSaga, ", e);
  }
}

function* areaQueryFailSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_FAIL,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryFailSaga, ", e);
  }
}

export function* areaQueryStatusSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_STATS
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryStatSaga, ", e);
  }
}
