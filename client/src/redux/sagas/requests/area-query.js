// Axios imports
import axios from "axios";

require('dotenv').config();

export function areaQueryRequest(securityToken) {
  const searchUrl = process.env.REACT_APP_API_VERSION + "/location-data/area-query";

  return axios.request({
    "method": "post",
    "headers": {
      "TempSecurityToken": securityToken,
    },
    "url": searchUrl
  });
}

export function mockDataSearchRequest() {
  const mockUrl = process.env.REACT_APP_API_VERSION + "/mock-data";

  return axios.request({
    "method": "get",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    "url": mockUrl
  });
}
