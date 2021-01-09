import { call, put, } from "redux-saga/effects";
import { types as locationDataTypes } from "../reducers/location-data";

// WORKER //
function* locationDataSearch(action) {

  console.log("Action: ", action);
  try {
    yield put({
      type: locationDataTypes.LOCATION_DATA_SEARCH,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/setLocationData, ", e);
  }
}

function* locationDataSuccess(action) {

  console.log("Action: ", action);

  try {
    yield put({
      type: locationDataTypes.LOCATION_DATA_SUCCESS,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/locationDataSuccess, ", e);
  }
}

function* locationDataFail(action) {
  try {
    yield put({
      type: locationDataTypes.LOCATION_DATA_FAIL,
      payload: action.payload
    });
  } catch (e) {
    console.error("SAGA ERROR: data/locationDataFail, ", e);
  }
}