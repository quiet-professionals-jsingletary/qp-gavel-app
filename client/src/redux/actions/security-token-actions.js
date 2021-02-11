/*/
  *  ┌──────────────────────────────────────────┐
  *  │ |> Redux Actions - Security Queries      │
  *  └──────────────────────────────────────────┘
/*/

import {
  SECURITY_TOKEN_CHECK_SAGA,
  SECURITY_TOKEN_SET_SAGA,
  SECURITY_TOKEN_DECRYPT_SAGA,
  SECURITY_TOKEN_FAIL_SAGA,
  SECURITY_TOKEN_SUCCESS_SAGA
} from "../types/security-types";

import {
  SECURITY_TOKEN_CHECK,
  SECURITY_TOKEN_SET,
  SECURITY_TOKEN_DECRYPT,
  SECURITY_TOKEN_FAIL,
  SECURITY_TOKEN_SUCCESS
} from "../types/security-types";

// ACTIONS //
export const checkSecurityToken = options => ({
  type: SECURITY_TOKEN_CHECK,
  payload: options
});

export const checkSecurityTokenSaga = options => ({
  type: SECURITY_TOKEN_CHECK_SAGA,
  payload: options
});

//---

export const setSecurityToken = options => ({
  type: SECURITY_TOKEN_SET,
  payload: options
});

export const setSecurityTokenSaga = options => ({
  type: SECURITY_TOKEN_SET_SAGA,
  payload: options
});

//---

export const securityTokenSuccess = options => ({
  type: SECURITY_TOKEN_SUCCESS,
  payload: options
});

export const securityTokenSuccessSaga = options => ({
  type: SECURITY_TOKEN_SUCCESS_SAGA,
  payload: options
});

//---

export const decryptSecurityToken = options => ({
  type: SECURITY_TOKEN_DECRYPT,
  payload: options
});

export const decryptSecurityTokenSaga = options => ({
  type: SECURITY_TOKEN_DECRYPT_SAGA,
  payload: options
});