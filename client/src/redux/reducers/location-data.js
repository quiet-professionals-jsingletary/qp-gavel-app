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
      console.log('LOCATION_DATA_SEARCH: ', action);
      const { resJsonData } = action;

      return {
        ...state,
        ...action.payload,
        isComplete: true,
        resJsonData
      }

    case types.LOCATION_DATA_SUCCESS:
      console.log('LOCATION_DATA_SUCCESS: ', action);
      const { Accept, Authorization, TempSecurityToken } = action;
      return {
        // ...state,
        ...action.payroll,
        TempSecurityToken,
        isComplete: true,
        
      }

    case types.LOCATION_DATA_FAIL:
      console.log('LOCATION_DATA_FAIL: ', action);
      // const { status } = action;

      return {
        ...state,
        ...action.payload,
        isComplete: false
      }

    default:
      return state;
  }
};

// ACTIONS //
export const locationDataSearch = options => ({
  type: types.LOCATION_DATA_SEARCH,
  ...options
});

export const locationDataSuccess = options => ({
  type: types.LOCATION_DATA_SUCCESS,
  payload: options
});

export const locationDataFail = options => ({
  type: types.LOCATION_DATA_FAIL,
  ...options
});
