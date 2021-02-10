/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Redux Actions - Area Queries      │
  *  └──────────────────────────────────────┘
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
  AREA_QUERY_PUTS,
  AREA_QUERY_PUSH,
  AREA_QUERY_READY,
  AREA_QUERY_SEND,
  AREA_QUERY_DONE,
  AREA_QUERY_FAIL,
  AREA_QUERY_STATS
} from "../types/action-types";


// ACTIONS //
export const areaQueryPuts = options => ({
  type: AREA_QUERY_PUTS,
  payload: options
});

export const areaQueryPutsSaga = options => ({
  type: AREA_QUERY_PUTS_SAGA,
  payload: options
});

//---

export const areaQueryPush = options => ({
  type: AREA_QUERY_PUSH,
  payload: options
});

export const areaQueryPushSaga = options => ({
  type: AREA_QUERY_PUSH_SAGA,
  payload: options
});

//---

export const areaQueryReady = options => ({
  type: AREA_QUERY_READY,
  payload: options
});

export const areaQueryReadySaga = options => ({
  type: AREA_QUERY_READY_SAGA,
  payload: options
});

//---

export const areaQuerySend = options => ({
  type: AREA_QUERY_SEND,
  payload: options
});

export const areaQuerySendSaga = options => ({
  type: AREA_QUERY_SEND_SAGA,
  payload: options
});

//---

// NOTE: Is this action set needed? (PENDING DELETION)
export const areaQueryDone = options => ({
  type: AREA_QUERY_DONE,
  payload: options
});

export const areaQueryDoneSaga = options => ({
  type: AREA_QUERY_DONE_SAGA,
  payload: options
});

//---

export const areaQueryFail = options => ({
  type: AREA_QUERY_FAIL,
  payload: options
});

export const areaQueryFailSaga = options => ({
  type: AREA_QUERY_FAIL_SAGA,
  payload: options
});

//---

export const areaQueryStatus = () => ({
  type: AREA_QUERY_STATS // readonly
});

export const areaQueryStatusSaga = () => ({
  type: AREA_QUERY_STATS_SAGA // readonly
});
