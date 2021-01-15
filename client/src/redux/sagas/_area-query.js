import { call, put, } from "redux-saga/effects";
import { types } from "../reducers/area-query";

// WORKER //
function* areaQueryPush(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_PUSH,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPush, ", e);
  }
}

function* areaQuerySend(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_SEND,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQuerySend, ", e);
  }
}

function* areaQueryDone(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_DONE,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryDone, ", e);
  }
}

function* areaQueryFail(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_FAIL,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryFail, ", e);
  }
}