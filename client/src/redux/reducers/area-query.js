import { areaQueryTypes as type } from "../types";
// TODO: Move other types to dedicated .js files

/*/
 *  ┌───────────────────────────────┐
 *  │ |> Reducer - Area Query       │
 *  └───────────────────────────────┘
/*/
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
    case type.AREA_QUERY_PUTS:
      console.log('PUTS: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case type.AREA_QUERY_PUSH:
      console.log('PUSH: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case type.AREA_QUERY_READY:
      console.log('READY: ', action);

      return {
        ...state,
        ...action.payload,
        status: "ready"
      }

    case type.AREA_QUERY_SEND:
      console.log('SEND: ', action);

      return {
        ...state,
        ...action.payload,
        status: "busy"
      }

    case type.AREA_QUERY_DONE:
      console.log('DONE: ', action);

      return {
        ...state,
        status: "idle"
      }

    case type.AREA_QUERY_FAIL:
      console.log('FAIL: ', action);
      return {
        startDate: "",
        endDate: "",
        latitude: 0,
        longitude: 0,
        radius: 10,
        status: "error"
      }

    case type.AREA_QUERY_STATS:
      console.log('STAT: ', action);

      return {
        ...state,
        status: state.status
      }

    default:
      return state;
  }
};
