//Axios imports
import axios from "axios";

require('dotenv').config();

export function setSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url: process.env.REACT_APP_BASE_API_URL + "/api/security-token"
  })
}

export function decryptSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url: process.env.REACT_APP_BASE_API_URL + "/api/security-token/decrypt"
  })
}
