//Axios imports
import axios from "axios";

require('dotenv').config();
/*/
 *  ┌─────────────────────────────┐
 *  │ |> Http Request             │
 *  └─────────────────────────────┘
/*/
export function setSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url:  process.env.REACT_APP_API_BASE_URL + 
          process.env.REACT_APP_API_VERSION + 
          "/security-token"
  });
}

/*/
 *  ┌─────────────────────────────┐
 *  │ |> Http Request             │
 *  └─────────────────────────────┘
/*/
export function mockSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url:  process.env.REACT_APP_API_BASE_URL + 
          process.env.REACT_APP_API_VERSION + 
          "/mock-token"
  });
}
