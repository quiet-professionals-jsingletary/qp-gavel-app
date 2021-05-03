/*/
 *  ┌────────────────────────────────────┐
 *  │ |> Pattern of Life - Data Query    │
 *  └────────────────────────────────────┘
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

export const INITIAL_STATE = {
  startDate: "0",
  endDate: "0",
  regIds: 10,
  status: "idle", // ["idle", "loading", "success", "error" ]
  locationData: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADDED_TO_STORE:
      console.log('ADDED: ', action);

      // TODO: Finish validation code before prod deployment 
      // const { latitude, longitude, radius } = action.payload;

      // const startDate = state.startDate;
      // const endDate = state.endDate;
      // let status = '';

      // // Validate all properties are success
      // if ((startDate && endDate) && (latitude && longitude)) {
      //   status = 'success';
      // } else {
      //   status = 'loading';
      // }

      if (typeof action.payload == 'string') {
        let incoming = action.payload;
        return {
          ...state,
          ...action.payload,
          status: "loading"
        }
      } else {
        return {
          ...state,
          ...action.payload,
          status: "loading"
        }
      }

    case types.PATTERN_QUERY_SENT:
      console.log('SENT: ', action);

      return {
        ...state,
        ...action.payload,
        status: "success"
      }

    case types.PATTERN_QUERY_DONE:
      console.log('SUCCESS: ', action);

      return {
        ...state,
        status: "success"
      }

    case types.PATTERN_QUERY_FAIL:
      console.log('FAIL: ', action);
      return state;

    case types.PATTERN_QUERY_STATUS:
      console.log('STATUS: ', action);

      return {
        status: state.status
      }

    // NOTE: FeatureBuilderLayer
    case types.BUILD_FEATURE_LAYER:
      console.log('BUILD_FEATURE_LAYER: ', action);

      return state;

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

export const sendPatternQueryAction = options => ({
  type: types.SEND_PATTERN_QUERY,
  payload: options
});

export const areaQuerySentAction = options => ({
  type: types.PATTERN_QUERY_SENT,
  payload: options
});

export const areaQueryReadyAction = options => ({
  type: types.PATTERN_QUERY_READY, // readonly
  payload: options
});

export const areaQueryDoneAction = () => ({
  type: types.PATTERN_QUERY_DONE,
});

export const areaQueryFailAction = err => ({
  type: types.PATTERN_QUERY_FAIL, // readonly
  payload: err
});

export const areaQueryStatusAction = options => ({
  type: types.PATTERN_QUERY_STATUS, // readonly
  payload: options
});
