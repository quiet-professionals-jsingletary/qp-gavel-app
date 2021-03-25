/*/
 *  ┌───────────────────────────────────┐
 *  │ |> Reducer - ReferenceID Data     │
 *  └───────────────────────────────────┘
/*/
export const types = {
  REF_ID_QUERY_BUSY: "REF_ID_QUERY_BUSY",
  REF_ID_QUERY_PUSH: "REF_ID_QUERY_PUSH",
  REF_ID_QUERY_SEND: "REF_ID_QUERY_SEND",
  REF_ID_QUERY_DONE: "REF_ID_QUERY_DONE",
  REF_ID_QUERY_FAIL: "REF_ID_QUERY_FAIL"
};

/**-------------------------------------------------------------
 *  !initialState
 *  *Compute geodetic distance and direction between two points
 *  @param locations :Object{}
 *  @return distance :Number
*/
export const initialState = {
  "isReady": false,
  "startDate": null,
  "endDate": null,
  "refId": "0"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REF_ID_QUERY_PUSH:
      console.log('REF_ID_QUERY_PUSH: ', action);
      // const { resJsonData } = action;

      return {
        ...state,
        ...action.payload,
        isReady: false,
      }

    case types.REF_ID_QUERY_SEND:
      console.log('REF_ID_QUERY_SEND: ', action);
      // const { resJsonData } = action;

      return {
        ...state,
        ...action.payload,
        isReady: true,  
      }

    case types.REF_ID_QUERY_DONE:
      console.log('REF_ID_QUERY_DONE: ', action);
      
      return {
        isReady: true
      }

    case types.REF_ID_QUERY_FAIL:
      console.log('REF_ID_QUERY_FAIL: ', action);
      // const { status } = action;

      return {
        ...state,
        isReady: false
      }

    default:
      return state;
  }
};

// ACTIONS //
export const refIdQueryPush = options => ({
  type: types.REF_ID_QUERY_PUSH,
  payload: options
});

export const refIdQuerySend = options => ({
  type: types.REF_ID_QUERY_SEND,
  payload: options
});

export const refIdQueryDone = options => ({
  type: types.REF_ID_QUERY_DONE,
  payload: options
});

export const refIdQueryFail = options => ({
  type: types.REF_ID_QUERY_FAIL,
  payload: options
});
