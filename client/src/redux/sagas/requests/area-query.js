// Axios imports
import axios from "axios";

require('dotenv').config();

export function areaQueryRequest(action) {
  const searchUrl = process.env.REACT_APP_API_VERSION + "/location-data/area-query";
  
  const areaQueryPayload = {
    startDate: action.payload.startDate,
    endDate: action.payload.endDate,
    areas: [{
      longitude: action.payload.longitude,
      latitude: action.payload.latitude,
      radius: action.payload.radius
    }]
  }

  console.log('REQUEST PAYLOAD: ', areaQueryPayload);
  
  return axios.request({
    url: searchUrl,
    method: "POST",
    data: {
      body: areaQueryPayload
    },
    // options: {
    //   params: areaQueryPayload
    // },
    // params: areaQueryPayload,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_KEY,
      "TempSecurityToken": action.payload.TempSecurityToken
    }
  });
}

// export function mockDataSearchRequest() {
//   const mockUrl = process.env.REACT_APP_API_VERSION + "/mock-data";

//   return axios.request({
//     "method": "GET",
//     "headers": {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     "url": mockUrl
//   });
// }
