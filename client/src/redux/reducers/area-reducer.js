import { 
  AREA_QUERY_PUTS, 
  AREA_QUERY_PUSH, 
  AREA_QUERY_READY, 
  AREA_QUERY_SEND,
  AREA_QUERY_DONE,
  AREA_QUERY_FAIL,
  AREA_QUERY_STATS 
} from "../types/area-types";
// import { types } from "../actions/area-query-actions";

/*/
 *  ┌───────────────────────────────┐
 *  │ |> Reducer - Area Query       │
 *  └───────────────────────────────┘
/*/

// Reducer //
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
    case AREA_QUERY_PUTS:
      console.log('PUTS: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case AREA_QUERY_PUSH:
      console.log('PUSH: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case AREA_QUERY_READY:
      console.log('READY: ', action);

      return {
        ...state,
        ...action.payload,
        status: "ready"
      }

    case AREA_QUERY_SEND:
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case AREA_QUERY_DONE:
      console.log('DONE: ', action);

      return {
        ...state,
        status: "idle"
      }

    case AREA_QUERY_FAIL:
      console.log('FAIL: ', action);
      return {
        ...state,
        status: "error"
      }

    case AREA_QUERY_STATS:
      console.log('STAT: ', action);

      return {
        ...state,
        status: state.status
      }

    default:
      return state;
  }
};
