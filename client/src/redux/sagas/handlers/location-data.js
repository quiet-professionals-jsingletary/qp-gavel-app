import { call, put } from "redux-saga/effects";
import { locationDataSearch } from "../../reducers/location-data";
import { locationDataSearchRequest } from "../requests/location-data";

export function* handleLocationDataSearch(action) {
  try {
    const response = yield call(locationDataSearchRequest);
    const { data } = response;
    yield put(locationDataSearch(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}