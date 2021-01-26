import { call, put, putResolve, } from "redux-saga/effects";
import { types } from "../reducers/area-query";

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
// WORKER //
=======
>>>>>>> Stashed changes
// WORKERS //
function* areaQueryPuts(action) {
  console.log("SAGA ACTION: ", action);
=======
// WORKER //
=======
// WORKERS //
function* areaQueryPuts(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_PUTS,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPuts, ", e);
  }
}

>>>>>>> Stashed changes
function* areaQueryPush(action) {
  console.log("Action: ", action);
>>>>>>> Stashed changes

  try {
<<<<<<< Updated upstream
    yield putResolve({
=======
    yield put({
>>>>>>> Stashed changes
      type: types.AREA_QUERY_PUTS,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPuts, ", e);
  }
}

<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
function* areaQueryPush(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield putResolve({
      type: types.AREA_QUERY_PUSH,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryPush, ", e);
  }
}

function* areaQuerySend(action) {
  console.log("SAGA ACTION: ", action);

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
  console.log("SAGA ACTION: ", action);

  try {
    yield putResolve({
      type: types.AREA_QUERY_DONE,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryDone, ", e);
  }
}

function* areaQueryFail(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_FAIL,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryFail, ", e);
  }
}

function* areaQueryStatus(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield call({
      type: types.AREA_QUERY_STAT
    });
  } catch (e) {
    console.error("SAGA ERROR: data/areaQueryStat, ", e);
  }
}