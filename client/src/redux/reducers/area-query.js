/*/
 *  ┌───────────────────────────────┐
 *  │ |> Reducer - Area Query       │
 *  └───────────────────────────────┘
/*/
export const types = {
  AREA_QUERY_BUSY: "AREA_QUERY_BUSY",
  AREA_QUERY_DONE: "AREA_QUERY_DONE",
  AREA_QUERY_FAIL: "AREA_QUERY_FAIL",
  AREA_QUERY_PUSH: "AREA_QUERY_PUSH",
  AREA_QUERY_SEND: "AREA_QUERY_SEND"
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
    case types.AREA_QUERY_PUSH:
      console.log('PUSH: ', action);
      const { latitude, longitude, radius } = action.payload;

      return {
        ...state,
        latitude,
        longitude,
        radius,
        isReady: false
      }

    case types.AREA_QUERY_SEND: 
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload,
        isReady: false
      }
      

    case types.AREA_QUERY_DONE:
      console.log('DONE: ', action);

      return {
        ...state,
        ...action.payload,
        isReady: true
      }

    case types.AREA_QUERY_FAIL:
      console.log('FAIL: ', action);

      return {
        ...state,
        isReady: false
      }

    default:
      return state;
  }
};

// ACTIONS //
export const areaQueryPush = options => ({
  type: types.AREA_QUERY_PUSH,
  payload: options
});

export const areaQuerySend = options => ({
  type: types.AREA_QUERY_SEND,
  payload: options
});

export const areaQueryDone = options => ({
  type: types.AREA_QUERY_DONE,
  payload: options
});

export const areaQueryFail = options => ({
  type: types.AREA_QUERY_FAIL,
  payload: options
});
