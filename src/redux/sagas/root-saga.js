import { takeEvery, takeLatest } from "redux-saga/effects";

import { handleSetSecurityToken } from "./handlers/security-token";
// import { handleRefIdQueryPush } from "./handlers/refid-query";

import { areaQueryPushSaga } from "../actions/area-query-actions";

import { handleAreaQueryPuts, handleAreaQueryPush, handlesendAreaQuery } from "./handlers/area-query";

import { types as securityTypes } from "../reducers/security-token";
import * as areaQueryTypes from "../types/area-types";
// import { types as refIdQueryTypes } from "../reducers/refid-query";
// import { types as polygonQueryTypes } from "../reducers/polygon-query";

// Configure Error Handler
const handleErrors = err => {
  const resp = new Response(JSON.stringify({
    "code": err.code,
    "message": err.statusText
  }));
  
  console.warn(resp);
  return resp;
}

// const getStatus = state => state.select;

// TODO: This watcherSaga() to be merged into rootSaga() ./index.js
export function* watcherSaga() {
  yield takeLatest(securityTypes.SECURITY_TOKEN_SET, (!handleSetSecurityToken) ? handleErrors : handleSetSecurityToken);
  // yield takeLatest(securityTypes.SECURITY_TOKEN_SET, handleSetSecurityToken);
  // yield takeLatest(areaQueryTypes.ADD_TO_STORE, (!areaQueryPushSaga) ? handleErrors : areaQueryPushSaga);
  // yield takeLatest(areaQueryTypes.ADD_TO_STORE, areaQueryPushSaga);
  // yield takeLatest(areaQueryTypes.ADD_TO_STORE, (!handleAreaQueryPush) ? handleErrors : handleAreaQueryPush);
  // yield takeLatest(areaQueryTypes.SEND_AREA_QUERY, handlesendAreaQuery);

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
