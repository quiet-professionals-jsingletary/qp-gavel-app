/*/
 *  ┌─────────────────────────────────────┐
 *  │ |> Axios Request - Security Token   │
 *  └─────────────────────────────────────┘
/*/
export function setSecurityTokenRequest() {
  return axios.request({
    method: "get",
    // url:  process.env.REACT_APP_API_BASE_URL + 
    url:  process.env.REACT_APP_API_LOCAL_URL + 
          process.env.REACT_APP_API_VERSION + 
          "/security-token"
  });
}

require('dotenv').config();

//#region [http]
export function setSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url:  process.env.REACT_APP_API_BASE_URL + 
          process.env.REACT_APP_API_VERSION + 
          "/securities/token"
  });
}
//#endregion
