/*/
 *  ┌───────────────────────────────┐
 *  │ |> Reducer - Area Query       │
 *  └───────────────────────────────┘
/*/

// ACTION TYPES //
import * as types from "../types/area-types";
// import * as types from "../actions/area-query-actions";

// REDUCERS //
export const INITIAL_STATE = {
  startDate: "",      
  endDate: "",
  latitude: 0,
  longitude: 0,
  radius: 10,
  status: "idle" // ["idle", "busy", "ready", "error" ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADDED_TO_STORE:
      console.log('ADDED: ', action);
      // const { latitude, longitude, radius } = action.payload;

      // const startDate = state.startDate;
      // const endDate = state.endDate;
      // let status = '';

      // // Validate all properties are ready
      // if ((startDate && endDate) && (latitude && longitude)) {
      //   status = 'ready';
      // } else {
      //   status = 'busy';
      // }

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case types.AREA_QUERY_SENT:
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case types.AREA_QUERY_DONE:
      console.log('SENT: ', action);

      return {
        ...state,
        status: "idle"
      }

    case types.AREA_QUERY_FAIL:
      console.log('FAIL: ', action);
      return {
        startDate: '',
        endDate: '',
        latitude: 0,
        longitude: 0,
        radius: 10,
        status: "error"
      }

    case types.AREA_QUERY_STATUS:
      console.log('STATUS: ', action);

      return {
        status: state.status
      }

    default:
      return state;
  }
};

// ACTIONS //
export const addToStoreAction = options => ({
  type: types.ADD_TO_STORE,
  payload: options
});

export const addedToStoreAction = options => ({
  type: types.ADDED_TO_STORE,
  payload: options
});

export const sendAreaQueryAction = options => ({
  type: types.SEND_AREA_QUERY,
  payload: options
});

export const areaQuerySentAction = options => ({
  type: types.AREA_QUERY_SENT,
  payload: options
});

export const areaQueryDoneAction = options => ({
  type: types.AREA_QUERY_DONE,
  payload: options
});

export const areaQueryReadyAction = options => ({
  type: types.AREA_QUERY_READY, // readonly
  payload: options
});

export const areaQueryFailAction = options => ({
  type: types.AREA_QUERY_FAIL, // readonly
  payload: options
});

export const areaQueryStatusAction = options => ({
  type: types.AREA_QUERY_STATUS, // readonly
  payload: options
});
