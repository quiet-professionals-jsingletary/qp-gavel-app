import { call, put } from "redux-saga/effects";
import { locationDataSearch, locationDataSuccess } from "../../reducers/location-data";
import { locationDataSearchRequest } from "../requests/location-data";

export function* handleLocationDataSearch(action) {
  console.log("Params: ", action.tempSecurityToken);
  try {
    const response = yield call(locationDataSearchRequest, action.tempSecurityToken);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(locationDataSuccess(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}