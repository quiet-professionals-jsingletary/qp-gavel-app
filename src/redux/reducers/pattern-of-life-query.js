/*/
 *  ┌───────────────────────────────────────┐
 *  │ |> Pattern of Life - Redux Reducer    │
 *  └───────────────────────────────────────┘
/*/

// ACTION TYPES //
import * as types from "../types/pattern-of-life-types";
import Format, { dateToIsoString } from '../../utils/format';

// REDUCERS //
const dateObj = new Date();
const sDate = dateObj.setDate(dateObj.getDate() - 7);
const eDate = dateObj.setDate(dateObj.getDate());
const sDateIso = dateToIsoString(new Date(sDate));
const eDateIso = dateToIsoString(new Date(eDate));

// TODO: Create `dates-range` reducer for dates to be accessible by all components 
export const INITIAL_STATE = {
  startDate: sDateIso,
  endDate: eDateIso,
  registrationIDs: null,    // Each object contains a`registrationID` prop
  status: "idle",         // ["idle", "loading", "success", "error" ]
  locationData: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PATTERN_ADDED_TO_STORE:
      console.log('PATTERN_ADDED_TO_STORE: ', action);
      // let incoming = action.payload;
      // const { registrationIDs } = action.payload;

      // TODO: Finish validation code before prod deployment 
      console.log('DataType: String: ', action.payload);
      return {
        ...state,
        ...action.payload,
        status: "loading"
      }

    case types.PATTERN_QUERY_SENT:
      console.log('PATTERN_QUERY_SENT: ', action);
      // const { registrationIDs } = action.payload;

      return {
        ...state,
        ...action.payload,
        status: "success"
      }

    case types.PATTERN_QUERY_DONE:
      console.log('SUCCESS: ', action);

      return {
        ...state,
        status: "idle"
      }

    case types.PATTERN_QUERY_FAIL:
      console.log('FAIL: ', action);
      return state;

    case types.PATTERN_QUERY_STATUS:
      console.log('STATUS: ', action);

      return {
        status: state.status
      }

    default:
      return state;
  }
};

// ACTIONS //
export const addPatternToStoreAction = options => ({
  type: types.ADD_PATTERN_TO_STORE,
  payload: options
});

export const addedToStoreAction = options => ({
  type: types.PATTERN_ADDED_TO_STORE,
  payload: options
});

export const sendPatternQueryAction = options => ({
  type: types.SEND_PATTERN_QUERY,
  payload: options
});

export const patternQuerySentAction = options => ({
  type: types.PATTERN_QUERY_SENT,
  payload: options
});

export const patternQueryReadyAction = options => ({
  type: types.PATTERN_QUERY_READY, // readonly
  payload: options
});

export const patternQueryDoneAction = () => ({
  type: types.PATTERN_QUERY_DONE,
});

export const patternQueryFailAction = err => ({
  type: types.PATTERN_QUERY_FAIL, // readonly
  payload: err
});

export const patternQueryStatusAction = options => ({
  type: types.PATTERN_QUERY_STATUS, // readonly
  payload: options
});
