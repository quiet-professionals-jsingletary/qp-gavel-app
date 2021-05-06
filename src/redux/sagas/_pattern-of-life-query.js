/*/
 *  ┌─────────────────────────────────────────────────────────┐
 *  │ |> Redux Saga - Pattern of Life Watcher & Worker Sagas  │
 *  └─────────────────────────────────────────────────────────┘
/*/
import React from 'react';
import { call, cps, put, takeLatest } from "redux-saga/effects";

import * as types from "../types/pattern-of-life-types";
import * as requests from "../sagas/requests/pattern-of-life-query";
// import FeatureLayerBuilder from "../../components/esri/layers/FeatureLayerBuilder";
// import * as actions from "../actions/area-query-actions";

// WORKER SAGAS//
function* addToStore(action) {
  console.log("WORKER: ", action);
  try {
    yield put({
      type: types.ADDED_TO_STORE,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/addToStore, ", error);
  }
}

function* sendPatternQuery(action) {
  console.log("WORKER: ", action);
  try {
    const response = yield call(requests.patternQueryRequest, action);
    const { data } = response;
    console.log('RES DATASET (client-side): ', data);

    // *Put `locationData` in Redux store for global access
    yield put({ type: types.PATTERN_QUERY_SENT, payload: data });
    // yield put({ type: types.PATTERN_QUERY_DONE });

    // return data;

  } catch (error) {
    console.error("SAGA ERROR: data/sendPatternQuery, ", error);
  }
}

// WATCHER SAGA //
export function* watchPatternQuery() {
  yield takeLatest(types.ADD_TO_STORE, addToStore);
  yield takeLatest(types.SEND_PATTERN_QUERY, sendPatternQuery);
}