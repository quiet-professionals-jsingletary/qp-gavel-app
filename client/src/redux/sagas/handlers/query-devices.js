import { call, put } from "redux-saga/effects";
import { queryDevicesPush, queryDevicesSend, queryDevicesDone, queryDevicesFail } from "../../reducers/query-devices";
import { queryDevicesRequest } from "../requests/query-devices";

/*/
  *  ┌────────────────────────────────────────┐
  *  │ |> Action Handlers - Query Devices     │
  *  └────────────────────────────────────────┘
/*/

export function* handleQueryDevicesPush(action) {
  console.log("Search Params: ", action);
  try {
    yield put(queryDevicesDone(action));

  } catch (error) {
    console.log('Error: ', error)
  }
}

export function* handleQueryDevicesSend(action) {
  console.log("Search Params: ", action);
  try {
    const response = yield call(queryDevicesRequest, action);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(queryDevicesDone(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}