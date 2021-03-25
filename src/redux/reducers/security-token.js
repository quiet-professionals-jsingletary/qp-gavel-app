export const types = {
  SECURITY_TOKEN_CHECK: "SECURITY_TOKEN_CHECK",
  SECURITY_TOKEN_SET: "SECURITY_TOKEN_SET",
  SECURITY_TOKEN_DECRYPT: "SECURITY_TOKEN_DECRYPT",
  SECURITY_TOKEN_FAIL: "SECURITY_TOKEN_FAIL",
  SECURITY_TOKEN_SUCCESS: "SECURITY_TOKEN_SUCCESS",
};

// REDUCERS //
export const initialState = {
  "isValid": false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SECURITY_TOKEN_CHECK:
      // const { isValid, securityToken } = action.payload;

      return {
        ...state,
        isValid: true
      }

    case types.SECURITY_TOKEN_SET:

      console.log('SECURITY_TOKEN_SET: ', action);
      // const { TempSecurityToken } = action;

      return {
        ...state,
        isValid: true
      }

    case types.SECURITY_TOKEN_SUCCESS:

      console.log('SECURITY_TOKEN_SUCCESS: ', action);
      // const { tempSecurityToken } = action.payload;

      return {
        ...state,
        ...action.payload,
        isValid: true
      }

    case types.SECURITY_TOKEN_DECRYPT:

      console.log('SECURITY_TOKEN_DECRYPT: ', action);
      // const { securityTokenDecrypt } = action;

      return {
        ...state,
        ...action.payload,
        isValid: true
      }
      
    default:
      return state;
  }
};

// ACTIONS //
export const checkSecurityToken = options => ({
  type: types.SECURITY_TOKEN_CHECK,
  payload: options
});

export const setSecurityToken = options => ({
  type: types.SECURITY_TOKEN_SET,
  payload: options
});

export const securityTokenSuccess = options => ({
  type: types.SECURITY_TOKEN_SUCCESS,
  payload: options
});

export const decryptSecurityToken = options => ({
  type: types.SECURITY_TOKEN_DECRYPT,
  payload: options
});
