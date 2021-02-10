import { takeEvery, takeLatest } from "redux-saga/effects";

import { handleSetSecurityToken } from "./workers/security-token";
// import { handleRefIdQueryPush } from "./workers/refid-query";

import { handleAreaQueryPuts, handleAreaQueryPush, handleAreaQuerySend } from "./workers/area-query";
import { areaQueryPutsSaga, areaQueryPushSaga, areaQuerySendSaga } from "./_area-query";

/*/
*  ┌───────────────────────────────┐
*  │ |> Redux-Saga - Root Saga     │
*  └───────────────────────────────┘
/*/

import {
  AREA_QUERY_PUTS_SAGA,
  AREA_QUERY_PUSH_SAGA,
  AREA_QUERY_READY_SAGA,
  AREA_QUERY_SEND_SAGA,
  AREA_QUERY_DONE_SAGA,
  AREA_QUERY_FAIL_SAGA,
  AREA_QUERY_STATS_SAGA
} from "../types/action-types";
import {
  SECURITY_TOKEN_CHECK_SAGA,
  SECURITY_TOKEN_SET_SAGA
} from "../types/security-types";
// import { types as refIdQueryTypes } from "../reducers/refid-reducer";
// import { types as polygonQueryTypes } from "../reducers/polygon-reducer";

// Configure Error Handler
const handleErrors = err => {
  const resp = new Response(JSON.stringify({
    "code": err.code,
    "message": err.statusText
  }));
  
  console.log(resp);
  return resp;
}

// const getStatus = state => state.select;

export function* watcherSaga() {
  yield takeLatest(SECURITY_TOKEN_SET_SAGA, (!handleSetSecurityToken) ? handleErrors : handleSetSecurityToken);
  // yield takeLatest(SECURITY_TOKEN_SET_SAGA, handleSetSecurityToken);
  
  yield takeLatest(AREA_QUERY_PUTS_SAGA, handleAreaQueryPuts);
  // yield takeLatest(areaQueryTypes.AREA_QUERY_PUSH, (!handleAreaQueryPush) ?  handleErrors : handleAreaQueryPush);
  yield takeLatest(AREA_QUERY_PUSH_SAGA, handleAreaQueryPush);
  // yield takeLatest(areaQueryTypes.AREA_QUERY_PUSH, (!handleAreaQueryPush) ? handleErrors : handleAreaQueryPush);
  // yield takeLatest(areaQueryTypes.AREA_QUERY_SEND_SAGA, areaQuerySendSaga);

}

// TODO: Create a `seleector` function that will return current status of the redux store
// For example, suppose we have this state shape in our application:
// state = { cart: { ...} }
// We can create a selector, i.e.a function which knows how to extract the cart data from the State:
// ./ selectors
// export const getCart = state => state.cart

// Then we can use that selector from inside a Saga using the select Effect:
// ./ sagas.js
// import { take, fork, select } from 'redux-saga/effects' import { getCart } from './selectors'

// function* checkout() { // query the state using the exported selector const cart = yield select(getCart)

//   //-- ... call some API endpoint then dispatch a success/error action
// }

// export default function* rootSaga() { while (true) { yield take('CHECKOUT_REQUEST') yield fork(checkout) } }
