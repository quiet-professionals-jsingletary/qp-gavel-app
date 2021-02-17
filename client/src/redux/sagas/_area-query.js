import { all, call, put, putResolve, takeEvery, takeLatest } from "redux-saga/effects";

import * as types from "../types/area-types";
import * as requests from "../sagas/requests/area-query";
// import * as actions from "../actions/area-query-actions";

// WORKER SAGAS//
function* addToStore(action) {
  console.log("ACTION: ", action);
  try {
    yield put({ 
      type: types.ADDED_TO_STORE,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryPushSaga, ", error);
  }
}

function* sendAreaQuery(action) {
  console.log("ACTION: ", action);
  try {
    const response = yield call(requests.areaQueryRequest, action);
    const { data } = response;
    console.log("Request Response: ", data);

    yield put({
      type: types.AREA_QUERY_SENT,
      payload: data
    });
    // if (res) { 
    //   yield put(areaQueryDoneAction(res));
    // }
  } catch (error) {
    console.error("SAGA ERROR: data/sendAreaQuerySaga, ", error);
  }
}

// WATCHER SAGA //
export function* watchAreaQuery() {
  yield takeLatest(types.ADD_TO_STORE, addToStore);
  yield takeLatest(types.SEND_AREA_QUERY, sendAreaQuery);
}
