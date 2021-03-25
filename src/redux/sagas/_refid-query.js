import { call, put, } from "redux-saga/effects";
import { types } from "../reducers/refid-query";

// WORKER //
function* refIdQueryPush(action) {

  console.log("Action: ", action);
  try {
    yield put({
      type: types.REF_ID_QUERY_PUSH,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/refIdQueryPush, ", e);
  }
}

function* refIdQuerySend(action) {

  console.log("Action: ", action);

  try {
    yield put({
      type: types.REF_ID_QUERY_SEND,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/refIdQuerySend, ", e);
  }
}

function* refIdQueryDone(action) {
  try {
    yield put({
      type: types.REF_ID_QUERY_DONE,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/refIdQueryDone, ", e);
  }
}

function* refIdQueryFail(action) {
  try {
    yield put({
      type: types.REF_ID_QUERY_FAIL,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/refIdQueryFail, ", e);
  }
}