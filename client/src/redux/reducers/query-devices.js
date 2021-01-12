/*/
 *  ┌───────────────────────────────┐
 *  │ |> Reducer - Query Devices    │
 *  └───────────────────────────────┘
/*/
export const types = {
  QUERY_DEVICES_BUSY: "QUERY_DEVICES_BUSY",
  QUERY_DEVICES_DONE: "QUERY_DEVICES_DONE",
  QUERY_DEVICES_FAIL: "QUERY_DEVICES_FAIL",
  QUERY_DEVICES_PUSH: "QUERY_DEVICES_PUSH",
  QUERY_DEVICES_SEND: "QUERY_DEVICES_SEND"
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
    case types.QUERY_DEVICES_PUSH:
      console.log('PUSH: ', action);

      return {
        ...state,
        ...action.payload
      }

    case types.QUERY_DEVICES_SEND:
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload
      }

    case types.QUERY_DEVICES_DONE:
      console.log('DONE: ', action);

      return {
        ...state,
        ...action.payload,
        isReady: true
      }

    case types.LOCATION_DATA_FAIL:
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
export const queryDevicesPush = options => ({
  type: types.QUERY_DEVICES_PUSH,
  payload: options
});

export const queryDevicesSend = options => ({
  type: types.QUERY_DEVICES_SEND,
  payload: options
});

export const queryDevicesDone = options => ({
  type: types.QUERY_DEVICES_DONE,
  payload: options
});

export const queryDevicesFail = options => ({
  type: types.QUERY_DEVICES_FAIL,
  payload: options
});
