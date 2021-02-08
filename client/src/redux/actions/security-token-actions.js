import { securityToken as type } from "../types";

// ACTIONS //
export const checkSecurityToken = options => ({
  type: typtypees.SECURITY_TOKEN_CHECK,
  payload: options
});

export const setSecurityToken = options => ({
  type: type.SECURITY_TOKEN_SET,
  payload: options
});

export const securityTokenSuccess = options => ({
  type: type.SECURITY_TOKEN_SUCCESS,
  payload: options
});

export const decryptSecurityToken = options => ({
  type: type.SECURITY_TOKEN_DECRYPT,
  payload: options
});
