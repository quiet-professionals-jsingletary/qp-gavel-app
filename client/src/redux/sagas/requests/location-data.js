// Axios imports
import axios from "axios";

require('dotenv').config();

export function locationDataSearchRequest(securityToken) {
  const searchUrl = process.env.REACT_APP_BASE_API_URL + "/api/location-data/search"
  // const securityTokenUrl = "https://staging-bs-api.venntel.com/v1.5/securityToken";
  
  return axios.request({
    method: "post",
    headers: {
      "TempSecurityToken": securityToken
    },
    url: searchUrl
  });
}

export function mockDataSearchRequest() {
  const mockUrl = process.env.REACT_APP_BASE_API_URL + "/api/mock-data";

  return axios.request({
    method: "get",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    url: mockUrl
  });
}
