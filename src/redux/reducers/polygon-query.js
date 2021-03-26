/*/
 *  ┌───────────────────────────────┐
 *  │ |>  Polygon Query Reducer     │
 *  └───────────────────────────────┘
/*/
export const types = {
  POLYGON_QUERY_BUSY: "POLYGON_QUERY_BUSY",
  POLYGON_QUERY_DONE: "POLYGON_QUERY_DONE",
  POLYGON_QUERY_FAIL: "POLYGON_QUERY_FAIL",
  POLYGON_QUERY_PUSH: "POLYGON_QUERY_PUSH",
  POLYGON_QUERY_SEND: "POLYGON_QUERY_SEND"
};

// REDUCERS //
export const INITIAL_STATE = {
  "isReady": false,
  "startDate": null,
  "endDate": null,
  "latitude": 0,
  "longitude": 0,
  "radius": 10
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.POLYGON_QUERY_PUSH:
      console.log('PUSH: ', action);

      return {
        ...state,
        ...action.payload
      }

    case types.POLYGON_QUERY_SEND:
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload
      }

    case types.POLYGON_QUERY_DONE:
      console.log('DONE: ', action);

      return {
        ...state,
        ...action.payload,
        isReady: true
      }

    case types.POLYGON_QUERY_FAIL:
      console.log('FAIL: ', action);

      return {
        ...state,
        isComplete: false
      }

    default:
      return state;
  }
};

// ACTIONS //
export const polygonQueryPush = options => ({
  type: types.POLYGON_QUERY_PUSH,
  payload: options
});

export const polygonQuerySend = options => ({
  type: types.POLYGON_QUERY_SEND,
  payload: options
});

export const polygonQueryDone = options => ({
  type: types.POLYGON_QUERY_DONE,
  payload: options 
});

export const polygonQueryFail = options => ({
  type: types.POLYGON_QUERY_FAIL,
  payload: options
});
