//Axios imports
import axios from "axios";

require('dotenv').config();
/*/
 *  ┌─────────────────────────────────────┐
 *  │ |> Axios Request - Security Token   │
 *  └─────────────────────────────────────┘
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
 *  ┌─────────────────────────────────────┐
 *  │ |> Axios Request - Mock Data        │
 *  └─────────────────────────────────────┘
/*/
export function mockSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url:  process.env.REACT_APP_API_BASE_URL + 
          process.env.REACT_APP_API_VERSION + 
          "/mock-token"
  });
}
