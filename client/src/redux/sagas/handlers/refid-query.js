import { call, put } from "redux-saga/effects";
import { refIdQueryDone } from "../../reducers/refid-query";
import { refIdQueryRequest } from "../requests/refId-query";

export function* handleRefIdQuerySend(action) {
  console.log("Search Params: ", action);
  try {
    const response = yield call(refIdQueryRequest, action);
    const { data } = response;
    console.log("Handler Response: ", response);
    yield put(refIdQueryDone(data));

  } catch (error) {
    console.log('Error: ', error)
  }
}
