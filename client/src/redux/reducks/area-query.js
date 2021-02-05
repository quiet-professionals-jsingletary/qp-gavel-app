import { areaQueryTypes as type } from "../types";

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

export const areaQueryDone = options => ({ // <~~ Is this action needed? (PENDING DELETION)
  type: type.AREA_QUERY_DONE,
  payload: options
});

export const areaQueryFail = options => ({
  type: type.AREA_QUERY_FAIL_SAGA,
  payload: options
});

export const areaQueryStatus = () => ({
  type: type.AREA_QUERY_STATS // status
});
