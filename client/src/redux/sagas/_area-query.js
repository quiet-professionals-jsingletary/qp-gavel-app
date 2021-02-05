import { useSelector } from "react-redux";

import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { types, areaQuerySend } from "../reducers/area-query";
import { areaQueryRequest } from "./requests/area-query";

// const areaQuery = useSelector(state => state.areaQuery);

// WORKER SAGAS //
export function* areaQueryPutsSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({ type: types.AREA_QUERY_PUTS, payload: action.payload });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryPutsSaga, ", error);
  }
}

// function* areaQueryPushSaga(action) {
//   console.log("Action: ", action);

//   try {
//     yield put({
//       type: types.AREA_QUERY_PUTS,
//       payload: action.payload
//     });
//   } catch (error) {
//     console.error("SAGA ERROR: data/areaQueryPutsSaga, ", error);
//   }
// }

export function* areaQueryPushSaga(action) {
  console.log("SAGA ACTION: ", action);

  // const { latitude, longitude, radius } = action;

  // const startDate = state.startDate;
  // const endDate = state.endDate;
  // let status = '';

  // // Validate all properties are ready
  // if ((startDate && endDate) && (latitude && longitude)) {
  //   status = 'ready';
  // } else {
  //   status = 'busy';
  // }

  try {
    yield put({
      type: types.AREA_QUERY_PUSH,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryPushSaga, ", error);
  }
}

export function* areaQuerySendSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    const response = yield call(areaQueryRequest, action.payload);
    const { data } = response;
    console.log("Handler Response: ", response);
    const res = yield put(areaQuerySend(data));
    if (res) {
      yield put({ type: 'AREA_QUERY_DONE', res });
    }

  } catch (error) {
    console.error("SAGA ERROR: data/areaQuerySendSaga, ", error);
  }
}

export function* areaQueryDoneSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_DONE,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryDoneSaga, ", error);
  }
}

export function* areaQueryFailSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_FAIL,
      payload: action.payload
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryFailSaga, ", error);
  }
}

export function* areaQueryStatusSaga(action) {
  console.log("SAGA ACTION: ", action);

  try {
    yield put({
      type: types.AREA_QUERY_STATS
    });
  } catch (error) {
    console.error("SAGA ERROR: data/areaQueryStatSaga, ", error);
  }
}
