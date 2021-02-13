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
    case types.AREA_QUERY_PUTS:  
      console.log('PUTS: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case types.AREA_QUERY_PUSH:
      console.log('PUSH: ', action);
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

    case types.AREA_QUERY_READY:
      console.log('READY: ', action);

      return {
        ...state,
        ...action.payload,
        status: "ready"
      }

    case types.AREA_QUERY_SEND:
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case types.AREA_QUERY_DONE:
      console.log('DONE: ', action);

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

    case types.AREA_QUERY_STATS:
      console.log('STAT: ', action);

      return {
        status: state.status
      }

    default:
      return state;
  }
};

// ACTIONS //
export const areaQueryInit = options => ({
  type: types.AREA_QUERY_PUSH, // next()
  payload: options
});

export const areaQueryPuts = options => ({
  type: types.AREA_QUERY_PUTS, // next()
  payload: options
});

export const areaQueryPush = options => ({
  type: types.AREA_QUERY_PUSH, // next()
  payload: options
});

export const areaQueryReady = options => ({
  type: types.AREA_QUERY_READY, // next()
  payload: options
});

export const areaQuerySend = options => ({
  type: types.AREA_QUERY_SEND, //next()
  payload: options
});

export const areaQueryDone = options => ({ // <~~ Is this action needed? (PENDING DELETION)
  type: types.AREA_QUERY_DONE, // done()
  payload: options
});

export const areaQueryFail = options => ({
  type: types.AREA_QUERY_FAIL, // error()
  payload: options
});

export const areaQueryStats = () => ({
  type: types.AREA_QUERY_STATS, // status
});
