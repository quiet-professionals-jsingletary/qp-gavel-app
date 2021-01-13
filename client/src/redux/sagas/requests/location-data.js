// Axios imports
import axios from "axios";

require('dotenv').config();

export function locationDataSearchRequest(securityToken) {
  const searchUrl = process.env.REACT_APP_BASE_API_URL + "/location-data/devices";
  
  return axios.request({
    "method": "post",
    "headers": {
      "TempSecurityToken": securityToken,
    },
    "url": searchUrl
  });
}

export function mockDataSearchRequest() {
  const mockUrl = process.env.REACT_APP_BASE_API_URL + "/mock-data";

  return axios.request({
    "method": "get",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    "url": mockUrl
  });
}
