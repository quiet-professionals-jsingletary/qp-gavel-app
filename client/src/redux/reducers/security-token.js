import { securityTokenTypes as type } from "../types";

/*/
 *  ┌───────────────────────────────┐
 *  │ |> Reducer - Security Token   │
 *  └───────────────────────────────┘
/*/
export const INITIAL_STATE = {
  "isValid": false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SECURITY_TOKEN_CHECK:
      // const { isValid, securityToken } = action.payload;

      return {
        ...state,
        isValid: true
      }

    case type.SECURITY_TOKEN_SET:

      console.log('SECURITY_TOKEN_SET: ', action);
      // const { TempSecurityToken } = action;

      return {
        ...state,
        isValid: true
      }

    case type.SECURITY_TOKEN_SUCCESS:

      console.log('SECURITY_TOKEN_SUCCESS: ', action);
      // const { tempSecurityToken } = action.payload;

      return {
        ...state,
        ...action.payload,
        isValid: true
      }

    case type.SECURITY_TOKEN_DECRYPT:

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
