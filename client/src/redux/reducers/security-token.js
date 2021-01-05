export const types = {
  SECURITY_TOKEN_CHECK: "SECURITY_TOKEN_CHECK",
  SECURITY_TOKEN_SET: "SECURITY_TOKEN_SET",
  SECURITY_TOKEN_DECRYPT: "SECURITY_TOKEN_DECRYPT",
  SECURITY_TOKEN_FAIL: "SECURITY_TOKEN_FAIL",
  SECURITY_TOKEN_SUCCESS: "SECURITY_TOKEN_SUCCESS",
};

// REDUCERS //
export const initialState = {
  'isValid': false,
  'securityTokenEncrypt': '0',
  'securityTokenDecrypt': '0'
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

      console.log('Saga Action: ', action);
      const { securityTokenEncrypt } = action;

      return {
        ...state,
        ...action.payload,
        isValid: true,
        securityTokenEncrypt
      }

    case types.SECURITY_TOKEN_DECRYPT:

      console.log('Saga Action: ', action);
      const { securityTokenDecrypt } = action;

      return {
        ...state,
        ...action.payload,
        isValid: true,
        securityTokenDecrypt
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

export const decryptSecurityToken = options => ({
  type: types.SECURITY_TOKEN_DECRYPT,
  payload: options
});
