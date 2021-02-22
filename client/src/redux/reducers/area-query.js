/*/
 *  ┌────────────────────────────────────┐
 *  │ |> Redux Reducers - Area Query     │
 *  └────────────────────────────────────┘
/*/

// ACTION TYPES //
import * as types from "../types/area-types";
import Format, { dateToIsoString } from '../../utils/format';

// REDUCERS //
const dateObj = new Date();
const sDate = dateObj.setDate(dateObj.getDate() - 7);
const eDate = dateObj.setDate(dateObj.getDate());
const sDateIso = dateToIsoString(new Date(sDate));
const eDateIso = dateToIsoString(new Date(eDate));

export const INITIAL_STATE = {
  startDate: 0,  
  endDate: 0,
  latitude: 0,
  longitude: 0,
  radius: 10,
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

    case types.AREA_QUERY_SENT:
      console.log('SENT: ', action);

      return {
        ...state,
        ...action.payload,
        status: "success"
      }

    case types.AREA_QUERY_DONE:
      console.log('SUCCESS: ', action);

      return {
        ...state,
        status: "success"
      }

    case types.AREA_QUERY_FAIL:
      console.log('FAIL: ', action);
      return state;

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

export const areaQueryReadyAction = options => ({
  type: types.AREA_QUERY_READY, // readonly
  payload: options
});

export const areaQueryDoneAction = () => ({
  type: types.AREA_QUERY_DONE,
});

export const areaQueryFailAction = err => ({
  type: types.AREA_QUERY_FAIL, // readonly
  payload: err
});

export const areaQueryStatusAction = options => ({
  type: types.AREA_QUERY_STATUS, // readonly
  payload: options
});

// TODO: Determine if 'FeatureLayerBuilder' actions merit a dedicated reducer
export const buildFeatureLayerAction = options => ({
  type: types.BUILD_FEATURE_LAYER,
  payload: options
});

export const featureLayerBuiltAction = options => ({
  type: types.FEATURE_LAYER_BUILT,
  payload: options
});

export const featureLayerFailAction = err => ({
  type: types.FEATURE_LAYER_FAIL, // readonly
  payload: err
});
