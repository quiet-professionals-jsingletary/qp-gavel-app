import * as types from "../types/area-types";

/*/
  *  ┌──────────────────────────────────────┐
  *  │ |> Redux Actions - Area Queries      │
  *  └──────────────────────────────────────┘
/*/

// !! File is no longer used - Will be deleted once Redux-Saga refactoring is complete !!

// ACTIONS //
export const addToStoreAction = options => ({
  type: types.ADD_TO_STORE,
  payload: options
});

// TODO: Look into why '_Saga' had to be removed from action type  
export const addedToStoreAction = options => ({
  type: types.ADDED_TO_STORE,
  payload: options
});

// NOTE: Is this action set needed? (PENDING DELETION)
export const areaQueryReadyAction = task => ({
  type: types.AREA_QUERY_READY, // readonly
  task
});

export const sendAreaQueryAction = options => ({
  type: types.SEND_AREA_QUERY,
  payload: options
});

export const areaQuerySentAction = options => ({
  type: types.AREA_QUERY_SENT,
  payload: options
});

// NOTE: Is this action set needed? (PENDING DELETION)
export const areaQueryDoneAction = task => ({
  type: types.AREA_QUERY_DONE,
  task
});

// NOTE: Consolidate into single action
export const areaQueryFailAction = task => ({
  type: types.AREA_QUERY_FAIL, // readonly
  task
});

// NOTE: Consolidate into single action
export const areaQueryStatusAction = task => ({
  type: types.AREA_QUERY_STATUS, // readonly
  task
});
