//Axios imports
import axios from "axios";

require('dotenv').config();
/*/
 *  ┌─────────────────────────────┐
 *  │ |> Axios - Http Request     │
 *  └─────────────────────────────┘
/*/
export function setSecurityTokenRequest() {
  // let headers = {
  //   "Content-Type": "application/json",
  //   "Accept": "application/json",
  //   "Authorization": process.env.REACT_APP_API_KEY
  // };
  
  return axios.request({
    method: "get",
    url: process.env.REACT_APP_API_VERSION + "/security-token"
    
  });
}

/*/
 *  ┌─────────────────────────────┐
 *  │ |> Axios - Http Request     │
 *  └─────────────────────────────┘
/*/
export function mockSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url: process.env.REACT_APP_API_VERSION + "/mock-token"
  });
}
