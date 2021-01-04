export const types = {
  LOCATION_DATA_SEARCH: "LOCATION_DATA_SEARCH",
  LOCATION_DATA_FAIL: "LOCATION_DATA_FAIL",
  LOCATION_DATA_SUCCESS: "LOCATION_DATA_SUCCESS",
};

// REDUCERS //
export const initialState = {
  'isComplete': false,
  'resJsonData': {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATION_DATA_SEARCH:
      console.log('Saga Action Types: ', action)
      const { resJsonData } = action;

      return {
        ...state,
        ...action.payload,
        resJsonData,
        isComplete: true
      }

    case types.LOCATION_DATA_SUCCESS:

      return {
        ...state,
        ...action.payload,
        isComplete: true
      }

    case types.LOCATION_DATA_FAIL:

      // const { status } = action;

      return {
        ...state,
        ...action.payload,
        isComplete: true
      }

    default:
      return state;
  }
};

// ACTIONS //
export const locationDataSearch = options => ({
  type: types.LOCATION_DATA_SEARCH,
  payload: options
});

export const locationDataSuccess = options => ({
  type: types.LOCATION_DATA_SUCCESS,
  payload: options
});

export const locationDataFail = options => ({
  type: types.LOCATION_DATA_FAIL,
  payload: options
});
