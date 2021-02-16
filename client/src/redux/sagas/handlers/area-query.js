/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Action Handlers - Area Queries    │
  *  └──────────────────────────────────────┘
/*/
// !! File is no longer used - Will be deleted once Redux-Saga refactoring is complete !!

// import { call, put } from "redux-saga/effects";
import { 
  call, 
  put, 
  putResolve 
} from "redux-saga/effects";
import { 
  addToStoreAction,
  areaQueryFailAction,
  areaQueryPushSaga, 
  areaQueryPutsSaga,
  areaQuerySendSaga 
} from "../../actions/area-query-actions";
import { 
  areaQueryPuts, 
  areaQueryPush, 
  sendAreaQuery, 
  areaQueryDone, 
  areaQueryFail 
} from "../../reducers/area-query";
import { areaQueryRequest } from "../requests/area-query";

//_PUTS - Adds`payload` to request API
// export function* handleAreaQueryPuts(action) {
//   console.log("Area Query 'PUTS' Handler: ", action);
//   try {
//     const props = yield put(areaQueryPutsSaga(action));
//     yield put({ type: 'ADD_TO_STORE', props })
//   } catch (error) {
//     console.log('Error: ', error);
//     return error;
//   }
// }

//_PUSH - Updates `payload` to request API
// export function* handleAreaQueryPush(action) {
//   console.log("Area Query 'PUSH' Handler:", action);
//   try {
//     yield put(addToStoreAction(action));
    
//   } catch (error) {
//     console.log('Error: ', error);
//     return error;
//   }
// }

//_SEND - Fires `search` request to API
// export function* handleAreaQuerySend(action) {
//   console.log("Search Params Handler: ", action);
//   try {
//     const response = yield call(areaQueryRequest, action);
//     const { data } = response;
//     console.log("Handler Response: ", response);
//     const res = yield put(areaQuerySendSaga(data));
//     if (res) { 
//       yield put(areaQueryDoneAction(res));
//     }

//   } catch (error) {
//     console.log('Error: ', error);
//     return error;
//   }
// }
//_FAIL - Handle error gracefully
// export function* handleAreaQueryFail(action) {
//   console.log("Area Query Handler:", action);
//   try {
//     yield put(areaQueryFailAction(action));

//   } catch (error) {
//     console.log('Error: ', error);
//     return error;
//   }
// }