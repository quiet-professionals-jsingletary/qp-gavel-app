import { call, put, } from "redux-saga/effects";
import { types } from "../reducers/query-devices";

// WORKER //
function* queryDevicesPush(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.QUERY_DEVICES_PUSH,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/queryDevicesPush, ", e);
  }
}

function* queryDevicesSend(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.QUERY_DEVICES_SEND,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/queryDevicesSend, ", e);
  }
}

function* queryDevicesDone(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.QUERY_DEVICES_DONE,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/queryDevicesDone, ", e);
  }
}

function* queryDevicesFail(action) {
  console.log("Action: ", action);

  try {
    yield put({
      type: types.QUERY_DEVICES_FAIL,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/queryDevicesFail, ", e);
  }
}