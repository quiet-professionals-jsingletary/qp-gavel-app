/*/
  *  ┌─────────────────────────────────┐
  *  │ |> Area Query - Action Types    │
  *  └─────────────────────────────────┘
/*/

// TODO: Refactor all action type names to follow "verbs" standard
//_Sagas
export const SECURITY_TOKEN_CHECK_SAGA = "SECURITY_TOKEN_CHECK_SAGA";
export const SECURITY_TOKEN_SET_SAGA = "SECURITY_TOKEN_SET_SAGA";
export const SECURITY_TOKEN_DECRYPT_SAGA ="SECURITY_TOKEN_DECRYPT_SAGA";
export const SECURITY_TOKEN_FAIL_SAGA = "SECURITY_TOKEN_FAIL_SAGA";
export const SECURITY_TOKEN_SUCCESS_SAGA = "SECURITY_TOKEN_SUCCESS_SAGA";
//_Redux
export const SECURITY_TOKEN_CHECK = "SECURITY_TOKEN_CHECK";
export const SECURITY_TOKEN_SET = "SECURITY_TOKEN_SET";
export const SECURITY_TOKEN_DECRYPT = "SECURITY_TOKEN_DECRYPT";
export const SECURITY_TOKEN_FAIL = "SECURITY_TOKEN_FAIL";
export const SECURITY_TOKEN_SUCCESS = "SECURITY_TOKEN_SUCCESS";