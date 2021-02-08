import { areaQueryTypes as type } from "../types";

/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Redux Actions - Area Queries      │
  *  └──────────────────────────────────────┘
/*/

// ACTIONS //
export const areaQueryPuts = options => ({
  type: type.AREA_QUERY_PUTS,
  payload: options
});

export const areaQueryPush = options => ({
  type: type.AREA_QUERY_PUSH,
  payload: options
});

export const areaQueryReady = options => ({
  type: type.AREA_QUERY_READY,
  payload: options
});

export const areaQuerySend = options => ({
  type: type.AREA_QUERY_SEND,
  payload: options
});

// NOTE: Is this action needed? (PENDING DELETION)
export const areaQueryDone = options => ({
  type: type.AREA_QUERY_DONE,
  payload: options
});

export const areaQueryFail = options => ({
  type: type.AREA_QUERY_FAIL,
  payload: options
});

export const areaQueryStatus = () => ({
  type: type.AREA_QUERY_STATS // readonly
});
