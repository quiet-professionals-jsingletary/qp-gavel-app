/*/
 *  ┌────────────────────────────────────────────────────┐
 *  │ |> Redux Saga - Area Query Watcher & Worker Sagas  │
 *  └────────────────────────────────────────────────────┘
/*/
import React from 'react';
import { call, cps, put, takeLatest } from "redux-saga/effects";

import * as types from "../types/area-types";
import * as requests from "../sagas/requests/area-query";
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

function* sendAreaQuery(action) {
  console.log("WORKER: ", action);
  try {
    const response = yield call(requests.areaQueryRequest, action);
    const { data } = response;
    console.log('RES DATASET (client-side): ', data);
    
    // *Put `locationData` in Redux store for global access
    yield put({ type: types.AREA_QUERY_SENT, payload: data });
    // yield put({ type: types.AREA_QUERY_DONE });

    // return data;

  } catch (error) {
    console.error("SAGA ERROR: data/sendAreaQuery, ", error);                     
  }
}

function* buildFeatureLayer(action) {
  console.log("WORKER: ", action);
  const { areaQueryState, baseMap, mapView } = action.payload;
  try {
    const response = yield call((areaQueryState, baseMap, mapView) => {
      // return (
      //   <React.Fragment>
      //     {
      //       <FeatureLayerBuilder
      //         resJsonProp={areaQueryState}
      //         baseMapProp={baseMap}
      //         mapViewProp={mapView}
      //       />
      //     }
      //   </React.Fragment>
      // )
    })
  } catch (error) {
    console.error("SAGA ERROR: data/buildFeatureLayer, ", error);
  }
}

// WATCHER SAGA //
export function* watchAreaQuery() {
  yield takeLatest(types.ADD_TO_STORE, addToStore);
  yield takeLatest(types.SEND_AREA_QUERY, sendAreaQuery);
  yield takeLatest(types.BUILD_FEATURE_LAYER, buildFeatureLayer);
}
