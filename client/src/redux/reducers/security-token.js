export const types = {
  SECURITY_TOKEN_CHECK: "SECURITY_TOKEN_CHECK",
  SECURITY_TOKEN_FAIL: "SECURITY_TOKEN_FAIL",
  SECURITY_TOKEN_SET: "SECURITY_TOKEN_SET",
  SECURITY_TOKEN_START: "SECURITY_TOKEN_START",
  SECURITY_TOKEN_SUCCESS: "SECURITY_TOKEN_SUCCESS",
};

// REDUCERS //
export const initialState = {
  isValid: null,
  securityToken: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SECURITY_TOKEN_CHECK:
      // const { isValid, securityToken } = action.payload;

      return {
        ...state,
        ...action.payload,
        isValid: true
      }

    case types.SECURITY_TOKEN_SET:
      const { securityToken } = action.payload;

      return {
        ...state,
        ...action.payload,
        isValid: true,
        securityToken
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
  payload: securityToken
});