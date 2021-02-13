import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import { types } from "../reducers/area-query";
import * as types from "../types/area-types";

// WORKER SAGAS //
function* areaQueryPutsSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_PUTS,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPutsSaga, ", e);
  }
}

// function* areaQueryPush(action) {
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

function* areaQueryPushSaga(action) {
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

function* areaQuerySendSaga(action) {
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

function* areaQueryDoneSaga(action) {
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

function* areaQueryStatsSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield call({
      type: types.AREA_QUERY_STATS,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryStatsSaga, ", e);
  }
}