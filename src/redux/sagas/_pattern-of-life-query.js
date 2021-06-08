/*/
 *  ┌─────────────────────────────────────────────────────────┐
 *  │ |> Redux Saga - Pattern of Life Watcher & Worker Sagas  │
 *  └─────────────────────────────────────────────────────────┘
/*/
import React from 'react';
import { call, put, takeLatest } from "redux-saga/effects";

import * as types from "../types/pattern-of-life-types";
import * as requests from "../sagas/requests/pattern-of-life-query";
// import FeatureLayerBuilder from "../../components/esri/layers/FeatureLayerBuilder";
// import * as actions from "../actions/area-query-actions";

// WORKER SAGAS//
function* addPatternToStore(action) {
  console.log("ADD PATTERN WORKER: ", action);
  try {
    yield put({
      type: types.PATTERN_ADDED_TO_STORE,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/addPatternToStore, ", error);
  }
}

function* sendPatternQuery(action) {
  console.log("SEND PATTERN WORKER: ", action);
  try {
    const response = yield call(requests.patternQueryRequest, action);
    const { data } = response;
    console.log('RES DATASET (client-side): ', data);

    // *Put `patternData` in Redux store for global access
    yield put({ type: types.PATTERN_QUERY_SENT, payload: data });
    yield put({ type: types.PATTERN_QUERY_DONE, payload: data });
    return data;

  } catch (error) {
    console.error("SAGA ERROR: data/sendPatternQuery, ", error);
  }
}

// WATCHER SAGA //
export function* watchPatternQuery() {
  yield takeLatest(types.ADD_PATTERN_TO_STORE, addPatternToStore);
  yield takeLatest(types.SEND_PATTERN_QUERY, sendPatternQuery);
}
